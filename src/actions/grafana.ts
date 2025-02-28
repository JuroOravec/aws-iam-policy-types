// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Managed Grafana (GRAFANA)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedgrafana.html
 *
 * 2025-02-24T21:48:44.949Z
 */
export enum AwsGrafanaActions {
  /**
   * Grants permission to upgrade a workspace with a license
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  AssociateLicense = 'grafana:AssociateLicense',
  /**
   * Grants permission to create a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  CreateWorkspace = 'grafana:CreateWorkspace',
  /**
   * Grants permission to create API keys for a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  CreateWorkspaceApiKey = 'grafana:CreateWorkspaceApiKey',
  /**
   * Grants permission to create service accounts for a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  CreateWorkspaceServiceAccount = 'grafana:CreateWorkspaceServiceAccount',
  /**
   * Grants permission to create service account tokens for a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  CreateWorkspaceServiceAccountToken = 'grafana:CreateWorkspaceServiceAccountToken',
  /**
   * Grants permission to delete a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  DeleteWorkspace = 'grafana:DeleteWorkspace',
  /**
   * Grants permission to delete API keys from a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  DeleteWorkspaceApiKey = 'grafana:DeleteWorkspaceApiKey',
  /**
   * Grants permission to delete service accounts for a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  DeleteWorkspaceServiceAccount = 'grafana:DeleteWorkspaceServiceAccount',
  /**
   * Grants permission to delete service account tokens for a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  DeleteWorkspaceServiceAccountToken = 'grafana:DeleteWorkspaceServiceAccountToken',
  /**
   * Grants permission to describe a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  DescribeWorkspace = 'grafana:DescribeWorkspace',
  /**
   * Grants permission to describe authentication providers on a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  DescribeWorkspaceAuthentication = 'grafana:DescribeWorkspaceAuthentication',
  /**
   * Grants permission to describe the current configuration string for the given wo
   * rkspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/APIReference/API_DescribeWorkspaceConfiguration.html
   */
  DescribeWorkspaceConfiguration = 'grafana:DescribeWorkspaceConfiguration',
  /**
   * Grants permission to remove a license from a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  DisassociateLicense = 'grafana:DisassociateLicense',
  /**
   * Grants permission to list the permissions on a wokspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  ListPermissions = 'grafana:ListPermissions',
  /**
   * Grants permission to list tags associated with a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'grafana:ListTagsForResource',
  /**
   * Grants permission to list all available supported Grafana versions. Optionally,
   * include a workspace to list the versions to which it can be upgraded
   *
   * See https://docs.aws.amazon.com/grafana/latest/APIReference/API_ListVersions.html
   */
  ListVersions = 'grafana:ListVersions',
  /**
   * Grants permission to list service account tokens for a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  ListWorkspaceServiceAccountTokens = 'grafana:ListWorkspaceServiceAccountTokens',
  /**
   * Grants permission to list service accounts for a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  ListWorkspaceServiceAccounts = 'grafana:ListWorkspaceServiceAccounts',
  /**
   * Grants permission to list workspaces
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  ListWorkspaces = 'grafana:ListWorkspaces',
  /**
   * Grants permission to add tags to, or update tag values of, a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/APIReference/API_TagResource.html
   */
  TagResource = 'grafana:TagResource',
  /**
   * Grants permission to remove tags from a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'grafana:UntagResource',
  /**
   * Grants permission to modify the permissions on a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  UpdatePermissions = 'grafana:UpdatePermissions',
  /**
   * Grants permission to modify a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  UpdateWorkspace = 'grafana:UpdateWorkspace',
  /**
   * Grants permission to modify authentication providers on a workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  UpdateWorkspaceAuthentication = 'grafana:UpdateWorkspaceAuthentication',
  /**
   * Grants permission to update the configuration string for the given workspace
   *
   * See https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceConfiguration.html
   */
  UpdateWorkspaceConfiguration = 'grafana:UpdateWorkspaceConfiguration',
}
