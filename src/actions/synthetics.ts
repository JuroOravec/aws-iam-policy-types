// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon CloudWatch Synthetics (SYNTHETICS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchsynthetics.html
 *
 * 2024-02-12T09:56:31.638Z
 */
export enum AwsSyntheticsActions {
  /**
   * Grants permission to associate a resource with a group
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_AssociateResource.html
   */
  AssociateResource = 'synthetics:AssociateResource',
  /**
   * Grants permission to create a canary
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateCanary.html
   */
  CreateCanary = 'synthetics:CreateCanary',
  /**
   * Grants permission to create a group
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateGroup.html
   */
  CreateGroup = 'synthetics:CreateGroup',
  /**
   * Grants permission to delete a canary. Amazon Synthetics deletes all the resourc
   * es except for the Lambda function and the CloudWatch Alarms if you created one
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html
   */
  DeleteCanary = 'synthetics:DeleteCanary',
  /**
   * Grants permission to delete a group
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteGroup.html
   */
  DeleteGroup = 'synthetics:DeleteGroup',
  /**
   * Grants permission to list information of all canaries
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html
   */
  DescribeCanaries = 'synthetics:DescribeCanaries',
  /**
   * Grants permission to list information about the last test run associated with a
   * ll canaries
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanariesLastRun.html
   */
  DescribeCanariesLastRun = 'synthetics:DescribeCanariesLastRun',
  /**
   * Grants permission to list information about Synthetics canary runtime versions
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeRuntimeVersions.html
   */
  DescribeRuntimeVersions = 'synthetics:DescribeRuntimeVersions',
  /**
   * Grants permission to disassociate a resource from a group
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DisassociateResource.html
   */
  DisassociateResource = 'synthetics:DisassociateResource',
  /**
   * Grants permission to view the details of a canary
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html
   */
  GetCanary = 'synthetics:GetCanary',
  /**
   * Grants permission to list information about all the test runs associated with a
   * canary
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html
   */
  GetCanaryRuns = 'synthetics:GetCanaryRuns',
  /**
   * Grants permission to view the details of a group
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetGroup.html
   */
  GetGroup = 'synthetics:GetGroup',
  /**
   * Grants permission to list information about the associated groups of a canary
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListAssociatedGroups.html
   */
  ListAssociatedGroups = 'synthetics:ListAssociatedGroups',
  /**
   * Grants permission to list information about canaries in a group
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListGroupResources.html
   */
  ListGroupResources = 'synthetics:ListGroupResources',
  /**
   * Grants permission to list information of all groups
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListGroups.html
   */
  ListGroups = 'synthetics:ListGroups',
  /**
   * Grants permission to list all tags and values associated with a resource
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'synthetics:ListTagsForResource',
  /**
   * Grants permission to start a canary, so that Amazon CloudWatch Synthetics start
   * s monitoring a website
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StartCanary.html
   */
  StartCanary = 'synthetics:StartCanary',
  /**
   * Grants permission to stop a canary
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StopCanary.html
   */
  StopCanary = 'synthetics:StopCanary',
  /**
   * Grants permission to add one or more tags to a resource
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html
   */
  TagResource = 'synthetics:TagResource',
  /**
   * Grants permission to remove one or more tags from a resource
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'synthetics:UntagResource',
  /**
   * Grants permission to update a canary
   *
   * See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html
   */
  UpdateCanary = 'synthetics:UpdateCanary',
}
