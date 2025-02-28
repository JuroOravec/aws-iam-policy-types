// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Route 53 Recovery Readiness (ROUTE53-RECOVERY-READINESS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoveryreadiness.html
 *
 * 2025-02-24T21:49:31.360Z
 */
export enum AwsRoute53RecoveryReadinessActions {
  /**
   * Grants permission to create a new cell
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/cells.html
   */
  CreateCell = 'route53-recovery-readiness:CreateCell',
  /**
   * Grants permission to create a cross account authorization
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/crossaccountauthorizations.html
   */
  CreateCrossAccountAuthorization = 'route53-recovery-readiness:CreateCrossAccountAuthorization',
  /**
   * Grants permission to create a readiness check
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks.html
   */
  CreateReadinessCheck = 'route53-recovery-readiness:CreateReadinessCheck',
  /**
   * Grants permission to create a recovery group
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups.html
   */
  CreateRecoveryGroup = 'route53-recovery-readiness:CreateRecoveryGroup',
  /**
   * Grants permission to create a resource set
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets.html
   */
  CreateResourceSet = 'route53-recovery-readiness:CreateResourceSet',
  /**
   * Grants permission to delete a cell
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html
   */
  DeleteCell = 'route53-recovery-readiness:DeleteCell',
  /**
   * Grants permission to delete a cross account authorization
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/crossaccountauthorizations-crossaccountauthorization.html
   */
  DeleteCrossAccountAuthorization = 'route53-recovery-readiness:DeleteCrossAccountAuthorization',
  /**
   * Grants permission to delete a readiness check
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html
   */
  DeleteReadinessCheck = 'route53-recovery-readiness:DeleteReadinessCheck',
  /**
   * Grants permission to delete a recovery group
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html
   */
  DeleteRecoveryGroup = 'route53-recovery-readiness:DeleteRecoveryGroup',
  /**
   * Grants permission to delete a resource set
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html
   */
  DeleteResourceSet = 'route53-recovery-readiness:DeleteResourceSet',
  /**
   * Grants permission to get architecture recommendations for a recovery group
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname-architecturerecommendations.html
   */
  GetArchitectureRecommendations = 'route53-recovery-readiness:GetArchitectureRecommendations',
  /**
   * Grants permission to get information about a cell
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html
   */
  GetCell = 'route53-recovery-readiness:GetCell',
  /**
   * Grants permission to get a readiness summary for a cell
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/cellreadiness-cellname.html
   */
  GetCellReadinessSummary = 'route53-recovery-readiness:GetCellReadinessSummary',
  /**
   * Grants permission to get information about a readiness check
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html
   */
  GetReadinessCheck = 'route53-recovery-readiness:GetReadinessCheck',
  /**
   * Grants permission to get the readiness status for an individual resource
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname-resource-resourceidentifier-status.html
   */
  GetReadinessCheckResourceStatus = 'route53-recovery-readiness:GetReadinessCheckResourceStatus',
  /**
   * Grants permission to get the status of a readiness check (for a resource set)
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname-status.html
   */
  GetReadinessCheckStatus = 'route53-recovery-readiness:GetReadinessCheckStatus',
  /**
   * Grants permission to get information about a recovery group
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html
   */
  GetRecoveryGroup = 'route53-recovery-readiness:GetRecoveryGroup',
  /**
   * Grants permission to get a readiness summary for a recovery group
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroupreadiness-recoverygroupname.html
   */
  GetRecoveryGroupReadinessSummary = 'route53-recovery-readiness:GetRecoveryGroupReadinessSummary',
  /**
   * Grants permission to get information about a resource set
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html
   */
  GetResourceSet = 'route53-recovery-readiness:GetResourceSet',
  /**
   * Grants permission to list cells
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/cells.html
   */
  ListCells = 'route53-recovery-readiness:ListCells',
  /**
   * Grants permission to list cross account authorizations
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/crossaccountauthorizations.html
   */
  ListCrossAccountAuthorizations = 'route53-recovery-readiness:ListCrossAccountAuthorizations',
  /**
   * Grants permission to list readiness checks
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks.html
   */
  ListReadinessChecks = 'route53-recovery-readiness:ListReadinessChecks',
  /**
   * Grants permission to list recovery groups
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups.html
   */
  ListRecoveryGroups = 'route53-recovery-readiness:ListRecoveryGroups',
  /**
   * Grants permission to list resource sets
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets.html
   */
  ListResourceSets = 'route53-recovery-readiness:ListResourceSets',
  /**
   * Grants permission to list readiness rules
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/rules.html
   */
  ListRules = 'route53-recovery-readiness:ListRules',
  /**
   * Grants permission to list tags for a resource
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html
   */
  ListTagsForResources = 'route53-recovery-readiness:ListTagsForResources',
  /**
   * Grants permission to add a tag to a resource
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html
   */
  TagResource = 'route53-recovery-readiness:TagResource',
  /**
   * Grants permission to remove a tag from a resource
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html
   */
  UntagResource = 'route53-recovery-readiness:UntagResource',
  /**
   * Grants permission to update a cell
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html
   */
  UpdateCell = 'route53-recovery-readiness:UpdateCell',
  /**
   * Grants permission to update a readiness check
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html
   */
  UpdateReadinessCheck = 'route53-recovery-readiness:UpdateReadinessCheck',
  /**
   * Grants permission to update a recovery group
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html
   */
  UpdateRecoveryGroup = 'route53-recovery-readiness:UpdateRecoveryGroup',
  /**
   * Grants permission to update a resource set
   *
   * See https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html
   */
  UpdateResourceSet = 'route53-recovery-readiness:UpdateResourceSet',
}
