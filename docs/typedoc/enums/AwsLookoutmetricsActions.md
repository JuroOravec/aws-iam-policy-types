[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsLookoutmetricsActions

# Enumeration: AwsLookoutmetricsActions

All IAM policy actions for Amazon Lookout for Metrics (LOOKOUTMETRICS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutformetrics.html

2024-02-12T09:58:08.206Z

## Table of contents

### Enumeration Members

- [ActivateAnomalyDetector](AwsLookoutmetricsActions.md#activateanomalydetector)
- [BackTestAnomalyDetector](AwsLookoutmetricsActions.md#backtestanomalydetector)
- [CreateAlert](AwsLookoutmetricsActions.md#createalert)
- [CreateAnomalyDetector](AwsLookoutmetricsActions.md#createanomalydetector)
- [CreateMetricSet](AwsLookoutmetricsActions.md#createmetricset)
- [DeactivateAnomalyDetector](AwsLookoutmetricsActions.md#deactivateanomalydetector)
- [DeleteAlert](AwsLookoutmetricsActions.md#deletealert)
- [DeleteAnomalyDetector](AwsLookoutmetricsActions.md#deleteanomalydetector)
- [DescribeAlert](AwsLookoutmetricsActions.md#describealert)
- [DescribeAnomalyDetectionExecutions](AwsLookoutmetricsActions.md#describeanomalydetectionexecutions)
- [DescribeAnomalyDetector](AwsLookoutmetricsActions.md#describeanomalydetector)
- [DescribeMetricSet](AwsLookoutmetricsActions.md#describemetricset)
- [DetectMetricSetConfig](AwsLookoutmetricsActions.md#detectmetricsetconfig)
- [GetAnomalyGroup](AwsLookoutmetricsActions.md#getanomalygroup)
- [GetDataQualityMetrics](AwsLookoutmetricsActions.md#getdataqualitymetrics)
- [GetFeedback](AwsLookoutmetricsActions.md#getfeedback)
- [GetSampleData](AwsLookoutmetricsActions.md#getsampledata)
- [ListAlerts](AwsLookoutmetricsActions.md#listalerts)
- [ListAnomalyDetectors](AwsLookoutmetricsActions.md#listanomalydetectors)
- [ListAnomalyGroupRelatedMetrics](AwsLookoutmetricsActions.md#listanomalygrouprelatedmetrics)
- [ListAnomalyGroupSummaries](AwsLookoutmetricsActions.md#listanomalygroupsummaries)
- [ListAnomalyGroupTimeSeries](AwsLookoutmetricsActions.md#listanomalygrouptimeseries)
- [ListMetricSets](AwsLookoutmetricsActions.md#listmetricsets)
- [ListTagsForResource](AwsLookoutmetricsActions.md#listtagsforresource)
- [PutFeedback](AwsLookoutmetricsActions.md#putfeedback)
- [TagResource](AwsLookoutmetricsActions.md#tagresource)
- [UntagResource](AwsLookoutmetricsActions.md#untagresource)
- [UpdateAlert](AwsLookoutmetricsActions.md#updatealert)
- [UpdateAnomalyDetector](AwsLookoutmetricsActions.md#updateanomalydetector)
- [UpdateMetricSet](AwsLookoutmetricsActions.md#updatemetricset)

## Enumeration Members

### ActivateAnomalyDetector

• **ActivateAnomalyDetector** = ``"lookoutmetrics:ActivateAnomalyDetector"``

Grants permission to activate an anomaly detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ActivateAnomalyDetector.html

#### Defined in

actions/lookoutmetrics.ts:17

___

### BackTestAnomalyDetector

• **BackTestAnomalyDetector** = ``"lookoutmetrics:BackTestAnomalyDetector"``

Grants permission to run a backtest with an anomaly detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_BackTestAnomalyDetector.html

#### Defined in

actions/lookoutmetrics.ts:23

___

### CreateAlert

• **CreateAlert** = ``"lookoutmetrics:CreateAlert"``

Grants permission to create an alert for an anomaly detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_CreateAlert.html

#### Defined in

actions/lookoutmetrics.ts:29

___

### CreateAnomalyDetector

• **CreateAnomalyDetector** = ``"lookoutmetrics:CreateAnomalyDetector"``

Grants permission to create an anomaly detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_CreateAnomalyDetector.html

#### Defined in

actions/lookoutmetrics.ts:35

___

### CreateMetricSet

• **CreateMetricSet** = ``"lookoutmetrics:CreateMetricSet"``

Grants permission to create a dataset

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_CreateMetricSet.html

#### Defined in

actions/lookoutmetrics.ts:41

___

### DeactivateAnomalyDetector

• **DeactivateAnomalyDetector** = ``"lookoutmetrics:DeactivateAnomalyDetector"``

Grants permission to deactivate an anomaly detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DeactivateAnomalyDetector.html

#### Defined in

actions/lookoutmetrics.ts:47

___

### DeleteAlert

• **DeleteAlert** = ``"lookoutmetrics:DeleteAlert"``

Grants permission to delete an alert

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DeleteAlert.html

#### Defined in

actions/lookoutmetrics.ts:53

___

### DeleteAnomalyDetector

• **DeleteAnomalyDetector** = ``"lookoutmetrics:DeleteAnomalyDetector"``

Grants permission to delete an anomaly detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DeleteAnomalyDetector.html

#### Defined in

actions/lookoutmetrics.ts:59

___

### DescribeAlert

• **DescribeAlert** = ``"lookoutmetrics:DescribeAlert"``

Grants permission to get details about an alert

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeAlert.html

#### Defined in

actions/lookoutmetrics.ts:65

___

### DescribeAnomalyDetectionExecutions

• **DescribeAnomalyDetectionExecutions** = ``"lookoutmetrics:DescribeAnomalyDetectionExecutions"``

Grants permission to get information about an anomaly detection job

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeAnomalyDetectionExecutions.html

#### Defined in

actions/lookoutmetrics.ts:71

___

### DescribeAnomalyDetector

• **DescribeAnomalyDetector** = ``"lookoutmetrics:DescribeAnomalyDetector"``

Grants permission to get details about an anomaly detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeAnomalyDetector.html

#### Defined in

actions/lookoutmetrics.ts:77

___

### DescribeMetricSet

• **DescribeMetricSet** = ``"lookoutmetrics:DescribeMetricSet"``

Grants permission to get details about a dataset

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeMetricSet.html

#### Defined in

actions/lookoutmetrics.ts:83

___

### DetectMetricSetConfig

• **DetectMetricSetConfig** = ``"lookoutmetrics:DetectMetricSetConfig"``

Grants permission to detect metric set config from data source

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DetectMetricSetConfig.html

#### Defined in

actions/lookoutmetrics.ts:89

___

### GetAnomalyGroup

• **GetAnomalyGroup** = ``"lookoutmetrics:GetAnomalyGroup"``

Grants permission to get details about a group of affected metrics

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetAnomalyGroup.html

#### Defined in

actions/lookoutmetrics.ts:95

___

### GetDataQualityMetrics

• **GetDataQualityMetrics** = ``"lookoutmetrics:GetDataQualityMetrics"``

Grants permission to get data quality metrics for an anomaly detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetDataQualityMetrics.html

#### Defined in

actions/lookoutmetrics.ts:101

___

### GetFeedback

• **GetFeedback** = ``"lookoutmetrics:GetFeedback"``

Grants permission to get feedback on affected metrics for an anomaly group

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetFeedback.html

#### Defined in

actions/lookoutmetrics.ts:107

___

### GetSampleData

• **GetSampleData** = ``"lookoutmetrics:GetSampleData"``

Grants permission to get a selection of sample records from an Amazon S3 dataso
urce

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetSampleData.html

#### Defined in

actions/lookoutmetrics.ts:114

___

### ListAlerts

• **ListAlerts** = ``"lookoutmetrics:ListAlerts"``

Grants permission to get a list of alerts for a detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAlerts.html

#### Defined in

actions/lookoutmetrics.ts:120

___

### ListAnomalyDetectors

• **ListAnomalyDetectors** = ``"lookoutmetrics:ListAnomalyDetectors"``

Grants permission to get a list of anomaly detectors

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyDetectors.html

#### Defined in

actions/lookoutmetrics.ts:126

___

### ListAnomalyGroupRelatedMetrics

• **ListAnomalyGroupRelatedMetrics** = ``"lookoutmetrics:ListAnomalyGroupRelatedMetrics"``

Grants permission to get a list of related measures in an anomaly group

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyGroupRelatedMetrics.html

#### Defined in

actions/lookoutmetrics.ts:132

___

### ListAnomalyGroupSummaries

• **ListAnomalyGroupSummaries** = ``"lookoutmetrics:ListAnomalyGroupSummaries"``

Grants permission to get a list of anomaly groups

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyGroupSummaries.html

#### Defined in

actions/lookoutmetrics.ts:138

___

### ListAnomalyGroupTimeSeries

• **ListAnomalyGroupTimeSeries** = ``"lookoutmetrics:ListAnomalyGroupTimeSeries"``

Grants permission to get a list of affected metrics for a measure in an anomaly
group

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyGroupTimeSeries.html

#### Defined in

actions/lookoutmetrics.ts:145

___

### ListMetricSets

• **ListMetricSets** = ``"lookoutmetrics:ListMetricSets"``

Grants permission to get a list of datasets

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListMetricSets.html

#### Defined in

actions/lookoutmetrics.ts:151

___

### ListTagsForResource

• **ListTagsForResource** = ``"lookoutmetrics:ListTagsForResource"``

Grants permission to get a list of tags for a detector, dataset, or alert

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListTagsForResource.html

#### Defined in

actions/lookoutmetrics.ts:157

___

### PutFeedback

• **PutFeedback** = ``"lookoutmetrics:PutFeedback"``

Grants permission to add feedback for an affected metric in an anomaly group

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_PutFeedback.html

#### Defined in

actions/lookoutmetrics.ts:163

___

### TagResource

• **TagResource** = ``"lookoutmetrics:TagResource"``

Grants permission to add tags to a detector, dataset, or alert

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_TagResource.html

#### Defined in

actions/lookoutmetrics.ts:169

___

### UntagResource

• **UntagResource** = ``"lookoutmetrics:UntagResource"``

Grants permission to remove tags from a detector, dataset, or alert

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UntagResource.html

#### Defined in

actions/lookoutmetrics.ts:175

___

### UpdateAlert

• **UpdateAlert** = ``"lookoutmetrics:UpdateAlert"``

Grants permission to update an alert for an anomaly detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UpdateAlert.html

#### Defined in

actions/lookoutmetrics.ts:181

___

### UpdateAnomalyDetector

• **UpdateAnomalyDetector** = ``"lookoutmetrics:UpdateAnomalyDetector"``

Grants permission to update an anomaly detector

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UpdateAnomalyDetector.html

#### Defined in

actions/lookoutmetrics.ts:187

___

### UpdateMetricSet

• **UpdateMetricSet** = ``"lookoutmetrics:UpdateMetricSet"``

Grants permission to update a dataset

See https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UpdateMetricSet.html

#### Defined in

actions/lookoutmetrics.ts:193
