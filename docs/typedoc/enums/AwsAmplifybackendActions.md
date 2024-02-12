[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAmplifybackendActions

# Enumeration: AwsAmplifybackendActions

All IAM policy actions for AWS Amplify Admin (AMPLIFYBACKEND)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyadmin.html

2024-02-12T09:55:53.381Z

## Table of contents

### Enumeration Members

- [CloneBackend](AwsAmplifybackendActions.md#clonebackend)
- [CreateBackend](AwsAmplifybackendActions.md#createbackend)
- [CreateBackendAPI](AwsAmplifybackendActions.md#createbackendapi)
- [CreateBackendAuth](AwsAmplifybackendActions.md#createbackendauth)
- [CreateBackendConfig](AwsAmplifybackendActions.md#createbackendconfig)
- [CreateBackendStorage](AwsAmplifybackendActions.md#createbackendstorage)
- [CreateToken](AwsAmplifybackendActions.md#createtoken)
- [DeleteBackend](AwsAmplifybackendActions.md#deletebackend)
- [DeleteBackendAPI](AwsAmplifybackendActions.md#deletebackendapi)
- [DeleteBackendAuth](AwsAmplifybackendActions.md#deletebackendauth)
- [DeleteBackendStorage](AwsAmplifybackendActions.md#deletebackendstorage)
- [DeleteToken](AwsAmplifybackendActions.md#deletetoken)
- [GenerateBackendAPIModels](AwsAmplifybackendActions.md#generatebackendapimodels)
- [GetBackend](AwsAmplifybackendActions.md#getbackend)
- [GetBackendAPI](AwsAmplifybackendActions.md#getbackendapi)
- [GetBackendAPIModels](AwsAmplifybackendActions.md#getbackendapimodels)
- [GetBackendAuth](AwsAmplifybackendActions.md#getbackendauth)
- [GetBackendJob](AwsAmplifybackendActions.md#getbackendjob)
- [GetBackendStorage](AwsAmplifybackendActions.md#getbackendstorage)
- [GetToken](AwsAmplifybackendActions.md#gettoken)
- [ImportBackendAuth](AwsAmplifybackendActions.md#importbackendauth)
- [ImportBackendStorage](AwsAmplifybackendActions.md#importbackendstorage)
- [ListBackendJobs](AwsAmplifybackendActions.md#listbackendjobs)
- [ListS3Buckets](AwsAmplifybackendActions.md#lists3buckets)
- [RemoveAllBackends](AwsAmplifybackendActions.md#removeallbackends)
- [RemoveBackendConfig](AwsAmplifybackendActions.md#removebackendconfig)
- [UpdateBackendAPI](AwsAmplifybackendActions.md#updatebackendapi)
- [UpdateBackendAuth](AwsAmplifybackendActions.md#updatebackendauth)
- [UpdateBackendConfig](AwsAmplifybackendActions.md#updatebackendconfig)
- [UpdateBackendJob](AwsAmplifybackendActions.md#updatebackendjob)
- [UpdateBackendStorage](AwsAmplifybackendActions.md#updatebackendstorage)

## Enumeration Members

### CloneBackend

• **CloneBackend** = ``"amplifybackend:CloneBackend"``

Grants permission to clone an existing Amplify Admin backend environment into a
new Amplify Admin backend enviroment

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-environments-backendenvironmentname-clone.html#CloneBackend

#### Defined in

actions/amplifybackend.ts:18

___

### CreateBackend

• **CreateBackend** = ``"amplifybackend:CreateBackend"``

Grants permission to create a new Amplify Admin backend environment by Amplify
appId

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend.html#CreateBackend

#### Defined in

actions/amplifybackend.ts:25

___

### CreateBackendAPI

• **CreateBackendAPI** = ``"amplifybackend:CreateBackendAPI"``

Grants permission to create an API for an existing Amplify Admin backend enviro
nment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api.html#CreateBackendAPI

#### Defined in

actions/amplifybackend.ts:32

___

### CreateBackendAuth

• **CreateBackendAuth** = ``"amplifybackend:CreateBackendAuth"``

Grants permission to create an auth resource for an existing Amplify Admin back
end environment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth.html#CreateBackendAuth

#### Defined in

actions/amplifybackend.ts:39

___

### CreateBackendConfig

• **CreateBackendConfig** = ``"amplifybackend:CreateBackendConfig"``

Grants permission to create a new Amplify Admin backend config by Amplify appId

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config.html#CreateBackendConfig

#### Defined in

actions/amplifybackend.ts:45

___

### CreateBackendStorage

• **CreateBackendStorage** = ``"amplifybackend:CreateBackendStorage"``

Grants permission to create a backend storage resource

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#CreateBackendStorage

#### Defined in

actions/amplifybackend.ts:51

___

### CreateToken

• **CreateToken** = ``"amplifybackend:CreateToken"``

Grants permission to create an Amplify Admin challenge token by appId

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge.html#CreateToken

#### Defined in

actions/amplifybackend.ts:57

___

### DeleteBackend

• **DeleteBackend** = ``"amplifybackend:DeleteBackend"``

Grants permission to delete an existing Amplify Admin backend environment by ap
pId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-environments-backendenvironmentname-remove.html#DeleteBackend

#### Defined in

actions/amplifybackend.ts:64

___

### DeleteBackendAPI

• **DeleteBackendAPI** = ``"amplifybackend:DeleteBackendAPI"``

Grants permission to delete an API of an existing Amplify Admin backend environ
ment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-remove.html#DeleteBackendAPI

#### Defined in

actions/amplifybackend.ts:71

___

### DeleteBackendAuth

• **DeleteBackendAuth** = ``"amplifybackend:DeleteBackendAuth"``

Grants permission to delete an auth resource of an existing Amplify Admin backe
nd environment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname-remove.html#DeleteBackendAuth

#### Defined in

actions/amplifybackend.ts:78

___

### DeleteBackendStorage

• **DeleteBackendStorage** = ``"amplifybackend:DeleteBackendStorage"``

Grants permission to delete a backend storage resource

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#DeleteBackendStorage

#### Defined in

actions/amplifybackend.ts:84

___

### DeleteToken

• **DeleteToken** = ``"amplifybackend:DeleteToken"``

Grants permission to delete an Amplify Admin challenge token by appId

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge-sessionid-remove.html#DeleteToken

#### Defined in

actions/amplifybackend.ts:90

___

### GenerateBackendAPIModels

• **GenerateBackendAPIModels** = ``"amplifybackend:GenerateBackendAPIModels"``

Grants permission to generate models for an API of an existing Amplify Admin ba
ckend environment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-generatemodels.html#GenerateBackendAPIModels

#### Defined in

actions/amplifybackend.ts:97

___

### GetBackend

• **GetBackend** = ``"amplifybackend:GetBackend"``

Grants permission to retrieve an existing Amplify Admin backend environment by
appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-details.html#GetBackend

#### Defined in

actions/amplifybackend.ts:104

___

### GetBackendAPI

• **GetBackendAPI** = ``"amplifybackend:GetBackendAPI"``

Grants permission to retrieve an API of an existing Amplify Admin backend envir
onment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-details.html#GetBackendAPI

#### Defined in

actions/amplifybackend.ts:111

___

### GetBackendAPIModels

• **GetBackendAPIModels** = ``"amplifybackend:GetBackendAPIModels"``

Grants permission to retrieve models for an API of an existing Amplify Admin ba
ckend environment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-getmodels.html#GetBackendAPIModels

#### Defined in

actions/amplifybackend.ts:118

___

### GetBackendAuth

• **GetBackendAuth** = ``"amplifybackend:GetBackendAuth"``

Grants permission to retrieve an auth resource of an existing Amplify Admin bac
kend environment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname-details.html#GetBackendAuth

#### Defined in

actions/amplifybackend.ts:125

___

### GetBackendJob

• **GetBackendJob** = ``"amplifybackend:GetBackendJob"``

Grants permission to retrieve a job of an existing Amplify Admin backend enviro
nment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname-jobid.html#GetBackendJob

#### Defined in

actions/amplifybackend.ts:132

___

### GetBackendStorage

• **GetBackendStorage** = ``"amplifybackend:GetBackendStorage"``

Grants permission to retrieve an existing backend storage resource

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#GetBackendStorage

#### Defined in

actions/amplifybackend.ts:138

___

### GetToken

• **GetToken** = ``"amplifybackend:GetToken"``

Grants permission to retrieve an Amplify Admin challenge token by appId

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge-sessionid.html#GetToken

#### Defined in

actions/amplifybackend.ts:144

___

### ImportBackendAuth

• **ImportBackendAuth** = ``"amplifybackend:ImportBackendAuth"``

Grants permission to import an existing auth resource of an Amplify Admin backe
nd environment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname.html#ImportBackendAuth

#### Defined in

actions/amplifybackend.ts:151

___

### ImportBackendStorage

• **ImportBackendStorage** = ``"amplifybackend:ImportBackendStorage"``

Grants permission to import an existing backend storage resource

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#ImportBackendStorage

#### Defined in

actions/amplifybackend.ts:157

___

### ListBackendJobs

• **ListBackendJobs** = ``"amplifybackend:ListBackendJobs"``

Grants permission to retrieve the jobs of an existing Amplify Admin backend env
ironment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname.html#ListBackendJobs

#### Defined in

actions/amplifybackend.ts:164

___

### ListS3Buckets

• **ListS3Buckets** = ``"amplifybackend:ListS3Buckets"``

Grants permission to retrieve s3 buckets

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#ListS3Buckets

#### Defined in

actions/amplifybackend.ts:170

___

### RemoveAllBackends

• **RemoveAllBackends** = ``"amplifybackend:RemoveAllBackends"``

Grants permission to delete all existing Amplify Admin backend environments by
appId

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-remove.html#RemoveAllBackends

#### Defined in

actions/amplifybackend.ts:177

___

### RemoveBackendConfig

• **RemoveBackendConfig** = ``"amplifybackend:RemoveBackendConfig"``

Grants permission to delete an Amplify Admin backend config by Amplify appId

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config-remove.html#RemoveBackendConfig

#### Defined in

actions/amplifybackend.ts:183

___

### UpdateBackendAPI

• **UpdateBackendAPI** = ``"amplifybackend:UpdateBackendAPI"``

Grants permission to update an API of an existing Amplify Admin backend environ
ment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname.html#UpdateBackendAPI

#### Defined in

actions/amplifybackend.ts:190

___

### UpdateBackendAuth

• **UpdateBackendAuth** = ``"amplifybackend:UpdateBackendAuth"``

Grants permission to update an auth resource of an existing Amplify Admin backe
nd environment by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname.html#UpdateBackendAuth

#### Defined in

actions/amplifybackend.ts:197

___

### UpdateBackendConfig

• **UpdateBackendConfig** = ``"amplifybackend:UpdateBackendConfig"``

Grants permission to update an Amplify Admin backend config by Amplify appId

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config-update.html#UpdateBackendConfig

#### Defined in

actions/amplifybackend.ts:203

___

### UpdateBackendJob

• **UpdateBackendJob** = ``"amplifybackend:UpdateBackendJob"``

Grants permission to update a job of an existing Amplify Admin backend environm
ent by appId and backendEnvironmentName

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname-jobid.html#UpdateBackendJob

#### Defined in

actions/amplifybackend.ts:210

___

### UpdateBackendStorage

• **UpdateBackendStorage** = ``"amplifybackend:UpdateBackendStorage"``

Grants permission to update a backend storage resource

See https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#UpdateBackendStorage

#### Defined in

actions/amplifybackend.ts:216
