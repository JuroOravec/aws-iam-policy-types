[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsQbusinessActions

# Enumeration: AwsQbusinessActions

All IAM policy actions for Amazon Q Business (QBUSINESS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqbusiness.html

2024-02-12T09:58:46.233Z

## Table of contents

### Enumeration Members

- [AddUserLicenses](AwsQbusinessActions.md#adduserlicenses)
- [BatchDeleteDocument](AwsQbusinessActions.md#batchdeletedocument)
- [BatchPutDocument](AwsQbusinessActions.md#batchputdocument)
- [Chat](AwsQbusinessActions.md#chat)
- [ChatSync](AwsQbusinessActions.md#chatsync)
- [CreateApplication](AwsQbusinessActions.md#createapplication)
- [CreateDataSource](AwsQbusinessActions.md#createdatasource)
- [CreateIndex](AwsQbusinessActions.md#createindex)
- [CreateLicense](AwsQbusinessActions.md#createlicense)
- [CreatePlugin](AwsQbusinessActions.md#createplugin)
- [CreateRetriever](AwsQbusinessActions.md#createretriever)
- [CreateUser](AwsQbusinessActions.md#createuser)
- [CreateWebExperience](AwsQbusinessActions.md#createwebexperience)
- [DeleteApplication](AwsQbusinessActions.md#deleteapplication)
- [DeleteChatControlsConfiguration](AwsQbusinessActions.md#deletechatcontrolsconfiguration)
- [DeleteConversation](AwsQbusinessActions.md#deleteconversation)
- [DeleteDataSource](AwsQbusinessActions.md#deletedatasource)
- [DeleteGroup](AwsQbusinessActions.md#deletegroup)
- [DeleteIndex](AwsQbusinessActions.md#deleteindex)
- [DeletePlugin](AwsQbusinessActions.md#deleteplugin)
- [DeleteRetriever](AwsQbusinessActions.md#deleteretriever)
- [DeleteUser](AwsQbusinessActions.md#deleteuser)
- [DeleteWebExperience](AwsQbusinessActions.md#deletewebexperience)
- [GetApplication](AwsQbusinessActions.md#getapplication)
- [GetChatControlsConfiguration](AwsQbusinessActions.md#getchatcontrolsconfiguration)
- [GetDataSource](AwsQbusinessActions.md#getdatasource)
- [GetGroup](AwsQbusinessActions.md#getgroup)
- [GetIndex](AwsQbusinessActions.md#getindex)
- [GetLicense](AwsQbusinessActions.md#getlicense)
- [GetPlugin](AwsQbusinessActions.md#getplugin)
- [GetRetriever](AwsQbusinessActions.md#getretriever)
- [GetUser](AwsQbusinessActions.md#getuser)
- [GetWebExperience](AwsQbusinessActions.md#getwebexperience)
- [ListApplications](AwsQbusinessActions.md#listapplications)
- [ListConversations](AwsQbusinessActions.md#listconversations)
- [ListDataSourceSyncJobs](AwsQbusinessActions.md#listdatasourcesyncjobs)
- [ListDataSources](AwsQbusinessActions.md#listdatasources)
- [ListDocuments](AwsQbusinessActions.md#listdocuments)
- [ListGroups](AwsQbusinessActions.md#listgroups)
- [ListIndices](AwsQbusinessActions.md#listindices)
- [ListMessages](AwsQbusinessActions.md#listmessages)
- [ListPlugins](AwsQbusinessActions.md#listplugins)
- [ListRetrievers](AwsQbusinessActions.md#listretrievers)
- [ListTagsForResource](AwsQbusinessActions.md#listtagsforresource)
- [ListUserLicenses](AwsQbusinessActions.md#listuserlicenses)
- [ListWebExperiences](AwsQbusinessActions.md#listwebexperiences)
- [PutFeedback](AwsQbusinessActions.md#putfeedback)
- [PutGroup](AwsQbusinessActions.md#putgroup)
- [RemoveUserLicenses](AwsQbusinessActions.md#removeuserlicenses)
- [StartDataSourceSyncJob](AwsQbusinessActions.md#startdatasourcesyncjob)
- [StopDataSourceSyncJob](AwsQbusinessActions.md#stopdatasourcesyncjob)
- [TagResource](AwsQbusinessActions.md#tagresource)
- [UntagResource](AwsQbusinessActions.md#untagresource)
- [UpdateApplication](AwsQbusinessActions.md#updateapplication)
- [UpdateChatControlsConfiguration](AwsQbusinessActions.md#updatechatcontrolsconfiguration)
- [UpdateDataSource](AwsQbusinessActions.md#updatedatasource)
- [UpdateIndex](AwsQbusinessActions.md#updateindex)
- [UpdatePlugin](AwsQbusinessActions.md#updateplugin)
- [UpdateRetriever](AwsQbusinessActions.md#updateretriever)
- [UpdateUser](AwsQbusinessActions.md#updateuser)
- [UpdateWebExperience](AwsQbusinessActions.md#updatewebexperience)

## Enumeration Members

### AddUserLicenses

• **AddUserLicenses** = ``"qbusiness:AddUserLicenses"``

Grants permission to add one or more users for licenses

See ${APIReferenceDocPage}API_AddUserLicenses.html

#### Defined in

actions/qbusiness.ts:17

___

### BatchDeleteDocument

• **BatchDeleteDocument** = ``"qbusiness:BatchDeleteDocument"``

Grants permission to batch delete document

See ${APIReferenceDocPage}API_BatchDeleteDocument.html

#### Defined in

actions/qbusiness.ts:23

___

### BatchPutDocument

• **BatchPutDocument** = ``"qbusiness:BatchPutDocument"``

Grants permission to batch put document

See ${APIReferenceDocPage}API_BatchPutDocument.html

#### Defined in

actions/qbusiness.ts:29

___

### Chat

• **Chat** = ``"qbusiness:Chat"``

Grants permission to chat using an application

See ${APIReferenceDocPage}API_Chat.html

#### Defined in

actions/qbusiness.ts:35

___

### ChatSync

• **ChatSync** = ``"qbusiness:ChatSync"``

Grants permission to chat synchronously using an application

See ${APIReferenceDocPage}API_ChatSync.html

#### Defined in

actions/qbusiness.ts:41

___

### CreateApplication

• **CreateApplication** = ``"qbusiness:CreateApplication"``

Grants permission to create an application

See ${APIReferenceDocPage}API_CreateApplication.html

#### Defined in

actions/qbusiness.ts:47

___

### CreateDataSource

• **CreateDataSource** = ``"qbusiness:CreateDataSource"``

Grants permission to create a data source for a given application and index

See ${APIReferenceDocPage}API_CreateDataSource.html

#### Defined in

actions/qbusiness.ts:53

___

### CreateIndex

• **CreateIndex** = ``"qbusiness:CreateIndex"``

Grants permission to create an index for a given application

See ${APIReferenceDocPage}API_CreateIndex.html

#### Defined in

actions/qbusiness.ts:59

___

### CreateLicense

• **CreateLicense** = ``"qbusiness:CreateLicense"``

Grants permission to create a license

See ${APIReferenceDocPage}API_CreateLicense.html

#### Defined in

actions/qbusiness.ts:65

___

### CreatePlugin

• **CreatePlugin** = ``"qbusiness:CreatePlugin"``

Grants permission to create a plugin for a given application

See ${APIReferenceDocPage}API_CreatePlugin.html

#### Defined in

actions/qbusiness.ts:71

___

### CreateRetriever

• **CreateRetriever** = ``"qbusiness:CreateRetriever"``

Grants permission to create a retriever for a given application

See ${APIReferenceDocPage}API_CreateRetriever.html

#### Defined in

actions/qbusiness.ts:77

___

### CreateUser

• **CreateUser** = ``"qbusiness:CreateUser"``

Grants permission to create a user

See ${APIReferenceDocPage}API_CreateUser.html

#### Defined in

actions/qbusiness.ts:83

___

### CreateWebExperience

• **CreateWebExperience** = ``"qbusiness:CreateWebExperience"``

Grants permission to create a web experience for a given application

See ${APIReferenceDocPage}API_CreateWebExperience.html

#### Defined in

actions/qbusiness.ts:89

___

### DeleteApplication

• **DeleteApplication** = ``"qbusiness:DeleteApplication"``

Grants permission to delete an application

See ${APIReferenceDocPage}API_DeleteApplication.html

#### Defined in

actions/qbusiness.ts:95

___

### DeleteChatControlsConfiguration

• **DeleteChatControlsConfiguration** = ``"qbusiness:DeleteChatControlsConfiguration"``

Grants permission to delete chat controls configuration for an application

See ${APIReferenceDocPage}API_DeleteChatControlsConfiguration.html

#### Defined in

actions/qbusiness.ts:101

___

### DeleteConversation

• **DeleteConversation** = ``"qbusiness:DeleteConversation"``

Grants permission to delete a conversation

See ${APIReferenceDocPage}API_DeleteConversation.html

#### Defined in

actions/qbusiness.ts:107

___

### DeleteDataSource

• **DeleteDataSource** = ``"qbusiness:DeleteDataSource"``

Grants permission to delete a DataSource

See ${APIReferenceDocPage}API_DeleteDataSource.html

#### Defined in

actions/qbusiness.ts:113

___

### DeleteGroup

• **DeleteGroup** = ``"qbusiness:DeleteGroup"``

Grants permission to delete a group

See ${APIReferenceDocPage}API_DeleteGroup.html

#### Defined in

actions/qbusiness.ts:119

___

### DeleteIndex

• **DeleteIndex** = ``"qbusiness:DeleteIndex"``

Grants permission to delete an index

See ${APIReferenceDocPage}API_DeleteIndex.html

#### Defined in

actions/qbusiness.ts:125

___

### DeletePlugin

• **DeletePlugin** = ``"qbusiness:DeletePlugin"``

Grants permission to delete a plugin

See ${APIReferenceDocPage}API_DeletePlugin.html

#### Defined in

actions/qbusiness.ts:131

___

### DeleteRetriever

• **DeleteRetriever** = ``"qbusiness:DeleteRetriever"``

Grants permission to delete a retriever

See ${APIReferenceDocPage}API_DeleteRetriever.html

#### Defined in

actions/qbusiness.ts:137

___

### DeleteUser

• **DeleteUser** = ``"qbusiness:DeleteUser"``

Grants permission to delete a user

See ${APIReferenceDocPage}API_DeleteUser.html

#### Defined in

actions/qbusiness.ts:143

___

### DeleteWebExperience

• **DeleteWebExperience** = ``"qbusiness:DeleteWebExperience"``

Grants permission to delete a web-experience

See ${APIReferenceDocPage}API_DeleteWebExperience.html

#### Defined in

actions/qbusiness.ts:149

___

### GetApplication

• **GetApplication** = ``"qbusiness:GetApplication"``

Grants permission to get an application

See ${APIReferenceDocPage}API_GetApplication.html

#### Defined in

actions/qbusiness.ts:155

___

### GetChatControlsConfiguration

• **GetChatControlsConfiguration** = ``"qbusiness:GetChatControlsConfiguration"``

Grants permission to get chat controls configuration for an application

See ${APIReferenceDocPage}API_GetChatControlsConfiguration.html

#### Defined in

actions/qbusiness.ts:161

___

### GetDataSource

• **GetDataSource** = ``"qbusiness:GetDataSource"``

Grants permission to get a data source

See ${APIReferenceDocPage}API_GetDataSource.html

#### Defined in

actions/qbusiness.ts:167

___

### GetGroup

• **GetGroup** = ``"qbusiness:GetGroup"``

Grants permission to get a group

See ${APIReferenceDocPage}API_GetGroup.html

#### Defined in

actions/qbusiness.ts:173

___

### GetIndex

• **GetIndex** = ``"qbusiness:GetIndex"``

Grants permission to get an index

See ${APIReferenceDocPage}API_GetIndex.html

#### Defined in

actions/qbusiness.ts:179

___

### GetLicense

• **GetLicense** = ``"qbusiness:GetLicense"``

Grants permission to get a license

See ${APIReferenceDocPage}API_GetLicense.html

#### Defined in

actions/qbusiness.ts:185

___

### GetPlugin

• **GetPlugin** = ``"qbusiness:GetPlugin"``

Grants permission to get a plugin

See ${APIReferenceDocPage}API_GetPlugin.html

#### Defined in

actions/qbusiness.ts:191

___

### GetRetriever

• **GetRetriever** = ``"qbusiness:GetRetriever"``

Grants permission to get a retriever

See ${APIReferenceDocPage}API_GetRetriever.html

#### Defined in

actions/qbusiness.ts:197

___

### GetUser

• **GetUser** = ``"qbusiness:GetUser"``

Grants permission to get a user

See ${APIReferenceDocPage}API_GetUser.html

#### Defined in

actions/qbusiness.ts:203

___

### GetWebExperience

• **GetWebExperience** = ``"qbusiness:GetWebExperience"``

Grants permission to get a web-experience

See ${APIReferenceDocPage}API_GetWebExperience.html

#### Defined in

actions/qbusiness.ts:209

___

### ListApplications

• **ListApplications** = ``"qbusiness:ListApplications"``

Grants permission to list the applications

See ${APIReferenceDocPage}API_ListApplications.html

#### Defined in

actions/qbusiness.ts:215

___

### ListConversations

• **ListConversations** = ``"qbusiness:ListConversations"``

Grants permission to list all conversations for an application

See ${APIReferenceDocPage}API_ListConversations.html

#### Defined in

actions/qbusiness.ts:221

___

### ListDataSourceSyncJobs

• **ListDataSourceSyncJobs** = ``"qbusiness:ListDataSourceSyncJobs"``

Grants permission to get Data Source sync job history

See ${APIReferenceDocPage}API_ListDataSourceSyncJobs.html

#### Defined in

actions/qbusiness.ts:227

___

### ListDataSources

• **ListDataSources** = ``"qbusiness:ListDataSources"``

Grants permission to list the data sources of an application and an index

See ${APIReferenceDocPage}API_ListDataSources.html

#### Defined in

actions/qbusiness.ts:233

___

### ListDocuments

• **ListDocuments** = ``"qbusiness:ListDocuments"``

Grants permission to list all documents

See ${APIReferenceDocPage}API_ListDocuments.html

#### Defined in

actions/qbusiness.ts:239

___

### ListGroups

• **ListGroups** = ``"qbusiness:ListGroups"``

Grants permission to list groups

See ${APIReferenceDocPage}API_ListGroups.html

#### Defined in

actions/qbusiness.ts:245

___

### ListIndices

• **ListIndices** = ``"qbusiness:ListIndices"``

Grants permission to list the indices of an application

See ${APIReferenceDocPage}API_ListIndices.html

#### Defined in

actions/qbusiness.ts:251

___

### ListMessages

• **ListMessages** = ``"qbusiness:ListMessages"``

Grants permission to list all messages

See ${APIReferenceDocPage}API_ListMessages.html

#### Defined in

actions/qbusiness.ts:257

___

### ListPlugins

• **ListPlugins** = ``"qbusiness:ListPlugins"``

Grants permission to list the plugins of an application

See ${APIReferenceDocPage}API_ListPlugins.html

#### Defined in

actions/qbusiness.ts:263

___

### ListRetrievers

• **ListRetrievers** = ``"qbusiness:ListRetrievers"``

Grants permission to list the retrievers of an application

See ${APIReferenceDocPage}API_ListRetrievers.html

#### Defined in

actions/qbusiness.ts:269

___

### ListTagsForResource

• **ListTagsForResource** = ``"qbusiness:ListTagsForResource"``

Grants permission to list tags for a resource

See ${APIReferenceDocPage}API_ListTagsForResource.html

#### Defined in

actions/qbusiness.ts:275

___

### ListUserLicenses

• **ListUserLicenses** = ``"qbusiness:ListUserLicenses"``

Grants permission to list licenses

See ${APIReferenceDocPage}API_ListUserLicenses.html

#### Defined in

actions/qbusiness.ts:281

___

### ListWebExperiences

• **ListWebExperiences** = ``"qbusiness:ListWebExperiences"``

Grants permission to list the web experiences of an application

See ${APIReferenceDocPage}API_ListWebExperiences.html

#### Defined in

actions/qbusiness.ts:287

___

### PutFeedback

• **PutFeedback** = ``"qbusiness:PutFeedback"``

Grants permission to put feedback about a conversation message

See ${APIReferenceDocPage}API_PutFeedback.html

#### Defined in

actions/qbusiness.ts:293

___

### PutGroup

• **PutGroup** = ``"qbusiness:PutGroup"``

Grants permission to put a group of users

See ${APIReferenceDocPage}API_PutGroup.html

#### Defined in

actions/qbusiness.ts:299

___

### RemoveUserLicenses

• **RemoveUserLicenses** = ``"qbusiness:RemoveUserLicenses"``

Grants permission to remove licenses for one or more users

See ${APIReferenceDocPage}API_RemoveUserLicenses.html

#### Defined in

actions/qbusiness.ts:305

___

### StartDataSourceSyncJob

• **StartDataSourceSyncJob** = ``"qbusiness:StartDataSourceSyncJob"``

Grants permission to start Data Source sync job

See ${APIReferenceDocPage}API_StartDataSourceSyncJob.html

#### Defined in

actions/qbusiness.ts:311

___

### StopDataSourceSyncJob

• **StopDataSourceSyncJob** = ``"qbusiness:StopDataSourceSyncJob"``

Grants permission to stop Data Source sync job

See ${APIReferenceDocPage}API_StopDataSourceSyncJob.html

#### Defined in

actions/qbusiness.ts:317

___

### TagResource

• **TagResource** = ``"qbusiness:TagResource"``

Grants permission to tag a resource with given key value pairs

See ${APIReferenceDocPage}API_TagResource.html

#### Defined in

actions/qbusiness.ts:323

___

### UntagResource

• **UntagResource** = ``"qbusiness:UntagResource"``

Grants permission to remove the tag with the given key from a resource

See ${APIReferenceDocPage}API_UntagResource.html

#### Defined in

actions/qbusiness.ts:329

___

### UpdateApplication

• **UpdateApplication** = ``"qbusiness:UpdateApplication"``

Grants permission to update an Application

See ${APIReferenceDocPage}API_UpdateApplication.html

#### Defined in

actions/qbusiness.ts:335

___

### UpdateChatControlsConfiguration

• **UpdateChatControlsConfiguration** = ``"qbusiness:UpdateChatControlsConfiguration"``

Grants permission to update chat controls configuration for an application

See ${APIReferenceDocPage}API_UpdateChatControlsConfiguration.html

#### Defined in

actions/qbusiness.ts:341

___

### UpdateDataSource

• **UpdateDataSource** = ``"qbusiness:UpdateDataSource"``

Grants permission to update a DataSource

See ${APIReferenceDocPage}API_UpdateDataSource.html

#### Defined in

actions/qbusiness.ts:347

___

### UpdateIndex

• **UpdateIndex** = ``"qbusiness:UpdateIndex"``

Grants permission to update an index

See ${APIReferenceDocPage}API_UpdateIndex.html

#### Defined in

actions/qbusiness.ts:353

___

### UpdatePlugin

• **UpdatePlugin** = ``"qbusiness:UpdatePlugin"``

Grants permission to update a plugin

See ${APIReferenceDocPage}API_UpdatePlugin.html

#### Defined in

actions/qbusiness.ts:359

___

### UpdateRetriever

• **UpdateRetriever** = ``"qbusiness:UpdateRetriever"``

Grants permission to update a Retriever

See ${APIReferenceDocPage}API_UpdateRetriever.html

#### Defined in

actions/qbusiness.ts:365

___

### UpdateUser

• **UpdateUser** = ``"qbusiness:UpdateUser"``

Grants permission to update a user

See ${APIReferenceDocPage}API_UpdateUser.html

#### Defined in

actions/qbusiness.ts:371

___

### UpdateWebExperience

• **UpdateWebExperience** = ``"qbusiness:UpdateWebExperience"``

Grants permission to update a WebExperience

See ${APIReferenceDocPage}API_UpdateWebExperience.html

#### Defined in

actions/qbusiness.ts:377
