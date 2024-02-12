[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAppsyncActions

# Enumeration: AwsAppsyncActions

All IAM policy actions for AWS AppSync (APPSYNC)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappsync.html

2024-02-12T09:56:05.951Z

## Table of contents

### Enumeration Members

- [AssociateApi](AwsAppsyncActions.md#associateapi)
- [AssociateMergedGraphqlApi](AwsAppsyncActions.md#associatemergedgraphqlapi)
- [AssociateSourceGraphqlApi](AwsAppsyncActions.md#associatesourcegraphqlapi)
- [CreateApiCache](AwsAppsyncActions.md#createapicache)
- [CreateApiKey](AwsAppsyncActions.md#createapikey)
- [CreateDataSource](AwsAppsyncActions.md#createdatasource)
- [CreateDomainName](AwsAppsyncActions.md#createdomainname)
- [CreateFunction](AwsAppsyncActions.md#createfunction)
- [CreateGraphqlApi](AwsAppsyncActions.md#creategraphqlapi)
- [CreateResolver](AwsAppsyncActions.md#createresolver)
- [CreateType](AwsAppsyncActions.md#createtype)
- [DeleteApiCache](AwsAppsyncActions.md#deleteapicache)
- [DeleteApiKey](AwsAppsyncActions.md#deleteapikey)
- [DeleteDataSource](AwsAppsyncActions.md#deletedatasource)
- [DeleteDomainName](AwsAppsyncActions.md#deletedomainname)
- [DeleteFunction](AwsAppsyncActions.md#deletefunction)
- [DeleteGraphqlApi](AwsAppsyncActions.md#deletegraphqlapi)
- [DeleteResolver](AwsAppsyncActions.md#deleteresolver)
- [DeleteResourcePolicy](AwsAppsyncActions.md#deleteresourcepolicy)
- [DeleteType](AwsAppsyncActions.md#deletetype)
- [DisassociateApi](AwsAppsyncActions.md#disassociateapi)
- [DisassociateMergedGraphqlApi](AwsAppsyncActions.md#disassociatemergedgraphqlapi)
- [DisassociateSourceGraphqlApi](AwsAppsyncActions.md#disassociatesourcegraphqlapi)
- [EvaluateCode](AwsAppsyncActions.md#evaluatecode)
- [EvaluateMappingTemplate](AwsAppsyncActions.md#evaluatemappingtemplate)
- [FlushApiCache](AwsAppsyncActions.md#flushapicache)
- [GetApiAssociation](AwsAppsyncActions.md#getapiassociation)
- [GetApiCache](AwsAppsyncActions.md#getapicache)
- [GetDataSource](AwsAppsyncActions.md#getdatasource)
- [GetDataSourceIntrospection](AwsAppsyncActions.md#getdatasourceintrospection)
- [GetDomainName](AwsAppsyncActions.md#getdomainname)
- [GetFunction](AwsAppsyncActions.md#getfunction)
- [GetGraphqlApi](AwsAppsyncActions.md#getgraphqlapi)
- [GetGraphqlApiEnvironmentVariables](AwsAppsyncActions.md#getgraphqlapienvironmentvariables)
- [GetIntrospectionSchema](AwsAppsyncActions.md#getintrospectionschema)
- [GetResolver](AwsAppsyncActions.md#getresolver)
- [GetResourcePolicy](AwsAppsyncActions.md#getresourcepolicy)
- [GetSchemaCreationStatus](AwsAppsyncActions.md#getschemacreationstatus)
- [GetSourceApiAssociation](AwsAppsyncActions.md#getsourceapiassociation)
- [GetType](AwsAppsyncActions.md#gettype)
- [GraphQL](AwsAppsyncActions.md#graphql)
- [ListApiKeys](AwsAppsyncActions.md#listapikeys)
- [ListDataSources](AwsAppsyncActions.md#listdatasources)
- [ListDomainNames](AwsAppsyncActions.md#listdomainnames)
- [ListFunctions](AwsAppsyncActions.md#listfunctions)
- [ListGraphqlApis](AwsAppsyncActions.md#listgraphqlapis)
- [ListResolvers](AwsAppsyncActions.md#listresolvers)
- [ListResolversByFunction](AwsAppsyncActions.md#listresolversbyfunction)
- [ListSourceApiAssociations](AwsAppsyncActions.md#listsourceapiassociations)
- [ListTagsForResource](AwsAppsyncActions.md#listtagsforresource)
- [ListTypes](AwsAppsyncActions.md#listtypes)
- [ListTypesByAssociation](AwsAppsyncActions.md#listtypesbyassociation)
- [PutGraphqlApiEnvironmentVariables](AwsAppsyncActions.md#putgraphqlapienvironmentvariables)
- [PutResourcePolicy](AwsAppsyncActions.md#putresourcepolicy)
- [SetWebACL](AwsAppsyncActions.md#setwebacl)
- [SourceGraphQL](AwsAppsyncActions.md#sourcegraphql)
- [StartDataSourceIntrospection](AwsAppsyncActions.md#startdatasourceintrospection)
- [StartSchemaCreation](AwsAppsyncActions.md#startschemacreation)
- [StartSchemaMerge](AwsAppsyncActions.md#startschemamerge)
- [TagResource](AwsAppsyncActions.md#tagresource)
- [UntagResource](AwsAppsyncActions.md#untagresource)
- [UpdateApiCache](AwsAppsyncActions.md#updateapicache)
- [UpdateApiKey](AwsAppsyncActions.md#updateapikey)
- [UpdateDataSource](AwsAppsyncActions.md#updatedatasource)
- [UpdateDomainName](AwsAppsyncActions.md#updatedomainname)
- [UpdateFunction](AwsAppsyncActions.md#updatefunction)
- [UpdateGraphqlApi](AwsAppsyncActions.md#updategraphqlapi)
- [UpdateResolver](AwsAppsyncActions.md#updateresolver)
- [UpdateSourceApiAssociation](AwsAppsyncActions.md#updatesourceapiassociation)
- [UpdateType](AwsAppsyncActions.md#updatetype)

## Enumeration Members

### AssociateApi

• **AssociateApi** = ``"appsync:AssociateApi"``

Grants permission to attach a GraphQL API to a custom domain name in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_AssociateApi.html

#### Defined in

actions/appsync.ts:17

___

### AssociateMergedGraphqlApi

• **AssociateMergedGraphqlApi** = ``"appsync:AssociateMergedGraphqlApi"``

Grants permission to associate a merged API to a source API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_AssociateMergedGraphqlApi.html

#### Defined in

actions/appsync.ts:23

___

### AssociateSourceGraphqlApi

• **AssociateSourceGraphqlApi** = ``"appsync:AssociateSourceGraphqlApi"``

Grants permission to associate a source API to a merged API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_AssociateSourceGraphqlApi.html

#### Defined in

actions/appsync.ts:29

___

### CreateApiCache

• **CreateApiCache** = ``"appsync:CreateApiCache"``

Grants permission to create an API cache in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateApiCache.html

#### Defined in

actions/appsync.ts:35

___

### CreateApiKey

• **CreateApiKey** = ``"appsync:CreateApiKey"``

Grants permission to create a unique key that you can distribute to clients who
are executing your API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateApiKey.html

#### Defined in

actions/appsync.ts:42

___

### CreateDataSource

• **CreateDataSource** = ``"appsync:CreateDataSource"``

Grants permission to create a data source

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateDataSource.html

#### Defined in

actions/appsync.ts:48

___

### CreateDomainName

• **CreateDomainName** = ``"appsync:CreateDomainName"``

Grants permission to create a custom domain name in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateDomainName.html

#### Defined in

actions/appsync.ts:54

___

### CreateFunction

• **CreateFunction** = ``"appsync:CreateFunction"``

Grants permission to create a new function

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateFunction.html

#### Defined in

actions/appsync.ts:60

___

### CreateGraphqlApi

• **CreateGraphqlApi** = ``"appsync:CreateGraphqlApi"``

Grants permission to create a GraphQL API, which is the top level AppSync resou
rce

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateGraphqlApi.html

#### Defined in

actions/appsync.ts:67

___

### CreateResolver

• **CreateResolver** = ``"appsync:CreateResolver"``

Grants permission to create a resolver. A resolver converts incoming requests i
nto a format that a data source can understand, and converts the data source's
responses into GraphQL

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateResolver.html

#### Defined in

actions/appsync.ts:75

___

### CreateType

• **CreateType** = ``"appsync:CreateType"``

Grants permission to create a type

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateType.html

#### Defined in

actions/appsync.ts:81

___

### DeleteApiCache

• **DeleteApiCache** = ``"appsync:DeleteApiCache"``

Grants permission to delete an API cache in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteApiCache.html

#### Defined in

actions/appsync.ts:87

___

### DeleteApiKey

• **DeleteApiKey** = ``"appsync:DeleteApiKey"``

Grants permission to delete an API key

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteApiKey.html

#### Defined in

actions/appsync.ts:93

___

### DeleteDataSource

• **DeleteDataSource** = ``"appsync:DeleteDataSource"``

Grants permission to delete a data source

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteDataSource.html

#### Defined in

actions/appsync.ts:99

___

### DeleteDomainName

• **DeleteDomainName** = ``"appsync:DeleteDomainName"``

Grants permission to delete a custom domain name in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteDomainName.html

#### Defined in

actions/appsync.ts:105

___

### DeleteFunction

• **DeleteFunction** = ``"appsync:DeleteFunction"``

Grants permission to delete a function

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteFunction.html

#### Defined in

actions/appsync.ts:111

___

### DeleteGraphqlApi

• **DeleteGraphqlApi** = ``"appsync:DeleteGraphqlApi"``

Grants permission to delete a GraphQL Api. This will also clean up every AppSyn
c resource below that API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteGraphqlApi.html

#### Defined in

actions/appsync.ts:118

___

### DeleteResolver

• **DeleteResolver** = ``"appsync:DeleteResolver"``

Grants permission to delete a resolver

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteResolver.html

#### Defined in

actions/appsync.ts:124

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"appsync:DeleteResourcePolicy"``

Grants permission to remove a resource policy

See https://docs.aws.amazon.com/appsync/latest/devguide/merge-api.html

#### Defined in

actions/appsync.ts:130

___

### DeleteType

• **DeleteType** = ``"appsync:DeleteType"``

Grants permission to delete a type

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteType.html

#### Defined in

actions/appsync.ts:136

___

### DisassociateApi

• **DisassociateApi** = ``"appsync:DisassociateApi"``

Grants permission to detach a GraphQL API to a custom domain name in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DisassociateApi.html

#### Defined in

actions/appsync.ts:142

___

### DisassociateMergedGraphqlApi

• **DisassociateMergedGraphqlApi** = ``"appsync:DisassociateMergedGraphqlApi"``

Grants permission to remove an associated source API from a merged API identifi
ed by the source API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DisassociateMergedGraphqlApi.html

#### Defined in

actions/appsync.ts:149

___

### DisassociateSourceGraphqlApi

• **DisassociateSourceGraphqlApi** = ``"appsync:DisassociateSourceGraphqlApi"``

Grants permission to remove an associated source API from a merged API identifi
ed by the merged API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_DisassociateSourceGraphqlApi.html

#### Defined in

actions/appsync.ts:156

___

### EvaluateCode

• **EvaluateCode** = ``"appsync:EvaluateCode"``

Grants permission to evaluate code with a runtime and context

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_EvaluateCode.html

#### Defined in

actions/appsync.ts:162

___

### EvaluateMappingTemplate

• **EvaluateMappingTemplate** = ``"appsync:EvaluateMappingTemplate"``

Grants permission to evaluate template mapping

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_EvaluateMappingTemplate.html

#### Defined in

actions/appsync.ts:168

___

### FlushApiCache

• **FlushApiCache** = ``"appsync:FlushApiCache"``

Grants permission to flush an API cache in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_FlushApiCache.html

#### Defined in

actions/appsync.ts:174

___

### GetApiAssociation

• **GetApiAssociation** = ``"appsync:GetApiAssociation"``

Grants permission to read custom domain name - GraphQL API association details
in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetApiAssociation.html

#### Defined in

actions/appsync.ts:181

___

### GetApiCache

• **GetApiCache** = ``"appsync:GetApiCache"``

Grants permission to read information about an API cache in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetApiCache.html

#### Defined in

actions/appsync.ts:187

___

### GetDataSource

• **GetDataSource** = ``"appsync:GetDataSource"``

Grants permission to retrieve a data source

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetDataSource.html

#### Defined in

actions/appsync.ts:193

___

### GetDataSourceIntrospection

• **GetDataSourceIntrospection** = ``"appsync:GetDataSourceIntrospection"``

Grants permission to retrieve a data source introspection

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetDataSourceIntrospection.html

#### Defined in

actions/appsync.ts:199

___

### GetDomainName

• **GetDomainName** = ``"appsync:GetDomainName"``

Grants permission to read information about a custom domain name in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetDomainName.html

#### Defined in

actions/appsync.ts:205

___

### GetFunction

• **GetFunction** = ``"appsync:GetFunction"``

Grants permission to retrieve a function

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetFunction.html

#### Defined in

actions/appsync.ts:211

___

### GetGraphqlApi

• **GetGraphqlApi** = ``"appsync:GetGraphqlApi"``

Grants permission to retrieve a GraphQL API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetGraphqlApi.html

#### Defined in

actions/appsync.ts:217

___

### GetGraphqlApiEnvironmentVariables

• **GetGraphqlApiEnvironmentVariables** = ``"appsync:GetGraphqlApiEnvironmentVariables"``

Grants permission to retrieve the environment variables for a GraphQL API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetGraphqlApiEnvironmentVariables.html

#### Defined in

actions/appsync.ts:223

___

### GetIntrospectionSchema

• **GetIntrospectionSchema** = ``"appsync:GetIntrospectionSchema"``

Grants permission to retrieve the introspection schema for a GraphQL API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetIntrospectionSchema.html

#### Defined in

actions/appsync.ts:229

___

### GetResolver

• **GetResolver** = ``"appsync:GetResolver"``

Grants permission to retrieve a resolver

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetResolver.html

#### Defined in

actions/appsync.ts:235

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"appsync:GetResourcePolicy"``

Grants permission to read a resource policy

See https://docs.aws.amazon.com/appsync/latest/devguide/merge-api.html

#### Defined in

actions/appsync.ts:241

___

### GetSchemaCreationStatus

• **GetSchemaCreationStatus** = ``"appsync:GetSchemaCreationStatus"``

Grants permission to retrieve the current status of a schema creation operation

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetSchemaCreationStatus.html

#### Defined in

actions/appsync.ts:247

___

### GetSourceApiAssociation

• **GetSourceApiAssociation** = ``"appsync:GetSourceApiAssociation"``

Grants permission to read information about a merged API associated source API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetSourceApiAssociation.html

#### Defined in

actions/appsync.ts:253

___

### GetType

• **GetType** = ``"appsync:GetType"``

Grants permission to retrieve a type

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetType.html

#### Defined in

actions/appsync.ts:259

___

### GraphQL

• **GraphQL** = ``"appsync:GraphQL"``

Grants permission to send a GraphQL query to a GraphQL API

See https://docs.aws.amazon.com/appsync/latest/devguide/using-your-api.html

#### Defined in

actions/appsync.ts:265

___

### ListApiKeys

• **ListApiKeys** = ``"appsync:ListApiKeys"``

Grants permission to list the API keys for a given API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListApiKeys.html

#### Defined in

actions/appsync.ts:271

___

### ListDataSources

• **ListDataSources** = ``"appsync:ListDataSources"``

Grants permission to list the data sources for a given API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListDataSources.html

#### Defined in

actions/appsync.ts:277

___

### ListDomainNames

• **ListDomainNames** = ``"appsync:ListDomainNames"``

Grants permission to enumerate custom domain names in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListDomainNames.html

#### Defined in

actions/appsync.ts:283

___

### ListFunctions

• **ListFunctions** = ``"appsync:ListFunctions"``

Grants permission to list the functions for a given API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListFunctions.html

#### Defined in

actions/appsync.ts:289

___

### ListGraphqlApis

• **ListGraphqlApis** = ``"appsync:ListGraphqlApis"``

Grants permission to list GraphQL APIs

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListGraphqlApis.html

#### Defined in

actions/appsync.ts:295

___

### ListResolvers

• **ListResolvers** = ``"appsync:ListResolvers"``

Grants permission to list the resolvers for a given API and type

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListResolvers.html

#### Defined in

actions/appsync.ts:301

___

### ListResolversByFunction

• **ListResolversByFunction** = ``"appsync:ListResolversByFunction"``

Grants permission to list the resolvers that are associated with a specific fun
ction

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListResolversByFunction.html

#### Defined in

actions/appsync.ts:308

___

### ListSourceApiAssociations

• **ListSourceApiAssociations** = ``"appsync:ListSourceApiAssociations"``

Grants permission to list source APIs associated to a given merged API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListSourceApiAssociations.html

#### Defined in

actions/appsync.ts:314

___

### ListTagsForResource

• **ListTagsForResource** = ``"appsync:ListTagsForResource"``

Grants permission to list the tags for a resource

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/appsync.ts:320

___

### ListTypes

• **ListTypes** = ``"appsync:ListTypes"``

Grants permission to list the types for a given API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTypes.html

#### Defined in

actions/appsync.ts:326

___

### ListTypesByAssociation

• **ListTypesByAssociation** = ``"appsync:ListTypesByAssociation"``

Grants permission to list the types for a given merged API and source API assoc
iation

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTypesByAssociation.html

#### Defined in

actions/appsync.ts:333

___

### PutGraphqlApiEnvironmentVariables

• **PutGraphqlApiEnvironmentVariables** = ``"appsync:PutGraphqlApiEnvironmentVariables"``

Grants permission to update the environment variables for a GraphQL API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_PutGraphqlApiEnvironmentVariables.html

#### Defined in

actions/appsync.ts:339

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"appsync:PutResourcePolicy"``

Grants permission to set a resource policy

See https://docs.aws.amazon.com/appsync/latest/devguide/merge-api.html

#### Defined in

actions/appsync.ts:345

___

### SetWebACL

• **SetWebACL** = ``"appsync:SetWebACL"``

Grants permission to set a web ACL

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_SetWebACL.html

#### Defined in

actions/appsync.ts:351

___

### SourceGraphQL

• **SourceGraphQL** = ``"appsync:SourceGraphQL"``

Grants permission to send a GraphQL query to a source API of a merged API

See https://docs.aws.amazon.com/appsync/latest/devguide/using-your-api.html

#### Defined in

actions/appsync.ts:357

___

### StartDataSourceIntrospection

• **StartDataSourceIntrospection** = ``"appsync:StartDataSourceIntrospection"``

Grants permission to introspect a data source

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_StartDataSourceIntrospection.html

#### Defined in

actions/appsync.ts:363

___

### StartSchemaCreation

• **StartSchemaCreation** = ``"appsync:StartSchemaCreation"``

Grants permission to add a new schema to your GraphQL API. This operation is as
ynchronous - GetSchemaCreationStatus can show when it has completed

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_StartSchemaCreation.html

#### Defined in

actions/appsync.ts:370

___

### StartSchemaMerge

• **StartSchemaMerge** = ``"appsync:StartSchemaMerge"``

Grants permission to initiate a schema merge for a given merged API and associa
ted source API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_StartSchemaMerge.html

#### Defined in

actions/appsync.ts:377

___

### TagResource

• **TagResource** = ``"appsync:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_TagResource.html

#### Defined in

actions/appsync.ts:383

___

### UntagResource

• **UntagResource** = ``"appsync:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_UntagResource.html

#### Defined in

actions/appsync.ts:389

___

### UpdateApiCache

• **UpdateApiCache** = ``"appsync:UpdateApiCache"``

Grants permission to update an API cache in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateApiCache.html

#### Defined in

actions/appsync.ts:395

___

### UpdateApiKey

• **UpdateApiKey** = ``"appsync:UpdateApiKey"``

Grants permission to update an API key for a given API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateApiKey.html

#### Defined in

actions/appsync.ts:401

___

### UpdateDataSource

• **UpdateDataSource** = ``"appsync:UpdateDataSource"``

Grants permission to update a data source

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateDataSource.html

#### Defined in

actions/appsync.ts:407

___

### UpdateDomainName

• **UpdateDomainName** = ``"appsync:UpdateDomainName"``

Grants permission to update a custom domain name in AppSync

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateDomainName.html

#### Defined in

actions/appsync.ts:413

___

### UpdateFunction

• **UpdateFunction** = ``"appsync:UpdateFunction"``

Grants permission to update an existing function

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateFunction.html

#### Defined in

actions/appsync.ts:419

___

### UpdateGraphqlApi

• **UpdateGraphqlApi** = ``"appsync:UpdateGraphqlApi"``

Grants permission to update a GraphQL API

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateGraphqlApi.html

#### Defined in

actions/appsync.ts:425

___

### UpdateResolver

• **UpdateResolver** = ``"appsync:UpdateResolver"``

Grants permission to update a resolver

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateResolver.html

#### Defined in

actions/appsync.ts:431

___

### UpdateSourceApiAssociation

• **UpdateSourceApiAssociation** = ``"appsync:UpdateSourceApiAssociation"``

Grants permission to update a merged API source API association

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateSourceApiAssociation.html

#### Defined in

actions/appsync.ts:437

___

### UpdateType

• **UpdateType** = ``"appsync:UpdateType"``

Grants permission to update a type

See https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateType.html

#### Defined in

actions/appsync.ts:443
