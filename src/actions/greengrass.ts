// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS IoT Greengrass V2 (GREENGRASS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrassv2.html
 *
 * 2024-02-12T09:57:51.470Z
 */
export enum AwsGreengrassActions {
  /**
   * Grants permission to associate a role with your account. AWS IoT Greengrass use
   * s this role to access your Lambda functions and AWS IoT resources
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_AssociateServiceRoleToAccount.html
   */
  AssociateServiceRoleToAccount = 'greengrass:AssociateServiceRoleToAccount',
  /**
   * Grants permission to associate a list of client devices with a core device
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html
   */
  BatchAssociateClientDeviceWithCoreDevice = 'greengrass:BatchAssociateClientDeviceWithCoreDevice',
  /**
   * Grants permission to disassociate a list of client devices from a core device
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceFromCoreDevice.html
   */
  BatchDisassociateClientDeviceFromCoreDevice = 'greengrass:BatchDisassociateClientDeviceFromCoreDevice',
  /**
   * Grants permission to cancel a deployment
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CancelDeployment.html
   */
  CancelDeployment = 'greengrass:CancelDeployment',
  /**
   * Grants permission to create a component
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateComponentVersion.html
   */
  CreateComponentVersion = 'greengrass:CreateComponentVersion',
  /**
   * Grants permission to create a deployment
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateDeployment.html
   */
  CreateDeployment = 'greengrass:CreateDeployment',
  /**
   * Grants permission to delete a component
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DeleteComponent.html
   */
  DeleteComponent = 'greengrass:DeleteComponent',
  /**
   * Grants permission to delete a AWS IoT Greengrass core device, which is an AWS I
   * oT thing. This operation removes the core device from the list of core devices.
   * This operation doesn't delete the AWS IoT thing
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DeleteCoreDevice.html
   */
  DeleteCoreDevice = 'greengrass:DeleteCoreDevice',
  /**
   * Grants permission to delete a deployment. To delete an active deployment, it ne
   * eds to be cancelled first
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DeleteDeployment.html
   */
  DeleteDeployment = 'greengrass:DeleteDeployment',
  /**
   * Grants permission to retrieve metadata for a version of a component
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DescribeComponent.html
   */
  DescribeComponent = 'greengrass:DescribeComponent',
  /**
   * Grants permission to disassociate the service role from an account. Without a s
   * ervice role, deployments will not work
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DisassociateServiceRoleFromAccount.html
   */
  DisassociateServiceRoleFromAccount = 'greengrass:DisassociateServiceRoleFromAccount',
  /**
   * Grants permission to get the recipe for a version of a component
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponent.html
   */
  GetComponent = 'greengrass:GetComponent',
  /**
   * Grants permission to get the pre-signed URL to download a public component arti
   * fact
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponentVersionArtifact.html
   */
  GetComponentVersionArtifact = 'greengrass:GetComponentVersionArtifact',
  /**
   * Grants permission to retrieve the connectivity information for a Greengrass cor
   * e device
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetConnectivityInfo.html
   */
  GetConnectivityInfo = 'greengrass:GetConnectivityInfo',
  /**
   * Grants permission to retrieves metadata for a AWS IoT Greengrass core device
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetCoreDevice.html
   */
  GetCoreDevice = 'greengrass:GetCoreDevice',
  /**
   * Grants permission to get a deployment
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetDeployment.html
   */
  GetDeployment = 'greengrass:GetDeployment',
  /**
   * Grants permission to retrieve the service role that is attached to an account
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetServiceRoleForAccount.html
   */
  GetServiceRoleForAccount = 'greengrass:GetServiceRoleForAccount',
  /**
   * Grants permission to retrieve a paginated list of client devices associated to
   * a AWS IoT Greengrass core device
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListClientDevicesAssociatedWithCoreDevice.html
   */
  ListClientDevicesAssociatedWithCoreDevice = 'greengrass:ListClientDevicesAssociatedWithCoreDevice',
  /**
   * Grants permission to retrieve a paginated list of all versions for a component
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListComponentVersions.html
   */
  ListComponentVersions = 'greengrass:ListComponentVersions',
  /**
   * Grants permission to retrieve a paginated list of component summaries
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListComponents.html
   */
  ListComponents = 'greengrass:ListComponents',
  /**
   * Grants permission to retrieve a paginated list of AWS IoT Greengrass core devic
   * es
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListCoreDevices.html
   */
  ListCoreDevices = 'greengrass:ListCoreDevices',
  /**
   * Grants permission to retrieves a paginated list of deployments
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListDeployments.html
   */
  ListDeployments = 'greengrass:ListDeployments',
  /**
   * Grants permission to retrieves a paginated list of deployment jobs that AWS IoT
   * Greengrass sends to AWS IoT Greengrass core devices
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListEffectiveDeployments.html
   */
  ListEffectiveDeployments = 'greengrass:ListEffectiveDeployments',
  /**
   * Grants permission to retrieve a paginated list of the components that a AWS IoT
   * Greengrass core device runs
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListInstalledComponents.html
   */
  ListInstalledComponents = 'greengrass:ListInstalledComponents',
  /**
   * Grants permission to list the tags for a resource
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'greengrass:ListTagsForResource',
  /**
   * Grants permission to list components that meet the component, version, and plat
   * form requirements of a deployment
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ResolveComponentCandidates.html
   */
  ResolveComponentCandidates = 'greengrass:ResolveComponentCandidates',
  /**
   * Grants permission to add tags to a resource
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_TagResource.html
   */
  TagResource = 'greengrass:TagResource',
  /**
   * Grants permission to remove tags from a resource
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_UntagResource.html
   */
  UntagResource = 'greengrass:UntagResource',
  /**
   * Grants permission to update the connectivity information for a Greengrass core.
   * Any devices that belong to the group that has this core will receive this infor
   * mation in order to find the location of the core and connect to it
   *
   * See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_UpdateConnectivityInfo.html
   */
  UpdateConnectivityInfo = 'greengrass:UpdateConnectivityInfo',
}
