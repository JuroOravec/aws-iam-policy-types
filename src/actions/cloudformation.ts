// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS CloudFormation (CLOUDFORMATION)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudformation.html
 *
 * 2025-02-24T21:47:02.457Z
 */
export enum AwsCloudformationActions {
  /**
   * Grants permission to activate trusted access between StackSets and Organization
   * s. With trusted access between StackSets and Organizations activated, the manag
   * ement account has permissions to create and manage StackSets for your organizat
   * ion
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateOrganizationsAccess.html
   */
  ActivateOrganizationsAccess = 'cloudformation:ActivateOrganizationsAccess',
  /**
   * Grants permission to activate a public third-party extension, making it availab
   * le for use in stack templates
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html
   */
  ActivateType = 'cloudformation:ActivateType',
  /**
   * Grants permission to return configuration data for the specified CloudFormation
   * extensions
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_BatchDescribeTypeConfigurations.html
   */
  BatchDescribeTypeConfigurations = 'cloudformation:BatchDescribeTypeConfigurations',
  /**
   * Grants permission to cancel an update on the specified stack
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html
   */
  CancelUpdateStack = 'cloudformation:CancelUpdateStack',
  /**
   * Grants permission to continue rolling back a stack that is in the UPDATE_ROLLBA
   * CK_FAILED state to the UPDATE_ROLLBACK_COMPLETE state
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html
   */
  ContinueUpdateRollback = 'cloudformation:ContinueUpdateRollback',
  /**
   * Grants permission to create a list of changes for a stack
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html
   */
  CreateChangeSet = 'cloudformation:CreateChangeSet',
  /**
   * Grants permission to create a template from existing resources that are not alr
   * eady managed with CloudFormation
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateGeneratedTemplate.html
   */
  CreateGeneratedTemplate = 'cloudformation:CreateGeneratedTemplate',
  /**
   * Grants permission to create a stack as specified in the template
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html
   */
  CreateStack = 'cloudformation:CreateStack',
  /**
   * Grants permission to create stack instances for the specified accounts, within
   * the specified regions
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html
   */
  CreateStackInstances = 'cloudformation:CreateStackInstances',
  /**
   * Grants permission to create a stack refactor
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackRefactor.html
   */
  CreateStackRefactor = 'cloudformation:CreateStackRefactor',
  /**
   * Grants permission to create a stackset as specified in the template
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackSet.html
   */
  CreateStackSet = 'cloudformation:CreateStackSet',
  /**
   * Grants permission to upload templates to Amazon S3 buckets. Used only by the AW
   * S CloudFormation console and is not documented in the API reference
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html
   */
  CreateUploadBucket = 'cloudformation:CreateUploadBucket',
  /**
   * Grants permission to deactivate trusted access between StackSets and Organizati
   * ons. If trusted access is deactivated, the management account does not have per
   * missions to create and manage service-managed StackSets for your organization
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateOrganizationsAccess.html
   */
  DeactivateOrganizationsAccess = 'cloudformation:DeactivateOrganizationsAccess',
  /**
   * Grants permission to deactivate a public extension that was previously activate
   * d in this account and region
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateType.html
   */
  DeactivateType = 'cloudformation:DeactivateType',
  /**
   * Grants permission to delete the specified change set. Deleting change sets ensu
   * res that no one executes the wrong change set
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteChangeSet.html
   */
  DeleteChangeSet = 'cloudformation:DeleteChangeSet',
  /**
   * Grants permission to delete a generated template
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteGeneratedTemplate.html
   */
  DeleteGeneratedTemplate = 'cloudformation:DeleteGeneratedTemplate',
  /**
   * Grants permission to delete a specified stack
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStack.html
   */
  DeleteStack = 'cloudformation:DeleteStack',
  /**
   * Grants permission to delete stack instances for the specified accounts, in the
   * specified regions
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackInstances.html
   */
  DeleteStackInstances = 'cloudformation:DeleteStackInstances',
  /**
   * Grants permission to delete a specified stackset
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackSet.html
   */
  DeleteStackSet = 'cloudformation:DeleteStackSet',
  /**
   * Grants permission to deregister an existing CloudFormation type or type version
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html
   */
  DeregisterType = 'cloudformation:DeregisterType',
  /**
   * Grants permission to retrieve your account's AWS CloudFormation limits
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeAccountLimits.html
   */
  DescribeAccountLimits = 'cloudformation:DescribeAccountLimits',
  /**
   * Grants permission to return the description for the specified change set
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSet.html
   */
  DescribeChangeSet = 'cloudformation:DescribeChangeSet',
  /**
   * Grants permission to return the Hook invocation information for the specified c
   * hange set
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSetHooks.html
   */
  DescribeChangeSetHooks = 'cloudformation:DescribeChangeSetHooks',
  /**
   * Grants permission to describe a generated template. The output includes details
   * about the progress of the creation of a generated template
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeGeneratedTemplate.html
   */
  DescribeGeneratedTemplate = 'cloudformation:DescribeGeneratedTemplate',
  /**
   * Grants permission to return information about the account's OrganizationAccess
   * status
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html
   */
  DescribeOrganizationsAccess = 'cloudformation:DescribeOrganizationsAccess',
  /**
   * Grants permission to return information about a CloudFormation extension publis
   * her
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribePublisher.html
   */
  DescribePublisher = 'cloudformation:DescribePublisher',
  /**
   * Grants permission to describe details of a resource scan
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeResourceScan.html
   */
  DescribeResourceScan = 'cloudformation:DescribeResourceScan',
  /**
   * Grants permission to return information about a stack drift detection operation
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackDriftDetectionStatus.html
   */
  DescribeStackDriftDetectionStatus = 'cloudformation:DescribeStackDriftDetectionStatus',
  /**
   * Grants permission to return all stack related events for a specified stack
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html
   */
  DescribeStackEvents = 'cloudformation:DescribeStackEvents',
  /**
   * Grants permission to return the stack instance that's associated with the speci
   * fied stack set, AWS account, and region
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackInstance.html
   */
  DescribeStackInstance = 'cloudformation:DescribeStackInstance',
  /**
   * Grants permission to return the description for the specified stack refactor
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackRefactor.html
   */
  DescribeStackRefactor = 'cloudformation:DescribeStackRefactor',
  /**
   * Grants permission to return a description of the specified resource in the spec
   * ified stack
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html
   */
  DescribeStackResource = 'cloudformation:DescribeStackResource',
  /**
   * Grants permission to return drift information for the resources that have been
   * checked for drift in the specified stack
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResourceDrifts.html
   */
  DescribeStackResourceDrifts = 'cloudformation:DescribeStackResourceDrifts',
  /**
   * Grants permission to return AWS resource descriptions for running and deleted s
   * tacks
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResources.html
   */
  DescribeStackResources = 'cloudformation:DescribeStackResources',
  /**
   * Grants permission to return the description of the specified stack set
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSet.html
   */
  DescribeStackSet = 'cloudformation:DescribeStackSet',
  /**
   * Grants permission to return the description of the specified stack set operatio
   * n
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSetOperation.html
   */
  DescribeStackSetOperation = 'cloudformation:DescribeStackSetOperation',
  /**
   * Grants permission to return the description for the specified stack, and to all
   * stacks when used in combination with the ListStacks action
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html
   */
  DescribeStacks = 'cloudformation:DescribeStacks',
  /**
   * Grants permission to return information about the CloudFormation type requested
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html
   */
  DescribeType = 'cloudformation:DescribeType',
  /**
   * Grants permission to return information about the registration process for a Cl
   * oudFormation type
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeTypeRegistration.html
   */
  DescribeTypeRegistration = 'cloudformation:DescribeTypeRegistration',
  /**
   * Grants permission to detects whether a stack's actual configuration differs, or
   * has drifted, from it's expected configuration, as defined in the stack template
   * and any values specified as template parameters
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackDrift.html
   */
  DetectStackDrift = 'cloudformation:DetectStackDrift',
  /**
   * Grants permission to return information about whether a resource's actual confi
   * guration differs, or has drifted, from it's expected configuration, as defined
   * in the stack template and any values specified as template parameters
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackResourceDrift.html
   */
  DetectStackResourceDrift = 'cloudformation:DetectStackResourceDrift',
  /**
   * Grants permission to enable users to detect drift on a stack set and the stack
   * instances that belong to that stack set
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackSetDrift.html
   */
  DetectStackSetDrift = 'cloudformation:DetectStackSetDrift',
  /**
   * Grants permission to return the estimated monthly cost of a template
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html
   */
  EstimateTemplateCost = 'cloudformation:EstimateTemplateCost',
  /**
   * Grants permission to update a stack using the input information that was provid
   * ed when the specified change set was created
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html
   */
  ExecuteChangeSet = 'cloudformation:ExecuteChangeSet',
  /**
   * Grants permission to execute a stack refactor using the input information that
   * was provided when the specified stack refactor was created
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteStackRefactor.html
   */
  ExecuteStackRefactor = 'cloudformation:ExecuteStackRefactor',
  /**
   * Grants permission to retrieve a generated template
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetGeneratedTemplate.html
   */
  GetGeneratedTemplate = 'cloudformation:GetGeneratedTemplate',
  /**
   * Grants permission to return the stack policy for a specified stack
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetStackPolicy.html
   */
  GetStackPolicy = 'cloudformation:GetStackPolicy',
  /**
   * Grants permission to return the template body for a specified stack
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html
   */
  GetTemplate = 'cloudformation:GetTemplate',
  /**
   * Grants permission to return information about a new or existing template
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplateSummary.html
   */
  GetTemplateSummary = 'cloudformation:GetTemplateSummary',
  /**
   * Grants permission to enable users to import existing stacks to a new or existin
   * g stackset
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ImportStacksToStackSet.html
   */
  ImportStacksToStackSet = 'cloudformation:ImportStacksToStackSet',
  /**
   * Grants permission to return the ID and status of each active change set for a s
   * tack. For example, AWS CloudFormation lists change sets that are in the CREATE_
   * IN_PROGRESS or CREATE_PENDING state
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListChangeSets.html
   */
  ListChangeSets = 'cloudformation:ListChangeSets',
  /**
   * Grants permission to list all exported output values in the account and region
   * in which you call this action
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListExports.html
   */
  ListExports = 'cloudformation:ListExports',
  /**
   * Grants permission to list your generated templates in this Region
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListGeneratedTemplates.html
   */
  ListGeneratedTemplates = 'cloudformation:ListGeneratedTemplates',
  /**
   * Grants permission to return Hook invocations result information for the specifi
   * ed target
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListHookResults.html
   */
  ListHookResults = 'cloudformation:ListHookResults',
  /**
   * Grants permission to list all stacks that are importing an exported output valu
   * e
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListImports.html
   */
  ListImports = 'cloudformation:ListImports',
  /**
   * Grants permission to list the related resources for a list of resources from a
   * resource scan. The response indicates whether each returned resource is already
   * managed by CloudFormation
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListResourceScanRelatedResources.html
   */
  ListResourceScanRelatedResources = 'cloudformation:ListResourceScanRelatedResources',
  /**
   * Grants permission to list the resources from a resource scan. The results can b
   * e filtered by resource identifier, resource type prefix, tag key, and tag value
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListResourceScanResources.html
   */
  ListResourceScanResources = 'cloudformation:ListResourceScanResources',
  /**
   * Grants permission to list the resource scans from newest to oldest. By default
   * it will return up to 10 resource scans
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListResourceScans.html
   */
  ListResourceScans = 'cloudformation:ListResourceScans',
  /**
   * Grants permission to return drift information for the resources that have been
   * checked for drift in the specified stack instance
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackInstanceResourceDrifts.html
   */
  ListStackInstanceResourceDrifts = 'cloudformation:ListStackInstanceResourceDrifts',
  /**
   * Grants permission to return summary information about stack instances that are
   * associated with the specified stack set
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html
   */
  ListStackInstances = 'cloudformation:ListStackInstances',
  /**
   * Grants permission to return the list of actions of the specified stack refactor
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackRefactorActions.html
   */
  ListStackRefactorActions = 'cloudformation:ListStackRefactorActions',
  /**
   * Grants permission to return the ID and status of each active stack refactor
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackRefactors.html
   */
  ListStackRefactors = 'cloudformation:ListStackRefactors',
  /**
   * Grants permission to return descriptions of all resources of the specified stac
   * k
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html
   */
  ListStackResources = 'cloudformation:ListStackResources',
  /**
   * Grants permission to return summary information about StackSet Auto Deployment
   * Targets
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetAutoDeploymentTargets.html
   */
  ListStackSetAutoDeploymentTargets = 'cloudformation:ListStackSetAutoDeploymentTargets',
  /**
   * Grants permission to return summary information about the results of a stack se
   * t operation
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperationResults.html
   */
  ListStackSetOperationResults = 'cloudformation:ListStackSetOperationResults',
  /**
   * Grants permission to return summary information about operations performed on a
   * stack set
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperations.html
   */
  ListStackSetOperations = 'cloudformation:ListStackSetOperations',
  /**
   * Grants permission to return summary information about stack sets that are assoc
   * iated with the user
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html
   */
  ListStackSets = 'cloudformation:ListStackSets',
  /**
   * Grants permission to return the summary information for stacks whose status mat
   * ches the specified StackStatusFilter. In combination with the DescribeStacks ac
   * tion, grants permission to list descriptions for stacks
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html
   */
  ListStacks = 'cloudformation:ListStacks',
  /**
   * Grants permission to list CloudFormation type registration attempts
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeRegistrations.html
   */
  ListTypeRegistrations = 'cloudformation:ListTypeRegistrations',
  /**
   * Grants permission to list versions of a particular CloudFormation type
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeVersions.html
   */
  ListTypeVersions = 'cloudformation:ListTypeVersions',
  /**
   * Grants permission to list available CloudFormation types
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html
   */
  ListTypes = 'cloudformation:ListTypes',
  /**
   * Grants permission to publish the specified extension to the CloudFormation regi
   * stry as a public extension in this region
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_PublishType.html
   */
  PublishType = 'cloudformation:PublishType',
  /**
   * Grants permission to record the handler progress
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RecordHandlerProgress.html
   */
  RecordHandlerProgress = 'cloudformation:RecordHandlerProgress',
  /**
   * Grants permission to register account as a publisher of public extensions in th
   * e CloudFormation registry
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html
   */
  RegisterPublisher = 'cloudformation:RegisterPublisher',
  /**
   * Grants permission to register a new CloudFormation type
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html
   */
  RegisterType = 'cloudformation:RegisterType',
  /**
   * Grants permission to rollback the stack to the last stable state
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RollbackStack.html
   */
  RollbackStack = 'cloudformation:RollbackStack',
  /**
   * Grants permission to set a stack policy for a specified stack
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetStackPolicy.html
   */
  SetStackPolicy = 'cloudformation:SetStackPolicy',
  /**
   * Grants permission to set the configuration data for a registered CloudFormation
   * extension, in the given account and region
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html
   */
  SetTypeConfiguration = 'cloudformation:SetTypeConfiguration',
  /**
   * Grants permission to set which version of a CloudFormation type applies to Clou
   * dFormation operations
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeDefaultVersion.html
   */
  SetTypeDefaultVersion = 'cloudformation:SetTypeDefaultVersion',
  /**
   * Grants permission to send a signal to the specified resource with a success or
   * failure status
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SignalResource.html
   */
  SignalResource = 'cloudformation:SignalResource',
  /**
   * Grants permission to start a scan of the resources in this account in this Regi
   * on
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StartResourceScan.html
   */
  StartResourceScan = 'cloudformation:StartResourceScan',
  /**
   * Grants permission to stop an in-progress operation on a stack set and its assoc
   * iated stack instances
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StopStackSetOperation.html
   */
  StopStackSetOperation = 'cloudformation:StopStackSetOperation',
  /**
   * Grants permission to tag cloudformation resources
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TagResource.html
   */
  TagResource = 'cloudformation:TagResource',
  /**
   * Grants permission to test a registered extension to make sure it meets all nece
   * ssary requirements for being published in the CloudFormation registry
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TestType.html
   */
  TestType = 'cloudformation:TestType',
  /**
   * Grants permission to untag cloudformation resources
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'cloudformation:UntagResource',
  /**
   * Grants permission to update a generated template. This can be used to change th
   * e name, add and remove resources, refresh resources, and change the DeletionPol
   * icy and UpdateReplacePolicy settings
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateGeneratedTemplate.html
   */
  UpdateGeneratedTemplate = 'cloudformation:UpdateGeneratedTemplate',
  /**
   * Grants permission to update a stack as specified in the template
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html
   */
  UpdateStack = 'cloudformation:UpdateStack',
  /**
   * Grants permission to update the parameter values for stack instances for the sp
   * ecified accounts, within the specified regions
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackInstances.html
   */
  UpdateStackInstances = 'cloudformation:UpdateStackInstances',
  /**
   * Grants permission to update a stackset as specified in the template
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html
   */
  UpdateStackSet = 'cloudformation:UpdateStackSet',
  /**
   * Grants permission to update termination protection for the specified stack
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateTerminationProtection.html
   */
  UpdateTerminationProtection = 'cloudformation:UpdateTerminationProtection',
  /**
   * Grants permission to validate a specified template
   *
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ValidateTemplate.html
   */
  ValidateTemplate = 'cloudformation:ValidateTemplate',
}
