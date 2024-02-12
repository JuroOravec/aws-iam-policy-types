[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsInspector2Actions

# Enumeration: AwsInspector2Actions

All IAM policy actions for Amazon Inspector2 (INSPECTOR2)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector2.html

2024-02-12T09:57:43.539Z

## Table of contents

### Enumeration Members

- [AssociateMember](AwsInspector2Actions.md#associatemember)
- [BatchGetAccountStatus](AwsInspector2Actions.md#batchgetaccountstatus)
- [BatchGetCodeSnippet](AwsInspector2Actions.md#batchgetcodesnippet)
- [BatchGetFindingDetails](AwsInspector2Actions.md#batchgetfindingdetails)
- [BatchGetFreeTrialInfo](AwsInspector2Actions.md#batchgetfreetrialinfo)
- [BatchGetMemberEc2DeepInspectionStatus](AwsInspector2Actions.md#batchgetmemberec2deepinspectionstatus)
- [BatchUpdateMemberEc2DeepInspectionStatus](AwsInspector2Actions.md#batchupdatememberec2deepinspectionstatus)
- [CancelFindingsReport](AwsInspector2Actions.md#cancelfindingsreport)
- [CancelSbomExport](AwsInspector2Actions.md#cancelsbomexport)
- [CreateCisScanConfiguration](AwsInspector2Actions.md#createcisscanconfiguration)
- [CreateFilter](AwsInspector2Actions.md#createfilter)
- [CreateFindingsReport](AwsInspector2Actions.md#createfindingsreport)
- [CreateSbomExport](AwsInspector2Actions.md#createsbomexport)
- [DeleteCisScanConfiguration](AwsInspector2Actions.md#deletecisscanconfiguration)
- [DeleteFilter](AwsInspector2Actions.md#deletefilter)
- [DescribeOrganizationConfiguration](AwsInspector2Actions.md#describeorganizationconfiguration)
- [Disable](AwsInspector2Actions.md#disable)
- [DisableDelegatedAdminAccount](AwsInspector2Actions.md#disabledelegatedadminaccount)
- [DisassociateMember](AwsInspector2Actions.md#disassociatemember)
- [Enable](AwsInspector2Actions.md#enable)
- [EnableDelegatedAdminAccount](AwsInspector2Actions.md#enabledelegatedadminaccount)
- [GetCisScanReport](AwsInspector2Actions.md#getcisscanreport)
- [GetCisScanResultDetails](AwsInspector2Actions.md#getcisscanresultdetails)
- [GetConfiguration](AwsInspector2Actions.md#getconfiguration)
- [GetDelegatedAdminAccount](AwsInspector2Actions.md#getdelegatedadminaccount)
- [GetEc2DeepInspectionConfiguration](AwsInspector2Actions.md#getec2deepinspectionconfiguration)
- [GetEncryptionKey](AwsInspector2Actions.md#getencryptionkey)
- [GetFindingsReportStatus](AwsInspector2Actions.md#getfindingsreportstatus)
- [GetMember](AwsInspector2Actions.md#getmember)
- [GetSbomExport](AwsInspector2Actions.md#getsbomexport)
- [ListAccountPermissions](AwsInspector2Actions.md#listaccountpermissions)
- [ListCisScanConfigurations](AwsInspector2Actions.md#listcisscanconfigurations)
- [ListCisScanResultsAggregatedByChecks](AwsInspector2Actions.md#listcisscanresultsaggregatedbychecks)
- [ListCisScanResultsAggregatedByTargetResource](AwsInspector2Actions.md#listcisscanresultsaggregatedbytargetresource)
- [ListCisScans](AwsInspector2Actions.md#listcisscans)
- [ListCoverage](AwsInspector2Actions.md#listcoverage)
- [ListCoverageStatistics](AwsInspector2Actions.md#listcoveragestatistics)
- [ListDelegatedAdminAccounts](AwsInspector2Actions.md#listdelegatedadminaccounts)
- [ListFilters](AwsInspector2Actions.md#listfilters)
- [ListFindingAggregations](AwsInspector2Actions.md#listfindingaggregations)
- [ListFindings](AwsInspector2Actions.md#listfindings)
- [ListMembers](AwsInspector2Actions.md#listmembers)
- [ListTagsForResource](AwsInspector2Actions.md#listtagsforresource)
- [ListUsageTotals](AwsInspector2Actions.md#listusagetotals)
- [ResetEncryptionKey](AwsInspector2Actions.md#resetencryptionkey)
- [SearchVulnerabilities](AwsInspector2Actions.md#searchvulnerabilities)
- [SendCisSessionHealth](AwsInspector2Actions.md#sendcissessionhealth)
- [SendCisSessionTelemetry](AwsInspector2Actions.md#sendcissessiontelemetry)
- [StartCisSession](AwsInspector2Actions.md#startcissession)
- [StopCisSession](AwsInspector2Actions.md#stopcissession)
- [TagResource](AwsInspector2Actions.md#tagresource)
- [UntagResource](AwsInspector2Actions.md#untagresource)
- [UpdateCisScanConfiguration](AwsInspector2Actions.md#updatecisscanconfiguration)
- [UpdateConfiguration](AwsInspector2Actions.md#updateconfiguration)
- [UpdateEc2DeepInspectionConfiguration](AwsInspector2Actions.md#updateec2deepinspectionconfiguration)
- [UpdateEncryptionKey](AwsInspector2Actions.md#updateencryptionkey)
- [UpdateFilter](AwsInspector2Actions.md#updatefilter)
- [UpdateOrgEc2DeepInspectionConfiguration](AwsInspector2Actions.md#updateorgec2deepinspectionconfiguration)
- [UpdateOrganizationConfiguration](AwsInspector2Actions.md#updateorganizationconfiguration)

## Enumeration Members

### AssociateMember

• **AssociateMember** = ``"inspector2:AssociateMember"``

Grants permission to associate an account with an Amazon Inspector administrato
r account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_AssociateMember.html

#### Defined in

actions/inspector2.ts:18

___

### BatchGetAccountStatus

• **BatchGetAccountStatus** = ``"inspector2:BatchGetAccountStatus"``

Grants permission to retrieve information about Amazon Inspector accounts for a
n account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetAccountStatus.html

#### Defined in

actions/inspector2.ts:25

___

### BatchGetCodeSnippet

• **BatchGetCodeSnippet** = ``"inspector2:BatchGetCodeSnippet"``

Grants permission to retrieve code snippet information about one or more code v
ulnerability findings

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetCodeSnippet.html

#### Defined in

actions/inspector2.ts:32

___

### BatchGetFindingDetails

• **BatchGetFindingDetails** = ``"inspector2:BatchGetFindingDetails"``

Grants permission to let a customer get enhanced vulnerability intelligence det
ails for findings

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetFindingDetails.html

#### Defined in

actions/inspector2.ts:39

___

### BatchGetFreeTrialInfo

• **BatchGetFreeTrialInfo** = ``"inspector2:BatchGetFreeTrialInfo"``

Grants permission to retrieve free trial period eligibility about Amazon Inspec
tor accounts for an account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetFreeTrialInfo.html

#### Defined in

actions/inspector2.ts:46

___

### BatchGetMemberEc2DeepInspectionStatus

• **BatchGetMemberEc2DeepInspectionStatus** = ``"inspector2:BatchGetMemberEc2DeepInspectionStatus"``

Grants permission to delegated administrator to retrieve ec2 deep inspection st
atus of member accounts

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetMemberEc2DeepInspectionStatus.html

#### Defined in

actions/inspector2.ts:53

___

### BatchUpdateMemberEc2DeepInspectionStatus

• **BatchUpdateMemberEc2DeepInspectionStatus** = ``"inspector2:BatchUpdateMemberEc2DeepInspectionStatus"``

Grants permission to update ec2 deep inspection status by delegated administrat
or for its associated member accounts

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html

#### Defined in

actions/inspector2.ts:60

___

### CancelFindingsReport

• **CancelFindingsReport** = ``"inspector2:CancelFindingsReport"``

Grants permission to cancel the generation of a findings report

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_CancelFindingsReport.html

#### Defined in

actions/inspector2.ts:66

___

### CancelSbomExport

• **CancelSbomExport** = ``"inspector2:CancelSbomExport"``

Grants permission to cancel the generation of an SBOM report

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_CancelSbomExport.html

#### Defined in

actions/inspector2.ts:72

___

### CreateCisScanConfiguration

• **CreateCisScanConfiguration** = ``"inspector2:CreateCisScanConfiguration"``

Grants permission to create and define the settings for a CIS scan configuratio
n

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_CreateCisScanConfiguration.html

#### Defined in

actions/inspector2.ts:79

___

### CreateFilter

• **CreateFilter** = ``"inspector2:CreateFilter"``

Grants permission to create and define the settings for a findings filter

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_CreateFilter.html

#### Defined in

actions/inspector2.ts:85

___

### CreateFindingsReport

• **CreateFindingsReport** = ``"inspector2:CreateFindingsReport"``

Grants permission to request the generation of a findings report

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_CreateFindingsReport.html

#### Defined in

actions/inspector2.ts:91

___

### CreateSbomExport

• **CreateSbomExport** = ``"inspector2:CreateSbomExport"``

Grants permission to request the generation of an SBOM report

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_CreateSbomExport.html

#### Defined in

actions/inspector2.ts:97

___

### DeleteCisScanConfiguration

• **DeleteCisScanConfiguration** = ``"inspector2:DeleteCisScanConfiguration"``

Grants permission to delete a CIS scan configuration

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_DeleteCisScanConfiguration.html

#### Defined in

actions/inspector2.ts:103

___

### DeleteFilter

• **DeleteFilter** = ``"inspector2:DeleteFilter"``

Grants permission to delete a findings filter

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_DeleteFilter.html

#### Defined in

actions/inspector2.ts:109

___

### DescribeOrganizationConfiguration

• **DescribeOrganizationConfiguration** = ``"inspector2:DescribeOrganizationConfiguration"``

Grants permission to retrieve information about the Amazon Inspector configurat
ion settings for an AWS organization

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_DescribeOrganizationConfiguration.html

#### Defined in

actions/inspector2.ts:116

___

### Disable

• **Disable** = ``"inspector2:Disable"``

Grants permission to disable an Amazon Inspector account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_Disable.html

#### Defined in

actions/inspector2.ts:122

___

### DisableDelegatedAdminAccount

• **DisableDelegatedAdminAccount** = ``"inspector2:DisableDelegatedAdminAccount"``

Grants permission to disable an account as the delegated Amazon Inspector admin
istrator account for an AWS organization

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_DisableDelegatedAdminAccount.html

#### Defined in

actions/inspector2.ts:129

___

### DisassociateMember

• **DisassociateMember** = ``"inspector2:DisassociateMember"``

Grants permission to an Amazon Inspector administrator account to disassociate
from an Inspector member account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_DisassociateMember.html

#### Defined in

actions/inspector2.ts:136

___

### Enable

• **Enable** = ``"inspector2:Enable"``

Grants permission to enable and specify the configuration settings for a new Am
azon Inspector account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_Enable.html

#### Defined in

actions/inspector2.ts:143

___

### EnableDelegatedAdminAccount

• **EnableDelegatedAdminAccount** = ``"inspector2:EnableDelegatedAdminAccount"``

Grants permission to enable an account as the delegated Amazon Inspector admini
strator account for an AWS organization

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_EnableDelegatedAdminAccount.html

#### Defined in

actions/inspector2.ts:150

___

### GetCisScanReport

• **GetCisScanReport** = ``"inspector2:GetCisScanReport"``

Grants permission to retrieve a report containing information about completed C
IS scans

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetCisScanReport.html

#### Defined in

actions/inspector2.ts:157

___

### GetCisScanResultDetails

• **GetCisScanResultDetails** = ``"inspector2:GetCisScanResultDetails"``

Grants permission to retrieve information about all details pertaining to one C
IS scan and one targeted resource

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetCisScanResultDetails.html

#### Defined in

actions/inspector2.ts:164

___

### GetConfiguration

• **GetConfiguration** = ``"inspector2:GetConfiguration"``

Grants permission to retrieve information about the Amazon Inspector configurat
ion settings for an AWS account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetConfiguration.html

#### Defined in

actions/inspector2.ts:171

___

### GetDelegatedAdminAccount

• **GetDelegatedAdminAccount** = ``"inspector2:GetDelegatedAdminAccount"``

Grants permission to retrieve information about the Amazon Inspector administra
tor account for an account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetDelegatedAdminAccount.html

#### Defined in

actions/inspector2.ts:178

___

### GetEc2DeepInspectionConfiguration

• **GetEc2DeepInspectionConfiguration** = ``"inspector2:GetEc2DeepInspectionConfiguration"``

Grants permission to retrieve ec2 deep inspection configuration for standalone
accounts, delegated administrator and member account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetEc2DeepInspectionConfiguration.html

#### Defined in

actions/inspector2.ts:185

___

### GetEncryptionKey

• **GetEncryptionKey** = ``"inspector2:GetEncryptionKey"``

Grants permission to retrieve information about the KMS key used to encrypt cod
e snippets with

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetEncryptionKey.html

#### Defined in

actions/inspector2.ts:192

___

### GetFindingsReportStatus

• **GetFindingsReportStatus** = ``"inspector2:GetFindingsReportStatus"``

Grants permission to retrieve status for a requested findings report

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetFindingsReportStatus.html

#### Defined in

actions/inspector2.ts:198

___

### GetMember

• **GetMember** = ``"inspector2:GetMember"``

Grants permission to retrieve information about an account that's associated wi
th an Amazon Inspector administrator account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetMember.html

#### Defined in

actions/inspector2.ts:205

___

### GetSbomExport

• **GetSbomExport** = ``"inspector2:GetSbomExport"``

Grants permission to retrieve a requested SBOM report

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetSbomExport.html

#### Defined in

actions/inspector2.ts:211

___

### ListAccountPermissions

• **ListAccountPermissions** = ``"inspector2:ListAccountPermissions"``

Grants permission to retrieve feature configuration permissions associated with
an Amazon Inspector account within an organization

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListAccountPermissions.html

#### Defined in

actions/inspector2.ts:218

___

### ListCisScanConfigurations

• **ListCisScanConfigurations** = ``"inspector2:ListCisScanConfigurations"``

Grants permission to retrieve information about all CIS scan configurations

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCisScanConfigurations.html

#### Defined in

actions/inspector2.ts:224

___

### ListCisScanResultsAggregatedByChecks

• **ListCisScanResultsAggregatedByChecks** = ``"inspector2:ListCisScanResultsAggregatedByChecks"``

Grants permission to retrieve information about all checks pertaining to one CI
S scan

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCisScanResultsAggregatedByChecks.html

#### Defined in

actions/inspector2.ts:231

___

### ListCisScanResultsAggregatedByTargetResource

• **ListCisScanResultsAggregatedByTargetResource** = ``"inspector2:ListCisScanResultsAggregatedByTargetResource"``

Grants permission to retrieve information about all resources pertaining to one
CIS scan

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCisScanResultsAggregatedByTargetResource.html

#### Defined in

actions/inspector2.ts:238

___

### ListCisScans

• **ListCisScans** = ``"inspector2:ListCisScans"``

Grants permission to retrieve information about completed CIS scans

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCisScans.html

#### Defined in

actions/inspector2.ts:244

___

### ListCoverage

• **ListCoverage** = ``"inspector2:ListCoverage"``

Grants permission to retrieve the types of statistics Amazon Inspector can gene
rate for resources Inspector monitors

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCoverage.html

#### Defined in

actions/inspector2.ts:251

___

### ListCoverageStatistics

• **ListCoverageStatistics** = ``"inspector2:ListCoverageStatistics"``

Grants permission to retrieve statistical data and other information about the
resources Amazon Inspector monitors

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCoverageStatistics.html

#### Defined in

actions/inspector2.ts:258

___

### ListDelegatedAdminAccounts

• **ListDelegatedAdminAccounts** = ``"inspector2:ListDelegatedAdminAccounts"``

Grants permission to retrieve information about the delegated Amazon Inspector
administrator account for an AWS organization

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListDelegatedAdminAccounts.html

#### Defined in

actions/inspector2.ts:265

___

### ListFilters

• **ListFilters** = ``"inspector2:ListFilters"``

Grants permission to retrieve information about all findings filters

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListFilters.html

#### Defined in

actions/inspector2.ts:271

___

### ListFindingAggregations

• **ListFindingAggregations** = ``"inspector2:ListFindingAggregations"``

Grants permission to retrieve statistical data and other information about Amaz
on Inspector findings

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListFindingAggregations.html

#### Defined in

actions/inspector2.ts:278

___

### ListFindings

• **ListFindings** = ``"inspector2:ListFindings"``

Grants permission to retrieve a subset of information about one or more finding
s

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListFindings.html

#### Defined in

actions/inspector2.ts:285

___

### ListMembers

• **ListMembers** = ``"inspector2:ListMembers"``

Grants permission to retrieve information about the Amazon Inspector member acc
ounts that are associated with an Inspector administrator account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListMembers.html

#### Defined in

actions/inspector2.ts:292

___

### ListTagsForResource

• **ListTagsForResource** = ``"inspector2:ListTagsForResource"``

Grants permission to retrieve the tags for an Amazon Inspector resource

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListTagsForResource.html

#### Defined in

actions/inspector2.ts:298

___

### ListUsageTotals

• **ListUsageTotals** = ``"inspector2:ListUsageTotals"``

Grants permission to retrieve aggregated usage data for an account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListUsageTotals.html

#### Defined in

actions/inspector2.ts:304

___

### ResetEncryptionKey

• **ResetEncryptionKey** = ``"inspector2:ResetEncryptionKey"``

Grants permission to let a customer reset to use an Amazon-owned KMS key to enc
rypt code snippets with

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_ResetEncryptionKey.html

#### Defined in

actions/inspector2.ts:311

___

### SearchVulnerabilities

• **SearchVulnerabilities** = ``"inspector2:SearchVulnerabilities"``

Grants permission to list Amazon Inspector coverage details for a specific vuln
erability

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_SearchVulnerabilities.html

#### Defined in

actions/inspector2.ts:318

___

### SendCisSessionHealth

• **SendCisSessionHealth** = ``"inspector2:SendCisSessionHealth"``

Grants permission to send CIS health for a CIS scan

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_SendCisSessionHealth.html

#### Defined in

actions/inspector2.ts:324

___

### SendCisSessionTelemetry

• **SendCisSessionTelemetry** = ``"inspector2:SendCisSessionTelemetry"``

Grants permission to send CIS telemetry for a CIS scan

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_SendCisSessionTelemetry.html

#### Defined in

actions/inspector2.ts:330

___

### StartCisSession

• **StartCisSession** = ``"inspector2:StartCisSession"``

Grants permission to start a CIS scan session

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_StartCisSession.html

#### Defined in

actions/inspector2.ts:336

___

### StopCisSession

• **StopCisSession** = ``"inspector2:StopCisSession"``

Grants permission to stop a CIS scan session

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_StopCisSession.html

#### Defined in

actions/inspector2.ts:342

___

### TagResource

• **TagResource** = ``"inspector2:TagResource"``

Grants permission to add or update the tags for an Amazon Inspector resource

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_TagResource.html

#### Defined in

actions/inspector2.ts:348

___

### UntagResource

• **UntagResource** = ``"inspector2:UntagResource"``

Grants permission to remove tags from an Amazon Inspector resource

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_UntagResource.html

#### Defined in

actions/inspector2.ts:354

___

### UpdateCisScanConfiguration

• **UpdateCisScanConfiguration** = ``"inspector2:UpdateCisScanConfiguration"``

Grants permission to update the settings for a CIS scan configuration

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateCisScanConfiguration.html

#### Defined in

actions/inspector2.ts:360

___

### UpdateConfiguration

• **UpdateConfiguration** = ``"inspector2:UpdateConfiguration"``

Grants permission to update information about the Amazon Inspector configuratio
n settings for an AWS account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateConfiguration.html

#### Defined in

actions/inspector2.ts:367

___

### UpdateEc2DeepInspectionConfiguration

• **UpdateEc2DeepInspectionConfiguration** = ``"inspector2:UpdateEc2DeepInspectionConfiguration"``

Grants permission to update ec2 deep inspection configuration by delegated admi
nistrator, member and standalone account

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateEc2DeepInspectionConfiguration.html

#### Defined in

actions/inspector2.ts:374

___

### UpdateEncryptionKey

• **UpdateEncryptionKey** = ``"inspector2:UpdateEncryptionKey"``

Grants permission to let a customer use a KMS key to encrypt code snippets with

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateEncryptionKey.html

#### Defined in

actions/inspector2.ts:380

___

### UpdateFilter

• **UpdateFilter** = ``"inspector2:UpdateFilter"``

Grants permission to update the settings for a findings filter

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateFilter.html

#### Defined in

actions/inspector2.ts:386

___

### UpdateOrgEc2DeepInspectionConfiguration

• **UpdateOrgEc2DeepInspectionConfiguration** = ``"inspector2:UpdateOrgEc2DeepInspectionConfiguration"``

Grants permission to update ec2 deep inspection configuration by delegated admi
nistrator for its associated member accounts

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateOrgEc2DeepInspectionConfiguration.html

#### Defined in

actions/inspector2.ts:393

___

### UpdateOrganizationConfiguration

• **UpdateOrganizationConfiguration** = ``"inspector2:UpdateOrganizationConfiguration"``

Grants permission to update Amazon Inspector configuration settings for an AWS
organization

See https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateOrganizationConfiguration.html

#### Defined in

actions/inspector2.ts:400
