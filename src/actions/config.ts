// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Config (CONFIG)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconfig.html
 *
 * 2024-02-12T09:56:44.056Z
 */
export enum AwsConfigActions {
  /**
   * Grants permission to return the current configuration items for resources that
   * are present in your AWS Config aggregator
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetAggregateResourceConfig.html
   */
  BatchGetAggregateResourceConfig = 'config:BatchGetAggregateResourceConfig',
  /**
   * Grants permission to return the current configuration for one or more requested
   * resources
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetResourceConfig.html
   */
  BatchGetResourceConfig = 'config:BatchGetResourceConfig',
  /**
   * Grants permission to delete the authorization granted to the specified configur
   * ation aggregator account in a specified region
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteAggregationAuthorization.html
   */
  DeleteAggregationAuthorization = 'config:DeleteAggregationAuthorization',
  /**
   * Grants permission to delete the specified AWS Config rule and all of its evalua
   * tion results
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigRule.html
   */
  DeleteConfigRule = 'config:DeleteConfigRule',
  /**
   * Grants permission to delete the specified configuration aggregator and the aggr
   * egated data associated with the aggregator
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationAggregator.html
   */
  DeleteConfigurationAggregator = 'config:DeleteConfigurationAggregator',
  /**
   * Grants permission to delete the configuration recorder
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html
   */
  DeleteConfigurationRecorder = 'config:DeleteConfigurationRecorder',
  /**
   * Grants permission to delete the specified conformance pack and all the AWS Conf
   * ig rules and all evaluation results within that conformance pack
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConformancePack.html
   */
  DeleteConformancePack = 'config:DeleteConformancePack',
  /**
   * Grants permission to delete the delivery channel
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html
   */
  DeleteDeliveryChannel = 'config:DeleteDeliveryChannel',
  /**
   * Grants permission to delete the evaluation results for the specified Config rul
   * e
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteEvaluationResults.html
   */
  DeleteEvaluationResults = 'config:DeleteEvaluationResults',
  /**
   * Grants permission to delete the specified organization config rule and all of i
   * ts evaluation results from all member accounts in that organization
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConfigRule.html
   */
  DeleteOrganizationConfigRule = 'config:DeleteOrganizationConfigRule',
  /**
   * Grants permission to delete the specified organization conformance pack and all
   * of its evaluation results from all member accounts in that organization
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConformancePack.html
   */
  DeleteOrganizationConformancePack = 'config:DeleteOrganizationConformancePack',
  /**
   * Grants permission to delete pending authorization requests for a specified aggr
   * egator account in a specified region
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeletePendingAggregationRequest.html
   */
  DeletePendingAggregationRequest = 'config:DeletePendingAggregationRequest',
  /**
   * Grants permission to delete the remediation configuration
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationConfiguration.html
   */
  DeleteRemediationConfiguration = 'config:DeleteRemediationConfiguration',
  /**
   * Grants permission to delete one or more remediation exceptions for specific res
   * ource keys for a specific AWS Config Rule
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationExceptions.html
   */
  DeleteRemediationExceptions = 'config:DeleteRemediationExceptions',
  /**
   * Grants permission to record the configuration state for a custom resource that
   * has been deleted
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteResourceConfig.html
   */
  DeleteResourceConfig = 'config:DeleteResourceConfig',
  /**
   * Grants permission to delete the retention configuration
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRetentionConfiguration.html
   */
  DeleteRetentionConfiguration = 'config:DeleteRetentionConfiguration',
  /**
   * Grants permission to delete the stored query for an AWS account in an AWS Regio
   * n
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteStoredQuery.html
   */
  DeleteStoredQuery = 'config:DeleteStoredQuery',
  /**
   * Grants permission to schedule delivery of a configuration snapshot to the Amazo
   * n S3 bucket in the specified delivery channel
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DeliverConfigSnapshot.html
   */
  DeliverConfigSnapshot = 'config:DeliverConfigSnapshot',
  /**
   * Grants permission to return a list of compliant and noncompliant rules with the
   * number of resources for compliant and noncompliant rules
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregateComplianceByConfigRules.html
   */
  DescribeAggregateComplianceByConfigRules = 'config:DescribeAggregateComplianceByConfigRules',
  /**
   * Grants permission to return a list of compliant and noncompliant conformance pa
   * cks along with count of compliant, non-compliant and total rules within each co
   * nformance pack
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregateComplianceByConformancePacks.html
   */
  DescribeAggregateComplianceByConformancePacks = 'config:DescribeAggregateComplianceByConformancePacks',
  /**
   * Grants permission to return a list of authorizations granted to various aggrega
   * tor accounts and regions
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregationAuthorizations.html
   */
  DescribeAggregationAuthorizations = 'config:DescribeAggregationAuthorizations',
  /**
   * Grants permission to indicate whether the specified AWS Config rules are compli
   * ant
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByConfigRule.html
   */
  DescribeComplianceByConfigRule = 'config:DescribeComplianceByConfigRule',
  /**
   * Grants permission to indicate whether the specified AWS resources are compliant
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByResource.html
   */
  DescribeComplianceByResource = 'config:DescribeComplianceByResource',
  /**
   * Grants permission to return status information for each of your AWS managed Con
   * fig rules
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRuleEvaluationStatus.html
   */
  DescribeConfigRuleEvaluationStatus = 'config:DescribeConfigRuleEvaluationStatus',
  /**
   * Grants permission to return details about your AWS Config rules
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRules.html
   */
  DescribeConfigRules = 'config:DescribeConfigRules',
  /**
   * Grants permission to return status information for sources within an aggregator
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregatorSourcesStatus.html
   */
  DescribeConfigurationAggregatorSourcesStatus = 'config:DescribeConfigurationAggregatorSourcesStatus',
  /**
   * Grants permission to return the details of one or more configuration aggregator
   * s
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregators.html
   */
  DescribeConfigurationAggregators = 'config:DescribeConfigurationAggregators',
  /**
   * Grants permission to return the current status of the specified configuration r
   * ecorder
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html
   */
  DescribeConfigurationRecorderStatus = 'config:DescribeConfigurationRecorderStatus',
  /**
   * Grants permission to return the names of one or more specified configuration re
   * corders
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html
   */
  DescribeConfigurationRecorders = 'config:DescribeConfigurationRecorders',
  /**
   * Grants permission to return compliance information for each rule in that confor
   * mance pack
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackCompliance.html
   */
  DescribeConformancePackCompliance = 'config:DescribeConformancePackCompliance',
  /**
   * Grants permission to provide one or more conformance packs deployment status
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackStatus.html
   */
  DescribeConformancePackStatus = 'config:DescribeConformancePackStatus',
  /**
   * Grants permission to return a list of one or more conformance packs
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePacks.html
   */
  DescribeConformancePacks = 'config:DescribeConformancePacks',
  /**
   * Grants permission to return the current status of the specified delivery channe
   * l
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannelStatus.html
   */
  DescribeDeliveryChannelStatus = 'config:DescribeDeliveryChannelStatus',
  /**
   * Grants permission to return details about the specified delivery channel
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannels.html
   */
  DescribeDeliveryChannels = 'config:DescribeDeliveryChannels',
  /**
   * Grants permission to provide organization config rule deployment status for an
   * organization
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRuleStatuses.html
   */
  DescribeOrganizationConfigRuleStatuses = 'config:DescribeOrganizationConfigRuleStatuses',
  /**
   * Grants permission to return a list of organization config rules
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRules.html
   */
  DescribeOrganizationConfigRules = 'config:DescribeOrganizationConfigRules',
  /**
   * Grants permission to provide organization conformance pack deployment status fo
   * r an organization
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePackStatuses.html
   */
  DescribeOrganizationConformancePackStatuses = 'config:DescribeOrganizationConformancePackStatuses',
  /**
   * Grants permission to return a list of organization conformance packs
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePacks.html
   */
  DescribeOrganizationConformancePacks = 'config:DescribeOrganizationConformancePacks',
  /**
   * Grants permission to return a list of all pending aggregation requests
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribePendingAggregationRequests.html
   */
  DescribePendingAggregationRequests = 'config:DescribePendingAggregationRequests',
  /**
   * Grants permission to return the details of one or more remediation configuratio
   * ns
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationConfigurations.html
   */
  DescribeRemediationConfigurations = 'config:DescribeRemediationConfigurations',
  /**
   * Grants permission to return the details of one or more remediation exceptions
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExceptions.html
   */
  DescribeRemediationExceptions = 'config:DescribeRemediationExceptions',
  /**
   * Grants permission to provide a detailed view of a Remediation Execution for a s
   * et of resources including state, timestamps and any error messages for steps th
   * at have failed
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExecutionStatus.html
   */
  DescribeRemediationExecutionStatus = 'config:DescribeRemediationExecutionStatus',
  /**
   * Grants permission to return the details of one or more retention configurations
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRetentionConfigurations.html
   */
  DescribeRetentionConfigurations = 'config:DescribeRetentionConfigurations',
  /**
   * Grants permission to return the evaluation results for the specified AWS Config
   * rule for a specific resource in a rule
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateComplianceDetailsByConfigRule.html
   */
  GetAggregateComplianceDetailsByConfigRule = 'config:GetAggregateComplianceDetailsByConfigRule',
  /**
   * Grants permission to return the number of compliant and noncompliant rules for
   * one or more accounts and regions in an aggregator
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateConfigRuleComplianceSummary.html
   */
  GetAggregateConfigRuleComplianceSummary = 'config:GetAggregateConfigRuleComplianceSummary',
  /**
   * Grants permission to return the number of compliant and noncompliant conformanc
   * e packs for one or more accounts and regions in an aggregator
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateConformancePackComplianceSummary.html
   */
  GetAggregateConformancePackComplianceSummary = 'config:GetAggregateConformancePackComplianceSummary',
  /**
   * Grants permission to return the resource counts across accounts and regions tha
   * t are present in your AWS Config aggregator
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateDiscoveredResourceCounts.html
   */
  GetAggregateDiscoveredResourceCounts = 'config:GetAggregateDiscoveredResourceCounts',
  /**
   * Grants permission to return configuration item that is aggregated for your spec
   * ific resource in a specific source account and region
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateResourceConfig.html
   */
  GetAggregateResourceConfig = 'config:GetAggregateResourceConfig',
  /**
   * Grants permission to return the evaluation results for the specified AWS Config
   * rule
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByConfigRule.html
   */
  GetComplianceDetailsByConfigRule = 'config:GetComplianceDetailsByConfigRule',
  /**
   * Grants permission to return the evaluation results for the specified AWS resour
   * ce
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html
   */
  GetComplianceDetailsByResource = 'config:GetComplianceDetailsByResource',
  /**
   * Grants permission to return the number of AWS Config rules that are compliant a
   * nd noncompliant, up to a maximum of 25 for each
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByConfigRule.html
   */
  GetComplianceSummaryByConfigRule = 'config:GetComplianceSummaryByConfigRule',
  /**
   * Grants permission to return the number of resources that are compliant and the
   * number that are noncompliant
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByResourceType.html
   */
  GetComplianceSummaryByResourceType = 'config:GetComplianceSummaryByResourceType',
  /**
   * Grants permission to return compliance details of a conformance pack for all AW
   * S resources that are monitered by conformance pack
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceDetails.html
   */
  GetConformancePackComplianceDetails = 'config:GetConformancePackComplianceDetails',
  /**
   * Grants permission to provide compliance summary for one or more conformance pac
   * ks
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceSummary.html
   */
  GetConformancePackComplianceSummary = 'config:GetConformancePackComplianceSummary',
  /**
   * Grants permission to return the policy definition containing the logic for your
   * AWS Config Custom Policy rule
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetCustomRulePolicy.html
   */
  GetCustomRulePolicy = 'config:GetCustomRulePolicy',
  /**
   * Grants permission to return the resource types, the number of each resource typ
   * e, and the total number of resources that AWS Config is recording in this regio
   * n for your AWS account
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetDiscoveredResourceCounts.html
   */
  GetDiscoveredResourceCounts = 'config:GetDiscoveredResourceCounts',
  /**
   * Grants permission to return detailed status for each member account within an o
   * rganization for a given organization config rule
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConfigRuleDetailedStatus.html
   */
  GetOrganizationConfigRuleDetailedStatus = 'config:GetOrganizationConfigRuleDetailedStatus',
  /**
   * Grants permission to return detailed status for each member account within an o
   * rganization for a given organization conformance pack
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConformancePackDetailedStatus.html
   */
  GetOrganizationConformancePackDetailedStatus = 'config:GetOrganizationConformancePackDetailedStatus',
  /**
   * Grants permission to return the policy definition containing the logic for your
   * organization AWS Config Custom Policy rule
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationCustomRulePolicy.html
   */
  GetOrganizationCustomRulePolicy = 'config:GetOrganizationCustomRulePolicy',
  /**
   * Grants permission to return a list of configuration items for the specified res
   * ource
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceConfigHistory.html
   */
  GetResourceConfigHistory = 'config:GetResourceConfigHistory',
  /**
   * Grants permission to return the summary of resource evaluations for a specific
   * resource evaluation ID
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html
   */
  GetResourceEvaluationSummary = 'config:GetResourceEvaluationSummary',
  /**
   * Grants permission to return the details of a specific stored query
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_GetStoredQuery.html
   */
  GetStoredQuery = 'config:GetStoredQuery',
  /**
   * Grants permission to accept a resource type and returns a list of resource iden
   * tifiers that are aggregated for a specific resource type across accounts and re
   * gions
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_ListAggregateDiscoveredResources.html
   */
  ListAggregateDiscoveredResources = 'config:ListAggregateDiscoveredResources',
  /**
   * Grants permission to return the percentage of compliant rule-resource combinati
   * ons in a conformance pack compared to the number of total possible rule-resourc
   * e combinations
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_ListConformancePackComplianceScores.html
   */
  ListConformancePackComplianceScores = 'config:ListConformancePackComplianceScores',
  /**
   * Grants permission to accept a resource type and returns a list of resource iden
   * tifiers for the resources of that type
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_ListDiscoveredResources.html
   */
  ListDiscoveredResources = 'config:ListDiscoveredResources',
  /**
   * Grants permission to list the resource evaluation summaries for an AWS account
   * in an AWS Region
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_ListResourceEvaluations.html
   */
  ListResourceEvaluations = 'config:ListResourceEvaluations',
  /**
   * Grants permission to list the stored queries for an AWS account in an AWS Regio
   * n
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_ListStoredQueries.html
   */
  ListStoredQueries = 'config:ListStoredQueries',
  /**
   * Grants permission to list the tags for AWS Config resource
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'config:ListTagsForResource',
  /**
   * Grants permission to authorize the aggregator account and region to collect dat
   * a from the source account and region
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutAggregationAuthorization.html
   */
  PutAggregationAuthorization = 'config:PutAggregationAuthorization',
  /**
   * Grants permission to add or update an AWS Config rule for evaluating whether yo
   * ur AWS resources comply with your desired configurations
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html
   */
  PutConfigRule = 'config:PutConfigRule',
  /**
   * Grants permission to create and update the configuration aggregator with the se
   * lected source accounts and regions
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationAggregator.html
   */
  PutConfigurationAggregator = 'config:PutConfigurationAggregator',
  /**
   * Grants permission to create a new configuration recorder to record the selected
   * resource configurations
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html
   */
  PutConfigurationRecorder = 'config:PutConfigurationRecorder',
  /**
   * Grants permission to create or update a conformance pack
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html
   */
  PutConformancePack = 'config:PutConformancePack',
  /**
   * Grants permission to create a delivery channel object to deliver configuration
   * information to an Amazon S3 bucket and Amazon SNS topic
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutDeliveryChannel.html
   */
  PutDeliveryChannel = 'config:PutDeliveryChannel',
  /**
   * Grants permission to be used by an AWS Lambda function to deliver evaluation re
   * sults to AWS Config
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutEvaluations.html
   */
  PutEvaluations = 'config:PutEvaluations',
  /**
   * Grants permission to deliver evaluation result to AWS Config
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutExternalEvaluation.html
   */
  PutExternalEvaluation = 'config:PutExternalEvaluation',
  /**
   * Grants permission to add or update organization config rule for your entire org
   * anization evaluating whether your AWS resources comply with your desired config
   * urations
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html
   */
  PutOrganizationConfigRule = 'config:PutOrganizationConfigRule',
  /**
   * Grants permission to add or update organization conformance pack for your entir
   * e organization evaluating whether your AWS resources comply with your desired c
   * onfigurations
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html
   */
  PutOrganizationConformancePack = 'config:PutOrganizationConformancePack',
  /**
   * Grants permission to add or update the remediation configuration with a specifi
   * c AWS Config rule with the selected target or action
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationConfigurations.html
   */
  PutRemediationConfigurations = 'config:PutRemediationConfigurations',
  /**
   * Grants permission to add or update remediation exceptions for specific resource
   * s for a specific AWS Config rule
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationExceptions.html
   */
  PutRemediationExceptions = 'config:PutRemediationExceptions',
  /**
   * Grants permission to record the configuration state for the resource provided i
   * n the request
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutResourceConfig.html
   */
  PutResourceConfig = 'config:PutResourceConfig',
  /**
   * Grants permission to create and update the retention configuration with details
   * about retention period (number of days) that AWS Config stores your historical
   * information
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutRetentionConfiguration.html
   */
  PutRetentionConfiguration = 'config:PutRetentionConfiguration',
  /**
   * Grants permission to save a new query or updates an existing saved query
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html
   */
  PutStoredQuery = 'config:PutStoredQuery',
  /**
   * Grants permission to accept a structured query language (SQL) SELECT command an
   * d an aggregator to query configuration state of AWS resources across multiple a
   * ccounts and regions, performs the corresponding search, and returns resource co
   * nfigurations matching the properties
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_SelectAggregateResourceConfig.html
   */
  SelectAggregateResourceConfig = 'config:SelectAggregateResourceConfig',
  /**
   * Grants permission to accept a structured query language (SQL) SELECT command, p
   * erforms the corresponding search, and returns resource configurations matching
   * the properties
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_SelectResourceConfig.html
   */
  SelectResourceConfig = 'config:SelectResourceConfig',
  /**
   * Grants permission to evaluate your resources against the specified Config rules
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigRulesEvaluation.html
   */
  StartConfigRulesEvaluation = 'config:StartConfigRulesEvaluation',
  /**
   * Grants permission to start recording configurations of the AWS resources you ha
   * ve selected to record in your AWS account
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html
   */
  StartConfigurationRecorder = 'config:StartConfigurationRecorder',
  /**
   * Grants permission to run an on-demand remediation for the specified AWS Config
   * rules against the last known remediation configuration
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_StartRemediationExecution.html
   */
  StartRemediationExecution = 'config:StartRemediationExecution',
  /**
   * Grants permission to evaluate your resource details against the AWS Config rule
   * s in your account
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_StartResourceEvaluation.html
   */
  StartResourceEvaluation = 'config:StartResourceEvaluation',
  /**
   * Grants permission to stop recording configurations of the AWS resources you hav
   * e selected to record in your AWS account
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html
   */
  StopConfigurationRecorder = 'config:StopConfigurationRecorder',
  /**
   * Grants permission to associate the specified tags to a resource with the specif
   * ied resourceArn
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html
   */
  TagResource = 'config:TagResource',
  /**
   * Grants permission to delete specified tags from a resource
   *
   * See https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'config:UntagResource',
}
