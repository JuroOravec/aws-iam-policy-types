[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsPollyActions

# Enumeration: AwsPollyActions

All IAM policy actions for Amazon Polly (POLLY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpolly.html

2024-02-12T09:58:41.430Z

## Table of contents

### Enumeration Members

- [DeleteLexicon](AwsPollyActions.md#deletelexicon)
- [DescribeVoices](AwsPollyActions.md#describevoices)
- [GetLexicon](AwsPollyActions.md#getlexicon)
- [GetSpeechSynthesisTask](AwsPollyActions.md#getspeechsynthesistask)
- [ListLexicons](AwsPollyActions.md#listlexicons)
- [ListSpeechSynthesisTasks](AwsPollyActions.md#listspeechsynthesistasks)
- [PutLexicon](AwsPollyActions.md#putlexicon)
- [StartSpeechSynthesisTask](AwsPollyActions.md#startspeechsynthesistask)
- [SynthesizeSpeech](AwsPollyActions.md#synthesizespeech)

## Enumeration Members

### DeleteLexicon

• **DeleteLexicon** = ``"polly:DeleteLexicon"``

Grants permission to delete the specified pronunciation lexicon stored in an AW
S Region

See https://docs.aws.amazon.com/polly/latest/dg/API_DeleteLexicon.html

#### Defined in

actions/polly.ts:18

___

### DescribeVoices

• **DescribeVoices** = ``"polly:DescribeVoices"``

Grants permission to describe the list of voices that are available for use whe
n requesting speech synthesis

See https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html

#### Defined in

actions/polly.ts:25

___

### GetLexicon

• **GetLexicon** = ``"polly:GetLexicon"``

Grants permission to retrieve the content of the specified pronunciation lexico
n stored in an AWS Region

See https://docs.aws.amazon.com/polly/latest/dg/API_GetLexicon.html

#### Defined in

actions/polly.ts:32

___

### GetSpeechSynthesisTask

• **GetSpeechSynthesisTask** = ``"polly:GetSpeechSynthesisTask"``

Grants permission to get information about specific speech synthesis task

See https://docs.aws.amazon.com/polly/latest/dg/API_GetSpeechSynthesisTask.html

#### Defined in

actions/polly.ts:38

___

### ListLexicons

• **ListLexicons** = ``"polly:ListLexicons"``

Grants permission to list the pronunciation lexicons stored in an AWS Region

See https://docs.aws.amazon.com/polly/latest/dg/API_ListLexicons.html

#### Defined in

actions/polly.ts:44

___

### ListSpeechSynthesisTasks

• **ListSpeechSynthesisTasks** = ``"polly:ListSpeechSynthesisTasks"``

Grants permission to list requested speech synthesis tasks

See https://docs.aws.amazon.com/polly/latest/dg/API_ListSpeechSynthesisTasks.html

#### Defined in

actions/polly.ts:50

___

### PutLexicon

• **PutLexicon** = ``"polly:PutLexicon"``

Grants permission to store a pronunciation lexicon in an AWS Region

See https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html

#### Defined in

actions/polly.ts:56

___

### StartSpeechSynthesisTask

• **StartSpeechSynthesisTask** = ``"polly:StartSpeechSynthesisTask"``

Grants permission to synthesize long inputs to the provided S3 location

See https://docs.aws.amazon.com/polly/latest/dg/API_StartSpeechSynthesisTask.html

#### Defined in

actions/polly.ts:62

___

### SynthesizeSpeech

• **SynthesizeSpeech** = ``"polly:SynthesizeSpeech"``

Grants permission to synthesize speech

See https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html

#### Defined in

actions/polly.ts:68
