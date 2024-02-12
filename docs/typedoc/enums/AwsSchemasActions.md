[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSchemasActions

# Enumeration: AwsSchemasActions

All IAM policy actions for Amazon EventBridge Schemas (SCHEMAS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgeschemas.html

2024-02-12T09:57:24.137Z

## Table of contents

### Enumeration Members

- [CreateDiscoverer](AwsSchemasActions.md#creatediscoverer)
- [CreateRegistry](AwsSchemasActions.md#createregistry)
- [CreateSchema](AwsSchemasActions.md#createschema)
- [DeleteDiscoverer](AwsSchemasActions.md#deletediscoverer)
- [DeleteRegistry](AwsSchemasActions.md#deleteregistry)
- [DeleteResourcePolicy](AwsSchemasActions.md#deleteresourcepolicy)
- [DeleteSchema](AwsSchemasActions.md#deleteschema)
- [DeleteSchemaVersion](AwsSchemasActions.md#deleteschemaversion)
- [DescribeCodeBinding](AwsSchemasActions.md#describecodebinding)
- [DescribeDiscoverer](AwsSchemasActions.md#describediscoverer)
- [DescribeRegistry](AwsSchemasActions.md#describeregistry)
- [DescribeSchema](AwsSchemasActions.md#describeschema)
- [ExportSchema](AwsSchemasActions.md#exportschema)
- [GetCodeBindingSource](AwsSchemasActions.md#getcodebindingsource)
- [GetDiscoveredSchema](AwsSchemasActions.md#getdiscoveredschema)
- [GetResourcePolicy](AwsSchemasActions.md#getresourcepolicy)
- [ListDiscoverers](AwsSchemasActions.md#listdiscoverers)
- [ListRegistries](AwsSchemasActions.md#listregistries)
- [ListSchemaVersions](AwsSchemasActions.md#listschemaversions)
- [ListSchemas](AwsSchemasActions.md#listschemas)
- [ListTagsForResource](AwsSchemasActions.md#listtagsforresource)
- [PutCodeBinding](AwsSchemasActions.md#putcodebinding)
- [PutResourcePolicy](AwsSchemasActions.md#putresourcepolicy)
- [SearchSchemas](AwsSchemasActions.md#searchschemas)
- [StartDiscoverer](AwsSchemasActions.md#startdiscoverer)
- [StopDiscoverer](AwsSchemasActions.md#stopdiscoverer)
- [TagResource](AwsSchemasActions.md#tagresource)
- [UntagResource](AwsSchemasActions.md#untagresource)
- [UpdateDiscoverer](AwsSchemasActions.md#updatediscoverer)
- [UpdateRegistry](AwsSchemasActions.md#updateregistry)
- [UpdateSchema](AwsSchemasActions.md#updateschema)

## Enumeration Members

### CreateDiscoverer

• **CreateDiscoverer** = ``"schemas:CreateDiscoverer"``

Grants permission to create an event schema discoverer. Once created, your even
ts will be automatically map into corresponding schema documents

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#CreateDiscoverer

#### Defined in

actions/schemas.ts:18

___

### CreateRegistry

• **CreateRegistry** = ``"schemas:CreateRegistry"``

Grants permission to create a new schema registry in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#CreateRegistry

#### Defined in

actions/schemas.ts:24

___

### CreateSchema

• **CreateSchema** = ``"schemas:CreateSchema"``

Grants permission to create a new schema in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#CreateSchema

#### Defined in

actions/schemas.ts:30

___

### DeleteDiscoverer

• **DeleteDiscoverer** = ``"schemas:DeleteDiscoverer"``

Grants permission to delete discoverer in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DeleteDiscoverer

#### Defined in

actions/schemas.ts:36

___

### DeleteRegistry

• **DeleteRegistry** = ``"schemas:DeleteRegistry"``

Grants permission to delete an existing registry in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DeleteRegistry

#### Defined in

actions/schemas.ts:42

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"schemas:DeleteResourcePolicy"``

Grants permission to delete the resource-based policy attached to a given regis
try

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#DeleteResourcePolicy

#### Defined in

actions/schemas.ts:49

___

### DeleteSchema

• **DeleteSchema** = ``"schemas:DeleteSchema"``

Grants permission to delete an existing schema in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DeleteSchema

#### Defined in

actions/schemas.ts:55

___

### DeleteSchemaVersion

• **DeleteSchemaVersion** = ``"schemas:DeleteSchemaVersion"``

Grants permission to delete a specific version of schema in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-version-schemaversion.html#DeleteSchemaVersion

#### Defined in

actions/schemas.ts:61

___

### DescribeCodeBinding

• **DescribeCodeBinding** = ``"schemas:DescribeCodeBinding"``

Grants permission to retrieve metadata for generated code for specific schema i
n your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#DescribeCodeBinding

#### Defined in

actions/schemas.ts:68

___

### DescribeDiscoverer

• **DescribeDiscoverer** = ``"schemas:DescribeDiscoverer"``

Grants permission to retrieve discoverer metadata in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DescribeDiscoverer

#### Defined in

actions/schemas.ts:74

___

### DescribeRegistry

• **DescribeRegistry** = ``"schemas:DescribeRegistry"``

Grants permission to describe an existing registry metadata in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DescribeRegistry

#### Defined in

actions/schemas.ts:80

___

### DescribeSchema

• **DescribeSchema** = ``"schemas:DescribeSchema"``

Grants permission to retrieve an existing schema in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DescribeSchema

#### Defined in

actions/schemas.ts:86

___

### ExportSchema

• **ExportSchema** = ``"schemas:ExportSchema"``

Grants permission to export the AWS registry or discovered schemas in OpenAPI 3
format to JSONSchema format

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#ExportSchema

#### Defined in

actions/schemas.ts:93

___

### GetCodeBindingSource

• **GetCodeBindingSource** = ``"schemas:GetCodeBindingSource"``

Grants permission to retrieve metadata for generated code for specific schema i
n your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language-source.html#GetCodeBindingSource

#### Defined in

actions/schemas.ts:100

___

### GetDiscoveredSchema

• **GetDiscoveredSchema** = ``"schemas:GetDiscoveredSchema"``

Grants permission to retrieve a schema for the provided list of sample events

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discover.html#GetDiscoveredSchema

#### Defined in

actions/schemas.ts:106

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"schemas:GetResourcePolicy"``

Grants permission to retrieve the resource-based policy attached to a given reg
istry

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#GetResourcePolicy

#### Defined in

actions/schemas.ts:113

___

### ListDiscoverers

• **ListDiscoverers** = ``"schemas:ListDiscoverers"``

Grants permission to list all discoverers in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#ListDiscoverers

#### Defined in

actions/schemas.ts:119

___

### ListRegistries

• **ListRegistries** = ``"schemas:ListRegistries"``

Grants permission to list all registries in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries.html#ListRegistries

#### Defined in

actions/schemas.ts:125

___

### ListSchemaVersions

• **ListSchemaVersions** = ``"schemas:ListSchemaVersions"``

Grants permission to list all versions of a schema

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-versions.html#ListSchemaVersions

#### Defined in

actions/schemas.ts:131

___

### ListSchemas

• **ListSchemas** = ``"schemas:ListSchemas"``

Grants permission to list all schemas

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas.html#ListSchemas

#### Defined in

actions/schemas.ts:137

___

### ListTagsForResource

• **ListTagsForResource** = ``"schemas:ListTagsForResource"``

Grants permission to lists tags for a resource

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#ListTagsForResource

#### Defined in

actions/schemas.ts:143

___

### PutCodeBinding

• **PutCodeBinding** = ``"schemas:PutCodeBinding"``

Grants permission to generate code for specific schema in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#PutCodeBinding

#### Defined in

actions/schemas.ts:149

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"schemas:PutResourcePolicy"``

Grants permission to attach a resource-based policy to a given registry

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#PutResourcePolicy

#### Defined in

actions/schemas.ts:155

___

### SearchSchemas

• **SearchSchemas** = ``"schemas:SearchSchemas"``

Grants permission to search schemas based on specified keywords in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-search.html#SearchSchemas

#### Defined in

actions/schemas.ts:161

___

### StartDiscoverer

• **StartDiscoverer** = ``"schemas:StartDiscoverer"``

Grants permission to start the specified discoverer. Once started the discovere
r will automatically register schemas for published events to configured source
in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StartDiscoverer

#### Defined in

actions/schemas.ts:169

___

### StopDiscoverer

• **StopDiscoverer** = ``"schemas:StopDiscoverer"``

Grants permission to stop the specified discoverer. Once stopped the discoverer
will no longer register schemas for published events to configured source in yo
ur account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StopDiscoverer

#### Defined in

actions/schemas.ts:177

___

### TagResource

• **TagResource** = ``"schemas:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#TagResource

#### Defined in

actions/schemas.ts:183

___

### UntagResource

• **UntagResource** = ``"schemas:UntagResource"``

Grants permission to remove a tag from a resource

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#UntagResource

#### Defined in

actions/schemas.ts:189

___

### UpdateDiscoverer

• **UpdateDiscoverer** = ``"schemas:UpdateDiscoverer"``

Grants permission to update an existing discoverer in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#UpdateDiscoverer

#### Defined in

actions/schemas.ts:195

___

### UpdateRegistry

• **UpdateRegistry** = ``"schemas:UpdateRegistry"``

Grants permission to update an existing registry metadata in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#UpdateRegistry

#### Defined in

actions/schemas.ts:201

___

### UpdateSchema

• **UpdateSchema** = ``"schemas:UpdateSchema"``

Grants permission to update an existing schema in your account

See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#UpdateSchema

#### Defined in

actions/schemas.ts:207
