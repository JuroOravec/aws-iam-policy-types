[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCloudhsmActions

# Enumeration: AwsCloudhsmActions

All IAM policy actions for AWS CloudHSM (CLOUDHSM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudhsm.html

2024-02-12T09:56:23.287Z

## Table of contents

### Enumeration Members

- [AddTagsToResource](AwsCloudhsmActions.md#addtagstoresource)
- [CopyBackupToRegion](AwsCloudhsmActions.md#copybackuptoregion)
- [CreateCluster](AwsCloudhsmActions.md#createcluster)
- [CreateHapg](AwsCloudhsmActions.md#createhapg)
- [CreateHsm](AwsCloudhsmActions.md#createhsm)
- [CreateLunaClient](AwsCloudhsmActions.md#createlunaclient)
- [DeleteBackup](AwsCloudhsmActions.md#deletebackup)
- [DeleteCluster](AwsCloudhsmActions.md#deletecluster)
- [DeleteHapg](AwsCloudhsmActions.md#deletehapg)
- [DeleteHsm](AwsCloudhsmActions.md#deletehsm)
- [DeleteLunaClient](AwsCloudhsmActions.md#deletelunaclient)
- [DescribeBackups](AwsCloudhsmActions.md#describebackups)
- [DescribeClusters](AwsCloudhsmActions.md#describeclusters)
- [DescribeHapg](AwsCloudhsmActions.md#describehapg)
- [DescribeHsm](AwsCloudhsmActions.md#describehsm)
- [DescribeLunaClient](AwsCloudhsmActions.md#describelunaclient)
- [GetConfig](AwsCloudhsmActions.md#getconfig)
- [InitializeCluster](AwsCloudhsmActions.md#initializecluster)
- [ListAvailableZones](AwsCloudhsmActions.md#listavailablezones)
- [ListHapgs](AwsCloudhsmActions.md#listhapgs)
- [ListHsms](AwsCloudhsmActions.md#listhsms)
- [ListLunaClients](AwsCloudhsmActions.md#listlunaclients)
- [ListTags](AwsCloudhsmActions.md#listtags)
- [ListTagsForResource](AwsCloudhsmActions.md#listtagsforresource)
- [ModifyBackupAttributes](AwsCloudhsmActions.md#modifybackupattributes)
- [ModifyCluster](AwsCloudhsmActions.md#modifycluster)
- [ModifyHapg](AwsCloudhsmActions.md#modifyhapg)
- [ModifyHsm](AwsCloudhsmActions.md#modifyhsm)
- [ModifyLunaClient](AwsCloudhsmActions.md#modifylunaclient)
- [RemoveTagsFromResource](AwsCloudhsmActions.md#removetagsfromresource)
- [RestoreBackup](AwsCloudhsmActions.md#restorebackup)
- [TagResource](AwsCloudhsmActions.md#tagresource)
- [UntagResource](AwsCloudhsmActions.md#untagresource)

## Enumeration Members

### AddTagsToResource

• **AddTagsToResource** = ``"cloudhsm:AddTagsToResource"``

Adds or overwrites one or more tags for the specified AWS CloudHSM resource

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_AddTagsToResource.html

#### Defined in

actions/cloudhsm.ts:17

___

### CopyBackupToRegion

• **CopyBackupToRegion** = ``"cloudhsm:CopyBackupToRegion"``

Grants permission to create a copy of a backup in the specified region

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CopyBackupToRegion.html

#### Defined in

actions/cloudhsm.ts:23

___

### CreateCluster

• **CreateCluster** = ``"cloudhsm:CreateCluster"``

Grants permission to create a new AWS CloudHSM cluster

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateCluster.html

#### Defined in

actions/cloudhsm.ts:29

___

### CreateHapg

• **CreateHapg** = ``"cloudhsm:CreateHapg"``

Creates a high-availability partition group

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateHapg.html

#### Defined in

actions/cloudhsm.ts:35

___

### CreateHsm

• **CreateHsm** = ``"cloudhsm:CreateHsm"``

Grants permission to create a new hardware security module (HSM) in the specifi
ed AWS CloudHSM cluster

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html

#### Defined in

actions/cloudhsm.ts:42

___

### CreateLunaClient

• **CreateLunaClient** = ``"cloudhsm:CreateLunaClient"``

Creates an HSM client

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateLunaClient.html

#### Defined in

actions/cloudhsm.ts:48

___

### DeleteBackup

• **DeleteBackup** = ``"cloudhsm:DeleteBackup"``

Grants permission to delete the specified CloudHSM backup

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteBackup.html

#### Defined in

actions/cloudhsm.ts:54

___

### DeleteCluster

• **DeleteCluster** = ``"cloudhsm:DeleteCluster"``

Grants permission to delete the specified AWS CloudHSM cluster

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteCluster.html

#### Defined in

actions/cloudhsm.ts:60

___

### DeleteHapg

• **DeleteHapg** = ``"cloudhsm:DeleteHapg"``

Deletes a high-availability partition group

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteHapg.html

#### Defined in

actions/cloudhsm.ts:66

___

### DeleteHsm

• **DeleteHsm** = ``"cloudhsm:DeleteHsm"``

Grants permission to delete the specified HSM

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteHsm.html

#### Defined in

actions/cloudhsm.ts:72

___

### DeleteLunaClient

• **DeleteLunaClient** = ``"cloudhsm:DeleteLunaClient"``

Deletes a client

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteLunaClient.html

#### Defined in

actions/cloudhsm.ts:78

___

### DescribeBackups

• **DescribeBackups** = ``"cloudhsm:DescribeBackups"``

Grants permission to get information about backups of AWS CloudHSM clusters

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeBackups.html

#### Defined in

actions/cloudhsm.ts:84

___

### DescribeClusters

• **DescribeClusters** = ``"cloudhsm:DescribeClusters"``

Grants permission to get information about AWS CloudHSM clusters

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html

#### Defined in

actions/cloudhsm.ts:90

___

### DescribeHapg

• **DescribeHapg** = ``"cloudhsm:DescribeHapg"``

Retrieves information about a high-availability partition group

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHapg.html

#### Defined in

actions/cloudhsm.ts:96

___

### DescribeHsm

• **DescribeHsm** = ``"cloudhsm:DescribeHsm"``

Retrieves information about an HSM. You can identify the HSM by its ARN or its
serial number

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHsm.html

#### Defined in

actions/cloudhsm.ts:103

___

### DescribeLunaClient

• **DescribeLunaClient** = ``"cloudhsm:DescribeLunaClient"``

Retrieves information about an HSM client

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeLunaClient.html

#### Defined in

actions/cloudhsm.ts:109

___

### GetConfig

• **GetConfig** = ``"cloudhsm:GetConfig"``

Gets the configuration files necessary to connect to all high availability part
ition groups the client is associated with

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_GetConfig.html

#### Defined in

actions/cloudhsm.ts:116

___

### InitializeCluster

• **InitializeCluster** = ``"cloudhsm:InitializeCluster"``

Grants permission to claim an AWS CloudHSM cluster

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_InitializeCluster.html

#### Defined in

actions/cloudhsm.ts:122

___

### ListAvailableZones

• **ListAvailableZones** = ``"cloudhsm:ListAvailableZones"``

Lists the Availability Zones that have available AWS CloudHSM capacity

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListAvailableZones.html

#### Defined in

actions/cloudhsm.ts:128

___

### ListHapgs

• **ListHapgs** = ``"cloudhsm:ListHapgs"``

Lists the high-availability partition groups for the account

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHapgs.html

#### Defined in

actions/cloudhsm.ts:134

___

### ListHsms

• **ListHsms** = ``"cloudhsm:ListHsms"``

Retrieves the identifiers of all of the HSMs provisioned for the current custom
er

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHsms.html

#### Defined in

actions/cloudhsm.ts:141

___

### ListLunaClients

• **ListLunaClients** = ``"cloudhsm:ListLunaClients"``

Lists all of the clients

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListLunaClients.html

#### Defined in

actions/cloudhsm.ts:147

___

### ListTags

• **ListTags** = ``"cloudhsm:ListTags"``

Grants permission to get a list of tags for the specified AWS CloudHSM cluster

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ListTags.html

#### Defined in

actions/cloudhsm.ts:153

___

### ListTagsForResource

• **ListTagsForResource** = ``"cloudhsm:ListTagsForResource"``

Returns a list of all tags for the specified AWS CloudHSM resource

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListTagsForResource.html

#### Defined in

actions/cloudhsm.ts:159

___

### ModifyBackupAttributes

• **ModifyBackupAttributes** = ``"cloudhsm:ModifyBackupAttributes"``

Grants permission to modify attributes for an AWS CloudHSM backup

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ModifyBackupAttributes.html

#### Defined in

actions/cloudhsm.ts:165

___

### ModifyCluster

• **ModifyCluster** = ``"cloudhsm:ModifyCluster"``

Grants permission to modify AWS CloudHSM cluster

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ModifyCluster.html

#### Defined in

actions/cloudhsm.ts:171

___

### ModifyHapg

• **ModifyHapg** = ``"cloudhsm:ModifyHapg"``

Modifies an existing high-availability partition group

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHapg.html

#### Defined in

actions/cloudhsm.ts:177

___

### ModifyHsm

• **ModifyHsm** = ``"cloudhsm:ModifyHsm"``

Modifies an HSM

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHsm.html

#### Defined in

actions/cloudhsm.ts:183

___

### ModifyLunaClient

• **ModifyLunaClient** = ``"cloudhsm:ModifyLunaClient"``

Modifies the certificate used by the client

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyLunaClient.html

#### Defined in

actions/cloudhsm.ts:189

___

### RemoveTagsFromResource

• **RemoveTagsFromResource** = ``"cloudhsm:RemoveTagsFromResource"``

Removes one or more tags from the specified AWS CloudHSM resource

See https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_RemoveTagsFromResource.html

#### Defined in

actions/cloudhsm.ts:195

___

### RestoreBackup

• **RestoreBackup** = ``"cloudhsm:RestoreBackup"``

Grants permission to restore the specified CloudHSM backup

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_RestoreBackup.html

#### Defined in

actions/cloudhsm.ts:201

___

### TagResource

• **TagResource** = ``"cloudhsm:TagResource"``

Grants permission to add or overwrite one or more tags for the specified AWS Cl
oudHSM cluster

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_TagResource.html

#### Defined in

actions/cloudhsm.ts:208

___

### UntagResource

• **UntagResource** = ``"cloudhsm:UntagResource"``

Grants permission to remove the specified tag or tags from the specified AWS Cl
oudHSM cluster

See https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_UntagResource.html

#### Defined in

actions/cloudhsm.ts:215
