[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSwfActions

# Enumeration: AwsSwfActions

All IAM policy actions for Amazon Simple Workflow Service (SWF)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleworkflowservice.html

2024-02-12T09:59:17.098Z

## Table of contents

### Enumeration Members

- [CancelTimer](AwsSwfActions.md#canceltimer)
- [CancelWorkflowExecution](AwsSwfActions.md#cancelworkflowexecution)
- [CompleteWorkflowExecution](AwsSwfActions.md#completeworkflowexecution)
- [ContinueAsNewWorkflowExecution](AwsSwfActions.md#continueasnewworkflowexecution)
- [CountClosedWorkflowExecutions](AwsSwfActions.md#countclosedworkflowexecutions)
- [CountOpenWorkflowExecutions](AwsSwfActions.md#countopenworkflowexecutions)
- [CountPendingActivityTasks](AwsSwfActions.md#countpendingactivitytasks)
- [CountPendingDecisionTasks](AwsSwfActions.md#countpendingdecisiontasks)
- [DeprecateActivityType](AwsSwfActions.md#deprecateactivitytype)
- [DeprecateDomain](AwsSwfActions.md#deprecatedomain)
- [DeprecateWorkflowType](AwsSwfActions.md#deprecateworkflowtype)
- [DescribeActivityType](AwsSwfActions.md#describeactivitytype)
- [DescribeDomain](AwsSwfActions.md#describedomain)
- [DescribeWorkflowExecution](AwsSwfActions.md#describeworkflowexecution)
- [DescribeWorkflowType](AwsSwfActions.md#describeworkflowtype)
- [FailWorkflowExecution](AwsSwfActions.md#failworkflowexecution)
- [GetWorkflowExecutionHistory](AwsSwfActions.md#getworkflowexecutionhistory)
- [ListActivityTypes](AwsSwfActions.md#listactivitytypes)
- [ListClosedWorkflowExecutions](AwsSwfActions.md#listclosedworkflowexecutions)
- [ListDomains](AwsSwfActions.md#listdomains)
- [ListOpenWorkflowExecutions](AwsSwfActions.md#listopenworkflowexecutions)
- [ListTagsForResource](AwsSwfActions.md#listtagsforresource)
- [ListWorkflowTypes](AwsSwfActions.md#listworkflowtypes)
- [PollForActivityTask](AwsSwfActions.md#pollforactivitytask)
- [PollForDecisionTask](AwsSwfActions.md#pollfordecisiontask)
- [RecordActivityTaskHeartbeat](AwsSwfActions.md#recordactivitytaskheartbeat)
- [RecordMarker](AwsSwfActions.md#recordmarker)
- [RegisterActivityType](AwsSwfActions.md#registeractivitytype)
- [RegisterDomain](AwsSwfActions.md#registerdomain)
- [RegisterWorkflowType](AwsSwfActions.md#registerworkflowtype)
- [RequestCancelActivityTask](AwsSwfActions.md#requestcancelactivitytask)
- [RequestCancelExternalWorkflowExecution](AwsSwfActions.md#requestcancelexternalworkflowexecution)
- [RequestCancelWorkflowExecution](AwsSwfActions.md#requestcancelworkflowexecution)
- [RespondActivityTaskCanceled](AwsSwfActions.md#respondactivitytaskcanceled)
- [RespondActivityTaskCompleted](AwsSwfActions.md#respondactivitytaskcompleted)
- [RespondActivityTaskFailed](AwsSwfActions.md#respondactivitytaskfailed)
- [RespondDecisionTaskCompleted](AwsSwfActions.md#responddecisiontaskcompleted)
- [ScheduleActivityTask](AwsSwfActions.md#scheduleactivitytask)
- [SignalExternalWorkflowExecution](AwsSwfActions.md#signalexternalworkflowexecution)
- [SignalWorkflowExecution](AwsSwfActions.md#signalworkflowexecution)
- [StartChildWorkflowExecution](AwsSwfActions.md#startchildworkflowexecution)
- [StartTimer](AwsSwfActions.md#starttimer)
- [StartWorkflowExecution](AwsSwfActions.md#startworkflowexecution)
- [TagResource](AwsSwfActions.md#tagresource)
- [TerminateWorkflowExecution](AwsSwfActions.md#terminateworkflowexecution)
- [UndeprecateActivityType](AwsSwfActions.md#undeprecateactivitytype)
- [UndeprecateDomain](AwsSwfActions.md#undeprecatedomain)
- [UndeprecateWorkflowType](AwsSwfActions.md#undeprecateworkflowtype)
- [UntagResource](AwsSwfActions.md#untagresource)

## Enumeration Members

### CancelTimer

• **CancelTimer** = ``"swf:CancelTimer"``

Grants permission to cancel a previously started timer and record a TimerCancel
ed event in the history

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:18

___

### CancelWorkflowExecution

• **CancelWorkflowExecution** = ``"swf:CancelWorkflowExecution"``

Grants permission to close the workflow execution and record a WorkflowExecutio
nCanceled event in the history

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:25

___

### CompleteWorkflowExecution

• **CompleteWorkflowExecution** = ``"swf:CompleteWorkflowExecution"``

Grants permission to close the workflow execution and record a WorkflowExecutio
nCompleted event in the history

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:32

___

### ContinueAsNewWorkflowExecution

• **ContinueAsNewWorkflowExecution** = ``"swf:ContinueAsNewWorkflowExecution"``

Grants permission to close the workflow execution and start a new workflow exec
ution of the same type using the same workflow ID and a unique run Id

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:39

___

### CountClosedWorkflowExecutions

• **CountClosedWorkflowExecutions** = ``"swf:CountClosedWorkflowExecutions"``

Grants permission to return the number of closed workflow executions within the
given domain that meet the specified filtering criteria

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountClosedWorkflowExecutions.html

#### Defined in

actions/swf.ts:46

___

### CountOpenWorkflowExecutions

• **CountOpenWorkflowExecutions** = ``"swf:CountOpenWorkflowExecutions"``

Grants permission to return the number of open workflow executions within the g
iven domain that meet the specified filtering criteria

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountOpenWorkflowExecutions.html

#### Defined in

actions/swf.ts:53

___

### CountPendingActivityTasks

• **CountPendingActivityTasks** = ``"swf:CountPendingActivityTasks"``

Grants permission to return the estimated number of activity tasks in the speci
fied task list

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingActivityTasks.html

#### Defined in

actions/swf.ts:60

___

### CountPendingDecisionTasks

• **CountPendingDecisionTasks** = ``"swf:CountPendingDecisionTasks"``

Grants permission to return the estimated number of decision tasks in the speci
fied task list

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingDecisionTasks.html

#### Defined in

actions/swf.ts:67

___

### DeprecateActivityType

• **DeprecateActivityType** = ``"swf:DeprecateActivityType"``

Grants permission to deprecate the specified activity type

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateActivityType.html

#### Defined in

actions/swf.ts:73

___

### DeprecateDomain

• **DeprecateDomain** = ``"swf:DeprecateDomain"``

Grants permission to deprecate the specified domain

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateDomain.html

#### Defined in

actions/swf.ts:79

___

### DeprecateWorkflowType

• **DeprecateWorkflowType** = ``"swf:DeprecateWorkflowType"``

Grants permission to deprecate the specified workflow type

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateWorkflowType.html

#### Defined in

actions/swf.ts:85

___

### DescribeActivityType

• **DescribeActivityType** = ``"swf:DescribeActivityType"``

Grants permission to return information about the specified activity type

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeActivityType.html

#### Defined in

actions/swf.ts:91

___

### DescribeDomain

• **DescribeDomain** = ``"swf:DescribeDomain"``

Grants permission to return information about the specified domain, including i
ts description and status

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeDomain.html

#### Defined in

actions/swf.ts:98

___

### DescribeWorkflowExecution

• **DescribeWorkflowExecution** = ``"swf:DescribeWorkflowExecution"``

Grants permission to return information about the specified workflow execution
including its type and some statistics

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowExecution.html

#### Defined in

actions/swf.ts:105

___

### DescribeWorkflowType

• **DescribeWorkflowType** = ``"swf:DescribeWorkflowType"``

Grants permission to return information about the specified workflow type

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowType.html

#### Defined in

actions/swf.ts:111

___

### FailWorkflowExecution

• **FailWorkflowExecution** = ``"swf:FailWorkflowExecution"``

Grants permission to close the workflow execution and record a WorkflowExecutio
nFailed event in the history

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:118

___

### GetWorkflowExecutionHistory

• **GetWorkflowExecutionHistory** = ``"swf:GetWorkflowExecutionHistory"``

Grants permission to return the history of the specified workflow execution

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_GetWorkflowExecutionHistory.html

#### Defined in

actions/swf.ts:124

___

### ListActivityTypes

• **ListActivityTypes** = ``"swf:ListActivityTypes"``

Grants permission to return information about all activities registered in the
specified domain that match the specified name and registration status

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListActivityTypes.html

#### Defined in

actions/swf.ts:131

___

### ListClosedWorkflowExecutions

• **ListClosedWorkflowExecutions** = ``"swf:ListClosedWorkflowExecutions"``

Grants permission to return a list of closed workflow executions in the specifi
ed domain that meet the filtering criteria

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListClosedWorkflowExecutions.html

#### Defined in

actions/swf.ts:138

___

### ListDomains

• **ListDomains** = ``"swf:ListDomains"``

Grants permission to return the list of domains registered in the account

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListDomains.html

#### Defined in

actions/swf.ts:144

___

### ListOpenWorkflowExecutions

• **ListOpenWorkflowExecutions** = ``"swf:ListOpenWorkflowExecutions"``

Grants permission to return a list of open workflow executions in the specified
domain that meet the filtering criteria

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListOpenWorkflowExecutions.html

#### Defined in

actions/swf.ts:151

___

### ListTagsForResource

• **ListTagsForResource** = ``"swf:ListTagsForResource"``

Grants permission to list tags for an AWS SWF resource

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListTagsForResource.html

#### Defined in

actions/swf.ts:157

___

### ListWorkflowTypes

• **ListWorkflowTypes** = ``"swf:ListWorkflowTypes"``

Grants permission to return information about workflow types in the specified d
omain

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListWorkflowTypes.html

#### Defined in

actions/swf.ts:164

___

### PollForActivityTask

• **PollForActivityTask** = ``"swf:PollForActivityTask"``

Grants permission to workers to get an ActivityTask from the specified activity
taskList

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForActivityTask.html

#### Defined in

actions/swf.ts:171

___

### PollForDecisionTask

• **PollForDecisionTask** = ``"swf:PollForDecisionTask"``

Grants permission to deciders to get a DecisionTask from the specified decision
taskList

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForDecisionTask.html

#### Defined in

actions/swf.ts:178

___

### RecordActivityTaskHeartbeat

• **RecordActivityTaskHeartbeat** = ``"swf:RecordActivityTaskHeartbeat"``

Grants permission to workers to report to the service that the ActivityTask rep
resented by the specified taskToken is still making progress

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordActivityTaskHeartbeat.html

#### Defined in

actions/swf.ts:185

___

### RecordMarker

• **RecordMarker** = ``"swf:RecordMarker"``

Grants permission to record a MarkerRecorded event in the history

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:191

___

### RegisterActivityType

• **RegisterActivityType** = ``"swf:RegisterActivityType"``

Grants permission to register a new activity type along with its configuration
settings in the specified domain

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterActivityType.html

#### Defined in

actions/swf.ts:198

___

### RegisterDomain

• **RegisterDomain** = ``"swf:RegisterDomain"``

Grants permission to register a new domain

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterDomain.html

#### Defined in

actions/swf.ts:204

___

### RegisterWorkflowType

• **RegisterWorkflowType** = ``"swf:RegisterWorkflowType"``

Grants permission to register a new workflow type and its configuration setting
s in the specified domain

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterWorkflowType.html

#### Defined in

actions/swf.ts:211

___

### RequestCancelActivityTask

• **RequestCancelActivityTask** = ``"swf:RequestCancelActivityTask"``

Grants permission to attempt to cancel a previously scheduled activity task

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:217

___

### RequestCancelExternalWorkflowExecution

• **RequestCancelExternalWorkflowExecution** = ``"swf:RequestCancelExternalWorkflowExecution"``

Grants permission to request that a request be made to cancel the specified ext
ernal workflow execution

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:224

___

### RequestCancelWorkflowExecution

• **RequestCancelWorkflowExecution** = ``"swf:RequestCancelWorkflowExecution"``

Grants permission to record a WorkflowExecutionCancelRequested event in the cur
rently running workflow execution identified by the given domain, workflowId, a
nd runId

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelWorkflowExecution.html

#### Defined in

actions/swf.ts:232

___

### RespondActivityTaskCanceled

• **RespondActivityTaskCanceled** = ``"swf:RespondActivityTaskCanceled"``

Grants permission to workers to tell the service that the ActivityTask identifi
ed by the taskToken was successfully canceled

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCanceled.html

#### Defined in

actions/swf.ts:239

___

### RespondActivityTaskCompleted

• **RespondActivityTaskCompleted** = ``"swf:RespondActivityTaskCompleted"``

Grants permission to workers to tell the service that the ActivityTask identifi
ed by the taskToken completed successfully with a result (if provided)

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCompleted.html

#### Defined in

actions/swf.ts:246

___

### RespondActivityTaskFailed

• **RespondActivityTaskFailed** = ``"swf:RespondActivityTaskFailed"``

Grants permission to workers to tell the service that the ActivityTask identifi
ed by the taskToken has failed with reason (if specified)

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskFailed.html

#### Defined in

actions/swf.ts:253

___

### RespondDecisionTaskCompleted

• **RespondDecisionTaskCompleted** = ``"swf:RespondDecisionTaskCompleted"``

Grants permission to deciders to tell the service that the DecisionTask identif
ied by the taskToken has successfully completed

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondDecisionTaskCompleted.html

#### Defined in

actions/swf.ts:260

___

### ScheduleActivityTask

• **ScheduleActivityTask** = ``"swf:ScheduleActivityTask"``

Grants permission to schedule an activity task

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:266

___

### SignalExternalWorkflowExecution

• **SignalExternalWorkflowExecution** = ``"swf:SignalExternalWorkflowExecution"``

Grants permission to request a signal to be delivered to the specified external
workflow execution and records

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:273

___

### SignalWorkflowExecution

• **SignalWorkflowExecution** = ``"swf:SignalWorkflowExecution"``

Grants permission to record a WorkflowExecutionSignaled event in the workflow e
xecution history and create a decision task for the workflow execution identifi
ed by the given domain, workflowId and runId

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalWorkflowExecution.html

#### Defined in

actions/swf.ts:281

___

### StartChildWorkflowExecution

• **StartChildWorkflowExecution** = ``"swf:StartChildWorkflowExecution"``

Grants permission to request that a child workflow execution be started

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:287

___

### StartTimer

• **StartTimer** = ``"swf:StartTimer"``

Grants permission to start a timer for a workflow execution

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html

#### Defined in

actions/swf.ts:293

___

### StartWorkflowExecution

• **StartWorkflowExecution** = ``"swf:StartWorkflowExecution"``

Grants permission to start an execution of the workflow type in the specified d
omain using the provided workflowId and input data

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartWorkflowExecution.html

#### Defined in

actions/swf.ts:300

___

### TagResource

• **TagResource** = ``"swf:TagResource"``

Grants permission to tag an AWS SWF resource

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TagResource.html

#### Defined in

actions/swf.ts:306

___

### TerminateWorkflowExecution

• **TerminateWorkflowExecution** = ``"swf:TerminateWorkflowExecution"``

Grants permission to record a WorkflowExecutionTerminated event and force closu
re of the workflow execution identified by the given domain, runId, and workflo
wId

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TerminateWorkflowExecution.html

#### Defined in

actions/swf.ts:314

___

### UndeprecateActivityType

• **UndeprecateActivityType** = ``"swf:UndeprecateActivityType"``

Grants permission to undeprecate a previously deprecated activity type

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UndeprecateActivityType.html

#### Defined in

actions/swf.ts:320

___

### UndeprecateDomain

• **UndeprecateDomain** = ``"swf:UndeprecateDomain"``

Grants permission to undeprecate a previously deprecated domain

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UndeprecateDomain.html

#### Defined in

actions/swf.ts:326

___

### UndeprecateWorkflowType

• **UndeprecateWorkflowType** = ``"swf:UndeprecateWorkflowType"``

Grants permission to undeprecate a previously deprecated workflow type

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UndeprecateWorkflowType.html

#### Defined in

actions/swf.ts:332

___

### UntagResource

• **UntagResource** = ``"swf:UntagResource"``

Grants permission to remove a tag from an AWS SWF resource

See https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UntagResource.html

#### Defined in

actions/swf.ts:338
