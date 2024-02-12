// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS AppConfig (APPCONFIG)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappconfig.html
 *
 * 2024-02-12T09:55:59.282Z
 */
export enum AwsAppconfigActions {
  /**
   * Grants permission to create an application
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateApplication.html
   */
  CreateApplication = 'appconfig:CreateApplication',
  /**
   * Grants permission to create a configuration profile
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateConfigurationProfile.html
   */
  CreateConfigurationProfile = 'appconfig:CreateConfigurationProfile',
  /**
   * Grants permission to create a deployment strategy
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateDeploymentStrategy.html
   */
  CreateDeploymentStrategy = 'appconfig:CreateDeploymentStrategy',
  /**
   * Grants permission to create an environment
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateEnvironment.html
   */
  CreateEnvironment = 'appconfig:CreateEnvironment',
  /**
   * Grants permission to create an extension
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateExtension.html
   */
  CreateExtension = 'appconfig:CreateExtension',
  /**
   * Grants permission to create an extension association
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateExtensionAssociation.html
   */
  CreateExtensionAssociation = 'appconfig:CreateExtensionAssociation',
  /**
   * Grants permission to create a hosted configuration version
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateHostedConfigurationVersion.html
   */
  CreateHostedConfigurationVersion = 'appconfig:CreateHostedConfigurationVersion',
  /**
   * Grants permission to delete an application
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteApplication.html
   */
  DeleteApplication = 'appconfig:DeleteApplication',
  /**
   * Grants permission to delete a configuration profile
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteConfigurationProfile.html
   */
  DeleteConfigurationProfile = 'appconfig:DeleteConfigurationProfile',
  /**
   * Grants permission to delete a deployment strategy
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteDeploymentStrategy.html
   */
  DeleteDeploymentStrategy = 'appconfig:DeleteDeploymentStrategy',
  /**
   * Grants permission to delete an environment
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteEnvironment.html
   */
  DeleteEnvironment = 'appconfig:DeleteEnvironment',
  /**
   * Grants permission to delete an extension
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteExtension.html
   */
  DeleteExtension = 'appconfig:DeleteExtension',
  /**
   * Grants permission to delete an extension association
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteExtensionAssociation.html
   */
  DeleteExtensionAssociation = 'appconfig:DeleteExtensionAssociation',
  /**
   * Grants permission to delete a hosted configuration version
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteHostedConfigurationVersion.html
   */
  DeleteHostedConfigurationVersion = 'appconfig:DeleteHostedConfigurationVersion',
  /**
   * Grants permission to view details about an application
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetApplication.html
   */
  GetApplication = 'appconfig:GetApplication',
  /**
   * Grants permission to view details about a configuration
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfiguration.html
   */
  GetConfiguration = 'appconfig:GetConfiguration',
  /**
   * Grants permission to view details about a configuration profile
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfigurationProfile.html
   */
  GetConfigurationProfile = 'appconfig:GetConfigurationProfile',
  /**
   * Grants permission to view details about a deployment
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeployment.html
   */
  GetDeployment = 'appconfig:GetDeployment',
  /**
   * Grants permission to view details about a deployment strategy
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeploymentStrategy.html
   */
  GetDeploymentStrategy = 'appconfig:GetDeploymentStrategy',
  /**
   * Grants permission to view details about an environment
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetEnvironment.html
   */
  GetEnvironment = 'appconfig:GetEnvironment',
  /**
   * Grants permission to view details about an extension
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetExtension.html
   */
  GetExtension = 'appconfig:GetExtension',
  /**
   * Grants permission to view details about an extension association
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetExtensionAssociation.html
   */
  GetExtensionAssociation = 'appconfig:GetExtensionAssociation',
  /**
   * Grants permission to view details about a hosted configuration version
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetHostedConfigurationVersion.html
   */
  GetHostedConfigurationVersion = 'appconfig:GetHostedConfigurationVersion',
  /**
   * Grants permission to retrieve a deployed configuration
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html
   */
  GetLatestConfiguration = 'appconfig:GetLatestConfiguration',
  /**
   * Grants permission to list the applications in your account
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListApplications.html
   */
  ListApplications = 'appconfig:ListApplications',
  /**
   * Grants permission to list the configuration profiles for an application
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListConfigurationProfiles.html
   */
  ListConfigurationProfiles = 'appconfig:ListConfigurationProfiles',
  /**
   * Grants permission to list the deployment strategies for your account
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeploymentStrategies.html
   */
  ListDeploymentStrategies = 'appconfig:ListDeploymentStrategies',
  /**
   * Grants permission to list the deployments for an environment
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeployments.html
   */
  ListDeployments = 'appconfig:ListDeployments',
  /**
   * Grants permission to list the environments for an application
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListEnvironments.html
   */
  ListEnvironments = 'appconfig:ListEnvironments',
  /**
   * Grants permission to list the extension associations in your account
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListExtensionAssociations.html
   */
  ListExtensionAssociations = 'appconfig:ListExtensionAssociations',
  /**
   * Grants permission to list the extensions in your account
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListExtensions.html
   */
  ListExtensions = 'appconfig:ListExtensions',
  /**
   * Grants permission to list the hosted configuration versions for a configuration
   * profile
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListHostedConfigurationVersions.html
   */
  ListHostedConfigurationVersions = 'appconfig:ListHostedConfigurationVersions',
  /**
   * Grants permission to view a list of resource tags for a specified resource
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'appconfig:ListTagsForResource',
  /**
   * Grants permission to start a configuration session
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html
   */
  StartConfigurationSession = 'appconfig:StartConfigurationSession',
  /**
   * Grants permission to initiate a deployment
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StartDeployment.html
   */
  StartDeployment = 'appconfig:StartDeployment',
  /**
   * Grants permission to stop a deployment
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StopDeployment.html
   */
  StopDeployment = 'appconfig:StopDeployment',
  /**
   * Grants permission to tag an appconfig resource
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_TagResource.html
   */
  TagResource = 'appconfig:TagResource',
  /**
   * Grants permission to untag an appconfig resource
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UntagResource.html
   */
  UntagResource = 'appconfig:UntagResource',
  /**
   * Grants permission to modify an application
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateApplication.html
   */
  UpdateApplication = 'appconfig:UpdateApplication',
  /**
   * Grants permission to modify a configuration profile
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateConfigurationProfile.html
   */
  UpdateConfigurationProfile = 'appconfig:UpdateConfigurationProfile',
  /**
   * Grants permission to modify a deployment strategy
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateDeploymentStrategy.html
   */
  UpdateDeploymentStrategy = 'appconfig:UpdateDeploymentStrategy',
  /**
   * Grants permission to modify an environment
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateEnvironment.html
   */
  UpdateEnvironment = 'appconfig:UpdateEnvironment',
  /**
   * Grants permission to modify an extension
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateExtension.html
   */
  UpdateExtension = 'appconfig:UpdateExtension',
  /**
   * Grants permission to modify an extension association
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateExtensionAssociation.html
   */
  UpdateExtensionAssociation = 'appconfig:UpdateExtensionAssociation',
  /**
   * Grants permission to validate a configuration
   *
   * See https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ValidateConfiguration.html
   */
  ValidateConfiguration = 'appconfig:ValidateConfiguration',
}
