// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon GameLift (GAMELIFT)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamelift.html
 *
 * 2024-02-12T09:57:29.966Z
 */
export enum AwsGameliftActions {
  /**
   * Grants permission to register player acceptance or rejection of a proposed Flex
   * Match match
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_AcceptMatch.html
   */
  AcceptMatch = 'gamelift:AcceptMatch',
  /**
   * Grants permission to locate and reserve a game server to host a new game sessio
   * n
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ClaimGameServer.html
   */
  ClaimGameServer = 'gamelift:ClaimGameServer',
  /**
   * Grants permission to define a new alias for a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateAlias.html
   */
  CreateAlias = 'gamelift:CreateAlias',
  /**
   * Grants permission to create a new game build using files stored in an Amazon S3
   * bucket
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html
   */
  CreateBuild = 'gamelift:CreateBuild',
  /**
   * Grants permission to create a new fleet of computing resources to run your game
   * servers
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateFleet.html
   */
  CreateFleet = 'gamelift:CreateFleet',
  /**
   * Grants permission to specify additional locations for a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateFleetLocations.html
   */
  CreateFleetLocations = 'gamelift:CreateFleetLocations',
  /**
   * Grants permission to create a new game server group, set up a corresponding Aut
   * o Scaling group, and launche instances to host game servers
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameServerGroup.html
   */
  CreateGameServerGroup = 'gamelift:CreateGameServerGroup',
  /**
   * Grants permission to start a new game session on a specified fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSession.html
   */
  CreateGameSession = 'gamelift:CreateGameSession',
  /**
   * Grants permission to set up a new queue for processing game session placement r
   * equests
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html
   */
  CreateGameSessionQueue = 'gamelift:CreateGameSessionQueue',
  /**
   * Grants permission to define a new location for a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateLocation.html
   */
  CreateLocation = 'gamelift:CreateLocation',
  /**
   * Grants permission to create a new FlexMatch matchmaker
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingConfiguration.html
   */
  CreateMatchmakingConfiguration = 'gamelift:CreateMatchmakingConfiguration',
  /**
   * Grants permission to create a new matchmaking rule set for FlexMatch
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingRuleSet.html
   */
  CreateMatchmakingRuleSet = 'gamelift:CreateMatchmakingRuleSet',
  /**
   * Grants permission to reserve an available game session slot for a player
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html
   */
  CreatePlayerSession = 'gamelift:CreatePlayerSession',
  /**
   * Grants permission to reserve available game session slots for multiple players
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html
   */
  CreatePlayerSessions = 'gamelift:CreatePlayerSessions',
  /**
   * Grants permission to create a new Realtime Servers script
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateScript.html
   */
  CreateScript = 'gamelift:CreateScript',
  /**
   * Grants permission to allow GameLift to create or delete a peering connection be
   * tween a GameLift fleet VPC and a VPC on another AWS account
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html
   */
  CreateVpcPeeringAuthorization = 'gamelift:CreateVpcPeeringAuthorization',
  /**
   * Grants permission to establish a peering connection between your GameLift fleet
   * VPC and a VPC on another account
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html
   */
  CreateVpcPeeringConnection = 'gamelift:CreateVpcPeeringConnection',
  /**
   * Grants permission to delete an alias
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteAlias.html
   */
  DeleteAlias = 'gamelift:DeleteAlias',
  /**
   * Grants permission to delete a game build
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteBuild.html
   */
  DeleteBuild = 'gamelift:DeleteBuild',
  /**
   * Grants permission to delete an empty fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteFleet.html
   */
  DeleteFleet = 'gamelift:DeleteFleet',
  /**
   * Grants permission to delete locations for a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteFleetLocations.html
   */
  DeleteFleetLocations = 'gamelift:DeleteFleetLocations',
  /**
   * Grants permission to permanently delete a game server group and terminate Fleet
   * IQ activity for the corresponding Auto Scaling group
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameServerGroup.html
   */
  DeleteGameServerGroup = 'gamelift:DeleteGameServerGroup',
  /**
   * Grants permission to delete an existing game session queue
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html
   */
  DeleteGameSessionQueue = 'gamelift:DeleteGameSessionQueue',
  /**
   * Grants permission to delete a location
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteLocation.html
   */
  DeleteLocation = 'gamelift:DeleteLocation',
  /**
   * Grants permission to delete an existing FlexMatch matchmaker
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingConfiguration.html
   */
  DeleteMatchmakingConfiguration = 'gamelift:DeleteMatchmakingConfiguration',
  /**
   * Grants permission to delete an existing FlexMatch matchmaking rule set
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingRuleSet.html
   */
  DeleteMatchmakingRuleSet = 'gamelift:DeleteMatchmakingRuleSet',
  /**
   * Grants permission to delete a set of auto-scaling rules
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScalingPolicy.html
   */
  DeleteScalingPolicy = 'gamelift:DeleteScalingPolicy',
  /**
   * Grants permission to delete a Realtime Servers script
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScript.html
   */
  DeleteScript = 'gamelift:DeleteScript',
  /**
   * Grants permission to cancel a VPC peering authorization
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringAuthorization.html
   */
  DeleteVpcPeeringAuthorization = 'gamelift:DeleteVpcPeeringAuthorization',
  /**
   * Grants permission to remove a peering connection between VPCs
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html
   */
  DeleteVpcPeeringConnection = 'gamelift:DeleteVpcPeeringConnection',
  /**
   * Grants permission to deregister a compute against a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html
   */
  DeregisterCompute = 'gamelift:DeregisterCompute',
  /**
   * Grants permission to remove a game server from a game server group
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterGameServer.html
   */
  DeregisterGameServer = 'gamelift:DeregisterGameServer',
  /**
   * Grants permission to retrieve properties for an alias
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeAlias.html
   */
  DescribeAlias = 'gamelift:DescribeAlias',
  /**
   * Grants permission to retrieve properties for a game build
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeBuild.html
   */
  DescribeBuild = 'gamelift:DescribeBuild',
  /**
   * Grants permission to retrieve general properties of the compute such as ARN, fl
   * eet details, SDK endpoints, and location
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeCompute.html
   */
  DescribeCompute = 'gamelift:DescribeCompute',
  /**
   * Grants permission to retrieve the maximum allowed and current usage for EC2 ins
   * tance types
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html
   */
  DescribeEC2InstanceLimits = 'gamelift:DescribeEC2InstanceLimits',
  /**
   * Grants permission to retrieve general properties, including status, for fleets
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetAttributes.html
   */
  DescribeFleetAttributes = 'gamelift:DescribeFleetAttributes',
  /**
   * Grants permission to retrieve the current capacity setting for fleets
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html
   */
  DescribeFleetCapacity = 'gamelift:DescribeFleetCapacity',
  /**
   * Grants permission to retrieve entries from a fleet's event log
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html
   */
  DescribeFleetEvents = 'gamelift:DescribeFleetEvents',
  /**
   * Grants permission to retrieve general properties, including statuses, for a fle
   * et's locations
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationAttributes.html
   */
  DescribeFleetLocationAttributes = 'gamelift:DescribeFleetLocationAttributes',
  /**
   * Grants permission to retrieve the current capacity setting for a fleet's locati
   * on
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html
   */
  DescribeFleetLocationCapacity = 'gamelift:DescribeFleetLocationCapacity',
  /**
   * Grants permission to retrieve utilization statistics for fleet's location
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html
   */
  DescribeFleetLocationUtilization = 'gamelift:DescribeFleetLocationUtilization',
  /**
   * Grants permission to retrieve the inbound connection permissions for a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetPortSettings.html
   */
  DescribeFleetPortSettings = 'gamelift:DescribeFleetPortSettings',
  /**
   * Grants permission to retrieve utilization statistics for fleets
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetUtilization.html
   */
  DescribeFleetUtilization = 'gamelift:DescribeFleetUtilization',
  /**
   * Grants permission to retrieve properties for a game server
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServer.html
   */
  DescribeGameServer = 'gamelift:DescribeGameServer',
  /**
   * Grants permission to retrieve properties for a game server group
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerGroup.html
   */
  DescribeGameServerGroup = 'gamelift:DescribeGameServerGroup',
  /**
   * Grants permission to retrieve the status of EC2 instances in a game server grou
   * p
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html
   */
  DescribeGameServerInstances = 'gamelift:DescribeGameServerInstances',
  /**
   * Grants permission to retrieve properties for game sessions in a fleet, includin
   * g the protection policy
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionDetails.html
   */
  DescribeGameSessionDetails = 'gamelift:DescribeGameSessionDetails',
  /**
   * Grants permission to retrieve details of a game session placement request
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html
   */
  DescribeGameSessionPlacement = 'gamelift:DescribeGameSessionPlacement',
  /**
   * Grants permission to retrieve properties for game session queues
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html
   */
  DescribeGameSessionQueues = 'gamelift:DescribeGameSessionQueues',
  /**
   * Grants permission to retrieve properties for game sessions in a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html
   */
  DescribeGameSessions = 'gamelift:DescribeGameSessions',
  /**
   * Grants permission to retrieve information about instances in a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html
   */
  DescribeInstances = 'gamelift:DescribeInstances',
  /**
   * Grants permission to retrieve details of matchmaking tickets
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmaking.html
   */
  DescribeMatchmaking = 'gamelift:DescribeMatchmaking',
  /**
   * Grants permission to retrieve properties for FlexMatch matchmakers
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingConfigurations.html
   */
  DescribeMatchmakingConfigurations = 'gamelift:DescribeMatchmakingConfigurations',
  /**
   * Grants permission to retrieve properties for FlexMatch matchmaking rule sets
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingRuleSets.html
   */
  DescribeMatchmakingRuleSets = 'gamelift:DescribeMatchmakingRuleSets',
  /**
   * Grants permission to retrieve properties for player sessions in a game session
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html
   */
  DescribePlayerSessions = 'gamelift:DescribePlayerSessions',
  /**
   * Grants permission to retrieve the current runtime configuration for a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeRuntimeConfiguration.html
   */
  DescribeRuntimeConfiguration = 'gamelift:DescribeRuntimeConfiguration',
  /**
   * Grants permission to retrieve all scaling policies that are applied to a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScalingPolicies.html
   */
  DescribeScalingPolicies = 'gamelift:DescribeScalingPolicies',
  /**
   * Grants permission to retrieve properties for a Realtime Servers script
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScript.html
   */
  DescribeScript = 'gamelift:DescribeScript',
  /**
   * Grants permission to retrieve valid VPC peering authorizations
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringAuthorizations.html
   */
  DescribeVpcPeeringAuthorizations = 'gamelift:DescribeVpcPeeringAuthorizations',
  /**
   * Grants permission to retrieve details on active or pending VPC peering connecti
   * ons
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html
   */
  DescribeVpcPeeringConnections = 'gamelift:DescribeVpcPeeringConnections',
  /**
   * Grants permission to retrieve access credentials of the compute
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetComputeAccess.html
   */
  GetComputeAccess = 'gamelift:GetComputeAccess',
  /**
   * Grants permission to retrieve an authorization token for a compute and fleet to
   * use in game server processes
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetComputeAuthToken.html
   */
  GetComputeAuthToken = 'gamelift:GetComputeAuthToken',
  /**
   * Grants permission to retrieve the location of stored logs for a game session
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html
   */
  GetGameSessionLogUrl = 'gamelift:GetGameSessionLogUrl',
  /**
   * Grants permission to request remote access to a specified fleet instance
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess.html
   */
  GetInstanceAccess = 'gamelift:GetInstanceAccess',
  /**
   * Grants permission to retrieve all aliases that are defined in the current Regio
   * n
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListAliases.html
   */
  ListAliases = 'gamelift:ListAliases',
  /**
   * Grants permission to retrieve all game build in the current Region
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListBuilds.html
   */
  ListBuilds = 'gamelift:ListBuilds',
  /**
   * Grants permission to retrieve all compute resources in the current Region
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListCompute.html
   */
  ListCompute = 'gamelift:ListCompute',
  /**
   * Grants permission to retrieve a list of fleet IDs for all fleets in the current
   * Region
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListFleets.html
   */
  ListFleets = 'gamelift:ListFleets',
  /**
   * Grants permission to retrieve all game server groups that are defined in the cu
   * rrent Region
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServerGroups.html
   */
  ListGameServerGroups = 'gamelift:ListGameServerGroups',
  /**
   * Grants permission to retrieve all game servers that are currently running in a
   * game server group
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServers.html
   */
  ListGameServers = 'gamelift:ListGameServers',
  /**
   * Grants permission to retrieve all locations in this account
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListLocations.html
   */
  ListLocations = 'gamelift:ListLocations',
  /**
   * Grants permission to retrieve properties for all Realtime Servers scripts in th
   * e current region
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListScripts.html
   */
  ListScripts = 'gamelift:ListScripts',
  /**
   * Grants permission to retrieve tags for GameLift resources
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'gamelift:ListTagsForResource',
  /**
   * Grants permission to create or update a fleet auto-scaling policy
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_PutScalingPolicy.html
   */
  PutScalingPolicy = 'gamelift:PutScalingPolicy',
  /**
   * Grants permission to register a compute against a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_RegisterCompute.html
   */
  RegisterCompute = 'gamelift:RegisterCompute',
  /**
   * Grants permission to notify GameLift FleetIQ when a new game server is ready to
   * host gameplay
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_RegisterGameServer.html
   */
  RegisterGameServer = 'gamelift:RegisterGameServer',
  /**
   * Grants permission to retrieve fresh upload credentials to use when uploading a
   * new game build
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html
   */
  RequestUploadCredentials = 'gamelift:RequestUploadCredentials',
  /**
   * Grants permission to retrieve the fleet ID associated with an alias
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResolveAlias.html
   */
  ResolveAlias = 'gamelift:ResolveAlias',
  /**
   * Grants permission to reinstate suspended FleetIQ activity for a game server gro
   * up
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResumeGameServerGroup.html
   */
  ResumeGameServerGroup = 'gamelift:ResumeGameServerGroup',
  /**
   * Grants permission to retrieve game sessions that match a set of search criteria
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_SearchGameSessions.html
   */
  SearchGameSessions = 'gamelift:SearchGameSessions',
  /**
   * Grants permission to resume auto-scaling activity on a fleet after it was suspe
   * nded with StopFleetActions()
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartFleetActions.html
   */
  StartFleetActions = 'gamelift:StartFleetActions',
  /**
   * Grants permission to send a game session placement request to a game session qu
   * eue
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html
   */
  StartGameSessionPlacement = 'gamelift:StartGameSessionPlacement',
  /**
   * Grants permission to request FlexMatch matchmaking to fill available player slo
   * ts in an existing game session
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchBackfill.html
   */
  StartMatchBackfill = 'gamelift:StartMatchBackfill',
  /**
   * Grants permission to request FlexMatch matchmaking for one or a group of player
   * s and initiate game session placement
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html
   */
  StartMatchmaking = 'gamelift:StartMatchmaking',
  /**
   * Grants permission to suspend auto-scaling activity on a fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html
   */
  StopFleetActions = 'gamelift:StopFleetActions',
  /**
   * Grants permission to cancel a game session placement request that is in progres
   * s
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopGameSessionPlacement.html
   */
  StopGameSessionPlacement = 'gamelift:StopGameSessionPlacement',
  /**
   * Grants permission to cancel a matchmaking or match backfill request that is in
   * progress
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopMatchmaking.html
   */
  StopMatchmaking = 'gamelift:StopMatchmaking',
  /**
   * Grants permission to temporarily stop FleetIQ activity for a game server group
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_SuspendGameServerGroup.html
   */
  SuspendGameServerGroup = 'gamelift:SuspendGameServerGroup',
  /**
   * Grants permission to tag GameLift resources
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html
   */
  TagResource = 'gamelift:TagResource',
  /**
   * Grants permission to untag GameLift resources
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html
   */
  UntagResource = 'gamelift:UntagResource',
  /**
   * Grants permission to update the properties of an existing alias
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateAlias.html
   */
  UpdateAlias = 'gamelift:UpdateAlias',
  /**
   * Grants permission to update an existing build's metadata
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateBuild.html
   */
  UpdateBuild = 'gamelift:UpdateBuild',
  /**
   * Grants permission to update the general properties of an existing fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetAttributes.html
   */
  UpdateFleetAttributes = 'gamelift:UpdateFleetAttributes',
  /**
   * Grants permission to adjust a fleet's capacity settings
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html
   */
  UpdateFleetCapacity = 'gamelift:UpdateFleetCapacity',
  /**
   * Grants permission to adjust a fleet's port settings
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetPortSettings.html
   */
  UpdateFleetPortSettings = 'gamelift:UpdateFleetPortSettings',
  /**
   * Grants permission to change game server properties, health status, or utilizati
   * on status
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServer.html
   */
  UpdateGameServer = 'gamelift:UpdateGameServer',
  /**
   * Grants permission to update properties for game server group, including allowed
   * instance types
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServerGroup.html
   */
  UpdateGameServerGroup = 'gamelift:UpdateGameServerGroup',
  /**
   * Grants permission to update the properties of an existing game session
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html
   */
  UpdateGameSession = 'gamelift:UpdateGameSession',
  /**
   * Grants permission to update properties of an existing game session queue
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html
   */
  UpdateGameSessionQueue = 'gamelift:UpdateGameSessionQueue',
  /**
   * Grants permission to update properties of an existing FlexMatch matchmaking con
   * figuration
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateMatchmakingConfiguration.html
   */
  UpdateMatchmakingConfiguration = 'gamelift:UpdateMatchmakingConfiguration',
  /**
   * Grants permission to update how server processes are configured on instances in
   * an existing fleet
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateRuntimeConfiguration.html
   */
  UpdateRuntimeConfiguration = 'gamelift:UpdateRuntimeConfiguration',
  /**
   * Grants permission to update the metadata and content of an existing Realtime Se
   * rvers script
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html
   */
  UpdateScript = 'gamelift:UpdateScript',
  /**
   * Grants permission to validate the syntax of a FlexMatch matchmaking rule set
   *
   * See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html
   */
  ValidateMatchmakingRuleSet = 'gamelift:ValidateMatchmakingRuleSet',
}