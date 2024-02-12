// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Database Query Metadata Service (DBQMS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_databasequerymetadataservice.html
 *
 * 2024-02-12T09:56:53.479Z
 */
export enum AwsDbqmsActions {
  /**
   * Grants permission to create a new favorite query
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateFavoriteQuery
   */
  CreateFavoriteQuery = 'dbqms:CreateFavoriteQuery',
  /**
   * Grants permission to create a new query tab
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateTab
   */
  CreateTab = 'dbqms:CreateTab',
  /**
   * Grants permission to delete saved queries
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteFavoriteQueries
   */
  DeleteFavoriteQueries = 'dbqms:DeleteFavoriteQueries',
  /**
   * Grants permission to delete a historical query
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteQueryHistory
   */
  DeleteQueryHistory = 'dbqms:DeleteQueryHistory',
  /**
   * Grants permission to delete query tab
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteTab
   */
  DeleteTab = 'dbqms:DeleteTab',
  /**
   * Grants permission to list saved queries and associated metadata
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeFavoriteQueries
   */
  DescribeFavoriteQueries = 'dbqms:DescribeFavoriteQueries',
  /**
   * Grants permission to list history of queries that were run
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeQueryHistory
   */
  DescribeQueryHistory = 'dbqms:DescribeQueryHistory',
  /**
   * Grants permission to list query tabs and associated metadata
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeTabs
   */
  DescribeTabs = 'dbqms:DescribeTabs',
  /**
   * Grants permission to retrieve favorite or history query string by id
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#GetQueryString
   */
  GetQueryString = 'dbqms:GetQueryString',
  /**
   * Grants permission to update saved query and description
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateFavoriteQuery
   */
  UpdateFavoriteQuery = 'dbqms:UpdateFavoriteQuery',
  /**
   * Grants permission to update the query history
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateQueryHistory
   */
  UpdateQueryHistory = 'dbqms:UpdateQueryHistory',
  /**
   * Grants permission to update query tab
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateTab
   */
  UpdateTab = 'dbqms:UpdateTab',
}
