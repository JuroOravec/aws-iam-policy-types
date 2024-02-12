[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCleanroomsMlActions

# Enumeration: AwsCleanroomsMlActions

All IAM policy actions for AWS Clean Rooms ML (CLEANROOMS-ML)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscleanroomsml.html

2024-02-12T09:56:19.035Z

## Table of contents

### Enumeration Members

- [CreateAudienceModel](AwsCleanroomsMlActions.md#createaudiencemodel)
- [CreateConfiguredAudienceModel](AwsCleanroomsMlActions.md#createconfiguredaudiencemodel)
- [CreateTrainingDataset](AwsCleanroomsMlActions.md#createtrainingdataset)
- [DeleteAudienceGenerationJob](AwsCleanroomsMlActions.md#deleteaudiencegenerationjob)
- [DeleteAudienceModel](AwsCleanroomsMlActions.md#deleteaudiencemodel)
- [DeleteConfiguredAudienceModel](AwsCleanroomsMlActions.md#deleteconfiguredaudiencemodel)
- [DeleteConfiguredAudienceModelPolicy](AwsCleanroomsMlActions.md#deleteconfiguredaudiencemodelpolicy)
- [DeleteTrainingDataset](AwsCleanroomsMlActions.md#deletetrainingdataset)
- [GetAudienceGenerationJob](AwsCleanroomsMlActions.md#getaudiencegenerationjob)
- [GetAudienceModel](AwsCleanroomsMlActions.md#getaudiencemodel)
- [GetConfiguredAudienceModel](AwsCleanroomsMlActions.md#getconfiguredaudiencemodel)
- [GetConfiguredAudienceModelPolicy](AwsCleanroomsMlActions.md#getconfiguredaudiencemodelpolicy)
- [GetTrainingDataset](AwsCleanroomsMlActions.md#gettrainingdataset)
- [ListAudienceExportJobs](AwsCleanroomsMlActions.md#listaudienceexportjobs)
- [ListAudienceGenerationJobs](AwsCleanroomsMlActions.md#listaudiencegenerationjobs)
- [ListAudienceModels](AwsCleanroomsMlActions.md#listaudiencemodels)
- [ListConfiguredAudienceModels](AwsCleanroomsMlActions.md#listconfiguredaudiencemodels)
- [ListTagsForResource](AwsCleanroomsMlActions.md#listtagsforresource)
- [ListTrainingDatasets](AwsCleanroomsMlActions.md#listtrainingdatasets)
- [PutConfiguredAudienceModelPolicy](AwsCleanroomsMlActions.md#putconfiguredaudiencemodelpolicy)
- [StartAudienceExportJob](AwsCleanroomsMlActions.md#startaudienceexportjob)
- [StartAudienceGenerationJob](AwsCleanroomsMlActions.md#startaudiencegenerationjob)
- [TagResource](AwsCleanroomsMlActions.md#tagresource)
- [UnTagResource](AwsCleanroomsMlActions.md#untagresource)
- [UpdateConfiguredAudienceModel](AwsCleanroomsMlActions.md#updateconfiguredaudiencemodel)

## Enumeration Members

### CreateAudienceModel

• **CreateAudienceModel** = ``"cleanrooms-ml:CreateAudienceModel"``

Grants permission to create an audience model

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateAudienceModel.html

#### Defined in

actions/cleanrooms-ml.ts:17

___

### CreateConfiguredAudienceModel

• **CreateConfiguredAudienceModel** = ``"cleanrooms-ml:CreateConfiguredAudienceModel"``

Grants permission to create a configured audience model

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateConfiguredAudienceModel.html

#### Defined in

actions/cleanrooms-ml.ts:23

___

### CreateTrainingDataset

• **CreateTrainingDataset** = ``"cleanrooms-ml:CreateTrainingDataset"``

Grants permission to create a training dataset, or seed audience. In Clean Room
s ML, the TrainingDataset is metadata that points to a Glue table, which is rea
d only during AudienceModel creation

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateTrainingDataset.html

#### Defined in

actions/cleanrooms-ml.ts:31

___

### DeleteAudienceGenerationJob

• **DeleteAudienceGenerationJob** = ``"cleanrooms-ml:DeleteAudienceGenerationJob"``

Grants permission to delete the specified audience generation job, and removes
all data associated with the job

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteAudienceGenerationJob.html

#### Defined in

actions/cleanrooms-ml.ts:38

___

### DeleteAudienceModel

• **DeleteAudienceModel** = ``"cleanrooms-ml:DeleteAudienceModel"``

Grants permission to delete the specified audience generation job, and removes
all data associated with the job

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteAudienceModel.html

#### Defined in

actions/cleanrooms-ml.ts:45

___

### DeleteConfiguredAudienceModel

• **DeleteConfiguredAudienceModel** = ``"cleanrooms-ml:DeleteConfiguredAudienceModel"``

Grants permission to delete the specified configured audience model

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteConfiguredAudienceModel.html

#### Defined in

actions/cleanrooms-ml.ts:51

___

### DeleteConfiguredAudienceModelPolicy

• **DeleteConfiguredAudienceModelPolicy** = ``"cleanrooms-ml:DeleteConfiguredAudienceModelPolicy"``

Grants permission to delete the specified configured audience model policy

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteConfiguredAudienceModelPolicy.html

#### Defined in

actions/cleanrooms-ml.ts:57

___

### DeleteTrainingDataset

• **DeleteTrainingDataset** = ``"cleanrooms-ml:DeleteTrainingDataset"``

Grants permission to delete a training dataset

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteTrainingDataset.html

#### Defined in

actions/cleanrooms-ml.ts:63

___

### GetAudienceGenerationJob

• **GetAudienceGenerationJob** = ``"cleanrooms-ml:GetAudienceGenerationJob"``

Grants permission to return information about an audience generation job

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetAudienceGenerationJob.html

#### Defined in

actions/cleanrooms-ml.ts:69

___

### GetAudienceModel

• **GetAudienceModel** = ``"cleanrooms-ml:GetAudienceModel"``

Grants permission to return information about an audience model

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetAudienceModel.html

#### Defined in

actions/cleanrooms-ml.ts:75

___

### GetConfiguredAudienceModel

• **GetConfiguredAudienceModel** = ``"cleanrooms-ml:GetConfiguredAudienceModel"``

Grants permission to return information about a configured audience model

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetConfiguredAudienceModel.html

#### Defined in

actions/cleanrooms-ml.ts:81

___

### GetConfiguredAudienceModelPolicy

• **GetConfiguredAudienceModelPolicy** = ``"cleanrooms-ml:GetConfiguredAudienceModelPolicy"``

Grants permission to return information about a configured audience model polic
y

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetConfiguredAudienceModelPolicy.html

#### Defined in

actions/cleanrooms-ml.ts:88

___

### GetTrainingDataset

• **GetTrainingDataset** = ``"cleanrooms-ml:GetTrainingDataset"``

Grants permission to return information about a training dataset

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetTrainingDataset.html

#### Defined in

actions/cleanrooms-ml.ts:94

___

### ListAudienceExportJobs

• **ListAudienceExportJobs** = ``"cleanrooms-ml:ListAudienceExportJobs"``

Grants permission to return a list of the audience export jobs

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListAudienceExportJobs.html

#### Defined in

actions/cleanrooms-ml.ts:100

___

### ListAudienceGenerationJobs

• **ListAudienceGenerationJobs** = ``"cleanrooms-ml:ListAudienceGenerationJobs"``

Grants permission to return a list of audience generation jobs

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListAudienceGenerationJobs.html

#### Defined in

actions/cleanrooms-ml.ts:106

___

### ListAudienceModels

• **ListAudienceModels** = ``"cleanrooms-ml:ListAudienceModels"``

Grants permission to return a list of audience models

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListAudienceModels.html

#### Defined in

actions/cleanrooms-ml.ts:112

___

### ListConfiguredAudienceModels

• **ListConfiguredAudienceModels** = ``"cleanrooms-ml:ListConfiguredAudienceModels"``

Grants permission to return a list of configured audience models

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListConfiguredAudienceModels.html

#### Defined in

actions/cleanrooms-ml.ts:118

___

### ListTagsForResource

• **ListTagsForResource** = ``"cleanrooms-ml:ListTagsForResource"``

Grants permission to return a list of tags for a provided resource

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/cleanrooms-ml.ts:124

___

### ListTrainingDatasets

• **ListTrainingDatasets** = ``"cleanrooms-ml:ListTrainingDatasets"``

Grants permission to return a list of training datasets

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTrainingDatasets.html

#### Defined in

actions/cleanrooms-ml.ts:130

___

### PutConfiguredAudienceModelPolicy

• **PutConfiguredAudienceModelPolicy** = ``"cleanrooms-ml:PutConfiguredAudienceModelPolicy"``

Grants permission to create or update the resource policy for a configured audi
ence model

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_PutConfiguredAudienceModelPolicy.html

#### Defined in

actions/cleanrooms-ml.ts:137

___

### StartAudienceExportJob

• **StartAudienceExportJob** = ``"cleanrooms-ml:StartAudienceExportJob"``

Grants permission to export an audience of a specified size after you have gene
rated an audience

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_StartAudienceExportJob.html

#### Defined in

actions/cleanrooms-ml.ts:144

___

### StartAudienceGenerationJob

• **StartAudienceGenerationJob** = ``"cleanrooms-ml:StartAudienceGenerationJob"``

Grants permission to start the audience generation job

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_StartAudienceGenerationJob.html

#### Defined in

actions/cleanrooms-ml.ts:150

___

### TagResource

• **TagResource** = ``"cleanrooms-ml:TagResource"``

Grants permission to tag a specific resource

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_TagResource.html

#### Defined in

actions/cleanrooms-ml.ts:156

___

### UnTagResource

• **UnTagResource** = ``"cleanrooms-ml:UnTagResource"``

Grants permission to untag a specific resource

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_UntagResource.html

#### Defined in

actions/cleanrooms-ml.ts:162

___

### UpdateConfiguredAudienceModel

• **UpdateConfiguredAudienceModel** = ``"cleanrooms-ml:UpdateConfiguredAudienceModel"``

Grants permission to update a configured audience model.

See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_UpdateConfiguredAudienceModel.html

#### Defined in

actions/cleanrooms-ml.ts:168
