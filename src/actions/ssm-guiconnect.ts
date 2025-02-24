// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Systems Manager GUI Connect (SSM-GUICONNECT)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerguiconnect.html
 *
 * 2025-02-24T21:49:55.722Z
 */
export enum AwsSsmGuiconnectActions {
  /**
   * Grants permission to terminate a GUI Connect connection
   *
   * See https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-remote-desktop-connections.html
   */
  CancelConnection = 'ssm-guiconnect:CancelConnection',
  /**
   * Grants permission to get the metadata for a GUI Connect connection
   *
   * See https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-remote-desktop-connections.html
   */
  GetConnection = 'ssm-guiconnect:GetConnection',
  /**
   * Grants permission to list the metadata for GUI Connect connections
   *
   * See https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-remote-desktop-connections.html
   */
  ListConnections = 'ssm-guiconnect:ListConnections',
  /**
   * Grants permission to start a GUI Connect connection
   *
   * See https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-remote-desktop-connections.html
   */
  StartConnection = 'ssm-guiconnect:StartConnection',
}
