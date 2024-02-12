[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsS3OutpostsActions

# Enumeration: AwsS3OutpostsActions

All IAM policy actions for Amazon S3 on Outposts (S3-OUTPOSTS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html

2024-02-12T09:59:05.553Z

## Table of contents

### Enumeration Members

- [AbortMultipartUpload](AwsS3OutpostsActions.md#abortmultipartupload)
- [CreateAccessPoint](AwsS3OutpostsActions.md#createaccesspoint)
- [CreateBucket](AwsS3OutpostsActions.md#createbucket)
- [CreateEndpoint](AwsS3OutpostsActions.md#createendpoint)
- [DeleteAccessPoint](AwsS3OutpostsActions.md#deleteaccesspoint)
- [DeleteAccessPointPolicy](AwsS3OutpostsActions.md#deleteaccesspointpolicy)
- [DeleteBucket](AwsS3OutpostsActions.md#deletebucket)
- [DeleteBucketPolicy](AwsS3OutpostsActions.md#deletebucketpolicy)
- [DeleteEndpoint](AwsS3OutpostsActions.md#deleteendpoint)
- [DeleteObject](AwsS3OutpostsActions.md#deleteobject)
- [DeleteObjectTagging](AwsS3OutpostsActions.md#deleteobjecttagging)
- [DeleteObjectVersion](AwsS3OutpostsActions.md#deleteobjectversion)
- [DeleteObjectVersionTagging](AwsS3OutpostsActions.md#deleteobjectversiontagging)
- [GetAccessPoint](AwsS3OutpostsActions.md#getaccesspoint)
- [GetAccessPointPolicy](AwsS3OutpostsActions.md#getaccesspointpolicy)
- [GetBucket](AwsS3OutpostsActions.md#getbucket)
- [GetBucketPolicy](AwsS3OutpostsActions.md#getbucketpolicy)
- [GetBucketTagging](AwsS3OutpostsActions.md#getbuckettagging)
- [GetBucketVersioning](AwsS3OutpostsActions.md#getbucketversioning)
- [GetLifecycleConfiguration](AwsS3OutpostsActions.md#getlifecycleconfiguration)
- [GetObject](AwsS3OutpostsActions.md#getobject)
- [GetObjectTagging](AwsS3OutpostsActions.md#getobjecttagging)
- [GetObjectVersion](AwsS3OutpostsActions.md#getobjectversion)
- [GetObjectVersionForReplication](AwsS3OutpostsActions.md#getobjectversionforreplication)
- [GetObjectVersionTagging](AwsS3OutpostsActions.md#getobjectversiontagging)
- [GetReplicationConfiguration](AwsS3OutpostsActions.md#getreplicationconfiguration)
- [ListAccessPoints](AwsS3OutpostsActions.md#listaccesspoints)
- [ListBucket](AwsS3OutpostsActions.md#listbucket)
- [ListBucketMultipartUploads](AwsS3OutpostsActions.md#listbucketmultipartuploads)
- [ListBucketVersions](AwsS3OutpostsActions.md#listbucketversions)
- [ListEndpoints](AwsS3OutpostsActions.md#listendpoints)
- [ListMultipartUploadParts](AwsS3OutpostsActions.md#listmultipartuploadparts)
- [ListOutpostsWithS3](AwsS3OutpostsActions.md#listoutpostswiths3)
- [ListRegionalBuckets](AwsS3OutpostsActions.md#listregionalbuckets)
- [ListSharedEndpoints](AwsS3OutpostsActions.md#listsharedendpoints)
- [PutAccessPointPolicy](AwsS3OutpostsActions.md#putaccesspointpolicy)
- [PutBucketPolicy](AwsS3OutpostsActions.md#putbucketpolicy)
- [PutBucketTagging](AwsS3OutpostsActions.md#putbuckettagging)
- [PutBucketVersioning](AwsS3OutpostsActions.md#putbucketversioning)
- [PutLifecycleConfiguration](AwsS3OutpostsActions.md#putlifecycleconfiguration)
- [PutObject](AwsS3OutpostsActions.md#putobject)
- [PutObjectAcl](AwsS3OutpostsActions.md#putobjectacl)
- [PutObjectTagging](AwsS3OutpostsActions.md#putobjecttagging)
- [PutObjectVersionTagging](AwsS3OutpostsActions.md#putobjectversiontagging)
- [PutReplicationConfiguration](AwsS3OutpostsActions.md#putreplicationconfiguration)
- [ReplicateDelete](AwsS3OutpostsActions.md#replicatedelete)
- [ReplicateObject](AwsS3OutpostsActions.md#replicateobject)
- [ReplicateTags](AwsS3OutpostsActions.md#replicatetags)

## Enumeration Members

### AbortMultipartUpload

• **AbortMultipartUpload** = ``"s3-outposts:AbortMultipartUpload"``

Grants permission to abort a multipart upload

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html

#### Defined in

actions/s3-outposts.ts:17

___

### CreateAccessPoint

• **CreateAccessPoint** = ``"s3-outposts:CreateAccessPoint"``

Grants permission to create a new access point

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html

#### Defined in

actions/s3-outposts.ts:23

___

### CreateBucket

• **CreateBucket** = ``"s3-outposts:CreateBucket"``

Grants permission to create a new bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html

#### Defined in

actions/s3-outposts.ts:29

___

### CreateEndpoint

• **CreateEndpoint** = ``"s3-outposts:CreateEndpoint"``

Grants permission to create a new endpoint

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html

#### Defined in

actions/s3-outposts.ts:35

___

### DeleteAccessPoint

• **DeleteAccessPoint** = ``"s3-outposts:DeleteAccessPoint"``

Grants permission to delete the access point named in the URI

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html

#### Defined in

actions/s3-outposts.ts:41

___

### DeleteAccessPointPolicy

• **DeleteAccessPointPolicy** = ``"s3-outposts:DeleteAccessPointPolicy"``

Grants permission to delete the policy on a specified access point

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html

#### Defined in

actions/s3-outposts.ts:47

___

### DeleteBucket

• **DeleteBucket** = ``"s3-outposts:DeleteBucket"``

Grants permission to delete the bucket named in the URI

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html

#### Defined in

actions/s3-outposts.ts:53

___

### DeleteBucketPolicy

• **DeleteBucketPolicy** = ``"s3-outposts:DeleteBucketPolicy"``

Grants permission to delete the policy on a specified bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html

#### Defined in

actions/s3-outposts.ts:59

___

### DeleteEndpoint

• **DeleteEndpoint** = ``"s3-outposts:DeleteEndpoint"``

Grants permission to delete the endpoint named in the URI

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html

#### Defined in

actions/s3-outposts.ts:65

___

### DeleteObject

• **DeleteObject** = ``"s3-outposts:DeleteObject"``

Grants permission to remove the null version of an object and insert a delete m
arker, which becomes the current version of the object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html

#### Defined in

actions/s3-outposts.ts:72

___

### DeleteObjectTagging

• **DeleteObjectTagging** = ``"s3-outposts:DeleteObjectTagging"``

Grants permission to use the tagging subresource to remove the entire tag set f
rom the specified object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html

#### Defined in

actions/s3-outposts.ts:79

___

### DeleteObjectVersion

• **DeleteObjectVersion** = ``"s3-outposts:DeleteObjectVersion"``

Grants permission to remove a specific version of an object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html

#### Defined in

actions/s3-outposts.ts:85

___

### DeleteObjectVersionTagging

• **DeleteObjectVersionTagging** = ``"s3-outposts:DeleteObjectVersionTagging"``

Grants permission to remove the entire tag set for a specific version of the ob
ject

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html

#### Defined in

actions/s3-outposts.ts:92

___

### GetAccessPoint

• **GetAccessPoint** = ``"s3-outposts:GetAccessPoint"``

Grants permission to return configuration information about the specified acces
s point

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html

#### Defined in

actions/s3-outposts.ts:99

___

### GetAccessPointPolicy

• **GetAccessPointPolicy** = ``"s3-outposts:GetAccessPointPolicy"``

Grants permission to returns the access point policy associated with the specif
ied access point

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html

#### Defined in

actions/s3-outposts.ts:106

___

### GetBucket

• **GetBucket** = ``"s3-outposts:GetBucket"``

Grants permission to return the bucket configuration associated with an Amazon
S3 bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html

#### Defined in

actions/s3-outposts.ts:113

___

### GetBucketPolicy

• **GetBucketPolicy** = ``"s3-outposts:GetBucketPolicy"``

Grants permission to return the policy of the specified bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html

#### Defined in

actions/s3-outposts.ts:119

___

### GetBucketTagging

• **GetBucketTagging** = ``"s3-outposts:GetBucketTagging"``

Grants permission to return the tag set associated with an Amazon S3 bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html

#### Defined in

actions/s3-outposts.ts:125

___

### GetBucketVersioning

• **GetBucketVersioning** = ``"s3-outposts:GetBucketVersioning"``

Grants permission to return the versioning state of an Amazon S3 bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html

#### Defined in

actions/s3-outposts.ts:131

___

### GetLifecycleConfiguration

• **GetLifecycleConfiguration** = ``"s3-outposts:GetLifecycleConfiguration"``

Grants permission to return the lifecycle configuration information set on an A
mazon S3 bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html

#### Defined in

actions/s3-outposts.ts:138

___

### GetObject

• **GetObject** = ``"s3-outposts:GetObject"``

Grants permission to retrieve objects from Amazon S3

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html

#### Defined in

actions/s3-outposts.ts:144

___

### GetObjectTagging

• **GetObjectTagging** = ``"s3-outposts:GetObjectTagging"``

Grants permission to return the tag set of an object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html

#### Defined in

actions/s3-outposts.ts:150

___

### GetObjectVersion

• **GetObjectVersion** = ``"s3-outposts:GetObjectVersion"``

Grants permission to retrieve a specific version of an object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html

#### Defined in

actions/s3-outposts.ts:156

___

### GetObjectVersionForReplication

• **GetObjectVersionForReplication** = ``"s3-outposts:GetObjectVersionForReplication"``

Grants permission to replicate both unencrypted objects and objects encrypted w
ith SSE-KMS

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html

#### Defined in

actions/s3-outposts.ts:163

___

### GetObjectVersionTagging

• **GetObjectVersionTagging** = ``"s3-outposts:GetObjectVersionTagging"``

Grants permission to return the tag set for a specific version of the object

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html

#### Defined in

actions/s3-outposts.ts:169

___

### GetReplicationConfiguration

• **GetReplicationConfiguration** = ``"s3-outposts:GetReplicationConfiguration"``

Grants permission to get the replication configuration information set on an Am
azon S3 bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html

#### Defined in

actions/s3-outposts.ts:176

___

### ListAccessPoints

• **ListAccessPoints** = ``"s3-outposts:ListAccessPoints"``

Grants permission to list access points

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html

#### Defined in

actions/s3-outposts.ts:182

___

### ListBucket

• **ListBucket** = ``"s3-outposts:ListBucket"``

Grants permission to list some or all of the objects in an Amazon S3 bucket (up
to 1000)

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html

#### Defined in

actions/s3-outposts.ts:189

___

### ListBucketMultipartUploads

• **ListBucketMultipartUploads** = ``"s3-outposts:ListBucketMultipartUploads"``

Grants permission to list in-progress multipart uploads

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html

#### Defined in

actions/s3-outposts.ts:195

___

### ListBucketVersions

• **ListBucketVersions** = ``"s3-outposts:ListBucketVersions"``

Grants permission to list metadata about all the versions of objects in an Amaz
on S3 bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html

#### Defined in

actions/s3-outposts.ts:202

___

### ListEndpoints

• **ListEndpoints** = ``"s3-outposts:ListEndpoints"``

Grants permission to list endpoints

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html

#### Defined in

actions/s3-outposts.ts:208

___

### ListMultipartUploadParts

• **ListMultipartUploadParts** = ``"s3-outposts:ListMultipartUploadParts"``

Grants permission to list the parts that have been uploaded for a specific mult
ipart upload

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html

#### Defined in

actions/s3-outposts.ts:215

___

### ListOutpostsWithS3

• **ListOutpostsWithS3** = ``"s3-outposts:ListOutpostsWithS3"``

Grants permission to list outposts with S3 capacity

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListOutpostsWithS3.html

#### Defined in

actions/s3-outposts.ts:221

___

### ListRegionalBuckets

• **ListRegionalBuckets** = ``"s3-outposts:ListRegionalBuckets"``

Grants permission to list all buckets owned by the authenticated sender of the
request

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html

#### Defined in

actions/s3-outposts.ts:228

___

### ListSharedEndpoints

• **ListSharedEndpoints** = ``"s3-outposts:ListSharedEndpoints"``

Grants permission to list shared endpoints

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListSharedEndpoints.html

#### Defined in

actions/s3-outposts.ts:234

___

### PutAccessPointPolicy

• **PutAccessPointPolicy** = ``"s3-outposts:PutAccessPointPolicy"``

Grants permission to associate an access policy with a specified access point

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html

#### Defined in

actions/s3-outposts.ts:240

___

### PutBucketPolicy

• **PutBucketPolicy** = ``"s3-outposts:PutBucketPolicy"``

Grants permission to add or replace a bucket policy on a bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html

#### Defined in

actions/s3-outposts.ts:246

___

### PutBucketTagging

• **PutBucketTagging** = ``"s3-outposts:PutBucketTagging"``

Grants permission to add a set of tags to an existing Amazon S3 bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html

#### Defined in

actions/s3-outposts.ts:252

___

### PutBucketVersioning

• **PutBucketVersioning** = ``"s3-outposts:PutBucketVersioning"``

Grants permission to set the versioning state of an existing Amazon S3 bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html

#### Defined in

actions/s3-outposts.ts:258

___

### PutLifecycleConfiguration

• **PutLifecycleConfiguration** = ``"s3-outposts:PutLifecycleConfiguration"``

Grants permission to create a new lifecycle configuration for the bucket or rep
lace an existing lifecycle configuration

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html

#### Defined in

actions/s3-outposts.ts:265

___

### PutObject

• **PutObject** = ``"s3-outposts:PutObject"``

Grants permission to add an object to a bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html

#### Defined in

actions/s3-outposts.ts:271

___

### PutObjectAcl

• **PutObjectAcl** = ``"s3-outposts:PutObjectAcl"``

Grants permission to set the access control list (ACL) permissions for an objec
t that already exists in a bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html

#### Defined in

actions/s3-outposts.ts:278

___

### PutObjectTagging

• **PutObjectTagging** = ``"s3-outposts:PutObjectTagging"``

Grants permission to set the supplied tag-set to an object that already exists
in a bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html

#### Defined in

actions/s3-outposts.ts:285

___

### PutObjectVersionTagging

• **PutObjectVersionTagging** = ``"s3-outposts:PutObjectVersionTagging"``

Grants permission to set the supplied tag-set for a specific version of an obje
ct

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html

#### Defined in

actions/s3-outposts.ts:292

___

### PutReplicationConfiguration

• **PutReplicationConfiguration** = ``"s3-outposts:PutReplicationConfiguration"``

Grants permission to create a new replication configuration or replace an exist
ing one

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html

#### Defined in

actions/s3-outposts.ts:299

___

### ReplicateDelete

• **ReplicateDelete** = ``"s3-outposts:ReplicateDelete"``

Grants permission to replicate delete markers to the destination bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html

#### Defined in

actions/s3-outposts.ts:305

___

### ReplicateObject

• **ReplicateObject** = ``"s3-outposts:ReplicateObject"``

Grants permission to replicate objects and object tags to the destination bucke
t

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html

#### Defined in

actions/s3-outposts.ts:312

___

### ReplicateTags

• **ReplicateTags** = ``"s3-outposts:ReplicateTags"``

Grants permission to replicate object tags to the destination bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html

#### Defined in

actions/s3-outposts.ts:318
