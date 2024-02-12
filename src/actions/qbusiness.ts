// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Q Business (QBUSINESS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqbusiness.html
 *
 * 2024-02-12T09:58:46.233Z
 */
export enum AwsQbusinessActions {
  /**
   * Grants permission to add one or more users for licenses
   *
   * See ${APIReferenceDocPage}API_AddUserLicenses.html
   */
  AddUserLicenses = 'qbusiness:AddUserLicenses',
  /**
   * Grants permission to batch delete document
   *
   * See ${APIReferenceDocPage}API_BatchDeleteDocument.html
   */
  BatchDeleteDocument = 'qbusiness:BatchDeleteDocument',
  /**
   * Grants permission to batch put document
   *
   * See ${APIReferenceDocPage}API_BatchPutDocument.html
   */
  BatchPutDocument = 'qbusiness:BatchPutDocument',
  /**
   * Grants permission to chat using an application
   *
   * See ${APIReferenceDocPage}API_Chat.html
   */
  Chat = 'qbusiness:Chat',
  /**
   * Grants permission to chat synchronously using an application
   *
   * See ${APIReferenceDocPage}API_ChatSync.html
   */
  ChatSync = 'qbusiness:ChatSync',
  /**
   * Grants permission to create an application
   *
   * See ${APIReferenceDocPage}API_CreateApplication.html
   */
  CreateApplication = 'qbusiness:CreateApplication',
  /**
   * Grants permission to create a data source for a given application and index
   *
   * See ${APIReferenceDocPage}API_CreateDataSource.html
   */
  CreateDataSource = 'qbusiness:CreateDataSource',
  /**
   * Grants permission to create an index for a given application
   *
   * See ${APIReferenceDocPage}API_CreateIndex.html
   */
  CreateIndex = 'qbusiness:CreateIndex',
  /**
   * Grants permission to create a license
   *
   * See ${APIReferenceDocPage}API_CreateLicense.html
   */
  CreateLicense = 'qbusiness:CreateLicense',
  /**
   * Grants permission to create a plugin for a given application
   *
   * See ${APIReferenceDocPage}API_CreatePlugin.html
   */
  CreatePlugin = 'qbusiness:CreatePlugin',
  /**
   * Grants permission to create a retriever for a given application
   *
   * See ${APIReferenceDocPage}API_CreateRetriever.html
   */
  CreateRetriever = 'qbusiness:CreateRetriever',
  /**
   * Grants permission to create a user
   *
   * See ${APIReferenceDocPage}API_CreateUser.html
   */
  CreateUser = 'qbusiness:CreateUser',
  /**
   * Grants permission to create a web experience for a given application
   *
   * See ${APIReferenceDocPage}API_CreateWebExperience.html
   */
  CreateWebExperience = 'qbusiness:CreateWebExperience',
  /**
   * Grants permission to delete an application
   *
   * See ${APIReferenceDocPage}API_DeleteApplication.html
   */
  DeleteApplication = 'qbusiness:DeleteApplication',
  /**
   * Grants permission to delete chat controls configuration for an application
   *
   * See ${APIReferenceDocPage}API_DeleteChatControlsConfiguration.html
   */
  DeleteChatControlsConfiguration = 'qbusiness:DeleteChatControlsConfiguration',
  /**
   * Grants permission to delete a conversation
   *
   * See ${APIReferenceDocPage}API_DeleteConversation.html
   */
  DeleteConversation = 'qbusiness:DeleteConversation',
  /**
   * Grants permission to delete a DataSource
   *
   * See ${APIReferenceDocPage}API_DeleteDataSource.html
   */
  DeleteDataSource = 'qbusiness:DeleteDataSource',
  /**
   * Grants permission to delete a group
   *
   * See ${APIReferenceDocPage}API_DeleteGroup.html
   */
  DeleteGroup = 'qbusiness:DeleteGroup',
  /**
   * Grants permission to delete an index
   *
   * See ${APIReferenceDocPage}API_DeleteIndex.html
   */
  DeleteIndex = 'qbusiness:DeleteIndex',
  /**
   * Grants permission to delete a plugin
   *
   * See ${APIReferenceDocPage}API_DeletePlugin.html
   */
  DeletePlugin = 'qbusiness:DeletePlugin',
  /**
   * Grants permission to delete a retriever
   *
   * See ${APIReferenceDocPage}API_DeleteRetriever.html
   */
  DeleteRetriever = 'qbusiness:DeleteRetriever',
  /**
   * Grants permission to delete a user
   *
   * See ${APIReferenceDocPage}API_DeleteUser.html
   */
  DeleteUser = 'qbusiness:DeleteUser',
  /**
   * Grants permission to delete a web-experience
   *
   * See ${APIReferenceDocPage}API_DeleteWebExperience.html
   */
  DeleteWebExperience = 'qbusiness:DeleteWebExperience',
  /**
   * Grants permission to get an application
   *
   * See ${APIReferenceDocPage}API_GetApplication.html
   */
  GetApplication = 'qbusiness:GetApplication',
  /**
   * Grants permission to get chat controls configuration for an application
   *
   * See ${APIReferenceDocPage}API_GetChatControlsConfiguration.html
   */
  GetChatControlsConfiguration = 'qbusiness:GetChatControlsConfiguration',
  /**
   * Grants permission to get a data source
   *
   * See ${APIReferenceDocPage}API_GetDataSource.html
   */
  GetDataSource = 'qbusiness:GetDataSource',
  /**
   * Grants permission to get a group
   *
   * See ${APIReferenceDocPage}API_GetGroup.html
   */
  GetGroup = 'qbusiness:GetGroup',
  /**
   * Grants permission to get an index
   *
   * See ${APIReferenceDocPage}API_GetIndex.html
   */
  GetIndex = 'qbusiness:GetIndex',
  /**
   * Grants permission to get a license
   *
   * See ${APIReferenceDocPage}API_GetLicense.html
   */
  GetLicense = 'qbusiness:GetLicense',
  /**
   * Grants permission to get a plugin
   *
   * See ${APIReferenceDocPage}API_GetPlugin.html
   */
  GetPlugin = 'qbusiness:GetPlugin',
  /**
   * Grants permission to get a retriever
   *
   * See ${APIReferenceDocPage}API_GetRetriever.html
   */
  GetRetriever = 'qbusiness:GetRetriever',
  /**
   * Grants permission to get a user
   *
   * See ${APIReferenceDocPage}API_GetUser.html
   */
  GetUser = 'qbusiness:GetUser',
  /**
   * Grants permission to get a web-experience
   *
   * See ${APIReferenceDocPage}API_GetWebExperience.html
   */
  GetWebExperience = 'qbusiness:GetWebExperience',
  /**
   * Grants permission to list the applications
   *
   * See ${APIReferenceDocPage}API_ListApplications.html
   */
  ListApplications = 'qbusiness:ListApplications',
  /**
   * Grants permission to list all conversations for an application
   *
   * See ${APIReferenceDocPage}API_ListConversations.html
   */
  ListConversations = 'qbusiness:ListConversations',
  /**
   * Grants permission to get Data Source sync job history
   *
   * See ${APIReferenceDocPage}API_ListDataSourceSyncJobs.html
   */
  ListDataSourceSyncJobs = 'qbusiness:ListDataSourceSyncJobs',
  /**
   * Grants permission to list the data sources of an application and an index
   *
   * See ${APIReferenceDocPage}API_ListDataSources.html
   */
  ListDataSources = 'qbusiness:ListDataSources',
  /**
   * Grants permission to list all documents
   *
   * See ${APIReferenceDocPage}API_ListDocuments.html
   */
  ListDocuments = 'qbusiness:ListDocuments',
  /**
   * Grants permission to list groups
   *
   * See ${APIReferenceDocPage}API_ListGroups.html
   */
  ListGroups = 'qbusiness:ListGroups',
  /**
   * Grants permission to list the indices of an application
   *
   * See ${APIReferenceDocPage}API_ListIndices.html
   */
  ListIndices = 'qbusiness:ListIndices',
  /**
   * Grants permission to list all messages
   *
   * See ${APIReferenceDocPage}API_ListMessages.html
   */
  ListMessages = 'qbusiness:ListMessages',
  /**
   * Grants permission to list the plugins of an application
   *
   * See ${APIReferenceDocPage}API_ListPlugins.html
   */
  ListPlugins = 'qbusiness:ListPlugins',
  /**
   * Grants permission to list the retrievers of an application
   *
   * See ${APIReferenceDocPage}API_ListRetrievers.html
   */
  ListRetrievers = 'qbusiness:ListRetrievers',
  /**
   * Grants permission to list tags for a resource
   *
   * See ${APIReferenceDocPage}API_ListTagsForResource.html
   */
  ListTagsForResource = 'qbusiness:ListTagsForResource',
  /**
   * Grants permission to list licenses
   *
   * See ${APIReferenceDocPage}API_ListUserLicenses.html
   */
  ListUserLicenses = 'qbusiness:ListUserLicenses',
  /**
   * Grants permission to list the web experiences of an application
   *
   * See ${APIReferenceDocPage}API_ListWebExperiences.html
   */
  ListWebExperiences = 'qbusiness:ListWebExperiences',
  /**
   * Grants permission to put feedback about a conversation message
   *
   * See ${APIReferenceDocPage}API_PutFeedback.html
   */
  PutFeedback = 'qbusiness:PutFeedback',
  /**
   * Grants permission to put a group of users
   *
   * See ${APIReferenceDocPage}API_PutGroup.html
   */
  PutGroup = 'qbusiness:PutGroup',
  /**
   * Grants permission to remove licenses for one or more users
   *
   * See ${APIReferenceDocPage}API_RemoveUserLicenses.html
   */
  RemoveUserLicenses = 'qbusiness:RemoveUserLicenses',
  /**
   * Grants permission to start Data Source sync job
   *
   * See ${APIReferenceDocPage}API_StartDataSourceSyncJob.html
   */
  StartDataSourceSyncJob = 'qbusiness:StartDataSourceSyncJob',
  /**
   * Grants permission to stop Data Source sync job
   *
   * See ${APIReferenceDocPage}API_StopDataSourceSyncJob.html
   */
  StopDataSourceSyncJob = 'qbusiness:StopDataSourceSyncJob',
  /**
   * Grants permission to tag a resource with given key value pairs
   *
   * See ${APIReferenceDocPage}API_TagResource.html
   */
  TagResource = 'qbusiness:TagResource',
  /**
   * Grants permission to remove the tag with the given key from a resource
   *
   * See ${APIReferenceDocPage}API_UntagResource.html
   */
  UntagResource = 'qbusiness:UntagResource',
  /**
   * Grants permission to update an Application
   *
   * See ${APIReferenceDocPage}API_UpdateApplication.html
   */
  UpdateApplication = 'qbusiness:UpdateApplication',
  /**
   * Grants permission to update chat controls configuration for an application
   *
   * See ${APIReferenceDocPage}API_UpdateChatControlsConfiguration.html
   */
  UpdateChatControlsConfiguration = 'qbusiness:UpdateChatControlsConfiguration',
  /**
   * Grants permission to update a DataSource
   *
   * See ${APIReferenceDocPage}API_UpdateDataSource.html
   */
  UpdateDataSource = 'qbusiness:UpdateDataSource',
  /**
   * Grants permission to update an index
   *
   * See ${APIReferenceDocPage}API_UpdateIndex.html
   */
  UpdateIndex = 'qbusiness:UpdateIndex',
  /**
   * Grants permission to update a plugin
   *
   * See ${APIReferenceDocPage}API_UpdatePlugin.html
   */
  UpdatePlugin = 'qbusiness:UpdatePlugin',
  /**
   * Grants permission to update a Retriever
   *
   * See ${APIReferenceDocPage}API_UpdateRetriever.html
   */
  UpdateRetriever = 'qbusiness:UpdateRetriever',
  /**
   * Grants permission to update a user
   *
   * See ${APIReferenceDocPage}API_UpdateUser.html
   */
  UpdateUser = 'qbusiness:UpdateUser',
  /**
   * Grants permission to update a WebExperience
   *
   * See ${APIReferenceDocPage}API_UpdateWebExperience.html
   */
  UpdateWebExperience = 'qbusiness:UpdateWebExperience',
}