// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon CloudWatch Network Monitor (NETWORKMONITOR)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchnetworkmonitor.html
 *
 * 2024-02-12T09:56:29.755Z
 */
export enum AwsNetworkmonitorActions {
  /**
   * Grants permission to create a monitor
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_CreateMonitor.html
   */
  CreateMonitor = 'networkmonitor:CreateMonitor',
  /**
   * Grants permission to create a probe
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_CreateProbe.html
   */
  CreateProbe = 'networkmonitor:CreateProbe',
  /**
   * Grants permission to delete a monitor
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_DeleteMonitor.html
   */
  DeleteMonitor = 'networkmonitor:DeleteMonitor',
  /**
   * Grants permission to delete a probe
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_DeleteProbe.html
   */
  DeleteProbe = 'networkmonitor:DeleteProbe',
  /**
   * Grants permission to get information about a monitor
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_GetMonitor.html
   */
  GetMonitor = 'networkmonitor:GetMonitor',
  /**
   * Grants permission to get information about a probe
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_GetProbe.html
   */
  GetProbe = 'networkmonitor:GetProbe',
  /**
   * Grants permission to list all monitors in an account and their statuses
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_ListMonitors.html
   */
  ListMonitors = 'networkmonitor:ListMonitors',
  /**
   * Grants permission to list the tags for a resource
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_ListTagsForResource.html
   */
  ListTagsForResource = 'networkmonitor:ListTagsForResource',
  /**
   * Grants permission to add tags to a resource
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_TagResource.html
   */
  TagResource = 'networkmonitor:TagResource',
  /**
   * Grants permission to remove tags from a resource
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_UntagResource.html
   */
  UntagResource = 'networkmonitor:UntagResource',
  /**
   * Grants permission to update a monitor
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_UpdateMonitor.html
   */
  UpdateMonitor = 'networkmonitor:UpdateMonitor',
  /**
   * Grants permission to update a probe
   *
   * See https://docs.aws.amazon.com/network-monitor/latest/api/API_UpdateProbe.html
   */
  UpdateProbe = 'networkmonitor:UpdateProbe',
}