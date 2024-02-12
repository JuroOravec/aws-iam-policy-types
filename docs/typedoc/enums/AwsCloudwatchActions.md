[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCloudwatchActions

# Enumeration: AwsCloudwatchActions

All IAM policy actions for Amazon CloudWatch (CLOUDWATCH)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatch.html

2024-02-12T09:56:26.339Z

## Table of contents

### Enumeration Members

- [BatchGetServiceLevelIndicatorReport](AwsCloudwatchActions.md#batchgetservicelevelindicatorreport)
- [BatchGetServiceLevelObjectiveBudgetReport](AwsCloudwatchActions.md#batchgetservicelevelobjectivebudgetreport)
- [CreateServiceLevelObjective](AwsCloudwatchActions.md#createservicelevelobjective)
- [DeleteAlarms](AwsCloudwatchActions.md#deletealarms)
- [DeleteAnomalyDetector](AwsCloudwatchActions.md#deleteanomalydetector)
- [DeleteDashboards](AwsCloudwatchActions.md#deletedashboards)
- [DeleteInsightRules](AwsCloudwatchActions.md#deleteinsightrules)
- [DeleteMetricStream](AwsCloudwatchActions.md#deletemetricstream)
- [DeleteServiceLevelObjective](AwsCloudwatchActions.md#deleteservicelevelobjective)
- [DescribeAlarmHistory](AwsCloudwatchActions.md#describealarmhistory)
- [DescribeAlarms](AwsCloudwatchActions.md#describealarms)
- [DescribeAlarmsForMetric](AwsCloudwatchActions.md#describealarmsformetric)
- [DescribeAnomalyDetectors](AwsCloudwatchActions.md#describeanomalydetectors)
- [DescribeInsightRules](AwsCloudwatchActions.md#describeinsightrules)
- [DisableAlarmActions](AwsCloudwatchActions.md#disablealarmactions)
- [DisableInsightRules](AwsCloudwatchActions.md#disableinsightrules)
- [EnableAlarmActions](AwsCloudwatchActions.md#enablealarmactions)
- [EnableInsightRules](AwsCloudwatchActions.md#enableinsightrules)
- [EnableTopologyDiscovery](AwsCloudwatchActions.md#enabletopologydiscovery)
- [GenerateQuery](AwsCloudwatchActions.md#generatequery)
- [GetDashboard](AwsCloudwatchActions.md#getdashboard)
- [GetInsightRuleReport](AwsCloudwatchActions.md#getinsightrulereport)
- [GetMetricData](AwsCloudwatchActions.md#getmetricdata)
- [GetMetricStatistics](AwsCloudwatchActions.md#getmetricstatistics)
- [GetMetricStream](AwsCloudwatchActions.md#getmetricstream)
- [GetMetricWidgetImage](AwsCloudwatchActions.md#getmetricwidgetimage)
- [GetService](AwsCloudwatchActions.md#getservice)
- [GetServiceData](AwsCloudwatchActions.md#getservicedata)
- [GetServiceLevelObjective](AwsCloudwatchActions.md#getservicelevelobjective)
- [GetTopologyDiscoveryStatus](AwsCloudwatchActions.md#gettopologydiscoverystatus)
- [GetTopologyMap](AwsCloudwatchActions.md#gettopologymap)
- [Link](AwsCloudwatchActions.md#link)
- [ListDashboards](AwsCloudwatchActions.md#listdashboards)
- [ListManagedInsightRules](AwsCloudwatchActions.md#listmanagedinsightrules)
- [ListMetricStreams](AwsCloudwatchActions.md#listmetricstreams)
- [ListMetrics](AwsCloudwatchActions.md#listmetrics)
- [ListServiceLevelObjectives](AwsCloudwatchActions.md#listservicelevelobjectives)
- [ListServices](AwsCloudwatchActions.md#listservices)
- [ListTagsForResource](AwsCloudwatchActions.md#listtagsforresource)
- [PutAnomalyDetector](AwsCloudwatchActions.md#putanomalydetector)
- [PutCompositeAlarm](AwsCloudwatchActions.md#putcompositealarm)
- [PutDashboard](AwsCloudwatchActions.md#putdashboard)
- [PutInsightRule](AwsCloudwatchActions.md#putinsightrule)
- [PutManagedInsightRules](AwsCloudwatchActions.md#putmanagedinsightrules)
- [PutMetricAlarm](AwsCloudwatchActions.md#putmetricalarm)
- [PutMetricData](AwsCloudwatchActions.md#putmetricdata)
- [PutMetricStream](AwsCloudwatchActions.md#putmetricstream)
- [SetAlarmState](AwsCloudwatchActions.md#setalarmstate)
- [StartMetricStreams](AwsCloudwatchActions.md#startmetricstreams)
- [StopMetricStreams](AwsCloudwatchActions.md#stopmetricstreams)
- [TagResource](AwsCloudwatchActions.md#tagresource)
- [UntagResource](AwsCloudwatchActions.md#untagresource)
- [UpdateServiceLevelObjective](AwsCloudwatchActions.md#updateservicelevelobjective)

## Enumeration Members

### BatchGetServiceLevelIndicatorReport

• **BatchGetServiceLevelIndicatorReport** = ``"cloudwatch:BatchGetServiceLevelIndicatorReport"``

Grants permission to batch get service level indicator report

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:17

___

### BatchGetServiceLevelObjectiveBudgetReport

• **BatchGetServiceLevelObjectiveBudgetReport** = ``"cloudwatch:BatchGetServiceLevelObjectiveBudgetReport"``

Grants permission to batch retrieve a service level objective budget report

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:23

___

### CreateServiceLevelObjective

• **CreateServiceLevelObjective** = ``"cloudwatch:CreateServiceLevelObjective"``

Grants permission to create a service level objective

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:29

___

### DeleteAlarms

• **DeleteAlarms** = ``"cloudwatch:DeleteAlarms"``

Grants permission to delete a collection of alarms

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAlarms.html

#### Defined in

actions/cloudwatch.ts:35

___

### DeleteAnomalyDetector

• **DeleteAnomalyDetector** = ``"cloudwatch:DeleteAnomalyDetector"``

Grants permission to delete the specified anomaly detection model from your acc
ount

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAnomalyDetector.html

#### Defined in

actions/cloudwatch.ts:42

___

### DeleteDashboards

• **DeleteDashboards** = ``"cloudwatch:DeleteDashboards"``

Grants permission to delete all CloudWatch dashboards that you specify

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteDashboards.html

#### Defined in

actions/cloudwatch.ts:48

___

### DeleteInsightRules

• **DeleteInsightRules** = ``"cloudwatch:DeleteInsightRules"``

Grants permission to delete a collection of insight rules

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteInsightRules.html

#### Defined in

actions/cloudwatch.ts:54

___

### DeleteMetricStream

• **DeleteMetricStream** = ``"cloudwatch:DeleteMetricStream"``

Grants permission to delete the CloudWatch metric stream that you specify

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteMetricStream.html

#### Defined in

actions/cloudwatch.ts:60

___

### DeleteServiceLevelObjective

• **DeleteServiceLevelObjective** = ``"cloudwatch:DeleteServiceLevelObjective"``

Grants permission to delete a service level objective

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:66

___

### DescribeAlarmHistory

• **DescribeAlarmHistory** = ``"cloudwatch:DescribeAlarmHistory"``

Grants permission to retrieve the history for the specified alarm

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html

#### Defined in

actions/cloudwatch.ts:72

___

### DescribeAlarms

• **DescribeAlarms** = ``"cloudwatch:DescribeAlarms"``

Grants permission to describe all alarms, currently owned by the user's account

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html

#### Defined in

actions/cloudwatch.ts:78

___

### DescribeAlarmsForMetric

• **DescribeAlarmsForMetric** = ``"cloudwatch:DescribeAlarmsForMetric"``

Grants permission to describe all alarms configured on the specified metric, cu
rrently owned by the user's account

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmsForMetric.html

#### Defined in

actions/cloudwatch.ts:85

___

### DescribeAnomalyDetectors

• **DescribeAnomalyDetectors** = ``"cloudwatch:DescribeAnomalyDetectors"``

Grants permission to list the anomaly detection models that you have created in
your account

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAnomalyDetectors.html

#### Defined in

actions/cloudwatch.ts:92

___

### DescribeInsightRules

• **DescribeInsightRules** = ``"cloudwatch:DescribeInsightRules"``

Grants permission to describe all insight rules, currently owned by the user's
account

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html

#### Defined in

actions/cloudwatch.ts:99

___

### DisableAlarmActions

• **DisableAlarmActions** = ``"cloudwatch:DisableAlarmActions"``

Grants permission to disable actions for a collection of alarms

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableAlarmActions.html

#### Defined in

actions/cloudwatch.ts:105

___

### DisableInsightRules

• **DisableInsightRules** = ``"cloudwatch:DisableInsightRules"``

Grants permission to disable a collection of insight rules

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableInsightRules.html

#### Defined in

actions/cloudwatch.ts:111

___

### EnableAlarmActions

• **EnableAlarmActions** = ``"cloudwatch:EnableAlarmActions"``

Grants permission to enable actions for a collection of alarms

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableAlarmActions.html

#### Defined in

actions/cloudwatch.ts:117

___

### EnableInsightRules

• **EnableInsightRules** = ``"cloudwatch:EnableInsightRules"``

Grants permission to enable a collection of insight rules

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableInsightRules.html

#### Defined in

actions/cloudwatch.ts:123

___

### EnableTopologyDiscovery

• **EnableTopologyDiscovery** = ``"cloudwatch:EnableTopologyDiscovery"``

Grants permission to enable a CloudWatch topology discovery

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:129

___

### GenerateQuery

• **GenerateQuery** = ``"cloudwatch:GenerateQuery"``

Grants permission to generate a Metrics Insights or Logs Insights query string
from a natural language prompt

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-query-assist.html

#### Defined in

actions/cloudwatch.ts:136

___

### GetDashboard

• **GetDashboard** = ``"cloudwatch:GetDashboard"``

Grants permission to display the details of the CloudWatch dashboard you specif
y

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetDashboard.html

#### Defined in

actions/cloudwatch.ts:143

___

### GetInsightRuleReport

• **GetInsightRuleReport** = ``"cloudwatch:GetInsightRuleReport"``

Grants permission to return the top-N report of unique contributors over a time
range for a given insight rule

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html

#### Defined in

actions/cloudwatch.ts:150

___

### GetMetricData

• **GetMetricData** = ``"cloudwatch:GetMetricData"``

Grants permission to retrieve batch amounts of CloudWatch metric data and perfo
rm metric math on retrieved data

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html

#### Defined in

actions/cloudwatch.ts:157

___

### GetMetricStatistics

• **GetMetricStatistics** = ``"cloudwatch:GetMetricStatistics"``

Grants permission to retrieve statistics for the specified metric

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html

#### Defined in

actions/cloudwatch.ts:163

___

### GetMetricStream

• **GetMetricStream** = ``"cloudwatch:GetMetricStream"``

Grants permission to return the details of a CloudWatch metric stream

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStream.html

#### Defined in

actions/cloudwatch.ts:169

___

### GetMetricWidgetImage

• **GetMetricWidgetImage** = ``"cloudwatch:GetMetricWidgetImage"``

Grants permission to retrieve snapshots of metric widgets

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricWidgetImage.html

#### Defined in

actions/cloudwatch.ts:175

___

### GetService

• **GetService** = ``"cloudwatch:GetService"``

Grants permission to retrieve information about a service

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:181

___

### GetServiceData

• **GetServiceData** = ``"cloudwatch:GetServiceData"``

Grants permission to retrieve service data

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html

#### Defined in

actions/cloudwatch.ts:187

___

### GetServiceLevelObjective

• **GetServiceLevelObjective** = ``"cloudwatch:GetServiceLevelObjective"``

Grants permission to retrieve information about service level objective

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:193

___

### GetTopologyDiscoveryStatus

• **GetTopologyDiscoveryStatus** = ``"cloudwatch:GetTopologyDiscoveryStatus"``

Grants permission to retrieve a CloudWatch topology discovery status

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html

#### Defined in

actions/cloudwatch.ts:199

___

### GetTopologyMap

• **GetTopologyMap** = ``"cloudwatch:GetTopologyMap"``

Grants permission to retrieve a CloudWatch topology map

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:205

___

### Link

• **Link** = ``"cloudwatch:Link"``

Grants permission to share CloudWatch resources with a monitoring account

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account-Setup.html#CloudWatch-Unified-Cross-Account-Setup-permissions

#### Defined in

actions/cloudwatch.ts:211

___

### ListDashboards

• **ListDashboards** = ``"cloudwatch:ListDashboards"``

Grants permission to return a list of all CloudWatch dashboards in your account

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListDashboards.html

#### Defined in

actions/cloudwatch.ts:217

___

### ListManagedInsightRules

• **ListManagedInsightRules** = ``"cloudwatch:ListManagedInsightRules"``

Grants permission to list available managed Insight Rules for a given Resource
ARN

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListManagedInsightRules.html

#### Defined in

actions/cloudwatch.ts:224

___

### ListMetricStreams

• **ListMetricStreams** = ``"cloudwatch:ListMetricStreams"``

Grants permission to return a list of all CloudWatch metric streams in your acc
ount

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetricStreams.html

#### Defined in

actions/cloudwatch.ts:231

___

### ListMetrics

• **ListMetrics** = ``"cloudwatch:ListMetrics"``

Grants permission to retrieve a list of valid metrics stored for the AWS accoun
t owner

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html

#### Defined in

actions/cloudwatch.ts:238

___

### ListServiceLevelObjectives

• **ListServiceLevelObjectives** = ``"cloudwatch:ListServiceLevelObjectives"``

Grants permission to list service level objectives

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:244

___

### ListServices

• **ListServices** = ``"cloudwatch:ListServices"``

Grants permission to list services

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:250

___

### ListTagsForResource

• **ListTagsForResource** = ``"cloudwatch:ListTagsForResource"``

Grants permission to list tags for an Amazon CloudWatch resource

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/cloudwatch.ts:256

___

### PutAnomalyDetector

• **PutAnomalyDetector** = ``"cloudwatch:PutAnomalyDetector"``

Grants permission to create or update an anomaly detection model for a CloudWat
ch metric

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutAnomalyDetector.html

#### Defined in

actions/cloudwatch.ts:263

___

### PutCompositeAlarm

• **PutCompositeAlarm** = ``"cloudwatch:PutCompositeAlarm"``

Grants permission to create or update a composite alarm

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutCompositeAlarm.html

#### Defined in

actions/cloudwatch.ts:269

___

### PutDashboard

• **PutDashboard** = ``"cloudwatch:PutDashboard"``

Grants permission to create a CloudWatch dashboard, or update an existing dashb
oard if it already exists

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutDashboard.html

#### Defined in

actions/cloudwatch.ts:276

___

### PutInsightRule

• **PutInsightRule** = ``"cloudwatch:PutInsightRule"``

Grants permission to create a new insight rule or replace an existing insight r
ule

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutInsightRule.html

#### Defined in

actions/cloudwatch.ts:283

___

### PutManagedInsightRules

• **PutManagedInsightRules** = ``"cloudwatch:PutManagedInsightRules"``

Grants permission to create managed Insight Rules

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutManagedInsightRules.html

#### Defined in

actions/cloudwatch.ts:289

___

### PutMetricAlarm

• **PutMetricAlarm** = ``"cloudwatch:PutMetricAlarm"``

Grants permission to create or update an alarm and associates it with the speci
fied Amazon CloudWatch metric

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html

#### Defined in

actions/cloudwatch.ts:296

___

### PutMetricData

• **PutMetricData** = ``"cloudwatch:PutMetricData"``

Grants permission to publish metric data points to Amazon CloudWatch

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html

#### Defined in

actions/cloudwatch.ts:302

___

### PutMetricStream

• **PutMetricStream** = ``"cloudwatch:PutMetricStream"``

Grants permission to create a CloudWatch metric stream, or update an existing m
etric stream if it already exists

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricStream.html

#### Defined in

actions/cloudwatch.ts:309

___

### SetAlarmState

• **SetAlarmState** = ``"cloudwatch:SetAlarmState"``

Grants permission to temporarily set the state of an alarm for testing purposes

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_SetAlarmState.html

#### Defined in

actions/cloudwatch.ts:315

___

### StartMetricStreams

• **StartMetricStreams** = ``"cloudwatch:StartMetricStreams"``

Grants permission to start all CloudWatch metric streams that you specify

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_StartMetricStreams.html

#### Defined in

actions/cloudwatch.ts:321

___

### StopMetricStreams

• **StopMetricStreams** = ``"cloudwatch:StopMetricStreams"``

Grants permission to stop all CloudWatch metric streams that you specify

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_StopMetricStreams.html

#### Defined in

actions/cloudwatch.ts:327

___

### TagResource

• **TagResource** = ``"cloudwatch:TagResource"``

Grants permission to add tags to an Amazon CloudWatch resource

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html

#### Defined in

actions/cloudwatch.ts:333

___

### UntagResource

• **UntagResource** = ``"cloudwatch:UntagResource"``

Grants permission to remove a tag from an Amazon CloudWatch resource

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html

#### Defined in

actions/cloudwatch.ts:339

___

### UpdateServiceLevelObjective

• **UpdateServiceLevelObjective** = ``"cloudwatch:UpdateServiceLevelObjective"``

Grants permission to update a service level objective

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK

#### Defined in

actions/cloudwatch.ts:345
