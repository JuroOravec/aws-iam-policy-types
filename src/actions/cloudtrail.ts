// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS CloudTrail (CLOUDTRAIL)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtrail.html
 *
 * 2025-02-24T21:47:05.572Z
 */
export enum AwsCloudtrailActions {
  /**
   * Grants permission to add one or more tags to a trail, event data store, channel
   * or dashboard, up to a limit of 50
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AddTags.html
   */
  AddTags = 'cloudtrail:AddTags',
  /**
   * Grants permission to cancel a running query
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CancelQuery.html
   */
  CancelQuery = 'cloudtrail:CancelQuery',
  /**
   * Grants permission to create a channel
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateChannel.html
   */
  CreateChannel = 'cloudtrail:CreateChannel',
  /**
   * Grants permission to create a dashboard
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateDashboard.html
   */
  CreateDashboard = 'cloudtrail:CreateDashboard',
  /**
   * Grants permission to create an event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateEventDataStore.html
   */
  CreateEventDataStore = 'cloudtrail:CreateEventDataStore',
  /**
   * Grants permission to create a service-linked channel that specifies the setting
   * s for delivery of log data to an AWS service
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/userguide/viewing-service-linked-channels.html#slc-service-events
   */
  CreateServiceLinkedChannel = 'cloudtrail:CreateServiceLinkedChannel',
  /**
   * Grants permission to create a trail that specifies the settings for delivery of
   * log data to an Amazon S3 bucket
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateTrail.html
   */
  CreateTrail = 'cloudtrail:CreateTrail',
  /**
   * Grants permission to delete a channel
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteChannel.html
   */
  DeleteChannel = 'cloudtrail:DeleteChannel',
  /**
   * Grants permission to delete a dashboard
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteDashboard.html
   */
  DeleteDashboard = 'cloudtrail:DeleteDashboard',
  /**
   * Grants permission to delete an event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteEventDataStore.html
   */
  DeleteEventDataStore = 'cloudtrail:DeleteEventDataStore',
  /**
   * Grants permission to delete a resource policy from the provided resource
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteResourcePolicy.html
   */
  DeleteResourcePolicy = 'cloudtrail:DeleteResourcePolicy',
  /**
   * Grants permission to delete a service-linked channel
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/userguide/viewing-service-linked-channels.html#slc-service-events
   */
  DeleteServiceLinkedChannel = 'cloudtrail:DeleteServiceLinkedChannel',
  /**
   * Grants permission to delete a trail
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteTrail.html
   */
  DeleteTrail = 'cloudtrail:DeleteTrail',
  /**
   * Grants permission to deregister an AWS Organizations member account as a delega
   * ted administrator
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeregisterOrganizationDelegatedAdmin.html
   */
  DeregisterOrganizationDelegatedAdmin = 'cloudtrail:DeregisterOrganizationDelegatedAdmin',
  /**
   * Grants permission to list details for the query
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeQuery.html
   */
  DescribeQuery = 'cloudtrail:DescribeQuery',
  /**
   * Grants permission to list settings for the trails associated with the current r
   * egion for your account
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeTrails.html
   */
  DescribeTrails = 'cloudtrail:DescribeTrails',
  /**
   * Grants permission to disable federation of event data store data by using the A
   * WS Glue Data Catalog
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DisableFederation.html
   */
  DisableFederation = 'cloudtrail:DisableFederation',
  /**
   * Grants permission to enable federation of event data store data by using the AW
   * S Glue Data Catalog
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_EnableFederation.html
   */
  EnableFederation = 'cloudtrail:EnableFederation',
  /**
   * Grants permission to generate a query for a specified event data store using th
   * e CloudTrail Lake query generator
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-query-generator.html
   */
  GenerateQuery = 'cloudtrail:GenerateQuery',
  /**
   * Grants permission to generate a results summary for specified queries using the
   * CloudTrail natural language generator
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-results-summary.html
   */
  GenerateQueryResultsSummary = 'cloudtrail:GenerateQueryResultsSummary',
  /**
   * Grants permission to return information about a specific channel
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetChannel.html
   */
  GetChannel = 'cloudtrail:GetChannel',
  /**
   * Grants permission to list settings for the dashboard
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetDashboard.html
   */
  GetDashboard = 'cloudtrail:GetDashboard',
  /**
   * Grants permission to list settings for the event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventDataStore.html
   */
  GetEventDataStore = 'cloudtrail:GetEventDataStore',
  /**
   * Grants permission to get data from an event data store by using the AWS Glue Da
   * ta Catalog
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html#query-federation-permissions
   */
  GetEventDataStoreData = 'cloudtrail:GetEventDataStoreData',
  /**
   * Grants permission to list settings for event selectors configured for a trail
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventSelectors.html
   */
  GetEventSelectors = 'cloudtrail:GetEventSelectors',
  /**
   * Grants permission to return information about a specific import
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetImport.html
   */
  GetImport = 'cloudtrail:GetImport',
  /**
   * Grants permission to list CloudTrail Insights selectors that are configured for
   * a trail or event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetInsightSelectors.html
   */
  GetInsightSelectors = 'cloudtrail:GetInsightSelectors',
  /**
   * Grants permission to fetch results of a complete query
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetQueryResults.html
   */
  GetQueryResults = 'cloudtrail:GetQueryResults',
  /**
   * Grants permission to get the resource policy attached to the provided resource
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetResourcePolicy.html
   */
  GetResourcePolicy = 'cloudtrail:GetResourcePolicy',
  /**
   * Grants permission to list settings for the service-linked channel
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/userguide/viewing-service-linked-channels.html#slc-service-events
   */
  GetServiceLinkedChannel = 'cloudtrail:GetServiceLinkedChannel',
  /**
   * Grants permission to list settings for the trail
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrail.html
   */
  GetTrail = 'cloudtrail:GetTrail',
  /**
   * Grants permission to retrieve a JSON-formatted list of information about the sp
   * ecified trail
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrailStatus.html
   */
  GetTrailStatus = 'cloudtrail:GetTrailStatus',
  /**
   * Grants permission to list the channels in the current account, and their source
   * names
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListChannels.html
   */
  ListChannels = 'cloudtrail:ListChannels',
  /**
   * Grants permission to list dashboards associated with the current region for you
   * r account
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListDashboards.html
   */
  ListDashboards = 'cloudtrail:ListDashboards',
  /**
   * Grants permission to list event data stores associated with the current region
   * for your account
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListEventDataStores.html
   */
  ListEventDataStores = 'cloudtrail:ListEventDataStores',
  /**
   * Grants permission to return a list of failures for the specified import
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListImportFailures.html
   */
  ListImportFailures = 'cloudtrail:ListImportFailures',
  /**
   * Grants permission to return information on all imports, or a select set of impo
   * rts by ImportStatus or Destination
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListImports.html
   */
  ListImports = 'cloudtrail:ListImports',
  /**
   * Grants permission to list the public keys whose private keys were used to sign
   * trail digest files within a specified time range
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListPublicKeys.html
   */
  ListPublicKeys = 'cloudtrail:ListPublicKeys',
  /**
   * Grants permission to list queries associated with an event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListQueries.html
   */
  ListQueries = 'cloudtrail:ListQueries',
  /**
   * Grants permission to list service-linked channels associated with the current r
   * egion for a specified account
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/userguide/viewing-service-linked-channels.html#slc-service-events
   */
  ListServiceLinkedChannels = 'cloudtrail:ListServiceLinkedChannels',
  /**
   * Grants permission to list the tags for trails, event data stores, channels or d
   * ashboards in the current region
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTags.html
   */
  ListTags = 'cloudtrail:ListTags',
  /**
   * Grants permission to list trails associated with the current region for your ac
   * count
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTrails.html
   */
  ListTrails = 'cloudtrail:ListTrails',
  /**
   * Grants permission to look up and retrieve metric data for API activity events c
   * aptured by CloudTrail that create, update, or delete resources in your account
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html
   */
  LookupEvents = 'cloudtrail:LookupEvents',
  /**
   * Grants permission to create and update event selectors for a trail
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutEventSelectors.html
   */
  PutEventSelectors = 'cloudtrail:PutEventSelectors',
  /**
   * Grants permission to create and update CloudTrail Insights selectors for a trai
   * l or event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutInsightSelectors.html
   */
  PutInsightSelectors = 'cloudtrail:PutInsightSelectors',
  /**
   * Grants permission to attach a resource policy to the provided resource
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutResourcePolicy.html
   */
  PutResourcePolicy = 'cloudtrail:PutResourcePolicy',
  /**
   * Grants permission to register an AWS Organizations member account as a delegate
   * d administrator
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RegisterOrganizationDelegatedAdmin.html
   */
  RegisterOrganizationDelegatedAdmin = 'cloudtrail:RegisterOrganizationDelegatedAdmin',
  /**
   * Grants permission to remove tags from a trail, event data store, channel or das
   * hboard
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RemoveTags.html
   */
  RemoveTags = 'cloudtrail:RemoveTags',
  /**
   * Grants permission to restore an event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RestoreEventDataStore.html
   */
  RestoreEventDataStore = 'cloudtrail:RestoreEventDataStore',
  /**
   * Grants permission to perform semantic search for CloudTrail Lake sample queries
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-console-queries.html
   */
  SearchSampleQueries = 'cloudtrail:SearchSampleQueries',
  /**
   * Grants permission to start a refresh on the specified dashboard
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartDashboardRefresh.html
   */
  StartDashboardRefresh = 'cloudtrail:StartDashboardRefresh',
  /**
   * Grants permission to start ingestion on an event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartEventDataStoreIngestion.html
   */
  StartEventDataStoreIngestion = 'cloudtrail:StartEventDataStoreIngestion',
  /**
   * Grants permission to start an import of logged trail events from a source S3 bu
   * cket to a destination event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartImport.html
   */
  StartImport = 'cloudtrail:StartImport',
  /**
   * Grants permission to start the recording of AWS API calls and log file delivery
   * for a trail
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartLogging.html
   */
  StartLogging = 'cloudtrail:StartLogging',
  /**
   * Grants permission to start a new query on a specified event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartQuery.html
   */
  StartQuery = 'cloudtrail:StartQuery',
  /**
   * Grants permission to stop ingestion on an event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopEventDataStoreIngestion.html
   */
  StopEventDataStoreIngestion = 'cloudtrail:StopEventDataStoreIngestion',
  /**
   * Grants permission to stop a specified import
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopImport.html
   */
  StopImport = 'cloudtrail:StopImport',
  /**
   * Grants permission to stop the recording of AWS API calls and log file delivery
   * for a trail
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopLogging.html
   */
  StopLogging = 'cloudtrail:StopLogging',
  /**
   * Grants permission to update a channel
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateChannel.html
   */
  UpdateChannel = 'cloudtrail:UpdateChannel',
  /**
   * Grants permission to update a dashboard
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateDashboard.html
   */
  UpdateDashboard = 'cloudtrail:UpdateDashboard',
  /**
   * Grants permission to update an event data store
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateEventDataStore.html
   */
  UpdateEventDataStore = 'cloudtrail:UpdateEventDataStore',
  /**
   * Grants permission to update the service-linked channel settings for delivery of
   * log data to an AWS service
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/userguide/viewing-service-linked-channels.html#slc-service-events
   */
  UpdateServiceLinkedChannel = 'cloudtrail:UpdateServiceLinkedChannel',
  /**
   * Grants permission to update the settings that specify delivery of log files
   *
   * See https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateTrail.html
   */
  UpdateTrail = 'cloudtrail:UpdateTrail',
}
