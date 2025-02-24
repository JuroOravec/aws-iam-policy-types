// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Data Pipeline (DATAPIPELINE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatapipeline.html
 *
 * 2025-02-24T21:47:31.226Z
 */
export enum AwsDatapipelineActions {
  /**
   * Grants permission to validate the specified pipeline and starts processing pipe
   * line tasks. If the pipeline does not pass validation, activation fails
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ActivatePipeline.html
   */
  ActivatePipeline = 'datapipeline:ActivatePipeline',
  /**
   * Grants permission to add or modify tags for the specified pipeline
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_AddTags.html
   */
  AddTags = 'datapipeline:AddTags',
  /**
   * Grants permission to create a new, empty pipeline
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_CreatePipeline.html
   */
  CreatePipeline = 'datapipeline:CreatePipeline',
  /**
   * Grants permission to Deactivate the specified running pipeline
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DeactivatePipeline.html
   */
  DeactivatePipeline = 'datapipeline:DeactivatePipeline',
  /**
   * Grants permission to delete a pipeline, its pipeline definition, and its run hi
   * story
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DeletePipeline.html
   */
  DeletePipeline = 'datapipeline:DeletePipeline',
  /**
   * Grants permission to get the object definitions for a set of objects associated
   * with the pipeline
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribeObjects.html
   */
  DescribeObjects = 'datapipeline:DescribeObjects',
  /**
   * Grants permission to retrieves metadata about one or more pipelines
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribePipelines.html
   */
  DescribePipelines = 'datapipeline:DescribePipelines',
  /**
   * Grants permission to task runners to call EvaluateExpression, to evaluate a str
   * ing in the context of the specified object
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_EvaluateExpression.html
   */
  EvaluateExpression = 'datapipeline:EvaluateExpression',
  /**
   * Grants permission to call GetAccountLimits
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetAccountLimits.html
   */
  GetAccountLimits = 'datapipeline:GetAccountLimits',
  /**
   * Grants permission to gets the definition of the specified pipeline
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetPipelineDefinition.html
   */
  GetPipelineDefinition = 'datapipeline:GetPipelineDefinition',
  /**
   * Grants permission to list the pipeline identifiers for all active pipelines tha
   * t you have permission to access
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ListPipelines.html
   */
  ListPipelines = 'datapipeline:ListPipelines',
  /**
   * Grants permission to task runners to call PollForTask, to receive a task to per
   * form from AWS Data Pipeline
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PollForTask.html
   */
  PollForTask = 'datapipeline:PollForTask',
  /**
   * Grants permission to call PutAccountLimits
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutAccountLimits.html
   */
  PutAccountLimits = 'datapipeline:PutAccountLimits',
  /**
   * Grants permission to add tasks, schedules, and preconditions to the specified p
   * ipeline
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutPipelineDefinition.html
   */
  PutPipelineDefinition = 'datapipeline:PutPipelineDefinition',
  /**
   * Grants permission to query the specified pipeline for the names of objects that
   * match the specified set of conditions
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_QueryObjects.html
   */
  QueryObjects = 'datapipeline:QueryObjects',
  /**
   * Grants permission to remove existing tags from the specified pipeline
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_RemoveTags.html
   */
  RemoveTags = 'datapipeline:RemoveTags',
  /**
   * Grants permission to task runners to call ReportTaskProgress, when they are ass
   * igned a task to acknowledge that it has the task
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskProgress.html
   */
  ReportTaskProgress = 'datapipeline:ReportTaskProgress',
  /**
   * Grants permission to task runners to call ReportTaskRunnerHeartbeat every 15 mi
   * nutes to indicate that they are operational
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskRunnerHeartbeat.html
   */
  ReportTaskRunnerHeartbeat = 'datapipeline:ReportTaskRunnerHeartbeat',
  /**
   * Grants permission to requests that the status of the specified physical or logi
   * cal pipeline objects be updated in the specified pipeline
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetStatus.html
   */
  SetStatus = 'datapipeline:SetStatus',
  /**
   * Grants permission to task runners to call SetTaskStatus to notify AWS Data Pipe
   * line that a task is completed and provide information about the final status
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetTaskStatus.html
   */
  SetTaskStatus = 'datapipeline:SetTaskStatus',
  /**
   * Grants permission to validate the specified pipeline definition to ensure that
   * it is well formed and can be run without error
   *
   * See https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ValidatePipelineDefinition.html
   */
  ValidatePipelineDefinition = 'datapipeline:ValidatePipelineDefinition',
}
