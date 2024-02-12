[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRbinActions

# Enumeration: AwsRbinActions

All IAM policy actions for AWS Recycle Bin (RBIN)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrecyclebin.html

2024-02-12T09:58:50.720Z

## Table of contents

### Enumeration Members

- [CreateRule](AwsRbinActions.md#createrule)
- [DeleteRule](AwsRbinActions.md#deleterule)
- [GetRule](AwsRbinActions.md#getrule)
- [ListRules](AwsRbinActions.md#listrules)
- [ListTagsForResource](AwsRbinActions.md#listtagsforresource)
- [LockRule](AwsRbinActions.md#lockrule)
- [TagResource](AwsRbinActions.md#tagresource)
- [UnlockRule](AwsRbinActions.md#unlockrule)
- [UntagResource](AwsRbinActions.md#untagresource)
- [UpdateRule](AwsRbinActions.md#updaterule)

## Enumeration Members

### CreateRule

• **CreateRule** = ``"rbin:CreateRule"``

Grants permission to create a Recycle Bin retention rule

See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_CreateRule.html

#### Defined in

actions/rbin.ts:17

___

### DeleteRule

• **DeleteRule** = ``"rbin:DeleteRule"``

Grants permission to delete a Recycle Bin retention rule

See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_DeleteRule.html

#### Defined in

actions/rbin.ts:23

___

### GetRule

• **GetRule** = ``"rbin:GetRule"``

Grants permission to get detailed information about a Recycle Bin retention rul
e

See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_GetRule.html

#### Defined in

actions/rbin.ts:30

___

### ListRules

• **ListRules** = ``"rbin:ListRules"``

Grants permission to list the Recycle Bin retention rules in the Region

See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_ListRules.html

#### Defined in

actions/rbin.ts:36

___

### ListTagsForResource

• **ListTagsForResource** = ``"rbin:ListTagsForResource"``

Grants permission to list the tags associated with a resource

See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/rbin.ts:42

___

### LockRule

• **LockRule** = ``"rbin:LockRule"``

Grants permission to lock an existing Recycle Bin retention rule

See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_LockRule.html

#### Defined in

actions/rbin.ts:48

___

### TagResource

• **TagResource** = ``"rbin:TagResource"``

Grants permission to add or update tags of a resource

See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_TagResource.html

#### Defined in

actions/rbin.ts:54

___

### UnlockRule

• **UnlockRule** = ``"rbin:UnlockRule"``

Grants permission to unlock an existing Recycle Bin retention rule

See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_UnlockRule.html

#### Defined in

actions/rbin.ts:60

___

### UntagResource

• **UntagResource** = ``"rbin:UntagResource"``

Grants permission to remove tags associated with a resource

See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_UntagResource.html

#### Defined in

actions/rbin.ts:66

___

### UpdateRule

• **UpdateRule** = ``"rbin:UpdateRule"``

Grants permission to update an existing Recycle Bin retention rule

See https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_UpdateRule.html

#### Defined in

actions/rbin.ts:72
