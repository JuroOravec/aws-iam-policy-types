[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsGreengrassActions

# Enumeration: AwsGreengrassActions

All IAM policy actions for AWS IoT Greengrass V2 (GREENGRASS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrassv2.html

2024-02-12T09:57:51.470Z

## Table of contents

### Enumeration Members

- [AssociateServiceRoleToAccount](AwsGreengrassActions.md#associateserviceroletoaccount)
- [BatchAssociateClientDeviceWithCoreDevice](AwsGreengrassActions.md#batchassociateclientdevicewithcoredevice)
- [BatchDisassociateClientDeviceFromCoreDevice](AwsGreengrassActions.md#batchdisassociateclientdevicefromcoredevice)
- [CancelDeployment](AwsGreengrassActions.md#canceldeployment)
- [CreateComponentVersion](AwsGreengrassActions.md#createcomponentversion)
- [CreateDeployment](AwsGreengrassActions.md#createdeployment)
- [DeleteComponent](AwsGreengrassActions.md#deletecomponent)
- [DeleteCoreDevice](AwsGreengrassActions.md#deletecoredevice)
- [DeleteDeployment](AwsGreengrassActions.md#deletedeployment)
- [DescribeComponent](AwsGreengrassActions.md#describecomponent)
- [DisassociateServiceRoleFromAccount](AwsGreengrassActions.md#disassociateservicerolefromaccount)
- [GetComponent](AwsGreengrassActions.md#getcomponent)
- [GetComponentVersionArtifact](AwsGreengrassActions.md#getcomponentversionartifact)
- [GetConnectivityInfo](AwsGreengrassActions.md#getconnectivityinfo)
- [GetCoreDevice](AwsGreengrassActions.md#getcoredevice)
- [GetDeployment](AwsGreengrassActions.md#getdeployment)
- [GetServiceRoleForAccount](AwsGreengrassActions.md#getserviceroleforaccount)
- [ListClientDevicesAssociatedWithCoreDevice](AwsGreengrassActions.md#listclientdevicesassociatedwithcoredevice)
- [ListComponentVersions](AwsGreengrassActions.md#listcomponentversions)
- [ListComponents](AwsGreengrassActions.md#listcomponents)
- [ListCoreDevices](AwsGreengrassActions.md#listcoredevices)
- [ListDeployments](AwsGreengrassActions.md#listdeployments)
- [ListEffectiveDeployments](AwsGreengrassActions.md#listeffectivedeployments)
- [ListInstalledComponents](AwsGreengrassActions.md#listinstalledcomponents)
- [ListTagsForResource](AwsGreengrassActions.md#listtagsforresource)
- [ResolveComponentCandidates](AwsGreengrassActions.md#resolvecomponentcandidates)
- [TagResource](AwsGreengrassActions.md#tagresource)
- [UntagResource](AwsGreengrassActions.md#untagresource)
- [UpdateConnectivityInfo](AwsGreengrassActions.md#updateconnectivityinfo)

## Enumeration Members

### AssociateServiceRoleToAccount

• **AssociateServiceRoleToAccount** = ``"greengrass:AssociateServiceRoleToAccount"``

Grants permission to associate a role with your account. AWS IoT Greengrass use
s this role to access your Lambda functions and AWS IoT resources

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_AssociateServiceRoleToAccount.html

#### Defined in

actions/greengrass.ts:18

___

### BatchAssociateClientDeviceWithCoreDevice

• **BatchAssociateClientDeviceWithCoreDevice** = ``"greengrass:BatchAssociateClientDeviceWithCoreDevice"``

Grants permission to associate a list of client devices with a core device

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html

#### Defined in

actions/greengrass.ts:24

___

### BatchDisassociateClientDeviceFromCoreDevice

• **BatchDisassociateClientDeviceFromCoreDevice** = ``"greengrass:BatchDisassociateClientDeviceFromCoreDevice"``

Grants permission to disassociate a list of client devices from a core device

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceFromCoreDevice.html

#### Defined in

actions/greengrass.ts:30

___

### CancelDeployment

• **CancelDeployment** = ``"greengrass:CancelDeployment"``

Grants permission to cancel a deployment

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CancelDeployment.html

#### Defined in

actions/greengrass.ts:36

___

### CreateComponentVersion

• **CreateComponentVersion** = ``"greengrass:CreateComponentVersion"``

Grants permission to create a component

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateComponentVersion.html

#### Defined in

actions/greengrass.ts:42

___

### CreateDeployment

• **CreateDeployment** = ``"greengrass:CreateDeployment"``

Grants permission to create a deployment

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateDeployment.html

#### Defined in

actions/greengrass.ts:48

___

### DeleteComponent

• **DeleteComponent** = ``"greengrass:DeleteComponent"``

Grants permission to delete a component

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DeleteComponent.html

#### Defined in

actions/greengrass.ts:54

___

### DeleteCoreDevice

• **DeleteCoreDevice** = ``"greengrass:DeleteCoreDevice"``

Grants permission to delete a AWS IoT Greengrass core device, which is an AWS I
oT thing. This operation removes the core device from the list of core devices.
This operation doesn't delete the AWS IoT thing

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DeleteCoreDevice.html

#### Defined in

actions/greengrass.ts:62

___

### DeleteDeployment

• **DeleteDeployment** = ``"greengrass:DeleteDeployment"``

Grants permission to delete a deployment. To delete an active deployment, it ne
eds to be cancelled first

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DeleteDeployment.html

#### Defined in

actions/greengrass.ts:69

___

### DescribeComponent

• **DescribeComponent** = ``"greengrass:DescribeComponent"``

Grants permission to retrieve metadata for a version of a component

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DescribeComponent.html

#### Defined in

actions/greengrass.ts:75

___

### DisassociateServiceRoleFromAccount

• **DisassociateServiceRoleFromAccount** = ``"greengrass:DisassociateServiceRoleFromAccount"``

Grants permission to disassociate the service role from an account. Without a s
ervice role, deployments will not work

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DisassociateServiceRoleFromAccount.html

#### Defined in

actions/greengrass.ts:82

___

### GetComponent

• **GetComponent** = ``"greengrass:GetComponent"``

Grants permission to get the recipe for a version of a component

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponent.html

#### Defined in

actions/greengrass.ts:88

___

### GetComponentVersionArtifact

• **GetComponentVersionArtifact** = ``"greengrass:GetComponentVersionArtifact"``

Grants permission to get the pre-signed URL to download a public component arti
fact

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponentVersionArtifact.html

#### Defined in

actions/greengrass.ts:95

___

### GetConnectivityInfo

• **GetConnectivityInfo** = ``"greengrass:GetConnectivityInfo"``

Grants permission to retrieve the connectivity information for a Greengrass cor
e device

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetConnectivityInfo.html

#### Defined in

actions/greengrass.ts:102

___

### GetCoreDevice

• **GetCoreDevice** = ``"greengrass:GetCoreDevice"``

Grants permission to retrieves metadata for a AWS IoT Greengrass core device

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetCoreDevice.html

#### Defined in

actions/greengrass.ts:108

___

### GetDeployment

• **GetDeployment** = ``"greengrass:GetDeployment"``

Grants permission to get a deployment

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetDeployment.html

#### Defined in

actions/greengrass.ts:114

___

### GetServiceRoleForAccount

• **GetServiceRoleForAccount** = ``"greengrass:GetServiceRoleForAccount"``

Grants permission to retrieve the service role that is attached to an account

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetServiceRoleForAccount.html

#### Defined in

actions/greengrass.ts:120

___

### ListClientDevicesAssociatedWithCoreDevice

• **ListClientDevicesAssociatedWithCoreDevice** = ``"greengrass:ListClientDevicesAssociatedWithCoreDevice"``

Grants permission to retrieve a paginated list of client devices associated to
a AWS IoT Greengrass core device

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListClientDevicesAssociatedWithCoreDevice.html

#### Defined in

actions/greengrass.ts:127

___

### ListComponentVersions

• **ListComponentVersions** = ``"greengrass:ListComponentVersions"``

Grants permission to retrieve a paginated list of all versions for a component

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListComponentVersions.html

#### Defined in

actions/greengrass.ts:133

___

### ListComponents

• **ListComponents** = ``"greengrass:ListComponents"``

Grants permission to retrieve a paginated list of component summaries

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListComponents.html

#### Defined in

actions/greengrass.ts:139

___

### ListCoreDevices

• **ListCoreDevices** = ``"greengrass:ListCoreDevices"``

Grants permission to retrieve a paginated list of AWS IoT Greengrass core devic
es

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListCoreDevices.html

#### Defined in

actions/greengrass.ts:146

___

### ListDeployments

• **ListDeployments** = ``"greengrass:ListDeployments"``

Grants permission to retrieves a paginated list of deployments

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListDeployments.html

#### Defined in

actions/greengrass.ts:152

___

### ListEffectiveDeployments

• **ListEffectiveDeployments** = ``"greengrass:ListEffectiveDeployments"``

Grants permission to retrieves a paginated list of deployment jobs that AWS IoT
Greengrass sends to AWS IoT Greengrass core devices

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListEffectiveDeployments.html

#### Defined in

actions/greengrass.ts:159

___

### ListInstalledComponents

• **ListInstalledComponents** = ``"greengrass:ListInstalledComponents"``

Grants permission to retrieve a paginated list of the components that a AWS IoT
Greengrass core device runs

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListInstalledComponents.html

#### Defined in

actions/greengrass.ts:166

___

### ListTagsForResource

• **ListTagsForResource** = ``"greengrass:ListTagsForResource"``

Grants permission to list the tags for a resource

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListTagsForResource.html

#### Defined in

actions/greengrass.ts:172

___

### ResolveComponentCandidates

• **ResolveComponentCandidates** = ``"greengrass:ResolveComponentCandidates"``

Grants permission to list components that meet the component, version, and plat
form requirements of a deployment

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ResolveComponentCandidates.html

#### Defined in

actions/greengrass.ts:179

___

### TagResource

• **TagResource** = ``"greengrass:TagResource"``

Grants permission to add tags to a resource

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_TagResource.html

#### Defined in

actions/greengrass.ts:185

___

### UntagResource

• **UntagResource** = ``"greengrass:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_UntagResource.html

#### Defined in

actions/greengrass.ts:191

___

### UpdateConnectivityInfo

• **UpdateConnectivityInfo** = ``"greengrass:UpdateConnectivityInfo"``

Grants permission to update the connectivity information for a Greengrass core.
Any devices that belong to the group that has this core will receive this infor
mation in order to find the location of the core and connect to it

See https://docs.aws.amazon.com/greengrass/v2/APIReference/API_UpdateConnectivityInfo.html

#### Defined in

actions/greengrass.ts:199
