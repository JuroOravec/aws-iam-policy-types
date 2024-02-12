[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsResourceGroupsActions

# Enumeration: AwsResourceGroupsActions

All IAM policy actions for AWS Resource Groups (RESOURCE-GROUPS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourcegroups.html

2024-02-12T09:58:56.909Z

## Table of contents

### Enumeration Members

- [AssociateResource](AwsResourceGroupsActions.md#associateresource)
- [CreateGroup](AwsResourceGroupsActions.md#creategroup)
- [DeleteGroup](AwsResourceGroupsActions.md#deletegroup)
- [DisassociateResource](AwsResourceGroupsActions.md#disassociateresource)
- [GetAccountSettings](AwsResourceGroupsActions.md#getaccountsettings)
- [GetGroup](AwsResourceGroupsActions.md#getgroup)
- [GetGroupConfiguration](AwsResourceGroupsActions.md#getgroupconfiguration)
- [GetGroupQuery](AwsResourceGroupsActions.md#getgroupquery)
- [GetTags](AwsResourceGroupsActions.md#gettags)
- [GroupResources](AwsResourceGroupsActions.md#groupresources)
- [ListGroupResources](AwsResourceGroupsActions.md#listgroupresources)
- [ListGroups](AwsResourceGroupsActions.md#listgroups)
- [PutGroupConfiguration](AwsResourceGroupsActions.md#putgroupconfiguration)
- [PutGroupPolicy](AwsResourceGroupsActions.md#putgrouppolicy)
- [SearchResources](AwsResourceGroupsActions.md#searchresources)
- [Tag](AwsResourceGroupsActions.md#tag)
- [UngroupResources](AwsResourceGroupsActions.md#ungroupresources)
- [Untag](AwsResourceGroupsActions.md#untag)
- [UpdateAccountSettings](AwsResourceGroupsActions.md#updateaccountsettings)
- [UpdateGroup](AwsResourceGroupsActions.md#updategroup)
- [UpdateGroupQuery](AwsResourceGroupsActions.md#updategroupquery)

## Enumeration Members

### AssociateResource

• **AssociateResource** = ``"resource-groups:AssociateResource"``

Grants permission to associate a resource to an Application

See https://docs.aws.amazon.com/servicecatalog/latest/arguide/associate-resources.html

#### Defined in

actions/resource-groups.ts:17

___

### CreateGroup

• **CreateGroup** = ``"resource-groups:CreateGroup"``

Grants permission to create a resource group with a specified name, description
, and resource query

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_CreateGroup.html

#### Defined in

actions/resource-groups.ts:24

___

### DeleteGroup

• **DeleteGroup** = ``"resource-groups:DeleteGroup"``

Grants permission to delete a specified resource group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_DeleteGroup.html

#### Defined in

actions/resource-groups.ts:30

___

### DisassociateResource

• **DisassociateResource** = ``"resource-groups:DisassociateResource"``

Grants permission to disassociate a resource from an Application

See https://docs.aws.amazon.com/servicecatalog/latest/arguide/associate-resources.html

#### Defined in

actions/resource-groups.ts:36

___

### GetAccountSettings

• **GetAccountSettings** = ``"resource-groups:GetAccountSettings"``

Grants permission to get the current status of optional features in Resource Gr
oups

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetAccountSettings.html

#### Defined in

actions/resource-groups.ts:43

___

### GetGroup

• **GetGroup** = ``"resource-groups:GetGroup"``

Grants permission to get information of a specified resource group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroup.html

#### Defined in

actions/resource-groups.ts:49

___

### GetGroupConfiguration

• **GetGroupConfiguration** = ``"resource-groups:GetGroupConfiguration"``

Grants permission to get the service configuration associated with the specifie
d resource group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupConfiguration.html

#### Defined in

actions/resource-groups.ts:56

___

### GetGroupQuery

• **GetGroupQuery** = ``"resource-groups:GetGroupQuery"``

Grants permission to get the query associated with a specified resource group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupQuery.html

#### Defined in

actions/resource-groups.ts:62

___

### GetTags

• **GetTags** = ``"resource-groups:GetTags"``

Grants permission to get the tags associated with a specified resource group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetTags.html

#### Defined in

actions/resource-groups.ts:68

___

### GroupResources

• **GroupResources** = ``"resource-groups:GroupResources"``

Grants permission to add the specified resources to the specified group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_GroupResources.html

#### Defined in

actions/resource-groups.ts:74

___

### ListGroupResources

• **ListGroupResources** = ``"resource-groups:ListGroupResources"``

Grants permission to list the resources that are members of a specified resourc
e group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroupResources.html

#### Defined in

actions/resource-groups.ts:81

___

### ListGroups

• **ListGroups** = ``"resource-groups:ListGroups"``

Grants permission to list all resource groups in your account

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroups.html

#### Defined in

actions/resource-groups.ts:87

___

### PutGroupConfiguration

• **PutGroupConfiguration** = ``"resource-groups:PutGroupConfiguration"``

Grants permission to put the service configuration associated with the specifie
d resource group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_PutGroupConfiguration.html

#### Defined in

actions/resource-groups.ts:94

___

### PutGroupPolicy

• **PutGroupPolicy** = ``"resource-groups:PutGroupPolicy"``

Grants permission to add a resource-based policy for the specified group

See https://docs.aws.amazon.com/license-manager/latest/userguide/management-role.html#service-linked-role-permissions-management-role

#### Defined in

actions/resource-groups.ts:100

___

### SearchResources

• **SearchResources** = ``"resource-groups:SearchResources"``

Grants permission to search for AWS resources matching the given query

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_SearchResources.html

#### Defined in

actions/resource-groups.ts:106

___

### Tag

• **Tag** = ``"resource-groups:Tag"``

Grants permission to tag a specified resource group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_Tag.html

#### Defined in

actions/resource-groups.ts:112

___

### UngroupResources

• **UngroupResources** = ``"resource-groups:UngroupResources"``

Grants permission to remove the specified resources from the specified group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_UngroupResources.html

#### Defined in

actions/resource-groups.ts:118

___

### Untag

• **Untag** = ``"resource-groups:Untag"``

Grants permission to remove tags associated with a specified resource group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_Untag.html

#### Defined in

actions/resource-groups.ts:124

___

### UpdateAccountSettings

• **UpdateAccountSettings** = ``"resource-groups:UpdateAccountSettings"``

Grants permission to update optional features in Resource Groups

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateAccountSettings.html

#### Defined in

actions/resource-groups.ts:130

___

### UpdateGroup

• **UpdateGroup** = ``"resource-groups:UpdateGroup"``

Grants permission to update a specified resource group

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroup.html

#### Defined in

actions/resource-groups.ts:136

___

### UpdateGroupQuery

• **UpdateGroupQuery** = ``"resource-groups:UpdateGroupQuery"``

Grants permission to update the query associated with a specified resource grou
p

See https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroupQuery.html

#### Defined in

actions/resource-groups.ts:143
