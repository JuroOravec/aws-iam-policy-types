[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIoteventsActions

# Enumeration: AwsIoteventsActions

All IAM policy actions for AWS IoT Events (IOTEVENTS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotevents.html

2024-02-12T09:57:49.249Z

## Table of contents

### Enumeration Members

- [BatchAcknowledgeAlarm](AwsIoteventsActions.md#batchacknowledgealarm)
- [BatchDeleteDetector](AwsIoteventsActions.md#batchdeletedetector)
- [BatchDisableAlarm](AwsIoteventsActions.md#batchdisablealarm)
- [BatchEnableAlarm](AwsIoteventsActions.md#batchenablealarm)
- [BatchPutMessage](AwsIoteventsActions.md#batchputmessage)
- [BatchResetAlarm](AwsIoteventsActions.md#batchresetalarm)
- [BatchSnoozeAlarm](AwsIoteventsActions.md#batchsnoozealarm)
- [BatchUpdateDetector](AwsIoteventsActions.md#batchupdatedetector)
- [CreateAlarmModel](AwsIoteventsActions.md#createalarmmodel)
- [CreateDetectorModel](AwsIoteventsActions.md#createdetectormodel)
- [CreateInput](AwsIoteventsActions.md#createinput)
- [DeleteAlarmModel](AwsIoteventsActions.md#deletealarmmodel)
- [DeleteDetectorModel](AwsIoteventsActions.md#deletedetectormodel)
- [DeleteInput](AwsIoteventsActions.md#deleteinput)
- [DescribeAlarm](AwsIoteventsActions.md#describealarm)
- [DescribeAlarmModel](AwsIoteventsActions.md#describealarmmodel)
- [DescribeDetector](AwsIoteventsActions.md#describedetector)
- [DescribeDetectorModel](AwsIoteventsActions.md#describedetectormodel)
- [DescribeDetectorModelAnalysis](AwsIoteventsActions.md#describedetectormodelanalysis)
- [DescribeInput](AwsIoteventsActions.md#describeinput)
- [DescribeLoggingOptions](AwsIoteventsActions.md#describeloggingoptions)
- [GetDetectorModelAnalysisResults](AwsIoteventsActions.md#getdetectormodelanalysisresults)
- [ListAlarmModelVersions](AwsIoteventsActions.md#listalarmmodelversions)
- [ListAlarmModels](AwsIoteventsActions.md#listalarmmodels)
- [ListAlarms](AwsIoteventsActions.md#listalarms)
- [ListDetectorModelVersions](AwsIoteventsActions.md#listdetectormodelversions)
- [ListDetectorModels](AwsIoteventsActions.md#listdetectormodels)
- [ListDetectors](AwsIoteventsActions.md#listdetectors)
- [ListInputRoutings](AwsIoteventsActions.md#listinputroutings)
- [ListInputs](AwsIoteventsActions.md#listinputs)
- [ListTagsForResource](AwsIoteventsActions.md#listtagsforresource)
- [PutLoggingOptions](AwsIoteventsActions.md#putloggingoptions)
- [StartDetectorModelAnalysis](AwsIoteventsActions.md#startdetectormodelanalysis)
- [TagResource](AwsIoteventsActions.md#tagresource)
- [UntagResource](AwsIoteventsActions.md#untagresource)
- [UpdateAlarmModel](AwsIoteventsActions.md#updatealarmmodel)
- [UpdateDetectorModel](AwsIoteventsActions.md#updatedetectormodel)
- [UpdateInput](AwsIoteventsActions.md#updateinput)
- [UpdateInputRouting](AwsIoteventsActions.md#updateinputrouting)

## Enumeration Members

### BatchAcknowledgeAlarm

• **BatchAcknowledgeAlarm** = ``"iotevents:BatchAcknowledgeAlarm"``

Grants permission to send one or more acknowledge action requests to AWS IoT Ev
ents

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchAcknowledgeAlarm.html

#### Defined in

actions/iotevents.ts:18

___

### BatchDeleteDetector

• **BatchDeleteDetector** = ``"iotevents:BatchDeleteDetector"``

Grants permission to delete a detector instance within the AWS IoT Events syste
m

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDeleteDetector.html

#### Defined in

actions/iotevents.ts:25

___

### BatchDisableAlarm

• **BatchDisableAlarm** = ``"iotevents:BatchDisableAlarm"``

Grants permission to disable one or more alarm instances

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html

#### Defined in

actions/iotevents.ts:31

___

### BatchEnableAlarm

• **BatchEnableAlarm** = ``"iotevents:BatchEnableAlarm"``

Grants permission to enable one or more alarm instances

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html

#### Defined in

actions/iotevents.ts:37

___

### BatchPutMessage

• **BatchPutMessage** = ``"iotevents:BatchPutMessage"``

Grants permission to send a set of messages to the AWS IoT Events system

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html

#### Defined in

actions/iotevents.ts:43

___

### BatchResetAlarm

• **BatchResetAlarm** = ``"iotevents:BatchResetAlarm"``

Grants permission to reset one or more alarm instances

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html

#### Defined in

actions/iotevents.ts:49

___

### BatchSnoozeAlarm

• **BatchSnoozeAlarm** = ``"iotevents:BatchSnoozeAlarm"``

Grants permission to change one or more alarm instances to the snooze mode

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html

#### Defined in

actions/iotevents.ts:55

___

### BatchUpdateDetector

• **BatchUpdateDetector** = ``"iotevents:BatchUpdateDetector"``

Grants permission to update a detector instance within the AWS IoT Events syste
m

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchUpdateDetector.html

#### Defined in

actions/iotevents.ts:62

___

### CreateAlarmModel

• **CreateAlarmModel** = ``"iotevents:CreateAlarmModel"``

Grants permission to create an alarm model to monitor an AWS IoT Events input a
ttribute or an AWS IoT SiteWise asset property

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html

#### Defined in

actions/iotevents.ts:69

___

### CreateDetectorModel

• **CreateDetectorModel** = ``"iotevents:CreateDetectorModel"``

Grants permission to create a detector model to monitor an AWS IoT Events input
attribute

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateDetectorModel.html

#### Defined in

actions/iotevents.ts:76

___

### CreateInput

• **CreateInput** = ``"iotevents:CreateInput"``

Grants permission to create an Input in IotEvents

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateInput.html

#### Defined in

actions/iotevents.ts:82

___

### DeleteAlarmModel

• **DeleteAlarmModel** = ``"iotevents:DeleteAlarmModel"``

Grants permission to delete an alarm model

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteAlarmModel.html

#### Defined in

actions/iotevents.ts:88

___

### DeleteDetectorModel

• **DeleteDetectorModel** = ``"iotevents:DeleteDetectorModel"``

Grants permission to delete a detector model

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteDetectorModel.html

#### Defined in

actions/iotevents.ts:94

___

### DeleteInput

• **DeleteInput** = ``"iotevents:DeleteInput"``

Grants permission to delete an input

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteInput.html

#### Defined in

actions/iotevents.ts:100

___

### DescribeAlarm

• **DescribeAlarm** = ``"iotevents:DescribeAlarm"``

Grants permission to retrieve information about an alarm instance

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeAlarm.html

#### Defined in

actions/iotevents.ts:106

___

### DescribeAlarmModel

• **DescribeAlarmModel** = ``"iotevents:DescribeAlarmModel"``

Grants permission to retrieve information about an alarm model

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeAlarmModel.html

#### Defined in

actions/iotevents.ts:112

___

### DescribeDetector

• **DescribeDetector** = ``"iotevents:DescribeDetector"``

Grants permission to retriev information about a detector instance

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeDetector.html

#### Defined in

actions/iotevents.ts:118

___

### DescribeDetectorModel

• **DescribeDetectorModel** = ``"iotevents:DescribeDetectorModel"``

Grants permission to retrieve information about a detector model

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeDetectorModel.html

#### Defined in

actions/iotevents.ts:124

___

### DescribeDetectorModelAnalysis

• **DescribeDetectorModelAnalysis** = ``"iotevents:DescribeDetectorModelAnalysis"``

Grants permission to retrieve the detector model analysis information

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeDetectorModelAnalysis.html

#### Defined in

actions/iotevents.ts:130

___

### DescribeInput

• **DescribeInput** = ``"iotevents:DescribeInput"``

Grants permission to retrieve an information about Input

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeInput.html

#### Defined in

actions/iotevents.ts:136

___

### DescribeLoggingOptions

• **DescribeLoggingOptions** = ``"iotevents:DescribeLoggingOptions"``

Grants permission to retrieve the current settings of the AWS IoT Events loggin
g options

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeLoggingOptions.html

#### Defined in

actions/iotevents.ts:143

___

### GetDetectorModelAnalysisResults

• **GetDetectorModelAnalysisResults** = ``"iotevents:GetDetectorModelAnalysisResults"``

Grants permission to retrieve the detector model analysis results

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_GetDetectorModelAnalysisResults.html

#### Defined in

actions/iotevents.ts:149

___

### ListAlarmModelVersions

• **ListAlarmModelVersions** = ``"iotevents:ListAlarmModelVersions"``

Grants permission to list all the versions of an alarm model

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListAlarmModelVersions.html

#### Defined in

actions/iotevents.ts:155

___

### ListAlarmModels

• **ListAlarmModels** = ``"iotevents:ListAlarmModels"``

Grants permission to list the alarm models that you created

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListAlarmModels.html

#### Defined in

actions/iotevents.ts:161

___

### ListAlarms

• **ListAlarms** = ``"iotevents:ListAlarms"``

Grants permission to retrieve information about all alarm instances per alarmMo
del

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListAlarms.html

#### Defined in

actions/iotevents.ts:168

___

### ListDetectorModelVersions

• **ListDetectorModelVersions** = ``"iotevents:ListDetectorModelVersions"``

Grants permission to list all the versions of a detector model

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModelVersions.html

#### Defined in

actions/iotevents.ts:174

___

### ListDetectorModels

• **ListDetectorModels** = ``"iotevents:ListDetectorModels"``

Grants permission to list the detector models that you created

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModels.html

#### Defined in

actions/iotevents.ts:180

___

### ListDetectors

• **ListDetectors** = ``"iotevents:ListDetectors"``

Grants permission to retrieve information about all detector instances per dete
ctormodel

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html

#### Defined in

actions/iotevents.ts:187

___

### ListInputRoutings

• **ListInputRoutings** = ``"iotevents:ListInputRoutings"``

Grants permission to list one or more input routings

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListInputRoutings.html

#### Defined in

actions/iotevents.ts:193

___

### ListInputs

• **ListInputs** = ``"iotevents:ListInputs"``

Grants permission to lists the inputs you have created

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListInputs.html

#### Defined in

actions/iotevents.ts:199

___

### ListTagsForResource

• **ListTagsForResource** = ``"iotevents:ListTagsForResource"``

Grants permission to list the tags (metadata) which you have assigned to the re
source

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListTagsForResource.html

#### Defined in

actions/iotevents.ts:206

___

### PutLoggingOptions

• **PutLoggingOptions** = ``"iotevents:PutLoggingOptions"``

Grants permission to set or update the AWS IoT Events logging options

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_PutLoggingOptions.html

#### Defined in

actions/iotevents.ts:212

___

### StartDetectorModelAnalysis

• **StartDetectorModelAnalysis** = ``"iotevents:StartDetectorModelAnalysis"``

Grants permission to start the detector model analysis

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_StartDetectorModelAnalysis.html

#### Defined in

actions/iotevents.ts:218

___

### TagResource

• **TagResource** = ``"iotevents:TagResource"``

Grants permission to adds to or modifies the tags of the given resource.Tags ar
e metadata which can be used to manage a resource

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_TagResource.html

#### Defined in

actions/iotevents.ts:225

___

### UntagResource

• **UntagResource** = ``"iotevents:UntagResource"``

Grants permission to remove the given tags (metadata) from the resource

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_UntagResource.html

#### Defined in

actions/iotevents.ts:231

___

### UpdateAlarmModel

• **UpdateAlarmModel** = ``"iotevents:UpdateAlarmModel"``

Grants permission to update an alarm model

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateAlarmModel.html

#### Defined in

actions/iotevents.ts:237

___

### UpdateDetectorModel

• **UpdateDetectorModel** = ``"iotevents:UpdateDetectorModel"``

Grants permission to update a detector model

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateDetectorModel.html

#### Defined in

actions/iotevents.ts:243

___

### UpdateInput

• **UpdateInput** = ``"iotevents:UpdateInput"``

Grants permission to update an input

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInput.html

#### Defined in

actions/iotevents.ts:249

___

### UpdateInputRouting

• **UpdateInputRouting** = ``"iotevents:UpdateInputRouting"``

Grants permission to update input routing

See https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInputRouting.html

#### Defined in

actions/iotevents.ts:255
