[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIvsActions

# Enumeration: AwsIvsActions

All IAM policy actions for Amazon Interactive Video Service (IVS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservice.html

2024-02-12T09:57:44.582Z

## Table of contents

### Enumeration Members

- [BatchGetChannel](AwsIvsActions.md#batchgetchannel)
- [BatchGetStreamKey](AwsIvsActions.md#batchgetstreamkey)
- [BatchStartViewerSessionRevocation](AwsIvsActions.md#batchstartviewersessionrevocation)
- [CreateChannel](AwsIvsActions.md#createchannel)
- [CreateEncoderConfiguration](AwsIvsActions.md#createencoderconfiguration)
- [CreateParticipantToken](AwsIvsActions.md#createparticipanttoken)
- [CreatePlaybackRestrictionPolicy](AwsIvsActions.md#createplaybackrestrictionpolicy)
- [CreateRecordingConfiguration](AwsIvsActions.md#createrecordingconfiguration)
- [CreateStage](AwsIvsActions.md#createstage)
- [CreateStorageConfiguration](AwsIvsActions.md#createstorageconfiguration)
- [CreateStreamKey](AwsIvsActions.md#createstreamkey)
- [DeleteChannel](AwsIvsActions.md#deletechannel)
- [DeleteEncoderConfiguration](AwsIvsActions.md#deleteencoderconfiguration)
- [DeletePlaybackKeyPair](AwsIvsActions.md#deleteplaybackkeypair)
- [DeletePlaybackRestrictionPolicy](AwsIvsActions.md#deleteplaybackrestrictionpolicy)
- [DeleteRecordingConfiguration](AwsIvsActions.md#deleterecordingconfiguration)
- [DeleteStage](AwsIvsActions.md#deletestage)
- [DeleteStorageConfiguration](AwsIvsActions.md#deletestorageconfiguration)
- [DeleteStreamKey](AwsIvsActions.md#deletestreamkey)
- [DisconnectParticipant](AwsIvsActions.md#disconnectparticipant)
- [GetChannel](AwsIvsActions.md#getchannel)
- [GetComposition](AwsIvsActions.md#getcomposition)
- [GetEncoderConfiguration](AwsIvsActions.md#getencoderconfiguration)
- [GetParticipant](AwsIvsActions.md#getparticipant)
- [GetPlaybackKeyPair](AwsIvsActions.md#getplaybackkeypair)
- [GetPlaybackRestrictionPolicy](AwsIvsActions.md#getplaybackrestrictionpolicy)
- [GetRecordingConfiguration](AwsIvsActions.md#getrecordingconfiguration)
- [GetStage](AwsIvsActions.md#getstage)
- [GetStageSession](AwsIvsActions.md#getstagesession)
- [GetStorageConfiguration](AwsIvsActions.md#getstorageconfiguration)
- [GetStream](AwsIvsActions.md#getstream)
- [GetStreamKey](AwsIvsActions.md#getstreamkey)
- [GetStreamSession](AwsIvsActions.md#getstreamsession)
- [ImportPlaybackKeyPair](AwsIvsActions.md#importplaybackkeypair)
- [ListChannels](AwsIvsActions.md#listchannels)
- [ListCompositions](AwsIvsActions.md#listcompositions)
- [ListEncoderConfigurations](AwsIvsActions.md#listencoderconfigurations)
- [ListParticipantEvents](AwsIvsActions.md#listparticipantevents)
- [ListParticipants](AwsIvsActions.md#listparticipants)
- [ListPlaybackKeyPairs](AwsIvsActions.md#listplaybackkeypairs)
- [ListPlaybackRestrictionPolicies](AwsIvsActions.md#listplaybackrestrictionpolicies)
- [ListRecordingConfigurations](AwsIvsActions.md#listrecordingconfigurations)
- [ListStageSessions](AwsIvsActions.md#liststagesessions)
- [ListStages](AwsIvsActions.md#liststages)
- [ListStorageConfigurations](AwsIvsActions.md#liststorageconfigurations)
- [ListStreamKeys](AwsIvsActions.md#liststreamkeys)
- [ListStreamSessions](AwsIvsActions.md#liststreamsessions)
- [ListStreams](AwsIvsActions.md#liststreams)
- [ListTagsForResource](AwsIvsActions.md#listtagsforresource)
- [PutMetadata](AwsIvsActions.md#putmetadata)
- [StartComposition](AwsIvsActions.md#startcomposition)
- [StartViewerSessionRevocation](AwsIvsActions.md#startviewersessionrevocation)
- [StopComposition](AwsIvsActions.md#stopcomposition)
- [StopStream](AwsIvsActions.md#stopstream)
- [TagResource](AwsIvsActions.md#tagresource)
- [UntagResource](AwsIvsActions.md#untagresource)
- [UpdateChannel](AwsIvsActions.md#updatechannel)
- [UpdatePlaybackRestrictionPolicy](AwsIvsActions.md#updateplaybackrestrictionpolicy)
- [UpdateStage](AwsIvsActions.md#updatestage)

## Enumeration Members

### BatchGetChannel

• **BatchGetChannel** = ``"ivs:BatchGetChannel"``

Grants permission to get multiple channels simultaneously by channel ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_BatchGetChannel.html

#### Defined in

actions/ivs.ts:17

___

### BatchGetStreamKey

• **BatchGetStreamKey** = ``"ivs:BatchGetStreamKey"``

Grants permission to get multiple stream keys simultaneously by stream key ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_BatchGetStreamKey.html

#### Defined in

actions/ivs.ts:23

___

### BatchStartViewerSessionRevocation

• **BatchStartViewerSessionRevocation** = ``"ivs:BatchStartViewerSessionRevocation"``

Grants permission to perform StartViewerSessionRevocation on multiple channel A
RN and viewer ID pairs simultaneously

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_BatchStartViewerSessionRevocation.html

#### Defined in

actions/ivs.ts:30

___

### CreateChannel

• **CreateChannel** = ``"ivs:CreateChannel"``

Grants permission to create a new channel and an associated stream key

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateChannel.html

#### Defined in

actions/ivs.ts:36

___

### CreateEncoderConfiguration

• **CreateEncoderConfiguration** = ``"ivs:CreateEncoderConfiguration"``

Grants permission to create a new encoder configuration

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateEncoderConfiguration.html

#### Defined in

actions/ivs.ts:42

___

### CreateParticipantToken

• **CreateParticipantToken** = ``"ivs:CreateParticipantToken"``

Grants permission to create a participant token

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateParticipantToken.html

#### Defined in

actions/ivs.ts:48

___

### CreatePlaybackRestrictionPolicy

• **CreatePlaybackRestrictionPolicy** = ``"ivs:CreatePlaybackRestrictionPolicy"``

Grants permission to create a playback restriction policy

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreatePlaybackRestrictionPolicy.html

#### Defined in

actions/ivs.ts:54

___

### CreateRecordingConfiguration

• **CreateRecordingConfiguration** = ``"ivs:CreateRecordingConfiguration"``

Grants permission to create a a new recording configuration

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateRecordingConfiguration.html

#### Defined in

actions/ivs.ts:60

___

### CreateStage

• **CreateStage** = ``"ivs:CreateStage"``

Grants permission to create a stage

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateStage.html

#### Defined in

actions/ivs.ts:66

___

### CreateStorageConfiguration

• **CreateStorageConfiguration** = ``"ivs:CreateStorageConfiguration"``

Grants permission to create a new storage configuration

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateStorageConfiguration.html

#### Defined in

actions/ivs.ts:72

___

### CreateStreamKey

• **CreateStreamKey** = ``"ivs:CreateStreamKey"``

Grants permission to create a stream key

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateStreamKey.html

#### Defined in

actions/ivs.ts:78

___

### DeleteChannel

• **DeleteChannel** = ``"ivs:DeleteChannel"``

Grants permission to delete a channel and channel's stream keys

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeleteChannel.html

#### Defined in

actions/ivs.ts:84

___

### DeleteEncoderConfiguration

• **DeleteEncoderConfiguration** = ``"ivs:DeleteEncoderConfiguration"``

Grants permission to delete an encoder configuration for the specified ARN

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeleteEncoderConfiguration.html

#### Defined in

actions/ivs.ts:90

___

### DeletePlaybackKeyPair

• **DeletePlaybackKeyPair** = ``"ivs:DeletePlaybackKeyPair"``

Grants permission to delete the playback key pair for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeletePlaybackKeyPair.html

#### Defined in

actions/ivs.ts:96

___

### DeletePlaybackRestrictionPolicy

• **DeletePlaybackRestrictionPolicy** = ``"ivs:DeletePlaybackRestrictionPolicy"``

Grants permission to delete the playback restriction policy for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeletePlaybackRestrictionPolicy.html

#### Defined in

actions/ivs.ts:102

___

### DeleteRecordingConfiguration

• **DeleteRecordingConfiguration** = ``"ivs:DeleteRecordingConfiguration"``

Grants permission to delete a recording configuration for the specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeleteRecordingConfiguration.html

#### Defined in

actions/ivs.ts:108

___

### DeleteStage

• **DeleteStage** = ``"ivs:DeleteStage"``

Grants permission to delete the stage for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeleteStage.html

#### Defined in

actions/ivs.ts:114

___

### DeleteStorageConfiguration

• **DeleteStorageConfiguration** = ``"ivs:DeleteStorageConfiguration"``

Grants permission to delete an storage configuration for the specified ARN

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeleteStorageConfiguration.html

#### Defined in

actions/ivs.ts:120

___

### DeleteStreamKey

• **DeleteStreamKey** = ``"ivs:DeleteStreamKey"``

Grants permission to delete the stream key for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeleteStreamKey.html

#### Defined in

actions/ivs.ts:126

___

### DisconnectParticipant

• **DisconnectParticipant** = ``"ivs:DisconnectParticipant"``

Grants permission to disconnect a participant from for the specified stage ARN

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DisconnectParticipant.html

#### Defined in

actions/ivs.ts:132

___

### GetChannel

• **GetChannel** = ``"ivs:GetChannel"``

Grants permission to get the channel configuration for a specified channel ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetChannel.html

#### Defined in

actions/ivs.ts:138

___

### GetComposition

• **GetComposition** = ``"ivs:GetComposition"``

Grants permission to get the composition for the specified ARN

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetComposition.html

#### Defined in

actions/ivs.ts:144

___

### GetEncoderConfiguration

• **GetEncoderConfiguration** = ``"ivs:GetEncoderConfiguration"``

Grants permission to get the encoder configuration for the specified ARN

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetEncoderConfiguration.html

#### Defined in

actions/ivs.ts:150

___

### GetParticipant

• **GetParticipant** = ``"ivs:GetParticipant"``

Grants permission to get participant information for a specified stage ARN, ses
sion, and participant

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetParticipant.html

#### Defined in

actions/ivs.ts:157

___

### GetPlaybackKeyPair

• **GetPlaybackKeyPair** = ``"ivs:GetPlaybackKeyPair"``

Grants permission to get the playback keypair information for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetPlaybackKeyPair.html

#### Defined in

actions/ivs.ts:163

___

### GetPlaybackRestrictionPolicy

• **GetPlaybackRestrictionPolicy** = ``"ivs:GetPlaybackRestrictionPolicy"``

Grants permission to get the playback restriction policy for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetPlaybackRestrictionPolicy.html

#### Defined in

actions/ivs.ts:169

___

### GetRecordingConfiguration

• **GetRecordingConfiguration** = ``"ivs:GetRecordingConfiguration"``

Grants permission to get the recording configuration for the specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetRecordingConfiguration.html

#### Defined in

actions/ivs.ts:175

___

### GetStage

• **GetStage** = ``"ivs:GetStage"``

Grants permission to get stage information for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetStage.html

#### Defined in

actions/ivs.ts:181

___

### GetStageSession

• **GetStageSession** = ``"ivs:GetStageSession"``

Grants permission to get stage session information for a specified stage ARN an
d session

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetStageSession.html

#### Defined in

actions/ivs.ts:188

___

### GetStorageConfiguration

• **GetStorageConfiguration** = ``"ivs:GetStorageConfiguration"``

Grants permission to get the storage configuration for the specified ARN

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetStorageConfiguration.html

#### Defined in

actions/ivs.ts:194

___

### GetStream

• **GetStream** = ``"ivs:GetStream"``

Grants permission to get information about the active (live) stream on a specif
ied channel

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetStream.html

#### Defined in

actions/ivs.ts:201

___

### GetStreamKey

• **GetStreamKey** = ``"ivs:GetStreamKey"``

Grants permission to get stream-key information for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetStreamKey.html

#### Defined in

actions/ivs.ts:207

___

### GetStreamSession

• **GetStreamSession** = ``"ivs:GetStreamSession"``

Grants permission to get information about the stream session on a specified ch
annel

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetStreamSession.html

#### Defined in

actions/ivs.ts:214

___

### ImportPlaybackKeyPair

• **ImportPlaybackKeyPair** = ``"ivs:ImportPlaybackKeyPair"``

Grants permission to import the public key

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ImportPlaybackKeyPair.html

#### Defined in

actions/ivs.ts:220

___

### ListChannels

• **ListChannels** = ``"ivs:ListChannels"``

Grants permission to get summary information about channels

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListChannels.html

#### Defined in

actions/ivs.ts:226

___

### ListCompositions

• **ListCompositions** = ``"ivs:ListCompositions"``

Grants permission to get summary information about compositions

See https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListCompositions.html

#### Defined in

actions/ivs.ts:232

___

### ListEncoderConfigurations

• **ListEncoderConfigurations** = ``"ivs:ListEncoderConfigurations"``

Grants permission to get summary information about encoder configurations

See https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListEncoderConfigurations.html

#### Defined in

actions/ivs.ts:238

___

### ListParticipantEvents

• **ListParticipantEvents** = ``"ivs:ListParticipantEvents"``

Grants permission to list participant events for a specified stage ARN, session
, and participant

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListParticipantEvents.html

#### Defined in

actions/ivs.ts:245

___

### ListParticipants

• **ListParticipants** = ``"ivs:ListParticipants"``

Grants permission to list participants for a specified stage ARN and session

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListParticipants.html

#### Defined in

actions/ivs.ts:251

___

### ListPlaybackKeyPairs

• **ListPlaybackKeyPairs** = ``"ivs:ListPlaybackKeyPairs"``

Grants permission to get summary information about playback key pairs

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListPlaybackKeyPairs.html

#### Defined in

actions/ivs.ts:257

___

### ListPlaybackRestrictionPolicies

• **ListPlaybackRestrictionPolicies** = ``"ivs:ListPlaybackRestrictionPolicies"``

Grants permission to get summary information about playback restriction policie
s

See https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListPlaybackRestrictionPolicies.html

#### Defined in

actions/ivs.ts:264

___

### ListRecordingConfigurations

• **ListRecordingConfigurations** = ``"ivs:ListRecordingConfigurations"``

Grants permission to get summary information about recording configurations

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListRecordingConfigurations.html

#### Defined in

actions/ivs.ts:270

___

### ListStageSessions

• **ListStageSessions** = ``"ivs:ListStageSessions"``

Grants permission to list stage sessions for a specified stage ARN

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListStageSessions.html

#### Defined in

actions/ivs.ts:276

___

### ListStages

• **ListStages** = ``"ivs:ListStages"``

Grants permission to get summary information about stages

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListStages.html

#### Defined in

actions/ivs.ts:282

___

### ListStorageConfigurations

• **ListStorageConfigurations** = ``"ivs:ListStorageConfigurations"``

Grants permission to get summary information about storage configurations

See https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStorageConfigurations.html

#### Defined in

actions/ivs.ts:288

___

### ListStreamKeys

• **ListStreamKeys** = ``"ivs:ListStreamKeys"``

Grants permission to get summary information about stream keys

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListStreamKeys.html

#### Defined in

actions/ivs.ts:294

___

### ListStreamSessions

• **ListStreamSessions** = ``"ivs:ListStreamSessions"``

Grants permission to get summary information about streams sessions on a specif
ied channel

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListStreamSessions.html

#### Defined in

actions/ivs.ts:301

___

### ListStreams

• **ListStreams** = ``"ivs:ListStreams"``

Grants permission to get summary information about live streams

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListStreams.html

#### Defined in

actions/ivs.ts:307

___

### ListTagsForResource

• **ListTagsForResource** = ``"ivs:ListTagsForResource"``

Grants permission to get information about the tags for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListTagsForResource.html

#### Defined in

actions/ivs.ts:313

___

### PutMetadata

• **PutMetadata** = ``"ivs:PutMetadata"``

Grants permission to insert metadata into an RTMP stream for a specified channe
l

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_PutMetadata.html

#### Defined in

actions/ivs.ts:320

___

### StartComposition

• **StartComposition** = ``"ivs:StartComposition"``

Grants permission to start a new composition

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_StartComposition.html

#### Defined in

actions/ivs.ts:326

___

### StartViewerSessionRevocation

• **StartViewerSessionRevocation** = ``"ivs:StartViewerSessionRevocation"``

Grants permission to start the process of revoking the viewer session associate
d with a specified channel ARN and viewer ID

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_StartViewerSessionRevocation.html

#### Defined in

actions/ivs.ts:333

___

### StopComposition

• **StopComposition** = ``"ivs:StopComposition"``

Grants permission to stop the composition for the specified ARN

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_StopComposition.html

#### Defined in

actions/ivs.ts:339

___

### StopStream

• **StopStream** = ``"ivs:StopStream"``

Grants permission to disconnect a streamer on a specified channel

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_StopStream.html

#### Defined in

actions/ivs.ts:345

___

### TagResource

• **TagResource** = ``"ivs:TagResource"``

Grants permission to add or update tags for a resource with a specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_TagResource.html

#### Defined in

actions/ivs.ts:351

___

### UntagResource

• **UntagResource** = ``"ivs:UntagResource"``

Grants permission to remove tags for a resource with a specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_UntagResource.html

#### Defined in

actions/ivs.ts:357

___

### UpdateChannel

• **UpdateChannel** = ``"ivs:UpdateChannel"``

Grants permission to update a channel's configuration

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_UpdateChannel.html

#### Defined in

actions/ivs.ts:363

___

### UpdatePlaybackRestrictionPolicy

• **UpdatePlaybackRestrictionPolicy** = ``"ivs:UpdatePlaybackRestrictionPolicy"``

Grants permission to update a playback restriction policy for a specified ARN

See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_UpdatePlaybackRestrictionPolicy.html

#### Defined in

actions/ivs.ts:369

___

### UpdateStage

• **UpdateStage** = ``"ivs:UpdateStage"``

Grants permission to update a stage's configuration

See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_UpdateStage.html

#### Defined in

actions/ivs.ts:375
