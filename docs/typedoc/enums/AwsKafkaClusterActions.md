[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsKafkaClusterActions

# Enumeration: AwsKafkaClusterActions

All IAM policy actions for Apache Kafka APIs for Amazon MSK clusters (KAFKA-CLUSTER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_apachekafkaapisforamazonmskclusters.html

2024-02-12T09:55:54.758Z

## Table of contents

### Enumeration Members

- [AlterCluster](AwsKafkaClusterActions.md#altercluster)
- [AlterClusterDynamicConfiguration](AwsKafkaClusterActions.md#alterclusterdynamicconfiguration)
- [AlterGroup](AwsKafkaClusterActions.md#altergroup)
- [AlterTopic](AwsKafkaClusterActions.md#altertopic)
- [AlterTopicDynamicConfiguration](AwsKafkaClusterActions.md#altertopicdynamicconfiguration)
- [AlterTransactionalId](AwsKafkaClusterActions.md#altertransactionalid)
- [Connect](AwsKafkaClusterActions.md#connect)
- [CreateTopic](AwsKafkaClusterActions.md#createtopic)
- [DeleteGroup](AwsKafkaClusterActions.md#deletegroup)
- [DeleteTopic](AwsKafkaClusterActions.md#deletetopic)
- [DescribeCluster](AwsKafkaClusterActions.md#describecluster)
- [DescribeClusterDynamicConfiguration](AwsKafkaClusterActions.md#describeclusterdynamicconfiguration)
- [DescribeGroup](AwsKafkaClusterActions.md#describegroup)
- [DescribeTopic](AwsKafkaClusterActions.md#describetopic)
- [DescribeTopicDynamicConfiguration](AwsKafkaClusterActions.md#describetopicdynamicconfiguration)
- [DescribeTransactionalId](AwsKafkaClusterActions.md#describetransactionalid)
- [ReadData](AwsKafkaClusterActions.md#readdata)
- [WriteData](AwsKafkaClusterActions.md#writedata)
- [WriteDataIdempotently](AwsKafkaClusterActions.md#writedataidempotently)

## Enumeration Members

### AlterCluster

• **AlterCluster** = ``"kafka-cluster:AlterCluster"``

Grants permission to alter various aspects of the cluster, equivalent to Apache
Kafka's ALTER CLUSTER ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:18

___

### AlterClusterDynamicConfiguration

• **AlterClusterDynamicConfiguration** = ``"kafka-cluster:AlterClusterDynamicConfiguration"``

Grants permission to alter the dynamic configuration of a cluster, equivalent t
o Apache Kafka's ALTER_CONFIGS CLUSTER ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:25

___

### AlterGroup

• **AlterGroup** = ``"kafka-cluster:AlterGroup"``

Grants permission to join groups on a cluster, equivalent to Apache Kafka's REA
D GROUP ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:32

___

### AlterTopic

• **AlterTopic** = ``"kafka-cluster:AlterTopic"``

Grants permission to alter topics on a cluster, equivalent to Apache Kafka's AL
TER TOPIC ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:39

___

### AlterTopicDynamicConfiguration

• **AlterTopicDynamicConfiguration** = ``"kafka-cluster:AlterTopicDynamicConfiguration"``

Grants permission to alter the dynamic configuration of topics on a cluster, eq
uivalent to Apache Kafka's ALTER_CONFIGS TOPIC ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:46

___

### AlterTransactionalId

• **AlterTransactionalId** = ``"kafka-cluster:AlterTransactionalId"``

Grants permission to alter transactional IDs on a cluster, equivalent to Apache
Kafka's WRITE TRANSACTIONAL_ID ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:53

___

### Connect

• **Connect** = ``"kafka-cluster:Connect"``

Grants permission to connect and authenticate to the cluster

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:59

___

### CreateTopic

• **CreateTopic** = ``"kafka-cluster:CreateTopic"``

Grants permission to create topics on a cluster, equivalent to Apache Kafka's C
REATE CLUSTER/TOPIC ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:66

___

### DeleteGroup

• **DeleteGroup** = ``"kafka-cluster:DeleteGroup"``

Grants permission to delete groups on a cluster, equivalent to Apache Kafka's D
ELETE GROUP ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:73

___

### DeleteTopic

• **DeleteTopic** = ``"kafka-cluster:DeleteTopic"``

Grants permission to delete topics on a cluster, equivalent to Apache Kafka's D
ELETE TOPIC ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:80

___

### DescribeCluster

• **DescribeCluster** = ``"kafka-cluster:DescribeCluster"``

Grants permission to describe various aspects of the cluster, equivalent to Apa
che Kafka's DESCRIBE CLUSTER ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:87

___

### DescribeClusterDynamicConfiguration

• **DescribeClusterDynamicConfiguration** = ``"kafka-cluster:DescribeClusterDynamicConfiguration"``

Grants permission to describe the dynamic configuration of a cluster, equivalen
t to Apache Kafka's DESCRIBE_CONFIGS CLUSTER ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:94

___

### DescribeGroup

• **DescribeGroup** = ``"kafka-cluster:DescribeGroup"``

Grants permission to describe groups on a cluster, equivalent to Apache Kafka's
DESCRIBE GROUP ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:101

___

### DescribeTopic

• **DescribeTopic** = ``"kafka-cluster:DescribeTopic"``

Grants permission to describe topics on a cluster, equivalent to Apache Kafka's
DESCRIBE TOPIC ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:108

___

### DescribeTopicDynamicConfiguration

• **DescribeTopicDynamicConfiguration** = ``"kafka-cluster:DescribeTopicDynamicConfiguration"``

Grants permission to describe the dynamic configuration of topics on a cluster,
equivalent to Apache Kafka's DESCRIBE_CONFIGS TOPIC ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:115

___

### DescribeTransactionalId

• **DescribeTransactionalId** = ``"kafka-cluster:DescribeTransactionalId"``

Grants permission to describe transactional IDs on a cluster, equivalent to Apa
che Kafka's DESCRIBE TRANSACTIONAL_ID ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:122

___

### ReadData

• **ReadData** = ``"kafka-cluster:ReadData"``

Grants permission to read data from topics on a cluster, equivalent to Apache K
afka's READ TOPIC ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:129

___

### WriteData

• **WriteData** = ``"kafka-cluster:WriteData"``

Grants permission to write data to topics on a cluster, equivalent to Apache Ka
fka's WRITE TOPIC ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:136

___

### WriteDataIdempotently

• **WriteDataIdempotently** = ``"kafka-cluster:WriteDataIdempotently"``

Grants permission to write data idempotently on a cluster, equivalent to Apache
Kafka's IDEMPOTENT_WRITE CLUSTER ACL

See https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions

#### Defined in

actions/kafka-cluster.ts:143
