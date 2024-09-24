import os
from dotenv import load_dotenv
from azure.cosmos import CosmosClient, PartitionKey
load_dotenv()