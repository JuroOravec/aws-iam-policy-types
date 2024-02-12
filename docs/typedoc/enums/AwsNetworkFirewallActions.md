[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsNetworkFirewallActions

# Enumeration: AwsNetworkFirewallActions

All IAM policy actions for AWS Network Firewall (NETWORK-FIREWALL)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsnetworkfirewall.html

2024-02-12T09:58:29.001Z

## Table of contents

### Enumeration Members

- [AssociateFirewallPolicy](AwsNetworkFirewallActions.md#associatefirewallpolicy)
- [AssociateSubnets](AwsNetworkFirewallActions.md#associatesubnets)
- [CreateFirewall](AwsNetworkFirewallActions.md#createfirewall)
- [CreateFirewallPolicy](AwsNetworkFirewallActions.md#createfirewallpolicy)
- [CreateRuleGroup](AwsNetworkFirewallActions.md#createrulegroup)
- [CreateTLSInspectionConfiguration](AwsNetworkFirewallActions.md#createtlsinspectionconfiguration)
- [DeleteFirewall](AwsNetworkFirewallActions.md#deletefirewall)
- [DeleteFirewallPolicy](AwsNetworkFirewallActions.md#deletefirewallpolicy)
- [DeleteResourcePolicy](AwsNetworkFirewallActions.md#deleteresourcepolicy)
- [DeleteRuleGroup](AwsNetworkFirewallActions.md#deleterulegroup)
- [DeleteTLSInspectionConfiguration](AwsNetworkFirewallActions.md#deletetlsinspectionconfiguration)
- [DescribeFirewall](AwsNetworkFirewallActions.md#describefirewall)
- [DescribeFirewallPolicy](AwsNetworkFirewallActions.md#describefirewallpolicy)
- [DescribeLoggingConfiguration](AwsNetworkFirewallActions.md#describeloggingconfiguration)
- [DescribeResourcePolicy](AwsNetworkFirewallActions.md#describeresourcepolicy)
- [DescribeRuleGroup](AwsNetworkFirewallActions.md#describerulegroup)
- [DescribeRuleGroupMetadata](AwsNetworkFirewallActions.md#describerulegroupmetadata)
- [DescribeTLSInspectionConfiguration](AwsNetworkFirewallActions.md#describetlsinspectionconfiguration)
- [DisassociateSubnets](AwsNetworkFirewallActions.md#disassociatesubnets)
- [ListFirewallPolicies](AwsNetworkFirewallActions.md#listfirewallpolicies)
- [ListFirewalls](AwsNetworkFirewallActions.md#listfirewalls)
- [ListRuleGroups](AwsNetworkFirewallActions.md#listrulegroups)
- [ListTLSInspectionConfigurations](AwsNetworkFirewallActions.md#listtlsinspectionconfigurations)
- [ListTagsForResource](AwsNetworkFirewallActions.md#listtagsforresource)
- [PutResourcePolicy](AwsNetworkFirewallActions.md#putresourcepolicy)
- [TagResource](AwsNetworkFirewallActions.md#tagresource)
- [UntagResource](AwsNetworkFirewallActions.md#untagresource)
- [UpdateFirewallDeleteProtection](AwsNetworkFirewallActions.md#updatefirewalldeleteprotection)
- [UpdateFirewallDescription](AwsNetworkFirewallActions.md#updatefirewalldescription)
- [UpdateFirewallEncryptionConfiguration](AwsNetworkFirewallActions.md#updatefirewallencryptionconfiguration)
- [UpdateFirewallPolicy](AwsNetworkFirewallActions.md#updatefirewallpolicy)
- [UpdateFirewallPolicyChangeProtection](AwsNetworkFirewallActions.md#updatefirewallpolicychangeprotection)
- [UpdateLoggingConfiguration](AwsNetworkFirewallActions.md#updateloggingconfiguration)
- [UpdateRuleGroup](AwsNetworkFirewallActions.md#updaterulegroup)
- [UpdateSubnetChangeProtection](AwsNetworkFirewallActions.md#updatesubnetchangeprotection)
- [UpdateTLSInspectionConfiguration](AwsNetworkFirewallActions.md#updatetlsinspectionconfiguration)

## Enumeration Members

### AssociateFirewallPolicy

• **AssociateFirewallPolicy** = ``"network-firewall:AssociateFirewallPolicy"``

Grants permission to create an association between a firewall policy and a fire
wall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_AssociateFirewallPolicy.html

#### Defined in

actions/network-firewall.ts:18

___

### AssociateSubnets

• **AssociateSubnets** = ``"network-firewall:AssociateSubnets"``

Grants permission to associate VPC subnets to a firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_AssociateSubnets.html

#### Defined in

actions/network-firewall.ts:24

___

### CreateFirewall

• **CreateFirewall** = ``"network-firewall:CreateFirewall"``

Grants permission to create an AWS Network Firewall firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateFirewall.html

#### Defined in

actions/network-firewall.ts:30

___

### CreateFirewallPolicy

• **CreateFirewallPolicy** = ``"network-firewall:CreateFirewallPolicy"``

Grants permission to create an AWS Network Firewall firewall policy

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateFirewallPolicy.html

#### Defined in

actions/network-firewall.ts:36

___

### CreateRuleGroup

• **CreateRuleGroup** = ``"network-firewall:CreateRuleGroup"``

Grants permission to create an AWS Network Firewall rule group

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateRuleGroup.html

#### Defined in

actions/network-firewall.ts:42

___

### CreateTLSInspectionConfiguration

• **CreateTLSInspectionConfiguration** = ``"network-firewall:CreateTLSInspectionConfiguration"``

Grants permission to create an AWS Network Firewall tls inspection configuratio
n

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateTLSInspectionConfiguration.html

#### Defined in

actions/network-firewall.ts:49

___

### DeleteFirewall

• **DeleteFirewall** = ``"network-firewall:DeleteFirewall"``

Grants permission to delete a firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteFirewall.html

#### Defined in

actions/network-firewall.ts:55

___

### DeleteFirewallPolicy

• **DeleteFirewallPolicy** = ``"network-firewall:DeleteFirewallPolicy"``

Grants permission to delete a firewall policy

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteFirewallPolicy.html

#### Defined in

actions/network-firewall.ts:61

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"network-firewall:DeleteResourcePolicy"``

Grants permission to delete a resource policy for a firewall policy or rule gro
up

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/network-firewall.ts:68

___

### DeleteRuleGroup

• **DeleteRuleGroup** = ``"network-firewall:DeleteRuleGroup"``

Grants permission to delete a rule group

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteRuleGroup.html

#### Defined in

actions/network-firewall.ts:74

___

### DeleteTLSInspectionConfiguration

• **DeleteTLSInspectionConfiguration** = ``"network-firewall:DeleteTLSInspectionConfiguration"``

Grants permission to delete a tls inspection configuration

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteTLSInspectionConfiguration.html

#### Defined in

actions/network-firewall.ts:80

___

### DescribeFirewall

• **DescribeFirewall** = ``"network-firewall:DescribeFirewall"``

Grants permission to retrieve the data objects that define a firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeFirewall.html

#### Defined in

actions/network-firewall.ts:86

___

### DescribeFirewallPolicy

• **DescribeFirewallPolicy** = ``"network-firewall:DescribeFirewallPolicy"``

Grants permission to retrieve the data objects that define a firewall policy

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeFirewallPolicy.html

#### Defined in

actions/network-firewall.ts:92

___

### DescribeLoggingConfiguration

• **DescribeLoggingConfiguration** = ``"network-firewall:DescribeLoggingConfiguration"``

Grants permission to describe the logging configuration of a firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeLoggingConfiguration.html

#### Defined in

actions/network-firewall.ts:98

___

### DescribeResourcePolicy

• **DescribeResourcePolicy** = ``"network-firewall:DescribeResourcePolicy"``

Grants permission to describe a resource policy for a firewall policy or rule g
roup

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeResourcePolicy.html

#### Defined in

actions/network-firewall.ts:105

___

### DescribeRuleGroup

• **DescribeRuleGroup** = ``"network-firewall:DescribeRuleGroup"``

Grants permission to retrieve the data objects that define a rule group

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html

#### Defined in

actions/network-firewall.ts:111

___

### DescribeRuleGroupMetadata

• **DescribeRuleGroupMetadata** = ``"network-firewall:DescribeRuleGroupMetadata"``

Grants permission to retrieve the high-level information about a rule group

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroupMetadata.html

#### Defined in

actions/network-firewall.ts:117

___

### DescribeTLSInspectionConfiguration

• **DescribeTLSInspectionConfiguration** = ``"network-firewall:DescribeTLSInspectionConfiguration"``

Grants permission to retrieve the data objects that define a tls inspection con
figuration

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeTLSInspectionConfiguration.html

#### Defined in

actions/network-firewall.ts:124

___

### DisassociateSubnets

• **DisassociateSubnets** = ``"network-firewall:DisassociateSubnets"``

Grants permission to disassociate VPC subnets from a firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DisassociateSubnets.html

#### Defined in

actions/network-firewall.ts:130

___

### ListFirewallPolicies

• **ListFirewallPolicies** = ``"network-firewall:ListFirewallPolicies"``

Grants permission to retrieve the metadata for firewall policies

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListFirewallPolicies.html

#### Defined in

actions/network-firewall.ts:136

___

### ListFirewalls

• **ListFirewalls** = ``"network-firewall:ListFirewalls"``

Grants permission to retrieve the metadata for firewalls

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListFirewalls.html

#### Defined in

actions/network-firewall.ts:142

___

### ListRuleGroups

• **ListRuleGroups** = ``"network-firewall:ListRuleGroups"``

Grants permission to retrieve the metadata for rule groups

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListRuleGroups.html

#### Defined in

actions/network-firewall.ts:148

___

### ListTLSInspectionConfigurations

• **ListTLSInspectionConfigurations** = ``"network-firewall:ListTLSInspectionConfigurations"``

Grants permission to retrieve the metadata for tls inspection configurations

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListTLSInspectionConfigurations.html

#### Defined in

actions/network-firewall.ts:154

___

### ListTagsForResource

• **ListTagsForResource** = ``"network-firewall:ListTagsForResource"``

Grants permission to retrieve the tags for a resource

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/network-firewall.ts:160

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"network-firewall:PutResourcePolicy"``

Grants permission to put a resource policy for a firewall policy or rule group

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/network-firewall.ts:166

___

### TagResource

• **TagResource** = ``"network-firewall:TagResource"``

Grants permission to attach tags to a resource

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_TagResource.html

#### Defined in

actions/network-firewall.ts:172

___

### UntagResource

• **UntagResource** = ``"network-firewall:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UntagResource.html

#### Defined in

actions/network-firewall.ts:178

___

### UpdateFirewallDeleteProtection

• **UpdateFirewallDeleteProtection** = ``"network-firewall:UpdateFirewallDeleteProtection"``

Grants permission to add or remove delete protection for a firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallDeleteProtection.html

#### Defined in

actions/network-firewall.ts:184

___

### UpdateFirewallDescription

• **UpdateFirewallDescription** = ``"network-firewall:UpdateFirewallDescription"``

Grants permission to modify the description for a firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallDescription.html

#### Defined in

actions/network-firewall.ts:190

___

### UpdateFirewallEncryptionConfiguration

• **UpdateFirewallEncryptionConfiguration** = ``"network-firewall:UpdateFirewallEncryptionConfiguration"``

Grants permission to modify the encryption configuration of a firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallEncryptionConfiguration.html

#### Defined in

actions/network-firewall.ts:196

___

### UpdateFirewallPolicy

• **UpdateFirewallPolicy** = ``"network-firewall:UpdateFirewallPolicy"``

Grants permission to modify a firewall policy

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallPolicy.html

#### Defined in

actions/network-firewall.ts:202

___

### UpdateFirewallPolicyChangeProtection

• **UpdateFirewallPolicyChangeProtection** = ``"network-firewall:UpdateFirewallPolicyChangeProtection"``

Grants permission to add or remove firewall policy change protection for a fire
wall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallPolicyChangeProtection.html

#### Defined in

actions/network-firewall.ts:209

___

### UpdateLoggingConfiguration

• **UpdateLoggingConfiguration** = ``"network-firewall:UpdateLoggingConfiguration"``

Grants permission to modify the logging configuration of a firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateLoggingConfiguration.html

#### Defined in

actions/network-firewall.ts:215

___

### UpdateRuleGroup

• **UpdateRuleGroup** = ``"network-firewall:UpdateRuleGroup"``

Grants permission to modify a rule group

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateRuleGroup.html

#### Defined in

actions/network-firewall.ts:221

___

### UpdateSubnetChangeProtection

• **UpdateSubnetChangeProtection** = ``"network-firewall:UpdateSubnetChangeProtection"``

Grants permission to add or remove subnet change protection for a firewall

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateSubnetChangeProtection.html

#### Defined in

actions/network-firewall.ts:227

___

### UpdateTLSInspectionConfiguration

• **UpdateTLSInspectionConfiguration** = ``"network-firewall:UpdateTLSInspectionConfiguration"``

Grants permission to modify a tls inspection configuration

See https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateTLSInspectionConfiguration.html

#### Defined in

actions/network-firewall.ts:233
