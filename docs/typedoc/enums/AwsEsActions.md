[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEsActions

# Enumeration: AwsEsActions

All IAM policy actions for Amazon OpenSearch Service (ES)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchservice.html

2024-02-12T09:58:32.751Z

## Table of contents

### Enumeration Members

- [AcceptInboundConnection](AwsEsActions.md#acceptinboundconnection)
- [AcceptInboundCrossClusterSearchConnection](AwsEsActions.md#acceptinboundcrossclustersearchconnection)
- [AddDataSource](AwsEsActions.md#adddatasource)
- [AddTags](AwsEsActions.md#addtags)
- [AssociatePackage](AwsEsActions.md#associatepackage)
- [AuthorizeVpcEndpointAccess](AwsEsActions.md#authorizevpcendpointaccess)
- [CancelDomainConfigChange](AwsEsActions.md#canceldomainconfigchange)
- [CancelElasticsearchServiceSoftwareUpdate](AwsEsActions.md#cancelelasticsearchservicesoftwareupdate)
- [CancelServiceSoftwareUpdate](AwsEsActions.md#cancelservicesoftwareupdate)
- [CreateDomain](AwsEsActions.md#createdomain)
- [CreateElasticsearchDomain](AwsEsActions.md#createelasticsearchdomain)
- [CreateElasticsearchServiceRole](AwsEsActions.md#createelasticsearchservicerole)
- [CreateOutboundConnection](AwsEsActions.md#createoutboundconnection)
- [CreateOutboundCrossClusterSearchConnection](AwsEsActions.md#createoutboundcrossclustersearchconnection)
- [CreatePackage](AwsEsActions.md#createpackage)
- [CreateServiceRole](AwsEsActions.md#createservicerole)
- [CreateVpcEndpoint](AwsEsActions.md#createvpcendpoint)
- [DeleteDataSource](AwsEsActions.md#deletedatasource)
- [DeleteDomain](AwsEsActions.md#deletedomain)
- [DeleteElasticsearchDomain](AwsEsActions.md#deleteelasticsearchdomain)
- [DeleteElasticsearchServiceRole](AwsEsActions.md#deleteelasticsearchservicerole)
- [DeleteInboundConnection](AwsEsActions.md#deleteinboundconnection)
- [DeleteInboundCrossClusterSearchConnection](AwsEsActions.md#deleteinboundcrossclustersearchconnection)
- [DeleteOutboundConnection](AwsEsActions.md#deleteoutboundconnection)
- [DeleteOutboundCrossClusterSearchConnection](AwsEsActions.md#deleteoutboundcrossclustersearchconnection)
- [DeletePackage](AwsEsActions.md#deletepackage)
- [DeleteVpcEndpoint](AwsEsActions.md#deletevpcendpoint)
- [DescribeDomain](AwsEsActions.md#describedomain)
- [DescribeDomainAutoTunes](AwsEsActions.md#describedomainautotunes)
- [DescribeDomainChangeProgress](AwsEsActions.md#describedomainchangeprogress)
- [DescribeDomainConfig](AwsEsActions.md#describedomainconfig)
- [DescribeDomainHealth](AwsEsActions.md#describedomainhealth)
- [DescribeDomainNodes](AwsEsActions.md#describedomainnodes)
- [DescribeDomains](AwsEsActions.md#describedomains)
- [DescribeDryRunProgress](AwsEsActions.md#describedryrunprogress)
- [DescribeElasticsearchDomain](AwsEsActions.md#describeelasticsearchdomain)
- [DescribeElasticsearchDomainConfig](AwsEsActions.md#describeelasticsearchdomainconfig)
- [DescribeElasticsearchDomains](AwsEsActions.md#describeelasticsearchdomains)
- [DescribeElasticsearchInstanceTypeLimits](AwsEsActions.md#describeelasticsearchinstancetypelimits)
- [DescribeInboundConnections](AwsEsActions.md#describeinboundconnections)
- [DescribeInboundCrossClusterSearchConnections](AwsEsActions.md#describeinboundcrossclustersearchconnections)
- [DescribeInstanceTypeLimits](AwsEsActions.md#describeinstancetypelimits)
- [DescribeOutboundConnections](AwsEsActions.md#describeoutboundconnections)
- [DescribeOutboundCrossClusterSearchConnections](AwsEsActions.md#describeoutboundcrossclustersearchconnections)
- [DescribePackages](AwsEsActions.md#describepackages)
- [DescribeReservedElasticsearchInstanceOfferings](AwsEsActions.md#describereservedelasticsearchinstanceofferings)
- [DescribeReservedElasticsearchInstances](AwsEsActions.md#describereservedelasticsearchinstances)
- [DescribeReservedInstanceOfferings](AwsEsActions.md#describereservedinstanceofferings)
- [DescribeReservedInstances](AwsEsActions.md#describereservedinstances)
- [DescribeVpcEndpoints](AwsEsActions.md#describevpcendpoints)
- [DissociatePackage](AwsEsActions.md#dissociatepackage)
- [ESCrossClusterGet](AwsEsActions.md#escrossclusterget)
- [ESHttpDelete](AwsEsActions.md#eshttpdelete)
- [ESHttpGet](AwsEsActions.md#eshttpget)
- [ESHttpHead](AwsEsActions.md#eshttphead)
- [ESHttpPatch](AwsEsActions.md#eshttppatch)
- [ESHttpPost](AwsEsActions.md#eshttppost)
- [ESHttpPut](AwsEsActions.md#eshttpput)
- [GetCompatibleElasticsearchVersions](AwsEsActions.md#getcompatibleelasticsearchversions)
- [GetCompatibleVersions](AwsEsActions.md#getcompatibleversions)
- [GetDataSource](AwsEsActions.md#getdatasource)
- [GetDomainMaintenanceStatus](AwsEsActions.md#getdomainmaintenancestatus)
- [GetPackageVersionHistory](AwsEsActions.md#getpackageversionhistory)
- [GetUpgradeHistory](AwsEsActions.md#getupgradehistory)
- [GetUpgradeStatus](AwsEsActions.md#getupgradestatus)
- [ListDataSources](AwsEsActions.md#listdatasources)
- [ListDomainMaintenances](AwsEsActions.md#listdomainmaintenances)
- [ListDomainNames](AwsEsActions.md#listdomainnames)
- [ListDomainsForPackage](AwsEsActions.md#listdomainsforpackage)
- [ListElasticsearchInstanceTypeDetails](AwsEsActions.md#listelasticsearchinstancetypedetails)
- [ListElasticsearchInstanceTypes](AwsEsActions.md#listelasticsearchinstancetypes)
- [ListElasticsearchVersions](AwsEsActions.md#listelasticsearchversions)
- [ListInstanceTypeDetails](AwsEsActions.md#listinstancetypedetails)
- [ListPackagesForDomain](AwsEsActions.md#listpackagesfordomain)
- [ListScheduledActions](AwsEsActions.md#listscheduledactions)
- [ListTags](AwsEsActions.md#listtags)
- [ListVersions](AwsEsActions.md#listversions)
- [ListVpcEndpointAccess](AwsEsActions.md#listvpcendpointaccess)
- [ListVpcEndpoints](AwsEsActions.md#listvpcendpoints)
- [ListVpcEndpointsForDomain](AwsEsActions.md#listvpcendpointsfordomain)
- [PurchaseReservedElasticsearchInstanceOffering](AwsEsActions.md#purchasereservedelasticsearchinstanceoffering)
- [PurchaseReservedInstanceOffering](AwsEsActions.md#purchasereservedinstanceoffering)
- [RejectInboundConnection](AwsEsActions.md#rejectinboundconnection)
- [RejectInboundCrossClusterSearchConnection](AwsEsActions.md#rejectinboundcrossclustersearchconnection)
- [RemoveTags](AwsEsActions.md#removetags)
- [RevokeVpcEndpointAccess](AwsEsActions.md#revokevpcendpointaccess)
- [StartDomainMaintenance](AwsEsActions.md#startdomainmaintenance)
- [StartElasticsearchServiceSoftwareUpdate](AwsEsActions.md#startelasticsearchservicesoftwareupdate)
- [StartServiceSoftwareUpdate](AwsEsActions.md#startservicesoftwareupdate)
- [UpdateDataSource](AwsEsActions.md#updatedatasource)
- [UpdateDomainConfig](AwsEsActions.md#updatedomainconfig)
- [UpdateElasticsearchDomainConfig](AwsEsActions.md#updateelasticsearchdomainconfig)
- [UpdatePackage](AwsEsActions.md#updatepackage)
- [UpdateScheduledAction](AwsEsActions.md#updatescheduledaction)
- [UpdateVpcEndpoint](AwsEsActions.md#updatevpcendpoint)
- [UpgradeDomain](AwsEsActions.md#upgradedomain)
- [UpgradeElasticsearchDomain](AwsEsActions.md#upgradeelasticsearchdomain)

## Enumeration Members

### AcceptInboundConnection

• **AcceptInboundConnection** = ``"es:AcceptInboundConnection"``

Grants permission to the destination domain owner to accept an inbound cross-cl
uster search connection request

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AcceptInboundConnection.html

#### Defined in

actions/es.ts:18

___

### AcceptInboundCrossClusterSearchConnection

• **AcceptInboundCrossClusterSearchConnection** = ``"es:AcceptInboundCrossClusterSearchConnection"``

Grants permission to the destination domain owner to accept an inbound cross-cl
uster search connection request. This permission is deprecated. Use AcceptInbou
ndConnection instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AcceptInboundConnection.html

#### Defined in

actions/es.ts:26

___

### AddDataSource

• **AddDataSource** = ``"es:AddDataSource"``

Grants permission to add the data source for the OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AddDataSource.html

#### Defined in

actions/es.ts:32

___

### AddTags

• **AddTags** = ``"es:AddTags"``

Grants permission to attach resource tags to an OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AddTags.html

#### Defined in

actions/es.ts:38

___

### AssociatePackage

• **AssociatePackage** = ``"es:AssociatePackage"``

Grants permission to associate a package with an OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AssociatePackage.html

#### Defined in

actions/es.ts:44

___

### AuthorizeVpcEndpointAccess

• **AuthorizeVpcEndpointAccess** = ``"es:AuthorizeVpcEndpointAccess"``

Grants permission to provide access to an Amazon OpenSearch Service domain thro
ugh the use of an interface VPC endpoint

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AuthorizeVpcEndpointAccess.html

#### Defined in

actions/es.ts:51

___

### CancelDomainConfigChange

• **CancelDomainConfigChange** = ``"es:CancelDomainConfigChange"``

Grants permission to cancel a change on an OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CancelDomainConfigChange.html

#### Defined in

actions/es.ts:57

___

### CancelElasticsearchServiceSoftwareUpdate

• **CancelElasticsearchServiceSoftwareUpdate** = ``"es:CancelElasticsearchServiceSoftwareUpdate"``

Grants permission to cancel a service software update of a domain. This permiss
ion is deprecated. Use CancelServiceSoftwareUpdate instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CancelServiceSoftwareUpdate.html

#### Defined in

actions/es.ts:64

___

### CancelServiceSoftwareUpdate

• **CancelServiceSoftwareUpdate** = ``"es:CancelServiceSoftwareUpdate"``

Grants permission to cancel a service software update of a domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CancelServiceSoftwareUpdate.html

#### Defined in

actions/es.ts:70

___

### CreateDomain

• **CreateDomain** = ``"es:CreateDomain"``

Grants permission to create an Amazon OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateDomain.html

#### Defined in

actions/es.ts:76

___

### CreateElasticsearchDomain

• **CreateElasticsearchDomain** = ``"es:CreateElasticsearchDomain"``

Grants permission to create an OpenSearch Service domain. This permission is de
precated. Use CreateDomain instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateDomain.html

#### Defined in

actions/es.ts:83

___

### CreateElasticsearchServiceRole

• **CreateElasticsearchServiceRole** = ``"es:CreateElasticsearchServiceRole"``

Grants permission to create the service-linked role required for OpenSearch Ser
vice domains that use VPC access. This permission is deprecated. OpenSearch Ser
vice creates the service-linked role for you

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html

#### Defined in

actions/es.ts:91

___

### CreateOutboundConnection

• **CreateOutboundConnection** = ``"es:CreateOutboundConnection"``

Grants permission to create a new cross-cluster search connection from a source
domain to a destination domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateOutboundConnection.html

#### Defined in

actions/es.ts:98

___

### CreateOutboundCrossClusterSearchConnection

• **CreateOutboundCrossClusterSearchConnection** = ``"es:CreateOutboundCrossClusterSearchConnection"``

Grants permission to create a new cross-cluster search connection from a source
domain to a destination domain. This permission is deprecated. Use CreateOutbou
ndConnection instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateOutboundConnection.html

#### Defined in

actions/es.ts:106

___

### CreatePackage

• **CreatePackage** = ``"es:CreatePackage"``

Grants permission to add a package for use with OpenSearch Service domains

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreatePackage.html

#### Defined in

actions/es.ts:112

___

### CreateServiceRole

• **CreateServiceRole** = ``"es:CreateServiceRole"``

Grants permission to create the service-linked role required for Amazon OpenSea
rch Service domains that use VPC access

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html

#### Defined in

actions/es.ts:119

___

### CreateVpcEndpoint

• **CreateVpcEndpoint** = ``"es:CreateVpcEndpoint"``

Grants permission to create an Amazon OpenSearch Service-managed VPC endpoint

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateVpcEndpoint.html

#### Defined in

actions/es.ts:125

___

### DeleteDataSource

• **DeleteDataSource** = ``"es:DeleteDataSource"``

Grants permission to delete the data source for the OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteDataSource.html

#### Defined in

actions/es.ts:131

___

### DeleteDomain

• **DeleteDomain** = ``"es:DeleteDomain"``

Grants permission to delete an Amazon OpenSearch Service domain and all of its
data

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteDomain.html

#### Defined in

actions/es.ts:138

___

### DeleteElasticsearchDomain

• **DeleteElasticsearchDomain** = ``"es:DeleteElasticsearchDomain"``

Grants permission to delete an OpenSearch Service domain and all of its data. T
his permission is deprecated. Use DeleteDomain instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteDomain.html

#### Defined in

actions/es.ts:145

___

### DeleteElasticsearchServiceRole

• **DeleteElasticsearchServiceRole** = ``"es:DeleteElasticsearchServiceRole"``

Grants permission to delete the service-linked role required for OpenSearch Ser
vice domains that use VPC access. This permission is deprecated. Use the IAM AP
I to delete service-linked roles

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_Welcome.html

#### Defined in

actions/es.ts:153

___

### DeleteInboundConnection

• **DeleteInboundConnection** = ``"es:DeleteInboundConnection"``

Grants permission to the destination domain owner to delete an existing inbound
cross-cluster search connection

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteInboundConnection.html

#### Defined in

actions/es.ts:160

___

### DeleteInboundCrossClusterSearchConnection

• **DeleteInboundCrossClusterSearchConnection** = ``"es:DeleteInboundCrossClusterSearchConnection"``

Grants permission to the destination domain owner to delete an existing inbound
cross-cluster search connection. This permission is deprecated. Use DeleteInbou
ndConnection instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteInboundConnection.html

#### Defined in

actions/es.ts:168

___

### DeleteOutboundConnection

• **DeleteOutboundConnection** = ``"es:DeleteOutboundConnection"``

Grants permission to the source domain owner to delete an existing outbound cro
ss-cluster search connection

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteOutboundConnection.html

#### Defined in

actions/es.ts:175

___

### DeleteOutboundCrossClusterSearchConnection

• **DeleteOutboundCrossClusterSearchConnection** = ``"es:DeleteOutboundCrossClusterSearchConnection"``

Grants permission to the source domain owner to delete an existing outbound cro
ss-cluster search connection. This permission is deprecated. Use DeleteOutbound
Connection instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteOutboundConnection.html

#### Defined in

actions/es.ts:183

___

### DeletePackage

• **DeletePackage** = ``"es:DeletePackage"``

Grants permission to delete a package from OpenSearch Service. The package cann
ot be associated with any domains

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeletePackage.html

#### Defined in

actions/es.ts:190

___

### DeleteVpcEndpoint

• **DeleteVpcEndpoint** = ``"es:DeleteVpcEndpoint"``

Grants permission to delete an Amazon OpenSearch Service-managed interface VPC
endpoint

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteVpcEndpoint.html

#### Defined in

actions/es.ts:197

___

### DescribeDomain

• **DescribeDomain** = ``"es:DescribeDomain"``

Grants permission to view a description of the domain configuration for the spe
cified OpenSearch Service domain, including the domain ID, service endpoint, an
d ARN

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomain.html

#### Defined in

actions/es.ts:205

___

### DescribeDomainAutoTunes

• **DescribeDomainAutoTunes** = ``"es:DescribeDomainAutoTunes"``

Grants permission to view the Auto-Tune configuration of the domain for the spe
cified OpenSearch Service domain, including the Auto-Tune state and maintenance
schedules

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainAutoTunes.html

#### Defined in

actions/es.ts:213

___

### DescribeDomainChangeProgress

• **DescribeDomainChangeProgress** = ``"es:DescribeDomainChangeProgress"``

Grants permission to view detail stage progress of an OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainChangeProgress.html

#### Defined in

actions/es.ts:219

___

### DescribeDomainConfig

• **DescribeDomainConfig** = ``"es:DescribeDomainConfig"``

Grants permission to view a description of the configuration options and status
of an OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainConfig.html

#### Defined in

actions/es.ts:226

___

### DescribeDomainHealth

• **DescribeDomainHealth** = ``"es:DescribeDomainHealth"``

Grants permission to view information about domain and node health, the standby
Availability Zone, number of nodes per Availability Zone, and shard count per n
ode

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainHealth.html

#### Defined in

actions/es.ts:234

___

### DescribeDomainNodes

• **DescribeDomainNodes** = ``"es:DescribeDomainNodes"``

Grants permission to view information about nodes configured for the domain and
their configurations- the node id, type of node, status of node, Availability Z
one, instance type and storage

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainNodes.html

#### Defined in

actions/es.ts:242

___

### DescribeDomains

• **DescribeDomains** = ``"es:DescribeDomains"``

Grants permission to view a description of the domain configuration for up to f
ive specified OpenSearch Service domains

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomains.html

#### Defined in

actions/es.ts:249

___

### DescribeDryRunProgress

• **DescribeDryRunProgress** = ``"es:DescribeDryRunProgress"``

Grants permission to describe the status of a pre-update validation check on an
OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDryRunProgress.html

#### Defined in

actions/es.ts:256

___

### DescribeElasticsearchDomain

• **DescribeElasticsearchDomain** = ``"es:DescribeElasticsearchDomain"``

Grants permission to view a description of the domain configuration for the spe
cified OpenSearch Service domain, including the domain ID, service endpoint, an
d ARN. This permission is deprecated. Use DescribeDomain instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomain.html

#### Defined in

actions/es.ts:264

___

### DescribeElasticsearchDomainConfig

• **DescribeElasticsearchDomainConfig** = ``"es:DescribeElasticsearchDomainConfig"``

Grants permission to view a description of the configuration and status of an O
penSearch Service domain. This permission is deprecated. Use DescribeDomainConf
ig instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainConfig.html

#### Defined in

actions/es.ts:272

___

### DescribeElasticsearchDomains

• **DescribeElasticsearchDomains** = ``"es:DescribeElasticsearchDomains"``

Grants permission to view a description of the domain configuration for up to f
ive specified Amazon OpenSearch domains. This permission is deprecated. Use Des
cribeDomains instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomains.html

#### Defined in

actions/es.ts:280

___

### DescribeElasticsearchInstanceTypeLimits

• **DescribeElasticsearchInstanceTypeLimits** = ``"es:DescribeElasticsearchInstanceTypeLimits"``

Grants permission to view the instance count, storage, and master node limits f
or a given OpenSearch version and instance type. This permission is deprecated.
Use DescribeInstanceTypeLimits instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeInstanceTypeLimits.html

#### Defined in

actions/es.ts:288

___

### DescribeInboundConnections

• **DescribeInboundConnections** = ``"es:DescribeInboundConnections"``

Grants permission to list all the inbound cross-cluster search connections for
a destination domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeInboundConnections.html

#### Defined in

actions/es.ts:295

___

### DescribeInboundCrossClusterSearchConnections

• **DescribeInboundCrossClusterSearchConnections** = ``"es:DescribeInboundCrossClusterSearchConnections"``

Grants permission to list all the inbound cross-cluster search connections for
a destination domain. This permission is deprecated. Use DescribeInboundConnect
ions instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeInboundConnections.html

#### Defined in

actions/es.ts:303

___

### DescribeInstanceTypeLimits

• **DescribeInstanceTypeLimits** = ``"es:DescribeInstanceTypeLimits"``

Grants permission to view the instance count, storage, and master node limits f
or a given engine version and instance type

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeInstanceTypeLimits.html

#### Defined in

actions/es.ts:310

___

### DescribeOutboundConnections

• **DescribeOutboundConnections** = ``"es:DescribeOutboundConnections"``

Grants permission to list all the outbound cross-cluster search connections for
a source domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeOutboundConnections.html

#### Defined in

actions/es.ts:317

___

### DescribeOutboundCrossClusterSearchConnections

• **DescribeOutboundCrossClusterSearchConnections** = ``"es:DescribeOutboundCrossClusterSearchConnections"``

Grants permission to list all the outbound cross-cluster search connections for
a source domain. This permission is deprecated. Use DescribeOutboundConnections
instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeOutboundConnections.html

#### Defined in

actions/es.ts:325

___

### DescribePackages

• **DescribePackages** = ``"es:DescribePackages"``

Grants permission to describe all packages available to OpenSearch Service doma
ins

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribePackages.html

#### Defined in

actions/es.ts:332

___

### DescribeReservedElasticsearchInstanceOfferings

• **DescribeReservedElasticsearchInstanceOfferings** = ``"es:DescribeReservedElasticsearchInstanceOfferings"``

Grants permission to fetch Reserved Instance offerings for Amazon OpenSearch Se
rvice. This permission is deprecated. Use DescribeReservedInstanceOfferings ins
tead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeReservedInstanceOfferings.html

#### Defined in

actions/es.ts:340

___

### DescribeReservedElasticsearchInstances

• **DescribeReservedElasticsearchInstances** = ``"es:DescribeReservedElasticsearchInstances"``

Grants permission to fetch OpenSearch Service Reserved Instances that have alre
ady been purchased. This permission is deprecated. Use DescribeReservedInstance
s instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeReservedInstances.html

#### Defined in

actions/es.ts:348

___

### DescribeReservedInstanceOfferings

• **DescribeReservedInstanceOfferings** = ``"es:DescribeReservedInstanceOfferings"``

Grants permission to fetch Reserved Instance offerings for OpenSearch Service

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeReservedInstanceOfferings.html

#### Defined in

actions/es.ts:354

___

### DescribeReservedInstances

• **DescribeReservedInstances** = ``"es:DescribeReservedInstances"``

Grants permission to fetch OpenSearch Service Reserved Instances that have alre
ady been purchased

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeReservedInstances.html

#### Defined in

actions/es.ts:361

___

### DescribeVpcEndpoints

• **DescribeVpcEndpoints** = ``"es:DescribeVpcEndpoints"``

Grants permission to describe one or more Amazon OpenSearch Service-managed VPC
endpoints

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeVpcEndpoints.html

#### Defined in

actions/es.ts:368

___

### DissociatePackage

• **DissociatePackage** = ``"es:DissociatePackage"``

Grants permission to disassociate a package from the specified OpenSearch Servi
ce domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DissociatePackage.html

#### Defined in

actions/es.ts:375

___

### ESCrossClusterGet

• **ESCrossClusterGet** = ``"es:ESCrossClusterGet"``

Grants permission to send cross-cluster requests to a destination domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html

#### Defined in

actions/es.ts:381

___

### ESHttpDelete

• **ESHttpDelete** = ``"es:ESHttpDelete"``

Grants permission to send HTTP DELETE requests to the OpenSearch APIs

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html

#### Defined in

actions/es.ts:387

___

### ESHttpGet

• **ESHttpGet** = ``"es:ESHttpGet"``

Grants permission to send HTTP GET requests to the OpenSearch APIs

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html

#### Defined in

actions/es.ts:393

___

### ESHttpHead

• **ESHttpHead** = ``"es:ESHttpHead"``

Grants permission to send HTTP HEAD requests to the OpenSearch APIs

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html

#### Defined in

actions/es.ts:399

___

### ESHttpPatch

• **ESHttpPatch** = ``"es:ESHttpPatch"``

Grants permission to send HTTP PATCH requests to the OpenSearch APIs

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html

#### Defined in

actions/es.ts:405

___

### ESHttpPost

• **ESHttpPost** = ``"es:ESHttpPost"``

Grants permission to send HTTP POST requests to the OpenSearch APIs

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html

#### Defined in

actions/es.ts:411

___

### ESHttpPut

• **ESHttpPut** = ``"es:ESHttpPut"``

Grants permission to send HTTP PUT requests to the OpenSearch APIs

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html

#### Defined in

actions/es.ts:417

___

### GetCompatibleElasticsearchVersions

• **GetCompatibleElasticsearchVersions** = ``"es:GetCompatibleElasticsearchVersions"``

Grants permission to fetch a list of compatible OpenSearch and Elasticsearch ve
rsions to which an OpenSearch Service domain can be upgraded. This permission i
s deprecated. Use GetCompatibleVersions instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetCompatibleVersions.html

#### Defined in

actions/es.ts:425

___

### GetCompatibleVersions

• **GetCompatibleVersions** = ``"es:GetCompatibleVersions"``

Grants permission to fetch list of compatible engine versions to which an OpenS
earch Service domain can be upgraded

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetCompatibleVersions.html

#### Defined in

actions/es.ts:432

___

### GetDataSource

• **GetDataSource** = ``"es:GetDataSource"``

Grants permission to get the data source for the OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetDataSource.html

#### Defined in

actions/es.ts:438

___

### GetDomainMaintenanceStatus

• **GetDomainMaintenanceStatus** = ``"es:GetDomainMaintenanceStatus"``

Grants permission to retrieve the status of maintenance action for the node

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetDomainMaintenanceStatus.html

#### Defined in

actions/es.ts:444

___

### GetPackageVersionHistory

• **GetPackageVersionHistory** = ``"es:GetPackageVersionHistory"``

Grants permission to fetch the version history for a package

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetPackageVersionHistory.html

#### Defined in

actions/es.ts:450

___

### GetUpgradeHistory

• **GetUpgradeHistory** = ``"es:GetUpgradeHistory"``

Grants permission to fetch the upgrade history of a given OpenSearch Service do
main

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetUpgradeHistory.html

#### Defined in

actions/es.ts:457

___

### GetUpgradeStatus

• **GetUpgradeStatus** = ``"es:GetUpgradeStatus"``

Grants permission to fetch the upgrade status of a given OpenSearch Service dom
ain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetUpgradeStatus.html

#### Defined in

actions/es.ts:464

___

### ListDataSources

• **ListDataSources** = ``"es:ListDataSources"``

Grants permission to retrieve a list of data source for the OpenSearch Service
domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListDataSources.html

#### Defined in

actions/es.ts:471

___

### ListDomainMaintenances

• **ListDomainMaintenances** = ``"es:ListDomainMaintenances"``

Grants permission to retrieve a list of maintenance actions for the OpenSearch
Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListDomainMaintenances.html

#### Defined in

actions/es.ts:478

___

### ListDomainNames

• **ListDomainNames** = ``"es:ListDomainNames"``

Grants permission to display the names of all OpenSearch Service domains that t
he current user owns

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListDomainNames.html

#### Defined in

actions/es.ts:485

___

### ListDomainsForPackage

• **ListDomainsForPackage** = ``"es:ListDomainsForPackage"``

Grants permission to list all OpenSearch Service domains that a package is asso
ciated with

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListDomainsForPackage.html

#### Defined in

actions/es.ts:492

___

### ListElasticsearchInstanceTypeDetails

• **ListElasticsearchInstanceTypeDetails** = ``"es:ListElasticsearchInstanceTypeDetails"``

Grants permission to list all instance types and available features for a given
OpenSearch version. This permission is deprecated. Use ListInstanceTypeDetails
instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListInstanceTypeDetails.html

#### Defined in

actions/es.ts:500

___

### ListElasticsearchInstanceTypes

• **ListElasticsearchInstanceTypes** = ``"es:ListElasticsearchInstanceTypes"``

Grants permission to list all EC2 instance types that are supported for a given
OpenSearch version

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListInstanceTypeDetails.html

#### Defined in

actions/es.ts:507

___

### ListElasticsearchVersions

• **ListElasticsearchVersions** = ``"es:ListElasticsearchVersions"``

Grants permission to list all supported OpenSearch versions on Amazon OpenSearc
h Service. This permission is deprecated. Use ListVersions instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListVersions.html

#### Defined in

actions/es.ts:514

___

### ListInstanceTypeDetails

• **ListInstanceTypeDetails** = ``"es:ListInstanceTypeDetails"``

Grants permission to list all instance types and available features for a given
OpenSearch or Elasticsearch version

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListInstanceTypeDetails.html

#### Defined in

actions/es.ts:521

___

### ListPackagesForDomain

• **ListPackagesForDomain** = ``"es:ListPackagesForDomain"``

Grants permission to list all packages associated with the OpenSearch Service d
omain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListPackagesForDomain.html

#### Defined in

actions/es.ts:528

___

### ListScheduledActions

• **ListScheduledActions** = ``"es:ListScheduledActions"``

Grants permission to retrieve a list of configuration changes that are schedule
d for a OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html

#### Defined in

actions/es.ts:535

___

### ListTags

• **ListTags** = ``"es:ListTags"``

Grants permission to display all resource tags for an OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListTags.html

#### Defined in

actions/es.ts:541

___

### ListVersions

• **ListVersions** = ``"es:ListVersions"``

Grants permission to list all supported OpenSearch and Elasticsearch versions i
n Amazon OpenSearch Service

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListVersions.html

#### Defined in

actions/es.ts:548

___

### ListVpcEndpointAccess

• **ListVpcEndpointAccess** = ``"es:ListVpcEndpointAccess"``

Grants permission to retrieve information about each AWS principal that is allo
wed to access a given Amazon OpenSearch Service domain through the use of an in
terface VPC endpoint

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListVpcEndpointAccess.html

#### Defined in

actions/es.ts:556

___

### ListVpcEndpoints

• **ListVpcEndpoints** = ``"es:ListVpcEndpoints"``

Grants permission to retrieve all Amazon OpenSearch Service-managed VPC endpoin
ts in the current AWS account and Region

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListVpcEndpoints.html

#### Defined in

actions/es.ts:563

___

### ListVpcEndpointsForDomain

• **ListVpcEndpointsForDomain** = ``"es:ListVpcEndpointsForDomain"``

Grants permission to retrieve all Amazon OpenSearch Service-managed VPC endpoin
ts associated with a particular domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListVpcEndpointsForDomain.html

#### Defined in

actions/es.ts:570

___

### PurchaseReservedElasticsearchInstanceOffering

• **PurchaseReservedElasticsearchInstanceOffering** = ``"es:PurchaseReservedElasticsearchInstanceOffering"``

Grants permission to purchase OpenSearch Service Reserved Instances. This permi
ssion is deprecated. Use PurchaseReservedInstanceOffering instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_PurchaseReservedInstanceOffering.html

#### Defined in

actions/es.ts:577

___

### PurchaseReservedInstanceOffering

• **PurchaseReservedInstanceOffering** = ``"es:PurchaseReservedInstanceOffering"``

Grants permission to purchase OpenSearch reserved instances

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_PurchaseReservedInstanceOffering.html

#### Defined in

actions/es.ts:583

___

### RejectInboundConnection

• **RejectInboundConnection** = ``"es:RejectInboundConnection"``

Grants permission to the destination domain owner to reject an inbound cross-cl
uster search connection request

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_RejectInboundConnection.html

#### Defined in

actions/es.ts:590

___

### RejectInboundCrossClusterSearchConnection

• **RejectInboundCrossClusterSearchConnection** = ``"es:RejectInboundCrossClusterSearchConnection"``

Grants permission to the destination domain owner to reject an inbound cross-cl
uster search connection request. This permission is deprecated. Use RejectInbou
ndConnection instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_RejectInboundConnection.html

#### Defined in

actions/es.ts:598

___

### RemoveTags

• **RemoveTags** = ``"es:RemoveTags"``

Grants permission to remove resource tags from an OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_RemoveTags.html

#### Defined in

actions/es.ts:604

___

### RevokeVpcEndpointAccess

• **RevokeVpcEndpointAccess** = ``"es:RevokeVpcEndpointAccess"``

Grants permission to revoke access to an Amazon OpenSearch Service domain that
was provided through an interface VPC endpoint

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_RevokeVpcEndpointAccess.html

#### Defined in

actions/es.ts:611

___

### StartDomainMaintenance

• **StartDomainMaintenance** = ``"es:StartDomainMaintenance"``

Grants permission to initiate the maintenance on the node

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_StartDomainMaintenance.html

#### Defined in

actions/es.ts:617

___

### StartElasticsearchServiceSoftwareUpdate

• **StartElasticsearchServiceSoftwareUpdate** = ``"es:StartElasticsearchServiceSoftwareUpdate"``

Grants permission to start a service software update of a domain. This permissi
on is deprecated. Use StartServiceSoftwareUpdate instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_StartServiceSoftwareUpdate.html

#### Defined in

actions/es.ts:624

___

### StartServiceSoftwareUpdate

• **StartServiceSoftwareUpdate** = ``"es:StartServiceSoftwareUpdate"``

Grants permission to start a service software update of a domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_StartServiceSoftwareUpdate.html

#### Defined in

actions/es.ts:630

___

### UpdateDataSource

• **UpdateDataSource** = ``"es:UpdateDataSource"``

Grants permission to update the data source for the OpenSearch Service domain

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdateDataSource.html

#### Defined in

actions/es.ts:636

___

### UpdateDomainConfig

• **UpdateDomainConfig** = ``"es:UpdateDomainConfig"``

Grants permission to modify the configuration of an OpenSearch Service domain,
such as the instance type or number of instances

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdateDomainConfig.html

#### Defined in

actions/es.ts:643

___

### UpdateElasticsearchDomainConfig

• **UpdateElasticsearchDomainConfig** = ``"es:UpdateElasticsearchDomainConfig"``

Grants permission to modify the configuration of an OpenSearch Service domain,
such as the instance type or number of instances. This permission is deprecated
. Use UpdateDomainConfig instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdateDomainConfig.html

#### Defined in

actions/es.ts:651

___

### UpdatePackage

• **UpdatePackage** = ``"es:UpdatePackage"``

Grants permission to update a package for use with OpenSearch Service domains

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdatePackage.html

#### Defined in

actions/es.ts:657

___

### UpdateScheduledAction

• **UpdateScheduledAction** = ``"es:UpdateScheduledAction"``

Grants permission to reschedule a planned OpenSearch Service domain configurati
on change for a later time

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdateScheduledAction.html

#### Defined in

actions/es.ts:664

___

### UpdateVpcEndpoint

• **UpdateVpcEndpoint** = ``"es:UpdateVpcEndpoint"``

Grants permission to modify an Amazon OpenSearch Service-managed interface VPC
endpoint

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdateVpcEndpoint.html

#### Defined in

actions/es.ts:671

___

### UpgradeDomain

• **UpgradeDomain** = ``"es:UpgradeDomain"``

Grants permission to initiate upgrade of an OpenSearch Service domain to a give
n version

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpgradeDomain.html

#### Defined in

actions/es.ts:678

___

### UpgradeElasticsearchDomain

• **UpgradeElasticsearchDomain** = ``"es:UpgradeElasticsearchDomain"``

Grants permission to initiate upgrade of an OpenSearch Service domain to a spec
ified version. This permission is deprecated. Use UpgradeDomain instead

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpgradeDomain.html

#### Defined in

actions/es.ts:685
