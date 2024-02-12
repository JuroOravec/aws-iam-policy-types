[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCognitoSyncActions

# Enumeration: AwsCognitoSyncActions

All IAM policy actions for Amazon Cognito Sync (COGNITO-SYNC)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitosync.html

2024-02-12T09:56:41.280Z

## Table of contents

### Enumeration Members

- [BulkPublish](AwsCognitoSyncActions.md#bulkpublish)
- [DeleteDataset](AwsCognitoSyncActions.md#deletedataset)
- [DescribeDataset](AwsCognitoSyncActions.md#describedataset)
- [DescribeIdentityPoolUsage](AwsCognitoSyncActions.md#describeidentitypoolusage)
- [DescribeIdentityUsage](AwsCognitoSyncActions.md#describeidentityusage)
- [GetBulkPublishDetails](AwsCognitoSyncActions.md#getbulkpublishdetails)
- [GetCognitoEvents](AwsCognitoSyncActions.md#getcognitoevents)
- [GetIdentityPoolConfiguration](AwsCognitoSyncActions.md#getidentitypoolconfiguration)
- [ListDatasets](AwsCognitoSyncActions.md#listdatasets)
- [ListIdentityPoolUsage](AwsCognitoSyncActions.md#listidentitypoolusage)
- [ListRecords](AwsCognitoSyncActions.md#listrecords)
- [RegisterDevice](AwsCognitoSyncActions.md#registerdevice)
- [SetCognitoEvents](AwsCognitoSyncActions.md#setcognitoevents)
- [SetIdentityPoolConfiguration](AwsCognitoSyncActions.md#setidentitypoolconfiguration)
- [SubscribeToDataset](AwsCognitoSyncActions.md#subscribetodataset)
- [UnsubscribeFromDataset](AwsCognitoSyncActions.md#unsubscribefromdataset)
- [UpdateRecords](AwsCognitoSyncActions.md#updaterecords)

## Enumeration Members

### BulkPublish

• **BulkPublish** = ``"cognito-sync:BulkPublish"``

Grants permission to initiate a bulk publish of all existing datasets for an Id
entity Pool to the configured stream

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_BulkPublish.html

#### Defined in

actions/cognito-sync.ts:18

___

### DeleteDataset

• **DeleteDataset** = ``"cognito-sync:DeleteDataset"``

Grants permission to delete a specific dataset

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DeleteDataset.html

#### Defined in

actions/cognito-sync.ts:24

___

### DescribeDataset

• **DescribeDataset** = ``"cognito-sync:DescribeDataset"``

Grants permission to get metadata about a dataset by identity and dataset name

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeDataset.html

#### Defined in

actions/cognito-sync.ts:30

___

### DescribeIdentityPoolUsage

• **DescribeIdentityPoolUsage** = ``"cognito-sync:DescribeIdentityPoolUsage"``

Grants permission to get usage details (for example, data storage) about a part
icular identity pool

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeIdentityPoolUsage.html

#### Defined in

actions/cognito-sync.ts:37

___

### DescribeIdentityUsage

• **DescribeIdentityUsage** = ``"cognito-sync:DescribeIdentityUsage"``

Grants permission to get usage information for an identity, including number of
datasets and data usage

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeIdentityUsage.html

#### Defined in

actions/cognito-sync.ts:44

___

### GetBulkPublishDetails

• **GetBulkPublishDetails** = ``"cognito-sync:GetBulkPublishDetails"``

Grants permission to get the status of the last BulkPublish operation for an id
entity pool

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetBulkPublishDetails.html

#### Defined in

actions/cognito-sync.ts:51

___

### GetCognitoEvents

• **GetCognitoEvents** = ``"cognito-sync:GetCognitoEvents"``

Grants permission to get the events and the corresponding Lambda functions asso
ciated with an identity pool

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetCognitoEvents.html

#### Defined in

actions/cognito-sync.ts:58

___

### GetIdentityPoolConfiguration

• **GetIdentityPoolConfiguration** = ``"cognito-sync:GetIdentityPoolConfiguration"``

Grants permission to get the configuration settings of an identity pool

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetIdentityPoolConfiguration.html

#### Defined in

actions/cognito-sync.ts:64

___

### ListDatasets

• **ListDatasets** = ``"cognito-sync:ListDatasets"``

Grants permission to list datasets for an identity

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListDatasets.html

#### Defined in

actions/cognito-sync.ts:70

___

### ListIdentityPoolUsage

• **ListIdentityPoolUsage** = ``"cognito-sync:ListIdentityPoolUsage"``

Grants permission to get a list of identity pools registered with Cognito

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListIdentityPoolUsage.html

#### Defined in

actions/cognito-sync.ts:76

___

### ListRecords

• **ListRecords** = ``"cognito-sync:ListRecords"``

Grants permission to get paginated records, optionally changed after a particul
ar sync count for a dataset and identity

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListRecords.html

#### Defined in

actions/cognito-sync.ts:83

___

### RegisterDevice

• **RegisterDevice** = ``"cognito-sync:RegisterDevice"``

Grants permission to register a device to receive push sync notifications

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_RegisterDevice.html

#### Defined in

actions/cognito-sync.ts:89

___

### SetCognitoEvents

• **SetCognitoEvents** = ``"cognito-sync:SetCognitoEvents"``

Grants permission to set the AWS Lambda function for a given event type for an
identity pool

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SetCognitoEvents.html

#### Defined in

actions/cognito-sync.ts:96

___

### SetIdentityPoolConfiguration

• **SetIdentityPoolConfiguration** = ``"cognito-sync:SetIdentityPoolConfiguration"``

Grants permission to set the necessary configuration for push sync

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SetIdentityPoolConfiguration.html

#### Defined in

actions/cognito-sync.ts:102

___

### SubscribeToDataset

• **SubscribeToDataset** = ``"cognito-sync:SubscribeToDataset"``

Grants permission to subscribe to receive notifications when a dataset is modif
ied by another device

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SubscribeToDataset.html

#### Defined in

actions/cognito-sync.ts:109

___

### UnsubscribeFromDataset

• **UnsubscribeFromDataset** = ``"cognito-sync:UnsubscribeFromDataset"``

Grants permission to unsubscribe from receiving notifications when a dataset is
modified by another device

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_UnsubscribeFromDataset.html

#### Defined in

actions/cognito-sync.ts:116

___

### UpdateRecords

• **UpdateRecords** = ``"cognito-sync:UpdateRecords"``

Grants permission to post updates to records and add and delete records for a d
ataset and user

See https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_UpdateRecords.html

#### Defined in

actions/cognito-sync.ts:123
