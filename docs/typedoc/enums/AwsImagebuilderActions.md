[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsImagebuilderActions

# Enumeration: AwsImagebuilderActions

All IAM policy actions for Amazon EC2 Image Builder (IMAGEBUILDER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2imagebuilder.html

2024-02-12T09:57:04.585Z

## Table of contents

### Enumeration Members

- [CancelImageCreation](AwsImagebuilderActions.md#cancelimagecreation)
- [CancelLifecycleExecution](AwsImagebuilderActions.md#cancellifecycleexecution)
- [CreateComponent](AwsImagebuilderActions.md#createcomponent)
- [CreateContainerRecipe](AwsImagebuilderActions.md#createcontainerrecipe)
- [CreateDistributionConfiguration](AwsImagebuilderActions.md#createdistributionconfiguration)
- [CreateImage](AwsImagebuilderActions.md#createimage)
- [CreateImagePipeline](AwsImagebuilderActions.md#createimagepipeline)
- [CreateImageRecipe](AwsImagebuilderActions.md#createimagerecipe)
- [CreateInfrastructureConfiguration](AwsImagebuilderActions.md#createinfrastructureconfiguration)
- [CreateLifecyclePolicy](AwsImagebuilderActions.md#createlifecyclepolicy)
- [CreateWorkflow](AwsImagebuilderActions.md#createworkflow)
- [DeleteComponent](AwsImagebuilderActions.md#deletecomponent)
- [DeleteContainerRecipe](AwsImagebuilderActions.md#deletecontainerrecipe)
- [DeleteDistributionConfiguration](AwsImagebuilderActions.md#deletedistributionconfiguration)
- [DeleteImage](AwsImagebuilderActions.md#deleteimage)
- [DeleteImagePipeline](AwsImagebuilderActions.md#deleteimagepipeline)
- [DeleteImageRecipe](AwsImagebuilderActions.md#deleteimagerecipe)
- [DeleteInfrastructureConfiguration](AwsImagebuilderActions.md#deleteinfrastructureconfiguration)
- [DeleteLifecyclePolicy](AwsImagebuilderActions.md#deletelifecyclepolicy)
- [DeleteWorkflow](AwsImagebuilderActions.md#deleteworkflow)
- [GetComponent](AwsImagebuilderActions.md#getcomponent)
- [GetComponentPolicy](AwsImagebuilderActions.md#getcomponentpolicy)
- [GetContainerRecipe](AwsImagebuilderActions.md#getcontainerrecipe)
- [GetContainerRecipePolicy](AwsImagebuilderActions.md#getcontainerrecipepolicy)
- [GetDistributionConfiguration](AwsImagebuilderActions.md#getdistributionconfiguration)
- [GetImage](AwsImagebuilderActions.md#getimage)
- [GetImagePipeline](AwsImagebuilderActions.md#getimagepipeline)
- [GetImagePolicy](AwsImagebuilderActions.md#getimagepolicy)
- [GetImageRecipe](AwsImagebuilderActions.md#getimagerecipe)
- [GetImageRecipePolicy](AwsImagebuilderActions.md#getimagerecipepolicy)
- [GetInfrastructureConfiguration](AwsImagebuilderActions.md#getinfrastructureconfiguration)
- [GetLifecycleExecution](AwsImagebuilderActions.md#getlifecycleexecution)
- [GetLifecyclePolicy](AwsImagebuilderActions.md#getlifecyclepolicy)
- [GetWorkflow](AwsImagebuilderActions.md#getworkflow)
- [GetWorkflowExecution](AwsImagebuilderActions.md#getworkflowexecution)
- [GetWorkflowStepExecution](AwsImagebuilderActions.md#getworkflowstepexecution)
- [ImportComponent](AwsImagebuilderActions.md#importcomponent)
- [ImportVmImage](AwsImagebuilderActions.md#importvmimage)
- [ListComponentBuildVersions](AwsImagebuilderActions.md#listcomponentbuildversions)
- [ListComponents](AwsImagebuilderActions.md#listcomponents)
- [ListContainerRecipes](AwsImagebuilderActions.md#listcontainerrecipes)
- [ListDistributionConfigurations](AwsImagebuilderActions.md#listdistributionconfigurations)
- [ListImageBuildVersions](AwsImagebuilderActions.md#listimagebuildversions)
- [ListImagePackages](AwsImagebuilderActions.md#listimagepackages)
- [ListImagePipelineImages](AwsImagebuilderActions.md#listimagepipelineimages)
- [ListImagePipelines](AwsImagebuilderActions.md#listimagepipelines)
- [ListImageRecipes](AwsImagebuilderActions.md#listimagerecipes)
- [ListImageScanFindingAggregations](AwsImagebuilderActions.md#listimagescanfindingaggregations)
- [ListImageScanFindings](AwsImagebuilderActions.md#listimagescanfindings)
- [ListImages](AwsImagebuilderActions.md#listimages)
- [ListInfrastructureConfigurations](AwsImagebuilderActions.md#listinfrastructureconfigurations)
- [ListLifecycleExecutionResources](AwsImagebuilderActions.md#listlifecycleexecutionresources)
- [ListLifecycleExecutions](AwsImagebuilderActions.md#listlifecycleexecutions)
- [ListLifecyclePolicies](AwsImagebuilderActions.md#listlifecyclepolicies)
- [ListTagsForResource](AwsImagebuilderActions.md#listtagsforresource)
- [ListWaitingWorkflowSteps](AwsImagebuilderActions.md#listwaitingworkflowsteps)
- [ListWorkflowBuildVersions](AwsImagebuilderActions.md#listworkflowbuildversions)
- [ListWorkflowExecutions](AwsImagebuilderActions.md#listworkflowexecutions)
- [ListWorkflowStepExecutions](AwsImagebuilderActions.md#listworkflowstepexecutions)
- [ListWorkflows](AwsImagebuilderActions.md#listworkflows)
- [PutComponentPolicy](AwsImagebuilderActions.md#putcomponentpolicy)
- [PutContainerRecipePolicy](AwsImagebuilderActions.md#putcontainerrecipepolicy)
- [PutImagePolicy](AwsImagebuilderActions.md#putimagepolicy)
- [PutImageRecipePolicy](AwsImagebuilderActions.md#putimagerecipepolicy)
- [SendWorkflowStepAction](AwsImagebuilderActions.md#sendworkflowstepaction)
- [StartImagePipelineExecution](AwsImagebuilderActions.md#startimagepipelineexecution)
- [StartResourceStateUpdate](AwsImagebuilderActions.md#startresourcestateupdate)
- [TagResource](AwsImagebuilderActions.md#tagresource)
- [UntagResource](AwsImagebuilderActions.md#untagresource)
- [UpdateDistributionConfiguration](AwsImagebuilderActions.md#updatedistributionconfiguration)
- [UpdateImagePipeline](AwsImagebuilderActions.md#updateimagepipeline)
- [UpdateInfrastructureConfiguration](AwsImagebuilderActions.md#updateinfrastructureconfiguration)
- [UpdateLifecyclePolicy](AwsImagebuilderActions.md#updatelifecyclepolicy)

## Enumeration Members

### CancelImageCreation

• **CancelImageCreation** = ``"imagebuilder:CancelImageCreation"``

Grants permission to cancel an image creation

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelImageCreation.html

#### Defined in

actions/imagebuilder.ts:17

___

### CancelLifecycleExecution

• **CancelLifecycleExecution** = ``"imagebuilder:CancelLifecycleExecution"``

Grants permission to cancel a lifecycle execution

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelLifecycleExecution.html

#### Defined in

actions/imagebuilder.ts:23

___

### CreateComponent

• **CreateComponent** = ``"imagebuilder:CreateComponent"``

Grants permission to create a new component

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html

#### Defined in

actions/imagebuilder.ts:29

___

### CreateContainerRecipe

• **CreateContainerRecipe** = ``"imagebuilder:CreateContainerRecipe"``

Grants permission to create a new Container Recipe

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateContainerRecipe.html

#### Defined in

actions/imagebuilder.ts:35

___

### CreateDistributionConfiguration

• **CreateDistributionConfiguration** = ``"imagebuilder:CreateDistributionConfiguration"``

Grants permission to create a new distribution configuration

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateDistributionConfiguration.html

#### Defined in

actions/imagebuilder.ts:41

___

### CreateImage

• **CreateImage** = ``"imagebuilder:CreateImage"``

Grants permission to create a new image

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImage.html

#### Defined in

actions/imagebuilder.ts:47

___

### CreateImagePipeline

• **CreateImagePipeline** = ``"imagebuilder:CreateImagePipeline"``

Grants permission to create a new image pipeline

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImagePipeline.html

#### Defined in

actions/imagebuilder.ts:53

___

### CreateImageRecipe

• **CreateImageRecipe** = ``"imagebuilder:CreateImageRecipe"``

Grants permission to create a new Image Recipe

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImageRecipe.html

#### Defined in

actions/imagebuilder.ts:59

___

### CreateInfrastructureConfiguration

• **CreateInfrastructureConfiguration** = ``"imagebuilder:CreateInfrastructureConfiguration"``

Grants permission to create a new infrastructure configuration

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateInfrastructureConfiguration.html

#### Defined in

actions/imagebuilder.ts:65

___

### CreateLifecyclePolicy

• **CreateLifecyclePolicy** = ``"imagebuilder:CreateLifecyclePolicy"``

Grants permission to create a new lifecycle policy

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateLifecyclePolicy.html

#### Defined in

actions/imagebuilder.ts:71

___

### CreateWorkflow

• **CreateWorkflow** = ``"imagebuilder:CreateWorkflow"``

Grants permission to create a new workflow

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateWorkflow.html

#### Defined in

actions/imagebuilder.ts:77

___

### DeleteComponent

• **DeleteComponent** = ``"imagebuilder:DeleteComponent"``

Grants permission to delete a component

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteComponent.html

#### Defined in

actions/imagebuilder.ts:83

___

### DeleteContainerRecipe

• **DeleteContainerRecipe** = ``"imagebuilder:DeleteContainerRecipe"``

Grants permission to delete a container recipe

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteContainerRecipe.html

#### Defined in

actions/imagebuilder.ts:89

___

### DeleteDistributionConfiguration

• **DeleteDistributionConfiguration** = ``"imagebuilder:DeleteDistributionConfiguration"``

Grants permission to delete a distribution configuration

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteDistributionConfiguration.html

#### Defined in

actions/imagebuilder.ts:95

___

### DeleteImage

• **DeleteImage** = ``"imagebuilder:DeleteImage"``

Grants permission to delete an image

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImage.html

#### Defined in

actions/imagebuilder.ts:101

___

### DeleteImagePipeline

• **DeleteImagePipeline** = ``"imagebuilder:DeleteImagePipeline"``

Grants permission to delete an image pipeline

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImagePipeline.html

#### Defined in

actions/imagebuilder.ts:107

___

### DeleteImageRecipe

• **DeleteImageRecipe** = ``"imagebuilder:DeleteImageRecipe"``

Grants permission to delete an image recipe

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImageRecipe.html

#### Defined in

actions/imagebuilder.ts:113

___

### DeleteInfrastructureConfiguration

• **DeleteInfrastructureConfiguration** = ``"imagebuilder:DeleteInfrastructureConfiguration"``

Grants permission to delete an infrastructure configuration

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteInfrastructureConfiguration.html

#### Defined in

actions/imagebuilder.ts:119

___

### DeleteLifecyclePolicy

• **DeleteLifecyclePolicy** = ``"imagebuilder:DeleteLifecyclePolicy"``

Grants permission to delete a lifecycle policy

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteLifecyclePolicy.html

#### Defined in

actions/imagebuilder.ts:125

___

### DeleteWorkflow

• **DeleteWorkflow** = ``"imagebuilder:DeleteWorkflow"``

Grants permission to delete a workflow

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteWorkflow.html

#### Defined in

actions/imagebuilder.ts:131

___

### GetComponent

• **GetComponent** = ``"imagebuilder:GetComponent"``

Grants permission to view details about a component

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponent.html

#### Defined in

actions/imagebuilder.ts:137

___

### GetComponentPolicy

• **GetComponentPolicy** = ``"imagebuilder:GetComponentPolicy"``

Grants permission to view the resource policy associated with a component

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponentPolicy.html

#### Defined in

actions/imagebuilder.ts:143

___

### GetContainerRecipe

• **GetContainerRecipe** = ``"imagebuilder:GetContainerRecipe"``

Grants permission to view details about a container recipe

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetContainerRecipe.html

#### Defined in

actions/imagebuilder.ts:149

___

### GetContainerRecipePolicy

• **GetContainerRecipePolicy** = ``"imagebuilder:GetContainerRecipePolicy"``

Grants permission to view the resource policy associated with a container recip
e

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetContainerRecipePolicy.html

#### Defined in

actions/imagebuilder.ts:156

___

### GetDistributionConfiguration

• **GetDistributionConfiguration** = ``"imagebuilder:GetDistributionConfiguration"``

Grants permission to view details about a distribution configuration

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetDistributionConfiguration.html

#### Defined in

actions/imagebuilder.ts:162

___

### GetImage

• **GetImage** = ``"imagebuilder:GetImage"``

Grants permission to view details about an image

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImage.html

#### Defined in

actions/imagebuilder.ts:168

___

### GetImagePipeline

• **GetImagePipeline** = ``"imagebuilder:GetImagePipeline"``

Grants permission to view details about an image pipeline

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePipeline.html

#### Defined in

actions/imagebuilder.ts:174

___

### GetImagePolicy

• **GetImagePolicy** = ``"imagebuilder:GetImagePolicy"``

Grants permission to view the resource policy associated with an image

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePolicy.html

#### Defined in

actions/imagebuilder.ts:180

___

### GetImageRecipe

• **GetImageRecipe** = ``"imagebuilder:GetImageRecipe"``

Grants permission to view details about an image recipe

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipe.html

#### Defined in

actions/imagebuilder.ts:186

___

### GetImageRecipePolicy

• **GetImageRecipePolicy** = ``"imagebuilder:GetImageRecipePolicy"``

Grants permission to view the resource policy associated with an image recipe

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipePolicy.html

#### Defined in

actions/imagebuilder.ts:192

___

### GetInfrastructureConfiguration

• **GetInfrastructureConfiguration** = ``"imagebuilder:GetInfrastructureConfiguration"``

Grants permission to view details about an infrastructure configuration

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetInfrastructureConfiguration.html

#### Defined in

actions/imagebuilder.ts:198

___

### GetLifecycleExecution

• **GetLifecycleExecution** = ``"imagebuilder:GetLifecycleExecution"``

Grants permission to view details about a lifecycle execution

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetLifecycleExecution.html

#### Defined in

actions/imagebuilder.ts:204

___

### GetLifecyclePolicy

• **GetLifecyclePolicy** = ``"imagebuilder:GetLifecyclePolicy"``

Grants permission to view details about a lifecycle policy

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetLifecyclePolicy.html

#### Defined in

actions/imagebuilder.ts:210

___

### GetWorkflow

• **GetWorkflow** = ``"imagebuilder:GetWorkflow"``

Grants permission to view details about a workflow

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetWorkflow.html

#### Defined in

actions/imagebuilder.ts:216

___

### GetWorkflowExecution

• **GetWorkflowExecution** = ``"imagebuilder:GetWorkflowExecution"``

Grants permission to view details about a workflow execution

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetWorkflowExecution.html

#### Defined in

actions/imagebuilder.ts:222

___

### GetWorkflowStepExecution

• **GetWorkflowStepExecution** = ``"imagebuilder:GetWorkflowStepExecution"``

Grants permission to view details about a workflow step execution

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetWorkflowStepExecution.html

#### Defined in

actions/imagebuilder.ts:228

___

### ImportComponent

• **ImportComponent** = ``"imagebuilder:ImportComponent"``

Grants permission to import a new component

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImportComponent.html

#### Defined in

actions/imagebuilder.ts:234

___

### ImportVmImage

• **ImportVmImage** = ``"imagebuilder:ImportVmImage"``

Grants permission to import an image

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImportVmImage.html

#### Defined in

actions/imagebuilder.ts:240

___

### ListComponentBuildVersions

• **ListComponentBuildVersions** = ``"imagebuilder:ListComponentBuildVersions"``

Grants permission to list the component build versions in your account

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponentBuildVersions.html

#### Defined in

actions/imagebuilder.ts:246

___

### ListComponents

• **ListComponents** = ``"imagebuilder:ListComponents"``

Grants permission to list the component versions owned by or shared with your a
ccount

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponents.html

#### Defined in

actions/imagebuilder.ts:253

___

### ListContainerRecipes

• **ListContainerRecipes** = ``"imagebuilder:ListContainerRecipes"``

Grants permission to list the container recipes owned by or shared with your ac
count

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListContainerRecipes.html

#### Defined in

actions/imagebuilder.ts:260

___

### ListDistributionConfigurations

• **ListDistributionConfigurations** = ``"imagebuilder:ListDistributionConfigurations"``

Grants permission to list the distribution configurations in your account

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListDistributionConfigurations.html

#### Defined in

actions/imagebuilder.ts:266

___

### ListImageBuildVersions

• **ListImageBuildVersions** = ``"imagebuilder:ListImageBuildVersions"``

Grants permission to list the image build versions in your account

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageBuildVersions.html

#### Defined in

actions/imagebuilder.ts:272

___

### ListImagePackages

• **ListImagePackages** = ``"imagebuilder:ListImagePackages"``

Grants permission to return a list of packages installed on the specified image

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePackages.html

#### Defined in

actions/imagebuilder.ts:278

___

### ListImagePipelineImages

• **ListImagePipelineImages** = ``"imagebuilder:ListImagePipelineImages"``

Grants permission to return a list of images created by the specified pipeline

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelineImages.html

#### Defined in

actions/imagebuilder.ts:284

___

### ListImagePipelines

• **ListImagePipelines** = ``"imagebuilder:ListImagePipelines"``

Grants permission to list the image pipelines in your account

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelines.html

#### Defined in

actions/imagebuilder.ts:290

___

### ListImageRecipes

• **ListImageRecipes** = ``"imagebuilder:ListImageRecipes"``

Grants permission to list the image recipes owned by or shared with your accoun
t

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageRecipes.html

#### Defined in

actions/imagebuilder.ts:297

___

### ListImageScanFindingAggregations

• **ListImageScanFindingAggregations** = ``"imagebuilder:ListImageScanFindingAggregations"``

Grants permission to list aggregations on the image scan findings in your accou
nt

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageScanFindingAggregations.html

#### Defined in

actions/imagebuilder.ts:304

___

### ListImageScanFindings

• **ListImageScanFindings** = ``"imagebuilder:ListImageScanFindings"``

Grants permission to list the image scan findings for the images in your accoun
t

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageScanFindings.html

#### Defined in

actions/imagebuilder.ts:311

___

### ListImages

• **ListImages** = ``"imagebuilder:ListImages"``

Grants permission to list the image versions owned by or shared with your accou
nt

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImages.html

#### Defined in

actions/imagebuilder.ts:318

___

### ListInfrastructureConfigurations

• **ListInfrastructureConfigurations** = ``"imagebuilder:ListInfrastructureConfigurations"``

Grants permission to list the infrastructure configurations in your account

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListInfrastructureConfigurations.html

#### Defined in

actions/imagebuilder.ts:324

___

### ListLifecycleExecutionResources

• **ListLifecycleExecutionResources** = ``"imagebuilder:ListLifecycleExecutionResources"``

Grants permission to list resources for the specified lifecycle execution

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListLifecycleExecutionResources.html

#### Defined in

actions/imagebuilder.ts:330

___

### ListLifecycleExecutions

• **ListLifecycleExecutions** = ``"imagebuilder:ListLifecycleExecutions"``

Grants permission to list lifecycle executions for the specified resource

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListLifecycleExecutions.html

#### Defined in

actions/imagebuilder.ts:336

___

### ListLifecyclePolicies

• **ListLifecyclePolicies** = ``"imagebuilder:ListLifecyclePolicies"``

Grants permission to list the lifecycle policies in your account

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListLifecyclePolicies.html

#### Defined in

actions/imagebuilder.ts:342

___

### ListTagsForResource

• **ListTagsForResource** = ``"imagebuilder:ListTagsForResource"``

Grants permission to list tags for an Image Builder resource

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/imagebuilder.ts:348

___

### ListWaitingWorkflowSteps

• **ListWaitingWorkflowSteps** = ``"imagebuilder:ListWaitingWorkflowSteps"``

Grants permission to list waiting workflow steps for the caller account

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWaitingWorkflowSteps.html

#### Defined in

actions/imagebuilder.ts:354

___

### ListWorkflowBuildVersions

• **ListWorkflowBuildVersions** = ``"imagebuilder:ListWorkflowBuildVersions"``

Grants permission to list the workflow build versions in your account

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflowBuildVersions.html

#### Defined in

actions/imagebuilder.ts:360

___

### ListWorkflowExecutions

• **ListWorkflowExecutions** = ``"imagebuilder:ListWorkflowExecutions"``

Grants permission to list workflow executions for the specified image

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflowExecutions.html

#### Defined in

actions/imagebuilder.ts:366

___

### ListWorkflowStepExecutions

• **ListWorkflowStepExecutions** = ``"imagebuilder:ListWorkflowStepExecutions"``

Grants permission to list workflow step executions for the specified workflow

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflowStepExecutions.html

#### Defined in

actions/imagebuilder.ts:372

___

### ListWorkflows

• **ListWorkflows** = ``"imagebuilder:ListWorkflows"``

Grants permission to list the workflow versions owned by or shared with your ac
count

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflows.html

#### Defined in

actions/imagebuilder.ts:379

___

### PutComponentPolicy

• **PutComponentPolicy** = ``"imagebuilder:PutComponentPolicy"``

Grants permission to set the resource policy associated with a component

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutComponentPolicy.html

#### Defined in

actions/imagebuilder.ts:385

___

### PutContainerRecipePolicy

• **PutContainerRecipePolicy** = ``"imagebuilder:PutContainerRecipePolicy"``

Grants permission to set the resource policy associated with a container recipe

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutContainerRecipePolicy.html

#### Defined in

actions/imagebuilder.ts:391

___

### PutImagePolicy

• **PutImagePolicy** = ``"imagebuilder:PutImagePolicy"``

Grants permission to set the resource policy associated with an image

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImagePolicy.html

#### Defined in

actions/imagebuilder.ts:397

___

### PutImageRecipePolicy

• **PutImageRecipePolicy** = ``"imagebuilder:PutImageRecipePolicy"``

Grants permission to set the resource policy associated with an image recipe

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImageRecipePolicy.html

#### Defined in

actions/imagebuilder.ts:403

___

### SendWorkflowStepAction

• **SendWorkflowStepAction** = ``"imagebuilder:SendWorkflowStepAction"``

Grants permission to send an action to a workflow step

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_SendWorkflowStepAction.html

#### Defined in

actions/imagebuilder.ts:409

___

### StartImagePipelineExecution

• **StartImagePipelineExecution** = ``"imagebuilder:StartImagePipelineExecution"``

Grants permission to create a new image from a pipeline

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartImagePipelineExecution.html

#### Defined in

actions/imagebuilder.ts:415

___

### StartResourceStateUpdate

• **StartResourceStateUpdate** = ``"imagebuilder:StartResourceStateUpdate"``

Grants permission to start a state update for the specified resource

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartResourceStateUpdate.html

#### Defined in

actions/imagebuilder.ts:421

___

### TagResource

• **TagResource** = ``"imagebuilder:TagResource"``

Grants permission to tag an Image Builder resource

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_TagResource.html

#### Defined in

actions/imagebuilder.ts:427

___

### UntagResource

• **UntagResource** = ``"imagebuilder:UntagResource"``

Grants permission to untag an Image Builder resource

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UntagResource.html

#### Defined in

actions/imagebuilder.ts:433

___

### UpdateDistributionConfiguration

• **UpdateDistributionConfiguration** = ``"imagebuilder:UpdateDistributionConfiguration"``

Grants permission to update an existing distribution configuration

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateDistributionConfiguration.html

#### Defined in

actions/imagebuilder.ts:439

___

### UpdateImagePipeline

• **UpdateImagePipeline** = ``"imagebuilder:UpdateImagePipeline"``

Grants permission to update an existing image pipeline

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateImagePipeline.html

#### Defined in

actions/imagebuilder.ts:445

___

### UpdateInfrastructureConfiguration

• **UpdateInfrastructureConfiguration** = ``"imagebuilder:UpdateInfrastructureConfiguration"``

Grants permission to update an existing infrastructure configuration

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateInfrastructureConfiguration.html

#### Defined in

actions/imagebuilder.ts:451

___

### UpdateLifecyclePolicy

• **UpdateLifecyclePolicy** = ``"imagebuilder:UpdateLifecyclePolicy"``

Grants permission to update an existing lifecycle policy

See https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateLifecyclePolicy.html

#### Defined in

actions/imagebuilder.ts:457
