import logging
import azure.functions as func
import json
from azure.cosmos import CosmosClient
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        # Get database connection info from .env file
        cosmos_uri = os.getenv("COSMOS_URI")
        cosmos_key = os.getenv("COSMOS_KEY")
        database_name = os.getenv("DATABASE_NAME")
        container_name = os.getenv("CONTAINER_NAME")

        # Initialize the Cosmos Client
        client = CosmosClient(cosmos_uri, cosmos_key)
        database = client.get_database_client(database_name)
        container = database.get_container_client(container_name)

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
                    "count": 1
                }]
                container.create_item(body=counter_item[0])
                return func.HttpResponse(
                    json.dumps({"count": 1}),
                    mimetype="application/json"
                )
            
            return func.HttpResponse(
                json.dumps({"count": counter_item[0]['count']}),
                mimetype="application/json"
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
                    "count": new_count
                }]
                container.create_item(body=counter_item[0])
            else:
                new_count = counter_item[0]['count'] + 1
                counter_item[0]['count'] = new_count
                container.replace_item(
                    item=counter_item[0]['id'],
                    body=counter_item[0]
                )

            return func.HttpResponse(
                json.dumps({"count": new_count}),
                mimetype="application/json"
            )

    except Exception as e:
        logging.error(f'Error: {str(e)}')
        return func.HttpResponse(
            json.dumps({"error": str(e)}),
            mimetype="application/json",
            status_code=500
        )

    return func.HttpResponse(
        "Please use GET to retrieve count or POST to increment count.",
        status_code=400
    )