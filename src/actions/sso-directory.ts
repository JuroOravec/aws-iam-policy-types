// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS IAM Identity Center (successor to AWS Single Sign-On) directory (SSO-DIRECTORY)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamidentitycentersuccessortoawssinglesign-ondirectory.html
 *
 * 2025-02-24T21:48:14.055Z
 */
export enum AwsSsoDirectoryActions {
  /**
   * Grants permission to add a member to a group in the directory that AWS IAM Iden
   * tity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_CreateGroupMembership.html
   */
  AddMemberToGroup = 'sso-directory:AddMemberToGroup',
  /**
   * Grants permission to complete the creation process of a virtual MFA device
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CompleteVirtualMfaDeviceRegistration = 'sso-directory:CompleteVirtualMfaDeviceRegistration',
  /**
   * Grants permission to complete the registration process of a WebAuthn device
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CompleteWebAuthnDeviceRegistration = 'sso-directory:CompleteWebAuthnDeviceRegistration',
  /**
   * Grants permission to create an alias for the directory that AWS IAM Identity Ce
   * nter provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateAlias = 'sso-directory:CreateAlias',
  /**
   * Grants permission to create a bearer token for a given provisioning tenant
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateBearerToken = 'sso-directory:CreateBearerToken',
  /**
   * Grants permission to create an External Identity Provider configuration for the
   * directory
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateExternalIdPConfigurationForDirectory = 'sso-directory:CreateExternalIdPConfigurationForDirectory',
  /**
   * Grants permission to create a group in the directory that AWS IAM Identity Cent
   * er provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_CreateGroup.html
   */
  CreateGroup = 'sso-directory:CreateGroup',
  /**
   * Grants permission to create a provisioning tenant for a given directory
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateProvisioningTenant = 'sso-directory:CreateProvisioningTenant',
  /**
   * Grants permission to create a user in the directory that AWS IAM Identity Cente
   * r provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_CreateUser.html
   */
  CreateUser = 'sso-directory:CreateUser',
  /**
   * Grants permission to delete a bearer token
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteBearerToken = 'sso-directory:DeleteBearerToken',
  /**
   * Grants permission to delete the given external IdP certificate
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteExternalIdPCertificate = 'sso-directory:DeleteExternalIdPCertificate',
  /**
   * Grants permission to delete an External Identity Provider configuration associa
   * ted with the directory
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteExternalIdPConfigurationForDirectory = 'sso-directory:DeleteExternalIdPConfigurationForDirectory',
  /**
   * Grants permission to delete a group from the directory that AWS IAM Identity Ce
   * nter provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DeleteGroup.html
   */
  DeleteGroup = 'sso-directory:DeleteGroup',
  /**
   * Grants permission to delete a MFA device by device name for a given user
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteMfaDeviceForUser = 'sso-directory:DeleteMfaDeviceForUser',
  /**
   * Grants permission to delete the provisioning tenant
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteProvisioningTenant = 'sso-directory:DeleteProvisioningTenant',
  /**
   * Grants permission to delete a user from the directory that AWS IAM Identity Cen
   * ter provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DeleteUser.html
   */
  DeleteUser = 'sso-directory:DeleteUser',
  /**
   * Grants permission to retrieve information about the directory that AWS IAM Iden
   * tity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeDirectory = 'sso-directory:DescribeDirectory',
  /**
   * Grants permission to query the group data, not including user and group members
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeGroup.html
   */
  DescribeGroup = 'sso-directory:DescribeGroup',
  /**
   * Grants permission to retrieve information about groups from the directory that
   * AWS IAM Identity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeGroup.html
   */
  DescribeGroups = 'sso-directory:DescribeGroups',
  /**
   * Grants permission to describes the provisioning tenant
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeProvisioningTenant = 'sso-directory:DescribeProvisioningTenant',
  /**
   * Grants permission to retrieve information about a user from the directory that
   * AWS IAM Identity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeUser.html
   */
  DescribeUser = 'sso-directory:DescribeUser',
  /**
   * Grants permission to describe user with a valid unique attribute represented fo
   * r the user
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeUserByUniqueAttribute = 'sso-directory:DescribeUserByUniqueAttribute',
  /**
   * Grants permission to retrieve information about user from the directory that AW
   * S IAM Identity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeUser.html
   */
  DescribeUsers = 'sso-directory:DescribeUsers',
  /**
   * Grants permission to disable authentication of end users with an External Ident
   * ity Provider
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DisableExternalIdPConfigurationForDirectory = 'sso-directory:DisableExternalIdPConfigurationForDirectory',
  /**
   * Grants permission to deactivate a user in the directory that AWS IAM Identity C
   * enter provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DisableUser = 'sso-directory:DisableUser',
  /**
   * Grants permission to enable authentication of end users with an External Identi
   * ty Provider
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  EnableExternalIdPConfigurationForDirectory = 'sso-directory:EnableExternalIdPConfigurationForDirectory',
  /**
   * Grants permission to activate user in the directory that AWS IAM Identity Cente
   * r provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  EnableUser = 'sso-directory:EnableUser',
  /**
   * Grants permission to retrieve the AWS IAM Identity Center Service Provider conf
   * igurations for the directory
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetAWSSPConfigurationForDirectory = 'sso-directory:GetAWSSPConfigurationForDirectory',
  /**
   * Grants permission to retrieve ID information about group from the directory tha
   * t AWS IAM Identity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_GetGroupId.html
   */
  GetGroupId = 'sso-directory:GetGroupId',
  /**
   * Grants permission to retrieve ID information about user from the directory that
   * AWS IAM Identity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_GetUserId.html
   */
  GetUserId = 'sso-directory:GetUserId',
  /**
   * (Deprecated) Grants permission to get UserPool Info
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetUserPoolInfo = 'sso-directory:GetUserPoolInfo',
  /**
   * Grants permission to import the IdP certificate used for verifying external IdP
   * responses
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ImportExternalIdPCertificate = 'sso-directory:ImportExternalIdPCertificate',
  /**
   * Grants permission to check if a member is a part of the group in the directory
   * that AWS IAM Identity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_IsMemberInGroups.html
   */
  IsMemberInGroup = 'sso-directory:IsMemberInGroup',
  /**
   * Grants permission to list bearer tokens for a given provisioning tenant
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListBearerTokens = 'sso-directory:ListBearerTokens',
  /**
   * Grants permission to list the external IdP certificates of a given directory an
   * d IdP
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListExternalIdPCertificates = 'sso-directory:ListExternalIdPCertificates',
  /**
   * Grants permission to list all the External Identity Provider configurations cre
   * ated for the directory
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListExternalIdPConfigurationsForDirectory = 'sso-directory:ListExternalIdPConfigurationsForDirectory',
  /**
   * Grants permission to list groups from the directory that AWS IAM Identity Cente
   * r provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroups.html
   */
  ListGroups = 'sso-directory:ListGroups',
  /**
   * Grants permission to list groups of the target member
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroupMembershipsForMember.html
   */
  ListGroupsForMember = 'sso-directory:ListGroupsForMember',
  /**
   * Grants permission to list groups for a user from the directory that AWS IAM Ide
   * ntity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroupMembershipsForMember.html
   */
  ListGroupsForUser = 'sso-directory:ListGroupsForUser',
  /**
   * Grants permission to retrieve all members that are part of a group in the direc
   * tory that AWS IAM Identity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroupMemberships.html
   */
  ListMembersInGroup = 'sso-directory:ListMembersInGroup',
  /**
   * Grants permission to list all active MFA devices and their MFA device metadata
   * for a user
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListMfaDevicesForUser = 'sso-directory:ListMfaDevicesForUser',
  /**
   * Grants permission to list provisioning tenants for a given directory
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListProvisioningTenants = 'sso-directory:ListProvisioningTenants',
  /**
   * Grants permission to list users from the directory that AWS IAM Identity Center
   * provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListUsers.html
   */
  ListUsers = 'sso-directory:ListUsers',
  /**
   * Grants permission to remove a member that is part of a group in the directory t
   * hat AWS IAM Identity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DeleteGroupMembership.html
   */
  RemoveMemberFromGroup = 'sso-directory:RemoveMemberFromGroup',
  /**
   * Grants permission to search for groups within the associated directory
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  SearchGroups = 'sso-directory:SearchGroups',
  /**
   * Grants permission to search for users within the associated directory
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  SearchUsers = 'sso-directory:SearchUsers',
  /**
   * Grants permission to begin the creation process of virtual mfa device
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  StartVirtualMfaDeviceRegistration = 'sso-directory:StartVirtualMfaDeviceRegistration',
  /**
   * Grants permission to begin the registration process of a WebAuthn device
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  StartWebAuthnDeviceRegistration = 'sso-directory:StartWebAuthnDeviceRegistration',
  /**
   * Grants permission to update an External Identity Provider configuration associa
   * ted with the directory
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateExternalIdPConfigurationForDirectory = 'sso-directory:UpdateExternalIdPConfigurationForDirectory',
  /**
   * Grants permission to update information about a group in the directory that AWS
   * IAM Identity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_UpdateGroup.html
   */
  UpdateGroup = 'sso-directory:UpdateGroup',
  /**
   * Grants permission to update group display name update group display name respon
   * se
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateGroupDisplayName = 'sso-directory:UpdateGroupDisplayName',
  /**
   * Grants permission to update MFA device information
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateMfaDeviceForUser = 'sso-directory:UpdateMfaDeviceForUser',
  /**
   * Grants permission to update a password by sending password reset link via email
   * or generating one time password for a user in the directory that AWS IAM Identi
   * ty Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdatePassword = 'sso-directory:UpdatePassword',
  /**
   * Grants permission to update user information in the directory that AWS IAM Iden
   * tity Center provides by default
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_UpdateUser.html
   */
  UpdateUser = 'sso-directory:UpdateUser',
  /**
   * Grants permission to update user name update user name response
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateUserName = 'sso-directory:UpdateUserName',
  /**
   * Grants permission to verify an email address of an User
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  VerifyEmail = 'sso-directory:VerifyEmail',
}
