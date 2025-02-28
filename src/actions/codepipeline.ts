// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS CodePipeline (CODEPIPELINE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodepipeline.html
 *
 * 2025-02-24T21:47:17.276Z
 */
export enum AwsCodepipelineActions {
  /**
   * Grants permission to view information about a specified job and whether that jo
   * b has been received by the job worker
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeJob.html
   */
  AcknowledgeJob = 'codepipeline:AcknowledgeJob',
  /**
   * Grants permission to confirm that a job worker has received the specified job (
   * partner actions only)
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeThirdPartyJob.html
   */
  AcknowledgeThirdPartyJob = 'codepipeline:AcknowledgeThirdPartyJob',
  /**
   * Grants permission to create a custom action that you can use in the pipelines a
   * ssociated with your AWS account
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreateCustomActionType.html
   */
  CreateCustomActionType = 'codepipeline:CreateCustomActionType',
  /**
   * Grants permission to create a uniquely named pipeline
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreatePipeline.html
   */
  CreatePipeline = 'codepipeline:CreatePipeline',
  /**
   * Grants permission to delete a custom action
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteCustomActionType.html
   */
  DeleteCustomActionType = 'codepipeline:DeleteCustomActionType',
  /**
   * Grants permission to delete a specified pipeline
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeletePipeline.html
   */
  DeletePipeline = 'codepipeline:DeletePipeline',
  /**
   * Grants permission to delete a specified webhook
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteWebhook.html
   */
  DeleteWebhook = 'codepipeline:DeleteWebhook',
  /**
   * Grants permission to remove the registration of a webhook with the third party
   * specified in its configuration
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeregisterWebhookWithThirdParty.html
   */
  DeregisterWebhookWithThirdParty = 'codepipeline:DeregisterWebhookWithThirdParty',
  /**
   * Grants permission to prevent revisions from transitioning to the next stage in
   * a pipeline
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DisableStageTransition.html
   */
  DisableStageTransition = 'codepipeline:DisableStageTransition',
  /**
   * Grants permission to allow revisions to transition to the next stage in a pipel
   * ine
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_EnableStageTransition.html
   */
  EnableStageTransition = 'codepipeline:EnableStageTransition',
  /**
   * Grants permission to view information about an action type
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetActionType.html
   */
  GetActionType = 'codepipeline:GetActionType',
  /**
   * Grants permission to view information about a job (custom actions only)
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetJobDetails.html
   */
  GetJobDetails = 'codepipeline:GetJobDetails',
  /**
   * Grants permission to retrieve information about a pipeline structure
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipeline.html
   */
  GetPipeline = 'codepipeline:GetPipeline',
  /**
   * Grants permission to view information about an execution of a pipeline, includi
   * ng details about artifacts, the pipeline execution ID, and the name, version, a
   * nd status of the pipeline
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineExecution.html
   */
  GetPipelineExecution = 'codepipeline:GetPipelineExecution',
  /**
   * Grants permission to view information about the current state of the stages and
   * actions of a pipeline
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineState.html
   */
  GetPipelineState = 'codepipeline:GetPipelineState',
  /**
   * Grants permission to view the details of a job for a third-party action (partne
   * r actions only)
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetThirdPartyJobDetails.html
   */
  GetThirdPartyJobDetails = 'codepipeline:GetThirdPartyJobDetails',
  /**
   * Grants permission to list the action executions that have occurred in a pipelin
   * e
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionExecutions.html
   */
  ListActionExecutions = 'codepipeline:ListActionExecutions',
  /**
   * Grants permission to list a summary of all the action types available for pipel
   * ines in your account
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionTypes.html
   */
  ListActionTypes = 'codepipeline:ListActionTypes',
  /**
   * Grants permission to list a summary of the most recent executions for a pipelin
   * e
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelineExecutions.html
   */
  ListPipelineExecutions = 'codepipeline:ListPipelineExecutions',
  /**
   * Grants permission to list a summary of all the pipelines associated with your A
   * WS account
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelines.html
   */
  ListPipelines = 'codepipeline:ListPipelines',
  /**
   * Grants permission to list the rule executions that have occurred in a pipeline
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListRuleExecutions.html
   */
  ListRuleExecutions = 'codepipeline:ListRuleExecutions',
  /**
   * Grants permission to list a summary of all the rule types available for pipelin
   * es in your account
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListRuleTypes.html
   */
  ListRuleTypes = 'codepipeline:ListRuleTypes',
  /**
   * Grants permission to list tags for a CodePipeline resource
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'codepipeline:ListTagsForResource',
  /**
   * Grants permission to list all of the webhooks associated with your AWS account
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListWebhooks.html
   */
  ListWebhooks = 'codepipeline:ListWebhooks',
  /**
   * Grants permission to resume the pipeline execution by overriding a condition in
   * a stage
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_OverrideStageCondition.html
   */
  OverrideStageCondition = 'codepipeline:OverrideStageCondition',
  /**
   * Grants permission to view information about any jobs for CodePipeline to act on
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForJobs.html
   */
  PollForJobs = 'codepipeline:PollForJobs',
  /**
   * Grants permission to determine whether there are any third-party jobs for a job
   * worker to act on (partner actions only)
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForThirdPartyJobs.html
   */
  PollForThirdPartyJobs = 'codepipeline:PollForThirdPartyJobs',
  /**
   * Grants permission to edit actions in a pipeline
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutActionRevision.html
   */
  PutActionRevision = 'codepipeline:PutActionRevision',
  /**
   * Grants permission to provide a response (Approved or Rejected) to a manual appr
   * oval request in CodePipeline
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutApprovalResult.html
   */
  PutApprovalResult = 'codepipeline:PutApprovalResult',
  /**
   * Grants permission to represent the failure of a job as returned to the pipeline
   * by a job worker (custom actions only)
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobFailureResult.html
   */
  PutJobFailureResult = 'codepipeline:PutJobFailureResult',
  /**
   * Grants permission to represent the success of a job as returned to the pipeline
   * by a job worker (custom actions only)
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobSuccessResult.html
   */
  PutJobSuccessResult = 'codepipeline:PutJobSuccessResult',
  /**
   * Grants permission to represent the failure of a third-party job as returned to
   * the pipeline by a job worker (partner actions only)
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobFailureResult.html
   */
  PutThirdPartyJobFailureResult = 'codepipeline:PutThirdPartyJobFailureResult',
  /**
   * Grants permission to represent the success of a third-party job as returned to
   * the pipeline by a job worker (partner actions only)
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobSuccessResult.html
   */
  PutThirdPartyJobSuccessResult = 'codepipeline:PutThirdPartyJobSuccessResult',
  /**
   * Grants permission to create or update a webhook
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutWebhook.html
   */
  PutWebhook = 'codepipeline:PutWebhook',
  /**
   * Grants permission to register a webhook with the third party specified in its c
   * onfiguration
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RegisterWebhookWithThirdParty.html
   */
  RegisterWebhookWithThirdParty = 'codepipeline:RegisterWebhookWithThirdParty',
  /**
   * Grants permission to resume the pipeline execution by retrying the last failed
   * actions in a stage
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RetryStageExecution.html
   */
  RetryStageExecution = 'codepipeline:RetryStageExecution',
  /**
   * Grants permission to rollback the stage to a previous successful execution
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RollbackStage.html
   */
  RollbackStage = 'codepipeline:RollbackStage',
  /**
   * Grants permission to run the most recent revision through the pipeline
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StartPipelineExecution.html
   */
  StartPipelineExecution = 'codepipeline:StartPipelineExecution',
  /**
   * Grants permission to stop an in-progress pipeline execution
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StopPipelineExecution.html
   */
  StopPipelineExecution = 'codepipeline:StopPipelineExecution',
  /**
   * Grants permission to tag a CodePipeline resource
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_TagResource.html
   */
  TagResource = 'codepipeline:TagResource',
  /**
   * Grants permission to remove a tag from a CodePipeline resource
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'codepipeline:UntagResource',
  /**
   * Grants permission to update an action type
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UpdateActionType.html
   */
  UpdateActionType = 'codepipeline:UpdateActionType',
  /**
   * Grants permission to update a pipeline with changes to the structure of the pip
   * eline
   *
   * See https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UpdatePipeline.html
   */
  UpdatePipeline = 'codepipeline:UpdatePipeline',
}
