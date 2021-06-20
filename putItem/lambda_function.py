import json
import logging
import boto3
import traceback
from sendmessage import send

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('test')
except Exception as e:
    logger.error('ERROR: Unexpected error on creating DynamoDB resource.')
    logger.error(e)

def lambda_handler(event, context):
    try:
        table.put_item(
            Item = {
                'name': 'bob',
                'job': 'engineer',
                'age': 22
            }    
        )
        return send({
            'result': 'success'
        })
    except:
        return send({
            'exception': traceback.format_exc()
        })
