[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEksActions

# Enumeration: AwsEksActions

All IAM policy actions for Amazon Elastic Kubernetes Service (EKS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastickubernetesservice.html

2024-02-12T09:57:10.757Z

## Table of contents

### Enumeration Members

- [AccessKubernetesApi](AwsEksActions.md#accesskubernetesapi)
- [AssociateAccessPolicy](AwsEksActions.md#associateaccesspolicy)
- [AssociateEncryptionConfig](AwsEksActions.md#associateencryptionconfig)
- [AssociateIdentityProviderConfig](AwsEksActions.md#associateidentityproviderconfig)
- [CreateAccessEntry](AwsEksActions.md#createaccessentry)
- [CreateAddon](AwsEksActions.md#createaddon)
- [CreateCluster](AwsEksActions.md#createcluster)
- [CreateEksAnywhereSubscription](AwsEksActions.md#createeksanywheresubscription)
- [CreateFargateProfile](AwsEksActions.md#createfargateprofile)
- [CreateNodegroup](AwsEksActions.md#createnodegroup)
- [CreatePodIdentityAssociation](AwsEksActions.md#createpodidentityassociation)
- [DeleteAccessEntry](AwsEksActions.md#deleteaccessentry)
- [DeleteAddon](AwsEksActions.md#deleteaddon)
- [DeleteCluster](AwsEksActions.md#deletecluster)
- [DeleteEksAnywhereSubscription](AwsEksActions.md#deleteeksanywheresubscription)
- [DeleteFargateProfile](AwsEksActions.md#deletefargateprofile)
- [DeleteNodegroup](AwsEksActions.md#deletenodegroup)
- [DeletePodIdentityAssociation](AwsEksActions.md#deletepodidentityassociation)
- [DeregisterCluster](AwsEksActions.md#deregistercluster)
- [DescribeAccessEntry](AwsEksActions.md#describeaccessentry)
- [DescribeAddon](AwsEksActions.md#describeaddon)
- [DescribeAddonConfiguration](AwsEksActions.md#describeaddonconfiguration)
- [DescribeAddonVersions](AwsEksActions.md#describeaddonversions)
- [DescribeCluster](AwsEksActions.md#describecluster)
- [DescribeEksAnywhereSubscription](AwsEksActions.md#describeeksanywheresubscription)
- [DescribeFargateProfile](AwsEksActions.md#describefargateprofile)
- [DescribeIdentityProviderConfig](AwsEksActions.md#describeidentityproviderconfig)
- [DescribeInsight](AwsEksActions.md#describeinsight)
- [DescribeNodegroup](AwsEksActions.md#describenodegroup)
- [DescribePodIdentityAssociation](AwsEksActions.md#describepodidentityassociation)
- [DescribeUpdate](AwsEksActions.md#describeupdate)
- [DisassociateAccessPolicy](AwsEksActions.md#disassociateaccesspolicy)
- [DisassociateIdentityProviderConfig](AwsEksActions.md#disassociateidentityproviderconfig)
- [ListAccessEntries](AwsEksActions.md#listaccessentries)
- [ListAccessPolicies](AwsEksActions.md#listaccesspolicies)
- [ListAddons](AwsEksActions.md#listaddons)
- [ListAssociatedAccessPolicies](AwsEksActions.md#listassociatedaccesspolicies)
- [ListClusters](AwsEksActions.md#listclusters)
- [ListEksAnywhereSubscriptions](AwsEksActions.md#listeksanywheresubscriptions)
- [ListFargateProfiles](AwsEksActions.md#listfargateprofiles)
- [ListIdentityProviderConfigs](AwsEksActions.md#listidentityproviderconfigs)
- [ListInsights](AwsEksActions.md#listinsights)
- [ListNodegroups](AwsEksActions.md#listnodegroups)
- [ListPodIdentityAssociations](AwsEksActions.md#listpodidentityassociations)
- [ListTagsForResource](AwsEksActions.md#listtagsforresource)
- [ListUpdates](AwsEksActions.md#listupdates)
- [RegisterCluster](AwsEksActions.md#registercluster)
- [TagResource](AwsEksActions.md#tagresource)
- [UntagResource](AwsEksActions.md#untagresource)
- [UpdateAccessEntry](AwsEksActions.md#updateaccessentry)
- [UpdateAddon](AwsEksActions.md#updateaddon)
- [UpdateClusterConfig](AwsEksActions.md#updateclusterconfig)
- [UpdateClusterVersion](AwsEksActions.md#updateclusterversion)
- [UpdateEksAnywhereSubscription](AwsEksActions.md#updateeksanywheresubscription)
- [UpdateNodegroupConfig](AwsEksActions.md#updatenodegroupconfig)
- [UpdateNodegroupVersion](AwsEksActions.md#updatenodegroupversion)
- [UpdatePodIdentityAssociation](AwsEksActions.md#updatepodidentityassociation)

## Enumeration Members

### AccessKubernetesApi

• **AccessKubernetesApi** = ``"eks:AccessKubernetesApi"``

Grants permission to view Kubernetes objects via AWS EKS console

See https://docs.aws.amazon.com/eks/latest/userguide/view-workloads.html

#### Defined in

actions/eks.ts:17

___

### AssociateAccessPolicy

• **AssociateAccessPolicy** = ``"eks:AssociateAccessPolicy"``

Grants permission to associate an Amazon EKS access policy to an Amazon EKS acc
ess entry

See https://docs.aws.amazon.com/eks/latest/APIReference/API_AssociateAccessPolicy.html

#### Defined in

actions/eks.ts:24

___

### AssociateEncryptionConfig

• **AssociateEncryptionConfig** = ``"eks:AssociateEncryptionConfig"``

Grants permission to associate encryption configuration to a cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_AssociateEncryptionConfig.html

#### Defined in

actions/eks.ts:30

___

### AssociateIdentityProviderConfig

• **AssociateIdentityProviderConfig** = ``"eks:AssociateIdentityProviderConfig"``

Grants permission to associate an identity provider configuration to a cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_AssociateIdentityProviderConfig.html

#### Defined in

actions/eks.ts:36

___

### CreateAccessEntry

• **CreateAccessEntry** = ``"eks:CreateAccessEntry"``

Grants permission to create an Amazon EKS access entry

See https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateAccessEntry.html

#### Defined in

actions/eks.ts:42

___

### CreateAddon

• **CreateAddon** = ``"eks:CreateAddon"``

Grants permission to create an Amazon EKS add-on

See https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateAddon.html

#### Defined in

actions/eks.ts:48

___

### CreateCluster

• **CreateCluster** = ``"eks:CreateCluster"``

Grants permission to create an Amazon EKS cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateCluster.html

#### Defined in

actions/eks.ts:54

___

### CreateEksAnywhereSubscription

• **CreateEksAnywhereSubscription** = ``"eks:CreateEksAnywhereSubscription"``

Grants permission to create an EKS Anywhere subscription

See https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateEksAnywhereSubscription.html

#### Defined in

actions/eks.ts:60

___

### CreateFargateProfile

• **CreateFargateProfile** = ``"eks:CreateFargateProfile"``

Grants permission to create an AWS Fargate profile

See https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateFargateProfile.html

#### Defined in

actions/eks.ts:66

___

### CreateNodegroup

• **CreateNodegroup** = ``"eks:CreateNodegroup"``

Grants permission to create an Amazon EKS Nodegroup

See https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateNodegroup.html

#### Defined in

actions/eks.ts:72

___

### CreatePodIdentityAssociation

• **CreatePodIdentityAssociation** = ``"eks:CreatePodIdentityAssociation"``

Grants permission to create an EKS Pod Identity association

See https://docs.aws.amazon.com/eks/latest/APIReference/API_CreatePodIdentityAssociation.html

#### Defined in

actions/eks.ts:78

___

### DeleteAccessEntry

• **DeleteAccessEntry** = ``"eks:DeleteAccessEntry"``

Grants permission to delete an Amazon EKS access entry

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteAccessEntry.html

#### Defined in

actions/eks.ts:84

___

### DeleteAddon

• **DeleteAddon** = ``"eks:DeleteAddon"``

Grants permission to delete an Amazon EKS add-on

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteAddon.html

#### Defined in

actions/eks.ts:90

___

### DeleteCluster

• **DeleteCluster** = ``"eks:DeleteCluster"``

Grants permission to delete an Amazon EKS cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteCluster.html

#### Defined in

actions/eks.ts:96

___

### DeleteEksAnywhereSubscription

• **DeleteEksAnywhereSubscription** = ``"eks:DeleteEksAnywhereSubscription"``

Grants permission to describe an EKS Anywhere subscription

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteEksAnywhereSubscription.html

#### Defined in

actions/eks.ts:102

___

### DeleteFargateProfile

• **DeleteFargateProfile** = ``"eks:DeleteFargateProfile"``

Grants permission to delete an AWS Fargate profile

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteFargateProfile.html

#### Defined in

actions/eks.ts:108

___

### DeleteNodegroup

• **DeleteNodegroup** = ``"eks:DeleteNodegroup"``

Grants permission to delete an Amazon EKS Nodegroup

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteNodegroup.html

#### Defined in

actions/eks.ts:114

___

### DeletePodIdentityAssociation

• **DeletePodIdentityAssociation** = ``"eks:DeletePodIdentityAssociation"``

Grants permission to delete an EKS Pod Identity association

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DeletePodIdentityAssociation.html

#### Defined in

actions/eks.ts:120

___

### DeregisterCluster

• **DeregisterCluster** = ``"eks:DeregisterCluster"``

Grants permission to deregister an External cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DeregisterCluster.html

#### Defined in

actions/eks.ts:126

___

### DescribeAccessEntry

• **DescribeAccessEntry** = ``"eks:DescribeAccessEntry"``

Grants permission to describe an Amazon EKS access entry

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAccessEntry.html

#### Defined in

actions/eks.ts:132

___

### DescribeAddon

• **DescribeAddon** = ``"eks:DescribeAddon"``

Grants permission to retrieve descriptive information about an Amazon EKS add-o
n

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddon.html

#### Defined in

actions/eks.ts:139

___

### DescribeAddonConfiguration

• **DescribeAddonConfiguration** = ``"eks:DescribeAddonConfiguration"``

Grants permission to list configuration options about an Amazon EKS add-on

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html

#### Defined in

actions/eks.ts:145

___

### DescribeAddonVersions

• **DescribeAddonVersions** = ``"eks:DescribeAddonVersions"``

Grants permission to retrieve descriptive version information about the add-ons
that Amazon EKS Add-ons supports

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html

#### Defined in

actions/eks.ts:152

___

### DescribeCluster

• **DescribeCluster** = ``"eks:DescribeCluster"``

Grants permission to retrieve descriptive information about an Amazon EKS clust
er

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeCluster.html

#### Defined in

actions/eks.ts:159

___

### DescribeEksAnywhereSubscription

• **DescribeEksAnywhereSubscription** = ``"eks:DescribeEksAnywhereSubscription"``

Grants permission to describe an EKS Anywhere subscription

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeEksAnywhereSubscription.html

#### Defined in

actions/eks.ts:165

___

### DescribeFargateProfile

• **DescribeFargateProfile** = ``"eks:DescribeFargateProfile"``

Grants permission to retrieve descriptive information about an AWS Fargate prof
ile associated with a cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeFargateProfile.html

#### Defined in

actions/eks.ts:172

___

### DescribeIdentityProviderConfig

• **DescribeIdentityProviderConfig** = ``"eks:DescribeIdentityProviderConfig"``

Grants permission to retrieve descriptive information about an Idp config assoc
iated with a cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeIdentityProviderConfig.html

#### Defined in

actions/eks.ts:179

___

### DescribeInsight

• **DescribeInsight** = ``"eks:DescribeInsight"``

Grants permission to retrieve descriptive information of a detected insight for
a specified cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeInsight.html

#### Defined in

actions/eks.ts:186

___

### DescribeNodegroup

• **DescribeNodegroup** = ``"eks:DescribeNodegroup"``

Grants permission to retrieve descriptive information about an Amazon EKS nodeg
roup

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeNodegroup.html

#### Defined in

actions/eks.ts:193

___

### DescribePodIdentityAssociation

• **DescribePodIdentityAssociation** = ``"eks:DescribePodIdentityAssociation"``

Grants permission to describe an EKS Pod Identity association

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribePodIdentityAssociation.html

#### Defined in

actions/eks.ts:199

___

### DescribeUpdate

• **DescribeUpdate** = ``"eks:DescribeUpdate"``

Grants permission to retrieve a given update for a given Amazon EKS cluster/nod
egroup/add-on (in the specified or default region)

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeUpdate.html

#### Defined in

actions/eks.ts:206

___

### DisassociateAccessPolicy

• **DisassociateAccessPolicy** = ``"eks:DisassociateAccessPolicy"``

Grants permission to disassociate an Amazon EKS access policy from an Amazon EK
S acces entry

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DisassociateAccessPolicy.html

#### Defined in

actions/eks.ts:213

___

### DisassociateIdentityProviderConfig

• **DisassociateIdentityProviderConfig** = ``"eks:DisassociateIdentityProviderConfig"``

Grants permission to delete an asssociated Idp config

See https://docs.aws.amazon.com/eks/latest/APIReference/API_DisassociateIdentityProviderConfig.html

#### Defined in

actions/eks.ts:219

___

### ListAccessEntries

• **ListAccessEntries** = ``"eks:ListAccessEntries"``

Grants permission to list all Amazon EKS access entries

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAccessEntries.html

#### Defined in

actions/eks.ts:225

___

### ListAccessPolicies

• **ListAccessPolicies** = ``"eks:ListAccessPolicies"``

Grants permission to list Amazon EKS access policies

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAccessPolicies.html

#### Defined in

actions/eks.ts:231

___

### ListAddons

• **ListAddons** = ``"eks:ListAddons"``

Grants permission to list the Amazon EKS add-ons in your AWS account (in the sp
ecified or default region) for a given cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html

#### Defined in

actions/eks.ts:238

___

### ListAssociatedAccessPolicies

• **ListAssociatedAccessPolicies** = ``"eks:ListAssociatedAccessPolicies"``

Grants permission to list associated access policy on and Amazon EKS access ent
ry

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAssociatedAccessPolicies.html

#### Defined in

actions/eks.ts:245

___

### ListClusters

• **ListClusters** = ``"eks:ListClusters"``

Grants permission to list the Amazon EKS clusters in your AWS account (in the s
pecified or default region)

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListClusters.html

#### Defined in

actions/eks.ts:252

___

### ListEksAnywhereSubscriptions

• **ListEksAnywhereSubscriptions** = ``"eks:ListEksAnywhereSubscriptions"``

Grants permission to list EKS Anywhere subscriptions

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListEksAnywhereSubscriptions.html

#### Defined in

actions/eks.ts:258

___

### ListFargateProfiles

• **ListFargateProfiles** = ``"eks:ListFargateProfiles"``

Grants permission to list the AWS Fargate profiles in your AWS account (in the
specified or default region) associated with a given cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListFargateProfiles.html

#### Defined in

actions/eks.ts:265

___

### ListIdentityProviderConfigs

• **ListIdentityProviderConfigs** = ``"eks:ListIdentityProviderConfigs"``

Grants permission to list the Idp configs in your AWS account (in the specified
or default region) associated with a given cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListIdentityProviderConfigs.html

#### Defined in

actions/eks.ts:272

___

### ListInsights

• **ListInsights** = ``"eks:ListInsights"``

Grants permission to list all detected insights for a specified cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListInsights.html

#### Defined in

actions/eks.ts:278

___

### ListNodegroups

• **ListNodegroups** = ``"eks:ListNodegroups"``

Grants permission to list the Amazon EKS nodegroups in your AWS account (in the
specified or default region) attached to given cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListNodegroups.html

#### Defined in

actions/eks.ts:285

___

### ListPodIdentityAssociations

• **ListPodIdentityAssociations** = ``"eks:ListPodIdentityAssociations"``

Grants permission to list EKS Pod Identity associations

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListPodIdentityAssociations.html

#### Defined in

actions/eks.ts:291

___

### ListTagsForResource

• **ListTagsForResource** = ``"eks:ListTagsForResource"``

Grants permission to list tags for the specified resource

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/eks.ts:297

___

### ListUpdates

• **ListUpdates** = ``"eks:ListUpdates"``

Grants permission to list the updates for a given Amazon EKS cluster/nodegroup/
add-on (in the specified or default region)

See https://docs.aws.amazon.com/eks/latest/APIReference/API_ListUpdates.html

#### Defined in

actions/eks.ts:304

___

### RegisterCluster

• **RegisterCluster** = ``"eks:RegisterCluster"``

Grants permission to register an External cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_RegisterCluster.html

#### Defined in

actions/eks.ts:310

___

### TagResource

• **TagResource** = ``"eks:TagResource"``

Grants permission to tag the specified resource

See https://docs.aws.amazon.com/eks/latest/APIReference/API_TagResource.html

#### Defined in

actions/eks.ts:316

___

### UntagResource

• **UntagResource** = ``"eks:UntagResource"``

Grants permission to untag the specified resource

See https://docs.aws.amazon.com/eks/latest/APIReference/API_UntagResource.html

#### Defined in

actions/eks.ts:322

___

### UpdateAccessEntry

• **UpdateAccessEntry** = ``"eks:UpdateAccessEntry"``

Grants permission to update an Amazon EKS access entry

See https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAccessEntry.html

#### Defined in

actions/eks.ts:328

___

### UpdateAddon

• **UpdateAddon** = ``"eks:UpdateAddon"``

Grants permission to update Amazon EKS add-on configurations, such as the VPC-C
NI version

See https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html

#### Defined in

actions/eks.ts:335

___

### UpdateClusterConfig

• **UpdateClusterConfig** = ``"eks:UpdateClusterConfig"``

Grants permission to update Amazon EKS cluster configurations (eg: API server e
ndpoint access)

See https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterConfig.html

#### Defined in

actions/eks.ts:342

___

### UpdateClusterVersion

• **UpdateClusterVersion** = ``"eks:UpdateClusterVersion"``

Grants permission to update the Kubernetes version of an Amazon EKS cluster

See https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterVersion.html

#### Defined in

actions/eks.ts:348

___

### UpdateEksAnywhereSubscription

• **UpdateEksAnywhereSubscription** = ``"eks:UpdateEksAnywhereSubscription"``

Grants permission to update an EKS Anywhere subscription

See https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateEksAnywhereSubscription.html

#### Defined in

actions/eks.ts:354

___

### UpdateNodegroupConfig

• **UpdateNodegroupConfig** = ``"eks:UpdateNodegroupConfig"``

Grants permission to update Amazon EKS nodegroup configurations (eg: min/max/de
sired capacity or labels)

See https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupConfig.html

#### Defined in

actions/eks.ts:361

___

### UpdateNodegroupVersion

• **UpdateNodegroupVersion** = ``"eks:UpdateNodegroupVersion"``

Grants permission to update the Kubernetes version of an Amazon EKS nodegroup

See https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupVersion.html

#### Defined in

actions/eks.ts:367

___

### UpdatePodIdentityAssociation

• **UpdatePodIdentityAssociation** = ``"eks:UpdatePodIdentityAssociation"``

Grants permission to update an EKS Pod Identity association

See https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdatePodIdentityAssociation.html

#### Defined in

actions/eks.ts:373
