[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEcrPublicActions

# Enumeration: AwsEcrPublicActions

All IAM policy actions for Amazon Elastic Container Registry Public (ECR-PUBLIC)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistrypublic.html

2024-02-12T09:57:07.714Z

## Table of contents

### Enumeration Members

- [BatchCheckLayerAvailability](AwsEcrPublicActions.md#batchchecklayeravailability)
- [BatchDeleteImage](AwsEcrPublicActions.md#batchdeleteimage)
- [CompleteLayerUpload](AwsEcrPublicActions.md#completelayerupload)
- [CreateRepository](AwsEcrPublicActions.md#createrepository)
- [DeleteRepository](AwsEcrPublicActions.md#deleterepository)
- [DeleteRepositoryPolicy](AwsEcrPublicActions.md#deleterepositorypolicy)
- [DescribeImageTags](AwsEcrPublicActions.md#describeimagetags)
- [DescribeImages](AwsEcrPublicActions.md#describeimages)
- [DescribeRegistries](AwsEcrPublicActions.md#describeregistries)
- [DescribeRepositories](AwsEcrPublicActions.md#describerepositories)
- [GetAuthorizationToken](AwsEcrPublicActions.md#getauthorizationtoken)
- [GetRegistryCatalogData](AwsEcrPublicActions.md#getregistrycatalogdata)
- [GetRepositoryCatalogData](AwsEcrPublicActions.md#getrepositorycatalogdata)
- [GetRepositoryPolicy](AwsEcrPublicActions.md#getrepositorypolicy)
- [InitiateLayerUpload](AwsEcrPublicActions.md#initiatelayerupload)
- [ListTagsForResource](AwsEcrPublicActions.md#listtagsforresource)
- [PutImage](AwsEcrPublicActions.md#putimage)
- [PutRegistryCatalogData](AwsEcrPublicActions.md#putregistrycatalogdata)
- [PutRepositoryCatalogData](AwsEcrPublicActions.md#putrepositorycatalogdata)
- [SetRepositoryPolicy](AwsEcrPublicActions.md#setrepositorypolicy)
- [TagResource](AwsEcrPublicActions.md#tagresource)
- [UntagResource](AwsEcrPublicActions.md#untagresource)
- [UploadLayerPart](AwsEcrPublicActions.md#uploadlayerpart)

## Enumeration Members

### BatchCheckLayerAvailability

• **BatchCheckLayerAvailability** = ``"ecr-public:BatchCheckLayerAvailability"``

Grants permission to check the availability of multiple image layers in a speci
fied registry and repository

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_BatchCheckLayerAvailability.html

#### Defined in

actions/ecr-public.ts:18

___

### BatchDeleteImage

• **BatchDeleteImage** = ``"ecr-public:BatchDeleteImage"``

Grants permission to delete a list of specified images within a specified repos
itory

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_BatchDeleteImage.html

#### Defined in

actions/ecr-public.ts:25

___

### CompleteLayerUpload

• **CompleteLayerUpload** = ``"ecr-public:CompleteLayerUpload"``

Grants permission to inform Amazon ECR that the image layer upload for a specif
ied registry, repository name, and upload ID, has completed

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_CompleteLayerUpload.html

#### Defined in

actions/ecr-public.ts:32

___

### CreateRepository

• **CreateRepository** = ``"ecr-public:CreateRepository"``

Grants permission to create an image repository

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_CreateRepository.html

#### Defined in

actions/ecr-public.ts:38

___

### DeleteRepository

• **DeleteRepository** = ``"ecr-public:DeleteRepository"``

Grants permission to delete an existing image repository

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DeleteRepository.html

#### Defined in

actions/ecr-public.ts:44

___

### DeleteRepositoryPolicy

• **DeleteRepositoryPolicy** = ``"ecr-public:DeleteRepositoryPolicy"``

Grants permission to delete the repository policy from a specified repository

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DeleteRepositoryPolicy.html

#### Defined in

actions/ecr-public.ts:50

___

### DescribeImageTags

• **DescribeImageTags** = ``"ecr-public:DescribeImageTags"``

Grants permission to describe all the image tags for a given repository

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeImageTags.html

#### Defined in

actions/ecr-public.ts:56

___

### DescribeImages

• **DescribeImages** = ``"ecr-public:DescribeImages"``

Grants permission to get metadata about the images in a repository, including i
mage size, image tags, and creation date

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeImages.html

#### Defined in

actions/ecr-public.ts:63

___

### DescribeRegistries

• **DescribeRegistries** = ``"ecr-public:DescribeRegistries"``

Grants permission to retrieve the catalog data associated with a registry

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeRegistries.html

#### Defined in

actions/ecr-public.ts:69

___

### DescribeRepositories

• **DescribeRepositories** = ``"ecr-public:DescribeRepositories"``

Grants permission to describe image repositories in a registry

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeRepositories.html

#### Defined in

actions/ecr-public.ts:75

___

### GetAuthorizationToken

• **GetAuthorizationToken** = ``"ecr-public:GetAuthorizationToken"``

Grants permission to retrieve a token that is valid for a specified registry fo
r 12 hours

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetAuthorizationToken.html

#### Defined in

actions/ecr-public.ts:82

___

### GetRegistryCatalogData

• **GetRegistryCatalogData** = ``"ecr-public:GetRegistryCatalogData"``

Grants permission to retrieve the catalog data associated with a registry

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRegistryCatalogData.html

#### Defined in

actions/ecr-public.ts:88

___

### GetRepositoryCatalogData

• **GetRepositoryCatalogData** = ``"ecr-public:GetRepositoryCatalogData"``

Grants permission to retrieve the catalog data associated with a repository

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRepositoryCatalogData.html

#### Defined in

actions/ecr-public.ts:94

___

### GetRepositoryPolicy

• **GetRepositoryPolicy** = ``"ecr-public:GetRepositoryPolicy"``

Grants permission to retrieve the repository policy for a specified repository

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRepositoryPolicy.html

#### Defined in

actions/ecr-public.ts:100

___

### InitiateLayerUpload

• **InitiateLayerUpload** = ``"ecr-public:InitiateLayerUpload"``

Grants permission to notify Amazon ECR that you intend to upload an image layer

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_InitiateLayerUpload.html

#### Defined in

actions/ecr-public.ts:106

___

### ListTagsForResource

• **ListTagsForResource** = ``"ecr-public:ListTagsForResource"``

Grants permission to list the tags for an Amazon ECR resource

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/ecr-public.ts:112

___

### PutImage

• **PutImage** = ``"ecr-public:PutImage"``

Grants permission to create or update the image manifest associated with an ima
ge

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutImage.html

#### Defined in

actions/ecr-public.ts:119

___

### PutRegistryCatalogData

• **PutRegistryCatalogData** = ``"ecr-public:PutRegistryCatalogData"``

Grants permission to create and update the catalog data associated with a regis
try

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutRegistryCatalogData.html

#### Defined in

actions/ecr-public.ts:126

___

### PutRepositoryCatalogData

• **PutRepositoryCatalogData** = ``"ecr-public:PutRepositoryCatalogData"``

Grants permission to update the catalog data associated with a repository

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutRepositoryCatalogData.html

#### Defined in

actions/ecr-public.ts:132

___

### SetRepositoryPolicy

• **SetRepositoryPolicy** = ``"ecr-public:SetRepositoryPolicy"``

Grants permission to apply a repository policy on a specified repository to con
trol access permissions

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_SetRepositoryPolicy.html

#### Defined in

actions/ecr-public.ts:139

___

### TagResource

• **TagResource** = ``"ecr-public:TagResource"``

Grants permission to tag an Amazon ECR resource

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_TagResource.html

#### Defined in

actions/ecr-public.ts:145

___

### UntagResource

• **UntagResource** = ``"ecr-public:UntagResource"``

Grants permission to untag an Amazon ECR resource

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_UntagResource.html

#### Defined in

actions/ecr-public.ts:151

___

### UploadLayerPart

• **UploadLayerPart** = ``"ecr-public:UploadLayerPart"``

Grants permission to upload an image layer part to Amazon ECR Public

See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_UploadLayerPart.html

#### Defined in

actions/ecr-public.ts:157
