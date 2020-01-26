# AWS Setup

These are instructions for a first time setup of the AWS environment. By the end of this guide, you will have

- created a(n) (root) AWS account
- created a Admin sub-account (with command line access)
- created a Developer sub-account

The root AWS account is the main account you will manage for AWS, most importantly for billing purposes. The root account can use IAM (Identity Access Management) to create sub-accounts (called "users") who can create, edit, and destroy AWS resources that will be billed to the root account.

## Creating the root account

First navigate to [the AWS Website](https://aws.amazon.com). Once there, press the "Create an AWS Account" button in the top right corner. Once finished creating the account, you are ready to proceed.

## Creating an admin sub-account (with command line access)

This user account will give full access to your account in terms of creating, editing, and destroying AWS resources but will not be able to change any account information (billing, etc). 

1. Make sure you're logged into AWS (the AWS Console).