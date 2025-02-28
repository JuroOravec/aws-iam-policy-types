// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon DevOps Guru (DEVOPS-GURU)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondevopsguru.html
 *
 * 2025-02-24T21:47:36.900Z
 */
export enum AwsDevopsGuruActions {
  /**
   * Grants permission to add a notification channel to DevOps Guru
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_AddNotificationChannel.html
   */
  AddNotificationChannel = 'devops-guru:AddNotificationChannel',
  /**
   * Grants permission to delete specified insight in your account
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DeleteInsight.html
   */
  DeleteInsight = 'devops-guru:DeleteInsight',
  /**
   * Grants permission to view the health of operations in your AWS account
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAccountHealth.html
   */
  DescribeAccountHealth = 'devops-guru:DescribeAccountHealth',
  /**
   * Grants permission to view the health of operations within a time range in your
   * AWS account
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAccountOverview.html
   */
  DescribeAccountOverview = 'devops-guru:DescribeAccountOverview',
  /**
   * Grants permission to list the details of a specified anomaly
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAnomaly.html
   */
  DescribeAnomaly = 'devops-guru:DescribeAnomaly',
  /**
   * Grants permission to retrieve details about event sources for DevOps Guru
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeEventSourcesConfig.html
   */
  DescribeEventSourcesConfig = 'devops-guru:DescribeEventSourcesConfig',
  /**
   * Grants permission to view the feedback details of a specified insight
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeFeedback.html
   */
  DescribeFeedback = 'devops-guru:DescribeFeedback',
  /**
   * Grants permission to list the details of a specified insight
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeInsight.html
   */
  DescribeInsight = 'devops-guru:DescribeInsight',
  /**
   * Grants permission to view the health of operations in your organization
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeOrganizationHealth.html
   */
  DescribeOrganizationHealth = 'devops-guru:DescribeOrganizationHealth',
  /**
   * Grants permission to view the health of operations within a time range in your
   * organization
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeOrganizationOverview.html
   */
  DescribeOrganizationOverview = 'devops-guru:DescribeOrganizationOverview',
  /**
   * Grants permission to view the health of operations for each AWS CloudFormation
   * stack or AWS Services or accounts specified in DevOps Guru in your organization
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeOrganizationResourceCollectionHealth.html
   */
  DescribeOrganizationResourceCollectionHealth = 'devops-guru:DescribeOrganizationResourceCollectionHealth',
  /**
   * Grants permission to view the health of operations for each AWS CloudFormation
   * stack specified in DevOps Guru
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeResourceCollectionHealth.html
   */
  DescribeResourceCollectionHealth = 'devops-guru:DescribeResourceCollectionHealth',
  /**
   * Grants permission to view the integration status of services that can be integr
   * ated with DevOps Guru
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeServiceIntegration.html
   */
  DescribeServiceIntegration = 'devops-guru:DescribeServiceIntegration',
  /**
   * Grants permission to list service resource cost estimates
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_GetCostEstimation.html
   */
  GetCostEstimation = 'devops-guru:GetCostEstimation',
  /**
   * Grants permission to list AWS CloudFormation stacks that DevOps Guru is configu
   * red to use
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_GetResourceCollection.html
   */
  GetResourceCollection = 'devops-guru:GetResourceCollection',
  /**
   * Grants permission to list anomalies of a given insight in your account
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListAnomaliesForInsight.html
   */
  ListAnomaliesForInsight = 'devops-guru:ListAnomaliesForInsight',
  /**
   * Grants permission to list log anomalies of a given insight in your account
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListAnomalousLogGroups.html
   */
  ListAnomalousLogGroups = 'devops-guru:ListAnomalousLogGroups',
  /**
   * Grants permission to list resource events that are evaluated by DevOps Guru
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListEvents.html
   */
  ListEvents = 'devops-guru:ListEvents',
  /**
   * Grants permission to list insights in your account
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListInsights.html
   */
  ListInsights = 'devops-guru:ListInsights',
  /**
   * Grants permission to list resource monitored by DevOps Guru in your account
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListMonitoredResources.html
   */
  ListMonitoredResources = 'devops-guru:ListMonitoredResources',
  /**
   * Grants permission to list notification channels configured for DevOps Guru in y
   * our account
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListNotificationChannels.html
   */
  ListNotificationChannels = 'devops-guru:ListNotificationChannels',
  /**
   * Grants permission to list insights in your organization
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListOrganizationInsights.html
   */
  ListOrganizationInsights = 'devops-guru:ListOrganizationInsights',
  /**
   * Grants permission to list a specified insight's recommendations
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListRecommendations.html
   */
  ListRecommendations = 'devops-guru:ListRecommendations',
  /**
   * Grants permission to submit a feedback to DevOps Guru
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PutFeedback.html
   */
  PutFeedback = 'devops-guru:PutFeedback',
  /**
   * Grants permission to remove a notification channel from DevOps Guru
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_RemoveNotificationChannel.html
   */
  RemoveNotificationChannel = 'devops-guru:RemoveNotificationChannel',
  /**
   * Grants permission to search insights in your account
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_SearchInsights.html
   */
  SearchInsights = 'devops-guru:SearchInsights',
  /**
   * Grants permission to search insights in your organization
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_SearchOrganizationInsights.html
   */
  SearchOrganizationInsights = 'devops-guru:SearchOrganizationInsights',
  /**
   * Grants permission to start the creation of an estimate of the monthly cost
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_StartCostEstimation.html
   */
  StartCostEstimation = 'devops-guru:StartCostEstimation',
  /**
   * Grants permission to update an event source for DevOps Guru
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateEventSourcesConfig.html
   */
  UpdateEventSourcesConfig = 'devops-guru:UpdateEventSourcesConfig',
  /**
   * Grants permission to update the list of AWS CloudFormation stacks that are used
   * to specify which AWS resources in your account are analyzed by DevOps Guru
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateResourceCollection.html
   */
  UpdateResourceCollection = 'devops-guru:UpdateResourceCollection',
  /**
   * Grants permission to enable or disable a service that integrates with DevOps Gu
   * ru
   *
   * See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateServiceIntegration.html
   */
  UpdateServiceIntegration = 'devops-guru:UpdateServiceIntegration',
}
