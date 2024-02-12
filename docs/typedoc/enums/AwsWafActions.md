[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsWafActions

# Enumeration: AwsWafActions

All IAM policy actions for AWS WAF (WAF)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswaf.html

2024-02-12T09:59:37.618Z

## Table of contents

### Enumeration Members

- [CreateByteMatchSet](AwsWafActions.md#createbytematchset)
- [CreateGeoMatchSet](AwsWafActions.md#creategeomatchset)
- [CreateIPSet](AwsWafActions.md#createipset)
- [CreateRateBasedRule](AwsWafActions.md#createratebasedrule)
- [CreateRegexMatchSet](AwsWafActions.md#createregexmatchset)
- [CreateRegexPatternSet](AwsWafActions.md#createregexpatternset)
- [CreateRule](AwsWafActions.md#createrule)
- [CreateRuleGroup](AwsWafActions.md#createrulegroup)
- [CreateSizeConstraintSet](AwsWafActions.md#createsizeconstraintset)
- [CreateSqlInjectionMatchSet](AwsWafActions.md#createsqlinjectionmatchset)
- [CreateWebACL](AwsWafActions.md#createwebacl)
- [CreateWebACLMigrationStack](AwsWafActions.md#createwebaclmigrationstack)
- [CreateXssMatchSet](AwsWafActions.md#createxssmatchset)
- [DeleteByteMatchSet](AwsWafActions.md#deletebytematchset)
- [DeleteGeoMatchSet](AwsWafActions.md#deletegeomatchset)
- [DeleteIPSet](AwsWafActions.md#deleteipset)
- [DeleteLoggingConfiguration](AwsWafActions.md#deleteloggingconfiguration)
- [DeletePermissionPolicy](AwsWafActions.md#deletepermissionpolicy)
- [DeleteRateBasedRule](AwsWafActions.md#deleteratebasedrule)
- [DeleteRegexMatchSet](AwsWafActions.md#deleteregexmatchset)
- [DeleteRegexPatternSet](AwsWafActions.md#deleteregexpatternset)
- [DeleteRule](AwsWafActions.md#deleterule)
- [DeleteRuleGroup](AwsWafActions.md#deleterulegroup)
- [DeleteSizeConstraintSet](AwsWafActions.md#deletesizeconstraintset)
- [DeleteSqlInjectionMatchSet](AwsWafActions.md#deletesqlinjectionmatchset)
- [DeleteWebACL](AwsWafActions.md#deletewebacl)
- [DeleteXssMatchSet](AwsWafActions.md#deletexssmatchset)
- [GetByteMatchSet](AwsWafActions.md#getbytematchset)
- [GetChangeToken](AwsWafActions.md#getchangetoken)
- [GetChangeTokenStatus](AwsWafActions.md#getchangetokenstatus)
- [GetGeoMatchSet](AwsWafActions.md#getgeomatchset)
- [GetIPSet](AwsWafActions.md#getipset)
- [GetLoggingConfiguration](AwsWafActions.md#getloggingconfiguration)
- [GetPermissionPolicy](AwsWafActions.md#getpermissionpolicy)
- [GetRateBasedRule](AwsWafActions.md#getratebasedrule)
- [GetRateBasedRuleManagedKeys](AwsWafActions.md#getratebasedrulemanagedkeys)
- [GetRegexMatchSet](AwsWafActions.md#getregexmatchset)
- [GetRegexPatternSet](AwsWafActions.md#getregexpatternset)
- [GetRule](AwsWafActions.md#getrule)
- [GetRuleGroup](AwsWafActions.md#getrulegroup)
- [GetSampledRequests](AwsWafActions.md#getsampledrequests)
- [GetSizeConstraintSet](AwsWafActions.md#getsizeconstraintset)
- [GetSqlInjectionMatchSet](AwsWafActions.md#getsqlinjectionmatchset)
- [GetWebACL](AwsWafActions.md#getwebacl)
- [GetXssMatchSet](AwsWafActions.md#getxssmatchset)
- [ListActivatedRulesInRuleGroup](AwsWafActions.md#listactivatedrulesinrulegroup)
- [ListByteMatchSets](AwsWafActions.md#listbytematchsets)
- [ListGeoMatchSets](AwsWafActions.md#listgeomatchsets)
- [ListIPSets](AwsWafActions.md#listipsets)
- [ListLoggingConfigurations](AwsWafActions.md#listloggingconfigurations)
- [ListRateBasedRules](AwsWafActions.md#listratebasedrules)
- [ListRegexMatchSets](AwsWafActions.md#listregexmatchsets)
- [ListRegexPatternSets](AwsWafActions.md#listregexpatternsets)
- [ListRuleGroups](AwsWafActions.md#listrulegroups)
- [ListRules](AwsWafActions.md#listrules)
- [ListSizeConstraintSets](AwsWafActions.md#listsizeconstraintsets)
- [ListSqlInjectionMatchSets](AwsWafActions.md#listsqlinjectionmatchsets)
- [ListSubscribedRuleGroups](AwsWafActions.md#listsubscribedrulegroups)
- [ListTagsForResource](AwsWafActions.md#listtagsforresource)
- [ListWebACLs](AwsWafActions.md#listwebacls)
- [ListXssMatchSets](AwsWafActions.md#listxssmatchsets)
- [PutLoggingConfiguration](AwsWafActions.md#putloggingconfiguration)
- [PutPermissionPolicy](AwsWafActions.md#putpermissionpolicy)
- [TagResource](AwsWafActions.md#tagresource)
- [UntagResource](AwsWafActions.md#untagresource)
- [UpdateByteMatchSet](AwsWafActions.md#updatebytematchset)
- [UpdateGeoMatchSet](AwsWafActions.md#updategeomatchset)
- [UpdateIPSet](AwsWafActions.md#updateipset)
- [UpdateRateBasedRule](AwsWafActions.md#updateratebasedrule)
- [UpdateRegexMatchSet](AwsWafActions.md#updateregexmatchset)
- [UpdateRegexPatternSet](AwsWafActions.md#updateregexpatternset)
- [UpdateRule](AwsWafActions.md#updaterule)
- [UpdateRuleGroup](AwsWafActions.md#updaterulegroup)
- [UpdateSizeConstraintSet](AwsWafActions.md#updatesizeconstraintset)
- [UpdateSqlInjectionMatchSet](AwsWafActions.md#updatesqlinjectionmatchset)
- [UpdateWebACL](AwsWafActions.md#updatewebacl)
- [UpdateXssMatchSet](AwsWafActions.md#updatexssmatchset)

## Enumeration Members

### CreateByteMatchSet

• **CreateByteMatchSet** = ``"waf:CreateByteMatchSet"``

Grants permission to create a ByteMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateByteMatchSet.html

#### Defined in

actions/waf.ts:17

___

### CreateGeoMatchSet

• **CreateGeoMatchSet** = ``"waf:CreateGeoMatchSet"``

Grants permission to create a GeoMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateGeoMatchSet.html

#### Defined in

actions/waf.ts:23

___

### CreateIPSet

• **CreateIPSet** = ``"waf:CreateIPSet"``

Grants permission to create an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateIPSet.html

#### Defined in

actions/waf.ts:29

___

### CreateRateBasedRule

• **CreateRateBasedRule** = ``"waf:CreateRateBasedRule"``

Grants permission to create a RateBasedRule for limiting the volume of requests
from a single IP address

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRateBasedRule.html

#### Defined in

actions/waf.ts:36

___

### CreateRegexMatchSet

• **CreateRegexMatchSet** = ``"waf:CreateRegexMatchSet"``

Grants permission to create a RegexMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRegexMatchSet.html

#### Defined in

actions/waf.ts:42

___

### CreateRegexPatternSet

• **CreateRegexPatternSet** = ``"waf:CreateRegexPatternSet"``

Grants permission to create a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRegexPatternSet.html

#### Defined in

actions/waf.ts:48

___

### CreateRule

• **CreateRule** = ``"waf:CreateRule"``

Grants permission to create a Rule for filtering web requests

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRule.html

#### Defined in

actions/waf.ts:54

___

### CreateRuleGroup

• **CreateRuleGroup** = ``"waf:CreateRuleGroup"``

Grants permission to create a RuleGroup, which is a collection of predefined ru
les that you can use in a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRuleGroup.html

#### Defined in

actions/waf.ts:61

___

### CreateSizeConstraintSet

• **CreateSizeConstraintSet** = ``"waf:CreateSizeConstraintSet"``

Grants permission to create a SizeConstraintSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateSizeConstraintSet.html

#### Defined in

actions/waf.ts:67

___

### CreateSqlInjectionMatchSet

• **CreateSqlInjectionMatchSet** = ``"waf:CreateSqlInjectionMatchSet"``

Grants permission to create an SqlInjectionMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateSqlInjectionMatchSet.html

#### Defined in

actions/waf.ts:73

___

### CreateWebACL

• **CreateWebACL** = ``"waf:CreateWebACL"``

Grants permission to create a WebACL, which contains rules for filtering web re
quests

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateWebACL.html

#### Defined in

actions/waf.ts:80

___

### CreateWebACLMigrationStack

• **CreateWebACLMigrationStack** = ``"waf:CreateWebACLMigrationStack"``

Grants permission to create a CloudFormation web ACL template in an S3 bucket f
or the purposes of migrating the web ACL from AWS WAF Classic to AWS WAF v2

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateWebACLMigrationStack.html

#### Defined in

actions/waf.ts:87

___

### CreateXssMatchSet

• **CreateXssMatchSet** = ``"waf:CreateXssMatchSet"``

Grants permission to create an XssMatchSet, which you use to detect requests th
at contain cross-site scripting attacks

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateXssMatchSet.html

#### Defined in

actions/waf.ts:94

___

### DeleteByteMatchSet

• **DeleteByteMatchSet** = ``"waf:DeleteByteMatchSet"``

Grants permission to delete a ByteMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteByteMatchSet.html

#### Defined in

actions/waf.ts:100

___

### DeleteGeoMatchSet

• **DeleteGeoMatchSet** = ``"waf:DeleteGeoMatchSet"``

Grants permission to delete a GeoMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteGeoMatchSet.html

#### Defined in

actions/waf.ts:106

___

### DeleteIPSet

• **DeleteIPSet** = ``"waf:DeleteIPSet"``

Grants permission to delete an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteIPSet.html

#### Defined in

actions/waf.ts:112

___

### DeleteLoggingConfiguration

• **DeleteLoggingConfiguration** = ``"waf:DeleteLoggingConfiguration"``

Grants permission to delete the LoggingConfiguration from a web ACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteLoggingConfiguration.html

#### Defined in

actions/waf.ts:118

___

### DeletePermissionPolicy

• **DeletePermissionPolicy** = ``"waf:DeletePermissionPolicy"``

Grants permission to delete an IAM policy from a rule group

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeletePermissionPolicy.html

#### Defined in

actions/waf.ts:124

___

### DeleteRateBasedRule

• **DeleteRateBasedRule** = ``"waf:DeleteRateBasedRule"``

Grants permission to delete a RateBasedRule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRateBasedRule.html

#### Defined in

actions/waf.ts:130

___

### DeleteRegexMatchSet

• **DeleteRegexMatchSet** = ``"waf:DeleteRegexMatchSet"``

Grants permission to delete a RegexMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRegexMatchSet.html

#### Defined in

actions/waf.ts:136

___

### DeleteRegexPatternSet

• **DeleteRegexPatternSet** = ``"waf:DeleteRegexPatternSet"``

Grants permission to delete a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRegexPatternSet.html

#### Defined in

actions/waf.ts:142

___

### DeleteRule

• **DeleteRule** = ``"waf:DeleteRule"``

Grants permission to delete a Rule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRule.html

#### Defined in

actions/waf.ts:148

___

### DeleteRuleGroup

• **DeleteRuleGroup** = ``"waf:DeleteRuleGroup"``

Grants permission to delete a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRuleGroup.html

#### Defined in

actions/waf.ts:154

___

### DeleteSizeConstraintSet

• **DeleteSizeConstraintSet** = ``"waf:DeleteSizeConstraintSet"``

Grants permission to delete a SizeConstraintSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteSizeConstraintSet.html

#### Defined in

actions/waf.ts:160

___

### DeleteSqlInjectionMatchSet

• **DeleteSqlInjectionMatchSet** = ``"waf:DeleteSqlInjectionMatchSet"``

Grants permission to delete an SqlInjectionMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteSqlInjectionMatchSet.html

#### Defined in

actions/waf.ts:166

___

### DeleteWebACL

• **DeleteWebACL** = ``"waf:DeleteWebACL"``

Grants permission to delete a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteWebACL.html

#### Defined in

actions/waf.ts:172

___

### DeleteXssMatchSet

• **DeleteXssMatchSet** = ``"waf:DeleteXssMatchSet"``

Grants permission to delete an XssMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteXssMatchSet.html

#### Defined in

actions/waf.ts:178

___

### GetByteMatchSet

• **GetByteMatchSet** = ``"waf:GetByteMatchSet"``

Grants permission to retrieve a ByteMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetByteMatchSet.html

#### Defined in

actions/waf.ts:184

___

### GetChangeToken

• **GetChangeToken** = ``"waf:GetChangeToken"``

Grants permission to retrieve a change token to use in create, update, and dele
te requests

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetChangeToken.html

#### Defined in

actions/waf.ts:191

___

### GetChangeTokenStatus

• **GetChangeTokenStatus** = ``"waf:GetChangeTokenStatus"``

Grants permission to retrieve the status of a change token

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetChangeTokenStatus.html

#### Defined in

actions/waf.ts:197

___

### GetGeoMatchSet

• **GetGeoMatchSet** = ``"waf:GetGeoMatchSet"``

Grants permission to retrieve a GeoMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetGeoMatchSet.html

#### Defined in

actions/waf.ts:203

___

### GetIPSet

• **GetIPSet** = ``"waf:GetIPSet"``

Grants permission to retrieve an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetIPSet.html

#### Defined in

actions/waf.ts:209

___

### GetLoggingConfiguration

• **GetLoggingConfiguration** = ``"waf:GetLoggingConfiguration"``

Grants permission to retrieve a LoggingConfiguration for a web ACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetLoggingConfiguration.html

#### Defined in

actions/waf.ts:215

___

### GetPermissionPolicy

• **GetPermissionPolicy** = ``"waf:GetPermissionPolicy"``

Grants permission to retrieve an IAM policy for a rule group

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetPermissionPolicy.html

#### Defined in

actions/waf.ts:221

___

### GetRateBasedRule

• **GetRateBasedRule** = ``"waf:GetRateBasedRule"``

Grants permission to retrieve a RateBasedRule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRateBasedRule.html

#### Defined in

actions/waf.ts:227

___

### GetRateBasedRuleManagedKeys

• **GetRateBasedRuleManagedKeys** = ``"waf:GetRateBasedRuleManagedKeys"``

Grants permission to retrieve the array of IP addresses that are currently bein
g blocked by a RateBasedRule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRateBasedRuleManagedKeys.html

#### Defined in

actions/waf.ts:234

___

### GetRegexMatchSet

• **GetRegexMatchSet** = ``"waf:GetRegexMatchSet"``

Grants permission to retrieve a RegexMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRegexMatchSet.html

#### Defined in

actions/waf.ts:240

___

### GetRegexPatternSet

• **GetRegexPatternSet** = ``"waf:GetRegexPatternSet"``

Grants permission to retrieve a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRegexPatternSet.html

#### Defined in

actions/waf.ts:246

___

### GetRule

• **GetRule** = ``"waf:GetRule"``

Grants permission to retrieve a Rule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRule.html

#### Defined in

actions/waf.ts:252

___

### GetRuleGroup

• **GetRuleGroup** = ``"waf:GetRuleGroup"``

Grants permission to retrieve a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRuleGroup.html

#### Defined in

actions/waf.ts:258

___

### GetSampledRequests

• **GetSampledRequests** = ``"waf:GetSampledRequests"``

Grants permission to retrieve detailed information about a sample set of web re
quests

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSampledRequests.html

#### Defined in

actions/waf.ts:265

___

### GetSizeConstraintSet

• **GetSizeConstraintSet** = ``"waf:GetSizeConstraintSet"``

Grants permission to retrieve a SizeConstraintSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSizeConstraintSet.html

#### Defined in

actions/waf.ts:271

___

### GetSqlInjectionMatchSet

• **GetSqlInjectionMatchSet** = ``"waf:GetSqlInjectionMatchSet"``

Grants permission to retrieve an SqlInjectionMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSqlInjectionMatchSet.html

#### Defined in

actions/waf.ts:277

___

### GetWebACL

• **GetWebACL** = ``"waf:GetWebACL"``

Grants permission to retrieve a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetWebACL.html

#### Defined in

actions/waf.ts:283

___

### GetXssMatchSet

• **GetXssMatchSet** = ``"waf:GetXssMatchSet"``

Grants permission to retrieve an XssMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetXssMatchSet.html

#### Defined in

actions/waf.ts:289

___

### ListActivatedRulesInRuleGroup

• **ListActivatedRulesInRuleGroup** = ``"waf:ListActivatedRulesInRuleGroup"``

Grants permission to retrieve an array of ActivatedRule objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListActivatedRulesInRuleGroup.html

#### Defined in

actions/waf.ts:295

___

### ListByteMatchSets

• **ListByteMatchSets** = ``"waf:ListByteMatchSets"``

Grants permission to retrieve an array of ByteMatchSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListByteMatchSets.html

#### Defined in

actions/waf.ts:301

___

### ListGeoMatchSets

• **ListGeoMatchSets** = ``"waf:ListGeoMatchSets"``

Grants permission to retrieve an array of GeoMatchSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListGeoMatchSets.html

#### Defined in

actions/waf.ts:307

___

### ListIPSets

• **ListIPSets** = ``"waf:ListIPSets"``

Grants permission to retrieve an array of IPSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListIPSets.html

#### Defined in

actions/waf.ts:313

___

### ListLoggingConfigurations

• **ListLoggingConfigurations** = ``"waf:ListLoggingConfigurations"``

Grants permission to retrieve an array of LoggingConfiguration objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListLoggingConfigurations.html

#### Defined in

actions/waf.ts:319

___

### ListRateBasedRules

• **ListRateBasedRules** = ``"waf:ListRateBasedRules"``

Grants permission to retrieve an array of RuleSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRateBasedRules.html

#### Defined in

actions/waf.ts:325

___

### ListRegexMatchSets

• **ListRegexMatchSets** = ``"waf:ListRegexMatchSets"``

Grants permission to retrieve an array of RegexMatchSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRegexMatchSets.html

#### Defined in

actions/waf.ts:331

___

### ListRegexPatternSets

• **ListRegexPatternSets** = ``"waf:ListRegexPatternSets"``

Grants permission to retrieve an array of RegexPatternSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRegexPatternSets.html

#### Defined in

actions/waf.ts:337

___

### ListRuleGroups

• **ListRuleGroups** = ``"waf:ListRuleGroups"``

Grants permission to retrieve an array of RuleGroup objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRuleGroups.html

#### Defined in

actions/waf.ts:343

___

### ListRules

• **ListRules** = ``"waf:ListRules"``

Grants permission to retrieve an array of RuleSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRules.html

#### Defined in

actions/waf.ts:349

___

### ListSizeConstraintSets

• **ListSizeConstraintSets** = ``"waf:ListSizeConstraintSets"``

Grants permission to retrieve an array of SizeConstraintSetSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSizeConstraintSets.html

#### Defined in

actions/waf.ts:355

___

### ListSqlInjectionMatchSets

• **ListSqlInjectionMatchSets** = ``"waf:ListSqlInjectionMatchSets"``

Grants permission to retrieve an array of SqlInjectionMatchSet objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSqlInjectionMatchSets.html

#### Defined in

actions/waf.ts:361

___

### ListSubscribedRuleGroups

• **ListSubscribedRuleGroups** = ``"waf:ListSubscribedRuleGroups"``

Grants permission to retrieve an array of RuleGroup objects that you are subscr
ibed to

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSubscribedRuleGroups.html

#### Defined in

actions/waf.ts:368

___

### ListTagsForResource

• **ListTagsForResource** = ``"waf:ListTagsForResource"``

Grants permission to retrieve the tags for a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListTagsForResource.html

#### Defined in

actions/waf.ts:374

___

### ListWebACLs

• **ListWebACLs** = ``"waf:ListWebACLs"``

Grants permission to retrieve an array of WebACLSummary objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListWebACLs.html

#### Defined in

actions/waf.ts:380

___

### ListXssMatchSets

• **ListXssMatchSets** = ``"waf:ListXssMatchSets"``

Grants permission to retrieve an array of XssMatchSet objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListXssMatchSets.html

#### Defined in

actions/waf.ts:386

___

### PutLoggingConfiguration

• **PutLoggingConfiguration** = ``"waf:PutLoggingConfiguration"``

Grants permission to associate a LoggingConfiguration with a specified web ACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_PutLoggingConfiguration.html

#### Defined in

actions/waf.ts:392

___

### PutPermissionPolicy

• **PutPermissionPolicy** = ``"waf:PutPermissionPolicy"``

Grants permission to attach an IAM policy to a rule group, to share the rule gr
oup between accounts

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_PutPermissionPolicy.html

#### Defined in

actions/waf.ts:399

___

### TagResource

• **TagResource** = ``"waf:TagResource"``

Grants permission to add a Tag to a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_TagResource.html

#### Defined in

actions/waf.ts:405

___

### UntagResource

• **UntagResource** = ``"waf:UntagResource"``

Grants permission to remove a Tag from a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UntagResource.html

#### Defined in

actions/waf.ts:411

___

### UpdateByteMatchSet

• **UpdateByteMatchSet** = ``"waf:UpdateByteMatchSet"``

Grants permission to insert or delete ByteMatchTuple objects in a ByteMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateByteMatchSet.html

#### Defined in

actions/waf.ts:417

___

### UpdateGeoMatchSet

• **UpdateGeoMatchSet** = ``"waf:UpdateGeoMatchSet"``

Grants permission to insert or delete GeoMatchConstraint objects in a GeoMatchS
et

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateGeoMatchSet.html

#### Defined in

actions/waf.ts:424

___

### UpdateIPSet

• **UpdateIPSet** = ``"waf:UpdateIPSet"``

Grants permission to insert or delete IPSetDescriptor objects in an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateIPSet.html

#### Defined in

actions/waf.ts:430

___

### UpdateRateBasedRule

• **UpdateRateBasedRule** = ``"waf:UpdateRateBasedRule"``

Grants permission to modify a rate based rule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRateBasedRule.html

#### Defined in

actions/waf.ts:436

___

### UpdateRegexMatchSet

• **UpdateRegexMatchSet** = ``"waf:UpdateRegexMatchSet"``

Grants permission to insert or delete RegexMatchTuple objects in a RegexMatchSe
t

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRegexMatchSet.html

#### Defined in

actions/waf.ts:443

___

### UpdateRegexPatternSet

• **UpdateRegexPatternSet** = ``"waf:UpdateRegexPatternSet"``

Grants permission to insert or delete RegexPatternStrings in a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRegexPatternSet.html

#### Defined in

actions/waf.ts:449

___

### UpdateRule

• **UpdateRule** = ``"waf:UpdateRule"``

Grants permission to modify a Rule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRule.html

#### Defined in

actions/waf.ts:455

___

### UpdateRuleGroup

• **UpdateRuleGroup** = ``"waf:UpdateRuleGroup"``

Grants permission to insert or delete ActivatedRule objects in a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRuleGroup.html

#### Defined in

actions/waf.ts:461

___

### UpdateSizeConstraintSet

• **UpdateSizeConstraintSet** = ``"waf:UpdateSizeConstraintSet"``

Grants permission to insert or delete SizeConstraint objects in a SizeConstrain
tSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateSizeConstraintSet.html

#### Defined in

actions/waf.ts:468

___

### UpdateSqlInjectionMatchSet

• **UpdateSqlInjectionMatchSet** = ``"waf:UpdateSqlInjectionMatchSet"``

Grants permission to insert or delete SqlInjectionMatchTuple objects in an SqlI
njectionMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateSqlInjectionMatchSet.html

#### Defined in

actions/waf.ts:475

___

### UpdateWebACL

• **UpdateWebACL** = ``"waf:UpdateWebACL"``

Grants permission to insert or delete ActivatedRule objects in a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateWebACL.html

#### Defined in

actions/waf.ts:481

___

### UpdateXssMatchSet

• **UpdateXssMatchSet** = ``"waf:UpdateXssMatchSet"``

Grants permission to insert or delete XssMatchTuple objects in an XssMatchSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateXssMatchSet.html

#### Defined in

actions/waf.ts:487
