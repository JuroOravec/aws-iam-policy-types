// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Direct Connect (DIRECTCONNECT)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectconnect.html
 *
 * 2025-02-24T21:47:37.892Z
 */
export enum AwsDirectconnectActions {
  /**
   * Grants permission to accept a proposal request to attach a virtual private gate
   * way to a Direct Connect gateway
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AcceptDirectConnectGatewayAssociationProposal.html
   */
  AcceptDirectConnectGatewayAssociationProposal = 'directconnect:AcceptDirectConnectGatewayAssociationProposal',
  /**
   * Grants permission to create a hosted connection on an interconnect
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateConnectionOnInterconnect.html
   */
  AllocateConnectionOnInterconnect = 'directconnect:AllocateConnectionOnInterconnect',
  /**
   * Grants permission to create a new hosted connection between a AWS Direct Connec
   * t partner's network and a specific AWS Direct Connect location
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateHostedConnection.html
   */
  AllocateHostedConnection = 'directconnect:AllocateHostedConnection',
  /**
   * Grants permission to provision a private virtual interface to be owned by a dif
   * ferent customer
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePrivateVirtualInterface.html
   */
  AllocatePrivateVirtualInterface = 'directconnect:AllocatePrivateVirtualInterface',
  /**
   * Grants permission to provision a public virtual interface to be owned by a diff
   * erent customer
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePublicVirtualInterface.html
   */
  AllocatePublicVirtualInterface = 'directconnect:AllocatePublicVirtualInterface',
  /**
   * Grants permission to provision a transit virtual interface to be owned by a dif
   * ferent customer
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateTransitVirtualInterface.html
   */
  AllocateTransitVirtualInterface = 'directconnect:AllocateTransitVirtualInterface',
  /**
   * Grants permission to associate a connection with a LAG
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateConnectionWithLag.html
   */
  AssociateConnectionWithLag = 'directconnect:AssociateConnectionWithLag',
  /**
   * Grants permission to associate a hosted connection and its virtual interfaces w
   * ith a link aggregation group (LAG) or interconnect
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateHostedConnection.html
   */
  AssociateHostedConnection = 'directconnect:AssociateHostedConnection',
  /**
   * Grants permission to associate a MAC Security (MACsec) Connection Key Name (CKN
   * )/ Connectivity Association Key (CAK) pair with an AWS Direct Connect dedicated
   * connection
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateMacSecKey.html
   */
  AssociateMacSecKey = 'directconnect:AssociateMacSecKey',
  /**
   * Grants permission to associate a virtual interface with a specified link aggreg
   * ation group (LAG) or connection
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateVirtualInterface.html
   */
  AssociateVirtualInterface = 'directconnect:AssociateVirtualInterface',
  /**
   * Grants permission to confirm the creation of a hosted connection on an intercon
   * nect
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmConnection.html
   */
  ConfirmConnection = 'directconnect:ConfirmConnection',
  /**
   * Grants permission to confirm the the terms of agreement when creating the conne
   * ction or link aggregation group (LAG)
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmCustomerAgreement.html
   */
  ConfirmCustomerAgreement = 'directconnect:ConfirmCustomerAgreement',
  /**
   * Grants permission to accept ownership of a private virtual interface created by
   * another customer
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPrivateVirtualInterface.html
   */
  ConfirmPrivateVirtualInterface = 'directconnect:ConfirmPrivateVirtualInterface',
  /**
   * Grants permission to accept ownership of a public virtual interface created by
   * another customer
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPublicVirtualInterface.html
   */
  ConfirmPublicVirtualInterface = 'directconnect:ConfirmPublicVirtualInterface',
  /**
   * Grants permission to accept ownership of a transit virtual interface created by
   * another customer
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmTransitVirtualInterface.html
   */
  ConfirmTransitVirtualInterface = 'directconnect:ConfirmTransitVirtualInterface',
  /**
   * Grants permission to create a BGP peer on the specified virtual interface
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateBGPPeer.html
   */
  CreateBGPPeer = 'directconnect:CreateBGPPeer',
  /**
   * Grants permission to create a new connection between the customer network and a
   * specific AWS Direct Connect location
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateConnection.html
   */
  CreateConnection = 'directconnect:CreateConnection',
  /**
   * Grants permission to create a Direct Connect gateway, which is an intermediate
   * object that enables you to connect a set of virtual interfaces and virtual priv
   * ate gateways
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGateway.html
   */
  CreateDirectConnectGateway = 'directconnect:CreateDirectConnectGateway',
  /**
   * Grants permission to create an association between a Direct Connect gateway and
   * a virtual private gateway
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociation.html
   */
  CreateDirectConnectGatewayAssociation = 'directconnect:CreateDirectConnectGatewayAssociation',
  /**
   * Grants permission to create a proposal to associate the specified virtual priva
   * te gateway with the specified Direct Connect gateway
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociationProposal.html
   */
  CreateDirectConnectGatewayAssociationProposal = 'directconnect:CreateDirectConnectGatewayAssociationProposal',
  /**
   * Grants permission to create a new interconnect between a AWS Direct Connect par
   * tner's network and a specific AWS Direct Connect location
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateInterconnect.html
   */
  CreateInterconnect = 'directconnect:CreateInterconnect',
  /**
   * Grants permission to create a link aggregation group (LAG) with the specified n
   * umber of bundled physical connections between the customer network and a specif
   * ic AWS Direct Connect location
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateLag.html
   */
  CreateLag = 'directconnect:CreateLag',
  /**
   * Grants permission to create a new private virtual interface
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePrivateVirtualInterface.html
   */
  CreatePrivateVirtualInterface = 'directconnect:CreatePrivateVirtualInterface',
  /**
   * Grants permission to create a new public virtual interface
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePublicVirtualInterface.html
   */
  CreatePublicVirtualInterface = 'directconnect:CreatePublicVirtualInterface',
  /**
   * Grants permission to create a new transit virtual interface
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateTransitVirtualInterface.html
   */
  CreateTransitVirtualInterface = 'directconnect:CreateTransitVirtualInterface',
  /**
   * Grants permission to delete the specified BGP peer on the specified virtual int
   * erface with the specified customer address and ASN
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteBGPPeer.html
   */
  DeleteBGPPeer = 'directconnect:DeleteBGPPeer',
  /**
   * Grants permission to delete the connection
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteConnection.html
   */
  DeleteConnection = 'directconnect:DeleteConnection',
  /**
   * Grants permission to delete the specified Direct Connect gateway
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGateway.html
   */
  DeleteDirectConnectGateway = 'directconnect:DeleteDirectConnectGateway',
  /**
   * Grants permission to delete the association between the specified Direct Connec
   * t gateway and virtual private gateway
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociation.html
   */
  DeleteDirectConnectGatewayAssociation = 'directconnect:DeleteDirectConnectGatewayAssociation',
  /**
   * Grants permission to delete the association proposal request between the specif
   * ied Direct Connect gateway and virtual private gateway
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociationProposal.html
   */
  DeleteDirectConnectGatewayAssociationProposal = 'directconnect:DeleteDirectConnectGatewayAssociationProposal',
  /**
   * Grants permission to delete the specified interconnect
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteInterconnect.html
   */
  DeleteInterconnect = 'directconnect:DeleteInterconnect',
  /**
   * Grants permission to delete the specified link aggregation group (LAG)
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteLag.html
   */
  DeleteLag = 'directconnect:DeleteLag',
  /**
   * Grants permission to delete a virtual interface
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteVirtualInterface.html
   */
  DeleteVirtualInterface = 'directconnect:DeleteVirtualInterface',
  /**
   * Grants permission to describe the LOA-CFA for a Connection
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionLoa.html
   */
  DescribeConnectionLoa = 'directconnect:DescribeConnectionLoa',
  /**
   * Grants permission to describe all connections in this region
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnections.html
   */
  DescribeConnections = 'directconnect:DescribeConnections',
  /**
   * Grants permission to describe a list of connections that have been provisioned
   * on the given interconnect
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionsOnInterconnect.html
   */
  DescribeConnectionsOnInterconnect = 'directconnect:DescribeConnectionsOnInterconnect',
  /**
   * Grants permission to view a list of customer agreements, along with their signe
   * d status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartn
   * er
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeCustomerMetadata.html
   */
  DescribeCustomerMetadata = 'directconnect:DescribeCustomerMetadata',
  /**
   * Grants permission to describe one or more association proposals for connection
   * between a virtual private gateway and a Direct Connect gateway
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociationProposals.html
   */
  DescribeDirectConnectGatewayAssociationProposals = 'directconnect:DescribeDirectConnectGatewayAssociationProposals',
  /**
   * Grants permission to describe the associations between your Direct Connect gate
   * ways and virtual private gateways
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociations.html
   */
  DescribeDirectConnectGatewayAssociations = 'directconnect:DescribeDirectConnectGatewayAssociations',
  /**
   * Grants permission to describe the attachments between your Direct Connect gatew
   * ays and virtual interfaces
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAttachments.html
   */
  DescribeDirectConnectGatewayAttachments = 'directconnect:DescribeDirectConnectGatewayAttachments',
  /**
   * Grants permission to describe all your Direct Connect gateways or only the spec
   * ified Direct Connect gateway
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGateways.html
   */
  DescribeDirectConnectGateways = 'directconnect:DescribeDirectConnectGateways',
  /**
   * Grants permission to describe the hosted connections that have been provisioned
   * on the specified interconnect or link aggregation group (LAG)
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeHostedConnections.html
   */
  DescribeHostedConnections = 'directconnect:DescribeHostedConnections',
  /**
   * Grants permission to describe the LOA-CFA for an Interconnect
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnectLoa.html
   */
  DescribeInterconnectLoa = 'directconnect:DescribeInterconnectLoa',
  /**
   * Grants permission to describe a list of interconnects owned by the AWS account
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnects.html
   */
  DescribeInterconnects = 'directconnect:DescribeInterconnects',
  /**
   * Grants permission to describe all your link aggregation groups (LAG) or the spe
   * cified LAG
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLags.html
   */
  DescribeLags = 'directconnect:DescribeLags',
  /**
   * Grants permission to describe the LOA-CFA for a connection, interconnect, or li
   * nk aggregation group (LAG)
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLoa.html
   */
  DescribeLoa = 'directconnect:DescribeLoa',
  /**
   * Grants permission to describe the list of AWS Direct Connect locations in the c
   * urrent AWS region
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html
   */
  DescribeLocations = 'directconnect:DescribeLocations',
  /**
   * Grants permission to describe Details about the router for a virtual interface
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeRouterConfiguration.html
   */
  DescribeRouterConfiguration = 'directconnect:DescribeRouterConfiguration',
  /**
   * Grants permission to describe the tags associated with the specified AWS Direct
   * Connect resources
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeTags.html
   */
  DescribeTags = 'directconnect:DescribeTags',
  /**
   * Grants permission to describe a list of virtual private gateways owned by the A
   * WS account
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualGateways.html
   */
  DescribeVirtualGateways = 'directconnect:DescribeVirtualGateways',
  /**
   * Grants permission to describe all virtual interfaces for an AWS account
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualInterfaces.html
   */
  DescribeVirtualInterfaces = 'directconnect:DescribeVirtualInterfaces',
  /**
   * Grants permission to disassociate a connection from a link aggregation group (L
   * AG)
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateConnectionFromLag.html
   */
  DisassociateConnectionFromLag = 'directconnect:DisassociateConnectionFromLag',
  /**
   * Grants permission to remove the association between a MAC Security (MACsec) sec
   * urity key and an AWS Direct Connect dedicated connection
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateMacSecKey.html
   */
  DisassociateMacSecKey = 'directconnect:DisassociateMacSecKey',
  /**
   * Grants permission to list the virtual interface failover test history
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html
   */
  ListVirtualInterfaceTestHistory = 'directconnect:ListVirtualInterfaceTestHistory',
  /**
   * Grants permission to start the virtual interface failover test that verifies yo
   * ur configuration meets your resiliency requirements by placing the BGP peering
   * session in the DOWN state. You can then send traffic to verify that there are n
   * o outages
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StartBgpFailoverTest.html
   */
  StartBgpFailoverTest = 'directconnect:StartBgpFailoverTest',
  /**
   * Grants permission to stop the virtual interface failover test
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html
   */
  StopBgpFailoverTest = 'directconnect:StopBgpFailoverTest',
  /**
   * Grants permission to add the specified tags to the specified AWS Direct Connect
   * resource. Each resource can have a maximum of 50 tags
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_TagResource.html
   */
  TagResource = 'directconnect:TagResource',
  /**
   * Grants permission to remove one or more tags from the specified AWS Direct Conn
   * ect resource
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'directconnect:UntagResource',
  /**
   * Grants permission to update the AWS Direct Connect dedicated connection configu
   * ration. You can update the following parameters for a connection: The connectio
   * n name or The connection's MAC Security (MACsec) encryption mode
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateConnection.html
   */
  UpdateConnection = 'directconnect:UpdateConnection',
  /**
   * Grants permission to update the name of a Direct Connect gateway
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGateway.html
   */
  UpdateDirectConnectGateway = 'directconnect:UpdateDirectConnectGateway',
  /**
   * Grants permission to update the specified attributes of the Direct Connect gate
   * way association
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGatewayAssociation.html
   */
  UpdateDirectConnectGatewayAssociation = 'directconnect:UpdateDirectConnectGatewayAssociation',
  /**
   * Grants permission to update the attributes of the specified link aggregation gr
   * oup (LAG)
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateLag.html
   */
  UpdateLag = 'directconnect:UpdateLag',
  /**
   * Grants permission to update the specified attributes of the specified virtual p
   * rivate interface
   *
   * See https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateVirtualInterfaceAttributes.html
   */
  UpdateVirtualInterfaceAttributes = 'directconnect:UpdateVirtualInterfaceAttributes',
}
