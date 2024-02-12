// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS CodeStar Connections (CODESTAR-CONNECTIONS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarconnections.html
 *
 * 2024-02-12T09:56:39.109Z
 */
export enum AwsCodestarConnectionsActions {
  /**
   * Grants permission to create a Connection resource
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateConnection.html
   */
  CreateConnection = 'codestar-connections:CreateConnection',
  /**
   * Grants permission to create a host resource
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateHost.html
   */
  CreateHost = 'codestar-connections:CreateHost',
  /**
   * Grants permission to create a repository link
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateRepositoryLink.html
   */
  CreateRepositoryLink = 'codestar-connections:CreateRepositoryLink',
  /**
   * Grants permission to create a template sync config
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateSyncConfiguration.html
   */
  CreateSyncConfiguration = 'codestar-connections:CreateSyncConfiguration',
  /**
   * Grants permission to delete a Connection resource
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteConnection.html
   */
  DeleteConnection = 'codestar-connections:DeleteConnection',
  /**
   * Grants permission to delete a host resource
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteHost.html
   */
  DeleteHost = 'codestar-connections:DeleteHost',
  /**
   * Grants permission to delete a repository link
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteRepositoryLink.html
   */
  DeleteRepositoryLink = 'codestar-connections:DeleteRepositoryLink',
  /**
   * Grants permission to delete a sync configuration
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteSyncConfiguration.html
   */
  DeleteSyncConfiguration = 'codestar-connections:DeleteSyncConfiguration',
  /**
   * Grants permission to get details about a Connection resource
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetConnection.html
   */
  GetConnection = 'codestar-connections:GetConnection',
  /**
   * Grants permission to get details about a host resource
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetHost.html
   */
  GetHost = 'codestar-connections:GetHost',
  /**
   * Grants permission to associate a third party, such as a Bitbucket App installat
   * ion, with a Connection
   *
   * See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  GetIndividualAccessToken = 'codestar-connections:GetIndividualAccessToken',
  /**
   * Grants permission to associate a third party, such as a Bitbucket App installat
   * ion, with a Connection
   *
   * See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  GetInstallationUrl = 'codestar-connections:GetInstallationUrl',
  /**
   * Grants permission to describe a repository link
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetRepositoryLink.html
   */
  GetRepositoryLink = 'codestar-connections:GetRepositoryLink',
  /**
   * Grants permission to get the latest sync status for a repository
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetRepositorySyncStatus.html
   */
  GetRepositorySyncStatus = 'codestar-connections:GetRepositorySyncStatus',
  /**
   * Grants permission to get the latest sync status for a resource (cfn stack or ot
   * her resources)
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetResourceSyncStatus.html
   */
  GetResourceSyncStatus = 'codestar-connections:GetResourceSyncStatus',
  /**
   * Grants permission to describe service sync blockers on a resource (cfn stack or
   * other resources)
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetSyncBlockerSummary.html
   */
  GetSyncBlockerSummary = 'codestar-connections:GetSyncBlockerSummary',
  /**
   * Grants permission to describe a sync configuration
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetSyncConfiguration.html
   */
  GetSyncConfiguration = 'codestar-connections:GetSyncConfiguration',
  /**
   * Grants permission to list Connection resources
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListConnections.html
   */
  ListConnections = 'codestar-connections:ListConnections',
  /**
   * Grants permission to list host resources
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListHosts.html
   */
  ListHosts = 'codestar-connections:ListHosts',
  /**
   * Grants permission to associate a third party, such as a Bitbucket App installat
   * ion, with a Connection
   *
   * See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  ListInstallationTargets = 'codestar-connections:ListInstallationTargets',
  /**
   * Grants permission to list repository links
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListRepositoryLinks.html
   */
  ListRepositoryLinks = 'codestar-connections:ListRepositoryLinks',
  /**
   * Grants permission to list repository sync definitions
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListRepositorySyncDefinitions.html
   */
  ListRepositorySyncDefinitions = 'codestar-connections:ListRepositorySyncDefinitions',
  /**
   * Grants permission to list sync configurations for a repository link
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListSyncConfigurations.html
   */
  ListSyncConfigurations = 'codestar-connections:ListSyncConfigurations',
  /**
   * Grants permission to the set of key-value pairs that are used to manage the res
   * ource
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'codestar-connections:ListTagsForResource',
  /**
   * Grants permission to pass a Connection resource to an AWS service that accepts
   * a Connection ARN as input, such as codepipeline:CreatePipeline
   *
   * See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passconnection
   */
  PassConnection = 'codestar-connections:PassConnection',
  /**
   * Grants permission to pass a repository link resource to an AWS service that acc
   * epts a RepositoryLinkId as input, such as codestar-connections:CreateSyncConfig
   * uration
   *
   * See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passrepository
   */
  PassRepository = 'codestar-connections:PassRepository',
  /**
   * Grants permission to associate a third party server, such as a GitHub Enterpris
   * e Server instance, with a Host
   *
   * See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#connections-permissions-actions-host-registration
   */
  RegisterAppCode = 'codestar-connections:RegisterAppCode',
  /**
   * Grants permission to associate a third party server, such as a GitHub Enterpris
   * e Server instance, with a Host
   *
   * See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#connections-permissions-actions-host-registration
   */
  StartAppRegistrationHandshake = 'codestar-connections:StartAppRegistrationHandshake',
  /**
   * Grants permission to associate a third party, such as a Bitbucket App installat
   * ion, with a Connection
   *
   * See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  StartOAuthHandshake = 'codestar-connections:StartOAuthHandshake',
  /**
   * Grants permission to add or modify the tags of the given resource
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_TagResource.html
   */
  TagResource = 'codestar-connections:TagResource',
  /**
   * Grants permission to remove tags from an AWS resource
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'codestar-connections:UntagResource',
  /**
   * Grants permission to update a Connection resource with an installation of the C
   * odeStar Connections App
   *
   * See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  UpdateConnectionInstallation = 'codestar-connections:UpdateConnectionInstallation',
  /**
   * Grants permission to update a host resource
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UpdateHost.html
   */
  UpdateHost = 'codestar-connections:UpdateHost',
  /**
   * Grants permission to update a repository link
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UpdateRepositoryLink.html
   */
  UpdateRepositoryLink = 'codestar-connections:UpdateRepositoryLink',
  /**
   * Grants permission to update a sync blocker for a resource (cfn stack or other r
   * esources)
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UpdateSyncBlocker.html
   */
  UpdateSyncBlocker = 'codestar-connections:UpdateSyncBlocker',
  /**
   * Grants permission to update a sync configuration
   *
   * See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UpdateSyncConfiguration.html
   */
  UpdateSyncConfiguration = 'codestar-connections:UpdateSyncConfiguration',
  /**
   * Grants permission to use a Connection resource to call provider actions
   *
   * See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   */
  UseConnection = 'codestar-connections:UseConnection',
}
