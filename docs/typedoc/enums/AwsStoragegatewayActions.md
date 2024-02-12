[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsStoragegatewayActions

# Enumeration: AwsStoragegatewayActions

All IAM policy actions for AWS Storage Gateway (STORAGEGATEWAY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsstoragegateway.html

2024-02-12T09:59:21.806Z

## Table of contents

### Enumeration Members

- [ActivateGateway](AwsStoragegatewayActions.md#activategateway)
- [AddCache](AwsStoragegatewayActions.md#addcache)
- [AddTagsToResource](AwsStoragegatewayActions.md#addtagstoresource)
- [AddUploadBuffer](AwsStoragegatewayActions.md#adduploadbuffer)
- [AddWorkingStorage](AwsStoragegatewayActions.md#addworkingstorage)
- [AssignTapePool](AwsStoragegatewayActions.md#assigntapepool)
- [AssociateFileSystem](AwsStoragegatewayActions.md#associatefilesystem)
- [AttachVolume](AwsStoragegatewayActions.md#attachvolume)
- [BypassGovernanceRetention](AwsStoragegatewayActions.md#bypassgovernanceretention)
- [CancelArchival](AwsStoragegatewayActions.md#cancelarchival)
- [CancelRetrieval](AwsStoragegatewayActions.md#cancelretrieval)
- [CreateCachediSCSIVolume](AwsStoragegatewayActions.md#createcachediscsivolume)
- [CreateNFSFileShare](AwsStoragegatewayActions.md#createnfsfileshare)
- [CreateSMBFileShare](AwsStoragegatewayActions.md#createsmbfileshare)
- [CreateSnapshot](AwsStoragegatewayActions.md#createsnapshot)
- [CreateSnapshotFromVolumeRecoveryPoint](AwsStoragegatewayActions.md#createsnapshotfromvolumerecoverypoint)
- [CreateStorediSCSIVolume](AwsStoragegatewayActions.md#createstorediscsivolume)
- [CreateTapePool](AwsStoragegatewayActions.md#createtapepool)
- [CreateTapeWithBarcode](AwsStoragegatewayActions.md#createtapewithbarcode)
- [CreateTapes](AwsStoragegatewayActions.md#createtapes)
- [DeleteAutomaticTapeCreationPolicy](AwsStoragegatewayActions.md#deleteautomatictapecreationpolicy)
- [DeleteBandwidthRateLimit](AwsStoragegatewayActions.md#deletebandwidthratelimit)
- [DeleteChapCredentials](AwsStoragegatewayActions.md#deletechapcredentials)
- [DeleteFileShare](AwsStoragegatewayActions.md#deletefileshare)
- [DeleteGateway](AwsStoragegatewayActions.md#deletegateway)
- [DeleteSnapshotSchedule](AwsStoragegatewayActions.md#deletesnapshotschedule)
- [DeleteTape](AwsStoragegatewayActions.md#deletetape)
- [DeleteTapeArchive](AwsStoragegatewayActions.md#deletetapearchive)
- [DeleteTapePool](AwsStoragegatewayActions.md#deletetapepool)
- [DeleteVolume](AwsStoragegatewayActions.md#deletevolume)
- [DescribeAvailabilityMonitorTest](AwsStoragegatewayActions.md#describeavailabilitymonitortest)
- [DescribeBandwidthRateLimit](AwsStoragegatewayActions.md#describebandwidthratelimit)
- [DescribeBandwidthRateLimitSchedule](AwsStoragegatewayActions.md#describebandwidthratelimitschedule)
- [DescribeCache](AwsStoragegatewayActions.md#describecache)
- [DescribeCachediSCSIVolumes](AwsStoragegatewayActions.md#describecachediscsivolumes)
- [DescribeChapCredentials](AwsStoragegatewayActions.md#describechapcredentials)
- [DescribeFileSystemAssociations](AwsStoragegatewayActions.md#describefilesystemassociations)
- [DescribeGatewayInformation](AwsStoragegatewayActions.md#describegatewayinformation)
- [DescribeMaintenanceStartTime](AwsStoragegatewayActions.md#describemaintenancestarttime)
- [DescribeNFSFileShares](AwsStoragegatewayActions.md#describenfsfileshares)
- [DescribeSMBFileShares](AwsStoragegatewayActions.md#describesmbfileshares)
- [DescribeSMBSettings](AwsStoragegatewayActions.md#describesmbsettings)
- [DescribeSnapshotSchedule](AwsStoragegatewayActions.md#describesnapshotschedule)
- [DescribeStorediSCSIVolumes](AwsStoragegatewayActions.md#describestorediscsivolumes)
- [DescribeTapeArchives](AwsStoragegatewayActions.md#describetapearchives)
- [DescribeTapeRecoveryPoints](AwsStoragegatewayActions.md#describetaperecoverypoints)
- [DescribeTapes](AwsStoragegatewayActions.md#describetapes)
- [DescribeUploadBuffer](AwsStoragegatewayActions.md#describeuploadbuffer)
- [DescribeVTLDevices](AwsStoragegatewayActions.md#describevtldevices)
- [DescribeWorkingStorage](AwsStoragegatewayActions.md#describeworkingstorage)
- [DetachVolume](AwsStoragegatewayActions.md#detachvolume)
- [DisableGateway](AwsStoragegatewayActions.md#disablegateway)
- [DisassociateFileSystem](AwsStoragegatewayActions.md#disassociatefilesystem)
- [JoinDomain](AwsStoragegatewayActions.md#joindomain)
- [ListAutomaticTapeCreationPolicies](AwsStoragegatewayActions.md#listautomatictapecreationpolicies)
- [ListFileShares](AwsStoragegatewayActions.md#listfileshares)
- [ListFileSystemAssociations](AwsStoragegatewayActions.md#listfilesystemassociations)
- [ListGateways](AwsStoragegatewayActions.md#listgateways)
- [ListLocalDisks](AwsStoragegatewayActions.md#listlocaldisks)
- [ListTagsForResource](AwsStoragegatewayActions.md#listtagsforresource)
- [ListTapePools](AwsStoragegatewayActions.md#listtapepools)
- [ListTapes](AwsStoragegatewayActions.md#listtapes)
- [ListVolumeInitiators](AwsStoragegatewayActions.md#listvolumeinitiators)
- [ListVolumeRecoveryPoints](AwsStoragegatewayActions.md#listvolumerecoverypoints)
- [ListVolumes](AwsStoragegatewayActions.md#listvolumes)
- [NotifyWhenUploaded](AwsStoragegatewayActions.md#notifywhenuploaded)
- [RefreshCache](AwsStoragegatewayActions.md#refreshcache)
- [RemoveTagsFromResource](AwsStoragegatewayActions.md#removetagsfromresource)
- [ResetCache](AwsStoragegatewayActions.md#resetcache)
- [RetrieveTapeArchive](AwsStoragegatewayActions.md#retrievetapearchive)
- [RetrieveTapeRecoveryPoint](AwsStoragegatewayActions.md#retrievetaperecoverypoint)
- [SetLocalConsolePassword](AwsStoragegatewayActions.md#setlocalconsolepassword)
- [SetSMBGuestPassword](AwsStoragegatewayActions.md#setsmbguestpassword)
- [ShutdownGateway](AwsStoragegatewayActions.md#shutdowngateway)
- [StartAvailabilityMonitorTest](AwsStoragegatewayActions.md#startavailabilitymonitortest)
- [StartGateway](AwsStoragegatewayActions.md#startgateway)
- [UpdateAutomaticTapeCreationPolicy](AwsStoragegatewayActions.md#updateautomatictapecreationpolicy)
- [UpdateBandwidthRateLimit](AwsStoragegatewayActions.md#updatebandwidthratelimit)
- [UpdateBandwidthRateLimitSchedule](AwsStoragegatewayActions.md#updatebandwidthratelimitschedule)
- [UpdateChapCredentials](AwsStoragegatewayActions.md#updatechapcredentials)
- [UpdateFileSystemAssociation](AwsStoragegatewayActions.md#updatefilesystemassociation)
- [UpdateGatewayInformation](AwsStoragegatewayActions.md#updategatewayinformation)
- [UpdateGatewaySoftwareNow](AwsStoragegatewayActions.md#updategatewaysoftwarenow)
- [UpdateMaintenanceStartTime](AwsStoragegatewayActions.md#updatemaintenancestarttime)
- [UpdateNFSFileShare](AwsStoragegatewayActions.md#updatenfsfileshare)
- [UpdateSMBFileShare](AwsStoragegatewayActions.md#updatesmbfileshare)
- [UpdateSMBFileShareVisibility](AwsStoragegatewayActions.md#updatesmbfilesharevisibility)
- [UpdateSMBLocalGroups](AwsStoragegatewayActions.md#updatesmblocalgroups)
- [UpdateSMBSecurityStrategy](AwsStoragegatewayActions.md#updatesmbsecuritystrategy)
- [UpdateSnapshotSchedule](AwsStoragegatewayActions.md#updatesnapshotschedule)
- [UpdateVTLDeviceType](AwsStoragegatewayActions.md#updatevtldevicetype)

## Enumeration Members

### ActivateGateway

• **ActivateGateway** = ``"storagegateway:ActivateGateway"``

Grants permission to activate the gateway you previously deployed on your host

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ActivateGateway.html

#### Defined in

actions/storagegateway.ts:17

___

### AddCache

• **AddCache** = ``"storagegateway:AddCache"``

Grants permission to configure one or more gateway local disks as cache for a c
ached-volume gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddCache.html

#### Defined in

actions/storagegateway.ts:24

___

### AddTagsToResource

• **AddTagsToResource** = ``"storagegateway:AddTagsToResource"``

Grants permission to add one or more tags to the specified resource

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddTagsToResource.html

#### Defined in

actions/storagegateway.ts:30

___

### AddUploadBuffer

• **AddUploadBuffer** = ``"storagegateway:AddUploadBuffer"``

Grants permission to configure one or more gateway local disks as upload buffer
for a specified gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddUploadBuffer.html

#### Defined in

actions/storagegateway.ts:37

___

### AddWorkingStorage

• **AddWorkingStorage** = ``"storagegateway:AddWorkingStorage"``

Grants permission to configure one or more gateway local disks as working stora
ge for a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddWorkingStorage.html

#### Defined in

actions/storagegateway.ts:44

___

### AssignTapePool

• **AssignTapePool** = ``"storagegateway:AssignTapePool"``

Grants permission to move a tape to the target pool specified

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AssignTapePool.html

#### Defined in

actions/storagegateway.ts:50

___

### AssociateFileSystem

• **AssociateFileSystem** = ``"storagegateway:AssociateFileSystem"``

Grants permission to associate an Amazon FSx file system with the Amazon FSx fi
le gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AssociateFileSystem.html

#### Defined in

actions/storagegateway.ts:57

___

### AttachVolume

• **AttachVolume** = ``"storagegateway:AttachVolume"``

Grants permission to connect a volume to an iSCSI connection and then attaches
the volume to the specified gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AttachVolume.html

#### Defined in

actions/storagegateway.ts:64

___

### BypassGovernanceRetention

• **BypassGovernanceRetention** = ``"storagegateway:BypassGovernanceRetention"``

Grants permission to allow the governance retention lock on a pool to be bypass
ed

See https://docs.aws.amazon.com/storagegateway/latest/userguide/CreatingCustomTapePool.html#TapeRetentionLock

#### Defined in

actions/storagegateway.ts:71

___

### CancelArchival

• **CancelArchival** = ``"storagegateway:CancelArchival"``

Grants permission to cancel archiving of a virtual tape to the virtual tape she
lf (VTS) after the archiving process is initiated

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelArchival.html

#### Defined in

actions/storagegateway.ts:78

___

### CancelRetrieval

• **CancelRetrieval** = ``"storagegateway:CancelRetrieval"``

Grants permission to cancel retrieval of a virtual tape from the virtual tape s
helf (VTS) to a gateway after the retrieval process is initiated

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelRetrieval.html

#### Defined in

actions/storagegateway.ts:85

___

### CreateCachediSCSIVolume

• **CreateCachediSCSIVolume** = ``"storagegateway:CreateCachediSCSIVolume"``

Grants permission to create a cached volume on a specified cached gateway. This
operation is supported only for the gateway-cached volume architecture

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateCachediSCSIVolume.html

#### Defined in

actions/storagegateway.ts:92

___

### CreateNFSFileShare

• **CreateNFSFileShare** = ``"storagegateway:CreateNFSFileShare"``

Grants permission to create a NFS file share on an existing file gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html

#### Defined in

actions/storagegateway.ts:98

___

### CreateSMBFileShare

• **CreateSMBFileShare** = ``"storagegateway:CreateSMBFileShare"``

Grants permission to create a SMB file share on an existing file gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSMBFileShare.html

#### Defined in

actions/storagegateway.ts:104

___

### CreateSnapshot

• **CreateSnapshot** = ``"storagegateway:CreateSnapshot"``

Grants permission to initiate a snapshot of a volume

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshot.html

#### Defined in

actions/storagegateway.ts:110

___

### CreateSnapshotFromVolumeRecoveryPoint

• **CreateSnapshotFromVolumeRecoveryPoint** = ``"storagegateway:CreateSnapshotFromVolumeRecoveryPoint"``

Grants permission to initiate a snapshot of a gateway from a volume recovery po
int

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshotFromVolumeRecoveryPoint.html

#### Defined in

actions/storagegateway.ts:117

___

### CreateStorediSCSIVolume

• **CreateStorediSCSIVolume** = ``"storagegateway:CreateStorediSCSIVolume"``

Grants permission to create a volume on a specified gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateStorediSCSIVolume.html

#### Defined in

actions/storagegateway.ts:123

___

### CreateTapePool

• **CreateTapePool** = ``"storagegateway:CreateTapePool"``

Grants permission to create a tape pool

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapePool.html

#### Defined in

actions/storagegateway.ts:129

___

### CreateTapeWithBarcode

• **CreateTapeWithBarcode** = ``"storagegateway:CreateTapeWithBarcode"``

Grants permission to create a virtual tape by using your own barcode

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapeWithBarcode.html

#### Defined in

actions/storagegateway.ts:135

___

### CreateTapes

• **CreateTapes** = ``"storagegateway:CreateTapes"``

Grants permission to create one or more virtual tapes. You write data to the vi
rtual tapes and then archive the tapes

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapes.html

#### Defined in

actions/storagegateway.ts:142

___

### DeleteAutomaticTapeCreationPolicy

• **DeleteAutomaticTapeCreationPolicy** = ``"storagegateway:DeleteAutomaticTapeCreationPolicy"``

Grants permission to delete the automatic tape creation policy configured on a
gateway-VTL

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteAutomaticTapeCreationPolicy.html

#### Defined in

actions/storagegateway.ts:149

___

### DeleteBandwidthRateLimit

• **DeleteBandwidthRateLimit** = ``"storagegateway:DeleteBandwidthRateLimit"``

Grants permission to delete the bandwidth rate limits of a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteBandwidthRateLimit.html

#### Defined in

actions/storagegateway.ts:155

___

### DeleteChapCredentials

• **DeleteChapCredentials** = ``"storagegateway:DeleteChapCredentials"``

Grants permission to delete Challenge-Handshake Authentication Protocol (CHAP)
credentials for a specified iSCSI target and initiator pair

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteChapCredentials.html

#### Defined in

actions/storagegateway.ts:162

___

### DeleteFileShare

• **DeleteFileShare** = ``"storagegateway:DeleteFileShare"``

Grants permission to delete a file share from a file gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteFileShare.html

#### Defined in

actions/storagegateway.ts:168

___

### DeleteGateway

• **DeleteGateway** = ``"storagegateway:DeleteGateway"``

Grants permission to delete a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteGateway.html

#### Defined in

actions/storagegateway.ts:174

___

### DeleteSnapshotSchedule

• **DeleteSnapshotSchedule** = ``"storagegateway:DeleteSnapshotSchedule"``

Grants permission to delete a snapshot of a volume

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteSnapshotSchedule.html

#### Defined in

actions/storagegateway.ts:180

___

### DeleteTape

• **DeleteTape** = ``"storagegateway:DeleteTape"``

Grants permission to delete the specified virtual tape

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTape.html

#### Defined in

actions/storagegateway.ts:186

___

### DeleteTapeArchive

• **DeleteTapeArchive** = ``"storagegateway:DeleteTapeArchive"``

Grants permission to delete the specified virtual tape from the virtual tape sh
elf (VTS)

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapeArchive.html

#### Defined in

actions/storagegateway.ts:193

___

### DeleteTapePool

• **DeleteTapePool** = ``"storagegateway:DeleteTapePool"``

Grants permission to delete the specified tape pool

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapePool.html

#### Defined in

actions/storagegateway.ts:199

___

### DeleteVolume

• **DeleteVolume** = ``"storagegateway:DeleteVolume"``

Grants permission to delete the specified gateway volume that you previously cr
eated using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteVolume.html

#### Defined in

actions/storagegateway.ts:206

___

### DescribeAvailabilityMonitorTest

• **DescribeAvailabilityMonitorTest** = ``"storagegateway:DescribeAvailabilityMonitorTest"``

Grants permission to get the information about the most recent high availabilit
y monitoring test that was performed on the gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeAvailabilityMonitorTest.html

#### Defined in

actions/storagegateway.ts:213

___

### DescribeBandwidthRateLimit

• **DescribeBandwidthRateLimit** = ``"storagegateway:DescribeBandwidthRateLimit"``

Grants permission to get the bandwidth rate limits of a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeBandwidthRateLimit.html

#### Defined in

actions/storagegateway.ts:219

___

### DescribeBandwidthRateLimitSchedule

• **DescribeBandwidthRateLimitSchedule** = ``"storagegateway:DescribeBandwidthRateLimitSchedule"``

Grants permission to get the bandwidth rate limit schedule of a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeBandwidthRateLimitSchedule.html

#### Defined in

actions/storagegateway.ts:225

___

### DescribeCache

• **DescribeCache** = ``"storagegateway:DescribeCache"``

Grants permission to get information about the cache of a gateway. This operati
on is supported only for the gateway-cached volume architecture

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCache.html

#### Defined in

actions/storagegateway.ts:232

___

### DescribeCachediSCSIVolumes

• **DescribeCachediSCSIVolumes** = ``"storagegateway:DescribeCachediSCSIVolumes"``

Grants permission to get a description of the gateway volumes specified in the
request. This operation is supported only for the gateway-cached volume archite
cture

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCachediSCSIVolumes.html

#### Defined in

actions/storagegateway.ts:240

___

### DescribeChapCredentials

• **DescribeChapCredentials** = ``"storagegateway:DescribeChapCredentials"``

Grants permission to get an array of Challenge-Handshake Authentication Protoco
l (CHAP) credentials information for a specified iSCSI target, one for each tar
get-initiator pair

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeChapCredentials.html

#### Defined in

actions/storagegateway.ts:248

___

### DescribeFileSystemAssociations

• **DescribeFileSystemAssociations** = ``"storagegateway:DescribeFileSystemAssociations"``

Grants permission to get a description for one or more file system associations

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeFileSystemAssociations.html

#### Defined in

actions/storagegateway.ts:254

___

### DescribeGatewayInformation

• **DescribeGatewayInformation** = ``"storagegateway:DescribeGatewayInformation"``

Grants permission to get metadata about a gateway such as its name, network int
erfaces, configured time zone, and the state (whether the gateway is running or
not)

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeGatewayInformation.html

#### Defined in

actions/storagegateway.ts:262

___

### DescribeMaintenanceStartTime

• **DescribeMaintenanceStartTime** = ``"storagegateway:DescribeMaintenanceStartTime"``

Grants permission to get your gateway's weekly maintenance start time including
the day and time of the week

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeMaintenanceStartTime.html

#### Defined in

actions/storagegateway.ts:269

___

### DescribeNFSFileShares

• **DescribeNFSFileShares** = ``"storagegateway:DescribeNFSFileShares"``

Grants permission to get a description for one or more file shares from a file
gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeNFSFileShares.html

#### Defined in

actions/storagegateway.ts:276

___

### DescribeSMBFileShares

• **DescribeSMBFileShares** = ``"storagegateway:DescribeSMBFileShares"``

Grants permission to get a description for one or more file shares from a file
gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBFileShares.html

#### Defined in

actions/storagegateway.ts:283

___

### DescribeSMBSettings

• **DescribeSMBSettings** = ``"storagegateway:DescribeSMBSettings"``

Grants permission to get a description of a Server Message Block (SMB) file sha
re settings from a file gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBSettings.html

#### Defined in

actions/storagegateway.ts:290

___

### DescribeSnapshotSchedule

• **DescribeSnapshotSchedule** = ``"storagegateway:DescribeSnapshotSchedule"``

Grants permission to describe the snapshot schedule for the specified gateway v
olume

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSnapshotSchedule.html

#### Defined in

actions/storagegateway.ts:297

___

### DescribeStorediSCSIVolumes

• **DescribeStorediSCSIVolumes** = ``"storagegateway:DescribeStorediSCSIVolumes"``

Grants permission to get the description of the gateway volumes specified in th
e request

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeStorediSCSIVolumes.html

#### Defined in

actions/storagegateway.ts:304

___

### DescribeTapeArchives

• **DescribeTapeArchives** = ``"storagegateway:DescribeTapeArchives"``

Grants permission to get a description of specified virtual tapes in the virtua
l tape shelf (VTS)

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeArchives.html

#### Defined in

actions/storagegateway.ts:311

___

### DescribeTapeRecoveryPoints

• **DescribeTapeRecoveryPoints** = ``"storagegateway:DescribeTapeRecoveryPoints"``

Grants permission to get a list of virtual tape recovery points that are availa
ble for the specified gateway-VTL

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeRecoveryPoints.html

#### Defined in

actions/storagegateway.ts:318

___

### DescribeTapes

• **DescribeTapes** = ``"storagegateway:DescribeTapes"``

Grants permission to get a description of the specified Amazon Resource Name (A
RN) of virtual tapes

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapes.html

#### Defined in

actions/storagegateway.ts:325

___

### DescribeUploadBuffer

• **DescribeUploadBuffer** = ``"storagegateway:DescribeUploadBuffer"``

Grants permission to get information about the upload buffer of a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeUploadBuffer.html

#### Defined in

actions/storagegateway.ts:331

___

### DescribeVTLDevices

• **DescribeVTLDevices** = ``"storagegateway:DescribeVTLDevices"``

Grants permission to get a description of virtual tape library (VTL) devices fo
r the specified gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeVTLDevices.html

#### Defined in

actions/storagegateway.ts:338

___

### DescribeWorkingStorage

• **DescribeWorkingStorage** = ``"storagegateway:DescribeWorkingStorage"``

Grants permission to get information about the working storage of a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeWorkingStorage.html

#### Defined in

actions/storagegateway.ts:344

___

### DetachVolume

• **DetachVolume** = ``"storagegateway:DetachVolume"``

Grants permission to disconnect a volume from an iSCSI connection and then deta
ches the volume from the specified gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DetachVolume.html

#### Defined in

actions/storagegateway.ts:351

___

### DisableGateway

• **DisableGateway** = ``"storagegateway:DisableGateway"``

Grants permission to disable a gateway when the gateway is no longer functionin
g

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DisableGateway.html

#### Defined in

actions/storagegateway.ts:358

___

### DisassociateFileSystem

• **DisassociateFileSystem** = ``"storagegateway:DisassociateFileSystem"``

Grants permission to disassociate an Amazon FSx file system from an Amazon FSx
file gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DisassociateFileSystem.html

#### Defined in

actions/storagegateway.ts:365

___

### JoinDomain

• **JoinDomain** = ``"storagegateway:JoinDomain"``

Grants permission to enable you to join an Active Directory Domain

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_JoinDomain.html

#### Defined in

actions/storagegateway.ts:371

___

### ListAutomaticTapeCreationPolicies

• **ListAutomaticTapeCreationPolicies** = ``"storagegateway:ListAutomaticTapeCreationPolicies"``

Grants permission to list the automatic tape creation policies configured on th
e specified gateway-VTL or all gateway-VTLs owned by your AWS account

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListAutomaticTapeCreationPolicies.html

#### Defined in

actions/storagegateway.ts:378

___

### ListFileShares

• **ListFileShares** = ``"storagegateway:ListFileShares"``

Grants permission to get a list of the file shares for a specific file gateway,
or the list of file shares owned by your AWS account

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListFileShares.html

#### Defined in

actions/storagegateway.ts:385

___

### ListFileSystemAssociations

• **ListFileSystemAssociations** = ``"storagegateway:ListFileSystemAssociations"``

Grants permission to get a list of the file system associations for the specifi
ed gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListFileSystemAssociations.html

#### Defined in

actions/storagegateway.ts:392

___

### ListGateways

• **ListGateways** = ``"storagegateway:ListGateways"``

Grants permission to list gateways owned by an AWS account in a region specifie
d in the request. The returned list is ordered by gateway Amazon Resource Name
(ARN)

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListGateways.html

#### Defined in

actions/storagegateway.ts:400

___

### ListLocalDisks

• **ListLocalDisks** = ``"storagegateway:ListLocalDisks"``

Grants permission to get a list of the gateway's local disks

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListLocalDisks.html

#### Defined in

actions/storagegateway.ts:406

___

### ListTagsForResource

• **ListTagsForResource** = ``"storagegateway:ListTagsForResource"``

Grants permission to get the tags that have been added to the specified resourc
e

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/storagegateway.ts:413

___

### ListTapePools

• **ListTapePools** = ``"storagegateway:ListTapePools"``

Grants permission to list tape pools owned by your AWS account

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapePools.html

#### Defined in

actions/storagegateway.ts:419

___

### ListTapes

• **ListTapes** = ``"storagegateway:ListTapes"``

Grants permission to list virtual tapes in your virtual tape library (VTL) and
your virtual tape shelf (VTS)

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapes.html

#### Defined in

actions/storagegateway.ts:426

___

### ListVolumeInitiators

• **ListVolumeInitiators** = ``"storagegateway:ListVolumeInitiators"``

Grants permission to list iSCSI initiators that are connected to a volume

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeInitiators.html

#### Defined in

actions/storagegateway.ts:432

___

### ListVolumeRecoveryPoints

• **ListVolumeRecoveryPoints** = ``"storagegateway:ListVolumeRecoveryPoints"``

Grants permission to list the recovery points for a specified gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeRecoveryPoints.html

#### Defined in

actions/storagegateway.ts:438

___

### ListVolumes

• **ListVolumes** = ``"storagegateway:ListVolumes"``

Grants permission to list the iSCSI stored volumes of a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumes.html

#### Defined in

actions/storagegateway.ts:444

___

### NotifyWhenUploaded

• **NotifyWhenUploaded** = ``"storagegateway:NotifyWhenUploaded"``

Grants permission to send you a notification through CloudWatch Events when all
files written to your NFS file share have been uploaded to Amazon S3

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_NotifyWhenUploaded.html

#### Defined in

actions/storagegateway.ts:451

___

### RefreshCache

• **RefreshCache** = ``"storagegateway:RefreshCache"``

Grants permission to refresh the cache for the specified file share

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RefreshCache.html

#### Defined in

actions/storagegateway.ts:457

___

### RemoveTagsFromResource

• **RemoveTagsFromResource** = ``"storagegateway:RemoveTagsFromResource"``

Grants permission to remove one or more tags from the specified resource

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RemoveTagsFromResource.html

#### Defined in

actions/storagegateway.ts:463

___

### ResetCache

• **ResetCache** = ``"storagegateway:ResetCache"``

Grants permission to reset all cache disks that have encountered a error and ma
kes the disks available for reconfiguration as cache storage

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ResetCache.html

#### Defined in

actions/storagegateway.ts:470

___

### RetrieveTapeArchive

• **RetrieveTapeArchive** = ``"storagegateway:RetrieveTapeArchive"``

Grants permission to retrieve an archived virtual tape from the virtual tape sh
elf (VTS) to a gateway-VTL

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeArchive.html

#### Defined in

actions/storagegateway.ts:477

___

### RetrieveTapeRecoveryPoint

• **RetrieveTapeRecoveryPoint** = ``"storagegateway:RetrieveTapeRecoveryPoint"``

Grants permission to retrieve the recovery point for the specified virtual tape

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeRecoveryPoint.html

#### Defined in

actions/storagegateway.ts:483

___

### SetLocalConsolePassword

• **SetLocalConsolePassword** = ``"storagegateway:SetLocalConsolePassword"``

Grants permission to set the password for your VM local console

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetLocalConsolePassword.html

#### Defined in

actions/storagegateway.ts:489

___

### SetSMBGuestPassword

• **SetSMBGuestPassword** = ``"storagegateway:SetSMBGuestPassword"``

Grants permission to set the password for SMB Guest user

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetSMBGuestPassword.html

#### Defined in

actions/storagegateway.ts:495

___

### ShutdownGateway

• **ShutdownGateway** = ``"storagegateway:ShutdownGateway"``

Grants permission to shut down a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ShutdownGateway.html

#### Defined in

actions/storagegateway.ts:501

___

### StartAvailabilityMonitorTest

• **StartAvailabilityMonitorTest** = ``"storagegateway:StartAvailabilityMonitorTest"``

Grants permission to start a test that verifies that the specified gateway is c
onfigured for High Availability monitoring in your host environment

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartAvailabilityMonitorTest.html

#### Defined in

actions/storagegateway.ts:508

___

### StartGateway

• **StartGateway** = ``"storagegateway:StartGateway"``

Grants permission to start a gateway that you previously shut down

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartGateway.html

#### Defined in

actions/storagegateway.ts:514

___

### UpdateAutomaticTapeCreationPolicy

• **UpdateAutomaticTapeCreationPolicy** = ``"storagegateway:UpdateAutomaticTapeCreationPolicy"``

Grants permission to update the automatic tape creation policy configured on a
gateway-VTL

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateAutomaticTapeCreationPolicy.html

#### Defined in

actions/storagegateway.ts:521

___

### UpdateBandwidthRateLimit

• **UpdateBandwidthRateLimit** = ``"storagegateway:UpdateBandwidthRateLimit"``

Grants permission to update the bandwidth rate limits of a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateBandwidthRateLimit.html

#### Defined in

actions/storagegateway.ts:527

___

### UpdateBandwidthRateLimitSchedule

• **UpdateBandwidthRateLimitSchedule** = ``"storagegateway:UpdateBandwidthRateLimitSchedule"``

Grants permission to update the bandwidth rate limit schedule of a gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateBandwidthRateLimitSchedule.html

#### Defined in

actions/storagegateway.ts:533

___

### UpdateChapCredentials

• **UpdateChapCredentials** = ``"storagegateway:UpdateChapCredentials"``

Grants permission to update the Challenge-Handshake Authentication Protocol (CH
AP) credentials for a specified iSCSI target

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateChapCredentials.html

#### Defined in

actions/storagegateway.ts:540

___

### UpdateFileSystemAssociation

• **UpdateFileSystemAssociation** = ``"storagegateway:UpdateFileSystemAssociation"``

Grants permission to update a file system association

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateFileSystemAssociation.html

#### Defined in

actions/storagegateway.ts:546

___

### UpdateGatewayInformation

• **UpdateGatewayInformation** = ``"storagegateway:UpdateGatewayInformation"``

Grants permission to update a gateway's metadata, which includes the gateway's
name and time zone

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewayInformation.html

#### Defined in

actions/storagegateway.ts:553

___

### UpdateGatewaySoftwareNow

• **UpdateGatewaySoftwareNow** = ``"storagegateway:UpdateGatewaySoftwareNow"``

Grants permission to update the gateway virtual machine (VM) software

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewaySoftwareNow.html

#### Defined in

actions/storagegateway.ts:559

___

### UpdateMaintenanceStartTime

• **UpdateMaintenanceStartTime** = ``"storagegateway:UpdateMaintenanceStartTime"``

Grants permission to update a gateway's weekly maintenance start time informati
on, including day and time of the week. The maintenance time is the time in you
r gateway's time zone

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateMaintenanceStartTime.html

#### Defined in

actions/storagegateway.ts:567

___

### UpdateNFSFileShare

• **UpdateNFSFileShare** = ``"storagegateway:UpdateNFSFileShare"``

Grants permission to update a NFS file share

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateNFSFileShare.html

#### Defined in

actions/storagegateway.ts:573

___

### UpdateSMBFileShare

• **UpdateSMBFileShare** = ``"storagegateway:UpdateSMBFileShare"``

Grants permission to update a SMB file share

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBFileShare.html

#### Defined in

actions/storagegateway.ts:579

___

### UpdateSMBFileShareVisibility

• **UpdateSMBFileShareVisibility** = ``"storagegateway:UpdateSMBFileShareVisibility"``

Grants permission to update whether the shares on a gateway are visible in a ne
t view or browse list

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBFileShareVisibility.html

#### Defined in

actions/storagegateway.ts:586

___

### UpdateSMBLocalGroups

• **UpdateSMBLocalGroups** = ``"storagegateway:UpdateSMBLocalGroups"``

Grants permission to update the list of Active Directory users and groups that
have special permissions for SMB file shares on the gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBLocalGroups.html

#### Defined in

actions/storagegateway.ts:593

___

### UpdateSMBSecurityStrategy

• **UpdateSMBSecurityStrategy** = ``"storagegateway:UpdateSMBSecurityStrategy"``

Grants permission to update the SMB security strategy on a file gateway

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBSecurityStrategy.html

#### Defined in

actions/storagegateway.ts:599

___

### UpdateSnapshotSchedule

• **UpdateSnapshotSchedule** = ``"storagegateway:UpdateSnapshotSchedule"``

Grants permission to update a snapshot schedule configured for a gateway volume

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSnapshotSchedule.html

#### Defined in

actions/storagegateway.ts:605

___

### UpdateVTLDeviceType

• **UpdateVTLDeviceType** = ``"storagegateway:UpdateVTLDeviceType"``

Grants permission to update the type of medium changer in a gateway-VTL

See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateVTLDeviceType.html

#### Defined in

actions/storagegateway.ts:611
