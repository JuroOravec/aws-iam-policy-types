[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDeepcomposerActions

# Enumeration: AwsDeepcomposerActions

All IAM policy actions for AWS DeepComposer (DEEPCOMPOSER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepcomposer.html

2024-02-12T09:56:55.257Z

## Table of contents

### Enumeration Members

- [AssociateCoupon](AwsDeepcomposerActions.md#associatecoupon)
- [CreateAudio](AwsDeepcomposerActions.md#createaudio)
- [CreateComposition](AwsDeepcomposerActions.md#createcomposition)
- [CreateModel](AwsDeepcomposerActions.md#createmodel)
- [DeleteComposition](AwsDeepcomposerActions.md#deletecomposition)
- [DeleteModel](AwsDeepcomposerActions.md#deletemodel)
- [GetComposition](AwsDeepcomposerActions.md#getcomposition)
- [GetModel](AwsDeepcomposerActions.md#getmodel)
- [GetSampleModel](AwsDeepcomposerActions.md#getsamplemodel)
- [ListCompositions](AwsDeepcomposerActions.md#listcompositions)
- [ListModels](AwsDeepcomposerActions.md#listmodels)
- [ListSampleModels](AwsDeepcomposerActions.md#listsamplemodels)
- [ListTagsForResource](AwsDeepcomposerActions.md#listtagsforresource)
- [ListTrainingTopics](AwsDeepcomposerActions.md#listtrainingtopics)
- [TagResource](AwsDeepcomposerActions.md#tagresource)
- [UntagResource](AwsDeepcomposerActions.md#untagresource)
- [UpdateComposition](AwsDeepcomposerActions.md#updatecomposition)
- [UpdateModel](AwsDeepcomposerActions.md#updatemodel)

## Enumeration Members

### AssociateCoupon

• **AssociateCoupon** = ``"deepcomposer:AssociateCoupon"``

Grants permission to associate a DeepComposer coupon (or DSN) with the account
associated with the sender of the request

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/what-it-is-keyboard.html

#### Defined in

actions/deepcomposer.ts:18

___

### CreateAudio

• **CreateAudio** = ``"deepcomposer:CreateAudio"``

Grants permission to create an audio file by converting the midi composition in
to a wav or mp3 file

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html

#### Defined in

actions/deepcomposer.ts:25

___

### CreateComposition

• **CreateComposition** = ``"deepcomposer:CreateComposition"``

Grants permission to create a multi-track midi composition

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html

#### Defined in

actions/deepcomposer.ts:31

___

### CreateModel

• **CreateModel** = ``"deepcomposer:CreateModel"``

Grants permission to start creating/training a generative-model that is able to
perform inference against the user-provided piano-melody to create a multi-trac
k midi composition

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html

#### Defined in

actions/deepcomposer.ts:39

___

### DeleteComposition

• **DeleteComposition** = ``"deepcomposer:DeleteComposition"``

Grants permission to delete the composition

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html

#### Defined in

actions/deepcomposer.ts:45

___

### DeleteModel

• **DeleteModel** = ``"deepcomposer:DeleteModel"``

Grants permission to delete the model

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html

#### Defined in

actions/deepcomposer.ts:51

___

### GetComposition

• **GetComposition** = ``"deepcomposer:GetComposition"``

Grants permission to get information about the composition

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html

#### Defined in

actions/deepcomposer.ts:57

___

### GetModel

• **GetModel** = ``"deepcomposer:GetModel"``

Grants permission to get information about the model

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html

#### Defined in

actions/deepcomposer.ts:63

___

### GetSampleModel

• **GetSampleModel** = ``"deepcomposer:GetSampleModel"``

Grants permission to get information about the sample/pre-trained DeepComposer
model

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html

#### Defined in

actions/deepcomposer.ts:70

___

### ListCompositions

• **ListCompositions** = ``"deepcomposer:ListCompositions"``

Grants permission to list all the compositions owned by the sender of the reque
st

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html

#### Defined in

actions/deepcomposer.ts:77

___

### ListModels

• **ListModels** = ``"deepcomposer:ListModels"``

Grants permission to list all the models owned by the sender of the request

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html

#### Defined in

actions/deepcomposer.ts:83

___

### ListSampleModels

• **ListSampleModels** = ``"deepcomposer:ListSampleModels"``

Grants permission to list all the sample/pre-trained models provided by the Dee
pComposer service

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html

#### Defined in

actions/deepcomposer.ts:90

___

### ListTagsForResource

• **ListTagsForResource** = ``"deepcomposer:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/deepcomposer-tagging.html

#### Defined in

actions/deepcomposer.ts:96

___

### ListTrainingTopics

• **ListTrainingTopics** = ``"deepcomposer:ListTrainingTopics"``

Grants permission to list all the training options or topic for creating/traini
ng a model

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html

#### Defined in

actions/deepcomposer.ts:103

___

### TagResource

• **TagResource** = ``"deepcomposer:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/deepcomposer-tagging.html

#### Defined in

actions/deepcomposer.ts:109

___

### UntagResource

• **UntagResource** = ``"deepcomposer:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/deepcomposer-tagging.html

#### Defined in

actions/deepcomposer.ts:115

___

### UpdateComposition

• **UpdateComposition** = ``"deepcomposer:UpdateComposition"``

Grants permission to modify the mutable properties associated with a compositio
n

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html

#### Defined in

actions/deepcomposer.ts:122

___

### UpdateModel

• **UpdateModel** = ``"deepcomposer:UpdateModel"``

Grants permission to to modify the mutable properties associated with a model

See https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html

#### Defined in

actions/deepcomposer.ts:128
