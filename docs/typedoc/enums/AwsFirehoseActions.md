[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsFirehoseActions

# Enumeration: AwsFirehoseActions

All IAM policy actions for Amazon Kinesis Firehose (FIREHOSE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisfirehose.html

2024-02-12T09:58:00.385Z

## Table of contents

### Enumeration Members

- [CreateDeliveryStream](AwsFirehoseActions.md#createdeliverystream)
- [DeleteDeliveryStream](AwsFirehoseActions.md#deletedeliverystream)
- [DescribeDeliveryStream](AwsFirehoseActions.md#describedeliverystream)
- [ListDeliveryStreams](AwsFirehoseActions.md#listdeliverystreams)
- [ListTagsForDeliveryStream](AwsFirehoseActions.md#listtagsfordeliverystream)
- [PutRecord](AwsFirehoseActions.md#putrecord)
- [PutRecordBatch](AwsFirehoseActions.md#putrecordbatch)
- [StartDeliveryStreamEncryption](AwsFirehoseActions.md#startdeliverystreamencryption)
- [StopDeliveryStreamEncryption](AwsFirehoseActions.md#stopdeliverystreamencryption)
- [TagDeliveryStream](AwsFirehoseActions.md#tagdeliverystream)
- [UntagDeliveryStream](AwsFirehoseActions.md#untagdeliverystream)
- [UpdateDestination](AwsFirehoseActions.md#updatedestination)

## Enumeration Members

### CreateDeliveryStream

• **CreateDeliveryStream** = ``"firehose:CreateDeliveryStream"``

Grants permission to create a delivery stream

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html

#### Defined in

actions/firehose.ts:17

___

### DeleteDeliveryStream

• **DeleteDeliveryStream** = ``"firehose:DeleteDeliveryStream"``

Grants permission to delete a delivery stream and its data

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_DeleteDeliveryStream.html

#### Defined in

actions/firehose.ts:23

___

### DescribeDeliveryStream

• **DescribeDeliveryStream** = ``"firehose:DescribeDeliveryStream"``

Grants permission to describe the specified delivery stream and gets the status

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_DescribeDeliveryStream.html

#### Defined in

actions/firehose.ts:29

___

### ListDeliveryStreams

• **ListDeliveryStreams** = ``"firehose:ListDeliveryStreams"``

Grants permission to list your delivery streams

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListDeliveryStreams.html

#### Defined in

actions/firehose.ts:35

___

### ListTagsForDeliveryStream

• **ListTagsForDeliveryStream** = ``"firehose:ListTagsForDeliveryStream"``

Grants permission to list the tags for the specified delivery stream

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListTagsForDeliveryStream.html

#### Defined in

actions/firehose.ts:41

___

### PutRecord

• **PutRecord** = ``"firehose:PutRecord"``

Grants permission to write a single data record into an Amazon Kinesis Firehose
delivery stream

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecord.html

#### Defined in

actions/firehose.ts:48

___

### PutRecordBatch

• **PutRecordBatch** = ``"firehose:PutRecordBatch"``

Grants permission to write multiple data records into a delivery stream in a si
ngle call, which can achieve higher throughput per producer than when writing s
ingle records

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html

#### Defined in

actions/firehose.ts:56

___

### StartDeliveryStreamEncryption

• **StartDeliveryStreamEncryption** = ``"firehose:StartDeliveryStreamEncryption"``

Grants permission to enable server-side encryption (SSE) for the delivery strea
m

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_StartDeliveryStreamEncryption.html

#### Defined in

actions/firehose.ts:63

___

### StopDeliveryStreamEncryption

• **StopDeliveryStreamEncryption** = ``"firehose:StopDeliveryStreamEncryption"``

Grants permission to disable the specified destination of the specified deliver
y stream

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_StopDeliveryStreamEncryption.html

#### Defined in

actions/firehose.ts:70

___

### TagDeliveryStream

• **TagDeliveryStream** = ``"firehose:TagDeliveryStream"``

Grants permission to add or update tags for the specified delivery stream

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_TagDeliveryStream.html

#### Defined in

actions/firehose.ts:76

___

### UntagDeliveryStream

• **UntagDeliveryStream** = ``"firehose:UntagDeliveryStream"``

Grants permission to remove tags from the specified delivery stream

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_UntagDeliveryStream.html

#### Defined in

actions/firehose.ts:82

___

### UpdateDestination

• **UpdateDestination** = ``"firehose:UpdateDestination"``

Grants permission to update the specified destination of the specified delivery
stream

See https://docs.aws.amazon.com/firehose/latest/APIReference/API_UpdateDestination.html

#### Defined in

actions/firehose.ts:89
