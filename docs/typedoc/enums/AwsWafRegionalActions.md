[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsWafRegionalActions

# Enumeration: AwsWafRegionalActions

All IAM policy actions for AWS WAF Regional (WAF-REGIONAL)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafregional.html

2024-02-12T09:59:38.181Z

## Table of contents

### Enumeration Members

- [AssociateWebACL](AwsWafRegionalActions.md#associatewebacl)
- [CreateByteMatchSet](AwsWafRegionalActions.md#createbytematchset)
- [CreateGeoMatchSet](AwsWafRegionalActions.md#creategeomatchset)
- [CreateIPSet](AwsWafRegionalActions.md#createipset)
- [CreateRateBasedRule](AwsWafRegionalActions.md#createratebasedrule)
- [CreateRegexMatchSet](AwsWafRegionalActions.md#createregexmatchset)
- [CreateRegexPatternSet](AwsWafRegionalActions.md#createregexpatternset)
- [CreateRule](AwsWafRegionalActions.md#createrule)
- [CreateRuleGroup](AwsWafRegionalActions.md#createrulegroup)
- [CreateSizeConstraintSet](AwsWafRegionalActions.md#createsizeconstraintset)
- [CreateSqlInjectionMatchSet](AwsWafRegionalActions.md#createsqlinjectionmatchset)
- [CreateWebACL](AwsWafRegionalActions.md#createwebacl)
- [CreateWebACLMigrationStack](AwsWafRegionalActions.md#createwebaclmigrationstack)
- [CreateXssMatchSet](AwsWafRegionalActions.md#createxssmatchset)
- [DeleteByteMatchSet](AwsWafRegionalActions.md#deletebytematchset)
- [DeleteGeoMatchSet](AwsWafRegionalActions.md#deletegeomatchset)
- [DeleteIPSet](AwsWafRegionalActions.md#deleteipset)
- [DeleteLoggingConfiguration](AwsWafRegionalActions.md#deleteloggingconfiguration)
- [DeletePermissionPolicy](AwsWafRegionalActions.md#deletepermissionpolicy)
- [DeleteRateBasedRule](AwsWafRegionalActions.md#deleteratebasedrule)
- [DeleteRegexMatchSet](AwsWafRegionalActions.md#deleteregexmatchset)
- [DeleteRegexPatternSet](AwsWafRegionalActions.md#deleteregexpatternset)
- [DeleteRule](AwsWafRegionalActions.md#deleterule)
- [DeleteRuleGroup](AwsWafRegionalActions.md#deleterulegroup)
- [DeleteSizeConstraintSet](AwsWafRegionalActions.md#deletesizeconstraintset)
- [DeleteSqlInjectionMatchSet](AwsWafRegionalActions.md#deletesqlinjectionmatchset)
- [DeleteWebACL](AwsWafRegionalActions.md#deletewebacl)
- [DeleteXssMatchSet](AwsWafRegionalActions.md#deletexssmatchset)
- [DisassociateWebACL](AwsWafRegionalActions.md#disassociatewebacl)
- [GetByteMatchSet](AwsWafRegionalActions.md#getbytematchset)
- [GetChangeToken](AwsWafRegionalActions.md#getchangetoken)
- [GetChangeTokenStatus](AwsWafRegionalActions.md#getchangetokenstatus)
- [GetGeoMatchSet](AwsWafRegionalActions.md#getgeomatchset)
- [GetIPSet](AwsWafRegionalActions.md#getipset)
- [GetLoggingConfiguration](AwsWafRegionalActions.md#getloggingconfiguration)
- [GetPermissionPolicy](AwsWafRegionalActions.md#getpermissionpolicy)
- [GetRateBasedRule](AwsWafRegionalActions.md#getratebasedrule)
- [GetRateBasedRuleManagedKeys](AwsWafRegionalActions.md#getratebasedrulemanagedkeys)
- [GetRegexMatchSet](AwsWafRegionalActions.md#getregexmatchset)
- [GetRegexPatternSet](AwsWafRegionalActions.md#getregexpatternset)
- [GetRule](AwsWafRegionalActions.md#getrule)
- [GetRuleGroup](AwsWafRegionalActions.md#getrulegroup)
- [GetSampledRequests](AwsWafRegionalActions.md#getsampledrequests)
- [GetSizeConstraintSet](AwsWafRegionalActions.md#getsizeconstraintset)
- [GetSqlInjectionMatchSet](AwsWafRegionalActions.md#getsqlinjectionmatchset)
- [GetWebACL](AwsWafRegionalActions.md#getwebacl)
- [GetWebACLForResource](AwsWafRegionalActions.md#getwebaclforresource)
- [GetXssMatchSet](AwsWafRegionalActions.md#getxssmatchset)
- [ListActivatedRulesInRuleGroup](AwsWafRegionalActions.md#listactivatedrulesinrulegroup)
- [ListByteMatchSets](AwsWafRegionalActions.md#listbytematchsets)
- [ListGeoMatchSets](AwsWafRegionalActions.md#listgeomatchsets)
- [ListIPSets](AwsWafRegionalActions.md#listipsets)
- [ListLoggingConfigurations](AwsWafRegionalActions.md#listloggingconfigurations)
- [ListRateBasedRules](AwsWafRegionalActions.md#listratebasedrules)
- [ListRegexMatchSets](AwsWafRegionalActions.md#listregexmatchsets)
- [ListRegexPatternSets](AwsWafRegionalActions.md#listregexpatternsets)
- [ListResourcesForWebACL](AwsWafRegionalActions.md#listresourcesforwebacl)
- [ListRuleGroups](AwsWafRegionalActions.md#listrulegroups)
- [ListRules](AwsWafRegionalActions.md#listrules)
- [ListSizeConstraintSets](AwsWafRegionalActions.md#listsizeconstraintsets)
- [ListSqlInjectionMatchSets](AwsWafRegionalActions.md#listsqlinjectionmatchsets)
- [ListSubscribedRuleGroups](AwsWafRegionalActions.md#listsubscribedrulegroups)
- [ListTagsForResource](AwsWafRegionalActions.md#listtagsforresource)
- [ListWebACLs](AwsWafRegionalActions.md#listwebacls)
- [ListXssMatchSets](AwsWafRegionalActions.md#listxssmatchsets)
- [PutLoggingConfiguration](AwsWafRegionalActions.md#putloggingconfiguration)
- [PutPermissionPolicy](AwsWafRegionalActions.md#putpermissionpolicy)
- [TagResource](AwsWafRegionalActions.md#tagresource)
- [UntagResource](AwsWafRegionalActions.md#untagresource)
- [UpdateByteMatchSet](AwsWafRegionalActions.md#updatebytematchset)
- [UpdateGeoMatchSet](AwsWafRegionalActions.md#updategeomatchset)
- [UpdateIPSet](AwsWafRegionalActions.md#updateipset)
- [UpdateRateBasedRule](AwsWafRegionalActions.md#updateratebasedrule)
- [UpdateRegexMatchSet](AwsWafRegionalActions.md#updateregexmatchset)
- [UpdateRegexPatternSet](AwsWafRegionalActions.md#updateregexpatternset)
- [UpdateRule](AwsWafRegionalActions.md#updaterule)
- [UpdateRuleGroup](AwsWafRegionalActions.md#updaterulegroup)
- [UpdateSizeConstraintSet](AwsWafRegionalActions.md#updatesizeconstraintset)
- [UpdateSqlInjectionMatchSet](AwsWafRegionalActions.md#updatesqlinjectionmatchset)
- [UpdateWebACL](AwsWafRegionalActions.md#updatewebacl)
- [UpdateXssMatchSet](AwsWafRegionalActions.md#updatexssmatchset)

## Enumeration Members

### AssociateWebACL

• **AssociateWebACL** = ``"waf-regional:AssociateWebACL"``

Grants permission to associate a web ACL with a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_AssociateWebACL.html

#### Defined in

actions/waf-regional.ts:17

___

### CreateByteMatchSet

• **CreateByteMatchSet** = ``"waf-regional:CreateByteMatchSet"``

Grants permission to create a ByteMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateByteMatchSet.html

#### Defined in

actions/waf-regional.ts:23

___

### CreateGeoMatchSet

• **CreateGeoMatchSet** = ``"waf-regional:CreateGeoMatchSet"``

Grants permission to create a GeoMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateGeoMatchSet.html

#### Defined in

actions/waf-regional.ts:29

___

### CreateIPSet

• **CreateIPSet** = ``"waf-regional:CreateIPSet"``

Grants permission to create an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateIPSet.html

#### Defined in

actions/waf-regional.ts:35

___

### CreateRateBasedRule

• **CreateRateBasedRule** = ``"waf-regional:CreateRateBasedRule"``

Grants permission to create a RateBasedRule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRateBasedRule.html

#### Defined in

actions/waf-regional.ts:41

___

### CreateRegexMatchSet

• **CreateRegexMatchSet** = ``"waf-regional:CreateRegexMatchSet"``

Grants permission to create a RegexMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexMatchSet.html

#### Defined in

actions/waf-regional.ts:47

___

### CreateRegexPatternSet

• **CreateRegexPatternSet** = ``"waf-regional:CreateRegexPatternSet"``

Grants permission to create a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexPatternSet.html

#### Defined in

actions/waf-regional.ts:53

___

### CreateRule

• **CreateRule** = ``"waf-regional:CreateRule"``

Grants permission to create a Rule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRule.html

#### Defined in

actions/waf-regional.ts:59

___

### CreateRuleGroup

• **CreateRuleGroup** = ``"waf-regional:CreateRuleGroup"``

Grants permission to create a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRuleGroup.html

#### Defined in

actions/waf-regional.ts:65

___

### CreateSizeConstraintSet

• **CreateSizeConstraintSet** = ``"waf-regional:CreateSizeConstraintSet"``

Grants permission to create a SizeConstraintSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSizeConstraintSet.html

#### Defined in

actions/waf-regional.ts:71

___

### CreateSqlInjectionMatchSet

• **CreateSqlInjectionMatchSet** = ``"waf-regional:CreateSqlInjectionMatchSet"``

Grants permission to create an SqlInjectionMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSqlInjectionMatchSet.html

#### Defined in

actions/waf-regional.ts:77

___

### CreateWebACL

• **CreateWebACL** = ``"waf-regional:CreateWebACL"``

Grants permission to create a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACL.html

#### Defined in

actions/waf-regional.ts:83

___

### CreateWebACLMigrationStack

• **CreateWebACLMigrationStack** = ``"waf-regional:CreateWebACLMigrationStack"``

Grants permission to create a CloudFormation web ACL template in an S3 bucket f
or the purposes of migrating the web ACL from AWS WAF Classic to AWS WAF v2

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACLMigrationStack.html

#### Defined in

actions/waf-regional.ts:90

___

### CreateXssMatchSet

• **CreateXssMatchSet** = ``"waf-regional:CreateXssMatchSet"``

Grants permission to create an XssMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateXssMatchSet.html

#### Defined in

actions/waf-regional.ts:96

___

### DeleteByteMatchSet

• **DeleteByteMatchSet** = ``"waf-regional:DeleteByteMatchSet"``

Grants permission to delete a ByteMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteByteMatchSet.html

#### Defined in

actions/waf-regional.ts:102

___

### DeleteGeoMatchSet

• **DeleteGeoMatchSet** = ``"waf-regional:DeleteGeoMatchSet"``

Grants permission to delete a GeoMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteGeoMatchSet.html

#### Defined in

actions/waf-regional.ts:108

___

### DeleteIPSet

• **DeleteIPSet** = ``"waf-regional:DeleteIPSet"``

Grants permission to delete an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteIPSet.html

#### Defined in

actions/waf-regional.ts:114

___

### DeleteLoggingConfiguration

• **DeleteLoggingConfiguration** = ``"waf-regional:DeleteLoggingConfiguration"``

Grants permission to delete a LoggingConfiguration from a web ACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteLoggingConfiguration.html

#### Defined in

actions/waf-regional.ts:120

___

### DeletePermissionPolicy

• **DeletePermissionPolicy** = ``"waf-regional:DeletePermissionPolicy"``

Grants permission to delete an IAM policy from a rule group

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeletePermissionPolicy.html

#### Defined in

actions/waf-regional.ts:126

___

### DeleteRateBasedRule

• **DeleteRateBasedRule** = ``"waf-regional:DeleteRateBasedRule"``

Grants permission to delete a RateBasedRule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRateBasedRule.html

#### Defined in

actions/waf-regional.ts:132

___

### DeleteRegexMatchSet

• **DeleteRegexMatchSet** = ``"waf-regional:DeleteRegexMatchSet"``

Grants permission to delete a RegexMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexMatchSet.html

#### Defined in

actions/waf-regional.ts:138

___

### DeleteRegexPatternSet

• **DeleteRegexPatternSet** = ``"waf-regional:DeleteRegexPatternSet"``

Grants permission to delete a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexPatternSet.html

#### Defined in

actions/waf-regional.ts:144

___

### DeleteRule

• **DeleteRule** = ``"waf-regional:DeleteRule"``

Grants permission to delete a Rule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRule.html

#### Defined in

actions/waf-regional.ts:150

___

### DeleteRuleGroup

• **DeleteRuleGroup** = ``"waf-regional:DeleteRuleGroup"``

Grants permission to delete a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRuleGroup.html

#### Defined in

actions/waf-regional.ts:156

___

### DeleteSizeConstraintSet

• **DeleteSizeConstraintSet** = ``"waf-regional:DeleteSizeConstraintSet"``

Grants permission to delete a SizeConstraintSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSizeConstraintSet.html

#### Defined in

actions/waf-regional.ts:162

___

### DeleteSqlInjectionMatchSet

• **DeleteSqlInjectionMatchSet** = ``"waf-regional:DeleteSqlInjectionMatchSet"``

Grants permission to delete an SqlInjectionMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSqlInjectionMatchSet.html

#### Defined in

actions/waf-regional.ts:168

___

### DeleteWebACL

• **DeleteWebACL** = ``"waf-regional:DeleteWebACL"``

Grants permission to delete a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteWebACL.html

#### Defined in

actions/waf-regional.ts:174

___

### DeleteXssMatchSet

• **DeleteXssMatchSet** = ``"waf-regional:DeleteXssMatchSet"``

Grants permission to delete an XssMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteXssMatchSet.html

#### Defined in

actions/waf-regional.ts:180

___

### DisassociateWebACL

• **DisassociateWebACL** = ``"waf-regional:DisassociateWebACL"``

Grants permission to delete an association between a web ACL and a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DisassociateWebACL.html

#### Defined in

actions/waf-regional.ts:186

___

### GetByteMatchSet

• **GetByteMatchSet** = ``"waf-regional:GetByteMatchSet"``

Grants permission to retrieve a ByteMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetByteMatchSet.html

#### Defined in

actions/waf-regional.ts:192

___

### GetChangeToken

• **GetChangeToken** = ``"waf-regional:GetChangeToken"``

Grants permission to retrieve a change token to use in create, update, and dele
te requests

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeToken.html

#### Defined in

actions/waf-regional.ts:199

___

### GetChangeTokenStatus

• **GetChangeTokenStatus** = ``"waf-regional:GetChangeTokenStatus"``

Grants permission to retrieve the status of a change token

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeTokenStatus.html

#### Defined in

actions/waf-regional.ts:205

___

### GetGeoMatchSet

• **GetGeoMatchSet** = ``"waf-regional:GetGeoMatchSet"``

Grants permission to retrieve a GeoMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetGeoMatchSet.html

#### Defined in

actions/waf-regional.ts:211

___

### GetIPSet

• **GetIPSet** = ``"waf-regional:GetIPSet"``

Grants permission to retrieve an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetIPSet.html

#### Defined in

actions/waf-regional.ts:217

___

### GetLoggingConfiguration

• **GetLoggingConfiguration** = ``"waf-regional:GetLoggingConfiguration"``

Grants permission to retrieve a LoggingConfiguration

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetLoggingConfiguration.html

#### Defined in

actions/waf-regional.ts:223

___

### GetPermissionPolicy

• **GetPermissionPolicy** = ``"waf-regional:GetPermissionPolicy"``

Grants permission to retrieve an IAM policy attached to a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetPermissionPolicy.html

#### Defined in

actions/waf-regional.ts:229

___

### GetRateBasedRule

• **GetRateBasedRule** = ``"waf-regional:GetRateBasedRule"``

Grants permission to retrieve a RateBasedRule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRule.html

#### Defined in

actions/waf-regional.ts:235

___

### GetRateBasedRuleManagedKeys

• **GetRateBasedRuleManagedKeys** = ``"waf-regional:GetRateBasedRuleManagedKeys"``

Grants permission to retrieve the array of IP addresses that are currently bein
g blocked by a RateBasedRule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRuleManagedKeys.html

#### Defined in

actions/waf-regional.ts:242

___

### GetRegexMatchSet

• **GetRegexMatchSet** = ``"waf-regional:GetRegexMatchSet"``

Grants permission to retrieve a RegexMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexMatchSet.html

#### Defined in

actions/waf-regional.ts:248

___

### GetRegexPatternSet

• **GetRegexPatternSet** = ``"waf-regional:GetRegexPatternSet"``

Grants permission to retrieve a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexPatternSet.html

#### Defined in

actions/waf-regional.ts:254

___

### GetRule

• **GetRule** = ``"waf-regional:GetRule"``

Grants permission to retrieve a Rule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRule.html

#### Defined in

actions/waf-regional.ts:260

___

### GetRuleGroup

• **GetRuleGroup** = ``"waf-regional:GetRuleGroup"``

Grants permission to retrieve a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRuleGroup.html

#### Defined in

actions/waf-regional.ts:266

___

### GetSampledRequests

• **GetSampledRequests** = ``"waf-regional:GetSampledRequests"``

Grants permission to retrieve detailed information for a sample set of web requ
ests

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSampledRequests.html

#### Defined in

actions/waf-regional.ts:273

___

### GetSizeConstraintSet

• **GetSizeConstraintSet** = ``"waf-regional:GetSizeConstraintSet"``

Grants permission to retrieve a SizeConstraintSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSizeConstraintSet.html

#### Defined in

actions/waf-regional.ts:279

___

### GetSqlInjectionMatchSet

• **GetSqlInjectionMatchSet** = ``"waf-regional:GetSqlInjectionMatchSet"``

Grants permission to retrieve an SqlInjectionMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSqlInjectionMatchSet.html

#### Defined in

actions/waf-regional.ts:285

___

### GetWebACL

• **GetWebACL** = ``"waf-regional:GetWebACL"``

Grants permission to retrieve a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACL.html

#### Defined in

actions/waf-regional.ts:291

___

### GetWebACLForResource

• **GetWebACLForResource** = ``"waf-regional:GetWebACLForResource"``

Grants permission to retrieve a WebACL that's associated with a specified resou
rce

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACLForResource.html

#### Defined in

actions/waf-regional.ts:298

___

### GetXssMatchSet

• **GetXssMatchSet** = ``"waf-regional:GetXssMatchSet"``

Grants permission to retrieve an XssMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetXssMatchSet.html

#### Defined in

actions/waf-regional.ts:304

___

### ListActivatedRulesInRuleGroup

• **ListActivatedRulesInRuleGroup** = ``"waf-regional:ListActivatedRulesInRuleGroup"``

Grants permission to retrieve an array of ActivatedRule objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListActivatedRulesInRuleGroup.html

#### Defined in

actions/waf-regional.ts:310

___

### ListByteMatchSets

• **ListByteMatchSets** = ``"waf-regional:ListByteMatchSets"``

Grants permission to retrieve an array of ByteMatchSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListByteMatchSets.html

#### Defined in

actions/waf-regional.ts:316

___

### ListGeoMatchSets

• **ListGeoMatchSets** = ``"waf-regional:ListGeoMatchSets"``

Grants permission to retrieve an array of GeoMatchSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListGeoMatchSets.html

#### Defined in

actions/waf-regional.ts:322

___

### ListIPSets

• **ListIPSets** = ``"waf-regional:ListIPSets"``

Grants permission to retrieve an array of IPSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListIPSets.html

#### Defined in

actions/waf-regional.ts:328

___

### ListLoggingConfigurations

• **ListLoggingConfigurations** = ``"waf-regional:ListLoggingConfigurations"``

Grants permission to retrieve an array of LoggingConfiguration objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListLoggingConfigurations.html

#### Defined in

actions/waf-regional.ts:334

___

### ListRateBasedRules

• **ListRateBasedRules** = ``"waf-regional:ListRateBasedRules"``

Grants permission to retrieve an array of RuleSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRateBasedRules.html

#### Defined in

actions/waf-regional.ts:340

___

### ListRegexMatchSets

• **ListRegexMatchSets** = ``"waf-regional:ListRegexMatchSets"``

Grants permission to retrieve an array of RegexMatchSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexMatchSets.html

#### Defined in

actions/waf-regional.ts:346

___

### ListRegexPatternSets

• **ListRegexPatternSets** = ``"waf-regional:ListRegexPatternSets"``

Grants permission to retrieve an array of RegexPatternSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexPatternSets.html

#### Defined in

actions/waf-regional.ts:352

___

### ListResourcesForWebACL

• **ListResourcesForWebACL** = ``"waf-regional:ListResourcesForWebACL"``

Grants permission to retrieve an array of resources associated with a specified
WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListResourcesForWebACL.html

#### Defined in

actions/waf-regional.ts:359

___

### ListRuleGroups

• **ListRuleGroups** = ``"waf-regional:ListRuleGroups"``

Grants permission to retrieve an array of RuleGroup objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRuleGroups.html

#### Defined in

actions/waf-regional.ts:365

___

### ListRules

• **ListRules** = ``"waf-regional:ListRules"``

Grants permission to retrieve an array of RuleSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRules.html

#### Defined in

actions/waf-regional.ts:371

___

### ListSizeConstraintSets

• **ListSizeConstraintSets** = ``"waf-regional:ListSizeConstraintSets"``

Grants permission to retrieve an array of SizeConstraintSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSizeConstraintSets.html

#### Defined in

actions/waf-regional.ts:377

___

### ListSqlInjectionMatchSets

• **ListSqlInjectionMatchSets** = ``"waf-regional:ListSqlInjectionMatchSets"``

Grants permission to retrieve an array of SqlInjectionMatchSet objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSqlInjectionMatchSets.html

#### Defined in

actions/waf-regional.ts:383

___

### ListSubscribedRuleGroups

• **ListSubscribedRuleGroups** = ``"waf-regional:ListSubscribedRuleGroups"``

Grants permission to retrieve an array of RuleGroup objects that you are subscr
ibed to

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSubscribedRuleGroups.html

#### Defined in

actions/waf-regional.ts:390

___

### ListTagsForResource

• **ListTagsForResource** = ``"waf-regional:ListTagsForResource"``

Grants permission to lists the Tags for a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListTagsForResource.html

#### Defined in

actions/waf-regional.ts:396

___

### ListWebACLs

• **ListWebACLs** = ``"waf-regional:ListWebACLs"``

Grants permission to retrieve an array of WebACLSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListWebACLs.html

#### Defined in

actions/waf-regional.ts:402

___

### ListXssMatchSets

• **ListXssMatchSets** = ``"waf-regional:ListXssMatchSets"``

Grants permission to retrieve an array of XssMatchSet objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListXssMatchSets.html

#### Defined in

actions/waf-regional.ts:408

___

### PutLoggingConfiguration

• **PutLoggingConfiguration** = ``"waf-regional:PutLoggingConfiguration"``

Grants permission to associates a LoggingConfiguration with a web ACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutLoggingConfiguration.html

#### Defined in

actions/waf-regional.ts:414

___

### PutPermissionPolicy

• **PutPermissionPolicy** = ``"waf-regional:PutPermissionPolicy"``

Grants permission to attach an IAM policy to a specified rule group, to support
rule group sharing between accounts

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutPermissionPolicy.html

#### Defined in

actions/waf-regional.ts:421

___

### TagResource

• **TagResource** = ``"waf-regional:TagResource"``

Grants permission to add a Tag to a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_TagResource.html

#### Defined in

actions/waf-regional.ts:427

___

### UntagResource

• **UntagResource** = ``"waf-regional:UntagResource"``

Grants permission to remove a Tag from a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UntagResource.html

#### Defined in

actions/waf-regional.ts:433

___

### UpdateByteMatchSet

• **UpdateByteMatchSet** = ``"waf-regional:UpdateByteMatchSet"``

Grants permission to insert or delete ByteMatchTuple objects in a ByteMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateByteMatchSet.html

#### Defined in

actions/waf-regional.ts:439

___

### UpdateGeoMatchSet

• **UpdateGeoMatchSet** = ``"waf-regional:UpdateGeoMatchSet"``

Grants permission to insert or delete GeoMatchConstraint objects in a GeoMatchS
et

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateGeoMatchSet.html

#### Defined in

actions/waf-regional.ts:446

___

### UpdateIPSet

• **UpdateIPSet** = ``"waf-regional:UpdateIPSet"``

Grants permission to insert or delete IPSetDescriptor objects in an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateIPSet.html

#### Defined in

actions/waf-regional.ts:452

___

### UpdateRateBasedRule

• **UpdateRateBasedRule** = ``"waf-regional:UpdateRateBasedRule"``

Grants permission to insert or delete predicate objects in a rate based rule an
d update the RateLimit in the rule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRateBasedRule.html

#### Defined in

actions/waf-regional.ts:459

___

### UpdateRegexMatchSet

• **UpdateRegexMatchSet** = ``"waf-regional:UpdateRegexMatchSet"``

Grants permission to insert or delete RegexMatchTuple objects in a RegexMatchSe
t

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexMatchSet.html

#### Defined in

actions/waf-regional.ts:466

___

### UpdateRegexPatternSet

• **UpdateRegexPatternSet** = ``"waf-regional:UpdateRegexPatternSet"``

Grants permission to insert or delete RegexPatternStrings in a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexPatternSet.html

#### Defined in

actions/waf-regional.ts:472

___

### UpdateRule

• **UpdateRule** = ``"waf-regional:UpdateRule"``

Grants permission to insert or delete predicate objects in a Rule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRule.html

#### Defined in

actions/waf-regional.ts:478

___

### UpdateRuleGroup

• **UpdateRuleGroup** = ``"waf-regional:UpdateRuleGroup"``

Grants permission to insert or delete ActivatedRule objects in a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRuleGroup.html

#### Defined in

actions/waf-regional.ts:484

___

### UpdateSizeConstraintSet

• **UpdateSizeConstraintSet** = ``"waf-regional:UpdateSizeConstraintSet"``

Grants permission to insert or delete SizeConstraint objects in a SizeConstrain
tSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSizeConstraintSet.html

#### Defined in

actions/waf-regional.ts:491

___

### UpdateSqlInjectionMatchSet

• **UpdateSqlInjectionMatchSet** = ``"waf-regional:UpdateSqlInjectionMatchSet"``

Grants permission to insert or delete SqlInjectionMatchTuple objects in an SqlI
njectionMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSqlInjectionMatchSet.html

#### Defined in

actions/waf-regional.ts:498

___

### UpdateWebACL

• **UpdateWebACL** = ``"waf-regional:UpdateWebACL"``

Grants permission to insert or delete ActivatedRule objects in a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateWebACL.html

#### Defined in

actions/waf-regional.ts:504

___

### UpdateXssMatchSet

• **UpdateXssMatchSet** = ``"waf-regional:UpdateXssMatchSet"``

Grants permission to insert or delete XssMatchTuple objects in an XssMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateXssMatchSet.html

#### Defined in

actions/waf-regional.ts:510
