[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSesActions

# Enumeration: AwsSesActions

All IAM policy actions for Amazon Simple Email Service v2 (SES)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleemailservicev2.html

2024-02-12T09:59:16.560Z

## Table of contents

### Enumeration Members

- [BatchGetMetricData](AwsSesActions.md#batchgetmetricdata)
- [CancelExportJob](AwsSesActions.md#cancelexportjob)
- [CreateConfigurationSet](AwsSesActions.md#createconfigurationset)
- [CreateConfigurationSetEventDestination](AwsSesActions.md#createconfigurationseteventdestination)
- [CreateContact](AwsSesActions.md#createcontact)
- [CreateContactList](AwsSesActions.md#createcontactlist)
- [CreateCustomVerificationEmailTemplate](AwsSesActions.md#createcustomverificationemailtemplate)
- [CreateDedicatedIpPool](AwsSesActions.md#creatededicatedippool)
- [CreateDeliverabilityTestReport](AwsSesActions.md#createdeliverabilitytestreport)
- [CreateEmailIdentity](AwsSesActions.md#createemailidentity)
- [CreateEmailIdentityPolicy](AwsSesActions.md#createemailidentitypolicy)
- [CreateEmailTemplate](AwsSesActions.md#createemailtemplate)
- [CreateExportJob](AwsSesActions.md#createexportjob)
- [CreateImportJob](AwsSesActions.md#createimportjob)
- [DeleteConfigurationSet](AwsSesActions.md#deleteconfigurationset)
- [DeleteConfigurationSetEventDestination](AwsSesActions.md#deleteconfigurationseteventdestination)
- [DeleteContact](AwsSesActions.md#deletecontact)
- [DeleteContactList](AwsSesActions.md#deletecontactlist)
- [DeleteCustomVerificationEmailTemplate](AwsSesActions.md#deletecustomverificationemailtemplate)
- [DeleteDedicatedIpPool](AwsSesActions.md#deletededicatedippool)
- [DeleteEmailIdentity](AwsSesActions.md#deleteemailidentity)
- [DeleteEmailIdentityPolicy](AwsSesActions.md#deleteemailidentitypolicy)
- [DeleteEmailTemplate](AwsSesActions.md#deleteemailtemplate)
- [DeleteSuppressedDestination](AwsSesActions.md#deletesuppresseddestination)
- [GetAccount](AwsSesActions.md#getaccount)
- [GetBlacklistReports](AwsSesActions.md#getblacklistreports)
- [GetConfigurationSet](AwsSesActions.md#getconfigurationset)
- [GetConfigurationSetEventDestinations](AwsSesActions.md#getconfigurationseteventdestinations)
- [GetContact](AwsSesActions.md#getcontact)
- [GetContactList](AwsSesActions.md#getcontactlist)
- [GetCustomVerificationEmailTemplate](AwsSesActions.md#getcustomverificationemailtemplate)
- [GetDedicatedIp](AwsSesActions.md#getdedicatedip)
- [GetDedicatedIpPool](AwsSesActions.md#getdedicatedippool)
- [GetDedicatedIps](AwsSesActions.md#getdedicatedips)
- [GetDeliverabilityDashboardOptions](AwsSesActions.md#getdeliverabilitydashboardoptions)
- [GetDeliverabilityTestReport](AwsSesActions.md#getdeliverabilitytestreport)
- [GetDomainDeliverabilityCampaign](AwsSesActions.md#getdomaindeliverabilitycampaign)
- [GetDomainStatisticsReport](AwsSesActions.md#getdomainstatisticsreport)
- [GetEmailIdentity](AwsSesActions.md#getemailidentity)
- [GetEmailIdentityPolicies](AwsSesActions.md#getemailidentitypolicies)
- [GetEmailTemplate](AwsSesActions.md#getemailtemplate)
- [GetExportJob](AwsSesActions.md#getexportjob)
- [GetImportJob](AwsSesActions.md#getimportjob)
- [GetMessageInsights](AwsSesActions.md#getmessageinsights)
- [GetSuppressedDestination](AwsSesActions.md#getsuppresseddestination)
- [ListConfigurationSets](AwsSesActions.md#listconfigurationsets)
- [ListContactLists](AwsSesActions.md#listcontactlists)
- [ListContacts](AwsSesActions.md#listcontacts)
- [ListCustomVerificationEmailTemplates](AwsSesActions.md#listcustomverificationemailtemplates)
- [ListDedicatedIpPools](AwsSesActions.md#listdedicatedippools)
- [ListDeliverabilityTestReports](AwsSesActions.md#listdeliverabilitytestreports)
- [ListDomainDeliverabilityCampaigns](AwsSesActions.md#listdomaindeliverabilitycampaigns)
- [ListEmailIdentities](AwsSesActions.md#listemailidentities)
- [ListEmailTemplates](AwsSesActions.md#listemailtemplates)
- [ListExportJobs](AwsSesActions.md#listexportjobs)
- [ListImportJobs](AwsSesActions.md#listimportjobs)
- [ListRecommendations](AwsSesActions.md#listrecommendations)
- [ListSuppressedDestinations](AwsSesActions.md#listsuppresseddestinations)
- [ListTagsForResource](AwsSesActions.md#listtagsforresource)
- [PutAccountDedicatedIpWarmupAttributes](AwsSesActions.md#putaccountdedicatedipwarmupattributes)
- [PutAccountDetails](AwsSesActions.md#putaccountdetails)
- [PutAccountSendingAttributes](AwsSesActions.md#putaccountsendingattributes)
- [PutAccountSuppressionAttributes](AwsSesActions.md#putaccountsuppressionattributes)
- [PutAccountVdmAttributes](AwsSesActions.md#putaccountvdmattributes)
- [PutConfigurationSetDeliveryOptions](AwsSesActions.md#putconfigurationsetdeliveryoptions)
- [PutConfigurationSetReputationOptions](AwsSesActions.md#putconfigurationsetreputationoptions)
- [PutConfigurationSetSendingOptions](AwsSesActions.md#putconfigurationsetsendingoptions)
- [PutConfigurationSetSuppressionOptions](AwsSesActions.md#putconfigurationsetsuppressionoptions)
- [PutConfigurationSetTrackingOptions](AwsSesActions.md#putconfigurationsettrackingoptions)
- [PutConfigurationSetVdmOptions](AwsSesActions.md#putconfigurationsetvdmoptions)
- [PutDedicatedIpInPool](AwsSesActions.md#putdedicatedipinpool)
- [PutDedicatedIpPoolScalingAttributes](AwsSesActions.md#putdedicatedippoolscalingattributes)
- [PutDedicatedIpWarmupAttributes](AwsSesActions.md#putdedicatedipwarmupattributes)
- [PutDeliverabilityDashboardOption](AwsSesActions.md#putdeliverabilitydashboardoption)
- [PutEmailIdentityConfigurationSetAttributes](AwsSesActions.md#putemailidentityconfigurationsetattributes)
- [PutEmailIdentityDkimAttributes](AwsSesActions.md#putemailidentitydkimattributes)
- [PutEmailIdentityDkimSigningAttributes](AwsSesActions.md#putemailidentitydkimsigningattributes)
- [PutEmailIdentityFeedbackAttributes](AwsSesActions.md#putemailidentityfeedbackattributes)
- [PutEmailIdentityMailFromAttributes](AwsSesActions.md#putemailidentitymailfromattributes)
- [PutSuppressedDestination](AwsSesActions.md#putsuppresseddestination)
- [SendBulkEmail](AwsSesActions.md#sendbulkemail)
- [SendCustomVerificationEmail](AwsSesActions.md#sendcustomverificationemail)
- [SendEmail](AwsSesActions.md#sendemail)
- [TagResource](AwsSesActions.md#tagresource)
- [TestRenderEmailTemplate](AwsSesActions.md#testrenderemailtemplate)
- [UntagResource](AwsSesActions.md#untagresource)
- [UpdateConfigurationSetEventDestination](AwsSesActions.md#updateconfigurationseteventdestination)
- [UpdateContact](AwsSesActions.md#updatecontact)
- [UpdateContactList](AwsSesActions.md#updatecontactlist)
- [UpdateCustomVerificationEmailTemplate](AwsSesActions.md#updatecustomverificationemailtemplate)
- [UpdateEmailIdentityPolicy](AwsSesActions.md#updateemailidentitypolicy)
- [UpdateEmailTemplate](AwsSesActions.md#updateemailtemplate)

## Enumeration Members

### BatchGetMetricData

• **BatchGetMetricData** = ``"ses:BatchGetMetricData"``

Grants permission to get metric data on your activity

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_BatchGetMetricData.html

#### Defined in

actions/ses.ts:17

___

### CancelExportJob

• **CancelExportJob** = ``"ses:CancelExportJob"``

Grants permission to cancel an export job

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CancelExportJob.html

#### Defined in

actions/ses.ts:23

___

### CreateConfigurationSet

• **CreateConfigurationSet** = ``"ses:CreateConfigurationSet"``

Grants permission to create a new configuration set

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateConfigurationSet.html

#### Defined in

actions/ses.ts:29

___

### CreateConfigurationSetEventDestination

• **CreateConfigurationSetEventDestination** = ``"ses:CreateConfigurationSetEventDestination"``

Grants permission to create a configuration set event destination

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateConfigurationSetEventDestination.html

#### Defined in

actions/ses.ts:35

___

### CreateContact

• **CreateContact** = ``"ses:CreateContact"``

Grants permission to create a contact

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContact.html

#### Defined in

actions/ses.ts:41

___

### CreateContactList

• **CreateContactList** = ``"ses:CreateContactList"``

Grants permission to create a contact list

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContactList.html

#### Defined in

actions/ses.ts:47

___

### CreateCustomVerificationEmailTemplate

• **CreateCustomVerificationEmailTemplate** = ``"ses:CreateCustomVerificationEmailTemplate"``

Grants permission to create a new custom verification email template

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateCustomVerificationEmailTemplate.html

#### Defined in

actions/ses.ts:53

___

### CreateDedicatedIpPool

• **CreateDedicatedIpPool** = ``"ses:CreateDedicatedIpPool"``

Grants permission to create a new pool of dedicated IP addresses

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateDedicatedIpPool.html

#### Defined in

actions/ses.ts:59

___

### CreateDeliverabilityTestReport

• **CreateDeliverabilityTestReport** = ``"ses:CreateDeliverabilityTestReport"``

Grants permission to create a new predictive inbox placement test

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateDeliverabilityTestReport.html

#### Defined in

actions/ses.ts:65

___

### CreateEmailIdentity

• **CreateEmailIdentity** = ``"ses:CreateEmailIdentity"``

Grants permission to start the process of verifying an email identity

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailIdentity.html

#### Defined in

actions/ses.ts:71

___

### CreateEmailIdentityPolicy

• **CreateEmailIdentityPolicy** = ``"ses:CreateEmailIdentityPolicy"``

Grants permission to create the specified sending authorization policy for the
given identity

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailIdentityPolicy.html

#### Defined in

actions/ses.ts:78

___

### CreateEmailTemplate

• **CreateEmailTemplate** = ``"ses:CreateEmailTemplate"``

Grants permission to create an email template

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailTemplate.html

#### Defined in

actions/ses.ts:84

___

### CreateExportJob

• **CreateExportJob** = ``"ses:CreateExportJob"``

Grants permission to create an export job

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateExportJob.html

#### Defined in

actions/ses.ts:90

___

### CreateImportJob

• **CreateImportJob** = ``"ses:CreateImportJob"``

Grants permission to creates an import job for a data destination

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateImportJob.html

#### Defined in

actions/ses.ts:96

___

### DeleteConfigurationSet

• **DeleteConfigurationSet** = ``"ses:DeleteConfigurationSet"``

Grants permission to delete an existing configuration set

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteConfigurationSet.html

#### Defined in

actions/ses.ts:102

___

### DeleteConfigurationSetEventDestination

• **DeleteConfigurationSetEventDestination** = ``"ses:DeleteConfigurationSetEventDestination"``

Grants permission to delete an event destination

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteConfigurationSetEventDestination.html

#### Defined in

actions/ses.ts:108

___

### DeleteContact

• **DeleteContact** = ``"ses:DeleteContact"``

Grants permission to delete a contact from a contact list

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContact.html

#### Defined in

actions/ses.ts:114

___

### DeleteContactList

• **DeleteContactList** = ``"ses:DeleteContactList"``

Grants permission to delete a contact list with all of its contacts

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContactList.html

#### Defined in

actions/ses.ts:120

___

### DeleteCustomVerificationEmailTemplate

• **DeleteCustomVerificationEmailTemplate** = ``"ses:DeleteCustomVerificationEmailTemplate"``

Grants permission to delete an existing custom verification email template

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteCustomVerificationEmailTemplate.html

#### Defined in

actions/ses.ts:126

___

### DeleteDedicatedIpPool

• **DeleteDedicatedIpPool** = ``"ses:DeleteDedicatedIpPool"``

Grants permission to delete a dedicated IP pool

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteDedicatedIpPool.html

#### Defined in

actions/ses.ts:132

___

### DeleteEmailIdentity

• **DeleteEmailIdentity** = ``"ses:DeleteEmailIdentity"``

Grants permission to delete an email identity

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailIdentity.html

#### Defined in

actions/ses.ts:138

___

### DeleteEmailIdentityPolicy

• **DeleteEmailIdentityPolicy** = ``"ses:DeleteEmailIdentityPolicy"``

Grants permission to delete the specified sending authorization policy for the
given identity (an email address or a domain)

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailIdentityPolicy.html

#### Defined in

actions/ses.ts:145

___

### DeleteEmailTemplate

• **DeleteEmailTemplate** = ``"ses:DeleteEmailTemplate"``

Grants permission to delete an email template

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailTemplate.html

#### Defined in

actions/ses.ts:151

___

### DeleteSuppressedDestination

• **DeleteSuppressedDestination** = ``"ses:DeleteSuppressedDestination"``

Grants permission to remove an email address from the suppression list for your
account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteSuppressedDestination.html

#### Defined in

actions/ses.ts:158

___

### GetAccount

• **GetAccount** = ``"ses:GetAccount"``

Grants permission to get information about the email-sending status and capabil
ities for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetAccount.html

#### Defined in

actions/ses.ts:165

___

### GetBlacklistReports

• **GetBlacklistReports** = ``"ses:GetBlacklistReports"``

Grants permission to retrieve a list of the deny lists on which your dedicated
IP addresses or tracked domains appear

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetBlacklistReports.html

#### Defined in

actions/ses.ts:172

___

### GetConfigurationSet

• **GetConfigurationSet** = ``"ses:GetConfigurationSet"``

Grants permission to get information about an existing configuration set

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetConfigurationSet.html

#### Defined in

actions/ses.ts:178

___

### GetConfigurationSetEventDestinations

• **GetConfigurationSetEventDestinations** = ``"ses:GetConfigurationSetEventDestinations"``

Grants permission to retrieve a list of event destinations that are associated
with a configuration set

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetConfigurationSetEventDestinations.html

#### Defined in

actions/ses.ts:185

___

### GetContact

• **GetContact** = ``"ses:GetContact"``

Grants permission to return a contact from a contact list

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContact.html

#### Defined in

actions/ses.ts:191

___

### GetContactList

• **GetContactList** = ``"ses:GetContactList"``

Grants permission to return contact list metadata

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContactList.html

#### Defined in

actions/ses.ts:197

___

### GetCustomVerificationEmailTemplate

• **GetCustomVerificationEmailTemplate** = ``"ses:GetCustomVerificationEmailTemplate"``

Grants permission to return the custom email verification template for the temp
late name you specify

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetCustomVerificationEmailTemplate.html

#### Defined in

actions/ses.ts:204

___

### GetDedicatedIp

• **GetDedicatedIp** = ``"ses:GetDedicatedIp"``

Grants permission to get information about a dedicated IP address

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIp.html

#### Defined in

actions/ses.ts:210

___

### GetDedicatedIpPool

• **GetDedicatedIpPool** = ``"ses:GetDedicatedIpPool"``

Grants permission to get information about a dedicated IP pool

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIpPool.html

#### Defined in

actions/ses.ts:216

___

### GetDedicatedIps

• **GetDedicatedIps** = ``"ses:GetDedicatedIps"``

Grants permission to list the dedicated IP addresses a dedicated IP pool

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIps.html

#### Defined in

actions/ses.ts:222

___

### GetDeliverabilityDashboardOptions

• **GetDeliverabilityDashboardOptions** = ``"ses:GetDeliverabilityDashboardOptions"``

Grants permission to get the status of the Deliverability dashboard

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDeliverabilityDashboardOptions.html

#### Defined in

actions/ses.ts:228

___

### GetDeliverabilityTestReport

• **GetDeliverabilityTestReport** = ``"ses:GetDeliverabilityTestReport"``

Grants permission to retrieve the results of a predictive inbox placement test

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDeliverabilityTestReport.html

#### Defined in

actions/ses.ts:234

___

### GetDomainDeliverabilityCampaign

• **GetDomainDeliverabilityCampaign** = ``"ses:GetDomainDeliverabilityCampaign"``

Grants permission to retrieve all the deliverability data for a specific campai
gn

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDomainDeliverabilityCampaign.html

#### Defined in

actions/ses.ts:241

___

### GetDomainStatisticsReport

• **GetDomainStatisticsReport** = ``"ses:GetDomainStatisticsReport"``

Grants permission to retrieve inbox placement and engagement rates for the doma
ins that you use to send email

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDomainStatisticsReport.html

#### Defined in

actions/ses.ts:248

___

### GetEmailIdentity

• **GetEmailIdentity** = ``"ses:GetEmailIdentity"``

Grants permission to get information about a specific identity

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailIdentity.html

#### Defined in

actions/ses.ts:254

___

### GetEmailIdentityPolicies

• **GetEmailIdentityPolicies** = ``"ses:GetEmailIdentityPolicies"``

Grants permission to return the requested sending authorization policies for th
e given identity (an email address or a domain)

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailIdentityPolicies.html

#### Defined in

actions/ses.ts:261

___

### GetEmailTemplate

• **GetEmailTemplate** = ``"ses:GetEmailTemplate"``

Grants permission to return the template object, which includes the subject lin
e, HTML part, and text part for the template you specify

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailTemplate.html

#### Defined in

actions/ses.ts:268

___

### GetExportJob

• **GetExportJob** = ``"ses:GetExportJob"``

Grants permission to get information about an export job

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetExportJob.html

#### Defined in

actions/ses.ts:274

___

### GetImportJob

• **GetImportJob** = ``"ses:GetImportJob"``

Grants permission to provide information about an import job

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetImportJob.html

#### Defined in

actions/ses.ts:280

___

### GetMessageInsights

• **GetMessageInsights** = ``"ses:GetMessageInsights"``

Grants permission to provide insights about a message

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetMessageInsights.html

#### Defined in

actions/ses.ts:286

___

### GetSuppressedDestination

• **GetSuppressedDestination** = ``"ses:GetSuppressedDestination"``

Grants permission to retrieve information about a specific email address that's
on the suppression list for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetSuppressedDestination.html

#### Defined in

actions/ses.ts:293

___

### ListConfigurationSets

• **ListConfigurationSets** = ``"ses:ListConfigurationSets"``

Grants permission to list all of the configuration sets for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListConfigurationSets.html

#### Defined in

actions/ses.ts:299

___

### ListContactLists

• **ListContactLists** = ``"ses:ListContactLists"``

Grants permission to list all of the contact lists available for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListContactLists.html

#### Defined in

actions/ses.ts:305

___

### ListContacts

• **ListContacts** = ``"ses:ListContacts"``

Grants permission to list the contacts present in a specific contact list

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListContacts.html

#### Defined in

actions/ses.ts:311

___

### ListCustomVerificationEmailTemplates

• **ListCustomVerificationEmailTemplates** = ``"ses:ListCustomVerificationEmailTemplates"``

Grants permission to list all of the existing custom verification email templat
es for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListCustomVerificationEmailTemplates.html

#### Defined in

actions/ses.ts:318

___

### ListDedicatedIpPools

• **ListDedicatedIpPools** = ``"ses:ListDedicatedIpPools"``

Grants permission to list all of the dedicated IP pools for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDedicatedIpPools.html

#### Defined in

actions/ses.ts:324

___

### ListDeliverabilityTestReports

• **ListDeliverabilityTestReports** = ``"ses:ListDeliverabilityTestReports"``

Grants permission to retrieve the list of the predictive inbox placement tests
that you've performed, regardless of their statuses, for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDeliverabilityTestReports.html

#### Defined in

actions/ses.ts:331

___

### ListDomainDeliverabilityCampaigns

• **ListDomainDeliverabilityCampaigns** = ``"ses:ListDomainDeliverabilityCampaigns"``

Grants permission to list deliverability data for campaigns that used a specifi
c domain to send email during a specified time range

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDomainDeliverabilityCampaigns.html

#### Defined in

actions/ses.ts:338

___

### ListEmailIdentities

• **ListEmailIdentities** = ``"ses:ListEmailIdentities"``

Grants permission to list the email identities for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailIdentities.html

#### Defined in

actions/ses.ts:344

___

### ListEmailTemplates

• **ListEmailTemplates** = ``"ses:ListEmailTemplates"``

Grants permission to list all of the email templates for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailTemplates.html

#### Defined in

actions/ses.ts:350

___

### ListExportJobs

• **ListExportJobs** = ``"ses:ListExportJobs"``

Grants permission to list all the exports jobs for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListExportJobs.html

#### Defined in

actions/ses.ts:356

___

### ListImportJobs

• **ListImportJobs** = ``"ses:ListImportJobs"``

Grants permission to list all of the import jobs for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListImportJobs.html

#### Defined in

actions/ses.ts:362

___

### ListRecommendations

• **ListRecommendations** = ``"ses:ListRecommendations"``

Grants permission to list recommendations for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListRecommendations.html

#### Defined in

actions/ses.ts:368

___

### ListSuppressedDestinations

• **ListSuppressedDestinations** = ``"ses:ListSuppressedDestinations"``

Grants permission to list email addresses that are on the suppression list for
your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListSuppressedDestinations.html

#### Defined in

actions/ses.ts:375

___

### ListTagsForResource

• **ListTagsForResource** = ``"ses:ListTagsForResource"``

Grants permission to retrieve a list of the tags (keys and values) that are ass
ociated with a specific resource for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListTagsForResource.html

#### Defined in

actions/ses.ts:382

___

### PutAccountDedicatedIpWarmupAttributes

• **PutAccountDedicatedIpWarmupAttributes** = ``"ses:PutAccountDedicatedIpWarmupAttributes"``

Grants permission to enable or disable the automatic warm-up feature for dedica
ted IP addresses

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountDedicatedIpWarmupAttributes.html

#### Defined in

actions/ses.ts:389

___

### PutAccountDetails

• **PutAccountDetails** = ``"ses:PutAccountDetails"``

Grants permission to update your account details

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountDetails.html

#### Defined in

actions/ses.ts:395

___

### PutAccountSendingAttributes

• **PutAccountSendingAttributes** = ``"ses:PutAccountSendingAttributes"``

Grants permission to enable or disable the ability to send email for your accou
nt

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountSendingAttributes.html

#### Defined in

actions/ses.ts:402

___

### PutAccountSuppressionAttributes

• **PutAccountSuppressionAttributes** = ``"ses:PutAccountSuppressionAttributes"``

Grants permission to change the settings for the account-level suppression list

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountSuppressionAttributes.html

#### Defined in

actions/ses.ts:408

___

### PutAccountVdmAttributes

• **PutAccountVdmAttributes** = ``"ses:PutAccountVdmAttributes"``

Grants permission to change the settings for VDM for your account

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountVdmAttributes.html

#### Defined in

actions/ses.ts:414

___

### PutConfigurationSetDeliveryOptions

• **PutConfigurationSetDeliveryOptions** = ``"ses:PutConfigurationSetDeliveryOptions"``

Grants permission to associate a configuration set with a dedicated IP pool

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetDeliveryOptions.html

#### Defined in

actions/ses.ts:420

___

### PutConfigurationSetReputationOptions

• **PutConfigurationSetReputationOptions** = ``"ses:PutConfigurationSetReputationOptions"``

Grants permission to enable or disable collection of reputation metrics for ema
ils that you send using a particular configuration set

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetReputationOptions.html

#### Defined in

actions/ses.ts:427

___

### PutConfigurationSetSendingOptions

• **PutConfigurationSetSendingOptions** = ``"ses:PutConfigurationSetSendingOptions"``

Grants permission to enable or disable email sending for messages that use a pa
rticular configuration set

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetSendingOptions.html

#### Defined in

actions/ses.ts:434

___

### PutConfigurationSetSuppressionOptions

• **PutConfigurationSetSuppressionOptions** = ``"ses:PutConfigurationSetSuppressionOptions"``

Grants permission to specify the account suppression list preferences for a par
ticular configuration set

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetSuppressionOptions.html

#### Defined in

actions/ses.ts:441

___

### PutConfigurationSetTrackingOptions

• **PutConfigurationSetTrackingOptions** = ``"ses:PutConfigurationSetTrackingOptions"``

Grants permission to specify a custom domain to use for open and click tracking
elements in email that you send for a particular configuration set

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetTrackingOptions.html

#### Defined in

actions/ses.ts:448

___

### PutConfigurationSetVdmOptions

• **PutConfigurationSetVdmOptions** = ``"ses:PutConfigurationSetVdmOptions"``

Grants permission to override account-level VDM settings for a particular confi
guration set

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetVdmOptions.html

#### Defined in

actions/ses.ts:455

___

### PutDedicatedIpInPool

• **PutDedicatedIpInPool** = ``"ses:PutDedicatedIpInPool"``

Grants permission to move a dedicated IP address to an existing dedicated IP po
ol

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDedicatedIpInPool.html

#### Defined in

actions/ses.ts:462

___

### PutDedicatedIpPoolScalingAttributes

• **PutDedicatedIpPoolScalingAttributes** = ``"ses:PutDedicatedIpPoolScalingAttributes"``

Grants permission to transition a dedicated IP pool from Standard to Managed

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDedicatedIpPoolScalingAttributes.html

#### Defined in

actions/ses.ts:468

___

### PutDedicatedIpWarmupAttributes

• **PutDedicatedIpWarmupAttributes** = ``"ses:PutDedicatedIpWarmupAttributes"``

Grants permission to put Dedicated IP warm up attributes

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDedicatedIpWarmupAttributes.html

#### Defined in

actions/ses.ts:474

___

### PutDeliverabilityDashboardOption

• **PutDeliverabilityDashboardOption** = ``"ses:PutDeliverabilityDashboardOption"``

Grants permission to enable or disable the Deliverability dashboard

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDeliverabilityDashboardOption.html

#### Defined in

actions/ses.ts:480

___

### PutEmailIdentityConfigurationSetAttributes

• **PutEmailIdentityConfigurationSetAttributes** = ``"ses:PutEmailIdentityConfigurationSetAttributes"``

Grants permission to associate a configuration set with an email identity

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityConfigurationSetAttributes.html

#### Defined in

actions/ses.ts:486

___

### PutEmailIdentityDkimAttributes

• **PutEmailIdentityDkimAttributes** = ``"ses:PutEmailIdentityDkimAttributes"``

Grants permission to enable or disable DKIM authentication for an email identit
y

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityDkimAttributes.html

#### Defined in

actions/ses.ts:493

___

### PutEmailIdentityDkimSigningAttributes

• **PutEmailIdentityDkimSigningAttributes** = ``"ses:PutEmailIdentityDkimSigningAttributes"``

Grants permission to configure or change the DKIM authentication settings for a
n email domain identity

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityDkimSigningAttributes.html

#### Defined in

actions/ses.ts:500

___

### PutEmailIdentityFeedbackAttributes

• **PutEmailIdentityFeedbackAttributes** = ``"ses:PutEmailIdentityFeedbackAttributes"``

Grants permission to enable or disable feedback forwarding for an email identit
y

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityFeedbackAttributes.html

#### Defined in

actions/ses.ts:507

___

### PutEmailIdentityMailFromAttributes

• **PutEmailIdentityMailFromAttributes** = ``"ses:PutEmailIdentityMailFromAttributes"``

Grants permission to enable or disable the custom MAIL FROM domain configuratio
n for an email identity

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityMailFromAttributes.html

#### Defined in

actions/ses.ts:514

___

### PutSuppressedDestination

• **PutSuppressedDestination** = ``"ses:PutSuppressedDestination"``

Grants permission to add an email address to the suppression list

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutSuppressedDestination.html

#### Defined in

actions/ses.ts:520

___

### SendBulkEmail

• **SendBulkEmail** = ``"ses:SendBulkEmail"``

Grants permission to compose an email message to multiple destinations

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendBulkEmail.html

#### Defined in

actions/ses.ts:526

___

### SendCustomVerificationEmail

• **SendCustomVerificationEmail** = ``"ses:SendCustomVerificationEmail"``

Grants permission to add an email address to the list of identities and attempt
s to verify it

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendCustomVerificationEmail.html

#### Defined in

actions/ses.ts:533

___

### SendEmail

• **SendEmail** = ``"ses:SendEmail"``

Grants permission to send an email message

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html

#### Defined in

actions/ses.ts:539

___

### TagResource

• **TagResource** = ``"ses:TagResource"``

Grants permission to add one or more tags (keys and values) to a specified reso
urce

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TagResource.html

#### Defined in

actions/ses.ts:546

___

### TestRenderEmailTemplate

• **TestRenderEmailTemplate** = ``"ses:TestRenderEmailTemplate"``

Grants permission to create a preview of the MIME content of an email when prov
ided with a template and a set of replacement data

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TestRenderEmailTemplate.html

#### Defined in

actions/ses.ts:553

___

### UntagResource

• **UntagResource** = ``"ses:UntagResource"``

Grants permission to remove one or more tags (keys and values) from a specified
resource

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UntagResource.html

#### Defined in

actions/ses.ts:560

___

### UpdateConfigurationSetEventDestination

• **UpdateConfigurationSetEventDestination** = ``"ses:UpdateConfigurationSetEventDestination"``

Grants permission to update the configuration of an event destination for a con
figuration set

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateConfigurationSetEventDestination.html

#### Defined in

actions/ses.ts:567

___

### UpdateContact

• **UpdateContact** = ``"ses:UpdateContact"``

Grants permission to update a contact's preferences for a list

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateContact.html

#### Defined in

actions/ses.ts:573

___

### UpdateContactList

• **UpdateContactList** = ``"ses:UpdateContactList"``

Grants permission to update contact list metadata

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateContactList.html

#### Defined in

actions/ses.ts:579

___

### UpdateCustomVerificationEmailTemplate

• **UpdateCustomVerificationEmailTemplate** = ``"ses:UpdateCustomVerificationEmailTemplate"``

Grants permission to update an existing custom verification email template

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateCustomVerificationEmailTemplate.html

#### Defined in

actions/ses.ts:585

___

### UpdateEmailIdentityPolicy

• **UpdateEmailIdentityPolicy** = ``"ses:UpdateEmailIdentityPolicy"``

Grants permission to update the specified sending authorization policy for the
given identity (an email address or a domain)

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateEmailIdentityPolicy.html

#### Defined in

actions/ses.ts:592

___

### UpdateEmailTemplate

• **UpdateEmailTemplate** = ``"ses:UpdateEmailTemplate"``

Grants permission to update an email template

See https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateEmailTemplate.html

#### Defined in

actions/ses.ts:598
