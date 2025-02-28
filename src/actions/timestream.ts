// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Timestream (TIMESTREAM)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontimestream.html
 *
 * 2025-02-24T21:49:59.893Z
 */
export enum AwsTimestreamActions {
  /**
   * Grants permission to cancel queries in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_CancelQuery.html
   */
  CancelQuery = 'timestream:CancelQuery',
  /**
   * Grants permission to create a batch load task in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateBatchLoadTask.html
   */
  CreateBatchLoadTask = 'timestream:CreateBatchLoadTask',
  /**
   * Grants permission to create a database in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateDatabase.html
   */
  CreateDatabase = 'timestream:CreateDatabase',
  /**
   * Grants permission to create a scheduled query in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateScheduledQuery.html
   */
  CreateScheduledQuery = 'timestream:CreateScheduledQuery',
  /**
   * Grants permission to create a table in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateTable.html
   */
  CreateTable = 'timestream:CreateTable',
  /**
   * Grants permission to delete a database in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteDatabase.html
   */
  DeleteDatabase = 'timestream:DeleteDatabase',
  /**
   * Grants permission to delete a scheduled query in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteScheduledQuery.html
   */
  DeleteScheduledQuery = 'timestream:DeleteScheduledQuery',
  /**
   * Grants permission to delete a table in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteTable.html
   */
  DeleteTable = 'timestream:DeleteTable',
  /**
   * Grants permission to describe your account settings
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_DescribeAccountSettings.html
   */
  DescribeAccountSettings = 'timestream:DescribeAccountSettings',
  /**
   * Grants permission to describe a batch load task in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeBatchLoadTask.html
   */
  DescribeBatchLoadTask = 'timestream:DescribeBatchLoadTask',
  /**
   * Grants permission to describe a database in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeDatabase.html
   */
  DescribeDatabase = 'timestream:DescribeDatabase',
  /**
   * Grants permission to describe timestream endpoints
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeEndpoints.html
   */
  DescribeEndpoints = 'timestream:DescribeEndpoints',
  /**
   * Grants permission to describe a scheduled query in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeScheduledQuery.html
   */
  DescribeScheduledQuery = 'timestream:DescribeScheduledQuery',
  /**
   * Grants permission to describe a table in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeTable.html
   */
  DescribeTable = 'timestream:DescribeTable',
  /**
   * Grants permission to execute a scheduled query in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ExecuteScheduledQuery.html
   */
  ExecuteScheduledQuery = 'timestream:ExecuteScheduledQuery',
  /**
   * Grants permission to get Status of a Timestream Table Backup
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/backups.html
   */
  GetAwsBackupStatus = 'timestream:GetAwsBackupStatus',
  /**
   * Grants permission to get Status of a Timestream Table Restore
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/backups.html
   */
  GetAwsRestoreStatus = 'timestream:GetAwsRestoreStatus',
  /**
   * Grants permission to list batch load tasks in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListBatchLoadTasks.html
   */
  ListBatchLoadTasks = 'timestream:ListBatchLoadTasks',
  /**
   * Grants permission to list databases in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListDatabases.html
   */
  ListDatabases = 'timestream:ListDatabases',
  /**
   * Grants permission to list measures of a table in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html
   */
  ListMeasures = 'timestream:ListMeasures',
  /**
   * Grants permission to list scheduled queries in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListScheduledQueries.html
   */
  ListScheduledQueries = 'timestream:ListScheduledQueries',
  /**
   * Grants permission to list tables in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListTables.html
   */
  ListTables = 'timestream:ListTables',
  /**
   * Grants permission to list tags of a resource in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListTagsForResource.html
   */
  ListTagsForResource = 'timestream:ListTagsForResource',
  /**
   * Grants permission to issue prepare queries
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_PrepareQuery.html
   */
  PrepareQuery = 'timestream:PrepareQuery',
  /**
   * Grants permission to resume a batch load task in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_ResumeBatchLoadTask.html
   */
  ResumeBatchLoadTask = 'timestream:ResumeBatchLoadTask',
  /**
   * Grants permission to issue 'select from table' queries
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html
   */
  Select = 'timestream:Select',
  /**
   * Grants permission to issue 'select 1' queries
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html
   */
  SelectValues = 'timestream:SelectValues',
  /**
   * Grants permission to start a Backup Job for a Timestream Table
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/backups.html
   */
  StartAwsBackupJob = 'timestream:StartAwsBackupJob',
  /**
   * Grants permission to start Restore Job for a Backup of Timestream Table
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/backups.html
   */
  StartAwsRestoreJob = 'timestream:StartAwsRestoreJob',
  /**
   * Grants permission to add tags to a resource
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_TagResource.html
   */
  TagResource = 'timestream:TagResource',
  /**
   * Grants permission to issue Unload queries
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html
   */
  Unload = 'timestream:Unload',
  /**
   * Grants permission to remove a tag from a resource
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_UntagResource.html
   */
  UntagResource = 'timestream:UntagResource',
  /**
   * Grants permission to update your account settings
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_UpdateAccountSettings.html
   */
  UpdateAccountSettings = 'timestream:UpdateAccountSettings',
  /**
   * Grants permission to update a database in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateDatabase.html
   */
  UpdateDatabase = 'timestream:UpdateDatabase',
  /**
   * Grants permission to update a scheduled query in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateScheduledQuery.html
   */
  UpdateScheduledQuery = 'timestream:UpdateScheduledQuery',
  /**
   * Grants permission to update a table in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateTable.html
   */
  UpdateTable = 'timestream:UpdateTable',
  /**
   * Grants permission to ingest data to a table in your account
   *
   * See https://docs.aws.amazon.com/timestream/latest/developerguide/API_WriteRecords.html
   */
  WriteRecords = 'timestream:WriteRecords',
}
