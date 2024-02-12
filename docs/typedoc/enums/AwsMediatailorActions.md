[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMediatailorActions

# Enumeration: AwsMediatailorActions

All IAM policy actions for AWS Elemental MediaTailor (MEDIATAILOR)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediatailor.html

2024-02-12T09:57:19.418Z

## Table of contents

### Enumeration Members

- [ConfigureLogsForChannel](AwsMediatailorActions.md#configurelogsforchannel)
- [ConfigureLogsForPlaybackConfiguration](AwsMediatailorActions.md#configurelogsforplaybackconfiguration)
- [CreateChannel](AwsMediatailorActions.md#createchannel)
- [CreateLiveSource](AwsMediatailorActions.md#createlivesource)
- [CreatePrefetchSchedule](AwsMediatailorActions.md#createprefetchschedule)
- [CreateProgram](AwsMediatailorActions.md#createprogram)
- [CreateSourceLocation](AwsMediatailorActions.md#createsourcelocation)
- [CreateVodSource](AwsMediatailorActions.md#createvodsource)
- [DeleteChannel](AwsMediatailorActions.md#deletechannel)
- [DeleteChannelPolicy](AwsMediatailorActions.md#deletechannelpolicy)
- [DeleteLiveSource](AwsMediatailorActions.md#deletelivesource)
- [DeletePlaybackConfiguration](AwsMediatailorActions.md#deleteplaybackconfiguration)
- [DeletePrefetchSchedule](AwsMediatailorActions.md#deleteprefetchschedule)
- [DeleteProgram](AwsMediatailorActions.md#deleteprogram)
- [DeleteSourceLocation](AwsMediatailorActions.md#deletesourcelocation)
- [DeleteVodSource](AwsMediatailorActions.md#deletevodsource)
- [DescribeChannel](AwsMediatailorActions.md#describechannel)
- [DescribeLiveSource](AwsMediatailorActions.md#describelivesource)
- [DescribeProgram](AwsMediatailorActions.md#describeprogram)
- [DescribeSourceLocation](AwsMediatailorActions.md#describesourcelocation)
- [DescribeVodSource](AwsMediatailorActions.md#describevodsource)
- [GetChannelPolicy](AwsMediatailorActions.md#getchannelpolicy)
- [GetChannelSchedule](AwsMediatailorActions.md#getchannelschedule)
- [GetPlaybackConfiguration](AwsMediatailorActions.md#getplaybackconfiguration)
- [GetPrefetchSchedule](AwsMediatailorActions.md#getprefetchschedule)
- [ListAlerts](AwsMediatailorActions.md#listalerts)
- [ListChannels](AwsMediatailorActions.md#listchannels)
- [ListLiveSources](AwsMediatailorActions.md#listlivesources)
- [ListPlaybackConfigurations](AwsMediatailorActions.md#listplaybackconfigurations)
- [ListPrefetchSchedules](AwsMediatailorActions.md#listprefetchschedules)
- [ListSourceLocations](AwsMediatailorActions.md#listsourcelocations)
- [ListTagsForResource](AwsMediatailorActions.md#listtagsforresource)
- [ListVodSources](AwsMediatailorActions.md#listvodsources)
- [PutChannelPolicy](AwsMediatailorActions.md#putchannelpolicy)
- [PutPlaybackConfiguration](AwsMediatailorActions.md#putplaybackconfiguration)
- [StartChannel](AwsMediatailorActions.md#startchannel)
- [StopChannel](AwsMediatailorActions.md#stopchannel)
- [TagResource](AwsMediatailorActions.md#tagresource)
- [UntagResource](AwsMediatailorActions.md#untagresource)
- [UpdateChannel](AwsMediatailorActions.md#updatechannel)
- [UpdateLiveSource](AwsMediatailorActions.md#updatelivesource)
- [UpdateProgram](AwsMediatailorActions.md#updateprogram)
- [UpdateSourceLocation](AwsMediatailorActions.md#updatesourcelocation)
- [UpdateVodSource](AwsMediatailorActions.md#updatevodsource)

## Enumeration Members

### ConfigureLogsForChannel

• **ConfigureLogsForChannel** = ``"mediatailor:ConfigureLogsForChannel"``

Grants permission to configure logs on the channel with the specified channel n
ame

See https://docs.aws.amazon.com/mediatailor/latest/apireference/configurelogs-channel.html

#### Defined in

actions/mediatailor.ts:18

___

### ConfigureLogsForPlaybackConfiguration

• **ConfigureLogsForPlaybackConfiguration** = ``"mediatailor:ConfigureLogsForPlaybackConfiguration"``

Grants permission to configure logs for a playback configuration

See https://docs.aws.amazon.com/mediatailor/latest/apireference/configurelogs-playbackconfiguration.html

#### Defined in

actions/mediatailor.ts:24

___

### CreateChannel

• **CreateChannel** = ``"mediatailor:CreateChannel"``

Grants permission to create a new channel

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html

#### Defined in

actions/mediatailor.ts:30

___

### CreateLiveSource

• **CreateLiveSource** = ``"mediatailor:CreateLiveSource"``

Grants permission to create a new live source on the source location with the s
pecified source location name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html

#### Defined in

actions/mediatailor.ts:37

___

### CreatePrefetchSchedule

• **CreatePrefetchSchedule** = ``"mediatailor:CreatePrefetchSchedule"``

Grants permission to create a prefetch schedule for the playback configuration
with the specified playback configuration name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html

#### Defined in

actions/mediatailor.ts:44

___

### CreateProgram

• **CreateProgram** = ``"mediatailor:CreateProgram"``

Grants permission to create a new program on the channel with the specified cha
nnel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html

#### Defined in

actions/mediatailor.ts:51

___

### CreateSourceLocation

• **CreateSourceLocation** = ``"mediatailor:CreateSourceLocation"``

Grants permission to create a new source location

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html

#### Defined in

actions/mediatailor.ts:57

___

### CreateVodSource

• **CreateVodSource** = ``"mediatailor:CreateVodSource"``

Grants permission to create a new VOD source on the source location with the sp
ecified source location name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html

#### Defined in

actions/mediatailor.ts:64

___

### DeleteChannel

• **DeleteChannel** = ``"mediatailor:DeleteChannel"``

Grants permission to delete the channel with the specified channel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html

#### Defined in

actions/mediatailor.ts:70

___

### DeleteChannelPolicy

• **DeleteChannelPolicy** = ``"mediatailor:DeleteChannelPolicy"``

Grants permission to delete the IAM policy on the channel with the specified ch
annel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-policy.html

#### Defined in

actions/mediatailor.ts:77

___

### DeleteLiveSource

• **DeleteLiveSource** = ``"mediatailor:DeleteLiveSource"``

Grants permission to delete the live source with the specified live source name
on the source location with the specified source location name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html

#### Defined in

actions/mediatailor.ts:84

___

### DeletePlaybackConfiguration

• **DeletePlaybackConfiguration** = ``"mediatailor:DeletePlaybackConfiguration"``

Grants permission to delete the specified playback configuration

See https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html

#### Defined in

actions/mediatailor.ts:90

___

### DeletePrefetchSchedule

• **DeletePrefetchSchedule** = ``"mediatailor:DeletePrefetchSchedule"``

Grants permission to delete a prefetch schedule for a playback configuration wi
th the specified prefetch schedule name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html

#### Defined in

actions/mediatailor.ts:97

___

### DeleteProgram

• **DeleteProgram** = ``"mediatailor:DeleteProgram"``

Grants permission to delete the program with the specified program name on the
channel with the specified channel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html

#### Defined in

actions/mediatailor.ts:104

___

### DeleteSourceLocation

• **DeleteSourceLocation** = ``"mediatailor:DeleteSourceLocation"``

Grants permission to delete the source location with the specified source locat
ion name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html

#### Defined in

actions/mediatailor.ts:111

___

### DeleteVodSource

• **DeleteVodSource** = ``"mediatailor:DeleteVodSource"``

Grants permission to delete the VOD source with the specified VOD source name o
n the source location with the specified source location name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html

#### Defined in

actions/mediatailor.ts:118

___

### DescribeChannel

• **DescribeChannel** = ``"mediatailor:DescribeChannel"``

Grants permission to retrieve the channel with the specified channel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html

#### Defined in

actions/mediatailor.ts:124

___

### DescribeLiveSource

• **DescribeLiveSource** = ``"mediatailor:DescribeLiveSource"``

Grants permission to retrieve the live source with the specified live source na
me on the source location with the specified source location name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html

#### Defined in

actions/mediatailor.ts:131

___

### DescribeProgram

• **DescribeProgram** = ``"mediatailor:DescribeProgram"``

Grants permission to retrieve the program with the specified program name on th
e channel with the specified channel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html

#### Defined in

actions/mediatailor.ts:138

___

### DescribeSourceLocation

• **DescribeSourceLocation** = ``"mediatailor:DescribeSourceLocation"``

Grants permission to retrieve the source location with the specified source loc
ation name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html

#### Defined in

actions/mediatailor.ts:145

___

### DescribeVodSource

• **DescribeVodSource** = ``"mediatailor:DescribeVodSource"``

Grants permission to retrieve the VOD source with the specified VOD source name
on the source location with the specified source location name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html

#### Defined in

actions/mediatailor.ts:152

___

### GetChannelPolicy

• **GetChannelPolicy** = ``"mediatailor:GetChannelPolicy"``

Grants permission to read the IAM policy on the channel with the specified chan
nel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-policy.html

#### Defined in

actions/mediatailor.ts:159

___

### GetChannelSchedule

• **GetChannelSchedule** = ``"mediatailor:GetChannelSchedule"``

Grants permission to retrieve the schedule of programs on the channel with the
specified channel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-schedule.html

#### Defined in

actions/mediatailor.ts:166

___

### GetPlaybackConfiguration

• **GetPlaybackConfiguration** = ``"mediatailor:GetPlaybackConfiguration"``

Grants permission to retrieve the configuration for the specified name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html

#### Defined in

actions/mediatailor.ts:172

___

### GetPrefetchSchedule

• **GetPrefetchSchedule** = ``"mediatailor:GetPrefetchSchedule"``

Grants permission to retrieve prefetch schedule for a playback configuration wi
th the specified prefetch schedule name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html

#### Defined in

actions/mediatailor.ts:179

___

### ListAlerts

• **ListAlerts** = ``"mediatailor:ListAlerts"``

Grants permission to retrieve the list of alerts on a resource

See https://docs.aws.amazon.com/mediatailor/latest/apireference/alerts.html

#### Defined in

actions/mediatailor.ts:185

___

### ListChannels

• **ListChannels** = ``"mediatailor:ListChannels"``

Grants permission to retrieve the list of existing channels

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channels.html

#### Defined in

actions/mediatailor.ts:191

___

### ListLiveSources

• **ListLiveSources** = ``"mediatailor:ListLiveSources"``

Grants permission to retrieve the list of existing live sources on the source l
ocation with the specified source location name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesources.html

#### Defined in

actions/mediatailor.ts:198

___

### ListPlaybackConfigurations

• **ListPlaybackConfigurations** = ``"mediatailor:ListPlaybackConfigurations"``

Grants permission to retrieve the list of available configurations

See https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfigurations.html

#### Defined in

actions/mediatailor.ts:204

___

### ListPrefetchSchedules

• **ListPrefetchSchedules** = ``"mediatailor:ListPrefetchSchedules"``

Grants permission to retrieve the list of prefetch schedules for a playback con
figuration

See https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname.html

#### Defined in

actions/mediatailor.ts:211

___

### ListSourceLocations

• **ListSourceLocations** = ``"mediatailor:ListSourceLocations"``

Grants permission to retrieve the list of existing source locations

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocations.html

#### Defined in

actions/mediatailor.ts:217

___

### ListTagsForResource

• **ListTagsForResource** = ``"mediatailor:ListTagsForResource"``

Grants permission to list the tags assigned to the specified playback configura
tion resource

See https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html

#### Defined in

actions/mediatailor.ts:224

___

### ListVodSources

• **ListVodSources** = ``"mediatailor:ListVodSources"``

Grants permission to retrieve the list of existing VOD sources on the source lo
cation with the specified source location name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsources.html

#### Defined in

actions/mediatailor.ts:231

___

### PutChannelPolicy

• **PutChannelPolicy** = ``"mediatailor:PutChannelPolicy"``

Grants permission to set the IAM policy on the channel with the specified chann
el name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-policy.html

#### Defined in

actions/mediatailor.ts:238

___

### PutPlaybackConfiguration

• **PutPlaybackConfiguration** = ``"mediatailor:PutPlaybackConfiguration"``

Grants permission to add a new configuration

See https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration.html

#### Defined in

actions/mediatailor.ts:244

___

### StartChannel

• **StartChannel** = ``"mediatailor:StartChannel"``

Grants permission to start the channel with the specified channel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-start.html

#### Defined in

actions/mediatailor.ts:250

___

### StopChannel

• **StopChannel** = ``"mediatailor:StopChannel"``

Grants permission to stop the channel with the specified channel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-stop.html

#### Defined in

actions/mediatailor.ts:256

___

### TagResource

• **TagResource** = ``"mediatailor:TagResource"``

Grants permission to add tags to the specified playback configuration resource

See https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html

#### Defined in

actions/mediatailor.ts:262

___

### UntagResource

• **UntagResource** = ``"mediatailor:UntagResource"``

Grants permission to remove tags from the specified playback configuration reso
urce

See https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html

#### Defined in

actions/mediatailor.ts:269

___

### UpdateChannel

• **UpdateChannel** = ``"mediatailor:UpdateChannel"``

Grants permission to update the channel with the specified channel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html

#### Defined in

actions/mediatailor.ts:275

___

### UpdateLiveSource

• **UpdateLiveSource** = ``"mediatailor:UpdateLiveSource"``

Grants permission to update the live source with the specified live source name
on the source location with the specified source location name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html

#### Defined in

actions/mediatailor.ts:282

___

### UpdateProgram

• **UpdateProgram** = ``"mediatailor:UpdateProgram"``

Grants permission to update the program with the specified program name on the
channel with the specified channel name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html

#### Defined in

actions/mediatailor.ts:289

___

### UpdateSourceLocation

• **UpdateSourceLocation** = ``"mediatailor:UpdateSourceLocation"``

Grants permission to update the source location with the specified source locat
ion name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html

#### Defined in

actions/mediatailor.ts:296

___

### UpdateVodSource

• **UpdateVodSource** = ``"mediatailor:UpdateVodSource"``

Grants permission to update the VOD source with the specified VOD source name o
n the source location with the specified source location name

See https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html

#### Defined in

actions/mediatailor.ts:303
