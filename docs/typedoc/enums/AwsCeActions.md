[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCeActions

# Enumeration: AwsCeActions

All IAM policy actions for AWS Cost Explorer Service (CE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostexplorerservice.html

2024-02-12T09:56:49.738Z

## Table of contents

### Enumeration Members

- [CreateAnomalyMonitor](AwsCeActions.md#createanomalymonitor)
- [CreateAnomalySubscription](AwsCeActions.md#createanomalysubscription)
- [CreateCostCategoryDefinition](AwsCeActions.md#createcostcategorydefinition)
- [CreateNotificationSubscription](AwsCeActions.md#createnotificationsubscription)
- [CreateReport](AwsCeActions.md#createreport)
- [DeleteAnomalyMonitor](AwsCeActions.md#deleteanomalymonitor)
- [DeleteAnomalySubscription](AwsCeActions.md#deleteanomalysubscription)
- [DeleteCostCategoryDefinition](AwsCeActions.md#deletecostcategorydefinition)
- [DeleteNotificationSubscription](AwsCeActions.md#deletenotificationsubscription)
- [DeleteReport](AwsCeActions.md#deletereport)
- [DescribeCostCategoryDefinition](AwsCeActions.md#describecostcategorydefinition)
- [DescribeNotificationSubscription](AwsCeActions.md#describenotificationsubscription)
- [DescribeReport](AwsCeActions.md#describereport)
- [GetAnomalies](AwsCeActions.md#getanomalies)
- [GetAnomalyMonitors](AwsCeActions.md#getanomalymonitors)
- [GetAnomalySubscriptions](AwsCeActions.md#getanomalysubscriptions)
- [GetApproximateUsageRecords](AwsCeActions.md#getapproximateusagerecords)
- [GetConsoleActionSetEnforced](AwsCeActions.md#getconsoleactionsetenforced)
- [GetCostAndUsage](AwsCeActions.md#getcostandusage)
- [GetCostAndUsageWithResources](AwsCeActions.md#getcostandusagewithresources)
- [GetCostCategories](AwsCeActions.md#getcostcategories)
- [GetCostForecast](AwsCeActions.md#getcostforecast)
- [GetDimensionValues](AwsCeActions.md#getdimensionvalues)
- [GetPreferences](AwsCeActions.md#getpreferences)
- [GetReservationCoverage](AwsCeActions.md#getreservationcoverage)
- [GetReservationPurchaseRecommendation](AwsCeActions.md#getreservationpurchaserecommendation)
- [GetReservationUtilization](AwsCeActions.md#getreservationutilization)
- [GetRightsizingRecommendation](AwsCeActions.md#getrightsizingrecommendation)
- [GetSavingsPlanPurchaseRecommendationDetails](AwsCeActions.md#getsavingsplanpurchaserecommendationdetails)
- [GetSavingsPlansCoverage](AwsCeActions.md#getsavingsplanscoverage)
- [GetSavingsPlansPurchaseRecommendation](AwsCeActions.md#getsavingsplanspurchaserecommendation)
- [GetSavingsPlansUtilization](AwsCeActions.md#getsavingsplansutilization)
- [GetSavingsPlansUtilizationDetails](AwsCeActions.md#getsavingsplansutilizationdetails)
- [GetTags](AwsCeActions.md#gettags)
- [GetUsageForecast](AwsCeActions.md#getusageforecast)
- [ListCostAllocationTags](AwsCeActions.md#listcostallocationtags)
- [ListCostCategoryDefinitions](AwsCeActions.md#listcostcategorydefinitions)
- [ListSavingsPlansPurchaseRecommendationGeneration](AwsCeActions.md#listsavingsplanspurchaserecommendationgeneration)
- [ListTagsForResource](AwsCeActions.md#listtagsforresource)
- [ProvideAnomalyFeedback](AwsCeActions.md#provideanomalyfeedback)
- [StartSavingsPlansPurchaseRecommendationGeneration](AwsCeActions.md#startsavingsplanspurchaserecommendationgeneration)
- [TagResource](AwsCeActions.md#tagresource)
- [UntagResource](AwsCeActions.md#untagresource)
- [UpdateAnomalyMonitor](AwsCeActions.md#updateanomalymonitor)
- [UpdateAnomalySubscription](AwsCeActions.md#updateanomalysubscription)
- [UpdateConsoleActionSetEnforced](AwsCeActions.md#updateconsoleactionsetenforced)
- [UpdateCostAllocationTagsStatus](AwsCeActions.md#updatecostallocationtagsstatus)
- [UpdateCostCategoryDefinition](AwsCeActions.md#updatecostcategorydefinition)
- [UpdateNotificationSubscription](AwsCeActions.md#updatenotificationsubscription)
- [UpdatePreferences](AwsCeActions.md#updatepreferences)
- [UpdateReport](AwsCeActions.md#updatereport)

## Enumeration Members

### CreateAnomalyMonitor

• **CreateAnomalyMonitor** = ``"ce:CreateAnomalyMonitor"``

Grants permission to create a new Anomaly Monitor

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateAnomalyMonitor.html

#### Defined in

actions/ce.ts:17

___

### CreateAnomalySubscription

• **CreateAnomalySubscription** = ``"ce:CreateAnomalySubscription"``

Grants permission to create a new Anomaly Subscription

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateAnomalySubscription.html

#### Defined in

actions/ce.ts:23

___

### CreateCostCategoryDefinition

• **CreateCostCategoryDefinition** = ``"ce:CreateCostCategoryDefinition"``

Grants permission to create a new Cost Category with the requested name and rul
es

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateCostCategoryDefinition.html

#### Defined in

actions/ce.ts:30

___

### CreateNotificationSubscription

• **CreateNotificationSubscription** = ``"ce:CreateNotificationSubscription"``

Grants permission to create Reservation expiration alerts

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:36

___

### CreateReport

• **CreateReport** = ``"ce:CreateReport"``

Grants permission to create Cost Explorer Reports

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:42

___

### DeleteAnomalyMonitor

• **DeleteAnomalyMonitor** = ``"ce:DeleteAnomalyMonitor"``

Grants permission to delete an Anomaly Monitor

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteAnomalyMonitor.html

#### Defined in

actions/ce.ts:48

___

### DeleteAnomalySubscription

• **DeleteAnomalySubscription** = ``"ce:DeleteAnomalySubscription"``

Grants permission to delete an Anomaly Subscription

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteAnomalySubscription.html

#### Defined in

actions/ce.ts:54

___

### DeleteCostCategoryDefinition

• **DeleteCostCategoryDefinition** = ``"ce:DeleteCostCategoryDefinition"``

Grants permission to delete a Cost Category

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteCostCategoryDefinition.html

#### Defined in

actions/ce.ts:60

___

### DeleteNotificationSubscription

• **DeleteNotificationSubscription** = ``"ce:DeleteNotificationSubscription"``

Grants permission to delete Reservation expiration alerts

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:66

___

### DeleteReport

• **DeleteReport** = ``"ce:DeleteReport"``

Grants permission to delete Cost Explorer Reports

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:72

___

### DescribeCostCategoryDefinition

• **DescribeCostCategoryDefinition** = ``"ce:DescribeCostCategoryDefinition"``

Grants permission to retrieve descriptions such as the name, ARN, rules, defini
tion, and effective dates of a Cost Category

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DescribeCostCategoryDefinition.html

#### Defined in

actions/ce.ts:79

___

### DescribeNotificationSubscription

• **DescribeNotificationSubscription** = ``"ce:DescribeNotificationSubscription"``

Grants permission to view Reservation expiration alerts

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:85

___

### DescribeReport

• **DescribeReport** = ``"ce:DescribeReport"``

Grants permission to view Cost Explorer Reports page

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:91

___

### GetAnomalies

• **GetAnomalies** = ``"ce:GetAnomalies"``

Grants permission to retrieve anomalies

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html

#### Defined in

actions/ce.ts:97

___

### GetAnomalyMonitors

• **GetAnomalyMonitors** = ``"ce:GetAnomalyMonitors"``

Grants permission to query Anomaly Monitors

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalyMonitors.html

#### Defined in

actions/ce.ts:103

___

### GetAnomalySubscriptions

• **GetAnomalySubscriptions** = ``"ce:GetAnomalySubscriptions"``

Grants permission to query Anomaly Subscriptions

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalySubscriptions.html

#### Defined in

actions/ce.ts:109

___

### GetApproximateUsageRecords

• **GetApproximateUsageRecords** = ``"ce:GetApproximateUsageRecords"``

Grants permission to retrieve approximate usage record count for the chosen res
ource, level, and hourly granularity preferences, derived from the past month's
usage

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:117

___

### GetConsoleActionSetEnforced

• **GetConsoleActionSetEnforced** = ``"ce:GetConsoleActionSetEnforced"``

Grants permission to view whether existing or fine-grained IAM actions are bein
g used to control authorization to Billing, Cost Management, and Account consol
es

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:125

___

### GetCostAndUsage

• **GetCostAndUsage** = ``"ce:GetCostAndUsage"``

Grants permission to retrieve the cost and usage metrics for your account

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html

#### Defined in

actions/ce.ts:131

___

### GetCostAndUsageWithResources

• **GetCostAndUsageWithResources** = ``"ce:GetCostAndUsageWithResources"``

Grants permission to retrieve the cost and usage metrics with resources for you
r account

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsageWithResources.html

#### Defined in

actions/ce.ts:138

___

### GetCostCategories

• **GetCostCategories** = ``"ce:GetCostCategories"``

Grants permission to query Cost Catagory names and values for a specified time
period

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostCategories.html

#### Defined in

actions/ce.ts:145

___

### GetCostForecast

• **GetCostForecast** = ``"ce:GetCostForecast"``

Grants permission to retrieve a cost forecast for a forecast time period

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostForecast.html

#### Defined in

actions/ce.ts:151

___

### GetDimensionValues

• **GetDimensionValues** = ``"ce:GetDimensionValues"``

Grants permission to retrieve all available filter values for a filter for a pe
riod of time

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html

#### Defined in

actions/ce.ts:158

___

### GetPreferences

• **GetPreferences** = ``"ce:GetPreferences"``

Grants permission to view Cost Explorer Preferences page

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:164

___

### GetReservationCoverage

• **GetReservationCoverage** = ``"ce:GetReservationCoverage"``

Grants permission to retrieve the reservation coverage for your account

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationCoverage.html

#### Defined in

actions/ce.ts:170

___

### GetReservationPurchaseRecommendation

• **GetReservationPurchaseRecommendation** = ``"ce:GetReservationPurchaseRecommendation"``

Grants permission to retrieve the reservation recommendations for your account

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationPurchaseRecommendation.html

#### Defined in

actions/ce.ts:176

___

### GetReservationUtilization

• **GetReservationUtilization** = ``"ce:GetReservationUtilization"``

Grants permission to retrieve the reservation utilization for your account

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationUtilization.html

#### Defined in

actions/ce.ts:182

___

### GetRightsizingRecommendation

• **GetRightsizingRecommendation** = ``"ce:GetRightsizingRecommendation"``

Grants permission to retrieve the rightsizing recommendations for your account

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetRightsizingRecommendation.html

#### Defined in

actions/ce.ts:188

___

### GetSavingsPlanPurchaseRecommendationDetails

• **GetSavingsPlanPurchaseRecommendationDetails** = ``"ce:GetSavingsPlanPurchaseRecommendationDetails"``

Grants permission to retrieve the Savings Plan recommendation details for your
account

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlanPurchaseRecommendationDetails.html

#### Defined in

actions/ce.ts:195

___

### GetSavingsPlansCoverage

• **GetSavingsPlansCoverage** = ``"ce:GetSavingsPlansCoverage"``

Grants permission to retrieve the Savings Plans coverage for your account

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansCoverage.html

#### Defined in

actions/ce.ts:201

___

### GetSavingsPlansPurchaseRecommendation

• **GetSavingsPlansPurchaseRecommendation** = ``"ce:GetSavingsPlansPurchaseRecommendation"``

Grants permission to retrieve the Savings Plans recommendations for your accoun
t

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansPurchaseRecommendation.html

#### Defined in

actions/ce.ts:208

___

### GetSavingsPlansUtilization

• **GetSavingsPlansUtilization** = ``"ce:GetSavingsPlansUtilization"``

Grants permission to retrieve the Savings Plans utilization for your account

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansUtilization.html

#### Defined in

actions/ce.ts:214

___

### GetSavingsPlansUtilizationDetails

• **GetSavingsPlansUtilizationDetails** = ``"ce:GetSavingsPlansUtilizationDetails"``

Grants permission to retrieve the Savings Plans utilization details for your ac
count

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansUtilizationDetails.html

#### Defined in

actions/ce.ts:221

___

### GetTags

• **GetTags** = ``"ce:GetTags"``

Grants permission to query tags for a specified time period

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetTags.html

#### Defined in

actions/ce.ts:227

___

### GetUsageForecast

• **GetUsageForecast** = ``"ce:GetUsageForecast"``

Grants permission to retrieve a usage forecast for a forecast time period

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetUsageForecast.html

#### Defined in

actions/ce.ts:233

___

### ListCostAllocationTags

• **ListCostAllocationTags** = ``"ce:ListCostAllocationTags"``

Grants permission to list Cost Allocation Tags

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListCostAllocationTags.html

#### Defined in

actions/ce.ts:239

___

### ListCostCategoryDefinitions

• **ListCostCategoryDefinitions** = ``"ce:ListCostCategoryDefinitions"``

Grants permission to retrieve names, ARN, and effective dates for all Cost Cate
gories

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListCostCategoryDefinitions.html

#### Defined in

actions/ce.ts:246

___

### ListSavingsPlansPurchaseRecommendationGeneration

• **ListSavingsPlansPurchaseRecommendationGeneration** = ``"ce:ListSavingsPlansPurchaseRecommendationGeneration"``

Grants permission to retrieve a list of your historical recommendation generati
ons

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListSavingsPlansPurchaseRecommendationGeneration.html

#### Defined in

actions/ce.ts:253

___

### ListTagsForResource

• **ListTagsForResource** = ``"ce:ListTagsForResource"``

Grants permission to list tags for a Cost Explorer resource

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/ce.ts:259

___

### ProvideAnomalyFeedback

• **ProvideAnomalyFeedback** = ``"ce:ProvideAnomalyFeedback"``

Grants permission to provide feedback on detected anomalies

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProvideAnomalyFeedback.html

#### Defined in

actions/ce.ts:265

___

### StartSavingsPlansPurchaseRecommendationGeneration

• **StartSavingsPlansPurchaseRecommendationGeneration** = ``"ce:StartSavingsPlansPurchaseRecommendationGeneration"``

Grants permission to request a Savings Plans recommendation generation

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_StartSavingsPlansPurchaseRecommendationGeneration.html

#### Defined in

actions/ce.ts:271

___

### TagResource

• **TagResource** = ``"ce:TagResource"``

Grants permission to tag a Cost Explorer resource

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_TagResource.html

#### Defined in

actions/ce.ts:277

___

### UntagResource

• **UntagResource** = ``"ce:UntagResource"``

Grants permission to remove tags from a Cost Explorer resource

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UntagResource.html

#### Defined in

actions/ce.ts:283

___

### UpdateAnomalyMonitor

• **UpdateAnomalyMonitor** = ``"ce:UpdateAnomalyMonitor"``

Grants permission to update an existing Anomaly Monitor

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalyMonitor.html

#### Defined in

actions/ce.ts:289

___

### UpdateAnomalySubscription

• **UpdateAnomalySubscription** = ``"ce:UpdateAnomalySubscription"``

Grants permission to update an existing Anomaly Subscription

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalySubscription.html

#### Defined in

actions/ce.ts:295

___

### UpdateConsoleActionSetEnforced

• **UpdateConsoleActionSetEnforced** = ``"ce:UpdateConsoleActionSetEnforced"``

Grants permission to change whether existing or fine-grained IAM actions will b
e used to control authorization to Billing, Cost Management, and Account consol
es

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:303

___

### UpdateCostAllocationTagsStatus

• **UpdateCostAllocationTagsStatus** = ``"ce:UpdateCostAllocationTagsStatus"``

Grants permission to update existing Cost Allocation Tags status

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateCostAllocationTagsStatus.html

#### Defined in

actions/ce.ts:309

___

### UpdateCostCategoryDefinition

• **UpdateCostCategoryDefinition** = ``"ce:UpdateCostCategoryDefinition"``

Grants permission to update an existing Cost Category

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateCostCategoryDefinition.html

#### Defined in

actions/ce.ts:315

___

### UpdateNotificationSubscription

• **UpdateNotificationSubscription** = ``"ce:UpdateNotificationSubscription"``

Grants permission to update Reservation expiration alerts

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:321

___

### UpdatePreferences

• **UpdatePreferences** = ``"ce:UpdatePreferences"``

Grants permission to edit Cost Explorer Preferences page

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:327

___

### UpdateReport

• **UpdateReport** = ``"ce:UpdateReport"``

Grants permission to update Cost Explorer Reports

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/ce.ts:333
