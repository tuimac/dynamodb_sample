def send(message):
    return {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Origin": "*"             
        },
        'body': message
    }
