[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsKinesisvideoActions

# Enumeration: AwsKinesisvideoActions

All IAM policy actions for Amazon Kinesis Video Streams (KINESISVIDEO)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisvideostreams.html

2024-02-12T09:58:01.187Z

## Table of contents

### Enumeration Members

- [ConnectAsMaster](AwsKinesisvideoActions.md#connectasmaster)
- [ConnectAsViewer](AwsKinesisvideoActions.md#connectasviewer)
- [CreateSignalingChannel](AwsKinesisvideoActions.md#createsignalingchannel)
- [CreateStream](AwsKinesisvideoActions.md#createstream)
- [DeleteEdgeConfiguration](AwsKinesisvideoActions.md#deleteedgeconfiguration)
- [DeleteSignalingChannel](AwsKinesisvideoActions.md#deletesignalingchannel)
- [DeleteStream](AwsKinesisvideoActions.md#deletestream)
- [DescribeEdgeConfiguration](AwsKinesisvideoActions.md#describeedgeconfiguration)
- [DescribeImageGenerationConfiguration](AwsKinesisvideoActions.md#describeimagegenerationconfiguration)
- [DescribeMappedResourceConfiguration](AwsKinesisvideoActions.md#describemappedresourceconfiguration)
- [DescribeMediaStorageConfiguration](AwsKinesisvideoActions.md#describemediastorageconfiguration)
- [DescribeNotificationConfiguration](AwsKinesisvideoActions.md#describenotificationconfiguration)
- [DescribeSignalingChannel](AwsKinesisvideoActions.md#describesignalingchannel)
- [DescribeStream](AwsKinesisvideoActions.md#describestream)
- [GetClip](AwsKinesisvideoActions.md#getclip)
- [GetDASHStreamingSessionURL](AwsKinesisvideoActions.md#getdashstreamingsessionurl)
- [GetDataEndpoint](AwsKinesisvideoActions.md#getdataendpoint)
- [GetHLSStreamingSessionURL](AwsKinesisvideoActions.md#gethlsstreamingsessionurl)
- [GetIceServerConfig](AwsKinesisvideoActions.md#geticeserverconfig)
- [GetImages](AwsKinesisvideoActions.md#getimages)
- [GetMedia](AwsKinesisvideoActions.md#getmedia)
- [GetMediaForFragmentList](AwsKinesisvideoActions.md#getmediaforfragmentlist)
- [GetSignalingChannelEndpoint](AwsKinesisvideoActions.md#getsignalingchannelendpoint)
- [JoinStorageSession](AwsKinesisvideoActions.md#joinstoragesession)
- [ListEdgeAgentConfigurations](AwsKinesisvideoActions.md#listedgeagentconfigurations)
- [ListFragments](AwsKinesisvideoActions.md#listfragments)
- [ListSignalingChannels](AwsKinesisvideoActions.md#listsignalingchannels)
- [ListStreams](AwsKinesisvideoActions.md#liststreams)
- [ListTagsForResource](AwsKinesisvideoActions.md#listtagsforresource)
- [ListTagsForStream](AwsKinesisvideoActions.md#listtagsforstream)
- [PutMedia](AwsKinesisvideoActions.md#putmedia)
- [SendAlexaOfferToMaster](AwsKinesisvideoActions.md#sendalexaoffertomaster)
- [StartEdgeConfigurationUpdate](AwsKinesisvideoActions.md#startedgeconfigurationupdate)
- [TagResource](AwsKinesisvideoActions.md#tagresource)
- [TagStream](AwsKinesisvideoActions.md#tagstream)
- [UntagResource](AwsKinesisvideoActions.md#untagresource)
- [UntagStream](AwsKinesisvideoActions.md#untagstream)
- [UpdateDataRetention](AwsKinesisvideoActions.md#updatedataretention)
- [UpdateImageGenerationConfiguration](AwsKinesisvideoActions.md#updateimagegenerationconfiguration)
- [UpdateMediaStorageConfiguration](AwsKinesisvideoActions.md#updatemediastorageconfiguration)
- [UpdateNotificationConfiguration](AwsKinesisvideoActions.md#updatenotificationconfiguration)
- [UpdateSignalingChannel](AwsKinesisvideoActions.md#updatesignalingchannel)
- [UpdateStream](AwsKinesisvideoActions.md#updatestream)

## Enumeration Members

### ConnectAsMaster

• **ConnectAsMaster** = ``"kinesisvideo:ConnectAsMaster"``

Grants permission to connect as a master to the signaling channel specified by
the endpoint

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsMaster.html

#### Defined in

actions/kinesisvideo.ts:18

___

### ConnectAsViewer

• **ConnectAsViewer** = ``"kinesisvideo:ConnectAsViewer"``

Grants permission to connect as a viewer to the signaling channel specified by
the endpoint

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsViewer.html

#### Defined in

actions/kinesisvideo.ts:25

___

### CreateSignalingChannel

• **CreateSignalingChannel** = ``"kinesisvideo:CreateSignalingChannel"``

Grants permission to create a signaling channel

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateSignalingChannel.html

#### Defined in

actions/kinesisvideo.ts:31

___

### CreateStream

• **CreateStream** = ``"kinesisvideo:CreateStream"``

Grants permission to create a Kinesis video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateStream.html

#### Defined in

actions/kinesisvideo.ts:37

___

### DeleteEdgeConfiguration

• **DeleteEdgeConfiguration** = ``"kinesisvideo:DeleteEdgeConfiguration"``

Grants permission to delete the edge configuration of your Kinesis Video Stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteEdgeConfiguration.html

#### Defined in

actions/kinesisvideo.ts:43

___

### DeleteSignalingChannel

• **DeleteSignalingChannel** = ``"kinesisvideo:DeleteSignalingChannel"``

Grants permission to delete an existing signaling channel

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteSignalingChannel.html

#### Defined in

actions/kinesisvideo.ts:49

___

### DeleteStream

• **DeleteStream** = ``"kinesisvideo:DeleteStream"``

Grants permission to delete an existing Kinesis video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteStream.html

#### Defined in

actions/kinesisvideo.ts:55

___

### DescribeEdgeConfiguration

• **DescribeEdgeConfiguration** = ``"kinesisvideo:DescribeEdgeConfiguration"``

Grants permission to describe the edge configuration of your Kinesis Video Stre
am

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeEdgeConfiguration.html

#### Defined in

actions/kinesisvideo.ts:62

___

### DescribeImageGenerationConfiguration

• **DescribeImageGenerationConfiguration** = ``"kinesisvideo:DescribeImageGenerationConfiguration"``

Grants permission to describe the image generation configuration of your Kinesi
s video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeImageGenerationConfiguration.html

#### Defined in

actions/kinesisvideo.ts:69

___

### DescribeMappedResourceConfiguration

• **DescribeMappedResourceConfiguration** = ``"kinesisvideo:DescribeMappedResourceConfiguration"``

Grants permission to describe the resource mapped to the Kinesis video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeMappedResourceConfiguration.html

#### Defined in

actions/kinesisvideo.ts:75

___

### DescribeMediaStorageConfiguration

• **DescribeMediaStorageConfiguration** = ``"kinesisvideo:DescribeMediaStorageConfiguration"``

Grants permission to describe the media storage configuration of a signaling ch
annel

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeMediaStorageConfiguration.html

#### Defined in

actions/kinesisvideo.ts:82

___

### DescribeNotificationConfiguration

• **DescribeNotificationConfiguration** = ``"kinesisvideo:DescribeNotificationConfiguration"``

Grants permission to describe the notification configuration of your Kinesis vi
deo stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeNotificationConfiguration.html

#### Defined in

actions/kinesisvideo.ts:89

___

### DescribeSignalingChannel

• **DescribeSignalingChannel** = ``"kinesisvideo:DescribeSignalingChannel"``

Grants permission to describe the specified signaling channel

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeSignalingChannel.html

#### Defined in

actions/kinesisvideo.ts:95

___

### DescribeStream

• **DescribeStream** = ``"kinesisvideo:DescribeStream"``

Grants permission to describe the specified Kinesis video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html

#### Defined in

actions/kinesisvideo.ts:101

___

### GetClip

• **GetClip** = ``"kinesisvideo:GetClip"``

Grants permission to get a media clip from a video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetClip.html

#### Defined in

actions/kinesisvideo.ts:107

___

### GetDASHStreamingSessionURL

• **GetDASHStreamingSessionURL** = ``"kinesisvideo:GetDASHStreamingSessionURL"``

Grants permission to create a URL for MPEG-DASH video streaming

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetDASHStreamingSessionURL.html

#### Defined in

actions/kinesisvideo.ts:113

___

### GetDataEndpoint

• **GetDataEndpoint** = ``"kinesisvideo:GetDataEndpoint"``

Grants permission to get an endpoint for a specified stream for either reading
or writing media data to Kinesis Video Streams

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html

#### Defined in

actions/kinesisvideo.ts:120

___

### GetHLSStreamingSessionURL

• **GetHLSStreamingSessionURL** = ``"kinesisvideo:GetHLSStreamingSessionURL"``

Grants permission to create a URL for HLS video streaming

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetHLSStreamingSessionURL.html

#### Defined in

actions/kinesisvideo.ts:126

___

### GetIceServerConfig

• **GetIceServerConfig** = ``"kinesisvideo:GetIceServerConfig"``

Grants permission to get the ICE server configuration

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_AWSAcuitySignalingService_GetIceServerConfig.html

#### Defined in

actions/kinesisvideo.ts:132

___

### GetImages

• **GetImages** = ``"kinesisvideo:GetImages"``

Grants permission to get generated images from your Kinesis video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetImages.html

#### Defined in

actions/kinesisvideo.ts:138

___

### GetMedia

• **GetMedia** = ``"kinesisvideo:GetMedia"``

Grants permission to return media content of a Kinesis video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_GetMedia.html

#### Defined in

actions/kinesisvideo.ts:144

___

### GetMediaForFragmentList

• **GetMediaForFragmentList** = ``"kinesisvideo:GetMediaForFragmentList"``

Grants permission to read and return media data only from persisted storage

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetMediaForFragmentList.html

#### Defined in

actions/kinesisvideo.ts:150

___

### GetSignalingChannelEndpoint

• **GetSignalingChannelEndpoint** = ``"kinesisvideo:GetSignalingChannelEndpoint"``

Grants permission to get endpoints for a specified combination of protocol and
role for a signaling channel

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetSignalingChannelEndpoint.html

#### Defined in

actions/kinesisvideo.ts:157

___

### JoinStorageSession

• **JoinStorageSession** = ``"kinesisvideo:JoinStorageSession"``

Grants permission to join a storage session for a channel

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_AWSAcuityRoutingServiceLambda_JoinStorageSession.html

#### Defined in

actions/kinesisvideo.ts:163

___

### ListEdgeAgentConfigurations

• **ListEdgeAgentConfigurations** = ``"kinesisvideo:ListEdgeAgentConfigurations"``

Grants permission to list an edge agent configurations

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListEdgeAgentConfigurations.html

#### Defined in

actions/kinesisvideo.ts:169

___

### ListFragments

• **ListFragments** = ``"kinesisvideo:ListFragments"``

Grants permission to list the fragments from archival storage based on the pagi
nation token or selector type with range specified

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_ListFragments.html

#### Defined in

actions/kinesisvideo.ts:176

___

### ListSignalingChannels

• **ListSignalingChannels** = ``"kinesisvideo:ListSignalingChannels"``

Grants permission to list your signaling channels

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListSignalingChannels.html

#### Defined in

actions/kinesisvideo.ts:182

___

### ListStreams

• **ListStreams** = ``"kinesisvideo:ListStreams"``

Grants permission to list your Kinesis video streams

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListStreams.html

#### Defined in

actions/kinesisvideo.ts:188

___

### ListTagsForResource

• **ListTagsForResource** = ``"kinesisvideo:ListTagsForResource"``

Grants permission to fetch the tags associated with your resource

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForResource.html

#### Defined in

actions/kinesisvideo.ts:194

___

### ListTagsForStream

• **ListTagsForStream** = ``"kinesisvideo:ListTagsForStream"``

Grants permission to fetch the tags associated with Kinesis video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForStream.html

#### Defined in

actions/kinesisvideo.ts:200

___

### PutMedia

• **PutMedia** = ``"kinesisvideo:PutMedia"``

Grants permission to send media data to a Kinesis video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html

#### Defined in

actions/kinesisvideo.ts:206

___

### SendAlexaOfferToMaster

• **SendAlexaOfferToMaster** = ``"kinesisvideo:SendAlexaOfferToMaster"``

Grants permission to send the Alexa SDP offer to the master

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_AWSAcuitySignalingService_SendAlexaOfferToMaster.html

#### Defined in

actions/kinesisvideo.ts:212

___

### StartEdgeConfigurationUpdate

• **StartEdgeConfigurationUpdate** = ``"kinesisvideo:StartEdgeConfigurationUpdate"``

Grants permission to start edge configuration update of your Kinesis Video Stre
am

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_StartEdgeConfigurationUpdate.html

#### Defined in

actions/kinesisvideo.ts:219

___

### TagResource

• **TagResource** = ``"kinesisvideo:TagResource"``

Grants permission to attach set of tags to your resource

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagResource.html

#### Defined in

actions/kinesisvideo.ts:225

___

### TagStream

• **TagStream** = ``"kinesisvideo:TagStream"``

Grants permission to attach set of tags to your Kinesis video streams

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagStream.html

#### Defined in

actions/kinesisvideo.ts:231

___

### UntagResource

• **UntagResource** = ``"kinesisvideo:UntagResource"``

Grants permission to remove one or more tags from your resource

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagResource.html

#### Defined in

actions/kinesisvideo.ts:237

___

### UntagStream

• **UntagStream** = ``"kinesisvideo:UntagStream"``

Grants permission to remove one or more tags from your Kinesis video streams

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagStream.html

#### Defined in

actions/kinesisvideo.ts:243

___

### UpdateDataRetention

• **UpdateDataRetention** = ``"kinesisvideo:UpdateDataRetention"``

Grants permission to update the data retention period of your Kinesis video str
eam

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateDataRetention.html

#### Defined in

actions/kinesisvideo.ts:250

___

### UpdateImageGenerationConfiguration

• **UpdateImageGenerationConfiguration** = ``"kinesisvideo:UpdateImageGenerationConfiguration"``

Grants permission to update the image generation configuration of your Kinesis
video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateImageGenerationConfiguration.html

#### Defined in

actions/kinesisvideo.ts:257

___

### UpdateMediaStorageConfiguration

• **UpdateMediaStorageConfiguration** = ``"kinesisvideo:UpdateMediaStorageConfiguration"``

Grants permission to create or update an mapping between a signaling channel an
d stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateMediaStorageConfiguration.html

#### Defined in

actions/kinesisvideo.ts:264

___

### UpdateNotificationConfiguration

• **UpdateNotificationConfiguration** = ``"kinesisvideo:UpdateNotificationConfiguration"``

Grants permission to update the notification configuration of your Kinesis vide
o stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateNotificationConfiguration.html

#### Defined in

actions/kinesisvideo.ts:271

___

### UpdateSignalingChannel

• **UpdateSignalingChannel** = ``"kinesisvideo:UpdateSignalingChannel"``

Grants permission to update an existing signaling channel

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateSignalingChannel.html

#### Defined in

actions/kinesisvideo.ts:277

___

### UpdateStream

• **UpdateStream** = ``"kinesisvideo:UpdateStream"``

Grants permission to update an existing Kinesis video stream

See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateStream.html

#### Defined in

actions/kinesisvideo.ts:283
