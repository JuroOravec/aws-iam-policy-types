// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Shield (SHIELD)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshield.html
 *
 * 2024-02-12T09:59:15.423Z
 */
export enum AwsShieldActions {
  /**
   * Grants permission to authorize the DDoS Response team to access the specified A
   * mazon S3 bucket containing your flow logs
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTLogBucket.html
   */
  AssociateDRTLogBucket = 'shield:AssociateDRTLogBucket',
  /**
   * Grants permission to authorize the DDoS Response team using the specified role,
   * to access your AWS account to assist with DDoS attack mitigation during potenti
   * al attacks
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTRole.html
   */
  AssociateDRTRole = 'shield:AssociateDRTRole',
  /**
   * Grants permission to add health-based detection to the Shield Advanced protecti
   * on for a resource
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateHealthCheck.html
   */
  AssociateHealthCheck = 'shield:AssociateHealthCheck',
  /**
   * Grants permission to initialize proactive engagement and set the list of contac
   * ts for the DDoS Response Team (DRT) to use
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateProactiveEngagementDetails.html
   */
  AssociateProactiveEngagementDetails = 'shield:AssociateProactiveEngagementDetails',
  /**
   * Grants permission to activate DDoS protection service for a given resource ARN
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html
   */
  CreateProtection = 'shield:CreateProtection',
  /**
   * Grants permission to create a grouping of protected resources so they can be ha
   * ndled as a collective
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtectionGroup.html
   */
  CreateProtectionGroup = 'shield:CreateProtectionGroup',
  /**
   * Grants permission to activate subscription
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html
   */
  CreateSubscription = 'shield:CreateSubscription',
  /**
   * Grants permission to delete an existing protection
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtection.html
   */
  DeleteProtection = 'shield:DeleteProtection',
  /**
   * Grants permission to remove the specified protection group
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtectionGroup.html
   */
  DeleteProtectionGroup = 'shield:DeleteProtectionGroup',
  /**
   * Grants permission to deactivate subscription
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteSubscription.html
   */
  DeleteSubscription = 'shield:DeleteSubscription',
  /**
   * Grants permission to get attack details
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttack.html
   */
  DescribeAttack = 'shield:DescribeAttack',
  /**
   * Grants permission to describe information about the number and type of attacks
   * AWS Shield has detected in the last year
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttackStatistics.html
   */
  DescribeAttackStatistics = 'shield:DescribeAttackStatistics',
  /**
   * Grants permission to describe the current role and list of Amazon S3 log bucket
   * s used by the DDoS Response team to access your AWS account while assisting wit
   * h attack mitigation
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeDRTAccess.html
   */
  DescribeDRTAccess = 'shield:DescribeDRTAccess',
  /**
   * Grants permission to list the email addresses that the DRT can use to contact y
   * ou during a suspected attack
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeEmergencyContactSettings.html
   */
  DescribeEmergencyContactSettings = 'shield:DescribeEmergencyContactSettings',
  /**
   * Grants permission to get protection details
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtection.html
   */
  DescribeProtection = 'shield:DescribeProtection',
  /**
   * Grants permission to describe the specification for the specified protection gr
   * oup
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtectionGroup.html
   */
  DescribeProtectionGroup = 'shield:DescribeProtectionGroup',
  /**
   * Grants permission to get subscription details, such as start time
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeSubscription.html
   */
  DescribeSubscription = 'shield:DescribeSubscription',
  /**
   * Grants permission to disable application layer automatic response for Shield Ad
   * vanced protection for a resource
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisableApplicationLayerAutomaticResponse.html
   */
  DisableApplicationLayerAutomaticResponse = 'shield:DisableApplicationLayerAutomaticResponse',
  /**
   * Grants permission to remove authorization from the DDoS Response Team (DRT) to
   * notify contacts about escalations
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisableProactiveEngagement.html
   */
  DisableProactiveEngagement = 'shield:DisableProactiveEngagement',
  /**
   * Grants permission to remove the DDoS Response team's access to the specified Am
   * azon S3 bucket containing your flow logs
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTLogBucket.html
   */
  DisassociateDRTLogBucket = 'shield:DisassociateDRTLogBucket',
  /**
   * Grants permission to remove the DDoS Response team's access to your AWS account
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTRole.html
   */
  DisassociateDRTRole = 'shield:DisassociateDRTRole',
  /**
   * Grants permission to remove health-based detection from the Shield Advanced pro
   * tection for a resource
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateHealthCheck.html
   */
  DisassociateHealthCheck = 'shield:DisassociateHealthCheck',
  /**
   * Grants permission to enable application layer automatic response for Shield Adv
   * anced protection for a resource
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_EnableApplicationLayerAutomaticResponse.html
   */
  EnableApplicationLayerAutomaticResponse = 'shield:EnableApplicationLayerAutomaticResponse',
  /**
   * Grants permission to authorize the DDoS Response Team (DRT) to use email and ph
   * one to notify contacts about escalations
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_EnableProactiveEngagement.html
   */
  EnableProactiveEngagement = 'shield:EnableProactiveEngagement',
  /**
   * Grants permission to get subscription state
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_GetSubscriptionState.html
   */
  GetSubscriptionState = 'shield:GetSubscriptionState',
  /**
   * Grants permission to list all existing attacks
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListAttacks.html
   */
  ListAttacks = 'shield:ListAttacks',
  /**
   * Grants permission to retrieve the protection groups for the account
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtectionGroups.html
   */
  ListProtectionGroups = 'shield:ListProtectionGroups',
  /**
   * Grants permission to list all existing protections
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtections.html
   */
  ListProtections = 'shield:ListProtections',
  /**
   * Grants permission to retrieve the resources that are included in the protection
   * group
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListResourcesInProtectionGroup.html
   */
  ListResourcesInProtectionGroup = 'shield:ListResourcesInProtectionGroup',
  /**
   * Grants permission to get information about AWS tags for a specified Amazon Reso
   * urce Name (ARN) in AWS Shield
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'shield:ListTagsForResource',
  /**
   * Grants permission to add or updates tags for a resource in AWS Shield
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_TagResource.html
   */
  TagResource = 'shield:TagResource',
  /**
   * Grants permission to remove tags from a resource in AWS Shield
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UntagResource.html
   */
  UntagResource = 'shield:UntagResource',
  /**
   * Grants permission to update application layer automatic response for Shield Adv
   * anced protection for a resource
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateApplicationLayerAutomaticResponse.html
   */
  UpdateApplicationLayerAutomaticResponse = 'shield:UpdateApplicationLayerAutomaticResponse',
  /**
   * Grants permission to update the details of the list of email addresses that the
   * DRT can use to contact you during a suspected attack
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateEmergencyContactSettings.html
   */
  UpdateEmergencyContactSettings = 'shield:UpdateEmergencyContactSettings',
  /**
   * Grants permission to update an existing protection group
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateProtectionGroup.html
   */
  UpdateProtectionGroup = 'shield:UpdateProtectionGroup',
  /**
   * Grants permission to update the details of an existing subscription
   *
   * See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateSubscription.html
   */
  UpdateSubscription = 'shield:UpdateSubscription',
}