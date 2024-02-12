[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsGlobalacceleratorActions

# Enumeration: AwsGlobalacceleratorActions

All IAM policy actions for AWS Global Accelerator (GLOBALACCELERATOR)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglobalaccelerator.html

2024-02-12T09:57:30.619Z

## Table of contents

### Enumeration Members

- [AddCustomRoutingEndpoints](AwsGlobalacceleratorActions.md#addcustomroutingendpoints)
- [AddEndpoints](AwsGlobalacceleratorActions.md#addendpoints)
- [AdvertiseByoipCidr](AwsGlobalacceleratorActions.md#advertisebyoipcidr)
- [AllowCustomRoutingTraffic](AwsGlobalacceleratorActions.md#allowcustomroutingtraffic)
- [CreateAccelerator](AwsGlobalacceleratorActions.md#createaccelerator)
- [CreateCrossAccountAttachment](AwsGlobalacceleratorActions.md#createcrossaccountattachment)
- [CreateCustomRoutingAccelerator](AwsGlobalacceleratorActions.md#createcustomroutingaccelerator)
- [CreateCustomRoutingEndpointGroup](AwsGlobalacceleratorActions.md#createcustomroutingendpointgroup)
- [CreateCustomRoutingListener](AwsGlobalacceleratorActions.md#createcustomroutinglistener)
- [CreateEndpointGroup](AwsGlobalacceleratorActions.md#createendpointgroup)
- [CreateListener](AwsGlobalacceleratorActions.md#createlistener)
- [DeleteAccelerator](AwsGlobalacceleratorActions.md#deleteaccelerator)
- [DeleteCrossAccountAttachment](AwsGlobalacceleratorActions.md#deletecrossaccountattachment)
- [DeleteCustomRoutingAccelerator](AwsGlobalacceleratorActions.md#deletecustomroutingaccelerator)
- [DeleteCustomRoutingEndpointGroup](AwsGlobalacceleratorActions.md#deletecustomroutingendpointgroup)
- [DeleteCustomRoutingListener](AwsGlobalacceleratorActions.md#deletecustomroutinglistener)
- [DeleteEndpointGroup](AwsGlobalacceleratorActions.md#deleteendpointgroup)
- [DeleteListener](AwsGlobalacceleratorActions.md#deletelistener)
- [DenyCustomRoutingTraffic](AwsGlobalacceleratorActions.md#denycustomroutingtraffic)
- [DeprovisionByoipCidr](AwsGlobalacceleratorActions.md#deprovisionbyoipcidr)
- [DescribeAccelerator](AwsGlobalacceleratorActions.md#describeaccelerator)
- [DescribeAcceleratorAttributes](AwsGlobalacceleratorActions.md#describeacceleratorattributes)
- [DescribeCrossAccountAttachment](AwsGlobalacceleratorActions.md#describecrossaccountattachment)
- [DescribeCustomRoutingAccelerator](AwsGlobalacceleratorActions.md#describecustomroutingaccelerator)
- [DescribeCustomRoutingAcceleratorAttributes](AwsGlobalacceleratorActions.md#describecustomroutingacceleratorattributes)
- [DescribeCustomRoutingEndpointGroup](AwsGlobalacceleratorActions.md#describecustomroutingendpointgroup)
- [DescribeCustomRoutingListener](AwsGlobalacceleratorActions.md#describecustomroutinglistener)
- [DescribeEndpointGroup](AwsGlobalacceleratorActions.md#describeendpointgroup)
- [DescribeListener](AwsGlobalacceleratorActions.md#describelistener)
- [ListAccelerators](AwsGlobalacceleratorActions.md#listaccelerators)
- [ListByoipCidrs](AwsGlobalacceleratorActions.md#listbyoipcidrs)
- [ListCrossAccountAttachments](AwsGlobalacceleratorActions.md#listcrossaccountattachments)
- [ListCrossAccountResourceAccounts](AwsGlobalacceleratorActions.md#listcrossaccountresourceaccounts)
- [ListCrossAccountResources](AwsGlobalacceleratorActions.md#listcrossaccountresources)
- [ListCustomRoutingAccelerators](AwsGlobalacceleratorActions.md#listcustomroutingaccelerators)
- [ListCustomRoutingEndpointGroups](AwsGlobalacceleratorActions.md#listcustomroutingendpointgroups)
- [ListCustomRoutingListeners](AwsGlobalacceleratorActions.md#listcustomroutinglisteners)
- [ListCustomRoutingPortMappings](AwsGlobalacceleratorActions.md#listcustomroutingportmappings)
- [ListCustomRoutingPortMappingsByDestination](AwsGlobalacceleratorActions.md#listcustomroutingportmappingsbydestination)
- [ListEndpointGroups](AwsGlobalacceleratorActions.md#listendpointgroups)
- [ListListeners](AwsGlobalacceleratorActions.md#listlisteners)
- [ListTagsForResource](AwsGlobalacceleratorActions.md#listtagsforresource)
- [ProvisionByoipCidr](AwsGlobalacceleratorActions.md#provisionbyoipcidr)
- [RemoveCustomRoutingEndpoints](AwsGlobalacceleratorActions.md#removecustomroutingendpoints)
- [RemoveEndpoints](AwsGlobalacceleratorActions.md#removeendpoints)
- [TagResource](AwsGlobalacceleratorActions.md#tagresource)
- [UntagResource](AwsGlobalacceleratorActions.md#untagresource)
- [UpdateAccelerator](AwsGlobalacceleratorActions.md#updateaccelerator)
- [UpdateAcceleratorAttributes](AwsGlobalacceleratorActions.md#updateacceleratorattributes)
- [UpdateCrossAccountAttachment](AwsGlobalacceleratorActions.md#updatecrossaccountattachment)
- [UpdateCustomRoutingAccelerator](AwsGlobalacceleratorActions.md#updatecustomroutingaccelerator)
- [UpdateCustomRoutingAcceleratorAttributes](AwsGlobalacceleratorActions.md#updatecustomroutingacceleratorattributes)
- [UpdateCustomRoutingListener](AwsGlobalacceleratorActions.md#updatecustomroutinglistener)
- [UpdateEndpointGroup](AwsGlobalacceleratorActions.md#updateendpointgroup)
- [UpdateListener](AwsGlobalacceleratorActions.md#updatelistener)
- [WithdrawByoipCidr](AwsGlobalacceleratorActions.md#withdrawbyoipcidr)

## Enumeration Members

### AddCustomRoutingEndpoints

• **AddCustomRoutingEndpoints** = ``"globalaccelerator:AddCustomRoutingEndpoints"``

Grants permission to add a virtual private cloud (VPC) subnet endpoint to a cus
tom routing accelerator endpoint group

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_AddCustomRoutingEndpoints.html

#### Defined in

actions/globalaccelerator.ts:18

___

### AddEndpoints

• **AddEndpoints** = ``"globalaccelerator:AddEndpoints"``

Grants permission to add an endpoint to a standard accelerator endpoint group

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_AddEndpoints.html

#### Defined in

actions/globalaccelerator.ts:24

___

### AdvertiseByoipCidr

• **AdvertiseByoipCidr** = ``"globalaccelerator:AdvertiseByoipCidr"``

Grants permission to advertises an IPv4 address range that is provisioned for u
se with your accelerator through bring your own IP addresses (BYOIP)

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_AdvertiseByoipCidr.html

#### Defined in

actions/globalaccelerator.ts:31

___

### AllowCustomRoutingTraffic

• **AllowCustomRoutingTraffic** = ``"globalaccelerator:AllowCustomRoutingTraffic"``

Grants permission to allows custom routing of user traffic to a private destina
tion IP:PORT in a specific VPC subnet

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html

#### Defined in

actions/globalaccelerator.ts:38

___

### CreateAccelerator

• **CreateAccelerator** = ``"globalaccelerator:CreateAccelerator"``

Grants permission to create a standard accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateAccelerator.html

#### Defined in

actions/globalaccelerator.ts:44

___

### CreateCrossAccountAttachment

• **CreateCrossAccountAttachment** = ``"globalaccelerator:CreateCrossAccountAttachment"``

Grants permission to create a CrossAccountAttachment

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCrossAccountAttachment.html

#### Defined in

actions/globalaccelerator.ts:50

___

### CreateCustomRoutingAccelerator

• **CreateCustomRoutingAccelerator** = ``"globalaccelerator:CreateCustomRoutingAccelerator"``

Grants permission to create a Custom Routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingAccelerator.html

#### Defined in

actions/globalaccelerator.ts:56

___

### CreateCustomRoutingEndpointGroup

• **CreateCustomRoutingEndpointGroup** = ``"globalaccelerator:CreateCustomRoutingEndpointGroup"``

Grants permission to create an endpoint group for the specified listener for a
custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingEndpointGroup.html

#### Defined in

actions/globalaccelerator.ts:63

___

### CreateCustomRoutingListener

• **CreateCustomRoutingListener** = ``"globalaccelerator:CreateCustomRoutingListener"``

Grants permission to create a listener to process inbound connections from clie
nts to a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingListener.html

#### Defined in

actions/globalaccelerator.ts:70

___

### CreateEndpointGroup

• **CreateEndpointGroup** = ``"globalaccelerator:CreateEndpointGroup"``

Grants permission to add an endpoint group to a standard accelerator listener

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html

#### Defined in

actions/globalaccelerator.ts:76

___

### CreateListener

• **CreateListener** = ``"globalaccelerator:CreateListener"``

Grants permission to add a listener to a standard accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateListener.html

#### Defined in

actions/globalaccelerator.ts:82

___

### DeleteAccelerator

• **DeleteAccelerator** = ``"globalaccelerator:DeleteAccelerator"``

Grants permission to delete a standard accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteAccelerator.html

#### Defined in

actions/globalaccelerator.ts:88

___

### DeleteCrossAccountAttachment

• **DeleteCrossAccountAttachment** = ``"globalaccelerator:DeleteCrossAccountAttachment"``

Grants permission to delete a CrossAccountAttachment

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCrossAccountAttachment.html

#### Defined in

actions/globalaccelerator.ts:94

___

### DeleteCustomRoutingAccelerator

• **DeleteCustomRoutingAccelerator** = ``"globalaccelerator:DeleteCustomRoutingAccelerator"``

Grants permission to delete a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingAccelerator.html

#### Defined in

actions/globalaccelerator.ts:100

___

### DeleteCustomRoutingEndpointGroup

• **DeleteCustomRoutingEndpointGroup** = ``"globalaccelerator:DeleteCustomRoutingEndpointGroup"``

Grants permission to delete an endpoint group from a listener for a custom rout
ing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingEndpointGroup.html

#### Defined in

actions/globalaccelerator.ts:107

___

### DeleteCustomRoutingListener

• **DeleteCustomRoutingListener** = ``"globalaccelerator:DeleteCustomRoutingListener"``

Grants permission to delete a listener for a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingListener.html

#### Defined in

actions/globalaccelerator.ts:113

___

### DeleteEndpointGroup

• **DeleteEndpointGroup** = ``"globalaccelerator:DeleteEndpointGroup"``

Grants permission to delete an endpoint group associated with a standard accele
rator listener

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteEndpointGroup.html

#### Defined in

actions/globalaccelerator.ts:120

___

### DeleteListener

• **DeleteListener** = ``"globalaccelerator:DeleteListener"``

Grants permission to delete a listener from a standard accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteListener.html

#### Defined in

actions/globalaccelerator.ts:126

___

### DenyCustomRoutingTraffic

• **DenyCustomRoutingTraffic** = ``"globalaccelerator:DenyCustomRoutingTraffic"``

Grants permission to disallows custom routing of user traffic to a private dest
ination IP:PORT in a specific VPC subnet

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DenyCustomRoutingTraffic.html

#### Defined in

actions/globalaccelerator.ts:133

___

### DeprovisionByoipCidr

• **DeprovisionByoipCidr** = ``"globalaccelerator:DeprovisionByoipCidr"``

Grants permission to releases the specified address range that you provisioned
for use with your accelerator through bring your own IP addresses (BYOIP)

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeprovisionByoipCidr.html

#### Defined in

actions/globalaccelerator.ts:140

___

### DescribeAccelerator

• **DescribeAccelerator** = ``"globalaccelerator:DescribeAccelerator"``

Grants permissions to describe a standard accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAccelerator.html

#### Defined in

actions/globalaccelerator.ts:146

___

### DescribeAcceleratorAttributes

• **DescribeAcceleratorAttributes** = ``"globalaccelerator:DescribeAcceleratorAttributes"``

Grants permission to describe a standard accelerator attributes

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAcceleratorAttributes.html

#### Defined in

actions/globalaccelerator.ts:152

___

### DescribeCrossAccountAttachment

• **DescribeCrossAccountAttachment** = ``"globalaccelerator:DescribeCrossAccountAttachment"``

Grants permissions to describe a CrossAccountAttachment

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCrossAccountAttachment.html

#### Defined in

actions/globalaccelerator.ts:158

___

### DescribeCustomRoutingAccelerator

• **DescribeCustomRoutingAccelerator** = ``"globalaccelerator:DescribeCustomRoutingAccelerator"``

Grants permission to describe a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingAccelerator.html

#### Defined in

actions/globalaccelerator.ts:164

___

### DescribeCustomRoutingAcceleratorAttributes

• **DescribeCustomRoutingAcceleratorAttributes** = ``"globalaccelerator:DescribeCustomRoutingAcceleratorAttributes"``

Grants permission to describe the attributes of a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingAcceleratorAttributes.html

#### Defined in

actions/globalaccelerator.ts:170

___

### DescribeCustomRoutingEndpointGroup

• **DescribeCustomRoutingEndpointGroup** = ``"globalaccelerator:DescribeCustomRoutingEndpointGroup"``

Grants permission to describe an endpoint group for a custom routing accelerato
r

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingEndpointGroup.html

#### Defined in

actions/globalaccelerator.ts:177

___

### DescribeCustomRoutingListener

• **DescribeCustomRoutingListener** = ``"globalaccelerator:DescribeCustomRoutingListener"``

Grants permission to describe a listener for a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingListener.html

#### Defined in

actions/globalaccelerator.ts:183

___

### DescribeEndpointGroup

• **DescribeEndpointGroup** = ``"globalaccelerator:DescribeEndpointGroup"``

Grants permission to describe a standard accelerator endpoint group

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeEndpointGroup.html

#### Defined in

actions/globalaccelerator.ts:189

___

### DescribeListener

• **DescribeListener** = ``"globalaccelerator:DescribeListener"``

Grants permission to describe a standard accelerator listener

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeListener.html

#### Defined in

actions/globalaccelerator.ts:195

___

### ListAccelerators

• **ListAccelerators** = ``"globalaccelerator:ListAccelerators"``

Grants permission to list all standard accelerators

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListAccelerators.html

#### Defined in

actions/globalaccelerator.ts:201

___

### ListByoipCidrs

• **ListByoipCidrs** = ``"globalaccelerator:ListByoipCidrs"``

Grants permission to list the BYOIP cidrs

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListByoipCidrs.html

#### Defined in

actions/globalaccelerator.ts:207

___

### ListCrossAccountAttachments

• **ListCrossAccountAttachments** = ``"globalaccelerator:ListCrossAccountAttachments"``

Grants permission to list all CrossAccountAttachments

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCrossAccountAttachments.html

#### Defined in

actions/globalaccelerator.ts:213

___

### ListCrossAccountResourceAccounts

• **ListCrossAccountResourceAccounts** = ``"globalaccelerator:ListCrossAccountResourceAccounts"``

Grants permission to list accounts with CrossAccountAttachments listing caller
as a principal

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCrossAccountResourceAccounts.html

#### Defined in

actions/globalaccelerator.ts:220

___

### ListCrossAccountResources

• **ListCrossAccountResources** = ``"globalaccelerator:ListCrossAccountResources"``

Grants permission to list all CrossAccountAttachment resources usable by caller

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCrossAccountResources.html

#### Defined in

actions/globalaccelerator.ts:226

___

### ListCustomRoutingAccelerators

• **ListCustomRoutingAccelerators** = ``"globalaccelerator:ListCustomRoutingAccelerators"``

Grants permission to list the custom routing accelerators for an AWS account

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingAccelerators.html

#### Defined in

actions/globalaccelerator.ts:232

___

### ListCustomRoutingEndpointGroups

• **ListCustomRoutingEndpointGroups** = ``"globalaccelerator:ListCustomRoutingEndpointGroups"``

Grants permission to list the endpoint groups that are associated with a listen
er for a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingEndpointGroups.html

#### Defined in

actions/globalaccelerator.ts:239

___

### ListCustomRoutingListeners

• **ListCustomRoutingListeners** = ``"globalaccelerator:ListCustomRoutingListeners"``

Grants permission to list the listeners for a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingListeners.html

#### Defined in

actions/globalaccelerator.ts:245

___

### ListCustomRoutingPortMappings

• **ListCustomRoutingPortMappings** = ``"globalaccelerator:ListCustomRoutingPortMappings"``

Grants permission to list the port mappings for a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingPortMappings.html

#### Defined in

actions/globalaccelerator.ts:251

___

### ListCustomRoutingPortMappingsByDestination

• **ListCustomRoutingPortMappingsByDestination** = ``"globalaccelerator:ListCustomRoutingPortMappingsByDestination"``

Grants permission to list the port mappings for a specific endpoint IP address
(a destination address) in a subnet

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingPortMappingsByDestination.html

#### Defined in

actions/globalaccelerator.ts:258

___

### ListEndpointGroups

• **ListEndpointGroups** = ``"globalaccelerator:ListEndpointGroups"``

Grants permission to list all endpoint groups associated with a standard accele
rator listener

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListEndpointGroups.html

#### Defined in

actions/globalaccelerator.ts:265

___

### ListListeners

• **ListListeners** = ``"globalaccelerator:ListListeners"``

Grants permission to list all listeners associated with a standard accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListListeners.html

#### Defined in

actions/globalaccelerator.ts:271

___

### ListTagsForResource

• **ListTagsForResource** = ``"globalaccelerator:ListTagsForResource"``

Grants permission to list tags for a globalaccelerator resource

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListTagsForResource.html

#### Defined in

actions/globalaccelerator.ts:277

___

### ProvisionByoipCidr

• **ProvisionByoipCidr** = ``"globalaccelerator:ProvisionByoipCidr"``

Grants permission to provisions an address range for use with your accelerator
through bring your own IP addresses (BYOIP)

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_ProvisionByoipCidr.html

#### Defined in

actions/globalaccelerator.ts:284

___

### RemoveCustomRoutingEndpoints

• **RemoveCustomRoutingEndpoints** = ``"globalaccelerator:RemoveCustomRoutingEndpoints"``

Grants permission to remove virtual private cloud (VPC) subnet endpoints from a
custom routing accelerator endpoint group

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_RemoveCustomRoutingEndpoints.html

#### Defined in

actions/globalaccelerator.ts:291

___

### RemoveEndpoints

• **RemoveEndpoints** = ``"globalaccelerator:RemoveEndpoints"``

Grants permission to remove an endpoint from a standard accelerator endpoint gr
oup

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_RemoveEndpoints.html

#### Defined in

actions/globalaccelerator.ts:298

___

### TagResource

• **TagResource** = ``"globalaccelerator:TagResource"``

Grants permission to add tags to a globalaccelerator resource

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_TagResource.html

#### Defined in

actions/globalaccelerator.ts:304

___

### UntagResource

• **UntagResource** = ``"globalaccelerator:UntagResource"``

Grants permission to remove tags from a globalaccelerator resource

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_UntagResource.html

#### Defined in

actions/globalaccelerator.ts:310

___

### UpdateAccelerator

• **UpdateAccelerator** = ``"globalaccelerator:UpdateAccelerator"``

Grants permission to update a standard accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAccelerator.html

#### Defined in

actions/globalaccelerator.ts:316

___

### UpdateAcceleratorAttributes

• **UpdateAcceleratorAttributes** = ``"globalaccelerator:UpdateAcceleratorAttributes"``

Grants permission to update a standard accelerator attributes

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAcceleratorAttributes.html

#### Defined in

actions/globalaccelerator.ts:322

___

### UpdateCrossAccountAttachment

• **UpdateCrossAccountAttachment** = ``"globalaccelerator:UpdateCrossAccountAttachment"``

Grants permission to update a CrossAccountAttachment

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCrossAccountAttachment.html

#### Defined in

actions/globalaccelerator.ts:328

___

### UpdateCustomRoutingAccelerator

• **UpdateCustomRoutingAccelerator** = ``"globalaccelerator:UpdateCustomRoutingAccelerator"``

Grants permission to update a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingAccelerator.html

#### Defined in

actions/globalaccelerator.ts:334

___

### UpdateCustomRoutingAcceleratorAttributes

• **UpdateCustomRoutingAcceleratorAttributes** = ``"globalaccelerator:UpdateCustomRoutingAcceleratorAttributes"``

Grants permission to update the attributes for a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingAcceleratorAttributes.html

#### Defined in

actions/globalaccelerator.ts:340

___

### UpdateCustomRoutingListener

• **UpdateCustomRoutingListener** = ``"globalaccelerator:UpdateCustomRoutingListener"``

Grants permission to update a listener for a custom routing accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingListener.html

#### Defined in

actions/globalaccelerator.ts:346

___

### UpdateEndpointGroup

• **UpdateEndpointGroup** = ``"globalaccelerator:UpdateEndpointGroup"``

Grants permission to update an endpoint group on a standard accelerator listene
r

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html

#### Defined in

actions/globalaccelerator.ts:353

___

### UpdateListener

• **UpdateListener** = ``"globalaccelerator:UpdateListener"``

Grants permission to update a listener on a standard accelerator

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateListener.html

#### Defined in

actions/globalaccelerator.ts:359

___

### WithdrawByoipCidr

• **WithdrawByoipCidr** = ``"globalaccelerator:WithdrawByoipCidr"``

Grants permission to stops advertising a BYOIP IPv4 address

See https://docs.aws.amazon.com/global-accelerator/latest/api/API_WithdrawByoipCidr.html

#### Defined in

actions/globalaccelerator.ts:365
