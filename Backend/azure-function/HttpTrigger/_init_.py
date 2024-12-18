import logging
import azure.functions as func
import json
from azure.cosmos import CosmosClient
import os
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables from .env file
load_dotenv()

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    logging.info(f'Request method: {req.method}')
    logging.info(f'Request headers: {dict(req.headers)}')

    # Get BASEURL from .env and also support localhost development
    base_url = os.getenv("BASEURL")
    allowed_origins = [base_url, "http://localhost:5173"]
    
    # Add CORS headers with multiple origins
    origin = req.headers.get('origin', '')
    headers = {
        "Access-Control-Allow-Origin": origin if origin in allowed_origins else base_url,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    # Handle OPTIONS request for CORS preflight
    if req.method == "OPTIONS":
        return func.HttpResponse(
            status_code=204,
            headers=headers
        )

    try:
        # Get database connection info from .env file
        cosmos_uri = os.getenv("COSMOS_URI")
        cosmos_key = os.getenv("COSMOS_KEY")
        cosmos_database = os.getenv("COSMOS_DATABASE")
        cosmos_container = os.getenv("COSMOS_CONTAINER")

        # Initialize the Cosmos Client
        client = CosmosClient(cosmos_uri, cosmos_key)
        database = client.get_database_client(cosmos_database)
        container = database.get_container_client(cosmos_container)

        # Get current timestamp
        current_time = datetime.utcnow().isoformat()

        # Handle GET request - retrieve current count
        if req.method == "GET":
            counter_item = list(container.query_items(
                query="SELECT * FROM c WHERE c.id = 'visitor_count'",
                enable_cross_partition_query=True
            ))

            if not counter_item:
                # Initialize counter if it doesn't exist
                counter_item = [{
                    "id": "visitor_count",
                    "count": 1,
                    "last_visited": current_time
                }]
                container.create_item(body=counter_item[0])
                return func.HttpResponse(
                    json.dumps({
                        "count": 1,
                        "last_visited": current_time
                    }),
                    mimetype="application/json",
                    headers=headers
                )
            
            # Return both count and last_visited
            return func.HttpResponse(
                json.dumps({
                    "count": counter_item[0]['count'],
                    "last_visited": counter_item[0].get('last_visited', current_time)
                }),
                mimetype="application/json",
                headers=headers
            )

        # Handle POST request - increment counter
        elif req.method == "POST":
            counter_item = list(container.query_items(
                query="SELECT * FROM c WHERE c.id = 'visitor_count'",
                enable_cross_partition_query=True
            ))

            if not counter_item:
                new_count = 1
                counter_item = [{
                    "id": "visitor_count",
                    "count": new_count,
                    "last_visited": current_time
                }]
                container.create_item(body=counter_item[0])
            else:
                new_count = counter_item[0]['count'] + 1
                counter_item[0]['count'] = new_count
                counter_item[0]['last_visited'] = current_time
                
                container.replace_item(
                    item=counter_item[0]['id'],
                    body=counter_item[0]
                )

            return func.HttpResponse(
                json.dumps({
                    "count": new_count,
                    "last_visited": current_time
                }),
                mimetype="application/json",
                headers=headers
            )

    except Exception as e:
        logging.error(f'Error: {str(e)}')
        return func.HttpResponse(
            json.dumps({"error": str(e)}),
            mimetype="application/json",
            status_code=500,
            headers=headers
        )

    return func.HttpResponse(
        "Please use GET to retrieve count or POST to increment count.",
        status_code=400,
        headers=headers
    )