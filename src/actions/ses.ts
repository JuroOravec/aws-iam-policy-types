// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Simple Email Service v2 (SES)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleemailservicev2.html
 *
 * 2025-02-24T21:49:46.369Z
 */
export enum AwsSesActions {
  /**
   * Grants permission to get metric data on your activity
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_BatchGetMetricData.html
   */
  BatchGetMetricData = 'ses:BatchGetMetricData',
  /**
   * Grants permission to cancel an export job
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CancelExportJob.html
   */
  CancelExportJob = 'ses:CancelExportJob',
  /**
   * Grants permission to create a new configuration set
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateConfigurationSet.html
   */
  CreateConfigurationSet = 'ses:CreateConfigurationSet',
  /**
   * Grants permission to create a configuration set event destination
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateConfigurationSetEventDestination.html
   */
  CreateConfigurationSetEventDestination = 'ses:CreateConfigurationSetEventDestination',
  /**
   * Grants permission to create a contact
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContact.html
   */
  CreateContact = 'ses:CreateContact',
  /**
   * Grants permission to create a contact list
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContactList.html
   */
  CreateContactList = 'ses:CreateContactList',
  /**
   * Grants permission to create a new custom verification email template
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateCustomVerificationEmailTemplate.html
   */
  CreateCustomVerificationEmailTemplate = 'ses:CreateCustomVerificationEmailTemplate',
  /**
   * Grants permission to create a new pool of dedicated IP addresses
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateDedicatedIpPool.html
   */
  CreateDedicatedIpPool = 'ses:CreateDedicatedIpPool',
  /**
   * Grants permission to create a new predictive inbox placement test
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateDeliverabilityTestReport.html
   */
  CreateDeliverabilityTestReport = 'ses:CreateDeliverabilityTestReport',
  /**
   * Grants permission to start the process of verifying an email identity
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailIdentity.html
   */
  CreateEmailIdentity = 'ses:CreateEmailIdentity',
  /**
   * Grants permission to create the specified sending authorization policy for the
   * given identity
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailIdentityPolicy.html
   */
  CreateEmailIdentityPolicy = 'ses:CreateEmailIdentityPolicy',
  /**
   * Grants permission to create an email template
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailTemplate.html
   */
  CreateEmailTemplate = 'ses:CreateEmailTemplate',
  /**
   * Grants permission to create an export job
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateExportJob.html
   */
  CreateExportJob = 'ses:CreateExportJob',
  /**
   * Grants permission to creates an import job for a data destination
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateImportJob.html
   */
  CreateImportJob = 'ses:CreateImportJob',
  /**
   * Grants permission to create a new multi-region endpoint
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateMultiRegionEndpoint.html
   */
  CreateMultiRegionEndpoint = 'ses:CreateMultiRegionEndpoint',
  /**
   * Grants permission to delete an existing configuration set
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteConfigurationSet.html
   */
  DeleteConfigurationSet = 'ses:DeleteConfigurationSet',
  /**
   * Grants permission to delete an event destination
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteConfigurationSetEventDestination.html
   */
  DeleteConfigurationSetEventDestination = 'ses:DeleteConfigurationSetEventDestination',
  /**
   * Grants permission to delete a contact from a contact list
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContact.html
   */
  DeleteContact = 'ses:DeleteContact',
  /**
   * Grants permission to delete a contact list with all of its contacts
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContactList.html
   */
  DeleteContactList = 'ses:DeleteContactList',
  /**
   * Grants permission to delete an existing custom verification email template
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteCustomVerificationEmailTemplate.html
   */
  DeleteCustomVerificationEmailTemplate = 'ses:DeleteCustomVerificationEmailTemplate',
  /**
   * Grants permission to delete a dedicated IP pool
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteDedicatedIpPool.html
   */
  DeleteDedicatedIpPool = 'ses:DeleteDedicatedIpPool',
  /**
   * Grants permission to delete an email identity
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailIdentity.html
   */
  DeleteEmailIdentity = 'ses:DeleteEmailIdentity',
  /**
   * Grants permission to delete the specified sending authorization policy for the
   * given identity (an email address or a domain)
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailIdentityPolicy.html
   */
  DeleteEmailIdentityPolicy = 'ses:DeleteEmailIdentityPolicy',
  /**
   * Grants permission to delete an email template
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailTemplate.html
   */
  DeleteEmailTemplate = 'ses:DeleteEmailTemplate',
  /**
   * Grants permission to delete a multi-region endpoint
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteMultiRegionEndpoint.html
   */
  DeleteMultiRegionEndpoint = 'ses:DeleteMultiRegionEndpoint',
  /**
   * Grants permission to remove an email address from the suppression list for your
   * account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteSuppressedDestination.html
   */
  DeleteSuppressedDestination = 'ses:DeleteSuppressedDestination',
  /**
   * Grants permission to get information about the email-sending status and capabil
   * ities for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetAccount.html
   */
  GetAccount = 'ses:GetAccount',
  /**
   * Grants permission to retrieve a list of the deny lists on which your dedicated
   * IP addresses or tracked domains appear
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetBlacklistReports.html
   */
  GetBlacklistReports = 'ses:GetBlacklistReports',
  /**
   * Grants permission to get information about an existing configuration set
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetConfigurationSet.html
   */
  GetConfigurationSet = 'ses:GetConfigurationSet',
  /**
   * Grants permission to retrieve a list of event destinations that are associated
   * with a configuration set
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetConfigurationSetEventDestinations.html
   */
  GetConfigurationSetEventDestinations = 'ses:GetConfigurationSetEventDestinations',
  /**
   * Grants permission to return a contact from a contact list
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContact.html
   */
  GetContact = 'ses:GetContact',
  /**
   * Grants permission to return contact list metadata
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContactList.html
   */
  GetContactList = 'ses:GetContactList',
  /**
   * Grants permission to return the custom email verification template for the temp
   * late name you specify
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetCustomVerificationEmailTemplate.html
   */
  GetCustomVerificationEmailTemplate = 'ses:GetCustomVerificationEmailTemplate',
  /**
   * Grants permission to get information about a dedicated IP address
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIp.html
   */
  GetDedicatedIp = 'ses:GetDedicatedIp',
  /**
   * Grants permission to get information about a dedicated IP pool
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIpPool.html
   */
  GetDedicatedIpPool = 'ses:GetDedicatedIpPool',
  /**
   * Grants permission to list the dedicated IP addresses a dedicated IP pool
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIps.html
   */
  GetDedicatedIps = 'ses:GetDedicatedIps',
  /**
   * Grants permission to get the status of the Deliverability dashboard
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDeliverabilityDashboardOptions.html
   */
  GetDeliverabilityDashboardOptions = 'ses:GetDeliverabilityDashboardOptions',
  /**
   * Grants permission to retrieve the results of a predictive inbox placement test
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDeliverabilityTestReport.html
   */
  GetDeliverabilityTestReport = 'ses:GetDeliverabilityTestReport',
  /**
   * Grants permission to retrieve all the deliverability data for a specific campai
   * gn
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDomainDeliverabilityCampaign.html
   */
  GetDomainDeliverabilityCampaign = 'ses:GetDomainDeliverabilityCampaign',
  /**
   * Grants permission to retrieve inbox placement and engagement rates for the doma
   * ins that you use to send email
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDomainStatisticsReport.html
   */
  GetDomainStatisticsReport = 'ses:GetDomainStatisticsReport',
  /**
   * Grants permission to get information about a specific identity
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailIdentity.html
   */
  GetEmailIdentity = 'ses:GetEmailIdentity',
  /**
   * Grants permission to return the requested sending authorization policies for th
   * e given identity (an email address or a domain)
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailIdentityPolicies.html
   */
  GetEmailIdentityPolicies = 'ses:GetEmailIdentityPolicies',
  /**
   * Grants permission to return the template object, which includes the subject lin
   * e, HTML part, and text part for the template you specify
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailTemplate.html
   */
  GetEmailTemplate = 'ses:GetEmailTemplate',
  /**
   * Grants permission to get information about an export job
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetExportJob.html
   */
  GetExportJob = 'ses:GetExportJob',
  /**
   * Grants permission to provide information about an import job
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetImportJob.html
   */
  GetImportJob = 'ses:GetImportJob',
  /**
   * Grants permission to provide insights about a message
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetMessageInsights.html
   */
  GetMessageInsights = 'ses:GetMessageInsights',
  /**
   * Grants permission to get information about a multi-region endpoint
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetMultiRegionEndpoint.html
   */
  GetMultiRegionEndpoint = 'ses:GetMultiRegionEndpoint',
  /**
   * Grants permission to retrieve information about a specific email address that's
   * on the suppression list for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetSuppressedDestination.html
   */
  GetSuppressedDestination = 'ses:GetSuppressedDestination',
  /**
   * Grants permission to list all of the configuration sets for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListConfigurationSets.html
   */
  ListConfigurationSets = 'ses:ListConfigurationSets',
  /**
   * Grants permission to list all of the contact lists available for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListContactLists.html
   */
  ListContactLists = 'ses:ListContactLists',
  /**
   * Grants permission to list the contacts present in a specific contact list
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListContacts.html
   */
  ListContacts = 'ses:ListContacts',
  /**
   * Grants permission to list all of the existing custom verification email templat
   * es for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListCustomVerificationEmailTemplates.html
   */
  ListCustomVerificationEmailTemplates = 'ses:ListCustomVerificationEmailTemplates',
  /**
   * Grants permission to list all of the dedicated IP pools for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDedicatedIpPools.html
   */
  ListDedicatedIpPools = 'ses:ListDedicatedIpPools',
  /**
   * Grants permission to retrieve the list of the predictive inbox placement tests
   * that you've performed, regardless of their statuses, for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDeliverabilityTestReports.html
   */
  ListDeliverabilityTestReports = 'ses:ListDeliverabilityTestReports',
  /**
   * Grants permission to list deliverability data for campaigns that used a specifi
   * c domain to send email during a specified time range
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDomainDeliverabilityCampaigns.html
   */
  ListDomainDeliverabilityCampaigns = 'ses:ListDomainDeliverabilityCampaigns',
  /**
   * Grants permission to list the email identities for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailIdentities.html
   */
  ListEmailIdentities = 'ses:ListEmailIdentities',
  /**
   * Grants permission to list all of the email templates for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailTemplates.html
   */
  ListEmailTemplates = 'ses:ListEmailTemplates',
  /**
   * Grants permission to list all the exports jobs for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListExportJobs.html
   */
  ListExportJobs = 'ses:ListExportJobs',
  /**
   * Grants permission to list all of the import jobs for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListImportJobs.html
   */
  ListImportJobs = 'ses:ListImportJobs',
  /**
   * Grants permission to list all of the multi-region endpoints for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListMultiRegionEndpoints.html
   */
  ListMultiRegionEndpoints = 'ses:ListMultiRegionEndpoints',
  /**
   * Grants permission to list recommendations for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListRecommendations.html
   */
  ListRecommendations = 'ses:ListRecommendations',
  /**
   * Grants permission to list email addresses that are on the suppression list for
   * your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListSuppressedDestinations.html
   */
  ListSuppressedDestinations = 'ses:ListSuppressedDestinations',
  /**
   * Grants permission to retrieve a list of the tags (keys and values) that are ass
   * ociated with a specific resource for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListTagsForResource.html
   */
  ListTagsForResource = 'ses:ListTagsForResource',
  /**
   * Grants permission to enable or disable the automatic warm-up feature for dedica
   * ted IP addresses
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountDedicatedIpWarmupAttributes.html
   */
  PutAccountDedicatedIpWarmupAttributes = 'ses:PutAccountDedicatedIpWarmupAttributes',
  /**
   * Grants permission to update your account details
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountDetails.html
   */
  PutAccountDetails = 'ses:PutAccountDetails',
  /**
   * Grants permission to enable or disable the ability to send email for your accou
   * nt
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountSendingAttributes.html
   */
  PutAccountSendingAttributes = 'ses:PutAccountSendingAttributes',
  /**
   * Grants permission to change the settings for the account-level suppression list
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountSuppressionAttributes.html
   */
  PutAccountSuppressionAttributes = 'ses:PutAccountSuppressionAttributes',
  /**
   * Grants permission to change the settings for VDM for your account
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountVdmAttributes.html
   */
  PutAccountVdmAttributes = 'ses:PutAccountVdmAttributes',
  /**
   * Grants permission to associate a configuration set with a dedicated IP pool
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetDeliveryOptions.html
   */
  PutConfigurationSetDeliveryOptions = 'ses:PutConfigurationSetDeliveryOptions',
  /**
   * Grants permission to enable or disable collection of reputation metrics for ema
   * ils that you send using a particular configuration set
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetReputationOptions.html
   */
  PutConfigurationSetReputationOptions = 'ses:PutConfigurationSetReputationOptions',
  /**
   * Grants permission to enable or disable email sending for messages that use a pa
   * rticular configuration set
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetSendingOptions.html
   */
  PutConfigurationSetSendingOptions = 'ses:PutConfigurationSetSendingOptions',
  /**
   * Grants permission to specify the account suppression list preferences for a par
   * ticular configuration set
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetSuppressionOptions.html
   */
  PutConfigurationSetSuppressionOptions = 'ses:PutConfigurationSetSuppressionOptions',
  /**
   * Grants permission to specify a custom domain to use for open and click tracking
   * elements in email that you send for a particular configuration set
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetTrackingOptions.html
   */
  PutConfigurationSetTrackingOptions = 'ses:PutConfigurationSetTrackingOptions',
  /**
   * Grants permission to override account-level VDM settings for a particular confi
   * guration set
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetVdmOptions.html
   */
  PutConfigurationSetVdmOptions = 'ses:PutConfigurationSetVdmOptions',
  /**
   * Grants permission to move a dedicated IP address to an existing dedicated IP po
   * ol
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDedicatedIpInPool.html
   */
  PutDedicatedIpInPool = 'ses:PutDedicatedIpInPool',
  /**
   * Grants permission to transition a dedicated IP pool from Standard to Managed
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDedicatedIpPoolScalingAttributes.html
   */
  PutDedicatedIpPoolScalingAttributes = 'ses:PutDedicatedIpPoolScalingAttributes',
  /**
   * Grants permission to put Dedicated IP warm up attributes
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDedicatedIpWarmupAttributes.html
   */
  PutDedicatedIpWarmupAttributes = 'ses:PutDedicatedIpWarmupAttributes',
  /**
   * Grants permission to enable or disable the Deliverability dashboard
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDeliverabilityDashboardOption.html
   */
  PutDeliverabilityDashboardOption = 'ses:PutDeliverabilityDashboardOption',
  /**
   * Grants permission to associate a configuration set with an email identity
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityConfigurationSetAttributes.html
   */
  PutEmailIdentityConfigurationSetAttributes = 'ses:PutEmailIdentityConfigurationSetAttributes',
  /**
   * Grants permission to enable or disable DKIM authentication for an email identit
   * y
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityDkimAttributes.html
   */
  PutEmailIdentityDkimAttributes = 'ses:PutEmailIdentityDkimAttributes',
  /**
   * Grants permission to configure or change the DKIM authentication settings for a
   * n email domain identity
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityDkimSigningAttributes.html
   */
  PutEmailIdentityDkimSigningAttributes = 'ses:PutEmailIdentityDkimSigningAttributes',
  /**
   * Grants permission to enable or disable feedback forwarding for an email identit
   * y
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityFeedbackAttributes.html
   */
  PutEmailIdentityFeedbackAttributes = 'ses:PutEmailIdentityFeedbackAttributes',
  /**
   * Grants permission to enable or disable the custom MAIL FROM domain configuratio
   * n for an email identity
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityMailFromAttributes.html
   */
  PutEmailIdentityMailFromAttributes = 'ses:PutEmailIdentityMailFromAttributes',
  /**
   * Grants permission to add an email address to the suppression list
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutSuppressedDestination.html
   */
  PutSuppressedDestination = 'ses:PutSuppressedDestination',
  /**
   * Grants permission to compose an email message to multiple destinations
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendBulkEmail.html
   */
  SendBulkEmail = 'ses:SendBulkEmail',
  /**
   * Grants permission to add an email address to the list of identities and attempt
   * s to verify it
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendCustomVerificationEmail.html
   */
  SendCustomVerificationEmail = 'ses:SendCustomVerificationEmail',
  /**
   * Grants permission to send an email message
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html
   */
  SendEmail = 'ses:SendEmail',
  /**
   * Grants permission to add one or more tags (keys and values) to a specified reso
   * urce
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TagResource.html
   */
  TagResource = 'ses:TagResource',
  /**
   * Grants permission to create a preview of the MIME content of an email when prov
   * ided with a template and a set of replacement data
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TestRenderEmailTemplate.html
   */
  TestRenderEmailTemplate = 'ses:TestRenderEmailTemplate',
  /**
   * Grants permission to remove one or more tags (keys and values) from a specified
   * resource
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UntagResource.html
   */
  UntagResource = 'ses:UntagResource',
  /**
   * Grants permission to update the configuration of an event destination for a con
   * figuration set
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateConfigurationSetEventDestination.html
   */
  UpdateConfigurationSetEventDestination = 'ses:UpdateConfigurationSetEventDestination',
  /**
   * Grants permission to update a contact's preferences for a list
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateContact.html
   */
  UpdateContact = 'ses:UpdateContact',
  /**
   * Grants permission to update contact list metadata
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateContactList.html
   */
  UpdateContactList = 'ses:UpdateContactList',
  /**
   * Grants permission to update an existing custom verification email template
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateCustomVerificationEmailTemplate.html
   */
  UpdateCustomVerificationEmailTemplate = 'ses:UpdateCustomVerificationEmailTemplate',
  /**
   * Grants permission to update the specified sending authorization policy for the
   * given identity (an email address or a domain)
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateEmailIdentityPolicy.html
   */
  UpdateEmailIdentityPolicy = 'ses:UpdateEmailIdentityPolicy',
  /**
   * Grants permission to update an email template
   *
   * See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateEmailTemplate.html
   */
  UpdateEmailTemplate = 'ses:UpdateEmailTemplate',
}
