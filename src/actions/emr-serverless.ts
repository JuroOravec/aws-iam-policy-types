// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon EMR Serverless (EMR-SERVERLESS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemrserverless.html
 *
 * 2024-02-12T09:57:21.412Z
 */
export enum AwsEmrServerlessActions {
  /**
   * Grants permission to execute interactive workloads on an application
   *
   * See https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/interactive-workloads.html
   */
  AccessInteractiveEndpoints = 'emr-serverless:AccessInteractiveEndpoints',
  /**
   * Grants permission to cancel a job run
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_CancelJobRun.html
   */
  CancelJobRun = 'emr-serverless:CancelJobRun',
  /**
   * Grants permission to create an Application
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_CreateApplication.html
   */
  CreateApplication = 'emr-serverless:CreateApplication',
  /**
   * Grants permission to delete an application
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_DeleteApplication.html
   */
  DeleteApplication = 'emr-serverless:DeleteApplication',
  /**
   * Grants permission to get application
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetApplication.html
   */
  GetApplication = 'emr-serverless:GetApplication',
  /**
   * Grants permission to get job run dashboard
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetDashboardForJobRun.html
   */
  GetDashboardForJobRun = 'emr-serverless:GetDashboardForJobRun',
  /**
   * Grants permission to get a job run
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetJobRun.html
   */
  GetJobRun = 'emr-serverless:GetJobRun',
  /**
   * Grants permission to list applications
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ListApplications.html
   */
  ListApplications = 'emr-serverless:ListApplications',
  /**
   * Grants permission to list job runs associated with an application
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ListJobRuns.html
   */
  ListJobRuns = 'emr-serverless:ListJobRuns',
  /**
   * Grants permission to list tags for the specified resource
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'emr-serverless:ListTagsForResource',
  /**
   * Grants permission to Start an application
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartApplication.html
   */
  StartApplication = 'emr-serverless:StartApplication',
  /**
   * Grants permission to start a job run
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html
   */
  StartJobRun = 'emr-serverless:StartJobRun',
  /**
   * Grants permission to Stop an application
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StopApplication.html
   */
  StopApplication = 'emr-serverless:StopApplication',
  /**
   * Grants permission to tag the specified resource
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_TagResource.html
   */
  TagResource = 'emr-serverless:TagResource',
  /**
   * Grants permission to untag the specified resource
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'emr-serverless:UntagResource',
  /**
   * Grants permission to Update an application
   *
   * See https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_UpdateApplication.html
   */
  UpdateApplication = 'emr-serverless:UpdateApplication',
}
