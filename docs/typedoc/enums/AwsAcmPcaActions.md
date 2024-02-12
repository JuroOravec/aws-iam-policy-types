[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAcmPcaActions

# Enumeration: AwsAcmPcaActions

All IAM policy actions for AWS Private Certificate Authority (ACM-PCA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsprivatecertificateauthority.html

2024-02-12T09:58:43.811Z

## Table of contents

### Enumeration Members

- [CreateCertificateAuthority](AwsAcmPcaActions.md#createcertificateauthority)
- [CreateCertificateAuthorityAuditReport](AwsAcmPcaActions.md#createcertificateauthorityauditreport)
- [CreatePermission](AwsAcmPcaActions.md#createpermission)
- [DeleteCertificateAuthority](AwsAcmPcaActions.md#deletecertificateauthority)
- [DeletePermission](AwsAcmPcaActions.md#deletepermission)
- [DeletePolicy](AwsAcmPcaActions.md#deletepolicy)
- [DescribeCertificateAuthority](AwsAcmPcaActions.md#describecertificateauthority)
- [DescribeCertificateAuthorityAuditReport](AwsAcmPcaActions.md#describecertificateauthorityauditreport)
- [GetCertificate](AwsAcmPcaActions.md#getcertificate)
- [GetCertificateAuthorityCertificate](AwsAcmPcaActions.md#getcertificateauthoritycertificate)
- [GetCertificateAuthorityCsr](AwsAcmPcaActions.md#getcertificateauthoritycsr)
- [GetPolicy](AwsAcmPcaActions.md#getpolicy)
- [ImportCertificateAuthorityCertificate](AwsAcmPcaActions.md#importcertificateauthoritycertificate)
- [IssueCertificate](AwsAcmPcaActions.md#issuecertificate)
- [ListCertificateAuthorities](AwsAcmPcaActions.md#listcertificateauthorities)
- [ListPermissions](AwsAcmPcaActions.md#listpermissions)
- [ListTags](AwsAcmPcaActions.md#listtags)
- [PutPolicy](AwsAcmPcaActions.md#putpolicy)
- [RestoreCertificateAuthority](AwsAcmPcaActions.md#restorecertificateauthority)
- [RevokeCertificate](AwsAcmPcaActions.md#revokecertificate)
- [TagCertificateAuthority](AwsAcmPcaActions.md#tagcertificateauthority)
- [UntagCertificateAuthority](AwsAcmPcaActions.md#untagcertificateauthority)
- [UpdateCertificateAuthority](AwsAcmPcaActions.md#updatecertificateauthority)

## Enumeration Members

### CreateCertificateAuthority

• **CreateCertificateAuthority** = ``"acm-pca:CreateCertificateAuthority"``

Grants permission to create an AWS Private CA and its associated private key an
d configuration

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html

#### Defined in

actions/acm-pca.ts:18

___

### CreateCertificateAuthorityAuditReport

• **CreateCertificateAuthorityAuditReport** = ``"acm-pca:CreateCertificateAuthorityAuditReport"``

Grants permission to create an audit report for an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html

#### Defined in

actions/acm-pca.ts:24

___

### CreatePermission

• **CreatePermission** = ``"acm-pca:CreatePermission"``

Grants permission to create a permission for an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html

#### Defined in

actions/acm-pca.ts:30

___

### DeleteCertificateAuthority

• **DeleteCertificateAuthority** = ``"acm-pca:DeleteCertificateAuthority"``

Grants permission to delete an AWS Private CA and its associated private key an
d configuration

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html

#### Defined in

actions/acm-pca.ts:37

___

### DeletePermission

• **DeletePermission** = ``"acm-pca:DeletePermission"``

Grants permission to delete a permission for an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html

#### Defined in

actions/acm-pca.ts:43

___

### DeletePolicy

• **DeletePolicy** = ``"acm-pca:DeletePolicy"``

Grants permission to delete the policy for an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html

#### Defined in

actions/acm-pca.ts:49

___

### DescribeCertificateAuthority

• **DescribeCertificateAuthority** = ``"acm-pca:DescribeCertificateAuthority"``

Grants permission to return a list of the configuration and status fields conta
ined in the specified AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html

#### Defined in

actions/acm-pca.ts:56

___

### DescribeCertificateAuthorityAuditReport

• **DescribeCertificateAuthorityAuditReport** = ``"acm-pca:DescribeCertificateAuthorityAuditReport"``

Grants permission to return the status and information about an AWS Private CA
audit report

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthorityAuditReport.html

#### Defined in

actions/acm-pca.ts:63

___

### GetCertificate

• **GetCertificate** = ``"acm-pca:GetCertificate"``

Grants permission to retrieve an AWS Private CA certificate and certificate cha
in for the certificate authority specified by an ARN

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html

#### Defined in

actions/acm-pca.ts:70

___

### GetCertificateAuthorityCertificate

• **GetCertificateAuthorityCertificate** = ``"acm-pca:GetCertificateAuthorityCertificate"``

Grants permission to retrieve an AWS Private CA certificate and certificate cha
in for the certificate authority specified by an ARN

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCertificate.html

#### Defined in

actions/acm-pca.ts:77

___

### GetCertificateAuthorityCsr

• **GetCertificateAuthorityCsr** = ``"acm-pca:GetCertificateAuthorityCsr"``

Grants permission to retrieve an AWS Private CA certificate signing request (CS
R) for the certificate-authority specified by an ARN

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html

#### Defined in

actions/acm-pca.ts:84

___

### GetPolicy

• **GetPolicy** = ``"acm-pca:GetPolicy"``

Grants permission to retrieve the policy on an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html

#### Defined in

actions/acm-pca.ts:90

___

### ImportCertificateAuthorityCertificate

• **ImportCertificateAuthorityCertificate** = ``"acm-pca:ImportCertificateAuthorityCertificate"``

Grants permission to import an SSL/TLS certificate into AWS Private CA for use
as the CA certificate of an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html

#### Defined in

actions/acm-pca.ts:97

___

### IssueCertificate

• **IssueCertificate** = ``"acm-pca:IssueCertificate"``

Grants permission to issue an AWS Private CA certificate

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html

#### Defined in

actions/acm-pca.ts:103

___

### ListCertificateAuthorities

• **ListCertificateAuthorities** = ``"acm-pca:ListCertificateAuthorities"``

Grants permission to retrieve a list of the AWS Private CA certificate authorit
y ARNs, and a summary of the status of each CA in the calling account

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html

#### Defined in

actions/acm-pca.ts:110

___

### ListPermissions

• **ListPermissions** = ``"acm-pca:ListPermissions"``

Grants permission to list the permissions that have been applied to the AWS Pri
vate CA certificate authority

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html

#### Defined in

actions/acm-pca.ts:117

___

### ListTags

• **ListTags** = ``"acm-pca:ListTags"``

Grants permission to list the tags that have been applied to the AWS Private CA
certificate authority

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html

#### Defined in

actions/acm-pca.ts:124

___

### PutPolicy

• **PutPolicy** = ``"acm-pca:PutPolicy"``

Grants permission to put a policy on an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html

#### Defined in

actions/acm-pca.ts:130

___

### RestoreCertificateAuthority

• **RestoreCertificateAuthority** = ``"acm-pca:RestoreCertificateAuthority"``

Grants permission to restore an AWS Private CA from the deleted state to the st
ate it was in when deleted

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html

#### Defined in

actions/acm-pca.ts:137

___

### RevokeCertificate

• **RevokeCertificate** = ``"acm-pca:RevokeCertificate"``

Grants permission to revoke a certificate issued by an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html

#### Defined in

actions/acm-pca.ts:143

___

### TagCertificateAuthority

• **TagCertificateAuthority** = ``"acm-pca:TagCertificateAuthority"``

Grants permission to add one or more tags to an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html

#### Defined in

actions/acm-pca.ts:149

___

### UntagCertificateAuthority

• **UntagCertificateAuthority** = ``"acm-pca:UntagCertificateAuthority"``

Grants permission to remove one or more tags from an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html

#### Defined in

actions/acm-pca.ts:155

___

### UpdateCertificateAuthority

• **UpdateCertificateAuthority** = ``"acm-pca:UpdateCertificateAuthority"``

Grants permission to update the configuration of an AWS Private CA

See https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html

#### Defined in

actions/acm-pca.ts:161
