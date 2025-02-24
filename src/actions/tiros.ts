// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Tiros (TIROS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstiros.html
 *
 * 2025-02-24T21:50:00.838Z
 */
export enum AwsTirosActions {
  /**
   * Grants permission to create a VPC reachability query
   *
   * See https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  CreateQuery = 'tiros:CreateQuery',
  /**
   * Grants permission to extend a VPC reachability query to include the calling pri
   * ncipals account
   *
   * See https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  ExtendQuery = 'tiros:ExtendQuery',
  /**
   * Grants permission to get VPC reachability query answers
   *
   * See https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  GetQueryAnswer = 'tiros:GetQueryAnswer',
  /**
   * Grants permission to get VPC reachability query explanations
   *
   * See https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  GetQueryExplanation = 'tiros:GetQueryExplanation',
  /**
   * Grants permission to list accounts that might be useful in a new query
   *
   * See https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  GetQueryExtensionAccounts = 'tiros:GetQueryExtensionAccounts',
}
