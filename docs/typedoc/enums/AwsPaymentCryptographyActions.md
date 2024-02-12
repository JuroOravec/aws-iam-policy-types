[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsPaymentCryptographyActions

# Enumeration: AwsPaymentCryptographyActions

All IAM policy actions for AWS Payment Cryptography (PAYMENT-CRYPTOGRAPHY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspaymentcryptography.html

2024-02-12T09:58:36.708Z

## Table of contents

### Enumeration Members

- [CreateAlias](AwsPaymentCryptographyActions.md#createalias)
- [CreateKey](AwsPaymentCryptographyActions.md#createkey)
- [DecryptData](AwsPaymentCryptographyActions.md#decryptdata)
- [DeleteAlias](AwsPaymentCryptographyActions.md#deletealias)
- [DeleteKey](AwsPaymentCryptographyActions.md#deletekey)
- [EncryptData](AwsPaymentCryptographyActions.md#encryptdata)
- [ExportKey](AwsPaymentCryptographyActions.md#exportkey)
- [GenerateCardValidationData](AwsPaymentCryptographyActions.md#generatecardvalidationdata)
- [GenerateMac](AwsPaymentCryptographyActions.md#generatemac)
- [GeneratePinData](AwsPaymentCryptographyActions.md#generatepindata)
- [GetAlias](AwsPaymentCryptographyActions.md#getalias)
- [GetKey](AwsPaymentCryptographyActions.md#getkey)
- [GetParametersForExport](AwsPaymentCryptographyActions.md#getparametersforexport)
- [GetParametersForImport](AwsPaymentCryptographyActions.md#getparametersforimport)
- [GetPublicKeyCertificate](AwsPaymentCryptographyActions.md#getpublickeycertificate)
- [ImportKey](AwsPaymentCryptographyActions.md#importkey)
- [ListAliases](AwsPaymentCryptographyActions.md#listaliases)
- [ListKeys](AwsPaymentCryptographyActions.md#listkeys)
- [ListTagsForResource](AwsPaymentCryptographyActions.md#listtagsforresource)
- [ReEncryptData](AwsPaymentCryptographyActions.md#reencryptdata)
- [RestoreKey](AwsPaymentCryptographyActions.md#restorekey)
- [StartKeyUsage](AwsPaymentCryptographyActions.md#startkeyusage)
- [StopKeyUsage](AwsPaymentCryptographyActions.md#stopkeyusage)
- [TagResource](AwsPaymentCryptographyActions.md#tagresource)
- [TranslatePinData](AwsPaymentCryptographyActions.md#translatepindata)
- [UntagResource](AwsPaymentCryptographyActions.md#untagresource)
- [UpdateAlias](AwsPaymentCryptographyActions.md#updatealias)
- [VerifyAuthRequestCryptogram](AwsPaymentCryptographyActions.md#verifyauthrequestcryptogram)
- [VerifyCardValidationData](AwsPaymentCryptographyActions.md#verifycardvalidationdata)
- [VerifyMac](AwsPaymentCryptographyActions.md#verifymac)
- [VerifyPinData](AwsPaymentCryptographyActions.md#verifypindata)

## Enumeration Members

### CreateAlias

• **CreateAlias** = ``"payment-cryptography:CreateAlias"``

Grants permission to create a user-friendly name for a Key

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateAlias.html

#### Defined in

actions/payment-cryptography.ts:17

___

### CreateKey

• **CreateKey** = ``"payment-cryptography:CreateKey"``

Grants permission to create a unique customer managed key in the caller's AWS a
ccount and region

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html

#### Defined in

actions/payment-cryptography.ts:24

___

### DecryptData

• **DecryptData** = ``"payment-cryptography:DecryptData"``

Grants permission to decrypt ciphertext data to plaintext using symmetric, asym
metric or DUKPT data encryption key

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_DecryptData.html

#### Defined in

actions/payment-cryptography.ts:31

___

### DeleteAlias

• **DeleteAlias** = ``"payment-cryptography:DeleteAlias"``

Grants permission to delete the specified alias

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html

#### Defined in

actions/payment-cryptography.ts:37

___

### DeleteKey

• **DeleteKey** = ``"payment-cryptography:DeleteKey"``

Grants permission to schedule the deletion of a Key

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteKey.html

#### Defined in

actions/payment-cryptography.ts:43

___

### EncryptData

• **EncryptData** = ``"payment-cryptography:EncryptData"``

Grants permission to encrypt plaintext data to ciphertext using symmetric, asym
metric or DUKPT data encryption key

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_EncryptData.html

#### Defined in

actions/payment-cryptography.ts:50

___

### ExportKey

• **ExportKey** = ``"payment-cryptography:ExportKey"``

Grants permission to export a key from the service

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ExportKey.html

#### Defined in

actions/payment-cryptography.ts:56

___

### GenerateCardValidationData

• **GenerateCardValidationData** = ``"payment-cryptography:GenerateCardValidationData"``

Grants permission to generate card-related data using algorithms such as Card V
erification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) or
Card Security Codes (CSC) that check the validity of a magnetic stripe card

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_GenerateCardValidationData.html

#### Defined in

actions/payment-cryptography.ts:64

___

### GenerateMac

• **GenerateMac** = ``"payment-cryptography:GenerateMac"``

Grants permission to generate a MAC (Message Authentication Code) cryptogram

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_GenerateMac.html

#### Defined in

actions/payment-cryptography.ts:70

___

### GeneratePinData

• **GeneratePinData** = ``"payment-cryptography:GeneratePinData"``

Grants permission to generate pin-related data such as PIN, PIN Verification Va
lue (PVV), PIN Block and PIN Offset during new card issuance or card re-issuanc
e

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_GeneratePinData.html

#### Defined in

actions/payment-cryptography.ts:78

___

### GetAlias

• **GetAlias** = ``"payment-cryptography:GetAlias"``

Grants permission to return the keyArn associated with an aliasName

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetAlias.html

#### Defined in

actions/payment-cryptography.ts:84

___

### GetKey

• **GetKey** = ``"payment-cryptography:GetKey"``

Grants permission to return the detailed information about the specified key

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetKey.html

#### Defined in

actions/payment-cryptography.ts:90

___

### GetParametersForExport

• **GetParametersForExport** = ``"payment-cryptography:GetParametersForExport"``

Grants permission to get the export token and the signing key certificate to in
itiate a TR-34 key export

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForExport.html

#### Defined in

actions/payment-cryptography.ts:97

___

### GetParametersForImport

• **GetParametersForImport** = ``"payment-cryptography:GetParametersForImport"``

Grants permission to get the import token and the wrapping key certificate to i
nitiate a TR-34 key import

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html

#### Defined in

actions/payment-cryptography.ts:104

___

### GetPublicKeyCertificate

• **GetPublicKeyCertificate** = ``"payment-cryptography:GetPublicKeyCertificate"``

Grants permission to return the public key from a key of class PUBLIC_KEY

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html

#### Defined in

actions/payment-cryptography.ts:110

___

### ImportKey

• **ImportKey** = ``"payment-cryptography:ImportKey"``

Grants permission to imports keys and public key certificates

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html

#### Defined in

actions/payment-cryptography.ts:116

___

### ListAliases

• **ListAliases** = ``"payment-cryptography:ListAliases"``

Grants permission to return a list of aliases created for all keys in the calle
r's AWS account and Region

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html

#### Defined in

actions/payment-cryptography.ts:123

___

### ListKeys

• **ListKeys** = ``"payment-cryptography:ListKeys"``

Grants permission to return a list of keys created in the caller's AWS account
and Region

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListKeys.html

#### Defined in

actions/payment-cryptography.ts:130

___

### ListTagsForResource

• **ListTagsForResource** = ``"payment-cryptography:ListTagsForResource"``

Grants permission to return a list of tags created in the caller's AWS account
and Region

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/payment-cryptography.ts:137

___

### ReEncryptData

• **ReEncryptData** = ``"payment-cryptography:ReEncryptData"``

Grants permission to re-encrypt ciphertext using DUKPT, Symmetric and Asymmetri
c Data Encryption Keys

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_ReEncryptData.html

#### Defined in

actions/payment-cryptography.ts:144

___

### RestoreKey

• **RestoreKey** = ``"payment-cryptography:RestoreKey"``

Grants permission to cancel a scheduled key deletion if at any point during the
waiting period a Key needs to be revived

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_RestoreKey.html

#### Defined in

actions/payment-cryptography.ts:151

___

### StartKeyUsage

• **StartKeyUsage** = ``"payment-cryptography:StartKeyUsage"``

Grants permission to enable a disabled Key

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_StartKeyUsage.html

#### Defined in

actions/payment-cryptography.ts:157

___

### StopKeyUsage

• **StopKeyUsage** = ``"payment-cryptography:StopKeyUsage"``

Grants permission to disable an enabled Key

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_StopKeyUsage.html

#### Defined in

actions/payment-cryptography.ts:163

___

### TagResource

• **TagResource** = ``"payment-cryptography:TagResource"``

Grants permission to add or overwrites one or more tags for the specified resou
rce

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_TagResource.html

#### Defined in

actions/payment-cryptography.ts:170

___

### TranslatePinData

• **TranslatePinData** = ``"payment-cryptography:TranslatePinData"``

Grants permission to translate encrypted PIN block from and to ISO 9564 formats
0,1,3,4

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_TranslatePinData.html

#### Defined in

actions/payment-cryptography.ts:177

___

### UntagResource

• **UntagResource** = ``"payment-cryptography:UntagResource"``

Grants permission to remove the specified tag or tags from the specified resour
ce

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UntagResource.html

#### Defined in

actions/payment-cryptography.ts:184

___

### UpdateAlias

• **UpdateAlias** = ``"payment-cryptography:UpdateAlias"``

Grants permission to change the key to which an alias is assigned, or unassign
it from its current key

See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html

#### Defined in

actions/payment-cryptography.ts:191

___

### VerifyAuthRequestCryptogram

• **VerifyAuthRequestCryptogram** = ``"payment-cryptography:VerifyAuthRequestCryptogram"``

Grants permission to verify Authorization Request Cryptogram (ARQC) for a EMV c
hip payment card authorization

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyAuthRequestCryptogram.html

#### Defined in

actions/payment-cryptography.ts:198

___

### VerifyCardValidationData

• **VerifyCardValidationData** = ``"payment-cryptography:VerifyCardValidationData"``

Grants permission to verify card-related validation data using algorithms such
as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/
dCVV2) and Card Security Codes (CSC)

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyCardValidationData.html

#### Defined in

actions/payment-cryptography.ts:206

___

### VerifyMac

• **VerifyMac** = ``"payment-cryptography:VerifyMac"``

Grants permission to verify MAC (Message Authentication Code) of input data aga
inst a provided MAC

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyMac.html

#### Defined in

actions/payment-cryptography.ts:213

___

### VerifyPinData

• **VerifyPinData** = ``"payment-cryptography:VerifyPinData"``

Grants permission to verify pin-related data such as PIN and PIN Offset using a
lgorithms including VISA PVV and IBM3624

See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyPinData.html

#### Defined in

actions/payment-cryptography.ts:220
