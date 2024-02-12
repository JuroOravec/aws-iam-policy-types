[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsResiliencehubActions

# Enumeration: AwsResiliencehubActions

All IAM policy actions for AWS Resilience Hub (RESILIENCEHUB)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresiliencehub.html

2024-02-12T09:58:54.356Z

## Table of contents

### Enumeration Members

- [AddDraftAppVersionResourceMappings](AwsResiliencehubActions.md#adddraftappversionresourcemappings)
- [BatchUpdateRecommendationStatus](AwsResiliencehubActions.md#batchupdaterecommendationstatus)
- [CreateApp](AwsResiliencehubActions.md#createapp)
- [CreateAppVersionAppComponent](AwsResiliencehubActions.md#createappversionappcomponent)
- [CreateAppVersionResource](AwsResiliencehubActions.md#createappversionresource)
- [CreateRecommendationTemplate](AwsResiliencehubActions.md#createrecommendationtemplate)
- [CreateResiliencyPolicy](AwsResiliencehubActions.md#createresiliencypolicy)
- [DeleteApp](AwsResiliencehubActions.md#deleteapp)
- [DeleteAppAssessment](AwsResiliencehubActions.md#deleteappassessment)
- [DeleteAppInputSource](AwsResiliencehubActions.md#deleteappinputsource)
- [DeleteAppVersionAppComponent](AwsResiliencehubActions.md#deleteappversionappcomponent)
- [DeleteAppVersionResource](AwsResiliencehubActions.md#deleteappversionresource)
- [DeleteRecommendationTemplate](AwsResiliencehubActions.md#deleterecommendationtemplate)
- [DeleteResiliencyPolicy](AwsResiliencehubActions.md#deleteresiliencypolicy)
- [DescribeApp](AwsResiliencehubActions.md#describeapp)
- [DescribeAppAssessment](AwsResiliencehubActions.md#describeappassessment)
- [DescribeAppVersion](AwsResiliencehubActions.md#describeappversion)
- [DescribeAppVersionAppComponent](AwsResiliencehubActions.md#describeappversionappcomponent)
- [DescribeAppVersionResource](AwsResiliencehubActions.md#describeappversionresource)
- [DescribeAppVersionResourcesResolutionStatus](AwsResiliencehubActions.md#describeappversionresourcesresolutionstatus)
- [DescribeAppVersionTemplate](AwsResiliencehubActions.md#describeappversiontemplate)
- [DescribeDraftAppVersionResourcesImportStatus](AwsResiliencehubActions.md#describedraftappversionresourcesimportstatus)
- [DescribeResiliencyPolicy](AwsResiliencehubActions.md#describeresiliencypolicy)
- [ImportResourcesToDraftAppVersion](AwsResiliencehubActions.md#importresourcestodraftappversion)
- [ListAlarmRecommendations](AwsResiliencehubActions.md#listalarmrecommendations)
- [ListAppAssessmentComplianceDrifts](AwsResiliencehubActions.md#listappassessmentcompliancedrifts)
- [ListAppAssessments](AwsResiliencehubActions.md#listappassessments)
- [ListAppComponentCompliances](AwsResiliencehubActions.md#listappcomponentcompliances)
- [ListAppComponentRecommendations](AwsResiliencehubActions.md#listappcomponentrecommendations)
- [ListAppInputSources](AwsResiliencehubActions.md#listappinputsources)
- [ListAppVersionAppComponents](AwsResiliencehubActions.md#listappversionappcomponents)
- [ListAppVersionResourceMappings](AwsResiliencehubActions.md#listappversionresourcemappings)
- [ListAppVersionResources](AwsResiliencehubActions.md#listappversionresources)
- [ListAppVersions](AwsResiliencehubActions.md#listappversions)
- [ListApps](AwsResiliencehubActions.md#listapps)
- [ListRecommendationTemplates](AwsResiliencehubActions.md#listrecommendationtemplates)
- [ListResiliencyPolicies](AwsResiliencehubActions.md#listresiliencypolicies)
- [ListSopRecommendations](AwsResiliencehubActions.md#listsoprecommendations)
- [ListSuggestedResiliencyPolicies](AwsResiliencehubActions.md#listsuggestedresiliencypolicies)
- [ListTagsForResource](AwsResiliencehubActions.md#listtagsforresource)
- [ListTestRecommendations](AwsResiliencehubActions.md#listtestrecommendations)
- [ListUnsupportedAppVersionResources](AwsResiliencehubActions.md#listunsupportedappversionresources)
- [PublishAppVersion](AwsResiliencehubActions.md#publishappversion)
- [PutDraftAppVersionTemplate](AwsResiliencehubActions.md#putdraftappversiontemplate)
- [RemoveDraftAppVersionResourceMappings](AwsResiliencehubActions.md#removedraftappversionresourcemappings)
- [ResolveAppVersionResources](AwsResiliencehubActions.md#resolveappversionresources)
- [StartAppAssessment](AwsResiliencehubActions.md#startappassessment)
- [TagResource](AwsResiliencehubActions.md#tagresource)
- [UntagResource](AwsResiliencehubActions.md#untagresource)
- [UpdateApp](AwsResiliencehubActions.md#updateapp)
- [UpdateAppVersion](AwsResiliencehubActions.md#updateappversion)
- [UpdateAppVersionAppComponent](AwsResiliencehubActions.md#updateappversionappcomponent)
- [UpdateAppVersionResource](AwsResiliencehubActions.md#updateappversionresource)
- [UpdateResiliencyPolicy](AwsResiliencehubActions.md#updateresiliencypolicy)

## Enumeration Members

### AddDraftAppVersionResourceMappings

• **AddDraftAppVersionResourceMappings** = ``"resiliencehub:AddDraftAppVersionResourceMappings"``

Grants permission to add draft application version resource mappings

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_AddDraftAppVersionResourceMappings.html

#### Defined in

actions/resiliencehub.ts:17

___

### BatchUpdateRecommendationStatus

• **BatchUpdateRecommendationStatus** = ``"resiliencehub:BatchUpdateRecommendationStatus"``

Grants permission to include or exclude one or more operational recommendations

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_BatchUpdateRecommendationStatus.html

#### Defined in

actions/resiliencehub.ts:23

___

### CreateApp

• **CreateApp** = ``"resiliencehub:CreateApp"``

Grants permission to create application

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateApp.html

#### Defined in

actions/resiliencehub.ts:29

___

### CreateAppVersionAppComponent

• **CreateAppVersionAppComponent** = ``"resiliencehub:CreateAppVersionAppComponent"``

Grants permission to create application app component

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateAppVersionAppComponent.html

#### Defined in

actions/resiliencehub.ts:35

___

### CreateAppVersionResource

• **CreateAppVersionResource** = ``"resiliencehub:CreateAppVersionResource"``

Grants permission to create application resource

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateAppVersionResource.html

#### Defined in

actions/resiliencehub.ts:41

___

### CreateRecommendationTemplate

• **CreateRecommendationTemplate** = ``"resiliencehub:CreateRecommendationTemplate"``

Grants permission to create recommendation template

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateRecommendationTemplate.html

#### Defined in

actions/resiliencehub.ts:47

___

### CreateResiliencyPolicy

• **CreateResiliencyPolicy** = ``"resiliencehub:CreateResiliencyPolicy"``

Grants permission to create resiliency policy

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateResiliencyPolicy.html

#### Defined in

actions/resiliencehub.ts:53

___

### DeleteApp

• **DeleteApp** = ``"resiliencehub:DeleteApp"``

Grants permission to batch delete application

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteApp.html

#### Defined in

actions/resiliencehub.ts:59

___

### DeleteAppAssessment

• **DeleteAppAssessment** = ``"resiliencehub:DeleteAppAssessment"``

Grants permission to batch delete application assessment

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteAppAssessment.html

#### Defined in

actions/resiliencehub.ts:65

___

### DeleteAppInputSource

• **DeleteAppInputSource** = ``"resiliencehub:DeleteAppInputSource"``

Grants permission to remove application input source

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteAppInputSource.html

#### Defined in

actions/resiliencehub.ts:71

___

### DeleteAppVersionAppComponent

• **DeleteAppVersionAppComponent** = ``"resiliencehub:DeleteAppVersionAppComponent"``

Grants permission to delete application app component

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteAppVersionAppComponent.html

#### Defined in

actions/resiliencehub.ts:77

___

### DeleteAppVersionResource

• **DeleteAppVersionResource** = ``"resiliencehub:DeleteAppVersionResource"``

Grants permission to delete application resource

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteAppVersionResource.html

#### Defined in

actions/resiliencehub.ts:83

___

### DeleteRecommendationTemplate

• **DeleteRecommendationTemplate** = ``"resiliencehub:DeleteRecommendationTemplate"``

Grants permission to batch delete recommendation template

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteRecommendationTemplate.html

#### Defined in

actions/resiliencehub.ts:89

___

### DeleteResiliencyPolicy

• **DeleteResiliencyPolicy** = ``"resiliencehub:DeleteResiliencyPolicy"``

Grants permission to batch delete resiliency policy

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteResiliencyPolicy.html

#### Defined in

actions/resiliencehub.ts:95

___

### DescribeApp

• **DescribeApp** = ``"resiliencehub:DescribeApp"``

Grants permission to describe application

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeApp.html

#### Defined in

actions/resiliencehub.ts:101

___

### DescribeAppAssessment

• **DescribeAppAssessment** = ``"resiliencehub:DescribeAppAssessment"``

Grants permission to describe application assessment

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppAssessment.html

#### Defined in

actions/resiliencehub.ts:107

___

### DescribeAppVersion

• **DescribeAppVersion** = ``"resiliencehub:DescribeAppVersion"``

Grants permission to describe application version

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersion.html

#### Defined in

actions/resiliencehub.ts:113

___

### DescribeAppVersionAppComponent

• **DescribeAppVersionAppComponent** = ``"resiliencehub:DescribeAppVersionAppComponent"``

Grants permission to describe application version app component

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersionAppComponent.html

#### Defined in

actions/resiliencehub.ts:119

___

### DescribeAppVersionResource

• **DescribeAppVersionResource** = ``"resiliencehub:DescribeAppVersionResource"``

Grants permission to describe application version resource

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersionResource.html

#### Defined in

actions/resiliencehub.ts:125

___

### DescribeAppVersionResourcesResolutionStatus

• **DescribeAppVersionResourcesResolutionStatus** = ``"resiliencehub:DescribeAppVersionResourcesResolutionStatus"``

Grants permission to describe application resolution

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersionResourcesResolutionStatus.html

#### Defined in

actions/resiliencehub.ts:131

___

### DescribeAppVersionTemplate

• **DescribeAppVersionTemplate** = ``"resiliencehub:DescribeAppVersionTemplate"``

Grants permission to describe application version template

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersionTemplate.html

#### Defined in

actions/resiliencehub.ts:137

___

### DescribeDraftAppVersionResourcesImportStatus

• **DescribeDraftAppVersionResourcesImportStatus** = ``"resiliencehub:DescribeDraftAppVersionResourcesImportStatus"``

Grants permission to describe draft application version resources import status

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeDraftAppVersionResourcesImportStatus.html

#### Defined in

actions/resiliencehub.ts:143

___

### DescribeResiliencyPolicy

• **DescribeResiliencyPolicy** = ``"resiliencehub:DescribeResiliencyPolicy"``

Grants permission to describe resiliency policy

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeResiliencyPolicy.html

#### Defined in

actions/resiliencehub.ts:149

___

### ImportResourcesToDraftAppVersion

• **ImportResourcesToDraftAppVersion** = ``"resiliencehub:ImportResourcesToDraftAppVersion"``

Grants permission to import resources to draft application version

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ImportResourcesToDraftAppVersion.html

#### Defined in

actions/resiliencehub.ts:155

___

### ListAlarmRecommendations

• **ListAlarmRecommendations** = ``"resiliencehub:ListAlarmRecommendations"``

Grants permission to list alarm recommendation

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAlarmRecommendations.html

#### Defined in

actions/resiliencehub.ts:161

___

### ListAppAssessmentComplianceDrifts

• **ListAppAssessmentComplianceDrifts** = ``"resiliencehub:ListAppAssessmentComplianceDrifts"``

Grants permission to list compliance drifts that were detected while running an
assessment

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppAssessmentComplianceDrifts.html

#### Defined in

actions/resiliencehub.ts:168

___

### ListAppAssessments

• **ListAppAssessments** = ``"resiliencehub:ListAppAssessments"``

Grants permission to list application assessment

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppAssessments.html

#### Defined in

actions/resiliencehub.ts:174

___

### ListAppComponentCompliances

• **ListAppComponentCompliances** = ``"resiliencehub:ListAppComponentCompliances"``

Grants permission to list app component compliances

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppComponentCompliances.html

#### Defined in

actions/resiliencehub.ts:180

___

### ListAppComponentRecommendations

• **ListAppComponentRecommendations** = ``"resiliencehub:ListAppComponentRecommendations"``

Grants permission to list app component recommendations

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppComponentRecommendations.html

#### Defined in

actions/resiliencehub.ts:186

___

### ListAppInputSources

• **ListAppInputSources** = ``"resiliencehub:ListAppInputSources"``

Grants permission to list application input sources

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppInputSources.html

#### Defined in

actions/resiliencehub.ts:192

___

### ListAppVersionAppComponents

• **ListAppVersionAppComponents** = ``"resiliencehub:ListAppVersionAppComponents"``

Grants permission to list application version app components

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersionAppComponents.html

#### Defined in

actions/resiliencehub.ts:198

___

### ListAppVersionResourceMappings

• **ListAppVersionResourceMappings** = ``"resiliencehub:ListAppVersionResourceMappings"``

Grants permission to application version resource mappings

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersionResourceMappings.html

#### Defined in

actions/resiliencehub.ts:204

___

### ListAppVersionResources

• **ListAppVersionResources** = ``"resiliencehub:ListAppVersionResources"``

Grants permission to list application resources

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersionResources.html

#### Defined in

actions/resiliencehub.ts:210

___

### ListAppVersions

• **ListAppVersions** = ``"resiliencehub:ListAppVersions"``

Grants permission to list application version

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersions.html

#### Defined in

actions/resiliencehub.ts:216

___

### ListApps

• **ListApps** = ``"resiliencehub:ListApps"``

Grants permission to list applications

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListApps.html

#### Defined in

actions/resiliencehub.ts:222

___

### ListRecommendationTemplates

• **ListRecommendationTemplates** = ``"resiliencehub:ListRecommendationTemplates"``

Grants permission to list recommendation templates

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListRecommendationTemplates.html

#### Defined in

actions/resiliencehub.ts:228

___

### ListResiliencyPolicies

• **ListResiliencyPolicies** = ``"resiliencehub:ListResiliencyPolicies"``

Grants permission to list resiliency policies

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListResiliencyPolicies.html

#### Defined in

actions/resiliencehub.ts:234

___

### ListSopRecommendations

• **ListSopRecommendations** = ``"resiliencehub:ListSopRecommendations"``

Grants permission to list SOP recommendations

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListSopRecommendations.html

#### Defined in

actions/resiliencehub.ts:240

___

### ListSuggestedResiliencyPolicies

• **ListSuggestedResiliencyPolicies** = ``"resiliencehub:ListSuggestedResiliencyPolicies"``

Grants permission to list suggested resiliency policies

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListSuggestedResiliencyPolicies.html

#### Defined in

actions/resiliencehub.ts:246

___

### ListTagsForResource

• **ListTagsForResource** = ``"resiliencehub:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/resiliencehub.ts:252

___

### ListTestRecommendations

• **ListTestRecommendations** = ``"resiliencehub:ListTestRecommendations"``

Grants permission to list test recommendations

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListTestRecommendations.html

#### Defined in

actions/resiliencehub.ts:258

___

### ListUnsupportedAppVersionResources

• **ListUnsupportedAppVersionResources** = ``"resiliencehub:ListUnsupportedAppVersionResources"``

Grants permission to list unsupported application version resources

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListUnsupportedAppVersionResources.html

#### Defined in

actions/resiliencehub.ts:264

___

### PublishAppVersion

• **PublishAppVersion** = ``"resiliencehub:PublishAppVersion"``

Grants permission to publish application version

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_PublishAppVersion.html

#### Defined in

actions/resiliencehub.ts:270

___

### PutDraftAppVersionTemplate

• **PutDraftAppVersionTemplate** = ``"resiliencehub:PutDraftAppVersionTemplate"``

Grants permission to put draft application version template

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_PutDraftAppVersionTemplate.html

#### Defined in

actions/resiliencehub.ts:276

___

### RemoveDraftAppVersionResourceMappings

• **RemoveDraftAppVersionResourceMappings** = ``"resiliencehub:RemoveDraftAppVersionResourceMappings"``

Grants permission to remove draft application version mappings

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_RemoveDraftAppVersionResourceMappings.html

#### Defined in

actions/resiliencehub.ts:282

___

### ResolveAppVersionResources

• **ResolveAppVersionResources** = ``"resiliencehub:ResolveAppVersionResources"``

Grants permission to resolve application version resources

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ResolveAppVersionResources.html

#### Defined in

actions/resiliencehub.ts:288

___

### StartAppAssessment

• **StartAppAssessment** = ``"resiliencehub:StartAppAssessment"``

Grants permission to create application assessment

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_StartAppAssessment.html

#### Defined in

actions/resiliencehub.ts:294

___

### TagResource

• **TagResource** = ``"resiliencehub:TagResource"``

Grants permission to assign a resource tag

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_TagResource.html

#### Defined in

actions/resiliencehub.ts:300

___

### UntagResource

• **UntagResource** = ``"resiliencehub:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UntagResource.html

#### Defined in

actions/resiliencehub.ts:306

___

### UpdateApp

• **UpdateApp** = ``"resiliencehub:UpdateApp"``

Grants permission to update application

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateApp.html

#### Defined in

actions/resiliencehub.ts:312

___

### UpdateAppVersion

• **UpdateAppVersion** = ``"resiliencehub:UpdateAppVersion"``

Grants permission to update application version

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateAppVersion.html

#### Defined in

actions/resiliencehub.ts:318

___

### UpdateAppVersionAppComponent

• **UpdateAppVersionAppComponent** = ``"resiliencehub:UpdateAppVersionAppComponent"``

Grants permission to update application app component

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateAppVersionAppComponent.html

#### Defined in

actions/resiliencehub.ts:324

___

### UpdateAppVersionResource

• **UpdateAppVersionResource** = ``"resiliencehub:UpdateAppVersionResource"``

Grants permission to update application resource

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateAppVersionResource.html

#### Defined in

actions/resiliencehub.ts:330

___

### UpdateResiliencyPolicy

• **UpdateResiliencyPolicy** = ``"resiliencehub:UpdateResiliencyPolicy"``

Grants permission to update resiliency policy

See https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateResiliencyPolicy.html

#### Defined in

actions/resiliencehub.ts:336
