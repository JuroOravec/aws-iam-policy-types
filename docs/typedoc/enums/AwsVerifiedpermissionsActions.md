[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsVerifiedpermissionsActions

# Enumeration: AwsVerifiedpermissionsActions

All IAM policy actions for Amazon Verified Permissions (VERIFIEDPERMISSIONS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonverifiedpermissions.html

2024-02-12T09:59:35.992Z

## Table of contents

### Enumeration Members

- [CreateIdentitySource](AwsVerifiedpermissionsActions.md#createidentitysource)
- [CreatePolicy](AwsVerifiedpermissionsActions.md#createpolicy)
- [CreatePolicyStore](AwsVerifiedpermissionsActions.md#createpolicystore)
- [CreatePolicyTemplate](AwsVerifiedpermissionsActions.md#createpolicytemplate)
- [DeleteIdentitySource](AwsVerifiedpermissionsActions.md#deleteidentitysource)
- [DeletePolicy](AwsVerifiedpermissionsActions.md#deletepolicy)
- [DeletePolicyStore](AwsVerifiedpermissionsActions.md#deletepolicystore)
- [DeletePolicyTemplate](AwsVerifiedpermissionsActions.md#deletepolicytemplate)
- [GetIdentitySource](AwsVerifiedpermissionsActions.md#getidentitysource)
- [GetPolicy](AwsVerifiedpermissionsActions.md#getpolicy)
- [GetPolicyStore](AwsVerifiedpermissionsActions.md#getpolicystore)
- [GetPolicyTemplate](AwsVerifiedpermissionsActions.md#getpolicytemplate)
- [GetSchema](AwsVerifiedpermissionsActions.md#getschema)
- [IsAuthorized](AwsVerifiedpermissionsActions.md#isauthorized)
- [IsAuthorizedWithToken](AwsVerifiedpermissionsActions.md#isauthorizedwithtoken)
- [ListIdentitySources](AwsVerifiedpermissionsActions.md#listidentitysources)
- [ListPolicies](AwsVerifiedpermissionsActions.md#listpolicies)
- [ListPolicyStores](AwsVerifiedpermissionsActions.md#listpolicystores)
- [ListPolicyTemplates](AwsVerifiedpermissionsActions.md#listpolicytemplates)
- [PutSchema](AwsVerifiedpermissionsActions.md#putschema)
- [UpdateIdentitySource](AwsVerifiedpermissionsActions.md#updateidentitysource)
- [UpdatePolicy](AwsVerifiedpermissionsActions.md#updatepolicy)
- [UpdatePolicyStore](AwsVerifiedpermissionsActions.md#updatepolicystore)
- [UpdatePolicyTemplate](AwsVerifiedpermissionsActions.md#updatepolicytemplate)

## Enumeration Members

### CreateIdentitySource

• **CreateIdentitySource** = ``"verifiedpermissions:CreateIdentitySource"``

Grants permission to create a reference to an external identity provider (IdP)
that is compatible with OpenID Connect (OIDC) authentication protocol, such as
Amazon Cognito

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html

#### Defined in

actions/verifiedpermissions.ts:19

___

### CreatePolicy

• **CreatePolicy** = ``"verifiedpermissions:CreatePolicy"``

Grants permission to create a Cedar policy and save it in the specified policy
store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html

#### Defined in

actions/verifiedpermissions.ts:26

___

### CreatePolicyStore

• **CreatePolicyStore** = ``"verifiedpermissions:CreatePolicyStore"``

Grants permission to create a Cedar policy and save it in the specified policy
store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicyStore.html

#### Defined in

actions/verifiedpermissions.ts:33

___

### CreatePolicyTemplate

• **CreatePolicyTemplate** = ``"verifiedpermissions:CreatePolicyTemplate"``

Grants permission to create a policy template

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicyTemplate.html

#### Defined in

actions/verifiedpermissions.ts:39

___

### DeleteIdentitySource

• **DeleteIdentitySource** = ``"verifiedpermissions:DeleteIdentitySource"``

Grants permission to delete an identity source that references an identity prov
ider (IdP) such as Amazon Cognito

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_DeleteIdentitySource.html

#### Defined in

actions/verifiedpermissions.ts:46

___

### DeletePolicy

• **DeletePolicy** = ``"verifiedpermissions:DeletePolicy"``

Grants permission to delete the specified policy from the policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_DeletePolicy.html

#### Defined in

actions/verifiedpermissions.ts:52

___

### DeletePolicyStore

• **DeletePolicyStore** = ``"verifiedpermissions:DeletePolicyStore"``

Grants permission to delete the specified policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_DeletePolicyStore.html

#### Defined in

actions/verifiedpermissions.ts:58

___

### DeletePolicyTemplate

• **DeletePolicyTemplate** = ``"verifiedpermissions:DeletePolicyTemplate"``

Grants permission to delete the specified policy template from the policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_DeletePolicyTemplate.html

#### Defined in

actions/verifiedpermissions.ts:64

___

### GetIdentitySource

• **GetIdentitySource** = ``"verifiedpermissions:GetIdentitySource"``

Grants permission to retrieve the details about the specified identity source

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html

#### Defined in

actions/verifiedpermissions.ts:70

___

### GetPolicy

• **GetPolicy** = ``"verifiedpermissions:GetPolicy"``

Grants permission to retrieve information about the specified policy

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html

#### Defined in

actions/verifiedpermissions.ts:76

___

### GetPolicyStore

• **GetPolicyStore** = ``"verifiedpermissions:GetPolicyStore"``

Grants permission to retrieve details about a policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicyStore.html

#### Defined in

actions/verifiedpermissions.ts:82

___

### GetPolicyTemplate

• **GetPolicyTemplate** = ``"verifiedpermissions:GetPolicyTemplate"``

Grants permission to retrieve the details for the specified policy template in
the specified policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicyTemplate.html

#### Defined in

actions/verifiedpermissions.ts:89

___

### GetSchema

• **GetSchema** = ``"verifiedpermissions:GetSchema"``

Grants permission to retrieve the details for the specified schema in the speci
fied policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetSchema.html

#### Defined in

actions/verifiedpermissions.ts:96

___

### IsAuthorized

• **IsAuthorized** = ``"verifiedpermissions:IsAuthorized"``

Grants permission to make an authorization decision about a service request des
cribed in the parameters

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html

#### Defined in

actions/verifiedpermissions.ts:103

___

### IsAuthorizedWithToken

• **IsAuthorizedWithToken** = ``"verifiedpermissions:IsAuthorizedWithToken"``

Grants permission to make an authorization decision about a service request des
cribed in the parameters. The principal in this request comes from an external
identity source

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html

#### Defined in

actions/verifiedpermissions.ts:111

___

### ListIdentitySources

• **ListIdentitySources** = ``"verifiedpermissions:ListIdentitySources"``

Grants permission to return a paginated list of all of the identity sources def
ined in the specified policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html

#### Defined in

actions/verifiedpermissions.ts:118

___

### ListPolicies

• **ListPolicies** = ``"verifiedpermissions:ListPolicies"``

Grants permission to return a paginated list of all policies stored in the spec
ified policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html

#### Defined in

actions/verifiedpermissions.ts:125

___

### ListPolicyStores

• **ListPolicyStores** = ``"verifiedpermissions:ListPolicyStores"``

Grants permission to return a paginated list of all policy stores in the callin
g Amazon Web Services account

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStores.html

#### Defined in

actions/verifiedpermissions.ts:132

___

### ListPolicyTemplates

• **ListPolicyTemplates** = ``"verifiedpermissions:ListPolicyTemplates"``

Grants permission to return a paginated list of all policy templates in the spe
cified policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyTemplates.html

#### Defined in

actions/verifiedpermissions.ts:139

___

### PutSchema

• **PutSchema** = ``"verifiedpermissions:PutSchema"``

Grants permission to create or update the policy schema in the specified policy
store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PutSchema.html

#### Defined in

actions/verifiedpermissions.ts:146

___

### UpdateIdentitySource

• **UpdateIdentitySource** = ``"verifiedpermissions:UpdateIdentitySource"``

Grants permission to update the specified identity source to use a new identity
provider (IdP) source, or to change the mapping of identities from the IdP to a
different principal entity type

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html

#### Defined in

actions/verifiedpermissions.ts:154

___

### UpdatePolicy

• **UpdatePolicy** = ``"verifiedpermissions:UpdatePolicy"``

Grants permission to modify the specified Cedar static policy in the specified
policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html

#### Defined in

actions/verifiedpermissions.ts:161

___

### UpdatePolicyStore

• **UpdatePolicyStore** = ``"verifiedpermissions:UpdatePolicyStore"``

Grants permission to modify the validation setting for a policy store

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore.html

#### Defined in

actions/verifiedpermissions.ts:167

___

### UpdatePolicyTemplate

• **UpdatePolicyTemplate** = ``"verifiedpermissions:UpdatePolicyTemplate"``

Grants permission to update the specified policy template

See https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyTemplate.html

#### Defined in

actions/verifiedpermissions.ts:173
