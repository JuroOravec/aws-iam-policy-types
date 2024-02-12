[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCloudfrontActions

# Enumeration: AwsCloudfrontActions

All IAM policy actions for Amazon CloudFront (CLOUDFRONT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudfront.html

2024-02-12T09:56:22.265Z

## Table of contents

### Enumeration Members

- [AssociateAlias](AwsCloudfrontActions.md#associatealias)
- [CopyDistribution](AwsCloudfrontActions.md#copydistribution)
- [CreateCachePolicy](AwsCloudfrontActions.md#createcachepolicy)
- [CreateCloudFrontOriginAccessIdentity](AwsCloudfrontActions.md#createcloudfrontoriginaccessidentity)
- [CreateContinuousDeploymentPolicy](AwsCloudfrontActions.md#createcontinuousdeploymentpolicy)
- [CreateDistribution](AwsCloudfrontActions.md#createdistribution)
- [CreateFieldLevelEncryptionConfig](AwsCloudfrontActions.md#createfieldlevelencryptionconfig)
- [CreateFieldLevelEncryptionProfile](AwsCloudfrontActions.md#createfieldlevelencryptionprofile)
- [CreateFunction](AwsCloudfrontActions.md#createfunction)
- [CreateInvalidation](AwsCloudfrontActions.md#createinvalidation)
- [CreateKeyGroup](AwsCloudfrontActions.md#createkeygroup)
- [CreateKeyValueStore](AwsCloudfrontActions.md#createkeyvaluestore)
- [CreateMonitoringSubscription](AwsCloudfrontActions.md#createmonitoringsubscription)
- [CreateOriginAccessControl](AwsCloudfrontActions.md#createoriginaccesscontrol)
- [CreateOriginRequestPolicy](AwsCloudfrontActions.md#createoriginrequestpolicy)
- [CreatePublicKey](AwsCloudfrontActions.md#createpublickey)
- [CreateRealtimeLogConfig](AwsCloudfrontActions.md#createrealtimelogconfig)
- [CreateResponseHeadersPolicy](AwsCloudfrontActions.md#createresponseheaderspolicy)
- [CreateSavingsPlan](AwsCloudfrontActions.md#createsavingsplan)
- [CreateStreamingDistribution](AwsCloudfrontActions.md#createstreamingdistribution)
- [CreateStreamingDistributionWithTags](AwsCloudfrontActions.md#createstreamingdistributionwithtags)
- [DeleteCachePolicy](AwsCloudfrontActions.md#deletecachepolicy)
- [DeleteCloudFrontOriginAccessIdentity](AwsCloudfrontActions.md#deletecloudfrontoriginaccessidentity)
- [DeleteContinuousDeploymentPolicy](AwsCloudfrontActions.md#deletecontinuousdeploymentpolicy)
- [DeleteDistribution](AwsCloudfrontActions.md#deletedistribution)
- [DeleteFieldLevelEncryptionConfig](AwsCloudfrontActions.md#deletefieldlevelencryptionconfig)
- [DeleteFieldLevelEncryptionProfile](AwsCloudfrontActions.md#deletefieldlevelencryptionprofile)
- [DeleteFunction](AwsCloudfrontActions.md#deletefunction)
- [DeleteKeyGroup](AwsCloudfrontActions.md#deletekeygroup)
- [DeleteKeyValueStore](AwsCloudfrontActions.md#deletekeyvaluestore)
- [DeleteMonitoringSubscription](AwsCloudfrontActions.md#deletemonitoringsubscription)
- [DeleteOriginAccessControl](AwsCloudfrontActions.md#deleteoriginaccesscontrol)
- [DeleteOriginRequestPolicy](AwsCloudfrontActions.md#deleteoriginrequestpolicy)
- [DeletePublicKey](AwsCloudfrontActions.md#deletepublickey)
- [DeleteRealtimeLogConfig](AwsCloudfrontActions.md#deleterealtimelogconfig)
- [DeleteResponseHeadersPolicy](AwsCloudfrontActions.md#deleteresponseheaderspolicy)
- [DeleteStreamingDistribution](AwsCloudfrontActions.md#deletestreamingdistribution)
- [DescribeFunction](AwsCloudfrontActions.md#describefunction)
- [DescribeKeyValueStore](AwsCloudfrontActions.md#describekeyvaluestore)
- [GetCachePolicy](AwsCloudfrontActions.md#getcachepolicy)
- [GetCachePolicyConfig](AwsCloudfrontActions.md#getcachepolicyconfig)
- [GetCloudFrontOriginAccessIdentity](AwsCloudfrontActions.md#getcloudfrontoriginaccessidentity)
- [GetCloudFrontOriginAccessIdentityConfig](AwsCloudfrontActions.md#getcloudfrontoriginaccessidentityconfig)
- [GetContinuousDeploymentPolicy](AwsCloudfrontActions.md#getcontinuousdeploymentpolicy)
- [GetContinuousDeploymentPolicyConfig](AwsCloudfrontActions.md#getcontinuousdeploymentpolicyconfig)
- [GetDistribution](AwsCloudfrontActions.md#getdistribution)
- [GetDistributionConfig](AwsCloudfrontActions.md#getdistributionconfig)
- [GetFieldLevelEncryption](AwsCloudfrontActions.md#getfieldlevelencryption)
- [GetFieldLevelEncryptionConfig](AwsCloudfrontActions.md#getfieldlevelencryptionconfig)
- [GetFieldLevelEncryptionProfile](AwsCloudfrontActions.md#getfieldlevelencryptionprofile)
- [GetFieldLevelEncryptionProfileConfig](AwsCloudfrontActions.md#getfieldlevelencryptionprofileconfig)
- [GetFunction](AwsCloudfrontActions.md#getfunction)
- [GetInvalidation](AwsCloudfrontActions.md#getinvalidation)
- [GetKeyGroup](AwsCloudfrontActions.md#getkeygroup)
- [GetKeyGroupConfig](AwsCloudfrontActions.md#getkeygroupconfig)
- [GetMonitoringSubscription](AwsCloudfrontActions.md#getmonitoringsubscription)
- [GetOriginAccessControl](AwsCloudfrontActions.md#getoriginaccesscontrol)
- [GetOriginAccessControlConfig](AwsCloudfrontActions.md#getoriginaccesscontrolconfig)
- [GetOriginRequestPolicy](AwsCloudfrontActions.md#getoriginrequestpolicy)
- [GetOriginRequestPolicyConfig](AwsCloudfrontActions.md#getoriginrequestpolicyconfig)
- [GetPublicKey](AwsCloudfrontActions.md#getpublickey)
- [GetPublicKeyConfig](AwsCloudfrontActions.md#getpublickeyconfig)
- [GetRealtimeLogConfig](AwsCloudfrontActions.md#getrealtimelogconfig)
- [GetResponseHeadersPolicy](AwsCloudfrontActions.md#getresponseheaderspolicy)
- [GetResponseHeadersPolicyConfig](AwsCloudfrontActions.md#getresponseheaderspolicyconfig)
- [GetSavingsPlan](AwsCloudfrontActions.md#getsavingsplan)
- [GetStreamingDistribution](AwsCloudfrontActions.md#getstreamingdistribution)
- [GetStreamingDistributionConfig](AwsCloudfrontActions.md#getstreamingdistributionconfig)
- [ListCachePolicies](AwsCloudfrontActions.md#listcachepolicies)
- [ListCloudFrontOriginAccessIdentities](AwsCloudfrontActions.md#listcloudfrontoriginaccessidentities)
- [ListConflictingAliases](AwsCloudfrontActions.md#listconflictingaliases)
- [ListContinuousDeploymentPolicies](AwsCloudfrontActions.md#listcontinuousdeploymentpolicies)
- [ListDistributions](AwsCloudfrontActions.md#listdistributions)
- [ListDistributionsByCachePolicyId](AwsCloudfrontActions.md#listdistributionsbycachepolicyid)
- [ListDistributionsByKeyGroup](AwsCloudfrontActions.md#listdistributionsbykeygroup)
- [ListDistributionsByLambdaFunction](AwsCloudfrontActions.md#listdistributionsbylambdafunction)
- [ListDistributionsByOriginRequestPolicyId](AwsCloudfrontActions.md#listdistributionsbyoriginrequestpolicyid)
- [ListDistributionsByRealtimeLogConfig](AwsCloudfrontActions.md#listdistributionsbyrealtimelogconfig)
- [ListDistributionsByResponseHeadersPolicyId](AwsCloudfrontActions.md#listdistributionsbyresponseheaderspolicyid)
- [ListDistributionsByWebACLId](AwsCloudfrontActions.md#listdistributionsbywebaclid)
- [ListFieldLevelEncryptionConfigs](AwsCloudfrontActions.md#listfieldlevelencryptionconfigs)
- [ListFieldLevelEncryptionProfiles](AwsCloudfrontActions.md#listfieldlevelencryptionprofiles)
- [ListFunctions](AwsCloudfrontActions.md#listfunctions)
- [ListInvalidations](AwsCloudfrontActions.md#listinvalidations)
- [ListKeyGroups](AwsCloudfrontActions.md#listkeygroups)
- [ListKeyValueStores](AwsCloudfrontActions.md#listkeyvaluestores)
- [ListOriginAccessControls](AwsCloudfrontActions.md#listoriginaccesscontrols)
- [ListOriginRequestPolicies](AwsCloudfrontActions.md#listoriginrequestpolicies)
- [ListPublicKeys](AwsCloudfrontActions.md#listpublickeys)
- [ListRateCards](AwsCloudfrontActions.md#listratecards)
- [ListRealtimeLogConfigs](AwsCloudfrontActions.md#listrealtimelogconfigs)
- [ListResponseHeadersPolicies](AwsCloudfrontActions.md#listresponseheaderspolicies)
- [ListSavingsPlans](AwsCloudfrontActions.md#listsavingsplans)
- [ListStreamingDistributions](AwsCloudfrontActions.md#liststreamingdistributions)
- [ListTagsForResource](AwsCloudfrontActions.md#listtagsforresource)
- [ListUsages](AwsCloudfrontActions.md#listusages)
- [PublishFunction](AwsCloudfrontActions.md#publishfunction)
- [TagResource](AwsCloudfrontActions.md#tagresource)
- [TestFunction](AwsCloudfrontActions.md#testfunction)
- [UntagResource](AwsCloudfrontActions.md#untagresource)
- [UpdateCachePolicy](AwsCloudfrontActions.md#updatecachepolicy)
- [UpdateCloudFrontOriginAccessIdentity](AwsCloudfrontActions.md#updatecloudfrontoriginaccessidentity)
- [UpdateContinuousDeploymentPolicy](AwsCloudfrontActions.md#updatecontinuousdeploymentpolicy)
- [UpdateDistribution](AwsCloudfrontActions.md#updatedistribution)
- [UpdateFieldLevelEncryptionConfig](AwsCloudfrontActions.md#updatefieldlevelencryptionconfig)
- [UpdateFieldLevelEncryptionProfile](AwsCloudfrontActions.md#updatefieldlevelencryptionprofile)
- [UpdateFunction](AwsCloudfrontActions.md#updatefunction)
- [UpdateKeyGroup](AwsCloudfrontActions.md#updatekeygroup)
- [UpdateKeyValueStore](AwsCloudfrontActions.md#updatekeyvaluestore)
- [UpdateOriginAccessControl](AwsCloudfrontActions.md#updateoriginaccesscontrol)
- [UpdateOriginRequestPolicy](AwsCloudfrontActions.md#updateoriginrequestpolicy)
- [UpdatePublicKey](AwsCloudfrontActions.md#updatepublickey)
- [UpdateRealtimeLogConfig](AwsCloudfrontActions.md#updaterealtimelogconfig)
- [UpdateResponseHeadersPolicy](AwsCloudfrontActions.md#updateresponseheaderspolicy)
- [UpdateSavingsPlan](AwsCloudfrontActions.md#updatesavingsplan)
- [UpdateStreamingDistribution](AwsCloudfrontActions.md#updatestreamingdistribution)

## Enumeration Members

### AssociateAlias

• **AssociateAlias** = ``"cloudfront:AssociateAlias"``

Grants permission to associate an alias to a CloudFront distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_AssociateAlias.html

#### Defined in

actions/cloudfront.ts:17

___

### CopyDistribution

• **CopyDistribution** = ``"cloudfront:CopyDistribution"``

Grants permission to copy an existing distribution and create a new web distrib
ution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CopyDistribution.html

#### Defined in

actions/cloudfront.ts:24

___

### CreateCachePolicy

• **CreateCachePolicy** = ``"cloudfront:CreateCachePolicy"``

Grants permission to add a new cache policy to CloudFront

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCachePolicy.html

#### Defined in

actions/cloudfront.ts:30

___

### CreateCloudFrontOriginAccessIdentity

• **CreateCloudFrontOriginAccessIdentity** = ``"cloudfront:CreateCloudFrontOriginAccessIdentity"``

Grants permission to create a new CloudFront origin access identity

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html

#### Defined in

actions/cloudfront.ts:36

___

### CreateContinuousDeploymentPolicy

• **CreateContinuousDeploymentPolicy** = ``"cloudfront:CreateContinuousDeploymentPolicy"``

Grants permission to add a new continuous-deployment policy to CloudFront

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateContinuousDeploymentPolicy.html

#### Defined in

actions/cloudfront.ts:42

___

### CreateDistribution

• **CreateDistribution** = ``"cloudfront:CreateDistribution"``

Grants permission to create a new web distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html

#### Defined in

actions/cloudfront.ts:48

___

### CreateFieldLevelEncryptionConfig

• **CreateFieldLevelEncryptionConfig** = ``"cloudfront:CreateFieldLevelEncryptionConfig"``

Grants permission to create a new field-level encryption configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionConfig.html

#### Defined in

actions/cloudfront.ts:54

___

### CreateFieldLevelEncryptionProfile

• **CreateFieldLevelEncryptionProfile** = ``"cloudfront:CreateFieldLevelEncryptionProfile"``

Grants permission to create a field-level encryption profile

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionProfile.html

#### Defined in

actions/cloudfront.ts:60

___

### CreateFunction

• **CreateFunction** = ``"cloudfront:CreateFunction"``

Grants permission to create a CloudFront function

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFunction.html

#### Defined in

actions/cloudfront.ts:66

___

### CreateInvalidation

• **CreateInvalidation** = ``"cloudfront:CreateInvalidation"``

Grants permission to create a new invalidation batch request

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html

#### Defined in

actions/cloudfront.ts:72

___

### CreateKeyGroup

• **CreateKeyGroup** = ``"cloudfront:CreateKeyGroup"``

Grants permission to add a new key group to CloudFront

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyGroup.html

#### Defined in

actions/cloudfront.ts:78

___

### CreateKeyValueStore

• **CreateKeyValueStore** = ``"cloudfront:CreateKeyValueStore"``

Grants permission to create a CloudFront KeyValueStore

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyValueStore.html

#### Defined in

actions/cloudfront.ts:84

___

### CreateMonitoringSubscription

• **CreateMonitoringSubscription** = ``"cloudfront:CreateMonitoringSubscription"``

Grants permission to enable additional CloudWatch metrics for the specified Clo
udFront distribution. The additional metrics incur an additional cost

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateMonitoringSubscription.html

#### Defined in

actions/cloudfront.ts:91

___

### CreateOriginAccessControl

• **CreateOriginAccessControl** = ``"cloudfront:CreateOriginAccessControl"``

Grants permission to create a new origin access control

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginAccessControl.html

#### Defined in

actions/cloudfront.ts:97

___

### CreateOriginRequestPolicy

• **CreateOriginRequestPolicy** = ``"cloudfront:CreateOriginRequestPolicy"``

Grants permission to add a new origin request policy to CloudFront

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginRequestPolicy.html

#### Defined in

actions/cloudfront.ts:103

___

### CreatePublicKey

• **CreatePublicKey** = ``"cloudfront:CreatePublicKey"``

Grants permission to add a new public key to CloudFront

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html

#### Defined in

actions/cloudfront.ts:109

___

### CreateRealtimeLogConfig

• **CreateRealtimeLogConfig** = ``"cloudfront:CreateRealtimeLogConfig"``

Grants permission to create a real-time log configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateRealtimeLogConfig.html

#### Defined in

actions/cloudfront.ts:115

___

### CreateResponseHeadersPolicy

• **CreateResponseHeadersPolicy** = ``"cloudfront:CreateResponseHeadersPolicy"``

Grants permission to add a new response headers policy to CloudFront

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateResponseHeadersPolicy.html

#### Defined in

actions/cloudfront.ts:121

___

### CreateSavingsPlan

• **CreateSavingsPlan** = ``"cloudfront:CreateSavingsPlan"``

Grants permission to create a new savings plan

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html

#### Defined in

actions/cloudfront.ts:127

___

### CreateStreamingDistribution

• **CreateStreamingDistribution** = ``"cloudfront:CreateStreamingDistribution"``

Grants permission to create a new RTMP distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistribution.html

#### Defined in

actions/cloudfront.ts:133

___

### CreateStreamingDistributionWithTags

• **CreateStreamingDistributionWithTags** = ``"cloudfront:CreateStreamingDistributionWithTags"``

Grants permission to create a new RTMP distribution with tags

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistributionWithTags.html

#### Defined in

actions/cloudfront.ts:139

___

### DeleteCachePolicy

• **DeleteCachePolicy** = ``"cloudfront:DeleteCachePolicy"``

Grants permission to delete a cache policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCachePolicy.html

#### Defined in

actions/cloudfront.ts:145

___

### DeleteCloudFrontOriginAccessIdentity

• **DeleteCloudFrontOriginAccessIdentity** = ``"cloudfront:DeleteCloudFrontOriginAccessIdentity"``

Grants permission to delete a CloudFront origin access identity

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCloudFrontOriginAccessIdentity.html

#### Defined in

actions/cloudfront.ts:151

___

### DeleteContinuousDeploymentPolicy

• **DeleteContinuousDeploymentPolicy** = ``"cloudfront:DeleteContinuousDeploymentPolicy"``

Grants permission to delete a continuous-deployment policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteContinuousDeploymentPolicy.html

#### Defined in

actions/cloudfront.ts:157

___

### DeleteDistribution

• **DeleteDistribution** = ``"cloudfront:DeleteDistribution"``

Grants permission to delete a web distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html

#### Defined in

actions/cloudfront.ts:163

___

### DeleteFieldLevelEncryptionConfig

• **DeleteFieldLevelEncryptionConfig** = ``"cloudfront:DeleteFieldLevelEncryptionConfig"``

Grants permission to delete a field-level encryption configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionConfig.html

#### Defined in

actions/cloudfront.ts:169

___

### DeleteFieldLevelEncryptionProfile

• **DeleteFieldLevelEncryptionProfile** = ``"cloudfront:DeleteFieldLevelEncryptionProfile"``

Grants permission to delete a field-level encryption profile

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionProfile.html

#### Defined in

actions/cloudfront.ts:175

___

### DeleteFunction

• **DeleteFunction** = ``"cloudfront:DeleteFunction"``

Grants permission to delete a CloudFront function

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFunction.html

#### Defined in

actions/cloudfront.ts:181

___

### DeleteKeyGroup

• **DeleteKeyGroup** = ``"cloudfront:DeleteKeyGroup"``

Grants permission to delete a key group

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyGroup.html

#### Defined in

actions/cloudfront.ts:187

___

### DeleteKeyValueStore

• **DeleteKeyValueStore** = ``"cloudfront:DeleteKeyValueStore"``

Grants permission to delete a CloudFront KeyValueStore

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyValueStore.html

#### Defined in

actions/cloudfront.ts:193

___

### DeleteMonitoringSubscription

• **DeleteMonitoringSubscription** = ``"cloudfront:DeleteMonitoringSubscription"``

Grants permission to disable additional CloudWatch metrics for the specified Cl
oudFront distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteMonitoringSubscription.html

#### Defined in

actions/cloudfront.ts:200

___

### DeleteOriginAccessControl

• **DeleteOriginAccessControl** = ``"cloudfront:DeleteOriginAccessControl"``

Grants permission to delete an origin access control

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginAccessControl.html

#### Defined in

actions/cloudfront.ts:206

___

### DeleteOriginRequestPolicy

• **DeleteOriginRequestPolicy** = ``"cloudfront:DeleteOriginRequestPolicy"``

Grants permission to delete an origin request policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginRequestPolicy.html

#### Defined in

actions/cloudfront.ts:212

___

### DeletePublicKey

• **DeletePublicKey** = ``"cloudfront:DeletePublicKey"``

Grants permission to delete a public key from CloudFront

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeletePublicKey.html

#### Defined in

actions/cloudfront.ts:218

___

### DeleteRealtimeLogConfig

• **DeleteRealtimeLogConfig** = ``"cloudfront:DeleteRealtimeLogConfig"``

Grants permission to delete a real-time log configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteRealtimeLogConfig.html

#### Defined in

actions/cloudfront.ts:224

___

### DeleteResponseHeadersPolicy

• **DeleteResponseHeadersPolicy** = ``"cloudfront:DeleteResponseHeadersPolicy"``

Grants permission to delete a response headers policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteResponseHeadersPolicy.html

#### Defined in

actions/cloudfront.ts:230

___

### DeleteStreamingDistribution

• **DeleteStreamingDistribution** = ``"cloudfront:DeleteStreamingDistribution"``

Grants permission to delete an RTMP distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteStreamingDistribution.html

#### Defined in

actions/cloudfront.ts:236

___

### DescribeFunction

• **DescribeFunction** = ``"cloudfront:DescribeFunction"``

Grants permission to get a CloudFront function summary

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeFunction.html

#### Defined in

actions/cloudfront.ts:242

___

### DescribeKeyValueStore

• **DescribeKeyValueStore** = ``"cloudfront:DescribeKeyValueStore"``

Grants permission to get a CloudFront KeyValueStore summary

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeKeyValueStore.html

#### Defined in

actions/cloudfront.ts:248

___

### GetCachePolicy

• **GetCachePolicy** = ``"cloudfront:GetCachePolicy"``

Grants permission to get the cache policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicy.html

#### Defined in

actions/cloudfront.ts:254

___

### GetCachePolicyConfig

• **GetCachePolicyConfig** = ``"cloudfront:GetCachePolicyConfig"``

Grants permission to get the cache policy configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicyConfig.html

#### Defined in

actions/cloudfront.ts:260

___

### GetCloudFrontOriginAccessIdentity

• **GetCloudFrontOriginAccessIdentity** = ``"cloudfront:GetCloudFrontOriginAccessIdentity"``

Grants permission to get the information about a CloudFront origin access ident
ity

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentity.html

#### Defined in

actions/cloudfront.ts:267

___

### GetCloudFrontOriginAccessIdentityConfig

• **GetCloudFrontOriginAccessIdentityConfig** = ``"cloudfront:GetCloudFrontOriginAccessIdentityConfig"``

Grants permission to get the configuration information about a Cloudfront origi
n access identity

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentityConfig.html

#### Defined in

actions/cloudfront.ts:274

___

### GetContinuousDeploymentPolicy

• **GetContinuousDeploymentPolicy** = ``"cloudfront:GetContinuousDeploymentPolicy"``

Grants permission to get the continuous-deployment policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicy.html

#### Defined in

actions/cloudfront.ts:280

___

### GetContinuousDeploymentPolicyConfig

• **GetContinuousDeploymentPolicyConfig** = ``"cloudfront:GetContinuousDeploymentPolicyConfig"``

Grants permission to get the continuous-deployment policy configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicyConfig.html

#### Defined in

actions/cloudfront.ts:286

___

### GetDistribution

• **GetDistribution** = ``"cloudfront:GetDistribution"``

Grants permission to get the information about a web distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html

#### Defined in

actions/cloudfront.ts:292

___

### GetDistributionConfig

• **GetDistributionConfig** = ``"cloudfront:GetDistributionConfig"``

Grants permission to get the configuration information about a distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html

#### Defined in

actions/cloudfront.ts:298

___

### GetFieldLevelEncryption

• **GetFieldLevelEncryption** = ``"cloudfront:GetFieldLevelEncryption"``

Grants permission to get the field-level encryption configuration information

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryption.html

#### Defined in

actions/cloudfront.ts:304

___

### GetFieldLevelEncryptionConfig

• **GetFieldLevelEncryptionConfig** = ``"cloudfront:GetFieldLevelEncryptionConfig"``

Grants permission to get the field-level encryption configuration information

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html

#### Defined in

actions/cloudfront.ts:310

___

### GetFieldLevelEncryptionProfile

• **GetFieldLevelEncryptionProfile** = ``"cloudfront:GetFieldLevelEncryptionProfile"``

Grants permission to get the field-level encryption configuration information

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfile.html

#### Defined in

actions/cloudfront.ts:316

___

### GetFieldLevelEncryptionProfileConfig

• **GetFieldLevelEncryptionProfileConfig** = ``"cloudfront:GetFieldLevelEncryptionProfileConfig"``

Grants permission to get the field-level encryption profile configuration infor
mation

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfileConfig.html

#### Defined in

actions/cloudfront.ts:323

___

### GetFunction

• **GetFunction** = ``"cloudfront:GetFunction"``

Grants permission to get a CloudFront function's code

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFunction.html

#### Defined in

actions/cloudfront.ts:329

___

### GetInvalidation

• **GetInvalidation** = ``"cloudfront:GetInvalidation"``

Grants permission to get the information about an invalidation

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetInvalidation.html

#### Defined in

actions/cloudfront.ts:335

___

### GetKeyGroup

• **GetKeyGroup** = ``"cloudfront:GetKeyGroup"``

Grants permission to get a key group

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroup.html

#### Defined in

actions/cloudfront.ts:341

___

### GetKeyGroupConfig

• **GetKeyGroupConfig** = ``"cloudfront:GetKeyGroupConfig"``

Grants permission to get a key group configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroupConfig.html

#### Defined in

actions/cloudfront.ts:347

___

### GetMonitoringSubscription

• **GetMonitoringSubscription** = ``"cloudfront:GetMonitoringSubscription"``

Grants permission to get information about whether additional CloudWatch metric
s are enabled for the specified CloudFront distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetMonitoringSubscription.html

#### Defined in

actions/cloudfront.ts:354

___

### GetOriginAccessControl

• **GetOriginAccessControl** = ``"cloudfront:GetOriginAccessControl"``

Grants permission to get the origin access control

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControl.html

#### Defined in

actions/cloudfront.ts:360

___

### GetOriginAccessControlConfig

• **GetOriginAccessControlConfig** = ``"cloudfront:GetOriginAccessControlConfig"``

Grants permission to get the origin access control configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControlConfig.html

#### Defined in

actions/cloudfront.ts:366

___

### GetOriginRequestPolicy

• **GetOriginRequestPolicy** = ``"cloudfront:GetOriginRequestPolicy"``

Grants permission to get the origin request policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicy.html

#### Defined in

actions/cloudfront.ts:372

___

### GetOriginRequestPolicyConfig

• **GetOriginRequestPolicyConfig** = ``"cloudfront:GetOriginRequestPolicyConfig"``

Grants permission to get the origin request policy configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicyConfig.html

#### Defined in

actions/cloudfront.ts:378

___

### GetPublicKey

• **GetPublicKey** = ``"cloudfront:GetPublicKey"``

Grants permission to get the public key information

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKey.html

#### Defined in

actions/cloudfront.ts:384

___

### GetPublicKeyConfig

• **GetPublicKeyConfig** = ``"cloudfront:GetPublicKeyConfig"``

Grants permission to get the public key configuration information

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKeyConfig.html

#### Defined in

actions/cloudfront.ts:390

___

### GetRealtimeLogConfig

• **GetRealtimeLogConfig** = ``"cloudfront:GetRealtimeLogConfig"``

Grants permission to get a real-time log configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetRealtimeLogConfig.html

#### Defined in

actions/cloudfront.ts:396

___

### GetResponseHeadersPolicy

• **GetResponseHeadersPolicy** = ``"cloudfront:GetResponseHeadersPolicy"``

Grants permission to get the response headers policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicy.html

#### Defined in

actions/cloudfront.ts:402

___

### GetResponseHeadersPolicyConfig

• **GetResponseHeadersPolicyConfig** = ``"cloudfront:GetResponseHeadersPolicyConfig"``

Grants permission to get the response headers policy configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicyConfig.html

#### Defined in

actions/cloudfront.ts:408

___

### GetSavingsPlan

• **GetSavingsPlan** = ``"cloudfront:GetSavingsPlan"``

Grants permission to get a savings plan

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html

#### Defined in

actions/cloudfront.ts:414

___

### GetStreamingDistribution

• **GetStreamingDistribution** = ``"cloudfront:GetStreamingDistribution"``

Grants permission to get the information about an RTMP distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistribution.html

#### Defined in

actions/cloudfront.ts:420

___

### GetStreamingDistributionConfig

• **GetStreamingDistributionConfig** = ``"cloudfront:GetStreamingDistributionConfig"``

Grants permission to get the configuration information about a streaming distri
bution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistributionConfig.html

#### Defined in

actions/cloudfront.ts:427

___

### ListCachePolicies

• **ListCachePolicies** = ``"cloudfront:ListCachePolicies"``

Grants permission to list all cache policies that have been created in CloudFro
nt for this account

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCachePolicies.html

#### Defined in

actions/cloudfront.ts:434

___

### ListCloudFrontOriginAccessIdentities

• **ListCloudFrontOriginAccessIdentities** = ``"cloudfront:ListCloudFrontOriginAccessIdentities"``

Grants permission to list your CloudFront origin access identities

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCloudFrontOriginAccessIdentities.html

#### Defined in

actions/cloudfront.ts:440

___

### ListConflictingAliases

• **ListConflictingAliases** = ``"cloudfront:ListConflictingAliases"``

Grants permission to list all aliases that conflict with the given alias in Clo
udFront

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListConflictingAliases.html

#### Defined in

actions/cloudfront.ts:447

___

### ListContinuousDeploymentPolicies

• **ListContinuousDeploymentPolicies** = ``"cloudfront:ListContinuousDeploymentPolicies"``

Grants permission to list all continuous-deployment policies in the account

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListContinuousDeploymentPolicies.html

#### Defined in

actions/cloudfront.ts:453

___

### ListDistributions

• **ListDistributions** = ``"cloudfront:ListDistributions"``

Grants permission to list the distributions associated with your AWS account

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributions.html

#### Defined in

actions/cloudfront.ts:459

___

### ListDistributionsByCachePolicyId

• **ListDistributionsByCachePolicyId** = ``"cloudfront:ListDistributionsByCachePolicyId"``

Grants permission to list distribution IDs for distributions that have a cache
behavior that's associated with the specified cache policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByCachePolicyId.html

#### Defined in

actions/cloudfront.ts:466

___

### ListDistributionsByKeyGroup

• **ListDistributionsByKeyGroup** = ``"cloudfront:ListDistributionsByKeyGroup"``

Grants permission to list distribution IDs for distributions that have a cache
behavior that's associated with the specified key group

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByKeyGroup.html

#### Defined in

actions/cloudfront.ts:473

___

### ListDistributionsByLambdaFunction

• **ListDistributionsByLambdaFunction** = ``"cloudfront:ListDistributionsByLambdaFunction"``

Grants permission to list the distributions associated a Lambda function

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html

#### Defined in

actions/cloudfront.ts:479

___

### ListDistributionsByOriginRequestPolicyId

• **ListDistributionsByOriginRequestPolicyId** = ``"cloudfront:ListDistributionsByOriginRequestPolicyId"``

Grants permission to list distribution IDs for distributions that have a cache
behavior that's associated with the specified origin request policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByOriginRequestPolicyId.html

#### Defined in

actions/cloudfront.ts:486

___

### ListDistributionsByRealtimeLogConfig

• **ListDistributionsByRealtimeLogConfig** = ``"cloudfront:ListDistributionsByRealtimeLogConfig"``

Grants permission to get a list of distributions that have a cache behavior tha
t’s associated with the specified real-time log configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByRealtimeLogConfig.html

#### Defined in

actions/cloudfront.ts:493

___

### ListDistributionsByResponseHeadersPolicyId

• **ListDistributionsByResponseHeadersPolicyId** = ``"cloudfront:ListDistributionsByResponseHeadersPolicyId"``

Grants permission to list distribution IDs for distributions that have a cache
behavior that's associated with the specified response headers policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByResponseHeadersPolicyId.html

#### Defined in

actions/cloudfront.ts:500

___

### ListDistributionsByWebACLId

• **ListDistributionsByWebACLId** = ``"cloudfront:ListDistributionsByWebACLId"``

Grants permission to list the distributions associated with your AWS account wi
th given AWS WAF web ACL

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html

#### Defined in

actions/cloudfront.ts:507

___

### ListFieldLevelEncryptionConfigs

• **ListFieldLevelEncryptionConfigs** = ``"cloudfront:ListFieldLevelEncryptionConfigs"``

Grants permission to list all field-level encryption configurations that have b
een created in CloudFront for this account

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionConfigs.html

#### Defined in

actions/cloudfront.ts:514

___

### ListFieldLevelEncryptionProfiles

• **ListFieldLevelEncryptionProfiles** = ``"cloudfront:ListFieldLevelEncryptionProfiles"``

Grants permission to list all field-level encryption profiles that have been cr
eated in CloudFront for this account

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionProfiles.html

#### Defined in

actions/cloudfront.ts:521

___

### ListFunctions

• **ListFunctions** = ``"cloudfront:ListFunctions"``

Grants permission to get a list of CloudFront functions

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFunctions.html

#### Defined in

actions/cloudfront.ts:527

___

### ListInvalidations

• **ListInvalidations** = ``"cloudfront:ListInvalidations"``

Grants permission to list your invalidation batches

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListInvalidations.html

#### Defined in

actions/cloudfront.ts:533

___

### ListKeyGroups

• **ListKeyGroups** = ``"cloudfront:ListKeyGroups"``

Grants permission to list all key groups that have been created in CloudFront f
or this account

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyGroups.html

#### Defined in

actions/cloudfront.ts:540

___

### ListKeyValueStores

• **ListKeyValueStores** = ``"cloudfront:ListKeyValueStores"``

Grants permission to get a list of CloudFront KeyValueStores

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyValueStores.html

#### Defined in

actions/cloudfront.ts:546

___

### ListOriginAccessControls

• **ListOriginAccessControls** = ``"cloudfront:ListOriginAccessControls"``

Grants permission to list all origin access controls in the account

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginAccessControls.html

#### Defined in

actions/cloudfront.ts:552

___

### ListOriginRequestPolicies

• **ListOriginRequestPolicies** = ``"cloudfront:ListOriginRequestPolicies"``

Grants permission to list all origin request policies that have been created in
CloudFront for this account

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginRequestPolicies.html

#### Defined in

actions/cloudfront.ts:559

___

### ListPublicKeys

• **ListPublicKeys** = ``"cloudfront:ListPublicKeys"``

Grants permission to list all public keys that have been added to CloudFront fo
r this account

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListPublicKeys.html

#### Defined in

actions/cloudfront.ts:566

___

### ListRateCards

• **ListRateCards** = ``"cloudfront:ListRateCards"``

Grants permission to list CloudFront rate cards for the account

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html

#### Defined in

actions/cloudfront.ts:572

___

### ListRealtimeLogConfigs

• **ListRealtimeLogConfigs** = ``"cloudfront:ListRealtimeLogConfigs"``

Grants permission to get a list of real-time log configurations

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListRealtimeLogConfigs.html

#### Defined in

actions/cloudfront.ts:578

___

### ListResponseHeadersPolicies

• **ListResponseHeadersPolicies** = ``"cloudfront:ListResponseHeadersPolicies"``

Grants permission to list all response headers policies that have been created
in CloudFront for this account

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListResponseHeadersPolicies.html

#### Defined in

actions/cloudfront.ts:585

___

### ListSavingsPlans

• **ListSavingsPlans** = ``"cloudfront:ListSavingsPlans"``

Grants permission to list savings plans in the account

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html

#### Defined in

actions/cloudfront.ts:591

___

### ListStreamingDistributions

• **ListStreamingDistributions** = ``"cloudfront:ListStreamingDistributions"``

Grants permission to list your RTMP distributions

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListStreamingDistributions.html

#### Defined in

actions/cloudfront.ts:597

___

### ListTagsForResource

• **ListTagsForResource** = ``"cloudfront:ListTagsForResource"``

Grants permission to list tags for a CloudFront resource

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/cloudfront.ts:603

___

### ListUsages

• **ListUsages** = ``"cloudfront:ListUsages"``

Grants permission to list CloudFront usage

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html

#### Defined in

actions/cloudfront.ts:609

___

### PublishFunction

• **PublishFunction** = ``"cloudfront:PublishFunction"``

Grants permission to publish a CloudFront function

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_PublishFunction.html

#### Defined in

actions/cloudfront.ts:615

___

### TagResource

• **TagResource** = ``"cloudfront:TagResource"``

Grants permission to add tags to a CloudFront resource

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TagResource.html

#### Defined in

actions/cloudfront.ts:621

___

### TestFunction

• **TestFunction** = ``"cloudfront:TestFunction"``

Grants permission to test a CloudFront function

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TestFunction.html

#### Defined in

actions/cloudfront.ts:627

___

### UntagResource

• **UntagResource** = ``"cloudfront:UntagResource"``

Grants permission to remove tags from a CloudFront resource

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UntagResource.html

#### Defined in

actions/cloudfront.ts:633

___

### UpdateCachePolicy

• **UpdateCachePolicy** = ``"cloudfront:UpdateCachePolicy"``

Grants permission to update a cache policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCachePolicy.html

#### Defined in

actions/cloudfront.ts:639

___

### UpdateCloudFrontOriginAccessIdentity

• **UpdateCloudFrontOriginAccessIdentity** = ``"cloudfront:UpdateCloudFrontOriginAccessIdentity"``

Grants permission to set the configuration for a CloudFront origin access ident
ity

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCloudFrontOriginAccessIdentity.html

#### Defined in

actions/cloudfront.ts:646

___

### UpdateContinuousDeploymentPolicy

• **UpdateContinuousDeploymentPolicy** = ``"cloudfront:UpdateContinuousDeploymentPolicy"``

Grants permission to update a continuous-deployment policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateContinuousDeploymentPolicy.html

#### Defined in

actions/cloudfront.ts:652

___

### UpdateDistribution

• **UpdateDistribution** = ``"cloudfront:UpdateDistribution"``

Grants permission to update the configuration for a web distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html

#### Defined in

actions/cloudfront.ts:658

___

### UpdateFieldLevelEncryptionConfig

• **UpdateFieldLevelEncryptionConfig** = ``"cloudfront:UpdateFieldLevelEncryptionConfig"``

Grants permission to update a field-level encryption configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionConfig.html

#### Defined in

actions/cloudfront.ts:664

___

### UpdateFieldLevelEncryptionProfile

• **UpdateFieldLevelEncryptionProfile** = ``"cloudfront:UpdateFieldLevelEncryptionProfile"``

Grants permission to update a field-level encryption profile

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionProfile.html

#### Defined in

actions/cloudfront.ts:670

___

### UpdateFunction

• **UpdateFunction** = ``"cloudfront:UpdateFunction"``

Grants permission to update a CloudFront function

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFunction.html

#### Defined in

actions/cloudfront.ts:676

___

### UpdateKeyGroup

• **UpdateKeyGroup** = ``"cloudfront:UpdateKeyGroup"``

Grants permission to update a key group

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyGroup.html

#### Defined in

actions/cloudfront.ts:682

___

### UpdateKeyValueStore

• **UpdateKeyValueStore** = ``"cloudfront:UpdateKeyValueStore"``

Grants permission to update a CloudFront KeyValueStore

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyValueStore.html

#### Defined in

actions/cloudfront.ts:688

___

### UpdateOriginAccessControl

• **UpdateOriginAccessControl** = ``"cloudfront:UpdateOriginAccessControl"``

Grants permission to update an origin access control

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginAccessControl.html

#### Defined in

actions/cloudfront.ts:694

___

### UpdateOriginRequestPolicy

• **UpdateOriginRequestPolicy** = ``"cloudfront:UpdateOriginRequestPolicy"``

Grants permission to update an origin request policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginRequestPolicy.html

#### Defined in

actions/cloudfront.ts:700

___

### UpdatePublicKey

• **UpdatePublicKey** = ``"cloudfront:UpdatePublicKey"``

Grants permission to update public key information

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html

#### Defined in

actions/cloudfront.ts:706

___

### UpdateRealtimeLogConfig

• **UpdateRealtimeLogConfig** = ``"cloudfront:UpdateRealtimeLogConfig"``

Grants permission to update a real-time log configuration

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateRealtimeLogConfig.html

#### Defined in

actions/cloudfront.ts:712

___

### UpdateResponseHeadersPolicy

• **UpdateResponseHeadersPolicy** = ``"cloudfront:UpdateResponseHeadersPolicy"``

Grants permission to update a response headers policy

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateResponseHeadersPolicy.html

#### Defined in

actions/cloudfront.ts:718

___

### UpdateSavingsPlan

• **UpdateSavingsPlan** = ``"cloudfront:UpdateSavingsPlan"``

Grants permission to update a savings plan

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cf-api-permissions-ref.html

#### Defined in

actions/cloudfront.ts:724

___

### UpdateStreamingDistribution

• **UpdateStreamingDistribution** = ``"cloudfront:UpdateStreamingDistribution"``

Grants permission to update the configuration for an RTMP distribution

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateStreamingDistribution.html

#### Defined in

actions/cloudfront.ts:730
