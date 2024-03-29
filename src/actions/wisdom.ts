// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Q in Connect (WISDOM)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqinconnect.html
 *
 * 2024-02-12T09:58:46.768Z
 */
export enum AwsWisdomActions {
  /**
   * Grants permission to create an assistant
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAssistant.html
   */
  CreateAssistant = 'wisdom:CreateAssistant',
  /**
   * Grants permission to create an association between an assistant and another res
   * ource
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAssistantAssociation.html
   */
  CreateAssistantAssociation = 'wisdom:CreateAssistantAssociation',
  /**
   * Grants permission to create content
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html
   */
  CreateContent = 'wisdom:CreateContent',
  /**
   * Grants permission to create a knowledge base
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateKnowledgeBase.html
   */
  CreateKnowledgeBase = 'wisdom:CreateKnowledgeBase',
  /**
   * Grants permission to create quick response
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateQuickResponse.html
   */
  CreateQuickResponse = 'wisdom:CreateQuickResponse',
  /**
   * Grants permission to create a session
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateSession.html
   */
  CreateSession = 'wisdom:CreateSession',
  /**
   * Grants permission to delete an assistant
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAssistant.html
   */
  DeleteAssistant = 'wisdom:DeleteAssistant',
  /**
   * Grants permission to delete an assistant association
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAssistantAssociation.html
   */
  DeleteAssistantAssociation = 'wisdom:DeleteAssistantAssociation',
  /**
   * Grants permission to delete content
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteContent.html
   */
  DeleteContent = 'wisdom:DeleteContent',
  /**
   * Grants permission to delete a import job of a knowledge base
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteImportJob.html
   */
  DeleteImportJob = 'wisdom:DeleteImportJob',
  /**
   * Grants permission to delete a knowledge base
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html
   */
  DeleteKnowledgeBase = 'wisdom:DeleteKnowledgeBase',
  /**
   * Grants permission to delete quick response
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteQuickResponse.html
   */
  DeleteQuickResponse = 'wisdom:DeleteQuickResponse',
  /**
   * Grants permission to retrieve information about an assistant
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetAssistant.html
   */
  GetAssistant = 'wisdom:GetAssistant',
  /**
   * Grants permission to retrieve information about an assistant association
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetAssistantAssociation.html
   */
  GetAssistantAssociation = 'wisdom:GetAssistantAssociation',
  /**
   * Grants permission to retrieve content, including a pre-signed URL to download t
   * he content
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContent.html
   */
  GetContent = 'wisdom:GetContent',
  /**
   * Grants permission to retrieve summary information about the content
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContentSummary.html
   */
  GetContentSummary = 'wisdom:GetContentSummary',
  /**
   * Grants permission to retrieve information about the import job
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetImportJob.html
   */
  GetImportJob = 'wisdom:GetImportJob',
  /**
   * Grants permission to retrieve information about the knowledge base
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetKnowledgeBase.html
   */
  GetKnowledgeBase = 'wisdom:GetKnowledgeBase',
  /**
   * Grants permission to retrieve content
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetQuickResponse.html
   */
  GetQuickResponse = 'wisdom:GetQuickResponse',
  /**
   * Grants permission to retrieve recommendations for the specified session
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html
   */
  GetRecommendations = 'wisdom:GetRecommendations',
  /**
   * Grants permission to retrieve information for a specified session
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetSession.html
   */
  GetSession = 'wisdom:GetSession',
  /**
   * Grants permission to list information about assistant associations
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAssistantAssociations.html
   */
  ListAssistantAssociations = 'wisdom:ListAssistantAssociations',
  /**
   * Grants permission to list information about assistants
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAssistants.html
   */
  ListAssistants = 'wisdom:ListAssistants',
  /**
   * Grants permission to list the content with a knowledge base
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListContents.html
   */
  ListContents = 'wisdom:ListContents',
  /**
   * Grants permission to list information about knowledge bases
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListImportJobs.html
   */
  ListImportJobs = 'wisdom:ListImportJobs',
  /**
   * Grants permission to list information about knowledge bases
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListKnowledgeBases.html
   */
  ListKnowledgeBases = 'wisdom:ListKnowledgeBases',
  /**
   * Grants permission to list the quick response with a knowledge base
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListQuickResponses.html
   */
  ListQuickResponses = 'wisdom:ListQuickResponses',
  /**
   * Grants permission to list the tags for the specified resource
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'wisdom:ListTagsForResource',
  /**
   * Grants permission to remove the specified recommendations from the specified as
   * sistant's queue of newly available recommendations
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html
   */
  NotifyRecommendationsReceived = 'wisdom:NotifyRecommendationsReceived',
  /**
   * Grants permission to submit feedback
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_PutFeedback.html
   */
  PutFeedback = 'wisdom:PutFeedback',
  /**
   * Grants permission to perform a manual search against the specified assistant
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html
   */
  QueryAssistant = 'wisdom:QueryAssistant',
  /**
   * Grants permission to remove a URI template from a knowledge base
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_RemoveKnowledgeBaseTemplateUri.html
   */
  RemoveKnowledgeBaseTemplateUri = 'wisdom:RemoveKnowledgeBaseTemplateUri',
  /**
   * Grants permission to search for content referencing a specified knowledge base.
   * Can be used to get a specific content resource by its name
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchContent.html
   */
  SearchContent = 'wisdom:SearchContent',
  /**
   * Grants permission to search for quick response referencing a specified knowledg
   * e base
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchQuickResponses.html
   */
  SearchQuickResponses = 'wisdom:SearchQuickResponses',
  /**
   * Grants permission to search for sessions referencing a specified assistant. Can
   * be used to et a specific session resource by its name
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchSessions.html
   */
  SearchSessions = 'wisdom:SearchSessions',
  /**
   * Grants permission to get a URL to upload content to a knowledge base
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html
   */
  StartContentUpload = 'wisdom:StartContentUpload',
  /**
   * Grants permission to create multiple quick responses
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartImportJob.html
   */
  StartImportJob = 'wisdom:StartImportJob',
  /**
   * Grants permission to add the specified tags to the specified resource
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_TagResource.html
   */
  TagResource = 'wisdom:TagResource',
  /**
   * Grants permission to remove the specified tags from the specified resource
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'wisdom:UntagResource',
  /**
   * Grants permission to update information about the content
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html
   */
  UpdateContent = 'wisdom:UpdateContent',
  /**
   * Grants permission to update the template URI of a knowledge base
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateKnowledgeBaseTemplateUri.html
   */
  UpdateKnowledgeBaseTemplateUri = 'wisdom:UpdateKnowledgeBaseTemplateUri',
  /**
   * Grants permission to update information or content of the quick response
   *
   * See https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateQuickResponse.html
   */
  UpdateQuickResponse = 'wisdom:UpdateQuickResponse',
}
