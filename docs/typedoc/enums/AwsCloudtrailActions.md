[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCloudtrailActions

# Enumeration: AwsCloudtrailActions

All IAM policy actions for AWS CloudTrail (CLOUDTRAIL)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtrail.html

2024-02-12T09:56:25.231Z

## Table of contents

### Enumeration Members

- [AddTags](AwsCloudtrailActions.md#addtags)
- [CancelQuery](AwsCloudtrailActions.md#cancelquery)
- [CreateChannel](AwsCloudtrailActions.md#createchannel)
- [CreateEventDataStore](AwsCloudtrailActions.md#createeventdatastore)
- [CreateServiceLinkedChannel](AwsCloudtrailActions.md#createservicelinkedchannel)
- [CreateTrail](AwsCloudtrailActions.md#createtrail)
- [DeleteChannel](AwsCloudtrailActions.md#deletechannel)
- [DeleteEventDataStore](AwsCloudtrailActions.md#deleteeventdatastore)
- [DeleteResourcePolicy](AwsCloudtrailActions.md#deleteresourcepolicy)
- [DeleteServiceLinkedChannel](AwsCloudtrailActions.md#deleteservicelinkedchannel)
- [DeleteTrail](AwsCloudtrailActions.md#deletetrail)
- [DeregisterOrganizationDelegatedAdmin](AwsCloudtrailActions.md#deregisterorganizationdelegatedadmin)
- [DescribeQuery](AwsCloudtrailActions.md#describequery)
- [DescribeTrails](AwsCloudtrailActions.md#describetrails)
- [DisableFederation](AwsCloudtrailActions.md#disablefederation)
- [EnableFederation](AwsCloudtrailActions.md#enablefederation)
- [GetChannel](AwsCloudtrailActions.md#getchannel)
- [GetEventDataStore](AwsCloudtrailActions.md#geteventdatastore)
- [GetEventDataStoreData](AwsCloudtrailActions.md#geteventdatastoredata)
- [GetEventSelectors](AwsCloudtrailActions.md#geteventselectors)
- [GetImport](AwsCloudtrailActions.md#getimport)
- [GetInsightSelectors](AwsCloudtrailActions.md#getinsightselectors)
- [GetQueryResults](AwsCloudtrailActions.md#getqueryresults)
- [GetResourcePolicy](AwsCloudtrailActions.md#getresourcepolicy)
- [GetServiceLinkedChannel](AwsCloudtrailActions.md#getservicelinkedchannel)
- [GetTrail](AwsCloudtrailActions.md#gettrail)
- [GetTrailStatus](AwsCloudtrailActions.md#gettrailstatus)
- [ListChannels](AwsCloudtrailActions.md#listchannels)
- [ListEventDataStores](AwsCloudtrailActions.md#listeventdatastores)
- [ListImportFailures](AwsCloudtrailActions.md#listimportfailures)
- [ListImports](AwsCloudtrailActions.md#listimports)
- [ListPublicKeys](AwsCloudtrailActions.md#listpublickeys)
- [ListQueries](AwsCloudtrailActions.md#listqueries)
- [ListServiceLinkedChannels](AwsCloudtrailActions.md#listservicelinkedchannels)
- [ListTags](AwsCloudtrailActions.md#listtags)
- [ListTrails](AwsCloudtrailActions.md#listtrails)
- [LookupEvents](AwsCloudtrailActions.md#lookupevents)
- [PutEventSelectors](AwsCloudtrailActions.md#puteventselectors)
- [PutInsightSelectors](AwsCloudtrailActions.md#putinsightselectors)
- [PutResourcePolicy](AwsCloudtrailActions.md#putresourcepolicy)
- [RegisterOrganizationDelegatedAdmin](AwsCloudtrailActions.md#registerorganizationdelegatedadmin)
- [RemoveTags](AwsCloudtrailActions.md#removetags)
- [RestoreEventDataStore](AwsCloudtrailActions.md#restoreeventdatastore)
- [StartEventDataStoreIngestion](AwsCloudtrailActions.md#starteventdatastoreingestion)
- [StartImport](AwsCloudtrailActions.md#startimport)
- [StartLogging](AwsCloudtrailActions.md#startlogging)
- [StartQuery](AwsCloudtrailActions.md#startquery)
- [StopEventDataStoreIngestion](AwsCloudtrailActions.md#stopeventdatastoreingestion)
- [StopImport](AwsCloudtrailActions.md#stopimport)
- [StopLogging](AwsCloudtrailActions.md#stoplogging)
- [UpdateChannel](AwsCloudtrailActions.md#updatechannel)
- [UpdateEventDataStore](AwsCloudtrailActions.md#updateeventdatastore)
- [UpdateServiceLinkedChannel](AwsCloudtrailActions.md#updateservicelinkedchannel)
- [UpdateTrail](AwsCloudtrailActions.md#updatetrail)

## Enumeration Members

### AddTags

• **AddTags** = ``"cloudtrail:AddTags"``

Grants permission to add one or more tags to a trail, event data store, or chan
nel, up to a limit of 50

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AddTags.html

#### Defined in

actions/cloudtrail.ts:18

___

### CancelQuery

• **CancelQuery** = ``"cloudtrail:CancelQuery"``

Grants permission to cancel a running query

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CancelQuery.html

#### Defined in

actions/cloudtrail.ts:24

___

### CreateChannel

• **CreateChannel** = ``"cloudtrail:CreateChannel"``

Grants permission to create a channel

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateChannel.html

#### Defined in

actions/cloudtrail.ts:30

___

### CreateEventDataStore

• **CreateEventDataStore** = ``"cloudtrail:CreateEventDataStore"``

Grants permission to create an event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateEventDataStore.html

#### Defined in

actions/cloudtrail.ts:36

___

### CreateServiceLinkedChannel

• **CreateServiceLinkedChannel** = ``"cloudtrail:CreateServiceLinkedChannel"``

Grants permission to create a service-linked channel that specifies the setting
s for delivery of log data to an AWS service

See API_CreateServiceLinkedChannel.html

#### Defined in

actions/cloudtrail.ts:43

___

### CreateTrail

• **CreateTrail** = ``"cloudtrail:CreateTrail"``

Grants permission to create a trail that specifies the settings for delivery of
log data to an Amazon S3 bucket

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateTrail.html

#### Defined in

actions/cloudtrail.ts:50

___

### DeleteChannel

• **DeleteChannel** = ``"cloudtrail:DeleteChannel"``

Grants permission to delete a channel

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteChannel.html

#### Defined in

actions/cloudtrail.ts:56

___

### DeleteEventDataStore

• **DeleteEventDataStore** = ``"cloudtrail:DeleteEventDataStore"``

Grants permission to delete an event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteEventDataStore.html

#### Defined in

actions/cloudtrail.ts:62

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"cloudtrail:DeleteResourcePolicy"``

Grants permission to delete a resource policy from the provided resource

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/cloudtrail.ts:68

___

### DeleteServiceLinkedChannel

• **DeleteServiceLinkedChannel** = ``"cloudtrail:DeleteServiceLinkedChannel"``

Grants permission to delete a service-linked channel

See API_DeleteServiceLinkedChannel.html

#### Defined in

actions/cloudtrail.ts:74

___

### DeleteTrail

• **DeleteTrail** = ``"cloudtrail:DeleteTrail"``

Grants permission to delete a trail

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteTrail.html

#### Defined in

actions/cloudtrail.ts:80

___

### DeregisterOrganizationDelegatedAdmin

• **DeregisterOrganizationDelegatedAdmin** = ``"cloudtrail:DeregisterOrganizationDelegatedAdmin"``

Grants permission to deregister an AWS Organizations member account as a delega
ted administrator

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeregisterOrganizationDelegatedAdmin.html

#### Defined in

actions/cloudtrail.ts:87

___

### DescribeQuery

• **DescribeQuery** = ``"cloudtrail:DescribeQuery"``

Grants permission to list details for the query

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeQuery.html

#### Defined in

actions/cloudtrail.ts:93

___

### DescribeTrails

• **DescribeTrails** = ``"cloudtrail:DescribeTrails"``

Grants permission to list settings for the trails associated with the current r
egion for your account

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeTrails.html

#### Defined in

actions/cloudtrail.ts:100

___

### DisableFederation

• **DisableFederation** = ``"cloudtrail:DisableFederation"``

Grants permission to disable federation of event data store data by using the A
WS Glue Data Catalog

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DisableFederation.html

#### Defined in

actions/cloudtrail.ts:107

___

### EnableFederation

• **EnableFederation** = ``"cloudtrail:EnableFederation"``

Grants permission to enable federation of event data store data by using the AW
S Glue Data Catalog

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_EnableFederation.html

#### Defined in

actions/cloudtrail.ts:114

___

### GetChannel

• **GetChannel** = ``"cloudtrail:GetChannel"``

Grants permission to return information about a specific channel

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetChannel.html

#### Defined in

actions/cloudtrail.ts:120

___

### GetEventDataStore

• **GetEventDataStore** = ``"cloudtrail:GetEventDataStore"``

Grants permission to list settings for the event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventDataStore.html

#### Defined in

actions/cloudtrail.ts:126

___

### GetEventDataStoreData

• **GetEventDataStoreData** = ``"cloudtrail:GetEventDataStoreData"``

Grants permission to get data from an event data store by using the AWS Glue Da
ta Catalog

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/query-federation.html#query-federation-permissions

#### Defined in

actions/cloudtrail.ts:133

___

### GetEventSelectors

• **GetEventSelectors** = ``"cloudtrail:GetEventSelectors"``

Grants permission to list settings for event selectors configured for a trail

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventSelectors.html

#### Defined in

actions/cloudtrail.ts:139

___

### GetImport

• **GetImport** = ``"cloudtrail:GetImport"``

Grants permission to return information about a specific import

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetImport.html

#### Defined in

actions/cloudtrail.ts:145

___

### GetInsightSelectors

• **GetInsightSelectors** = ``"cloudtrail:GetInsightSelectors"``

Grants permission to list CloudTrail Insights selectors that are configured for
a trail or event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetInsightSelectors.html

#### Defined in

actions/cloudtrail.ts:152

___

### GetQueryResults

• **GetQueryResults** = ``"cloudtrail:GetQueryResults"``

Grants permission to fetch results of a complete query

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetQueryResults.html

#### Defined in

actions/cloudtrail.ts:158

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"cloudtrail:GetResourcePolicy"``

Grants permission to get the resource policy attached to the provided resource

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetResourcePolicy.html

#### Defined in

actions/cloudtrail.ts:164

___

### GetServiceLinkedChannel

• **GetServiceLinkedChannel** = ``"cloudtrail:GetServiceLinkedChannel"``

Grants permission to list settings for the service-linked channel

See API_GetServiceLinkedChannel.html

#### Defined in

actions/cloudtrail.ts:170

___

### GetTrail

• **GetTrail** = ``"cloudtrail:GetTrail"``

Grants permission to list settings for the trail

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrail.html

#### Defined in

actions/cloudtrail.ts:176

___

### GetTrailStatus

• **GetTrailStatus** = ``"cloudtrail:GetTrailStatus"``

Grants permission to retrieve a JSON-formatted list of information about the sp
ecified trail

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrailStatus.html

#### Defined in

actions/cloudtrail.ts:183

___

### ListChannels

• **ListChannels** = ``"cloudtrail:ListChannels"``

Grants permission to list the channels in the current account, and their source
names

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListChannels.html

#### Defined in

actions/cloudtrail.ts:190

___

### ListEventDataStores

• **ListEventDataStores** = ``"cloudtrail:ListEventDataStores"``

Grants permission to list event data stores associated with the current region
for your account

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListEventDataStores.html

#### Defined in

actions/cloudtrail.ts:197

___

### ListImportFailures

• **ListImportFailures** = ``"cloudtrail:ListImportFailures"``

Grants permission to return a list of failures for the specified import

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListImportFailures.html

#### Defined in

actions/cloudtrail.ts:203

___

### ListImports

• **ListImports** = ``"cloudtrail:ListImports"``

Grants permission to return information on all imports, or a select set of impo
rts by ImportStatus or Destination

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListImports.html

#### Defined in

actions/cloudtrail.ts:210

___

### ListPublicKeys

• **ListPublicKeys** = ``"cloudtrail:ListPublicKeys"``

Grants permission to list the public keys whose private keys were used to sign
trail digest files within a specified time range

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListPublicKeys.html

#### Defined in

actions/cloudtrail.ts:217

___

### ListQueries

• **ListQueries** = ``"cloudtrail:ListQueries"``

Grants permission to list queries associated with an event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListQueries.html

#### Defined in

actions/cloudtrail.ts:223

___

### ListServiceLinkedChannels

• **ListServiceLinkedChannels** = ``"cloudtrail:ListServiceLinkedChannels"``

Grants permission to list service-linked channels associated with the current r
egion for a specified account

See API_ListServiceLinkedChannels.html

#### Defined in

actions/cloudtrail.ts:230

___

### ListTags

• **ListTags** = ``"cloudtrail:ListTags"``

Grants permission to list the tags for trails, event data stores, or channels i
n the current region

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTags.html

#### Defined in

actions/cloudtrail.ts:237

___

### ListTrails

• **ListTrails** = ``"cloudtrail:ListTrails"``

Grants permission to list trails associated with the current region for your ac
count

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTrails.html

#### Defined in

actions/cloudtrail.ts:244

___

### LookupEvents

• **LookupEvents** = ``"cloudtrail:LookupEvents"``

Grants permission to look up and retrieve metric data for API activity events c
aptured by CloudTrail that create, update, or delete resources in your account

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html

#### Defined in

actions/cloudtrail.ts:251

___

### PutEventSelectors

• **PutEventSelectors** = ``"cloudtrail:PutEventSelectors"``

Grants permission to create and update event selectors for a trail

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutEventSelectors.html

#### Defined in

actions/cloudtrail.ts:257

___

### PutInsightSelectors

• **PutInsightSelectors** = ``"cloudtrail:PutInsightSelectors"``

Grants permission to create and update CloudTrail Insights selectors for a trai
l or event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutInsightSelectors.html

#### Defined in

actions/cloudtrail.ts:264

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"cloudtrail:PutResourcePolicy"``

Grants permission to attach a resource policy to the provided resource

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/cloudtrail.ts:270

___

### RegisterOrganizationDelegatedAdmin

• **RegisterOrganizationDelegatedAdmin** = ``"cloudtrail:RegisterOrganizationDelegatedAdmin"``

Grants permission to register an AWS Organizations member account as a delegate
d administrator

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RegisterOrganizationDelegatedAdmin.html

#### Defined in

actions/cloudtrail.ts:277

___

### RemoveTags

• **RemoveTags** = ``"cloudtrail:RemoveTags"``

Grants permission to remove tags from a trail, event data store, or channel

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RemoveTags.html

#### Defined in

actions/cloudtrail.ts:283

___

### RestoreEventDataStore

• **RestoreEventDataStore** = ``"cloudtrail:RestoreEventDataStore"``

Grants permission to restore an event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RestoreEventDataStore.html

#### Defined in

actions/cloudtrail.ts:289

___

### StartEventDataStoreIngestion

• **StartEventDataStoreIngestion** = ``"cloudtrail:StartEventDataStoreIngestion"``

Grants permission to start ingestion on an event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartEventDataStoreIngestion.html

#### Defined in

actions/cloudtrail.ts:295

___

### StartImport

• **StartImport** = ``"cloudtrail:StartImport"``

Grants permission to start an import of logged trail events from a source S3 bu
cket to a destination event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartImport.html

#### Defined in

actions/cloudtrail.ts:302

___

### StartLogging

• **StartLogging** = ``"cloudtrail:StartLogging"``

Grants permission to start the recording of AWS API calls and log file delivery
for a trail

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartLogging.html

#### Defined in

actions/cloudtrail.ts:309

___

### StartQuery

• **StartQuery** = ``"cloudtrail:StartQuery"``

Grants permission to start a new query on a specified event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartQuery.html

#### Defined in

actions/cloudtrail.ts:315

___

### StopEventDataStoreIngestion

• **StopEventDataStoreIngestion** = ``"cloudtrail:StopEventDataStoreIngestion"``

Grants permission to stop ingestion on an event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopEventDataStoreIngestion.html

#### Defined in

actions/cloudtrail.ts:321

___

### StopImport

• **StopImport** = ``"cloudtrail:StopImport"``

Grants permission to stop a specified import

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopImport.html

#### Defined in

actions/cloudtrail.ts:327

___

### StopLogging

• **StopLogging** = ``"cloudtrail:StopLogging"``

Grants permission to stop the recording of AWS API calls and log file delivery
for a trail

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopLogging.html

#### Defined in

actions/cloudtrail.ts:334

___

### UpdateChannel

• **UpdateChannel** = ``"cloudtrail:UpdateChannel"``

Grants permission to update a channel

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateChannel.html

#### Defined in

actions/cloudtrail.ts:340

___

### UpdateEventDataStore

• **UpdateEventDataStore** = ``"cloudtrail:UpdateEventDataStore"``

Grants permission to update an event data store

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateEventDataStore.html

#### Defined in

actions/cloudtrail.ts:346

___

### UpdateServiceLinkedChannel

• **UpdateServiceLinkedChannel** = ``"cloudtrail:UpdateServiceLinkedChannel"``

Grants permission to update the settings that specify delivery of log files

See API_UpdateServiceLinkedChannel.html

#### Defined in

actions/cloudtrail.ts:352

___

### UpdateTrail

• **UpdateTrail** = ``"cloudtrail:UpdateTrail"``

Grants permission to update the settings that specify delivery of log files

See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateTrail.html

#### Defined in

actions/cloudtrail.ts:358
