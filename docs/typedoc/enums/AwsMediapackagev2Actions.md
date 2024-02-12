[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMediapackagev2Actions

# Enumeration: AwsMediapackagev2Actions

All IAM policy actions for AWS Elemental MediaPackage V2 (MEDIAPACKAGEV2)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackagev2.html

2024-02-12T09:57:17.849Z

## Table of contents

### Enumeration Members

- [CreateChannel](AwsMediapackagev2Actions.md#createchannel)
- [CreateChannelGroup](AwsMediapackagev2Actions.md#createchannelgroup)
- [CreateOriginEndpoint](AwsMediapackagev2Actions.md#createoriginendpoint)
- [DeleteChannel](AwsMediapackagev2Actions.md#deletechannel)
- [DeleteChannelGroup](AwsMediapackagev2Actions.md#deletechannelgroup)
- [DeleteChannelPolicy](AwsMediapackagev2Actions.md#deletechannelpolicy)
- [DeleteOriginEndpoint](AwsMediapackagev2Actions.md#deleteoriginendpoint)
- [DeleteOriginEndpointPolicy](AwsMediapackagev2Actions.md#deleteoriginendpointpolicy)
- [GetChannel](AwsMediapackagev2Actions.md#getchannel)
- [GetChannelGroup](AwsMediapackagev2Actions.md#getchannelgroup)
- [GetChannelPolicy](AwsMediapackagev2Actions.md#getchannelpolicy)
- [GetHeadObject](AwsMediapackagev2Actions.md#getheadobject)
- [GetObject](AwsMediapackagev2Actions.md#getobject)
- [GetOriginEndpoint](AwsMediapackagev2Actions.md#getoriginendpoint)
- [GetOriginEndpointPolicy](AwsMediapackagev2Actions.md#getoriginendpointpolicy)
- [ListChannelGroups](AwsMediapackagev2Actions.md#listchannelgroups)
- [ListChannels](AwsMediapackagev2Actions.md#listchannels)
- [ListOriginEndpoints](AwsMediapackagev2Actions.md#listoriginendpoints)
- [ListTagsForResource](AwsMediapackagev2Actions.md#listtagsforresource)
- [PutChannelPolicy](AwsMediapackagev2Actions.md#putchannelpolicy)
- [PutObject](AwsMediapackagev2Actions.md#putobject)
- [PutOriginEndpointPolicy](AwsMediapackagev2Actions.md#putoriginendpointpolicy)
- [TagResource](AwsMediapackagev2Actions.md#tagresource)
- [UntagResource](AwsMediapackagev2Actions.md#untagresource)
- [UpdateChannel](AwsMediapackagev2Actions.md#updatechannel)
- [UpdateChannelGroup](AwsMediapackagev2Actions.md#updatechannelgroup)
- [UpdateOriginEndpoint](AwsMediapackagev2Actions.md#updateoriginendpoint)

## Enumeration Members

### CreateChannel

• **CreateChannel** = ``"mediapackagev2:CreateChannel"``

Grants permission to create a channel in a channel group

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_CreateChannel.html

#### Defined in

actions/mediapackagev2.ts:17

___

### CreateChannelGroup

• **CreateChannelGroup** = ``"mediapackagev2:CreateChannelGroup"``

Grants permission to create a channel group

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_CreateChannelGroup.html

#### Defined in

actions/mediapackagev2.ts:23

___

### CreateOriginEndpoint

• **CreateOriginEndpoint** = ``"mediapackagev2:CreateOriginEndpoint"``

Grants permission to create an origin endpoint for a channel

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_CreateOriginEndpoint.html

#### Defined in

actions/mediapackagev2.ts:29

___

### DeleteChannel

• **DeleteChannel** = ``"mediapackagev2:DeleteChannel"``

Grants permission to delete a channel in a channel group

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_DeleteChannel.html

#### Defined in

actions/mediapackagev2.ts:35

___

### DeleteChannelGroup

• **DeleteChannelGroup** = ``"mediapackagev2:DeleteChannelGroup"``

Grants permission to delete a channel group

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_DeleteChannelGroup.html

#### Defined in

actions/mediapackagev2.ts:41

___

### DeleteChannelPolicy

• **DeleteChannelPolicy** = ``"mediapackagev2:DeleteChannelPolicy"``

Grants permission to delete a resource policy from a channel

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_DeleteChannelPolicy.html

#### Defined in

actions/mediapackagev2.ts:47

___

### DeleteOriginEndpoint

• **DeleteOriginEndpoint** = ``"mediapackagev2:DeleteOriginEndpoint"``

Grants permission to delete an origin endpoint of a channel

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_DeleteOriginEndpoint.html

#### Defined in

actions/mediapackagev2.ts:53

___

### DeleteOriginEndpointPolicy

• **DeleteOriginEndpointPolicy** = ``"mediapackagev2:DeleteOriginEndpointPolicy"``

Grants permission to delete a resource policy from an origin endpoint

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_DeleteOriginEndpointPolicy.html

#### Defined in

actions/mediapackagev2.ts:59

___

### GetChannel

• **GetChannel** = ``"mediapackagev2:GetChannel"``

Grants permission to retrieve details of a channel in a channel group

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetChannel.html

#### Defined in

actions/mediapackagev2.ts:65

___

### GetChannelGroup

• **GetChannelGroup** = ``"mediapackagev2:GetChannelGroup"``

Grants permission to retrieve details of a channel group

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetChannelGroup.html

#### Defined in

actions/mediapackagev2.ts:71

___

### GetChannelPolicy

• **GetChannelPolicy** = ``"mediapackagev2:GetChannelPolicy"``

Grants permission to retrieve a resource policy for a channel

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetChannelPolicy.html

#### Defined in

actions/mediapackagev2.ts:77

___

### GetHeadObject

• **GetHeadObject** = ``"mediapackagev2:GetHeadObject"``

Grants permission to make GetHeadObject requests to MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/userguide/dataplane-apis.html

#### Defined in

actions/mediapackagev2.ts:83

___

### GetObject

• **GetObject** = ``"mediapackagev2:GetObject"``

Grants permission to make GetObject requests to MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/userguide/dataplane-apis.html

#### Defined in

actions/mediapackagev2.ts:89

___

### GetOriginEndpoint

• **GetOriginEndpoint** = ``"mediapackagev2:GetOriginEndpoint"``

Grants permission to retrieve details of an origin endpoint

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetOriginEndpoint.html

#### Defined in

actions/mediapackagev2.ts:95

___

### GetOriginEndpointPolicy

• **GetOriginEndpointPolicy** = ``"mediapackagev2:GetOriginEndpointPolicy"``

Grants permission to retrieve details of a resource policy for an origin endpoi
nt

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetOriginEndpointPolicy.html

#### Defined in

actions/mediapackagev2.ts:102

___

### ListChannelGroups

• **ListChannelGroups** = ``"mediapackagev2:ListChannelGroups"``

Grants permission to list all channel groups for an aws account

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ListChannelGroups.html

#### Defined in

actions/mediapackagev2.ts:108

___

### ListChannels

• **ListChannels** = ``"mediapackagev2:ListChannels"``

Grants permission to list all channels in a channel group

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ListChannels.html

#### Defined in

actions/mediapackagev2.ts:114

___

### ListOriginEndpoints

• **ListOriginEndpoints** = ``"mediapackagev2:ListOriginEndpoints"``

Grants permission to list all origin endpoints of a channel

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ListOriginEndpoints.html

#### Defined in

actions/mediapackagev2.ts:120

___

### ListTagsForResource

• **ListTagsForResource** = ``"mediapackagev2:ListTagsForResource"``

Grants permission to list tags for the specified resource

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/mediapackagev2.ts:126

___

### PutChannelPolicy

• **PutChannelPolicy** = ``"mediapackagev2:PutChannelPolicy"``

Grants permission to attach a resource policy for a channel

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_PutChannelPolicy.html

#### Defined in

actions/mediapackagev2.ts:132

___

### PutObject

• **PutObject** = ``"mediapackagev2:PutObject"``

Grants permission to make PutObject requests to MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/userguide/dataplane-apis.html

#### Defined in

actions/mediapackagev2.ts:138

___

### PutOriginEndpointPolicy

• **PutOriginEndpointPolicy** = ``"mediapackagev2:PutOriginEndpointPolicy"``

Grants permission to attach a resource policy to an origin endpoint

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_PutOriginEndpointPolicy.html

#### Defined in

actions/mediapackagev2.ts:144

___

### TagResource

• **TagResource** = ``"mediapackagev2:TagResource"``

Grants permission to add specified tags to the specified resource

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_TagResource.html

#### Defined in

actions/mediapackagev2.ts:150

___

### UntagResource

• **UntagResource** = ``"mediapackagev2:UntagResource"``

Grants permission to remove the specified tags from the specified resource

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_UntagResource.html

#### Defined in

actions/mediapackagev2.ts:156

___

### UpdateChannel

• **UpdateChannel** = ``"mediapackagev2:UpdateChannel"``

Grants permission to update a channel in a channel group

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_UpdateChannel.html

#### Defined in

actions/mediapackagev2.ts:162

___

### UpdateChannelGroup

• **UpdateChannelGroup** = ``"mediapackagev2:UpdateChannelGroup"``

Grants permission to update a channel group

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_UpdateChannelGroup.html

#### Defined in

actions/mediapackagev2.ts:168

___

### UpdateOriginEndpoint

• **UpdateOriginEndpoint** = ``"mediapackagev2:UpdateOriginEndpoint"``

Grants permission to update an origin endpoint of a channel

See https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_UpdateOriginEndpoint.html

#### Defined in

actions/mediapackagev2.ts:174
