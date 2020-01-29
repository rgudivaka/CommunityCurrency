import sys

sys.path.insert(1, './scripts')
from config import CONFIG
import buckets

if __name__ == "__main__":
    ARGS = sys.argv
    
    if ARGS[1].lower() == "delete":
        if ARGS[2].lower() == "web":
            bucket_name = CONFIG["Web"]["S3BucketName"]
            buckets.delete_bucket(bucket_name)
    
    elif ARGS[1].lower() == "create":
        if ARGS[2].lower() == "web":
            bucket_name = CONFIG["Web"]["S3BucketName"]
            buckets.create_bucket(bucket_name)
            buckets.make_bucket_website(bucket_name)
            buckets.update_bucket_policy(bucket_name)
            buckets.upload_directory(bucket_name, "./web")
    
    elif ARGS[1].lower() == "update":
        if ARGS[2].lower() == "web":
            bucket_name = CONFIG["Web"]["S3BucketName"]
            buckets.upload_directory(bucket_name, "./web")
    else:
        print("command not found")