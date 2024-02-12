[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsNetworkmanagerActions

# Enumeration: AwsNetworkmanagerActions

All IAM policy actions for AWS Network Manager (NETWORKMANAGER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsnetworkmanager.html

2024-02-12T09:58:29.599Z

## Table of contents

### Enumeration Members

- [AcceptAttachment](AwsNetworkmanagerActions.md#acceptattachment)
- [AssociateConnectPeer](AwsNetworkmanagerActions.md#associateconnectpeer)
- [AssociateCustomerGateway](AwsNetworkmanagerActions.md#associatecustomergateway)
- [AssociateLink](AwsNetworkmanagerActions.md#associatelink)
- [AssociateTransitGatewayConnectPeer](AwsNetworkmanagerActions.md#associatetransitgatewayconnectpeer)
- [CreateConnectAttachment](AwsNetworkmanagerActions.md#createconnectattachment)
- [CreateConnectPeer](AwsNetworkmanagerActions.md#createconnectpeer)
- [CreateConnection](AwsNetworkmanagerActions.md#createconnection)
- [CreateCoreNetwork](AwsNetworkmanagerActions.md#createcorenetwork)
- [CreateDevice](AwsNetworkmanagerActions.md#createdevice)
- [CreateGlobalNetwork](AwsNetworkmanagerActions.md#createglobalnetwork)
- [CreateLink](AwsNetworkmanagerActions.md#createlink)
- [CreateSite](AwsNetworkmanagerActions.md#createsite)
- [CreateSiteToSiteVpnAttachment](AwsNetworkmanagerActions.md#createsitetositevpnattachment)
- [CreateTransitGatewayPeering](AwsNetworkmanagerActions.md#createtransitgatewaypeering)
- [CreateTransitGatewayRouteTableAttachment](AwsNetworkmanagerActions.md#createtransitgatewayroutetableattachment)
- [CreateVpcAttachment](AwsNetworkmanagerActions.md#createvpcattachment)
- [DeleteAttachment](AwsNetworkmanagerActions.md#deleteattachment)
- [DeleteConnectPeer](AwsNetworkmanagerActions.md#deleteconnectpeer)
- [DeleteConnection](AwsNetworkmanagerActions.md#deleteconnection)
- [DeleteCoreNetwork](AwsNetworkmanagerActions.md#deletecorenetwork)
- [DeleteCoreNetworkPolicyVersion](AwsNetworkmanagerActions.md#deletecorenetworkpolicyversion)
- [DeleteDevice](AwsNetworkmanagerActions.md#deletedevice)
- [DeleteGlobalNetwork](AwsNetworkmanagerActions.md#deleteglobalnetwork)
- [DeleteLink](AwsNetworkmanagerActions.md#deletelink)
- [DeletePeering](AwsNetworkmanagerActions.md#deletepeering)
- [DeleteResourcePolicy](AwsNetworkmanagerActions.md#deleteresourcepolicy)
- [DeleteSite](AwsNetworkmanagerActions.md#deletesite)
- [DeregisterTransitGateway](AwsNetworkmanagerActions.md#deregistertransitgateway)
- [DescribeGlobalNetworks](AwsNetworkmanagerActions.md#describeglobalnetworks)
- [DisassociateConnectPeer](AwsNetworkmanagerActions.md#disassociateconnectpeer)
- [DisassociateCustomerGateway](AwsNetworkmanagerActions.md#disassociatecustomergateway)
- [DisassociateLink](AwsNetworkmanagerActions.md#disassociatelink)
- [DisassociateTransitGatewayConnectPeer](AwsNetworkmanagerActions.md#disassociatetransitgatewayconnectpeer)
- [ExecuteCoreNetworkChangeSet](AwsNetworkmanagerActions.md#executecorenetworkchangeset)
- [GetConnectAttachment](AwsNetworkmanagerActions.md#getconnectattachment)
- [GetConnectPeer](AwsNetworkmanagerActions.md#getconnectpeer)
- [GetConnectPeerAssociations](AwsNetworkmanagerActions.md#getconnectpeerassociations)
- [GetConnections](AwsNetworkmanagerActions.md#getconnections)
- [GetCoreNetwork](AwsNetworkmanagerActions.md#getcorenetwork)
- [GetCoreNetworkChangeEvents](AwsNetworkmanagerActions.md#getcorenetworkchangeevents)
- [GetCoreNetworkChangeSet](AwsNetworkmanagerActions.md#getcorenetworkchangeset)
- [GetCoreNetworkPolicy](AwsNetworkmanagerActions.md#getcorenetworkpolicy)
- [GetCustomerGatewayAssociations](AwsNetworkmanagerActions.md#getcustomergatewayassociations)
- [GetDevices](AwsNetworkmanagerActions.md#getdevices)
- [GetLinkAssociations](AwsNetworkmanagerActions.md#getlinkassociations)
- [GetLinks](AwsNetworkmanagerActions.md#getlinks)
- [GetNetworkResourceCounts](AwsNetworkmanagerActions.md#getnetworkresourcecounts)
- [GetNetworkResourceRelationships](AwsNetworkmanagerActions.md#getnetworkresourcerelationships)
- [GetNetworkResources](AwsNetworkmanagerActions.md#getnetworkresources)
- [GetNetworkRoutes](AwsNetworkmanagerActions.md#getnetworkroutes)
- [GetNetworkTelemetry](AwsNetworkmanagerActions.md#getnetworktelemetry)
- [GetResourcePolicy](AwsNetworkmanagerActions.md#getresourcepolicy)
- [GetRouteAnalysis](AwsNetworkmanagerActions.md#getrouteanalysis)
- [GetSiteToSiteVpnAttachment](AwsNetworkmanagerActions.md#getsitetositevpnattachment)
- [GetSites](AwsNetworkmanagerActions.md#getsites)
- [GetTransitGatewayConnectPeerAssociations](AwsNetworkmanagerActions.md#gettransitgatewayconnectpeerassociations)
- [GetTransitGatewayPeering](AwsNetworkmanagerActions.md#gettransitgatewaypeering)
- [GetTransitGatewayRegistrations](AwsNetworkmanagerActions.md#gettransitgatewayregistrations)
- [GetTransitGatewayRouteTableAttachment](AwsNetworkmanagerActions.md#gettransitgatewayroutetableattachment)
- [GetVpcAttachment](AwsNetworkmanagerActions.md#getvpcattachment)
- [ListAttachments](AwsNetworkmanagerActions.md#listattachments)
- [ListConnectPeers](AwsNetworkmanagerActions.md#listconnectpeers)
- [ListCoreNetworkPolicyVersions](AwsNetworkmanagerActions.md#listcorenetworkpolicyversions)
- [ListCoreNetworks](AwsNetworkmanagerActions.md#listcorenetworks)
- [ListOrganizationServiceAccessStatus](AwsNetworkmanagerActions.md#listorganizationserviceaccessstatus)
- [ListPeerings](AwsNetworkmanagerActions.md#listpeerings)
- [ListTagsForResource](AwsNetworkmanagerActions.md#listtagsforresource)
- [PutCoreNetworkPolicy](AwsNetworkmanagerActions.md#putcorenetworkpolicy)
- [PutResourcePolicy](AwsNetworkmanagerActions.md#putresourcepolicy)
- [RegisterTransitGateway](AwsNetworkmanagerActions.md#registertransitgateway)
- [RejectAttachment](AwsNetworkmanagerActions.md#rejectattachment)
- [RestoreCoreNetworkPolicyVersion](AwsNetworkmanagerActions.md#restorecorenetworkpolicyversion)
- [StartOrganizationServiceAccessUpdate](AwsNetworkmanagerActions.md#startorganizationserviceaccessupdate)
- [StartRouteAnalysis](AwsNetworkmanagerActions.md#startrouteanalysis)
- [TagResource](AwsNetworkmanagerActions.md#tagresource)
- [UntagResource](AwsNetworkmanagerActions.md#untagresource)
- [UpdateConnection](AwsNetworkmanagerActions.md#updateconnection)
- [UpdateCoreNetwork](AwsNetworkmanagerActions.md#updatecorenetwork)
- [UpdateDevice](AwsNetworkmanagerActions.md#updatedevice)
- [UpdateGlobalNetwork](AwsNetworkmanagerActions.md#updateglobalnetwork)
- [UpdateLink](AwsNetworkmanagerActions.md#updatelink)
- [UpdateNetworkResourceMetadata](AwsNetworkmanagerActions.md#updatenetworkresourcemetadata)
- [UpdateSite](AwsNetworkmanagerActions.md#updatesite)
- [UpdateVpcAttachment](AwsNetworkmanagerActions.md#updatevpcattachment)

## Enumeration Members

### AcceptAttachment

• **AcceptAttachment** = ``"networkmanager:AcceptAttachment"``

Grants permission to accept creation of an attachment between a source and dest
ination in a core network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AcceptAttachment.html

#### Defined in

actions/networkmanager.ts:18

___

### AssociateConnectPeer

• **AssociateConnectPeer** = ``"networkmanager:AssociateConnectPeer"``

Grants permission to associate a Connect Peer

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateConnectPeer.html

#### Defined in

actions/networkmanager.ts:24

___

### AssociateCustomerGateway

• **AssociateCustomerGateway** = ``"networkmanager:AssociateCustomerGateway"``

Grants permission to associate a customer gateway to a device

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateCustomerGateway.html

#### Defined in

actions/networkmanager.ts:30

___

### AssociateLink

• **AssociateLink** = ``"networkmanager:AssociateLink"``

Grants permission to associate a link to a device

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateLink.html

#### Defined in

actions/networkmanager.ts:36

___

### AssociateTransitGatewayConnectPeer

• **AssociateTransitGatewayConnectPeer** = ``"networkmanager:AssociateTransitGatewayConnectPeer"``

Grants permission to associate a transit gateway connect peer to a device

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateTransitGatewayConnectPeer.html

#### Defined in

actions/networkmanager.ts:42

___

### CreateConnectAttachment

• **CreateConnectAttachment** = ``"networkmanager:CreateConnectAttachment"``

Grants permission to create a Connect attachment

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnectAttachment.html

#### Defined in

actions/networkmanager.ts:48

___

### CreateConnectPeer

• **CreateConnectPeer** = ``"networkmanager:CreateConnectPeer"``

Grants permission to create a Connect Peer connection

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnectPeer.html

#### Defined in

actions/networkmanager.ts:54

___

### CreateConnection

• **CreateConnection** = ``"networkmanager:CreateConnection"``

Grants permission to create a new connection

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnection.html

#### Defined in

actions/networkmanager.ts:60

___

### CreateCoreNetwork

• **CreateCoreNetwork** = ``"networkmanager:CreateCoreNetwork"``

Grants permission to create a new core network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateCoreNetwork.html

#### Defined in

actions/networkmanager.ts:66

___

### CreateDevice

• **CreateDevice** = ``"networkmanager:CreateDevice"``

Grants permission to create a new device

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateDevice.html

#### Defined in

actions/networkmanager.ts:72

___

### CreateGlobalNetwork

• **CreateGlobalNetwork** = ``"networkmanager:CreateGlobalNetwork"``

Grants permission to create a new global network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateGlobalNetwork.html

#### Defined in

actions/networkmanager.ts:78

___

### CreateLink

• **CreateLink** = ``"networkmanager:CreateLink"``

Grants permission to create a new link

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateLink.html

#### Defined in

actions/networkmanager.ts:84

___

### CreateSite

• **CreateSite** = ``"networkmanager:CreateSite"``

Grants permission to create a new site

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSite.html

#### Defined in

actions/networkmanager.ts:90

___

### CreateSiteToSiteVpnAttachment

• **CreateSiteToSiteVpnAttachment** = ``"networkmanager:CreateSiteToSiteVpnAttachment"``

Grants permission to create a site-to-site VPN attachment

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSiteToSiteVpnAttachment.html

#### Defined in

actions/networkmanager.ts:96

___

### CreateTransitGatewayPeering

• **CreateTransitGatewayPeering** = ``"networkmanager:CreateTransitGatewayPeering"``

Grants permission to create a Transit Gateway peering

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateTransitGatewayPeering.html

#### Defined in

actions/networkmanager.ts:102

___

### CreateTransitGatewayRouteTableAttachment

• **CreateTransitGatewayRouteTableAttachment** = ``"networkmanager:CreateTransitGatewayRouteTableAttachment"``

Grants permission to create a TGW RTB attachment

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateTransitGatewayRouteTableAttachment.html

#### Defined in

actions/networkmanager.ts:108

___

### CreateVpcAttachment

• **CreateVpcAttachment** = ``"networkmanager:CreateVpcAttachment"``

Grants permission to create a VPC attachment

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateVpcAttachment.html

#### Defined in

actions/networkmanager.ts:114

___

### DeleteAttachment

• **DeleteAttachment** = ``"networkmanager:DeleteAttachment"``

Grants permission to delete an attachment

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteAttachment.html

#### Defined in

actions/networkmanager.ts:120

___

### DeleteConnectPeer

• **DeleteConnectPeer** = ``"networkmanager:DeleteConnectPeer"``

Grants permission to delete a Connect Peer

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteConnectPeer.html

#### Defined in

actions/networkmanager.ts:126

___

### DeleteConnection

• **DeleteConnection** = ``"networkmanager:DeleteConnection"``

Grants permission to delete a connection

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteConnection.html

#### Defined in

actions/networkmanager.ts:132

___

### DeleteCoreNetwork

• **DeleteCoreNetwork** = ``"networkmanager:DeleteCoreNetwork"``

Grants permission to delete a core network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteCoreNetwork.html

#### Defined in

actions/networkmanager.ts:138

___

### DeleteCoreNetworkPolicyVersion

• **DeleteCoreNetworkPolicyVersion** = ``"networkmanager:DeleteCoreNetworkPolicyVersion"``

Grants permission to delete the core network policy version

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteCoreNetworkPolicyVersion.html

#### Defined in

actions/networkmanager.ts:144

___

### DeleteDevice

• **DeleteDevice** = ``"networkmanager:DeleteDevice"``

Grants permission to delete a device

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteDevice.html

#### Defined in

actions/networkmanager.ts:150

___

### DeleteGlobalNetwork

• **DeleteGlobalNetwork** = ``"networkmanager:DeleteGlobalNetwork"``

Grants permission to delete a global network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteGlobalNetwork.html

#### Defined in

actions/networkmanager.ts:156

___

### DeleteLink

• **DeleteLink** = ``"networkmanager:DeleteLink"``

Grants permission to delete a link

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteLink.html

#### Defined in

actions/networkmanager.ts:162

___

### DeletePeering

• **DeletePeering** = ``"networkmanager:DeletePeering"``

Grants permission to delete a peering

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeletePeering.html

#### Defined in

actions/networkmanager.ts:168

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"networkmanager:DeleteResourcePolicy"``

Grants permission to delete a resource

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/networkmanager.ts:174

___

### DeleteSite

• **DeleteSite** = ``"networkmanager:DeleteSite"``

Grants permission to delete a site

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteSite.html

#### Defined in

actions/networkmanager.ts:180

___

### DeregisterTransitGateway

• **DeregisterTransitGateway** = ``"networkmanager:DeregisterTransitGateway"``

Grants permission to deregister a transit gateway from a global network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeregisterTransitGateway.html

#### Defined in

actions/networkmanager.ts:186

___

### DescribeGlobalNetworks

• **DescribeGlobalNetworks** = ``"networkmanager:DescribeGlobalNetworks"``

Grants permission to describe global networks

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DescribeGlobalNetworks.html

#### Defined in

actions/networkmanager.ts:192

___

### DisassociateConnectPeer

• **DisassociateConnectPeer** = ``"networkmanager:DisassociateConnectPeer"``

Grants permission to disassociate a Connect Peer

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateConnectPeer.html

#### Defined in

actions/networkmanager.ts:198

___

### DisassociateCustomerGateway

• **DisassociateCustomerGateway** = ``"networkmanager:DisassociateCustomerGateway"``

Grants permission to disassociate a customer gateway from a device

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateCustomerGateway.html

#### Defined in

actions/networkmanager.ts:204

___

### DisassociateLink

• **DisassociateLink** = ``"networkmanager:DisassociateLink"``

Grants permission to disassociate a link from a device

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateLink.html

#### Defined in

actions/networkmanager.ts:210

___

### DisassociateTransitGatewayConnectPeer

• **DisassociateTransitGatewayConnectPeer** = ``"networkmanager:DisassociateTransitGatewayConnectPeer"``

Grants permission to disassociate a transit gateway connect peer from a device

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateTransitGatewayConnectPeer.html

#### Defined in

actions/networkmanager.ts:216

___

### ExecuteCoreNetworkChangeSet

• **ExecuteCoreNetworkChangeSet** = ``"networkmanager:ExecuteCoreNetworkChangeSet"``

Grants permission to apply changes to the core network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ExecuteCoreNetworkChangeSet.html

#### Defined in

actions/networkmanager.ts:222

___

### GetConnectAttachment

• **GetConnectAttachment** = ``"networkmanager:GetConnectAttachment"``

Grants permission to retrieve a Connect attachment

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectAttachment.html

#### Defined in

actions/networkmanager.ts:228

___

### GetConnectPeer

• **GetConnectPeer** = ``"networkmanager:GetConnectPeer"``

Grants permission to retrieve a Connect Peer

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectPeer.html

#### Defined in

actions/networkmanager.ts:234

___

### GetConnectPeerAssociations

• **GetConnectPeerAssociations** = ``"networkmanager:GetConnectPeerAssociations"``

Grants permission to describe Connect Peer associations

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectPeerAssociations.html

#### Defined in

actions/networkmanager.ts:240

___

### GetConnections

• **GetConnections** = ``"networkmanager:GetConnections"``

Grants permission to describe connections

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnections.html

#### Defined in

actions/networkmanager.ts:246

___

### GetCoreNetwork

• **GetCoreNetwork** = ``"networkmanager:GetCoreNetwork"``

Grants permission to retrieve a core network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetwork.html

#### Defined in

actions/networkmanager.ts:252

___

### GetCoreNetworkChangeEvents

• **GetCoreNetworkChangeEvents** = ``"networkmanager:GetCoreNetworkChangeEvents"``

Grants permission to retrieve a list of core network change events

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetworkChangeEvents.html

#### Defined in

actions/networkmanager.ts:258

___

### GetCoreNetworkChangeSet

• **GetCoreNetworkChangeSet** = ``"networkmanager:GetCoreNetworkChangeSet"``

Grants permission to retrieve a list of core network change sets

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetworkChangeSet.html

#### Defined in

actions/networkmanager.ts:264

___

### GetCoreNetworkPolicy

• **GetCoreNetworkPolicy** = ``"networkmanager:GetCoreNetworkPolicy"``

Grants permission to retrieve core network policy

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetworkPolicy.html

#### Defined in

actions/networkmanager.ts:270

___

### GetCustomerGatewayAssociations

• **GetCustomerGatewayAssociations** = ``"networkmanager:GetCustomerGatewayAssociations"``

Grants permission to describe customer gateway associations

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCustomerGatewayAssociations.html

#### Defined in

actions/networkmanager.ts:276

___

### GetDevices

• **GetDevices** = ``"networkmanager:GetDevices"``

Grants permission to describe devices

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetDevices.html

#### Defined in

actions/networkmanager.ts:282

___

### GetLinkAssociations

• **GetLinkAssociations** = ``"networkmanager:GetLinkAssociations"``

Grants permission to describe link associations

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinkAssociations.html

#### Defined in

actions/networkmanager.ts:288

___

### GetLinks

• **GetLinks** = ``"networkmanager:GetLinks"``

Grants permission to describe links

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinks.html

#### Defined in

actions/networkmanager.ts:294

___

### GetNetworkResourceCounts

• **GetNetworkResourceCounts** = ``"networkmanager:GetNetworkResourceCounts"``

Grants permission to return the number of resources for a global network groupe
d by type

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResourceCounts.html

#### Defined in

actions/networkmanager.ts:301

___

### GetNetworkResourceRelationships

• **GetNetworkResourceRelationships** = ``"networkmanager:GetNetworkResourceRelationships"``

Grants permission to retrieve related resources for a resource within the globa
l network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResourceRelationships.html

#### Defined in

actions/networkmanager.ts:308

___

### GetNetworkResources

• **GetNetworkResources** = ``"networkmanager:GetNetworkResources"``

Grants permission to retrieve a global network resource

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResources.html

#### Defined in

actions/networkmanager.ts:314

___

### GetNetworkRoutes

• **GetNetworkRoutes** = ``"networkmanager:GetNetworkRoutes"``

Grants permission to retrieve routes for a route table within the global networ
k

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkRoutes.html

#### Defined in

actions/networkmanager.ts:321

___

### GetNetworkTelemetry

• **GetNetworkTelemetry** = ``"networkmanager:GetNetworkTelemetry"``

Grants permission to retrieve network telemetry objects for the global network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkTelemetry.html

#### Defined in

actions/networkmanager.ts:327

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"networkmanager:GetResourcePolicy"``

Grants permission to retrieve a resource policy

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetResourcePolicy.html

#### Defined in

actions/networkmanager.ts:333

___

### GetRouteAnalysis

• **GetRouteAnalysis** = ``"networkmanager:GetRouteAnalysis"``

Grants permission to retrieve a route analysis configuration and result

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetRouteAnalysis.html

#### Defined in

actions/networkmanager.ts:339

___

### GetSiteToSiteVpnAttachment

• **GetSiteToSiteVpnAttachment** = ``"networkmanager:GetSiteToSiteVpnAttachment"``

Grants permission to retrieve a site-to-site VPN attachment

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSiteToSiteVpnAttachment.html

#### Defined in

actions/networkmanager.ts:345

___

### GetSites

• **GetSites** = ``"networkmanager:GetSites"``

Grants permission to describe global networks

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSites.html

#### Defined in

actions/networkmanager.ts:351

___

### GetTransitGatewayConnectPeerAssociations

• **GetTransitGatewayConnectPeerAssociations** = ``"networkmanager:GetTransitGatewayConnectPeerAssociations"``

Grants permission to describe transit gateway connect peer associations

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayConnectPeerAssociations.html

#### Defined in

actions/networkmanager.ts:357

___

### GetTransitGatewayPeering

• **GetTransitGatewayPeering** = ``"networkmanager:GetTransitGatewayPeering"``

Grants permission to retrieve a Transit Gateway peering

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayPeering.html

#### Defined in

actions/networkmanager.ts:363

___

### GetTransitGatewayRegistrations

• **GetTransitGatewayRegistrations** = ``"networkmanager:GetTransitGatewayRegistrations"``

Grants permission to describe transit gateway registrations

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayRegistrations.html

#### Defined in

actions/networkmanager.ts:369

___

### GetTransitGatewayRouteTableAttachment

• **GetTransitGatewayRouteTableAttachment** = ``"networkmanager:GetTransitGatewayRouteTableAttachment"``

Grants permission to retrieve a TGW RTB attachment

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayRouteTableAttachment.html

#### Defined in

actions/networkmanager.ts:375

___

### GetVpcAttachment

• **GetVpcAttachment** = ``"networkmanager:GetVpcAttachment"``

Grants permission to retrieve a VPC attachment

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetVpcAttachment.html

#### Defined in

actions/networkmanager.ts:381

___

### ListAttachments

• **ListAttachments** = ``"networkmanager:ListAttachments"``

Grants permission to describe attachments

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListAttachments.html

#### Defined in

actions/networkmanager.ts:387

___

### ListConnectPeers

• **ListConnectPeers** = ``"networkmanager:ListConnectPeers"``

Grants permission to describe Connect Peers

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListConnectPeers.html

#### Defined in

actions/networkmanager.ts:393

___

### ListCoreNetworkPolicyVersions

• **ListCoreNetworkPolicyVersions** = ``"networkmanager:ListCoreNetworkPolicyVersions"``

Grants permission to list core network policy versions

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListCoreNetworkPolicyVersions.html

#### Defined in

actions/networkmanager.ts:399

___

### ListCoreNetworks

• **ListCoreNetworks** = ``"networkmanager:ListCoreNetworks"``

Grants permission to list core networks

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListCoreNetworks.html

#### Defined in

actions/networkmanager.ts:405

___

### ListOrganizationServiceAccessStatus

• **ListOrganizationServiceAccessStatus** = ``"networkmanager:ListOrganizationServiceAccessStatus"``

Grants permission to list organization service access status

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListOrganizationServiceAccessStatus.html

#### Defined in

actions/networkmanager.ts:411

___

### ListPeerings

• **ListPeerings** = ``"networkmanager:ListPeerings"``

Grants permission to describe peerings

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListPeerings.html

#### Defined in

actions/networkmanager.ts:417

___

### ListTagsForResource

• **ListTagsForResource** = ``"networkmanager:ListTagsForResource"``

Grants permission to list tags for a Network Manager resource

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/networkmanager.ts:423

___

### PutCoreNetworkPolicy

• **PutCoreNetworkPolicy** = ``"networkmanager:PutCoreNetworkPolicy"``

Grants permission to create a core network policy

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_PutCoreNetworkPolicy.html

#### Defined in

actions/networkmanager.ts:429

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"networkmanager:PutResourcePolicy"``

Grants permission to create or update a resource policy

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/networkmanager.ts:435

___

### RegisterTransitGateway

• **RegisterTransitGateway** = ``"networkmanager:RegisterTransitGateway"``

Grants permission to register a transit gateway to a global network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RegisterTransitGateway.html

#### Defined in

actions/networkmanager.ts:441

___

### RejectAttachment

• **RejectAttachment** = ``"networkmanager:RejectAttachment"``

Grants permission to reject attachment request

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RejectAttachment.html

#### Defined in

actions/networkmanager.ts:447

___

### RestoreCoreNetworkPolicyVersion

• **RestoreCoreNetworkPolicyVersion** = ``"networkmanager:RestoreCoreNetworkPolicyVersion"``

Grants permission to restore the core network policy to a previous version

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RestoreCoreNetworkPolicyVersion.html

#### Defined in

actions/networkmanager.ts:453

___

### StartOrganizationServiceAccessUpdate

• **StartOrganizationServiceAccessUpdate** = ``"networkmanager:StartOrganizationServiceAccessUpdate"``

Grants permission to start organization service access update

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_StartOrganizationServiceAccessUpdate.html

#### Defined in

actions/networkmanager.ts:459

___

### StartRouteAnalysis

• **StartRouteAnalysis** = ``"networkmanager:StartRouteAnalysis"``

Grants permission to start a route analysis and stores analysis configuration

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_StartRouteAnalysis.html

#### Defined in

actions/networkmanager.ts:465

___

### TagResource

• **TagResource** = ``"networkmanager:TagResource"``

Grants permission to tag a Network Manager resource

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_TagResource.html

#### Defined in

actions/networkmanager.ts:471

___

### UntagResource

• **UntagResource** = ``"networkmanager:UntagResource"``

Grants permission to untag a Network Manager resource

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UntagResource.html

#### Defined in

actions/networkmanager.ts:477

___

### UpdateConnection

• **UpdateConnection** = ``"networkmanager:UpdateConnection"``

Grants permission to update a connection

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateConnection.html

#### Defined in

actions/networkmanager.ts:483

___

### UpdateCoreNetwork

• **UpdateCoreNetwork** = ``"networkmanager:UpdateCoreNetwork"``

Grants permission to update a core network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateCoreNetwork.html

#### Defined in

actions/networkmanager.ts:489

___

### UpdateDevice

• **UpdateDevice** = ``"networkmanager:UpdateDevice"``

Grants permission to update a device

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateDevice.html

#### Defined in

actions/networkmanager.ts:495

___

### UpdateGlobalNetwork

• **UpdateGlobalNetwork** = ``"networkmanager:UpdateGlobalNetwork"``

Grants permission to update a global network

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateGlobalNetwork.html

#### Defined in

actions/networkmanager.ts:501

___

### UpdateLink

• **UpdateLink** = ``"networkmanager:UpdateLink"``

Grants permission to update a link

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateLink.html

#### Defined in

actions/networkmanager.ts:507

___

### UpdateNetworkResourceMetadata

• **UpdateNetworkResourceMetadata** = ``"networkmanager:UpdateNetworkResourceMetadata"``

Grants permission to add or update metadata key/value pairs on network resource

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateNetworkResourceMetadata.html

#### Defined in

actions/networkmanager.ts:513

___

### UpdateSite

• **UpdateSite** = ``"networkmanager:UpdateSite"``

Grants permission to update a site

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateSite.html

#### Defined in

actions/networkmanager.ts:519

___

### UpdateVpcAttachment

• **UpdateVpcAttachment** = ``"networkmanager:UpdateVpcAttachment"``

Grants permission to update a VPC attachment

See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateVpcAttachment.html

#### Defined in

actions/networkmanager.ts:525
