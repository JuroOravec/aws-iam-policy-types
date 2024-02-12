[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsXrayActions

# Enumeration: AwsXrayActions

All IAM policy actions for AWS X-Ray (XRAY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsx-ray.html

2024-02-12T09:59:44.842Z

## Table of contents

### Enumeration Members

- [BatchGetTraceSummaryById](AwsXrayActions.md#batchgettracesummarybyid)
- [BatchGetTraces](AwsXrayActions.md#batchgettraces)
- [CreateGroup](AwsXrayActions.md#creategroup)
- [CreateSamplingRule](AwsXrayActions.md#createsamplingrule)
- [DeleteGroup](AwsXrayActions.md#deletegroup)
- [DeleteResourcePolicy](AwsXrayActions.md#deleteresourcepolicy)
- [DeleteSamplingRule](AwsXrayActions.md#deletesamplingrule)
- [GetDistinctTraceGraphs](AwsXrayActions.md#getdistincttracegraphs)
- [GetEncryptionConfig](AwsXrayActions.md#getencryptionconfig)
- [GetGroup](AwsXrayActions.md#getgroup)
- [GetGroups](AwsXrayActions.md#getgroups)
- [GetInsight](AwsXrayActions.md#getinsight)
- [GetInsightEvents](AwsXrayActions.md#getinsightevents)
- [GetInsightImpactGraph](AwsXrayActions.md#getinsightimpactgraph)
- [GetInsightSummaries](AwsXrayActions.md#getinsightsummaries)
- [GetSamplingRules](AwsXrayActions.md#getsamplingrules)
- [GetSamplingStatisticSummaries](AwsXrayActions.md#getsamplingstatisticsummaries)
- [GetSamplingTargets](AwsXrayActions.md#getsamplingtargets)
- [GetServiceGraph](AwsXrayActions.md#getservicegraph)
- [GetTimeSeriesServiceStatistics](AwsXrayActions.md#gettimeseriesservicestatistics)
- [GetTraceGraph](AwsXrayActions.md#gettracegraph)
- [GetTraceSummaries](AwsXrayActions.md#gettracesummaries)
- [Link](AwsXrayActions.md#link)
- [ListResourcePolicies](AwsXrayActions.md#listresourcepolicies)
- [ListTagsForResource](AwsXrayActions.md#listtagsforresource)
- [PutEncryptionConfig](AwsXrayActions.md#putencryptionconfig)
- [PutResourcePolicy](AwsXrayActions.md#putresourcepolicy)
- [PutTelemetryRecords](AwsXrayActions.md#puttelemetryrecords)
- [PutTraceSegments](AwsXrayActions.md#puttracesegments)
- [TagResource](AwsXrayActions.md#tagresource)
- [UntagResource](AwsXrayActions.md#untagresource)
- [UpdateGroup](AwsXrayActions.md#updategroup)
- [UpdateSamplingRule](AwsXrayActions.md#updatesamplingrule)

## Enumeration Members

### BatchGetTraceSummaryById

• **BatchGetTraceSummaryById** = ``"xray:BatchGetTraceSummaryById"``

Grants permission to retrieve metadata for a list of traces specified by ID

See https://docs.aws.amazon.com/xray/latest/devguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-console

#### Defined in

actions/xray.ts:17

___

### BatchGetTraces

• **BatchGetTraces** = ``"xray:BatchGetTraces"``

Grants permission to retrieve a list of traces specified by ID. Each trace is a
collection of segment documents that originates from a single request. Use GetT
raceSummaries to get a list of trace IDs

See https://docs.aws.amazon.com/xray/latest/api/API_BatchGetTraces.html

#### Defined in

actions/xray.ts:25

___

### CreateGroup

• **CreateGroup** = ``"xray:CreateGroup"``

Grants permission to create a group resource with a name and a filter expressio
n

See https://docs.aws.amazon.com/xray/latest/api/API_CreateGroup.html

#### Defined in

actions/xray.ts:32

___

### CreateSamplingRule

• **CreateSamplingRule** = ``"xray:CreateSamplingRule"``

Grants permission to create a rule to control sampling behavior for instrumente
d applications

See https://docs.aws.amazon.com/xray/latest/api/API_CreateSamplingRule.html

#### Defined in

actions/xray.ts:39

___

### DeleteGroup

• **DeleteGroup** = ``"xray:DeleteGroup"``

Grants permission to delete a group resource

See https://docs.aws.amazon.com/xray/latest/api/API_DeleteGroup.html

#### Defined in

actions/xray.ts:45

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"xray:DeleteResourcePolicy"``

Grants permission to delete resource policies

See https://docs.aws.amazon.com/xray/latest/api/API_DeleteResourcePolicy.html

#### Defined in

actions/xray.ts:51

___

### DeleteSamplingRule

• **DeleteSamplingRule** = ``"xray:DeleteSamplingRule"``

Grants permission to delete a sampling rule

See https://docs.aws.amazon.com/xray/latest/api/API_DeleteSamplingRule.html

#### Defined in

actions/xray.ts:57

___

### GetDistinctTraceGraphs

• **GetDistinctTraceGraphs** = ``"xray:GetDistinctTraceGraphs"``

Grants permission to retrieve distinct service graphs for one or more specific
trace IDs

See https://docs.aws.amazon.com/xray/latest/devguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-console

#### Defined in

actions/xray.ts:64

___

### GetEncryptionConfig

• **GetEncryptionConfig** = ``"xray:GetEncryptionConfig"``

Grants permission to retrieve the current encryption configuration for X-Ray da
ta

See https://docs.aws.amazon.com/xray/latest/api/API_GetEncryptionConfig.html

#### Defined in

actions/xray.ts:71

___

### GetGroup

• **GetGroup** = ``"xray:GetGroup"``

Grants permission to retrieve group resource details

See https://docs.aws.amazon.com/xray/latest/api/API_GetGroup.html

#### Defined in

actions/xray.ts:77

___

### GetGroups

• **GetGroups** = ``"xray:GetGroups"``

Grants permission to retrieve all active group details

See https://docs.aws.amazon.com/xray/latest/api/API_GetGroups.html

#### Defined in

actions/xray.ts:83

___

### GetInsight

• **GetInsight** = ``"xray:GetInsight"``

Grants permission to retrieve the details of a specific insight

See https://docs.aws.amazon.com/xray/latest/api/API_GetInsight.html

#### Defined in

actions/xray.ts:89

___

### GetInsightEvents

• **GetInsightEvents** = ``"xray:GetInsightEvents"``

Grants permission to retrieve the events of a specific insight

See https://docs.aws.amazon.com/xray/latest/api/API_GetInsightEvents.html

#### Defined in

actions/xray.ts:95

___

### GetInsightImpactGraph

• **GetInsightImpactGraph** = ``"xray:GetInsightImpactGraph"``

Grants permission to retrieve the part of the service graph which is impacted f
or a specific insight

See https://docs.aws.amazon.com/xray/latest/api/API_GetInsightImpactGraph.html

#### Defined in

actions/xray.ts:102

___

### GetInsightSummaries

• **GetInsightSummaries** = ``"xray:GetInsightSummaries"``

Grants permission to retrieve the summary of all insights for a group and time
range with optional filters

See https://docs.aws.amazon.com/xray/latest/api/API_GetInsightSummaries.html

#### Defined in

actions/xray.ts:109

___

### GetSamplingRules

• **GetSamplingRules** = ``"xray:GetSamplingRules"``

Grants permission to retrieve all sampling rules

See https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html

#### Defined in

actions/xray.ts:115

___

### GetSamplingStatisticSummaries

• **GetSamplingStatisticSummaries** = ``"xray:GetSamplingStatisticSummaries"``

Grants permission to retrieve information about recent sampling results for all
sampling rules

See https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingStatisticSummaries.html

#### Defined in

actions/xray.ts:122

___

### GetSamplingTargets

• **GetSamplingTargets** = ``"xray:GetSamplingTargets"``

Grants permission to request a sampling quota for rules that the service is usi
ng to sample requests

See https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html

#### Defined in

actions/xray.ts:129

___

### GetServiceGraph

• **GetServiceGraph** = ``"xray:GetServiceGraph"``

Grants permission to retrieve a document that describes services that process i
ncoming requests, and downstream services that they call as a result

See https://docs.aws.amazon.com/xray/latest/api/API_GetServiceGraph.html

#### Defined in

actions/xray.ts:136

___

### GetTimeSeriesServiceStatistics

• **GetTimeSeriesServiceStatistics** = ``"xray:GetTimeSeriesServiceStatistics"``

Grants permission to retrieve an aggregation of service statistics defined by a
specific time range bucketed into time intervals

See https://docs.aws.amazon.com/xray/latest/api/API_GetTimeSeriesServiceStatistics.html

#### Defined in

actions/xray.ts:143

___

### GetTraceGraph

• **GetTraceGraph** = ``"xray:GetTraceGraph"``

Grants permission to retrieve a service graph for one or more specific trace ID
s

See https://docs.aws.amazon.com/xray/latest/api/API_GetTraceGraph.html

#### Defined in

actions/xray.ts:150

___

### GetTraceSummaries

• **GetTraceSummaries** = ``"xray:GetTraceSummaries"``

Grants permission to retrieve IDs and metadata for traces available for a speci
fied time frame using an optional filter. To get the full traces, pass the trac
e IDs to BatchGetTraces

See https://docs.aws.amazon.com/xray/latest/api/API_GetTraceSummaries.html

#### Defined in

actions/xray.ts:158

___

### Link

• **Link** = ``"xray:Link"``

Grants permission to share X-Ray resources with a monitoring account

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account-Setup.html#CloudWatch-Unified-Cross-Account-Setup-permissions

#### Defined in

actions/xray.ts:164

___

### ListResourcePolicies

• **ListResourcePolicies** = ``"xray:ListResourcePolicies"``

Grants permission to list resource policies

See https://docs.aws.amazon.com/xray/latest/api/API_ListResourcePolicies.html

#### Defined in

actions/xray.ts:170

___

### ListTagsForResource

• **ListTagsForResource** = ``"xray:ListTagsForResource"``

Grants permission to list tags for an X-Ray resource

See https://docs.aws.amazon.com/xray/latest/api/API_ListTagsForResource.html

#### Defined in

actions/xray.ts:176

___

### PutEncryptionConfig

• **PutEncryptionConfig** = ``"xray:PutEncryptionConfig"``

Grants permission to update the encryption configuration for X-Ray data

See https://docs.aws.amazon.com/xray/latest/api/API_PutEncryptionConfig.html

#### Defined in

actions/xray.ts:182

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"xray:PutResourcePolicy"``

Grants permission to create or update resource policies

See https://docs.aws.amazon.com/xray/latest/api/API_PutResourcePolicy.html

#### Defined in

actions/xray.ts:188

___

### PutTelemetryRecords

• **PutTelemetryRecords** = ``"xray:PutTelemetryRecords"``

Grants permission to send AWS X-Ray daemon telemetry to the service

See https://docs.aws.amazon.com/xray/latest/api/API_PutTelemetryRecords.html

#### Defined in

actions/xray.ts:194

___

### PutTraceSegments

• **PutTraceSegments** = ``"xray:PutTraceSegments"``

Grants permission to upload segment documents to AWS X-Ray. The X-Ray SDK gener
ates segment documents and sends them to the X-Ray daemon, which uploads them i
n batches

See https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html

#### Defined in

actions/xray.ts:202

___

### TagResource

• **TagResource** = ``"xray:TagResource"``

Grants permission to add tags to an X-Ray resource

See https://docs.aws.amazon.com/xray/latest/api/API_TagResource.html

#### Defined in

actions/xray.ts:208

___

### UntagResource

• **UntagResource** = ``"xray:UntagResource"``

Grants permission to remove tags from an X-Ray resource

See https://docs.aws.amazon.com/xray/latest/api/API_UntagResource.html

#### Defined in

actions/xray.ts:214

___

### UpdateGroup

• **UpdateGroup** = ``"xray:UpdateGroup"``

Grants permission to update a group resource

See https://docs.aws.amazon.com/xray/latest/api/API_UpdateGroup.html

#### Defined in

actions/xray.ts:220

___

### UpdateSamplingRule

• **UpdateSamplingRule** = ``"xray:UpdateSamplingRule"``

Grants permission to modify a sampling rule's configuration

See https://docs.aws.amazon.com/xray/latest/api/API_UpdateSamplingRule.html

#### Defined in

actions/xray.ts:226
