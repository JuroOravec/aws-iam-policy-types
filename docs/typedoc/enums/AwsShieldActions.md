[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsShieldActions

# Enumeration: AwsShieldActions

All IAM policy actions for AWS Shield (SHIELD)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshield.html

2024-02-12T09:59:15.423Z

## Table of contents

### Enumeration Members

- [AssociateDRTLogBucket](AwsShieldActions.md#associatedrtlogbucket)
- [AssociateDRTRole](AwsShieldActions.md#associatedrtrole)
- [AssociateHealthCheck](AwsShieldActions.md#associatehealthcheck)
- [AssociateProactiveEngagementDetails](AwsShieldActions.md#associateproactiveengagementdetails)
- [CreateProtection](AwsShieldActions.md#createprotection)
- [CreateProtectionGroup](AwsShieldActions.md#createprotectiongroup)
- [CreateSubscription](AwsShieldActions.md#createsubscription)
- [DeleteProtection](AwsShieldActions.md#deleteprotection)
- [DeleteProtectionGroup](AwsShieldActions.md#deleteprotectiongroup)
- [DeleteSubscription](AwsShieldActions.md#deletesubscription)
- [DescribeAttack](AwsShieldActions.md#describeattack)
- [DescribeAttackStatistics](AwsShieldActions.md#describeattackstatistics)
- [DescribeDRTAccess](AwsShieldActions.md#describedrtaccess)
- [DescribeEmergencyContactSettings](AwsShieldActions.md#describeemergencycontactsettings)
- [DescribeProtection](AwsShieldActions.md#describeprotection)
- [DescribeProtectionGroup](AwsShieldActions.md#describeprotectiongroup)
- [DescribeSubscription](AwsShieldActions.md#describesubscription)
- [DisableApplicationLayerAutomaticResponse](AwsShieldActions.md#disableapplicationlayerautomaticresponse)
- [DisableProactiveEngagement](AwsShieldActions.md#disableproactiveengagement)
- [DisassociateDRTLogBucket](AwsShieldActions.md#disassociatedrtlogbucket)
- [DisassociateDRTRole](AwsShieldActions.md#disassociatedrtrole)
- [DisassociateHealthCheck](AwsShieldActions.md#disassociatehealthcheck)
- [EnableApplicationLayerAutomaticResponse](AwsShieldActions.md#enableapplicationlayerautomaticresponse)
- [EnableProactiveEngagement](AwsShieldActions.md#enableproactiveengagement)
- [GetSubscriptionState](AwsShieldActions.md#getsubscriptionstate)
- [ListAttacks](AwsShieldActions.md#listattacks)
- [ListProtectionGroups](AwsShieldActions.md#listprotectiongroups)
- [ListProtections](AwsShieldActions.md#listprotections)
- [ListResourcesInProtectionGroup](AwsShieldActions.md#listresourcesinprotectiongroup)
- [ListTagsForResource](AwsShieldActions.md#listtagsforresource)
- [TagResource](AwsShieldActions.md#tagresource)
- [UntagResource](AwsShieldActions.md#untagresource)
- [UpdateApplicationLayerAutomaticResponse](AwsShieldActions.md#updateapplicationlayerautomaticresponse)
- [UpdateEmergencyContactSettings](AwsShieldActions.md#updateemergencycontactsettings)
- [UpdateProtectionGroup](AwsShieldActions.md#updateprotectiongroup)
- [UpdateSubscription](AwsShieldActions.md#updatesubscription)

## Enumeration Members

### AssociateDRTLogBucket

• **AssociateDRTLogBucket** = ``"shield:AssociateDRTLogBucket"``

Grants permission to authorize the DDoS Response team to access the specified A
mazon S3 bucket containing your flow logs

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTLogBucket.html

#### Defined in

actions/shield.ts:18

___

### AssociateDRTRole

• **AssociateDRTRole** = ``"shield:AssociateDRTRole"``

Grants permission to authorize the DDoS Response team using the specified role,
to access your AWS account to assist with DDoS attack mitigation during potenti
al attacks

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTRole.html

#### Defined in

actions/shield.ts:26

___

### AssociateHealthCheck

• **AssociateHealthCheck** = ``"shield:AssociateHealthCheck"``

Grants permission to add health-based detection to the Shield Advanced protecti
on for a resource

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateHealthCheck.html

#### Defined in

actions/shield.ts:33

___

### AssociateProactiveEngagementDetails

• **AssociateProactiveEngagementDetails** = ``"shield:AssociateProactiveEngagementDetails"``

Grants permission to initialize proactive engagement and set the list of contac
ts for the DDoS Response Team (DRT) to use

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateProactiveEngagementDetails.html

#### Defined in

actions/shield.ts:40

___

### CreateProtection

• **CreateProtection** = ``"shield:CreateProtection"``

Grants permission to activate DDoS protection service for a given resource ARN

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html

#### Defined in

actions/shield.ts:46

___

### CreateProtectionGroup

• **CreateProtectionGroup** = ``"shield:CreateProtectionGroup"``

Grants permission to create a grouping of protected resources so they can be ha
ndled as a collective

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtectionGroup.html

#### Defined in

actions/shield.ts:53

___

### CreateSubscription

• **CreateSubscription** = ``"shield:CreateSubscription"``

Grants permission to activate subscription

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html

#### Defined in

actions/shield.ts:59

___

### DeleteProtection

• **DeleteProtection** = ``"shield:DeleteProtection"``

Grants permission to delete an existing protection

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtection.html

#### Defined in

actions/shield.ts:65

___

### DeleteProtectionGroup

• **DeleteProtectionGroup** = ``"shield:DeleteProtectionGroup"``

Grants permission to remove the specified protection group

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtectionGroup.html

#### Defined in

actions/shield.ts:71

___

### DeleteSubscription

• **DeleteSubscription** = ``"shield:DeleteSubscription"``

Grants permission to deactivate subscription

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteSubscription.html

#### Defined in

actions/shield.ts:77

___

### DescribeAttack

• **DescribeAttack** = ``"shield:DescribeAttack"``

Grants permission to get attack details

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttack.html

#### Defined in

actions/shield.ts:83

___

### DescribeAttackStatistics

• **DescribeAttackStatistics** = ``"shield:DescribeAttackStatistics"``

Grants permission to describe information about the number and type of attacks
AWS Shield has detected in the last year

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttackStatistics.html

#### Defined in

actions/shield.ts:90

___

### DescribeDRTAccess

• **DescribeDRTAccess** = ``"shield:DescribeDRTAccess"``

Grants permission to describe the current role and list of Amazon S3 log bucket
s used by the DDoS Response team to access your AWS account while assisting wit
h attack mitigation

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeDRTAccess.html

#### Defined in

actions/shield.ts:98

___

### DescribeEmergencyContactSettings

• **DescribeEmergencyContactSettings** = ``"shield:DescribeEmergencyContactSettings"``

Grants permission to list the email addresses that the DRT can use to contact y
ou during a suspected attack

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeEmergencyContactSettings.html

#### Defined in

actions/shield.ts:105

___

### DescribeProtection

• **DescribeProtection** = ``"shield:DescribeProtection"``

Grants permission to get protection details

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtection.html

#### Defined in

actions/shield.ts:111

___

### DescribeProtectionGroup

• **DescribeProtectionGroup** = ``"shield:DescribeProtectionGroup"``

Grants permission to describe the specification for the specified protection gr
oup

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtectionGroup.html

#### Defined in

actions/shield.ts:118

___

### DescribeSubscription

• **DescribeSubscription** = ``"shield:DescribeSubscription"``

Grants permission to get subscription details, such as start time

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeSubscription.html

#### Defined in

actions/shield.ts:124

___

### DisableApplicationLayerAutomaticResponse

• **DisableApplicationLayerAutomaticResponse** = ``"shield:DisableApplicationLayerAutomaticResponse"``

Grants permission to disable application layer automatic response for Shield Ad
vanced protection for a resource

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisableApplicationLayerAutomaticResponse.html

#### Defined in

actions/shield.ts:131

___

### DisableProactiveEngagement

• **DisableProactiveEngagement** = ``"shield:DisableProactiveEngagement"``

Grants permission to remove authorization from the DDoS Response Team (DRT) to
notify contacts about escalations

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisableProactiveEngagement.html

#### Defined in

actions/shield.ts:138

___

### DisassociateDRTLogBucket

• **DisassociateDRTLogBucket** = ``"shield:DisassociateDRTLogBucket"``

Grants permission to remove the DDoS Response team's access to the specified Am
azon S3 bucket containing your flow logs

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTLogBucket.html

#### Defined in

actions/shield.ts:145

___

### DisassociateDRTRole

• **DisassociateDRTRole** = ``"shield:DisassociateDRTRole"``

Grants permission to remove the DDoS Response team's access to your AWS account

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTRole.html

#### Defined in

actions/shield.ts:151

___

### DisassociateHealthCheck

• **DisassociateHealthCheck** = ``"shield:DisassociateHealthCheck"``

Grants permission to remove health-based detection from the Shield Advanced pro
tection for a resource

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateHealthCheck.html

#### Defined in

actions/shield.ts:158

___

### EnableApplicationLayerAutomaticResponse

• **EnableApplicationLayerAutomaticResponse** = ``"shield:EnableApplicationLayerAutomaticResponse"``

Grants permission to enable application layer automatic response for Shield Adv
anced protection for a resource

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_EnableApplicationLayerAutomaticResponse.html

#### Defined in

actions/shield.ts:165

___

### EnableProactiveEngagement

• **EnableProactiveEngagement** = ``"shield:EnableProactiveEngagement"``

Grants permission to authorize the DDoS Response Team (DRT) to use email and ph
one to notify contacts about escalations

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_EnableProactiveEngagement.html

#### Defined in

actions/shield.ts:172

___

### GetSubscriptionState

• **GetSubscriptionState** = ``"shield:GetSubscriptionState"``

Grants permission to get subscription state

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_GetSubscriptionState.html

#### Defined in

actions/shield.ts:178

___

### ListAttacks

• **ListAttacks** = ``"shield:ListAttacks"``

Grants permission to list all existing attacks

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListAttacks.html

#### Defined in

actions/shield.ts:184

___

### ListProtectionGroups

• **ListProtectionGroups** = ``"shield:ListProtectionGroups"``

Grants permission to retrieve the protection groups for the account

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtectionGroups.html

#### Defined in

actions/shield.ts:190

___

### ListProtections

• **ListProtections** = ``"shield:ListProtections"``

Grants permission to list all existing protections

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtections.html

#### Defined in

actions/shield.ts:196

___

### ListResourcesInProtectionGroup

• **ListResourcesInProtectionGroup** = ``"shield:ListResourcesInProtectionGroup"``

Grants permission to retrieve the resources that are included in the protection
group

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListResourcesInProtectionGroup.html

#### Defined in

actions/shield.ts:203

___

### ListTagsForResource

• **ListTagsForResource** = ``"shield:ListTagsForResource"``

Grants permission to get information about AWS tags for a specified Amazon Reso
urce Name (ARN) in AWS Shield

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListTagsForResource.html

#### Defined in

actions/shield.ts:210

___

### TagResource

• **TagResource** = ``"shield:TagResource"``

Grants permission to add or updates tags for a resource in AWS Shield

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_TagResource.html

#### Defined in

actions/shield.ts:216

___

### UntagResource

• **UntagResource** = ``"shield:UntagResource"``

Grants permission to remove tags from a resource in AWS Shield

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UntagResource.html

#### Defined in

actions/shield.ts:222

___

### UpdateApplicationLayerAutomaticResponse

• **UpdateApplicationLayerAutomaticResponse** = ``"shield:UpdateApplicationLayerAutomaticResponse"``

Grants permission to update application layer automatic response for Shield Adv
anced protection for a resource

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateApplicationLayerAutomaticResponse.html

#### Defined in

actions/shield.ts:229

___

### UpdateEmergencyContactSettings

• **UpdateEmergencyContactSettings** = ``"shield:UpdateEmergencyContactSettings"``

Grants permission to update the details of the list of email addresses that the
DRT can use to contact you during a suspected attack

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateEmergencyContactSettings.html

#### Defined in

actions/shield.ts:236

___

### UpdateProtectionGroup

• **UpdateProtectionGroup** = ``"shield:UpdateProtectionGroup"``

Grants permission to update an existing protection group

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateProtectionGroup.html

#### Defined in

actions/shield.ts:242

___

### UpdateSubscription

• **UpdateSubscription** = ``"shield:UpdateSubscription"``

Grants permission to update the details of an existing subscription

See https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateSubscription.html

#### Defined in

actions/shield.ts:248
