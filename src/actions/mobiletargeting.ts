// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Pinpoint (MOBILETARGETING)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpoint.html
 *
 * 2024-02-12T09:58:39.328Z
 */
export enum AwsMobiletargetingActions {
  /**
   * Grants permission to create an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps.html#CreateApp
   */
  CreateApp = 'mobiletargeting:CreateApp',
  /**
   * Grants permission to create a campaign for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns.html#CreateCampaign
   */
  CreateCampaign = 'mobiletargeting:CreateCampaign',
  /**
   * Grants permission to create an email template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#CreateEmailTemplate
   */
  CreateEmailTemplate = 'mobiletargeting:CreateEmailTemplate',
  /**
   * Grants permission to create an export job that exports endpoint definitions to
   * Amazon S3
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-export.html#CreateExportJob
   */
  CreateExportJob = 'mobiletargeting:CreateExportJob',
  /**
   * Grants permission to import endpoint definitions from to create a segment
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-import.html#CreateImportJob
   */
  CreateImportJob = 'mobiletargeting:CreateImportJob',
  /**
   * Grants permission to create an in-app message template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#CreateInAppTemplate
   */
  CreateInAppTemplate = 'mobiletargeting:CreateInAppTemplate',
  /**
   * Grants permission to create a Journey for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#CreateJourney
   */
  CreateJourney = 'mobiletargeting:CreateJourney',
  /**
   * Grants permission to create a push notification template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#CreatePushTemplate
   */
  CreatePushTemplate = 'mobiletargeting:CreatePushTemplate',
  /**
   * Grants permission to create an Amazon Pinpoint configuration for a recommender
   * model
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#CreateRecommenderConfiguration
   */
  CreateRecommenderConfiguration = 'mobiletargeting:CreateRecommenderConfiguration',
  /**
   * Grants permission to create a segment that is based on endpoint data reported t
   * o Pinpoint by your app. To allow a user to create a segment by importing endpoi
   * nt data from outside of Pinpoint, allow the mobiletargeting:CreateImportJob act
   * ion
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments.html#CreateSegment
   */
  CreateSegment = 'mobiletargeting:CreateSegment',
  /**
   * Grants permission to create an sms message template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#CreateSmsTemplate
   */
  CreateSmsTemplate = 'mobiletargeting:CreateSmsTemplate',
  /**
   * Grants permission to create a voice message template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#CreateVoiceTemplate
   */
  CreateVoiceTemplate = 'mobiletargeting:CreateVoiceTemplate',
  /**
   * Grants permission to delete the ADM channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-adm.html#DeleteAdmChannel
   */
  DeleteAdmChannel = 'mobiletargeting:DeleteAdmChannel',
  /**
   * Grants permission to delete the APNs channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns.html#DeleteApnsChannel
   */
  DeleteApnsChannel = 'mobiletargeting:DeleteApnsChannel',
  /**
   * Grants permission to delete the APNs sandbox channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_sandbox.html#DeleteApnsSandboxChannel
   */
  DeleteApnsSandboxChannel = 'mobiletargeting:DeleteApnsSandboxChannel',
  /**
   * Grants permission to delete the APNs VoIP channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip.html#DeleteApnsVoipChannel
   */
  DeleteApnsVoipChannel = 'mobiletargeting:DeleteApnsVoipChannel',
  /**
   * Grants permission to delete the APNs VoIP sandbox channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip_sandbox.html#DeleteApnsVoipSandboxChannel
   */
  DeleteApnsVoipSandboxChannel = 'mobiletargeting:DeleteApnsVoipSandboxChannel',
  /**
   * Grants permission to delete a specific campaign
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id.html#DeleteApp
   */
  DeleteApp = 'mobiletargeting:DeleteApp',
  /**
   * Grants permission to delete the Baidu channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-baidu.html#DeleteBaiduChannel
   */
  DeleteBaiduChannel = 'mobiletargeting:DeleteBaiduChannel',
  /**
   * Grants permission to delete a specific campaign
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#DeleteCampaign
   */
  DeleteCampaign = 'mobiletargeting:DeleteCampaign',
  /**
   * Grants permission to delete the email channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-email.html#DeleteEmailChannel
   */
  DeleteEmailChannel = 'mobiletargeting:DeleteEmailChannel',
  /**
   * Grants permission to delete an email template or an email template version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#DeleteEmailTemplate
   */
  DeleteEmailTemplate = 'mobiletargeting:DeleteEmailTemplate',
  /**
   * Grants permission to delete an endpoint
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html#DeleteEndpoint
   */
  DeleteEndpoint = 'mobiletargeting:DeleteEndpoint',
  /**
   * Grants permission to delete the event stream for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-eventstream.html#DeleteEventStream
   */
  DeleteEventStream = 'mobiletargeting:DeleteEventStream',
  /**
   * Grants permission to delete the GCM channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-gcm.html#DeleteGcmChannel
   */
  DeleteGcmChannel = 'mobiletargeting:DeleteGcmChannel',
  /**
   * Grants permission to delete an in-app message template or an in-app message tem
   * plate version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#DeleteInAppTemplate
   */
  DeleteInAppTemplate = 'mobiletargeting:DeleteInAppTemplate',
  /**
   * Grants permission to delete a specific journey
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#DeleteJourney
   */
  DeleteJourney = 'mobiletargeting:DeleteJourney',
  /**
   * Grants permission to delete a push notification template or a push notification
   * template version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#DeletePushTemplate
   */
  DeletePushTemplate = 'mobiletargeting:DeletePushTemplate',
  /**
   * Grants permission to delete an Amazon Pinpoint configuration for a recommender
   * model
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#DeleteRecommenderConfiguration
   */
  DeleteRecommenderConfiguration = 'mobiletargeting:DeleteRecommenderConfiguration',
  /**
   * Grants permission to delete a specific segment
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id.html#DeleteSegment
   */
  DeleteSegment = 'mobiletargeting:DeleteSegment',
  /**
   * Grants permission to delete the SMS channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-sms.html#DeleteSmsChannel
   */
  DeleteSmsChannel = 'mobiletargeting:DeleteSmsChannel',
  /**
   * Grants permission to delete an sms message template or an sms message template
   * version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#DeleteSmsTemplate
   */
  DeleteSmsTemplate = 'mobiletargeting:DeleteSmsTemplate',
  /**
   * Grants permission to delete all of the endpoints that are associated with a use
   * r ID
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-users-user-id.html#DeleteUserEndpoints
   */
  DeleteUserEndpoints = 'mobiletargeting:DeleteUserEndpoints',
  /**
   * Grants permission to delete the Voice channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-voice.html#DeleteVoiceChannel
   */
  DeleteVoiceChannel = 'mobiletargeting:DeleteVoiceChannel',
  /**
   * Grants permission to delete a voice message template or a voice message templat
   * e version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#DeleteVoiceTemplate
   */
  DeleteVoiceTemplate = 'mobiletargeting:DeleteVoiceTemplate',
  /**
   * Grants permission to retrieve information about the Amazon Device Messaging (AD
   * M) channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-adm.html#GetAdmChannel
   */
  GetAdmChannel = 'mobiletargeting:GetAdmChannel',
  /**
   * Grants permission to retrieve information about the APNs channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns.html#GetApnsChannel
   */
  GetApnsChannel = 'mobiletargeting:GetApnsChannel',
  /**
   * Grants permission to retrieve information about the APNs sandbox channel for an
   * app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_sandbox.html#GetApnsSandboxChannel
   */
  GetApnsSandboxChannel = 'mobiletargeting:GetApnsSandboxChannel',
  /**
   * Grants permission to retrieve information about the APNs VoIP channel for an ap
   * p
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip.html#GetApnsVoipChannel
   */
  GetApnsVoipChannel = 'mobiletargeting:GetApnsVoipChannel',
  /**
   * Grants permission to retrieve information about the APNs VoIP sandbox channel f
   * or an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip_sandbox.html#GetApnsVoipSandboxChannel
   */
  GetApnsVoipSandboxChannel = 'mobiletargeting:GetApnsVoipSandboxChannel',
  /**
   * Grants permission to retrieve information about a specific app in your Amazon P
   * inpoint account
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id.html#GetApp
   */
  GetApp = 'mobiletargeting:GetApp',
  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard metr
   * ic that applies to an application
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-kpis-daterange-kpi-name.html#GetApplicationDateRangeKpi
   */
  GetApplicationDateRangeKpi = 'mobiletargeting:GetApplicationDateRangeKpi',
  /**
   * Grants permission to retrieve the default settings for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-settings.html#GetApplicationSettings
   */
  GetApplicationSettings = 'mobiletargeting:GetApplicationSettings',
  /**
   * Grants permission to retrieve a list of apps in your Amazon Pinpoint account
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps.html#GetApps
   */
  GetApps = 'mobiletargeting:GetApps',
  /**
   * Grants permission to retrieve information about the Baidu channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-baidu.html#GetBaiduChannel
   */
  GetBaiduChannel = 'mobiletargeting:GetBaiduChannel',
  /**
   * Grants permission to retrieve information about a specific campaign
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#GetCampaign
   */
  GetCampaign = 'mobiletargeting:GetCampaign',
  /**
   * Grants permission to retrieve information about the activities performed by a c
   * ampaign
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-activities.html#GetCampaignActivities
   */
  GetCampaignActivities = 'mobiletargeting:GetCampaignActivities',
  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard metr
   * ic that applies to a campaign
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-kpis-daterange-kpi-name.html#GetCampaignDateRangeKpi
   */
  GetCampaignDateRangeKpi = 'mobiletargeting:GetCampaignDateRangeKpi',
  /**
   * Grants permission to retrieve information about a specific campaign version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-versions-version.html#GetCampaignVersion
   */
  GetCampaignVersion = 'mobiletargeting:GetCampaignVersion',
  /**
   * Grants permission to retrieve information about the current and prior versions
   * of a campaign
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-versions.html#GetCampaignVersions
   */
  GetCampaignVersions = 'mobiletargeting:GetCampaignVersions',
  /**
   * Grants permission to retrieve information about all campaigns for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns.html#GetCampaigns
   */
  GetCampaigns = 'mobiletargeting:GetCampaigns',
  /**
   * Grants permission to get all channels information for your app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels.html#GetChannels
   */
  GetChannels = 'mobiletargeting:GetChannels',
  /**
   * Grants permission to obtain information about the email channel in an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-email.html#GetEmailChannel
   */
  GetEmailChannel = 'mobiletargeting:GetEmailChannel',
  /**
   * Grants permission to retrieve information about a specific or the active versio
   * n of an email template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#GetEmailTemplate
   */
  GetEmailTemplate = 'mobiletargeting:GetEmailTemplate',
  /**
   * Grants permission to retrieve information about a specific endpoint
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html#GetEndpoint
   */
  GetEndpoint = 'mobiletargeting:GetEndpoint',
  /**
   * Grants permission to retrieve information about the event stream for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-eventstream.html#GetEventStream
   */
  GetEventStream = 'mobiletargeting:GetEventStream',
  /**
   * Grants permission to obtain information about a specific export job
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-export-job-id.html#GetExportJob
   */
  GetExportJob = 'mobiletargeting:GetExportJob',
  /**
   * Grants permission to retrieve a list of all of the export jobs for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-export.html#GetExportJobs
   */
  GetExportJobs = 'mobiletargeting:GetExportJobs',
  /**
   * Grants permission to retrieve information about the GCM channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-gcm.html#GetGcmChannel
   */
  GetGcmChannel = 'mobiletargeting:GetGcmChannel',
  /**
   * Grants permission to retrieve information about a specific import job
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-import-job-id.html#GetImportJob
   */
  GetImportJob = 'mobiletargeting:GetImportJob',
  /**
   * Grants permission to retrieve information about all import jobs for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-jobs-import.html#GetImportJobs
   */
  GetImportJobs = 'mobiletargeting:GetImportJobs',
  /**
   * Grants permission to retrive in-app messages for the given endpoint id
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id-inappmessages.html#GetInAppMessages
   */
  GetInAppMessages = 'mobiletargeting:GetInAppMessages',
  /**
   * Grants permission to retrieve information about a specific or the active versio
   * n of an in-app message template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#GetInAppTemplate
   */
  GetInAppTemplate = 'mobiletargeting:GetInAppTemplate',
  /**
   * Grants permission to retrieve information about a specific journey
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#GetJourney
   */
  GetJourney = 'mobiletargeting:GetJourney',
  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard enga
   * gement metric that applies to a journey
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-kpis-daterange-kpi-name.html#GetJourneyDateRangeKpi
   */
  GetJourneyDateRangeKpi = 'mobiletargeting:GetJourneyDateRangeKpi',
  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard exec
   * ution metric that applies to a journey activity
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-activities-journey-activity-id-execution-metrics.html#GetJourneyExecutionActivityMetrics
   */
  GetJourneyExecutionActivityMetrics = 'mobiletargeting:GetJourneyExecutionActivityMetrics',
  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard exec
   * ution metric that applies to a journey
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-execution-metrics.html#GetJourneyExecutionMetrics
   */
  GetJourneyExecutionMetrics = 'mobiletargeting:GetJourneyExecutionMetrics',
  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard exec
   * ution metric that applies to a journey activity for a single journey run
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-runs-run-id-activities-journey-activity-id-execution-metrics.html#GetJourneyRunExecutionActivityMetrics
   */
  GetJourneyRunExecutionActivityMetrics = 'mobiletargeting:GetJourneyRunExecutionActivityMetrics',
  /**
   * Grants permission to retrieve (queries) pre-aggregated data for a standard exec
   * ution metric that applies to a journey for a single journey run
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-runs-run-id-execution-metrics.html#GetJourneyRunExecutionMetrics
   */
  GetJourneyRunExecutionMetrics = 'mobiletargeting:GetJourneyRunExecutionMetrics',
  /**
   * Grants permission to retrieve information about all journey runs for a journey
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-runs.html
   */
  GetJourneyRuns = 'mobiletargeting:GetJourneyRuns',
  /**
   * Grants permission to retrieve information about a specific or the active versio
   * n of an push notification template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#GetPushTemplate
   */
  GetPushTemplate = 'mobiletargeting:GetPushTemplate',
  /**
   * Grants permission to retrieve information about an Amazon Pinpoint configuratio
   * n for a recommender model
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#GetRecommenderConfiguration
   */
  GetRecommenderConfiguration = 'mobiletargeting:GetRecommenderConfiguration',
  /**
   * Grants permission to retrieve information about all the recommender model confi
   * gurations that are associated with an Amazon Pinpoint account
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#GetRecommenderConfigurations
   */
  GetRecommenderConfigurations = 'mobiletargeting:GetRecommenderConfigurations',
  /**
   * Grants permission to mobiletargeting:GetReports
   *
   * See ${UserGuideDocPage}/permissions-actions.html
   */
  GetReports = 'mobiletargeting:GetReports',
  /**
   * Grants permission to retrieve information about a specific segment
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id.html#GetSegment
   */
  GetSegment = 'mobiletargeting:GetSegment',
  /**
   * Grants permission to retrieve information about jobs that export endpoint defin
   * itions from segments to Amazon S3
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-jobs-export.html#GetSegmentExportJobs
   */
  GetSegmentExportJobs = 'mobiletargeting:GetSegmentExportJobs',
  /**
   * Grants permission to retrieve information about jobs that create segments by im
   * porting endpoint definitions from
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-jobs-import.html#GetSegmentImportJobs
   */
  GetSegmentImportJobs = 'mobiletargeting:GetSegmentImportJobs',
  /**
   * Grants permission to retrieve information about a specific segment version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-versions-version.html#GetSegmentVersion
   */
  GetSegmentVersion = 'mobiletargeting:GetSegmentVersion',
  /**
   * Grants permission to retrieve information about the current and prior versions
   * of a segment
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id-versions.html#GetSegmentVersions
   */
  GetSegmentVersions = 'mobiletargeting:GetSegmentVersions',
  /**
   * Grants permission to retrieve information about the segments for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments.html#GetSegments
   */
  GetSegments = 'mobiletargeting:GetSegments',
  /**
   * Grants permission to obtain information about the SMS channel in an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-sms.html#GetSmsChannel
   */
  GetSmsChannel = 'mobiletargeting:GetSmsChannel',
  /**
   * Grants permission to retrieve information about a specific or the active versio
   * n of an sms message template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#GetSmsTemplate
   */
  GetSmsTemplate = 'mobiletargeting:GetSmsTemplate',
  /**
   * Grants permission to retrieve information about the endpoints that are associat
   * ed with a user ID
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-users-user-id.html#GetUserEndpoints
   */
  GetUserEndpoints = 'mobiletargeting:GetUserEndpoints',
  /**
   * Grants permission to obtain information about the Voice channel in an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-voice.html#GetVoiceChannel
   */
  GetVoiceChannel = 'mobiletargeting:GetVoiceChannel',
  /**
   * Grants permission to retrieve information about a specific or the active versio
   * n of a voice message template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#GetVoiceTemplate
   */
  GetVoiceTemplate = 'mobiletargeting:GetVoiceTemplate',
  /**
   * Grants permission to retrieve information about all journeys for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#ListJourneys
   */
  ListJourneys = 'mobiletargeting:ListJourneys',
  /**
   * Grants permission to list tags for a resource
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html#ListTagsForResource
   */
  ListTagsForResource = 'mobiletargeting:ListTagsForResource',
  /**
   * Grants permission to retrieve all versions about a specific template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#ListTemplateVersions
   */
  ListTemplateVersions = 'mobiletargeting:ListTemplateVersions',
  /**
   * Grants permission to retrieve metadata about the queried templates
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html#ListTemplates
   */
  ListTemplates = 'mobiletargeting:ListTemplates',
  /**
   * Grants permission to obtain metadata for a phone number, such as the number typ
   * e (mobile, landline, or VoIP), location, and provider
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/phone-number-validate.html#PhoneNumberValidate
   */
  PhoneNumberValidate = 'mobiletargeting:PhoneNumberValidate',
  /**
   * Grants permission to create or update an event stream for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-eventstream.html#PutEventStream
   */
  PutEventStream = 'mobiletargeting:PutEventStream',
  /**
   * Grants permission to create or update events for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-events.html#PutEvents
   */
  PutEvents = 'mobiletargeting:PutEvents',
  /**
   * Grants permission to remove the attributes for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-attributes-attribute-type.html#RemoveAttributes
   */
  RemoveAttributes = 'mobiletargeting:RemoveAttributes',
  /**
   * Grants permission to send an SMS message or push notification to specific endpo
   * ints
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#SendMessages
   */
  SendMessages = 'mobiletargeting:SendMessages',
  /**
   * Grants permission to send an OTP code to a user of your application
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-otp.html#SendOTPMessage
   */
  SendOTPMessage = 'mobiletargeting:SendOTPMessage',
  /**
   * Grants permission to send an SMS message or push notification to all endpoints
   * that are associated with a specific user ID
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-users-messages.html#SendUsersMessages
   */
  SendUsersMessages = 'mobiletargeting:SendUsersMessages',
  /**
   * Grants permission to add tags to a resource
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html#TagResource
   */
  TagResource = 'mobiletargeting:TagResource',
  /**
   * Grants permission to remove tags from a resource
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html#UntagResource
   */
  UntagResource = 'mobiletargeting:UntagResource',
  /**
   * Grants permission to update the Amazon Device Messaging (ADM) channel for an ap
   * p
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-adm.html#UpdateAdmChannel
   */
  UpdateAdmChannel = 'mobiletargeting:UpdateAdmChannel',
  /**
   * Grants permission to update the Apple Push Notification service (APNs) channel
   * for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns.html#UpdateApnsChannel
   */
  UpdateApnsChannel = 'mobiletargeting:UpdateApnsChannel',
  /**
   * Grants permission to update the Apple Push Notification service (APNs) sandbox
   * channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_sandbox.html#UpdateApnsSandboxChannel
   */
  UpdateApnsSandboxChannel = 'mobiletargeting:UpdateApnsSandboxChannel',
  /**
   * Grants permission to update the Apple Push Notification service (APNs) VoIP cha
   * nnel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip.html#UpdateApnsVoipChannel
   */
  UpdateApnsVoipChannel = 'mobiletargeting:UpdateApnsVoipChannel',
  /**
   * Grants permission to update the Apple Push Notification service (APNs) VoIP san
   * dbox channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-apns_voip_sandbox.html#UpdateApnsVoipSandboxChannel
   */
  UpdateApnsVoipSandboxChannel = 'mobiletargeting:UpdateApnsVoipSandboxChannel',
  /**
   * Grants permission to update the default settings for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-settings.html#UpdateApplicationSettings
   */
  UpdateApplicationSettings = 'mobiletargeting:UpdateApplicationSettings',
  /**
   * Grants permission to update the Baidu channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-baidu.html#UpdateBaiduChannel
   */
  UpdateBaiduChannel = 'mobiletargeting:UpdateBaiduChannel',
  /**
   * Grants permission to update a specific campaign
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id.html#UpdateCampaign
   */
  UpdateCampaign = 'mobiletargeting:UpdateCampaign',
  /**
   * Grants permission to update the email channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-email.html#UpdateEmailChannel
   */
  UpdateEmailChannel = 'mobiletargeting:UpdateEmailChannel',
  /**
   * Grants permission to update a specific email template under the same version or
   * generate a new version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#UpdateEmailTemplate
   */
  UpdateEmailTemplate = 'mobiletargeting:UpdateEmailTemplate',
  /**
   * Grants permission to create an endpoint or update the information for an endpoi
   * nt
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html#UpdateEndpoint
   */
  UpdateEndpoint = 'mobiletargeting:UpdateEndpoint',
  /**
   * Grants permission to create or update endpoints as a batch operation
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints.html#UpdateEndpointsBatch
   */
  UpdateEndpointsBatch = 'mobiletargeting:UpdateEndpointsBatch',
  /**
   * Grants permission to update the Firebase Cloud Messaging (FCM) or Google Cloud
   * Messaging (GCM) API key that allows to send push notifications to your Android
   * app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-gcm.html#UpdateGcmChannel
   */
  UpdateGcmChannel = 'mobiletargeting:UpdateGcmChannel',
  /**
   * Grants permission to update a specific in-app message template under the same v
   * ersion or generate a new version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#UpdateInAppTemplate
   */
  UpdateInAppTemplate = 'mobiletargeting:UpdateInAppTemplate',
  /**
   * Grants permission to update a specific journey
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#UpdateJourney
   */
  UpdateJourney = 'mobiletargeting:UpdateJourney',
  /**
   * Grants permission to update a specific journey state
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-state.html#UpdateJourneyState
   */
  UpdateJourneyState = 'mobiletargeting:UpdateJourneyState',
  /**
   * Grants permission to update a specific push notification template under the sam
   * e version or generate a new version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#UpdatePushTemplate
   */
  UpdatePushTemplate = 'mobiletargeting:UpdatePushTemplate',
  /**
   * Grants permission to update an Amazon Pinpoint configuration for a recommender
   * model
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#UpdateRecommenderConfiguration
   */
  UpdateRecommenderConfiguration = 'mobiletargeting:UpdateRecommenderConfiguration',
  /**
   * Grants permission to update a specific segment
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments-segment-id.html#UpdateSegment
   */
  UpdateSegment = 'mobiletargeting:UpdateSegment',
  /**
   * Grants permission to update the SMS channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-sms.html#UpdateSmsChannel
   */
  UpdateSmsChannel = 'mobiletargeting:UpdateSmsChannel',
  /**
   * Grants permission to update a specific sms message template under the same vers
   * ion or generate a new version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#UpdateSmsTemplate
   */
  UpdateSmsTemplate = 'mobiletargeting:UpdateSmsTemplate',
  /**
   * Grants permission to update the active version parameter of a specific template
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-active-version.html#UpdateTemplateActiveVersion
   */
  UpdateTemplateActiveVersion = 'mobiletargeting:UpdateTemplateActiveVersion',
  /**
   * Grants permission to update the Voice channel for an app
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-channels-voice.html#UpdateVoiceChannel
   */
  UpdateVoiceChannel = 'mobiletargeting:UpdateVoiceChannel',
  /**
   * Grants permission to update a specific voice message template under the same ve
   * rsion or generate a new version
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#UpdateVoiceTemplate
   */
  UpdateVoiceTemplate = 'mobiletargeting:UpdateVoiceTemplate',
  /**
   * Grants permission to check the validity of One-Time Passwords (OTPs)
   *
   * See https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-verify-otp.html#VerifyOTPMessage
   */
  VerifyOTPMessage = 'mobiletargeting:VerifyOTPMessage',
}
