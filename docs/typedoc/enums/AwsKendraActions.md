[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsKendraActions

# Enumeration: AwsKendraActions

All IAM policy actions for Amazon Kendra (KENDRA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkendra.html

2024-02-12T09:57:56.055Z

## Table of contents

### Enumeration Members

- [AssociateEntitiesToExperience](AwsKendraActions.md#associateentitiestoexperience)
- [AssociatePersonasToEntities](AwsKendraActions.md#associatepersonastoentities)
- [BatchDeleteDocument](AwsKendraActions.md#batchdeletedocument)
- [BatchDeleteFeaturedResultsSet](AwsKendraActions.md#batchdeletefeaturedresultsset)
- [BatchGetDocumentStatus](AwsKendraActions.md#batchgetdocumentstatus)
- [BatchPutDocument](AwsKendraActions.md#batchputdocument)
- [ClearQuerySuggestions](AwsKendraActions.md#clearquerysuggestions)
- [CreateAccessControlConfiguration](AwsKendraActions.md#createaccesscontrolconfiguration)
- [CreateDataSource](AwsKendraActions.md#createdatasource)
- [CreateExperience](AwsKendraActions.md#createexperience)
- [CreateFaq](AwsKendraActions.md#createfaq)
- [CreateFeaturedResultsSet](AwsKendraActions.md#createfeaturedresultsset)
- [CreateIndex](AwsKendraActions.md#createindex)
- [CreateQuerySuggestionsBlockList](AwsKendraActions.md#createquerysuggestionsblocklist)
- [CreateThesaurus](AwsKendraActions.md#createthesaurus)
- [DeleteAccessControlConfiguration](AwsKendraActions.md#deleteaccesscontrolconfiguration)
- [DeleteDataSource](AwsKendraActions.md#deletedatasource)
- [DeleteExperience](AwsKendraActions.md#deleteexperience)
- [DeleteFaq](AwsKendraActions.md#deletefaq)
- [DeleteIndex](AwsKendraActions.md#deleteindex)
- [DeletePrincipalMapping](AwsKendraActions.md#deleteprincipalmapping)
- [DeleteQuerySuggestionsBlockList](AwsKendraActions.md#deletequerysuggestionsblocklist)
- [DeleteThesaurus](AwsKendraActions.md#deletethesaurus)
- [DescribeAccessControlConfiguration](AwsKendraActions.md#describeaccesscontrolconfiguration)
- [DescribeDataSource](AwsKendraActions.md#describedatasource)
- [DescribeExperience](AwsKendraActions.md#describeexperience)
- [DescribeFaq](AwsKendraActions.md#describefaq)
- [DescribeFeaturedResultsSet](AwsKendraActions.md#describefeaturedresultsset)
- [DescribeIndex](AwsKendraActions.md#describeindex)
- [DescribePrincipalMapping](AwsKendraActions.md#describeprincipalmapping)
- [DescribeQuerySuggestionsBlockList](AwsKendraActions.md#describequerysuggestionsblocklist)
- [DescribeQuerySuggestionsConfig](AwsKendraActions.md#describequerysuggestionsconfig)
- [DescribeThesaurus](AwsKendraActions.md#describethesaurus)
- [DisassociateEntitiesFromExperience](AwsKendraActions.md#disassociateentitiesfromexperience)
- [DisassociatePersonasFromEntities](AwsKendraActions.md#disassociatepersonasfromentities)
- [GetQuerySuggestions](AwsKendraActions.md#getquerysuggestions)
- [GetSnapshots](AwsKendraActions.md#getsnapshots)
- [ListAccessControlConfigurations](AwsKendraActions.md#listaccesscontrolconfigurations)
- [ListDataSourceSyncJobs](AwsKendraActions.md#listdatasourcesyncjobs)
- [ListDataSources](AwsKendraActions.md#listdatasources)
- [ListEntityPersonas](AwsKendraActions.md#listentitypersonas)
- [ListExperienceEntities](AwsKendraActions.md#listexperienceentities)
- [ListExperiences](AwsKendraActions.md#listexperiences)
- [ListFaqs](AwsKendraActions.md#listfaqs)
- [ListFeaturedResultsSets](AwsKendraActions.md#listfeaturedresultssets)
- [ListGroupsOlderThanOrderingId](AwsKendraActions.md#listgroupsolderthanorderingid)
- [ListIndices](AwsKendraActions.md#listindices)
- [ListQuerySuggestionsBlockLists](AwsKendraActions.md#listquerysuggestionsblocklists)
- [ListTagsForResource](AwsKendraActions.md#listtagsforresource)
- [ListThesauri](AwsKendraActions.md#listthesauri)
- [PutPrincipalMapping](AwsKendraActions.md#putprincipalmapping)
- [Query](AwsKendraActions.md#query)
- [Retrieve](AwsKendraActions.md#retrieve)
- [StartDataSourceSyncJob](AwsKendraActions.md#startdatasourcesyncjob)
- [StopDataSourceSyncJob](AwsKendraActions.md#stopdatasourcesyncjob)
- [SubmitFeedback](AwsKendraActions.md#submitfeedback)
- [TagResource](AwsKendraActions.md#tagresource)
- [UntagResource](AwsKendraActions.md#untagresource)
- [UpdateAccessControlConfiguration](AwsKendraActions.md#updateaccesscontrolconfiguration)
- [UpdateDataSource](AwsKendraActions.md#updatedatasource)
- [UpdateExperience](AwsKendraActions.md#updateexperience)
- [UpdateFeaturedResultsSet](AwsKendraActions.md#updatefeaturedresultsset)
- [UpdateIndex](AwsKendraActions.md#updateindex)
- [UpdateQuerySuggestionsBlockList](AwsKendraActions.md#updatequerysuggestionsblocklist)
- [UpdateQuerySuggestionsConfig](AwsKendraActions.md#updatequerysuggestionsconfig)
- [UpdateThesaurus](AwsKendraActions.md#updatethesaurus)

## Enumeration Members

### AssociateEntitiesToExperience

• **AssociateEntitiesToExperience** = ``"kendra:AssociateEntitiesToExperience"``

Grants permission to put principal mapping in index

See https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html

#### Defined in

actions/kendra.ts:17

___

### AssociatePersonasToEntities

• **AssociatePersonasToEntities** = ``"kendra:AssociatePersonasToEntities"``

Defines the specific permissions of users or groups in your AWS SSO identity so
urce with access to your Amazon Kendra experience

See https://docs.aws.amazon.com/kendra/latest/dg/API_AssociatePersonasToEntities.html

#### Defined in

actions/kendra.ts:24

___

### BatchDeleteDocument

• **BatchDeleteDocument** = ``"kendra:BatchDeleteDocument"``

Grants permission to batch delete document

See https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html

#### Defined in

actions/kendra.ts:30

___

### BatchDeleteFeaturedResultsSet

• **BatchDeleteFeaturedResultsSet** = ``"kendra:BatchDeleteFeaturedResultsSet"``

Grants permission to delete a featured results set

See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFeaturedResults.html

#### Defined in

actions/kendra.ts:36

___

### BatchGetDocumentStatus

• **BatchGetDocumentStatus** = ``"kendra:BatchGetDocumentStatus"``

Grants permission to do batch get document status

See https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html

#### Defined in

actions/kendra.ts:42

___

### BatchPutDocument

• **BatchPutDocument** = ``"kendra:BatchPutDocument"``

Grants permission to batch put document

See https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html

#### Defined in

actions/kendra.ts:48

___

### ClearQuerySuggestions

• **ClearQuerySuggestions** = ``"kendra:ClearQuerySuggestions"``

Grants permission to clear out the suggestions for a given index, generated so
far

See https://docs.aws.amazon.com/kendra/latest/dg/API_ClearQuerySuggestions.html

#### Defined in

actions/kendra.ts:55

___

### CreateAccessControlConfiguration

• **CreateAccessControlConfiguration** = ``"kendra:CreateAccessControlConfiguration"``

Grants permission to create an access control configuration

See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateAccessControlConfiguration.html

#### Defined in

actions/kendra.ts:61

___

### CreateDataSource

• **CreateDataSource** = ``"kendra:CreateDataSource"``

Grants permission to create a data source

See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html

#### Defined in

actions/kendra.ts:67

___

### CreateExperience

• **CreateExperience** = ``"kendra:CreateExperience"``

Creates an Amazon Kendra experience such as a search application

See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateExperience.html

#### Defined in

actions/kendra.ts:73

___

### CreateFaq

• **CreateFaq** = ``"kendra:CreateFaq"``

Grants permission to create an Faq

See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateFaq.html

#### Defined in

actions/kendra.ts:79

___

### CreateFeaturedResultsSet

• **CreateFeaturedResultsSet** = ``"kendra:CreateFeaturedResultsSet"``

Grants permission to create a featured results set

See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateFeaturedResults.html

#### Defined in

actions/kendra.ts:85

___

### CreateIndex

• **CreateIndex** = ``"kendra:CreateIndex"``

Grants permission to create an Index

See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateIndex.html

#### Defined in

actions/kendra.ts:91

___

### CreateQuerySuggestionsBlockList

• **CreateQuerySuggestionsBlockList** = ``"kendra:CreateQuerySuggestionsBlockList"``

Grants permission to create a QuerySuggestions BlockList

See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateQuerySuggestionsBlockList.html

#### Defined in

actions/kendra.ts:97

___

### CreateThesaurus

• **CreateThesaurus** = ``"kendra:CreateThesaurus"``

Grants permission to create a Thesaurus

See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateThesaurus.html

#### Defined in

actions/kendra.ts:103

___

### DeleteAccessControlConfiguration

• **DeleteAccessControlConfiguration** = ``"kendra:DeleteAccessControlConfiguration"``

Grants permission to delete an access control configuration

See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteAccessControlConfiguration.html

#### Defined in

actions/kendra.ts:109

___

### DeleteDataSource

• **DeleteDataSource** = ``"kendra:DeleteDataSource"``

Grants permission to delete a data source

See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteDataSource.html

#### Defined in

actions/kendra.ts:115

___

### DeleteExperience

• **DeleteExperience** = ``"kendra:DeleteExperience"``

Deletes your Amazon Kendra experience such as a search application

See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteExperience.html

#### Defined in

actions/kendra.ts:121

___

### DeleteFaq

• **DeleteFaq** = ``"kendra:DeleteFaq"``

Grants permission to delete an Faq

See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFaq.html

#### Defined in

actions/kendra.ts:127

___

### DeleteIndex

• **DeleteIndex** = ``"kendra:DeleteIndex"``

Grants permission to delete an Index

See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteIndex.html

#### Defined in

actions/kendra.ts:133

___

### DeletePrincipalMapping

• **DeletePrincipalMapping** = ``"kendra:DeletePrincipalMapping"``

Grants permission to delete principal mapping from index

See https://docs.aws.amazon.com/kendra/latest/dg/API_DeletePrincipalMapping.html

#### Defined in

actions/kendra.ts:139

___

### DeleteQuerySuggestionsBlockList

• **DeleteQuerySuggestionsBlockList** = ``"kendra:DeleteQuerySuggestionsBlockList"``

Grants permission to delete a QuerySuggestions BlockList

See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteQuerySuggestionsBlockList.html

#### Defined in

actions/kendra.ts:145

___

### DeleteThesaurus

• **DeleteThesaurus** = ``"kendra:DeleteThesaurus"``

Grants permission to delete a Thesaurus

See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteThesaurus.html

#### Defined in

actions/kendra.ts:151

___

### DescribeAccessControlConfiguration

• **DescribeAccessControlConfiguration** = ``"kendra:DescribeAccessControlConfiguration"``

Grants permission to describe an access control configuration

See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeAccessControlConfiguration.html

#### Defined in

actions/kendra.ts:157

___

### DescribeDataSource

• **DescribeDataSource** = ``"kendra:DescribeDataSource"``

Grants permission to describe a data source

See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeDataSource.html

#### Defined in

actions/kendra.ts:163

___

### DescribeExperience

• **DescribeExperience** = ``"kendra:DescribeExperience"``

Gets information about your Amazon Kendra experience such as a search applicati
on

See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeExperience.html

#### Defined in

actions/kendra.ts:170

___

### DescribeFaq

• **DescribeFaq** = ``"kendra:DescribeFaq"``

Grants permission to describe an Faq

See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeFaq.html

#### Defined in

actions/kendra.ts:176

___

### DescribeFeaturedResultsSet

• **DescribeFeaturedResultsSet** = ``"kendra:DescribeFeaturedResultsSet"``

Grants permission to describe a featured results set

See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeThesaurus.html

#### Defined in

actions/kendra.ts:182

___

### DescribeIndex

• **DescribeIndex** = ``"kendra:DescribeIndex"``

Grants permission to describe an Index

See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeIndex.html

#### Defined in

actions/kendra.ts:188

___

### DescribePrincipalMapping

• **DescribePrincipalMapping** = ``"kendra:DescribePrincipalMapping"``

Grants permission to describe principal mapping from index

See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribePrincipalMapping.html

#### Defined in

actions/kendra.ts:194

___

### DescribeQuerySuggestionsBlockList

• **DescribeQuerySuggestionsBlockList** = ``"kendra:DescribeQuerySuggestionsBlockList"``

Grants permission to describe a QuerySuggestions BlockList

See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeQuerySuggestionsBlockList.html

#### Defined in

actions/kendra.ts:200

___

### DescribeQuerySuggestionsConfig

• **DescribeQuerySuggestionsConfig** = ``"kendra:DescribeQuerySuggestionsConfig"``

Grants permission to describe the query suggestions configuration for an index

See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeQuerySuggestionsConfig.html

#### Defined in

actions/kendra.ts:206

___

### DescribeThesaurus

• **DescribeThesaurus** = ``"kendra:DescribeThesaurus"``

Grants permission to describe a Thesaurus

See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeThesaurus.html

#### Defined in

actions/kendra.ts:212

___

### DisassociateEntitiesFromExperience

• **DisassociateEntitiesFromExperience** = ``"kendra:DisassociateEntitiesFromExperience"``

Prevents users or groups in your AWS SSO identity source from accessing your Am
azon Kendra experience

See https://docs.aws.amazon.com/kendra/latest/dg/API_DisassociateEntitiesFromExperience.html

#### Defined in

actions/kendra.ts:219

___

### DisassociatePersonasFromEntities

• **DisassociatePersonasFromEntities** = ``"kendra:DisassociatePersonasFromEntities"``

Removes the specific permissions of users or groups in your AWS SSO identity so
urce with access to your Amazon Kendra experience

See https://docs.aws.amazon.com/kendra/latest/dg/API_DisassociatePersonasFromEntities.html

#### Defined in

actions/kendra.ts:226

___

### GetQuerySuggestions

• **GetQuerySuggestions** = ``"kendra:GetQuerySuggestions"``

Grants permission to get suggestions for a query prefix

See https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html

#### Defined in

actions/kendra.ts:232

___

### GetSnapshots

• **GetSnapshots** = ``"kendra:GetSnapshots"``

Retrieves search metrics data

See https://docs.aws.amazon.com/kendra/latest/dg/API_GetSnapshots.html

#### Defined in

actions/kendra.ts:238

___

### ListAccessControlConfigurations

• **ListAccessControlConfigurations** = ``"kendra:ListAccessControlConfigurations"``

Grants permission to list the access control configurations

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListAccessControlConfigurations.html

#### Defined in

actions/kendra.ts:244

___

### ListDataSourceSyncJobs

• **ListDataSourceSyncJobs** = ``"kendra:ListDataSourceSyncJobs"``

Grants permission to get Data Source sync job history

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSourceSyncJobs.html

#### Defined in

actions/kendra.ts:250

___

### ListDataSources

• **ListDataSources** = ``"kendra:ListDataSources"``

Grants permission to list the data sources

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSources.html

#### Defined in

actions/kendra.ts:256

___

### ListEntityPersonas

• **ListEntityPersonas** = ``"kendra:ListEntityPersonas"``

Lists specific permissions of users and groups with access to your Amazon Kendr
a experience

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListEntityPersonas.html

#### Defined in

actions/kendra.ts:263

___

### ListExperienceEntities

• **ListExperienceEntities** = ``"kendra:ListExperienceEntities"``

Lists users or groups in your AWS SSO identity source that are granted access t
o your Amazon Kendra experience

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListExperienceEntities.html

#### Defined in

actions/kendra.ts:270

___

### ListExperiences

• **ListExperiences** = ``"kendra:ListExperiences"``

Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra ex
perience such as a search application

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListExperiences.html

#### Defined in

actions/kendra.ts:277

___

### ListFaqs

• **ListFaqs** = ``"kendra:ListFaqs"``

Grants permission to list the Faqs

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListFaqs.html

#### Defined in

actions/kendra.ts:283

___

### ListFeaturedResultsSets

• **ListFeaturedResultsSets** = ``"kendra:ListFeaturedResultsSets"``

Grants permission to list the featured results sets

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListFeaturedResults.html

#### Defined in

actions/kendra.ts:289

___

### ListGroupsOlderThanOrderingId

• **ListGroupsOlderThanOrderingId** = ``"kendra:ListGroupsOlderThanOrderingId"``

Grants permission to list groups that are older than an ordering id

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListGroupsOlderThanOrderingId.html

#### Defined in

actions/kendra.ts:295

___

### ListIndices

• **ListIndices** = ``"kendra:ListIndices"``

Grants permission to list the indexes

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListIndices.html

#### Defined in

actions/kendra.ts:301

___

### ListQuerySuggestionsBlockLists

• **ListQuerySuggestionsBlockLists** = ``"kendra:ListQuerySuggestionsBlockLists"``

Grants permission to list the QuerySuggestions BlockLists

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListQuerySuggestionsBlockLists.html

#### Defined in

actions/kendra.ts:307

___

### ListTagsForResource

• **ListTagsForResource** = ``"kendra:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListTagsForResource.html

#### Defined in

actions/kendra.ts:313

___

### ListThesauri

• **ListThesauri** = ``"kendra:ListThesauri"``

Grants permission to list the Thesauri

See https://docs.aws.amazon.com/kendra/latest/dg/API_ListThesauri.html

#### Defined in

actions/kendra.ts:319

___

### PutPrincipalMapping

• **PutPrincipalMapping** = ``"kendra:PutPrincipalMapping"``

Grants permission to put principal mapping in index

See https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html

#### Defined in

actions/kendra.ts:325

___

### Query

• **Query** = ``"kendra:Query"``

Grants permission to query documents and faqs

See https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html

#### Defined in

actions/kendra.ts:331

___

### Retrieve

• **Retrieve** = ``"kendra:Retrieve"``

Grants permission to retrieve relevant content from an index

See https://docs.aws.amazon.com/kendra/latest/dg/API_Retrieve.html

#### Defined in

actions/kendra.ts:337

___

### StartDataSourceSyncJob

• **StartDataSourceSyncJob** = ``"kendra:StartDataSourceSyncJob"``

Grants permission to start Data Source sync job

See https://docs.aws.amazon.com/kendra/latest/dg/API_StartDataSourceSyncJob.html

#### Defined in

actions/kendra.ts:343

___

### StopDataSourceSyncJob

• **StopDataSourceSyncJob** = ``"kendra:StopDataSourceSyncJob"``

Grants permission to stop Data Source sync job

See https://docs.aws.amazon.com/kendra/latest/dg/API_StopDataSourceSyncJob.html

#### Defined in

actions/kendra.ts:349

___

### SubmitFeedback

• **SubmitFeedback** = ``"kendra:SubmitFeedback"``

Grants permission to send feedback about a query results

See https://docs.aws.amazon.com/kendra/latest/dg/API_SubmitFeedback.html

#### Defined in

actions/kendra.ts:355

___

### TagResource

• **TagResource** = ``"kendra:TagResource"``

Grants permission to tag a resource with given key value pairs

See https://docs.aws.amazon.com/kendra/latest/dg/API_TagResource.html

#### Defined in

actions/kendra.ts:361

___

### UntagResource

• **UntagResource** = ``"kendra:UntagResource"``

Grants permission to remove the tag with the given key from a resource

See https://docs.aws.amazon.com/kendra/latest/dg/API_UntagResource.html

#### Defined in

actions/kendra.ts:367

___

### UpdateAccessControlConfiguration

• **UpdateAccessControlConfiguration** = ``"kendra:UpdateAccessControlConfiguration"``

Grants permission to update an access control configuration

See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateAccessControlConfiguration.html

#### Defined in

actions/kendra.ts:373

___

### UpdateDataSource

• **UpdateDataSource** = ``"kendra:UpdateDataSource"``

Grants permission to update a data source

See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateDataSource.html

#### Defined in

actions/kendra.ts:379

___

### UpdateExperience

• **UpdateExperience** = ``"kendra:UpdateExperience"``

Updates your Amazon Kendra experience such as a search application

See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateExperience.html

#### Defined in

actions/kendra.ts:385

___

### UpdateFeaturedResultsSet

• **UpdateFeaturedResultsSet** = ``"kendra:UpdateFeaturedResultsSet"``

Grants permission to update a featured results set

See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateFeaturedResults.html

#### Defined in

actions/kendra.ts:391

___

### UpdateIndex

• **UpdateIndex** = ``"kendra:UpdateIndex"``

Grants permission to update an Index

See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html

#### Defined in

actions/kendra.ts:397

___

### UpdateQuerySuggestionsBlockList

• **UpdateQuerySuggestionsBlockList** = ``"kendra:UpdateQuerySuggestionsBlockList"``

Grants permission to update a QuerySuggestions BlockList

See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsBlockList.html

#### Defined in

actions/kendra.ts:403

___

### UpdateQuerySuggestionsConfig

• **UpdateQuerySuggestionsConfig** = ``"kendra:UpdateQuerySuggestionsConfig"``

Grants permission to update the query suggestions configuration for an index

See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html

#### Defined in

actions/kendra.ts:409

___

### UpdateThesaurus

• **UpdateThesaurus** = ``"kendra:UpdateThesaurus"``

Grants permission to update a thesaurus

See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateThesaurus.html

#### Defined in

actions/kendra.ts:415
