// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS CodeStar Notifications (CODESTAR-NOTIFICATIONS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarnotifications.html
 *
 * 2025-02-24T21:47:18.721Z
 */
export enum AwsCodestarNotificationsActions {
  /**
   * Grants permission to create a notification rule for a resource
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_CreateNotificationRule.html
   */
  CreateNotificationRule = 'codestar-notifications:CreateNotificationRule',
  /**
   * Grants permission to delete a notification rule for a resource
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteNotificationRule.html
   */
  DeleteNotificationRule = 'codestar-notifications:DeleteNotificationRule',
  /**
   * Grants permission to delete a target for a notification rule
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteTarget.html
   */
  DeleteTarget = 'codestar-notifications:DeleteTarget',
  /**
   * Grants permission to get information about a notification rule
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DescribeNotificationRule.html
   */
  DescribeNotificationRule = 'codestar-notifications:DescribeNotificationRule',
  /**
   * Grants permission to list notifications event types
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListEventTypes.html
   */
  ListEventTypes = 'codestar-notifications:ListEventTypes',
  /**
   * Grants permission to list notification rules in an AWS account
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListNotificationRules.html
   */
  ListNotificationRules = 'codestar-notifications:ListNotificationRules',
  /**
   * Grants permission to list the tags attached to a notification rule resource ARN
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'codestar-notifications:ListTagsForResource',
  /**
   * Grants permission to list the notification rule targets for an AWS account
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTargets.html
   */
  ListTargets = 'codestar-notifications:ListTargets',
  /**
   * Grants permission to create an association between a notification rule and an A
   * mazon SNS topic
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Subscribe.html
   */
  Subscribe = 'codestar-notifications:Subscribe',
  /**
   * Grants permission to attach resource tags to a notification rule resource ARN
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_TagResource.html
   */
  TagResource = 'codestar-notifications:TagResource',
  /**
   * Grants permission to remove an association between a notification rule and an A
   * mazon SNS topic
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Unsubscribe.html
   */
  Unsubscribe = 'codestar-notifications:Unsubscribe',
  /**
   * Grants permission to disassociate resource tags from a notification rule resour
   * ce ARN
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'codestar-notifications:UntagResource',
  /**
   * Grants permission to change a notification rule for a resource
   *
   * See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UpdateNotificationRule.html
   */
  UpdateNotificationRule = 'codestar-notifications:UpdateNotificationRule',
}
