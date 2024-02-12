[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCloudshellActions

# Enumeration: AwsCloudshellActions

All IAM policy actions for AWS CloudShell (CLOUDSHELL)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudshell.html

2024-02-12T09:56:24.323Z

## Table of contents

### Enumeration Members

- [CreateEnvironment](AwsCloudshellActions.md#createenvironment)
- [CreateSession](AwsCloudshellActions.md#createsession)
- [DeleteEnvironment](AwsCloudshellActions.md#deleteenvironment)
- [GetEnvironmentStatus](AwsCloudshellActions.md#getenvironmentstatus)
- [GetFileDownloadUrls](AwsCloudshellActions.md#getfiledownloadurls)
- [GetFileUploadUrls](AwsCloudshellActions.md#getfileuploadurls)
- [PutCredentials](AwsCloudshellActions.md#putcredentials)
- [StartEnvironment](AwsCloudshellActions.md#startenvironment)
- [StopEnvironment](AwsCloudshellActions.md#stopenvironment)

## Enumeration Members

### CreateEnvironment

• **CreateEnvironment** = ``"cloudshell:CreateEnvironment"``

Grants permissions to create a CloudShell environment

See https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#CreateEnvironment

#### Defined in

actions/cloudshell.ts:17

___

### CreateSession

• **CreateSession** = ``"cloudshell:CreateSession"``

Grants permissions to connect to a CloudShell environment from the AWS Manageme
nt Console

See https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#CreateSession

#### Defined in

actions/cloudshell.ts:24

___

### DeleteEnvironment

• **DeleteEnvironment** = ``"cloudshell:DeleteEnvironment"``

Grants permission to delete a CloudShell environment

See https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#DeleteEnvironment

#### Defined in

actions/cloudshell.ts:30

___

### GetEnvironmentStatus

• **GetEnvironmentStatus** = ``"cloudshell:GetEnvironmentStatus"``

Grants permission to read a CloudShell environment status

See https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetEnvironmentStatus

#### Defined in

actions/cloudshell.ts:36

___

### GetFileDownloadUrls

• **GetFileDownloadUrls** = ``"cloudshell:GetFileDownloadUrls"``

Grants permissions to download files from a CloudShell environment

See https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetFileDownloadUrls

#### Defined in

actions/cloudshell.ts:42

___

### GetFileUploadUrls

• **GetFileUploadUrls** = ``"cloudshell:GetFileUploadUrls"``

Grants permissions to upload files to a CloudShell environment

See https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetFileUploadUrls

#### Defined in

actions/cloudshell.ts:48

___

### PutCredentials

• **PutCredentials** = ``"cloudshell:PutCredentials"``

Grants permissions to forward console credentials to the environment

See https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#PutCredentials

#### Defined in

actions/cloudshell.ts:54

___

### StartEnvironment

• **StartEnvironment** = ``"cloudshell:StartEnvironment"``

Grants permission to start a stopped CloudShell environment

See https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#StartEnvironment

#### Defined in

actions/cloudshell.ts:60

___

### StopEnvironment

• **StopEnvironment** = ``"cloudshell:StopEnvironment"``

Grants permission to stop a running CloudShell environment

See https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#StopEnvironment

#### Defined in

actions/cloudshell.ts:66
