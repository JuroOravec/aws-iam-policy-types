[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsKmsActions

# Enumeration: AwsKmsActions

All IAM policy actions for AWS Key Management Service (KMS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awskeymanagementservice.html

2024-02-12T09:57:57.163Z

## Table of contents

### Enumeration Members

- [CancelKeyDeletion](AwsKmsActions.md#cancelkeydeletion)
- [ConnectCustomKeyStore](AwsKmsActions.md#connectcustomkeystore)
- [CreateAlias](AwsKmsActions.md#createalias)
- [CreateCustomKeyStore](AwsKmsActions.md#createcustomkeystore)
- [CreateGrant](AwsKmsActions.md#creategrant)
- [CreateKey](AwsKmsActions.md#createkey)
- [Decrypt](AwsKmsActions.md#decrypt)
- [DeleteAlias](AwsKmsActions.md#deletealias)
- [DeleteCustomKeyStore](AwsKmsActions.md#deletecustomkeystore)
- [DeleteImportedKeyMaterial](AwsKmsActions.md#deleteimportedkeymaterial)
- [DescribeCustomKeyStores](AwsKmsActions.md#describecustomkeystores)
- [DescribeKey](AwsKmsActions.md#describekey)
- [DisableKey](AwsKmsActions.md#disablekey)
- [DisableKeyRotation](AwsKmsActions.md#disablekeyrotation)
- [DisconnectCustomKeyStore](AwsKmsActions.md#disconnectcustomkeystore)
- [EnableKey](AwsKmsActions.md#enablekey)
- [EnableKeyRotation](AwsKmsActions.md#enablekeyrotation)
- [Encrypt](AwsKmsActions.md#encrypt)
- [GenerateDataKey](AwsKmsActions.md#generatedatakey)
- [GenerateDataKeyPair](AwsKmsActions.md#generatedatakeypair)
- [GenerateDataKeyPairWithoutPlaintext](AwsKmsActions.md#generatedatakeypairwithoutplaintext)
- [GenerateDataKeyWithoutPlaintext](AwsKmsActions.md#generatedatakeywithoutplaintext)
- [GenerateMac](AwsKmsActions.md#generatemac)
- [GenerateRandom](AwsKmsActions.md#generaterandom)
- [GetKeyPolicy](AwsKmsActions.md#getkeypolicy)
- [GetKeyRotationStatus](AwsKmsActions.md#getkeyrotationstatus)
- [GetParametersForImport](AwsKmsActions.md#getparametersforimport)
- [GetPublicKey](AwsKmsActions.md#getpublickey)
- [ImportKeyMaterial](AwsKmsActions.md#importkeymaterial)
- [ListAliases](AwsKmsActions.md#listaliases)
- [ListGrants](AwsKmsActions.md#listgrants)
- [ListKeyPolicies](AwsKmsActions.md#listkeypolicies)
- [ListKeys](AwsKmsActions.md#listkeys)
- [ListResourceTags](AwsKmsActions.md#listresourcetags)
- [ListRetirableGrants](AwsKmsActions.md#listretirablegrants)
- [PutKeyPolicy](AwsKmsActions.md#putkeypolicy)
- [ReEncryptFrom](AwsKmsActions.md#reencryptfrom)
- [ReEncryptTo](AwsKmsActions.md#reencryptto)
- [ReplicateKey](AwsKmsActions.md#replicatekey)
- [RetireGrant](AwsKmsActions.md#retiregrant)
- [RevokeGrant](AwsKmsActions.md#revokegrant)
- [ScheduleKeyDeletion](AwsKmsActions.md#schedulekeydeletion)
- [Sign](AwsKmsActions.md#sign)
- [SynchronizeMultiRegionKey](AwsKmsActions.md#synchronizemultiregionkey)
- [TagResource](AwsKmsActions.md#tagresource)
- [UntagResource](AwsKmsActions.md#untagresource)
- [UpdateAlias](AwsKmsActions.md#updatealias)
- [UpdateCustomKeyStore](AwsKmsActions.md#updatecustomkeystore)
- [UpdateKeyDescription](AwsKmsActions.md#updatekeydescription)
- [UpdatePrimaryRegion](AwsKmsActions.md#updateprimaryregion)
- [Verify](AwsKmsActions.md#verify)
- [VerifyMac](AwsKmsActions.md#verifymac)

## Enumeration Members

### CancelKeyDeletion

• **CancelKeyDeletion** = ``"kms:CancelKeyDeletion"``

Controls permission to cancel the scheduled deletion of an AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_CancelKeyDeletion.html

#### Defined in

actions/kms.ts:17

___

### ConnectCustomKeyStore

• **ConnectCustomKeyStore** = ``"kms:ConnectCustomKeyStore"``

Controls permission to connect or reconnect a custom key store to its associate
d AWS CloudHSM cluster or external key manager outside of AWS

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ConnectCustomKeyStore.html

#### Defined in

actions/kms.ts:24

___

### CreateAlias

• **CreateAlias** = ``"kms:CreateAlias"``

Controls permission to create an alias for an AWS KMS key. Aliases are optional
friendly names that you can associate with KMS keys

See https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateAlias.html

#### Defined in

actions/kms.ts:31

___

### CreateCustomKeyStore

• **CreateCustomKeyStore** = ``"kms:CreateCustomKeyStore"``

Controls permission to create a custom key store that is backed by an AWS Cloud
HSM cluster or an external key manager outside of AWS

See https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateCustomKeyStore.html

#### Defined in

actions/kms.ts:38

___

### CreateGrant

• **CreateGrant** = ``"kms:CreateGrant"``

Controls permission to add a grant to an AWS KMS key. You can use grants to add
permissions without changing the key policy or IAM policy

See https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html

#### Defined in

actions/kms.ts:45

___

### CreateKey

• **CreateKey** = ``"kms:CreateKey"``

Controls permission to create an AWS KMS key that can be used to protect data k
eys and other sensitive information

See https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html

#### Defined in

actions/kms.ts:52

___

### Decrypt

• **Decrypt** = ``"kms:Decrypt"``

Controls permission to decrypt ciphertext that was encrypted under an AWS KMS k
ey

See https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html

#### Defined in

actions/kms.ts:59

___

### DeleteAlias

• **DeleteAlias** = ``"kms:DeleteAlias"``

Controls permission to delete an alias. Aliases are optional friendly names tha
t you can associate with AWS KMS keys

See https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteAlias.html

#### Defined in

actions/kms.ts:66

___

### DeleteCustomKeyStore

• **DeleteCustomKeyStore** = ``"kms:DeleteCustomKeyStore"``

Controls permission to delete a custom key store

See https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteCustomKeyStore.html

#### Defined in

actions/kms.ts:72

___

### DeleteImportedKeyMaterial

• **DeleteImportedKeyMaterial** = ``"kms:DeleteImportedKeyMaterial"``

Controls permission to delete cryptographic material that you imported into an
AWS KMS key. This action makes the key unusable

See https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteImportedKeyMaterial.html

#### Defined in

actions/kms.ts:79

___

### DescribeCustomKeyStores

• **DescribeCustomKeyStores** = ``"kms:DescribeCustomKeyStores"``

Controls permission to view detailed information about custom key stores in the
account and region

See https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeCustomKeyStores.html

#### Defined in

actions/kms.ts:86

___

### DescribeKey

• **DescribeKey** = ``"kms:DescribeKey"``

Controls permission to view detailed information about an AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html

#### Defined in

actions/kms.ts:92

___

### DisableKey

• **DisableKey** = ``"kms:DisableKey"``

Controls permission to disable an AWS KMS key, which prevents it from being use
d in cryptographic operations

See https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html

#### Defined in

actions/kms.ts:99

___

### DisableKeyRotation

• **DisableKeyRotation** = ``"kms:DisableKeyRotation"``

Controls permission to disable automatic rotation of a customer managed AWS KMS
key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKeyRotation.html

#### Defined in

actions/kms.ts:106

___

### DisconnectCustomKeyStore

• **DisconnectCustomKeyStore** = ``"kms:DisconnectCustomKeyStore"``

Controls permission to disconnect the custom key store from its associated AWS
CloudHSM cluster or external key manager outside of AWS

See https://docs.aws.amazon.com/kms/latest/APIReference/API_DisconnectCustomKeyStore.html

#### Defined in

actions/kms.ts:113

___

### EnableKey

• **EnableKey** = ``"kms:EnableKey"``

Controls permission to change the state of an AWS KMS key to enabled. This allo
ws the KMS key to be used in cryptographic operations

See https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html

#### Defined in

actions/kms.ts:120

___

### EnableKeyRotation

• **EnableKeyRotation** = ``"kms:EnableKeyRotation"``

Controls permission to enable automatic rotation of the cryptographic material
in an AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKeyRotation.html

#### Defined in

actions/kms.ts:127

___

### Encrypt

• **Encrypt** = ``"kms:Encrypt"``

Controls permission to use the specified AWS KMS key to encrypt data and data k
eys

See https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html

#### Defined in

actions/kms.ts:134

___

### GenerateDataKey

• **GenerateDataKey** = ``"kms:GenerateDataKey"``

Controls permission to use the AWS KMS key to generate data keys. You can use t
he data keys to encrypt data outside of AWS KMS

See https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey.html

#### Defined in

actions/kms.ts:141

___

### GenerateDataKeyPair

• **GenerateDataKeyPair** = ``"kms:GenerateDataKeyPair"``

Controls permission to use the AWS KMS key to generate data key pairs

See https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPair.html

#### Defined in

actions/kms.ts:147

___

### GenerateDataKeyPairWithoutPlaintext

• **GenerateDataKeyPairWithoutPlaintext** = ``"kms:GenerateDataKeyPairWithoutPlaintext"``

Controls permission to use the AWS KMS key to generate data key pairs. Unlike t
he GenerateDataKeyPair operation, this operation returns an encrypted private k
ey without a plaintext copy

See https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPairWithoutPlaintext.html

#### Defined in

actions/kms.ts:155

___

### GenerateDataKeyWithoutPlaintext

• **GenerateDataKeyWithoutPlaintext** = ``"kms:GenerateDataKeyWithoutPlaintext"``

Controls permission to use the AWS KMS key to generate a data key. Unlike the G
enerateDataKey operation, this operation returns an encrypted data key without
a plaintext version of the data key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyWithoutPlaintext.html

#### Defined in

actions/kms.ts:163

___

### GenerateMac

• **GenerateMac** = ``"kms:GenerateMac"``

Controls permission to use the AWS KMS key to generate message authentication c
odes

See https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateMac.html

#### Defined in

actions/kms.ts:170

___

### GenerateRandom

• **GenerateRandom** = ``"kms:GenerateRandom"``

Controls permission to get a cryptographically secure random byte string from A
WS KMS

See https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateRandom.html

#### Defined in

actions/kms.ts:177

___

### GetKeyPolicy

• **GetKeyPolicy** = ``"kms:GetKeyPolicy"``

Controls permission to view the key policy for the specified AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_GetKeyPolicy.html

#### Defined in

actions/kms.ts:183

___

### GetKeyRotationStatus

• **GetKeyRotationStatus** = ``"kms:GetKeyRotationStatus"``

Controls permission to determine whether automatic key rotation is enabled on t
he AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_GetKeyRotationStatus.html

#### Defined in

actions/kms.ts:190

___

### GetParametersForImport

• **GetParametersForImport** = ``"kms:GetParametersForImport"``

Controls permission to get data that is required to import cryptographic materi
al into a customer managed key, including a public key and import token

See https://docs.aws.amazon.com/kms/latest/APIReference/API_GetParametersForImport.html

#### Defined in

actions/kms.ts:197

___

### GetPublicKey

• **GetPublicKey** = ``"kms:GetPublicKey"``

Controls permission to download the public key of an asymmetric AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html

#### Defined in

actions/kms.ts:203

___

### ImportKeyMaterial

• **ImportKeyMaterial** = ``"kms:ImportKeyMaterial"``

Controls permission to import cryptographic material into an AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ImportKeyMaterial.html

#### Defined in

actions/kms.ts:209

___

### ListAliases

• **ListAliases** = ``"kms:ListAliases"``

Controls permission to view the aliases that are defined in the account. Aliase
s are optional friendly names that you can associate with AWS KMS keys

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ListAliases.html

#### Defined in

actions/kms.ts:216

___

### ListGrants

• **ListGrants** = ``"kms:ListGrants"``

Controls permission to view all grants for an AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ListGrants.html

#### Defined in

actions/kms.ts:222

___

### ListKeyPolicies

• **ListKeyPolicies** = ``"kms:ListKeyPolicies"``

Controls permission to view the names of key policies for an AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeyPolicies.html

#### Defined in

actions/kms.ts:228

___

### ListKeys

• **ListKeys** = ``"kms:ListKeys"``

Controls permission to view the key ID and Amazon Resource Name (ARN) of all AW
S KMS keys in the account

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html

#### Defined in

actions/kms.ts:235

___

### ListResourceTags

• **ListResourceTags** = ``"kms:ListResourceTags"``

Controls permission to view all tags that are attached to an AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ListResourceTags.html

#### Defined in

actions/kms.ts:241

___

### ListRetirableGrants

• **ListRetirableGrants** = ``"kms:ListRetirableGrants"``

Controls permission to view grants in which the specified principal is the reti
ring principal. Other principals might be able to retire the grant and this pri
ncipal might be able to retire other grants

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ListRetirableGrants.html

#### Defined in

actions/kms.ts:249

___

### PutKeyPolicy

• **PutKeyPolicy** = ``"kms:PutKeyPolicy"``

Controls permission to replace the key policy for the specified AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html

#### Defined in

actions/kms.ts:255

___

### ReEncryptFrom

• **ReEncryptFrom** = ``"kms:ReEncryptFrom"``

Controls permission to decrypt data as part of the process that decrypts and re
encrypts the data within AWS KMS

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html

#### Defined in

actions/kms.ts:262

___

### ReEncryptTo

• **ReEncryptTo** = ``"kms:ReEncryptTo"``

Controls permission to encrypt data as part of the process that decrypts and re
encrypts the data within AWS KMS

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html

#### Defined in

actions/kms.ts:269

___

### ReplicateKey

• **ReplicateKey** = ``"kms:ReplicateKey"``

Controls permission to replicate a multi-Region primary key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ReplicateKey.html

#### Defined in

actions/kms.ts:275

___

### RetireGrant

• **RetireGrant** = ``"kms:RetireGrant"``

Controls permission to retire a grant. The RetireGrant operation is typically c
alled by the grant user after they complete the tasks that the grant allowed th
em to perform

See https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html

#### Defined in

actions/kms.ts:283

___

### RevokeGrant

• **RevokeGrant** = ``"kms:RevokeGrant"``

Controls permission to revoke a grant, which denies permission for all operatio
ns that depend on the grant

See https://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html

#### Defined in

actions/kms.ts:290

___

### ScheduleKeyDeletion

• **ScheduleKeyDeletion** = ``"kms:ScheduleKeyDeletion"``

Controls permission to schedule deletion of an AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html

#### Defined in

actions/kms.ts:296

___

### Sign

• **Sign** = ``"kms:Sign"``

Controls permission to produce a digital signature for a message

See https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html

#### Defined in

actions/kms.ts:302

___

### SynchronizeMultiRegionKey

• **SynchronizeMultiRegionKey** = ``"kms:SynchronizeMultiRegionKey"``

Controls access to internal APIs that synchronize multi-Region keys

See https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-auth.html#multi-region-auth-slr

#### Defined in

actions/kms.ts:308

___

### TagResource

• **TagResource** = ``"kms:TagResource"``

Controls permission to create or update tags that are attached to an AWS KMS ke
y

See https://docs.aws.amazon.com/kms/latest/APIReference/API_TagResource.html

#### Defined in

actions/kms.ts:315

___

### UntagResource

• **UntagResource** = ``"kms:UntagResource"``

Controls permission to delete tags that are attached to an AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_UntagResource.html

#### Defined in

actions/kms.ts:321

___

### UpdateAlias

• **UpdateAlias** = ``"kms:UpdateAlias"``

Controls permission to associate an alias with a different AWS KMS key. An alia
s is an optional friendly name that you can associate with a KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateAlias.html

#### Defined in

actions/kms.ts:328

___

### UpdateCustomKeyStore

• **UpdateCustomKeyStore** = ``"kms:UpdateCustomKeyStore"``

Controls permission to change the properties of a custom key store

See https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateCustomKeyStore.html

#### Defined in

actions/kms.ts:334

___

### UpdateKeyDescription

• **UpdateKeyDescription** = ``"kms:UpdateKeyDescription"``

Controls permission to delete or change the description of an AWS KMS key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateKeyDescription.html

#### Defined in

actions/kms.ts:340

___

### UpdatePrimaryRegion

• **UpdatePrimaryRegion** = ``"kms:UpdatePrimaryRegion"``

Controls permission to update the primary Region of a multi-Region primary key

See https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdatePrimaryRegion.html

#### Defined in

actions/kms.ts:346

___

### Verify

• **Verify** = ``"kms:Verify"``

Controls permission to use the specified AWS KMS key to verify digital signatur
es

See https://docs.aws.amazon.com/kms/latest/APIReference/API_Verify.html

#### Defined in

actions/kms.ts:353

___

### VerifyMac

• **VerifyMac** = ``"kms:VerifyMac"``

Controls permission to use the AWS KMS key to verify message authentication cod
es

See https://docs.aws.amazon.com/kms/latest/APIReference/API_VerifyMac.html

#### Defined in

actions/kms.ts:360
