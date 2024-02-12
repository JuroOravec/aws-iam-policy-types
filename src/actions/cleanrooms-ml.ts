// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Clean Rooms ML (CLEANROOMS-ML)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscleanroomsml.html
 *
 * 2024-02-12T09:56:19.035Z
 */
export enum AwsCleanroomsMlActions {
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
   * Grants permission to return a list of configured audience models
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListConfiguredAudienceModels.html
   */
  ListConfiguredAudienceModels = 'cleanrooms-ml:ListConfiguredAudienceModels',
  /**
   * Grants permission to return a list of tags for a provided resource
   *
   * See https://docs.aws.amazon.com/cleanrooms-ml/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'cleanrooms-ml:ListTagsForResource',
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