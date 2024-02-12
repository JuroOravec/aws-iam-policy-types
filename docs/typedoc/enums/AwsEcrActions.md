[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEcrActions

# Enumeration: AwsEcrActions

All IAM policy actions for Amazon Elastic Container Registry (ECR)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistry.html

2024-02-12T09:57:07.158Z

## Table of contents

### Enumeration Members

- [BatchCheckLayerAvailability](AwsEcrActions.md#batchchecklayeravailability)
- [BatchDeleteImage](AwsEcrActions.md#batchdeleteimage)
- [BatchGetImage](AwsEcrActions.md#batchgetimage)
- [BatchGetRepositoryScanningConfiguration](AwsEcrActions.md#batchgetrepositoryscanningconfiguration)
- [BatchImportUpstreamImage](AwsEcrActions.md#batchimportupstreamimage)
- [CompleteLayerUpload](AwsEcrActions.md#completelayerupload)
- [CreatePullThroughCacheRule](AwsEcrActions.md#createpullthroughcacherule)
- [CreateRepository](AwsEcrActions.md#createrepository)
- [CreateRepositoryCreationTemplate](AwsEcrActions.md#createrepositorycreationtemplate)
- [DeleteLifecyclePolicy](AwsEcrActions.md#deletelifecyclepolicy)
- [DeletePullThroughCacheRule](AwsEcrActions.md#deletepullthroughcacherule)
- [DeleteRegistryPolicy](AwsEcrActions.md#deleteregistrypolicy)
- [DeleteRepository](AwsEcrActions.md#deleterepository)
- [DeleteRepositoryCreationTemplate](AwsEcrActions.md#deleterepositorycreationtemplate)
- [DeleteRepositoryPolicy](AwsEcrActions.md#deleterepositorypolicy)
- [DescribeImageReplicationStatus](AwsEcrActions.md#describeimagereplicationstatus)
- [DescribeImageScanFindings](AwsEcrActions.md#describeimagescanfindings)
- [DescribeImages](AwsEcrActions.md#describeimages)
- [DescribePullThroughCacheRules](AwsEcrActions.md#describepullthroughcacherules)
- [DescribeRegistry](AwsEcrActions.md#describeregistry)
- [DescribeRepositories](AwsEcrActions.md#describerepositories)
- [DescribeRepositoryCreationTemplate](AwsEcrActions.md#describerepositorycreationtemplate)
- [GetAuthorizationToken](AwsEcrActions.md#getauthorizationtoken)
- [GetDownloadUrlForLayer](AwsEcrActions.md#getdownloadurlforlayer)
- [GetLifecyclePolicy](AwsEcrActions.md#getlifecyclepolicy)
- [GetLifecyclePolicyPreview](AwsEcrActions.md#getlifecyclepolicypreview)
- [GetRegistryPolicy](AwsEcrActions.md#getregistrypolicy)
- [GetRegistryScanningConfiguration](AwsEcrActions.md#getregistryscanningconfiguration)
- [GetRepositoryPolicy](AwsEcrActions.md#getrepositorypolicy)
- [InitiateLayerUpload](AwsEcrActions.md#initiatelayerupload)
- [ListImages](AwsEcrActions.md#listimages)
- [ListTagsForResource](AwsEcrActions.md#listtagsforresource)
- [PutImage](AwsEcrActions.md#putimage)
- [PutImageScanningConfiguration](AwsEcrActions.md#putimagescanningconfiguration)
- [PutImageTagMutability](AwsEcrActions.md#putimagetagmutability)
- [PutLifecyclePolicy](AwsEcrActions.md#putlifecyclepolicy)
- [PutRegistryPolicy](AwsEcrActions.md#putregistrypolicy)
- [PutRegistryScanningConfiguration](AwsEcrActions.md#putregistryscanningconfiguration)
- [PutReplicationConfiguration](AwsEcrActions.md#putreplicationconfiguration)
- [ReplicateImage](AwsEcrActions.md#replicateimage)
- [SetRepositoryPolicy](AwsEcrActions.md#setrepositorypolicy)
- [StartImageScan](AwsEcrActions.md#startimagescan)
- [StartLifecyclePolicyPreview](AwsEcrActions.md#startlifecyclepolicypreview)
- [TagResource](AwsEcrActions.md#tagresource)
- [UntagResource](AwsEcrActions.md#untagresource)
- [UpdatePullThroughCacheRule](AwsEcrActions.md#updatepullthroughcacherule)
- [UploadLayerPart](AwsEcrActions.md#uploadlayerpart)
- [ValidatePullThroughCacheRule](AwsEcrActions.md#validatepullthroughcacherule)

## Enumeration Members

### BatchCheckLayerAvailability

• **BatchCheckLayerAvailability** = ``"ecr:BatchCheckLayerAvailability"``

Grants permission to check the availability of multiple image layers in a speci
fied registry and repository

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchCheckLayerAvailability.html

#### Defined in

actions/ecr.ts:18

___

### BatchDeleteImage

• **BatchDeleteImage** = ``"ecr:BatchDeleteImage"``

Grants permission to delete a list of specified images within a specified repos
itory

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchDeleteImage.html

#### Defined in

actions/ecr.ts:25

___

### BatchGetImage

• **BatchGetImage** = ``"ecr:BatchGetImage"``

Grants permission to get detailed information for specified images within a spe
cified repository

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchGetImage.html

#### Defined in

actions/ecr.ts:32

___

### BatchGetRepositoryScanningConfiguration

• **BatchGetRepositoryScanningConfiguration** = ``"ecr:BatchGetRepositoryScanningConfiguration"``

Grants permission to retrieve repository scanning configuration for a list of r
epositories

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchGetRepositoryScanningConfiguration.html

#### Defined in

actions/ecr.ts:39

___

### BatchImportUpstreamImage

• **BatchImportUpstreamImage** = ``"ecr:BatchImportUpstreamImage"``

Grants permission to retrieve the image from the upstream registry and import i
t to your private registry

See https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache.html

#### Defined in

actions/ecr.ts:46

___

### CompleteLayerUpload

• **CompleteLayerUpload** = ``"ecr:CompleteLayerUpload"``

Grants permission to inform Amazon ECR that the image layer upload for a specif
ied registry, repository name, and upload ID, has completed

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CompleteLayerUpload.html

#### Defined in

actions/ecr.ts:53

___

### CreatePullThroughCacheRule

• **CreatePullThroughCacheRule** = ``"ecr:CreatePullThroughCacheRule"``

Grants permission to create new pull-through cache rule

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CreatePullThroughCacheRule.html

#### Defined in

actions/ecr.ts:59

___

### CreateRepository

• **CreateRepository** = ``"ecr:CreateRepository"``

Grants permission to create an image repository

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CreateRepository.html

#### Defined in

actions/ecr.ts:65

___

### CreateRepositoryCreationTemplate

• **CreateRepositoryCreationTemplate** = ``"ecr:CreateRepositoryCreationTemplate"``

Grants permission to create the repository creation template

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CreateRepositoryCreationTemplate.html

#### Defined in

actions/ecr.ts:71

___

### DeleteLifecyclePolicy

• **DeleteLifecyclePolicy** = ``"ecr:DeleteLifecyclePolicy"``

Grants permission to delete the specified lifecycle policy

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteLifecyclePolicy.html

#### Defined in

actions/ecr.ts:77

___

### DeletePullThroughCacheRule

• **DeletePullThroughCacheRule** = ``"ecr:DeletePullThroughCacheRule"``

Grants permission to delete the pull-through cache rule

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeletePullThroughCacheRule.html

#### Defined in

actions/ecr.ts:83

___

### DeleteRegistryPolicy

• **DeleteRegistryPolicy** = ``"ecr:DeleteRegistryPolicy"``

Grants permission to delete the registry policy

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRegistryPolicy.html

#### Defined in

actions/ecr.ts:89

___

### DeleteRepository

• **DeleteRepository** = ``"ecr:DeleteRepository"``

Grants permission to delete an existing image repository

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepository.html

#### Defined in

actions/ecr.ts:95

___

### DeleteRepositoryCreationTemplate

• **DeleteRepositoryCreationTemplate** = ``"ecr:DeleteRepositoryCreationTemplate"``

Grants permission to delete the repository creation template

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepositoryCreationTemplate.html

#### Defined in

actions/ecr.ts:101

___

### DeleteRepositoryPolicy

• **DeleteRepositoryPolicy** = ``"ecr:DeleteRepositoryPolicy"``

Grants permission to delete the repository policy from a specified repository

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepositoryPolicy.html

#### Defined in

actions/ecr.ts:107

___

### DescribeImageReplicationStatus

• **DescribeImageReplicationStatus** = ``"ecr:DescribeImageReplicationStatus"``

Grants permission to retrieve replication status about an image in a registry,
including failure reason if replication fails

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImageReplicationStatus.html

#### Defined in

actions/ecr.ts:114

___

### DescribeImageScanFindings

• **DescribeImageScanFindings** = ``"ecr:DescribeImageScanFindings"``

Grants permission to describe the image scan findings for the specified image

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImageScanFindings.html

#### Defined in

actions/ecr.ts:120

___

### DescribeImages

• **DescribeImages** = ``"ecr:DescribeImages"``

Grants permission to get metadata about the images in a repository, including i
mage size, image tags, and creation date

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImages.html

#### Defined in

actions/ecr.ts:127

___

### DescribePullThroughCacheRules

• **DescribePullThroughCacheRules** = ``"ecr:DescribePullThroughCacheRules"``

Grants permission to describe the pull-through cache rules

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribePullThroughCacheRules.html

#### Defined in

actions/ecr.ts:133

___

### DescribeRegistry

• **DescribeRegistry** = ``"ecr:DescribeRegistry"``

Grants permission to describe the registry settings

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeRegistry.html

#### Defined in

actions/ecr.ts:139

___

### DescribeRepositories

• **DescribeRepositories** = ``"ecr:DescribeRepositories"``

Grants permission to describe image repositories in a registry

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeRepositories.html

#### Defined in

actions/ecr.ts:145

___

### DescribeRepositoryCreationTemplate

• **DescribeRepositoryCreationTemplate** = ``"ecr:DescribeRepositoryCreationTemplate"``

Grants permission to describe the repository creation template

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeRepositoryCreationTemplate.html

#### Defined in

actions/ecr.ts:151

___

### GetAuthorizationToken

• **GetAuthorizationToken** = ``"ecr:GetAuthorizationToken"``

Grants permission to retrieve a token that is valid for a specified registry fo
r 12 hours

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetAuthorizationToken.html

#### Defined in

actions/ecr.ts:158

___

### GetDownloadUrlForLayer

• **GetDownloadUrlForLayer** = ``"ecr:GetDownloadUrlForLayer"``

Grants permission to retrieve the download URL corresponding to an image layer

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetDownloadUrlForLayer.html

#### Defined in

actions/ecr.ts:164

___

### GetLifecyclePolicy

• **GetLifecyclePolicy** = ``"ecr:GetLifecyclePolicy"``

Grants permission to retrieve the specified lifecycle policy

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicy.html

#### Defined in

actions/ecr.ts:170

___

### GetLifecyclePolicyPreview

• **GetLifecyclePolicyPreview** = ``"ecr:GetLifecyclePolicyPreview"``

Grants permission to retrieve the results of the specified lifecycle policy pre
view request

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicyPreview.html

#### Defined in

actions/ecr.ts:177

___

### GetRegistryPolicy

• **GetRegistryPolicy** = ``"ecr:GetRegistryPolicy"``

Grants permission to retrieve the registry policy

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRegistryPolicy.html

#### Defined in

actions/ecr.ts:183

___

### GetRegistryScanningConfiguration

• **GetRegistryScanningConfiguration** = ``"ecr:GetRegistryScanningConfiguration"``

Grants permission to retrieve registry scanning configuration

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRegistryScanningConfiguration.html

#### Defined in

actions/ecr.ts:189

___

### GetRepositoryPolicy

• **GetRepositoryPolicy** = ``"ecr:GetRepositoryPolicy"``

Grants permission to retrieve the repository policy for a specified repository

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRepositoryPolicy.html

#### Defined in

actions/ecr.ts:195

___

### InitiateLayerUpload

• **InitiateLayerUpload** = ``"ecr:InitiateLayerUpload"``

Grants permission to notify Amazon ECR that you intend to upload an image layer

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_InitiateLayerUpload.html

#### Defined in

actions/ecr.ts:201

___

### ListImages

• **ListImages** = ``"ecr:ListImages"``

Grants permission to list all the image IDs for a given repository

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListImages.html

#### Defined in

actions/ecr.ts:207

___

### ListTagsForResource

• **ListTagsForResource** = ``"ecr:ListTagsForResource"``

Grants permission to list the tags for an Amazon ECR resource

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/ecr.ts:213

___

### PutImage

• **PutImage** = ``"ecr:PutImage"``

Grants permission to create or update the image manifest associated with an ima
ge

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImage.html

#### Defined in

actions/ecr.ts:220

___

### PutImageScanningConfiguration

• **PutImageScanningConfiguration** = ``"ecr:PutImageScanningConfiguration"``

Grants permission to update the image scanning configuration for a repository

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageScanningConfiguration.html

#### Defined in

actions/ecr.ts:226

___

### PutImageTagMutability

• **PutImageTagMutability** = ``"ecr:PutImageTagMutability"``

Grants permission to update the image tag mutability settings for a repository

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageTagMutability.html

#### Defined in

actions/ecr.ts:232

___

### PutLifecyclePolicy

• **PutLifecyclePolicy** = ``"ecr:PutLifecyclePolicy"``

Grants permission to create or update a lifecycle policy

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutLifecyclePolicy.html

#### Defined in

actions/ecr.ts:238

___

### PutRegistryPolicy

• **PutRegistryPolicy** = ``"ecr:PutRegistryPolicy"``

Grants permission to update the registry policy

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutRegistryPolicy.html

#### Defined in

actions/ecr.ts:244

___

### PutRegistryScanningConfiguration

• **PutRegistryScanningConfiguration** = ``"ecr:PutRegistryScanningConfiguration"``

Grants permission to update registry scanning configuration

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutRegistryScanningConfiguration.html

#### Defined in

actions/ecr.ts:250

___

### PutReplicationConfiguration

• **PutReplicationConfiguration** = ``"ecr:PutReplicationConfiguration"``

Grants permission to update the replication configuration for the registry

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutReplicationConfiguration.html

#### Defined in

actions/ecr.ts:256

___

### ReplicateImage

• **ReplicateImage** = ``"ecr:ReplicateImage"``

Grants permission to replicate images to the destination registry

See https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html

#### Defined in

actions/ecr.ts:262

___

### SetRepositoryPolicy

• **SetRepositoryPolicy** = ``"ecr:SetRepositoryPolicy"``

Grants permission to apply a repository policy on a specified repository to con
trol access permissions

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_SetRepositoryPolicy.html

#### Defined in

actions/ecr.ts:269

___

### StartImageScan

• **StartImageScan** = ``"ecr:StartImageScan"``

Grants permission to start an image scan

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html

#### Defined in

actions/ecr.ts:275

___

### StartLifecyclePolicyPreview

• **StartLifecyclePolicyPreview** = ``"ecr:StartLifecyclePolicyPreview"``

Grants permission to start a preview of the specified lifecycle policy

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartLifecyclePolicyPreview.html

#### Defined in

actions/ecr.ts:281

___

### TagResource

• **TagResource** = ``"ecr:TagResource"``

Grants permission to tag an Amazon ECR resource

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_TagResource.html

#### Defined in

actions/ecr.ts:287

___

### UntagResource

• **UntagResource** = ``"ecr:UntagResource"``

Grants permission to untag an Amazon ECR resource

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UntagResource.html

#### Defined in

actions/ecr.ts:293

___

### UpdatePullThroughCacheRule

• **UpdatePullThroughCacheRule** = ``"ecr:UpdatePullThroughCacheRule"``

Grants permission to update the pull-through cache rule

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UpdatePullThroughCacheRule.html

#### Defined in

actions/ecr.ts:299

___

### UploadLayerPart

• **UploadLayerPart** = ``"ecr:UploadLayerPart"``

Grants permission to upload an image layer part to Amazon ECR

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UploadLayerPart.html

#### Defined in

actions/ecr.ts:305

___

### ValidatePullThroughCacheRule

• **ValidatePullThroughCacheRule** = ``"ecr:ValidatePullThroughCacheRule"``

Grants permission to validate the pull-through cache rule

See https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ValidatePullThroughCacheRule.html

#### Defined in

actions/ecr.ts:311
