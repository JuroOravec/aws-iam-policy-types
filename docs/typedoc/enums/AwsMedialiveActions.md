[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMedialiveActions

# Enumeration: AwsMedialiveActions

All IAM policy actions for AWS Elemental MediaLive (MEDIALIVE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmedialive.html

2024-02-12T09:57:16.827Z

## Table of contents

### Enumeration Members

- [AcceptInputDeviceTransfer](AwsMedialiveActions.md#acceptinputdevicetransfer)
- [BatchDelete](AwsMedialiveActions.md#batchdelete)
- [BatchStart](AwsMedialiveActions.md#batchstart)
- [BatchStop](AwsMedialiveActions.md#batchstop)
- [BatchUpdateSchedule](AwsMedialiveActions.md#batchupdateschedule)
- [CancelInputDeviceTransfer](AwsMedialiveActions.md#cancelinputdevicetransfer)
- [ClaimDevice](AwsMedialiveActions.md#claimdevice)
- [CreateChannel](AwsMedialiveActions.md#createchannel)
- [CreateInput](AwsMedialiveActions.md#createinput)
- [CreateInputSecurityGroup](AwsMedialiveActions.md#createinputsecuritygroup)
- [CreateMultiplex](AwsMedialiveActions.md#createmultiplex)
- [CreateMultiplexProgram](AwsMedialiveActions.md#createmultiplexprogram)
- [CreatePartnerInput](AwsMedialiveActions.md#createpartnerinput)
- [CreateTags](AwsMedialiveActions.md#createtags)
- [DeleteChannel](AwsMedialiveActions.md#deletechannel)
- [DeleteInput](AwsMedialiveActions.md#deleteinput)
- [DeleteInputSecurityGroup](AwsMedialiveActions.md#deleteinputsecuritygroup)
- [DeleteMultiplex](AwsMedialiveActions.md#deletemultiplex)
- [DeleteMultiplexProgram](AwsMedialiveActions.md#deletemultiplexprogram)
- [DeleteReservation](AwsMedialiveActions.md#deletereservation)
- [DeleteSchedule](AwsMedialiveActions.md#deleteschedule)
- [DeleteTags](AwsMedialiveActions.md#deletetags)
- [DescribeAccountConfiguration](AwsMedialiveActions.md#describeaccountconfiguration)
- [DescribeChannel](AwsMedialiveActions.md#describechannel)
- [DescribeInput](AwsMedialiveActions.md#describeinput)
- [DescribeInputDevice](AwsMedialiveActions.md#describeinputdevice)
- [DescribeInputDeviceThumbnail](AwsMedialiveActions.md#describeinputdevicethumbnail)
- [DescribeInputSecurityGroup](AwsMedialiveActions.md#describeinputsecuritygroup)
- [DescribeMultiplex](AwsMedialiveActions.md#describemultiplex)
- [DescribeMultiplexProgram](AwsMedialiveActions.md#describemultiplexprogram)
- [DescribeOffering](AwsMedialiveActions.md#describeoffering)
- [DescribeReservation](AwsMedialiveActions.md#describereservation)
- [DescribeSchedule](AwsMedialiveActions.md#describeschedule)
- [DescribeThumbnails](AwsMedialiveActions.md#describethumbnails)
- [ListChannels](AwsMedialiveActions.md#listchannels)
- [ListInputDeviceTransfers](AwsMedialiveActions.md#listinputdevicetransfers)
- [ListInputDevices](AwsMedialiveActions.md#listinputdevices)
- [ListInputSecurityGroups](AwsMedialiveActions.md#listinputsecuritygroups)
- [ListInputs](AwsMedialiveActions.md#listinputs)
- [ListMultiplexPrograms](AwsMedialiveActions.md#listmultiplexprograms)
- [ListMultiplexes](AwsMedialiveActions.md#listmultiplexes)
- [ListOfferings](AwsMedialiveActions.md#listofferings)
- [ListReservations](AwsMedialiveActions.md#listreservations)
- [ListTagsForResource](AwsMedialiveActions.md#listtagsforresource)
- [PurchaseOffering](AwsMedialiveActions.md#purchaseoffering)
- [RebootInputDevice](AwsMedialiveActions.md#rebootinputdevice)
- [RejectInputDeviceTransfer](AwsMedialiveActions.md#rejectinputdevicetransfer)
- [StartChannel](AwsMedialiveActions.md#startchannel)
- [StartInputDevice](AwsMedialiveActions.md#startinputdevice)
- [StartInputDeviceMaintenanceWindow](AwsMedialiveActions.md#startinputdevicemaintenancewindow)
- [StartMultiplex](AwsMedialiveActions.md#startmultiplex)
- [StopChannel](AwsMedialiveActions.md#stopchannel)
- [StopInputDevice](AwsMedialiveActions.md#stopinputdevice)
- [StopMultiplex](AwsMedialiveActions.md#stopmultiplex)
- [TransferInputDevice](AwsMedialiveActions.md#transferinputdevice)
- [UpdateAccountConfiguration](AwsMedialiveActions.md#updateaccountconfiguration)
- [UpdateChannel](AwsMedialiveActions.md#updatechannel)
- [UpdateChannelClass](AwsMedialiveActions.md#updatechannelclass)
- [UpdateInput](AwsMedialiveActions.md#updateinput)
- [UpdateInputDevice](AwsMedialiveActions.md#updateinputdevice)
- [UpdateInputSecurityGroup](AwsMedialiveActions.md#updateinputsecuritygroup)
- [UpdateMultiplex](AwsMedialiveActions.md#updatemultiplex)
- [UpdateMultiplexProgram](AwsMedialiveActions.md#updatemultiplexprogram)
- [UpdateReservation](AwsMedialiveActions.md#updatereservation)

## Enumeration Members

### AcceptInputDeviceTransfer

• **AcceptInputDeviceTransfer** = ``"medialive:AcceptInputDeviceTransfer"``

Grants permission to accept an input device transfer

See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html

#### Defined in

actions/medialive.ts:17

___

### BatchDelete

• **BatchDelete** = ``"medialive:BatchDelete"``

Grants permission to delete channels, inputs, input security groups, and multip
lexes

See https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html

#### Defined in

actions/medialive.ts:24

___

### BatchStart

• **BatchStart** = ``"medialive:BatchStart"``

Grants permission to start channels and multiplexes

See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html

#### Defined in

actions/medialive.ts:30

___

### BatchStop

• **BatchStop** = ``"medialive:BatchStop"``

Grants permission to stop channels and multiplexes

See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html

#### Defined in

actions/medialive.ts:36

___

### BatchUpdateSchedule

• **BatchUpdateSchedule** = ``"medialive:BatchUpdateSchedule"``

Grants permission to add and remove actions from a channel's schedule

See https://docs.aws.amazon.com/medialive/latest/ug/submitting-batch-command.html

#### Defined in

actions/medialive.ts:42

___

### CancelInputDeviceTransfer

• **CancelInputDeviceTransfer** = ``"medialive:CancelInputDeviceTransfer"``

Grants permission to cancel an input device transfer

See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html

#### Defined in

actions/medialive.ts:48

___

### ClaimDevice

• **ClaimDevice** = ``"medialive:ClaimDevice"``

Grants permission to claim an input device

See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html

#### Defined in

actions/medialive.ts:54

___

### CreateChannel

• **CreateChannel** = ``"medialive:CreateChannel"``

Grants permission to create a channel

See https://docs.aws.amazon.com/medialive/latest/ug/creating-channel-scratch.html

#### Defined in

actions/medialive.ts:60

___

### CreateInput

• **CreateInput** = ``"medialive:CreateInput"``

Grants permission to create an input

See https://docs.aws.amazon.com/medialive/latest/ug/creating-input.html

#### Defined in

actions/medialive.ts:66

___

### CreateInputSecurityGroup

• **CreateInputSecurityGroup** = ``"medialive:CreateInputSecurityGroup"``

Grants permission to create an input security group

See https://docs.aws.amazon.com/medialive/latest/ug/working-with-input-security-groups.html

#### Defined in

actions/medialive.ts:72

___

### CreateMultiplex

• **CreateMultiplex** = ``"medialive:CreateMultiplex"``

Grants permission to create a multiplex

See https://docs.aws.amazon.com/medialive/latest/ug/multiplex-create.html

#### Defined in

actions/medialive.ts:78

___

### CreateMultiplexProgram

• **CreateMultiplexProgram** = ``"medialive:CreateMultiplexProgram"``

Grants permission to create a multiplex program

See https://docs.aws.amazon.com/medialive/latest/ug/multiplex-create.html

#### Defined in

actions/medialive.ts:84

___

### CreatePartnerInput

• **CreatePartnerInput** = ``"medialive:CreatePartnerInput"``

Grants permission to create a partner input

See https://docs.aws.amazon.com/medialive/latest/ug/input-create-cdi-partners.html

#### Defined in

actions/medialive.ts:90

___

### CreateTags

• **CreateTags** = ``"medialive:CreateTags"``

Grants permission to create tags for channels, inputs, input security groups, m
ultiplexes, and reservations

See https://docs.aws.amazon.com/medialive/latest/ug/tagging.html

#### Defined in

actions/medialive.ts:97

___

### DeleteChannel

• **DeleteChannel** = ``"medialive:DeleteChannel"``

Grants permission to delete a channel

See https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html

#### Defined in

actions/medialive.ts:103

___

### DeleteInput

• **DeleteInput** = ``"medialive:DeleteInput"``

Grants permission to delete an input

See https://docs.aws.amazon.com/medialive/latest/ug/delete-input.html

#### Defined in

actions/medialive.ts:109

___

### DeleteInputSecurityGroup

• **DeleteInputSecurityGroup** = ``"medialive:DeleteInputSecurityGroup"``

Grants permission to delete an input security group

See https://docs.aws.amazon.com/medialive/latest/ug/delete-input-security-group.html

#### Defined in

actions/medialive.ts:115

___

### DeleteMultiplex

• **DeleteMultiplex** = ``"medialive:DeleteMultiplex"``

Grants permission to delete a multiplex

See https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex-program.html

#### Defined in

actions/medialive.ts:121

___

### DeleteMultiplexProgram

• **DeleteMultiplexProgram** = ``"medialive:DeleteMultiplexProgram"``

Grants permission to delete a multiplex program

See https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex-program.html

#### Defined in

actions/medialive.ts:127

___

### DeleteReservation

• **DeleteReservation** = ``"medialive:DeleteReservation"``

Grants permission to delete an expired reservation

See https://docs.aws.amazon.com/medialive/latest/ug/deleting-reservations.html

#### Defined in

actions/medialive.ts:133

___

### DeleteSchedule

• **DeleteSchedule** = ``"medialive:DeleteSchedule"``

Grants permission to delete all schedule actions for a channel

See https://docs.aws.amazon.com/medialive/latest/ug/schedule-using-console-delete.html

#### Defined in

actions/medialive.ts:139

___

### DeleteTags

• **DeleteTags** = ``"medialive:DeleteTags"``

Grants permission to delete tags from channels, inputs, input security groups,
multiplexes, and reservations

See https://docs.aws.amazon.com/medialive/latest/ug/tagging.html

#### Defined in

actions/medialive.ts:146

___

### DescribeAccountConfiguration

• **DescribeAccountConfiguration** = ``"medialive:DescribeAccountConfiguration"``

Grants permission to view the account configuration of the customer

See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html

#### Defined in

actions/medialive.ts:152

___

### DescribeChannel

• **DescribeChannel** = ``"medialive:DescribeChannel"``

Grants permission to get details about a channel

See https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html

#### Defined in

actions/medialive.ts:158

___

### DescribeInput

• **DescribeInput** = ``"medialive:DescribeInput"``

Grants permission to describe an input

See https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html

#### Defined in

actions/medialive.ts:164

___

### DescribeInputDevice

• **DescribeInputDevice** = ``"medialive:DescribeInputDevice"``

Grants permission to describe an input device

See https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html

#### Defined in

actions/medialive.ts:170

___

### DescribeInputDeviceThumbnail

• **DescribeInputDeviceThumbnail** = ``"medialive:DescribeInputDeviceThumbnail"``

Grants permission to describe an input device thumbnail

See https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html

#### Defined in

actions/medialive.ts:176

___

### DescribeInputSecurityGroup

• **DescribeInputSecurityGroup** = ``"medialive:DescribeInputSecurityGroup"``

Grants permission to describe an input security group

See https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html

#### Defined in

actions/medialive.ts:182

___

### DescribeMultiplex

• **DescribeMultiplex** = ``"medialive:DescribeMultiplex"``

Grants permission to describe a multiplex

See https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html

#### Defined in

actions/medialive.ts:188

___

### DescribeMultiplexProgram

• **DescribeMultiplexProgram** = ``"medialive:DescribeMultiplexProgram"``

Grants permission to describe a multiplex program

See https://docs.aws.amazon.com/medialive/latest/ug/monitoring-multiplex-console.html

#### Defined in

actions/medialive.ts:194

___

### DescribeOffering

• **DescribeOffering** = ``"medialive:DescribeOffering"``

Grants permission to get details about a reservation offering

See https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html

#### Defined in

actions/medialive.ts:200

___

### DescribeReservation

• **DescribeReservation** = ``"medialive:DescribeReservation"``

Grants permission to get details about a reservation

See https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html

#### Defined in

actions/medialive.ts:206

___

### DescribeSchedule

• **DescribeSchedule** = ``"medialive:DescribeSchedule"``

Grants permission to view a list of actions scheduled on a channel

See https://docs.aws.amazon.com/medialive/latest/ug/schedule-using-console-view.html

#### Defined in

actions/medialive.ts:212

___

### DescribeThumbnails

• **DescribeThumbnails** = ``"medialive:DescribeThumbnails"``

Grants permission to view the thumbnails for a channel

See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html

#### Defined in

actions/medialive.ts:218

___

### ListChannels

• **ListChannels** = ``"medialive:ListChannels"``

Grants permission to list channels

See https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html

#### Defined in

actions/medialive.ts:224

___

### ListInputDeviceTransfers

• **ListInputDeviceTransfers** = ``"medialive:ListInputDeviceTransfers"``

Grants permission to list input device transfers

See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html

#### Defined in

actions/medialive.ts:230

___

### ListInputDevices

• **ListInputDevices** = ``"medialive:ListInputDevices"``

Grants permission to list input devices

See https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html

#### Defined in

actions/medialive.ts:236

___

### ListInputSecurityGroups

• **ListInputSecurityGroups** = ``"medialive:ListInputSecurityGroups"``

Grants permission to list input security groups

See https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html

#### Defined in

actions/medialive.ts:242

___

### ListInputs

• **ListInputs** = ``"medialive:ListInputs"``

Grants permission to list inputs

See https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html

#### Defined in

actions/medialive.ts:248

___

### ListMultiplexPrograms

• **ListMultiplexPrograms** = ``"medialive:ListMultiplexPrograms"``

Grants permission to list multiplex programs

See https://docs.aws.amazon.com/medialive/latest/ug/monitoring-multiplex-console.html

#### Defined in

actions/medialive.ts:254

___

### ListMultiplexes

• **ListMultiplexes** = ``"medialive:ListMultiplexes"``

Grants permission to list multiplexes

See https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html

#### Defined in

actions/medialive.ts:260

___

### ListOfferings

• **ListOfferings** = ``"medialive:ListOfferings"``

Grants permission to list reservation offerings

See https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html

#### Defined in

actions/medialive.ts:266

___

### ListReservations

• **ListReservations** = ``"medialive:ListReservations"``

Grants permission to list reservations

See https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html

#### Defined in

actions/medialive.ts:272

___

### ListTagsForResource

• **ListTagsForResource** = ``"medialive:ListTagsForResource"``

Grants permission to list tags for channels, inputs, input security groups, mul
tiplexes, and reservations

See https://docs.aws.amazon.com/medialive/latest/ug/tagging.html

#### Defined in

actions/medialive.ts:279

___

### PurchaseOffering

• **PurchaseOffering** = ``"medialive:PurchaseOffering"``

Grants permission to purchase a reservation offering

See https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html

#### Defined in

actions/medialive.ts:285

___

### RebootInputDevice

• **RebootInputDevice** = ``"medialive:RebootInputDevice"``

Grants permission to reboot an input device

See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html

#### Defined in

actions/medialive.ts:291

___

### RejectInputDeviceTransfer

• **RejectInputDeviceTransfer** = ``"medialive:RejectInputDeviceTransfer"``

Grants permission to reject an input device transfer

See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html

#### Defined in

actions/medialive.ts:297

___

### StartChannel

• **StartChannel** = ``"medialive:StartChannel"``

Grants permission to start a channel

See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html

#### Defined in

actions/medialive.ts:303

___

### StartInputDevice

• **StartInputDevice** = ``"medialive:StartInputDevice"``

Grants permission to start an input device attached to a MediaConnect flow

See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html

#### Defined in

actions/medialive.ts:309

___

### StartInputDeviceMaintenanceWindow

• **StartInputDeviceMaintenanceWindow** = ``"medialive:StartInputDeviceMaintenanceWindow"``

Grants permission to start a maintenance window for an input device

See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html

#### Defined in

actions/medialive.ts:315

___

### StartMultiplex

• **StartMultiplex** = ``"medialive:StartMultiplex"``

Grants permission to start a multiplex

See https://docs.aws.amazon.com/medialive/latest/ug/start-multiplex.html

#### Defined in

actions/medialive.ts:321

___

### StopChannel

• **StopChannel** = ``"medialive:StopChannel"``

Grants permission to stop a channel

See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html

#### Defined in

actions/medialive.ts:327

___

### StopInputDevice

• **StopInputDevice** = ``"medialive:StopInputDevice"``

Grants permission to stop an input device attached to a MediaConnect flow

See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html

#### Defined in

actions/medialive.ts:333

___

### StopMultiplex

• **StopMultiplex** = ``"medialive:StopMultiplex"``

Grants permission to stop a multiplex

See https://docs.aws.amazon.com/medialive/latest/ug/stop-multiplex.title.html

#### Defined in

actions/medialive.ts:339

___

### TransferInputDevice

• **TransferInputDevice** = ``"medialive:TransferInputDevice"``

Grants permission to transfer an input device

See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html

#### Defined in

actions/medialive.ts:345

___

### UpdateAccountConfiguration

• **UpdateAccountConfiguration** = ``"medialive:UpdateAccountConfiguration"``

Grants permission to update a customer's account configuration

See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html

#### Defined in

actions/medialive.ts:351

___

### UpdateChannel

• **UpdateChannel** = ``"medialive:UpdateChannel"``

Grants permission to update a channel

See https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html

#### Defined in

actions/medialive.ts:357

___

### UpdateChannelClass

• **UpdateChannelClass** = ``"medialive:UpdateChannelClass"``

Grants permission to update the class of a channel

See https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html

#### Defined in

actions/medialive.ts:363

___

### UpdateInput

• **UpdateInput** = ``"medialive:UpdateInput"``

Grants permission to update an input

See https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html

#### Defined in

actions/medialive.ts:369

___

### UpdateInputDevice

• **UpdateInputDevice** = ``"medialive:UpdateInputDevice"``

Grants permission to update an input device

See https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html

#### Defined in

actions/medialive.ts:375

___

### UpdateInputSecurityGroup

• **UpdateInputSecurityGroup** = ``"medialive:UpdateInputSecurityGroup"``

Grants permission to update an input security group

See https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html

#### Defined in

actions/medialive.ts:381

___

### UpdateMultiplex

• **UpdateMultiplex** = ``"medialive:UpdateMultiplex"``

Grants permission to update a multiplex

See https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html

#### Defined in

actions/medialive.ts:387

___

### UpdateMultiplexProgram

• **UpdateMultiplexProgram** = ``"medialive:UpdateMultiplexProgram"``

Grants permission to update a multiplex program

See https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html

#### Defined in

actions/medialive.ts:393

___

### UpdateReservation

• **UpdateReservation** = ``"medialive:UpdateReservation"``

Grants permission to update a reservation

See https://docs.aws.amazon.com/medialive/latest/ug/reservations.html

#### Defined in

actions/medialive.ts:399
