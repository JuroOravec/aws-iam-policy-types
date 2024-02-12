[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMediaconvertActions

# Enumeration: AwsMediaconvertActions

All IAM policy actions for AWS Elemental MediaConvert (MEDIACONVERT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconvert.html

2024-02-12T09:57:16.255Z

## Table of contents

### Enumeration Members

- [AssociateCertificate](AwsMediaconvertActions.md#associatecertificate)
- [CancelJob](AwsMediaconvertActions.md#canceljob)
- [CreateJob](AwsMediaconvertActions.md#createjob)
- [CreateJobTemplate](AwsMediaconvertActions.md#createjobtemplate)
- [CreatePreset](AwsMediaconvertActions.md#createpreset)
- [CreateQueue](AwsMediaconvertActions.md#createqueue)
- [DeleteJobTemplate](AwsMediaconvertActions.md#deletejobtemplate)
- [DeletePolicy](AwsMediaconvertActions.md#deletepolicy)
- [DeletePreset](AwsMediaconvertActions.md#deletepreset)
- [DeleteQueue](AwsMediaconvertActions.md#deletequeue)
- [DescribeEndpoints](AwsMediaconvertActions.md#describeendpoints)
- [DisassociateCertificate](AwsMediaconvertActions.md#disassociatecertificate)
- [GetJob](AwsMediaconvertActions.md#getjob)
- [GetJobTemplate](AwsMediaconvertActions.md#getjobtemplate)
- [GetPolicy](AwsMediaconvertActions.md#getpolicy)
- [GetPreset](AwsMediaconvertActions.md#getpreset)
- [GetQueue](AwsMediaconvertActions.md#getqueue)
- [ListJobTemplates](AwsMediaconvertActions.md#listjobtemplates)
- [ListJobs](AwsMediaconvertActions.md#listjobs)
- [ListPresets](AwsMediaconvertActions.md#listpresets)
- [ListQueues](AwsMediaconvertActions.md#listqueues)
- [ListTagsForResource](AwsMediaconvertActions.md#listtagsforresource)
- [PutPolicy](AwsMediaconvertActions.md#putpolicy)
- [TagResource](AwsMediaconvertActions.md#tagresource)
- [UntagResource](AwsMediaconvertActions.md#untagresource)
- [UpdateJobTemplate](AwsMediaconvertActions.md#updatejobtemplate)
- [UpdatePreset](AwsMediaconvertActions.md#updatepreset)
- [UpdateQueue](AwsMediaconvertActions.md#updatequeue)

## Enumeration Members

### AssociateCertificate

• **AssociateCertificate** = ``"mediaconvert:AssociateCertificate"``

Grants permission to associate an AWS Certificate Manager (ACM) Amazon Resource
Name (ARN) with AWS Elemental MediaConvert

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates.html

#### Defined in

actions/mediaconvert.ts:18

___

### CancelJob

• **CancelJob** = ``"mediaconvert:CancelJob"``

Grants permission to cancel an AWS Elemental MediaConvert job that is waiting i
n queue

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html

#### Defined in

actions/mediaconvert.ts:25

___

### CreateJob

• **CreateJob** = ``"mediaconvert:CreateJob"``

Grants permission to create and submit an AWS Elemental MediaConvert job

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html

#### Defined in

actions/mediaconvert.ts:31

___

### CreateJobTemplate

• **CreateJobTemplate** = ``"mediaconvert:CreateJobTemplate"``

Grants permission to create an AWS Elemental MediaConvert custom job template

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html

#### Defined in

actions/mediaconvert.ts:37

___

### CreatePreset

• **CreatePreset** = ``"mediaconvert:CreatePreset"``

Grants permission to create an AWS Elemental MediaConvert custom output preset

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html

#### Defined in

actions/mediaconvert.ts:43

___

### CreateQueue

• **CreateQueue** = ``"mediaconvert:CreateQueue"``

Grants permission to create an AWS Elemental MediaConvert job queue

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html

#### Defined in

actions/mediaconvert.ts:49

___

### DeleteJobTemplate

• **DeleteJobTemplate** = ``"mediaconvert:DeleteJobTemplate"``

Grants permission to delete an AWS Elemental MediaConvert custom job template

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html

#### Defined in

actions/mediaconvert.ts:55

___

### DeletePolicy

• **DeletePolicy** = ``"mediaconvert:DeletePolicy"``

Grants permission to delete an AWS Elemental MediaConvert policy

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/policy.html

#### Defined in

actions/mediaconvert.ts:61

___

### DeletePreset

• **DeletePreset** = ``"mediaconvert:DeletePreset"``

Grants permission to delete an AWS Elemental MediaConvert custom output preset

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html

#### Defined in

actions/mediaconvert.ts:67

___

### DeleteQueue

• **DeleteQueue** = ``"mediaconvert:DeleteQueue"``

Grants permission to delete an AWS Elemental MediaConvert job queue

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html

#### Defined in

actions/mediaconvert.ts:73

___

### DescribeEndpoints

• **DescribeEndpoints** = ``"mediaconvert:DescribeEndpoints"``

Grants permission to subscribe to the AWS Elemental MediaConvert service, by se
nding a request for an account-specific endpoint. All transcoding requests must
be sent to the endpoint that the service returns

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/endpoints.html

#### Defined in

actions/mediaconvert.ts:81

___

### DisassociateCertificate

• **DisassociateCertificate** = ``"mediaconvert:DisassociateCertificate"``

Grants permission to remove an association between the Amazon Resource Name (AR
N) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaCo
nvert resource

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates-arn.html

#### Defined in

actions/mediaconvert.ts:89

___

### GetJob

• **GetJob** = ``"mediaconvert:GetJob"``

Grants permission to get an AWS Elemental MediaConvert job

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html

#### Defined in

actions/mediaconvert.ts:95

___

### GetJobTemplate

• **GetJobTemplate** = ``"mediaconvert:GetJobTemplate"``

Grants permission to get an AWS Elemental MediaConvert job template

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html

#### Defined in

actions/mediaconvert.ts:101

___

### GetPolicy

• **GetPolicy** = ``"mediaconvert:GetPolicy"``

Grants permission to get an AWS Elemental MediaConvert policy

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/policy.html

#### Defined in

actions/mediaconvert.ts:107

___

### GetPreset

• **GetPreset** = ``"mediaconvert:GetPreset"``

Grants permission to get an AWS Elemental MediaConvert output preset

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html

#### Defined in

actions/mediaconvert.ts:113

___

### GetQueue

• **GetQueue** = ``"mediaconvert:GetQueue"``

Grants permission to get an AWS Elemental MediaConvert job queue

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html

#### Defined in

actions/mediaconvert.ts:119

___

### ListJobTemplates

• **ListJobTemplates** = ``"mediaconvert:ListJobTemplates"``

Grants permission to list AWS Elemental MediaConvert job templates

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html

#### Defined in

actions/mediaconvert.ts:125

___

### ListJobs

• **ListJobs** = ``"mediaconvert:ListJobs"``

Grants permission to list AWS Elemental MediaConvert jobs

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html

#### Defined in

actions/mediaconvert.ts:131

___

### ListPresets

• **ListPresets** = ``"mediaconvert:ListPresets"``

Grants permission to list AWS Elemental MediaConvert output presets

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html

#### Defined in

actions/mediaconvert.ts:137

___

### ListQueues

• **ListQueues** = ``"mediaconvert:ListQueues"``

Grants permission to list AWS Elemental MediaConvert job queues

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html

#### Defined in

actions/mediaconvert.ts:143

___

### ListTagsForResource

• **ListTagsForResource** = ``"mediaconvert:ListTagsForResource"``

Grants permission to retrieve the tags for a MediaConvert queue, preset, or job
template

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html

#### Defined in

actions/mediaconvert.ts:150

___

### PutPolicy

• **PutPolicy** = ``"mediaconvert:PutPolicy"``

Grants permission to put an AWS Elemental MediaConvert policy

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/policy.html

#### Defined in

actions/mediaconvert.ts:156

___

### TagResource

• **TagResource** = ``"mediaconvert:TagResource"``

Grants permission to add tags to a MediaConvert queue, preset, or job template

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html

#### Defined in

actions/mediaconvert.ts:162

___

### UntagResource

• **UntagResource** = ``"mediaconvert:UntagResource"``

Grants permission to remove tags from a MediaConvert queue, preset, or job temp
late

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html

#### Defined in

actions/mediaconvert.ts:169

___

### UpdateJobTemplate

• **UpdateJobTemplate** = ``"mediaconvert:UpdateJobTemplate"``

Grants permission to update an AWS Elemental MediaConvert custom job template

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html

#### Defined in

actions/mediaconvert.ts:175

___

### UpdatePreset

• **UpdatePreset** = ``"mediaconvert:UpdatePreset"``

Grants permission to update an AWS Elemental MediaConvert custom output preset

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html

#### Defined in

actions/mediaconvert.ts:181

___

### UpdateQueue

• **UpdateQueue** = ``"mediaconvert:UpdateQueue"``

Grants permission to update an AWS Elemental MediaConvert job queue

See https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html

#### Defined in

actions/mediaconvert.ts:187
