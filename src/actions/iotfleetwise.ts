// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS IoT FleetWise (IOTFLEETWISE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html
 *
 * 2025-02-24T21:48:24.956Z
 */
export enum AwsIotfleetwiseActions {
  /**
   * Grants permission to associate the given vehicle to a fleet
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_AssociateVehicleFleet.html
   */
  AssociateVehicleFleet = 'iotfleetwise:AssociateVehicleFleet',
  /**
   * Grants permission to create a batch of vehicles
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_BatchCreateVehicle.html
   */
  BatchCreateVehicle = 'iotfleetwise:BatchCreateVehicle',
  /**
   * Grants permission to update a batch of vehicles
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_BatchUpdateVehicle.html
   */
  BatchUpdateVehicle = 'iotfleetwise:BatchUpdateVehicle',
  /**
   * Grants permission to create a campaign
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateCampaign.html
   */
  CreateCampaign = 'iotfleetwise:CreateCampaign',
  /**
   * Grants permission to create a decoder manifest for an existing model
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateDecoderManifest.html
   */
  CreateDecoderManifest = 'iotfleetwise:CreateDecoderManifest',
  /**
   * Grants permission to create a fleet
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateFleet.html
   */
  CreateFleet = 'iotfleetwise:CreateFleet',
  /**
   * Grants permission to create a model manifest definition
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateModelManifest.html
   */
  CreateModelManifest = 'iotfleetwise:CreateModelManifest',
  /**
   * Grants permission to create a signal catalog
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateSignalCatalog.html
   */
  CreateSignalCatalog = 'iotfleetwise:CreateSignalCatalog',
  /**
   * Grants permission to create a state template
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateStateTemplate.html
   */
  CreateStateTemplate = 'iotfleetwise:CreateStateTemplate',
  /**
   * Grants permission to create a vehicle
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateVehicle.html
   */
  CreateVehicle = 'iotfleetwise:CreateVehicle',
  /**
   * Grants permission to delete a campaign
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteCampaign.html
   */
  DeleteCampaign = 'iotfleetwise:DeleteCampaign',
  /**
   * Grants permission to delete the given decoder manifest
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteDecoderManifest.html
   */
  DeleteDecoderManifest = 'iotfleetwise:DeleteDecoderManifest',
  /**
   * Grants permission to delete a fleet
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteFleet.html
   */
  DeleteFleet = 'iotfleetwise:DeleteFleet',
  /**
   * Grants permission to delete the given model manifest
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteModelManifest.html
   */
  DeleteModelManifest = 'iotfleetwise:DeleteModelManifest',
  /**
   * Grants permission to delete a specific signal catalog
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteSignalCatalog.html
   */
  DeleteSignalCatalog = 'iotfleetwise:DeleteSignalCatalog',
  /**
   * Grants permission to delete a state template
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteStateTemplate.html
   */
  DeleteStateTemplate = 'iotfleetwise:DeleteStateTemplate',
  /**
   * Grants permission to delete a vehicle
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteVehicle.html
   */
  DeleteVehicle = 'iotfleetwise:DeleteVehicle',
  /**
   * Grants permission to disassociate a vehicle from an existing fleet
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DisassociateVehicleFleet.html
   */
  DisassociateVehicleFleet = 'iotfleetwise:DisassociateVehicleFleet',
  /**
   * Grants permission to generate the payload for running a command on a vehicle
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/controlling-access.html#generate-command-payload
   */
  GenerateCommandPayload = 'iotfleetwise:GenerateCommandPayload',
  /**
   * Grants permission to get summary information for a given campaign
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetCampaign.html
   */
  GetCampaign = 'iotfleetwise:GetCampaign',
  /**
   * Grants permission to get summary information for a given decoder manifest defin
   * ition
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetDecoderManifest.html
   */
  GetDecoderManifest = 'iotfleetwise:GetDecoderManifest',
  /**
   * Grants permission to get KMS-based encryption status for the AWS account
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetEncryptionConfiguration.html
   */
  GetEncryptionConfiguration = 'iotfleetwise:GetEncryptionConfiguration',
  /**
   * Grants permission to get summary information for a fleet
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetFleet.html
   */
  GetFleet = 'iotfleetwise:GetFleet',
  /**
   * Grants permission to get the logging options for the AWS account
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetLoggingOptions.html
   */
  GetLoggingOptions = 'iotfleetwise:GetLoggingOptions',
  /**
   * Grants permission to get summary information for a given model manifest definit
   * ion
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetModelManifest.html
   */
  GetModelManifest = 'iotfleetwise:GetModelManifest',
  /**
   * Grants permission to get the account registration status with IoT FleetWise
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetRegisterAccountStatus.html
   */
  GetRegisterAccountStatus = 'iotfleetwise:GetRegisterAccountStatus',
  /**
   * Grants permission to get summary information for a specific signal catalog
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetSignalCatalog.html
   */
  GetSignalCatalog = 'iotfleetwise:GetSignalCatalog',
  /**
   * Grants permission to get summary information for a given state template
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetStateTemplate.html
   */
  GetStateTemplate = 'iotfleetwise:GetStateTemplate',
  /**
   * Grants permission to get summary information for a vehicle
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetVehicle.html
   */
  GetVehicle = 'iotfleetwise:GetVehicle',
  /**
   * Grants permission to get the status of the campaigns running on a specific vehi
   * cle
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetVehicleStatus.html
   */
  GetVehicleStatus = 'iotfleetwise:GetVehicleStatus',
  /**
   * Grants permission to import an existing decoder manifest
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ImportDecoderManifest.html
   */
  ImportDecoderManifest = 'iotfleetwise:ImportDecoderManifest',
  /**
   * Grants permission to create a signal catalog by importing existing definitions
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ImportSignalCatalog.html
   */
  ImportSignalCatalog = 'iotfleetwise:ImportSignalCatalog',
  /**
   * Grants permission to list campaigns
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListCampaigns.html
   */
  ListCampaigns = 'iotfleetwise:ListCampaigns',
  /**
   * Grants permission to list network interfaces associated to the existing decoder
   * manifest
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListDecoderManifestNetworkInterfaces.html
   */
  ListDecoderManifestNetworkInterfaces = 'iotfleetwise:ListDecoderManifestNetworkInterfaces',
  /**
   * Grants permission to list decoder manifest signals
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListDecoderManifestSignals.html
   */
  ListDecoderManifestSignals = 'iotfleetwise:ListDecoderManifestSignals',
  /**
   * Grants permission to list all decoder manifests, with an optional filter on mod
   * el manifest
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListDecoderManifests.html
   */
  ListDecoderManifests = 'iotfleetwise:ListDecoderManifests',
  /**
   * Grants permission to list all fleets
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListFleets.html
   */
  ListFleets = 'iotfleetwise:ListFleets',
  /**
   * Grants permission to list all the fleets that the given vehicle is associated w
   * ith
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListFleetsForVehicle.html
   */
  ListFleetsForVehicle = 'iotfleetwise:ListFleetsForVehicle',
  /**
   * Grants permission to list all nodes for the given model manifest
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListModelManifestNodes.html
   */
  ListModelManifestNodes = 'iotfleetwise:ListModelManifestNodes',
  /**
   * Grants permission to list all model manifests, with an optional filter on signa
   * l catalog
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListModelManifests.html
   */
  ListModelManifests = 'iotfleetwise:ListModelManifests',
  /**
   * Grants permission to list all nodes for a given signal catalog
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListSignalCatalogNodes.html
   */
  ListSignalCatalogNodes = 'iotfleetwise:ListSignalCatalogNodes',
  /**
   * Grants permission to list all signal catalogs
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListSignalCatalogs.html
   */
  ListSignalCatalogs = 'iotfleetwise:ListSignalCatalogs',
  /**
   * Grants permission to list state templates
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListStateTemplates.html
   */
  ListStateTemplates = 'iotfleetwise:ListStateTemplates',
  /**
   * Grants permission to list tags for a resource
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'iotfleetwise:ListTagsForResource',
  /**
   * Grants permission to list all vehicles, with an optional filter on model manife
   * st
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListVehicles.html
   */
  ListVehicles = 'iotfleetwise:ListVehicles',
  /**
   * Grants permission to list vehicles in the given fleet
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListVehiclesInFleet.html
   */
  ListVehiclesInFleet = 'iotfleetwise:ListVehiclesInFleet',
  /**
   * Grants permission to enable or disable KMS-based encryption for the AWS account
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_PutEncryptionConfiguration.html
   */
  PutEncryptionConfiguration = 'iotfleetwise:PutEncryptionConfiguration',
  /**
   * Grants permission to put the logging options for the AWS account
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_PutLoggingOptions.html
   */
  PutLoggingOptions = 'iotfleetwise:PutLoggingOptions',
  /**
   * Grants permission to register an AWS account to IoT FleetWise
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_RegisterAccount.html
   */
  RegisterAccount = 'iotfleetwise:RegisterAccount',
  /**
   * Grants permission to add tags to a resource
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_TagResource.html
   */
  TagResource = 'iotfleetwise:TagResource',
  /**
   * Grants permission to remove tags from a resource
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'iotfleetwise:UntagResource',
  /**
   * Grants permission to update the given campaign
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateCampaign.html
   */
  UpdateCampaign = 'iotfleetwise:UpdateCampaign',
  /**
   * Grants permission to update a decoder manifest defnition
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateDecoderManifest.html
   */
  UpdateDecoderManifest = 'iotfleetwise:UpdateDecoderManifest',
  /**
   * Grants permission to update the fleet
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateFleet.html
   */
  UpdateFleet = 'iotfleetwise:UpdateFleet',
  /**
   * Grants permission to update the given model manifest definition
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateModelManifest.html
   */
  UpdateModelManifest = 'iotfleetwise:UpdateModelManifest',
  /**
   * Grants permission to update a specific signal catalog definition
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateSignalCatalog.html
   */
  UpdateSignalCatalog = 'iotfleetwise:UpdateSignalCatalog',
  /**
   * Grants permission to update the given state template
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateStateTemplate.html
   */
  UpdateStateTemplate = 'iotfleetwise:UpdateStateTemplate',
  /**
   * Grants permission to update the vehicle
   *
   * See https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateVehicle.html
   */
  UpdateVehicle = 'iotfleetwise:UpdateVehicle',
}
