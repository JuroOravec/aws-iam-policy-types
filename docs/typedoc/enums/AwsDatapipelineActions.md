[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDatapipelineActions

# Enumeration: AwsDatapipelineActions

All IAM policy actions for AWS Data Pipeline (DATAPIPELINE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatapipeline.html

2024-02-12T09:56:52.291Z

## Table of contents

### Enumeration Members

- [ActivatePipeline](AwsDatapipelineActions.md#activatepipeline)
- [AddTags](AwsDatapipelineActions.md#addtags)
- [CreatePipeline](AwsDatapipelineActions.md#createpipeline)
- [DeactivatePipeline](AwsDatapipelineActions.md#deactivatepipeline)
- [DeletePipeline](AwsDatapipelineActions.md#deletepipeline)
- [DescribeObjects](AwsDatapipelineActions.md#describeobjects)
- [DescribePipelines](AwsDatapipelineActions.md#describepipelines)
- [EvaluateExpression](AwsDatapipelineActions.md#evaluateexpression)
- [GetAccountLimits](AwsDatapipelineActions.md#getaccountlimits)
- [GetPipelineDefinition](AwsDatapipelineActions.md#getpipelinedefinition)
- [ListPipelines](AwsDatapipelineActions.md#listpipelines)
- [PollForTask](AwsDatapipelineActions.md#pollfortask)
- [PutAccountLimits](AwsDatapipelineActions.md#putaccountlimits)
- [PutPipelineDefinition](AwsDatapipelineActions.md#putpipelinedefinition)
- [QueryObjects](AwsDatapipelineActions.md#queryobjects)
- [RemoveTags](AwsDatapipelineActions.md#removetags)
- [ReportTaskProgress](AwsDatapipelineActions.md#reporttaskprogress)
- [ReportTaskRunnerHeartbeat](AwsDatapipelineActions.md#reporttaskrunnerheartbeat)
- [SetStatus](AwsDatapipelineActions.md#setstatus)
- [SetTaskStatus](AwsDatapipelineActions.md#settaskstatus)
- [ValidatePipelineDefinition](AwsDatapipelineActions.md#validatepipelinedefinition)

## Enumeration Members

### ActivatePipeline

• **ActivatePipeline** = ``"datapipeline:ActivatePipeline"``

Grants permission to validate the specified pipeline and starts processing pipe
line tasks. If the pipeline does not pass validation, activation fails

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ActivatePipeline.html

#### Defined in

actions/datapipeline.ts:18

___

### AddTags

• **AddTags** = ``"datapipeline:AddTags"``

Grants permission to add or modify tags for the specified pipeline

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_AddTags.html

#### Defined in

actions/datapipeline.ts:24

___

### CreatePipeline

• **CreatePipeline** = ``"datapipeline:CreatePipeline"``

Grants permission to create a new, empty pipeline

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_CreatePipeline.html

#### Defined in

actions/datapipeline.ts:30

___

### DeactivatePipeline

• **DeactivatePipeline** = ``"datapipeline:DeactivatePipeline"``

Grants permission to Deactivate the specified running pipeline

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DeactivatePipeline.html

#### Defined in

actions/datapipeline.ts:36

___

### DeletePipeline

• **DeletePipeline** = ``"datapipeline:DeletePipeline"``

Grants permission to delete a pipeline, its pipeline definition, and its run hi
story

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DeletePipeline.html

#### Defined in

actions/datapipeline.ts:43

___

### DescribeObjects

• **DescribeObjects** = ``"datapipeline:DescribeObjects"``

Grants permission to get the object definitions for a set of objects associated
with the pipeline

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribeObjects.html

#### Defined in

actions/datapipeline.ts:50

___

### DescribePipelines

• **DescribePipelines** = ``"datapipeline:DescribePipelines"``

Grants permission to retrieves metadata about one or more pipelines

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribePipelines.html

#### Defined in

actions/datapipeline.ts:56

___

### EvaluateExpression

• **EvaluateExpression** = ``"datapipeline:EvaluateExpression"``

Grants permission to task runners to call EvaluateExpression, to evaluate a str
ing in the context of the specified object

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_EvaluateExpression.html

#### Defined in

actions/datapipeline.ts:63

___

### GetAccountLimits

• **GetAccountLimits** = ``"datapipeline:GetAccountLimits"``

Grants permission to call GetAccountLimits

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetAccountLimits.html

#### Defined in

actions/datapipeline.ts:69

___

### GetPipelineDefinition

• **GetPipelineDefinition** = ``"datapipeline:GetPipelineDefinition"``

Grants permission to gets the definition of the specified pipeline

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetPipelineDefinition.html

#### Defined in

actions/datapipeline.ts:75

___

### ListPipelines

• **ListPipelines** = ``"datapipeline:ListPipelines"``

Grants permission to list the pipeline identifiers for all active pipelines tha
t you have permission to access

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ListPipelines.html

#### Defined in

actions/datapipeline.ts:82

___

### PollForTask

• **PollForTask** = ``"datapipeline:PollForTask"``

Grants permission to task runners to call PollForTask, to receive a task to per
form from AWS Data Pipeline

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PollForTask.html

#### Defined in

actions/datapipeline.ts:89

___

### PutAccountLimits

• **PutAccountLimits** = ``"datapipeline:PutAccountLimits"``

Grants permission to call PutAccountLimits

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutAccountLimits.html

#### Defined in

actions/datapipeline.ts:95

___

### PutPipelineDefinition

• **PutPipelineDefinition** = ``"datapipeline:PutPipelineDefinition"``

Grants permission to add tasks, schedules, and preconditions to the specified p
ipeline

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutPipelineDefinition.html

#### Defined in

actions/datapipeline.ts:102

___

### QueryObjects

• **QueryObjects** = ``"datapipeline:QueryObjects"``

Grants permission to query the specified pipeline for the names of objects that
match the specified set of conditions

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_QueryObjects.html

#### Defined in

actions/datapipeline.ts:109

___

### RemoveTags

• **RemoveTags** = ``"datapipeline:RemoveTags"``

Grants permission to remove existing tags from the specified pipeline

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_RemoveTags.html

#### Defined in

actions/datapipeline.ts:115

___

### ReportTaskProgress

• **ReportTaskProgress** = ``"datapipeline:ReportTaskProgress"``

Grants permission to task runners to call ReportTaskProgress, when they are ass
igned a task to acknowledge that it has the task

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskProgress.html

#### Defined in

actions/datapipeline.ts:122

___

### ReportTaskRunnerHeartbeat

• **ReportTaskRunnerHeartbeat** = ``"datapipeline:ReportTaskRunnerHeartbeat"``

Grants permission to task runners to call ReportTaskRunnerHeartbeat every 15 mi
nutes to indicate that they are operational

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskRunnerHeartbeat.html

#### Defined in

actions/datapipeline.ts:129

___

### SetStatus

• **SetStatus** = ``"datapipeline:SetStatus"``

Grants permission to requests that the status of the specified physical or logi
cal pipeline objects be updated in the specified pipeline

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetStatus.html

#### Defined in

actions/datapipeline.ts:136

___

### SetTaskStatus

• **SetTaskStatus** = ``"datapipeline:SetTaskStatus"``

Grants permission to task runners to call SetTaskStatus to notify AWS Data Pipe
line that a task is completed and provide information about the final status

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetTaskStatus.html

#### Defined in

actions/datapipeline.ts:143

___

### ValidatePipelineDefinition

• **ValidatePipelineDefinition** = ``"datapipeline:ValidatePipelineDefinition"``

Grants permission to validate the specified pipeline definition to ensure that
it is well formed and can be run without error

See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ValidatePipelineDefinition.html

#### Defined in

actions/datapipeline.ts:150
