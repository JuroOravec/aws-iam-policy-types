[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIotanalyticsActions

# Enumeration: AwsIotanalyticsActions

All IAM policy actions for AWS IoT Analytics (IOTANALYTICS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotanalytics.html

2024-02-12T09:57:47.740Z

## Table of contents

### Enumeration Members

- [BatchPutMessage](AwsIotanalyticsActions.md#batchputmessage)
- [CancelPipelineReprocessing](AwsIotanalyticsActions.md#cancelpipelinereprocessing)
- [CreateChannel](AwsIotanalyticsActions.md#createchannel)
- [CreateDataset](AwsIotanalyticsActions.md#createdataset)
- [CreateDatasetContent](AwsIotanalyticsActions.md#createdatasetcontent)
- [CreateDatastore](AwsIotanalyticsActions.md#createdatastore)
- [CreatePipeline](AwsIotanalyticsActions.md#createpipeline)
- [DeleteChannel](AwsIotanalyticsActions.md#deletechannel)
- [DeleteDataset](AwsIotanalyticsActions.md#deletedataset)
- [DeleteDatasetContent](AwsIotanalyticsActions.md#deletedatasetcontent)
- [DeleteDatastore](AwsIotanalyticsActions.md#deletedatastore)
- [DeletePipeline](AwsIotanalyticsActions.md#deletepipeline)
- [DescribeChannel](AwsIotanalyticsActions.md#describechannel)
- [DescribeDataset](AwsIotanalyticsActions.md#describedataset)
- [DescribeDatastore](AwsIotanalyticsActions.md#describedatastore)
- [DescribeLoggingOptions](AwsIotanalyticsActions.md#describeloggingoptions)
- [DescribePipeline](AwsIotanalyticsActions.md#describepipeline)
- [GetDatasetContent](AwsIotanalyticsActions.md#getdatasetcontent)
- [ListChannels](AwsIotanalyticsActions.md#listchannels)
- [ListDatasetContents](AwsIotanalyticsActions.md#listdatasetcontents)
- [ListDatasets](AwsIotanalyticsActions.md#listdatasets)
- [ListDatastores](AwsIotanalyticsActions.md#listdatastores)
- [ListPipelines](AwsIotanalyticsActions.md#listpipelines)
- [ListTagsForResource](AwsIotanalyticsActions.md#listtagsforresource)
- [PutLoggingOptions](AwsIotanalyticsActions.md#putloggingoptions)
- [RunPipelineActivity](AwsIotanalyticsActions.md#runpipelineactivity)
- [SampleChannelData](AwsIotanalyticsActions.md#samplechanneldata)
- [StartPipelineReprocessing](AwsIotanalyticsActions.md#startpipelinereprocessing)
- [TagResource](AwsIotanalyticsActions.md#tagresource)
- [UntagResource](AwsIotanalyticsActions.md#untagresource)
- [UpdateChannel](AwsIotanalyticsActions.md#updatechannel)
- [UpdateDataset](AwsIotanalyticsActions.md#updatedataset)
- [UpdateDatastore](AwsIotanalyticsActions.md#updatedatastore)
- [UpdatePipeline](AwsIotanalyticsActions.md#updatepipeline)

## Enumeration Members

### BatchPutMessage

• **BatchPutMessage** = ``"iotanalytics:BatchPutMessage"``

Puts a batch of messages into the specified channel

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html

#### Defined in

actions/iotanalytics.ts:17

___

### CancelPipelineReprocessing

• **CancelPipelineReprocessing** = ``"iotanalytics:CancelPipelineReprocessing"``

Cancels reprocessing for the specified pipeline

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CancelPipelineReprocessing.html

#### Defined in

actions/iotanalytics.ts:23

___

### CreateChannel

• **CreateChannel** = ``"iotanalytics:CreateChannel"``

Creates a channel

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateChannel.html

#### Defined in

actions/iotanalytics.ts:29

___

### CreateDataset

• **CreateDataset** = ``"iotanalytics:CreateDataset"``

Creates a dataset

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDataset.html

#### Defined in

actions/iotanalytics.ts:35

___

### CreateDatasetContent

• **CreateDatasetContent** = ``"iotanalytics:CreateDatasetContent"``

Generates content from the specified dataset (by executing the dataset actions)

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatasetContent.html

#### Defined in

actions/iotanalytics.ts:41

___

### CreateDatastore

• **CreateDatastore** = ``"iotanalytics:CreateDatastore"``

Creates a datastore

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatastore.html

#### Defined in

actions/iotanalytics.ts:47

___

### CreatePipeline

• **CreatePipeline** = ``"iotanalytics:CreatePipeline"``

Creates a pipeline

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreatePipeline.html

#### Defined in

actions/iotanalytics.ts:53

___

### DeleteChannel

• **DeleteChannel** = ``"iotanalytics:DeleteChannel"``

Deletes the specified channel

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteChannel.html

#### Defined in

actions/iotanalytics.ts:59

___

### DeleteDataset

• **DeleteDataset** = ``"iotanalytics:DeleteDataset"``

Deletes the specified dataset

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDataset.html

#### Defined in

actions/iotanalytics.ts:65

___

### DeleteDatasetContent

• **DeleteDatasetContent** = ``"iotanalytics:DeleteDatasetContent"``

Deletes the content of the specified dataset

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatasetContent.html

#### Defined in

actions/iotanalytics.ts:71

___

### DeleteDatastore

• **DeleteDatastore** = ``"iotanalytics:DeleteDatastore"``

Deletes the specified datastore

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatastore.html

#### Defined in

actions/iotanalytics.ts:77

___

### DeletePipeline

• **DeletePipeline** = ``"iotanalytics:DeletePipeline"``

Deletes the specified pipeline

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeletePipeline.html

#### Defined in

actions/iotanalytics.ts:83

___

### DescribeChannel

• **DescribeChannel** = ``"iotanalytics:DescribeChannel"``

Describes the specified channel

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeChannel.html

#### Defined in

actions/iotanalytics.ts:89

___

### DescribeDataset

• **DescribeDataset** = ``"iotanalytics:DescribeDataset"``

Describes the specified dataset

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDataset.html

#### Defined in

actions/iotanalytics.ts:95

___

### DescribeDatastore

• **DescribeDatastore** = ``"iotanalytics:DescribeDatastore"``

Describes the specified datastore

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDatastore.html

#### Defined in

actions/iotanalytics.ts:101

___

### DescribeLoggingOptions

• **DescribeLoggingOptions** = ``"iotanalytics:DescribeLoggingOptions"``

Describes logging options for the the account

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeLoggingOptions.html

#### Defined in

actions/iotanalytics.ts:107

___

### DescribePipeline

• **DescribePipeline** = ``"iotanalytics:DescribePipeline"``

Describes the specified pipeline

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribePipeline.html

#### Defined in

actions/iotanalytics.ts:113

___

### GetDatasetContent

• **GetDatasetContent** = ``"iotanalytics:GetDatasetContent"``

Gets the content of the specified dataset

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_GetDatasetContent.html

#### Defined in

actions/iotanalytics.ts:119

___

### ListChannels

• **ListChannels** = ``"iotanalytics:ListChannels"``

Lists the channels for the account

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListChannels.html

#### Defined in

actions/iotanalytics.ts:125

___

### ListDatasetContents

• **ListDatasetContents** = ``"iotanalytics:ListDatasetContents"``

Lists information about dataset contents that have been created

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatasetContents.html

#### Defined in

actions/iotanalytics.ts:131

___

### ListDatasets

• **ListDatasets** = ``"iotanalytics:ListDatasets"``

Lists the datasets for the account

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatasets.html

#### Defined in

actions/iotanalytics.ts:137

___

### ListDatastores

• **ListDatastores** = ``"iotanalytics:ListDatastores"``

Lists the datastores for the account

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatastores.html

#### Defined in

actions/iotanalytics.ts:143

___

### ListPipelines

• **ListPipelines** = ``"iotanalytics:ListPipelines"``

Lists the pipelines for the account

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListPipelines.html

#### Defined in

actions/iotanalytics.ts:149

___

### ListTagsForResource

• **ListTagsForResource** = ``"iotanalytics:ListTagsForResource"``

Lists the tags (metadata) which you have assigned to the resource

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/iotanalytics.ts:155

___

### PutLoggingOptions

• **PutLoggingOptions** = ``"iotanalytics:PutLoggingOptions"``

Puts logging options for the the account

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_PutLoggingOptions.html

#### Defined in

actions/iotanalytics.ts:161

___

### RunPipelineActivity

• **RunPipelineActivity** = ``"iotanalytics:RunPipelineActivity"``

Runs the specified pipeline activity

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_RunPipelineActivity.html

#### Defined in

actions/iotanalytics.ts:167

___

### SampleChannelData

• **SampleChannelData** = ``"iotanalytics:SampleChannelData"``

Samples the specified channel's data

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_SampleChannelData.html

#### Defined in

actions/iotanalytics.ts:173

___

### StartPipelineReprocessing

• **StartPipelineReprocessing** = ``"iotanalytics:StartPipelineReprocessing"``

Starts reprocessing for the specified pipeline

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_StartPipelineReprocessing.html

#### Defined in

actions/iotanalytics.ts:179

___

### TagResource

• **TagResource** = ``"iotanalytics:TagResource"``

Adds to or modifies the tags of the given resource. Tags are metadata which can
be used to manage a resource

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_TagResource.html

#### Defined in

actions/iotanalytics.ts:186

___

### UntagResource

• **UntagResource** = ``"iotanalytics:UntagResource"``

Removes the given tags (metadata) from the resource

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UntagResource.html

#### Defined in

actions/iotanalytics.ts:192

___

### UpdateChannel

• **UpdateChannel** = ``"iotanalytics:UpdateChannel"``

Updates the specified channel

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateChannel.html

#### Defined in

actions/iotanalytics.ts:198

___

### UpdateDataset

• **UpdateDataset** = ``"iotanalytics:UpdateDataset"``

Updates the specified dataset

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDataset.html

#### Defined in

actions/iotanalytics.ts:204

___

### UpdateDatastore

• **UpdateDatastore** = ``"iotanalytics:UpdateDatastore"``

Updates the specified datastore

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDatastore.html

#### Defined in

actions/iotanalytics.ts:210

___

### UpdatePipeline

• **UpdatePipeline** = ``"iotanalytics:UpdatePipeline"``

Updates the specified pipeline

See https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdatePipeline.html

#### Defined in

actions/iotanalytics.ts:216
