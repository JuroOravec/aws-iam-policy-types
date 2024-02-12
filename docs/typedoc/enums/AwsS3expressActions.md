[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsS3expressActions

# Enumeration: AwsS3expressActions

All IAM policy actions for Amazon S3 Express (S3EXPRESS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3express.html

2024-02-12T09:59:03.477Z

## Table of contents

### Enumeration Members

- [CreateBucket](AwsS3expressActions.md#createbucket)
- [CreateSession](AwsS3expressActions.md#createsession)
- [DeleteBucket](AwsS3expressActions.md#deletebucket)
- [DeleteBucketPolicy](AwsS3expressActions.md#deletebucketpolicy)
- [GetBucketPolicy](AwsS3expressActions.md#getbucketpolicy)
- [ListAllMyDirectoryBuckets](AwsS3expressActions.md#listallmydirectorybuckets)
- [PutBucketPolicy](AwsS3expressActions.md#putbucketpolicy)

## Enumeration Members

### CreateBucket

• **CreateBucket** = ``"s3express:CreateBucket"``

Grants permission to create a new bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html

#### Defined in

actions/s3express.ts:17

___

### CreateSession

• **CreateSession** = ``"s3express:CreateSession"``

Grants permission to Create Session token which is used for object APIs such as
PutObject, GetObject, ect

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html

#### Defined in

actions/s3express.ts:24

___

### DeleteBucket

• **DeleteBucket** = ``"s3express:DeleteBucket"``

Grants permission to delete the bucket named in the URI

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html

#### Defined in

actions/s3express.ts:30

___

### DeleteBucketPolicy

• **DeleteBucketPolicy** = ``"s3express:DeleteBucketPolicy"``

Grants permission to delete the policy on a specified bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html

#### Defined in

actions/s3express.ts:36

___

### GetBucketPolicy

• **GetBucketPolicy** = ``"s3express:GetBucketPolicy"``

Grants permission to return the policy of the specified bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html

#### Defined in

actions/s3express.ts:42

___

### ListAllMyDirectoryBuckets

• **ListAllMyDirectoryBuckets** = ``"s3express:ListAllMyDirectoryBuckets"``

Grants permission to list all directory buckets owned by the authenticated send
er of the request

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListDirectoryBuckets.html

#### Defined in

actions/s3express.ts:49

___

### PutBucketPolicy

• **PutBucketPolicy** = ``"s3express:PutBucketPolicy"``

Grants permission to add or replace a bucket policy on a bucket

See https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html

#### Defined in

actions/s3express.ts:55
