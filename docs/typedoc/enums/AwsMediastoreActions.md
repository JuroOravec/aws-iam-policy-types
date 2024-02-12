[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMediastoreActions

# Enumeration: AwsMediastoreActions

All IAM policy actions for AWS Elemental MediaStore (MEDIASTORE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediastore.html

2024-02-12T09:57:18.876Z

## Table of contents

### Enumeration Members

- [CreateContainer](AwsMediastoreActions.md#createcontainer)
- [DeleteContainer](AwsMediastoreActions.md#deletecontainer)
- [DeleteContainerPolicy](AwsMediastoreActions.md#deletecontainerpolicy)
- [DeleteCorsPolicy](AwsMediastoreActions.md#deletecorspolicy)
- [DeleteLifecyclePolicy](AwsMediastoreActions.md#deletelifecyclepolicy)
- [DeleteMetricPolicy](AwsMediastoreActions.md#deletemetricpolicy)
- [DeleteObject](AwsMediastoreActions.md#deleteobject)
- [DescribeContainer](AwsMediastoreActions.md#describecontainer)
- [DescribeObject](AwsMediastoreActions.md#describeobject)
- [GetContainerPolicy](AwsMediastoreActions.md#getcontainerpolicy)
- [GetCorsPolicy](AwsMediastoreActions.md#getcorspolicy)
- [GetLifecyclePolicy](AwsMediastoreActions.md#getlifecyclepolicy)
- [GetMetricPolicy](AwsMediastoreActions.md#getmetricpolicy)
- [GetObject](AwsMediastoreActions.md#getobject)
- [ListContainers](AwsMediastoreActions.md#listcontainers)
- [ListItems](AwsMediastoreActions.md#listitems)
- [ListTagsForResource](AwsMediastoreActions.md#listtagsforresource)
- [PutContainerPolicy](AwsMediastoreActions.md#putcontainerpolicy)
- [PutCorsPolicy](AwsMediastoreActions.md#putcorspolicy)
- [PutLifecyclePolicy](AwsMediastoreActions.md#putlifecyclepolicy)
- [PutMetricPolicy](AwsMediastoreActions.md#putmetricpolicy)
- [PutObject](AwsMediastoreActions.md#putobject)
- [StartAccessLogging](AwsMediastoreActions.md#startaccesslogging)
- [StopAccessLogging](AwsMediastoreActions.md#stopaccesslogging)
- [TagResource](AwsMediastoreActions.md#tagresource)
- [UntagResource](AwsMediastoreActions.md#untagresource)

## Enumeration Members

### CreateContainer

• **CreateContainer** = ``"mediastore:CreateContainer"``

Grants permission to create a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_CreateContainer.html

#### Defined in

actions/mediastore.ts:17

___

### DeleteContainer

• **DeleteContainer** = ``"mediastore:DeleteContainer"``

Grants permission to delete a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteContainer.html

#### Defined in

actions/mediastore.ts:23

___

### DeleteContainerPolicy

• **DeleteContainerPolicy** = ``"mediastore:DeleteContainerPolicy"``

Grants permission to delete the access policy of a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteContainerPolicy.html

#### Defined in

actions/mediastore.ts:29

___

### DeleteCorsPolicy

• **DeleteCorsPolicy** = ``"mediastore:DeleteCorsPolicy"``

Grants permission to delete the CORS policy from a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteCorsPolicy.html

#### Defined in

actions/mediastore.ts:35

___

### DeleteLifecyclePolicy

• **DeleteLifecyclePolicy** = ``"mediastore:DeleteLifecyclePolicy"``

Grants permission to delete the lifecycle policy from a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteLifecyclePolicy.html

#### Defined in

actions/mediastore.ts:41

___

### DeleteMetricPolicy

• **DeleteMetricPolicy** = ``"mediastore:DeleteMetricPolicy"``

Grants permission to delete the metric policy from a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteMetricPolicy.html

#### Defined in

actions/mediastore.ts:47

___

### DeleteObject

• **DeleteObject** = ``"mediastore:DeleteObject"``

Grants permission to delete an object

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_DeleteObject.html

#### Defined in

actions/mediastore.ts:53

___

### DescribeContainer

• **DescribeContainer** = ``"mediastore:DescribeContainer"``

Grants permission to retrieve details on a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_DescribeContainer.html

#### Defined in

actions/mediastore.ts:59

___

### DescribeObject

• **DescribeObject** = ``"mediastore:DescribeObject"``

Grants permission to retrieve metadata for an object

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_DescribeObject.html

#### Defined in

actions/mediastore.ts:65

___

### GetContainerPolicy

• **GetContainerPolicy** = ``"mediastore:GetContainerPolicy"``

Grants permission to retrieve the access policy of a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetContainerPolicy.html

#### Defined in

actions/mediastore.ts:71

___

### GetCorsPolicy

• **GetCorsPolicy** = ``"mediastore:GetCorsPolicy"``

Grants permission to retrieve the CORS policy of a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetCorsPolicy.html

#### Defined in

actions/mediastore.ts:77

___

### GetLifecyclePolicy

• **GetLifecyclePolicy** = ``"mediastore:GetLifecyclePolicy"``

Grants permission to retrieve the lifecycle policy that is assigned to a contai
ner

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetLifecyclePolicy.html

#### Defined in

actions/mediastore.ts:84

___

### GetMetricPolicy

• **GetMetricPolicy** = ``"mediastore:GetMetricPolicy"``

Grants permission to retrieve the metric policy that is assigned to a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetMetricPolicy.html

#### Defined in

actions/mediastore.ts:90

___

### GetObject

• **GetObject** = ``"mediastore:GetObject"``

Grants permission to retrieve an object

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_GetObject.html

#### Defined in

actions/mediastore.ts:96

___

### ListContainers

• **ListContainers** = ``"mediastore:ListContainers"``

Grants permission to retrieve a list of containers in the current account

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_ListContainers.html

#### Defined in

actions/mediastore.ts:102

___

### ListItems

• **ListItems** = ``"mediastore:ListItems"``

Grants permission to retrieve a list of objects and subfolders that are stored
in a folder

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_ListItems.html

#### Defined in

actions/mediastore.ts:109

___

### ListTagsForResource

• **ListTagsForResource** = ``"mediastore:ListTagsForResource"``

Grants permission to list tags on a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_ListTagsForResource.html

#### Defined in

actions/mediastore.ts:115

___

### PutContainerPolicy

• **PutContainerPolicy** = ``"mediastore:PutContainerPolicy"``

Grants permission to create or replace the access policy of a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutContainerPolicy.html

#### Defined in

actions/mediastore.ts:121

___

### PutCorsPolicy

• **PutCorsPolicy** = ``"mediastore:PutCorsPolicy"``

Grants permission to add or modify the CORS policy of a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutCorsPolicy.html

#### Defined in

actions/mediastore.ts:127

___

### PutLifecyclePolicy

• **PutLifecyclePolicy** = ``"mediastore:PutLifecyclePolicy"``

Grants permission to add or modify the lifecycle policy that is assigned to a c
ontainer

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutLifecyclePolicy.html

#### Defined in

actions/mediastore.ts:134

___

### PutMetricPolicy

• **PutMetricPolicy** = ``"mediastore:PutMetricPolicy"``

Grants permission to add or modify the metric policy that is assigned to a cont
ainer

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutMetricPolicy.html

#### Defined in

actions/mediastore.ts:141

___

### PutObject

• **PutObject** = ``"mediastore:PutObject"``

Grants permission to upload an object

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_PutObject.html

#### Defined in

actions/mediastore.ts:147

___

### StartAccessLogging

• **StartAccessLogging** = ``"mediastore:StartAccessLogging"``

Grants permission to start access logging on a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_StartAccessLogging.html

#### Defined in

actions/mediastore.ts:153

___

### StopAccessLogging

• **StopAccessLogging** = ``"mediastore:StopAccessLogging"``

Grants permission to stop access logging on a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_StopAccessLogging.html

#### Defined in

actions/mediastore.ts:159

___

### TagResource

• **TagResource** = ``"mediastore:TagResource"``

Grants permission to add tags to a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_TagResource.html

#### Defined in

actions/mediastore.ts:165

___

### UntagResource

• **UntagResource** = ``"mediastore:UntagResource"``

Grants permission to remove tags from a container

See https://docs.aws.amazon.com/mediastore/latest/apireference/API_UntagResource.html

#### Defined in

actions/mediastore.ts:171
