[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMonitronActions

# Enumeration: AwsMonitronActions

All IAM policy actions for Amazon Monitron (MONITRON)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmonitron.html

2024-02-12T09:58:26.553Z

## Table of contents

### Enumeration Members

- [AssociateProjectAdminUser](AwsMonitronActions.md#associateprojectadminuser)
- [CreateProject](AwsMonitronActions.md#createproject)
- [CreateProjectUserAssociation](AwsMonitronActions.md#createprojectuserassociation)
- [CreateUserAccessRoleAssociation](AwsMonitronActions.md#createuseraccessroleassociation)
- [DeleteProject](AwsMonitronActions.md#deleteproject)
- [DeleteProjectUserAssociation](AwsMonitronActions.md#deleteprojectuserassociation)
- [DeleteUserAccessRoleAssociation](AwsMonitronActions.md#deleteuseraccessroleassociation)
- [DisassociateProjectAdminUser](AwsMonitronActions.md#disassociateprojectadminuser)
- [GetProject](AwsMonitronActions.md#getproject)
- [GetProjectAdminUser](AwsMonitronActions.md#getprojectadminuser)
- [ListProjectAdminUsers](AwsMonitronActions.md#listprojectadminusers)
- [ListProjectUserAssociations](AwsMonitronActions.md#listprojectuserassociations)
- [ListProjects](AwsMonitronActions.md#listprojects)
- [ListTagsForResource](AwsMonitronActions.md#listtagsforresource)
- [ListUserAccessRoleAssociations](AwsMonitronActions.md#listuseraccessroleassociations)
- [TagResource](AwsMonitronActions.md#tagresource)
- [UntagResource](AwsMonitronActions.md#untagresource)
- [UpdateProject](AwsMonitronActions.md#updateproject)

## Enumeration Members

### AssociateProjectAdminUser

• **AssociateProjectAdminUser** = ``"monitron:AssociateProjectAdminUser"``

Grants permission to associate a user with the project as an administrator

See https://docs.aws.amazon.com/Monitron/latest/user-guide/user-management-chapter.html

#### Defined in

actions/monitron.ts:17

___

### CreateProject

• **CreateProject** = ``"monitron:CreateProject"``

Grants permission to create a project

See https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-creating-project.html

#### Defined in

actions/monitron.ts:23

___

### CreateProjectUserAssociation

• **CreateProjectUserAssociation** = ``"monitron:CreateProjectUserAssociation"``

Grants permission to associate a user with the project

See https://docs.aws.amazon.com/Monitron/latest/user-guide/adding-user.html

#### Defined in

actions/monitron.ts:29

___

### CreateUserAccessRoleAssociation

• **CreateUserAccessRoleAssociation** = ``"monitron:CreateUserAccessRoleAssociation"``

Grants permission to associate an access role with the user

See https://docs.aws.amazon.com/Monitron/latest/user-guide/adding-user.html

#### Defined in

actions/monitron.ts:35

___

### DeleteProject

• **DeleteProject** = ``"monitron:DeleteProject"``

Grants permission to delete a project

See https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-delete-project.html

#### Defined in

actions/monitron.ts:41

___

### DeleteProjectUserAssociation

• **DeleteProjectUserAssociation** = ``"monitron:DeleteProjectUserAssociation"``

Grants permission to disassociate a user from the project

See https://docs.aws.amazon.com/Monitron/latest/user-guide/deleting-user.html

#### Defined in

actions/monitron.ts:47

___

### DeleteUserAccessRoleAssociation

• **DeleteUserAccessRoleAssociation** = ``"monitron:DeleteUserAccessRoleAssociation"``

Grants permission to disassociate an access role from the user

See https://docs.aws.amazon.com/Monitron/latest/user-guide/deleting-user.html

#### Defined in

actions/monitron.ts:53

___

### DisassociateProjectAdminUser

• **DisassociateProjectAdminUser** = ``"monitron:DisassociateProjectAdminUser"``

Grants permission to disassociate an administrator from the project

See https://docs.aws.amazon.com/Monitron/latest/user-guide/mu-remove-project-admin.html

#### Defined in

actions/monitron.ts:59

___

### GetProject

• **GetProject** = ``"monitron:GetProject"``

Grants permission to get information about a project

See https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-project-tasks.html

#### Defined in

actions/monitron.ts:65

___

### GetProjectAdminUser

• **GetProjectAdminUser** = ``"monitron:GetProjectAdminUser"``

Grants permission to describe an administrator who is associated with the proje
ct

See https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-project-tasks.html

#### Defined in

actions/monitron.ts:72

___

### ListProjectAdminUsers

• **ListProjectAdminUsers** = ``"monitron:ListProjectAdminUsers"``

Grants permission to list all administrators associated with the project

See https://docs.aws.amazon.com/Monitron/latest/user-guide/user-management-chapter.html

#### Defined in

actions/monitron.ts:78

___

### ListProjectUserAssociations

• **ListProjectUserAssociations** = ``"monitron:ListProjectUserAssociations"``

Grants permission to list all users associated with the project

See https://docs.aws.amazon.com/Monitron/latest/user-guide/user-management-chapter.html

#### Defined in

actions/monitron.ts:84

___

### ListProjects

• **ListProjects** = ``"monitron:ListProjects"``

Grants permission to list all projects

See https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-project-tasks.html

#### Defined in

actions/monitron.ts:90

___

### ListTagsForResource

• **ListTagsForResource** = ``"monitron:ListTagsForResource"``

Grants permission to list all tags for a resource

See https://docs.aws.amazon.com/Monitron/latest/user-guide/tagging.html

#### Defined in

actions/monitron.ts:96

___

### ListUserAccessRoleAssociations

• **ListUserAccessRoleAssociations** = ``"monitron:ListUserAccessRoleAssociations"``

Grants permission to list all access roles associated with the user

See https://docs.aws.amazon.com/Monitron/latest/user-guide/user-management-chapter.html

#### Defined in

actions/monitron.ts:102

___

### TagResource

• **TagResource** = ``"monitron:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/Monitron/latest/user-guide/tagging.html

#### Defined in

actions/monitron.ts:108

___

### UntagResource

• **UntagResource** = ``"monitron:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/Monitron/latest/user-guide/tagging.html#modify-tag-1

#### Defined in

actions/monitron.ts:114

___

### UpdateProject

• **UpdateProject** = ``"monitron:UpdateProject"``

Grants permission to update a project

See https://docs.aws.amazon.com/Monitron/latest/user-guide/mp-updating-project.html

#### Defined in

actions/monitron.ts:120
