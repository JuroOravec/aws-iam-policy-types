[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsTranslateActions

# Enumeration: AwsTranslateActions

All IAM policy actions for Amazon Translate (TRANSLATE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranslate.html

2024-02-12T09:59:33.444Z

## Table of contents

### Enumeration Members

- [CreateParallelData](AwsTranslateActions.md#createparalleldata)
- [DeleteParallelData](AwsTranslateActions.md#deleteparalleldata)
- [DeleteTerminology](AwsTranslateActions.md#deleteterminology)
- [DescribeTextTranslationJob](AwsTranslateActions.md#describetexttranslationjob)
- [GetParallelData](AwsTranslateActions.md#getparalleldata)
- [GetTerminology](AwsTranslateActions.md#getterminology)
- [ImportTerminology](AwsTranslateActions.md#importterminology)
- [ListLanguages](AwsTranslateActions.md#listlanguages)
- [ListParallelData](AwsTranslateActions.md#listparalleldata)
- [ListTagsForResource](AwsTranslateActions.md#listtagsforresource)
- [ListTerminologies](AwsTranslateActions.md#listterminologies)
- [ListTextTranslationJobs](AwsTranslateActions.md#listtexttranslationjobs)
- [StartTextTranslationJob](AwsTranslateActions.md#starttexttranslationjob)
- [StopTextTranslationJob](AwsTranslateActions.md#stoptexttranslationjob)
- [TagResource](AwsTranslateActions.md#tagresource)
- [TranslateDocument](AwsTranslateActions.md#translatedocument)
- [TranslateText](AwsTranslateActions.md#translatetext)
- [UntagResource](AwsTranslateActions.md#untagresource)
- [UpdateParallelData](AwsTranslateActions.md#updateparalleldata)

## Enumeration Members

### CreateParallelData

• **CreateParallelData** = ``"translate:CreateParallelData"``

Grants permission to create a Parallel Data

See https://docs.aws.amazon.com/translate/latest/APIReference/API_CreateParallelData.html

#### Defined in

actions/translate.ts:17

___

### DeleteParallelData

• **DeleteParallelData** = ``"translate:DeleteParallelData"``

Grants permission to delete a Parallel Data

See https://docs.aws.amazon.com/translate/latest/APIReference/API_DeleteParallelData.html

#### Defined in

actions/translate.ts:23

___

### DeleteTerminology

• **DeleteTerminology** = ``"translate:DeleteTerminology"``

Grants permission to delete a terminology

See https://docs.aws.amazon.com/translate/latest/APIReference/API_DeleteTerminology.html

#### Defined in

actions/translate.ts:29

___

### DescribeTextTranslationJob

• **DescribeTextTranslationJob** = ``"translate:DescribeTextTranslationJob"``

Grants permission to get the properties associated with an asynchronous batch t
ranslation job

See https://docs.aws.amazon.com/translate/latest/APIReference/API_DescribeTextTranslationJob.html

#### Defined in

actions/translate.ts:36

___

### GetParallelData

• **GetParallelData** = ``"translate:GetParallelData"``

Grants permission to get a Parallel Data

See https://docs.aws.amazon.com/translate/latest/APIReference/API_GetParallelData.html

#### Defined in

actions/translate.ts:42

___

### GetTerminology

• **GetTerminology** = ``"translate:GetTerminology"``

Grants permission to retrieve a terminology

See https://docs.aws.amazon.com/translate/latest/APIReference/API_GetTerminology.html

#### Defined in

actions/translate.ts:48

___

### ImportTerminology

• **ImportTerminology** = ``"translate:ImportTerminology"``

Grants permission to create or update a terminology, depending on whether or no
t one already exists for the given terminology name

See https://docs.aws.amazon.com/translate/latest/APIReference/API_ImportTerminology.html

#### Defined in

actions/translate.ts:55

___

### ListLanguages

• **ListLanguages** = ``"translate:ListLanguages"``

Grants permission to list supported languages

See https://docs.aws.amazon.com/translate/latest/APIReference/API_ListLanguages.html

#### Defined in

actions/translate.ts:61

___

### ListParallelData

• **ListParallelData** = ``"translate:ListParallelData"``

Grants permission to list Parallel Data associated with your account

See https://docs.aws.amazon.com/translate/latest/APIReference/API_ListParallelData.html

#### Defined in

actions/translate.ts:67

___

### ListTagsForResource

• **ListTagsForResource** = ``"translate:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/translate/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/translate.ts:73

___

### ListTerminologies

• **ListTerminologies** = ``"translate:ListTerminologies"``

Grants permission to list terminologies associated with your account

See https://docs.aws.amazon.com/translate/latest/APIReference/API_ListTerminologies.html

#### Defined in

actions/translate.ts:79

___

### ListTextTranslationJobs

• **ListTextTranslationJobs** = ``"translate:ListTextTranslationJobs"``

Grants permission to list batch translation jobs that you have submitted

See https://docs.aws.amazon.com/translate/latest/APIReference/API_ListTextTranslationJobs.html

#### Defined in

actions/translate.ts:85

___

### StartTextTranslationJob

• **StartTextTranslationJob** = ``"translate:StartTextTranslationJob"``

Grants permission to start an asynchronous batch translation job. Batch transla
tion jobs can be used to translate large volumes of text across multiple docume
nts at once

See https://docs.aws.amazon.com/translate/latest/APIReference/API_StartTextTranslationJob.html

#### Defined in

actions/translate.ts:93

___

### StopTextTranslationJob

• **StopTextTranslationJob** = ``"translate:StopTextTranslationJob"``

Grants permission to stop an asynchronous batch translation job that is in prog
ress

See https://docs.aws.amazon.com/translate/latest/APIReference/API_StopTextTranslationJob.html

#### Defined in

actions/translate.ts:100

___

### TagResource

• **TagResource** = ``"translate:TagResource"``

Grants permission to tag a resource with given key value pairs

See https://docs.aws.amazon.com/translate/latest/APIReference/API_TagResource.html

#### Defined in

actions/translate.ts:106

___

### TranslateDocument

• **TranslateDocument** = ``"translate:TranslateDocument"``

Grants permission to translate a document from a source language to a target la
nguage

See https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html

#### Defined in

actions/translate.ts:113

___

### TranslateText

• **TranslateText** = ``"translate:TranslateText"``

Grants permission to translate text from a source language to a target language

See https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateText.html

#### Defined in

actions/translate.ts:119

___

### UntagResource

• **UntagResource** = ``"translate:UntagResource"``

Grants permission to untag a resource with given key

See https://docs.aws.amazon.com/translate/latest/APIReference/API_UntagResource.html

#### Defined in

actions/translate.ts:125

___

### UpdateParallelData

• **UpdateParallelData** = ``"translate:UpdateParallelData"``

Grants permission to update an existing Parallel Data

See https://docs.aws.amazon.com/translate/latest/APIReference/API_UpdateParallelData.html

#### Defined in

actions/translate.ts:131
