[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsBackupActions

# Enumeration: AwsBackupActions

All IAM policy actions for AWS Backup (BACKUP)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackup.html

2024-02-12T09:56:09.568Z

## Table of contents

### Enumeration Members

- [CancelLegalHold](AwsBackupActions.md#cancellegalhold)
- [CopyFromBackupVault](AwsBackupActions.md#copyfrombackupvault)
- [CopyIntoBackupVault](AwsBackupActions.md#copyintobackupvault)
- [CreateBackupPlan](AwsBackupActions.md#createbackupplan)
- [CreateBackupSelection](AwsBackupActions.md#createbackupselection)
- [CreateBackupVault](AwsBackupActions.md#createbackupvault)
- [CreateFramework](AwsBackupActions.md#createframework)
- [CreateLegalHold](AwsBackupActions.md#createlegalhold)
- [CreateLogicallyAirGappedBackupVault](AwsBackupActions.md#createlogicallyairgappedbackupvault)
- [CreateReportPlan](AwsBackupActions.md#createreportplan)
- [CreateRestoreTestingPlan](AwsBackupActions.md#createrestoretestingplan)
- [CreateRestoreTestingSelection](AwsBackupActions.md#createrestoretestingselection)
- [DeleteBackupPlan](AwsBackupActions.md#deletebackupplan)
- [DeleteBackupSelection](AwsBackupActions.md#deletebackupselection)
- [DeleteBackupVault](AwsBackupActions.md#deletebackupvault)
- [DeleteBackupVaultAccessPolicy](AwsBackupActions.md#deletebackupvaultaccesspolicy)
- [DeleteBackupVaultLockConfiguration](AwsBackupActions.md#deletebackupvaultlockconfiguration)
- [DeleteBackupVaultNotifications](AwsBackupActions.md#deletebackupvaultnotifications)
- [DeleteBackupVaultSharingPolicy](AwsBackupActions.md#deletebackupvaultsharingpolicy)
- [DeleteFramework](AwsBackupActions.md#deleteframework)
- [DeleteRecoveryPoint](AwsBackupActions.md#deleterecoverypoint)
- [DeleteReportPlan](AwsBackupActions.md#deletereportplan)
- [DeleteRestoreTestingPlan](AwsBackupActions.md#deleterestoretestingplan)
- [DeleteRestoreTestingSelection](AwsBackupActions.md#deleterestoretestingselection)
- [DescribeBackupJob](AwsBackupActions.md#describebackupjob)
- [DescribeBackupVault](AwsBackupActions.md#describebackupvault)
- [DescribeCopyJob](AwsBackupActions.md#describecopyjob)
- [DescribeFramework](AwsBackupActions.md#describeframework)
- [DescribeGlobalSettings](AwsBackupActions.md#describeglobalsettings)
- [DescribeProtectedResource](AwsBackupActions.md#describeprotectedresource)
- [DescribeRecoveryPoint](AwsBackupActions.md#describerecoverypoint)
- [DescribeRegionSettings](AwsBackupActions.md#describeregionsettings)
- [DescribeReportJob](AwsBackupActions.md#describereportjob)
- [DescribeReportPlan](AwsBackupActions.md#describereportplan)
- [DescribeRestoreJob](AwsBackupActions.md#describerestorejob)
- [DisassociateRecoveryPoint](AwsBackupActions.md#disassociaterecoverypoint)
- [DisassociateRecoveryPointFromParent](AwsBackupActions.md#disassociaterecoverypointfromparent)
- [ExportBackupPlanTemplate](AwsBackupActions.md#exportbackupplantemplate)
- [GetBackupPlan](AwsBackupActions.md#getbackupplan)
- [GetBackupPlanFromJSON](AwsBackupActions.md#getbackupplanfromjson)
- [GetBackupPlanFromTemplate](AwsBackupActions.md#getbackupplanfromtemplate)
- [GetBackupSelection](AwsBackupActions.md#getbackupselection)
- [GetBackupVaultAccessPolicy](AwsBackupActions.md#getbackupvaultaccesspolicy)
- [GetBackupVaultNotifications](AwsBackupActions.md#getbackupvaultnotifications)
- [GetBackupVaultSharingPolicy](AwsBackupActions.md#getbackupvaultsharingpolicy)
- [GetLegalHold](AwsBackupActions.md#getlegalhold)
- [GetRecoveryPointRestoreMetadata](AwsBackupActions.md#getrecoverypointrestoremetadata)
- [GetRestoreJobMetadata](AwsBackupActions.md#getrestorejobmetadata)
- [GetRestoreTestingInferredMetadata](AwsBackupActions.md#getrestoretestinginferredmetadata)
- [GetRestoreTestingPlan](AwsBackupActions.md#getrestoretestingplan)
- [GetRestoreTestingSelection](AwsBackupActions.md#getrestoretestingselection)
- [GetSupportedResourceTypes](AwsBackupActions.md#getsupportedresourcetypes)
- [ListBackupJobSummaries](AwsBackupActions.md#listbackupjobsummaries)
- [ListBackupJobs](AwsBackupActions.md#listbackupjobs)
- [ListBackupPlanTemplates](AwsBackupActions.md#listbackupplantemplates)
- [ListBackupPlanVersions](AwsBackupActions.md#listbackupplanversions)
- [ListBackupPlans](AwsBackupActions.md#listbackupplans)
- [ListBackupSelections](AwsBackupActions.md#listbackupselections)
- [ListBackupVaults](AwsBackupActions.md#listbackupvaults)
- [ListCopyJobSummaries](AwsBackupActions.md#listcopyjobsummaries)
- [ListCopyJobs](AwsBackupActions.md#listcopyjobs)
- [ListFrameworks](AwsBackupActions.md#listframeworks)
- [ListLegalHolds](AwsBackupActions.md#listlegalholds)
- [ListProtectedResources](AwsBackupActions.md#listprotectedresources)
- [ListProtectedResourcesByBackupVault](AwsBackupActions.md#listprotectedresourcesbybackupvault)
- [ListRecoveryPointsByBackupVault](AwsBackupActions.md#listrecoverypointsbybackupvault)
- [ListRecoveryPointsByLegalHold](AwsBackupActions.md#listrecoverypointsbylegalhold)
- [ListRecoveryPointsByResource](AwsBackupActions.md#listrecoverypointsbyresource)
- [ListReportJobs](AwsBackupActions.md#listreportjobs)
- [ListReportPlans](AwsBackupActions.md#listreportplans)
- [ListRestoreJobSummaries](AwsBackupActions.md#listrestorejobsummaries)
- [ListRestoreJobs](AwsBackupActions.md#listrestorejobs)
- [ListRestoreJobsByProtectedResource](AwsBackupActions.md#listrestorejobsbyprotectedresource)
- [ListRestoreTestingPlans](AwsBackupActions.md#listrestoretestingplans)
- [ListRestoreTestingSelections](AwsBackupActions.md#listrestoretestingselections)
- [ListTags](AwsBackupActions.md#listtags)
- [PutBackupVaultAccessPolicy](AwsBackupActions.md#putbackupvaultaccesspolicy)
- [PutBackupVaultLockConfiguration](AwsBackupActions.md#putbackupvaultlockconfiguration)
- [PutBackupVaultNotifications](AwsBackupActions.md#putbackupvaultnotifications)
- [PutBackupVaultSharingPolicy](AwsBackupActions.md#putbackupvaultsharingpolicy)
- [PutRestoreValidationResult](AwsBackupActions.md#putrestorevalidationresult)
- [StartBackupJob](AwsBackupActions.md#startbackupjob)
- [StartCopyJob](AwsBackupActions.md#startcopyjob)
- [StartReportJob](AwsBackupActions.md#startreportjob)
- [StartRestoreJob](AwsBackupActions.md#startrestorejob)
- [StopBackupJob](AwsBackupActions.md#stopbackupjob)
- [TagResource](AwsBackupActions.md#tagresource)
- [UntagResource](AwsBackupActions.md#untagresource)
- [UpdateBackupPlan](AwsBackupActions.md#updatebackupplan)
- [UpdateFramework](AwsBackupActions.md#updateframework)
- [UpdateGlobalSettings](AwsBackupActions.md#updateglobalsettings)
- [UpdateRecoveryPointLifecycle](AwsBackupActions.md#updaterecoverypointlifecycle)
- [UpdateRegionSettings](AwsBackupActions.md#updateregionsettings)
- [UpdateReportPlan](AwsBackupActions.md#updatereportplan)
- [UpdateRestoreTestingPlan](AwsBackupActions.md#updaterestoretestingplan)
- [UpdateRestoreTestingSelection](AwsBackupActions.md#updaterestoretestingselection)

## Enumeration Members

### CancelLegalHold

• **CancelLegalHold** = ``"backup:CancelLegalHold"``

Grants permission to cancel a legal hold

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CancelLegalHold.html

#### Defined in

actions/backup.ts:17

___

### CopyFromBackupVault

• **CopyFromBackupVault** = ``"backup:CopyFromBackupVault"``

Grants permission to copy from a backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html.html

#### Defined in

actions/backup.ts:23

___

### CopyIntoBackupVault

• **CopyIntoBackupVault** = ``"backup:CopyIntoBackupVault"``

Grants permission to copy into a backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html

#### Defined in

actions/backup.ts:29

___

### CreateBackupPlan

• **CreateBackupPlan** = ``"backup:CreateBackupPlan"``

Grants permission to create a new backup plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupPlan.html

#### Defined in

actions/backup.ts:35

___

### CreateBackupSelection

• **CreateBackupSelection** = ``"backup:CreateBackupSelection"``

Grants permission to create a new resource assignment in a backup plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupSelection.html

#### Defined in

actions/backup.ts:41

___

### CreateBackupVault

• **CreateBackupVault** = ``"backup:CreateBackupVault"``

Grants permission to create a new backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html

#### Defined in

actions/backup.ts:47

___

### CreateFramework

• **CreateFramework** = ``"backup:CreateFramework"``

Grants permission to create a new framework

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateFramework.html

#### Defined in

actions/backup.ts:53

___

### CreateLegalHold

• **CreateLegalHold** = ``"backup:CreateLegalHold"``

Grants permission to create a new legal hold

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateLegalHold.html

#### Defined in

actions/backup.ts:59

___

### CreateLogicallyAirGappedBackupVault

• **CreateLogicallyAirGappedBackupVault** = ``"backup:CreateLogicallyAirGappedBackupVault"``

Grants permission to create a new logically air-gapped backup vault, a logical
container where backups are stored

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateLogicallyAirGappedBackupVault.html

#### Defined in

actions/backup.ts:66

___

### CreateReportPlan

• **CreateReportPlan** = ``"backup:CreateReportPlan"``

Grants permission to create a new report plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateReportPlan.html

#### Defined in

actions/backup.ts:72

___

### CreateRestoreTestingPlan

• **CreateRestoreTestingPlan** = ``"backup:CreateRestoreTestingPlan"``

Grants permission to create a new restore testing plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateRestoreTestingPlan.html

#### Defined in

actions/backup.ts:78

___

### CreateRestoreTestingSelection

• **CreateRestoreTestingSelection** = ``"backup:CreateRestoreTestingSelection"``

Grants permission to create a new resource assignment in a restore testing plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateRestoreTestingSelection.html

#### Defined in

actions/backup.ts:84

___

### DeleteBackupPlan

• **DeleteBackupPlan** = ``"backup:DeleteBackupPlan"``

Grants permission to delete a backup plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupPlan.html

#### Defined in

actions/backup.ts:90

___

### DeleteBackupSelection

• **DeleteBackupSelection** = ``"backup:DeleteBackupSelection"``

Grants permission to delete a resource assignment from a backup plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupSelection.html

#### Defined in

actions/backup.ts:96

___

### DeleteBackupVault

• **DeleteBackupVault** = ``"backup:DeleteBackupVault"``

Grants permission to delete a backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVault.html

#### Defined in

actions/backup.ts:102

___

### DeleteBackupVaultAccessPolicy

• **DeleteBackupVaultAccessPolicy** = ``"backup:DeleteBackupVaultAccessPolicy"``

Grants permission to delete backup vault access policy

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultAccessPolicy.html

#### Defined in

actions/backup.ts:108

___

### DeleteBackupVaultLockConfiguration

• **DeleteBackupVaultLockConfiguration** = ``"backup:DeleteBackupVaultLockConfiguration"``

Grants permission to remove the lock configuration from a backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultLockConfiguration.html

#### Defined in

actions/backup.ts:114

___

### DeleteBackupVaultNotifications

• **DeleteBackupVaultNotifications** = ``"backup:DeleteBackupVaultNotifications"``

Grants permission to remove the notifications from a backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultNotifications.html

#### Defined in

actions/backup.ts:120

___

### DeleteBackupVaultSharingPolicy

• **DeleteBackupVaultSharingPolicy** = ``"backup:DeleteBackupVaultSharingPolicy"``

Grants permission to delete backup vault sharing policy

See https://docs.aws.amazon.com/aws-backup/latest/devguide/logicallyairgappedvault.html

#### Defined in

actions/backup.ts:126

___

### DeleteFramework

• **DeleteFramework** = ``"backup:DeleteFramework"``

Grants permission to delete a framework

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteFramework.html

#### Defined in

actions/backup.ts:132

___

### DeleteRecoveryPoint

• **DeleteRecoveryPoint** = ``"backup:DeleteRecoveryPoint"``

Grants permission to delete a recovery point from a backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteRecoveryPoint.html

#### Defined in

actions/backup.ts:138

___

### DeleteReportPlan

• **DeleteReportPlan** = ``"backup:DeleteReportPlan"``

Grants permission to delete a report plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteReportPlan.html

#### Defined in

actions/backup.ts:144

___

### DeleteRestoreTestingPlan

• **DeleteRestoreTestingPlan** = ``"backup:DeleteRestoreTestingPlan"``

Grants permission to delete a restore testing plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteRestoreTestingPlan.html

#### Defined in

actions/backup.ts:150

___

### DeleteRestoreTestingSelection

• **DeleteRestoreTestingSelection** = ``"backup:DeleteRestoreTestingSelection"``

Grants permission to delete a resource assignment from a restore testing plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteRestoreTestingSelection.html

#### Defined in

actions/backup.ts:156

___

### DescribeBackupJob

• **DescribeBackupJob** = ``"backup:DescribeBackupJob"``

Grants permission to describe a backup job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupJob.html

#### Defined in

actions/backup.ts:162

___

### DescribeBackupVault

• **DescribeBackupVault** = ``"backup:DescribeBackupVault"``

Grants permission to describe a new backup vault with the specified name

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupVault.html

#### Defined in

actions/backup.ts:168

___

### DescribeCopyJob

• **DescribeCopyJob** = ``"backup:DescribeCopyJob"``

Grants permission to describe a copy job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeCopyJob.html

#### Defined in

actions/backup.ts:174

___

### DescribeFramework

• **DescribeFramework** = ``"backup:DescribeFramework"``

Grants permission to describe a framework with the specified name

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeFramework.html

#### Defined in

actions/backup.ts:180

___

### DescribeGlobalSettings

• **DescribeGlobalSettings** = ``"backup:DescribeGlobalSettings"``

Grants permission to describe global settings

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeGlobalSettings.html

#### Defined in

actions/backup.ts:186

___

### DescribeProtectedResource

• **DescribeProtectedResource** = ``"backup:DescribeProtectedResource"``

Grants permission to describe a protected resource

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeProtectedResource.html

#### Defined in

actions/backup.ts:192

___

### DescribeRecoveryPoint

• **DescribeRecoveryPoint** = ``"backup:DescribeRecoveryPoint"``

Grants permission to describe a recovery point

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRecoveryPoint.html

#### Defined in

actions/backup.ts:198

___

### DescribeRegionSettings

• **DescribeRegionSettings** = ``"backup:DescribeRegionSettings"``

Grants permission to describe region settings

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRegionSettings.html

#### Defined in

actions/backup.ts:204

___

### DescribeReportJob

• **DescribeReportJob** = ``"backup:DescribeReportJob"``

Grants permission to describe a report job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeReportJob.html

#### Defined in

actions/backup.ts:210

___

### DescribeReportPlan

• **DescribeReportPlan** = ``"backup:DescribeReportPlan"``

Grants permission to describe a report plan with the specified name

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeReportPlan.html

#### Defined in

actions/backup.ts:216

___

### DescribeRestoreJob

• **DescribeRestoreJob** = ``"backup:DescribeRestoreJob"``

Grants permission to describe a restore job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRestoreJob.html

#### Defined in

actions/backup.ts:222

___

### DisassociateRecoveryPoint

• **DisassociateRecoveryPoint** = ``"backup:DisassociateRecoveryPoint"``

Grants permission to disassociate a recovery point from a backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DisassociateRecoveryPoint.html

#### Defined in

actions/backup.ts:228

___

### DisassociateRecoveryPointFromParent

• **DisassociateRecoveryPointFromParent** = ``"backup:DisassociateRecoveryPointFromParent"``

Grants permission to disassociate a recovery point from its parent

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DisassociateRecoveryPointFromParent.html

#### Defined in

actions/backup.ts:234

___

### ExportBackupPlanTemplate

• **ExportBackupPlanTemplate** = ``"backup:ExportBackupPlanTemplate"``

Grants permission to export a backup plan as a JSON

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ExportBackupPlanTemplate.html

#### Defined in

actions/backup.ts:240

___

### GetBackupPlan

• **GetBackupPlan** = ``"backup:GetBackupPlan"``

Grants permission to get a backup plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlan.html

#### Defined in

actions/backup.ts:246

___

### GetBackupPlanFromJSON

• **GetBackupPlanFromJSON** = ``"backup:GetBackupPlanFromJSON"``

Grants permission to transform a JSON to a backup plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromJSON.html

#### Defined in

actions/backup.ts:252

___

### GetBackupPlanFromTemplate

• **GetBackupPlanFromTemplate** = ``"backup:GetBackupPlanFromTemplate"``

Grants permission to transform a template to a backup plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromTemplate.html

#### Defined in

actions/backup.ts:258

___

### GetBackupSelection

• **GetBackupSelection** = ``"backup:GetBackupSelection"``

Grants permission to get a backup plan resource assignment

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupSelection.html

#### Defined in

actions/backup.ts:264

___

### GetBackupVaultAccessPolicy

• **GetBackupVaultAccessPolicy** = ``"backup:GetBackupVaultAccessPolicy"``

Grants permission to get backup vault access policy

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultAccessPolicy.html

#### Defined in

actions/backup.ts:270

___

### GetBackupVaultNotifications

• **GetBackupVaultNotifications** = ``"backup:GetBackupVaultNotifications"``

Grants permission to get backup vault notifications

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultNotifications.html

#### Defined in

actions/backup.ts:276

___

### GetBackupVaultSharingPolicy

• **GetBackupVaultSharingPolicy** = ``"backup:GetBackupVaultSharingPolicy"``

Grants permission to get backup vault sharing policy

See https://docs.aws.amazon.com/aws-backup/latest/devguide/logicallyairgappedvault.html

#### Defined in

actions/backup.ts:282

___

### GetLegalHold

• **GetLegalHold** = ``"backup:GetLegalHold"``

Grants permission to get a legal hold

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetLegalHold.html

#### Defined in

actions/backup.ts:288

___

### GetRecoveryPointRestoreMetadata

• **GetRecoveryPointRestoreMetadata** = ``"backup:GetRecoveryPointRestoreMetadata"``

Grants permission to get recovery point restore metadata

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRecoveryPointRestoreMetadata.html

#### Defined in

actions/backup.ts:294

___

### GetRestoreJobMetadata

• **GetRestoreJobMetadata** = ``"backup:GetRestoreJobMetadata"``

Grants permission to get the restore metadata associated with a restore job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRestoreJobMetadata.html

#### Defined in

actions/backup.ts:300

___

### GetRestoreTestingInferredMetadata

• **GetRestoreTestingInferredMetadata** = ``"backup:GetRestoreTestingInferredMetadata"``

Grants permission to get inferred metadata generated by restore testing

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRestoreTestingInferredMetadata.html

#### Defined in

actions/backup.ts:306

___

### GetRestoreTestingPlan

• **GetRestoreTestingPlan** = ``"backup:GetRestoreTestingPlan"``

Grants permission to get a restore testing plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRestoreTestingPlan.html

#### Defined in

actions/backup.ts:312

___

### GetRestoreTestingSelection

• **GetRestoreTestingSelection** = ``"backup:GetRestoreTestingSelection"``

Grants permission to get a restore testing plan resource assignment

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRestoreTestingSelection.html

#### Defined in

actions/backup.ts:318

___

### GetSupportedResourceTypes

• **GetSupportedResourceTypes** = ``"backup:GetSupportedResourceTypes"``

Grants permission to get supported resource types

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetSupportedResourceTypes.html

#### Defined in

actions/backup.ts:324

___

### ListBackupJobSummaries

• **ListBackupJobSummaries** = ``"backup:ListBackupJobSummaries"``

Grants permission to list backup job summaries

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupJobSummaries.html

#### Defined in

actions/backup.ts:330

___

### ListBackupJobs

• **ListBackupJobs** = ``"backup:ListBackupJobs"``

Grants permission to list backup jobs

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupJobs.html

#### Defined in

actions/backup.ts:336

___

### ListBackupPlanTemplates

• **ListBackupPlanTemplates** = ``"backup:ListBackupPlanTemplates"``

Grants permission to list backup plan templates provided by AWS Backup

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanTemplates.html

#### Defined in

actions/backup.ts:342

___

### ListBackupPlanVersions

• **ListBackupPlanVersions** = ``"backup:ListBackupPlanVersions"``

Grants permission to list backup plan versions

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanVersions.html

#### Defined in

actions/backup.ts:348

___

### ListBackupPlans

• **ListBackupPlans** = ``"backup:ListBackupPlans"``

Grants permission to list backup plans

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlans.html

#### Defined in

actions/backup.ts:354

___

### ListBackupSelections

• **ListBackupSelections** = ``"backup:ListBackupSelections"``

Grants permission to list resource assignments for a specific backup plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupSelections.html

#### Defined in

actions/backup.ts:360

___

### ListBackupVaults

• **ListBackupVaults** = ``"backup:ListBackupVaults"``

Grants permission to list backup vaults

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupVaults.html

#### Defined in

actions/backup.ts:366

___

### ListCopyJobSummaries

• **ListCopyJobSummaries** = ``"backup:ListCopyJobSummaries"``

Grants permission to list copy job summaries

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListCopyJobSummaries.html

#### Defined in

actions/backup.ts:372

___

### ListCopyJobs

• **ListCopyJobs** = ``"backup:ListCopyJobs"``

Grants permission to list copy jobs

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListCopyJobs.html

#### Defined in

actions/backup.ts:378

___

### ListFrameworks

• **ListFrameworks** = ``"backup:ListFrameworks"``

Grants permission to list frameworks

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListFrameworks.html

#### Defined in

actions/backup.ts:384

___

### ListLegalHolds

• **ListLegalHolds** = ``"backup:ListLegalHolds"``

Grants permission to list legal holds

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListLegalHolds.html

#### Defined in

actions/backup.ts:390

___

### ListProtectedResources

• **ListProtectedResources** = ``"backup:ListProtectedResources"``

Grants permission to list protected resources by AWS Backup

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListProtectedResources.html

#### Defined in

actions/backup.ts:396

___

### ListProtectedResourcesByBackupVault

• **ListProtectedResourcesByBackupVault** = ``"backup:ListProtectedResourcesByBackupVault"``

Grants permission to list protected resources inside a backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListProtectedResourcesByBackupVault.html

#### Defined in

actions/backup.ts:402

___

### ListRecoveryPointsByBackupVault

• **ListRecoveryPointsByBackupVault** = ``"backup:ListRecoveryPointsByBackupVault"``

Grants permission to list recovery points inside a backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByBackupVault.html

#### Defined in

actions/backup.ts:408

___

### ListRecoveryPointsByLegalHold

• **ListRecoveryPointsByLegalHold** = ``"backup:ListRecoveryPointsByLegalHold"``

Grants permission to list recovery points by legal hold

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByLegalHold.html

#### Defined in

actions/backup.ts:414

___

### ListRecoveryPointsByResource

• **ListRecoveryPointsByResource** = ``"backup:ListRecoveryPointsByResource"``

Grants permission to list recovery points for a resource

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByResource.html

#### Defined in

actions/backup.ts:420

___

### ListReportJobs

• **ListReportJobs** = ``"backup:ListReportJobs"``

Grants permission to list report jobs

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListReportJobs.html

#### Defined in

actions/backup.ts:426

___

### ListReportPlans

• **ListReportPlans** = ``"backup:ListReportPlans"``

Grants permission to list report plans

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListReportPlans.html

#### Defined in

actions/backup.ts:432

___

### ListRestoreJobSummaries

• **ListRestoreJobSummaries** = ``"backup:ListRestoreJobSummaries"``

Grants permission to list restore job summaries

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobSummaries.html

#### Defined in

actions/backup.ts:438

___

### ListRestoreJobs

• **ListRestoreJobs** = ``"backup:ListRestoreJobs"``

Grants permission to list restore jobs

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobs.html

#### Defined in

actions/backup.ts:444

___

### ListRestoreJobsByProtectedResource

• **ListRestoreJobsByProtectedResource** = ``"backup:ListRestoreJobsByProtectedResource"``

Grants permission to list restore jobs for a protected resource

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobsByProtectedResource.html

#### Defined in

actions/backup.ts:450

___

### ListRestoreTestingPlans

• **ListRestoreTestingPlans** = ``"backup:ListRestoreTestingPlans"``

Grants permission to list restore testing plans

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreTestingPlans.html

#### Defined in

actions/backup.ts:456

___

### ListRestoreTestingSelections

• **ListRestoreTestingSelections** = ``"backup:ListRestoreTestingSelections"``

Grants permission to list resource assignments for a specific restore testing p
lan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreTestingSelections.html

#### Defined in

actions/backup.ts:463

___

### ListTags

• **ListTags** = ``"backup:ListTags"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListTags.html

#### Defined in

actions/backup.ts:469

___

### PutBackupVaultAccessPolicy

• **PutBackupVaultAccessPolicy** = ``"backup:PutBackupVaultAccessPolicy"``

Grants permission to add an access policy to the backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultAccessPolicy.html

#### Defined in

actions/backup.ts:475

___

### PutBackupVaultLockConfiguration

• **PutBackupVaultLockConfiguration** = ``"backup:PutBackupVaultLockConfiguration"``

Grants permission to add a lock configuration to the backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultLockConfiguration.html

#### Defined in

actions/backup.ts:481

___

### PutBackupVaultNotifications

• **PutBackupVaultNotifications** = ``"backup:PutBackupVaultNotifications"``

Grants permission to add an SNS topic to the backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultNotifications.html

#### Defined in

actions/backup.ts:487

___

### PutBackupVaultSharingPolicy

• **PutBackupVaultSharingPolicy** = ``"backup:PutBackupVaultSharingPolicy"``

Grants permission to add a sharing policy to the backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/logicallyairgappedvault.html

#### Defined in

actions/backup.ts:493

___

### PutRestoreValidationResult

• **PutRestoreValidationResult** = ``"backup:PutRestoreValidationResult"``

Grants permission to put a restore validation result

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutRestoreValidationResult.html

#### Defined in

actions/backup.ts:499

___

### StartBackupJob

• **StartBackupJob** = ``"backup:StartBackupJob"``

Grants permission to start a new backup job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartBackupJob.html

#### Defined in

actions/backup.ts:505

___

### StartCopyJob

• **StartCopyJob** = ``"backup:StartCopyJob"``

Grants permission to copy a backup from a source backup vault to a destination
backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html

#### Defined in

actions/backup.ts:512

___

### StartReportJob

• **StartReportJob** = ``"backup:StartReportJob"``

Grants permission to start a new report job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartReportJob.html

#### Defined in

actions/backup.ts:518

___

### StartRestoreJob

• **StartRestoreJob** = ``"backup:StartRestoreJob"``

Grants permission to start a new restore job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartRestoreJob.html

#### Defined in

actions/backup.ts:524

___

### StopBackupJob

• **StopBackupJob** = ``"backup:StopBackupJob"``

Grants permission to stop a backup job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StopBackupJob.html

#### Defined in

actions/backup.ts:530

___

### TagResource

• **TagResource** = ``"backup:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_TagResource.html

#### Defined in

actions/backup.ts:536

___

### UntagResource

• **UntagResource** = ``"backup:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UntagResource.html

#### Defined in

actions/backup.ts:542

___

### UpdateBackupPlan

• **UpdateBackupPlan** = ``"backup:UpdateBackupPlan"``

Grants permission to update a backup plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateBackupPlan.html

#### Defined in

actions/backup.ts:548

___

### UpdateFramework

• **UpdateFramework** = ``"backup:UpdateFramework"``

Grants permission to update a framework

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateFramework.html

#### Defined in

actions/backup.ts:554

___

### UpdateGlobalSettings

• **UpdateGlobalSettings** = ``"backup:UpdateGlobalSettings"``

Grants permission to update the current global settings for the AWS Account

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateGlobalSettings.html

#### Defined in

actions/backup.ts:560

___

### UpdateRecoveryPointLifecycle

• **UpdateRecoveryPointLifecycle** = ``"backup:UpdateRecoveryPointLifecycle"``

Grants permission to update the lifecycle of the recovery point

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRecoveryPointLifecycle.html

#### Defined in

actions/backup.ts:566

___

### UpdateRegionSettings

• **UpdateRegionSettings** = ``"backup:UpdateRegionSettings"``

Grants permission to update the current service opt-in settings for the Region

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRegionSettings.html

#### Defined in

actions/backup.ts:572

___

### UpdateReportPlan

• **UpdateReportPlan** = ``"backup:UpdateReportPlan"``

Grants permission to update a report plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateReportPlan.html

#### Defined in

actions/backup.ts:578

___

### UpdateRestoreTestingPlan

• **UpdateRestoreTestingPlan** = ``"backup:UpdateRestoreTestingPlan"``

Grants permission to update a restore testing plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRestoreTestingPlan.html

#### Defined in

actions/backup.ts:584

___

### UpdateRestoreTestingSelection

• **UpdateRestoreTestingSelection** = ``"backup:UpdateRestoreTestingSelection"``

Grants permission to update a resource assignment in a restore testing plan

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRestoreTestingSelection.html

#### Defined in

actions/backup.ts:590
