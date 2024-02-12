[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsElastictranscoderActions

# Enumeration: AwsElastictranscoderActions

All IAM policy actions for Amazon Elastic Transcoder (ELASTICTRANSCODER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastictranscoder.html

2024-02-12T09:57:13.182Z

## Table of contents

### Enumeration Members

- [CancelJob](AwsElastictranscoderActions.md#canceljob)
- [CreateJob](AwsElastictranscoderActions.md#createjob)
- [CreatePipeline](AwsElastictranscoderActions.md#createpipeline)
- [CreatePreset](AwsElastictranscoderActions.md#createpreset)
- [DeletePipeline](AwsElastictranscoderActions.md#deletepipeline)
- [DeletePreset](AwsElastictranscoderActions.md#deletepreset)
- [ListJobsByPipeline](AwsElastictranscoderActions.md#listjobsbypipeline)
- [ListJobsByStatus](AwsElastictranscoderActions.md#listjobsbystatus)
- [ListPipelines](AwsElastictranscoderActions.md#listpipelines)
- [ListPresets](AwsElastictranscoderActions.md#listpresets)
- [ReadJob](AwsElastictranscoderActions.md#readjob)
- [ReadPipeline](AwsElastictranscoderActions.md#readpipeline)
- [ReadPreset](AwsElastictranscoderActions.md#readpreset)
- [TestRole](AwsElastictranscoderActions.md#testrole)
- [UpdatePipeline](AwsElastictranscoderActions.md#updatepipeline)
- [UpdatePipelineNotifications](AwsElastictranscoderActions.md#updatepipelinenotifications)
- [UpdatePipelineStatus](AwsElastictranscoderActions.md#updatepipelinestatus)

## Enumeration Members

### CancelJob

• **CancelJob** = ``"elastictranscoder:CancelJob"``

Cancel a job that Elastic Transcoder has not begun to process

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/cancel-job.html

#### Defined in

actions/elastictranscoder.ts:17

___

### CreateJob

• **CreateJob** = ``"elastictranscoder:CreateJob"``

Create a job

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-job.html

#### Defined in

actions/elastictranscoder.ts:23

___

### CreatePipeline

• **CreatePipeline** = ``"elastictranscoder:CreatePipeline"``

Create a pipeline

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-pipeline.html

#### Defined in

actions/elastictranscoder.ts:29

___

### CreatePreset

• **CreatePreset** = ``"elastictranscoder:CreatePreset"``

Create a preset

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-preset.html

#### Defined in

actions/elastictranscoder.ts:35

___

### DeletePipeline

• **DeletePipeline** = ``"elastictranscoder:DeletePipeline"``

Delete a pipeline

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-pipeline.html

#### Defined in

actions/elastictranscoder.ts:41

___

### DeletePreset

• **DeletePreset** = ``"elastictranscoder:DeletePreset"``

Delete a preset

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-preset.html

#### Defined in

actions/elastictranscoder.ts:47

___

### ListJobsByPipeline

• **ListJobsByPipeline** = ``"elastictranscoder:ListJobsByPipeline"``

Get a list of the jobs that you assigned to a pipeline

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-pipeline.html

#### Defined in

actions/elastictranscoder.ts:53

___

### ListJobsByStatus

• **ListJobsByStatus** = ``"elastictranscoder:ListJobsByStatus"``

Get information about all of the jobs associated with the current AWS account t
hat have a specified status

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-status.html

#### Defined in

actions/elastictranscoder.ts:60

___

### ListPipelines

• **ListPipelines** = ``"elastictranscoder:ListPipelines"``

Get a list of the pipelines associated with the current AWS account

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-pipelines.html

#### Defined in

actions/elastictranscoder.ts:66

___

### ListPresets

• **ListPresets** = ``"elastictranscoder:ListPresets"``

Get a list of all presets associated with the current AWS account

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-presets.html

#### Defined in

actions/elastictranscoder.ts:72

___

### ReadJob

• **ReadJob** = ``"elastictranscoder:ReadJob"``

Get detailed information about a job

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-job.html

#### Defined in

actions/elastictranscoder.ts:78

___

### ReadPipeline

• **ReadPipeline** = ``"elastictranscoder:ReadPipeline"``

Get detailed information about a pipeline

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-pipeline.html

#### Defined in

actions/elastictranscoder.ts:84

___

### ReadPreset

• **ReadPreset** = ``"elastictranscoder:ReadPreset"``

Get detailed information about a preset

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-preset.html

#### Defined in

actions/elastictranscoder.ts:90

___

### TestRole

• **TestRole** = ``"elastictranscoder:TestRole"``

Test the settings for a pipeline to ensure that Elastic Transcoder can create a
nd process jobs

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/test-pipeline-role.html

#### Defined in

actions/elastictranscoder.ts:97

___

### UpdatePipeline

• **UpdatePipeline** = ``"elastictranscoder:UpdatePipeline"``

Update settings for a pipeline

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline.html

#### Defined in

actions/elastictranscoder.ts:103

___

### UpdatePipelineNotifications

• **UpdatePipelineNotifications** = ``"elastictranscoder:UpdatePipelineNotifications"``

Update only Amazon Simple Notification Service (Amazon SNS) notifications for a
pipeline

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-notifications.html

#### Defined in

actions/elastictranscoder.ts:110

___

### UpdatePipelineStatus

• **UpdatePipelineStatus** = ``"elastictranscoder:UpdatePipelineStatus"``

Pause or reactivate a pipeline, so the pipeline stops or restarts processing jo
bs, update the status for the pipeline

See https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-status.html

#### Defined in

actions/elastictranscoder.ts:117
