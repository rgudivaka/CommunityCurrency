import json

with open("./config/config.json", "r") as f:
    CONFIG = json.loads(f.read())