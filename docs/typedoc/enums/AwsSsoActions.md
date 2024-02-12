[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSsoActions

# Enumeration: AwsSsoActions

All IAM policy actions for AWS IAM Identity Center (successor to AWS Single Sign-On) (SSO)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamidentitycentersuccessortoawssinglesign-on.html

2024-02-12T09:57:37.885Z

## Table of contents

### Enumeration Members

- [AssociateDirectory](AwsSsoActions.md#associatedirectory)
- [AssociateProfile](AwsSsoActions.md#associateprofile)
- [AttachCustomerManagedPolicyReferenceToPermissionSet](AwsSsoActions.md#attachcustomermanagedpolicyreferencetopermissionset)
- [AttachManagedPolicyToPermissionSet](AwsSsoActions.md#attachmanagedpolicytopermissionset)
- [CreateAccountAssignment](AwsSsoActions.md#createaccountassignment)
- [CreateApplication](AwsSsoActions.md#createapplication)
- [CreateApplicationAssignment](AwsSsoActions.md#createapplicationassignment)
- [CreateApplicationInstance](AwsSsoActions.md#createapplicationinstance)
- [CreateApplicationInstanceCertificate](AwsSsoActions.md#createapplicationinstancecertificate)
- [CreateInstance](AwsSsoActions.md#createinstance)
- [CreateInstanceAccessControlAttributeConfiguration](AwsSsoActions.md#createinstanceaccesscontrolattributeconfiguration)
- [CreateManagedApplicationInstance](AwsSsoActions.md#createmanagedapplicationinstance)
- [CreatePermissionSet](AwsSsoActions.md#createpermissionset)
- [CreateProfile](AwsSsoActions.md#createprofile)
- [CreateTrust](AwsSsoActions.md#createtrust)
- [CreateTrustedTokenIssuer](AwsSsoActions.md#createtrustedtokenissuer)
- [DeleteAccountAssignment](AwsSsoActions.md#deleteaccountassignment)
- [DeleteApplication](AwsSsoActions.md#deleteapplication)
- [DeleteApplicationAccessScope](AwsSsoActions.md#deleteapplicationaccessscope)
- [DeleteApplicationAssignment](AwsSsoActions.md#deleteapplicationassignment)
- [DeleteApplicationAuthenticationMethod](AwsSsoActions.md#deleteapplicationauthenticationmethod)
- [DeleteApplicationGrant](AwsSsoActions.md#deleteapplicationgrant)
- [DeleteApplicationInstance](AwsSsoActions.md#deleteapplicationinstance)
- [DeleteApplicationInstanceCertificate](AwsSsoActions.md#deleteapplicationinstancecertificate)
- [DeleteInlinePolicyFromPermissionSet](AwsSsoActions.md#deleteinlinepolicyfrompermissionset)
- [DeleteInstance](AwsSsoActions.md#deleteinstance)
- [DeleteInstanceAccessControlAttributeConfiguration](AwsSsoActions.md#deleteinstanceaccesscontrolattributeconfiguration)
- [DeleteManagedApplicationInstance](AwsSsoActions.md#deletemanagedapplicationinstance)
- [DeletePermissionSet](AwsSsoActions.md#deletepermissionset)
- [DeletePermissionsBoundaryFromPermissionSet](AwsSsoActions.md#deletepermissionsboundaryfrompermissionset)
- [DeletePermissionsPolicy](AwsSsoActions.md#deletepermissionspolicy)
- [DeleteProfile](AwsSsoActions.md#deleteprofile)
- [DeleteTrustedTokenIssuer](AwsSsoActions.md#deletetrustedtokenissuer)
- [DescribeAccountAssignmentCreationStatus](AwsSsoActions.md#describeaccountassignmentcreationstatus)
- [DescribeAccountAssignmentDeletionStatus](AwsSsoActions.md#describeaccountassignmentdeletionstatus)
- [DescribeApplication](AwsSsoActions.md#describeapplication)
- [DescribeApplicationAssignment](AwsSsoActions.md#describeapplicationassignment)
- [DescribeApplicationProvider](AwsSsoActions.md#describeapplicationprovider)
- [DescribeDirectories](AwsSsoActions.md#describedirectories)
- [DescribeInstance](AwsSsoActions.md#describeinstance)
- [DescribeInstanceAccessControlAttributeConfiguration](AwsSsoActions.md#describeinstanceaccesscontrolattributeconfiguration)
- [DescribePermissionSet](AwsSsoActions.md#describepermissionset)
- [DescribePermissionSetProvisioningStatus](AwsSsoActions.md#describepermissionsetprovisioningstatus)
- [DescribePermissionsPolicies](AwsSsoActions.md#describepermissionspolicies)
- [DescribeRegisteredRegions](AwsSsoActions.md#describeregisteredregions)
- [DescribeTrustedTokenIssuer](AwsSsoActions.md#describetrustedtokenissuer)
- [DescribeTrusts](AwsSsoActions.md#describetrusts)
- [DetachCustomerManagedPolicyReferenceFromPermissionSet](AwsSsoActions.md#detachcustomermanagedpolicyreferencefrompermissionset)
- [DetachManagedPolicyFromPermissionSet](AwsSsoActions.md#detachmanagedpolicyfrompermissionset)
- [DisassociateDirectory](AwsSsoActions.md#disassociatedirectory)
- [DisassociateProfile](AwsSsoActions.md#disassociateprofile)
- [GetApplicationAccessScope](AwsSsoActions.md#getapplicationaccessscope)
- [GetApplicationAssignmentConfiguration](AwsSsoActions.md#getapplicationassignmentconfiguration)
- [GetApplicationAuthenticationMethod](AwsSsoActions.md#getapplicationauthenticationmethod)
- [GetApplicationGrant](AwsSsoActions.md#getapplicationgrant)
- [GetApplicationInstance](AwsSsoActions.md#getapplicationinstance)
- [GetApplicationTemplate](AwsSsoActions.md#getapplicationtemplate)
- [GetInlinePolicyForPermissionSet](AwsSsoActions.md#getinlinepolicyforpermissionset)
- [GetManagedApplicationInstance](AwsSsoActions.md#getmanagedapplicationinstance)
- [GetMfaDeviceManagementForDirectory](AwsSsoActions.md#getmfadevicemanagementfordirectory)
- [GetPermissionSet](AwsSsoActions.md#getpermissionset)
- [GetPermissionsBoundaryForPermissionSet](AwsSsoActions.md#getpermissionsboundaryforpermissionset)
- [GetPermissionsPolicy](AwsSsoActions.md#getpermissionspolicy)
- [GetProfile](AwsSsoActions.md#getprofile)
- [GetSSOStatus](AwsSsoActions.md#getssostatus)
- [GetSharedSsoConfiguration](AwsSsoActions.md#getsharedssoconfiguration)
- [GetSsoConfiguration](AwsSsoActions.md#getssoconfiguration)
- [GetTrust](AwsSsoActions.md#gettrust)
- [ImportApplicationInstanceServiceProviderMetadata](AwsSsoActions.md#importapplicationinstanceserviceprovidermetadata)
- [ListAccountAssignmentCreationStatus](AwsSsoActions.md#listaccountassignmentcreationstatus)
- [ListAccountAssignmentDeletionStatus](AwsSsoActions.md#listaccountassignmentdeletionstatus)
- [ListAccountAssignments](AwsSsoActions.md#listaccountassignments)
- [ListAccountAssignmentsForPrincipal](AwsSsoActions.md#listaccountassignmentsforprincipal)
- [ListAccountsForProvisionedPermissionSet](AwsSsoActions.md#listaccountsforprovisionedpermissionset)
- [ListApplicationAccessScopes](AwsSsoActions.md#listapplicationaccessscopes)
- [ListApplicationAssignments](AwsSsoActions.md#listapplicationassignments)
- [ListApplicationAssignmentsForPrincipal](AwsSsoActions.md#listapplicationassignmentsforprincipal)
- [ListApplicationAuthenticationMethods](AwsSsoActions.md#listapplicationauthenticationmethods)
- [ListApplicationGrants](AwsSsoActions.md#listapplicationgrants)
- [ListApplicationInstanceCertificates](AwsSsoActions.md#listapplicationinstancecertificates)
- [ListApplicationInstances](AwsSsoActions.md#listapplicationinstances)
- [ListApplicationProviders](AwsSsoActions.md#listapplicationproviders)
- [ListApplicationTemplates](AwsSsoActions.md#listapplicationtemplates)
- [ListApplications](AwsSsoActions.md#listapplications)
- [ListCustomerManagedPolicyReferencesInPermissionSet](AwsSsoActions.md#listcustomermanagedpolicyreferencesinpermissionset)
- [ListDirectoryAssociations](AwsSsoActions.md#listdirectoryassociations)
- [ListInstances](AwsSsoActions.md#listinstances)
- [ListManagedPoliciesInPermissionSet](AwsSsoActions.md#listmanagedpoliciesinpermissionset)
- [ListPermissionSetProvisioningStatus](AwsSsoActions.md#listpermissionsetprovisioningstatus)
- [ListPermissionSets](AwsSsoActions.md#listpermissionsets)
- [ListPermissionSetsProvisionedToAccount](AwsSsoActions.md#listpermissionsetsprovisionedtoaccount)
- [ListProfileAssociations](AwsSsoActions.md#listprofileassociations)
- [ListProfiles](AwsSsoActions.md#listprofiles)
- [ListTagsForResource](AwsSsoActions.md#listtagsforresource)
- [ListTrustedTokenIssuers](AwsSsoActions.md#listtrustedtokenissuers)
- [ProvisionPermissionSet](AwsSsoActions.md#provisionpermissionset)
- [PutApplicationAccessScope](AwsSsoActions.md#putapplicationaccessscope)
- [PutApplicationAssignmentConfiguration](AwsSsoActions.md#putapplicationassignmentconfiguration)
- [PutApplicationAuthenticationMethod](AwsSsoActions.md#putapplicationauthenticationmethod)
- [PutApplicationGrant](AwsSsoActions.md#putapplicationgrant)
- [PutInlinePolicyToPermissionSet](AwsSsoActions.md#putinlinepolicytopermissionset)
- [PutMfaDeviceManagementForDirectory](AwsSsoActions.md#putmfadevicemanagementfordirectory)
- [PutPermissionsBoundaryToPermissionSet](AwsSsoActions.md#putpermissionsboundarytopermissionset)
- [PutPermissionsPolicy](AwsSsoActions.md#putpermissionspolicy)
- [SearchGroups](AwsSsoActions.md#searchgroups)
- [SearchUsers](AwsSsoActions.md#searchusers)
- [StartSSO](AwsSsoActions.md#startsso)
- [TagResource](AwsSsoActions.md#tagresource)
- [UntagResource](AwsSsoActions.md#untagresource)
- [UpdateApplication](AwsSsoActions.md#updateapplication)
- [UpdateApplicationInstanceActiveCertificate](AwsSsoActions.md#updateapplicationinstanceactivecertificate)
- [UpdateApplicationInstanceDisplayData](AwsSsoActions.md#updateapplicationinstancedisplaydata)
- [UpdateApplicationInstanceResponseConfiguration](AwsSsoActions.md#updateapplicationinstanceresponseconfiguration)
- [UpdateApplicationInstanceResponseSchemaConfiguration](AwsSsoActions.md#updateapplicationinstanceresponseschemaconfiguration)
- [UpdateApplicationInstanceSecurityConfiguration](AwsSsoActions.md#updateapplicationinstancesecurityconfiguration)
- [UpdateApplicationInstanceServiceProviderConfiguration](AwsSsoActions.md#updateapplicationinstanceserviceproviderconfiguration)
- [UpdateApplicationInstanceStatus](AwsSsoActions.md#updateapplicationinstancestatus)
- [UpdateDirectoryAssociation](AwsSsoActions.md#updatedirectoryassociation)
- [UpdateInstance](AwsSsoActions.md#updateinstance)
- [UpdateInstanceAccessControlAttributeConfiguration](AwsSsoActions.md#updateinstanceaccesscontrolattributeconfiguration)
- [UpdateManagedApplicationInstanceStatus](AwsSsoActions.md#updatemanagedapplicationinstancestatus)
- [UpdatePermissionSet](AwsSsoActions.md#updatepermissionset)
- [UpdateProfile](AwsSsoActions.md#updateprofile)
- [UpdateSSOConfiguration](AwsSsoActions.md#updatessoconfiguration)
- [UpdateTrust](AwsSsoActions.md#updatetrust)
- [UpdateTrustedTokenIssuer](AwsSsoActions.md#updatetrustedtokenissuer)

## Enumeration Members

### AssociateDirectory

• **AssociateDirectory** = ``"sso:AssociateDirectory"``

Grants permission to connect a directory to be used by AWS IAM Identity Center

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:17

___

### AssociateProfile

• **AssociateProfile** = ``"sso:AssociateProfile"``

Grants permission to create an association between a directory user or group an
d a profile

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:24

___

### AttachCustomerManagedPolicyReferenceToPermissionSet

• **AttachCustomerManagedPolicyReferenceToPermissionSet** = ``"sso:AttachCustomerManagedPolicyReferenceToPermissionSet"``

Grants permission to attach a customer managed policy reference to a permission
set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AttachCustomerManagedPolicyReferenceToPermissionSet.html

#### Defined in

actions/sso.ts:31

___

### AttachManagedPolicyToPermissionSet

• **AttachManagedPolicyToPermissionSet** = ``"sso:AttachManagedPolicyToPermissionSet"``

Grants permission to attach an AWS managed policy to a permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AttachManagedPolicyToPermissionSet.html

#### Defined in

actions/sso.ts:37

___

### CreateAccountAssignment

• **CreateAccountAssignment** = ``"sso:CreateAccountAssignment"``

Grants permission to assign access to a Principal for a specified AWS account u
sing a specified permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateAccountAssignment.html

#### Defined in

actions/sso.ts:44

___

### CreateApplication

• **CreateApplication** = ``"sso:CreateApplication"``

Grants permission to create an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplication.html

#### Defined in

actions/sso.ts:50

___

### CreateApplicationAssignment

• **CreateApplicationAssignment** = ``"sso:CreateApplicationAssignment"``

Grants permission to create an application assignment

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html

#### Defined in

actions/sso.ts:56

___

### CreateApplicationInstance

• **CreateApplicationInstance** = ``"sso:CreateApplicationInstance"``

Grants permission to add an application instance to AWS IAM Identity Center

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:62

___

### CreateApplicationInstanceCertificate

• **CreateApplicationInstanceCertificate** = ``"sso:CreateApplicationInstanceCertificate"``

Grants permission to add a new certificate for an application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:68

___

### CreateInstance

• **CreateInstance** = ``"sso:CreateInstance"``

Grants permission to create an identity center instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateInstance.html

#### Defined in

actions/sso.ts:74

___

### CreateInstanceAccessControlAttributeConfiguration

• **CreateInstanceAccessControlAttributeConfiguration** = ``"sso:CreateInstanceAccessControlAttributeConfiguration"``

Grants permission to enable the instance for ABAC and specify the attributes

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateInstanceAccessControlAttributeConfiguration.html

#### Defined in

actions/sso.ts:80

___

### CreateManagedApplicationInstance

• **CreateManagedApplicationInstance** = ``"sso:CreateManagedApplicationInstance"``

Grants permission to add a managed application instance to AWS IAM Identity Cen
ter

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:87

___

### CreatePermissionSet

• **CreatePermissionSet** = ``"sso:CreatePermissionSet"``

Grants permission to create a permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreatePermissionSet.html

#### Defined in

actions/sso.ts:93

___

### CreateProfile

• **CreateProfile** = ``"sso:CreateProfile"``

Grants permission to create a profile for an application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:99

___

### CreateTrust

• **CreateTrust** = ``"sso:CreateTrust"``

Grants permission to create a federation trust in a target account

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:105

___

### CreateTrustedTokenIssuer

• **CreateTrustedTokenIssuer** = ``"sso:CreateTrustedTokenIssuer"``

Grants permission to create a trusted token issuer for an instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateTrustedTokenIssuer.html

#### Defined in

actions/sso.ts:111

___

### DeleteAccountAssignment

• **DeleteAccountAssignment** = ``"sso:DeleteAccountAssignment"``

Grants permission to delete a Principal's access from a specified AWS account u
sing a specified permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteAccountAssignment.html

#### Defined in

actions/sso.ts:118

___

### DeleteApplication

• **DeleteApplication** = ``"sso:DeleteApplication"``

Grants permission to delete an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteApplication.html

#### Defined in

actions/sso.ts:124

___

### DeleteApplicationAccessScope

• **DeleteApplicationAccessScope** = ``"sso:DeleteApplicationAccessScope"``

Grants permission to delete an access scope to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteApplicationAccessScope.html

#### Defined in

actions/sso.ts:130

___

### DeleteApplicationAssignment

• **DeleteApplicationAssignment** = ``"sso:DeleteApplicationAssignment"``

Grants permission to delete an application assignment

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteApplicationAssignment.html

#### Defined in

actions/sso.ts:136

___

### DeleteApplicationAuthenticationMethod

• **DeleteApplicationAuthenticationMethod** = ``"sso:DeleteApplicationAuthenticationMethod"``

Grants permission to delete an authentication method to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteApplicationAuthenticationMethod.html

#### Defined in

actions/sso.ts:142

___

### DeleteApplicationGrant

• **DeleteApplicationGrant** = ``"sso:DeleteApplicationGrant"``

Grants permission to delete a grant from an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteApplicationGrant.html

#### Defined in

actions/sso.ts:148

___

### DeleteApplicationInstance

• **DeleteApplicationInstance** = ``"sso:DeleteApplicationInstance"``

Grants permission to delete the application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:154

___

### DeleteApplicationInstanceCertificate

• **DeleteApplicationInstanceCertificate** = ``"sso:DeleteApplicationInstanceCertificate"``

Grants permission to delete an inactive or expired certificate from the applica
tion instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:161

___

### DeleteInlinePolicyFromPermissionSet

• **DeleteInlinePolicyFromPermissionSet** = ``"sso:DeleteInlinePolicyFromPermissionSet"``

Grants permission to delete the inline policy from a specified permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteInlinePolicyFromPermissionSet.html

#### Defined in

actions/sso.ts:167

___

### DeleteInstance

• **DeleteInstance** = ``"sso:DeleteInstance"``

Grants permission to delete an identity center instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteInstance.html

#### Defined in

actions/sso.ts:173

___

### DeleteInstanceAccessControlAttributeConfiguration

• **DeleteInstanceAccessControlAttributeConfiguration** = ``"sso:DeleteInstanceAccessControlAttributeConfiguration"``

Grants permission to disable ABAC and remove the attributes list for the instan
ce

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteInstanceAccessControlAttributeConfiguration.html

#### Defined in

actions/sso.ts:180

___

### DeleteManagedApplicationInstance

• **DeleteManagedApplicationInstance** = ``"sso:DeleteManagedApplicationInstance"``

Grants permission to delete the managed application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:186

___

### DeletePermissionSet

• **DeletePermissionSet** = ``"sso:DeletePermissionSet"``

Grants permission to delete a permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeletePermissionSet.html

#### Defined in

actions/sso.ts:192

___

### DeletePermissionsBoundaryFromPermissionSet

• **DeletePermissionsBoundaryFromPermissionSet** = ``"sso:DeletePermissionsBoundaryFromPermissionSet"``

Grants permission to remove permissions boundary from a permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeletePermissionsBoundaryFromPermissionSet.html

#### Defined in

actions/sso.ts:198

___

### DeletePermissionsPolicy

• **DeletePermissionsPolicy** = ``"sso:DeletePermissionsPolicy"``

Grants permission to delete the permission policy associated with a permission
set

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:205

___

### DeleteProfile

• **DeleteProfile** = ``"sso:DeleteProfile"``

Grants permission to delete the profile for an application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:211

___

### DeleteTrustedTokenIssuer

• **DeleteTrustedTokenIssuer** = ``"sso:DeleteTrustedTokenIssuer"``

Grants permission to delete a trusted token issuer for an instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteTrustedTokenIssuer.html

#### Defined in

actions/sso.ts:217

___

### DescribeAccountAssignmentCreationStatus

• **DescribeAccountAssignmentCreationStatus** = ``"sso:DescribeAccountAssignmentCreationStatus"``

Grants permission to describe the status of the assignment creation request

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeAccountAssignmentCreationStatus.html

#### Defined in

actions/sso.ts:223

___

### DescribeAccountAssignmentDeletionStatus

• **DescribeAccountAssignmentDeletionStatus** = ``"sso:DescribeAccountAssignmentDeletionStatus"``

Grants permission to describe the status of an assignment deletion request

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeAccountAssignmentDeletionStatus.html

#### Defined in

actions/sso.ts:229

___

### DescribeApplication

• **DescribeApplication** = ``"sso:DescribeApplication"``

Grants permission to obtain information about an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeApplication.html

#### Defined in

actions/sso.ts:235

___

### DescribeApplicationAssignment

• **DescribeApplicationAssignment** = ``"sso:DescribeApplicationAssignment"``

Grants permission to retrieve an application assignment

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeApplicationAssignment.html

#### Defined in

actions/sso.ts:241

___

### DescribeApplicationProvider

• **DescribeApplicationProvider** = ``"sso:DescribeApplicationProvider"``

Grants permission to describe an application provider

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeApplicationProvider.html

#### Defined in

actions/sso.ts:247

___

### DescribeDirectories

• **DescribeDirectories** = ``"sso:DescribeDirectories"``

Grants permission to obtain information about the directories for this account

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:253

___

### DescribeInstance

• **DescribeInstance** = ``"sso:DescribeInstance"``

Grants permission to obtain information about an identity center instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeInstance.html

#### Defined in

actions/sso.ts:259

___

### DescribeInstanceAccessControlAttributeConfiguration

• **DescribeInstanceAccessControlAttributeConfiguration** = ``"sso:DescribeInstanceAccessControlAttributeConfiguration"``

Grants permission to get the list of attributes used by the instance for ABAC

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeInstanceAccessControlAttributeConfiguration.html

#### Defined in

actions/sso.ts:265

___

### DescribePermissionSet

• **DescribePermissionSet** = ``"sso:DescribePermissionSet"``

Grants permission to describe a permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribePermissionSet.html

#### Defined in

actions/sso.ts:271

___

### DescribePermissionSetProvisioningStatus

• **DescribePermissionSetProvisioningStatus** = ``"sso:DescribePermissionSetProvisioningStatus"``

Grants permission to describe the status for the given Permission Set Provision
ing request

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribePermissionSetProvisioningStatus.html

#### Defined in

actions/sso.ts:278

___

### DescribePermissionsPolicies

• **DescribePermissionsPolicies** = ``"sso:DescribePermissionsPolicies"``

Grants permission to retrieve all the permissions policies associated with a pe
rmission set

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:285

___

### DescribeRegisteredRegions

• **DescribeRegisteredRegions** = ``"sso:DescribeRegisteredRegions"``

Grants permission to obtain the regions where your organization has enabled AWS
IAM Identity Center

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:292

___

### DescribeTrustedTokenIssuer

• **DescribeTrustedTokenIssuer** = ``"sso:DescribeTrustedTokenIssuer"``

Grants permission to describe a trusted token issuer for an instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeTrustedTokenIssuer.html

#### Defined in

actions/sso.ts:298

___

### DescribeTrusts

• **DescribeTrusts** = ``"sso:DescribeTrusts"``

Grants permission to obtain information about the trust relationships for this
account

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:305

___

### DetachCustomerManagedPolicyReferenceFromPermissionSet

• **DetachCustomerManagedPolicyReferenceFromPermissionSet** = ``"sso:DetachCustomerManagedPolicyReferenceFromPermissionSet"``

Grants permission to detach a customer managed policy reference from a permissi
on set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DetachCustomerManagedPolicyReferenceFromPermissionSet.html

#### Defined in

actions/sso.ts:312

___

### DetachManagedPolicyFromPermissionSet

• **DetachManagedPolicyFromPermissionSet** = ``"sso:DetachManagedPolicyFromPermissionSet"``

Grants permission to detach the attached AWS managed policy from the specified
permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DetachManagedPolicyFromPermissionSet.html

#### Defined in

actions/sso.ts:319

___

### DisassociateDirectory

• **DisassociateDirectory** = ``"sso:DisassociateDirectory"``

Grants permission to disassociate a directory to be used by AWS IAM Identity Ce
nter

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:326

___

### DisassociateProfile

• **DisassociateProfile** = ``"sso:DisassociateProfile"``

Grants permission to disassociate a directory user or group from a profile

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:332

___

### GetApplicationAccessScope

• **GetApplicationAccessScope** = ``"sso:GetApplicationAccessScope"``

Grants permission to get an access scope to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetApplicationAccessScope.html

#### Defined in

actions/sso.ts:338

___

### GetApplicationAssignmentConfiguration

• **GetApplicationAssignmentConfiguration** = ``"sso:GetApplicationAssignmentConfiguration"``

Grants permission to read assignment configurations for an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetApplicationAssignmentConfiguration.html

#### Defined in

actions/sso.ts:344

___

### GetApplicationAuthenticationMethod

• **GetApplicationAuthenticationMethod** = ``"sso:GetApplicationAuthenticationMethod"``

Grants permission to get an authentication method to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetApplicationAuthenticationMethod.html

#### Defined in

actions/sso.ts:350

___

### GetApplicationGrant

• **GetApplicationGrant** = ``"sso:GetApplicationGrant"``

Grants permission to obtain details about a grant belonging to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetApplicationGrant.html

#### Defined in

actions/sso.ts:356

___

### GetApplicationInstance

• **GetApplicationInstance** = ``"sso:GetApplicationInstance"``

Grants permission to retrieve details for an application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:362

___

### GetApplicationTemplate

• **GetApplicationTemplate** = ``"sso:GetApplicationTemplate"``

Grants permission to retrieve application template details

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:368

___

### GetInlinePolicyForPermissionSet

• **GetInlinePolicyForPermissionSet** = ``"sso:GetInlinePolicyForPermissionSet"``

Grants permission to obtain the inline policy assigned to the permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetInlinePolicyForPermissionSet.html

#### Defined in

actions/sso.ts:374

___

### GetManagedApplicationInstance

• **GetManagedApplicationInstance** = ``"sso:GetManagedApplicationInstance"``

Grants permission to retrieve details for an application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:380

___

### GetMfaDeviceManagementForDirectory

• **GetMfaDeviceManagementForDirectory** = ``"sso:GetMfaDeviceManagementForDirectory"``

Grants permission to retrieve Mfa Device Management settings for the directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:386

___

### GetPermissionSet

• **GetPermissionSet** = ``"sso:GetPermissionSet"``

Grants permission to retrieve details of a permission set

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:392

___

### GetPermissionsBoundaryForPermissionSet

• **GetPermissionsBoundaryForPermissionSet** = ``"sso:GetPermissionsBoundaryForPermissionSet"``

Grants permission to get permissions boundary for a permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetPermissionsBoundaryForPermissionSet.html

#### Defined in

actions/sso.ts:398

___

### GetPermissionsPolicy

• **GetPermissionsPolicy** = ``"sso:GetPermissionsPolicy"``

Grants permission to retrieve all permission policies associated with a permiss
ion set

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:405

___

### GetProfile

• **GetProfile** = ``"sso:GetProfile"``

Grants permission to retrieve a profile for an application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:411

___

### GetSSOStatus

• **GetSSOStatus** = ``"sso:GetSSOStatus"``

Grants permission to check if AWS IAM Identity Center is enabled

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:417

___

### GetSharedSsoConfiguration

• **GetSharedSsoConfiguration** = ``"sso:GetSharedSsoConfiguration"``

Grants permission to retrieve shared configuration for the current SSO instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:423

___

### GetSsoConfiguration

• **GetSsoConfiguration** = ``"sso:GetSsoConfiguration"``

Grants permission to retrieve configuration for the current SSO instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:429

___

### GetTrust

• **GetTrust** = ``"sso:GetTrust"``

Grants permission to retrieve the federation trust in a target account

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:435

___

### ImportApplicationInstanceServiceProviderMetadata

• **ImportApplicationInstanceServiceProviderMetadata** = ``"sso:ImportApplicationInstanceServiceProviderMetadata"``

Grants permission to update the application instance by uploading an applicatio
n SAML metadata file provided by the service provider

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:442

___

### ListAccountAssignmentCreationStatus

• **ListAccountAssignmentCreationStatus** = ``"sso:ListAccountAssignmentCreationStatus"``

Grants permission to list the status of the AWS account assignment creation req
uests for a specified SSO instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignmentCreationStatus.html

#### Defined in

actions/sso.ts:449

___

### ListAccountAssignmentDeletionStatus

• **ListAccountAssignmentDeletionStatus** = ``"sso:ListAccountAssignmentDeletionStatus"``

Grants permission to list the status of the AWS account assignment deletion req
uests for a specified SSO instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignmentDeletionStatus.html

#### Defined in

actions/sso.ts:456

___

### ListAccountAssignments

• **ListAccountAssignments** = ``"sso:ListAccountAssignments"``

Grants permission to list the assignee of the specified AWS account with the sp
ecified permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignments.html

#### Defined in

actions/sso.ts:463

___

### ListAccountAssignmentsForPrincipal

• **ListAccountAssignmentsForPrincipal** = ``"sso:ListAccountAssignmentsForPrincipal"``

Grants permission to list accounts assigned to user or group

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignmentsForPrincipal.html

#### Defined in

actions/sso.ts:469

___

### ListAccountsForProvisionedPermissionSet

• **ListAccountsForProvisionedPermissionSet** = ``"sso:ListAccountsForProvisionedPermissionSet"``

Grants permission to list all the AWS accounts where the specified permission s
et is provisioned

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountsForProvisionedPermissionSet.html

#### Defined in

actions/sso.ts:476

___

### ListApplicationAccessScopes

• **ListApplicationAccessScopes** = ``"sso:ListApplicationAccessScopes"``

Grants permission to list access scopes to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationAccessScopes.html

#### Defined in

actions/sso.ts:482

___

### ListApplicationAssignments

• **ListApplicationAssignments** = ``"sso:ListApplicationAssignments"``

Grants permission to list application assignments

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationAssignments.html

#### Defined in

actions/sso.ts:488

___

### ListApplicationAssignmentsForPrincipal

• **ListApplicationAssignmentsForPrincipal** = ``"sso:ListApplicationAssignmentsForPrincipal"``

Grants permission to list applications assigned to user or group

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationAssignmentsForPrincipal.html

#### Defined in

actions/sso.ts:494

___

### ListApplicationAuthenticationMethods

• **ListApplicationAuthenticationMethods** = ``"sso:ListApplicationAuthenticationMethods"``

Grants permission to list authentication methods to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationAuthenticationMethods.html

#### Defined in

actions/sso.ts:500

___

### ListApplicationGrants

• **ListApplicationGrants** = ``"sso:ListApplicationGrants"``

Grants permission to list grants from an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationGrants.html

#### Defined in

actions/sso.ts:506

___

### ListApplicationInstanceCertificates

• **ListApplicationInstanceCertificates** = ``"sso:ListApplicationInstanceCertificates"``

Grants permission to retrieve all of the certificates for a given application i
nstance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:513

___

### ListApplicationInstances

• **ListApplicationInstances** = ``"sso:ListApplicationInstances"``

Grants permission to retrieve all application instances

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:519

___

### ListApplicationProviders

• **ListApplicationProviders** = ``"sso:ListApplicationProviders"``

Grants permission to list application providers

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplicationProviders.html

#### Defined in

actions/sso.ts:525

___

### ListApplicationTemplates

• **ListApplicationTemplates** = ``"sso:ListApplicationTemplates"``

Grants permission to retrieve all supported application templates

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:531

___

### ListApplications

• **ListApplications** = ``"sso:ListApplications"``

Grants permission to retrieve all applications associated with the instance of
IAM Identity Center

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListApplications.html

#### Defined in

actions/sso.ts:538

___

### ListCustomerManagedPolicyReferencesInPermissionSet

• **ListCustomerManagedPolicyReferencesInPermissionSet** = ``"sso:ListCustomerManagedPolicyReferencesInPermissionSet"``

Grants permission to list the customer managed policy references that are attac
hed to a permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListCustomerManagedPolicyReferencesInPermissionSet.html

#### Defined in

actions/sso.ts:545

___

### ListDirectoryAssociations

• **ListDirectoryAssociations** = ``"sso:ListDirectoryAssociations"``

Grants permission to retrieve details about the directory connected to AWS IAM
Identity Center

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:552

___

### ListInstances

• **ListInstances** = ``"sso:ListInstances"``

Grants permission to list the SSO Instances that the caller has access to

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html

#### Defined in

actions/sso.ts:558

___

### ListManagedPoliciesInPermissionSet

• **ListManagedPoliciesInPermissionSet** = ``"sso:ListManagedPoliciesInPermissionSet"``

Grants permission to list the AWS managed policies that are attached to a speci
fied permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListManagedPoliciesInPermissionSet.html

#### Defined in

actions/sso.ts:565

___

### ListPermissionSetProvisioningStatus

• **ListPermissionSetProvisioningStatus** = ``"sso:ListPermissionSetProvisioningStatus"``

Grants permission to list the status of the Permission Set Provisioning request
s for a specified SSO instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListPermissionSetProvisioningStatus.html

#### Defined in

actions/sso.ts:572

___

### ListPermissionSets

• **ListPermissionSets** = ``"sso:ListPermissionSets"``

Grants permission to retrieve all permission sets

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListPermissionSets.html

#### Defined in

actions/sso.ts:578

___

### ListPermissionSetsProvisionedToAccount

• **ListPermissionSetsProvisionedToAccount** = ``"sso:ListPermissionSetsProvisionedToAccount"``

Grants permission to list all the permission sets that are provisioned to a spe
cified AWS account

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListPermissionSetsProvisionedToAccount.html

#### Defined in

actions/sso.ts:585

___

### ListProfileAssociations

• **ListProfileAssociations** = ``"sso:ListProfileAssociations"``

Grants permission to retrieve the directory user or group associated with the p
rofile

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:592

___

### ListProfiles

• **ListProfiles** = ``"sso:ListProfiles"``

Grants permission to retrieve all profiles for an application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:598

___

### ListTagsForResource

• **ListTagsForResource** = ``"sso:ListTagsForResource"``

Grants permission to list the tags that are attached to a specified resource

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/sso.ts:604

___

### ListTrustedTokenIssuers

• **ListTrustedTokenIssuers** = ``"sso:ListTrustedTokenIssuers"``

Grants permission to list trusted token issuers for an instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListTrustedTokenIssuers.html

#### Defined in

actions/sso.ts:610

___

### ProvisionPermissionSet

• **ProvisionPermissionSet** = ``"sso:ProvisionPermissionSet"``

Grants permission to provision a specified permission set to the specified targ
et

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ProvisionPermissionSet.html

#### Defined in

actions/sso.ts:617

___

### PutApplicationAccessScope

• **PutApplicationAccessScope** = ``"sso:PutApplicationAccessScope"``

Grants permission to create/update an access scope to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutApplicationAccessScope.html

#### Defined in

actions/sso.ts:623

___

### PutApplicationAssignmentConfiguration

• **PutApplicationAssignmentConfiguration** = ``"sso:PutApplicationAssignmentConfiguration"``

Grants permission to add assignment configurations to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutApplicationAssignmentConfiguration.html

#### Defined in

actions/sso.ts:629

___

### PutApplicationAuthenticationMethod

• **PutApplicationAuthenticationMethod** = ``"sso:PutApplicationAuthenticationMethod"``

Grants permission to create/update an authentication method to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutApplicationAuthenticationMethod.html

#### Defined in

actions/sso.ts:635

___

### PutApplicationGrant

• **PutApplicationGrant** = ``"sso:PutApplicationGrant"``

Grants permission to create/update a grant to an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutApplicationGrant.html

#### Defined in

actions/sso.ts:641

___

### PutInlinePolicyToPermissionSet

• **PutInlinePolicyToPermissionSet** = ``"sso:PutInlinePolicyToPermissionSet"``

Grants permission to attach an IAM inline policy to a permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutInlinePolicyToPermissionSet.html

#### Defined in

actions/sso.ts:647

___

### PutMfaDeviceManagementForDirectory

• **PutMfaDeviceManagementForDirectory** = ``"sso:PutMfaDeviceManagementForDirectory"``

Grants permission to put Mfa Device Management settings for the directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:653

___

### PutPermissionsBoundaryToPermissionSet

• **PutPermissionsBoundaryToPermissionSet** = ``"sso:PutPermissionsBoundaryToPermissionSet"``

Grants permission to add permissions boundary to a permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutPermissionsBoundaryToPermissionSet.html

#### Defined in

actions/sso.ts:659

___

### PutPermissionsPolicy

• **PutPermissionsPolicy** = ``"sso:PutPermissionsPolicy"``

Grants permission to add a policy to a permission set

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:665

___

### SearchGroups

• **SearchGroups** = ``"sso:SearchGroups"``

Grants permission to search for groups within the associated directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:671

___

### SearchUsers

• **SearchUsers** = ``"sso:SearchUsers"``

Grants permission to search for users within the associated directory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:677

___

### StartSSO

• **StartSSO** = ``"sso:StartSSO"``

Grants permission to initialize AWS IAM Identity Center

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:683

___

### TagResource

• **TagResource** = ``"sso:TagResource"``

Grants permission to associate a set of tags with a specified resource

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_TagResource.html

#### Defined in

actions/sso.ts:689

___

### UntagResource

• **UntagResource** = ``"sso:UntagResource"``

Grants permission to disassociate a set of tags from a specified resource

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UntagResource.html

#### Defined in

actions/sso.ts:695

___

### UpdateApplication

• **UpdateApplication** = ``"sso:UpdateApplication"``

Grants permission to update an application

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdateApplication.html

#### Defined in

actions/sso.ts:701

___

### UpdateApplicationInstanceActiveCertificate

• **UpdateApplicationInstanceActiveCertificate** = ``"sso:UpdateApplicationInstanceActiveCertificate"``

Grants permission to set a certificate as the active one for this application i
nstance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:708

___

### UpdateApplicationInstanceDisplayData

• **UpdateApplicationInstanceDisplayData** = ``"sso:UpdateApplicationInstanceDisplayData"``

Grants permission to update display data of an application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:714

___

### UpdateApplicationInstanceResponseConfiguration

• **UpdateApplicationInstanceResponseConfiguration** = ``"sso:UpdateApplicationInstanceResponseConfiguration"``

Grants permission to update federation response configuration for the applicati
on instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:721

___

### UpdateApplicationInstanceResponseSchemaConfiguration

• **UpdateApplicationInstanceResponseSchemaConfiguration** = ``"sso:UpdateApplicationInstanceResponseSchemaConfiguration"``

Grants permission to update federation response schema configuration for the ap
plication instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:728

___

### UpdateApplicationInstanceSecurityConfiguration

• **UpdateApplicationInstanceSecurityConfiguration** = ``"sso:UpdateApplicationInstanceSecurityConfiguration"``

Grants permission to update security details for the application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:734

___

### UpdateApplicationInstanceServiceProviderConfiguration

• **UpdateApplicationInstanceServiceProviderConfiguration** = ``"sso:UpdateApplicationInstanceServiceProviderConfiguration"``

Grants permission to update service provider related configuration for the appl
ication instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:741

___

### UpdateApplicationInstanceStatus

• **UpdateApplicationInstanceStatus** = ``"sso:UpdateApplicationInstanceStatus"``

Grants permission to update the status of an application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:747

___

### UpdateDirectoryAssociation

• **UpdateDirectoryAssociation** = ``"sso:UpdateDirectoryAssociation"``

Grants permission to update the user attribute mappings for your connected dire
ctory

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:754

___

### UpdateInstance

• **UpdateInstance** = ``"sso:UpdateInstance"``

Grants permission to update an identity center instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdateInstance.html

#### Defined in

actions/sso.ts:760

___

### UpdateInstanceAccessControlAttributeConfiguration

• **UpdateInstanceAccessControlAttributeConfiguration** = ``"sso:UpdateInstanceAccessControlAttributeConfiguration"``

Grants permission to update the attributes to use with the instance for ABAC

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdateInstanceAccessControlAttributeConfiguration.html

#### Defined in

actions/sso.ts:766

___

### UpdateManagedApplicationInstanceStatus

• **UpdateManagedApplicationInstanceStatus** = ``"sso:UpdateManagedApplicationInstanceStatus"``

Grants permission to update the status of a managed application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:772

___

### UpdatePermissionSet

• **UpdatePermissionSet** = ``"sso:UpdatePermissionSet"``

Grants permission to update the permission set

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdatePermissionSet.html

#### Defined in

actions/sso.ts:778

___

### UpdateProfile

• **UpdateProfile** = ``"sso:UpdateProfile"``

Grants permission to update the profile for an application instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:784

___

### UpdateSSOConfiguration

• **UpdateSSOConfiguration** = ``"sso:UpdateSSOConfiguration"``

Grants permission to update the configuration for the current SSO instance

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:790

___

### UpdateTrust

• **UpdateTrust** = ``"sso:UpdateTrust"``

Grants permission to update the federation trust in a target account

See https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample

#### Defined in

actions/sso.ts:796

___

### UpdateTrustedTokenIssuer

• **UpdateTrustedTokenIssuer** = ``"sso:UpdateTrustedTokenIssuer"``

Grants permission to update a trusted token issuer for an instance

See https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdateTrustedTokenIssuer.html

#### Defined in

actions/sso.ts:802
