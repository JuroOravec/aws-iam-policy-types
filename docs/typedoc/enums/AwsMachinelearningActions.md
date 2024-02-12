[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMachinelearningActions

# Enumeration: AwsMachinelearningActions

All IAM policy actions for Amazon Machine Learning (MACHINELEARNING)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmachinelearning.html

2024-02-12T09:58:09.235Z

## Table of contents

### Enumeration Members

- [AddTags](AwsMachinelearningActions.md#addtags)
- [CreateBatchPrediction](AwsMachinelearningActions.md#createbatchprediction)
- [CreateDataSourceFromRDS](AwsMachinelearningActions.md#createdatasourcefromrds)
- [CreateDataSourceFromRedshift](AwsMachinelearningActions.md#createdatasourcefromredshift)
- [CreateDataSourceFromS3](AwsMachinelearningActions.md#createdatasourcefroms3)
- [CreateEvaluation](AwsMachinelearningActions.md#createevaluation)
- [CreateMLModel](AwsMachinelearningActions.md#createmlmodel)
- [CreateRealtimeEndpoint](AwsMachinelearningActions.md#createrealtimeendpoint)
- [DeleteBatchPrediction](AwsMachinelearningActions.md#deletebatchprediction)
- [DeleteDataSource](AwsMachinelearningActions.md#deletedatasource)
- [DeleteEvaluation](AwsMachinelearningActions.md#deleteevaluation)
- [DeleteMLModel](AwsMachinelearningActions.md#deletemlmodel)
- [DeleteRealtimeEndpoint](AwsMachinelearningActions.md#deleterealtimeendpoint)
- [DeleteTags](AwsMachinelearningActions.md#deletetags)
- [DescribeBatchPredictions](AwsMachinelearningActions.md#describebatchpredictions)
- [DescribeDataSources](AwsMachinelearningActions.md#describedatasources)
- [DescribeEvaluations](AwsMachinelearningActions.md#describeevaluations)
- [DescribeMLModels](AwsMachinelearningActions.md#describemlmodels)
- [DescribeTags](AwsMachinelearningActions.md#describetags)
- [GetBatchPrediction](AwsMachinelearningActions.md#getbatchprediction)
- [GetDataSource](AwsMachinelearningActions.md#getdatasource)
- [GetEvaluation](AwsMachinelearningActions.md#getevaluation)
- [GetMLModel](AwsMachinelearningActions.md#getmlmodel)
- [Predict](AwsMachinelearningActions.md#predict)
- [UpdateBatchPrediction](AwsMachinelearningActions.md#updatebatchprediction)
- [UpdateDataSource](AwsMachinelearningActions.md#updatedatasource)
- [UpdateEvaluation](AwsMachinelearningActions.md#updateevaluation)
- [UpdateMLModel](AwsMachinelearningActions.md#updatemlmodel)

## Enumeration Members

### AddTags

• **AddTags** = ``"machinelearning:AddTags"``

Adds one or more tags to an object, up to a limit of 10. Each tag consists of a
key and an optional value

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_AddTags.html

#### Defined in

actions/machinelearning.ts:18

___

### CreateBatchPrediction

• **CreateBatchPrediction** = ``"machinelearning:CreateBatchPrediction"``

Generates predictions for a group of observations

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateBatchPrediction.html

#### Defined in

actions/machinelearning.ts:24

___

### CreateDataSourceFromRDS

• **CreateDataSourceFromRDS** = ``"machinelearning:CreateDataSourceFromRDS"``

Creates a DataSource object from an Amazon RDS

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromRDS.html

#### Defined in

actions/machinelearning.ts:30

___

### CreateDataSourceFromRedshift

• **CreateDataSourceFromRedshift** = ``"machinelearning:CreateDataSourceFromRedshift"``

Creates a DataSource from a database hosted on an Amazon Redshift cluster

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromRedshift.html

#### Defined in

actions/machinelearning.ts:36

___

### CreateDataSourceFromS3

• **CreateDataSourceFromS3** = ``"machinelearning:CreateDataSourceFromS3"``

Creates a DataSource object from S3

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromS3.html

#### Defined in

actions/machinelearning.ts:42

___

### CreateEvaluation

• **CreateEvaluation** = ``"machinelearning:CreateEvaluation"``

Creates a new Evaluation of an MLModel

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateEvaluation.html

#### Defined in

actions/machinelearning.ts:48

___

### CreateMLModel

• **CreateMLModel** = ``"machinelearning:CreateMLModel"``

Creates a new MLModel

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateMLModel.html

#### Defined in

actions/machinelearning.ts:54

___

### CreateRealtimeEndpoint

• **CreateRealtimeEndpoint** = ``"machinelearning:CreateRealtimeEndpoint"``

Creates a real-time endpoint for the MLModel

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateRealtimeEndpoint.html

#### Defined in

actions/machinelearning.ts:60

___

### DeleteBatchPrediction

• **DeleteBatchPrediction** = ``"machinelearning:DeleteBatchPrediction"``

Assigns the DELETED status to a BatchPrediction, rendering it unusable

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteBatchPrediction.html

#### Defined in

actions/machinelearning.ts:66

___

### DeleteDataSource

• **DeleteDataSource** = ``"machinelearning:DeleteDataSource"``

Assigns the DELETED status to a DataSource, rendering it unusable

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteDataSource.html

#### Defined in

actions/machinelearning.ts:72

___

### DeleteEvaluation

• **DeleteEvaluation** = ``"machinelearning:DeleteEvaluation"``

Assigns the DELETED status to an Evaluation, rendering it unusable

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteEvaluation.html

#### Defined in

actions/machinelearning.ts:78

___

### DeleteMLModel

• **DeleteMLModel** = ``"machinelearning:DeleteMLModel"``

Assigns the DELETED status to an MLModel, rendering it unusable

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteMLModel.html

#### Defined in

actions/machinelearning.ts:84

___

### DeleteRealtimeEndpoint

• **DeleteRealtimeEndpoint** = ``"machinelearning:DeleteRealtimeEndpoint"``

Deletes a real time endpoint of an MLModel

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteRealtimeEndpoint.html

#### Defined in

actions/machinelearning.ts:90

___

### DeleteTags

• **DeleteTags** = ``"machinelearning:DeleteTags"``

Deletes the specified tags associated with an ML object. After this operation i
s complete, you can't recover deleted tags

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteTags.html

#### Defined in

actions/machinelearning.ts:97

___

### DescribeBatchPredictions

• **DescribeBatchPredictions** = ``"machinelearning:DescribeBatchPredictions"``

Returns a list of BatchPrediction operations that match the search criteria in
the request

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeBatchPredictions.html

#### Defined in

actions/machinelearning.ts:104

___

### DescribeDataSources

• **DescribeDataSources** = ``"machinelearning:DescribeDataSources"``

Returns a list of DataSource that match the search criteria in the request

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeDataSources.html

#### Defined in

actions/machinelearning.ts:110

___

### DescribeEvaluations

• **DescribeEvaluations** = ``"machinelearning:DescribeEvaluations"``

Returns a list of DescribeEvaluations that match the search criteria in the req
uest

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeEvaluations.html

#### Defined in

actions/machinelearning.ts:117

___

### DescribeMLModels

• **DescribeMLModels** = ``"machinelearning:DescribeMLModels"``

Returns a list of MLModel that match the search criteria in the request

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeMLModels.html

#### Defined in

actions/machinelearning.ts:123

___

### DescribeTags

• **DescribeTags** = ``"machinelearning:DescribeTags"``

Describes one or more of the tags for your Amazon ML object

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeTags.html

#### Defined in

actions/machinelearning.ts:129

___

### GetBatchPrediction

• **GetBatchPrediction** = ``"machinelearning:GetBatchPrediction"``

Returns a BatchPrediction that includes detailed metadata, status, and data fil
e information

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetBatchPrediction.html

#### Defined in

actions/machinelearning.ts:136

___

### GetDataSource

• **GetDataSource** = ``"machinelearning:GetDataSource"``

Returns a DataSource that includes metadata and data file information, as well
as the current status of the DataSource

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetDataSource.html

#### Defined in

actions/machinelearning.ts:143

___

### GetEvaluation

• **GetEvaluation** = ``"machinelearning:GetEvaluation"``

Returns an Evaluation that includes metadata as well as the current status of t
he Evaluation

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetEvaluation.html

#### Defined in

actions/machinelearning.ts:150

___

### GetMLModel

• **GetMLModel** = ``"machinelearning:GetMLModel"``

Returns an MLModel that includes detailed metadata, and data source information
as well as the current status of the MLModel

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetMLModel.html

#### Defined in

actions/machinelearning.ts:157

___

### Predict

• **Predict** = ``"machinelearning:Predict"``

Generates a prediction for the observation using the specified ML Model

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_Predict.html

#### Defined in

actions/machinelearning.ts:163

___

### UpdateBatchPrediction

• **UpdateBatchPrediction** = ``"machinelearning:UpdateBatchPrediction"``

Updates the BatchPredictionName of a BatchPrediction

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateBatchPrediction.html

#### Defined in

actions/machinelearning.ts:169

___

### UpdateDataSource

• **UpdateDataSource** = ``"machinelearning:UpdateDataSource"``

Updates the DataSourceName of a DataSource

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateDataSource.html

#### Defined in

actions/machinelearning.ts:175

___

### UpdateEvaluation

• **UpdateEvaluation** = ``"machinelearning:UpdateEvaluation"``

Updates the EvaluationName of an Evaluation

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateEvaluation.html

#### Defined in

actions/machinelearning.ts:181

___

### UpdateMLModel

• **UpdateMLModel** = ``"machinelearning:UpdateMLModel"``

Updates the MLModelName and the ScoreThreshold of an MLModel

See https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateMLModel.html

#### Defined in

actions/machinelearning.ts:187
