// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS CodeBuild (CODEBUILD)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodebuild.html
 *
 * 2025-02-24T21:47:12.424Z
 */
export enum AwsCodebuildActions {
  /**
   * Grants permission to delete one or more builds
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchDeleteBuilds.html
   */
  BatchDeleteBuilds = 'codebuild:BatchDeleteBuilds',
  /**
   * Grants permission to get information about one or more build batches
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuildBatches.html
   */
  BatchGetBuildBatches = 'codebuild:BatchGetBuildBatches',
  /**
   * Grants permission to get information about one or more builds
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuilds.html
   */
  BatchGetBuilds = 'codebuild:BatchGetBuilds',
  /**
   * Grants permission to return an array of the Fleet objects specified by the inpu
   * t parameter
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetFleets.html
   */
  BatchGetFleets = 'codebuild:BatchGetFleets',
  /**
   * Grants permission to get information about one or more build projects
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetProjects.html
   */
  BatchGetProjects = 'codebuild:BatchGetProjects',
  /**
   * Grants permission to return an array of ReportGroup objects that are specified
   * by the input reportGroupArns parameter
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReportGroups.html
   */
  BatchGetReportGroups = 'codebuild:BatchGetReportGroups',
  /**
   * Grants permission to return an array of the Report objects specified by the inp
   * ut reportArns parameter
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReports.html
   */
  BatchGetReports = 'codebuild:BatchGetReports',
  /**
   * Grants permission to add or update information about a report
   *
   * See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  BatchPutCodeCoverages = 'codebuild:BatchPutCodeCoverages',
  /**
   * Grants permission to add or update information about a report
   *
   * See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  BatchPutTestCases = 'codebuild:BatchPutTestCases',
  /**
   * Grants permission to create a compute fleet
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateFleet.html
   */
  CreateFleet = 'codebuild:CreateFleet',
  /**
   * Grants permission to create a build project
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateProject.html
   */
  CreateProject = 'codebuild:CreateProject',
  /**
   * Grants permission to create a report. A report is created when tests specified
   * in the buildspec file for a report groups run during the build of a project
   *
   * See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  CreateReport = 'codebuild:CreateReport',
  /**
   * Grants permission to create a report group
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateReportGroup.html
   */
  CreateReportGroup = 'codebuild:CreateReportGroup',
  /**
   * Grants permission to create webhook. For an existing AWS CodeBuild build projec
   * t that has its source code stored in a GitHub or Bitbucket repository, enables
   * AWS CodeBuild to start rebuilding the source code every time a code change is p
   * ushed to the repository
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateWebhook.html
   */
  CreateWebhook = 'codebuild:CreateWebhook',
  /**
   * Grants permission to delete a build batch
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteBuildBatch.html
   */
  DeleteBuildBatch = 'codebuild:DeleteBuildBatch',
  /**
   * Grants permission to delete a compute fleet
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteFleet.html
   */
  DeleteFleet = 'codebuild:DeleteFleet',
  /**
   * Grants permission to delete an OAuth token from a connected third-party OAuth p
   * rovider. Only used in the AWS CodeBuild console
   *
   * See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  DeleteOAuthToken = 'codebuild:DeleteOAuthToken',
  /**
   * Grants permission to delete a build project
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteProject.html
   */
  DeleteProject = 'codebuild:DeleteProject',
  /**
   * Grants permission to delete a report
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html
   */
  DeleteReport = 'codebuild:DeleteReport',
  /**
   * Grants permission to delete a report group
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReportGroup.html
   */
  DeleteReportGroup = 'codebuild:DeleteReportGroup',
  /**
   * Grants permission to delete a resource policy for the associated project or rep
   * ort group
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteResourcePolicy.html
   */
  DeleteResourcePolicy = 'codebuild:DeleteResourcePolicy',
  /**
   * Grants permission to delete a set of GitHub, GitHub Enterprise, or Bitbucket so
   * urce credentials
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteSourceCredentials.html
   */
  DeleteSourceCredentials = 'codebuild:DeleteSourceCredentials',
  /**
   * Grants permission to delete webhook. For an existing AWS CodeBuild build projec
   * t that has its source code stored in a GitHub or Bitbucket repository, stops AW
   * S CodeBuild from rebuilding the source code every time a code change is pushed
   * to the repository
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteWebhook.html
   */
  DeleteWebhook = 'codebuild:DeleteWebhook',
  /**
   * Grants permission to return an array of CodeCoverage objects
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeCodeCoverages.html
   */
  DescribeCodeCoverages = 'codebuild:DescribeCodeCoverages',
  /**
   * Grants permission to return an array of TestCase objects
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeTestCases.html
   */
  DescribeTestCases = 'codebuild:DescribeTestCases',
  /**
   * Grants permission to analyze and accumulate test report values for the test rep
   * orts in the specified report group
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetReportGroupTrend.html
   */
  GetReportGroupTrend = 'codebuild:GetReportGroupTrend',
  /**
   * Grants permission to return a resource policy for the specified project or repo
   * rt group
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetResourcePolicy.html
   */
  GetResourcePolicy = 'codebuild:GetResourcePolicy',
  /**
   * Grants permission to import the source repository credentials for an AWS CodeBu
   * ild project that has its source code stored in a GitHub, GitHub Enterprise, or
   * Bitbucket repository
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ImportSourceCredentials.html
   */
  ImportSourceCredentials = 'codebuild:ImportSourceCredentials',
  /**
   * Grants permission to reset the cache for a project
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_InvalidateProjectCache.html
   */
  InvalidateProjectCache = 'codebuild:InvalidateProjectCache',
  /**
   * Grants permission to get a list of build batch IDs, with each build batch ID re
   * presenting a single build batch
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildBatches.html
   */
  ListBuildBatches = 'codebuild:ListBuildBatches',
  /**
   * Grants permission to get a list of build batch IDs for the specified build proj
   * ect, with each build batch ID representing a single build batch
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildBatchesForProject.html
   */
  ListBuildBatchesForProject = 'codebuild:ListBuildBatchesForProject',
  /**
   * Grants permission to get a list of build IDs, with each build ID representing a
   * single build
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuilds.html
   */
  ListBuilds = 'codebuild:ListBuilds',
  /**
   * Grants permission to get a list of build IDs for the specified build project, w
   * ith each build ID representing a single build
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildsForProject.html
   */
  ListBuildsForProject = 'codebuild:ListBuildsForProject',
  /**
   * Grants permission to list connected third-party OAuth providers. Only used in t
   * he AWS CodeBuild console
   *
   * See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  ListConnectedOAuthAccounts = 'codebuild:ListConnectedOAuthAccounts',
  /**
   * Grants permission to get information about Docker images that are managed by AW
   * S CodeBuild
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListCuratedEnvironmentImages.html
   */
  ListCuratedEnvironmentImages = 'codebuild:ListCuratedEnvironmentImages',
  /**
   * Grants permission to get a list of compute fleet ARNs, with each compute fleet
   * ARN representing a single fleet
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListFleets.html
   */
  ListFleets = 'codebuild:ListFleets',
  /**
   * Grants permission to get a list of build project names, with each build project
   * name representing a single build project
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListProjects.html
   */
  ListProjects = 'codebuild:ListProjects',
  /**
   * Grants permission to return a list of report group ARNs. Each report group ARN
   * represents one report group
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportGroups.html
   */
  ListReportGroups = 'codebuild:ListReportGroups',
  /**
   * Grants permission to return a list of report ARNs. Each report ARN representing
   * one report
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReports.html
   */
  ListReports = 'codebuild:ListReports',
  /**
   * Grants permission to return a list of report ARNs that belong to the specified
   * report group. Each report ARN represents one report
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html
   */
  ListReportsForReportGroup = 'codebuild:ListReportsForReportGroup',
  /**
   * Grants permission to list source code repositories from a connected third-party
   * OAuth provider. Only used in the AWS CodeBuild console
   *
   * See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  ListRepositories = 'codebuild:ListRepositories',
  /**
   * Grants permission to return a list of project ARNs that have been shared with t
   * he requester. Each project ARN represents one project
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedProjects.html
   */
  ListSharedProjects = 'codebuild:ListSharedProjects',
  /**
   * Grants permission to return a list of report group ARNs that have been shared w
   * ith the requester. Each report group ARN represents one report group
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedReportGroups.html
   */
  ListSharedReportGroups = 'codebuild:ListSharedReportGroups',
  /**
   * Grants permission to return a list of SourceCredentialsInfo objects
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSourceCredentials.html
   */
  ListSourceCredentials = 'codebuild:ListSourceCredentials',
  /**
   * Grants permission to save an OAuth token from a connected third-party OAuth pro
   * vider. Only used in the AWS CodeBuild console
   *
   * See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  PersistOAuthToken = 'codebuild:PersistOAuthToken',
  /**
   * Grants permission to create a resource policy for the associated project or rep
   * ort group
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_PutResourcePolicy.html
   */
  PutResourcePolicy = 'codebuild:PutResourcePolicy',
  /**
   * Grants permission to retry a build
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_RetryBuild.html
   */
  RetryBuild = 'codebuild:RetryBuild',
  /**
   * Grants permission to retry a build batch
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_RetryBuildBatch.html
   */
  RetryBuildBatch = 'codebuild:RetryBuildBatch',
  /**
   * Grants permission to start running a build
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuild.html
   */
  StartBuild = 'codebuild:StartBuild',
  /**
   * Grants permission to start running a build batch
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuildBatch.html
   */
  StartBuildBatch = 'codebuild:StartBuildBatch',
  /**
   * Grants permission to attempt to stop running a build
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuild.html
   */
  StopBuild = 'codebuild:StopBuild',
  /**
   * Grants permission to attempt to stop running a build batch
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuildBatch.html
   */
  StopBuildBatch = 'codebuild:StopBuildBatch',
  /**
   * Grants permission to change the settings of an existing compute fleet
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateFleet.html
   */
  UpdateFleet = 'codebuild:UpdateFleet',
  /**
   * Grants permission to change the settings of an existing build project
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProject.html
   */
  UpdateProject = 'codebuild:UpdateProject',
  /**
   * Grants permission to change the public visibility of a project and its builds
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProjectVisibility.html
   */
  UpdateProjectVisibility = 'codebuild:UpdateProjectVisibility',
  /**
   * Grants permission to update information about a report
   *
   * See https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  UpdateReport = 'codebuild:UpdateReport',
  /**
   * Grants permission to change the settings of an existing report group
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateReportGroup.html
   */
  UpdateReportGroup = 'codebuild:UpdateReportGroup',
  /**
   * Grants permission to update the webhook associated with an AWS CodeBuild build
   * project
   *
   * See https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateWebhook.html
   */
  UpdateWebhook = 'codebuild:UpdateWebhook',
}
