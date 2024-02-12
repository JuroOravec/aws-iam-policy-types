[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSsmActions

# Enumeration: AwsSsmActions

All IAM policy actions for AWS Systems Manager (SSM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html

2024-02-12T09:59:25.475Z

## Table of contents

### Enumeration Members

- [AddTagsToResource](AwsSsmActions.md#addtagstoresource)
- [AssociateOpsItemRelatedItem](AwsSsmActions.md#associateopsitemrelateditem)
- [CancelCommand](AwsSsmActions.md#cancelcommand)
- [CancelMaintenanceWindowExecution](AwsSsmActions.md#cancelmaintenancewindowexecution)
- [CreateActivation](AwsSsmActions.md#createactivation)
- [CreateAssociation](AwsSsmActions.md#createassociation)
- [CreateAssociationBatch](AwsSsmActions.md#createassociationbatch)
- [CreateDocument](AwsSsmActions.md#createdocument)
- [CreateMaintenanceWindow](AwsSsmActions.md#createmaintenancewindow)
- [CreateOpsItem](AwsSsmActions.md#createopsitem)
- [CreateOpsMetadata](AwsSsmActions.md#createopsmetadata)
- [CreatePatchBaseline](AwsSsmActions.md#createpatchbaseline)
- [CreateResourceDataSync](AwsSsmActions.md#createresourcedatasync)
- [DeleteActivation](AwsSsmActions.md#deleteactivation)
- [DeleteAssociation](AwsSsmActions.md#deleteassociation)
- [DeleteDocument](AwsSsmActions.md#deletedocument)
- [DeleteInventory](AwsSsmActions.md#deleteinventory)
- [DeleteMaintenanceWindow](AwsSsmActions.md#deletemaintenancewindow)
- [DeleteOpsItem](AwsSsmActions.md#deleteopsitem)
- [DeleteOpsMetadata](AwsSsmActions.md#deleteopsmetadata)
- [DeleteParameter](AwsSsmActions.md#deleteparameter)
- [DeleteParameters](AwsSsmActions.md#deleteparameters)
- [DeletePatchBaseline](AwsSsmActions.md#deletepatchbaseline)
- [DeleteResourceDataSync](AwsSsmActions.md#deleteresourcedatasync)
- [DeleteResourcePolicy](AwsSsmActions.md#deleteresourcepolicy)
- [DeregisterManagedInstance](AwsSsmActions.md#deregistermanagedinstance)
- [DeregisterPatchBaselineForPatchGroup](AwsSsmActions.md#deregisterpatchbaselineforpatchgroup)
- [DeregisterTargetFromMaintenanceWindow](AwsSsmActions.md#deregistertargetfrommaintenancewindow)
- [DeregisterTaskFromMaintenanceWindow](AwsSsmActions.md#deregistertaskfrommaintenancewindow)
- [DescribeActivations](AwsSsmActions.md#describeactivations)
- [DescribeAssociation](AwsSsmActions.md#describeassociation)
- [DescribeAssociationExecutionTargets](AwsSsmActions.md#describeassociationexecutiontargets)
- [DescribeAssociationExecutions](AwsSsmActions.md#describeassociationexecutions)
- [DescribeAutomationExecutions](AwsSsmActions.md#describeautomationexecutions)
- [DescribeAutomationStepExecutions](AwsSsmActions.md#describeautomationstepexecutions)
- [DescribeAvailablePatches](AwsSsmActions.md#describeavailablepatches)
- [DescribeDocument](AwsSsmActions.md#describedocument)
- [DescribeDocumentParameters](AwsSsmActions.md#describedocumentparameters)
- [DescribeDocumentPermission](AwsSsmActions.md#describedocumentpermission)
- [DescribeEffectiveInstanceAssociations](AwsSsmActions.md#describeeffectiveinstanceassociations)
- [DescribeEffectivePatchesForPatchBaseline](AwsSsmActions.md#describeeffectivepatchesforpatchbaseline)
- [DescribeInstanceAssociationsStatus](AwsSsmActions.md#describeinstanceassociationsstatus)
- [DescribeInstanceInformation](AwsSsmActions.md#describeinstanceinformation)
- [DescribeInstancePatchStates](AwsSsmActions.md#describeinstancepatchstates)
- [DescribeInstancePatchStatesForPatchGroup](AwsSsmActions.md#describeinstancepatchstatesforpatchgroup)
- [DescribeInstancePatches](AwsSsmActions.md#describeinstancepatches)
- [DescribeInstanceProperties](AwsSsmActions.md#describeinstanceproperties)
- [DescribeInventoryDeletions](AwsSsmActions.md#describeinventorydeletions)
- [DescribeMaintenanceWindowExecutionTaskInvocations](AwsSsmActions.md#describemaintenancewindowexecutiontaskinvocations)
- [DescribeMaintenanceWindowExecutionTasks](AwsSsmActions.md#describemaintenancewindowexecutiontasks)
- [DescribeMaintenanceWindowExecutions](AwsSsmActions.md#describemaintenancewindowexecutions)
- [DescribeMaintenanceWindowSchedule](AwsSsmActions.md#describemaintenancewindowschedule)
- [DescribeMaintenanceWindowTargets](AwsSsmActions.md#describemaintenancewindowtargets)
- [DescribeMaintenanceWindowTasks](AwsSsmActions.md#describemaintenancewindowtasks)
- [DescribeMaintenanceWindows](AwsSsmActions.md#describemaintenancewindows)
- [DescribeMaintenanceWindowsForTarget](AwsSsmActions.md#describemaintenancewindowsfortarget)
- [DescribeOpsItems](AwsSsmActions.md#describeopsitems)
- [DescribeParameters](AwsSsmActions.md#describeparameters)
- [DescribePatchBaselines](AwsSsmActions.md#describepatchbaselines)
- [DescribePatchGroupState](AwsSsmActions.md#describepatchgroupstate)
- [DescribePatchGroups](AwsSsmActions.md#describepatchgroups)
- [DescribePatchProperties](AwsSsmActions.md#describepatchproperties)
- [DescribeSessions](AwsSsmActions.md#describesessions)
- [DisassociateOpsItemRelatedItem](AwsSsmActions.md#disassociateopsitemrelateditem)
- [GetAutomationExecution](AwsSsmActions.md#getautomationexecution)
- [GetCalendar](AwsSsmActions.md#getcalendar)
- [GetCalendarState](AwsSsmActions.md#getcalendarstate)
- [GetCommandInvocation](AwsSsmActions.md#getcommandinvocation)
- [GetConnectionStatus](AwsSsmActions.md#getconnectionstatus)
- [GetDefaultPatchBaseline](AwsSsmActions.md#getdefaultpatchbaseline)
- [GetDeployablePatchSnapshotForInstance](AwsSsmActions.md#getdeployablepatchsnapshotforinstance)
- [GetDocument](AwsSsmActions.md#getdocument)
- [GetInventory](AwsSsmActions.md#getinventory)
- [GetInventorySchema](AwsSsmActions.md#getinventoryschema)
- [GetMaintenanceWindow](AwsSsmActions.md#getmaintenancewindow)
- [GetMaintenanceWindowExecution](AwsSsmActions.md#getmaintenancewindowexecution)
- [GetMaintenanceWindowExecutionTask](AwsSsmActions.md#getmaintenancewindowexecutiontask)
- [GetMaintenanceWindowExecutionTaskInvocation](AwsSsmActions.md#getmaintenancewindowexecutiontaskinvocation)
- [GetMaintenanceWindowTask](AwsSsmActions.md#getmaintenancewindowtask)
- [GetManifest](AwsSsmActions.md#getmanifest)
- [GetOpsItem](AwsSsmActions.md#getopsitem)
- [GetOpsMetadata](AwsSsmActions.md#getopsmetadata)
- [GetOpsSummary](AwsSsmActions.md#getopssummary)
- [GetParameter](AwsSsmActions.md#getparameter)
- [GetParameterHistory](AwsSsmActions.md#getparameterhistory)
- [GetParameters](AwsSsmActions.md#getparameters)
- [GetParametersByPath](AwsSsmActions.md#getparametersbypath)
- [GetPatchBaseline](AwsSsmActions.md#getpatchbaseline)
- [GetPatchBaselineForPatchGroup](AwsSsmActions.md#getpatchbaselineforpatchgroup)
- [GetResourcePolicies](AwsSsmActions.md#getresourcepolicies)
- [GetServiceSetting](AwsSsmActions.md#getservicesetting)
- [LabelParameterVersion](AwsSsmActions.md#labelparameterversion)
- [ListAssociationVersions](AwsSsmActions.md#listassociationversions)
- [ListAssociations](AwsSsmActions.md#listassociations)
- [ListCommandInvocations](AwsSsmActions.md#listcommandinvocations)
- [ListCommands](AwsSsmActions.md#listcommands)
- [ListComplianceItems](AwsSsmActions.md#listcomplianceitems)
- [ListComplianceSummaries](AwsSsmActions.md#listcompliancesummaries)
- [ListDocumentMetadataHistory](AwsSsmActions.md#listdocumentmetadatahistory)
- [ListDocumentVersions](AwsSsmActions.md#listdocumentversions)
- [ListDocuments](AwsSsmActions.md#listdocuments)
- [ListInstanceAssociations](AwsSsmActions.md#listinstanceassociations)
- [ListInventoryEntries](AwsSsmActions.md#listinventoryentries)
- [ListOpsItemEvents](AwsSsmActions.md#listopsitemevents)
- [ListOpsItemRelatedItems](AwsSsmActions.md#listopsitemrelateditems)
- [ListOpsMetadata](AwsSsmActions.md#listopsmetadata)
- [ListResourceComplianceSummaries](AwsSsmActions.md#listresourcecompliancesummaries)
- [ListResourceDataSync](AwsSsmActions.md#listresourcedatasync)
- [ListTagsForResource](AwsSsmActions.md#listtagsforresource)
- [ModifyDocumentPermission](AwsSsmActions.md#modifydocumentpermission)
- [PutCalendar](AwsSsmActions.md#putcalendar)
- [PutComplianceItems](AwsSsmActions.md#putcomplianceitems)
- [PutConfigurePackageResult](AwsSsmActions.md#putconfigurepackageresult)
- [PutInventory](AwsSsmActions.md#putinventory)
- [PutParameter](AwsSsmActions.md#putparameter)
- [PutResourcePolicy](AwsSsmActions.md#putresourcepolicy)
- [RegisterDefaultPatchBaseline](AwsSsmActions.md#registerdefaultpatchbaseline)
- [RegisterManagedInstance](AwsSsmActions.md#registermanagedinstance)
- [RegisterPatchBaselineForPatchGroup](AwsSsmActions.md#registerpatchbaselineforpatchgroup)
- [RegisterTargetWithMaintenanceWindow](AwsSsmActions.md#registertargetwithmaintenancewindow)
- [RegisterTaskWithMaintenanceWindow](AwsSsmActions.md#registertaskwithmaintenancewindow)
- [RemoveTagsFromResource](AwsSsmActions.md#removetagsfromresource)
- [ResetServiceSetting](AwsSsmActions.md#resetservicesetting)
- [ResumeSession](AwsSsmActions.md#resumesession)
- [SendAutomationSignal](AwsSsmActions.md#sendautomationsignal)
- [SendCommand](AwsSsmActions.md#sendcommand)
- [StartAssociationsOnce](AwsSsmActions.md#startassociationsonce)
- [StartAutomationExecution](AwsSsmActions.md#startautomationexecution)
- [StartChangeRequestExecution](AwsSsmActions.md#startchangerequestexecution)
- [StartSession](AwsSsmActions.md#startsession)
- [StopAutomationExecution](AwsSsmActions.md#stopautomationexecution)
- [TerminateSession](AwsSsmActions.md#terminatesession)
- [UnlabelParameterVersion](AwsSsmActions.md#unlabelparameterversion)
- [UpdateAssociation](AwsSsmActions.md#updateassociation)
- [UpdateAssociationStatus](AwsSsmActions.md#updateassociationstatus)
- [UpdateDocument](AwsSsmActions.md#updatedocument)
- [UpdateDocumentDefaultVersion](AwsSsmActions.md#updatedocumentdefaultversion)
- [UpdateDocumentMetadata](AwsSsmActions.md#updatedocumentmetadata)
- [UpdateInstanceAssociationStatus](AwsSsmActions.md#updateinstanceassociationstatus)
- [UpdateInstanceInformation](AwsSsmActions.md#updateinstanceinformation)
- [UpdateMaintenanceWindow](AwsSsmActions.md#updatemaintenancewindow)
- [UpdateMaintenanceWindowTarget](AwsSsmActions.md#updatemaintenancewindowtarget)
- [UpdateMaintenanceWindowTask](AwsSsmActions.md#updatemaintenancewindowtask)
- [UpdateManagedInstanceRole](AwsSsmActions.md#updatemanagedinstancerole)
- [UpdateOpsItem](AwsSsmActions.md#updateopsitem)
- [UpdateOpsMetadata](AwsSsmActions.md#updateopsmetadata)
- [UpdatePatchBaseline](AwsSsmActions.md#updatepatchbaseline)
- [UpdateResourceDataSync](AwsSsmActions.md#updateresourcedatasync)
- [UpdateServiceSetting](AwsSsmActions.md#updateservicesetting)

## Enumeration Members

### AddTagsToResource

• **AddTagsToResource** = ``"ssm:AddTagsToResource"``

Grants permission to add or overwrite one or more tags for a specified AWS reso
urce

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AddTagsToResource.html

#### Defined in

actions/ssm.ts:18

___

### AssociateOpsItemRelatedItem

• **AssociateOpsItemRelatedItem** = ``"ssm:AssociateOpsItemRelatedItem"``

Grants permission to associate RelatedItem to an OpsItem

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AssociateOpsItemRelatedItem.html

#### Defined in

actions/ssm.ts:24

___

### CancelCommand

• **CancelCommand** = ``"ssm:CancelCommand"``

Grants permission to cancel a specified Run Command command

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelCommand.html

#### Defined in

actions/ssm.ts:30

___

### CancelMaintenanceWindowExecution

• **CancelMaintenanceWindowExecution** = ``"ssm:CancelMaintenanceWindowExecution"``

Grants permission to cancel an in-progress maintenance window execution

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelMaintenanceWindowExecution.html

#### Defined in

actions/ssm.ts:36

___

### CreateActivation

• **CreateActivation** = ``"ssm:CreateActivation"``

Grants permission to create an activation that is used to register on-premises
servers and virtual machines (VMs) with Systems Manager

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateActivation.html

#### Defined in

actions/ssm.ts:43

___

### CreateAssociation

• **CreateAssociation** = ``"ssm:CreateAssociation"``

Grants permission to associate a specified Systems Manager document with specif
ied instances or other targets

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociation.html

#### Defined in

actions/ssm.ts:50

___

### CreateAssociationBatch

• **CreateAssociationBatch** = ``"ssm:CreateAssociationBatch"``

Grants permission to combine entries for multiple CreateAssociation operations
in a single command

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociationBatch.html

#### Defined in

actions/ssm.ts:57

___

### CreateDocument

• **CreateDocument** = ``"ssm:CreateDocument"``

Grants permission to create a Systems Manager SSM document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateDocument.html

#### Defined in

actions/ssm.ts:63

___

### CreateMaintenanceWindow

• **CreateMaintenanceWindow** = ``"ssm:CreateMaintenanceWindow"``

Grants permission to create a maintenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateMaintenanceWindow.html

#### Defined in

actions/ssm.ts:69

___

### CreateOpsItem

• **CreateOpsItem** = ``"ssm:CreateOpsItem"``

Grants permission to create an OpsItem in OpsCenter

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsItem.html

#### Defined in

actions/ssm.ts:75

___

### CreateOpsMetadata

• **CreateOpsMetadata** = ``"ssm:CreateOpsMetadata"``

Grants permission to create an OpsMetadata object for an AWS resource

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsMetadata.html

#### Defined in

actions/ssm.ts:81

___

### CreatePatchBaseline

• **CreatePatchBaseline** = ``"ssm:CreatePatchBaseline"``

Grants permission to create a patch baseline

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline.html

#### Defined in

actions/ssm.ts:87

___

### CreateResourceDataSync

• **CreateResourceDataSync** = ``"ssm:CreateResourceDataSync"``

Grants permission to create a resource data sync configuration, which regularly
collects inventory data from managed instances and updates the data in an Amazo
n S3 bucket

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateResourceDataSync.html

#### Defined in

actions/ssm.ts:95

___

### DeleteActivation

• **DeleteActivation** = ``"ssm:DeleteActivation"``

Grants permission to delete a specified activation for managed instances

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteActivation.html

#### Defined in

actions/ssm.ts:101

___

### DeleteAssociation

• **DeleteAssociation** = ``"ssm:DeleteAssociation"``

Grants permission to disassociate a specified SSM document from a specified ins
tance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteAssociation.html

#### Defined in

actions/ssm.ts:108

___

### DeleteDocument

• **DeleteDocument** = ``"ssm:DeleteDocument"``

Grants permission to delete a specified SSM document and its instance associati
ons

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteDocument.html

#### Defined in

actions/ssm.ts:115

___

### DeleteInventory

• **DeleteInventory** = ``"ssm:DeleteInventory"``

Grants permission to delete a specified custom inventory type, or the data asso
ciated with a custom inventory type

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteInventory.html

#### Defined in

actions/ssm.ts:122

___

### DeleteMaintenanceWindow

• **DeleteMaintenanceWindow** = ``"ssm:DeleteMaintenanceWindow"``

Grants permission to delete a specified maintenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteMaintenanceWindow.html

#### Defined in

actions/ssm.ts:128

___

### DeleteOpsItem

• **DeleteOpsItem** = ``"ssm:DeleteOpsItem"``

Grants permission to delete an OpsItem

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteOpsItem.html

#### Defined in

actions/ssm.ts:134

___

### DeleteOpsMetadata

• **DeleteOpsMetadata** = ``"ssm:DeleteOpsMetadata"``

Grants permission to delete an OpsMetadata object

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteOpsMetadata.html

#### Defined in

actions/ssm.ts:140

___

### DeleteParameter

• **DeleteParameter** = ``"ssm:DeleteParameter"``

Grants permission to delete a specified SSM parameter

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameter.html

#### Defined in

actions/ssm.ts:146

___

### DeleteParameters

• **DeleteParameters** = ``"ssm:DeleteParameters"``

Grants permission to delete multiple specified SSM parameters

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameters.html

#### Defined in

actions/ssm.ts:152

___

### DeletePatchBaseline

• **DeletePatchBaseline** = ``"ssm:DeletePatchBaseline"``

Grants permission to delete a specified patch baseline

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeletePatchBaseline.html

#### Defined in

actions/ssm.ts:158

___

### DeleteResourceDataSync

• **DeleteResourceDataSync** = ``"ssm:DeleteResourceDataSync"``

Grants permission to delete a specified resource data sync

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteResourceDataSync.html

#### Defined in

actions/ssm.ts:164

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"ssm:DeleteResourcePolicy"``

Grants permission to delete a Systems Manager resource policy

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/ssm.ts:170

___

### DeregisterManagedInstance

• **DeregisterManagedInstance** = ``"ssm:DeregisterManagedInstance"``

Grants permission to deregister a specified on-premises server or virtual machi
ne (VM) from Systems Manager

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterManagedInstance.html

#### Defined in

actions/ssm.ts:177

___

### DeregisterPatchBaselineForPatchGroup

• **DeregisterPatchBaselineForPatchGroup** = ``"ssm:DeregisterPatchBaselineForPatchGroup"``

Grants permission to deregister a specified patch baseline from being the defau
lt patch baseline for a specified patch group

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterPatchBaselineForPatchGroup.html

#### Defined in

actions/ssm.ts:184

___

### DeregisterTargetFromMaintenanceWindow

• **DeregisterTargetFromMaintenanceWindow** = ``"ssm:DeregisterTargetFromMaintenanceWindow"``

Grants permission to deregister a specified target from a maintenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTargetFromMaintenanceWindow.html

#### Defined in

actions/ssm.ts:190

___

### DeregisterTaskFromMaintenanceWindow

• **DeregisterTaskFromMaintenanceWindow** = ``"ssm:DeregisterTaskFromMaintenanceWindow"``

Grants permission to deregister a specified task from a maintenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTaskFromMaintenanceWindow.html

#### Defined in

actions/ssm.ts:196

___

### DescribeActivations

• **DescribeActivations** = ``"ssm:DescribeActivations"``

Grants permission to view details about a specified managed instance activation
, such as when it was created and the number of instances registered using the
activation

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeActivations.html

#### Defined in

actions/ssm.ts:204

___

### DescribeAssociation

• **DescribeAssociation** = ``"ssm:DescribeAssociation"``

Grants permission to view details about the specified association for a specifi
ed instance or target

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociation.html

#### Defined in

actions/ssm.ts:211

___

### DescribeAssociationExecutionTargets

• **DescribeAssociationExecutionTargets** = ``"ssm:DescribeAssociationExecutionTargets"``

Grants permission to view information about a specified association execution

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutionTargets.html

#### Defined in

actions/ssm.ts:217

___

### DescribeAssociationExecutions

• **DescribeAssociationExecutions** = ``"ssm:DescribeAssociationExecutions"``

Grants permission to view all executions for a specified association

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutions.html

#### Defined in

actions/ssm.ts:223

___

### DescribeAutomationExecutions

• **DescribeAutomationExecutions** = ``"ssm:DescribeAutomationExecutions"``

Grants permission to view details about all active and terminated Automation ex
ecutions

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationExecutions.html

#### Defined in

actions/ssm.ts:230

___

### DescribeAutomationStepExecutions

• **DescribeAutomationStepExecutions** = ``"ssm:DescribeAutomationStepExecutions"``

Grants permission to view information about all active and terminated step exec
utions in an Automation workflow

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationStepExecutions.html

#### Defined in

actions/ssm.ts:237

___

### DescribeAvailablePatches

• **DescribeAvailablePatches** = ``"ssm:DescribeAvailablePatches"``

Grants permission to view all patches eligible to include in a patch baseline

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAvailablePatches.html

#### Defined in

actions/ssm.ts:243

___

### DescribeDocument

• **DescribeDocument** = ``"ssm:DescribeDocument"``

Grants permission to view details about a specified SSM document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocument.html

#### Defined in

actions/ssm.ts:249

___

### DescribeDocumentParameters

• **DescribeDocumentParameters** = ``"ssm:DescribeDocumentParameters"``

Grants permission to display information about SSM document parameters in the S
ystems Manager console (internal Systems Manager action)

See https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html

#### Defined in

actions/ssm.ts:256

___

### DescribeDocumentPermission

• **DescribeDocumentPermission** = ``"ssm:DescribeDocumentPermission"``

Grants permission to view the permissions for a specified SSM document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocumentPermission.html

#### Defined in

actions/ssm.ts:262

___

### DescribeEffectiveInstanceAssociations

• **DescribeEffectiveInstanceAssociations** = ``"ssm:DescribeEffectiveInstanceAssociations"``

Grants permission to view all current associations for a specified instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectiveInstanceAssociations.html

#### Defined in

actions/ssm.ts:268

___

### DescribeEffectivePatchesForPatchBaseline

• **DescribeEffectivePatchesForPatchBaseline** = ``"ssm:DescribeEffectivePatchesForPatchBaseline"``

Grants permission to view details about the patches currently associated with t
he specified patch baseline (Windows only)

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectivePatchesForPatchBaseline.html

#### Defined in

actions/ssm.ts:275

___

### DescribeInstanceAssociationsStatus

• **DescribeInstanceAssociationsStatus** = ``"ssm:DescribeInstanceAssociationsStatus"``

Grants permission to view the status of the associations for a specified instan
ce

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceAssociationsStatus.html

#### Defined in

actions/ssm.ts:282

___

### DescribeInstanceInformation

• **DescribeInstanceInformation** = ``"ssm:DescribeInstanceInformation"``

Grants permission to view details about a specified instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceInformation.html

#### Defined in

actions/ssm.ts:288

___

### DescribeInstancePatchStates

• **DescribeInstancePatchStates** = ``"ssm:DescribeInstancePatchStates"``

Grants permission to view status details about patches on a specified instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStates.html

#### Defined in

actions/ssm.ts:294

___

### DescribeInstancePatchStatesForPatchGroup

• **DescribeInstancePatchStatesForPatchGroup** = ``"ssm:DescribeInstancePatchStatesForPatchGroup"``

Grants permission to describe the high-level patch state for the instances in t
he specified patch group

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStatesForPatchGroup.html

#### Defined in

actions/ssm.ts:301

___

### DescribeInstancePatches

• **DescribeInstancePatches** = ``"ssm:DescribeInstancePatches"``

Grants permission to view general details about the patches on a specified inst
ance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatches.html

#### Defined in

actions/ssm.ts:308

___

### DescribeInstanceProperties

• **DescribeInstanceProperties** = ``"ssm:DescribeInstanceProperties"``

Grants permission to user's Amazon EC2 console to render managed instances' nod
es

See https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html

#### Defined in

actions/ssm.ts:315

___

### DescribeInventoryDeletions

• **DescribeInventoryDeletions** = ``"ssm:DescribeInventoryDeletions"``

Grants permission to view details about a specified inventory deletion

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInventoryDeletions.html

#### Defined in

actions/ssm.ts:321

___

### DescribeMaintenanceWindowExecutionTaskInvocations

• **DescribeMaintenanceWindowExecutionTaskInvocations** = ``"ssm:DescribeMaintenanceWindowExecutionTaskInvocations"``

Grants permission to view details of a specified task execution for a maintenan
ce window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTaskInvocations.html

#### Defined in

actions/ssm.ts:328

___

### DescribeMaintenanceWindowExecutionTasks

• **DescribeMaintenanceWindowExecutionTasks** = ``"ssm:DescribeMaintenanceWindowExecutionTasks"``

Grants permission to view details about the tasks that ran during a specified m
aintenance window execution

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTasks.html

#### Defined in

actions/ssm.ts:335

___

### DescribeMaintenanceWindowExecutions

• **DescribeMaintenanceWindowExecutions** = ``"ssm:DescribeMaintenanceWindowExecutions"``

Grants permission to view the executions of a specified maintenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutions.html

#### Defined in

actions/ssm.ts:341

___

### DescribeMaintenanceWindowSchedule

• **DescribeMaintenanceWindowSchedule** = ``"ssm:DescribeMaintenanceWindowSchedule"``

Grants permission to view details about upcoming executions of a specified main
tenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowSchedule.html

#### Defined in

actions/ssm.ts:348

___

### DescribeMaintenanceWindowTargets

• **DescribeMaintenanceWindowTargets** = ``"ssm:DescribeMaintenanceWindowTargets"``

Grants permission to view a list of the targets associated with a specified mai
ntenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTargets.html

#### Defined in

actions/ssm.ts:355

___

### DescribeMaintenanceWindowTasks

• **DescribeMaintenanceWindowTasks** = ``"ssm:DescribeMaintenanceWindowTasks"``

Grants permission to view a list of the tasks associated with a specified maint
enance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTasks.html

#### Defined in

actions/ssm.ts:362

___

### DescribeMaintenanceWindows

• **DescribeMaintenanceWindows** = ``"ssm:DescribeMaintenanceWindows"``

Grants permission to view information about all or specified maintenance window
s

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindows.html

#### Defined in

actions/ssm.ts:369

___

### DescribeMaintenanceWindowsForTarget

• **DescribeMaintenanceWindowsForTarget** = ``"ssm:DescribeMaintenanceWindowsForTarget"``

Grants permission to view information about the maintenance window targets and
tasks associated with a specified instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowsForTarget.html

#### Defined in

actions/ssm.ts:376

___

### DescribeOpsItems

• **DescribeOpsItems** = ``"ssm:DescribeOpsItems"``

Grants permission to view details about specified OpsItems

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeOpsItems.html

#### Defined in

actions/ssm.ts:382

___

### DescribeParameters

• **DescribeParameters** = ``"ssm:DescribeParameters"``

Grants permission to view details about a specified SSM parameter

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters.html

#### Defined in

actions/ssm.ts:388

___

### DescribePatchBaselines

• **DescribePatchBaselines** = ``"ssm:DescribePatchBaselines"``

Grants permission to view information about patch baselines that meet the speci
fied criteria

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchBaselines.html

#### Defined in

actions/ssm.ts:395

___

### DescribePatchGroupState

• **DescribePatchGroupState** = ``"ssm:DescribePatchGroupState"``

Grants permission to view aggregated status details for patches for a specified
patch group

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroupState.html

#### Defined in

actions/ssm.ts:402

___

### DescribePatchGroups

• **DescribePatchGroups** = ``"ssm:DescribePatchGroups"``

Grants permission to view information about the patch baseline for a specified
patch group

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroups.html

#### Defined in

actions/ssm.ts:409

___

### DescribePatchProperties

• **DescribePatchProperties** = ``"ssm:DescribePatchProperties"``

Grants permission to view details of available patches for a specified operatin
g system and patch property

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html

#### Defined in

actions/ssm.ts:416

___

### DescribeSessions

• **DescribeSessions** = ``"ssm:DescribeSessions"``

Grants permission to view a list of recent Session Manager sessions that meet t
he specified search criteria

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeSessions.html

#### Defined in

actions/ssm.ts:423

___

### DisassociateOpsItemRelatedItem

• **DisassociateOpsItemRelatedItem** = ``"ssm:DisassociateOpsItemRelatedItem"``

Grants permission to disassociate RelatedItem from an OpsItem

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DisassociateOpsItemRelatedItem.html

#### Defined in

actions/ssm.ts:429

___

### GetAutomationExecution

• **GetAutomationExecution** = ``"ssm:GetAutomationExecution"``

Grants permission to view details of a specified Automation execution

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AutomationExecution.html

#### Defined in

actions/ssm.ts:435

___

### GetCalendar

• **GetCalendar** = ``"ssm:GetCalendar"``

Grants permission to view details of a specific calendar

See https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar-prereqs.html

#### Defined in

actions/ssm.ts:441

___

### GetCalendarState

• **GetCalendarState** = ``"ssm:GetCalendarState"``

Grants permission to view the calendar state for a change calendar or a list of
change calendars

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCalendarState.html

#### Defined in

actions/ssm.ts:448

___

### GetCommandInvocation

• **GetCommandInvocation** = ``"ssm:GetCommandInvocation"``

Grants permission to view details about the command execution of a specified in
vocation or plugin

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCommandInvocation.html

#### Defined in

actions/ssm.ts:455

___

### GetConnectionStatus

• **GetConnectionStatus** = ``"ssm:GetConnectionStatus"``

Grants permission to view the Session Manager connection status for a specified
managed instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetConnectionStatus.html

#### Defined in

actions/ssm.ts:462

___

### GetDefaultPatchBaseline

• **GetDefaultPatchBaseline** = ``"ssm:GetDefaultPatchBaseline"``

Grants permission to view the current default patch baseline for a specified op
erating system type

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDefaultPatchBaseline.html

#### Defined in

actions/ssm.ts:469

___

### GetDeployablePatchSnapshotForInstance

• **GetDeployablePatchSnapshotForInstance** = ``"ssm:GetDeployablePatchSnapshotForInstance"``

Grants permission to retrieve the current patch baseline snapshot for a specifi
ed instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDeployablePatchSnapshotForInstance.html

#### Defined in

actions/ssm.ts:476

___

### GetDocument

• **GetDocument** = ``"ssm:GetDocument"``

Grants permission to view the contents of a specified SSM document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDocument.html

#### Defined in

actions/ssm.ts:482

___

### GetInventory

• **GetInventory** = ``"ssm:GetInventory"``

Grants permission to view instance inventory details per the specified criteria

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventory.html

#### Defined in

actions/ssm.ts:488

___

### GetInventorySchema

• **GetInventorySchema** = ``"ssm:GetInventorySchema"``

Grants permission to view a list of inventory types or attribute names for a sp
ecified inventory item type

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventorySchema.html

#### Defined in

actions/ssm.ts:495

___

### GetMaintenanceWindow

• **GetMaintenanceWindow** = ``"ssm:GetMaintenanceWindow"``

Grants permission to view details about a specified maintenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindow.html

#### Defined in

actions/ssm.ts:501

___

### GetMaintenanceWindowExecution

• **GetMaintenanceWindowExecution** = ``"ssm:GetMaintenanceWindowExecution"``

Grants permission to view details about a specified maintenance window executio
n

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecution.html

#### Defined in

actions/ssm.ts:508

___

### GetMaintenanceWindowExecutionTask

• **GetMaintenanceWindowExecutionTask** = ``"ssm:GetMaintenanceWindowExecutionTask"``

Grants permission to view details about a specified maintenance window executio
n task

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTask.html

#### Defined in

actions/ssm.ts:515

___

### GetMaintenanceWindowExecutionTaskInvocation

• **GetMaintenanceWindowExecutionTaskInvocation** = ``"ssm:GetMaintenanceWindowExecutionTaskInvocation"``

Grants permission to view details about a specific maintenance window task runn
ing on a specific target

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTaskInvocation.html

#### Defined in

actions/ssm.ts:522

___

### GetMaintenanceWindowTask

• **GetMaintenanceWindowTask** = ``"ssm:GetMaintenanceWindowTask"``

Grants permission to view details about tasks registered with a specified maint
enance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowTask.html

#### Defined in

actions/ssm.ts:529

___

### GetManifest

• **GetManifest** = ``"ssm:GetManifest"``

Grants permission to Systems Manager and SSM Agent to determine package install
ation requirements for an instance (internal Systems Manager call)

See https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html

#### Defined in

actions/ssm.ts:536

___

### GetOpsItem

• **GetOpsItem** = ``"ssm:GetOpsItem"``

Grants permission to view information about a specified OpsItem

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsItem.html

#### Defined in

actions/ssm.ts:542

___

### GetOpsMetadata

• **GetOpsMetadata** = ``"ssm:GetOpsMetadata"``

Grants permission to retrieve an OpsMetadata object

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsMetadata.html

#### Defined in

actions/ssm.ts:548

___

### GetOpsSummary

• **GetOpsSummary** = ``"ssm:GetOpsSummary"``

Grants permission to view summary information about OpsItems based on specified
filters and aggregators

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsSummary.html

#### Defined in

actions/ssm.ts:555

___

### GetParameter

• **GetParameter** = ``"ssm:GetParameter"``

Grants permission to view information about a specified parameter

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html

#### Defined in

actions/ssm.ts:561

___

### GetParameterHistory

• **GetParameterHistory** = ``"ssm:GetParameterHistory"``

Grants permission to view details and changes for a specified parameter

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameterHistory.html

#### Defined in

actions/ssm.ts:567

___

### GetParameters

• **GetParameters** = ``"ssm:GetParameters"``

Grants permission to view information about multiple specified parameters

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameters.html

#### Defined in

actions/ssm.ts:573

___

### GetParametersByPath

• **GetParametersByPath** = ``"ssm:GetParametersByPath"``

Grants permission to view information about parameters in a specified hierarchy

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath.html

#### Defined in

actions/ssm.ts:579

___

### GetPatchBaseline

• **GetPatchBaseline** = ``"ssm:GetPatchBaseline"``

Grants permission to view information about a specified patch baseline

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaseline.html

#### Defined in

actions/ssm.ts:585

___

### GetPatchBaselineForPatchGroup

• **GetPatchBaselineForPatchGroup** = ``"ssm:GetPatchBaselineForPatchGroup"``

Grants permission to view the ID of the current patch baseline for a specified
patch group

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaselineForPatchGroup.html

#### Defined in

actions/ssm.ts:592

___

### GetResourcePolicies

• **GetResourcePolicies** = ``"ssm:GetResourcePolicies"``

Grants permission to retrieve lists of Systems Manager resource policies

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetResourcePolicies.html

#### Defined in

actions/ssm.ts:598

___

### GetServiceSetting

• **GetServiceSetting** = ``"ssm:GetServiceSetting"``

Grants permission to view the account-level setting for an AWS service

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetServiceSetting.html

#### Defined in

actions/ssm.ts:604

___

### LabelParameterVersion

• **LabelParameterVersion** = ``"ssm:LabelParameterVersion"``

Grants permission to apply an identifying label to a specified version of a par
ameter

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_LabelParameterVersion.html

#### Defined in

actions/ssm.ts:611

___

### ListAssociationVersions

• **ListAssociationVersions** = ``"ssm:ListAssociationVersions"``

Grants permission to list versions of the specified association

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociationVersions.html

#### Defined in

actions/ssm.ts:617

___

### ListAssociations

• **ListAssociations** = ``"ssm:ListAssociations"``

Grants permission to list the associations for a specified SSM document or mana
ged instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociations.html

#### Defined in

actions/ssm.ts:624

___

### ListCommandInvocations

• **ListCommandInvocations** = ``"ssm:ListCommandInvocations"``

Grants permission to list information about command invocations sent to a speci
fied instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommandInvocations.html

#### Defined in

actions/ssm.ts:631

___

### ListCommands

• **ListCommands** = ``"ssm:ListCommands"``

Grants permission to list the commands sent to a specified instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommands.html

#### Defined in

actions/ssm.ts:637

___

### ListComplianceItems

• **ListComplianceItems** = ``"ssm:ListComplianceItems"``

Grants permission to list compliance status for specified resource types on a s
pecified resource

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceItems.html

#### Defined in

actions/ssm.ts:644

___

### ListComplianceSummaries

• **ListComplianceSummaries** = ``"ssm:ListComplianceSummaries"``

Grants permission to list a summary count of compliant and noncompliant resourc
es for a specified compliance type

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceSummaries.html

#### Defined in

actions/ssm.ts:651

___

### ListDocumentMetadataHistory

• **ListDocumentMetadataHistory** = ``"ssm:ListDocumentMetadataHistory"``

Grants permission to view metadata history about a specified SSM document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentMetadataHistory.html

#### Defined in

actions/ssm.ts:657

___

### ListDocumentVersions

• **ListDocumentVersions** = ``"ssm:ListDocumentVersions"``

Grants permission to list all versions of a specified document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentVersions.html

#### Defined in

actions/ssm.ts:663

___

### ListDocuments

• **ListDocuments** = ``"ssm:ListDocuments"``

Grants permission to view information about a specified SSM document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocuments.html

#### Defined in

actions/ssm.ts:669

___

### ListInstanceAssociations

• **ListInstanceAssociations** = ``"ssm:ListInstanceAssociations"``

Grants permission to SSM Agent to check for new State Manager associations (int
ernal Systems Manager call)

See https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html

#### Defined in

actions/ssm.ts:676

___

### ListInventoryEntries

• **ListInventoryEntries** = ``"ssm:ListInventoryEntries"``

Grants permission to view a list of specified inventory types for a specified i
nstance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListInventoryEntries.html

#### Defined in

actions/ssm.ts:683

___

### ListOpsItemEvents

• **ListOpsItemEvents** = ``"ssm:ListOpsItemEvents"``

Grants permission to view details about OpsItemEvents

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsItemEvents.html

#### Defined in

actions/ssm.ts:689

___

### ListOpsItemRelatedItems

• **ListOpsItemRelatedItems** = ``"ssm:ListOpsItemRelatedItems"``

Grants permission to view details about OpsItem RelatedItems

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsItemRelatedItems.html

#### Defined in

actions/ssm.ts:695

___

### ListOpsMetadata

• **ListOpsMetadata** = ``"ssm:ListOpsMetadata"``

Grants permission to view a list of OpsMetadata objects

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsMetadata.html

#### Defined in

actions/ssm.ts:701

___

### ListResourceComplianceSummaries

• **ListResourceComplianceSummaries** = ``"ssm:ListResourceComplianceSummaries"``

Grants permission to list resource-level summary count

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceComplianceSummaries.html

#### Defined in

actions/ssm.ts:707

___

### ListResourceDataSync

• **ListResourceDataSync** = ``"ssm:ListResourceDataSync"``

Grants permission to list information about resource data sync configurations i
n an account

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceDataSync.html

#### Defined in

actions/ssm.ts:714

___

### ListTagsForResource

• **ListTagsForResource** = ``"ssm:ListTagsForResource"``

Grants permission to view a list of resource tags for a specified resource

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/ssm.ts:720

___

### ModifyDocumentPermission

• **ModifyDocumentPermission** = ``"ssm:ModifyDocumentPermission"``

Grants permission to share a custom SSM document publicly or privately with spe
cified AWS accounts

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ModifyDocumentPermission.html

#### Defined in

actions/ssm.ts:727

___

### PutCalendar

• **PutCalendar** = ``"ssm:PutCalendar"``

Grants permission to create/edit a specific calendar

See https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar-prereqs.html

#### Defined in

actions/ssm.ts:733

___

### PutComplianceItems

• **PutComplianceItems** = ``"ssm:PutComplianceItems"``

Grants permission to register a compliance type and other compliance details on
a specified resource

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutComplianceItems.html

#### Defined in

actions/ssm.ts:740

___

### PutConfigurePackageResult

• **PutConfigurePackageResult** = ``"ssm:PutConfigurePackageResult"``

Grants permission to SSM Agent to generate a report of the results of specific
agent requests (internal Systems Manager call)

See https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html

#### Defined in

actions/ssm.ts:747

___

### PutInventory

• **PutInventory** = ``"ssm:PutInventory"``

Grants permission to add or update inventory items on multiple specified manage
d instances

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutInventory.html

#### Defined in

actions/ssm.ts:754

___

### PutParameter

• **PutParameter** = ``"ssm:PutParameter"``

Grants permission to create an SSM parameter

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html

#### Defined in

actions/ssm.ts:760

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"ssm:PutResourcePolicy"``

Grants permission to create or update a Systems Manager resource policy

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/ssm.ts:766

___

### RegisterDefaultPatchBaseline

• **RegisterDefaultPatchBaseline** = ``"ssm:RegisterDefaultPatchBaseline"``

Grants permission to specify the default patch baseline for an operating system
type

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterDefaultPatchBaseline.html

#### Defined in

actions/ssm.ts:773

___

### RegisterManagedInstance

• **RegisterManagedInstance** = ``"ssm:RegisterManagedInstance"``

Grants permission to register a Systems Manager Agent

See https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html

#### Defined in

actions/ssm.ts:779

___

### RegisterPatchBaselineForPatchGroup

• **RegisterPatchBaselineForPatchGroup** = ``"ssm:RegisterPatchBaselineForPatchGroup"``

Grants permission to specify the default patch baseline for a specified patch g
roup

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterPatchBaselineForPatchGroup.html

#### Defined in

actions/ssm.ts:786

___

### RegisterTargetWithMaintenanceWindow

• **RegisterTargetWithMaintenanceWindow** = ``"ssm:RegisterTargetWithMaintenanceWindow"``

Grants permission to register a target with a specified maintenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTargetWithMaintenanceWindow.html

#### Defined in

actions/ssm.ts:792

___

### RegisterTaskWithMaintenanceWindow

• **RegisterTaskWithMaintenanceWindow** = ``"ssm:RegisterTaskWithMaintenanceWindow"``

Grants permission to register a task with a specified maintenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTaskWithMaintenanceWindow.html

#### Defined in

actions/ssm.ts:798

___

### RemoveTagsFromResource

• **RemoveTagsFromResource** = ``"ssm:RemoveTagsFromResource"``

Grants permission to remove a specified tag key from a specified resource

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RemoveTagsFromResource.html

#### Defined in

actions/ssm.ts:804

___

### ResetServiceSetting

• **ResetServiceSetting** = ``"ssm:ResetServiceSetting"``

Grants permission to reset the service setting for an AWS account to the defaul
t value

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResetServiceSetting.html

#### Defined in

actions/ssm.ts:811

___

### ResumeSession

• **ResumeSession** = ``"ssm:ResumeSession"``

Grants permission to reconnect a Session Manager session to a managed instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResumeSession.html

#### Defined in

actions/ssm.ts:817

___

### SendAutomationSignal

• **SendAutomationSignal** = ``"ssm:SendAutomationSignal"``

Grants permission to send a signal to change the current behavior or status of
a specified Automation execution

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendAutomationSignal.html

#### Defined in

actions/ssm.ts:824

___

### SendCommand

• **SendCommand** = ``"ssm:SendCommand"``

Grants permission to run commands on one or more specified managed instances

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand.html

#### Defined in

actions/ssm.ts:830

___

### StartAssociationsOnce

• **StartAssociationsOnce** = ``"ssm:StartAssociationsOnce"``

Grants permission to run a specified association manually

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAssociationsOnce.html

#### Defined in

actions/ssm.ts:836

___

### StartAutomationExecution

• **StartAutomationExecution** = ``"ssm:StartAutomationExecution"``

Grants permission to initiate the execution of an Automation document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAutomationExecution.html

#### Defined in

actions/ssm.ts:842

___

### StartChangeRequestExecution

• **StartChangeRequestExecution** = ``"ssm:StartChangeRequestExecution"``

Grants permission to initiate the execution of an Automation Change Template do
cument

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartChangeRequestExecution.html

#### Defined in

actions/ssm.ts:849

___

### StartSession

• **StartSession** = ``"ssm:StartSession"``

Grants permission to initiate a connection to a specified target for a Session
Manager session

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartSession.html

#### Defined in

actions/ssm.ts:856

___

### StopAutomationExecution

• **StopAutomationExecution** = ``"ssm:StopAutomationExecution"``

Grants permission to stop a specified Automation execution that is already in p
rogress

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StopAutomationExecution.html

#### Defined in

actions/ssm.ts:863

___

### TerminateSession

• **TerminateSession** = ``"ssm:TerminateSession"``

Grants permission to permanently end a Session Manager connection to an instanc
e

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_TerminateSession.html

#### Defined in

actions/ssm.ts:870

___

### UnlabelParameterVersion

• **UnlabelParameterVersion** = ``"ssm:UnlabelParameterVersion"``

Grants permission to remove an identifying label from a specified version of a
parameter

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UnlabelParameterVersion.html

#### Defined in

actions/ssm.ts:877

___

### UpdateAssociation

• **UpdateAssociation** = ``"ssm:UpdateAssociation"``

Grants permission to update an association and immediately run the association
on the specified targets

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociation.html

#### Defined in

actions/ssm.ts:884

___

### UpdateAssociationStatus

• **UpdateAssociationStatus** = ``"ssm:UpdateAssociationStatus"``

Grants permission to update the status of the SSM document associated with a sp
ecified instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociationStatus.html

#### Defined in

actions/ssm.ts:891

___

### UpdateDocument

• **UpdateDocument** = ``"ssm:UpdateDocument"``

Grants permission to update one or more values for an SSM document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocument.html

#### Defined in

actions/ssm.ts:897

___

### UpdateDocumentDefaultVersion

• **UpdateDocumentDefaultVersion** = ``"ssm:UpdateDocumentDefaultVersion"``

Grants permission to change the default version of an SSM document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentDefaultVersion.html

#### Defined in

actions/ssm.ts:903

___

### UpdateDocumentMetadata

• **UpdateDocumentMetadata** = ``"ssm:UpdateDocumentMetadata"``

Grants permission to update the metadata of an SSM document

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentMetadata.html

#### Defined in

actions/ssm.ts:909

___

### UpdateInstanceAssociationStatus

• **UpdateInstanceAssociationStatus** = ``"ssm:UpdateInstanceAssociationStatus"``

Grants permission to SSM Agent to update the status of the association that it
is currently running (internal Systems Manager call)

See https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html

#### Defined in

actions/ssm.ts:916

___

### UpdateInstanceInformation

• **UpdateInstanceInformation** = ``"ssm:UpdateInstanceInformation"``

Grants permission to SSM Agent to send a heartbeat signal to the Systems Manage
r service in the cloud

See https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html

#### Defined in

actions/ssm.ts:923

___

### UpdateMaintenanceWindow

• **UpdateMaintenanceWindow** = ``"ssm:UpdateMaintenanceWindow"``

Grants permission to update a specified maintenance window

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindow.html

#### Defined in

actions/ssm.ts:929

___

### UpdateMaintenanceWindowTarget

• **UpdateMaintenanceWindowTarget** = ``"ssm:UpdateMaintenanceWindowTarget"``

Grants permission to update a specified maintenance window target

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTarget.html

#### Defined in

actions/ssm.ts:935

___

### UpdateMaintenanceWindowTask

• **UpdateMaintenanceWindowTask** = ``"ssm:UpdateMaintenanceWindowTask"``

Grants permission to update a specified maintenance window task

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTask.html

#### Defined in

actions/ssm.ts:941

___

### UpdateManagedInstanceRole

• **UpdateManagedInstanceRole** = ``"ssm:UpdateManagedInstanceRole"``

Grants permission to assign or change the IAM role assigned to a specified mana
ged instance

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateManagedInstanceRole.html

#### Defined in

actions/ssm.ts:948

___

### UpdateOpsItem

• **UpdateOpsItem** = ``"ssm:UpdateOpsItem"``

Grants permission to edit or change an OpsItem

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsItem.html

#### Defined in

actions/ssm.ts:954

___

### UpdateOpsMetadata

• **UpdateOpsMetadata** = ``"ssm:UpdateOpsMetadata"``

Grants permission to update an OpsMetadata object

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsMetadata.html

#### Defined in

actions/ssm.ts:960

___

### UpdatePatchBaseline

• **UpdatePatchBaseline** = ``"ssm:UpdatePatchBaseline"``

Grants permission to update a specified patch baseline

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdatePatchBaseline.html

#### Defined in

actions/ssm.ts:966

___

### UpdateResourceDataSync

• **UpdateResourceDataSync** = ``"ssm:UpdateResourceDataSync"``

Grants permission to update a resource data sync

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateResourceDataSync.html

#### Defined in

actions/ssm.ts:972

___

### UpdateServiceSetting

• **UpdateServiceSetting** = ``"ssm:UpdateServiceSetting"``

Grants permission to update the service setting for an AWS account

See https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateServiceSetting.html

#### Defined in

actions/ssm.ts:978
