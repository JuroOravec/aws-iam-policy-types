[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSsoDirectoryActions

# Enumeration: AwsSsoDirectoryActions

All IAM policy actions for AWS IAM Identity Center (successor to AWS Single Sign-On) directory (SSO-DIRECTORY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamidentitycentersuccessortoawssinglesign-ondirectory.html

2024-02-12T09:57:38.455Z

## Table of contents

### Enumeration Members

- [AddMemberToGroup](AwsSsoDirectoryActions.md#addmembertogroup)
- [CompleteVirtualMfaDeviceRegistration](AwsSsoDirectoryActions.md#completevirtualmfadeviceregistration)
- [CompleteWebAuthnDeviceRegistration](AwsSsoDirectoryActions.md#completewebauthndeviceregistration)
- [CreateAlias](AwsSsoDirectoryActions.md#createalias)
- [CreateBearerToken](AwsSsoDirectoryActions.md#createbearertoken)
- [CreateExternalIdPConfigurationForDirectory](AwsSsoDirectoryActions.md#createexternalidpconfigurationfordirectory)
- [CreateGroup](AwsSsoDirectoryActions.md#creategroup)
- [CreateProvisioningTenant](AwsSsoDirectoryActions.md#createprovisioningtenant)
- [CreateUser](AwsSsoDirectoryActions.md#createuser)
- [DeleteBearerToken](AwsSsoDirectoryActions.md#deletebearertoken)
- [DeleteExternalIdPCertificate](AwsSsoDirectoryActions.md#deleteexternalidpcertificate)
- [DeleteExternalIdPConfigurationForDirectory](AwsSsoDirectoryActions.md#deleteexternalidpconfigurationfordirectory)
- [DeleteGroup](AwsSsoDirectoryActions.md#deletegroup)
- [DeleteMfaDeviceForUser](AwsSsoDirectoryActions.md#deletemfadeviceforuser)
- [DeleteProvisioningTenant](AwsSsoDirectoryActions.md#deleteprovisioningtenant)
- [DeleteUser](AwsSsoDirectoryActions.md#deleteuser)
- [DescribeDirectory](AwsSsoDirectoryActions.md#describedirectory)
- [DescribeGroup](AwsSsoDirectoryActions.md#describegroup)
- [DescribeGroups](AwsSsoDirectoryActions.md#describegroups)
- [DescribeProvisioningTenant](AwsSsoDirectoryActions.md#describeprovisioningtenant)
- [DescribeUser](AwsSsoDirectoryActions.md#describeuser)
- [DescribeUserByUniqueAttribute](AwsSsoDirectoryActions.md#describeuserbyuniqueattribute)
- [DescribeUsers](AwsSsoDirectoryActions.md#describeusers)
- [DisableExternalIdPConfigurationForDirectory](AwsSsoDirectoryActions.md#disableexternalidpconfigurationfordirectory)
- [DisableUser](AwsSsoDirectoryActions.md#disableuser)
- [EnableExternalIdPConfigurationForDirectory](AwsSsoDirectoryActions.md#enableexternalidpconfigurationfordirectory)
- [EnableUser](AwsSsoDirectoryActions.md#enableuser)
- [GetAWSSPConfigurationForDirectory](AwsSsoDirectoryActions.md#getawsspconfigurationfordirectory)
- [GetUserPoolInfo](AwsSsoDirectoryActions.md#getuserpoolinfo)
- [ImportExternalIdPCertificate](AwsSsoDirectoryActions.md#importexternalidpcertificate)
- [IsMemberInGroup](AwsSsoDirectoryActions.md#ismemberingroup)
- [ListBearerTokens](AwsSsoDirectoryActions.md#listbearertokens)
- [ListExternalIdPCertificates](AwsSsoDirectoryActions.md#listexternalidpcertificates)
- [ListExternalIdPConfigurationsForDirectory](AwsSsoDirectoryActions.md#listexternalidpconfigurationsfordirectory)
- [ListGroupsForMember](AwsSsoDirectoryActions.md#listgroupsformember)
- [ListGroupsForUser](AwsSsoDirectoryActions.md#listgroupsforuser)
- [ListMembersInGroup](AwsSsoDirectoryActions.md#listmembersingroup)
- [ListMfaDevicesForUser](AwsSsoDirectoryActions.md#listmfadevicesforuser)
- [ListProvisioningTenants](AwsSsoDirectoryActions.md#listprovisioningtenants)
- [RemoveMemberFromGroup](AwsSsoDirectoryActions.md#removememberfromgroup)
- [SearchGroups](AwsSsoDirectoryActions.md#searchgroups)
- [SearchUsers](AwsSsoDirectoryActions.md#searchusers)
- [StartVirtualMfaDeviceRegistration](AwsSsoDirectoryActions.md#startvirtualmfadeviceregistration)
- [StartWebAuthnDeviceRegistration](AwsSsoDirectoryActions.md#startwebauthndeviceregistration)
- [UpdateExternalIdPConfigurationForDirectory](AwsSsoDirectoryActions.md#updateexternalidpconfigurationfordirectory)
- [UpdateGroup](AwsSsoDirectoryActions.md#updategroup)
- [UpdateGroupDisplayName](AwsSsoDirectoryActions.md#updategroupdisplayname)
- [UpdateMfaDeviceForUser](AwsSsoDirectoryActions.md#updatemfadeviceforuser)
- [UpdatePassword](AwsSsoDirectoryActions.md#updatepassword)
- [UpdateUser](AwsSsoDirectoryActions.md#updateuser)
- [UpdateUserName](AwsSsoDirectoryActions.md#updateusername)
- [VerifyEmail](AwsSsoDirectoryActions.md#verifyemail)

## Enumeration Members

### AddMemberToGroup

• **AddMemberToGroup** = ``"sso-directory:AddMemberToGroup"``

Grants permission to add a member to a group in the directory that AWS IAM Iden
tity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:18

___

### CompleteVirtualMfaDeviceRegistration

• **CompleteVirtualMfaDeviceRegistration** = ``"sso-directory:CompleteVirtualMfaDeviceRegistration"``

Grants permission to complete the creation process of a virtual MFA device

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:24

___

### CompleteWebAuthnDeviceRegistration

• **CompleteWebAuthnDeviceRegistration** = ``"sso-directory:CompleteWebAuthnDeviceRegistration"``

Grants permission to complete the registration process of a WebAuthn device

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:30

___

### CreateAlias

• **CreateAlias** = ``"sso-directory:CreateAlias"``

Grants permission to create an alias for the directory that AWS IAM Identity Ce
nter provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:37

___

### CreateBearerToken

• **CreateBearerToken** = ``"sso-directory:CreateBearerToken"``

Grants permission to create a bearer token for a given provisioning tenant

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:43

___

### CreateExternalIdPConfigurationForDirectory

• **CreateExternalIdPConfigurationForDirectory** = ``"sso-directory:CreateExternalIdPConfigurationForDirectory"``

Grants permission to create an External Identity Provider configuration for the
directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:50

___

### CreateGroup

• **CreateGroup** = ``"sso-directory:CreateGroup"``

Grants permission to create a group in the directory that AWS IAM Identity Cent
er provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:57

___

### CreateProvisioningTenant

• **CreateProvisioningTenant** = ``"sso-directory:CreateProvisioningTenant"``

Grants permission to create a provisioning tenant for a given directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:63

___

### CreateUser

• **CreateUser** = ``"sso-directory:CreateUser"``

Grants permission to create a user in the directory that AWS IAM Identity Cente
r provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:70

___

### DeleteBearerToken

• **DeleteBearerToken** = ``"sso-directory:DeleteBearerToken"``

Grants permission to delete a bearer token

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:76

___

### DeleteExternalIdPCertificate

• **DeleteExternalIdPCertificate** = ``"sso-directory:DeleteExternalIdPCertificate"``

Grants permission to delete the given external IdP certificate

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:82

___

### DeleteExternalIdPConfigurationForDirectory

• **DeleteExternalIdPConfigurationForDirectory** = ``"sso-directory:DeleteExternalIdPConfigurationForDirectory"``

Grants permission to delete an External Identity Provider configuration associa
ted with the directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:89

___

### DeleteGroup

• **DeleteGroup** = ``"sso-directory:DeleteGroup"``

Grants permission to delete a group from the directory that AWS IAM Identity Ce
nter provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:96

___

### DeleteMfaDeviceForUser

• **DeleteMfaDeviceForUser** = ``"sso-directory:DeleteMfaDeviceForUser"``

Grants permission to delete a MFA device by device name for a given user

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:102

___

### DeleteProvisioningTenant

• **DeleteProvisioningTenant** = ``"sso-directory:DeleteProvisioningTenant"``

Grants permission to delete the provisioning tenant

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:108

___

### DeleteUser

• **DeleteUser** = ``"sso-directory:DeleteUser"``

Grants permission to delete a user from the directory that AWS IAM Identity Cen
ter provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:115

___

### DescribeDirectory

• **DescribeDirectory** = ``"sso-directory:DescribeDirectory"``

Grants permission to retrieve information about the directory that AWS IAM Iden
tity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:122

___

### DescribeGroup

• **DescribeGroup** = ``"sso-directory:DescribeGroup"``

Grants permission to query the group data, not including user and group members

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:128

___

### DescribeGroups

• **DescribeGroups** = ``"sso-directory:DescribeGroups"``

Grants permission to retrieve information about groups from the directory that
AWS IAM Identity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:135

___

### DescribeProvisioningTenant

• **DescribeProvisioningTenant** = ``"sso-directory:DescribeProvisioningTenant"``

Grants permission to describes the provisioning tenant

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:141

___

### DescribeUser

• **DescribeUser** = ``"sso-directory:DescribeUser"``

Grants permission to retrieve information about a user from the directory that
AWS IAM Identity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:148

___

### DescribeUserByUniqueAttribute

• **DescribeUserByUniqueAttribute** = ``"sso-directory:DescribeUserByUniqueAttribute"``

Grants permission to describe user with a valid unique attribute represented fo
r the user

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:155

___

### DescribeUsers

• **DescribeUsers** = ``"sso-directory:DescribeUsers"``

Grants permission to retrieve information about user from the directory that AW
S IAM Identity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:162

___

### DisableExternalIdPConfigurationForDirectory

• **DisableExternalIdPConfigurationForDirectory** = ``"sso-directory:DisableExternalIdPConfigurationForDirectory"``

Grants permission to disable authentication of end users with an External Ident
ity Provider

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:169

___

### DisableUser

• **DisableUser** = ``"sso-directory:DisableUser"``

Grants permission to deactivate a user in the directory that AWS IAM Identity C
enter provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:176

___

### EnableExternalIdPConfigurationForDirectory

• **EnableExternalIdPConfigurationForDirectory** = ``"sso-directory:EnableExternalIdPConfigurationForDirectory"``

Grants permission to enable authentication of end users with an External Identi
ty Provider

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:183

___

### EnableUser

• **EnableUser** = ``"sso-directory:EnableUser"``

Grants permission to activate user in the directory that AWS IAM Identity Cente
r provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:190

___

### GetAWSSPConfigurationForDirectory

• **GetAWSSPConfigurationForDirectory** = ``"sso-directory:GetAWSSPConfigurationForDirectory"``

Grants permission to retrieve the AWS IAM Identity Center Service Provider conf
igurations for the directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:197

___

### GetUserPoolInfo

• **GetUserPoolInfo** = ``"sso-directory:GetUserPoolInfo"``

(Deprecated) Grants permission to get UserPool Info

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:203

___

### ImportExternalIdPCertificate

• **ImportExternalIdPCertificate** = ``"sso-directory:ImportExternalIdPCertificate"``

Grants permission to import the IdP certificate used for verifying external IdP
responses

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:210

___

### IsMemberInGroup

• **IsMemberInGroup** = ``"sso-directory:IsMemberInGroup"``

Grants permission to check if a member is a part of the group in the directory
that AWS IAM Identity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:217

___

### ListBearerTokens

• **ListBearerTokens** = ``"sso-directory:ListBearerTokens"``

Grants permission to list bearer tokens for a given provisioning tenant

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:223

___

### ListExternalIdPCertificates

• **ListExternalIdPCertificates** = ``"sso-directory:ListExternalIdPCertificates"``

Grants permission to list the external IdP certificates of a given directory an
d IdP

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:230

___

### ListExternalIdPConfigurationsForDirectory

• **ListExternalIdPConfigurationsForDirectory** = ``"sso-directory:ListExternalIdPConfigurationsForDirectory"``

Grants permission to list all the External Identity Provider configurations cre
ated for the directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:237

___

### ListGroupsForMember

• **ListGroupsForMember** = ``"sso-directory:ListGroupsForMember"``

Grants permission to list groups of the target member

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:243

___

### ListGroupsForUser

• **ListGroupsForUser** = ``"sso-directory:ListGroupsForUser"``

Grants permission to list groups for a user from the directory that AWS IAM Ide
ntity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:250

___

### ListMembersInGroup

• **ListMembersInGroup** = ``"sso-directory:ListMembersInGroup"``

Grants permission to retrieve all members that are part of a group in the direc
tory that AWS IAM Identity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:257

___

### ListMfaDevicesForUser

• **ListMfaDevicesForUser** = ``"sso-directory:ListMfaDevicesForUser"``

Grants permission to list all active MFA devices and their MFA device metadata
for a user

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:264

___

### ListProvisioningTenants

• **ListProvisioningTenants** = ``"sso-directory:ListProvisioningTenants"``

Grants permission to list provisioning tenants for a given directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:270

___

### RemoveMemberFromGroup

• **RemoveMemberFromGroup** = ``"sso-directory:RemoveMemberFromGroup"``

Grants permission to remove a member that is part of a group in the directory t
hat AWS IAM Identity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:277

___

### SearchGroups

• **SearchGroups** = ``"sso-directory:SearchGroups"``

Grants permission to search for groups within the associated directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:283

___

### SearchUsers

• **SearchUsers** = ``"sso-directory:SearchUsers"``

Grants permission to search for users within the associated directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:289

___

### StartVirtualMfaDeviceRegistration

• **StartVirtualMfaDeviceRegistration** = ``"sso-directory:StartVirtualMfaDeviceRegistration"``

Grants permission to begin the creation process of virtual mfa device

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:295

___

### StartWebAuthnDeviceRegistration

• **StartWebAuthnDeviceRegistration** = ``"sso-directory:StartWebAuthnDeviceRegistration"``

Grants permission to begin the registration process of a WebAuthn device

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:301

___

### UpdateExternalIdPConfigurationForDirectory

• **UpdateExternalIdPConfigurationForDirectory** = ``"sso-directory:UpdateExternalIdPConfigurationForDirectory"``

Grants permission to update an External Identity Provider configuration associa
ted with the directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:308

___

### UpdateGroup

• **UpdateGroup** = ``"sso-directory:UpdateGroup"``

Grants permission to update information about a group in the directory that AWS
IAM Identity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:315

___

### UpdateGroupDisplayName

• **UpdateGroupDisplayName** = ``"sso-directory:UpdateGroupDisplayName"``

Grants permission to update group display name update group display name respon
se

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:322

___

### UpdateMfaDeviceForUser

• **UpdateMfaDeviceForUser** = ``"sso-directory:UpdateMfaDeviceForUser"``

Grants permission to update MFA device information

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:328

___

### UpdatePassword

• **UpdatePassword** = ``"sso-directory:UpdatePassword"``

Grants permission to update a password by sending password reset link via email
or generating one time password for a user in the directory that AWS IAM Identi
ty Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:336

___

### UpdateUser

• **UpdateUser** = ``"sso-directory:UpdateUser"``

Grants permission to update user information in the directory that AWS IAM Iden
tity Center provides by default

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:343

___

### UpdateUserName

• **UpdateUserName** = ``"sso-directory:UpdateUserName"``

Grants permission to update user name update user name response

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:349

___

### VerifyEmail

• **VerifyEmail** = ``"sso-directory:VerifyEmail"``

Grants permission to verify an email address of an User

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso-directory.ts:355
