[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSignerActions

# Enumeration: AwsSignerActions

All IAM policy actions for AWS Signer (SIGNER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssigner.html

2024-02-12T09:59:15.924Z

## Table of contents

### Enumeration Members

- [AddProfilePermission](AwsSignerActions.md#addprofilepermission)
- [CancelSigningProfile](AwsSignerActions.md#cancelsigningprofile)
- [DescribeSigningJob](AwsSignerActions.md#describesigningjob)
- [GetRevocationStatus](AwsSignerActions.md#getrevocationstatus)
- [GetSigningPlatform](AwsSignerActions.md#getsigningplatform)
- [GetSigningProfile](AwsSignerActions.md#getsigningprofile)
- [ListProfilePermissions](AwsSignerActions.md#listprofilepermissions)
- [ListSigningJobs](AwsSignerActions.md#listsigningjobs)
- [ListSigningPlatforms](AwsSignerActions.md#listsigningplatforms)
- [ListSigningProfiles](AwsSignerActions.md#listsigningprofiles)
- [ListTagsForResource](AwsSignerActions.md#listtagsforresource)
- [PutSigningProfile](AwsSignerActions.md#putsigningprofile)
- [RemoveProfilePermission](AwsSignerActions.md#removeprofilepermission)
- [RevokeSignature](AwsSignerActions.md#revokesignature)
- [RevokeSigningProfile](AwsSignerActions.md#revokesigningprofile)
- [SignPayload](AwsSignerActions.md#signpayload)
- [StartSigningJob](AwsSignerActions.md#startsigningjob)
- [TagResource](AwsSignerActions.md#tagresource)
- [UntagResource](AwsSignerActions.md#untagresource)

## Enumeration Members

### AddProfilePermission

• **AddProfilePermission** = ``"signer:AddProfilePermission"``

Grants permission to add cross-account permissions to a Signing Profile

See https://docs.aws.amazon.com/signer/latest/api/API_AddProfilePermission.html

#### Defined in

actions/signer.ts:17

___

### CancelSigningProfile

• **CancelSigningProfile** = ``"signer:CancelSigningProfile"``

Grants permission to change the state of a Signing Profile to CANCELED

See https://docs.aws.amazon.com/signer/latest/api/API_CancelSigningProfile.html

#### Defined in

actions/signer.ts:23

___

### DescribeSigningJob

• **DescribeSigningJob** = ``"signer:DescribeSigningJob"``

Grants permission to return information about a specific Signing Job

See https://docs.aws.amazon.com/signer/latest/api/API_DescribeSigningJob.html

#### Defined in

actions/signer.ts:29

___

### GetRevocationStatus

• **GetRevocationStatus** = ``"signer:GetRevocationStatus"``

Grants permission to query revocation info of signing resources

See https://docs.aws.amazon.com/signer/latest/api/API_GetRevocationStatus.html

#### Defined in

actions/signer.ts:35

___

### GetSigningPlatform

• **GetSigningPlatform** = ``"signer:GetSigningPlatform"``

Grants permission to return information about a specific Signing Platform

See https://docs.aws.amazon.com/signer/latest/api/API_GetSigningPlatform.html

#### Defined in

actions/signer.ts:41

___

### GetSigningProfile

• **GetSigningProfile** = ``"signer:GetSigningProfile"``

Grants permission to return information about a specific Signing Profile

See https://docs.aws.amazon.com/signer/latest/api/API_GetSigningProfile.html

#### Defined in

actions/signer.ts:47

___

### ListProfilePermissions

• **ListProfilePermissions** = ``"signer:ListProfilePermissions"``

Grants permission to list the cross-account permissions associated with a Signi
ng Profile

See https://docs.aws.amazon.com/signer/latest/api/API_ListProfilePermissions.html

#### Defined in

actions/signer.ts:54

___

### ListSigningJobs

• **ListSigningJobs** = ``"signer:ListSigningJobs"``

Grants permission to list all Signing Jobs in your account

See https://docs.aws.amazon.com/signer/latest/api/API_ListSigningJobs.html

#### Defined in

actions/signer.ts:60

___

### ListSigningPlatforms

• **ListSigningPlatforms** = ``"signer:ListSigningPlatforms"``

Grants permission to list all available Signing Platforms

See https://docs.aws.amazon.com/signer/latest/api/API_ListSigningPlatforms.html

#### Defined in

actions/signer.ts:66

___

### ListSigningProfiles

• **ListSigningProfiles** = ``"signer:ListSigningProfiles"``

Grants permission to list all Signing Profiles in your account

See https://docs.aws.amazon.com/signer/latest/api/API_ListSigningProfiles.html

#### Defined in

actions/signer.ts:72

___

### ListTagsForResource

• **ListTagsForResource** = ``"signer:ListTagsForResource"``

Grants permission to list the tags associated with a Signing Profile

See https://docs.aws.amazon.com/signer/latest/api/API_ListTagsForResource.html

#### Defined in

actions/signer.ts:78

___

### PutSigningProfile

• **PutSigningProfile** = ``"signer:PutSigningProfile"``

Grants permission to create a new Signing Profile

See https://docs.aws.amazon.com/signer/latest/api/API_PutSigningProfile.html

#### Defined in

actions/signer.ts:84

___

### RemoveProfilePermission

• **RemoveProfilePermission** = ``"signer:RemoveProfilePermission"``

Grants permission to remove cross-account permissions from a Signing Profile

See https://docs.aws.amazon.com/signer/latest/api/API_RemoveProfilePermission.html

#### Defined in

actions/signer.ts:90

___

### RevokeSignature

• **RevokeSignature** = ``"signer:RevokeSignature"``

Grants permission to change the state of a Signing Job to REVOKED

See https://docs.aws.amazon.com/signer/latest/api/API_RevokeSignature.html

#### Defined in

actions/signer.ts:96

___

### RevokeSigningProfile

• **RevokeSigningProfile** = ``"signer:RevokeSigningProfile"``

Grants permission to change the state of a Signing Profile to REVOKED

See https://docs.aws.amazon.com/signer/latest/api/API_RevokeSigningProfile.html

#### Defined in

actions/signer.ts:102

___

### SignPayload

• **SignPayload** = ``"signer:SignPayload"``

Grants permission to initiate a Signing Job on the provided payload

See https://docs.aws.amazon.com/signer/latest/api/API_SignPayload.html

#### Defined in

actions/signer.ts:108

___

### StartSigningJob

• **StartSigningJob** = ``"signer:StartSigningJob"``

Grants permission to initiate a Signing Job on the provided code

See https://docs.aws.amazon.com/signer/latest/api/API_StartSigningJob.html

#### Defined in

actions/signer.ts:114

___

### TagResource

• **TagResource** = ``"signer:TagResource"``

Grants permission to add one or more tags to a Signing Profile

See https://docs.aws.amazon.com/signer/latest/api/API_TagResource.html

#### Defined in

actions/signer.ts:120

___

### UntagResource

• **UntagResource** = ``"signer:UntagResource"``

Grants permission to remove one or more tags from a Signing Profile

See https://docs.aws.amazon.com/signer/latest/api/API_UntagResource.html

#### Defined in

actions/signer.ts:126
