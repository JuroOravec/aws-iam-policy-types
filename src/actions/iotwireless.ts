// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS IoT Wireless (IOTWIRELESS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotwireless.html
 *
 * 2024-02-12T09:57:54.255Z
 */
export enum AwsIotwirelessActions {
  /**
   * Grants permission to link partner accounts with AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateAwsAccountWithPartnerAccount.html
   */
  AssociateAwsAccountWithPartnerAccount = 'iotwireless:AssociateAwsAccountWithPartnerAccount',
  /**
   * Grants permission to associate the MulticastGroup with FuotaTask
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateMulticastGroupWithFuotaTask.html
   */
  AssociateMulticastGroupWithFuotaTask = 'iotwireless:AssociateMulticastGroupWithFuotaTask',
  /**
   * Grants permission to associate the wireless device with FuotaTask
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessDeviceWithFuotaTask.html
   */
  AssociateWirelessDeviceWithFuotaTask = 'iotwireless:AssociateWirelessDeviceWithFuotaTask',
  /**
   * Grants permission to associate the WirelessDevice with MulticastGroup
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessDeviceWithMulticastGroup.html
   */
  AssociateWirelessDeviceWithMulticastGroup = 'iotwireless:AssociateWirelessDeviceWithMulticastGroup',
  /**
   * Grants permission to associate the wireless device with AWS IoT thing for a giv
   * en wirelessDeviceId
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessDeviceWithThing.html
   */
  AssociateWirelessDeviceWithThing = 'iotwireless:AssociateWirelessDeviceWithThing',
  /**
   * Grants permission to associate a WirelessGateway with the IoT Core Identity cer
   * tificate
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessGatewayWithCertificate.html
   */
  AssociateWirelessGatewayWithCertificate = 'iotwireless:AssociateWirelessGatewayWithCertificate',
  /**
   * Grants permission to associate the wireless gateway with AWS IoT thing for a gi
   * ven wirelessGatewayId
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessGatewayWithThing.html
   */
  AssociateWirelessGatewayWithThing = 'iotwireless:AssociateWirelessGatewayWithThing',
  /**
   * Grants permission to cancel the MulticastGroup session
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CancelMulticastGroupSession.html
   */
  CancelMulticastGroupSession = 'iotwireless:CancelMulticastGroupSession',
  /**
   * Grants permission to create a Destination resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateDestination.html
   */
  CreateDestination = 'iotwireless:CreateDestination',
  /**
   * Grants permission to create a DeviceProfile resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateDeviceProfile.html
   */
  CreateDeviceProfile = 'iotwireless:CreateDeviceProfile',
  /**
   * Grants permission to create a FuotaTask resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateFuotaTask.html
   */
  CreateFuotaTask = 'iotwireless:CreateFuotaTask',
  /**
   * Grants permission to create a MulticastGroup resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateMulticastGroup.html
   */
  CreateMulticastGroup = 'iotwireless:CreateMulticastGroup',
  /**
   * Grants permission to create a NetworkAnalyzerConfiguration resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateNetworkAnalyzerConfiguration.html
   */
  CreateNetworkAnalyzerConfiguration = 'iotwireless:CreateNetworkAnalyzerConfiguration',
  /**
   * Grants permission to create a ServiceProfile resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateServiceProfile.html
   */
  CreateServiceProfile = 'iotwireless:CreateServiceProfile',
  /**
   * Grants permission to create a WirelessDevice resource with given Destination
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessDevice.html
   */
  CreateWirelessDevice = 'iotwireless:CreateWirelessDevice',
  /**
   * Grants permission to create a WirelessGateway resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGateway.html
   */
  CreateWirelessGateway = 'iotwireless:CreateWirelessGateway',
  /**
   * Grants permission to create a task for a given WirelessGateway
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGatewayTask.html
   */
  CreateWirelessGatewayTask = 'iotwireless:CreateWirelessGatewayTask',
  /**
   * Grants permission to create a WirelessGateway task definition
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGatewayTaskDefinition.html
   */
  CreateWirelessGatewayTaskDefinition = 'iotwireless:CreateWirelessGatewayTaskDefinition',
  /**
   * Grants permission to delete a Destination
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteDestination.html
   */
  DeleteDestination = 'iotwireless:DeleteDestination',
  /**
   * Grants permission to delete a DeviceProfile
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteDeviceProfile.html
   */
  DeleteDeviceProfile = 'iotwireless:DeleteDeviceProfile',
  /**
   * Grants permission to delete the FuotaTask
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteFuotaTask.html
   */
  DeleteFuotaTask = 'iotwireless:DeleteFuotaTask',
  /**
   * Grants permission to delete the MulticastGroup
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteMulticastGroup.html
   */
  DeleteMulticastGroup = 'iotwireless:DeleteMulticastGroup',
  /**
   * Grants permission to delete the NetworkAnalyzerConfiguration
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteNetworkAnalyzerConfiguration.html
   */
  DeleteNetworkAnalyzerConfiguration = 'iotwireless:DeleteNetworkAnalyzerConfiguration',
  /**
   * Grants permission to delete QueuedMessages
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteQueuedMessages.html
   */
  DeleteQueuedMessages = 'iotwireless:DeleteQueuedMessages',
  /**
   * Grants permission to delete a ServiceProfile
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteServiceProfile.html
   */
  DeleteServiceProfile = 'iotwireless:DeleteServiceProfile',
  /**
   * Grants permission to delete a WirelessDevice
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessDevice.html
   */
  DeleteWirelessDevice = 'iotwireless:DeleteWirelessDevice',
  /**
   * Grants permission to delete the wireless device import task
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessDeviceImportTask.html
   */
  DeleteWirelessDeviceImportTask = 'iotwireless:DeleteWirelessDeviceImportTask',
  /**
   * Grants permission to delete a WirelessGateway
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessGateway.html
   */
  DeleteWirelessGateway = 'iotwireless:DeleteWirelessGateway',
  /**
   * Grants permission to delete task for a given WirelessGateway
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessGatewayTask.html
   */
  DeleteWirelessGatewayTask = 'iotwireless:DeleteWirelessGatewayTask',
  /**
   * Grants permission to delete a WirelessGateway task definition
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessGatewayTaskDefinition.html
   */
  DeleteWirelessGatewayTaskDefinition = 'iotwireless:DeleteWirelessGatewayTaskDefinition',
  /**
   * Grants permission to deregister wireless device
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeregisterWirelessDevice.html
   */
  DeregisterWirelessDevice = 'iotwireless:DeregisterWirelessDevice',
  /**
   * Grants permission to disassociate an AWS account from a partner account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateAwsAccountFromPartnerAccount.html
   */
  DisassociateAwsAccountFromPartnerAccount = 'iotwireless:DisassociateAwsAccountFromPartnerAccount',
  /**
   * Grants permission to disassociate the MulticastGroup from FuotaTask
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateMulticastGroupFromFuotaTask.html
   */
  DisassociateMulticastGroupFromFuotaTask = 'iotwireless:DisassociateMulticastGroupFromFuotaTask',
  /**
   * Grants permission to disassociate the wireless device from FuotaTask
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessDeviceFromFuotaTask.html
   */
  DisassociateWirelessDeviceFromFuotaTask = 'iotwireless:DisassociateWirelessDeviceFromFuotaTask',
  /**
   * Grants permission to disassociate the wireless device from MulticastGroup
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessDeviceFromMulticastGroup.html
   */
  DisassociateWirelessDeviceFromMulticastGroup = 'iotwireless:DisassociateWirelessDeviceFromMulticastGroup',
  /**
   * Grants permission to disassociate a wireless device from a AWS IoT thing
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessDeviceFromThing.html
   */
  DisassociateWirelessDeviceFromThing = 'iotwireless:DisassociateWirelessDeviceFromThing',
  /**
   * Grants permission to disassociate a WirelessGateway from a IoT Core Identity ce
   * rtificate
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessGatewayFromCertificate.html
   */
  DisassociateWirelessGatewayFromCertificate = 'iotwireless:DisassociateWirelessGatewayFromCertificate',
  /**
   * Grants permission to disassociate a WirelessGateway from a IoT Core thing
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessGatewayFromThing.html
   */
  DisassociateWirelessGatewayFromThing = 'iotwireless:DisassociateWirelessGatewayFromThing',
  /**
   * Grants permission to get the Destination
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetDestination.html
   */
  GetDestination = 'iotwireless:GetDestination',
  /**
   * Grants permission to get the DeviceProfile
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetDeviceProfile.html
   */
  GetDeviceProfile = 'iotwireless:GetDeviceProfile',
  /**
   * Grants permission to get event configuration by resource types
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetEventConfigurationByResourceTypes.html
   */
  GetEventConfigurationByResourceTypes = 'iotwireless:GetEventConfigurationByResourceTypes',
  /**
   * Grants permission to get the FuotaTask
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetFuotaTask.html
   */
  GetFuotaTask = 'iotwireless:GetFuotaTask',
  /**
   * Grants permission to get log levels by resource types
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetLogLevelsByResourceTypes.html
   */
  GetLogLevelsByResourceTypes = 'iotwireless:GetLogLevelsByResourceTypes',
  /**
   * Grants permission to get the MulticastGroup
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetMulticastGroup.html
   */
  GetMulticastGroup = 'iotwireless:GetMulticastGroup',
  /**
   * Grants permission to get the MulticastGroup session
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetMulticastGroupSession.html
   */
  GetMulticastGroupSession = 'iotwireless:GetMulticastGroupSession',
  /**
   * Grants permission to get the NetworkAnalyzerConfiguration
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetNetworkAnalyzerConfiguration.html
   */
  GetNetworkAnalyzerConfiguration = 'iotwireless:GetNetworkAnalyzerConfiguration',
  /**
   * Grants permission to get the associated PartnerAccount
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetPartnerAccount.html
   */
  GetPartnerAccount = 'iotwireless:GetPartnerAccount',
  /**
   * Grants permission to get position for a given resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetPosition.html
   */
  GetPosition = 'iotwireless:GetPosition',
  /**
   * Grants permission to get position configuration for a given resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetPositionConfiguration.html
   */
  GetPositionConfiguration = 'iotwireless:GetPositionConfiguration',
  /**
   * Grants permission to get position estimate
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetPositionEstimate.html
   */
  GetPositionEstimate = 'iotwireless:GetPositionEstimate',
  /**
   * Grants permission to get an event configuration for an identifier
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourceEventConfiguration.html
   */
  GetResourceEventConfiguration = 'iotwireless:GetResourceEventConfiguration',
  /**
   * Grants permission to get resource log level
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourceLogLevel.html
   */
  GetResourceLogLevel = 'iotwireless:GetResourceLogLevel',
  /**
   * Grants permission to get position for a given resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html
   */
  GetResourcePosition = 'iotwireless:GetResourcePosition',
  /**
   * Grants permission to retrieve the customer account specific endpoint for CUPS p
   * rotocol connection or LoRaWAN Network Server (LNS) protocol connection, and opt
   * ionally server trust certificate in PEM format
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetServiceEndpoint.html
   */
  GetServiceEndpoint = 'iotwireless:GetServiceEndpoint',
  /**
   * Grants permission to get the ServiceProfile
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetServiceProfile.html
   */
  GetServiceProfile = 'iotwireless:GetServiceProfile',
  /**
   * Grants permission to get the WirelessDevice
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessDevice.html
   */
  GetWirelessDevice = 'iotwireless:GetWirelessDevice',
  /**
   * Grants permission to get the wireless device import task
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessDeviceImportTask.html
   */
  GetWirelessDeviceImportTask = 'iotwireless:GetWirelessDeviceImportTask',
  /**
   * Grants permission to get statistics info for a given WirelessDevice
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessDeviceStatistics.html
   */
  GetWirelessDeviceStatistics = 'iotwireless:GetWirelessDeviceStatistics',
  /**
   * Grants permission to get the WirelessGateway
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGateway.html
   */
  GetWirelessGateway = 'iotwireless:GetWirelessGateway',
  /**
   * Grants permission to get the IoT Core Identity certificate id associated with t
   * he WirelessGateway
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayCertificate.html
   */
  GetWirelessGatewayCertificate = 'iotwireless:GetWirelessGatewayCertificate',
  /**
   * Grants permission to get Current firmware version and other information for the
   * WirelessGateway
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayFirmwareInformation.html
   */
  GetWirelessGatewayFirmwareInformation = 'iotwireless:GetWirelessGatewayFirmwareInformation',
  /**
   * Grants permission to get statistics info for a given WirelessGateway
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayStatistics.html
   */
  GetWirelessGatewayStatistics = 'iotwireless:GetWirelessGatewayStatistics',
  /**
   * Grants permission to get the task for a given WirelessGateway
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayTask.html
   */
  GetWirelessGatewayTask = 'iotwireless:GetWirelessGatewayTask',
  /**
   * Grants permission to get the given WirelessGateway task definition
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayTaskDefinition.html
   */
  GetWirelessGatewayTaskDefinition = 'iotwireless:GetWirelessGatewayTaskDefinition',
  /**
   * Grants permission to list information of available Destinations based on the AW
   * S account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListDestinations.html
   */
  ListDestinations = 'iotwireless:ListDestinations',
  /**
   * Grants permission to list information of available DeviceProfiles based on the
   * AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListDeviceProfiles.html
   */
  ListDeviceProfiles = 'iotwireless:ListDeviceProfiles',
  /**
   * Grants permission to list information of devices by wireless device import task
   * based on the AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListDevicesForWirelessDeviceImportTask.html
   */
  ListDevicesForWirelessDeviceImportTask = 'iotwireless:ListDevicesForWirelessDeviceImportTask',
  /**
   * Grants permission to list information of available event configurations based o
   * n the AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListEventConfigurations.html
   */
  ListEventConfigurations = 'iotwireless:ListEventConfigurations',
  /**
   * Grants permission to list information of available FuotaTasks based on the AWS
   * account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListFuotaTasks.html
   */
  ListFuotaTasks = 'iotwireless:ListFuotaTasks',
  /**
   * Grants permission to list information of available MulticastGroups based on the
   * AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListMulticastGroups.html
   */
  ListMulticastGroups = 'iotwireless:ListMulticastGroups',
  /**
   * Grants permission to list information of available MulticastGroups by FuotaTask
   * based on the AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListMulticastGroupsByFuotaTask.html
   */
  ListMulticastGroupsByFuotaTask = 'iotwireless:ListMulticastGroupsByFuotaTask',
  /**
   * Grants permission to list information of available NetworkAnalyzerConfiguration
   * s based on the AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListNetworkAnalyzerConfigurations.html
   */
  ListNetworkAnalyzerConfigurations = 'iotwireless:ListNetworkAnalyzerConfigurations',
  /**
   * Grants permission to list the available partner accounts
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListPartnerAccounts.html
   */
  ListPartnerAccounts = 'iotwireless:ListPartnerAccounts',
  /**
   * Grants permission to list information of available position configurations base
   * d on the AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListPositionConfigurations.html
   */
  ListPositionConfigurations = 'iotwireless:ListPositionConfigurations',
  /**
   * Grants permission to list the Queued Messages
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListQueuedMessages.html
   */
  ListQueuedMessages = 'iotwireless:ListQueuedMessages',
  /**
   * Grants permission to list information of available ServiceProfiles based on the
   * AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListServiceProfiles.html
   */
  ListServiceProfiles = 'iotwireless:ListServiceProfiles',
  /**
   * Grants permission to list all tags for a given resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'iotwireless:ListTagsForResource',
  /**
   * Grants permission to list wireless device import tasks information of based on
   * the AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListWirelessDeviceImportTasks.html
   */
  ListWirelessDeviceImportTasks = 'iotwireless:ListWirelessDeviceImportTasks',
  /**
   * Grants permission to list information of available WirelessDevices based on the
   * AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListWirelessDevices.html
   */
  ListWirelessDevices = 'iotwireless:ListWirelessDevices',
  /**
   * Grants permission to list information of available WirelessGateway task definit
   * ions based on the AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListWirelessGatewayTaskDefinitions.html
   */
  ListWirelessGatewayTaskDefinitions = 'iotwireless:ListWirelessGatewayTaskDefinitions',
  /**
   * Grants permission to list information of available WirelessGateways based on th
   * e AWS account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListWirelessGateways.html
   */
  ListWirelessGateways = 'iotwireless:ListWirelessGateways',
  /**
   * Grants permission to put position configuration for a given resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_PutPositionConfiguration.html
   */
  PutPositionConfiguration = 'iotwireless:PutPositionConfiguration',
  /**
   * Grants permission to put resource log level
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_PutResourceLogLevel.html
   */
  PutResourceLogLevel = 'iotwireless:PutResourceLogLevel',
  /**
   * Grants permission to reset all resource log levels
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ResetAllResourceLogLevels.html
   */
  ResetAllResourceLogLevels = 'iotwireless:ResetAllResourceLogLevels',
  /**
   * Grants permission to reset resource log level
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ResetResourceLogLevel.html
   */
  ResetResourceLogLevel = 'iotwireless:ResetResourceLogLevel',
  /**
   * Grants permission to send data to the MulticastGroup
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_SendDataToMulticastGroup.html
   */
  SendDataToMulticastGroup = 'iotwireless:SendDataToMulticastGroup',
  /**
   * Grants permission to send the decrypted application data frame to the target de
   * vice
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_SendDataToWirelessDevice.html
   */
  SendDataToWirelessDevice = 'iotwireless:SendDataToWirelessDevice',
  /**
   * Grants permission to associate the WirelessDevices with MulticastGroup
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_StartBulkAssociateWirelessDeviceWithMulticastGroup.html
   */
  StartBulkAssociateWirelessDeviceWithMulticastGroup = 'iotwireless:StartBulkAssociateWirelessDeviceWithMulticastGroup',
  /**
   * Grants permission to bulk disassociate the WirelessDevices from MulticastGroup
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_StartBulkDisassociateWirelessDeviceFromMulticastGroup.html
   */
  StartBulkDisassociateWirelessDeviceFromMulticastGroup = 'iotwireless:StartBulkDisassociateWirelessDeviceFromMulticastGroup',
  /**
   * Grants permission to start the FuotaTask
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_StartFuotaTask.html
   */
  StartFuotaTask = 'iotwireless:StartFuotaTask',
  /**
   * Grants permission to start the MulticastGroup session
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_StartMulticastGroupSession.html
   */
  StartMulticastGroupSession = 'iotwireless:StartMulticastGroupSession',
  /**
   * Grants permission to start NetworkAnalyzer stream
   *
   * See https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-network-analyzer-api.html
   */
  StartNetworkAnalyzerStream = 'iotwireless:StartNetworkAnalyzerStream',
  /**
   * Grants permission to start the single wireless device import task
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_StartSingleWirelessDeviceImportTask.html
   */
  StartSingleWirelessDeviceImportTask = 'iotwireless:StartSingleWirelessDeviceImportTask',
  /**
   * Grants permission to start the wireless device import task
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_StartWirelessDeviceImportTask.html
   */
  StartWirelessDeviceImportTask = 'iotwireless:StartWirelessDeviceImportTask',
  /**
   * Grants permission to tag a given resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_TagResource.html
   */
  TagResource = 'iotwireless:TagResource',
  /**
   * Grants permission to simulate a provisioned device to send an uplink data with
   * payload of 'Hello'
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_TestWirelessDevice.html
   */
  TestWirelessDevice = 'iotwireless:TestWirelessDevice',
  /**
   * Grants permission to remove the given tags from the resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UntagResource.html
   */
  UntagResource = 'iotwireless:UntagResource',
  /**
   * Grants permission to update a Destination resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateDestination.html
   */
  UpdateDestination = 'iotwireless:UpdateDestination',
  /**
   * Grants permission to update event configuration by resource types
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateEventConfigurationByResourceTypes.html
   */
  UpdateEventConfigurationByResourceTypes = 'iotwireless:UpdateEventConfigurationByResourceTypes',
  /**
   * Grants permission to update the FuotaTask
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateFuotaTask.html
   */
  UpdateFuotaTask = 'iotwireless:UpdateFuotaTask',
  /**
   * Grants permission to update log levels by resource types
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateLogLevelsByResourceTypes.html
   */
  UpdateLogLevelsByResourceTypes = 'iotwireless:UpdateLogLevelsByResourceTypes',
  /**
   * Grants permission to update the MulticastGroup
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateMulticastGroup.html
   */
  UpdateMulticastGroup = 'iotwireless:UpdateMulticastGroup',
  /**
   * Grants permission to update the NetworkAnalyzerConfiguration
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateNetworkAnalyzerConfiguration.html
   */
  UpdateNetworkAnalyzerConfiguration = 'iotwireless:UpdateNetworkAnalyzerConfiguration',
  /**
   * Grants permission to update a partner account
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdatePartnerAccount.html
   */
  UpdatePartnerAccount = 'iotwireless:UpdatePartnerAccount',
  /**
   * Grants permission to update position for a given resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdatePosition.html
   */
  UpdatePosition = 'iotwireless:UpdatePosition',
  /**
   * Grants permission to update an event configuration for an identifier
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourceEventConfiguration.html
   */
  UpdateResourceEventConfiguration = 'iotwireless:UpdateResourceEventConfiguration',
  /**
   * Grants permission to update position for a given resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourcePosition.html
   */
  UpdateResourcePosition = 'iotwireless:UpdateResourcePosition',
  /**
   * Grants permission to update a WirelessDevice resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateWirelessDevice.html
   */
  UpdateWirelessDevice = 'iotwireless:UpdateWirelessDevice',
  /**
   * Grants permission to update a wireless device import task
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateWirelessDeviceImportTask.html
   */
  UpdateWirelessDeviceImportTask = 'iotwireless:UpdateWirelessDeviceImportTask',
  /**
   * Grants permission to update a WirelessGateway resource
   *
   * See https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateWirelessGateway.html
   */
  UpdateWirelessGateway = 'iotwireless:UpdateWirelessGateway',
}
