[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsChimeActions

# Enumeration: AwsChimeActions

All IAM policy actions for Amazon Chime (CHIME)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonchime.html

2024-02-12T09:56:17.649Z

## Table of contents

### Enumeration Members

- [AcceptDelegate](AwsChimeActions.md#acceptdelegate)
- [ActivateUsers](AwsChimeActions.md#activateusers)
- [AddDomain](AwsChimeActions.md#adddomain)
- [AddOrUpdateGroups](AwsChimeActions.md#addorupdategroups)
- [AssociateChannelFlow](AwsChimeActions.md#associatechannelflow)
- [AssociatePhoneNumberWithUser](AwsChimeActions.md#associatephonenumberwithuser)
- [AssociatePhoneNumbersWithVoiceConnector](AwsChimeActions.md#associatephonenumberswithvoiceconnector)
- [AssociatePhoneNumbersWithVoiceConnectorGroup](AwsChimeActions.md#associatephonenumberswithvoiceconnectorgroup)
- [AssociateSigninDelegateGroupsWithAccount](AwsChimeActions.md#associatesignindelegategroupswithaccount)
- [AuthorizeDirectory](AwsChimeActions.md#authorizedirectory)
- [BatchCreateAttendee](AwsChimeActions.md#batchcreateattendee)
- [BatchCreateChannelMembership](AwsChimeActions.md#batchcreatechannelmembership)
- [BatchCreateRoomMembership](AwsChimeActions.md#batchcreateroommembership)
- [BatchDeletePhoneNumber](AwsChimeActions.md#batchdeletephonenumber)
- [BatchSuspendUser](AwsChimeActions.md#batchsuspenduser)
- [BatchUnsuspendUser](AwsChimeActions.md#batchunsuspenduser)
- [BatchUpdateAttendeeCapabilitiesExcept](AwsChimeActions.md#batchupdateattendeecapabilitiesexcept)
- [BatchUpdatePhoneNumber](AwsChimeActions.md#batchupdatephonenumber)
- [BatchUpdateUser](AwsChimeActions.md#batchupdateuser)
- [ChannelFlowCallback](AwsChimeActions.md#channelflowcallback)
- [Connect](AwsChimeActions.md#connect)
- [ConnectDirectory](AwsChimeActions.md#connectdirectory)
- [CreateAccount](AwsChimeActions.md#createaccount)
- [CreateApiKey](AwsChimeActions.md#createapikey)
- [CreateAppInstance](AwsChimeActions.md#createappinstance)
- [CreateAppInstanceAdmin](AwsChimeActions.md#createappinstanceadmin)
- [CreateAppInstanceBot](AwsChimeActions.md#createappinstancebot)
- [CreateAppInstanceUser](AwsChimeActions.md#createappinstanceuser)
- [CreateAttendee](AwsChimeActions.md#createattendee)
- [CreateBot](AwsChimeActions.md#createbot)
- [CreateCDRBucket](AwsChimeActions.md#createcdrbucket)
- [CreateChannel](AwsChimeActions.md#createchannel)
- [CreateChannelBan](AwsChimeActions.md#createchannelban)
- [CreateChannelFlow](AwsChimeActions.md#createchannelflow)
- [CreateChannelMembership](AwsChimeActions.md#createchannelmembership)
- [CreateChannelModerator](AwsChimeActions.md#createchannelmoderator)
- [CreateMediaCapturePipeline](AwsChimeActions.md#createmediacapturepipeline)
- [CreateMediaConcatenationPipeline](AwsChimeActions.md#createmediaconcatenationpipeline)
- [CreateMediaInsightsPipeline](AwsChimeActions.md#createmediainsightspipeline)
- [CreateMediaInsightsPipelineConfiguration](AwsChimeActions.md#createmediainsightspipelineconfiguration)
- [CreateMediaLiveConnectorPipeline](AwsChimeActions.md#createmedialiveconnectorpipeline)
- [CreateMediaPipelineKinesisVideoStreamPool](AwsChimeActions.md#createmediapipelinekinesisvideostreampool)
- [CreateMediaStreamPipeline](AwsChimeActions.md#createmediastreampipeline)
- [CreateMeeting](AwsChimeActions.md#createmeeting)
- [CreateMeetingDialOut](AwsChimeActions.md#createmeetingdialout)
- [CreateMeetingWithAttendees](AwsChimeActions.md#createmeetingwithattendees)
- [CreatePhoneNumberOrder](AwsChimeActions.md#createphonenumberorder)
- [CreateProxySession](AwsChimeActions.md#createproxysession)
- [CreateRoom](AwsChimeActions.md#createroom)
- [CreateRoomMembership](AwsChimeActions.md#createroommembership)
- [CreateSipMediaApplication](AwsChimeActions.md#createsipmediaapplication)
- [CreateSipMediaApplicationCall](AwsChimeActions.md#createsipmediaapplicationcall)
- [CreateSipRule](AwsChimeActions.md#createsiprule)
- [CreateUser](AwsChimeActions.md#createuser)
- [CreateVoiceConnector](AwsChimeActions.md#createvoiceconnector)
- [CreateVoiceConnectorGroup](AwsChimeActions.md#createvoiceconnectorgroup)
- [CreateVoiceProfile](AwsChimeActions.md#createvoiceprofile)
- [CreateVoiceProfileDomain](AwsChimeActions.md#createvoiceprofiledomain)
- [DeleteAccount](AwsChimeActions.md#deleteaccount)
- [DeleteAccountOpenIdConfig](AwsChimeActions.md#deleteaccountopenidconfig)
- [DeleteApiKey](AwsChimeActions.md#deleteapikey)
- [DeleteAppInstance](AwsChimeActions.md#deleteappinstance)
- [DeleteAppInstanceAdmin](AwsChimeActions.md#deleteappinstanceadmin)
- [DeleteAppInstanceBot](AwsChimeActions.md#deleteappinstancebot)
- [DeleteAppInstanceStreamingConfigurations](AwsChimeActions.md#deleteappinstancestreamingconfigurations)
- [DeleteAppInstanceUser](AwsChimeActions.md#deleteappinstanceuser)
- [DeleteAttendee](AwsChimeActions.md#deleteattendee)
- [DeleteCDRBucket](AwsChimeActions.md#deletecdrbucket)
- [DeleteChannel](AwsChimeActions.md#deletechannel)
- [DeleteChannelBan](AwsChimeActions.md#deletechannelban)
- [DeleteChannelFlow](AwsChimeActions.md#deletechannelflow)
- [DeleteChannelMembership](AwsChimeActions.md#deletechannelmembership)
- [DeleteChannelMessage](AwsChimeActions.md#deletechannelmessage)
- [DeleteChannelModerator](AwsChimeActions.md#deletechannelmoderator)
- [DeleteDelegate](AwsChimeActions.md#deletedelegate)
- [DeleteDomain](AwsChimeActions.md#deletedomain)
- [DeleteEventsConfiguration](AwsChimeActions.md#deleteeventsconfiguration)
- [DeleteGroups](AwsChimeActions.md#deletegroups)
- [DeleteMediaCapturePipeline](AwsChimeActions.md#deletemediacapturepipeline)
- [DeleteMediaInsightsPipelineConfiguration](AwsChimeActions.md#deletemediainsightspipelineconfiguration)
- [DeleteMediaPipeline](AwsChimeActions.md#deletemediapipeline)
- [DeleteMediaPipelineKinesisVideoStreamPool](AwsChimeActions.md#deletemediapipelinekinesisvideostreampool)
- [DeleteMeeting](AwsChimeActions.md#deletemeeting)
- [DeleteMessagingStreamingConfigurations](AwsChimeActions.md#deletemessagingstreamingconfigurations)
- [DeletePhoneNumber](AwsChimeActions.md#deletephonenumber)
- [DeleteProxySession](AwsChimeActions.md#deleteproxysession)
- [DeleteRoom](AwsChimeActions.md#deleteroom)
- [DeleteRoomMembership](AwsChimeActions.md#deleteroommembership)
- [DeleteSipMediaApplication](AwsChimeActions.md#deletesipmediaapplication)
- [DeleteSipRule](AwsChimeActions.md#deletesiprule)
- [DeleteVoiceConnector](AwsChimeActions.md#deletevoiceconnector)
- [DeleteVoiceConnectorEmergencyCallingConfiguration](AwsChimeActions.md#deletevoiceconnectoremergencycallingconfiguration)
- [DeleteVoiceConnectorGroup](AwsChimeActions.md#deletevoiceconnectorgroup)
- [DeleteVoiceConnectorOrigination](AwsChimeActions.md#deletevoiceconnectororigination)
- [DeleteVoiceConnectorProxy](AwsChimeActions.md#deletevoiceconnectorproxy)
- [DeleteVoiceConnectorStreamingConfiguration](AwsChimeActions.md#deletevoiceconnectorstreamingconfiguration)
- [DeleteVoiceConnectorTermination](AwsChimeActions.md#deletevoiceconnectortermination)
- [DeleteVoiceConnectorTerminationCredentials](AwsChimeActions.md#deletevoiceconnectorterminationcredentials)
- [DeleteVoiceProfile](AwsChimeActions.md#deletevoiceprofile)
- [DeleteVoiceProfileDomain](AwsChimeActions.md#deletevoiceprofiledomain)
- [DeregisterAppInstanceUserEndpoint](AwsChimeActions.md#deregisterappinstanceuserendpoint)
- [DescribeAppInstance](AwsChimeActions.md#describeappinstance)
- [DescribeAppInstanceAdmin](AwsChimeActions.md#describeappinstanceadmin)
- [DescribeAppInstanceBot](AwsChimeActions.md#describeappinstancebot)
- [DescribeAppInstanceUser](AwsChimeActions.md#describeappinstanceuser)
- [DescribeAppInstanceUserEndpoint](AwsChimeActions.md#describeappinstanceuserendpoint)
- [DescribeChannel](AwsChimeActions.md#describechannel)
- [DescribeChannelBan](AwsChimeActions.md#describechannelban)
- [DescribeChannelFlow](AwsChimeActions.md#describechannelflow)
- [DescribeChannelMembership](AwsChimeActions.md#describechannelmembership)
- [DescribeChannelMembershipForAppInstanceUser](AwsChimeActions.md#describechannelmembershipforappinstanceuser)
- [DescribeChannelModeratedByAppInstanceUser](AwsChimeActions.md#describechannelmoderatedbyappinstanceuser)
- [DescribeChannelModerator](AwsChimeActions.md#describechannelmoderator)
- [DisassociateChannelFlow](AwsChimeActions.md#disassociatechannelflow)
- [DisassociatePhoneNumberFromUser](AwsChimeActions.md#disassociatephonenumberfromuser)
- [DisassociatePhoneNumbersFromVoiceConnector](AwsChimeActions.md#disassociatephonenumbersfromvoiceconnector)
- [DisassociatePhoneNumbersFromVoiceConnectorGroup](AwsChimeActions.md#disassociatephonenumbersfromvoiceconnectorgroup)
- [DisassociateSigninDelegateGroupsFromAccount](AwsChimeActions.md#disassociatesignindelegategroupsfromaccount)
- [DisconnectDirectory](AwsChimeActions.md#disconnectdirectory)
- [GetAccount](AwsChimeActions.md#getaccount)
- [GetAccountResource](AwsChimeActions.md#getaccountresource)
- [GetAccountSettings](AwsChimeActions.md#getaccountsettings)
- [GetAccountWithOpenIdConfig](AwsChimeActions.md#getaccountwithopenidconfig)
- [GetAppInstanceRetentionSettings](AwsChimeActions.md#getappinstanceretentionsettings)
- [GetAppInstanceStreamingConfigurations](AwsChimeActions.md#getappinstancestreamingconfigurations)
- [GetAttendee](AwsChimeActions.md#getattendee)
- [GetBot](AwsChimeActions.md#getbot)
- [GetCDRBucket](AwsChimeActions.md#getcdrbucket)
- [GetChannelMembershipPreferences](AwsChimeActions.md#getchannelmembershippreferences)
- [GetChannelMessage](AwsChimeActions.md#getchannelmessage)
- [GetChannelMessageStatus](AwsChimeActions.md#getchannelmessagestatus)
- [GetDomain](AwsChimeActions.md#getdomain)
- [GetEventsConfiguration](AwsChimeActions.md#geteventsconfiguration)
- [GetGlobalSettings](AwsChimeActions.md#getglobalsettings)
- [GetMediaCapturePipeline](AwsChimeActions.md#getmediacapturepipeline)
- [GetMediaInsightsPipelineConfiguration](AwsChimeActions.md#getmediainsightspipelineconfiguration)
- [GetMediaPipeline](AwsChimeActions.md#getmediapipeline)
- [GetMediaPipelineKinesisVideoStreamPool](AwsChimeActions.md#getmediapipelinekinesisvideostreampool)
- [GetMeeting](AwsChimeActions.md#getmeeting)
- [GetMeetingDetail](AwsChimeActions.md#getmeetingdetail)
- [GetMessagingSessionEndpoint](AwsChimeActions.md#getmessagingsessionendpoint)
- [GetMessagingStreamingConfigurations](AwsChimeActions.md#getmessagingstreamingconfigurations)
- [GetPhoneNumber](AwsChimeActions.md#getphonenumber)
- [GetPhoneNumberOrder](AwsChimeActions.md#getphonenumberorder)
- [GetPhoneNumberSettings](AwsChimeActions.md#getphonenumbersettings)
- [GetProxySession](AwsChimeActions.md#getproxysession)
- [GetRetentionSettings](AwsChimeActions.md#getretentionsettings)
- [GetRoom](AwsChimeActions.md#getroom)
- [GetSipMediaApplication](AwsChimeActions.md#getsipmediaapplication)
- [GetSipMediaApplicationAlexaSkillConfiguration](AwsChimeActions.md#getsipmediaapplicationalexaskillconfiguration)
- [GetSipMediaApplicationLoggingConfiguration](AwsChimeActions.md#getsipmediaapplicationloggingconfiguration)
- [GetSipRule](AwsChimeActions.md#getsiprule)
- [GetSpeakerSearchTask](AwsChimeActions.md#getspeakersearchtask)
- [GetTelephonyLimits](AwsChimeActions.md#gettelephonylimits)
- [GetUser](AwsChimeActions.md#getuser)
- [GetUserActivityReportData](AwsChimeActions.md#getuseractivityreportdata)
- [GetUserByEmail](AwsChimeActions.md#getuserbyemail)
- [GetUserSettings](AwsChimeActions.md#getusersettings)
- [GetVoiceConnector](AwsChimeActions.md#getvoiceconnector)
- [GetVoiceConnectorEmergencyCallingConfiguration](AwsChimeActions.md#getvoiceconnectoremergencycallingconfiguration)
- [GetVoiceConnectorGroup](AwsChimeActions.md#getvoiceconnectorgroup)
- [GetVoiceConnectorLoggingConfiguration](AwsChimeActions.md#getvoiceconnectorloggingconfiguration)
- [GetVoiceConnectorOrigination](AwsChimeActions.md#getvoiceconnectororigination)
- [GetVoiceConnectorProxy](AwsChimeActions.md#getvoiceconnectorproxy)
- [GetVoiceConnectorStreamingConfiguration](AwsChimeActions.md#getvoiceconnectorstreamingconfiguration)
- [GetVoiceConnectorTermination](AwsChimeActions.md#getvoiceconnectortermination)
- [GetVoiceConnectorTerminationHealth](AwsChimeActions.md#getvoiceconnectorterminationhealth)
- [GetVoiceProfile](AwsChimeActions.md#getvoiceprofile)
- [GetVoiceProfileDomain](AwsChimeActions.md#getvoiceprofiledomain)
- [GetVoiceToneAnalysisTask](AwsChimeActions.md#getvoicetoneanalysistask)
- [InviteDelegate](AwsChimeActions.md#invitedelegate)
- [InviteUsers](AwsChimeActions.md#inviteusers)
- [InviteUsersFromProvider](AwsChimeActions.md#inviteusersfromprovider)
- [ListAccountUsageReportData](AwsChimeActions.md#listaccountusagereportdata)
- [ListAccounts](AwsChimeActions.md#listaccounts)
- [ListApiKeys](AwsChimeActions.md#listapikeys)
- [ListAppInstanceAdmins](AwsChimeActions.md#listappinstanceadmins)
- [ListAppInstanceBots](AwsChimeActions.md#listappinstancebots)
- [ListAppInstanceUserEndpoints](AwsChimeActions.md#listappinstanceuserendpoints)
- [ListAppInstanceUsers](AwsChimeActions.md#listappinstanceusers)
- [ListAppInstances](AwsChimeActions.md#listappinstances)
- [ListAttendeeTags](AwsChimeActions.md#listattendeetags)
- [ListAttendees](AwsChimeActions.md#listattendees)
- [ListAvailableVoiceConnectorRegions](AwsChimeActions.md#listavailablevoiceconnectorregions)
- [ListBots](AwsChimeActions.md#listbots)
- [ListCDRBucket](AwsChimeActions.md#listcdrbucket)
- [ListCallingRegions](AwsChimeActions.md#listcallingregions)
- [ListChannelBans](AwsChimeActions.md#listchannelbans)
- [ListChannelFlows](AwsChimeActions.md#listchannelflows)
- [ListChannelMemberships](AwsChimeActions.md#listchannelmemberships)
- [ListChannelMembershipsForAppInstanceUser](AwsChimeActions.md#listchannelmembershipsforappinstanceuser)
- [ListChannelMessages](AwsChimeActions.md#listchannelmessages)
- [ListChannelModerators](AwsChimeActions.md#listchannelmoderators)
- [ListChannels](AwsChimeActions.md#listchannels)
- [ListChannelsAssociatedWithChannelFlow](AwsChimeActions.md#listchannelsassociatedwithchannelflow)
- [ListChannelsModeratedByAppInstanceUser](AwsChimeActions.md#listchannelsmoderatedbyappinstanceuser)
- [ListDelegates](AwsChimeActions.md#listdelegates)
- [ListDirectories](AwsChimeActions.md#listdirectories)
- [ListDomains](AwsChimeActions.md#listdomains)
- [ListGroups](AwsChimeActions.md#listgroups)
- [ListMediaCapturePipelines](AwsChimeActions.md#listmediacapturepipelines)
- [ListMediaInsightsPipelineConfigurations](AwsChimeActions.md#listmediainsightspipelineconfigurations)
- [ListMediaPipelineKinesisVideoStreamPools](AwsChimeActions.md#listmediapipelinekinesisvideostreampools)
- [ListMediaPipelines](AwsChimeActions.md#listmediapipelines)
- [ListMeetingEvents](AwsChimeActions.md#listmeetingevents)
- [ListMeetingTags](AwsChimeActions.md#listmeetingtags)
- [ListMeetings](AwsChimeActions.md#listmeetings)
- [ListMeetingsReportData](AwsChimeActions.md#listmeetingsreportdata)
- [ListPhoneNumberOrders](AwsChimeActions.md#listphonenumberorders)
- [ListPhoneNumbers](AwsChimeActions.md#listphonenumbers)
- [ListProxySessions](AwsChimeActions.md#listproxysessions)
- [ListRoomMemberships](AwsChimeActions.md#listroommemberships)
- [ListRooms](AwsChimeActions.md#listrooms)
- [ListSipMediaApplications](AwsChimeActions.md#listsipmediaapplications)
- [ListSipRules](AwsChimeActions.md#listsiprules)
- [ListSubChannels](AwsChimeActions.md#listsubchannels)
- [ListSupportedPhoneNumberCountries](AwsChimeActions.md#listsupportedphonenumbercountries)
- [ListTagsForResource](AwsChimeActions.md#listtagsforresource)
- [ListUsers](AwsChimeActions.md#listusers)
- [ListVoiceConnectorGroups](AwsChimeActions.md#listvoiceconnectorgroups)
- [ListVoiceConnectorTerminationCredentials](AwsChimeActions.md#listvoiceconnectorterminationcredentials)
- [ListVoiceConnectors](AwsChimeActions.md#listvoiceconnectors)
- [ListVoiceProfileDomains](AwsChimeActions.md#listvoiceprofiledomains)
- [ListVoiceProfiles](AwsChimeActions.md#listvoiceprofiles)
- [LogoutUser](AwsChimeActions.md#logoutuser)
- [PutAppInstanceRetentionSettings](AwsChimeActions.md#putappinstanceretentionsettings)
- [PutAppInstanceStreamingConfigurations](AwsChimeActions.md#putappinstancestreamingconfigurations)
- [PutAppInstanceUserExpirationSettings](AwsChimeActions.md#putappinstanceuserexpirationsettings)
- [PutChannelExpirationSettings](AwsChimeActions.md#putchannelexpirationsettings)
- [PutChannelMembershipPreferences](AwsChimeActions.md#putchannelmembershippreferences)
- [PutEventsConfiguration](AwsChimeActions.md#puteventsconfiguration)
- [PutMessagingStreamingConfigurations](AwsChimeActions.md#putmessagingstreamingconfigurations)
- [PutRetentionSettings](AwsChimeActions.md#putretentionsettings)
- [PutSipMediaApplicationAlexaSkillConfiguration](AwsChimeActions.md#putsipmediaapplicationalexaskillconfiguration)
- [PutSipMediaApplicationLoggingConfiguration](AwsChimeActions.md#putsipmediaapplicationloggingconfiguration)
- [PutVoiceConnectorEmergencyCallingConfiguration](AwsChimeActions.md#putvoiceconnectoremergencycallingconfiguration)
- [PutVoiceConnectorLoggingConfiguration](AwsChimeActions.md#putvoiceconnectorloggingconfiguration)
- [PutVoiceConnectorOrigination](AwsChimeActions.md#putvoiceconnectororigination)
- [PutVoiceConnectorProxy](AwsChimeActions.md#putvoiceconnectorproxy)
- [PutVoiceConnectorStreamingConfiguration](AwsChimeActions.md#putvoiceconnectorstreamingconfiguration)
- [PutVoiceConnectorTermination](AwsChimeActions.md#putvoiceconnectortermination)
- [PutVoiceConnectorTerminationCredentials](AwsChimeActions.md#putvoiceconnectorterminationcredentials)
- [RedactChannelMessage](AwsChimeActions.md#redactchannelmessage)
- [RedactConversationMessage](AwsChimeActions.md#redactconversationmessage)
- [RedactRoomMessage](AwsChimeActions.md#redactroommessage)
- [RegenerateSecurityToken](AwsChimeActions.md#regeneratesecuritytoken)
- [RegisterAppInstanceUserEndpoint](AwsChimeActions.md#registerappinstanceuserendpoint)
- [RenameAccount](AwsChimeActions.md#renameaccount)
- [RenewDelegate](AwsChimeActions.md#renewdelegate)
- [ResetAccountResource](AwsChimeActions.md#resetaccountresource)
- [ResetPersonalPIN](AwsChimeActions.md#resetpersonalpin)
- [RestorePhoneNumber](AwsChimeActions.md#restorephonenumber)
- [RetrieveDataExports](AwsChimeActions.md#retrievedataexports)
- [SearchAvailablePhoneNumbers](AwsChimeActions.md#searchavailablephonenumbers)
- [SearchChannels](AwsChimeActions.md#searchchannels)
- [SendChannelMessage](AwsChimeActions.md#sendchannelmessage)
- [StartDataExport](AwsChimeActions.md#startdataexport)
- [StartMeetingTranscription](AwsChimeActions.md#startmeetingtranscription)
- [StartSpeakerSearchTask](AwsChimeActions.md#startspeakersearchtask)
- [StartVoiceToneAnalysisTask](AwsChimeActions.md#startvoicetoneanalysistask)
- [StopMeetingTranscription](AwsChimeActions.md#stopmeetingtranscription)
- [StopSpeakerSearchTask](AwsChimeActions.md#stopspeakersearchtask)
- [StopVoiceToneAnalysisTask](AwsChimeActions.md#stopvoicetoneanalysistask)
- [SubmitSupportRequest](AwsChimeActions.md#submitsupportrequest)
- [SuspendUsers](AwsChimeActions.md#suspendusers)
- [TagAttendee](AwsChimeActions.md#tagattendee)
- [TagMeeting](AwsChimeActions.md#tagmeeting)
- [TagResource](AwsChimeActions.md#tagresource)
- [UnauthorizeDirectory](AwsChimeActions.md#unauthorizedirectory)
- [UntagAttendee](AwsChimeActions.md#untagattendee)
- [UntagMeeting](AwsChimeActions.md#untagmeeting)
- [UntagResource](AwsChimeActions.md#untagresource)
- [UpdateAccount](AwsChimeActions.md#updateaccount)
- [UpdateAccountOpenIdConfig](AwsChimeActions.md#updateaccountopenidconfig)
- [UpdateAccountResource](AwsChimeActions.md#updateaccountresource)
- [UpdateAccountSettings](AwsChimeActions.md#updateaccountsettings)
- [UpdateAppInstance](AwsChimeActions.md#updateappinstance)
- [UpdateAppInstanceBot](AwsChimeActions.md#updateappinstancebot)
- [UpdateAppInstanceUser](AwsChimeActions.md#updateappinstanceuser)
- [UpdateAppInstanceUserEndpoint](AwsChimeActions.md#updateappinstanceuserendpoint)
- [UpdateAttendeeCapabilities](AwsChimeActions.md#updateattendeecapabilities)
- [UpdateBot](AwsChimeActions.md#updatebot)
- [UpdateCDRSettings](AwsChimeActions.md#updatecdrsettings)
- [UpdateChannel](AwsChimeActions.md#updatechannel)
- [UpdateChannelFlow](AwsChimeActions.md#updatechannelflow)
- [UpdateChannelMessage](AwsChimeActions.md#updatechannelmessage)
- [UpdateChannelReadMarker](AwsChimeActions.md#updatechannelreadmarker)
- [UpdateGlobalSettings](AwsChimeActions.md#updateglobalsettings)
- [UpdateMediaInsightsPipelineConfiguration](AwsChimeActions.md#updatemediainsightspipelineconfiguration)
- [UpdateMediaInsightsPipelineStatus](AwsChimeActions.md#updatemediainsightspipelinestatus)
- [UpdateMediaPipelineKinesisVideoStreamPool](AwsChimeActions.md#updatemediapipelinekinesisvideostreampool)
- [UpdatePhoneNumber](AwsChimeActions.md#updatephonenumber)
- [UpdatePhoneNumberSettings](AwsChimeActions.md#updatephonenumbersettings)
- [UpdateProxySession](AwsChimeActions.md#updateproxysession)
- [UpdateRoom](AwsChimeActions.md#updateroom)
- [UpdateRoomMembership](AwsChimeActions.md#updateroommembership)
- [UpdateSipMediaApplication](AwsChimeActions.md#updatesipmediaapplication)
- [UpdateSipMediaApplicationCall](AwsChimeActions.md#updatesipmediaapplicationcall)
- [UpdateSipRule](AwsChimeActions.md#updatesiprule)
- [UpdateSupportedLicenses](AwsChimeActions.md#updatesupportedlicenses)
- [UpdateUser](AwsChimeActions.md#updateuser)
- [UpdateUserLicenses](AwsChimeActions.md#updateuserlicenses)
- [UpdateUserSettings](AwsChimeActions.md#updateusersettings)
- [UpdateVoiceConnector](AwsChimeActions.md#updatevoiceconnector)
- [UpdateVoiceConnectorGroup](AwsChimeActions.md#updatevoiceconnectorgroup)
- [UpdateVoiceProfile](AwsChimeActions.md#updatevoiceprofile)
- [UpdateVoiceProfileDomain](AwsChimeActions.md#updatevoiceprofiledomain)
- [ValidateAccountResource](AwsChimeActions.md#validateaccountresource)
- [ValidateE911Address](AwsChimeActions.md#validatee911address)

## Enumeration Members

### AcceptDelegate

• **AcceptDelegate** = ``"chime:AcceptDelegate"``

Grants permission to accept the delegate invitation to share management of an A
mazon Chime account with another AWS Account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:18

___

### ActivateUsers

• **ActivateUsers** = ``"chime:ActivateUsers"``

Grants permission to activate users in an Amazon Chime Enterprise account

See https://docs.aws.amazon.com/chime/latest/ag/manage-access.html

#### Defined in

actions/chime.ts:24

___

### AddDomain

• **AddDomain** = ``"chime:AddDomain"``

Grants permission to add a domain to your Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html

#### Defined in

actions/chime.ts:30

___

### AddOrUpdateGroups

• **AddOrUpdateGroups** = ``"chime:AddOrUpdateGroups"``

Grants permission to add new or update existing Active Directory or Okta user g
roups associated with your Amazon Chime Enterprise account

See https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html

#### Defined in

actions/chime.ts:37

___

### AssociateChannelFlow

• **AssociateChannelFlow** = ``"chime:AssociateChannelFlow"``

Grants permission to associate a flow with a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_AssociateChannelFlow.html

#### Defined in

actions/chime.ts:43

___

### AssociatePhoneNumberWithUser

• **AssociatePhoneNumberWithUser** = ``"chime:AssociatePhoneNumberWithUser"``

Grants permission to associate a phone number with an Amazon Chime user

See https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumberWithUser.html

#### Defined in

actions/chime.ts:49

___

### AssociatePhoneNumbersWithVoiceConnector

• **AssociatePhoneNumbersWithVoiceConnector** = ``"chime:AssociatePhoneNumbersWithVoiceConnector"``

Grants permission to associate multiple phone numbers with an Amazon Chime Voic
e Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumbersWithVoiceConnector.html

#### Defined in

actions/chime.ts:56

___

### AssociatePhoneNumbersWithVoiceConnectorGroup

• **AssociatePhoneNumbersWithVoiceConnectorGroup** = ``"chime:AssociatePhoneNumbersWithVoiceConnectorGroup"``

Grants permission to associate multiple phone numbers with an Amazon Chime Voic
e Connector Group

See https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumbersWithVoiceConnectorGroup.html

#### Defined in

actions/chime.ts:63

___

### AssociateSigninDelegateGroupsWithAccount

• **AssociateSigninDelegateGroupsWithAccount** = ``"chime:AssociateSigninDelegateGroupsWithAccount"``

Grants permission to associate the specified sign-in delegate groups with the s
pecified Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociateSigninDelegateGroupsWithAccount.html

#### Defined in

actions/chime.ts:70

___

### AuthorizeDirectory

• **AuthorizeDirectory** = ``"chime:AuthorizeDirectory"``

Grants permission to authorize an Active Directory for your Amazon Chime Enterp
rise account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:77

___

### BatchCreateAttendee

• **BatchCreateAttendee** = ``"chime:BatchCreateAttendee"``

Grants permission to create new attendees for an active Amazon Chime SDK meetin
g

See https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchCreateAttendee.html

#### Defined in

actions/chime.ts:84

___

### BatchCreateChannelMembership

• **BatchCreateChannelMembership** = ``"chime:BatchCreateChannelMembership"``

Grants permission to add multiple users and bots to a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_BatchCreateChannelMembership.html

#### Defined in

actions/chime.ts:90

___

### BatchCreateRoomMembership

• **BatchCreateRoomMembership** = ``"chime:BatchCreateRoomMembership"``

Grants permission to batch add room members

See https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchCreateRoomMembership.html

#### Defined in

actions/chime.ts:96

___

### BatchDeletePhoneNumber

• **BatchDeletePhoneNumber** = ``"chime:BatchDeletePhoneNumber"``

Grants permission to move up to 50 phone numbers to the deletion queue

See https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchDeletePhoneNumber.html

#### Defined in

actions/chime.ts:102

___

### BatchSuspendUser

• **BatchSuspendUser** = ``"chime:BatchSuspendUser"``

Grants permission to suspend up to 50 users from a Team or EnterpriseLWA Amazon
Chime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchSuspendUser.html

#### Defined in

actions/chime.ts:109

___

### BatchUnsuspendUser

• **BatchUnsuspendUser** = ``"chime:BatchUnsuspendUser"``

Grants permission to remove the suspension from up to 50 previously suspended u
sers for the specified Amazon Chime EnterpriseLWA account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUnsuspendUser.html

#### Defined in

actions/chime.ts:116

___

### BatchUpdateAttendeeCapabilitiesExcept

• **BatchUpdateAttendeeCapabilitiesExcept** = ``"chime:BatchUpdateAttendeeCapabilitiesExcept"``

Grants permission to update AttendeeCapabilities except the capabilities listed
in an ExcludedAttendeeIds table

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_BatchUpdateAttendeeCapabilitiesExcept.html

#### Defined in

actions/chime.ts:123

___

### BatchUpdatePhoneNumber

• **BatchUpdatePhoneNumber** = ``"chime:BatchUpdatePhoneNumber"``

Grants permission to update phone number details within the UpdatePhoneNumberRe
questItem object for up to 50 phone numbers

See https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUpdatePhoneNumber.html

#### Defined in

actions/chime.ts:130

___

### BatchUpdateUser

• **BatchUpdateUser** = ``"chime:BatchUpdateUser"``

Grants permission to update user details within the UpdateUserRequestItem objec
t for up to 20 users for the specified Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUpdateUser.html

#### Defined in

actions/chime.ts:137

___

### ChannelFlowCallback

• **ChannelFlowCallback** = ``"chime:ChannelFlowCallback"``

Grants permission to callback for a message on a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ChannelFlowCallback.html

#### Defined in

actions/chime.ts:143

___

### Connect

• **Connect** = ``"chime:Connect"``

Grants permission to establish a web socket connection for app instance user to
the messaging session endpoint

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_Connect.html

#### Defined in

actions/chime.ts:150

___

### ConnectDirectory

• **ConnectDirectory** = ``"chime:ConnectDirectory"``

Grants permission to connect an Active Directory to your Amazon Chime Enterpris
e account

See https://docs.aws.amazon.com/chime/latest/ag/active_directory.html

#### Defined in

actions/chime.ts:157

___

### CreateAccount

• **CreateAccount** = ``"chime:CreateAccount"``

Grants permission to create an Amazon Chime account under the administrator's A
WS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAccount.html

#### Defined in

actions/chime.ts:164

___

### CreateApiKey

• **CreateApiKey** = ``"chime:CreateApiKey"``

Grants permission to create a new SCIM access key for your Amazon Chime account
and Okta configuration

See https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html

#### Defined in

actions/chime.ts:171

___

### CreateAppInstance

• **CreateAppInstance** = ``"chime:CreateAppInstance"``

Grants permission to create an app instance under the AWS account

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstance.html

#### Defined in

actions/chime.ts:177

___

### CreateAppInstanceAdmin

• **CreateAppInstanceAdmin** = ``"chime:CreateAppInstanceAdmin"``

Grants permission to promote a user or bot to an AppInstanceAdmin

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstanceAdmin.html

#### Defined in

actions/chime.ts:183

___

### CreateAppInstanceBot

• **CreateAppInstanceBot** = ``"chime:CreateAppInstanceBot"``

Grants permission to create a bot under an Amazon Chime AppInstance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstanceBot.html

#### Defined in

actions/chime.ts:189

___

### CreateAppInstanceUser

• **CreateAppInstanceUser** = ``"chime:CreateAppInstanceUser"``

Grants permission to create a user under an Amazon Chime AppInstance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstanceUser.html

#### Defined in

actions/chime.ts:195

___

### CreateAttendee

• **CreateAttendee** = ``"chime:CreateAttendee"``

Grants permission to create a new attendee for an active Amazon Chime SDK meeti
ng

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html

#### Defined in

actions/chime.ts:202

___

### CreateBot

• **CreateBot** = ``"chime:CreateBot"``

Grants permission to create a bot for an Amazon Chime Enterprise account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateBot.html

#### Defined in

actions/chime.ts:208

___

### CreateCDRBucket

• **CreateCDRBucket** = ``"chime:CreateCDRBucket"``

Grants permission to create a new Call Detail Record S3 bucket

See https://docs.aws.amazon.com/chime/latest/ag/manage-access.html

#### Defined in

actions/chime.ts:214

___

### CreateChannel

• **CreateChannel** = ``"chime:CreateChannel"``

Grants permission to create a channel for an app instance under the AWS account

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannel.html

#### Defined in

actions/chime.ts:220

___

### CreateChannelBan

• **CreateChannelBan** = ``"chime:CreateChannelBan"``

Grants permission to ban a user or bot from a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelBan.html

#### Defined in

actions/chime.ts:226

___

### CreateChannelFlow

• **CreateChannelFlow** = ``"chime:CreateChannelFlow"``

Grants permission to create a channel flow for an app instance under the AWS ac
count

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelFlow.html

#### Defined in

actions/chime.ts:233

___

### CreateChannelMembership

• **CreateChannelMembership** = ``"chime:CreateChannelMembership"``

Grants permission to add a user or bot to a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelMembership.html

#### Defined in

actions/chime.ts:239

___

### CreateChannelModerator

• **CreateChannelModerator** = ``"chime:CreateChannelModerator"``

Grants permission to create a channel moderator

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelModerator.html

#### Defined in

actions/chime.ts:245

___

### CreateMediaCapturePipeline

• **CreateMediaCapturePipeline** = ``"chime:CreateMediaCapturePipeline"``

Grants permission to create a media capture pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaCapturePipeline.html

#### Defined in

actions/chime.ts:251

___

### CreateMediaConcatenationPipeline

• **CreateMediaConcatenationPipeline** = ``"chime:CreateMediaConcatenationPipeline"``

Grants permission to create a media concatenation pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaConcatenationPipeline.html

#### Defined in

actions/chime.ts:257

___

### CreateMediaInsightsPipeline

• **CreateMediaInsightsPipeline** = ``"chime:CreateMediaInsightsPipeline"``

Grants permission to create a media insights pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaInsightsPipeline.html

#### Defined in

actions/chime.ts:263

___

### CreateMediaInsightsPipelineConfiguration

• **CreateMediaInsightsPipelineConfiguration** = ``"chime:CreateMediaInsightsPipelineConfiguration"``

Grants permission to create a media insights pipeline configuration

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaInsightsPipelineConfiguration.html

#### Defined in

actions/chime.ts:269

___

### CreateMediaLiveConnectorPipeline

• **CreateMediaLiveConnectorPipeline** = ``"chime:CreateMediaLiveConnectorPipeline"``

Grants permission to create a media live connector pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaLiveConnectorPipeline.html

#### Defined in

actions/chime.ts:275

___

### CreateMediaPipelineKinesisVideoStreamPool

• **CreateMediaPipelineKinesisVideoStreamPool** = ``"chime:CreateMediaPipelineKinesisVideoStreamPool"``

Grants permission to create kinesis video stream pool

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaPipelineKinesisVideoStreamPool.html

#### Defined in

actions/chime.ts:281

___

### CreateMediaStreamPipeline

• **CreateMediaStreamPipeline** = ``"chime:CreateMediaStreamPipeline"``

Grants permission to create a media stream pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaStreamPipeline.html

#### Defined in

actions/chime.ts:287

___

### CreateMeeting

• **CreateMeeting** = ``"chime:CreateMeeting"``

Grants permission to create a new Amazon Chime SDK meeting in the specified med
ia Region, with no initial attendees

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeeting.html

#### Defined in

actions/chime.ts:294

___

### CreateMeetingDialOut

• **CreateMeetingDialOut** = ``"chime:CreateMeetingDialOut"``

Grants permission to call a phone number to join the specified Amazon Chime SDK
meeting

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeetingDialOut.html

#### Defined in

actions/chime.ts:301

___

### CreateMeetingWithAttendees

• **CreateMeetingWithAttendees** = ``"chime:CreateMeetingWithAttendees"``

Grants permission to create a new Amazon Chime SDK meeting in the specified med
ia Region, with a set of attendees

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeetingWithAttendees.html

#### Defined in

actions/chime.ts:308

___

### CreatePhoneNumberOrder

• **CreatePhoneNumberOrder** = ``"chime:CreatePhoneNumberOrder"``

Grants permission to create a phone number order with the Carriers

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreatePhoneNumberOrder.html

#### Defined in

actions/chime.ts:314

___

### CreateProxySession

• **CreateProxySession** = ``"chime:CreateProxySession"``

Grants permission to create a proxy session for the specified Amazon Chime Voic
e Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateProxySession.html

#### Defined in

actions/chime.ts:321

___

### CreateRoom

• **CreateRoom** = ``"chime:CreateRoom"``

Grants permission to create a room

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateRoom.html

#### Defined in

actions/chime.ts:327

___

### CreateRoomMembership

• **CreateRoomMembership** = ``"chime:CreateRoomMembership"``

Grants permission to add a room member

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateRoomMembership.html

#### Defined in

actions/chime.ts:333

___

### CreateSipMediaApplication

• **CreateSipMediaApplication** = ``"chime:CreateSipMediaApplication"``

Grants permission to create an Amazon Chime SIP media application under the adm
inistrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateSipMediaApplication.html

#### Defined in

actions/chime.ts:340

___

### CreateSipMediaApplicationCall

• **CreateSipMediaApplicationCall** = ``"chime:CreateSipMediaApplicationCall"``

Grants permission to create outbound call for Amazon Chime SIP media applicatio
n under the administrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateSipMediaApplicationCall.html

#### Defined in

actions/chime.ts:347

___

### CreateSipRule

• **CreateSipRule** = ``"chime:CreateSipRule"``

Grants permission to create an Amazon Chime SIP rule under the administrator's
AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateSipRule.html

#### Defined in

actions/chime.ts:354

___

### CreateUser

• **CreateUser** = ``"chime:CreateUser"``

Grants permission to create a user under the specified Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateUser.html

#### Defined in

actions/chime.ts:360

___

### CreateVoiceConnector

• **CreateVoiceConnector** = ``"chime:CreateVoiceConnector"``

Grants permission to create a Amazon Chime Voice Connector under the administra
tor's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateVoiceConnector.html

#### Defined in

actions/chime.ts:367

___

### CreateVoiceConnectorGroup

• **CreateVoiceConnectorGroup** = ``"chime:CreateVoiceConnectorGroup"``

Grants permission to create a Amazon Chime Voice Connector Group under the admi
nistrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateVoiceConnectorGroup.html

#### Defined in

actions/chime.ts:374

___

### CreateVoiceProfile

• **CreateVoiceProfile** = ``"chime:CreateVoiceProfile"``

Grants permission to create a voice profile

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceProfile.html

#### Defined in

actions/chime.ts:380

___

### CreateVoiceProfileDomain

• **CreateVoiceProfileDomain** = ``"chime:CreateVoiceProfileDomain"``

Grants permission to create a voice profile domain

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceProfileDomain.html

#### Defined in

actions/chime.ts:386

___

### DeleteAccount

• **DeleteAccount** = ``"chime:DeleteAccount"``

Grants permission to delete the specified Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAccount.html

#### Defined in

actions/chime.ts:392

___

### DeleteAccountOpenIdConfig

• **DeleteAccountOpenIdConfig** = ``"chime:DeleteAccountOpenIdConfig"``

Grants permission to delete the OpenIdConfig attributes from your Amazon Chime
account

See https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html

#### Defined in

actions/chime.ts:399

___

### DeleteApiKey

• **DeleteApiKey** = ``"chime:DeleteApiKey"``

Grants permission to delete the specified SCIM access key associated with your
Amazon Chime account and Okta configuration

See https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html

#### Defined in

actions/chime.ts:406

___

### DeleteAppInstance

• **DeleteAppInstance** = ``"chime:DeleteAppInstance"``

Grants permission to delete an AppInstance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstance.html

#### Defined in

actions/chime.ts:412

___

### DeleteAppInstanceAdmin

• **DeleteAppInstanceAdmin** = ``"chime:DeleteAppInstanceAdmin"``

Grants permission to demote an AppInstanceAdmin to a user or bot

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceAdmin.html

#### Defined in

actions/chime.ts:418

___

### DeleteAppInstanceBot

• **DeleteAppInstanceBot** = ``"chime:DeleteAppInstanceBot"``

Grants permission to delete an AppInstanceBot

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceBot.html

#### Defined in

actions/chime.ts:424

___

### DeleteAppInstanceStreamingConfigurations

• **DeleteAppInstanceStreamingConfigurations** = ``"chime:DeleteAppInstanceStreamingConfigurations"``

Grants permission to disable data streaming for the app instance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_DeleteAppInstanceStreamingConfigurations.html

#### Defined in

actions/chime.ts:430

___

### DeleteAppInstanceUser

• **DeleteAppInstanceUser** = ``"chime:DeleteAppInstanceUser"``

Grants permission to delete an AppInstanceUser

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceUser.html

#### Defined in

actions/chime.ts:436

___

### DeleteAttendee

• **DeleteAttendee** = ``"chime:DeleteAttendee"``

Grants permission to delete the specified attendee from an Amazon Chime SDK mee
ting

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAttendee.html

#### Defined in

actions/chime.ts:443

___

### DeleteCDRBucket

• **DeleteCDRBucket** = ``"chime:DeleteCDRBucket"``

Grants permission to delete a Call Detail Record S3 bucket from your Amazon Chi
me account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:450

___

### DeleteChannel

• **DeleteChannel** = ``"chime:DeleteChannel"``

Grants permission to delete a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannel.html

#### Defined in

actions/chime.ts:456

___

### DeleteChannelBan

• **DeleteChannelBan** = ``"chime:DeleteChannelBan"``

Grants permission to remove a user or bot from a channel's ban list

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelBan.html

#### Defined in

actions/chime.ts:462

___

### DeleteChannelFlow

• **DeleteChannelFlow** = ``"chime:DeleteChannelFlow"``

Grants permission to delete a channel flow

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelFlow.html

#### Defined in

actions/chime.ts:468

___

### DeleteChannelMembership

• **DeleteChannelMembership** = ``"chime:DeleteChannelMembership"``

Grants permission to remove a member from a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelMembership.html

#### Defined in

actions/chime.ts:474

___

### DeleteChannelMessage

• **DeleteChannelMessage** = ``"chime:DeleteChannelMessage"``

Grants permission to delete a channel message

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelMessage.html

#### Defined in

actions/chime.ts:480

___

### DeleteChannelModerator

• **DeleteChannelModerator** = ``"chime:DeleteChannelModerator"``

Grants permission to delete a channel moderator

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelModerator.html

#### Defined in

actions/chime.ts:486

___

### DeleteDelegate

• **DeleteDelegate** = ``"chime:DeleteDelegate"``

Grants permission to delete delegated AWS account management from your Amazon C
hime account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:493

___

### DeleteDomain

• **DeleteDomain** = ``"chime:DeleteDomain"``

Grants permission to delete a domain from your Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html

#### Defined in

actions/chime.ts:499

___

### DeleteEventsConfiguration

• **DeleteEventsConfiguration** = ``"chime:DeleteEventsConfiguration"``

Grants permission to delete an events configuration for a bot to receive outgoi
ng events

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteEventsConfiguration.html

#### Defined in

actions/chime.ts:506

___

### DeleteGroups

• **DeleteGroups** = ``"chime:DeleteGroups"``

Grants permission to delete Active Directory or Okta user groups from your Amaz
on Chime Enterprise account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:513

___

### DeleteMediaCapturePipeline

• **DeleteMediaCapturePipeline** = ``"chime:DeleteMediaCapturePipeline"``

Grants permission to delete a media capture pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_DeleteMediaCapturePipeline.html

#### Defined in

actions/chime.ts:519

___

### DeleteMediaInsightsPipelineConfiguration

• **DeleteMediaInsightsPipelineConfiguration** = ``"chime:DeleteMediaInsightsPipelineConfiguration"``

Grants permission to delete a media insights pipeline configuration

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_DeleteMediaInsightsPipelineConfiguration.html

#### Defined in

actions/chime.ts:525

___

### DeleteMediaPipeline

• **DeleteMediaPipeline** = ``"chime:DeleteMediaPipeline"``

Grants permission to delete a media pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_DeleteMediaPipeline.html

#### Defined in

actions/chime.ts:531

___

### DeleteMediaPipelineKinesisVideoStreamPool

• **DeleteMediaPipelineKinesisVideoStreamPool** = ``"chime:DeleteMediaPipelineKinesisVideoStreamPool"``

Grants permission to delete kinesis video stream pool

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_DeleteMediaPipelineKinesisVideoStreamPool.html

#### Defined in

actions/chime.ts:537

___

### DeleteMeeting

• **DeleteMeeting** = ``"chime:DeleteMeeting"``

Grants permission to delete the specified Amazon Chime SDK meeting

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteMeeting.html

#### Defined in

actions/chime.ts:543

___

### DeleteMessagingStreamingConfigurations

• **DeleteMessagingStreamingConfigurations** = ``"chime:DeleteMessagingStreamingConfigurations"``

Grants permission to delete the data streaming configurations of an AppInstance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteMessagingStreamingConfigurations.html

#### Defined in

actions/chime.ts:549

___

### DeletePhoneNumber

• **DeletePhoneNumber** = ``"chime:DeletePhoneNumber"``

Grants permission to move a phone number to the deletion queue

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeletePhoneNumber.html

#### Defined in

actions/chime.ts:555

___

### DeleteProxySession

• **DeleteProxySession** = ``"chime:DeleteProxySession"``

Grants permission to delete a proxy session for the specified Amazon Chime Voic
e Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteProxySession.html

#### Defined in

actions/chime.ts:562

___

### DeleteRoom

• **DeleteRoom** = ``"chime:DeleteRoom"``

Grants permission to delete a room

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteRoom.html

#### Defined in

actions/chime.ts:568

___

### DeleteRoomMembership

• **DeleteRoomMembership** = ``"chime:DeleteRoomMembership"``

Grants permission to remove a room member

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteRoomMembership.html

#### Defined in

actions/chime.ts:574

___

### DeleteSipMediaApplication

• **DeleteSipMediaApplication** = ``"chime:DeleteSipMediaApplication"``

Grants permission to delete Amazon Chime SIP media application under the admini
strator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteSipMediaApplication.html

#### Defined in

actions/chime.ts:581

___

### DeleteSipRule

• **DeleteSipRule** = ``"chime:DeleteSipRule"``

Grants permission to delete Amazon Chime SIP rule under the administrator's AWS
account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteSipRule.html

#### Defined in

actions/chime.ts:588

___

### DeleteVoiceConnector

• **DeleteVoiceConnector** = ``"chime:DeleteVoiceConnector"``

Grants permission to delete the specified Amazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnector.html

#### Defined in

actions/chime.ts:594

___

### DeleteVoiceConnectorEmergencyCallingConfiguration

• **DeleteVoiceConnectorEmergencyCallingConfiguration** = ``"chime:DeleteVoiceConnectorEmergencyCallingConfiguration"``

Grants permission to delete emergency calling configuration for the specified A
mazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorEmergencyCallingConfiguration.html

#### Defined in

actions/chime.ts:601

___

### DeleteVoiceConnectorGroup

• **DeleteVoiceConnectorGroup** = ``"chime:DeleteVoiceConnectorGroup"``

Grants permission to delete the specified Amazon Chime Voice Connector Group

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorGroup.html

#### Defined in

actions/chime.ts:607

___

### DeleteVoiceConnectorOrigination

• **DeleteVoiceConnectorOrigination** = ``"chime:DeleteVoiceConnectorOrigination"``

Grants permission to delete the origination settings for the specified Amazon C
hime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorOrigination.html

#### Defined in

actions/chime.ts:614

___

### DeleteVoiceConnectorProxy

• **DeleteVoiceConnectorProxy** = ``"chime:DeleteVoiceConnectorProxy"``

Grants permission to delete proxy configuration for the specified Amazon Chime
Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorProxy.html

#### Defined in

actions/chime.ts:621

___

### DeleteVoiceConnectorStreamingConfiguration

• **DeleteVoiceConnectorStreamingConfiguration** = ``"chime:DeleteVoiceConnectorStreamingConfiguration"``

Grants permission to delete streaming configuration for the specified Amazon Ch
ime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorStreamingConfiguration.html

#### Defined in

actions/chime.ts:628

___

### DeleteVoiceConnectorTermination

• **DeleteVoiceConnectorTermination** = ``"chime:DeleteVoiceConnectorTermination"``

Grants permission to delete the termination settings for the specified Amazon C
hime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorTermination.html

#### Defined in

actions/chime.ts:635

___

### DeleteVoiceConnectorTerminationCredentials

• **DeleteVoiceConnectorTerminationCredentials** = ``"chime:DeleteVoiceConnectorTerminationCredentials"``

Grants permission to delete SIP termination credentials for the specified Amazo
n Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorTerminationCredentials.html

#### Defined in

actions/chime.ts:642

___

### DeleteVoiceProfile

• **DeleteVoiceProfile** = ``"chime:DeleteVoiceProfile"``

Grants permission to delete a voice profile

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceProfile.html

#### Defined in

actions/chime.ts:648

___

### DeleteVoiceProfileDomain

• **DeleteVoiceProfileDomain** = ``"chime:DeleteVoiceProfileDomain"``

Grants permission to delete a voice profile domain

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceProfileDomain.html

#### Defined in

actions/chime.ts:654

___

### DeregisterAppInstanceUserEndpoint

• **DeregisterAppInstanceUserEndpoint** = ``"chime:DeregisterAppInstanceUserEndpoint"``

Grants permission to deregister an endpoint for an app instance user

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeregisterAppInstanceUserEndpoint.html

#### Defined in

actions/chime.ts:660

___

### DescribeAppInstance

• **DescribeAppInstance** = ``"chime:DescribeAppInstance"``

Grants permission to get the full details of an AppInstance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstance.html

#### Defined in

actions/chime.ts:666

___

### DescribeAppInstanceAdmin

• **DescribeAppInstanceAdmin** = ``"chime:DescribeAppInstanceAdmin"``

Grants permission to get the full details of an AppInstanceAdmin

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstanceAdmin.html

#### Defined in

actions/chime.ts:672

___

### DescribeAppInstanceBot

• **DescribeAppInstanceBot** = ``"chime:DescribeAppInstanceBot"``

Grants permission to get the full details of an AppInstanceBot

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstanceBot.html

#### Defined in

actions/chime.ts:678

___

### DescribeAppInstanceUser

• **DescribeAppInstanceUser** = ``"chime:DescribeAppInstanceUser"``

Grants permission to get the full details of an AppInstanceUser

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstanceUser.html

#### Defined in

actions/chime.ts:684

___

### DescribeAppInstanceUserEndpoint

• **DescribeAppInstanceUserEndpoint** = ``"chime:DescribeAppInstanceUserEndpoint"``

Grants permission to describe an endpoint registered for an app instance user

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstanceUserEndpoint.html

#### Defined in

actions/chime.ts:690

___

### DescribeChannel

• **DescribeChannel** = ``"chime:DescribeChannel"``

Grants permission to get the full details of a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannel.html

#### Defined in

actions/chime.ts:696

___

### DescribeChannelBan

• **DescribeChannelBan** = ``"chime:DescribeChannelBan"``

Grants permission to get the full details of a channel ban

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelBan.html

#### Defined in

actions/chime.ts:702

___

### DescribeChannelFlow

• **DescribeChannelFlow** = ``"chime:DescribeChannelFlow"``

Grants permission to get the full details of a channel flow

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelFlow.html

#### Defined in

actions/chime.ts:708

___

### DescribeChannelMembership

• **DescribeChannelMembership** = ``"chime:DescribeChannelMembership"``

Grants permission to get the full details of a channel membership

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelMembership.html

#### Defined in

actions/chime.ts:714

___

### DescribeChannelMembershipForAppInstanceUser

• **DescribeChannelMembershipForAppInstanceUser** = ``"chime:DescribeChannelMembershipForAppInstanceUser"``

Grants permission to get the details of a channel based on the membership of th
e specified user or bot

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelMembershipForAppInstanceUser.html

#### Defined in

actions/chime.ts:721

___

### DescribeChannelModeratedByAppInstanceUser

• **DescribeChannelModeratedByAppInstanceUser** = ``"chime:DescribeChannelModeratedByAppInstanceUser"``

Grants permission to get the full details of a channel moderated by the specifi
ed user or bot

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelModeratedByAppInstanceUser.html

#### Defined in

actions/chime.ts:728

___

### DescribeChannelModerator

• **DescribeChannelModerator** = ``"chime:DescribeChannelModerator"``

Grants permission to get the full details of a single ChannelModerator

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelModerator.html

#### Defined in

actions/chime.ts:734

___

### DisassociateChannelFlow

• **DisassociateChannelFlow** = ``"chime:DisassociateChannelFlow"``

Grants permission to disassociate a flow from a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DisassociateChannelFlow.html

#### Defined in

actions/chime.ts:740

___

### DisassociatePhoneNumberFromUser

• **DisassociatePhoneNumberFromUser** = ``"chime:DisassociatePhoneNumberFromUser"``

Grants permission to disassociate the primary provisioned number from the speci
fied Amazon Chime user

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumberFromUser.html

#### Defined in

actions/chime.ts:747

___

### DisassociatePhoneNumbersFromVoiceConnector

• **DisassociatePhoneNumbersFromVoiceConnector** = ``"chime:DisassociatePhoneNumbersFromVoiceConnector"``

Grants permission to disassociate multiple phone numbers from the specified Ama
zon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumbersFromVoiceConnector.html

#### Defined in

actions/chime.ts:754

___

### DisassociatePhoneNumbersFromVoiceConnectorGroup

• **DisassociatePhoneNumbersFromVoiceConnectorGroup** = ``"chime:DisassociatePhoneNumbersFromVoiceConnectorGroup"``

Grants permission to disassociate multiple phone numbers from the specified Ama
zon Chime Voice Connector Group

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumbersFromVoiceConnectorGroup.html

#### Defined in

actions/chime.ts:761

___

### DisassociateSigninDelegateGroupsFromAccount

• **DisassociateSigninDelegateGroupsFromAccount** = ``"chime:DisassociateSigninDelegateGroupsFromAccount"``

Grants permission to disassociate the specified sign-in delegate groups from th
e specified Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociateSigninDelegateGroupsFromAccount.html

#### Defined in

actions/chime.ts:768

___

### DisconnectDirectory

• **DisconnectDirectory** = ``"chime:DisconnectDirectory"``

Grants permission to disconnect the Active Directory from your Amazon Chime Ent
erprise account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:775

___

### GetAccount

• **GetAccount** = ``"chime:GetAccount"``

Grants permission to get details for the specified Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAccount.html

#### Defined in

actions/chime.ts:781

___

### GetAccountResource

• **GetAccountResource** = ``"chime:GetAccountResource"``

Grants permission to get details for the account resource associated with your
Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:788

___

### GetAccountSettings

• **GetAccountSettings** = ``"chime:GetAccountSettings"``

Grants permission to get account settings for the specified Amazon Chime accoun
t ID

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAccountSettings.html

#### Defined in

actions/chime.ts:795

___

### GetAccountWithOpenIdConfig

• **GetAccountWithOpenIdConfig** = ``"chime:GetAccountWithOpenIdConfig"``

Grants permission to get the account details and OpenIdConfig attributes for yo
ur Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html

#### Defined in

actions/chime.ts:802

___

### GetAppInstanceRetentionSettings

• **GetAppInstanceRetentionSettings** = ``"chime:GetAppInstanceRetentionSettings"``

Grants permission to get retention settings for an app instance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_GetAppInstanceRetentionSettings.html

#### Defined in

actions/chime.ts:808

___

### GetAppInstanceStreamingConfigurations

• **GetAppInstanceStreamingConfigurations** = ``"chime:GetAppInstanceStreamingConfigurations"``

Grants permission to get the streaming configurations for an app instance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_GetAppInstanceStreamingConfigurations.html

#### Defined in

actions/chime.ts:814

___

### GetAttendee

• **GetAttendee** = ``"chime:GetAttendee"``

Grants permission to get attendee details for a specified meeting ID and attend
ee ID

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAttendee.html

#### Defined in

actions/chime.ts:821

___

### GetBot

• **GetBot** = ``"chime:GetBot"``

Grants permission to retrieve details for the specified bot

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetBot.html

#### Defined in

actions/chime.ts:827

___

### GetCDRBucket

• **GetCDRBucket** = ``"chime:GetCDRBucket"``

Grants permission to get details of a Call Detail Record S3 bucket associated w
ith your Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:834

___

### GetChannelMembershipPreferences

• **GetChannelMembershipPreferences** = ``"chime:GetChannelMembershipPreferences"``

Grants permission to get the preferences for a channel membership

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetChannelMembershipPreferences.html

#### Defined in

actions/chime.ts:840

___

### GetChannelMessage

• **GetChannelMessage** = ``"chime:GetChannelMessage"``

Grants permission to get the full details of a channel message

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetChannelMessage.html

#### Defined in

actions/chime.ts:846

___

### GetChannelMessageStatus

• **GetChannelMessageStatus** = ``"chime:GetChannelMessageStatus"``

Grants permission to get the status of a channel message

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetChannelMessageStatus.html

#### Defined in

actions/chime.ts:852

___

### GetDomain

• **GetDomain** = ``"chime:GetDomain"``

Grants permission to get domain details for a domain associated with your Amazo
n Chime account

See https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html

#### Defined in

actions/chime.ts:859

___

### GetEventsConfiguration

• **GetEventsConfiguration** = ``"chime:GetEventsConfiguration"``

Grants permission to retrieve details for an events configuration for a bot to
receive outgoing events

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetEventsConfiguration.html

#### Defined in

actions/chime.ts:866

___

### GetGlobalSettings

• **GetGlobalSettings** = ``"chime:GetGlobalSettings"``

Grants permission to get global settings related to Amazon Chime for the AWS ac
count

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetGlobalSettings.html

#### Defined in

actions/chime.ts:873

___

### GetMediaCapturePipeline

• **GetMediaCapturePipeline** = ``"chime:GetMediaCapturePipeline"``

Grants permission to get an existing media capture pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetMediaCapturePipeline.html

#### Defined in

actions/chime.ts:879

___

### GetMediaInsightsPipelineConfiguration

• **GetMediaInsightsPipelineConfiguration** = ``"chime:GetMediaInsightsPipelineConfiguration"``

Grants permission to get a media insights pipeline configuration

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetMediaInsightsPipelineConfiguration.html

#### Defined in

actions/chime.ts:885

___

### GetMediaPipeline

• **GetMediaPipeline** = ``"chime:GetMediaPipeline"``

Grants permission to get an existing media pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetMediaPipeline.html

#### Defined in

actions/chime.ts:891

___

### GetMediaPipelineKinesisVideoStreamPool

• **GetMediaPipelineKinesisVideoStreamPool** = ``"chime:GetMediaPipelineKinesisVideoStreamPool"``

Grants permission to get an existing media pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetMediaPipelineKinesisVideoStreamPool.html

#### Defined in

actions/chime.ts:897

___

### GetMeeting

• **GetMeeting** = ``"chime:GetMeeting"``

Grants permission to get the meeting record for a specified meeting ID

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetMeeting.html

#### Defined in

actions/chime.ts:903

___

### GetMeetingDetail

• **GetMeetingDetail** = ``"chime:GetMeetingDetail"``

Grants permission to get attendee, connection, and other details for a meeting

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:909

___

### GetMessagingSessionEndpoint

• **GetMessagingSessionEndpoint** = ``"chime:GetMessagingSessionEndpoint"``

Grants permission to get the endpoint for the messaging session

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetMessagingSessionEndpoint.html

#### Defined in

actions/chime.ts:915

___

### GetMessagingStreamingConfigurations

• **GetMessagingStreamingConfigurations** = ``"chime:GetMessagingStreamingConfigurations"``

Grants permission to get the data streaming configurations of an AppInstance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetMessagingStreamingConfigurations.html

#### Defined in

actions/chime.ts:921

___

### GetPhoneNumber

• **GetPhoneNumber** = ``"chime:GetPhoneNumber"``

Grants permission to get details for the specified phone number

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumber.html

#### Defined in

actions/chime.ts:927

___

### GetPhoneNumberOrder

• **GetPhoneNumberOrder** = ``"chime:GetPhoneNumberOrder"``

Grants permission to get details for the specified phone number order

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumberOrder.html

#### Defined in

actions/chime.ts:933

___

### GetPhoneNumberSettings

• **GetPhoneNumberSettings** = ``"chime:GetPhoneNumberSettings"``

Grants permission to get phone number settings related to Amazon Chime for the
AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumberSettings.html

#### Defined in

actions/chime.ts:940

___

### GetProxySession

• **GetProxySession** = ``"chime:GetProxySession"``

Grants permission to get details of the specified proxy session for the specifi
ed Amazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetProxySession.html

#### Defined in

actions/chime.ts:947

___

### GetRetentionSettings

• **GetRetentionSettings** = ``"chime:GetRetentionSettings"``

Grants permission to retrieve the retention settings for the specified Amazon C
hime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetRetentionSettings.html

#### Defined in

actions/chime.ts:954

___

### GetRoom

• **GetRoom** = ``"chime:GetRoom"``

Grants permission to retrieve a room

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetRoom.html

#### Defined in

actions/chime.ts:960

___

### GetSipMediaApplication

• **GetSipMediaApplication** = ``"chime:GetSipMediaApplication"``

Grants permission to get details of Amazon Chime SIP media application under th
e administrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetSipMediaApplication.html

#### Defined in

actions/chime.ts:967

___

### GetSipMediaApplicationAlexaSkillConfiguration

• **GetSipMediaApplicationAlexaSkillConfiguration** = ``"chime:GetSipMediaApplicationAlexaSkillConfiguration"``

Grants permission to get Alexa Skill configuration settings for Amazon Chime SI
P media application under the administrator's AWS account

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetSipMediaApplicationAlexaSkillConfiguration.html

#### Defined in

actions/chime.ts:974

___

### GetSipMediaApplicationLoggingConfiguration

• **GetSipMediaApplicationLoggingConfiguration** = ``"chime:GetSipMediaApplicationLoggingConfiguration"``

Grants permission to get logging configuration settings for Amazon Chime SIP me
dia application under the administrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetSipMediaApplicationLoggingConfiguration.html

#### Defined in

actions/chime.ts:981

___

### GetSipRule

• **GetSipRule** = ``"chime:GetSipRule"``

Grants permission to get details of Amazon Chime SIP rule under the administrat
or's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetSipRule.html

#### Defined in

actions/chime.ts:988

___

### GetSpeakerSearchTask

• **GetSpeakerSearchTask** = ``"chime:GetSpeakerSearchTask"``

Grants permission to get a speaker search task on the specified Amazon Chime re
source

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetSpeakerSearchTask.html

#### Defined in

actions/chime.ts:995

___

### GetTelephonyLimits

• **GetTelephonyLimits** = ``"chime:GetTelephonyLimits"``

Grants permission to get telephony limits for the AWS account

See https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html

#### Defined in

actions/chime.ts:1001

___

### GetUser

• **GetUser** = ``"chime:GetUser"``

Grants permission to get details for the specified user ID

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetUser.html

#### Defined in

actions/chime.ts:1007

___

### GetUserActivityReportData

• **GetUserActivityReportData** = ``"chime:GetUserActivityReportData"``

Grants permission to get a summary of user activity on the user details page

See https://docs.aws.amazon.com/chime/latest/ag/user-details.html

#### Defined in

actions/chime.ts:1013

___

### GetUserByEmail

• **GetUserByEmail** = ``"chime:GetUserByEmail"``

Grants permission to get user details for an Amazon Chime user based on the ema
il address in an Amazon Chime Enterprise or Team account

See https://docs.aws.amazon.com/chime/latest/ag/user-details.html

#### Defined in

actions/chime.ts:1020

___

### GetUserSettings

• **GetUserSettings** = ``"chime:GetUserSettings"``

Grants permission to get user settings related to the specified Amazon Chime us
er

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetUserSettings.html

#### Defined in

actions/chime.ts:1027

___

### GetVoiceConnector

• **GetVoiceConnector** = ``"chime:GetVoiceConnector"``

Grants permission to get details for the specified Amazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnector.html

#### Defined in

actions/chime.ts:1033

___

### GetVoiceConnectorEmergencyCallingConfiguration

• **GetVoiceConnectorEmergencyCallingConfiguration** = ``"chime:GetVoiceConnectorEmergencyCallingConfiguration"``

Grants permission to get details of the emergency calling configuration for the
specified Amazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorEmergencyCallingConfiguration.html

#### Defined in

actions/chime.ts:1040

___

### GetVoiceConnectorGroup

• **GetVoiceConnectorGroup** = ``"chime:GetVoiceConnectorGroup"``

Grants permission to get details for the specified Amazon Chime Voice Connector
Group

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorGroup.html

#### Defined in

actions/chime.ts:1047

___

### GetVoiceConnectorLoggingConfiguration

• **GetVoiceConnectorLoggingConfiguration** = ``"chime:GetVoiceConnectorLoggingConfiguration"``

Grants permission to get details of the logging configuration for the specified
Amazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorLoggingConfiguration.html

#### Defined in

actions/chime.ts:1054

___

### GetVoiceConnectorOrigination

• **GetVoiceConnectorOrigination** = ``"chime:GetVoiceConnectorOrigination"``

Grants permission to get details of the origination settings for the specified
Amazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorOrigination.html

#### Defined in

actions/chime.ts:1061

___

### GetVoiceConnectorProxy

• **GetVoiceConnectorProxy** = ``"chime:GetVoiceConnectorProxy"``

Grants permission to get details of the proxy configuration for the specified A
mazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorProxy.html

#### Defined in

actions/chime.ts:1068

___

### GetVoiceConnectorStreamingConfiguration

• **GetVoiceConnectorStreamingConfiguration** = ``"chime:GetVoiceConnectorStreamingConfiguration"``

Grants permission to get details of the streaming configuration for the specifi
ed Amazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorStreamingConfiguration.html

#### Defined in

actions/chime.ts:1075

___

### GetVoiceConnectorTermination

• **GetVoiceConnectorTermination** = ``"chime:GetVoiceConnectorTermination"``

Grants permission to get details of the termination settings for the specified
Amazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorTermination.html

#### Defined in

actions/chime.ts:1082

___

### GetVoiceConnectorTerminationHealth

• **GetVoiceConnectorTerminationHealth** = ``"chime:GetVoiceConnectorTerminationHealth"``

Grants permission to get details of the termination health for the specified Am
azon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorTerminationHealth.html

#### Defined in

actions/chime.ts:1089

___

### GetVoiceProfile

• **GetVoiceProfile** = ``"chime:GetVoiceProfile"``

Grants permission to get a voice profile

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceProfile.html

#### Defined in

actions/chime.ts:1095

___

### GetVoiceProfileDomain

• **GetVoiceProfileDomain** = ``"chime:GetVoiceProfileDomain"``

Grants permission to get a voice profile domain

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceProfileDomain.html

#### Defined in

actions/chime.ts:1101

___

### GetVoiceToneAnalysisTask

• **GetVoiceToneAnalysisTask** = ``"chime:GetVoiceToneAnalysisTask"``

Grants permission to get a voice tone analysis task on the specified Amazon Chi
me resource

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetVoiceToneAnalysisTask.html

#### Defined in

actions/chime.ts:1108

___

### InviteDelegate

• **InviteDelegate** = ``"chime:InviteDelegate"``

Grants permission to send an invitation to accept a request for AWS account del
egation for an Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1115

___

### InviteUsers

• **InviteUsers** = ``"chime:InviteUsers"``

Grants permission to invite as many as 50 users to the specified Amazon Chime a
ccount

See https://docs.aws.amazon.com/chime/latest/APIReference/API_InviteUsers.html

#### Defined in

actions/chime.ts:1122

___

### InviteUsersFromProvider

• **InviteUsersFromProvider** = ``"chime:InviteUsersFromProvider"``

Grants permission to invite users from a third party provider to your Amazon Ch
ime account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1129

___

### ListAccountUsageReportData

• **ListAccountUsageReportData** = ``"chime:ListAccountUsageReportData"``

Grants permission to list Amazon Chime account usage reporting data

See https://docs.aws.amazon.com/chime/latest/ag/view-reports.html

#### Defined in

actions/chime.ts:1135

___

### ListAccounts

• **ListAccounts** = ``"chime:ListAccounts"``

Grants permission to list the Amazon Chime accounts under the administrator's A
WS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAccounts.html

#### Defined in

actions/chime.ts:1142

___

### ListApiKeys

• **ListApiKeys** = ``"chime:ListApiKeys"``

Grants permission to list the SCIM access keys defined for your Amazon Chime ac
count and Okta configuration

See https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html

#### Defined in

actions/chime.ts:1149

___

### ListAppInstanceAdmins

• **ListAppInstanceAdmins** = ``"chime:ListAppInstanceAdmins"``

Grants permission to list administrators in the app instance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceAdmins.html

#### Defined in

actions/chime.ts:1155

___

### ListAppInstanceBots

• **ListAppInstanceBots** = ``"chime:ListAppInstanceBots"``

Grants permission to list all AppInstanceBots created under a single app instan
ce

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceBots.html

#### Defined in

actions/chime.ts:1162

___

### ListAppInstanceUserEndpoints

• **ListAppInstanceUserEndpoints** = ``"chime:ListAppInstanceUserEndpoints"``

Grants permission to list the endpoints registered for an app instance user

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceUserEndpoints.html

#### Defined in

actions/chime.ts:1168

___

### ListAppInstanceUsers

• **ListAppInstanceUsers** = ``"chime:ListAppInstanceUsers"``

Grants permission to list all AppInstanceUsers created under a single app insta
nce

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceUsers.html

#### Defined in

actions/chime.ts:1175

___

### ListAppInstances

• **ListAppInstances** = ``"chime:ListAppInstances"``

Grants permission to list all Amazon Chime app instances created under a single
AWS account

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstances.html

#### Defined in

actions/chime.ts:1182

___

### ListAttendeeTags

• **ListAttendeeTags** = ``"chime:ListAttendeeTags"``

Grants permission to list the tags applied to an Amazon Chime SDK attendee reso
urce

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAttendeeTags.html

#### Defined in

actions/chime.ts:1189

___

### ListAttendees

• **ListAttendees** = ``"chime:ListAttendees"``

Grants permission to list up to 100 attendees for a specified Amazon Chime SDK
meeting

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAttendees.html

#### Defined in

actions/chime.ts:1196

___

### ListAvailableVoiceConnectorRegions

• **ListAvailableVoiceConnectorRegions** = ``"chime:ListAvailableVoiceConnectorRegions"``

Grants permission to list the available AWS Regions in which you can create an
Amazon Chime SDK Voice Connector

See API_ListAvailableVoiceConnectorRegions.html

#### Defined in

actions/chime.ts:1203

___

### ListBots

• **ListBots** = ``"chime:ListBots"``

Grants permission to list the bots associated with the administrator's Amazon C
hime Enterprise account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListBots.html

#### Defined in

actions/chime.ts:1210

___

### ListCDRBucket

• **ListCDRBucket** = ``"chime:ListCDRBucket"``

Grants permission to list Call Detail Record S3 buckets

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1216

___

### ListCallingRegions

• **ListCallingRegions** = ``"chime:ListCallingRegions"``

Grants permission to list the calling regions available for the administrator's
AWS account

See https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html

#### Defined in

actions/chime.ts:1223

___

### ListChannelBans

• **ListChannelBans** = ``"chime:ListChannelBans"``

Grants permission to list all the users and bots banned from a particular chann
el

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelBans.html

#### Defined in

actions/chime.ts:1230

___

### ListChannelFlows

• **ListChannelFlows** = ``"chime:ListChannelFlows"``

Grants permission to list all the Channel Flows created under a single Chime Ap
pInstance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelFlows.html

#### Defined in

actions/chime.ts:1237

___

### ListChannelMemberships

• **ListChannelMemberships** = ``"chime:ListChannelMemberships"``

Grants permission to list all channel memberships in a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelMemberships.html

#### Defined in

actions/chime.ts:1243

___

### ListChannelMembershipsForAppInstanceUser

• **ListChannelMembershipsForAppInstanceUser** = ``"chime:ListChannelMembershipsForAppInstanceUser"``

Grants permission to list all channels that a particular user or bot is a part
of

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelMembershipsForAppInstanceUser.html

#### Defined in

actions/chime.ts:1250

___

### ListChannelMessages

• **ListChannelMessages** = ``"chime:ListChannelMessages"``

Grants permission to list all the messages in a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelMessages.html

#### Defined in

actions/chime.ts:1256

___

### ListChannelModerators

• **ListChannelModerators** = ``"chime:ListChannelModerators"``

Grants permission to list all the moderators for a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelModerators.html

#### Defined in

actions/chime.ts:1262

___

### ListChannels

• **ListChannels** = ``"chime:ListChannels"``

Grants permission to list all the Channels created under a single Chime AppInst
ance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannels.html

#### Defined in

actions/chime.ts:1269

___

### ListChannelsAssociatedWithChannelFlow

• **ListChannelsAssociatedWithChannelFlow** = ``"chime:ListChannelsAssociatedWithChannelFlow"``

Grants permission to list all the Channels associated with a single Chime Chann
el Flow

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelsAssociatedWithChannelFlow.html

#### Defined in

actions/chime.ts:1276

___

### ListChannelsModeratedByAppInstanceUser

• **ListChannelsModeratedByAppInstanceUser** = ``"chime:ListChannelsModeratedByAppInstanceUser"``

Grants permission to list all channels moderated by a user or bot

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelsModeratedByAppInstanceUser.html

#### Defined in

actions/chime.ts:1282

___

### ListDelegates

• **ListDelegates** = ``"chime:ListDelegates"``

Grants permission to list account delegate information associated with your Ama
zon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1289

___

### ListDirectories

• **ListDirectories** = ``"chime:ListDirectories"``

Grants permission to list active Active Directories hosted in the Directory Ser
vice of your AWS account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1296

___

### ListDomains

• **ListDomains** = ``"chime:ListDomains"``

Grants permission to list domains associated with your Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html

#### Defined in

actions/chime.ts:1302

___

### ListGroups

• **ListGroups** = ``"chime:ListGroups"``

Grants permission to list Active Directory or Okta user groups associated with
your Amazon Chime Enterprise account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1309

___

### ListMediaCapturePipelines

• **ListMediaCapturePipelines** = ``"chime:ListMediaCapturePipelines"``

Grants permission to list media capture pipelines

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_ListMediaCapturePipelines.html

#### Defined in

actions/chime.ts:1315

___

### ListMediaInsightsPipelineConfigurations

• **ListMediaInsightsPipelineConfigurations** = ``"chime:ListMediaInsightsPipelineConfigurations"``

Grants permission to list all media insights pipeline configurations

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_ListMediaInsightsPipelineConfigurations.html

#### Defined in

actions/chime.ts:1321

___

### ListMediaPipelineKinesisVideoStreamPools

• **ListMediaPipelineKinesisVideoStreamPools** = ``"chime:ListMediaPipelineKinesisVideoStreamPools"``

Grants permission to list media pipelines

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_ListMediaPipelineKinesisVideoStreamPools.html

#### Defined in

actions/chime.ts:1327

___

### ListMediaPipelines

• **ListMediaPipelines** = ``"chime:ListMediaPipelines"``

Grants permission to list media pipelines

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_ListMediaPipelines.html

#### Defined in

actions/chime.ts:1333

___

### ListMeetingEvents

• **ListMeetingEvents** = ``"chime:ListMeetingEvents"``

Grants permission to list all events that occurred for a specified meeting

See https://docs.aws.amazon.com/chime/latest/ag/view-reports.html

#### Defined in

actions/chime.ts:1339

___

### ListMeetingTags

• **ListMeetingTags** = ``"chime:ListMeetingTags"``

Grants permission to list the tags applied to an Amazon Chime SDK meeting resou
rce

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMeetingTags.html

#### Defined in

actions/chime.ts:1346

___

### ListMeetings

• **ListMeetings** = ``"chime:ListMeetings"``

Grants permission to list up to 100 active Amazon Chime SDK meetings

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMeetings.html

#### Defined in

actions/chime.ts:1352

___

### ListMeetingsReportData

• **ListMeetingsReportData** = ``"chime:ListMeetingsReportData"``

Grants permission to list meetings ended during the specified date range

See https://docs.aws.amazon.com/chime/latest/ag/view-reports.html

#### Defined in

actions/chime.ts:1358

___

### ListPhoneNumberOrders

• **ListPhoneNumberOrders** = ``"chime:ListPhoneNumberOrders"``

Grants permission to list the phone number orders under the administrator's AWS
account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListPhoneNumberOrders.html

#### Defined in

actions/chime.ts:1365

___

### ListPhoneNumbers

• **ListPhoneNumbers** = ``"chime:ListPhoneNumbers"``

Grants permission to list the phone numbers under the administrator's AWS accou
nt

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListPhoneNumbers.html

#### Defined in

actions/chime.ts:1372

___

### ListProxySessions

• **ListProxySessions** = ``"chime:ListProxySessions"``

Grants permission to list proxy sessions for the specified Amazon Chime Voice C
onnector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListProxySessions.html

#### Defined in

actions/chime.ts:1379

___

### ListRoomMemberships

• **ListRoomMemberships** = ``"chime:ListRoomMemberships"``

Grants permission to list all room members

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListRoomMemberships.html

#### Defined in

actions/chime.ts:1385

___

### ListRooms

• **ListRooms** = ``"chime:ListRooms"``

Grants permission to list rooms

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListRooms.html

#### Defined in

actions/chime.ts:1391

___

### ListSipMediaApplications

• **ListSipMediaApplications** = ``"chime:ListSipMediaApplications"``

Grants permission to list all Amazon Chime SIP media applications under the adm
inistrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListSipMediaApplications.html

#### Defined in

actions/chime.ts:1398

___

### ListSipRules

• **ListSipRules** = ``"chime:ListSipRules"``

Grants permission to list all Amazon Chime SIP rules under the administrator's
AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListSipRules.html

#### Defined in

actions/chime.ts:1405

___

### ListSubChannels

• **ListSubChannels** = ``"chime:ListSubChannels"``

Grants permission to list all the SubChannels under a single Channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListSubChannels.html

#### Defined in

actions/chime.ts:1411

___

### ListSupportedPhoneNumberCountries

• **ListSupportedPhoneNumberCountries** = ``"chime:ListSupportedPhoneNumberCountries"``

Grants permission to list the phone number countries supported by the AWS accou
nt

See API_ListSupportedPhoneNumberCountries.html

#### Defined in

actions/chime.ts:1418

___

### ListTagsForResource

• **ListTagsForResource** = ``"chime:ListTagsForResource"``

Grants permission to list the tags applied to an Amazon Chime resource

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/chime.ts:1424

___

### ListUsers

• **ListUsers** = ``"chime:ListUsers"``

Grants permission to list the users that belong to the specified Amazon Chime a
ccount

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListUsers.html

#### Defined in

actions/chime.ts:1431

___

### ListVoiceConnectorGroups

• **ListVoiceConnectorGroups** = ``"chime:ListVoiceConnectorGroups"``

Grants permission to list the Amazon Chime Voice Connector Groups under the adm
inistrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectorGroups.html

#### Defined in

actions/chime.ts:1438

___

### ListVoiceConnectorTerminationCredentials

• **ListVoiceConnectorTerminationCredentials** = ``"chime:ListVoiceConnectorTerminationCredentials"``

Grants permission to list the SIP termination credentials for the specified Ama
zon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectorTerminationCredentials.html

#### Defined in

actions/chime.ts:1445

___

### ListVoiceConnectors

• **ListVoiceConnectors** = ``"chime:ListVoiceConnectors"``

Grants permission to list the Amazon Chime Voice Connectors under the administr
ator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectors.html

#### Defined in

actions/chime.ts:1452

___

### ListVoiceProfileDomains

• **ListVoiceProfileDomains** = ``"chime:ListVoiceProfileDomains"``

Grants permission to list voice profile domains

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListVoiceProfileDomains.html

#### Defined in

actions/chime.ts:1458

___

### ListVoiceProfiles

• **ListVoiceProfiles** = ``"chime:ListVoiceProfiles"``

Grants permission to list voice profiles

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListVoiceProfiles.html

#### Defined in

actions/chime.ts:1464

___

### LogoutUser

• **LogoutUser** = ``"chime:LogoutUser"``

Grants permission to log out the specified user from all of the devices they ar
e currently logged into

See https://docs.aws.amazon.com/chime/latest/APIReference/API_LogoutUser.html

#### Defined in

actions/chime.ts:1471

___

### PutAppInstanceRetentionSettings

• **PutAppInstanceRetentionSettings** = ``"chime:PutAppInstanceRetentionSettings"``

Grants permission to enable data retention for the app instance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_PutAppInstanceRetentionSettings.html

#### Defined in

actions/chime.ts:1477

___

### PutAppInstanceStreamingConfigurations

• **PutAppInstanceStreamingConfigurations** = ``"chime:PutAppInstanceStreamingConfigurations"``

Grants permission to configure data streaming for the app instance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_PutAppInstanceStreamingConfigurations.html

#### Defined in

actions/chime.ts:1483

___

### PutAppInstanceUserExpirationSettings

• **PutAppInstanceUserExpirationSettings** = ``"chime:PutAppInstanceUserExpirationSettings"``

Grants permission to put expiration settings for an AppInstanceUser

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_PutAppInstanceUserExpirationSettings.html

#### Defined in

actions/chime.ts:1489

___

### PutChannelExpirationSettings

• **PutChannelExpirationSettings** = ``"chime:PutChannelExpirationSettings"``

Grants permission to put expiration settings for a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_PutChannelExpirationSettings.html

#### Defined in

actions/chime.ts:1495

___

### PutChannelMembershipPreferences

• **PutChannelMembershipPreferences** = ``"chime:PutChannelMembershipPreferences"``

Grants permission to put the preferences for a channel membership

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_PutChannelMembershipPreferences.html

#### Defined in

actions/chime.ts:1501

___

### PutEventsConfiguration

• **PutEventsConfiguration** = ``"chime:PutEventsConfiguration"``

Grants permission to update details for an events configuration for a bot to re
ceive outgoing events

See https://docs.aws.amazon.com/chime/latest/APIReference/API_PutEventsConfiguration.html

#### Defined in

actions/chime.ts:1508

___

### PutMessagingStreamingConfigurations

• **PutMessagingStreamingConfigurations** = ``"chime:PutMessagingStreamingConfigurations"``

Grants permission to put the data streaming configurations of an AppInstance

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_PutMessagingStreamingConfigurations.html

#### Defined in

actions/chime.ts:1514

___

### PutRetentionSettings

• **PutRetentionSettings** = ``"chime:PutRetentionSettings"``

Grants permission to create or update retention settings for the specified Amaz
on Chime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_PutRetentionSettings.html

#### Defined in

actions/chime.ts:1521

___

### PutSipMediaApplicationAlexaSkillConfiguration

• **PutSipMediaApplicationAlexaSkillConfiguration** = ``"chime:PutSipMediaApplicationAlexaSkillConfiguration"``

Grants permission to update Alexa Skill configuration settings for Amazon Chime
SIP media application under the administrator's AWS account

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutSipMediaApplicationAlexaSkillConfiguration.html

#### Defined in

actions/chime.ts:1528

___

### PutSipMediaApplicationLoggingConfiguration

• **PutSipMediaApplicationLoggingConfiguration** = ``"chime:PutSipMediaApplicationLoggingConfiguration"``

Grants permission to update logging configuration settings for Amazon Chime SIP
media application under the administrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_PutSipMediaApplicationLoggingConfiguration.html

#### Defined in

actions/chime.ts:1535

___

### PutVoiceConnectorEmergencyCallingConfiguration

• **PutVoiceConnectorEmergencyCallingConfiguration** = ``"chime:PutVoiceConnectorEmergencyCallingConfiguration"``

Grants permission to add emergency calling configuration for the specified Amaz
on Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorEmergencyCallingConfiguration.html

#### Defined in

actions/chime.ts:1542

___

### PutVoiceConnectorLoggingConfiguration

• **PutVoiceConnectorLoggingConfiguration** = ``"chime:PutVoiceConnectorLoggingConfiguration"``

Grants permission to add logging configuration for the specified Amazon Chime V
oice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorLoggingConfiguration.html

#### Defined in

actions/chime.ts:1549

___

### PutVoiceConnectorOrigination

• **PutVoiceConnectorOrigination** = ``"chime:PutVoiceConnectorOrigination"``

Grants permission to update the origination settings for the specified Amazon C
hime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorOrigination.html

#### Defined in

actions/chime.ts:1556

___

### PutVoiceConnectorProxy

• **PutVoiceConnectorProxy** = ``"chime:PutVoiceConnectorProxy"``

Grants permission to add proxy configuration for the specified Amazon Chime Voi
ce Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorProxy.html

#### Defined in

actions/chime.ts:1563

___

### PutVoiceConnectorStreamingConfiguration

• **PutVoiceConnectorStreamingConfiguration** = ``"chime:PutVoiceConnectorStreamingConfiguration"``

Grants permission to add streaming configuration for the specified Amazon Chime
Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorStreamingConfiguration.html

#### Defined in

actions/chime.ts:1570

___

### PutVoiceConnectorTermination

• **PutVoiceConnectorTermination** = ``"chime:PutVoiceConnectorTermination"``

Grants permission to update the termination settings for the specified Amazon C
hime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorTermination.html

#### Defined in

actions/chime.ts:1577

___

### PutVoiceConnectorTerminationCredentials

• **PutVoiceConnectorTerminationCredentials** = ``"chime:PutVoiceConnectorTerminationCredentials"``

Grants permission to add SIP termination credentials for the specified Amazon C
hime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorTerminationCredentials.html

#### Defined in

actions/chime.ts:1584

___

### RedactChannelMessage

• **RedactChannelMessage** = ``"chime:RedactChannelMessage"``

Grants permission to redact message content

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_RedactChannelMessage.html

#### Defined in

actions/chime.ts:1590

___

### RedactConversationMessage

• **RedactConversationMessage** = ``"chime:RedactConversationMessage"``

Grants permission to redact the specified Chime conversation Message

See https://docs.aws.amazon.com/chime/latest/APIReference/API_RedactConversationMessage.html

#### Defined in

actions/chime.ts:1596

___

### RedactRoomMessage

• **RedactRoomMessage** = ``"chime:RedactRoomMessage"``

Grants permission to redacts the specified Chime room Message

See https://docs.aws.amazon.com/chime/latest/APIReference/API_RedactRoomMessage.html

#### Defined in

actions/chime.ts:1602

___

### RegenerateSecurityToken

• **RegenerateSecurityToken** = ``"chime:RegenerateSecurityToken"``

Grants permission to regenerate the security token for the specified bot

See https://docs.aws.amazon.com/chime/latest/APIReference/API_RegenerateSecurityToken.html

#### Defined in

actions/chime.ts:1608

___

### RegisterAppInstanceUserEndpoint

• **RegisterAppInstanceUserEndpoint** = ``"chime:RegisterAppInstanceUserEndpoint"``

Grants permission to register an endpoint for an app instance user

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_RegisterAppInstanceUserEndpoint.html

#### Defined in

actions/chime.ts:1614

___

### RenameAccount

• **RenameAccount** = ``"chime:RenameAccount"``

Grants permission to modify the account name for your Amazon Chime Enterprise o
r Team account

See https://docs.aws.amazon.com/chime/latest/ag/rename-account.html

#### Defined in

actions/chime.ts:1621

___

### RenewDelegate

• **RenewDelegate** = ``"chime:RenewDelegate"``

Grants permission to renew the delegation request associated with an Amazon Chi
me account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1628

___

### ResetAccountResource

• **ResetAccountResource** = ``"chime:ResetAccountResource"``

Grants permission to reset the account resource in your Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1634

___

### ResetPersonalPIN

• **ResetPersonalPIN** = ``"chime:ResetPersonalPIN"``

Grants permission to reset the personal meeting PIN for the specified user on a
n Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ResetPersonalPIN.html

#### Defined in

actions/chime.ts:1641

___

### RestorePhoneNumber

• **RestorePhoneNumber** = ``"chime:RestorePhoneNumber"``

Grants permission to restore the specified phone number from the deltion queue
back to the phone number inventory

See https://docs.aws.amazon.com/chime/latest/APIReference/API_RestorePhoneNumber.html

#### Defined in

actions/chime.ts:1648

___

### RetrieveDataExports

• **RetrieveDataExports** = ``"chime:RetrieveDataExports"``

Grants permission to download the file containing links to all user attachments
returned as part of the "Request attachments" action

See https://docs.aws.amazon.com/chime/latest/ag/request-attachments.html

#### Defined in

actions/chime.ts:1655

___

### SearchAvailablePhoneNumbers

• **SearchAvailablePhoneNumbers** = ``"chime:SearchAvailablePhoneNumbers"``

Grants permission to search phone numbers that can be ordered from the carrier

See https://docs.aws.amazon.com/chime/latest/APIReference/API_SearchAvailablePhoneNumbers.html

#### Defined in

actions/chime.ts:1661

___

### SearchChannels

• **SearchChannels** = ``"chime:SearchChannels"``

Grants permission to search channels that an AppInstanceUser belongs to, or sea
rch channels across the AppInstance for an AppInstaceAdmin

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_SearchChannels.html

#### Defined in

actions/chime.ts:1668

___

### SendChannelMessage

• **SendChannelMessage** = ``"chime:SendChannelMessage"``

Grants permission to send a message to a particular channel that the member is
a part of

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_SendChannelMessage.html

#### Defined in

actions/chime.ts:1675

___

### StartDataExport

• **StartDataExport** = ``"chime:StartDataExport"``

Grants permission to submit the "Request attachments" request

See https://docs.aws.amazon.com/chime/latest/ag/request-attachments.html

#### Defined in

actions/chime.ts:1681

___

### StartMeetingTranscription

• **StartMeetingTranscription** = ``"chime:StartMeetingTranscription"``

Grants permission to start transcription for a meeting

See https://docs.aws.amazon.com/chime/latest/APIReference/API_StartMeetingTranscription.html

#### Defined in

actions/chime.ts:1687

___

### StartSpeakerSearchTask

• **StartSpeakerSearchTask** = ``"chime:StartSpeakerSearchTask"``

Grants permission to start a speaker search task on the specified Amazon Chime
resource

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_StartSpeakerSearchTask.html

#### Defined in

actions/chime.ts:1694

___

### StartVoiceToneAnalysisTask

• **StartVoiceToneAnalysisTask** = ``"chime:StartVoiceToneAnalysisTask"``

Grants permission to start a voice tone analysis task on the specified Amazon C
hime resource

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_StartVoiceToneAnalysisTask.html

#### Defined in

actions/chime.ts:1701

___

### StopMeetingTranscription

• **StopMeetingTranscription** = ``"chime:StopMeetingTranscription"``

Grants permission to stop transcription for a meeting

See https://docs.aws.amazon.com/chime/latest/APIReference/API_StopMeetingTranscription.html

#### Defined in

actions/chime.ts:1707

___

### StopSpeakerSearchTask

• **StopSpeakerSearchTask** = ``"chime:StopSpeakerSearchTask"``

Grants permission to stop a speaker search task on the specified Amazon Chime r
esource

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_StopSpeakerSearchTask.html

#### Defined in

actions/chime.ts:1714

___

### StopVoiceToneAnalysisTask

• **StopVoiceToneAnalysisTask** = ``"chime:StopVoiceToneAnalysisTask"``

Grants permission to stop a voice tone analysis task on the specified Amazon Ch
ime resource

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_StopVoiceToneAnalysisTask.html

#### Defined in

actions/chime.ts:1721

___

### SubmitSupportRequest

• **SubmitSupportRequest** = ``"chime:SubmitSupportRequest"``

Grants permission to submit a customer service support request

See https://docs.aws.amazon.com/chime/latest/ag/chime-getting-admin-support.html

#### Defined in

actions/chime.ts:1727

___

### SuspendUsers

• **SuspendUsers** = ``"chime:SuspendUsers"``

Grants permission to suspend users from an Amazon Chime Enterprise account

See https://docs.aws.amazon.com/chime/latest/ag/manage-access.html

#### Defined in

actions/chime.ts:1733

___

### TagAttendee

• **TagAttendee** = ``"chime:TagAttendee"``

Grants permission to apply the specified tags to the specified Amazon Chime SDK
attendee

See https://docs.aws.amazon.com/chime/latest/APIReference/API_TagAttendee.html

#### Defined in

actions/chime.ts:1740

___

### TagMeeting

• **TagMeeting** = ``"chime:TagMeeting"``

Grants permission to apply the specified tags to the specified Amazon Chime SDK
meeting

See https://docs.aws.amazon.com/chime/latest/APIReference/API_TagMeeting.html

#### Defined in

actions/chime.ts:1747

___

### TagResource

• **TagResource** = ``"chime:TagResource"``

Grants permission to apply the specified tags to the specified Amazon Chime res
ource

See https://docs.aws.amazon.com/chime/latest/APIReference/API_TagResource.html

#### Defined in

actions/chime.ts:1754

___

### UnauthorizeDirectory

• **UnauthorizeDirectory** = ``"chime:UnauthorizeDirectory"``

Grants permission to unauthorize an Active Directory from your Amazon Chime Ent
erprise account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1761

___

### UntagAttendee

• **UntagAttendee** = ``"chime:UntagAttendee"``

Grants permission to untag the specified tags from the specified Amazon Chime S
DK attendee

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagAttendee.html

#### Defined in

actions/chime.ts:1768

___

### UntagMeeting

• **UntagMeeting** = ``"chime:UntagMeeting"``

Grants permission to untag the specified tags from the specified Amazon Chime S
DK meeting

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagMeeting.html

#### Defined in

actions/chime.ts:1775

___

### UntagResource

• **UntagResource** = ``"chime:UntagResource"``

Grants permission to untag the specified tags from the specified Amazon Chime r
esource

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagResource.html

#### Defined in

actions/chime.ts:1782

___

### UpdateAccount

• **UpdateAccount** = ``"chime:UpdateAccount"``

Grants permission to update account details for the specified Amazon Chime acco
unt

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAccount.html

#### Defined in

actions/chime.ts:1789

___

### UpdateAccountOpenIdConfig

• **UpdateAccountOpenIdConfig** = ``"chime:UpdateAccountOpenIdConfig"``

Grants permission to update the OpenIdConfig attributes for your Amazon Chime a
ccount

See https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html

#### Defined in

actions/chime.ts:1796

___

### UpdateAccountResource

• **UpdateAccountResource** = ``"chime:UpdateAccountResource"``

Grants permission to update the account resource in your Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1802

___

### UpdateAccountSettings

• **UpdateAccountSettings** = ``"chime:UpdateAccountSettings"``

Grants permission to update the settings for the specified Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAccountSettings.html

#### Defined in

actions/chime.ts:1808

___

### UpdateAppInstance

• **UpdateAppInstance** = ``"chime:UpdateAppInstance"``

Grants permission to update AppInstance metadata

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_UpdateAppInstance.html

#### Defined in

actions/chime.ts:1814

___

### UpdateAppInstanceBot

• **UpdateAppInstanceBot** = ``"chime:UpdateAppInstanceBot"``

Grants permission to update the details for an AppInstanceBot

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_UpdateAppInstanceBot.html

#### Defined in

actions/chime.ts:1820

___

### UpdateAppInstanceUser

• **UpdateAppInstanceUser** = ``"chime:UpdateAppInstanceUser"``

Grants permission to update the details for an AppInstanceUser

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_UpdateAppInstanceUser.html

#### Defined in

actions/chime.ts:1826

___

### UpdateAppInstanceUserEndpoint

• **UpdateAppInstanceUserEndpoint** = ``"chime:UpdateAppInstanceUserEndpoint"``

Grants permission to update an endpoint registered for an app instance user

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_UpdateAppInstanceUserEndpoint.html

#### Defined in

actions/chime.ts:1832

___

### UpdateAttendeeCapabilities

• **UpdateAttendeeCapabilities** = ``"chime:UpdateAttendeeCapabilities"``

Grants permission to the capabilties that you want to update

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_UpdateAttendeeCapabilities.html

#### Defined in

actions/chime.ts:1838

___

### UpdateBot

• **UpdateBot** = ``"chime:UpdateBot"``

Grants permission to update the status of the specified bot

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateBot.html

#### Defined in

actions/chime.ts:1844

___

### UpdateCDRSettings

• **UpdateCDRSettings** = ``"chime:UpdateCDRSettings"``

Grants permission to update your Call Detail Record S3 bucket

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:1850

___

### UpdateChannel

• **UpdateChannel** = ``"chime:UpdateChannel"``

Grants permission to update a channel's attributes

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannel.html

#### Defined in

actions/chime.ts:1856

___

### UpdateChannelFlow

• **UpdateChannelFlow** = ``"chime:UpdateChannelFlow"``

Grants permission to update a channel flow

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannelFlow.html

#### Defined in

actions/chime.ts:1862

___

### UpdateChannelMessage

• **UpdateChannelMessage** = ``"chime:UpdateChannelMessage"``

Grants permission to update the content of a message

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannelMessage.html

#### Defined in

actions/chime.ts:1868

___

### UpdateChannelReadMarker

• **UpdateChannelReadMarker** = ``"chime:UpdateChannelReadMarker"``

Grants permission to set the timestamp to the point when a user last read messa
ges in a channel

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannelReadMarker.html

#### Defined in

actions/chime.ts:1875

___

### UpdateGlobalSettings

• **UpdateGlobalSettings** = ``"chime:UpdateGlobalSettings"``

Grants permission to update the global settings related to Amazon Chime for the
AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateGlobalSettings.html

#### Defined in

actions/chime.ts:1882

___

### UpdateMediaInsightsPipelineConfiguration

• **UpdateMediaInsightsPipelineConfiguration** = ``"chime:UpdateMediaInsightsPipelineConfiguration"``

Grants permission to update the status of a media insights pipeline configurati
on

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_UpdateMediaInsightsPipelineConfiguration.html

#### Defined in

actions/chime.ts:1889

___

### UpdateMediaInsightsPipelineStatus

• **UpdateMediaInsightsPipelineStatus** = ``"chime:UpdateMediaInsightsPipelineStatus"``

Grants permission to update the status of a media insights pipeline

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_UpdateMediaInsightsPipelineStatus.html

#### Defined in

actions/chime.ts:1895

___

### UpdateMediaPipelineKinesisVideoStreamPool

• **UpdateMediaPipelineKinesisVideoStreamPool** = ``"chime:UpdateMediaPipelineKinesisVideoStreamPool"``

Grants permission to update kinesis video stream pool

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_UpdateMediaPipelineKinesisVideoStreamPool.html

#### Defined in

actions/chime.ts:1901

___

### UpdatePhoneNumber

• **UpdatePhoneNumber** = ``"chime:UpdatePhoneNumber"``

Grants permission to update phone number details for the specified phone number

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdatePhoneNumber.html

#### Defined in

actions/chime.ts:1907

___

### UpdatePhoneNumberSettings

• **UpdatePhoneNumberSettings** = ``"chime:UpdatePhoneNumberSettings"``

Grants permission to update phone number settings related to Amazon Chime for t
he AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdatePhoneNumberSettings.html

#### Defined in

actions/chime.ts:1914

___

### UpdateProxySession

• **UpdateProxySession** = ``"chime:UpdateProxySession"``

Grants permission to update a proxy session for the specified Amazon Chime Voic
e Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateProxySession.html

#### Defined in

actions/chime.ts:1921

___

### UpdateRoom

• **UpdateRoom** = ``"chime:UpdateRoom"``

Grants permission to update a room

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateRoom.html

#### Defined in

actions/chime.ts:1927

___

### UpdateRoomMembership

• **UpdateRoomMembership** = ``"chime:UpdateRoomMembership"``

Grants permission to update room membership role

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateRoomMembership.html

#### Defined in

actions/chime.ts:1933

___

### UpdateSipMediaApplication

• **UpdateSipMediaApplication** = ``"chime:UpdateSipMediaApplication"``

Grants permission to update properties of Amazon Chime SIP media application un
der the administrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateSipMediaApplication.html

#### Defined in

actions/chime.ts:1940

___

### UpdateSipMediaApplicationCall

• **UpdateSipMediaApplicationCall** = ``"chime:UpdateSipMediaApplicationCall"``

Grants permission to update an Amazon Chime SIP media application call under th
e administrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateSipMediaApplicationCall.html

#### Defined in

actions/chime.ts:1947

___

### UpdateSipRule

• **UpdateSipRule** = ``"chime:UpdateSipRule"``

Grants permission to update properties of Amazon Chime SIP rule under the admin
istrator's AWS account

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateSipRule.html

#### Defined in

actions/chime.ts:1954

___

### UpdateSupportedLicenses

• **UpdateSupportedLicenses** = ``"chime:UpdateSupportedLicenses"``

Grants permission to update the supported license tiers available for users in
your Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/manage-access.html

#### Defined in

actions/chime.ts:1961

___

### UpdateUser

• **UpdateUser** = ``"chime:UpdateUser"``

Grants permission to update user details for a specified user ID

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateUser.html

#### Defined in

actions/chime.ts:1967

___

### UpdateUserLicenses

• **UpdateUserLicenses** = ``"chime:UpdateUserLicenses"``

Grants permission to update the licenses for your Amazon Chime users

See https://docs.aws.amazon.com/chime/latest/ag/manage-access.html

#### Defined in

actions/chime.ts:1973

___

### UpdateUserSettings

• **UpdateUserSettings** = ``"chime:UpdateUserSettings"``

Grants permission to update user settings related to the specified Amazon Chime
user

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateUserSettings.html

#### Defined in

actions/chime.ts:1980

___

### UpdateVoiceConnector

• **UpdateVoiceConnector** = ``"chime:UpdateVoiceConnector"``

Grants permission to update Amazon Chime Voice Connector details for the specif
ied Amazon Chime Voice Connector

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateVoiceConnector.html

#### Defined in

actions/chime.ts:1987

___

### UpdateVoiceConnectorGroup

• **UpdateVoiceConnectorGroup** = ``"chime:UpdateVoiceConnectorGroup"``

Grants permission to update Amazon Chime Voice Connector Group details for the
specified Amazon Chime Voice Connector Group

See https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateVoiceConnectorGroup.html

#### Defined in

actions/chime.ts:1994

___

### UpdateVoiceProfile

• **UpdateVoiceProfile** = ``"chime:UpdateVoiceProfile"``

Grants permission to update a voice profile

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_UpdateVoiceProfile.html

#### Defined in

actions/chime.ts:2000

___

### UpdateVoiceProfileDomain

• **UpdateVoiceProfileDomain** = ``"chime:UpdateVoiceProfileDomain"``

Grants permission to update a voice profile domain

See https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_UpdateVoiceProfileDomain.html

#### Defined in

actions/chime.ts:2006

___

### ValidateAccountResource

• **ValidateAccountResource** = ``"chime:ValidateAccountResource"``

Grants permission to validate the account resource in your Amazon Chime account

See https://docs.aws.amazon.com/chime/latest/ag/control-access.html

#### Defined in

actions/chime.ts:2012

___

### ValidateE911Address

• **ValidateE911Address** = ``"chime:ValidateE911Address"``

Grants permission to validate an address to be used for 911 calls made with Ama
zon Chime Voice Connectors

See https://docs.aws.amazon.com/chime/latest/APIReference/API_ValidateE911Address.html

#### Defined in

actions/chime.ts:2019
