import os
from dotenv import load_dotenv
from azure.cosmos import CosmosClient, PartitionKey
load_dotenv()

URL = os.getenv('COSMOS_URI')
KEY = os.getenv('COSMOS_KEY')
DATABASE_NAME = os.getenv('COSMOS_DATABASE')
CONTAINER_NAME = os.getenv('COSMOS_CONTAINER')


# Initialize the Cosmos client
client = CosmosClient(URL, credential=KEY)
database = client.get_database_client(DATABASE_NAME)
container = database.get_container_client(CONTAINER_NAME)