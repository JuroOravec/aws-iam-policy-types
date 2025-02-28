// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Deadline Cloud (DEADLINE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeadlinecloud.html
 *
 * 2025-02-24T21:47:33.921Z
 */
export enum AwsDeadlineActions {
  /**
   * Grants permission to associate a member to a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssociateMemberToFarm.html
   */
  AssociateMemberToFarm = 'deadline:AssociateMemberToFarm',
  /**
   * Grants permission to associate a member to a fleet
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssociateMemberToFleet.html
   */
  AssociateMemberToFleet = 'deadline:AssociateMemberToFleet',
  /**
   * Grants permission to associate a member to a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssociateMemberToJob.html
   */
  AssociateMemberToJob = 'deadline:AssociateMemberToJob',
  /**
   * Grants permission to associate a member to a queue
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssociateMemberToQueue.html
   */
  AssociateMemberToQueue = 'deadline:AssociateMemberToQueue',
  /**
   * Grants permission to assume a fleet role for read-only access
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssumeFleetRoleForRead.html
   */
  AssumeFleetRoleForRead = 'deadline:AssumeFleetRoleForRead',
  /**
   * Grants permission to assume a fleet role for a worker
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssumeFleetRoleForWorker.html
   */
  AssumeFleetRoleForWorker = 'deadline:AssumeFleetRoleForWorker',
  /**
   * Grants permission to assume a queue role for read-only access
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssumeQueueRoleForRead.html
   */
  AssumeQueueRoleForRead = 'deadline:AssumeQueueRoleForRead',
  /**
   * Grants permission to assume a queue role for a user
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssumeQueueRoleForUser.html
   */
  AssumeQueueRoleForUser = 'deadline:AssumeQueueRoleForUser',
  /**
   * Grants permission to assume a queue role for a worker
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_AssumeQueueRoleForWorker.html
   */
  AssumeQueueRoleForWorker = 'deadline:AssumeQueueRoleForWorker',
  /**
   * Grants permission to get a job entity for a worker
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_BatchGetJobEntity.html
   */
  BatchGetJobEntity = 'deadline:BatchGetJobEntity',
  /**
   * Grants permission to copy a job template to an Amazon S3 bucket
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CopyJobTemplate.html
   */
  CopyJobTemplate = 'deadline:CopyJobTemplate',
  /**
   * Grants permission to create a budget
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateBudget.html
   */
  CreateBudget = 'deadline:CreateBudget',
  /**
   * Grants permission to create a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateFarm.html
   */
  CreateFarm = 'deadline:CreateFarm',
  /**
   * Grants permission to create a fleet
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateFleet.html
   */
  CreateFleet = 'deadline:CreateFleet',
  /**
   * Grants permission to create a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateJob.html
   */
  CreateJob = 'deadline:CreateJob',
  /**
   * Grants permission to create a license endpoint for licensed software or product
   * s
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateLicenseEndpoint.html
   */
  CreateLicenseEndpoint = 'deadline:CreateLicenseEndpoint',
  /**
   * Grants permission to create a limit for a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateLimit.html
   */
  CreateLimit = 'deadline:CreateLimit',
  /**
   * Grants permission to create a monitor
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateMonitor.html
   */
  CreateMonitor = 'deadline:CreateMonitor',
  /**
   * Grants permission to create a queue
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateQueue.html
   */
  CreateQueue = 'deadline:CreateQueue',
  /**
   * Grants permission to create a queue environment
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateQueueEnvironment.html
   */
  CreateQueueEnvironment = 'deadline:CreateQueueEnvironment',
  /**
   * Grants permission to create a queue-fleet association
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateQueueFleetAssociation.html
   */
  CreateQueueFleetAssociation = 'deadline:CreateQueueFleetAssociation',
  /**
   * Grants permission to create a queue-limit association
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateQueueLimitAssociation.html
   */
  CreateQueueLimitAssociation = 'deadline:CreateQueueLimitAssociation',
  /**
   * Grants permission to create a storage profile for a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateStorageProfile.html
   */
  CreateStorageProfile = 'deadline:CreateStorageProfile',
  /**
   * Grants permission to create a worker
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_CreateWorker.html
   */
  CreateWorker = 'deadline:CreateWorker',
  /**
   * Grants permission to delete a budget
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteBudget.html
   */
  DeleteBudget = 'deadline:DeleteBudget',
  /**
   * Grants permission to delete a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteFarm.html
   */
  DeleteFarm = 'deadline:DeleteFarm',
  /**
   * Grants permission to delete a fleet
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteFleet.html
   */
  DeleteFleet = 'deadline:DeleteFleet',
  /**
   * Grants permission to delete a license endpoint
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteLicenseEndpoint.html
   */
  DeleteLicenseEndpoint = 'deadline:DeleteLicenseEndpoint',
  /**
   * Grants permission to delete a limit
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteLimit.html
   */
  DeleteLimit = 'deadline:DeleteLimit',
  /**
   * Grants permission to delete a metered product
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteMeteredProduct.html
   */
  DeleteMeteredProduct = 'deadline:DeleteMeteredProduct',
  /**
   * Grants permission to delete a monitor
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteMonitor.html
   */
  DeleteMonitor = 'deadline:DeleteMonitor',
  /**
   * Grants permission to delete a queue
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteQueue.html
   */
  DeleteQueue = 'deadline:DeleteQueue',
  /**
   * Grants permission to delete a queue environment
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteQueueEnvironment.html
   */
  DeleteQueueEnvironment = 'deadline:DeleteQueueEnvironment',
  /**
   * Grants permission to delete a queue-fleet association
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteQueueFleetAssociation.html
   */
  DeleteQueueFleetAssociation = 'deadline:DeleteQueueFleetAssociation',
  /**
   * Grants permission to delete a queue-limit association
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteQueueLimitAssociation.html
   */
  DeleteQueueLimitAssociation = 'deadline:DeleteQueueLimitAssociation',
  /**
   * Grants permission to delete a storage profile
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteStorageProfile.html
   */
  DeleteStorageProfile = 'deadline:DeleteStorageProfile',
  /**
   * Grants permission to delete a worker
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DeleteWorker.html
   */
  DeleteWorker = 'deadline:DeleteWorker',
  /**
   * Grants permission to disassociate a member from a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DisassociateMemberFromFarm.html
   */
  DisassociateMemberFromFarm = 'deadline:DisassociateMemberFromFarm',
  /**
   * Grants permission to disassociate a member from a fleet
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DisassociateMemberFromFleet.html
   */
  DisassociateMemberFromFleet = 'deadline:DisassociateMemberFromFleet',
  /**
   * Grants permission to disassociate a member from a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DisassociateMemberFromJob.html
   */
  DisassociateMemberFromJob = 'deadline:DisassociateMemberFromJob',
  /**
   * Grants permission to disassociate a member from a queue
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_DisassociateMemberFromQueue.html
   */
  DisassociateMemberFromQueue = 'deadline:DisassociateMemberFromQueue',
  /**
   * Grants permission to get the latest version of an application
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetApplicationVersion.html
   */
  GetApplicationVersion = 'deadline:GetApplicationVersion',
  /**
   * Grants permission to get a budget
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetBudget.html
   */
  GetBudget = 'deadline:GetBudget',
  /**
   * Grants permission to get a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetFarm.html
   */
  GetFarm = 'deadline:GetFarm',
  /**
   * Grants permission to get a fleet
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetFleet.html
   */
  GetFleet = 'deadline:GetFleet',
  /**
   * Grants permission to get a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetJob.html
   */
  GetJob = 'deadline:GetJob',
  /**
   * Grants permission to get a license endpoint
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetLicenseEndpoint.html
   */
  GetLicenseEndpoint = 'deadline:GetLicenseEndpoint',
  /**
   * Grants permission to get a limit
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetLimit.html
   */
  GetLimit = 'deadline:GetLimit',
  /**
   * Grants permission to get a monitor
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetMonitor.html
   */
  GetMonitor = 'deadline:GetMonitor',
  /**
   * Grants permission to get a queue
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetQueue.html
   */
  GetQueue = 'deadline:GetQueue',
  /**
   * Grants permission to get a queue environment
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetQueueEnvironment.html
   */
  GetQueueEnvironment = 'deadline:GetQueueEnvironment',
  /**
   * Grants permission to get a queue-fleet association
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetQueueFleetAssociation.html
   */
  GetQueueFleetAssociation = 'deadline:GetQueueFleetAssociation',
  /**
   * Grants permission to get a queue-limit association
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetQueueLimitAssociation.html
   */
  GetQueueLimitAssociation = 'deadline:GetQueueLimitAssociation',
  /**
   * Grants permission to get a session for a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetSession.html
   */
  GetSession = 'deadline:GetSession',
  /**
   * Grants permission to get a session action for a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetSessionAction.html
   */
  GetSessionAction = 'deadline:GetSessionAction',
  /**
   * Grants permission to get all collected statistics for sessions
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetSessionsStatisticsAggregation.html
   */
  GetSessionsStatisticsAggregation = 'deadline:GetSessionsStatisticsAggregation',
  /**
   * Grants permission to get a step in a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetStep.html
   */
  GetStep = 'deadline:GetStep',
  /**
   * Grants permission to get a storage profile
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetStorageProfile.html
   */
  GetStorageProfile = 'deadline:GetStorageProfile',
  /**
   * Grants permission to get a storage profile for a queue
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetStorageProfileForQueue.html
   */
  GetStorageProfileForQueue = 'deadline:GetStorageProfileForQueue',
  /**
   * Grants permission to get a job task
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetTask.html
   */
  GetTask = 'deadline:GetTask',
  /**
   * Grants permission to get a worker
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_GetWorker.html
   */
  GetWorker = 'deadline:GetWorker',
  /**
   * Grants permission to list all available metered products within a license endpo
   * int
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListAvailableMeteredProducts.html
   */
  ListAvailableMeteredProducts = 'deadline:ListAvailableMeteredProducts',
  /**
   * Grants permission to list all budgets for a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListBudgets.html
   */
  ListBudgets = 'deadline:ListBudgets',
  /**
   * Grants permission to list all members of a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListFarmMembers.html
   */
  ListFarmMembers = 'deadline:ListFarmMembers',
  /**
   * Grants permission to list all farms
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListFarms.html
   */
  ListFarms = 'deadline:ListFarms',
  /**
   * Grants permission to list all members of a fleet
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListFleetMembers.html
   */
  ListFleetMembers = 'deadline:ListFleetMembers',
  /**
   * Grants permission to list all fleets
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListFleets.html
   */
  ListFleets = 'deadline:ListFleets',
  /**
   * Grants permission to list all members of a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListJobMembers.html
   */
  ListJobMembers = 'deadline:ListJobMembers',
  /**
   * Grants permission to get a job's parameter definitions in the job template
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListJobParameterDefinitions.html
   */
  ListJobParameterDefinitions = 'deadline:ListJobParameterDefinitions',
  /**
   * Grants permission to list all jobs in a queue
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListJobs.html
   */
  ListJobs = 'deadline:ListJobs',
  /**
   * Grants permission to list all license endpoints
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListLicenseEndpoints.html
   */
  ListLicenseEndpoints = 'deadline:ListLicenseEndpoints',
  /**
   * Grants permission to list all limits in a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListLimits.html
   */
  ListLimits = 'deadline:ListLimits',
  /**
   * Grants permission to list all metered products in a license endpoint
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListMeteredProducts.html
   */
  ListMeteredProducts = 'deadline:ListMeteredProducts',
  /**
   * Grants permission to list all monitors
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListMonitors.html
   */
  ListMonitors = 'deadline:ListMonitors',
  /**
   * Grants permission to list all queue environments to which a queue is associated
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListQueueEnvironments.html
   */
  ListQueueEnvironments = 'deadline:ListQueueEnvironments',
  /**
   * Grants permission to list all queue-fleet associations
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListQueueFleetAssociations.html
   */
  ListQueueFleetAssociations = 'deadline:ListQueueFleetAssociations',
  /**
   * Grants permission to list all queue-limit associations
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListQueueLimitAssociations.html
   */
  ListQueueLimitAssociations = 'deadline:ListQueueLimitAssociations',
  /**
   * Grants permission to list all members in a queue
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListQueueMembers.html
   */
  ListQueueMembers = 'deadline:ListQueueMembers',
  /**
   * Grants permission to list all queues on a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListQueues.html
   */
  ListQueues = 'deadline:ListQueues',
  /**
   * Grants permission to list all session actions for a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListSessionActions.html
   */
  ListSessionActions = 'deadline:ListSessionActions',
  /**
   * Grants permission to list all sessions for a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListSessions.html
   */
  ListSessions = 'deadline:ListSessions',
  /**
   * Grants permission to list all sessions for a worker
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListSessionsForWorker.html
   */
  ListSessionsForWorker = 'deadline:ListSessionsForWorker',
  /**
   * Grants permission to list the step consumers for a job step
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListStepConsumers.html
   */
  ListStepConsumers = 'deadline:ListStepConsumers',
  /**
   * Grants permission to list dependencies for a job step
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListStepDependencies.html
   */
  ListStepDependencies = 'deadline:ListStepDependencies',
  /**
   * Grants permission to list all steps for a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListSteps.html
   */
  ListSteps = 'deadline:ListSteps',
  /**
   * Grants permission to list all storage profiles in a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListStorageProfiles.html
   */
  ListStorageProfiles = 'deadline:ListStorageProfiles',
  /**
   * Grants permission to list all storage profiles in a queue
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListStorageProfilesForQueue.html
   */
  ListStorageProfilesForQueue = 'deadline:ListStorageProfilesForQueue',
  /**
   * Grants permission to list all tags on specified Deadline Cloud resources
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'deadline:ListTagsForResource',
  /**
   * Grants permission to list all tasks for a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListTasks.html
   */
  ListTasks = 'deadline:ListTasks',
  /**
   * Grants permission to list all workers in a fleet
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_ListWorkers.html
   */
  ListWorkers = 'deadline:ListWorkers',
  /**
   * Grants permission to add a metered product to a license endpoint
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_PutMeteredProduct.html
   */
  PutMeteredProduct = 'deadline:PutMeteredProduct',
  /**
   * Grants permission to search for jobs in multiple queues
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_SearchJobs.html
   */
  SearchJobs = 'deadline:SearchJobs',
  /**
   * Grants permission to search the steps within a single job or to search the step
   * s for multiple queues
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_SearchSteps.html
   */
  SearchSteps = 'deadline:SearchSteps',
  /**
   * Grants permission to search the tasks within a single job or to search the task
   * s for multiple queues
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_SearchTasks.html
   */
  SearchTasks = 'deadline:SearchTasks',
  /**
   * Grants permission to search for workers in multiple fleets
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_SearchWorkers.html
   */
  SearchWorkers = 'deadline:SearchWorkers',
  /**
   * Grants permission to get all collected statistics for sessions
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_StartSessionsStatisticsAggregation.html
   */
  StartSessionsStatisticsAggregation = 'deadline:StartSessionsStatisticsAggregation',
  /**
   * Grants permission to add or overwrite one or more tags for the specified Deadli
   * ne Cloud resource
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_TagResource.html
   */
  TagResource = 'deadline:TagResource',
  /**
   * Grants permission to disassociate one or more tags from the specified Deadline
   * Cloud resource
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'deadline:UntagResource',
  /**
   * Grants permission to update a budget
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateBudget.html
   */
  UpdateBudget = 'deadline:UpdateBudget',
  /**
   * Grants permission to update a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateFarm.html
   */
  UpdateFarm = 'deadline:UpdateFarm',
  /**
   * Grants permission to update a fleet
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateFleet.html
   */
  UpdateFleet = 'deadline:UpdateFleet',
  /**
   * Grants permission to update a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateJob.html
   */
  UpdateJob = 'deadline:UpdateJob',
  /**
   * Grants permission to update a limit for a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateLimit.html
   */
  UpdateLimit = 'deadline:UpdateLimit',
  /**
   * Grants permission to update a monitor
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateMonitor.html
   */
  UpdateMonitor = 'deadline:UpdateMonitor',
  /**
   * Grants permission to update a queue
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateQueue.html
   */
  UpdateQueue = 'deadline:UpdateQueue',
  /**
   * Grants permission to update a queue environment
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateQueueEnvironment.html
   */
  UpdateQueueEnvironment = 'deadline:UpdateQueueEnvironment',
  /**
   * Grants permission to update a queue-fleet association
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateQueueFleetAssociation.html
   */
  UpdateQueueFleetAssociation = 'deadline:UpdateQueueFleetAssociation',
  /**
   * Grants permission to update a queue-limit association
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateQueueLimitAssociation.html
   */
  UpdateQueueLimitAssociation = 'deadline:UpdateQueueLimitAssociation',
  /**
   * Grants permission to update a session for a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateSession.html
   */
  UpdateSession = 'deadline:UpdateSession',
  /**
   * Grants permission to update a step for a job
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateStep.html
   */
  UpdateStep = 'deadline:UpdateStep',
  /**
   * Grants permission to update a storage profile for a farm
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateStorageProfile.html
   */
  UpdateStorageProfile = 'deadline:UpdateStorageProfile',
  /**
   * Grants permission to update a task
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateTask.html
   */
  UpdateTask = 'deadline:UpdateTask',
  /**
   * Grants permission to update a worker
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateWorker.html
   */
  UpdateWorker = 'deadline:UpdateWorker',
  /**
   * Grants permission to update the schedule for a worker
   *
   * See https://docs.aws.amazon.com/deadline-cloud/latest/APIReference/API_UpdateWorkerSchedule.html
   */
  UpdateWorkerSchedule = 'deadline:UpdateWorkerSchedule',
}
