// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Ground Station (GROUNDSTATION)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgroundstation.html
 *
 * 2025-02-24T21:48:08.812Z
 */
export enum AwsGroundstationActions {
  /**
   * Grants permission to cancel a contact
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CancelContact.html
   */
  CancelContact = 'groundstation:CancelContact',
  /**
   * Grants permission to create a configuration
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateConfig.html
   */
  CreateConfig = 'groundstation:CreateConfig',
  /**
   * Grants permission to create a data flow endpoint group
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateDataflowEndpointGroup.html
   */
  CreateDataflowEndpointGroup = 'groundstation:CreateDataflowEndpointGroup',
  /**
   * Grants permission to create an ephemeris item
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateEphemeris.html
   */
  CreateEphemeris = 'groundstation:CreateEphemeris',
  /**
   * Grants permission to create a mission profile
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateMissionProfile.html
   */
  CreateMissionProfile = 'groundstation:CreateMissionProfile',
  /**
   * Grants permission to delete a config
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteConfig.html
   */
  DeleteConfig = 'groundstation:DeleteConfig',
  /**
   * Grants permission to delete a data flow endpoint group
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteDataflowEndpointGroup.html
   */
  DeleteDataflowEndpointGroup = 'groundstation:DeleteDataflowEndpointGroup',
  /**
   * Grants permission to delete an ephemeris item
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteEphemeris.html
   */
  DeleteEphemeris = 'groundstation:DeleteEphemeris',
  /**
   * Grants permission to delete a mission profile
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteMissionProfile.html
   */
  DeleteMissionProfile = 'groundstation:DeleteMissionProfile',
  /**
   * Grants permission to describe a contact
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DescribeContact.html
   */
  DescribeContact = 'groundstation:DescribeContact',
  /**
   * Grants permission to describe an ephemeris item
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DescribeEphemeris.html
   */
  DescribeEphemeris = 'groundstation:DescribeEphemeris',
  /**
   * Grants permission to get the configuration of an agent
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetAgentConfiguration.html
   */
  GetAgentConfiguration = 'groundstation:GetAgentConfiguration',
  /**
   * Grants permission to return a configuration
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetConfig.html
   */
  GetConfig = 'groundstation:GetConfig',
  /**
   * Grants permission to return a data flow endpoint group
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetDataflowEndpointGroup.html
   */
  GetDataflowEndpointGroup = 'groundstation:GetDataflowEndpointGroup',
  /**
   * Grants permission to return minutes usage
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMinuteUsage.html
   */
  GetMinuteUsage = 'groundstation:GetMinuteUsage',
  /**
   * Grants permission to retrieve a mission profile
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMissionProfile.html
   */
  GetMissionProfile = 'groundstation:GetMissionProfile',
  /**
   * Grants permission to return information about a satellite
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetSatellite.html
   */
  GetSatellite = 'groundstation:GetSatellite',
  /**
   * Grants permission to return a list of past configurations
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListConfigs.html
   */
  ListConfigs = 'groundstation:ListConfigs',
  /**
   * Grants permission to return a list of contacts
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListContacts.html
   */
  ListContacts = 'groundstation:ListContacts',
  /**
   * Grants permission to list data flow endpoint groups
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListDataflowEndpointGroups.html
   */
  ListDataflowEndpointGroups = 'groundstation:ListDataflowEndpointGroups',
  /**
   * Grants permission to list ephemerides
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListEphemerides.html
   */
  ListEphemerides = 'groundstation:ListEphemerides',
  /**
   * Grants permission to list ground stations
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListGroundStations.html
   */
  ListGroundStations = 'groundstation:ListGroundStations',
  /**
   * Grants permission to return a list of mission profiles
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListMissionProfiles.html
   */
  ListMissionProfiles = 'groundstation:ListMissionProfiles',
  /**
   * Grants permission to list satellites
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListSatellites.html
   */
  ListSatellites = 'groundstation:ListSatellites',
  /**
   * Grants permission to list tags for a resource
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'groundstation:ListTagsForResource',
  /**
   * Grants permission to register an agent
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_RegisterAgent.html
   */
  RegisterAgent = 'groundstation:RegisterAgent',
  /**
   * Grants permission to reserve a contact
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ReserveContact.html
   */
  ReserveContact = 'groundstation:ReserveContact',
  /**
   * Grants permission to assign a resource tag
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_TagResource.html
   */
  TagResource = 'groundstation:TagResource',
  /**
   * Grants permission to unassign a resource tag
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'groundstation:UntagResource',
  /**
   * Grants permission to update the status of an agent
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateAgentStatus.html
   */
  UpdateAgentStatus = 'groundstation:UpdateAgentStatus',
  /**
   * Grants permission to update a configuration
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateConfig.html
   */
  UpdateConfig = 'groundstation:UpdateConfig',
  /**
   * Grants permission to update an ephemeris item
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateEphemeris.html
   */
  UpdateEphemeris = 'groundstation:UpdateEphemeris',
  /**
   * Grants permission to update a mission profile
   *
   * See https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateMissionProfile.html
   */
  UpdateMissionProfile = 'groundstation:UpdateMissionProfile',
}
