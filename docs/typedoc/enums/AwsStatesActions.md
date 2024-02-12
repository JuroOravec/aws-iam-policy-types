[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsStatesActions

# Enumeration: AwsStatesActions

All IAM policy actions for AWS Step Functions (STATES)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsstepfunctions.html

2024-02-12T09:59:21.227Z

## Table of contents

### Enumeration Members

- [CreateActivity](AwsStatesActions.md#createactivity)
- [CreateStateMachine](AwsStatesActions.md#createstatemachine)
- [CreateStateMachineAlias](AwsStatesActions.md#createstatemachinealias)
- [DeleteActivity](AwsStatesActions.md#deleteactivity)
- [DeleteStateMachine](AwsStatesActions.md#deletestatemachine)
- [DeleteStateMachineAlias](AwsStatesActions.md#deletestatemachinealias)
- [DeleteStateMachineVersion](AwsStatesActions.md#deletestatemachineversion)
- [DescribeActivity](AwsStatesActions.md#describeactivity)
- [DescribeExecution](AwsStatesActions.md#describeexecution)
- [DescribeMapRun](AwsStatesActions.md#describemaprun)
- [DescribeStateMachine](AwsStatesActions.md#describestatemachine)
- [DescribeStateMachineAlias](AwsStatesActions.md#describestatemachinealias)
- [DescribeStateMachineForExecution](AwsStatesActions.md#describestatemachineforexecution)
- [GetActivityTask](AwsStatesActions.md#getactivitytask)
- [GetExecutionHistory](AwsStatesActions.md#getexecutionhistory)
- [InvokeHTTPEndpoint](AwsStatesActions.md#invokehttpendpoint)
- [ListActivities](AwsStatesActions.md#listactivities)
- [ListExecutions](AwsStatesActions.md#listexecutions)
- [ListMapRuns](AwsStatesActions.md#listmapruns)
- [ListStateMachineAliases](AwsStatesActions.md#liststatemachinealiases)
- [ListStateMachineVersions](AwsStatesActions.md#liststatemachineversions)
- [ListStateMachines](AwsStatesActions.md#liststatemachines)
- [ListTagsForResource](AwsStatesActions.md#listtagsforresource)
- [PublishStateMachineVersion](AwsStatesActions.md#publishstatemachineversion)
- [RedriveExecution](AwsStatesActions.md#redriveexecution)
- [RevealSecrets](AwsStatesActions.md#revealsecrets)
- [SendTaskFailure](AwsStatesActions.md#sendtaskfailure)
- [SendTaskHeartbeat](AwsStatesActions.md#sendtaskheartbeat)
- [SendTaskSuccess](AwsStatesActions.md#sendtasksuccess)
- [StartExecution](AwsStatesActions.md#startexecution)
- [StartSyncExecution](AwsStatesActions.md#startsyncexecution)
- [StopExecution](AwsStatesActions.md#stopexecution)
- [TagResource](AwsStatesActions.md#tagresource)
- [TestState](AwsStatesActions.md#teststate)
- [UntagResource](AwsStatesActions.md#untagresource)
- [UpdateMapRun](AwsStatesActions.md#updatemaprun)
- [UpdateStateMachine](AwsStatesActions.md#updatestatemachine)
- [UpdateStateMachineAlias](AwsStatesActions.md#updatestatemachinealias)

## Enumeration Members

### CreateActivity

• **CreateActivity** = ``"states:CreateActivity"``

Grants permission to create an activity

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateActivity.html

#### Defined in

actions/states.ts:17

___

### CreateStateMachine

• **CreateStateMachine** = ``"states:CreateStateMachine"``

Grants permission to create a state machine

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateStateMachine.html

#### Defined in

actions/states.ts:23

___

### CreateStateMachineAlias

• **CreateStateMachineAlias** = ``"states:CreateStateMachineAlias"``

Grants permission to create a state machine alias

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateStateMachineAlias.html

#### Defined in

actions/states.ts:29

___

### DeleteActivity

• **DeleteActivity** = ``"states:DeleteActivity"``

Grants permission to delete an activity

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteActivity.html

#### Defined in

actions/states.ts:35

___

### DeleteStateMachine

• **DeleteStateMachine** = ``"states:DeleteStateMachine"``

Grants permission to delete a state machine

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachine.html

#### Defined in

actions/states.ts:41

___

### DeleteStateMachineAlias

• **DeleteStateMachineAlias** = ``"states:DeleteStateMachineAlias"``

Grants permission to delete a state machine alias

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachineAlias.html

#### Defined in

actions/states.ts:47

___

### DeleteStateMachineVersion

• **DeleteStateMachineVersion** = ``"states:DeleteStateMachineVersion"``

Grants permission to delete a state machine version

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachineVersion.html

#### Defined in

actions/states.ts:53

___

### DescribeActivity

• **DescribeActivity** = ``"states:DescribeActivity"``

Grants permission to describe an activity

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeActivity.html

#### Defined in

actions/states.ts:59

___

### DescribeExecution

• **DescribeExecution** = ``"states:DescribeExecution"``

Grants permission to describe an execution

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeExecution.html

#### Defined in

actions/states.ts:65

___

### DescribeMapRun

• **DescribeMapRun** = ``"states:DescribeMapRun"``

Grants permission to describe a map run

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeMapRun.html

#### Defined in

actions/states.ts:71

___

### DescribeStateMachine

• **DescribeStateMachine** = ``"states:DescribeStateMachine"``

Grants permission to describe a state machine

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachine.html

#### Defined in

actions/states.ts:77

___

### DescribeStateMachineAlias

• **DescribeStateMachineAlias** = ``"states:DescribeStateMachineAlias"``

Grants permission to describe a state machine alias

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachineAlias.html

#### Defined in

actions/states.ts:83

___

### DescribeStateMachineForExecution

• **DescribeStateMachineForExecution** = ``"states:DescribeStateMachineForExecution"``

Grants permission to describe the state machine for an execution

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachineForExecution.html

#### Defined in

actions/states.ts:89

___

### GetActivityTask

• **GetActivityTask** = ``"states:GetActivityTask"``

Grants permission to be used by workers to retrieve a task (with the specified
activity ARN) which has been scheduled for execution by a running state machine

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetActivityTask.html

#### Defined in

actions/states.ts:96

___

### GetExecutionHistory

• **GetExecutionHistory** = ``"states:GetExecutionHistory"``

Grants permission to return the history of the specified execution as a list of
events

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html

#### Defined in

actions/states.ts:103

___

### InvokeHTTPEndpoint

• **InvokeHTTPEndpoint** = ``"states:InvokeHTTPEndpoint"``

Grants permission to invoke the HTTP Task state

See https://docs.aws.amazon.com/step-functions/latest/dg/connect-third-party-apis.html

#### Defined in

actions/states.ts:109

___

### ListActivities

• **ListActivities** = ``"states:ListActivities"``

Grants permission to list the existing activities

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListActivities.html

#### Defined in

actions/states.ts:115

___

### ListExecutions

• **ListExecutions** = ``"states:ListExecutions"``

Grants permission to list the executions of a state machine

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html

#### Defined in

actions/states.ts:121

___

### ListMapRuns

• **ListMapRuns** = ``"states:ListMapRuns"``

Grants permission to list the map runs of an execution

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListMapRuns.html

#### Defined in

actions/states.ts:127

___

### ListStateMachineAliases

• **ListStateMachineAliases** = ``"states:ListStateMachineAliases"``

Grants permission to list the aliases of a state machine

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachineAliases.html

#### Defined in

actions/states.ts:133

___

### ListStateMachineVersions

• **ListStateMachineVersions** = ``"states:ListStateMachineVersions"``

Grants permission to list the versions of a state machine

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachineVersions.html

#### Defined in

actions/states.ts:139

___

### ListStateMachines

• **ListStateMachines** = ``"states:ListStateMachines"``

Grants permission to lists the existing state machines

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachines.html

#### Defined in

actions/states.ts:145

___

### ListTagsForResource

• **ListTagsForResource** = ``"states:ListTagsForResource"``

Grants permission to list tags for an AWS Step Functions resource

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListTagsForResource.html

#### Defined in

actions/states.ts:151

___

### PublishStateMachineVersion

• **PublishStateMachineVersion** = ``"states:PublishStateMachineVersion"``

Grants permission to publish a state machine version

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_PublishStateMachineVersion.html

#### Defined in

actions/states.ts:157

___

### RedriveExecution

• **RedriveExecution** = ``"states:RedriveExecution"``

Grants permission to redrive an execution

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_RedriveExecution.html

#### Defined in

actions/states.ts:163

___

### RevealSecrets

• **RevealSecrets** = ``"states:RevealSecrets"``

Grants permission to reveal sensitive data from an execution

See https://docs.aws.amazon.com/step-functions/latest/dg/test-state-isolation.html

#### Defined in

actions/states.ts:169

___

### SendTaskFailure

• **SendTaskFailure** = ``"states:SendTaskFailure"``

Grants permission to report that the task identified by the taskToken failed

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskFailure.html

#### Defined in

actions/states.ts:175

___

### SendTaskHeartbeat

• **SendTaskHeartbeat** = ``"states:SendTaskHeartbeat"``

Grants permission to report to the service that the task represented by the spe
cified taskToken is still making progress

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html

#### Defined in

actions/states.ts:182

___

### SendTaskSuccess

• **SendTaskSuccess** = ``"states:SendTaskSuccess"``

Grants permission to report that the task identified by the taskToken completed
successfully

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskSuccess.html

#### Defined in

actions/states.ts:189

___

### StartExecution

• **StartExecution** = ``"states:StartExecution"``

Grants permission to start a state machine execution

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html

#### Defined in

actions/states.ts:195

___

### StartSyncExecution

• **StartSyncExecution** = ``"states:StartSyncExecution"``

Grants permission to start a Synchronous Express state machine execution

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartSyncExecution.html

#### Defined in

actions/states.ts:201

___

### StopExecution

• **StopExecution** = ``"states:StopExecution"``

Grants permission to stop an execution

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_StopExecution.html

#### Defined in

actions/states.ts:207

___

### TagResource

• **TagResource** = ``"states:TagResource"``

Grants permission to tag an AWS Step Functions resource

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_TagResource.html

#### Defined in

actions/states.ts:213

___

### TestState

• **TestState** = ``"states:TestState"``

Grants permission to test a state machine definition

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_TestState.html

#### Defined in

actions/states.ts:219

___

### UntagResource

• **UntagResource** = ``"states:UntagResource"``

Grants permission to remove a tag from an AWS Step Functions resource

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_UntagResource.html

#### Defined in

actions/states.ts:225

___

### UpdateMapRun

• **UpdateMapRun** = ``"states:UpdateMapRun"``

Grants permission to update a map run

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateMapRun.html

#### Defined in

actions/states.ts:231

___

### UpdateStateMachine

• **UpdateStateMachine** = ``"states:UpdateStateMachine"``

Grants permission to update a state machine

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateStateMachine.html

#### Defined in

actions/states.ts:237

___

### UpdateStateMachineAlias

• **UpdateStateMachineAlias** = ``"states:UpdateStateMachineAlias"``

Grants permission to update a state machine alias

See https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateStateMachineAlias.html

#### Defined in

actions/states.ts:243
