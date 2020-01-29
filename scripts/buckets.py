import logging
import boto3
from botocore.exceptions import ClientError
import sys
import os
import json

sys.path.insert(1, './scripts')
from config import CONFIG
import utils

def create_bucket(bucket_name):
    try:
        s3_client = boto3.client('s3')
        s3_client.create_bucket(Bucket=bucket_name)
    except ClientError as e:
        logging.error(e)
        return False
    return True

def make_bucket_website(bucket_name, WebsiteConfiguration=CONFIG['Web']['S3StaticWebConfiguration']):
    s3_client = boto3.client('s3')    
    response = s3_client.put_bucket_website(
        Bucket=bucket_name,
        WebsiteConfiguration=WebsiteConfiguration
    )
    print(response)

def update_bucket_policy(bucket_name, policy=CONFIG['Web']['S3BucketPolicy']):
    s3_client = boto3.client('s3')
    response = s3_client.put_bucket_policy(
        Bucket=bucket_name,
        Policy=json.dumps(policy)
    )
    print(response)

def upload_directory(bucket_name, path):
    s3_client = boto3.client('s3')
    for root,dirs,files in os.walk(path):
        for f in files:
            ExtraArgs = {}
            try:
                ExtraArgs["ContentType"] = utils.CONTENT_TYPE_MAP[f.split('.')[-1]]
            except Exception as e:
                ExtraArgs["ContentType"] = "text/plain"
                
            s3_client.upload_file(
                os.path.join(root,f),
                bucket_name,
                os.path.join(root,f)[len(path) + 1:].replace("\\", "/"),
                ExtraArgs=ExtraArgs
            )

def delete_bucket(bucket_name):
    s3_client = boto3.client('s3')
    boto3.resource('s3').Bucket(bucket_name).objects.all().delete()
    s3_client.delete_bucket(
        Bucket=bucket_name
    )