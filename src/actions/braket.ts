// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Braket (BRAKET)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbraket.html
 *
 * 2025-02-24T21:46:56.283Z
 */
export enum AwsBraketActions {
  /**
   * Grants permission to accept the Amazon Braket user agreement
   *
   * See ${UserGuideDocPage}
   */
  AcceptUserAgreement = 'braket:AcceptUserAgreement',
  /**
   * Grants permission to check if an Amazon Braket feature is enabled for an accoun
   * t. Customers need this permission to use all features available in the console
   *
   * See ${UserGuideDocPage}
   */
  AccessBraketFeature = 'braket:AccessBraketFeature',
  /**
   * Grants permission to cancel a job
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_CancelJob.html
   */
  CancelJob = 'braket:CancelJob',
  /**
   * Grants permission to cancel a quantum task
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_CancelQuantumTask.html
   */
  CancelQuantumTask = 'braket:CancelQuantumTask',
  /**
   * Grants permission to create a job
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateJob.html
   */
  CreateJob = 'braket:CreateJob',
  /**
   * Grants permission to create a quantum task
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateQuantumTask.html
   */
  CreateQuantumTask = 'braket:CreateQuantumTask',
  /**
   * Grants permission to retrieve information about the devices available in Amazon
   * Braket
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_GetDevice.html
   */
  GetDevice = 'braket:GetDevice',
  /**
   * Grants permission to retrieve jobs
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_GetJob.html
   */
  GetJob = 'braket:GetJob',
  /**
   * Grants permission to retrieve quantum tasks
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_GetQuantumTask.html
   */
  GetQuantumTask = 'braket:GetQuantumTask',
  /**
   * Grants permission to check if the Amazon Braket service linked role has been cr
   * eated
   *
   * See ${UserGuideDocPage}
   */
  GetServiceLinkedRoleStatus = 'braket:GetServiceLinkedRoleStatus',
  /**
   * Grants permission to check if the account has accepted the Amazon Braket user a
   * greement
   *
   * See ${UserGuideDocPage}
   */
  GetUserAgreementStatus = 'braket:GetUserAgreementStatus',
  /**
   * Grants permission to listing the tags that have been applied to the quantum tas
   * k resource or the job
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'braket:ListTagsForResource',
  /**
   * Grants permission to search for devices available in Amazon Braket
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchDevices.html
   */
  SearchDevices = 'braket:SearchDevices',
  /**
   * Grants permission to search for jobs
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchJobs.html
   */
  SearchJobs = 'braket:SearchJobs',
  /**
   * Grants permission to search for quantum tasks
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchQuantumTasks.html
   */
  SearchQuantumTasks = 'braket:SearchQuantumTasks',
  /**
   * Grants permission to add one or more tags to a quantum task or a hybrid job
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_TagResource.html
   */
  TagResource = 'braket:TagResource',
  /**
   * Grants permission to remove one or more tags from a quantum task resource or a
   * job. A tag consists of a key-value pair
   *
   * See https://docs.aws.amazon.com/braket/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'braket:UntagResource',
}
