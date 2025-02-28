// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon CodeCatalyst (CODECATALYST)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodecatalyst.html
 *
 * 2025-02-24T21:47:12.914Z
 */
export enum AwsCodecatalystActions {
  /**
   * Grants permission to accept a request to connect this account to an Amazon Code
   * Catalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  AcceptConnection = 'codecatalyst:AcceptConnection',
  /**
   * Grants permission to associate an IAM role to a connection
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  AssociateIamRoleToConnection = 'codecatalyst:AssociateIamRoleToConnection',
  /**
   * Grants permission to associate an IAM Identity Center application with an Amazo
   * n CodeCatalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  AssociateIdentityCenterApplicationToSpace = 'codecatalyst:AssociateIdentityCenterApplicationToSpace',
  /**
   * Grants permission to associate an identity with an IAM Identity Center applicat
   * ion for an Amazon CodeCatalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  AssociateIdentityToIdentityCenterApplication = 'codecatalyst:AssociateIdentityToIdentityCenterApplication',
  /**
   * Grants permission to associate multiple identities with an IAM Identity Center
   * application for an Amazon CodeCatalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  BatchAssociateIdentitiesToIdentityCenterApplication = 'codecatalyst:BatchAssociateIdentitiesToIdentityCenterApplication',
  /**
   * Grants permission to disassociate multiple identities from an IAM Identity Cent
   * er application for an Amazon CodeCatalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  BatchDisassociateIdentitiesFromIdentityCenterApplication = 'codecatalyst:BatchDisassociateIdentitiesFromIdentityCenterApplication',
  /**
   * Grants permission to create an IAM Identity Center application
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  CreateIdentityCenterApplication = 'codecatalyst:CreateIdentityCenterApplication',
  /**
   * Grants permission to create an Amazon CodeCatalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  CreateSpace = 'codecatalyst:CreateSpace',
  /**
   * Grants permission to create an administrator role assignment for a given Amazon
   * CodeCatalyst space and IAM Identity Center application
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  CreateSpaceAdminRoleAssignment = 'codecatalyst:CreateSpaceAdminRoleAssignment',
  /**
   * Grants permission to delete a connection
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  DeleteConnection = 'codecatalyst:DeleteConnection',
  /**
   * Grants permission to delete an IAM Identity Center application
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  DeleteIdentityCenterApplication = 'codecatalyst:DeleteIdentityCenterApplication',
  /**
   * Grants permission to disassociate an IAM role from a connection
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  DisassociateIamRoleFromConnection = 'codecatalyst:DisassociateIamRoleFromConnection',
  /**
   * Grants permission to disassociate an IAM Identity Center application from an Am
   * azon CodeCatalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  DisassociateIdentityCenterApplicationFromSpace = 'codecatalyst:DisassociateIdentityCenterApplicationFromSpace',
  /**
   * Grants permission to disassociate an identity from an IAM Identity Center appli
   * cation for an Amazon CodeCatalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  DisassociateIdentityFromIdentityCenterApplication = 'codecatalyst:DisassociateIdentityFromIdentityCenterApplication',
  /**
   * Grants permission to describe the billing authorization for a connection
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  GetBillingAuthorization = 'codecatalyst:GetBillingAuthorization',
  /**
   * Grants permission to get a connection
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  GetConnection = 'codecatalyst:GetConnection',
  /**
   * Grants permission to get information about an IAM Identity Center application
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  GetIdentityCenterApplication = 'codecatalyst:GetIdentityCenterApplication',
  /**
   * Grants permission to get a pending request to connect this account to an Amazon
   * CodeCatalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  GetPendingConnection = 'codecatalyst:GetPendingConnection',
  /**
   * Grants permission to list connections that are not pending
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  ListConnections = 'codecatalyst:ListConnections',
  /**
   * Grants permission to list IAM roles associated with a connection
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  ListIamRolesForConnection = 'codecatalyst:ListIamRolesForConnection',
  /**
   * Grants permission to view a list of all IAM Identity Center applications in the
   * account
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  ListIdentityCenterApplications = 'codecatalyst:ListIdentityCenterApplications',
  /**
   * Grants permission to view a list of IAM Identity Center applications by Amazon
   * CodeCatalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  ListIdentityCenterApplicationsForSpace = 'codecatalyst:ListIdentityCenterApplicationsForSpace',
  /**
   * Grants permission to view a list of Amazon CodeCatalyst spaces by IAM Identity
   * Center application
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  ListSpacesForIdentityCenterApplication = 'codecatalyst:ListSpacesForIdentityCenterApplication',
  /**
   * Grants permission to list tags for an Amazon CodeCatalyst resource
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  ListTagsForResource = 'codecatalyst:ListTagsForResource',
  /**
   * Grants permission to create or update the billing authorization for a connectio
   * n
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  PutBillingAuthorization = 'codecatalyst:PutBillingAuthorization',
  /**
   * Grants permission to reject a request to connect this account to an Amazon Code
   * Catalyst space
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  RejectConnection = 'codecatalyst:RejectConnection',
  /**
   * Grants permission to synchronize an IAM Identity Center application with the ba
   * cking identity store
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  SynchronizeIdentityCenterApplication = 'codecatalyst:SynchronizeIdentityCenterApplication',
  /**
   * Grants permission to tag an Amazon CodeCatalyst resource
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  TagResource = 'codecatalyst:TagResource',
  /**
   * Grants permission to untag an Amazon CodeCatalyst resource
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  UntagResource = 'codecatalyst:UntagResource',
  /**
   * Grants permission to update an IAM Identity Center application
   *
   * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  UpdateIdentityCenterApplication = 'codecatalyst:UpdateIdentityCenterApplication',
}
