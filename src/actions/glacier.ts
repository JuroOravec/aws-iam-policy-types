// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon S3 Glacier (GLACIER)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3glacier.html
 *
 * 2025-02-24T21:49:33.578Z
 */
export enum AwsGlacierActions {
  /**
   * Grants permission to abort a multipart upload identified by the upload ID
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html
   */
  AbortMultipartUpload = 'glacier:AbortMultipartUpload',
  /**
   * Grants permission to abort the vault locking process if the vault lock is not i
   * n the Locked state
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AbortVaultLock.html
   */
  AbortVaultLock = 'glacier:AbortVaultLock',
  /**
   * Grants permission to add the specified tags to a vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AddTagsToVault.html
   */
  AddTagsToVault = 'glacier:AddTagsToVault',
  /**
   * Grants permission to complete a multipart upload process
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html
   */
  CompleteMultipartUpload = 'glacier:CompleteMultipartUpload',
  /**
   * Grants permission to complete the vault locking process
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-CompleteVaultLock.html
   */
  CompleteVaultLock = 'glacier:CompleteVaultLock',
  /**
   * Grants permission to create a new vault with the specified name
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html
   */
  CreateVault = 'glacier:CreateVault',
  /**
   * Grants permission to delete an archive from a vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html
   */
  DeleteArchive = 'glacier:DeleteArchive',
  /**
   * Grants permission to delete a vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html
   */
  DeleteVault = 'glacier:DeleteVault',
  /**
   * Grants permission to delete the access policy associated with the specified vau
   * lt
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-DeleteVaultAccessPolicy.html
   */
  DeleteVaultAccessPolicy = 'glacier:DeleteVaultAccessPolicy',
  /**
   * Grants permission to delete the notification configuration set for a vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html
   */
  DeleteVaultNotifications = 'glacier:DeleteVaultNotifications',
  /**
   * Grants permission to get information about a job previously initiated
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html
   */
  DescribeJob = 'glacier:DescribeJob',
  /**
   * Grants permission to get information about a vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html
   */
  DescribeVault = 'glacier:DescribeVault',
  /**
   * Grants permission to get the data retrieval policy
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetDataRetrievalPolicy.html
   */
  GetDataRetrievalPolicy = 'glacier:GetDataRetrievalPolicy',
  /**
   * Grants permission to download the output of the job specified
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html
   */
  GetJobOutput = 'glacier:GetJobOutput',
  /**
   * Grants permission to retrieve the access-policy subresource set on the vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultAccessPolicy.html
   */
  GetVaultAccessPolicy = 'glacier:GetVaultAccessPolicy',
  /**
   * Grants permission to retrieve attributes from the lock-policy subresource set o
   * n the specified vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultLock.html
   */
  GetVaultLock = 'glacier:GetVaultLock',
  /**
   * Grants permission to retrieve the notification-configuration subresource set on
   * the vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html
   */
  GetVaultNotifications = 'glacier:GetVaultNotifications',
  /**
   * Grants permission to initiate a job of the specified type
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html
   */
  InitiateJob = 'glacier:InitiateJob',
  /**
   * Grants permission to initiate a multipart upload
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html
   */
  InitiateMultipartUpload = 'glacier:InitiateMultipartUpload',
  /**
   * Grants permission to initiate the vault locking process
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-InitiateVaultLock.html
   */
  InitiateVaultLock = 'glacier:InitiateVaultLock',
  /**
   * Grants permission to list jobs for a vault that are in-progress and jobs that h
   * ave recently finished
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html
   */
  ListJobs = 'glacier:ListJobs',
  /**
   * Grants permission to list in-progress multipart uploads for the specified vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html
   */
  ListMultipartUploads = 'glacier:ListMultipartUploads',
  /**
   * Grants permission to list the parts of an archive that have been uploaded in a
   * specific multipart upload
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html
   */
  ListParts = 'glacier:ListParts',
  /**
   * Grants permission to list the provisioned capacity for the specified AWS accoun
   * t
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListProvisionedCapacity.html
   */
  ListProvisionedCapacity = 'glacier:ListProvisionedCapacity',
  /**
   * Grants permission to list all the tags attached to a vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListTagsForVault.html
   */
  ListTagsForVault = 'glacier:ListTagsForVault',
  /**
   * Grants permission to list all vaults
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html
   */
  ListVaults = 'glacier:ListVaults',
  /**
   * Grants permission to purchases a provisioned capacity unit for an AWS account
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-PurchaseProvisionedCapacity.html
   */
  PurchaseProvisionedCapacity = 'glacier:PurchaseProvisionedCapacity',
  /**
   * Grants permission to remove one or more tags from the set of tags attached to a
   * vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-RemoveTagsFromVault.html
   */
  RemoveTagsFromVault = 'glacier:RemoveTagsFromVault',
  /**
   * Grants permission to set and then enacts a data retrieval policy in the region
   * specified in the PUT request
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetDataRetrievalPolicy.html
   */
  SetDataRetrievalPolicy = 'glacier:SetDataRetrievalPolicy',
  /**
   * Grants permission to configure an access policy for a vault; will overwrite an
   * existing policy
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html
   */
  SetVaultAccessPolicy = 'glacier:SetVaultAccessPolicy',
  /**
   * Grants permission to configure vault notifications
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html
   */
  SetVaultNotifications = 'glacier:SetVaultNotifications',
  /**
   * Grants permission to upload an archive to a vault
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html
   */
  UploadArchive = 'glacier:UploadArchive',
  /**
   * Grants permission to upload a part of an archive
   *
   * See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html
   */
  UploadMultipartPart = 'glacier:UploadMultipartPart',
}
