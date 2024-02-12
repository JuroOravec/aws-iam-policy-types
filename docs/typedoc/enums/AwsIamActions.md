[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIamActions

# Enumeration: AwsIamActions

All IAM policy actions for AWS Identity and Access Management (IAM) (IAM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentityandaccessmanagementiam.html

2024-02-12T09:57:39.777Z

## Table of contents

### Enumeration Members

- [AddClientIDToOpenIDConnectProvider](AwsIamActions.md#addclientidtoopenidconnectprovider)
- [AddRoleToInstanceProfile](AwsIamActions.md#addroletoinstanceprofile)
- [AddUserToGroup](AwsIamActions.md#addusertogroup)
- [AttachGroupPolicy](AwsIamActions.md#attachgrouppolicy)
- [AttachRolePolicy](AwsIamActions.md#attachrolepolicy)
- [AttachUserPolicy](AwsIamActions.md#attachuserpolicy)
- [ChangePassword](AwsIamActions.md#changepassword)
- [CreateAccessKey](AwsIamActions.md#createaccesskey)
- [CreateAccountAlias](AwsIamActions.md#createaccountalias)
- [CreateGroup](AwsIamActions.md#creategroup)
- [CreateInstanceProfile](AwsIamActions.md#createinstanceprofile)
- [CreateLoginProfile](AwsIamActions.md#createloginprofile)
- [CreateOpenIDConnectProvider](AwsIamActions.md#createopenidconnectprovider)
- [CreatePolicy](AwsIamActions.md#createpolicy)
- [CreatePolicyVersion](AwsIamActions.md#createpolicyversion)
- [CreateRole](AwsIamActions.md#createrole)
- [CreateSAMLProvider](AwsIamActions.md#createsamlprovider)
- [CreateServiceLinkedRole](AwsIamActions.md#createservicelinkedrole)
- [CreateServiceSpecificCredential](AwsIamActions.md#createservicespecificcredential)
- [CreateUser](AwsIamActions.md#createuser)
- [CreateVirtualMFADevice](AwsIamActions.md#createvirtualmfadevice)
- [DeactivateMFADevice](AwsIamActions.md#deactivatemfadevice)
- [DeleteAccessKey](AwsIamActions.md#deleteaccesskey)
- [DeleteAccountAlias](AwsIamActions.md#deleteaccountalias)
- [DeleteAccountPasswordPolicy](AwsIamActions.md#deleteaccountpasswordpolicy)
- [DeleteCloudFrontPublicKey](AwsIamActions.md#deletecloudfrontpublickey)
- [DeleteGroup](AwsIamActions.md#deletegroup)
- [DeleteGroupPolicy](AwsIamActions.md#deletegrouppolicy)
- [DeleteInstanceProfile](AwsIamActions.md#deleteinstanceprofile)
- [DeleteLoginProfile](AwsIamActions.md#deleteloginprofile)
- [DeleteOpenIDConnectProvider](AwsIamActions.md#deleteopenidconnectprovider)
- [DeletePolicy](AwsIamActions.md#deletepolicy)
- [DeletePolicyVersion](AwsIamActions.md#deletepolicyversion)
- [DeleteRole](AwsIamActions.md#deleterole)
- [DeleteRolePermissionsBoundary](AwsIamActions.md#deleterolepermissionsboundary)
- [DeleteRolePolicy](AwsIamActions.md#deleterolepolicy)
- [DeleteSAMLProvider](AwsIamActions.md#deletesamlprovider)
- [DeleteSSHPublicKey](AwsIamActions.md#deletesshpublickey)
- [DeleteServerCertificate](AwsIamActions.md#deleteservercertificate)
- [DeleteServiceLinkedRole](AwsIamActions.md#deleteservicelinkedrole)
- [DeleteServiceSpecificCredential](AwsIamActions.md#deleteservicespecificcredential)
- [DeleteSigningCertificate](AwsIamActions.md#deletesigningcertificate)
- [DeleteUser](AwsIamActions.md#deleteuser)
- [DeleteUserPermissionsBoundary](AwsIamActions.md#deleteuserpermissionsboundary)
- [DeleteUserPolicy](AwsIamActions.md#deleteuserpolicy)
- [DeleteVirtualMFADevice](AwsIamActions.md#deletevirtualmfadevice)
- [DetachGroupPolicy](AwsIamActions.md#detachgrouppolicy)
- [DetachRolePolicy](AwsIamActions.md#detachrolepolicy)
- [DetachUserPolicy](AwsIamActions.md#detachuserpolicy)
- [EnableMFADevice](AwsIamActions.md#enablemfadevice)
- [GenerateCredentialReport](AwsIamActions.md#generatecredentialreport)
- [GenerateOrganizationsAccessReport](AwsIamActions.md#generateorganizationsaccessreport)
- [GenerateServiceLastAccessedDetails](AwsIamActions.md#generateservicelastaccesseddetails)
- [GetAccessKeyLastUsed](AwsIamActions.md#getaccesskeylastused)
- [GetAccountAuthorizationDetails](AwsIamActions.md#getaccountauthorizationdetails)
- [GetAccountEmailAddress](AwsIamActions.md#getaccountemailaddress)
- [GetAccountName](AwsIamActions.md#getaccountname)
- [GetAccountPasswordPolicy](AwsIamActions.md#getaccountpasswordpolicy)
- [GetAccountSummary](AwsIamActions.md#getaccountsummary)
- [GetCloudFrontPublicKey](AwsIamActions.md#getcloudfrontpublickey)
- [GetContextKeysForCustomPolicy](AwsIamActions.md#getcontextkeysforcustompolicy)
- [GetContextKeysForPrincipalPolicy](AwsIamActions.md#getcontextkeysforprincipalpolicy)
- [GetCredentialReport](AwsIamActions.md#getcredentialreport)
- [GetGroup](AwsIamActions.md#getgroup)
- [GetGroupPolicy](AwsIamActions.md#getgrouppolicy)
- [GetInstanceProfile](AwsIamActions.md#getinstanceprofile)
- [GetLoginProfile](AwsIamActions.md#getloginprofile)
- [GetMFADevice](AwsIamActions.md#getmfadevice)
- [GetOpenIDConnectProvider](AwsIamActions.md#getopenidconnectprovider)
- [GetOrganizationsAccessReport](AwsIamActions.md#getorganizationsaccessreport)
- [GetPolicy](AwsIamActions.md#getpolicy)
- [GetPolicyVersion](AwsIamActions.md#getpolicyversion)
- [GetRole](AwsIamActions.md#getrole)
- [GetRolePolicy](AwsIamActions.md#getrolepolicy)
- [GetSAMLProvider](AwsIamActions.md#getsamlprovider)
- [GetSSHPublicKey](AwsIamActions.md#getsshpublickey)
- [GetServerCertificate](AwsIamActions.md#getservercertificate)
- [GetServiceLastAccessedDetails](AwsIamActions.md#getservicelastaccesseddetails)
- [GetServiceLastAccessedDetailsWithEntities](AwsIamActions.md#getservicelastaccesseddetailswithentities)
- [GetServiceLinkedRoleDeletionStatus](AwsIamActions.md#getservicelinkedroledeletionstatus)
- [GetUser](AwsIamActions.md#getuser)
- [GetUserPolicy](AwsIamActions.md#getuserpolicy)
- [ListAccessKeys](AwsIamActions.md#listaccesskeys)
- [ListAccountAliases](AwsIamActions.md#listaccountaliases)
- [ListAttachedGroupPolicies](AwsIamActions.md#listattachedgrouppolicies)
- [ListAttachedRolePolicies](AwsIamActions.md#listattachedrolepolicies)
- [ListAttachedUserPolicies](AwsIamActions.md#listattacheduserpolicies)
- [ListCloudFrontPublicKeys](AwsIamActions.md#listcloudfrontpublickeys)
- [ListEntitiesForPolicy](AwsIamActions.md#listentitiesforpolicy)
- [ListGroupPolicies](AwsIamActions.md#listgrouppolicies)
- [ListGroups](AwsIamActions.md#listgroups)
- [ListGroupsForUser](AwsIamActions.md#listgroupsforuser)
- [ListInstanceProfileTags](AwsIamActions.md#listinstanceprofiletags)
- [ListInstanceProfiles](AwsIamActions.md#listinstanceprofiles)
- [ListInstanceProfilesForRole](AwsIamActions.md#listinstanceprofilesforrole)
- [ListMFADeviceTags](AwsIamActions.md#listmfadevicetags)
- [ListMFADevices](AwsIamActions.md#listmfadevices)
- [ListOpenIDConnectProviderTags](AwsIamActions.md#listopenidconnectprovidertags)
- [ListOpenIDConnectProviders](AwsIamActions.md#listopenidconnectproviders)
- [ListPolicies](AwsIamActions.md#listpolicies)
- [ListPoliciesGrantingServiceAccess](AwsIamActions.md#listpoliciesgrantingserviceaccess)
- [ListPolicyTags](AwsIamActions.md#listpolicytags)
- [ListPolicyVersions](AwsIamActions.md#listpolicyversions)
- [ListRolePolicies](AwsIamActions.md#listrolepolicies)
- [ListRoleTags](AwsIamActions.md#listroletags)
- [ListRoles](AwsIamActions.md#listroles)
- [ListSAMLProviderTags](AwsIamActions.md#listsamlprovidertags)
- [ListSAMLProviders](AwsIamActions.md#listsamlproviders)
- [ListSSHPublicKeys](AwsIamActions.md#listsshpublickeys)
- [ListSTSRegionalEndpointsStatus](AwsIamActions.md#liststsregionalendpointsstatus)
- [ListServerCertificateTags](AwsIamActions.md#listservercertificatetags)
- [ListServerCertificates](AwsIamActions.md#listservercertificates)
- [ListServiceSpecificCredentials](AwsIamActions.md#listservicespecificcredentials)
- [ListSigningCertificates](AwsIamActions.md#listsigningcertificates)
- [ListUserPolicies](AwsIamActions.md#listuserpolicies)
- [ListUserTags](AwsIamActions.md#listusertags)
- [ListUsers](AwsIamActions.md#listusers)
- [ListVirtualMFADevices](AwsIamActions.md#listvirtualmfadevices)
- [PassRole](AwsIamActions.md#passrole)
- [PutGroupPolicy](AwsIamActions.md#putgrouppolicy)
- [PutRolePermissionsBoundary](AwsIamActions.md#putrolepermissionsboundary)
- [PutRolePolicy](AwsIamActions.md#putrolepolicy)
- [PutUserPermissionsBoundary](AwsIamActions.md#putuserpermissionsboundary)
- [PutUserPolicy](AwsIamActions.md#putuserpolicy)
- [RemoveClientIDFromOpenIDConnectProvider](AwsIamActions.md#removeclientidfromopenidconnectprovider)
- [RemoveRoleFromInstanceProfile](AwsIamActions.md#removerolefrominstanceprofile)
- [RemoveUserFromGroup](AwsIamActions.md#removeuserfromgroup)
- [ResetServiceSpecificCredential](AwsIamActions.md#resetservicespecificcredential)
- [ResyncMFADevice](AwsIamActions.md#resyncmfadevice)
- [SetDefaultPolicyVersion](AwsIamActions.md#setdefaultpolicyversion)
- [SetSTSRegionalEndpointStatus](AwsIamActions.md#setstsregionalendpointstatus)
- [SetSecurityTokenServicePreferences](AwsIamActions.md#setsecuritytokenservicepreferences)
- [SimulateCustomPolicy](AwsIamActions.md#simulatecustompolicy)
- [SimulatePrincipalPolicy](AwsIamActions.md#simulateprincipalpolicy)
- [TagInstanceProfile](AwsIamActions.md#taginstanceprofile)
- [TagMFADevice](AwsIamActions.md#tagmfadevice)
- [TagOpenIDConnectProvider](AwsIamActions.md#tagopenidconnectprovider)
- [TagPolicy](AwsIamActions.md#tagpolicy)
- [TagRole](AwsIamActions.md#tagrole)
- [TagSAMLProvider](AwsIamActions.md#tagsamlprovider)
- [TagServerCertificate](AwsIamActions.md#tagservercertificate)
- [TagUser](AwsIamActions.md#taguser)
- [UntagInstanceProfile](AwsIamActions.md#untaginstanceprofile)
- [UntagMFADevice](AwsIamActions.md#untagmfadevice)
- [UntagOpenIDConnectProvider](AwsIamActions.md#untagopenidconnectprovider)
- [UntagPolicy](AwsIamActions.md#untagpolicy)
- [UntagRole](AwsIamActions.md#untagrole)
- [UntagSAMLProvider](AwsIamActions.md#untagsamlprovider)
- [UntagServerCertificate](AwsIamActions.md#untagservercertificate)
- [UntagUser](AwsIamActions.md#untaguser)
- [UpdateAccessKey](AwsIamActions.md#updateaccesskey)
- [UpdateAccountEmailAddress](AwsIamActions.md#updateaccountemailaddress)
- [UpdateAccountName](AwsIamActions.md#updateaccountname)
- [UpdateAccountPasswordPolicy](AwsIamActions.md#updateaccountpasswordpolicy)
- [UpdateAssumeRolePolicy](AwsIamActions.md#updateassumerolepolicy)
- [UpdateCloudFrontPublicKey](AwsIamActions.md#updatecloudfrontpublickey)
- [UpdateGroup](AwsIamActions.md#updategroup)
- [UpdateLoginProfile](AwsIamActions.md#updateloginprofile)
- [UpdateOpenIDConnectProviderThumbprint](AwsIamActions.md#updateopenidconnectproviderthumbprint)
- [UpdateRole](AwsIamActions.md#updaterole)
- [UpdateRoleDescription](AwsIamActions.md#updateroledescription)
- [UpdateSAMLProvider](AwsIamActions.md#updatesamlprovider)
- [UpdateSSHPublicKey](AwsIamActions.md#updatesshpublickey)
- [UpdateServerCertificate](AwsIamActions.md#updateservercertificate)
- [UpdateServiceSpecificCredential](AwsIamActions.md#updateservicespecificcredential)
- [UpdateSigningCertificate](AwsIamActions.md#updatesigningcertificate)
- [UpdateUser](AwsIamActions.md#updateuser)
- [UploadCloudFrontPublicKey](AwsIamActions.md#uploadcloudfrontpublickey)
- [UploadSSHPublicKey](AwsIamActions.md#uploadsshpublickey)
- [UploadServerCertificate](AwsIamActions.md#uploadservercertificate)
- [UploadSigningCertificate](AwsIamActions.md#uploadsigningcertificate)

## Enumeration Members

### AddClientIDToOpenIDConnectProvider

• **AddClientIDToOpenIDConnectProvider** = ``"iam:AddClientIDToOpenIDConnectProvider"``

Grants permission to add a new client ID (audience) to the list of registered I
Ds for the specified IAM OpenID Connect (OIDC) provider resource

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html

#### Defined in

actions/iam.ts:18

___

### AddRoleToInstanceProfile

• **AddRoleToInstanceProfile** = ``"iam:AddRoleToInstanceProfile"``

Grants permission to add an IAM role to the specified instance profile

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html

#### Defined in

actions/iam.ts:24

___

### AddUserToGroup

• **AddUserToGroup** = ``"iam:AddUserToGroup"``

Grants permission to add an IAM user to the specified IAM group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html

#### Defined in

actions/iam.ts:30

___

### AttachGroupPolicy

• **AttachGroupPolicy** = ``"iam:AttachGroupPolicy"``

Grants permission to attach a managed policy to the specified IAM group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html

#### Defined in

actions/iam.ts:36

___

### AttachRolePolicy

• **AttachRolePolicy** = ``"iam:AttachRolePolicy"``

Grants permission to attach a managed policy to the specified IAM role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html

#### Defined in

actions/iam.ts:42

___

### AttachUserPolicy

• **AttachUserPolicy** = ``"iam:AttachUserPolicy"``

Grants permission to attach a managed policy to the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html

#### Defined in

actions/iam.ts:48

___

### ChangePassword

• **ChangePassword** = ``"iam:ChangePassword"``

Grants permission to an IAM user to change their own password

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html

#### Defined in

actions/iam.ts:54

___

### CreateAccessKey

• **CreateAccessKey** = ``"iam:CreateAccessKey"``

Grants permission to create access key and secret access key for the specified
IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html

#### Defined in

actions/iam.ts:61

___

### CreateAccountAlias

• **CreateAccountAlias** = ``"iam:CreateAccountAlias"``

Grants permission to create an alias for your AWS account

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html

#### Defined in

actions/iam.ts:67

___

### CreateGroup

• **CreateGroup** = ``"iam:CreateGroup"``

Grants permission to create a new group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html

#### Defined in

actions/iam.ts:73

___

### CreateInstanceProfile

• **CreateInstanceProfile** = ``"iam:CreateInstanceProfile"``

Grants permission to create a new instance profile

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html

#### Defined in

actions/iam.ts:79

___

### CreateLoginProfile

• **CreateLoginProfile** = ``"iam:CreateLoginProfile"``

Grants permission to create a password for the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html

#### Defined in

actions/iam.ts:85

___

### CreateOpenIDConnectProvider

• **CreateOpenIDConnectProvider** = ``"iam:CreateOpenIDConnectProvider"``

Grants permission to create an IAM resource that describes an identity provider
(IdP) that supports OpenID Connect (OIDC)

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html

#### Defined in

actions/iam.ts:92

___

### CreatePolicy

• **CreatePolicy** = ``"iam:CreatePolicy"``

Grants permission to create a new managed policy

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html

#### Defined in

actions/iam.ts:98

___

### CreatePolicyVersion

• **CreatePolicyVersion** = ``"iam:CreatePolicyVersion"``

Grants permission to create a new version of the specified managed policy

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html

#### Defined in

actions/iam.ts:104

___

### CreateRole

• **CreateRole** = ``"iam:CreateRole"``

Grants permission to create a new role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html

#### Defined in

actions/iam.ts:110

___

### CreateSAMLProvider

• **CreateSAMLProvider** = ``"iam:CreateSAMLProvider"``

Grants permission to create an IAM resource that describes an identity provider
(IdP) that supports SAML 2.0

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html

#### Defined in

actions/iam.ts:117

___

### CreateServiceLinkedRole

• **CreateServiceLinkedRole** = ``"iam:CreateServiceLinkedRole"``

Grants permission to create an IAM role that allows an AWS service to perform a
ctions on your behalf

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceLinkedRole.html

#### Defined in

actions/iam.ts:124

___

### CreateServiceSpecificCredential

• **CreateServiceSpecificCredential** = ``"iam:CreateServiceSpecificCredential"``

Grants permission to create a new service-specific credential for an IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceSpecificCredential.html

#### Defined in

actions/iam.ts:130

___

### CreateUser

• **CreateUser** = ``"iam:CreateUser"``

Grants permission to create a new IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html

#### Defined in

actions/iam.ts:136

___

### CreateVirtualMFADevice

• **CreateVirtualMFADevice** = ``"iam:CreateVirtualMFADevice"``

Grants permission to create a new virtual MFA device

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html

#### Defined in

actions/iam.ts:142

___

### DeactivateMFADevice

• **DeactivateMFADevice** = ``"iam:DeactivateMFADevice"``

Grants permission to deactivate the specified MFA device and remove its associa
tion with the IAM user for which it was originally enabled

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html

#### Defined in

actions/iam.ts:149

___

### DeleteAccessKey

• **DeleteAccessKey** = ``"iam:DeleteAccessKey"``

Grants permission to delete the access key pair that is associated with the spe
cified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html

#### Defined in

actions/iam.ts:156

___

### DeleteAccountAlias

• **DeleteAccountAlias** = ``"iam:DeleteAccountAlias"``

Grants permission to delete the specified AWS account alias

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html

#### Defined in

actions/iam.ts:162

___

### DeleteAccountPasswordPolicy

• **DeleteAccountPasswordPolicy** = ``"iam:DeleteAccountPasswordPolicy"``

Grants permission to delete the password policy for the AWS account

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountPasswordPolicy.html

#### Defined in

actions/iam.ts:168

___

### DeleteCloudFrontPublicKey

• **DeleteCloudFrontPublicKey** = ``"iam:DeleteCloudFrontPublicKey"``

Grants permission to delete an existing CloudFront public key

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html

#### Defined in

actions/iam.ts:174

___

### DeleteGroup

• **DeleteGroup** = ``"iam:DeleteGroup"``

Grants permission to delete the specified IAM group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html

#### Defined in

actions/iam.ts:180

___

### DeleteGroupPolicy

• **DeleteGroupPolicy** = ``"iam:DeleteGroupPolicy"``

Grants permission to delete the specified inline policy from its group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html

#### Defined in

actions/iam.ts:186

___

### DeleteInstanceProfile

• **DeleteInstanceProfile** = ``"iam:DeleteInstanceProfile"``

Grants permission to delete the specified instance profile

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html

#### Defined in

actions/iam.ts:192

___

### DeleteLoginProfile

• **DeleteLoginProfile** = ``"iam:DeleteLoginProfile"``

Grants permission to delete the password for the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html

#### Defined in

actions/iam.ts:198

___

### DeleteOpenIDConnectProvider

• **DeleteOpenIDConnectProvider** = ``"iam:DeleteOpenIDConnectProvider"``

Grants permission to delete an OpenID Connect identity provider (IdP) resource
object in IAM

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteOpenIDConnectProvider.html

#### Defined in

actions/iam.ts:205

___

### DeletePolicy

• **DeletePolicy** = ``"iam:DeletePolicy"``

Grants permission to delete the specified managed policy and remove it from any
IAM entities (users, groups, or roles) to which it is attached

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html

#### Defined in

actions/iam.ts:212

___

### DeletePolicyVersion

• **DeletePolicyVersion** = ``"iam:DeletePolicyVersion"``

Grants permission to delete a version from the specified managed policy

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html

#### Defined in

actions/iam.ts:218

___

### DeleteRole

• **DeleteRole** = ``"iam:DeleteRole"``

Grants permission to delete the specified role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html

#### Defined in

actions/iam.ts:224

___

### DeleteRolePermissionsBoundary

• **DeleteRolePermissionsBoundary** = ``"iam:DeleteRolePermissionsBoundary"``

Grants permission to remove the permissions boundary from a role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePermissionsBoundary.html

#### Defined in

actions/iam.ts:230

___

### DeleteRolePolicy

• **DeleteRolePolicy** = ``"iam:DeleteRolePolicy"``

Grants permission to delete the specified inline policy from the specified role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html

#### Defined in

actions/iam.ts:236

___

### DeleteSAMLProvider

• **DeleteSAMLProvider** = ``"iam:DeleteSAMLProvider"``

Grants permission to delete a SAML provider resource in IAM

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSAMLProvider.html

#### Defined in

actions/iam.ts:242

___

### DeleteSSHPublicKey

• **DeleteSSHPublicKey** = ``"iam:DeleteSSHPublicKey"``

Grants permission to delete the specified SSH public key

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html

#### Defined in

actions/iam.ts:248

___

### DeleteServerCertificate

• **DeleteServerCertificate** = ``"iam:DeleteServerCertificate"``

Grants permission to delete the specified server certificate

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServerCertificate.html

#### Defined in

actions/iam.ts:254

___

### DeleteServiceLinkedRole

• **DeleteServiceLinkedRole** = ``"iam:DeleteServiceLinkedRole"``

Grants permission to delete an IAM role that is linked to a specific AWS servic
e, if the service is no longer using it

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html

#### Defined in

actions/iam.ts:261

___

### DeleteServiceSpecificCredential

• **DeleteServiceSpecificCredential** = ``"iam:DeleteServiceSpecificCredential"``

Grants permission to delete the specified service-specific credential for an IA
M user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html

#### Defined in

actions/iam.ts:268

___

### DeleteSigningCertificate

• **DeleteSigningCertificate** = ``"iam:DeleteSigningCertificate"``

Grants permission to delete a signing certificate that is associated with the s
pecified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html

#### Defined in

actions/iam.ts:275

___

### DeleteUser

• **DeleteUser** = ``"iam:DeleteUser"``

Grants permission to delete the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html

#### Defined in

actions/iam.ts:281

___

### DeleteUserPermissionsBoundary

• **DeleteUserPermissionsBoundary** = ``"iam:DeleteUserPermissionsBoundary"``

Grants permission to remove the permissions boundary from the specified IAM use
r

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPermissionsBoundary.html

#### Defined in

actions/iam.ts:288

___

### DeleteUserPolicy

• **DeleteUserPolicy** = ``"iam:DeleteUserPolicy"``

Grants permission to delete the specified inline policy from an IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html

#### Defined in

actions/iam.ts:294

___

### DeleteVirtualMFADevice

• **DeleteVirtualMFADevice** = ``"iam:DeleteVirtualMFADevice"``

Grants permission to delete a virtual MFA device

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteVirtualMFADevice.html

#### Defined in

actions/iam.ts:300

___

### DetachGroupPolicy

• **DetachGroupPolicy** = ``"iam:DetachGroupPolicy"``

Grants permission to detach a managed policy from the specified IAM group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html

#### Defined in

actions/iam.ts:306

___

### DetachRolePolicy

• **DetachRolePolicy** = ``"iam:DetachRolePolicy"``

Grants permission to detach a managed policy from the specified role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html

#### Defined in

actions/iam.ts:312

___

### DetachUserPolicy

• **DetachUserPolicy** = ``"iam:DetachUserPolicy"``

Grants permission to detach a managed policy from the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html

#### Defined in

actions/iam.ts:318

___

### EnableMFADevice

• **EnableMFADevice** = ``"iam:EnableMFADevice"``

Grants permission to enable an MFA device and associate it with the specified I
AM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html

#### Defined in

actions/iam.ts:325

___

### GenerateCredentialReport

• **GenerateCredentialReport** = ``"iam:GenerateCredentialReport"``

Grants permission to generate a credential report for the AWS account

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html

#### Defined in

actions/iam.ts:331

___

### GenerateOrganizationsAccessReport

• **GenerateOrganizationsAccessReport** = ``"iam:GenerateOrganizationsAccessReport"``

Grants permission to generate an access report for an AWS Organizations entity

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html

#### Defined in

actions/iam.ts:337

___

### GenerateServiceLastAccessedDetails

• **GenerateServiceLastAccessedDetails** = ``"iam:GenerateServiceLastAccessedDetails"``

Grants permission to generate a service last accessed data report for an IAM re
source

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html

#### Defined in

actions/iam.ts:344

___

### GetAccessKeyLastUsed

• **GetAccessKeyLastUsed** = ``"iam:GetAccessKeyLastUsed"``

Grants permission to retrieve information about when the specified access key w
as last used

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html

#### Defined in

actions/iam.ts:351

___

### GetAccountAuthorizationDetails

• **GetAccountAuthorizationDetails** = ``"iam:GetAccountAuthorizationDetails"``

Grants permission to retrieve information about all IAM users, groups, roles, a
nd policies in your AWS account, including their relationships to one another

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html

#### Defined in

actions/iam.ts:358

___

### GetAccountEmailAddress

• **GetAccountEmailAddress** = ``"iam:GetAccountEmailAddress"``

Grants permission to retrieve the email address that is associated with the acc
ount

See https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user.html

#### Defined in

actions/iam.ts:365

___

### GetAccountName

• **GetAccountName** = ``"iam:GetAccountName"``

Grants permission to retrieve the account name that is associated with the acco
unt

See https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user.html

#### Defined in

actions/iam.ts:372

___

### GetAccountPasswordPolicy

• **GetAccountPasswordPolicy** = ``"iam:GetAccountPasswordPolicy"``

Grants permission to retrieve the password policy for the AWS account

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html

#### Defined in

actions/iam.ts:378

___

### GetAccountSummary

• **GetAccountSummary** = ``"iam:GetAccountSummary"``

Grants permission to retrieve information about IAM entity usage and IAM quotas
in the AWS account

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html

#### Defined in

actions/iam.ts:385

___

### GetCloudFrontPublicKey

• **GetCloudFrontPublicKey** = ``"iam:GetCloudFrontPublicKey"``

Grants permission to retrieve information about the specified CloudFront public
key

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html

#### Defined in

actions/iam.ts:392

___

### GetContextKeysForCustomPolicy

• **GetContextKeysForCustomPolicy** = ``"iam:GetContextKeysForCustomPolicy"``

Grants permission to retrieve a list of all of the context keys that are refere
nced in the specified policy

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html

#### Defined in

actions/iam.ts:399

___

### GetContextKeysForPrincipalPolicy

• **GetContextKeysForPrincipalPolicy** = ``"iam:GetContextKeysForPrincipalPolicy"``

Grants permission to retrieve a list of all context keys that are referenced in
all IAM policies that are attached to the specified IAM identity (user, group,
or role)

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html

#### Defined in

actions/iam.ts:407

___

### GetCredentialReport

• **GetCredentialReport** = ``"iam:GetCredentialReport"``

Grants permission to retrieve a credential report for the AWS account

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html

#### Defined in

actions/iam.ts:413

___

### GetGroup

• **GetGroup** = ``"iam:GetGroup"``

Grants permission to retrieve a list of IAM users in the specified IAM group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html

#### Defined in

actions/iam.ts:419

___

### GetGroupPolicy

• **GetGroupPolicy** = ``"iam:GetGroupPolicy"``

Grants permission to retrieve an inline policy document that is embedded in the
specified IAM group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html

#### Defined in

actions/iam.ts:426

___

### GetInstanceProfile

• **GetInstanceProfile** = ``"iam:GetInstanceProfile"``

Grants permission to retrieve information about the specified instance profile,
including the instance profile's path, GUID, ARN, and role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html

#### Defined in

actions/iam.ts:433

___

### GetLoginProfile

• **GetLoginProfile** = ``"iam:GetLoginProfile"``

Grants permission to retrieve the user name and password creation date for the
specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html

#### Defined in

actions/iam.ts:440

___

### GetMFADevice

• **GetMFADevice** = ``"iam:GetMFADevice"``

Grants permission to retrieve information about an MFA device for the specified
user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetMFADevice.html

#### Defined in

actions/iam.ts:447

___

### GetOpenIDConnectProvider

• **GetOpenIDConnectProvider** = ``"iam:GetOpenIDConnectProvider"``

Grants permission to retrieve information about the specified OpenID Connect (O
IDC) provider resource in IAM

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html

#### Defined in

actions/iam.ts:454

___

### GetOrganizationsAccessReport

• **GetOrganizationsAccessReport** = ``"iam:GetOrganizationsAccessReport"``

Grants permission to retrieve an AWS Organizations access report

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html

#### Defined in

actions/iam.ts:460

___

### GetPolicy

• **GetPolicy** = ``"iam:GetPolicy"``

Grants permission to retrieve information about the specified managed policy, i
ncluding the policy's default version and the total number of identities to whi
ch the policy is attached

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html

#### Defined in

actions/iam.ts:468

___

### GetPolicyVersion

• **GetPolicyVersion** = ``"iam:GetPolicyVersion"``

Grants permission to retrieve information about a version of the specified mana
ged policy, including the policy document

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html

#### Defined in

actions/iam.ts:475

___

### GetRole

• **GetRole** = ``"iam:GetRole"``

Grants permission to retrieve information about the specified role, including t
he role's path, GUID, ARN, and the role's trust policy

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html

#### Defined in

actions/iam.ts:482

___

### GetRolePolicy

• **GetRolePolicy** = ``"iam:GetRolePolicy"``

Grants permission to retrieve an inline policy document that is embedded with t
he specified IAM role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html

#### Defined in

actions/iam.ts:489

___

### GetSAMLProvider

• **GetSAMLProvider** = ``"iam:GetSAMLProvider"``

Grants permission to retrieve the SAML provider metadocument that was uploaded
when the IAM SAML provider resource was created or updated

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html

#### Defined in

actions/iam.ts:496

___

### GetSSHPublicKey

• **GetSSHPublicKey** = ``"iam:GetSSHPublicKey"``

Grants permission to retrieve the specified SSH public key, including metadata
about the key

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html

#### Defined in

actions/iam.ts:503

___

### GetServerCertificate

• **GetServerCertificate** = ``"iam:GetServerCertificate"``

Grants permission to retrieve information about the specified server certificat
e stored in IAM

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html

#### Defined in

actions/iam.ts:510

___

### GetServiceLastAccessedDetails

• **GetServiceLastAccessedDetails** = ``"iam:GetServiceLastAccessedDetails"``

Grants permission to retrieve information about the service last accessed data
report

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html

#### Defined in

actions/iam.ts:517

___

### GetServiceLastAccessedDetailsWithEntities

• **GetServiceLastAccessedDetailsWithEntities** = ``"iam:GetServiceLastAccessedDetailsWithEntities"``

Grants permission to retrieve information about the entities from the service l
ast accessed data report

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html

#### Defined in

actions/iam.ts:524

___

### GetServiceLinkedRoleDeletionStatus

• **GetServiceLinkedRoleDeletionStatus** = ``"iam:GetServiceLinkedRoleDeletionStatus"``

Grants permission to retrieve an IAM service-linked role deletion status

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html

#### Defined in

actions/iam.ts:530

___

### GetUser

• **GetUser** = ``"iam:GetUser"``

Grants permission to retrieve information about the specified IAM user, includi
ng the user's creation date, path, unique ID, and ARN

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html

#### Defined in

actions/iam.ts:537

___

### GetUserPolicy

• **GetUserPolicy** = ``"iam:GetUserPolicy"``

Grants permission to retrieve an inline policy document that is embedded in the
specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html

#### Defined in

actions/iam.ts:544

___

### ListAccessKeys

• **ListAccessKeys** = ``"iam:ListAccessKeys"``

Grants permission to list information about the access key IDs that are associa
ted with the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html

#### Defined in

actions/iam.ts:551

___

### ListAccountAliases

• **ListAccountAliases** = ``"iam:ListAccountAliases"``

Grants permission to list the account alias that is associated with the AWS acc
ount

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html

#### Defined in

actions/iam.ts:558

___

### ListAttachedGroupPolicies

• **ListAttachedGroupPolicies** = ``"iam:ListAttachedGroupPolicies"``

Grants permission to list all managed policies that are attached to the specifi
ed IAM group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html

#### Defined in

actions/iam.ts:565

___

### ListAttachedRolePolicies

• **ListAttachedRolePolicies** = ``"iam:ListAttachedRolePolicies"``

Grants permission to list all managed policies that are attached to the specifi
ed IAM role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html

#### Defined in

actions/iam.ts:572

___

### ListAttachedUserPolicies

• **ListAttachedUserPolicies** = ``"iam:ListAttachedUserPolicies"``

Grants permission to list all managed policies that are attached to the specifi
ed IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html

#### Defined in

actions/iam.ts:579

___

### ListCloudFrontPublicKeys

• **ListCloudFrontPublicKeys** = ``"iam:ListCloudFrontPublicKeys"``

Grants permission to list all current CloudFront public keys for the account

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html

#### Defined in

actions/iam.ts:585

___

### ListEntitiesForPolicy

• **ListEntitiesForPolicy** = ``"iam:ListEntitiesForPolicy"``

Grants permission to list all IAM identities to which the specified managed pol
icy is attached

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html

#### Defined in

actions/iam.ts:592

___

### ListGroupPolicies

• **ListGroupPolicies** = ``"iam:ListGroupPolicies"``

Grants permission to list the names of the inline policies that are embedded in
the specified IAM group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html

#### Defined in

actions/iam.ts:599

___

### ListGroups

• **ListGroups** = ``"iam:ListGroups"``

Grants permission to list the IAM groups that have the specified path prefix

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html

#### Defined in

actions/iam.ts:605

___

### ListGroupsForUser

• **ListGroupsForUser** = ``"iam:ListGroupsForUser"``

Grants permission to list the IAM groups that the specified IAM user belongs to

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html

#### Defined in

actions/iam.ts:611

___

### ListInstanceProfileTags

• **ListInstanceProfileTags** = ``"iam:ListInstanceProfileTags"``

Grants permission to list the tags that are attached to the specified instance
profile

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfileTags.html

#### Defined in

actions/iam.ts:618

___

### ListInstanceProfiles

• **ListInstanceProfiles** = ``"iam:ListInstanceProfiles"``

Grants permission to list the instance profiles that have the specified path pr
efix

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html

#### Defined in

actions/iam.ts:625

___

### ListInstanceProfilesForRole

• **ListInstanceProfilesForRole** = ``"iam:ListInstanceProfilesForRole"``

Grants permission to list the instance profiles that have the specified associa
ted IAM role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html

#### Defined in

actions/iam.ts:632

___

### ListMFADeviceTags

• **ListMFADeviceTags** = ``"iam:ListMFADeviceTags"``

Grants permission to list the tags that are attached to the specified virtual m
fa device

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADeviceTags.html

#### Defined in

actions/iam.ts:639

___

### ListMFADevices

• **ListMFADevices** = ``"iam:ListMFADevices"``

Grants permission to list the MFA devices for an IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html

#### Defined in

actions/iam.ts:645

___

### ListOpenIDConnectProviderTags

• **ListOpenIDConnectProviderTags** = ``"iam:ListOpenIDConnectProviderTags"``

Grants permission to list the tags that are attached to the specified OpenID Co
nnect provider

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviderTags.html

#### Defined in

actions/iam.ts:652

___

### ListOpenIDConnectProviders

• **ListOpenIDConnectProviders** = ``"iam:ListOpenIDConnectProviders"``

Grants permission to list information about the IAM OpenID Connect (OIDC) provi
der resource objects that are defined in the AWS account

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html

#### Defined in

actions/iam.ts:659

___

### ListPolicies

• **ListPolicies** = ``"iam:ListPolicies"``

Grants permission to list all managed policies

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html

#### Defined in

actions/iam.ts:665

___

### ListPoliciesGrantingServiceAccess

• **ListPoliciesGrantingServiceAccess** = ``"iam:ListPoliciesGrantingServiceAccess"``

Grants permission to list information about the policies that grant an entity a
ccess to a specific service

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html

#### Defined in

actions/iam.ts:672

___

### ListPolicyTags

• **ListPolicyTags** = ``"iam:ListPolicyTags"``

Grants permission to list the tags that are attached to the specified managed p
olicy

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyTags.html

#### Defined in

actions/iam.ts:679

___

### ListPolicyVersions

• **ListPolicyVersions** = ``"iam:ListPolicyVersions"``

Grants permission to list information about the versions of the specified manag
ed policy, including the version that is currently set as the policy's default
version

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html

#### Defined in

actions/iam.ts:687

___

### ListRolePolicies

• **ListRolePolicies** = ``"iam:ListRolePolicies"``

Grants permission to list the names of the inline policies that are embedded in
the specified IAM role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html

#### Defined in

actions/iam.ts:694

___

### ListRoleTags

• **ListRoleTags** = ``"iam:ListRoleTags"``

Grants permission to list the tags that are attached to the specified IAM role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html

#### Defined in

actions/iam.ts:700

___

### ListRoles

• **ListRoles** = ``"iam:ListRoles"``

Grants permission to list the IAM roles that have the specified path prefix

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html

#### Defined in

actions/iam.ts:706

___

### ListSAMLProviderTags

• **ListSAMLProviderTags** = ``"iam:ListSAMLProviderTags"``

Grants permission to list the tags that are attached to the specified SAML prov
ider

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviderTags.html

#### Defined in

actions/iam.ts:713

___

### ListSAMLProviders

• **ListSAMLProviders** = ``"iam:ListSAMLProviders"``

Grants permission to list the SAML provider resources in IAM

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html

#### Defined in

actions/iam.ts:719

___

### ListSSHPublicKeys

• **ListSSHPublicKeys** = ``"iam:ListSSHPublicKeys"``

Grants permission to list information about the SSH public keys that are associ
ated with the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html

#### Defined in

actions/iam.ts:726

___

### ListSTSRegionalEndpointsStatus

• **ListSTSRegionalEndpointsStatus** = ``"iam:ListSTSRegionalEndpointsStatus"``

Grants permission to list the status of all active STS regional endpoints

See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html

#### Defined in

actions/iam.ts:732

___

### ListServerCertificateTags

• **ListServerCertificateTags** = ``"iam:ListServerCertificateTags"``

Grants permission to list the tags that are attached to the specified server ce
rtificate

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificateTags.html

#### Defined in

actions/iam.ts:739

___

### ListServerCertificates

• **ListServerCertificates** = ``"iam:ListServerCertificates"``

Grants permission to list the server certificates that have the specified path
prefix

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html

#### Defined in

actions/iam.ts:746

___

### ListServiceSpecificCredentials

• **ListServiceSpecificCredentials** = ``"iam:ListServiceSpecificCredentials"``

Grants permission to list the service-specific credentials that are associated
with the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html

#### Defined in

actions/iam.ts:753

___

### ListSigningCertificates

• **ListSigningCertificates** = ``"iam:ListSigningCertificates"``

Grants permission to list information about the signing certificates that are a
ssociated with the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html

#### Defined in

actions/iam.ts:760

___

### ListUserPolicies

• **ListUserPolicies** = ``"iam:ListUserPolicies"``

Grants permission to list the names of the inline policies that are embedded in
the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html

#### Defined in

actions/iam.ts:767

___

### ListUserTags

• **ListUserTags** = ``"iam:ListUserTags"``

Grants permission to list the tags that are attached to the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html

#### Defined in

actions/iam.ts:773

___

### ListUsers

• **ListUsers** = ``"iam:ListUsers"``

Grants permission to list the IAM users that have the specified path prefix

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html

#### Defined in

actions/iam.ts:779

___

### ListVirtualMFADevices

• **ListVirtualMFADevices** = ``"iam:ListVirtualMFADevices"``

Grants permission to list virtual MFA devices by assignment status

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html

#### Defined in

actions/iam.ts:785

___

### PassRole

• **PassRole** = ``"iam:PassRole"``

Grants permission to pass a role to a service

See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html

#### Defined in

actions/iam.ts:791

___

### PutGroupPolicy

• **PutGroupPolicy** = ``"iam:PutGroupPolicy"``

Grants permission to create or update an inline policy document that is embedde
d in the specified IAM group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html

#### Defined in

actions/iam.ts:798

___

### PutRolePermissionsBoundary

• **PutRolePermissionsBoundary** = ``"iam:PutRolePermissionsBoundary"``

Grants permission to set a managed policy as a permissions boundary for a role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePermissionsBoundary.html

#### Defined in

actions/iam.ts:804

___

### PutRolePolicy

• **PutRolePolicy** = ``"iam:PutRolePolicy"``

Grants permission to create or update an inline policy document that is embedde
d in the specified IAM role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html

#### Defined in

actions/iam.ts:811

___

### PutUserPermissionsBoundary

• **PutUserPermissionsBoundary** = ``"iam:PutUserPermissionsBoundary"``

Grants permission to set a managed policy as a permissions boundary for an IAM
user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPermissionsBoundary.html

#### Defined in

actions/iam.ts:818

___

### PutUserPolicy

• **PutUserPolicy** = ``"iam:PutUserPolicy"``

Grants permission to create or update an inline policy document that is embedde
d in the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html

#### Defined in

actions/iam.ts:825

___

### RemoveClientIDFromOpenIDConnectProvider

• **RemoveClientIDFromOpenIDConnectProvider** = ``"iam:RemoveClientIDFromOpenIDConnectProvider"``

Grants permission to remove the client ID (audience) from the list of client ID
s in the specified IAM OpenID Connect (OIDC) provider resource

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveClientIDFromOpenIDConnectProvider.html

#### Defined in

actions/iam.ts:832

___

### RemoveRoleFromInstanceProfile

• **RemoveRoleFromInstanceProfile** = ``"iam:RemoveRoleFromInstanceProfile"``

Grants permission to remove an IAM role from the specified EC2 instance profile

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html

#### Defined in

actions/iam.ts:838

___

### RemoveUserFromGroup

• **RemoveUserFromGroup** = ``"iam:RemoveUserFromGroup"``

Grants permission to remove an IAM user from the specified group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html

#### Defined in

actions/iam.ts:844

___

### ResetServiceSpecificCredential

• **ResetServiceSpecificCredential** = ``"iam:ResetServiceSpecificCredential"``

Grants permission to reset the password for an existing service-specific creden
tial for an IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html

#### Defined in

actions/iam.ts:851

___

### ResyncMFADevice

• **ResyncMFADevice** = ``"iam:ResyncMFADevice"``

Grants permission to synchronize the specified MFA device with its IAM entity (
user or role)

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResyncMFADevice.html

#### Defined in

actions/iam.ts:858

___

### SetDefaultPolicyVersion

• **SetDefaultPolicyVersion** = ``"iam:SetDefaultPolicyVersion"``

Grants permission to set the version of the specified policy as the policy's de
fault version

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetDefaultPolicyVersion.html

#### Defined in

actions/iam.ts:865

___

### SetSTSRegionalEndpointStatus

• **SetSTSRegionalEndpointStatus** = ``"iam:SetSTSRegionalEndpointStatus"``

Grants permission to activate or deactivate an STS regional endpoint

See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html

#### Defined in

actions/iam.ts:871

___

### SetSecurityTokenServicePreferences

• **SetSecurityTokenServicePreferences** = ``"iam:SetSecurityTokenServicePreferences"``

Grants permission to set the STS global endpoint token version

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetSecurityTokenServicePreferences.html

#### Defined in

actions/iam.ts:877

___

### SimulateCustomPolicy

• **SimulateCustomPolicy** = ``"iam:SimulateCustomPolicy"``

Grants permission to simulate whether an identity-based policy or resource-base
d policy provides permissions for specific API operations and resources

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html

#### Defined in

actions/iam.ts:884

___

### SimulatePrincipalPolicy

• **SimulatePrincipalPolicy** = ``"iam:SimulatePrincipalPolicy"``

Grants permission to simulate whether an identity-based policy that is attached
to a specified IAM entity (user or role) provides permissions for specific API
operations and resources

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html

#### Defined in

actions/iam.ts:892

___

### TagInstanceProfile

• **TagInstanceProfile** = ``"iam:TagInstanceProfile"``

Grants permission to add tags to an instance profile

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagInstanceProfile.html

#### Defined in

actions/iam.ts:898

___

### TagMFADevice

• **TagMFADevice** = ``"iam:TagMFADevice"``

Grants permission to add tags to a virtual mfa device

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagMFADevice.html

#### Defined in

actions/iam.ts:904

___

### TagOpenIDConnectProvider

• **TagOpenIDConnectProvider** = ``"iam:TagOpenIDConnectProvider"``

Grants permission to add tags to an OpenID Connect provider

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagOpenIDConnectProvider.html

#### Defined in

actions/iam.ts:910

___

### TagPolicy

• **TagPolicy** = ``"iam:TagPolicy"``

Grants permission to add tags to a managed policy

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagPolicy.html

#### Defined in

actions/iam.ts:916

___

### TagRole

• **TagRole** = ``"iam:TagRole"``

Grants permission to add tags to an IAM role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html

#### Defined in

actions/iam.ts:922

___

### TagSAMLProvider

• **TagSAMLProvider** = ``"iam:TagSAMLProvider"``

Grants permission to add tags to a SAML Provider

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagSAMLProvider.html

#### Defined in

actions/iam.ts:928

___

### TagServerCertificate

• **TagServerCertificate** = ``"iam:TagServerCertificate"``

Grants permission to add tags to a server certificate

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagServerCertificate.html

#### Defined in

actions/iam.ts:934

___

### TagUser

• **TagUser** = ``"iam:TagUser"``

Grants permission to add tags to an IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html

#### Defined in

actions/iam.ts:940

___

### UntagInstanceProfile

• **UntagInstanceProfile** = ``"iam:UntagInstanceProfile"``

Grants permission to remove the specified tags from the instance profile

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagInstanceProfile.html

#### Defined in

actions/iam.ts:946

___

### UntagMFADevice

• **UntagMFADevice** = ``"iam:UntagMFADevice"``

Grants permission to remove the specified tags from the virtual mfa device

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagMFADevice.html

#### Defined in

actions/iam.ts:952

___

### UntagOpenIDConnectProvider

• **UntagOpenIDConnectProvider** = ``"iam:UntagOpenIDConnectProvider"``

Grants permission to remove the specified tags from the OpenID Connect provider

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagOpenIDConnectProvider.html

#### Defined in

actions/iam.ts:958

___

### UntagPolicy

• **UntagPolicy** = ``"iam:UntagPolicy"``

Grants permission to remove the specified tags from the managed policy

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagPolicy.html

#### Defined in

actions/iam.ts:964

___

### UntagRole

• **UntagRole** = ``"iam:UntagRole"``

Grants permission to remove the specified tags from the role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html

#### Defined in

actions/iam.ts:970

___

### UntagSAMLProvider

• **UntagSAMLProvider** = ``"iam:UntagSAMLProvider"``

Grants permission to remove the specified tags from the SAML Provider

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagSAMLProvider.html

#### Defined in

actions/iam.ts:976

___

### UntagServerCertificate

• **UntagServerCertificate** = ``"iam:UntagServerCertificate"``

Grants permission to remove the specified tags from the server certificate

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagServerCertificate.html

#### Defined in

actions/iam.ts:982

___

### UntagUser

• **UntagUser** = ``"iam:UntagUser"``

Grants permission to remove the specified tags from the user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html

#### Defined in

actions/iam.ts:988

___

### UpdateAccessKey

• **UpdateAccessKey** = ``"iam:UpdateAccessKey"``

Grants permission to update the status of the specified access key as Active or
Inactive

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html

#### Defined in

actions/iam.ts:995

___

### UpdateAccountEmailAddress

• **UpdateAccountEmailAddress** = ``"iam:UpdateAccountEmailAddress"``

Grants permission to update the email address that is associated with the accou
nt

See https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user.html

#### Defined in

actions/iam.ts:1002

___

### UpdateAccountName

• **UpdateAccountName** = ``"iam:UpdateAccountName"``

Grants permission to update the account name that is associated with the accoun
t

See https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user.html

#### Defined in

actions/iam.ts:1009

___

### UpdateAccountPasswordPolicy

• **UpdateAccountPasswordPolicy** = ``"iam:UpdateAccountPasswordPolicy"``

Grants permission to update the password policy settings for the AWS account

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html

#### Defined in

actions/iam.ts:1015

___

### UpdateAssumeRolePolicy

• **UpdateAssumeRolePolicy** = ``"iam:UpdateAssumeRolePolicy"``

Grants permission to update the policy that grants an IAM entity permission to
assume a role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html

#### Defined in

actions/iam.ts:1022

___

### UpdateCloudFrontPublicKey

• **UpdateCloudFrontPublicKey** = ``"iam:UpdateCloudFrontPublicKey"``

Grants permission to update an existing CloudFront public key

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html

#### Defined in

actions/iam.ts:1028

___

### UpdateGroup

• **UpdateGroup** = ``"iam:UpdateGroup"``

Grants permission to update the name or path of the specified IAM group

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html

#### Defined in

actions/iam.ts:1034

___

### UpdateLoginProfile

• **UpdateLoginProfile** = ``"iam:UpdateLoginProfile"``

Grants permission to change the password for the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html

#### Defined in

actions/iam.ts:1040

___

### UpdateOpenIDConnectProviderThumbprint

• **UpdateOpenIDConnectProviderThumbprint** = ``"iam:UpdateOpenIDConnectProviderThumbprint"``

Grants permission to update the entire list of server certificate thumbprints t
hat are associated with an OpenID Connect (OIDC) provider resource

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html

#### Defined in

actions/iam.ts:1047

___

### UpdateRole

• **UpdateRole** = ``"iam:UpdateRole"``

Grants permission to update the description or maximum session duration setting
of a role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html

#### Defined in

actions/iam.ts:1054

___

### UpdateRoleDescription

• **UpdateRoleDescription** = ``"iam:UpdateRoleDescription"``

Grants permission to update only the description of a role

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html

#### Defined in

actions/iam.ts:1060

___

### UpdateSAMLProvider

• **UpdateSAMLProvider** = ``"iam:UpdateSAMLProvider"``

Grants permission to update the metadata document for an existing SAML provider
resource

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html

#### Defined in

actions/iam.ts:1067

___

### UpdateSSHPublicKey

• **UpdateSSHPublicKey** = ``"iam:UpdateSSHPublicKey"``

Grants permission to update the status of an IAM user's SSH public key to activ
e or inactive

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSSHPublicKey.html

#### Defined in

actions/iam.ts:1074

___

### UpdateServerCertificate

• **UpdateServerCertificate** = ``"iam:UpdateServerCertificate"``

Grants permission to update the name or the path of the specified server certif
icate stored in IAM

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServerCertificate.html

#### Defined in

actions/iam.ts:1081

___

### UpdateServiceSpecificCredential

• **UpdateServiceSpecificCredential** = ``"iam:UpdateServiceSpecificCredential"``

Grants permission to update the status of a service-specific credential to acti
ve or inactive for an IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServiceSpecificCredential.html

#### Defined in

actions/iam.ts:1088

___

### UpdateSigningCertificate

• **UpdateSigningCertificate** = ``"iam:UpdateSigningCertificate"``

Grants permission to update the status of the specified user signing certificat
e to active or disabled

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSigningCertificate.html

#### Defined in

actions/iam.ts:1095

___

### UpdateUser

• **UpdateUser** = ``"iam:UpdateUser"``

Grants permission to update the name or the path of the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html

#### Defined in

actions/iam.ts:1101

___

### UploadCloudFrontPublicKey

• **UploadCloudFrontPublicKey** = ``"iam:UploadCloudFrontPublicKey"``

Grants permission to upload a CloudFront public key

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html

#### Defined in

actions/iam.ts:1107

___

### UploadSSHPublicKey

• **UploadSSHPublicKey** = ``"iam:UploadSSHPublicKey"``

Grants permission to upload an SSH public key and associate it with the specifi
ed IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html

#### Defined in

actions/iam.ts:1114

___

### UploadServerCertificate

• **UploadServerCertificate** = ``"iam:UploadServerCertificate"``

Grants permission to upload a server certificate entity for the AWS account

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html

#### Defined in

actions/iam.ts:1120

___

### UploadSigningCertificate

• **UploadSigningCertificate** = ``"iam:UploadSigningCertificate"``

Grants permission to upload an X.509 signing certificate and associate it with
the specified IAM user

See https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html

#### Defined in

actions/iam.ts:1127
