[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsTimestreamActions

# Enumeration: AwsTimestreamActions

All IAM policy actions for Amazon Timestream (TIMESTREAM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontimestream.html

2024-02-12T09:59:30.884Z

## Table of contents

### Enumeration Members

- [CancelQuery](AwsTimestreamActions.md#cancelquery)
- [CreateBatchLoadTask](AwsTimestreamActions.md#createbatchloadtask)
- [CreateDatabase](AwsTimestreamActions.md#createdatabase)
- [CreateScheduledQuery](AwsTimestreamActions.md#createscheduledquery)
- [CreateTable](AwsTimestreamActions.md#createtable)
- [DeleteDatabase](AwsTimestreamActions.md#deletedatabase)
- [DeleteScheduledQuery](AwsTimestreamActions.md#deletescheduledquery)
- [DeleteTable](AwsTimestreamActions.md#deletetable)
- [DescribeBatchLoadTask](AwsTimestreamActions.md#describebatchloadtask)
- [DescribeDatabase](AwsTimestreamActions.md#describedatabase)
- [DescribeEndpoints](AwsTimestreamActions.md#describeendpoints)
- [DescribeScheduledQuery](AwsTimestreamActions.md#describescheduledquery)
- [DescribeTable](AwsTimestreamActions.md#describetable)
- [ExecuteScheduledQuery](AwsTimestreamActions.md#executescheduledquery)
- [GetAwsBackupStatus](AwsTimestreamActions.md#getawsbackupstatus)
- [GetAwsRestoreStatus](AwsTimestreamActions.md#getawsrestorestatus)
- [ListBatchLoadTasks](AwsTimestreamActions.md#listbatchloadtasks)
- [ListDatabases](AwsTimestreamActions.md#listdatabases)
- [ListMeasures](AwsTimestreamActions.md#listmeasures)
- [ListScheduledQueries](AwsTimestreamActions.md#listscheduledqueries)
- [ListTables](AwsTimestreamActions.md#listtables)
- [ListTagsForResource](AwsTimestreamActions.md#listtagsforresource)
- [PrepareQuery](AwsTimestreamActions.md#preparequery)
- [ResumeBatchLoadTask](AwsTimestreamActions.md#resumebatchloadtask)
- [Select](AwsTimestreamActions.md#select)
- [SelectValues](AwsTimestreamActions.md#selectvalues)
- [StartAwsBackupJob](AwsTimestreamActions.md#startawsbackupjob)
- [StartAwsRestoreJob](AwsTimestreamActions.md#startawsrestorejob)
- [TagResource](AwsTimestreamActions.md#tagresource)
- [Unload](AwsTimestreamActions.md#unload)
- [UntagResource](AwsTimestreamActions.md#untagresource)
- [UpdateDatabase](AwsTimestreamActions.md#updatedatabase)
- [UpdateScheduledQuery](AwsTimestreamActions.md#updatescheduledquery)
- [UpdateTable](AwsTimestreamActions.md#updatetable)
- [WriteRecords](AwsTimestreamActions.md#writerecords)

## Enumeration Members

### CancelQuery

• **CancelQuery** = ``"timestream:CancelQuery"``

Grants permission to cancel queries in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_CancelQuery.html

#### Defined in

actions/timestream.ts:17

___

### CreateBatchLoadTask

• **CreateBatchLoadTask** = ``"timestream:CreateBatchLoadTask"``

Grants permission to create a batch load task in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateBatchLoadTask.html

#### Defined in

actions/timestream.ts:23

___

### CreateDatabase

• **CreateDatabase** = ``"timestream:CreateDatabase"``

Grants permission to create a database in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateDatabase.html

#### Defined in

actions/timestream.ts:29

___

### CreateScheduledQuery

• **CreateScheduledQuery** = ``"timestream:CreateScheduledQuery"``

Grants permission to create a scheduled query in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateScheduledQuery.html

#### Defined in

actions/timestream.ts:35

___

### CreateTable

• **CreateTable** = ``"timestream:CreateTable"``

Grants permission to create a table in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateTable.html

#### Defined in

actions/timestream.ts:41

___

### DeleteDatabase

• **DeleteDatabase** = ``"timestream:DeleteDatabase"``

Grants permission to delete a database in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteDatabase.html

#### Defined in

actions/timestream.ts:47

___

### DeleteScheduledQuery

• **DeleteScheduledQuery** = ``"timestream:DeleteScheduledQuery"``

Grants permission to delete a scheduled query in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteScheduledQuery.html

#### Defined in

actions/timestream.ts:53

___

### DeleteTable

• **DeleteTable** = ``"timestream:DeleteTable"``

Grants permission to delete a table in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteTable.html

#### Defined in

actions/timestream.ts:59

___

### DescribeBatchLoadTask

• **DescribeBatchLoadTask** = ``"timestream:DescribeBatchLoadTask"``

Grants permission to describe a batch load task in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeBatchLoadTask.html

#### Defined in

actions/timestream.ts:65

___

### DescribeDatabase

• **DescribeDatabase** = ``"timestream:DescribeDatabase"``

Grants permission to describe a database in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeDatabase.html

#### Defined in

actions/timestream.ts:71

___

### DescribeEndpoints

• **DescribeEndpoints** = ``"timestream:DescribeEndpoints"``

Grants permission to describe timestream endpoints

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeEndpoints.html

#### Defined in

actions/timestream.ts:77

___

### DescribeScheduledQuery

• **DescribeScheduledQuery** = ``"timestream:DescribeScheduledQuery"``

Grants permission to describe a scheduled query in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeScheduledQuery.html

#### Defined in

actions/timestream.ts:83

___

### DescribeTable

• **DescribeTable** = ``"timestream:DescribeTable"``

Grants permission to describe a table in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeTable.html

#### Defined in

actions/timestream.ts:89

___

### ExecuteScheduledQuery

• **ExecuteScheduledQuery** = ``"timestream:ExecuteScheduledQuery"``

Grants permission to execute a scheduled query in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ExecuteScheduledQuery.html

#### Defined in

actions/timestream.ts:95

___

### GetAwsBackupStatus

• **GetAwsBackupStatus** = ``"timestream:GetAwsBackupStatus"``

Grants permission to get Status of a Timestream Table Backup

See https://docs.aws.amazon.com/timestream/latest/developerguide/backups.html

#### Defined in

actions/timestream.ts:101

___

### GetAwsRestoreStatus

• **GetAwsRestoreStatus** = ``"timestream:GetAwsRestoreStatus"``

Grants permission to get Status of a Timestream Table Restore

See https://docs.aws.amazon.com/timestream/latest/developerguide/backups.html

#### Defined in

actions/timestream.ts:107

___

### ListBatchLoadTasks

• **ListBatchLoadTasks** = ``"timestream:ListBatchLoadTasks"``

Grants permission to list batch load tasks in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListBatchLoadTasks.html

#### Defined in

actions/timestream.ts:113

___

### ListDatabases

• **ListDatabases** = ``"timestream:ListDatabases"``

Grants permission to list databases in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListDatabases.html

#### Defined in

actions/timestream.ts:119

___

### ListMeasures

• **ListMeasures** = ``"timestream:ListMeasures"``

Grants permission to list measures of a table in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html

#### Defined in

actions/timestream.ts:125

___

### ListScheduledQueries

• **ListScheduledQueries** = ``"timestream:ListScheduledQueries"``

Grants permission to list scheduled queries in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListScheduledQueries.html

#### Defined in

actions/timestream.ts:131

___

### ListTables

• **ListTables** = ``"timestream:ListTables"``

Grants permission to list tables in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListTables.html

#### Defined in

actions/timestream.ts:137

___

### ListTagsForResource

• **ListTagsForResource** = ``"timestream:ListTagsForResource"``

Grants permission to list tags of a resource in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListTagsForResource.html

#### Defined in

actions/timestream.ts:143

___

### PrepareQuery

• **PrepareQuery** = ``"timestream:PrepareQuery"``

Grants permission to issue prepare queries

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_PrepareQuery.html

#### Defined in

actions/timestream.ts:149

___

### ResumeBatchLoadTask

• **ResumeBatchLoadTask** = ``"timestream:ResumeBatchLoadTask"``

Grants permission to resume a batch load task in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ResumeBatchLoadTask.html

#### Defined in

actions/timestream.ts:155

___

### Select

• **Select** = ``"timestream:Select"``

Grants permission to issue 'select from table' queries

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html

#### Defined in

actions/timestream.ts:161

___

### SelectValues

• **SelectValues** = ``"timestream:SelectValues"``

Grants permission to issue 'select 1' queries

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html

#### Defined in

actions/timestream.ts:167

___

### StartAwsBackupJob

• **StartAwsBackupJob** = ``"timestream:StartAwsBackupJob"``

Grants permission to start a Backup Job for a Timestream Table

See https://docs.aws.amazon.com/timestream/latest/developerguide/backups.html

#### Defined in

actions/timestream.ts:173

___

### StartAwsRestoreJob

• **StartAwsRestoreJob** = ``"timestream:StartAwsRestoreJob"``

Grants permission to start Restore Job for a Backup of Timestream Table

See https://docs.aws.amazon.com/timestream/latest/developerguide/backups.html

#### Defined in

actions/timestream.ts:179

___

### TagResource

• **TagResource** = ``"timestream:TagResource"``

Grants permission to add tags to a resource

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_TagResource.html

#### Defined in

actions/timestream.ts:185

___

### Unload

• **Unload** = ``"timestream:Unload"``

Grants permission to issue Unload queries

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html

#### Defined in

actions/timestream.ts:191

___

### UntagResource

• **UntagResource** = ``"timestream:UntagResource"``

Grants permission to remove a tag from a resource

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_UntagResource.html

#### Defined in

actions/timestream.ts:197

___

### UpdateDatabase

• **UpdateDatabase** = ``"timestream:UpdateDatabase"``

Grants permission to update a database in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateDatabase.html

#### Defined in

actions/timestream.ts:203

___

### UpdateScheduledQuery

• **UpdateScheduledQuery** = ``"timestream:UpdateScheduledQuery"``

Grants permission to update a scheduled query in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateScheduledQuery.html

#### Defined in

actions/timestream.ts:209

___

### UpdateTable

• **UpdateTable** = ``"timestream:UpdateTable"``

Grants permission to update a table in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateTable.html

#### Defined in

actions/timestream.ts:215

___

### WriteRecords

• **WriteRecords** = ``"timestream:WriteRecords"``

Grants permission to ingest data to a table in your account

See https://docs.aws.amazon.com/timestream/latest/developerguide/API_WriteRecords.html

#### Defined in

actions/timestream.ts:221
