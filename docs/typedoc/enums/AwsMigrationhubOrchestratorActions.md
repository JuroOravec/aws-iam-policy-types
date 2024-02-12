[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMigrationhubOrchestratorActions

# Enumeration: AwsMigrationhubOrchestratorActions

All IAM policy actions for AWS Migration Hub Orchestrator (MIGRATIONHUB-ORCHESTRATOR)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhuborchestrator.html

2024-02-12T09:58:24.533Z

## Table of contents

### Enumeration Members

- [CreateWorkflow](AwsMigrationhubOrchestratorActions.md#createworkflow)
- [CreateWorkflowStep](AwsMigrationhubOrchestratorActions.md#createworkflowstep)
- [CreateWorkflowStepGroup](AwsMigrationhubOrchestratorActions.md#createworkflowstepgroup)
- [DeleteWorkflow](AwsMigrationhubOrchestratorActions.md#deleteworkflow)
- [DeleteWorkflowStep](AwsMigrationhubOrchestratorActions.md#deleteworkflowstep)
- [DeleteWorkflowStepGroup](AwsMigrationhubOrchestratorActions.md#deleteworkflowstepgroup)
- [GetMessage](AwsMigrationhubOrchestratorActions.md#getmessage)
- [GetTemplate](AwsMigrationhubOrchestratorActions.md#gettemplate)
- [GetTemplateStep](AwsMigrationhubOrchestratorActions.md#gettemplatestep)
- [GetTemplateStepGroup](AwsMigrationhubOrchestratorActions.md#gettemplatestepgroup)
- [GetWorkflow](AwsMigrationhubOrchestratorActions.md#getworkflow)
- [GetWorkflowStep](AwsMigrationhubOrchestratorActions.md#getworkflowstep)
- [GetWorkflowStepGroup](AwsMigrationhubOrchestratorActions.md#getworkflowstepgroup)
- [ListPlugins](AwsMigrationhubOrchestratorActions.md#listplugins)
- [ListTagsForResource](AwsMigrationhubOrchestratorActions.md#listtagsforresource)
- [ListTemplateStepGroups](AwsMigrationhubOrchestratorActions.md#listtemplatestepgroups)
- [ListTemplateSteps](AwsMigrationhubOrchestratorActions.md#listtemplatesteps)
- [ListTemplates](AwsMigrationhubOrchestratorActions.md#listtemplates)
- [ListWorkflowStepGroups](AwsMigrationhubOrchestratorActions.md#listworkflowstepgroups)
- [ListWorkflowSteps](AwsMigrationhubOrchestratorActions.md#listworkflowsteps)
- [ListWorkflows](AwsMigrationhubOrchestratorActions.md#listworkflows)
- [RegisterPlugin](AwsMigrationhubOrchestratorActions.md#registerplugin)
- [RetryWorkflowStep](AwsMigrationhubOrchestratorActions.md#retryworkflowstep)
- [SendMessage](AwsMigrationhubOrchestratorActions.md#sendmessage)
- [StartWorkflow](AwsMigrationhubOrchestratorActions.md#startworkflow)
- [StopWorkflow](AwsMigrationhubOrchestratorActions.md#stopworkflow)
- [TagResource](AwsMigrationhubOrchestratorActions.md#tagresource)
- [UntagResource](AwsMigrationhubOrchestratorActions.md#untagresource)
- [UpdateWorkflow](AwsMigrationhubOrchestratorActions.md#updateworkflow)
- [UpdateWorkflowStep](AwsMigrationhubOrchestratorActions.md#updateworkflowstep)
- [UpdateWorkflowStepGroup](AwsMigrationhubOrchestratorActions.md#updateworkflowstepgroup)

## Enumeration Members

### CreateWorkflow

• **CreateWorkflow** = ``"migrationhub-orchestrator:CreateWorkflow"``

Grants permission to create a workflow based on the selected template

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_CreateWorkflow.html

#### Defined in

actions/migrationhub-orchestrator.ts:17

___

### CreateWorkflowStep

• **CreateWorkflowStep** = ``"migrationhub-orchestrator:CreateWorkflowStep"``

Grants permission to create a step under a workflow and a specific step group

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_CreateWorkflowStep.html

#### Defined in

actions/migrationhub-orchestrator.ts:23

___

### CreateWorkflowStepGroup

• **CreateWorkflowStepGroup** = ``"migrationhub-orchestrator:CreateWorkflowStepGroup"``

Grants permission to to create a custom step group for a given workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_CreateWorkflowStepGroup.html

#### Defined in

actions/migrationhub-orchestrator.ts:29

___

### DeleteWorkflow

• **DeleteWorkflow** = ``"migrationhub-orchestrator:DeleteWorkflow"``

Grants permission to a workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_DeleteWorkflow.html

#### Defined in

actions/migrationhub-orchestrator.ts:35

___

### DeleteWorkflowStep

• **DeleteWorkflowStep** = ``"migrationhub-orchestrator:DeleteWorkflowStep"``

Grants permission to delete a step from a specific step group under a workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_DeleteWorkflowStep.html

#### Defined in

actions/migrationhub-orchestrator.ts:41

___

### DeleteWorkflowStepGroup

• **DeleteWorkflowStepGroup** = ``"migrationhub-orchestrator:DeleteWorkflowStepGroup"``

Grants permission to delete a step group associated with a workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_DeleteWorkflowStepGroup.html

#### Defined in

actions/migrationhub-orchestrator.ts:47

___

### GetMessage

• **GetMessage** = ``"migrationhub-orchestrator:GetMessage"``

Grants permission to the plugin to receive information from the service

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetMessage.html

#### Defined in

actions/migrationhub-orchestrator.ts:53

___

### GetTemplate

• **GetTemplate** = ``"migrationhub-orchestrator:GetTemplate"``

Grants permission to get retrieve metadata for a Template

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetTemplate.html

#### Defined in

actions/migrationhub-orchestrator.ts:59

___

### GetTemplateStep

• **GetTemplateStep** = ``"migrationhub-orchestrator:GetTemplateStep"``

Grants permission to retrieve details of a step associated with a template and
a step group

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetTemplateStep.html

#### Defined in

actions/migrationhub-orchestrator.ts:66

___

### GetTemplateStepGroup

• **GetTemplateStepGroup** = ``"migrationhub-orchestrator:GetTemplateStepGroup"``

Grants permission to retrieve metadata of a step group under a template

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetTemplateStepGroup.html

#### Defined in

actions/migrationhub-orchestrator.ts:72

___

### GetWorkflow

• **GetWorkflow** = ``"migrationhub-orchestrator:GetWorkflow"``

Grants permission to retrieve metadata asscociated with a workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetWorkflow.html

#### Defined in

actions/migrationhub-orchestrator.ts:78

___

### GetWorkflowStep

• **GetWorkflowStep** = ``"migrationhub-orchestrator:GetWorkflowStep"``

Grants permission to get details of step associated with a workflow and a step
group

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetWorkflowStep.html

#### Defined in

actions/migrationhub-orchestrator.ts:85

___

### GetWorkflowStepGroup

• **GetWorkflowStepGroup** = ``"migrationhub-orchestrator:GetWorkflowStepGroup"``

Grants permission to get details of a step group associated with a workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetWorkflowStepGroup.html

#### Defined in

actions/migrationhub-orchestrator.ts:91

___

### ListPlugins

• **ListPlugins** = ``"migrationhub-orchestrator:ListPlugins"``

Grants permission to get a list all registered Plugins

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListPlugins.html

#### Defined in

actions/migrationhub-orchestrator.ts:97

___

### ListTagsForResource

• **ListTagsForResource** = ``"migrationhub-orchestrator:ListTagsForResource"``

Grants permission to get a list of all the tags tied to a resource

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/migrationhub-orchestrator.ts:103

___

### ListTemplateStepGroups

• **ListTemplateStepGroups** = ``"migrationhub-orchestrator:ListTemplateStepGroups"``

Grants permission to lists step groups of a template

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListTemplateStepGroups.html

#### Defined in

actions/migrationhub-orchestrator.ts:109

___

### ListTemplateSteps

• **ListTemplateSteps** = ``"migrationhub-orchestrator:ListTemplateSteps"``

Grants permission to get a list of steps in a step group

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListServers.html

#### Defined in

actions/migrationhub-orchestrator.ts:115

___

### ListTemplates

• **ListTemplates** = ``"migrationhub-orchestrator:ListTemplates"``

Grants permission to get a list of all Templates available to customer

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListTemplates.html

#### Defined in

actions/migrationhub-orchestrator.ts:121

___

### ListWorkflowStepGroups

• **ListWorkflowStepGroups** = ``"migrationhub-orchestrator:ListWorkflowStepGroups"``

Grants permission to get list of step groups associated with a workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListWorkflowStepGroups.html

#### Defined in

actions/migrationhub-orchestrator.ts:127

___

### ListWorkflowSteps

• **ListWorkflowSteps** = ``"migrationhub-orchestrator:ListWorkflowSteps"``

Grants permission to get a list of steps within  step group associated with a w
orkflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListAntiPatterns.html

#### Defined in

actions/migrationhub-orchestrator.ts:134

___

### ListWorkflows

• **ListWorkflows** = ``"migrationhub-orchestrator:ListWorkflows"``

Grants permission to list all workflows

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListWorkflows.html

#### Defined in

actions/migrationhub-orchestrator.ts:140

___

### RegisterPlugin

• **RegisterPlugin** = ``"migrationhub-orchestrator:RegisterPlugin"``

Grants permission to register the plugin to receive an ID and to start receivin
g messages from the service

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_RegisterPlugin.html

#### Defined in

actions/migrationhub-orchestrator.ts:147

___

### RetryWorkflowStep

• **RetryWorkflowStep** = ``"migrationhub-orchestrator:RetryWorkflowStep"``

Grants permission to retry a failed step within a workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_RetryWorkflowStep.html

#### Defined in

actions/migrationhub-orchestrator.ts:153

___

### SendMessage

• **SendMessage** = ``"migrationhub-orchestrator:SendMessage"``

Grants permission to the plugin to send information to the service

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_SendMessage.html

#### Defined in

actions/migrationhub-orchestrator.ts:159

___

### StartWorkflow

• **StartWorkflow** = ``"migrationhub-orchestrator:StartWorkflow"``

Grants permission to start a workflow or resume a stopped workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_StartWorkflow.html

#### Defined in

actions/migrationhub-orchestrator.ts:165

___

### StopWorkflow

• **StopWorkflow** = ``"migrationhub-orchestrator:StopWorkflow"``

Grants permission to stop a workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_StopWorkflow.html

#### Defined in

actions/migrationhub-orchestrator.ts:171

___

### TagResource

• **TagResource** = ``"migrationhub-orchestrator:TagResource"``

Grants permission to add tags to a resource

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_TagResource.html

#### Defined in

actions/migrationhub-orchestrator.ts:177

___

### UntagResource

• **UntagResource** = ``"migrationhub-orchestrator:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UntagResource.html

#### Defined in

actions/migrationhub-orchestrator.ts:183

___

### UpdateWorkflow

• **UpdateWorkflow** = ``"migrationhub-orchestrator:UpdateWorkflow"``

Grants permission to update the metadata associated with the workflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UpdateWorkflow.html

#### Defined in

actions/migrationhub-orchestrator.ts:189

___

### UpdateWorkflowStep

• **UpdateWorkflowStep** = ``"migrationhub-orchestrator:UpdateWorkflowStep"``

Grants permission to update metadata and status of a custom step within a workf
low

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UpdateWorkflowStep.html

#### Defined in

actions/migrationhub-orchestrator.ts:196

___

### UpdateWorkflowStepGroup

• **UpdateWorkflowStepGroup** = ``"migrationhub-orchestrator:UpdateWorkflowStepGroup"``

Grants permission to update metadata associated with a step group in a given wo
rkflow

See https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UpdateWorkflowStepGroup.html

#### Defined in

actions/migrationhub-orchestrator.ts:203
