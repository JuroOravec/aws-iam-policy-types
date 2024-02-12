// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon EMR on EKS (EMR Containers) (EMR-CONTAINERS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemroneksemrcontainers.html
 *
 * 2024-02-12T09:57:20.908Z
 */
export enum AwsEmrContainersActions {
  /**
   * Grants permission to cancel a job run
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CancelJobRun.html
   */
  CancelJobRun = 'emr-containers:CancelJobRun',
  /**
   * Grants permission to create a job template
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CreateJobTemplate.html
   */
  CreateJobTemplate = 'emr-containers:CreateJobTemplate',
  /**
   * Grants permission to create a managed endpoint
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CreateManagedEndpoint.html
   */
  CreateManagedEndpoint = 'emr-containers:CreateManagedEndpoint',
  /**
   * Grants permission to create a virtual cluster
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CreateVirtualCluster.html
   */
  CreateVirtualCluster = 'emr-containers:CreateVirtualCluster',
  /**
   * Grants permission to delete a job template
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DeleteJobTemplate.html
   */
  DeleteJobTemplate = 'emr-containers:DeleteJobTemplate',
  /**
   * Grants permission to delete a managed endpoint
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DeleteManagedEndpoint.html
   */
  DeleteManagedEndpoint = 'emr-containers:DeleteManagedEndpoint',
  /**
   * Grants permission to delete a virtual cluster
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DeleteVirtualCluster.html
   */
  DeleteVirtualCluster = 'emr-containers:DeleteVirtualCluster',
  /**
   * Grants permission to describe a job run
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeJobRun.html
   */
  DescribeJobRun = 'emr-containers:DescribeJobRun',
  /**
   * Grants permission to describe a job template
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeJobTemplate.html
   */
  DescribeJobTemplate = 'emr-containers:DescribeJobTemplate',
  /**
   * Grants permission to describe a managed endpoint
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeManagedEndpoint.html
   */
  DescribeManagedEndpoint = 'emr-containers:DescribeManagedEndpoint',
  /**
   * Grants permission to describe a virtual cluster
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeVirtualCluster.html
   */
  DescribeVirtualCluster = 'emr-containers:DescribeVirtualCluster',
  /**
   * Grants permission to generate a session token used to connect to a managed endp
   * oint
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_GetManagedEndpointSessionCredentials.html
   */
  GetManagedEndpointSessionCredentials = 'emr-containers:GetManagedEndpointSessionCredentials',
  /**
   * Grants permission to list job runs associated with a virtual cluster
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListJobRuns.html
   */
  ListJobRuns = 'emr-containers:ListJobRuns',
  /**
   * Grants permission to list job templates
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListJobTemplates.html
   */
  ListJobTemplates = 'emr-containers:ListJobTemplates',
  /**
   * Grants permission to list managed endpoints associated with a virtual cluster
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListManagedEndpoints.html
   */
  ListManagedEndpoints = 'emr-containers:ListManagedEndpoints',
  /**
   * Grants permission to list tags for the specified resource
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'emr-containers:ListTagsForResource',
  /**
   * Grants permission to list virtual clusters
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListVirtualClusters.html
   */
  ListVirtualClusters = 'emr-containers:ListVirtualClusters',
  /**
   * Grants permission to start a job run
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html
   */
  StartJobRun = 'emr-containers:StartJobRun',
  /**
   * Grants permission to tag the specified resource
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_TagResource.html
   */
  TagResource = 'emr-containers:TagResource',
  /**
   * Grants permission to untag the specified resource
   *
   * See https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'emr-containers:UntagResource',
}
