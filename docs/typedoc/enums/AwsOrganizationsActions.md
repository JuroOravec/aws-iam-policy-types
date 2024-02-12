[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsOrganizationsActions

# Enumeration: AwsOrganizationsActions

All IAM policy actions for AWS Organizations (ORGANIZATIONS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html

2024-02-12T09:58:34.342Z

## Table of contents

### Enumeration Members

- [AcceptHandshake](AwsOrganizationsActions.md#accepthandshake)
- [AttachPolicy](AwsOrganizationsActions.md#attachpolicy)
- [CancelHandshake](AwsOrganizationsActions.md#cancelhandshake)
- [CloseAccount](AwsOrganizationsActions.md#closeaccount)
- [CreateAccount](AwsOrganizationsActions.md#createaccount)
- [CreateGovCloudAccount](AwsOrganizationsActions.md#creategovcloudaccount)
- [CreateOrganization](AwsOrganizationsActions.md#createorganization)
- [CreateOrganizationalUnit](AwsOrganizationsActions.md#createorganizationalunit)
- [CreatePolicy](AwsOrganizationsActions.md#createpolicy)
- [DeclineHandshake](AwsOrganizationsActions.md#declinehandshake)
- [DeleteOrganization](AwsOrganizationsActions.md#deleteorganization)
- [DeleteOrganizationalUnit](AwsOrganizationsActions.md#deleteorganizationalunit)
- [DeletePolicy](AwsOrganizationsActions.md#deletepolicy)
- [DeleteResourcePolicy](AwsOrganizationsActions.md#deleteresourcepolicy)
- [DeregisterDelegatedAdministrator](AwsOrganizationsActions.md#deregisterdelegatedadministrator)
- [DescribeAccount](AwsOrganizationsActions.md#describeaccount)
- [DescribeCreateAccountStatus](AwsOrganizationsActions.md#describecreateaccountstatus)
- [DescribeEffectivePolicy](AwsOrganizationsActions.md#describeeffectivepolicy)
- [DescribeHandshake](AwsOrganizationsActions.md#describehandshake)
- [DescribeOrganization](AwsOrganizationsActions.md#describeorganization)
- [DescribeOrganizationalUnit](AwsOrganizationsActions.md#describeorganizationalunit)
- [DescribePolicy](AwsOrganizationsActions.md#describepolicy)
- [DescribeResourcePolicy](AwsOrganizationsActions.md#describeresourcepolicy)
- [DetachPolicy](AwsOrganizationsActions.md#detachpolicy)
- [DisableAWSServiceAccess](AwsOrganizationsActions.md#disableawsserviceaccess)
- [DisablePolicyType](AwsOrganizationsActions.md#disablepolicytype)
- [EnableAWSServiceAccess](AwsOrganizationsActions.md#enableawsserviceaccess)
- [EnableAllFeatures](AwsOrganizationsActions.md#enableallfeatures)
- [EnablePolicyType](AwsOrganizationsActions.md#enablepolicytype)
- [InviteAccountToOrganization](AwsOrganizationsActions.md#inviteaccounttoorganization)
- [LeaveOrganization](AwsOrganizationsActions.md#leaveorganization)
- [ListAWSServiceAccessForOrganization](AwsOrganizationsActions.md#listawsserviceaccessfororganization)
- [ListAccounts](AwsOrganizationsActions.md#listaccounts)
- [ListAccountsForParent](AwsOrganizationsActions.md#listaccountsforparent)
- [ListChildren](AwsOrganizationsActions.md#listchildren)
- [ListCreateAccountStatus](AwsOrganizationsActions.md#listcreateaccountstatus)
- [ListDelegatedAdministrators](AwsOrganizationsActions.md#listdelegatedadministrators)
- [ListDelegatedServicesForAccount](AwsOrganizationsActions.md#listdelegatedservicesforaccount)
- [ListHandshakesForAccount](AwsOrganizationsActions.md#listhandshakesforaccount)
- [ListHandshakesForOrganization](AwsOrganizationsActions.md#listhandshakesfororganization)
- [ListOrganizationalUnitsForParent](AwsOrganizationsActions.md#listorganizationalunitsforparent)
- [ListParents](AwsOrganizationsActions.md#listparents)
- [ListPolicies](AwsOrganizationsActions.md#listpolicies)
- [ListPoliciesForTarget](AwsOrganizationsActions.md#listpoliciesfortarget)
- [ListRoots](AwsOrganizationsActions.md#listroots)
- [ListTagsForResource](AwsOrganizationsActions.md#listtagsforresource)
- [ListTargetsForPolicy](AwsOrganizationsActions.md#listtargetsforpolicy)
- [MoveAccount](AwsOrganizationsActions.md#moveaccount)
- [PutResourcePolicy](AwsOrganizationsActions.md#putresourcepolicy)
- [RegisterDelegatedAdministrator](AwsOrganizationsActions.md#registerdelegatedadministrator)
- [RemoveAccountFromOrganization](AwsOrganizationsActions.md#removeaccountfromorganization)
- [TagResource](AwsOrganizationsActions.md#tagresource)
- [UntagResource](AwsOrganizationsActions.md#untagresource)
- [UpdateOrganizationalUnit](AwsOrganizationsActions.md#updateorganizationalunit)
- [UpdatePolicy](AwsOrganizationsActions.md#updatepolicy)

## Enumeration Members

### AcceptHandshake

• **AcceptHandshake** = ``"organizations:AcceptHandshake"``

Grants permission to send a response to the originator of a handshake agreeing
to the action proposed by the handshake request

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_AcceptHandshake.html

#### Defined in

actions/organizations.ts:18

___

### AttachPolicy

• **AttachPolicy** = ``"organizations:AttachPolicy"``

Grants permission to attach a policy to a root, an organizational unit, or an i
ndividual account

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_AttachPolicy.html

#### Defined in

actions/organizations.ts:25

___

### CancelHandshake

• **CancelHandshake** = ``"organizations:CancelHandshake"``

Grants permission to cancel a handshake

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_CancelHandshake.html

#### Defined in

actions/organizations.ts:31

___

### CloseAccount

• **CloseAccount** = ``"organizations:CloseAccount"``

Grants permission to close an AWS account that is now a part of an Organization
s, either created within the organization, or invited to join the organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_CloseAccount.html

#### Defined in

actions/organizations.ts:38

___

### CreateAccount

• **CreateAccount** = ``"organizations:CreateAccount"``

Grants permission to create an AWS account that is automatically a member of th
e organization with the credentials that made the request

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateAccount.html

#### Defined in

actions/organizations.ts:45

___

### CreateGovCloudAccount

• **CreateGovCloudAccount** = ``"organizations:CreateGovCloudAccount"``

Grants permission to create an AWS GovCloud (US) account

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateGovCloudAccount.html

#### Defined in

actions/organizations.ts:51

___

### CreateOrganization

• **CreateOrganization** = ``"organizations:CreateOrganization"``

Grants permission to create an organization. The account with the credentials t
hat calls the CreateOrganization operation automatically becomes the management
account of the new organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganization.html

#### Defined in

actions/organizations.ts:59

___

### CreateOrganizationalUnit

• **CreateOrganizationalUnit** = ``"organizations:CreateOrganizationalUnit"``

Grants permission to create an organizational unit (OU) within a root or parent
OU

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganizationalUnit.html

#### Defined in

actions/organizations.ts:66

___

### CreatePolicy

• **CreatePolicy** = ``"organizations:CreatePolicy"``

Grants permission to create a policy that you can attach to a root, an organiza
tional unit (OU), or an individual AWS account

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreatePolicy.html

#### Defined in

actions/organizations.ts:73

___

### DeclineHandshake

• **DeclineHandshake** = ``"organizations:DeclineHandshake"``

Grants permission to decline a handshake request. This sets the handshake state
to DECLINED and effectively deactivates the request

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeclineHandshake.html

#### Defined in

actions/organizations.ts:80

___

### DeleteOrganization

• **DeleteOrganization** = ``"organizations:DeleteOrganization"``

Grants permission to delete the organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganization.html

#### Defined in

actions/organizations.ts:86

___

### DeleteOrganizationalUnit

• **DeleteOrganizationalUnit** = ``"organizations:DeleteOrganizationalUnit"``

Grants permission to delete an organizational unit from a root or another OU

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganizationalUnit.html

#### Defined in

actions/organizations.ts:92

___

### DeletePolicy

• **DeletePolicy** = ``"organizations:DeletePolicy"``

Grants permission to delete a policy from your organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeletePolicy.html

#### Defined in

actions/organizations.ts:98

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"organizations:DeleteResourcePolicy"``

Grants permission to delete a resource policy from your organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/organizations.ts:104

___

### DeregisterDelegatedAdministrator

• **DeregisterDelegatedAdministrator** = ``"organizations:DeregisterDelegatedAdministrator"``

Grants permission to deregister the specified member AWS account as a delegated
administrator for the AWS service that is specified by ServicePrincipal

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeregisterDelegatedAdministrator.html

#### Defined in

actions/organizations.ts:111

___

### DescribeAccount

• **DescribeAccount** = ``"organizations:DescribeAccount"``

Grants permission to retrieve Organizations-related details about the specified
account

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeAccount.html

#### Defined in

actions/organizations.ts:118

___

### DescribeCreateAccountStatus

• **DescribeCreateAccountStatus** = ``"organizations:DescribeCreateAccountStatus"``

Grants permission to retrieve the current status of an asynchronous request to
create an account

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html

#### Defined in

actions/organizations.ts:125

___

### DescribeEffectivePolicy

• **DescribeEffectivePolicy** = ``"organizations:DescribeEffectivePolicy"``

Grants permission to retrieve the effective policy for an account

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeEffectivePolicy.html

#### Defined in

actions/organizations.ts:131

___

### DescribeHandshake

• **DescribeHandshake** = ``"organizations:DescribeHandshake"``

Grants permission to retrieve details about a previously requested handshake

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeHandshake.html

#### Defined in

actions/organizations.ts:137

___

### DescribeOrganization

• **DescribeOrganization** = ``"organizations:DescribeOrganization"``

Grants permission to retrieves details about the organization that the calling
credentials belong to

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganization.html

#### Defined in

actions/organizations.ts:144

___

### DescribeOrganizationalUnit

• **DescribeOrganizationalUnit** = ``"organizations:DescribeOrganizationalUnit"``

Grants permission to retrieve details about an organizational unit (OU)

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganizationalUnit.html

#### Defined in

actions/organizations.ts:150

___

### DescribePolicy

• **DescribePolicy** = ``"organizations:DescribePolicy"``

Grants permission to retrieves details about a policy

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribePolicy.html

#### Defined in

actions/organizations.ts:156

___

### DescribeResourcePolicy

• **DescribeResourcePolicy** = ``"organizations:DescribeResourcePolicy"``

Grants permission to retrieve information about a resource policy

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeResourcePolicy.html

#### Defined in

actions/organizations.ts:162

___

### DetachPolicy

• **DetachPolicy** = ``"organizations:DetachPolicy"``

Grants permission to detach a policy from a target root, organizational unit, o
r account

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DetachPolicy.html

#### Defined in

actions/organizations.ts:169

___

### DisableAWSServiceAccess

• **DisableAWSServiceAccess** = ``"organizations:DisableAWSServiceAccess"``

Grants permission to disable integration of an AWS service (the service that is
specified by ServicePrincipal) with AWS Organizations

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html

#### Defined in

actions/organizations.ts:176

___

### DisablePolicyType

• **DisablePolicyType** = ``"organizations:DisablePolicyType"``

Grants permission to disable an organization policy type in a root

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisablePolicyType.html

#### Defined in

actions/organizations.ts:182

___

### EnableAWSServiceAccess

• **EnableAWSServiceAccess** = ``"organizations:EnableAWSServiceAccess"``

Grants permission to enable integration of an AWS service (the service that is
specified by ServicePrincipal) with AWS Organizations

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html

#### Defined in

actions/organizations.ts:189

___

### EnableAllFeatures

• **EnableAllFeatures** = ``"organizations:EnableAllFeatures"``

Grants permission to start the process to enable all features in an organizatio
n, upgrading it from supporting only Consolidated Billing features

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html

#### Defined in

actions/organizations.ts:196

___

### EnablePolicyType

• **EnablePolicyType** = ``"organizations:EnablePolicyType"``

Grants permission to enable a policy type in a root

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnablePolicyType.html

#### Defined in

actions/organizations.ts:202

___

### InviteAccountToOrganization

• **InviteAccountToOrganization** = ``"organizations:InviteAccountToOrganization"``

Grants permission to send an invitation to another AWS account, asking it to jo
in your organization as a member account

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_InviteAccountToOrganization.html

#### Defined in

actions/organizations.ts:209

___

### LeaveOrganization

• **LeaveOrganization** = ``"organizations:LeaveOrganization"``

Grants permission to remove a member account from its parent organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_LeaveOrganization.html

#### Defined in

actions/organizations.ts:215

___

### ListAWSServiceAccessForOrganization

• **ListAWSServiceAccessForOrganization** = ``"organizations:ListAWSServiceAccessForOrganization"``

Grants permission to retrieve the list of the AWS services for which you enable
d integration with your organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAWSServiceAccessForOrganization.html

#### Defined in

actions/organizations.ts:222

___

### ListAccounts

• **ListAccounts** = ``"organizations:ListAccounts"``

Grants permission to list all of the the accounts in the organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html

#### Defined in

actions/organizations.ts:228

___

### ListAccountsForParent

• **ListAccountsForParent** = ``"organizations:ListAccountsForParent"``

Grants permission to list the accounts in an organization that are contained by
a root or organizational unit (OU)

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccountsForParent.html

#### Defined in

actions/organizations.ts:235

___

### ListChildren

• **ListChildren** = ``"organizations:ListChildren"``

Grants permission to list all of the OUs or accounts that are contained in a pa
rent OU or root

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListChildren.html

#### Defined in

actions/organizations.ts:242

___

### ListCreateAccountStatus

• **ListCreateAccountStatus** = ``"organizations:ListCreateAccountStatus"``

Grants permission to list the asynchronous account creation requests that are c
urrently being tracked for the organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListCreateAccountStatus.html

#### Defined in

actions/organizations.ts:249

___

### ListDelegatedAdministrators

• **ListDelegatedAdministrators** = ``"organizations:ListDelegatedAdministrators"``

Grants permission to list the AWS accounts that are designated as delegated adm
inistrators in this organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedAdministrators.html

#### Defined in

actions/organizations.ts:256

___

### ListDelegatedServicesForAccount

• **ListDelegatedServicesForAccount** = ``"organizations:ListDelegatedServicesForAccount"``

Grants permission to list the AWS services for which the specified account is a
delegated administrator in this organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedServicesForAccount.html

#### Defined in

actions/organizations.ts:263

___

### ListHandshakesForAccount

• **ListHandshakesForAccount** = ``"organizations:ListHandshakesForAccount"``

Grants permission to list all of the handshakes that are associated with an acc
ount

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForAccount.html

#### Defined in

actions/organizations.ts:270

___

### ListHandshakesForOrganization

• **ListHandshakesForOrganization** = ``"organizations:ListHandshakesForOrganization"``

Grants permission to list the handshakes that are associated with the organizat
ion

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForOrganization.html

#### Defined in

actions/organizations.ts:277

___

### ListOrganizationalUnitsForParent

• **ListOrganizationalUnitsForParent** = ``"organizations:ListOrganizationalUnitsForParent"``

Grants permission to lists all of the organizational units (OUs) in a parent or
ganizational unit or root

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListOrganizationalUnitsForParent.html

#### Defined in

actions/organizations.ts:284

___

### ListParents

• **ListParents** = ``"organizations:ListParents"``

Grants permission to list the root or organizational units (OUs) that serve as
the immediate parent of a child OU or account

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListParents.html

#### Defined in

actions/organizations.ts:291

___

### ListPolicies

• **ListPolicies** = ``"organizations:ListPolicies"``

Grants permission to list all of the policies in an organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPolicies.html

#### Defined in

actions/organizations.ts:297

___

### ListPoliciesForTarget

• **ListPoliciesForTarget** = ``"organizations:ListPoliciesForTarget"``

Grants permission to list all of the policies that are directly attached to a r
oot, organizational unit (OU), or account

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPoliciesForTarget.html

#### Defined in

actions/organizations.ts:304

___

### ListRoots

• **ListRoots** = ``"organizations:ListRoots"``

Grants permission to list all of the roots that are defined in the organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html

#### Defined in

actions/organizations.ts:310

___

### ListTagsForResource

• **ListTagsForResource** = ``"organizations:ListTagsForResource"``

Grants permission to list all tags for the specified resource

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/organizations.ts:316

___

### ListTargetsForPolicy

• **ListTargetsForPolicy** = ``"organizations:ListTargetsForPolicy"``

Grants permission to list all the roots, OUs, and accounts to which a policy is
attached

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTargetsForPolicy.html

#### Defined in

actions/organizations.ts:323

___

### MoveAccount

• **MoveAccount** = ``"organizations:MoveAccount"``

Grants permission to move an account from its current root or OU to another par
ent root or OU

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_MoveAccount.html

#### Defined in

actions/organizations.ts:330

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"organizations:PutResourcePolicy"``

Grants permission to create or update a resource policy

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/organizations.ts:336

___

### RegisterDelegatedAdministrator

• **RegisterDelegatedAdministrator** = ``"organizations:RegisterDelegatedAdministrator"``

Grants permission to register the specified member account to administer the Or
ganizations features of the AWS service that is specified by ServicePrincipal

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_RegisterDelegatedAdministrator.html

#### Defined in

actions/organizations.ts:343

___

### RemoveAccountFromOrganization

• **RemoveAccountFromOrganization** = ``"organizations:RemoveAccountFromOrganization"``

Grants permission to removes the specified account from the organization

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_RemoveAccountFromOrganization.html

#### Defined in

actions/organizations.ts:349

___

### TagResource

• **TagResource** = ``"organizations:TagResource"``

Grants permission to add one or more tags to the specified resource

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_TagResource.html

#### Defined in

actions/organizations.ts:355

___

### UntagResource

• **UntagResource** = ``"organizations:UntagResource"``

Grants permission to remove one or more tags from the specified resource

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_UntagResource.html

#### Defined in

actions/organizations.ts:361

___

### UpdateOrganizationalUnit

• **UpdateOrganizationalUnit** = ``"organizations:UpdateOrganizationalUnit"``

Grants permission to rename an organizational unit (OU)

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdateOrganizationalUnit.html

#### Defined in

actions/organizations.ts:367

___

### UpdatePolicy

• **UpdatePolicy** = ``"organizations:UpdatePolicy"``

Grants permission to update an existing policy with a new name, description, or
content

See https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdatePolicy.html

#### Defined in

actions/organizations.ts:374
