// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS User Notifications (NOTIFICATIONS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsusernotifications.html
 *
 * 2024-02-12T09:59:34.495Z
 */
export enum AwsNotificationsActions {
  /**
   * Grants permission to associate a new Channel with a particular NotificationConf
   * iguration
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  AssociateChannel = 'notifications:AssociateChannel',
  /**
   * Grants permission to create a new EventRule, associating it with a Notification
   * Configuration
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  CreateEventRule = 'notifications:CreateEventRule',
  /**
   * Grants permission to create a NotificationConfiguration
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  CreateNotificationConfiguration = 'notifications:CreateNotificationConfiguration',
  /**
   * Grants permission to delete an EventRule
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  DeleteEventRule = 'notifications:DeleteEventRule',
  /**
   * Grants permission to delete a NotificationConfiguration
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  DeleteNotificationConfiguration = 'notifications:DeleteNotificationConfiguration',
  /**
   * Grants permission to deregister a NotificationHub
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  DeregisterNotificationHub = 'notifications:DeregisterNotificationHub',
  /**
   * Grants permission to remove a Channel from a NotificationConfiguration
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  DisassociateChannel = 'notifications:DisassociateChannel',
  /**
   * Grants permission to get an EventRule
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  GetEventRule = 'notifications:GetEventRule',
  /**
   * Grants permission to get a NotificationConfiguration
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  GetNotificationConfiguration = 'notifications:GetNotificationConfiguration',
  /**
   * Grants permission to get a NotificationEvent
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  GetNotificationEvent = 'notifications:GetNotificationEvent',
  /**
   * Grants permission to list Channels by NotificationConfiguration
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  ListChannels = 'notifications:ListChannels',
  /**
   * Grants permission to list EventRules
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  ListEventRules = 'notifications:ListEventRules',
  /**
   * Grants permission to list NotificationConfigurations
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  ListNotificationConfigurations = 'notifications:ListNotificationConfigurations',
  /**
   * Grants permission to list NotificationEvents
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  ListNotificationEvents = 'notifications:ListNotificationEvents',
  /**
   * Grants permission to list NotificationHubs
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  ListNotificationHubs = 'notifications:ListNotificationHubs',
  /**
   * Grants permission to get tags for a resource
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  ListTagsForResource = 'notifications:ListTagsForResource',
  /**
   * Grants permission to register a NotificationHub
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  RegisterNotificationHub = 'notifications:RegisterNotificationHub',
  /**
   * Grants permission to tag a resource
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  TagResource = 'notifications:TagResource',
  /**
   * Grants permission to remove tags from a resource
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  UntagResource = 'notifications:UntagResource',
  /**
   * Grants permission to update an EventRule
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  UpdateEventRule = 'notifications:UpdateEventRule',
  /**
   * Grants permission to update a NotificationConfiguration
   *
   * See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  UpdateNotificationConfiguration = 'notifications:UpdateNotificationConfiguration',
}
