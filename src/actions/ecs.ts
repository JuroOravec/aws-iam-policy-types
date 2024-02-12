// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Elastic Container Service (ECS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerservice.html
 *
 * 2024-02-12T09:57:08.294Z
 */
export enum AwsEcsActions {
  /**
   * Grants permission to create a new capacity provider. Capacity providers are ass
   * ociated with an Amazon ECS cluster and are used in capacity provider strategies
   * to facilitate cluster auto scaling
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html
   */
  CreateCapacityProvider = 'ecs:CreateCapacityProvider',
  /**
   * Grants permission to create a new Amazon ECS cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html
   */
  CreateCluster = 'ecs:CreateCluster',
  /**
   * Grants permission to run and maintain a desired number of tasks from a specifie
   * d task definition via service creation
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html
   */
  CreateService = 'ecs:CreateService',
  /**
   * Grants permission to create a new Amazon ECS task set
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html
   */
  CreateTaskSet = 'ecs:CreateTaskSet',
  /**
   * Grants permission to modify the ARN and resource ID format of a resource for a
   * specified IAM user, IAM role, or the root user for an account. You can specify
   * whether the new ARN and resource ID format are disabled for new resources that
   * are created
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAccountSetting.html
   */
  DeleteAccountSetting = 'ecs:DeleteAccountSetting',
  /**
   * Grants permission to delete one or more custom attributes from an Amazon ECS re
   * source
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html
   */
  DeleteAttributes = 'ecs:DeleteAttributes',
  /**
   * Grants permission to delete the specified capacity provider
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCapacityProvider.html
   */
  DeleteCapacityProvider = 'ecs:DeleteCapacityProvider',
  /**
   * Grants permission to delete the specified cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCluster.html
   */
  DeleteCluster = 'ecs:DeleteCluster',
  /**
   * Grants permission to delete a specified service within a cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html
   */
  DeleteService = 'ecs:DeleteService',
  /**
   * Grants permission to delete the specified task definitions by family and revisi
   * on
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html
   */
  DeleteTaskDefinitions = 'ecs:DeleteTaskDefinitions',
  /**
   * Grants permission to delete the specified task set
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html
   */
  DeleteTaskSet = 'ecs:DeleteTaskSet',
  /**
   * Grants permission to deregister an Amazon ECS container instance from the speci
   * fied cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html
   */
  DeregisterContainerInstance = 'ecs:DeregisterContainerInstance',
  /**
   * Grants permission to deregister the specified task definition by family and rev
   * ision
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html
   */
  DeregisterTaskDefinition = 'ecs:DeregisterTaskDefinition',
  /**
   * Grants permission to describe one or more Amazon ECS capacity providers
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeCapacityProviders.html
   */
  DescribeCapacityProviders = 'ecs:DescribeCapacityProviders',
  /**
   * Grants permission to describes one or more of your clusters
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeClusters.html
   */
  DescribeClusters = 'ecs:DescribeClusters',
  /**
   * Grants permission to describes Amazon ECS container instances
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html
   */
  DescribeContainerInstances = 'ecs:DescribeContainerInstances',
  /**
   * Grants permission to describe the specified services running in your cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html
   */
  DescribeServices = 'ecs:DescribeServices',
  /**
   * Grants permission to describe a task definition. You can specify a family and r
   * evision to find information about a specific task definition, or you can simply
   * specify the family to find the latest ACTIVE revision in that family
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskDefinition.html
   */
  DescribeTaskDefinition = 'ecs:DescribeTaskDefinition',
  /**
   * Grants permission to describe Amazon ECS task sets
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html
   */
  DescribeTaskSets = 'ecs:DescribeTaskSets',
  /**
   * Grants permission to describe a specified task or tasks
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html
   */
  DescribeTasks = 'ecs:DescribeTasks',
  /**
   * Grants permission to get an endpoint for the Amazon ECS agent to poll for updat
   * es
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DiscoverPollEndpoint.html
   */
  DiscoverPollEndpoint = 'ecs:DiscoverPollEndpoint',
  /**
   * Grants permission to run a command remotely on an Amazon ECS container
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ExecuteCommand.html
   */
  ExecuteCommand = 'ecs:ExecuteCommand',
  /**
   * Grants permission to retrieve the protection status of tasks in an Amazon ECS s
   * ervice
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_GetTaskProtection.html
   */
  GetTaskProtection = 'ecs:GetTaskProtection',
  /**
   * Grants permission to list the account settings for an Amazon ECS resource for a
   * specified principal
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAccountSettings.html
   */
  ListAccountSettings = 'ecs:ListAccountSettings',
  /**
   * Grants permission to lists the attributes for Amazon ECS resources within a spe
   * cified target type and cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html
   */
  ListAttributes = 'ecs:ListAttributes',
  /**
   * Grants permission to get a list of existing clusters
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html
   */
  ListClusters = 'ecs:ListClusters',
  /**
   * Grants permission to get a list of container instances in a specified cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html
   */
  ListContainerInstances = 'ecs:ListContainerInstances',
  /**
   * Grants permission to get a list of services that are running in a specified clu
   * ster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html
   */
  ListServices = 'ecs:ListServices',
  /**
   * Grants permission to get a list of services that are running in a specified AWS
   * Cloud Map Namespace
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServicesByNamespace.html
   */
  ListServicesByNamespace = 'ecs:ListServicesByNamespace',
  /**
   * Grants permission to get a list of tags for the specified resource
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'ecs:ListTagsForResource',
  /**
   * Grants permission to get a list of task definition families that are registered
   * to your account (which may include task definition families that no longer have
   * any ACTIVE task definitions)
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html
   */
  ListTaskDefinitionFamilies = 'ecs:ListTaskDefinitionFamilies',
  /**
   * Grants permission to get a list of task definitions that are registered to your
   * account
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTaskDefinitions.html
   */
  ListTaskDefinitions = 'ecs:ListTaskDefinitions',
  /**
   * Grants permission to get a list of tasks for a specified cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html
   */
  ListTasks = 'ecs:ListTasks',
  /**
   * Grants permission to an agent to connect with the Amazon ECS service to report
   * status and get commands
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/developerguide/instance_IAM_role.html
   */
  Poll = 'ecs:Poll',
  /**
   * Grants permission to modify the ARN and resource ID format of a resource for a
   * specified IAM user, IAM role, or the root user for an account. You can specify
   * whether the new ARN and resource ID format are enabled for new resources that a
   * re created. Enabling this setting is required to use new Amazon ECS features su
   * ch as resource tagging
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html
   */
  PutAccountSetting = 'ecs:PutAccountSetting',
  /**
   * Grants permission to modify the ARN and resource ID format of a resource type f
   * or all IAM users on an account for which no individual account setting has been
   * set. Enabling this setting is required to use new Amazon ECS features such as r
   * esource tagging
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html
   */
  PutAccountSettingDefault = 'ecs:PutAccountSettingDefault',
  /**
   * Grants permission to create or update an attribute on an Amazon ECS resource
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html
   */
  PutAttributes = 'ecs:PutAttributes',
  /**
   * Grants permission to modify the available capacity providers and the default ca
   * pacity provider strategy for a cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html
   */
  PutClusterCapacityProviders = 'ecs:PutClusterCapacityProviders',
  /**
   * Grants permission to register an EC2 instance into the specified cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterContainerInstance.html
   */
  RegisterContainerInstance = 'ecs:RegisterContainerInstance',
  /**
   * Grants permission to register a new task definition from the supplied family an
   * d containerDefinitions
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html
   */
  RegisterTaskDefinition = 'ecs:RegisterTaskDefinition',
  /**
   * Grants permission to start a task using random placement and the default Amazon
   * ECS scheduler
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html
   */
  RunTask = 'ecs:RunTask',
  /**
   * Grants permission to start a new task from the specified task definition on the
   * specified container instance or instances
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StartTask.html
   */
  StartTask = 'ecs:StartTask',
  /**
   * Grants permission to start a telemetry session
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html#enable_cloudwatch
   */
  StartTelemetrySession = 'ecs:StartTelemetrySession',
  /**
   * Grants permission to stop a running task
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StopTask.html
   */
  StopTask = 'ecs:StopTask',
  /**
   * Grants permission to send an acknowledgement that attachments changed states
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitAttachmentStateChanges.html
   */
  SubmitAttachmentStateChanges = 'ecs:SubmitAttachmentStateChanges',
  /**
   * Grants permission to send an acknowledgement that a container changed states
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitContainerStateChange.html
   */
  SubmitContainerStateChange = 'ecs:SubmitContainerStateChange',
  /**
   * Grants permission to send an acknowledgement that a task changed states
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitTaskStateChange.html
   */
  SubmitTaskStateChange = 'ecs:SubmitTaskStateChange',
  /**
   * Grants permission to tag the specified resource
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html
   */
  TagResource = 'ecs:TagResource',
  /**
   * Grants permission to untag the specified resource
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'ecs:UntagResource',
  /**
   * Grants permission to update the specified capacity provider
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateCapacityProvider.html
   */
  UpdateCapacityProvider = 'ecs:UpdateCapacityProvider',
  /**
   * Grants permission to modify the configuration or settings to use for a cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateCluster.html
   */
  UpdateCluster = 'ecs:UpdateCluster',
  /**
   * Grants permission to modify the settings to use for a cluster
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateClusterSettings.html
   */
  UpdateClusterSettings = 'ecs:UpdateClusterSettings',
  /**
   * Grants permission to update the Amazon ECS container agent on a specified conta
   * iner instance
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerAgent.html
   */
  UpdateContainerAgent = 'ecs:UpdateContainerAgent',
  /**
   * Grants permission to the user to modify the status of an Amazon ECS container i
   * nstance
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html
   */
  UpdateContainerInstancesState = 'ecs:UpdateContainerInstancesState',
  /**
   * Grants permission to modify the parameters of a service
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html
   */
  UpdateService = 'ecs:UpdateService',
  /**
   * Grants permission to modify the primary task set used in a service
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateServicePrimaryTaskSet.html
   */
  UpdateServicePrimaryTaskSet = 'ecs:UpdateServicePrimaryTaskSet',
  /**
   * Grants permission to modify the protection status of a task
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskProtection.html
   */
  UpdateTaskProtection = 'ecs:UpdateTaskProtection',
  /**
   * Grants permission to update the specified task set
   *
   * See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskSet.html
   */
  UpdateTaskSet = 'ecs:UpdateTaskSet',
}