// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Batch (BATCH)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html
 *
 * 2025-02-24T21:46:52.783Z
 */
export enum AwsBatchActions {
  /**
   * Grants permission to cancel a job in an AWS Batch job queue in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html
   */
  CancelJob = 'batch:CancelJob',
  /**
   * Grants permission to create an AWS Batch compute environment in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html
   */
  CreateComputeEnvironment = 'batch:CreateComputeEnvironment',
  /**
   * Grants permission to create an AWS Batch job queue in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateJobQueue.html
   */
  CreateJobQueue = 'batch:CreateJobQueue',
  /**
   * Grants permission to create an AWS Batch scheduling policy in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateSchedulingPolicy.html
   */
  CreateSchedulingPolicy = 'batch:CreateSchedulingPolicy',
  /**
   * Grants permission to delete an AWS Batch compute environment in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteComputeEnvironment.html
   */
  DeleteComputeEnvironment = 'batch:DeleteComputeEnvironment',
  /**
   * Grants permission to delete an AWS Batch job queue in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteJobQueue.html
   */
  DeleteJobQueue = 'batch:DeleteJobQueue',
  /**
   * Grants permission to delete an AWS Batch scheduling policy in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteSchedulingPolicy.html
   */
  DeleteSchedulingPolicy = 'batch:DeleteSchedulingPolicy',
  /**
   * Grants permission to deregister an AWS Batch job definition in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_DeregisterJobDefinition.html
   */
  DeregisterJobDefinition = 'batch:DeregisterJobDefinition',
  /**
   * Grants permission to describe one or more AWS Batch compute environments in you
   * r account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeComputeEnvironments.html
   */
  DescribeComputeEnvironments = 'batch:DescribeComputeEnvironments',
  /**
   * Grants permission to describe one or more AWS Batch job definitions in your acc
   * ount
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html
   */
  DescribeJobDefinitions = 'batch:DescribeJobDefinitions',
  /**
   * Grants permission to describe one or more AWS Batch job queues in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobQueues.html
   */
  DescribeJobQueues = 'batch:DescribeJobQueues',
  /**
   * Grants permission to describe a list of AWS Batch jobs in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html
   */
  DescribeJobs = 'batch:DescribeJobs',
  /**
   * Grants permission to describe one or more AWS Batch scheduling policies in your
   * account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeSchedulingPolicies.html
   */
  DescribeSchedulingPolicies = 'batch:DescribeSchedulingPolicies',
  /**
   * Grants permission to get a snapshot of an AWS Batch job queue in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_GetJobQueueSnapshot.html
   */
  GetJobQueueSnapshot = 'batch:GetJobQueueSnapshot',
  /**
   * Grants permission to list jobs for a specified AWS Batch job queue in your acco
   * unt
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_ListJobs.html
   */
  ListJobs = 'batch:ListJobs',
  /**
   * Grants permission to list AWS Batch scheduling policies in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_ListSchedulingPolicies.html
   */
  ListSchedulingPolicies = 'batch:ListSchedulingPolicies',
  /**
   * Grants permission to list tags for an AWS Batch resource in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'batch:ListTagsForResource',
  /**
   * Grants permission to register an AWS Batch job definition in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html
   */
  RegisterJobDefinition = 'batch:RegisterJobDefinition',
  /**
   * Grants permission to submit an AWS Batch job from a job definition in your acco
   * unt
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html
   */
  SubmitJob = 'batch:SubmitJob',
  /**
   * Grants permission to tag an AWS Batch resource in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html
   */
  TagResource = 'batch:TagResource',
  /**
   * Grants permission to terminate a job in an AWS Batch job queue in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_TerminateJob.html
   */
  TerminateJob = 'batch:TerminateJob',
  /**
   * Grants permission to untag an AWS Batch resource in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'batch:UntagResource',
  /**
   * Grants permission to update an AWS Batch compute environment in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html
   */
  UpdateComputeEnvironment = 'batch:UpdateComputeEnvironment',
  /**
   * Grants permission to update an AWS Batch job queue in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateJobQueue.html
   */
  UpdateJobQueue = 'batch:UpdateJobQueue',
  /**
   * Grants permission to update an AWS Batch scheduling policy in your account
   *
   * See https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateSchedulingPolicy.html
   */
  UpdateSchedulingPolicy = 'batch:UpdateSchedulingPolicy',
}
