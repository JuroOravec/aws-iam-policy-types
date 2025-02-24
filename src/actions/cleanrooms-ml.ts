// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Clean Rooms ML (CLEANROOMS-ML)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscleanroomsml.html
 *
 * 2025-02-24T21:46:59.987Z
 */
export enum AwsCleanroomsMlActions {
  /**
   * Grants permission to cancel a trained model
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CancelTrainedModel.html
   */
  CancelTrainedModel = 'cleanrooms-ml:CancelTrainedModel',
  /**
   * Grants permission to cancel a trained model inference job
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CancelTrainedModelInferenceJob.html
   */
  CancelTrainedModelInferenceJob = 'cleanrooms-ml:CancelTrainedModelInferenceJob',
  /**
   * Grants permission to create an audience model
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateAudienceModel.html
   */
  CreateAudienceModel = 'cleanrooms-ml:CreateAudienceModel',
  /**
   * Grants permission to create a configured audience model
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateConfiguredAudienceModel.html
   */
  CreateConfiguredAudienceModel = 'cleanrooms-ml:CreateConfiguredAudienceModel',
  /**
   * Grants permission to create a configured model algorithm
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateConfiguredModelAlgorithm.html
   */
  CreateConfiguredModelAlgorithm = 'cleanrooms-ml:CreateConfiguredModelAlgorithm',
  /**
   * Grants permission to create a configured model algorithm association
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateConfiguredModelAlgorithmAssociation.html
   */
  CreateConfiguredModelAlgorithmAssociation = 'cleanrooms-ml:CreateConfiguredModelAlgorithmAssociation',
  /**
   * Grants permission to create an ML input channel
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateMLInputChannel.html
   */
  CreateMLInputChannel = 'cleanrooms-ml:CreateMLInputChannel',
  /**
   * Grants permission to create a trained model
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateTrainedModel.html
   */
  CreateTrainedModel = 'cleanrooms-ml:CreateTrainedModel',
  /**
   * Grants permission to create a training dataset, or seed audience. In Clean Room
   * s ML, the TrainingDataset is metadata that points to a Glue table, which is rea
   * d only during AudienceModel creation
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_CreateTrainingDataset.html
   */
  CreateTrainingDataset = 'cleanrooms-ml:CreateTrainingDataset',
  /**
   * Grants permission to delete the specified audience generation job, and removes
   * all data associated with the job
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteAudienceGenerationJob.html
   */
  DeleteAudienceGenerationJob = 'cleanrooms-ml:DeleteAudienceGenerationJob',
  /**
   * Grants permission to delete the specified audience generation job, and removes
   * all data associated with the job
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteAudienceModel.html
   */
  DeleteAudienceModel = 'cleanrooms-ml:DeleteAudienceModel',
  /**
   * Grants permission to delete the specified configured audience model
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteConfiguredAudienceModel.html
   */
  DeleteConfiguredAudienceModel = 'cleanrooms-ml:DeleteConfiguredAudienceModel',
  /**
   * Grants permission to delete the specified configured audience model policy
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteConfiguredAudienceModelPolicy.html
   */
  DeleteConfiguredAudienceModelPolicy = 'cleanrooms-ml:DeleteConfiguredAudienceModelPolicy',
  /**
   * Grants permission to delete a configured model algorithm
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteConfiguredModelAlgorithm.html
   */
  DeleteConfiguredModelAlgorithm = 'cleanrooms-ml:DeleteConfiguredModelAlgorithm',
  /**
   * Grants permission to delete a configured model algorithm association
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteConfiguredModelAlgorithmAssociation.html
   */
  DeleteConfiguredModelAlgorithmAssociation = 'cleanrooms-ml:DeleteConfiguredModelAlgorithmAssociation',
  /**
   * Grants permission to delete an ML configuration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteMLConfiguration.html
   */
  DeleteMLConfiguration = 'cleanrooms-ml:DeleteMLConfiguration',
  /**
   * Grants permission to delete all data associated with the ML input channel
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteMLInputChannelData.html
   */
  DeleteMLInputChannelData = 'cleanrooms-ml:DeleteMLInputChannelData',
  /**
   * Grants permission to delete all output associated with the trained model
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteTrainedModelOutput.html
   */
  DeleteTrainedModelOutput = 'cleanrooms-ml:DeleteTrainedModelOutput',
  /**
   * Grants permission to delete a training dataset
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_DeleteTrainingDataset.html
   */
  DeleteTrainingDataset = 'cleanrooms-ml:DeleteTrainingDataset',
  /**
   * Grants permission to return information about an audience generation job
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetAudienceGenerationJob.html
   */
  GetAudienceGenerationJob = 'cleanrooms-ml:GetAudienceGenerationJob',
  /**
   * Grants permission to return information about an audience model
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetAudienceModel.html
   */
  GetAudienceModel = 'cleanrooms-ml:GetAudienceModel',
  /**
   * Grants permission to return information about a configured model algorithm asso
   * ciation created by any member in the collaboration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetCollaborationConfiguredModelAlgorithmAssociation.html
   */
  GetCollaborationConfiguredModelAlgorithmAssociation = 'cleanrooms-ml:GetCollaborationConfiguredModelAlgorithmAssociation',
  /**
   * Grants permission to return information about an ML input channel created by an
   * y member in the collaboration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetCollaborationMLInputChannel.html
   */
  GetCollaborationMLInputChannel = 'cleanrooms-ml:GetCollaborationMLInputChannel',
  /**
   * Grants permission to return information about a trained model created by any me
   * mber in the collaboration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetCollaborationTrainedModel.html
   */
  GetCollaborationTrainedModel = 'cleanrooms-ml:GetCollaborationTrainedModel',
  /**
   * Grants permission to return information about a configured audience model
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetConfiguredAudienceModel.html
   */
  GetConfiguredAudienceModel = 'cleanrooms-ml:GetConfiguredAudienceModel',
  /**
   * Grants permission to return information about a configured audience model polic
   * y
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetConfiguredAudienceModelPolicy.html
   */
  GetConfiguredAudienceModelPolicy = 'cleanrooms-ml:GetConfiguredAudienceModelPolicy',
  /**
   * Grants permission to return information about a configured model algorithm
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetConfiguredModelAlgorithm.html
   */
  GetConfiguredModelAlgorithm = 'cleanrooms-ml:GetConfiguredModelAlgorithm',
  /**
   * Grants permission to return information about a configured model algorithm asso
   * ciation
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetConfiguredModelAlgorithmAssociation.html
   */
  GetConfiguredModelAlgorithmAssociation = 'cleanrooms-ml:GetConfiguredModelAlgorithmAssociation',
  /**
   * Grants permission to return information about an ML configuration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetMLConfiguration.html
   */
  GetMLConfiguration = 'cleanrooms-ml:GetMLConfiguration',
  /**
   * Grants permission to return information about an ML input channel
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetMLInputChannel.html
   */
  GetMLInputChannel = 'cleanrooms-ml:GetMLInputChannel',
  /**
   * Grants permission to return information about a trained model
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetTrainedModel.html
   */
  GetTrainedModel = 'cleanrooms-ml:GetTrainedModel',
  /**
   * Grants permission to return information about a trained model inference job
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetTrainedModelInferenceJob.html
   */
  GetTrainedModelInferenceJob = 'cleanrooms-ml:GetTrainedModelInferenceJob',
  /**
   * Grants permission to return information about a training dataset
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_GetTrainingDataset.html
   */
  GetTrainingDataset = 'cleanrooms-ml:GetTrainingDataset',
  /**
   * Grants permission to return a list of the audience export jobs
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListAudienceExportJobs.html
   */
  ListAudienceExportJobs = 'cleanrooms-ml:ListAudienceExportJobs',
  /**
   * Grants permission to return a list of audience generation jobs
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListAudienceGenerationJobs.html
   */
  ListAudienceGenerationJobs = 'cleanrooms-ml:ListAudienceGenerationJobs',
  /**
   * Grants permission to return a list of audience models
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListAudienceModels.html
   */
  ListAudienceModels = 'cleanrooms-ml:ListAudienceModels',
  /**
   * Grants permission to return a list of configured model algorithms created by an
   * y member in the collaboration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListCollaborationConfiguredModelAlgorithmAssociations.html
   */
  ListCollaborationConfiguredModelAlgorithmAssociations = 'cleanrooms-ml:ListCollaborationConfiguredModelAlgorithmAssociations',
  /**
   * Grants permission to return a list of ML input channels created by any member i
   * n the collaboration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListCollaborationMLInputChannels.html
   */
  ListCollaborationMLInputChannels = 'cleanrooms-ml:ListCollaborationMLInputChannels',
  /**
   * Grants permission to return a list of trained model export jobs started by any
   * member in the collaboration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListCollaborationTrainedModelExportJobs.html
   */
  ListCollaborationTrainedModelExportJobs = 'cleanrooms-ml:ListCollaborationTrainedModelExportJobs',
  /**
   * Grants permission to return a list of trained model inference jobs started by a
   * ny member in the collaboration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListCollaborationTrainedModelInferenceJobs.html
   */
  ListCollaborationTrainedModelInferenceJobs = 'cleanrooms-ml:ListCollaborationTrainedModelInferenceJobs',
  /**
   * Grants permission to return a list of trained models created by any member in t
   * he collaboration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListCollaborationTrainedModels.html
   */
  ListCollaborationTrainedModels = 'cleanrooms-ml:ListCollaborationTrainedModels',
  /**
   * Grants permission to return a list of configured audience models
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListConfiguredAudienceModels.html
   */
  ListConfiguredAudienceModels = 'cleanrooms-ml:ListConfiguredAudienceModels',
  /**
   * Grants permission to return a list of configured model algorithm associations
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListConfiguredModelAlgorithmAssociations.html
   */
  ListConfiguredModelAlgorithmAssociations = 'cleanrooms-ml:ListConfiguredModelAlgorithmAssociations',
  /**
   * Grants permission to return a list of configured model algorithms
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListConfiguredModelAlgorithms.html
   */
  ListConfiguredModelAlgorithms = 'cleanrooms-ml:ListConfiguredModelAlgorithms',
  /**
   * Grants permission to return a list of ML input channels
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListMLInputChannels.html
   */
  ListMLInputChannels = 'cleanrooms-ml:ListMLInputChannels',
  /**
   * Grants permission to return a list of tags for a provided resource
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'cleanrooms-ml:ListTagsForResource',
  /**
   * Grants permission to return a list of trained model inference jobs
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTrainedModelInferenceJobs.html
   */
  ListTrainedModelInferenceJobs = 'cleanrooms-ml:ListTrainedModelInferenceJobs',
  /**
   * Grants permission to return a list of trained models
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTrainedModels.html
   */
  ListTrainedModels = 'cleanrooms-ml:ListTrainedModels',
  /**
   * Grants permission to return a list of training datasets
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTrainingDatasets.html
   */
  ListTrainingDatasets = 'cleanrooms-ml:ListTrainingDatasets',
  /**
   * Grants permission to create or update the resource policy for a configured audi
   * ence model
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_PutConfiguredAudienceModelPolicy.html
   */
  PutConfiguredAudienceModelPolicy = 'cleanrooms-ml:PutConfiguredAudienceModelPolicy',
  /**
   * Grants permission to put an ML configuration
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_PutMLConfiguration.html
   */
  PutMLConfiguration = 'cleanrooms-ml:PutMLConfiguration',
  /**
   * Grants permission to export an audience of a specified size after you have gene
   * rated an audience
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_StartAudienceExportJob.html
   */
  StartAudienceExportJob = 'cleanrooms-ml:StartAudienceExportJob',
  /**
   * Grants permission to start the audience generation job
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_StartAudienceGenerationJob.html
   */
  StartAudienceGenerationJob = 'cleanrooms-ml:StartAudienceGenerationJob',
  /**
   * Grants permission to start a trained model export job
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_StartTrainedModelExportJob.html
   */
  StartTrainedModelExportJob = 'cleanrooms-ml:StartTrainedModelExportJob',
  /**
   * Grants permission to start a trained model inference job
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_StartTrainedModelInferenceJob.html
   */
  StartTrainedModelInferenceJob = 'cleanrooms-ml:StartTrainedModelInferenceJob',
  /**
   * Grants permission to tag a specific resource
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_TagResource.html
   */
  TagResource = 'cleanrooms-ml:TagResource',
  /**
   * Grants permission to untag a specific resource
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_UntagResource.html
   */
  UnTagResource = 'cleanrooms-ml:UnTagResource',
  /**
   * Grants permission to update a configured audience model.
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_UpdateConfiguredAudienceModel.html
   */
  UpdateConfiguredAudienceModel = 'cleanrooms-ml:UpdateConfiguredAudienceModel',
}
