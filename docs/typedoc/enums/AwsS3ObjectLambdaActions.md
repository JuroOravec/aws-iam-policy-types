[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsS3ObjectLambdaActions

# Enumeration: AwsS3ObjectLambdaActions

All IAM policy actions for Amazon S3 Object Lambda (S3-OBJECT-LAMBDA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3objectlambda.html

2024-02-12T09:59:04.977Z

## Table of contents

### Enumeration Members

- [AbortMultipartUpload](AwsS3ObjectLambdaActions.md#abortmultipartupload)
- [DeleteObject](AwsS3ObjectLambdaActions.md#deleteobject)
- [DeleteObjectTagging](AwsS3ObjectLambdaActions.md#deleteobjecttagging)
- [DeleteObjectVersion](AwsS3ObjectLambdaActions.md#deleteobjectversion)
- [DeleteObjectVersionTagging](AwsS3ObjectLambdaActions.md#deleteobjectversiontagging)
- [GetObject](AwsS3ObjectLambdaActions.md#getobject)
- [GetObjectAcl](AwsS3ObjectLambdaActions.md#getobjectacl)
- [GetObjectLegalHold](AwsS3ObjectLambdaActions.md#getobjectlegalhold)
- [GetObjectRetention](AwsS3ObjectLambdaActions.md#getobjectretention)
- [GetObjectTagging](AwsS3ObjectLambdaActions.md#getobjecttagging)
- [GetObjectVersion](AwsS3ObjectLambdaActions.md#getobjectversion)
- [GetObjectVersionAcl](AwsS3ObjectLambdaActions.md#getobjectversionacl)
- [GetObjectVersionTagging](AwsS3ObjectLambdaActions.md#getobjectversiontagging)
- [ListBucket](AwsS3ObjectLambdaActions.md#listbucket)
- [ListBucketMultipartUploads](AwsS3ObjectLambdaActions.md#listbucketmultipartuploads)
- [ListBucketVersions](AwsS3ObjectLambdaActions.md#listbucketversions)
- [ListMultipartUploadParts](AwsS3ObjectLambdaActions.md#listmultipartuploadparts)
- [PutObject](AwsS3ObjectLambdaActions.md#putobject)
- [PutObjectAcl](AwsS3ObjectLambdaActions.md#putobjectacl)
- [PutObjectLegalHold](AwsS3ObjectLambdaActions.md#putobjectlegalhold)
- [PutObjectRetention](AwsS3ObjectLambdaActions.md#putobjectretention)
- [PutObjectTagging](AwsS3ObjectLambdaActions.md#putobjecttagging)
- [PutObjectVersionAcl](AwsS3ObjectLambdaActions.md#putobjectversionacl)
- [PutObjectVersionTagging](AwsS3ObjectLambdaActions.md#putobjectversiontagging)
- [RestoreObject](AwsS3ObjectLambdaActions.md#restoreobject)
- [WriteGetObjectResponse](AwsS3ObjectLambdaActions.md#writegetobjectresponse)

## Enumeration Members

### AbortMultipartUpload

• **AbortMultipartUpload** = ``"s3-object-lambda:AbortMultipartUpload"``

Grants permission to abort a multipart upload

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html

#### Defined in

actions/s3-object-lambda.ts:17

___

### DeleteObject

• **DeleteObject** = ``"s3-object-lambda:DeleteObject"``

Grants permission to remove the null version of an object and insert a delete m
arker, which becomes the current version of the object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html

#### Defined in

actions/s3-object-lambda.ts:24

___

### DeleteObjectTagging

• **DeleteObjectTagging** = ``"s3-object-lambda:DeleteObjectTagging"``

Grants permission to use the tagging subresource to remove the entire tag set f
rom the specified object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html

#### Defined in

actions/s3-object-lambda.ts:31

___

### DeleteObjectVersion

• **DeleteObjectVersion** = ``"s3-object-lambda:DeleteObjectVersion"``

Grants permission to remove a specific version of an object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html

#### Defined in

actions/s3-object-lambda.ts:37

___

### DeleteObjectVersionTagging

• **DeleteObjectVersionTagging** = ``"s3-object-lambda:DeleteObjectVersionTagging"``

Grants permission to remove the entire tag set for a specific version of the ob
ject

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html

#### Defined in

actions/s3-object-lambda.ts:44

___

### GetObject

• **GetObject** = ``"s3-object-lambda:GetObject"``

Grants permission to retrieve objects from Amazon S3

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html

#### Defined in

actions/s3-object-lambda.ts:50

___

### GetObjectAcl

• **GetObjectAcl** = ``"s3-object-lambda:GetObjectAcl"``

Grants permission to return the access control list (ACL) of an object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html

#### Defined in

actions/s3-object-lambda.ts:56

___

### GetObjectLegalHold

• **GetObjectLegalHold** = ``"s3-object-lambda:GetObjectLegalHold"``

Grants permission to get an object's current Legal Hold status

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html

#### Defined in

actions/s3-object-lambda.ts:62

___

### GetObjectRetention

• **GetObjectRetention** = ``"s3-object-lambda:GetObjectRetention"``

Grants permission to retrieve the retention settings for an object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html

#### Defined in

actions/s3-object-lambda.ts:68

___

### GetObjectTagging

• **GetObjectTagging** = ``"s3-object-lambda:GetObjectTagging"``

Grants permission to return the tag set of an object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html

#### Defined in

actions/s3-object-lambda.ts:74

___

### GetObjectVersion

• **GetObjectVersion** = ``"s3-object-lambda:GetObjectVersion"``

Grants permission to retrieve a specific version of an object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html

#### Defined in

actions/s3-object-lambda.ts:80

___

### GetObjectVersionAcl

• **GetObjectVersionAcl** = ``"s3-object-lambda:GetObjectVersionAcl"``

Grants permission to return the access control list (ACL) of a specific object
version

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html

#### Defined in

actions/s3-object-lambda.ts:87

___

### GetObjectVersionTagging

• **GetObjectVersionTagging** = ``"s3-object-lambda:GetObjectVersionTagging"``

Grants permission to return the tag set for a specific version of the object

See https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html

#### Defined in

actions/s3-object-lambda.ts:93

___

### ListBucket

• **ListBucket** = ``"s3-object-lambda:ListBucket"``

Grants permission to list some or all of the objects in an Amazon S3 bucket (up
to 1000)

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html

#### Defined in

actions/s3-object-lambda.ts:100

___

### ListBucketMultipartUploads

• **ListBucketMultipartUploads** = ``"s3-object-lambda:ListBucketMultipartUploads"``

Grants permission to list in-progress multipart uploads

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html

#### Defined in

actions/s3-object-lambda.ts:106

___

### ListBucketVersions

• **ListBucketVersions** = ``"s3-object-lambda:ListBucketVersions"``

Grants permission to list metadata about all the versions of objects in an Amaz
on S3 bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html

#### Defined in

actions/s3-object-lambda.ts:113

___

### ListMultipartUploadParts

• **ListMultipartUploadParts** = ``"s3-object-lambda:ListMultipartUploadParts"``

Grants permission to list the parts that have been uploaded for a specific mult
ipart upload

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html

#### Defined in

actions/s3-object-lambda.ts:120

___

### PutObject

• **PutObject** = ``"s3-object-lambda:PutObject"``

Grants permission to add an object to a bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html

#### Defined in

actions/s3-object-lambda.ts:126

___

### PutObjectAcl

• **PutObjectAcl** = ``"s3-object-lambda:PutObjectAcl"``

Grants permission to set the access control list (ACL) permissions for new or e
xisting objects in an S3 bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html

#### Defined in

actions/s3-object-lambda.ts:133

___

### PutObjectLegalHold

• **PutObjectLegalHold** = ``"s3-object-lambda:PutObjectLegalHold"``

Grants permission to apply a Legal Hold configuration to the specified object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html

#### Defined in

actions/s3-object-lambda.ts:139

___

### PutObjectRetention

• **PutObjectRetention** = ``"s3-object-lambda:PutObjectRetention"``

Grants permission to place an Object Retention configuration on an object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html

#### Defined in

actions/s3-object-lambda.ts:145

___

### PutObjectTagging

• **PutObjectTagging** = ``"s3-object-lambda:PutObjectTagging"``

Grants permission to set the supplied tag-set to an object that already exists
in a bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html

#### Defined in

actions/s3-object-lambda.ts:152

___

### PutObjectVersionAcl

• **PutObjectVersionAcl** = ``"s3-object-lambda:PutObjectVersionAcl"``

Grants permission to use the acl subresource to set the access control list (AC
L) permissions for an object that already exists in a bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html

#### Defined in

actions/s3-object-lambda.ts:159

___

### PutObjectVersionTagging

• **PutObjectVersionTagging** = ``"s3-object-lambda:PutObjectVersionTagging"``

Grants permission to set the supplied tag-set for a specific version of an obje
ct

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html

#### Defined in

actions/s3-object-lambda.ts:166

___

### RestoreObject

• **RestoreObject** = ``"s3-object-lambda:RestoreObject"``

Grants permission to restore an archived copy of an object back into Amazon S3

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html

#### Defined in

actions/s3-object-lambda.ts:172

___

### WriteGetObjectResponse

• **WriteGetObjectResponse** = ``"s3-object-lambda:WriteGetObjectResponse"``

Grants permission to provide data for GetObject requests send to S3 Object Lamb
da

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_WriteGetObjectResponse.html

#### Defined in

actions/s3-object-lambda.ts:179
