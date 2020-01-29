# Community Currency Receptacle Monitoring

###### A project by DISC Northwestern

Community Currency is a non-profit start-up at Northwestern focused on collecting and donating foreign currencies that have no immediate value to those who acquired them abroad. Community Currency converts the money into American dollars and uses it to benefit those in need.

The purpose of this application is to collect data about monitoring receptacles in order to enable notifications and analysis to improve collection methods and process.


## Deployment

From the root directory of the repository, you can use commandline scripts to create, destroy, or update AWS resources. Right now, there only exists basic tools for S3 static website management, the rest need to be added. The functionality of the scripts depends upon the config file (./config/config.json)

#### Examples

```
# creates a S3 bucket, sets the correct permissions for webhosting, and uploads the web files from "./web"

$ python ./scripts/deploy.py create web
```

```
# updates the web files in the S3 bucket. Useful for testing and deploying changes

$ python ./scripts/deploy.py update web
```

```
# deletes the S3 bucket associated with the static website

$ python ./scripts/deploy.py delete web
```
