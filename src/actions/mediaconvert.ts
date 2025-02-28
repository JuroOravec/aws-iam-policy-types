// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Elemental MediaConvert (MEDIACONVERT)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconvert.html
 *
 * 2025-02-24T21:47:52.872Z
 */
export enum AwsMediaconvertActions {
  /**
   * Grants permission to associate an AWS Certificate Manager (ACM) Amazon Resource
   * Name (ARN) with AWS Elemental MediaConvert
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates.html
   */
  AssociateCertificate = 'mediaconvert:AssociateCertificate',
  /**
   * Grants permission to cancel an AWS Elemental MediaConvert job that is waiting i
   * n queue
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  CancelJob = 'mediaconvert:CancelJob',
  /**
   * Grants permission to create and submit an AWS Elemental MediaConvert job
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   */
  CreateJob = 'mediaconvert:CreateJob',
  /**
   * Grants permission to create an AWS Elemental MediaConvert custom job template
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  CreateJobTemplate = 'mediaconvert:CreateJobTemplate',
  /**
   * Grants permission to create an AWS Elemental MediaConvert custom output preset
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   */
  CreatePreset = 'mediaconvert:CreatePreset',
  /**
   * Grants permission to create an AWS Elemental MediaConvert job queue
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   */
  CreateQueue = 'mediaconvert:CreateQueue',
  /**
   * Grants permission to delete an AWS Elemental MediaConvert custom job template
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  DeleteJobTemplate = 'mediaconvert:DeleteJobTemplate',
  /**
   * Grants permission to delete an AWS Elemental MediaConvert policy
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/policy.html
   */
  DeletePolicy = 'mediaconvert:DeletePolicy',
  /**
   * Grants permission to delete an AWS Elemental MediaConvert custom output preset
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  DeletePreset = 'mediaconvert:DeletePreset',
  /**
   * Grants permission to delete an AWS Elemental MediaConvert job queue
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  DeleteQueue = 'mediaconvert:DeleteQueue',
  /**
   * Grants permission to subscribe to the AWS Elemental MediaConvert service, by se
   * nding a request for an account-specific endpoint. All transcoding requests must
   * be sent to the endpoint that the service returns
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/endpoints.html
   */
  DescribeEndpoints = 'mediaconvert:DescribeEndpoints',
  /**
   * Grants permission to remove an association between the Amazon Resource Name (AR
   * N) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaCo
   * nvert resource
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates-arn.html
   */
  DisassociateCertificate = 'mediaconvert:DisassociateCertificate',
  /**
   * Grants permission to get an AWS Elemental MediaConvert job
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  GetJob = 'mediaconvert:GetJob',
  /**
   * Grants permission to get an AWS Elemental MediaConvert job template
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  GetJobTemplate = 'mediaconvert:GetJobTemplate',
  /**
   * Grants permission to get an AWS Elemental MediaConvert policy
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/policy.html
   */
  GetPolicy = 'mediaconvert:GetPolicy',
  /**
   * Grants permission to get an AWS Elemental MediaConvert output preset
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  GetPreset = 'mediaconvert:GetPreset',
  /**
   * Grants permission to get an AWS Elemental MediaConvert job queue
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  GetQueue = 'mediaconvert:GetQueue',
  /**
   * Grants permission to list AWS Elemental MediaConvert job templates
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html
   */
  ListJobTemplates = 'mediaconvert:ListJobTemplates',
  /**
   * Grants permission to list AWS Elemental MediaConvert jobs
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   */
  ListJobs = 'mediaconvert:ListJobs',
  /**
   * Grants permission to list AWS Elemental MediaConvert output presets
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   */
  ListPresets = 'mediaconvert:ListPresets',
  /**
   * Grants permission to list AWS Elemental MediaConvert job queues
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   */
  ListQueues = 'mediaconvert:ListQueues',
  /**
   * Grants permission to retrieve the tags for a MediaConvert queue, preset, or job
   * template
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html
   */
  ListTagsForResource = 'mediaconvert:ListTagsForResource',
  /**
   * Grants permission to list AWS Elemental MediaConvert job engine versions
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/versions.html
   */
  ListVersions = 'mediaconvert:ListVersions',
  /**
   * Grants permission to put an AWS Elemental MediaConvert policy
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/policy.html
   */
  PutPolicy = 'mediaconvert:PutPolicy',
  /**
   * Grants permission to search AWS Elemental MediaConvert jobs
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/search.html
   */
  SearchJobs = 'mediaconvert:SearchJobs',
  /**
   * Grants permission to add tags to a MediaConvert queue, preset, or job template
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html
   */
  TagResource = 'mediaconvert:TagResource',
  /**
   * Grants permission to remove tags from a MediaConvert queue, preset, or job temp
   * late
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html
   */
  UntagResource = 'mediaconvert:UntagResource',
  /**
   * Grants permission to update an AWS Elemental MediaConvert custom job template
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  UpdateJobTemplate = 'mediaconvert:UpdateJobTemplate',
  /**
   * Grants permission to update an AWS Elemental MediaConvert custom output preset
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  UpdatePreset = 'mediaconvert:UpdatePreset',
  /**
   * Grants permission to update an AWS Elemental MediaConvert job queue
   *
   * See https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  UpdateQueue = 'mediaconvert:UpdateQueue',
}
