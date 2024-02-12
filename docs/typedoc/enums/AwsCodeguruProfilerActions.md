[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodeguruProfilerActions

# Enumeration: AwsCodeguruProfilerActions

All IAM policy actions for Amazon CodeGuru Profiler (CODEGURU-PROFILER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguruprofiler.html

2024-02-12T09:56:36.053Z

## Table of contents

### Enumeration Members

- [AddNotificationChannels](AwsCodeguruProfilerActions.md#addnotificationchannels)
- [BatchGetFrameMetricData](AwsCodeguruProfilerActions.md#batchgetframemetricdata)
- [ConfigureAgent](AwsCodeguruProfilerActions.md#configureagent)
- [CreateProfilingGroup](AwsCodeguruProfilerActions.md#createprofilinggroup)
- [DeleteProfilingGroup](AwsCodeguruProfilerActions.md#deleteprofilinggroup)
- [DescribeProfilingGroup](AwsCodeguruProfilerActions.md#describeprofilinggroup)
- [GetFindingsReportAccountSummary](AwsCodeguruProfilerActions.md#getfindingsreportaccountsummary)
- [GetNotificationConfiguration](AwsCodeguruProfilerActions.md#getnotificationconfiguration)
- [GetPolicy](AwsCodeguruProfilerActions.md#getpolicy)
- [GetProfile](AwsCodeguruProfilerActions.md#getprofile)
- [GetRecommendations](AwsCodeguruProfilerActions.md#getrecommendations)
- [ListFindingsReports](AwsCodeguruProfilerActions.md#listfindingsreports)
- [ListProfileTimes](AwsCodeguruProfilerActions.md#listprofiletimes)
- [ListProfilingGroups](AwsCodeguruProfilerActions.md#listprofilinggroups)
- [ListTagsForResource](AwsCodeguruProfilerActions.md#listtagsforresource)
- [PostAgentProfile](AwsCodeguruProfilerActions.md#postagentprofile)
- [PutPermission](AwsCodeguruProfilerActions.md#putpermission)
- [RemoveNotificationChannel](AwsCodeguruProfilerActions.md#removenotificationchannel)
- [RemovePermission](AwsCodeguruProfilerActions.md#removepermission)
- [SubmitFeedback](AwsCodeguruProfilerActions.md#submitfeedback)
- [TagResource](AwsCodeguruProfilerActions.md#tagresource)
- [UntagResource](AwsCodeguruProfilerActions.md#untagresource)
- [UpdateProfilingGroup](AwsCodeguruProfilerActions.md#updateprofilinggroup)

## Enumeration Members

### AddNotificationChannels

• **AddNotificationChannels** = ``"codeguru-profiler:AddNotificationChannels"``

Grants permission to add up to 2 topic ARNs of existing AWS SNS topics to publi
sh notifications

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AddNotificationChannels.html

#### Defined in

actions/codeguru-profiler.ts:18

___

### BatchGetFrameMetricData

• **BatchGetFrameMetricData** = ``"codeguru-profiler:BatchGetFrameMetricData"``

Grants permission to get the frame metric data for a Profiling Group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_BatchGetFrameMetricData.html

#### Defined in

actions/codeguru-profiler.ts:24

___

### ConfigureAgent

• **ConfigureAgent** = ``"codeguru-profiler:ConfigureAgent"``

Grants permission to register with the orchestration service and retrieve profi
ling configuration information, used by agents

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html

#### Defined in

actions/codeguru-profiler.ts:31

___

### CreateProfilingGroup

• **CreateProfilingGroup** = ``"codeguru-profiler:CreateProfilingGroup"``

Grants permission to create a profiling group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_CreateProfilingGroup.html

#### Defined in

actions/codeguru-profiler.ts:37

___

### DeleteProfilingGroup

• **DeleteProfilingGroup** = ``"codeguru-profiler:DeleteProfilingGroup"``

Grants permission to delete a profiling group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DeleteProfilingGroup.html

#### Defined in

actions/codeguru-profiler.ts:43

___

### DescribeProfilingGroup

• **DescribeProfilingGroup** = ``"codeguru-profiler:DescribeProfilingGroup"``

Grants permission to describe a profiling group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DescribeProfilingGroup.html

#### Defined in

actions/codeguru-profiler.ts:49

___

### GetFindingsReportAccountSummary

• **GetFindingsReportAccountSummary** = ``"codeguru-profiler:GetFindingsReportAccountSummary"``

Grants permission to get a summary of recent recommendations for each profiling
group in the account

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetFindingsReportAccountSummary.html

#### Defined in

actions/codeguru-profiler.ts:56

___

### GetNotificationConfiguration

• **GetNotificationConfiguration** = ``"codeguru-profiler:GetNotificationConfiguration"``

Grants permission to get the notification configuration

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetNotificationConfiguration.html

#### Defined in

actions/codeguru-profiler.ts:62

___

### GetPolicy

• **GetPolicy** = ``"codeguru-profiler:GetPolicy"``

Grants permission to get the resource policy associated with the specified Prof
iling Group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetPolicy.html

#### Defined in

actions/codeguru-profiler.ts:69

___

### GetProfile

• **GetProfile** = ``"codeguru-profiler:GetProfile"``

Grants permission to get aggregated profiles for a specific profiling group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html

#### Defined in

actions/codeguru-profiler.ts:75

___

### GetRecommendations

• **GetRecommendations** = ``"codeguru-profiler:GetRecommendations"``

Grants permission to get recommendations

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetRecommendations.html

#### Defined in

actions/codeguru-profiler.ts:81

___

### ListFindingsReports

• **ListFindingsReports** = ``"codeguru-profiler:ListFindingsReports"``

Grants permission to list the available recommendations reports for a specific
profiling group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListFindingsReports.html

#### Defined in

actions/codeguru-profiler.ts:88

___

### ListProfileTimes

• **ListProfileTimes** = ``"codeguru-profiler:ListProfileTimes"``

Grants permission to list the start times of the available aggregated profiles
for a specific profiling group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html

#### Defined in

actions/codeguru-profiler.ts:95

___

### ListProfilingGroups

• **ListProfilingGroups** = ``"codeguru-profiler:ListProfilingGroups"``

Grants permission to list profiling groups in the account

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfilingGroups.html

#### Defined in

actions/codeguru-profiler.ts:101

___

### ListTagsForResource

• **ListTagsForResource** = ``"codeguru-profiler:ListTagsForResource"``

Grants permission to list tags for a Profiling Group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListTagsForResource.html

#### Defined in

actions/codeguru-profiler.ts:107

___

### PostAgentProfile

• **PostAgentProfile** = ``"codeguru-profiler:PostAgentProfile"``

Grants permission to submit a profile collected by an agent belonging to a spec
ific profiling group for aggregation

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html

#### Defined in

actions/codeguru-profiler.ts:114

___

### PutPermission

• **PutPermission** = ``"codeguru-profiler:PutPermission"``

Grants permission to update the list of principals allowed for an action group
in the resource policy associated with the specified Profiling Group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PutPermission.html

#### Defined in

actions/codeguru-profiler.ts:121

___

### RemoveNotificationChannel

• **RemoveNotificationChannel** = ``"codeguru-profiler:RemoveNotificationChannel"``

Grants permission to delete an already configured SNStopic arn from the notific
ation configuration

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemoveNotificationChannel.html

#### Defined in

actions/codeguru-profiler.ts:128

___

### RemovePermission

• **RemovePermission** = ``"codeguru-profiler:RemovePermission"``

Grants permission to remove the permission of specified Action Group from the r
esource policy associated with the specified Profiling Group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemovePermission.html

#### Defined in

actions/codeguru-profiler.ts:135

___

### SubmitFeedback

• **SubmitFeedback** = ``"codeguru-profiler:SubmitFeedback"``

Grants permission to submit user feedback for useful or non useful anomaly

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_SubmitFeedback.html

#### Defined in

actions/codeguru-profiler.ts:141

___

### TagResource

• **TagResource** = ``"codeguru-profiler:TagResource"``

Grants permission to add or overwrite tags to a Profiling Group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_TagResource.html

#### Defined in

actions/codeguru-profiler.ts:147

___

### UntagResource

• **UntagResource** = ``"codeguru-profiler:UntagResource"``

Grants permission to remove tags from a Profiling Group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UntagResource.html

#### Defined in

actions/codeguru-profiler.ts:153

___

### UpdateProfilingGroup

• **UpdateProfilingGroup** = ``"codeguru-profiler:UpdateProfilingGroup"``

Grants permission to update a specific profiling group

See https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UpdateProfilingGroup.html

#### Defined in

actions/codeguru-profiler.ts:159
