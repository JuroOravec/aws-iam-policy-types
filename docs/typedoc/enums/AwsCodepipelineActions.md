[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodepipelineActions

# Enumeration: AwsCodepipelineActions

All IAM policy actions for AWS CodePipeline (CODEPIPELINE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodepipeline.html

2024-02-12T09:56:38.075Z

## Table of contents

### Enumeration Members

- [AcknowledgeJob](AwsCodepipelineActions.md#acknowledgejob)
- [AcknowledgeThirdPartyJob](AwsCodepipelineActions.md#acknowledgethirdpartyjob)
- [CreateCustomActionType](AwsCodepipelineActions.md#createcustomactiontype)
- [CreatePipeline](AwsCodepipelineActions.md#createpipeline)
- [DeleteCustomActionType](AwsCodepipelineActions.md#deletecustomactiontype)
- [DeletePipeline](AwsCodepipelineActions.md#deletepipeline)
- [DeleteWebhook](AwsCodepipelineActions.md#deletewebhook)
- [DeregisterWebhookWithThirdParty](AwsCodepipelineActions.md#deregisterwebhookwiththirdparty)
- [DisableStageTransition](AwsCodepipelineActions.md#disablestagetransition)
- [EnableStageTransition](AwsCodepipelineActions.md#enablestagetransition)
- [GetActionType](AwsCodepipelineActions.md#getactiontype)
- [GetJobDetails](AwsCodepipelineActions.md#getjobdetails)
- [GetPipeline](AwsCodepipelineActions.md#getpipeline)
- [GetPipelineExecution](AwsCodepipelineActions.md#getpipelineexecution)
- [GetPipelineState](AwsCodepipelineActions.md#getpipelinestate)
- [GetThirdPartyJobDetails](AwsCodepipelineActions.md#getthirdpartyjobdetails)
- [ListActionExecutions](AwsCodepipelineActions.md#listactionexecutions)
- [ListActionTypes](AwsCodepipelineActions.md#listactiontypes)
- [ListPipelineExecutions](AwsCodepipelineActions.md#listpipelineexecutions)
- [ListPipelines](AwsCodepipelineActions.md#listpipelines)
- [ListTagsForResource](AwsCodepipelineActions.md#listtagsforresource)
- [ListWebhooks](AwsCodepipelineActions.md#listwebhooks)
- [PollForJobs](AwsCodepipelineActions.md#pollforjobs)
- [PollForThirdPartyJobs](AwsCodepipelineActions.md#pollforthirdpartyjobs)
- [PutActionRevision](AwsCodepipelineActions.md#putactionrevision)
- [PutApprovalResult](AwsCodepipelineActions.md#putapprovalresult)
- [PutJobFailureResult](AwsCodepipelineActions.md#putjobfailureresult)
- [PutJobSuccessResult](AwsCodepipelineActions.md#putjobsuccessresult)
- [PutThirdPartyJobFailureResult](AwsCodepipelineActions.md#putthirdpartyjobfailureresult)
- [PutThirdPartyJobSuccessResult](AwsCodepipelineActions.md#putthirdpartyjobsuccessresult)
- [PutWebhook](AwsCodepipelineActions.md#putwebhook)
- [RegisterWebhookWithThirdParty](AwsCodepipelineActions.md#registerwebhookwiththirdparty)
- [RetryStageExecution](AwsCodepipelineActions.md#retrystageexecution)
- [StartPipelineExecution](AwsCodepipelineActions.md#startpipelineexecution)
- [StopPipelineExecution](AwsCodepipelineActions.md#stoppipelineexecution)
- [TagResource](AwsCodepipelineActions.md#tagresource)
- [UntagResource](AwsCodepipelineActions.md#untagresource)
- [UpdateActionType](AwsCodepipelineActions.md#updateactiontype)
- [UpdatePipeline](AwsCodepipelineActions.md#updatepipeline)

## Enumeration Members

### AcknowledgeJob

• **AcknowledgeJob** = ``"codepipeline:AcknowledgeJob"``

Grants permission to view information about a specified job and whether that jo
b has been received by the job worker

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeJob.html

#### Defined in

actions/codepipeline.ts:18

___

### AcknowledgeThirdPartyJob

• **AcknowledgeThirdPartyJob** = ``"codepipeline:AcknowledgeThirdPartyJob"``

Grants permission to confirm that a job worker has received the specified job (
partner actions only)

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeThirdPartyJob.html

#### Defined in

actions/codepipeline.ts:25

___

### CreateCustomActionType

• **CreateCustomActionType** = ``"codepipeline:CreateCustomActionType"``

Grants permission to create a custom action that you can use in the pipelines a
ssociated with your AWS account

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreateCustomActionType.html

#### Defined in

actions/codepipeline.ts:32

___

### CreatePipeline

• **CreatePipeline** = ``"codepipeline:CreatePipeline"``

Grants permission to create a uniquely named pipeline

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreatePipeline.html

#### Defined in

actions/codepipeline.ts:38

___

### DeleteCustomActionType

• **DeleteCustomActionType** = ``"codepipeline:DeleteCustomActionType"``

Grants permission to delete a custom action

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteCustomActionType.html

#### Defined in

actions/codepipeline.ts:44

___

### DeletePipeline

• **DeletePipeline** = ``"codepipeline:DeletePipeline"``

Grants permission to delete a specified pipeline

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeletePipeline.html

#### Defined in

actions/codepipeline.ts:50

___

### DeleteWebhook

• **DeleteWebhook** = ``"codepipeline:DeleteWebhook"``

Grants permission to delete a specified webhook

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteWebhook.html

#### Defined in

actions/codepipeline.ts:56

___

### DeregisterWebhookWithThirdParty

• **DeregisterWebhookWithThirdParty** = ``"codepipeline:DeregisterWebhookWithThirdParty"``

Grants permission to remove the registration of a webhook with the third party
specified in its configuration

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeregisterWebhookWithThirdParty.html

#### Defined in

actions/codepipeline.ts:63

___

### DisableStageTransition

• **DisableStageTransition** = ``"codepipeline:DisableStageTransition"``

Grants permission to prevent revisions from transitioning to the next stage in
a pipeline

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DisableStageTransition.html

#### Defined in

actions/codepipeline.ts:70

___

### EnableStageTransition

• **EnableStageTransition** = ``"codepipeline:EnableStageTransition"``

Grants permission to allow revisions to transition to the next stage in a pipel
ine

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_EnableStageTransition.html

#### Defined in

actions/codepipeline.ts:77

___

### GetActionType

• **GetActionType** = ``"codepipeline:GetActionType"``

Grants permission to view information about an action type

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetActionType.html

#### Defined in

actions/codepipeline.ts:83

___

### GetJobDetails

• **GetJobDetails** = ``"codepipeline:GetJobDetails"``

Grants permission to view information about a job (custom actions only)

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetJobDetails.html

#### Defined in

actions/codepipeline.ts:89

___

### GetPipeline

• **GetPipeline** = ``"codepipeline:GetPipeline"``

Grants permission to retrieve information about a pipeline structure

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipeline.html

#### Defined in

actions/codepipeline.ts:95

___

### GetPipelineExecution

• **GetPipelineExecution** = ``"codepipeline:GetPipelineExecution"``

Grants permission to view information about an execution of a pipeline, includi
ng details about artifacts, the pipeline execution ID, and the name, version, a
nd status of the pipeline

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineExecution.html

#### Defined in

actions/codepipeline.ts:103

___

### GetPipelineState

• **GetPipelineState** = ``"codepipeline:GetPipelineState"``

Grants permission to view information about the current state of the stages and
actions of a pipeline

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineState.html

#### Defined in

actions/codepipeline.ts:110

___

### GetThirdPartyJobDetails

• **GetThirdPartyJobDetails** = ``"codepipeline:GetThirdPartyJobDetails"``

Grants permission to view the details of a job for a third-party action (partne
r actions only)

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetThirdPartyJobDetails.html

#### Defined in

actions/codepipeline.ts:117

___

### ListActionExecutions

• **ListActionExecutions** = ``"codepipeline:ListActionExecutions"``

Grants permission to list the action executions that have occurred in a pipelin
e

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionExecutions.html

#### Defined in

actions/codepipeline.ts:124

___

### ListActionTypes

• **ListActionTypes** = ``"codepipeline:ListActionTypes"``

Grants permission to list a summary of all the action types available for pipel
ines in your account

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionTypes.html

#### Defined in

actions/codepipeline.ts:131

___

### ListPipelineExecutions

• **ListPipelineExecutions** = ``"codepipeline:ListPipelineExecutions"``

Grants permission to list a summary of the most recent executions for a pipelin
e

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelineExecutions.html

#### Defined in

actions/codepipeline.ts:138

___

### ListPipelines

• **ListPipelines** = ``"codepipeline:ListPipelines"``

Grants permission to list a summary of all the pipelines associated with your A
WS account

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelines.html

#### Defined in

actions/codepipeline.ts:145

___

### ListTagsForResource

• **ListTagsForResource** = ``"codepipeline:ListTagsForResource"``

Grants permission to list tags for a CodePipeline resource

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/codepipeline.ts:151

___

### ListWebhooks

• **ListWebhooks** = ``"codepipeline:ListWebhooks"``

Grants permission to list all of the webhooks associated with your AWS account

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListWebhooks.html

#### Defined in

actions/codepipeline.ts:157

___

### PollForJobs

• **PollForJobs** = ``"codepipeline:PollForJobs"``

Grants permission to view information about any jobs for CodePipeline to act on

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForJobs.html

#### Defined in

actions/codepipeline.ts:163

___

### PollForThirdPartyJobs

• **PollForThirdPartyJobs** = ``"codepipeline:PollForThirdPartyJobs"``

Grants permission to determine whether there are any third-party jobs for a job
worker to act on (partner actions only)

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForThirdPartyJobs.html

#### Defined in

actions/codepipeline.ts:170

___

### PutActionRevision

• **PutActionRevision** = ``"codepipeline:PutActionRevision"``

Grants permission to edit actions in a pipeline

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutActionRevision.html

#### Defined in

actions/codepipeline.ts:176

___

### PutApprovalResult

• **PutApprovalResult** = ``"codepipeline:PutApprovalResult"``

Grants permission to provide a response (Approved or Rejected) to a manual appr
oval request in CodePipeline

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutApprovalResult.html

#### Defined in

actions/codepipeline.ts:183

___

### PutJobFailureResult

• **PutJobFailureResult** = ``"codepipeline:PutJobFailureResult"``

Grants permission to represent the failure of a job as returned to the pipeline
by a job worker (custom actions only)

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobFailureResult.html

#### Defined in

actions/codepipeline.ts:190

___

### PutJobSuccessResult

• **PutJobSuccessResult** = ``"codepipeline:PutJobSuccessResult"``

Grants permission to represent the success of a job as returned to the pipeline
by a job worker (custom actions only)

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobSuccessResult.html

#### Defined in

actions/codepipeline.ts:197

___

### PutThirdPartyJobFailureResult

• **PutThirdPartyJobFailureResult** = ``"codepipeline:PutThirdPartyJobFailureResult"``

Grants permission to represent the failure of a third-party job as returned to
the pipeline by a job worker (partner actions only)

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobFailureResult.html

#### Defined in

actions/codepipeline.ts:204

___

### PutThirdPartyJobSuccessResult

• **PutThirdPartyJobSuccessResult** = ``"codepipeline:PutThirdPartyJobSuccessResult"``

Grants permission to represent the success of a third-party job as returned to
the pipeline by a job worker (partner actions only)

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobSuccessResult.html

#### Defined in

actions/codepipeline.ts:211

___

### PutWebhook

• **PutWebhook** = ``"codepipeline:PutWebhook"``

Grants permission to create or update a webhook

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutWebhook.html

#### Defined in

actions/codepipeline.ts:217

___

### RegisterWebhookWithThirdParty

• **RegisterWebhookWithThirdParty** = ``"codepipeline:RegisterWebhookWithThirdParty"``

Grants permission to register a webhook with the third party specified in its c
onfiguration

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RegisterWebhookWithThirdParty.html

#### Defined in

actions/codepipeline.ts:224

___

### RetryStageExecution

• **RetryStageExecution** = ``"codepipeline:RetryStageExecution"``

Grants permission to resume the pipeline execution by retrying the last failed
actions in a stage

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RetryStageExecution.html

#### Defined in

actions/codepipeline.ts:231

___

### StartPipelineExecution

• **StartPipelineExecution** = ``"codepipeline:StartPipelineExecution"``

Grants permission to run the most recent revision through the pipeline

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StartPipelineExecution.html

#### Defined in

actions/codepipeline.ts:237

___

### StopPipelineExecution

• **StopPipelineExecution** = ``"codepipeline:StopPipelineExecution"``

Grants permission to stop an in-progress pipeline execution

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StopPipelineExecution.html

#### Defined in

actions/codepipeline.ts:243

___

### TagResource

• **TagResource** = ``"codepipeline:TagResource"``

Grants permission to tag a CodePipeline resource

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_TagResource.html

#### Defined in

actions/codepipeline.ts:249

___

### UntagResource

• **UntagResource** = ``"codepipeline:UntagResource"``

Grants permission to remove a tag from a CodePipeline resource

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UntagResource.html

#### Defined in

actions/codepipeline.ts:255

___

### UpdateActionType

• **UpdateActionType** = ``"codepipeline:UpdateActionType"``

Grants permission to update an action type

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UpdateActionType.html

#### Defined in

actions/codepipeline.ts:261

___

### UpdatePipeline

• **UpdatePipeline** = ``"codepipeline:UpdatePipeline"``

Grants permission to update a pipeline with changes to the structure of the pip
eline

See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UpdatePipeline.html

#### Defined in

actions/codepipeline.ts:268
