[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIot1clickActions

# Enumeration: AwsIot1clickActions

All IAM policy actions for AWS IoT 1-Click (IOT1CLICK)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot1-click.html

2024-02-12T09:57:47.213Z

## Table of contents

### Enumeration Members

- [AssociateDeviceWithPlacement](AwsIot1clickActions.md#associatedevicewithplacement)
- [ClaimDevicesByClaimCode](AwsIot1clickActions.md#claimdevicesbyclaimcode)
- [CreatePlacement](AwsIot1clickActions.md#createplacement)
- [CreateProject](AwsIot1clickActions.md#createproject)
- [DeletePlacement](AwsIot1clickActions.md#deleteplacement)
- [DeleteProject](AwsIot1clickActions.md#deleteproject)
- [DescribeDevice](AwsIot1clickActions.md#describedevice)
- [DescribePlacement](AwsIot1clickActions.md#describeplacement)
- [DescribeProject](AwsIot1clickActions.md#describeproject)
- [DisassociateDeviceFromPlacement](AwsIot1clickActions.md#disassociatedevicefromplacement)
- [FinalizeDeviceClaim](AwsIot1clickActions.md#finalizedeviceclaim)
- [GetDeviceMethods](AwsIot1clickActions.md#getdevicemethods)
- [GetDevicesInPlacement](AwsIot1clickActions.md#getdevicesinplacement)
- [InitiateDeviceClaim](AwsIot1clickActions.md#initiatedeviceclaim)
- [InvokeDeviceMethod](AwsIot1clickActions.md#invokedevicemethod)
- [ListDeviceEvents](AwsIot1clickActions.md#listdeviceevents)
- [ListDevices](AwsIot1clickActions.md#listdevices)
- [ListPlacements](AwsIot1clickActions.md#listplacements)
- [ListProjects](AwsIot1clickActions.md#listprojects)
- [ListTagsForResource](AwsIot1clickActions.md#listtagsforresource)
- [TagResource](AwsIot1clickActions.md#tagresource)
- [UnclaimDevice](AwsIot1clickActions.md#unclaimdevice)
- [UntagResource](AwsIot1clickActions.md#untagresource)
- [UpdateDeviceState](AwsIot1clickActions.md#updatedevicestate)
- [UpdatePlacement](AwsIot1clickActions.md#updateplacement)
- [UpdateProject](AwsIot1clickActions.md#updateproject)

## Enumeration Members

### AssociateDeviceWithPlacement

• **AssociateDeviceWithPlacement** = ``"iot1click:AssociateDeviceWithPlacement"``

Grants permission to associate a device to a placement

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_AssociateDeviceWithPlacement.html

#### Defined in

actions/iot1click.ts:17

___

### ClaimDevicesByClaimCode

• **ClaimDevicesByClaimCode** = ``"iot1click:ClaimDevicesByClaimCode"``

Grants permission to claim a batch of devices with a claim code

See https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/claims-claimcode.html

#### Defined in

actions/iot1click.ts:23

___

### CreatePlacement

• **CreatePlacement** = ``"iot1click:CreatePlacement"``

Grants permission to create a new placement in a project

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreatePlacement.html

#### Defined in

actions/iot1click.ts:29

___

### CreateProject

• **CreateProject** = ``"iot1click:CreateProject"``

Grants permission to create a new project

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreateProject.html

#### Defined in

actions/iot1click.ts:35

___

### DeletePlacement

• **DeletePlacement** = ``"iot1click:DeletePlacement"``

Grants permission to delete a placement from a project

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeletePlacement.html

#### Defined in

actions/iot1click.ts:41

___

### DeleteProject

• **DeleteProject** = ``"iot1click:DeleteProject"``

Grants permission to delete a project

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeleteProject.html

#### Defined in

actions/iot1click.ts:47

___

### DescribeDevice

• **DescribeDevice** = ``"iot1click:DescribeDevice"``

Grants permission to describe a device

See https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid.html

#### Defined in

actions/iot1click.ts:53

___

### DescribePlacement

• **DescribePlacement** = ``"iot1click:DescribePlacement"``

Grants permission to describe a placement

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribePlacement.html

#### Defined in

actions/iot1click.ts:59

___

### DescribeProject

• **DescribeProject** = ``"iot1click:DescribeProject"``

Grants permission to describe a project

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribeProject.html

#### Defined in

actions/iot1click.ts:65

___

### DisassociateDeviceFromPlacement

• **DisassociateDeviceFromPlacement** = ``"iot1click:DisassociateDeviceFromPlacement"``

Grants permission to disassociate a device from a placement

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DisassociateDeviceFromPlacement.html

#### Defined in

actions/iot1click.ts:71

___

### FinalizeDeviceClaim

• **FinalizeDeviceClaim** = ``"iot1click:FinalizeDeviceClaim"``

Grants permission to finalize a device claim

See https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-finalize-claim.html

#### Defined in

actions/iot1click.ts:77

___

### GetDeviceMethods

• **GetDeviceMethods** = ``"iot1click:GetDeviceMethods"``

Grants permission to get available methods of a device

See https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html

#### Defined in

actions/iot1click.ts:83

___

### GetDevicesInPlacement

• **GetDevicesInPlacement** = ``"iot1click:GetDevicesInPlacement"``

Grants permission to get devices associated to a placement

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_GetDevicesInPlacement.html

#### Defined in

actions/iot1click.ts:89

___

### InitiateDeviceClaim

• **InitiateDeviceClaim** = ``"iot1click:InitiateDeviceClaim"``

Grants permission to initialize a device claim

See https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-initiate-claim.html

#### Defined in

actions/iot1click.ts:95

___

### InvokeDeviceMethod

• **InvokeDeviceMethod** = ``"iot1click:InvokeDeviceMethod"``

Grants permission to invoke a device method

See https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html

#### Defined in

actions/iot1click.ts:101

___

### ListDeviceEvents

• **ListDeviceEvents** = ``"iot1click:ListDeviceEvents"``

Grants permission to list past events published by a device

See https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-events.html

#### Defined in

actions/iot1click.ts:107

___

### ListDevices

• **ListDevices** = ``"iot1click:ListDevices"``

Grants permission to list all devices

See https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices.html

#### Defined in

actions/iot1click.ts:113

___

### ListPlacements

• **ListPlacements** = ``"iot1click:ListPlacements"``

Grants permission to list placements in a project

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListPlacements.html

#### Defined in

actions/iot1click.ts:119

___

### ListProjects

• **ListProjects** = ``"iot1click:ListProjects"``

Grants permission to list all projects

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListProjects.html

#### Defined in

actions/iot1click.ts:125

___

### ListTagsForResource

• **ListTagsForResource** = ``"iot1click:ListTagsForResource"``

Grants permission to lists the tags for a resource

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListTagsForResource.html

#### Defined in

actions/iot1click.ts:131

___

### TagResource

• **TagResource** = ``"iot1click:TagResource"``

Grants permission to add or modify the tags of a resource

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_TagResource.html

#### Defined in

actions/iot1click.ts:137

___

### UnclaimDevice

• **UnclaimDevice** = ``"iot1click:UnclaimDevice"``

Grants permission to unclaim a device

See https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-unclaim.html

#### Defined in

actions/iot1click.ts:143

___

### UntagResource

• **UntagResource** = ``"iot1click:UntagResource"``

Grants permission to remove the given tags (metadata) from a resource

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UntagResource.html

#### Defined in

actions/iot1click.ts:149

___

### UpdateDeviceState

• **UpdateDeviceState** = ``"iot1click:UpdateDeviceState"``

Grants permission to update device state

See https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-state.html

#### Defined in

actions/iot1click.ts:155

___

### UpdatePlacement

• **UpdatePlacement** = ``"iot1click:UpdatePlacement"``

Grants permission to update a placement

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdatePlacement.html

#### Defined in

actions/iot1click.ts:161

___

### UpdateProject

• **UpdateProject** = ``"iot1click:UpdateProject"``

Update a project

See https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdateProject.html

#### Defined in

actions/iot1click.ts:167
