# AWS Setup

These are instructions for a first time setup of the AWS environment. By the end of this guide, you will have

- created a(n) (root) AWS account
- created a Admin sub-account (with command line access)
- created a Developer sub-account

The root AWS account is the main account you will manage for AWS, most importantly for billing purposes. The root account can use IAM (Identity Access Management) to create sub-accounts (called "users") who can create, edit, and destroy AWS resources that will be billed to the root account.

## Creating the root account

First navigate to [the AWS Website](https://aws.amazon.com). Once there, press the "Create an AWS Account" button in the top right corner. Once finished creating the account, you are ready to proceed.

## Creating an admin sub-account (with command line access)

This user account will give full access to your account in terms of creating, editing, and destroying AWS resources but will not be should not be able to change any account information (billing, etc). 

1. Make sure you're logged into AWS (the AWS Console).
2. On the home console page, type into the search bar: "IAM" and go to the IAM service console
3. On the left navigation bar, click "Users"
4. Press "Add user"
5. Name the user "Admin" and check both boxes for Programmatic Access and AWS Console Access. It would probably be best to choose a custom password and disable the "User must create a new password at next sign-in." Press "Next: Permissions"
6. Select "Attach existing policies directly" and search/choose the following policies
    - AdministratorAccess
7. Press "Next" through "Tags" and "Review" and press "Create User."
8. On the confirmation page, copy the Access Key ID and the Secret Access Key to some sort of document for safe keeping. It would also be a good place to store the username, the password, and the console login link (see below):
    - To get the console sign-on link, navigate back to the main IAM console page, navigate to users and then to the specific user you want the sign-on link for. Change to the "Security Credentials" link and you should a "Console sign-on link" in the summary.
    - **DO NOT SAVE KEYS OR PASSWORDS IN THIS REPOSITORY**
    
    
Now that you've completed creating the admin account, you can choose to keep it to yourself, or distribute the information to the lead developer(s) of the project.


## Creating a developer sub-account (with command line access)

This user account will give some, but not all access to your account in terms of creating, editing, and destroying AWS resources but will not be should not be able to change any account information (billing, etc). 

1. Make sure you're logged into AWS (the AWS Console).
2. On the home console page, type into the search bar: "IAM" and go to the IAM service console
3. On the left navigation bar, click "Users"
4. Press "Add user"
5. Name the user "DISCDeveloper" or something relevant to the project and check both boxes for Programmatic Access and AWS Console Access. It would probably be best to choose a custom password and disable the "User must create a new password at next sign-in." Press "Next: Permissions"
6. Select "Attach existing policies directly" and search/choose the following policies
    - AmazonS3FullAccess
    - AWSLambdaFullAccess
    - AmazonAPIGatewayAdministrator
    - AmazonRDSFullAccess
    - IAMReadOnlyAccess
7. Press "Next" through "Tags" and "Review" and press "Create User."
8. On the confirmation page, copy the Access Key ID and the Secret Access Key to some sort of document for safe keeping. It would also be a good place to store the username, the password, and the console login link (see below):
    - To get the console sign-on link, navigate back to the main IAM console page, navigate to users and then to the specific user you want the sign-on link for. Change to the "Security Credentials" link and you should a "Console sign-on link" in the summary.
    - **DO NOT SAVE KEYS OR PASSWORDS IN THIS REPOSITORY**
    
    
Now that you've completed creating the admin account, you can choose to keep it to yourself, or distribute the information to the developer(s) of the project.
