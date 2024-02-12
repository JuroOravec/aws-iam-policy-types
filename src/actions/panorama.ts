// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Panorama (PANORAMA)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html
 *
 * 2024-02-12T09:58:35.659Z
 */
export enum AwsPanoramaActions {
  /**
   * Grants permission to create an AWS Panorama Application Instance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_CreateApplicationInstance.html
   */
  CreateApplicationInstance = 'panorama:CreateApplicationInstance',
  /**
   * Grants permission to create a job for an AWS Panorama Appliance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_CreateJobForDevices.html
   */
  CreateJobForDevices = 'panorama:CreateJobForDevices',
  /**
   * Grants permission to create an AWS Panorama Node
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_CreateNodeFromTemplateJob.html
   */
  CreateNodeFromTemplateJob = 'panorama:CreateNodeFromTemplateJob',
  /**
   * Grants permission to create an AWS Panorama Package
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_CreatePackage.html
   */
  CreatePackage = 'panorama:CreatePackage',
  /**
   * Grants permission to create an AWS Panorama Package
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_CreatePackageImportJob.html
   */
  CreatePackageImportJob = 'panorama:CreatePackageImportJob',
  /**
   * Grants permission to deregister an AWS Panorama Appliance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DeleteDevice.html
   */
  DeleteDevice = 'panorama:DeleteDevice',
  /**
   * Grants permission to delete an AWS Panorama Package
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DeletePackage.html
   */
  DeletePackage = 'panorama:DeletePackage',
  /**
   * Grants permission to deregister an AWS Panorama package version
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DeregisterPackageVersion.html
   */
  DeregisterPackageVersion = 'panorama:DeregisterPackageVersion',
  /**
   * Grants permission to view details about an AWS Panorama application instance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeApplicationInstance.html
   */
  DescribeApplicationInstance = 'panorama:DescribeApplicationInstance',
  /**
   * Grants permission to view details about an AWS Panorama application instance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeApplicationInstanceDetails.html
   */
  DescribeApplicationInstanceDetails = 'panorama:DescribeApplicationInstanceDetails',
  /**
   * Grants permission to view details about an AWS Panorama Appliance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeDevice.html
   */
  DescribeDevice = 'panorama:DescribeDevice',
  /**
   * Grants permission to view job details for an AWS Panorama Appliance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeDeviceJob.html
   */
  DescribeDeviceJob = 'panorama:DescribeDeviceJob',
  /**
   * Grants permission to view details about an AWS Panorama application node
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeNode.html
   */
  DescribeNode = 'panorama:DescribeNode',
  /**
   * Grants permission to view details about AWS Panorama application node
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeNodeFromTemplateJob.html
   */
  DescribeNodeFromTemplateJob = 'panorama:DescribeNodeFromTemplateJob',
  /**
   * Grants permission to view details about an AWS Panorama package
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DescribePackage.html
   */
  DescribePackage = 'panorama:DescribePackage',
  /**
   * Grants permission to view details about an AWS Panorama package
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DescribePackageImportJob.html
   */
  DescribePackageImportJob = 'panorama:DescribePackageImportJob',
  /**
   * Grants permission to view details about an AWS Panorama package version
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_DescribePackageVersion.html
   */
  DescribePackageVersion = 'panorama:DescribePackageVersion',
  /**
   * Grants permission to view details about a software version for the AWS Panorama
   * Appliance
   *
   * See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html
   */
  DescribeSoftware = 'panorama:DescribeSoftware',
  /**
   * Grants permission to generate a WebSocket endpoint for communication with AWS P
   * anorama
   *
   * See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html
   */
  GetWebSocketURL = 'panorama:GetWebSocketURL',
  /**
   * Grants permission to retrieve a list of application instance dependencies in AW
   * S Panorama
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ListApplicationInstanceDependencies.html
   */
  ListApplicationInstanceDependencies = 'panorama:ListApplicationInstanceDependencies',
  /**
   * Grants permission to retrieve a list of node instances of application instances
   * in AWS Panorama
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ListApplicationInstanceNodeInstances.html
   */
  ListApplicationInstanceNodeInstances = 'panorama:ListApplicationInstanceNodeInstances',
  /**
   * Grants permission to retrieve a list of application instances in AWS Panorama
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ListApplicationInstances.html
   */
  ListApplicationInstances = 'panorama:ListApplicationInstances',
  /**
   * Grants permission to retrieve a list of appliances in AWS Panorama
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ListDevices.html
   */
  ListDevices = 'panorama:ListDevices',
  /**
   * Grants permission to retrieve a list of jobs for an AWS Panorama Appliance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ListDevicesJobs.html
   */
  ListDevicesJobs = 'panorama:ListDevicesJobs',
  /**
   * Grants permission to retrieve a list of Nodes for an AWS Panorama Appliance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ListNodeFromTemplateJobs.html
   */
  ListNodeFromTemplateJobs = 'panorama:ListNodeFromTemplateJobs',
  /**
   * Grants permission to retrieve a list of nodes in AWS Panorama
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ListNodes.html
   */
  ListNodes = 'panorama:ListNodes',
  /**
   * Grants permission to retrieve a list of packages in AWS Panorama
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ListPackageImportJobs.html
   */
  ListPackageImportJobs = 'panorama:ListPackageImportJobs',
  /**
   * Grants permission to retrieve a list of packages in AWS Panorama
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ListPackages.html
   */
  ListPackages = 'panorama:ListPackages',
  /**
   * Grants permission to retrieve a list of tags for a resource in AWS Panorama
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ListTagsForResource.html
   */
  ListTagsForResource = 'panorama:ListTagsForResource',
  /**
   * Grants permission to register an AWS Panorama Appliance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_ProvisionDevice.html
   */
  ProvisionDevice = 'panorama:ProvisionDevice',
  /**
   * Grants permission to register an AWS Panorama package version
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_RegisterPackageVersion.html
   */
  RegisterPackageVersion = 'panorama:RegisterPackageVersion',
  /**
   * Grants permission to remove an AWS Panorama application instance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_RemoveApplicationInstance.html
   */
  RemoveApplicationInstance = 'panorama:RemoveApplicationInstance',
  /**
   * Grants permission to signal camera nodes in an application instance to pause or
   * resume
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_SignalApplicationInstanceNodeInstances.html
   */
  SignalApplicationInstanceNodeInstances = 'panorama:SignalApplicationInstanceNodeInstances',
  /**
   * Grants permission to add tags to a resource in AWS Panorama
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_TagResource.html
   */
  TagResource = 'panorama:TagResource',
  /**
   * Grants permission to remove tags from a resource in AWS Panorama
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_UntagResource.html
   */
  UntagResource = 'panorama:UntagResource',
  /**
   * Grants permission to modify basic settings for an AWS Panorama Appliance
   *
   * See https://docs.aws.amazon.com/panorama/latest/api/API_UpdateDeviceMetadata.html
   */
  UpdateDeviceMetadata = 'panorama:UpdateDeviceMetadata',
}
