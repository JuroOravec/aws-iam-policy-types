[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSecretsmanagerActions

# Enumeration: AwsSecretsmanagerActions

All IAM policy actions for AWS Secrets Manager (SECRETSMANAGER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html

2024-02-12T09:59:09.107Z

## Table of contents

### Enumeration Members

- [BatchGetSecretValue](AwsSecretsmanagerActions.md#batchgetsecretvalue)
- [CancelRotateSecret](AwsSecretsmanagerActions.md#cancelrotatesecret)
- [CreateSecret](AwsSecretsmanagerActions.md#createsecret)
- [DeleteResourcePolicy](AwsSecretsmanagerActions.md#deleteresourcepolicy)
- [DeleteSecret](AwsSecretsmanagerActions.md#deletesecret)
- [DescribeSecret](AwsSecretsmanagerActions.md#describesecret)
- [GetRandomPassword](AwsSecretsmanagerActions.md#getrandompassword)
- [GetResourcePolicy](AwsSecretsmanagerActions.md#getresourcepolicy)
- [GetSecretValue](AwsSecretsmanagerActions.md#getsecretvalue)
- [ListSecretVersionIds](AwsSecretsmanagerActions.md#listsecretversionids)
- [ListSecrets](AwsSecretsmanagerActions.md#listsecrets)
- [PutResourcePolicy](AwsSecretsmanagerActions.md#putresourcepolicy)
- [PutSecretValue](AwsSecretsmanagerActions.md#putsecretvalue)
- [RemoveRegionsFromReplication](AwsSecretsmanagerActions.md#removeregionsfromreplication)
- [ReplicateSecretToRegions](AwsSecretsmanagerActions.md#replicatesecrettoregions)
- [RestoreSecret](AwsSecretsmanagerActions.md#restoresecret)
- [RotateSecret](AwsSecretsmanagerActions.md#rotatesecret)
- [StopReplicationToReplica](AwsSecretsmanagerActions.md#stopreplicationtoreplica)
- [TagResource](AwsSecretsmanagerActions.md#tagresource)
- [UntagResource](AwsSecretsmanagerActions.md#untagresource)
- [UpdateSecret](AwsSecretsmanagerActions.md#updatesecret)
- [UpdateSecretVersionStage](AwsSecretsmanagerActions.md#updatesecretversionstage)
- [ValidateResourcePolicy](AwsSecretsmanagerActions.md#validateresourcepolicy)

## Enumeration Members

### BatchGetSecretValue

• **BatchGetSecretValue** = ``"secretsmanager:BatchGetSecretValue"``

Grants permission to retrieve and decrypt a list of secrets

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_BatchGetSecretValue.html

#### Defined in

actions/secretsmanager.ts:17

___

### CancelRotateSecret

• **CancelRotateSecret** = ``"secretsmanager:CancelRotateSecret"``

Grants permission to cancel an in-progress secret rotation

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CancelRotateSecret.html

#### Defined in

actions/secretsmanager.ts:23

___

### CreateSecret

• **CreateSecret** = ``"secretsmanager:CreateSecret"``

Grants permission to create a secret that stores encrypted data that can be que
ried and rotated

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html

#### Defined in

actions/secretsmanager.ts:30

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"secretsmanager:DeleteResourcePolicy"``

Grants permission to delete the resource policy attached to a secret

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteResourcePolicy.html

#### Defined in

actions/secretsmanager.ts:36

___

### DeleteSecret

• **DeleteSecret** = ``"secretsmanager:DeleteSecret"``

Grants permission to delete a secret

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html

#### Defined in

actions/secretsmanager.ts:42

___

### DescribeSecret

• **DescribeSecret** = ``"secretsmanager:DescribeSecret"``

Grants permission to retrieve the metadata about a secret, but not the encrypte
d data

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DescribeSecret.html

#### Defined in

actions/secretsmanager.ts:49

___

### GetRandomPassword

• **GetRandomPassword** = ``"secretsmanager:GetRandomPassword"``

Grants permission to generate a random string for use in password creation

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetRandomPassword.html

#### Defined in

actions/secretsmanager.ts:55

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"secretsmanager:GetResourcePolicy"``

Grants permission to get the resource policy attached to a secret

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetResourcePolicy.html

#### Defined in

actions/secretsmanager.ts:61

___

### GetSecretValue

• **GetSecretValue** = ``"secretsmanager:GetSecretValue"``

Grants permission to retrieve and decrypt the encrypted data

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html

#### Defined in

actions/secretsmanager.ts:67

___

### ListSecretVersionIds

• **ListSecretVersionIds** = ``"secretsmanager:ListSecretVersionIds"``

Grants permission to list the available versions of a secret

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ListSecretVersionIds.html

#### Defined in

actions/secretsmanager.ts:73

___

### ListSecrets

• **ListSecrets** = ``"secretsmanager:ListSecrets"``

Grants permission to list the available secrets

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ListSecrets.html

#### Defined in

actions/secretsmanager.ts:79

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"secretsmanager:PutResourcePolicy"``

Grants permission to attach a resource policy to a secret

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_PutResourcePolicy.html

#### Defined in

actions/secretsmanager.ts:85

___

### PutSecretValue

• **PutSecretValue** = ``"secretsmanager:PutSecretValue"``

Grants permission to create a new version of the secret with new encrypted data

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_PutSecretValue.html

#### Defined in

actions/secretsmanager.ts:91

___

### RemoveRegionsFromReplication

• **RemoveRegionsFromReplication** = ``"secretsmanager:RemoveRegionsFromReplication"``

Grants permission to remove regions from replication

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RemoveRegionsFromReplication.html

#### Defined in

actions/secretsmanager.ts:97

___

### ReplicateSecretToRegions

• **ReplicateSecretToRegions** = ``"secretsmanager:ReplicateSecretToRegions"``

Grants permission to convert an existing secret to a multi-Region secret and be
gin replicating the secret to a list of new regions

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ReplicateSecretToRegions.html

#### Defined in

actions/secretsmanager.ts:104

___

### RestoreSecret

• **RestoreSecret** = ``"secretsmanager:RestoreSecret"``

Grants permission to cancel deletion of a secret

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RestoreSecret.html

#### Defined in

actions/secretsmanager.ts:110

___

### RotateSecret

• **RotateSecret** = ``"secretsmanager:RotateSecret"``

Grants permission to start rotation of a secret

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RotateSecret.html

#### Defined in

actions/secretsmanager.ts:116

___

### StopReplicationToReplica

• **StopReplicationToReplica** = ``"secretsmanager:StopReplicationToReplica"``

Grants permission to remove the secret from replication and promote the secret
to a regional secret in the replica Region

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_StopReplicationToReplica.html

#### Defined in

actions/secretsmanager.ts:123

___

### TagResource

• **TagResource** = ``"secretsmanager:TagResource"``

Grants permission to add tags to a secret

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_TagResource.html

#### Defined in

actions/secretsmanager.ts:129

___

### UntagResource

• **UntagResource** = ``"secretsmanager:UntagResource"``

Grants permission to remove tags from a secret

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UntagResource.html

#### Defined in

actions/secretsmanager.ts:135

___

### UpdateSecret

• **UpdateSecret** = ``"secretsmanager:UpdateSecret"``

Grants permission to update a secret with new metadata or with a new version of
the encrypted data

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecret.html

#### Defined in

actions/secretsmanager.ts:142

___

### UpdateSecretVersionStage

• **UpdateSecretVersionStage** = ``"secretsmanager:UpdateSecretVersionStage"``

Grants permission to move a stage from one secret to another

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecretVersionStage.html

#### Defined in

actions/secretsmanager.ts:148

___

### ValidateResourcePolicy

• **ValidateResourcePolicy** = ``"secretsmanager:ValidateResourcePolicy"``

Grants permission to validate a resource policy before attaching policy

See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ValidateResourcePolicy.html

#### Defined in

actions/secretsmanager.ts:154
