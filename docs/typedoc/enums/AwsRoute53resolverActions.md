[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRoute53resolverActions

# Enumeration: AwsRoute53resolverActions

All IAM policy actions for Amazon Route 53 Resolver (ROUTE53RESOLVER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53resolver.html

2024-02-12T09:59:02.096Z

## Table of contents

### Enumeration Members

- [AssociateFirewallRuleGroup](AwsRoute53resolverActions.md#associatefirewallrulegroup)
- [AssociateResolverEndpointIpAddress](AwsRoute53resolverActions.md#associateresolverendpointipaddress)
- [AssociateResolverQueryLogConfig](AwsRoute53resolverActions.md#associateresolverquerylogconfig)
- [AssociateResolverRule](AwsRoute53resolverActions.md#associateresolverrule)
- [CreateFirewallDomainList](AwsRoute53resolverActions.md#createfirewalldomainlist)
- [CreateFirewallRule](AwsRoute53resolverActions.md#createfirewallrule)
- [CreateFirewallRuleGroup](AwsRoute53resolverActions.md#createfirewallrulegroup)
- [CreateOutpostResolver](AwsRoute53resolverActions.md#createoutpostresolver)
- [CreateResolverEndpoint](AwsRoute53resolverActions.md#createresolverendpoint)
- [CreateResolverQueryLogConfig](AwsRoute53resolverActions.md#createresolverquerylogconfig)
- [CreateResolverRule](AwsRoute53resolverActions.md#createresolverrule)
- [DeleteFirewallDomainList](AwsRoute53resolverActions.md#deletefirewalldomainlist)
- [DeleteFirewallRule](AwsRoute53resolverActions.md#deletefirewallrule)
- [DeleteFirewallRuleGroup](AwsRoute53resolverActions.md#deletefirewallrulegroup)
- [DeleteOutpostResolver](AwsRoute53resolverActions.md#deleteoutpostresolver)
- [DeleteResolverEndpoint](AwsRoute53resolverActions.md#deleteresolverendpoint)
- [DeleteResolverQueryLogConfig](AwsRoute53resolverActions.md#deleteresolverquerylogconfig)
- [DeleteResolverRule](AwsRoute53resolverActions.md#deleteresolverrule)
- [DisassociateFirewallRuleGroup](AwsRoute53resolverActions.md#disassociatefirewallrulegroup)
- [DisassociateResolverEndpointIpAddress](AwsRoute53resolverActions.md#disassociateresolverendpointipaddress)
- [DisassociateResolverQueryLogConfig](AwsRoute53resolverActions.md#disassociateresolverquerylogconfig)
- [DisassociateResolverRule](AwsRoute53resolverActions.md#disassociateresolverrule)
- [GetFirewallConfig](AwsRoute53resolverActions.md#getfirewallconfig)
- [GetFirewallDomainList](AwsRoute53resolverActions.md#getfirewalldomainlist)
- [GetFirewallRuleGroup](AwsRoute53resolverActions.md#getfirewallrulegroup)
- [GetFirewallRuleGroupAssociation](AwsRoute53resolverActions.md#getfirewallrulegroupassociation)
- [GetFirewallRuleGroupPolicy](AwsRoute53resolverActions.md#getfirewallrulegrouppolicy)
- [GetOutpostResolver](AwsRoute53resolverActions.md#getoutpostresolver)
- [GetResolverConfig](AwsRoute53resolverActions.md#getresolverconfig)
- [GetResolverDnssecConfig](AwsRoute53resolverActions.md#getresolverdnssecconfig)
- [GetResolverEndpoint](AwsRoute53resolverActions.md#getresolverendpoint)
- [GetResolverQueryLogConfig](AwsRoute53resolverActions.md#getresolverquerylogconfig)
- [GetResolverQueryLogConfigAssociation](AwsRoute53resolverActions.md#getresolverquerylogconfigassociation)
- [GetResolverQueryLogConfigPolicy](AwsRoute53resolverActions.md#getresolverquerylogconfigpolicy)
- [GetResolverRule](AwsRoute53resolverActions.md#getresolverrule)
- [GetResolverRuleAssociation](AwsRoute53resolverActions.md#getresolverruleassociation)
- [GetResolverRulePolicy](AwsRoute53resolverActions.md#getresolverrulepolicy)
- [ImportFirewallDomains](AwsRoute53resolverActions.md#importfirewalldomains)
- [ListFirewallConfigs](AwsRoute53resolverActions.md#listfirewallconfigs)
- [ListFirewallDomainLists](AwsRoute53resolverActions.md#listfirewalldomainlists)
- [ListFirewallDomains](AwsRoute53resolverActions.md#listfirewalldomains)
- [ListFirewallRuleGroupAssociations](AwsRoute53resolverActions.md#listfirewallrulegroupassociations)
- [ListFirewallRuleGroups](AwsRoute53resolverActions.md#listfirewallrulegroups)
- [ListFirewallRules](AwsRoute53resolverActions.md#listfirewallrules)
- [ListOutpostResolvers](AwsRoute53resolverActions.md#listoutpostresolvers)
- [ListResolverConfigs](AwsRoute53resolverActions.md#listresolverconfigs)
- [ListResolverDnssecConfigs](AwsRoute53resolverActions.md#listresolverdnssecconfigs)
- [ListResolverEndpointIpAddresses](AwsRoute53resolverActions.md#listresolverendpointipaddresses)
- [ListResolverEndpoints](AwsRoute53resolverActions.md#listresolverendpoints)
- [ListResolverQueryLogConfigAssociations](AwsRoute53resolverActions.md#listresolverquerylogconfigassociations)
- [ListResolverQueryLogConfigs](AwsRoute53resolverActions.md#listresolverquerylogconfigs)
- [ListResolverRuleAssociations](AwsRoute53resolverActions.md#listresolverruleassociations)
- [ListResolverRules](AwsRoute53resolverActions.md#listresolverrules)
- [ListTagsForResource](AwsRoute53resolverActions.md#listtagsforresource)
- [PutFirewallRuleGroupPolicy](AwsRoute53resolverActions.md#putfirewallrulegrouppolicy)
- [PutResolverQueryLogConfigPolicy](AwsRoute53resolverActions.md#putresolverquerylogconfigpolicy)
- [PutResolverRulePolicy](AwsRoute53resolverActions.md#putresolverrulepolicy)
- [TagResource](AwsRoute53resolverActions.md#tagresource)
- [UntagResource](AwsRoute53resolverActions.md#untagresource)
- [UpdateFirewallConfig](AwsRoute53resolverActions.md#updatefirewallconfig)
- [UpdateFirewallDomains](AwsRoute53resolverActions.md#updatefirewalldomains)
- [UpdateFirewallRule](AwsRoute53resolverActions.md#updatefirewallrule)
- [UpdateFirewallRuleGroupAssociation](AwsRoute53resolverActions.md#updatefirewallrulegroupassociation)
- [UpdateOutpostResolver](AwsRoute53resolverActions.md#updateoutpostresolver)
- [UpdateResolverConfig](AwsRoute53resolverActions.md#updateresolverconfig)
- [UpdateResolverDnssecConfig](AwsRoute53resolverActions.md#updateresolverdnssecconfig)
- [UpdateResolverEndpoint](AwsRoute53resolverActions.md#updateresolverendpoint)
- [UpdateResolverRule](AwsRoute53resolverActions.md#updateresolverrule)

## Enumeration Members

### AssociateFirewallRuleGroup

• **AssociateFirewallRuleGroup** = ``"route53resolver:AssociateFirewallRuleGroup"``

Grants permission to associate an Amazon VPC with a specified firewall rule gro
up

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateFirewallRuleGroup.html

#### Defined in

actions/route53resolver.ts:18

___

### AssociateResolverEndpointIpAddress

• **AssociateResolverEndpointIpAddress** = ``"route53resolver:AssociateResolverEndpointIpAddress"``

Grants permission to associate a specified IP address with a Resolver endpoint.
This is an IP address that DNS queries pass through on the way to your network
(outbound) or your VPCs (inbound)

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html

#### Defined in

actions/route53resolver.ts:26

___

### AssociateResolverQueryLogConfig

• **AssociateResolverQueryLogConfig** = ``"route53resolver:AssociateResolverQueryLogConfig"``

Grants permission to associate an Amazon VPC with a specified query logging con
figuration

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html

#### Defined in

actions/route53resolver.ts:33

___

### AssociateResolverRule

• **AssociateResolverRule** = ``"route53resolver:AssociateResolverRule"``

Grants permission to associate a specified Resolver rule with a specified VPC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html

#### Defined in

actions/route53resolver.ts:39

___

### CreateFirewallDomainList

• **CreateFirewallDomainList** = ``"route53resolver:CreateFirewallDomainList"``

Grants permission to create a Firewall domain list

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateFirewallDomainList.html

#### Defined in

actions/route53resolver.ts:45

___

### CreateFirewallRule

• **CreateFirewallRule** = ``"route53resolver:CreateFirewallRule"``

Grants permission to create a Firewall rule within a Firewall rule group

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateFirewallRule.html

#### Defined in

actions/route53resolver.ts:51

___

### CreateFirewallRuleGroup

• **CreateFirewallRuleGroup** = ``"route53resolver:CreateFirewallRuleGroup"``

Grants permission to create a Firewall rule group

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateFirewallRuleGroup.html

#### Defined in

actions/route53resolver.ts:57

___

### CreateOutpostResolver

• **CreateOutpostResolver** = ``"route53resolver:CreateOutpostResolver"``

Grants permission to create a Route 53 Resolver on Outposts

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateOutpostResolver.html

#### Defined in

actions/route53resolver.ts:63

___

### CreateResolverEndpoint

• **CreateResolverEndpoint** = ``"route53resolver:CreateResolverEndpoint"``

Grants permission to create a Resolver endpoint. There are two types of Resolve
r endpoints, inbound and outbound

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html

#### Defined in

actions/route53resolver.ts:70

___

### CreateResolverQueryLogConfig

• **CreateResolverQueryLogConfig** = ``"route53resolver:CreateResolverQueryLogConfig"``

Grants permission to create a Resolver query logging configuration, which defin
es where you want Resolver to save DNS query logs that originate in your VPCs

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html

#### Defined in

actions/route53resolver.ts:77

___

### CreateResolverRule

• **CreateResolverRule** = ``"route53resolver:CreateResolverRule"``

Grants permission to define how to route queries originating from your VPC out
of the VPC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html

#### Defined in

actions/route53resolver.ts:84

___

### DeleteFirewallDomainList

• **DeleteFirewallDomainList** = ``"route53resolver:DeleteFirewallDomainList"``

Grants permission to delete a Firewall domain list

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteFirewallDomainList.html

#### Defined in

actions/route53resolver.ts:90

___

### DeleteFirewallRule

• **DeleteFirewallRule** = ``"route53resolver:DeleteFirewallRule"``

Grants permission to delete a Firewall rule within a Firewall rule group

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteFirewallRule.html

#### Defined in

actions/route53resolver.ts:96

___

### DeleteFirewallRuleGroup

• **DeleteFirewallRuleGroup** = ``"route53resolver:DeleteFirewallRuleGroup"``

Grants permission to delete a Firewall rule group

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteFirewallRuleGroup.html

#### Defined in

actions/route53resolver.ts:102

___

### DeleteOutpostResolver

• **DeleteOutpostResolver** = ``"route53resolver:DeleteOutpostResolver"``

Grants permission to delete a Route 53 Resolver on Outposts

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteOutpostResolver.html

#### Defined in

actions/route53resolver.ts:108

___

### DeleteResolverEndpoint

• **DeleteResolverEndpoint** = ``"route53resolver:DeleteResolverEndpoint"``

Grants permission to delete a Resolver endpoint. The effect of deleting a Resol
ver endpoint depends on whether it's an inbound or an outbound endpoint

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html

#### Defined in

actions/route53resolver.ts:115

___

### DeleteResolverQueryLogConfig

• **DeleteResolverQueryLogConfig** = ``"route53resolver:DeleteResolverQueryLogConfig"``

Grants permission to delete a Resolver query logging configuration

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html

#### Defined in

actions/route53resolver.ts:121

___

### DeleteResolverRule

• **DeleteResolverRule** = ``"route53resolver:DeleteResolverRule"``

Grants permission to delete a Resolver rule

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html

#### Defined in

actions/route53resolver.ts:127

___

### DisassociateFirewallRuleGroup

• **DisassociateFirewallRuleGroup** = ``"route53resolver:DisassociateFirewallRuleGroup"``

Grants permission to remove the association between a specified Firewall rule g
roup and a specified VPC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateFirewallRuleGroup.html

#### Defined in

actions/route53resolver.ts:134

___

### DisassociateResolverEndpointIpAddress

• **DisassociateResolverEndpointIpAddress** = ``"route53resolver:DisassociateResolverEndpointIpAddress"``

Grants permission to remove a specified IP address from a Resolver endpoint. Th
is is an IP address that DNS queries pass through on the way to your network (o
utbound) or your VPCs (inbound)

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html

#### Defined in

actions/route53resolver.ts:142

___

### DisassociateResolverQueryLogConfig

• **DisassociateResolverQueryLogConfig** = ``"route53resolver:DisassociateResolverQueryLogConfig"``

Grants permission to remove the association between a specified Resolver query
logging configuration and a specified VPC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html

#### Defined in

actions/route53resolver.ts:149

___

### DisassociateResolverRule

• **DisassociateResolverRule** = ``"route53resolver:DisassociateResolverRule"``

Grants permission to remove the association between a specified Resolver rule a
nd a specified VPC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html

#### Defined in

actions/route53resolver.ts:156

___

### GetFirewallConfig

• **GetFirewallConfig** = ``"route53resolver:GetFirewallConfig"``

Grants permission to get information about a specified Firewall config

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallConfig.html

#### Defined in

actions/route53resolver.ts:162

___

### GetFirewallDomainList

• **GetFirewallDomainList** = ``"route53resolver:GetFirewallDomainList"``

Grants permission to get information about a specified Firewall domain list

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallDomainList.html

#### Defined in

actions/route53resolver.ts:168

___

### GetFirewallRuleGroup

• **GetFirewallRuleGroup** = ``"route53resolver:GetFirewallRuleGroup"``

Grants permission to get information about a specified Firewall rule group

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallRuleGroup.html

#### Defined in

actions/route53resolver.ts:174

___

### GetFirewallRuleGroupAssociation

• **GetFirewallRuleGroupAssociation** = ``"route53resolver:GetFirewallRuleGroupAssociation"``

Grants permission to get information about an association between a specified F
irewall rule group and a VPC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallRuleGroupAssociation.html

#### Defined in

actions/route53resolver.ts:181

___

### GetFirewallRuleGroupPolicy

• **GetFirewallRuleGroupPolicy** = ``"route53resolver:GetFirewallRuleGroupPolicy"``

Grants permission to get information about a specified Firewall rule group poli
cy, which specifies the Firewall rule group operations and resources that you w
ant to allow another AWS account to use

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallRuleGroupPolicy.html

#### Defined in

actions/route53resolver.ts:189

___

### GetOutpostResolver

• **GetOutpostResolver** = ``"route53resolver:GetOutpostResolver"``

Grants permission to get information about a specified Route 53 Resolver on Out
posts

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetOutpostResolver.html

#### Defined in

actions/route53resolver.ts:196

___

### GetResolverConfig

• **GetResolverConfig** = ``"route53resolver:GetResolverConfig"``

Grants permission to get the Resolver Config status within the specified resour
ce

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverConfig.html

#### Defined in

actions/route53resolver.ts:203

___

### GetResolverDnssecConfig

• **GetResolverDnssecConfig** = ``"route53resolver:GetResolverDnssecConfig"``

Grants permission to get the DNSSEC validation support status for DNS queries w
ithin the specified resource

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverDnssecConfig.html

#### Defined in

actions/route53resolver.ts:210

___

### GetResolverEndpoint

• **GetResolverEndpoint** = ``"route53resolver:GetResolverEndpoint"``

Grants permission to get information about a specified Resolver endpoint, such
as whether it's an inbound or an outbound endpoint, and the IP addresses in you
r VPC that DNS queries are forwarded to on the way into or out of your VPC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html

#### Defined in

actions/route53resolver.ts:218

___

### GetResolverQueryLogConfig

• **GetResolverQueryLogConfig** = ``"route53resolver:GetResolverQueryLogConfig"``

Grants permission to get information about a specified Resolver query logging c
onfiguration, such as the number of VPCs that the configuration is logging quer
ies for and the location that logs are sent to

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html

#### Defined in

actions/route53resolver.ts:226

___

### GetResolverQueryLogConfigAssociation

• **GetResolverQueryLogConfigAssociation** = ``"route53resolver:GetResolverQueryLogConfigAssociation"``

Grants permission to get information about a specified association between a Re
solver query logging configuration and an Amazon VPC. When you associate a VPC
with a query logging configuration, Resolver logs DNS queries that originate in
that VPC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html

#### Defined in

actions/route53resolver.ts:235

___

### GetResolverQueryLogConfigPolicy

• **GetResolverQueryLogConfigPolicy** = ``"route53resolver:GetResolverQueryLogConfigPolicy"``

Grants permission to get information about a specified Resolver query logging p
olicy, which specifies the Resolver query logging operations and resources that
you want to allow another AWS account to use

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigPolicy.html

#### Defined in

actions/route53resolver.ts:243

___

### GetResolverRule

• **GetResolverRule** = ``"route53resolver:GetResolverRule"``

Grants permission to get information about a specified Resolver rule, such as t
he domain name that the rule forwards DNS queries for and the IP address that q
ueries are forwarded to

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html

#### Defined in

actions/route53resolver.ts:251

___

### GetResolverRuleAssociation

• **GetResolverRuleAssociation** = ``"route53resolver:GetResolverRuleAssociation"``

Grants permission to get information about an association between a specified R
esolver rule and a VPC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html

#### Defined in

actions/route53resolver.ts:258

___

### GetResolverRulePolicy

• **GetResolverRulePolicy** = ``"route53resolver:GetResolverRulePolicy"``

Grants permission to get information about a Resolver rule policy, which specif
ies the Resolver operations and resources that you want to allow another AWS ac
count to use

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRulePolicy.html

#### Defined in

actions/route53resolver.ts:266

___

### ImportFirewallDomains

• **ImportFirewallDomains** = ``"route53resolver:ImportFirewallDomains"``

Grants permission to add, remove or replace Firewall domains in a Firewall doma
in list

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ImportFirewallDomains.html

#### Defined in

actions/route53resolver.ts:273

___

### ListFirewallConfigs

• **ListFirewallConfigs** = ``"route53resolver:ListFirewallConfigs"``

Grants permission to list all the Firewall config that current AWS account is a
ble to check

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallConfigs.html

#### Defined in

actions/route53resolver.ts:280

___

### ListFirewallDomainLists

• **ListFirewallDomainLists** = ``"route53resolver:ListFirewallDomainLists"``

Grants permission to list all the Firewall domain list that current AWS account
is able to use

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallDomainLists.html

#### Defined in

actions/route53resolver.ts:287

___

### ListFirewallDomains

• **ListFirewallDomains** = ``"route53resolver:ListFirewallDomains"``

Grants permission to list all the Firewall domain under a speicfied Firewall do
main list

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallDomains.html

#### Defined in

actions/route53resolver.ts:294

___

### ListFirewallRuleGroupAssociations

• **ListFirewallRuleGroupAssociations** = ``"route53resolver:ListFirewallRuleGroupAssociations"``

Grants permission to list information about associations between Amazon VPCs an
d Firewall rule group

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallRuleGroupAssociations.html

#### Defined in

actions/route53resolver.ts:301

___

### ListFirewallRuleGroups

• **ListFirewallRuleGroups** = ``"route53resolver:ListFirewallRuleGroups"``

Grants permission to list all the Firewall rule group that current AWS account
is able to use

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallRuleGroups.html

#### Defined in

actions/route53resolver.ts:308

___

### ListFirewallRules

• **ListFirewallRules** = ``"route53resolver:ListFirewallRules"``

Grants permission to list all the Firewall rule under a speicfied Firewall rule
group

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallRules.html

#### Defined in

actions/route53resolver.ts:315

___

### ListOutpostResolvers

• **ListOutpostResolvers** = ``"route53resolver:ListOutpostResolvers"``

Grants permission to list all instances of Route 53 Resolver on Outposts that w
ere created using the current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListOutpostResolvers.html

#### Defined in

actions/route53resolver.ts:322

___

### ListResolverConfigs

• **ListResolverConfigs** = ``"route53resolver:ListResolverConfigs"``

Grants permission to list Resolver Config statuses

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverConfigs.html

#### Defined in

actions/route53resolver.ts:328

___

### ListResolverDnssecConfigs

• **ListResolverDnssecConfigs** = ``"route53resolver:ListResolverDnssecConfigs"``

Grants permission to list the DNSSEC validation support status for DNS queries

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html

#### Defined in

actions/route53resolver.ts:334

___

### ListResolverEndpointIpAddresses

• **ListResolverEndpointIpAddresses** = ``"route53resolver:ListResolverEndpointIpAddresses"``

Grants permission to list the IP addresses that DNS queries pass through on the
way to your network (outbound) or your VPCs (inbound) for a specified Resolver
endpoint

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpointIpAddresses.html

#### Defined in

actions/route53resolver.ts:342

___

### ListResolverEndpoints

• **ListResolverEndpoints** = ``"route53resolver:ListResolverEndpoints"``

Grants permission to list all the Resolver endpoints that were created using th
e current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html

#### Defined in

actions/route53resolver.ts:349

___

### ListResolverQueryLogConfigAssociations

• **ListResolverQueryLogConfigAssociations** = ``"route53resolver:ListResolverQueryLogConfigAssociations"``

Grants permission to list information about associations between Amazon VPCs an
d query logging configurations

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html

#### Defined in

actions/route53resolver.ts:356

___

### ListResolverQueryLogConfigs

• **ListResolverQueryLogConfigs** = ``"route53resolver:ListResolverQueryLogConfigs"``

Grants permission to list information about the specified query logging configu
rations, which define where you want Resolver to save DNS query logs and specif
y the VPCs that you want to log queries for

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html

#### Defined in

actions/route53resolver.ts:364

___

### ListResolverRuleAssociations

• **ListResolverRuleAssociations** = ``"route53resolver:ListResolverRuleAssociations"``

Grants permission to list the associations that were created between Resolver r
ules and VPCs using the current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html

#### Defined in

actions/route53resolver.ts:371

___

### ListResolverRules

• **ListResolverRules** = ``"route53resolver:ListResolverRules"``

Grants permission to list the Resolver rules that were created using the curren
t AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html

#### Defined in

actions/route53resolver.ts:378

___

### ListTagsForResource

• **ListTagsForResource** = ``"route53resolver:ListTagsForResource"``

Grants permission to list the tags that you associated with the specified resou
rce

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListTagsForResource.html

#### Defined in

actions/route53resolver.ts:385

___

### PutFirewallRuleGroupPolicy

• **PutFirewallRuleGroupPolicy** = ``"route53resolver:PutFirewallRuleGroupPolicy"``

Grants permission to specify an AWS account that you want to share a Firewall r
ule group with, the Firewall rule group that you want to share, and the operati
ons that you want the account to be able to perform on the configuration

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutFirewallRuleGroupPolicy.html

#### Defined in

actions/route53resolver.ts:393

___

### PutResolverQueryLogConfigPolicy

• **PutResolverQueryLogConfigPolicy** = ``"route53resolver:PutResolverQueryLogConfigPolicy"``

Grants permission to specify an AWS account that you want to share a query logg
ing configuration with, the query logging configuration that you want to share,
and the operations that you want the account to be able to perform on the confi
guration

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverQueryLogConfigPolicy.html

#### Defined in

actions/route53resolver.ts:402

___

### PutResolverRulePolicy

• **PutResolverRulePolicy** = ``"route53resolver:PutResolverRulePolicy"``

Grants permission to specify an AWS account that you want to share rules with,
the Resolver rules that you want to share, and the operations that you want the
account to be able to perform on those rules

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverRulePolicy.html

#### Defined in

actions/route53resolver.ts:410

___

### TagResource

• **TagResource** = ``"route53resolver:TagResource"``

Grants permission to add one or more tags to a specified resource

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TagResource.html

#### Defined in

actions/route53resolver.ts:416

___

### UntagResource

• **UntagResource** = ``"route53resolver:UntagResource"``

Grants permission to remove one or more tags from a specified resource

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UntagResource.html

#### Defined in

actions/route53resolver.ts:422

___

### UpdateFirewallConfig

• **UpdateFirewallConfig** = ``"route53resolver:UpdateFirewallConfig"``

Grants permission to update selected settings for an Firewall config

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallConfig.html

#### Defined in

actions/route53resolver.ts:428

___

### UpdateFirewallDomains

• **UpdateFirewallDomains** = ``"route53resolver:UpdateFirewallDomains"``

Grants permission to add, remove or replace Firewall domains in a Firewall doma
in list

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallDomains.html

#### Defined in

actions/route53resolver.ts:435

___

### UpdateFirewallRule

• **UpdateFirewallRule** = ``"route53resolver:UpdateFirewallRule"``

Grants permission to update selected settings for an Firewall rule in a Firewal
l rule group

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallRule.html

#### Defined in

actions/route53resolver.ts:442

___

### UpdateFirewallRuleGroupAssociation

• **UpdateFirewallRuleGroupAssociation** = ``"route53resolver:UpdateFirewallRuleGroupAssociation"``

Grants permission to update selected settings for an Firewall rule group associ
ation

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallRuleGroupAssociation.html

#### Defined in

actions/route53resolver.ts:449

___

### UpdateOutpostResolver

• **UpdateOutpostResolver** = ``"route53resolver:UpdateOutpostResolver"``

Grants permission to update seletected settings for a specified Route 53 Resolv
er on Outposts

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateOutpostResolver.html

#### Defined in

actions/route53resolver.ts:456

___

### UpdateResolverConfig

• **UpdateResolverConfig** = ``"route53resolver:UpdateResolverConfig"``

Grants permission to update the Resolver Config status within the specified res
ource

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverConfig.html

#### Defined in

actions/route53resolver.ts:463

___

### UpdateResolverDnssecConfig

• **UpdateResolverDnssecConfig** = ``"route53resolver:UpdateResolverDnssecConfig"``

Grants permission to update the DNSSEC validation support status for DNS querie
s within the specified resource

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverDnssecConfig.html

#### Defined in

actions/route53resolver.ts:470

___

### UpdateResolverEndpoint

• **UpdateResolverEndpoint** = ``"route53resolver:UpdateResolverEndpoint"``

Grants permission to update selected settings for an inbound or an outbound Res
olver endpoint

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html

#### Defined in

actions/route53resolver.ts:477

___

### UpdateResolverRule

• **UpdateResolverRule** = ``"route53resolver:UpdateResolverRule"``

Grants permission to update settings for a specified Resolver rule

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html

#### Defined in

actions/route53resolver.ts:483
