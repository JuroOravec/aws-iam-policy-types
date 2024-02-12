[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsNeptuneDbActions

# Enumeration: AwsNeptuneDbActions

All IAM policy actions for Amazon Neptune (NEPTUNE-DB)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptune.html

2024-02-12T09:58:27.839Z

## Table of contents

### Enumeration Members

- [CancelLoaderJob](AwsNeptuneDbActions.md#cancelloaderjob)
- [CancelMLDataProcessingJob](AwsNeptuneDbActions.md#cancelmldataprocessingjob)
- [CancelMLModelTrainingJob](AwsNeptuneDbActions.md#cancelmlmodeltrainingjob)
- [CancelMLModelTransformJob](AwsNeptuneDbActions.md#cancelmlmodeltransformjob)
- [CancelQuery](AwsNeptuneDbActions.md#cancelquery)
- [CreateMLEndpoint](AwsNeptuneDbActions.md#createmlendpoint)
- [DeleteDataViaQuery](AwsNeptuneDbActions.md#deletedataviaquery)
- [DeleteMLEndpoint](AwsNeptuneDbActions.md#deletemlendpoint)
- [DeleteStatistics](AwsNeptuneDbActions.md#deletestatistics)
- [GetEngineStatus](AwsNeptuneDbActions.md#getenginestatus)
- [GetGraphSummary](AwsNeptuneDbActions.md#getgraphsummary)
- [GetLoaderJobStatus](AwsNeptuneDbActions.md#getloaderjobstatus)
- [GetMLDataProcessingJobStatus](AwsNeptuneDbActions.md#getmldataprocessingjobstatus)
- [GetMLEndpointStatus](AwsNeptuneDbActions.md#getmlendpointstatus)
- [GetMLModelTrainingJobStatus](AwsNeptuneDbActions.md#getmlmodeltrainingjobstatus)
- [GetMLModelTransformJobStatus](AwsNeptuneDbActions.md#getmlmodeltransformjobstatus)
- [GetQueryStatus](AwsNeptuneDbActions.md#getquerystatus)
- [GetStatisticsStatus](AwsNeptuneDbActions.md#getstatisticsstatus)
- [GetStreamRecords](AwsNeptuneDbActions.md#getstreamrecords)
- [ListLoaderJobs](AwsNeptuneDbActions.md#listloaderjobs)
- [ListMLDataProcessingJobs](AwsNeptuneDbActions.md#listmldataprocessingjobs)
- [ListMLEndpoints](AwsNeptuneDbActions.md#listmlendpoints)
- [ListMLModelTrainingJobs](AwsNeptuneDbActions.md#listmlmodeltrainingjobs)
- [ListMLModelTransformJobs](AwsNeptuneDbActions.md#listmlmodeltransformjobs)
- [ManageStatistics](AwsNeptuneDbActions.md#managestatistics)
- [ReadDataViaQuery](AwsNeptuneDbActions.md#readdataviaquery)
- [ResetDatabase](AwsNeptuneDbActions.md#resetdatabase)
- [StartLoaderJob](AwsNeptuneDbActions.md#startloaderjob)
- [StartMLDataProcessingJob](AwsNeptuneDbActions.md#startmldataprocessingjob)
- [StartMLModelTrainingJob](AwsNeptuneDbActions.md#startmlmodeltrainingjob)
- [StartMLModelTransformJob](AwsNeptuneDbActions.md#startmlmodeltransformjob)
- [WriteDataViaQuery](AwsNeptuneDbActions.md#writedataviaquery)
- [connect](AwsNeptuneDbActions.md#connect)

## Enumeration Members

### CancelLoaderJob

• **CancelLoaderJob** = ``"neptune-db:CancelLoaderJob"``

Grants permission to cancel a loader job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelloaderjob

#### Defined in

actions/neptune-db.ts:17

___

### CancelMLDataProcessingJob

• **CancelMLDataProcessingJob** = ``"neptune-db:CancelMLDataProcessingJob"``

Grants permission to cancel an ML data processing job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelmldataprocessingjob

#### Defined in

actions/neptune-db.ts:23

___

### CancelMLModelTrainingJob

• **CancelMLModelTrainingJob** = ``"neptune-db:CancelMLModelTrainingJob"``

Grants permission to cancel an ML model training job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelmlmodeltrainingjob

#### Defined in

actions/neptune-db.ts:29

___

### CancelMLModelTransformJob

• **CancelMLModelTransformJob** = ``"neptune-db:CancelMLModelTransformJob"``

Grants permission to cancel an ML model transform job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelmlmodeltransformjob

#### Defined in

actions/neptune-db.ts:35

___

### CancelQuery

• **CancelQuery** = ``"neptune-db:CancelQuery"``

Grants permission to cancel a query

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelquery

#### Defined in

actions/neptune-db.ts:41

___

### CreateMLEndpoint

• **CreateMLEndpoint** = ``"neptune-db:CreateMLEndpoint"``

Grants permission to create an ML endpoint

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#createmlendpoint

#### Defined in

actions/neptune-db.ts:47

___

### DeleteDataViaQuery

• **DeleteDataViaQuery** = ``"neptune-db:DeleteDataViaQuery"``

Grants permission to run delete data via query APIs on database

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#deletedataviaquery

#### Defined in

actions/neptune-db.ts:53

___

### DeleteMLEndpoint

• **DeleteMLEndpoint** = ``"neptune-db:DeleteMLEndpoint"``

Grants permission to delete an ML endpoint

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#deletemlendpoint

#### Defined in

actions/neptune-db.ts:59

___

### DeleteStatistics

• **DeleteStatistics** = ``"neptune-db:DeleteStatistics"``

Grants permission to delete all the statistics in the database

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#deletestatistics

#### Defined in

actions/neptune-db.ts:65

___

### GetEngineStatus

• **GetEngineStatus** = ``"neptune-db:GetEngineStatus"``

Grants permission to check the status of the Neptune engine

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getenginestatus

#### Defined in

actions/neptune-db.ts:71

___

### GetGraphSummary

• **GetGraphSummary** = ``"neptune-db:GetGraphSummary"``

Grants permission to get the graph summary from the database

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getgraphsummary

#### Defined in

actions/neptune-db.ts:77

___

### GetLoaderJobStatus

• **GetLoaderJobStatus** = ``"neptune-db:GetLoaderJobStatus"``

Grants permission to check the status of a loader job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getloaderjobstatus

#### Defined in

actions/neptune-db.ts:83

___

### GetMLDataProcessingJobStatus

• **GetMLDataProcessingJobStatus** = ``"neptune-db:GetMLDataProcessingJobStatus"``

Grants permission to check the status of an ML data processing job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getmldataprocessingjobstatus

#### Defined in

actions/neptune-db.ts:89

___

### GetMLEndpointStatus

• **GetMLEndpointStatus** = ``"neptune-db:GetMLEndpointStatus"``

Grants permission to check the status of an ML endpoint

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getmlendpointstatus

#### Defined in

actions/neptune-db.ts:95

___

### GetMLModelTrainingJobStatus

• **GetMLModelTrainingJobStatus** = ``"neptune-db:GetMLModelTrainingJobStatus"``

Grants permission to check the status of an ML model training job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getmlmodeltrainingjobstatus

#### Defined in

actions/neptune-db.ts:101

___

### GetMLModelTransformJobStatus

• **GetMLModelTransformJobStatus** = ``"neptune-db:GetMLModelTransformJobStatus"``

Grants permission to check the status of an ML model transform job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getmlmodeltransformjobstatus

#### Defined in

actions/neptune-db.ts:107

___

### GetQueryStatus

• **GetQueryStatus** = ``"neptune-db:GetQueryStatus"``

Grants permission to check the status of all active queries

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getquerystatus

#### Defined in

actions/neptune-db.ts:113

___

### GetStatisticsStatus

• **GetStatisticsStatus** = ``"neptune-db:GetStatisticsStatus"``

Grants permission to check the status of statistics of the database

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getstatisticsstatus

#### Defined in

actions/neptune-db.ts:119

___

### GetStreamRecords

• **GetStreamRecords** = ``"neptune-db:GetStreamRecords"``

Grants permission to fetch stream records from Neptune

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getstreamrecords

#### Defined in

actions/neptune-db.ts:125

___

### ListLoaderJobs

• **ListLoaderJobs** = ``"neptune-db:ListLoaderJobs"``

Grants permission to list all the loader jobs

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listloaderjobs

#### Defined in

actions/neptune-db.ts:131

___

### ListMLDataProcessingJobs

• **ListMLDataProcessingJobs** = ``"neptune-db:ListMLDataProcessingJobs"``

Grants permission to list all the ML data processing jobs

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listmldataprocessingjobs

#### Defined in

actions/neptune-db.ts:137

___

### ListMLEndpoints

• **ListMLEndpoints** = ``"neptune-db:ListMLEndpoints"``

Grants permission to list all the ML endpoints

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listmlendpoints

#### Defined in

actions/neptune-db.ts:143

___

### ListMLModelTrainingJobs

• **ListMLModelTrainingJobs** = ``"neptune-db:ListMLModelTrainingJobs"``

Grants permission to list all the ML model training jobs

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listmlmodeltrainingjobs

#### Defined in

actions/neptune-db.ts:149

___

### ListMLModelTransformJobs

• **ListMLModelTransformJobs** = ``"neptune-db:ListMLModelTransformJobs"``

Grants permission to list all the ML model transform jobs

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listmlmodeltransformjobs

#### Defined in

actions/neptune-db.ts:155

___

### ManageStatistics

• **ManageStatistics** = ``"neptune-db:ManageStatistics"``

Grants permission to manage statistics in the database

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#managestatistics

#### Defined in

actions/neptune-db.ts:161

___

### ReadDataViaQuery

• **ReadDataViaQuery** = ``"neptune-db:ReadDataViaQuery"``

Grants permission to run read data via query APIs on database

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#readdataviaquery

#### Defined in

actions/neptune-db.ts:167

___

### ResetDatabase

• **ResetDatabase** = ``"neptune-db:ResetDatabase"``

Grants permission to get the token needed for reset and resets the Neptune data
base

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#resetdatabase

#### Defined in

actions/neptune-db.ts:174

___

### StartLoaderJob

• **StartLoaderJob** = ``"neptune-db:StartLoaderJob"``

Grants permission to start a loader job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startloaderjob

#### Defined in

actions/neptune-db.ts:180

___

### StartMLDataProcessingJob

• **StartMLDataProcessingJob** = ``"neptune-db:StartMLDataProcessingJob"``

Grants permission to start an ML data processing job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startmldataprocessingjob

#### Defined in

actions/neptune-db.ts:186

___

### StartMLModelTrainingJob

• **StartMLModelTrainingJob** = ``"neptune-db:StartMLModelTrainingJob"``

Grants permission to start an ML model training job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startmlmodeltrainingjob

#### Defined in

actions/neptune-db.ts:192

___

### StartMLModelTransformJob

• **StartMLModelTransformJob** = ``"neptune-db:StartMLModelTransformJob"``

Grants permission to start an ML model transform job

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startmlmodeltransformjob

#### Defined in

actions/neptune-db.ts:198

___

### WriteDataViaQuery

• **WriteDataViaQuery** = ``"neptune-db:WriteDataViaQuery"``

Grants permission to run write data via query APIs on database

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#writedataviaquery

#### Defined in

actions/neptune-db.ts:204

___

### connect

• **connect** = ``"neptune-db:connect"``

Grants permission to all data-access actions in engine versions prior to 1.2.0.
0

See https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html

#### Defined in

actions/neptune-db.ts:211
