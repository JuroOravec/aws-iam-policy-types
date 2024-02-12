// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS CodeDeploy (CODEDEPLOY)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploy.html
 *
 * 2024-02-12T09:56:34.381Z
 */
export enum AwsCodedeployActions {
  /**
   * Grants permission to add tags to one or more on-premises instances
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_AddTagsToOnPremisesInstances.html
   */
  AddTagsToOnPremisesInstances = 'codedeploy:AddTagsToOnPremisesInstances',
  /**
   * Grants permission to get information about one or more application revisions
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplicationRevisions.html
   */
  BatchGetApplicationRevisions = 'codedeploy:BatchGetApplicationRevisions',
  /**
   * Grants permission to get information about multiple applications associated wit
   * h the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplications.html
   */
  BatchGetApplications = 'codedeploy:BatchGetApplications',
  /**
   * Grants permission to get information about one or more deployment groups
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentGroups.html
   */
  BatchGetDeploymentGroups = 'codedeploy:BatchGetDeploymentGroups',
  /**
   * Grants permission to get information about one or more instance that are part o
   * f a deployment group
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentInstances.html
   */
  BatchGetDeploymentInstances = 'codedeploy:BatchGetDeploymentInstances',
  /**
   * Grants permission to return an array of one or more targets associated with a d
   * eployment. This method works with all compute types and should be used instead
   * of the deprecated BatchGetDeploymentInstances. The maximum number of targets th
   * at can be returned is 25
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentTargets.html
   */
  BatchGetDeploymentTargets = 'codedeploy:BatchGetDeploymentTargets',
  /**
   * Grants permission to get information about multiple deployments associated with
   * the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeployments.html
   */
  BatchGetDeployments = 'codedeploy:BatchGetDeployments',
  /**
   * Grants permission to get information about one or more on-premises instances
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetOnPremisesInstances.html
   */
  BatchGetOnPremisesInstances = 'codedeploy:BatchGetOnPremisesInstances',
  /**
   * Grants permission to start the process of rerouting traffic from instances in t
   * he original environment to instances in thereplacement environment without wait
   * ing for a specified wait time to elapse
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ContinueDeployment.html
   */
  ContinueDeployment = 'codedeploy:ContinueDeployment',
  /**
   * Grants permission to create an application associated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateApplication.html
   */
  CreateApplication = 'codedeploy:CreateApplication',
  /**
   * Grants permission to create a deployment for an application associated with the
   * IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html
   */
  CreateDeployment = 'codedeploy:CreateDeployment',
  /**
   * Grants permission to create a custom deployment configuration associated with t
   * he IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentConfig.html
   */
  CreateDeploymentConfig = 'codedeploy:CreateDeploymentConfig',
  /**
   * Grants permission to create a deployment group for an application associated wi
   * th the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentGroup.html
   */
  CreateDeploymentGroup = 'codedeploy:CreateDeploymentGroup',
  /**
   * Grants permission to delete an application associated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteApplication.html
   */
  DeleteApplication = 'codedeploy:DeleteApplication',
  /**
   * Grants permission to delete a custom deployment configuration associated with t
   * he IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentConfig.html
   */
  DeleteDeploymentConfig = 'codedeploy:DeleteDeploymentConfig',
  /**
   * Grants permission to delete a deployment group for an application associated wi
   * th the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentGroup.html
   */
  DeleteDeploymentGroup = 'codedeploy:DeleteDeploymentGroup',
  /**
   * Grants permission to delete a GitHub account connection
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteGitHubAccountToken.html
   */
  DeleteGitHubAccountToken = 'codedeploy:DeleteGitHubAccountToken',
  /**
   * Grants permission to delete resources associated with the given external Id
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteResourcesByExternalId.html
   */
  DeleteResourcesByExternalId = 'codedeploy:DeleteResourcesByExternalId',
  /**
   * Grants permission to deregister an on-premises instance
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeregisterOnPremisesInstance.html
   */
  DeregisterOnPremisesInstance = 'codedeploy:DeregisterOnPremisesInstance',
  /**
   * Grants permission to get information about a single application associated with
   * the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplication.html
   */
  GetApplication = 'codedeploy:GetApplication',
  /**
   * Grants permission to get information about a single application revision for an
   * application associated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplicationRevision.html
   */
  GetApplicationRevision = 'codedeploy:GetApplicationRevision',
  /**
   * Grants permission to get information about a single deployment to a deployment
   * group for an application associated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeployment.html
   */
  GetDeployment = 'codedeploy:GetDeployment',
  /**
   * Grants permission to get information about a single deployment configuration as
   * sociated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentConfig.html
   */
  GetDeploymentConfig = 'codedeploy:GetDeploymentConfig',
  /**
   * Grants permission to get information about a single deployment group for an app
   * lication associated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentGroup.html
   */
  GetDeploymentGroup = 'codedeploy:GetDeploymentGroup',
  /**
   * Grants permission to get information about a single instance in a deployment as
   * sociated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentInstance.html
   */
  GetDeploymentInstance = 'codedeploy:GetDeploymentInstance',
  /**
   * Grants permission to return information about a deployment target
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentTarget.html
   */
  GetDeploymentTarget = 'codedeploy:GetDeploymentTarget',
  /**
   * Grants permission to get information about a single on-premises instance
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetOnPremisesInstance.html
   */
  GetOnPremisesInstance = 'codedeploy:GetOnPremisesInstance',
  /**
   * Grants permission to get information about all application revisions for an app
   * lication associated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplicationRevisions.html
   */
  ListApplicationRevisions = 'codedeploy:ListApplicationRevisions',
  /**
   * Grants permission to get information about all applications associated with the
   * IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplications.html
   */
  ListApplications = 'codedeploy:ListApplications',
  /**
   * Grants permission to get information about all deployment configurations associ
   * ated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentConfigs.html
   */
  ListDeploymentConfigs = 'codedeploy:ListDeploymentConfigs',
  /**
   * Grants permission to get information about all deployment groups for an applica
   * tion associated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentGroups.html
   */
  ListDeploymentGroups = 'codedeploy:ListDeploymentGroups',
  /**
   * Grants permission to get information about all instances in a deployment associ
   * ated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentInstances.html
   */
  ListDeploymentInstances = 'codedeploy:ListDeploymentInstances',
  /**
   * Grants permission to return an array of target IDs that are associated a deploy
   * ment
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentTargets.html
   */
  ListDeploymentTargets = 'codedeploy:ListDeploymentTargets',
  /**
   * Grants permission to get information about all deployments to a deployment grou
   * p associated with the IAM user, or to get all deployments associated with the I
   * AM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeployments.html
   */
  ListDeployments = 'codedeploy:ListDeployments',
  /**
   * Grants permission to list the names of stored connections to GitHub accounts
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListGitHubAccountTokenNames.html
   */
  ListGitHubAccountTokenNames = 'codedeploy:ListGitHubAccountTokenNames',
  /**
   * Grants permission to get a list of one or more on-premises instance names
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListOnPremisesInstances.html
   */
  ListOnPremisesInstances = 'codedeploy:ListOnPremisesInstances',
  /**
   * Grants permission to return a list of tags for the resource identified by a spe
   * cified ARN. Tags are used to organize and categorize your CodeDeploy resources
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'codedeploy:ListTagsForResource',
  /**
   * Grants permission to notify a lifecycle event hook execution status for associa
   * ted deployment with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_PutLifecycleEventHookExecutionStatus.html
   */
  PutLifecycleEventHookExecutionStatus = 'codedeploy:PutLifecycleEventHookExecutionStatus',
  /**
   * Grants permission to register information about an application revision for an
   * application associated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterApplicationRevision.html
   */
  RegisterApplicationRevision = 'codedeploy:RegisterApplicationRevision',
  /**
   * Grants permission to register an on-premises instance
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterOnPremisesInstance.html
   */
  RegisterOnPremisesInstance = 'codedeploy:RegisterOnPremisesInstance',
  /**
   * Grants permission to remove tags from one or more on-premises instances
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RemoveTagsFromOnPremisesInstances.html
   */
  RemoveTagsFromOnPremisesInstances = 'codedeploy:RemoveTagsFromOnPremisesInstances',
  /**
   * Grants permission to override any specified wait time and starts terminating in
   * stances immediately after the traffic routing is complete. This action applies
   * to blue-green deployments only
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_SkipWaitTimeForInstanceTermination.html
   */
  SkipWaitTimeForInstanceTermination = 'codedeploy:SkipWaitTimeForInstanceTermination',
  /**
   * Grants permission to stop a deployment
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_StopDeployment.html
   */
  StopDeployment = 'codedeploy:StopDeployment',
  /**
   * Grants permission to associate the list of tags in the input Tags parameter wit
   * h the resource identified by the ResourceArn input parameter
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_TagResource.html
   */
  TagResource = 'codedeploy:TagResource',
  /**
   * Grants permission to disassociate a resource from a list of tags. The resource
   * is identified by the ResourceArn input parameter. The tags are identfied by the
   * list of keys in the TagKeys input parameter
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'codedeploy:UntagResource',
  /**
   * Grants permission to update an application
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateApplication.html
   */
  UpdateApplication = 'codedeploy:UpdateApplication',
  /**
   * Grants permission to change information about a single deployment group for an
   * application associated with the IAM user
   *
   * See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateDeploymentGroup.html
   */
  UpdateDeploymentGroup = 'codedeploy:UpdateDeploymentGroup',
}