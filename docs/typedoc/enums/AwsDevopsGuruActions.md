[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDevopsGuruActions

# Enumeration: AwsDevopsGuruActions

All IAM policy actions for Amazon DevOps Guru (DEVOPS-GURU)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondevopsguru.html

2024-02-12T09:56:57.977Z

## Table of contents

### Enumeration Members

- [AddNotificationChannel](AwsDevopsGuruActions.md#addnotificationchannel)
- [DeleteInsight](AwsDevopsGuruActions.md#deleteinsight)
- [DescribeAccountHealth](AwsDevopsGuruActions.md#describeaccounthealth)
- [DescribeAccountOverview](AwsDevopsGuruActions.md#describeaccountoverview)
- [DescribeAnomaly](AwsDevopsGuruActions.md#describeanomaly)
- [DescribeEventSourcesConfig](AwsDevopsGuruActions.md#describeeventsourcesconfig)
- [DescribeFeedback](AwsDevopsGuruActions.md#describefeedback)
- [DescribeInsight](AwsDevopsGuruActions.md#describeinsight)
- [DescribeOrganizationHealth](AwsDevopsGuruActions.md#describeorganizationhealth)
- [DescribeOrganizationOverview](AwsDevopsGuruActions.md#describeorganizationoverview)
- [DescribeOrganizationResourceCollectionHealth](AwsDevopsGuruActions.md#describeorganizationresourcecollectionhealth)
- [DescribeResourceCollectionHealth](AwsDevopsGuruActions.md#describeresourcecollectionhealth)
- [DescribeServiceIntegration](AwsDevopsGuruActions.md#describeserviceintegration)
- [GetCostEstimation](AwsDevopsGuruActions.md#getcostestimation)
- [GetResourceCollection](AwsDevopsGuruActions.md#getresourcecollection)
- [ListAnomaliesForInsight](AwsDevopsGuruActions.md#listanomaliesforinsight)
- [ListAnomalousLogGroups](AwsDevopsGuruActions.md#listanomalousloggroups)
- [ListEvents](AwsDevopsGuruActions.md#listevents)
- [ListInsights](AwsDevopsGuruActions.md#listinsights)
- [ListMonitoredResources](AwsDevopsGuruActions.md#listmonitoredresources)
- [ListNotificationChannels](AwsDevopsGuruActions.md#listnotificationchannels)
- [ListOrganizationInsights](AwsDevopsGuruActions.md#listorganizationinsights)
- [ListRecommendations](AwsDevopsGuruActions.md#listrecommendations)
- [PutFeedback](AwsDevopsGuruActions.md#putfeedback)
- [RemoveNotificationChannel](AwsDevopsGuruActions.md#removenotificationchannel)
- [SearchInsights](AwsDevopsGuruActions.md#searchinsights)
- [SearchOrganizationInsights](AwsDevopsGuruActions.md#searchorganizationinsights)
- [StartCostEstimation](AwsDevopsGuruActions.md#startcostestimation)
- [UpdateEventSourcesConfig](AwsDevopsGuruActions.md#updateeventsourcesconfig)
- [UpdateResourceCollection](AwsDevopsGuruActions.md#updateresourcecollection)
- [UpdateServiceIntegration](AwsDevopsGuruActions.md#updateserviceintegration)

## Enumeration Members

### AddNotificationChannel

• **AddNotificationChannel** = ``"devops-guru:AddNotificationChannel"``

Grants permission to add a notification channel to DevOps Guru

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_AddNotificationChannel.html

#### Defined in

actions/devops-guru.ts:17

___

### DeleteInsight

• **DeleteInsight** = ``"devops-guru:DeleteInsight"``

Grants permission to delete specified insight in your account

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DeleteInsight.html

#### Defined in

actions/devops-guru.ts:23

___

### DescribeAccountHealth

• **DescribeAccountHealth** = ``"devops-guru:DescribeAccountHealth"``

Grants permission to view the health of operations in your AWS account

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAccountHealth.html

#### Defined in

actions/devops-guru.ts:29

___

### DescribeAccountOverview

• **DescribeAccountOverview** = ``"devops-guru:DescribeAccountOverview"``

Grants permission to view the health of operations within a time range in your
AWS account

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAccountOverview.html

#### Defined in

actions/devops-guru.ts:36

___

### DescribeAnomaly

• **DescribeAnomaly** = ``"devops-guru:DescribeAnomaly"``

Grants permission to list the details of a specified anomaly

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAnomaly.html

#### Defined in

actions/devops-guru.ts:42

___

### DescribeEventSourcesConfig

• **DescribeEventSourcesConfig** = ``"devops-guru:DescribeEventSourcesConfig"``

Grants permission to retrieve details about event sources for DevOps Guru

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeEventSourcesConfig.html

#### Defined in

actions/devops-guru.ts:48

___

### DescribeFeedback

• **DescribeFeedback** = ``"devops-guru:DescribeFeedback"``

Grants permission to view the feedback details of a specified insight

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeFeedback.html

#### Defined in

actions/devops-guru.ts:54

___

### DescribeInsight

• **DescribeInsight** = ``"devops-guru:DescribeInsight"``

Grants permission to list the details of a specified insight

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeInsight.html

#### Defined in

actions/devops-guru.ts:60

___

### DescribeOrganizationHealth

• **DescribeOrganizationHealth** = ``"devops-guru:DescribeOrganizationHealth"``

Grants permission to view the health of operations in your organization

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeOrganizationHealth.html

#### Defined in

actions/devops-guru.ts:66

___

### DescribeOrganizationOverview

• **DescribeOrganizationOverview** = ``"devops-guru:DescribeOrganizationOverview"``

Grants permission to view the health of operations within a time range in your
organization

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeOrganizationOverview.html

#### Defined in

actions/devops-guru.ts:73

___

### DescribeOrganizationResourceCollectionHealth

• **DescribeOrganizationResourceCollectionHealth** = ``"devops-guru:DescribeOrganizationResourceCollectionHealth"``

Grants permission to view the health of operations for each AWS CloudFormation
stack or AWS Services or accounts specified in DevOps Guru in your organization

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeOrganizationResourceCollectionHealth.html

#### Defined in

actions/devops-guru.ts:80

___

### DescribeResourceCollectionHealth

• **DescribeResourceCollectionHealth** = ``"devops-guru:DescribeResourceCollectionHealth"``

Grants permission to view the health of operations for each AWS CloudFormation
stack specified in DevOps Guru

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeResourceCollectionHealth.html

#### Defined in

actions/devops-guru.ts:87

___

### DescribeServiceIntegration

• **DescribeServiceIntegration** = ``"devops-guru:DescribeServiceIntegration"``

Grants permission to view the integration status of services that can be integr
ated with DevOps Guru

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeServiceIntegration.html

#### Defined in

actions/devops-guru.ts:94

___

### GetCostEstimation

• **GetCostEstimation** = ``"devops-guru:GetCostEstimation"``

Grants permission to list service resource cost estimates

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_GetCostEstimation.html

#### Defined in

actions/devops-guru.ts:100

___

### GetResourceCollection

• **GetResourceCollection** = ``"devops-guru:GetResourceCollection"``

Grants permission to list AWS CloudFormation stacks that DevOps Guru is configu
red to use

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_GetResourceCollection.html

#### Defined in

actions/devops-guru.ts:107

___

### ListAnomaliesForInsight

• **ListAnomaliesForInsight** = ``"devops-guru:ListAnomaliesForInsight"``

Grants permission to list anomalies of a given insight in your account

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListAnomaliesForInsight.html

#### Defined in

actions/devops-guru.ts:113

___

### ListAnomalousLogGroups

• **ListAnomalousLogGroups** = ``"devops-guru:ListAnomalousLogGroups"``

Grants permission to list log anomalies of a given insight in your account

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListAnomalousLogGroups.html

#### Defined in

actions/devops-guru.ts:119

___

### ListEvents

• **ListEvents** = ``"devops-guru:ListEvents"``

Grants permission to list resource events that are evaluated by DevOps Guru

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListEvents.html

#### Defined in

actions/devops-guru.ts:125

___

### ListInsights

• **ListInsights** = ``"devops-guru:ListInsights"``

Grants permission to list insights in your account

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListInsights.html

#### Defined in

actions/devops-guru.ts:131

___

### ListMonitoredResources

• **ListMonitoredResources** = ``"devops-guru:ListMonitoredResources"``

Grants permission to list resource monitored by DevOps Guru in your account

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListMonitoredResources.html

#### Defined in

actions/devops-guru.ts:137

___

### ListNotificationChannels

• **ListNotificationChannels** = ``"devops-guru:ListNotificationChannels"``

Grants permission to list notification channels configured for DevOps Guru in y
our account

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListNotificationChannels.html

#### Defined in

actions/devops-guru.ts:144

___

### ListOrganizationInsights

• **ListOrganizationInsights** = ``"devops-guru:ListOrganizationInsights"``

Grants permission to list insights in your organization

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListOrganizationInsights.html

#### Defined in

actions/devops-guru.ts:150

___

### ListRecommendations

• **ListRecommendations** = ``"devops-guru:ListRecommendations"``

Grants permission to list a specified insight's recommendations

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListRecommendations.html

#### Defined in

actions/devops-guru.ts:156

___

### PutFeedback

• **PutFeedback** = ``"devops-guru:PutFeedback"``

Grants permission to submit a feedback to DevOps Guru

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PutFeedback.html

#### Defined in

actions/devops-guru.ts:162

___

### RemoveNotificationChannel

• **RemoveNotificationChannel** = ``"devops-guru:RemoveNotificationChannel"``

Grants permission to remove a notification channel from DevOps Guru

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_RemoveNotificationChannel.html

#### Defined in

actions/devops-guru.ts:168

___

### SearchInsights

• **SearchInsights** = ``"devops-guru:SearchInsights"``

Grants permission to search insights in your account

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_SearchInsights.html

#### Defined in

actions/devops-guru.ts:174

___

### SearchOrganizationInsights

• **SearchOrganizationInsights** = ``"devops-guru:SearchOrganizationInsights"``

Grants permission to search insights in your organization

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_SearchOrganizationInsights.html

#### Defined in

actions/devops-guru.ts:180

___

### StartCostEstimation

• **StartCostEstimation** = ``"devops-guru:StartCostEstimation"``

Grants permission to start the creation of an estimate of the monthly cost

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_StartCostEstimation.html

#### Defined in

actions/devops-guru.ts:186

___

### UpdateEventSourcesConfig

• **UpdateEventSourcesConfig** = ``"devops-guru:UpdateEventSourcesConfig"``

Grants permission to update an event source for DevOps Guru

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateEventSourcesConfig.html

#### Defined in

actions/devops-guru.ts:192

___

### UpdateResourceCollection

• **UpdateResourceCollection** = ``"devops-guru:UpdateResourceCollection"``

Grants permission to update the list of AWS CloudFormation stacks that are used
to specify which AWS resources in your account are analyzed by DevOps Guru

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateResourceCollection.html

#### Defined in

actions/devops-guru.ts:199

___

### UpdateServiceIntegration

• **UpdateServiceIntegration** = ``"devops-guru:UpdateServiceIntegration"``

Grants permission to enable or disable a service that integrates with DevOps Gu
ru

See https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateServiceIntegration.html

#### Defined in

actions/devops-guru.ts:206
