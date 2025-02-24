// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS HealthImaging (MEDICAL-IMAGING)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthimaging.html
 *
 * 2025-02-24T21:48:10.746Z
 */
export enum AwsMedicalImagingActions {
  /**
   * Grants permission to copy an image set
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_CopyImageSet.html
   */
  CopyImageSet = 'medical-imaging:CopyImageSet',
  /**
   * Grants permission to create a data store to ingest imaging data
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_CreateDatastore.html
   */
  CreateDatastore = 'medical-imaging:CreateDatastore',
  /**
   * Grants permission to delete a data store
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_DeleteDatastore.html
   */
  DeleteDatastore = 'medical-imaging:DeleteDatastore',
  /**
   * Grants permission to delete an image set
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_DeleteImageSet.html
   */
  DeleteImageSet = 'medical-imaging:DeleteImageSet',
  /**
   * Grants permission to get an import job's properties
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_GetDICOMImportJob.html
   */
  GetDICOMImportJob = 'medical-imaging:GetDICOMImportJob',
  /**
   * Grants permission to get dicom instance in dcm format
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dicom_GetDICOMInstance.html
   */
  GetDICOMInstance = 'medical-imaging:GetDICOMInstance',
  /**
   * Grants permission to get dicom instance frames in format requested by the custo
   * mer
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dicom_GetDICOMInstanceFrames.html
   */
  GetDICOMInstanceFrames = 'medical-imaging:GetDICOMInstanceFrames',
  /**
   * Grants permission to get dicom instance metadata in DICOM JSON format
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dicom_GetDICOMInstanceMetadata.html
   */
  GetDICOMInstanceMetadata = 'medical-imaging:GetDICOMInstanceMetadata',
  /**
   * Grants permission to get data store properties
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_GetDatastore.html
   */
  GetDatastore = 'medical-imaging:GetDatastore',
  /**
   * Grants permission to get image frame properties
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_GetImageFrame.html
   */
  GetImageFrame = 'medical-imaging:GetImageFrame',
  /**
   * Grants permission to get image set properties
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_GetImageSet.html
   */
  GetImageSet = 'medical-imaging:GetImageSet',
  /**
   * Grants permission to get image set metadata properties
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_GetImageSetMetadata.html
   */
  GetImageSetMetadata = 'medical-imaging:GetImageSetMetadata',
  /**
   * Grants permission to list import jobs for a data store
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_ListDICOMImportJobs.html
   */
  ListDICOMImportJobs = 'medical-imaging:ListDICOMImportJobs',
  /**
   * Grants permission to list data stores
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_ListDatastores.html
   */
  ListDatastores = 'medical-imaging:ListDatastores',
  /**
   * Grants permission to list versions of an image set
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_ListImageSetVersions.html
   */
  ListImageSetVersions = 'medical-imaging:ListImageSetVersions',
  /**
   * Grants permission to list tags for a medical imaging resource
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'medical-imaging:ListTagsForResource',
  /**
   * Grants permission to search image sets
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_SearchImageSets.html
   */
  SearchImageSets = 'medical-imaging:SearchImageSets',
  /**
   * Grants permission to start a DICOM import job
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_StartDICOMImportJob.html
   */
  StartDICOMImportJob = 'medical-imaging:StartDICOMImportJob',
  /**
   * Grants permission to add tags to a medical imaging resource
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_TagResource.html
   */
  TagResource = 'medical-imaging:TagResource',
  /**
   * Grants permission to remove tags from a medical imaging resource
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'medical-imaging:UntagResource',
  /**
   * Grants permission to update image set metadata properties
   *
   * See https://docs.aws.amazon.com/healthimaging/latest/APIReference/API_dataplane_UpdateImageSetMetadata.html
   */
  UpdateImageSetMetadata = 'medical-imaging:UpdateImageSetMetadata',
}
