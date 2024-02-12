[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsTranscribeActions

# Enumeration: AwsTranscribeActions

All IAM policy actions for Amazon Transcribe (TRANSCRIBE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranscribe.html

2024-02-12T09:59:32.185Z

## Table of contents

### Enumeration Members

- [CreateCallAnalyticsCategory](AwsTranscribeActions.md#createcallanalyticscategory)
- [CreateLanguageModel](AwsTranscribeActions.md#createlanguagemodel)
- [CreateMedicalVocabulary](AwsTranscribeActions.md#createmedicalvocabulary)
- [CreateVocabulary](AwsTranscribeActions.md#createvocabulary)
- [CreateVocabularyFilter](AwsTranscribeActions.md#createvocabularyfilter)
- [DeleteCallAnalyticsCategory](AwsTranscribeActions.md#deletecallanalyticscategory)
- [DeleteCallAnalyticsJob](AwsTranscribeActions.md#deletecallanalyticsjob)
- [DeleteLanguageModel](AwsTranscribeActions.md#deletelanguagemodel)
- [DeleteMedicalScribeJob](AwsTranscribeActions.md#deletemedicalscribejob)
- [DeleteMedicalTranscriptionJob](AwsTranscribeActions.md#deletemedicaltranscriptionjob)
- [DeleteMedicalVocabulary](AwsTranscribeActions.md#deletemedicalvocabulary)
- [DeleteTranscriptionJob](AwsTranscribeActions.md#deletetranscriptionjob)
- [DeleteVocabulary](AwsTranscribeActions.md#deletevocabulary)
- [DeleteVocabularyFilter](AwsTranscribeActions.md#deletevocabularyfilter)
- [DescribeLanguageModel](AwsTranscribeActions.md#describelanguagemodel)
- [GetCallAnalyticsCategory](AwsTranscribeActions.md#getcallanalyticscategory)
- [GetCallAnalyticsJob](AwsTranscribeActions.md#getcallanalyticsjob)
- [GetMedicalScribeJob](AwsTranscribeActions.md#getmedicalscribejob)
- [GetMedicalTranscriptionJob](AwsTranscribeActions.md#getmedicaltranscriptionjob)
- [GetMedicalVocabulary](AwsTranscribeActions.md#getmedicalvocabulary)
- [GetTranscriptionJob](AwsTranscribeActions.md#gettranscriptionjob)
- [GetVocabulary](AwsTranscribeActions.md#getvocabulary)
- [GetVocabularyFilter](AwsTranscribeActions.md#getvocabularyfilter)
- [ListCallAnalyticsCategories](AwsTranscribeActions.md#listcallanalyticscategories)
- [ListCallAnalyticsJobs](AwsTranscribeActions.md#listcallanalyticsjobs)
- [ListLanguageModels](AwsTranscribeActions.md#listlanguagemodels)
- [ListMedicalScribeJobs](AwsTranscribeActions.md#listmedicalscribejobs)
- [ListMedicalTranscriptionJobs](AwsTranscribeActions.md#listmedicaltranscriptionjobs)
- [ListMedicalVocabularies](AwsTranscribeActions.md#listmedicalvocabularies)
- [ListTagsForResource](AwsTranscribeActions.md#listtagsforresource)
- [ListTranscriptionJobs](AwsTranscribeActions.md#listtranscriptionjobs)
- [ListVocabularies](AwsTranscribeActions.md#listvocabularies)
- [ListVocabularyFilters](AwsTranscribeActions.md#listvocabularyfilters)
- [StartCallAnalyticsJob](AwsTranscribeActions.md#startcallanalyticsjob)
- [StartCallAnalyticsStreamTranscription](AwsTranscribeActions.md#startcallanalyticsstreamtranscription)
- [StartCallAnalyticsStreamTranscriptionWebSocket](AwsTranscribeActions.md#startcallanalyticsstreamtranscriptionwebsocket)
- [StartMedicalScribeJob](AwsTranscribeActions.md#startmedicalscribejob)
- [StartMedicalStreamTranscription](AwsTranscribeActions.md#startmedicalstreamtranscription)
- [StartMedicalStreamTranscriptionWebSocket](AwsTranscribeActions.md#startmedicalstreamtranscriptionwebsocket)
- [StartMedicalTranscriptionJob](AwsTranscribeActions.md#startmedicaltranscriptionjob)
- [StartStreamTranscription](AwsTranscribeActions.md#startstreamtranscription)
- [StartStreamTranscriptionWebSocket](AwsTranscribeActions.md#startstreamtranscriptionwebsocket)
- [StartTranscriptionJob](AwsTranscribeActions.md#starttranscriptionjob)
- [TagResource](AwsTranscribeActions.md#tagresource)
- [UntagResource](AwsTranscribeActions.md#untagresource)
- [UpdateCallAnalyticsCategory](AwsTranscribeActions.md#updatecallanalyticscategory)
- [UpdateMedicalVocabulary](AwsTranscribeActions.md#updatemedicalvocabulary)
- [UpdateVocabulary](AwsTranscribeActions.md#updatevocabulary)
- [UpdateVocabularyFilter](AwsTranscribeActions.md#updatevocabularyfilter)

## Enumeration Members

### CreateCallAnalyticsCategory

• **CreateCallAnalyticsCategory** = ``"transcribe:CreateCallAnalyticsCategory"``

Grants permission to create an analytics category. Amazon Transcribe applies th
e conditions specified by your analytics categories to your call analytics jobs

See https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateCallAnalyticsCategory.html

#### Defined in

actions/transcribe.ts:18

___

### CreateLanguageModel

• **CreateLanguageModel** = ``"transcribe:CreateLanguageModel"``

Grants permission to create a new custom language model

See https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateLanguageModel.html

#### Defined in

actions/transcribe.ts:24

___

### CreateMedicalVocabulary

• **CreateMedicalVocabulary** = ``"transcribe:CreateMedicalVocabulary"``

Grants permission to create a new custom vocabulary that you can use to change
the way Amazon Transcribe Medical handles transcription of an audio file

See https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateMedicalVocabulary.html

#### Defined in

actions/transcribe.ts:31

___

### CreateVocabulary

• **CreateVocabulary** = ``"transcribe:CreateVocabulary"``

Grants permission to create a new custom vocabulary that you can use to change
the way Amazon Transcribe handles transcription of an audio file

See https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateVocabulary.html

#### Defined in

actions/transcribe.ts:38

___

### CreateVocabularyFilter

• **CreateVocabularyFilter** = ``"transcribe:CreateVocabularyFilter"``

Grants permission to create a new vocabulary filter that you can use to filter
out words from the transcription of an audio file generated by Amazon Transcrib
e

See https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateVocabularyFilter.html

#### Defined in

actions/transcribe.ts:46

___

### DeleteCallAnalyticsCategory

• **DeleteCallAnalyticsCategory** = ``"transcribe:DeleteCallAnalyticsCategory"``

Grants permission to delete a call analytics category using its name from Amazo
n Transcribe

See https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteCallAnalyticsCategory.html

#### Defined in

actions/transcribe.ts:53

___

### DeleteCallAnalyticsJob

• **DeleteCallAnalyticsJob** = ``"transcribe:DeleteCallAnalyticsJob"``

Grants permission to delete a previously submitted call analytics job along wit
h any other generated results such as the transcription, models, and so on

See https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteCallAnalyticsJob.html

#### Defined in

actions/transcribe.ts:60

___

### DeleteLanguageModel

• **DeleteLanguageModel** = ``"transcribe:DeleteLanguageModel"``

Grants permission to delete a previously created custom language model

See https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteLanguageModel.html

#### Defined in

actions/transcribe.ts:66

___

### DeleteMedicalScribeJob

• **DeleteMedicalScribeJob** = ``"transcribe:DeleteMedicalScribeJob"``

Grants permission to delete a previously submitted Medical Scribe job

See https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteMedicalScribeJob.html

#### Defined in

actions/transcribe.ts:72

___

### DeleteMedicalTranscriptionJob

• **DeleteMedicalTranscriptionJob** = ``"transcribe:DeleteMedicalTranscriptionJob"``

Grants permission to delete a previously submitted medical transcription job

See https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteMedicalTranscriptionJob.html

#### Defined in

actions/transcribe.ts:78

___

### DeleteMedicalVocabulary

• **DeleteMedicalVocabulary** = ``"transcribe:DeleteMedicalVocabulary"``

Grants permission to delete a medical vocabulary from Amazon Transcribe

See https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteMedicalVocabulary.html

#### Defined in

actions/transcribe.ts:84

___

### DeleteTranscriptionJob

• **DeleteTranscriptionJob** = ``"transcribe:DeleteTranscriptionJob"``

Grants permission to delete a previously submitted transcription job along with
any other generated results such as the transcription, models, and so on

See https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteTranscriptionJob.html

#### Defined in

actions/transcribe.ts:91

___

### DeleteVocabulary

• **DeleteVocabulary** = ``"transcribe:DeleteVocabulary"``

Grants permission to delete a vocabulary from Amazon Transcribe

See https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteVocabulary.html

#### Defined in

actions/transcribe.ts:97

___

### DeleteVocabularyFilter

• **DeleteVocabularyFilter** = ``"transcribe:DeleteVocabularyFilter"``

Grants permission to delete a vocabulary filter from Amazon Transcribe

See https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteVocabularyFilter.html

#### Defined in

actions/transcribe.ts:103

___

### DescribeLanguageModel

• **DescribeLanguageModel** = ``"transcribe:DescribeLanguageModel"``

Grants permission to return information about a custom language model

See https://docs.aws.amazon.com/transcribe/latest/dg/API_DescribeLanguageModel.html

#### Defined in

actions/transcribe.ts:109

___

### GetCallAnalyticsCategory

• **GetCallAnalyticsCategory** = ``"transcribe:GetCallAnalyticsCategory"``

Grants permission to retrieve information about a call analytics category

See https://docs.aws.amazon.com/transcribe/latest/dg/API_GetCallAnalyticsCategory.html

#### Defined in

actions/transcribe.ts:115

___

### GetCallAnalyticsJob

• **GetCallAnalyticsJob** = ``"transcribe:GetCallAnalyticsJob"``

Grants permission to return information about a call analytics job

See https://docs.aws.amazon.com/transcribe/latest/dg/API_GetCallAnalyticsJob.html

#### Defined in

actions/transcribe.ts:121

___

### GetMedicalScribeJob

• **GetMedicalScribeJob** = ``"transcribe:GetMedicalScribeJob"``

Grants permission to return information about a Medical Scribe job

See https://docs.aws.amazon.com/transcribe/latest/dg/API_GetMedicalScribeJob.html

#### Defined in

actions/transcribe.ts:127

___

### GetMedicalTranscriptionJob

• **GetMedicalTranscriptionJob** = ``"transcribe:GetMedicalTranscriptionJob"``

Grants permission to return information about a medical transcription job

See https://docs.aws.amazon.com/transcribe/latest/dg/API_GetMedicalTranscriptionJob.html

#### Defined in

actions/transcribe.ts:133

___

### GetMedicalVocabulary

• **GetMedicalVocabulary** = ``"transcribe:GetMedicalVocabulary"``

Grants permission to get information about a medical vocabulary

See https://docs.aws.amazon.com/transcribe/latest/dg/API_GetMedicalVocabulary.html

#### Defined in

actions/transcribe.ts:139

___

### GetTranscriptionJob

• **GetTranscriptionJob** = ``"transcribe:GetTranscriptionJob"``

Grants permission to return information about a transcription job

See https://docs.aws.amazon.com/transcribe/latest/dg/API_GetTranscriptionJob.html

#### Defined in

actions/transcribe.ts:145

___

### GetVocabulary

• **GetVocabulary** = ``"transcribe:GetVocabulary"``

Grants permission to to get information about a vocabulary

See https://docs.aws.amazon.com/transcribe/latest/dg/API_GetVocabulary.html

#### Defined in

actions/transcribe.ts:151

___

### GetVocabularyFilter

• **GetVocabularyFilter** = ``"transcribe:GetVocabularyFilter"``

Grants permission to get information about a vocabulary filter

See https://docs.aws.amazon.com/transcribe/latest/dg/API_GetVocabularyFilter.html

#### Defined in

actions/transcribe.ts:157

___

### ListCallAnalyticsCategories

• **ListCallAnalyticsCategories** = ``"transcribe:ListCallAnalyticsCategories"``

Grants permission to list call analytics categories that has been created

See https://docs.aws.amazon.com/transcribe/latest/dg/API_ListCallAnalyticsCategories.html

#### Defined in

actions/transcribe.ts:163

___

### ListCallAnalyticsJobs

• **ListCallAnalyticsJobs** = ``"transcribe:ListCallAnalyticsJobs"``

Grants permission to list call analytics jobs with the specified status

See https://docs.aws.amazon.com/transcribe/latest/dg/API_ListCallAnalyticsJobs.html

#### Defined in

actions/transcribe.ts:169

___

### ListLanguageModels

• **ListLanguageModels** = ``"transcribe:ListLanguageModels"``

Grants permission to list custom language models

See https://docs.aws.amazon.com/transcribe/latest/dg/API_ListLanguageModels.html

#### Defined in

actions/transcribe.ts:175

___

### ListMedicalScribeJobs

• **ListMedicalScribeJobs** = ``"transcribe:ListMedicalScribeJobs"``

Grants permission to list Medical Scribe jobs with the specified status

See https://docs.aws.amazon.com/transcribe/latest/dg/API_ListMedicalScribeJobs.html

#### Defined in

actions/transcribe.ts:181

___

### ListMedicalTranscriptionJobs

• **ListMedicalTranscriptionJobs** = ``"transcribe:ListMedicalTranscriptionJobs"``

Grants permission to list medical transcription jobs with the specified status

See https://docs.aws.amazon.com/transcribe/latest/dg/API_ListMedicalTranscriptionJobs.html

#### Defined in

actions/transcribe.ts:187

___

### ListMedicalVocabularies

• **ListMedicalVocabularies** = ``"transcribe:ListMedicalVocabularies"``

Grants permission to return a list of medical vocabularies that match the speci
fied criteria. If no criteria are specified, returns the entire list of vocabul
aries

See https://docs.aws.amazon.com/transcribe/latest/dg/API_ListMedicalVocabularies.html

#### Defined in

actions/transcribe.ts:195

___

### ListTagsForResource

• **ListTagsForResource** = ``"transcribe:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/transcribe/latest/dg/API_ListTagsForResource.html

#### Defined in

actions/transcribe.ts:201

___

### ListTranscriptionJobs

• **ListTranscriptionJobs** = ``"transcribe:ListTranscriptionJobs"``

Grants permission to list transcription jobs with the specified status

See https://docs.aws.amazon.com/transcribe/latest/dg/API_ListTranscriptionJobs.html

#### Defined in

actions/transcribe.ts:207

___

### ListVocabularies

• **ListVocabularies** = ``"transcribe:ListVocabularies"``

Grants permission to return a list of vocabularies that match the specified cri
teria. If no criteria are specified, returns the entire list of vocabularies

See https://docs.aws.amazon.com/transcribe/latest/dg/API_ListVocabularies.html

#### Defined in

actions/transcribe.ts:214

___

### ListVocabularyFilters

• **ListVocabularyFilters** = ``"transcribe:ListVocabularyFilters"``

Grants permission to return a list of vocabulary filters that match the specifi
ed criteria. If no criteria are specified, returns the at most 5 vocabulary fil
ters

See https://docs.aws.amazon.com/transcribe/latest/dg/API_ListVocabularyFilters.html

#### Defined in

actions/transcribe.ts:222

___

### StartCallAnalyticsJob

• **StartCallAnalyticsJob** = ``"transcribe:StartCallAnalyticsJob"``

Grants permission to start an asynchronous analytics job that not only transcri
bes the audio recording of a caller and agent, but also returns additional insi
ghts

See https://docs.aws.amazon.com/transcribe/latest/dg/API_StartCallAnalyticsJob.html

#### Defined in

actions/transcribe.ts:230

___

### StartCallAnalyticsStreamTranscription

• **StartCallAnalyticsStreamTranscription** = ``"transcribe:StartCallAnalyticsStreamTranscription"``

Grants permission to start a protocol where audio is streamed to Transcribe Cal
l Analytics and the transcription results are streamed to your application

See https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartCallAnalyticsStreamTranscription.html

#### Defined in

actions/transcribe.ts:237

___

### StartCallAnalyticsStreamTranscriptionWebSocket

• **StartCallAnalyticsStreamTranscriptionWebSocket** = ``"transcribe:StartCallAnalyticsStreamTranscriptionWebSocket"``

Grants permission to start a WebSocket where audio is streamed to Transcribe Ca
ll Analytics and the transcription results are streamed to your application

See https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartCallAnalyticsStreamTranscriptionWebSocket.html

#### Defined in

actions/transcribe.ts:244

___

### StartMedicalScribeJob

• **StartMedicalScribeJob** = ``"transcribe:StartMedicalScribeJob"``

Grants permission to start an asynchronous job to transcribe patient-clinician
conversations and generates clinical notes

See https://docs.aws.amazon.com/transcribe/latest/dg/API_StartMedicalScribeJob.html

#### Defined in

actions/transcribe.ts:251

___

### StartMedicalStreamTranscription

• **StartMedicalStreamTranscription** = ``"transcribe:StartMedicalStreamTranscription"``

Grants permission to start a protocol where audio is streamed to Transcribe Med
ical and the transcription results are streamed to your application

See https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartMedicalStreamTranscription.html

#### Defined in

actions/transcribe.ts:258

___

### StartMedicalStreamTranscriptionWebSocket

• **StartMedicalStreamTranscriptionWebSocket** = ``"transcribe:StartMedicalStreamTranscriptionWebSocket"``

Grants permission to start a WebSocket where audio is streamed to Transcribe Me
dical and the transcription results are streamed to your application

See https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartMedicalStreamTranscriptionWebSocket.html

#### Defined in

actions/transcribe.ts:265

___

### StartMedicalTranscriptionJob

• **StartMedicalTranscriptionJob** = ``"transcribe:StartMedicalTranscriptionJob"``

Grants permission to start an asynchronous job to transcribe medical speech to
text

See https://docs.aws.amazon.com/transcribe/latest/dg/API_StartMedicalTranscriptionJob.html

#### Defined in

actions/transcribe.ts:272

___

### StartStreamTranscription

• **StartStreamTranscription** = ``"transcribe:StartStreamTranscription"``

Grants permission to start a bidirectional HTTP2 stream to transcribe speech to
text in real time

See https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartStreamTranscription.html

#### Defined in

actions/transcribe.ts:279

___

### StartStreamTranscriptionWebSocket

• **StartStreamTranscriptionWebSocket** = ``"transcribe:StartStreamTranscriptionWebSocket"``

Grants permission to start a websocket stream to transcribe speech to text in r
eal time

See https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartStreamTranscriptionWebSocket.html

#### Defined in

actions/transcribe.ts:286

___

### StartTranscriptionJob

• **StartTranscriptionJob** = ``"transcribe:StartTranscriptionJob"``

Grants permission to start an asynchronous job to transcribe speech to text

See https://docs.aws.amazon.com/transcribe/latest/dg/API_StartTranscriptionJob.html

#### Defined in

actions/transcribe.ts:292

___

### TagResource

• **TagResource** = ``"transcribe:TagResource"``

Grants permission to tag a resource with given key value pairs

See https://docs.aws.amazon.com/transcribe/latest/dg/API_TagResource.html

#### Defined in

actions/transcribe.ts:298

___

### UntagResource

• **UntagResource** = ``"transcribe:UntagResource"``

Grants permission to untag a resource with given key

See https://docs.aws.amazon.com/transcribe/latest/dg/API_UntagResource.html

#### Defined in

actions/transcribe.ts:304

___

### UpdateCallAnalyticsCategory

• **UpdateCallAnalyticsCategory** = ``"transcribe:UpdateCallAnalyticsCategory"``

Grants permission to update the call analytics category with new values. The Up
dateCallAnalyticsCategory operation overwrites all of the existing information
with the values that you provide in the request

See https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateCallAnalyticsCategory.html

#### Defined in

actions/transcribe.ts:312

___

### UpdateMedicalVocabulary

• **UpdateMedicalVocabulary** = ``"transcribe:UpdateMedicalVocabulary"``

Grants permission to update an existing medical vocabulary with new values. The
UpdateMedicalVocabulary operation overwrites all of the existing information wi
th the values that you provide in the request

See https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateMedicalVocabulary.html

#### Defined in

actions/transcribe.ts:320

___

### UpdateVocabulary

• **UpdateVocabulary** = ``"transcribe:UpdateVocabulary"``

Grants permission to update an existing vocabulary with new values. The UpdateV
ocabulary operation overwrites all of the existing information with the values
that you provide in the request

See https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateVocabulary.html

#### Defined in

actions/transcribe.ts:328

___

### UpdateVocabularyFilter

• **UpdateVocabularyFilter** = ``"transcribe:UpdateVocabularyFilter"``

Grants permission to update an existing vocabulary filter with new values. The
UpdateVocabularyFilter operation overwrites all of the existing information wit
h the values that you provide in the request

See https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateVocabularyFilter.html

#### Defined in

actions/transcribe.ts:336
