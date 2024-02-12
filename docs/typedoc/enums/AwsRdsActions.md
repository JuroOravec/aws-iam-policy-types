[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRdsActions

# Enumeration: AwsRdsActions

All IAM policy actions for Amazon RDS (RDS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrds.html

2024-02-12T09:58:48.711Z

## Table of contents

### Enumeration Members

- [AddRoleToDBCluster](AwsRdsActions.md#addroletodbcluster)
- [AddRoleToDBInstance](AwsRdsActions.md#addroletodbinstance)
- [AddSourceIdentifierToSubscription](AwsRdsActions.md#addsourceidentifiertosubscription)
- [AddTagsToResource](AwsRdsActions.md#addtagstoresource)
- [ApplyPendingMaintenanceAction](AwsRdsActions.md#applypendingmaintenanceaction)
- [AuthorizeDBSecurityGroupIngress](AwsRdsActions.md#authorizedbsecuritygroupingress)
- [BacktrackDBCluster](AwsRdsActions.md#backtrackdbcluster)
- [CancelExportTask](AwsRdsActions.md#cancelexporttask)
- [CopyDBClusterParameterGroup](AwsRdsActions.md#copydbclusterparametergroup)
- [CopyDBClusterSnapshot](AwsRdsActions.md#copydbclustersnapshot)
- [CopyDBParameterGroup](AwsRdsActions.md#copydbparametergroup)
- [CopyDBSnapshot](AwsRdsActions.md#copydbsnapshot)
- [CopyOptionGroup](AwsRdsActions.md#copyoptiongroup)
- [CreateBlueGreenDeployment](AwsRdsActions.md#createbluegreendeployment)
- [CreateCustomDBEngineVersion](AwsRdsActions.md#createcustomdbengineversion)
- [CreateDBCluster](AwsRdsActions.md#createdbcluster)
- [CreateDBClusterEndpoint](AwsRdsActions.md#createdbclusterendpoint)
- [CreateDBClusterParameterGroup](AwsRdsActions.md#createdbclusterparametergroup)
- [CreateDBClusterSnapshot](AwsRdsActions.md#createdbclustersnapshot)
- [CreateDBInstance](AwsRdsActions.md#createdbinstance)
- [CreateDBInstanceReadReplica](AwsRdsActions.md#createdbinstancereadreplica)
- [CreateDBParameterGroup](AwsRdsActions.md#createdbparametergroup)
- [CreateDBProxy](AwsRdsActions.md#createdbproxy)
- [CreateDBProxyEndpoint](AwsRdsActions.md#createdbproxyendpoint)
- [CreateDBSecurityGroup](AwsRdsActions.md#createdbsecuritygroup)
- [CreateDBShardGroup](AwsRdsActions.md#createdbshardgroup)
- [CreateDBSnapshot](AwsRdsActions.md#createdbsnapshot)
- [CreateDBSubnetGroup](AwsRdsActions.md#createdbsubnetgroup)
- [CreateEventSubscription](AwsRdsActions.md#createeventsubscription)
- [CreateGlobalCluster](AwsRdsActions.md#createglobalcluster)
- [CreateIntegration](AwsRdsActions.md#createintegration)
- [CreateOptionGroup](AwsRdsActions.md#createoptiongroup)
- [CreateTenantDatabase](AwsRdsActions.md#createtenantdatabase)
- [CrossRegionCommunication](AwsRdsActions.md#crossregioncommunication)
- [DeleteBlueGreenDeployment](AwsRdsActions.md#deletebluegreendeployment)
- [DeleteCustomDBEngineVersion](AwsRdsActions.md#deletecustomdbengineversion)
- [DeleteDBCluster](AwsRdsActions.md#deletedbcluster)
- [DeleteDBClusterAutomatedBackup](AwsRdsActions.md#deletedbclusterautomatedbackup)
- [DeleteDBClusterEndpoint](AwsRdsActions.md#deletedbclusterendpoint)
- [DeleteDBClusterParameterGroup](AwsRdsActions.md#deletedbclusterparametergroup)
- [DeleteDBClusterSnapshot](AwsRdsActions.md#deletedbclustersnapshot)
- [DeleteDBInstance](AwsRdsActions.md#deletedbinstance)
- [DeleteDBInstanceAutomatedBackup](AwsRdsActions.md#deletedbinstanceautomatedbackup)
- [DeleteDBParameterGroup](AwsRdsActions.md#deletedbparametergroup)
- [DeleteDBProxy](AwsRdsActions.md#deletedbproxy)
- [DeleteDBProxyEndpoint](AwsRdsActions.md#deletedbproxyendpoint)
- [DeleteDBSecurityGroup](AwsRdsActions.md#deletedbsecuritygroup)
- [DeleteDBShardGroup](AwsRdsActions.md#deletedbshardgroup)
- [DeleteDBSnapshot](AwsRdsActions.md#deletedbsnapshot)
- [DeleteDBSubnetGroup](AwsRdsActions.md#deletedbsubnetgroup)
- [DeleteEventSubscription](AwsRdsActions.md#deleteeventsubscription)
- [DeleteGlobalCluster](AwsRdsActions.md#deleteglobalcluster)
- [DeleteIntegration](AwsRdsActions.md#deleteintegration)
- [DeleteOptionGroup](AwsRdsActions.md#deleteoptiongroup)
- [DeleteTenantDatabase](AwsRdsActions.md#deletetenantdatabase)
- [DeregisterDBProxyTargets](AwsRdsActions.md#deregisterdbproxytargets)
- [DescribeAccountAttributes](AwsRdsActions.md#describeaccountattributes)
- [DescribeBlueGreenDeployments](AwsRdsActions.md#describebluegreendeployments)
- [DescribeCertificates](AwsRdsActions.md#describecertificates)
- [DescribeDBClusterAutomatedBackups](AwsRdsActions.md#describedbclusterautomatedbackups)
- [DescribeDBClusterBacktracks](AwsRdsActions.md#describedbclusterbacktracks)
- [DescribeDBClusterEndpoints](AwsRdsActions.md#describedbclusterendpoints)
- [DescribeDBClusterParameterGroups](AwsRdsActions.md#describedbclusterparametergroups)
- [DescribeDBClusterParameters](AwsRdsActions.md#describedbclusterparameters)
- [DescribeDBClusterSnapshotAttributes](AwsRdsActions.md#describedbclustersnapshotattributes)
- [DescribeDBClusterSnapshots](AwsRdsActions.md#describedbclustersnapshots)
- [DescribeDBClusters](AwsRdsActions.md#describedbclusters)
- [DescribeDBEngineVersions](AwsRdsActions.md#describedbengineversions)
- [DescribeDBInstanceAutomatedBackups](AwsRdsActions.md#describedbinstanceautomatedbackups)
- [DescribeDBInstances](AwsRdsActions.md#describedbinstances)
- [DescribeDBLogFiles](AwsRdsActions.md#describedblogfiles)
- [DescribeDBParameterGroups](AwsRdsActions.md#describedbparametergroups)
- [DescribeDBParameters](AwsRdsActions.md#describedbparameters)
- [DescribeDBProxies](AwsRdsActions.md#describedbproxies)
- [DescribeDBProxyEndpoints](AwsRdsActions.md#describedbproxyendpoints)
- [DescribeDBProxyTargetGroups](AwsRdsActions.md#describedbproxytargetgroups)
- [DescribeDBProxyTargets](AwsRdsActions.md#describedbproxytargets)
- [DescribeDBRecommendations](AwsRdsActions.md#describedbrecommendations)
- [DescribeDBSecurityGroups](AwsRdsActions.md#describedbsecuritygroups)
- [DescribeDBShardGroups](AwsRdsActions.md#describedbshardgroups)
- [DescribeDBSnapshotAttributes](AwsRdsActions.md#describedbsnapshotattributes)
- [DescribeDBSnapshots](AwsRdsActions.md#describedbsnapshots)
- [DescribeDBSubnetGroups](AwsRdsActions.md#describedbsubnetgroups)
- [DescribeDbSnapshotTenantDatabases](AwsRdsActions.md#describedbsnapshottenantdatabases)
- [DescribeEngineDefaultClusterParameters](AwsRdsActions.md#describeenginedefaultclusterparameters)
- [DescribeEngineDefaultParameters](AwsRdsActions.md#describeenginedefaultparameters)
- [DescribeEventCategories](AwsRdsActions.md#describeeventcategories)
- [DescribeEventSubscriptions](AwsRdsActions.md#describeeventsubscriptions)
- [DescribeEvents](AwsRdsActions.md#describeevents)
- [DescribeExportTasks](AwsRdsActions.md#describeexporttasks)
- [DescribeGlobalClusters](AwsRdsActions.md#describeglobalclusters)
- [DescribeIntegrations](AwsRdsActions.md#describeintegrations)
- [DescribeOptionGroupOptions](AwsRdsActions.md#describeoptiongroupoptions)
- [DescribeOptionGroups](AwsRdsActions.md#describeoptiongroups)
- [DescribeOrderableDBInstanceOptions](AwsRdsActions.md#describeorderabledbinstanceoptions)
- [DescribePendingMaintenanceActions](AwsRdsActions.md#describependingmaintenanceactions)
- [DescribeRecommendationGroups](AwsRdsActions.md#describerecommendationgroups)
- [DescribeRecommendations](AwsRdsActions.md#describerecommendations)
- [DescribeReservedDBInstances](AwsRdsActions.md#describereserveddbinstances)
- [DescribeReservedDBInstancesOfferings](AwsRdsActions.md#describereserveddbinstancesofferings)
- [DescribeSourceRegions](AwsRdsActions.md#describesourceregions)
- [DescribeTenantDatabases](AwsRdsActions.md#describetenantdatabases)
- [DescribeValidDBInstanceModifications](AwsRdsActions.md#describevaliddbinstancemodifications)
- [DisableHttpEndpoint](AwsRdsActions.md#disablehttpendpoint)
- [DownloadCompleteDBLogFile](AwsRdsActions.md#downloadcompletedblogfile)
- [DownloadDBLogFilePortion](AwsRdsActions.md#downloaddblogfileportion)
- [EnableHttpEndpoint](AwsRdsActions.md#enablehttpendpoint)
- [FailoverDBCluster](AwsRdsActions.md#failoverdbcluster)
- [FailoverGlobalCluster](AwsRdsActions.md#failoverglobalcluster)
- [ListTagsForResource](AwsRdsActions.md#listtagsforresource)
- [ModifyActivityStream](AwsRdsActions.md#modifyactivitystream)
- [ModifyCertificates](AwsRdsActions.md#modifycertificates)
- [ModifyCurrentDBClusterCapacity](AwsRdsActions.md#modifycurrentdbclustercapacity)
- [ModifyCustomDBEngineVersion](AwsRdsActions.md#modifycustomdbengineversion)
- [ModifyDBCluster](AwsRdsActions.md#modifydbcluster)
- [ModifyDBClusterEndpoint](AwsRdsActions.md#modifydbclusterendpoint)
- [ModifyDBClusterParameterGroup](AwsRdsActions.md#modifydbclusterparametergroup)
- [ModifyDBClusterSnapshotAttribute](AwsRdsActions.md#modifydbclustersnapshotattribute)
- [ModifyDBInstance](AwsRdsActions.md#modifydbinstance)
- [ModifyDBParameterGroup](AwsRdsActions.md#modifydbparametergroup)
- [ModifyDBProxy](AwsRdsActions.md#modifydbproxy)
- [ModifyDBProxyEndpoint](AwsRdsActions.md#modifydbproxyendpoint)
- [ModifyDBProxyTargetGroup](AwsRdsActions.md#modifydbproxytargetgroup)
- [ModifyDBRecommendation](AwsRdsActions.md#modifydbrecommendation)
- [ModifyDBShardGroup](AwsRdsActions.md#modifydbshardgroup)
- [ModifyDBSnapshot](AwsRdsActions.md#modifydbsnapshot)
- [ModifyDBSnapshotAttribute](AwsRdsActions.md#modifydbsnapshotattribute)
- [ModifyDBSubnetGroup](AwsRdsActions.md#modifydbsubnetgroup)
- [ModifyEventSubscription](AwsRdsActions.md#modifyeventsubscription)
- [ModifyGlobalCluster](AwsRdsActions.md#modifyglobalcluster)
- [ModifyOptionGroup](AwsRdsActions.md#modifyoptiongroup)
- [ModifyRecommendation](AwsRdsActions.md#modifyrecommendation)
- [ModifyTenantDatabase](AwsRdsActions.md#modifytenantdatabase)
- [PromoteReadReplica](AwsRdsActions.md#promotereadreplica)
- [PromoteReadReplicaDBCluster](AwsRdsActions.md#promotereadreplicadbcluster)
- [PurchaseReservedDBInstancesOffering](AwsRdsActions.md#purchasereserveddbinstancesoffering)
- [RebootDBCluster](AwsRdsActions.md#rebootdbcluster)
- [RebootDBInstance](AwsRdsActions.md#rebootdbinstance)
- [RebootDBShardGroup](AwsRdsActions.md#rebootdbshardgroup)
- [RegisterDBProxyTargets](AwsRdsActions.md#registerdbproxytargets)
- [RemoveFromGlobalCluster](AwsRdsActions.md#removefromglobalcluster)
- [RemoveRoleFromDBCluster](AwsRdsActions.md#removerolefromdbcluster)
- [RemoveRoleFromDBInstance](AwsRdsActions.md#removerolefromdbinstance)
- [RemoveSourceIdentifierFromSubscription](AwsRdsActions.md#removesourceidentifierfromsubscription)
- [RemoveTagsFromResource](AwsRdsActions.md#removetagsfromresource)
- [ResetDBClusterParameterGroup](AwsRdsActions.md#resetdbclusterparametergroup)
- [ResetDBParameterGroup](AwsRdsActions.md#resetdbparametergroup)
- [RestoreDBClusterFromS3](AwsRdsActions.md#restoredbclusterfroms3)
- [RestoreDBClusterFromSnapshot](AwsRdsActions.md#restoredbclusterfromsnapshot)
- [RestoreDBClusterToPointInTime](AwsRdsActions.md#restoredbclustertopointintime)
- [RestoreDBInstanceFromDBSnapshot](AwsRdsActions.md#restoredbinstancefromdbsnapshot)
- [RestoreDBInstanceFromS3](AwsRdsActions.md#restoredbinstancefroms3)
- [RestoreDBInstanceToPointInTime](AwsRdsActions.md#restoredbinstancetopointintime)
- [RevokeDBSecurityGroupIngress](AwsRdsActions.md#revokedbsecuritygroupingress)
- [StartActivityStream](AwsRdsActions.md#startactivitystream)
- [StartDBCluster](AwsRdsActions.md#startdbcluster)
- [StartDBInstance](AwsRdsActions.md#startdbinstance)
- [StartDBInstanceAutomatedBackupsReplication](AwsRdsActions.md#startdbinstanceautomatedbackupsreplication)
- [StartExportTask](AwsRdsActions.md#startexporttask)
- [StopActivityStream](AwsRdsActions.md#stopactivitystream)
- [StopDBCluster](AwsRdsActions.md#stopdbcluster)
- [StopDBInstance](AwsRdsActions.md#stopdbinstance)
- [StopDBInstanceAutomatedBackupsReplication](AwsRdsActions.md#stopdbinstanceautomatedbackupsreplication)
- [SwitchoverBlueGreenDeployment](AwsRdsActions.md#switchoverbluegreendeployment)
- [SwitchoverGlobalCluster](AwsRdsActions.md#switchoverglobalcluster)
- [SwitchoverReadReplica](AwsRdsActions.md#switchoverreadreplica)

## Enumeration Members

### AddRoleToDBCluster

• **AddRoleToDBCluster** = ``"rds:AddRoleToDBCluster"``

Grants permission to associate an Identity and Access Management (IAM) role fro
m an Aurora DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBCluster.html

#### Defined in

actions/rds.ts:18

___

### AddRoleToDBInstance

• **AddRoleToDBInstance** = ``"rds:AddRoleToDBInstance"``

Grants permission to associate an AWS Identity and Access Management (IAM) role
with a DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBInstance.html

#### Defined in

actions/rds.ts:25

___

### AddSourceIdentifierToSubscription

• **AddSourceIdentifierToSubscription** = ``"rds:AddSourceIdentifierToSubscription"``

Grants permission to add a source identifier to an existing RDS event notificat
ion subscription

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddSourceIdentifierToSubscription.html

#### Defined in

actions/rds.ts:32

___

### AddTagsToResource

• **AddTagsToResource** = ``"rds:AddTagsToResource"``

Grants permission to add metadata tags to an Amazon RDS resource

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddTagsToResource.html

#### Defined in

actions/rds.ts:38

___

### ApplyPendingMaintenanceAction

• **ApplyPendingMaintenanceAction** = ``"rds:ApplyPendingMaintenanceAction"``

Grants permission to apply a pending maintenance action to a resource

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ApplyPendingMaintenanceAction.html

#### Defined in

actions/rds.ts:44

___

### AuthorizeDBSecurityGroupIngress

• **AuthorizeDBSecurityGroupIngress** = ``"rds:AuthorizeDBSecurityGroupIngress"``

Grants permission to enable ingress to a DBSecurityGroup using one of two forms
of authorization

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AuthorizeDBSecurityGroupIngress.html

#### Defined in

actions/rds.ts:51

___

### BacktrackDBCluster

• **BacktrackDBCluster** = ``"rds:BacktrackDBCluster"``

Grants permission to backtrack a DB cluster to a specific time, without creatin
g a new DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BacktrackDBCluster.html

#### Defined in

actions/rds.ts:58

___

### CancelExportTask

• **CancelExportTask** = ``"rds:CancelExportTask"``

Grants permission to cancel an export task in progress

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CancelExportTask.html

#### Defined in

actions/rds.ts:64

___

### CopyDBClusterParameterGroup

• **CopyDBClusterParameterGroup** = ``"rds:CopyDBClusterParameterGroup"``

Grants permission to copy the specified DB cluster parameter group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterParameterGroup.html

#### Defined in

actions/rds.ts:70

___

### CopyDBClusterSnapshot

• **CopyDBClusterSnapshot** = ``"rds:CopyDBClusterSnapshot"``

Grants permission to create a snapshot of a DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterSnapshot.html

#### Defined in

actions/rds.ts:76

___

### CopyDBParameterGroup

• **CopyDBParameterGroup** = ``"rds:CopyDBParameterGroup"``

Grants permission to copy the specified DB parameter group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBParameterGroup.html

#### Defined in

actions/rds.ts:82

___

### CopyDBSnapshot

• **CopyDBSnapshot** = ``"rds:CopyDBSnapshot"``

Grants permission to copy the specified DB snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBSnapshot.html

#### Defined in

actions/rds.ts:88

___

### CopyOptionGroup

• **CopyOptionGroup** = ``"rds:CopyOptionGroup"``

Grants permission to copy the specified option group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyOptionGroup.html

#### Defined in

actions/rds.ts:94

___

### CreateBlueGreenDeployment

• **CreateBlueGreenDeployment** = ``"rds:CreateBlueGreenDeployment"``

Grants permission to create a blue-green deployment for a given source cluster
or instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateBlueGreenDeployment.html

#### Defined in

actions/rds.ts:101

___

### CreateCustomDBEngineVersion

• **CreateCustomDBEngineVersion** = ``"rds:CreateCustomDBEngineVersion"``

Grants permission to create a custom engine version

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateCustomDBEngineVersion.html

#### Defined in

actions/rds.ts:107

___

### CreateDBCluster

• **CreateDBCluster** = ``"rds:CreateDBCluster"``

Grants permission to create a new DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html

#### Defined in

actions/rds.ts:113

___

### CreateDBClusterEndpoint

• **CreateDBClusterEndpoint** = ``"rds:CreateDBClusterEndpoint"``

Grants permission to create a new custom endpoint and associates it with an Ama
zon Aurora DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterEndpoint.html

#### Defined in

actions/rds.ts:120

___

### CreateDBClusterParameterGroup

• **CreateDBClusterParameterGroup** = ``"rds:CreateDBClusterParameterGroup"``

Grants permission to create a new DB cluster parameter group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterParameterGroup.html

#### Defined in

actions/rds.ts:126

___

### CreateDBClusterSnapshot

• **CreateDBClusterSnapshot** = ``"rds:CreateDBClusterSnapshot"``

Grants permission to create a snapshot of a DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterSnapshot.html

#### Defined in

actions/rds.ts:132

___

### CreateDBInstance

• **CreateDBInstance** = ``"rds:CreateDBInstance"``

Grants permission to create a new DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html

#### Defined in

actions/rds.ts:138

___

### CreateDBInstanceReadReplica

• **CreateDBInstanceReadReplica** = ``"rds:CreateDBInstanceReadReplica"``

Grants permission to create a DB instance that acts as a Read Replica of a sour
ce DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstanceReadReplica.html

#### Defined in

actions/rds.ts:145

___

### CreateDBParameterGroup

• **CreateDBParameterGroup** = ``"rds:CreateDBParameterGroup"``

Grants permission to create a new DB parameter group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBParameterGroup.html

#### Defined in

actions/rds.ts:151

___

### CreateDBProxy

• **CreateDBProxy** = ``"rds:CreateDBProxy"``

Grants permission to create a database proxy

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBProxy.html

#### Defined in

actions/rds.ts:157

___

### CreateDBProxyEndpoint

• **CreateDBProxyEndpoint** = ``"rds:CreateDBProxyEndpoint"``

Grants permission to create a database proxy endpoint

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBProxyEndpoint.html

#### Defined in

actions/rds.ts:163

___

### CreateDBSecurityGroup

• **CreateDBSecurityGroup** = ``"rds:CreateDBSecurityGroup"``

Grants permission to create a new DB security group. DB security groups control
access to a DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSecurityGroup.html

#### Defined in

actions/rds.ts:170

___

### CreateDBShardGroup

• **CreateDBShardGroup** = ``"rds:CreateDBShardGroup"``

Grants permission to create a new Aurora Limitless Database DB shard group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBShardGroup.html

#### Defined in

actions/rds.ts:176

___

### CreateDBSnapshot

• **CreateDBSnapshot** = ``"rds:CreateDBSnapshot"``

Grants permission to create a DBSnapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSnapshot.html

#### Defined in

actions/rds.ts:182

___

### CreateDBSubnetGroup

• **CreateDBSubnetGroup** = ``"rds:CreateDBSubnetGroup"``

Grants permission to create a new DB subnet group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSubnetGroup.html

#### Defined in

actions/rds.ts:188

___

### CreateEventSubscription

• **CreateEventSubscription** = ``"rds:CreateEventSubscription"``

Grants permission to create an RDS event notification subscription

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateEventSubscription.html

#### Defined in

actions/rds.ts:194

___

### CreateGlobalCluster

• **CreateGlobalCluster** = ``"rds:CreateGlobalCluster"``

Grants permission to create an Aurora global database spread across multiple re
gions

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateGlobalCluster.html

#### Defined in

actions/rds.ts:201

___

### CreateIntegration

• **CreateIntegration** = ``"rds:CreateIntegration"``

Grants permission to create an Aurora zero-ETL integration with Redshift

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateIntegration.html

#### Defined in

actions/rds.ts:207

___

### CreateOptionGroup

• **CreateOptionGroup** = ``"rds:CreateOptionGroup"``

Grants permission to create a new option group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateOptionGroup.html

#### Defined in

actions/rds.ts:213

___

### CreateTenantDatabase

• **CreateTenantDatabase** = ``"rds:CreateTenantDatabase"``

Grants permission to create a new tenant database

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateTenantDatabase.html

#### Defined in

actions/rds.ts:219

___

### CrossRegionCommunication

• **CrossRegionCommunication** = ``"rds:CrossRegionCommunication"``

Grants permission to access a resource in the remote Region when executing cros
s-Region operations, such as cross-Region snapshot copy or cross-Region read re
plica creation

See https://docs.aws.amazon.com/AmazonRDS/latest/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions

#### Defined in

actions/rds.ts:227

___

### DeleteBlueGreenDeployment

• **DeleteBlueGreenDeployment** = ``"rds:DeleteBlueGreenDeployment"``

Grants permission to delete blue green deployments

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteBlueGreenDeployment.html

#### Defined in

actions/rds.ts:233

___

### DeleteCustomDBEngineVersion

• **DeleteCustomDBEngineVersion** = ``"rds:DeleteCustomDBEngineVersion"``

Grants permission to delete an existing custom engine version

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteCustomDBEngineVersion.html

#### Defined in

actions/rds.ts:239

___

### DeleteDBCluster

• **DeleteDBCluster** = ``"rds:DeleteDBCluster"``

Grants permission to delete a previously provisioned DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBCluster.html

#### Defined in

actions/rds.ts:245

___

### DeleteDBClusterAutomatedBackup

• **DeleteDBClusterAutomatedBackup** = ``"rds:DeleteDBClusterAutomatedBackup"``

Grants permission to delete cluster automated backups based on the source clust
er's DbClusterResourceId value or the restorable cluster's resource ID

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterAutomatedBackup.html

#### Defined in

actions/rds.ts:252

___

### DeleteDBClusterEndpoint

• **DeleteDBClusterEndpoint** = ``"rds:DeleteDBClusterEndpoint"``

Grants permission to delete a custom endpoint and removes it from an Amazon Aur
ora DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterEndpoint.html

#### Defined in

actions/rds.ts:259

___

### DeleteDBClusterParameterGroup

• **DeleteDBClusterParameterGroup** = ``"rds:DeleteDBClusterParameterGroup"``

Grants permission to delete a specified DB cluster parameter group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterParameterGroup.html

#### Defined in

actions/rds.ts:265

___

### DeleteDBClusterSnapshot

• **DeleteDBClusterSnapshot** = ``"rds:DeleteDBClusterSnapshot"``

Grants permission to delete a DB cluster snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterSnapshot.html

#### Defined in

actions/rds.ts:271

___

### DeleteDBInstance

• **DeleteDBInstance** = ``"rds:DeleteDBInstance"``

Grants permission to delete a previously provisioned DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstance.html

#### Defined in

actions/rds.ts:277

___

### DeleteDBInstanceAutomatedBackup

• **DeleteDBInstanceAutomatedBackup** = ``"rds:DeleteDBInstanceAutomatedBackup"``

Grants permission to delete automated backups based on the source instance's Db
iResourceId value or the restorable instance's resource ID

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstanceAutomatedBackup.html

#### Defined in

actions/rds.ts:284

___

### DeleteDBParameterGroup

• **DeleteDBParameterGroup** = ``"rds:DeleteDBParameterGroup"``

Grants permission to delete a specified DBParameterGroup

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBParameterGroup.html

#### Defined in

actions/rds.ts:290

___

### DeleteDBProxy

• **DeleteDBProxy** = ``"rds:DeleteDBProxy"``

Grants permission to delete a database proxy

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBProxy.html

#### Defined in

actions/rds.ts:296

___

### DeleteDBProxyEndpoint

• **DeleteDBProxyEndpoint** = ``"rds:DeleteDBProxyEndpoint"``

Grants permission to delete a database proxy endpoint

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBProxyEndpoint.html

#### Defined in

actions/rds.ts:302

___

### DeleteDBSecurityGroup

• **DeleteDBSecurityGroup** = ``"rds:DeleteDBSecurityGroup"``

Grants permission to delete a DB security group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSecurityGroup.html

#### Defined in

actions/rds.ts:308

___

### DeleteDBShardGroup

• **DeleteDBShardGroup** = ``"rds:DeleteDBShardGroup"``

Grants permission to delete an Aurora Limitless Database DB shard group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBShardGroup.html

#### Defined in

actions/rds.ts:314

___

### DeleteDBSnapshot

• **DeleteDBSnapshot** = ``"rds:DeleteDBSnapshot"``

Grants permission to delete a DBSnapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSnapshot.html

#### Defined in

actions/rds.ts:320

___

### DeleteDBSubnetGroup

• **DeleteDBSubnetGroup** = ``"rds:DeleteDBSubnetGroup"``

Grants permission to delete a DB subnet group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSubnetGroup.html

#### Defined in

actions/rds.ts:326

___

### DeleteEventSubscription

• **DeleteEventSubscription** = ``"rds:DeleteEventSubscription"``

Grants permission to delete an RDS event notification subscription

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteEventSubscription.html

#### Defined in

actions/rds.ts:332

___

### DeleteGlobalCluster

• **DeleteGlobalCluster** = ``"rds:DeleteGlobalCluster"``

Grants permission to delete a global database cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteGlobalCluster.html

#### Defined in

actions/rds.ts:338

___

### DeleteIntegration

• **DeleteIntegration** = ``"rds:DeleteIntegration"``

Grants permission to delete an Aurora zero-ETL integration with Redshift

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteIntegration.html

#### Defined in

actions/rds.ts:344

___

### DeleteOptionGroup

• **DeleteOptionGroup** = ``"rds:DeleteOptionGroup"``

Grants permission to delete an existing option group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteOptionGroup.html

#### Defined in

actions/rds.ts:350

___

### DeleteTenantDatabase

• **DeleteTenantDatabase** = ``"rds:DeleteTenantDatabase"``

Grants permission to delete a tenant database

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteTenantDatabase.html

#### Defined in

actions/rds.ts:356

___

### DeregisterDBProxyTargets

• **DeregisterDBProxyTargets** = ``"rds:DeregisterDBProxyTargets"``

Grants permission to remove targets from a database proxy target group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeregisterDBProxyTargets.html

#### Defined in

actions/rds.ts:362

___

### DescribeAccountAttributes

• **DescribeAccountAttributes** = ``"rds:DescribeAccountAttributes"``

Grants permission to list all of the attributes for a customer account

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeAccountAttributes.html

#### Defined in

actions/rds.ts:368

___

### DescribeBlueGreenDeployments

• **DescribeBlueGreenDeployments** = ``"rds:DescribeBlueGreenDeployments"``

Grants permission to describe blue green deployments

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeBlueGreenDeployments.html

#### Defined in

actions/rds.ts:374

___

### DescribeCertificates

• **DescribeCertificates** = ``"rds:DescribeCertificates"``

Grants permission to list the set of CA certificates provided by Amazon RDS for
this AWS account

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeCertificates.html

#### Defined in

actions/rds.ts:381

___

### DescribeDBClusterAutomatedBackups

• **DescribeDBClusterAutomatedBackups** = ``"rds:DescribeDBClusterAutomatedBackups"``

Grants permission to return a list of cluster automated backups for both curren
t and deleted clusters

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterAutomatedBackups.html

#### Defined in

actions/rds.ts:388

___

### DescribeDBClusterBacktracks

• **DescribeDBClusterBacktracks** = ``"rds:DescribeDBClusterBacktracks"``

Grants permission to return information about backtracks for a DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterBacktracks.html

#### Defined in

actions/rds.ts:394

___

### DescribeDBClusterEndpoints

• **DescribeDBClusterEndpoints** = ``"rds:DescribeDBClusterEndpoints"``

Grants permission to return information about endpoints for an Amazon Aurora DB
cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterEndpoints.html

#### Defined in

actions/rds.ts:401

___

### DescribeDBClusterParameterGroups

• **DescribeDBClusterParameterGroups** = ``"rds:DescribeDBClusterParameterGroups"``

Grants permission to return a list of DBClusterParameterGroup descriptions

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameterGroups.html

#### Defined in

actions/rds.ts:407

___

### DescribeDBClusterParameters

• **DescribeDBClusterParameters** = ``"rds:DescribeDBClusterParameters"``

Grants permission to return the detailed parameter list for a particular DB clu
ster parameter group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameters.html

#### Defined in

actions/rds.ts:414

___

### DescribeDBClusterSnapshotAttributes

• **DescribeDBClusterSnapshotAttributes** = ``"rds:DescribeDBClusterSnapshotAttributes"``

Grants permission to return a list of DB cluster snapshot attribute names and v
alues for a manual DB cluster snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshotAttributes.html

#### Defined in

actions/rds.ts:421

___

### DescribeDBClusterSnapshots

• **DescribeDBClusterSnapshots** = ``"rds:DescribeDBClusterSnapshots"``

Grants permission to return information about DB cluster snapshots

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshots.html

#### Defined in

actions/rds.ts:427

___

### DescribeDBClusters

• **DescribeDBClusters** = ``"rds:DescribeDBClusters"``

Grants permission to return information about provisioned Aurora DB clusters

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html

#### Defined in

actions/rds.ts:433

___

### DescribeDBEngineVersions

• **DescribeDBEngineVersions** = ``"rds:DescribeDBEngineVersions"``

Grants permission to return a list of the available DB engines

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBEngineVersions.html

#### Defined in

actions/rds.ts:439

___

### DescribeDBInstanceAutomatedBackups

• **DescribeDBInstanceAutomatedBackups** = ``"rds:DescribeDBInstanceAutomatedBackups"``

Grants permission to return a list of automated backups for both current and de
leted instances

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstanceAutomatedBackups.html

#### Defined in

actions/rds.ts:446

___

### DescribeDBInstances

• **DescribeDBInstances** = ``"rds:DescribeDBInstances"``

Grants permission to return information about provisioned RDS instances

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html

#### Defined in

actions/rds.ts:452

___

### DescribeDBLogFiles

• **DescribeDBLogFiles** = ``"rds:DescribeDBLogFiles"``

Grants permission to return a list of DB log files for the DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBLogFiles.html

#### Defined in

actions/rds.ts:458

___

### DescribeDBParameterGroups

• **DescribeDBParameterGroups** = ``"rds:DescribeDBParameterGroups"``

Grants permission to return a list of DBParameterGroup descriptions

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameterGroups.html

#### Defined in

actions/rds.ts:464

___

### DescribeDBParameters

• **DescribeDBParameters** = ``"rds:DescribeDBParameters"``

Grants permission to return the detailed parameter list for a particular DB par
ameter group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameters.html

#### Defined in

actions/rds.ts:471

___

### DescribeDBProxies

• **DescribeDBProxies** = ``"rds:DescribeDBProxies"``

Grants permission to view proxies

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxies.html

#### Defined in

actions/rds.ts:477

___

### DescribeDBProxyEndpoints

• **DescribeDBProxyEndpoints** = ``"rds:DescribeDBProxyEndpoints"``

Grants permission to view proxy endpoints

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyEndpoints.html

#### Defined in

actions/rds.ts:483

___

### DescribeDBProxyTargetGroups

• **DescribeDBProxyTargetGroups** = ``"rds:DescribeDBProxyTargetGroups"``

Grants permission to view database proxy target group details

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargetGroups.html

#### Defined in

actions/rds.ts:489

___

### DescribeDBProxyTargets

• **DescribeDBProxyTargets** = ``"rds:DescribeDBProxyTargets"``

Grants permission to view database proxy target details

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargets.html

#### Defined in

actions/rds.ts:495

___

### DescribeDBRecommendations

• **DescribeDBRecommendations** = ``"rds:DescribeDBRecommendations"``

Grants permission to list recommendation details

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBRecommendations.html

#### Defined in

actions/rds.ts:501

___

### DescribeDBSecurityGroups

• **DescribeDBSecurityGroups** = ``"rds:DescribeDBSecurityGroups"``

Grants permission to return a list of DBSecurityGroup descriptions

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSecurityGroups.html

#### Defined in

actions/rds.ts:507

___

### DescribeDBShardGroups

• **DescribeDBShardGroups** = ``"rds:DescribeDBShardGroups"``

Grants permission to return information about all Aurora Limitless Database DB
shard groups for this account. You can filter by shard group(s)

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBShardGroups.html

#### Defined in

actions/rds.ts:514

___

### DescribeDBSnapshotAttributes

• **DescribeDBSnapshotAttributes** = ``"rds:DescribeDBSnapshotAttributes"``

Grants permission to return a list of DB snapshot attribute names and values fo
r a manual DB snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshotAttributes.html

#### Defined in

actions/rds.ts:521

___

### DescribeDBSnapshots

• **DescribeDBSnapshots** = ``"rds:DescribeDBSnapshots"``

Grants permission to return information about DB snapshots

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshots.html

#### Defined in

actions/rds.ts:527

___

### DescribeDBSubnetGroups

• **DescribeDBSubnetGroups** = ``"rds:DescribeDBSubnetGroups"``

Grants permission to return a list of DBSubnetGroup descriptions

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSubnetGroups.html

#### Defined in

actions/rds.ts:533

___

### DescribeDbSnapshotTenantDatabases

• **DescribeDbSnapshotTenantDatabases** = ``"rds:DescribeDbSnapshotTenantDatabases"``

Grants permission to return information about tenant databases in DB snapshots.
You can filter by Region or snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshotTenantDatabases.html

#### Defined in

actions/rds.ts:540

___

### DescribeEngineDefaultClusterParameters

• **DescribeEngineDefaultClusterParameters** = ``"rds:DescribeEngineDefaultClusterParameters"``

Grants permission to return the default engine and system parameter information
for the cluster database engine

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultClusterParameters.html

#### Defined in

actions/rds.ts:547

___

### DescribeEngineDefaultParameters

• **DescribeEngineDefaultParameters** = ``"rds:DescribeEngineDefaultParameters"``

Grants permission to return the default engine and system parameter information
for the specified database engine

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultParameters.html

#### Defined in

actions/rds.ts:554

___

### DescribeEventCategories

• **DescribeEventCategories** = ``"rds:DescribeEventCategories"``

Grants permission to display a list of categories for all event source types, o
r, if specified, for a specified source type

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventCategories.html

#### Defined in

actions/rds.ts:561

___

### DescribeEventSubscriptions

• **DescribeEventSubscriptions** = ``"rds:DescribeEventSubscriptions"``

Grants permission to list all the subscription descriptions for a customer acco
unt

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventSubscriptions.html

#### Defined in

actions/rds.ts:568

___

### DescribeEvents

• **DescribeEvents** = ``"rds:DescribeEvents"``

Grants permission to return events related to DB instances, DB security groups,
DB snapshots, and DB parameter groups for the past 14 days

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEvents.html

#### Defined in

actions/rds.ts:575

___

### DescribeExportTasks

• **DescribeExportTasks** = ``"rds:DescribeExportTasks"``

Grants permission to return information about the export tasks

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeExportTasks.html

#### Defined in

actions/rds.ts:581

___

### DescribeGlobalClusters

• **DescribeGlobalClusters** = ``"rds:DescribeGlobalClusters"``

Grants permission to return information about Aurora global database clusters

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeGlobalClusters.html

#### Defined in

actions/rds.ts:587

___

### DescribeIntegrations

• **DescribeIntegrations** = ``"rds:DescribeIntegrations"``

Grants permission to describe an Aurora zero-ETL integration with Redshift

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeIntegrations.html

#### Defined in

actions/rds.ts:593

___

### DescribeOptionGroupOptions

• **DescribeOptionGroupOptions** = ``"rds:DescribeOptionGroupOptions"``

Grants permission to describe all available options

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroupOptions.html

#### Defined in

actions/rds.ts:599

___

### DescribeOptionGroups

• **DescribeOptionGroups** = ``"rds:DescribeOptionGroups"``

Grants permission to describe the available option groups

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroups.html

#### Defined in

actions/rds.ts:605

___

### DescribeOrderableDBInstanceOptions

• **DescribeOrderableDBInstanceOptions** = ``"rds:DescribeOrderableDBInstanceOptions"``

Grants permission to return a list of orderable DB instance options for the spe
cified engine

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOrderableDBInstanceOptions.html

#### Defined in

actions/rds.ts:612

___

### DescribePendingMaintenanceActions

• **DescribePendingMaintenanceActions** = ``"rds:DescribePendingMaintenanceActions"``

Grants permission to return a list of resources (for example, DB instances) tha
t have at least one pending maintenance action

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribePendingMaintenanceActions.html

#### Defined in

actions/rds.ts:619

___

### DescribeRecommendationGroups

• **DescribeRecommendationGroups** = ``"rds:DescribeRecommendationGroups"``

Grants permission to return information about recommendation groups

See https://docs.aws.amazon.com/AmazonRDS/latest/USER_Recommendations.html

#### Defined in

actions/rds.ts:625

___

### DescribeRecommendations

• **DescribeRecommendations** = ``"rds:DescribeRecommendations"``

Grants permission to return information about recommendations

See https://docs.aws.amazon.com/AmazonRDS/latest/USER_Recommendations.html

#### Defined in

actions/rds.ts:631

___

### DescribeReservedDBInstances

• **DescribeReservedDBInstances** = ``"rds:DescribeReservedDBInstances"``

Grants permission to return information about reserved DB instances for this ac
count, or about a specified reserved DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstances.html

#### Defined in

actions/rds.ts:638

___

### DescribeReservedDBInstancesOfferings

• **DescribeReservedDBInstancesOfferings** = ``"rds:DescribeReservedDBInstancesOfferings"``

Grants permission to list available reserved DB instance offerings

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstancesOfferings.html

#### Defined in

actions/rds.ts:644

___

### DescribeSourceRegions

• **DescribeSourceRegions** = ``"rds:DescribeSourceRegions"``

Grants permission to return a list of the source AWS Regions where the current
AWS Region can create a Read Replica or copy a DB snapshot from

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeSourceRegions.html

#### Defined in

actions/rds.ts:651

___

### DescribeTenantDatabases

• **DescribeTenantDatabases** = ``"rds:DescribeTenantDatabases"``

Grants permission to return information about provisioned tenant databases. You
can filter by Region or snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeTenantDatabases.html

#### Defined in

actions/rds.ts:658

___

### DescribeValidDBInstanceModifications

• **DescribeValidDBInstanceModifications** = ``"rds:DescribeValidDBInstanceModifications"``

Grants permission to list available modifications you can make to your DB insta
nce

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeValidDBInstanceModifications.html

#### Defined in

actions/rds.ts:665

___

### DisableHttpEndpoint

• **DisableHttpEndpoint** = ``"rds:DisableHttpEndpoint"``

Grants permission to disable http endpoint for a DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DisableHttpEndpoint.html

#### Defined in

actions/rds.ts:671

___

### DownloadCompleteDBLogFile

• **DownloadCompleteDBLogFile** = ``"rds:DownloadCompleteDBLogFile"``

Grants permission to download specified log file

See https://docs.aws.amazon.com/AmazonRDS/latest/USER_LogAccess.html

#### Defined in

actions/rds.ts:677

___

### DownloadDBLogFilePortion

• **DownloadDBLogFilePortion** = ``"rds:DownloadDBLogFilePortion"``

Grants permission to download all or a portion of the specified log file, up to
1 MB in size

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DownloadDBLogFilePortion.html

#### Defined in

actions/rds.ts:684

___

### EnableHttpEndpoint

• **EnableHttpEndpoint** = ``"rds:EnableHttpEndpoint"``

Grants permission to enable http endpoint for a DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_EnableHttpEndpoint.html

#### Defined in

actions/rds.ts:690

___

### FailoverDBCluster

• **FailoverDBCluster** = ``"rds:FailoverDBCluster"``

Grants permission to force a failover for a DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_FailoverDBCluster.html

#### Defined in

actions/rds.ts:696

___

### FailoverGlobalCluster

• **FailoverGlobalCluster** = ``"rds:FailoverGlobalCluster"``

Grants permission to failover a global cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_FailoverGlobalCluster.html

#### Defined in

actions/rds.ts:702

___

### ListTagsForResource

• **ListTagsForResource** = ``"rds:ListTagsForResource"``

Grants permission to list all tags on an Amazon RDS resource

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/rds.ts:708

___

### ModifyActivityStream

• **ModifyActivityStream** = ``"rds:ModifyActivityStream"``

Grants permission to modify a database activity stream

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyActivityStream.html

#### Defined in

actions/rds.ts:714

___

### ModifyCertificates

• **ModifyCertificates** = ``"rds:ModifyCertificates"``

Grants permission to modify the system-default Secure Sockets Layer/Transport L
ayer Security (SSL/TLS) certificate for Amazon RDS for new DB instances

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCertificates.html

#### Defined in

actions/rds.ts:721

___

### ModifyCurrentDBClusterCapacity

• **ModifyCurrentDBClusterCapacity** = ``"rds:ModifyCurrentDBClusterCapacity"``

Grants permission to modify current cluster capacity for an Amazon Aurora Serve
rless DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCurrentDBClusterCapacity.html

#### Defined in

actions/rds.ts:728

___

### ModifyCustomDBEngineVersion

• **ModifyCustomDBEngineVersion** = ``"rds:ModifyCustomDBEngineVersion"``

Grants permission to modify an existing custom engine version

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCustomDBEngineVersion.html

#### Defined in

actions/rds.ts:734

___

### ModifyDBCluster

• **ModifyDBCluster** = ``"rds:ModifyDBCluster"``

Grants permission to modify a setting for an Amazon Aurora DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBCluster.html

#### Defined in

actions/rds.ts:740

___

### ModifyDBClusterEndpoint

• **ModifyDBClusterEndpoint** = ``"rds:ModifyDBClusterEndpoint"``

Grants permission to modify the properties of an endpoint in an Amazon Aurora D
B cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterEndpoint.html

#### Defined in

actions/rds.ts:747

___

### ModifyDBClusterParameterGroup

• **ModifyDBClusterParameterGroup** = ``"rds:ModifyDBClusterParameterGroup"``

Grants permission to modify the parameters of a DB cluster parameter group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterParameterGroup.html

#### Defined in

actions/rds.ts:753

___

### ModifyDBClusterSnapshotAttribute

• **ModifyDBClusterSnapshotAttribute** = ``"rds:ModifyDBClusterSnapshotAttribute"``

Grants permission to add an attribute and values to, or removes an attribute an
d values from, a manual DB cluster snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html

#### Defined in

actions/rds.ts:760

___

### ModifyDBInstance

• **ModifyDBInstance** = ``"rds:ModifyDBInstance"``

Grants permission to modify settings for a DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBInstance.html

#### Defined in

actions/rds.ts:766

___

### ModifyDBParameterGroup

• **ModifyDBParameterGroup** = ``"rds:ModifyDBParameterGroup"``

Grants permission to modify the parameters of a DB parameter group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBParameterGroup.html

#### Defined in

actions/rds.ts:772

___

### ModifyDBProxy

• **ModifyDBProxy** = ``"rds:ModifyDBProxy"``

Grants permission to modify database proxy

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxy.html

#### Defined in

actions/rds.ts:778

___

### ModifyDBProxyEndpoint

• **ModifyDBProxyEndpoint** = ``"rds:ModifyDBProxyEndpoint"``

Grants permission to modify database proxy endpoint

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxyEndpoint.html

#### Defined in

actions/rds.ts:784

___

### ModifyDBProxyTargetGroup

• **ModifyDBProxyTargetGroup** = ``"rds:ModifyDBProxyTargetGroup"``

Grants permission to modify target group for a database proxy

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxyTargetGroup.html

#### Defined in

actions/rds.ts:790

___

### ModifyDBRecommendation

• **ModifyDBRecommendation** = ``"rds:ModifyDBRecommendation"``

Grants permission to modify recommendation

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBRecommendation.html

#### Defined in

actions/rds.ts:796

___

### ModifyDBShardGroup

• **ModifyDBShardGroup** = ``"rds:ModifyDBShardGroup"``

Grants permission to modify properties of an Aurora Limitless Database DB shard
group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBShardGroup.html

#### Defined in

actions/rds.ts:803

___

### ModifyDBSnapshot

• **ModifyDBSnapshot** = ``"rds:ModifyDBSnapshot"``

Grants permission to update a manual DB snapshot, which can be encrypted or not
encrypted, with a new engine version

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshot.html

#### Defined in

actions/rds.ts:810

___

### ModifyDBSnapshotAttribute

• **ModifyDBSnapshotAttribute** = ``"rds:ModifyDBSnapshotAttribute"``

Grants permission to add an attribute and values to, or removes an attribute an
d values from, a manual DB snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html

#### Defined in

actions/rds.ts:817

___

### ModifyDBSubnetGroup

• **ModifyDBSubnetGroup** = ``"rds:ModifyDBSubnetGroup"``

Grants permission to modify an existing DB subnet group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSubnetGroup.html

#### Defined in

actions/rds.ts:823

___

### ModifyEventSubscription

• **ModifyEventSubscription** = ``"rds:ModifyEventSubscription"``

Grants permission to modify an existing RDS event notification subscription

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyEventSubscription.html

#### Defined in

actions/rds.ts:829

___

### ModifyGlobalCluster

• **ModifyGlobalCluster** = ``"rds:ModifyGlobalCluster"``

Grants permission to modify a setting for an Amazon Aurora global cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyGlobalCluster.html

#### Defined in

actions/rds.ts:835

___

### ModifyOptionGroup

• **ModifyOptionGroup** = ``"rds:ModifyOptionGroup"``

Grants permission to modify an existing option group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyOptionGroup.html

#### Defined in

actions/rds.ts:841

___

### ModifyRecommendation

• **ModifyRecommendation** = ``"rds:ModifyRecommendation"``

Grants permission to modify recommendation

See https://docs.aws.amazon.com/AmazonRDS/latest/USER_Recommendations.html

#### Defined in

actions/rds.ts:847

___

### ModifyTenantDatabase

• **ModifyTenantDatabase** = ``"rds:ModifyTenantDatabase"``

Grants permission to modify a tenant database

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyTenantDatabase.html

#### Defined in

actions/rds.ts:853

___

### PromoteReadReplica

• **PromoteReadReplica** = ``"rds:PromoteReadReplica"``

Grants permission to promote a Read Replica DB instance to a standalone DB inst
ance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplica.html

#### Defined in

actions/rds.ts:860

___

### PromoteReadReplicaDBCluster

• **PromoteReadReplicaDBCluster** = ``"rds:PromoteReadReplicaDBCluster"``

Grants permission to promote a Read Replica DB cluster to a standalone DB clust
er

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplicaDBCluster.html

#### Defined in

actions/rds.ts:867

___

### PurchaseReservedDBInstancesOffering

• **PurchaseReservedDBInstancesOffering** = ``"rds:PurchaseReservedDBInstancesOffering"``

Grants permission to purchase a reserved DB instance offering

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PurchaseReservedDBInstancesOffering.html

#### Defined in

actions/rds.ts:873

___

### RebootDBCluster

• **RebootDBCluster** = ``"rds:RebootDBCluster"``

Grants permission to reboot a previously provisioned DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RebootDBCluster.html

#### Defined in

actions/rds.ts:879

___

### RebootDBInstance

• **RebootDBInstance** = ``"rds:RebootDBInstance"``

Grants permission to restart the database engine service

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RebootDBInstance.html

#### Defined in

actions/rds.ts:885

___

### RebootDBShardGroup

• **RebootDBShardGroup** = ``"rds:RebootDBShardGroup"``

Grants permission to reboot an Aurora Limitless Database DB shard group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RebootDBShardGroup.html

#### Defined in

actions/rds.ts:891

___

### RegisterDBProxyTargets

• **RegisterDBProxyTargets** = ``"rds:RegisterDBProxyTargets"``

Grants permission to add targets to a database proxy target group

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RegisterDBProxyTargets.html

#### Defined in

actions/rds.ts:897

___

### RemoveFromGlobalCluster

• **RemoveFromGlobalCluster** = ``"rds:RemoveFromGlobalCluster"``

Grants permission to detach an Aurora secondary cluster from an Aurora global d
atabase cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveFromGlobalCluster.html

#### Defined in

actions/rds.ts:904

___

### RemoveRoleFromDBCluster

• **RemoveRoleFromDBCluster** = ``"rds:RemoveRoleFromDBCluster"``

Grants permission to disassociate an AWS Identity and Access Management (IAM) r
ole from an Amazon Aurora DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBCluster.html

#### Defined in

actions/rds.ts:911

___

### RemoveRoleFromDBInstance

• **RemoveRoleFromDBInstance** = ``"rds:RemoveRoleFromDBInstance"``

Grants permission to disassociate an AWS Identity and Access Management (IAM) r
ole from a DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBInstance.html

#### Defined in

actions/rds.ts:918

___

### RemoveSourceIdentifierFromSubscription

• **RemoveSourceIdentifierFromSubscription** = ``"rds:RemoveSourceIdentifierFromSubscription"``

Grants permission to remove a source identifier from an existing RDS event noti
fication subscription

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveSourceIdentifierFromSubscription.html

#### Defined in

actions/rds.ts:925

___

### RemoveTagsFromResource

• **RemoveTagsFromResource** = ``"rds:RemoveTagsFromResource"``

Grants permission to remove metadata tags from an Amazon RDS resource

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveTagsFromResource.html

#### Defined in

actions/rds.ts:931

___

### ResetDBClusterParameterGroup

• **ResetDBClusterParameterGroup** = ``"rds:ResetDBClusterParameterGroup"``

Grants permission to modify the parameters of a DB cluster parameter group to t
he default value

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBClusterParameterGroup.html

#### Defined in

actions/rds.ts:938

___

### ResetDBParameterGroup

• **ResetDBParameterGroup** = ``"rds:ResetDBParameterGroup"``

Grants permission to modify the parameters of a DB parameter group to the engin
e/system default value

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBParameterGroup.html

#### Defined in

actions/rds.ts:945

___

### RestoreDBClusterFromS3

• **RestoreDBClusterFromS3** = ``"rds:RestoreDBClusterFromS3"``

Grants permission to create an Amazon Aurora DB cluster from data stored in an
Amazon S3 bucket

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromS3.html

#### Defined in

actions/rds.ts:952

___

### RestoreDBClusterFromSnapshot

• **RestoreDBClusterFromSnapshot** = ``"rds:RestoreDBClusterFromSnapshot"``

Grants permission to create a new DB cluster from a DB cluster snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromSnapshot.html

#### Defined in

actions/rds.ts:958

___

### RestoreDBClusterToPointInTime

• **RestoreDBClusterToPointInTime** = ``"rds:RestoreDBClusterToPointInTime"``

Grants permission to restore a DB cluster to an arbitrary point in time

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterToPointInTime.html

#### Defined in

actions/rds.ts:964

___

### RestoreDBInstanceFromDBSnapshot

• **RestoreDBInstanceFromDBSnapshot** = ``"rds:RestoreDBInstanceFromDBSnapshot"``

Grants permission to create a new DB instance from a DB snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html

#### Defined in

actions/rds.ts:970

___

### RestoreDBInstanceFromS3

• **RestoreDBInstanceFromS3** = ``"rds:RestoreDBInstanceFromS3"``

Grants permission to create a new DB instance from an Amazon S3 bucket

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromS3.html

#### Defined in

actions/rds.ts:976

___

### RestoreDBInstanceToPointInTime

• **RestoreDBInstanceToPointInTime** = ``"rds:RestoreDBInstanceToPointInTime"``

Grants permission to restore a DB instance to an arbitrary point in time

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceToPointInTime.html

#### Defined in

actions/rds.ts:982

___

### RevokeDBSecurityGroupIngress

• **RevokeDBSecurityGroupIngress** = ``"rds:RevokeDBSecurityGroupIngress"``

Grants permission to revoke ingress from a DBSecurityGroup for previously autho
rized IP ranges or EC2 or VPC Security Groups

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RevokeDBSecurityGroupIngress.html

#### Defined in

actions/rds.ts:989

___

### StartActivityStream

• **StartActivityStream** = ``"rds:StartActivityStream"``

Grants permission to start Activity Stream

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartActivityStream.html

#### Defined in

actions/rds.ts:995

___

### StartDBCluster

• **StartDBCluster** = ``"rds:StartDBCluster"``

Grants permission to start the DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBCluster.html

#### Defined in

actions/rds.ts:1001

___

### StartDBInstance

• **StartDBInstance** = ``"rds:StartDBInstance"``

Grants permission to start the DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstance.html

#### Defined in

actions/rds.ts:1007

___

### StartDBInstanceAutomatedBackupsReplication

• **StartDBInstanceAutomatedBackupsReplication** = ``"rds:StartDBInstanceAutomatedBackupsReplication"``

Grants permission to start replication of automated backups to a different AWS
Region

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstanceAutomatedBackupsReplication.html

#### Defined in

actions/rds.ts:1014

___

### StartExportTask

• **StartExportTask** = ``"rds:StartExportTask"``

Grants permission to start a new Export task for a DB snapshot

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html

#### Defined in

actions/rds.ts:1020

___

### StopActivityStream

• **StopActivityStream** = ``"rds:StopActivityStream"``

Grants permission to stop Activity Stream

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopActivityStream.html

#### Defined in

actions/rds.ts:1026

___

### StopDBCluster

• **StopDBCluster** = ``"rds:StopDBCluster"``

Grants permission to stop the DB cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBCluster.html

#### Defined in

actions/rds.ts:1032

___

### StopDBInstance

• **StopDBInstance** = ``"rds:StopDBInstance"``

Grants permission to stop the DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBInstance.html

#### Defined in

actions/rds.ts:1038

___

### StopDBInstanceAutomatedBackupsReplication

• **StopDBInstanceAutomatedBackupsReplication** = ``"rds:StopDBInstanceAutomatedBackupsReplication"``

Grants permission to stop automated backup replication for a DB instance

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBInstanceAutomatedBackupsReplication.html

#### Defined in

actions/rds.ts:1044

___

### SwitchoverBlueGreenDeployment

• **SwitchoverBlueGreenDeployment** = ``"rds:SwitchoverBlueGreenDeployment"``

Grants permission to switch a blue-green deployment from source instance or clu
ster to target

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_SwitchoverBlueGreenDeployment.html

#### Defined in

actions/rds.ts:1051

___

### SwitchoverGlobalCluster

• **SwitchoverGlobalCluster** = ``"rds:SwitchoverGlobalCluster"``

Grants permission to switchover a global cluster

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_SwitchoverGlobalCluster.html

#### Defined in

actions/rds.ts:1057

___

### SwitchoverReadReplica

• **SwitchoverReadReplica** = ``"rds:SwitchoverReadReplica"``

Grants permission to switch over a read replica, making it the new primary data
base

See https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_SwitchoverReadReplica.html

#### Defined in

actions/rds.ts:1064
