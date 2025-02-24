// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Personalize (PERSONALIZE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpersonalize.html
 *
 * 2025-02-24T21:49:11.864Z
 */
export enum AwsPersonalizeActions {
  /**
   * Grants permission to create a batch inference job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateBatchInferenceJob.html
   */
  CreateBatchInferenceJob = 'personalize:CreateBatchInferenceJob',
  /**
   * Grants permission to create a batch segment job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateBatchSegmentJob.html
   */
  CreateBatchSegmentJob = 'personalize:CreateBatchSegmentJob',
  /**
   * Grants permission to create a campaign
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html
   */
  CreateCampaign = 'personalize:CreateCampaign',
  /**
   * Grants permission to create a data deletion job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataDeletionJob.html
   */
  CreateDataDeletionJob = 'personalize:CreateDataDeletionJob',
  /**
   * Grants permission to create a data insights job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/analyzing-data.html
   */
  CreateDataInsightsJob = 'personalize:CreateDataInsightsJob',
  /**
   * Grants permission to create a dataset
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html
   */
  CreateDataset = 'personalize:CreateDataset',
  /**
   * Grants permission to create a dataset export job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html
   */
  CreateDatasetExportJob = 'personalize:CreateDatasetExportJob',
  /**
   * Grants permission to create a dataset group
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html
   */
  CreateDatasetGroup = 'personalize:CreateDatasetGroup',
  /**
   * Grants permission to create a dataset import job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html
   */
  CreateDatasetImportJob = 'personalize:CreateDatasetImportJob',
  /**
   * Grants permission to create an event tracker
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html
   */
  CreateEventTracker = 'personalize:CreateEventTracker',
  /**
   * Grants permission to create a filter
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateFilter.html
   */
  CreateFilter = 'personalize:CreateFilter',
  /**
   * Grants permission to create a metric attribution
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateMetricAttribution.html
   */
  CreateMetricAttribution = 'personalize:CreateMetricAttribution',
  /**
   * Grants permission to create a recommender
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html
   */
  CreateRecommender = 'personalize:CreateRecommender',
  /**
   * Grants permission to create a schema
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html
   */
  CreateSchema = 'personalize:CreateSchema',
  /**
   * Grants permission to create a solution
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html
   */
  CreateSolution = 'personalize:CreateSolution',
  /**
   * Grants permission to create a solution version
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html
   */
  CreateSolutionVersion = 'personalize:CreateSolutionVersion',
  /**
   * Grants permission to delete a campaign
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html
   */
  DeleteCampaign = 'personalize:DeleteCampaign',
  /**
   * Grants permission to delete a dataset
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html
   */
  DeleteDataset = 'personalize:DeleteDataset',
  /**
   * Grants permission to delete a dataset group
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html
   */
  DeleteDatasetGroup = 'personalize:DeleteDatasetGroup',
  /**
   * Grants permission to delete an event tracker
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html
   */
  DeleteEventTracker = 'personalize:DeleteEventTracker',
  /**
   * Grants permission to delete a filter
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteFilter.html
   */
  DeleteFilter = 'personalize:DeleteFilter',
  /**
   * Grants permission to delete a metric attribution
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteMetricAttribution.html
   */
  DeleteMetricAttribution = 'personalize:DeleteMetricAttribution',
  /**
   * Grants permission to delete a recommender
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html
   */
  DeleteRecommender = 'personalize:DeleteRecommender',
  /**
   * Grants permission to delete a schema
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html
   */
  DeleteSchema = 'personalize:DeleteSchema',
  /**
   * Grants permission to delete a solution including all versions of the solution
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html
   */
  DeleteSolution = 'personalize:DeleteSolution',
  /**
   * Grants permission to describe an algorithm
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeAlgorithm.html
   */
  DescribeAlgorithm = 'personalize:DescribeAlgorithm',
  /**
   * Grants permission to describe a batch inference job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeBatchInferenceJob.html
   */
  DescribeBatchInferenceJob = 'personalize:DescribeBatchInferenceJob',
  /**
   * Grants permission to describe a batch segment job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeBatchSegmentJob.html
   */
  DescribeBatchSegmentJob = 'personalize:DescribeBatchSegmentJob',
  /**
   * Grants permission to describe a campaign
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html
   */
  DescribeCampaign = 'personalize:DescribeCampaign',
  /**
   * Grants permission to describe a data deletion job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataDeletionJob.html
   */
  DescribeDataDeletionJob = 'personalize:DescribeDataDeletionJob',
  /**
   * Grants permission to describe a data insights job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/analyzing-data.html
   */
  DescribeDataInsightsJob = 'personalize:DescribeDataInsightsJob',
  /**
   * Grants permission to describe a dataset
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html
   */
  DescribeDataset = 'personalize:DescribeDataset',
  /**
   * Grants permission to describe a dataset export job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html
   */
  DescribeDatasetExportJob = 'personalize:DescribeDatasetExportJob',
  /**
   * Grants permission to describe a dataset group
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html
   */
  DescribeDatasetGroup = 'personalize:DescribeDatasetGroup',
  /**
   * Grants permission to describe a dataset import job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html
   */
  DescribeDatasetImportJob = 'personalize:DescribeDatasetImportJob',
  /**
   * Grants permission to describe an event tracker
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html
   */
  DescribeEventTracker = 'personalize:DescribeEventTracker',
  /**
   * Grants permission to describe a feature transformation
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeFeatureTransformation.html
   */
  DescribeFeatureTransformation = 'personalize:DescribeFeatureTransformation',
  /**
   * Grants permission to describe a filter
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeFilter.html
   */
  DescribeFilter = 'personalize:DescribeFilter',
  /**
   * Grants permission to describe a metric attribution
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeMetricAttribution.html
   */
  DescribeMetricAttribution = 'personalize:DescribeMetricAttribution',
  /**
   * Grants permission to describe a recipe
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html
   */
  DescribeRecipe = 'personalize:DescribeRecipe',
  /**
   * Grants permission to describe a recommender
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html
   */
  DescribeRecommender = 'personalize:DescribeRecommender',
  /**
   * Grants permission to describe a schema
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html
   */
  DescribeSchema = 'personalize:DescribeSchema',
  /**
   * Grants permission to describe a solution
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html
   */
  DescribeSolution = 'personalize:DescribeSolution',
  /**
   * Grants permission to describe a version of a solution
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html
   */
  DescribeSolutionVersion = 'personalize:DescribeSolutionVersion',
  /**
   * Grants permission to get a list of recommended actions
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetActionRecommendations.html
   */
  GetActionRecommendations = 'personalize:GetActionRecommendations',
  /**
   * Grants permission to get data insights from a data insights job
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/analyzing-data.html
   */
  GetDataInsights = 'personalize:GetDataInsights',
  /**
   * Grants permission to get a re-ranked list of recommendations
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html
   */
  GetPersonalizedRanking = 'personalize:GetPersonalizedRanking',
  /**
   * Grants permission to get a list of recommendations from a campaign
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html
   */
  GetRecommendations = 'personalize:GetRecommendations',
  /**
   * Grants permission to get metrics for a solution version
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html
   */
  GetSolutionMetrics = 'personalize:GetSolutionMetrics',
  /**
   * Grants permission to list batch inference jobs
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html
   */
  ListBatchInferenceJobs = 'personalize:ListBatchInferenceJobs',
  /**
   * Grants permission to list batch segment jobs
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html
   */
  ListBatchSegmentJobs = 'personalize:ListBatchSegmentJobs',
  /**
   * Grants permission to list campaigns
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html
   */
  ListCampaigns = 'personalize:ListCampaigns',
  /**
   * Grants permission to list data deletion jobs
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListDataDeletionJobs.html
   */
  ListDataDeletionJobs = 'personalize:ListDataDeletionJobs',
  /**
   * Grants permission to list data insights jobs
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/analyzing-data.html
   */
  ListDataInsightsJobs = 'personalize:ListDataInsightsJobs',
  /**
   * Grants permission to list dataset export jobs
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetExportJobs.html
   */
  ListDatasetExportJobs = 'personalize:ListDatasetExportJobs',
  /**
   * Grants permission to list dataset groups
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html
   */
  ListDatasetGroups = 'personalize:ListDatasetGroups',
  /**
   * Grants permission to list dataset import jobs
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html
   */
  ListDatasetImportJobs = 'personalize:ListDatasetImportJobs',
  /**
   * Grants permission to list datasets
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html
   */
  ListDatasets = 'personalize:ListDatasets',
  /**
   * Grants permission to list event trackers
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html
   */
  ListEventTrackers = 'personalize:ListEventTrackers',
  /**
   * Grants permission to list filters
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListFilters.html
   */
  ListFilters = 'personalize:ListFilters',
  /**
   * Grants permission to list metric attribution metrics
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListMetricAttributionMetrics.html
   */
  ListMetricAttributionMetrics = 'personalize:ListMetricAttributionMetrics',
  /**
   * Grants permission to list metric attributions
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListMetricAttributions.html
   */
  ListMetricAttributions = 'personalize:ListMetricAttributions',
  /**
   * Grants permission to list recipes
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecipes.html
   */
  ListRecipes = 'personalize:ListRecipes',
  /**
   * Grants permission to list recommenders
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html
   */
  ListRecommenders = 'personalize:ListRecommenders',
  /**
   * Grants permission to list schemas
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html
   */
  ListSchemas = 'personalize:ListSchemas',
  /**
   * Grants permission to list versions of a solution
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html
   */
  ListSolutionVersions = 'personalize:ListSolutionVersions',
  /**
   * Grants permission to list solutions
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html
   */
  ListSolutions = 'personalize:ListSolutions',
  /**
   * Grants permission to list tags for a resource
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_ListTagsForResource.html
   */
  ListTagsForResource = 'personalize:ListTagsForResource',
  /**
   * Grants permission to put real time action interaction data
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutActionInteractions.html
   */
  PutActionInteractions = 'personalize:PutActionInteractions',
  /**
   * Grants permission to ingest Actions data
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutActions.html
   */
  PutActions = 'personalize:PutActions',
  /**
   * Grants permission to put real time event data
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html
   */
  PutEvents = 'personalize:PutEvents',
  /**
   * Grants permission to ingest Items data
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutItems.html
   */
  PutItems = 'personalize:PutItems',
  /**
   * Grants permission to ingest Users data
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutUsers.html
   */
  PutUsers = 'personalize:PutUsers',
  /**
   * Grants permission to start a recommender
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_StartRecommender.html
   */
  StartRecommender = 'personalize:StartRecommender',
  /**
   * Grants permission to stop a recommender
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_StopRecommender.html
   */
  StopRecommender = 'personalize:StopRecommender',
  /**
   * Grants permission to stop a solution version creation
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_StopSolutionVersionCreation.html
   */
  StopSolutionVersionCreation = 'personalize:StopSolutionVersionCreation',
  /**
   * Grants permission to tag a resource
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_TagResource.html
   */
  TagResource = 'personalize:TagResource',
  /**
   * Grants permission to untag a resource
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UntagResource.html
   */
  UntagResource = 'personalize:UntagResource',
  /**
   * Grants permission to update a campaign
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html
   */
  UpdateCampaign = 'personalize:UpdateCampaign',
  /**
   * Grants permission to update a dataset
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateDataset.html
   */
  UpdateDataset = 'personalize:UpdateDataset',
  /**
   * Grants permission to update a metric attribution
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateMetricAttribution.html
   */
  UpdateMetricAttribution = 'personalize:UpdateMetricAttribution',
  /**
   * Grants permission to update a recommender
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html
   */
  UpdateRecommender = 'personalize:UpdateRecommender',
  /**
   * Grants permission to update a solution
   *
   * See https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateSolution.html
   */
  UpdateSolution = 'personalize:UpdateSolution',
}
