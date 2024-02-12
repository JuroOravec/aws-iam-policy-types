[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsBackupStorageActions

# Enumeration: AwsBackupStorageActions

All IAM policy actions for AWS Backup storage (BACKUP-STORAGE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupstorage.html

2024-02-12T09:56:11.017Z

## Table of contents

### Enumeration Members

- [CommitBackupJob](AwsBackupStorageActions.md#commitbackupjob)
- [DeleteObjects](AwsBackupStorageActions.md#deleteobjects)
- [DescribeBackupJob](AwsBackupStorageActions.md#describebackupjob)
- [GetBaseBackup](AwsBackupStorageActions.md#getbasebackup)
- [GetChunk](AwsBackupStorageActions.md#getchunk)
- [GetIncrementalBaseBackup](AwsBackupStorageActions.md#getincrementalbasebackup)
- [GetObjectMetadata](AwsBackupStorageActions.md#getobjectmetadata)
- [ListChunks](AwsBackupStorageActions.md#listchunks)
- [ListObjects](AwsBackupStorageActions.md#listobjects)
- [MountCapsule](AwsBackupStorageActions.md#mountcapsule)
- [NotifyObjectComplete](AwsBackupStorageActions.md#notifyobjectcomplete)
- [PutChunk](AwsBackupStorageActions.md#putchunk)
- [PutObject](AwsBackupStorageActions.md#putobject)
- [StartObject](AwsBackupStorageActions.md#startobject)
- [UpdateObjectComplete](AwsBackupStorageActions.md#updateobjectcomplete)

## Enumeration Members

### CommitBackupJob

• **CommitBackupJob** = ``"backup-storage:CommitBackupJob"``

Grants permission to commit backup job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:17

___

### DeleteObjects

• **DeleteObjects** = ``"backup-storage:DeleteObjects"``

Grants permission to delete objects

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:23

___

### DescribeBackupJob

• **DescribeBackupJob** = ``"backup-storage:DescribeBackupJob"``

Grants permission to describe backup job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:29

___

### GetBaseBackup

• **GetBaseBackup** = ``"backup-storage:GetBaseBackup"``

Grants permission to get base backup

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:35

___

### GetChunk

• **GetChunk** = ``"backup-storage:GetChunk"``

Grants permission to get data from a recovery point for a restore job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:41

___

### GetIncrementalBaseBackup

• **GetIncrementalBaseBackup** = ``"backup-storage:GetIncrementalBaseBackup"``

Grants permission to get incremental base backup

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:47

___

### GetObjectMetadata

• **GetObjectMetadata** = ``"backup-storage:GetObjectMetadata"``

Grants permission to get metadata from a recovery point for a restore job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:53

___

### ListChunks

• **ListChunks** = ``"backup-storage:ListChunks"``

Grants permission to list data from a recovery point for a restore job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:59

___

### ListObjects

• **ListObjects** = ``"backup-storage:ListObjects"``

Grants permission to list data from a recovery point for a restore job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:65

___

### MountCapsule

• **MountCapsule** = ``"backup-storage:MountCapsule"``

Associates a KMS key to a backup vault

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html

#### Defined in

actions/backup-storage.ts:71

___

### NotifyObjectComplete

• **NotifyObjectComplete** = ``"backup-storage:NotifyObjectComplete"``

Grants permission to mark an uploaded data as completed for a backup job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:77

___

### PutChunk

• **PutChunk** = ``"backup-storage:PutChunk"``

Grants permission to upload data to an AWS Backup-managed recovery point for a
backup job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:84

___

### PutObject

• **PutObject** = ``"backup-storage:PutObject"``

Grants permission to put object

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:90

___

### StartObject

• **StartObject** = ``"backup-storage:StartObject"``

Grants permission to upload data to an AWS Backup-managed recovery point for a
backup job

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:97

___

### UpdateObjectComplete

• **UpdateObjectComplete** = ``"backup-storage:UpdateObjectComplete"``

Grants permission to update object complete

See https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html

#### Defined in

actions/backup-storage.ts:103
