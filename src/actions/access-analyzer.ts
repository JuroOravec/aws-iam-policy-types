// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS IAM Access Analyzer (ACCESS-ANALYZER)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamaccessanalyzer.html
 *
 * 2025-02-24T21:48:12.718Z
 */
export enum AwsAccessAnalyzerActions {
  /**
   * Grants permission to apply an archive rule
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ApplyArchiveRule.html
   */
  ApplyArchiveRule = 'access-analyzer:ApplyArchiveRule',
  /**
   * Grants permission to cancel a policy generation
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CancelPolicyGeneration.html
   */
  CancelPolicyGeneration = 'access-analyzer:CancelPolicyGeneration',
  /**
   * Grants permission to check that specified access is not allowed by a policy
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CheckAccessNotGranted.html
   */
  CheckAccessNotGranted = 'access-analyzer:CheckAccessNotGranted',
  /**
   * Grants permission to check that no new access is allowed when compared to an ex
   * isting policy
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CheckNoNewAccess.html
   */
  CheckNoNewAccess = 'access-analyzer:CheckNoNewAccess',
  /**
   * Grants permission to check that public access is not allowed by a resource poli
   * cy
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CheckNoPublicAccess.html
   */
  CheckNoPublicAccess = 'access-analyzer:CheckNoPublicAccess',
  /**
   * Grants permission to create an access preview for the specified analyzer
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAccessPreview.html
   */
  CreateAccessPreview = 'access-analyzer:CreateAccessPreview',
  /**
   * Grants permission to create an analyzer
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAnalyzer.html
   */
  CreateAnalyzer = 'access-analyzer:CreateAnalyzer',
  /**
   * Grants permission to create an archive rule for the specified analyzer
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateArchiveRule.html
   */
  CreateArchiveRule = 'access-analyzer:CreateArchiveRule',
  /**
   * Grants permission to delete the specified analyzer
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteAnalyzer.html
   */
  DeleteAnalyzer = 'access-analyzer:DeleteAnalyzer',
  /**
   * Grants permission to delete archive rules for the specified analyzer
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteArchiveRule.html
   */
  DeleteArchiveRule = 'access-analyzer:DeleteArchiveRule',
  /**
   * Grants permission to generate recommendation steps to resolve a finding
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GenerateFindingRecommendation.html
   */
  GenerateFindingRecommendation = 'access-analyzer:GenerateFindingRecommendation',
  /**
   * Grants permission to retrieve information about an access preview
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAccessPreview.html
   */
  GetAccessPreview = 'access-analyzer:GetAccessPreview',
  /**
   * Grants permission to retrieve information about an analyzed resource
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzedResource.html
   */
  GetAnalyzedResource = 'access-analyzer:GetAnalyzedResource',
  /**
   * Grants permission to retrieve information about analyzers
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzer.html
   */
  GetAnalyzer = 'access-analyzer:GetAnalyzer',
  /**
   * Grants permission to retrieve information about archive rules for the specified
   * analyzer
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetArchiveRule.html
   */
  GetArchiveRule = 'access-analyzer:GetArchiveRule',
  /**
   * Grants permission to retrieve findings
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFindingV2.html
   */
  GetFinding = 'access-analyzer:GetFinding',
  /**
   * Grants permission to retrieve recommendation steps to resolve a finding
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFindingRecommendation.html
   */
  GetFindingRecommendation = 'access-analyzer:GetFindingRecommendation',
  /**
   * Grants permission to retrieve statistics for findings
   *
   * See https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#access-analyzer-permissions
   */
  GetFindingsStatistics = 'access-analyzer:GetFindingsStatistics',
  /**
   * Grants permission to retrieve a policy that was generated using StartPolicyGene
   * ration
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetGeneratedPolicy.html
   */
  GetGeneratedPolicy = 'access-analyzer:GetGeneratedPolicy',
  /**
   * Grants permission to retrieve a list of findings from an access preview
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAccessPreviewFindings.html
   */
  ListAccessPreviewFindings = 'access-analyzer:ListAccessPreviewFindings',
  /**
   * Grants permission to retrieve a list of access previews
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAccessPreviews.html
   */
  ListAccessPreviews = 'access-analyzer:ListAccessPreviews',
  /**
   * Grants permission to retrieve a list of resources that have been analyzed
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzedResources.html
   */
  ListAnalyzedResources = 'access-analyzer:ListAnalyzedResources',
  /**
   * Grants permission to retrieves a list of analyzers
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html
   */
  ListAnalyzers = 'access-analyzer:ListAnalyzers',
  /**
   * Grants permission to retrieve a list of archive rules from an analyzer
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListArchiveRules.html
   */
  ListArchiveRules = 'access-analyzer:ListArchiveRules',
  /**
   * Grants permission to retrieve a list of findings from an analyzer
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListFindingsV2.html
   */
  ListFindings = 'access-analyzer:ListFindings',
  /**
   * Grants permission to list all the recently started policy generations
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListPolicyGenerations.html
   */
  ListPolicyGenerations = 'access-analyzer:ListPolicyGenerations',
  /**
   * Grants permission to retrieve a list of tags applied to a resource
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'access-analyzer:ListTagsForResource',
  /**
   * Grants permission to start a policy generation
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartPolicyGeneration.html
   */
  StartPolicyGeneration = 'access-analyzer:StartPolicyGeneration',
  /**
   * Grants permission to start a scan of the policies applied to a resource
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartResourceScan.html
   */
  StartResourceScan = 'access-analyzer:StartResourceScan',
  /**
   * Grants permission to add a tag to a resource
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_TagResource.html
   */
  TagResource = 'access-analyzer:TagResource',
  /**
   * Grants permission to remove a tag from a resource
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'access-analyzer:UntagResource',
  /**
   * Grants permission to modify an analyzer's configuration
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateAnalyzer.html
   */
  UpdateAnalyzer = 'access-analyzer:UpdateAnalyzer',
  /**
   * Grants permission to modify an archive rule
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateArchiveRule.html
   */
  UpdateArchiveRule = 'access-analyzer:UpdateArchiveRule',
  /**
   * Grants permission to modify findings
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateFindings.html
   */
  UpdateFindings = 'access-analyzer:UpdateFindings',
  /**
   * Grants permission to validate a policy
   *
   * See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ValidatePolicy.html
   */
  ValidatePolicy = 'access-analyzer:ValidatePolicy',
}
