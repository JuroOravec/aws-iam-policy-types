[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRamActions

# Enumeration: AwsRamActions

All IAM policy actions for AWS Resource Access Manager (RAM) (RAM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceaccessmanagerram.html

2024-02-12T09:58:55.013Z

## Table of contents

### Enumeration Members

- [AcceptResourceShareInvitation](AwsRamActions.md#acceptresourceshareinvitation)
- [AssociateResourceShare](AwsRamActions.md#associateresourceshare)
- [AssociateResourceSharePermission](AwsRamActions.md#associateresourcesharepermission)
- [CreatePermission](AwsRamActions.md#createpermission)
- [CreatePermissionVersion](AwsRamActions.md#createpermissionversion)
- [CreateResourceShare](AwsRamActions.md#createresourceshare)
- [DeletePermission](AwsRamActions.md#deletepermission)
- [DeletePermissionVersion](AwsRamActions.md#deletepermissionversion)
- [DeleteResourceShare](AwsRamActions.md#deleteresourceshare)
- [DisassociateResourceShare](AwsRamActions.md#disassociateresourceshare)
- [DisassociateResourceSharePermission](AwsRamActions.md#disassociateresourcesharepermission)
- [EnableSharingWithAwsOrganization](AwsRamActions.md#enablesharingwithawsorganization)
- [GetPermission](AwsRamActions.md#getpermission)
- [GetResourcePolicies](AwsRamActions.md#getresourcepolicies)
- [GetResourceShareAssociations](AwsRamActions.md#getresourceshareassociations)
- [GetResourceShareInvitations](AwsRamActions.md#getresourceshareinvitations)
- [GetResourceShares](AwsRamActions.md#getresourceshares)
- [ListPendingInvitationResources](AwsRamActions.md#listpendinginvitationresources)
- [ListPermissionAssociations](AwsRamActions.md#listpermissionassociations)
- [ListPermissionVersions](AwsRamActions.md#listpermissionversions)
- [ListPermissions](AwsRamActions.md#listpermissions)
- [ListPrincipals](AwsRamActions.md#listprincipals)
- [ListReplacePermissionAssociationsWork](AwsRamActions.md#listreplacepermissionassociationswork)
- [ListResourceSharePermissions](AwsRamActions.md#listresourcesharepermissions)
- [ListResourceTypes](AwsRamActions.md#listresourcetypes)
- [ListResources](AwsRamActions.md#listresources)
- [PromotePermissionCreatedFromPolicy](AwsRamActions.md#promotepermissioncreatedfrompolicy)
- [PromoteResourceShareCreatedFromPolicy](AwsRamActions.md#promoteresourcesharecreatedfrompolicy)
- [RejectResourceShareInvitation](AwsRamActions.md#rejectresourceshareinvitation)
- [ReplacePermissionAssociations](AwsRamActions.md#replacepermissionassociations)
- [SetDefaultPermissionVersion](AwsRamActions.md#setdefaultpermissionversion)
- [TagResource](AwsRamActions.md#tagresource)
- [UntagResource](AwsRamActions.md#untagresource)
- [UpdateResourceShare](AwsRamActions.md#updateresourceshare)

## Enumeration Members

### AcceptResourceShareInvitation

• **AcceptResourceShareInvitation** = ``"ram:AcceptResourceShareInvitation"``

Grants permission to accept the specified resource share invitation

See https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html

#### Defined in

actions/ram.ts:17

___

### AssociateResourceShare

• **AssociateResourceShare** = ``"ram:AssociateResourceShare"``

Grants permission to associate resource(s) and/or principal(s) to a resource sh
are

See https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceShare.html

#### Defined in

actions/ram.ts:24

___

### AssociateResourceSharePermission

• **AssociateResourceSharePermission** = ``"ram:AssociateResourceSharePermission"``

Grants permission to associate a Permission with a Resource Share

See https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceSharePermission.html

#### Defined in

actions/ram.ts:30

___

### CreatePermission

• **CreatePermission** = ``"ram:CreatePermission"``

Grants permission to create a Permission that can be associated to a Resource S
hare

See https://docs.aws.amazon.com/ram/latest/APIReference/API_CreatePermission.html

#### Defined in

actions/ram.ts:37

___

### CreatePermissionVersion

• **CreatePermissionVersion** = ``"ram:CreatePermissionVersion"``

Grants permission to create a new version of a Permission that can be associate
d to a Resource Share

See https://docs.aws.amazon.com/ram/latest/APIReference/API_CreatePermissionVersion.html

#### Defined in

actions/ram.ts:44

___

### CreateResourceShare

• **CreateResourceShare** = ``"ram:CreateResourceShare"``

Grants permission to create a resource share with provided resource(s) and/or p
rincipal(s)

See https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html

#### Defined in

actions/ram.ts:51

___

### DeletePermission

• **DeletePermission** = ``"ram:DeletePermission"``

Grants permission to delete a specified Permission

See https://docs.aws.amazon.com/ram/latest/APIReference/API_DeletePermission.html

#### Defined in

actions/ram.ts:57

___

### DeletePermissionVersion

• **DeletePermissionVersion** = ``"ram:DeletePermissionVersion"``

Grants permission to delete a specified version of a permission

See https://docs.aws.amazon.com/ram/latest/APIReference/API_DeletePermissionVersion.html

#### Defined in

actions/ram.ts:63

___

### DeleteResourceShare

• **DeleteResourceShare** = ``"ram:DeleteResourceShare"``

Grants permission to delete resource share

See https://docs.aws.amazon.com/ram/latest/APIReference/API_DeleteResourceShare.html

#### Defined in

actions/ram.ts:69

___

### DisassociateResourceShare

• **DisassociateResourceShare** = ``"ram:DisassociateResourceShare"``

Grants permission to disassociate resource(s) and/or principal(s) from a resour
ce share

See https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceShare.html

#### Defined in

actions/ram.ts:76

___

### DisassociateResourceSharePermission

• **DisassociateResourceSharePermission** = ``"ram:DisassociateResourceSharePermission"``

Grants permission to disassociate a Permission from a Resource Share

See https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceSharePermission.html

#### Defined in

actions/ram.ts:82

___

### EnableSharingWithAwsOrganization

• **EnableSharingWithAwsOrganization** = ``"ram:EnableSharingWithAwsOrganization"``

Grants permission to access customer's organization and create a SLR in the cus
tomer's account

See https://docs.aws.amazon.com/ram/latest/APIReference/API_EnableSharingWithAwsOrganization.html

#### Defined in

actions/ram.ts:89

___

### GetPermission

• **GetPermission** = ``"ram:GetPermission"``

Grants permission to get the contents of an AWS RAM permission

See https://docs.aws.amazon.com/ram/latest/APIReference/API_GetPermission.html

#### Defined in

actions/ram.ts:95

___

### GetResourcePolicies

• **GetResourcePolicies** = ``"ram:GetResourcePolicies"``

Grants permission to get the policies for the specified resources that you own
and have shared

See https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourcePolicies.html

#### Defined in

actions/ram.ts:102

___

### GetResourceShareAssociations

• **GetResourceShareAssociations** = ``"ram:GetResourceShareAssociations"``

Grants permission to get a set of resource share associations from a provided l
ist or with a specified status of the specified type

See https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareAssociations.html

#### Defined in

actions/ram.ts:109

___

### GetResourceShareInvitations

• **GetResourceShareInvitations** = ``"ram:GetResourceShareInvitations"``

Grants permission to get resource share invitations by the specified invitation
arn or those for the resource share

See https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html

#### Defined in

actions/ram.ts:116

___

### GetResourceShares

• **GetResourceShares** = ``"ram:GetResourceShares"``

Grants permission to get a set of resource shares from a provided list or with
a specified status

See https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShares.html

#### Defined in

actions/ram.ts:123

___

### ListPendingInvitationResources

• **ListPendingInvitationResources** = ``"ram:ListPendingInvitationResources"``

Grants permission to list the resources in a resource share that is shared with
you but that the invitation is still pending for

See https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html

#### Defined in

actions/ram.ts:130

___

### ListPermissionAssociations

• **ListPermissionAssociations** = ``"ram:ListPermissionAssociations"``

Grants permission to list information about the permission and any associations

See https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissionAssociations.html

#### Defined in

actions/ram.ts:136

___

### ListPermissionVersions

• **ListPermissionVersions** = ``"ram:ListPermissionVersions"``

Grants permission to list the versions of an AWS RAM permission

See https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissionVersions.html

#### Defined in

actions/ram.ts:142

___

### ListPermissions

• **ListPermissions** = ``"ram:ListPermissions"``

Grants permission to list the AWS RAM permissions

See https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissions.html

#### Defined in

actions/ram.ts:148

___

### ListPrincipals

• **ListPrincipals** = ``"ram:ListPrincipals"``

Grants permission to list the principals that you have shared resources with or
that have shared resources with you

See https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPrincipals.html

#### Defined in

actions/ram.ts:155

___

### ListReplacePermissionAssociationsWork

• **ListReplacePermissionAssociationsWork** = ``"ram:ListReplacePermissionAssociationsWork"``

Grants permission to retrieve the status of the asynchronous permission replace
ment

See https://docs.aws.amazon.com/ram/latest/APIReference/API_ListReplacePermissionAssociationsWork.html

#### Defined in

actions/ram.ts:162

___

### ListResourceSharePermissions

• **ListResourceSharePermissions** = ``"ram:ListResourceSharePermissions"``

Grants permission to list the Permissions associated with a Resource Share

See https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceSharePermissions.html

#### Defined in

actions/ram.ts:168

___

### ListResourceTypes

• **ListResourceTypes** = ``"ram:ListResourceTypes"``

Grants permission to list the shareable resource types supported by AWS RAM

See https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceTypes.html

#### Defined in

actions/ram.ts:174

___

### ListResources

• **ListResources** = ``"ram:ListResources"``

Grants permission to list the resources that you added to resource shares or th
e resources that are shared with you

See https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResources.html

#### Defined in

actions/ram.ts:181

___

### PromotePermissionCreatedFromPolicy

• **PromotePermissionCreatedFromPolicy** = ``"ram:PromotePermissionCreatedFromPolicy"``

Grants permission to create a separate, fully manageable customer managed permi
ssion

See https://docs.aws.amazon.com/ram/latest/APIReference/API_PromotePermissionCreatedFromPolicy.html

#### Defined in

actions/ram.ts:188

___

### PromoteResourceShareCreatedFromPolicy

• **PromoteResourceShareCreatedFromPolicy** = ``"ram:PromoteResourceShareCreatedFromPolicy"``

Grants permission to promote the specified resource share

See https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html

#### Defined in

actions/ram.ts:194

___

### RejectResourceShareInvitation

• **RejectResourceShareInvitation** = ``"ram:RejectResourceShareInvitation"``

Grants permission to reject the specified resource share invitation

See https://docs.aws.amazon.com/ram/latest/APIReference/API_RejectResourceShareInvitation.html

#### Defined in

actions/ram.ts:200

___

### ReplacePermissionAssociations

• **ReplacePermissionAssociations** = ``"ram:ReplacePermissionAssociations"``

Grants permission to update all resource shares to a new permission

See https://docs.aws.amazon.com/ram/latest/APIReference/API_ReplacePermissionAssociations.html

#### Defined in

actions/ram.ts:206

___

### SetDefaultPermissionVersion

• **SetDefaultPermissionVersion** = ``"ram:SetDefaultPermissionVersion"``

Grants permission to specify a version number as the default version for the re
spective customer managed permission

See https://docs.aws.amazon.com/ram/latest/APIReference/API_SetDefaultPermissionVersion.html

#### Defined in

actions/ram.ts:213

___

### TagResource

• **TagResource** = ``"ram:TagResource"``

Grants permission to tag the specified resource share or permission

See https://docs.aws.amazon.com/ram/latest/APIReference/API_TagResource.html

#### Defined in

actions/ram.ts:219

___

### UntagResource

• **UntagResource** = ``"ram:UntagResource"``

Grants permission to untag the specified resource share or permission

See https://docs.aws.amazon.com/ram/latest/APIReference/API_UntagResource.html

#### Defined in

actions/ram.ts:225

___

### UpdateResourceShare

• **UpdateResourceShare** = ``"ram:UpdateResourceShare"``

Grants permission to update attributes of the resource share

See https://docs.aws.amazon.com/ram/latest/APIReference/API_UpdateResourceShare.html

#### Defined in

actions/ram.ts:231
