[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsBatchActions

# Enumeration: AwsBatchActions

All IAM policy actions for AWS Batch (BATCH)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html

2024-02-12T09:56:11.545Z

## Table of contents

### Enumeration Members

- [CancelJob](AwsBatchActions.md#canceljob)
- [CreateComputeEnvironment](AwsBatchActions.md#createcomputeenvironment)
- [CreateJobQueue](AwsBatchActions.md#createjobqueue)
- [CreateSchedulingPolicy](AwsBatchActions.md#createschedulingpolicy)
- [DeleteComputeEnvironment](AwsBatchActions.md#deletecomputeenvironment)
- [DeleteJobQueue](AwsBatchActions.md#deletejobqueue)
- [DeleteSchedulingPolicy](AwsBatchActions.md#deleteschedulingpolicy)
- [DeregisterJobDefinition](AwsBatchActions.md#deregisterjobdefinition)
- [DescribeComputeEnvironments](AwsBatchActions.md#describecomputeenvironments)
- [DescribeJobDefinitions](AwsBatchActions.md#describejobdefinitions)
- [DescribeJobQueues](AwsBatchActions.md#describejobqueues)
- [DescribeJobs](AwsBatchActions.md#describejobs)
- [DescribeSchedulingPolicies](AwsBatchActions.md#describeschedulingpolicies)
- [ListJobs](AwsBatchActions.md#listjobs)
- [ListSchedulingPolicies](AwsBatchActions.md#listschedulingpolicies)
- [ListTagsForResource](AwsBatchActions.md#listtagsforresource)
- [RegisterJobDefinition](AwsBatchActions.md#registerjobdefinition)
- [SubmitJob](AwsBatchActions.md#submitjob)
- [TagResource](AwsBatchActions.md#tagresource)
- [TerminateJob](AwsBatchActions.md#terminatejob)
- [UntagResource](AwsBatchActions.md#untagresource)
- [UpdateComputeEnvironment](AwsBatchActions.md#updatecomputeenvironment)
- [UpdateJobQueue](AwsBatchActions.md#updatejobqueue)
- [UpdateSchedulingPolicy](AwsBatchActions.md#updateschedulingpolicy)

## Enumeration Members

### CancelJob

• **CancelJob** = ``"batch:CancelJob"``

Grants permission to cancel a job in an AWS Batch job queue in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html

#### Defined in

actions/batch.ts:17

___

### CreateComputeEnvironment

• **CreateComputeEnvironment** = ``"batch:CreateComputeEnvironment"``

Grants permission to create an AWS Batch compute environment in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html

#### Defined in

actions/batch.ts:23

___

### CreateJobQueue

• **CreateJobQueue** = ``"batch:CreateJobQueue"``

Grants permission to create an AWS Batch job queue in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateJobQueue.html

#### Defined in

actions/batch.ts:29

___

### CreateSchedulingPolicy

• **CreateSchedulingPolicy** = ``"batch:CreateSchedulingPolicy"``

Grants permission to create an AWS Batch scheduling policy in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateSchedulingPolicy.html

#### Defined in

actions/batch.ts:35

___

### DeleteComputeEnvironment

• **DeleteComputeEnvironment** = ``"batch:DeleteComputeEnvironment"``

Grants permission to delete an AWS Batch compute environment in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteComputeEnvironment.html

#### Defined in

actions/batch.ts:41

___

### DeleteJobQueue

• **DeleteJobQueue** = ``"batch:DeleteJobQueue"``

Grants permission to delete an AWS Batch job queue in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteJobQueue.html

#### Defined in

actions/batch.ts:47

___

### DeleteSchedulingPolicy

• **DeleteSchedulingPolicy** = ``"batch:DeleteSchedulingPolicy"``

Grants permission to delete an AWS Batch scheduling policy in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteSchedulingPolicy.html

#### Defined in

actions/batch.ts:53

___

### DeregisterJobDefinition

• **DeregisterJobDefinition** = ``"batch:DeregisterJobDefinition"``

Grants permission to deregister an AWS Batch job definition in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_DeregisterJobDefinition.html

#### Defined in

actions/batch.ts:59

___

### DescribeComputeEnvironments

• **DescribeComputeEnvironments** = ``"batch:DescribeComputeEnvironments"``

Grants permission to describe one or more AWS Batch compute environments in you
r account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeComputeEnvironments.html

#### Defined in

actions/batch.ts:66

___

### DescribeJobDefinitions

• **DescribeJobDefinitions** = ``"batch:DescribeJobDefinitions"``

Grants permission to describe one or more AWS Batch job definitions in your acc
ount

See https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html

#### Defined in

actions/batch.ts:73

___

### DescribeJobQueues

• **DescribeJobQueues** = ``"batch:DescribeJobQueues"``

Grants permission to describe one or more AWS Batch job queues in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobQueues.html

#### Defined in

actions/batch.ts:79

___

### DescribeJobs

• **DescribeJobs** = ``"batch:DescribeJobs"``

Grants permission to describe a list of AWS Batch jobs in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html

#### Defined in

actions/batch.ts:85

___

### DescribeSchedulingPolicies

• **DescribeSchedulingPolicies** = ``"batch:DescribeSchedulingPolicies"``

Grants permission to describe one or more AWS Batch scheduling policies in your
account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeSchedulingPolicies.html

#### Defined in

actions/batch.ts:92

___

### ListJobs

• **ListJobs** = ``"batch:ListJobs"``

Grants permission to list jobs for a specified AWS Batch job queue in your acco
unt

See https://docs.aws.amazon.com/batch/latest/APIReference/API_ListJobs.html

#### Defined in

actions/batch.ts:99

___

### ListSchedulingPolicies

• **ListSchedulingPolicies** = ``"batch:ListSchedulingPolicies"``

Grants permission to list AWS Batch scheduling policies in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_ListSchedulingPolicies.html

#### Defined in

actions/batch.ts:105

___

### ListTagsForResource

• **ListTagsForResource** = ``"batch:ListTagsForResource"``

Grants permission to list tags for an AWS Batch resource in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/batch.ts:111

___

### RegisterJobDefinition

• **RegisterJobDefinition** = ``"batch:RegisterJobDefinition"``

Grants permission to register an AWS Batch job definition in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html

#### Defined in

actions/batch.ts:117

___

### SubmitJob

• **SubmitJob** = ``"batch:SubmitJob"``

Grants permission to submit an AWS Batch job from a job definition in your acco
unt

See https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html

#### Defined in

actions/batch.ts:124

___

### TagResource

• **TagResource** = ``"batch:TagResource"``

Grants permission to tag an AWS Batch resource in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html

#### Defined in

actions/batch.ts:130

___

### TerminateJob

• **TerminateJob** = ``"batch:TerminateJob"``

Grants permission to terminate a job in an AWS Batch job queue in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_TerminateJob.html

#### Defined in

actions/batch.ts:136

___

### UntagResource

• **UntagResource** = ``"batch:UntagResource"``

Grants permission to untag an AWS Batch resource in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html

#### Defined in

actions/batch.ts:142

___

### UpdateComputeEnvironment

• **UpdateComputeEnvironment** = ``"batch:UpdateComputeEnvironment"``

Grants permission to update an AWS Batch compute environment in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html

#### Defined in

actions/batch.ts:148

___

### UpdateJobQueue

• **UpdateJobQueue** = ``"batch:UpdateJobQueue"``

Grants permission to update an AWS Batch job queue in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateJobQueue.html

#### Defined in

actions/batch.ts:154

___

### UpdateSchedulingPolicy

• **UpdateSchedulingPolicy** = ``"batch:UpdateSchedulingPolicy"``

Grants permission to update an AWS Batch scheduling policy in your account

See https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateSchedulingPolicy.html

#### Defined in

actions/batch.ts:160
