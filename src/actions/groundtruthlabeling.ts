// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon GroundTruth Labeling (GROUNDTRUTHLABELING)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongroundtruthlabeling.html
 *
 * 2024-02-12T09:57:32.908Z
 */
export enum AwsGroundtruthlabelingActions {
  /**
   * Grants permission to associate a patch file with the manifest file to update th
   * e manifest file
   *
   * See https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  AssociatePatchToManifestJob = 'groundtruthlabeling:AssociatePatchToManifestJob',
  /**
   * Grants permission to get status of GroundTruthLabeling Jobs
   *
   * See https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  DescribeConsoleJob = 'groundtruthlabeling:DescribeConsoleJob',
  /**
   * Grants permission to list dataset objects in a manifest file
   *
   * See https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  ListDatasetObjects = 'groundtruthlabeling:ListDatasetObjects',
  /**
   * Grants permission to filter records from a manifest file using S3 select. Get s
   * ample entries based on random sampling
   *
   * See https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-data-filtering
   */
  RunFilterOrSampleDatasetJob = 'groundtruthlabeling:RunFilterOrSampleDatasetJob',
  /**
   * Grants permission to list a S3 prefix and create manifest files from objects in
   * that location
   *
   * See https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  RunGenerateManifestByCrawlingJob = 'groundtruthlabeling:RunGenerateManifestByCrawlingJob',
}