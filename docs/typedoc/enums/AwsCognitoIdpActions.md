[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCognitoIdpActions

# Enumeration: AwsCognitoIdpActions

All IAM policy actions for Amazon Cognito User Pools (COGNITO-IDP)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitouserpools.html

2024-02-12T09:56:41.862Z

## Table of contents

### Enumeration Members

- [AddCustomAttributes](AwsCognitoIdpActions.md#addcustomattributes)
- [AdminAddUserToGroup](AwsCognitoIdpActions.md#adminaddusertogroup)
- [AdminConfirmSignUp](AwsCognitoIdpActions.md#adminconfirmsignup)
- [AdminCreateUser](AwsCognitoIdpActions.md#admincreateuser)
- [AdminDeleteUser](AwsCognitoIdpActions.md#admindeleteuser)
- [AdminDeleteUserAttributes](AwsCognitoIdpActions.md#admindeleteuserattributes)
- [AdminDisableProviderForUser](AwsCognitoIdpActions.md#admindisableproviderforuser)
- [AdminDisableUser](AwsCognitoIdpActions.md#admindisableuser)
- [AdminEnableUser](AwsCognitoIdpActions.md#adminenableuser)
- [AdminForgetDevice](AwsCognitoIdpActions.md#adminforgetdevice)
- [AdminGetDevice](AwsCognitoIdpActions.md#admingetdevice)
- [AdminGetUser](AwsCognitoIdpActions.md#admingetuser)
- [AdminInitiateAuth](AwsCognitoIdpActions.md#admininitiateauth)
- [AdminLinkProviderForUser](AwsCognitoIdpActions.md#adminlinkproviderforuser)
- [AdminListDevices](AwsCognitoIdpActions.md#adminlistdevices)
- [AdminListGroupsForUser](AwsCognitoIdpActions.md#adminlistgroupsforuser)
- [AdminListUserAuthEvents](AwsCognitoIdpActions.md#adminlistuserauthevents)
- [AdminRemoveUserFromGroup](AwsCognitoIdpActions.md#adminremoveuserfromgroup)
- [AdminResetUserPassword](AwsCognitoIdpActions.md#adminresetuserpassword)
- [AdminRespondToAuthChallenge](AwsCognitoIdpActions.md#adminrespondtoauthchallenge)
- [AdminSetUserMFAPreference](AwsCognitoIdpActions.md#adminsetusermfapreference)
- [AdminSetUserPassword](AwsCognitoIdpActions.md#adminsetuserpassword)
- [AdminSetUserSettings](AwsCognitoIdpActions.md#adminsetusersettings)
- [AdminUpdateAuthEventFeedback](AwsCognitoIdpActions.md#adminupdateautheventfeedback)
- [AdminUpdateDeviceStatus](AwsCognitoIdpActions.md#adminupdatedevicestatus)
- [AdminUpdateUserAttributes](AwsCognitoIdpActions.md#adminupdateuserattributes)
- [AdminUserGlobalSignOut](AwsCognitoIdpActions.md#adminuserglobalsignout)
- [AssociateSoftwareToken](AwsCognitoIdpActions.md#associatesoftwaretoken)
- [AssociateWebACL](AwsCognitoIdpActions.md#associatewebacl)
- [ChangePassword](AwsCognitoIdpActions.md#changepassword)
- [ConfirmDevice](AwsCognitoIdpActions.md#confirmdevice)
- [ConfirmForgotPassword](AwsCognitoIdpActions.md#confirmforgotpassword)
- [ConfirmSignUp](AwsCognitoIdpActions.md#confirmsignup)
- [CreateGroup](AwsCognitoIdpActions.md#creategroup)
- [CreateIdentityProvider](AwsCognitoIdpActions.md#createidentityprovider)
- [CreateResourceServer](AwsCognitoIdpActions.md#createresourceserver)
- [CreateUserImportJob](AwsCognitoIdpActions.md#createuserimportjob)
- [CreateUserPool](AwsCognitoIdpActions.md#createuserpool)
- [CreateUserPoolClient](AwsCognitoIdpActions.md#createuserpoolclient)
- [CreateUserPoolDomain](AwsCognitoIdpActions.md#createuserpooldomain)
- [DeleteGroup](AwsCognitoIdpActions.md#deletegroup)
- [DeleteIdentityProvider](AwsCognitoIdpActions.md#deleteidentityprovider)
- [DeleteResourceServer](AwsCognitoIdpActions.md#deleteresourceserver)
- [DeleteUser](AwsCognitoIdpActions.md#deleteuser)
- [DeleteUserAttributes](AwsCognitoIdpActions.md#deleteuserattributes)
- [DeleteUserPool](AwsCognitoIdpActions.md#deleteuserpool)
- [DeleteUserPoolClient](AwsCognitoIdpActions.md#deleteuserpoolclient)
- [DeleteUserPoolDomain](AwsCognitoIdpActions.md#deleteuserpooldomain)
- [DescribeIdentityProvider](AwsCognitoIdpActions.md#describeidentityprovider)
- [DescribeResourceServer](AwsCognitoIdpActions.md#describeresourceserver)
- [DescribeRiskConfiguration](AwsCognitoIdpActions.md#describeriskconfiguration)
- [DescribeUserImportJob](AwsCognitoIdpActions.md#describeuserimportjob)
- [DescribeUserPool](AwsCognitoIdpActions.md#describeuserpool)
- [DescribeUserPoolClient](AwsCognitoIdpActions.md#describeuserpoolclient)
- [DescribeUserPoolDomain](AwsCognitoIdpActions.md#describeuserpooldomain)
- [DisassociateWebACL](AwsCognitoIdpActions.md#disassociatewebacl)
- [ForgetDevice](AwsCognitoIdpActions.md#forgetdevice)
- [ForgotPassword](AwsCognitoIdpActions.md#forgotpassword)
- [GetCSVHeader](AwsCognitoIdpActions.md#getcsvheader)
- [GetDevice](AwsCognitoIdpActions.md#getdevice)
- [GetGroup](AwsCognitoIdpActions.md#getgroup)
- [GetIdentityProviderByIdentifier](AwsCognitoIdpActions.md#getidentityproviderbyidentifier)
- [GetLogDeliveryConfiguration](AwsCognitoIdpActions.md#getlogdeliveryconfiguration)
- [GetSigningCertificate](AwsCognitoIdpActions.md#getsigningcertificate)
- [GetUICustomization](AwsCognitoIdpActions.md#getuicustomization)
- [GetUser](AwsCognitoIdpActions.md#getuser)
- [GetUserAttributeVerificationCode](AwsCognitoIdpActions.md#getuserattributeverificationcode)
- [GetUserPoolMfaConfig](AwsCognitoIdpActions.md#getuserpoolmfaconfig)
- [GetWebACLForResource](AwsCognitoIdpActions.md#getwebaclforresource)
- [GlobalSignOut](AwsCognitoIdpActions.md#globalsignout)
- [InitiateAuth](AwsCognitoIdpActions.md#initiateauth)
- [ListDevices](AwsCognitoIdpActions.md#listdevices)
- [ListGroups](AwsCognitoIdpActions.md#listgroups)
- [ListIdentityProviders](AwsCognitoIdpActions.md#listidentityproviders)
- [ListResourceServers](AwsCognitoIdpActions.md#listresourceservers)
- [ListResourcesForWebACL](AwsCognitoIdpActions.md#listresourcesforwebacl)
- [ListTagsForResource](AwsCognitoIdpActions.md#listtagsforresource)
- [ListUserImportJobs](AwsCognitoIdpActions.md#listuserimportjobs)
- [ListUserPoolClients](AwsCognitoIdpActions.md#listuserpoolclients)
- [ListUserPools](AwsCognitoIdpActions.md#listuserpools)
- [ListUsers](AwsCognitoIdpActions.md#listusers)
- [ListUsersInGroup](AwsCognitoIdpActions.md#listusersingroup)
- [ResendConfirmationCode](AwsCognitoIdpActions.md#resendconfirmationcode)
- [RespondToAuthChallenge](AwsCognitoIdpActions.md#respondtoauthchallenge)
- [RevokeToken](AwsCognitoIdpActions.md#revoketoken)
- [SetLogDeliveryConfiguration](AwsCognitoIdpActions.md#setlogdeliveryconfiguration)
- [SetRiskConfiguration](AwsCognitoIdpActions.md#setriskconfiguration)
- [SetUICustomization](AwsCognitoIdpActions.md#setuicustomization)
- [SetUserMFAPreference](AwsCognitoIdpActions.md#setusermfapreference)
- [SetUserPoolMfaConfig](AwsCognitoIdpActions.md#setuserpoolmfaconfig)
- [SetUserSettings](AwsCognitoIdpActions.md#setusersettings)
- [SignUp](AwsCognitoIdpActions.md#signup)
- [StartUserImportJob](AwsCognitoIdpActions.md#startuserimportjob)
- [StopUserImportJob](AwsCognitoIdpActions.md#stopuserimportjob)
- [TagResource](AwsCognitoIdpActions.md#tagresource)
- [UntagResource](AwsCognitoIdpActions.md#untagresource)
- [UpdateAuthEventFeedback](AwsCognitoIdpActions.md#updateautheventfeedback)
- [UpdateDeviceStatus](AwsCognitoIdpActions.md#updatedevicestatus)
- [UpdateGroup](AwsCognitoIdpActions.md#updategroup)
- [UpdateIdentityProvider](AwsCognitoIdpActions.md#updateidentityprovider)
- [UpdateResourceServer](AwsCognitoIdpActions.md#updateresourceserver)
- [UpdateUserAttributes](AwsCognitoIdpActions.md#updateuserattributes)
- [UpdateUserPool](AwsCognitoIdpActions.md#updateuserpool)
- [UpdateUserPoolClient](AwsCognitoIdpActions.md#updateuserpoolclient)
- [UpdateUserPoolDomain](AwsCognitoIdpActions.md#updateuserpooldomain)
- [VerifySoftwareToken](AwsCognitoIdpActions.md#verifysoftwaretoken)
- [VerifyUserAttribute](AwsCognitoIdpActions.md#verifyuserattribute)

## Enumeration Members

### AddCustomAttributes

• **AddCustomAttributes** = ``"cognito-idp:AddCustomAttributes"``

Grants permission to add user attributes to the user pool schema

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AddCustomAttributes.html

#### Defined in

actions/cognito-idp.ts:17

___

### AdminAddUserToGroup

• **AdminAddUserToGroup** = ``"cognito-idp:AdminAddUserToGroup"``

Grants permission to add any user to any group

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminAddUserToGroup.html

#### Defined in

actions/cognito-idp.ts:23

___

### AdminConfirmSignUp

• **AdminConfirmSignUp** = ``"cognito-idp:AdminConfirmSignUp"``

Grants permission to confirm any user's registration without a confirmation cod
e

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminConfirmSignUp.html

#### Defined in

actions/cognito-idp.ts:30

___

### AdminCreateUser

• **AdminCreateUser** = ``"cognito-idp:AdminCreateUser"``

Grants permission to create new users and send welcome messages via email or SM
S

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html

#### Defined in

actions/cognito-idp.ts:37

___

### AdminDeleteUser

• **AdminDeleteUser** = ``"cognito-idp:AdminDeleteUser"``

Grants permission to delete any user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUser.html

#### Defined in

actions/cognito-idp.ts:43

___

### AdminDeleteUserAttributes

• **AdminDeleteUserAttributes** = ``"cognito-idp:AdminDeleteUserAttributes"``

Grants permission to delete attributes from any user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUserAttributes.html

#### Defined in

actions/cognito-idp.ts:49

___

### AdminDisableProviderForUser

• **AdminDisableProviderForUser** = ``"cognito-idp:AdminDisableProviderForUser"``

Grants permission to unlink any user pool user from a third-party identity prov
ider (IdP) user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableProviderForUser.html

#### Defined in

actions/cognito-idp.ts:56

___

### AdminDisableUser

• **AdminDisableUser** = ``"cognito-idp:AdminDisableUser"``

Grants permission to deactivate any user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableUser.html

#### Defined in

actions/cognito-idp.ts:62

___

### AdminEnableUser

• **AdminEnableUser** = ``"cognito-idp:AdminEnableUser"``

Grants permission to activate any user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminEnableUser.html

#### Defined in

actions/cognito-idp.ts:68

___

### AdminForgetDevice

• **AdminForgetDevice** = ``"cognito-idp:AdminForgetDevice"``

Grants permission to deregister any user's devices

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminForgetDevice.html

#### Defined in

actions/cognito-idp.ts:74

___

### AdminGetDevice

• **AdminGetDevice** = ``"cognito-idp:AdminGetDevice"``

Grants permission to get information about any user's devices

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetDevice.html

#### Defined in

actions/cognito-idp.ts:80

___

### AdminGetUser

• **AdminGetUser** = ``"cognito-idp:AdminGetUser"``

Grants permission to look up any user by user name

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetUser.html

#### Defined in

actions/cognito-idp.ts:86

___

### AdminInitiateAuth

• **AdminInitiateAuth** = ``"cognito-idp:AdminInitiateAuth"``

Grants permission to authenticate any user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html

#### Defined in

actions/cognito-idp.ts:92

___

### AdminLinkProviderForUser

• **AdminLinkProviderForUser** = ``"cognito-idp:AdminLinkProviderForUser"``

Grants permission to link any user pool user to a third-party IdP user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html

#### Defined in

actions/cognito-idp.ts:98

___

### AdminListDevices

• **AdminListDevices** = ``"cognito-idp:AdminListDevices"``

Grants permission to list any user's remembered devices

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListDevices.html

#### Defined in

actions/cognito-idp.ts:104

___

### AdminListGroupsForUser

• **AdminListGroupsForUser** = ``"cognito-idp:AdminListGroupsForUser"``

Grants permission to list the groups that any user belongs to

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListGroupsForUser.html

#### Defined in

actions/cognito-idp.ts:110

___

### AdminListUserAuthEvents

• **AdminListUserAuthEvents** = ``"cognito-idp:AdminListUserAuthEvents"``

Grants permission to lists sign-in events for any user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListUserAuthEvents.html

#### Defined in

actions/cognito-idp.ts:116

___

### AdminRemoveUserFromGroup

• **AdminRemoveUserFromGroup** = ``"cognito-idp:AdminRemoveUserFromGroup"``

Grants permission to remove any user from any group

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRemoveUserFromGroup.html

#### Defined in

actions/cognito-idp.ts:122

___

### AdminResetUserPassword

• **AdminResetUserPassword** = ``"cognito-idp:AdminResetUserPassword"``

Grants permission to reset any user's password

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminResetUserPassword.html

#### Defined in

actions/cognito-idp.ts:128

___

### AdminRespondToAuthChallenge

• **AdminRespondToAuthChallenge** = ``"cognito-idp:AdminRespondToAuthChallenge"``

Grants permission to respond to an authentication challenge during the authenti
cation of any user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRespondToAuthChallenge.html

#### Defined in

actions/cognito-idp.ts:135

___

### AdminSetUserMFAPreference

• **AdminSetUserMFAPreference** = ``"cognito-idp:AdminSetUserMFAPreference"``

Grants permission to set any user's preferred MFA method

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html

#### Defined in

actions/cognito-idp.ts:141

___

### AdminSetUserPassword

• **AdminSetUserPassword** = ``"cognito-idp:AdminSetUserPassword"``

Grants permission to set any user's password

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserPassword.html

#### Defined in

actions/cognito-idp.ts:147

___

### AdminSetUserSettings

• **AdminSetUserSettings** = ``"cognito-idp:AdminSetUserSettings"``

Grants permission to set user settings for any user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserSettings.html

#### Defined in

actions/cognito-idp.ts:153

___

### AdminUpdateAuthEventFeedback

• **AdminUpdateAuthEventFeedback** = ``"cognito-idp:AdminUpdateAuthEventFeedback"``

Grants permission to update advanced security feedback for any user's authentic
ation event

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateAuthEventFeedback.html

#### Defined in

actions/cognito-idp.ts:160

___

### AdminUpdateDeviceStatus

• **AdminUpdateDeviceStatus** = ``"cognito-idp:AdminUpdateDeviceStatus"``

Grants permission to update the status of any user's remembered devices

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateDeviceStatus.html

#### Defined in

actions/cognito-idp.ts:166

___

### AdminUpdateUserAttributes

• **AdminUpdateUserAttributes** = ``"cognito-idp:AdminUpdateUserAttributes"``

Grants permission to updates any user's standard or custom attributes

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html

#### Defined in

actions/cognito-idp.ts:172

___

### AdminUserGlobalSignOut

• **AdminUserGlobalSignOut** = ``"cognito-idp:AdminUserGlobalSignOut"``

Grants permission to sign out any user from all sessions

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUserGlobalSignOut.html

#### Defined in

actions/cognito-idp.ts:178

___

### AssociateSoftwareToken

• **AssociateSoftwareToken** = ``"cognito-idp:AssociateSoftwareToken"``

Grants permission to return a unique generated shared secret key code for the u
ser

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html

#### Defined in

actions/cognito-idp.ts:185

___

### AssociateWebACL

• **AssociateWebACL** = ``"cognito-idp:AssociateWebACL"``

Grants permission to associate the user pool with an AWS WAF web ACL

See ${UserGuideDocPage}user-pool-waf.html

#### Defined in

actions/cognito-idp.ts:191

___

### ChangePassword

• **ChangePassword** = ``"cognito-idp:ChangePassword"``

Grants permission to change the password for a specified user in a user pool

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ChangePassword.html

#### Defined in

actions/cognito-idp.ts:197

___

### ConfirmDevice

• **ConfirmDevice** = ``"cognito-idp:ConfirmDevice"``

Grants permission to confirm tracking of the device. This API call is the call
that begins device tracking

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html

#### Defined in

actions/cognito-idp.ts:204

___

### ConfirmForgotPassword

• **ConfirmForgotPassword** = ``"cognito-idp:ConfirmForgotPassword"``

Grants permission to allow a user to enter a confirmation code to reset a forgo
tten password

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html

#### Defined in

actions/cognito-idp.ts:211

___

### ConfirmSignUp

• **ConfirmSignUp** = ``"cognito-idp:ConfirmSignUp"``

Grants permission to confirm registration of a user and handles the existing al
ias from a previous user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html

#### Defined in

actions/cognito-idp.ts:218

___

### CreateGroup

• **CreateGroup** = ``"cognito-idp:CreateGroup"``

Grants permission to create new user pool groups

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html

#### Defined in

actions/cognito-idp.ts:224

___

### CreateIdentityProvider

• **CreateIdentityProvider** = ``"cognito-idp:CreateIdentityProvider"``

Grants permission to add identity providers to user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html

#### Defined in

actions/cognito-idp.ts:230

___

### CreateResourceServer

• **CreateResourceServer** = ``"cognito-idp:CreateResourceServer"``

Grants permission to create and configure scopes for OAuth 2.0 resource servers

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateResourceServer.html

#### Defined in

actions/cognito-idp.ts:236

___

### CreateUserImportJob

• **CreateUserImportJob** = ``"cognito-idp:CreateUserImportJob"``

Grants permission to create user CSV import jobs

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserImportJob.html

#### Defined in

actions/cognito-idp.ts:242

___

### CreateUserPool

• **CreateUserPool** = ``"cognito-idp:CreateUserPool"``

Grants permission to create and set password policy for user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html

#### Defined in

actions/cognito-idp.ts:248

___

### CreateUserPoolClient

• **CreateUserPoolClient** = ``"cognito-idp:CreateUserPoolClient"``

Grants permission to create user pool app clients

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolClient.html

#### Defined in

actions/cognito-idp.ts:254

___

### CreateUserPoolDomain

• **CreateUserPoolDomain** = ``"cognito-idp:CreateUserPoolDomain"``

Grants permission to add user pool domains

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolDomain.html

#### Defined in

actions/cognito-idp.ts:260

___

### DeleteGroup

• **DeleteGroup** = ``"cognito-idp:DeleteGroup"``

Grants permission to delete any empty user pool group

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteGroup.html

#### Defined in

actions/cognito-idp.ts:266

___

### DeleteIdentityProvider

• **DeleteIdentityProvider** = ``"cognito-idp:DeleteIdentityProvider"``

Grants permission to delete any identity provider from user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteIdentityProvider.html

#### Defined in

actions/cognito-idp.ts:272

___

### DeleteResourceServer

• **DeleteResourceServer** = ``"cognito-idp:DeleteResourceServer"``

Grants permission to delete any OAuth 2.0 resource server from user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteResourceServer.html

#### Defined in

actions/cognito-idp.ts:278

___

### DeleteUser

• **DeleteUser** = ``"cognito-idp:DeleteUser"``

Grants permission to allow a user to delete one's self

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUser.html

#### Defined in

actions/cognito-idp.ts:284

___

### DeleteUserAttributes

• **DeleteUserAttributes** = ``"cognito-idp:DeleteUserAttributes"``

Grants permission to delete the attributes for a user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserAttributes.html

#### Defined in

actions/cognito-idp.ts:290

___

### DeleteUserPool

• **DeleteUserPool** = ``"cognito-idp:DeleteUserPool"``

Grants permission to delete user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPool.html

#### Defined in

actions/cognito-idp.ts:296

___

### DeleteUserPoolClient

• **DeleteUserPoolClient** = ``"cognito-idp:DeleteUserPoolClient"``

Grants permission to delete any user pool app client

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolClient.html

#### Defined in

actions/cognito-idp.ts:302

___

### DeleteUserPoolDomain

• **DeleteUserPoolDomain** = ``"cognito-idp:DeleteUserPoolDomain"``

Grants permission to delete any user pool domain

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolDomain.html

#### Defined in

actions/cognito-idp.ts:308

___

### DescribeIdentityProvider

• **DescribeIdentityProvider** = ``"cognito-idp:DescribeIdentityProvider"``

Grants permission to describe any user pool identity provider

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeIdentityProvider.html

#### Defined in

actions/cognito-idp.ts:314

___

### DescribeResourceServer

• **DescribeResourceServer** = ``"cognito-idp:DescribeResourceServer"``

Grants permission to describe any OAuth 2.0 resource server

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeResourceServer.html

#### Defined in

actions/cognito-idp.ts:320

___

### DescribeRiskConfiguration

• **DescribeRiskConfiguration** = ``"cognito-idp:DescribeRiskConfiguration"``

Grants permission to describe the risk configuration settings of user pools and
app clients

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeRiskConfiguration.html

#### Defined in

actions/cognito-idp.ts:327

___

### DescribeUserImportJob

• **DescribeUserImportJob** = ``"cognito-idp:DescribeUserImportJob"``

Grants permission to describe any user import job

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserImportJob.html

#### Defined in

actions/cognito-idp.ts:333

___

### DescribeUserPool

• **DescribeUserPool** = ``"cognito-idp:DescribeUserPool"``

Grants permission to describe user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html

#### Defined in

actions/cognito-idp.ts:339

___

### DescribeUserPoolClient

• **DescribeUserPoolClient** = ``"cognito-idp:DescribeUserPoolClient"``

Grants permission to describe any user pool app client

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html

#### Defined in

actions/cognito-idp.ts:345

___

### DescribeUserPoolDomain

• **DescribeUserPoolDomain** = ``"cognito-idp:DescribeUserPoolDomain"``

Grants permission to describe any user pool domain

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolDomain.html

#### Defined in

actions/cognito-idp.ts:351

___

### DisassociateWebACL

• **DisassociateWebACL** = ``"cognito-idp:DisassociateWebACL"``

Grants permission to disassociate the user pool with an AWS WAF web ACL

See ${UserGuideDocPage}user-pool-waf.html

#### Defined in

actions/cognito-idp.ts:357

___

### ForgetDevice

• **ForgetDevice** = ``"cognito-idp:ForgetDevice"``

Grants permission to forget the specified device

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgetDevice.html

#### Defined in

actions/cognito-idp.ts:363

___

### ForgotPassword

• **ForgotPassword** = ``"cognito-idp:ForgotPassword"``

Grants permission to send a message to the end user with a confirmation code th
at is required to change the user's password

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html

#### Defined in

actions/cognito-idp.ts:370

___

### GetCSVHeader

• **GetCSVHeader** = ``"cognito-idp:GetCSVHeader"``

Grants permission to generate headers for a user import .csv file

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetCSVHeader.html

#### Defined in

actions/cognito-idp.ts:376

___

### GetDevice

• **GetDevice** = ``"cognito-idp:GetDevice"``

Grants permission to get the device

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetDevice.html

#### Defined in

actions/cognito-idp.ts:382

___

### GetGroup

• **GetGroup** = ``"cognito-idp:GetGroup"``

Grants permission to describe a user pool group

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetGroup.html

#### Defined in

actions/cognito-idp.ts:388

___

### GetIdentityProviderByIdentifier

• **GetIdentityProviderByIdentifier** = ``"cognito-idp:GetIdentityProviderByIdentifier"``

Grants permission to correlate a user pool IdP identifier to the IdP Name

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetIdentityProviderByIdentifier.html

#### Defined in

actions/cognito-idp.ts:394

___

### GetLogDeliveryConfiguration

• **GetLogDeliveryConfiguration** = ``"cognito-idp:GetLogDeliveryConfiguration"``

Grants permission to get the detailed activity logging configuration for a user
pool

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetLogDeliveryConfiguration.html

#### Defined in

actions/cognito-idp.ts:401

___

### GetSigningCertificate

• **GetSigningCertificate** = ``"cognito-idp:GetSigningCertificate"``

Grants permission to look up signing certificates for user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetSigningCertificate.html

#### Defined in

actions/cognito-idp.ts:407

___

### GetUICustomization

• **GetUICustomization** = ``"cognito-idp:GetUICustomization"``

Grants permission to get UI customization information for the hosted UI of any
app client

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUICustomization.html

#### Defined in

actions/cognito-idp.ts:414

___

### GetUser

• **GetUser** = ``"cognito-idp:GetUser"``

Grants permission to get the user attributes and metadata for a user

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html

#### Defined in

actions/cognito-idp.ts:420

___

### GetUserAttributeVerificationCode

• **GetUserAttributeVerificationCode** = ``"cognito-idp:GetUserAttributeVerificationCode"``

Grants permission to get the user attribute verification code for the specified
attribute name

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserAttributeVerificationCode.html

#### Defined in

actions/cognito-idp.ts:427

___

### GetUserPoolMfaConfig

• **GetUserPoolMfaConfig** = ``"cognito-idp:GetUserPoolMfaConfig"``

Grants permission to look up the MFA configuration of user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserPoolMfaConfig.html

#### Defined in

actions/cognito-idp.ts:433

___

### GetWebACLForResource

• **GetWebACLForResource** = ``"cognito-idp:GetWebACLForResource"``

Grants permission to get the AWS WAF web ACL that is associated with an Amazon
Cognito user pool

See ${UserGuideDocPage}user-pool-waf.html

#### Defined in

actions/cognito-idp.ts:440

___

### GlobalSignOut

• **GlobalSignOut** = ``"cognito-idp:GlobalSignOut"``

Grants permission to sign out users from all devices

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GlobalSignOut.html

#### Defined in

actions/cognito-idp.ts:446

___

### InitiateAuth

• **InitiateAuth** = ``"cognito-idp:InitiateAuth"``

Grants permission to initiate the authentication flow

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html

#### Defined in

actions/cognito-idp.ts:452

___

### ListDevices

• **ListDevices** = ``"cognito-idp:ListDevices"``

Grants permission to list the devices

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListDevices.html

#### Defined in

actions/cognito-idp.ts:458

___

### ListGroups

• **ListGroups** = ``"cognito-idp:ListGroups"``

Grants permission to list all groups in user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListGroups.html

#### Defined in

actions/cognito-idp.ts:464

___

### ListIdentityProviders

• **ListIdentityProviders** = ``"cognito-idp:ListIdentityProviders"``

Grants permission to list all identity providers in user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListIdentityProviders.html

#### Defined in

actions/cognito-idp.ts:470

___

### ListResourceServers

• **ListResourceServers** = ``"cognito-idp:ListResourceServers"``

Grants permission to list all resource servers in user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListResourceServers.html

#### Defined in

actions/cognito-idp.ts:476

___

### ListResourcesForWebACL

• **ListResourcesForWebACL** = ``"cognito-idp:ListResourcesForWebACL"``

Grants permission to list the user pools that are associated with an AWS WAF we
b ACL

See ${UserGuideDocPage}user-pool-waf.html

#### Defined in

actions/cognito-idp.ts:483

___

### ListTagsForResource

• **ListTagsForResource** = ``"cognito-idp:ListTagsForResource"``

Grants permission to list the tags that are assigned to an Amazon Cognito user
pool

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/cognito-idp.ts:490

___

### ListUserImportJobs

• **ListUserImportJobs** = ``"cognito-idp:ListUserImportJobs"``

Grants permission to list all user import jobs

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserImportJobs.html

#### Defined in

actions/cognito-idp.ts:496

___

### ListUserPoolClients

• **ListUserPoolClients** = ``"cognito-idp:ListUserPoolClients"``

Grants permission to list all app clients in user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPoolClients.html

#### Defined in

actions/cognito-idp.ts:502

___

### ListUserPools

• **ListUserPools** = ``"cognito-idp:ListUserPools"``

Grants permission to list all user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html

#### Defined in

actions/cognito-idp.ts:508

___

### ListUsers

• **ListUsers** = ``"cognito-idp:ListUsers"``

Grants permission to list all user pool users

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html

#### Defined in

actions/cognito-idp.ts:514

___

### ListUsersInGroup

• **ListUsersInGroup** = ``"cognito-idp:ListUsersInGroup"``

Grants permission to list the users in any group

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsersInGroup.html

#### Defined in

actions/cognito-idp.ts:520

___

### ResendConfirmationCode

• **ResendConfirmationCode** = ``"cognito-idp:ResendConfirmationCode"``

Grants permission to resend the confirmation (for confirmation of registration)
to a specific user in the user pool

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ResendConfirmationCode.html

#### Defined in

actions/cognito-idp.ts:527

___

### RespondToAuthChallenge

• **RespondToAuthChallenge** = ``"cognito-idp:RespondToAuthChallenge"``

Grants permission to respond to the authentication challenge

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html

#### Defined in

actions/cognito-idp.ts:533

___

### RevokeToken

• **RevokeToken** = ``"cognito-idp:RevokeToken"``

Grants permission to revoke all of the access tokens generated by the specified
refresh token

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html

#### Defined in

actions/cognito-idp.ts:540

___

### SetLogDeliveryConfiguration

• **SetLogDeliveryConfiguration** = ``"cognito-idp:SetLogDeliveryConfiguration"``

Grants permission to set up or modify the detailed activity logging configurati
on of a user pool

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetLogDeliveryConfiguration.html

#### Defined in

actions/cognito-idp.ts:547

___

### SetRiskConfiguration

• **SetRiskConfiguration** = ``"cognito-idp:SetRiskConfiguration"``

Grants permission to set risk configuration for user pools and app clients

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetRiskConfiguration.html

#### Defined in

actions/cognito-idp.ts:553

___

### SetUICustomization

• **SetUICustomization** = ``"cognito-idp:SetUICustomization"``

Grants permission to customize the hosted UI for any app client

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUICustomization.html

#### Defined in

actions/cognito-idp.ts:559

___

### SetUserMFAPreference

• **SetUserMFAPreference** = ``"cognito-idp:SetUserMFAPreference"``

Grants permission to set MFA preference for the user in the userpool

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html

#### Defined in

actions/cognito-idp.ts:565

___

### SetUserPoolMfaConfig

• **SetUserPoolMfaConfig** = ``"cognito-idp:SetUserPoolMfaConfig"``

Grants permission to set user pool MFA configuration

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html

#### Defined in

actions/cognito-idp.ts:571

___

### SetUserSettings

• **SetUserSettings** = ``"cognito-idp:SetUserSettings"``

Grants permission to set the user settings like multi-factor authentication (MF
A)

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserSettings.html

#### Defined in

actions/cognito-idp.ts:578

___

### SignUp

• **SignUp** = ``"cognito-idp:SignUp"``

Grants permission to register the user in the specified user pool and creates a
user name, password, and user attributes

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html

#### Defined in

actions/cognito-idp.ts:585

___

### StartUserImportJob

• **StartUserImportJob** = ``"cognito-idp:StartUserImportJob"``

Grants permission to start any user import job

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StartUserImportJob.html

#### Defined in

actions/cognito-idp.ts:591

___

### StopUserImportJob

• **StopUserImportJob** = ``"cognito-idp:StopUserImportJob"``

Grants permission to stop any user import job

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StopUserImportJob.html

#### Defined in

actions/cognito-idp.ts:597

___

### TagResource

• **TagResource** = ``"cognito-idp:TagResource"``

Grants permission to tag a user pool

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_TagResource.html

#### Defined in

actions/cognito-idp.ts:603

___

### UntagResource

• **UntagResource** = ``"cognito-idp:UntagResource"``

Grants permission to untag a user pool

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UntagResource.html

#### Defined in

actions/cognito-idp.ts:609

___

### UpdateAuthEventFeedback

• **UpdateAuthEventFeedback** = ``"cognito-idp:UpdateAuthEventFeedback"``

Grants permission to update the feedback for the user authentication event

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateAuthEventFeedback.html

#### Defined in

actions/cognito-idp.ts:615

___

### UpdateDeviceStatus

• **UpdateDeviceStatus** = ``"cognito-idp:UpdateDeviceStatus"``

Grants permission to update the device status

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html

#### Defined in

actions/cognito-idp.ts:621

___

### UpdateGroup

• **UpdateGroup** = ``"cognito-idp:UpdateGroup"``

Grants permission to update the configuration of any group

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateGroup.html

#### Defined in

actions/cognito-idp.ts:627

___

### UpdateIdentityProvider

• **UpdateIdentityProvider** = ``"cognito-idp:UpdateIdentityProvider"``

Grants permission to update the configuration of any user pool IdP

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateIdentityProvider.html

#### Defined in

actions/cognito-idp.ts:633

___

### UpdateResourceServer

• **UpdateResourceServer** = ``"cognito-idp:UpdateResourceServer"``

Grants permission to update the configuration of any OAuth 2.0 resource server

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateResourceServer.html

#### Defined in

actions/cognito-idp.ts:639

___

### UpdateUserAttributes

• **UpdateUserAttributes** = ``"cognito-idp:UpdateUserAttributes"``

Grants permission to allow a user to update a specific attribute (one at a time
)

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html

#### Defined in

actions/cognito-idp.ts:646

___

### UpdateUserPool

• **UpdateUserPool** = ``"cognito-idp:UpdateUserPool"``

Grants permission to updates the configuration of user pools

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPool.html

#### Defined in

actions/cognito-idp.ts:652

___

### UpdateUserPoolClient

• **UpdateUserPoolClient** = ``"cognito-idp:UpdateUserPoolClient"``

Grants permission to update any user pool client

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolClient.html

#### Defined in

actions/cognito-idp.ts:658

___

### UpdateUserPoolDomain

• **UpdateUserPoolDomain** = ``"cognito-idp:UpdateUserPoolDomain"``

Grants permission to replace the certificate for any custom domain

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolDomain.html

#### Defined in

actions/cognito-idp.ts:664

___

### VerifySoftwareToken

• **VerifySoftwareToken** = ``"cognito-idp:VerifySoftwareToken"``

Grants permission to register a user's entered TOTP code and mark the user's so
ftware token MFA status as verified if successful

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html

#### Defined in

actions/cognito-idp.ts:671

___

### VerifyUserAttribute

• **VerifyUserAttribute** = ``"cognito-idp:VerifyUserAttribute"``

Grants permission to verify a user attribute using a one time verification code

See https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html

#### Defined in

actions/cognito-idp.ts:677
