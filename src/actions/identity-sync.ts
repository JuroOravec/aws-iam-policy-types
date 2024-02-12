// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Identity Sync (IDENTITY-SYNC)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitysync.html
 *
 * 2024-02-12T09:57:41.932Z
 */
export enum AwsIdentitySyncActions {
  /**
   * Grants permission to create a sync filter on the sync profile
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  CreateSyncFilter = 'identity-sync:CreateSyncFilter',
  /**
   * Grants permission to create a sync profile for the identity source
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  CreateSyncProfile = 'identity-sync:CreateSyncProfile',
  /**
   * Grants permission to create a sync target for the identity source
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  CreateSyncTarget = 'identity-sync:CreateSyncTarget',
  /**
   * Grants permission to delete a sync filter from the sync profile
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  DeleteSyncFilter = 'identity-sync:DeleteSyncFilter',
  /**
   * Grants permission to delete a sync profile from the source
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  DeleteSyncProfile = 'identity-sync:DeleteSyncProfile',
  /**
   * Grants permission to delete a sync target from the source
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  DeleteSyncTarget = 'identity-sync:DeleteSyncTarget',
  /**
   * Grants permission to retrieve a sync profile by using a sync profile name
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  GetSyncProfile = 'identity-sync:GetSyncProfile',
  /**
   * Grants permission to retrieve a sync target from the sync profile
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  GetSyncTarget = 'identity-sync:GetSyncTarget',
  /**
   * Grants permission to list the sync filters from the sync profile
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  ListSyncFilters = 'identity-sync:ListSyncFilters',
  /**
   * Grants permission to start a sync process or to resume a sync process that was
   * previously paused
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  StartSync = 'identity-sync:StartSync',
  /**
   * Grants permission to stop any planned sync process in the sync schedule from st
   * arting
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  StopSync = 'identity-sync:StopSync',
  /**
   * Grants permission to update a sync target on the sync profile
   *
   * See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  UpdateSyncTarget = 'identity-sync:UpdateSyncTarget',
}