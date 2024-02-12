[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIqPermissionActions

# Enumeration: AwsIqPermissionActions

All IAM policy actions for AWS IQ Permissions (IQ-PERMISSION)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiqpermissions.html

2024-02-12T09:57:55.346Z

## Table of contents

### Enumeration Members

- [ApproveAccessGrant](AwsIqPermissionActions.md#approveaccessgrant)
- [ApprovePermissionRequest](AwsIqPermissionActions.md#approvepermissionrequest)
- [AssumePermissionRole](AwsIqPermissionActions.md#assumepermissionrole)
- [CreatePermissionRequest](AwsIqPermissionActions.md#createpermissionrequest)
- [GetPermissionRequest](AwsIqPermissionActions.md#getpermissionrequest)
- [ListPermissionRequests](AwsIqPermissionActions.md#listpermissionrequests)
- [RejectPermissionRequest](AwsIqPermissionActions.md#rejectpermissionrequest)
- [RevokePermissionRequest](AwsIqPermissionActions.md#revokepermissionrequest)
- [WithdrawPermissionRequest](AwsIqPermissionActions.md#withdrawpermissionrequest)

## Enumeration Members

### ApproveAccessGrant

• **ApproveAccessGrant** = ``"iq-permission:ApproveAccessGrant"``

Grants permission to approve a permission request

See https://aws.amazon.com/iq/

#### Defined in

actions/iq-permission.ts:17

___

### ApprovePermissionRequest

• **ApprovePermissionRequest** = ``"iq-permission:ApprovePermissionRequest"``

Grants permission to approve a permission request

See https://aws.amazon.com/iq/

#### Defined in

actions/iq-permission.ts:23

___

### AssumePermissionRole

• **AssumePermissionRole** = ``"iq-permission:AssumePermissionRole"``

Grants permission to obtain a set of temporary security credentials for experts
which they can use to access buyers' AWS resources

See https://aws.amazon.com/iq/

#### Defined in

actions/iq-permission.ts:30

___

### CreatePermissionRequest

• **CreatePermissionRequest** = ``"iq-permission:CreatePermissionRequest"``

Grants permission to create a permission request

See https://aws.amazon.com/iq/

#### Defined in

actions/iq-permission.ts:36

___

### GetPermissionRequest

• **GetPermissionRequest** = ``"iq-permission:GetPermissionRequest"``

Grants permission to get a permission request

See https://aws.amazon.com/iq/

#### Defined in

actions/iq-permission.ts:42

___

### ListPermissionRequests

• **ListPermissionRequests** = ``"iq-permission:ListPermissionRequests"``

Grants permission to list permission requests

See https://aws.amazon.com/iq/

#### Defined in

actions/iq-permission.ts:48

___

### RejectPermissionRequest

• **RejectPermissionRequest** = ``"iq-permission:RejectPermissionRequest"``

Grants permission to reject a permission request

See https://aws.amazon.com/iq/

#### Defined in

actions/iq-permission.ts:54

___

### RevokePermissionRequest

• **RevokePermissionRequest** = ``"iq-permission:RevokePermissionRequest"``

Grants permission to revoke a permission request which was previously approved

See https://aws.amazon.com/iq/

#### Defined in

actions/iq-permission.ts:60

___

### WithdrawPermissionRequest

• **WithdrawPermissionRequest** = ``"iq-permission:WithdrawPermissionRequest"``

Grants permission to withdraw a permission request that has not been approved o
r declined

See https://aws.amazon.com/iq/

#### Defined in

actions/iq-permission.ts:67
