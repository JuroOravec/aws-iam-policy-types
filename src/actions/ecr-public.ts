// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Elastic Container Registry Public (ECR-PUBLIC)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistrypublic.html
 *
 * 2024-02-12T09:57:07.714Z
 */
export enum AwsEcrPublicActions {
  /**
   * Grants permission to check the availability of multiple image layers in a speci
   * fied registry and repository
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_BatchCheckLayerAvailability.html
   */
  BatchCheckLayerAvailability = 'ecr-public:BatchCheckLayerAvailability',
  /**
   * Grants permission to delete a list of specified images within a specified repos
   * itory
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_BatchDeleteImage.html
   */
  BatchDeleteImage = 'ecr-public:BatchDeleteImage',
  /**
   * Grants permission to inform Amazon ECR that the image layer upload for a specif
   * ied registry, repository name, and upload ID, has completed
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_CompleteLayerUpload.html
   */
  CompleteLayerUpload = 'ecr-public:CompleteLayerUpload',
  /**
   * Grants permission to create an image repository
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_CreateRepository.html
   */
  CreateRepository = 'ecr-public:CreateRepository',
  /**
   * Grants permission to delete an existing image repository
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DeleteRepository.html
   */
  DeleteRepository = 'ecr-public:DeleteRepository',
  /**
   * Grants permission to delete the repository policy from a specified repository
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DeleteRepositoryPolicy.html
   */
  DeleteRepositoryPolicy = 'ecr-public:DeleteRepositoryPolicy',
  /**
   * Grants permission to describe all the image tags for a given repository
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeImageTags.html
   */
  DescribeImageTags = 'ecr-public:DescribeImageTags',
  /**
   * Grants permission to get metadata about the images in a repository, including i
   * mage size, image tags, and creation date
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeImages.html
   */
  DescribeImages = 'ecr-public:DescribeImages',
  /**
   * Grants permission to retrieve the catalog data associated with a registry
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeRegistries.html
   */
  DescribeRegistries = 'ecr-public:DescribeRegistries',
  /**
   * Grants permission to describe image repositories in a registry
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeRepositories.html
   */
  DescribeRepositories = 'ecr-public:DescribeRepositories',
  /**
   * Grants permission to retrieve a token that is valid for a specified registry fo
   * r 12 hours
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetAuthorizationToken.html
   */
  GetAuthorizationToken = 'ecr-public:GetAuthorizationToken',
  /**
   * Grants permission to retrieve the catalog data associated with a registry
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRegistryCatalogData.html
   */
  GetRegistryCatalogData = 'ecr-public:GetRegistryCatalogData',
  /**
   * Grants permission to retrieve the catalog data associated with a repository
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRepositoryCatalogData.html
   */
  GetRepositoryCatalogData = 'ecr-public:GetRepositoryCatalogData',
  /**
   * Grants permission to retrieve the repository policy for a specified repository
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRepositoryPolicy.html
   */
  GetRepositoryPolicy = 'ecr-public:GetRepositoryPolicy',
  /**
   * Grants permission to notify Amazon ECR that you intend to upload an image layer
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_InitiateLayerUpload.html
   */
  InitiateLayerUpload = 'ecr-public:InitiateLayerUpload',
  /**
   * Grants permission to list the tags for an Amazon ECR resource
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'ecr-public:ListTagsForResource',
  /**
   * Grants permission to create or update the image manifest associated with an ima
   * ge
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutImage.html
   */
  PutImage = 'ecr-public:PutImage',
  /**
   * Grants permission to create and update the catalog data associated with a regis
   * try
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutRegistryCatalogData.html
   */
  PutRegistryCatalogData = 'ecr-public:PutRegistryCatalogData',
  /**
   * Grants permission to update the catalog data associated with a repository
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutRepositoryCatalogData.html
   */
  PutRepositoryCatalogData = 'ecr-public:PutRepositoryCatalogData',
  /**
   * Grants permission to apply a repository policy on a specified repository to con
   * trol access permissions
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_SetRepositoryPolicy.html
   */
  SetRepositoryPolicy = 'ecr-public:SetRepositoryPolicy',
  /**
   * Grants permission to tag an Amazon ECR resource
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_TagResource.html
   */
  TagResource = 'ecr-public:TagResource',
  /**
   * Grants permission to untag an Amazon ECR resource
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'ecr-public:UntagResource',
  /**
   * Grants permission to upload an image layer part to Amazon ECR Public
   *
   * See https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_UploadLayerPart.html
   */
  UploadLayerPart = 'ecr-public:UploadLayerPart',
}
