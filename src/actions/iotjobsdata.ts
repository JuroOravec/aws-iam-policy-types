// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS IoT Jobs DataPlane (IOTJOBSDATA)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotjobsdataplane.html
 *
 * 2024-02-12T09:57:51.967Z
 */
export enum AwsIotjobsdataActions {
  /**
   * Grants permission to describe a job execution
   *
   * See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_DescribeJobExecution.html
   */
  DescribeJobExecution = 'iotjobsdata:DescribeJobExecution',
  /**
   * Grants permission to get the list of all jobs for a thing that are not in a ter
   * minal state
   *
   * See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_GetPendingJobExecutions.html
   */
  GetPendingJobExecutions = 'iotjobsdata:GetPendingJobExecutions',
  /**
   * Grants permission to get and start the next pending job execution for a thing
   *
   * See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_StartNextPendingJobExecution.html
   */
  StartNextPendingJobExecution = 'iotjobsdata:StartNextPendingJobExecution',
  /**
   * Grants permission to update a job execution
   *
   * See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_UpdateJobExecution.html
   */
  UpdateJobExecution = 'iotjobsdata:UpdateJobExecution',
}