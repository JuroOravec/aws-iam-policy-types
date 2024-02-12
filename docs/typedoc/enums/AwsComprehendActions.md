[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsComprehendActions

# Enumeration: AwsComprehendActions

All IAM policy actions for Amazon Comprehend (COMPREHEND)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html

2024-02-12T09:56:42.462Z

## Table of contents

### Enumeration Members

- [BatchDetectDominantLanguage](AwsComprehendActions.md#batchdetectdominantlanguage)
- [BatchDetectEntities](AwsComprehendActions.md#batchdetectentities)
- [BatchDetectKeyPhrases](AwsComprehendActions.md#batchdetectkeyphrases)
- [BatchDetectSentiment](AwsComprehendActions.md#batchdetectsentiment)
- [BatchDetectSyntax](AwsComprehendActions.md#batchdetectsyntax)
- [BatchDetectTargetedSentiment](AwsComprehendActions.md#batchdetecttargetedsentiment)
- [ClassifyDocument](AwsComprehendActions.md#classifydocument)
- [ContainsPiiEntities](AwsComprehendActions.md#containspiientities)
- [CreateDataset](AwsComprehendActions.md#createdataset)
- [CreateDocumentClassifier](AwsComprehendActions.md#createdocumentclassifier)
- [CreateEndpoint](AwsComprehendActions.md#createendpoint)
- [CreateEntityRecognizer](AwsComprehendActions.md#createentityrecognizer)
- [CreateFlywheel](AwsComprehendActions.md#createflywheel)
- [DeleteDocumentClassifier](AwsComprehendActions.md#deletedocumentclassifier)
- [DeleteEndpoint](AwsComprehendActions.md#deleteendpoint)
- [DeleteEntityRecognizer](AwsComprehendActions.md#deleteentityrecognizer)
- [DeleteFlywheel](AwsComprehendActions.md#deleteflywheel)
- [DeleteResourcePolicy](AwsComprehendActions.md#deleteresourcepolicy)
- [DescribeDataset](AwsComprehendActions.md#describedataset)
- [DescribeDocumentClassificationJob](AwsComprehendActions.md#describedocumentclassificationjob)
- [DescribeDocumentClassifier](AwsComprehendActions.md#describedocumentclassifier)
- [DescribeDominantLanguageDetectionJob](AwsComprehendActions.md#describedominantlanguagedetectionjob)
- [DescribeEndpoint](AwsComprehendActions.md#describeendpoint)
- [DescribeEntitiesDetectionJob](AwsComprehendActions.md#describeentitiesdetectionjob)
- [DescribeEntityRecognizer](AwsComprehendActions.md#describeentityrecognizer)
- [DescribeEventsDetectionJob](AwsComprehendActions.md#describeeventsdetectionjob)
- [DescribeFlywheel](AwsComprehendActions.md#describeflywheel)
- [DescribeFlywheelIteration](AwsComprehendActions.md#describeflywheeliteration)
- [DescribeKeyPhrasesDetectionJob](AwsComprehendActions.md#describekeyphrasesdetectionjob)
- [DescribePiiEntitiesDetectionJob](AwsComprehendActions.md#describepiientitiesdetectionjob)
- [DescribeResourcePolicy](AwsComprehendActions.md#describeresourcepolicy)
- [DescribeSentimentDetectionJob](AwsComprehendActions.md#describesentimentdetectionjob)
- [DescribeTargetedSentimentDetectionJob](AwsComprehendActions.md#describetargetedsentimentdetectionjob)
- [DescribeTopicsDetectionJob](AwsComprehendActions.md#describetopicsdetectionjob)
- [DetectDominantLanguage](AwsComprehendActions.md#detectdominantlanguage)
- [DetectEntities](AwsComprehendActions.md#detectentities)
- [DetectKeyPhrases](AwsComprehendActions.md#detectkeyphrases)
- [DetectPiiEntities](AwsComprehendActions.md#detectpiientities)
- [DetectSentiment](AwsComprehendActions.md#detectsentiment)
- [DetectSyntax](AwsComprehendActions.md#detectsyntax)
- [DetectTargetedSentiment](AwsComprehendActions.md#detecttargetedsentiment)
- [DetectToxicContent](AwsComprehendActions.md#detecttoxiccontent)
- [ImportModel](AwsComprehendActions.md#importmodel)
- [ListDatasets](AwsComprehendActions.md#listdatasets)
- [ListDocumentClassificationJobs](AwsComprehendActions.md#listdocumentclassificationjobs)
- [ListDocumentClassifierSummaries](AwsComprehendActions.md#listdocumentclassifiersummaries)
- [ListDocumentClassifiers](AwsComprehendActions.md#listdocumentclassifiers)
- [ListDominantLanguageDetectionJobs](AwsComprehendActions.md#listdominantlanguagedetectionjobs)
- [ListEndpoints](AwsComprehendActions.md#listendpoints)
- [ListEntitiesDetectionJobs](AwsComprehendActions.md#listentitiesdetectionjobs)
- [ListEntityRecognizerSummaries](AwsComprehendActions.md#listentityrecognizersummaries)
- [ListEntityRecognizers](AwsComprehendActions.md#listentityrecognizers)
- [ListEventsDetectionJobs](AwsComprehendActions.md#listeventsdetectionjobs)
- [ListFlywheelIterationHistory](AwsComprehendActions.md#listflywheeliterationhistory)
- [ListFlywheels](AwsComprehendActions.md#listflywheels)
- [ListKeyPhrasesDetectionJobs](AwsComprehendActions.md#listkeyphrasesdetectionjobs)
- [ListPiiEntitiesDetectionJobs](AwsComprehendActions.md#listpiientitiesdetectionjobs)
- [ListSentimentDetectionJobs](AwsComprehendActions.md#listsentimentdetectionjobs)
- [ListTagsForResource](AwsComprehendActions.md#listtagsforresource)
- [ListTargetedSentimentDetectionJobs](AwsComprehendActions.md#listtargetedsentimentdetectionjobs)
- [ListTopicsDetectionJobs](AwsComprehendActions.md#listtopicsdetectionjobs)
- [PutResourcePolicy](AwsComprehendActions.md#putresourcepolicy)
- [StartDocumentClassificationJob](AwsComprehendActions.md#startdocumentclassificationjob)
- [StartDominantLanguageDetectionJob](AwsComprehendActions.md#startdominantlanguagedetectionjob)
- [StartEntitiesDetectionJob](AwsComprehendActions.md#startentitiesdetectionjob)
- [StartEventsDetectionJob](AwsComprehendActions.md#starteventsdetectionjob)
- [StartFlywheelIteration](AwsComprehendActions.md#startflywheeliteration)
- [StartKeyPhrasesDetectionJob](AwsComprehendActions.md#startkeyphrasesdetectionjob)
- [StartPiiEntitiesDetectionJob](AwsComprehendActions.md#startpiientitiesdetectionjob)
- [StartSentimentDetectionJob](AwsComprehendActions.md#startsentimentdetectionjob)
- [StartTargetedSentimentDetectionJob](AwsComprehendActions.md#starttargetedsentimentdetectionjob)
- [StartTopicsDetectionJob](AwsComprehendActions.md#starttopicsdetectionjob)
- [StopDominantLanguageDetectionJob](AwsComprehendActions.md#stopdominantlanguagedetectionjob)
- [StopEntitiesDetectionJob](AwsComprehendActions.md#stopentitiesdetectionjob)
- [StopEventsDetectionJob](AwsComprehendActions.md#stopeventsdetectionjob)
- [StopKeyPhrasesDetectionJob](AwsComprehendActions.md#stopkeyphrasesdetectionjob)
- [StopPiiEntitiesDetectionJob](AwsComprehendActions.md#stoppiientitiesdetectionjob)
- [StopSentimentDetectionJob](AwsComprehendActions.md#stopsentimentdetectionjob)
- [StopTargetedSentimentDetectionJob](AwsComprehendActions.md#stoptargetedsentimentdetectionjob)
- [StopTrainingDocumentClassifier](AwsComprehendActions.md#stoptrainingdocumentclassifier)
- [StopTrainingEntityRecognizer](AwsComprehendActions.md#stoptrainingentityrecognizer)
- [TagResource](AwsComprehendActions.md#tagresource)
- [UntagResource](AwsComprehendActions.md#untagresource)
- [UpdateEndpoint](AwsComprehendActions.md#updateendpoint)
- [UpdateFlywheel](AwsComprehendActions.md#updateflywheel)

## Enumeration Members

### BatchDetectDominantLanguage

• **BatchDetectDominantLanguage** = ``"comprehend:BatchDetectDominantLanguage"``

Grants permission to detect the language or languages present in the list of te
xt documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectDominantLanguage.html

#### Defined in

actions/comprehend.ts:18

___

### BatchDetectEntities

• **BatchDetectEntities** = ``"comprehend:BatchDetectEntities"``

Grants permission to detect the named entities ("People", "Places", "Locations"
, etc) within the given list of text documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectEntities.html

#### Defined in

actions/comprehend.ts:25

___

### BatchDetectKeyPhrases

• **BatchDetectKeyPhrases** = ``"comprehend:BatchDetectKeyPhrases"``

Grants permission to detect the phrases in the list of text documents that are
most indicative of the content

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectKeyPhrases.html

#### Defined in

actions/comprehend.ts:32

___

### BatchDetectSentiment

• **BatchDetectSentiment** = ``"comprehend:BatchDetectSentiment"``

Grants permission to detect the sentiment of a text in the list of documents (P
ositive, Negative, Neutral, or Mixed)

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectSentiment.html

#### Defined in

actions/comprehend.ts:39

___

### BatchDetectSyntax

• **BatchDetectSyntax** = ``"comprehend:BatchDetectSyntax"``

Grants permission to detect syntactic information (like Part of Speech, Tokens)
in a list of text documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectSyntax.html

#### Defined in

actions/comprehend.ts:46

___

### BatchDetectTargetedSentiment

• **BatchDetectTargetedSentiment** = ``"comprehend:BatchDetectTargetedSentiment"``

Grants permission to detect the sentiments associated with specific entities (s
uch as brands or products) within the given list of text documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_BatchDetectTargetedSentiment.html

#### Defined in

actions/comprehend.ts:53

___

### ClassifyDocument

• **ClassifyDocument** = ``"comprehend:ClassifyDocument"``

Grants permission to create a new document classification request to analyze a
single document in real-time, using a previously created and trained custom mod
el and an endpoint

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ClassifyDocument.html

#### Defined in

actions/comprehend.ts:61

___

### ContainsPiiEntities

• **ContainsPiiEntities** = ``"comprehend:ContainsPiiEntities"``

Grants permission to classify the personally identifiable information within gi
ven documents in real-time

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ContainsPiiEntities.html

#### Defined in

actions/comprehend.ts:68

___

### CreateDataset

• **CreateDataset** = ``"comprehend:CreateDataset"``

Grants permission to create a new dataset within a flywheel

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateDataset.html

#### Defined in

actions/comprehend.ts:74

___

### CreateDocumentClassifier

• **CreateDocumentClassifier** = ``"comprehend:CreateDocumentClassifier"``

Grants permission to create a new document classifier that you can use to categ
orize documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateDocumentClassifier.html

#### Defined in

actions/comprehend.ts:81

___

### CreateEndpoint

• **CreateEndpoint** = ``"comprehend:CreateEndpoint"``

Grants permission to create a model-specific endpoint for synchronous inference
for a previously trained custom model

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateEndpoint.html

#### Defined in

actions/comprehend.ts:88

___

### CreateEntityRecognizer

• **CreateEntityRecognizer** = ``"comprehend:CreateEntityRecognizer"``

Grants permission to create an entity recognizer using submitted files

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateEntityRecognizer.html

#### Defined in

actions/comprehend.ts:94

___

### CreateFlywheel

• **CreateFlywheel** = ``"comprehend:CreateFlywheel"``

Grants permission to create a new flywheel that you can use to train model vers
ions

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_CreateFlywheel.html

#### Defined in

actions/comprehend.ts:101

___

### DeleteDocumentClassifier

• **DeleteDocumentClassifier** = ``"comprehend:DeleteDocumentClassifier"``

Grants permission to delete a previously created document classifier

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DeleteDocumentClassifier.html

#### Defined in

actions/comprehend.ts:107

___

### DeleteEndpoint

• **DeleteEndpoint** = ``"comprehend:DeleteEndpoint"``

Grants permission to delete a model-specific endpoint for a previously-trained
custom model. All endpoints must be deleted in order for the model to be delete
d

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DeleteEndpoint.html

#### Defined in

actions/comprehend.ts:115

___

### DeleteEntityRecognizer

• **DeleteEntityRecognizer** = ``"comprehend:DeleteEntityRecognizer"``

Grants permission to delete a submitted entity recognizer

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DeleteEntityRecognizer.html

#### Defined in

actions/comprehend.ts:121

___

### DeleteFlywheel

• **DeleteFlywheel** = ``"comprehend:DeleteFlywheel"``

Grants permission to Delete a flywheel

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DeleteFlywheel.html

#### Defined in

actions/comprehend.ts:127

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"comprehend:DeleteResourcePolicy"``

Grants permission to remove policy on resource

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/comprehend.ts:133

___

### DescribeDataset

• **DescribeDataset** = ``"comprehend:DescribeDataset"``

Grants permission to get the properties associated with a dataset

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeDataset.html

#### Defined in

actions/comprehend.ts:139

___

### DescribeDocumentClassificationJob

• **DescribeDocumentClassificationJob** = ``"comprehend:DescribeDocumentClassificationJob"``

Grants permission to get the properties associated with a document classificati
on job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeDocumentClassificationJob.html

#### Defined in

actions/comprehend.ts:146

___

### DescribeDocumentClassifier

• **DescribeDocumentClassifier** = ``"comprehend:DescribeDocumentClassifier"``

Grants permission to get the properties associated with a document classifier

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeDocumentClassifier.html

#### Defined in

actions/comprehend.ts:152

___

### DescribeDominantLanguageDetectionJob

• **DescribeDominantLanguageDetectionJob** = ``"comprehend:DescribeDominantLanguageDetectionJob"``

Grants permission to get the properties associated with a dominant language det
ection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeDominantLanguageDetectionJob.html

#### Defined in

actions/comprehend.ts:159

___

### DescribeEndpoint

• **DescribeEndpoint** = ``"comprehend:DescribeEndpoint"``

Grants permission to get the properties associated with a specific endpoint. Us
e this operation to get the status of an endpoint

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeEndpoint.html

#### Defined in

actions/comprehend.ts:166

___

### DescribeEntitiesDetectionJob

• **DescribeEntitiesDetectionJob** = ``"comprehend:DescribeEntitiesDetectionJob"``

Grants permission to get the properties associated with an entities detection j
ob

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeEntitiesDetectionJob.html

#### Defined in

actions/comprehend.ts:173

___

### DescribeEntityRecognizer

• **DescribeEntityRecognizer** = ``"comprehend:DescribeEntityRecognizer"``

Grants permission to provide details about an entity recognizer including statu
s, S3 buckets containing training data, recognizer metadata, metrics, and so on

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeEntityRecognizer.html

#### Defined in

actions/comprehend.ts:180

___

### DescribeEventsDetectionJob

• **DescribeEventsDetectionJob** = ``"comprehend:DescribeEventsDetectionJob"``

Grants permission to get the properties associated with an Events detection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeEventsDetectionJob.html

#### Defined in

actions/comprehend.ts:186

___

### DescribeFlywheel

• **DescribeFlywheel** = ``"comprehend:DescribeFlywheel"``

Grants permission to get the properties associated with a flywheel

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeFlywheel.html

#### Defined in

actions/comprehend.ts:192

___

### DescribeFlywheelIteration

• **DescribeFlywheelIteration** = ``"comprehend:DescribeFlywheelIteration"``

Grants permission to get the properties associated with a flywheel iteration fo
r a flywheel

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeFlywheelIteration.html

#### Defined in

actions/comprehend.ts:199

___

### DescribeKeyPhrasesDetectionJob

• **DescribeKeyPhrasesDetectionJob** = ``"comprehend:DescribeKeyPhrasesDetectionJob"``

Grants permission to get the properties associated with a key phrases detection
job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeKeyPhrasesDetectionJob.html

#### Defined in

actions/comprehend.ts:206

___

### DescribePiiEntitiesDetectionJob

• **DescribePiiEntitiesDetectionJob** = ``"comprehend:DescribePiiEntitiesDetectionJob"``

Grants permission to get the properties associated with a PII entities detectio
n job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribePiiEntitiesDetectionJob.html

#### Defined in

actions/comprehend.ts:213

___

### DescribeResourcePolicy

• **DescribeResourcePolicy** = ``"comprehend:DescribeResourcePolicy"``

Grants permission to read attached policy on resource

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeResourcePolicy.html

#### Defined in

actions/comprehend.ts:219

___

### DescribeSentimentDetectionJob

• **DescribeSentimentDetectionJob** = ``"comprehend:DescribeSentimentDetectionJob"``

Grants permission to get the properties associated with a sentiment detection j
ob

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeSentimentDetectionJob.html

#### Defined in

actions/comprehend.ts:226

___

### DescribeTargetedSentimentDetectionJob

• **DescribeTargetedSentimentDetectionJob** = ``"comprehend:DescribeTargetedSentimentDetectionJob"``

Grants permission to get the properties associated with a targeted sentiment de
tection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeTargetedSentimentDetectionJob.html

#### Defined in

actions/comprehend.ts:233

___

### DescribeTopicsDetectionJob

• **DescribeTopicsDetectionJob** = ``"comprehend:DescribeTopicsDetectionJob"``

Grants permission to get the properties associated with a topic detection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DescribeTopicsDetectionJob.html

#### Defined in

actions/comprehend.ts:239

___

### DetectDominantLanguage

• **DetectDominantLanguage** = ``"comprehend:DetectDominantLanguage"``

Grants permission to detect the language or languages present in the text

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectDominantLanguage.html

#### Defined in

actions/comprehend.ts:245

___

### DetectEntities

• **DetectEntities** = ``"comprehend:DetectEntities"``

Grants permission to detect the named entities ("People", "Places", "Locations"
, etc) within the given text document

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectEntities.html

#### Defined in

actions/comprehend.ts:252

___

### DetectKeyPhrases

• **DetectKeyPhrases** = ``"comprehend:DetectKeyPhrases"``

Grants permission to detect the phrases in the text that are most indicative of
the content

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectKeyPhrases.html

#### Defined in

actions/comprehend.ts:259

___

### DetectPiiEntities

• **DetectPiiEntities** = ``"comprehend:DetectPiiEntities"``

Grants permission to detect the personally identifiable information entities ("
Name", "SSN", "PIN", etc) within the given text document

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectPiiEntities.html

#### Defined in

actions/comprehend.ts:266

___

### DetectSentiment

• **DetectSentiment** = ``"comprehend:DetectSentiment"``

Grants permission to detect the sentiment of a text in a document (Positive, Ne
gative, Neutral, or Mixed)

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectSentiment.html

#### Defined in

actions/comprehend.ts:273

___

### DetectSyntax

• **DetectSyntax** = ``"comprehend:DetectSyntax"``

Grants permission to detect syntactic information (like Part of Speech, Tokens)
in a text document

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectSyntax.html

#### Defined in

actions/comprehend.ts:280

___

### DetectTargetedSentiment

• **DetectTargetedSentiment** = ``"comprehend:DetectTargetedSentiment"``

Grants permission to detect the sentiments associated with specific entities (s
uch as brands or products) in a document

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectTargetedSentiment.html

#### Defined in

actions/comprehend.ts:287

___

### DetectToxicContent

• **DetectToxicContent** = ``"comprehend:DetectToxicContent"``

Grants permission to detect toxic content within the given list of text segment
s

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectToxicContent.html

#### Defined in

actions/comprehend.ts:294

___

### ImportModel

• **ImportModel** = ``"comprehend:ImportModel"``

Grants permission to import a trained Comprehend model

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ImportModel.html

#### Defined in

actions/comprehend.ts:300

___

### ListDatasets

• **ListDatasets** = ``"comprehend:ListDatasets"``

Grants permission to get a list of the Datasets associated with a flywheel

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListDatasets.html

#### Defined in

actions/comprehend.ts:306

___

### ListDocumentClassificationJobs

• **ListDocumentClassificationJobs** = ``"comprehend:ListDocumentClassificationJobs"``

Grants permission to get a list of the document classification jobs that you ha
ve submitted

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListDocumentClassificationJobs.html

#### Defined in

actions/comprehend.ts:313

___

### ListDocumentClassifierSummaries

• **ListDocumentClassifierSummaries** = ``"comprehend:ListDocumentClassifierSummaries"``

Grants permission to get a list of summaries of the document classifiers that y
ou have created

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListDocumentClassifierSummaries.html

#### Defined in

actions/comprehend.ts:320

___

### ListDocumentClassifiers

• **ListDocumentClassifiers** = ``"comprehend:ListDocumentClassifiers"``

Grants permission to get a list of the document classifiers that you have creat
ed

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListDocumentClassifiers.html

#### Defined in

actions/comprehend.ts:327

___

### ListDominantLanguageDetectionJobs

• **ListDominantLanguageDetectionJobs** = ``"comprehend:ListDominantLanguageDetectionJobs"``

Grants permission to get a list of the dominant language detection jobs that yo
u have submitted

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListDominantLanguageDetectionJobs.html

#### Defined in

actions/comprehend.ts:334

___

### ListEndpoints

• **ListEndpoints** = ``"comprehend:ListEndpoints"``

Grants permission to get a list of all existing endpoints that you've created

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListEndpoints.html

#### Defined in

actions/comprehend.ts:340

___

### ListEntitiesDetectionJobs

• **ListEntitiesDetectionJobs** = ``"comprehend:ListEntitiesDetectionJobs"``

Grants permission to get a list of the entity detection jobs that you have subm
itted

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListEntitiesDetectionJobs.html

#### Defined in

actions/comprehend.ts:347

___

### ListEntityRecognizerSummaries

• **ListEntityRecognizerSummaries** = ``"comprehend:ListEntityRecognizerSummaries"``

Grants permission to get a list of summaries for the entity recognizers that yo
u have created

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListEntityRecognizerSummaries.html

#### Defined in

actions/comprehend.ts:354

___

### ListEntityRecognizers

• **ListEntityRecognizers** = ``"comprehend:ListEntityRecognizers"``

Grants permission to get a list of the properties of all entity recognizers tha
t you created, including recognizers currently in training

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListEntityRecognizers.html

#### Defined in

actions/comprehend.ts:361

___

### ListEventsDetectionJobs

• **ListEventsDetectionJobs** = ``"comprehend:ListEventsDetectionJobs"``

Grants permission to get a list of Events detection jobs that you have submitte
d

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListEventsDetectionJobs.html

#### Defined in

actions/comprehend.ts:368

___

### ListFlywheelIterationHistory

• **ListFlywheelIterationHistory** = ``"comprehend:ListFlywheelIterationHistory"``

Grants permission to get a list of iterations associated for a flywheel

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListFlywheelIterationHistory.html

#### Defined in

actions/comprehend.ts:374

___

### ListFlywheels

• **ListFlywheels** = ``"comprehend:ListFlywheels"``

Grants permission to get a list of the flywheels that you have created

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListFlywheels.html

#### Defined in

actions/comprehend.ts:380

___

### ListKeyPhrasesDetectionJobs

• **ListKeyPhrasesDetectionJobs** = ``"comprehend:ListKeyPhrasesDetectionJobs"``

Grants permission to get a list of key phrase detection jobs that you have subm
itted

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListKeyPhrasesDetectionJobs.html

#### Defined in

actions/comprehend.ts:387

___

### ListPiiEntitiesDetectionJobs

• **ListPiiEntitiesDetectionJobs** = ``"comprehend:ListPiiEntitiesDetectionJobs"``

Grants permission to get a list of PII entities detection jobs that you have su
bmitted

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListPiiEntitiesDetectionJobs.html

#### Defined in

actions/comprehend.ts:394

___

### ListSentimentDetectionJobs

• **ListSentimentDetectionJobs** = ``"comprehend:ListSentimentDetectionJobs"``

Grants permission to get a list of sentiment detection jobs that you have submi
tted

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListSentimentDetectionJobs.html

#### Defined in

actions/comprehend.ts:401

___

### ListTagsForResource

• **ListTagsForResource** = ``"comprehend:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/comprehend.ts:407

___

### ListTargetedSentimentDetectionJobs

• **ListTargetedSentimentDetectionJobs** = ``"comprehend:ListTargetedSentimentDetectionJobs"``

Grants permission to get a list of targeted sentiment detection jobs that you h
ave submitted

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListTargetedSentimentDetectionJobs.html

#### Defined in

actions/comprehend.ts:414

___

### ListTopicsDetectionJobs

• **ListTopicsDetectionJobs** = ``"comprehend:ListTopicsDetectionJobs"``

Grants permission to get a list of the topic detection jobs that you have submi
tted

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_ListTopicsDetectionJobs.html

#### Defined in

actions/comprehend.ts:421

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"comprehend:PutResourcePolicy"``

Grants permission to attach policy to resource

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/comprehend.ts:427

___

### StartDocumentClassificationJob

• **StartDocumentClassificationJob** = ``"comprehend:StartDocumentClassificationJob"``

Grants permission to start an asynchronous document classification job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartDocumentClassificationJob.html

#### Defined in

actions/comprehend.ts:433

___

### StartDominantLanguageDetectionJob

• **StartDominantLanguageDetectionJob** = ``"comprehend:StartDominantLanguageDetectionJob"``

Grants permission to start an asynchronous dominant language detection job for
a collection of documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartDominantLanguageDetectionJob.html

#### Defined in

actions/comprehend.ts:440

___

### StartEntitiesDetectionJob

• **StartEntitiesDetectionJob** = ``"comprehend:StartEntitiesDetectionJob"``

Grants permission to start an asynchronous entity detection job for a collectio
n of documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartEntitiesDetectionJob.html

#### Defined in

actions/comprehend.ts:447

___

### StartEventsDetectionJob

• **StartEventsDetectionJob** = ``"comprehend:StartEventsDetectionJob"``

Grants permission to start an asynchronous Events detection job for a collectio
n of documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartEventsDetectionJob.html

#### Defined in

actions/comprehend.ts:454

___

### StartFlywheelIteration

• **StartFlywheelIteration** = ``"comprehend:StartFlywheelIteration"``

Grants permission to start a flywheel iteration for a flywheel

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartFlywheelIteration.html

#### Defined in

actions/comprehend.ts:460

___

### StartKeyPhrasesDetectionJob

• **StartKeyPhrasesDetectionJob** = ``"comprehend:StartKeyPhrasesDetectionJob"``

Grants permission to start an asynchronous key phrase detection job for a colle
ction of documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartKeyPhrasesDetectionJob.html

#### Defined in

actions/comprehend.ts:467

___

### StartPiiEntitiesDetectionJob

• **StartPiiEntitiesDetectionJob** = ``"comprehend:StartPiiEntitiesDetectionJob"``

Grants permission to start an asynchronous PII entities detection job for a col
lection of documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartPiiEntitiesDetectionJob.html

#### Defined in

actions/comprehend.ts:474

___

### StartSentimentDetectionJob

• **StartSentimentDetectionJob** = ``"comprehend:StartSentimentDetectionJob"``

Grants permission to start an asynchronous sentiment detection job for a collec
tion of documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartSentimentDetectionJob.html

#### Defined in

actions/comprehend.ts:481

___

### StartTargetedSentimentDetectionJob

• **StartTargetedSentimentDetectionJob** = ``"comprehend:StartTargetedSentimentDetectionJob"``

Grants permission to start an asynchronous targeted sentiment detection job for
a collection of documents

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartTargetedSentimentDetectionJob.html

#### Defined in

actions/comprehend.ts:488

___

### StartTopicsDetectionJob

• **StartTopicsDetectionJob** = ``"comprehend:StartTopicsDetectionJob"``

Grants permission to start an asynchronous job to detect the most common topics
in the collection of documents and the phrases associated with each topic

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StartTopicsDetectionJob.html

#### Defined in

actions/comprehend.ts:495

___

### StopDominantLanguageDetectionJob

• **StopDominantLanguageDetectionJob** = ``"comprehend:StopDominantLanguageDetectionJob"``

Grants permission to stop a dominant language detection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopDominantLanguageDetectionJob.html

#### Defined in

actions/comprehend.ts:501

___

### StopEntitiesDetectionJob

• **StopEntitiesDetectionJob** = ``"comprehend:StopEntitiesDetectionJob"``

Grants permission to stop an entity detection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopEntitiesDetectionJob.html

#### Defined in

actions/comprehend.ts:507

___

### StopEventsDetectionJob

• **StopEventsDetectionJob** = ``"comprehend:StopEventsDetectionJob"``

Grants permission to stop an Events detection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopEventsDetectionJob.html

#### Defined in

actions/comprehend.ts:513

___

### StopKeyPhrasesDetectionJob

• **StopKeyPhrasesDetectionJob** = ``"comprehend:StopKeyPhrasesDetectionJob"``

Grants permission to stop a key phrase detection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopKeyPhrasesDetectionJob.html

#### Defined in

actions/comprehend.ts:519

___

### StopPiiEntitiesDetectionJob

• **StopPiiEntitiesDetectionJob** = ``"comprehend:StopPiiEntitiesDetectionJob"``

Grants permission to stop a PII entities detection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopPiiEntitiesDetectionJob.html

#### Defined in

actions/comprehend.ts:525

___

### StopSentimentDetectionJob

• **StopSentimentDetectionJob** = ``"comprehend:StopSentimentDetectionJob"``

Grants permission to stop a sentiment detection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopSentimentDetectionJob.html

#### Defined in

actions/comprehend.ts:531

___

### StopTargetedSentimentDetectionJob

• **StopTargetedSentimentDetectionJob** = ``"comprehend:StopTargetedSentimentDetectionJob"``

Grants permission to stop a targeted sentiment detection job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopTargetedSentimentDetectionJob.html

#### Defined in

actions/comprehend.ts:537

___

### StopTrainingDocumentClassifier

• **StopTrainingDocumentClassifier** = ``"comprehend:StopTrainingDocumentClassifier"``

Grants permission to stop a previously created document classifier training job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopTrainingDocumentClassifier.html

#### Defined in

actions/comprehend.ts:543

___

### StopTrainingEntityRecognizer

• **StopTrainingEntityRecognizer** = ``"comprehend:StopTrainingEntityRecognizer"``

Grants permission to stop a previously created entity recognizer training job

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_StopTrainingEntityRecognizer.html

#### Defined in

actions/comprehend.ts:549

___

### TagResource

• **TagResource** = ``"comprehend:TagResource"``

Grants permission to tag a resource with given key value pairs

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_TagResource.html

#### Defined in

actions/comprehend.ts:555

___

### UntagResource

• **UntagResource** = ``"comprehend:UntagResource"``

Grants permission to untag a resource with given key

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_UntagResource.html

#### Defined in

actions/comprehend.ts:561

___

### UpdateEndpoint

• **UpdateEndpoint** = ``"comprehend:UpdateEndpoint"``

Grants permission to update information about the specified endpoint

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_UpdateEndpoint.html

#### Defined in

actions/comprehend.ts:567

___

### UpdateFlywheel

• **UpdateFlywheel** = ``"comprehend:UpdateFlywheel"``

Grants permission to Update a flywheel's configuration

See https://docs.aws.amazon.com/comprehend/latest/APIReference/API_UpdateFlywheel.html

#### Defined in

actions/comprehend.ts:573
