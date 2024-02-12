// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon ElastiCache (ELASTICACHE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticache.html
 *
 * 2024-02-12T09:57:13.899Z
 */
export enum AwsElasticacheActions {
  /**
   * Grants permission to add tags to an ElastiCache resource
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AddTagsToResource.html
   */
  AddTagsToResource = 'elasticache:AddTagsToResource',
  /**
   * Grants permission to authorize an EC2 security group on a ElastiCache security
   * group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AuthorizeCacheSecurityGroupIngress.html
   */
  AuthorizeCacheSecurityGroupIngress = 'elasticache:AuthorizeCacheSecurityGroupIngress',
  /**
   * Grants permission to apply ElastiCache service updates to sets of clusters and
   * replication groups
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchApplyUpdateAction.html
   */
  BatchApplyUpdateAction = 'elasticache:BatchApplyUpdateAction',
  /**
   * Grants permission to stop ElastiCache service updates from being executed on a
   * set of clusters
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchStopUpdateAction.html
   */
  BatchStopUpdateAction = 'elasticache:BatchStopUpdateAction',
  /**
   * Grants permission to complete an online migration of data from hosted Redis on
   * Amazon EC2 to ElastiCache
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CompleteMigration.html
   */
  CompleteMigration = 'elasticache:CompleteMigration',
  /**
   * Grants permission to connect as a specified ElastiCache user to an ElastiCache
   * Replication Group or ElastiCache serverless cache
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth-iam.html
   */
  Connect = 'elasticache:Connect',
  /**
   * Grants permission to make a copy of an existing serverless cache snapshot
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CopyServerlessCacheSnapshot.html
   */
  CopyServerlessCacheSnapshot = 'elasticache:CopyServerlessCacheSnapshot',
  /**
   * Grants permission to make a copy of an existing snapshot
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CopySnapshot.html
   */
  CopySnapshot = 'elasticache:CopySnapshot',
  /**
   * Grants permission to create a cache cluster
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheCluster.html
   */
  CreateCacheCluster = 'elasticache:CreateCacheCluster',
  /**
   * Grants permission to create a parameter group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheParameterGroup.html
   */
  CreateCacheParameterGroup = 'elasticache:CreateCacheParameterGroup',
  /**
   * Grants permission to create a cache security group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSecurityGroup.html
   */
  CreateCacheSecurityGroup = 'elasticache:CreateCacheSecurityGroup',
  /**
   * Grants permission to create a cache subnet group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html
   */
  CreateCacheSubnetGroup = 'elasticache:CreateCacheSubnetGroup',
  /**
   * Grants permission to create a global replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateGlobalReplicationGroup.html
   */
  CreateGlobalReplicationGroup = 'elasticache:CreateGlobalReplicationGroup',
  /**
   * Grants permission to create a replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateReplicationGroup.html
   */
  CreateReplicationGroup = 'elasticache:CreateReplicationGroup',
  /**
   * Grants permission to create a serverless cache
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateServerlessCache.html
   */
  CreateServerlessCache = 'elasticache:CreateServerlessCache',
  /**
   * Grants permission to create a copy of a serverless cache at a specific moment i
   * n time
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateServerlessCacheSnapshot.html
   */
  CreateServerlessCacheSnapshot = 'elasticache:CreateServerlessCacheSnapshot',
  /**
   * Grants permission to create a copy of an entire Redis cluster at a specific mom
   * ent in time
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateSnapshot.html
   */
  CreateSnapshot = 'elasticache:CreateSnapshot',
  /**
   * Grants permission to create a user for Redis. Users are supported from Redis 6.
   * 0 onwards
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateUser.html
   */
  CreateUser = 'elasticache:CreateUser',
  /**
   * Grants permission to create a user group for Redis. Groups are supported from R
   * edis 6.0 onwards
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateUserGroup.html
   */
  CreateUserGroup = 'elasticache:CreateUserGroup',
  /**
   * Grants permission to decrease the number of node groups in global replication g
   * roups
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseNodeGroupsInGlobalReplicationGroup.html
   */
  DecreaseNodeGroupsInGlobalReplicationGroup = 'elasticache:DecreaseNodeGroupsInGlobalReplicationGroup',
  /**
   * Grants permission to decrease the number of replicas in a Redis (cluster mode d
   * isabled) replication group or the number of replica nodes in one or more node g
   * roups (shards) of a Redis (cluster mode enabled) replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseReplicaCount.html
   */
  DecreaseReplicaCount = 'elasticache:DecreaseReplicaCount',
  /**
   * Grants permission to delete a previously provisioned cluster
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheCluster.html
   */
  DeleteCacheCluster = 'elasticache:DeleteCacheCluster',
  /**
   * Grants permission to delete the specified cache parameter group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheParameterGroup.html
   */
  DeleteCacheParameterGroup = 'elasticache:DeleteCacheParameterGroup',
  /**
   * Grants permission to delete a cache security group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSecurityGroup.html
   */
  DeleteCacheSecurityGroup = 'elasticache:DeleteCacheSecurityGroup',
  /**
   * Grants permission to delete a cache subnet group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSubnetGroup.html
   */
  DeleteCacheSubnetGroup = 'elasticache:DeleteCacheSubnetGroup',
  /**
   * Grants permission to delete an existing global replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteGlobalReplicationGroup.html
   */
  DeleteGlobalReplicationGroup = 'elasticache:DeleteGlobalReplicationGroup',
  /**
   * Grants permission to delete an existing replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteReplicationGroup.html
   */
  DeleteReplicationGroup = 'elasticache:DeleteReplicationGroup',
  /**
   * Grants permission to delete a serverless cache
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteServerlessCache.html
   */
  DeleteServerlessCache = 'elasticache:DeleteServerlessCache',
  /**
   * Grants permission to delete a serverless cache snapshot
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteServerlessCacheSnapshot.html
   */
  DeleteServerlessCacheSnapshot = 'elasticache:DeleteServerlessCacheSnapshot',
  /**
   * Grants permission to delete an existing snapshot
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteSnapshot.html
   */
  DeleteSnapshot = 'elasticache:DeleteSnapshot',
  /**
   * Grants permission to delete an existing user and thus remove it from all user g
   * roups and replication groups where it was assigned
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteUser.html
   */
  DeleteUser = 'elasticache:DeleteUser',
  /**
   * Grants permission to delete an existing user group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteUserGroup.html
   */
  DeleteUserGroup = 'elasticache:DeleteUserGroup',
  /**
   * Grants permission to list information about provisioned cache clusters
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheClusters.html
   */
  DescribeCacheClusters = 'elasticache:DescribeCacheClusters',
  /**
   * Grants permission to list available cache engines and their versions
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheEngineVersions.html
   */
  DescribeCacheEngineVersions = 'elasticache:DescribeCacheEngineVersions',
  /**
   * Grants permission to list cache parameter group descriptions
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameterGroups.html
   */
  DescribeCacheParameterGroups = 'elasticache:DescribeCacheParameterGroups',
  /**
   * Grants permission to retrieve the detailed parameter list for a particular cach
   * e parameter group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameters.html
   */
  DescribeCacheParameters = 'elasticache:DescribeCacheParameters',
  /**
   * Grants permission to list cache security group descriptions
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSecurityGroups.html
   */
  DescribeCacheSecurityGroups = 'elasticache:DescribeCacheSecurityGroups',
  /**
   * Grants permission to list cache subnet group descriptions
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSubnetGroups.html
   */
  DescribeCacheSubnetGroups = 'elasticache:DescribeCacheSubnetGroups',
  /**
   * Grants permission to retrieve the default engine and system parameter informati
   * on for the specified cache engine
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEngineDefaultParameters.html
   */
  DescribeEngineDefaultParameters = 'elasticache:DescribeEngineDefaultParameters',
  /**
   * Grants permission to list events related to clusters, cache security groups, an
   * d cache parameter groups
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html
   */
  DescribeEvents = 'elasticache:DescribeEvents',
  /**
   * Grants permission to list information about global replication groups
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeGlobalReplicationGroups.html
   */
  DescribeGlobalReplicationGroups = 'elasticache:DescribeGlobalReplicationGroups',
  /**
   * Grants permission to list information about provisioned replication groups
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReplicationGroups.html
   */
  DescribeReplicationGroups = 'elasticache:DescribeReplicationGroups',
  /**
   * Grants permission to list information about purchased reserved cache nodes
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodes.html
   */
  DescribeReservedCacheNodes = 'elasticache:DescribeReservedCacheNodes',
  /**
   * Grants permission to list available reserved cache node offerings
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodesOfferings.html
   */
  DescribeReservedCacheNodesOfferings = 'elasticache:DescribeReservedCacheNodesOfferings',
  /**
   * Grants permission to list information about serverless cache snapshots
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeServerlessCacheSnapshots.html
   */
  DescribeServerlessCacheSnapshots = 'elasticache:DescribeServerlessCacheSnapshots',
  /**
   * Grants permission to list serverless caches
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeServerlessCaches.html
   */
  DescribeServerlessCaches = 'elasticache:DescribeServerlessCaches',
  /**
   * Grants permission to list details of the service updates
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeServiceUpdates.html
   */
  DescribeServiceUpdates = 'elasticache:DescribeServiceUpdates',
  /**
   * Grants permission to list information about cluster or replication group snapsh
   * ots
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeSnapshots.html
   */
  DescribeSnapshots = 'elasticache:DescribeSnapshots',
  /**
   * Grants permission to list details of the update actions for a set of clusters o
   * r replication groups
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUpdateActions.html
   */
  DescribeUpdateActions = 'elasticache:DescribeUpdateActions',
  /**
   * Grants permission to list information about Redis user groups
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUserGroups.html
   */
  DescribeUserGroups = 'elasticache:DescribeUserGroups',
  /**
   * Grants permission to list information about Redis users
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUsers.html
   */
  DescribeUsers = 'elasticache:DescribeUsers',
  /**
   * Grants permission to remove a secondary replication group from the global repli
   * cation group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DisassociateGlobalReplicationGroup.html
   */
  DisassociateGlobalReplicationGroup = 'elasticache:DisassociateGlobalReplicationGroup',
  /**
   * Grants permission to export a copy of a serverless cache at a specific moment i
   * n time to s3 bucket
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ExportServerlessCacheSnapshot.html
   */
  ExportServerlessCacheSnapshot = 'elasticache:ExportServerlessCacheSnapshot',
  /**
   * Grants permission to failover the primary region to a selected secondary region
   * of a global replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_FailoverGlobalReplicationGroup.html
   */
  FailoverGlobalReplicationGroup = 'elasticache:FailoverGlobalReplicationGroup',
  /**
   * Grants permission to increase the number of node groups in a global replication
   * group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseNodeGroupsInGlobalReplicationGroup.html
   */
  IncreaseNodeGroupsInGlobalReplicationGroup = 'elasticache:IncreaseNodeGroupsInGlobalReplicationGroup',
  /**
   * Grants permission to increase the number of replicas in a Redis (cluster mode d
   * isabled) replication group or the number of replica nodes in one or more node g
   * roups (shards) of a Redis (cluster mode enabled) replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseReplicaCount.html
   */
  IncreaseReplicaCount = 'elasticache:IncreaseReplicaCount',
  /**
   * Grants permission to test an AZ power interruption for an ElastiCache resource
   *
   * See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#elasticache-actions-reference
   */
  InterruptClusterAzPower = 'elasticache:InterruptClusterAzPower',
  /**
   * Grants permission to list available node type that can be used to scale a parti
   * cular Redis cluster or replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListAllowedNodeTypeModifications.html
   */
  ListAllowedNodeTypeModifications = 'elasticache:ListAllowedNodeTypeModifications',
  /**
   * Grants permission to list tags for an ElastiCache resource
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'elasticache:ListTagsForResource',
  /**
   * Grants permission to modify settings for a cluster
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html
   */
  ModifyCacheCluster = 'elasticache:ModifyCacheCluster',
  /**
   * Grants permission to modify parameters of a cache parameter group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html
   */
  ModifyCacheParameterGroup = 'elasticache:ModifyCacheParameterGroup',
  /**
   * Grants permission to modify an existing cache subnet group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheSubnetGroup.html
   */
  ModifyCacheSubnetGroup = 'elasticache:ModifyCacheSubnetGroup',
  /**
   * Grants permission to modify settings for a global replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyGlobalReplicationGroup.html
   */
  ModifyGlobalReplicationGroup = 'elasticache:ModifyGlobalReplicationGroup',
  /**
   * Grants permission to modify the settings for a replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroup.html
   */
  ModifyReplicationGroup = 'elasticache:ModifyReplicationGroup',
  /**
   * Grants permission to add shards, remove shards, or rebalance the keyspaces amon
   * g existing shards of a replication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html
   */
  ModifyReplicationGroupShardConfiguration = 'elasticache:ModifyReplicationGroupShardConfiguration',
  /**
   * Grants permission to modify parameters for a serverless cache
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyServerlessCache.html
   */
  ModifyServerlessCache = 'elasticache:ModifyServerlessCache',
  /**
   * Grants permission to change Redis user password(s) and/or access string
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyUser.html
   */
  ModifyUser = 'elasticache:ModifyUser',
  /**
   * Grants permission to change list of users that belong to the user group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyUserGroup.html
   */
  ModifyUserGroup = 'elasticache:ModifyUserGroup',
  /**
   * Grants permission to purchase a reserved cache node offering
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_PurchaseReservedCacheNodesOffering.html
   */
  PurchaseReservedCacheNodesOffering = 'elasticache:PurchaseReservedCacheNodesOffering',
  /**
   * Grants permission to perform a key space rebalance operation to redistribute sl
   * ots and ensure uniform key distribution across existing shards in a global repl
   * ication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebalanceSlotsInGlobalReplicationGroup.html
   */
  RebalanceSlotsInGlobalReplicationGroup = 'elasticache:RebalanceSlotsInGlobalReplicationGroup',
  /**
   * Grants permission to reboot some, or all, of the cache nodes within a provision
   * ed cache cluster or replication group (cluster mode disabled)
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebootCacheCluster.html
   */
  RebootCacheCluster = 'elasticache:RebootCacheCluster',
  /**
   * Grants permission to remove tags from a ElastiCache resource
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RemoveTagsFromResource.html
   */
  RemoveTagsFromResource = 'elasticache:RemoveTagsFromResource',
  /**
   * Grants permission to modify parameters of a cache parameter group back to their
   * default values
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ResetCacheParameterGroup.html
   */
  ResetCacheParameterGroup = 'elasticache:ResetCacheParameterGroup',
  /**
   * Grants permission to remove an EC2 security group ingress from a ElastiCache se
   * curity group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RevokeCacheSecurityGroupIngress.html
   */
  RevokeCacheSecurityGroupIngress = 'elasticache:RevokeCacheSecurityGroupIngress',
  /**
   * Grants permission to start a migration of data from hosted Redis on Amazon EC2
   * to ElastiCache for Redis
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_StartMigration.html
   */
  StartMigration = 'elasticache:StartMigration',
  /**
   * Grants permission to test automatic failover on a specified node group in a rep
   * lication group
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_TestFailover.html
   */
  TestFailover = 'elasticache:TestFailover',
  /**
   * Grants permission to test a migration of data from hosted Redis on Amazon EC2 t
   * o ElastiCache for Redis
   *
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_TestMigration.html
   */
  TestMigration = 'elasticache:TestMigration',
}
