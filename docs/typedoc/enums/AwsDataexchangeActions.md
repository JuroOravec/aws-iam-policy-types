[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDataexchangeActions

# Enumeration: AwsDataexchangeActions

All IAM policy actions for AWS Data Exchange (DATAEXCHANGE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdataexchange.html

2024-02-12T09:56:51.283Z

## Table of contents

### Enumeration Members

- [CancelJob](AwsDataexchangeActions.md#canceljob)
- [CreateAsset](AwsDataexchangeActions.md#createasset)
- [CreateDataSet](AwsDataexchangeActions.md#createdataset)
- [CreateEventAction](AwsDataexchangeActions.md#createeventaction)
- [CreateJob](AwsDataexchangeActions.md#createjob)
- [CreateRevision](AwsDataexchangeActions.md#createrevision)
- [DeleteAsset](AwsDataexchangeActions.md#deleteasset)
- [DeleteDataSet](AwsDataexchangeActions.md#deletedataset)
- [DeleteEventAction](AwsDataexchangeActions.md#deleteeventaction)
- [DeleteRevision](AwsDataexchangeActions.md#deleterevision)
- [GetAsset](AwsDataexchangeActions.md#getasset)
- [GetDataSet](AwsDataexchangeActions.md#getdataset)
- [GetEventAction](AwsDataexchangeActions.md#geteventaction)
- [GetJob](AwsDataexchangeActions.md#getjob)
- [GetRevision](AwsDataexchangeActions.md#getrevision)
- [ListDataSetRevisions](AwsDataexchangeActions.md#listdatasetrevisions)
- [ListDataSets](AwsDataexchangeActions.md#listdatasets)
- [ListEventActions](AwsDataexchangeActions.md#listeventactions)
- [ListJobs](AwsDataexchangeActions.md#listjobs)
- [ListRevisionAssets](AwsDataexchangeActions.md#listrevisionassets)
- [ListTagsForResource](AwsDataexchangeActions.md#listtagsforresource)
- [PublishDataSet](AwsDataexchangeActions.md#publishdataset)
- [RevokeRevision](AwsDataexchangeActions.md#revokerevision)
- [SendApiAsset](AwsDataexchangeActions.md#sendapiasset)
- [SendDataSetNotification](AwsDataexchangeActions.md#senddatasetnotification)
- [StartJob](AwsDataexchangeActions.md#startjob)
- [TagResource](AwsDataexchangeActions.md#tagresource)
- [UntagResource](AwsDataexchangeActions.md#untagresource)
- [UpdateAsset](AwsDataexchangeActions.md#updateasset)
- [UpdateDataSet](AwsDataexchangeActions.md#updatedataset)
- [UpdateEventAction](AwsDataexchangeActions.md#updateeventaction)
- [UpdateRevision](AwsDataexchangeActions.md#updaterevision)

## Enumeration Members

### CancelJob

• **CancelJob** = ``"dataexchange:CancelJob"``

Grants permission to cancel a job

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_CancelJob.html

#### Defined in

actions/dataexchange.ts:17

___

### CreateAsset

• **CreateAsset** = ``"dataexchange:CreateAsset"``

Grants permission to create an asset (for example, in a Job)

See https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permissions-ref.html

#### Defined in

actions/dataexchange.ts:23

___

### CreateDataSet

• **CreateDataSet** = ``"dataexchange:CreateDataSet"``

Grants permission to create a data set

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_CreateDataSet.html

#### Defined in

actions/dataexchange.ts:29

___

### CreateEventAction

• **CreateEventAction** = ``"dataexchange:CreateEventAction"``

Grants permission to create an event action

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_CreateEventAction.html

#### Defined in

actions/dataexchange.ts:35

___

### CreateJob

• **CreateJob** = ``"dataexchange:CreateJob"``

Grants permission to create a job to import or export assets

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_CreateJob.html

#### Defined in

actions/dataexchange.ts:41

___

### CreateRevision

• **CreateRevision** = ``"dataexchange:CreateRevision"``

Grants permission to create a revision

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_CreateRevision.html

#### Defined in

actions/dataexchange.ts:47

___

### DeleteAsset

• **DeleteAsset** = ``"dataexchange:DeleteAsset"``

Grants permission to delete an asset

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_DeleteAsset.html

#### Defined in

actions/dataexchange.ts:53

___

### DeleteDataSet

• **DeleteDataSet** = ``"dataexchange:DeleteDataSet"``

Grants permission to delete a data set

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_DeleteDataSet.html

#### Defined in

actions/dataexchange.ts:59

___

### DeleteEventAction

• **DeleteEventAction** = ``"dataexchange:DeleteEventAction"``

Grants permission to delete an event action

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_DeleteEventAction.html

#### Defined in

actions/dataexchange.ts:65

___

### DeleteRevision

• **DeleteRevision** = ``"dataexchange:DeleteRevision"``

Grants permission to delete a revision

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_DeleteRevision.html

#### Defined in

actions/dataexchange.ts:71

___

### GetAsset

• **GetAsset** = ``"dataexchange:GetAsset"``

Grants permission to get information about an asset and to export it (for examp
le, in a Job)

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_GetAsset.html

#### Defined in

actions/dataexchange.ts:78

___

### GetDataSet

• **GetDataSet** = ``"dataexchange:GetDataSet"``

Grants permission to get information about a data set

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_GetDataSet.html

#### Defined in

actions/dataexchange.ts:84

___

### GetEventAction

• **GetEventAction** = ``"dataexchange:GetEventAction"``

Grants permission to get an event action

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_GetEventAction.html

#### Defined in

actions/dataexchange.ts:90

___

### GetJob

• **GetJob** = ``"dataexchange:GetJob"``

Grants permission to get information about a job

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_GetJob.html

#### Defined in

actions/dataexchange.ts:96

___

### GetRevision

• **GetRevision** = ``"dataexchange:GetRevision"``

Grants permission to get information about a revision

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_GetRevision.html

#### Defined in

actions/dataexchange.ts:102

___

### ListDataSetRevisions

• **ListDataSetRevisions** = ``"dataexchange:ListDataSetRevisions"``

Grants permission to list the revisions of a data set

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListDataSetRevisions.html

#### Defined in

actions/dataexchange.ts:108

___

### ListDataSets

• **ListDataSets** = ``"dataexchange:ListDataSets"``

Grants permission to list data sets for the account

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListDataSets.html

#### Defined in

actions/dataexchange.ts:114

___

### ListEventActions

• **ListEventActions** = ``"dataexchange:ListEventActions"``

Grants permission to list event actions for the account

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListEventActions.html

#### Defined in

actions/dataexchange.ts:120

___

### ListJobs

• **ListJobs** = ``"dataexchange:ListJobs"``

Grants permission to list jobs for the account

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListJobs.html

#### Defined in

actions/dataexchange.ts:126

___

### ListRevisionAssets

• **ListRevisionAssets** = ``"dataexchange:ListRevisionAssets"``

Grants permission to get list the assets of a revision

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListRevisionAssets.html

#### Defined in

actions/dataexchange.ts:132

___

### ListTagsForResource

• **ListTagsForResource** = ``"dataexchange:ListTagsForResource"``

Grants permission to list the tags that you associated with the specified resou
rce

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_ListTagsForResource.html

#### Defined in

actions/dataexchange.ts:139

___

### PublishDataSet

• **PublishDataSet** = ``"dataexchange:PublishDataSet"``

Grants permission to publish a data set

See https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permissions-ref.html

#### Defined in

actions/dataexchange.ts:145

___

### RevokeRevision

• **RevokeRevision** = ``"dataexchange:RevokeRevision"``

Grants permission to revoke subscriber access to a revision

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_RevokeRevision.html

#### Defined in

actions/dataexchange.ts:151

___

### SendApiAsset

• **SendApiAsset** = ``"dataexchange:SendApiAsset"``

Grants permission to send a request to an API asset

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_SendApiAsset.html

#### Defined in

actions/dataexchange.ts:157

___

### SendDataSetNotification

• **SendDataSetNotification** = ``"dataexchange:SendDataSetNotification"``

Grants permission to send a notification to subscribers of a data set

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_SendDataSetNotification.html

#### Defined in

actions/dataexchange.ts:163

___

### StartJob

• **StartJob** = ``"dataexchange:StartJob"``

Grants permission to start a job

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_StartJob.html

#### Defined in

actions/dataexchange.ts:169

___

### TagResource

• **TagResource** = ``"dataexchange:TagResource"``

Grants permission to add one or more tags to a specified resource

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_TagResource.html

#### Defined in

actions/dataexchange.ts:175

___

### UntagResource

• **UntagResource** = ``"dataexchange:UntagResource"``

Grants permission to remove one or more tags from a specified resource

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_UntagResource.html

#### Defined in

actions/dataexchange.ts:181

___

### UpdateAsset

• **UpdateAsset** = ``"dataexchange:UpdateAsset"``

Grants permission to get update information about an asset

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_UpdateAsset.html

#### Defined in

actions/dataexchange.ts:187

___

### UpdateDataSet

• **UpdateDataSet** = ``"dataexchange:UpdateDataSet"``

Grants permission to update information about a data set

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_UpdateDataSet.html

#### Defined in

actions/dataexchange.ts:193

___

### UpdateEventAction

• **UpdateEventAction** = ``"dataexchange:UpdateEventAction"``

Grants permission to update information for an event action

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_UpdateEventAction.html

#### Defined in

actions/dataexchange.ts:199

___

### UpdateRevision

• **UpdateRevision** = ``"dataexchange:UpdateRevision"``

Grants permission to update information about a revision

See https://docs.aws.amazon.com/data-exchange/latest/apireference/API_UpdateRevision.html

#### Defined in

actions/dataexchange.ts:205
