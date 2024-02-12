[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodestarActions

# Enumeration: AwsCodestarActions

All IAM policy actions for AWS CodeStar (CODESTAR)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html

2024-02-12T09:56:38.580Z

## Table of contents

### Enumeration Members

- [AssociateTeamMember](AwsCodestarActions.md#associateteammember)
- [CreateProject](AwsCodestarActions.md#createproject)
- [CreateUserProfile](AwsCodestarActions.md#createuserprofile)
- [DeleteProject](AwsCodestarActions.md#deleteproject)
- [DeleteUserProfile](AwsCodestarActions.md#deleteuserprofile)
- [DescribeProject](AwsCodestarActions.md#describeproject)
- [DescribeUserProfile](AwsCodestarActions.md#describeuserprofile)
- [DisassociateTeamMember](AwsCodestarActions.md#disassociateteammember)
- [ListProjects](AwsCodestarActions.md#listprojects)
- [ListResources](AwsCodestarActions.md#listresources)
- [ListTagsForProject](AwsCodestarActions.md#listtagsforproject)
- [ListTeamMembers](AwsCodestarActions.md#listteammembers)
- [ListUserProfiles](AwsCodestarActions.md#listuserprofiles)
- [TagProject](AwsCodestarActions.md#tagproject)
- [UntagProject](AwsCodestarActions.md#untagproject)
- [UpdateProject](AwsCodestarActions.md#updateproject)
- [UpdateTeamMember](AwsCodestarActions.md#updateteammember)
- [UpdateUserProfile](AwsCodestarActions.md#updateuserprofile)

## Enumeration Members

### AssociateTeamMember

• **AssociateTeamMember** = ``"codestar:AssociateTeamMember"``

Grants permission to add a user to the team for an AWS CodeStar project

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_AssociateTeamMember.html

#### Defined in

actions/codestar.ts:17

___

### CreateProject

• **CreateProject** = ``"codestar:CreateProject"``

Grants permission to create a project with minimal structure, customer policies
, and no resources

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateProject.html

#### Defined in

actions/codestar.ts:24

___

### CreateUserProfile

• **CreateUserProfile** = ``"codestar:CreateUserProfile"``

Grants permission to create a profile for a user that includes user preferences
, display name, and email

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateUserProfile.html

#### Defined in

actions/codestar.ts:31

___

### DeleteProject

• **DeleteProject** = ``"codestar:DeleteProject"``

Grants permission to delete a project, including project resources. Does not de
lete users associated with the project, but does delete the IAM roles that allo
wed access to the project

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteProject.html

#### Defined in

actions/codestar.ts:39

___

### DeleteUserProfile

• **DeleteUserProfile** = ``"codestar:DeleteUserProfile"``

Grants permission to delete a user profile in AWS CodeStar, including all perso
nal preference data associated with that profile, such as display name and emai
l address. It does not delete the history of that user, for example the history
of commits made by that user

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteUserProfile.html

#### Defined in

actions/codestar.ts:48

___

### DescribeProject

• **DescribeProject** = ``"codestar:DescribeProject"``

Grants permission to describe a project and its resources

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeProject.html

#### Defined in

actions/codestar.ts:54

___

### DescribeUserProfile

• **DescribeUserProfile** = ``"codestar:DescribeUserProfile"``

Grants permission to describe a user in AWS CodeStar and the user attributes ac
ross all projects

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeUserProfile.html

#### Defined in

actions/codestar.ts:61

___

### DisassociateTeamMember

• **DisassociateTeamMember** = ``"codestar:DisassociateTeamMember"``

Grants permission to remove a user from a project. Removing a user from a proje
ct also removes the IAM policies from that user that allowed access to the proj
ect and its resources

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_DisassociateTeamMember.html

#### Defined in

actions/codestar.ts:69

___

### ListProjects

• **ListProjects** = ``"codestar:ListProjects"``

Grants permission to list all projects in CodeStar associated with your AWS acc
ount

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListProjects.html

#### Defined in

actions/codestar.ts:76

___

### ListResources

• **ListResources** = ``"codestar:ListResources"``

Grants permission to list all resources associated with a project in CodeStar

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListResources.html

#### Defined in

actions/codestar.ts:82

___

### ListTagsForProject

• **ListTagsForProject** = ``"codestar:ListTagsForProject"``

Grants permission to list the tags associated with a project in CodeStar

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTagsForProject.html

#### Defined in

actions/codestar.ts:88

___

### ListTeamMembers

• **ListTeamMembers** = ``"codestar:ListTeamMembers"``

Grants permission to list all team members associated with a project

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTeamMembers.html

#### Defined in

actions/codestar.ts:94

___

### ListUserProfiles

• **ListUserProfiles** = ``"codestar:ListUserProfiles"``

Grants permission to list user profiles in AWS CodeStar

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListUserProfiles.html

#### Defined in

actions/codestar.ts:100

___

### TagProject

• **TagProject** = ``"codestar:TagProject"``

Grants permission to add tags to a project in CodeStar

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_TagProject.html

#### Defined in

actions/codestar.ts:106

___

### UntagProject

• **UntagProject** = ``"codestar:UntagProject"``

Grants permission to remove tags from a project in CodeStar

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_UntagProject.html

#### Defined in

actions/codestar.ts:112

___

### UpdateProject

• **UpdateProject** = ``"codestar:UpdateProject"``

Grants permission to update a project in CodeStar

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateProject.html

#### Defined in

actions/codestar.ts:118

___

### UpdateTeamMember

• **UpdateTeamMember** = ``"codestar:UpdateTeamMember"``

Grants permission to update team member attributes within a CodeStar project

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateTeamMember.html

#### Defined in

actions/codestar.ts:124

___

### UpdateUserProfile

• **UpdateUserProfile** = ``"codestar:UpdateUserProfile"``

Grants permission to update a profile for a user that includes user preferences
, display name, and email

See https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateUserProfile.html

#### Defined in

actions/codestar.ts:131
