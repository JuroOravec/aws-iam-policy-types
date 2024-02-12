[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCloud9Actions

# Enumeration: AwsCloud9Actions

All IAM policy actions for AWS Cloud9 (CLOUD9)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloud9.html

2024-02-12T09:56:21.091Z

## Table of contents

### Enumeration Members

- [ActivateEC2Remote](AwsCloud9Actions.md#activateec2remote)
- [CreateEnvironmentEC2](AwsCloud9Actions.md#createenvironmentec2)
- [CreateEnvironmentMembership](AwsCloud9Actions.md#createenvironmentmembership)
- [CreateEnvironmentSSH](AwsCloud9Actions.md#createenvironmentssh)
- [CreateEnvironmentToken](AwsCloud9Actions.md#createenvironmenttoken)
- [DeleteEnvironment](AwsCloud9Actions.md#deleteenvironment)
- [DeleteEnvironmentMembership](AwsCloud9Actions.md#deleteenvironmentmembership)
- [DescribeEC2Remote](AwsCloud9Actions.md#describeec2remote)
- [DescribeEnvironmentMemberships](AwsCloud9Actions.md#describeenvironmentmemberships)
- [DescribeEnvironmentStatus](AwsCloud9Actions.md#describeenvironmentstatus)
- [DescribeEnvironments](AwsCloud9Actions.md#describeenvironments)
- [DescribeSSHRemote](AwsCloud9Actions.md#describesshremote)
- [GetEnvironmentConfig](AwsCloud9Actions.md#getenvironmentconfig)
- [GetEnvironmentSettings](AwsCloud9Actions.md#getenvironmentsettings)
- [GetMembershipSettings](AwsCloud9Actions.md#getmembershipsettings)
- [GetMigrationExperiences](AwsCloud9Actions.md#getmigrationexperiences)
- [GetUserPublicKey](AwsCloud9Actions.md#getuserpublickey)
- [GetUserSettings](AwsCloud9Actions.md#getusersettings)
- [ListEnvironments](AwsCloud9Actions.md#listenvironments)
- [ListTagsForResource](AwsCloud9Actions.md#listtagsforresource)
- [ModifyTemporaryCredentialsOnEnvironmentEC2](AwsCloud9Actions.md#modifytemporarycredentialsonenvironmentec2)
- [TagResource](AwsCloud9Actions.md#tagresource)
- [UntagResource](AwsCloud9Actions.md#untagresource)
- [UpdateEnvironment](AwsCloud9Actions.md#updateenvironment)
- [UpdateEnvironmentMembership](AwsCloud9Actions.md#updateenvironmentmembership)
- [UpdateEnvironmentSettings](AwsCloud9Actions.md#updateenvironmentsettings)
- [UpdateMembershipSettings](AwsCloud9Actions.md#updatemembershipsettings)
- [UpdateSSHRemote](AwsCloud9Actions.md#updatesshremote)
- [UpdateUserSettings](AwsCloud9Actions.md#updateusersettings)
- [ValidateEnvironmentName](AwsCloud9Actions.md#validateenvironmentname)

## Enumeration Members

### ActivateEC2Remote

• **ActivateEC2Remote** = ``"cloud9:ActivateEC2Remote"``

Grants permission to start the Amazon EC2 instance that your AWS Cloud9 IDE con
nects to

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:18

___

### CreateEnvironmentEC2

• **CreateEnvironmentEC2** = ``"cloud9:CreateEnvironmentEC2"``

Grants permission to create an AWS Cloud9 development environment, launches an
Amazon Elastic Compute Cloud (Amazon EC2) instance, and then hosts the environm
ent on the instance

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentEC2.html

#### Defined in

actions/cloud9.ts:26

___

### CreateEnvironmentMembership

• **CreateEnvironmentMembership** = ``"cloud9:CreateEnvironmentMembership"``

Grants permission to add an environment member to an AWS Cloud9 development env
ironment

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentMembership.html

#### Defined in

actions/cloud9.ts:33

___

### CreateEnvironmentSSH

• **CreateEnvironmentSSH** = ``"cloud9:CreateEnvironmentSSH"``

Grants permission to create an AWS Cloud9 SSH development environment

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:39

___

### CreateEnvironmentToken

• **CreateEnvironmentToken** = ``"cloud9:CreateEnvironmentToken"``

Grants permission to create an authentication token that allows a connection be
tween the AWS Cloud9 IDE and the user's environment

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:46

___

### DeleteEnvironment

• **DeleteEnvironment** = ``"cloud9:DeleteEnvironment"``

Grants permission to delete an AWS Cloud9 development environment. If the envir
onment is hosted on an Amazon Elastic Compute Cloud (Amazon EC2) instance, also
terminates the instance

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironment.html

#### Defined in

actions/cloud9.ts:54

___

### DeleteEnvironmentMembership

• **DeleteEnvironmentMembership** = ``"cloud9:DeleteEnvironmentMembership"``

Grants permission to delete an environment member from an AWS Cloud9 developmen
t environment

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironmentMembership.html

#### Defined in

actions/cloud9.ts:61

___

### DescribeEC2Remote

• **DescribeEC2Remote** = ``"cloud9:DescribeEC2Remote"``

Grants permission to get details about the connection to the EC2 development en
vironment, including host, user, and port

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:68

___

### DescribeEnvironmentMemberships

• **DescribeEnvironmentMemberships** = ``"cloud9:DescribeEnvironmentMemberships"``

Grants permission to get information about environment members for an AWS Cloud
9 development environment

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentMemberships.html

#### Defined in

actions/cloud9.ts:75

___

### DescribeEnvironmentStatus

• **DescribeEnvironmentStatus** = ``"cloud9:DescribeEnvironmentStatus"``

Grants permission to get status information for an AWS Cloud9 development envir
onment

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentStatus.html

#### Defined in

actions/cloud9.ts:82

___

### DescribeEnvironments

• **DescribeEnvironments** = ``"cloud9:DescribeEnvironments"``

Grants permission to get information about AWS Cloud9 development environments

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironments.html

#### Defined in

actions/cloud9.ts:88

___

### DescribeSSHRemote

• **DescribeSSHRemote** = ``"cloud9:DescribeSSHRemote"``

Grants permission to get details about the connection to the SSH development en
vironment, including host, user, and port

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:95

___

### GetEnvironmentConfig

• **GetEnvironmentConfig** = ``"cloud9:GetEnvironmentConfig"``

Grants permission to get configuration information that's used to initialize th
e AWS Cloud9 IDE

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:102

___

### GetEnvironmentSettings

• **GetEnvironmentSettings** = ``"cloud9:GetEnvironmentSettings"``

Grants permission to get the AWS Cloud9 IDE settings for a specified developmen
t environment

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:109

___

### GetMembershipSettings

• **GetMembershipSettings** = ``"cloud9:GetMembershipSettings"``

Grants permission to get the AWS Cloud9 IDE settings for a specified environmen
t member

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:116

___

### GetMigrationExperiences

• **GetMigrationExperiences** = ``"cloud9:GetMigrationExperiences"``

Grants permission to get the migration experience for a cloud9 user

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:122

___

### GetUserPublicKey

• **GetUserPublicKey** = ``"cloud9:GetUserPublicKey"``

Grants permission to get the user's public SSH key, which is used by AWS Cloud9
to connect to SSH development environments

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:129

___

### GetUserSettings

• **GetUserSettings** = ``"cloud9:GetUserSettings"``

Grants permission to get the AWS Cloud9 IDE settings for a specified user

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:135

___

### ListEnvironments

• **ListEnvironments** = ``"cloud9:ListEnvironments"``

Grants permission to get a list of AWS Cloud9 development environment identifie
rs

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListEnvironments.html

#### Defined in

actions/cloud9.ts:142

___

### ListTagsForResource

• **ListTagsForResource** = ``"cloud9:ListTagsForResource"``

Grants permission to list tags for a cloud9 environment

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/cloud9.ts:148

___

### ModifyTemporaryCredentialsOnEnvironmentEC2

• **ModifyTemporaryCredentialsOnEnvironmentEC2** = ``"cloud9:ModifyTemporaryCredentialsOnEnvironmentEC2"``

Grants permission to set AWS managed temporary credentials on the Amazon EC2 in
stance that's used by the AWS Cloud9 integrated development environment (IDE)

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:155

___

### TagResource

• **TagResource** = ``"cloud9:TagResource"``

Grants permission to add tags to a cloud9 environment

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_TagResource.html

#### Defined in

actions/cloud9.ts:161

___

### UntagResource

• **UntagResource** = ``"cloud9:UntagResource"``

Grants permission to remove tags from a cloud9 environment

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UntagResource.html

#### Defined in

actions/cloud9.ts:167

___

### UpdateEnvironment

• **UpdateEnvironment** = ``"cloud9:UpdateEnvironment"``

Grants permission to change the settings of an existing AWS Cloud9 development
environment

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironment.html

#### Defined in

actions/cloud9.ts:174

___

### UpdateEnvironmentMembership

• **UpdateEnvironmentMembership** = ``"cloud9:UpdateEnvironmentMembership"``

Grants permission to change the settings of an existing environment member for
an AWS Cloud9 development environment

See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironmentMembership.html

#### Defined in

actions/cloud9.ts:181

___

### UpdateEnvironmentSettings

• **UpdateEnvironmentSettings** = ``"cloud9:UpdateEnvironmentSettings"``

Grants permission to update the AWS Cloud9 IDE settings for a specified develop
ment environment

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:188

___

### UpdateMembershipSettings

• **UpdateMembershipSettings** = ``"cloud9:UpdateMembershipSettings"``

Grants permission to update the AWS Cloud9 IDE settings for a specified environ
ment member

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:195

___

### UpdateSSHRemote

• **UpdateSSHRemote** = ``"cloud9:UpdateSSHRemote"``

Grants permission to update details about the connection to the SSH development
environment, including host, user, and port

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:202

___

### UpdateUserSettings

• **UpdateUserSettings** = ``"cloud9:UpdateUserSettings"``

Grants permission to update IDE-specific settings of an AWS Cloud9 user

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:208

___

### ValidateEnvironmentName

• **ValidateEnvironmentName** = ``"cloud9:ValidateEnvironmentName"``

Grants permission to validate the environment name during the process of creati
ng an AWS Cloud9 development environment

See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix

#### Defined in

actions/cloud9.ts:215
