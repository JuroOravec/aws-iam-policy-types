[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodebuildActions

# Enumeration: AwsCodebuildActions

All IAM policy actions for AWS CodeBuild (CODEBUILD)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodebuild.html

2024-02-12T09:56:32.709Z

## Table of contents

### Enumeration Members

- [BatchDeleteBuilds](AwsCodebuildActions.md#batchdeletebuilds)
- [BatchGetBuildBatches](AwsCodebuildActions.md#batchgetbuildbatches)
- [BatchGetBuilds](AwsCodebuildActions.md#batchgetbuilds)
- [BatchGetFleets](AwsCodebuildActions.md#batchgetfleets)
- [BatchGetProjects](AwsCodebuildActions.md#batchgetprojects)
- [BatchGetReportGroups](AwsCodebuildActions.md#batchgetreportgroups)
- [BatchGetReports](AwsCodebuildActions.md#batchgetreports)
- [BatchPutCodeCoverages](AwsCodebuildActions.md#batchputcodecoverages)
- [BatchPutTestCases](AwsCodebuildActions.md#batchputtestcases)
- [CreateFleet](AwsCodebuildActions.md#createfleet)
- [CreateProject](AwsCodebuildActions.md#createproject)
- [CreateReport](AwsCodebuildActions.md#createreport)
- [CreateReportGroup](AwsCodebuildActions.md#createreportgroup)
- [CreateWebhook](AwsCodebuildActions.md#createwebhook)
- [DeleteBuildBatch](AwsCodebuildActions.md#deletebuildbatch)
- [DeleteFleet](AwsCodebuildActions.md#deletefleet)
- [DeleteOAuthToken](AwsCodebuildActions.md#deleteoauthtoken)
- [DeleteProject](AwsCodebuildActions.md#deleteproject)
- [DeleteReport](AwsCodebuildActions.md#deletereport)
- [DeleteReportGroup](AwsCodebuildActions.md#deletereportgroup)
- [DeleteResourcePolicy](AwsCodebuildActions.md#deleteresourcepolicy)
- [DeleteSourceCredentials](AwsCodebuildActions.md#deletesourcecredentials)
- [DeleteWebhook](AwsCodebuildActions.md#deletewebhook)
- [DescribeCodeCoverages](AwsCodebuildActions.md#describecodecoverages)
- [DescribeTestCases](AwsCodebuildActions.md#describetestcases)
- [GetReportGroupTrend](AwsCodebuildActions.md#getreportgrouptrend)
- [GetResourcePolicy](AwsCodebuildActions.md#getresourcepolicy)
- [ImportSourceCredentials](AwsCodebuildActions.md#importsourcecredentials)
- [InvalidateProjectCache](AwsCodebuildActions.md#invalidateprojectcache)
- [ListBuildBatches](AwsCodebuildActions.md#listbuildbatches)
- [ListBuildBatchesForProject](AwsCodebuildActions.md#listbuildbatchesforproject)
- [ListBuilds](AwsCodebuildActions.md#listbuilds)
- [ListBuildsForProject](AwsCodebuildActions.md#listbuildsforproject)
- [ListConnectedOAuthAccounts](AwsCodebuildActions.md#listconnectedoauthaccounts)
- [ListCuratedEnvironmentImages](AwsCodebuildActions.md#listcuratedenvironmentimages)
- [ListFleets](AwsCodebuildActions.md#listfleets)
- [ListProjects](AwsCodebuildActions.md#listprojects)
- [ListReportGroups](AwsCodebuildActions.md#listreportgroups)
- [ListReports](AwsCodebuildActions.md#listreports)
- [ListReportsForReportGroup](AwsCodebuildActions.md#listreportsforreportgroup)
- [ListRepositories](AwsCodebuildActions.md#listrepositories)
- [ListSharedProjects](AwsCodebuildActions.md#listsharedprojects)
- [ListSharedReportGroups](AwsCodebuildActions.md#listsharedreportgroups)
- [ListSourceCredentials](AwsCodebuildActions.md#listsourcecredentials)
- [PersistOAuthToken](AwsCodebuildActions.md#persistoauthtoken)
- [PutResourcePolicy](AwsCodebuildActions.md#putresourcepolicy)
- [RetryBuild](AwsCodebuildActions.md#retrybuild)
- [RetryBuildBatch](AwsCodebuildActions.md#retrybuildbatch)
- [StartBuild](AwsCodebuildActions.md#startbuild)
- [StartBuildBatch](AwsCodebuildActions.md#startbuildbatch)
- [StopBuild](AwsCodebuildActions.md#stopbuild)
- [StopBuildBatch](AwsCodebuildActions.md#stopbuildbatch)
- [UpdateFleet](AwsCodebuildActions.md#updatefleet)
- [UpdateProject](AwsCodebuildActions.md#updateproject)
- [UpdateProjectVisibility](AwsCodebuildActions.md#updateprojectvisibility)
- [UpdateReport](AwsCodebuildActions.md#updatereport)
- [UpdateReportGroup](AwsCodebuildActions.md#updatereportgroup)
- [UpdateWebhook](AwsCodebuildActions.md#updatewebhook)

## Enumeration Members

### BatchDeleteBuilds

• **BatchDeleteBuilds** = ``"codebuild:BatchDeleteBuilds"``

Grants permission to delete one or more builds

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchDeleteBuilds.html

#### Defined in

actions/codebuild.ts:17

___

### BatchGetBuildBatches

• **BatchGetBuildBatches** = ``"codebuild:BatchGetBuildBatches"``

Grants permission to get information about one or more build batches

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuildBatches.html

#### Defined in

actions/codebuild.ts:23

___

### BatchGetBuilds

• **BatchGetBuilds** = ``"codebuild:BatchGetBuilds"``

Grants permission to get information about one or more builds

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuilds.html

#### Defined in

actions/codebuild.ts:29

___

### BatchGetFleets

• **BatchGetFleets** = ``"codebuild:BatchGetFleets"``

Grants permission to return an array of the Fleet objects specified by the inpu
t parameter

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetFleets.html

#### Defined in

actions/codebuild.ts:36

___

### BatchGetProjects

• **BatchGetProjects** = ``"codebuild:BatchGetProjects"``

Grants permission to get information about one or more build projects

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetProjects.html

#### Defined in

actions/codebuild.ts:42

___

### BatchGetReportGroups

• **BatchGetReportGroups** = ``"codebuild:BatchGetReportGroups"``

Grants permission to return an array of ReportGroup objects that are specified
by the input reportGroupArns parameter

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReportGroups.html

#### Defined in

actions/codebuild.ts:49

___

### BatchGetReports

• **BatchGetReports** = ``"codebuild:BatchGetReports"``

Grants permission to return an array of the Report objects specified by the inp
ut reportArns parameter

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReports.html

#### Defined in

actions/codebuild.ts:56

___

### BatchPutCodeCoverages

• **BatchPutCodeCoverages** = ``"codebuild:BatchPutCodeCoverages"``

Grants permission to add or update information about a report

See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies

#### Defined in

actions/codebuild.ts:62

___

### BatchPutTestCases

• **BatchPutTestCases** = ``"codebuild:BatchPutTestCases"``

Grants permission to add or update information about a report

See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies

#### Defined in

actions/codebuild.ts:68

___

### CreateFleet

• **CreateFleet** = ``"codebuild:CreateFleet"``

Grants permission to create a compute fleet

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateFleet.html

#### Defined in

actions/codebuild.ts:74

___

### CreateProject

• **CreateProject** = ``"codebuild:CreateProject"``

Grants permission to create a build project

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateProject.html

#### Defined in

actions/codebuild.ts:80

___

### CreateReport

• **CreateReport** = ``"codebuild:CreateReport"``

Grants permission to create a report. A report is created when tests specified
in the buildspec file for a report groups run during the build of a project

See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies

#### Defined in

actions/codebuild.ts:87

___

### CreateReportGroup

• **CreateReportGroup** = ``"codebuild:CreateReportGroup"``

Grants permission to create a report group

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateReportGroup.html

#### Defined in

actions/codebuild.ts:93

___

### CreateWebhook

• **CreateWebhook** = ``"codebuild:CreateWebhook"``

Grants permission to create webhook. For an existing AWS CodeBuild build projec
t that has its source code stored in a GitHub or Bitbucket repository, enables
AWS CodeBuild to start rebuilding the source code every time a code change is p
ushed to the repository

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateWebhook.html

#### Defined in

actions/codebuild.ts:102

___

### DeleteBuildBatch

• **DeleteBuildBatch** = ``"codebuild:DeleteBuildBatch"``

Grants permission to delete a build batch

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteBuildBatch.html

#### Defined in

actions/codebuild.ts:108

___

### DeleteFleet

• **DeleteFleet** = ``"codebuild:DeleteFleet"``

Grants permission to delete a compute fleet

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteFleet.html

#### Defined in

actions/codebuild.ts:114

___

### DeleteOAuthToken

• **DeleteOAuthToken** = ``"codebuild:DeleteOAuthToken"``

Grants permission to delete an OAuth token from a connected third-party OAuth p
rovider. Only used in the AWS CodeBuild console

See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies

#### Defined in

actions/codebuild.ts:121

___

### DeleteProject

• **DeleteProject** = ``"codebuild:DeleteProject"``

Grants permission to delete a build project

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteProject.html

#### Defined in

actions/codebuild.ts:127

___

### DeleteReport

• **DeleteReport** = ``"codebuild:DeleteReport"``

Grants permission to delete a report

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html

#### Defined in

actions/codebuild.ts:133

___

### DeleteReportGroup

• **DeleteReportGroup** = ``"codebuild:DeleteReportGroup"``

Grants permission to delete a report group

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReportGroup.html

#### Defined in

actions/codebuild.ts:139

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"codebuild:DeleteResourcePolicy"``

Grants permission to delete a resource policy for the associated project or rep
ort group

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/codebuild.ts:146

___

### DeleteSourceCredentials

• **DeleteSourceCredentials** = ``"codebuild:DeleteSourceCredentials"``

Grants permission to delete a set of GitHub, GitHub Enterprise, or Bitbucket so
urce credentials

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteSourceCredentials.html

#### Defined in

actions/codebuild.ts:153

___

### DeleteWebhook

• **DeleteWebhook** = ``"codebuild:DeleteWebhook"``

Grants permission to delete webhook. For an existing AWS CodeBuild build projec
t that has its source code stored in a GitHub or Bitbucket repository, stops AW
S CodeBuild from rebuilding the source code every time a code change is pushed
to the repository

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteWebhook.html

#### Defined in

actions/codebuild.ts:162

___

### DescribeCodeCoverages

• **DescribeCodeCoverages** = ``"codebuild:DescribeCodeCoverages"``

Grants permission to return an array of CodeCoverage objects

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeCodeCoverages.html

#### Defined in

actions/codebuild.ts:168

___

### DescribeTestCases

• **DescribeTestCases** = ``"codebuild:DescribeTestCases"``

Grants permission to return an array of TestCase objects

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeTestCases.html

#### Defined in

actions/codebuild.ts:174

___

### GetReportGroupTrend

• **GetReportGroupTrend** = ``"codebuild:GetReportGroupTrend"``

Grants permission to analyze and accumulate test report values for the test rep
orts in the specified report group

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetReportGroupTrend.html

#### Defined in

actions/codebuild.ts:181

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"codebuild:GetResourcePolicy"``

Grants permission to return a resource policy for the specified project or repo
rt group

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetResourcePolicy.html

#### Defined in

actions/codebuild.ts:188

___

### ImportSourceCredentials

• **ImportSourceCredentials** = ``"codebuild:ImportSourceCredentials"``

Grants permission to import the source repository credentials for an AWS CodeBu
ild project that has its source code stored in a GitHub, GitHub Enterprise, or
Bitbucket repository

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ImportSourceCredentials.html

#### Defined in

actions/codebuild.ts:196

___

### InvalidateProjectCache

• **InvalidateProjectCache** = ``"codebuild:InvalidateProjectCache"``

Grants permission to reset the cache for a project

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_InvalidateProjectCache.html

#### Defined in

actions/codebuild.ts:202

___

### ListBuildBatches

• **ListBuildBatches** = ``"codebuild:ListBuildBatches"``

Grants permission to get a list of build batch IDs, with each build batch ID re
presenting a single build batch

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildBatches.html

#### Defined in

actions/codebuild.ts:209

___

### ListBuildBatchesForProject

• **ListBuildBatchesForProject** = ``"codebuild:ListBuildBatchesForProject"``

Grants permission to get a list of build batch IDs for the specified build proj
ect, with each build batch ID representing a single build batch

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildBatchesForProject.html

#### Defined in

actions/codebuild.ts:216

___

### ListBuilds

• **ListBuilds** = ``"codebuild:ListBuilds"``

Grants permission to get a list of build IDs, with each build ID representing a
single build

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuilds.html

#### Defined in

actions/codebuild.ts:223

___

### ListBuildsForProject

• **ListBuildsForProject** = ``"codebuild:ListBuildsForProject"``

Grants permission to get a list of build IDs for the specified build project, w
ith each build ID representing a single build

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildsForProject.html

#### Defined in

actions/codebuild.ts:230

___

### ListConnectedOAuthAccounts

• **ListConnectedOAuthAccounts** = ``"codebuild:ListConnectedOAuthAccounts"``

Grants permission to list connected third-party OAuth providers. Only used in t
he AWS CodeBuild console

See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies

#### Defined in

actions/codebuild.ts:237

___

### ListCuratedEnvironmentImages

• **ListCuratedEnvironmentImages** = ``"codebuild:ListCuratedEnvironmentImages"``

Grants permission to get information about Docker images that are managed by AW
S CodeBuild

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListCuratedEnvironmentImages.html

#### Defined in

actions/codebuild.ts:244

___

### ListFleets

• **ListFleets** = ``"codebuild:ListFleets"``

Grants permission to get a list of compute fleet ARNs, with each compute fleet
ARN representing a single fleet

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListFleets.html

#### Defined in

actions/codebuild.ts:251

___

### ListProjects

• **ListProjects** = ``"codebuild:ListProjects"``

Grants permission to get a list of build project names, with each build project
name representing a single build project

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListProjects.html

#### Defined in

actions/codebuild.ts:258

___

### ListReportGroups

• **ListReportGroups** = ``"codebuild:ListReportGroups"``

Grants permission to return a list of report group ARNs. Each report group ARN
represents one report group

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportGroups.html

#### Defined in

actions/codebuild.ts:265

___

### ListReports

• **ListReports** = ``"codebuild:ListReports"``

Grants permission to return a list of report ARNs. Each report ARN representing
one report

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReports.html

#### Defined in

actions/codebuild.ts:272

___

### ListReportsForReportGroup

• **ListReportsForReportGroup** = ``"codebuild:ListReportsForReportGroup"``

Grants permission to return a list of report ARNs that belong to the specified
report group. Each report ARN represents one report

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html

#### Defined in

actions/codebuild.ts:279

___

### ListRepositories

• **ListRepositories** = ``"codebuild:ListRepositories"``

Grants permission to list source code repositories from a connected third-party
OAuth provider. Only used in the AWS CodeBuild console

See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies

#### Defined in

actions/codebuild.ts:286

___

### ListSharedProjects

• **ListSharedProjects** = ``"codebuild:ListSharedProjects"``

Grants permission to return a list of project ARNs that have been shared with t
he requester. Each project ARN represents one project

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedProjects.html

#### Defined in

actions/codebuild.ts:293

___

### ListSharedReportGroups

• **ListSharedReportGroups** = ``"codebuild:ListSharedReportGroups"``

Grants permission to return a list of report group ARNs that have been shared w
ith the requester. Each report group ARN represents one report group

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedReportGroups.html

#### Defined in

actions/codebuild.ts:300

___

### ListSourceCredentials

• **ListSourceCredentials** = ``"codebuild:ListSourceCredentials"``

Grants permission to return a list of SourceCredentialsInfo objects

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSourceCredentials.html

#### Defined in

actions/codebuild.ts:306

___

### PersistOAuthToken

• **PersistOAuthToken** = ``"codebuild:PersistOAuthToken"``

Grants permission to save an OAuth token from a connected third-party OAuth pro
vider. Only used in the AWS CodeBuild console

See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies

#### Defined in

actions/codebuild.ts:313

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"codebuild:PutResourcePolicy"``

Grants permission to create a resource policy for the associated project or rep
ort group

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/codebuild.ts:320

___

### RetryBuild

• **RetryBuild** = ``"codebuild:RetryBuild"``

Grants permission to retry a build

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_RetryBuild.html

#### Defined in

actions/codebuild.ts:326

___

### RetryBuildBatch

• **RetryBuildBatch** = ``"codebuild:RetryBuildBatch"``

Grants permission to retry a build batch

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_RetryBuildBatch.html

#### Defined in

actions/codebuild.ts:332

___

### StartBuild

• **StartBuild** = ``"codebuild:StartBuild"``

Grants permission to start running a build

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuild.html

#### Defined in

actions/codebuild.ts:338

___

### StartBuildBatch

• **StartBuildBatch** = ``"codebuild:StartBuildBatch"``

Grants permission to start running a build batch

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuildBatch.html

#### Defined in

actions/codebuild.ts:344

___

### StopBuild

• **StopBuild** = ``"codebuild:StopBuild"``

Grants permission to attempt to stop running a build

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuild.html

#### Defined in

actions/codebuild.ts:350

___

### StopBuildBatch

• **StopBuildBatch** = ``"codebuild:StopBuildBatch"``

Grants permission to attempt to stop running a build batch

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuildBatch.html

#### Defined in

actions/codebuild.ts:356

___

### UpdateFleet

• **UpdateFleet** = ``"codebuild:UpdateFleet"``

Grants permission to change the settings of an existing compute fleet

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateFleet.html

#### Defined in

actions/codebuild.ts:362

___

### UpdateProject

• **UpdateProject** = ``"codebuild:UpdateProject"``

Grants permission to change the settings of an existing build project

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProject.html

#### Defined in

actions/codebuild.ts:368

___

### UpdateProjectVisibility

• **UpdateProjectVisibility** = ``"codebuild:UpdateProjectVisibility"``

Grants permission to change the public visibility of a project and its builds

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProjectVisibility.html

#### Defined in

actions/codebuild.ts:374

___

### UpdateReport

• **UpdateReport** = ``"codebuild:UpdateReport"``

Grants permission to update information about a report

See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies

#### Defined in

actions/codebuild.ts:380

___

### UpdateReportGroup

• **UpdateReportGroup** = ``"codebuild:UpdateReportGroup"``

Grants permission to change the settings of an existing report group

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateReportGroup.html

#### Defined in

actions/codebuild.ts:386

___

### UpdateWebhook

• **UpdateWebhook** = ``"codebuild:UpdateWebhook"``

Grants permission to update the webhook associated with an AWS CodeBuild build
project

See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateWebhook.html

#### Defined in

actions/codebuild.ts:393
