[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEc2Actions

# Enumeration: AwsEc2Actions

All IAM policy actions for Amazon EC2 (EC2)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html

2024-02-12T09:57:03.410Z

## Table of contents

### Enumeration Members

- [AcceptAddressTransfer](AwsEc2Actions.md#acceptaddresstransfer)
- [AcceptReservedInstancesExchangeQuote](AwsEc2Actions.md#acceptreservedinstancesexchangequote)
- [AcceptTransitGatewayMulticastDomainAssociations](AwsEc2Actions.md#accepttransitgatewaymulticastdomainassociations)
- [AcceptTransitGatewayPeeringAttachment](AwsEc2Actions.md#accepttransitgatewaypeeringattachment)
- [AcceptTransitGatewayVpcAttachment](AwsEc2Actions.md#accepttransitgatewayvpcattachment)
- [AcceptVpcEndpointConnections](AwsEc2Actions.md#acceptvpcendpointconnections)
- [AcceptVpcPeeringConnection](AwsEc2Actions.md#acceptvpcpeeringconnection)
- [AdvertiseByoipCidr](AwsEc2Actions.md#advertisebyoipcidr)
- [AllocateAddress](AwsEc2Actions.md#allocateaddress)
- [AllocateHosts](AwsEc2Actions.md#allocatehosts)
- [AllocateIpamPoolCidr](AwsEc2Actions.md#allocateipampoolcidr)
- [ApplySecurityGroupsToClientVpnTargetNetwork](AwsEc2Actions.md#applysecuritygroupstoclientvpntargetnetwork)
- [AssignIpv6Addresses](AwsEc2Actions.md#assignipv6addresses)
- [AssignPrivateIpAddresses](AwsEc2Actions.md#assignprivateipaddresses)
- [AssignPrivateNatGatewayAddress](AwsEc2Actions.md#assignprivatenatgatewayaddress)
- [AssociateAddress](AwsEc2Actions.md#associateaddress)
- [AssociateClientVpnTargetNetwork](AwsEc2Actions.md#associateclientvpntargetnetwork)
- [AssociateDhcpOptions](AwsEc2Actions.md#associatedhcpoptions)
- [AssociateEnclaveCertificateIamRole](AwsEc2Actions.md#associateenclavecertificateiamrole)
- [AssociateIamInstanceProfile](AwsEc2Actions.md#associateiaminstanceprofile)
- [AssociateInstanceEventWindow](AwsEc2Actions.md#associateinstanceeventwindow)
- [AssociateIpamByoasn](AwsEc2Actions.md#associateipambyoasn)
- [AssociateIpamResourceDiscovery](AwsEc2Actions.md#associateipamresourcediscovery)
- [AssociateNatGatewayAddress](AwsEc2Actions.md#associatenatgatewayaddress)
- [AssociateRouteTable](AwsEc2Actions.md#associateroutetable)
- [AssociateSubnetCidrBlock](AwsEc2Actions.md#associatesubnetcidrblock)
- [AssociateTransitGatewayMulticastDomain](AwsEc2Actions.md#associatetransitgatewaymulticastdomain)
- [AssociateTransitGatewayPolicyTable](AwsEc2Actions.md#associatetransitgatewaypolicytable)
- [AssociateTransitGatewayRouteTable](AwsEc2Actions.md#associatetransitgatewayroutetable)
- [AssociateTrunkInterface](AwsEc2Actions.md#associatetrunkinterface)
- [AssociateVerifiedAccessInstanceWebAcl](AwsEc2Actions.md#associateverifiedaccessinstancewebacl)
- [AssociateVpcCidrBlock](AwsEc2Actions.md#associatevpccidrblock)
- [AttachClassicLinkVpc](AwsEc2Actions.md#attachclassiclinkvpc)
- [AttachInternetGateway](AwsEc2Actions.md#attachinternetgateway)
- [AttachNetworkInterface](AwsEc2Actions.md#attachnetworkinterface)
- [AttachVerifiedAccessTrustProvider](AwsEc2Actions.md#attachverifiedaccesstrustprovider)
- [AttachVolume](AwsEc2Actions.md#attachvolume)
- [AttachVpnGateway](AwsEc2Actions.md#attachvpngateway)
- [AuthorizeClientVpnIngress](AwsEc2Actions.md#authorizeclientvpningress)
- [AuthorizeSecurityGroupEgress](AwsEc2Actions.md#authorizesecuritygroupegress)
- [AuthorizeSecurityGroupIngress](AwsEc2Actions.md#authorizesecuritygroupingress)
- [BundleInstance](AwsEc2Actions.md#bundleinstance)
- [CancelBundleTask](AwsEc2Actions.md#cancelbundletask)
- [CancelCapacityReservation](AwsEc2Actions.md#cancelcapacityreservation)
- [CancelCapacityReservationFleets](AwsEc2Actions.md#cancelcapacityreservationfleets)
- [CancelConversionTask](AwsEc2Actions.md#cancelconversiontask)
- [CancelExportTask](AwsEc2Actions.md#cancelexporttask)
- [CancelImageLaunchPermission](AwsEc2Actions.md#cancelimagelaunchpermission)
- [CancelImportTask](AwsEc2Actions.md#cancelimporttask)
- [CancelReservedInstancesListing](AwsEc2Actions.md#cancelreservedinstanceslisting)
- [CancelSpotFleetRequests](AwsEc2Actions.md#cancelspotfleetrequests)
- [CancelSpotInstanceRequests](AwsEc2Actions.md#cancelspotinstancerequests)
- [ConfirmProductInstance](AwsEc2Actions.md#confirmproductinstance)
- [CopyFpgaImage](AwsEc2Actions.md#copyfpgaimage)
- [CopyImage](AwsEc2Actions.md#copyimage)
- [CopySnapshot](AwsEc2Actions.md#copysnapshot)
- [CreateCapacityReservation](AwsEc2Actions.md#createcapacityreservation)
- [CreateCapacityReservationFleet](AwsEc2Actions.md#createcapacityreservationfleet)
- [CreateCarrierGateway](AwsEc2Actions.md#createcarriergateway)
- [CreateClientVpnEndpoint](AwsEc2Actions.md#createclientvpnendpoint)
- [CreateClientVpnRoute](AwsEc2Actions.md#createclientvpnroute)
- [CreateCoipCidr](AwsEc2Actions.md#createcoipcidr)
- [CreateCoipPool](AwsEc2Actions.md#createcoippool)
- [CreateCoipPoolPermission](AwsEc2Actions.md#createcoippoolpermission)
- [CreateCustomerGateway](AwsEc2Actions.md#createcustomergateway)
- [CreateDefaultSubnet](AwsEc2Actions.md#createdefaultsubnet)
- [CreateDefaultVpc](AwsEc2Actions.md#createdefaultvpc)
- [CreateDhcpOptions](AwsEc2Actions.md#createdhcpoptions)
- [CreateEgressOnlyInternetGateway](AwsEc2Actions.md#createegressonlyinternetgateway)
- [CreateFleet](AwsEc2Actions.md#createfleet)
- [CreateFlowLogs](AwsEc2Actions.md#createflowlogs)
- [CreateFpgaImage](AwsEc2Actions.md#createfpgaimage)
- [CreateImage](AwsEc2Actions.md#createimage)
- [CreateInstanceConnectEndpoint](AwsEc2Actions.md#createinstanceconnectendpoint)
- [CreateInstanceEventWindow](AwsEc2Actions.md#createinstanceeventwindow)
- [CreateInstanceExportTask](AwsEc2Actions.md#createinstanceexporttask)
- [CreateInternetGateway](AwsEc2Actions.md#createinternetgateway)
- [CreateIpam](AwsEc2Actions.md#createipam)
- [CreateIpamPool](AwsEc2Actions.md#createipampool)
- [CreateIpamResourceDiscovery](AwsEc2Actions.md#createipamresourcediscovery)
- [CreateIpamScope](AwsEc2Actions.md#createipamscope)
- [CreateKeyPair](AwsEc2Actions.md#createkeypair)
- [CreateLaunchTemplate](AwsEc2Actions.md#createlaunchtemplate)
- [CreateLaunchTemplateVersion](AwsEc2Actions.md#createlaunchtemplateversion)
- [CreateLocalGatewayRoute](AwsEc2Actions.md#createlocalgatewayroute)
- [CreateLocalGatewayRouteTable](AwsEc2Actions.md#createlocalgatewayroutetable)
- [CreateLocalGatewayRouteTablePermission](AwsEc2Actions.md#createlocalgatewayroutetablepermission)
- [CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation](AwsEc2Actions.md#createlocalgatewayroutetablevirtualinterfacegroupassociation)
- [CreateLocalGatewayRouteTableVpcAssociation](AwsEc2Actions.md#createlocalgatewayroutetablevpcassociation)
- [CreateManagedPrefixList](AwsEc2Actions.md#createmanagedprefixlist)
- [CreateNatGateway](AwsEc2Actions.md#createnatgateway)
- [CreateNetworkAcl](AwsEc2Actions.md#createnetworkacl)
- [CreateNetworkAclEntry](AwsEc2Actions.md#createnetworkaclentry)
- [CreateNetworkInsightsAccessScope](AwsEc2Actions.md#createnetworkinsightsaccessscope)
- [CreateNetworkInsightsPath](AwsEc2Actions.md#createnetworkinsightspath)
- [CreateNetworkInterface](AwsEc2Actions.md#createnetworkinterface)
- [CreateNetworkInterfacePermission](AwsEc2Actions.md#createnetworkinterfacepermission)
- [CreatePlacementGroup](AwsEc2Actions.md#createplacementgroup)
- [CreatePublicIpv4Pool](AwsEc2Actions.md#createpublicipv4pool)
- [CreateReplaceRootVolumeTask](AwsEc2Actions.md#createreplacerootvolumetask)
- [CreateReservedInstancesListing](AwsEc2Actions.md#createreservedinstanceslisting)
- [CreateRestoreImageTask](AwsEc2Actions.md#createrestoreimagetask)
- [CreateRoute](AwsEc2Actions.md#createroute)
- [CreateRouteTable](AwsEc2Actions.md#createroutetable)
- [CreateSecurityGroup](AwsEc2Actions.md#createsecuritygroup)
- [CreateSnapshot](AwsEc2Actions.md#createsnapshot)
- [CreateSnapshots](AwsEc2Actions.md#createsnapshots)
- [CreateSpotDatafeedSubscription](AwsEc2Actions.md#createspotdatafeedsubscription)
- [CreateStoreImageTask](AwsEc2Actions.md#createstoreimagetask)
- [CreateSubnet](AwsEc2Actions.md#createsubnet)
- [CreateSubnetCidrReservation](AwsEc2Actions.md#createsubnetcidrreservation)
- [CreateTags](AwsEc2Actions.md#createtags)
- [CreateTrafficMirrorFilter](AwsEc2Actions.md#createtrafficmirrorfilter)
- [CreateTrafficMirrorFilterRule](AwsEc2Actions.md#createtrafficmirrorfilterrule)
- [CreateTrafficMirrorSession](AwsEc2Actions.md#createtrafficmirrorsession)
- [CreateTrafficMirrorTarget](AwsEc2Actions.md#createtrafficmirrortarget)
- [CreateTransitGateway](AwsEc2Actions.md#createtransitgateway)
- [CreateTransitGatewayConnect](AwsEc2Actions.md#createtransitgatewayconnect)
- [CreateTransitGatewayConnectPeer](AwsEc2Actions.md#createtransitgatewayconnectpeer)
- [CreateTransitGatewayMulticastDomain](AwsEc2Actions.md#createtransitgatewaymulticastdomain)
- [CreateTransitGatewayPeeringAttachment](AwsEc2Actions.md#createtransitgatewaypeeringattachment)
- [CreateTransitGatewayPolicyTable](AwsEc2Actions.md#createtransitgatewaypolicytable)
- [CreateTransitGatewayPrefixListReference](AwsEc2Actions.md#createtransitgatewayprefixlistreference)
- [CreateTransitGatewayRoute](AwsEc2Actions.md#createtransitgatewayroute)
- [CreateTransitGatewayRouteTable](AwsEc2Actions.md#createtransitgatewayroutetable)
- [CreateTransitGatewayRouteTableAnnouncement](AwsEc2Actions.md#createtransitgatewayroutetableannouncement)
- [CreateTransitGatewayVpcAttachment](AwsEc2Actions.md#createtransitgatewayvpcattachment)
- [CreateVerifiedAccessEndpoint](AwsEc2Actions.md#createverifiedaccessendpoint)
- [CreateVerifiedAccessGroup](AwsEc2Actions.md#createverifiedaccessgroup)
- [CreateVerifiedAccessInstance](AwsEc2Actions.md#createverifiedaccessinstance)
- [CreateVerifiedAccessTrustProvider](AwsEc2Actions.md#createverifiedaccesstrustprovider)
- [CreateVolume](AwsEc2Actions.md#createvolume)
- [CreateVpc](AwsEc2Actions.md#createvpc)
- [CreateVpcEndpoint](AwsEc2Actions.md#createvpcendpoint)
- [CreateVpcEndpointConnectionNotification](AwsEc2Actions.md#createvpcendpointconnectionnotification)
- [CreateVpcEndpointServiceConfiguration](AwsEc2Actions.md#createvpcendpointserviceconfiguration)
- [CreateVpcPeeringConnection](AwsEc2Actions.md#createvpcpeeringconnection)
- [CreateVpnConnection](AwsEc2Actions.md#createvpnconnection)
- [CreateVpnConnectionRoute](AwsEc2Actions.md#createvpnconnectionroute)
- [CreateVpnGateway](AwsEc2Actions.md#createvpngateway)
- [DeleteCarrierGateway](AwsEc2Actions.md#deletecarriergateway)
- [DeleteClientVpnEndpoint](AwsEc2Actions.md#deleteclientvpnendpoint)
- [DeleteClientVpnRoute](AwsEc2Actions.md#deleteclientvpnroute)
- [DeleteCoipCidr](AwsEc2Actions.md#deletecoipcidr)
- [DeleteCoipPool](AwsEc2Actions.md#deletecoippool)
- [DeleteCoipPoolPermission](AwsEc2Actions.md#deletecoippoolpermission)
- [DeleteCustomerGateway](AwsEc2Actions.md#deletecustomergateway)
- [DeleteDhcpOptions](AwsEc2Actions.md#deletedhcpoptions)
- [DeleteEgressOnlyInternetGateway](AwsEc2Actions.md#deleteegressonlyinternetgateway)
- [DeleteFleets](AwsEc2Actions.md#deletefleets)
- [DeleteFlowLogs](AwsEc2Actions.md#deleteflowlogs)
- [DeleteFpgaImage](AwsEc2Actions.md#deletefpgaimage)
- [DeleteInstanceConnectEndpoint](AwsEc2Actions.md#deleteinstanceconnectendpoint)
- [DeleteInstanceEventWindow](AwsEc2Actions.md#deleteinstanceeventwindow)
- [DeleteInternetGateway](AwsEc2Actions.md#deleteinternetgateway)
- [DeleteIpam](AwsEc2Actions.md#deleteipam)
- [DeleteIpamPool](AwsEc2Actions.md#deleteipampool)
- [DeleteIpamResourceDiscovery](AwsEc2Actions.md#deleteipamresourcediscovery)
- [DeleteIpamScope](AwsEc2Actions.md#deleteipamscope)
- [DeleteKeyPair](AwsEc2Actions.md#deletekeypair)
- [DeleteLaunchTemplate](AwsEc2Actions.md#deletelaunchtemplate)
- [DeleteLaunchTemplateVersions](AwsEc2Actions.md#deletelaunchtemplateversions)
- [DeleteLocalGatewayRoute](AwsEc2Actions.md#deletelocalgatewayroute)
- [DeleteLocalGatewayRouteTable](AwsEc2Actions.md#deletelocalgatewayroutetable)
- [DeleteLocalGatewayRouteTablePermission](AwsEc2Actions.md#deletelocalgatewayroutetablepermission)
- [DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation](AwsEc2Actions.md#deletelocalgatewayroutetablevirtualinterfacegroupassociation)
- [DeleteLocalGatewayRouteTableVpcAssociation](AwsEc2Actions.md#deletelocalgatewayroutetablevpcassociation)
- [DeleteManagedPrefixList](AwsEc2Actions.md#deletemanagedprefixlist)
- [DeleteNatGateway](AwsEc2Actions.md#deletenatgateway)
- [DeleteNetworkAcl](AwsEc2Actions.md#deletenetworkacl)
- [DeleteNetworkAclEntry](AwsEc2Actions.md#deletenetworkaclentry)
- [DeleteNetworkInsightsAccessScope](AwsEc2Actions.md#deletenetworkinsightsaccessscope)
- [DeleteNetworkInsightsAccessScopeAnalysis](AwsEc2Actions.md#deletenetworkinsightsaccessscopeanalysis)
- [DeleteNetworkInsightsAnalysis](AwsEc2Actions.md#deletenetworkinsightsanalysis)
- [DeleteNetworkInsightsPath](AwsEc2Actions.md#deletenetworkinsightspath)
- [DeleteNetworkInterface](AwsEc2Actions.md#deletenetworkinterface)
- [DeleteNetworkInterfacePermission](AwsEc2Actions.md#deletenetworkinterfacepermission)
- [DeletePlacementGroup](AwsEc2Actions.md#deleteplacementgroup)
- [DeletePublicIpv4Pool](AwsEc2Actions.md#deletepublicipv4pool)
- [DeleteQueuedReservedInstances](AwsEc2Actions.md#deletequeuedreservedinstances)
- [DeleteResourcePolicy](AwsEc2Actions.md#deleteresourcepolicy)
- [DeleteRoute](AwsEc2Actions.md#deleteroute)
- [DeleteRouteTable](AwsEc2Actions.md#deleteroutetable)
- [DeleteSecurityGroup](AwsEc2Actions.md#deletesecuritygroup)
- [DeleteSnapshot](AwsEc2Actions.md#deletesnapshot)
- [DeleteSpotDatafeedSubscription](AwsEc2Actions.md#deletespotdatafeedsubscription)
- [DeleteSubnet](AwsEc2Actions.md#deletesubnet)
- [DeleteSubnetCidrReservation](AwsEc2Actions.md#deletesubnetcidrreservation)
- [DeleteTags](AwsEc2Actions.md#deletetags)
- [DeleteTrafficMirrorFilter](AwsEc2Actions.md#deletetrafficmirrorfilter)
- [DeleteTrafficMirrorFilterRule](AwsEc2Actions.md#deletetrafficmirrorfilterrule)
- [DeleteTrafficMirrorSession](AwsEc2Actions.md#deletetrafficmirrorsession)
- [DeleteTrafficMirrorTarget](AwsEc2Actions.md#deletetrafficmirrortarget)
- [DeleteTransitGateway](AwsEc2Actions.md#deletetransitgateway)
- [DeleteTransitGatewayConnect](AwsEc2Actions.md#deletetransitgatewayconnect)
- [DeleteTransitGatewayConnectPeer](AwsEc2Actions.md#deletetransitgatewayconnectpeer)
- [DeleteTransitGatewayMulticastDomain](AwsEc2Actions.md#deletetransitgatewaymulticastdomain)
- [DeleteTransitGatewayPeeringAttachment](AwsEc2Actions.md#deletetransitgatewaypeeringattachment)
- [DeleteTransitGatewayPolicyTable](AwsEc2Actions.md#deletetransitgatewaypolicytable)
- [DeleteTransitGatewayPrefixListReference](AwsEc2Actions.md#deletetransitgatewayprefixlistreference)
- [DeleteTransitGatewayRoute](AwsEc2Actions.md#deletetransitgatewayroute)
- [DeleteTransitGatewayRouteTable](AwsEc2Actions.md#deletetransitgatewayroutetable)
- [DeleteTransitGatewayRouteTableAnnouncement](AwsEc2Actions.md#deletetransitgatewayroutetableannouncement)
- [DeleteTransitGatewayVpcAttachment](AwsEc2Actions.md#deletetransitgatewayvpcattachment)
- [DeleteVerifiedAccessEndpoint](AwsEc2Actions.md#deleteverifiedaccessendpoint)
- [DeleteVerifiedAccessGroup](AwsEc2Actions.md#deleteverifiedaccessgroup)
- [DeleteVerifiedAccessInstance](AwsEc2Actions.md#deleteverifiedaccessinstance)
- [DeleteVerifiedAccessTrustProvider](AwsEc2Actions.md#deleteverifiedaccesstrustprovider)
- [DeleteVolume](AwsEc2Actions.md#deletevolume)
- [DeleteVpc](AwsEc2Actions.md#deletevpc)
- [DeleteVpcEndpointConnectionNotifications](AwsEc2Actions.md#deletevpcendpointconnectionnotifications)
- [DeleteVpcEndpointServiceConfigurations](AwsEc2Actions.md#deletevpcendpointserviceconfigurations)
- [DeleteVpcEndpoints](AwsEc2Actions.md#deletevpcendpoints)
- [DeleteVpcPeeringConnection](AwsEc2Actions.md#deletevpcpeeringconnection)
- [DeleteVpnConnection](AwsEc2Actions.md#deletevpnconnection)
- [DeleteVpnConnectionRoute](AwsEc2Actions.md#deletevpnconnectionroute)
- [DeleteVpnGateway](AwsEc2Actions.md#deletevpngateway)
- [DeprovisionByoipCidr](AwsEc2Actions.md#deprovisionbyoipcidr)
- [DeprovisionIpamByoasn](AwsEc2Actions.md#deprovisionipambyoasn)
- [DeprovisionIpamPoolCidr](AwsEc2Actions.md#deprovisionipampoolcidr)
- [DeprovisionPublicIpv4PoolCidr](AwsEc2Actions.md#deprovisionpublicipv4poolcidr)
- [DeregisterImage](AwsEc2Actions.md#deregisterimage)
- [DeregisterInstanceEventNotificationAttributes](AwsEc2Actions.md#deregisterinstanceeventnotificationattributes)
- [DeregisterTransitGatewayMulticastGroupMembers](AwsEc2Actions.md#deregistertransitgatewaymulticastgroupmembers)
- [DeregisterTransitGatewayMulticastGroupSources](AwsEc2Actions.md#deregistertransitgatewaymulticastgroupsources)
- [DescribeAccountAttributes](AwsEc2Actions.md#describeaccountattributes)
- [DescribeAddressTransfers](AwsEc2Actions.md#describeaddresstransfers)
- [DescribeAddresses](AwsEc2Actions.md#describeaddresses)
- [DescribeAddressesAttribute](AwsEc2Actions.md#describeaddressesattribute)
- [DescribeAggregateIdFormat](AwsEc2Actions.md#describeaggregateidformat)
- [DescribeAvailabilityZones](AwsEc2Actions.md#describeavailabilityzones)
- [DescribeAwsNetworkPerformanceMetricSubscriptions](AwsEc2Actions.md#describeawsnetworkperformancemetricsubscriptions)
- [DescribeBundleTasks](AwsEc2Actions.md#describebundletasks)
- [DescribeByoipCidrs](AwsEc2Actions.md#describebyoipcidrs)
- [DescribeCapacityBlockOfferings](AwsEc2Actions.md#describecapacityblockofferings)
- [DescribeCapacityReservationFleets](AwsEc2Actions.md#describecapacityreservationfleets)
- [DescribeCapacityReservations](AwsEc2Actions.md#describecapacityreservations)
- [DescribeCarrierGateways](AwsEc2Actions.md#describecarriergateways)
- [DescribeClassicLinkInstances](AwsEc2Actions.md#describeclassiclinkinstances)
- [DescribeClientVpnAuthorizationRules](AwsEc2Actions.md#describeclientvpnauthorizationrules)
- [DescribeClientVpnConnections](AwsEc2Actions.md#describeclientvpnconnections)
- [DescribeClientVpnEndpoints](AwsEc2Actions.md#describeclientvpnendpoints)
- [DescribeClientVpnRoutes](AwsEc2Actions.md#describeclientvpnroutes)
- [DescribeClientVpnTargetNetworks](AwsEc2Actions.md#describeclientvpntargetnetworks)
- [DescribeCoipPools](AwsEc2Actions.md#describecoippools)
- [DescribeConversionTasks](AwsEc2Actions.md#describeconversiontasks)
- [DescribeCustomerGateways](AwsEc2Actions.md#describecustomergateways)
- [DescribeDhcpOptions](AwsEc2Actions.md#describedhcpoptions)
- [DescribeEgressOnlyInternetGateways](AwsEc2Actions.md#describeegressonlyinternetgateways)
- [DescribeElasticGpus](AwsEc2Actions.md#describeelasticgpus)
- [DescribeExportImageTasks](AwsEc2Actions.md#describeexportimagetasks)
- [DescribeExportTasks](AwsEc2Actions.md#describeexporttasks)
- [DescribeFastLaunchImages](AwsEc2Actions.md#describefastlaunchimages)
- [DescribeFastSnapshotRestores](AwsEc2Actions.md#describefastsnapshotrestores)
- [DescribeFleetHistory](AwsEc2Actions.md#describefleethistory)
- [DescribeFleetInstances](AwsEc2Actions.md#describefleetinstances)
- [DescribeFleets](AwsEc2Actions.md#describefleets)
- [DescribeFlowLogs](AwsEc2Actions.md#describeflowlogs)
- [DescribeFpgaImageAttribute](AwsEc2Actions.md#describefpgaimageattribute)
- [DescribeFpgaImages](AwsEc2Actions.md#describefpgaimages)
- [DescribeHostReservationOfferings](AwsEc2Actions.md#describehostreservationofferings)
- [DescribeHostReservations](AwsEc2Actions.md#describehostreservations)
- [DescribeHosts](AwsEc2Actions.md#describehosts)
- [DescribeIamInstanceProfileAssociations](AwsEc2Actions.md#describeiaminstanceprofileassociations)
- [DescribeIdFormat](AwsEc2Actions.md#describeidformat)
- [DescribeIdentityIdFormat](AwsEc2Actions.md#describeidentityidformat)
- [DescribeImageAttribute](AwsEc2Actions.md#describeimageattribute)
- [DescribeImages](AwsEc2Actions.md#describeimages)
- [DescribeImportImageTasks](AwsEc2Actions.md#describeimportimagetasks)
- [DescribeImportSnapshotTasks](AwsEc2Actions.md#describeimportsnapshottasks)
- [DescribeInstanceAttribute](AwsEc2Actions.md#describeinstanceattribute)
- [DescribeInstanceConnectEndpoints](AwsEc2Actions.md#describeinstanceconnectendpoints)
- [DescribeInstanceCreditSpecifications](AwsEc2Actions.md#describeinstancecreditspecifications)
- [DescribeInstanceEventNotificationAttributes](AwsEc2Actions.md#describeinstanceeventnotificationattributes)
- [DescribeInstanceEventWindows](AwsEc2Actions.md#describeinstanceeventwindows)
- [DescribeInstanceStatus](AwsEc2Actions.md#describeinstancestatus)
- [DescribeInstanceTopology](AwsEc2Actions.md#describeinstancetopology)
- [DescribeInstanceTypeOfferings](AwsEc2Actions.md#describeinstancetypeofferings)
- [DescribeInstanceTypes](AwsEc2Actions.md#describeinstancetypes)
- [DescribeInstances](AwsEc2Actions.md#describeinstances)
- [DescribeInternetGateways](AwsEc2Actions.md#describeinternetgateways)
- [DescribeIpamByoasn](AwsEc2Actions.md#describeipambyoasn)
- [DescribeIpamPools](AwsEc2Actions.md#describeipampools)
- [DescribeIpamResourceDiscoveries](AwsEc2Actions.md#describeipamresourcediscoveries)
- [DescribeIpamResourceDiscoveryAssociations](AwsEc2Actions.md#describeipamresourcediscoveryassociations)
- [DescribeIpamScopes](AwsEc2Actions.md#describeipamscopes)
- [DescribeIpams](AwsEc2Actions.md#describeipams)
- [DescribeIpv6Pools](AwsEc2Actions.md#describeipv6pools)
- [DescribeKeyPairs](AwsEc2Actions.md#describekeypairs)
- [DescribeLaunchTemplateVersions](AwsEc2Actions.md#describelaunchtemplateversions)
- [DescribeLaunchTemplates](AwsEc2Actions.md#describelaunchtemplates)
- [DescribeLocalGatewayRouteTablePermissions](AwsEc2Actions.md#describelocalgatewayroutetablepermissions)
- [DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations](AwsEc2Actions.md#describelocalgatewayroutetablevirtualinterfacegroupassociations)
- [DescribeLocalGatewayRouteTableVpcAssociations](AwsEc2Actions.md#describelocalgatewayroutetablevpcassociations)
- [DescribeLocalGatewayRouteTables](AwsEc2Actions.md#describelocalgatewayroutetables)
- [DescribeLocalGatewayVirtualInterfaceGroups](AwsEc2Actions.md#describelocalgatewayvirtualinterfacegroups)
- [DescribeLocalGatewayVirtualInterfaces](AwsEc2Actions.md#describelocalgatewayvirtualinterfaces)
- [DescribeLocalGateways](AwsEc2Actions.md#describelocalgateways)
- [DescribeLockedSnapshots](AwsEc2Actions.md#describelockedsnapshots)
- [DescribeManagedPrefixLists](AwsEc2Actions.md#describemanagedprefixlists)
- [DescribeMovingAddresses](AwsEc2Actions.md#describemovingaddresses)
- [DescribeNatGateways](AwsEc2Actions.md#describenatgateways)
- [DescribeNetworkAcls](AwsEc2Actions.md#describenetworkacls)
- [DescribeNetworkInsightsAccessScopeAnalyses](AwsEc2Actions.md#describenetworkinsightsaccessscopeanalyses)
- [DescribeNetworkInsightsAccessScopes](AwsEc2Actions.md#describenetworkinsightsaccessscopes)
- [DescribeNetworkInsightsAnalyses](AwsEc2Actions.md#describenetworkinsightsanalyses)
- [DescribeNetworkInsightsPaths](AwsEc2Actions.md#describenetworkinsightspaths)
- [DescribeNetworkInterfaceAttribute](AwsEc2Actions.md#describenetworkinterfaceattribute)
- [DescribeNetworkInterfacePermissions](AwsEc2Actions.md#describenetworkinterfacepermissions)
- [DescribeNetworkInterfaces](AwsEc2Actions.md#describenetworkinterfaces)
- [DescribePlacementGroups](AwsEc2Actions.md#describeplacementgroups)
- [DescribePrefixLists](AwsEc2Actions.md#describeprefixlists)
- [DescribePrincipalIdFormat](AwsEc2Actions.md#describeprincipalidformat)
- [DescribePublicIpv4Pools](AwsEc2Actions.md#describepublicipv4pools)
- [DescribeRegions](AwsEc2Actions.md#describeregions)
- [DescribeReplaceRootVolumeTasks](AwsEc2Actions.md#describereplacerootvolumetasks)
- [DescribeReservedInstances](AwsEc2Actions.md#describereservedinstances)
- [DescribeReservedInstancesListings](AwsEc2Actions.md#describereservedinstanceslistings)
- [DescribeReservedInstancesModifications](AwsEc2Actions.md#describereservedinstancesmodifications)
- [DescribeReservedInstancesOfferings](AwsEc2Actions.md#describereservedinstancesofferings)
- [DescribeRouteTables](AwsEc2Actions.md#describeroutetables)
- [DescribeScheduledInstanceAvailability](AwsEc2Actions.md#describescheduledinstanceavailability)
- [DescribeScheduledInstances](AwsEc2Actions.md#describescheduledinstances)
- [DescribeSecurityGroupReferences](AwsEc2Actions.md#describesecuritygroupreferences)
- [DescribeSecurityGroupRules](AwsEc2Actions.md#describesecuritygrouprules)
- [DescribeSecurityGroups](AwsEc2Actions.md#describesecuritygroups)
- [DescribeSnapshotAttribute](AwsEc2Actions.md#describesnapshotattribute)
- [DescribeSnapshotTierStatus](AwsEc2Actions.md#describesnapshottierstatus)
- [DescribeSnapshots](AwsEc2Actions.md#describesnapshots)
- [DescribeSpotDatafeedSubscription](AwsEc2Actions.md#describespotdatafeedsubscription)
- [DescribeSpotFleetInstances](AwsEc2Actions.md#describespotfleetinstances)
- [DescribeSpotFleetRequestHistory](AwsEc2Actions.md#describespotfleetrequesthistory)
- [DescribeSpotFleetRequests](AwsEc2Actions.md#describespotfleetrequests)
- [DescribeSpotInstanceRequests](AwsEc2Actions.md#describespotinstancerequests)
- [DescribeSpotPriceHistory](AwsEc2Actions.md#describespotpricehistory)
- [DescribeStaleSecurityGroups](AwsEc2Actions.md#describestalesecuritygroups)
- [DescribeStoreImageTasks](AwsEc2Actions.md#describestoreimagetasks)
- [DescribeSubnets](AwsEc2Actions.md#describesubnets)
- [DescribeTags](AwsEc2Actions.md#describetags)
- [DescribeTrafficMirrorFilters](AwsEc2Actions.md#describetrafficmirrorfilters)
- [DescribeTrafficMirrorSessions](AwsEc2Actions.md#describetrafficmirrorsessions)
- [DescribeTrafficMirrorTargets](AwsEc2Actions.md#describetrafficmirrortargets)
- [DescribeTransitGatewayAttachments](AwsEc2Actions.md#describetransitgatewayattachments)
- [DescribeTransitGatewayConnectPeers](AwsEc2Actions.md#describetransitgatewayconnectpeers)
- [DescribeTransitGatewayConnects](AwsEc2Actions.md#describetransitgatewayconnects)
- [DescribeTransitGatewayMulticastDomains](AwsEc2Actions.md#describetransitgatewaymulticastdomains)
- [DescribeTransitGatewayPeeringAttachments](AwsEc2Actions.md#describetransitgatewaypeeringattachments)
- [DescribeTransitGatewayPolicyTables](AwsEc2Actions.md#describetransitgatewaypolicytables)
- [DescribeTransitGatewayRouteTableAnnouncements](AwsEc2Actions.md#describetransitgatewayroutetableannouncements)
- [DescribeTransitGatewayRouteTables](AwsEc2Actions.md#describetransitgatewayroutetables)
- [DescribeTransitGatewayVpcAttachments](AwsEc2Actions.md#describetransitgatewayvpcattachments)
- [DescribeTransitGateways](AwsEc2Actions.md#describetransitgateways)
- [DescribeTrunkInterfaceAssociations](AwsEc2Actions.md#describetrunkinterfaceassociations)
- [DescribeVerifiedAccessEndpoints](AwsEc2Actions.md#describeverifiedaccessendpoints)
- [DescribeVerifiedAccessGroups](AwsEc2Actions.md#describeverifiedaccessgroups)
- [DescribeVerifiedAccessInstanceLoggingConfigurations](AwsEc2Actions.md#describeverifiedaccessinstanceloggingconfigurations)
- [DescribeVerifiedAccessInstanceWebAclAssociations](AwsEc2Actions.md#describeverifiedaccessinstancewebaclassociations)
- [DescribeVerifiedAccessInstances](AwsEc2Actions.md#describeverifiedaccessinstances)
- [DescribeVerifiedAccessTrustProviders](AwsEc2Actions.md#describeverifiedaccesstrustproviders)
- [DescribeVolumeAttribute](AwsEc2Actions.md#describevolumeattribute)
- [DescribeVolumeStatus](AwsEc2Actions.md#describevolumestatus)
- [DescribeVolumes](AwsEc2Actions.md#describevolumes)
- [DescribeVolumesModifications](AwsEc2Actions.md#describevolumesmodifications)
- [DescribeVpcAttribute](AwsEc2Actions.md#describevpcattribute)
- [DescribeVpcClassicLink](AwsEc2Actions.md#describevpcclassiclink)
- [DescribeVpcClassicLinkDnsSupport](AwsEc2Actions.md#describevpcclassiclinkdnssupport)
- [DescribeVpcEndpointConnectionNotifications](AwsEc2Actions.md#describevpcendpointconnectionnotifications)
- [DescribeVpcEndpointConnections](AwsEc2Actions.md#describevpcendpointconnections)
- [DescribeVpcEndpointServiceConfigurations](AwsEc2Actions.md#describevpcendpointserviceconfigurations)
- [DescribeVpcEndpointServicePermissions](AwsEc2Actions.md#describevpcendpointservicepermissions)
- [DescribeVpcEndpointServices](AwsEc2Actions.md#describevpcendpointservices)
- [DescribeVpcEndpoints](AwsEc2Actions.md#describevpcendpoints)
- [DescribeVpcPeeringConnections](AwsEc2Actions.md#describevpcpeeringconnections)
- [DescribeVpcs](AwsEc2Actions.md#describevpcs)
- [DescribeVpnConnections](AwsEc2Actions.md#describevpnconnections)
- [DescribeVpnGateways](AwsEc2Actions.md#describevpngateways)
- [DetachClassicLinkVpc](AwsEc2Actions.md#detachclassiclinkvpc)
- [DetachInternetGateway](AwsEc2Actions.md#detachinternetgateway)
- [DetachNetworkInterface](AwsEc2Actions.md#detachnetworkinterface)
- [DetachVerifiedAccessTrustProvider](AwsEc2Actions.md#detachverifiedaccesstrustprovider)
- [DetachVolume](AwsEc2Actions.md#detachvolume)
- [DetachVpnGateway](AwsEc2Actions.md#detachvpngateway)
- [DisableAddressTransfer](AwsEc2Actions.md#disableaddresstransfer)
- [DisableAwsNetworkPerformanceMetricSubscription](AwsEc2Actions.md#disableawsnetworkperformancemetricsubscription)
- [DisableEbsEncryptionByDefault](AwsEc2Actions.md#disableebsencryptionbydefault)
- [DisableFastLaunch](AwsEc2Actions.md#disablefastlaunch)
- [DisableFastSnapshotRestores](AwsEc2Actions.md#disablefastsnapshotrestores)
- [DisableImage](AwsEc2Actions.md#disableimage)
- [DisableImageBlockPublicAccess](AwsEc2Actions.md#disableimageblockpublicaccess)
- [DisableImageDeprecation](AwsEc2Actions.md#disableimagedeprecation)
- [DisableIpamOrganizationAdminAccount](AwsEc2Actions.md#disableipamorganizationadminaccount)
- [DisableSerialConsoleAccess](AwsEc2Actions.md#disableserialconsoleaccess)
- [DisableSnapshotBlockPublicAccess](AwsEc2Actions.md#disablesnapshotblockpublicaccess)
- [DisableTransitGatewayRouteTablePropagation](AwsEc2Actions.md#disabletransitgatewayroutetablepropagation)
- [DisableVgwRoutePropagation](AwsEc2Actions.md#disablevgwroutepropagation)
- [DisableVpcClassicLink](AwsEc2Actions.md#disablevpcclassiclink)
- [DisableVpcClassicLinkDnsSupport](AwsEc2Actions.md#disablevpcclassiclinkdnssupport)
- [DisassociateAddress](AwsEc2Actions.md#disassociateaddress)
- [DisassociateClientVpnTargetNetwork](AwsEc2Actions.md#disassociateclientvpntargetnetwork)
- [DisassociateEnclaveCertificateIamRole](AwsEc2Actions.md#disassociateenclavecertificateiamrole)
- [DisassociateIamInstanceProfile](AwsEc2Actions.md#disassociateiaminstanceprofile)
- [DisassociateInstanceEventWindow](AwsEc2Actions.md#disassociateinstanceeventwindow)
- [DisassociateIpamByoasn](AwsEc2Actions.md#disassociateipambyoasn)
- [DisassociateIpamResourceDiscovery](AwsEc2Actions.md#disassociateipamresourcediscovery)
- [DisassociateNatGatewayAddress](AwsEc2Actions.md#disassociatenatgatewayaddress)
- [DisassociateRouteTable](AwsEc2Actions.md#disassociateroutetable)
- [DisassociateSubnetCidrBlock](AwsEc2Actions.md#disassociatesubnetcidrblock)
- [DisassociateTransitGatewayMulticastDomain](AwsEc2Actions.md#disassociatetransitgatewaymulticastdomain)
- [DisassociateTransitGatewayPolicyTable](AwsEc2Actions.md#disassociatetransitgatewaypolicytable)
- [DisassociateTransitGatewayRouteTable](AwsEc2Actions.md#disassociatetransitgatewayroutetable)
- [DisassociateTrunkInterface](AwsEc2Actions.md#disassociatetrunkinterface)
- [DisassociateVerifiedAccessInstanceWebAcl](AwsEc2Actions.md#disassociateverifiedaccessinstancewebacl)
- [DisassociateVpcCidrBlock](AwsEc2Actions.md#disassociatevpccidrblock)
- [EnableAddressTransfer](AwsEc2Actions.md#enableaddresstransfer)
- [EnableAwsNetworkPerformanceMetricSubscription](AwsEc2Actions.md#enableawsnetworkperformancemetricsubscription)
- [EnableEbsEncryptionByDefault](AwsEc2Actions.md#enableebsencryptionbydefault)
- [EnableFastLaunch](AwsEc2Actions.md#enablefastlaunch)
- [EnableFastSnapshotRestores](AwsEc2Actions.md#enablefastsnapshotrestores)
- [EnableImage](AwsEc2Actions.md#enableimage)
- [EnableImageBlockPublicAccess](AwsEc2Actions.md#enableimageblockpublicaccess)
- [EnableImageDeprecation](AwsEc2Actions.md#enableimagedeprecation)
- [EnableIpamOrganizationAdminAccount](AwsEc2Actions.md#enableipamorganizationadminaccount)
- [EnableReachabilityAnalyzerOrganizationSharing](AwsEc2Actions.md#enablereachabilityanalyzerorganizationsharing)
- [EnableSerialConsoleAccess](AwsEc2Actions.md#enableserialconsoleaccess)
- [EnableSnapshotBlockPublicAccess](AwsEc2Actions.md#enablesnapshotblockpublicaccess)
- [EnableTransitGatewayRouteTablePropagation](AwsEc2Actions.md#enabletransitgatewayroutetablepropagation)
- [EnableVgwRoutePropagation](AwsEc2Actions.md#enablevgwroutepropagation)
- [EnableVolumeIO](AwsEc2Actions.md#enablevolumeio)
- [EnableVpcClassicLink](AwsEc2Actions.md#enablevpcclassiclink)
- [EnableVpcClassicLinkDnsSupport](AwsEc2Actions.md#enablevpcclassiclinkdnssupport)
- [ExportClientVpnClientCertificateRevocationList](AwsEc2Actions.md#exportclientvpnclientcertificaterevocationlist)
- [ExportClientVpnClientConfiguration](AwsEc2Actions.md#exportclientvpnclientconfiguration)
- [ExportImage](AwsEc2Actions.md#exportimage)
- [ExportTransitGatewayRoutes](AwsEc2Actions.md#exporttransitgatewayroutes)
- [GetAssociatedEnclaveCertificateIamRoles](AwsEc2Actions.md#getassociatedenclavecertificateiamroles)
- [GetAssociatedIpv6PoolCidrs](AwsEc2Actions.md#getassociatedipv6poolcidrs)
- [GetAwsNetworkPerformanceData](AwsEc2Actions.md#getawsnetworkperformancedata)
- [GetCapacityReservationUsage](AwsEc2Actions.md#getcapacityreservationusage)
- [GetCoipPoolUsage](AwsEc2Actions.md#getcoippoolusage)
- [GetConsoleOutput](AwsEc2Actions.md#getconsoleoutput)
- [GetConsoleScreenshot](AwsEc2Actions.md#getconsolescreenshot)
- [GetDefaultCreditSpecification](AwsEc2Actions.md#getdefaultcreditspecification)
- [GetEbsDefaultKmsKeyId](AwsEc2Actions.md#getebsdefaultkmskeyid)
- [GetEbsEncryptionByDefault](AwsEc2Actions.md#getebsencryptionbydefault)
- [GetFlowLogsIntegrationTemplate](AwsEc2Actions.md#getflowlogsintegrationtemplate)
- [GetGroupsForCapacityReservation](AwsEc2Actions.md#getgroupsforcapacityreservation)
- [GetHostReservationPurchasePreview](AwsEc2Actions.md#gethostreservationpurchasepreview)
- [GetImageBlockPublicAccessState](AwsEc2Actions.md#getimageblockpublicaccessstate)
- [GetInstanceTypesFromInstanceRequirements](AwsEc2Actions.md#getinstancetypesfrominstancerequirements)
- [GetInstanceUefiData](AwsEc2Actions.md#getinstanceuefidata)
- [GetIpamAddressHistory](AwsEc2Actions.md#getipamaddresshistory)
- [GetIpamDiscoveredAccounts](AwsEc2Actions.md#getipamdiscoveredaccounts)
- [GetIpamDiscoveredPublicAddresses](AwsEc2Actions.md#getipamdiscoveredpublicaddresses)
- [GetIpamDiscoveredResourceCidrs](AwsEc2Actions.md#getipamdiscoveredresourcecidrs)
- [GetIpamPoolAllocations](AwsEc2Actions.md#getipampoolallocations)
- [GetIpamPoolCidrs](AwsEc2Actions.md#getipampoolcidrs)
- [GetIpamResourceCidrs](AwsEc2Actions.md#getipamresourcecidrs)
- [GetLaunchTemplateData](AwsEc2Actions.md#getlaunchtemplatedata)
- [GetManagedPrefixListAssociations](AwsEc2Actions.md#getmanagedprefixlistassociations)
- [GetManagedPrefixListEntries](AwsEc2Actions.md#getmanagedprefixlistentries)
- [GetNetworkInsightsAccessScopeAnalysisFindings](AwsEc2Actions.md#getnetworkinsightsaccessscopeanalysisfindings)
- [GetNetworkInsightsAccessScopeContent](AwsEc2Actions.md#getnetworkinsightsaccessscopecontent)
- [GetPasswordData](AwsEc2Actions.md#getpassworddata)
- [GetReservedInstancesExchangeQuote](AwsEc2Actions.md#getreservedinstancesexchangequote)
- [GetResourcePolicy](AwsEc2Actions.md#getresourcepolicy)
- [GetSecurityGroupsForVpc](AwsEc2Actions.md#getsecuritygroupsforvpc)
- [GetSerialConsoleAccessStatus](AwsEc2Actions.md#getserialconsoleaccessstatus)
- [GetSnapshotBlockPublicAccessState](AwsEc2Actions.md#getsnapshotblockpublicaccessstate)
- [GetSpotPlacementScores](AwsEc2Actions.md#getspotplacementscores)
- [GetSubnetCidrReservations](AwsEc2Actions.md#getsubnetcidrreservations)
- [GetTransitGatewayAttachmentPropagations](AwsEc2Actions.md#gettransitgatewayattachmentpropagations)
- [GetTransitGatewayMulticastDomainAssociations](AwsEc2Actions.md#gettransitgatewaymulticastdomainassociations)
- [GetTransitGatewayPolicyTableAssociations](AwsEc2Actions.md#gettransitgatewaypolicytableassociations)
- [GetTransitGatewayPolicyTableEntries](AwsEc2Actions.md#gettransitgatewaypolicytableentries)
- [GetTransitGatewayPrefixListReferences](AwsEc2Actions.md#gettransitgatewayprefixlistreferences)
- [GetTransitGatewayRouteTableAssociations](AwsEc2Actions.md#gettransitgatewayroutetableassociations)
- [GetTransitGatewayRouteTablePropagations](AwsEc2Actions.md#gettransitgatewayroutetablepropagations)
- [GetVerifiedAccessEndpointPolicy](AwsEc2Actions.md#getverifiedaccessendpointpolicy)
- [GetVerifiedAccessGroupPolicy](AwsEc2Actions.md#getverifiedaccessgrouppolicy)
- [GetVerifiedAccessInstanceWebAcl](AwsEc2Actions.md#getverifiedaccessinstancewebacl)
- [GetVpnConnectionDeviceSampleConfiguration](AwsEc2Actions.md#getvpnconnectiondevicesampleconfiguration)
- [GetVpnConnectionDeviceTypes](AwsEc2Actions.md#getvpnconnectiondevicetypes)
- [GetVpnTunnelReplacementStatus](AwsEc2Actions.md#getvpntunnelreplacementstatus)
- [ImportByoipCidrToIpam](AwsEc2Actions.md#importbyoipcidrtoipam)
- [ImportClientVpnClientCertificateRevocationList](AwsEc2Actions.md#importclientvpnclientcertificaterevocationlist)
- [ImportImage](AwsEc2Actions.md#importimage)
- [ImportInstance](AwsEc2Actions.md#importinstance)
- [ImportKeyPair](AwsEc2Actions.md#importkeypair)
- [ImportSnapshot](AwsEc2Actions.md#importsnapshot)
- [ImportVolume](AwsEc2Actions.md#importvolume)
- [InjectApiError](AwsEc2Actions.md#injectapierror)
- [ListImagesInRecycleBin](AwsEc2Actions.md#listimagesinrecyclebin)
- [ListSnapshotsInRecycleBin](AwsEc2Actions.md#listsnapshotsinrecyclebin)
- [LockSnapshot](AwsEc2Actions.md#locksnapshot)
- [ModifyAddressAttribute](AwsEc2Actions.md#modifyaddressattribute)
- [ModifyAvailabilityZoneGroup](AwsEc2Actions.md#modifyavailabilityzonegroup)
- [ModifyCapacityReservation](AwsEc2Actions.md#modifycapacityreservation)
- [ModifyCapacityReservationFleet](AwsEc2Actions.md#modifycapacityreservationfleet)
- [ModifyClientVpnEndpoint](AwsEc2Actions.md#modifyclientvpnendpoint)
- [ModifyDefaultCreditSpecification](AwsEc2Actions.md#modifydefaultcreditspecification)
- [ModifyEbsDefaultKmsKeyId](AwsEc2Actions.md#modifyebsdefaultkmskeyid)
- [ModifyFleet](AwsEc2Actions.md#modifyfleet)
- [ModifyFpgaImageAttribute](AwsEc2Actions.md#modifyfpgaimageattribute)
- [ModifyHosts](AwsEc2Actions.md#modifyhosts)
- [ModifyIdFormat](AwsEc2Actions.md#modifyidformat)
- [ModifyIdentityIdFormat](AwsEc2Actions.md#modifyidentityidformat)
- [ModifyImageAttribute](AwsEc2Actions.md#modifyimageattribute)
- [ModifyInstanceAttribute](AwsEc2Actions.md#modifyinstanceattribute)
- [ModifyInstanceCapacityReservationAttributes](AwsEc2Actions.md#modifyinstancecapacityreservationattributes)
- [ModifyInstanceCreditSpecification](AwsEc2Actions.md#modifyinstancecreditspecification)
- [ModifyInstanceEventStartTime](AwsEc2Actions.md#modifyinstanceeventstarttime)
- [ModifyInstanceEventWindow](AwsEc2Actions.md#modifyinstanceeventwindow)
- [ModifyInstanceMaintenanceOptions](AwsEc2Actions.md#modifyinstancemaintenanceoptions)
- [ModifyInstanceMetadataOptions](AwsEc2Actions.md#modifyinstancemetadataoptions)
- [ModifyInstancePlacement](AwsEc2Actions.md#modifyinstanceplacement)
- [ModifyIpam](AwsEc2Actions.md#modifyipam)
- [ModifyIpamPool](AwsEc2Actions.md#modifyipampool)
- [ModifyIpamResourceCidr](AwsEc2Actions.md#modifyipamresourcecidr)
- [ModifyIpamResourceDiscovery](AwsEc2Actions.md#modifyipamresourcediscovery)
- [ModifyIpamScope](AwsEc2Actions.md#modifyipamscope)
- [ModifyLaunchTemplate](AwsEc2Actions.md#modifylaunchtemplate)
- [ModifyLocalGatewayRoute](AwsEc2Actions.md#modifylocalgatewayroute)
- [ModifyManagedPrefixList](AwsEc2Actions.md#modifymanagedprefixlist)
- [ModifyNetworkInterfaceAttribute](AwsEc2Actions.md#modifynetworkinterfaceattribute)
- [ModifyPrivateDnsNameOptions](AwsEc2Actions.md#modifyprivatednsnameoptions)
- [ModifyReservedInstances](AwsEc2Actions.md#modifyreservedinstances)
- [ModifySecurityGroupRules](AwsEc2Actions.md#modifysecuritygrouprules)
- [ModifySnapshotAttribute](AwsEc2Actions.md#modifysnapshotattribute)
- [ModifySnapshotTier](AwsEc2Actions.md#modifysnapshottier)
- [ModifySpotFleetRequest](AwsEc2Actions.md#modifyspotfleetrequest)
- [ModifySubnetAttribute](AwsEc2Actions.md#modifysubnetattribute)
- [ModifyTrafficMirrorFilterNetworkServices](AwsEc2Actions.md#modifytrafficmirrorfilternetworkservices)
- [ModifyTrafficMirrorFilterRule](AwsEc2Actions.md#modifytrafficmirrorfilterrule)
- [ModifyTrafficMirrorSession](AwsEc2Actions.md#modifytrafficmirrorsession)
- [ModifyTransitGateway](AwsEc2Actions.md#modifytransitgateway)
- [ModifyTransitGatewayPrefixListReference](AwsEc2Actions.md#modifytransitgatewayprefixlistreference)
- [ModifyTransitGatewayVpcAttachment](AwsEc2Actions.md#modifytransitgatewayvpcattachment)
- [ModifyVerifiedAccessEndpoint](AwsEc2Actions.md#modifyverifiedaccessendpoint)
- [ModifyVerifiedAccessEndpointPolicy](AwsEc2Actions.md#modifyverifiedaccessendpointpolicy)
- [ModifyVerifiedAccessGroup](AwsEc2Actions.md#modifyverifiedaccessgroup)
- [ModifyVerifiedAccessGroupPolicy](AwsEc2Actions.md#modifyverifiedaccessgrouppolicy)
- [ModifyVerifiedAccessInstance](AwsEc2Actions.md#modifyverifiedaccessinstance)
- [ModifyVerifiedAccessInstanceLoggingConfiguration](AwsEc2Actions.md#modifyverifiedaccessinstanceloggingconfiguration)
- [ModifyVerifiedAccessTrustProvider](AwsEc2Actions.md#modifyverifiedaccesstrustprovider)
- [ModifyVolume](AwsEc2Actions.md#modifyvolume)
- [ModifyVolumeAttribute](AwsEc2Actions.md#modifyvolumeattribute)
- [ModifyVpcAttribute](AwsEc2Actions.md#modifyvpcattribute)
- [ModifyVpcEndpoint](AwsEc2Actions.md#modifyvpcendpoint)
- [ModifyVpcEndpointConnectionNotification](AwsEc2Actions.md#modifyvpcendpointconnectionnotification)
- [ModifyVpcEndpointServiceConfiguration](AwsEc2Actions.md#modifyvpcendpointserviceconfiguration)
- [ModifyVpcEndpointServicePayerResponsibility](AwsEc2Actions.md#modifyvpcendpointservicepayerresponsibility)
- [ModifyVpcEndpointServicePermissions](AwsEc2Actions.md#modifyvpcendpointservicepermissions)
- [ModifyVpcPeeringConnectionOptions](AwsEc2Actions.md#modifyvpcpeeringconnectionoptions)
- [ModifyVpcTenancy](AwsEc2Actions.md#modifyvpctenancy)
- [ModifyVpnConnection](AwsEc2Actions.md#modifyvpnconnection)
- [ModifyVpnConnectionOptions](AwsEc2Actions.md#modifyvpnconnectionoptions)
- [ModifyVpnTunnelCertificate](AwsEc2Actions.md#modifyvpntunnelcertificate)
- [ModifyVpnTunnelOptions](AwsEc2Actions.md#modifyvpntunneloptions)
- [MonitorInstances](AwsEc2Actions.md#monitorinstances)
- [MoveAddressToVpc](AwsEc2Actions.md#moveaddresstovpc)
- [MoveByoipCidrToIpam](AwsEc2Actions.md#movebyoipcidrtoipam)
- [PauseVolumeIO](AwsEc2Actions.md#pausevolumeio)
- [ProvisionByoipCidr](AwsEc2Actions.md#provisionbyoipcidr)
- [ProvisionIpamByoasn](AwsEc2Actions.md#provisionipambyoasn)
- [ProvisionIpamPoolCidr](AwsEc2Actions.md#provisionipampoolcidr)
- [ProvisionPublicIpv4PoolCidr](AwsEc2Actions.md#provisionpublicipv4poolcidr)
- [PurchaseCapacityBlock](AwsEc2Actions.md#purchasecapacityblock)
- [PurchaseHostReservation](AwsEc2Actions.md#purchasehostreservation)
- [PurchaseReservedInstancesOffering](AwsEc2Actions.md#purchasereservedinstancesoffering)
- [PurchaseScheduledInstances](AwsEc2Actions.md#purchasescheduledinstances)
- [PutResourcePolicy](AwsEc2Actions.md#putresourcepolicy)
- [RebootInstances](AwsEc2Actions.md#rebootinstances)
- [RegisterImage](AwsEc2Actions.md#registerimage)
- [RegisterInstanceEventNotificationAttributes](AwsEc2Actions.md#registerinstanceeventnotificationattributes)
- [RegisterTransitGatewayMulticastGroupMembers](AwsEc2Actions.md#registertransitgatewaymulticastgroupmembers)
- [RegisterTransitGatewayMulticastGroupSources](AwsEc2Actions.md#registertransitgatewaymulticastgroupsources)
- [RejectTransitGatewayMulticastDomainAssociations](AwsEc2Actions.md#rejecttransitgatewaymulticastdomainassociations)
- [RejectTransitGatewayPeeringAttachment](AwsEc2Actions.md#rejecttransitgatewaypeeringattachment)
- [RejectTransitGatewayVpcAttachment](AwsEc2Actions.md#rejecttransitgatewayvpcattachment)
- [RejectVpcEndpointConnections](AwsEc2Actions.md#rejectvpcendpointconnections)
- [RejectVpcPeeringConnection](AwsEc2Actions.md#rejectvpcpeeringconnection)
- [ReleaseAddress](AwsEc2Actions.md#releaseaddress)
- [ReleaseHosts](AwsEc2Actions.md#releasehosts)
- [ReleaseIpamPoolAllocation](AwsEc2Actions.md#releaseipampoolallocation)
- [ReplaceIamInstanceProfileAssociation](AwsEc2Actions.md#replaceiaminstanceprofileassociation)
- [ReplaceNetworkAclAssociation](AwsEc2Actions.md#replacenetworkaclassociation)
- [ReplaceNetworkAclEntry](AwsEc2Actions.md#replacenetworkaclentry)
- [ReplaceRoute](AwsEc2Actions.md#replaceroute)
- [ReplaceRouteTableAssociation](AwsEc2Actions.md#replaceroutetableassociation)
- [ReplaceTransitGatewayRoute](AwsEc2Actions.md#replacetransitgatewayroute)
- [ReplaceVpnTunnel](AwsEc2Actions.md#replacevpntunnel)
- [ReportInstanceStatus](AwsEc2Actions.md#reportinstancestatus)
- [RequestSpotFleet](AwsEc2Actions.md#requestspotfleet)
- [RequestSpotInstances](AwsEc2Actions.md#requestspotinstances)
- [ResetAddressAttribute](AwsEc2Actions.md#resetaddressattribute)
- [ResetEbsDefaultKmsKeyId](AwsEc2Actions.md#resetebsdefaultkmskeyid)
- [ResetFpgaImageAttribute](AwsEc2Actions.md#resetfpgaimageattribute)
- [ResetImageAttribute](AwsEc2Actions.md#resetimageattribute)
- [ResetInstanceAttribute](AwsEc2Actions.md#resetinstanceattribute)
- [ResetNetworkInterfaceAttribute](AwsEc2Actions.md#resetnetworkinterfaceattribute)
- [ResetSnapshotAttribute](AwsEc2Actions.md#resetsnapshotattribute)
- [RestoreAddressToClassic](AwsEc2Actions.md#restoreaddresstoclassic)
- [RestoreImageFromRecycleBin](AwsEc2Actions.md#restoreimagefromrecyclebin)
- [RestoreManagedPrefixListVersion](AwsEc2Actions.md#restoremanagedprefixlistversion)
- [RestoreSnapshotFromRecycleBin](AwsEc2Actions.md#restoresnapshotfromrecyclebin)
- [RestoreSnapshotTier](AwsEc2Actions.md#restoresnapshottier)
- [RevokeClientVpnIngress](AwsEc2Actions.md#revokeclientvpningress)
- [RevokeSecurityGroupEgress](AwsEc2Actions.md#revokesecuritygroupegress)
- [RevokeSecurityGroupIngress](AwsEc2Actions.md#revokesecuritygroupingress)
- [RunInstances](AwsEc2Actions.md#runinstances)
- [RunScheduledInstances](AwsEc2Actions.md#runscheduledinstances)
- [SearchLocalGatewayRoutes](AwsEc2Actions.md#searchlocalgatewayroutes)
- [SearchTransitGatewayMulticastGroups](AwsEc2Actions.md#searchtransitgatewaymulticastgroups)
- [SearchTransitGatewayRoutes](AwsEc2Actions.md#searchtransitgatewayroutes)
- [SendDiagnosticInterrupt](AwsEc2Actions.md#senddiagnosticinterrupt)
- [SendSpotInstanceInterruptions](AwsEc2Actions.md#sendspotinstanceinterruptions)
- [StartInstances](AwsEc2Actions.md#startinstances)
- [StartNetworkInsightsAccessScopeAnalysis](AwsEc2Actions.md#startnetworkinsightsaccessscopeanalysis)
- [StartNetworkInsightsAnalysis](AwsEc2Actions.md#startnetworkinsightsanalysis)
- [StartVpcEndpointServicePrivateDnsVerification](AwsEc2Actions.md#startvpcendpointserviceprivatednsverification)
- [StopInstances](AwsEc2Actions.md#stopinstances)
- [TerminateClientVpnConnections](AwsEc2Actions.md#terminateclientvpnconnections)
- [TerminateInstances](AwsEc2Actions.md#terminateinstances)
- [UnassignIpv6Addresses](AwsEc2Actions.md#unassignipv6addresses)
- [UnassignPrivateIpAddresses](AwsEc2Actions.md#unassignprivateipaddresses)
- [UnassignPrivateNatGatewayAddress](AwsEc2Actions.md#unassignprivatenatgatewayaddress)
- [UnlockSnapshot](AwsEc2Actions.md#unlocksnapshot)
- [UnmonitorInstances](AwsEc2Actions.md#unmonitorinstances)
- [UpdateSecurityGroupRuleDescriptionsEgress](AwsEc2Actions.md#updatesecuritygroupruledescriptionsegress)
- [UpdateSecurityGroupRuleDescriptionsIngress](AwsEc2Actions.md#updatesecuritygroupruledescriptionsingress)
- [WithdrawByoipCidr](AwsEc2Actions.md#withdrawbyoipcidr)

## Enumeration Members

### AcceptAddressTransfer

• **AcceptAddressTransfer** = ``"ec2:AcceptAddressTransfer"``

Grants permission to accept an Elastic IP address transfer

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptAddressTransfer.html

#### Defined in

actions/ec2.ts:17

___

### AcceptReservedInstancesExchangeQuote

• **AcceptReservedInstancesExchangeQuote** = ``"ec2:AcceptReservedInstancesExchangeQuote"``

Grants permission to accept a Convertible Reserved Instance exchange quote

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptReservedInstancesExchangeQuote.html

#### Defined in

actions/ec2.ts:23

___

### AcceptTransitGatewayMulticastDomainAssociations

• **AcceptTransitGatewayMulticastDomainAssociations** = ``"ec2:AcceptTransitGatewayMulticastDomainAssociations"``

Grants permission to accept a request to associate subnets with a transit gatew
ay multicast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptTransitGatewayMulticastDomainAssociations.html

#### Defined in

actions/ec2.ts:30

___

### AcceptTransitGatewayPeeringAttachment

• **AcceptTransitGatewayPeeringAttachment** = ``"ec2:AcceptTransitGatewayPeeringAttachment"``

Grants permission to accept a transit gateway peering attachment request

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptTransitGatewayPeeringAttachment.html

#### Defined in

actions/ec2.ts:36

___

### AcceptTransitGatewayVpcAttachment

• **AcceptTransitGatewayVpcAttachment** = ``"ec2:AcceptTransitGatewayVpcAttachment"``

Grants permission to accept a request to attach a VPC to a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptTransitGatewayVpcAttachment.html

#### Defined in

actions/ec2.ts:42

___

### AcceptVpcEndpointConnections

• **AcceptVpcEndpointConnections** = ``"ec2:AcceptVpcEndpointConnections"``

Grants permission to accept one or more interface VPC endpoint connections to y
our VPC endpoint service

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptVpcEndpointConnections.html

#### Defined in

actions/ec2.ts:49

___

### AcceptVpcPeeringConnection

• **AcceptVpcPeeringConnection** = ``"ec2:AcceptVpcPeeringConnection"``

Grants permission to accept a VPC peering connection request

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptVpcPeeringConnection.html

#### Defined in

actions/ec2.ts:55

___

### AdvertiseByoipCidr

• **AdvertiseByoipCidr** = ``"ec2:AdvertiseByoipCidr"``

Grants permission to advertise an IP address range that is provisioned for use
in AWS through bring your own IP addresses (BYOIP)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AdvertiseByoipCidr.html

#### Defined in

actions/ec2.ts:62

___

### AllocateAddress

• **AllocateAddress** = ``"ec2:AllocateAddress"``

Grants permission to allocate an Elastic IP address (EIP) to your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateAddress.html

#### Defined in

actions/ec2.ts:68

___

### AllocateHosts

• **AllocateHosts** = ``"ec2:AllocateHosts"``

Grants permission to allocate a Dedicated Host to your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateHosts.html

#### Defined in

actions/ec2.ts:74

___

### AllocateIpamPoolCidr

• **AllocateIpamPoolCidr** = ``"ec2:AllocateIpamPoolCidr"``

Grants permission to allocate a CIDR from an Amazon VPC IP Address Manager (IPA
M) pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateIpamPoolCidr.html

#### Defined in

actions/ec2.ts:81

___

### ApplySecurityGroupsToClientVpnTargetNetwork

• **ApplySecurityGroupsToClientVpnTargetNetwork** = ``"ec2:ApplySecurityGroupsToClientVpnTargetNetwork"``

Grants permission to apply a security group to the association between a Client
VPN endpoint and a target network

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ApplySecurityGroupsToClientVpnTargetNetwork.html

#### Defined in

actions/ec2.ts:88

___

### AssignIpv6Addresses

• **AssignIpv6Addresses** = ``"ec2:AssignIpv6Addresses"``

Grants permission to assign one or more IPv6 addresses to a network interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssignIpv6Addresses.html

#### Defined in

actions/ec2.ts:94

___

### AssignPrivateIpAddresses

• **AssignPrivateIpAddresses** = ``"ec2:AssignPrivateIpAddresses"``

Grants permission to assign one or more secondary private IP addresses to a net
work interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssignPrivateIpAddresses.html

#### Defined in

actions/ec2.ts:101

___

### AssignPrivateNatGatewayAddress

• **AssignPrivateNatGatewayAddress** = ``"ec2:AssignPrivateNatGatewayAddress"``

Grants permission to assign one or more secondary private IP addresses to a pri
vate NAT gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssignPrivateNatGatewayAddress.html

#### Defined in

actions/ec2.ts:108

___

### AssociateAddress

• **AssociateAddress** = ``"ec2:AssociateAddress"``

Grants permission to associate an Elastic IP address (EIP) with an instance or
a network interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateAddress.html

#### Defined in

actions/ec2.ts:115

___

### AssociateClientVpnTargetNetwork

• **AssociateClientVpnTargetNetwork** = ``"ec2:AssociateClientVpnTargetNetwork"``

Grants permission to associate a target network with a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateClientVpnTargetNetwork.html

#### Defined in

actions/ec2.ts:121

___

### AssociateDhcpOptions

• **AssociateDhcpOptions** = ``"ec2:AssociateDhcpOptions"``

Grants permission to associate or disassociate a set of DHCP options with a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateDhcpOptions.html

#### Defined in

actions/ec2.ts:127

___

### AssociateEnclaveCertificateIamRole

• **AssociateEnclaveCertificateIamRole** = ``"ec2:AssociateEnclaveCertificateIamRole"``

Grants permission to associate an ACM certificate with an IAM role to be used i
n an EC2 Enclave

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateEnclaveCertificateIamRole.html

#### Defined in

actions/ec2.ts:134

___

### AssociateIamInstanceProfile

• **AssociateIamInstanceProfile** = ``"ec2:AssociateIamInstanceProfile"``

Grants permission to associate an IAM instance profile with a running or stoppe
d instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html

#### Defined in

actions/ec2.ts:141

___

### AssociateInstanceEventWindow

• **AssociateInstanceEventWindow** = ``"ec2:AssociateInstanceEventWindow"``

Grants permission to associate one or more targets with an event window

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateInstanceEventWindow.html

#### Defined in

actions/ec2.ts:147

___

### AssociateIpamByoasn

• **AssociateIpamByoasn** = ``"ec2:AssociateIpamByoasn"``

Grants permission to associate an Autonomous System Number (ASN) with a BYOIP C
IDR

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIpamByoasn.html

#### Defined in

actions/ec2.ts:154

___

### AssociateIpamResourceDiscovery

• **AssociateIpamResourceDiscovery** = ``"ec2:AssociateIpamResourceDiscovery"``

Grants permission to associate an IPAM resource discovery with an Amazon VPC IP
AM

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIpamResourceDiscovery.html

#### Defined in

actions/ec2.ts:161

___

### AssociateNatGatewayAddress

• **AssociateNatGatewayAddress** = ``"ec2:AssociateNatGatewayAddress"``

Grants permission to associate an Elastic IP address and private IP address wit
h a public Nat gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateNatGatewayAddress.html

#### Defined in

actions/ec2.ts:168

___

### AssociateRouteTable

• **AssociateRouteTable** = ``"ec2:AssociateRouteTable"``

Grants permission to associate a subnet or gateway with a route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateRouteTable.html

#### Defined in

actions/ec2.ts:174

___

### AssociateSubnetCidrBlock

• **AssociateSubnetCidrBlock** = ``"ec2:AssociateSubnetCidrBlock"``

Grants permission to associate a CIDR block with a subnet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateSubnetCidrBlock.html

#### Defined in

actions/ec2.ts:180

___

### AssociateTransitGatewayMulticastDomain

• **AssociateTransitGatewayMulticastDomain** = ``"ec2:AssociateTransitGatewayMulticastDomain"``

Grants permission to associate an attachment and list of subnets with a transit
gateway multicast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTransitGatewayMulticastDomain.html

#### Defined in

actions/ec2.ts:187

___

### AssociateTransitGatewayPolicyTable

• **AssociateTransitGatewayPolicyTable** = ``"ec2:AssociateTransitGatewayPolicyTable"``

Grants permission to associate a policy table with a transit gateway attachment

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTransitGatewayPolicyTable.html

#### Defined in

actions/ec2.ts:193

___

### AssociateTransitGatewayRouteTable

• **AssociateTransitGatewayRouteTable** = ``"ec2:AssociateTransitGatewayRouteTable"``

Grants permission to associate an attachment with a transit gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTransitGatewayRouteTable.html

#### Defined in

actions/ec2.ts:199

___

### AssociateTrunkInterface

• **AssociateTrunkInterface** = ``"ec2:AssociateTrunkInterface"``

Grants permission to associate a branch network interface with a trunk network
interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTrunkInterface.html

#### Defined in

actions/ec2.ts:206

___

### AssociateVerifiedAccessInstanceWebAcl

• **AssociateVerifiedAccessInstanceWebAcl** = ``"ec2:AssociateVerifiedAccessInstanceWebAcl"``

Grants permission to associate an AWS Web Application Firewall (WAF) web access
control list (ACL) with a Verified Access instance

See https://docs.aws.amazon.com/verified-access/latest/ug/waf-integration.html

#### Defined in

actions/ec2.ts:213

___

### AssociateVpcCidrBlock

• **AssociateVpcCidrBlock** = ``"ec2:AssociateVpcCidrBlock"``

Grants permission to associate a CIDR block with a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateVpcCidrBlock.html

#### Defined in

actions/ec2.ts:219

___

### AttachClassicLinkVpc

• **AttachClassicLinkVpc** = ``"ec2:AttachClassicLinkVpc"``

Grants permission to link an EC2-Classic instance to a ClassicLink-enabled VPC
through one or more of the VPC's security groups

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachClassicLinkVpc.html

#### Defined in

actions/ec2.ts:226

___

### AttachInternetGateway

• **AttachInternetGateway** = ``"ec2:AttachInternetGateway"``

Grants permission to attach an internet gateway to a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachInternetGateway.html

#### Defined in

actions/ec2.ts:232

___

### AttachNetworkInterface

• **AttachNetworkInterface** = ``"ec2:AttachNetworkInterface"``

Grants permission to attach a network interface to an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachNetworkInterface.html

#### Defined in

actions/ec2.ts:238

___

### AttachVerifiedAccessTrustProvider

• **AttachVerifiedAccessTrustProvider** = ``"ec2:AttachVerifiedAccessTrustProvider"``

Grants permission to attach a trust provider to a Verified Access instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVerifiedAccessTrustProvider.html

#### Defined in

actions/ec2.ts:244

___

### AttachVolume

• **AttachVolume** = ``"ec2:AttachVolume"``

Grants permission to attach an EBS volume to a running or stopped instance and
expose it to the instance with the specified device name

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVolume.html

#### Defined in

actions/ec2.ts:251

___

### AttachVpnGateway

• **AttachVpnGateway** = ``"ec2:AttachVpnGateway"``

Grants permission to attach a virtual private gateway to a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVpnGateway.html

#### Defined in

actions/ec2.ts:257

___

### AuthorizeClientVpnIngress

• **AuthorizeClientVpnIngress** = ``"ec2:AuthorizeClientVpnIngress"``

Grants permission to add an inbound authorization rule to a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeClientVpnIngress.html

#### Defined in

actions/ec2.ts:263

___

### AuthorizeSecurityGroupEgress

• **AuthorizeSecurityGroupEgress** = ``"ec2:AuthorizeSecurityGroupEgress"``

Grants permission to add one or more outbound rules to a VPC security group. Po
licies using the security-group-rule resource-level permission are only enforce
d when the API request includes TagSpecifications

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupEgress.html

#### Defined in

actions/ec2.ts:271

___

### AuthorizeSecurityGroupIngress

• **AuthorizeSecurityGroupIngress** = ``"ec2:AuthorizeSecurityGroupIngress"``

Grants permission to add one or more inbound rules to a VPC security group. Pol
icies using the security-group-rule resource-level permission are only enforced
when the API request includes TagSpecifications

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupIngress.html

#### Defined in

actions/ec2.ts:279

___

### BundleInstance

• **BundleInstance** = ``"ec2:BundleInstance"``

Grants permission to bundle an instance store-backed Windows instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BundleInstance.html

#### Defined in

actions/ec2.ts:285

___

### CancelBundleTask

• **CancelBundleTask** = ``"ec2:CancelBundleTask"``

Grants permission to cancel a bundling operation

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelBundleTask.html

#### Defined in

actions/ec2.ts:291

___

### CancelCapacityReservation

• **CancelCapacityReservation** = ``"ec2:CancelCapacityReservation"``

Grants permission to cancel a Capacity Reservation and release the reserved cap
acity

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelCapacityReservation.html

#### Defined in

actions/ec2.ts:298

___

### CancelCapacityReservationFleets

• **CancelCapacityReservationFleets** = ``"ec2:CancelCapacityReservationFleets"``

Grants permission to cancel one or more Capacity Reservation Fleets

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelCapacityReservationFleets.html

#### Defined in

actions/ec2.ts:304

___

### CancelConversionTask

• **CancelConversionTask** = ``"ec2:CancelConversionTask"``

Grants permission to cancel an active conversion task

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelConversionTask.html

#### Defined in

actions/ec2.ts:310

___

### CancelExportTask

• **CancelExportTask** = ``"ec2:CancelExportTask"``

Grants permission to cancel an active export task

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelExportTask.html

#### Defined in

actions/ec2.ts:316

___

### CancelImageLaunchPermission

• **CancelImageLaunchPermission** = ``"ec2:CancelImageLaunchPermission"``

Grants permission to remove your AWS account from the launch permissions for th
e specified AMI

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelImageLaunchPermission.html

#### Defined in

actions/ec2.ts:323

___

### CancelImportTask

• **CancelImportTask** = ``"ec2:CancelImportTask"``

Grants permission to cancel an in-process import virtual machine or import snap
shot task

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelImportTask.html

#### Defined in

actions/ec2.ts:330

___

### CancelReservedInstancesListing

• **CancelReservedInstancesListing** = ``"ec2:CancelReservedInstancesListing"``

Grants permission to cancel a Reserved Instance listing on the Reserved Instanc
e Marketplace

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelReservedInstancesListing.html

#### Defined in

actions/ec2.ts:337

___

### CancelSpotFleetRequests

• **CancelSpotFleetRequests** = ``"ec2:CancelSpotFleetRequests"``

Grants permission to cancel one or more Spot Fleet requests

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests.html

#### Defined in

actions/ec2.ts:343

___

### CancelSpotInstanceRequests

• **CancelSpotInstanceRequests** = ``"ec2:CancelSpotInstanceRequests"``

Grants permission to cancel one or more Spot Instance requests

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotInstanceRequests.html

#### Defined in

actions/ec2.ts:349

___

### ConfirmProductInstance

• **ConfirmProductInstance** = ``"ec2:ConfirmProductInstance"``

Grants permission to determine whether an owned product code is associated with
an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ConfirmProductInstance.html

#### Defined in

actions/ec2.ts:356

___

### CopyFpgaImage

• **CopyFpgaImage** = ``"ec2:CopyFpgaImage"``

Grants permission to copy a source Amazon FPGA image (AFI) to the current Regio
n. Resource-level permissions specified for this action apply to the new AFI on
ly. They do not apply to the source AFI

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopyFpgaImage.html

#### Defined in

actions/ec2.ts:364

___

### CopyImage

• **CopyImage** = ``"ec2:CopyImage"``

Grants permission to copy an Amazon Machine Image (AMI) from a source Region to
the current Region. Resource-level permissions specified for this action apply
to the new AMI only. They do not apply to the source AMI

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopyImage.html

#### Defined in

actions/ec2.ts:372

___

### CopySnapshot

• **CopySnapshot** = ``"ec2:CopySnapshot"``

Grants permission to copy a point-in-time snapshot of an EBS volume and store i
t in Amazon S3. Resource-level permissions specified for this action apply to t
he new snapshot only. They do not apply to the source snapshot

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopySnapshot.html

#### Defined in

actions/ec2.ts:380

___

### CreateCapacityReservation

• **CreateCapacityReservation** = ``"ec2:CreateCapacityReservation"``

Grants permission to create a Capacity Reservation

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCapacityReservation.html

#### Defined in

actions/ec2.ts:386

___

### CreateCapacityReservationFleet

• **CreateCapacityReservationFleet** = ``"ec2:CreateCapacityReservationFleet"``

Grants permission to create a Capacity Reservation Fleet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCapacityReservationFleet.html

#### Defined in

actions/ec2.ts:392

___

### CreateCarrierGateway

• **CreateCarrierGateway** = ``"ec2:CreateCarrierGateway"``

Grants permission to create a carrier gateway and provides CSP connectivity to
VPC customers

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCarrierGateway.html

#### Defined in

actions/ec2.ts:399

___

### CreateClientVpnEndpoint

• **CreateClientVpnEndpoint** = ``"ec2:CreateClientVpnEndpoint"``

Grants permission to create a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateClientVpnEndpoint.html

#### Defined in

actions/ec2.ts:405

___

### CreateClientVpnRoute

• **CreateClientVpnRoute** = ``"ec2:CreateClientVpnRoute"``

Grants permission to add a network route to a Client VPN endpoint's route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateClientVpnRoute.html

#### Defined in

actions/ec2.ts:411

___

### CreateCoipCidr

• **CreateCoipCidr** = ``"ec2:CreateCoipCidr"``

Grants permission to create a range of customer-owned IP (CoIP) addresses

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCoipCidr.html

#### Defined in

actions/ec2.ts:417

___

### CreateCoipPool

• **CreateCoipPool** = ``"ec2:CreateCoipPool"``

Grants permission to create a pool of customer-owned IP (CoIP) addresses

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCoipPool.html

#### Defined in

actions/ec2.ts:423

___

### CreateCoipPoolPermission

• **CreateCoipPoolPermission** = ``"ec2:CreateCoipPoolPermission"``

Grants permission to allow a service to access a customer-owned IP (CoIP) pool

See https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html

#### Defined in

actions/ec2.ts:429

___

### CreateCustomerGateway

• **CreateCustomerGateway** = ``"ec2:CreateCustomerGateway"``

Grants permission to create a customer gateway, which provides information to A
WS about your customer gateway device

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCustomerGateway.html

#### Defined in

actions/ec2.ts:436

___

### CreateDefaultSubnet

• **CreateDefaultSubnet** = ``"ec2:CreateDefaultSubnet"``

Grants permission to create a default subnet in a specified Availability Zone i
n a default VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDefaultSubnet.html

#### Defined in

actions/ec2.ts:443

___

### CreateDefaultVpc

• **CreateDefaultVpc** = ``"ec2:CreateDefaultVpc"``

Grants permission to create a default VPC with a default subnet in each Availab
ility Zone

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDefaultVpc.html

#### Defined in

actions/ec2.ts:450

___

### CreateDhcpOptions

• **CreateDhcpOptions** = ``"ec2:CreateDhcpOptions"``

Grants permission to create a set of DHCP options for a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDhcpOptions.html

#### Defined in

actions/ec2.ts:456

___

### CreateEgressOnlyInternetGateway

• **CreateEgressOnlyInternetGateway** = ``"ec2:CreateEgressOnlyInternetGateway"``

Grants permission to create an egress-only internet gateway for a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateEgressOnlyInternetGateway.html

#### Defined in

actions/ec2.ts:462

___

### CreateFleet

• **CreateFleet** = ``"ec2:CreateFleet"``

Grants permission to launch an EC2 Fleet. Resource-level permissions for this a
ction do not include the resources specified in a launch template. To specify r
esource-level permissions for resources specified in a launch template, you mus
t include the resources in the RunInstances action statement

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html

#### Defined in

actions/ec2.ts:471

___

### CreateFlowLogs

• **CreateFlowLogs** = ``"ec2:CreateFlowLogs"``

Grants permission to create one or more flow logs to capture IP traffic for a n
etwork interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFlowLogs.html

#### Defined in

actions/ec2.ts:478

___

### CreateFpgaImage

• **CreateFpgaImage** = ``"ec2:CreateFpgaImage"``

Grants permission to create an Amazon FPGA Image (AFI) from a design checkpoint
(DCP)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFpgaImage.html

#### Defined in

actions/ec2.ts:485

___

### CreateImage

• **CreateImage** = ``"ec2:CreateImage"``

Grants permission to create an Amazon EBS-backed AMI from a stopped or running
Amazon EBS-backed instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html

#### Defined in

actions/ec2.ts:492

___

### CreateInstanceConnectEndpoint

• **CreateInstanceConnectEndpoint** = ``"ec2:CreateInstanceConnectEndpoint"``

Grants permission to create an EC2 Instance Connect Endpoint that allows you to
connect to an instance without a public IPv4 address

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInstanceConnectEndpoint.html

#### Defined in

actions/ec2.ts:499

___

### CreateInstanceEventWindow

• **CreateInstanceEventWindow** = ``"ec2:CreateInstanceEventWindow"``

Grants permission to create an event window in which scheduled events for the a
ssociated Amazon EC2 instances can run

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInstanceEventWindow.html

#### Defined in

actions/ec2.ts:506

___

### CreateInstanceExportTask

• **CreateInstanceExportTask** = ``"ec2:CreateInstanceExportTask"``

Grants permission to export a running or stopped instance to an Amazon S3 bucke
t

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInstanceExportTask.html

#### Defined in

actions/ec2.ts:513

___

### CreateInternetGateway

• **CreateInternetGateway** = ``"ec2:CreateInternetGateway"``

Grants permission to create an internet gateway for a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInternetGateway.html

#### Defined in

actions/ec2.ts:519

___

### CreateIpam

• **CreateIpam** = ``"ec2:CreateIpam"``

Grants permission to create an Amazon VPC IP Address Manager (IPAM)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateIpam.html

#### Defined in

actions/ec2.ts:525

___

### CreateIpamPool

• **CreateIpamPool** = ``"ec2:CreateIpamPool"``

Grants permission to create an IP address pool for Amazon VPC IP Address Manage
r (IPAM), which is a collection of contiguous IP address CIDRs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateIpamPool.html

#### Defined in

actions/ec2.ts:532

___

### CreateIpamResourceDiscovery

• **CreateIpamResourceDiscovery** = ``"ec2:CreateIpamResourceDiscovery"``

Grants permission to create an IPAM resource discovery

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateIpamResourceDiscovery.html

#### Defined in

actions/ec2.ts:538

___

### CreateIpamScope

• **CreateIpamScope** = ``"ec2:CreateIpamScope"``

Grants permission to create an Amazon VPC IP Address Manager (IPAM) scope, whic
h is the highest-level container within IPAM

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateIpamScope.html

#### Defined in

actions/ec2.ts:545

___

### CreateKeyPair

• **CreateKeyPair** = ``"ec2:CreateKeyPair"``

Grants permission to create a 2048-bit RSA key pair

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html

#### Defined in

actions/ec2.ts:551

___

### CreateLaunchTemplate

• **CreateLaunchTemplate** = ``"ec2:CreateLaunchTemplate"``

Grants permission to create a launch template

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html

#### Defined in

actions/ec2.ts:557

___

### CreateLaunchTemplateVersion

• **CreateLaunchTemplateVersion** = ``"ec2:CreateLaunchTemplateVersion"``

Grants permission to create a new version of a launch template

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplateVersion.html

#### Defined in

actions/ec2.ts:563

___

### CreateLocalGatewayRoute

• **CreateLocalGatewayRoute** = ``"ec2:CreateLocalGatewayRoute"``

Grants permission to create a static route for a local gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLocalGatewayRoute.html

#### Defined in

actions/ec2.ts:569

___

### CreateLocalGatewayRouteTable

• **CreateLocalGatewayRouteTable** = ``"ec2:CreateLocalGatewayRouteTable"``

Grants permission to create a local gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLocalGatewayRouteTable.html

#### Defined in

actions/ec2.ts:575

___

### CreateLocalGatewayRouteTablePermission

• **CreateLocalGatewayRouteTablePermission** = ``"ec2:CreateLocalGatewayRouteTablePermission"``

Grants permission to allow a service to access a local gateway route table

See https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html

#### Defined in

actions/ec2.ts:581

___

### CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation

• **CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation** = ``"ec2:CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation"``

Grants permission to create a local gateway route table virtual interface group
association

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation.html

#### Defined in

actions/ec2.ts:588

___

### CreateLocalGatewayRouteTableVpcAssociation

• **CreateLocalGatewayRouteTableVpcAssociation** = ``"ec2:CreateLocalGatewayRouteTableVpcAssociation"``

Grants permission to associate a VPC with a local gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLocalGatewayRouteTableVpcAssociation.html

#### Defined in

actions/ec2.ts:594

___

### CreateManagedPrefixList

• **CreateManagedPrefixList** = ``"ec2:CreateManagedPrefixList"``

Grants permission to create a managed prefix list

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateManagedPrefixList.html

#### Defined in

actions/ec2.ts:600

___

### CreateNatGateway

• **CreateNatGateway** = ``"ec2:CreateNatGateway"``

Grants permission to create a NAT gateway in a subnet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNatGateway.html

#### Defined in

actions/ec2.ts:606

___

### CreateNetworkAcl

• **CreateNetworkAcl** = ``"ec2:CreateNetworkAcl"``

Grants permission to create a network ACL in a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkAcl.html

#### Defined in

actions/ec2.ts:612

___

### CreateNetworkAclEntry

• **CreateNetworkAclEntry** = ``"ec2:CreateNetworkAclEntry"``

Grants permission to create a numbered entry (a rule) in a network ACL

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkAclEntry.html

#### Defined in

actions/ec2.ts:618

___

### CreateNetworkInsightsAccessScope

• **CreateNetworkInsightsAccessScope** = ``"ec2:CreateNetworkInsightsAccessScope"``

Grants permission to create a Network Access Scope

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInsightsAccessScope.html

#### Defined in

actions/ec2.ts:624

___

### CreateNetworkInsightsPath

• **CreateNetworkInsightsPath** = ``"ec2:CreateNetworkInsightsPath"``

Grants permission to create a path to analyze for reachability

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInsightsPath.html

#### Defined in

actions/ec2.ts:630

___

### CreateNetworkInterface

• **CreateNetworkInterface** = ``"ec2:CreateNetworkInterface"``

Grants permission to create a network interface in a subnet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html

#### Defined in

actions/ec2.ts:636

___

### CreateNetworkInterfacePermission

• **CreateNetworkInterfacePermission** = ``"ec2:CreateNetworkInterfacePermission"``

Grants permission to create a permission for an AWS-authorized user to perform
certain operations on a network interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterfacePermission.html

#### Defined in

actions/ec2.ts:643

___

### CreatePlacementGroup

• **CreatePlacementGroup** = ``"ec2:CreatePlacementGroup"``

Grants permission to create a placement group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreatePlacementGroup.html

#### Defined in

actions/ec2.ts:649

___

### CreatePublicIpv4Pool

• **CreatePublicIpv4Pool** = ``"ec2:CreatePublicIpv4Pool"``

Grants permission to create a public IPv4 address pool for public IPv4 CIDRs th
at you own and bring to Amazon to manage with Amazon VPC IP Address Manager (IP
AM)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreatePublicIpv4Pool.html

#### Defined in

actions/ec2.ts:657

___

### CreateReplaceRootVolumeTask

• **CreateReplaceRootVolumeTask** = ``"ec2:CreateReplaceRootVolumeTask"``

Grants permission to create a root volume replacement task

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateReplaceRootVolumeTask.html

#### Defined in

actions/ec2.ts:663

___

### CreateReservedInstancesListing

• **CreateReservedInstancesListing** = ``"ec2:CreateReservedInstancesListing"``

Grants permission to create a listing for Standard Reserved Instances to be sol
d in the Reserved Instance Marketplace

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateReservedInstancesListing.html

#### Defined in

actions/ec2.ts:670

___

### CreateRestoreImageTask

• **CreateRestoreImageTask** = ``"ec2:CreateRestoreImageTask"``

Grants permission to start a task that restores an AMI from an S3 object previo
usly created by using CreateStoreImageTask

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRestoreImageTask.html

#### Defined in

actions/ec2.ts:677

___

### CreateRoute

• **CreateRoute** = ``"ec2:CreateRoute"``

Grants permission to create a route in a VPC route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRoute.html

#### Defined in

actions/ec2.ts:683

___

### CreateRouteTable

• **CreateRouteTable** = ``"ec2:CreateRouteTable"``

Grants permission to create a route table for a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRouteTable.html

#### Defined in

actions/ec2.ts:689

___

### CreateSecurityGroup

• **CreateSecurityGroup** = ``"ec2:CreateSecurityGroup"``

Grants permission to create a security group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html

#### Defined in

actions/ec2.ts:695

___

### CreateSnapshot

• **CreateSnapshot** = ``"ec2:CreateSnapshot"``

Grants permission to create a snapshot of an EBS volume and store it in Amazon
S3

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshot.html

#### Defined in

actions/ec2.ts:702

___

### CreateSnapshots

• **CreateSnapshots** = ``"ec2:CreateSnapshots"``

Grants permission to create crash-consistent snapshots of multiple EBS volumes
and store them in Amazon S3

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshots.html

#### Defined in

actions/ec2.ts:709

___

### CreateSpotDatafeedSubscription

• **CreateSpotDatafeedSubscription** = ``"ec2:CreateSpotDatafeedSubscription"``

Grants permission to create a data feed for Spot Instances to view Spot Instanc
e usage logs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSpotDatafeedSubscription.html

#### Defined in

actions/ec2.ts:716

___

### CreateStoreImageTask

• **CreateStoreImageTask** = ``"ec2:CreateStoreImageTask"``

Grants permission to store an AMI as a single object in an S3 bucket

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html

#### Defined in

actions/ec2.ts:722

___

### CreateSubnet

• **CreateSubnet** = ``"ec2:CreateSubnet"``

Grants permission to create a subnet in a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnet.html

#### Defined in

actions/ec2.ts:728

___

### CreateSubnetCidrReservation

• **CreateSubnetCidrReservation** = ``"ec2:CreateSubnetCidrReservation"``

Grants permission to create a subnet CIDR reservation

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnetCidrReservation.html

#### Defined in

actions/ec2.ts:734

___

### CreateTags

• **CreateTags** = ``"ec2:CreateTags"``

Grants permission to add or overwrite one or more tags for Amazon EC2 resources

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html

#### Defined in

actions/ec2.ts:740

___

### CreateTrafficMirrorFilter

• **CreateTrafficMirrorFilter** = ``"ec2:CreateTrafficMirrorFilter"``

Grants permission to create a traffic mirror filter

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilter.html

#### Defined in

actions/ec2.ts:746

___

### CreateTrafficMirrorFilterRule

• **CreateTrafficMirrorFilterRule** = ``"ec2:CreateTrafficMirrorFilterRule"``

Grants permission to create a traffic mirror filter rule

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilterRule.html

#### Defined in

actions/ec2.ts:752

___

### CreateTrafficMirrorSession

• **CreateTrafficMirrorSession** = ``"ec2:CreateTrafficMirrorSession"``

Grants permission to create a traffic mirror session

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorSession.html

#### Defined in

actions/ec2.ts:758

___

### CreateTrafficMirrorTarget

• **CreateTrafficMirrorTarget** = ``"ec2:CreateTrafficMirrorTarget"``

Grants permission to create a traffic mirror target

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorTarget.html

#### Defined in

actions/ec2.ts:764

___

### CreateTransitGateway

• **CreateTransitGateway** = ``"ec2:CreateTransitGateway"``

Grants permission to create a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGateway.html

#### Defined in

actions/ec2.ts:770

___

### CreateTransitGatewayConnect

• **CreateTransitGatewayConnect** = ``"ec2:CreateTransitGatewayConnect"``

Grants permission to create a Connect attachment from a specified transit gatew
ay attachment

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayConnect.html

#### Defined in

actions/ec2.ts:777

___

### CreateTransitGatewayConnectPeer

• **CreateTransitGatewayConnectPeer** = ``"ec2:CreateTransitGatewayConnectPeer"``

Grants permission to create a Connect peer between a transit gateway and an app
liance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayConnectPeer.html

#### Defined in

actions/ec2.ts:784

___

### CreateTransitGatewayMulticastDomain

• **CreateTransitGatewayMulticastDomain** = ``"ec2:CreateTransitGatewayMulticastDomain"``

Grants permission to create a multicast domain for a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayMulticastDomain.html

#### Defined in

actions/ec2.ts:790

___

### CreateTransitGatewayPeeringAttachment

• **CreateTransitGatewayPeeringAttachment** = ``"ec2:CreateTransitGatewayPeeringAttachment"``

Grants permission to request a transit gateway peering attachment between a req
uester and accepter transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayPeeringAttachment.html

#### Defined in

actions/ec2.ts:797

___

### CreateTransitGatewayPolicyTable

• **CreateTransitGatewayPolicyTable** = ``"ec2:CreateTransitGatewayPolicyTable"``

Grants permission to create a transit gateway policy table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayPolicyTable.html

#### Defined in

actions/ec2.ts:803

___

### CreateTransitGatewayPrefixListReference

• **CreateTransitGatewayPrefixListReference** = ``"ec2:CreateTransitGatewayPrefixListReference"``

Grants permission to create a transit gateway prefix list reference

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayPrefixListReference.html

#### Defined in

actions/ec2.ts:809

___

### CreateTransitGatewayRoute

• **CreateTransitGatewayRoute** = ``"ec2:CreateTransitGatewayRoute"``

Grants permission to create a static route for a transit gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayRoute.html

#### Defined in

actions/ec2.ts:815

___

### CreateTransitGatewayRouteTable

• **CreateTransitGatewayRouteTable** = ``"ec2:CreateTransitGatewayRouteTable"``

Grants permission to create a route table for a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayRouteTable.html

#### Defined in

actions/ec2.ts:821

___

### CreateTransitGatewayRouteTableAnnouncement

• **CreateTransitGatewayRouteTableAnnouncement** = ``"ec2:CreateTransitGatewayRouteTableAnnouncement"``

Grants permission to create an announcement for a transit gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayRouteTableAnnouncement.html

#### Defined in

actions/ec2.ts:827

___

### CreateTransitGatewayVpcAttachment

• **CreateTransitGatewayVpcAttachment** = ``"ec2:CreateTransitGatewayVpcAttachment"``

Grants permission to attach a VPC to a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayVpcAttachment.html

#### Defined in

actions/ec2.ts:833

___

### CreateVerifiedAccessEndpoint

• **CreateVerifiedAccessEndpoint** = ``"ec2:CreateVerifiedAccessEndpoint"``

Grants permission to create a Verified Access endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVerifiedAccessEndpoint.html

#### Defined in

actions/ec2.ts:839

___

### CreateVerifiedAccessGroup

• **CreateVerifiedAccessGroup** = ``"ec2:CreateVerifiedAccessGroup"``

Grants permission to create a Verified Access group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVerifiedAccessGroup.html

#### Defined in

actions/ec2.ts:845

___

### CreateVerifiedAccessInstance

• **CreateVerifiedAccessInstance** = ``"ec2:CreateVerifiedAccessInstance"``

Grants permission to create a Verified Access instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVerifiedAccessInstance.html

#### Defined in

actions/ec2.ts:851

___

### CreateVerifiedAccessTrustProvider

• **CreateVerifiedAccessTrustProvider** = ``"ec2:CreateVerifiedAccessTrustProvider"``

Grants permission to create a verified trust provider

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVerifiedAccessTrustProvider.html

#### Defined in

actions/ec2.ts:857

___

### CreateVolume

• **CreateVolume** = ``"ec2:CreateVolume"``

Grants permission to create an EBS volume

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html

#### Defined in

actions/ec2.ts:863

___

### CreateVpc

• **CreateVpc** = ``"ec2:CreateVpc"``

Grants permission to create a VPC with a specified CIDR block

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpc.html

#### Defined in

actions/ec2.ts:869

___

### CreateVpcEndpoint

• **CreateVpcEndpoint** = ``"ec2:CreateVpcEndpoint"``

Grants permission to create a VPC endpoint for an AWS service

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpoint.html

#### Defined in

actions/ec2.ts:875

___

### CreateVpcEndpointConnectionNotification

• **CreateVpcEndpointConnectionNotification** = ``"ec2:CreateVpcEndpointConnectionNotification"``

Grants permission to create a connection notification for a VPC endpoint or VPC
endpoint service

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html

#### Defined in

actions/ec2.ts:882

___

### CreateVpcEndpointServiceConfiguration

• **CreateVpcEndpointServiceConfiguration** = ``"ec2:CreateVpcEndpointServiceConfiguration"``

Grants permission to create a VPC endpoint service configuration to which servi
ce consumers (AWS accounts, IAM users, and IAM roles) can connect

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointServiceConfiguration.html

#### Defined in

actions/ec2.ts:889

___

### CreateVpcPeeringConnection

• **CreateVpcPeeringConnection** = ``"ec2:CreateVpcPeeringConnection"``

Grants permission to request a VPC peering connection between two VPCs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcPeeringConnection.html

#### Defined in

actions/ec2.ts:895

___

### CreateVpnConnection

• **CreateVpnConnection** = ``"ec2:CreateVpnConnection"``

Grants permission to create a VPN connection between a virtual private gateway
or transit gateway and a customer gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnection.html

#### Defined in

actions/ec2.ts:902

___

### CreateVpnConnectionRoute

• **CreateVpnConnectionRoute** = ``"ec2:CreateVpnConnectionRoute"``

Grants permission to create a static route for a VPN connection between a virtu
al private gateway and a customer gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnectionRoute.html

#### Defined in

actions/ec2.ts:909

___

### CreateVpnGateway

• **CreateVpnGateway** = ``"ec2:CreateVpnGateway"``

Grants permission to create a virtual private gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnGateway.html

#### Defined in

actions/ec2.ts:915

___

### DeleteCarrierGateway

• **DeleteCarrierGateway** = ``"ec2:DeleteCarrierGateway"``

Grants permission to delete a carrier gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCarrierGateway.html

#### Defined in

actions/ec2.ts:921

___

### DeleteClientVpnEndpoint

• **DeleteClientVpnEndpoint** = ``"ec2:DeleteClientVpnEndpoint"``

Grants permission to delete a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteClientVpnEndpoint.html

#### Defined in

actions/ec2.ts:927

___

### DeleteClientVpnRoute

• **DeleteClientVpnRoute** = ``"ec2:DeleteClientVpnRoute"``

Grants permission to delete a route from a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteClientVpnRoute.html

#### Defined in

actions/ec2.ts:933

___

### DeleteCoipCidr

• **DeleteCoipCidr** = ``"ec2:DeleteCoipCidr"``

Grants permission to delete a range of customer-owned IP (CoIP) addresses

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCoipCidr.html

#### Defined in

actions/ec2.ts:939

___

### DeleteCoipPool

• **DeleteCoipPool** = ``"ec2:DeleteCoipPool"``

Grants permission to delete a pool of customer-owned IP (CoIP) addresses

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCoipPool.html

#### Defined in

actions/ec2.ts:945

___

### DeleteCoipPoolPermission

• **DeleteCoipPoolPermission** = ``"ec2:DeleteCoipPoolPermission"``

Grants permission to deny a service from accessing a customer-owned IP (CoIP) p
ool

See https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html

#### Defined in

actions/ec2.ts:952

___

### DeleteCustomerGateway

• **DeleteCustomerGateway** = ``"ec2:DeleteCustomerGateway"``

Grants permission to delete a customer gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCustomerGateway.html

#### Defined in

actions/ec2.ts:958

___

### DeleteDhcpOptions

• **DeleteDhcpOptions** = ``"ec2:DeleteDhcpOptions"``

Grants permission to delete a set of DHCP options

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteDhcpOptions.html

#### Defined in

actions/ec2.ts:964

___

### DeleteEgressOnlyInternetGateway

• **DeleteEgressOnlyInternetGateway** = ``"ec2:DeleteEgressOnlyInternetGateway"``

Grants permission to delete an egress-only internet gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteEgressOnlyInternetGateway.html

#### Defined in

actions/ec2.ts:970

___

### DeleteFleets

• **DeleteFleets** = ``"ec2:DeleteFleets"``

Grants permission to delete one or more EC2 Fleets

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFleets.html

#### Defined in

actions/ec2.ts:976

___

### DeleteFlowLogs

• **DeleteFlowLogs** = ``"ec2:DeleteFlowLogs"``

Grants permission to delete one or more flow logs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFlowLogs.html

#### Defined in

actions/ec2.ts:982

___

### DeleteFpgaImage

• **DeleteFpgaImage** = ``"ec2:DeleteFpgaImage"``

Grants permission to delete an Amazon FPGA Image (AFI)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFpgaImage.html

#### Defined in

actions/ec2.ts:988

___

### DeleteInstanceConnectEndpoint

• **DeleteInstanceConnectEndpoint** = ``"ec2:DeleteInstanceConnectEndpoint"``

Grants permission to delete an EC2 Instance Connect Endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInstanceConnectEndpoint.html

#### Defined in

actions/ec2.ts:994

___

### DeleteInstanceEventWindow

• **DeleteInstanceEventWindow** = ``"ec2:DeleteInstanceEventWindow"``

Grants permission to delete the specified event window

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInstanceEventWindow.html

#### Defined in

actions/ec2.ts:1000

___

### DeleteInternetGateway

• **DeleteInternetGateway** = ``"ec2:DeleteInternetGateway"``

Grants permission to delete an internet gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInternetGateway.html

#### Defined in

actions/ec2.ts:1006

___

### DeleteIpam

• **DeleteIpam** = ``"ec2:DeleteIpam"``

Grants permission to delete an Amazon VPC IP Address Manager (IPAM) and remove
all monitored data associated with the IPAM including the historical data for C
IDRs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteIpam.html

#### Defined in

actions/ec2.ts:1014

___

### DeleteIpamPool

• **DeleteIpamPool** = ``"ec2:DeleteIpamPool"``

Grants permission to delete an Amazon VPC IP Address Manager (IPAM) pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteIpamPool.html

#### Defined in

actions/ec2.ts:1020

___

### DeleteIpamResourceDiscovery

• **DeleteIpamResourceDiscovery** = ``"ec2:DeleteIpamResourceDiscovery"``

Grants permission to delete an IPAM resource discovery

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteIpamResourceDiscovery.html

#### Defined in

actions/ec2.ts:1026

___

### DeleteIpamScope

• **DeleteIpamScope** = ``"ec2:DeleteIpamScope"``

Grants permission to delete the scope for an Amazon VPC IP Address Manager (IPA
M)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteIpamScope.html

#### Defined in

actions/ec2.ts:1033

___

### DeleteKeyPair

• **DeleteKeyPair** = ``"ec2:DeleteKeyPair"``

Grants permission to delete a  key pair by removing the public key from Amazon
EC2

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteKeyPair.html

#### Defined in

actions/ec2.ts:1040

___

### DeleteLaunchTemplate

• **DeleteLaunchTemplate** = ``"ec2:DeleteLaunchTemplate"``

Grants permission to delete a launch template and its associated versions

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLaunchTemplate.html

#### Defined in

actions/ec2.ts:1046

___

### DeleteLaunchTemplateVersions

• **DeleteLaunchTemplateVersions** = ``"ec2:DeleteLaunchTemplateVersions"``

Grants permission to delete one or more versions of a launch template

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLaunchTemplateVersions.html

#### Defined in

actions/ec2.ts:1052

___

### DeleteLocalGatewayRoute

• **DeleteLocalGatewayRoute** = ``"ec2:DeleteLocalGatewayRoute"``

Grants permission to delete a route from a local gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLocalGatewayRoute.html

#### Defined in

actions/ec2.ts:1058

___

### DeleteLocalGatewayRouteTable

• **DeleteLocalGatewayRouteTable** = ``"ec2:DeleteLocalGatewayRouteTable"``

Grants permission to delete a local gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLocalGatewayRouteTable.html

#### Defined in

actions/ec2.ts:1064

___

### DeleteLocalGatewayRouteTablePermission

• **DeleteLocalGatewayRouteTablePermission** = ``"ec2:DeleteLocalGatewayRouteTablePermission"``

Grants permission to deny a service from accessing a local gateway route table

See https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html

#### Defined in

actions/ec2.ts:1070

___

### DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation

• **DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation** = ``"ec2:DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation"``

Grants permission to delete a local gateway route table virtual interface group
association

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation.html

#### Defined in

actions/ec2.ts:1077

___

### DeleteLocalGatewayRouteTableVpcAssociation

• **DeleteLocalGatewayRouteTableVpcAssociation** = ``"ec2:DeleteLocalGatewayRouteTableVpcAssociation"``

Grants permission to delete an association between a VPC and local gateway rout
e table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLocalGatewayRouteTableVpcAssociation.html

#### Defined in

actions/ec2.ts:1084

___

### DeleteManagedPrefixList

• **DeleteManagedPrefixList** = ``"ec2:DeleteManagedPrefixList"``

Grants permission to delete a managed prefix list

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteManagedPrefixList.html

#### Defined in

actions/ec2.ts:1090

___

### DeleteNatGateway

• **DeleteNatGateway** = ``"ec2:DeleteNatGateway"``

Grants permission to delete a NAT gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNatGateway.html

#### Defined in

actions/ec2.ts:1096

___

### DeleteNetworkAcl

• **DeleteNetworkAcl** = ``"ec2:DeleteNetworkAcl"``

Grants permission to delete a network ACL

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkAcl.html

#### Defined in

actions/ec2.ts:1102

___

### DeleteNetworkAclEntry

• **DeleteNetworkAclEntry** = ``"ec2:DeleteNetworkAclEntry"``

Grants permission to delete an inbound or outbound entry (rule) from a network
ACL

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkAclEntry.html

#### Defined in

actions/ec2.ts:1109

___

### DeleteNetworkInsightsAccessScope

• **DeleteNetworkInsightsAccessScope** = ``"ec2:DeleteNetworkInsightsAccessScope"``

Grants permission to delete a Network Access Scope

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInsightsAccessScope.html

#### Defined in

actions/ec2.ts:1115

___

### DeleteNetworkInsightsAccessScopeAnalysis

• **DeleteNetworkInsightsAccessScopeAnalysis** = ``"ec2:DeleteNetworkInsightsAccessScopeAnalysis"``

Grants permission to delete a Network Access Scope analysis

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInsightsAccessScopeAnalysis.html

#### Defined in

actions/ec2.ts:1121

___

### DeleteNetworkInsightsAnalysis

• **DeleteNetworkInsightsAnalysis** = ``"ec2:DeleteNetworkInsightsAnalysis"``

Grants permission to delete a network insights analysis

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInsightsAnalysis.html

#### Defined in

actions/ec2.ts:1127

___

### DeleteNetworkInsightsPath

• **DeleteNetworkInsightsPath** = ``"ec2:DeleteNetworkInsightsPath"``

Grants permission to delete a network insights path

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInsightsPath.html

#### Defined in

actions/ec2.ts:1133

___

### DeleteNetworkInterface

• **DeleteNetworkInterface** = ``"ec2:DeleteNetworkInterface"``

Grants permission to delete a detached network interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInterface.html

#### Defined in

actions/ec2.ts:1139

___

### DeleteNetworkInterfacePermission

• **DeleteNetworkInterfacePermission** = ``"ec2:DeleteNetworkInterfacePermission"``

Grants permission to delete a permission that is associated with a network inte
rface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInterfacePermission.html

#### Defined in

actions/ec2.ts:1146

___

### DeletePlacementGroup

• **DeletePlacementGroup** = ``"ec2:DeletePlacementGroup"``

Grants permission to delete a placement group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeletePlacementGroup.html

#### Defined in

actions/ec2.ts:1152

___

### DeletePublicIpv4Pool

• **DeletePublicIpv4Pool** = ``"ec2:DeletePublicIpv4Pool"``

Grants permission to delete a public IPv4 address pool for public IPv4 CIDRs th
at you own and brought to Amazon to manage with Amazon VPC IP Address Manager (
IPAM)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeletePublicIpv4Pool.html

#### Defined in

actions/ec2.ts:1160

___

### DeleteQueuedReservedInstances

• **DeleteQueuedReservedInstances** = ``"ec2:DeleteQueuedReservedInstances"``

Grants permission to delete the queued purchases for the specified Reserved Ins
tances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteQueuedReservedInstances.html

#### Defined in

actions/ec2.ts:1167

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"ec2:DeleteResourcePolicy"``

Grants permission to remove an IAM policy that enables cross-account sharing fr
om a resource

See https://docs.aws.amazon.com/vpc/latest/ipam/share-pool-ipam.html

#### Defined in

actions/ec2.ts:1174

___

### DeleteRoute

• **DeleteRoute** = ``"ec2:DeleteRoute"``

Grants permission to delete a route from a route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html

#### Defined in

actions/ec2.ts:1180

___

### DeleteRouteTable

• **DeleteRouteTable** = ``"ec2:DeleteRouteTable"``

Grants permission to delete a route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRouteTable.html

#### Defined in

actions/ec2.ts:1186

___

### DeleteSecurityGroup

• **DeleteSecurityGroup** = ``"ec2:DeleteSecurityGroup"``

Grants permission to delete a security group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSecurityGroup.html

#### Defined in

actions/ec2.ts:1192

___

### DeleteSnapshot

• **DeleteSnapshot** = ``"ec2:DeleteSnapshot"``

Grants permission to delete a snapshot of an EBS volume

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html

#### Defined in

actions/ec2.ts:1198

___

### DeleteSpotDatafeedSubscription

• **DeleteSpotDatafeedSubscription** = ``"ec2:DeleteSpotDatafeedSubscription"``

Grants permission to delete a data feed for Spot Instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSpotDatafeedSubscription.html

#### Defined in

actions/ec2.ts:1204

___

### DeleteSubnet

• **DeleteSubnet** = ``"ec2:DeleteSubnet"``

Grants permission to delete a subnet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnet.html

#### Defined in

actions/ec2.ts:1210

___

### DeleteSubnetCidrReservation

• **DeleteSubnetCidrReservation** = ``"ec2:DeleteSubnetCidrReservation"``

Grants permission to delete a subnet CIDR reservation

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnetCidrReservation.html

#### Defined in

actions/ec2.ts:1216

___

### DeleteTags

• **DeleteTags** = ``"ec2:DeleteTags"``

Grants permission to delete one or more tags from Amazon EC2 resources

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTags.html

#### Defined in

actions/ec2.ts:1222

___

### DeleteTrafficMirrorFilter

• **DeleteTrafficMirrorFilter** = ``"ec2:DeleteTrafficMirrorFilter"``

Grants permission to delete a traffic mirror filter

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorFilter.html

#### Defined in

actions/ec2.ts:1228

___

### DeleteTrafficMirrorFilterRule

• **DeleteTrafficMirrorFilterRule** = ``"ec2:DeleteTrafficMirrorFilterRule"``

Grants permission to delete a traffic mirror filter rule

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorFilterRule.html

#### Defined in

actions/ec2.ts:1234

___

### DeleteTrafficMirrorSession

• **DeleteTrafficMirrorSession** = ``"ec2:DeleteTrafficMirrorSession"``

Grants permission to delete a traffic mirror session

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorSession.html

#### Defined in

actions/ec2.ts:1240

___

### DeleteTrafficMirrorTarget

• **DeleteTrafficMirrorTarget** = ``"ec2:DeleteTrafficMirrorTarget"``

Grants permission to delete a traffic mirror target

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorTarget.html

#### Defined in

actions/ec2.ts:1246

___

### DeleteTransitGateway

• **DeleteTransitGateway** = ``"ec2:DeleteTransitGateway"``

Grants permission to delete a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGateway.html

#### Defined in

actions/ec2.ts:1252

___

### DeleteTransitGatewayConnect

• **DeleteTransitGatewayConnect** = ``"ec2:DeleteTransitGatewayConnect"``

Grants permission to delete a transit gateway connect attachment

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayConnect.html

#### Defined in

actions/ec2.ts:1258

___

### DeleteTransitGatewayConnectPeer

• **DeleteTransitGatewayConnectPeer** = ``"ec2:DeleteTransitGatewayConnectPeer"``

Grants permission to delete a transit gateway connect peer

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayConnectPeer.html

#### Defined in

actions/ec2.ts:1264

___

### DeleteTransitGatewayMulticastDomain

• **DeleteTransitGatewayMulticastDomain** = ``"ec2:DeleteTransitGatewayMulticastDomain"``

Grants permission to delete a transit gateway multicast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayMulticastDomain.html

#### Defined in

actions/ec2.ts:1270

___

### DeleteTransitGatewayPeeringAttachment

• **DeleteTransitGatewayPeeringAttachment** = ``"ec2:DeleteTransitGatewayPeeringAttachment"``

Grants permission to delete a peering attachment from a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayPeeringAttachment.html

#### Defined in

actions/ec2.ts:1276

___

### DeleteTransitGatewayPolicyTable

• **DeleteTransitGatewayPolicyTable** = ``"ec2:DeleteTransitGatewayPolicyTable"``

Grants permission to delete a transit gateway policy table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayPolicyTable.html

#### Defined in

actions/ec2.ts:1282

___

### DeleteTransitGatewayPrefixListReference

• **DeleteTransitGatewayPrefixListReference** = ``"ec2:DeleteTransitGatewayPrefixListReference"``

Grants permission to delete a transit gateway prefix list reference

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayPrefixListReference.html

#### Defined in

actions/ec2.ts:1288

___

### DeleteTransitGatewayRoute

• **DeleteTransitGatewayRoute** = ``"ec2:DeleteTransitGatewayRoute"``

Grants permission to delete a route from a transit gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayRoute.html

#### Defined in

actions/ec2.ts:1294

___

### DeleteTransitGatewayRouteTable

• **DeleteTransitGatewayRouteTable** = ``"ec2:DeleteTransitGatewayRouteTable"``

Grants permission to delete a transit gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayRouteTable.html

#### Defined in

actions/ec2.ts:1300

___

### DeleteTransitGatewayRouteTableAnnouncement

• **DeleteTransitGatewayRouteTableAnnouncement** = ``"ec2:DeleteTransitGatewayRouteTableAnnouncement"``

Grants permission to delete a transit gateway route table announcement

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayRouteTableAnnouncement.html

#### Defined in

actions/ec2.ts:1306

___

### DeleteTransitGatewayVpcAttachment

• **DeleteTransitGatewayVpcAttachment** = ``"ec2:DeleteTransitGatewayVpcAttachment"``

Grants permission to delete a VPC attachment from a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayVpcAttachment.html

#### Defined in

actions/ec2.ts:1312

___

### DeleteVerifiedAccessEndpoint

• **DeleteVerifiedAccessEndpoint** = ``"ec2:DeleteVerifiedAccessEndpoint"``

Grants permission to delete a Verified Access endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVerifiedAccessEndpoint.html

#### Defined in

actions/ec2.ts:1318

___

### DeleteVerifiedAccessGroup

• **DeleteVerifiedAccessGroup** = ``"ec2:DeleteVerifiedAccessGroup"``

Grants permission to delete a Verified Access group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVerifiedAccessGroup.html

#### Defined in

actions/ec2.ts:1324

___

### DeleteVerifiedAccessInstance

• **DeleteVerifiedAccessInstance** = ``"ec2:DeleteVerifiedAccessInstance"``

Grants permission to delete a Verified Access instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVerifiedAccessInstance.html

#### Defined in

actions/ec2.ts:1330

___

### DeleteVerifiedAccessTrustProvider

• **DeleteVerifiedAccessTrustProvider** = ``"ec2:DeleteVerifiedAccessTrustProvider"``

Grants permission to delete a verified trust provider

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVerifiedAccessTrustProvider.html

#### Defined in

actions/ec2.ts:1336

___

### DeleteVolume

• **DeleteVolume** = ``"ec2:DeleteVolume"``

Grants permission to delete an EBS volume

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVolume.html

#### Defined in

actions/ec2.ts:1342

___

### DeleteVpc

• **DeleteVpc** = ``"ec2:DeleteVpc"``

Grants permission to delete a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpc.html

#### Defined in

actions/ec2.ts:1348

___

### DeleteVpcEndpointConnectionNotifications

• **DeleteVpcEndpointConnectionNotifications** = ``"ec2:DeleteVpcEndpointConnectionNotifications"``

Grants permission to delete one or more VPC endpoint connection notifications

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpointConnectionNotifications.html

#### Defined in

actions/ec2.ts:1354

___

### DeleteVpcEndpointServiceConfigurations

• **DeleteVpcEndpointServiceConfigurations** = ``"ec2:DeleteVpcEndpointServiceConfigurations"``

Grants permission to delete one or more VPC endpoint service configurations

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpointServiceConfigurations.html

#### Defined in

actions/ec2.ts:1360

___

### DeleteVpcEndpoints

• **DeleteVpcEndpoints** = ``"ec2:DeleteVpcEndpoints"``

Grants permission to delete one or more VPC endpoints

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpoints.html

#### Defined in

actions/ec2.ts:1366

___

### DeleteVpcPeeringConnection

• **DeleteVpcPeeringConnection** = ``"ec2:DeleteVpcPeeringConnection"``

Grants permission to delete a VPC peering connection

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcPeeringConnection.html

#### Defined in

actions/ec2.ts:1372

___

### DeleteVpnConnection

• **DeleteVpnConnection** = ``"ec2:DeleteVpnConnection"``

Grants permission to delete a VPN connection

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnConnection.html

#### Defined in

actions/ec2.ts:1378

___

### DeleteVpnConnectionRoute

• **DeleteVpnConnectionRoute** = ``"ec2:DeleteVpnConnectionRoute"``

Grants permission to delete a static route for a VPN connection between a virtu
al private gateway and a customer gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnConnectionRoute.html

#### Defined in

actions/ec2.ts:1385

___

### DeleteVpnGateway

• **DeleteVpnGateway** = ``"ec2:DeleteVpnGateway"``

Grants permission to delete a virtual private gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnGateway.html

#### Defined in

actions/ec2.ts:1391

___

### DeprovisionByoipCidr

• **DeprovisionByoipCidr** = ``"ec2:DeprovisionByoipCidr"``

Grants permission to release an IP address range that was provisioned through b
ring your own IP addresses (BYOIP), and to delete the corresponding address poo
l

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionByoipCidr.html

#### Defined in

actions/ec2.ts:1399

___

### DeprovisionIpamByoasn

• **DeprovisionIpamByoasn** = ``"ec2:DeprovisionIpamByoasn"``

Grants permission to deprovision an Autonomous System Number (ASN) from an Amaz
on Web Services account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionIpamByoasn.html

#### Defined in

actions/ec2.ts:1406

___

### DeprovisionIpamPoolCidr

• **DeprovisionIpamPoolCidr** = ``"ec2:DeprovisionIpamPoolCidr"``

Grants permission to deprovision a CIDR provisioned from an Amazon VPC IP Addre
ss Manager (IPAM) pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionIpamPoolCidr.html

#### Defined in

actions/ec2.ts:1413

___

### DeprovisionPublicIpv4PoolCidr

• **DeprovisionPublicIpv4PoolCidr** = ``"ec2:DeprovisionPublicIpv4PoolCidr"``

Grants permission to deprovision a CIDR from a public IPv4 pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionPublicIpv4PoolCidr.html

#### Defined in

actions/ec2.ts:1419

___

### DeregisterImage

• **DeregisterImage** = ``"ec2:DeregisterImage"``

Grants permission to deregister an Amazon Machine Image (AMI)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterImage.html

#### Defined in

actions/ec2.ts:1425

___

### DeregisterInstanceEventNotificationAttributes

• **DeregisterInstanceEventNotificationAttributes** = ``"ec2:DeregisterInstanceEventNotificationAttributes"``

Grants permission to remove tags from the set of tags to include in notificatio
ns about scheduled events for your instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterInstanceEventNotificationAttributes.html

#### Defined in

actions/ec2.ts:1432

___

### DeregisterTransitGatewayMulticastGroupMembers

• **DeregisterTransitGatewayMulticastGroupMembers** = ``"ec2:DeregisterTransitGatewayMulticastGroupMembers"``

Grants permission to deregister one or more network interface members from a gr
oup IP address in a transit gateway multicast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterTransitGatewayMulticastGroupMembers.html

#### Defined in

actions/ec2.ts:1439

___

### DeregisterTransitGatewayMulticastGroupSources

• **DeregisterTransitGatewayMulticastGroupSources** = ``"ec2:DeregisterTransitGatewayMulticastGroupSources"``

Grants permission to deregister one or more network interface sources from a gr
oup IP address in a transit gateway multicast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterTransitGatewayMulticastGroupSources.html

#### Defined in

actions/ec2.ts:1446

___

### DescribeAccountAttributes

• **DescribeAccountAttributes** = ``"ec2:DescribeAccountAttributes"``

Grants permission to describe the attributes of the AWS account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAccountAttributes.html

#### Defined in

actions/ec2.ts:1452

___

### DescribeAddressTransfers

• **DescribeAddressTransfers** = ``"ec2:DescribeAddressTransfers"``

Grants permission to describe an Elastic IP address transfer

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddressTransfers.html

#### Defined in

actions/ec2.ts:1458

___

### DescribeAddresses

• **DescribeAddresses** = ``"ec2:DescribeAddresses"``

Grants permission to describe one or more Elastic IP addresses

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddresses.html

#### Defined in

actions/ec2.ts:1464

___

### DescribeAddressesAttribute

• **DescribeAddressesAttribute** = ``"ec2:DescribeAddressesAttribute"``

Grants permission to describe the attributes of the specified Elastic IP addres
ses

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddressesAttribute.html

#### Defined in

actions/ec2.ts:1471

___

### DescribeAggregateIdFormat

• **DescribeAggregateIdFormat** = ``"ec2:DescribeAggregateIdFormat"``

Grants permission to describe the longer ID format settings for all resource ty
pes

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAggregateIdFormat.html

#### Defined in

actions/ec2.ts:1478

___

### DescribeAvailabilityZones

• **DescribeAvailabilityZones** = ``"ec2:DescribeAvailabilityZones"``

Grants permission to describe one or more of the Availability Zones that are av
ailable to you

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html

#### Defined in

actions/ec2.ts:1485

___

### DescribeAwsNetworkPerformanceMetricSubscriptions

• **DescribeAwsNetworkPerformanceMetricSubscriptions** = ``"ec2:DescribeAwsNetworkPerformanceMetricSubscriptions"``

Grants permission to describe the current infrastructure performance metric sub
scriptions

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAwsNetworkPerformanceMetricSubscriptions.html

#### Defined in

actions/ec2.ts:1492

___

### DescribeBundleTasks

• **DescribeBundleTasks** = ``"ec2:DescribeBundleTasks"``

Grants permission to describe one or more bundling tasks

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeBundleTasks.html

#### Defined in

actions/ec2.ts:1498

___

### DescribeByoipCidrs

• **DescribeByoipCidrs** = ``"ec2:DescribeByoipCidrs"``

Grants permission to describe the IP address ranges that were provisioned throu
gh bring your own IP addresses (BYOIP)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeByoipCidrs.html

#### Defined in

actions/ec2.ts:1505

___

### DescribeCapacityBlockOfferings

• **DescribeCapacityBlockOfferings** = ``"ec2:DescribeCapacityBlockOfferings"``

Grants permission to describe Capacity Block offerings available for purchase

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCapacityBlockOfferings.html

#### Defined in

actions/ec2.ts:1511

___

### DescribeCapacityReservationFleets

• **DescribeCapacityReservationFleets** = ``"ec2:DescribeCapacityReservationFleets"``

Grants permission to describe one or more Capacity Reservation Fleets

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCapacityReservationFleets.html

#### Defined in

actions/ec2.ts:1517

___

### DescribeCapacityReservations

• **DescribeCapacityReservations** = ``"ec2:DescribeCapacityReservations"``

Grants permission to describe one or more Capacity Reservations

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCapacityReservations.html

#### Defined in

actions/ec2.ts:1523

___

### DescribeCarrierGateways

• **DescribeCarrierGateways** = ``"ec2:DescribeCarrierGateways"``

Grants permission to describe one or more Carrier Gateways

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCarrierGateways.html

#### Defined in

actions/ec2.ts:1529

___

### DescribeClassicLinkInstances

• **DescribeClassicLinkInstances** = ``"ec2:DescribeClassicLinkInstances"``

Grants permission to describe one or more linked EC2-Classic instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClassicLinkInstances.html

#### Defined in

actions/ec2.ts:1535

___

### DescribeClientVpnAuthorizationRules

• **DescribeClientVpnAuthorizationRules** = ``"ec2:DescribeClientVpnAuthorizationRules"``

Grants permission to describe the authorization rules for a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnAuthorizationRules.html

#### Defined in

actions/ec2.ts:1541

___

### DescribeClientVpnConnections

• **DescribeClientVpnConnections** = ``"ec2:DescribeClientVpnConnections"``

Grants permission to describe active client connections and connections that ha
ve been terminated within the last 60 minutes for a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnConnections.html

#### Defined in

actions/ec2.ts:1548

___

### DescribeClientVpnEndpoints

• **DescribeClientVpnEndpoints** = ``"ec2:DescribeClientVpnEndpoints"``

Grants permission to describe one or more Client VPN endpoints

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnEndpoints.html

#### Defined in

actions/ec2.ts:1554

___

### DescribeClientVpnRoutes

• **DescribeClientVpnRoutes** = ``"ec2:DescribeClientVpnRoutes"``

Grants permission to describe the routes for a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnRoutes.html

#### Defined in

actions/ec2.ts:1560

___

### DescribeClientVpnTargetNetworks

• **DescribeClientVpnTargetNetworks** = ``"ec2:DescribeClientVpnTargetNetworks"``

Grants permission to describe the target networks that are associated with a Cl
ient VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnTargetNetworks.html

#### Defined in

actions/ec2.ts:1567

___

### DescribeCoipPools

• **DescribeCoipPools** = ``"ec2:DescribeCoipPools"``

Grants permission to describe the specified customer-owned address pools or all
of your customer-owned address pools

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCoipPools.html

#### Defined in

actions/ec2.ts:1574

___

### DescribeConversionTasks

• **DescribeConversionTasks** = ``"ec2:DescribeConversionTasks"``

Grants permission to describe one or more conversion tasks

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeConversionTasks.html

#### Defined in

actions/ec2.ts:1580

___

### DescribeCustomerGateways

• **DescribeCustomerGateways** = ``"ec2:DescribeCustomerGateways"``

Grants permission to describe one or more customer gateways

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCustomerGateways.html

#### Defined in

actions/ec2.ts:1586

___

### DescribeDhcpOptions

• **DescribeDhcpOptions** = ``"ec2:DescribeDhcpOptions"``

Grants permission to describe one or more DHCP options sets

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeDhcpOptions.html

#### Defined in

actions/ec2.ts:1592

___

### DescribeEgressOnlyInternetGateways

• **DescribeEgressOnlyInternetGateways** = ``"ec2:DescribeEgressOnlyInternetGateways"``

Grants permission to describe one or more egress-only internet gateways

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeEgressOnlyInternetGateways.html

#### Defined in

actions/ec2.ts:1598

___

### DescribeElasticGpus

• **DescribeElasticGpus** = ``"ec2:DescribeElasticGpus"``

Grants permission to describe an Elastic Graphics accelerator that is associate
d with an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeElasticGpus.html

#### Defined in

actions/ec2.ts:1605

___

### DescribeExportImageTasks

• **DescribeExportImageTasks** = ``"ec2:DescribeExportImageTasks"``

Grants permission to describe one or more export image tasks

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeExportImageTasks.html

#### Defined in

actions/ec2.ts:1611

___

### DescribeExportTasks

• **DescribeExportTasks** = ``"ec2:DescribeExportTasks"``

Grants permission to describe one or more export instance tasks

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeExportTasks.html

#### Defined in

actions/ec2.ts:1617

___

### DescribeFastLaunchImages

• **DescribeFastLaunchImages** = ``"ec2:DescribeFastLaunchImages"``

Grants permission to describe fast-launch enabled Windows AMIs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFastLaunchImages.html

#### Defined in

actions/ec2.ts:1623

___

### DescribeFastSnapshotRestores

• **DescribeFastSnapshotRestores** = ``"ec2:DescribeFastSnapshotRestores"``

Grants permission to describe the state of fast snapshot restores for snapshots

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFastSnapshotRestores.html

#### Defined in

actions/ec2.ts:1629

___

### DescribeFleetHistory

• **DescribeFleetHistory** = ``"ec2:DescribeFleetHistory"``

Grants permission to describe the events for an EC2 Fleet during a specified ti
me

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleetHistory.html

#### Defined in

actions/ec2.ts:1636

___

### DescribeFleetInstances

• **DescribeFleetInstances** = ``"ec2:DescribeFleetInstances"``

Grants permission to describe the running instances for an EC2 Fleet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleetInstances.html

#### Defined in

actions/ec2.ts:1642

___

### DescribeFleets

• **DescribeFleets** = ``"ec2:DescribeFleets"``

Grants permission to describe one or more EC2 Fleets

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleets.html

#### Defined in

actions/ec2.ts:1648

___

### DescribeFlowLogs

• **DescribeFlowLogs** = ``"ec2:DescribeFlowLogs"``

Grants permission to describe one or more flow logs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFlowLogs.html

#### Defined in

actions/ec2.ts:1654

___

### DescribeFpgaImageAttribute

• **DescribeFpgaImageAttribute** = ``"ec2:DescribeFpgaImageAttribute"``

Grants permission to describe the attributes of an Amazon FPGA Image (AFI)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFpgaImageAttribute.html

#### Defined in

actions/ec2.ts:1660

___

### DescribeFpgaImages

• **DescribeFpgaImages** = ``"ec2:DescribeFpgaImages"``

Grants permission to describe one or more Amazon FPGA Images (AFIs)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFpgaImages.html

#### Defined in

actions/ec2.ts:1666

___

### DescribeHostReservationOfferings

• **DescribeHostReservationOfferings** = ``"ec2:DescribeHostReservationOfferings"``

Grants permission to describe the Dedicated Host Reservations that are availabl
e to purchase

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHostReservationOfferings.html

#### Defined in

actions/ec2.ts:1673

___

### DescribeHostReservations

• **DescribeHostReservations** = ``"ec2:DescribeHostReservations"``

Grants permission to describe the Dedicated Host Reservations that are associat
ed with Dedicated Hosts in the AWS account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHostReservations.html

#### Defined in

actions/ec2.ts:1680

___

### DescribeHosts

• **DescribeHosts** = ``"ec2:DescribeHosts"``

Grants permission to describe one or more Dedicated Hosts

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHosts.html

#### Defined in

actions/ec2.ts:1686

___

### DescribeIamInstanceProfileAssociations

• **DescribeIamInstanceProfileAssociations** = ``"ec2:DescribeIamInstanceProfileAssociations"``

Grants permission to describe the IAM instance profile associations

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIamInstanceProfileAssociations.html

#### Defined in

actions/ec2.ts:1692

___

### DescribeIdFormat

• **DescribeIdFormat** = ``"ec2:DescribeIdFormat"``

Grants permission to describe the ID format settings for resources

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIdFormat.html

#### Defined in

actions/ec2.ts:1698

___

### DescribeIdentityIdFormat

• **DescribeIdentityIdFormat** = ``"ec2:DescribeIdentityIdFormat"``

Grants permission to describe the ID format settings for resources for an IAM u
ser, IAM role, or root user

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIdentityIdFormat.html

#### Defined in

actions/ec2.ts:1705

___

### DescribeImageAttribute

• **DescribeImageAttribute** = ``"ec2:DescribeImageAttribute"``

Grants permission to describe an attribute of an Amazon Machine Image (AMI)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImageAttribute.html

#### Defined in

actions/ec2.ts:1711

___

### DescribeImages

• **DescribeImages** = ``"ec2:DescribeImages"``

Grants permission to describe one or more images (AMIs, AKIs, and ARIs)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html

#### Defined in

actions/ec2.ts:1717

___

### DescribeImportImageTasks

• **DescribeImportImageTasks** = ``"ec2:DescribeImportImageTasks"``

Grants permission to describe import virtual machine or import snapshot tasks

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImportImageTasks.html

#### Defined in

actions/ec2.ts:1723

___

### DescribeImportSnapshotTasks

• **DescribeImportSnapshotTasks** = ``"ec2:DescribeImportSnapshotTasks"``

Grants permission to describe import snapshot tasks

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImportSnapshotTasks.html

#### Defined in

actions/ec2.ts:1729

___

### DescribeInstanceAttribute

• **DescribeInstanceAttribute** = ``"ec2:DescribeInstanceAttribute"``

Grants permission to describe the attributes of an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceAttribute.html

#### Defined in

actions/ec2.ts:1735

___

### DescribeInstanceConnectEndpoints

• **DescribeInstanceConnectEndpoints** = ``"ec2:DescribeInstanceConnectEndpoints"``

Grants permission to describe EC2 Instance Connect Endpoints

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceConnectEndpoints.html

#### Defined in

actions/ec2.ts:1741

___

### DescribeInstanceCreditSpecifications

• **DescribeInstanceCreditSpecifications** = ``"ec2:DescribeInstanceCreditSpecifications"``

Grants permission to describe the credit option for CPU usage of one or more bu
rstable performance instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceCreditSpecifications.html

#### Defined in

actions/ec2.ts:1748

___

### DescribeInstanceEventNotificationAttributes

• **DescribeInstanceEventNotificationAttributes** = ``"ec2:DescribeInstanceEventNotificationAttributes"``

Grants permission to describe the set of tags to include in notifications about
scheduled events for your instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceEventNotificationAttributes.html

#### Defined in

actions/ec2.ts:1755

___

### DescribeInstanceEventWindows

• **DescribeInstanceEventWindows** = ``"ec2:DescribeInstanceEventWindows"``

Grants permission to describe the specified event windows or all event windows

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceEventWindows.html

#### Defined in

actions/ec2.ts:1761

___

### DescribeInstanceStatus

• **DescribeInstanceStatus** = ``"ec2:DescribeInstanceStatus"``

Grants permission to describe the status of one or more instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceStatus.html

#### Defined in

actions/ec2.ts:1767

___

### DescribeInstanceTopology

• **DescribeInstanceTopology** = ``"ec2:DescribeInstanceTopology"``

Grants permission to describe a tree-based hierarchy that represents the physic
al host placement of EC2 instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTopology.html

#### Defined in

actions/ec2.ts:1774

___

### DescribeInstanceTypeOfferings

• **DescribeInstanceTypeOfferings** = ``"ec2:DescribeInstanceTypeOfferings"``

Grants permission to describe the set of instance types that are offered in a l
ocation

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypeOfferings.html

#### Defined in

actions/ec2.ts:1781

___

### DescribeInstanceTypes

• **DescribeInstanceTypes** = ``"ec2:DescribeInstanceTypes"``

Grants permission to describe the details of instance types that are offered in
a location

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypes.html

#### Defined in

actions/ec2.ts:1788

___

### DescribeInstances

• **DescribeInstances** = ``"ec2:DescribeInstances"``

Grants permission to describe one or more instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html

#### Defined in

actions/ec2.ts:1794

___

### DescribeInternetGateways

• **DescribeInternetGateways** = ``"ec2:DescribeInternetGateways"``

Grants permission to describe one or more internet gateways

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInternetGateways.html

#### Defined in

actions/ec2.ts:1800

___

### DescribeIpamByoasn

• **DescribeIpamByoasn** = ``"ec2:DescribeIpamByoasn"``

Grants permission to describe a bring your own Autonomous System Number (BYOASN
) that you've brought to IPAM

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpamByoasn.html

#### Defined in

actions/ec2.ts:1807

___

### DescribeIpamPools

• **DescribeIpamPools** = ``"ec2:DescribeIpamPools"``

Grants permission to describe Amazon VPC IP Address Manager (IPAM) pools

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpamPools.html

#### Defined in

actions/ec2.ts:1813

___

### DescribeIpamResourceDiscoveries

• **DescribeIpamResourceDiscoveries** = ``"ec2:DescribeIpamResourceDiscoveries"``

Grants permission to describe IPAM resource discoveries

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpamResourceDiscoveries.html

#### Defined in

actions/ec2.ts:1819

___

### DescribeIpamResourceDiscoveryAssociations

• **DescribeIpamResourceDiscoveryAssociations** = ``"ec2:DescribeIpamResourceDiscoveryAssociations"``

Grants permission to describe resource discovery associations with an Amazon VP
C IPAM

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpamResourceDiscoveryAssociations.html

#### Defined in

actions/ec2.ts:1826

___

### DescribeIpamScopes

• **DescribeIpamScopes** = ``"ec2:DescribeIpamScopes"``

Grants permission to describe Amazon VPC IP Address Manager (IPAM) scopes

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpamScopes.html

#### Defined in

actions/ec2.ts:1832

___

### DescribeIpams

• **DescribeIpams** = ``"ec2:DescribeIpams"``

Grants permission to describe an Amazon VPC IP Address Manager (IPAM)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpams.html

#### Defined in

actions/ec2.ts:1838

___

### DescribeIpv6Pools

• **DescribeIpv6Pools** = ``"ec2:DescribeIpv6Pools"``

Grants permission to describe one or more IPv6 address pools

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpv6Pools.html

#### Defined in

actions/ec2.ts:1844

___

### DescribeKeyPairs

• **DescribeKeyPairs** = ``"ec2:DescribeKeyPairs"``

Grants permission to describe one or more key pairs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeKeyPairs.html

#### Defined in

actions/ec2.ts:1850

___

### DescribeLaunchTemplateVersions

• **DescribeLaunchTemplateVersions** = ``"ec2:DescribeLaunchTemplateVersions"``

Grants permission to describe one or more launch template versions

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplateVersions.html

#### Defined in

actions/ec2.ts:1856

___

### DescribeLaunchTemplates

• **DescribeLaunchTemplates** = ``"ec2:DescribeLaunchTemplates"``

Grants permission to describe one or more launch templates

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplates.html

#### Defined in

actions/ec2.ts:1862

___

### DescribeLocalGatewayRouteTablePermissions

• **DescribeLocalGatewayRouteTablePermissions** = ``"ec2:DescribeLocalGatewayRouteTablePermissions"``

Grants permission to allow a service to describe local gateway route table perm
issions

See https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html

#### Defined in

actions/ec2.ts:1869

___

### DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations

• **DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations** = ``"ec2:DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations"``

Grants permission to describe the associations between virtual interface groups
and local gateway route tables

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations.html

#### Defined in

actions/ec2.ts:1876

___

### DescribeLocalGatewayRouteTableVpcAssociations

• **DescribeLocalGatewayRouteTableVpcAssociations** = ``"ec2:DescribeLocalGatewayRouteTableVpcAssociations"``

Grants permission to describe an association between VPCs and local gateway rou
te tables

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTableVpcAssociations.html

#### Defined in

actions/ec2.ts:1883

___

### DescribeLocalGatewayRouteTables

• **DescribeLocalGatewayRouteTables** = ``"ec2:DescribeLocalGatewayRouteTables"``

Grants permission to describe one or more local gateway route tables

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTables.html

#### Defined in

actions/ec2.ts:1889

___

### DescribeLocalGatewayVirtualInterfaceGroups

• **DescribeLocalGatewayVirtualInterfaceGroups** = ``"ec2:DescribeLocalGatewayVirtualInterfaceGroups"``

Grants permission to describe local gateway virtual interface groups

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayVirtualInterfaceGroups.html

#### Defined in

actions/ec2.ts:1895

___

### DescribeLocalGatewayVirtualInterfaces

• **DescribeLocalGatewayVirtualInterfaces** = ``"ec2:DescribeLocalGatewayVirtualInterfaces"``

Grants permission to describe local gateway virtual interfaces

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayVirtualInterfaces.html

#### Defined in

actions/ec2.ts:1901

___

### DescribeLocalGateways

• **DescribeLocalGateways** = ``"ec2:DescribeLocalGateways"``

Grants permission to describe one or more local gateways

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGateways.html

#### Defined in

actions/ec2.ts:1907

___

### DescribeLockedSnapshots

• **DescribeLockedSnapshots** = ``"ec2:DescribeLockedSnapshots"``

Grants permission to describe the lock status for a snapshot

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLockedSnapshots.html

#### Defined in

actions/ec2.ts:1913

___

### DescribeManagedPrefixLists

• **DescribeManagedPrefixLists** = ``"ec2:DescribeManagedPrefixLists"``

Grants permission to describe your managed prefix lists and any AWS-managed pre
fix lists

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeManagedPrefixLists.html

#### Defined in

actions/ec2.ts:1920

___

### DescribeMovingAddresses

• **DescribeMovingAddresses** = ``"ec2:DescribeMovingAddresses"``

Grants permission to describe Elastic IP addresses that are being moved to the
EC2-VPC platform

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeMovingAddresses.html

#### Defined in

actions/ec2.ts:1927

___

### DescribeNatGateways

• **DescribeNatGateways** = ``"ec2:DescribeNatGateways"``

Grants permission to describe one or more NAT gateways

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNatGateways.html

#### Defined in

actions/ec2.ts:1933

___

### DescribeNetworkAcls

• **DescribeNetworkAcls** = ``"ec2:DescribeNetworkAcls"``

Grants permission to describe one or more network ACLs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkAcls.html

#### Defined in

actions/ec2.ts:1939

___

### DescribeNetworkInsightsAccessScopeAnalyses

• **DescribeNetworkInsightsAccessScopeAnalyses** = ``"ec2:DescribeNetworkInsightsAccessScopeAnalyses"``

Grants permission to describe one or more Network Access Scope analyses

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAccessScopeAnalyses.html

#### Defined in

actions/ec2.ts:1945

___

### DescribeNetworkInsightsAccessScopes

• **DescribeNetworkInsightsAccessScopes** = ``"ec2:DescribeNetworkInsightsAccessScopes"``

Grants permission to describe the Network Access Scopes

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAccessScopes.html

#### Defined in

actions/ec2.ts:1951

___

### DescribeNetworkInsightsAnalyses

• **DescribeNetworkInsightsAnalyses** = ``"ec2:DescribeNetworkInsightsAnalyses"``

Grants permission to describe one or more network insights analyses

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAnalyses.html

#### Defined in

actions/ec2.ts:1957

___

### DescribeNetworkInsightsPaths

• **DescribeNetworkInsightsPaths** = ``"ec2:DescribeNetworkInsightsPaths"``

Grants permission to describe one or more network insights paths

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsPaths.html

#### Defined in

actions/ec2.ts:1963

___

### DescribeNetworkInterfaceAttribute

• **DescribeNetworkInterfaceAttribute** = ``"ec2:DescribeNetworkInterfaceAttribute"``

Grants permission to describe a network interface attribute

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfaceAttribute.html

#### Defined in

actions/ec2.ts:1969

___

### DescribeNetworkInterfacePermissions

• **DescribeNetworkInterfacePermissions** = ``"ec2:DescribeNetworkInterfacePermissions"``

Grants permission to describe the permissions that are associated with a networ
k interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfacePermissions.html

#### Defined in

actions/ec2.ts:1976

___

### DescribeNetworkInterfaces

• **DescribeNetworkInterfaces** = ``"ec2:DescribeNetworkInterfaces"``

Grants permission to describe one or more network interfaces

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfaces.html

#### Defined in

actions/ec2.ts:1982

___

### DescribePlacementGroups

• **DescribePlacementGroups** = ``"ec2:DescribePlacementGroups"``

Grants permission to describe one or more placement groups

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePlacementGroups.html

#### Defined in

actions/ec2.ts:1988

___

### DescribePrefixLists

• **DescribePrefixLists** = ``"ec2:DescribePrefixLists"``

Grants permission to describe available AWS services in a prefix list format

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrefixLists.html

#### Defined in

actions/ec2.ts:1994

___

### DescribePrincipalIdFormat

• **DescribePrincipalIdFormat** = ``"ec2:DescribePrincipalIdFormat"``

Grants permission to describe the ID format settings for the root user and all
IAM roles and IAM users that have explicitly specified a longer ID (17-characte
r ID) preference

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrincipalIdFormat.html

#### Defined in

actions/ec2.ts:2002

___

### DescribePublicIpv4Pools

• **DescribePublicIpv4Pools** = ``"ec2:DescribePublicIpv4Pools"``

Grants permission to describe one or more IPv4 address pools

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePublicIpv4Pools.html

#### Defined in

actions/ec2.ts:2008

___

### DescribeRegions

• **DescribeRegions** = ``"ec2:DescribeRegions"``

Grants permission to describe one or more AWS Regions that are currently availa
ble in your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html

#### Defined in

actions/ec2.ts:2015

___

### DescribeReplaceRootVolumeTasks

• **DescribeReplaceRootVolumeTasks** = ``"ec2:DescribeReplaceRootVolumeTasks"``

Grants permission to describe a root volume replacement task

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReplaceRootVolumeTasks.html

#### Defined in

actions/ec2.ts:2021

___

### DescribeReservedInstances

• **DescribeReservedInstances** = ``"ec2:DescribeReservedInstances"``

Grants permission to describe one or more purchased Reserved Instances in your
account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstances.html

#### Defined in

actions/ec2.ts:2028

___

### DescribeReservedInstancesListings

• **DescribeReservedInstancesListings** = ``"ec2:DescribeReservedInstancesListings"``

Grants permission to describe your account's Reserved Instance listings in the
Reserved Instance Marketplace

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesListings.html

#### Defined in

actions/ec2.ts:2035

___

### DescribeReservedInstancesModifications

• **DescribeReservedInstancesModifications** = ``"ec2:DescribeReservedInstancesModifications"``

Grants permission to describe the modifications made to one or more Reserved In
stances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesModifications.html

#### Defined in

actions/ec2.ts:2042

___

### DescribeReservedInstancesOfferings

• **DescribeReservedInstancesOfferings** = ``"ec2:DescribeReservedInstancesOfferings"``

Grants permission to describe the Reserved Instance offerings that are availabl
e for purchase

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesOfferings.html

#### Defined in

actions/ec2.ts:2049

___

### DescribeRouteTables

• **DescribeRouteTables** = ``"ec2:DescribeRouteTables"``

Grants permission to describe one or more route tables

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRouteTables.html

#### Defined in

actions/ec2.ts:2055

___

### DescribeScheduledInstanceAvailability

• **DescribeScheduledInstanceAvailability** = ``"ec2:DescribeScheduledInstanceAvailability"``

Grants permission to find available schedules for Scheduled Instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeScheduledInstanceAvailability.html

#### Defined in

actions/ec2.ts:2061

___

### DescribeScheduledInstances

• **DescribeScheduledInstances** = ``"ec2:DescribeScheduledInstances"``

Grants permission to describe one or more Scheduled Instances in your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeScheduledInstances.html

#### Defined in

actions/ec2.ts:2067

___

### DescribeSecurityGroupReferences

• **DescribeSecurityGroupReferences** = ``"ec2:DescribeSecurityGroupReferences"``

Grants permission to describe the VPCs on the other side of a VPC peering conne
ction that are referencing specified VPC security groups

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupReferences.html

#### Defined in

actions/ec2.ts:2074

___

### DescribeSecurityGroupRules

• **DescribeSecurityGroupRules** = ``"ec2:DescribeSecurityGroupRules"``

Grants permission to describe one or more of your security group rules

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupRules.html

#### Defined in

actions/ec2.ts:2080

___

### DescribeSecurityGroups

• **DescribeSecurityGroups** = ``"ec2:DescribeSecurityGroups"``

Grants permission to describe one or more security groups

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html

#### Defined in

actions/ec2.ts:2086

___

### DescribeSnapshotAttribute

• **DescribeSnapshotAttribute** = ``"ec2:DescribeSnapshotAttribute"``

Grants permission to describe an attribute of a snapshot

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshotAttribute.html

#### Defined in

actions/ec2.ts:2092

___

### DescribeSnapshotTierStatus

• **DescribeSnapshotTierStatus** = ``"ec2:DescribeSnapshotTierStatus"``

Grants permission to describe the storage tier status for Amazon EBS snapshots

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshotTierStatus.html

#### Defined in

actions/ec2.ts:2098

___

### DescribeSnapshots

• **DescribeSnapshots** = ``"ec2:DescribeSnapshots"``

Grants permission to describe one or more EBS snapshots

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html

#### Defined in

actions/ec2.ts:2104

___

### DescribeSpotDatafeedSubscription

• **DescribeSpotDatafeedSubscription** = ``"ec2:DescribeSpotDatafeedSubscription"``

Grants permission to describe the data feed for Spot Instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotDatafeedSubscription.html

#### Defined in

actions/ec2.ts:2110

___

### DescribeSpotFleetInstances

• **DescribeSpotFleetInstances** = ``"ec2:DescribeSpotFleetInstances"``

Grants permission to describe the running instances for a Spot Fleet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetInstances.html

#### Defined in

actions/ec2.ts:2116

___

### DescribeSpotFleetRequestHistory

• **DescribeSpotFleetRequestHistory** = ``"ec2:DescribeSpotFleetRequestHistory"``

Grants permission to describe the events for a Spot Fleet request during a spec
ified time

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetRequestHistory.html

#### Defined in

actions/ec2.ts:2123

___

### DescribeSpotFleetRequests

• **DescribeSpotFleetRequests** = ``"ec2:DescribeSpotFleetRequests"``

Grants permission to describe one or more Spot Fleet requests

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetRequests.html

#### Defined in

actions/ec2.ts:2129

___

### DescribeSpotInstanceRequests

• **DescribeSpotInstanceRequests** = ``"ec2:DescribeSpotInstanceRequests"``

Grants permission to describe one or more Spot Instance requests

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotInstanceRequests.html

#### Defined in

actions/ec2.ts:2135

___

### DescribeSpotPriceHistory

• **DescribeSpotPriceHistory** = ``"ec2:DescribeSpotPriceHistory"``

Grants permission to describe the Spot Instance price history

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotPriceHistory.html

#### Defined in

actions/ec2.ts:2141

___

### DescribeStaleSecurityGroups

• **DescribeStaleSecurityGroups** = ``"ec2:DescribeStaleSecurityGroups"``

Grants permission to describe the stale security group rules for security group
s in a specified VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeStaleSecurityGroups.html

#### Defined in

actions/ec2.ts:2148

___

### DescribeStoreImageTasks

• **DescribeStoreImageTasks** = ``"ec2:DescribeStoreImageTasks"``

Grants permission to describe the progress of the AMI store tasks

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeStoreImageTasks.html

#### Defined in

actions/ec2.ts:2154

___

### DescribeSubnets

• **DescribeSubnets** = ``"ec2:DescribeSubnets"``

Grants permission to describe one or more subnets

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html

#### Defined in

actions/ec2.ts:2160

___

### DescribeTags

• **DescribeTags** = ``"ec2:DescribeTags"``

Grants permission to describe one or more tags for an Amazon EC2 resource

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTags.html

#### Defined in

actions/ec2.ts:2166

___

### DescribeTrafficMirrorFilters

• **DescribeTrafficMirrorFilters** = ``"ec2:DescribeTrafficMirrorFilters"``

Grants permission to describe one or more traffic mirror filters

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorFilters.html

#### Defined in

actions/ec2.ts:2172

___

### DescribeTrafficMirrorSessions

• **DescribeTrafficMirrorSessions** = ``"ec2:DescribeTrafficMirrorSessions"``

Grants permission to describe one or more traffic mirror sessions

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorSessions.html

#### Defined in

actions/ec2.ts:2178

___

### DescribeTrafficMirrorTargets

• **DescribeTrafficMirrorTargets** = ``"ec2:DescribeTrafficMirrorTargets"``

Grants permission to describe one or more traffic mirror targets

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorTargets.html

#### Defined in

actions/ec2.ts:2184

___

### DescribeTransitGatewayAttachments

• **DescribeTransitGatewayAttachments** = ``"ec2:DescribeTransitGatewayAttachments"``

Grants permission to describe one or more attachments between resources and tra
nsit gateways

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html

#### Defined in

actions/ec2.ts:2191

___

### DescribeTransitGatewayConnectPeers

• **DescribeTransitGatewayConnectPeers** = ``"ec2:DescribeTransitGatewayConnectPeers"``

Grants permission to describe one or more transit gateway connect peers

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayConnectPeers.html

#### Defined in

actions/ec2.ts:2197

___

### DescribeTransitGatewayConnects

• **DescribeTransitGatewayConnects** = ``"ec2:DescribeTransitGatewayConnects"``

Grants permission to describe one or more transit gateway connect attachments

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayConnects.html

#### Defined in

actions/ec2.ts:2203

___

### DescribeTransitGatewayMulticastDomains

• **DescribeTransitGatewayMulticastDomains** = ``"ec2:DescribeTransitGatewayMulticastDomains"``

Grants permission to describe one or more transit gateway multicast domains

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayMulticastDomains.html

#### Defined in

actions/ec2.ts:2209

___

### DescribeTransitGatewayPeeringAttachments

• **DescribeTransitGatewayPeeringAttachments** = ``"ec2:DescribeTransitGatewayPeeringAttachments"``

Grants permission to describe one or more transit gateway peering attachments

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayPeeringAttachments.html

#### Defined in

actions/ec2.ts:2215

___

### DescribeTransitGatewayPolicyTables

• **DescribeTransitGatewayPolicyTables** = ``"ec2:DescribeTransitGatewayPolicyTables"``

Grants permission to describe a transit gateway policy table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayPolicyTables.html

#### Defined in

actions/ec2.ts:2221

___

### DescribeTransitGatewayRouteTableAnnouncements

• **DescribeTransitGatewayRouteTableAnnouncements** = ``"ec2:DescribeTransitGatewayRouteTableAnnouncements"``

Grants permission to describe a transit gateway route table announcement

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayRouteTableAnnouncements.html

#### Defined in

actions/ec2.ts:2227

___

### DescribeTransitGatewayRouteTables

• **DescribeTransitGatewayRouteTables** = ``"ec2:DescribeTransitGatewayRouteTables"``

Grants permission to describe one or more transit gateway route tables

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayRouteTables.html

#### Defined in

actions/ec2.ts:2233

___

### DescribeTransitGatewayVpcAttachments

• **DescribeTransitGatewayVpcAttachments** = ``"ec2:DescribeTransitGatewayVpcAttachments"``

Grants permission to describe one or more VPC attachments on a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayVpcAttachments.html

#### Defined in

actions/ec2.ts:2239

___

### DescribeTransitGateways

• **DescribeTransitGateways** = ``"ec2:DescribeTransitGateways"``

Grants permission to describe one or more transit gateways

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGateways.html

#### Defined in

actions/ec2.ts:2245

___

### DescribeTrunkInterfaceAssociations

• **DescribeTrunkInterfaceAssociations** = ``"ec2:DescribeTrunkInterfaceAssociations"``

Grants permission to describe one or more network interface trunk associations

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrunkInterfaceAssociations.html

#### Defined in

actions/ec2.ts:2251

___

### DescribeVerifiedAccessEndpoints

• **DescribeVerifiedAccessEndpoints** = ``"ec2:DescribeVerifiedAccessEndpoints"``

Grants permission to describe the specified Verified Access endpoints or all Ve
rified Access endpoints

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVerifiedAccessEndpoints.html

#### Defined in

actions/ec2.ts:2258

___

### DescribeVerifiedAccessGroups

• **DescribeVerifiedAccessGroups** = ``"ec2:DescribeVerifiedAccessGroups"``

Grants permission to describe the specified Verified Access groups or all Verif
ied Access groups

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVerifiedAccessGroups.html

#### Defined in

actions/ec2.ts:2265

___

### DescribeVerifiedAccessInstanceLoggingConfigurations

• **DescribeVerifiedAccessInstanceLoggingConfigurations** = ``"ec2:DescribeVerifiedAccessInstanceLoggingConfigurations"``

Grants permission to describe the current logging configuration for the Verifie
d Access instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVerifiedAccessInstanceLoggingConfigurations.html

#### Defined in

actions/ec2.ts:2272

___

### DescribeVerifiedAccessInstanceWebAclAssociations

• **DescribeVerifiedAccessInstanceWebAclAssociations** = ``"ec2:DescribeVerifiedAccessInstanceWebAclAssociations"``

Grants permission to describe the AWS Web Application Firewall (WAF) web access
control list (ACL) associations for a Verified Access instance

See https://docs.aws.amazon.com/verified-access/latest/ug/waf-integration.html

#### Defined in

actions/ec2.ts:2279

___

### DescribeVerifiedAccessInstances

• **DescribeVerifiedAccessInstances** = ``"ec2:DescribeVerifiedAccessInstances"``

Grants permission to describe the specified Verified Access instances or all Ve
rified Access instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVerifiedAccessInstances.html

#### Defined in

actions/ec2.ts:2286

___

### DescribeVerifiedAccessTrustProviders

• **DescribeVerifiedAccessTrustProviders** = ``"ec2:DescribeVerifiedAccessTrustProviders"``

Grants permission to describe details of existing Verified Access trust provide
rs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVerifiedAccessTrustProviders.html

#### Defined in

actions/ec2.ts:2293

___

### DescribeVolumeAttribute

• **DescribeVolumeAttribute** = ``"ec2:DescribeVolumeAttribute"``

Grants permission to describe an attribute of an EBS volume

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumeAttribute.html

#### Defined in

actions/ec2.ts:2299

___

### DescribeVolumeStatus

• **DescribeVolumeStatus** = ``"ec2:DescribeVolumeStatus"``

Grants permission to describe the status of one or more EBS volumes

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumeStatus.html

#### Defined in

actions/ec2.ts:2305

___

### DescribeVolumes

• **DescribeVolumes** = ``"ec2:DescribeVolumes"``

Grants permission to describe one or more EBS volumes

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumes.html

#### Defined in

actions/ec2.ts:2311

___

### DescribeVolumesModifications

• **DescribeVolumesModifications** = ``"ec2:DescribeVolumesModifications"``

Grants permission to describe the current modification status of one or more EB
S volumes

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumesModifications.html

#### Defined in

actions/ec2.ts:2318

___

### DescribeVpcAttribute

• **DescribeVpcAttribute** = ``"ec2:DescribeVpcAttribute"``

Grants permission to describe an attribute of a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcAttribute.html

#### Defined in

actions/ec2.ts:2324

___

### DescribeVpcClassicLink

• **DescribeVpcClassicLink** = ``"ec2:DescribeVpcClassicLink"``

Grants permission to describe the ClassicLink status of one or more VPCs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcClassicLink.html

#### Defined in

actions/ec2.ts:2330

___

### DescribeVpcClassicLinkDnsSupport

• **DescribeVpcClassicLinkDnsSupport** = ``"ec2:DescribeVpcClassicLinkDnsSupport"``

Grants permission to describe the ClassicLink DNS support status of one or more
VPCs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcClassicLinkDnsSupport.html

#### Defined in

actions/ec2.ts:2337

___

### DescribeVpcEndpointConnectionNotifications

• **DescribeVpcEndpointConnectionNotifications** = ``"ec2:DescribeVpcEndpointConnectionNotifications"``

Grants permission to describe the connection notifications for VPC endpoints an
d VPC endpoint services

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointConnectionNotifications.html

#### Defined in

actions/ec2.ts:2344

___

### DescribeVpcEndpointConnections

• **DescribeVpcEndpointConnections** = ``"ec2:DescribeVpcEndpointConnections"``

Grants permission to describe the VPC endpoint connections to your VPC endpoint
services

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointConnections.html

#### Defined in

actions/ec2.ts:2351

___

### DescribeVpcEndpointServiceConfigurations

• **DescribeVpcEndpointServiceConfigurations** = ``"ec2:DescribeVpcEndpointServiceConfigurations"``

Grants permission to describe VPC endpoint service configurations (your service
s)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServiceConfigurations.html

#### Defined in

actions/ec2.ts:2358

___

### DescribeVpcEndpointServicePermissions

• **DescribeVpcEndpointServicePermissions** = ``"ec2:DescribeVpcEndpointServicePermissions"``

Grants permission to describe the principals (service consumers) that are permi
tted to discover your VPC endpoint service

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServicePermissions.html

#### Defined in

actions/ec2.ts:2365

___

### DescribeVpcEndpointServices

• **DescribeVpcEndpointServices** = ``"ec2:DescribeVpcEndpointServices"``

Grants permission to describe all supported AWS services that can be specified
when creating a VPC endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServices.html

#### Defined in

actions/ec2.ts:2372

___

### DescribeVpcEndpoints

• **DescribeVpcEndpoints** = ``"ec2:DescribeVpcEndpoints"``

Grants permission to describe one or more VPC endpoints

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpoints.html

#### Defined in

actions/ec2.ts:2378

___

### DescribeVpcPeeringConnections

• **DescribeVpcPeeringConnections** = ``"ec2:DescribeVpcPeeringConnections"``

Grants permission to describe one or more VPC peering connections

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcPeeringConnections.html

#### Defined in

actions/ec2.ts:2384

___

### DescribeVpcs

• **DescribeVpcs** = ``"ec2:DescribeVpcs"``

Grants permission to describe one or more VPCs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcs.html

#### Defined in

actions/ec2.ts:2390

___

### DescribeVpnConnections

• **DescribeVpnConnections** = ``"ec2:DescribeVpnConnections"``

Grants permission to describe one or more VPN connections

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html

#### Defined in

actions/ec2.ts:2396

___

### DescribeVpnGateways

• **DescribeVpnGateways** = ``"ec2:DescribeVpnGateways"``

Grants permission to describe one or more virtual private gateways

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnGateways.html

#### Defined in

actions/ec2.ts:2402

___

### DetachClassicLinkVpc

• **DetachClassicLinkVpc** = ``"ec2:DetachClassicLinkVpc"``

Grants permission to unlink (detach) a linked EC2-Classic instance from a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachClassicLinkVpc.html

#### Defined in

actions/ec2.ts:2408

___

### DetachInternetGateway

• **DetachInternetGateway** = ``"ec2:DetachInternetGateway"``

Grants permission to detach an internet gateway from a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html

#### Defined in

actions/ec2.ts:2414

___

### DetachNetworkInterface

• **DetachNetworkInterface** = ``"ec2:DetachNetworkInterface"``

Grants permission to detach a network interface from an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachNetworkInterface.html

#### Defined in

actions/ec2.ts:2420

___

### DetachVerifiedAccessTrustProvider

• **DetachVerifiedAccessTrustProvider** = ``"ec2:DetachVerifiedAccessTrustProvider"``

Grants permission to detach a trust provider from a Verified Access instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVerifiedAccessTrustProvider.html

#### Defined in

actions/ec2.ts:2426

___

### DetachVolume

• **DetachVolume** = ``"ec2:DetachVolume"``

Grants permission to detach an EBS volume from an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVolume.html

#### Defined in

actions/ec2.ts:2432

___

### DetachVpnGateway

• **DetachVpnGateway** = ``"ec2:DetachVpnGateway"``

Grants permission to detach a virtual private gateway from a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVpnGateway.html

#### Defined in

actions/ec2.ts:2438

___

### DisableAddressTransfer

• **DisableAddressTransfer** = ``"ec2:DisableAddressTransfer"``

Grants permission to disable Elastic IP address transfer

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableAddressTransfer.html

#### Defined in

actions/ec2.ts:2444

___

### DisableAwsNetworkPerformanceMetricSubscription

• **DisableAwsNetworkPerformanceMetricSubscription** = ``"ec2:DisableAwsNetworkPerformanceMetricSubscription"``

Grants permission to disable infrastructure performance metric subscriptions

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableAwsNetworkPerformanceMetricSubscription.html

#### Defined in

actions/ec2.ts:2450

___

### DisableEbsEncryptionByDefault

• **DisableEbsEncryptionByDefault** = ``"ec2:DisableEbsEncryptionByDefault"``

Grants permission to disable EBS encryption by default for your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableEbsEncryptionByDefault.html

#### Defined in

actions/ec2.ts:2456

___

### DisableFastLaunch

• **DisableFastLaunch** = ``"ec2:DisableFastLaunch"``

Grants permission to disable faster launching for Windows AMIs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableFastLaunch.html

#### Defined in

actions/ec2.ts:2462

___

### DisableFastSnapshotRestores

• **DisableFastSnapshotRestores** = ``"ec2:DisableFastSnapshotRestores"``

Grants permission to disable fast snapshot restores for one or more snapshots i
n specified Availability Zones

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableFastSnapshotRestores.html

#### Defined in

actions/ec2.ts:2469

___

### DisableImage

• **DisableImage** = ``"ec2:DisableImage"``

Grants permission to disable an AMI

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableImage.html

#### Defined in

actions/ec2.ts:2475

___

### DisableImageBlockPublicAccess

• **DisableImageBlockPublicAccess** = ``"ec2:DisableImageBlockPublicAccess"``

Grants permission to disable block public access for AMIs at the account level
in the specified AWS Region

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableImageBlockPublicAccess.html

#### Defined in

actions/ec2.ts:2482

___

### DisableImageDeprecation

• **DisableImageDeprecation** = ``"ec2:DisableImageDeprecation"``

Grants permission to cancel the deprecation of the specified AMI

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableImageDeprecation.html

#### Defined in

actions/ec2.ts:2488

___

### DisableIpamOrganizationAdminAccount

• **DisableIpamOrganizationAdminAccount** = ``"ec2:DisableIpamOrganizationAdminAccount"``

Grants permission to disable an AWS Organizations member account as an Amazon V
PC IP Address Manager (IPAM) admin account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableIpamOrganizationAdminAccount.html

#### Defined in

actions/ec2.ts:2495

___

### DisableSerialConsoleAccess

• **DisableSerialConsoleAccess** = ``"ec2:DisableSerialConsoleAccess"``

Grants permission to disable access to the EC2 serial console of all instances
for your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableSerialConsoleAccess.html

#### Defined in

actions/ec2.ts:2502

___

### DisableSnapshotBlockPublicAccess

• **DisableSnapshotBlockPublicAccess** = ``"ec2:DisableSnapshotBlockPublicAccess"``

Grants permission to disable the block public access for snapshots setting for
a Region

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableSnapshotBlockPublicAccess.html

#### Defined in

actions/ec2.ts:2509

___

### DisableTransitGatewayRouteTablePropagation

• **DisableTransitGatewayRouteTablePropagation** = ``"ec2:DisableTransitGatewayRouteTablePropagation"``

Grants permission to disable a resource attachment from propagating routes to t
he specified propagation route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableTransitGatewayRouteTablePropagation.html

#### Defined in

actions/ec2.ts:2516

___

### DisableVgwRoutePropagation

• **DisableVgwRoutePropagation** = ``"ec2:DisableVgwRoutePropagation"``

Grants permission to disable a virtual private gateway from propagating routes
to a specified route table of a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVgwRoutePropagation.html

#### Defined in

actions/ec2.ts:2523

___

### DisableVpcClassicLink

• **DisableVpcClassicLink** = ``"ec2:DisableVpcClassicLink"``

Grants permission to disable ClassicLink for a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVpcClassicLink.html

#### Defined in

actions/ec2.ts:2529

___

### DisableVpcClassicLinkDnsSupport

• **DisableVpcClassicLinkDnsSupport** = ``"ec2:DisableVpcClassicLinkDnsSupport"``

Grants permission to disable ClassicLink DNS support for a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVpcClassicLinkDnsSupport.html

#### Defined in

actions/ec2.ts:2535

___

### DisassociateAddress

• **DisassociateAddress** = ``"ec2:DisassociateAddress"``

Grants permission to disassociate an Elastic IP address from an instance or net
work interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateAddress.html

#### Defined in

actions/ec2.ts:2542

___

### DisassociateClientVpnTargetNetwork

• **DisassociateClientVpnTargetNetwork** = ``"ec2:DisassociateClientVpnTargetNetwork"``

Grants permission to disassociate a target network from a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateClientVpnTargetNetwork.html

#### Defined in

actions/ec2.ts:2548

___

### DisassociateEnclaveCertificateIamRole

• **DisassociateEnclaveCertificateIamRole** = ``"ec2:DisassociateEnclaveCertificateIamRole"``

Grants permission to disassociate an ACM certificate from a IAM role

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateEnclaveCertificateIamRole.html

#### Defined in

actions/ec2.ts:2554

___

### DisassociateIamInstanceProfile

• **DisassociateIamInstanceProfile** = ``"ec2:DisassociateIamInstanceProfile"``

Grants permission to disassociate an IAM instance profile from a running or sto
pped instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html

#### Defined in

actions/ec2.ts:2561

___

### DisassociateInstanceEventWindow

• **DisassociateInstanceEventWindow** = ``"ec2:DisassociateInstanceEventWindow"``

Grants permission to disassociate one or more targets from an event window

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateInstanceEventWindow.html

#### Defined in

actions/ec2.ts:2567

___

### DisassociateIpamByoasn

• **DisassociateIpamByoasn** = ``"ec2:DisassociateIpamByoasn"``

Grants permission to disassociate an Autonomous System Number (ASN) from a BYOI
P CIDR

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIpamByoasn.html

#### Defined in

actions/ec2.ts:2574

___

### DisassociateIpamResourceDiscovery

• **DisassociateIpamResourceDiscovery** = ``"ec2:DisassociateIpamResourceDiscovery"``

Grants permission to disassociate a resource discovery from an Amazon VPC IPAM

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIpamResourceDiscovery.html

#### Defined in

actions/ec2.ts:2580

___

### DisassociateNatGatewayAddress

• **DisassociateNatGatewayAddress** = ``"ec2:DisassociateNatGatewayAddress"``

Grants permission to disassociate a secondary Elastic IP address from a public
NAT gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateNatGatewayAddress.html

#### Defined in

actions/ec2.ts:2587

___

### DisassociateRouteTable

• **DisassociateRouteTable** = ``"ec2:DisassociateRouteTable"``

Grants permission to disassociate a subnet from a route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateRouteTable.html

#### Defined in

actions/ec2.ts:2593

___

### DisassociateSubnetCidrBlock

• **DisassociateSubnetCidrBlock** = ``"ec2:DisassociateSubnetCidrBlock"``

Grants permission to disassociate a CIDR block from a subnet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateSubnetCidrBlock.html

#### Defined in

actions/ec2.ts:2599

___

### DisassociateTransitGatewayMulticastDomain

• **DisassociateTransitGatewayMulticastDomain** = ``"ec2:DisassociateTransitGatewayMulticastDomain"``

Grants permission to disassociate one or more subnets from a transit gateway mu
lticast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTransitGatewayMulticastDomain.html

#### Defined in

actions/ec2.ts:2606

___

### DisassociateTransitGatewayPolicyTable

• **DisassociateTransitGatewayPolicyTable** = ``"ec2:DisassociateTransitGatewayPolicyTable"``

Grants permission to disassociate a policy table from a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTransitGatewayPolicyTable.html

#### Defined in

actions/ec2.ts:2612

___

### DisassociateTransitGatewayRouteTable

• **DisassociateTransitGatewayRouteTable** = ``"ec2:DisassociateTransitGatewayRouteTable"``

Grants permission to disassociate a resource attachment from a transit gateway
route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTransitGatewayRouteTable.html

#### Defined in

actions/ec2.ts:2619

___

### DisassociateTrunkInterface

• **DisassociateTrunkInterface** = ``"ec2:DisassociateTrunkInterface"``

Grants permission to disassociate a branch network interface to a trunk network
interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTrunkInterface.html

#### Defined in

actions/ec2.ts:2626

___

### DisassociateVerifiedAccessInstanceWebAcl

• **DisassociateVerifiedAccessInstanceWebAcl** = ``"ec2:DisassociateVerifiedAccessInstanceWebAcl"``

Grants permission to disassociate an AWS Web Application Firewall (WAF) web acc
ess control list (ACL) from a Verified Access instance

See https://docs.aws.amazon.com/verified-access/latest/ug/waf-integration.html

#### Defined in

actions/ec2.ts:2633

___

### DisassociateVpcCidrBlock

• **DisassociateVpcCidrBlock** = ``"ec2:DisassociateVpcCidrBlock"``

Grants permission to disassociate a CIDR block from a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateVpcCidrBlock.html

#### Defined in

actions/ec2.ts:2639

___

### EnableAddressTransfer

• **EnableAddressTransfer** = ``"ec2:EnableAddressTransfer"``

Grants permission to enable Elastic IP address transfer

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableAddressTransfer.html

#### Defined in

actions/ec2.ts:2645

___

### EnableAwsNetworkPerformanceMetricSubscription

• **EnableAwsNetworkPerformanceMetricSubscription** = ``"ec2:EnableAwsNetworkPerformanceMetricSubscription"``

Grants permission to enable infrastructure performance subscriptions

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableAwsNetworkPerformanceMetricSubscription.html

#### Defined in

actions/ec2.ts:2651

___

### EnableEbsEncryptionByDefault

• **EnableEbsEncryptionByDefault** = ``"ec2:EnableEbsEncryptionByDefault"``

Grants permission to enable EBS encryption by default for your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableEbsEncryptionByDefault.html

#### Defined in

actions/ec2.ts:2657

___

### EnableFastLaunch

• **EnableFastLaunch** = ``"ec2:EnableFastLaunch"``

Grants permission to enable faster launching for Windows AMIs

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableFastLaunch.html

#### Defined in

actions/ec2.ts:2663

___

### EnableFastSnapshotRestores

• **EnableFastSnapshotRestores** = ``"ec2:EnableFastSnapshotRestores"``

Grants permission to enable fast snapshot restores for one or more snapshots in
specified Availability Zones

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableFastSnapshotRestores.html

#### Defined in

actions/ec2.ts:2670

___

### EnableImage

• **EnableImage** = ``"ec2:EnableImage"``

Grants permission to re-enable a disabled AMI

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableImage.html

#### Defined in

actions/ec2.ts:2676

___

### EnableImageBlockPublicAccess

• **EnableImageBlockPublicAccess** = ``"ec2:EnableImageBlockPublicAccess"``

Grants permission to enable block public access for AMIs at the account level i
n the specified AWS Region

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableImageBlockPublicAccess.html

#### Defined in

actions/ec2.ts:2683

___

### EnableImageDeprecation

• **EnableImageDeprecation** = ``"ec2:EnableImageDeprecation"``

Grants permission to enable deprecation of the specified AMI at the specified d
ate and time

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableImageDeprecation.html

#### Defined in

actions/ec2.ts:2690

___

### EnableIpamOrganizationAdminAccount

• **EnableIpamOrganizationAdminAccount** = ``"ec2:EnableIpamOrganizationAdminAccount"``

Grants permission to enable an AWS Organizations member account as an Amazon VP
C IP Address Manager (IPAM) admin account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableIpamOrganizationAdminAccount.html

#### Defined in

actions/ec2.ts:2697

___

### EnableReachabilityAnalyzerOrganizationSharing

• **EnableReachabilityAnalyzerOrganizationSharing** = ``"ec2:EnableReachabilityAnalyzerOrganizationSharing"``

Grants permission to enable organization sharing of reachability analyzer

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableReachabilityAnalyzerOrganizationSharing.html

#### Defined in

actions/ec2.ts:2703

___

### EnableSerialConsoleAccess

• **EnableSerialConsoleAccess** = ``"ec2:EnableSerialConsoleAccess"``

Grants permission to enable access to the EC2 serial console of all instances f
or your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableSerialConsoleAccess.html

#### Defined in

actions/ec2.ts:2710

___

### EnableSnapshotBlockPublicAccess

• **EnableSnapshotBlockPublicAccess** = ``"ec2:EnableSnapshotBlockPublicAccess"``

Grants permission to enable or modify the block public access for snapshots set
ting for a Region

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableSnapshotBlockPublicAccess.html

#### Defined in

actions/ec2.ts:2717

___

### EnableTransitGatewayRouteTablePropagation

• **EnableTransitGatewayRouteTablePropagation** = ``"ec2:EnableTransitGatewayRouteTablePropagation"``

Grants permission to enable an attachment to propagate routes to a propagation
route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableTransitGatewayRouteTablePropagation.html

#### Defined in

actions/ec2.ts:2724

___

### EnableVgwRoutePropagation

• **EnableVgwRoutePropagation** = ``"ec2:EnableVgwRoutePropagation"``

Grants permission to enable a virtual private gateway to propagate routes to a
VPC route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVgwRoutePropagation.html

#### Defined in

actions/ec2.ts:2731

___

### EnableVolumeIO

• **EnableVolumeIO** = ``"ec2:EnableVolumeIO"``

Grants permission to enable I/O operations for a volume that had I/O operations
disabled

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVolumeIO.html

#### Defined in

actions/ec2.ts:2738

___

### EnableVpcClassicLink

• **EnableVpcClassicLink** = ``"ec2:EnableVpcClassicLink"``

Grants permission to enable a VPC for ClassicLink

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVpcClassicLink.html

#### Defined in

actions/ec2.ts:2744

___

### EnableVpcClassicLinkDnsSupport

• **EnableVpcClassicLinkDnsSupport** = ``"ec2:EnableVpcClassicLinkDnsSupport"``

Grants permission to enable a VPC to support DNS hostname resolution for Classi
cLink

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVpcClassicLinkDnsSupport.html

#### Defined in

actions/ec2.ts:2751

___

### ExportClientVpnClientCertificateRevocationList

• **ExportClientVpnClientCertificateRevocationList** = ``"ec2:ExportClientVpnClientCertificateRevocationList"``

Grants permission to download the client certificate revocation list for a Clie
nt VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportClientVpnClientCertificateRevocationList.html

#### Defined in

actions/ec2.ts:2758

___

### ExportClientVpnClientConfiguration

• **ExportClientVpnClientConfiguration** = ``"ec2:ExportClientVpnClientConfiguration"``

Grants permission to download the contents of the Client VPN endpoint configura
tion file for a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportClientVpnClientConfiguration.html

#### Defined in

actions/ec2.ts:2765

___

### ExportImage

• **ExportImage** = ``"ec2:ExportImage"``

Grants permission to export an Amazon Machine Image (AMI) to a VM file

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportImage.html

#### Defined in

actions/ec2.ts:2771

___

### ExportTransitGatewayRoutes

• **ExportTransitGatewayRoutes** = ``"ec2:ExportTransitGatewayRoutes"``

Grants permission to export routes from a transit gateway route table to an Ama
zon S3 bucket

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportTransitGatewayRoutes.html

#### Defined in

actions/ec2.ts:2778

___

### GetAssociatedEnclaveCertificateIamRoles

• **GetAssociatedEnclaveCertificateIamRoles** = ``"ec2:GetAssociatedEnclaveCertificateIamRoles"``

Grants permission to get the list of roles associated with an ACM certificate

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetAssociatedEnclaveCertificateIamRoles.html

#### Defined in

actions/ec2.ts:2784

___

### GetAssociatedIpv6PoolCidrs

• **GetAssociatedIpv6PoolCidrs** = ``"ec2:GetAssociatedIpv6PoolCidrs"``

Grants permission to get information about the IPv6 CIDR block associations for
a specified IPv6 address pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetAssociatedIpv6PoolCidrs.html

#### Defined in

actions/ec2.ts:2791

___

### GetAwsNetworkPerformanceData

• **GetAwsNetworkPerformanceData** = ``"ec2:GetAwsNetworkPerformanceData"``

Grants permission to get network performance data

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetAwsNetworkPerformanceData.html

#### Defined in

actions/ec2.ts:2797

___

### GetCapacityReservationUsage

• **GetCapacityReservationUsage** = ``"ec2:GetCapacityReservationUsage"``

Grants permission to get usage information about a Capacity Reservation

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetCapacityReservationUsage.html

#### Defined in

actions/ec2.ts:2803

___

### GetCoipPoolUsage

• **GetCoipPoolUsage** = ``"ec2:GetCoipPoolUsage"``

Grants permission to describe the allocations from the specified customer-owned
address pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetCoipPoolUsage.html

#### Defined in

actions/ec2.ts:2810

___

### GetConsoleOutput

• **GetConsoleOutput** = ``"ec2:GetConsoleOutput"``

Grants permission to get the console output for an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetConsoleOutput.html

#### Defined in

actions/ec2.ts:2816

___

### GetConsoleScreenshot

• **GetConsoleScreenshot** = ``"ec2:GetConsoleScreenshot"``

Grants permission to retrieve a JPG-format screenshot of a running instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetConsoleScreenshot.html

#### Defined in

actions/ec2.ts:2822

___

### GetDefaultCreditSpecification

• **GetDefaultCreditSpecification** = ``"ec2:GetDefaultCreditSpecification"``

Grants permission to get the default credit option for CPU usage of a burstable
performance instance family

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetDefaultCreditSpecification.html

#### Defined in

actions/ec2.ts:2829

___

### GetEbsDefaultKmsKeyId

• **GetEbsDefaultKmsKeyId** = ``"ec2:GetEbsDefaultKmsKeyId"``

Grants permission to get the ID of the default customer master key (CMK) for EB
S encryption by default

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetEbsDefaultKmsKeyId.html

#### Defined in

actions/ec2.ts:2836

___

### GetEbsEncryptionByDefault

• **GetEbsEncryptionByDefault** = ``"ec2:GetEbsEncryptionByDefault"``

Grants permission to describe whether EBS encryption by default is enabled for
your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetEbsEncryptionByDefault.html

#### Defined in

actions/ec2.ts:2843

___

### GetFlowLogsIntegrationTemplate

• **GetFlowLogsIntegrationTemplate** = ``"ec2:GetFlowLogsIntegrationTemplate"``

Grants permission to generate a CloudFormation template to streamline the integ
ration of VPC flow logs with Amazon Athena

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetFlowLogsIntegrationTemplate.html

#### Defined in

actions/ec2.ts:2850

___

### GetGroupsForCapacityReservation

• **GetGroupsForCapacityReservation** = ``"ec2:GetGroupsForCapacityReservation"``

Grants permission to list the resource groups to which a Capacity Reservation h
as been added

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetGroupsForCapacityReservation.html

#### Defined in

actions/ec2.ts:2857

___

### GetHostReservationPurchasePreview

• **GetHostReservationPurchasePreview** = ``"ec2:GetHostReservationPurchasePreview"``

Grants permission to preview a reservation purchase with configurations that ma
tch those of a Dedicated Host

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetHostReservationPurchasePreview.html

#### Defined in

actions/ec2.ts:2864

___

### GetImageBlockPublicAccessState

• **GetImageBlockPublicAccessState** = ``"ec2:GetImageBlockPublicAccessState"``

Grants permission to get the current state of block public access for AMIs at t
he account level in the specified AWS Region

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetImageBlockPublicAccessState.html

#### Defined in

actions/ec2.ts:2871

___

### GetInstanceTypesFromInstanceRequirements

• **GetInstanceTypesFromInstanceRequirements** = ``"ec2:GetInstanceTypesFromInstanceRequirements"``

Grants permission to view a list of instance types with specified instance attr
ibutes

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html

#### Defined in

actions/ec2.ts:2878

___

### GetInstanceUefiData

• **GetInstanceUefiData** = ``"ec2:GetInstanceUefiData"``

Grants permission to retrieve the binary representation of the UEFI variable st
ore

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData.html

#### Defined in

actions/ec2.ts:2885

___

### GetIpamAddressHistory

• **GetIpamAddressHistory** = ``"ec2:GetIpamAddressHistory"``

Grants permission to retrieve historical information about a CIDR within an Ama
zon VPC IP Address Manager (IPAM) scope

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamAddressHistory.html

#### Defined in

actions/ec2.ts:2892

___

### GetIpamDiscoveredAccounts

• **GetIpamDiscoveredAccounts** = ``"ec2:GetIpamDiscoveredAccounts"``

Grants permission to retrieve IPAM discovered accounts

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamDiscoveredAccounts.html

#### Defined in

actions/ec2.ts:2898

___

### GetIpamDiscoveredPublicAddresses

• **GetIpamDiscoveredPublicAddresses** = ``"ec2:GetIpamDiscoveredPublicAddresses"``

Grants permission to retrieve the public IP addresses that have been discovered
by IPAM

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamDiscoveredPublicAddresses.html

#### Defined in

actions/ec2.ts:2905

___

### GetIpamDiscoveredResourceCidrs

• **GetIpamDiscoveredResourceCidrs** = ``"ec2:GetIpamDiscoveredResourceCidrs"``

Grants permission to retrieve the resource CIDRs that are monitored as part of
a resource discovery

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamDiscoveredResourceCidrs.html

#### Defined in

actions/ec2.ts:2912

___

### GetIpamPoolAllocations

• **GetIpamPoolAllocations** = ``"ec2:GetIpamPoolAllocations"``

Grants permission to get a list of all the CIDR allocations in an Amazon VPC IP
Address Manager (IPAM) pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamPoolAllocations.html

#### Defined in

actions/ec2.ts:2919

___

### GetIpamPoolCidrs

• **GetIpamPoolCidrs** = ``"ec2:GetIpamPoolCidrs"``

Grants permission to get the CIDRs provisioned to an Amazon VPC IP Address Mana
ger (IPAM) pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamPoolCidrs.html

#### Defined in

actions/ec2.ts:2926

___

### GetIpamResourceCidrs

• **GetIpamResourceCidrs** = ``"ec2:GetIpamResourceCidrs"``

Grants permission to get information about the resources in an Amazon VPC IP Ad
dress Manager (IPAM) scope

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamResourceCidrs.html

#### Defined in

actions/ec2.ts:2933

___

### GetLaunchTemplateData

• **GetLaunchTemplateData** = ``"ec2:GetLaunchTemplateData"``

Grants permission to get the configuration data of the specified instance for u
se with a new launch template or launch template version

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetLaunchTemplateData.html

#### Defined in

actions/ec2.ts:2940

___

### GetManagedPrefixListAssociations

• **GetManagedPrefixListAssociations** = ``"ec2:GetManagedPrefixListAssociations"``

Grants permission to get information about the resources that are associated wi
th the specified managed prefix list

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetManagedPrefixListAssociations.html

#### Defined in

actions/ec2.ts:2947

___

### GetManagedPrefixListEntries

• **GetManagedPrefixListEntries** = ``"ec2:GetManagedPrefixListEntries"``

Grants permission to get information about the entries for a specified managed
prefix list

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetManagedPrefixListEntries.html

#### Defined in

actions/ec2.ts:2954

___

### GetNetworkInsightsAccessScopeAnalysisFindings

• **GetNetworkInsightsAccessScopeAnalysisFindings** = ``"ec2:GetNetworkInsightsAccessScopeAnalysisFindings"``

Grants permission to get the findings for one or more Network Access Scope anal
yses

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetNetworkInsightsAccessScopeAnalysisFindings.html

#### Defined in

actions/ec2.ts:2961

___

### GetNetworkInsightsAccessScopeContent

• **GetNetworkInsightsAccessScopeContent** = ``"ec2:GetNetworkInsightsAccessScopeContent"``

Grants permission to get the content for a specified Network Access Scope

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetNetworkInsightsAccessScopeContent.html

#### Defined in

actions/ec2.ts:2967

___

### GetPasswordData

• **GetPasswordData** = ``"ec2:GetPasswordData"``

Grants permission to retrieve the encrypted administrator password for a runnin
g Windows instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html

#### Defined in

actions/ec2.ts:2974

___

### GetReservedInstancesExchangeQuote

• **GetReservedInstancesExchangeQuote** = ``"ec2:GetReservedInstancesExchangeQuote"``

Grants permission to return a quote and exchange information for exchanging one
or more Convertible Reserved Instances for a new Convertible Reserved Instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetReservedInstancesExchangeQuote.html

#### Defined in

actions/ec2.ts:2981

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"ec2:GetResourcePolicy"``

Grants permission to describe an IAM policy that enables cross-account sharing

See https://docs.aws.amazon.com/vpc/latest/ipam/share-pool-ipam.html

#### Defined in

actions/ec2.ts:2987

___

### GetSecurityGroupsForVpc

• **GetSecurityGroupsForVpc** = ``"ec2:GetSecurityGroupsForVpc"``

Grants permission to retrieve a list of security groups for a specified VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSecurityGroupsForVpc.html

#### Defined in

actions/ec2.ts:2993

___

### GetSerialConsoleAccessStatus

• **GetSerialConsoleAccessStatus** = ``"ec2:GetSerialConsoleAccessStatus"``

Grants permission to retrieve the access status of your account to the EC2 seri
al console of all instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSerialConsoleAccessStatus.html

#### Defined in

actions/ec2.ts:3000

___

### GetSnapshotBlockPublicAccessState

• **GetSnapshotBlockPublicAccessState** = ``"ec2:GetSnapshotBlockPublicAccessState"``

Grants permission to retrieve the current state of the block public access for
snapshots setting for a Region

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSnapshotBlockPublicAccessState.html

#### Defined in

actions/ec2.ts:3007

___

### GetSpotPlacementScores

• **GetSpotPlacementScores** = ``"ec2:GetSpotPlacementScores"``

Grants permission to calculate the Spot placement score for a Region or Availab
ility Zone based on the specified target capacity and compute requirements

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html

#### Defined in

actions/ec2.ts:3014

___

### GetSubnetCidrReservations

• **GetSubnetCidrReservations** = ``"ec2:GetSubnetCidrReservations"``

Grants permission to retrieve information about the subnet CIDR reservations

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSubnetCidrReservations.html

#### Defined in

actions/ec2.ts:3020

___

### GetTransitGatewayAttachmentPropagations

• **GetTransitGatewayAttachmentPropagations** = ``"ec2:GetTransitGatewayAttachmentPropagations"``

Grants permission to list the route tables to which a resource attachment propa
gates routes

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayAttachmentPropagations.html

#### Defined in

actions/ec2.ts:3027

___

### GetTransitGatewayMulticastDomainAssociations

• **GetTransitGatewayMulticastDomainAssociations** = ``"ec2:GetTransitGatewayMulticastDomainAssociations"``

Grants permission to get information about the associations for a transit gatew
ay multicast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayMulticastDomainAssociations.html

#### Defined in

actions/ec2.ts:3034

___

### GetTransitGatewayPolicyTableAssociations

• **GetTransitGatewayPolicyTableAssociations** = ``"ec2:GetTransitGatewayPolicyTableAssociations"``

Grants permission to get information about associations for a transit gateway p
olicy table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayPolicyTableAssociations.html

#### Defined in

actions/ec2.ts:3041

___

### GetTransitGatewayPolicyTableEntries

• **GetTransitGatewayPolicyTableEntries** = ``"ec2:GetTransitGatewayPolicyTableEntries"``

Grants permission to get information about associations for a transit gateway p
olicy table entry

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayPolicyTableEntries.html

#### Defined in

actions/ec2.ts:3048

___

### GetTransitGatewayPrefixListReferences

• **GetTransitGatewayPrefixListReferences** = ``"ec2:GetTransitGatewayPrefixListReferences"``

Grants permission to get information about prefix list references for a transit
gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayPrefixListReferences.html

#### Defined in

actions/ec2.ts:3055

___

### GetTransitGatewayRouteTableAssociations

• **GetTransitGatewayRouteTableAssociations** = ``"ec2:GetTransitGatewayRouteTableAssociations"``

Grants permission to get information about associations for a transit gateway r
oute table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayRouteTableAssociations.html

#### Defined in

actions/ec2.ts:3062

___

### GetTransitGatewayRouteTablePropagations

• **GetTransitGatewayRouteTablePropagations** = ``"ec2:GetTransitGatewayRouteTablePropagations"``

Grants permission to get information about the route table propagations for a t
ransit gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayRouteTablePropagations.html

#### Defined in

actions/ec2.ts:3069

___

### GetVerifiedAccessEndpointPolicy

• **GetVerifiedAccessEndpointPolicy** = ``"ec2:GetVerifiedAccessEndpointPolicy"``

Grants permission to show the Verified Access policy associated with the endpoi
nt

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetVerifiedAccessEndpointPolicy.html

#### Defined in

actions/ec2.ts:3076

___

### GetVerifiedAccessGroupPolicy

• **GetVerifiedAccessGroupPolicy** = ``"ec2:GetVerifiedAccessGroupPolicy"``

Grants permission to show the contents of the Verified Access policy associated
with the group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetVerifiedAccessGroupPolicy.html

#### Defined in

actions/ec2.ts:3083

___

### GetVerifiedAccessInstanceWebAcl

• **GetVerifiedAccessInstanceWebAcl** = ``"ec2:GetVerifiedAccessInstanceWebAcl"``

Grants permission to show the AWS Web Application Firewall (WAF) web access con
trol list (ACL) for a Verified Access instance

See https://docs.aws.amazon.com/verified-access/latest/ug/waf-integration.html

#### Defined in

actions/ec2.ts:3090

___

### GetVpnConnectionDeviceSampleConfiguration

• **GetVpnConnectionDeviceSampleConfiguration** = ``"ec2:GetVpnConnectionDeviceSampleConfiguration"``

Grants permission to download an AWS-provided sample configuration file to be u
sed with the customer gateway device

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetVpnConnectionDeviceSampleConfiguration.html

#### Defined in

actions/ec2.ts:3097

___

### GetVpnConnectionDeviceTypes

• **GetVpnConnectionDeviceTypes** = ``"ec2:GetVpnConnectionDeviceTypes"``

Grants permission to obtain a list of customer gateway devices for which sample
configuration files can be provided

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetVpnConnectionDeviceTypes.html

#### Defined in

actions/ec2.ts:3104

___

### GetVpnTunnelReplacementStatus

• **GetVpnTunnelReplacementStatus** = ``"ec2:GetVpnTunnelReplacementStatus"``

Grants permission to view available tunnel endpoint maintenance events

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetVpnTunnelReplacementStatus.html

#### Defined in

actions/ec2.ts:3110

___

### ImportByoipCidrToIpam

• **ImportByoipCidrToIpam** = ``"ec2:ImportByoipCidrToIpam"``

Grants permission to transfer existing BYOIP IPv4 CIDRs to IPAM

See https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoip-ipam-transfer-ipv4.html

#### Defined in

actions/ec2.ts:3116

___

### ImportClientVpnClientCertificateRevocationList

• **ImportClientVpnClientCertificateRevocationList** = ``"ec2:ImportClientVpnClientCertificateRevocationList"``

Grants permission to upload a client certificate revocation list to a Client VP
N endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportClientVpnClientCertificateRevocationList.html

#### Defined in

actions/ec2.ts:3123

___

### ImportImage

• **ImportImage** = ``"ec2:ImportImage"``

Grants permission to import single or multi-volume disk images or EBS snapshots
into an Amazon Machine Image (AMI)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html

#### Defined in

actions/ec2.ts:3130

___

### ImportInstance

• **ImportInstance** = ``"ec2:ImportInstance"``

Grants permission to create an import instance task using metadata from a disk
image

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html

#### Defined in

actions/ec2.ts:3137

___

### ImportKeyPair

• **ImportKeyPair** = ``"ec2:ImportKeyPair"``

Grants permission to import a public key from an RSA key pair that was created
with a third-party tool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html

#### Defined in

actions/ec2.ts:3144

___

### ImportSnapshot

• **ImportSnapshot** = ``"ec2:ImportSnapshot"``

Grants permission to import a disk into an EBS snapshot

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportSnapshot.html

#### Defined in

actions/ec2.ts:3150

___

### ImportVolume

• **ImportVolume** = ``"ec2:ImportVolume"``

Grants permission to create an import volume task using metadata from a disk im
age

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportVolume.html

#### Defined in

actions/ec2.ts:3157

___

### InjectApiError

• **InjectApiError** = ``"ec2:InjectApiError"``

Grants permission to temporarily inject errors for target API requests

See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html

#### Defined in

actions/ec2.ts:3163

___

### ListImagesInRecycleBin

• **ListImagesInRecycleBin** = ``"ec2:ListImagesInRecycleBin"``

Grants permission to list Amazon Machine Images (AMIs) that are currently in th
e Recycle Bin

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ListImagesInRecycleBin.html

#### Defined in

actions/ec2.ts:3170

___

### ListSnapshotsInRecycleBin

• **ListSnapshotsInRecycleBin** = ``"ec2:ListSnapshotsInRecycleBin"``

Grants permission to list the Amazon EBS snapshots that are currently in the Re
cycle Bin

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ListSnapshotsInRecycleBin.html

#### Defined in

actions/ec2.ts:3177

___

### LockSnapshot

• **LockSnapshot** = ``"ec2:LockSnapshot"``

Grants permission to lock an Amazon EBS snapshot in either governance or compli
ance mode to protect it against accidental or malicious deletions

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LockSnapshot.html

#### Defined in

actions/ec2.ts:3184

___

### ModifyAddressAttribute

• **ModifyAddressAttribute** = ``"ec2:ModifyAddressAttribute"``

Grants permission to modify an attribute of the specified Elastic IP address

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyAddressAttribute.html

#### Defined in

actions/ec2.ts:3190

___

### ModifyAvailabilityZoneGroup

• **ModifyAvailabilityZoneGroup** = ``"ec2:ModifyAvailabilityZoneGroup"``

Grants permission to modify the opt-in status of the Local Zone and Wavelength
Zone group for your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyAvailabilityZoneGroup.html

#### Defined in

actions/ec2.ts:3197

___

### ModifyCapacityReservation

• **ModifyCapacityReservation** = ``"ec2:ModifyCapacityReservation"``

Grants permission to modify a Capacity Reservation's capacity and the condition
s under which it is to be released

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyCapacityReservation.html

#### Defined in

actions/ec2.ts:3204

___

### ModifyCapacityReservationFleet

• **ModifyCapacityReservationFleet** = ``"ec2:ModifyCapacityReservationFleet"``

Grants permission to modify a Capacity Reservation Fleet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyCapacityReservationFleet.html

#### Defined in

actions/ec2.ts:3210

___

### ModifyClientVpnEndpoint

• **ModifyClientVpnEndpoint** = ``"ec2:ModifyClientVpnEndpoint"``

Grants permission to modify a Client VPN endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyClientVpnEndpoint.html

#### Defined in

actions/ec2.ts:3216

___

### ModifyDefaultCreditSpecification

• **ModifyDefaultCreditSpecification** = ``"ec2:ModifyDefaultCreditSpecification"``

Grants permission to change the account level default credit option for CPU usa
ge of burstable performance instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyDefaultCreditSpecification.html

#### Defined in

actions/ec2.ts:3223

___

### ModifyEbsDefaultKmsKeyId

• **ModifyEbsDefaultKmsKeyId** = ``"ec2:ModifyEbsDefaultKmsKeyId"``

Grants permission to change the default customer master key (CMK) for EBS encry
ption by default for your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyEbsDefaultKmsKeyId.html

#### Defined in

actions/ec2.ts:3230

___

### ModifyFleet

• **ModifyFleet** = ``"ec2:ModifyFleet"``

Grants permission to modify an EC2 Fleet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFleet.html

#### Defined in

actions/ec2.ts:3236

___

### ModifyFpgaImageAttribute

• **ModifyFpgaImageAttribute** = ``"ec2:ModifyFpgaImageAttribute"``

Grants permission to modify an attribute of an Amazon FPGA Image (AFI)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFpgaImageAttribute.html

#### Defined in

actions/ec2.ts:3242

___

### ModifyHosts

• **ModifyHosts** = ``"ec2:ModifyHosts"``

Grants permission to modify a Dedicated Host

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyHosts.html

#### Defined in

actions/ec2.ts:3248

___

### ModifyIdFormat

• **ModifyIdFormat** = ``"ec2:ModifyIdFormat"``

Grants permission to modify the ID format for a resource

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIdFormat.html

#### Defined in

actions/ec2.ts:3254

___

### ModifyIdentityIdFormat

• **ModifyIdentityIdFormat** = ``"ec2:ModifyIdentityIdFormat"``

Grants permission to modify the ID format of a resource for a specific principa
l in your account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIdentityIdFormat.html

#### Defined in

actions/ec2.ts:3261

___

### ModifyImageAttribute

• **ModifyImageAttribute** = ``"ec2:ModifyImageAttribute"``

Grants permission to modify an attribute of an Amazon Machine Image (AMI)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html

#### Defined in

actions/ec2.ts:3267

___

### ModifyInstanceAttribute

• **ModifyInstanceAttribute** = ``"ec2:ModifyInstanceAttribute"``

Grants permission to modify an attribute of an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html

#### Defined in

actions/ec2.ts:3273

___

### ModifyInstanceCapacityReservationAttributes

• **ModifyInstanceCapacityReservationAttributes** = ``"ec2:ModifyInstanceCapacityReservationAttributes"``

Grants permission to modify the Capacity Reservation settings for a stopped ins
tance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCapacityReservationAttributes.html

#### Defined in

actions/ec2.ts:3280

___

### ModifyInstanceCreditSpecification

• **ModifyInstanceCreditSpecification** = ``"ec2:ModifyInstanceCreditSpecification"``

Grants permission to modify the credit option for CPU usage on an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html

#### Defined in

actions/ec2.ts:3286

___

### ModifyInstanceEventStartTime

• **ModifyInstanceEventStartTime** = ``"ec2:ModifyInstanceEventStartTime"``

Grants permission to modify the start time for a scheduled EC2 instance event

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceEventStartTime.html

#### Defined in

actions/ec2.ts:3292

___

### ModifyInstanceEventWindow

• **ModifyInstanceEventWindow** = ``"ec2:ModifyInstanceEventWindow"``

Grants permission to modify the specified event window

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceEventWindow.html

#### Defined in

actions/ec2.ts:3298

___

### ModifyInstanceMaintenanceOptions

• **ModifyInstanceMaintenanceOptions** = ``"ec2:ModifyInstanceMaintenanceOptions"``

Grants permission to modify the recovery behaviour for an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceMaintenanceOptions.html

#### Defined in

actions/ec2.ts:3304

___

### ModifyInstanceMetadataOptions

• **ModifyInstanceMetadataOptions** = ``"ec2:ModifyInstanceMetadataOptions"``

Grants permission to modify the metadata options for an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceMetadataOptions.html

#### Defined in

actions/ec2.ts:3310

___

### ModifyInstancePlacement

• **ModifyInstancePlacement** = ``"ec2:ModifyInstancePlacement"``

Grants permission to modify the placement attributes for an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstancePlacement.html

#### Defined in

actions/ec2.ts:3316

___

### ModifyIpam

• **ModifyIpam** = ``"ec2:ModifyIpam"``

Grants permission to modify the configurations of an Amazon VPC IP Address Mana
ger (IPAM)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpam.html

#### Defined in

actions/ec2.ts:3323

___

### ModifyIpamPool

• **ModifyIpamPool** = ``"ec2:ModifyIpamPool"``

Grants permission to modify the configurations of an Amazon VPC IP Address Mana
ger (IPAM) pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamPool.html

#### Defined in

actions/ec2.ts:3330

___

### ModifyIpamResourceCidr

• **ModifyIpamResourceCidr** = ``"ec2:ModifyIpamResourceCidr"``

Grants permission to modify the configurations of an Amazon VPC IP Address Mana
ger (IPAM) resource CIDR

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamResourceCidr.html

#### Defined in

actions/ec2.ts:3337

___

### ModifyIpamResourceDiscovery

• **ModifyIpamResourceDiscovery** = ``"ec2:ModifyIpamResourceDiscovery"``

Grants permission to modify a resource discovery

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamResourceDiscovery.html

#### Defined in

actions/ec2.ts:3343

___

### ModifyIpamScope

• **ModifyIpamScope** = ``"ec2:ModifyIpamScope"``

Grants permission to modify the configurations of an Amazon VPC IP Address Mana
ger (IPAM) scope

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamScope.html

#### Defined in

actions/ec2.ts:3350

___

### ModifyLaunchTemplate

• **ModifyLaunchTemplate** = ``"ec2:ModifyLaunchTemplate"``

Grants permission to modify a launch template

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyLaunchTemplate.html

#### Defined in

actions/ec2.ts:3356

___

### ModifyLocalGatewayRoute

• **ModifyLocalGatewayRoute** = ``"ec2:ModifyLocalGatewayRoute"``

Grants permission to modify a local gateway route

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyLocalGatewayRoute.html

#### Defined in

actions/ec2.ts:3362

___

### ModifyManagedPrefixList

• **ModifyManagedPrefixList** = ``"ec2:ModifyManagedPrefixList"``

Grants permission to modify a managed prefix list

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyManagedPrefixList.html

#### Defined in

actions/ec2.ts:3368

___

### ModifyNetworkInterfaceAttribute

• **ModifyNetworkInterfaceAttribute** = ``"ec2:ModifyNetworkInterfaceAttribute"``

Grants permission to modify an attribute of a network interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyNetworkInterfaceAttribute.html

#### Defined in

actions/ec2.ts:3374

___

### ModifyPrivateDnsNameOptions

• **ModifyPrivateDnsNameOptions** = ``"ec2:ModifyPrivateDnsNameOptions"``

Grants permission to modify the options for instance hostnames for the specifie
d instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyPrivateDnsNameOptions.html

#### Defined in

actions/ec2.ts:3381

___

### ModifyReservedInstances

• **ModifyReservedInstances** = ``"ec2:ModifyReservedInstances"``

Grants permission to modify attributes of one or more Reserved Instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyReservedInstances.html

#### Defined in

actions/ec2.ts:3387

___

### ModifySecurityGroupRules

• **ModifySecurityGroupRules** = ``"ec2:ModifySecurityGroupRules"``

Grants permission to modify the rules of a security group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySecurityGroupRules.html

#### Defined in

actions/ec2.ts:3393

___

### ModifySnapshotAttribute

• **ModifySnapshotAttribute** = ``"ec2:ModifySnapshotAttribute"``

Grants permission to add or remove permission settings for a snapshot

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html

#### Defined in

actions/ec2.ts:3399

___

### ModifySnapshotTier

• **ModifySnapshotTier** = ``"ec2:ModifySnapshotTier"``

Grants permission to archive Amazon EBS snapshots

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotTier.html

#### Defined in

actions/ec2.ts:3405

___

### ModifySpotFleetRequest

• **ModifySpotFleetRequest** = ``"ec2:ModifySpotFleetRequest"``

Grants permission to modify a Spot Fleet request

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySpotFleetRequest.html

#### Defined in

actions/ec2.ts:3411

___

### ModifySubnetAttribute

• **ModifySubnetAttribute** = ``"ec2:ModifySubnetAttribute"``

Grants permission to modify an attribute of a subnet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySubnetAttribute.html

#### Defined in

actions/ec2.ts:3417

___

### ModifyTrafficMirrorFilterNetworkServices

• **ModifyTrafficMirrorFilterNetworkServices** = ``"ec2:ModifyTrafficMirrorFilterNetworkServices"``

Grants permission to allow or restrict mirroring network services

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterNetworkServices.html

#### Defined in

actions/ec2.ts:3423

___

### ModifyTrafficMirrorFilterRule

• **ModifyTrafficMirrorFilterRule** = ``"ec2:ModifyTrafficMirrorFilterRule"``

Grants permission to modify a traffic mirror rule

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterRule.html

#### Defined in

actions/ec2.ts:3429

___

### ModifyTrafficMirrorSession

• **ModifyTrafficMirrorSession** = ``"ec2:ModifyTrafficMirrorSession"``

Grants permission to modify a traffic mirror session

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorSession.html

#### Defined in

actions/ec2.ts:3435

___

### ModifyTransitGateway

• **ModifyTransitGateway** = ``"ec2:ModifyTransitGateway"``

Grants permission to modify a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGateway.html

#### Defined in

actions/ec2.ts:3441

___

### ModifyTransitGatewayPrefixListReference

• **ModifyTransitGatewayPrefixListReference** = ``"ec2:ModifyTransitGatewayPrefixListReference"``

Grants permission to modify a transit gateway prefix list reference

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGatewayPrefixListReference.html

#### Defined in

actions/ec2.ts:3447

___

### ModifyTransitGatewayVpcAttachment

• **ModifyTransitGatewayVpcAttachment** = ``"ec2:ModifyTransitGatewayVpcAttachment"``

Grants permission to modify a VPC attachment on a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGatewayVpcAttachment.html

#### Defined in

actions/ec2.ts:3453

___

### ModifyVerifiedAccessEndpoint

• **ModifyVerifiedAccessEndpoint** = ``"ec2:ModifyVerifiedAccessEndpoint"``

Grants permission to modify the configuration of a Verified Access endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVerifiedAccessEndpoint.html

#### Defined in

actions/ec2.ts:3459

___

### ModifyVerifiedAccessEndpointPolicy

• **ModifyVerifiedAccessEndpointPolicy** = ``"ec2:ModifyVerifiedAccessEndpointPolicy"``

Grants permission to modify the specified Verified Access endpoint policy

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVerifiedAccessEndpointPolicy.html

#### Defined in

actions/ec2.ts:3465

___

### ModifyVerifiedAccessGroup

• **ModifyVerifiedAccessGroup** = ``"ec2:ModifyVerifiedAccessGroup"``

Grants permission to modify the specified Verified Access Group configuration

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVerifiedAccessGroup.html

#### Defined in

actions/ec2.ts:3471

___

### ModifyVerifiedAccessGroupPolicy

• **ModifyVerifiedAccessGroupPolicy** = ``"ec2:ModifyVerifiedAccessGroupPolicy"``

Grants permission to modify the specified Verified Access group policy

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVerifiedAccessGroupPolicy.html

#### Defined in

actions/ec2.ts:3477

___

### ModifyVerifiedAccessInstance

• **ModifyVerifiedAccessInstance** = ``"ec2:ModifyVerifiedAccessInstance"``

Grants permission to modify the configuration of the specified Verified Access
instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVerifiedAccessInstance.html

#### Defined in

actions/ec2.ts:3484

___

### ModifyVerifiedAccessInstanceLoggingConfiguration

• **ModifyVerifiedAccessInstanceLoggingConfiguration** = ``"ec2:ModifyVerifiedAccessInstanceLoggingConfiguration"``

Grants permission to modify the logging configuration for the specified Verifie
d Access instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVerifiedAccessInstanceLoggingConfiguration.html

#### Defined in

actions/ec2.ts:3491

___

### ModifyVerifiedAccessTrustProvider

• **ModifyVerifiedAccessTrustProvider** = ``"ec2:ModifyVerifiedAccessTrustProvider"``

Grants permission to modify the configuration of the specified Verified Access
trust provider

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVerifiedAccessTrustProvider.html

#### Defined in

actions/ec2.ts:3498

___

### ModifyVolume

• **ModifyVolume** = ``"ec2:ModifyVolume"``

Grants permission to modify the parameters of an EBS volume

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVolume.html

#### Defined in

actions/ec2.ts:3504

___

### ModifyVolumeAttribute

• **ModifyVolumeAttribute** = ``"ec2:ModifyVolumeAttribute"``

Grants permission to modify an attribute of a volume

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVolumeAttribute.html

#### Defined in

actions/ec2.ts:3510

___

### ModifyVpcAttribute

• **ModifyVpcAttribute** = ``"ec2:ModifyVpcAttribute"``

Grants permission to modify an attribute of a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcAttribute.html

#### Defined in

actions/ec2.ts:3516

___

### ModifyVpcEndpoint

• **ModifyVpcEndpoint** = ``"ec2:ModifyVpcEndpoint"``

Grants permission to modify an attribute of a VPC endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html

#### Defined in

actions/ec2.ts:3522

___

### ModifyVpcEndpointConnectionNotification

• **ModifyVpcEndpointConnectionNotification** = ``"ec2:ModifyVpcEndpointConnectionNotification"``

Grants permission to modify a connection notification for a VPC endpoint or VPC
endpoint service

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointConnectionNotification.html

#### Defined in

actions/ec2.ts:3529

___

### ModifyVpcEndpointServiceConfiguration

• **ModifyVpcEndpointServiceConfiguration** = ``"ec2:ModifyVpcEndpointServiceConfiguration"``

Grants permission to modify the attributes of a VPC endpoint service configurat
ion

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointServiceConfiguration.html

#### Defined in

actions/ec2.ts:3536

___

### ModifyVpcEndpointServicePayerResponsibility

• **ModifyVpcEndpointServicePayerResponsibility** = ``"ec2:ModifyVpcEndpointServicePayerResponsibility"``

Grants permission to modify the payer responsibility for a VPC endpoint service

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointServicePayerResponsibility.html

#### Defined in

actions/ec2.ts:3542

___

### ModifyVpcEndpointServicePermissions

• **ModifyVpcEndpointServicePermissions** = ``"ec2:ModifyVpcEndpointServicePermissions"``

Grants permission to modify the permissions for a VPC endpoint service

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointServicePermissions.html

#### Defined in

actions/ec2.ts:3548

___

### ModifyVpcPeeringConnectionOptions

• **ModifyVpcPeeringConnectionOptions** = ``"ec2:ModifyVpcPeeringConnectionOptions"``

Grants permission to modify the VPC peering connection options on one side of a
VPC peering connection

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcPeeringConnectionOptions.html

#### Defined in

actions/ec2.ts:3555

___

### ModifyVpcTenancy

• **ModifyVpcTenancy** = ``"ec2:ModifyVpcTenancy"``

Grants permission to modify the instance tenancy attribute of a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcTenancy.html

#### Defined in

actions/ec2.ts:3561

___

### ModifyVpnConnection

• **ModifyVpnConnection** = ``"ec2:ModifyVpnConnection"``

Grants permission to modify the target gateway of a Site-to-Site VPN connection

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnConnection.html

#### Defined in

actions/ec2.ts:3567

___

### ModifyVpnConnectionOptions

• **ModifyVpnConnectionOptions** = ``"ec2:ModifyVpnConnectionOptions"``

Grants permission to modify the connection options for your Site-to-Site VPN co
nnection

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnConnectionOptions.html

#### Defined in

actions/ec2.ts:3574

___

### ModifyVpnTunnelCertificate

• **ModifyVpnTunnelCertificate** = ``"ec2:ModifyVpnTunnelCertificate"``

Grants permission to modify the certificate for a Site-to-Site VPN connection

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnTunnelCertificate.html

#### Defined in

actions/ec2.ts:3580

___

### ModifyVpnTunnelOptions

• **ModifyVpnTunnelOptions** = ``"ec2:ModifyVpnTunnelOptions"``

Grants permission to modify the options for a Site-to-Site VPN connection

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnTunnelOptions.html

#### Defined in

actions/ec2.ts:3586

___

### MonitorInstances

• **MonitorInstances** = ``"ec2:MonitorInstances"``

Grants permission to enable detailed monitoring for a running instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MonitorInstances.html

#### Defined in

actions/ec2.ts:3592

___

### MoveAddressToVpc

• **MoveAddressToVpc** = ``"ec2:MoveAddressToVpc"``

Grants permission to move an Elastic IP address from the EC2-Classic platform t
o the EC2-VPC platform

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MoveAddressToVpc.html

#### Defined in

actions/ec2.ts:3599

___

### MoveByoipCidrToIpam

• **MoveByoipCidrToIpam** = ``"ec2:MoveByoipCidrToIpam"``

Grants permission to move a BYOIP IPv4 CIDR to Amazon VPC IP Address Manager (I
PAM) from a public IPv4 pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MoveByoipCidrToIpam.html

#### Defined in

actions/ec2.ts:3606

___

### PauseVolumeIO

• **PauseVolumeIO** = ``"ec2:PauseVolumeIO"``

Grants permission to temporarily pause I/O operations for a target Amazon EBS v
olume

See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#ebs-actions-reference

#### Defined in

actions/ec2.ts:3613

___

### ProvisionByoipCidr

• **ProvisionByoipCidr** = ``"ec2:ProvisionByoipCidr"``

Grants permission to provision an address range for use in AWS through bring yo
ur own IP addresses (BYOIP), and to create a corresponding address pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ProvisionByoipCidr.html

#### Defined in

actions/ec2.ts:3620

___

### ProvisionIpamByoasn

• **ProvisionIpamByoasn** = ``"ec2:ProvisionIpamByoasn"``

Grants permission to provision an Autonomous System Number (ASN) for use in an
Amazon Web Services account

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ProvisionIpamByoasn.html

#### Defined in

actions/ec2.ts:3627

___

### ProvisionIpamPoolCidr

• **ProvisionIpamPoolCidr** = ``"ec2:ProvisionIpamPoolCidr"``

Grants permission to provision a CIDR to an Amazon VPC IP Address Manager (IPAM
) pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ProvisionIpamPoolCidr.html

#### Defined in

actions/ec2.ts:3634

___

### ProvisionPublicIpv4PoolCidr

• **ProvisionPublicIpv4PoolCidr** = ``"ec2:ProvisionPublicIpv4PoolCidr"``

Grants permission to provision a CIDR to a public IPv4 pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ProvisionPublicIpv4PoolCidr.html

#### Defined in

actions/ec2.ts:3640

___

### PurchaseCapacityBlock

• **PurchaseCapacityBlock** = ``"ec2:PurchaseCapacityBlock"``

Grants permission to purchase a Capacity Block offering

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseCapacityBlock.html

#### Defined in

actions/ec2.ts:3646

___

### PurchaseHostReservation

• **PurchaseHostReservation** = ``"ec2:PurchaseHostReservation"``

Grants permission to purchase a reservation with configurations that match thos
e of a Dedicated Host

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseHostReservation.html

#### Defined in

actions/ec2.ts:3653

___

### PurchaseReservedInstancesOffering

• **PurchaseReservedInstancesOffering** = ``"ec2:PurchaseReservedInstancesOffering"``

Grants permission to purchase a Reserved Instance offering

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseReservedInstancesOffering.html

#### Defined in

actions/ec2.ts:3659

___

### PurchaseScheduledInstances

• **PurchaseScheduledInstances** = ``"ec2:PurchaseScheduledInstances"``

Grants permission to purchase one or more Scheduled Instances with a specified
schedule

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseScheduledInstances.html

#### Defined in

actions/ec2.ts:3666

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"ec2:PutResourcePolicy"``

Grants permission to attach an IAM policy that enables cross-account sharing to
a resource

See https://docs.aws.amazon.com/vpc/latest/ipam/share-pool-ipam.html

#### Defined in

actions/ec2.ts:3673

___

### RebootInstances

• **RebootInstances** = ``"ec2:RebootInstances"``

Grants permission to request a reboot of one or more instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RebootInstances.html

#### Defined in

actions/ec2.ts:3679

___

### RegisterImage

• **RegisterImage** = ``"ec2:RegisterImage"``

Grants permission to register an Amazon Machine Image (AMI)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterImage.html

#### Defined in

actions/ec2.ts:3685

___

### RegisterInstanceEventNotificationAttributes

• **RegisterInstanceEventNotificationAttributes** = ``"ec2:RegisterInstanceEventNotificationAttributes"``

Grants permission to add tags to the set of tags to include in notifications ab
out scheduled events for your instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterInstanceEventNotificationAttributes.html

#### Defined in

actions/ec2.ts:3692

___

### RegisterTransitGatewayMulticastGroupMembers

• **RegisterTransitGatewayMulticastGroupMembers** = ``"ec2:RegisterTransitGatewayMulticastGroupMembers"``

Grants permission to register one or more network interfaces as a member of a g
roup IP address in a transit gateway multicast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterTransitGatewayMulticastGroupMembers.html

#### Defined in

actions/ec2.ts:3699

___

### RegisterTransitGatewayMulticastGroupSources

• **RegisterTransitGatewayMulticastGroupSources** = ``"ec2:RegisterTransitGatewayMulticastGroupSources"``

Grants permission to register one or more network interfaces as a source of a g
roup IP address in a transit gateway multicast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterTransitGatewayMulticastGroupSources.html

#### Defined in

actions/ec2.ts:3706

___

### RejectTransitGatewayMulticastDomainAssociations

• **RejectTransitGatewayMulticastDomainAssociations** = ``"ec2:RejectTransitGatewayMulticastDomainAssociations"``

Grants permission to reject requests to associate cross-account subnets with a
transit gateway multicast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectTransitGatewayMulticastDomainAssociations.html

#### Defined in

actions/ec2.ts:3713

___

### RejectTransitGatewayPeeringAttachment

• **RejectTransitGatewayPeeringAttachment** = ``"ec2:RejectTransitGatewayPeeringAttachment"``

Grants permission to reject a transit gateway peering attachment request

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectTransitGatewayPeeringAttachment.html

#### Defined in

actions/ec2.ts:3719

___

### RejectTransitGatewayVpcAttachment

• **RejectTransitGatewayVpcAttachment** = ``"ec2:RejectTransitGatewayVpcAttachment"``

Grants permission to reject a request to attach a VPC to a transit gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectTransitGatewayVpcAttachment.html

#### Defined in

actions/ec2.ts:3725

___

### RejectVpcEndpointConnections

• **RejectVpcEndpointConnections** = ``"ec2:RejectVpcEndpointConnections"``

Grants permission to reject one or more VPC endpoint connection requests to a V
PC endpoint service

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectVpcEndpointConnections.html

#### Defined in

actions/ec2.ts:3732

___

### RejectVpcPeeringConnection

• **RejectVpcPeeringConnection** = ``"ec2:RejectVpcPeeringConnection"``

Grants permission to reject a VPC peering connection request

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectVpcPeeringConnection.html

#### Defined in

actions/ec2.ts:3738

___

### ReleaseAddress

• **ReleaseAddress** = ``"ec2:ReleaseAddress"``

Grants permission to release an Elastic IP address

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseAddress.html

#### Defined in

actions/ec2.ts:3744

___

### ReleaseHosts

• **ReleaseHosts** = ``"ec2:ReleaseHosts"``

Grants permission to release one or more On-Demand Dedicated Hosts

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseHosts.html

#### Defined in

actions/ec2.ts:3750

___

### ReleaseIpamPoolAllocation

• **ReleaseIpamPoolAllocation** = ``"ec2:ReleaseIpamPoolAllocation"``

Grants permission to release an allocation within an Amazon VPC IP Address Mana
ger (IPAM) pool

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseIpamPoolAllocation.html

#### Defined in

actions/ec2.ts:3757

___

### ReplaceIamInstanceProfileAssociation

• **ReplaceIamInstanceProfileAssociation** = ``"ec2:ReplaceIamInstanceProfileAssociation"``

Grants permission to replace an IAM instance profile for an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceIamInstanceProfileAssociation.html

#### Defined in

actions/ec2.ts:3763

___

### ReplaceNetworkAclAssociation

• **ReplaceNetworkAclAssociation** = ``"ec2:ReplaceNetworkAclAssociation"``

Grants permission to change which network ACL a subnet is associated with

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceNetworkAclAssociation.html

#### Defined in

actions/ec2.ts:3769

___

### ReplaceNetworkAclEntry

• **ReplaceNetworkAclEntry** = ``"ec2:ReplaceNetworkAclEntry"``

Grants permission to replace an entry (rule) in a network ACL

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceNetworkAclEntry.html

#### Defined in

actions/ec2.ts:3775

___

### ReplaceRoute

• **ReplaceRoute** = ``"ec2:ReplaceRoute"``

Grants permission to replace a route within a route table in a VPC

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceRoute.html

#### Defined in

actions/ec2.ts:3781

___

### ReplaceRouteTableAssociation

• **ReplaceRouteTableAssociation** = ``"ec2:ReplaceRouteTableAssociation"``

Grants permission to change the route table that is associated with a subnet

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceRouteTableAssociation.html

#### Defined in

actions/ec2.ts:3787

___

### ReplaceTransitGatewayRoute

• **ReplaceTransitGatewayRoute** = ``"ec2:ReplaceTransitGatewayRoute"``

Grants permission to replace a route in a transit gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceTransitGatewayRoute.html

#### Defined in

actions/ec2.ts:3793

___

### ReplaceVpnTunnel

• **ReplaceVpnTunnel** = ``"ec2:ReplaceVpnTunnel"``

Grants permission to replace a VPN tunnel

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceVpnTunnel.html

#### Defined in

actions/ec2.ts:3799

___

### ReportInstanceStatus

• **ReportInstanceStatus** = ``"ec2:ReportInstanceStatus"``

Grants permission to submit feedback about the status of an instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReportInstanceStatus.html

#### Defined in

actions/ec2.ts:3805

___

### RequestSpotFleet

• **RequestSpotFleet** = ``"ec2:RequestSpotFleet"``

Grants permission to create a Spot Fleet request

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html

#### Defined in

actions/ec2.ts:3811

___

### RequestSpotInstances

• **RequestSpotInstances** = ``"ec2:RequestSpotInstances"``

Grants permission to create a Spot Instance request

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html

#### Defined in

actions/ec2.ts:3817

___

### ResetAddressAttribute

• **ResetAddressAttribute** = ``"ec2:ResetAddressAttribute"``

Grants permission to reset the attribute of the specified IP address

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetAddressAttribute.html

#### Defined in

actions/ec2.ts:3823

___

### ResetEbsDefaultKmsKeyId

• **ResetEbsDefaultKmsKeyId** = ``"ec2:ResetEbsDefaultKmsKeyId"``

Grants permission to reset the default customer master key (CMK) for EBS encryp
tion for your account to use the AWS-managed CMK for EBS

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetEbsDefaultKmsKeyId.html

#### Defined in

actions/ec2.ts:3830

___

### ResetFpgaImageAttribute

• **ResetFpgaImageAttribute** = ``"ec2:ResetFpgaImageAttribute"``

Grants permission to reset an attribute of an Amazon FPGA Image (AFI) to its de
fault value

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetFpgaImageAttribute.html

#### Defined in

actions/ec2.ts:3837

___

### ResetImageAttribute

• **ResetImageAttribute** = ``"ec2:ResetImageAttribute"``

Grants permission to reset an attribute of an Amazon Machine Image (AMI) to its
default value

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetImageAttribute.html

#### Defined in

actions/ec2.ts:3844

___

### ResetInstanceAttribute

• **ResetInstanceAttribute** = ``"ec2:ResetInstanceAttribute"``

Grants permission to reset an attribute of an instance to its default value

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetInstanceAttribute.html

#### Defined in

actions/ec2.ts:3850

___

### ResetNetworkInterfaceAttribute

• **ResetNetworkInterfaceAttribute** = ``"ec2:ResetNetworkInterfaceAttribute"``

Grants permission to reset an attribute of a network interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetNetworkInterfaceAttribute.html

#### Defined in

actions/ec2.ts:3856

___

### ResetSnapshotAttribute

• **ResetSnapshotAttribute** = ``"ec2:ResetSnapshotAttribute"``

Grants permission to reset permission settings for a snapshot

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetSnapshotAttribute.html

#### Defined in

actions/ec2.ts:3862

___

### RestoreAddressToClassic

• **RestoreAddressToClassic** = ``"ec2:RestoreAddressToClassic"``

Grants permission to restore an Elastic IP address that was previously moved to
the EC2-VPC platform back to the EC2-Classic platform

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreAddressToClassic.html

#### Defined in

actions/ec2.ts:3869

___

### RestoreImageFromRecycleBin

• **RestoreImageFromRecycleBin** = ``"ec2:RestoreImageFromRecycleBin"``

Grants permission to restore an Amazon Machine Image (AMI) from the Recycle Bin

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreImageFromRecycleBin.html

#### Defined in

actions/ec2.ts:3875

___

### RestoreManagedPrefixListVersion

• **RestoreManagedPrefixListVersion** = ``"ec2:RestoreManagedPrefixListVersion"``

Grants permission to restore the entries from a previous version of a managed p
refix list to a new version of the prefix list

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreManagedPrefixListVersion.html

#### Defined in

actions/ec2.ts:3882

___

### RestoreSnapshotFromRecycleBin

• **RestoreSnapshotFromRecycleBin** = ``"ec2:RestoreSnapshotFromRecycleBin"``

Grants permission to restore an Amazon EBS snapshot from the Recycle Bin

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreSnapshotFromRecycleBin.html

#### Defined in

actions/ec2.ts:3888

___

### RestoreSnapshotTier

• **RestoreSnapshotTier** = ``"ec2:RestoreSnapshotTier"``

Grants permission to restore an archived Amazon EBS snapshot for use temporaril
y or permanently, or modify the restore period or restore type for a snapshot t
hat was previously temporarily restored

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreSnapshotTier.html

#### Defined in

actions/ec2.ts:3896

___

### RevokeClientVpnIngress

• **RevokeClientVpnIngress** = ``"ec2:RevokeClientVpnIngress"``

Grants permission to remove an inbound authorization rule from a Client VPN end
point

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeClientVpnIngress.html

#### Defined in

actions/ec2.ts:3903

___

### RevokeSecurityGroupEgress

• **RevokeSecurityGroupEgress** = ``"ec2:RevokeSecurityGroupEgress"``

Grants permission to remove one or more outbound rules from a VPC security grou
p

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupEgress.html

#### Defined in

actions/ec2.ts:3910

___

### RevokeSecurityGroupIngress

• **RevokeSecurityGroupIngress** = ``"ec2:RevokeSecurityGroupIngress"``

Grants permission to remove one or more inbound rules from a security group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupIngress.html

#### Defined in

actions/ec2.ts:3916

___

### RunInstances

• **RunInstances** = ``"ec2:RunInstances"``

Grants permission to launch one or more instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html

#### Defined in

actions/ec2.ts:3922

___

### RunScheduledInstances

• **RunScheduledInstances** = ``"ec2:RunScheduledInstances"``

Grants permission to launch one or more Scheduled Instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunScheduledInstances.html

#### Defined in

actions/ec2.ts:3928

___

### SearchLocalGatewayRoutes

• **SearchLocalGatewayRoutes** = ``"ec2:SearchLocalGatewayRoutes"``

Grants permission to search for routes in a local gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchLocalGatewayRoutes.html

#### Defined in

actions/ec2.ts:3934

___

### SearchTransitGatewayMulticastGroups

• **SearchTransitGatewayMulticastGroups** = ``"ec2:SearchTransitGatewayMulticastGroups"``

Grants permission to search for groups, sources, and members in a transit gatew
ay multicast domain

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html

#### Defined in

actions/ec2.ts:3941

___

### SearchTransitGatewayRoutes

• **SearchTransitGatewayRoutes** = ``"ec2:SearchTransitGatewayRoutes"``

Grants permission to search for routes in a transit gateway route table

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayRoutes.html

#### Defined in

actions/ec2.ts:3947

___

### SendDiagnosticInterrupt

• **SendDiagnosticInterrupt** = ``"ec2:SendDiagnosticInterrupt"``

Grants permission to send a diagnostic interrupt to an Amazon EC2 instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SendDiagnosticInterrupt.html

#### Defined in

actions/ec2.ts:3953

___

### SendSpotInstanceInterruptions

• **SendSpotInstanceInterruptions** = ``"ec2:SendSpotInstanceInterruptions"``

Grants permission to interrupt a Spot Instance

See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#send-spot-instance-interruptions

#### Defined in

actions/ec2.ts:3959

___

### StartInstances

• **StartInstances** = ``"ec2:StartInstances"``

Grants permission to start a stopped instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartInstances.html

#### Defined in

actions/ec2.ts:3965

___

### StartNetworkInsightsAccessScopeAnalysis

• **StartNetworkInsightsAccessScopeAnalysis** = ``"ec2:StartNetworkInsightsAccessScopeAnalysis"``

Grants permission to start a Network Access Scope analysis

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartNetworkInsightsAccessScopeAnalysis.html

#### Defined in

actions/ec2.ts:3971

___

### StartNetworkInsightsAnalysis

• **StartNetworkInsightsAnalysis** = ``"ec2:StartNetworkInsightsAnalysis"``

Grants permission to start analyzing a specified path

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartNetworkInsightsAnalysis.html

#### Defined in

actions/ec2.ts:3977

___

### StartVpcEndpointServicePrivateDnsVerification

• **StartVpcEndpointServicePrivateDnsVerification** = ``"ec2:StartVpcEndpointServicePrivateDnsVerification"``

Grants permission to start the private DNS verification process for a VPC endpo
int service

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartVpcEndpointServicePrivateDnsVerification.html

#### Defined in

actions/ec2.ts:3984

___

### StopInstances

• **StopInstances** = ``"ec2:StopInstances"``

Grants permission to stop an Amazon EBS-backed instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StopInstances.html

#### Defined in

actions/ec2.ts:3990

___

### TerminateClientVpnConnections

• **TerminateClientVpnConnections** = ``"ec2:TerminateClientVpnConnections"``

Grants permission to terminate active Client VPN endpoint connections

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateClientVpnConnections.html

#### Defined in

actions/ec2.ts:3996

___

### TerminateInstances

• **TerminateInstances** = ``"ec2:TerminateInstances"``

Grants permission to shut down one or more instances

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html

#### Defined in

actions/ec2.ts:4002

___

### UnassignIpv6Addresses

• **UnassignIpv6Addresses** = ``"ec2:UnassignIpv6Addresses"``

Grants permission to unassign one or more IPv6 addresses from a network interfa
ce

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnassignIpv6Addresses.html

#### Defined in

actions/ec2.ts:4009

___

### UnassignPrivateIpAddresses

• **UnassignPrivateIpAddresses** = ``"ec2:UnassignPrivateIpAddresses"``

Grants permission to unassign one or more secondary private IP addresses from a
network interface

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnassignPrivateIpAddresses.html

#### Defined in

actions/ec2.ts:4016

___

### UnassignPrivateNatGatewayAddress

• **UnassignPrivateNatGatewayAddress** = ``"ec2:UnassignPrivateNatGatewayAddress"``

Grants permission to unassign secondary private IPv4 addresses from a private N
AT gateway

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnassignPrivateNatGatewayAddress.html

#### Defined in

actions/ec2.ts:4023

___

### UnlockSnapshot

• **UnlockSnapshot** = ``"ec2:UnlockSnapshot"``

Grants permission to unlock a snapshot that is locked in governance mode or in
compliance mode while still in the cooling-off period

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnlockSnapshot.html

#### Defined in

actions/ec2.ts:4030

___

### UnmonitorInstances

• **UnmonitorInstances** = ``"ec2:UnmonitorInstances"``

Grants permission to disable detailed monitoring for a running instance

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnmonitorInstances.html

#### Defined in

actions/ec2.ts:4036

___

### UpdateSecurityGroupRuleDescriptionsEgress

• **UpdateSecurityGroupRuleDescriptionsEgress** = ``"ec2:UpdateSecurityGroupRuleDescriptionsEgress"``

Grants permission to update descriptions for one or more outbound rules in a VP
C security group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UpdateSecurityGroupRuleDescriptionsEgress.html

#### Defined in

actions/ec2.ts:4043

___

### UpdateSecurityGroupRuleDescriptionsIngress

• **UpdateSecurityGroupRuleDescriptionsIngress** = ``"ec2:UpdateSecurityGroupRuleDescriptionsIngress"``

Grants permission to update descriptions for one or more inbound rules in a sec
urity group

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UpdateSecurityGroupRuleDescriptionsIngress.html

#### Defined in

actions/ec2.ts:4050

___

### WithdrawByoipCidr

• **WithdrawByoipCidr** = ``"ec2:WithdrawByoipCidr"``

Grants permission to stop advertising an address range that was provisioned for
use in AWS through bring your own IP addresses (BYOIP)

See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html

#### Defined in

actions/ec2.ts:4057
