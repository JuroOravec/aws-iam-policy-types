[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsServerlessrepoActions

# Enumeration: AwsServerlessrepoActions

All IAM policy actions for AWS Serverless Application Repository (SERVERLESSREPO)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html

2024-02-12T09:59:12.067Z

## Table of contents

### Enumeration Members

- [CreateApplication](AwsServerlessrepoActions.md#createapplication)
- [CreateApplicationVersion](AwsServerlessrepoActions.md#createapplicationversion)
- [CreateCloudFormationChangeSet](AwsServerlessrepoActions.md#createcloudformationchangeset)
- [CreateCloudFormationTemplate](AwsServerlessrepoActions.md#createcloudformationtemplate)
- [DeleteApplication](AwsServerlessrepoActions.md#deleteapplication)
- [GetApplication](AwsServerlessrepoActions.md#getapplication)
- [GetApplicationPolicy](AwsServerlessrepoActions.md#getapplicationpolicy)
- [GetCloudFormationTemplate](AwsServerlessrepoActions.md#getcloudformationtemplate)
- [ListApplicationDependencies](AwsServerlessrepoActions.md#listapplicationdependencies)
- [ListApplicationVersions](AwsServerlessrepoActions.md#listapplicationversions)
- [ListApplications](AwsServerlessrepoActions.md#listapplications)
- [PutApplicationPolicy](AwsServerlessrepoActions.md#putapplicationpolicy)
- [SearchApplications](AwsServerlessrepoActions.md#searchapplications)
- [UnshareApplication](AwsServerlessrepoActions.md#unshareapplication)
- [UpdateApplication](AwsServerlessrepoActions.md#updateapplication)

## Enumeration Members

### CreateApplication

• **CreateApplication** = ``"serverlessrepo:CreateApplication"``

Grants permission to create an application, optionally including an AWS SAM fil
e to create the first application version in the same call

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications.html

#### Defined in

actions/serverlessrepo.ts:18

___

### CreateApplicationVersion

• **CreateApplicationVersion** = ``"serverlessrepo:CreateApplicationVersion"``

Grants permission to create an application version

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-versions-semanticversion.html

#### Defined in

actions/serverlessrepo.ts:24

___

### CreateCloudFormationChangeSet

• **CreateCloudFormationChangeSet** = ``"serverlessrepo:CreateCloudFormationChangeSet"``

Grants permission to create an AWS CloudFormation ChangeSet for the given appli
cation

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-changesets.html

#### Defined in

actions/serverlessrepo.ts:31

___

### CreateCloudFormationTemplate

• **CreateCloudFormationTemplate** = ``"serverlessrepo:CreateCloudFormationTemplate"``

Grants permission to create an AWS CloudFormation template

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-templates.html

#### Defined in

actions/serverlessrepo.ts:37

___

### DeleteApplication

• **DeleteApplication** = ``"serverlessrepo:DeleteApplication"``

Grants permission to delete the specified application

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid.html

#### Defined in

actions/serverlessrepo.ts:43

___

### GetApplication

• **GetApplication** = ``"serverlessrepo:GetApplication"``

Grants permission to get the specified application

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid.html

#### Defined in

actions/serverlessrepo.ts:49

___

### GetApplicationPolicy

• **GetApplicationPolicy** = ``"serverlessrepo:GetApplicationPolicy"``

Grants permission to get the policy for the specified application

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-policy.html

#### Defined in

actions/serverlessrepo.ts:55

___

### GetCloudFormationTemplate

• **GetCloudFormationTemplate** = ``"serverlessrepo:GetCloudFormationTemplate"``

Grants permission to get the specified AWS CloudFormation template

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-templates-templateid.html

#### Defined in

actions/serverlessrepo.ts:61

___

### ListApplicationDependencies

• **ListApplicationDependencies** = ``"serverlessrepo:ListApplicationDependencies"``

Grants permission to retrieve the list of applications nested in the containing
application

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-dependencies.html

#### Defined in

actions/serverlessrepo.ts:68

___

### ListApplicationVersions

• **ListApplicationVersions** = ``"serverlessrepo:ListApplicationVersions"``

Grants permission to list versions for the specified application owned by the r
equester

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-versions.html

#### Defined in

actions/serverlessrepo.ts:75

___

### ListApplications

• **ListApplications** = ``"serverlessrepo:ListApplications"``

Grants permission to list applications owned by the requester

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications.html

#### Defined in

actions/serverlessrepo.ts:81

___

### PutApplicationPolicy

• **PutApplicationPolicy** = ``"serverlessrepo:PutApplicationPolicy"``

Grants permission to put the policy for the specified application

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-policy.html

#### Defined in

actions/serverlessrepo.ts:87

___

### SearchApplications

• **SearchApplications** = ``"serverlessrepo:SearchApplications"``

Grants permission to get all applications authorized for this user

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid.html

#### Defined in

actions/serverlessrepo.ts:93

___

### UnshareApplication

• **UnshareApplication** = ``"serverlessrepo:UnshareApplication"``

Grants permission to unshare the specified application

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid.html

#### Defined in

actions/serverlessrepo.ts:99

___

### UpdateApplication

• **UpdateApplication** = ``"serverlessrepo:UpdateApplication"``

Grants permission to update meta-data of the application

See https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid.html

#### Defined in

actions/serverlessrepo.ts:105
