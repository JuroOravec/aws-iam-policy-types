// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon EventBridge Scheduler (SCHEDULER)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgescheduler.html
 *
 * 2024-02-12T09:57:23.614Z
 */
export enum AwsSchedulerActions {
  /**
   * Grants permission to create an Amazon EventBridge Scheduler schedule
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_CreateSchedule.html
   */
  CreateSchedule = 'scheduler:CreateSchedule',
  /**
   * Grants permission to create an Amazon EventBridge Scheduler schedule group
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_CreateScheduleGroup.html
   */
  CreateScheduleGroup = 'scheduler:CreateScheduleGroup',
  /**
   * Grants permission to delete an Amazon EventBridge Scheduler schedule
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_DeleteSchedule.html
   */
  DeleteSchedule = 'scheduler:DeleteSchedule',
  /**
   * Grants permission to delete an Amazon EventBridge Scheduler schedule group
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_DeleteScheduleGroup.html
   */
  DeleteScheduleGroup = 'scheduler:DeleteScheduleGroup',
  /**
   * Grants permission to view details about an Amazon EventBridge Scheduler schedul
   * e
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_GetSchedule.html
   */
  GetSchedule = 'scheduler:GetSchedule',
  /**
   * Grants permission to view details about an Amazon EventBridge Scheduler schedul
   * e group
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_GetScheduleGroup.html
   */
  GetScheduleGroup = 'scheduler:GetScheduleGroup',
  /**
   * Grants permission to list the Amazon EventBridge Scheduler schedule groups in y
   * our account
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_ListScheduleGroups.html
   */
  ListScheduleGroups = 'scheduler:ListScheduleGroups',
  /**
   * Grants permission to list the Amazon EventBridge Scheduler schedules in your ac
   * count
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_ListSchedules.html
   */
  ListSchedules = 'scheduler:ListSchedules',
  /**
   * Grants permission to lists tag for an Amazon EventBridge Scheduler resource
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'scheduler:ListTagsForResource',
  /**
   * Grants permission to tag an Amazon EventBridge Scheduler resource
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_TagResource.html
   */
  TagResource = 'scheduler:TagResource',
  /**
   * Grants permission to untag an Amazon EventBridge Scheduler resource
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'scheduler:UntagResource',
  /**
   * Grants permission to modify an Amazon EventBridge Scheduler schedule
   *
   * See https://docs.aws.amazon.com/scheduler/latest/APIReference/API_UpdateSchedule.html
   */
  UpdateSchedule = 'scheduler:UpdateSchedule',
}
