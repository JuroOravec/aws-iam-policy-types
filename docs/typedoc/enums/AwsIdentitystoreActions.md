[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIdentitystoreActions

# Enumeration: AwsIdentitystoreActions

All IAM policy actions for AWS Identity Store (IDENTITYSTORE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystore.html

2024-02-12T09:57:40.946Z

## Table of contents

### Enumeration Members

- [CreateGroup](AwsIdentitystoreActions.md#creategroup)
- [CreateGroupMembership](AwsIdentitystoreActions.md#creategroupmembership)
- [CreateUser](AwsIdentitystoreActions.md#createuser)
- [DeleteGroup](AwsIdentitystoreActions.md#deletegroup)
- [DeleteGroupMembership](AwsIdentitystoreActions.md#deletegroupmembership)
- [DeleteUser](AwsIdentitystoreActions.md#deleteuser)
- [DescribeGroup](AwsIdentitystoreActions.md#describegroup)
- [DescribeGroupMembership](AwsIdentitystoreActions.md#describegroupmembership)
- [DescribeUser](AwsIdentitystoreActions.md#describeuser)
- [GetGroupId](AwsIdentitystoreActions.md#getgroupid)
- [GetGroupMembershipId](AwsIdentitystoreActions.md#getgroupmembershipid)
- [GetUserId](AwsIdentitystoreActions.md#getuserid)
- [IsMemberInGroups](AwsIdentitystoreActions.md#ismemberingroups)
- [ListGroupMemberships](AwsIdentitystoreActions.md#listgroupmemberships)
- [ListGroupMembershipsForMember](AwsIdentitystoreActions.md#listgroupmembershipsformember)
- [ListGroups](AwsIdentitystoreActions.md#listgroups)
- [ListUsers](AwsIdentitystoreActions.md#listusers)
- [UpdateGroup](AwsIdentitystoreActions.md#updategroup)
- [UpdateUser](AwsIdentitystoreActions.md#updateuser)

## Enumeration Members

### CreateGroup

• **CreateGroup** = ``"identitystore:CreateGroup"``

Grants permission to create a group in the specified IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_CreateGroup.html

#### Defined in

actions/identitystore.ts:17

___

### CreateGroupMembership

• **CreateGroupMembership** = ``"identitystore:CreateGroupMembership"``

Grants permission to create a member to a group in the specified IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_CreateGroupMembership.html

#### Defined in

actions/identitystore.ts:23

___

### CreateUser

• **CreateUser** = ``"identitystore:CreateUser"``

Grants permission to create a user in the specified IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_CreateUser.html

#### Defined in

actions/identitystore.ts:29

___

### DeleteGroup

• **DeleteGroup** = ``"identitystore:DeleteGroup"``

Grants permission to delete a group in the specified IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DeleteGroup.html

#### Defined in

actions/identitystore.ts:35

___

### DeleteGroupMembership

• **DeleteGroupMembership** = ``"identitystore:DeleteGroupMembership"``

Grants permission to remove a member that is part of a group in the specified I
dentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DeleteGroupMembership.html

#### Defined in

actions/identitystore.ts:42

___

### DeleteUser

• **DeleteUser** = ``"identitystore:DeleteUser"``

Grants permission to delete a user in the specified IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DeleteUser.html

#### Defined in

actions/identitystore.ts:48

___

### DescribeGroup

• **DescribeGroup** = ``"identitystore:DescribeGroup"``

Grants permission to retrieve information about a group in the specified Identi
tyStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeGroup.html

#### Defined in

actions/identitystore.ts:55

___

### DescribeGroupMembership

• **DescribeGroupMembership** = ``"identitystore:DescribeGroupMembership"``

Grants permission to retrieve information about a member that is part of a grou
p in the specified IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeGroupMembership.html

#### Defined in

actions/identitystore.ts:62

___

### DescribeUser

• **DescribeUser** = ``"identitystore:DescribeUser"``

Grants permission to retrieve information about user in the specified IdentityS
tore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeUser.html

#### Defined in

actions/identitystore.ts:69

___

### GetGroupId

• **GetGroupId** = ``"identitystore:GetGroupId"``

Grants permission to retrieve ID information about group in the specified Ident
ityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_GetGroupId.html

#### Defined in

actions/identitystore.ts:76

___

### GetGroupMembershipId

• **GetGroupMembershipId** = ``"identitystore:GetGroupMembershipId"``

Grants permission to retrieve ID information of a member which is part of a gro
up in the specified IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_GetGroupMembershipId.html

#### Defined in

actions/identitystore.ts:83

___

### GetUserId

• **GetUserId** = ``"identitystore:GetUserId"``

Grants permission to retrieves ID information about user in the specified Ident
ityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_GetUserId.html

#### Defined in

actions/identitystore.ts:90

___

### IsMemberInGroups

• **IsMemberInGroups** = ``"identitystore:IsMemberInGroups"``

Grants permission to check if a member is a part of groups in the specified Ide
ntityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_IsMemberInGroups.html

#### Defined in

actions/identitystore.ts:97

___

### ListGroupMemberships

• **ListGroupMemberships** = ``"identitystore:ListGroupMemberships"``

Grants permission to retrieve all members that are part of a group in the speci
fied IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroupMemberships.html

#### Defined in

actions/identitystore.ts:104

___

### ListGroupMembershipsForMember

• **ListGroupMembershipsForMember** = ``"identitystore:ListGroupMembershipsForMember"``

Grants permission to list groups of the target member in the specified Identity
Store

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroupMembershipsForMember.html

#### Defined in

actions/identitystore.ts:111

___

### ListGroups

• **ListGroups** = ``"identitystore:ListGroups"``

Grants permission to search for groups within the specified IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroups.html

#### Defined in

actions/identitystore.ts:117

___

### ListUsers

• **ListUsers** = ``"identitystore:ListUsers"``

Grants permission to search for users in the specified IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListUsers.html

#### Defined in

actions/identitystore.ts:123

___

### UpdateGroup

• **UpdateGroup** = ``"identitystore:UpdateGroup"``

Grants permission to update information about a group in the specified Identity
Store

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_UpdateGroup.html

#### Defined in

actions/identitystore.ts:130

___

### UpdateUser

• **UpdateUser** = ``"identitystore:UpdateUser"``

Grants permission to update user information in the specified IdentityStore

See https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_UpdateUser.html

#### Defined in

actions/identitystore.ts:136
