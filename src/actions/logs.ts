// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon CloudWatch Logs (LOGS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchlogs.html
 *
 * 2024-02-12T09:56:29.255Z
 */
export enum AwsLogsActions {
  /**
   * Grants permission to associate the specified AWS Key Management Service (AWS KM
   * S) customer master key (CMK) with the specified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html
   */
  AssociateKmsKey = 'logs:AssociateKmsKey',
  /**
   * Grants permission to cancel an export task if it is in PENDING or RUNNING state
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html
   */
  CancelExportTask = 'logs:CancelExportTask',
  /**
   * Grants permission to create a delivery connecting a delivery source to a delive
   * ry destination
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html
   */
  CreateDelivery = 'logs:CreateDelivery',
  /**
   * Grants permission to create an ExportTask which allows you to efficiently expor
   * t data from a Log Group to your Amazon S3 bucket
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html
   */
  CreateExportTask = 'logs:CreateExportTask',
  /**
   * Grants permission to create a log anomaly detector
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogAnomalyDetector.html
   */
  CreateLogAnomalyDetector = 'logs:CreateLogAnomalyDetector',
  /**
   * Grants permission to create the log delivery
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  CreateLogDelivery = 'logs:CreateLogDelivery',
  /**
   * Grants permission to create a new log group with the specified name
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html
   */
  CreateLogGroup = 'logs:CreateLogGroup',
  /**
   * Grants permission to create a new log stream with the specified name
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html
   */
  CreateLogStream = 'logs:CreateLogStream',
  /**
   * Grants permission to delete a data protection policy attached to an account
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDataProtectionPolicy.html
   */
  DeleteAccountPolicy = 'logs:DeleteAccountPolicy',
  /**
   * Grants permission to delete a data protection policy attached to a log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDataProtectionPolicy.html
   */
  DeleteDataProtectionPolicy = 'logs:DeleteDataProtectionPolicy',
  /**
   * Grants permission to delete a delivery
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDelivery.html
   */
  DeleteDelivery = 'logs:DeleteDelivery',
  /**
   * Grants permission to delete a delivery destination after all associated deliver
   * ies are deleted
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliveryDestination.html
   */
  DeleteDeliveryDestination = 'logs:DeleteDeliveryDestination',
  /**
   * Grants permission to delete a delivery destination policy associated with a del
   * ivery destination
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliveryDestinationPolicy.html
   */
  DeleteDeliveryDestinationPolicy = 'logs:DeleteDeliveryDestinationPolicy',
  /**
   * Grants permission to delete a delivery source after all associated deliveries a
   * re deleted
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliverySource.html
   */
  DeleteDeliverySource = 'logs:DeleteDeliverySource',
  /**
   * Grants permission to delete the destination with the specified name
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html
   */
  DeleteDestination = 'logs:DeleteDestination',
  /**
   * Grants permission to delete a log anomaly detector
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogAnomalyDetector.html
   */
  DeleteLogAnomalyDetector = 'logs:DeleteLogAnomalyDetector',
  /**
   * Grants permission to delete the log delivery information for specified log deli
   * very
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  DeleteLogDelivery = 'logs:DeleteLogDelivery',
  /**
   * Grants permission to delete the log group with the specified name
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html
   */
  DeleteLogGroup = 'logs:DeleteLogGroup',
  /**
   * Grants permission to delete a log stream
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html
   */
  DeleteLogStream = 'logs:DeleteLogStream',
  /**
   * Grants permission to delete a metric filter associated with the specified log g
   * roup
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html
   */
  DeleteMetricFilter = 'logs:DeleteMetricFilter',
  /**
   * Grants permission to delete a saved CloudWatch Logs Insights query definition
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteQueryDefinition.html
   */
  DeleteQueryDefinition = 'logs:DeleteQueryDefinition',
  /**
   * Grants permission to delete a resource policy from this account
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html
   */
  DeleteResourcePolicy = 'logs:DeleteResourcePolicy',
  /**
   * Grants permission to delete the retention policy of the specified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html
   */
  DeleteRetentionPolicy = 'logs:DeleteRetentionPolicy',
  /**
   * Grants permission to delete a subscription filter associated with the specified
   * log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html
   */
  DeleteSubscriptionFilter = 'logs:DeleteSubscriptionFilter',
  /**
   * Grants permission to retrieve a data protection policy attached to an account
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeAccountPolicies.html
   */
  DescribeAccountPolicies = 'logs:DescribeAccountPolicies',
  /**
   * Grants permission to retrieve a list of deliveries an account
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html
   */
  DescribeDeliveries = 'logs:DescribeDeliveries',
  /**
   * Grants permission to retrieve a list of delivery destinations an account
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveryDestinations.html
   */
  DescribeDeliveryDestinations = 'logs:DescribeDeliveryDestinations',
  /**
   * Grants permission to retrieve a list of delivery sources in an account
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliverySources.html
   */
  DescribeDeliverySources = 'logs:DescribeDeliverySources',
  /**
   * Grants permission to return all the destinations that are associated with the A
   * WS account making the request
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html
   */
  DescribeDestinations = 'logs:DescribeDestinations',
  /**
   * Grants permission to return all the export tasks that are associated with the A
   * WS account making the request
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html
   */
  DescribeExportTasks = 'logs:DescribeExportTasks',
  /**
   * Grants permission to return all the log groups that are associated with the AWS
   * account making the request
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html
   */
  DescribeLogGroups = 'logs:DescribeLogGroups',
  /**
   * Grants permission to return all the log streams that are associated with the sp
   * ecified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html
   */
  DescribeLogStreams = 'logs:DescribeLogStreams',
  /**
   * Grants permission to return all the metrics filters associated with the specifi
   * ed log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html
   */
  DescribeMetricFilters = 'logs:DescribeMetricFilters',
  /**
   * Grants permission to return a list of CloudWatch Logs Insights queries that are
   * scheduled, executing, or have been executed recently in this account
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html
   */
  DescribeQueries = 'logs:DescribeQueries',
  /**
   * Grants permission to return a paginated list of your saved CloudWatch Logs Insi
   * ghts query definitions
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html
   */
  DescribeQueryDefinitions = 'logs:DescribeQueryDefinitions',
  /**
   * Grants permission to return all the resource policies in this account
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html
   */
  DescribeResourcePolicies = 'logs:DescribeResourcePolicies',
  /**
   * Grants permission to return all the subscription filters associated with the sp
   * ecified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html
   */
  DescribeSubscriptionFilters = 'logs:DescribeSubscriptionFilters',
  /**
   * Grants permission to disassociate the associated AWS Key Management Service (AW
   * S KMS) customer master key (CMK) from the specified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html
   */
  DisassociateKmsKey = 'logs:DisassociateKmsKey',
  /**
   * Grants permission to retrieve log events, optionally filtered by a filter patte
   * rn from the specified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html
   */
  FilterLogEvents = 'logs:FilterLogEvents',
  /**
   * Grants permission to retrieve a data protection policy attached to a log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDataProtectionPolicy.html
   */
  GetDataProtectionPolicy = 'logs:GetDataProtectionPolicy',
  /**
   * Grants permission to retrieve a single delivery
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDelivery.html
   */
  GetDelivery = 'logs:GetDelivery',
  /**
   * Grants permission to retrieve a single delivery destination
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliveryDestination.html
   */
  GetDeliveryDestination = 'logs:GetDeliveryDestination',
  /**
   * Grants permission to retrieve a delivery destination policy attached to a deliv
   * ery destination
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliveryDestinationPolicy.html
   */
  GetDeliveryDestinationPolicy = 'logs:GetDeliveryDestinationPolicy',
  /**
   * Grants permission to retrieve a single delivery source
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliverySource.html
   */
  GetDeliverySource = 'logs:GetDeliverySource',
  /**
   * Grants permission to get a log anomaly detector
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogAnomalyDetector.html
   */
  GetLogAnomalyDetector = 'logs:GetLogAnomalyDetector',
  /**
   * Grants permission to get the log delivery information for specified log deliver
   * y
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  GetLogDelivery = 'logs:GetLogDelivery',
  /**
   * Grants permission to retrieve log events from the specified log stream
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html
   */
  GetLogEvents = 'logs:GetLogEvents',
  /**
   * Grants permission to return a list of the fields that are included in log event
   * s in the specified log group, along with the percentage of log events that cont
   * ain each field
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html
   */
  GetLogGroupFields = 'logs:GetLogGroupFields',
  /**
   * Grants permission to retrieve all the fields and values of a single log event
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html
   */
  GetLogRecord = 'logs:GetLogRecord',
  /**
   * Grants permission to return the results from the specified query
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html
   */
  GetQueryResults = 'logs:GetQueryResults',
  /**
   * Grants permission to share CloudWatch resources with a monitoring account
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account-Setup.html#CloudWatch-Unified-Cross-Account-Setup-permissions
   */
  Link = 'logs:Link',
  /**
   * Grants permission to list all anomalies detected in the AWS account making the
   * request
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html
   */
  ListAnomalies = 'logs:ListAnomalies',
  /**
   * Grants permission to return all the anomaly detectors that are associated with
   * the AWS account making the request
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListLogAnomalyDetectors.html
   */
  ListLogAnomalyDetectors = 'logs:ListLogAnomalyDetectors',
  /**
   * Grants permission to list all the log deliveries for specified account and/or l
   * og source
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  ListLogDeliveries = 'logs:ListLogDeliveries',
  /**
   * Grants permission to list the tags for the specified resource
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'logs:ListTagsForResource',
  /**
   * Grants permission to list the tags for the specified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html
   */
  ListTagsLogGroup = 'logs:ListTagsLogGroup',
  /**
   * Grants permission to attach a data protection policy at account level to detect
   * and redact sensitive information from log events
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html
   */
  PutAccountPolicy = 'logs:PutAccountPolicy',
  /**
   * Grants permission to attach a data protection policy to detect and redact sensi
   * tive information from log events
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html
   */
  PutDataProtectionPolicy = 'logs:PutDataProtectionPolicy',
  /**
   * Grants permission to create/update a delivery destination
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html
   */
  PutDeliveryDestination = 'logs:PutDeliveryDestination',
  /**
   * Grants permission to attach a delivery destination policy to a delivery destina
   * tion
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html
   */
  PutDeliveryDestinationPolicy = 'logs:PutDeliveryDestinationPolicy',
  /**
   * Grants permission to create/update a delivery source
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html
   */
  PutDeliverySource = 'logs:PutDeliverySource',
  /**
   * Grants permission to create or update a Destination
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html
   */
  PutDestination = 'logs:PutDestination',
  /**
   * Grants permission to create or update an access policy associated with an exist
   * ing Destination
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html
   */
  PutDestinationPolicy = 'logs:PutDestinationPolicy',
  /**
   * Grants permission to upload a batch of log events to the specified log stream
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html
   */
  PutLogEvents = 'logs:PutLogEvents',
  /**
   * Grants permission to create or update a metric filter and associates it with th
   * e specified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html
   */
  PutMetricFilter = 'logs:PutMetricFilter',
  /**
   * Grants permission to create or update a query definition
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutQueryDefinition.html
   */
  PutQueryDefinition = 'logs:PutQueryDefinition',
  /**
   * Grants permission to create or update a resource policy allowing other AWS serv
   * ices to put log events to this account
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html
   */
  PutResourcePolicy = 'logs:PutResourcePolicy',
  /**
   * Grants permission to set the retention of the specified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html
   */
  PutRetentionPolicy = 'logs:PutRetentionPolicy',
  /**
   * Grants permission to create or update a subscription filter and associates it w
   * ith the specified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html
   */
  PutSubscriptionFilter = 'logs:PutSubscriptionFilter',
  /**
   * Grants permission to start a Live Tail session in CloudWatch Logs
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartLiveTail.html
   */
  StartLiveTail = 'logs:StartLiveTail',
  /**
   * Grants permission to schedule a query of a log group using CloudWatch Logs Insi
   * ghts
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html
   */
  StartQuery = 'logs:StartQuery',
  /**
   * Grants permission to stop a Live Tail session that is in progress
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs_LiveTail.html
   */
  StopLiveTail = 'logs:StopLiveTail',
  /**
   * Grants permission to stop a CloudWatch Logs Insights query that is in progress
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html
   */
  StopQuery = 'logs:StopQuery',
  /**
   * Grants permission to add or update the specified tags for the specified log gro
   * up
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html
   */
  TagLogGroup = 'logs:TagLogGroup',
  /**
   * Grants permission to add or update the specified tags for the specified resourc
   * e
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html
   */
  TagResource = 'logs:TagResource',
  /**
   * Grants permission to test the filter pattern of a metric filter against a sampl
   * e of log event messages
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html
   */
  TestMetricFilter = 'logs:TestMetricFilter',
  /**
   * Grants permission to fetch unmasked log events that have been redacted with a d
   * ata protection policy
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html
   */
  Unmask = 'logs:Unmask',
  /**
   * Grants permission to remove the specified tags from the specified log group
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html
   */
  UntagLogGroup = 'logs:UntagLogGroup',
  /**
   * Grants permission to remove the specified tags from the specified resource
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'logs:UntagResource',
  /**
   * Grants permission to update an anomaly reported by a log anomaly detector
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateAnomaly.html
   */
  UpdateAnomaly = 'logs:UpdateAnomaly',
  /**
   * Grants permission to update a log anomaly detector
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateLogAnomalyDetector.html
   */
  UpdateLogAnomalyDetector = 'logs:UpdateLogAnomalyDetector',
  /**
   * Grants permission to update the log delivery information for specified log deli
   * very
   *
   * See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  UpdateLogDelivery = 'logs:UpdateLogDelivery',
}