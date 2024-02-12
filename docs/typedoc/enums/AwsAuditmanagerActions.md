[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAuditmanagerActions

# Enumeration: AwsAuditmanagerActions

All IAM policy actions for AWS Audit Manager (AUDITMANAGER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsauditmanager.html

2024-02-12T09:56:07.573Z

## Table of contents

### Enumeration Members

- [AssociateAssessmentReportEvidenceFolder](AwsAuditmanagerActions.md#associateassessmentreportevidencefolder)
- [BatchAssociateAssessmentReportEvidence](AwsAuditmanagerActions.md#batchassociateassessmentreportevidence)
- [BatchCreateDelegationByAssessment](AwsAuditmanagerActions.md#batchcreatedelegationbyassessment)
- [BatchDeleteDelegationByAssessment](AwsAuditmanagerActions.md#batchdeletedelegationbyassessment)
- [BatchDisassociateAssessmentReportEvidence](AwsAuditmanagerActions.md#batchdisassociateassessmentreportevidence)
- [BatchImportEvidenceToAssessmentControl](AwsAuditmanagerActions.md#batchimportevidencetoassessmentcontrol)
- [CreateAssessment](AwsAuditmanagerActions.md#createassessment)
- [CreateAssessmentFramework](AwsAuditmanagerActions.md#createassessmentframework)
- [CreateAssessmentReport](AwsAuditmanagerActions.md#createassessmentreport)
- [CreateControl](AwsAuditmanagerActions.md#createcontrol)
- [DeleteAssessment](AwsAuditmanagerActions.md#deleteassessment)
- [DeleteAssessmentFramework](AwsAuditmanagerActions.md#deleteassessmentframework)
- [DeleteAssessmentFrameworkShare](AwsAuditmanagerActions.md#deleteassessmentframeworkshare)
- [DeleteAssessmentReport](AwsAuditmanagerActions.md#deleteassessmentreport)
- [DeleteControl](AwsAuditmanagerActions.md#deletecontrol)
- [DeregisterAccount](AwsAuditmanagerActions.md#deregisteraccount)
- [DeregisterOrganizationAdminAccount](AwsAuditmanagerActions.md#deregisterorganizationadminaccount)
- [DisassociateAssessmentReportEvidenceFolder](AwsAuditmanagerActions.md#disassociateassessmentreportevidencefolder)
- [GetAccountStatus](AwsAuditmanagerActions.md#getaccountstatus)
- [GetAssessment](AwsAuditmanagerActions.md#getassessment)
- [GetAssessmentFramework](AwsAuditmanagerActions.md#getassessmentframework)
- [GetAssessmentReportUrl](AwsAuditmanagerActions.md#getassessmentreporturl)
- [GetChangeLogs](AwsAuditmanagerActions.md#getchangelogs)
- [GetControl](AwsAuditmanagerActions.md#getcontrol)
- [GetDelegations](AwsAuditmanagerActions.md#getdelegations)
- [GetEvidence](AwsAuditmanagerActions.md#getevidence)
- [GetEvidenceByEvidenceFolder](AwsAuditmanagerActions.md#getevidencebyevidencefolder)
- [GetEvidenceFileUploadUrl](AwsAuditmanagerActions.md#getevidencefileuploadurl)
- [GetEvidenceFolder](AwsAuditmanagerActions.md#getevidencefolder)
- [GetEvidenceFoldersByAssessment](AwsAuditmanagerActions.md#getevidencefoldersbyassessment)
- [GetEvidenceFoldersByAssessmentControl](AwsAuditmanagerActions.md#getevidencefoldersbyassessmentcontrol)
- [GetInsights](AwsAuditmanagerActions.md#getinsights)
- [GetInsightsByAssessment](AwsAuditmanagerActions.md#getinsightsbyassessment)
- [GetOrganizationAdminAccount](AwsAuditmanagerActions.md#getorganizationadminaccount)
- [GetServicesInScope](AwsAuditmanagerActions.md#getservicesinscope)
- [GetSettings](AwsAuditmanagerActions.md#getsettings)
- [ListAssessmentControlInsightsByControlDomain](AwsAuditmanagerActions.md#listassessmentcontrolinsightsbycontroldomain)
- [ListAssessmentFrameworkShareRequests](AwsAuditmanagerActions.md#listassessmentframeworksharerequests)
- [ListAssessmentFrameworks](AwsAuditmanagerActions.md#listassessmentframeworks)
- [ListAssessmentReports](AwsAuditmanagerActions.md#listassessmentreports)
- [ListAssessments](AwsAuditmanagerActions.md#listassessments)
- [ListControlDomainInsights](AwsAuditmanagerActions.md#listcontroldomaininsights)
- [ListControlDomainInsightsByAssessment](AwsAuditmanagerActions.md#listcontroldomaininsightsbyassessment)
- [ListControlInsightsByControlDomain](AwsAuditmanagerActions.md#listcontrolinsightsbycontroldomain)
- [ListControls](AwsAuditmanagerActions.md#listcontrols)
- [ListKeywordsForDataSource](AwsAuditmanagerActions.md#listkeywordsfordatasource)
- [ListNotifications](AwsAuditmanagerActions.md#listnotifications)
- [ListTagsForResource](AwsAuditmanagerActions.md#listtagsforresource)
- [RegisterAccount](AwsAuditmanagerActions.md#registeraccount)
- [RegisterOrganizationAdminAccount](AwsAuditmanagerActions.md#registerorganizationadminaccount)
- [StartAssessmentFrameworkShare](AwsAuditmanagerActions.md#startassessmentframeworkshare)
- [TagResource](AwsAuditmanagerActions.md#tagresource)
- [UntagResource](AwsAuditmanagerActions.md#untagresource)
- [UpdateAssessment](AwsAuditmanagerActions.md#updateassessment)
- [UpdateAssessmentControl](AwsAuditmanagerActions.md#updateassessmentcontrol)
- [UpdateAssessmentControlSetStatus](AwsAuditmanagerActions.md#updateassessmentcontrolsetstatus)
- [UpdateAssessmentFramework](AwsAuditmanagerActions.md#updateassessmentframework)
- [UpdateAssessmentFrameworkShare](AwsAuditmanagerActions.md#updateassessmentframeworkshare)
- [UpdateAssessmentStatus](AwsAuditmanagerActions.md#updateassessmentstatus)
- [UpdateControl](AwsAuditmanagerActions.md#updatecontrol)
- [UpdateSettings](AwsAuditmanagerActions.md#updatesettings)
- [ValidateAssessmentReportIntegrity](AwsAuditmanagerActions.md#validateassessmentreportintegrity)

## Enumeration Members

### AssociateAssessmentReportEvidenceFolder

• **AssociateAssessmentReportEvidenceFolder** = ``"auditmanager:AssociateAssessmentReportEvidenceFolder"``

Grants permission to associate an evidence folder with an assessment report in
AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_AssociateAssessmentReportEvidenceFolder.html

#### Defined in

actions/auditmanager.ts:18

___

### BatchAssociateAssessmentReportEvidence

• **BatchAssociateAssessmentReportEvidence** = ``"auditmanager:BatchAssociateAssessmentReportEvidence"``

Grants permission to associate a list of evidence to an assessment report in AW
S Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html

#### Defined in

actions/auditmanager.ts:25

___

### BatchCreateDelegationByAssessment

• **BatchCreateDelegationByAssessment** = ``"auditmanager:BatchCreateDelegationByAssessment"``

Grants permission to create delegations for an assessment in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchCreateDelegationByAssessment.html

#### Defined in

actions/auditmanager.ts:31

___

### BatchDeleteDelegationByAssessment

• **BatchDeleteDelegationByAssessment** = ``"auditmanager:BatchDeleteDelegationByAssessment"``

Grants permission to delete delegations for an assessment in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchDeleteDelegationByAssessment.html

#### Defined in

actions/auditmanager.ts:37

___

### BatchDisassociateAssessmentReportEvidence

• **BatchDisassociateAssessmentReportEvidence** = ``"auditmanager:BatchDisassociateAssessmentReportEvidence"``

Grants permission to disassociate a list of evidence from an assessment report
in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchDisassociateAssessmentReportEvidence.html

#### Defined in

actions/auditmanager.ts:44

___

### BatchImportEvidenceToAssessmentControl

• **BatchImportEvidenceToAssessmentControl** = ``"auditmanager:BatchImportEvidenceToAssessmentControl"``

Grants permission to import a list of evidence to an assessment control in AWS
Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchImportEvidenceToAssessmentControl.html

#### Defined in

actions/auditmanager.ts:51

___

### CreateAssessment

• **CreateAssessment** = ``"auditmanager:CreateAssessment"``

Grants permission to create an assessment to be used with AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html

#### Defined in

actions/auditmanager.ts:57

___

### CreateAssessmentFramework

• **CreateAssessmentFramework** = ``"auditmanager:CreateAssessmentFramework"``

Grants permission to create a framework for use in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessmentFramework.html

#### Defined in

actions/auditmanager.ts:63

___

### CreateAssessmentReport

• **CreateAssessmentReport** = ``"auditmanager:CreateAssessmentReport"``

Grants permission to create an assessment report in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessmentReport.html

#### Defined in

actions/auditmanager.ts:69

___

### CreateControl

• **CreateControl** = ``"auditmanager:CreateControl"``

Grants permission to create a control to be used in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateControl.html

#### Defined in

actions/auditmanager.ts:75

___

### DeleteAssessment

• **DeleteAssessment** = ``"auditmanager:DeleteAssessment"``

Grants permission to delete an assessment in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html

#### Defined in

actions/auditmanager.ts:81

___

### DeleteAssessmentFramework

• **DeleteAssessmentFramework** = ``"auditmanager:DeleteAssessmentFramework"``

Grants permission to delete an assessment framework in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html

#### Defined in

actions/auditmanager.ts:87

___

### DeleteAssessmentFrameworkShare

• **DeleteAssessmentFrameworkShare** = ``"auditmanager:DeleteAssessmentFrameworkShare"``

Grants permission to delete a share request for a custom framework in AWS Audit
Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html

#### Defined in

actions/auditmanager.ts:94

___

### DeleteAssessmentReport

• **DeleteAssessmentReport** = ``"auditmanager:DeleteAssessmentReport"``

Grants permission to delete an assessment report in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html

#### Defined in

actions/auditmanager.ts:100

___

### DeleteControl

• **DeleteControl** = ``"auditmanager:DeleteControl"``

Grants permission to delete a control in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html

#### Defined in

actions/auditmanager.ts:106

___

### DeregisterAccount

• **DeregisterAccount** = ``"auditmanager:DeregisterAccount"``

Grants permission to deregister an account in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_%20DeregisterAccount.html

#### Defined in

actions/auditmanager.ts:112

___

### DeregisterOrganizationAdminAccount

• **DeregisterOrganizationAdminAccount** = ``"auditmanager:DeregisterOrganizationAdminAccount"``

Grants permission to deregister the delegated administrator account for AWS Aud
it Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterOrganizationAdminAccount.html

#### Defined in

actions/auditmanager.ts:119

___

### DisassociateAssessmentReportEvidenceFolder

• **DisassociateAssessmentReportEvidenceFolder** = ``"auditmanager:DisassociateAssessmentReportEvidenceFolder"``

Grants permission to disassociate an evidence folder from an assessment report
in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DisassociateAssessmentReportEvidenceFolder.html

#### Defined in

actions/auditmanager.ts:126

___

### GetAccountStatus

• **GetAccountStatus** = ``"auditmanager:GetAccountStatus"``

Grants permission to get the status of an account in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAccountStatus.html

#### Defined in

actions/auditmanager.ts:132

___

### GetAssessment

• **GetAssessment** = ``"auditmanager:GetAssessment"``

Grants permission to get an assessment created in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessment.html

#### Defined in

actions/auditmanager.ts:138

___

### GetAssessmentFramework

• **GetAssessmentFramework** = ``"auditmanager:GetAssessmentFramework"``

Grants permission to get an assessment framework in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessmentFramework.html

#### Defined in

actions/auditmanager.ts:144

___

### GetAssessmentReportUrl

• **GetAssessmentReportUrl** = ``"auditmanager:GetAssessmentReportUrl"``

Grants permission to get the URL for an assessment report in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessmentReportUrl.html

#### Defined in

actions/auditmanager.ts:150

___

### GetChangeLogs

• **GetChangeLogs** = ``"auditmanager:GetChangeLogs"``

Grants permission to get changelogs for an assessment in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetChangeLogs.html

#### Defined in

actions/auditmanager.ts:156

___

### GetControl

• **GetControl** = ``"auditmanager:GetControl"``

Grants permission to get a control in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetControl.html

#### Defined in

actions/auditmanager.ts:162

___

### GetDelegations

• **GetDelegations** = ``"auditmanager:GetDelegations"``

Grants permission to get all delegations in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetDelegations.html

#### Defined in

actions/auditmanager.ts:168

___

### GetEvidence

• **GetEvidence** = ``"auditmanager:GetEvidence"``

Grants permission to get evidence from AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidence.html

#### Defined in

actions/auditmanager.ts:174

___

### GetEvidenceByEvidenceFolder

• **GetEvidenceByEvidenceFolder** = ``"auditmanager:GetEvidenceByEvidenceFolder"``

Grants permission to get all the evidence from an evidence folder in AWS Audit
Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceByEvidenceFolder.html

#### Defined in

actions/auditmanager.ts:181

___

### GetEvidenceFileUploadUrl

• **GetEvidenceFileUploadUrl** = ``"auditmanager:GetEvidenceFileUploadUrl"``

Grants permission to get a presigned Amazon S3 URL that can be used to upload a
file as manual evidence

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFileUploadUrl.html

#### Defined in

actions/auditmanager.ts:188

___

### GetEvidenceFolder

• **GetEvidenceFolder** = ``"auditmanager:GetEvidenceFolder"``

Grants permission to get the evidence folder from AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFolder.html

#### Defined in

actions/auditmanager.ts:194

___

### GetEvidenceFoldersByAssessment

• **GetEvidenceFoldersByAssessment** = ``"auditmanager:GetEvidenceFoldersByAssessment"``

Grants permission to get the evidence folders from an assessment in AWS Audit M
anager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFoldersByAssessment.html

#### Defined in

actions/auditmanager.ts:201

___

### GetEvidenceFoldersByAssessmentControl

• **GetEvidenceFoldersByAssessmentControl** = ``"auditmanager:GetEvidenceFoldersByAssessmentControl"``

Grants permission to get the evidence folders from an assessment control in AWS
Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFoldersByAssessmentControl.html

#### Defined in

actions/auditmanager.ts:208

___

### GetInsights

• **GetInsights** = ``"auditmanager:GetInsights"``

Grants permission to get analytics data for all active assessments

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetInsights.html

#### Defined in

actions/auditmanager.ts:214

___

### GetInsightsByAssessment

• **GetInsightsByAssessment** = ``"auditmanager:GetInsightsByAssessment"``

Grants permission to get analytics data for a specific active assessment

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetInsightsByAssessment.html

#### Defined in

actions/auditmanager.ts:220

___

### GetOrganizationAdminAccount

• **GetOrganizationAdminAccount** = ``"auditmanager:GetOrganizationAdminAccount"``

Grants permission to get the delegated administrator account in AWS Audit Manag
er

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetOrganizationAdminAccount.html

#### Defined in

actions/auditmanager.ts:227

___

### GetServicesInScope

• **GetServicesInScope** = ``"auditmanager:GetServicesInScope"``

Grants permission to get the services in scope for an assessment in AWS Audit M
anager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html

#### Defined in

actions/auditmanager.ts:234

___

### GetSettings

• **GetSettings** = ``"auditmanager:GetSettings"``

Grants permission to get all settings configured in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetSettings.html

#### Defined in

actions/auditmanager.ts:240

___

### ListAssessmentControlInsightsByControlDomain

• **ListAssessmentControlInsightsByControlDomain** = ``"auditmanager:ListAssessmentControlInsightsByControlDomain"``

Grants permission to list analytics data for controls in a specific control dom
ain and active assessment

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentControlInsightsByControlDomain.html

#### Defined in

actions/auditmanager.ts:247

___

### ListAssessmentFrameworkShareRequests

• **ListAssessmentFrameworkShareRequests** = ``"auditmanager:ListAssessmentFrameworkShareRequests"``

Grants permission to list all sent or received share requests for custom framew
orks in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentFrameworkShareRequests.html

#### Defined in

actions/auditmanager.ts:254

___

### ListAssessmentFrameworks

• **ListAssessmentFrameworks** = ``"auditmanager:ListAssessmentFrameworks"``

Grants permission to list all assessment frameworks in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentFrameworks.html

#### Defined in

actions/auditmanager.ts:260

___

### ListAssessmentReports

• **ListAssessmentReports** = ``"auditmanager:ListAssessmentReports"``

Grants permission to list all assessment reports in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentReports.html

#### Defined in

actions/auditmanager.ts:266

___

### ListAssessments

• **ListAssessments** = ``"auditmanager:ListAssessments"``

Grants permission to list all assessments in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessments.html

#### Defined in

actions/auditmanager.ts:272

___

### ListControlDomainInsights

• **ListControlDomainInsights** = ``"auditmanager:ListControlDomainInsights"``

Grants permission to list analytics data for control domains across all active
assessments

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControlDomainInsights.html

#### Defined in

actions/auditmanager.ts:279

___

### ListControlDomainInsightsByAssessment

• **ListControlDomainInsightsByAssessment** = ``"auditmanager:ListControlDomainInsightsByAssessment"``

Grants permission to list analytics data for control domains in a specific acti
ve assessment

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControlDomainInsightsByAssessment.html

#### Defined in

actions/auditmanager.ts:286

___

### ListControlInsightsByControlDomain

• **ListControlInsightsByControlDomain** = ``"auditmanager:ListControlInsightsByControlDomain"``

Grants permission to list analytics data for controls in a specific control dom
ain across all active assessments

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControlInsightsByControlDomain.html

#### Defined in

actions/auditmanager.ts:293

___

### ListControls

• **ListControls** = ``"auditmanager:ListControls"``

Grants permission to list all controls in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControls.html

#### Defined in

actions/auditmanager.ts:299

___

### ListKeywordsForDataSource

• **ListKeywordsForDataSource** = ``"auditmanager:ListKeywordsForDataSource"``

Grants permission to list all the data source keywords in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListKeywordsForDataSource.html

#### Defined in

actions/auditmanager.ts:305

___

### ListNotifications

• **ListNotifications** = ``"auditmanager:ListNotifications"``

Grants permission to list all notifications in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListNotifications.html

#### Defined in

actions/auditmanager.ts:311

___

### ListTagsForResource

• **ListTagsForResource** = ``"auditmanager:ListTagsForResource"``

Grants permission to list tags for an AWS Audit Manager resource

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/auditmanager.ts:317

___

### RegisterAccount

• **RegisterAccount** = ``"auditmanager:RegisterAccount"``

Grants permission to register an account in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html

#### Defined in

actions/auditmanager.ts:323

___

### RegisterOrganizationAdminAccount

• **RegisterOrganizationAdminAccount** = ``"auditmanager:RegisterOrganizationAdminAccount"``

Grants permission to register an account within the organization as the delegat
ed administrator for AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterOrganizationAdminAccount.html

#### Defined in

actions/auditmanager.ts:330

___

### StartAssessmentFrameworkShare

• **StartAssessmentFrameworkShare** = ``"auditmanager:StartAssessmentFrameworkShare"``

Grants permission to create a share request for a custom framework in AWS Audit
Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_StartAssessmentFrameworkShare.html

#### Defined in

actions/auditmanager.ts:337

___

### TagResource

• **TagResource** = ``"auditmanager:TagResource"``

Grants permission to tag an AWS Audit Manager resource

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_TagResource.html

#### Defined in

actions/auditmanager.ts:343

___

### UntagResource

• **UntagResource** = ``"auditmanager:UntagResource"``

Grants permission to untag an AWS Audit Manager resource

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UntagResource.html

#### Defined in

actions/auditmanager.ts:349

___

### UpdateAssessment

• **UpdateAssessment** = ``"auditmanager:UpdateAssessment"``

Grants permission to update an assessment in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessment.html

#### Defined in

actions/auditmanager.ts:355

___

### UpdateAssessmentControl

• **UpdateAssessmentControl** = ``"auditmanager:UpdateAssessmentControl"``

Grants permission to update an assessment control in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentControl.html

#### Defined in

actions/auditmanager.ts:361

___

### UpdateAssessmentControlSetStatus

• **UpdateAssessmentControlSetStatus** = ``"auditmanager:UpdateAssessmentControlSetStatus"``

Grants permission to update the status of an assessment control set in AWS Audi
t Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentControlSetStatus.html

#### Defined in

actions/auditmanager.ts:368

___

### UpdateAssessmentFramework

• **UpdateAssessmentFramework** = ``"auditmanager:UpdateAssessmentFramework"``

Grants permission to update an assessment framework in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentFramework.html

#### Defined in

actions/auditmanager.ts:374

___

### UpdateAssessmentFrameworkShare

• **UpdateAssessmentFrameworkShare** = ``"auditmanager:UpdateAssessmentFrameworkShare"``

Grants permission to update a share request for a custom framework in AWS Audit
Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentFrameworkShare.html

#### Defined in

actions/auditmanager.ts:381

___

### UpdateAssessmentStatus

• **UpdateAssessmentStatus** = ``"auditmanager:UpdateAssessmentStatus"``

Grants permission to update the status of an assessment in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentStatus.html

#### Defined in

actions/auditmanager.ts:387

___

### UpdateControl

• **UpdateControl** = ``"auditmanager:UpdateControl"``

Grants permission to update a control in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateControl.html

#### Defined in

actions/auditmanager.ts:393

___

### UpdateSettings

• **UpdateSettings** = ``"auditmanager:UpdateSettings"``

Grants permission to update settings in AWS Audit Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html

#### Defined in

actions/auditmanager.ts:399

___

### ValidateAssessmentReportIntegrity

• **ValidateAssessmentReportIntegrity** = ``"auditmanager:ValidateAssessmentReportIntegrity"``

Grants permission to validate the integrity of an assessment report in AWS Audi
t Manager

See https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ValidateAssessmentReportIntegrity.html

#### Defined in

actions/auditmanager.ts:406
