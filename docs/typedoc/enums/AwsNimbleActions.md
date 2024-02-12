[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsNimbleActions

# Enumeration: AwsNimbleActions

All IAM policy actions for Amazon Nimble Studio (NIMBLE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonnimblestudio.html

2024-02-12T09:58:30.644Z

## Table of contents

### Enumeration Members

- [AcceptEulas](AwsNimbleActions.md#accepteulas)
- [CreateLaunchProfile](AwsNimbleActions.md#createlaunchprofile)
- [CreateStreamingImage](AwsNimbleActions.md#createstreamingimage)
- [CreateStreamingSession](AwsNimbleActions.md#createstreamingsession)
- [CreateStreamingSessionStream](AwsNimbleActions.md#createstreamingsessionstream)
- [CreateStudio](AwsNimbleActions.md#createstudio)
- [CreateStudioComponent](AwsNimbleActions.md#createstudiocomponent)
- [DeleteLaunchProfile](AwsNimbleActions.md#deletelaunchprofile)
- [DeleteLaunchProfileMember](AwsNimbleActions.md#deletelaunchprofilemember)
- [DeleteStreamingImage](AwsNimbleActions.md#deletestreamingimage)
- [DeleteStreamingSession](AwsNimbleActions.md#deletestreamingsession)
- [DeleteStudio](AwsNimbleActions.md#deletestudio)
- [DeleteStudioComponent](AwsNimbleActions.md#deletestudiocomponent)
- [DeleteStudioMember](AwsNimbleActions.md#deletestudiomember)
- [GetEula](AwsNimbleActions.md#geteula)
- [GetFeatureMap](AwsNimbleActions.md#getfeaturemap)
- [GetLaunchProfile](AwsNimbleActions.md#getlaunchprofile)
- [GetLaunchProfileDetails](AwsNimbleActions.md#getlaunchprofiledetails)
- [GetLaunchProfileInitialization](AwsNimbleActions.md#getlaunchprofileinitialization)
- [GetLaunchProfileMember](AwsNimbleActions.md#getlaunchprofilemember)
- [GetStreamingImage](AwsNimbleActions.md#getstreamingimage)
- [GetStreamingSession](AwsNimbleActions.md#getstreamingsession)
- [GetStreamingSessionBackup](AwsNimbleActions.md#getstreamingsessionbackup)
- [GetStreamingSessionStream](AwsNimbleActions.md#getstreamingsessionstream)
- [GetStudio](AwsNimbleActions.md#getstudio)
- [GetStudioComponent](AwsNimbleActions.md#getstudiocomponent)
- [GetStudioMember](AwsNimbleActions.md#getstudiomember)
- [ListEulaAcceptances](AwsNimbleActions.md#listeulaacceptances)
- [ListEulas](AwsNimbleActions.md#listeulas)
- [ListLaunchProfileMembers](AwsNimbleActions.md#listlaunchprofilemembers)
- [ListLaunchProfiles](AwsNimbleActions.md#listlaunchprofiles)
- [ListStreamingImages](AwsNimbleActions.md#liststreamingimages)
- [ListStreamingSessionBackups](AwsNimbleActions.md#liststreamingsessionbackups)
- [ListStreamingSessions](AwsNimbleActions.md#liststreamingsessions)
- [ListStudioComponents](AwsNimbleActions.md#liststudiocomponents)
- [ListStudioMembers](AwsNimbleActions.md#liststudiomembers)
- [ListStudios](AwsNimbleActions.md#liststudios)
- [ListTagsForResource](AwsNimbleActions.md#listtagsforresource)
- [PutLaunchProfileMembers](AwsNimbleActions.md#putlaunchprofilemembers)
- [PutStudioLogEvents](AwsNimbleActions.md#putstudiologevents)
- [PutStudioMembers](AwsNimbleActions.md#putstudiomembers)
- [StartStreamingSession](AwsNimbleActions.md#startstreamingsession)
- [StartStudioSSOConfigurationRepair](AwsNimbleActions.md#startstudiossoconfigurationrepair)
- [StopStreamingSession](AwsNimbleActions.md#stopstreamingsession)
- [TagResource](AwsNimbleActions.md#tagresource)
- [UntagResource](AwsNimbleActions.md#untagresource)
- [UpdateLaunchProfile](AwsNimbleActions.md#updatelaunchprofile)
- [UpdateLaunchProfileMember](AwsNimbleActions.md#updatelaunchprofilemember)
- [UpdateStreamingImage](AwsNimbleActions.md#updatestreamingimage)
- [UpdateStudio](AwsNimbleActions.md#updatestudio)
- [UpdateStudioComponent](AwsNimbleActions.md#updatestudiocomponent)

## Enumeration Members

### AcceptEulas

• **AcceptEulas** = ``"nimble:AcceptEulas"``

Grants permission to accept EULAs

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_AcceptEulas.html

#### Defined in

actions/nimble.ts:17

___

### CreateLaunchProfile

• **CreateLaunchProfile** = ``"nimble:CreateLaunchProfile"``

Grants permission to create a launch profile

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateLaunchProfile.html

#### Defined in

actions/nimble.ts:23

___

### CreateStreamingImage

• **CreateStreamingImage** = ``"nimble:CreateStreamingImage"``

Grants permission to create a streaming image

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStreamingImage.html

#### Defined in

actions/nimble.ts:29

___

### CreateStreamingSession

• **CreateStreamingSession** = ``"nimble:CreateStreamingSession"``

Grants permission to create a streaming session

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStreamingSession.html

#### Defined in

actions/nimble.ts:35

___

### CreateStreamingSessionStream

• **CreateStreamingSessionStream** = ``"nimble:CreateStreamingSessionStream"``

Grants permission to create a StreamingSessionStream

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStreamingSessionStream.html

#### Defined in

actions/nimble.ts:41

___

### CreateStudio

• **CreateStudio** = ``"nimble:CreateStudio"``

Grants permission to create a studio

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStudio.html

#### Defined in

actions/nimble.ts:47

___

### CreateStudioComponent

• **CreateStudioComponent** = ``"nimble:CreateStudioComponent"``

Grants permission to create a studio component. A studio component designates a
network resource to which a launch profile will provide access

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStudioComponent.html

#### Defined in

actions/nimble.ts:54

___

### DeleteLaunchProfile

• **DeleteLaunchProfile** = ``"nimble:DeleteLaunchProfile"``

Grants permission to delete a launch profile

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteLaunchProfile.html

#### Defined in

actions/nimble.ts:60

___

### DeleteLaunchProfileMember

• **DeleteLaunchProfileMember** = ``"nimble:DeleteLaunchProfileMember"``

Grants permission to delete a launch profile member

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteLaunchProfileMember.html

#### Defined in

actions/nimble.ts:66

___

### DeleteStreamingImage

• **DeleteStreamingImage** = ``"nimble:DeleteStreamingImage"``

Grants permission to delete a streaming image

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStreamingImage.html

#### Defined in

actions/nimble.ts:72

___

### DeleteStreamingSession

• **DeleteStreamingSession** = ``"nimble:DeleteStreamingSession"``

Grants permission to delete a streaming session

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStreamingSession.html

#### Defined in

actions/nimble.ts:78

___

### DeleteStudio

• **DeleteStudio** = ``"nimble:DeleteStudio"``

Grants permission to delete a studio

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStudio.html

#### Defined in

actions/nimble.ts:84

___

### DeleteStudioComponent

• **DeleteStudioComponent** = ``"nimble:DeleteStudioComponent"``

Grants permission to delete a studio component

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStudioComponent.html

#### Defined in

actions/nimble.ts:90

___

### DeleteStudioMember

• **DeleteStudioMember** = ``"nimble:DeleteStudioMember"``

Grants permission to delete a studio member

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStudioMember.html

#### Defined in

actions/nimble.ts:96

___

### GetEula

• **GetEula** = ``"nimble:GetEula"``

Grants permission to get a EULA

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetEula.html

#### Defined in

actions/nimble.ts:102

___

### GetFeatureMap

• **GetFeatureMap** = ``"nimble:GetFeatureMap"``

Grants permission to allow Nimble Studio portal to show the appropriate feature
s for this account

See https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html

#### Defined in

actions/nimble.ts:109

___

### GetLaunchProfile

• **GetLaunchProfile** = ``"nimble:GetLaunchProfile"``

Grants permission to get a launch profile

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfile.html

#### Defined in

actions/nimble.ts:115

___

### GetLaunchProfileDetails

• **GetLaunchProfileDetails** = ``"nimble:GetLaunchProfileDetails"``

Grants permission to get a launch profile's details, which includes the summary
of studio components and streaming images used by the launch profile

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfileDetails.html

#### Defined in

actions/nimble.ts:122

___

### GetLaunchProfileInitialization

• **GetLaunchProfileInitialization** = ``"nimble:GetLaunchProfileInitialization"``

Grants permission to get a launch profile initialization. A launch profile init
ialization is a dereferenced version of a launch profile, including attached st
udio component connection information

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfileInitialization.html

#### Defined in

actions/nimble.ts:130

___

### GetLaunchProfileMember

• **GetLaunchProfileMember** = ``"nimble:GetLaunchProfileMember"``

Grants permission to get a launch profile member

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfileMember.html

#### Defined in

actions/nimble.ts:136

___

### GetStreamingImage

• **GetStreamingImage** = ``"nimble:GetStreamingImage"``

Grants permission to get a streaming image

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStreamingImage.html

#### Defined in

actions/nimble.ts:142

___

### GetStreamingSession

• **GetStreamingSession** = ``"nimble:GetStreamingSession"``

Grants permission to get a streaming session

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStreamingSession.html

#### Defined in

actions/nimble.ts:148

___

### GetStreamingSessionBackup

• **GetStreamingSessionBackup** = ``"nimble:GetStreamingSessionBackup"``

Grants permission to get a streaming session backup

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStreamingSessionBackup.html

#### Defined in

actions/nimble.ts:154

___

### GetStreamingSessionStream

• **GetStreamingSessionStream** = ``"nimble:GetStreamingSessionStream"``

Grants permission to get a streaming session stream

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStreamingSessionStream.html

#### Defined in

actions/nimble.ts:160

___

### GetStudio

• **GetStudio** = ``"nimble:GetStudio"``

Grants permission to get a studio

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStudio.html

#### Defined in

actions/nimble.ts:166

___

### GetStudioComponent

• **GetStudioComponent** = ``"nimble:GetStudioComponent"``

Grants permission to get a studio component

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStudioComponent.html

#### Defined in

actions/nimble.ts:172

___

### GetStudioMember

• **GetStudioMember** = ``"nimble:GetStudioMember"``

Grants permission to get a studio member

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStudioMember.html

#### Defined in

actions/nimble.ts:178

___

### ListEulaAcceptances

• **ListEulaAcceptances** = ``"nimble:ListEulaAcceptances"``

Grants permission to list EULA acceptances

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListEulaAcceptances.html

#### Defined in

actions/nimble.ts:184

___

### ListEulas

• **ListEulas** = ``"nimble:ListEulas"``

Grants permission to list EULAs

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListEulas.html

#### Defined in

actions/nimble.ts:190

___

### ListLaunchProfileMembers

• **ListLaunchProfileMembers** = ``"nimble:ListLaunchProfileMembers"``

Grants permission to list launch profile members

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListLaunchProfileMembers.html

#### Defined in

actions/nimble.ts:196

___

### ListLaunchProfiles

• **ListLaunchProfiles** = ``"nimble:ListLaunchProfiles"``

Grants permission to list launch profiles

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListLaunchProfiles.html

#### Defined in

actions/nimble.ts:202

___

### ListStreamingImages

• **ListStreamingImages** = ``"nimble:ListStreamingImages"``

Grants permission to list streaming images

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStreamingImages.html

#### Defined in

actions/nimble.ts:208

___

### ListStreamingSessionBackups

• **ListStreamingSessionBackups** = ``"nimble:ListStreamingSessionBackups"``

Grants permission to list streaming session backups

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStreamingSessionBackups.html

#### Defined in

actions/nimble.ts:214

___

### ListStreamingSessions

• **ListStreamingSessions** = ``"nimble:ListStreamingSessions"``

Grants permission to list streaming sessions

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStreamingSessions.html

#### Defined in

actions/nimble.ts:220

___

### ListStudioComponents

• **ListStudioComponents** = ``"nimble:ListStudioComponents"``

Grants permission to list studio components

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStudioComponents.html

#### Defined in

actions/nimble.ts:226

___

### ListStudioMembers

• **ListStudioMembers** = ``"nimble:ListStudioMembers"``

Grants permission to list studio members

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStudioMembers.html

#### Defined in

actions/nimble.ts:232

___

### ListStudios

• **ListStudios** = ``"nimble:ListStudios"``

Grants permission to list all studios

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStudios.html

#### Defined in

actions/nimble.ts:238

___

### ListTagsForResource

• **ListTagsForResource** = ``"nimble:ListTagsForResource"``

Grants permission to list all tags on a Nimble Studio resource

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/nimble.ts:244

___

### PutLaunchProfileMembers

• **PutLaunchProfileMembers** = ``"nimble:PutLaunchProfileMembers"``

Grants permission to add/update launch profile members

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_PutLaunchProfileMembers.html

#### Defined in

actions/nimble.ts:250

___

### PutStudioLogEvents

• **PutStudioLogEvents** = ``"nimble:PutStudioLogEvents"``

Grants permission to report metrics and logs for the Nimble Studio portal to mo
nitor application health

See https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html

#### Defined in

actions/nimble.ts:257

___

### PutStudioMembers

• **PutStudioMembers** = ``"nimble:PutStudioMembers"``

Grants permission to add/update studio members

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_PutStudioMembers.html

#### Defined in

actions/nimble.ts:263

___

### StartStreamingSession

• **StartStreamingSession** = ``"nimble:StartStreamingSession"``

Grants permission to start a streaming session

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StartStreamingSession.html

#### Defined in

actions/nimble.ts:269

___

### StartStudioSSOConfigurationRepair

• **StartStudioSSOConfigurationRepair** = ``"nimble:StartStudioSSOConfigurationRepair"``

Grants permission to repair the studio's AWS IAM Identity Center configuration

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StartStudioSSOConfigurationRepair.html

#### Defined in

actions/nimble.ts:275

___

### StopStreamingSession

• **StopStreamingSession** = ``"nimble:StopStreamingSession"``

Grants permission to stop a streaming session

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StopStreamingSession.html

#### Defined in

actions/nimble.ts:281

___

### TagResource

• **TagResource** = ``"nimble:TagResource"``

Grants permission to add or overwrite one or more tags for the specified Nimble
Studio resource

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_TagResource.html

#### Defined in

actions/nimble.ts:288

___

### UntagResource

• **UntagResource** = ``"nimble:UntagResource"``

Grants permission to disassociate one or more tags from the specified Nimble St
udio resource

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UntagResource.html

#### Defined in

actions/nimble.ts:295

___

### UpdateLaunchProfile

• **UpdateLaunchProfile** = ``"nimble:UpdateLaunchProfile"``

Grants permission to update a launch profile

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateLaunchProfile.html

#### Defined in

actions/nimble.ts:301

___

### UpdateLaunchProfileMember

• **UpdateLaunchProfileMember** = ``"nimble:UpdateLaunchProfileMember"``

Grants permission to update a launch profile member

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateLaunchProfileMember.html

#### Defined in

actions/nimble.ts:307

___

### UpdateStreamingImage

• **UpdateStreamingImage** = ``"nimble:UpdateStreamingImage"``

Grants permission to update a streaming image

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateStreamingImage.html

#### Defined in

actions/nimble.ts:313

___

### UpdateStudio

• **UpdateStudio** = ``"nimble:UpdateStudio"``

Grants permission to update a studio

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateStudio.html

#### Defined in

actions/nimble.ts:319

___

### UpdateStudioComponent

• **UpdateStudioComponent** = ``"nimble:UpdateStudioComponent"``

Grants permission to update a studio component

See https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateStudioComponent.html

#### Defined in

actions/nimble.ts:325
