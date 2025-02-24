// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon WorkSpaces (WORKSPACES)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspaces.html
 *
 * 2025-02-24T21:50:11.572Z
 */
export enum AwsWorkspacesActions {
  /**
   * Grants permission to accept invitations from other AWS accounts to share the sa
   * me configuration for WorkSpaces BYOL
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_AcceptAccountLinkInvitation.html
   */
  AcceptAccountLinkInvitation = 'workspaces:AcceptAccountLinkInvitation',
  /**
   * Grants permission to associate connection aliases with directories
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateConnectionAlias.html
   */
  AssociateConnectionAlias = 'workspaces:AssociateConnectionAlias',
  /**
   * Grants permission to associate IP access control groups with directories
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateIpGroups.html
   */
  AssociateIpGroups = 'workspaces:AssociateIpGroups',
  /**
   * Grants permission to associate a workspace application with a WorkSpace
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateWorkspaceApplication.html
   */
  AssociateWorkspaceApplication = 'workspaces:AssociateWorkspaceApplication',
  /**
   * Grants permission to add rules to IP access control groups
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_AuthorizeIpRules.html
   */
  AuthorizeIpRules = 'workspaces:AuthorizeIpRules',
  /**
   * Grants permission to copy a WorkSpace image
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CopyWorkspaceImage.html
   */
  CopyWorkspaceImage = 'workspaces:CopyWorkspaceImage',
  /**
   * Grants permission to invite other AWS accounts to share the same configuration
   * for WorkSpaces BYOL
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateAccountLinkInvitation.html
   */
  CreateAccountLinkInvitation = 'workspaces:CreateAccountLinkInvitation',
  /**
   * Grants permission to create an Amazon Connect client add-in within a directory
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateConnectClientAddIn.html
   */
  CreateConnectClientAddIn = 'workspaces:CreateConnectClientAddIn',
  /**
   * Grants permission to create connection aliases for use with cross-Region redire
   * ction
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateConnectionAlias.html
   */
  CreateConnectionAlias = 'workspaces:CreateConnectionAlias',
  /**
   * Grants permission to create IP access control groups
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateIpGroup.html
   */
  CreateIpGroup = 'workspaces:CreateIpGroup',
  /**
   * Grants permission to create one or more Standby WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateStandbyWorkspaces.html
   */
  CreateStandbyWorkspaces = 'workspaces:CreateStandbyWorkspaces',
  /**
   * Grants permission to create tags for WorkSpaces resources
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateTags.html
   */
  CreateTags = 'workspaces:CreateTags',
  /**
   * Grants permission to create an updated WorkSpace image
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateUpdatedWorkspaceImage.html
   */
  CreateUpdatedWorkspaceImage = 'workspaces:CreateUpdatedWorkspaceImage',
  /**
   * Grants permission to create a WorkSpace bundle
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaceBundle.html
   */
  CreateWorkspaceBundle = 'workspaces:CreateWorkspaceBundle',
  /**
   * Grants permission to create a new WorkSpace image
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaceImage.html
   */
  CreateWorkspaceImage = 'workspaces:CreateWorkspaceImage',
  /**
   * Grants permission to create one or more WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaces.html
   */
  CreateWorkspaces = 'workspaces:CreateWorkspaces',
  /**
   * Grants permission to create a WorkSpaces Pool
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspacesPool.html
   */
  CreateWorkspacesPool = 'workspaces:CreateWorkspacesPool',
  /**
   * Grants permission to delete invitations to other AWS accounts to share the same
   * configuration for WorkSpaces BYOL
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteAccountLinkInvitation.html
   */
  DeleteAccountLinkInvitation = 'workspaces:DeleteAccountLinkInvitation',
  /**
   * Grants permission to delete AWS WorkSpaces Client branding data within a direct
   * ory
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteClientBranding.html
   */
  DeleteClientBranding = 'workspaces:DeleteClientBranding',
  /**
   * Grants permission to delete an Amazon Connect client add-in that is configured
   * within a directory
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteConnectClientAddIn.html
   */
  DeleteConnectClientAddIn = 'workspaces:DeleteConnectClientAddIn',
  /**
   * Grants permission to delete connection aliases
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteConnectionAlias.html
   */
  DeleteConnectionAlias = 'workspaces:DeleteConnectionAlias',
  /**
   * Grants permission to delete IP access control groups
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteIpGroup.html
   */
  DeleteIpGroup = 'workspaces:DeleteIpGroup',
  /**
   * Grants permission to delete tags from WorkSpaces resources
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteTags.html
   */
  DeleteTags = 'workspaces:DeleteTags',
  /**
   * Grants permission to delete WorkSpace bundles
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceBundle.html
   */
  DeleteWorkspaceBundle = 'workspaces:DeleteWorkspaceBundle',
  /**
   * Grants permission to delete WorkSpace images
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceImage.html
   */
  DeleteWorkspaceImage = 'workspaces:DeleteWorkspaceImage',
  /**
   * Grants permission to deploy all pending workspace applications on a WorkSpace
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DeployWorkspaceApplications.html
   */
  DeployWorkspaceApplications = 'workspaces:DeployWorkspaceApplications',
  /**
   * Grants permission to deregister directories from use with Amazon WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DeregisterWorkspaceDirectory.html
   */
  DeregisterWorkspaceDirectory = 'workspaces:DeregisterWorkspaceDirectory',
  /**
   * Grants permission to retrieve the configuration of Bring Your Own License (BYOL
   * ) for WorkSpaces accounts
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccount.html
   */
  DescribeAccount = 'workspaces:DescribeAccount',
  /**
   * Grants permission to retrieve modifications to the configuration of Bring Your
   * Own License (BYOL) for WorkSpaces accounts
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccountModifications.html
   */
  DescribeAccountModifications = 'workspaces:DescribeAccountModifications',
  /**
   * Grants permission to retrieve information about resources associated with a Wor
   * kSpace application
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeApplicationAssociations.html
   */
  DescribeApplicationAssociations = 'workspaces:DescribeApplicationAssociations',
  /**
   * Grants permission to obtain information about WorkSpace applications
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeApplications.html
   */
  DescribeApplications = 'workspaces:DescribeApplications',
  /**
   * Grants permission to retrieve information about resources associated with a Wor
   * kSpace bundle
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeBundleAssociations.html
   */
  DescribeBundleAssociations = 'workspaces:DescribeBundleAssociations',
  /**
   * Grants permission to retrieve AWS WorkSpaces Client branding data within a dire
   * ctory
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientBranding.html
   */
  DescribeClientBranding = 'workspaces:DescribeClientBranding',
  /**
   * Grants permission to retrieve information about WorkSpaces clients
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientProperties.html
   */
  DescribeClientProperties = 'workspaces:DescribeClientProperties',
  /**
   * Grants permission to retrieve a list of Amazon Connect client add-ins that have
   * been created
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectClientAddIns.html
   */
  DescribeConnectClientAddIns = 'workspaces:DescribeConnectClientAddIns',
  /**
   * Grants permission to retrieve the permissions that the owners of connection ali
   * ases have granted to other AWS accounts for connection aliases
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliasPermissions.html
   */
  DescribeConnectionAliasPermissions = 'workspaces:DescribeConnectionAliasPermissions',
  /**
   * Grants permission to retrieve a list that describes the connection aliases used
   * for cross-Region redirection
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html
   */
  DescribeConnectionAliases = 'workspaces:DescribeConnectionAliases',
  /**
   * Grants permission to retrieve information about resources associated with a Wor
   * kSpace image
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeImageAssociations.html
   */
  DescribeImageAssociations = 'workspaces:DescribeImageAssociations',
  /**
   * Grants permission to retrieve information about IP access control groups
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeIpGroups.html
   */
  DescribeIpGroups = 'workspaces:DescribeIpGroups',
  /**
   * Grants permission to describe the tags for WorkSpaces resources
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeTags.html
   */
  DescribeTags = 'workspaces:DescribeTags',
  /**
   * Grants permission to retrieve information about resources associated with a Wor
   * kSpace
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceAssociations.html
   */
  DescribeWorkspaceAssociations = 'workspaces:DescribeWorkspaceAssociations',
  /**
   * Grants permission to obtain information about WorkSpace bundles
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceBundles.html
   */
  DescribeWorkspaceBundles = 'workspaces:DescribeWorkspaceBundles',
  /**
   * Grants permission to retrieve information about directories that are registered
   * with WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html
   */
  DescribeWorkspaceDirectories = 'workspaces:DescribeWorkspaceDirectories',
  /**
   * Grants permission to retrieve information about WorkSpace image permissions
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html
   */
  DescribeWorkspaceImagePermissions = 'workspaces:DescribeWorkspaceImagePermissions',
  /**
   * Grants permission to retrieve information about WorkSpace images
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html
   */
  DescribeWorkspaceImages = 'workspaces:DescribeWorkspaceImages',
  /**
   * Grants permission to retrieve information about WorkSpace snapshots
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceSnapshots.html
   */
  DescribeWorkspaceSnapshots = 'workspaces:DescribeWorkspaceSnapshots',
  /**
   * Grants permission to obtain information about WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html
   */
  DescribeWorkspaces = 'workspaces:DescribeWorkspaces',
  /**
   * Grants permission to obtain the connection status of WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspacesConnectionStatus.html
   */
  DescribeWorkspacesConnectionStatus = 'workspaces:DescribeWorkspacesConnectionStatus',
  /**
   * Grants permission to retrieve information about the sessions of a WorkSpaces Po
   * ol
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspacesPoolSessions.html
   */
  DescribeWorkspacesPoolSessions = 'workspaces:DescribeWorkspacesPoolSessions',
  /**
   * Grants permission to retrieve information about WorkSpaces Pools
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspacesPools.html
   */
  DescribeWorkspacesPools = 'workspaces:DescribeWorkspacesPools',
  /**
   * Grants permission to disassociate connection aliases from directories
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateConnectionAlias.html
   */
  DisassociateConnectionAlias = 'workspaces:DisassociateConnectionAlias',
  /**
   * Grants permission to disassociate IP access control groups from directories
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateIpGroups.html
   */
  DisassociateIpGroups = 'workspaces:DisassociateIpGroups',
  /**
   * Grants permission to disassociate a workspace application from a WorkSpace
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateWorkspaceApplication.html
   */
  DisassociateWorkspaceApplication = 'workspaces:DisassociateWorkspaceApplication',
  /**
   * Grants permission to retrieve a link with another AWS Account for sharing confi
   * guration for WorkSpaces BYOL
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_GetAccountLink.html
   */
  GetAccountLink = 'workspaces:GetAccountLink',
  /**
   * Grants permission to import AWS WorkSpaces Client branding data within a direct
   * ory
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ImportClientBranding.html
   */
  ImportClientBranding = 'workspaces:ImportClientBranding',
  /**
   * Grants permission to import Bring Your Own License (BYOL) images into Amazon Wo
   * rkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ImportWorkspaceImage.html
   */
  ImportWorkspaceImage = 'workspaces:ImportWorkspaceImage',
  /**
   * Grants permission to retrieve links with the AWS Account(s) that share your con
   * figuration for WorkSpaces BYOL
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ListAccountLinks.html
   */
  ListAccountLinks = 'workspaces:ListAccountLinks',
  /**
   * Grants permission to list the available CIDR ranges for enabling Bring Your Own
   * License (BYOL) for WorkSpaces accounts
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ListAvailableManagementCidrRanges.html
   */
  ListAvailableManagementCidrRanges = 'workspaces:ListAvailableManagementCidrRanges',
  /**
   * Grants permission to migrate WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_MigrateWorkspace.html
   */
  MigrateWorkspace = 'workspaces:MigrateWorkspace',
  /**
   * Grants permission to modify the configuration of Bring Your Own License (BYOL)
   * for WorkSpaces accounts
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyAccount.html
   */
  ModifyAccount = 'workspaces:ModifyAccount',
  /**
   * Grants permission to modify the certificate-based authorization properties of a
   * directory
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyCertificateBasedAuthProperties.html
   */
  ModifyCertificateBasedAuthProperties = 'workspaces:ModifyCertificateBasedAuthProperties',
  /**
   * Grants permission to modify the properties of WorkSpaces clients
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyClientProperties.html
   */
  ModifyClientProperties = 'workspaces:ModifyClientProperties',
  /**
   * Grants permission to modify the SAML properties of a directory
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifySamlProperties.html
   */
  ModifySamlProperties = 'workspaces:ModifySamlProperties',
  /**
   * Grants permission to modify the self-service WorkSpace management capabilities
   * for your users
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifySelfservicePermissions.html
   */
  ModifySelfservicePermissions = 'workspaces:ModifySelfservicePermissions',
  /**
   * Grants permission to modify the streaming properties
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyStreamingProperties.html
   */
  ModifyStreamingProperties = 'workspaces:ModifyStreamingProperties',
  /**
   * Grants permission to specify which devices and operating systems users can use
   * to access their WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceAccessProperties.html
   */
  ModifyWorkspaceAccessProperties = 'workspaces:ModifyWorkspaceAccessProperties',
  /**
   * Grants permission to modify the default properties used to create WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceCreationProperties.html
   */
  ModifyWorkspaceCreationProperties = 'workspaces:ModifyWorkspaceCreationProperties',
  /**
   * Grants permission to modify WorkSpace properties, including the running mode an
   * d the AutoStop period
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceProperties.html
   */
  ModifyWorkspaceProperties = 'workspaces:ModifyWorkspaceProperties',
  /**
   * Grants permission to modify the state of WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceState.html
   */
  ModifyWorkspaceState = 'workspaces:ModifyWorkspaceState',
  /**
   * Grants permission to reboot WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_RebootWorkspaces.html
   */
  RebootWorkspaces = 'workspaces:RebootWorkspaces',
  /**
   * Grants permission to rebuild WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_RebuildWorkspaces.html
   */
  RebuildWorkspaces = 'workspaces:RebuildWorkspaces',
  /**
   * Grants permission to register directories for use with Amazon WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_RegisterWorkspaceDirectory.html
   */
  RegisterWorkspaceDirectory = 'workspaces:RegisterWorkspaceDirectory',
  /**
   * Grants permission to reject invitations from other AWS accounts to share the sa
   * me configuration for WorkSpaces BYOL
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_RejectAccountLinkInvitation.html
   */
  RejectAccountLinkInvitation = 'workspaces:RejectAccountLinkInvitation',
  /**
   * Grants permission to restore WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_RestoreWorkspace.html
   */
  RestoreWorkspace = 'workspaces:RestoreWorkspace',
  /**
   * Grants permission to remove rules from IP access control groups
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_RevokeIpRules.html
   */
  RevokeIpRules = 'workspaces:RevokeIpRules',
  /**
   * Grants permission to start AutoStop WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_StartWorkspaces.html
   */
  StartWorkspaces = 'workspaces:StartWorkspaces',
  /**
   * Grants permission to start a WorkSpaces Pool
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_StartWorkspacesPool.html
   */
  StartWorkspacesPool = 'workspaces:StartWorkspacesPool',
  /**
   * Grants permission to stop AutoStop WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_StopWorkspaces.html
   */
  StopWorkspaces = 'workspaces:StopWorkspaces',
  /**
   * Grants permission to stop a WorkSpaces Pool
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_StopWorkspacesPool.html
   */
  StopWorkspacesPool = 'workspaces:StopWorkspacesPool',
  /**
   * Grants permission to federated users to sign in by using their existing credent
   * ials and stream their workspace
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_Stream.html
   */
  Stream = 'workspaces:Stream',
  /**
   * Grants permission to terminate WorkSpaces
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_TerminateWorkspaces.html
   */
  TerminateWorkspaces = 'workspaces:TerminateWorkspaces',
  /**
   * Grants permission to terminate a WorkSpaces Pool
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_TerminateWorkspacesPool.html
   */
  TerminateWorkspacesPool = 'workspaces:TerminateWorkspacesPool',
  /**
   * Grants permission to terminate a WorkSpaces Pool session
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_TerminateWorkspacesPoolSession.html
   */
  TerminateWorkspacesPoolSession = 'workspaces:TerminateWorkspacesPoolSession',
  /**
   * Grants permission to update an Amazon Connect client add-in. Use this action to
   * update the name and endpoint URL of an Amazon Connect client add-in
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateConnectClientAddIn.html
   */
  UpdateConnectClientAddIn = 'workspaces:UpdateConnectClientAddIn',
  /**
   * Grants permission to share or unshare connection aliases with other accounts
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateConnectionAliasPermission.html
   */
  UpdateConnectionAliasPermission = 'workspaces:UpdateConnectionAliasPermission',
  /**
   * Grants permission to replace rules for IP access control groups
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateRulesOfIpGroup.html
   */
  UpdateRulesOfIpGroup = 'workspaces:UpdateRulesOfIpGroup',
  /**
   * Grants permission to update the WorkSpace images used in WorkSpace bundles
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateWorkspaceBundle.html
   */
  UpdateWorkspaceBundle = 'workspaces:UpdateWorkspaceBundle',
  /**
   * Grants permission to share or unshare WorkSpace images with other accounts by s
   * pecifying whether other accounts have permission to copy the image
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateWorkspaceImagePermission.html
   */
  UpdateWorkspaceImagePermission = 'workspaces:UpdateWorkspaceImagePermission',
  /**
   * Grants permission to update the WorkSpaces pool
   *
   * See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateWorkspacesPool.html
   */
  UpdateWorkspacesPool = 'workspaces:UpdateWorkspacesPool',
}
