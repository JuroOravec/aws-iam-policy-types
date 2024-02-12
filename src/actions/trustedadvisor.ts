// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Trusted Advisor (TRUSTEDADVISOR)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstrustedadvisor.html
 *
 * 2024-02-12T09:59:33.982Z
 */
export enum AwsTrustedadvisorActions {
  /**
   * Grants permission to create an engagement
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  CreateEngagement = 'trustedadvisor:CreateEngagement',
  /**
   * Grants permission to create an engagement attachment
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  CreateEngagementAttachment = 'trustedadvisor:CreateEngagementAttachment',
  /**
   * Grants permission to create an engagement communication
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  CreateEngagementCommunication = 'trustedadvisor:CreateEngagementCommunication',
  /**
   * Grants permission to the organization management account to delete email notifi
   * cation preferences from a delegated administrator account for Trusted Advisor P
   * riority
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DeleteNotificationConfigurationForDelegatedAdmin = 'trustedadvisor:DeleteNotificationConfigurationForDelegatedAdmin',
  /**
   * Grants permission to view the AWS Support plan and various AWS Trusted Advisor
   * preferences
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeAccount = 'trustedadvisor:DescribeAccount',
  /**
   * Grants permission to view if the AWS account has enabled or disabled AWS Truste
   * d Advisor
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeAccountAccess = 'trustedadvisor:DescribeAccountAccess',
  /**
   * Grants permission to view details for the check items
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeCheckItems = 'trustedadvisor:DescribeCheckItems',
  /**
   * Grants permission to view the refresh statuses for AWS Trusted Advisor checks
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeCheckRefreshStatuses = 'trustedadvisor:DescribeCheckRefreshStatuses',
  /**
   * Grants permission to view the results and changed statuses for checks in the la
   * st 30 days
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeCheckStatusHistoryChanges = 'trustedadvisor:DescribeCheckStatusHistoryChanges',
  /**
   * Grants permission to view AWS Trusted Advisor check summaries
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeCheckSummaries = 'trustedadvisor:DescribeCheckSummaries',
  /**
   * Grants permission to view details for AWS Trusted Advisor checks
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeChecks = 'trustedadvisor:DescribeChecks',
  /**
   * Grants permission to get your email notification preferences for Trusted Adviso
   * r Priority
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeNotificationConfigurations = 'trustedadvisor:DescribeNotificationConfigurations',
  /**
   * Grants permission to view the notification preferences for the AWS account
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeNotificationPreferences = 'trustedadvisor:DescribeNotificationPreferences',
  /**
   * Grants permission to view if the AWS account meets the requirements to enable t
   * he organizational view feature
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeOrganization = 'trustedadvisor:DescribeOrganization',
  /**
   * Grants permission to view the linked AWS accounts that are in the organization
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeOrganizationAccounts = 'trustedadvisor:DescribeOrganizationAccounts',
  /**
   * Grants permission to view details for organizational view reports, such as the
   * report name, runtime, date created, status, and format
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeReports = 'trustedadvisor:DescribeReports',
  /**
   * Grants permission to view risk details in AWS Trusted Advisor Priority
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeRisk = 'trustedadvisor:DescribeRisk',
  /**
   * Grants permission to view affected resources for a risk in AWS Trusted Advisor
   * Priority
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeRiskResources = 'trustedadvisor:DescribeRiskResources',
  /**
   * Grants permission to view risks in AWS Trusted Advisor Priority
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeRisks = 'trustedadvisor:DescribeRisks',
  /**
   * Grants permission to view information about organizational view reports, such a
   * s the AWS Regions, check categories, check names, and resource statuses
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeServiceMetadata = 'trustedadvisor:DescribeServiceMetadata',
  /**
   * Grants permission to download a file that contains details about the risk in AW
   * S Trusted Advisor Priority
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DownloadRisk = 'trustedadvisor:DownloadRisk',
  /**
   * Grants permission to exclude recommendations for AWS Trusted Advisor checks
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  ExcludeCheckItems = 'trustedadvisor:ExcludeCheckItems',
  /**
   * Grants permission to create a report for AWS Trusted Advisor checks in your org
   * anization
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  GenerateReport = 'trustedadvisor:GenerateReport',
  /**
   * Grants permission to view an engagment
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  GetEngagement = 'trustedadvisor:GetEngagement',
  /**
   * Grants permission to view an engagment attachment
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  GetEngagementAttachment = 'trustedadvisor:GetEngagementAttachment',
  /**
   * Grants permission to view a specific engagement type
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  GetEngagementType = 'trustedadvisor:GetEngagementType',
  /**
   * Grants permission to get a specific recommendation within an AWS Organization's
   * organization. This API supports only prioritized recommendations
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  GetOrganizationRecommendation = 'trustedadvisor:GetOrganizationRecommendation',
  /**
   * Grants permission to get a specific Recommendation
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  GetRecommendation = 'trustedadvisor:GetRecommendation',
  /**
   * Grants permission to include recommendations for AWS Trusted Advisor checks
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  IncludeCheckItems = 'trustedadvisor:IncludeCheckItems',
  /**
   * Grants permission to view, in the Trusted Advisor console, all of the accounts
   * in an AWS organization that are contained by a root or organizational unit (OU)
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  ListAccountsForParent = 'trustedadvisor:ListAccountsForParent',
  /**
   * Grants permission to list a filterable set of Checks
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  ListChecks = 'trustedadvisor:ListChecks',
  /**
   * Grants permission to view all communications for an engagement
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  ListEngagementCommunications = 'trustedadvisor:ListEngagementCommunications',
  /**
   * Grants permission to view all engagement types
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  ListEngagementTypes = 'trustedadvisor:ListEngagementTypes',
  /**
   * Grants permission to view all engagements
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  ListEngagements = 'trustedadvisor:ListEngagements',
  /**
   * Grants permission to list the accounts that own the resources for an AWS Organi
   * zation aggregate recommendation. This API only supports prioritized recommendat
   * ions
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  ListOrganizationRecommendationAccounts = 'trustedadvisor:ListOrganizationRecommendationAccounts',
  /**
   * Grants permission to list Resources of a Recommendation within an AWS Organizat
   * ion. This API only supports prioritized recommendations
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  ListOrganizationRecommendationResources = 'trustedadvisor:ListOrganizationRecommendationResources',
  /**
   * Grants permission to list a filterable set of Recommendations within an AWS Org
   * anization. This API only supports prioritized recommendations
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  ListOrganizationRecommendations = 'trustedadvisor:ListOrganizationRecommendations',
  /**
   * Grants permission to view, in the Trusted Advisor console, all of the organizat
   * ional units (OUs) in a parent organizational unit or root
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  ListOrganizationalUnitsForParent = 'trustedadvisor:ListOrganizationalUnitsForParent',
  /**
   * Grants permission to list Resources of a Recommendation
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  ListRecommendationResources = 'trustedadvisor:ListRecommendationResources',
  /**
   * Grants permission to list a filterable set of Recommendations
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  ListRecommendations = 'trustedadvisor:ListRecommendations',
  /**
   * Grants permission to view, in the Trusted Advisor console, all of the roots tha
   * t are defined in an AWS organization
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  ListRoots = 'trustedadvisor:ListRoots',
  /**
   * Grants permission to refresh an AWS Trusted Advisor check
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  RefreshCheck = 'trustedadvisor:RefreshCheck',
  /**
   * Grants permission to enable or disable AWS Trusted Advisor for the account
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  SetAccountAccess = 'trustedadvisor:SetAccountAccess',
  /**
   * Grants permission to enable the organizational view feature for AWS Trusted Adv
   * isor
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  SetOrganizationAccess = 'trustedadvisor:SetOrganizationAccess',
  /**
   * Grants permission to update the details of an engagement
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  UpdateEngagement = 'trustedadvisor:UpdateEngagement',
  /**
   * Grants permission to update the status of an engagement
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  UpdateEngagementStatus = 'trustedadvisor:UpdateEngagementStatus',
  /**
   * Grants permission to create or update your email notification preferences for T
   * rusted Advisor Priority
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  UpdateNotificationConfigurations = 'trustedadvisor:UpdateNotificationConfigurations',
  /**
   * Grants permission to update notification preferences for AWS Trusted Advisor
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  UpdateNotificationPreferences = 'trustedadvisor:UpdateNotificationPreferences',
  /**
   * Grants permission to update the lifecyle of a Recommendation within an AWS Orga
   * nization. This API only supports prioritized recommendations
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  UpdateOrganizationRecommendationLifecycle = 'trustedadvisor:UpdateOrganizationRecommendationLifecycle',
  /**
   * Grants permission to update the lifecyle of a Recommendation. This API only sup
   * ports prioritized recommendations
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  UpdateRecommendationLifecycle = 'trustedadvisor:UpdateRecommendationLifecycle',
  /**
   * Grants permission to update the risk status in AWS Trusted Advisor Priority
   *
   * See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  UpdateRiskStatus = 'trustedadvisor:UpdateRiskStatus',
}