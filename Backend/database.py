import os
from dotenv import load_dotenv
from azure.cosmos import CosmosClient, PartitionKey
from datetime import datetime, timezone
import uuid
load_dotenv()

URL = os.getenv('COSMOS_URI')
KEY = os.getenv('COSMOS_KEY')
DATABASE_NAME = os.getenv('COSMOS_DATABASE')
CONTAINER_NAME = os.getenv('COSMOS_CONTAINER')


# Initialize the Cosmos client
client = CosmosClient(URL, credential=KEY)
database = client.get_database_client(DATABASE_NAME)
container = database.get_container_client(CONTAINER_NAME)

# Create a document with a timestamp
current_time = datetime.now(timezone.utc).isoformat()

# Create a new item
new_visitor = {
    'id': str(uuid.uuid4()),  # Generate a unique UUID
    "user_id": "test",
    "time_stamp": current_time,
    
}

# Create the item in the container
container.create_item(body=new_visitor)

# Query items
query = "SELECT * FROM c WHERE c.user_id = 'test'"
items = list(container.query_items(
    query=query,
    enable_cross_partition_query=True
))

print(items)