[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCloudfrontKeyvaluestoreActions

# Enumeration: AwsCloudfrontKeyvaluestoreActions

All IAM policy actions for Amazon CloudFront KeyValueStore (CLOUDFRONT-KEYVALUESTORE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudfrontkeyvaluestore.html

2024-02-12T09:56:22.762Z

## Table of contents

### Enumeration Members

- [DeleteKey](AwsCloudfrontKeyvaluestoreActions.md#deletekey)
- [DescribeKeyValueStore](AwsCloudfrontKeyvaluestoreActions.md#describekeyvaluestore)
- [GetKey](AwsCloudfrontKeyvaluestoreActions.md#getkey)
- [ListKeys](AwsCloudfrontKeyvaluestoreActions.md#listkeys)
- [PutKey](AwsCloudfrontKeyvaluestoreActions.md#putkey)
- [UpdateKeys](AwsCloudfrontKeyvaluestoreActions.md#updatekeys)

## Enumeration Members

### DeleteKey

• **DeleteKey** = ``"cloudfront-keyvaluestore:DeleteKey"``

Grants permission to delete the key value pair specified by the key

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_DeleteKey.html

#### Defined in

actions/cloudfront-keyvaluestore.ts:17

___

### DescribeKeyValueStore

• **DescribeKeyValueStore** = ``"cloudfront-keyvaluestore:DescribeKeyValueStore"``

Grants permission to return metadata information about Key Value Store

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_DescribeKeyValueStore.html

#### Defined in

actions/cloudfront-keyvaluestore.ts:23

___

### GetKey

• **GetKey** = ``"cloudfront-keyvaluestore:GetKey"``

Grants permission to return a key value pair

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_GetKey.html

#### Defined in

actions/cloudfront-keyvaluestore.ts:29

___

### ListKeys

• **ListKeys** = ``"cloudfront-keyvaluestore:ListKeys"``

Grants permission to returns a list of key value pairs

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_ListKeys.html

#### Defined in

actions/cloudfront-keyvaluestore.ts:35

___

### PutKey

• **PutKey** = ``"cloudfront-keyvaluestore:PutKey"``

Grants permission to create a new key value pair or replace the value of an exi
sting key

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_PutKey.html

#### Defined in

actions/cloudfront-keyvaluestore.ts:42

___

### UpdateKeys

• **UpdateKeys** = ``"cloudfront-keyvaluestore:UpdateKeys"``

Grants permission to put or delete multiple key value pairs in a single, all-or
-nothing operation

See https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_UpdateKeys.html

#### Defined in

actions/cloudfront-keyvaluestore.ts:49
