[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMacie2Actions

# Enumeration: AwsMacie2Actions

All IAM policy actions for Amazon Macie (MACIE2)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmacie.html

2024-02-12T09:58:09.796Z

## Table of contents

### Enumeration Members

- [AcceptInvitation](AwsMacie2Actions.md#acceptinvitation)
- [BatchGetCustomDataIdentifiers](AwsMacie2Actions.md#batchgetcustomdataidentifiers)
- [CreateAllowList](AwsMacie2Actions.md#createallowlist)
- [CreateClassificationJob](AwsMacie2Actions.md#createclassificationjob)
- [CreateCustomDataIdentifier](AwsMacie2Actions.md#createcustomdataidentifier)
- [CreateFindingsFilter](AwsMacie2Actions.md#createfindingsfilter)
- [CreateInvitations](AwsMacie2Actions.md#createinvitations)
- [CreateMember](AwsMacie2Actions.md#createmember)
- [CreateSampleFindings](AwsMacie2Actions.md#createsamplefindings)
- [DeclineInvitations](AwsMacie2Actions.md#declineinvitations)
- [DeleteAllowList](AwsMacie2Actions.md#deleteallowlist)
- [DeleteCustomDataIdentifier](AwsMacie2Actions.md#deletecustomdataidentifier)
- [DeleteFindingsFilter](AwsMacie2Actions.md#deletefindingsfilter)
- [DeleteInvitations](AwsMacie2Actions.md#deleteinvitations)
- [DeleteMember](AwsMacie2Actions.md#deletemember)
- [DescribeBuckets](AwsMacie2Actions.md#describebuckets)
- [DescribeClassificationJob](AwsMacie2Actions.md#describeclassificationjob)
- [DescribeOrganizationConfiguration](AwsMacie2Actions.md#describeorganizationconfiguration)
- [DisableMacie](AwsMacie2Actions.md#disablemacie)
- [DisableOrganizationAdminAccount](AwsMacie2Actions.md#disableorganizationadminaccount)
- [DisassociateFromAdministratorAccount](AwsMacie2Actions.md#disassociatefromadministratoraccount)
- [DisassociateFromMasterAccount](AwsMacie2Actions.md#disassociatefrommasteraccount)
- [DisassociateMember](AwsMacie2Actions.md#disassociatemember)
- [EnableMacie](AwsMacie2Actions.md#enablemacie)
- [EnableOrganizationAdminAccount](AwsMacie2Actions.md#enableorganizationadminaccount)
- [GetAdministratorAccount](AwsMacie2Actions.md#getadministratoraccount)
- [GetAllowList](AwsMacie2Actions.md#getallowlist)
- [GetAutomatedDiscoveryConfiguration](AwsMacie2Actions.md#getautomateddiscoveryconfiguration)
- [GetBucketStatistics](AwsMacie2Actions.md#getbucketstatistics)
- [GetClassificationExportConfiguration](AwsMacie2Actions.md#getclassificationexportconfiguration)
- [GetClassificationScope](AwsMacie2Actions.md#getclassificationscope)
- [GetCustomDataIdentifier](AwsMacie2Actions.md#getcustomdataidentifier)
- [GetFindingStatistics](AwsMacie2Actions.md#getfindingstatistics)
- [GetFindings](AwsMacie2Actions.md#getfindings)
- [GetFindingsFilter](AwsMacie2Actions.md#getfindingsfilter)
- [GetFindingsPublicationConfiguration](AwsMacie2Actions.md#getfindingspublicationconfiguration)
- [GetInvitationsCount](AwsMacie2Actions.md#getinvitationscount)
- [GetMacieSession](AwsMacie2Actions.md#getmaciesession)
- [GetMasterAccount](AwsMacie2Actions.md#getmasteraccount)
- [GetMember](AwsMacie2Actions.md#getmember)
- [GetResourceProfile](AwsMacie2Actions.md#getresourceprofile)
- [GetRevealConfiguration](AwsMacie2Actions.md#getrevealconfiguration)
- [GetSensitiveDataOccurrences](AwsMacie2Actions.md#getsensitivedataoccurrences)
- [GetSensitiveDataOccurrencesAvailability](AwsMacie2Actions.md#getsensitivedataoccurrencesavailability)
- [GetSensitivityInspectionTemplate](AwsMacie2Actions.md#getsensitivityinspectiontemplate)
- [GetUsageStatistics](AwsMacie2Actions.md#getusagestatistics)
- [GetUsageTotals](AwsMacie2Actions.md#getusagetotals)
- [ListAllowLists](AwsMacie2Actions.md#listallowlists)
- [ListClassificationJobs](AwsMacie2Actions.md#listclassificationjobs)
- [ListClassificationScopes](AwsMacie2Actions.md#listclassificationscopes)
- [ListCustomDataIdentifiers](AwsMacie2Actions.md#listcustomdataidentifiers)
- [ListFindings](AwsMacie2Actions.md#listfindings)
- [ListFindingsFilters](AwsMacie2Actions.md#listfindingsfilters)
- [ListInvitations](AwsMacie2Actions.md#listinvitations)
- [ListManagedDataIdentifiers](AwsMacie2Actions.md#listmanageddataidentifiers)
- [ListMembers](AwsMacie2Actions.md#listmembers)
- [ListOrganizationAdminAccounts](AwsMacie2Actions.md#listorganizationadminaccounts)
- [ListResourceProfileArtifacts](AwsMacie2Actions.md#listresourceprofileartifacts)
- [ListResourceProfileDetections](AwsMacie2Actions.md#listresourceprofiledetections)
- [ListSensitivityInspectionTemplates](AwsMacie2Actions.md#listsensitivityinspectiontemplates)
- [ListTagsForResource](AwsMacie2Actions.md#listtagsforresource)
- [PutClassificationExportConfiguration](AwsMacie2Actions.md#putclassificationexportconfiguration)
- [PutFindingsPublicationConfiguration](AwsMacie2Actions.md#putfindingspublicationconfiguration)
- [SearchResources](AwsMacie2Actions.md#searchresources)
- [TagResource](AwsMacie2Actions.md#tagresource)
- [TestCustomDataIdentifier](AwsMacie2Actions.md#testcustomdataidentifier)
- [UntagResource](AwsMacie2Actions.md#untagresource)
- [UpdateAllowList](AwsMacie2Actions.md#updateallowlist)
- [UpdateAutomatedDiscoveryConfiguration](AwsMacie2Actions.md#updateautomateddiscoveryconfiguration)
- [UpdateClassificationJob](AwsMacie2Actions.md#updateclassificationjob)
- [UpdateClassificationScope](AwsMacie2Actions.md#updateclassificationscope)
- [UpdateFindingsFilter](AwsMacie2Actions.md#updatefindingsfilter)
- [UpdateMacieSession](AwsMacie2Actions.md#updatemaciesession)
- [UpdateMemberSession](AwsMacie2Actions.md#updatemembersession)
- [UpdateOrganizationConfiguration](AwsMacie2Actions.md#updateorganizationconfiguration)
- [UpdateResourceProfile](AwsMacie2Actions.md#updateresourceprofile)
- [UpdateResourceProfileDetections](AwsMacie2Actions.md#updateresourceprofiledetections)
- [UpdateRevealConfiguration](AwsMacie2Actions.md#updaterevealconfiguration)
- [UpdateSensitivityInspectionTemplate](AwsMacie2Actions.md#updatesensitivityinspectiontemplate)

## Enumeration Members

### AcceptInvitation

• **AcceptInvitation** = ``"macie2:AcceptInvitation"``

Grants permission to accept an Amazon Macie membership invitation

See https://docs.aws.amazon.com/macie/latest/APIReference/invitations-accept.html

#### Defined in

actions/macie2.ts:17

___

### BatchGetCustomDataIdentifiers

• **BatchGetCustomDataIdentifiers** = ``"macie2:BatchGetCustomDataIdentifiers"``

Grants permission to retrieve information about one or more custom data identif
iers

See https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-get.html

#### Defined in

actions/macie2.ts:24

___

### CreateAllowList

• **CreateAllowList** = ``"macie2:CreateAllowList"``

Grants permission to create and define the settings for an allow list

See https://docs.aws.amazon.com/macie/latest/APIReference/allow-lists.html

#### Defined in

actions/macie2.ts:30

___

### CreateClassificationJob

• **CreateClassificationJob** = ``"macie2:CreateClassificationJob"``

Grants permission to create and define the settings for a sensitive data discov
ery job

See https://docs.aws.amazon.com/macie/latest/APIReference/jobs.html

#### Defined in

actions/macie2.ts:37

___

### CreateCustomDataIdentifier

• **CreateCustomDataIdentifier** = ``"macie2:CreateCustomDataIdentifier"``

Grants permission to create and define the settings for a custom data identifie
r

See https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers.html

#### Defined in

actions/macie2.ts:44

___

### CreateFindingsFilter

• **CreateFindingsFilter** = ``"macie2:CreateFindingsFilter"``

Grants permission to create and define the settings for a findings filter

See https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html

#### Defined in

actions/macie2.ts:50

___

### CreateInvitations

• **CreateInvitations** = ``"macie2:CreateInvitations"``

Grants permission to send an Amazon Macie membership invitation

See https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html

#### Defined in

actions/macie2.ts:56

___

### CreateMember

• **CreateMember** = ``"macie2:CreateMember"``

Grants permission to associate an account with an Amazon Macie administrator ac
count

See https://docs.aws.amazon.com/macie/latest/APIReference/members.html

#### Defined in

actions/macie2.ts:63

___

### CreateSampleFindings

• **CreateSampleFindings** = ``"macie2:CreateSampleFindings"``

Grants permission to create sample findings

See https://docs.aws.amazon.com/macie/latest/APIReference/findings-sample.html

#### Defined in

actions/macie2.ts:69

___

### DeclineInvitations

• **DeclineInvitations** = ``"macie2:DeclineInvitations"``

Grants permission to decline Amazon Macie membership invitations

See https://docs.aws.amazon.com/macie/latest/APIReference/invitations-decline.html

#### Defined in

actions/macie2.ts:75

___

### DeleteAllowList

• **DeleteAllowList** = ``"macie2:DeleteAllowList"``

Grants permission to delete an allow list

See https://docs.aws.amazon.com/macie/latest/APIReference/allow-lists-id.html

#### Defined in

actions/macie2.ts:81

___

### DeleteCustomDataIdentifier

• **DeleteCustomDataIdentifier** = ``"macie2:DeleteCustomDataIdentifier"``

Grants permission to delete a custom data identifier

See https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html

#### Defined in

actions/macie2.ts:87

___

### DeleteFindingsFilter

• **DeleteFindingsFilter** = ``"macie2:DeleteFindingsFilter"``

Grants permission to delete a findings filter

See https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html

#### Defined in

actions/macie2.ts:93

___

### DeleteInvitations

• **DeleteInvitations** = ``"macie2:DeleteInvitations"``

Grants permission to delete Amazon Macie membership invitations

See https://docs.aws.amazon.com/macie/latest/APIReference/invitations-delete.html

#### Defined in

actions/macie2.ts:99

___

### DeleteMember

• **DeleteMember** = ``"macie2:DeleteMember"``

Grants permission to delete the association between an Amazon Macie administrat
or account and an account

See https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html

#### Defined in

actions/macie2.ts:106

___

### DescribeBuckets

• **DescribeBuckets** = ``"macie2:DescribeBuckets"``

Grants permission to retrieve statistical data and other information about S3 b
uckets that Amazon Macie monitors and analyzes

See https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html

#### Defined in

actions/macie2.ts:113

___

### DescribeClassificationJob

• **DescribeClassificationJob** = ``"macie2:DescribeClassificationJob"``

Grants permission to retrieve information about the status and settings for a s
ensitive data discovery job

See https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html

#### Defined in

actions/macie2.ts:120

___

### DescribeOrganizationConfiguration

• **DescribeOrganizationConfiguration** = ``"macie2:DescribeOrganizationConfiguration"``

Grants permission to retrieve information about the Amazon Macie configuration
settings for an AWS organization

See https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html

#### Defined in

actions/macie2.ts:127

___

### DisableMacie

• **DisableMacie** = ``"macie2:DisableMacie"``

Grants permission to disable an Amazon Macie account, which also deletes Macie
resources for the account

See https://docs.aws.amazon.com/macie/latest/APIReference/macie.html

#### Defined in

actions/macie2.ts:134

___

### DisableOrganizationAdminAccount

• **DisableOrganizationAdminAccount** = ``"macie2:DisableOrganizationAdminAccount"``

Grants permission to disable an account as the delegated Amazon Macie administr
ator account for an AWS organization

See https://docs.aws.amazon.com/macie/latest/APIReference/admin.html

#### Defined in

actions/macie2.ts:141

___

### DisassociateFromAdministratorAccount

• **DisassociateFromAdministratorAccount** = ``"macie2:DisassociateFromAdministratorAccount"``

Grants permission to an Amazon Macie member account to disassociate from its Ma
cie administrator account

See https://docs.aws.amazon.com/macie/latest/APIReference/administrator-disassociate.html

#### Defined in

actions/macie2.ts:148

___

### DisassociateFromMasterAccount

• **DisassociateFromMasterAccount** = ``"macie2:DisassociateFromMasterAccount"``

Grants permission to an Amazon Macie member account to disassociate from its Ma
cie administrator account

See https://docs.aws.amazon.com/macie/latest/APIReference/master-disassociate.html

#### Defined in

actions/macie2.ts:155

___

### DisassociateMember

• **DisassociateMember** = ``"macie2:DisassociateMember"``

Grants permission to an Amazon Macie administrator account to disassociate from
a Macie member account

See https://docs.aws.amazon.com/macie/latest/APIReference/members-disassociate-id.html

#### Defined in

actions/macie2.ts:162

___

### EnableMacie

• **EnableMacie** = ``"macie2:EnableMacie"``

Grants permission to enable and specify the configuration settings for a new Am
azon Macie account

See https://docs.aws.amazon.com/macie/latest/APIReference/macie.html

#### Defined in

actions/macie2.ts:169

___

### EnableOrganizationAdminAccount

• **EnableOrganizationAdminAccount** = ``"macie2:EnableOrganizationAdminAccount"``

Grants permission to enable an account as the delegated Amazon Macie administra
tor account for an AWS organization

See https://docs.aws.amazon.com/macie/latest/APIReference/admin.html

#### Defined in

actions/macie2.ts:176

___

### GetAdministratorAccount

• **GetAdministratorAccount** = ``"macie2:GetAdministratorAccount"``

Grants permission to retrieve information about the Amazon Macie administrator
account for an account

See https://docs.aws.amazon.com/macie/latest/APIReference/administrator.html

#### Defined in

actions/macie2.ts:183

___

### GetAllowList

• **GetAllowList** = ``"macie2:GetAllowList"``

Grants permission to retrieve the settings and status of an allow list

See https://docs.aws.amazon.com/macie/latest/APIReference/allow-lists-id.html

#### Defined in

actions/macie2.ts:189

___

### GetAutomatedDiscoveryConfiguration

• **GetAutomatedDiscoveryConfiguration** = ``"macie2:GetAutomatedDiscoveryConfiguration"``

Grants permission to retrieve the configuration settings and status of automate
d sensitive data discovery for an account

See https://docs.aws.amazon.com/macie/latest/APIReference/automated-discovery-configuration.html

#### Defined in

actions/macie2.ts:196

___

### GetBucketStatistics

• **GetBucketStatistics** = ``"macie2:GetBucketStatistics"``

Grants permission to retrieve aggregated statistical data for all the S3 bucket
s that Amazon Macie monitors and analyzes

See https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3-statistics.html

#### Defined in

actions/macie2.ts:203

___

### GetClassificationExportConfiguration

• **GetClassificationExportConfiguration** = ``"macie2:GetClassificationExportConfiguration"``

Grants permission to retrieve the settings for exporting sensitive data discove
ry results

See https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html

#### Defined in

actions/macie2.ts:210

___

### GetClassificationScope

• **GetClassificationScope** = ``"macie2:GetClassificationScope"``

Grants permission to retrieve the classification scope settings for an account

See https://docs.aws.amazon.com/macie/latest/APIReference/classification-scopes-id.html

#### Defined in

actions/macie2.ts:216

___

### GetCustomDataIdentifier

• **GetCustomDataIdentifier** = ``"macie2:GetCustomDataIdentifier"``

Grants permission to retrieve information about the settings for a custom data
identifier

See https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html

#### Defined in

actions/macie2.ts:223

___

### GetFindingStatistics

• **GetFindingStatistics** = ``"macie2:GetFindingStatistics"``

Grants permission to retrieve aggregated statistical data about findings

See https://docs.aws.amazon.com/macie/latest/APIReference/findings-statistics.html

#### Defined in

actions/macie2.ts:229

___

### GetFindings

• **GetFindings** = ``"macie2:GetFindings"``

Grants permission to retrieve the details of one or more findings

See https://docs.aws.amazon.com/macie/latest/APIReference/findings-describe.html

#### Defined in

actions/macie2.ts:235

___

### GetFindingsFilter

• **GetFindingsFilter** = ``"macie2:GetFindingsFilter"``

Grants permission to retrieve information about the settings for a findings fil
ter

See https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html

#### Defined in

actions/macie2.ts:242

___

### GetFindingsPublicationConfiguration

• **GetFindingsPublicationConfiguration** = ``"macie2:GetFindingsPublicationConfiguration"``

Grants permission to retrieve the configuration settings for publishing finding
s to AWS Security Hub

See https://docs.aws.amazon.com/macie/latest/APIReference/findings-publication-configuration.html

#### Defined in

actions/macie2.ts:249

___

### GetInvitationsCount

• **GetInvitationsCount** = ``"macie2:GetInvitationsCount"``

Grants permission to retrieve the count of Amazon Macie membership invitations
that were received by an account

See https://docs.aws.amazon.com/macie/latest/APIReference/invitations-count.html

#### Defined in

actions/macie2.ts:256

___

### GetMacieSession

• **GetMacieSession** = ``"macie2:GetMacieSession"``

Grants permission to retrieve information about the status and configuration se
ttings for an Amazon Macie account

See https://docs.aws.amazon.com/macie/latest/APIReference/macie.html

#### Defined in

actions/macie2.ts:263

___

### GetMasterAccount

• **GetMasterAccount** = ``"macie2:GetMasterAccount"``

Grants permission to retrieve information about the Amazon Macie administrator
account for an account

See https://docs.aws.amazon.com/macie/latest/APIReference/master.html

#### Defined in

actions/macie2.ts:270

___

### GetMember

• **GetMember** = ``"macie2:GetMember"``

Grants permission to retrieve information about an account that's associated wi
th an Amazon Macie administrator account

See https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html

#### Defined in

actions/macie2.ts:277

___

### GetResourceProfile

• **GetResourceProfile** = ``"macie2:GetResourceProfile"``

Grants permission to retrieve sensitive data discovery statistics and the sensi
tivity score for an S3 bucket

See https://docs.aws.amazon.com/macie/latest/APIReference/resource-profiles.html

#### Defined in

actions/macie2.ts:284

___

### GetRevealConfiguration

• **GetRevealConfiguration** = ``"macie2:GetRevealConfiguration"``

Grants permission to retrieve the status and configuration settings for retriev
ing occurrences of sensitive data reported by findings

See https://docs.aws.amazon.com/macie/latest/APIReference/reveal-configuration.html

#### Defined in

actions/macie2.ts:291

___

### GetSensitiveDataOccurrences

• **GetSensitiveDataOccurrences** = ``"macie2:GetSensitiveDataOccurrences"``

Grants permission to retrieve occurrences of sensitive data reported by a findi
ng

See https://docs.aws.amazon.com/macie/latest/APIReference/findings-findingid-reveal.html

#### Defined in

actions/macie2.ts:298

___

### GetSensitiveDataOccurrencesAvailability

• **GetSensitiveDataOccurrencesAvailability** = ``"macie2:GetSensitiveDataOccurrencesAvailability"``

Grants permission to check whether occurrences of sensitive data can be retriev
ed for a finding

See https://docs.aws.amazon.com/macie/latest/APIReference/findings-findingid-reveal-availability.html

#### Defined in

actions/macie2.ts:305

___

### GetSensitivityInspectionTemplate

• **GetSensitivityInspectionTemplate** = ``"macie2:GetSensitivityInspectionTemplate"``

Grants permission to retrieve the sensitivity inspection template settings for
an account

See https://docs.aws.amazon.com/macie/latest/APIReference/templates-sensitivity-inspections-id.html

#### Defined in

actions/macie2.ts:312

___

### GetUsageStatistics

• **GetUsageStatistics** = ``"macie2:GetUsageStatistics"``

Grants permission to retrieve quotas and aggregated usage data for one or more
accounts

See https://docs.aws.amazon.com/macie/latest/APIReference/usage-statistics.html

#### Defined in

actions/macie2.ts:319

___

### GetUsageTotals

• **GetUsageTotals** = ``"macie2:GetUsageTotals"``

Grants permission to retrieve aggregated usage data for an account

See https://docs.aws.amazon.com/macie/latest/APIReference/usage.html

#### Defined in

actions/macie2.ts:325

___

### ListAllowLists

• **ListAllowLists** = ``"macie2:ListAllowLists"``

Grants permission to retrieve a subset of information about all the allow lists
for an account

See https://docs.aws.amazon.com/macie/latest/APIReference/allow-lists.html

#### Defined in

actions/macie2.ts:332

___

### ListClassificationJobs

• **ListClassificationJobs** = ``"macie2:ListClassificationJobs"``

Grants permission to retrieve a subset of information about the status and sett
ings for one or more sensitive data discovery jobs

See https://docs.aws.amazon.com/macie/latest/APIReference/jobs-list.html

#### Defined in

actions/macie2.ts:339

___

### ListClassificationScopes

• **ListClassificationScopes** = ``"macie2:ListClassificationScopes"``

Grants permission to retrieve a subset of information about the classification
scope for an account

See https://docs.aws.amazon.com/macie/latest/APIReference/classification-scopes.html

#### Defined in

actions/macie2.ts:346

___

### ListCustomDataIdentifiers

• **ListCustomDataIdentifiers** = ``"macie2:ListCustomDataIdentifiers"``

Grants permission to retrieve information about all custom data identifiers

See https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-list.html

#### Defined in

actions/macie2.ts:352

___

### ListFindings

• **ListFindings** = ``"macie2:ListFindings"``

Grants permission to retrieve a subset of information about one or more finding
s

See https://docs.aws.amazon.com/macie/latest/APIReference/findings.html

#### Defined in

actions/macie2.ts:359

___

### ListFindingsFilters

• **ListFindingsFilters** = ``"macie2:ListFindingsFilters"``

Grants permission to retrieve information about all findings filters

See https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html

#### Defined in

actions/macie2.ts:365

___

### ListInvitations

• **ListInvitations** = ``"macie2:ListInvitations"``

Grants permission to retrieve information about all the Amazon Macie membership
invitations that were received by an account

See https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html

#### Defined in

actions/macie2.ts:372

___

### ListManagedDataIdentifiers

• **ListManagedDataIdentifiers** = ``"macie2:ListManagedDataIdentifiers"``

Grants permission to retrieve information about managed data identifiers

See https://docs.aws.amazon.com/macie/latest/APIReference/managed-data-identifiers-list.html

#### Defined in

actions/macie2.ts:378

___

### ListMembers

• **ListMembers** = ``"macie2:ListMembers"``

Grants permission to retrieve information about the Amazon Macie member account
s that are associated with a Macie administrator account

See https://docs.aws.amazon.com/macie/latest/APIReference/members.html

#### Defined in

actions/macie2.ts:385

___

### ListOrganizationAdminAccounts

• **ListOrganizationAdminAccounts** = ``"macie2:ListOrganizationAdminAccounts"``

Grants permission to retrieve information about the delegated, Amazon Macie adm
inistrator account for an AWS organization

See https://docs.aws.amazon.com/macie/latest/APIReference/admin.html

#### Defined in

actions/macie2.ts:392

___

### ListResourceProfileArtifacts

• **ListResourceProfileArtifacts** = ``"macie2:ListResourceProfileArtifacts"``

Grants permission to retrieve information about objects that were selected from
an S3 bucket for automated sensitive data discovery

See https://docs.aws.amazon.com/macie/latest/APIReference/resource-profiles-artifacts.html

#### Defined in

actions/macie2.ts:399

___

### ListResourceProfileDetections

• **ListResourceProfileDetections** = ``"macie2:ListResourceProfileDetections"``

Grants permission to retrieve information about the types and amount of sensiti
ve data that Amazon Macie found in an S3 bucket

See https://docs.aws.amazon.com/macie/latest/APIReference/resource-profiles-detections.html

#### Defined in

actions/macie2.ts:406

___

### ListSensitivityInspectionTemplates

• **ListSensitivityInspectionTemplates** = ``"macie2:ListSensitivityInspectionTemplates"``

Grants permission to retrieve a subset of information about the sensitivity ins
pection template for an account

See https://docs.aws.amazon.com/macie/latest/APIReference/templates-sensitivity-inspections.html

#### Defined in

actions/macie2.ts:413

___

### ListTagsForResource

• **ListTagsForResource** = ``"macie2:ListTagsForResource"``

Grants permission to retrieve the tags for an Amazon Macie resource

See https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html

#### Defined in

actions/macie2.ts:419

___

### PutClassificationExportConfiguration

• **PutClassificationExportConfiguration** = ``"macie2:PutClassificationExportConfiguration"``

Grants permission to create or update the settings for storing sensitive data d
iscovery results

See https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html

#### Defined in

actions/macie2.ts:426

___

### PutFindingsPublicationConfiguration

• **PutFindingsPublicationConfiguration** = ``"macie2:PutFindingsPublicationConfiguration"``

Grants permission to update the configuration settings for publishing findings
to AWS Security Hub

See https://docs.aws.amazon.com/macie/latest/APIReference/findings-publication-configuration.html

#### Defined in

actions/macie2.ts:433

___

### SearchResources

• **SearchResources** = ``"macie2:SearchResources"``

Grants permission to retrieve statistical data and other information about AWS
resources that Amazon Macie monitors and analyzes

See https://docs.aws.amazon.com/macie/latest/APIReference/datasources-search-resources.html

#### Defined in

actions/macie2.ts:440

___

### TagResource

• **TagResource** = ``"macie2:TagResource"``

Grants permission to add or update the tags for an Amazon Macie resource

See https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html

#### Defined in

actions/macie2.ts:446

___

### TestCustomDataIdentifier

• **TestCustomDataIdentifier** = ``"macie2:TestCustomDataIdentifier"``

Grants permission to test a custom data identifier

See https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-test.html

#### Defined in

actions/macie2.ts:452

___

### UntagResource

• **UntagResource** = ``"macie2:UntagResource"``

Grants permission to remove tags from an Amazon Macie resource

See https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html

#### Defined in

actions/macie2.ts:458

___

### UpdateAllowList

• **UpdateAllowList** = ``"macie2:UpdateAllowList"``

Grants permission to update the settings for an allow list

See https://docs.aws.amazon.com/macie/latest/APIReference/allow-lists-id.html

#### Defined in

actions/macie2.ts:464

___

### UpdateAutomatedDiscoveryConfiguration

• **UpdateAutomatedDiscoveryConfiguration** = ``"macie2:UpdateAutomatedDiscoveryConfiguration"``

Grants permission to enable or disable automated sensitive data discovery for a
n account

See https://docs.aws.amazon.com/macie/latest/APIReference/automated-discovery-configuration.html

#### Defined in

actions/macie2.ts:471

___

### UpdateClassificationJob

• **UpdateClassificationJob** = ``"macie2:UpdateClassificationJob"``

Grants permission to change the status of a sensitive data discovery job

See https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html

#### Defined in

actions/macie2.ts:477

___

### UpdateClassificationScope

• **UpdateClassificationScope** = ``"macie2:UpdateClassificationScope"``

Grants permission to update the classification scope settings for an account

See https://docs.aws.amazon.com/macie/latest/APIReference/classification-scopes-id.html

#### Defined in

actions/macie2.ts:483

___

### UpdateFindingsFilter

• **UpdateFindingsFilter** = ``"macie2:UpdateFindingsFilter"``

Grants permission to update the settings for a findings filter

See https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html

#### Defined in

actions/macie2.ts:489

___

### UpdateMacieSession

• **UpdateMacieSession** = ``"macie2:UpdateMacieSession"``

Grants permission to suspend or re-enable an Amazon Macie account, or update th
e configuration settings for a Macie account

See https://docs.aws.amazon.com/macie/latest/APIReference/macie.html

#### Defined in

actions/macie2.ts:496

___

### UpdateMemberSession

• **UpdateMemberSession** = ``"macie2:UpdateMemberSession"``

Grants permission to an Amazon Macie administrator account to suspend or re-ena
ble a Macie member account

See https://docs.aws.amazon.com/macie/latest/APIReference/macie-members-id.html

#### Defined in

actions/macie2.ts:503

___

### UpdateOrganizationConfiguration

• **UpdateOrganizationConfiguration** = ``"macie2:UpdateOrganizationConfiguration"``

Grants permission to update Amazon Macie configuration settings for an AWS orga
nization

See https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html

#### Defined in

actions/macie2.ts:510

___

### UpdateResourceProfile

• **UpdateResourceProfile** = ``"macie2:UpdateResourceProfile"``

Grants permission to update the sensitivity score for an S3 bucket

See https://docs.aws.amazon.com/macie/latest/APIReference/resource-profiles.html

#### Defined in

actions/macie2.ts:516

___

### UpdateResourceProfileDetections

• **UpdateResourceProfileDetections** = ``"macie2:UpdateResourceProfileDetections"``

Grants permission to update the sensitivity scoring settings for an S3 bucket

See https://docs.aws.amazon.com/macie/latest/APIReference/resource-profiles-detections.html

#### Defined in

actions/macie2.ts:522

___

### UpdateRevealConfiguration

• **UpdateRevealConfiguration** = ``"macie2:UpdateRevealConfiguration"``

Grants permission to update the status and configuration settings for retrievin
g occurrences of sensitive data reported by findings

See https://docs.aws.amazon.com/macie/latest/APIReference/reveal-configuration.html

#### Defined in

actions/macie2.ts:529

___

### UpdateSensitivityInspectionTemplate

• **UpdateSensitivityInspectionTemplate** = ``"macie2:UpdateSensitivityInspectionTemplate"``

Grants permission to update the sensitivity inspection template settings for an
account

See https://docs.aws.amazon.com/macie/latest/APIReference/templates-sensitivity-inspections-id.html

#### Defined in

actions/macie2.ts:536
