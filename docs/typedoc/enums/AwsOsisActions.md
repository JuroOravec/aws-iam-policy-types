[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsOsisActions

# Enumeration: AwsOsisActions

All IAM policy actions for Amazon OpenSearch Ingestion (OSIS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchingestion.html

2024-02-12T09:58:31.652Z

## Table of contents

### Enumeration Members

- [CreatePipeline](AwsOsisActions.md#createpipeline)
- [DeletePipeline](AwsOsisActions.md#deletepipeline)
- [GetPipeline](AwsOsisActions.md#getpipeline)
- [GetPipelineBlueprint](AwsOsisActions.md#getpipelineblueprint)
- [GetPipelineChangeProgress](AwsOsisActions.md#getpipelinechangeprogress)
- [Ingest](AwsOsisActions.md#ingest)
- [ListPipelineBlueprints](AwsOsisActions.md#listpipelineblueprints)
- [ListPipelines](AwsOsisActions.md#listpipelines)
- [ListTagsForResource](AwsOsisActions.md#listtagsforresource)
- [StartPipeline](AwsOsisActions.md#startpipeline)
- [StopPipeline](AwsOsisActions.md#stoppipeline)
- [TagResource](AwsOsisActions.md#tagresource)
- [UntagResource](AwsOsisActions.md#untagresource)
- [UpdatePipeline](AwsOsisActions.md#updatepipeline)
- [ValidatePipeline](AwsOsisActions.md#validatepipeline)

## Enumeration Members

### CreatePipeline

• **CreatePipeline** = ``"osis:CreatePipeline"``

Grants permission to create an OpenSearch Ingestion pipeline

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_CreatePipeline.html

#### Defined in

actions/osis.ts:17

___

### DeletePipeline

• **DeletePipeline** = ``"osis:DeletePipeline"``

Grants permission to delete an OpenSearch Ingestion pipeline

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_DeletePipeline.html

#### Defined in

actions/osis.ts:23

___

### GetPipeline

• **GetPipeline** = ``"osis:GetPipeline"``

Grants permission to retrieve configuration information for an OpenSearch Inges
tion pipeline

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_GetPipeline.html

#### Defined in

actions/osis.ts:30

___

### GetPipelineBlueprint

• **GetPipelineBlueprint** = ``"osis:GetPipelineBlueprint"``

Grants permission to get the contents of an OpenSearch Ingestion pipeline bluep
rint

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_GetPipelineBlueprint.html

#### Defined in

actions/osis.ts:37

___

### GetPipelineChangeProgress

• **GetPipelineChangeProgress** = ``"osis:GetPipelineChangeProgress"``

Grants permission to get granular information about the status of an OpenSearch
Ingestion pipeline

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_GetPipelineChangeProgress.html

#### Defined in

actions/osis.ts:44

___

### Ingest

• **Ingest** = ``"osis:Ingest"``

Grants permission to ingest data through an OpenSearch Ingestion pipeline

See https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configure-client.html

#### Defined in

actions/osis.ts:50

___

### ListPipelineBlueprints

• **ListPipelineBlueprints** = ``"osis:ListPipelineBlueprints"``

Grants permission to list the names of available blueprints for an OpenSearch I
ngestion pipeline configuration

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ListPipelineBlueprints.html

#### Defined in

actions/osis.ts:57

___

### ListPipelines

• **ListPipelines** = ``"osis:ListPipelines"``

Grants permission to list basic configuration for each OpenSearch Ingestion pip
eline in the current account and Region

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ListPipelines.html

#### Defined in

actions/osis.ts:64

___

### ListTagsForResource

• **ListTagsForResource** = ``"osis:ListTagsForResource"``

Grants permission to list all resource tags associated with an OpenSearch Inges
tion pipeline

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ListTagsForResource.html

#### Defined in

actions/osis.ts:71

___

### StartPipeline

• **StartPipeline** = ``"osis:StartPipeline"``

Grants permission to start an OpenSearch Ingestion pipeline

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_StartPipeline.html

#### Defined in

actions/osis.ts:77

___

### StopPipeline

• **StopPipeline** = ``"osis:StopPipeline"``

Grants permission to stop an OpenSearch Ingestion pipeline

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_StopPipeline.html

#### Defined in

actions/osis.ts:83

___

### TagResource

• **TagResource** = ``"osis:TagResource"``

Grants permission to attach resource tags to an OpenSearch Ingestion pipeline

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_TagResource.html

#### Defined in

actions/osis.ts:89

___

### UntagResource

• **UntagResource** = ``"osis:UntagResource"``

Grants permission to remove resource tags from an OpenSearch Ingestion Service
pipeline

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_UntagResource.html

#### Defined in

actions/osis.ts:96

___

### UpdatePipeline

• **UpdatePipeline** = ``"osis:UpdatePipeline"``

Grants permission to modify the configuration of an OpenSearch Ingestion pipeli
ne

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_UpdatePipeline.html

#### Defined in

actions/osis.ts:103

___

### ValidatePipeline

• **ValidatePipeline** = ``"osis:ValidatePipeline"``

Grants permission to validate the configuration of an OpenSearch Ingestion pipe
line

See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ValidatePipeline.html

#### Defined in

actions/osis.ts:110
