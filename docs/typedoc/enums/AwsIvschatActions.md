[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIvschatActions

# Enumeration: AwsIvschatActions

All IAM policy actions for Amazon Interactive Video Service Chat (IVSCHAT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservicechat.html

2024-02-12T09:57:45.091Z

## Table of contents

### Enumeration Members

- [CreateChatToken](AwsIvschatActions.md#createchattoken)
- [CreateLoggingConfiguration](AwsIvschatActions.md#createloggingconfiguration)
- [CreateRoom](AwsIvschatActions.md#createroom)
- [DeleteLoggingConfiguration](AwsIvschatActions.md#deleteloggingconfiguration)
- [DeleteMessage](AwsIvschatActions.md#deletemessage)
- [DeleteRoom](AwsIvschatActions.md#deleteroom)
- [DisconnectUser](AwsIvschatActions.md#disconnectuser)
- [GetLoggingConfiguration](AwsIvschatActions.md#getloggingconfiguration)
- [GetRoom](AwsIvschatActions.md#getroom)
- [ListLoggingConfigurations](AwsIvschatActions.md#listloggingconfigurations)
- [ListRooms](AwsIvschatActions.md#listrooms)
- [ListTagsForResource](AwsIvschatActions.md#listtagsforresource)
- [SendEvent](AwsIvschatActions.md#sendevent)
- [TagResource](AwsIvschatActions.md#tagresource)
- [UntagResource](AwsIvschatActions.md#untagresource)
- [UpdateLoggingConfiguration](AwsIvschatActions.md#updateloggingconfiguration)
- [UpdateRoom](AwsIvschatActions.md#updateroom)

## Enumeration Members

### CreateChatToken

• **CreateChatToken** = ``"ivschat:CreateChatToken"``

Grants permission to create an encrypted token that is used to establish an ind
ividual WebSocket connection to a room

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateChatToken.html

#### Defined in

actions/ivschat.ts:18

___

### CreateLoggingConfiguration

• **CreateLoggingConfiguration** = ``"ivschat:CreateLoggingConfiguration"``

Grants permission to create a logging configuration that allows clients to reco
rd room messages

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateLoggingConfiguration.html

#### Defined in

actions/ivschat.ts:25

___

### CreateRoom

• **CreateRoom** = ``"ivschat:CreateRoom"``

Grants permission to create a room that allows clients to connect and pass mess
ages

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateRoom.html

#### Defined in

actions/ivschat.ts:32

___

### DeleteLoggingConfiguration

• **DeleteLoggingConfiguration** = ``"ivschat:DeleteLoggingConfiguration"``

Grants permission to delete the logging configuration for a specified logging c
onfiguration ARN

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteLoggingConfiguration.html

#### Defined in

actions/ivschat.ts:39

___

### DeleteMessage

• **DeleteMessage** = ``"ivschat:DeleteMessage"``

Grants permission to send an event to a specific room which directs clients to
delete a specific message

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteMessage.html

#### Defined in

actions/ivschat.ts:46

___

### DeleteRoom

• **DeleteRoom** = ``"ivschat:DeleteRoom"``

Grants permission to delete the room for a specified room ARN

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteRoom.html

#### Defined in

actions/ivschat.ts:52

___

### DisconnectUser

• **DisconnectUser** = ``"ivschat:DisconnectUser"``

Grants permission to disconnect all connections using a specified user ID from
a room

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DisconnectUser.html

#### Defined in

actions/ivschat.ts:59

___

### GetLoggingConfiguration

• **GetLoggingConfiguration** = ``"ivschat:GetLoggingConfiguration"``

Grants permission to get the logging configuration for a specified logging conf
iguration ARN

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_GetLoggingConfiguration.html

#### Defined in

actions/ivschat.ts:66

___

### GetRoom

• **GetRoom** = ``"ivschat:GetRoom"``

Grants permission to get the room configuration for a specified room ARN

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_GetRoom.html

#### Defined in

actions/ivschat.ts:72

___

### ListLoggingConfigurations

• **ListLoggingConfigurations** = ``"ivschat:ListLoggingConfigurations"``

Grants permission to get summary information about logging configurations

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListLoggingConfigurations.html

#### Defined in

actions/ivschat.ts:78

___

### ListRooms

• **ListRooms** = ``"ivschat:ListRooms"``

Grants permission to get summary information about rooms

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListRooms.html

#### Defined in

actions/ivschat.ts:84

___

### ListTagsForResource

• **ListTagsForResource** = ``"ivschat:ListTagsForResource"``

Grants permission to get information about the tags for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListTagsForResource.html

#### Defined in

actions/ivschat.ts:90

___

### SendEvent

• **SendEvent** = ``"ivschat:SendEvent"``

Grants permission to send an event to a room

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_SendEvent.html

#### Defined in

actions/ivschat.ts:96

___

### TagResource

• **TagResource** = ``"ivschat:TagResource"``

Grants permission to add or update tags for a resource with a specified ARN

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_TagResource.html

#### Defined in

actions/ivschat.ts:102

___

### UntagResource

• **UntagResource** = ``"ivschat:UntagResource"``

Grants permission to remove tags for a resource with a specified ARN

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UntagResource.html

#### Defined in

actions/ivschat.ts:108

___

### UpdateLoggingConfiguration

• **UpdateLoggingConfiguration** = ``"ivschat:UpdateLoggingConfiguration"``

Grants permission to update the logging configuration for a specified logging c
onfiguration ARN

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UpdateLoggingConfiguration.html

#### Defined in

actions/ivschat.ts:115

___

### UpdateRoom

• **UpdateRoom** = ``"ivschat:UpdateRoom"``

Grants permission to update the room configuration for a specified room ARN

See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UpdateRoom.html

#### Defined in

actions/ivschat.ts:121
