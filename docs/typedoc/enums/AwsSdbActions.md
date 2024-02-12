[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSdbActions

# Enumeration: AwsSdbActions

All IAM policy actions for Amazon SimpleDB (SDB)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpledb.html

2024-02-12T09:59:17.585Z

## Table of contents

### Enumeration Members

- [BatchDeleteAttributes](AwsSdbActions.md#batchdeleteattributes)
- [BatchPutAttributes](AwsSdbActions.md#batchputattributes)
- [CreateDomain](AwsSdbActions.md#createdomain)
- [DeleteAttributes](AwsSdbActions.md#deleteattributes)
- [DeleteDomain](AwsSdbActions.md#deletedomain)
- [DomainMetadata](AwsSdbActions.md#domainmetadata)
- [GetAttributes](AwsSdbActions.md#getattributes)
- [ListDomains](AwsSdbActions.md#listdomains)
- [PutAttributes](AwsSdbActions.md#putattributes)
- [Select](AwsSdbActions.md#select)

## Enumeration Members

### BatchDeleteAttributes

• **BatchDeleteAttributes** = ``"sdb:BatchDeleteAttributes"``

Performs multiple DeleteAttributes operations in a single call, which reduces r
ound trips and latencies

See https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_BatchDeleteAttributes.html

#### Defined in

actions/sdb.ts:18

___

### BatchPutAttributes

• **BatchPutAttributes** = ``"sdb:BatchPutAttributes"``

With the BatchPutAttributes operation, you can perform multiple PutAttribute op
erations in a single call. With the BatchPutAttributes operation, you can perfo
rm multiple PutAttribute operations in a single call

See https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_BatchPutAttributes.html

#### Defined in

actions/sdb.ts:26

___

### CreateDomain

• **CreateDomain** = ``"sdb:CreateDomain"``

The CreateDomain operation creates a new domain

See https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_CreateDomain.html

#### Defined in

actions/sdb.ts:32

___

### DeleteAttributes

• **DeleteAttributes** = ``"sdb:DeleteAttributes"``

Deletes one or more attributes associated with the item

See https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DeleteAttributes.html

#### Defined in

actions/sdb.ts:38

___

### DeleteDomain

• **DeleteDomain** = ``"sdb:DeleteDomain"``

The DeleteDomain operation deletes a domain

See https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DeleteDomain.html

#### Defined in

actions/sdb.ts:44

___

### DomainMetadata

• **DomainMetadata** = ``"sdb:DomainMetadata"``

Returns information about the domain, including when the domain was created, th
e number of items and attributes, and the size of attribute names and values

See https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DomainMetadata.html

#### Defined in

actions/sdb.ts:51

___

### GetAttributes

• **GetAttributes** = ``"sdb:GetAttributes"``

Returns all of the attributes associated with the item

See https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_GetAttributes.html

#### Defined in

actions/sdb.ts:57

___

### ListDomains

• **ListDomains** = ``"sdb:ListDomains"``

Description for ListDomains

See https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_ListDomains.html

#### Defined in

actions/sdb.ts:63

___

### PutAttributes

• **PutAttributes** = ``"sdb:PutAttributes"``

The PutAttributes operation creates or replaces attributes in an item

See https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_PutAttributes.html

#### Defined in

actions/sdb.ts:69

___

### Select

• **Select** = ``"sdb:Select"``

Description for Select

See https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_Select.html

#### Defined in

actions/sdb.ts:75
