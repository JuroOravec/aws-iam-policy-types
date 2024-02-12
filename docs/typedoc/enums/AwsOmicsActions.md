[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsOmicsActions

# Enumeration: AwsOmicsActions

All IAM policy actions for AWS HealthOmics (OMICS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthomics.html

2024-02-12T09:57:35.569Z

## Table of contents

### Enumeration Members

- [AbortMultipartReadSetUpload](AwsOmicsActions.md#abortmultipartreadsetupload)
- [AcceptShare](AwsOmicsActions.md#acceptshare)
- [BatchDeleteReadSet](AwsOmicsActions.md#batchdeletereadset)
- [CancelAnnotationImportJob](AwsOmicsActions.md#cancelannotationimportjob)
- [CancelRun](AwsOmicsActions.md#cancelrun)
- [CancelVariantImportJob](AwsOmicsActions.md#cancelvariantimportjob)
- [CompleteMultipartReadSetUpload](AwsOmicsActions.md#completemultipartreadsetupload)
- [CreateAnnotationStore](AwsOmicsActions.md#createannotationstore)
- [CreateAnnotationStoreVersion](AwsOmicsActions.md#createannotationstoreversion)
- [CreateMultipartReadSetUpload](AwsOmicsActions.md#createmultipartreadsetupload)
- [CreateReferenceStore](AwsOmicsActions.md#createreferencestore)
- [CreateRunGroup](AwsOmicsActions.md#createrungroup)
- [CreateSequenceStore](AwsOmicsActions.md#createsequencestore)
- [CreateShare](AwsOmicsActions.md#createshare)
- [CreateVariantStore](AwsOmicsActions.md#createvariantstore)
- [CreateWorkflow](AwsOmicsActions.md#createworkflow)
- [DeleteAnnotationStore](AwsOmicsActions.md#deleteannotationstore)
- [DeleteAnnotationStoreVersions](AwsOmicsActions.md#deleteannotationstoreversions)
- [DeleteReference](AwsOmicsActions.md#deletereference)
- [DeleteReferenceStore](AwsOmicsActions.md#deletereferencestore)
- [DeleteRun](AwsOmicsActions.md#deleterun)
- [DeleteRunGroup](AwsOmicsActions.md#deleterungroup)
- [DeleteSequenceStore](AwsOmicsActions.md#deletesequencestore)
- [DeleteShare](AwsOmicsActions.md#deleteshare)
- [DeleteVariantStore](AwsOmicsActions.md#deletevariantstore)
- [DeleteWorkflow](AwsOmicsActions.md#deleteworkflow)
- [GetAnnotationImportJob](AwsOmicsActions.md#getannotationimportjob)
- [GetAnnotationStore](AwsOmicsActions.md#getannotationstore)
- [GetAnnotationStoreVersion](AwsOmicsActions.md#getannotationstoreversion)
- [GetReadSet](AwsOmicsActions.md#getreadset)
- [GetReadSetActivationJob](AwsOmicsActions.md#getreadsetactivationjob)
- [GetReadSetExportJob](AwsOmicsActions.md#getreadsetexportjob)
- [GetReadSetImportJob](AwsOmicsActions.md#getreadsetimportjob)
- [GetReadSetMetadata](AwsOmicsActions.md#getreadsetmetadata)
- [GetReference](AwsOmicsActions.md#getreference)
- [GetReferenceImportJob](AwsOmicsActions.md#getreferenceimportjob)
- [GetReferenceMetadata](AwsOmicsActions.md#getreferencemetadata)
- [GetReferenceStore](AwsOmicsActions.md#getreferencestore)
- [GetRun](AwsOmicsActions.md#getrun)
- [GetRunGroup](AwsOmicsActions.md#getrungroup)
- [GetRunTask](AwsOmicsActions.md#getruntask)
- [GetSequenceStore](AwsOmicsActions.md#getsequencestore)
- [GetShare](AwsOmicsActions.md#getshare)
- [GetVariantImportJob](AwsOmicsActions.md#getvariantimportjob)
- [GetVariantStore](AwsOmicsActions.md#getvariantstore)
- [GetWorkflow](AwsOmicsActions.md#getworkflow)
- [ListAnnotationImportJobs](AwsOmicsActions.md#listannotationimportjobs)
- [ListAnnotationStoreVersions](AwsOmicsActions.md#listannotationstoreversions)
- [ListAnnotationStores](AwsOmicsActions.md#listannotationstores)
- [ListMultipartReadSetUploads](AwsOmicsActions.md#listmultipartreadsetuploads)
- [ListReadSetActivationJobs](AwsOmicsActions.md#listreadsetactivationjobs)
- [ListReadSetExportJobs](AwsOmicsActions.md#listreadsetexportjobs)
- [ListReadSetImportJobs](AwsOmicsActions.md#listreadsetimportjobs)
- [ListReadSetUploadParts](AwsOmicsActions.md#listreadsetuploadparts)
- [ListReadSets](AwsOmicsActions.md#listreadsets)
- [ListReferenceImportJobs](AwsOmicsActions.md#listreferenceimportjobs)
- [ListReferenceStores](AwsOmicsActions.md#listreferencestores)
- [ListReferences](AwsOmicsActions.md#listreferences)
- [ListRunGroups](AwsOmicsActions.md#listrungroups)
- [ListRunTasks](AwsOmicsActions.md#listruntasks)
- [ListRuns](AwsOmicsActions.md#listruns)
- [ListSequenceStores](AwsOmicsActions.md#listsequencestores)
- [ListShares](AwsOmicsActions.md#listshares)
- [ListTagsForResource](AwsOmicsActions.md#listtagsforresource)
- [ListVariantImportJobs](AwsOmicsActions.md#listvariantimportjobs)
- [ListVariantStores](AwsOmicsActions.md#listvariantstores)
- [ListWorkflows](AwsOmicsActions.md#listworkflows)
- [StartAnnotationImportJob](AwsOmicsActions.md#startannotationimportjob)
- [StartReadSetActivationJob](AwsOmicsActions.md#startreadsetactivationjob)
- [StartReadSetExportJob](AwsOmicsActions.md#startreadsetexportjob)
- [StartReadSetImportJob](AwsOmicsActions.md#startreadsetimportjob)
- [StartReferenceImportJob](AwsOmicsActions.md#startreferenceimportjob)
- [StartRun](AwsOmicsActions.md#startrun)
- [StartVariantImportJob](AwsOmicsActions.md#startvariantimportjob)
- [TagResource](AwsOmicsActions.md#tagresource)
- [UntagResource](AwsOmicsActions.md#untagresource)
- [UpdateAnnotationStore](AwsOmicsActions.md#updateannotationstore)
- [UpdateAnnotationStoreVersion](AwsOmicsActions.md#updateannotationstoreversion)
- [UpdateRunGroup](AwsOmicsActions.md#updaterungroup)
- [UpdateVariantStore](AwsOmicsActions.md#updatevariantstore)
- [UpdateWorkflow](AwsOmicsActions.md#updateworkflow)
- [UploadReadSetPart](AwsOmicsActions.md#uploadreadsetpart)

## Enumeration Members

### AbortMultipartReadSetUpload

• **AbortMultipartReadSetUpload** = ``"omics:AbortMultipartReadSetUpload"``

Grants permission to abort multipart read set uploads

See https://docs.aws.amazon.com/omics/latest/api/API_AbortMultipartReadSetUpload.html

#### Defined in

actions/omics.ts:17

___

### AcceptShare

• **AcceptShare** = ``"omics:AcceptShare"``

Grants permission to accept a share

See https://docs.aws.amazon.com/omics/latest/api/API_AcceptShare.html

#### Defined in

actions/omics.ts:23

___

### BatchDeleteReadSet

• **BatchDeleteReadSet** = ``"omics:BatchDeleteReadSet"``

Grants permission to batch delete Read Sets in the given Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_BatchDeleteReadSet.html

#### Defined in

actions/omics.ts:29

___

### CancelAnnotationImportJob

• **CancelAnnotationImportJob** = ``"omics:CancelAnnotationImportJob"``

Grants permission to cancel an Annotation Import Job

See https://docs.aws.amazon.com/omics/latest/api/API_CancelAnnotationImportJob.html

#### Defined in

actions/omics.ts:35

___

### CancelRun

• **CancelRun** = ``"omics:CancelRun"``

Grants permission to cancel a workflow run and stop all workflow tasks

See https://docs.aws.amazon.com/omics/latest/api/API_CancelRun.html

#### Defined in

actions/omics.ts:41

___

### CancelVariantImportJob

• **CancelVariantImportJob** = ``"omics:CancelVariantImportJob"``

Grants permission to cancel a Variant Import Job

See https://docs.aws.amazon.com/omics/latest/api/API_CancelVariantImportJob.html

#### Defined in

actions/omics.ts:47

___

### CompleteMultipartReadSetUpload

• **CompleteMultipartReadSetUpload** = ``"omics:CompleteMultipartReadSetUpload"``

Grants permission to complete a multipart read set upload

See https://docs.aws.amazon.com/omics/latest/api/API_CompleteMultipartReadSetUpload.html

#### Defined in

actions/omics.ts:53

___

### CreateAnnotationStore

• **CreateAnnotationStore** = ``"omics:CreateAnnotationStore"``

Grants permission to create an Annotation Store

See https://docs.aws.amazon.com/omics/latest/api/API_CreateAnnotationStore.html

#### Defined in

actions/omics.ts:59

___

### CreateAnnotationStoreVersion

• **CreateAnnotationStoreVersion** = ``"omics:CreateAnnotationStoreVersion"``

Grants permission to create a Version in an Annotation Store

See https://docs.aws.amazon.com/omics/latest/api/API_CreateAnnotationStoreVersion.html

#### Defined in

actions/omics.ts:65

___

### CreateMultipartReadSetUpload

• **CreateMultipartReadSetUpload** = ``"omics:CreateMultipartReadSetUpload"``

Grants permission to create a multipart read set upload

See https://docs.aws.amazon.com/omics/latest/api/API_CreateMultipartReadSetUpload.html

#### Defined in

actions/omics.ts:71

___

### CreateReferenceStore

• **CreateReferenceStore** = ``"omics:CreateReferenceStore"``

Grants permission to create a Reference Store

See https://docs.aws.amazon.com/omics/latest/api/API_CreateReferenceStore.html

#### Defined in

actions/omics.ts:77

___

### CreateRunGroup

• **CreateRunGroup** = ``"omics:CreateRunGroup"``

Grants permission to create a new workflow run group

See https://docs.aws.amazon.com/omics/latest/api/API_CreateRunGroup.html

#### Defined in

actions/omics.ts:83

___

### CreateSequenceStore

• **CreateSequenceStore** = ``"omics:CreateSequenceStore"``

Grants permission to create a Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_CreateSequenceStore.html

#### Defined in

actions/omics.ts:89

___

### CreateShare

• **CreateShare** = ``"omics:CreateShare"``

Grants permission to create a share

See https://docs.aws.amazon.com/omics/latest/api/API_CreateShare.html

#### Defined in

actions/omics.ts:95

___

### CreateVariantStore

• **CreateVariantStore** = ``"omics:CreateVariantStore"``

Grants permission to create a Variant Store

See https://docs.aws.amazon.com/omics/latest/api/API_CreateVariantStore.html

#### Defined in

actions/omics.ts:101

___

### CreateWorkflow

• **CreateWorkflow** = ``"omics:CreateWorkflow"``

Grants permission to create a new workflow with a workflow definition and templ
ate of workflow parameters

See https://docs.aws.amazon.com/omics/latest/api/API_CreateWorkflow.html

#### Defined in

actions/omics.ts:108

___

### DeleteAnnotationStore

• **DeleteAnnotationStore** = ``"omics:DeleteAnnotationStore"``

Grants permission to delete an Annotation Store

See https://docs.aws.amazon.com/omics/latest/api/API_DeleteAnnotationStore.html

#### Defined in

actions/omics.ts:114

___

### DeleteAnnotationStoreVersions

• **DeleteAnnotationStoreVersions** = ``"omics:DeleteAnnotationStoreVersions"``

Grants permission to delete Versions in an Annotation Store

See https://docs.aws.amazon.com/omics/latest/api/API_DeleteAnnotationStoreVersions.html

#### Defined in

actions/omics.ts:120

___

### DeleteReference

• **DeleteReference** = ``"omics:DeleteReference"``

Grants permission to delete a Reference in the given Reference Store

See https://docs.aws.amazon.com/omics/latest/api/API_DeleteReference.html

#### Defined in

actions/omics.ts:126

___

### DeleteReferenceStore

• **DeleteReferenceStore** = ``"omics:DeleteReferenceStore"``

Grants permission to delete a Reference Store

See https://docs.aws.amazon.com/omics/latest/api/API_DeleteReferenceStore.html

#### Defined in

actions/omics.ts:132

___

### DeleteRun

• **DeleteRun** = ``"omics:DeleteRun"``

Grants permission to delete a workflow run

See https://docs.aws.amazon.com/omics/latest/api/API_DeleteRun.html

#### Defined in

actions/omics.ts:138

___

### DeleteRunGroup

• **DeleteRunGroup** = ``"omics:DeleteRunGroup"``

Grants permission to delete a workflow run group

See https://docs.aws.amazon.com/omics/latest/api/API_DeleteRunGroup.html

#### Defined in

actions/omics.ts:144

___

### DeleteSequenceStore

• **DeleteSequenceStore** = ``"omics:DeleteSequenceStore"``

Grants permission to delete a Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_DeleteSequenceStore.html

#### Defined in

actions/omics.ts:150

___

### DeleteShare

• **DeleteShare** = ``"omics:DeleteShare"``

Grants permission to delete a share

See https://docs.aws.amazon.com/omics/latest/api/API_DeleteShare.html

#### Defined in

actions/omics.ts:156

___

### DeleteVariantStore

• **DeleteVariantStore** = ``"omics:DeleteVariantStore"``

Grants permission to delete a Variant Store

See https://docs.aws.amazon.com/omics/latest/api/API_DeleteVariantStore.html

#### Defined in

actions/omics.ts:162

___

### DeleteWorkflow

• **DeleteWorkflow** = ``"omics:DeleteWorkflow"``

Grants permission to delete a workflow

See https://docs.aws.amazon.com/omics/latest/api/API_DeleteWorkflow.html

#### Defined in

actions/omics.ts:168

___

### GetAnnotationImportJob

• **GetAnnotationImportJob** = ``"omics:GetAnnotationImportJob"``

Grants permission to get the status of an Annotation Import Job

See https://docs.aws.amazon.com/omics/latest/api/API_GetAnnotationImportJob.html

#### Defined in

actions/omics.ts:174

___

### GetAnnotationStore

• **GetAnnotationStore** = ``"omics:GetAnnotationStore"``

Grants permission to get detailed information about an Annotation Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetAnnotationStore.html

#### Defined in

actions/omics.ts:180

___

### GetAnnotationStoreVersion

• **GetAnnotationStoreVersion** = ``"omics:GetAnnotationStoreVersion"``

Grants permission to get detailed information about a version in an Annotation
Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetAnnotationStoreVersion.html

#### Defined in

actions/omics.ts:187

___

### GetReadSet

• **GetReadSet** = ``"omics:GetReadSet"``

Grants permission to get a Read Set in the given Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetReadSet.html

#### Defined in

actions/omics.ts:193

___

### GetReadSetActivationJob

• **GetReadSetActivationJob** = ``"omics:GetReadSetActivationJob"``

Grants permission to get details about a Read Set activation job for the given
Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetReadSetActivationJob.html

#### Defined in

actions/omics.ts:200

___

### GetReadSetExportJob

• **GetReadSetExportJob** = ``"omics:GetReadSetExportJob"``

Grants permission to get details about a Read Set export job for the given Sequ
ence Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetReadSetExportJob.html

#### Defined in

actions/omics.ts:207

___

### GetReadSetImportJob

• **GetReadSetImportJob** = ``"omics:GetReadSetImportJob"``

Grants permission to get details about a Read Set import job for the given Sequ
ence Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetReadSetImportJob.html

#### Defined in

actions/omics.ts:214

___

### GetReadSetMetadata

• **GetReadSetMetadata** = ``"omics:GetReadSetMetadata"``

Grants permission to get details about a Read Set in the given Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetReadSetMetadata.html

#### Defined in

actions/omics.ts:220

___

### GetReference

• **GetReference** = ``"omics:GetReference"``

Grants permission to get a Reference in the given Reference Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetReference.html

#### Defined in

actions/omics.ts:226

___

### GetReferenceImportJob

• **GetReferenceImportJob** = ``"omics:GetReferenceImportJob"``

Grants permission to get details about a Reference import job for the given Ref
erence Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetReferenceImportJob.html

#### Defined in

actions/omics.ts:233

___

### GetReferenceMetadata

• **GetReferenceMetadata** = ``"omics:GetReferenceMetadata"``

Grants permission to get details about a Reference in the given Reference Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetReferenceMetadata.html

#### Defined in

actions/omics.ts:239

___

### GetReferenceStore

• **GetReferenceStore** = ``"omics:GetReferenceStore"``

Grants permission to get details about a Reference Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetReferenceStore.html

#### Defined in

actions/omics.ts:245

___

### GetRun

• **GetRun** = ``"omics:GetRun"``

Grants permission to retrieve workflow run details

See https://docs.aws.amazon.com/omics/latest/api/API_GetRun.html

#### Defined in

actions/omics.ts:251

___

### GetRunGroup

• **GetRunGroup** = ``"omics:GetRunGroup"``

Grants permission to retrieve workflow run group details

See https://docs.aws.amazon.com/omics/latest/api/API_GetRunGroup.html

#### Defined in

actions/omics.ts:257

___

### GetRunTask

• **GetRunTask** = ``"omics:GetRunTask"``

Grants permission to retrieve workflow task details

See https://docs.aws.amazon.com/omics/latest/api/API_GetRunTask.html

#### Defined in

actions/omics.ts:263

___

### GetSequenceStore

• **GetSequenceStore** = ``"omics:GetSequenceStore"``

Grants permission to get details about a Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetSequenceStore.html

#### Defined in

actions/omics.ts:269

___

### GetShare

• **GetShare** = ``"omics:GetShare"``

Grants permission to get detailed information about a Share

See https://docs.aws.amazon.com/omics/latest/api/API_GetShare.html

#### Defined in

actions/omics.ts:275

___

### GetVariantImportJob

• **GetVariantImportJob** = ``"omics:GetVariantImportJob"``

Grants permission to get the status of a Variant Import Job

See https://docs.aws.amazon.com/omics/latest/api/API_GetVariantImportJob.html

#### Defined in

actions/omics.ts:281

___

### GetVariantStore

• **GetVariantStore** = ``"omics:GetVariantStore"``

Grants permission to get detailed information about a Variant Store

See https://docs.aws.amazon.com/omics/latest/api/API_GetVariantStore.html

#### Defined in

actions/omics.ts:287

___

### GetWorkflow

• **GetWorkflow** = ``"omics:GetWorkflow"``

Grants permission to retrieve workflow details

See https://docs.aws.amazon.com/omics/latest/api/API_GetWorkflow.html

#### Defined in

actions/omics.ts:293

___

### ListAnnotationImportJobs

• **ListAnnotationImportJobs** = ``"omics:ListAnnotationImportJobs"``

Grants permission to get a list of Annotation Import Jobs

See https://docs.aws.amazon.com/omics/latest/api/API_ListAnnotationImportJobs.html

#### Defined in

actions/omics.ts:299

___

### ListAnnotationStoreVersions

• **ListAnnotationStoreVersions** = ``"omics:ListAnnotationStoreVersions"``

Grants permission to retrieve a list of information about Versions in an Annota
tion Store

See https://docs.aws.amazon.com/omics/latest/api/API_ListAnnotationStoreVersions.html

#### Defined in

actions/omics.ts:306

___

### ListAnnotationStores

• **ListAnnotationStores** = ``"omics:ListAnnotationStores"``

Grants permission to retrieve a list of information about Annotation Stores

See https://docs.aws.amazon.com/omics/latest/api/API_ListAnnotationStores.html

#### Defined in

actions/omics.ts:312

___

### ListMultipartReadSetUploads

• **ListMultipartReadSetUploads** = ``"omics:ListMultipartReadSetUploads"``

Grants permission to list multipart read set uploads

See https://docs.aws.amazon.com/omics/latest/api/API_ListMultipartReadSetUploads.html

#### Defined in

actions/omics.ts:318

___

### ListReadSetActivationJobs

• **ListReadSetActivationJobs** = ``"omics:ListReadSetActivationJobs"``

Grants permission to list Read Set activation jobs for the given Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_ListReadSetActivationJobs.html

#### Defined in

actions/omics.ts:324

___

### ListReadSetExportJobs

• **ListReadSetExportJobs** = ``"omics:ListReadSetExportJobs"``

Grants permission to list Read Set export jobs for the given Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_ListReadSetExportJobs.html

#### Defined in

actions/omics.ts:330

___

### ListReadSetImportJobs

• **ListReadSetImportJobs** = ``"omics:ListReadSetImportJobs"``

Grants permission to list Read Set import jobs for the given Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_ListReadSetImportJobs.html

#### Defined in

actions/omics.ts:336

___

### ListReadSetUploadParts

• **ListReadSetUploadParts** = ``"omics:ListReadSetUploadParts"``

Grants permission to list read set upload parts

See https://docs.aws.amazon.com/omics/latest/api/API_ListReadSetUploadParts.html

#### Defined in

actions/omics.ts:342

___

### ListReadSets

• **ListReadSets** = ``"omics:ListReadSets"``

Grants permission to list Read Sets in the given Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_ListReadSets.html

#### Defined in

actions/omics.ts:348

___

### ListReferenceImportJobs

• **ListReferenceImportJobs** = ``"omics:ListReferenceImportJobs"``

Grants permission to list Reference import jobs for the given Reference Store

See https://docs.aws.amazon.com/omics/latest/api/API_ListReferenceImportJobs.html

#### Defined in

actions/omics.ts:354

___

### ListReferenceStores

• **ListReferenceStores** = ``"omics:ListReferenceStores"``

Grants permission to list Reference Stores

See https://docs.aws.amazon.com/omics/latest/api/API_ListReferenceStores.html

#### Defined in

actions/omics.ts:360

___

### ListReferences

• **ListReferences** = ``"omics:ListReferences"``

Grants permission to list References in the given Reference Store

See https://docs.aws.amazon.com/omics/latest/api/API_ListReferences.html

#### Defined in

actions/omics.ts:366

___

### ListRunGroups

• **ListRunGroups** = ``"omics:ListRunGroups"``

Grants permission to retrieve a list of workflow run groups

See https://docs.aws.amazon.com/omics/latest/api/API_ListRunGroups.html

#### Defined in

actions/omics.ts:372

___

### ListRunTasks

• **ListRunTasks** = ``"omics:ListRunTasks"``

Grants permission to retrieve a list of tasks for a workflow run

See https://docs.aws.amazon.com/omics/latest/api/API_ListRunTasks.html

#### Defined in

actions/omics.ts:378

___

### ListRuns

• **ListRuns** = ``"omics:ListRuns"``

Grants permission to retrieve a list of workflow runs

See https://docs.aws.amazon.com/omics/latest/api/API_ListRuns.html

#### Defined in

actions/omics.ts:384

___

### ListSequenceStores

• **ListSequenceStores** = ``"omics:ListSequenceStores"``

Grants permission to list Sequence Stores

See https://docs.aws.amazon.com/omics/latest/api/API_ListSequenceStores.html

#### Defined in

actions/omics.ts:390

___

### ListShares

• **ListShares** = ``"omics:ListShares"``

Grants permission to retrieve a list of information about shares

See https://docs.aws.amazon.com/omics/latest/api/API_ListShares.html

#### Defined in

actions/omics.ts:396

___

### ListTagsForResource

• **ListTagsForResource** = ``"omics:ListTagsForResource"``

Grants permission to retrieve a list of resource AWS tags

See https://docs.aws.amazon.com/omics/latest/api/API_ListTagsForResource.html

#### Defined in

actions/omics.ts:402

___

### ListVariantImportJobs

• **ListVariantImportJobs** = ``"omics:ListVariantImportJobs"``

Grants permission to get a list of Variant Import Jobs

See https://docs.aws.amazon.com/omics/latest/api/API_ListVariantImportJobs.html

#### Defined in

actions/omics.ts:408

___

### ListVariantStores

• **ListVariantStores** = ``"omics:ListVariantStores"``

Grants permission to retrieve a list of metadata for Variant Stores

See https://docs.aws.amazon.com/omics/latest/api/API_ListVariantStores.html

#### Defined in

actions/omics.ts:414

___

### ListWorkflows

• **ListWorkflows** = ``"omics:ListWorkflows"``

Grants permission to retrieve a list of available workflows

See https://docs.aws.amazon.com/omics/latest/api/API_ListWorkflows.html

#### Defined in

actions/omics.ts:420

___

### StartAnnotationImportJob

• **StartAnnotationImportJob** = ``"omics:StartAnnotationImportJob"``

Grants permission to import a list of Annotation files to an Annotation Store

See https://docs.aws.amazon.com/omics/latest/api/API_StartAnnotationImportJob.html

#### Defined in

actions/omics.ts:426

___

### StartReadSetActivationJob

• **StartReadSetActivationJob** = ``"omics:StartReadSetActivationJob"``

Grants permission to start a Read Set activation job from the given Sequence St
ore

See https://docs.aws.amazon.com/omics/latest/api/API_StartReadSetActivationJob.html

#### Defined in

actions/omics.ts:433

___

### StartReadSetExportJob

• **StartReadSetExportJob** = ``"omics:StartReadSetExportJob"``

Grants permission to start a Read Set export job from the given Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_StartReadSetExportJob.html

#### Defined in

actions/omics.ts:439

___

### StartReadSetImportJob

• **StartReadSetImportJob** = ``"omics:StartReadSetImportJob"``

Grants permission to start a Read Set import job into the given Sequence Store

See https://docs.aws.amazon.com/omics/latest/api/API_StartReadSetImportJob.html

#### Defined in

actions/omics.ts:445

___

### StartReferenceImportJob

• **StartReferenceImportJob** = ``"omics:StartReferenceImportJob"``

Grants permission to start a Reference import job into the given Reference Stor
e

See https://docs.aws.amazon.com/omics/latest/api/API_StartReferenceImportJob.html

#### Defined in

actions/omics.ts:452

___

### StartRun

• **StartRun** = ``"omics:StartRun"``

Grants permission to start a workflow run

See https://docs.aws.amazon.com/omics/latest/api/API_StartRun.html

#### Defined in

actions/omics.ts:458

___

### StartVariantImportJob

• **StartVariantImportJob** = ``"omics:StartVariantImportJob"``

Grants permission to import a list of variant files to an Variant Store

See https://docs.aws.amazon.com/omics/latest/api/API_StartVariantImportJob.html

#### Defined in

actions/omics.ts:464

___

### TagResource

• **TagResource** = ``"omics:TagResource"``

Grants permission to add AWS tags to a resource

See https://docs.aws.amazon.com/omics/latest/api/API_TagResource.html

#### Defined in

actions/omics.ts:470

___

### UntagResource

• **UntagResource** = ``"omics:UntagResource"``

Grants permission to remove resource AWS tags

See https://docs.aws.amazon.com/omics/latest/api/API_UntagResource.html

#### Defined in

actions/omics.ts:476

___

### UpdateAnnotationStore

• **UpdateAnnotationStore** = ``"omics:UpdateAnnotationStore"``

Grants permission to update information about the Annotation Store

See https://docs.aws.amazon.com/omics/latest/api/API_UpdateAnnotationStore.html

#### Defined in

actions/omics.ts:482

___

### UpdateAnnotationStoreVersion

• **UpdateAnnotationStoreVersion** = ``"omics:UpdateAnnotationStoreVersion"``

Grants permission to update information about the Version in an Annotation Stor
e

See https://docs.aws.amazon.com/omics/latest/api/API_UpdateAnnotationStoreVersion.html

#### Defined in

actions/omics.ts:489

___

### UpdateRunGroup

• **UpdateRunGroup** = ``"omics:UpdateRunGroup"``

Grants permission to update a workflow run group

See https://docs.aws.amazon.com/omics/latest/api/API_UpdateRunGroup.html

#### Defined in

actions/omics.ts:495

___

### UpdateVariantStore

• **UpdateVariantStore** = ``"omics:UpdateVariantStore"``

Grants permission to update metadata about the Variant Store

See https://docs.aws.amazon.com/omics/latest/api/API_UpdateVariantStore.html

#### Defined in

actions/omics.ts:501

___

### UpdateWorkflow

• **UpdateWorkflow** = ``"omics:UpdateWorkflow"``

Grants permission to update workflow details

See https://docs.aws.amazon.com/omics/latest/api/API_UpdateWorkflow.html

#### Defined in

actions/omics.ts:507

___

### UploadReadSetPart

• **UploadReadSetPart** = ``"omics:UploadReadSetPart"``

Grants permission to upload read set parts

See https://docs.aws.amazon.com/omics/latest/api/API_UploadReadSetPart.html

#### Defined in

actions/omics.ts:513
