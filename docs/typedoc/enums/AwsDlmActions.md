[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDlmActions

# Enumeration: AwsDlmActions

All IAM policy actions for Amazon Data Lifecycle Manager (DLM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatalifecyclemanager.html

2024-02-12T09:56:51.778Z

## Table of contents

### Enumeration Members

- [CreateLifecyclePolicy](AwsDlmActions.md#createlifecyclepolicy)
- [DeleteLifecyclePolicy](AwsDlmActions.md#deletelifecyclepolicy)
- [GetLifecyclePolicies](AwsDlmActions.md#getlifecyclepolicies)
- [GetLifecyclePolicy](AwsDlmActions.md#getlifecyclepolicy)
- [ListTagsForResource](AwsDlmActions.md#listtagsforresource)
- [TagResource](AwsDlmActions.md#tagresource)
- [UntagResource](AwsDlmActions.md#untagresource)
- [UpdateLifecyclePolicy](AwsDlmActions.md#updatelifecyclepolicy)

## Enumeration Members

### CreateLifecyclePolicy

• **CreateLifecyclePolicy** = ``"dlm:CreateLifecyclePolicy"``

Grants permission to create a data lifecycle policy to manage the scheduled cre
ation and retention of Amazon EBS snapshots. You may have up to 100 policies

See https://docs.aws.amazon.com/dlm/latest/APIReference/API_CreateLifecyclePolicy.html

#### Defined in

actions/dlm.ts:18

___

### DeleteLifecyclePolicy

• **DeleteLifecyclePolicy** = ``"dlm:DeleteLifecyclePolicy"``

Grants permission to delete an existing data lifecycle policy. In addition, thi
s action halts the creation and deletion of snapshots that the policy specified
. Existing snapshots are not affected

See https://docs.aws.amazon.com/dlm/latest/APIReference/API_DeleteLifecyclePolicy.html

#### Defined in

actions/dlm.ts:26

___

### GetLifecyclePolicies

• **GetLifecyclePolicies** = ``"dlm:GetLifecyclePolicies"``

Grants permission to returns a list of summary descriptions of data lifecycle p
olicies

See https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicies.html

#### Defined in

actions/dlm.ts:33

___

### GetLifecyclePolicy

• **GetLifecyclePolicy** = ``"dlm:GetLifecyclePolicy"``

Grants permission to return a complete description of a single data lifecycle p
olicy

See https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicy.html

#### Defined in

actions/dlm.ts:40

___

### ListTagsForResource

• **ListTagsForResource** = ``"dlm:ListTagsForResource"``

Grants permission to list the tags associated with a resource

See https://docs.aws.amazon.com/dlm/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/dlm.ts:46

___

### TagResource

• **TagResource** = ``"dlm:TagResource"``

Grants permission to add or update tags of a resource

See https://docs.aws.amazon.com/dlm/latest/APIReference/API_TagResource.html

#### Defined in

actions/dlm.ts:52

___

### UntagResource

• **UntagResource** = ``"dlm:UntagResource"``

Grants permission to remove tags associated with a resource

See https://docs.aws.amazon.com/dlm/latest/APIReference/API_UntagResource.html

#### Defined in

actions/dlm.ts:58

___

### UpdateLifecyclePolicy

• **UpdateLifecyclePolicy** = ``"dlm:UpdateLifecyclePolicy"``

Grants permission to update an existing data lifecycle policy

See https://docs.aws.amazon.com/dlm/latest/APIReference/API_UpdateLifecyclePolicy.html

#### Defined in

actions/dlm.ts:64
