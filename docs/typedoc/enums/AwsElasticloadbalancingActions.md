[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsElasticloadbalancingActions

# Enumeration: AwsElasticloadbalancingActions

All IAM policy actions for AWS Elastic Load Balancing V2 (ELASTICLOADBALANCING)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticloadbalancingv2.html

2024-02-12T09:57:12.045Z

## Table of contents

### Enumeration Members

- [AddListenerCertificates](AwsElasticloadbalancingActions.md#addlistenercertificates)
- [AddTags](AwsElasticloadbalancingActions.md#addtags)
- [AddTrustStoreRevocations](AwsElasticloadbalancingActions.md#addtruststorerevocations)
- [CreateListener](AwsElasticloadbalancingActions.md#createlistener)
- [CreateLoadBalancer](AwsElasticloadbalancingActions.md#createloadbalancer)
- [CreateRule](AwsElasticloadbalancingActions.md#createrule)
- [CreateTargetGroup](AwsElasticloadbalancingActions.md#createtargetgroup)
- [CreateTrustStore](AwsElasticloadbalancingActions.md#createtruststore)
- [DeleteListener](AwsElasticloadbalancingActions.md#deletelistener)
- [DeleteLoadBalancer](AwsElasticloadbalancingActions.md#deleteloadbalancer)
- [DeleteRule](AwsElasticloadbalancingActions.md#deleterule)
- [DeleteTargetGroup](AwsElasticloadbalancingActions.md#deletetargetgroup)
- [DeleteTrustStore](AwsElasticloadbalancingActions.md#deletetruststore)
- [DeregisterTargets](AwsElasticloadbalancingActions.md#deregistertargets)
- [DescribeAccountLimits](AwsElasticloadbalancingActions.md#describeaccountlimits)
- [DescribeListenerCertificates](AwsElasticloadbalancingActions.md#describelistenercertificates)
- [DescribeListeners](AwsElasticloadbalancingActions.md#describelisteners)
- [DescribeLoadBalancerAttributes](AwsElasticloadbalancingActions.md#describeloadbalancerattributes)
- [DescribeLoadBalancers](AwsElasticloadbalancingActions.md#describeloadbalancers)
- [DescribeRules](AwsElasticloadbalancingActions.md#describerules)
- [DescribeSSLPolicies](AwsElasticloadbalancingActions.md#describesslpolicies)
- [DescribeTags](AwsElasticloadbalancingActions.md#describetags)
- [DescribeTargetGroupAttributes](AwsElasticloadbalancingActions.md#describetargetgroupattributes)
- [DescribeTargetGroups](AwsElasticloadbalancingActions.md#describetargetgroups)
- [DescribeTargetHealth](AwsElasticloadbalancingActions.md#describetargethealth)
- [DescribeTrustStoreAssociations](AwsElasticloadbalancingActions.md#describetruststoreassociations)
- [DescribeTrustStoreRevocations](AwsElasticloadbalancingActions.md#describetruststorerevocations)
- [DescribeTrustStores](AwsElasticloadbalancingActions.md#describetruststores)
- [GetTrustStoreCaCertificatesBundle](AwsElasticloadbalancingActions.md#gettruststorecacertificatesbundle)
- [GetTrustStoreRevocationContent](AwsElasticloadbalancingActions.md#gettruststorerevocationcontent)
- [ModifyListener](AwsElasticloadbalancingActions.md#modifylistener)
- [ModifyLoadBalancerAttributes](AwsElasticloadbalancingActions.md#modifyloadbalancerattributes)
- [ModifyRule](AwsElasticloadbalancingActions.md#modifyrule)
- [ModifyTargetGroup](AwsElasticloadbalancingActions.md#modifytargetgroup)
- [ModifyTargetGroupAttributes](AwsElasticloadbalancingActions.md#modifytargetgroupattributes)
- [ModifyTrustStore](AwsElasticloadbalancingActions.md#modifytruststore)
- [RegisterTargets](AwsElasticloadbalancingActions.md#registertargets)
- [RemoveListenerCertificates](AwsElasticloadbalancingActions.md#removelistenercertificates)
- [RemoveTags](AwsElasticloadbalancingActions.md#removetags)
- [RemoveTrustStoreRevocations](AwsElasticloadbalancingActions.md#removetruststorerevocations)
- [SetIpAddressType](AwsElasticloadbalancingActions.md#setipaddresstype)
- [SetRulePriorities](AwsElasticloadbalancingActions.md#setrulepriorities)
- [SetSecurityGroups](AwsElasticloadbalancingActions.md#setsecuritygroups)
- [SetSubnets](AwsElasticloadbalancingActions.md#setsubnets)
- [SetWebAcl](AwsElasticloadbalancingActions.md#setwebacl)

## Enumeration Members

### AddListenerCertificates

• **AddListenerCertificates** = ``"elasticloadbalancing:AddListenerCertificates"``

Grants permission to add the specified certificates to the specified secure lis
tener

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddListenerCertificates.html

#### Defined in

actions/elasticloadbalancing.ts:18

___

### AddTags

• **AddTags** = ``"elasticloadbalancing:AddTags"``

Grants permission to add the specified tags to the specified load balancer. Eac
h load balancer can have a maximum of 10 tags

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddTags.html

#### Defined in

actions/elasticloadbalancing.ts:25

___

### AddTrustStoreRevocations

• **AddTrustStoreRevocations** = ``"elasticloadbalancing:AddTrustStoreRevocations"``

Grants permission to add revocations to a trust store

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddTrustStoreRevocations.html

#### Defined in

actions/elasticloadbalancing.ts:31

___

### CreateListener

• **CreateListener** = ``"elasticloadbalancing:CreateListener"``

Grants permission to create a listener for the specified Application Load Balan
cer

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateListener.html

#### Defined in

actions/elasticloadbalancing.ts:38

___

### CreateLoadBalancer

• **CreateLoadBalancer** = ``"elasticloadbalancing:CreateLoadBalancer"``

Grants permission to create a load balancer

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateLoadBalancer.html

#### Defined in

actions/elasticloadbalancing.ts:44

___

### CreateRule

• **CreateRule** = ``"elasticloadbalancing:CreateRule"``

Grants permission to create a rule for the specified listener

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateRule.html

#### Defined in

actions/elasticloadbalancing.ts:50

___

### CreateTargetGroup

• **CreateTargetGroup** = ``"elasticloadbalancing:CreateTargetGroup"``

Grants permission to create a target group

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html

#### Defined in

actions/elasticloadbalancing.ts:56

___

### CreateTrustStore

• **CreateTrustStore** = ``"elasticloadbalancing:CreateTrustStore"``

Grants permission to create a trust store

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTrustStore.html

#### Defined in

actions/elasticloadbalancing.ts:62

___

### DeleteListener

• **DeleteListener** = ``"elasticloadbalancing:DeleteListener"``

Grants permission to delete the specified listener

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteListener.html

#### Defined in

actions/elasticloadbalancing.ts:68

___

### DeleteLoadBalancer

• **DeleteLoadBalancer** = ``"elasticloadbalancing:DeleteLoadBalancer"``

Grants permission to delete the specified load balancer

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteLoadBalancer.html

#### Defined in

actions/elasticloadbalancing.ts:74

___

### DeleteRule

• **DeleteRule** = ``"elasticloadbalancing:DeleteRule"``

Grants permission to delete the specified rule

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteRule.html

#### Defined in

actions/elasticloadbalancing.ts:80

___

### DeleteTargetGroup

• **DeleteTargetGroup** = ``"elasticloadbalancing:DeleteTargetGroup"``

Grants permission to delete the specified target group

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteTargetGroup.html

#### Defined in

actions/elasticloadbalancing.ts:86

___

### DeleteTrustStore

• **DeleteTrustStore** = ``"elasticloadbalancing:DeleteTrustStore"``

Grants permission to delete the specified trust store

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteTrustStore.html

#### Defined in

actions/elasticloadbalancing.ts:92

___

### DeregisterTargets

• **DeregisterTargets** = ``"elasticloadbalancing:DeregisterTargets"``

Grants permission to deregister the specified targets from the specified target
group

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeregisterTargets.html

#### Defined in

actions/elasticloadbalancing.ts:99

___

### DescribeAccountLimits

• **DescribeAccountLimits** = ``"elasticloadbalancing:DescribeAccountLimits"``

Grants permission to describe the Elastic Load Balancing resource limits for th
e AWS account

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeAccountLimits.html

#### Defined in

actions/elasticloadbalancing.ts:106

___

### DescribeListenerCertificates

• **DescribeListenerCertificates** = ``"elasticloadbalancing:DescribeListenerCertificates"``

Grants permission to describe the certificates for the specified secure listene
r

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListenerCertificates.html

#### Defined in

actions/elasticloadbalancing.ts:113

___

### DescribeListeners

• **DescribeListeners** = ``"elasticloadbalancing:DescribeListeners"``

Grants permission to describe the specified listeners or the listeners for the
specified Application Load Balancer

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListeners.html

#### Defined in

actions/elasticloadbalancing.ts:120

___

### DescribeLoadBalancerAttributes

• **DescribeLoadBalancerAttributes** = ``"elasticloadbalancing:DescribeLoadBalancerAttributes"``

Grants permission to describe the attributes for the specified load balancer

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancerAttributes.html

#### Defined in

actions/elasticloadbalancing.ts:126

___

### DescribeLoadBalancers

• **DescribeLoadBalancers** = ``"elasticloadbalancing:DescribeLoadBalancers"``

Grants permission to describe the specified the load balancers. If no load bala
ncers are specified, the call describes all of your load balancers

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html

#### Defined in

actions/elasticloadbalancing.ts:133

___

### DescribeRules

• **DescribeRules** = ``"elasticloadbalancing:DescribeRules"``

Grants permission to describe the specified rules or the rules for the specifie
d listener

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeRules.html

#### Defined in

actions/elasticloadbalancing.ts:140

___

### DescribeSSLPolicies

• **DescribeSSLPolicies** = ``"elasticloadbalancing:DescribeSSLPolicies"``

Grants permission to describe the specified policies or all policies used for S
SL negotiation

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeSSLPolicies.html

#### Defined in

actions/elasticloadbalancing.ts:147

___

### DescribeTags

• **DescribeTags** = ``"elasticloadbalancing:DescribeTags"``

Grants permission to describe the tags associated with the specified resource

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTags.html

#### Defined in

actions/elasticloadbalancing.ts:153

___

### DescribeTargetGroupAttributes

• **DescribeTargetGroupAttributes** = ``"elasticloadbalancing:DescribeTargetGroupAttributes"``

Grants permission to describe the attributes for the specified target group

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroupAttributes.html

#### Defined in

actions/elasticloadbalancing.ts:159

___

### DescribeTargetGroups

• **DescribeTargetGroups** = ``"elasticloadbalancing:DescribeTargetGroups"``

Grants permission to describe the specified target groups or all of your target
groups

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html

#### Defined in

actions/elasticloadbalancing.ts:166

___

### DescribeTargetHealth

• **DescribeTargetHealth** = ``"elasticloadbalancing:DescribeTargetHealth"``

Grants permission to describe the health of the specified targets or all of you
r targets

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetHealth.html

#### Defined in

actions/elasticloadbalancing.ts:173

___

### DescribeTrustStoreAssociations

• **DescribeTrustStoreAssociations** = ``"elasticloadbalancing:DescribeTrustStoreAssociations"``

Grants permission to describe the associations with a trust store

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTrustStoreAssociations.html

#### Defined in

actions/elasticloadbalancing.ts:179

___

### DescribeTrustStoreRevocations

• **DescribeTrustStoreRevocations** = ``"elasticloadbalancing:DescribeTrustStoreRevocations"``

Grants permission to describe the specified trust stores revocations or all of
your revocations related to a trust store

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTrustStoreRevocations.html

#### Defined in

actions/elasticloadbalancing.ts:186

___

### DescribeTrustStores

• **DescribeTrustStores** = ``"elasticloadbalancing:DescribeTrustStores"``

Grants permission to describe the specified trust stores or all of your trust s
tores

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTrustStores.html

#### Defined in

actions/elasticloadbalancing.ts:193

___

### GetTrustStoreCaCertificatesBundle

• **GetTrustStoreCaCertificatesBundle** = ``"elasticloadbalancing:GetTrustStoreCaCertificatesBundle"``

Grants permission to retrieve a trust store CA certificates bundle

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_GetTrustStoreCaCertificatesBundle.html

#### Defined in

actions/elasticloadbalancing.ts:199

___

### GetTrustStoreRevocationContent

• **GetTrustStoreRevocationContent** = ``"elasticloadbalancing:GetTrustStoreRevocationContent"``

Grants permission to retrieve a trust store revocation content

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_GetTrustStoreRevocationContent.html

#### Defined in

actions/elasticloadbalancing.ts:205

___

### ModifyListener

• **ModifyListener** = ``"elasticloadbalancing:ModifyListener"``

Grants permission to modify the specified properties of the specified listener

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyListener.html

#### Defined in

actions/elasticloadbalancing.ts:211

___

### ModifyLoadBalancerAttributes

• **ModifyLoadBalancerAttributes** = ``"elasticloadbalancing:ModifyLoadBalancerAttributes"``

Grants permission to modify the attributes of the specified load balancer

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyLoadBalancerAttributes.html

#### Defined in

actions/elasticloadbalancing.ts:217

___

### ModifyRule

• **ModifyRule** = ``"elasticloadbalancing:ModifyRule"``

Grants permission to modify the specified rule

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyRule.html

#### Defined in

actions/elasticloadbalancing.ts:223

___

### ModifyTargetGroup

• **ModifyTargetGroup** = ``"elasticloadbalancing:ModifyTargetGroup"``

Grants permission to modify the health checks used when evaluating the health s
tate of the targets in the specified target group

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroup.html

#### Defined in

actions/elasticloadbalancing.ts:230

___

### ModifyTargetGroupAttributes

• **ModifyTargetGroupAttributes** = ``"elasticloadbalancing:ModifyTargetGroupAttributes"``

Grants permission to modify the specified attributes of the specified target gr
oup

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroupAttributes.html

#### Defined in

actions/elasticloadbalancing.ts:237

___

### ModifyTrustStore

• **ModifyTrustStore** = ``"elasticloadbalancing:ModifyTrustStore"``

Grants permission to modify the specified trust store

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTrustStore.html

#### Defined in

actions/elasticloadbalancing.ts:243

___

### RegisterTargets

• **RegisterTargets** = ``"elasticloadbalancing:RegisterTargets"``

Grants permission to register the specified targets with the specified target g
roup

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RegisterTargets.html

#### Defined in

actions/elasticloadbalancing.ts:250

___

### RemoveListenerCertificates

• **RemoveListenerCertificates** = ``"elasticloadbalancing:RemoveListenerCertificates"``

Grants permission to remove the specified certificates of the specified secure
listener

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveListenerCertificates.html

#### Defined in

actions/elasticloadbalancing.ts:257

___

### RemoveTags

• **RemoveTags** = ``"elasticloadbalancing:RemoveTags"``

Grants permission to remove one or more tags from the specified load balancer

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveTags.html

#### Defined in

actions/elasticloadbalancing.ts:263

___

### RemoveTrustStoreRevocations

• **RemoveTrustStoreRevocations** = ``"elasticloadbalancing:RemoveTrustStoreRevocations"``

Grants permission to remove revocations from a trust store

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveTrustStoreRevocations.html

#### Defined in

actions/elasticloadbalancing.ts:269

___

### SetIpAddressType

• **SetIpAddressType** = ``"elasticloadbalancing:SetIpAddressType"``

Grants permission to set the type of IP addresses used by the subnets of the sp
ecified load balancer

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetIpAddressType.html

#### Defined in

actions/elasticloadbalancing.ts:276

___

### SetRulePriorities

• **SetRulePriorities** = ``"elasticloadbalancing:SetRulePriorities"``

Grants permission to set the priorities of the specified rules

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetRulePriorities.html

#### Defined in

actions/elasticloadbalancing.ts:282

___

### SetSecurityGroups

• **SetSecurityGroups** = ``"elasticloadbalancing:SetSecurityGroups"``

Grants permission to associate the specified security groups with the specified
load balancer

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSecurityGroups.html

#### Defined in

actions/elasticloadbalancing.ts:289

___

### SetSubnets

• **SetSubnets** = ``"elasticloadbalancing:SetSubnets"``

Grants permission to enable the Availability Zone for the specified subnets for
the specified load balancer

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSubnets.html

#### Defined in

actions/elasticloadbalancing.ts:296

___

### SetWebAcl

• **SetWebAcl** = ``"elasticloadbalancing:SetWebAcl"``

Grants permission to give WebAcl permission to WAF

See https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetWebAcl.html

#### Defined in

actions/elasticloadbalancing.ts:302
