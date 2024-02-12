[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCognitoIdentityActions

# Enumeration: AwsCognitoIdentityActions

All IAM policy actions for Amazon Cognito Identity (COGNITO-IDENTITY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitoidentity.html

2024-02-12T09:56:40.776Z

## Table of contents

### Enumeration Members

- [CreateIdentityPool](AwsCognitoIdentityActions.md#createidentitypool)
- [DeleteIdentities](AwsCognitoIdentityActions.md#deleteidentities)
- [DeleteIdentityPool](AwsCognitoIdentityActions.md#deleteidentitypool)
- [DescribeIdentity](AwsCognitoIdentityActions.md#describeidentity)
- [DescribeIdentityPool](AwsCognitoIdentityActions.md#describeidentitypool)
- [GetCredentialsForIdentity](AwsCognitoIdentityActions.md#getcredentialsforidentity)
- [GetId](AwsCognitoIdentityActions.md#getid)
- [GetIdentityPoolAnalytics](AwsCognitoIdentityActions.md#getidentitypoolanalytics)
- [GetIdentityPoolDailyAnalytics](AwsCognitoIdentityActions.md#getidentitypooldailyanalytics)
- [GetIdentityPoolRoles](AwsCognitoIdentityActions.md#getidentitypoolroles)
- [GetIdentityProviderDailyAnalytics](AwsCognitoIdentityActions.md#getidentityproviderdailyanalytics)
- [GetOpenIdToken](AwsCognitoIdentityActions.md#getopenidtoken)
- [GetOpenIdTokenForDeveloperIdentity](AwsCognitoIdentityActions.md#getopenidtokenfordeveloperidentity)
- [GetPrincipalTagAttributeMap](AwsCognitoIdentityActions.md#getprincipaltagattributemap)
- [ListIdentities](AwsCognitoIdentityActions.md#listidentities)
- [ListIdentityPools](AwsCognitoIdentityActions.md#listidentitypools)
- [ListTagsForResource](AwsCognitoIdentityActions.md#listtagsforresource)
- [LookupDeveloperIdentity](AwsCognitoIdentityActions.md#lookupdeveloperidentity)
- [MergeDeveloperIdentities](AwsCognitoIdentityActions.md#mergedeveloperidentities)
- [SetIdentityPoolRoles](AwsCognitoIdentityActions.md#setidentitypoolroles)
- [SetPrincipalTagAttributeMap](AwsCognitoIdentityActions.md#setprincipaltagattributemap)
- [TagResource](AwsCognitoIdentityActions.md#tagresource)
- [UnlinkDeveloperIdentity](AwsCognitoIdentityActions.md#unlinkdeveloperidentity)
- [UnlinkIdentity](AwsCognitoIdentityActions.md#unlinkidentity)
- [UntagResource](AwsCognitoIdentityActions.md#untagresource)
- [UpdateIdentityPool](AwsCognitoIdentityActions.md#updateidentitypool)

## Enumeration Members

### CreateIdentityPool

• **CreateIdentityPool** = ``"cognito-identity:CreateIdentityPool"``

Grants permission to create a new identity pool

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_CreateIdentityPool.html

#### Defined in

actions/cognito-identity.ts:17

___

### DeleteIdentities

• **DeleteIdentities** = ``"cognito-identity:DeleteIdentities"``

Grants permission to delete identities from an identity pool. You can specify a
list of 1-60 identities that you want to delete

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentities.html

#### Defined in

actions/cognito-identity.ts:24

___

### DeleteIdentityPool

• **DeleteIdentityPool** = ``"cognito-identity:DeleteIdentityPool"``

Grants permission to delete a user pool. Once a pool is deleted, users will not
be able to authenticate with the pool

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentityPool.html

#### Defined in

actions/cognito-identity.ts:31

___

### DescribeIdentity

• **DescribeIdentity** = ``"cognito-identity:DescribeIdentity"``

Grants permission to return metadata related to the given identity, including w
hen the identity was created and any associated linked logins

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentity.html

#### Defined in

actions/cognito-identity.ts:38

___

### DescribeIdentityPool

• **DescribeIdentityPool** = ``"cognito-identity:DescribeIdentityPool"``

Grants permission to get details about a particular identity pool, including th
e pool name, ID description, creation date, and current number of users

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentityPool.html

#### Defined in

actions/cognito-identity.ts:45

___

### GetCredentialsForIdentity

• **GetCredentialsForIdentity** = ``"cognito-identity:GetCredentialsForIdentity"``

Grants permission to return credentials for the provided identity ID

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html

#### Defined in

actions/cognito-identity.ts:51

___

### GetId

• **GetId** = ``"cognito-identity:GetId"``

Grants permission to generate (or retrieve) a Cognito ID. Supplying multiple lo
gins will create an implicit linked account

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetId.html

#### Defined in

actions/cognito-identity.ts:58

___

### GetIdentityPoolAnalytics

• **GetIdentityPoolAnalytics** = ``"cognito-identity:GetIdentityPoolAnalytics"``

Grants permission to get analytics data about the total current identity count
for all identity pool identity provider (IdPs)

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolAnalytics.html

#### Defined in

actions/cognito-identity.ts:65

___

### GetIdentityPoolDailyAnalytics

• **GetIdentityPoolDailyAnalytics** = ``"cognito-identity:GetIdentityPoolDailyAnalytics"``

Grants permission to get analytics data about the number of new identities and
total identities for all identity pool identity providers (IdPs)

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolDailyAnalytics.html

#### Defined in

actions/cognito-identity.ts:72

___

### GetIdentityPoolRoles

• **GetIdentityPoolRoles** = ``"cognito-identity:GetIdentityPoolRoles"``

Grants permission to get the roles for an identity pool

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolRoles.html

#### Defined in

actions/cognito-identity.ts:78

___

### GetIdentityProviderDailyAnalytics

• **GetIdentityProviderDailyAnalytics** = ``"cognito-identity:GetIdentityProviderDailyAnalytics"``

Grants permission to get analytics data about the number of new identities and
total identities for one identity pool identity provider (IdPs)

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityProviderDailyAnalytics.html

#### Defined in

actions/cognito-identity.ts:85

___

### GetOpenIdToken

• **GetOpenIdToken** = ``"cognito-identity:GetOpenIdToken"``

Grants permission to get an OpenID token, using a known Cognito ID

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdToken.html

#### Defined in

actions/cognito-identity.ts:91

___

### GetOpenIdTokenForDeveloperIdentity

• **GetOpenIdTokenForDeveloperIdentity** = ``"cognito-identity:GetOpenIdTokenForDeveloperIdentity"``

Grants permission to register (or retrieve) a Cognito IdentityId and an OpenID
Connect token for a user authenticated by your backend authentication process

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdTokenForDeveloperIdentity.html

#### Defined in

actions/cognito-identity.ts:98

___

### GetPrincipalTagAttributeMap

• **GetPrincipalTagAttributeMap** = ``"cognito-identity:GetPrincipalTagAttributeMap"``

Grants permission to get the principal tags for an identity pool and provider

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetPrincipalTagAttributeMap.html

#### Defined in

actions/cognito-identity.ts:104

___

### ListIdentities

• **ListIdentities** = ``"cognito-identity:ListIdentities"``

Grants permission to list the identities in an identity pool

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentities.html

#### Defined in

actions/cognito-identity.ts:110

___

### ListIdentityPools

• **ListIdentityPools** = ``"cognito-identity:ListIdentityPools"``

Grants permission to list all of the Cognito identity pools registered for your
account

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentityPools.html

#### Defined in

actions/cognito-identity.ts:117

___

### ListTagsForResource

• **ListTagsForResource** = ``"cognito-identity:ListTagsForResource"``

Grants permission to list the tags that are assigned to an Amazon Cognito ident
ity pool

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/cognito-identity.ts:124

___

### LookupDeveloperIdentity

• **LookupDeveloperIdentity** = ``"cognito-identity:LookupDeveloperIdentity"``

Grants permission to retrieve the IdentityId associated with a DeveloperUserIde
ntifier or the list of DeveloperUserIdentifiers associated with an IdentityId f
or an existing identity

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_LookupDeveloperIdentity.html

#### Defined in

actions/cognito-identity.ts:132

___

### MergeDeveloperIdentities

• **MergeDeveloperIdentities** = ``"cognito-identity:MergeDeveloperIdentities"``

Grants permission to merge two users having different IdentityIds, existing in
the same identity pool, and identified by the same developer provider

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_MergeDeveloperIdentities.html

#### Defined in

actions/cognito-identity.ts:139

___

### SetIdentityPoolRoles

• **SetIdentityPoolRoles** = ``"cognito-identity:SetIdentityPoolRoles"``

Grants permission to set the roles for an identity pool. These roles are used w
hen making calls to GetCredentialsForIdentity action

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_SetIdentityPoolRoles.html

#### Defined in

actions/cognito-identity.ts:146

___

### SetPrincipalTagAttributeMap

• **SetPrincipalTagAttributeMap** = ``"cognito-identity:SetPrincipalTagAttributeMap"``

Grants permission to set the principal tags for an identity pool and provider.
These tags are used when making calls to GetOpenIdToken action

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_SetPrincipalTagAttributeMap.html

#### Defined in

actions/cognito-identity.ts:153

___

### TagResource

• **TagResource** = ``"cognito-identity:TagResource"``

Grants permission to assign a set of tags to an Amazon Cognito identity pool

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_TagResource.html

#### Defined in

actions/cognito-identity.ts:159

___

### UnlinkDeveloperIdentity

• **UnlinkDeveloperIdentity** = ``"cognito-identity:UnlinkDeveloperIdentity"``

Grants permission to unlink a DeveloperUserIdentifier from an existing identity

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkDeveloperIdentity.html

#### Defined in

actions/cognito-identity.ts:165

___

### UnlinkIdentity

• **UnlinkIdentity** = ``"cognito-identity:UnlinkIdentity"``

Grants permission to unlink a federated identity from an existing account

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkIdentity.html

#### Defined in

actions/cognito-identity.ts:171

___

### UntagResource

• **UntagResource** = ``"cognito-identity:UntagResource"``

Grants permission to remove the specified tags from an Amazon Cognito identity
pool

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UntagResource.html

#### Defined in

actions/cognito-identity.ts:178

___

### UpdateIdentityPool

• **UpdateIdentityPool** = ``"cognito-identity:UpdateIdentityPool"``

Grants permission to update an identity pool

See https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UpdateIdentityPool.html

#### Defined in

actions/cognito-identity.ts:184
