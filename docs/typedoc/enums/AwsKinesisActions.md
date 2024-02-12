[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsKinesisActions

# Enumeration: AwsKinesisActions

All IAM policy actions for Amazon Kinesis Data Streams (KINESIS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisdatastreams.html

2024-02-12T09:57:59.496Z

## Table of contents

### Enumeration Members

- [AddTagsToStream](AwsKinesisActions.md#addtagstostream)
- [CreateStream](AwsKinesisActions.md#createstream)
- [DecreaseStreamRetentionPeriod](AwsKinesisActions.md#decreasestreamretentionperiod)
- [DeleteResourcePolicy](AwsKinesisActions.md#deleteresourcepolicy)
- [DeleteStream](AwsKinesisActions.md#deletestream)
- [DeregisterStreamConsumer](AwsKinesisActions.md#deregisterstreamconsumer)
- [DescribeLimits](AwsKinesisActions.md#describelimits)
- [DescribeStream](AwsKinesisActions.md#describestream)
- [DescribeStreamConsumer](AwsKinesisActions.md#describestreamconsumer)
- [DescribeStreamSummary](AwsKinesisActions.md#describestreamsummary)
- [DisableEnhancedMonitoring](AwsKinesisActions.md#disableenhancedmonitoring)
- [EnableEnhancedMonitoring](AwsKinesisActions.md#enableenhancedmonitoring)
- [GetRecords](AwsKinesisActions.md#getrecords)
- [GetResourcePolicy](AwsKinesisActions.md#getresourcepolicy)
- [GetShardIterator](AwsKinesisActions.md#getsharditerator)
- [IncreaseStreamRetentionPeriod](AwsKinesisActions.md#increasestreamretentionperiod)
- [ListShards](AwsKinesisActions.md#listshards)
- [ListStreamConsumers](AwsKinesisActions.md#liststreamconsumers)
- [ListStreams](AwsKinesisActions.md#liststreams)
- [ListTagsForStream](AwsKinesisActions.md#listtagsforstream)
- [MergeShards](AwsKinesisActions.md#mergeshards)
- [PutRecord](AwsKinesisActions.md#putrecord)
- [PutRecords](AwsKinesisActions.md#putrecords)
- [PutResourcePolicy](AwsKinesisActions.md#putresourcepolicy)
- [RegisterStreamConsumer](AwsKinesisActions.md#registerstreamconsumer)
- [RemoveTagsFromStream](AwsKinesisActions.md#removetagsfromstream)
- [SplitShard](AwsKinesisActions.md#splitshard)
- [StartStreamEncryption](AwsKinesisActions.md#startstreamencryption)
- [StopStreamEncryption](AwsKinesisActions.md#stopstreamencryption)
- [SubscribeToShard](AwsKinesisActions.md#subscribetoshard)
- [UpdateShardCount](AwsKinesisActions.md#updateshardcount)
- [UpdateStreamMode](AwsKinesisActions.md#updatestreammode)

## Enumeration Members

### AddTagsToStream

• **AddTagsToStream** = ``"kinesis:AddTagsToStream"``

Grants permission to add or update tags for the specified Amazon Kinesis stream
. Each stream can have up to 10 tags

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_AddTagsToStream.html

#### Defined in

actions/kinesis.ts:18

___

### CreateStream

• **CreateStream** = ``"kinesis:CreateStream"``

Grants permission to create a Amazon Kinesis stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html

#### Defined in

actions/kinesis.ts:24

___

### DecreaseStreamRetentionPeriod

• **DecreaseStreamRetentionPeriod** = ``"kinesis:DecreaseStreamRetentionPeriod"``

Grants permission to decrease the stream's retention period, which is the lengt
h of time data records are accessible after they are added to the stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DecreaseStreamRetentionPeriod.html

#### Defined in

actions/kinesis.ts:31

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"kinesis:DeleteResourcePolicy"``

Grants permission to delete a resource policy associated with a specified strea
m or consumer

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/kinesis.ts:38

___

### DeleteStream

• **DeleteStream** = ``"kinesis:DeleteStream"``

Grants permission to delete a stream and all its shards and data

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeleteStream.html

#### Defined in

actions/kinesis.ts:44

___

### DeregisterStreamConsumer

• **DeregisterStreamConsumer** = ``"kinesis:DeregisterStreamConsumer"``

Grants permission to deregister a stream consumer with a Kinesis data stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeregisterStreamConsumer.html

#### Defined in

actions/kinesis.ts:50

___

### DescribeLimits

• **DescribeLimits** = ``"kinesis:DescribeLimits"``

Grants permission to describe the shard limits and usage for the account

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeLimits.html

#### Defined in

actions/kinesis.ts:56

___

### DescribeStream

• **DescribeStream** = ``"kinesis:DescribeStream"``

Grants permission to describe the specified stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStream.html

#### Defined in

actions/kinesis.ts:62

___

### DescribeStreamConsumer

• **DescribeStreamConsumer** = ``"kinesis:DescribeStreamConsumer"``

Grants permission to get the description of a registered stream consumer

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamConsumer.html

#### Defined in

actions/kinesis.ts:68

___

### DescribeStreamSummary

• **DescribeStreamSummary** = ``"kinesis:DescribeStreamSummary"``

Grants permission to provide a summarized description of the specified Kinesis
data stream without the shard list

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamSummary.html

#### Defined in

actions/kinesis.ts:75

___

### DisableEnhancedMonitoring

• **DisableEnhancedMonitoring** = ``"kinesis:DisableEnhancedMonitoring"``

Grants permission to disables enhanced monitoring

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DisableEnhancedMonitoring.html

#### Defined in

actions/kinesis.ts:81

___

### EnableEnhancedMonitoring

• **EnableEnhancedMonitoring** = ``"kinesis:EnableEnhancedMonitoring"``

Grants permission to enable enhanced Kinesis data stream monitoring for shard-l
evel metrics

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_EnableEnhancedMonitoring.html

#### Defined in

actions/kinesis.ts:88

___

### GetRecords

• **GetRecords** = ``"kinesis:GetRecords"``

Grants permission to get data records from a shard

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html

#### Defined in

actions/kinesis.ts:94

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"kinesis:GetResourcePolicy"``

Grants permission to get a resource policy associated with a specified stream o
r consumer

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetResourcePolicy.html

#### Defined in

actions/kinesis.ts:101

___

### GetShardIterator

• **GetShardIterator** = ``"kinesis:GetShardIterator"``

Grants permission to get a shard iterator. A shard iterator expires five minute
s after it is returned to the requester

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html

#### Defined in

actions/kinesis.ts:108

___

### IncreaseStreamRetentionPeriod

• **IncreaseStreamRetentionPeriod** = ``"kinesis:IncreaseStreamRetentionPeriod"``

Grants permission to increase the stream's retention period, which is the lengt
h of time data records are accessible after they are added to the stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_IncreaseStreamRetentionPeriod.html

#### Defined in

actions/kinesis.ts:115

___

### ListShards

• **ListShards** = ``"kinesis:ListShards"``

Grants permission to list the shards in a stream and provides information about
each shard

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListShards.html

#### Defined in

actions/kinesis.ts:122

___

### ListStreamConsumers

• **ListStreamConsumers** = ``"kinesis:ListStreamConsumers"``

Grants permission to list the stream consumers registered to receive data from
a Kinesis stream using enhanced fan-out, and provides information about each co
nsumer

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreamConsumers.html

#### Defined in

actions/kinesis.ts:130

___

### ListStreams

• **ListStreams** = ``"kinesis:ListStreams"``

Grants permission to list your streams

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreams.html

#### Defined in

actions/kinesis.ts:136

___

### ListTagsForStream

• **ListTagsForStream** = ``"kinesis:ListTagsForStream"``

Grants permission to list the tags for the specified Amazon Kinesis stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListTagsForStream.html

#### Defined in

actions/kinesis.ts:142

___

### MergeShards

• **MergeShards** = ``"kinesis:MergeShards"``

Grants permission to merge two adjacent shards in a stream and combines them in
to a single shard to reduce the stream's capacity to ingest and transport data

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_MergeShards.html

#### Defined in

actions/kinesis.ts:149

___

### PutRecord

• **PutRecord** = ``"kinesis:PutRecord"``

Grants permission to write a single data record from a producer into an Amazon
Kinesis stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html

#### Defined in

actions/kinesis.ts:156

___

### PutRecords

• **PutRecords** = ``"kinesis:PutRecords"``

Grants permission to write multiple data records from a producer into an Amazon
Kinesis stream in a single call (also referred to as a PutRecords request)

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html

#### Defined in

actions/kinesis.ts:163

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"kinesis:PutResourcePolicy"``

Grants permission to attach a resource policy to a specified stream or consumer

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/kinesis.ts:169

___

### RegisterStreamConsumer

• **RegisterStreamConsumer** = ``"kinesis:RegisterStreamConsumer"``

Grants permission to register a stream consumer with a Kinesis data stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RegisterStreamConsumer.html

#### Defined in

actions/kinesis.ts:175

___

### RemoveTagsFromStream

• **RemoveTagsFromStream** = ``"kinesis:RemoveTagsFromStream"``

Grants permission to remove tags from the specified Kinesis data stream. Remove
d tags are deleted and cannot be recovered after this operation successfully co
mpletes

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RemoveTagsFromStream.html

#### Defined in

actions/kinesis.ts:183

___

### SplitShard

• **SplitShard** = ``"kinesis:SplitShard"``

Grants permission to split a shard into two new shards in the Kinesis data stre
am, to increase the stream's capacity to ingest and transport data

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SplitShard.html

#### Defined in

actions/kinesis.ts:190

___

### StartStreamEncryption

• **StartStreamEncryption** = ``"kinesis:StartStreamEncryption"``

Grants permission to enable or update server-side encryption using an AWS KMS k
ey for a specified stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StartStreamEncryption.html

#### Defined in

actions/kinesis.ts:197

___

### StopStreamEncryption

• **StopStreamEncryption** = ``"kinesis:StopStreamEncryption"``

Grants permission to disable server-side encryption for a specified stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StopStreamEncryption.html

#### Defined in

actions/kinesis.ts:203

___

### SubscribeToShard

• **SubscribeToShard** = ``"kinesis:SubscribeToShard"``

Grants permission to listen to a specific shard with enhanced fan-out

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SubscribeToShard.html

#### Defined in

actions/kinesis.ts:209

___

### UpdateShardCount

• **UpdateShardCount** = ``"kinesis:UpdateShardCount"``

Grants permission to update the shard count of the specified stream to the spec
ified number of shards

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UpdateShardCount.html

#### Defined in

actions/kinesis.ts:216

___

### UpdateStreamMode

• **UpdateStreamMode** = ``"kinesis:UpdateStreamMode"``

Grants permission to update the capacity mode of the data stream

See https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UpdateStreamMode.html

#### Defined in

actions/kinesis.ts:222
