[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIdentitySyncActions

# Enumeration: AwsIdentitySyncActions

All IAM policy actions for AWS Identity Sync (IDENTITY-SYNC)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitysync.html

2024-02-12T09:57:41.932Z

## Table of contents

### Enumeration Members

- [CreateSyncFilter](AwsIdentitySyncActions.md#createsyncfilter)
- [CreateSyncProfile](AwsIdentitySyncActions.md#createsyncprofile)
- [CreateSyncTarget](AwsIdentitySyncActions.md#createsynctarget)
- [DeleteSyncFilter](AwsIdentitySyncActions.md#deletesyncfilter)
- [DeleteSyncProfile](AwsIdentitySyncActions.md#deletesyncprofile)
- [DeleteSyncTarget](AwsIdentitySyncActions.md#deletesynctarget)
- [GetSyncProfile](AwsIdentitySyncActions.md#getsyncprofile)
- [GetSyncTarget](AwsIdentitySyncActions.md#getsynctarget)
- [ListSyncFilters](AwsIdentitySyncActions.md#listsyncfilters)
- [StartSync](AwsIdentitySyncActions.md#startsync)
- [StopSync](AwsIdentitySyncActions.md#stopsync)
- [UpdateSyncTarget](AwsIdentitySyncActions.md#updatesynctarget)

## Enumeration Members

### CreateSyncFilter

• **CreateSyncFilter** = ``"identity-sync:CreateSyncFilter"``

Grants permission to create a sync filter on the sync profile

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:17

___

### CreateSyncProfile

• **CreateSyncProfile** = ``"identity-sync:CreateSyncProfile"``

Grants permission to create a sync profile for the identity source

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:23

___

### CreateSyncTarget

• **CreateSyncTarget** = ``"identity-sync:CreateSyncTarget"``

Grants permission to create a sync target for the identity source

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:29

___

### DeleteSyncFilter

• **DeleteSyncFilter** = ``"identity-sync:DeleteSyncFilter"``

Grants permission to delete a sync filter from the sync profile

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:35

___

### DeleteSyncProfile

• **DeleteSyncProfile** = ``"identity-sync:DeleteSyncProfile"``

Grants permission to delete a sync profile from the source

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:41

___

### DeleteSyncTarget

• **DeleteSyncTarget** = ``"identity-sync:DeleteSyncTarget"``

Grants permission to delete a sync target from the source

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:47

___

### GetSyncProfile

• **GetSyncProfile** = ``"identity-sync:GetSyncProfile"``

Grants permission to retrieve a sync profile by using a sync profile name

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:53

___

### GetSyncTarget

• **GetSyncTarget** = ``"identity-sync:GetSyncTarget"``

Grants permission to retrieve a sync target from the sync profile

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:59

___

### ListSyncFilters

• **ListSyncFilters** = ``"identity-sync:ListSyncFilters"``

Grants permission to list the sync filters from the sync profile

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:65

___

### StartSync

• **StartSync** = ``"identity-sync:StartSync"``

Grants permission to start a sync process or to resume a sync process that was
previously paused

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:72

___

### StopSync

• **StopSync** = ``"identity-sync:StopSync"``

Grants permission to stop any planned sync process in the sync schedule from st
arting

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:79

___

### UpdateSyncTarget

• **UpdateSyncTarget** = ``"identity-sync:UpdateSyncTarget"``

Grants permission to update a sync target on the sync profile

See https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html

#### Defined in

actions/identity-sync.ts:85
