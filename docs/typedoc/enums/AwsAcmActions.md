[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAcmActions

# Enumeration: AwsAcmActions

All IAM policy actions for AWS Certificate Manager (ACM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanager.html

2024-02-12T09:56:16.287Z

## Table of contents

### Enumeration Members

- [AddTagsToCertificate](AwsAcmActions.md#addtagstocertificate)
- [DeleteCertificate](AwsAcmActions.md#deletecertificate)
- [DescribeCertificate](AwsAcmActions.md#describecertificate)
- [ExportCertificate](AwsAcmActions.md#exportcertificate)
- [GetAccountConfiguration](AwsAcmActions.md#getaccountconfiguration)
- [GetCertificate](AwsAcmActions.md#getcertificate)
- [ImportCertificate](AwsAcmActions.md#importcertificate)
- [ListCertificates](AwsAcmActions.md#listcertificates)
- [ListTagsForCertificate](AwsAcmActions.md#listtagsforcertificate)
- [PutAccountConfiguration](AwsAcmActions.md#putaccountconfiguration)
- [RemoveTagsFromCertificate](AwsAcmActions.md#removetagsfromcertificate)
- [RenewCertificate](AwsAcmActions.md#renewcertificate)
- [RequestCertificate](AwsAcmActions.md#requestcertificate)
- [ResendValidationEmail](AwsAcmActions.md#resendvalidationemail)
- [UpdateCertificateOptions](AwsAcmActions.md#updatecertificateoptions)

## Enumeration Members

### AddTagsToCertificate

• **AddTagsToCertificate** = ``"acm:AddTagsToCertificate"``

Grants permission to add one or more tags to a certificate

See https://docs.aws.amazon.com/acm/latest/APIReference/API_AddTagsToCertificate.html

#### Defined in

actions/acm.ts:17

___

### DeleteCertificate

• **DeleteCertificate** = ``"acm:DeleteCertificate"``

Grants permission to delete a certificate and its associated private key

See https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html

#### Defined in

actions/acm.ts:23

___

### DescribeCertificate

• **DescribeCertificate** = ``"acm:DescribeCertificate"``

Grants permission to retreive a certificates and its metadata

See https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html

#### Defined in

actions/acm.ts:29

___

### ExportCertificate

• **ExportCertificate** = ``"acm:ExportCertificate"``

Grants permission to export a private certificate issued by a private certifica
te authority (CA) for use anywhere

See https://docs.aws.amazon.com/acm/latest/APIReference/API_ExportCertificate.html

#### Defined in

actions/acm.ts:36

___

### GetAccountConfiguration

• **GetAccountConfiguration** = ``"acm:GetAccountConfiguration"``

Grants permission to retrieve account level configuration from AWS Certificate
Manager

See https://docs.aws.amazon.com/acm/latest/APIReference/API_GetAccountConfiguration.html

#### Defined in

actions/acm.ts:43

___

### GetCertificate

• **GetCertificate** = ``"acm:GetCertificate"``

Grants permission to retrieve a certificate and certificate chain for a certifi
cate ARN

See https://docs.aws.amazon.com/acm/latest/APIReference/API_GetCertificate.html

#### Defined in

actions/acm.ts:50

___

### ImportCertificate

• **ImportCertificate** = ``"acm:ImportCertificate"``

Grants permission to import a 3rd party certificate into AWS Certificate Manage
r (ACM)

See https://docs.aws.amazon.com/acm/latest/APIReference/API_ImportCertificate.html

#### Defined in

actions/acm.ts:57

___

### ListCertificates

• **ListCertificates** = ``"acm:ListCertificates"``

Grants permission to retrieve a list of the certificate ARNs and the domain nam
e for each ARN

See https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html

#### Defined in

actions/acm.ts:64

___

### ListTagsForCertificate

• **ListTagsForCertificate** = ``"acm:ListTagsForCertificate"``

Grants permission to lists the tags that have been associated with a certificat
e

See https://docs.aws.amazon.com/acm/latest/APIReference/API_ListTagsForCertificate.html

#### Defined in

actions/acm.ts:71

___

### PutAccountConfiguration

• **PutAccountConfiguration** = ``"acm:PutAccountConfiguration"``

Grants permission to update account level configuration in AWS Certificate Mana
ger

See https://docs.aws.amazon.com/acm/latest/APIReference/API_PutAccountConfiguration.html

#### Defined in

actions/acm.ts:78

___

### RemoveTagsFromCertificate

• **RemoveTagsFromCertificate** = ``"acm:RemoveTagsFromCertificate"``

Grants permission to remove one or more tags from a certificate

See https://docs.aws.amazon.com/acm/latest/APIReference/API_RemoveTagsFromCertificate.html

#### Defined in

actions/acm.ts:84

___

### RenewCertificate

• **RenewCertificate** = ``"acm:RenewCertificate"``

Grants permission to renew an eligible private certificate

See https://docs.aws.amazon.com/acm/latest/APIReference/API_RenewCertificate.html

#### Defined in

actions/acm.ts:90

___

### RequestCertificate

• **RequestCertificate** = ``"acm:RequestCertificate"``

Grants permission to requests a public or private certificate

See https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html

#### Defined in

actions/acm.ts:96

___

### ResendValidationEmail

• **ResendValidationEmail** = ``"acm:ResendValidationEmail"``

Grants permission to resend an email to request domain ownership validation

See https://docs.aws.amazon.com/acm/latest/APIReference/API_ResendValidationEmail.html

#### Defined in

actions/acm.ts:102

___

### UpdateCertificateOptions

• **UpdateCertificateOptions** = ``"acm:UpdateCertificateOptions"``

Grants permission to update a certificate configuration. Use this to specify wh
ether to opt in to or out of certificate transparency logging

See https://docs.aws.amazon.com/acm/latest/APIReference/API_UpdateCertificateOptions.html

#### Defined in

actions/acm.ts:109
