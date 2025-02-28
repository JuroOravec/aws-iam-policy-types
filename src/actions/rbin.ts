// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Recycle Bin (RBIN)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrecyclebin.html
 *
 * 2025-02-24T21:49:22.478Z
 */
export enum AwsRbinActions {
  /**
   * Grants permission to create a Recycle Bin retention rule
   *
   * See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_CreateRule.html
   */
  CreateRule = 'rbin:CreateRule',
  /**
   * Grants permission to delete a Recycle Bin retention rule
   *
   * See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_DeleteRule.html
   */
  DeleteRule = 'rbin:DeleteRule',
  /**
   * Grants permission to get detailed information about a Recycle Bin retention rul
   * e
   *
   * See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_GetRule.html
   */
  GetRule = 'rbin:GetRule',
  /**
   * Grants permission to list the Recycle Bin retention rules in the Region
   *
   * See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_ListRules.html
   */
  ListRules = 'rbin:ListRules',
  /**
   * Grants permission to list the tags associated with a resource
   *
   * See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'rbin:ListTagsForResource',
  /**
   * Grants permission to lock an existing Recycle Bin retention rule
   *
   * See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_LockRule.html
   */
  LockRule = 'rbin:LockRule',
  /**
   * Grants permission to add or update tags of a resource
   *
   * See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_TagResource.html
   */
  TagResource = 'rbin:TagResource',
  /**
   * Grants permission to unlock an existing Recycle Bin retention rule
   *
   * See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_UnlockRule.html
   */
  UnlockRule = 'rbin:UnlockRule',
  /**
   * Grants permission to remove tags associated with a resource
   *
   * See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'rbin:UntagResource',
  /**
   * Grants permission to update an existing Recycle Bin retention rule
   *
   * See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_UpdateRule.html
   */
  UpdateRule = 'rbin:UpdateRule',
}
