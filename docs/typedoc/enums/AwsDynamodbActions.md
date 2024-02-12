[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDynamodbActions

# Enumeration: AwsDynamodbActions

All IAM policy actions for Amazon DynamoDB (DYNAMODB)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html

2024-02-12T09:57:00.854Z

## Table of contents

### Enumeration Members

- [BatchGetItem](AwsDynamodbActions.md#batchgetitem)
- [BatchWriteItem](AwsDynamodbActions.md#batchwriteitem)
- [ConditionCheckItem](AwsDynamodbActions.md#conditioncheckitem)
- [CreateBackup](AwsDynamodbActions.md#createbackup)
- [CreateGlobalTable](AwsDynamodbActions.md#createglobaltable)
- [CreateTable](AwsDynamodbActions.md#createtable)
- [CreateTableReplica](AwsDynamodbActions.md#createtablereplica)
- [DeleteBackup](AwsDynamodbActions.md#deletebackup)
- [DeleteItem](AwsDynamodbActions.md#deleteitem)
- [DeleteTable](AwsDynamodbActions.md#deletetable)
- [DeleteTableReplica](AwsDynamodbActions.md#deletetablereplica)
- [DescribeBackup](AwsDynamodbActions.md#describebackup)
- [DescribeContinuousBackups](AwsDynamodbActions.md#describecontinuousbackups)
- [DescribeContributorInsights](AwsDynamodbActions.md#describecontributorinsights)
- [DescribeEndpoints](AwsDynamodbActions.md#describeendpoints)
- [DescribeExport](AwsDynamodbActions.md#describeexport)
- [DescribeGlobalTable](AwsDynamodbActions.md#describeglobaltable)
- [DescribeGlobalTableSettings](AwsDynamodbActions.md#describeglobaltablesettings)
- [DescribeImport](AwsDynamodbActions.md#describeimport)
- [DescribeKinesisStreamingDestination](AwsDynamodbActions.md#describekinesisstreamingdestination)
- [DescribeLimits](AwsDynamodbActions.md#describelimits)
- [DescribeReservedCapacity](AwsDynamodbActions.md#describereservedcapacity)
- [DescribeReservedCapacityOfferings](AwsDynamodbActions.md#describereservedcapacityofferings)
- [DescribeStream](AwsDynamodbActions.md#describestream)
- [DescribeTable](AwsDynamodbActions.md#describetable)
- [DescribeTableReplicaAutoScaling](AwsDynamodbActions.md#describetablereplicaautoscaling)
- [DescribeTimeToLive](AwsDynamodbActions.md#describetimetolive)
- [DisableKinesisStreamingDestination](AwsDynamodbActions.md#disablekinesisstreamingdestination)
- [EnableKinesisStreamingDestination](AwsDynamodbActions.md#enablekinesisstreamingdestination)
- [ExportTableToPointInTime](AwsDynamodbActions.md#exporttabletopointintime)
- [GetItem](AwsDynamodbActions.md#getitem)
- [GetRecords](AwsDynamodbActions.md#getrecords)
- [GetResourcePolicy](AwsDynamodbActions.md#getresourcepolicy)
- [GetShardIterator](AwsDynamodbActions.md#getsharditerator)
- [ImportTable](AwsDynamodbActions.md#importtable)
- [ListBackups](AwsDynamodbActions.md#listbackups)
- [ListContributorInsights](AwsDynamodbActions.md#listcontributorinsights)
- [ListExports](AwsDynamodbActions.md#listexports)
- [ListGlobalTables](AwsDynamodbActions.md#listglobaltables)
- [ListImports](AwsDynamodbActions.md#listimports)
- [ListStreams](AwsDynamodbActions.md#liststreams)
- [ListTables](AwsDynamodbActions.md#listtables)
- [ListTagsOfResource](AwsDynamodbActions.md#listtagsofresource)
- [PartiQLDelete](AwsDynamodbActions.md#partiqldelete)
- [PartiQLInsert](AwsDynamodbActions.md#partiqlinsert)
- [PartiQLSelect](AwsDynamodbActions.md#partiqlselect)
- [PartiQLUpdate](AwsDynamodbActions.md#partiqlupdate)
- [PurchaseReservedCapacityOfferings](AwsDynamodbActions.md#purchasereservedcapacityofferings)
- [PutItem](AwsDynamodbActions.md#putitem)
- [Query](AwsDynamodbActions.md#query)
- [RestoreTableFromAwsBackup](AwsDynamodbActions.md#restoretablefromawsbackup)
- [RestoreTableFromBackup](AwsDynamodbActions.md#restoretablefrombackup)
- [RestoreTableToPointInTime](AwsDynamodbActions.md#restoretabletopointintime)
- [Scan](AwsDynamodbActions.md#scan)
- [StartAwsBackupJob](AwsDynamodbActions.md#startawsbackupjob)
- [TagResource](AwsDynamodbActions.md#tagresource)
- [UntagResource](AwsDynamodbActions.md#untagresource)
- [UpdateContinuousBackups](AwsDynamodbActions.md#updatecontinuousbackups)
- [UpdateContributorInsights](AwsDynamodbActions.md#updatecontributorinsights)
- [UpdateGlobalTable](AwsDynamodbActions.md#updateglobaltable)
- [UpdateGlobalTableSettings](AwsDynamodbActions.md#updateglobaltablesettings)
- [UpdateGlobalTableVersion](AwsDynamodbActions.md#updateglobaltableversion)
- [UpdateItem](AwsDynamodbActions.md#updateitem)
- [UpdateTable](AwsDynamodbActions.md#updatetable)
- [UpdateTableReplicaAutoScaling](AwsDynamodbActions.md#updatetablereplicaautoscaling)
- [UpdateTimeToLive](AwsDynamodbActions.md#updatetimetolive)

## Enumeration Members

### BatchGetItem

• **BatchGetItem** = ``"dynamodb:BatchGetItem"``

Grants permission to return the attributes of one or more items from one or mor
e tables

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html

#### Defined in

actions/dynamodb.ts:18

___

### BatchWriteItem

• **BatchWriteItem** = ``"dynamodb:BatchWriteItem"``

Grants permission to put or delete multiple items in one or more tables

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html

#### Defined in

actions/dynamodb.ts:24

___

### ConditionCheckItem

• **ConditionCheckItem** = ``"dynamodb:ConditionCheckItem"``

Grants permission to the ConditionCheckItem operation checks the existence of a
set of attributes for the item with the given primary key

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheck.html

#### Defined in

actions/dynamodb.ts:31

___

### CreateBackup

• **CreateBackup** = ``"dynamodb:CreateBackup"``

Grants permission to create a backup for an existing table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html

#### Defined in

actions/dynamodb.ts:37

___

### CreateGlobalTable

• **CreateGlobalTable** = ``"dynamodb:CreateGlobalTable"``

Grants permission to create a global table from an existing table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html

#### Defined in

actions/dynamodb.ts:43

___

### CreateTable

• **CreateTable** = ``"dynamodb:CreateTable"``

Grants permission to the CreateTable operation adds a new table to your account

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html

#### Defined in

actions/dynamodb.ts:49

___

### CreateTableReplica

• **CreateTableReplica** = ``"dynamodb:CreateTableReplica"``

Grants permission to add a new replica table

See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2gt_IAM.html

#### Defined in

actions/dynamodb.ts:55

___

### DeleteBackup

• **DeleteBackup** = ``"dynamodb:DeleteBackup"``

Grants permission to delete an existing backup of a table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html

#### Defined in

actions/dynamodb.ts:61

___

### DeleteItem

• **DeleteItem** = ``"dynamodb:DeleteItem"``

Grants permission to deletes a single item in a table by primary key

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html

#### Defined in

actions/dynamodb.ts:67

___

### DeleteTable

• **DeleteTable** = ``"dynamodb:DeleteTable"``

Grants permission to the DeleteTable operation which deletes a table and all of
its items

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html

#### Defined in

actions/dynamodb.ts:74

___

### DeleteTableReplica

• **DeleteTableReplica** = ``"dynamodb:DeleteTableReplica"``

Grants permission to delete a replica table and all of its items

See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2gt_IAM.html

#### Defined in

actions/dynamodb.ts:80

___

### DescribeBackup

• **DescribeBackup** = ``"dynamodb:DescribeBackup"``

Grants permission to describe an existing backup of a table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html

#### Defined in

actions/dynamodb.ts:86

___

### DescribeContinuousBackups

• **DescribeContinuousBackups** = ``"dynamodb:DescribeContinuousBackups"``

Grants permission to check the status of the backup restore settings on the spe
cified table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html

#### Defined in

actions/dynamodb.ts:93

___

### DescribeContributorInsights

• **DescribeContributorInsights** = ``"dynamodb:DescribeContributorInsights"``

Grants permission to describe the contributor insights status and related detai
ls for a given table or global secondary index

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html

#### Defined in

actions/dynamodb.ts:100

___

### DescribeEndpoints

• **DescribeEndpoints** = ``"dynamodb:DescribeEndpoints"``

Grants permission to return the regional endpoint information

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeEndpoints.html

#### Defined in

actions/dynamodb.ts:106

___

### DescribeExport

• **DescribeExport** = ``"dynamodb:DescribeExport"``

Grants permission to describe an existing Export of a table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html

#### Defined in

actions/dynamodb.ts:112

___

### DescribeGlobalTable

• **DescribeGlobalTable** = ``"dynamodb:DescribeGlobalTable"``

Grants permission to return information about the specified global table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html

#### Defined in

actions/dynamodb.ts:118

___

### DescribeGlobalTableSettings

• **DescribeGlobalTableSettings** = ``"dynamodb:DescribeGlobalTableSettings"``

Grants permission to return settings information about the specified global tab
le

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html

#### Defined in

actions/dynamodb.ts:125

___

### DescribeImport

• **DescribeImport** = ``"dynamodb:DescribeImport"``

Grants permission to describe an existing import

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeImport.html

#### Defined in

actions/dynamodb.ts:131

___

### DescribeKinesisStreamingDestination

• **DescribeKinesisStreamingDestination** = ``"dynamodb:DescribeKinesisStreamingDestination"``

Grants permission to grant permission to describe the status of Kinesis streami
ng and related details for a given table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html

#### Defined in

actions/dynamodb.ts:138

___

### DescribeLimits

• **DescribeLimits** = ``"dynamodb:DescribeLimits"``

Grants permission to return the current provisioned-capacity limits for your AW
S account in a region, both for the region as a whole and for any one DynamoDB
table that you create there

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html

#### Defined in

actions/dynamodb.ts:146

___

### DescribeReservedCapacity

• **DescribeReservedCapacity** = ``"dynamodb:DescribeReservedCapacity"``

Grants permission to describe one or more of the Reserved Capacity purchased

See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/iam-policy-prevent-purchase-reserved-capacity.html

#### Defined in

actions/dynamodb.ts:152

___

### DescribeReservedCapacityOfferings

• **DescribeReservedCapacityOfferings** = ``"dynamodb:DescribeReservedCapacityOfferings"``

Grants permission to describe Reserved Capacity offerings that are available fo
r purchase

See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/iam-policy-prevent-purchase-reserved-capacity.html

#### Defined in

actions/dynamodb.ts:159

___

### DescribeStream

• **DescribeStream** = ``"dynamodb:DescribeStream"``

Grants permission to return information about a stream, including the current s
tatus of the stream, its Amazon Resource Name (ARN), the composition of its sha
rds, and its corresponding DynamoDB table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_DescribeStream.html

#### Defined in

actions/dynamodb.ts:167

___

### DescribeTable

• **DescribeTable** = ``"dynamodb:DescribeTable"``

Grants permission to return information about the table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html

#### Defined in

actions/dynamodb.ts:173

___

### DescribeTableReplicaAutoScaling

• **DescribeTableReplicaAutoScaling** = ``"dynamodb:DescribeTableReplicaAutoScaling"``

Grants permission to describe the auto scaling settings across all replicas of
the global table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html

#### Defined in

actions/dynamodb.ts:180

___

### DescribeTimeToLive

• **DescribeTimeToLive** = ``"dynamodb:DescribeTimeToLive"``

Grants permission to give a description of the Time to Live (TTL) status on the
specified table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html

#### Defined in

actions/dynamodb.ts:187

___

### DisableKinesisStreamingDestination

• **DisableKinesisStreamingDestination** = ``"dynamodb:DisableKinesisStreamingDestination"``

Grants permission to grant permission to stop replication from the DynamoDB tab
le to the Kinesis data stream

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html

#### Defined in

actions/dynamodb.ts:194

___

### EnableKinesisStreamingDestination

• **EnableKinesisStreamingDestination** = ``"dynamodb:EnableKinesisStreamingDestination"``

Grants permission to grant permission to start table data replication to the sp
ecified Kinesis data stream at a timestamp chosen during the enable workflow

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html

#### Defined in

actions/dynamodb.ts:201

___

### ExportTableToPointInTime

• **ExportTableToPointInTime** = ``"dynamodb:ExportTableToPointInTime"``

Grants permission to initiate an Export of a DynamoDB table to S3

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html

#### Defined in

actions/dynamodb.ts:207

___

### GetItem

• **GetItem** = ``"dynamodb:GetItem"``

Grants permission to the GetItem operation that returns a set of attributes for
the item with the given primary key

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html

#### Defined in

actions/dynamodb.ts:214

___

### GetRecords

• **GetRecords** = ``"dynamodb:GetRecords"``

Grants permission to retrieve the stream records from a given shard

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetRecords.html

#### Defined in

actions/dynamodb.ts:220

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"dynamodb:GetResourcePolicy"``

Grants permission to get a resource-based policy

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html

#### Defined in

actions/dynamodb.ts:226

___

### GetShardIterator

• **GetShardIterator** = ``"dynamodb:GetShardIterator"``

Grants permission to return a shard iterator

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html

#### Defined in

actions/dynamodb.ts:232

___

### ImportTable

• **ImportTable** = ``"dynamodb:ImportTable"``

Grants permission to initiate an import from S3 to a DynamoDB table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ImportTable.html

#### Defined in

actions/dynamodb.ts:238

___

### ListBackups

• **ListBackups** = ``"dynamodb:ListBackups"``

Grants permission to list backups associated with the account and endpoint

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html

#### Defined in

actions/dynamodb.ts:244

___

### ListContributorInsights

• **ListContributorInsights** = ``"dynamodb:ListContributorInsights"``

Grants permission to list the ContributorInsightsSummary for all tables and glo
bal secondary indexes associated with the current account and endpoint

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html

#### Defined in

actions/dynamodb.ts:251

___

### ListExports

• **ListExports** = ``"dynamodb:ListExports"``

Grants permission to list exports associated with the account and endpoint

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html

#### Defined in

actions/dynamodb.ts:257

___

### ListGlobalTables

• **ListGlobalTables** = ``"dynamodb:ListGlobalTables"``

Grants permission to list all global tables that have a replica in the specifie
d region

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html

#### Defined in

actions/dynamodb.ts:264

___

### ListImports

• **ListImports** = ``"dynamodb:ListImports"``

Grants permission to list imports associated with the account and endpoint

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListImports.html

#### Defined in

actions/dynamodb.ts:270

___

### ListStreams

• **ListStreams** = ``"dynamodb:ListStreams"``

Grants permission to return an array of stream ARNs associated with the current
account and endpoint

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_ListStreams.html

#### Defined in

actions/dynamodb.ts:277

___

### ListTables

• **ListTables** = ``"dynamodb:ListTables"``

Grants permission to return an array of table names associated with the current
account and endpoint

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html

#### Defined in

actions/dynamodb.ts:284

___

### ListTagsOfResource

• **ListTagsOfResource** = ``"dynamodb:ListTagsOfResource"``

Grants permission to list all tags on an Amazon DynamoDB resource

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html

#### Defined in

actions/dynamodb.ts:290

___

### PartiQLDelete

• **PartiQLDelete** = ``"dynamodb:PartiQLDelete"``

Grants permission to delete a single item in a table by primary key

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html

#### Defined in

actions/dynamodb.ts:296

___

### PartiQLInsert

• **PartiQLInsert** = ``"dynamodb:PartiQLInsert"``

Grants permission to create a new item, if an item with same primary key does n
ot exist in the table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html

#### Defined in

actions/dynamodb.ts:303

___

### PartiQLSelect

• **PartiQLSelect** = ``"dynamodb:PartiQLSelect"``

Grants permission to read a set of attributes for items from a table or index

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html

#### Defined in

actions/dynamodb.ts:309

___

### PartiQLUpdate

• **PartiQLUpdate** = ``"dynamodb:PartiQLUpdate"``

Grants permission to edit an existing item's attributes

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html

#### Defined in

actions/dynamodb.ts:315

___

### PurchaseReservedCapacityOfferings

• **PurchaseReservedCapacityOfferings** = ``"dynamodb:PurchaseReservedCapacityOfferings"``

Grants permission to purchases reserved capacity for use with your account

See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/iam-policy-prevent-purchase-reserved-capacity.html

#### Defined in

actions/dynamodb.ts:321

___

### PutItem

• **PutItem** = ``"dynamodb:PutItem"``

Grants permission to create a new item, or replace an old item with a new item

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html

#### Defined in

actions/dynamodb.ts:327

___

### Query

• **Query** = ``"dynamodb:Query"``

Grants permission to use the primary key of a table or a secondary index to dir
ectly access items from that table or index

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html

#### Defined in

actions/dynamodb.ts:334

___

### RestoreTableFromAwsBackup

• **RestoreTableFromAwsBackup** = ``"dynamodb:RestoreTableFromAwsBackup"``

Grants permission to create a new table from recovery point on AWS Backup

See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsageNotesAWS.html

#### Defined in

actions/dynamodb.ts:340

___

### RestoreTableFromBackup

• **RestoreTableFromBackup** = ``"dynamodb:RestoreTableFromBackup"``

Grants permission to create a new table from an existing backup

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html

#### Defined in

actions/dynamodb.ts:346

___

### RestoreTableToPointInTime

• **RestoreTableToPointInTime** = ``"dynamodb:RestoreTableToPointInTime"``

Grants permission to restore a table to a point in time

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html

#### Defined in

actions/dynamodb.ts:352

___

### Scan

• **Scan** = ``"dynamodb:Scan"``

Grants permission to return one or more items and item attributes by accessing
every item in a table or a secondary index

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html

#### Defined in

actions/dynamodb.ts:359

___

### StartAwsBackupJob

• **StartAwsBackupJob** = ``"dynamodb:StartAwsBackupJob"``

Grants permission to create a backup on AWS Backup with advanced features enabl
ed

See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsageNotesAWS.html

#### Defined in

actions/dynamodb.ts:366

___

### TagResource

• **TagResource** = ``"dynamodb:TagResource"``

Grants permission to associate a set of tags with an Amazon DynamoDB resource

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html

#### Defined in

actions/dynamodb.ts:372

___

### UntagResource

• **UntagResource** = ``"dynamodb:UntagResource"``

Grants permission to remove the association of tags from an Amazon DynamoDB res
ource

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html

#### Defined in

actions/dynamodb.ts:379

___

### UpdateContinuousBackups

• **UpdateContinuousBackups** = ``"dynamodb:UpdateContinuousBackups"``

Grants permission to enable or disable continuous backups

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html

#### Defined in

actions/dynamodb.ts:385

___

### UpdateContributorInsights

• **UpdateContributorInsights** = ``"dynamodb:UpdateContributorInsights"``

Grants permission to update the status for contributor insights for a specific
table or global secondary index

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html

#### Defined in

actions/dynamodb.ts:392

___

### UpdateGlobalTable

• **UpdateGlobalTable** = ``"dynamodb:UpdateGlobalTable"``

Grants permission to add or remove replicas in the specified global table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html

#### Defined in

actions/dynamodb.ts:398

___

### UpdateGlobalTableSettings

• **UpdateGlobalTableSettings** = ``"dynamodb:UpdateGlobalTableSettings"``

Grants permission to update settings of the specified global table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html

#### Defined in

actions/dynamodb.ts:404

___

### UpdateGlobalTableVersion

• **UpdateGlobalTableVersion** = ``"dynamodb:UpdateGlobalTableVersion"``

Grants permission to update version of the specified global table

See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html

#### Defined in

actions/dynamodb.ts:410

___

### UpdateItem

• **UpdateItem** = ``"dynamodb:UpdateItem"``

Grants permission to edit an existing item's attributes, or adds a new item to
the table if it does not already exist

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html

#### Defined in

actions/dynamodb.ts:417

___

### UpdateTable

• **UpdateTable** = ``"dynamodb:UpdateTable"``

Grants permission to modify the provisioned throughput settings, global seconda
ry indexes, or DynamoDB Streams settings for a given table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html

#### Defined in

actions/dynamodb.ts:424

___

### UpdateTableReplicaAutoScaling

• **UpdateTableReplicaAutoScaling** = ``"dynamodb:UpdateTableReplicaAutoScaling"``

Grants permission to update auto scaling settings on your replica table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html

#### Defined in

actions/dynamodb.ts:430

___

### UpdateTimeToLive

• **UpdateTimeToLive** = ``"dynamodb:UpdateTimeToLive"``

Grants permission to enable or disable TTL for the specified table

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html

#### Defined in

actions/dynamodb.ts:436
