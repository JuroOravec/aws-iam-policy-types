[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsFsxActions

# Enumeration: AwsFsxActions

All IAM policy actions for Amazon FSx (FSX)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfsx.html

2024-02-12T09:57:29.373Z

## Table of contents

### Enumeration Members

- [AssociateFileGateway](AwsFsxActions.md#associatefilegateway)
- [AssociateFileSystemAliases](AwsFsxActions.md#associatefilesystemaliases)
- [BypassSnaplockEnterpriseRetention](AwsFsxActions.md#bypasssnaplockenterpriseretention)
- [CancelDataRepositoryTask](AwsFsxActions.md#canceldatarepositorytask)
- [CopyBackup](AwsFsxActions.md#copybackup)
- [CopySnapshotAndUpdateVolume](AwsFsxActions.md#copysnapshotandupdatevolume)
- [CreateBackup](AwsFsxActions.md#createbackup)
- [CreateDataRepositoryAssociation](AwsFsxActions.md#createdatarepositoryassociation)
- [CreateDataRepositoryTask](AwsFsxActions.md#createdatarepositorytask)
- [CreateFileCache](AwsFsxActions.md#createfilecache)
- [CreateFileSystem](AwsFsxActions.md#createfilesystem)
- [CreateFileSystemFromBackup](AwsFsxActions.md#createfilesystemfrombackup)
- [CreateSnapshot](AwsFsxActions.md#createsnapshot)
- [CreateStorageVirtualMachine](AwsFsxActions.md#createstoragevirtualmachine)
- [CreateVolume](AwsFsxActions.md#createvolume)
- [CreateVolumeFromBackup](AwsFsxActions.md#createvolumefrombackup)
- [DeleteBackup](AwsFsxActions.md#deletebackup)
- [DeleteDataRepositoryAssociation](AwsFsxActions.md#deletedatarepositoryassociation)
- [DeleteFileCache](AwsFsxActions.md#deletefilecache)
- [DeleteFileSystem](AwsFsxActions.md#deletefilesystem)
- [DeleteResourcePolicy](AwsFsxActions.md#deleteresourcepolicy)
- [DeleteSnapshot](AwsFsxActions.md#deletesnapshot)
- [DeleteStorageVirtualMachine](AwsFsxActions.md#deletestoragevirtualmachine)
- [DeleteVolume](AwsFsxActions.md#deletevolume)
- [DescribeAssociatedFileGateways](AwsFsxActions.md#describeassociatedfilegateways)
- [DescribeBackups](AwsFsxActions.md#describebackups)
- [DescribeDataRepositoryAssociations](AwsFsxActions.md#describedatarepositoryassociations)
- [DescribeDataRepositoryTasks](AwsFsxActions.md#describedatarepositorytasks)
- [DescribeFileCaches](AwsFsxActions.md#describefilecaches)
- [DescribeFileSystemAliases](AwsFsxActions.md#describefilesystemaliases)
- [DescribeFileSystems](AwsFsxActions.md#describefilesystems)
- [DescribeSharedVpcConfiguration](AwsFsxActions.md#describesharedvpcconfiguration)
- [DescribeSnapshots](AwsFsxActions.md#describesnapshots)
- [DescribeStorageVirtualMachines](AwsFsxActions.md#describestoragevirtualmachines)
- [DescribeVolumes](AwsFsxActions.md#describevolumes)
- [DisassociateFileGateway](AwsFsxActions.md#disassociatefilegateway)
- [DisassociateFileSystemAliases](AwsFsxActions.md#disassociatefilesystemaliases)
- [GetResourcePolicy](AwsFsxActions.md#getresourcepolicy)
- [ListTagsForResource](AwsFsxActions.md#listtagsforresource)
- [ManageBackupPrincipalAssociations](AwsFsxActions.md#managebackupprincipalassociations)
- [PutResourcePolicy](AwsFsxActions.md#putresourcepolicy)
- [ReleaseFileSystemNfsV3Locks](AwsFsxActions.md#releasefilesystemnfsv3locks)
- [RestoreVolumeFromSnapshot](AwsFsxActions.md#restorevolumefromsnapshot)
- [StartMisconfiguredStateRecovery](AwsFsxActions.md#startmisconfiguredstaterecovery)
- [TagResource](AwsFsxActions.md#tagresource)
- [UntagResource](AwsFsxActions.md#untagresource)
- [UpdateDataRepositoryAssociation](AwsFsxActions.md#updatedatarepositoryassociation)
- [UpdateFileCache](AwsFsxActions.md#updatefilecache)
- [UpdateFileSystem](AwsFsxActions.md#updatefilesystem)
- [UpdateSharedVpcConfiguration](AwsFsxActions.md#updatesharedvpcconfiguration)
- [UpdateSnapshot](AwsFsxActions.md#updatesnapshot)
- [UpdateStorageVirtualMachine](AwsFsxActions.md#updatestoragevirtualmachine)
- [UpdateVolume](AwsFsxActions.md#updatevolume)

## Enumeration Members

### AssociateFileGateway

• **AssociateFileGateway** = ``"fsx:AssociateFileGateway"``

Grants permission to associate a File Gateway instance with an Amazon FSx for W
indows File Server file system

See https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html

#### Defined in

actions/fsx.ts:18

___

### AssociateFileSystemAliases

• **AssociateFileSystemAliases** = ``"fsx:AssociateFileSystemAliases"``

Grants permission to associate DNS aliases with an Amazon FSx for Windows File
Server file system

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html

#### Defined in

actions/fsx.ts:25

___

### BypassSnaplockEnterpriseRetention

• **BypassSnaplockEnterpriseRetention** = ``"fsx:BypassSnaplockEnterpriseRetention"``

Grants permission to allow deletion of an FSx for ONTAP SnapLock Enterprise vol
ume that contains WORM (write once, read many) files with active retention peri
ods

See https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html#bypass-enterprise

#### Defined in

actions/fsx.ts:33

___

### CancelDataRepositoryTask

• **CancelDataRepositoryTask** = ``"fsx:CancelDataRepositoryTask"``

Grants permission to cancel a data repository task

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CancelDataRepositoryTask.html

#### Defined in

actions/fsx.ts:39

___

### CopyBackup

• **CopyBackup** = ``"fsx:CopyBackup"``

Grants permission to copy a backup

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopyBackup.html

#### Defined in

actions/fsx.ts:45

___

### CopySnapshotAndUpdateVolume

• **CopySnapshotAndUpdateVolume** = ``"fsx:CopySnapshotAndUpdateVolume"``

Grants permission to update an existing volume by using a snapshot from another
Amazon FSx for OpenZFS file system

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopySnapshotAndUpdateVolume.html

#### Defined in

actions/fsx.ts:52

___

### CreateBackup

• **CreateBackup** = ``"fsx:CreateBackup"``

Grants permission to create a new backup of an Amazon FSx file system or an Ama
zon FSx volume

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateBackup.html

#### Defined in

actions/fsx.ts:59

___

### CreateDataRepositoryAssociation

• **CreateDataRepositoryAssociation** = ``"fsx:CreateDataRepositoryAssociation"``

Grants permission to create a new data respository association for an Amazon FS
x for Lustre file system

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryAssociation.html

#### Defined in

actions/fsx.ts:66

___

### CreateDataRepositoryTask

• **CreateDataRepositoryTask** = ``"fsx:CreateDataRepositoryTask"``

Grants permission to create a new data respository task for an Amazon FSx for L
ustre file system

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryTask.html

#### Defined in

actions/fsx.ts:73

___

### CreateFileCache

• **CreateFileCache** = ``"fsx:CreateFileCache"``

Grants permission to create a new, empty, Amazon file cache

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileCache.html

#### Defined in

actions/fsx.ts:79

___

### CreateFileSystem

• **CreateFileSystem** = ``"fsx:CreateFileSystem"``

Grants permission to create a new, empty, Amazon FSx file system

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html

#### Defined in

actions/fsx.ts:85

___

### CreateFileSystemFromBackup

• **CreateFileSystemFromBackup** = ``"fsx:CreateFileSystemFromBackup"``

Grants permission to create a new Amazon FSx file system from an existing backu
p

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html

#### Defined in

actions/fsx.ts:92

___

### CreateSnapshot

• **CreateSnapshot** = ``"fsx:CreateSnapshot"``

Grants permission to create a new snapshot on a volume

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateSnapshot.html

#### Defined in

actions/fsx.ts:98

___

### CreateStorageVirtualMachine

• **CreateStorageVirtualMachine** = ``"fsx:CreateStorageVirtualMachine"``

Grants permission to create a new storage virtual machine in an Amazon FSx for
Ontap file system

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateStorageVirtualMachine.html

#### Defined in

actions/fsx.ts:105

___

### CreateVolume

• **CreateVolume** = ``"fsx:CreateVolume"``

Grants permission to create a new volume

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateVolume.html

#### Defined in

actions/fsx.ts:111

___

### CreateVolumeFromBackup

• **CreateVolumeFromBackup** = ``"fsx:CreateVolumeFromBackup"``

Grants permission to create a new volume from backup

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateVolumeFromBackup.html

#### Defined in

actions/fsx.ts:117

___

### DeleteBackup

• **DeleteBackup** = ``"fsx:DeleteBackup"``

Grants permission to delete a backup, deleting its contents. After deletion, th
e backup no longer exists, and its data is no longer available

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteBackup.html

#### Defined in

actions/fsx.ts:124

___

### DeleteDataRepositoryAssociation

• **DeleteDataRepositoryAssociation** = ``"fsx:DeleteDataRepositoryAssociation"``

Grants permission to delete a data repository association

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteDataRepositoryAssociation.html

#### Defined in

actions/fsx.ts:130

___

### DeleteFileCache

• **DeleteFileCache** = ``"fsx:DeleteFileCache"``

Grants permission to delete a file cache, deleting its contents

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileCache.html

#### Defined in

actions/fsx.ts:136

___

### DeleteFileSystem

• **DeleteFileSystem** = ``"fsx:DeleteFileSystem"``

Grants permission to delete a file system, deleting its contents and any existi
ng automatic backups of the file system

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileSystem.html

#### Defined in

actions/fsx.ts:143

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"fsx:DeleteResourcePolicy"``

Required to manage cross-account sharing of FSx volumes through AWS Resource Ac
cess Manager (RAM). PutResourcePolicy and GetResourcePolicy are also required

See https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/on-demand-replication.html

#### Defined in

actions/fsx.ts:150

___

### DeleteSnapshot

• **DeleteSnapshot** = ``"fsx:DeleteSnapshot"``

Grants permission to delete a snapshot on a volume

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteSnapshot.html

#### Defined in

actions/fsx.ts:156

___

### DeleteStorageVirtualMachine

• **DeleteStorageVirtualMachine** = ``"fsx:DeleteStorageVirtualMachine"``

Grants permission to delete a storage virtual machine, deleting its contents

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteStorageVirtualMachine.html

#### Defined in

actions/fsx.ts:162

___

### DeleteVolume

• **DeleteVolume** = ``"fsx:DeleteVolume"``

Grants permission to delete a volume, deleting its contents and any existing au
tomatic backups of the volume

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteVolume.html

#### Defined in

actions/fsx.ts:169

___

### DescribeAssociatedFileGateways

• **DescribeAssociatedFileGateways** = ``"fsx:DescribeAssociatedFileGateways"``

Grants permission to describe the File Gateway instances associated with an Ama
zon FSx for Windows File Server file system

See https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html

#### Defined in

actions/fsx.ts:176

___

### DescribeBackups

• **DescribeBackups** = ``"fsx:DescribeBackups"``

Grants permission to return the descriptions of all backups owned by your AWS a
ccount in the AWS Region of the endpoint that you're calling

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html

#### Defined in

actions/fsx.ts:183

___

### DescribeDataRepositoryAssociations

• **DescribeDataRepositoryAssociations** = ``"fsx:DescribeDataRepositoryAssociations"``

Grants permission to return the descriptions of all data repository association
s owned by your AWS account in the AWS Region of the endpoint that you're calli
ng

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryAssociations.html

#### Defined in

actions/fsx.ts:191

___

### DescribeDataRepositoryTasks

• **DescribeDataRepositoryTasks** = ``"fsx:DescribeDataRepositoryTasks"``

Grants permission to return the descriptions of all data repository tasks owned
by your AWS account in the AWS Region of the endpoint that you're calling

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryTasks.html

#### Defined in

actions/fsx.ts:198

___

### DescribeFileCaches

• **DescribeFileCaches** = ``"fsx:DescribeFileCaches"``

Grants permission to return the descriptions of all file caches owned by your A
WS account in the AWS Region of the endpoint that you're calling

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html

#### Defined in

actions/fsx.ts:205

___

### DescribeFileSystemAliases

• **DescribeFileSystemAliases** = ``"fsx:DescribeFileSystemAliases"``

Grants permission to return the description of all DNS aliases owned by your Am
azon FSx for Windows File Server file system

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystemAliases.html

#### Defined in

actions/fsx.ts:212

___

### DescribeFileSystems

• **DescribeFileSystems** = ``"fsx:DescribeFileSystems"``

Grants permission to return the descriptions of all file systems owned by your
AWS account in the AWS Region of the endpoint that you're calling

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html

#### Defined in

actions/fsx.ts:219

___

### DescribeSharedVpcConfiguration

• **DescribeSharedVpcConfiguration** = ``"fsx:DescribeSharedVpcConfiguration"``

Grants permission to return the descriptions of whether FSx route table updates
from participant accounts are allowed in your account

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSharedVpcConfiguration.html

#### Defined in

actions/fsx.ts:226

___

### DescribeSnapshots

• **DescribeSnapshots** = ``"fsx:DescribeSnapshots"``

Grants permission to return the descriptions of all snapshots owned by your AWS
account in the AWS Region of the endpoint you're calling

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html

#### Defined in

actions/fsx.ts:233

___

### DescribeStorageVirtualMachines

• **DescribeStorageVirtualMachines** = ``"fsx:DescribeStorageVirtualMachines"``

Grants permission to return the descriptions of all storage virtual machines ow
ned by your AWS account in the AWS Region of the endpoint that you're calling

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeStorageVirtualMachines.html

#### Defined in

actions/fsx.ts:240

___

### DescribeVolumes

• **DescribeVolumes** = ``"fsx:DescribeVolumes"``

Grants permission to return the descriptions of all volumes owned by your AWS a
ccount in the AWS Region of the endpoint that you're calling

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeVolumes.html

#### Defined in

actions/fsx.ts:247

___

### DisassociateFileGateway

• **DisassociateFileGateway** = ``"fsx:DisassociateFileGateway"``

Grants permission to disassociate a File Gateway instance from an Amazon FSx fo
r Windows File Server file system

See https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html

#### Defined in

actions/fsx.ts:254

___

### DisassociateFileSystemAliases

• **DisassociateFileSystemAliases** = ``"fsx:DisassociateFileSystemAliases"``

Grants permission to disassociate file system aliases with an Amazon FSx for Wi
ndows File Server file system

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html

#### Defined in

actions/fsx.ts:261

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"fsx:GetResourcePolicy"``

Required to manage cross-account sharing of FSx volumes through AWS Resource Ac
cess Manager (RAM). PutResourcePolicy and DeleteResourcePolicy are also require
d

See https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/on-demand-replication.html

#### Defined in

actions/fsx.ts:269

___

### ListTagsForResource

• **ListTagsForResource** = ``"fsx:ListTagsForResource"``

Grants permission to list tags for an Amazon FSx resource

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/fsx.ts:275

___

### ManageBackupPrincipalAssociations

• **ManageBackupPrincipalAssociations** = ``"fsx:ManageBackupPrincipalAssociations"``

Grants permission to manage backup principal associations through AWS Backup

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopyBackup.html

#### Defined in

actions/fsx.ts:281

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"fsx:PutResourcePolicy"``

Required to manage cross-account sharing of FSx volumes through AWS Resource Ac
cess Manager (RAM). DeleteResourcePolicy and GetResourcePolicy are also require
d

See https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/on-demand-replication.html

#### Defined in

actions/fsx.ts:289

___

### ReleaseFileSystemNfsV3Locks

• **ReleaseFileSystemNfsV3Locks** = ``"fsx:ReleaseFileSystemNfsV3Locks"``

Grants permission to release file system NFS V3 locks

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_ReleaseFileSystemNfsV3Locks.html

#### Defined in

actions/fsx.ts:295

___

### RestoreVolumeFromSnapshot

• **RestoreVolumeFromSnapshot** = ``"fsx:RestoreVolumeFromSnapshot"``

Grants permission to restore volume state from a snapshot

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_RestoreVolumeFromSnapshot.html

#### Defined in

actions/fsx.ts:301

___

### StartMisconfiguredStateRecovery

• **StartMisconfiguredStateRecovery** = ``"fsx:StartMisconfiguredStateRecovery"``

Grants permission to start misconfigured state recovery

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_StartMisconfiguredStateRecovery.html

#### Defined in

actions/fsx.ts:307

___

### TagResource

• **TagResource** = ``"fsx:TagResource"``

Grants permission to tag an Amazon FSx resource

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_TagResource.html

#### Defined in

actions/fsx.ts:313

___

### UntagResource

• **UntagResource** = ``"fsx:UntagResource"``

Grants permission to remove a tag from an Amazon FSx resource

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_UntagResource.html

#### Defined in

actions/fsx.ts:319

___

### UpdateDataRepositoryAssociation

• **UpdateDataRepositoryAssociation** = ``"fsx:UpdateDataRepositoryAssociation"``

Grants permission to update data repository association configuration

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateDataRepositoryAssociation.html

#### Defined in

actions/fsx.ts:325

___

### UpdateFileCache

• **UpdateFileCache** = ``"fsx:UpdateFileCache"``

Grants permission to update file cache configuration

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileCache.html

#### Defined in

actions/fsx.ts:331

___

### UpdateFileSystem

• **UpdateFileSystem** = ``"fsx:UpdateFileSystem"``

Grants permission to update file system configuration

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html

#### Defined in

actions/fsx.ts:337

___

### UpdateSharedVpcConfiguration

• **UpdateSharedVpcConfiguration** = ``"fsx:UpdateSharedVpcConfiguration"``

Grants permission to enable or disable FSx route table updates from participant
accounts in your account

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateSharedVpcConfiguration.html

#### Defined in

actions/fsx.ts:344

___

### UpdateSnapshot

• **UpdateSnapshot** = ``"fsx:UpdateSnapshot"``

Grants permission to update snapshot configuration

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateSnapshot.html

#### Defined in

actions/fsx.ts:350

___

### UpdateStorageVirtualMachine

• **UpdateStorageVirtualMachine** = ``"fsx:UpdateStorageVirtualMachine"``

Grants permission to update storage virtual machine configuration

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateStorageVirtualMachine.html

#### Defined in

actions/fsx.ts:356

___

### UpdateVolume

• **UpdateVolume** = ``"fsx:UpdateVolume"``

Grants permission to update volume configuration

See https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateVolume.html

#### Defined in

actions/fsx.ts:362
