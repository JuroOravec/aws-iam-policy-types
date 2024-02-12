[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsOpsworksCmActions

# Enumeration: AwsOpsworksCmActions

All IAM policy actions for AWS OpsWorks Configuration Management (OPSWORKS-CM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworksconfigurationmanagement.html

2024-02-12T09:58:33.793Z

## Table of contents

### Enumeration Members

- [AssociateNode](AwsOpsworksCmActions.md#associatenode)
- [CreateBackup](AwsOpsworksCmActions.md#createbackup)
- [CreateServer](AwsOpsworksCmActions.md#createserver)
- [DeleteBackup](AwsOpsworksCmActions.md#deletebackup)
- [DeleteServer](AwsOpsworksCmActions.md#deleteserver)
- [DescribeAccountAttributes](AwsOpsworksCmActions.md#describeaccountattributes)
- [DescribeBackups](AwsOpsworksCmActions.md#describebackups)
- [DescribeEvents](AwsOpsworksCmActions.md#describeevents)
- [DescribeNodeAssociationStatus](AwsOpsworksCmActions.md#describenodeassociationstatus)
- [DescribeServers](AwsOpsworksCmActions.md#describeservers)
- [DisassociateNode](AwsOpsworksCmActions.md#disassociatenode)
- [ExportServerEngineAttribute](AwsOpsworksCmActions.md#exportserverengineattribute)
- [ListTagsForResource](AwsOpsworksCmActions.md#listtagsforresource)
- [RestoreServer](AwsOpsworksCmActions.md#restoreserver)
- [StartMaintenance](AwsOpsworksCmActions.md#startmaintenance)
- [TagResource](AwsOpsworksCmActions.md#tagresource)
- [UntagResource](AwsOpsworksCmActions.md#untagresource)
- [UpdateServer](AwsOpsworksCmActions.md#updateserver)
- [UpdateServerEngineAttributes](AwsOpsworksCmActions.md#updateserverengineattributes)

## Enumeration Members

### AssociateNode

• **AssociateNode** = ``"opsworks-cm:AssociateNode"``

Grants permission to associate a node to a configuration management server

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_AssociateNode.html

#### Defined in

actions/opsworks-cm.ts:17

___

### CreateBackup

• **CreateBackup** = ``"opsworks-cm:CreateBackup"``

Grants permission to create a backup for the specified server

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateBackup.html

#### Defined in

actions/opsworks-cm.ts:23

___

### CreateServer

• **CreateServer** = ``"opsworks-cm:CreateServer"``

Grants permission to create a new server

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateServer.html

#### Defined in

actions/opsworks-cm.ts:29

___

### DeleteBackup

• **DeleteBackup** = ``"opsworks-cm:DeleteBackup"``

Grants permission to delete the specified backup and possibly its S3 bucket

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteBackup.html

#### Defined in

actions/opsworks-cm.ts:35

___

### DeleteServer

• **DeleteServer** = ``"opsworks-cm:DeleteServer"``

Grants permission to delete the specified server with its corresponding CloudFo
rmation stack and possibly the S3 bucket

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteServer.html

#### Defined in

actions/opsworks-cm.ts:42

___

### DescribeAccountAttributes

• **DescribeAccountAttributes** = ``"opsworks-cm:DescribeAccountAttributes"``

Grants permission to describe the service limits for the user's account

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeAccountAttributes.html

#### Defined in

actions/opsworks-cm.ts:48

___

### DescribeBackups

• **DescribeBackups** = ``"opsworks-cm:DescribeBackups"``

Grants permission to describe a single backup, all backups of a specified serve
r or all backups of the user's account

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeBackups.html

#### Defined in

actions/opsworks-cm.ts:55

___

### DescribeEvents

• **DescribeEvents** = ``"opsworks-cm:DescribeEvents"``

Grants permission to describe all events of the specified server

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeEvents.html

#### Defined in

actions/opsworks-cm.ts:61

___

### DescribeNodeAssociationStatus

• **DescribeNodeAssociationStatus** = ``"opsworks-cm:DescribeNodeAssociationStatus"``

Grants permission to describe the association status for the specified node tok
en and the specified server

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeNodeAssociationStatus.html

#### Defined in

actions/opsworks-cm.ts:68

___

### DescribeServers

• **DescribeServers** = ``"opsworks-cm:DescribeServers"``

Grants permission to describe the specified server or all servers of the user's
account

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeServers.html

#### Defined in

actions/opsworks-cm.ts:75

___

### DisassociateNode

• **DisassociateNode** = ``"opsworks-cm:DisassociateNode"``

Grants permission to disassociate a specified node from a server

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DisassociateNode.html

#### Defined in

actions/opsworks-cm.ts:81

___

### ExportServerEngineAttribute

• **ExportServerEngineAttribute** = ``"opsworks-cm:ExportServerEngineAttribute"``

Grants permission to export an engine attribute from a server

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_ExportServerEngineAttribute.html

#### Defined in

actions/opsworks-cm.ts:87

___

### ListTagsForResource

• **ListTagsForResource** = ``"opsworks-cm:ListTagsForResource"``

Grants permission to list the tags that are applied to the specified server or
backup

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/opsworks-cm.ts:94

___

### RestoreServer

• **RestoreServer** = ``"opsworks-cm:RestoreServer"``

Grants permission to apply a backup to specified server. Possibly swaps out the
ec2-instance if specified

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_RestoreServer.html

#### Defined in

actions/opsworks-cm.ts:101

___

### StartMaintenance

• **StartMaintenance** = ``"opsworks-cm:StartMaintenance"``

Grants permission to start the server maintenance immediately

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_StartMaintenance.html

#### Defined in

actions/opsworks-cm.ts:107

___

### TagResource

• **TagResource** = ``"opsworks-cm:TagResource"``

Grants permission to apply tags to the specified server or backup

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_TagResource.html

#### Defined in

actions/opsworks-cm.ts:113

___

### UntagResource

• **UntagResource** = ``"opsworks-cm:UntagResource"``

Grants permission to remove tags from the specified server or backup

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UntagResource.html

#### Defined in

actions/opsworks-cm.ts:119

___

### UpdateServer

• **UpdateServer** = ``"opsworks-cm:UpdateServer"``

Grants permission to update general server settings

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServer.html

#### Defined in

actions/opsworks-cm.ts:125

___

### UpdateServerEngineAttributes

• **UpdateServerEngineAttributes** = ``"opsworks-cm:UpdateServerEngineAttributes"``

Grants permission to update server settings specific to the configuration manag
ement type

See https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServerEngineAttributes.html

#### Defined in

actions/opsworks-cm.ts:132
