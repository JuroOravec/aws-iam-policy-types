[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMedicalImagingActions

# Enumeration: AwsMedicalImagingActions

All IAM policy actions for AWS HealthImaging (MEDICAL-IMAGING)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthimaging.html

2024-02-12T09:57:34.489Z

## Table of contents

### Enumeration Members

- [CopyImageSet](AwsMedicalImagingActions.md#copyimageset)
- [CreateDatastore](AwsMedicalImagingActions.md#createdatastore)
- [DeleteDatastore](AwsMedicalImagingActions.md#deletedatastore)
- [DeleteImageSet](AwsMedicalImagingActions.md#deleteimageset)
- [GetDICOMImportJob](AwsMedicalImagingActions.md#getdicomimportjob)
- [GetDatastore](AwsMedicalImagingActions.md#getdatastore)
- [GetImageFrame](AwsMedicalImagingActions.md#getimageframe)
- [GetImageSet](AwsMedicalImagingActions.md#getimageset)
- [GetImageSetMetadata](AwsMedicalImagingActions.md#getimagesetmetadata)
- [ListDICOMImportJobs](AwsMedicalImagingActions.md#listdicomimportjobs)
- [ListDatastores](AwsMedicalImagingActions.md#listdatastores)
- [ListImageSetVersions](AwsMedicalImagingActions.md#listimagesetversions)
- [ListTagsForResource](AwsMedicalImagingActions.md#listtagsforresource)
- [SearchImageSets](AwsMedicalImagingActions.md#searchimagesets)
- [StartDICOMImportJob](AwsMedicalImagingActions.md#startdicomimportjob)
- [TagResource](AwsMedicalImagingActions.md#tagresource)
- [UntagResource](AwsMedicalImagingActions.md#untagresource)
- [UpdateImageSetMetadata](AwsMedicalImagingActions.md#updateimagesetmetadata)

## Enumeration Members

### CopyImageSet

• **CopyImageSet** = ``"medical-imaging:CopyImageSet"``

Grants permission to copy an image set

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_CopyImageSet.html

#### Defined in

actions/medical-imaging.ts:17

___

### CreateDatastore

• **CreateDatastore** = ``"medical-imaging:CreateDatastore"``

Grants permission to create a data store to ingest imaging data

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_CreateDatastore.html

#### Defined in

actions/medical-imaging.ts:23

___

### DeleteDatastore

• **DeleteDatastore** = ``"medical-imaging:DeleteDatastore"``

Grants permission to delete a data store

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_DeleteDatastore.html

#### Defined in

actions/medical-imaging.ts:29

___

### DeleteImageSet

• **DeleteImageSet** = ``"medical-imaging:DeleteImageSet"``

Grants permission to delete an image set

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_DeleteImageSet.html

#### Defined in

actions/medical-imaging.ts:35

___

### GetDICOMImportJob

• **GetDICOMImportJob** = ``"medical-imaging:GetDICOMImportJob"``

Grants permission to get an import job's properties

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_GetDICOMImportJob.html

#### Defined in

actions/medical-imaging.ts:41

___

### GetDatastore

• **GetDatastore** = ``"medical-imaging:GetDatastore"``

Grants permission to get data store properties

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_GetDatastore.html

#### Defined in

actions/medical-imaging.ts:47

___

### GetImageFrame

• **GetImageFrame** = ``"medical-imaging:GetImageFrame"``

Grants permission to get image frame properties

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_GetImageFrame.html

#### Defined in

actions/medical-imaging.ts:53

___

### GetImageSet

• **GetImageSet** = ``"medical-imaging:GetImageSet"``

Grants permission to get image set properties

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_GetImageSet.html

#### Defined in

actions/medical-imaging.ts:59

___

### GetImageSetMetadata

• **GetImageSetMetadata** = ``"medical-imaging:GetImageSetMetadata"``

Grants permission to get image set metadata properties

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_GetImageSetMetadata.html

#### Defined in

actions/medical-imaging.ts:65

___

### ListDICOMImportJobs

• **ListDICOMImportJobs** = ``"medical-imaging:ListDICOMImportJobs"``

Grants permission to list import jobs for a data store

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_ListDICOMImportJobs.html

#### Defined in

actions/medical-imaging.ts:71

___

### ListDatastores

• **ListDatastores** = ``"medical-imaging:ListDatastores"``

Grants permission to list data stores

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_ListDatastores.html

#### Defined in

actions/medical-imaging.ts:77

___

### ListImageSetVersions

• **ListImageSetVersions** = ``"medical-imaging:ListImageSetVersions"``

Grants permission to list versions of an image set

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_ListImageSetVersions.html

#### Defined in

actions/medical-imaging.ts:83

___

### ListTagsForResource

• **ListTagsForResource** = ``"medical-imaging:ListTagsForResource"``

Grants permission to list tags for a medical imaging resource

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/medical-imaging.ts:89

___

### SearchImageSets

• **SearchImageSets** = ``"medical-imaging:SearchImageSets"``

Grants permission to search image sets

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_SearchImageSets.html

#### Defined in

actions/medical-imaging.ts:95

___

### StartDICOMImportJob

• **StartDICOMImportJob** = ``"medical-imaging:StartDICOMImportJob"``

Grants permission to start a DICOM import job

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_StartDICOMImportJob.html

#### Defined in

actions/medical-imaging.ts:101

___

### TagResource

• **TagResource** = ``"medical-imaging:TagResource"``

Grants permission to add tags to a medical imaging resource

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_TagResource.html

#### Defined in

actions/medical-imaging.ts:107

___

### UntagResource

• **UntagResource** = ``"medical-imaging:UntagResource"``

Grants permission to remove tags from a medical imaging resource

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_UntagResource.html

#### Defined in

actions/medical-imaging.ts:113

___

### UpdateImageSetMetadata

• **UpdateImageSetMetadata** = ``"medical-imaging:UpdateImageSetMetadata"``

Grants permission to update image set metadata properties

See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_UpdateImageSetMetadata.html

#### Defined in

actions/medical-imaging.ts:119
