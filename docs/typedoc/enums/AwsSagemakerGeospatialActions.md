[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSagemakerGeospatialActions

# Enumeration: AwsSagemakerGeospatialActions

All IAM policy actions for Amazon SageMaker geospatial capabilities (SAGEMAKER-GEOSPATIAL)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemakergeospatialcapabilities.html

2024-02-12T09:59:07.075Z

## Table of contents

### Enumeration Members

- [DeleteEarthObservationJob](AwsSagemakerGeospatialActions.md#deleteearthobservationjob)
- [DeleteVectorEnrichmentJob](AwsSagemakerGeospatialActions.md#deletevectorenrichmentjob)
- [ExportEarthObservationJob](AwsSagemakerGeospatialActions.md#exportearthobservationjob)
- [ExportVectorEnrichmentJob](AwsSagemakerGeospatialActions.md#exportvectorenrichmentjob)
- [GetEarthObservationJob](AwsSagemakerGeospatialActions.md#getearthobservationjob)
- [GetRasterDataCollection](AwsSagemakerGeospatialActions.md#getrasterdatacollection)
- [GetTile](AwsSagemakerGeospatialActions.md#gettile)
- [GetVectorEnrichmentJob](AwsSagemakerGeospatialActions.md#getvectorenrichmentjob)
- [ListEarthObservationJobs](AwsSagemakerGeospatialActions.md#listearthobservationjobs)
- [ListRasterDataCollections](AwsSagemakerGeospatialActions.md#listrasterdatacollections)
- [ListTagsForResource](AwsSagemakerGeospatialActions.md#listtagsforresource)
- [ListVectorEnrichmentJobs](AwsSagemakerGeospatialActions.md#listvectorenrichmentjobs)
- [SearchRasterDataCollection](AwsSagemakerGeospatialActions.md#searchrasterdatacollection)
- [StartEarthObservationJob](AwsSagemakerGeospatialActions.md#startearthobservationjob)
- [StartVectorEnrichmentJob](AwsSagemakerGeospatialActions.md#startvectorenrichmentjob)
- [StopEarthObservationJob](AwsSagemakerGeospatialActions.md#stopearthobservationjob)
- [StopVectorEnrichmentJob](AwsSagemakerGeospatialActions.md#stopvectorenrichmentjob)
- [TagResource](AwsSagemakerGeospatialActions.md#tagresource)
- [UntagResource](AwsSagemakerGeospatialActions.md#untagresource)

## Enumeration Members

### DeleteEarthObservationJob

• **DeleteEarthObservationJob** = ``"sagemaker-geospatial:DeleteEarthObservationJob"``

Grants permission to the DeleteEarthObservationJob operation which deletes an e
xisting earth observation job

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_DeleteEarthObservationJob.html

#### Defined in

actions/sagemaker-geospatial.ts:18

___

### DeleteVectorEnrichmentJob

• **DeleteVectorEnrichmentJob** = ``"sagemaker-geospatial:DeleteVectorEnrichmentJob"``

Grants permission to the DeleteVectorEnrichmentJob operation which deletes an e
xisting vector enrichment job

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_DeleteVectorEnrichmentJob.html

#### Defined in

actions/sagemaker-geospatial.ts:25

___

### ExportEarthObservationJob

• **ExportEarthObservationJob** = ``"sagemaker-geospatial:ExportEarthObservationJob"``

Grants permission to copy results of an earth observation job to an S3 location

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ExportEarthObservationJob.html

#### Defined in

actions/sagemaker-geospatial.ts:31

___

### ExportVectorEnrichmentJob

• **ExportVectorEnrichmentJob** = ``"sagemaker-geospatial:ExportVectorEnrichmentJob"``

Grants permission to copy results of an VectorEnrichmentJob to an S3 location

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ExportVectorEnrichmentJob.html

#### Defined in

actions/sagemaker-geospatial.ts:37

___

### GetEarthObservationJob

• **GetEarthObservationJob** = ``"sagemaker-geospatial:GetEarthObservationJob"``

Grants permission to return details about the earth observation job

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_GetEarthObservationJob.html

#### Defined in

actions/sagemaker-geospatial.ts:43

___

### GetRasterDataCollection

• **GetRasterDataCollection** = ``"sagemaker-geospatial:GetRasterDataCollection"``

Grants permission to return details about the raster data collection

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_GetRasterDataCollection.html

#### Defined in

actions/sagemaker-geospatial.ts:49

___

### GetTile

• **GetTile** = ``"sagemaker-geospatial:GetTile"``

Grants permission to get the tile of an earth observation job

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_GetTile.html

#### Defined in

actions/sagemaker-geospatial.ts:55

___

### GetVectorEnrichmentJob

• **GetVectorEnrichmentJob** = ``"sagemaker-geospatial:GetVectorEnrichmentJob"``

Grants permission to return details about the vector enrichment job

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_GetVectorEnrichmentJob.html

#### Defined in

actions/sagemaker-geospatial.ts:61

___

### ListEarthObservationJobs

• **ListEarthObservationJobs** = ``"sagemaker-geospatial:ListEarthObservationJobs"``

Grants permission to return an array of earth observation jobs associated with
the current account

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ListEarthObservationJobs.html

#### Defined in

actions/sagemaker-geospatial.ts:68

___

### ListRasterDataCollections

• **ListRasterDataCollections** = ``"sagemaker-geospatial:ListRasterDataCollections"``

Grants permission to return an array of aster data collections associated with
the given model name

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ListRasterDataCollections.html

#### Defined in

actions/sagemaker-geospatial.ts:75

___

### ListTagsForResource

• **ListTagsForResource** = ``"sagemaker-geospatial:ListTagsForResource"``

Grants permission to lists tag for an SageMaker Geospatial resource

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ListTagsForResource.html

#### Defined in

actions/sagemaker-geospatial.ts:81

___

### ListVectorEnrichmentJobs

• **ListVectorEnrichmentJobs** = ``"sagemaker-geospatial:ListVectorEnrichmentJobs"``

Grants permission to return an array of vector enrichment jobs associated with
the current account

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_ListVectorEnrichmentJobs.html

#### Defined in

actions/sagemaker-geospatial.ts:88

___

### SearchRasterDataCollection

• **SearchRasterDataCollection** = ``"sagemaker-geospatial:SearchRasterDataCollection"``

Grants permission to query raster data collections

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_SearchRasterDataCollection.html

#### Defined in

actions/sagemaker-geospatial.ts:94

___

### StartEarthObservationJob

• **StartEarthObservationJob** = ``"sagemaker-geospatial:StartEarthObservationJob"``

Grants permission to the StartEarthObservationJob operation which starts a new
earth observation job to your account

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_StartEarthObservationJob.html

#### Defined in

actions/sagemaker-geospatial.ts:101

___

### StartVectorEnrichmentJob

• **StartVectorEnrichmentJob** = ``"sagemaker-geospatial:StartVectorEnrichmentJob"``

Grants permission to the StartVectorEnrichmentJob operation which starts a new
vector enrichment job to your account

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_StartVectorEnrichmentJob.html

#### Defined in

actions/sagemaker-geospatial.ts:108

___

### StopEarthObservationJob

• **StopEarthObservationJob** = ``"sagemaker-geospatial:StopEarthObservationJob"``

Grants permission to the StopEarthObservationJob operation which stops an exist
ing earth observation job

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_StopEarthObservationJob.html

#### Defined in

actions/sagemaker-geospatial.ts:115

___

### StopVectorEnrichmentJob

• **StopVectorEnrichmentJob** = ``"sagemaker-geospatial:StopVectorEnrichmentJob"``

Grants permission to the StopVectorEnrichmentJob operation which stops an exist
ing vector enrichment job

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_StopVectorEnrichmentJob.html

#### Defined in

actions/sagemaker-geospatial.ts:122

___

### TagResource

• **TagResource** = ``"sagemaker-geospatial:TagResource"``

Grants permission to tag an SageMaker Geospatial resource

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_TagResource.html

#### Defined in

actions/sagemaker-geospatial.ts:128

___

### UntagResource

• **UntagResource** = ``"sagemaker-geospatial:UntagResource"``

Grants permission to untag an SageMaker Geospatial resource

See https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_UntagResource.html

#### Defined in

actions/sagemaker-geospatial.ts:134
