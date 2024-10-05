from flask import Flask, request, jsonify, make_response, abort
from datetime import datetime, timedelta
import time
from dotenv import load_dotenv
from flask_cors import CORS
import os
from azure.cosmos import CosmosClient, PartitionKey
from datetime import datetime, timezone
import uuid
import requests
import json
load_dotenv()


# URL = os.getenv('COSMOS_URI')
# KEY = os.getenv('COSMOS_KEY')
# DATABASE_NAME = os.getenv('COSMOS_DATABASE')
# CONTAINER_NAME = os.getenv('COSMOS_CONTAINER')
TESTURL = os.getenv('TESTURL')
AZURECODE = os.getenv('AZURECODE')
AZURECODE2 = os.getenv('AZURECODE2')
BASEURL = os.getenv('BASEURL')


# Initialize the Cosmos client
# client = CosmosClient(URL, credential=KEY)
# database = client.get_database_client(DATABASE_NAME)
# container = database.get_container_client(CONTAINER_NAME)

app = Flask(__name__)
cors = CORS(app, origins='*')


@app.route('/api/users', methods=['GET'])
def users():
    return jsonify(
        {
            'users': [
                'john',
                'doe',
            ]
        }
    )


@app.route('/api/incrementvisitorcount', methods=['GET'])
def visitorcount():
    url = BASEURL + '?code=' + AZURECODE2
    print(url)

    try:
        # Extract the 'name' and 'message' from the request body
        # request_data = request.get_json()
        # name = request_data.get('name', 'No Name Provided')
        

        # Define headers and payload for the external request
        headers = {'Content-Type': 'application/json'}
        # payload = {'name': name}
        
        # Make the external POST request
        # response = requests.post(url, headers=headers, data=json.dumps(payload))
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise an exception for HTTP errors

        # response = make_response(jsonify({
        #     'visitorcount': 7,
        # }))
    

        # Return the response from the external API as JSON
        print(response.json())
        return jsonify(response.json())
    
    
    except requests.exceptions.HTTPError as err:
        return jsonify({'error': f"HTTP error occurred: {err}"})
    except Exception as err:
        return jsonify({'error': f"Other error occurred: {err}"})


  


# @app.route('/api/new_visit', methods=['POST'])
# def new_visit():
#     # Get the JSON data
#     data = request.get_json()

#     # Extract user information
#     user_id = data.get('user_id')

#     # Create a document with a timestamp
#     current_time = datetime.now(timezone.utc).isoformat()

#     # Create a new item
#     new_visitor = {
#         'id': str(uuid.uuid4()),  # Generate a unique UUID
#         "user_id": user_id,
#         "time_stamp": current_time,


#     }
#     # Create the item in the container
#     created_item = container.create_item(body=new_visitor)
#     print(created_item)

#     if created_item:
#         return jsonify({"visitor_id": created_item['id']})
#     else:
#         abort(500, description="An error occurred on the server")

    




def visit(response):
    # Get the current time
    current_time = datetime.utcnow()
    # Get the 'last_visit' cookie if it exists
    last_visit_cookie = request.cookies.get('last_visit')

    if last_visit_cookie:
        # Convert the cookie timestamp back to datetime
        last_visit_time = datetime.strptime(
            last_visit_cookie, '%Y-%m-%d %H:%M:%S')

        # Check if the time difference is greater than 8 hours
        if current_time - last_visit_time > timedelta(minutes=5):
            new_visit = True
        else:
            new_visit = False
    else:
        # First visit
        new_visit = True

    if new_visit:
        # Update or set the 'last_visit' cookie with the current timestamp
        response.set_cookie('last_visit', current_time.strftime(
            '%Y-%m-%d %H:%M:%S'), max_age=8*3600)


@app.route('/api/testazure', methods=['POST'])
def testazure():
    url = TESTURL + '?code=' + AZURECODE
    print(url)

    try:
        # Extract the 'name' and 'message' from the request body
        request_data = request.get_json()
        name = request_data.get('name', 'No Name Provided')
        

        # Define headers and payload for the external request
        headers = {'Content-Type': 'application/json'}
        payload = {'name': name}
        
        # Make the external POST request
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        response.raise_for_status()  # Raise an exception for HTTP errors

        # Return the response from the external API as JSON
        print(response.json())
        return jsonify(response.json())
    
    
    except requests.exceptions.HTTPError as err:
        return jsonify({'error': f"HTTP error occurred: {err}"})
    except Exception as err:
        return jsonify({'error': f"Other error occurred: {err}"})


    

if __name__ == '__main__':
    app.run(debug=True, port=8080)




# curl -X POST http://127.0.0.1:8080/api/testazure -H "Content-Type: application/json" -d '{"name": "john"}'

# curl -X POST http://127.0.0.1:8080/api/incrementvisitorcount 

# Cosmos DB connection settings
# cosmos_uri = os.environ["CosmosDBEndpointUri"]
# cosmos_key = os.environ["CosmosDBPrimaryKey"]
# database_name = "CloudResume"
# container_name = "ResumeContainer"

# # Create Cosmos DB client
# client = cosmos_client.CosmosClient(cosmos_uri, credential=cosmos_key)
# database = client.get_database_client(database_name)
# container = database.get_container_client(container_name)


# @app.route(route="incrementvisitorcount", auth_level=func.AuthLevel.FUNCTION)
# def incrementvisitorcount(req: func.HttpRequest) -> func.HttpResponse:
    
#     logging.info(client)

   
#     response = {
#         "visitor_count": 8
#     }
#     logging.info('visitor count processed')
#     return func.HttpResponse(
#         json.dumps(response),
#         mimetype="application/json",  # Set the correct content type
#         status_code=200
#     )

