[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodecatalystActions

# Enumeration: AwsCodecatalystActions

All IAM policy actions for Amazon CodeCatalyst (CODECATALYST)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodecatalyst.html

2024-02-12T09:56:33.244Z

## Table of contents

### Enumeration Members

- [AcceptConnection](AwsCodecatalystActions.md#acceptconnection)
- [AssociateIamRoleToConnection](AwsCodecatalystActions.md#associateiamroletoconnection)
- [AssociateIdentityCenterApplicationToSpace](AwsCodecatalystActions.md#associateidentitycenterapplicationtospace)
- [AssociateIdentityToIdentityCenterApplication](AwsCodecatalystActions.md#associateidentitytoidentitycenterapplication)
- [BatchAssociateIdentitiesToIdentityCenterApplication](AwsCodecatalystActions.md#batchassociateidentitiestoidentitycenterapplication)
- [BatchDisassociateIdentitiesFromIdentityCenterApplication](AwsCodecatalystActions.md#batchdisassociateidentitiesfromidentitycenterapplication)
- [CreateIdentityCenterApplication](AwsCodecatalystActions.md#createidentitycenterapplication)
- [CreateSpace](AwsCodecatalystActions.md#createspace)
- [CreateSpaceAdminRoleAssignment](AwsCodecatalystActions.md#createspaceadminroleassignment)
- [DeleteConnection](AwsCodecatalystActions.md#deleteconnection)
- [DeleteIdentityCenterApplication](AwsCodecatalystActions.md#deleteidentitycenterapplication)
- [DisassociateIamRoleFromConnection](AwsCodecatalystActions.md#disassociateiamrolefromconnection)
- [DisassociateIdentityCenterApplicationFromSpace](AwsCodecatalystActions.md#disassociateidentitycenterapplicationfromspace)
- [DisassociateIdentityFromIdentityCenterApplication](AwsCodecatalystActions.md#disassociateidentityfromidentitycenterapplication)
- [GetBillingAuthorization](AwsCodecatalystActions.md#getbillingauthorization)
- [GetConnection](AwsCodecatalystActions.md#getconnection)
- [GetIdentityCenterApplication](AwsCodecatalystActions.md#getidentitycenterapplication)
- [GetPendingConnection](AwsCodecatalystActions.md#getpendingconnection)
- [ListConnections](AwsCodecatalystActions.md#listconnections)
- [ListIamRolesForConnection](AwsCodecatalystActions.md#listiamrolesforconnection)
- [ListIdentityCenterApplications](AwsCodecatalystActions.md#listidentitycenterapplications)
- [ListIdentityCenterApplicationsForSpace](AwsCodecatalystActions.md#listidentitycenterapplicationsforspace)
- [ListSpacesForIdentityCenterApplication](AwsCodecatalystActions.md#listspacesforidentitycenterapplication)
- [ListTagsForResource](AwsCodecatalystActions.md#listtagsforresource)
- [PutBillingAuthorization](AwsCodecatalystActions.md#putbillingauthorization)
- [RejectConnection](AwsCodecatalystActions.md#rejectconnection)
- [SynchronizeIdentityCenterApplication](AwsCodecatalystActions.md#synchronizeidentitycenterapplication)
- [TagResource](AwsCodecatalystActions.md#tagresource)
- [UntagResource](AwsCodecatalystActions.md#untagresource)
- [UpdateIdentityCenterApplication](AwsCodecatalystActions.md#updateidentitycenterapplication)

## Enumeration Members

### AcceptConnection

• **AcceptConnection** = ``"codecatalyst:AcceptConnection"``

Grants permission to accept a request to connect this account to an Amazon Code
Catalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:18

___

### AssociateIamRoleToConnection

• **AssociateIamRoleToConnection** = ``"codecatalyst:AssociateIamRoleToConnection"``

Grants permission to associate an IAM role to a connection

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:24

___

### AssociateIdentityCenterApplicationToSpace

• **AssociateIdentityCenterApplicationToSpace** = ``"codecatalyst:AssociateIdentityCenterApplicationToSpace"``

Grants permission to associate an IAM Identity Center application with an Amazo
n CodeCatalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:31

___

### AssociateIdentityToIdentityCenterApplication

• **AssociateIdentityToIdentityCenterApplication** = ``"codecatalyst:AssociateIdentityToIdentityCenterApplication"``

Grants permission to associate an identity with an IAM Identity Center applicat
ion for an Amazon CodeCatalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:38

___

### BatchAssociateIdentitiesToIdentityCenterApplication

• **BatchAssociateIdentitiesToIdentityCenterApplication** = ``"codecatalyst:BatchAssociateIdentitiesToIdentityCenterApplication"``

Grants permission to associate multiple identities with an IAM Identity Center
application for an Amazon CodeCatalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:45

___

### BatchDisassociateIdentitiesFromIdentityCenterApplication

• **BatchDisassociateIdentitiesFromIdentityCenterApplication** = ``"codecatalyst:BatchDisassociateIdentitiesFromIdentityCenterApplication"``

Grants permission to disassociate multiple identities from an IAM Identity Cent
er application for an Amazon CodeCatalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:52

___

### CreateIdentityCenterApplication

• **CreateIdentityCenterApplication** = ``"codecatalyst:CreateIdentityCenterApplication"``

Grants permission to create an IAM Identity Center application

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:58

___

### CreateSpace

• **CreateSpace** = ``"codecatalyst:CreateSpace"``

Grants permission to create an Amazon CodeCatalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:64

___

### CreateSpaceAdminRoleAssignment

• **CreateSpaceAdminRoleAssignment** = ``"codecatalyst:CreateSpaceAdminRoleAssignment"``

Grants permission to create an administrator role assignment for a given Amazon
CodeCatalyst space and IAM Identity Center application

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:71

___

### DeleteConnection

• **DeleteConnection** = ``"codecatalyst:DeleteConnection"``

Grants permission to delete a connection

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:77

___

### DeleteIdentityCenterApplication

• **DeleteIdentityCenterApplication** = ``"codecatalyst:DeleteIdentityCenterApplication"``

Grants permission to delete an IAM Identity Center application

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:83

___

### DisassociateIamRoleFromConnection

• **DisassociateIamRoleFromConnection** = ``"codecatalyst:DisassociateIamRoleFromConnection"``

Grants permission to disassociate an IAM role from a connection

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:89

___

### DisassociateIdentityCenterApplicationFromSpace

• **DisassociateIdentityCenterApplicationFromSpace** = ``"codecatalyst:DisassociateIdentityCenterApplicationFromSpace"``

Grants permission to disassociate an IAM Identity Center application from an Am
azon CodeCatalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:96

___

### DisassociateIdentityFromIdentityCenterApplication

• **DisassociateIdentityFromIdentityCenterApplication** = ``"codecatalyst:DisassociateIdentityFromIdentityCenterApplication"``

Grants permission to disassociate an identity from an IAM Identity Center appli
cation for an Amazon CodeCatalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:103

___

### GetBillingAuthorization

• **GetBillingAuthorization** = ``"codecatalyst:GetBillingAuthorization"``

Grants permission to describe the billing authorization for a connection

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:109

___

### GetConnection

• **GetConnection** = ``"codecatalyst:GetConnection"``

Grants permission to get a connection

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:115

___

### GetIdentityCenterApplication

• **GetIdentityCenterApplication** = ``"codecatalyst:GetIdentityCenterApplication"``

Grants permission to get information about an IAM Identity Center application

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:121

___

### GetPendingConnection

• **GetPendingConnection** = ``"codecatalyst:GetPendingConnection"``

Grants permission to get a pending request to connect this account to an Amazon
CodeCatalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:128

___

### ListConnections

• **ListConnections** = ``"codecatalyst:ListConnections"``

Grants permission to list connections that are not pending

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:134

___

### ListIamRolesForConnection

• **ListIamRolesForConnection** = ``"codecatalyst:ListIamRolesForConnection"``

Grants permission to list IAM roles associated with a connection

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:140

___

### ListIdentityCenterApplications

• **ListIdentityCenterApplications** = ``"codecatalyst:ListIdentityCenterApplications"``

Grants permission to view a list of all IAM Identity Center applications in the
account

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:147

___

### ListIdentityCenterApplicationsForSpace

• **ListIdentityCenterApplicationsForSpace** = ``"codecatalyst:ListIdentityCenterApplicationsForSpace"``

Grants permission to view a list of IAM Identity Center applications by Amazon
CodeCatalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:154

___

### ListSpacesForIdentityCenterApplication

• **ListSpacesForIdentityCenterApplication** = ``"codecatalyst:ListSpacesForIdentityCenterApplication"``

Grants permission to view a list of Amazon CodeCatalyst spaces by IAM Identity
Center application

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:161

___

### ListTagsForResource

• **ListTagsForResource** = ``"codecatalyst:ListTagsForResource"``

Grants permission to list tags for an Amazon CodeCatalyst resource

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:167

___

### PutBillingAuthorization

• **PutBillingAuthorization** = ``"codecatalyst:PutBillingAuthorization"``

Grants permission to create or update the billing authorization for a connectio
n

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:174

___

### RejectConnection

• **RejectConnection** = ``"codecatalyst:RejectConnection"``

Grants permission to reject a request to connect this account to an Amazon Code
Catalyst space

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:181

___

### SynchronizeIdentityCenterApplication

• **SynchronizeIdentityCenterApplication** = ``"codecatalyst:SynchronizeIdentityCenterApplication"``

Grants permission to synchronize an IAM Identity Center application with the ba
cking identity store

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:188

___

### TagResource

• **TagResource** = ``"codecatalyst:TagResource"``

Grants permission to tag an Amazon CodeCatalyst resource

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:194

___

### UntagResource

• **UntagResource** = ``"codecatalyst:UntagResource"``

Grants permission to untag an Amazon CodeCatalyst resource

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections

#### Defined in

actions/codecatalyst.ts:200

___

### UpdateIdentityCenterApplication

• **UpdateIdentityCenterApplication** = ``"codecatalyst:UpdateIdentityCenterApplication"``

Grants permission to update an IAM Identity Center application

See https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications

#### Defined in

actions/codecatalyst.ts:206
