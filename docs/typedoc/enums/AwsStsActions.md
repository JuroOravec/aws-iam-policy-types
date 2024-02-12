[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsStsActions

# Enumeration: AwsStsActions

All IAM policy actions for AWS Security Token Service (STS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecuritytokenservice.html

2024-02-12T09:59:11.050Z

## Table of contents

### Enumeration Members

- [AssumeRole](AwsStsActions.md#assumerole)
- [AssumeRoleWithSAML](AwsStsActions.md#assumerolewithsaml)
- [AssumeRoleWithWebIdentity](AwsStsActions.md#assumerolewithwebidentity)
- [DecodeAuthorizationMessage](AwsStsActions.md#decodeauthorizationmessage)
- [GetAccessKeyInfo](AwsStsActions.md#getaccesskeyinfo)
- [GetCallerIdentity](AwsStsActions.md#getcalleridentity)
- [GetFederationToken](AwsStsActions.md#getfederationtoken)
- [GetServiceBearerToken](AwsStsActions.md#getservicebearertoken)
- [GetSessionToken](AwsStsActions.md#getsessiontoken)
- [SetContext](AwsStsActions.md#setcontext)
- [SetSourceIdentity](AwsStsActions.md#setsourceidentity)
- [TagSession](AwsStsActions.md#tagsession)

## Enumeration Members

### AssumeRole

• **AssumeRole** = ``"sts:AssumeRole"``

Grants permission to obtain a set of temporary security credentials that you ca
n use to access AWS resources that you might not normally have access to

See https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html

#### Defined in

actions/sts.ts:18

___

### AssumeRoleWithSAML

• **AssumeRoleWithSAML** = ``"sts:AssumeRoleWithSAML"``

Grants permission to obtain a set of temporary security credentials for users w
ho have been authenticated via a SAML authentication response

See https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html

#### Defined in

actions/sts.ts:25

___

### AssumeRoleWithWebIdentity

• **AssumeRoleWithWebIdentity** = ``"sts:AssumeRoleWithWebIdentity"``

Grants permission to obtain a set of temporary security credentials for users w
ho have been authenticated in a mobile or web application with a web identity p
rovider

See https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html

#### Defined in

actions/sts.ts:33

___

### DecodeAuthorizationMessage

• **DecodeAuthorizationMessage** = ``"sts:DecodeAuthorizationMessage"``

Grants permission to decode additional information about the authorization stat
us of a request from an encoded message returned in response to an AWS request

See https://docs.aws.amazon.com/STS/latest/APIReference/API_DecodeAuthorizationMessage.html

#### Defined in

actions/sts.ts:40

___

### GetAccessKeyInfo

• **GetAccessKeyInfo** = ``"sts:GetAccessKeyInfo"``

Grants permission to obtain details about the access key id passed as a paramet
er to the request

See https://docs.aws.amazon.com/STS/latest/APIReference/API_GetAccessKeyInfo.html

#### Defined in

actions/sts.ts:47

___

### GetCallerIdentity

• **GetCallerIdentity** = ``"sts:GetCallerIdentity"``

Grants permission to obtain details about the IAM identity whose credentials ar
e used to call the API

See https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity.html

#### Defined in

actions/sts.ts:54

___

### GetFederationToken

• **GetFederationToken** = ``"sts:GetFederationToken"``

Grants permission to obtain a set of temporary security credentials (consisting
of an access key ID, a secret access key, and a security token) for a federated
user

See https://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html

#### Defined in

actions/sts.ts:62

___

### GetServiceBearerToken

• **GetServiceBearerToken** = ``"sts:GetServiceBearerToken"``

Grants permission to obtain a STS bearer token for an AWS root user, IAM role,
or an IAM user

See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_bearer.html

#### Defined in

actions/sts.ts:69

___

### GetSessionToken

• **GetSessionToken** = ``"sts:GetSessionToken"``

Grants permission to obtain a set of temporary security credentials (consisting
of an access key ID, a secret access key, and a security token) for an AWS acco
unt or IAM user

See https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html

#### Defined in

actions/sts.ts:77

___

### SetContext

• **SetContext** = ``"sts:SetContext"``

Grants permission to set context keys on a STS session

See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-sts

#### Defined in

actions/sts.ts:83

___

### SetSourceIdentity

• **SetSourceIdentity** = ``"sts:SetSourceIdentity"``

Grants permission to set a source identity on a STS session

See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html#id_credentials_temp_control-access_monitor-perms

#### Defined in

actions/sts.ts:89

___

### TagSession

• **TagSession** = ``"sts:TagSession"``

Grants permission to add tags to a STS session

See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html

#### Defined in

actions/sts.ts:95
