[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsElasticfilesystemActions

# Enumeration: AwsElasticfilesystemActions

All IAM policy actions for Amazon Elastic File System (ELASTICFILESYSTEM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticfilesystem.html

2024-02-12T09:57:09.461Z

## Table of contents

### Enumeration Members

- [Backup](AwsElasticfilesystemActions.md#backup)
- [ClientMount](AwsElasticfilesystemActions.md#clientmount)
- [ClientRootAccess](AwsElasticfilesystemActions.md#clientrootaccess)
- [ClientWrite](AwsElasticfilesystemActions.md#clientwrite)
- [CreateAccessPoint](AwsElasticfilesystemActions.md#createaccesspoint)
- [CreateFileSystem](AwsElasticfilesystemActions.md#createfilesystem)
- [CreateMountTarget](AwsElasticfilesystemActions.md#createmounttarget)
- [CreateReplicationConfiguration](AwsElasticfilesystemActions.md#createreplicationconfiguration)
- [CreateTags](AwsElasticfilesystemActions.md#createtags)
- [DeleteAccessPoint](AwsElasticfilesystemActions.md#deleteaccesspoint)
- [DeleteFileSystem](AwsElasticfilesystemActions.md#deletefilesystem)
- [DeleteFileSystemPolicy](AwsElasticfilesystemActions.md#deletefilesystempolicy)
- [DeleteMountTarget](AwsElasticfilesystemActions.md#deletemounttarget)
- [DeleteReplicationConfiguration](AwsElasticfilesystemActions.md#deletereplicationconfiguration)
- [DeleteTags](AwsElasticfilesystemActions.md#deletetags)
- [DescribeAccessPoints](AwsElasticfilesystemActions.md#describeaccesspoints)
- [DescribeAccountPreferences](AwsElasticfilesystemActions.md#describeaccountpreferences)
- [DescribeBackupPolicy](AwsElasticfilesystemActions.md#describebackuppolicy)
- [DescribeFileSystemPolicy](AwsElasticfilesystemActions.md#describefilesystempolicy)
- [DescribeFileSystems](AwsElasticfilesystemActions.md#describefilesystems)
- [DescribeLifecycleConfiguration](AwsElasticfilesystemActions.md#describelifecycleconfiguration)
- [DescribeMountTargetSecurityGroups](AwsElasticfilesystemActions.md#describemounttargetsecuritygroups)
- [DescribeMountTargets](AwsElasticfilesystemActions.md#describemounttargets)
- [DescribeReplicationConfigurations](AwsElasticfilesystemActions.md#describereplicationconfigurations)
- [DescribeTags](AwsElasticfilesystemActions.md#describetags)
- [ListTagsForResource](AwsElasticfilesystemActions.md#listtagsforresource)
- [ModifyMountTargetSecurityGroups](AwsElasticfilesystemActions.md#modifymounttargetsecuritygroups)
- [PutAccountPreferences](AwsElasticfilesystemActions.md#putaccountpreferences)
- [PutBackupPolicy](AwsElasticfilesystemActions.md#putbackuppolicy)
- [PutFileSystemPolicy](AwsElasticfilesystemActions.md#putfilesystempolicy)
- [PutLifecycleConfiguration](AwsElasticfilesystemActions.md#putlifecycleconfiguration)
- [Restore](AwsElasticfilesystemActions.md#restore)
- [TagResource](AwsElasticfilesystemActions.md#tagresource)
- [UntagResource](AwsElasticfilesystemActions.md#untagresource)
- [UpdateFileSystem](AwsElasticfilesystemActions.md#updatefilesystem)
- [UpdateFileSystemProtection](AwsElasticfilesystemActions.md#updatefilesystemprotection)

## Enumeration Members

### Backup

• **Backup** = ``"elasticfilesystem:Backup"``

Grants permission to start a backup job for an existing file system

See https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html

#### Defined in

actions/elasticfilesystem.ts:17

___

### ClientMount

• **ClientMount** = ``"elasticfilesystem:ClientMount"``

Grants permission to allow an NFS client read-access to a file system

See https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html

#### Defined in

actions/elasticfilesystem.ts:23

___

### ClientRootAccess

• **ClientRootAccess** = ``"elasticfilesystem:ClientRootAccess"``

Grants permission to allow an NFS client root-access to a file system

See https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html

#### Defined in

actions/elasticfilesystem.ts:29

___

### ClientWrite

• **ClientWrite** = ``"elasticfilesystem:ClientWrite"``

Grants permission to allow an NFS client write-access to a file system

See https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html

#### Defined in

actions/elasticfilesystem.ts:35

___

### CreateAccessPoint

• **CreateAccessPoint** = ``"elasticfilesystem:CreateAccessPoint"``

Grants permission to create an access point for the specified file system

See https://docs.aws.amazon.com/efs/latest/ug/API_CreateAccessPoint.html

#### Defined in

actions/elasticfilesystem.ts:41

___

### CreateFileSystem

• **CreateFileSystem** = ``"elasticfilesystem:CreateFileSystem"``

Grants permission to create a new, empty file system

See https://docs.aws.amazon.com/efs/latest/ug/API_CreateFileSystem.html

#### Defined in

actions/elasticfilesystem.ts:47

___

### CreateMountTarget

• **CreateMountTarget** = ``"elasticfilesystem:CreateMountTarget"``

Grants permission to create a mount target for a file system

See https://docs.aws.amazon.com/efs/latest/ug/API_CreateMountTarget.html

#### Defined in

actions/elasticfilesystem.ts:53

___

### CreateReplicationConfiguration

• **CreateReplicationConfiguration** = ``"elasticfilesystem:CreateReplicationConfiguration"``

Grants permission to create a new replication configuration

See https://docs.aws.amazon.com/efs/latest/ug/API_CreateReplicationConfiguration.html

#### Defined in

actions/elasticfilesystem.ts:59

___

### CreateTags

• **CreateTags** = ``"elasticfilesystem:CreateTags"``

Grants permission to create or overwrite tags associated with a file system; de
precated, see TagResource

See https://docs.aws.amazon.com/efs/latest/ug/API_CreateTags.html

#### Defined in

actions/elasticfilesystem.ts:66

___

### DeleteAccessPoint

• **DeleteAccessPoint** = ``"elasticfilesystem:DeleteAccessPoint"``

Grants permission to delete the specified access point

See https://docs.aws.amazon.com/efs/latest/ug/API_DeleteAccessPoint.html

#### Defined in

actions/elasticfilesystem.ts:72

___

### DeleteFileSystem

• **DeleteFileSystem** = ``"elasticfilesystem:DeleteFileSystem"``

Grants permission to delete a file system, permanently severing access to its c
ontents

See https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystem.html

#### Defined in

actions/elasticfilesystem.ts:79

___

### DeleteFileSystemPolicy

• **DeleteFileSystemPolicy** = ``"elasticfilesystem:DeleteFileSystemPolicy"``

Grants permission to delete the resource-level policy for a file system

See https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystemPolicy.html

#### Defined in

actions/elasticfilesystem.ts:85

___

### DeleteMountTarget

• **DeleteMountTarget** = ``"elasticfilesystem:DeleteMountTarget"``

Grants permission to delete the specified mount target

See https://docs.aws.amazon.com/efs/latest/ug/API_DeleteMountTarget.html

#### Defined in

actions/elasticfilesystem.ts:91

___

### DeleteReplicationConfiguration

• **DeleteReplicationConfiguration** = ``"elasticfilesystem:DeleteReplicationConfiguration"``

Grants permission to delete a replication configuration

See https://docs.aws.amazon.com/efs/latest/ug/API_DeleteReplicationConfiguration.html

#### Defined in

actions/elasticfilesystem.ts:97

___

### DeleteTags

• **DeleteTags** = ``"elasticfilesystem:DeleteTags"``

Grants permission to delete the specified tags from a file system; deprecated,
see UntagResource

See https://docs.aws.amazon.com/efs/latest/ug/API_DeleteTags.html

#### Defined in

actions/elasticfilesystem.ts:104

___

### DescribeAccessPoints

• **DescribeAccessPoints** = ``"elasticfilesystem:DescribeAccessPoints"``

Grants permission to view the descriptions of Amazon EFS access points

See https://docs.aws.amazon.com/efs/latest/ug/API_DescribeAccessPoints.html

#### Defined in

actions/elasticfilesystem.ts:110

___

### DescribeAccountPreferences

• **DescribeAccountPreferences** = ``"elasticfilesystem:DescribeAccountPreferences"``

Grants permission to view the account preferences in effect for an account

See https://docs.aws.amazon.com/efs/latest/ug/API_DescribeAccountPreferences.html

#### Defined in

actions/elasticfilesystem.ts:116

___

### DescribeBackupPolicy

• **DescribeBackupPolicy** = ``"elasticfilesystem:DescribeBackupPolicy"``

Grants permission to view the BackupPolicy object for an Amazon EFS file system

See https://docs.aws.amazon.com/efs/latest/ug/API_DescribeBackupPolicy.html

#### Defined in

actions/elasticfilesystem.ts:122

___

### DescribeFileSystemPolicy

• **DescribeFileSystemPolicy** = ``"elasticfilesystem:DescribeFileSystemPolicy"``

Grants permission to view the resource-level policy for an Amazon EFS file syst
em

See https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystemPolicy.html

#### Defined in

actions/elasticfilesystem.ts:129

___

### DescribeFileSystems

• **DescribeFileSystems** = ``"elasticfilesystem:DescribeFileSystems"``

Grants permission to view the description of an Amazon EFS file system specifie
d by file system CreationToken or FileSystemId; or to view the description of a
ll file systems owned by the caller's AWS account in the AWS region of the endp
oint that is being called

See https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystems.html

#### Defined in

actions/elasticfilesystem.ts:138

___

### DescribeLifecycleConfiguration

• **DescribeLifecycleConfiguration** = ``"elasticfilesystem:DescribeLifecycleConfiguration"``

Grants permission to view the LifecycleConfiguration object for an Amazon EFS f
ile system

See https://docs.aws.amazon.com/efs/latest/ug/API_DescribeLifecycleConfiguration.html

#### Defined in

actions/elasticfilesystem.ts:145

___

### DescribeMountTargetSecurityGroups

• **DescribeMountTargetSecurityGroups** = ``"elasticfilesystem:DescribeMountTargetSecurityGroups"``

Grants permission to view the security groups in effect for a mount target

See https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargetSecurityGroups.html

#### Defined in

actions/elasticfilesystem.ts:151

___

### DescribeMountTargets

• **DescribeMountTargets** = ``"elasticfilesystem:DescribeMountTargets"``

Grants permission to view the descriptions of all mount targets, or a specific
mount target, for a file system

See https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargets.html

#### Defined in

actions/elasticfilesystem.ts:158

___

### DescribeReplicationConfigurations

• **DescribeReplicationConfigurations** = ``"elasticfilesystem:DescribeReplicationConfigurations"``

Grants permission to view the description of an Amazon EFS replication configur
ation specified by FileSystemId; or to view the description of all replication
configurations owned by the caller's AWS account in the AWS region of the endpo
int that is being called

See https://docs.aws.amazon.com/efs/latest/ug/API_DescribeReplicationConfigurations.html

#### Defined in

actions/elasticfilesystem.ts:167

___

### DescribeTags

• **DescribeTags** = ``"elasticfilesystem:DescribeTags"``

Grants permission to view the tags associated with a file system

See https://docs.aws.amazon.com/efs/latest/ug/API_DescribeTags.html

#### Defined in

actions/elasticfilesystem.ts:173

___

### ListTagsForResource

• **ListTagsForResource** = ``"elasticfilesystem:ListTagsForResource"``

Grants permission to view the tags associated with the specified Amazon EFS res
ource

See https://docs.aws.amazon.com/efs/latest/ug/API_ListTagsForResource.html

#### Defined in

actions/elasticfilesystem.ts:180

___

### ModifyMountTargetSecurityGroups

• **ModifyMountTargetSecurityGroups** = ``"elasticfilesystem:ModifyMountTargetSecurityGroups"``

Grants permission to modify the set of security groups in effect for a mount ta
rget

See https://docs.aws.amazon.com/efs/latest/ug/API_ModifyMountTargetSecurityGroups.html

#### Defined in

actions/elasticfilesystem.ts:187

___

### PutAccountPreferences

• **PutAccountPreferences** = ``"elasticfilesystem:PutAccountPreferences"``

Grants permission to set the account preferences of an account

See https://docs.aws.amazon.com/efs/latest/ug/API_PutAccountPreferences.html

#### Defined in

actions/elasticfilesystem.ts:193

___

### PutBackupPolicy

• **PutBackupPolicy** = ``"elasticfilesystem:PutBackupPolicy"``

Grants permission to enable or disable automatic backups with AWS Backup by cre
ating a new BackupPolicy object

See https://docs.aws.amazon.com/efs/latest/ug/API_PutBackupPolicy.html

#### Defined in

actions/elasticfilesystem.ts:200

___

### PutFileSystemPolicy

• **PutFileSystemPolicy** = ``"elasticfilesystem:PutFileSystemPolicy"``

Grants permission to apply a resource-level policy that defines the actions all
owed or denied from given actors for the specified file system

See https://docs.aws.amazon.com/efs/latest/ug/API_PutFileSystemPolicy.html

#### Defined in

actions/elasticfilesystem.ts:207

___

### PutLifecycleConfiguration

• **PutLifecycleConfiguration** = ``"elasticfilesystem:PutLifecycleConfiguration"``

Grants permission to enable lifecycle management by creating a new LifecycleCon
figuration object

See https://docs.aws.amazon.com/efs/latest/ug/API_PutLifecycleConfiguration.html

#### Defined in

actions/elasticfilesystem.ts:214

___

### Restore

• **Restore** = ``"elasticfilesystem:Restore"``

Grants permission to start a restore job for a backup of a file system

See https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html

#### Defined in

actions/elasticfilesystem.ts:220

___

### TagResource

• **TagResource** = ``"elasticfilesystem:TagResource"``

Grants permission to create or overwrite tags associated with the specified Ama
zon EFS resource

See https://docs.aws.amazon.com/efs/latest/ug/API_TagResource.html

#### Defined in

actions/elasticfilesystem.ts:227

___

### UntagResource

• **UntagResource** = ``"elasticfilesystem:UntagResource"``

Grants permission to delete the specified tags from an Amazon EFS resource

See https://docs.aws.amazon.com/efs/latest/ug/API_UntagResource.html

#### Defined in

actions/elasticfilesystem.ts:233

___

### UpdateFileSystem

• **UpdateFileSystem** = ``"elasticfilesystem:UpdateFileSystem"``

Grants permission to update the throughput mode or the amount of provisioned th
roughput of an existing file system

See https://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystem.html

#### Defined in

actions/elasticfilesystem.ts:240

___

### UpdateFileSystemProtection

• **UpdateFileSystemProtection** = ``"elasticfilesystem:UpdateFileSystemProtection"``

Grants permission to update the file system protection of an existing file syst
em

See https://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystemProtection.html

#### Defined in

actions/elasticfilesystem.ts:247
