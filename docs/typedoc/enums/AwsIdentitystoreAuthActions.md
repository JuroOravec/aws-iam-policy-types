[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIdentitystoreAuthActions

# Enumeration: AwsIdentitystoreAuthActions

All IAM policy actions for AWS Identity Store Auth (IDENTITYSTORE-AUTH)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystoreauth.html

2024-02-12T09:57:41.431Z

## Table of contents

### Enumeration Members

- [BatchDeleteSession](AwsIdentitystoreAuthActions.md#batchdeletesession)
- [BatchGetSession](AwsIdentitystoreAuthActions.md#batchgetsession)
- [ListSessions](AwsIdentitystoreAuthActions.md#listsessions)

## Enumeration Members

### BatchDeleteSession

• **BatchDeleteSession** = ``"identitystore-auth:BatchDeleteSession"``

Grants permission to delete a batch of specified sessions

See https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-app-session.html

#### Defined in

actions/identitystore-auth.ts:17

___

### BatchGetSession

• **BatchGetSession** = ``"identitystore-auth:BatchGetSession"``

Grants permission to return session attributes for a batch of specified session
s

See https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-app-session.html

#### Defined in

actions/identitystore-auth.ts:24

___

### ListSessions

• **ListSessions** = ``"identitystore-auth:ListSessions"``

Grants permission to retrieve a list of active sessions for the specified user

See https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-app-session.html

#### Defined in

actions/identitystore-auth.ts:30
