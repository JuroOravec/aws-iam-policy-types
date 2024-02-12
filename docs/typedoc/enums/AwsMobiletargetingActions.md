[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMobiletargetingActions

# Enumeration: AwsMobiletargetingActions

All IAM policy actions for Amazon Pinpoint (MOBILETARGETING)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpoint.html

2024-02-12T09:58:39.328Z

## Table of contents

### Enumeration Members

- [CreateApp](AwsMobiletargetingActions.md#createapp)
- [CreateCampaign](AwsMobiletargetingActions.md#createcampaign)
- [CreateEmailTemplate](AwsMobiletargetingActions.md#createemailtemplate)
- [CreateExportJob](AwsMobiletargetingActions.md#createexportjob)
- [CreateImportJob](AwsMobiletargetingActions.md#createimportjob)
- [CreateInAppTemplate](AwsMobiletargetingActions.md#createinapptemplate)
- [CreateJourney](AwsMobiletargetingActions.md#createjourney)
- [CreatePushTemplate](AwsMobiletargetingActions.md#createpushtemplate)
- [CreateRecommenderConfiguration](AwsMobiletargetingActions.md#createrecommenderconfiguration)
- [CreateSegment](AwsMobiletargetingActions.md#createsegment)
- [CreateSmsTemplate](AwsMobiletargetingActions.md#createsmstemplate)
- [CreateVoiceTemplate](AwsMobiletargetingActions.md#createvoicetemplate)
- [DeleteAdmChannel](AwsMobiletargetingActions.md#deleteadmchannel)
- [DeleteApnsChannel](AwsMobiletargetingActions.md#deleteapnschannel)
- [DeleteApnsSandboxChannel](AwsMobiletargetingActions.md#deleteapnssandboxchannel)
- [DeleteApnsVoipChannel](AwsMobiletargetingActions.md#deleteapnsvoipchannel)
- [DeleteApnsVoipSandboxChannel](AwsMobiletargetingActions.md#deleteapnsvoipsandboxchannel)
- [DeleteApp](AwsMobiletargetingActions.md#deleteapp)
- [DeleteBaiduChannel](AwsMobiletargetingActions.md#deletebaiduchannel)
- [DeleteCampaign](AwsMobiletargetingActions.md#deletecampaign)
- [DeleteEmailChannel](AwsMobiletargetingActions.md#deleteemailchannel)
- [DeleteEmailTemplate](AwsMobiletargetingActions.md#deleteemailtemplate)
- [DeleteEndpoint](AwsMobiletargetingActions.md#deleteendpoint)
- [DeleteEventStream](AwsMobiletargetingActions.md#deleteeventstream)
- [DeleteGcmChannel](AwsMobiletargetingActions.md#deletegcmchannel)
- [DeleteInAppTemplate](AwsMobiletargetingActions.md#deleteinapptemplate)
- [DeleteJourney](AwsMobiletargetingActions.md#deletejourney)
- [DeletePushTemplate](AwsMobiletargetingActions.md#deletepushtemplate)
- [DeleteRecommenderConfiguration](AwsMobiletargetingActions.md#deleterecommenderconfiguration)
- [DeleteSegment](AwsMobiletargetingActions.md#deletesegment)
- [DeleteSmsChannel](AwsMobiletargetingActions.md#deletesmschannel)
- [DeleteSmsTemplate](AwsMobiletargetingActions.md#deletesmstemplate)
- [DeleteUserEndpoints](AwsMobiletargetingActions.md#deleteuserendpoints)
- [DeleteVoiceChannel](AwsMobiletargetingActions.md#deletevoicechannel)
- [DeleteVoiceTemplate](AwsMobiletargetingActions.md#deletevoicetemplate)
- [GetAdmChannel](AwsMobiletargetingActions.md#getadmchannel)
- [GetApnsChannel](AwsMobiletargetingActions.md#getapnschannel)
- [GetApnsSandboxChannel](AwsMobiletargetingActions.md#getapnssandboxchannel)
- [GetApnsVoipChannel](AwsMobiletargetingActions.md#getapnsvoipchannel)
- [GetApnsVoipSandboxChannel](AwsMobiletargetingActions.md#getapnsvoipsandboxchannel)
- [GetApp](AwsMobiletargetingActions.md#getapp)
- [GetApplicationDateRangeKpi](AwsMobiletargetingActions.md#getapplicationdaterangekpi)
- [GetApplicationSettings](AwsMobiletargetingActions.md#getapplicationsettings)
- [GetApps](AwsMobiletargetingActions.md#getapps)
- [GetBaiduChannel](AwsMobiletargetingActions.md#getbaiduchannel)
- [GetCampaign](AwsMobiletargetingActions.md#getcampaign)
- [GetCampaignActivities](AwsMobiletargetingActions.md#getcampaignactivities)
- [GetCampaignDateRangeKpi](AwsMobiletargetingActions.md#getcampaigndaterangekpi)
- [GetCampaignVersion](AwsMobiletargetingActions.md#getcampaignversion)
- [GetCampaignVersions](AwsMobiletargetingActions.md#getcampaignversions)
- [GetCampaigns](AwsMobiletargetingActions.md#getcampaigns)
- [GetChannels](AwsMobiletargetingActions.md#getchannels)
- [GetEmailChannel](AwsMobiletargetingActions.md#getemailchannel)
- [GetEmailTemplate](AwsMobiletargetingActions.md#getemailtemplate)
- [GetEndpoint](AwsMobiletargetingActions.md#getendpoint)
- [GetEventStream](AwsMobiletargetingActions.md#geteventstream)
- [GetExportJob](AwsMobiletargetingActions.md#getexportjob)
- [GetExportJobs](AwsMobiletargetingActions.md#getexportjobs)
- [GetGcmChannel](AwsMobiletargetingActions.md#getgcmchannel)
- [GetImportJob](AwsMobiletargetingActions.md#getimportjob)
- [GetImportJobs](AwsMobiletargetingActions.md#getimportjobs)
- [GetInAppMessages](AwsMobiletargetingActions.md#getinappmessages)
- [GetInAppTemplate](AwsMobiletargetingActions.md#getinapptemplate)
- [GetJourney](AwsMobiletargetingActions.md#getjourney)
- [GetJourneyDateRangeKpi](AwsMobiletargetingActions.md#getjourneydaterangekpi)
- [GetJourneyExecutionActivityMetrics](AwsMobiletargetingActions.md#getjourneyexecutionactivitymetrics)
- [GetJourneyExecutionMetrics](AwsMobiletargetingActions.md#getjourneyexecutionmetrics)
- [GetJourneyRunExecutionActivityMetrics](AwsMobiletargetingActions.md#getjourneyrunexecutionactivitymetrics)
- [GetJourneyRunExecutionMetrics](AwsMobiletargetingActions.md#getjourneyrunexecutionmetrics)
- [GetJourneyRuns](AwsMobiletargetingActions.md#getjourneyruns)
- [GetPushTemplate](AwsMobiletargetingActions.md#getpushtemplate)
- [GetRecommenderConfiguration](AwsMobiletargetingActions.md#getrecommenderconfiguration)
- [GetRecommenderConfigurations](AwsMobiletargetingActions.md#getrecommenderconfigurations)
- [GetReports](AwsMobiletargetingActions.md#getreports)
- [GetSegment](AwsMobiletargetingActions.md#getsegment)
- [GetSegmentExportJobs](AwsMobiletargetingActions.md#getsegmentexportjobs)
- [GetSegmentImportJobs](AwsMobiletargetingActions.md#getsegmentimportjobs)
- [GetSegmentVersion](AwsMobiletargetingActions.md#getsegmentversion)
- [GetSegmentVersions](AwsMobiletargetingActions.md#getsegmentversions)
- [GetSegments](AwsMobiletargetingActions.md#getsegments)
- [GetSmsChannel](AwsMobiletargetingActions.md#getsmschannel)
- [GetSmsTemplate](AwsMobiletargetingActions.md#getsmstemplate)
- [GetUserEndpoints](AwsMobiletargetingActions.md#getuserendpoints)
- [GetVoiceChannel](AwsMobiletargetingActions.md#getvoicechannel)
- [GetVoiceTemplate](AwsMobiletargetingActions.md#getvoicetemplate)
- [ListJourneys](AwsMobiletargetingActions.md#listjourneys)
- [ListTagsForResource](AwsMobiletargetingActions.md#listtagsforresource)
- [ListTemplateVersions](AwsMobiletargetingActions.md#listtemplateversions)
- [ListTemplates](AwsMobiletargetingActions.md#listtemplates)
- [PhoneNumberValidate](AwsMobiletargetingActions.md#phonenumbervalidate)
- [PutEventStream](AwsMobiletargetingActions.md#puteventstream)
- [PutEvents](AwsMobiletargetingActions.md#putevents)
- [RemoveAttributes](AwsMobiletargetingActions.md#removeattributes)
- [SendMessages](AwsMobiletargetingActions.md#sendmessages)
- [SendOTPMessage](AwsMobiletargetingActions.md#sendotpmessage)
- [SendUsersMessages](AwsMobiletargetingActions.md#sendusersmessages)
- [TagResource](AwsMobiletargetingActions.md#tagresource)
- [UntagResource](AwsMobiletargetingActions.md#untagresource)
- [UpdateAdmChannel](AwsMobiletargetingActions.md#updateadmchannel)
- [UpdateApnsChannel](AwsMobiletargetingActions.md#updateapnschannel)
- [UpdateApnsSandboxChannel](AwsMobiletargetingActions.md#updateapnssandboxchannel)
- [UpdateApnsVoipChannel](AwsMobiletargetingActions.md#updateapnsvoipchannel)
- [UpdateApnsVoipSandboxChannel](AwsMobiletargetingActions.md#updateapnsvoipsandboxchannel)
- [UpdateApplicationSettings](AwsMobiletargetingActions.md#updateapplicationsettings)
- [UpdateBaiduChannel](AwsMobiletargetingActions.md#updatebaiduchannel)
- [UpdateCampaign](AwsMobiletargetingActions.md#updatecampaign)
- [UpdateEmailChannel](AwsMobiletargetingActions.md#updateemailchannel)
- [UpdateEmailTemplate](AwsMobiletargetingActions.md#updateemailtemplate)
- [UpdateEndpoint](AwsMobiletargetingActions.md#updateendpoint)
- [UpdateEndpointsBatch](AwsMobiletargetingActions.md#updateendpointsbatch)
- [UpdateGcmChannel](AwsMobiletargetingActions.md#updategcmchannel)
- [UpdateInAppTemplate](AwsMobiletargetingActions.md#updateinapptemplate)
- [UpdateJourney](AwsMobiletargetingActions.md#updatejourney)
- [UpdateJourneyState](AwsMobiletargetingActions.md#updatejourneystate)
- [UpdatePushTemplate](AwsMobiletargetingActions.md#updatepushtemplate)
- [UpdateRecommenderConfiguration](AwsMobiletargetingActions.md#updaterecommenderconfiguration)
- [UpdateSegment](AwsMobiletargetingActions.md#updatesegment)
- [UpdateSmsChannel](AwsMobiletargetingActions.md#updatesmschannel)
- [UpdateSmsTemplate](AwsMobiletargetingActions.md#updatesmstemplate)
- [UpdateTemplateActiveVersion](AwsMobiletargetingActions.md#updatetemplateactiveversion)
- [UpdateVoiceChannel](AwsMobiletargetingActions.md#updatevoicechannel)
- [UpdateVoiceTemplate](AwsMobiletargetingActions.md#updatevoicetemplate)
- [VerifyOTPMessage](AwsMobiletargetingActions.md#verifyotpmessage)

## Enumeration Members

### CreateApp

• **CreateApp** = ``"mobiletargeting:CreateApp"``

Grants permission to create an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps.html#CreateApp

#### Defined in

actions/mobiletargeting.ts:17

___

### CreateCampaign

• **CreateCampaign** = ``"mobiletargeting:CreateCampaign"``

Grants permission to create a campaign for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns.html#CreateCampaign

#### Defined in

actions/mobiletargeting.ts:23

___

### CreateEmailTemplate

• **CreateEmailTemplate** = ``"mobiletargeting:CreateEmailTemplate"``

Grants permission to create an email template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#CreateEmailTemplate

#### Defined in

actions/mobiletargeting.ts:29

___

### CreateExportJob

• **CreateExportJob** = ``"mobiletargeting:CreateExportJob"``

Grants permission to create an export job that exports endpoint definitions to
Amazon S3

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-export.html#CreateExportJob

#### Defined in

actions/mobiletargeting.ts:36

___

### CreateImportJob

• **CreateImportJob** = ``"mobiletargeting:CreateImportJob"``

Grants permission to import endpoint definitions from to create a segment

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-import.html#CreateImportJob

#### Defined in

actions/mobiletargeting.ts:42

___

### CreateInAppTemplate

• **CreateInAppTemplate** = ``"mobiletargeting:CreateInAppTemplate"``

Grants permission to create an in-app message template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#CreateInAppTemplate

#### Defined in

actions/mobiletargeting.ts:48

___

### CreateJourney

• **CreateJourney** = ``"mobiletargeting:CreateJourney"``

Grants permission to create a Journey for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#CreateJourney

#### Defined in

actions/mobiletargeting.ts:54

___

### CreatePushTemplate

• **CreatePushTemplate** = ``"mobiletargeting:CreatePushTemplate"``

Grants permission to create a push notification template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#CreatePushTemplate

#### Defined in

actions/mobiletargeting.ts:60

___

### CreateRecommenderConfiguration

• **CreateRecommenderConfiguration** = ``"mobiletargeting:CreateRecommenderConfiguration"``

Grants permission to create an Amazon Pinpoint configuration for a recommender
model

See https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#CreateRecommenderConfiguration

#### Defined in

actions/mobiletargeting.ts:67

___

### CreateSegment

• **CreateSegment** = ``"mobiletargeting:CreateSegment"``

Grants permission to create a segment that is based on endpoint data reported t
o Pinpoint by your app. To allow a user to create a segment by importing endpoi
nt data from outside of Pinpoint, allow the mobiletargeting:CreateImportJob act
ion

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments.html#CreateSegment

#### Defined in

actions/mobiletargeting.ts:76

___

### CreateSmsTemplate

• **CreateSmsTemplate** = ``"mobiletargeting:CreateSmsTemplate"``

Grants permission to create an sms message template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#CreateSmsTemplate

#### Defined in

actions/mobiletargeting.ts:82

___

### CreateVoiceTemplate

• **CreateVoiceTemplate** = ``"mobiletargeting:CreateVoiceTemplate"``

Grants permission to create a voice message template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#CreateVoiceTemplate

#### Defined in

actions/mobiletargeting.ts:88

___

### DeleteAdmChannel

• **DeleteAdmChannel** = ``"mobiletargeting:DeleteAdmChannel"``

Grants permission to delete the ADM channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-adm.html#DeleteAdmChannel

#### Defined in

actions/mobiletargeting.ts:94

___

### DeleteApnsChannel

• **DeleteApnsChannel** = ``"mobiletargeting:DeleteApnsChannel"``

Grants permission to delete the APNs channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns.html#DeleteApnsChannel

#### Defined in

actions/mobiletargeting.ts:100

___

### DeleteApnsSandboxChannel

• **DeleteApnsSandboxChannel** = ``"mobiletargeting:DeleteApnsSandboxChannel"``

Grants permission to delete the APNs sandbox channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_sandbox.html#DeleteApnsSandboxChannel

#### Defined in

actions/mobiletargeting.ts:106

___

### DeleteApnsVoipChannel

• **DeleteApnsVoipChannel** = ``"mobiletargeting:DeleteApnsVoipChannel"``

Grants permission to delete the APNs VoIP channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip.html#DeleteApnsVoipChannel

#### Defined in

actions/mobiletargeting.ts:112

___

### DeleteApnsVoipSandboxChannel

• **DeleteApnsVoipSandboxChannel** = ``"mobiletargeting:DeleteApnsVoipSandboxChannel"``

Grants permission to delete the APNs VoIP sandbox channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip_sandbox.html#DeleteApnsVoipSandboxChannel

#### Defined in

actions/mobiletargeting.ts:118

___

### DeleteApp

• **DeleteApp** = ``"mobiletargeting:DeleteApp"``

Grants permission to delete a specific campaign

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id.html#DeleteApp

#### Defined in

actions/mobiletargeting.ts:124

___

### DeleteBaiduChannel

• **DeleteBaiduChannel** = ``"mobiletargeting:DeleteBaiduChannel"``

Grants permission to delete the Baidu channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-baidu.html#DeleteBaiduChannel

#### Defined in

actions/mobiletargeting.ts:130

___

### DeleteCampaign

• **DeleteCampaign** = ``"mobiletargeting:DeleteCampaign"``

Grants permission to delete a specific campaign

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#DeleteCampaign

#### Defined in

actions/mobiletargeting.ts:136

___

### DeleteEmailChannel

• **DeleteEmailChannel** = ``"mobiletargeting:DeleteEmailChannel"``

Grants permission to delete the email channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-email.html#DeleteEmailChannel

#### Defined in

actions/mobiletargeting.ts:142

___

### DeleteEmailTemplate

• **DeleteEmailTemplate** = ``"mobiletargeting:DeleteEmailTemplate"``

Grants permission to delete an email template or an email template version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#DeleteEmailTemplate

#### Defined in

actions/mobiletargeting.ts:148

___

### DeleteEndpoint

• **DeleteEndpoint** = ``"mobiletargeting:DeleteEndpoint"``

Grants permission to delete an endpoint

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html#DeleteEndpoint

#### Defined in

actions/mobiletargeting.ts:154

___

### DeleteEventStream

• **DeleteEventStream** = ``"mobiletargeting:DeleteEventStream"``

Grants permission to delete the event stream for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-eventstream.html#DeleteEventStream

#### Defined in

actions/mobiletargeting.ts:160

___

### DeleteGcmChannel

• **DeleteGcmChannel** = ``"mobiletargeting:DeleteGcmChannel"``

Grants permission to delete the GCM channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-gcm.html#DeleteGcmChannel

#### Defined in

actions/mobiletargeting.ts:166

___

### DeleteInAppTemplate

• **DeleteInAppTemplate** = ``"mobiletargeting:DeleteInAppTemplate"``

Grants permission to delete an in-app message template or an in-app message tem
plate version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#DeleteInAppTemplate

#### Defined in

actions/mobiletargeting.ts:173

___

### DeleteJourney

• **DeleteJourney** = ``"mobiletargeting:DeleteJourney"``

Grants permission to delete a specific journey

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#DeleteJourney

#### Defined in

actions/mobiletargeting.ts:179

___

### DeletePushTemplate

• **DeletePushTemplate** = ``"mobiletargeting:DeletePushTemplate"``

Grants permission to delete a push notification template or a push notification
template version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#DeletePushTemplate

#### Defined in

actions/mobiletargeting.ts:186

___

### DeleteRecommenderConfiguration

• **DeleteRecommenderConfiguration** = ``"mobiletargeting:DeleteRecommenderConfiguration"``

Grants permission to delete an Amazon Pinpoint configuration for a recommender
model

See https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#DeleteRecommenderConfiguration

#### Defined in

actions/mobiletargeting.ts:193

___

### DeleteSegment

• **DeleteSegment** = ``"mobiletargeting:DeleteSegment"``

Grants permission to delete a specific segment

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id.html#DeleteSegment

#### Defined in

actions/mobiletargeting.ts:199

___

### DeleteSmsChannel

• **DeleteSmsChannel** = ``"mobiletargeting:DeleteSmsChannel"``

Grants permission to delete the SMS channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-sms.html#DeleteSmsChannel

#### Defined in

actions/mobiletargeting.ts:205

___

### DeleteSmsTemplate

• **DeleteSmsTemplate** = ``"mobiletargeting:DeleteSmsTemplate"``

Grants permission to delete an sms message template or an sms message template
version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#DeleteSmsTemplate

#### Defined in

actions/mobiletargeting.ts:212

___

### DeleteUserEndpoints

• **DeleteUserEndpoints** = ``"mobiletargeting:DeleteUserEndpoints"``

Grants permission to delete all of the endpoints that are associated with a use
r ID

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-users-user-id.html#DeleteUserEndpoints

#### Defined in

actions/mobiletargeting.ts:219

___

### DeleteVoiceChannel

• **DeleteVoiceChannel** = ``"mobiletargeting:DeleteVoiceChannel"``

Grants permission to delete the Voice channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-voice.html#DeleteVoiceChannel

#### Defined in

actions/mobiletargeting.ts:225

___

### DeleteVoiceTemplate

• **DeleteVoiceTemplate** = ``"mobiletargeting:DeleteVoiceTemplate"``

Grants permission to delete a voice message template or a voice message templat
e version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#DeleteVoiceTemplate

#### Defined in

actions/mobiletargeting.ts:232

___

### GetAdmChannel

• **GetAdmChannel** = ``"mobiletargeting:GetAdmChannel"``

Grants permission to retrieve information about the Amazon Device Messaging (AD
M) channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-adm.html#GetAdmChannel

#### Defined in

actions/mobiletargeting.ts:239

___

### GetApnsChannel

• **GetApnsChannel** = ``"mobiletargeting:GetApnsChannel"``

Grants permission to retrieve information about the APNs channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns.html#GetApnsChannel

#### Defined in

actions/mobiletargeting.ts:245

___

### GetApnsSandboxChannel

• **GetApnsSandboxChannel** = ``"mobiletargeting:GetApnsSandboxChannel"``

Grants permission to retrieve information about the APNs sandbox channel for an
app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_sandbox.html#GetApnsSandboxChannel

#### Defined in

actions/mobiletargeting.ts:252

___

### GetApnsVoipChannel

• **GetApnsVoipChannel** = ``"mobiletargeting:GetApnsVoipChannel"``

Grants permission to retrieve information about the APNs VoIP channel for an ap
p

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip.html#GetApnsVoipChannel

#### Defined in

actions/mobiletargeting.ts:259

___

### GetApnsVoipSandboxChannel

• **GetApnsVoipSandboxChannel** = ``"mobiletargeting:GetApnsVoipSandboxChannel"``

Grants permission to retrieve information about the APNs VoIP sandbox channel f
or an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip_sandbox.html#GetApnsVoipSandboxChannel

#### Defined in

actions/mobiletargeting.ts:266

___

### GetApp

• **GetApp** = ``"mobiletargeting:GetApp"``

Grants permission to retrieve information about a specific app in your Amazon P
inpoint account

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id.html#GetApp

#### Defined in

actions/mobiletargeting.ts:273

___

### GetApplicationDateRangeKpi

• **GetApplicationDateRangeKpi** = ``"mobiletargeting:GetApplicationDateRangeKpi"``

Grants permission to retrieve (queries) pre-aggregated data for a standard metr
ic that applies to an application

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-kpis-daterange-kpi-name.html#GetApplicationDateRangeKpi

#### Defined in

actions/mobiletargeting.ts:280

___

### GetApplicationSettings

• **GetApplicationSettings** = ``"mobiletargeting:GetApplicationSettings"``

Grants permission to retrieve the default settings for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-settings.html#GetApplicationSettings

#### Defined in

actions/mobiletargeting.ts:286

___

### GetApps

• **GetApps** = ``"mobiletargeting:GetApps"``

Grants permission to retrieve a list of apps in your Amazon Pinpoint account

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps.html#GetApps

#### Defined in

actions/mobiletargeting.ts:292

___

### GetBaiduChannel

• **GetBaiduChannel** = ``"mobiletargeting:GetBaiduChannel"``

Grants permission to retrieve information about the Baidu channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-baidu.html#GetBaiduChannel

#### Defined in

actions/mobiletargeting.ts:298

___

### GetCampaign

• **GetCampaign** = ``"mobiletargeting:GetCampaign"``

Grants permission to retrieve information about a specific campaign

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#GetCampaign

#### Defined in

actions/mobiletargeting.ts:304

___

### GetCampaignActivities

• **GetCampaignActivities** = ``"mobiletargeting:GetCampaignActivities"``

Grants permission to retrieve information about the activities performed by a c
ampaign

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-activities.html#GetCampaignActivities

#### Defined in

actions/mobiletargeting.ts:311

___

### GetCampaignDateRangeKpi

• **GetCampaignDateRangeKpi** = ``"mobiletargeting:GetCampaignDateRangeKpi"``

Grants permission to retrieve (queries) pre-aggregated data for a standard metr
ic that applies to a campaign

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-kpis-daterange-kpi-name.html#GetCampaignDateRangeKpi

#### Defined in

actions/mobiletargeting.ts:318

___

### GetCampaignVersion

• **GetCampaignVersion** = ``"mobiletargeting:GetCampaignVersion"``

Grants permission to retrieve information about a specific campaign version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-versions-version.html#GetCampaignVersion

#### Defined in

actions/mobiletargeting.ts:324

___

### GetCampaignVersions

• **GetCampaignVersions** = ``"mobiletargeting:GetCampaignVersions"``

Grants permission to retrieve information about the current and prior versions
of a campaign

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-versions.html#GetCampaignVersions

#### Defined in

actions/mobiletargeting.ts:331

___

### GetCampaigns

• **GetCampaigns** = ``"mobiletargeting:GetCampaigns"``

Grants permission to retrieve information about all campaigns for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns.html#GetCampaigns

#### Defined in

actions/mobiletargeting.ts:337

___

### GetChannels

• **GetChannels** = ``"mobiletargeting:GetChannels"``

Grants permission to get all channels information for your app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels.html#GetChannels

#### Defined in

actions/mobiletargeting.ts:343

___

### GetEmailChannel

• **GetEmailChannel** = ``"mobiletargeting:GetEmailChannel"``

Grants permission to obtain information about the email channel in an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-email.html#GetEmailChannel

#### Defined in

actions/mobiletargeting.ts:349

___

### GetEmailTemplate

• **GetEmailTemplate** = ``"mobiletargeting:GetEmailTemplate"``

Grants permission to retrieve information about a specific or the active versio
n of an email template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#GetEmailTemplate

#### Defined in

actions/mobiletargeting.ts:356

___

### GetEndpoint

• **GetEndpoint** = ``"mobiletargeting:GetEndpoint"``

Grants permission to retrieve information about a specific endpoint

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html#GetEndpoint

#### Defined in

actions/mobiletargeting.ts:362

___

### GetEventStream

• **GetEventStream** = ``"mobiletargeting:GetEventStream"``

Grants permission to retrieve information about the event stream for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-eventstream.html#GetEventStream

#### Defined in

actions/mobiletargeting.ts:368

___

### GetExportJob

• **GetExportJob** = ``"mobiletargeting:GetExportJob"``

Grants permission to obtain information about a specific export job

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-export-job-id.html#GetExportJob

#### Defined in

actions/mobiletargeting.ts:374

___

### GetExportJobs

• **GetExportJobs** = ``"mobiletargeting:GetExportJobs"``

Grants permission to retrieve a list of all of the export jobs for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-export.html#GetExportJobs

#### Defined in

actions/mobiletargeting.ts:380

___

### GetGcmChannel

• **GetGcmChannel** = ``"mobiletargeting:GetGcmChannel"``

Grants permission to retrieve information about the GCM channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-gcm.html#GetGcmChannel

#### Defined in

actions/mobiletargeting.ts:386

___

### GetImportJob

• **GetImportJob** = ``"mobiletargeting:GetImportJob"``

Grants permission to retrieve information about a specific import job

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-import-job-id.html#GetImportJob

#### Defined in

actions/mobiletargeting.ts:392

___

### GetImportJobs

• **GetImportJobs** = ``"mobiletargeting:GetImportJobs"``

Grants permission to retrieve information about all import jobs for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-import.html#GetImportJobs

#### Defined in

actions/mobiletargeting.ts:398

___

### GetInAppMessages

• **GetInAppMessages** = ``"mobiletargeting:GetInAppMessages"``

Grants permission to retrive in-app messages for the given endpoint id

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id-inappmessages.html#GetInAppMessages

#### Defined in

actions/mobiletargeting.ts:404

___

### GetInAppTemplate

• **GetInAppTemplate** = ``"mobiletargeting:GetInAppTemplate"``

Grants permission to retrieve information about a specific or the active versio
n of an in-app message template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#GetInAppTemplate

#### Defined in

actions/mobiletargeting.ts:411

___

### GetJourney

• **GetJourney** = ``"mobiletargeting:GetJourney"``

Grants permission to retrieve information about a specific journey

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#GetJourney

#### Defined in

actions/mobiletargeting.ts:417

___

### GetJourneyDateRangeKpi

• **GetJourneyDateRangeKpi** = ``"mobiletargeting:GetJourneyDateRangeKpi"``

Grants permission to retrieve (queries) pre-aggregated data for a standard enga
gement metric that applies to a journey

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-kpis-daterange-kpi-name.html#GetJourneyDateRangeKpi

#### Defined in

actions/mobiletargeting.ts:424

___

### GetJourneyExecutionActivityMetrics

• **GetJourneyExecutionActivityMetrics** = ``"mobiletargeting:GetJourneyExecutionActivityMetrics"``

Grants permission to retrieve (queries) pre-aggregated data for a standard exec
ution metric that applies to a journey activity

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-activities-journey-activity-id-execution-metrics.html#GetJourneyExecutionActivityMetrics

#### Defined in

actions/mobiletargeting.ts:431

___

### GetJourneyExecutionMetrics

• **GetJourneyExecutionMetrics** = ``"mobiletargeting:GetJourneyExecutionMetrics"``

Grants permission to retrieve (queries) pre-aggregated data for a standard exec
ution metric that applies to a journey

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-execution-metrics.html#GetJourneyExecutionMetrics

#### Defined in

actions/mobiletargeting.ts:438

___

### GetJourneyRunExecutionActivityMetrics

• **GetJourneyRunExecutionActivityMetrics** = ``"mobiletargeting:GetJourneyRunExecutionActivityMetrics"``

Grants permission to retrieve (queries) pre-aggregated data for a standard exec
ution metric that applies to a journey activity for a single journey run

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-runs-run-id-activities-journey-activity-id-execution-metrics.html#GetJourneyRunExecutionActivityMetrics

#### Defined in

actions/mobiletargeting.ts:445

___

### GetJourneyRunExecutionMetrics

• **GetJourneyRunExecutionMetrics** = ``"mobiletargeting:GetJourneyRunExecutionMetrics"``

Grants permission to retrieve (queries) pre-aggregated data for a standard exec
ution metric that applies to a journey for a single journey run

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-runs-run-id-execution-metrics.html#GetJourneyRunExecutionMetrics

#### Defined in

actions/mobiletargeting.ts:452

___

### GetJourneyRuns

• **GetJourneyRuns** = ``"mobiletargeting:GetJourneyRuns"``

Grants permission to retrieve information about all journey runs for a journey

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-runs.html

#### Defined in

actions/mobiletargeting.ts:458

___

### GetPushTemplate

• **GetPushTemplate** = ``"mobiletargeting:GetPushTemplate"``

Grants permission to retrieve information about a specific or the active versio
n of an push notification template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#GetPushTemplate

#### Defined in

actions/mobiletargeting.ts:465

___

### GetRecommenderConfiguration

• **GetRecommenderConfiguration** = ``"mobiletargeting:GetRecommenderConfiguration"``

Grants permission to retrieve information about an Amazon Pinpoint configuratio
n for a recommender model

See https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#GetRecommenderConfiguration

#### Defined in

actions/mobiletargeting.ts:472

___

### GetRecommenderConfigurations

• **GetRecommenderConfigurations** = ``"mobiletargeting:GetRecommenderConfigurations"``

Grants permission to retrieve information about all the recommender model confi
gurations that are associated with an Amazon Pinpoint account

See https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#GetRecommenderConfigurations

#### Defined in

actions/mobiletargeting.ts:479

___

### GetReports

• **GetReports** = ``"mobiletargeting:GetReports"``

Grants permission to mobiletargeting:GetReports

See ${UserGuideDocPage}/permissions-actions.html

#### Defined in

actions/mobiletargeting.ts:485

___

### GetSegment

• **GetSegment** = ``"mobiletargeting:GetSegment"``

Grants permission to retrieve information about a specific segment

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id.html#GetSegment

#### Defined in

actions/mobiletargeting.ts:491

___

### GetSegmentExportJobs

• **GetSegmentExportJobs** = ``"mobiletargeting:GetSegmentExportJobs"``

Grants permission to retrieve information about jobs that export endpoint defin
itions from segments to Amazon S3

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-jobs-export.html#GetSegmentExportJobs

#### Defined in

actions/mobiletargeting.ts:498

___

### GetSegmentImportJobs

• **GetSegmentImportJobs** = ``"mobiletargeting:GetSegmentImportJobs"``

Grants permission to retrieve information about jobs that create segments by im
porting endpoint definitions from

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-jobs-import.html#GetSegmentImportJobs

#### Defined in

actions/mobiletargeting.ts:505

___

### GetSegmentVersion

• **GetSegmentVersion** = ``"mobiletargeting:GetSegmentVersion"``

Grants permission to retrieve information about a specific segment version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-versions-version.html#GetSegmentVersion

#### Defined in

actions/mobiletargeting.ts:511

___

### GetSegmentVersions

• **GetSegmentVersions** = ``"mobiletargeting:GetSegmentVersions"``

Grants permission to retrieve information about the current and prior versions
of a segment

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-versions.html#GetSegmentVersions

#### Defined in

actions/mobiletargeting.ts:518

___

### GetSegments

• **GetSegments** = ``"mobiletargeting:GetSegments"``

Grants permission to retrieve information about the segments for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments.html#GetSegments

#### Defined in

actions/mobiletargeting.ts:524

___

### GetSmsChannel

• **GetSmsChannel** = ``"mobiletargeting:GetSmsChannel"``

Grants permission to obtain information about the SMS channel in an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-sms.html#GetSmsChannel

#### Defined in

actions/mobiletargeting.ts:530

___

### GetSmsTemplate

• **GetSmsTemplate** = ``"mobiletargeting:GetSmsTemplate"``

Grants permission to retrieve information about a specific or the active versio
n of an sms message template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#GetSmsTemplate

#### Defined in

actions/mobiletargeting.ts:537

___

### GetUserEndpoints

• **GetUserEndpoints** = ``"mobiletargeting:GetUserEndpoints"``

Grants permission to retrieve information about the endpoints that are associat
ed with a user ID

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-users-user-id.html#GetUserEndpoints

#### Defined in

actions/mobiletargeting.ts:544

___

### GetVoiceChannel

• **GetVoiceChannel** = ``"mobiletargeting:GetVoiceChannel"``

Grants permission to obtain information about the Voice channel in an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-voice.html#GetVoiceChannel

#### Defined in

actions/mobiletargeting.ts:550

___

### GetVoiceTemplate

• **GetVoiceTemplate** = ``"mobiletargeting:GetVoiceTemplate"``

Grants permission to retrieve information about a specific or the active versio
n of a voice message template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#GetVoiceTemplate

#### Defined in

actions/mobiletargeting.ts:557

___

### ListJourneys

• **ListJourneys** = ``"mobiletargeting:ListJourneys"``

Grants permission to retrieve information about all journeys for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#ListJourneys

#### Defined in

actions/mobiletargeting.ts:563

___

### ListTagsForResource

• **ListTagsForResource** = ``"mobiletargeting:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html#ListTagsForResource

#### Defined in

actions/mobiletargeting.ts:569

___

### ListTemplateVersions

• **ListTemplateVersions** = ``"mobiletargeting:ListTemplateVersions"``

Grants permission to retrieve all versions about a specific template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#ListTemplateVersions

#### Defined in

actions/mobiletargeting.ts:575

___

### ListTemplates

• **ListTemplates** = ``"mobiletargeting:ListTemplates"``

Grants permission to retrieve metadata about the queried templates

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html#ListTemplates

#### Defined in

actions/mobiletargeting.ts:581

___

### PhoneNumberValidate

• **PhoneNumberValidate** = ``"mobiletargeting:PhoneNumberValidate"``

Grants permission to obtain metadata for a phone number, such as the number typ
e (mobile, landline, or VoIP), location, and provider

See https://docs.aws.amazon.com/pinpoint/latest/apireference/phone-number-validate.html#PhoneNumberValidate

#### Defined in

actions/mobiletargeting.ts:588

___

### PutEventStream

• **PutEventStream** = ``"mobiletargeting:PutEventStream"``

Grants permission to create or update an event stream for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-eventstream.html#PutEventStream

#### Defined in

actions/mobiletargeting.ts:594

___

### PutEvents

• **PutEvents** = ``"mobiletargeting:PutEvents"``

Grants permission to create or update events for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-events.html#PutEvents

#### Defined in

actions/mobiletargeting.ts:600

___

### RemoveAttributes

• **RemoveAttributes** = ``"mobiletargeting:RemoveAttributes"``

Grants permission to remove the attributes for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-attributes-attribute-type.html#RemoveAttributes

#### Defined in

actions/mobiletargeting.ts:606

___

### SendMessages

• **SendMessages** = ``"mobiletargeting:SendMessages"``

Grants permission to send an SMS message or push notification to specific endpo
ints

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#SendMessages

#### Defined in

actions/mobiletargeting.ts:613

___

### SendOTPMessage

• **SendOTPMessage** = ``"mobiletargeting:SendOTPMessage"``

Grants permission to send an OTP code to a user of your application

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-otp.html#SendOTPMessage

#### Defined in

actions/mobiletargeting.ts:619

___

### SendUsersMessages

• **SendUsersMessages** = ``"mobiletargeting:SendUsersMessages"``

Grants permission to send an SMS message or push notification to all endpoints
that are associated with a specific user ID

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-users-messages.html#SendUsersMessages

#### Defined in

actions/mobiletargeting.ts:626

___

### TagResource

• **TagResource** = ``"mobiletargeting:TagResource"``

Grants permission to add tags to a resource

See https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html#TagResource

#### Defined in

actions/mobiletargeting.ts:632

___

### UntagResource

• **UntagResource** = ``"mobiletargeting:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html#UntagResource

#### Defined in

actions/mobiletargeting.ts:638

___

### UpdateAdmChannel

• **UpdateAdmChannel** = ``"mobiletargeting:UpdateAdmChannel"``

Grants permission to update the Amazon Device Messaging (ADM) channel for an ap
p

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-adm.html#UpdateAdmChannel

#### Defined in

actions/mobiletargeting.ts:645

___

### UpdateApnsChannel

• **UpdateApnsChannel** = ``"mobiletargeting:UpdateApnsChannel"``

Grants permission to update the Apple Push Notification service (APNs) channel
for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns.html#UpdateApnsChannel

#### Defined in

actions/mobiletargeting.ts:652

___

### UpdateApnsSandboxChannel

• **UpdateApnsSandboxChannel** = ``"mobiletargeting:UpdateApnsSandboxChannel"``

Grants permission to update the Apple Push Notification service (APNs) sandbox
channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_sandbox.html#UpdateApnsSandboxChannel

#### Defined in

actions/mobiletargeting.ts:659

___

### UpdateApnsVoipChannel

• **UpdateApnsVoipChannel** = ``"mobiletargeting:UpdateApnsVoipChannel"``

Grants permission to update the Apple Push Notification service (APNs) VoIP cha
nnel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip.html#UpdateApnsVoipChannel

#### Defined in

actions/mobiletargeting.ts:666

___

### UpdateApnsVoipSandboxChannel

• **UpdateApnsVoipSandboxChannel** = ``"mobiletargeting:UpdateApnsVoipSandboxChannel"``

Grants permission to update the Apple Push Notification service (APNs) VoIP san
dbox channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip_sandbox.html#UpdateApnsVoipSandboxChannel

#### Defined in

actions/mobiletargeting.ts:673

___

### UpdateApplicationSettings

• **UpdateApplicationSettings** = ``"mobiletargeting:UpdateApplicationSettings"``

Grants permission to update the default settings for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-settings.html#UpdateApplicationSettings

#### Defined in

actions/mobiletargeting.ts:679

___

### UpdateBaiduChannel

• **UpdateBaiduChannel** = ``"mobiletargeting:UpdateBaiduChannel"``

Grants permission to update the Baidu channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-baidu.html#UpdateBaiduChannel

#### Defined in

actions/mobiletargeting.ts:685

___

### UpdateCampaign

• **UpdateCampaign** = ``"mobiletargeting:UpdateCampaign"``

Grants permission to update a specific campaign

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#UpdateCampaign

#### Defined in

actions/mobiletargeting.ts:691

___

### UpdateEmailChannel

• **UpdateEmailChannel** = ``"mobiletargeting:UpdateEmailChannel"``

Grants permission to update the email channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-email.html#UpdateEmailChannel

#### Defined in

actions/mobiletargeting.ts:697

___

### UpdateEmailTemplate

• **UpdateEmailTemplate** = ``"mobiletargeting:UpdateEmailTemplate"``

Grants permission to update a specific email template under the same version or
generate a new version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#UpdateEmailTemplate

#### Defined in

actions/mobiletargeting.ts:704

___

### UpdateEndpoint

• **UpdateEndpoint** = ``"mobiletargeting:UpdateEndpoint"``

Grants permission to create an endpoint or update the information for an endpoi
nt

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html#UpdateEndpoint

#### Defined in

actions/mobiletargeting.ts:711

___

### UpdateEndpointsBatch

• **UpdateEndpointsBatch** = ``"mobiletargeting:UpdateEndpointsBatch"``

Grants permission to create or update endpoints as a batch operation

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints.html#UpdateEndpointsBatch

#### Defined in

actions/mobiletargeting.ts:717

___

### UpdateGcmChannel

• **UpdateGcmChannel** = ``"mobiletargeting:UpdateGcmChannel"``

Grants permission to update the Firebase Cloud Messaging (FCM) or Google Cloud
Messaging (GCM) API key that allows to send push notifications to your Android
app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-gcm.html#UpdateGcmChannel

#### Defined in

actions/mobiletargeting.ts:725

___

### UpdateInAppTemplate

• **UpdateInAppTemplate** = ``"mobiletargeting:UpdateInAppTemplate"``

Grants permission to update a specific in-app message template under the same v
ersion or generate a new version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#UpdateInAppTemplate

#### Defined in

actions/mobiletargeting.ts:732

___

### UpdateJourney

• **UpdateJourney** = ``"mobiletargeting:UpdateJourney"``

Grants permission to update a specific journey

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#UpdateJourney

#### Defined in

actions/mobiletargeting.ts:738

___

### UpdateJourneyState

• **UpdateJourneyState** = ``"mobiletargeting:UpdateJourneyState"``

Grants permission to update a specific journey state

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-state.html#UpdateJourneyState

#### Defined in

actions/mobiletargeting.ts:744

___

### UpdatePushTemplate

• **UpdatePushTemplate** = ``"mobiletargeting:UpdatePushTemplate"``

Grants permission to update a specific push notification template under the sam
e version or generate a new version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#UpdatePushTemplate

#### Defined in

actions/mobiletargeting.ts:751

___

### UpdateRecommenderConfiguration

• **UpdateRecommenderConfiguration** = ``"mobiletargeting:UpdateRecommenderConfiguration"``

Grants permission to update an Amazon Pinpoint configuration for a recommender
model

See https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#UpdateRecommenderConfiguration

#### Defined in

actions/mobiletargeting.ts:758

___

### UpdateSegment

• **UpdateSegment** = ``"mobiletargeting:UpdateSegment"``

Grants permission to update a specific segment

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id.html#UpdateSegment

#### Defined in

actions/mobiletargeting.ts:764

___

### UpdateSmsChannel

• **UpdateSmsChannel** = ``"mobiletargeting:UpdateSmsChannel"``

Grants permission to update the SMS channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-sms.html#UpdateSmsChannel

#### Defined in

actions/mobiletargeting.ts:770

___

### UpdateSmsTemplate

• **UpdateSmsTemplate** = ``"mobiletargeting:UpdateSmsTemplate"``

Grants permission to update a specific sms message template under the same vers
ion or generate a new version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#UpdateSmsTemplate

#### Defined in

actions/mobiletargeting.ts:777

___

### UpdateTemplateActiveVersion

• **UpdateTemplateActiveVersion** = ``"mobiletargeting:UpdateTemplateActiveVersion"``

Grants permission to update the active version parameter of a specific template

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-active-version.html#UpdateTemplateActiveVersion

#### Defined in

actions/mobiletargeting.ts:783

___

### UpdateVoiceChannel

• **UpdateVoiceChannel** = ``"mobiletargeting:UpdateVoiceChannel"``

Grants permission to update the Voice channel for an app

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-voice.html#UpdateVoiceChannel

#### Defined in

actions/mobiletargeting.ts:789

___

### UpdateVoiceTemplate

• **UpdateVoiceTemplate** = ``"mobiletargeting:UpdateVoiceTemplate"``

Grants permission to update a specific voice message template under the same ve
rsion or generate a new version

See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#UpdateVoiceTemplate

#### Defined in

actions/mobiletargeting.ts:796

___

### VerifyOTPMessage

• **VerifyOTPMessage** = ``"mobiletargeting:VerifyOTPMessage"``

Grants permission to check the validity of One-Time Passwords (OTPs)

See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-verify-otp.html#VerifyOTPMessage

#### Defined in

actions/mobiletargeting.ts:802
