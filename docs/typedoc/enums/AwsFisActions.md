[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsFisActions

# Enumeration: AwsFisActions

All IAM policy actions for AWS Fault Injection Service (FIS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfaultinjectionservice.html

2024-02-12T09:57:24.676Z

## Table of contents

### Enumeration Members

- [CreateExperimentTemplate](AwsFisActions.md#createexperimenttemplate)
- [CreateTargetAccountConfiguration](AwsFisActions.md#createtargetaccountconfiguration)
- [DeleteExperimentTemplate](AwsFisActions.md#deleteexperimenttemplate)
- [DeleteTargetAccountConfiguration](AwsFisActions.md#deletetargetaccountconfiguration)
- [GetAction](AwsFisActions.md#getaction)
- [GetExperiment](AwsFisActions.md#getexperiment)
- [GetExperimentTargetAccountConfiguration](AwsFisActions.md#getexperimenttargetaccountconfiguration)
- [GetExperimentTemplate](AwsFisActions.md#getexperimenttemplate)
- [GetTargetAccountConfiguration](AwsFisActions.md#gettargetaccountconfiguration)
- [GetTargetResourceType](AwsFisActions.md#gettargetresourcetype)
- [InjectApiInternalError](AwsFisActions.md#injectapiinternalerror)
- [InjectApiThrottleError](AwsFisActions.md#injectapithrottleerror)
- [InjectApiUnavailableError](AwsFisActions.md#injectapiunavailableerror)
- [ListActions](AwsFisActions.md#listactions)
- [ListExperimentResolvedTargets](AwsFisActions.md#listexperimentresolvedtargets)
- [ListExperimentTargetAccountConfigurations](AwsFisActions.md#listexperimenttargetaccountconfigurations)
- [ListExperimentTemplates](AwsFisActions.md#listexperimenttemplates)
- [ListExperiments](AwsFisActions.md#listexperiments)
- [ListTagsForResource](AwsFisActions.md#listtagsforresource)
- [ListTargetAccountConfigurations](AwsFisActions.md#listtargetaccountconfigurations)
- [ListTargetResourceTypes](AwsFisActions.md#listtargetresourcetypes)
- [StartExperiment](AwsFisActions.md#startexperiment)
- [StopExperiment](AwsFisActions.md#stopexperiment)
- [TagResource](AwsFisActions.md#tagresource)
- [UntagResource](AwsFisActions.md#untagresource)
- [UpdateExperimentTemplate](AwsFisActions.md#updateexperimenttemplate)
- [UpdateTargetAccountConfiguration](AwsFisActions.md#updatetargetaccountconfiguration)

## Enumeration Members

### CreateExperimentTemplate

• **CreateExperimentTemplate** = ``"fis:CreateExperimentTemplate"``

Grants permission to create an AWS FIS experiment template

See https://docs.aws.amazon.com/fis/latest/APIReference/API_CreateExperimentTemplate.html

#### Defined in

actions/fis.ts:17

___

### CreateTargetAccountConfiguration

• **CreateTargetAccountConfiguration** = ``"fis:CreateTargetAccountConfiguration"``

Grants permission to create an AWS FIS target account configuration

See https://docs.aws.amazon.com/fis/latest/APIReference/API_CreateTargetAccountConfiguration.html

#### Defined in

actions/fis.ts:23

___

### DeleteExperimentTemplate

• **DeleteExperimentTemplate** = ``"fis:DeleteExperimentTemplate"``

Grants permission to delete the AWS FIS experiment template

See https://docs.aws.amazon.com/fis/latest/APIReference/API_DeleteExperimentTemplate.html

#### Defined in

actions/fis.ts:29

___

### DeleteTargetAccountConfiguration

• **DeleteTargetAccountConfiguration** = ``"fis:DeleteTargetAccountConfiguration"``

Grants permission to delete an AWS FIS target account configuration

See https://docs.aws.amazon.com/fis/latest/APIReference/API_DeleteTargetAccountConfiguration.html

#### Defined in

actions/fis.ts:35

___

### GetAction

• **GetAction** = ``"fis:GetAction"``

Grants permission to retrieve an AWS FIS action

See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetAction.html

#### Defined in

actions/fis.ts:41

___

### GetExperiment

• **GetExperiment** = ``"fis:GetExperiment"``

Grants permission to retrieve an AWS FIS experiment

See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperiment.html

#### Defined in

actions/fis.ts:47

___

### GetExperimentTargetAccountConfiguration

• **GetExperimentTargetAccountConfiguration** = ``"fis:GetExperimentTargetAccountConfiguration"``

Grants permission to retrieve an AWS FIS target account configuration for an AW
S FIS experiment

See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperimentTargetAccountConfiguration.html

#### Defined in

actions/fis.ts:54

___

### GetExperimentTemplate

• **GetExperimentTemplate** = ``"fis:GetExperimentTemplate"``

Grants permission to retrieve an AWS FIS Experiment Template

See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperimentTemplate.html

#### Defined in

actions/fis.ts:60

___

### GetTargetAccountConfiguration

• **GetTargetAccountConfiguration** = ``"fis:GetTargetAccountConfiguration"``

Grants permission to retrieve an AWS FIS target account configuration for an AW
S FIS experiment template

See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetTargetAccountConfiguration.html

#### Defined in

actions/fis.ts:67

___

### GetTargetResourceType

• **GetTargetResourceType** = ``"fis:GetTargetResourceType"``

Grants permission to get information about the specified resource type

See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetTargetResourceType.html

#### Defined in

actions/fis.ts:73

___

### InjectApiInternalError

• **InjectApiInternalError** = ``"fis:InjectApiInternalError"``

Grants permission to inject an API internal error on the provided AWS service f
rom an FIS Experiment

See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#fis-actions-reference-fis

#### Defined in

actions/fis.ts:80

___

### InjectApiThrottleError

• **InjectApiThrottleError** = ``"fis:InjectApiThrottleError"``

Grants permission to inject an API throttle error on the provided AWS service f
rom an FIS Experiment

See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#fis-actions-reference-fis

#### Defined in

actions/fis.ts:87

___

### InjectApiUnavailableError

• **InjectApiUnavailableError** = ``"fis:InjectApiUnavailableError"``

Grants permission to inject an API unavailable error on the provided AWS servic
e from an FIS Experiment

See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#fis-actions-reference-fis

#### Defined in

actions/fis.ts:94

___

### ListActions

• **ListActions** = ``"fis:ListActions"``

Grants permission to list all available AWS FIS actions

See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListActions.html

#### Defined in

actions/fis.ts:100

___

### ListExperimentResolvedTargets

• **ListExperimentResolvedTargets** = ``"fis:ListExperimentResolvedTargets"``

Grants permission to list resolved targets for AWS FIS experiments

See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperimentResolvedTargets.html

#### Defined in

actions/fis.ts:106

___

### ListExperimentTargetAccountConfigurations

• **ListExperimentTargetAccountConfigurations** = ``"fis:ListExperimentTargetAccountConfigurations"``

Grants permission to list target account configurations for AWS FIS experiments

See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperimentTargetAccountConfigurations.html

#### Defined in

actions/fis.ts:112

___

### ListExperimentTemplates

• **ListExperimentTemplates** = ``"fis:ListExperimentTemplates"``

Grants permission to list all available AWS FIS experiment templates

See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperimentTemplates.html

#### Defined in

actions/fis.ts:118

___

### ListExperiments

• **ListExperiments** = ``"fis:ListExperiments"``

Grants permission to list all available AWS FIS experiments

See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperiments.html

#### Defined in

actions/fis.ts:124

___

### ListTagsForResource

• **ListTagsForResource** = ``"fis:ListTagsForResource"``

Grants permission to list the tags for an AWS FIS resource

See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/fis.ts:130

___

### ListTargetAccountConfigurations

• **ListTargetAccountConfigurations** = ``"fis:ListTargetAccountConfigurations"``

Grants permission to list target account configurations for AWS FIS experiment
templates

See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTargetAccountConfigurations.html

#### Defined in

actions/fis.ts:137

___

### ListTargetResourceTypes

• **ListTargetResourceTypes** = ``"fis:ListTargetResourceTypes"``

Grants permission to list the resource types

See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTargetResourceTypes.html

#### Defined in

actions/fis.ts:143

___

### StartExperiment

• **StartExperiment** = ``"fis:StartExperiment"``

Grants permission to run an AWS FIS experiment

See https://docs.aws.amazon.com/fis/latest/APIReference/API_StartExperiment.html

#### Defined in

actions/fis.ts:149

___

### StopExperiment

• **StopExperiment** = ``"fis:StopExperiment"``

Grants permission to stop an AWS FIS experiment

See https://docs.aws.amazon.com/fis/latest/APIReference/API_StopExperiment.html

#### Defined in

actions/fis.ts:155

___

### TagResource

• **TagResource** = ``"fis:TagResource"``

Grants permission to tag AWS FIS resources

See https://docs.aws.amazon.com/fis/latest/APIReference/API_TagResource.html

#### Defined in

actions/fis.ts:161

___

### UntagResource

• **UntagResource** = ``"fis:UntagResource"``

Grants permission to untag AWS FIS resources

See https://docs.aws.amazon.com/fis/latest/APIReference/API_UntagResource.html

#### Defined in

actions/fis.ts:167

___

### UpdateExperimentTemplate

• **UpdateExperimentTemplate** = ``"fis:UpdateExperimentTemplate"``

Grants permission to update the specified AWS FIS experiment template

See https://docs.aws.amazon.com/fis/latest/APIReference/API_UpdateExperimentTemplate.html

#### Defined in

actions/fis.ts:173

___

### UpdateTargetAccountConfiguration

• **UpdateTargetAccountConfiguration** = ``"fis:UpdateTargetAccountConfiguration"``

Grants permission to update an AWS FIS target account configuration

See https://docs.aws.amazon.com/fis/latest/APIReference/API_UpdateTargetAccountConfiguration.html

#### Defined in

actions/fis.ts:179
