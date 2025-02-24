// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Account Management (ACCOUNT)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsaccountmanagement.html
 *
 * 2025-02-24T21:46:32.436Z
 */
export enum AwsAccountActions {
  /**
   * Grants permission to accept the process to update the primary email address of
   * an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_AcceptPrimaryEmailUpdate.html
   */
  AcceptPrimaryEmailUpdate = 'account:AcceptPrimaryEmailUpdate',
  /**
   * Grants permission to close an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/security_account-permissions-ref.html
   */
  CloseAccount = 'account:CloseAccount',
  /**
   * Grants permission to delete the alternate contacts for an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_DeleteAlternateContact.html
   */
  DeleteAlternateContact = 'account:DeleteAlternateContact',
  /**
   * Grants permission to disable use of a Region
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_DisableRegion.html
   */
  DisableRegion = 'account:DisableRegion',
  /**
   * Grants permission to enable use of a Region
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_EnableRegion.html
   */
  EnableRegion = 'account:EnableRegion',
  /**
   * Grants permission to retrieve the account information for an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/security_account-permissions-ref.html
   */
  GetAccountInformation = 'account:GetAccountInformation',
  /**
   * Grants permission to retrieve the alternate contacts for an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_GetAlternateContact.html
   */
  GetAlternateContact = 'account:GetAlternateContact',
  /**
   * Grants permission to retrieve the challenge questions for an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/security_account-permissions-ref.html
   */
  GetChallengeQuestions = 'account:GetChallengeQuestions',
  /**
   * Grants permission to retrieve the primary contact information for an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_GetContactInformation.html
   */
  GetContactInformation = 'account:GetContactInformation',
  /**
   * Grants permission to retrieve the primary email address of an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_GetPrimaryEmail.html
   */
  GetPrimaryEmail = 'account:GetPrimaryEmail',
  /**
   * Grants permission to get the opt-in status of a Region
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_GetRegionOptStatus.html
   */
  GetRegionOptStatus = 'account:GetRegionOptStatus',
  /**
   * Grants permission to list the available Regions
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_ListRegions.html
   */
  ListRegions = 'account:ListRegions',
  /**
   * Grants permission to modify the alternate contacts for an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_PutAlternateContact.html
   */
  PutAlternateContact = 'account:PutAlternateContact',
  /**
   * Grants permission to modify the challenge questions for an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/security_account-permissions-ref.html
   */
  PutChallengeQuestions = 'account:PutChallengeQuestions',
  /**
   * Grants permission to update the primary contact information for an account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_PutContactInformation.html
   */
  PutContactInformation = 'account:PutContactInformation',
  /**
   * Grants permission to start the process to update the primary email address of a
   * n account
   *
   * See https://docs.aws.amazon.com/accounts/latest/reference/API_StartPrimaryEmailUpdate.html
   */
  StartPrimaryEmailUpdate = 'account:StartPrimaryEmailUpdate',
}
