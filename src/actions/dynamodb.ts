// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon DynamoDB (DYNAMODB)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html
 *
 * 2025-02-24T21:47:39.932Z
 */
export enum AwsDynamodbActions {
  /**
   * Grants permission to return the attributes of one or more items from one or mor
   * e tables
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
   */
  BatchGetItem = 'dynamodb:BatchGetItem',
  /**
   * Grants permission to put or delete multiple items in one or more tables
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
   */
  BatchWriteItem = 'dynamodb:BatchWriteItem',
  /**
   * Grants permission to the ConditionCheckItem operation checks the existence of a
   * set of attributes for the item with the given primary key
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheck.html
   */
  ConditionCheckItem = 'dynamodb:ConditionCheckItem',
  /**
   * Grants permission to create a backup for an existing table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html
   */
  CreateBackup = 'dynamodb:CreateBackup',
  /**
   * Grants permission to create a global table from an existing table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html
   */
  CreateGlobalTable = 'dynamodb:CreateGlobalTable',
  /**
   * Grants permission to the CreateTable operation adds a new table to your account
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html
   */
  CreateTable = 'dynamodb:CreateTable',
  /**
   * Grants permission to add a new replica table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2gt_IAM.html
   */
  CreateTableReplica = 'dynamodb:CreateTableReplica',
  /**
   * Grants permission to delete an existing backup of a table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html
   */
  DeleteBackup = 'dynamodb:DeleteBackup',
  /**
   * Grants permission to deletes a single item in a table by primary key
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html
   */
  DeleteItem = 'dynamodb:DeleteItem',
  /**
   * Grants permission to delete the resource-based policy attached to the resource
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteResourcePolicy.html
   */
  DeleteResourcePolicy = 'dynamodb:DeleteResourcePolicy',
  /**
   * Grants permission to the DeleteTable operation which deletes a table and all of
   * its items
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html
   */
  DeleteTable = 'dynamodb:DeleteTable',
  /**
   * Grants permission to delete a replica table and all of its items
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2gt_IAM.html
   */
  DeleteTableReplica = 'dynamodb:DeleteTableReplica',
  /**
   * Grants permission to describe an existing backup of a table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html
   */
  DescribeBackup = 'dynamodb:DescribeBackup',
  /**
   * Grants permission to check the status of the backup restore settings on the spe
   * cified table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html
   */
  DescribeContinuousBackups = 'dynamodb:DescribeContinuousBackups',
  /**
   * Grants permission to describe the contributor insights status and related detai
   * ls for a given table or global secondary index
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html
   */
  DescribeContributorInsights = 'dynamodb:DescribeContributorInsights',
  /**
   * Grants permission to return the regional endpoint information
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeEndpoints.html
   */
  DescribeEndpoints = 'dynamodb:DescribeEndpoints',
  /**
   * Grants permission to describe an existing Export of a table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html
   */
  DescribeExport = 'dynamodb:DescribeExport',
  /**
   * Grants permission to return information about the specified global table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html
   */
  DescribeGlobalTable = 'dynamodb:DescribeGlobalTable',
  /**
   * Grants permission to return settings information about the specified global tab
   * le
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html
   */
  DescribeGlobalTableSettings = 'dynamodb:DescribeGlobalTableSettings',
  /**
   * Grants permission to describe an existing import
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeImport.html
   */
  DescribeImport = 'dynamodb:DescribeImport',
  /**
   * Grants permission to grant permission to describe the status of Kinesis streami
   * ng and related details for a given table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html
   */
  DescribeKinesisStreamingDestination = 'dynamodb:DescribeKinesisStreamingDestination',
  /**
   * Grants permission to return the current provisioned-capacity limits for your AW
   * S account in a region, both for the region as a whole and for any one DynamoDB
   * table that you create there
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html
   */
  DescribeLimits = 'dynamodb:DescribeLimits',
  /**
   * Grants permission to describe one or more of the Reserved Capacity purchased
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/iam-policy-prevent-purchase-reserved-capacity.html
   */
  DescribeReservedCapacity = 'dynamodb:DescribeReservedCapacity',
  /**
   * Grants permission to describe Reserved Capacity offerings that are available fo
   * r purchase
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/iam-policy-prevent-purchase-reserved-capacity.html
   */
  DescribeReservedCapacityOfferings = 'dynamodb:DescribeReservedCapacityOfferings',
  /**
   * Grants permission to return information about a stream, including the current s
   * tatus of the stream, its Amazon Resource Name (ARN), the composition of its sha
   * rds, and its corresponding DynamoDB table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_DescribeStream.html
   */
  DescribeStream = 'dynamodb:DescribeStream',
  /**
   * Grants permission to return information about the table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html
   */
  DescribeTable = 'dynamodb:DescribeTable',
  /**
   * Grants permission to describe the auto scaling settings across all replicas of
   * the global table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html
   */
  DescribeTableReplicaAutoScaling = 'dynamodb:DescribeTableReplicaAutoScaling',
  /**
   * Grants permission to give a description of the Time to Live (TTL) status on the
   * specified table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html
   */
  DescribeTimeToLive = 'dynamodb:DescribeTimeToLive',
  /**
   * Grants permission to grant permission to stop replication from the DynamoDB tab
   * le to the Kinesis data stream
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html
   */
  DisableKinesisStreamingDestination = 'dynamodb:DisableKinesisStreamingDestination',
  /**
   * Grants permission to grant permission to start table data replication to the sp
   * ecified Kinesis data stream at a timestamp chosen during the enable workflow
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html
   */
  EnableKinesisStreamingDestination = 'dynamodb:EnableKinesisStreamingDestination',
  /**
   * Grants permission to initiate an Export of a DynamoDB table to S3
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html
   */
  ExportTableToPointInTime = 'dynamodb:ExportTableToPointInTime',
  /**
   * Grants permission to view the status of Attribute Based Access Control for the
   * account
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/abac-enable-ddb.html
   */
  GetAbacStatus = 'dynamodb:GetAbacStatus',
  /**
   * Grants permission to the GetItem operation that returns a set of attributes for
   * the item with the given primary key
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html
   */
  GetItem = 'dynamodb:GetItem',
  /**
   * Grants permission to retrieve the stream records from a given shard
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetRecords.html
   */
  GetRecords = 'dynamodb:GetRecords',
  /**
   * Grants permission to view a resource-based policy for a resource
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetResourcePolicy.html
   */
  GetResourcePolicy = 'dynamodb:GetResourcePolicy',
  /**
   * Grants permission to return a shard iterator
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html
   */
  GetShardIterator = 'dynamodb:GetShardIterator',
  /**
   * Grants permission to initiate an import from S3 to a DynamoDB table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ImportTable.html
   */
  ImportTable = 'dynamodb:ImportTable',
  /**
   * Grants permission to list backups associated with the account and endpoint
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html
   */
  ListBackups = 'dynamodb:ListBackups',
  /**
   * Grants permission to list the ContributorInsightsSummary for all tables and glo
   * bal secondary indexes associated with the current account and endpoint
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html
   */
  ListContributorInsights = 'dynamodb:ListContributorInsights',
  /**
   * Grants permission to list exports associated with the account and endpoint
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html
   */
  ListExports = 'dynamodb:ListExports',
  /**
   * Grants permission to list all global tables that have a replica in the specifie
   * d region
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html
   */
  ListGlobalTables = 'dynamodb:ListGlobalTables',
  /**
   * Grants permission to list imports associated with the account and endpoint
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListImports.html
   */
  ListImports = 'dynamodb:ListImports',
  /**
   * Grants permission to return an array of stream ARNs associated with the current
   * account and endpoint
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_ListStreams.html
   */
  ListStreams = 'dynamodb:ListStreams',
  /**
   * Grants permission to return an array of table names associated with the current
   * account and endpoint
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html
   */
  ListTables = 'dynamodb:ListTables',
  /**
   * Grants permission to list all tags on an Amazon DynamoDB resource
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html
   */
  ListTagsOfResource = 'dynamodb:ListTagsOfResource',
  /**
   * Grants permission to delete a single item in a table by primary key
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   */
  PartiQLDelete = 'dynamodb:PartiQLDelete',
  /**
   * Grants permission to create a new item, if an item with same primary key does n
   * ot exist in the table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   */
  PartiQLInsert = 'dynamodb:PartiQLInsert',
  /**
   * Grants permission to read a set of attributes for items from a table or index
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   */
  PartiQLSelect = 'dynamodb:PartiQLSelect',
  /**
   * Grants permission to edit an existing item's attributes
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   */
  PartiQLUpdate = 'dynamodb:PartiQLUpdate',
  /**
   * Grants permission to purchases reserved capacity for use with your account
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/iam-policy-prevent-purchase-reserved-capacity.html
   */
  PurchaseReservedCapacityOfferings = 'dynamodb:PurchaseReservedCapacityOfferings',
  /**
   * Grants permission to create a new item, or replace an old item with a new item
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
   */
  PutItem = 'dynamodb:PutItem',
  /**
   * Grants permission to attach a resource-based policy to the resource
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutResourcePolicy.html
   */
  PutResourcePolicy = 'dynamodb:PutResourcePolicy',
  /**
   * Grants permission to use the primary key of a table or a secondary index to dir
   * ectly access items from that table or index
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
   */
  Query = 'dynamodb:Query',
  /**
   * Grants permission to create a new table from recovery point on AWS Backup
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsageNotesAWS.html
   */
  RestoreTableFromAwsBackup = 'dynamodb:RestoreTableFromAwsBackup',
  /**
   * Grants permission to create a new table from an existing backup
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html
   */
  RestoreTableFromBackup = 'dynamodb:RestoreTableFromBackup',
  /**
   * Grants permission to restore a table to a point in time
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html
   */
  RestoreTableToPointInTime = 'dynamodb:RestoreTableToPointInTime',
  /**
   * Grants permission to return one or more items and item attributes by accessing
   * every item in a table or a secondary index
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
   */
  Scan = 'dynamodb:Scan',
  /**
   * Grants permission to create a backup on AWS Backup with advanced features enabl
   * ed
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsageNotesAWS.html
   */
  StartAwsBackupJob = 'dynamodb:StartAwsBackupJob',
  /**
   * Grants permission to associate a set of tags with an Amazon DynamoDB resource
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html
   */
  TagResource = 'dynamodb:TagResource',
  /**
   * Grants permission to remove the association of tags from an Amazon DynamoDB res
   * ource
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'dynamodb:UntagResource',
  /**
   * Grants permission to update the status of Attribute Based Access Control for th
   * e account
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/abac-enable-ddb.html
   */
  UpdateAbacStatus = 'dynamodb:UpdateAbacStatus',
  /**
   * Grants permission to enable or disable continuous backups
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html
   */
  UpdateContinuousBackups = 'dynamodb:UpdateContinuousBackups',
  /**
   * Grants permission to update the status for contributor insights for a specific
   * table or global secondary index
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html
   */
  UpdateContributorInsights = 'dynamodb:UpdateContributorInsights',
  /**
   * Grants permission to add or remove replicas in the specified global table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html
   */
  UpdateGlobalTable = 'dynamodb:UpdateGlobalTable',
  /**
   * Grants permission to update settings of the specified global table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html
   */
  UpdateGlobalTableSettings = 'dynamodb:UpdateGlobalTableSettings',
  /**
   * Grants permission to update version of the specified global table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html
   */
  UpdateGlobalTableVersion = 'dynamodb:UpdateGlobalTableVersion',
  /**
   * Grants permission to edit an existing item's attributes, or adds a new item to
   * the table if it does not already exist
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html
   */
  UpdateItem = 'dynamodb:UpdateItem',
  /**
   * Grants permission to update data replication configurations for the specified K
   * inesis data stream
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateKinesisStreamingDestination.html
   */
  UpdateKinesisStreamingDestination = 'dynamodb:UpdateKinesisStreamingDestination',
  /**
   * Grants permission to modify the provisioned throughput settings, global seconda
   * ry indexes, or DynamoDB Streams settings for a given table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html
   */
  UpdateTable = 'dynamodb:UpdateTable',
  /**
   * Grants permission to update auto scaling settings on your replica table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html
   */
  UpdateTableReplicaAutoScaling = 'dynamodb:UpdateTableReplicaAutoScaling',
  /**
   * Grants permission to enable or disable TTL for the specified table
   *
   * See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html
   */
  UpdateTimeToLive = 'dynamodb:UpdateTimeToLive',
}
