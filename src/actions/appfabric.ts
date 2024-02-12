// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS AppFabric (APPFABRIC)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappfabric.html
 *
 * 2024-02-12T09:55:59.803Z
 */
export enum AwsAppfabricActions {
  /**
   * Grants permission to start user access tasks for multiple users
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_BatchGetUserAccessTasks.html
   */
  BatchGetUserAccessTasks = 'appfabric:BatchGetUserAccessTasks',
  /**
   * Grants permission to connect app authorizations
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_ConnectAppAuthorization.html
   */
  ConnectAppAuthorization = 'appfabric:ConnectAppAuthorization',
  /**
   * Grants permission to create app authorizations for app bundles
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_CreateAppAuthorization.html
   */
  CreateAppAuthorization = 'appfabric:CreateAppAuthorization',
  /**
   * Grants permission to create app bundles in your account
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_CreateAppBundle.html
   */
  CreateAppBundle = 'appfabric:CreateAppBundle',
  /**
   * Grants permission to create ingestions for app bundles
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_CreateIngestion.html
   */
  CreateIngestion = 'appfabric:CreateIngestion',
  /**
   * Grants permission to create ingestion destinations for app bundles
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_CreateIngestionDestination.html
   */
  CreateIngestionDestination = 'appfabric:CreateIngestionDestination',
  /**
   * Grants permission to delete app authorizations within an app bundle
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteAppAuthorization.html
   */
  DeleteAppAuthorization = 'appfabric:DeleteAppAuthorization',
  /**
   * Grants permission to delete app bundles in your account
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteAppBundle.html
   */
  DeleteAppBundle = 'appfabric:DeleteAppBundle',
  /**
   * Grants permission to delete ingestions within an app bundle
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteIngestion.html
   */
  DeleteIngestion = 'appfabric:DeleteIngestion',
  /**
   * Grants permission to delete destinations within an ingestion
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteIngestionDestination.html
   */
  DeleteIngestionDestination = 'appfabric:DeleteIngestionDestination',
  /**
   * Grants permission to view details about app authorizations
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_GetAppAuthorization.html
   */
  GetAppAuthorization = 'appfabric:GetAppAuthorization',
  /**
   * Grants permission to view details about app bundles
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_GetAppBundle.html
   */
  GetAppBundle = 'appfabric:GetAppBundle',
  /**
   * Grants permission to view details about ingestions
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_GetIngestion.html
   */
  GetIngestion = 'appfabric:GetIngestion',
  /**
   * Grants permission to view details about ingestion destinations
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_GetIngestionDestination.html
   */
  GetIngestionDestination = 'appfabric:GetIngestionDestination',
  /**
   * Grants permission to retrieve a list of app authorizations within an app bundle
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_ListAppAuthorizations.html
   */
  ListAppAuthorizations = 'appfabric:ListAppAuthorizations',
  /**
   * Grants permission to retrieve a list of app bundles in your account
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_ListAppBundles.html
   */
  ListAppBundles = 'appfabric:ListAppBundles',
  /**
   * Grants permission to retrieve a list of destinations within an ingestion
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_ListIngestionDestinations.html
   */
  ListIngestionDestinations = 'appfabric:ListIngestionDestinations',
  /**
   * Grants permission to retrieve a list of ingestions within an app bundle
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_ListIngestions.html
   */
  ListIngestions = 'appfabric:ListIngestions',
  /**
   * Grants permission to list tags for AppFabric resources
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_ListTagsForResource.html
   */
  ListTagsForResource = 'appfabric:ListTagsForResource',
  /**
   * Grants permission to start ingestions
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_StartIngestion.html
   */
  StartIngestion = 'appfabric:StartIngestion',
  /**
   * Grants permission to start user access tasks
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_StartUserAccessTasks.html
   */
  StartUserAccessTasks = 'appfabric:StartUserAccessTasks',
  /**
   * Grants permission to stop ingestions
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_StopIngestion.html
   */
  StopIngestion = 'appfabric:StopIngestion',
  /**
   * Grants permission to tag AppFabric resources
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_TagResource.html
   */
  TagResource = 'appfabric:TagResource',
  /**
   * Grants permission to untag AppFabric resources
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_UntagResource.html
   */
  UntagResource = 'appfabric:UntagResource',
  /**
   * Grants permission to update app authorizations within app bundles
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_UpdateAppAuthorization.html
   */
  UpdateAppAuthorization = 'appfabric:UpdateAppAuthorization',
  /**
   * Grants permission to update destinations within ingestions
   *
   * See https://docs.aws.amazon.com/appfabric/latest/api/API_UpdateIngestionDestination.html
   */
  UpdateIngestionDestination = 'appfabric:UpdateIngestionDestination',
}