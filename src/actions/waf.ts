// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS WAF (WAF)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswaf.html
 *
 * 2024-02-12T09:59:37.618Z
 */
export enum AwsWafActions {
  /**
   * Grants permission to create a ByteMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateByteMatchSet.html
   */
  CreateByteMatchSet = 'waf:CreateByteMatchSet',
  /**
   * Grants permission to create a GeoMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateGeoMatchSet.html
   */
  CreateGeoMatchSet = 'waf:CreateGeoMatchSet',
  /**
   * Grants permission to create an IPSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateIPSet.html
   */
  CreateIPSet = 'waf:CreateIPSet',
  /**
   * Grants permission to create a RateBasedRule for limiting the volume of requests
   * from a single IP address
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRateBasedRule.html
   */
  CreateRateBasedRule = 'waf:CreateRateBasedRule',
  /**
   * Grants permission to create a RegexMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRegexMatchSet.html
   */
  CreateRegexMatchSet = 'waf:CreateRegexMatchSet',
  /**
   * Grants permission to create a RegexPatternSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRegexPatternSet.html
   */
  CreateRegexPatternSet = 'waf:CreateRegexPatternSet',
  /**
   * Grants permission to create a Rule for filtering web requests
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRule.html
   */
  CreateRule = 'waf:CreateRule',
  /**
   * Grants permission to create a RuleGroup, which is a collection of predefined ru
   * les that you can use in a WebACL
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRuleGroup.html
   */
  CreateRuleGroup = 'waf:CreateRuleGroup',
  /**
   * Grants permission to create a SizeConstraintSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateSizeConstraintSet.html
   */
  CreateSizeConstraintSet = 'waf:CreateSizeConstraintSet',
  /**
   * Grants permission to create an SqlInjectionMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateSqlInjectionMatchSet.html
   */
  CreateSqlInjectionMatchSet = 'waf:CreateSqlInjectionMatchSet',
  /**
   * Grants permission to create a WebACL, which contains rules for filtering web re
   * quests
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateWebACL.html
   */
  CreateWebACL = 'waf:CreateWebACL',
  /**
   * Grants permission to create a CloudFormation web ACL template in an S3 bucket f
   * or the purposes of migrating the web ACL from AWS WAF Classic to AWS WAF v2
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateWebACLMigrationStack.html
   */
  CreateWebACLMigrationStack = 'waf:CreateWebACLMigrationStack',
  /**
   * Grants permission to create an XssMatchSet, which you use to detect requests th
   * at contain cross-site scripting attacks
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateXssMatchSet.html
   */
  CreateXssMatchSet = 'waf:CreateXssMatchSet',
  /**
   * Grants permission to delete a ByteMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteByteMatchSet.html
   */
  DeleteByteMatchSet = 'waf:DeleteByteMatchSet',
  /**
   * Grants permission to delete a GeoMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteGeoMatchSet.html
   */
  DeleteGeoMatchSet = 'waf:DeleteGeoMatchSet',
  /**
   * Grants permission to delete an IPSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteIPSet.html
   */
  DeleteIPSet = 'waf:DeleteIPSet',
  /**
   * Grants permission to delete the LoggingConfiguration from a web ACL
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteLoggingConfiguration.html
   */
  DeleteLoggingConfiguration = 'waf:DeleteLoggingConfiguration',
  /**
   * Grants permission to delete an IAM policy from a rule group
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeletePermissionPolicy.html
   */
  DeletePermissionPolicy = 'waf:DeletePermissionPolicy',
  /**
   * Grants permission to delete a RateBasedRule
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRateBasedRule.html
   */
  DeleteRateBasedRule = 'waf:DeleteRateBasedRule',
  /**
   * Grants permission to delete a RegexMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRegexMatchSet.html
   */
  DeleteRegexMatchSet = 'waf:DeleteRegexMatchSet',
  /**
   * Grants permission to delete a RegexPatternSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRegexPatternSet.html
   */
  DeleteRegexPatternSet = 'waf:DeleteRegexPatternSet',
  /**
   * Grants permission to delete a Rule
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRule.html
   */
  DeleteRule = 'waf:DeleteRule',
  /**
   * Grants permission to delete a RuleGroup
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRuleGroup.html
   */
  DeleteRuleGroup = 'waf:DeleteRuleGroup',
  /**
   * Grants permission to delete a SizeConstraintSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteSizeConstraintSet.html
   */
  DeleteSizeConstraintSet = 'waf:DeleteSizeConstraintSet',
  /**
   * Grants permission to delete an SqlInjectionMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteSqlInjectionMatchSet.html
   */
  DeleteSqlInjectionMatchSet = 'waf:DeleteSqlInjectionMatchSet',
  /**
   * Grants permission to delete a WebACL
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteWebACL.html
   */
  DeleteWebACL = 'waf:DeleteWebACL',
  /**
   * Grants permission to delete an XssMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteXssMatchSet.html
   */
  DeleteXssMatchSet = 'waf:DeleteXssMatchSet',
  /**
   * Grants permission to retrieve a ByteMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetByteMatchSet.html
   */
  GetByteMatchSet = 'waf:GetByteMatchSet',
  /**
   * Grants permission to retrieve a change token to use in create, update, and dele
   * te requests
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetChangeToken.html
   */
  GetChangeToken = 'waf:GetChangeToken',
  /**
   * Grants permission to retrieve the status of a change token
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetChangeTokenStatus.html
   */
  GetChangeTokenStatus = 'waf:GetChangeTokenStatus',
  /**
   * Grants permission to retrieve a GeoMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetGeoMatchSet.html
   */
  GetGeoMatchSet = 'waf:GetGeoMatchSet',
  /**
   * Grants permission to retrieve an IPSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetIPSet.html
   */
  GetIPSet = 'waf:GetIPSet',
  /**
   * Grants permission to retrieve a LoggingConfiguration for a web ACL
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetLoggingConfiguration.html
   */
  GetLoggingConfiguration = 'waf:GetLoggingConfiguration',
  /**
   * Grants permission to retrieve an IAM policy for a rule group
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetPermissionPolicy.html
   */
  GetPermissionPolicy = 'waf:GetPermissionPolicy',
  /**
   * Grants permission to retrieve a RateBasedRule
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRateBasedRule.html
   */
  GetRateBasedRule = 'waf:GetRateBasedRule',
  /**
   * Grants permission to retrieve the array of IP addresses that are currently bein
   * g blocked by a RateBasedRule
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRateBasedRuleManagedKeys.html
   */
  GetRateBasedRuleManagedKeys = 'waf:GetRateBasedRuleManagedKeys',
  /**
   * Grants permission to retrieve a RegexMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRegexMatchSet.html
   */
  GetRegexMatchSet = 'waf:GetRegexMatchSet',
  /**
   * Grants permission to retrieve a RegexPatternSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRegexPatternSet.html
   */
  GetRegexPatternSet = 'waf:GetRegexPatternSet',
  /**
   * Grants permission to retrieve a Rule
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRule.html
   */
  GetRule = 'waf:GetRule',
  /**
   * Grants permission to retrieve a RuleGroup
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRuleGroup.html
   */
  GetRuleGroup = 'waf:GetRuleGroup',
  /**
   * Grants permission to retrieve detailed information about a sample set of web re
   * quests
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSampledRequests.html
   */
  GetSampledRequests = 'waf:GetSampledRequests',
  /**
   * Grants permission to retrieve a SizeConstraintSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSizeConstraintSet.html
   */
  GetSizeConstraintSet = 'waf:GetSizeConstraintSet',
  /**
   * Grants permission to retrieve an SqlInjectionMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSqlInjectionMatchSet.html
   */
  GetSqlInjectionMatchSet = 'waf:GetSqlInjectionMatchSet',
  /**
   * Grants permission to retrieve a WebACL
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetWebACL.html
   */
  GetWebACL = 'waf:GetWebACL',
  /**
   * Grants permission to retrieve an XssMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetXssMatchSet.html
   */
  GetXssMatchSet = 'waf:GetXssMatchSet',
  /**
   * Grants permission to retrieve an array of ActivatedRule objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListActivatedRulesInRuleGroup.html
   */
  ListActivatedRulesInRuleGroup = 'waf:ListActivatedRulesInRuleGroup',
  /**
   * Grants permission to retrieve an array of ByteMatchSetSummary objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListByteMatchSets.html
   */
  ListByteMatchSets = 'waf:ListByteMatchSets',
  /**
   * Grants permission to retrieve an array of GeoMatchSetSummary objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListGeoMatchSets.html
   */
  ListGeoMatchSets = 'waf:ListGeoMatchSets',
  /**
   * Grants permission to retrieve an array of IPSetSummary objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListIPSets.html
   */
  ListIPSets = 'waf:ListIPSets',
  /**
   * Grants permission to retrieve an array of LoggingConfiguration objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListLoggingConfigurations.html
   */
  ListLoggingConfigurations = 'waf:ListLoggingConfigurations',
  /**
   * Grants permission to retrieve an array of RuleSummary objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRateBasedRules.html
   */
  ListRateBasedRules = 'waf:ListRateBasedRules',
  /**
   * Grants permission to retrieve an array of RegexMatchSetSummary objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRegexMatchSets.html
   */
  ListRegexMatchSets = 'waf:ListRegexMatchSets',
  /**
   * Grants permission to retrieve an array of RegexPatternSetSummary objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRegexPatternSets.html
   */
  ListRegexPatternSets = 'waf:ListRegexPatternSets',
  /**
   * Grants permission to retrieve an array of RuleGroup objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRuleGroups.html
   */
  ListRuleGroups = 'waf:ListRuleGroups',
  /**
   * Grants permission to retrieve an array of RuleSummary objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRules.html
   */
  ListRules = 'waf:ListRules',
  /**
   * Grants permission to retrieve an array of SizeConstraintSetSummary objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSizeConstraintSets.html
   */
  ListSizeConstraintSets = 'waf:ListSizeConstraintSets',
  /**
   * Grants permission to retrieve an array of SqlInjectionMatchSet objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSqlInjectionMatchSets.html
   */
  ListSqlInjectionMatchSets = 'waf:ListSqlInjectionMatchSets',
  /**
   * Grants permission to retrieve an array of RuleGroup objects that you are subscr
   * ibed to
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSubscribedRuleGroups.html
   */
  ListSubscribedRuleGroups = 'waf:ListSubscribedRuleGroups',
  /**
   * Grants permission to retrieve the tags for a resource
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListTagsForResource.html
   */
  ListTagsForResource = 'waf:ListTagsForResource',
  /**
   * Grants permission to retrieve an array of WebACLSummary objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListWebACLs.html
   */
  ListWebACLs = 'waf:ListWebACLs',
  /**
   * Grants permission to retrieve an array of XssMatchSet objects
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListXssMatchSets.html
   */
  ListXssMatchSets = 'waf:ListXssMatchSets',
  /**
   * Grants permission to associate a LoggingConfiguration with a specified web ACL
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_PutLoggingConfiguration.html
   */
  PutLoggingConfiguration = 'waf:PutLoggingConfiguration',
  /**
   * Grants permission to attach an IAM policy to a rule group, to share the rule gr
   * oup between accounts
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_PutPermissionPolicy.html
   */
  PutPermissionPolicy = 'waf:PutPermissionPolicy',
  /**
   * Grants permission to add a Tag to a resource
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_TagResource.html
   */
  TagResource = 'waf:TagResource',
  /**
   * Grants permission to remove a Tag from a resource
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UntagResource.html
   */
  UntagResource = 'waf:UntagResource',
  /**
   * Grants permission to insert or delete ByteMatchTuple objects in a ByteMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateByteMatchSet.html
   */
  UpdateByteMatchSet = 'waf:UpdateByteMatchSet',
  /**
   * Grants permission to insert or delete GeoMatchConstraint objects in a GeoMatchS
   * et
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateGeoMatchSet.html
   */
  UpdateGeoMatchSet = 'waf:UpdateGeoMatchSet',
  /**
   * Grants permission to insert or delete IPSetDescriptor objects in an IPSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateIPSet.html
   */
  UpdateIPSet = 'waf:UpdateIPSet',
  /**
   * Grants permission to modify a rate based rule
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRateBasedRule.html
   */
  UpdateRateBasedRule = 'waf:UpdateRateBasedRule',
  /**
   * Grants permission to insert or delete RegexMatchTuple objects in a RegexMatchSe
   * t
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRegexMatchSet.html
   */
  UpdateRegexMatchSet = 'waf:UpdateRegexMatchSet',
  /**
   * Grants permission to insert or delete RegexPatternStrings in a RegexPatternSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRegexPatternSet.html
   */
  UpdateRegexPatternSet = 'waf:UpdateRegexPatternSet',
  /**
   * Grants permission to modify a Rule
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRule.html
   */
  UpdateRule = 'waf:UpdateRule',
  /**
   * Grants permission to insert or delete ActivatedRule objects in a RuleGroup
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRuleGroup.html
   */
  UpdateRuleGroup = 'waf:UpdateRuleGroup',
  /**
   * Grants permission to insert or delete SizeConstraint objects in a SizeConstrain
   * tSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateSizeConstraintSet.html
   */
  UpdateSizeConstraintSet = 'waf:UpdateSizeConstraintSet',
  /**
   * Grants permission to insert or delete SqlInjectionMatchTuple objects in an SqlI
   * njectionMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateSqlInjectionMatchSet.html
   */
  UpdateSqlInjectionMatchSet = 'waf:UpdateSqlInjectionMatchSet',
  /**
   * Grants permission to insert or delete ActivatedRule objects in a WebACL
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateWebACL.html
   */
  UpdateWebACL = 'waf:UpdateWebACL',
  /**
   * Grants permission to insert or delete XssMatchTuple objects in an XssMatchSet
   *
   * See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateXssMatchSet.html
   */
  UpdateXssMatchSet = 'waf:UpdateXssMatchSet',
}