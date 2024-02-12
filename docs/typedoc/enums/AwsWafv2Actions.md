[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsWafv2Actions

# Enumeration: AwsWafv2Actions

All IAM policy actions for AWS WAF V2 (WAFV2)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafv2.html

2024-02-12T09:59:38.747Z

## Table of contents

### Enumeration Members

- [AssociateWebACL](AwsWafv2Actions.md#associatewebacl)
- [CheckCapacity](AwsWafv2Actions.md#checkcapacity)
- [CreateAPIKey](AwsWafv2Actions.md#createapikey)
- [CreateIPSet](AwsWafv2Actions.md#createipset)
- [CreateRegexPatternSet](AwsWafv2Actions.md#createregexpatternset)
- [CreateRuleGroup](AwsWafv2Actions.md#createrulegroup)
- [CreateWebACL](AwsWafv2Actions.md#createwebacl)
- [DeleteFirewallManagerRuleGroups](AwsWafv2Actions.md#deletefirewallmanagerrulegroups)
- [DeleteIPSet](AwsWafv2Actions.md#deleteipset)
- [DeleteLoggingConfiguration](AwsWafv2Actions.md#deleteloggingconfiguration)
- [DeletePermissionPolicy](AwsWafv2Actions.md#deletepermissionpolicy)
- [DeleteRegexPatternSet](AwsWafv2Actions.md#deleteregexpatternset)
- [DeleteRuleGroup](AwsWafv2Actions.md#deleterulegroup)
- [DeleteWebACL](AwsWafv2Actions.md#deletewebacl)
- [DescribeAllManagedProducts](AwsWafv2Actions.md#describeallmanagedproducts)
- [DescribeManagedProductsByVendor](AwsWafv2Actions.md#describemanagedproductsbyvendor)
- [DescribeManagedRuleGroup](AwsWafv2Actions.md#describemanagedrulegroup)
- [DisassociateFirewallManager](AwsWafv2Actions.md#disassociatefirewallmanager)
- [DisassociateWebACL](AwsWafv2Actions.md#disassociatewebacl)
- [GenerateMobileSdkReleaseUrl](AwsWafv2Actions.md#generatemobilesdkreleaseurl)
- [GetDecryptedAPIKey](AwsWafv2Actions.md#getdecryptedapikey)
- [GetIPSet](AwsWafv2Actions.md#getipset)
- [GetLoggingConfiguration](AwsWafv2Actions.md#getloggingconfiguration)
- [GetManagedRuleSet](AwsWafv2Actions.md#getmanagedruleset)
- [GetMobileSdkRelease](AwsWafv2Actions.md#getmobilesdkrelease)
- [GetPermissionPolicy](AwsWafv2Actions.md#getpermissionpolicy)
- [GetRateBasedStatementManagedKeys](AwsWafv2Actions.md#getratebasedstatementmanagedkeys)
- [GetRegexPatternSet](AwsWafv2Actions.md#getregexpatternset)
- [GetRuleGroup](AwsWafv2Actions.md#getrulegroup)
- [GetSampledRequests](AwsWafv2Actions.md#getsampledrequests)
- [GetWebACL](AwsWafv2Actions.md#getwebacl)
- [GetWebACLForResource](AwsWafv2Actions.md#getwebaclforresource)
- [ListAPIKeys](AwsWafv2Actions.md#listapikeys)
- [ListAvailableManagedRuleGroupVersions](AwsWafv2Actions.md#listavailablemanagedrulegroupversions)
- [ListAvailableManagedRuleGroups](AwsWafv2Actions.md#listavailablemanagedrulegroups)
- [ListIPSets](AwsWafv2Actions.md#listipsets)
- [ListLoggingConfigurations](AwsWafv2Actions.md#listloggingconfigurations)
- [ListManagedRuleSets](AwsWafv2Actions.md#listmanagedrulesets)
- [ListMobileSdkReleases](AwsWafv2Actions.md#listmobilesdkreleases)
- [ListRegexPatternSets](AwsWafv2Actions.md#listregexpatternsets)
- [ListResourcesForWebACL](AwsWafv2Actions.md#listresourcesforwebacl)
- [ListRuleGroups](AwsWafv2Actions.md#listrulegroups)
- [ListTagsForResource](AwsWafv2Actions.md#listtagsforresource)
- [ListWebACLs](AwsWafv2Actions.md#listwebacls)
- [PutFirewallManagerRuleGroups](AwsWafv2Actions.md#putfirewallmanagerrulegroups)
- [PutLoggingConfiguration](AwsWafv2Actions.md#putloggingconfiguration)
- [PutManagedRuleSetVersions](AwsWafv2Actions.md#putmanagedrulesetversions)
- [PutPermissionPolicy](AwsWafv2Actions.md#putpermissionpolicy)
- [TagResource](AwsWafv2Actions.md#tagresource)
- [UntagResource](AwsWafv2Actions.md#untagresource)
- [UpdateIPSet](AwsWafv2Actions.md#updateipset)
- [UpdateManagedRuleSetVersionExpiryDate](AwsWafv2Actions.md#updatemanagedrulesetversionexpirydate)
- [UpdateRegexPatternSet](AwsWafv2Actions.md#updateregexpatternset)
- [UpdateRuleGroup](AwsWafv2Actions.md#updaterulegroup)
- [UpdateWebACL](AwsWafv2Actions.md#updatewebacl)

## Enumeration Members

### AssociateWebACL

• **AssociateWebACL** = ``"wafv2:AssociateWebACL"``

Grants permission to associate a WebACL with a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_AssociateWebACL.html

#### Defined in

actions/wafv2.ts:17

___

### CheckCapacity

• **CheckCapacity** = ``"wafv2:CheckCapacity"``

Grants permission to calculate web ACL capacity unit (WCU) requirements for a s
pecified scope and set of rules

See https://docs.aws.amazon.com/waf/latest/APIReference/API_CheckCapacity.html

#### Defined in

actions/wafv2.ts:24

___

### CreateAPIKey

• **CreateAPIKey** = ``"wafv2:CreateAPIKey"``

Grants permission to create an API key for use in the integration of the CAPTCH
A API in your JavaScript client applications

See https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateAPIKey.html

#### Defined in

actions/wafv2.ts:31

___

### CreateIPSet

• **CreateIPSet** = ``"wafv2:CreateIPSet"``

Grants permission to create an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateIPSet.html

#### Defined in

actions/wafv2.ts:37

___

### CreateRegexPatternSet

• **CreateRegexPatternSet** = ``"wafv2:CreateRegexPatternSet"``

Grants permission to create a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRegexPatternSet.html

#### Defined in

actions/wafv2.ts:43

___

### CreateRuleGroup

• **CreateRuleGroup** = ``"wafv2:CreateRuleGroup"``

Grants permission to create a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRuleGroup.html

#### Defined in

actions/wafv2.ts:49

___

### CreateWebACL

• **CreateWebACL** = ``"wafv2:CreateWebACL"``

Grants permission to create a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateWebACL.html

#### Defined in

actions/wafv2.ts:55

___

### DeleteFirewallManagerRuleGroups

• **DeleteFirewallManagerRuleGroups** = ``"wafv2:DeleteFirewallManagerRuleGroups"``

Grants permission to delete FirewallManagedRulesGroups from a WebACL if not man
aged by Firewall Manager anymore

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteFirewallManagerRuleGroups.html

#### Defined in

actions/wafv2.ts:62

___

### DeleteIPSet

• **DeleteIPSet** = ``"wafv2:DeleteIPSet"``

Grants permission to delete an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteIPSet.html

#### Defined in

actions/wafv2.ts:68

___

### DeleteLoggingConfiguration

• **DeleteLoggingConfiguration** = ``"wafv2:DeleteLoggingConfiguration"``

Grants permission to delete the LoggingConfiguration from a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteLoggingConfiguration.html

#### Defined in

actions/wafv2.ts:74

___

### DeletePermissionPolicy

• **DeletePermissionPolicy** = ``"wafv2:DeletePermissionPolicy"``

Grants permission to delete the PermissionPolicy on a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DeletePermissionPolicy.html

#### Defined in

actions/wafv2.ts:80

___

### DeleteRegexPatternSet

• **DeleteRegexPatternSet** = ``"wafv2:DeleteRegexPatternSet"``

Grants permission to delete a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRegexPatternSet.html

#### Defined in

actions/wafv2.ts:86

___

### DeleteRuleGroup

• **DeleteRuleGroup** = ``"wafv2:DeleteRuleGroup"``

Grants permission to delete a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRuleGroup.html

#### Defined in

actions/wafv2.ts:92

___

### DeleteWebACL

• **DeleteWebACL** = ``"wafv2:DeleteWebACL"``

Grants permission to delete a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteWebACL.html

#### Defined in

actions/wafv2.ts:98

___

### DescribeAllManagedProducts

• **DescribeAllManagedProducts** = ``"wafv2:DescribeAllManagedProducts"``

Grants permission to retrieve product information for a managed rule group

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DescribeAllManagedProducts.html

#### Defined in

actions/wafv2.ts:104

___

### DescribeManagedProductsByVendor

• **DescribeManagedProductsByVendor** = ``"wafv2:DescribeManagedProductsByVendor"``

Grants permission to retrieve product information for a managed rule group by a
given vendor

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DescribeManagedProductsByVendor.html

#### Defined in

actions/wafv2.ts:111

___

### DescribeManagedRuleGroup

• **DescribeManagedRuleGroup** = ``"wafv2:DescribeManagedRuleGroup"``

Grants permission to retrieve high-level information for a managed rule group

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DescribeManagedRuleGroup.html

#### Defined in

actions/wafv2.ts:117

___

### DisassociateFirewallManager

• **DisassociateFirewallManager** = ``"wafv2:DisassociateFirewallManager"``

Grants permission to disassociate Firewall Manager from a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DisassociateFirewallManager.html

#### Defined in

actions/wafv2.ts:123

___

### DisassociateWebACL

• **DisassociateWebACL** = ``"wafv2:DisassociateWebACL"``

Grants permission to disassociate a WebACL from an application resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_DisassociateWebACL.html

#### Defined in

actions/wafv2.ts:129

___

### GenerateMobileSdkReleaseUrl

• **GenerateMobileSdkReleaseUrl** = ``"wafv2:GenerateMobileSdkReleaseUrl"``

Grants permission to generate a presigned download URL for the specified releas
e of the mobile SDK

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GenerateMobileSdkReleaseUrl.html

#### Defined in

actions/wafv2.ts:136

___

### GetDecryptedAPIKey

• **GetDecryptedAPIKey** = ``"wafv2:GetDecryptedAPIKey"``

Grants permission to return your API key in decrypted form. Use this to check t
he token domains that you have defined for the key

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetDecryptedAPIKey.html

#### Defined in

actions/wafv2.ts:143

___

### GetIPSet

• **GetIPSet** = ``"wafv2:GetIPSet"``

Grants permission to retrieve details about an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetIPSet.html

#### Defined in

actions/wafv2.ts:149

___

### GetLoggingConfiguration

• **GetLoggingConfiguration** = ``"wafv2:GetLoggingConfiguration"``

Grants permission to retrieve LoggingConfiguration for a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetLoggingConfiguration.html

#### Defined in

actions/wafv2.ts:155

___

### GetManagedRuleSet

• **GetManagedRuleSet** = ``"wafv2:GetManagedRuleSet"``

Grants permission to retrieve details about a ManagedRuleSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetManagedRuleSet.html

#### Defined in

actions/wafv2.ts:161

___

### GetMobileSdkRelease

• **GetMobileSdkRelease** = ``"wafv2:GetMobileSdkRelease"``

Grants permission to retrieve information for the specified mobile SDK release,
including release notes and tags

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetMobileSdkRelease.html

#### Defined in

actions/wafv2.ts:168

___

### GetPermissionPolicy

• **GetPermissionPolicy** = ``"wafv2:GetPermissionPolicy"``

Grants permission to retrieve a PermissionPolicy for a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetPermissionPolicy.html

#### Defined in

actions/wafv2.ts:174

___

### GetRateBasedStatementManagedKeys

• **GetRateBasedStatementManagedKeys** = ``"wafv2:GetRateBasedStatementManagedKeys"``

Grants permission to retrieve the keys that are currently blocked by a rate-bas
ed rule

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRateBasedStatementManagedKeys.html

#### Defined in

actions/wafv2.ts:181

___

### GetRegexPatternSet

• **GetRegexPatternSet** = ``"wafv2:GetRegexPatternSet"``

Grants permission to retrieve details about a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRegexPatternSet.html

#### Defined in

actions/wafv2.ts:187

___

### GetRuleGroup

• **GetRuleGroup** = ``"wafv2:GetRuleGroup"``

Grants permission to retrieve details about a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRuleGroup.html

#### Defined in

actions/wafv2.ts:193

___

### GetSampledRequests

• **GetSampledRequests** = ``"wafv2:GetSampledRequests"``

Grants permission to retrieve detailed information about a sampling of web requ
ests

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetSampledRequests.html

#### Defined in

actions/wafv2.ts:200

___

### GetWebACL

• **GetWebACL** = ``"wafv2:GetWebACL"``

Grants permission to retrieve details about a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACL.html

#### Defined in

actions/wafv2.ts:206

___

### GetWebACLForResource

• **GetWebACLForResource** = ``"wafv2:GetWebACLForResource"``

Grants permission to retrieve the WebACL that's associated with a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACLForResource.html

#### Defined in

actions/wafv2.ts:212

___

### ListAPIKeys

• **ListAPIKeys** = ``"wafv2:ListAPIKeys"``

Grants permission to retrieve a list of the API keys that you've defined for th
e specified scope

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAPIKeys.html

#### Defined in

actions/wafv2.ts:219

___

### ListAvailableManagedRuleGroupVersions

• **ListAvailableManagedRuleGroupVersions** = ``"wafv2:ListAvailableManagedRuleGroupVersions"``

Grants permission to retrieve an array of managed rule group versions that are
available for you to use

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAvailableManagedRuleGroupVersions.html

#### Defined in

actions/wafv2.ts:226

___

### ListAvailableManagedRuleGroups

• **ListAvailableManagedRuleGroups** = ``"wafv2:ListAvailableManagedRuleGroups"``

Grants permission to retrieve an array of managed rule groups that are availabl
e for you to use

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAvailableManagedRuleGroups.html

#### Defined in

actions/wafv2.ts:233

___

### ListIPSets

• **ListIPSets** = ``"wafv2:ListIPSets"``

Grants permission to retrieve an array of IPSetSummary objects for the IP sets
that you manage

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListIPSets.html

#### Defined in

actions/wafv2.ts:240

___

### ListLoggingConfigurations

• **ListLoggingConfigurations** = ``"wafv2:ListLoggingConfigurations"``

Grants permission to retrieve an array of your LoggingConfiguration objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListLoggingConfigurations.html

#### Defined in

actions/wafv2.ts:246

___

### ListManagedRuleSets

• **ListManagedRuleSets** = ``"wafv2:ListManagedRuleSets"``

Grants permission to retrieve an array of your ManagedRuleSet objects

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListManagedRuleSets.html

#### Defined in

actions/wafv2.ts:252

___

### ListMobileSdkReleases

• **ListMobileSdkReleases** = ``"wafv2:ListMobileSdkReleases"``

Grants permission to retrieve a list of the available releases for the mobile S
DK and the specified device platform

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListMobileSdkReleases.html

#### Defined in

actions/wafv2.ts:259

___

### ListRegexPatternSets

• **ListRegexPatternSets** = ``"wafv2:ListRegexPatternSets"``

Grants permission to retrieve an array of RegexPatternSetSummary objects for th
e regex pattern sets that you manage

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRegexPatternSets.html

#### Defined in

actions/wafv2.ts:266

___

### ListResourcesForWebACL

• **ListResourcesForWebACL** = ``"wafv2:ListResourcesForWebACL"``

Grants permission to retrieve an array of the Amazon Resource Names (ARNs) for
the resources that are associated with a web ACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListResourcesForWebACL.html

#### Defined in

actions/wafv2.ts:273

___

### ListRuleGroups

• **ListRuleGroups** = ``"wafv2:ListRuleGroups"``

Grants permission to retrieve an array of RuleGroupSummary objects for the rule
groups that you manage

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRuleGroups.html

#### Defined in

actions/wafv2.ts:280

___

### ListTagsForResource

• **ListTagsForResource** = ``"wafv2:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/wafv2.ts:286

___

### ListWebACLs

• **ListWebACLs** = ``"wafv2:ListWebACLs"``

Grants permission to retrieve an array of WebACLSummary objects for the web ACL
s that you manage

See https://docs.aws.amazon.com/waf/latest/APIReference/API_ListWebACLs.html

#### Defined in

actions/wafv2.ts:293

___

### PutFirewallManagerRuleGroups

• **PutFirewallManagerRuleGroups** = ``"wafv2:PutFirewallManagerRuleGroups"``

Grants permission to create FirewallManagedRulesGroups in a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_PutFirewallManagerRuleGroups.html

#### Defined in

actions/wafv2.ts:299

___

### PutLoggingConfiguration

• **PutLoggingConfiguration** = ``"wafv2:PutLoggingConfiguration"``

Grants permission to enable a LoggingConfiguration, to start logging for a web
ACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_PutLoggingConfiguration.html

#### Defined in

actions/wafv2.ts:306

___

### PutManagedRuleSetVersions

• **PutManagedRuleSetVersions** = ``"wafv2:PutManagedRuleSetVersions"``

Grants permission to enable create a new or update an existing version of a Man
agedRuleSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_PutManagedRuleSetVersions.html

#### Defined in

actions/wafv2.ts:313

___

### PutPermissionPolicy

• **PutPermissionPolicy** = ``"wafv2:PutPermissionPolicy"``

Grants permission to attach an IAM policy to a resource, used to share rule gro
ups between accounts

See https://docs.aws.amazon.com/waf/latest/APIReference/API_PutPermissionPolicy.html

#### Defined in

actions/wafv2.ts:320

___

### TagResource

• **TagResource** = ``"wafv2:TagResource"``

Grants permission to associate tags with a AWS resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_TagResource.html

#### Defined in

actions/wafv2.ts:326

___

### UntagResource

• **UntagResource** = ``"wafv2:UntagResource"``

Grants permission to disassociate tags from an AWS resource

See https://docs.aws.amazon.com/waf/latest/APIReference/API_UntagResource.html

#### Defined in

actions/wafv2.ts:332

___

### UpdateIPSet

• **UpdateIPSet** = ``"wafv2:UpdateIPSet"``

Grants permission to update an IPSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateIPSet.html

#### Defined in

actions/wafv2.ts:338

___

### UpdateManagedRuleSetVersionExpiryDate

• **UpdateManagedRuleSetVersionExpiryDate** = ``"wafv2:UpdateManagedRuleSetVersionExpiryDate"``

Grants permission to update the expiry date of a version in ManagedRuleSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateManagedRuleSetVersionExpiryDate.html

#### Defined in

actions/wafv2.ts:344

___

### UpdateRegexPatternSet

• **UpdateRegexPatternSet** = ``"wafv2:UpdateRegexPatternSet"``

Grants permission to update a RegexPatternSet

See https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRegexPatternSet.html

#### Defined in

actions/wafv2.ts:350

___

### UpdateRuleGroup

• **UpdateRuleGroup** = ``"wafv2:UpdateRuleGroup"``

Grants permission to update a RuleGroup

See https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRuleGroup.html

#### Defined in

actions/wafv2.ts:356

___

### UpdateWebACL

• **UpdateWebACL** = ``"wafv2:UpdateWebACL"``

Grants permission to update a WebACL

See https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateWebACL.html

#### Defined in

actions/wafv2.ts:362
