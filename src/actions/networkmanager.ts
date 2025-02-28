// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Network Manager (NETWORKMANAGER)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsnetworkmanager.html
 *
 * 2025-02-24T21:49:02.579Z
 */
export enum AwsNetworkmanagerActions {
  /**
   * Grants permission to accept creation of an attachment between a source and dest
   * ination in a core network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AcceptAttachment.html
   */
  AcceptAttachment = 'networkmanager:AcceptAttachment',
  /**
   * Grants permission to associate a Connect Peer
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateConnectPeer.html
   */
  AssociateConnectPeer = 'networkmanager:AssociateConnectPeer',
  /**
   * Grants permission to associate a customer gateway to a device
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateCustomerGateway.html
   */
  AssociateCustomerGateway = 'networkmanager:AssociateCustomerGateway',
  /**
   * Grants permission to associate a link to a device
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateLink.html
   */
  AssociateLink = 'networkmanager:AssociateLink',
  /**
   * Grants permission to associate a transit gateway connect peer to a device
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateTransitGatewayConnectPeer.html
   */
  AssociateTransitGatewayConnectPeer = 'networkmanager:AssociateTransitGatewayConnectPeer',
  /**
   * Grants permission to create a Connect attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnectAttachment.html
   */
  CreateConnectAttachment = 'networkmanager:CreateConnectAttachment',
  /**
   * Grants permission to create a Connect Peer connection
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnectPeer.html
   */
  CreateConnectPeer = 'networkmanager:CreateConnectPeer',
  /**
   * Grants permission to create a new connection
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnection.html
   */
  CreateConnection = 'networkmanager:CreateConnection',
  /**
   * Grants permission to create a new core network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateCoreNetwork.html
   */
  CreateCoreNetwork = 'networkmanager:CreateCoreNetwork',
  /**
   * Grants permission to create a new device
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateDevice.html
   */
  CreateDevice = 'networkmanager:CreateDevice',
  /**
   * Grants permission to create a Direct Connect gateway attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateDirectConnectGatewayAttachment.html
   */
  CreateDirectConnectGatewayAttachment = 'networkmanager:CreateDirectConnectGatewayAttachment',
  /**
   * Grants permission to create a new global network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateGlobalNetwork.html
   */
  CreateGlobalNetwork = 'networkmanager:CreateGlobalNetwork',
  /**
   * Grants permission to create a new link
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateLink.html
   */
  CreateLink = 'networkmanager:CreateLink',
  /**
   * Grants permission to create a new site
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSite.html
   */
  CreateSite = 'networkmanager:CreateSite',
  /**
   * Grants permission to create a site-to-site VPN attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSiteToSiteVpnAttachment.html
   */
  CreateSiteToSiteVpnAttachment = 'networkmanager:CreateSiteToSiteVpnAttachment',
  /**
   * Grants permission to create a Transit Gateway peering
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateTransitGatewayPeering.html
   */
  CreateTransitGatewayPeering = 'networkmanager:CreateTransitGatewayPeering',
  /**
   * Grants permission to create a TGW RTB attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateTransitGatewayRouteTableAttachment.html
   */
  CreateTransitGatewayRouteTableAttachment = 'networkmanager:CreateTransitGatewayRouteTableAttachment',
  /**
   * Grants permission to create a VPC attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateVpcAttachment.html
   */
  CreateVpcAttachment = 'networkmanager:CreateVpcAttachment',
  /**
   * Grants permission to delete an attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteAttachment.html
   */
  DeleteAttachment = 'networkmanager:DeleteAttachment',
  /**
   * Grants permission to delete a Connect Peer
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteConnectPeer.html
   */
  DeleteConnectPeer = 'networkmanager:DeleteConnectPeer',
  /**
   * Grants permission to delete a connection
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteConnection.html
   */
  DeleteConnection = 'networkmanager:DeleteConnection',
  /**
   * Grants permission to delete a core network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteCoreNetwork.html
   */
  DeleteCoreNetwork = 'networkmanager:DeleteCoreNetwork',
  /**
   * Grants permission to delete the core network policy version
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteCoreNetworkPolicyVersion.html
   */
  DeleteCoreNetworkPolicyVersion = 'networkmanager:DeleteCoreNetworkPolicyVersion',
  /**
   * Grants permission to delete a device
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteDevice.html
   */
  DeleteDevice = 'networkmanager:DeleteDevice',
  /**
   * Grants permission to delete a global network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteGlobalNetwork.html
   */
  DeleteGlobalNetwork = 'networkmanager:DeleteGlobalNetwork',
  /**
   * Grants permission to delete a link
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteLink.html
   */
  DeleteLink = 'networkmanager:DeleteLink',
  /**
   * Grants permission to delete a peering
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeletePeering.html
   */
  DeletePeering = 'networkmanager:DeletePeering',
  /**
   * Grants permission to delete a resource
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteResourcePolicy.html
   */
  DeleteResourcePolicy = 'networkmanager:DeleteResourcePolicy',
  /**
   * Grants permission to delete a site
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteSite.html
   */
  DeleteSite = 'networkmanager:DeleteSite',
  /**
   * Grants permission to deregister a transit gateway from a global network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeregisterTransitGateway.html
   */
  DeregisterTransitGateway = 'networkmanager:DeregisterTransitGateway',
  /**
   * Grants permission to describe global networks
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DescribeGlobalNetworks.html
   */
  DescribeGlobalNetworks = 'networkmanager:DescribeGlobalNetworks',
  /**
   * Grants permission to disassociate a Connect Peer
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateConnectPeer.html
   */
  DisassociateConnectPeer = 'networkmanager:DisassociateConnectPeer',
  /**
   * Grants permission to disassociate a customer gateway from a device
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateCustomerGateway.html
   */
  DisassociateCustomerGateway = 'networkmanager:DisassociateCustomerGateway',
  /**
   * Grants permission to disassociate a link from a device
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateLink.html
   */
  DisassociateLink = 'networkmanager:DisassociateLink',
  /**
   * Grants permission to disassociate a transit gateway connect peer from a device
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateTransitGatewayConnectPeer.html
   */
  DisassociateTransitGatewayConnectPeer = 'networkmanager:DisassociateTransitGatewayConnectPeer',
  /**
   * Grants permission to apply changes to the core network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ExecuteCoreNetworkChangeSet.html
   */
  ExecuteCoreNetworkChangeSet = 'networkmanager:ExecuteCoreNetworkChangeSet',
  /**
   * Grants permission to retrieve a Connect attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectAttachment.html
   */
  GetConnectAttachment = 'networkmanager:GetConnectAttachment',
  /**
   * Grants permission to retrieve a Connect Peer
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectPeer.html
   */
  GetConnectPeer = 'networkmanager:GetConnectPeer',
  /**
   * Grants permission to describe Connect Peer associations
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectPeerAssociations.html
   */
  GetConnectPeerAssociations = 'networkmanager:GetConnectPeerAssociations',
  /**
   * Grants permission to describe connections
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnections.html
   */
  GetConnections = 'networkmanager:GetConnections',
  /**
   * Grants permission to retrieve a core network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetwork.html
   */
  GetCoreNetwork = 'networkmanager:GetCoreNetwork',
  /**
   * Grants permission to retrieve a list of core network change events
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetworkChangeEvents.html
   */
  GetCoreNetworkChangeEvents = 'networkmanager:GetCoreNetworkChangeEvents',
  /**
   * Grants permission to retrieve a list of core network change sets
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetworkChangeSet.html
   */
  GetCoreNetworkChangeSet = 'networkmanager:GetCoreNetworkChangeSet',
  /**
   * Grants permission to retrieve core network policy
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetworkPolicy.html
   */
  GetCoreNetworkPolicy = 'networkmanager:GetCoreNetworkPolicy',
  /**
   * Grants permission to describe customer gateway associations
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCustomerGatewayAssociations.html
   */
  GetCustomerGatewayAssociations = 'networkmanager:GetCustomerGatewayAssociations',
  /**
   * Grants permission to describe devices
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetDevices.html
   */
  GetDevices = 'networkmanager:GetDevices',
  /**
   * Grants permission to retrieve a Direct Connect gateway attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetDirectConnectGatewayAttachment.html
   */
  GetDirectConnectGatewayAttachment = 'networkmanager:GetDirectConnectGatewayAttachment',
  /**
   * Grants permission to describe link associations
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinkAssociations.html
   */
  GetLinkAssociations = 'networkmanager:GetLinkAssociations',
  /**
   * Grants permission to describe links
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinks.html
   */
  GetLinks = 'networkmanager:GetLinks',
  /**
   * Grants permission to return the number of resources for a global network groupe
   * d by type
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResourceCounts.html
   */
  GetNetworkResourceCounts = 'networkmanager:GetNetworkResourceCounts',
  /**
   * Grants permission to retrieve related resources for a resource within the globa
   * l network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResourceRelationships.html
   */
  GetNetworkResourceRelationships = 'networkmanager:GetNetworkResourceRelationships',
  /**
   * Grants permission to retrieve a global network resource
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResources.html
   */
  GetNetworkResources = 'networkmanager:GetNetworkResources',
  /**
   * Grants permission to retrieve routes for a route table within the global networ
   * k
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkRoutes.html
   */
  GetNetworkRoutes = 'networkmanager:GetNetworkRoutes',
  /**
   * Grants permission to retrieve network telemetry objects for the global network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkTelemetry.html
   */
  GetNetworkTelemetry = 'networkmanager:GetNetworkTelemetry',
  /**
   * Grants permission to retrieve a resource policy
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetResourcePolicy.html
   */
  GetResourcePolicy = 'networkmanager:GetResourcePolicy',
  /**
   * Grants permission to retrieve a route analysis configuration and result
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetRouteAnalysis.html
   */
  GetRouteAnalysis = 'networkmanager:GetRouteAnalysis',
  /**
   * Grants permission to retrieve a site-to-site VPN attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSiteToSiteVpnAttachment.html
   */
  GetSiteToSiteVpnAttachment = 'networkmanager:GetSiteToSiteVpnAttachment',
  /**
   * Grants permission to describe global networks
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSites.html
   */
  GetSites = 'networkmanager:GetSites',
  /**
   * Grants permission to describe transit gateway connect peer associations
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayConnectPeerAssociations.html
   */
  GetTransitGatewayConnectPeerAssociations = 'networkmanager:GetTransitGatewayConnectPeerAssociations',
  /**
   * Grants permission to retrieve a Transit Gateway peering
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayPeering.html
   */
  GetTransitGatewayPeering = 'networkmanager:GetTransitGatewayPeering',
  /**
   * Grants permission to describe transit gateway registrations
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayRegistrations.html
   */
  GetTransitGatewayRegistrations = 'networkmanager:GetTransitGatewayRegistrations',
  /**
   * Grants permission to retrieve a TGW RTB attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayRouteTableAttachment.html
   */
  GetTransitGatewayRouteTableAttachment = 'networkmanager:GetTransitGatewayRouteTableAttachment',
  /**
   * Grants permission to retrieve a VPC attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetVpcAttachment.html
   */
  GetVpcAttachment = 'networkmanager:GetVpcAttachment',
  /**
   * Grants permission to describe attachments
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListAttachments.html
   */
  ListAttachments = 'networkmanager:ListAttachments',
  /**
   * Grants permission to describe Connect Peers
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListConnectPeers.html
   */
  ListConnectPeers = 'networkmanager:ListConnectPeers',
  /**
   * Grants permission to list core network policy versions
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListCoreNetworkPolicyVersions.html
   */
  ListCoreNetworkPolicyVersions = 'networkmanager:ListCoreNetworkPolicyVersions',
  /**
   * Grants permission to list core networks
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListCoreNetworks.html
   */
  ListCoreNetworks = 'networkmanager:ListCoreNetworks',
  /**
   * Grants permission to list organization service access status
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListOrganizationServiceAccessStatus.html
   */
  ListOrganizationServiceAccessStatus = 'networkmanager:ListOrganizationServiceAccessStatus',
  /**
   * Grants permission to describe peerings
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListPeerings.html
   */
  ListPeerings = 'networkmanager:ListPeerings',
  /**
   * Grants permission to list tags for a Network Manager resource
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'networkmanager:ListTagsForResource',
  /**
   * Grants permission to create a core network policy
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_PutCoreNetworkPolicy.html
   */
  PutCoreNetworkPolicy = 'networkmanager:PutCoreNetworkPolicy',
  /**
   * Grants permission to create or update a resource policy
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_PutResourcePolicy.html
   */
  PutResourcePolicy = 'networkmanager:PutResourcePolicy',
  /**
   * Grants permission to register a transit gateway to a global network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RegisterTransitGateway.html
   */
  RegisterTransitGateway = 'networkmanager:RegisterTransitGateway',
  /**
   * Grants permission to reject attachment request
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RejectAttachment.html
   */
  RejectAttachment = 'networkmanager:RejectAttachment',
  /**
   * Grants permission to restore the core network policy to a previous version
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RestoreCoreNetworkPolicyVersion.html
   */
  RestoreCoreNetworkPolicyVersion = 'networkmanager:RestoreCoreNetworkPolicyVersion',
  /**
   * Grants permission to start organization service access update
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_StartOrganizationServiceAccessUpdate.html
   */
  StartOrganizationServiceAccessUpdate = 'networkmanager:StartOrganizationServiceAccessUpdate',
  /**
   * Grants permission to start a route analysis and stores analysis configuration
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_StartRouteAnalysis.html
   */
  StartRouteAnalysis = 'networkmanager:StartRouteAnalysis',
  /**
   * Grants permission to tag a Network Manager resource
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_TagResource.html
   */
  TagResource = 'networkmanager:TagResource',
  /**
   * Grants permission to untag a Network Manager resource
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'networkmanager:UntagResource',
  /**
   * Grants permission to update a connection
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateConnection.html
   */
  UpdateConnection = 'networkmanager:UpdateConnection',
  /**
   * Grants permission to update a core network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateCoreNetwork.html
   */
  UpdateCoreNetwork = 'networkmanager:UpdateCoreNetwork',
  /**
   * Grants permission to update a device
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateDevice.html
   */
  UpdateDevice = 'networkmanager:UpdateDevice',
  /**
   * Grants permission to update a Direct Connect gateway attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateDirectConnectGatewayAttachment.html
   */
  UpdateDirectConnectGatewayAttachment = 'networkmanager:UpdateDirectConnectGatewayAttachment',
  /**
   * Grants permission to update a global network
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateGlobalNetwork.html
   */
  UpdateGlobalNetwork = 'networkmanager:UpdateGlobalNetwork',
  /**
   * Grants permission to update a link
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateLink.html
   */
  UpdateLink = 'networkmanager:UpdateLink',
  /**
   * Grants permission to add or update metadata key/value pairs on network resource
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateNetworkResourceMetadata.html
   */
  UpdateNetworkResourceMetadata = 'networkmanager:UpdateNetworkResourceMetadata',
  /**
   * Grants permission to update a site
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateSite.html
   */
  UpdateSite = 'networkmanager:UpdateSite',
  /**
   * Grants permission to update a VPC attachment
   *
   * See https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateVpcAttachment.html
   */
  UpdateVpcAttachment = 'networkmanager:UpdateVpcAttachment',
}
