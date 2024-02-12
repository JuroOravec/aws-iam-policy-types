[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsPiActions

# Enumeration: AwsPiActions

All IAM policy actions for AWS Performance Insights (PI)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsperformanceinsights.html

2024-02-12T09:58:37.866Z

## Table of contents

### Enumeration Members

- [CreatePerformanceAnalysisReport](AwsPiActions.md#createperformanceanalysisreport)
- [DeletePerformanceAnalysisReport](AwsPiActions.md#deleteperformanceanalysisreport)
- [DescribeDimensionKeys](AwsPiActions.md#describedimensionkeys)
- [GetDimensionKeyDetails](AwsPiActions.md#getdimensionkeydetails)
- [GetPerformanceAnalysisReport](AwsPiActions.md#getperformanceanalysisreport)
- [GetResourceMetadata](AwsPiActions.md#getresourcemetadata)
- [GetResourceMetrics](AwsPiActions.md#getresourcemetrics)
- [ListAvailableResourceDimensions](AwsPiActions.md#listavailableresourcedimensions)
- [ListAvailableResourceMetrics](AwsPiActions.md#listavailableresourcemetrics)
- [ListPerformanceAnalysisReports](AwsPiActions.md#listperformanceanalysisreports)
- [ListTagsForResource](AwsPiActions.md#listtagsforresource)
- [TagResource](AwsPiActions.md#tagresource)
- [UntagResource](AwsPiActions.md#untagresource)

## Enumeration Members

### CreatePerformanceAnalysisReport

• **CreatePerformanceAnalysisReport** = ``"pi:CreatePerformanceAnalysisReport"``

Grants permission to call CreatePerformanceAnalysisReport API to create a Perfo
rmance Analysis Report for a specified DB instance

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_CreatePerformanceAnalysisReport.html

#### Defined in

actions/pi.ts:18

___

### DeletePerformanceAnalysisReport

• **DeletePerformanceAnalysisReport** = ``"pi:DeletePerformanceAnalysisReport"``

Grants permission to call DeletePerformanceAnalysisReport API to delete a Perfo
rmance Analysis Report for a specified DB instance

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_DeletePerformanceAnalysisReport.html

#### Defined in

actions/pi.ts:25

___

### DescribeDimensionKeys

• **DescribeDimensionKeys** = ``"pi:DescribeDimensionKeys"``

Grants permission to call DescribeDimensionKeys API to retrieve the top N dimen
sion keys for a metric for a specific time period

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_DescribeDimensionKeys.html

#### Defined in

actions/pi.ts:32

___

### GetDimensionKeyDetails

• **GetDimensionKeyDetails** = ``"pi:GetDimensionKeyDetails"``

Grants permission to call GetDimensionKeyDetails API to retrieve the attributes
of the specified dimension group

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetDimensionKeyDetails.html

#### Defined in

actions/pi.ts:39

___

### GetPerformanceAnalysisReport

• **GetPerformanceAnalysisReport** = ``"pi:GetPerformanceAnalysisReport"``

Grants permission to call GetPerformanceAnalysisReport API to retrieve a Perfor
mance Analysis Report for a specified DB instance

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetPerformanceAnalysisReport.html

#### Defined in

actions/pi.ts:46

___

### GetResourceMetadata

• **GetResourceMetadata** = ``"pi:GetResourceMetadata"``

Grants permission to call GetResourceMetadata API to retrieve the metadata for
different features

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetadata.html

#### Defined in

actions/pi.ts:53

___

### GetResourceMetrics

• **GetResourceMetrics** = ``"pi:GetResourceMetrics"``

Grants permission to call GetResourceMetrics API to retrieve PI metrics for a s
et of data sources, over a time period

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html

#### Defined in

actions/pi.ts:60

___

### ListAvailableResourceDimensions

• **ListAvailableResourceDimensions** = ``"pi:ListAvailableResourceDimensions"``

Grants permission to call ListAvailableResourceDimensions API to retrieve the d
imensions that can be queried for each specified metric type on a specified DB
instance

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListAvailableResourceDimensions.html

#### Defined in

actions/pi.ts:68

___

### ListAvailableResourceMetrics

• **ListAvailableResourceMetrics** = ``"pi:ListAvailableResourceMetrics"``

Grants permission to call ListAvailableResourceMetrics API to retrieve metrics
of the specified types that can be queried for a specified DB instance

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListAvailableResourceMetrics.html

#### Defined in

actions/pi.ts:75

___

### ListPerformanceAnalysisReports

• **ListPerformanceAnalysisReports** = ``"pi:ListPerformanceAnalysisReports"``

Grants permission to call ListPerformanceAnalysisReports API to list Performanc
e Analysis Reports for a specified DB instance

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListPerformanceAnalysisReports.html

#### Defined in

actions/pi.ts:82

___

### ListTagsForResource

• **ListTagsForResource** = ``"pi:ListTagsForResource"``

Grants permission to call ListTagsForResource API to list tags for a resource

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/pi.ts:88

___

### TagResource

• **TagResource** = ``"pi:TagResource"``

Grants permission to call TagResource API to tag a resource

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_TagResource.html

#### Defined in

actions/pi.ts:94

___

### UntagResource

• **UntagResource** = ``"pi:UntagResource"``

Grants permission to call UntagResource API to untag a resource

See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_UntagResource.html

#### Defined in

actions/pi.ts:100
