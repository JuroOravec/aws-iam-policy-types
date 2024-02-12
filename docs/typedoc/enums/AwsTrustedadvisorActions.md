[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsTrustedadvisorActions

# Enumeration: AwsTrustedadvisorActions

All IAM policy actions for AWS Trusted Advisor (TRUSTEDADVISOR)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstrustedadvisor.html

2024-02-12T09:59:33.982Z

## Table of contents

### Enumeration Members

- [CreateEngagement](AwsTrustedadvisorActions.md#createengagement)
- [CreateEngagementAttachment](AwsTrustedadvisorActions.md#createengagementattachment)
- [CreateEngagementCommunication](AwsTrustedadvisorActions.md#createengagementcommunication)
- [DeleteNotificationConfigurationForDelegatedAdmin](AwsTrustedadvisorActions.md#deletenotificationconfigurationfordelegatedadmin)
- [DescribeAccount](AwsTrustedadvisorActions.md#describeaccount)
- [DescribeAccountAccess](AwsTrustedadvisorActions.md#describeaccountaccess)
- [DescribeCheckItems](AwsTrustedadvisorActions.md#describecheckitems)
- [DescribeCheckRefreshStatuses](AwsTrustedadvisorActions.md#describecheckrefreshstatuses)
- [DescribeCheckStatusHistoryChanges](AwsTrustedadvisorActions.md#describecheckstatushistorychanges)
- [DescribeCheckSummaries](AwsTrustedadvisorActions.md#describechecksummaries)
- [DescribeChecks](AwsTrustedadvisorActions.md#describechecks)
- [DescribeNotificationConfigurations](AwsTrustedadvisorActions.md#describenotificationconfigurations)
- [DescribeNotificationPreferences](AwsTrustedadvisorActions.md#describenotificationpreferences)
- [DescribeOrganization](AwsTrustedadvisorActions.md#describeorganization)
- [DescribeOrganizationAccounts](AwsTrustedadvisorActions.md#describeorganizationaccounts)
- [DescribeReports](AwsTrustedadvisorActions.md#describereports)
- [DescribeRisk](AwsTrustedadvisorActions.md#describerisk)
- [DescribeRiskResources](AwsTrustedadvisorActions.md#describeriskresources)
- [DescribeRisks](AwsTrustedadvisorActions.md#describerisks)
- [DescribeServiceMetadata](AwsTrustedadvisorActions.md#describeservicemetadata)
- [DownloadRisk](AwsTrustedadvisorActions.md#downloadrisk)
- [ExcludeCheckItems](AwsTrustedadvisorActions.md#excludecheckitems)
- [GenerateReport](AwsTrustedadvisorActions.md#generatereport)
- [GetEngagement](AwsTrustedadvisorActions.md#getengagement)
- [GetEngagementAttachment](AwsTrustedadvisorActions.md#getengagementattachment)
- [GetEngagementType](AwsTrustedadvisorActions.md#getengagementtype)
- [GetOrganizationRecommendation](AwsTrustedadvisorActions.md#getorganizationrecommendation)
- [GetRecommendation](AwsTrustedadvisorActions.md#getrecommendation)
- [IncludeCheckItems](AwsTrustedadvisorActions.md#includecheckitems)
- [ListAccountsForParent](AwsTrustedadvisorActions.md#listaccountsforparent)
- [ListChecks](AwsTrustedadvisorActions.md#listchecks)
- [ListEngagementCommunications](AwsTrustedadvisorActions.md#listengagementcommunications)
- [ListEngagementTypes](AwsTrustedadvisorActions.md#listengagementtypes)
- [ListEngagements](AwsTrustedadvisorActions.md#listengagements)
- [ListOrganizationRecommendationAccounts](AwsTrustedadvisorActions.md#listorganizationrecommendationaccounts)
- [ListOrganizationRecommendationResources](AwsTrustedadvisorActions.md#listorganizationrecommendationresources)
- [ListOrganizationRecommendations](AwsTrustedadvisorActions.md#listorganizationrecommendations)
- [ListOrganizationalUnitsForParent](AwsTrustedadvisorActions.md#listorganizationalunitsforparent)
- [ListRecommendationResources](AwsTrustedadvisorActions.md#listrecommendationresources)
- [ListRecommendations](AwsTrustedadvisorActions.md#listrecommendations)
- [ListRoots](AwsTrustedadvisorActions.md#listroots)
- [RefreshCheck](AwsTrustedadvisorActions.md#refreshcheck)
- [SetAccountAccess](AwsTrustedadvisorActions.md#setaccountaccess)
- [SetOrganizationAccess](AwsTrustedadvisorActions.md#setorganizationaccess)
- [UpdateEngagement](AwsTrustedadvisorActions.md#updateengagement)
- [UpdateEngagementStatus](AwsTrustedadvisorActions.md#updateengagementstatus)
- [UpdateNotificationConfigurations](AwsTrustedadvisorActions.md#updatenotificationconfigurations)
- [UpdateNotificationPreferences](AwsTrustedadvisorActions.md#updatenotificationpreferences)
- [UpdateOrganizationRecommendationLifecycle](AwsTrustedadvisorActions.md#updateorganizationrecommendationlifecycle)
- [UpdateRecommendationLifecycle](AwsTrustedadvisorActions.md#updaterecommendationlifecycle)
- [UpdateRiskStatus](AwsTrustedadvisorActions.md#updateriskstatus)

## Enumeration Members

### CreateEngagement

• **CreateEngagement** = ``"trustedadvisor:CreateEngagement"``

Grants permission to create an engagement

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:17

___

### CreateEngagementAttachment

• **CreateEngagementAttachment** = ``"trustedadvisor:CreateEngagementAttachment"``

Grants permission to create an engagement attachment

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:23

___

### CreateEngagementCommunication

• **CreateEngagementCommunication** = ``"trustedadvisor:CreateEngagementCommunication"``

Grants permission to create an engagement communication

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:29

___

### DeleteNotificationConfigurationForDelegatedAdmin

• **DeleteNotificationConfigurationForDelegatedAdmin** = ``"trustedadvisor:DeleteNotificationConfigurationForDelegatedAdmin"``

Grants permission to the organization management account to delete email notifi
cation preferences from a delegated administrator account for Trusted Advisor P
riority

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:37

___

### DescribeAccount

• **DescribeAccount** = ``"trustedadvisor:DescribeAccount"``

Grants permission to view the AWS Support plan and various AWS Trusted Advisor
preferences

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:44

___

### DescribeAccountAccess

• **DescribeAccountAccess** = ``"trustedadvisor:DescribeAccountAccess"``

Grants permission to view if the AWS account has enabled or disabled AWS Truste
d Advisor

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:51

___

### DescribeCheckItems

• **DescribeCheckItems** = ``"trustedadvisor:DescribeCheckItems"``

Grants permission to view details for the check items

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:57

___

### DescribeCheckRefreshStatuses

• **DescribeCheckRefreshStatuses** = ``"trustedadvisor:DescribeCheckRefreshStatuses"``

Grants permission to view the refresh statuses for AWS Trusted Advisor checks

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:63

___

### DescribeCheckStatusHistoryChanges

• **DescribeCheckStatusHistoryChanges** = ``"trustedadvisor:DescribeCheckStatusHistoryChanges"``

Grants permission to view the results and changed statuses for checks in the la
st 30 days

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:70

___

### DescribeCheckSummaries

• **DescribeCheckSummaries** = ``"trustedadvisor:DescribeCheckSummaries"``

Grants permission to view AWS Trusted Advisor check summaries

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:76

___

### DescribeChecks

• **DescribeChecks** = ``"trustedadvisor:DescribeChecks"``

Grants permission to view details for AWS Trusted Advisor checks

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:82

___

### DescribeNotificationConfigurations

• **DescribeNotificationConfigurations** = ``"trustedadvisor:DescribeNotificationConfigurations"``

Grants permission to get your email notification preferences for Trusted Adviso
r Priority

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:89

___

### DescribeNotificationPreferences

• **DescribeNotificationPreferences** = ``"trustedadvisor:DescribeNotificationPreferences"``

Grants permission to view the notification preferences for the AWS account

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:95

___

### DescribeOrganization

• **DescribeOrganization** = ``"trustedadvisor:DescribeOrganization"``

Grants permission to view if the AWS account meets the requirements to enable t
he organizational view feature

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:102

___

### DescribeOrganizationAccounts

• **DescribeOrganizationAccounts** = ``"trustedadvisor:DescribeOrganizationAccounts"``

Grants permission to view the linked AWS accounts that are in the organization

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:108

___

### DescribeReports

• **DescribeReports** = ``"trustedadvisor:DescribeReports"``

Grants permission to view details for organizational view reports, such as the
report name, runtime, date created, status, and format

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:115

___

### DescribeRisk

• **DescribeRisk** = ``"trustedadvisor:DescribeRisk"``

Grants permission to view risk details in AWS Trusted Advisor Priority

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:121

___

### DescribeRiskResources

• **DescribeRiskResources** = ``"trustedadvisor:DescribeRiskResources"``

Grants permission to view affected resources for a risk in AWS Trusted Advisor
Priority

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:128

___

### DescribeRisks

• **DescribeRisks** = ``"trustedadvisor:DescribeRisks"``

Grants permission to view risks in AWS Trusted Advisor Priority

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:134

___

### DescribeServiceMetadata

• **DescribeServiceMetadata** = ``"trustedadvisor:DescribeServiceMetadata"``

Grants permission to view information about organizational view reports, such a
s the AWS Regions, check categories, check names, and resource statuses

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:141

___

### DownloadRisk

• **DownloadRisk** = ``"trustedadvisor:DownloadRisk"``

Grants permission to download a file that contains details about the risk in AW
S Trusted Advisor Priority

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:148

___

### ExcludeCheckItems

• **ExcludeCheckItems** = ``"trustedadvisor:ExcludeCheckItems"``

Grants permission to exclude recommendations for AWS Trusted Advisor checks

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:154

___

### GenerateReport

• **GenerateReport** = ``"trustedadvisor:GenerateReport"``

Grants permission to create a report for AWS Trusted Advisor checks in your org
anization

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:161

___

### GetEngagement

• **GetEngagement** = ``"trustedadvisor:GetEngagement"``

Grants permission to view an engagment

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:167

___

### GetEngagementAttachment

• **GetEngagementAttachment** = ``"trustedadvisor:GetEngagementAttachment"``

Grants permission to view an engagment attachment

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:173

___

### GetEngagementType

• **GetEngagementType** = ``"trustedadvisor:GetEngagementType"``

Grants permission to view a specific engagement type

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:179

___

### GetOrganizationRecommendation

• **GetOrganizationRecommendation** = ``"trustedadvisor:GetOrganizationRecommendation"``

Grants permission to get a specific recommendation within an AWS Organization's
organization. This API supports only prioritized recommendations

See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html

#### Defined in

actions/trustedadvisor.ts:186

___

### GetRecommendation

• **GetRecommendation** = ``"trustedadvisor:GetRecommendation"``

Grants permission to get a specific Recommendation

See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html

#### Defined in

actions/trustedadvisor.ts:192

___

### IncludeCheckItems

• **IncludeCheckItems** = ``"trustedadvisor:IncludeCheckItems"``

Grants permission to include recommendations for AWS Trusted Advisor checks

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:198

___

### ListAccountsForParent

• **ListAccountsForParent** = ``"trustedadvisor:ListAccountsForParent"``

Grants permission to view, in the Trusted Advisor console, all of the accounts
in an AWS organization that are contained by a root or organizational unit (OU)

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:205

___

### ListChecks

• **ListChecks** = ``"trustedadvisor:ListChecks"``

Grants permission to list a filterable set of Checks

See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html

#### Defined in

actions/trustedadvisor.ts:211

___

### ListEngagementCommunications

• **ListEngagementCommunications** = ``"trustedadvisor:ListEngagementCommunications"``

Grants permission to view all communications for an engagement

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:217

___

### ListEngagementTypes

• **ListEngagementTypes** = ``"trustedadvisor:ListEngagementTypes"``

Grants permission to view all engagement types

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:223

___

### ListEngagements

• **ListEngagements** = ``"trustedadvisor:ListEngagements"``

Grants permission to view all engagements

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:229

___

### ListOrganizationRecommendationAccounts

• **ListOrganizationRecommendationAccounts** = ``"trustedadvisor:ListOrganizationRecommendationAccounts"``

Grants permission to list the accounts that own the resources for an AWS Organi
zation aggregate recommendation. This API only supports prioritized recommendat
ions

See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html

#### Defined in

actions/trustedadvisor.ts:237

___

### ListOrganizationRecommendationResources

• **ListOrganizationRecommendationResources** = ``"trustedadvisor:ListOrganizationRecommendationResources"``

Grants permission to list Resources of a Recommendation within an AWS Organizat
ion. This API only supports prioritized recommendations

See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html

#### Defined in

actions/trustedadvisor.ts:244

___

### ListOrganizationRecommendations

• **ListOrganizationRecommendations** = ``"trustedadvisor:ListOrganizationRecommendations"``

Grants permission to list a filterable set of Recommendations within an AWS Org
anization. This API only supports prioritized recommendations

See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html

#### Defined in

actions/trustedadvisor.ts:251

___

### ListOrganizationalUnitsForParent

• **ListOrganizationalUnitsForParent** = ``"trustedadvisor:ListOrganizationalUnitsForParent"``

Grants permission to view, in the Trusted Advisor console, all of the organizat
ional units (OUs) in a parent organizational unit or root

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:258

___

### ListRecommendationResources

• **ListRecommendationResources** = ``"trustedadvisor:ListRecommendationResources"``

Grants permission to list Resources of a Recommendation

See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html

#### Defined in

actions/trustedadvisor.ts:264

___

### ListRecommendations

• **ListRecommendations** = ``"trustedadvisor:ListRecommendations"``

Grants permission to list a filterable set of Recommendations

See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html

#### Defined in

actions/trustedadvisor.ts:270

___

### ListRoots

• **ListRoots** = ``"trustedadvisor:ListRoots"``

Grants permission to view, in the Trusted Advisor console, all of the roots tha
t are defined in an AWS organization

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:277

___

### RefreshCheck

• **RefreshCheck** = ``"trustedadvisor:RefreshCheck"``

Grants permission to refresh an AWS Trusted Advisor check

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:283

___

### SetAccountAccess

• **SetAccountAccess** = ``"trustedadvisor:SetAccountAccess"``

Grants permission to enable or disable AWS Trusted Advisor for the account

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:289

___

### SetOrganizationAccess

• **SetOrganizationAccess** = ``"trustedadvisor:SetOrganizationAccess"``

Grants permission to enable the organizational view feature for AWS Trusted Adv
isor

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:296

___

### UpdateEngagement

• **UpdateEngagement** = ``"trustedadvisor:UpdateEngagement"``

Grants permission to update the details of an engagement

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:302

___

### UpdateEngagementStatus

• **UpdateEngagementStatus** = ``"trustedadvisor:UpdateEngagementStatus"``

Grants permission to update the status of an engagement

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:308

___

### UpdateNotificationConfigurations

• **UpdateNotificationConfigurations** = ``"trustedadvisor:UpdateNotificationConfigurations"``

Grants permission to create or update your email notification preferences for T
rusted Advisor Priority

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:315

___

### UpdateNotificationPreferences

• **UpdateNotificationPreferences** = ``"trustedadvisor:UpdateNotificationPreferences"``

Grants permission to update notification preferences for AWS Trusted Advisor

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:321

___

### UpdateOrganizationRecommendationLifecycle

• **UpdateOrganizationRecommendationLifecycle** = ``"trustedadvisor:UpdateOrganizationRecommendationLifecycle"``

Grants permission to update the lifecyle of a Recommendation within an AWS Orga
nization. This API only supports prioritized recommendations

See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html

#### Defined in

actions/trustedadvisor.ts:328

___

### UpdateRecommendationLifecycle

• **UpdateRecommendationLifecycle** = ``"trustedadvisor:UpdateRecommendationLifecycle"``

Grants permission to update the lifecyle of a Recommendation. This API only sup
ports prioritized recommendations

See https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html

#### Defined in

actions/trustedadvisor.ts:335

___

### UpdateRiskStatus

• **UpdateRiskStatus** = ``"trustedadvisor:UpdateRiskStatus"``

Grants permission to update the risk status in AWS Trusted Advisor Priority

See https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations

#### Defined in

actions/trustedadvisor.ts:341
