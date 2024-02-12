[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsKafkaActions

# Enumeration: AwsKafkaActions

All IAM policy actions for Amazon Managed Streaming for Apache Kafka (KAFKA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforapachekafka.html

2024-02-12T09:58:13.342Z

## Table of contents

### Enumeration Members

- [BatchAssociateScramSecret](AwsKafkaActions.md#batchassociatescramsecret)
- [BatchDisassociateScramSecret](AwsKafkaActions.md#batchdisassociatescramsecret)
- [CreateCluster](AwsKafkaActions.md#createcluster)
- [CreateClusterV2](AwsKafkaActions.md#createclusterv2)
- [CreateConfiguration](AwsKafkaActions.md#createconfiguration)
- [CreateReplicator](AwsKafkaActions.md#createreplicator)
- [CreateVpcConnection](AwsKafkaActions.md#createvpcconnection)
- [DeleteCluster](AwsKafkaActions.md#deletecluster)
- [DeleteClusterPolicy](AwsKafkaActions.md#deleteclusterpolicy)
- [DeleteConfiguration](AwsKafkaActions.md#deleteconfiguration)
- [DeleteReplicator](AwsKafkaActions.md#deletereplicator)
- [DeleteVpcConnection](AwsKafkaActions.md#deletevpcconnection)
- [DescribeCluster](AwsKafkaActions.md#describecluster)
- [DescribeClusterOperation](AwsKafkaActions.md#describeclusteroperation)
- [DescribeClusterOperationV2](AwsKafkaActions.md#describeclusteroperationv2)
- [DescribeClusterV2](AwsKafkaActions.md#describeclusterv2)
- [DescribeConfiguration](AwsKafkaActions.md#describeconfiguration)
- [DescribeConfigurationRevision](AwsKafkaActions.md#describeconfigurationrevision)
- [DescribeReplicator](AwsKafkaActions.md#describereplicator)
- [DescribeVpcConnection](AwsKafkaActions.md#describevpcconnection)
- [GetBootstrapBrokers](AwsKafkaActions.md#getbootstrapbrokers)
- [GetClusterPolicy](AwsKafkaActions.md#getclusterpolicy)
- [GetCompatibleKafkaVersions](AwsKafkaActions.md#getcompatiblekafkaversions)
- [ListClientVpcConnections](AwsKafkaActions.md#listclientvpcconnections)
- [ListClusterOperations](AwsKafkaActions.md#listclusteroperations)
- [ListClusterOperationsV2](AwsKafkaActions.md#listclusteroperationsv2)
- [ListClusters](AwsKafkaActions.md#listclusters)
- [ListClustersV2](AwsKafkaActions.md#listclustersv2)
- [ListConfigurationRevisions](AwsKafkaActions.md#listconfigurationrevisions)
- [ListConfigurations](AwsKafkaActions.md#listconfigurations)
- [ListKafkaVersions](AwsKafkaActions.md#listkafkaversions)
- [ListNodes](AwsKafkaActions.md#listnodes)
- [ListReplicators](AwsKafkaActions.md#listreplicators)
- [ListScramSecrets](AwsKafkaActions.md#listscramsecrets)
- [ListTagsForResource](AwsKafkaActions.md#listtagsforresource)
- [ListVpcConnections](AwsKafkaActions.md#listvpcconnections)
- [PutClusterPolicy](AwsKafkaActions.md#putclusterpolicy)
- [RebootBroker](AwsKafkaActions.md#rebootbroker)
- [RejectClientVpcConnection](AwsKafkaActions.md#rejectclientvpcconnection)
- [TagResource](AwsKafkaActions.md#tagresource)
- [UntagResource](AwsKafkaActions.md#untagresource)
- [UpdateBrokerCount](AwsKafkaActions.md#updatebrokercount)
- [UpdateBrokerStorage](AwsKafkaActions.md#updatebrokerstorage)
- [UpdateBrokerType](AwsKafkaActions.md#updatebrokertype)
- [UpdateClusterConfiguration](AwsKafkaActions.md#updateclusterconfiguration)
- [UpdateClusterKafkaVersion](AwsKafkaActions.md#updateclusterkafkaversion)
- [UpdateConfiguration](AwsKafkaActions.md#updateconfiguration)
- [UpdateConnectivity](AwsKafkaActions.md#updateconnectivity)
- [UpdateMonitoring](AwsKafkaActions.md#updatemonitoring)
- [UpdateReplicationInfo](AwsKafkaActions.md#updatereplicationinfo)
- [UpdateSecurity](AwsKafkaActions.md#updatesecurity)
- [UpdateStorage](AwsKafkaActions.md#updatestorage)

## Enumeration Members

### BatchAssociateScramSecret

• **BatchAssociateScramSecret** = ``"kafka:BatchAssociateScramSecret"``

Grants permission to associate one or more Scram Secrets with an Amazon MSK clu
ster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#BatchAssociateScramSecret

#### Defined in

actions/kafka.ts:18

___

### BatchDisassociateScramSecret

• **BatchDisassociateScramSecret** = ``"kafka:BatchDisassociateScramSecret"``

Grants permission to disassociate one or more Scram Secrets from an Amazon MSK
cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#BatchDisassociateScramSecret

#### Defined in

actions/kafka.ts:25

___

### CreateCluster

• **CreateCluster** = ``"kafka:CreateCluster"``

Grants permission to create an MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#CreateCluster

#### Defined in

actions/kafka.ts:31

___

### CreateClusterV2

• **CreateClusterV2** = ``"kafka:CreateClusterV2"``

Grants permission to create an MSK cluster

See https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters.html#CreateClusterV2

#### Defined in

actions/kafka.ts:37

___

### CreateConfiguration

• **CreateConfiguration** = ``"kafka:CreateConfiguration"``

Grants permission to create an MSK configuration

See https://docs.aws.amazon.com/msk/1.0/apireference/configurations.html#CreateConfiguration

#### Defined in

actions/kafka.ts:43

___

### CreateReplicator

• **CreateReplicator** = ``"kafka:CreateReplicator"``

Grants permission to create a MSK replicator

See https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html#CreateReplicator

#### Defined in

actions/kafka.ts:49

___

### CreateVpcConnection

• **CreateVpcConnection** = ``"kafka:CreateVpcConnection"``

Grants permission to create a MSK VPC connection

See https://docs.aws.amazon.com/msk/1.0/apireference/vpc-connection.html#CreateVpcConnection

#### Defined in

actions/kafka.ts:55

___

### DeleteCluster

• **DeleteCluster** = ``"kafka:DeleteCluster"``

Grants permission to delete an MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DeleteCluster

#### Defined in

actions/kafka.ts:61

___

### DeleteClusterPolicy

• **DeleteClusterPolicy** = ``"kafka:DeleteClusterPolicy"``

Grants permission to delete a cluster resource-based policy

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-policy.html#DeleteClusterPolicy

#### Defined in

actions/kafka.ts:67

___

### DeleteConfiguration

• **DeleteConfiguration** = ``"kafka:DeleteConfiguration"``

Grants permission to delete the specified MSK configuration

See https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#DeleteConfiguration

#### Defined in

actions/kafka.ts:73

___

### DeleteReplicator

• **DeleteReplicator** = ``"kafka:DeleteReplicator"``

Grants permission to delete a MSK replicator

See https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html#DeleteReplicator

#### Defined in

actions/kafka.ts:79

___

### DeleteVpcConnection

• **DeleteVpcConnection** = ``"kafka:DeleteVpcConnection"``

Grants permission to delete a MSK VPC connection

See https://docs.aws.amazon.com/msk/1.0/apireference/vpc-connection-arn.html#DeleteVpcConnection

#### Defined in

actions/kafka.ts:85

___

### DescribeCluster

• **DescribeCluster** = ``"kafka:DescribeCluster"``

Grants permission to describe an MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DescribeCluster

#### Defined in

actions/kafka.ts:91

___

### DescribeClusterOperation

• **DescribeClusterOperation** = ``"kafka:DescribeClusterOperation"``

Grants permission to describe the cluster operation that is specified by the gi
ven ARN

See https://docs.aws.amazon.com/msk/1.0/apireference/operations-clusteroperationarn.html#DescribeClusterOperation

#### Defined in

actions/kafka.ts:98

___

### DescribeClusterOperationV2

• **DescribeClusterOperationV2** = ``"kafka:DescribeClusterOperationV2"``

Grants permission to describe the cluster operation that is specified by the gi
ven ARN

See https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-operations-clusteroperationarn.html#DescribeClusterOperationV2

#### Defined in

actions/kafka.ts:105

___

### DescribeClusterV2

• **DescribeClusterV2** = ``"kafka:DescribeClusterV2"``

Grants permission to describe an MSK cluster

See https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters-clusterarn.html#DescribeClusterV2

#### Defined in

actions/kafka.ts:111

___

### DescribeConfiguration

• **DescribeConfiguration** = ``"kafka:DescribeConfiguration"``

Grants permission to describe an MSK configuration

See https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#DescribeConfiguration

#### Defined in

actions/kafka.ts:117

___

### DescribeConfigurationRevision

• **DescribeConfigurationRevision** = ``"kafka:DescribeConfigurationRevision"``

Grants permission to describe an MSK configuration revision

See https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn-revisions-revision.html#DescribeConfigurationRevision

#### Defined in

actions/kafka.ts:123

___

### DescribeReplicator

• **DescribeReplicator** = ``"kafka:DescribeReplicator"``

Grants permission to describe a MSK replicator

See https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html#DescribeReplicator

#### Defined in

actions/kafka.ts:129

___

### DescribeVpcConnection

• **DescribeVpcConnection** = ``"kafka:DescribeVpcConnection"``

Grants permission to describe a MSK VPC connection

See https://docs.aws.amazon.com/msk/1.0/apireference/vpc-connection-arn.html#DescribeVpcConnection

#### Defined in

actions/kafka.ts:135

___

### GetBootstrapBrokers

• **GetBootstrapBrokers** = ``"kafka:GetBootstrapBrokers"``

Grants permission to get connection details for the brokers in an MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-bootstrap-brokers.html#GetBootstrapBrokers

#### Defined in

actions/kafka.ts:141

___

### GetClusterPolicy

• **GetClusterPolicy** = ``"kafka:GetClusterPolicy"``

Grants permission to describe a cluster resource-based policy

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-policy.html#GetClusterPolicy

#### Defined in

actions/kafka.ts:147

___

### GetCompatibleKafkaVersions

• **GetCompatibleKafkaVersions** = ``"kafka:GetCompatibleKafkaVersions"``

Grants permission to get a list of the Apache Kafka versions to which you can u
pdate an MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/compatible-kafka-versions.html#GetCompatibleKafkaVersions

#### Defined in

actions/kafka.ts:154

___

### ListClientVpcConnections

• **ListClientVpcConnections** = ``"kafka:ListClientVpcConnections"``

Grants permission to list all MSK VPC connections created for a cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-client-vpc-connections.html#ListClientVpcConnections

#### Defined in

actions/kafka.ts:160

___

### ListClusterOperations

• **ListClusterOperations** = ``"kafka:ListClusterOperations"``

Grants permission to return a list of all the operations that have been perform
ed on the specified MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-operations.html#ListClusterOperations

#### Defined in

actions/kafka.ts:167

___

### ListClusterOperationsV2

• **ListClusterOperationsV2** = ``"kafka:ListClusterOperationsV2"``

Grants permission to return a list of all the operations that have been perform
ed on the specified MSK cluster

See https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters-clusterarn-operations.html#ListClusterOperationsV2

#### Defined in

actions/kafka.ts:174

___

### ListClusters

• **ListClusters** = ``"kafka:ListClusters"``

Grants permission to list all MSK clusters in this account

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#ListClusters

#### Defined in

actions/kafka.ts:180

___

### ListClustersV2

• **ListClustersV2** = ``"kafka:ListClustersV2"``

Grants permission to list all MSK clusters in this account

See https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters.html#ListClustersV2

#### Defined in

actions/kafka.ts:186

___

### ListConfigurationRevisions

• **ListConfigurationRevisions** = ``"kafka:ListConfigurationRevisions"``

Grants permission to list all revisions for an MSK configuration in this accoun
t

See https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn-revisions.html#ListConfigurationRevisions

#### Defined in

actions/kafka.ts:193

___

### ListConfigurations

• **ListConfigurations** = ``"kafka:ListConfigurations"``

Grants permission to list all MSK configurations in this account

See https://docs.aws.amazon.com/msk/1.0/apireference/configurations.html#ListConfigurations

#### Defined in

actions/kafka.ts:199

___

### ListKafkaVersions

• **ListKafkaVersions** = ``"kafka:ListKafkaVersions"``

Grants permission to list all Apache Kafka versions supported by Amazon MSK

See https://docs.aws.amazon.com/msk/1.0/apireference/kafka-versions.html#ListKafkaVersions

#### Defined in

actions/kafka.ts:205

___

### ListNodes

• **ListNodes** = ``"kafka:ListNodes"``

Grants permission to list brokers in an MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes.html#ListNodes

#### Defined in

actions/kafka.ts:211

___

### ListReplicators

• **ListReplicators** = ``"kafka:ListReplicators"``

Grants permission to list all MSK replicators in this account

See https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html#ListReplicators

#### Defined in

actions/kafka.ts:217

___

### ListScramSecrets

• **ListScramSecrets** = ``"kafka:ListScramSecrets"``

Grants permission to list the Scram Secrets associated with an Amazon MSK clust
er

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#ListScramSecrets

#### Defined in

actions/kafka.ts:224

___

### ListTagsForResource

• **ListTagsForResource** = ``"kafka:ListTagsForResource"``

Grants permission to list tags of an MSK resource

See https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#ListTagsForResource

#### Defined in

actions/kafka.ts:230

___

### ListVpcConnections

• **ListVpcConnections** = ``"kafka:ListVpcConnections"``

Grants permission to list all MSK VPC connections that this account uses

See https://docs.aws.amazon.com/msk/1.0/apireference/vpc-connections.html#ListVpcConnections

#### Defined in

actions/kafka.ts:236

___

### PutClusterPolicy

• **PutClusterPolicy** = ``"kafka:PutClusterPolicy"``

Grants permission to create or update the resource-based policy for a cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-policy.html#PutClusterPolicy

#### Defined in

actions/kafka.ts:242

___

### RebootBroker

• **RebootBroker** = ``"kafka:RebootBroker"``

Grants permission to reboot broker

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-reboot-broker.html#RebootBroker

#### Defined in

actions/kafka.ts:248

___

### RejectClientVpcConnection

• **RejectClientVpcConnection** = ``"kafka:RejectClientVpcConnection"``

Grants permission to reject a MSK VPC connection

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-client-vpc-connection.html#RejectClientVpcConnection

#### Defined in

actions/kafka.ts:254

___

### TagResource

• **TagResource** = ``"kafka:TagResource"``

Grants permission to tag an MSK resource

See https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#TagResource

#### Defined in

actions/kafka.ts:260

___

### UntagResource

• **UntagResource** = ``"kafka:UntagResource"``

Grants permission to remove tags from an MSK resource

See https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#UntagResource

#### Defined in

actions/kafka.ts:266

___

### UpdateBrokerCount

• **UpdateBrokerCount** = ``"kafka:UpdateBrokerCount"``

Grants permission to update the number of brokers of the MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-count.html#UpdateBrokerCount

#### Defined in

actions/kafka.ts:272

___

### UpdateBrokerStorage

• **UpdateBrokerStorage** = ``"kafka:UpdateBrokerStorage"``

Grants permission to update the storage size of the brokers of the MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-storage.html#UpdateBrokerStorage

#### Defined in

actions/kafka.ts:278

___

### UpdateBrokerType

• **UpdateBrokerType** = ``"kafka:UpdateBrokerType"``

Grants permission to update the broker type of an Amazon MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-type.html#UpdateBrokerType

#### Defined in

actions/kafka.ts:284

___

### UpdateClusterConfiguration

• **UpdateClusterConfiguration** = ``"kafka:UpdateClusterConfiguration"``

Grants permission to update the configuration of the MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-configuration.html#UpdateClusterConfiguration

#### Defined in

actions/kafka.ts:290

___

### UpdateClusterKafkaVersion

• **UpdateClusterKafkaVersion** = ``"kafka:UpdateClusterKafkaVersion"``

Grants permission to update the MSK cluster to the specified Apache Kafka versi
on

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-version.html#UpdateClusterKafkaVersion

#### Defined in

actions/kafka.ts:297

___

### UpdateConfiguration

• **UpdateConfiguration** = ``"kafka:UpdateConfiguration"``

Grants permission to create a new revision of the MSK configuration

See https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#UpdateConfiguration

#### Defined in

actions/kafka.ts:303

___

### UpdateConnectivity

• **UpdateConnectivity** = ``"kafka:UpdateConnectivity"``

Grants permission to update the connectivity settings for the MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-connectivity.html#UpdateConnectivity

#### Defined in

actions/kafka.ts:309

___

### UpdateMonitoring

• **UpdateMonitoring** = ``"kafka:UpdateMonitoring"``

Grants permission to update the monitoring settings for the MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-monitoring.html#UpdateMonitoring

#### Defined in

actions/kafka.ts:315

___

### UpdateReplicationInfo

• **UpdateReplicationInfo** = ``"kafka:UpdateReplicationInfo"``

Grants permission to update the replication info of the MSK replicator

See https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html#UpdateReplicationInfo

#### Defined in

actions/kafka.ts:321

___

### UpdateSecurity

• **UpdateSecurity** = ``"kafka:UpdateSecurity"``

Grants permission to update the security settings for the MSK cluster

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-security.html#UpdateSecurity

#### Defined in

actions/kafka.ts:327

___

### UpdateStorage

• **UpdateStorage** = ``"kafka:UpdateStorage"``

Grants permission to update the EBS storage (size or provisioned throughput) as
sociated with MSK brokers or set cluster storage mode to TIERED

See https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-storage.html#UpdateStorage

#### Defined in

actions/kafka.ts:334
