[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsGameliftActions

# Enumeration: AwsGameliftActions

All IAM policy actions for Amazon GameLift (GAMELIFT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamelift.html

2024-02-12T09:57:29.966Z

## Table of contents

### Enumeration Members

- [AcceptMatch](AwsGameliftActions.md#acceptmatch)
- [ClaimGameServer](AwsGameliftActions.md#claimgameserver)
- [CreateAlias](AwsGameliftActions.md#createalias)
- [CreateBuild](AwsGameliftActions.md#createbuild)
- [CreateFleet](AwsGameliftActions.md#createfleet)
- [CreateFleetLocations](AwsGameliftActions.md#createfleetlocations)
- [CreateGameServerGroup](AwsGameliftActions.md#creategameservergroup)
- [CreateGameSession](AwsGameliftActions.md#creategamesession)
- [CreateGameSessionQueue](AwsGameliftActions.md#creategamesessionqueue)
- [CreateLocation](AwsGameliftActions.md#createlocation)
- [CreateMatchmakingConfiguration](AwsGameliftActions.md#creatematchmakingconfiguration)
- [CreateMatchmakingRuleSet](AwsGameliftActions.md#creatematchmakingruleset)
- [CreatePlayerSession](AwsGameliftActions.md#createplayersession)
- [CreatePlayerSessions](AwsGameliftActions.md#createplayersessions)
- [CreateScript](AwsGameliftActions.md#createscript)
- [CreateVpcPeeringAuthorization](AwsGameliftActions.md#createvpcpeeringauthorization)
- [CreateVpcPeeringConnection](AwsGameliftActions.md#createvpcpeeringconnection)
- [DeleteAlias](AwsGameliftActions.md#deletealias)
- [DeleteBuild](AwsGameliftActions.md#deletebuild)
- [DeleteFleet](AwsGameliftActions.md#deletefleet)
- [DeleteFleetLocations](AwsGameliftActions.md#deletefleetlocations)
- [DeleteGameServerGroup](AwsGameliftActions.md#deletegameservergroup)
- [DeleteGameSessionQueue](AwsGameliftActions.md#deletegamesessionqueue)
- [DeleteLocation](AwsGameliftActions.md#deletelocation)
- [DeleteMatchmakingConfiguration](AwsGameliftActions.md#deletematchmakingconfiguration)
- [DeleteMatchmakingRuleSet](AwsGameliftActions.md#deletematchmakingruleset)
- [DeleteScalingPolicy](AwsGameliftActions.md#deletescalingpolicy)
- [DeleteScript](AwsGameliftActions.md#deletescript)
- [DeleteVpcPeeringAuthorization](AwsGameliftActions.md#deletevpcpeeringauthorization)
- [DeleteVpcPeeringConnection](AwsGameliftActions.md#deletevpcpeeringconnection)
- [DeregisterCompute](AwsGameliftActions.md#deregistercompute)
- [DeregisterGameServer](AwsGameliftActions.md#deregistergameserver)
- [DescribeAlias](AwsGameliftActions.md#describealias)
- [DescribeBuild](AwsGameliftActions.md#describebuild)
- [DescribeCompute](AwsGameliftActions.md#describecompute)
- [DescribeEC2InstanceLimits](AwsGameliftActions.md#describeec2instancelimits)
- [DescribeFleetAttributes](AwsGameliftActions.md#describefleetattributes)
- [DescribeFleetCapacity](AwsGameliftActions.md#describefleetcapacity)
- [DescribeFleetEvents](AwsGameliftActions.md#describefleetevents)
- [DescribeFleetLocationAttributes](AwsGameliftActions.md#describefleetlocationattributes)
- [DescribeFleetLocationCapacity](AwsGameliftActions.md#describefleetlocationcapacity)
- [DescribeFleetLocationUtilization](AwsGameliftActions.md#describefleetlocationutilization)
- [DescribeFleetPortSettings](AwsGameliftActions.md#describefleetportsettings)
- [DescribeFleetUtilization](AwsGameliftActions.md#describefleetutilization)
- [DescribeGameServer](AwsGameliftActions.md#describegameserver)
- [DescribeGameServerGroup](AwsGameliftActions.md#describegameservergroup)
- [DescribeGameServerInstances](AwsGameliftActions.md#describegameserverinstances)
- [DescribeGameSessionDetails](AwsGameliftActions.md#describegamesessiondetails)
- [DescribeGameSessionPlacement](AwsGameliftActions.md#describegamesessionplacement)
- [DescribeGameSessionQueues](AwsGameliftActions.md#describegamesessionqueues)
- [DescribeGameSessions](AwsGameliftActions.md#describegamesessions)
- [DescribeInstances](AwsGameliftActions.md#describeinstances)
- [DescribeMatchmaking](AwsGameliftActions.md#describematchmaking)
- [DescribeMatchmakingConfigurations](AwsGameliftActions.md#describematchmakingconfigurations)
- [DescribeMatchmakingRuleSets](AwsGameliftActions.md#describematchmakingrulesets)
- [DescribePlayerSessions](AwsGameliftActions.md#describeplayersessions)
- [DescribeRuntimeConfiguration](AwsGameliftActions.md#describeruntimeconfiguration)
- [DescribeScalingPolicies](AwsGameliftActions.md#describescalingpolicies)
- [DescribeScript](AwsGameliftActions.md#describescript)
- [DescribeVpcPeeringAuthorizations](AwsGameliftActions.md#describevpcpeeringauthorizations)
- [DescribeVpcPeeringConnections](AwsGameliftActions.md#describevpcpeeringconnections)
- [GetComputeAccess](AwsGameliftActions.md#getcomputeaccess)
- [GetComputeAuthToken](AwsGameliftActions.md#getcomputeauthtoken)
- [GetGameSessionLogUrl](AwsGameliftActions.md#getgamesessionlogurl)
- [GetInstanceAccess](AwsGameliftActions.md#getinstanceaccess)
- [ListAliases](AwsGameliftActions.md#listaliases)
- [ListBuilds](AwsGameliftActions.md#listbuilds)
- [ListCompute](AwsGameliftActions.md#listcompute)
- [ListFleets](AwsGameliftActions.md#listfleets)
- [ListGameServerGroups](AwsGameliftActions.md#listgameservergroups)
- [ListGameServers](AwsGameliftActions.md#listgameservers)
- [ListLocations](AwsGameliftActions.md#listlocations)
- [ListScripts](AwsGameliftActions.md#listscripts)
- [ListTagsForResource](AwsGameliftActions.md#listtagsforresource)
- [PutScalingPolicy](AwsGameliftActions.md#putscalingpolicy)
- [RegisterCompute](AwsGameliftActions.md#registercompute)
- [RegisterGameServer](AwsGameliftActions.md#registergameserver)
- [RequestUploadCredentials](AwsGameliftActions.md#requestuploadcredentials)
- [ResolveAlias](AwsGameliftActions.md#resolvealias)
- [ResumeGameServerGroup](AwsGameliftActions.md#resumegameservergroup)
- [SearchGameSessions](AwsGameliftActions.md#searchgamesessions)
- [StartFleetActions](AwsGameliftActions.md#startfleetactions)
- [StartGameSessionPlacement](AwsGameliftActions.md#startgamesessionplacement)
- [StartMatchBackfill](AwsGameliftActions.md#startmatchbackfill)
- [StartMatchmaking](AwsGameliftActions.md#startmatchmaking)
- [StopFleetActions](AwsGameliftActions.md#stopfleetactions)
- [StopGameSessionPlacement](AwsGameliftActions.md#stopgamesessionplacement)
- [StopMatchmaking](AwsGameliftActions.md#stopmatchmaking)
- [SuspendGameServerGroup](AwsGameliftActions.md#suspendgameservergroup)
- [TagResource](AwsGameliftActions.md#tagresource)
- [UntagResource](AwsGameliftActions.md#untagresource)
- [UpdateAlias](AwsGameliftActions.md#updatealias)
- [UpdateBuild](AwsGameliftActions.md#updatebuild)
- [UpdateFleetAttributes](AwsGameliftActions.md#updatefleetattributes)
- [UpdateFleetCapacity](AwsGameliftActions.md#updatefleetcapacity)
- [UpdateFleetPortSettings](AwsGameliftActions.md#updatefleetportsettings)
- [UpdateGameServer](AwsGameliftActions.md#updategameserver)
- [UpdateGameServerGroup](AwsGameliftActions.md#updategameservergroup)
- [UpdateGameSession](AwsGameliftActions.md#updategamesession)
- [UpdateGameSessionQueue](AwsGameliftActions.md#updategamesessionqueue)
- [UpdateMatchmakingConfiguration](AwsGameliftActions.md#updatematchmakingconfiguration)
- [UpdateRuntimeConfiguration](AwsGameliftActions.md#updateruntimeconfiguration)
- [UpdateScript](AwsGameliftActions.md#updatescript)
- [ValidateMatchmakingRuleSet](AwsGameliftActions.md#validatematchmakingruleset)

## Enumeration Members

### AcceptMatch

• **AcceptMatch** = ``"gamelift:AcceptMatch"``

Grants permission to register player acceptance or rejection of a proposed Flex
Match match

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_AcceptMatch.html

#### Defined in

actions/gamelift.ts:18

___

### ClaimGameServer

• **ClaimGameServer** = ``"gamelift:ClaimGameServer"``

Grants permission to locate and reserve a game server to host a new game sessio
n

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ClaimGameServer.html

#### Defined in

actions/gamelift.ts:25

___

### CreateAlias

• **CreateAlias** = ``"gamelift:CreateAlias"``

Grants permission to define a new alias for a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateAlias.html

#### Defined in

actions/gamelift.ts:31

___

### CreateBuild

• **CreateBuild** = ``"gamelift:CreateBuild"``

Grants permission to create a new game build using files stored in an Amazon S3
bucket

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html

#### Defined in

actions/gamelift.ts:38

___

### CreateFleet

• **CreateFleet** = ``"gamelift:CreateFleet"``

Grants permission to create a new fleet of computing resources to run your game
servers

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateFleet.html

#### Defined in

actions/gamelift.ts:45

___

### CreateFleetLocations

• **CreateFleetLocations** = ``"gamelift:CreateFleetLocations"``

Grants permission to specify additional locations for a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateFleetLocations.html

#### Defined in

actions/gamelift.ts:51

___

### CreateGameServerGroup

• **CreateGameServerGroup** = ``"gamelift:CreateGameServerGroup"``

Grants permission to create a new game server group, set up a corresponding Aut
o Scaling group, and launche instances to host game servers

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameServerGroup.html

#### Defined in

actions/gamelift.ts:58

___

### CreateGameSession

• **CreateGameSession** = ``"gamelift:CreateGameSession"``

Grants permission to start a new game session on a specified fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSession.html

#### Defined in

actions/gamelift.ts:64

___

### CreateGameSessionQueue

• **CreateGameSessionQueue** = ``"gamelift:CreateGameSessionQueue"``

Grants permission to set up a new queue for processing game session placement r
equests

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html

#### Defined in

actions/gamelift.ts:71

___

### CreateLocation

• **CreateLocation** = ``"gamelift:CreateLocation"``

Grants permission to define a new location for a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateLocation.html

#### Defined in

actions/gamelift.ts:77

___

### CreateMatchmakingConfiguration

• **CreateMatchmakingConfiguration** = ``"gamelift:CreateMatchmakingConfiguration"``

Grants permission to create a new FlexMatch matchmaker

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingConfiguration.html

#### Defined in

actions/gamelift.ts:83

___

### CreateMatchmakingRuleSet

• **CreateMatchmakingRuleSet** = ``"gamelift:CreateMatchmakingRuleSet"``

Grants permission to create a new matchmaking rule set for FlexMatch

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingRuleSet.html

#### Defined in

actions/gamelift.ts:89

___

### CreatePlayerSession

• **CreatePlayerSession** = ``"gamelift:CreatePlayerSession"``

Grants permission to reserve an available game session slot for a player

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html

#### Defined in

actions/gamelift.ts:95

___

### CreatePlayerSessions

• **CreatePlayerSessions** = ``"gamelift:CreatePlayerSessions"``

Grants permission to reserve available game session slots for multiple players

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html

#### Defined in

actions/gamelift.ts:101

___

### CreateScript

• **CreateScript** = ``"gamelift:CreateScript"``

Grants permission to create a new Realtime Servers script

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateScript.html

#### Defined in

actions/gamelift.ts:107

___

### CreateVpcPeeringAuthorization

• **CreateVpcPeeringAuthorization** = ``"gamelift:CreateVpcPeeringAuthorization"``

Grants permission to allow GameLift to create or delete a peering connection be
tween a GameLift fleet VPC and a VPC on another AWS account

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html

#### Defined in

actions/gamelift.ts:114

___

### CreateVpcPeeringConnection

• **CreateVpcPeeringConnection** = ``"gamelift:CreateVpcPeeringConnection"``

Grants permission to establish a peering connection between your GameLift fleet
VPC and a VPC on another account

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html

#### Defined in

actions/gamelift.ts:121

___

### DeleteAlias

• **DeleteAlias** = ``"gamelift:DeleteAlias"``

Grants permission to delete an alias

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteAlias.html

#### Defined in

actions/gamelift.ts:127

___

### DeleteBuild

• **DeleteBuild** = ``"gamelift:DeleteBuild"``

Grants permission to delete a game build

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteBuild.html

#### Defined in

actions/gamelift.ts:133

___

### DeleteFleet

• **DeleteFleet** = ``"gamelift:DeleteFleet"``

Grants permission to delete an empty fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteFleet.html

#### Defined in

actions/gamelift.ts:139

___

### DeleteFleetLocations

• **DeleteFleetLocations** = ``"gamelift:DeleteFleetLocations"``

Grants permission to delete locations for a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteFleetLocations.html

#### Defined in

actions/gamelift.ts:145

___

### DeleteGameServerGroup

• **DeleteGameServerGroup** = ``"gamelift:DeleteGameServerGroup"``

Grants permission to permanently delete a game server group and terminate Fleet
IQ activity for the corresponding Auto Scaling group

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameServerGroup.html

#### Defined in

actions/gamelift.ts:152

___

### DeleteGameSessionQueue

• **DeleteGameSessionQueue** = ``"gamelift:DeleteGameSessionQueue"``

Grants permission to delete an existing game session queue

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html

#### Defined in

actions/gamelift.ts:158

___

### DeleteLocation

• **DeleteLocation** = ``"gamelift:DeleteLocation"``

Grants permission to delete a location

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteLocation.html

#### Defined in

actions/gamelift.ts:164

___

### DeleteMatchmakingConfiguration

• **DeleteMatchmakingConfiguration** = ``"gamelift:DeleteMatchmakingConfiguration"``

Grants permission to delete an existing FlexMatch matchmaker

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingConfiguration.html

#### Defined in

actions/gamelift.ts:170

___

### DeleteMatchmakingRuleSet

• **DeleteMatchmakingRuleSet** = ``"gamelift:DeleteMatchmakingRuleSet"``

Grants permission to delete an existing FlexMatch matchmaking rule set

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingRuleSet.html

#### Defined in

actions/gamelift.ts:176

___

### DeleteScalingPolicy

• **DeleteScalingPolicy** = ``"gamelift:DeleteScalingPolicy"``

Grants permission to delete a set of auto-scaling rules

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScalingPolicy.html

#### Defined in

actions/gamelift.ts:182

___

### DeleteScript

• **DeleteScript** = ``"gamelift:DeleteScript"``

Grants permission to delete a Realtime Servers script

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScript.html

#### Defined in

actions/gamelift.ts:188

___

### DeleteVpcPeeringAuthorization

• **DeleteVpcPeeringAuthorization** = ``"gamelift:DeleteVpcPeeringAuthorization"``

Grants permission to cancel a VPC peering authorization

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringAuthorization.html

#### Defined in

actions/gamelift.ts:194

___

### DeleteVpcPeeringConnection

• **DeleteVpcPeeringConnection** = ``"gamelift:DeleteVpcPeeringConnection"``

Grants permission to remove a peering connection between VPCs

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html

#### Defined in

actions/gamelift.ts:200

___

### DeregisterCompute

• **DeregisterCompute** = ``"gamelift:DeregisterCompute"``

Grants permission to deregister a compute against a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html

#### Defined in

actions/gamelift.ts:206

___

### DeregisterGameServer

• **DeregisterGameServer** = ``"gamelift:DeregisterGameServer"``

Grants permission to remove a game server from a game server group

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterGameServer.html

#### Defined in

actions/gamelift.ts:212

___

### DescribeAlias

• **DescribeAlias** = ``"gamelift:DescribeAlias"``

Grants permission to retrieve properties for an alias

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeAlias.html

#### Defined in

actions/gamelift.ts:218

___

### DescribeBuild

• **DescribeBuild** = ``"gamelift:DescribeBuild"``

Grants permission to retrieve properties for a game build

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeBuild.html

#### Defined in

actions/gamelift.ts:224

___

### DescribeCompute

• **DescribeCompute** = ``"gamelift:DescribeCompute"``

Grants permission to retrieve general properties of the compute such as ARN, fl
eet details, SDK endpoints, and location

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeCompute.html

#### Defined in

actions/gamelift.ts:231

___

### DescribeEC2InstanceLimits

• **DescribeEC2InstanceLimits** = ``"gamelift:DescribeEC2InstanceLimits"``

Grants permission to retrieve the maximum allowed and current usage for EC2 ins
tance types

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html

#### Defined in

actions/gamelift.ts:238

___

### DescribeFleetAttributes

• **DescribeFleetAttributes** = ``"gamelift:DescribeFleetAttributes"``

Grants permission to retrieve general properties, including status, for fleets

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetAttributes.html

#### Defined in

actions/gamelift.ts:244

___

### DescribeFleetCapacity

• **DescribeFleetCapacity** = ``"gamelift:DescribeFleetCapacity"``

Grants permission to retrieve the current capacity setting for fleets

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html

#### Defined in

actions/gamelift.ts:250

___

### DescribeFleetEvents

• **DescribeFleetEvents** = ``"gamelift:DescribeFleetEvents"``

Grants permission to retrieve entries from a fleet's event log

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html

#### Defined in

actions/gamelift.ts:256

___

### DescribeFleetLocationAttributes

• **DescribeFleetLocationAttributes** = ``"gamelift:DescribeFleetLocationAttributes"``

Grants permission to retrieve general properties, including statuses, for a fle
et's locations

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationAttributes.html

#### Defined in

actions/gamelift.ts:263

___

### DescribeFleetLocationCapacity

• **DescribeFleetLocationCapacity** = ``"gamelift:DescribeFleetLocationCapacity"``

Grants permission to retrieve the current capacity setting for a fleet's locati
on

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html

#### Defined in

actions/gamelift.ts:270

___

### DescribeFleetLocationUtilization

• **DescribeFleetLocationUtilization** = ``"gamelift:DescribeFleetLocationUtilization"``

Grants permission to retrieve utilization statistics for fleet's location

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html

#### Defined in

actions/gamelift.ts:276

___

### DescribeFleetPortSettings

• **DescribeFleetPortSettings** = ``"gamelift:DescribeFleetPortSettings"``

Grants permission to retrieve the inbound connection permissions for a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetPortSettings.html

#### Defined in

actions/gamelift.ts:282

___

### DescribeFleetUtilization

• **DescribeFleetUtilization** = ``"gamelift:DescribeFleetUtilization"``

Grants permission to retrieve utilization statistics for fleets

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetUtilization.html

#### Defined in

actions/gamelift.ts:288

___

### DescribeGameServer

• **DescribeGameServer** = ``"gamelift:DescribeGameServer"``

Grants permission to retrieve properties for a game server

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServer.html

#### Defined in

actions/gamelift.ts:294

___

### DescribeGameServerGroup

• **DescribeGameServerGroup** = ``"gamelift:DescribeGameServerGroup"``

Grants permission to retrieve properties for a game server group

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerGroup.html

#### Defined in

actions/gamelift.ts:300

___

### DescribeGameServerInstances

• **DescribeGameServerInstances** = ``"gamelift:DescribeGameServerInstances"``

Grants permission to retrieve the status of EC2 instances in a game server grou
p

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html

#### Defined in

actions/gamelift.ts:307

___

### DescribeGameSessionDetails

• **DescribeGameSessionDetails** = ``"gamelift:DescribeGameSessionDetails"``

Grants permission to retrieve properties for game sessions in a fleet, includin
g the protection policy

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionDetails.html

#### Defined in

actions/gamelift.ts:314

___

### DescribeGameSessionPlacement

• **DescribeGameSessionPlacement** = ``"gamelift:DescribeGameSessionPlacement"``

Grants permission to retrieve details of a game session placement request

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html

#### Defined in

actions/gamelift.ts:320

___

### DescribeGameSessionQueues

• **DescribeGameSessionQueues** = ``"gamelift:DescribeGameSessionQueues"``

Grants permission to retrieve properties for game session queues

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html

#### Defined in

actions/gamelift.ts:326

___

### DescribeGameSessions

• **DescribeGameSessions** = ``"gamelift:DescribeGameSessions"``

Grants permission to retrieve properties for game sessions in a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html

#### Defined in

actions/gamelift.ts:332

___

### DescribeInstances

• **DescribeInstances** = ``"gamelift:DescribeInstances"``

Grants permission to retrieve information about instances in a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html

#### Defined in

actions/gamelift.ts:338

___

### DescribeMatchmaking

• **DescribeMatchmaking** = ``"gamelift:DescribeMatchmaking"``

Grants permission to retrieve details of matchmaking tickets

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmaking.html

#### Defined in

actions/gamelift.ts:344

___

### DescribeMatchmakingConfigurations

• **DescribeMatchmakingConfigurations** = ``"gamelift:DescribeMatchmakingConfigurations"``

Grants permission to retrieve properties for FlexMatch matchmakers

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingConfigurations.html

#### Defined in

actions/gamelift.ts:350

___

### DescribeMatchmakingRuleSets

• **DescribeMatchmakingRuleSets** = ``"gamelift:DescribeMatchmakingRuleSets"``

Grants permission to retrieve properties for FlexMatch matchmaking rule sets

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingRuleSets.html

#### Defined in

actions/gamelift.ts:356

___

### DescribePlayerSessions

• **DescribePlayerSessions** = ``"gamelift:DescribePlayerSessions"``

Grants permission to retrieve properties for player sessions in a game session

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html

#### Defined in

actions/gamelift.ts:362

___

### DescribeRuntimeConfiguration

• **DescribeRuntimeConfiguration** = ``"gamelift:DescribeRuntimeConfiguration"``

Grants permission to retrieve the current runtime configuration for a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeRuntimeConfiguration.html

#### Defined in

actions/gamelift.ts:368

___

### DescribeScalingPolicies

• **DescribeScalingPolicies** = ``"gamelift:DescribeScalingPolicies"``

Grants permission to retrieve all scaling policies that are applied to a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScalingPolicies.html

#### Defined in

actions/gamelift.ts:374

___

### DescribeScript

• **DescribeScript** = ``"gamelift:DescribeScript"``

Grants permission to retrieve properties for a Realtime Servers script

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScript.html

#### Defined in

actions/gamelift.ts:380

___

### DescribeVpcPeeringAuthorizations

• **DescribeVpcPeeringAuthorizations** = ``"gamelift:DescribeVpcPeeringAuthorizations"``

Grants permission to retrieve valid VPC peering authorizations

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringAuthorizations.html

#### Defined in

actions/gamelift.ts:386

___

### DescribeVpcPeeringConnections

• **DescribeVpcPeeringConnections** = ``"gamelift:DescribeVpcPeeringConnections"``

Grants permission to retrieve details on active or pending VPC peering connecti
ons

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html

#### Defined in

actions/gamelift.ts:393

___

### GetComputeAccess

• **GetComputeAccess** = ``"gamelift:GetComputeAccess"``

Grants permission to retrieve access credentials of the compute

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetComputeAccess.html

#### Defined in

actions/gamelift.ts:399

___

### GetComputeAuthToken

• **GetComputeAuthToken** = ``"gamelift:GetComputeAuthToken"``

Grants permission to retrieve an authorization token for a compute and fleet to
use in game server processes

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetComputeAuthToken.html

#### Defined in

actions/gamelift.ts:406

___

### GetGameSessionLogUrl

• **GetGameSessionLogUrl** = ``"gamelift:GetGameSessionLogUrl"``

Grants permission to retrieve the location of stored logs for a game session

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html

#### Defined in

actions/gamelift.ts:412

___

### GetInstanceAccess

• **GetInstanceAccess** = ``"gamelift:GetInstanceAccess"``

Grants permission to request remote access to a specified fleet instance

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess.html

#### Defined in

actions/gamelift.ts:418

___

### ListAliases

• **ListAliases** = ``"gamelift:ListAliases"``

Grants permission to retrieve all aliases that are defined in the current Regio
n

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListAliases.html

#### Defined in

actions/gamelift.ts:425

___

### ListBuilds

• **ListBuilds** = ``"gamelift:ListBuilds"``

Grants permission to retrieve all game build in the current Region

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListBuilds.html

#### Defined in

actions/gamelift.ts:431

___

### ListCompute

• **ListCompute** = ``"gamelift:ListCompute"``

Grants permission to retrieve all compute resources in the current Region

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListCompute.html

#### Defined in

actions/gamelift.ts:437

___

### ListFleets

• **ListFleets** = ``"gamelift:ListFleets"``

Grants permission to retrieve a list of fleet IDs for all fleets in the current
Region

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListFleets.html

#### Defined in

actions/gamelift.ts:444

___

### ListGameServerGroups

• **ListGameServerGroups** = ``"gamelift:ListGameServerGroups"``

Grants permission to retrieve all game server groups that are defined in the cu
rrent Region

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServerGroups.html

#### Defined in

actions/gamelift.ts:451

___

### ListGameServers

• **ListGameServers** = ``"gamelift:ListGameServers"``

Grants permission to retrieve all game servers that are currently running in a
game server group

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServers.html

#### Defined in

actions/gamelift.ts:458

___

### ListLocations

• **ListLocations** = ``"gamelift:ListLocations"``

Grants permission to retrieve all locations in this account

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListLocations.html

#### Defined in

actions/gamelift.ts:464

___

### ListScripts

• **ListScripts** = ``"gamelift:ListScripts"``

Grants permission to retrieve properties for all Realtime Servers scripts in th
e current region

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListScripts.html

#### Defined in

actions/gamelift.ts:471

___

### ListTagsForResource

• **ListTagsForResource** = ``"gamelift:ListTagsForResource"``

Grants permission to retrieve tags for GameLift resources

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html

#### Defined in

actions/gamelift.ts:477

___

### PutScalingPolicy

• **PutScalingPolicy** = ``"gamelift:PutScalingPolicy"``

Grants permission to create or update a fleet auto-scaling policy

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_PutScalingPolicy.html

#### Defined in

actions/gamelift.ts:483

___

### RegisterCompute

• **RegisterCompute** = ``"gamelift:RegisterCompute"``

Grants permission to register a compute against a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_RegisterCompute.html

#### Defined in

actions/gamelift.ts:489

___

### RegisterGameServer

• **RegisterGameServer** = ``"gamelift:RegisterGameServer"``

Grants permission to notify GameLift FleetIQ when a new game server is ready to
host gameplay

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_RegisterGameServer.html

#### Defined in

actions/gamelift.ts:496

___

### RequestUploadCredentials

• **RequestUploadCredentials** = ``"gamelift:RequestUploadCredentials"``

Grants permission to retrieve fresh upload credentials to use when uploading a
new game build

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html

#### Defined in

actions/gamelift.ts:503

___

### ResolveAlias

• **ResolveAlias** = ``"gamelift:ResolveAlias"``

Grants permission to retrieve the fleet ID associated with an alias

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResolveAlias.html

#### Defined in

actions/gamelift.ts:509

___

### ResumeGameServerGroup

• **ResumeGameServerGroup** = ``"gamelift:ResumeGameServerGroup"``

Grants permission to reinstate suspended FleetIQ activity for a game server gro
up

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResumeGameServerGroup.html

#### Defined in

actions/gamelift.ts:516

___

### SearchGameSessions

• **SearchGameSessions** = ``"gamelift:SearchGameSessions"``

Grants permission to retrieve game sessions that match a set of search criteria

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_SearchGameSessions.html

#### Defined in

actions/gamelift.ts:522

___

### StartFleetActions

• **StartFleetActions** = ``"gamelift:StartFleetActions"``

Grants permission to resume auto-scaling activity on a fleet after it was suspe
nded with StopFleetActions()

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartFleetActions.html

#### Defined in

actions/gamelift.ts:529

___

### StartGameSessionPlacement

• **StartGameSessionPlacement** = ``"gamelift:StartGameSessionPlacement"``

Grants permission to send a game session placement request to a game session qu
eue

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html

#### Defined in

actions/gamelift.ts:536

___

### StartMatchBackfill

• **StartMatchBackfill** = ``"gamelift:StartMatchBackfill"``

Grants permission to request FlexMatch matchmaking to fill available player slo
ts in an existing game session

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchBackfill.html

#### Defined in

actions/gamelift.ts:543

___

### StartMatchmaking

• **StartMatchmaking** = ``"gamelift:StartMatchmaking"``

Grants permission to request FlexMatch matchmaking for one or a group of player
s and initiate game session placement

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html

#### Defined in

actions/gamelift.ts:550

___

### StopFleetActions

• **StopFleetActions** = ``"gamelift:StopFleetActions"``

Grants permission to suspend auto-scaling activity on a fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html

#### Defined in

actions/gamelift.ts:556

___

### StopGameSessionPlacement

• **StopGameSessionPlacement** = ``"gamelift:StopGameSessionPlacement"``

Grants permission to cancel a game session placement request that is in progres
s

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopGameSessionPlacement.html

#### Defined in

actions/gamelift.ts:563

___

### StopMatchmaking

• **StopMatchmaking** = ``"gamelift:StopMatchmaking"``

Grants permission to cancel a matchmaking or match backfill request that is in
progress

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopMatchmaking.html

#### Defined in

actions/gamelift.ts:570

___

### SuspendGameServerGroup

• **SuspendGameServerGroup** = ``"gamelift:SuspendGameServerGroup"``

Grants permission to temporarily stop FleetIQ activity for a game server group

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_SuspendGameServerGroup.html

#### Defined in

actions/gamelift.ts:576

___

### TagResource

• **TagResource** = ``"gamelift:TagResource"``

Grants permission to tag GameLift resources

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html

#### Defined in

actions/gamelift.ts:582

___

### UntagResource

• **UntagResource** = ``"gamelift:UntagResource"``

Grants permission to untag GameLift resources

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html

#### Defined in

actions/gamelift.ts:588

___

### UpdateAlias

• **UpdateAlias** = ``"gamelift:UpdateAlias"``

Grants permission to update the properties of an existing alias

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateAlias.html

#### Defined in

actions/gamelift.ts:594

___

### UpdateBuild

• **UpdateBuild** = ``"gamelift:UpdateBuild"``

Grants permission to update an existing build's metadata

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateBuild.html

#### Defined in

actions/gamelift.ts:600

___

### UpdateFleetAttributes

• **UpdateFleetAttributes** = ``"gamelift:UpdateFleetAttributes"``

Grants permission to update the general properties of an existing fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetAttributes.html

#### Defined in

actions/gamelift.ts:606

___

### UpdateFleetCapacity

• **UpdateFleetCapacity** = ``"gamelift:UpdateFleetCapacity"``

Grants permission to adjust a fleet's capacity settings

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html

#### Defined in

actions/gamelift.ts:612

___

### UpdateFleetPortSettings

• **UpdateFleetPortSettings** = ``"gamelift:UpdateFleetPortSettings"``

Grants permission to adjust a fleet's port settings

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetPortSettings.html

#### Defined in

actions/gamelift.ts:618

___

### UpdateGameServer

• **UpdateGameServer** = ``"gamelift:UpdateGameServer"``

Grants permission to change game server properties, health status, or utilizati
on status

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServer.html

#### Defined in

actions/gamelift.ts:625

___

### UpdateGameServerGroup

• **UpdateGameServerGroup** = ``"gamelift:UpdateGameServerGroup"``

Grants permission to update properties for game server group, including allowed
instance types

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServerGroup.html

#### Defined in

actions/gamelift.ts:632

___

### UpdateGameSession

• **UpdateGameSession** = ``"gamelift:UpdateGameSession"``

Grants permission to update the properties of an existing game session

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html

#### Defined in

actions/gamelift.ts:638

___

### UpdateGameSessionQueue

• **UpdateGameSessionQueue** = ``"gamelift:UpdateGameSessionQueue"``

Grants permission to update properties of an existing game session queue

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html

#### Defined in

actions/gamelift.ts:644

___

### UpdateMatchmakingConfiguration

• **UpdateMatchmakingConfiguration** = ``"gamelift:UpdateMatchmakingConfiguration"``

Grants permission to update properties of an existing FlexMatch matchmaking con
figuration

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateMatchmakingConfiguration.html

#### Defined in

actions/gamelift.ts:651

___

### UpdateRuntimeConfiguration

• **UpdateRuntimeConfiguration** = ``"gamelift:UpdateRuntimeConfiguration"``

Grants permission to update how server processes are configured on instances in
an existing fleet

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateRuntimeConfiguration.html

#### Defined in

actions/gamelift.ts:658

___

### UpdateScript

• **UpdateScript** = ``"gamelift:UpdateScript"``

Grants permission to update the metadata and content of an existing Realtime Se
rvers script

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html

#### Defined in

actions/gamelift.ts:665

___

### ValidateMatchmakingRuleSet

• **ValidateMatchmakingRuleSet** = ``"gamelift:ValidateMatchmakingRuleSet"``

Grants permission to validate the syntax of a FlexMatch matchmaking rule set

See https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html

#### Defined in

actions/gamelift.ts:671
