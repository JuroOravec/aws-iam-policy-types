// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon S3 Object Lambda (S3-OBJECT-LAMBDA)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3objectlambda.html
 *
 * 2025-02-24T21:49:34.113Z
 */
export enum AwsS3ObjectLambdaActions {
  /**
   * Grants permission to abort a multipart upload
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
   */
  AbortMultipartUpload = 's3-object-lambda:AbortMultipartUpload',
  /**
   * Grants permission to remove the null version of an object and insert a delete m
   * arker, which becomes the current version of the object
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   */
  DeleteObject = 's3-object-lambda:DeleteObject',
  /**
   * Grants permission to use the tagging subresource to remove the entire tag set f
   * rom the specified object
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   */
  DeleteObjectTagging = 's3-object-lambda:DeleteObjectTagging',
  /**
   * Grants permission to remove a specific version of an object
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   */
  DeleteObjectVersion = 's3-object-lambda:DeleteObjectVersion',
  /**
   * Grants permission to remove the entire tag set for a specific version of the ob
   * ject
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   */
  DeleteObjectVersionTagging = 's3-object-lambda:DeleteObjectVersionTagging',
  /**
   * Grants permission to retrieve objects from Amazon S3
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   */
  GetObject = 's3-object-lambda:GetObject',
  /**
   * Grants permission to return the access control list (ACL) of an object
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   */
  GetObjectAcl = 's3-object-lambda:GetObjectAcl',
  /**
   * Grants permission to get an object's current Legal Hold status
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html
   */
  GetObjectLegalHold = 's3-object-lambda:GetObjectLegalHold',
  /**
   * Grants permission to retrieve the retention settings for an object
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html
   */
  GetObjectRetention = 's3-object-lambda:GetObjectRetention',
  /**
   * Grants permission to return the tag set of an object
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html
   */
  GetObjectTagging = 's3-object-lambda:GetObjectTagging',
  /**
   * Grants permission to retrieve a specific version of an object
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   */
  GetObjectVersion = 's3-object-lambda:GetObjectVersion',
  /**
   * Grants permission to return the access control list (ACL) of a specific object
   * version
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   */
  GetObjectVersionAcl = 's3-object-lambda:GetObjectVersionAcl',
  /**
   * Grants permission to return the tag set for a specific version of the object
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  GetObjectVersionTagging = 's3-object-lambda:GetObjectVersionTagging',
  /**
   * Grants permission to list some or all of the objects in an Amazon S3 bucket (up
   * to 1000)
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
   */
  ListBucket = 's3-object-lambda:ListBucket',
  /**
   * Grants permission to list in-progress multipart uploads
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html
   */
  ListBucketMultipartUploads = 's3-object-lambda:ListBucketMultipartUploads',
  /**
   * Grants permission to list metadata about all the versions of objects in an Amaz
   * on S3 bucket
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html
   */
  ListBucketVersions = 's3-object-lambda:ListBucketVersions',
  /**
   * Grants permission to list the parts that have been uploaded for a specific mult
   * ipart upload
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
   */
  ListMultipartUploadParts = 's3-object-lambda:ListMultipartUploadParts',
  /**
   * Grants permission to add an object to a bucket
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
   */
  PutObject = 's3-object-lambda:PutObject',
  /**
   * Grants permission to set the access control list (ACL) permissions for new or e
   * xisting objects in an S3 bucket
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   */
  PutObjectAcl = 's3-object-lambda:PutObjectAcl',
  /**
   * Grants permission to apply a Legal Hold configuration to the specified object
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html
   */
  PutObjectLegalHold = 's3-object-lambda:PutObjectLegalHold',
  /**
   * Grants permission to place an Object Retention configuration on an object
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html
   */
  PutObjectRetention = 's3-object-lambda:PutObjectRetention',
  /**
   * Grants permission to set the supplied tag-set to an object that already exists
   * in a bucket
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   */
  PutObjectTagging = 's3-object-lambda:PutObjectTagging',
  /**
   * Grants permission to use the acl subresource to set the access control list (AC
   * L) permissions for an object that already exists in a bucket
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   */
  PutObjectVersionAcl = 's3-object-lambda:PutObjectVersionAcl',
  /**
   * Grants permission to set the supplied tag-set for a specific version of an obje
   * ct
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   */
  PutObjectVersionTagging = 's3-object-lambda:PutObjectVersionTagging',
  /**
   * Grants permission to restore an archived copy of an object back into Amazon S3
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html
   */
  RestoreObject = 's3-object-lambda:RestoreObject',
  /**
   * Grants permission to provide data for GetObject requests send to S3 Object Lamb
   * da
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/API_WriteGetObjectResponse.html
   */
  WriteGetObjectResponse = 's3-object-lambda:WriteGetObjectResponse',
}
