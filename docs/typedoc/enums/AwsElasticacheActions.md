[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsElasticacheActions

# Enumeration: AwsElasticacheActions

All IAM policy actions for Amazon ElastiCache (ELASTICACHE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticache.html

2024-02-12T09:57:13.899Z

## Table of contents

### Enumeration Members

- [AddTagsToResource](AwsElasticacheActions.md#addtagstoresource)
- [AuthorizeCacheSecurityGroupIngress](AwsElasticacheActions.md#authorizecachesecuritygroupingress)
- [BatchApplyUpdateAction](AwsElasticacheActions.md#batchapplyupdateaction)
- [BatchStopUpdateAction](AwsElasticacheActions.md#batchstopupdateaction)
- [CompleteMigration](AwsElasticacheActions.md#completemigration)
- [Connect](AwsElasticacheActions.md#connect)
- [CopyServerlessCacheSnapshot](AwsElasticacheActions.md#copyserverlesscachesnapshot)
- [CopySnapshot](AwsElasticacheActions.md#copysnapshot)
- [CreateCacheCluster](AwsElasticacheActions.md#createcachecluster)
- [CreateCacheParameterGroup](AwsElasticacheActions.md#createcacheparametergroup)
- [CreateCacheSecurityGroup](AwsElasticacheActions.md#createcachesecuritygroup)
- [CreateCacheSubnetGroup](AwsElasticacheActions.md#createcachesubnetgroup)
- [CreateGlobalReplicationGroup](AwsElasticacheActions.md#createglobalreplicationgroup)
- [CreateReplicationGroup](AwsElasticacheActions.md#createreplicationgroup)
- [CreateServerlessCache](AwsElasticacheActions.md#createserverlesscache)
- [CreateServerlessCacheSnapshot](AwsElasticacheActions.md#createserverlesscachesnapshot)
- [CreateSnapshot](AwsElasticacheActions.md#createsnapshot)
- [CreateUser](AwsElasticacheActions.md#createuser)
- [CreateUserGroup](AwsElasticacheActions.md#createusergroup)
- [DecreaseNodeGroupsInGlobalReplicationGroup](AwsElasticacheActions.md#decreasenodegroupsinglobalreplicationgroup)
- [DecreaseReplicaCount](AwsElasticacheActions.md#decreasereplicacount)
- [DeleteCacheCluster](AwsElasticacheActions.md#deletecachecluster)
- [DeleteCacheParameterGroup](AwsElasticacheActions.md#deletecacheparametergroup)
- [DeleteCacheSecurityGroup](AwsElasticacheActions.md#deletecachesecuritygroup)
- [DeleteCacheSubnetGroup](AwsElasticacheActions.md#deletecachesubnetgroup)
- [DeleteGlobalReplicationGroup](AwsElasticacheActions.md#deleteglobalreplicationgroup)
- [DeleteReplicationGroup](AwsElasticacheActions.md#deletereplicationgroup)
- [DeleteServerlessCache](AwsElasticacheActions.md#deleteserverlesscache)
- [DeleteServerlessCacheSnapshot](AwsElasticacheActions.md#deleteserverlesscachesnapshot)
- [DeleteSnapshot](AwsElasticacheActions.md#deletesnapshot)
- [DeleteUser](AwsElasticacheActions.md#deleteuser)
- [DeleteUserGroup](AwsElasticacheActions.md#deleteusergroup)
- [DescribeCacheClusters](AwsElasticacheActions.md#describecacheclusters)
- [DescribeCacheEngineVersions](AwsElasticacheActions.md#describecacheengineversions)
- [DescribeCacheParameterGroups](AwsElasticacheActions.md#describecacheparametergroups)
- [DescribeCacheParameters](AwsElasticacheActions.md#describecacheparameters)
- [DescribeCacheSecurityGroups](AwsElasticacheActions.md#describecachesecuritygroups)
- [DescribeCacheSubnetGroups](AwsElasticacheActions.md#describecachesubnetgroups)
- [DescribeEngineDefaultParameters](AwsElasticacheActions.md#describeenginedefaultparameters)
- [DescribeEvents](AwsElasticacheActions.md#describeevents)
- [DescribeGlobalReplicationGroups](AwsElasticacheActions.md#describeglobalreplicationgroups)
- [DescribeReplicationGroups](AwsElasticacheActions.md#describereplicationgroups)
- [DescribeReservedCacheNodes](AwsElasticacheActions.md#describereservedcachenodes)
- [DescribeReservedCacheNodesOfferings](AwsElasticacheActions.md#describereservedcachenodesofferings)
- [DescribeServerlessCacheSnapshots](AwsElasticacheActions.md#describeserverlesscachesnapshots)
- [DescribeServerlessCaches](AwsElasticacheActions.md#describeserverlesscaches)
- [DescribeServiceUpdates](AwsElasticacheActions.md#describeserviceupdates)
- [DescribeSnapshots](AwsElasticacheActions.md#describesnapshots)
- [DescribeUpdateActions](AwsElasticacheActions.md#describeupdateactions)
- [DescribeUserGroups](AwsElasticacheActions.md#describeusergroups)
- [DescribeUsers](AwsElasticacheActions.md#describeusers)
- [DisassociateGlobalReplicationGroup](AwsElasticacheActions.md#disassociateglobalreplicationgroup)
- [ExportServerlessCacheSnapshot](AwsElasticacheActions.md#exportserverlesscachesnapshot)
- [FailoverGlobalReplicationGroup](AwsElasticacheActions.md#failoverglobalreplicationgroup)
- [IncreaseNodeGroupsInGlobalReplicationGroup](AwsElasticacheActions.md#increasenodegroupsinglobalreplicationgroup)
- [IncreaseReplicaCount](AwsElasticacheActions.md#increasereplicacount)
- [InterruptClusterAzPower](AwsElasticacheActions.md#interruptclusterazpower)
- [ListAllowedNodeTypeModifications](AwsElasticacheActions.md#listallowednodetypemodifications)
- [ListTagsForResource](AwsElasticacheActions.md#listtagsforresource)
- [ModifyCacheCluster](AwsElasticacheActions.md#modifycachecluster)
- [ModifyCacheParameterGroup](AwsElasticacheActions.md#modifycacheparametergroup)
- [ModifyCacheSubnetGroup](AwsElasticacheActions.md#modifycachesubnetgroup)
- [ModifyGlobalReplicationGroup](AwsElasticacheActions.md#modifyglobalreplicationgroup)
- [ModifyReplicationGroup](AwsElasticacheActions.md#modifyreplicationgroup)
- [ModifyReplicationGroupShardConfiguration](AwsElasticacheActions.md#modifyreplicationgroupshardconfiguration)
- [ModifyServerlessCache](AwsElasticacheActions.md#modifyserverlesscache)
- [ModifyUser](AwsElasticacheActions.md#modifyuser)
- [ModifyUserGroup](AwsElasticacheActions.md#modifyusergroup)
- [PurchaseReservedCacheNodesOffering](AwsElasticacheActions.md#purchasereservedcachenodesoffering)
- [RebalanceSlotsInGlobalReplicationGroup](AwsElasticacheActions.md#rebalanceslotsinglobalreplicationgroup)
- [RebootCacheCluster](AwsElasticacheActions.md#rebootcachecluster)
- [RemoveTagsFromResource](AwsElasticacheActions.md#removetagsfromresource)
- [ResetCacheParameterGroup](AwsElasticacheActions.md#resetcacheparametergroup)
- [RevokeCacheSecurityGroupIngress](AwsElasticacheActions.md#revokecachesecuritygroupingress)
- [StartMigration](AwsElasticacheActions.md#startmigration)
- [TestFailover](AwsElasticacheActions.md#testfailover)
- [TestMigration](AwsElasticacheActions.md#testmigration)

## Enumeration Members

### AddTagsToResource

• **AddTagsToResource** = ``"elasticache:AddTagsToResource"``

Grants permission to add tags to an ElastiCache resource

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AddTagsToResource.html

#### Defined in

actions/elasticache.ts:17

___

### AuthorizeCacheSecurityGroupIngress

• **AuthorizeCacheSecurityGroupIngress** = ``"elasticache:AuthorizeCacheSecurityGroupIngress"``

Grants permission to authorize an EC2 security group on a ElastiCache security
group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AuthorizeCacheSecurityGroupIngress.html

#### Defined in

actions/elasticache.ts:24

___

### BatchApplyUpdateAction

• **BatchApplyUpdateAction** = ``"elasticache:BatchApplyUpdateAction"``

Grants permission to apply ElastiCache service updates to sets of clusters and
replication groups

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchApplyUpdateAction.html

#### Defined in

actions/elasticache.ts:31

___

### BatchStopUpdateAction

• **BatchStopUpdateAction** = ``"elasticache:BatchStopUpdateAction"``

Grants permission to stop ElastiCache service updates from being executed on a
set of clusters

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchStopUpdateAction.html

#### Defined in

actions/elasticache.ts:38

___

### CompleteMigration

• **CompleteMigration** = ``"elasticache:CompleteMigration"``

Grants permission to complete an online migration of data from hosted Redis on
Amazon EC2 to ElastiCache

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CompleteMigration.html

#### Defined in

actions/elasticache.ts:45

___

### Connect

• **Connect** = ``"elasticache:Connect"``

Grants permission to connect as a specified ElastiCache user to an ElastiCache
Replication Group or ElastiCache serverless cache

See https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth-iam.html

#### Defined in

actions/elasticache.ts:52

___

### CopyServerlessCacheSnapshot

• **CopyServerlessCacheSnapshot** = ``"elasticache:CopyServerlessCacheSnapshot"``

Grants permission to make a copy of an existing serverless cache snapshot

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CopyServerlessCacheSnapshot.html

#### Defined in

actions/elasticache.ts:58

___

### CopySnapshot

• **CopySnapshot** = ``"elasticache:CopySnapshot"``

Grants permission to make a copy of an existing snapshot

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CopySnapshot.html

#### Defined in

actions/elasticache.ts:64

___

### CreateCacheCluster

• **CreateCacheCluster** = ``"elasticache:CreateCacheCluster"``

Grants permission to create a cache cluster

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheCluster.html

#### Defined in

actions/elasticache.ts:70

___

### CreateCacheParameterGroup

• **CreateCacheParameterGroup** = ``"elasticache:CreateCacheParameterGroup"``

Grants permission to create a parameter group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheParameterGroup.html

#### Defined in

actions/elasticache.ts:76

___

### CreateCacheSecurityGroup

• **CreateCacheSecurityGroup** = ``"elasticache:CreateCacheSecurityGroup"``

Grants permission to create a cache security group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSecurityGroup.html

#### Defined in

actions/elasticache.ts:82

___

### CreateCacheSubnetGroup

• **CreateCacheSubnetGroup** = ``"elasticache:CreateCacheSubnetGroup"``

Grants permission to create a cache subnet group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html

#### Defined in

actions/elasticache.ts:88

___

### CreateGlobalReplicationGroup

• **CreateGlobalReplicationGroup** = ``"elasticache:CreateGlobalReplicationGroup"``

Grants permission to create a global replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateGlobalReplicationGroup.html

#### Defined in

actions/elasticache.ts:94

___

### CreateReplicationGroup

• **CreateReplicationGroup** = ``"elasticache:CreateReplicationGroup"``

Grants permission to create a replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateReplicationGroup.html

#### Defined in

actions/elasticache.ts:100

___

### CreateServerlessCache

• **CreateServerlessCache** = ``"elasticache:CreateServerlessCache"``

Grants permission to create a serverless cache

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateServerlessCache.html

#### Defined in

actions/elasticache.ts:106

___

### CreateServerlessCacheSnapshot

• **CreateServerlessCacheSnapshot** = ``"elasticache:CreateServerlessCacheSnapshot"``

Grants permission to create a copy of a serverless cache at a specific moment i
n time

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateServerlessCacheSnapshot.html

#### Defined in

actions/elasticache.ts:113

___

### CreateSnapshot

• **CreateSnapshot** = ``"elasticache:CreateSnapshot"``

Grants permission to create a copy of an entire Redis cluster at a specific mom
ent in time

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateSnapshot.html

#### Defined in

actions/elasticache.ts:120

___

### CreateUser

• **CreateUser** = ``"elasticache:CreateUser"``

Grants permission to create a user for Redis. Users are supported from Redis 6.
0 onwards

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateUser.html

#### Defined in

actions/elasticache.ts:127

___

### CreateUserGroup

• **CreateUserGroup** = ``"elasticache:CreateUserGroup"``

Grants permission to create a user group for Redis. Groups are supported from R
edis 6.0 onwards

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateUserGroup.html

#### Defined in

actions/elasticache.ts:134

___

### DecreaseNodeGroupsInGlobalReplicationGroup

• **DecreaseNodeGroupsInGlobalReplicationGroup** = ``"elasticache:DecreaseNodeGroupsInGlobalReplicationGroup"``

Grants permission to decrease the number of node groups in global replication g
roups

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseNodeGroupsInGlobalReplicationGroup.html

#### Defined in

actions/elasticache.ts:141

___

### DecreaseReplicaCount

• **DecreaseReplicaCount** = ``"elasticache:DecreaseReplicaCount"``

Grants permission to decrease the number of replicas in a Redis (cluster mode d
isabled) replication group or the number of replica nodes in one or more node g
roups (shards) of a Redis (cluster mode enabled) replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseReplicaCount.html

#### Defined in

actions/elasticache.ts:149

___

### DeleteCacheCluster

• **DeleteCacheCluster** = ``"elasticache:DeleteCacheCluster"``

Grants permission to delete a previously provisioned cluster

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheCluster.html

#### Defined in

actions/elasticache.ts:155

___

### DeleteCacheParameterGroup

• **DeleteCacheParameterGroup** = ``"elasticache:DeleteCacheParameterGroup"``

Grants permission to delete the specified cache parameter group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheParameterGroup.html

#### Defined in

actions/elasticache.ts:161

___

### DeleteCacheSecurityGroup

• **DeleteCacheSecurityGroup** = ``"elasticache:DeleteCacheSecurityGroup"``

Grants permission to delete a cache security group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSecurityGroup.html

#### Defined in

actions/elasticache.ts:167

___

### DeleteCacheSubnetGroup

• **DeleteCacheSubnetGroup** = ``"elasticache:DeleteCacheSubnetGroup"``

Grants permission to delete a cache subnet group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSubnetGroup.html

#### Defined in

actions/elasticache.ts:173

___

### DeleteGlobalReplicationGroup

• **DeleteGlobalReplicationGroup** = ``"elasticache:DeleteGlobalReplicationGroup"``

Grants permission to delete an existing global replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteGlobalReplicationGroup.html

#### Defined in

actions/elasticache.ts:179

___

### DeleteReplicationGroup

• **DeleteReplicationGroup** = ``"elasticache:DeleteReplicationGroup"``

Grants permission to delete an existing replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteReplicationGroup.html

#### Defined in

actions/elasticache.ts:185

___

### DeleteServerlessCache

• **DeleteServerlessCache** = ``"elasticache:DeleteServerlessCache"``

Grants permission to delete a serverless cache

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteServerlessCache.html

#### Defined in

actions/elasticache.ts:191

___

### DeleteServerlessCacheSnapshot

• **DeleteServerlessCacheSnapshot** = ``"elasticache:DeleteServerlessCacheSnapshot"``

Grants permission to delete a serverless cache snapshot

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteServerlessCacheSnapshot.html

#### Defined in

actions/elasticache.ts:197

___

### DeleteSnapshot

• **DeleteSnapshot** = ``"elasticache:DeleteSnapshot"``

Grants permission to delete an existing snapshot

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteSnapshot.html

#### Defined in

actions/elasticache.ts:203

___

### DeleteUser

• **DeleteUser** = ``"elasticache:DeleteUser"``

Grants permission to delete an existing user and thus remove it from all user g
roups and replication groups where it was assigned

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteUser.html

#### Defined in

actions/elasticache.ts:210

___

### DeleteUserGroup

• **DeleteUserGroup** = ``"elasticache:DeleteUserGroup"``

Grants permission to delete an existing user group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteUserGroup.html

#### Defined in

actions/elasticache.ts:216

___

### DescribeCacheClusters

• **DescribeCacheClusters** = ``"elasticache:DescribeCacheClusters"``

Grants permission to list information about provisioned cache clusters

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheClusters.html

#### Defined in

actions/elasticache.ts:222

___

### DescribeCacheEngineVersions

• **DescribeCacheEngineVersions** = ``"elasticache:DescribeCacheEngineVersions"``

Grants permission to list available cache engines and their versions

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheEngineVersions.html

#### Defined in

actions/elasticache.ts:228

___

### DescribeCacheParameterGroups

• **DescribeCacheParameterGroups** = ``"elasticache:DescribeCacheParameterGroups"``

Grants permission to list cache parameter group descriptions

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameterGroups.html

#### Defined in

actions/elasticache.ts:234

___

### DescribeCacheParameters

• **DescribeCacheParameters** = ``"elasticache:DescribeCacheParameters"``

Grants permission to retrieve the detailed parameter list for a particular cach
e parameter group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameters.html

#### Defined in

actions/elasticache.ts:241

___

### DescribeCacheSecurityGroups

• **DescribeCacheSecurityGroups** = ``"elasticache:DescribeCacheSecurityGroups"``

Grants permission to list cache security group descriptions

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSecurityGroups.html

#### Defined in

actions/elasticache.ts:247

___

### DescribeCacheSubnetGroups

• **DescribeCacheSubnetGroups** = ``"elasticache:DescribeCacheSubnetGroups"``

Grants permission to list cache subnet group descriptions

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSubnetGroups.html

#### Defined in

actions/elasticache.ts:253

___

### DescribeEngineDefaultParameters

• **DescribeEngineDefaultParameters** = ``"elasticache:DescribeEngineDefaultParameters"``

Grants permission to retrieve the default engine and system parameter informati
on for the specified cache engine

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEngineDefaultParameters.html

#### Defined in

actions/elasticache.ts:260

___

### DescribeEvents

• **DescribeEvents** = ``"elasticache:DescribeEvents"``

Grants permission to list events related to clusters, cache security groups, an
d cache parameter groups

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html

#### Defined in

actions/elasticache.ts:267

___

### DescribeGlobalReplicationGroups

• **DescribeGlobalReplicationGroups** = ``"elasticache:DescribeGlobalReplicationGroups"``

Grants permission to list information about global replication groups

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeGlobalReplicationGroups.html

#### Defined in

actions/elasticache.ts:273

___

### DescribeReplicationGroups

• **DescribeReplicationGroups** = ``"elasticache:DescribeReplicationGroups"``

Grants permission to list information about provisioned replication groups

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReplicationGroups.html

#### Defined in

actions/elasticache.ts:279

___

### DescribeReservedCacheNodes

• **DescribeReservedCacheNodes** = ``"elasticache:DescribeReservedCacheNodes"``

Grants permission to list information about purchased reserved cache nodes

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodes.html

#### Defined in

actions/elasticache.ts:285

___

### DescribeReservedCacheNodesOfferings

• **DescribeReservedCacheNodesOfferings** = ``"elasticache:DescribeReservedCacheNodesOfferings"``

Grants permission to list available reserved cache node offerings

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodesOfferings.html

#### Defined in

actions/elasticache.ts:291

___

### DescribeServerlessCacheSnapshots

• **DescribeServerlessCacheSnapshots** = ``"elasticache:DescribeServerlessCacheSnapshots"``

Grants permission to list information about serverless cache snapshots

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeServerlessCacheSnapshots.html

#### Defined in

actions/elasticache.ts:297

___

### DescribeServerlessCaches

• **DescribeServerlessCaches** = ``"elasticache:DescribeServerlessCaches"``

Grants permission to list serverless caches

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeServerlessCaches.html

#### Defined in

actions/elasticache.ts:303

___

### DescribeServiceUpdates

• **DescribeServiceUpdates** = ``"elasticache:DescribeServiceUpdates"``

Grants permission to list details of the service updates

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeServiceUpdates.html

#### Defined in

actions/elasticache.ts:309

___

### DescribeSnapshots

• **DescribeSnapshots** = ``"elasticache:DescribeSnapshots"``

Grants permission to list information about cluster or replication group snapsh
ots

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeSnapshots.html

#### Defined in

actions/elasticache.ts:316

___

### DescribeUpdateActions

• **DescribeUpdateActions** = ``"elasticache:DescribeUpdateActions"``

Grants permission to list details of the update actions for a set of clusters o
r replication groups

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUpdateActions.html

#### Defined in

actions/elasticache.ts:323

___

### DescribeUserGroups

• **DescribeUserGroups** = ``"elasticache:DescribeUserGroups"``

Grants permission to list information about Redis user groups

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUserGroups.html

#### Defined in

actions/elasticache.ts:329

___

### DescribeUsers

• **DescribeUsers** = ``"elasticache:DescribeUsers"``

Grants permission to list information about Redis users

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUsers.html

#### Defined in

actions/elasticache.ts:335

___

### DisassociateGlobalReplicationGroup

• **DisassociateGlobalReplicationGroup** = ``"elasticache:DisassociateGlobalReplicationGroup"``

Grants permission to remove a secondary replication group from the global repli
cation group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DisassociateGlobalReplicationGroup.html

#### Defined in

actions/elasticache.ts:342

___

### ExportServerlessCacheSnapshot

• **ExportServerlessCacheSnapshot** = ``"elasticache:ExportServerlessCacheSnapshot"``

Grants permission to export a copy of a serverless cache at a specific moment i
n time to s3 bucket

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ExportServerlessCacheSnapshot.html

#### Defined in

actions/elasticache.ts:349

___

### FailoverGlobalReplicationGroup

• **FailoverGlobalReplicationGroup** = ``"elasticache:FailoverGlobalReplicationGroup"``

Grants permission to failover the primary region to a selected secondary region
of a global replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_FailoverGlobalReplicationGroup.html

#### Defined in

actions/elasticache.ts:356

___

### IncreaseNodeGroupsInGlobalReplicationGroup

• **IncreaseNodeGroupsInGlobalReplicationGroup** = ``"elasticache:IncreaseNodeGroupsInGlobalReplicationGroup"``

Grants permission to increase the number of node groups in a global replication
group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseNodeGroupsInGlobalReplicationGroup.html

#### Defined in

actions/elasticache.ts:363

___

### IncreaseReplicaCount

• **IncreaseReplicaCount** = ``"elasticache:IncreaseReplicaCount"``

Grants permission to increase the number of replicas in a Redis (cluster mode d
isabled) replication group or the number of replica nodes in one or more node g
roups (shards) of a Redis (cluster mode enabled) replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseReplicaCount.html

#### Defined in

actions/elasticache.ts:371

___

### InterruptClusterAzPower

• **InterruptClusterAzPower** = ``"elasticache:InterruptClusterAzPower"``

Grants permission to test an AZ power interruption for an ElastiCache resource

See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#elasticache-actions-reference

#### Defined in

actions/elasticache.ts:377

___

### ListAllowedNodeTypeModifications

• **ListAllowedNodeTypeModifications** = ``"elasticache:ListAllowedNodeTypeModifications"``

Grants permission to list available node type that can be used to scale a parti
cular Redis cluster or replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListAllowedNodeTypeModifications.html

#### Defined in

actions/elasticache.ts:384

___

### ListTagsForResource

• **ListTagsForResource** = ``"elasticache:ListTagsForResource"``

Grants permission to list tags for an ElastiCache resource

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/elasticache.ts:390

___

### ModifyCacheCluster

• **ModifyCacheCluster** = ``"elasticache:ModifyCacheCluster"``

Grants permission to modify settings for a cluster

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html

#### Defined in

actions/elasticache.ts:396

___

### ModifyCacheParameterGroup

• **ModifyCacheParameterGroup** = ``"elasticache:ModifyCacheParameterGroup"``

Grants permission to modify parameters of a cache parameter group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html

#### Defined in

actions/elasticache.ts:402

___

### ModifyCacheSubnetGroup

• **ModifyCacheSubnetGroup** = ``"elasticache:ModifyCacheSubnetGroup"``

Grants permission to modify an existing cache subnet group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheSubnetGroup.html

#### Defined in

actions/elasticache.ts:408

___

### ModifyGlobalReplicationGroup

• **ModifyGlobalReplicationGroup** = ``"elasticache:ModifyGlobalReplicationGroup"``

Grants permission to modify settings for a global replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyGlobalReplicationGroup.html

#### Defined in

actions/elasticache.ts:414

___

### ModifyReplicationGroup

• **ModifyReplicationGroup** = ``"elasticache:ModifyReplicationGroup"``

Grants permission to modify the settings for a replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroup.html

#### Defined in

actions/elasticache.ts:420

___

### ModifyReplicationGroupShardConfiguration

• **ModifyReplicationGroupShardConfiguration** = ``"elasticache:ModifyReplicationGroupShardConfiguration"``

Grants permission to add shards, remove shards, or rebalance the keyspaces amon
g existing shards of a replication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html

#### Defined in

actions/elasticache.ts:427

___

### ModifyServerlessCache

• **ModifyServerlessCache** = ``"elasticache:ModifyServerlessCache"``

Grants permission to modify parameters for a serverless cache

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyServerlessCache.html

#### Defined in

actions/elasticache.ts:433

___

### ModifyUser

• **ModifyUser** = ``"elasticache:ModifyUser"``

Grants permission to change Redis user password(s) and/or access string

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyUser.html

#### Defined in

actions/elasticache.ts:439

___

### ModifyUserGroup

• **ModifyUserGroup** = ``"elasticache:ModifyUserGroup"``

Grants permission to change list of users that belong to the user group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyUserGroup.html

#### Defined in

actions/elasticache.ts:445

___

### PurchaseReservedCacheNodesOffering

• **PurchaseReservedCacheNodesOffering** = ``"elasticache:PurchaseReservedCacheNodesOffering"``

Grants permission to purchase a reserved cache node offering

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_PurchaseReservedCacheNodesOffering.html

#### Defined in

actions/elasticache.ts:451

___

### RebalanceSlotsInGlobalReplicationGroup

• **RebalanceSlotsInGlobalReplicationGroup** = ``"elasticache:RebalanceSlotsInGlobalReplicationGroup"``

Grants permission to perform a key space rebalance operation to redistribute sl
ots and ensure uniform key distribution across existing shards in a global repl
ication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebalanceSlotsInGlobalReplicationGroup.html

#### Defined in

actions/elasticache.ts:459

___

### RebootCacheCluster

• **RebootCacheCluster** = ``"elasticache:RebootCacheCluster"``

Grants permission to reboot some, or all, of the cache nodes within a provision
ed cache cluster or replication group (cluster mode disabled)

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebootCacheCluster.html

#### Defined in

actions/elasticache.ts:466

___

### RemoveTagsFromResource

• **RemoveTagsFromResource** = ``"elasticache:RemoveTagsFromResource"``

Grants permission to remove tags from a ElastiCache resource

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RemoveTagsFromResource.html

#### Defined in

actions/elasticache.ts:472

___

### ResetCacheParameterGroup

• **ResetCacheParameterGroup** = ``"elasticache:ResetCacheParameterGroup"``

Grants permission to modify parameters of a cache parameter group back to their
default values

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ResetCacheParameterGroup.html

#### Defined in

actions/elasticache.ts:479

___

### RevokeCacheSecurityGroupIngress

• **RevokeCacheSecurityGroupIngress** = ``"elasticache:RevokeCacheSecurityGroupIngress"``

Grants permission to remove an EC2 security group ingress from a ElastiCache se
curity group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RevokeCacheSecurityGroupIngress.html

#### Defined in

actions/elasticache.ts:486

___

### StartMigration

• **StartMigration** = ``"elasticache:StartMigration"``

Grants permission to start a migration of data from hosted Redis on Amazon EC2
to ElastiCache for Redis

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_StartMigration.html

#### Defined in

actions/elasticache.ts:493

___

### TestFailover

• **TestFailover** = ``"elasticache:TestFailover"``

Grants permission to test automatic failover on a specified node group in a rep
lication group

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_TestFailover.html

#### Defined in

actions/elasticache.ts:500

___

### TestMigration

• **TestMigration** = ``"elasticache:TestMigration"``

Grants permission to test a migration of data from hosted Redis on Amazon EC2 t
o ElastiCache for Redis

See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_TestMigration.html

#### Defined in

actions/elasticache.ts:507
