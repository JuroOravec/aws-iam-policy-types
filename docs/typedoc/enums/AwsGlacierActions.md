[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsGlacierActions

# Enumeration: AwsGlacierActions

All IAM policy actions for Amazon S3 Glacier (GLACIER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3glacier.html

2024-02-12T09:59:04.180Z

## Table of contents

### Enumeration Members

- [AbortMultipartUpload](AwsGlacierActions.md#abortmultipartupload)
- [AbortVaultLock](AwsGlacierActions.md#abortvaultlock)
- [AddTagsToVault](AwsGlacierActions.md#addtagstovault)
- [CompleteMultipartUpload](AwsGlacierActions.md#completemultipartupload)
- [CompleteVaultLock](AwsGlacierActions.md#completevaultlock)
- [CreateVault](AwsGlacierActions.md#createvault)
- [DeleteArchive](AwsGlacierActions.md#deletearchive)
- [DeleteVault](AwsGlacierActions.md#deletevault)
- [DeleteVaultAccessPolicy](AwsGlacierActions.md#deletevaultaccesspolicy)
- [DeleteVaultNotifications](AwsGlacierActions.md#deletevaultnotifications)
- [DescribeJob](AwsGlacierActions.md#describejob)
- [DescribeVault](AwsGlacierActions.md#describevault)
- [GetDataRetrievalPolicy](AwsGlacierActions.md#getdataretrievalpolicy)
- [GetJobOutput](AwsGlacierActions.md#getjoboutput)
- [GetVaultAccessPolicy](AwsGlacierActions.md#getvaultaccesspolicy)
- [GetVaultLock](AwsGlacierActions.md#getvaultlock)
- [GetVaultNotifications](AwsGlacierActions.md#getvaultnotifications)
- [InitiateJob](AwsGlacierActions.md#initiatejob)
- [InitiateMultipartUpload](AwsGlacierActions.md#initiatemultipartupload)
- [InitiateVaultLock](AwsGlacierActions.md#initiatevaultlock)
- [ListJobs](AwsGlacierActions.md#listjobs)
- [ListMultipartUploads](AwsGlacierActions.md#listmultipartuploads)
- [ListParts](AwsGlacierActions.md#listparts)
- [ListProvisionedCapacity](AwsGlacierActions.md#listprovisionedcapacity)
- [ListTagsForVault](AwsGlacierActions.md#listtagsforvault)
- [ListVaults](AwsGlacierActions.md#listvaults)
- [PurchaseProvisionedCapacity](AwsGlacierActions.md#purchaseprovisionedcapacity)
- [RemoveTagsFromVault](AwsGlacierActions.md#removetagsfromvault)
- [SetDataRetrievalPolicy](AwsGlacierActions.md#setdataretrievalpolicy)
- [SetVaultAccessPolicy](AwsGlacierActions.md#setvaultaccesspolicy)
- [SetVaultNotifications](AwsGlacierActions.md#setvaultnotifications)
- [UploadArchive](AwsGlacierActions.md#uploadarchive)
- [UploadMultipartPart](AwsGlacierActions.md#uploadmultipartpart)

## Enumeration Members

### AbortMultipartUpload

• **AbortMultipartUpload** = ``"glacier:AbortMultipartUpload"``

Grants permission to abort a multipart upload identified by the upload ID

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html

#### Defined in

actions/glacier.ts:17

___

### AbortVaultLock

• **AbortVaultLock** = ``"glacier:AbortVaultLock"``

Grants permission to abort the vault locking process if the vault lock is not i
n the Locked state

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AbortVaultLock.html

#### Defined in

actions/glacier.ts:24

___

### AddTagsToVault

• **AddTagsToVault** = ``"glacier:AddTagsToVault"``

Grants permission to add the specified tags to a vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AddTagsToVault.html

#### Defined in

actions/glacier.ts:30

___

### CompleteMultipartUpload

• **CompleteMultipartUpload** = ``"glacier:CompleteMultipartUpload"``

Grants permission to complete a multipart upload process

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html

#### Defined in

actions/glacier.ts:36

___

### CompleteVaultLock

• **CompleteVaultLock** = ``"glacier:CompleteVaultLock"``

Grants permission to complete the vault locking process

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-CompleteVaultLock.html

#### Defined in

actions/glacier.ts:42

___

### CreateVault

• **CreateVault** = ``"glacier:CreateVault"``

Grants permission to create a new vault with the specified name

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html

#### Defined in

actions/glacier.ts:48

___

### DeleteArchive

• **DeleteArchive** = ``"glacier:DeleteArchive"``

Grants permission to delete an archive from a vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html

#### Defined in

actions/glacier.ts:54

___

### DeleteVault

• **DeleteVault** = ``"glacier:DeleteVault"``

Grants permission to delete a vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html

#### Defined in

actions/glacier.ts:60

___

### DeleteVaultAccessPolicy

• **DeleteVaultAccessPolicy** = ``"glacier:DeleteVaultAccessPolicy"``

Grants permission to delete the access policy associated with the specified vau
lt

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-DeleteVaultAccessPolicy.html

#### Defined in

actions/glacier.ts:67

___

### DeleteVaultNotifications

• **DeleteVaultNotifications** = ``"glacier:DeleteVaultNotifications"``

Grants permission to delete the notification configuration set for a vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html

#### Defined in

actions/glacier.ts:73

___

### DescribeJob

• **DescribeJob** = ``"glacier:DescribeJob"``

Grants permission to get information about a job previously initiated

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html

#### Defined in

actions/glacier.ts:79

___

### DescribeVault

• **DescribeVault** = ``"glacier:DescribeVault"``

Grants permission to get information about a vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html

#### Defined in

actions/glacier.ts:85

___

### GetDataRetrievalPolicy

• **GetDataRetrievalPolicy** = ``"glacier:GetDataRetrievalPolicy"``

Grants permission to get the data retrieval policy

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetDataRetrievalPolicy.html

#### Defined in

actions/glacier.ts:91

___

### GetJobOutput

• **GetJobOutput** = ``"glacier:GetJobOutput"``

Grants permission to download the output of the job specified

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html

#### Defined in

actions/glacier.ts:97

___

### GetVaultAccessPolicy

• **GetVaultAccessPolicy** = ``"glacier:GetVaultAccessPolicy"``

Grants permission to retrieve the access-policy subresource set on the vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultAccessPolicy.html

#### Defined in

actions/glacier.ts:103

___

### GetVaultLock

• **GetVaultLock** = ``"glacier:GetVaultLock"``

Grants permission to retrieve attributes from the lock-policy subresource set o
n the specified vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultLock.html

#### Defined in

actions/glacier.ts:110

___

### GetVaultNotifications

• **GetVaultNotifications** = ``"glacier:GetVaultNotifications"``

Grants permission to retrieve the notification-configuration subresource set on
the vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html

#### Defined in

actions/glacier.ts:117

___

### InitiateJob

• **InitiateJob** = ``"glacier:InitiateJob"``

Grants permission to initiate a job of the specified type

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html

#### Defined in

actions/glacier.ts:123

___

### InitiateMultipartUpload

• **InitiateMultipartUpload** = ``"glacier:InitiateMultipartUpload"``

Grants permission to initiate a multipart upload

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html

#### Defined in

actions/glacier.ts:129

___

### InitiateVaultLock

• **InitiateVaultLock** = ``"glacier:InitiateVaultLock"``

Grants permission to initiate the vault locking process

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-InitiateVaultLock.html

#### Defined in

actions/glacier.ts:135

___

### ListJobs

• **ListJobs** = ``"glacier:ListJobs"``

Grants permission to list jobs for a vault that are in-progress and jobs that h
ave recently finished

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html

#### Defined in

actions/glacier.ts:142

___

### ListMultipartUploads

• **ListMultipartUploads** = ``"glacier:ListMultipartUploads"``

Grants permission to list in-progress multipart uploads for the specified vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html

#### Defined in

actions/glacier.ts:148

___

### ListParts

• **ListParts** = ``"glacier:ListParts"``

Grants permission to list the parts of an archive that have been uploaded in a
specific multipart upload

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html

#### Defined in

actions/glacier.ts:155

___

### ListProvisionedCapacity

• **ListProvisionedCapacity** = ``"glacier:ListProvisionedCapacity"``

Grants permission to list the provisioned capacity for the specified AWS accoun
t

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListProvisionedCapacity.html

#### Defined in

actions/glacier.ts:162

___

### ListTagsForVault

• **ListTagsForVault** = ``"glacier:ListTagsForVault"``

Grants permission to list all the tags attached to a vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListTagsForVault.html

#### Defined in

actions/glacier.ts:168

___

### ListVaults

• **ListVaults** = ``"glacier:ListVaults"``

Grants permission to list all vaults

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html

#### Defined in

actions/glacier.ts:174

___

### PurchaseProvisionedCapacity

• **PurchaseProvisionedCapacity** = ``"glacier:PurchaseProvisionedCapacity"``

Grants permission to purchases a provisioned capacity unit for an AWS account

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-PurchaseProvisionedCapacity.html

#### Defined in

actions/glacier.ts:180

___

### RemoveTagsFromVault

• **RemoveTagsFromVault** = ``"glacier:RemoveTagsFromVault"``

Grants permission to remove one or more tags from the set of tags attached to a
vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-RemoveTagsFromVault.html

#### Defined in

actions/glacier.ts:187

___

### SetDataRetrievalPolicy

• **SetDataRetrievalPolicy** = ``"glacier:SetDataRetrievalPolicy"``

Grants permission to set and then enacts a data retrieval policy in the region
specified in the PUT request

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetDataRetrievalPolicy.html

#### Defined in

actions/glacier.ts:194

___

### SetVaultAccessPolicy

• **SetVaultAccessPolicy** = ``"glacier:SetVaultAccessPolicy"``

Grants permission to configure an access policy for a vault; will overwrite an
existing policy

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html

#### Defined in

actions/glacier.ts:201

___

### SetVaultNotifications

• **SetVaultNotifications** = ``"glacier:SetVaultNotifications"``

Grants permission to configure vault notifications

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html

#### Defined in

actions/glacier.ts:207

___

### UploadArchive

• **UploadArchive** = ``"glacier:UploadArchive"``

Grants permission to upload an archive to a vault

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html

#### Defined in

actions/glacier.ts:213

___

### UploadMultipartPart

• **UploadMultipartPart** = ``"glacier:UploadMultipartPart"``

Grants permission to upload a part of an archive

See https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html

#### Defined in

actions/glacier.ts:219
