[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAmplifyActions

# Enumeration: AwsAmplifyActions

All IAM policy actions for AWS Amplify (AMPLIFY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplify.html

2024-02-12T09:55:52.835Z

## Table of contents

### Enumeration Members

- [CreateApp](AwsAmplifyActions.md#createapp)
- [CreateBackendEnvironment](AwsAmplifyActions.md#createbackendenvironment)
- [CreateBranch](AwsAmplifyActions.md#createbranch)
- [CreateDeployment](AwsAmplifyActions.md#createdeployment)
- [CreateDomainAssociation](AwsAmplifyActions.md#createdomainassociation)
- [CreateWebHook](AwsAmplifyActions.md#createwebhook)
- [DeleteApp](AwsAmplifyActions.md#deleteapp)
- [DeleteBackendEnvironment](AwsAmplifyActions.md#deletebackendenvironment)
- [DeleteBranch](AwsAmplifyActions.md#deletebranch)
- [DeleteDomainAssociation](AwsAmplifyActions.md#deletedomainassociation)
- [DeleteJob](AwsAmplifyActions.md#deletejob)
- [DeleteWebHook](AwsAmplifyActions.md#deletewebhook)
- [GenerateAccessLogs](AwsAmplifyActions.md#generateaccesslogs)
- [GetApp](AwsAmplifyActions.md#getapp)
- [GetArtifactUrl](AwsAmplifyActions.md#getartifacturl)
- [GetBackendEnvironment](AwsAmplifyActions.md#getbackendenvironment)
- [GetBranch](AwsAmplifyActions.md#getbranch)
- [GetDomainAssociation](AwsAmplifyActions.md#getdomainassociation)
- [GetJob](AwsAmplifyActions.md#getjob)
- [GetWebHook](AwsAmplifyActions.md#getwebhook)
- [ListApps](AwsAmplifyActions.md#listapps)
- [ListArtifacts](AwsAmplifyActions.md#listartifacts)
- [ListBackendEnvironments](AwsAmplifyActions.md#listbackendenvironments)
- [ListBranches](AwsAmplifyActions.md#listbranches)
- [ListDomainAssociations](AwsAmplifyActions.md#listdomainassociations)
- [ListJobs](AwsAmplifyActions.md#listjobs)
- [ListTagsForResource](AwsAmplifyActions.md#listtagsforresource)
- [ListWebHooks](AwsAmplifyActions.md#listwebhooks)
- [StartDeployment](AwsAmplifyActions.md#startdeployment)
- [StartJob](AwsAmplifyActions.md#startjob)
- [StopJob](AwsAmplifyActions.md#stopjob)
- [TagResource](AwsAmplifyActions.md#tagresource)
- [UntagResource](AwsAmplifyActions.md#untagresource)
- [UpdateApp](AwsAmplifyActions.md#updateapp)
- [UpdateBranch](AwsAmplifyActions.md#updatebranch)
- [UpdateDomainAssociation](AwsAmplifyActions.md#updatedomainassociation)
- [UpdateWebHook](AwsAmplifyActions.md#updatewebhook)

## Enumeration Members

### CreateApp

• **CreateApp** = ``"amplify:CreateApp"``

Grants permission to create a new Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:17

___

### CreateBackendEnvironment

• **CreateBackendEnvironment** = ``"amplify:CreateBackendEnvironment"``

Grants permission to create a new backend environment for an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:23

___

### CreateBranch

• **CreateBranch** = ``"amplify:CreateBranch"``

Grants permission to create a new Branch for an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:29

___

### CreateDeployment

• **CreateDeployment** = ``"amplify:CreateDeployment"``

Grants permission to create a deployment for manual deploy apps. (Apps are not
connected to repository)

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:36

___

### CreateDomainAssociation

• **CreateDomainAssociation** = ``"amplify:CreateDomainAssociation"``

Grants permission to create a new DomainAssociation on an App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:42

___

### CreateWebHook

• **CreateWebHook** = ``"amplify:CreateWebHook"``

Grants permission to create a new webhook on an App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:48

___

### DeleteApp

• **DeleteApp** = ``"amplify:DeleteApp"``

Grants permission to delete an existing Amplify App by appId

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:54

___

### DeleteBackendEnvironment

• **DeleteBackendEnvironment** = ``"amplify:DeleteBackendEnvironment"``

Grants permission to delete a branch for an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:60

___

### DeleteBranch

• **DeleteBranch** = ``"amplify:DeleteBranch"``

Grants permission to delete a branch for an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:66

___

### DeleteDomainAssociation

• **DeleteDomainAssociation** = ``"amplify:DeleteDomainAssociation"``

Grants permission to delete a DomainAssociation

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:72

___

### DeleteJob

• **DeleteJob** = ``"amplify:DeleteJob"``

Grants permission to delete a job, for an Amplify branch, part of Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:78

___

### DeleteWebHook

• **DeleteWebHook** = ``"amplify:DeleteWebHook"``

Grants permission to delete a webhook by id

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:84

___

### GenerateAccessLogs

• **GenerateAccessLogs** = ``"amplify:GenerateAccessLogs"``

Grants permission to generate website access logs for a specific time range via
a pre-signed URL

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:91

___

### GetApp

• **GetApp** = ``"amplify:GetApp"``

Grants permission to retrieve an existing Amplify App by appId

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:97

___

### GetArtifactUrl

• **GetArtifactUrl** = ``"amplify:GetArtifactUrl"``

Grants permission to retrieve artifact info that corresponds to a artifactId

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:103

___

### GetBackendEnvironment

• **GetBackendEnvironment** = ``"amplify:GetBackendEnvironment"``

Grants permission to retrieve a backend environment for an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:109

___

### GetBranch

• **GetBranch** = ``"amplify:GetBranch"``

Grants permission to retrieve a branch for an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:115

___

### GetDomainAssociation

• **GetDomainAssociation** = ``"amplify:GetDomainAssociation"``

Grants permission to retrieve domain info that corresponds to an appId and doma
inName

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:122

___

### GetJob

• **GetJob** = ``"amplify:GetJob"``

Grants permission to get a job for a branch, part of an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:128

___

### GetWebHook

• **GetWebHook** = ``"amplify:GetWebHook"``

Grants permission to retrieve webhook info that corresponds to a webhookId

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:134

___

### ListApps

• **ListApps** = ``"amplify:ListApps"``

Grants permission to list existing Amplify Apps

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:140

___

### ListArtifacts

• **ListArtifacts** = ``"amplify:ListArtifacts"``

Grants permission to list artifacts with an app, a branch, a job and an artifac
t type

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:147

___

### ListBackendEnvironments

• **ListBackendEnvironments** = ``"amplify:ListBackendEnvironments"``

Grants permission to list backend environments for an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:153

___

### ListBranches

• **ListBranches** = ``"amplify:ListBranches"``

Grants permission to list branches for an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:159

___

### ListDomainAssociations

• **ListDomainAssociations** = ``"amplify:ListDomainAssociations"``

Grants permission to list domains with an app

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:165

___

### ListJobs

• **ListJobs** = ``"amplify:ListJobs"``

Grants permission to list Jobs for a branch, part of an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:171

___

### ListTagsForResource

• **ListTagsForResource** = ``"amplify:ListTagsForResource"``

Grants permission to list tags for an AWS Amplify Console resource

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:177

___

### ListWebHooks

• **ListWebHooks** = ``"amplify:ListWebHooks"``

Grants permission to list webhooks on an App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:183

___

### StartDeployment

• **StartDeployment** = ``"amplify:StartDeployment"``

Grants permission to start a deployment for manual deploy apps. (Apps are not c
onnected to repository)

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:190

___

### StartJob

• **StartJob** = ``"amplify:StartJob"``

Grants permission to start a new job for a branch, part of an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:196

___

### StopJob

• **StopJob** = ``"amplify:StopJob"``

Grants permission to stop a job that is in progress, for an Amplify branch, par
t of Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:203

___

### TagResource

• **TagResource** = ``"amplify:TagResource"``

Grants permission to tag an AWS Amplify Console resource

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:209

___

### UntagResource

• **UntagResource** = ``"amplify:UntagResource"``

Grants permission to remove a tag from an AWS Amplify Console resource

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:215

___

### UpdateApp

• **UpdateApp** = ``"amplify:UpdateApp"``

Grants permission to update an existing Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:221

___

### UpdateBranch

• **UpdateBranch** = ``"amplify:UpdateBranch"``

Grants permission to update a branch for an Amplify App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:227

___

### UpdateDomainAssociation

• **UpdateDomainAssociation** = ``"amplify:UpdateDomainAssociation"``

Grants permission to update a DomainAssociation on an App

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:233

___

### UpdateWebHook

• **UpdateWebHook** = ``"amplify:UpdateWebHook"``

Grants permission to update a webhook

See https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

#### Defined in

actions/amplify.ts:239
