[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAossActions

# Enumeration: AwsAossActions

All IAM policy actions for Amazon OpenSearch Serverless (AOSS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchserverless.html

2024-02-12T09:58:32.171Z

## Table of contents

### Enumeration Members

- [APIAccessAll](AwsAossActions.md#apiaccessall)
- [BatchGetCollection](AwsAossActions.md#batchgetcollection)
- [BatchGetEffectiveLifecyclePolicy](AwsAossActions.md#batchgeteffectivelifecyclepolicy)
- [BatchGetLifecyclePolicy](AwsAossActions.md#batchgetlifecyclepolicy)
- [BatchGetVpcEndpoint](AwsAossActions.md#batchgetvpcendpoint)
- [CreateAccessPolicy](AwsAossActions.md#createaccesspolicy)
- [CreateCollection](AwsAossActions.md#createcollection)
- [CreateLifecyclePolicy](AwsAossActions.md#createlifecyclepolicy)
- [CreateSecurityConfig](AwsAossActions.md#createsecurityconfig)
- [CreateSecurityPolicy](AwsAossActions.md#createsecuritypolicy)
- [CreateVpcEndpoint](AwsAossActions.md#createvpcendpoint)
- [DashboardsAccessAll](AwsAossActions.md#dashboardsaccessall)
- [DeleteAccessPolicy](AwsAossActions.md#deleteaccesspolicy)
- [DeleteCollection](AwsAossActions.md#deletecollection)
- [DeleteLifecyclePolicy](AwsAossActions.md#deletelifecyclepolicy)
- [DeleteSecurityConfig](AwsAossActions.md#deletesecurityconfig)
- [DeleteSecurityPolicy](AwsAossActions.md#deletesecuritypolicy)
- [DeleteVpcEndpoint](AwsAossActions.md#deletevpcendpoint)
- [GetAccessPolicy](AwsAossActions.md#getaccesspolicy)
- [GetAccountSettings](AwsAossActions.md#getaccountsettings)
- [GetPoliciesStats](AwsAossActions.md#getpoliciesstats)
- [GetSecurityConfig](AwsAossActions.md#getsecurityconfig)
- [GetSecurityPolicy](AwsAossActions.md#getsecuritypolicy)
- [ListAccessPolicies](AwsAossActions.md#listaccesspolicies)
- [ListCollections](AwsAossActions.md#listcollections)
- [ListLifecyclePolicies](AwsAossActions.md#listlifecyclepolicies)
- [ListSecurityConfigs](AwsAossActions.md#listsecurityconfigs)
- [ListSecurityPolicies](AwsAossActions.md#listsecuritypolicies)
- [ListTagsForResource](AwsAossActions.md#listtagsforresource)
- [ListVpcEndpoints](AwsAossActions.md#listvpcendpoints)
- [TagResource](AwsAossActions.md#tagresource)
- [UntagResource](AwsAossActions.md#untagresource)
- [UpdateAccessPolicy](AwsAossActions.md#updateaccesspolicy)
- [UpdateAccountSettings](AwsAossActions.md#updateaccountsettings)
- [UpdateCollection](AwsAossActions.md#updatecollection)
- [UpdateLifecyclePolicy](AwsAossActions.md#updatelifecyclepolicy)
- [UpdateSecurityConfig](AwsAossActions.md#updatesecurityconfig)
- [UpdateSecurityPolicy](AwsAossActions.md#updatesecuritypolicy)
- [UpdateVpcEndpoint](AwsAossActions.md#updatevpcendpoint)

## Enumeration Members

### APIAccessAll

• **APIAccessAll** = ``"aoss:APIAccessAll"``

Grant permission to all the supported Opensearch APIs

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_APIAccessAll.html

#### Defined in

actions/aoss.ts:17

___

### BatchGetCollection

• **BatchGetCollection** = ``"aoss:BatchGetCollection"``

Grants permission to get attributes for one or more collections

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_BatchGetCollection.html

#### Defined in

actions/aoss.ts:23

___

### BatchGetEffectiveLifecyclePolicy

• **BatchGetEffectiveLifecyclePolicy** = ``"aoss:BatchGetEffectiveLifecyclePolicy"``

Grants permission to get the information about a lifecycle policy applied to on
e or more AOSS resources

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_BatchGetEffectiveLifecyclePolicy.html

#### Defined in

actions/aoss.ts:30

___

### BatchGetLifecyclePolicy

• **BatchGetLifecyclePolicy** = ``"aoss:BatchGetLifecyclePolicy"``

Grants permission to get information about one or more lifecycle policies

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_BatchGetLifecyclePolicy.html

#### Defined in

actions/aoss.ts:36

___

### BatchGetVpcEndpoint

• **BatchGetVpcEndpoint** = ``"aoss:BatchGetVpcEndpoint"``

Grants permission to get attributes for one or more VPC endpoints

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_BatchGetVpcEndpoint.html

#### Defined in

actions/aoss.ts:42

___

### CreateAccessPolicy

• **CreateAccessPolicy** = ``"aoss:CreateAccessPolicy"``

Grants permission to create a data access policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateAccessPolicy.html

#### Defined in

actions/aoss.ts:48

___

### CreateCollection

• **CreateCollection** = ``"aoss:CreateCollection"``

Grants permission to create a serverless collection

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateCollection.html

#### Defined in

actions/aoss.ts:54

___

### CreateLifecyclePolicy

• **CreateLifecyclePolicy** = ``"aoss:CreateLifecyclePolicy"``

Grants permission to create a lifecycle policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateLifecyclePolicy.html

#### Defined in

actions/aoss.ts:60

___

### CreateSecurityConfig

• **CreateSecurityConfig** = ``"aoss:CreateSecurityConfig"``

Grants permission to create a serverless security configuration

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateSecurityConfig.html

#### Defined in

actions/aoss.ts:66

___

### CreateSecurityPolicy

• **CreateSecurityPolicy** = ``"aoss:CreateSecurityPolicy"``

Grants permission to create a network or encryption policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateSecurityPolicy.html

#### Defined in

actions/aoss.ts:72

___

### CreateVpcEndpoint

• **CreateVpcEndpoint** = ``"aoss:CreateVpcEndpoint"``

Grants permission to create an OpenSearch-Serverless-managed interface VPC endp
oint

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateVpcEndpoint.html

#### Defined in

actions/aoss.ts:79

___

### DashboardsAccessAll

• **DashboardsAccessAll** = ``"aoss:DashboardsAccessAll"``

Grants permission to Opensearch Serverless Dashboards

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DashboardsAccessAll.html

#### Defined in

actions/aoss.ts:85

___

### DeleteAccessPolicy

• **DeleteAccessPolicy** = ``"aoss:DeleteAccessPolicy"``

Grants permission to delete a data access policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteAccessPolicy.html

#### Defined in

actions/aoss.ts:91

___

### DeleteCollection

• **DeleteCollection** = ``"aoss:DeleteCollection"``

Grants permission to delete a serverless collection

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteCollection.html

#### Defined in

actions/aoss.ts:97

___

### DeleteLifecyclePolicy

• **DeleteLifecyclePolicy** = ``"aoss:DeleteLifecyclePolicy"``

Grants permission to delete a lifecycle policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteLifecyclePolicy.html

#### Defined in

actions/aoss.ts:103

___

### DeleteSecurityConfig

• **DeleteSecurityConfig** = ``"aoss:DeleteSecurityConfig"``

Grants permission to delete a security configuration

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteSecurityConfig.html

#### Defined in

actions/aoss.ts:109

___

### DeleteSecurityPolicy

• **DeleteSecurityPolicy** = ``"aoss:DeleteSecurityPolicy"``

Grants permission to delete a security policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteSecurityPolicy.html

#### Defined in

actions/aoss.ts:115

___

### DeleteVpcEndpoint

• **DeleteVpcEndpoint** = ``"aoss:DeleteVpcEndpoint"``

Grants permission to delete an OpenSearch Serverless-managed interface VPC endp
oint

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteVpcEndpoint.html

#### Defined in

actions/aoss.ts:122

___

### GetAccessPolicy

• **GetAccessPolicy** = ``"aoss:GetAccessPolicy"``

Grants permission to get information about a data access policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_GetAccessPolicy.html

#### Defined in

actions/aoss.ts:128

___

### GetAccountSettings

• **GetAccountSettings** = ``"aoss:GetAccountSettings"``

Grants permission to get account settings, including capacity settings

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_GetAccountSettings.html

#### Defined in

actions/aoss.ts:134

___

### GetPoliciesStats

• **GetPoliciesStats** = ``"aoss:GetPoliciesStats"``

Grants permission to get statistis about the security policies in your account

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_GetPoliciesStats.html

#### Defined in

actions/aoss.ts:140

___

### GetSecurityConfig

• **GetSecurityConfig** = ``"aoss:GetSecurityConfig"``

Grants permission to get information about a serverless security configuration

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_GetSecurityConfig.html

#### Defined in

actions/aoss.ts:146

___

### GetSecurityPolicy

• **GetSecurityPolicy** = ``"aoss:GetSecurityPolicy"``

Grants permission to get information about a security policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_GetSecurityPolicy.html

#### Defined in

actions/aoss.ts:152

___

### ListAccessPolicies

• **ListAccessPolicies** = ``"aoss:ListAccessPolicies"``

Grants permission to list data access policies

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListAccessPolicies.html

#### Defined in

actions/aoss.ts:158

___

### ListCollections

• **ListCollections** = ``"aoss:ListCollections"``

Grants permission to list collections

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListCollections.html

#### Defined in

actions/aoss.ts:164

___

### ListLifecyclePolicies

• **ListLifecyclePolicies** = ``"aoss:ListLifecyclePolicies"``

Grants permission to list lifecycle policies

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListLifecyclePolicies.html

#### Defined in

actions/aoss.ts:170

___

### ListSecurityConfigs

• **ListSecurityConfigs** = ``"aoss:ListSecurityConfigs"``

Grants permission to list security configurations

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListSecurityConfigs.html

#### Defined in

actions/aoss.ts:176

___

### ListSecurityPolicies

• **ListSecurityPolicies** = ``"aoss:ListSecurityPolicies"``

Grants permission to list security policies

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListSecurityPolicies.html

#### Defined in

actions/aoss.ts:182

___

### ListTagsForResource

• **ListTagsForResource** = ``"aoss:ListTagsForResource"``

Grants permission to list tags for a collection

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListTagsForResource.html

#### Defined in

actions/aoss.ts:188

___

### ListVpcEndpoints

• **ListVpcEndpoints** = ``"aoss:ListVpcEndpoints"``

Grants permission to list OpenSearch Serverless-managed VPC endpoints

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListVpcEndpoints.html

#### Defined in

actions/aoss.ts:194

___

### TagResource

• **TagResource** = ``"aoss:TagResource"``

Grants permission to tag a serverless collection

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_TagResource.html

#### Defined in

actions/aoss.ts:200

___

### UntagResource

• **UntagResource** = ``"aoss:UntagResource"``

Grants permission to remove tags from a collection

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UntagResource.html

#### Defined in

actions/aoss.ts:206

___

### UpdateAccessPolicy

• **UpdateAccessPolicy** = ``"aoss:UpdateAccessPolicy"``

Grants permission to update a data access policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateAccessPolicy.html

#### Defined in

actions/aoss.ts:212

___

### UpdateAccountSettings

• **UpdateAccountSettings** = ``"aoss:UpdateAccountSettings"``

Grants permission to update account settings, including capacity settings

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateAccountSettings.html

#### Defined in

actions/aoss.ts:218

___

### UpdateCollection

• **UpdateCollection** = ``"aoss:UpdateCollection"``

Grants permission to update a collection

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateCollection.html

#### Defined in

actions/aoss.ts:224

___

### UpdateLifecyclePolicy

• **UpdateLifecyclePolicy** = ``"aoss:UpdateLifecyclePolicy"``

Grants permission to update a lifecycle policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateLifecyclePolicy.html

#### Defined in

actions/aoss.ts:230

___

### UpdateSecurityConfig

• **UpdateSecurityConfig** = ``"aoss:UpdateSecurityConfig"``

Grants permission to update a security configuration

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateSecurityConfig.html

#### Defined in

actions/aoss.ts:236

___

### UpdateSecurityPolicy

• **UpdateSecurityPolicy** = ``"aoss:UpdateSecurityPolicy"``

Grants permission to update a security policy

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateSecurityPolicy.html

#### Defined in

actions/aoss.ts:242

___

### UpdateVpcEndpoint

• **UpdateVpcEndpoint** = ``"aoss:UpdateVpcEndpoint"``

Grants permission to update an OpenSearch Serverless-managed VPC endpoint

See https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateVpcEndpoint.html

#### Defined in

actions/aoss.ts:248
