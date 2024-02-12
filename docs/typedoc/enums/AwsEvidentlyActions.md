[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEvidentlyActions

# Enumeration: AwsEvidentlyActions

All IAM policy actions for Amazon CloudWatch Evidently (EVIDENTLY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchevidently.html

2024-02-12T09:56:27.683Z

## Table of contents

### Enumeration Members

- [BatchEvaluateFeature](AwsEvidentlyActions.md#batchevaluatefeature)
- [CreateExperiment](AwsEvidentlyActions.md#createexperiment)
- [CreateFeature](AwsEvidentlyActions.md#createfeature)
- [CreateLaunch](AwsEvidentlyActions.md#createlaunch)
- [CreateProject](AwsEvidentlyActions.md#createproject)
- [CreateSegment](AwsEvidentlyActions.md#createsegment)
- [DeleteExperiment](AwsEvidentlyActions.md#deleteexperiment)
- [DeleteFeature](AwsEvidentlyActions.md#deletefeature)
- [DeleteLaunch](AwsEvidentlyActions.md#deletelaunch)
- [DeleteProject](AwsEvidentlyActions.md#deleteproject)
- [DeleteSegment](AwsEvidentlyActions.md#deletesegment)
- [EvaluateFeature](AwsEvidentlyActions.md#evaluatefeature)
- [GetExperiment](AwsEvidentlyActions.md#getexperiment)
- [GetExperimentResults](AwsEvidentlyActions.md#getexperimentresults)
- [GetFeature](AwsEvidentlyActions.md#getfeature)
- [GetLaunch](AwsEvidentlyActions.md#getlaunch)
- [GetProject](AwsEvidentlyActions.md#getproject)
- [GetSegment](AwsEvidentlyActions.md#getsegment)
- [ListExperiments](AwsEvidentlyActions.md#listexperiments)
- [ListFeatures](AwsEvidentlyActions.md#listfeatures)
- [ListLaunches](AwsEvidentlyActions.md#listlaunches)
- [ListProjects](AwsEvidentlyActions.md#listprojects)
- [ListSegmentReferences](AwsEvidentlyActions.md#listsegmentreferences)
- [ListSegments](AwsEvidentlyActions.md#listsegments)
- [ListTagsForResource](AwsEvidentlyActions.md#listtagsforresource)
- [PutProjectEvents](AwsEvidentlyActions.md#putprojectevents)
- [StartExperiment](AwsEvidentlyActions.md#startexperiment)
- [StartLaunch](AwsEvidentlyActions.md#startlaunch)
- [StopExperiment](AwsEvidentlyActions.md#stopexperiment)
- [StopLaunch](AwsEvidentlyActions.md#stoplaunch)
- [TagResource](AwsEvidentlyActions.md#tagresource)
- [TestSegmentPattern](AwsEvidentlyActions.md#testsegmentpattern)
- [UntagResource](AwsEvidentlyActions.md#untagresource)
- [UpdateExperiment](AwsEvidentlyActions.md#updateexperiment)
- [UpdateFeature](AwsEvidentlyActions.md#updatefeature)
- [UpdateLaunch](AwsEvidentlyActions.md#updatelaunch)
- [UpdateProject](AwsEvidentlyActions.md#updateproject)
- [UpdateProjectDataDelivery](AwsEvidentlyActions.md#updateprojectdatadelivery)

## Enumeration Members

### BatchEvaluateFeature

• **BatchEvaluateFeature** = ``"evidently:BatchEvaluateFeature"``

Grants permission to send a batched evaluate feature request

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_BatchEvaluateFeature.html

#### Defined in

actions/evidently.ts:17

___

### CreateExperiment

• **CreateExperiment** = ``"evidently:CreateExperiment"``

Grants permission to create an experiment

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html

#### Defined in

actions/evidently.ts:23

___

### CreateFeature

• **CreateFeature** = ``"evidently:CreateFeature"``

Grants permission to create a feature

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateFeature.html

#### Defined in

actions/evidently.ts:29

___

### CreateLaunch

• **CreateLaunch** = ``"evidently:CreateLaunch"``

Grants permission to create a launch

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html

#### Defined in

actions/evidently.ts:35

___

### CreateProject

• **CreateProject** = ``"evidently:CreateProject"``

Grants permission to create a project

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html

#### Defined in

actions/evidently.ts:41

___

### CreateSegment

• **CreateSegment** = ``"evidently:CreateSegment"``

Grants permission to create a segment

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html

#### Defined in

actions/evidently.ts:47

___

### DeleteExperiment

• **DeleteExperiment** = ``"evidently:DeleteExperiment"``

Grants permission to delete an experiment

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteExperiment.html

#### Defined in

actions/evidently.ts:53

___

### DeleteFeature

• **DeleteFeature** = ``"evidently:DeleteFeature"``

Grants permission to delete a feature

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html

#### Defined in

actions/evidently.ts:59

___

### DeleteLaunch

• **DeleteLaunch** = ``"evidently:DeleteLaunch"``

Grants permission to delete a launch

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteLaunch.html

#### Defined in

actions/evidently.ts:65

___

### DeleteProject

• **DeleteProject** = ``"evidently:DeleteProject"``

Grants permission to delete a project

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteProject.html

#### Defined in

actions/evidently.ts:71

___

### DeleteSegment

• **DeleteSegment** = ``"evidently:DeleteSegment"``

Grants permission to delete a segment

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteSegment.html

#### Defined in

actions/evidently.ts:77

___

### EvaluateFeature

• **EvaluateFeature** = ``"evidently:EvaluateFeature"``

Grants permission to send an evaluate feature request

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html

#### Defined in

actions/evidently.ts:83

___

### GetExperiment

• **GetExperiment** = ``"evidently:GetExperiment"``

Grants permission to get experiment details

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetExperiment.html

#### Defined in

actions/evidently.ts:89

___

### GetExperimentResults

• **GetExperimentResults** = ``"evidently:GetExperimentResults"``

Grants permission to get experiment result

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetExperimentResults.html

#### Defined in

actions/evidently.ts:95

___

### GetFeature

• **GetFeature** = ``"evidently:GetFeature"``

Grants permission to get feature details

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetFeature.html

#### Defined in

actions/evidently.ts:101

___

### GetLaunch

• **GetLaunch** = ``"evidently:GetLaunch"``

Grants permission to get launch details

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetLaunch.html

#### Defined in

actions/evidently.ts:107

___

### GetProject

• **GetProject** = ``"evidently:GetProject"``

Grants permission to get project details

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetProject.html

#### Defined in

actions/evidently.ts:113

___

### GetSegment

• **GetSegment** = ``"evidently:GetSegment"``

Grants permission to get segment details

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetSegment.html

#### Defined in

actions/evidently.ts:119

___

### ListExperiments

• **ListExperiments** = ``"evidently:ListExperiments"``

Grants permission to list experiments

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html

#### Defined in

actions/evidently.ts:125

___

### ListFeatures

• **ListFeatures** = ``"evidently:ListFeatures"``

Grants permission to list features

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html

#### Defined in

actions/evidently.ts:131

___

### ListLaunches

• **ListLaunches** = ``"evidently:ListLaunches"``

Grants permission to list launches

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html

#### Defined in

actions/evidently.ts:137

___

### ListProjects

• **ListProjects** = ``"evidently:ListProjects"``

Grants permission to list projects

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html

#### Defined in

actions/evidently.ts:143

___

### ListSegmentReferences

• **ListSegmentReferences** = ``"evidently:ListSegmentReferences"``

Grants permission to list resources referencing a segment

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListSegmentReferences.html

#### Defined in

actions/evidently.ts:149

___

### ListSegments

• **ListSegments** = ``"evidently:ListSegments"``

Grants permission to list segments

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListSegments.html

#### Defined in

actions/evidently.ts:155

___

### ListTagsForResource

• **ListTagsForResource** = ``"evidently:ListTagsForResource"``

Grants permission to list tags for resources

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/evidently.ts:161

___

### PutProjectEvents

• **PutProjectEvents** = ``"evidently:PutProjectEvents"``

Grants permission to send performance events

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_PutProjectEvents.html

#### Defined in

actions/evidently.ts:167

___

### StartExperiment

• **StartExperiment** = ``"evidently:StartExperiment"``

Grants permission to start an experiment

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StartExperiment.html

#### Defined in

actions/evidently.ts:173

___

### StartLaunch

• **StartLaunch** = ``"evidently:StartLaunch"``

Grants permission to start a launch

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StartLaunch.html

#### Defined in

actions/evidently.ts:179

___

### StopExperiment

• **StopExperiment** = ``"evidently:StopExperiment"``

Grants permission to stop an experiment

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html

#### Defined in

actions/evidently.ts:185

___

### StopLaunch

• **StopLaunch** = ``"evidently:StopLaunch"``

Grants permission to stop a launch

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html

#### Defined in

actions/evidently.ts:191

___

### TagResource

• **TagResource** = ``"evidently:TagResource"``

Grants permission to tag resources

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html

#### Defined in

actions/evidently.ts:197

___

### TestSegmentPattern

• **TestSegmentPattern** = ``"evidently:TestSegmentPattern"``

Grants permission to test a segment pattern

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TestSegmentPattern.html

#### Defined in

actions/evidently.ts:203

___

### UntagResource

• **UntagResource** = ``"evidently:UntagResource"``

Grants permission to untag resources

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UntagResource.html

#### Defined in

actions/evidently.ts:209

___

### UpdateExperiment

• **UpdateExperiment** = ``"evidently:UpdateExperiment"``

Grants permission to update experiment

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html

#### Defined in

actions/evidently.ts:215

___

### UpdateFeature

• **UpdateFeature** = ``"evidently:UpdateFeature"``

Grants permission to update feature

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html

#### Defined in

actions/evidently.ts:221

___

### UpdateLaunch

• **UpdateLaunch** = ``"evidently:UpdateLaunch"``

Grants permission to update a launch

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html

#### Defined in

actions/evidently.ts:227

___

### UpdateProject

• **UpdateProject** = ``"evidently:UpdateProject"``

Grants permission to update project

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html

#### Defined in

actions/evidently.ts:233

___

### UpdateProjectDataDelivery

• **UpdateProjectDataDelivery** = ``"evidently:UpdateProjectDataDelivery"``

Grants permission to update project data delivery

See https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html

#### Defined in

actions/evidently.ts:239
