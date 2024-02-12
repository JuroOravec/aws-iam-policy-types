[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsBraketActions

# Enumeration: AwsBraketActions

All IAM policy actions for Amazon Braket (BRAKET)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbraket.html

2024-02-12T09:56:14.655Z

## Table of contents

### Enumeration Members

- [AcceptUserAgreement](AwsBraketActions.md#acceptuseragreement)
- [AccessBraketFeature](AwsBraketActions.md#accessbraketfeature)
- [CancelJob](AwsBraketActions.md#canceljob)
- [CancelQuantumTask](AwsBraketActions.md#cancelquantumtask)
- [CreateJob](AwsBraketActions.md#createjob)
- [CreateQuantumTask](AwsBraketActions.md#createquantumtask)
- [GetDevice](AwsBraketActions.md#getdevice)
- [GetJob](AwsBraketActions.md#getjob)
- [GetQuantumTask](AwsBraketActions.md#getquantumtask)
- [GetServiceLinkedRoleStatus](AwsBraketActions.md#getservicelinkedrolestatus)
- [GetUserAgreementStatus](AwsBraketActions.md#getuseragreementstatus)
- [ListTagsForResource](AwsBraketActions.md#listtagsforresource)
- [SearchDevices](AwsBraketActions.md#searchdevices)
- [SearchJobs](AwsBraketActions.md#searchjobs)
- [SearchQuantumTasks](AwsBraketActions.md#searchquantumtasks)
- [TagResource](AwsBraketActions.md#tagresource)
- [UntagResource](AwsBraketActions.md#untagresource)

## Enumeration Members

### AcceptUserAgreement

• **AcceptUserAgreement** = ``"braket:AcceptUserAgreement"``

Grants permission to accept the Amazon Braket user agreement

See https://docs.aws.amazon.com/braket/latest/APIReference/API_AcceptUserAgreement.html

#### Defined in

actions/braket.ts:17

___

### AccessBraketFeature

• **AccessBraketFeature** = ``"braket:AccessBraketFeature"``

Grants permission to check if an Amazon Braket feature is enabled for an accoun
t. Customers need this permission to use all features available in the console

See https://docs.aws.amazon.com/braket/latest/APIReference/API_AccessBraketFeature.html

#### Defined in

actions/braket.ts:24

___

### CancelJob

• **CancelJob** = ``"braket:CancelJob"``

Grants permission to cancel a job

See https://docs.aws.amazon.com/braket/latest/APIReference/API_CancelJob.html

#### Defined in

actions/braket.ts:30

___

### CancelQuantumTask

• **CancelQuantumTask** = ``"braket:CancelQuantumTask"``

Grants permission to cancel a quantum task

See https://docs.aws.amazon.com/braket/latest/APIReference/API_CancelQuantumTask.html

#### Defined in

actions/braket.ts:36

___

### CreateJob

• **CreateJob** = ``"braket:CreateJob"``

Grants permission to create a job

See https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateJob.html

#### Defined in

actions/braket.ts:42

___

### CreateQuantumTask

• **CreateQuantumTask** = ``"braket:CreateQuantumTask"``

Grants permission to create a quantum task

See https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateQuantumTask.html

#### Defined in

actions/braket.ts:48

___

### GetDevice

• **GetDevice** = ``"braket:GetDevice"``

Grants permission to retrieve information about the devices available in Amazon
Braket

See https://docs.aws.amazon.com/braket/latest/APIReference/API_GetDevice.html

#### Defined in

actions/braket.ts:55

___

### GetJob

• **GetJob** = ``"braket:GetJob"``

Grants permission to retrieve jobs

See https://docs.aws.amazon.com/braket/latest/APIReference/API_Job.html

#### Defined in

actions/braket.ts:61

___

### GetQuantumTask

• **GetQuantumTask** = ``"braket:GetQuantumTask"``

Grants permission to retrieve quantum tasks

See https://docs.aws.amazon.com/braket/latest/APIReference/API_GetQuantumTask.html

#### Defined in

actions/braket.ts:67

___

### GetServiceLinkedRoleStatus

• **GetServiceLinkedRoleStatus** = ``"braket:GetServiceLinkedRoleStatus"``

Grants permission to check if the Amazon Braket service linked role has been cr
eated

See https://docs.aws.amazon.com/braket/latest/APIReference/API_GetServiceLinkedRoleStatus.html

#### Defined in

actions/braket.ts:74

___

### GetUserAgreementStatus

• **GetUserAgreementStatus** = ``"braket:GetUserAgreementStatus"``

Grants permission to check if the account has accepted the Amazon Braket user a
greement

See https://docs.aws.amazon.com/braket/latest/APIReference/API_GetUserAgreementStatus.html

#### Defined in

actions/braket.ts:81

___

### ListTagsForResource

• **ListTagsForResource** = ``"braket:ListTagsForResource"``

Grants permission to listing the tags that have been applied to the quantum tas
k resource or the job

See https://docs.aws.amazon.com/braket/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/braket.ts:88

___

### SearchDevices

• **SearchDevices** = ``"braket:SearchDevices"``

Grants permission to search for devices available in Amazon Braket

See https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchDevices.html

#### Defined in

actions/braket.ts:94

___

### SearchJobs

• **SearchJobs** = ``"braket:SearchJobs"``

Grants permission to search for jobs

See https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchJob.html

#### Defined in

actions/braket.ts:100

___

### SearchQuantumTasks

• **SearchQuantumTasks** = ``"braket:SearchQuantumTasks"``

Grants permission to search for quantum tasks

See https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchQuantumTasks.html

#### Defined in

actions/braket.ts:106

___

### TagResource

• **TagResource** = ``"braket:TagResource"``

Grants permission to add one or more tags to a quantum task or a hybrid job

See https://docs.aws.amazon.com/braket/latest/APIReference/API_TagResource.html

#### Defined in

actions/braket.ts:112

___

### UntagResource

• **UntagResource** = ``"braket:UntagResource"``

Grants permission to remove one or more tags from a quantum task resource or a
job. A tag consists of a key-value pair

See https://docs.aws.amazon.com/braket/latest/APIReference/API_UntagResource.html

#### Defined in

actions/braket.ts:119
