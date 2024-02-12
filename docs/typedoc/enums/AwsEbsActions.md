[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEbsActions

# Enumeration: AwsEbsActions

All IAM policy actions for Amazon Elastic Block Store (EBS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html

2024-02-12T09:57:06.633Z

## Table of contents

### Enumeration Members

- [CompleteSnapshot](AwsEbsActions.md#completesnapshot)
- [GetSnapshotBlock](AwsEbsActions.md#getsnapshotblock)
- [ListChangedBlocks](AwsEbsActions.md#listchangedblocks)
- [ListSnapshotBlocks](AwsEbsActions.md#listsnapshotblocks)
- [PutSnapshotBlock](AwsEbsActions.md#putsnapshotblock)
- [StartSnapshot](AwsEbsActions.md#startsnapshot)

## Enumeration Members

### CompleteSnapshot

• **CompleteSnapshot** = ``"ebs:CompleteSnapshot"``

Grants permission to seal and complete the snapshot after all of the required b
locks of data have been written to it

See https://docs.aws.amazon.com/ebs/latest/APIReference/API_CompleteSnapshot.html

#### Defined in

actions/ebs.ts:18

___

### GetSnapshotBlock

• **GetSnapshotBlock** = ``"ebs:GetSnapshotBlock"``

Grants permission to return the data of a block in an Amazon Elastic Block Stor
e (EBS) snapshot

See https://docs.aws.amazon.com/ebs/latest/APIReference/API_GetSnapshotBlock.html

#### Defined in

actions/ebs.ts:25

___

### ListChangedBlocks

• **ListChangedBlocks** = ``"ebs:ListChangedBlocks"``

Grants permission to list the blocks that are different between two Amazon Elas
tic Block Store (EBS) snapshots of the same volume/snapshot lineage

See https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListChangedBlocks.html

#### Defined in

actions/ebs.ts:32

___

### ListSnapshotBlocks

• **ListSnapshotBlocks** = ``"ebs:ListSnapshotBlocks"``

Grants permission to list the blocks in an Amazon Elastic Block Store (EBS) sna
pshot

See https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListSnapshotBlocks.html

#### Defined in

actions/ebs.ts:39

___

### PutSnapshotBlock

• **PutSnapshotBlock** = ``"ebs:PutSnapshotBlock"``

Grants permission to write a block of data to a snapshot created by the StartSn
apshot operation

See https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html

#### Defined in

actions/ebs.ts:46

___

### StartSnapshot

• **StartSnapshot** = ``"ebs:StartSnapshot"``

Grants permission to create a new EBS snapshot

See https://docs.aws.amazon.com/ebs/latest/APIReference/API_StartSnapshot.html

#### Defined in

actions/ebs.ts:52
