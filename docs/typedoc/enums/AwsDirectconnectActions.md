[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDirectconnectActions

# Enumeration: AwsDirectconnectActions

All IAM policy actions for AWS Direct Connect (DIRECTCONNECT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectconnect.html

2024-02-12T09:56:59.213Z

## Table of contents

### Enumeration Members

- [AcceptDirectConnectGatewayAssociationProposal](AwsDirectconnectActions.md#acceptdirectconnectgatewayassociationproposal)
- [AllocateConnectionOnInterconnect](AwsDirectconnectActions.md#allocateconnectiononinterconnect)
- [AllocateHostedConnection](AwsDirectconnectActions.md#allocatehostedconnection)
- [AllocatePrivateVirtualInterface](AwsDirectconnectActions.md#allocateprivatevirtualinterface)
- [AllocatePublicVirtualInterface](AwsDirectconnectActions.md#allocatepublicvirtualinterface)
- [AllocateTransitVirtualInterface](AwsDirectconnectActions.md#allocatetransitvirtualinterface)
- [AssociateConnectionWithLag](AwsDirectconnectActions.md#associateconnectionwithlag)
- [AssociateHostedConnection](AwsDirectconnectActions.md#associatehostedconnection)
- [AssociateMacSecKey](AwsDirectconnectActions.md#associatemacseckey)
- [AssociateVirtualInterface](AwsDirectconnectActions.md#associatevirtualinterface)
- [ConfirmConnection](AwsDirectconnectActions.md#confirmconnection)
- [ConfirmCustomerAgreement](AwsDirectconnectActions.md#confirmcustomeragreement)
- [ConfirmPrivateVirtualInterface](AwsDirectconnectActions.md#confirmprivatevirtualinterface)
- [ConfirmPublicVirtualInterface](AwsDirectconnectActions.md#confirmpublicvirtualinterface)
- [ConfirmTransitVirtualInterface](AwsDirectconnectActions.md#confirmtransitvirtualinterface)
- [CreateBGPPeer](AwsDirectconnectActions.md#createbgppeer)
- [CreateConnection](AwsDirectconnectActions.md#createconnection)
- [CreateDirectConnectGateway](AwsDirectconnectActions.md#createdirectconnectgateway)
- [CreateDirectConnectGatewayAssociation](AwsDirectconnectActions.md#createdirectconnectgatewayassociation)
- [CreateDirectConnectGatewayAssociationProposal](AwsDirectconnectActions.md#createdirectconnectgatewayassociationproposal)
- [CreateInterconnect](AwsDirectconnectActions.md#createinterconnect)
- [CreateLag](AwsDirectconnectActions.md#createlag)
- [CreatePrivateVirtualInterface](AwsDirectconnectActions.md#createprivatevirtualinterface)
- [CreatePublicVirtualInterface](AwsDirectconnectActions.md#createpublicvirtualinterface)
- [CreateTransitVirtualInterface](AwsDirectconnectActions.md#createtransitvirtualinterface)
- [DeleteBGPPeer](AwsDirectconnectActions.md#deletebgppeer)
- [DeleteConnection](AwsDirectconnectActions.md#deleteconnection)
- [DeleteDirectConnectGateway](AwsDirectconnectActions.md#deletedirectconnectgateway)
- [DeleteDirectConnectGatewayAssociation](AwsDirectconnectActions.md#deletedirectconnectgatewayassociation)
- [DeleteDirectConnectGatewayAssociationProposal](AwsDirectconnectActions.md#deletedirectconnectgatewayassociationproposal)
- [DeleteInterconnect](AwsDirectconnectActions.md#deleteinterconnect)
- [DeleteLag](AwsDirectconnectActions.md#deletelag)
- [DeleteVirtualInterface](AwsDirectconnectActions.md#deletevirtualinterface)
- [DescribeConnectionLoa](AwsDirectconnectActions.md#describeconnectionloa)
- [DescribeConnections](AwsDirectconnectActions.md#describeconnections)
- [DescribeConnectionsOnInterconnect](AwsDirectconnectActions.md#describeconnectionsoninterconnect)
- [DescribeCustomerMetadata](AwsDirectconnectActions.md#describecustomermetadata)
- [DescribeDirectConnectGatewayAssociationProposals](AwsDirectconnectActions.md#describedirectconnectgatewayassociationproposals)
- [DescribeDirectConnectGatewayAssociations](AwsDirectconnectActions.md#describedirectconnectgatewayassociations)
- [DescribeDirectConnectGatewayAttachments](AwsDirectconnectActions.md#describedirectconnectgatewayattachments)
- [DescribeDirectConnectGateways](AwsDirectconnectActions.md#describedirectconnectgateways)
- [DescribeHostedConnections](AwsDirectconnectActions.md#describehostedconnections)
- [DescribeInterconnectLoa](AwsDirectconnectActions.md#describeinterconnectloa)
- [DescribeInterconnects](AwsDirectconnectActions.md#describeinterconnects)
- [DescribeLags](AwsDirectconnectActions.md#describelags)
- [DescribeLoa](AwsDirectconnectActions.md#describeloa)
- [DescribeLocations](AwsDirectconnectActions.md#describelocations)
- [DescribeRouterConfiguration](AwsDirectconnectActions.md#describerouterconfiguration)
- [DescribeTags](AwsDirectconnectActions.md#describetags)
- [DescribeVirtualGateways](AwsDirectconnectActions.md#describevirtualgateways)
- [DescribeVirtualInterfaces](AwsDirectconnectActions.md#describevirtualinterfaces)
- [DisassociateConnectionFromLag](AwsDirectconnectActions.md#disassociateconnectionfromlag)
- [DisassociateMacSecKey](AwsDirectconnectActions.md#disassociatemacseckey)
- [ListVirtualInterfaceTestHistory](AwsDirectconnectActions.md#listvirtualinterfacetesthistory)
- [StartBgpFailoverTest](AwsDirectconnectActions.md#startbgpfailovertest)
- [StopBgpFailoverTest](AwsDirectconnectActions.md#stopbgpfailovertest)
- [TagResource](AwsDirectconnectActions.md#tagresource)
- [UntagResource](AwsDirectconnectActions.md#untagresource)
- [UpdateConnection](AwsDirectconnectActions.md#updateconnection)
- [UpdateDirectConnectGateway](AwsDirectconnectActions.md#updatedirectconnectgateway)
- [UpdateDirectConnectGatewayAssociation](AwsDirectconnectActions.md#updatedirectconnectgatewayassociation)
- [UpdateLag](AwsDirectconnectActions.md#updatelag)
- [UpdateVirtualInterfaceAttributes](AwsDirectconnectActions.md#updatevirtualinterfaceattributes)

## Enumeration Members

### AcceptDirectConnectGatewayAssociationProposal

• **AcceptDirectConnectGatewayAssociationProposal** = ``"directconnect:AcceptDirectConnectGatewayAssociationProposal"``

Grants permission to accept a proposal request to attach a virtual private gate
way to a Direct Connect gateway

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AcceptDirectConnectGatewayAssociationProposal.html

#### Defined in

actions/directconnect.ts:18

___

### AllocateConnectionOnInterconnect

• **AllocateConnectionOnInterconnect** = ``"directconnect:AllocateConnectionOnInterconnect"``

Grants permission to create a hosted connection on an interconnect

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateConnectionOnInterconnect.html

#### Defined in

actions/directconnect.ts:24

___

### AllocateHostedConnection

• **AllocateHostedConnection** = ``"directconnect:AllocateHostedConnection"``

Grants permission to create a new hosted connection between a AWS Direct Connec
t partner's network and a specific AWS Direct Connect location

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateHostedConnection.html

#### Defined in

actions/directconnect.ts:31

___

### AllocatePrivateVirtualInterface

• **AllocatePrivateVirtualInterface** = ``"directconnect:AllocatePrivateVirtualInterface"``

Grants permission to provision a private virtual interface to be owned by a dif
ferent customer

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePrivateVirtualInterface.html

#### Defined in

actions/directconnect.ts:38

___

### AllocatePublicVirtualInterface

• **AllocatePublicVirtualInterface** = ``"directconnect:AllocatePublicVirtualInterface"``

Grants permission to provision a public virtual interface to be owned by a diff
erent customer

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePublicVirtualInterface.html

#### Defined in

actions/directconnect.ts:45

___

### AllocateTransitVirtualInterface

• **AllocateTransitVirtualInterface** = ``"directconnect:AllocateTransitVirtualInterface"``

Grants permission to provision a transit virtual interface to be owned by a dif
ferent customer

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateTransitVirtualInterface.html

#### Defined in

actions/directconnect.ts:52

___

### AssociateConnectionWithLag

• **AssociateConnectionWithLag** = ``"directconnect:AssociateConnectionWithLag"``

Grants permission to associate a connection with a LAG

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateConnectionWithLag.html

#### Defined in

actions/directconnect.ts:58

___

### AssociateHostedConnection

• **AssociateHostedConnection** = ``"directconnect:AssociateHostedConnection"``

Grants permission to associate a hosted connection and its virtual interfaces w
ith a link aggregation group (LAG) or interconnect

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateHostedConnection.html

#### Defined in

actions/directconnect.ts:65

___

### AssociateMacSecKey

• **AssociateMacSecKey** = ``"directconnect:AssociateMacSecKey"``

Grants permission to associate a MAC Security (MACsec) Connection Key Name (CKN
)/ Connectivity Association Key (CAK) pair with an AWS Direct Connect dedicated
connection

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateMacSecKey.html

#### Defined in

actions/directconnect.ts:73

___

### AssociateVirtualInterface

• **AssociateVirtualInterface** = ``"directconnect:AssociateVirtualInterface"``

Grants permission to associate a virtual interface with a specified link aggreg
ation group (LAG) or connection

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateVirtualInterface.html

#### Defined in

actions/directconnect.ts:80

___

### ConfirmConnection

• **ConfirmConnection** = ``"directconnect:ConfirmConnection"``

Grants permission to confirm the creation of a hosted connection on an intercon
nect

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmConnection.html

#### Defined in

actions/directconnect.ts:87

___

### ConfirmCustomerAgreement

• **ConfirmCustomerAgreement** = ``"directconnect:ConfirmCustomerAgreement"``

Grants permission to confirm the the terms of agreement when creating the conne
ction or link aggregation group (LAG)

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmCustomerAgreement.html

#### Defined in

actions/directconnect.ts:94

___

### ConfirmPrivateVirtualInterface

• **ConfirmPrivateVirtualInterface** = ``"directconnect:ConfirmPrivateVirtualInterface"``

Grants permission to accept ownership of a private virtual interface created by
another customer

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPrivateVirtualInterface.html

#### Defined in

actions/directconnect.ts:101

___

### ConfirmPublicVirtualInterface

• **ConfirmPublicVirtualInterface** = ``"directconnect:ConfirmPublicVirtualInterface"``

Grants permission to accept ownership of a public virtual interface created by
another customer

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPublicVirtualInterface.html

#### Defined in

actions/directconnect.ts:108

___

### ConfirmTransitVirtualInterface

• **ConfirmTransitVirtualInterface** = ``"directconnect:ConfirmTransitVirtualInterface"``

Grants permission to accept ownership of a transit virtual interface created by
another customer

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmTransitVirtualInterface.html

#### Defined in

actions/directconnect.ts:115

___

### CreateBGPPeer

• **CreateBGPPeer** = ``"directconnect:CreateBGPPeer"``

Grants permission to create a BGP peer on the specified virtual interface

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateBGPPeer.html

#### Defined in

actions/directconnect.ts:121

___

### CreateConnection

• **CreateConnection** = ``"directconnect:CreateConnection"``

Grants permission to create a new connection between the customer network and a
specific AWS Direct Connect location

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateConnection.html

#### Defined in

actions/directconnect.ts:128

___

### CreateDirectConnectGateway

• **CreateDirectConnectGateway** = ``"directconnect:CreateDirectConnectGateway"``

Grants permission to create a Direct Connect gateway, which is an intermediate
object that enables you to connect a set of virtual interfaces and virtual priv
ate gateways

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGateway.html

#### Defined in

actions/directconnect.ts:136

___

### CreateDirectConnectGatewayAssociation

• **CreateDirectConnectGatewayAssociation** = ``"directconnect:CreateDirectConnectGatewayAssociation"``

Grants permission to create an association between a Direct Connect gateway and
a virtual private gateway

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociation.html

#### Defined in

actions/directconnect.ts:143

___

### CreateDirectConnectGatewayAssociationProposal

• **CreateDirectConnectGatewayAssociationProposal** = ``"directconnect:CreateDirectConnectGatewayAssociationProposal"``

Grants permission to create a proposal to associate the specified virtual priva
te gateway with the specified Direct Connect gateway

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociationProposal.html

#### Defined in

actions/directconnect.ts:150

___

### CreateInterconnect

• **CreateInterconnect** = ``"directconnect:CreateInterconnect"``

Grants permission to create a new interconnect between a AWS Direct Connect par
tner's network and a specific AWS Direct Connect location

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateInterconnect.html

#### Defined in

actions/directconnect.ts:157

___

### CreateLag

• **CreateLag** = ``"directconnect:CreateLag"``

Grants permission to create a link aggregation group (LAG) with the specified n
umber of bundled physical connections between the customer network and a specif
ic AWS Direct Connect location

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateLag.html

#### Defined in

actions/directconnect.ts:165

___

### CreatePrivateVirtualInterface

• **CreatePrivateVirtualInterface** = ``"directconnect:CreatePrivateVirtualInterface"``

Grants permission to create a new private virtual interface

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePrivateVirtualInterface.html

#### Defined in

actions/directconnect.ts:171

___

### CreatePublicVirtualInterface

• **CreatePublicVirtualInterface** = ``"directconnect:CreatePublicVirtualInterface"``

Grants permission to create a new public virtual interface

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePublicVirtualInterface.html

#### Defined in

actions/directconnect.ts:177

___

### CreateTransitVirtualInterface

• **CreateTransitVirtualInterface** = ``"directconnect:CreateTransitVirtualInterface"``

Grants permission to create a new transit virtual interface

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateTransitVirtualInterface.html

#### Defined in

actions/directconnect.ts:183

___

### DeleteBGPPeer

• **DeleteBGPPeer** = ``"directconnect:DeleteBGPPeer"``

Grants permission to delete the specified BGP peer on the specified virtual int
erface with the specified customer address and ASN

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteBGPPeer.html

#### Defined in

actions/directconnect.ts:190

___

### DeleteConnection

• **DeleteConnection** = ``"directconnect:DeleteConnection"``

Grants permission to delete the connection

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteConnection.html

#### Defined in

actions/directconnect.ts:196

___

### DeleteDirectConnectGateway

• **DeleteDirectConnectGateway** = ``"directconnect:DeleteDirectConnectGateway"``

Grants permission to delete the specified Direct Connect gateway

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGateway.html

#### Defined in

actions/directconnect.ts:202

___

### DeleteDirectConnectGatewayAssociation

• **DeleteDirectConnectGatewayAssociation** = ``"directconnect:DeleteDirectConnectGatewayAssociation"``

Grants permission to delete the association between the specified Direct Connec
t gateway and virtual private gateway

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociation.html

#### Defined in

actions/directconnect.ts:209

___

### DeleteDirectConnectGatewayAssociationProposal

• **DeleteDirectConnectGatewayAssociationProposal** = ``"directconnect:DeleteDirectConnectGatewayAssociationProposal"``

Grants permission to delete the association proposal request between the specif
ied Direct Connect gateway and virtual private gateway

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociationProposal.html

#### Defined in

actions/directconnect.ts:216

___

### DeleteInterconnect

• **DeleteInterconnect** = ``"directconnect:DeleteInterconnect"``

Grants permission to delete the specified interconnect

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteInterconnect.html

#### Defined in

actions/directconnect.ts:222

___

### DeleteLag

• **DeleteLag** = ``"directconnect:DeleteLag"``

Grants permission to delete the specified link aggregation group (LAG)

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteLag.html

#### Defined in

actions/directconnect.ts:228

___

### DeleteVirtualInterface

• **DeleteVirtualInterface** = ``"directconnect:DeleteVirtualInterface"``

Grants permission to delete a virtual interface

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteVirtualInterface.html

#### Defined in

actions/directconnect.ts:234

___

### DescribeConnectionLoa

• **DescribeConnectionLoa** = ``"directconnect:DescribeConnectionLoa"``

Grants permission to describe the LOA-CFA for a Connection

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionLoa.html

#### Defined in

actions/directconnect.ts:240

___

### DescribeConnections

• **DescribeConnections** = ``"directconnect:DescribeConnections"``

Grants permission to describe all connections in this region

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnections.html

#### Defined in

actions/directconnect.ts:246

___

### DescribeConnectionsOnInterconnect

• **DescribeConnectionsOnInterconnect** = ``"directconnect:DescribeConnectionsOnInterconnect"``

Grants permission to describe a list of connections that have been provisioned
on the given interconnect

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionsOnInterconnect.html

#### Defined in

actions/directconnect.ts:253

___

### DescribeCustomerMetadata

• **DescribeCustomerMetadata** = ``"directconnect:DescribeCustomerMetadata"``

Grants permission to view a list of customer agreements, along with their signe
d status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartn
er

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeCustomerMetadata.html

#### Defined in

actions/directconnect.ts:261

___

### DescribeDirectConnectGatewayAssociationProposals

• **DescribeDirectConnectGatewayAssociationProposals** = ``"directconnect:DescribeDirectConnectGatewayAssociationProposals"``

Grants permission to describe one or more association proposals for connection
between a virtual private gateway and a Direct Connect gateway

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociationProposals.html

#### Defined in

actions/directconnect.ts:268

___

### DescribeDirectConnectGatewayAssociations

• **DescribeDirectConnectGatewayAssociations** = ``"directconnect:DescribeDirectConnectGatewayAssociations"``

Grants permission to describe the associations between your Direct Connect gate
ways and virtual private gateways

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociations.html

#### Defined in

actions/directconnect.ts:275

___

### DescribeDirectConnectGatewayAttachments

• **DescribeDirectConnectGatewayAttachments** = ``"directconnect:DescribeDirectConnectGatewayAttachments"``

Grants permission to describe the attachments between your Direct Connect gatew
ays and virtual interfaces

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAttachments.html

#### Defined in

actions/directconnect.ts:282

___

### DescribeDirectConnectGateways

• **DescribeDirectConnectGateways** = ``"directconnect:DescribeDirectConnectGateways"``

Grants permission to describe all your Direct Connect gateways or only the spec
ified Direct Connect gateway

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGateways.html

#### Defined in

actions/directconnect.ts:289

___

### DescribeHostedConnections

• **DescribeHostedConnections** = ``"directconnect:DescribeHostedConnections"``

Grants permission to describe the hosted connections that have been provisioned
on the specified interconnect or link aggregation group (LAG)

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeHostedConnections.html

#### Defined in

actions/directconnect.ts:296

___

### DescribeInterconnectLoa

• **DescribeInterconnectLoa** = ``"directconnect:DescribeInterconnectLoa"``

Grants permission to describe the LOA-CFA for an Interconnect

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnectLoa.html

#### Defined in

actions/directconnect.ts:302

___

### DescribeInterconnects

• **DescribeInterconnects** = ``"directconnect:DescribeInterconnects"``

Grants permission to describe a list of interconnects owned by the AWS account

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnects.html

#### Defined in

actions/directconnect.ts:308

___

### DescribeLags

• **DescribeLags** = ``"directconnect:DescribeLags"``

Grants permission to describe all your link aggregation groups (LAG) or the spe
cified LAG

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLags.html

#### Defined in

actions/directconnect.ts:315

___

### DescribeLoa

• **DescribeLoa** = ``"directconnect:DescribeLoa"``

Grants permission to describe the LOA-CFA for a connection, interconnect, or li
nk aggregation group (LAG)

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLoa.html

#### Defined in

actions/directconnect.ts:322

___

### DescribeLocations

• **DescribeLocations** = ``"directconnect:DescribeLocations"``

Grants permission to describe the list of AWS Direct Connect locations in the c
urrent AWS region

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html

#### Defined in

actions/directconnect.ts:329

___

### DescribeRouterConfiguration

• **DescribeRouterConfiguration** = ``"directconnect:DescribeRouterConfiguration"``

Grants permission to describe Details about the router for a virtual interface

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeRouterConfiguration.html

#### Defined in

actions/directconnect.ts:335

___

### DescribeTags

• **DescribeTags** = ``"directconnect:DescribeTags"``

Grants permission to describe the tags associated with the specified AWS Direct
Connect resources

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeTags.html

#### Defined in

actions/directconnect.ts:342

___

### DescribeVirtualGateways

• **DescribeVirtualGateways** = ``"directconnect:DescribeVirtualGateways"``

Grants permission to describe a list of virtual private gateways owned by the A
WS account

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualGateways.html

#### Defined in

actions/directconnect.ts:349

___

### DescribeVirtualInterfaces

• **DescribeVirtualInterfaces** = ``"directconnect:DescribeVirtualInterfaces"``

Grants permission to describe all virtual interfaces for an AWS account

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualInterfaces.html

#### Defined in

actions/directconnect.ts:355

___

### DisassociateConnectionFromLag

• **DisassociateConnectionFromLag** = ``"directconnect:DisassociateConnectionFromLag"``

Grants permission to disassociate a connection from a link aggregation group (L
AG)

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateConnectionFromLag.html

#### Defined in

actions/directconnect.ts:362

___

### DisassociateMacSecKey

• **DisassociateMacSecKey** = ``"directconnect:DisassociateMacSecKey"``

Grants permission to remove the association between a MAC Security (MACsec) sec
urity key and an AWS Direct Connect dedicated connection

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateMacSecKey.html

#### Defined in

actions/directconnect.ts:369

___

### ListVirtualInterfaceTestHistory

• **ListVirtualInterfaceTestHistory** = ``"directconnect:ListVirtualInterfaceTestHistory"``

Grants permission to list the virtual interface failover test history

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html

#### Defined in

actions/directconnect.ts:375

___

### StartBgpFailoverTest

• **StartBgpFailoverTest** = ``"directconnect:StartBgpFailoverTest"``

Grants permission to start the virtual interface failover test that verifies yo
ur configuration meets your resiliency requirements by placing the BGP peering
session in the DOWN state. You can then send traffic to verify that there are n
o outages

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StartBgpFailoverTest.html

#### Defined in

actions/directconnect.ts:384

___

### StopBgpFailoverTest

• **StopBgpFailoverTest** = ``"directconnect:StopBgpFailoverTest"``

Grants permission to stop the virtual interface failover test

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html

#### Defined in

actions/directconnect.ts:390

___

### TagResource

• **TagResource** = ``"directconnect:TagResource"``

Grants permission to add the specified tags to the specified AWS Direct Connect
resource. Each resource can have a maximum of 50 tags

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_TagResource.html

#### Defined in

actions/directconnect.ts:397

___

### UntagResource

• **UntagResource** = ``"directconnect:UntagResource"``

Grants permission to remove one or more tags from the specified AWS Direct Conn
ect resource

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UntagResource.html

#### Defined in

actions/directconnect.ts:404

___

### UpdateConnection

• **UpdateConnection** = ``"directconnect:UpdateConnection"``

Grants permission to update the AWS Direct Connect dedicated connection configu
ration. You can update the following parameters for a connection: The connectio
n name or The connection's MAC Security (MACsec) encryption mode

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateConnection.html

#### Defined in

actions/directconnect.ts:412

___

### UpdateDirectConnectGateway

• **UpdateDirectConnectGateway** = ``"directconnect:UpdateDirectConnectGateway"``

Grants permission to update the name of a Direct Connect gateway

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGateway.html

#### Defined in

actions/directconnect.ts:418

___

### UpdateDirectConnectGatewayAssociation

• **UpdateDirectConnectGatewayAssociation** = ``"directconnect:UpdateDirectConnectGatewayAssociation"``

Grants permission to update the specified attributes of the Direct Connect gate
way association

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGatewayAssociation.html

#### Defined in

actions/directconnect.ts:425

___

### UpdateLag

• **UpdateLag** = ``"directconnect:UpdateLag"``

Grants permission to update the attributes of the specified link aggregation gr
oup (LAG)

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateLag.html

#### Defined in

actions/directconnect.ts:432

___

### UpdateVirtualInterfaceAttributes

• **UpdateVirtualInterfaceAttributes** = ``"directconnect:UpdateVirtualInterfaceAttributes"``

Grants permission to update the specified attributes of the specified virtual p
rivate interface

See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateVirtualInterfaceAttributes.html

#### Defined in

actions/directconnect.ts:439
