// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Kendra (KENDRA)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkendra.html
 *
 * 2024-02-12T09:57:56.055Z
 */
export enum AwsKendraActions {
  /**
   * Grants permission to put principal mapping in index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html
   */
  AssociateEntitiesToExperience = 'kendra:AssociateEntitiesToExperience',
  /**
   * Defines the specific permissions of users or groups in your AWS SSO identity so
   * urce with access to your Amazon Kendra experience
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_AssociatePersonasToEntities.html
   */
  AssociatePersonasToEntities = 'kendra:AssociatePersonasToEntities',
  /**
   * Grants permission to batch delete document
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html
   */
  BatchDeleteDocument = 'kendra:BatchDeleteDocument',
  /**
   * Grants permission to delete a featured results set
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFeaturedResults.html
   */
  BatchDeleteFeaturedResultsSet = 'kendra:BatchDeleteFeaturedResultsSet',
  /**
   * Grants permission to do batch get document status
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html
   */
  BatchGetDocumentStatus = 'kendra:BatchGetDocumentStatus',
  /**
   * Grants permission to batch put document
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html
   */
  BatchPutDocument = 'kendra:BatchPutDocument',
  /**
   * Grants permission to clear out the suggestions for a given index, generated so
   * far
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ClearQuerySuggestions.html
   */
  ClearQuerySuggestions = 'kendra:ClearQuerySuggestions',
  /**
   * Grants permission to create an access control configuration
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateAccessControlConfiguration.html
   */
  CreateAccessControlConfiguration = 'kendra:CreateAccessControlConfiguration',
  /**
   * Grants permission to create a data source
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html
   */
  CreateDataSource = 'kendra:CreateDataSource',
  /**
   * Creates an Amazon Kendra experience such as a search application
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateExperience.html
   */
  CreateExperience = 'kendra:CreateExperience',
  /**
   * Grants permission to create an Faq
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateFaq.html
   */
  CreateFaq = 'kendra:CreateFaq',
  /**
   * Grants permission to create a featured results set
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateFeaturedResults.html
   */
  CreateFeaturedResultsSet = 'kendra:CreateFeaturedResultsSet',
  /**
   * Grants permission to create an Index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateIndex.html
   */
  CreateIndex = 'kendra:CreateIndex',
  /**
   * Grants permission to create a QuerySuggestions BlockList
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateQuerySuggestionsBlockList.html
   */
  CreateQuerySuggestionsBlockList = 'kendra:CreateQuerySuggestionsBlockList',
  /**
   * Grants permission to create a Thesaurus
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_CreateThesaurus.html
   */
  CreateThesaurus = 'kendra:CreateThesaurus',
  /**
   * Grants permission to delete an access control configuration
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteAccessControlConfiguration.html
   */
  DeleteAccessControlConfiguration = 'kendra:DeleteAccessControlConfiguration',
  /**
   * Grants permission to delete a data source
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteDataSource.html
   */
  DeleteDataSource = 'kendra:DeleteDataSource',
  /**
   * Deletes your Amazon Kendra experience such as a search application
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteExperience.html
   */
  DeleteExperience = 'kendra:DeleteExperience',
  /**
   * Grants permission to delete an Faq
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFaq.html
   */
  DeleteFaq = 'kendra:DeleteFaq',
  /**
   * Grants permission to delete an Index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteIndex.html
   */
  DeleteIndex = 'kendra:DeleteIndex',
  /**
   * Grants permission to delete principal mapping from index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DeletePrincipalMapping.html
   */
  DeletePrincipalMapping = 'kendra:DeletePrincipalMapping',
  /**
   * Grants permission to delete a QuerySuggestions BlockList
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteQuerySuggestionsBlockList.html
   */
  DeleteQuerySuggestionsBlockList = 'kendra:DeleteQuerySuggestionsBlockList',
  /**
   * Grants permission to delete a Thesaurus
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteThesaurus.html
   */
  DeleteThesaurus = 'kendra:DeleteThesaurus',
  /**
   * Grants permission to describe an access control configuration
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeAccessControlConfiguration.html
   */
  DescribeAccessControlConfiguration = 'kendra:DescribeAccessControlConfiguration',
  /**
   * Grants permission to describe a data source
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeDataSource.html
   */
  DescribeDataSource = 'kendra:DescribeDataSource',
  /**
   * Gets information about your Amazon Kendra experience such as a search applicati
   * on
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeExperience.html
   */
  DescribeExperience = 'kendra:DescribeExperience',
  /**
   * Grants permission to describe an Faq
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeFaq.html
   */
  DescribeFaq = 'kendra:DescribeFaq',
  /**
   * Grants permission to describe a featured results set
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeThesaurus.html
   */
  DescribeFeaturedResultsSet = 'kendra:DescribeFeaturedResultsSet',
  /**
   * Grants permission to describe an Index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeIndex.html
   */
  DescribeIndex = 'kendra:DescribeIndex',
  /**
   * Grants permission to describe principal mapping from index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribePrincipalMapping.html
   */
  DescribePrincipalMapping = 'kendra:DescribePrincipalMapping',
  /**
   * Grants permission to describe a QuerySuggestions BlockList
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeQuerySuggestionsBlockList.html
   */
  DescribeQuerySuggestionsBlockList = 'kendra:DescribeQuerySuggestionsBlockList',
  /**
   * Grants permission to describe the query suggestions configuration for an index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeQuerySuggestionsConfig.html
   */
  DescribeQuerySuggestionsConfig = 'kendra:DescribeQuerySuggestionsConfig',
  /**
   * Grants permission to describe a Thesaurus
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeThesaurus.html
   */
  DescribeThesaurus = 'kendra:DescribeThesaurus',
  /**
   * Prevents users or groups in your AWS SSO identity source from accessing your Am
   * azon Kendra experience
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DisassociateEntitiesFromExperience.html
   */
  DisassociateEntitiesFromExperience = 'kendra:DisassociateEntitiesFromExperience',
  /**
   * Removes the specific permissions of users or groups in your AWS SSO identity so
   * urce with access to your Amazon Kendra experience
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_DisassociatePersonasFromEntities.html
   */
  DisassociatePersonasFromEntities = 'kendra:DisassociatePersonasFromEntities',
  /**
   * Grants permission to get suggestions for a query prefix
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html
   */
  GetQuerySuggestions = 'kendra:GetQuerySuggestions',
  /**
   * Retrieves search metrics data
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_GetSnapshots.html
   */
  GetSnapshots = 'kendra:GetSnapshots',
  /**
   * Grants permission to list the access control configurations
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListAccessControlConfigurations.html
   */
  ListAccessControlConfigurations = 'kendra:ListAccessControlConfigurations',
  /**
   * Grants permission to get Data Source sync job history
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSourceSyncJobs.html
   */
  ListDataSourceSyncJobs = 'kendra:ListDataSourceSyncJobs',
  /**
   * Grants permission to list the data sources
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSources.html
   */
  ListDataSources = 'kendra:ListDataSources',
  /**
   * Lists specific permissions of users and groups with access to your Amazon Kendr
   * a experience
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListEntityPersonas.html
   */
  ListEntityPersonas = 'kendra:ListEntityPersonas',
  /**
   * Lists users or groups in your AWS SSO identity source that are granted access t
   * o your Amazon Kendra experience
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListExperienceEntities.html
   */
  ListExperienceEntities = 'kendra:ListExperienceEntities',
  /**
   * Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra ex
   * perience such as a search application
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListExperiences.html
   */
  ListExperiences = 'kendra:ListExperiences',
  /**
   * Grants permission to list the Faqs
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListFaqs.html
   */
  ListFaqs = 'kendra:ListFaqs',
  /**
   * Grants permission to list the featured results sets
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListFeaturedResults.html
   */
  ListFeaturedResultsSets = 'kendra:ListFeaturedResultsSets',
  /**
   * Grants permission to list groups that are older than an ordering id
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListGroupsOlderThanOrderingId.html
   */
  ListGroupsOlderThanOrderingId = 'kendra:ListGroupsOlderThanOrderingId',
  /**
   * Grants permission to list the indexes
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListIndices.html
   */
  ListIndices = 'kendra:ListIndices',
  /**
   * Grants permission to list the QuerySuggestions BlockLists
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListQuerySuggestionsBlockLists.html
   */
  ListQuerySuggestionsBlockLists = 'kendra:ListQuerySuggestionsBlockLists',
  /**
   * Grants permission to list tags for a resource
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListTagsForResource.html
   */
  ListTagsForResource = 'kendra:ListTagsForResource',
  /**
   * Grants permission to list the Thesauri
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_ListThesauri.html
   */
  ListThesauri = 'kendra:ListThesauri',
  /**
   * Grants permission to put principal mapping in index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html
   */
  PutPrincipalMapping = 'kendra:PutPrincipalMapping',
  /**
   * Grants permission to query documents and faqs
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html
   */
  Query = 'kendra:Query',
  /**
   * Grants permission to retrieve relevant content from an index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_Retrieve.html
   */
  Retrieve = 'kendra:Retrieve',
  /**
   * Grants permission to start Data Source sync job
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_StartDataSourceSyncJob.html
   */
  StartDataSourceSyncJob = 'kendra:StartDataSourceSyncJob',
  /**
   * Grants permission to stop Data Source sync job
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_StopDataSourceSyncJob.html
   */
  StopDataSourceSyncJob = 'kendra:StopDataSourceSyncJob',
  /**
   * Grants permission to send feedback about a query results
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_SubmitFeedback.html
   */
  SubmitFeedback = 'kendra:SubmitFeedback',
  /**
   * Grants permission to tag a resource with given key value pairs
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_TagResource.html
   */
  TagResource = 'kendra:TagResource',
  /**
   * Grants permission to remove the tag with the given key from a resource
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_UntagResource.html
   */
  UntagResource = 'kendra:UntagResource',
  /**
   * Grants permission to update an access control configuration
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateAccessControlConfiguration.html
   */
  UpdateAccessControlConfiguration = 'kendra:UpdateAccessControlConfiguration',
  /**
   * Grants permission to update a data source
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateDataSource.html
   */
  UpdateDataSource = 'kendra:UpdateDataSource',
  /**
   * Updates your Amazon Kendra experience such as a search application
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateExperience.html
   */
  UpdateExperience = 'kendra:UpdateExperience',
  /**
   * Grants permission to update a featured results set
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateFeaturedResults.html
   */
  UpdateFeaturedResultsSet = 'kendra:UpdateFeaturedResultsSet',
  /**
   * Grants permission to update an Index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html
   */
  UpdateIndex = 'kendra:UpdateIndex',
  /**
   * Grants permission to update a QuerySuggestions BlockList
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsBlockList.html
   */
  UpdateQuerySuggestionsBlockList = 'kendra:UpdateQuerySuggestionsBlockList',
  /**
   * Grants permission to update the query suggestions configuration for an index
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html
   */
  UpdateQuerySuggestionsConfig = 'kendra:UpdateQuerySuggestionsConfig',
  /**
   * Grants permission to update a thesaurus
   *
   * See https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateThesaurus.html
   */
  UpdateThesaurus = 'kendra:UpdateThesaurus',
}
