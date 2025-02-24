// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon EC2 Image Builder (IMAGEBUILDER)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2imagebuilder.html
 *
 * 2025-02-24T21:47:43.091Z
 */
export enum AwsImagebuilderActions {
  /**
   * Grants permission to cancel an image creation
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelImageCreation.html
   */
  CancelImageCreation = 'imagebuilder:CancelImageCreation',
  /**
   * Grants permission to cancel a lifecycle execution
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelLifecycleExecution.html
   */
  CancelLifecycleExecution = 'imagebuilder:CancelLifecycleExecution',
  /**
   * Grants permission to create a new component
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html
   */
  CreateComponent = 'imagebuilder:CreateComponent',
  /**
   * Grants permission to create a new Container Recipe
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateContainerRecipe.html
   */
  CreateContainerRecipe = 'imagebuilder:CreateContainerRecipe',
  /**
   * Grants permission to create a new distribution configuration
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateDistributionConfiguration.html
   */
  CreateDistributionConfiguration = 'imagebuilder:CreateDistributionConfiguration',
  /**
   * Grants permission to create a new image
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImage.html
   */
  CreateImage = 'imagebuilder:CreateImage',
  /**
   * Grants permission to create a new image pipeline
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImagePipeline.html
   */
  CreateImagePipeline = 'imagebuilder:CreateImagePipeline',
  /**
   * Grants permission to create a new Image Recipe
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImageRecipe.html
   */
  CreateImageRecipe = 'imagebuilder:CreateImageRecipe',
  /**
   * Grants permission to create a new infrastructure configuration
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateInfrastructureConfiguration.html
   */
  CreateInfrastructureConfiguration = 'imagebuilder:CreateInfrastructureConfiguration',
  /**
   * Grants permission to create a new lifecycle policy
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateLifecyclePolicy.html
   */
  CreateLifecyclePolicy = 'imagebuilder:CreateLifecyclePolicy',
  /**
   * Grants permission to create a new workflow
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateWorkflow.html
   */
  CreateWorkflow = 'imagebuilder:CreateWorkflow',
  /**
   * Grants permission to delete a component
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteComponent.html
   */
  DeleteComponent = 'imagebuilder:DeleteComponent',
  /**
   * Grants permission to delete a container recipe
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteContainerRecipe.html
   */
  DeleteContainerRecipe = 'imagebuilder:DeleteContainerRecipe',
  /**
   * Grants permission to delete a distribution configuration
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteDistributionConfiguration.html
   */
  DeleteDistributionConfiguration = 'imagebuilder:DeleteDistributionConfiguration',
  /**
   * Grants permission to delete an image
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImage.html
   */
  DeleteImage = 'imagebuilder:DeleteImage',
  /**
   * Grants permission to delete an image pipeline
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImagePipeline.html
   */
  DeleteImagePipeline = 'imagebuilder:DeleteImagePipeline',
  /**
   * Grants permission to delete an image recipe
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImageRecipe.html
   */
  DeleteImageRecipe = 'imagebuilder:DeleteImageRecipe',
  /**
   * Grants permission to delete an infrastructure configuration
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteInfrastructureConfiguration.html
   */
  DeleteInfrastructureConfiguration = 'imagebuilder:DeleteInfrastructureConfiguration',
  /**
   * Grants permission to delete a lifecycle policy
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteLifecyclePolicy.html
   */
  DeleteLifecyclePolicy = 'imagebuilder:DeleteLifecyclePolicy',
  /**
   * Grants permission to delete a workflow
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteWorkflow.html
   */
  DeleteWorkflow = 'imagebuilder:DeleteWorkflow',
  /**
   * Grants permission to view details about a component
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponent.html
   */
  GetComponent = 'imagebuilder:GetComponent',
  /**
   * Grants permission to view the resource policy associated with a component
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponentPolicy.html
   */
  GetComponentPolicy = 'imagebuilder:GetComponentPolicy',
  /**
   * Grants permission to view details about a container recipe
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetContainerRecipe.html
   */
  GetContainerRecipe = 'imagebuilder:GetContainerRecipe',
  /**
   * Grants permission to view the resource policy associated with a container recip
   * e
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetContainerRecipePolicy.html
   */
  GetContainerRecipePolicy = 'imagebuilder:GetContainerRecipePolicy',
  /**
   * Grants permission to view details about a distribution configuration
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetDistributionConfiguration.html
   */
  GetDistributionConfiguration = 'imagebuilder:GetDistributionConfiguration',
  /**
   * Grants permission to view details about an image
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImage.html
   */
  GetImage = 'imagebuilder:GetImage',
  /**
   * Grants permission to view details about an image pipeline
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePipeline.html
   */
  GetImagePipeline = 'imagebuilder:GetImagePipeline',
  /**
   * Grants permission to view the resource policy associated with an image
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePolicy.html
   */
  GetImagePolicy = 'imagebuilder:GetImagePolicy',
  /**
   * Grants permission to view details about an image recipe
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipe.html
   */
  GetImageRecipe = 'imagebuilder:GetImageRecipe',
  /**
   * Grants permission to view the resource policy associated with an image recipe
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipePolicy.html
   */
  GetImageRecipePolicy = 'imagebuilder:GetImageRecipePolicy',
  /**
   * Grants permission to view details about an infrastructure configuration
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetInfrastructureConfiguration.html
   */
  GetInfrastructureConfiguration = 'imagebuilder:GetInfrastructureConfiguration',
  /**
   * Grants permission to view details about a lifecycle execution
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetLifecycleExecution.html
   */
  GetLifecycleExecution = 'imagebuilder:GetLifecycleExecution',
  /**
   * Grants permission to view details about a lifecycle policy
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetLifecyclePolicy.html
   */
  GetLifecyclePolicy = 'imagebuilder:GetLifecyclePolicy',
  /**
   * Grants permission to retrieve Marketplace provided resource
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetMarketplaceResource.html
   */
  GetMarketplaceResource = 'imagebuilder:GetMarketplaceResource',
  /**
   * Grants permission to view details about a workflow
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetWorkflow.html
   */
  GetWorkflow = 'imagebuilder:GetWorkflow',
  /**
   * Grants permission to view details about a workflow execution
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetWorkflowExecution.html
   */
  GetWorkflowExecution = 'imagebuilder:GetWorkflowExecution',
  /**
   * Grants permission to view details about a workflow step execution
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetWorkflowStepExecution.html
   */
  GetWorkflowStepExecution = 'imagebuilder:GetWorkflowStepExecution',
  /**
   * Grants permission to import a new component
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImportComponent.html
   */
  ImportComponent = 'imagebuilder:ImportComponent',
  /**
   * Grants permission to import a disk image
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImportDiskImage.html
   */
  ImportDiskImage = 'imagebuilder:ImportDiskImage',
  /**
   * Grants permission to import an image
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImportVmImage.html
   */
  ImportVmImage = 'imagebuilder:ImportVmImage',
  /**
   * Grants permission to list the component build versions in your account
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponentBuildVersions.html
   */
  ListComponentBuildVersions = 'imagebuilder:ListComponentBuildVersions',
  /**
   * Grants permission to list the component versions owned by or shared with your a
   * ccount
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponents.html
   */
  ListComponents = 'imagebuilder:ListComponents',
  /**
   * Grants permission to list the container recipes owned by or shared with your ac
   * count
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListContainerRecipes.html
   */
  ListContainerRecipes = 'imagebuilder:ListContainerRecipes',
  /**
   * Grants permission to list the distribution configurations in your account
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListDistributionConfigurations.html
   */
  ListDistributionConfigurations = 'imagebuilder:ListDistributionConfigurations',
  /**
   * Grants permission to list the image build versions in your account
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageBuildVersions.html
   */
  ListImageBuildVersions = 'imagebuilder:ListImageBuildVersions',
  /**
   * Grants permission to return a list of packages installed on the specified image
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePackages.html
   */
  ListImagePackages = 'imagebuilder:ListImagePackages',
  /**
   * Grants permission to return a list of images created by the specified pipeline
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelineImages.html
   */
  ListImagePipelineImages = 'imagebuilder:ListImagePipelineImages',
  /**
   * Grants permission to list the image pipelines in your account
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelines.html
   */
  ListImagePipelines = 'imagebuilder:ListImagePipelines',
  /**
   * Grants permission to list the image recipes owned by or shared with your accoun
   * t
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageRecipes.html
   */
  ListImageRecipes = 'imagebuilder:ListImageRecipes',
  /**
   * Grants permission to list aggregations on the image scan findings in your accou
   * nt
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageScanFindingAggregations.html
   */
  ListImageScanFindingAggregations = 'imagebuilder:ListImageScanFindingAggregations',
  /**
   * Grants permission to list the image scan findings for the images in your accoun
   * t
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageScanFindings.html
   */
  ListImageScanFindings = 'imagebuilder:ListImageScanFindings',
  /**
   * Grants permission to list the image versions owned by or shared with your accou
   * nt
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImages.html
   */
  ListImages = 'imagebuilder:ListImages',
  /**
   * Grants permission to list the infrastructure configurations in your account
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListInfrastructureConfigurations.html
   */
  ListInfrastructureConfigurations = 'imagebuilder:ListInfrastructureConfigurations',
  /**
   * Grants permission to list resources for the specified lifecycle execution
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListLifecycleExecutionResources.html
   */
  ListLifecycleExecutionResources = 'imagebuilder:ListLifecycleExecutionResources',
  /**
   * Grants permission to list lifecycle executions for the specified resource
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListLifecycleExecutions.html
   */
  ListLifecycleExecutions = 'imagebuilder:ListLifecycleExecutions',
  /**
   * Grants permission to list the lifecycle policies in your account
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListLifecyclePolicies.html
   */
  ListLifecyclePolicies = 'imagebuilder:ListLifecyclePolicies',
  /**
   * Grants permission to list tags for an Image Builder resource
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'imagebuilder:ListTagsForResource',
  /**
   * Grants permission to list waiting workflow steps for the caller account
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWaitingWorkflowSteps.html
   */
  ListWaitingWorkflowSteps = 'imagebuilder:ListWaitingWorkflowSteps',
  /**
   * Grants permission to list the workflow build versions in your account
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflowBuildVersions.html
   */
  ListWorkflowBuildVersions = 'imagebuilder:ListWorkflowBuildVersions',
  /**
   * Grants permission to list workflow executions for the specified image
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflowExecutions.html
   */
  ListWorkflowExecutions = 'imagebuilder:ListWorkflowExecutions',
  /**
   * Grants permission to list workflow step executions for the specified workflow
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflowStepExecutions.html
   */
  ListWorkflowStepExecutions = 'imagebuilder:ListWorkflowStepExecutions',
  /**
   * Grants permission to list the workflow versions owned by or shared with your ac
   * count
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflows.html
   */
  ListWorkflows = 'imagebuilder:ListWorkflows',
  /**
   * Grants permission to set the resource policy associated with a component
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutComponentPolicy.html
   */
  PutComponentPolicy = 'imagebuilder:PutComponentPolicy',
  /**
   * Grants permission to set the resource policy associated with a container recipe
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutContainerRecipePolicy.html
   */
  PutContainerRecipePolicy = 'imagebuilder:PutContainerRecipePolicy',
  /**
   * Grants permission to set the resource policy associated with an image
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImagePolicy.html
   */
  PutImagePolicy = 'imagebuilder:PutImagePolicy',
  /**
   * Grants permission to set the resource policy associated with an image recipe
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImageRecipePolicy.html
   */
  PutImageRecipePolicy = 'imagebuilder:PutImageRecipePolicy',
  /**
   * Grants permission to send an action to a workflow step
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_SendWorkflowStepAction.html
   */
  SendWorkflowStepAction = 'imagebuilder:SendWorkflowStepAction',
  /**
   * Grants permission to create a new image from a pipeline
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartImagePipelineExecution.html
   */
  StartImagePipelineExecution = 'imagebuilder:StartImagePipelineExecution',
  /**
   * Grants permission to start a state update for the specified resource
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartResourceStateUpdate.html
   */
  StartResourceStateUpdate = 'imagebuilder:StartResourceStateUpdate',
  /**
   * Grants permission to tag an Image Builder resource
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_TagResource.html
   */
  TagResource = 'imagebuilder:TagResource',
  /**
   * Grants permission to untag an Image Builder resource
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'imagebuilder:UntagResource',
  /**
   * Grants permission to update an existing distribution configuration
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateDistributionConfiguration.html
   */
  UpdateDistributionConfiguration = 'imagebuilder:UpdateDistributionConfiguration',
  /**
   * Grants permission to update an existing image pipeline
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateImagePipeline.html
   */
  UpdateImagePipeline = 'imagebuilder:UpdateImagePipeline',
  /**
   * Grants permission to update an existing infrastructure configuration
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateInfrastructureConfiguration.html
   */
  UpdateInfrastructureConfiguration = 'imagebuilder:UpdateInfrastructureConfiguration',
  /**
   * Grants permission to update an existing lifecycle policy
   *
   * See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateLifecyclePolicy.html
   */
  UpdateLifecyclePolicy = 'imagebuilder:UpdateLifecyclePolicy',
}
