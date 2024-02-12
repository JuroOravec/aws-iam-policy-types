[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSqsActions

# Enumeration: AwsSqsActions

All IAM policy actions for Amazon SQS (SQS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsqs.html

2024-02-12T09:59:20.698Z

## Table of contents

### Enumeration Members

- [AddPermission](AwsSqsActions.md#addpermission)
- [CancelMessageMoveTask](AwsSqsActions.md#cancelmessagemovetask)
- [ChangeMessageVisibility](AwsSqsActions.md#changemessagevisibility)
- [CreateQueue](AwsSqsActions.md#createqueue)
- [DeleteMessage](AwsSqsActions.md#deletemessage)
- [DeleteQueue](AwsSqsActions.md#deletequeue)
- [GetQueueAttributes](AwsSqsActions.md#getqueueattributes)
- [GetQueueUrl](AwsSqsActions.md#getqueueurl)
- [ListDeadLetterSourceQueues](AwsSqsActions.md#listdeadlettersourcequeues)
- [ListMessageMoveTasks](AwsSqsActions.md#listmessagemovetasks)
- [ListQueueTags](AwsSqsActions.md#listqueuetags)
- [ListQueues](AwsSqsActions.md#listqueues)
- [PurgeQueue](AwsSqsActions.md#purgequeue)
- [ReceiveMessage](AwsSqsActions.md#receivemessage)
- [RemovePermission](AwsSqsActions.md#removepermission)
- [SendMessage](AwsSqsActions.md#sendmessage)
- [SetQueueAttributes](AwsSqsActions.md#setqueueattributes)
- [StartMessageMoveTask](AwsSqsActions.md#startmessagemovetask)
- [TagQueue](AwsSqsActions.md#tagqueue)
- [UntagQueue](AwsSqsActions.md#untagqueue)

## Enumeration Members

### AddPermission

• **AddPermission** = ``"sqs:AddPermission"``

Grants permission to a queue for a specific principal

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_AddPermission.html

#### Defined in

actions/sqs.ts:17

___

### CancelMessageMoveTask

• **CancelMessageMoveTask** = ``"sqs:CancelMessageMoveTask"``

Grants permission to cancel an in progress message move task

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CancelMessageMoveTask.html

#### Defined in

actions/sqs.ts:23

___

### ChangeMessageVisibility

• **ChangeMessageVisibility** = ``"sqs:ChangeMessageVisibility"``

Grants permission to change the visibility timeout of a specified message in a
queue to a new value

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibility.html

#### Defined in

actions/sqs.ts:30

___

### CreateQueue

• **CreateQueue** = ``"sqs:CreateQueue"``

Grants permission to create a new queue, or returns the URL of an existing one

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html

#### Defined in

actions/sqs.ts:36

___

### DeleteMessage

• **DeleteMessage** = ``"sqs:DeleteMessage"``

Grants permission to delete the specified message from the specified queue

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html

#### Defined in

actions/sqs.ts:42

___

### DeleteQueue

• **DeleteQueue** = ``"sqs:DeleteQueue"``

Grants permission to delete the queue specified by the queue URL, regardless of
whether the queue is empty

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html

#### Defined in

actions/sqs.ts:49

___

### GetQueueAttributes

• **GetQueueAttributes** = ``"sqs:GetQueueAttributes"``

Grants permission to get attributes for the specified queue

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html

#### Defined in

actions/sqs.ts:55

___

### GetQueueUrl

• **GetQueueUrl** = ``"sqs:GetQueueUrl"``

Grants permission to return the URL of an existing queue

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html

#### Defined in

actions/sqs.ts:61

___

### ListDeadLetterSourceQueues

• **ListDeadLetterSourceQueues** = ``"sqs:ListDeadLetterSourceQueues"``

Grants permission to return a list of your queues that have the RedrivePolicy q
ueue attribute configured with a dead letter queue

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListDeadLetterSourceQueues.html

#### Defined in

actions/sqs.ts:68

___

### ListMessageMoveTasks

• **ListMessageMoveTasks** = ``"sqs:ListMessageMoveTasks"``

Grants permission to list message move tasks

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListMessageMoveTasks.html

#### Defined in

actions/sqs.ts:74

___

### ListQueueTags

• **ListQueueTags** = ``"sqs:ListQueueTags"``

Grants permission to list tags added to an SQS queue

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueueTags.html

#### Defined in

actions/sqs.ts:80

___

### ListQueues

• **ListQueues** = ``"sqs:ListQueues"``

Grants permission to return a list of your queues

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html

#### Defined in

actions/sqs.ts:86

___

### PurgeQueue

• **PurgeQueue** = ``"sqs:PurgeQueue"``

Grants permission to delete the messages in a queue specified by the queue URL

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html

#### Defined in

actions/sqs.ts:92

___

### ReceiveMessage

• **ReceiveMessage** = ``"sqs:ReceiveMessage"``

Grants permission to retrieve one or more messages, with a maximum limit of 10
messages, from the specified queue

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html

#### Defined in

actions/sqs.ts:99

___

### RemovePermission

• **RemovePermission** = ``"sqs:RemovePermission"``

Grants permission to revoke any permissions in the queue policy that matches th
e specified Label parameter

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_RemovePermission.html

#### Defined in

actions/sqs.ts:106

___

### SendMessage

• **SendMessage** = ``"sqs:SendMessage"``

Grants permission to deliver a message to the specified queue

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html

#### Defined in

actions/sqs.ts:112

___

### SetQueueAttributes

• **SetQueueAttributes** = ``"sqs:SetQueueAttributes"``

Grants permission to set the value of one or more queue attributes

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SetQueueAttributes.html

#### Defined in

actions/sqs.ts:118

___

### StartMessageMoveTask

• **StartMessageMoveTask** = ``"sqs:StartMessageMoveTask"``

Grants permission to start a message move task

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_StartMessageMoveTask.html

#### Defined in

actions/sqs.ts:124

___

### TagQueue

• **TagQueue** = ``"sqs:TagQueue"``

Grants permission to add tags to the specified SQS queue

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_TagQueue.html

#### Defined in

actions/sqs.ts:130

___

### UntagQueue

• **UntagQueue** = ``"sqs:UntagQueue"``

Grants permission to remove tags from the specified SQS queue

See https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_UntagQueue.html

#### Defined in

actions/sqs.ts:136
