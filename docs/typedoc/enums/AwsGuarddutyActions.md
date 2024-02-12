[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsGuarddutyActions

# Enumeration: AwsGuarddutyActions

All IAM policy actions for Amazon GuardDuty (GUARDDUTY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonguardduty.html

2024-02-12T09:57:33.453Z

## Table of contents

### Enumeration Members

- [AcceptAdministratorInvitation](AwsGuarddutyActions.md#acceptadministratorinvitation)
- [AcceptInvitation](AwsGuarddutyActions.md#acceptinvitation)
- [ArchiveFindings](AwsGuarddutyActions.md#archivefindings)
- [CreateDetector](AwsGuarddutyActions.md#createdetector)
- [CreateFilter](AwsGuarddutyActions.md#createfilter)
- [CreateIPSet](AwsGuarddutyActions.md#createipset)
- [CreateMembers](AwsGuarddutyActions.md#createmembers)
- [CreatePublishingDestination](AwsGuarddutyActions.md#createpublishingdestination)
- [CreateSampleFindings](AwsGuarddutyActions.md#createsamplefindings)
- [CreateThreatIntelSet](AwsGuarddutyActions.md#createthreatintelset)
- [DeclineInvitations](AwsGuarddutyActions.md#declineinvitations)
- [DeleteDetector](AwsGuarddutyActions.md#deletedetector)
- [DeleteFilter](AwsGuarddutyActions.md#deletefilter)
- [DeleteIPSet](AwsGuarddutyActions.md#deleteipset)
- [DeleteInvitations](AwsGuarddutyActions.md#deleteinvitations)
- [DeleteMembers](AwsGuarddutyActions.md#deletemembers)
- [DeletePublishingDestination](AwsGuarddutyActions.md#deletepublishingdestination)
- [DeleteThreatIntelSet](AwsGuarddutyActions.md#deletethreatintelset)
- [DescribeMalwareScans](AwsGuarddutyActions.md#describemalwarescans)
- [DescribeOrganizationConfiguration](AwsGuarddutyActions.md#describeorganizationconfiguration)
- [DescribePublishingDestination](AwsGuarddutyActions.md#describepublishingdestination)
- [DisableOrganizationAdminAccount](AwsGuarddutyActions.md#disableorganizationadminaccount)
- [DisassociateFromAdministratorAccount](AwsGuarddutyActions.md#disassociatefromadministratoraccount)
- [DisassociateFromMasterAccount](AwsGuarddutyActions.md#disassociatefrommasteraccount)
- [DisassociateMembers](AwsGuarddutyActions.md#disassociatemembers)
- [EnableOrganizationAdminAccount](AwsGuarddutyActions.md#enableorganizationadminaccount)
- [GetAdministratorAccount](AwsGuarddutyActions.md#getadministratoraccount)
- [GetCoverageStatistics](AwsGuarddutyActions.md#getcoveragestatistics)
- [GetDetector](AwsGuarddutyActions.md#getdetector)
- [GetFilter](AwsGuarddutyActions.md#getfilter)
- [GetFindings](AwsGuarddutyActions.md#getfindings)
- [GetFindingsStatistics](AwsGuarddutyActions.md#getfindingsstatistics)
- [GetIPSet](AwsGuarddutyActions.md#getipset)
- [GetInvitationsCount](AwsGuarddutyActions.md#getinvitationscount)
- [GetMalwareScanSettings](AwsGuarddutyActions.md#getmalwarescansettings)
- [GetMasterAccount](AwsGuarddutyActions.md#getmasteraccount)
- [GetMemberDetectors](AwsGuarddutyActions.md#getmemberdetectors)
- [GetMembers](AwsGuarddutyActions.md#getmembers)
- [GetOrganizationStatistics](AwsGuarddutyActions.md#getorganizationstatistics)
- [GetRemainingFreeTrialDays](AwsGuarddutyActions.md#getremainingfreetrialdays)
- [GetThreatIntelSet](AwsGuarddutyActions.md#getthreatintelset)
- [GetUsageStatistics](AwsGuarddutyActions.md#getusagestatistics)
- [InviteMembers](AwsGuarddutyActions.md#invitemembers)
- [ListCoverage](AwsGuarddutyActions.md#listcoverage)
- [ListDetectors](AwsGuarddutyActions.md#listdetectors)
- [ListFilters](AwsGuarddutyActions.md#listfilters)
- [ListFindings](AwsGuarddutyActions.md#listfindings)
- [ListIPSets](AwsGuarddutyActions.md#listipsets)
- [ListInvitations](AwsGuarddutyActions.md#listinvitations)
- [ListMembers](AwsGuarddutyActions.md#listmembers)
- [ListOrganizationAdminAccounts](AwsGuarddutyActions.md#listorganizationadminaccounts)
- [ListPublishingDestinations](AwsGuarddutyActions.md#listpublishingdestinations)
- [ListTagsForResource](AwsGuarddutyActions.md#listtagsforresource)
- [ListThreatIntelSets](AwsGuarddutyActions.md#listthreatintelsets)
- [SendSecurityTelemetry](AwsGuarddutyActions.md#sendsecuritytelemetry)
- [StartMalwareScan](AwsGuarddutyActions.md#startmalwarescan)
- [StartMonitoringMembers](AwsGuarddutyActions.md#startmonitoringmembers)
- [StopMonitoringMembers](AwsGuarddutyActions.md#stopmonitoringmembers)
- [TagResource](AwsGuarddutyActions.md#tagresource)
- [UnarchiveFindings](AwsGuarddutyActions.md#unarchivefindings)
- [UntagResource](AwsGuarddutyActions.md#untagresource)
- [UpdateDetector](AwsGuarddutyActions.md#updatedetector)
- [UpdateFilter](AwsGuarddutyActions.md#updatefilter)
- [UpdateFindingsFeedback](AwsGuarddutyActions.md#updatefindingsfeedback)
- [UpdateIPSet](AwsGuarddutyActions.md#updateipset)
- [UpdateMalwareScanSettings](AwsGuarddutyActions.md#updatemalwarescansettings)
- [UpdateMemberDetectors](AwsGuarddutyActions.md#updatememberdetectors)
- [UpdateOrganizationConfiguration](AwsGuarddutyActions.md#updateorganizationconfiguration)
- [UpdatePublishingDestination](AwsGuarddutyActions.md#updatepublishingdestination)
- [UpdateThreatIntelSet](AwsGuarddutyActions.md#updatethreatintelset)

## Enumeration Members

### AcceptAdministratorInvitation

• **AcceptAdministratorInvitation** = ``"guardduty:AcceptAdministratorInvitation"``

Grants permission to accept invitations to become a GuardDuty member account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_AcceptAdministratorInvitation.html

#### Defined in

actions/guardduty.ts:17

___

### AcceptInvitation

• **AcceptInvitation** = ``"guardduty:AcceptInvitation"``

Grants permission to accept invitations to become a GuardDuty member account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_AcceptInvitation.html

#### Defined in

actions/guardduty.ts:23

___

### ArchiveFindings

• **ArchiveFindings** = ``"guardduty:ArchiveFindings"``

Grants permission to archive GuardDuty findings

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ArchiveFindings.html

#### Defined in

actions/guardduty.ts:29

___

### CreateDetector

• **CreateDetector** = ``"guardduty:CreateDetector"``

Grants permission to create a detector

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateDetector.html

#### Defined in

actions/guardduty.ts:35

___

### CreateFilter

• **CreateFilter** = ``"guardduty:CreateFilter"``

Grants permission to create GuardDuty filters. A filters defines finding attrib
utes and conditions used to filter findings

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateFilter.html

#### Defined in

actions/guardduty.ts:42

___

### CreateIPSet

• **CreateIPSet** = ``"guardduty:CreateIPSet"``

Grants permission to create an IPSet

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateIPSet.html

#### Defined in

actions/guardduty.ts:48

___

### CreateMembers

• **CreateMembers** = ``"guardduty:CreateMembers"``

Grants permission to create GuardDuty member accounts, where the account used t
o create a member becomes the GuardDuty administrator account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html

#### Defined in

actions/guardduty.ts:55

___

### CreatePublishingDestination

• **CreatePublishingDestination** = ``"guardduty:CreatePublishingDestination"``

Grants permission to create a publishing destination

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreatePublishingDestination.html

#### Defined in

actions/guardduty.ts:61

___

### CreateSampleFindings

• **CreateSampleFindings** = ``"guardduty:CreateSampleFindings"``

Grants permission to create sample findings

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateSampleFindings.html

#### Defined in

actions/guardduty.ts:67

___

### CreateThreatIntelSet

• **CreateThreatIntelSet** = ``"guardduty:CreateThreatIntelSet"``

Grants permission to create GuardDuty ThreatIntelSets, where a ThreatIntelSet c
onsists of known malicious IP addresses used by GuardDuty to generate findings

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateThreatIntelSet.html

#### Defined in

actions/guardduty.ts:74

___

### DeclineInvitations

• **DeclineInvitations** = ``"guardduty:DeclineInvitations"``

Grants permission to decline invitations to become a GuardDuty member account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeclineInvitations.html

#### Defined in

actions/guardduty.ts:80

___

### DeleteDetector

• **DeleteDetector** = ``"guardduty:DeleteDetector"``

Grants permission to delete GuardDuty detectors

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteDetector.html

#### Defined in

actions/guardduty.ts:86

___

### DeleteFilter

• **DeleteFilter** = ``"guardduty:DeleteFilter"``

Grants permission to delete GuardDuty filters

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteFilter.html

#### Defined in

actions/guardduty.ts:92

___

### DeleteIPSet

• **DeleteIPSet** = ``"guardduty:DeleteIPSet"``

Grants permission to delete GuardDuty IPSets

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteIPSet.html

#### Defined in

actions/guardduty.ts:98

___

### DeleteInvitations

• **DeleteInvitations** = ``"guardduty:DeleteInvitations"``

Grants permission to delete invitations to become a GuardDuty member account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteInvitations.html

#### Defined in

actions/guardduty.ts:104

___

### DeleteMembers

• **DeleteMembers** = ``"guardduty:DeleteMembers"``

Grants permission to delete GuardDuty member accounts

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html

#### Defined in

actions/guardduty.ts:110

___

### DeletePublishingDestination

• **DeletePublishingDestination** = ``"guardduty:DeletePublishingDestination"``

Grants permission to delete a publishing destination

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeletePublishingDestination.html

#### Defined in

actions/guardduty.ts:116

___

### DeleteThreatIntelSet

• **DeleteThreatIntelSet** = ``"guardduty:DeleteThreatIntelSet"``

Grants permission to delete GuardDuty ThreatIntelSets

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteThreatIntelSet.html

#### Defined in

actions/guardduty.ts:122

___

### DescribeMalwareScans

• **DescribeMalwareScans** = ``"guardduty:DescribeMalwareScans"``

Grants permission to retrieve details about malware scans

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribeMalwareScans.html

#### Defined in

actions/guardduty.ts:128

___

### DescribeOrganizationConfiguration

• **DescribeOrganizationConfiguration** = ``"guardduty:DescribeOrganizationConfiguration"``

Grants permission to retrieve details about the delegated administrator associa
ted with a GuardDuty detector

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribeOrganizationConfiguration.html

#### Defined in

actions/guardduty.ts:135

___

### DescribePublishingDestination

• **DescribePublishingDestination** = ``"guardduty:DescribePublishingDestination"``

Grants permission to retrieve details about a publishing destination

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribePublishingDestination.html

#### Defined in

actions/guardduty.ts:141

___

### DisableOrganizationAdminAccount

• **DisableOrganizationAdminAccount** = ``"guardduty:DisableOrganizationAdminAccount"``

Grants permission to disable the organization delegated administrator for Guard
Duty

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisableOrganizationAdminAccount.html

#### Defined in

actions/guardduty.ts:148

___

### DisassociateFromAdministratorAccount

• **DisassociateFromAdministratorAccount** = ``"guardduty:DisassociateFromAdministratorAccount"``

Grants permission to disassociate a GuardDuty member account from its GuardDuty
administrator account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateFromAdministratorAccount.html

#### Defined in

actions/guardduty.ts:155

___

### DisassociateFromMasterAccount

• **DisassociateFromMasterAccount** = ``"guardduty:DisassociateFromMasterAccount"``

Grants permission to disassociate a GuardDuty member account from its GuardDuty
administrator account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateFromMasterAccount.html

#### Defined in

actions/guardduty.ts:162

___

### DisassociateMembers

• **DisassociateMembers** = ``"guardduty:DisassociateMembers"``

Grants permission to disassociate GuardDuty member accounts from their administ
rator GuardDuty account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateMembers.html

#### Defined in

actions/guardduty.ts:169

___

### EnableOrganizationAdminAccount

• **EnableOrganizationAdminAccount** = ``"guardduty:EnableOrganizationAdminAccount"``

Grants permission to enable an organization delegated administrator for GuardDu
ty

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_EnableOrganizationAdminAccount.html

#### Defined in

actions/guardduty.ts:176

___

### GetAdministratorAccount

• **GetAdministratorAccount** = ``"guardduty:GetAdministratorAccount"``

Grants permission to retrieve details of the GuardDuty administrator account as
sociated with a member account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetAdministratorAccount.html

#### Defined in

actions/guardduty.ts:183

___

### GetCoverageStatistics

• **GetCoverageStatistics** = ``"guardduty:GetCoverageStatistics"``

Grants permission to list Amazon GuardDuty coverage statistics for the specifie
d GuardDuty account in a Region

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetCoverageStatistics.html

#### Defined in

actions/guardduty.ts:190

___

### GetDetector

• **GetDetector** = ``"guardduty:GetDetector"``

Grants permission to retrieve GuardDuty detectors

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetDetector.html

#### Defined in

actions/guardduty.ts:196

___

### GetFilter

• **GetFilter** = ``"guardduty:GetFilter"``

Grants permission to retrieve GuardDuty filters

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFilter.html

#### Defined in

actions/guardduty.ts:202

___

### GetFindings

• **GetFindings** = ``"guardduty:GetFindings"``

Grants permission to retrieve GuardDuty findings

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindings.html

#### Defined in

actions/guardduty.ts:208

___

### GetFindingsStatistics

• **GetFindingsStatistics** = ``"guardduty:GetFindingsStatistics"``

Grants permission to retrieve a list of GuardDuty finding statistics

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindingsStatistics.html

#### Defined in

actions/guardduty.ts:214

___

### GetIPSet

• **GetIPSet** = ``"guardduty:GetIPSet"``

Grants permission to retrieve GuardDuty IPSets

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetIPSet.html

#### Defined in

actions/guardduty.ts:220

___

### GetInvitationsCount

• **GetInvitationsCount** = ``"guardduty:GetInvitationsCount"``

Grants permission to retrieve the count of all GuardDuty invitations sent to a
specified account, which does not include the accepted invitation

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetInvitationsCount.html

#### Defined in

actions/guardduty.ts:227

___

### GetMalwareScanSettings

• **GetMalwareScanSettings** = ``"guardduty:GetMalwareScanSettings"``

Grants permission to retrieve the malware scan settings

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMalwareScanSettings.html

#### Defined in

actions/guardduty.ts:233

___

### GetMasterAccount

• **GetMasterAccount** = ``"guardduty:GetMasterAccount"``

Grants permission to retrieve details of the GuardDuty administrator account as
sociated with a member account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMasterAccount.html

#### Defined in

actions/guardduty.ts:240

___

### GetMemberDetectors

• **GetMemberDetectors** = ``"guardduty:GetMemberDetectors"``

Grants permission to describe which data sources are enabled for member account
s detectors

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMemberDetectors.html

#### Defined in

actions/guardduty.ts:247

___

### GetMembers

• **GetMembers** = ``"guardduty:GetMembers"``

Grants permission to retrieve the member accounts associated with an administra
tor account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMembers.html

#### Defined in

actions/guardduty.ts:254

___

### GetOrganizationStatistics

• **GetOrganizationStatistics** = ``"guardduty:GetOrganizationStatistics"``

Grants permission to retrieve GuardDuty protection plan coverage statistics for
member accounts in a Region

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetOrganizationStatistics.html

#### Defined in

actions/guardduty.ts:261

___

### GetRemainingFreeTrialDays

• **GetRemainingFreeTrialDays** = ``"guardduty:GetRemainingFreeTrialDays"``

Grants permission to provide the number of days left for each data source used
in the free trial period

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetRemainingFreeTrialDays.html

#### Defined in

actions/guardduty.ts:268

___

### GetThreatIntelSet

• **GetThreatIntelSet** = ``"guardduty:GetThreatIntelSet"``

Grants permission to retrieve GuardDuty ThreatIntelSets

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetThreatIntelSet.html

#### Defined in

actions/guardduty.ts:274

___

### GetUsageStatistics

• **GetUsageStatistics** = ``"guardduty:GetUsageStatistics"``

Grants permission to list Amazon GuardDuty usage statistics over the last 30 da
ys for the specified detector ID

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetUsageStatistics.html

#### Defined in

actions/guardduty.ts:281

___

### InviteMembers

• **InviteMembers** = ``"guardduty:InviteMembers"``

Grants permission to invite other AWS accounts to enable GuardDuty and become G
uardDuty member accounts

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html

#### Defined in

actions/guardduty.ts:288

___

### ListCoverage

• **ListCoverage** = ``"guardduty:ListCoverage"``

Grants permission to list all the resource details for a given account in a Reg
ion

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListCoverage.html

#### Defined in

actions/guardduty.ts:295

___

### ListDetectors

• **ListDetectors** = ``"guardduty:ListDetectors"``

Grants permission to retrieve a list of GuardDuty detectors

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html

#### Defined in

actions/guardduty.ts:301

___

### ListFilters

• **ListFilters** = ``"guardduty:ListFilters"``

Grants permission to retrieve a list of GuardDuty filters

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFilters.html

#### Defined in

actions/guardduty.ts:307

___

### ListFindings

• **ListFindings** = ``"guardduty:ListFindings"``

Grants permission to retrieve a list of GuardDuty findings

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFindings.html

#### Defined in

actions/guardduty.ts:313

___

### ListIPSets

• **ListIPSets** = ``"guardduty:ListIPSets"``

Grants permission to retrieve a list of GuardDuty IPSets

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListIPSets.html

#### Defined in

actions/guardduty.ts:319

___

### ListInvitations

• **ListInvitations** = ``"guardduty:ListInvitations"``

Grants permission to retrieve a list of all of the GuardDuty membership invitat
ions that were sent to an AWS account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListInvitations.html

#### Defined in

actions/guardduty.ts:326

___

### ListMembers

• **ListMembers** = ``"guardduty:ListMembers"``

Grants permission to retrieve a list of GuardDuty member accounts associated wi
th an administrator account

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListMembers.html

#### Defined in

actions/guardduty.ts:333

___

### ListOrganizationAdminAccounts

• **ListOrganizationAdminAccounts** = ``"guardduty:ListOrganizationAdminAccounts"``

Grants permission to list details about the organization delegated administrato
r for GuardDuty

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListOrganizationAdminAccounts.html

#### Defined in

actions/guardduty.ts:340

___

### ListPublishingDestinations

• **ListPublishingDestinations** = ``"guardduty:ListPublishingDestinations"``

Grants permission to retrieve a list of publishing destinations

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListPublishingDestinations.html

#### Defined in

actions/guardduty.ts:346

___

### ListTagsForResource

• **ListTagsForResource** = ``"guardduty:ListTagsForResource"``

Grants permission to retrieve a list of tags associated with a GuardDuty resour
ce

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/guardduty.ts:353

___

### ListThreatIntelSets

• **ListThreatIntelSets** = ``"guardduty:ListThreatIntelSets"``

Grants permission to retrieve a list of GuardDuty ThreatIntelSets

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListThreatIntelSets.html

#### Defined in

actions/guardduty.ts:359

___

### SendSecurityTelemetry

• **SendSecurityTelemetry** = ``"guardduty:SendSecurityTelemetry"``

Grants permission to send security telemetry for a specific GuardDuty account i
n a Region

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_SendSecurityTelemetry.html

#### Defined in

actions/guardduty.ts:366

___

### StartMalwareScan

• **StartMalwareScan** = ``"guardduty:StartMalwareScan"``

Grants permission to initiate a new malware scan

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StartMalwareScan.html

#### Defined in

actions/guardduty.ts:372

___

### StartMonitoringMembers

• **StartMonitoringMembers** = ``"guardduty:StartMonitoringMembers"``

Grants permission to a GuardDuty administrator account to monitor findings from
GuardDuty member accounts

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StartMonitoringMembers.html

#### Defined in

actions/guardduty.ts:379

___

### StopMonitoringMembers

• **StopMonitoringMembers** = ``"guardduty:StopMonitoringMembers"``

Grants permission to disable monitoring findings from member accounts

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html

#### Defined in

actions/guardduty.ts:385

___

### TagResource

• **TagResource** = ``"guardduty:TagResource"``

Grants permission to add tags to a GuardDuty resource

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_TagResource.html

#### Defined in

actions/guardduty.ts:391

___

### UnarchiveFindings

• **UnarchiveFindings** = ``"guardduty:UnarchiveFindings"``

Grants permission to unarchive GuardDuty findings

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UnarchiveFindings.html

#### Defined in

actions/guardduty.ts:397

___

### UntagResource

• **UntagResource** = ``"guardduty:UntagResource"``

Grants permission to remove tags from a GuardDuty resource

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UntagResource.html

#### Defined in

actions/guardduty.ts:403

___

### UpdateDetector

• **UpdateDetector** = ``"guardduty:UpdateDetector"``

Grants permission to update GuardDuty detectors

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateDetector.html

#### Defined in

actions/guardduty.ts:409

___

### UpdateFilter

• **UpdateFilter** = ``"guardduty:UpdateFilter"``

Grants permission to updates GuardDuty filters

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFilter.html

#### Defined in

actions/guardduty.ts:415

___

### UpdateFindingsFeedback

• **UpdateFindingsFeedback** = ``"guardduty:UpdateFindingsFeedback"``

Grants permission to update findings feedback to mark GuardDuty findings as use
ful or not useful

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFindingsFeedback.html

#### Defined in

actions/guardduty.ts:422

___

### UpdateIPSet

• **UpdateIPSet** = ``"guardduty:UpdateIPSet"``

Grants permission to update GuardDuty IPSets

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateIPSet.html

#### Defined in

actions/guardduty.ts:428

___

### UpdateMalwareScanSettings

• **UpdateMalwareScanSettings** = ``"guardduty:UpdateMalwareScanSettings"``

Grants permission to update the malware scan settings

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateMalwareScanSettings.html

#### Defined in

actions/guardduty.ts:434

___

### UpdateMemberDetectors

• **UpdateMemberDetectors** = ``"guardduty:UpdateMemberDetectors"``

Grants permission to update which data sources are enabled for member accounts
detectors

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateMemberDetectors.html

#### Defined in

actions/guardduty.ts:441

___

### UpdateOrganizationConfiguration

• **UpdateOrganizationConfiguration** = ``"guardduty:UpdateOrganizationConfiguration"``

Grants permission to update the delegated administrator configuration associate
d with a GuardDuty detector

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateOrganizationConfiguration.html

#### Defined in

actions/guardduty.ts:448

___

### UpdatePublishingDestination

• **UpdatePublishingDestination** = ``"guardduty:UpdatePublishingDestination"``

Grants permission to update a publishing destination

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdatePublishingDestination.html

#### Defined in

actions/guardduty.ts:454

___

### UpdateThreatIntelSet

• **UpdateThreatIntelSet** = ``"guardduty:UpdateThreatIntelSet"``

Grants permission to updates the GuardDuty ThreatIntelSets

See https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateThreatIntelSet.html

#### Defined in

actions/guardduty.ts:460
