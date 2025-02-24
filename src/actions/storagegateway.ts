// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Storage Gateway (STORAGEGATEWAY)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsstoragegateway.html
 *
 * 2025-02-24T21:49:51.330Z
 */
export enum AwsStoragegatewayActions {
  /**
   * Grants permission to activate the gateway you previously deployed on your host
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ActivateGateway.html
   */
  ActivateGateway = 'storagegateway:ActivateGateway',
  /**
   * Grants permission to configure one or more gateway local disks as cache for a c
   * ached-volume gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddCache.html
   */
  AddCache = 'storagegateway:AddCache',
  /**
   * Grants permission to add one or more tags to the specified resource
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddTagsToResource.html
   */
  AddTagsToResource = 'storagegateway:AddTagsToResource',
  /**
   * Grants permission to configure one or more gateway local disks as upload buffer
   * for a specified gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddUploadBuffer.html
   */
  AddUploadBuffer = 'storagegateway:AddUploadBuffer',
  /**
   * Grants permission to configure one or more gateway local disks as working stora
   * ge for a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddWorkingStorage.html
   */
  AddWorkingStorage = 'storagegateway:AddWorkingStorage',
  /**
   * Grants permission to move a tape to the target pool specified
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AssignTapePool.html
   */
  AssignTapePool = 'storagegateway:AssignTapePool',
  /**
   * Grants permission to associate an Amazon FSx file system with the Amazon FSx fi
   * le gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AssociateFileSystem.html
   */
  AssociateFileSystem = 'storagegateway:AssociateFileSystem',
  /**
   * Grants permission to connect a volume to an iSCSI connection and then attaches
   * the volume to the specified gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AttachVolume.html
   */
  AttachVolume = 'storagegateway:AttachVolume',
  /**
   * Grants permission to allow the governance retention lock on a pool to be bypass
   * ed
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/userguide/CreatingCustomTapePool.html#TapeRetentionLock
   */
  BypassGovernanceRetention = 'storagegateway:BypassGovernanceRetention',
  /**
   * Grants permission to cancel archiving of a virtual tape to the virtual tape she
   * lf (VTS) after the archiving process is initiated
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelArchival.html
   */
  CancelArchival = 'storagegateway:CancelArchival',
  /**
   * Grants permission to cancel a cache report
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelCacheReport.html
   */
  CancelCacheReport = 'storagegateway:CancelCacheReport',
  /**
   * Grants permission to cancel retrieval of a virtual tape from the virtual tape s
   * helf (VTS) to a gateway after the retrieval process is initiated
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelRetrieval.html
   */
  CancelRetrieval = 'storagegateway:CancelRetrieval',
  /**
   * Grants permission to create a cached volume on a specified cached gateway. This
   * operation is supported only for the gateway-cached volume architecture
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateCachediSCSIVolume.html
   */
  CreateCachediSCSIVolume = 'storagegateway:CreateCachediSCSIVolume',
  /**
   * Grants permission to create a NFS file share on an existing file gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html
   */
  CreateNFSFileShare = 'storagegateway:CreateNFSFileShare',
  /**
   * Grants permission to create a SMB file share on an existing file gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSMBFileShare.html
   */
  CreateSMBFileShare = 'storagegateway:CreateSMBFileShare',
  /**
   * Grants permission to initiate a snapshot of a volume
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshot.html
   */
  CreateSnapshot = 'storagegateway:CreateSnapshot',
  /**
   * Grants permission to initiate a snapshot of a gateway from a volume recovery po
   * int
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshotFromVolumeRecoveryPoint.html
   */
  CreateSnapshotFromVolumeRecoveryPoint = 'storagegateway:CreateSnapshotFromVolumeRecoveryPoint',
  /**
   * Grants permission to create a volume on a specified gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateStorediSCSIVolume.html
   */
  CreateStorediSCSIVolume = 'storagegateway:CreateStorediSCSIVolume',
  /**
   * Grants permission to create a tape pool
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapePool.html
   */
  CreateTapePool = 'storagegateway:CreateTapePool',
  /**
   * Grants permission to create a virtual tape by using your own barcode
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapeWithBarcode.html
   */
  CreateTapeWithBarcode = 'storagegateway:CreateTapeWithBarcode',
  /**
   * Grants permission to create one or more virtual tapes. You write data to the vi
   * rtual tapes and then archive the tapes
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapes.html
   */
  CreateTapes = 'storagegateway:CreateTapes',
  /**
   * Grants permission to delete the automatic tape creation policy configured on a
   * gateway-VTL
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteAutomaticTapeCreationPolicy.html
   */
  DeleteAutomaticTapeCreationPolicy = 'storagegateway:DeleteAutomaticTapeCreationPolicy',
  /**
   * Grants permission to delete the bandwidth rate limits of a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteBandwidthRateLimit.html
   */
  DeleteBandwidthRateLimit = 'storagegateway:DeleteBandwidthRateLimit',
  /**
   * Grants permission to delete the metadata associated with a cache report
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteCacheReport.html
   */
  DeleteCacheReport = 'storagegateway:DeleteCacheReport',
  /**
   * Grants permission to delete Challenge-Handshake Authentication Protocol (CHAP)
   * credentials for a specified iSCSI target and initiator pair
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteChapCredentials.html
   */
  DeleteChapCredentials = 'storagegateway:DeleteChapCredentials',
  /**
   * Grants permission to delete a file share from a file gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteFileShare.html
   */
  DeleteFileShare = 'storagegateway:DeleteFileShare',
  /**
   * Grants permission to delete a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteGateway.html
   */
  DeleteGateway = 'storagegateway:DeleteGateway',
  /**
   * Grants permission to delete a snapshot of a volume
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteSnapshotSchedule.html
   */
  DeleteSnapshotSchedule = 'storagegateway:DeleteSnapshotSchedule',
  /**
   * Grants permission to delete the specified virtual tape
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTape.html
   */
  DeleteTape = 'storagegateway:DeleteTape',
  /**
   * Grants permission to delete the specified virtual tape from the virtual tape sh
   * elf (VTS)
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapeArchive.html
   */
  DeleteTapeArchive = 'storagegateway:DeleteTapeArchive',
  /**
   * Grants permission to delete the specified tape pool
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapePool.html
   */
  DeleteTapePool = 'storagegateway:DeleteTapePool',
  /**
   * Grants permission to delete the specified gateway volume that you previously cr
   * eated using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteVolume.html
   */
  DeleteVolume = 'storagegateway:DeleteVolume',
  /**
   * Grants permission to get the information about the most recent high availabilit
   * y monitoring test that was performed on the gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeAvailabilityMonitorTest.html
   */
  DescribeAvailabilityMonitorTest = 'storagegateway:DescribeAvailabilityMonitorTest',
  /**
   * Grants permission to get the bandwidth rate limits of a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeBandwidthRateLimit.html
   */
  DescribeBandwidthRateLimit = 'storagegateway:DescribeBandwidthRateLimit',
  /**
   * Grants permission to get the bandwidth rate limit schedule of a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeBandwidthRateLimitSchedule.html
   */
  DescribeBandwidthRateLimitSchedule = 'storagegateway:DescribeBandwidthRateLimitSchedule',
  /**
   * Grants permission to get information about the cache of a gateway. This operati
   * on is supported only for the gateway-cached volume architecture
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCache.html
   */
  DescribeCache = 'storagegateway:DescribeCache',
  /**
   * Grants permission to get a description of a cache report
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCacheReport.html
   */
  DescribeCacheReport = 'storagegateway:DescribeCacheReport',
  /**
   * Grants permission to get a description of the gateway volumes specified in the
   * request. This operation is supported only for the gateway-cached volume archite
   * cture
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCachediSCSIVolumes.html
   */
  DescribeCachediSCSIVolumes = 'storagegateway:DescribeCachediSCSIVolumes',
  /**
   * Grants permission to get an array of Challenge-Handshake Authentication Protoco
   * l (CHAP) credentials information for a specified iSCSI target, one for each tar
   * get-initiator pair
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeChapCredentials.html
   */
  DescribeChapCredentials = 'storagegateway:DescribeChapCredentials',
  /**
   * Grants permission to get a description for one or more file system associations
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeFileSystemAssociations.html
   */
  DescribeFileSystemAssociations = 'storagegateway:DescribeFileSystemAssociations',
  /**
   * Grants permission to get metadata about a gateway such as its name, network int
   * erfaces, configured time zone, and the state (whether the gateway is running or
   * not)
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeGatewayInformation.html
   */
  DescribeGatewayInformation = 'storagegateway:DescribeGatewayInformation',
  /**
   * Grants permission to get your gateway's weekly maintenance start time including
   * the day and time of the week
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeMaintenanceStartTime.html
   */
  DescribeMaintenanceStartTime = 'storagegateway:DescribeMaintenanceStartTime',
  /**
   * Grants permission to get a description for one or more file shares from a file
   * gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeNFSFileShares.html
   */
  DescribeNFSFileShares = 'storagegateway:DescribeNFSFileShares',
  /**
   * Grants permission to get a description for one or more file shares from a file
   * gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBFileShares.html
   */
  DescribeSMBFileShares = 'storagegateway:DescribeSMBFileShares',
  /**
   * Grants permission to get a description of a Server Message Block (SMB) file sha
   * re settings from a file gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBSettings.html
   */
  DescribeSMBSettings = 'storagegateway:DescribeSMBSettings',
  /**
   * Grants permission to describe the snapshot schedule for the specified gateway v
   * olume
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSnapshotSchedule.html
   */
  DescribeSnapshotSchedule = 'storagegateway:DescribeSnapshotSchedule',
  /**
   * Grants permission to get the description of the gateway volumes specified in th
   * e request
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeStorediSCSIVolumes.html
   */
  DescribeStorediSCSIVolumes = 'storagegateway:DescribeStorediSCSIVolumes',
  /**
   * Grants permission to get a description of specified virtual tapes in the virtua
   * l tape shelf (VTS)
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeArchives.html
   */
  DescribeTapeArchives = 'storagegateway:DescribeTapeArchives',
  /**
   * Grants permission to get a list of virtual tape recovery points that are availa
   * ble for the specified gateway-VTL
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeRecoveryPoints.html
   */
  DescribeTapeRecoveryPoints = 'storagegateway:DescribeTapeRecoveryPoints',
  /**
   * Grants permission to get a description of the specified Amazon Resource Name (A
   * RN) of virtual tapes
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapes.html
   */
  DescribeTapes = 'storagegateway:DescribeTapes',
  /**
   * Grants permission to get information about the upload buffer of a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeUploadBuffer.html
   */
  DescribeUploadBuffer = 'storagegateway:DescribeUploadBuffer',
  /**
   * Grants permission to get a description of virtual tape library (VTL) devices fo
   * r the specified gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeVTLDevices.html
   */
  DescribeVTLDevices = 'storagegateway:DescribeVTLDevices',
  /**
   * Grants permission to get information about the working storage of a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeWorkingStorage.html
   */
  DescribeWorkingStorage = 'storagegateway:DescribeWorkingStorage',
  /**
   * Grants permission to disconnect a volume from an iSCSI connection and then deta
   * ches the volume from the specified gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DetachVolume.html
   */
  DetachVolume = 'storagegateway:DetachVolume',
  /**
   * Grants permission to disable a gateway when the gateway is no longer functionin
   * g
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DisableGateway.html
   */
  DisableGateway = 'storagegateway:DisableGateway',
  /**
   * Grants permission to disassociate an Amazon FSx file system from an Amazon FSx
   * file gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DisassociateFileSystem.html
   */
  DisassociateFileSystem = 'storagegateway:DisassociateFileSystem',
  /**
   * Grants permission to enable you to join an Active Directory Domain
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_JoinDomain.html
   */
  JoinDomain = 'storagegateway:JoinDomain',
  /**
   * Grants permission to list the automatic tape creation policies configured on th
   * e specified gateway-VTL or all gateway-VTLs owned by your AWS account
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListAutomaticTapeCreationPolicies.html
   */
  ListAutomaticTapeCreationPolicies = 'storagegateway:ListAutomaticTapeCreationPolicies',
  /**
   * Grants permission to get a list of the cache reports owned by your AWS account
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListCacheReports.html
   */
  ListCacheReports = 'storagegateway:ListCacheReports',
  /**
   * Grants permission to get a list of the file shares for a specific file gateway,
   * or the list of file shares owned by your AWS account
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListFileShares.html
   */
  ListFileShares = 'storagegateway:ListFileShares',
  /**
   * Grants permission to get a list of the file system associations for the specifi
   * ed gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListFileSystemAssociations.html
   */
  ListFileSystemAssociations = 'storagegateway:ListFileSystemAssociations',
  /**
   * Grants permission to list gateways owned by an AWS account in a region specifie
   * d in the request. The returned list is ordered by gateway Amazon Resource Name
   * (ARN)
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListGateways.html
   */
  ListGateways = 'storagegateway:ListGateways',
  /**
   * Grants permission to get a list of the gateway's local disks
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListLocalDisks.html
   */
  ListLocalDisks = 'storagegateway:ListLocalDisks',
  /**
   * Grants permission to get the tags that have been added to the specified resourc
   * e
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'storagegateway:ListTagsForResource',
  /**
   * Grants permission to list tape pools owned by your AWS account
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapePools.html
   */
  ListTapePools = 'storagegateway:ListTapePools',
  /**
   * Grants permission to list virtual tapes in your virtual tape library (VTL) and
   * your virtual tape shelf (VTS)
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapes.html
   */
  ListTapes = 'storagegateway:ListTapes',
  /**
   * Grants permission to list iSCSI initiators that are connected to a volume
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeInitiators.html
   */
  ListVolumeInitiators = 'storagegateway:ListVolumeInitiators',
  /**
   * Grants permission to list the recovery points for a specified gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeRecoveryPoints.html
   */
  ListVolumeRecoveryPoints = 'storagegateway:ListVolumeRecoveryPoints',
  /**
   * Grants permission to list the iSCSI stored volumes of a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumes.html
   */
  ListVolumes = 'storagegateway:ListVolumes',
  /**
   * Grants permission to send you a notification through CloudWatch Events when all
   * files written to your NFS file share have been uploaded to Amazon S3
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_NotifyWhenUploaded.html
   */
  NotifyWhenUploaded = 'storagegateway:NotifyWhenUploaded',
  /**
   * Grants permission to refresh the cache for the specified file share
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RefreshCache.html
   */
  RefreshCache = 'storagegateway:RefreshCache',
  /**
   * Grants permission to remove one or more tags from the specified resource
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RemoveTagsFromResource.html
   */
  RemoveTagsFromResource = 'storagegateway:RemoveTagsFromResource',
  /**
   * Grants permission to reset all cache disks that have encountered a error and ma
   * kes the disks available for reconfiguration as cache storage
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ResetCache.html
   */
  ResetCache = 'storagegateway:ResetCache',
  /**
   * Grants permission to retrieve an archived virtual tape from the virtual tape sh
   * elf (VTS) to a gateway-VTL
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeArchive.html
   */
  RetrieveTapeArchive = 'storagegateway:RetrieveTapeArchive',
  /**
   * Grants permission to retrieve the recovery point for the specified virtual tape
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeRecoveryPoint.html
   */
  RetrieveTapeRecoveryPoint = 'storagegateway:RetrieveTapeRecoveryPoint',
  /**
   * Grants permission to set the password for your VM local console
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetLocalConsolePassword.html
   */
  SetLocalConsolePassword = 'storagegateway:SetLocalConsolePassword',
  /**
   * Grants permission to set the password for SMB Guest user
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetSMBGuestPassword.html
   */
  SetSMBGuestPassword = 'storagegateway:SetSMBGuestPassword',
  /**
   * Grants permission to shut down a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ShutdownGateway.html
   */
  ShutdownGateway = 'storagegateway:ShutdownGateway',
  /**
   * Grants permission to start a test that verifies that the specified gateway is c
   * onfigured for High Availability monitoring in your host environment
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartAvailabilityMonitorTest.html
   */
  StartAvailabilityMonitorTest = 'storagegateway:StartAvailabilityMonitorTest',
  /**
   * Grants permission to start a cache report for an existing file share
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartCacheReport.html
   */
  StartCacheReport = 'storagegateway:StartCacheReport',
  /**
   * Grants permission to start a gateway that you previously shut down
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartGateway.html
   */
  StartGateway = 'storagegateway:StartGateway',
  /**
   * Grants permission to update the automatic tape creation policy configured on a
   * gateway-VTL
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateAutomaticTapeCreationPolicy.html
   */
  UpdateAutomaticTapeCreationPolicy = 'storagegateway:UpdateAutomaticTapeCreationPolicy',
  /**
   * Grants permission to update the bandwidth rate limits of a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateBandwidthRateLimit.html
   */
  UpdateBandwidthRateLimit = 'storagegateway:UpdateBandwidthRateLimit',
  /**
   * Grants permission to update the bandwidth rate limit schedule of a gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateBandwidthRateLimitSchedule.html
   */
  UpdateBandwidthRateLimitSchedule = 'storagegateway:UpdateBandwidthRateLimitSchedule',
  /**
   * Grants permission to update the Challenge-Handshake Authentication Protocol (CH
   * AP) credentials for a specified iSCSI target
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateChapCredentials.html
   */
  UpdateChapCredentials = 'storagegateway:UpdateChapCredentials',
  /**
   * Grants permission to update a file system association
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateFileSystemAssociation.html
   */
  UpdateFileSystemAssociation = 'storagegateway:UpdateFileSystemAssociation',
  /**
   * Grants permission to update a gateway's metadata, which includes the gateway's
   * name and time zone
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewayInformation.html
   */
  UpdateGatewayInformation = 'storagegateway:UpdateGatewayInformation',
  /**
   * Grants permission to update the gateway virtual machine (VM) software
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewaySoftwareNow.html
   */
  UpdateGatewaySoftwareNow = 'storagegateway:UpdateGatewaySoftwareNow',
  /**
   * Grants permission to update a gateway's weekly maintenance start time informati
   * on, including day and time of the week. The maintenance time is the time in you
   * r gateway's time zone
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateMaintenanceStartTime.html
   */
  UpdateMaintenanceStartTime = 'storagegateway:UpdateMaintenanceStartTime',
  /**
   * Grants permission to update a NFS file share
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateNFSFileShare.html
   */
  UpdateNFSFileShare = 'storagegateway:UpdateNFSFileShare',
  /**
   * Grants permission to update a SMB file share
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBFileShare.html
   */
  UpdateSMBFileShare = 'storagegateway:UpdateSMBFileShare',
  /**
   * Grants permission to update whether the shares on a gateway are visible in a ne
   * t view or browse list
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBFileShareVisibility.html
   */
  UpdateSMBFileShareVisibility = 'storagegateway:UpdateSMBFileShareVisibility',
  /**
   * Grants permission to update the list of Active Directory users and groups that
   * have special permissions for SMB file shares on the gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBLocalGroups.html
   */
  UpdateSMBLocalGroups = 'storagegateway:UpdateSMBLocalGroups',
  /**
   * Grants permission to update the SMB security strategy on a file gateway
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBSecurityStrategy.html
   */
  UpdateSMBSecurityStrategy = 'storagegateway:UpdateSMBSecurityStrategy',
  /**
   * Grants permission to update a snapshot schedule configured for a gateway volume
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSnapshotSchedule.html
   */
  UpdateSnapshotSchedule = 'storagegateway:UpdateSnapshotSchedule',
  /**
   * Grants permission to update the type of medium changer in a gateway-VTL
   *
   * See https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateVTLDeviceType.html
   */
  UpdateVTLDeviceType = 'storagegateway:UpdateVTLDeviceType',
}
