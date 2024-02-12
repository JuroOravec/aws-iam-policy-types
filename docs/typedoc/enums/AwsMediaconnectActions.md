[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMediaconnectActions

# Enumeration: AwsMediaconnectActions

All IAM policy actions for AWS Elemental MediaConnect (MEDIACONNECT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconnect.html

2024-02-12T09:57:15.734Z

## Table of contents

### Enumeration Members

- [AddBridgeOutputs](AwsMediaconnectActions.md#addbridgeoutputs)
- [AddBridgeSources](AwsMediaconnectActions.md#addbridgesources)
- [AddFlowMediaStreams](AwsMediaconnectActions.md#addflowmediastreams)
- [AddFlowOutputs](AwsMediaconnectActions.md#addflowoutputs)
- [AddFlowSources](AwsMediaconnectActions.md#addflowsources)
- [AddFlowVpcInterfaces](AwsMediaconnectActions.md#addflowvpcinterfaces)
- [CreateBridge](AwsMediaconnectActions.md#createbridge)
- [CreateFlow](AwsMediaconnectActions.md#createflow)
- [CreateGateway](AwsMediaconnectActions.md#creategateway)
- [DeleteBridge](AwsMediaconnectActions.md#deletebridge)
- [DeleteFlow](AwsMediaconnectActions.md#deleteflow)
- [DeleteGateway](AwsMediaconnectActions.md#deletegateway)
- [DeregisterGatewayInstance](AwsMediaconnectActions.md#deregistergatewayinstance)
- [DescribeBridge](AwsMediaconnectActions.md#describebridge)
- [DescribeFlow](AwsMediaconnectActions.md#describeflow)
- [DescribeFlowSourceMetadata](AwsMediaconnectActions.md#describeflowsourcemetadata)
- [DescribeGateway](AwsMediaconnectActions.md#describegateway)
- [DescribeGatewayInstance](AwsMediaconnectActions.md#describegatewayinstance)
- [DescribeOffering](AwsMediaconnectActions.md#describeoffering)
- [DescribeReservation](AwsMediaconnectActions.md#describereservation)
- [DiscoverGatewayPollEndpoint](AwsMediaconnectActions.md#discovergatewaypollendpoint)
- [GrantFlowEntitlements](AwsMediaconnectActions.md#grantflowentitlements)
- [ListBridges](AwsMediaconnectActions.md#listbridges)
- [ListEntitlements](AwsMediaconnectActions.md#listentitlements)
- [ListFlows](AwsMediaconnectActions.md#listflows)
- [ListGatewayInstances](AwsMediaconnectActions.md#listgatewayinstances)
- [ListGateways](AwsMediaconnectActions.md#listgateways)
- [ListOfferings](AwsMediaconnectActions.md#listofferings)
- [ListReservations](AwsMediaconnectActions.md#listreservations)
- [ListTagsForResource](AwsMediaconnectActions.md#listtagsforresource)
- [PollGateway](AwsMediaconnectActions.md#pollgateway)
- [PurchaseOffering](AwsMediaconnectActions.md#purchaseoffering)
- [RemoveBridgeOutput](AwsMediaconnectActions.md#removebridgeoutput)
- [RemoveBridgeSource](AwsMediaconnectActions.md#removebridgesource)
- [RemoveFlowMediaStream](AwsMediaconnectActions.md#removeflowmediastream)
- [RemoveFlowOutput](AwsMediaconnectActions.md#removeflowoutput)
- [RemoveFlowSource](AwsMediaconnectActions.md#removeflowsource)
- [RemoveFlowVpcInterface](AwsMediaconnectActions.md#removeflowvpcinterface)
- [RevokeFlowEntitlement](AwsMediaconnectActions.md#revokeflowentitlement)
- [StartFlow](AwsMediaconnectActions.md#startflow)
- [StopFlow](AwsMediaconnectActions.md#stopflow)
- [SubmitGatewayStateChange](AwsMediaconnectActions.md#submitgatewaystatechange)
- [TagResource](AwsMediaconnectActions.md#tagresource)
- [UntagResource](AwsMediaconnectActions.md#untagresource)
- [UpdateBridge](AwsMediaconnectActions.md#updatebridge)
- [UpdateBridgeOutput](AwsMediaconnectActions.md#updatebridgeoutput)
- [UpdateBridgeSource](AwsMediaconnectActions.md#updatebridgesource)
- [UpdateBridgeState](AwsMediaconnectActions.md#updatebridgestate)
- [UpdateFlow](AwsMediaconnectActions.md#updateflow)
- [UpdateFlowEntitlement](AwsMediaconnectActions.md#updateflowentitlement)
- [UpdateFlowMediaStream](AwsMediaconnectActions.md#updateflowmediastream)
- [UpdateFlowOutput](AwsMediaconnectActions.md#updateflowoutput)
- [UpdateFlowSource](AwsMediaconnectActions.md#updateflowsource)
- [UpdateGatewayInstance](AwsMediaconnectActions.md#updategatewayinstance)

## Enumeration Members

### AddBridgeOutputs

• **AddBridgeOutputs** = ``"mediaconnect:AddBridgeOutputs"``

Grants permission to add outputs to an existing bridge

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges-bridgearn-outputs.html

#### Defined in

actions/mediaconnect.ts:17

___

### AddBridgeSources

• **AddBridgeSources** = ``"mediaconnect:AddBridgeSources"``

Grants permission to add sources to an existing bridge

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges-bridgearn-sources.html

#### Defined in

actions/mediaconnect.ts:23

___

### AddFlowMediaStreams

• **AddFlowMediaStreams** = ``"mediaconnect:AddFlowMediaStreams"``

Grants permission to add media streams to any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-mediastreams.html

#### Defined in

actions/mediaconnect.ts:29

___

### AddFlowOutputs

• **AddFlowOutputs** = ``"mediaconnect:AddFlowOutputs"``

Grants permission to add outputs to any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs.html

#### Defined in

actions/mediaconnect.ts:35

___

### AddFlowSources

• **AddFlowSources** = ``"mediaconnect:AddFlowSources"``

Grants permission to add sources to any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source.html

#### Defined in

actions/mediaconnect.ts:41

___

### AddFlowVpcInterfaces

• **AddFlowVpcInterfaces** = ``"mediaconnect:AddFlowVpcInterfaces"``

Grants permission to add VPC interfaces to any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-vpcinterfaces.html

#### Defined in

actions/mediaconnect.ts:47

___

### CreateBridge

• **CreateBridge** = ``"mediaconnect:CreateBridge"``

Grants permission to create bridges

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges.html

#### Defined in

actions/mediaconnect.ts:53

___

### CreateFlow

• **CreateFlow** = ``"mediaconnect:CreateFlow"``

Grants permission to create flows

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html

#### Defined in

actions/mediaconnect.ts:59

___

### CreateGateway

• **CreateGateway** = ``"mediaconnect:CreateGateway"``

Grants permission to create gateways

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-gateways.html

#### Defined in

actions/mediaconnect.ts:65

___

### DeleteBridge

• **DeleteBridge** = ``"mediaconnect:DeleteBridge"``

Grants permission to delete bridges

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges-bridgearn.html

#### Defined in

actions/mediaconnect.ts:71

___

### DeleteFlow

• **DeleteFlow** = ``"mediaconnect:DeleteFlow"``

Grants permission to delete flows

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html

#### Defined in

actions/mediaconnect.ts:77

___

### DeleteGateway

• **DeleteGateway** = ``"mediaconnect:DeleteGateway"``

Grants permission to delete gateways

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-gateways-gatewayarn.html

#### Defined in

actions/mediaconnect.ts:83

___

### DeregisterGatewayInstance

• **DeregisterGatewayInstance** = ``"mediaconnect:DeregisterGatewayInstance"``

Grants permission to deregister gateway instance

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-gateway-instances-gatewayinstancearn.html

#### Defined in

actions/mediaconnect.ts:89

___

### DescribeBridge

• **DescribeBridge** = ``"mediaconnect:DescribeBridge"``

Grants permission to display the details of a bridge

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges-bridgearn.html

#### Defined in

actions/mediaconnect.ts:95

___

### DescribeFlow

• **DescribeFlow** = ``"mediaconnect:DescribeFlow"``

Grants permission to display the details of a flow including the flow ARN, name
, and Availability Zone, as well as details about the source, outputs, and enti
tlements

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html

#### Defined in

actions/mediaconnect.ts:103

___

### DescribeFlowSourceMetadata

• **DescribeFlowSourceMetadata** = ``"mediaconnect:DescribeFlowSourceMetadata"``

Grants permission to view information about the flow's source transport stream
and programs

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source-metadata.html

#### Defined in

actions/mediaconnect.ts:110

___

### DescribeGateway

• **DescribeGateway** = ``"mediaconnect:DescribeGateway"``

Grants permission to display the details of a gateway including the gateway ARN
, name, and CIDR blocks, as well as details about the networks

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-gateways-gatewayarn.html

#### Defined in

actions/mediaconnect.ts:117

___

### DescribeGatewayInstance

• **DescribeGatewayInstance** = ``"mediaconnect:DescribeGatewayInstance"``

Grants permission to display the details of a gateway instance

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-gateway-instances-gatewayinstancearn.html

#### Defined in

actions/mediaconnect.ts:123

___

### DescribeOffering

• **DescribeOffering** = ``"mediaconnect:DescribeOffering"``

Grants permission to display the details of an offering

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-offerings-offeringarn.html

#### Defined in

actions/mediaconnect.ts:129

___

### DescribeReservation

• **DescribeReservation** = ``"mediaconnect:DescribeReservation"``

Grants permission to display the details of a reservation

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-reservations-reservationarn.html

#### Defined in

actions/mediaconnect.ts:135

___

### DiscoverGatewayPollEndpoint

• **DiscoverGatewayPollEndpoint** = ``"mediaconnect:DiscoverGatewayPollEndpoint"``

Grants permission to discover gateway poll endpoint

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html

#### Defined in

actions/mediaconnect.ts:141

___

### GrantFlowEntitlements

• **GrantFlowEntitlements** = ``"mediaconnect:GrantFlowEntitlements"``

Grants permission to grant entitlements on any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements.html

#### Defined in

actions/mediaconnect.ts:147

___

### ListBridges

• **ListBridges** = ``"mediaconnect:ListBridges"``

Grants permission to display a list of bridges that are associated with this ac
count and an optionally specified Arn

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges.html

#### Defined in

actions/mediaconnect.ts:154

___

### ListEntitlements

• **ListEntitlements** = ``"mediaconnect:ListEntitlements"``

Grants permission to display a list of all entitlements that have been granted
to the account

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-entitlements.html

#### Defined in

actions/mediaconnect.ts:161

___

### ListFlows

• **ListFlows** = ``"mediaconnect:ListFlows"``

Grants permission to display a list of flows that are associated with this acco
unt

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html

#### Defined in

actions/mediaconnect.ts:168

___

### ListGatewayInstances

• **ListGatewayInstances** = ``"mediaconnect:ListGatewayInstances"``

Grants permission to display a list of instances that are associated with this
gateway

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-gateway-instances.html

#### Defined in

actions/mediaconnect.ts:175

___

### ListGateways

• **ListGateways** = ``"mediaconnect:ListGateways"``

Grants permission to display a list of gateways that are associated with this a
ccount

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-gateways.html

#### Defined in

actions/mediaconnect.ts:182

___

### ListOfferings

• **ListOfferings** = ``"mediaconnect:ListOfferings"``

Grants permission to display a list of all offerings that are available to the
account in the current AWS Region

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-offerings.html

#### Defined in

actions/mediaconnect.ts:189

___

### ListReservations

• **ListReservations** = ``"mediaconnect:ListReservations"``

Grants permission to display a list of all reservations that have been purchase
d by the account in the current AWS Region

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-reservations.html

#### Defined in

actions/mediaconnect.ts:196

___

### ListTagsForResource

• **ListTagsForResource** = ``"mediaconnect:ListTagsForResource"``

Grants permission to display a list of all tags associated with a resource

See https://docs.aws.amazon.com/mediaconnect/latest/api/tags-resourcearn.html

#### Defined in

actions/mediaconnect.ts:202

___

### PollGateway

• **PollGateway** = ``"mediaconnect:PollGateway"``

Grants permission to poll gateway

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html

#### Defined in

actions/mediaconnect.ts:208

___

### PurchaseOffering

• **PurchaseOffering** = ``"mediaconnect:PurchaseOffering"``

Grants permission to purchase an offering

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-offerings-offeringarn.html

#### Defined in

actions/mediaconnect.ts:214

___

### RemoveBridgeOutput

• **RemoveBridgeOutput** = ``"mediaconnect:RemoveBridgeOutput"``

Grants permission to remove an output of an existing bridge

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges-bridgearn-outputs-outputname.html

#### Defined in

actions/mediaconnect.ts:220

___

### RemoveBridgeSource

• **RemoveBridgeSource** = ``"mediaconnect:RemoveBridgeSource"``

Grants permission to remove a source of an existing bridge

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges-bridgearn-sources-sourcename.html

#### Defined in

actions/mediaconnect.ts:226

___

### RemoveFlowMediaStream

• **RemoveFlowMediaStream** = ``"mediaconnect:RemoveFlowMediaStream"``

Grants permission to remove media streams from any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-mediastreams-mediastreamname.html

#### Defined in

actions/mediaconnect.ts:232

___

### RemoveFlowOutput

• **RemoveFlowOutput** = ``"mediaconnect:RemoveFlowOutput"``

Grants permission to remove outputs from any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs-outputarn.html

#### Defined in

actions/mediaconnect.ts:238

___

### RemoveFlowSource

• **RemoveFlowSource** = ``"mediaconnect:RemoveFlowSource"``

Grants permission to remove sources from any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source-sourcearn.html

#### Defined in

actions/mediaconnect.ts:244

___

### RemoveFlowVpcInterface

• **RemoveFlowVpcInterface** = ``"mediaconnect:RemoveFlowVpcInterface"``

Grants permission to remove VPC interfaces from any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-vpcinterfaces-vpcinterfacename.html

#### Defined in

actions/mediaconnect.ts:250

___

### RevokeFlowEntitlement

• **RevokeFlowEntitlement** = ``"mediaconnect:RevokeFlowEntitlement"``

Grants permission to revoke entitlements on any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements-entitlementarn.html

#### Defined in

actions/mediaconnect.ts:256

___

### StartFlow

• **StartFlow** = ``"mediaconnect:StartFlow"``

Grants permission to start flows

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-start-flowarn.html

#### Defined in

actions/mediaconnect.ts:262

___

### StopFlow

• **StopFlow** = ``"mediaconnect:StopFlow"``

Grants permission to stop flows

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-stop-flowarn.html

#### Defined in

actions/mediaconnect.ts:268

___

### SubmitGatewayStateChange

• **SubmitGatewayStateChange** = ``"mediaconnect:SubmitGatewayStateChange"``

Grants permission to submit gateway state change

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html

#### Defined in

actions/mediaconnect.ts:274

___

### TagResource

• **TagResource** = ``"mediaconnect:TagResource"``

Grants permission to associate tags with resources

See https://docs.aws.amazon.com/mediaconnect/latest/api/tags-resourcearn.html

#### Defined in

actions/mediaconnect.ts:280

___

### UntagResource

• **UntagResource** = ``"mediaconnect:UntagResource"``

Grants permission to remove tags from resources

See https://docs.aws.amazon.com/mediaconnect/latest/api/tags-resourcearn.html

#### Defined in

actions/mediaconnect.ts:286

___

### UpdateBridge

• **UpdateBridge** = ``"mediaconnect:UpdateBridge"``

Grants permission to update bridges

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges-bridgearn.html

#### Defined in

actions/mediaconnect.ts:292

___

### UpdateBridgeOutput

• **UpdateBridgeOutput** = ``"mediaconnect:UpdateBridgeOutput"``

Grants permission to update an output of an existing bridge

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges-bridgearn-outputs-outputname.html

#### Defined in

actions/mediaconnect.ts:298

___

### UpdateBridgeSource

• **UpdateBridgeSource** = ``"mediaconnect:UpdateBridgeSource"``

Grants permission to update a source of an existing bridge

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges-bridgearn-sources-sourcename.html

#### Defined in

actions/mediaconnect.ts:304

___

### UpdateBridgeState

• **UpdateBridgeState** = ``"mediaconnect:UpdateBridgeState"``

Grants permission to update the state of an existing bridge

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-bridges-bridgearn-state.html

#### Defined in

actions/mediaconnect.ts:310

___

### UpdateFlow

• **UpdateFlow** = ``"mediaconnect:UpdateFlow"``

Grants permission to update flows

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html

#### Defined in

actions/mediaconnect.ts:316

___

### UpdateFlowEntitlement

• **UpdateFlowEntitlement** = ``"mediaconnect:UpdateFlowEntitlement"``

Grants permission to update entitlements on any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements-entitlementarn.html

#### Defined in

actions/mediaconnect.ts:322

___

### UpdateFlowMediaStream

• **UpdateFlowMediaStream** = ``"mediaconnect:UpdateFlowMediaStream"``

Grants permission to update media streams on any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-mediastreams-mediastreamname.html

#### Defined in

actions/mediaconnect.ts:328

___

### UpdateFlowOutput

• **UpdateFlowOutput** = ``"mediaconnect:UpdateFlowOutput"``

Grants permission to update outputs on any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs-outputarn.html

#### Defined in

actions/mediaconnect.ts:334

___

### UpdateFlowSource

• **UpdateFlowSource** = ``"mediaconnect:UpdateFlowSource"``

Grants permission to update the source of any flow

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source-sourcearn.html

#### Defined in

actions/mediaconnect.ts:340

___

### UpdateGatewayInstance

• **UpdateGatewayInstance** = ``"mediaconnect:UpdateGatewayInstance"``

Grants permission to update the configuration of an existing Gateway Instance

See https://docs.aws.amazon.com/mediaconnect/latest/api/v1-gateway-instances-gatewayinstancearn.html

#### Defined in

actions/mediaconnect.ts:346
