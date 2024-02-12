[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsLookoutvisionActions

# Enumeration: AwsLookoutvisionActions

All IAM policy actions for Amazon Lookout for Vision (LOOKOUTVISION)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforvision.html

2024-02-12T09:58:08.716Z

## Table of contents

### Enumeration Members

- [CreateDataset](AwsLookoutvisionActions.md#createdataset)
- [CreateModel](AwsLookoutvisionActions.md#createmodel)
- [CreateProject](AwsLookoutvisionActions.md#createproject)
- [DeleteDataset](AwsLookoutvisionActions.md#deletedataset)
- [DeleteModel](AwsLookoutvisionActions.md#deletemodel)
- [DeleteProject](AwsLookoutvisionActions.md#deleteproject)
- [DescribeDataset](AwsLookoutvisionActions.md#describedataset)
- [DescribeModel](AwsLookoutvisionActions.md#describemodel)
- [DescribeModelPackagingJob](AwsLookoutvisionActions.md#describemodelpackagingjob)
- [DescribeProject](AwsLookoutvisionActions.md#describeproject)
- [DescribeTrialDetection](AwsLookoutvisionActions.md#describetrialdetection)
- [DetectAnomalies](AwsLookoutvisionActions.md#detectanomalies)
- [ListDatasetEntries](AwsLookoutvisionActions.md#listdatasetentries)
- [ListModelPackagingJobs](AwsLookoutvisionActions.md#listmodelpackagingjobs)
- [ListModels](AwsLookoutvisionActions.md#listmodels)
- [ListProjects](AwsLookoutvisionActions.md#listprojects)
- [ListTagsForResource](AwsLookoutvisionActions.md#listtagsforresource)
- [ListTrialDetections](AwsLookoutvisionActions.md#listtrialdetections)
- [StartModel](AwsLookoutvisionActions.md#startmodel)
- [StartModelPackagingJob](AwsLookoutvisionActions.md#startmodelpackagingjob)
- [StartTrialDetection](AwsLookoutvisionActions.md#starttrialdetection)
- [StopModel](AwsLookoutvisionActions.md#stopmodel)
- [TagResource](AwsLookoutvisionActions.md#tagresource)
- [UntagResource](AwsLookoutvisionActions.md#untagresource)
- [UpdateDatasetEntries](AwsLookoutvisionActions.md#updatedatasetentries)

## Enumeration Members

### CreateDataset

• **CreateDataset** = ``"lookoutvision:CreateDataset"``

Grants permission to create a dataset manifest

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateDataset.html

#### Defined in

actions/lookoutvision.ts:17

___

### CreateModel

• **CreateModel** = ``"lookoutvision:CreateModel"``

Grants permission to create a new anomaly detection model

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateModel.html

#### Defined in

actions/lookoutvision.ts:23

___

### CreateProject

• **CreateProject** = ``"lookoutvision:CreateProject"``

Grants permission to create a new project

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateProject.html

#### Defined in

actions/lookoutvision.ts:29

___

### DeleteDataset

• **DeleteDataset** = ``"lookoutvision:DeleteDataset"``

Grants permission to delete a dataset

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteDataset.html

#### Defined in

actions/lookoutvision.ts:35

___

### DeleteModel

• **DeleteModel** = ``"lookoutvision:DeleteModel"``

Grants permission to delete a model and all associated assets

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteModel.html

#### Defined in

actions/lookoutvision.ts:41

___

### DeleteProject

• **DeleteProject** = ``"lookoutvision:DeleteProject"``

Grants permission to permanently remove a project

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteProject.html

#### Defined in

actions/lookoutvision.ts:47

___

### DescribeDataset

• **DescribeDataset** = ``"lookoutvision:DescribeDataset"``

Grants permission to show detailed information about dataset manifest

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeDataset.html

#### Defined in

actions/lookoutvision.ts:53

___

### DescribeModel

• **DescribeModel** = ``"lookoutvision:DescribeModel"``

Grants permission to show detailed information about a model

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeModel.html

#### Defined in

actions/lookoutvision.ts:59

___

### DescribeModelPackagingJob

• **DescribeModelPackagingJob** = ``"lookoutvision:DescribeModelPackagingJob"``

Grants permission to show detailed information about a model packaging job

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeModelPackagingJob.html

#### Defined in

actions/lookoutvision.ts:65

___

### DescribeProject

• **DescribeProject** = ``"lookoutvision:DescribeProject"``

Grants permission to show detailed information about a project

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeProject.html

#### Defined in

actions/lookoutvision.ts:71

___

### DescribeTrialDetection

• **DescribeTrialDetection** = ``"lookoutvision:DescribeTrialDetection"``

Grants permission to provides state information about a running anomaly detecti
on job

See https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html

#### Defined in

actions/lookoutvision.ts:78

___

### DetectAnomalies

• **DetectAnomalies** = ``"lookoutvision:DetectAnomalies"``

Grants permission to invoke detection of anomalies

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DetectAnomalies.html

#### Defined in

actions/lookoutvision.ts:84

___

### ListDatasetEntries

• **ListDatasetEntries** = ``"lookoutvision:ListDatasetEntries"``

Grants permission to list the contents of dataset manifest

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListDatasetEntries.html

#### Defined in

actions/lookoutvision.ts:90

___

### ListModelPackagingJobs

• **ListModelPackagingJobs** = ``"lookoutvision:ListModelPackagingJobs"``

Grants permission to list all model packaging jobs associated with a project

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListModelPackagingJobs.html

#### Defined in

actions/lookoutvision.ts:96

___

### ListModels

• **ListModels** = ``"lookoutvision:ListModels"``

Grants permission to list all models associated with a project

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListModels.html

#### Defined in

actions/lookoutvision.ts:102

___

### ListProjects

• **ListProjects** = ``"lookoutvision:ListProjects"``

Grants permission to list all projects

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListProjects.html

#### Defined in

actions/lookoutvision.ts:108

___

### ListTagsForResource

• **ListTagsForResource** = ``"lookoutvision:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/lookoutvision.ts:114

___

### ListTrialDetections

• **ListTrialDetections** = ``"lookoutvision:ListTrialDetections"``

Grants permission to list all anomaly detection jobs

See https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html

#### Defined in

actions/lookoutvision.ts:120

___

### StartModel

• **StartModel** = ``"lookoutvision:StartModel"``

Grants permission to start anomaly detection model

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StartModel.html

#### Defined in

actions/lookoutvision.ts:126

___

### StartModelPackagingJob

• **StartModelPackagingJob** = ``"lookoutvision:StartModelPackagingJob"``

Grants permission to start a model packaging job

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StartModelPackagingJob.html

#### Defined in

actions/lookoutvision.ts:132

___

### StartTrialDetection

• **StartTrialDetection** = ``"lookoutvision:StartTrialDetection"``

Grants permission to start bulk detection of anomalies for a set of images stor
ed in an S3 bucket

See https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html

#### Defined in

actions/lookoutvision.ts:139

___

### StopModel

• **StopModel** = ``"lookoutvision:StopModel"``

Grants permission to stop anomaly detection model

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StopModel.html

#### Defined in

actions/lookoutvision.ts:145

___

### TagResource

• **TagResource** = ``"lookoutvision:TagResource"``

Grants permission to tag a resource with given key value pairs

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_TagResource.html

#### Defined in

actions/lookoutvision.ts:151

___

### UntagResource

• **UntagResource** = ``"lookoutvision:UntagResource"``

Grants permission to remove the tag with the given key from a resource

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_UntagResource.html

#### Defined in

actions/lookoutvision.ts:157

___

### UpdateDatasetEntries

• **UpdateDatasetEntries** = ``"lookoutvision:UpdateDatasetEntries"``

Grants permission to update a training or test dataset manifest

See https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_UpdateDatasetEntries.html

#### Defined in

actions/lookoutvision.ts:163
