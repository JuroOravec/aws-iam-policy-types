[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsServicediscoveryActions

# Enumeration: AwsServicediscoveryActions

All IAM policy actions for AWS Cloud Map (SERVICEDISCOVERY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudmap.html

2024-02-12T09:56:20.572Z

## Table of contents

### Enumeration Members

- [CreateHttpNamespace](AwsServicediscoveryActions.md#createhttpnamespace)
- [CreatePrivateDnsNamespace](AwsServicediscoveryActions.md#createprivatednsnamespace)
- [CreatePublicDnsNamespace](AwsServicediscoveryActions.md#createpublicdnsnamespace)
- [CreateService](AwsServicediscoveryActions.md#createservice)
- [DeleteNamespace](AwsServicediscoveryActions.md#deletenamespace)
- [DeleteService](AwsServicediscoveryActions.md#deleteservice)
- [DeregisterInstance](AwsServicediscoveryActions.md#deregisterinstance)
- [DiscoverInstances](AwsServicediscoveryActions.md#discoverinstances)
- [DiscoverInstancesRevision](AwsServicediscoveryActions.md#discoverinstancesrevision)
- [GetInstance](AwsServicediscoveryActions.md#getinstance)
- [GetInstancesHealthStatus](AwsServicediscoveryActions.md#getinstanceshealthstatus)
- [GetNamespace](AwsServicediscoveryActions.md#getnamespace)
- [GetOperation](AwsServicediscoveryActions.md#getoperation)
- [GetService](AwsServicediscoveryActions.md#getservice)
- [ListInstances](AwsServicediscoveryActions.md#listinstances)
- [ListNamespaces](AwsServicediscoveryActions.md#listnamespaces)
- [ListOperations](AwsServicediscoveryActions.md#listoperations)
- [ListServices](AwsServicediscoveryActions.md#listservices)
- [ListTagsForResource](AwsServicediscoveryActions.md#listtagsforresource)
- [RegisterInstance](AwsServicediscoveryActions.md#registerinstance)
- [TagResource](AwsServicediscoveryActions.md#tagresource)
- [UntagResource](AwsServicediscoveryActions.md#untagresource)
- [UpdateHttpNamespace](AwsServicediscoveryActions.md#updatehttpnamespace)
- [UpdateInstanceCustomHealthStatus](AwsServicediscoveryActions.md#updateinstancecustomhealthstatus)
- [UpdatePrivateDnsNamespace](AwsServicediscoveryActions.md#updateprivatednsnamespace)
- [UpdatePublicDnsNamespace](AwsServicediscoveryActions.md#updatepublicdnsnamespace)
- [UpdateService](AwsServicediscoveryActions.md#updateservice)

## Enumeration Members

### CreateHttpNamespace

• **CreateHttpNamespace** = ``"servicediscovery:CreateHttpNamespace"``

Grants permission to create an HTTP namespace

See https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateHttpNamespace.html

#### Defined in

actions/servicediscovery.ts:17

___

### CreatePrivateDnsNamespace

• **CreatePrivateDnsNamespace** = ``"servicediscovery:CreatePrivateDnsNamespace"``

Grants permission to create a private namespace based on DNS, which will be vis
ible only inside a specified Amazon VPC

See https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePrivateDnsNamespace.html

#### Defined in

actions/servicediscovery.ts:24

___

### CreatePublicDnsNamespace

• **CreatePublicDnsNamespace** = ``"servicediscovery:CreatePublicDnsNamespace"``

Grants permission to create a public namespace based on DNS, which will be visi
ble on the internet

See https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePublicDnsNamespace.html

#### Defined in

actions/servicediscovery.ts:31

___

### CreateService

• **CreateService** = ``"servicediscovery:CreateService"``

Grants permission to create a service

See https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html

#### Defined in

actions/servicediscovery.ts:37

___

### DeleteNamespace

• **DeleteNamespace** = ``"servicediscovery:DeleteNamespace"``

Grants permission to delete a specified namespace

See https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteNamespace.html

#### Defined in

actions/servicediscovery.ts:43

___

### DeleteService

• **DeleteService** = ``"servicediscovery:DeleteService"``

Grants permission to delete a specified service

See https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteService.html

#### Defined in

actions/servicediscovery.ts:49

___

### DeregisterInstance

• **DeregisterInstance** = ``"servicediscovery:DeregisterInstance"``

Grants permission to delete the records and the health check, if any, that Amaz
on Route 53 created for the specified instance

See https://docs.aws.amazon.com/cloud-map/latest/api/API_DeregisterInstance.html

#### Defined in

actions/servicediscovery.ts:56

___

### DiscoverInstances

• **DiscoverInstances** = ``"servicediscovery:DiscoverInstances"``

Grants permission to discover registered instances for a specified namespace an
d service

See https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html

#### Defined in

actions/servicediscovery.ts:63

___

### DiscoverInstancesRevision

• **DiscoverInstancesRevision** = ``"servicediscovery:DiscoverInstancesRevision"``

Grants permission to discover the revision of the instances for a specified nam
espace and service

See https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstancesRevision.html

#### Defined in

actions/servicediscovery.ts:70

___

### GetInstance

• **GetInstance** = ``"servicediscovery:GetInstance"``

Grants permission to get information about a specified instance

See https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstance.html

#### Defined in

actions/servicediscovery.ts:76

___

### GetInstancesHealthStatus

• **GetInstancesHealthStatus** = ``"servicediscovery:GetInstancesHealthStatus"``

Grants permission to get the current health status (Healthy, Unhealthy, or Unkn
own) of one or more instances

See https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstancesHealthStatus.html

#### Defined in

actions/servicediscovery.ts:83

___

### GetNamespace

• **GetNamespace** = ``"servicediscovery:GetNamespace"``

Grants permission to get information about a namespace

See https://docs.aws.amazon.com/cloud-map/latest/api/API_GetNamespace.html

#### Defined in

actions/servicediscovery.ts:89

___

### GetOperation

• **GetOperation** = ``"servicediscovery:GetOperation"``

Grants permission to get information about a specific operation

See https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html

#### Defined in

actions/servicediscovery.ts:95

___

### GetService

• **GetService** = ``"servicediscovery:GetService"``

Grants permission to get the settings for a specified service

See https://docs.aws.amazon.com/cloud-map/latest/api/API_GetService.html

#### Defined in

actions/servicediscovery.ts:101

___

### ListInstances

• **ListInstances** = ``"servicediscovery:ListInstances"``

Grants permission to get summary information about the instances that were regi
stered with a specified service

See https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html

#### Defined in

actions/servicediscovery.ts:108

___

### ListNamespaces

• **ListNamespaces** = ``"servicediscovery:ListNamespaces"``

Grants permission to get information about the namespaces

See https://docs.aws.amazon.com/cloud-map/latest/api/API_ListNamespaces.html

#### Defined in

actions/servicediscovery.ts:114

___

### ListOperations

• **ListOperations** = ``"servicediscovery:ListOperations"``

Grants permission to list operations that match the criteria that you specify

See https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html

#### Defined in

actions/servicediscovery.ts:120

___

### ListServices

• **ListServices** = ``"servicediscovery:ListServices"``

Grants permission to get settings for all the services that match specified fil
ters

See https://docs.aws.amazon.com/cloud-map/latest/api/API_ListServices.html

#### Defined in

actions/servicediscovery.ts:127

___

### ListTagsForResource

• **ListTagsForResource** = ``"servicediscovery:ListTagsForResource"``

Grants permission to lists tags for the specified resource

See https://docs.aws.amazon.com/cloud-map/latest/api/API_ListTagsForResource.html

#### Defined in

actions/servicediscovery.ts:133

___

### RegisterInstance

• **RegisterInstance** = ``"servicediscovery:RegisterInstance"``

Grants permission to register an instance based on the settings in a specified
service

See https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html

#### Defined in

actions/servicediscovery.ts:140

___

### TagResource

• **TagResource** = ``"servicediscovery:TagResource"``

Grants permission to add one or more tags to the specified resource

See https://docs.aws.amazon.com/cloud-map/latest/api/API_TagResource.html

#### Defined in

actions/servicediscovery.ts:146

___

### UntagResource

• **UntagResource** = ``"servicediscovery:UntagResource"``

Grants permission to remove one or more tags from the specified resource

See https://docs.aws.amazon.com/cloud-map/latest/api/API_UntagResource.html

#### Defined in

actions/servicediscovery.ts:152

___

### UpdateHttpNamespace

• **UpdateHttpNamespace** = ``"servicediscovery:UpdateHttpNamespace"``

Grants permission to update the settings for a HTTP namespace

See https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateHttpNamespace.html

#### Defined in

actions/servicediscovery.ts:158

___

### UpdateInstanceCustomHealthStatus

• **UpdateInstanceCustomHealthStatus** = ``"servicediscovery:UpdateInstanceCustomHealthStatus"``

Grants permission to update the current health status for an instance that has
a custom health check

See https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html

#### Defined in

actions/servicediscovery.ts:165

___

### UpdatePrivateDnsNamespace

• **UpdatePrivateDnsNamespace** = ``"servicediscovery:UpdatePrivateDnsNamespace"``

Grants permission to update the settings for a private DNS namespace

See https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdatePrivateDnsNamespace.html

#### Defined in

actions/servicediscovery.ts:171

___

### UpdatePublicDnsNamespace

• **UpdatePublicDnsNamespace** = ``"servicediscovery:UpdatePublicDnsNamespace"``

Grants permission to update the settings for a public DNS namespace

See https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdatePublicDnsNamespace.html

#### Defined in

actions/servicediscovery.ts:177

___

### UpdateService

• **UpdateService** = ``"servicediscovery:UpdateService"``

Grants permission to update the settings in a specified service

See https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateService.html

#### Defined in

actions/servicediscovery.ts:183
