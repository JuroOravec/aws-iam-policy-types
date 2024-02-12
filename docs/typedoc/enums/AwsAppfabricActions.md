[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAppfabricActions

# Enumeration: AwsAppfabricActions

All IAM policy actions for AWS AppFabric (APPFABRIC)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappfabric.html

2024-02-12T09:55:59.803Z

## Table of contents

### Enumeration Members

- [BatchGetUserAccessTasks](AwsAppfabricActions.md#batchgetuseraccesstasks)
- [ConnectAppAuthorization](AwsAppfabricActions.md#connectappauthorization)
- [CreateAppAuthorization](AwsAppfabricActions.md#createappauthorization)
- [CreateAppBundle](AwsAppfabricActions.md#createappbundle)
- [CreateIngestion](AwsAppfabricActions.md#createingestion)
- [CreateIngestionDestination](AwsAppfabricActions.md#createingestiondestination)
- [DeleteAppAuthorization](AwsAppfabricActions.md#deleteappauthorization)
- [DeleteAppBundle](AwsAppfabricActions.md#deleteappbundle)
- [DeleteIngestion](AwsAppfabricActions.md#deleteingestion)
- [DeleteIngestionDestination](AwsAppfabricActions.md#deleteingestiondestination)
- [GetAppAuthorization](AwsAppfabricActions.md#getappauthorization)
- [GetAppBundle](AwsAppfabricActions.md#getappbundle)
- [GetIngestion](AwsAppfabricActions.md#getingestion)
- [GetIngestionDestination](AwsAppfabricActions.md#getingestiondestination)
- [ListAppAuthorizations](AwsAppfabricActions.md#listappauthorizations)
- [ListAppBundles](AwsAppfabricActions.md#listappbundles)
- [ListIngestionDestinations](AwsAppfabricActions.md#listingestiondestinations)
- [ListIngestions](AwsAppfabricActions.md#listingestions)
- [ListTagsForResource](AwsAppfabricActions.md#listtagsforresource)
- [StartIngestion](AwsAppfabricActions.md#startingestion)
- [StartUserAccessTasks](AwsAppfabricActions.md#startuseraccesstasks)
- [StopIngestion](AwsAppfabricActions.md#stopingestion)
- [TagResource](AwsAppfabricActions.md#tagresource)
- [UntagResource](AwsAppfabricActions.md#untagresource)
- [UpdateAppAuthorization](AwsAppfabricActions.md#updateappauthorization)
- [UpdateIngestionDestination](AwsAppfabricActions.md#updateingestiondestination)

## Enumeration Members

### BatchGetUserAccessTasks

• **BatchGetUserAccessTasks** = ``"appfabric:BatchGetUserAccessTasks"``

Grants permission to start user access tasks for multiple users

See https://docs.aws.amazon.com/appfabric/latest/api/API_BatchGetUserAccessTasks.html

#### Defined in

actions/appfabric.ts:17

___

### ConnectAppAuthorization

• **ConnectAppAuthorization** = ``"appfabric:ConnectAppAuthorization"``

Grants permission to connect app authorizations

See https://docs.aws.amazon.com/appfabric/latest/api/API_ConnectAppAuthorization.html

#### Defined in

actions/appfabric.ts:23

___

### CreateAppAuthorization

• **CreateAppAuthorization** = ``"appfabric:CreateAppAuthorization"``

Grants permission to create app authorizations for app bundles

See https://docs.aws.amazon.com/appfabric/latest/api/API_CreateAppAuthorization.html

#### Defined in

actions/appfabric.ts:29

___

### CreateAppBundle

• **CreateAppBundle** = ``"appfabric:CreateAppBundle"``

Grants permission to create app bundles in your account

See https://docs.aws.amazon.com/appfabric/latest/api/API_CreateAppBundle.html

#### Defined in

actions/appfabric.ts:35

___

### CreateIngestion

• **CreateIngestion** = ``"appfabric:CreateIngestion"``

Grants permission to create ingestions for app bundles

See https://docs.aws.amazon.com/appfabric/latest/api/API_CreateIngestion.html

#### Defined in

actions/appfabric.ts:41

___

### CreateIngestionDestination

• **CreateIngestionDestination** = ``"appfabric:CreateIngestionDestination"``

Grants permission to create ingestion destinations for app bundles

See https://docs.aws.amazon.com/appfabric/latest/api/API_CreateIngestionDestination.html

#### Defined in

actions/appfabric.ts:47

___

### DeleteAppAuthorization

• **DeleteAppAuthorization** = ``"appfabric:DeleteAppAuthorization"``

Grants permission to delete app authorizations within an app bundle

See https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteAppAuthorization.html

#### Defined in

actions/appfabric.ts:53

___

### DeleteAppBundle

• **DeleteAppBundle** = ``"appfabric:DeleteAppBundle"``

Grants permission to delete app bundles in your account

See https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteAppBundle.html

#### Defined in

actions/appfabric.ts:59

___

### DeleteIngestion

• **DeleteIngestion** = ``"appfabric:DeleteIngestion"``

Grants permission to delete ingestions within an app bundle

See https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteIngestion.html

#### Defined in

actions/appfabric.ts:65

___

### DeleteIngestionDestination

• **DeleteIngestionDestination** = ``"appfabric:DeleteIngestionDestination"``

Grants permission to delete destinations within an ingestion

See https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteIngestionDestination.html

#### Defined in

actions/appfabric.ts:71

___

### GetAppAuthorization

• **GetAppAuthorization** = ``"appfabric:GetAppAuthorization"``

Grants permission to view details about app authorizations

See https://docs.aws.amazon.com/appfabric/latest/api/API_GetAppAuthorization.html

#### Defined in

actions/appfabric.ts:77

___

### GetAppBundle

• **GetAppBundle** = ``"appfabric:GetAppBundle"``

Grants permission to view details about app bundles

See https://docs.aws.amazon.com/appfabric/latest/api/API_GetAppBundle.html

#### Defined in

actions/appfabric.ts:83

___

### GetIngestion

• **GetIngestion** = ``"appfabric:GetIngestion"``

Grants permission to view details about ingestions

See https://docs.aws.amazon.com/appfabric/latest/api/API_GetIngestion.html

#### Defined in

actions/appfabric.ts:89

___

### GetIngestionDestination

• **GetIngestionDestination** = ``"appfabric:GetIngestionDestination"``

Grants permission to view details about ingestion destinations

See https://docs.aws.amazon.com/appfabric/latest/api/API_GetIngestionDestination.html

#### Defined in

actions/appfabric.ts:95

___

### ListAppAuthorizations

• **ListAppAuthorizations** = ``"appfabric:ListAppAuthorizations"``

Grants permission to retrieve a list of app authorizations within an app bundle

See https://docs.aws.amazon.com/appfabric/latest/api/API_ListAppAuthorizations.html

#### Defined in

actions/appfabric.ts:101

___

### ListAppBundles

• **ListAppBundles** = ``"appfabric:ListAppBundles"``

Grants permission to retrieve a list of app bundles in your account

See https://docs.aws.amazon.com/appfabric/latest/api/API_ListAppBundles.html

#### Defined in

actions/appfabric.ts:107

___

### ListIngestionDestinations

• **ListIngestionDestinations** = ``"appfabric:ListIngestionDestinations"``

Grants permission to retrieve a list of destinations within an ingestion

See https://docs.aws.amazon.com/appfabric/latest/api/API_ListIngestionDestinations.html

#### Defined in

actions/appfabric.ts:113

___

### ListIngestions

• **ListIngestions** = ``"appfabric:ListIngestions"``

Grants permission to retrieve a list of ingestions within an app bundle

See https://docs.aws.amazon.com/appfabric/latest/api/API_ListIngestions.html

#### Defined in

actions/appfabric.ts:119

___

### ListTagsForResource

• **ListTagsForResource** = ``"appfabric:ListTagsForResource"``

Grants permission to list tags for AppFabric resources

See https://docs.aws.amazon.com/appfabric/latest/api/API_ListTagsForResource.html

#### Defined in

actions/appfabric.ts:125

___

### StartIngestion

• **StartIngestion** = ``"appfabric:StartIngestion"``

Grants permission to start ingestions

See https://docs.aws.amazon.com/appfabric/latest/api/API_StartIngestion.html

#### Defined in

actions/appfabric.ts:131

___

### StartUserAccessTasks

• **StartUserAccessTasks** = ``"appfabric:StartUserAccessTasks"``

Grants permission to start user access tasks

See https://docs.aws.amazon.com/appfabric/latest/api/API_StartUserAccessTasks.html

#### Defined in

actions/appfabric.ts:137

___

### StopIngestion

• **StopIngestion** = ``"appfabric:StopIngestion"``

Grants permission to stop ingestions

See https://docs.aws.amazon.com/appfabric/latest/api/API_StopIngestion.html

#### Defined in

actions/appfabric.ts:143

___

### TagResource

• **TagResource** = ``"appfabric:TagResource"``

Grants permission to tag AppFabric resources

See https://docs.aws.amazon.com/appfabric/latest/api/API_TagResource.html

#### Defined in

actions/appfabric.ts:149

___

### UntagResource

• **UntagResource** = ``"appfabric:UntagResource"``

Grants permission to untag AppFabric resources

See https://docs.aws.amazon.com/appfabric/latest/api/API_UntagResource.html

#### Defined in

actions/appfabric.ts:155

___

### UpdateAppAuthorization

• **UpdateAppAuthorization** = ``"appfabric:UpdateAppAuthorization"``

Grants permission to update app authorizations within app bundles

See https://docs.aws.amazon.com/appfabric/latest/api/API_UpdateAppAuthorization.html

#### Defined in

actions/appfabric.ts:161

___

### UpdateIngestionDestination

• **UpdateIngestionDestination** = ``"appfabric:UpdateIngestionDestination"``

Grants permission to update destinations within ingestions

See https://docs.aws.amazon.com/appfabric/latest/api/API_UpdateIngestionDestination.html

#### Defined in

actions/appfabric.ts:167
