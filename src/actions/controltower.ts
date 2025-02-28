// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Control Tower (CONTROLTOWER)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscontroltower.html
 *
 * 2025-02-24T21:47:27.879Z
 */
export enum AwsControltowerActions {
  /**
   * Grants permission to create a landing zone
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_CreateLandingZone.html
   */
  CreateLandingZone = 'controltower:CreateLandingZone',
  /**
   * Grants permission to create an account managed by AWS Control Tower
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  CreateManagedAccount = 'controltower:CreateManagedAccount',
  /**
   * Grants permission to delete AWS Control Tower landing zone
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_DeleteLandingZone.html
   */
  DeleteLandingZone = 'controltower:DeleteLandingZone',
  /**
   * Grants permission to deregister an account created through the account factory
   * from AWS Control Tower
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  DeregisterManagedAccount = 'controltower:DeregisterManagedAccount',
  /**
   * Grants permission to deregister an organizational unit from AWS Control Tower m
   * anagement
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  DeregisterOrganizationalUnit = 'controltower:DeregisterOrganizationalUnit',
  /**
   * Grants permission to describe the current account factory configuration
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  DescribeAccountFactoryConfig = 'controltower:DescribeAccountFactoryConfig',
  /**
   * Grants permission to describe resources managed by core accounts in AWS Control
   * Tower
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/how-control-tower-works.html#what-shared
   */
  DescribeCoreService = 'controltower:DescribeCoreService',
  /**
   * Grants permission to describe a guardrail
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  DescribeGuardrail = 'controltower:DescribeGuardrail',
  /**
   * Grants permission to describe a guardrail for a organizational unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  DescribeGuardrailForTarget = 'controltower:DescribeGuardrailForTarget',
  /**
   * Grants permission to describe the current Landing Zone configuration
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/step-two.html
   */
  DescribeLandingZoneConfiguration = 'controltower:DescribeLandingZoneConfiguration',
  /**
   * Grants permission to describe an account created through account factory
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  DescribeManagedAccount = 'controltower:DescribeManagedAccount',
  /**
   * Grants permission to describe an AWS Organizations organizational unit managed
   * by AWS Control Tower
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  DescribeManagedOrganizationalUnit = 'controltower:DescribeManagedOrganizationalUnit',
  /**
   * Grants permission to describe a Register Organizational Unit Operation
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/about-extending-governance.html
   */
  DescribeRegisterOrganizationalUnitOperation = 'controltower:DescribeRegisterOrganizationalUnitOperation',
  /**
   * Grants permission to describe the current AWS Control Tower IAM Identity Center
   * configuration
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/sso.html
   */
  DescribeSingleSignOn = 'controltower:DescribeSingleSignOn',
  /**
   * Grants permission to disable a Baseline on a target
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableBaseline.html
   */
  DisableBaseline = 'controltower:DisableBaseline',
  /**
   * Grants permission to remove a control from an organizational unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableControl.html
   */
  DisableControl = 'controltower:DisableControl',
  /**
   * Grants permission to disable a guardrail from an organizational unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls-on-ou.html
   */
  DisableGuardrail = 'controltower:DisableGuardrail',
  /**
   * Grants permission to enable a Baseline on a target
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableBaseline.html
   */
  EnableBaseline = 'controltower:EnableBaseline',
  /**
   * Grants permission to activate a control for an organizational unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableControl.html
   */
  EnableControl = 'controltower:EnableControl',
  /**
   * Grants permission to enable a guardrail to an organizational unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls-on-ou.html
   */
  EnableGuardrail = 'controltower:EnableGuardrail',
  /**
   * Grants permission to describe an account email and validate that it exists
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/accounts.html
   */
  GetAccountInfo = 'controltower:GetAccountInfo',
  /**
   * Grants permission to list available updates for the current AWS Control Tower d
   * eployment
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/configuration-updates.html
   */
  GetAvailableUpdates = 'controltower:GetAvailableUpdates',
  /**
   * Grants permission to get Baseline details
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaseline.html
   */
  GetBaseline = 'controltower:GetBaseline',
  /**
   * Grants permission to get the current status of a particular Baseline operation
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaselineOperation.html
   */
  GetBaselineOperation = 'controltower:GetBaselineOperation',
  /**
   * Grants permission to get the current status of a particular EnabledControl or D
   * isableControl operation
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetControlOperation.html
   */
  GetControlOperation = 'controltower:GetControlOperation',
  /**
   * Grants permission to get an enabled Baseline
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledBaseline.html
   */
  GetEnabledBaseline = 'controltower:GetEnabledBaseline',
  /**
   * Grants permission to get an enabled control from an organizational unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledControl.html
   */
  GetEnabledControl = 'controltower:GetEnabledControl',
  /**
   * Grants permission to get the current compliance status of a guardrail
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  GetGuardrailComplianceStatus = 'controltower:GetGuardrailComplianceStatus',
  /**
   * Grants permission to get the home region of the AWS Control Tower setup
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/how-control-tower-works.html#region-how
   */
  GetHomeRegion = 'controltower:GetHomeRegion',
  /**
   * Grants permission to get the current status of the landing zone setup
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZone.html
   */
  GetLandingZone = 'controltower:GetLandingZone',
  /**
   * Grants permission to get the current landing zone drift status
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/drift.html
   */
  GetLandingZoneDriftStatus = 'controltower:GetLandingZoneDriftStatus',
  /**
   * Grants permission to get the current status of a particular landing zone operat
   * ion
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZoneOperation.html
   */
  GetLandingZoneOperation = 'controltower:GetLandingZoneOperation',
  /**
   * Grants permission to get the current status of the landing zone setup
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-with-control-tower.html#step-two
   */
  GetLandingZoneStatus = 'controltower:GetLandingZoneStatus',
  /**
   * Grants permission to list Baselines
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListBaselines.html
   */
  ListBaselines = 'controltower:ListBaselines',
  /**
   * Grants permission to list all control operations
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListControlOperations.html
   */
  ListControlOperations = 'controltower:ListControlOperations',
  /**
   * Grants permission to list the current directory groups available through IAM Id
   * entity Center
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/sso.html
   */
  ListDirectoryGroups = 'controltower:ListDirectoryGroups',
  /**
   * Grants permission to list occurrences of drift in AWS Control Tower
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/drift.html
   */
  ListDriftDetails = 'controltower:ListDriftDetails',
  /**
   * Grants permission to list enabled Baselines
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledBaselines.html
   */
  ListEnabledBaselines = 'controltower:ListEnabledBaselines',
  /**
   * Grants permission to list all enabled controls in a specified organizational un
   * it
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledControls.html
   */
  ListEnabledControls = 'controltower:ListEnabledControls',
  /**
   * Grants permission to list currently enabled guardrails
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  ListEnabledGuardrails = 'controltower:ListEnabledGuardrails',
  /**
   * Grants permission to list Precheck details for an Organizational Unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/about-extending-governance.html
   */
  ListExtendGovernancePrecheckDetails = 'controltower:ListExtendGovernancePrecheckDetails',
  /**
   * Grants permission to list the compliance of external AWS Config rules
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/review-compliance.html
   */
  ListExternalConfigRuleCompliance = 'controltower:ListExternalConfigRuleCompliance',
  /**
   * Grants permission to list existing guardrail violations
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  ListGuardrailViolations = 'controltower:ListGuardrailViolations',
  /**
   * Grants permission to list all available guardrails
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  ListGuardrails = 'controltower:ListGuardrails',
  /**
   * Grants permission to list guardrails and their current state for a organization
   * al unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  ListGuardrailsForTarget = 'controltower:ListGuardrailsForTarget',
  /**
   * Grants permission to list all landing zone operations
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZoneOperations.html
   */
  ListLandingZoneOperations = 'controltower:ListLandingZoneOperations',
  /**
   * Grants permission to list all landing zones
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZones.html
   */
  ListLandingZones = 'controltower:ListLandingZones',
  /**
   * Grants permission to list accounts managed through AWS Control Tower
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  ListManagedAccounts = 'controltower:ListManagedAccounts',
  /**
   * Grants permission to list managed accounts with a specified guardrail applied
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  ListManagedAccountsForGuardrail = 'controltower:ListManagedAccountsForGuardrail',
  /**
   * Grants permission to list managed accounts under an organizational unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  ListManagedAccountsForParent = 'controltower:ListManagedAccountsForParent',
  /**
   * Grants permission to list organizational units managed by AWS Control Tower
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  ListManagedOrganizationalUnits = 'controltower:ListManagedOrganizationalUnits',
  /**
   * Grants permission to list managed organizational units that have a specified gu
   * ardrail applied
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  ListManagedOrganizationalUnitsForGuardrail = 'controltower:ListManagedOrganizationalUnitsForGuardrail',
  /**
   * Grants permission to list the tags for a resource
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'controltower:ListTagsForResource',
  /**
   * Grants permission to set up an organizational unit to be managed by AWS Control
   * Tower
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  ManageOrganizationalUnit = 'controltower:ManageOrganizationalUnit',
  /**
   * Grants permission to perform validations in an account
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-prereqs.html
   */
  PerformPreLaunchChecks = 'controltower:PerformPreLaunchChecks',
  /**
   * Grants permission to reset an enabled Baseline
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetEnabledBaseline.html
   */
  ResetEnabledBaseline = 'controltower:ResetEnabledBaseline',
  /**
   * Grants permission to reset an enabled control for an organizational unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetEnabledControl.html
   */
  ResetEnabledControl = 'controltower:ResetEnabledControl',
  /**
   * Grants permission to reset a landing zone
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetLandingZone.html
   */
  ResetLandingZone = 'controltower:ResetLandingZone',
  /**
   * Grants permission to set up or update AWS Control Tower landing zone
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-with-control-tower.html#step-two
   */
  SetupLandingZone = 'controltower:SetupLandingZone',
  /**
   * Grants permission to add tags to a resource
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_TagResource.html
   */
  TagResource = 'controltower:TagResource',
  /**
   * Grants permission to remove tags from a resource
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'controltower:UntagResource',
  /**
   * Grants permission to update the account factory configuration
   *
   * See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  UpdateAccountFactoryConfig = 'controltower:UpdateAccountFactoryConfig',
  /**
   * Grants permission to update an enabled Baseline
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledBaseline.html
   */
  UpdateEnabledBaseline = 'controltower:UpdateEnabledBaseline',
  /**
   * Grants permission to update an enabled control for an organizational unit
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledControl.html
   */
  UpdateEnabledControl = 'controltower:UpdateEnabledControl',
  /**
   * Grants permission to update a landing zone
   *
   * See https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateLandingZone.html
   */
  UpdateLandingZone = 'controltower:UpdateLandingZone',
}
