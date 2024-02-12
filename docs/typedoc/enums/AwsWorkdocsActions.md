[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsWorkdocsActions

# Enumeration: AwsWorkdocsActions

All IAM policy actions for Amazon WorkDocs (WORKDOCS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkdocs.html

2024-02-12T09:59:40.371Z

## Table of contents

### Enumeration Members

- [AbortDocumentVersionUpload](AwsWorkdocsActions.md#abortdocumentversionupload)
- [ActivateUser](AwsWorkdocsActions.md#activateuser)
- [AddNotificationPermissions](AwsWorkdocsActions.md#addnotificationpermissions)
- [AddResourcePermissions](AwsWorkdocsActions.md#addresourcepermissions)
- [AddUserToGroup](AwsWorkdocsActions.md#addusertogroup)
- [CheckAlias](AwsWorkdocsActions.md#checkalias)
- [CreateComment](AwsWorkdocsActions.md#createcomment)
- [CreateCustomMetadata](AwsWorkdocsActions.md#createcustommetadata)
- [CreateFolder](AwsWorkdocsActions.md#createfolder)
- [CreateInstance](AwsWorkdocsActions.md#createinstance)
- [CreateLabels](AwsWorkdocsActions.md#createlabels)
- [CreateNotificationSubscription](AwsWorkdocsActions.md#createnotificationsubscription)
- [CreateUser](AwsWorkdocsActions.md#createuser)
- [DeactivateUser](AwsWorkdocsActions.md#deactivateuser)
- [DeleteComment](AwsWorkdocsActions.md#deletecomment)
- [DeleteCustomMetadata](AwsWorkdocsActions.md#deletecustommetadata)
- [DeleteDocument](AwsWorkdocsActions.md#deletedocument)
- [DeleteDocumentVersion](AwsWorkdocsActions.md#deletedocumentversion)
- [DeleteFolder](AwsWorkdocsActions.md#deletefolder)
- [DeleteFolderContents](AwsWorkdocsActions.md#deletefoldercontents)
- [DeleteInstance](AwsWorkdocsActions.md#deleteinstance)
- [DeleteLabels](AwsWorkdocsActions.md#deletelabels)
- [DeleteNotificationPermissions](AwsWorkdocsActions.md#deletenotificationpermissions)
- [DeleteNotificationSubscription](AwsWorkdocsActions.md#deletenotificationsubscription)
- [DeleteUser](AwsWorkdocsActions.md#deleteuser)
- [DeregisterDirectory](AwsWorkdocsActions.md#deregisterdirectory)
- [DescribeActivities](AwsWorkdocsActions.md#describeactivities)
- [DescribeAvailableDirectories](AwsWorkdocsActions.md#describeavailabledirectories)
- [DescribeComments](AwsWorkdocsActions.md#describecomments)
- [DescribeDocumentVersions](AwsWorkdocsActions.md#describedocumentversions)
- [DescribeFolderContents](AwsWorkdocsActions.md#describefoldercontents)
- [DescribeGroups](AwsWorkdocsActions.md#describegroups)
- [DescribeInstances](AwsWorkdocsActions.md#describeinstances)
- [DescribeNotificationPermissions](AwsWorkdocsActions.md#describenotificationpermissions)
- [DescribeNotificationSubscriptions](AwsWorkdocsActions.md#describenotificationsubscriptions)
- [DescribeResourcePermissions](AwsWorkdocsActions.md#describeresourcepermissions)
- [DescribeRootFolders](AwsWorkdocsActions.md#describerootfolders)
- [DescribeUsers](AwsWorkdocsActions.md#describeusers)
- [DownloadDocumentVersion](AwsWorkdocsActions.md#downloaddocumentversion)
- [GetCurrentUser](AwsWorkdocsActions.md#getcurrentuser)
- [GetDocument](AwsWorkdocsActions.md#getdocument)
- [GetDocumentPath](AwsWorkdocsActions.md#getdocumentpath)
- [GetDocumentVersion](AwsWorkdocsActions.md#getdocumentversion)
- [GetFolder](AwsWorkdocsActions.md#getfolder)
- [GetFolderPath](AwsWorkdocsActions.md#getfolderpath)
- [GetGroup](AwsWorkdocsActions.md#getgroup)
- [GetResources](AwsWorkdocsActions.md#getresources)
- [InitiateDocumentVersionUpload](AwsWorkdocsActions.md#initiatedocumentversionupload)
- [RegisterDirectory](AwsWorkdocsActions.md#registerdirectory)
- [RemoveAllResourcePermissions](AwsWorkdocsActions.md#removeallresourcepermissions)
- [RemoveResourcePermission](AwsWorkdocsActions.md#removeresourcepermission)
- [RestoreDocumentVersions](AwsWorkdocsActions.md#restoredocumentversions)
- [SearchResources](AwsWorkdocsActions.md#searchresources)
- [UpdateDocument](AwsWorkdocsActions.md#updatedocument)
- [UpdateDocumentVersion](AwsWorkdocsActions.md#updatedocumentversion)
- [UpdateFolder](AwsWorkdocsActions.md#updatefolder)
- [UpdateInstanceAlias](AwsWorkdocsActions.md#updateinstancealias)
- [UpdateUser](AwsWorkdocsActions.md#updateuser)
- [UpdateUserAdministrativeSettings](AwsWorkdocsActions.md#updateuseradministrativesettings)

## Enumeration Members

### AbortDocumentVersionUpload

• **AbortDocumentVersionUpload** = ``"workdocs:AbortDocumentVersionUpload"``

Grants permission to abort the upload of the specified document version that wa
s previously initiated by InitiateDocumentVersionUpload

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AbortDocumentVersionUpload.html

#### Defined in

actions/workdocs.ts:18

___

### ActivateUser

• **ActivateUser** = ``"workdocs:ActivateUser"``

Grants permission to activate the specified user. Only active users can access
Amazon WorkDocs

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_ActivateUser.html

#### Defined in

actions/workdocs.ts:25

___

### AddNotificationPermissions

• **AddNotificationPermissions** = ``"workdocs:AddNotificationPermissions"``

Grants permission to add principals that are allowed to call notification subsc
ription APIs for a given WorkDocs site

See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-notifications.html

#### Defined in

actions/workdocs.ts:32

___

### AddResourcePermissions

• **AddResourcePermissions** = ``"workdocs:AddResourcePermissions"``

Grants permission to create a set of permissions for the specified folder or do
cument

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AddResourcePermissions.html

#### Defined in

actions/workdocs.ts:39

___

### AddUserToGroup

• **AddUserToGroup** = ``"workdocs:AddUserToGroup"``

Grants permission to add a user to a group

See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage_set_admin.html

#### Defined in

actions/workdocs.ts:45

___

### CheckAlias

• **CheckAlias** = ``"workdocs:CheckAlias"``

Grants permission to check an alias

See https://docs.aws.amazon.com/workdocs/latest/adminguide/cloud_quick_start.html

#### Defined in

actions/workdocs.ts:51

___

### CreateComment

• **CreateComment** = ``"workdocs:CreateComment"``

Grants permission to add a new comment to the specified document version

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateComment.html

#### Defined in

actions/workdocs.ts:57

___

### CreateCustomMetadata

• **CreateCustomMetadata** = ``"workdocs:CreateCustomMetadata"``

Grants permission to add one or more custom properties to the specified resourc
e

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateCustomMetadata.html

#### Defined in

actions/workdocs.ts:64

___

### CreateFolder

• **CreateFolder** = ``"workdocs:CreateFolder"``

Grants permission to create a folder with the specified name and parent folder

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateFolder.html

#### Defined in

actions/workdocs.ts:70

___

### CreateInstance

• **CreateInstance** = ``"workdocs:CreateInstance"``

Grants permission to create an instance

See https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html

#### Defined in

actions/workdocs.ts:76

___

### CreateLabels

• **CreateLabels** = ``"workdocs:CreateLabels"``

Grants permission to add labels to the given resource

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateLabels.html

#### Defined in

actions/workdocs.ts:82

___

### CreateNotificationSubscription

• **CreateNotificationSubscription** = ``"workdocs:CreateNotificationSubscription"``

Grants permission to configure WorkDocs to use Amazon SNS notifications

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateNotificationSubscription.html

#### Defined in

actions/workdocs.ts:88

___

### CreateUser

• **CreateUser** = ``"workdocs:CreateUser"``

Grants permission to create a user in a Simple AD or Microsoft AD directory

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html

#### Defined in

actions/workdocs.ts:94

___

### DeactivateUser

• **DeactivateUser** = ``"workdocs:DeactivateUser"``

Grants permission to deactivate the specified user, which revokes the user's ac
cess to Amazon WorkDocs

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeactivateUser.html

#### Defined in

actions/workdocs.ts:101

___

### DeleteComment

• **DeleteComment** = ``"workdocs:DeleteComment"``

Grants permission to delete the specified comment from the document version

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteComment.html

#### Defined in

actions/workdocs.ts:107

___

### DeleteCustomMetadata

• **DeleteCustomMetadata** = ``"workdocs:DeleteCustomMetadata"``

Grants permission to delete custom metadata from the specified resource

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteCustomMetadata.html

#### Defined in

actions/workdocs.ts:113

___

### DeleteDocument

• **DeleteDocument** = ``"workdocs:DeleteDocument"``

Grants permission to permanently delete the specified document and its associat
ed metadata

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteDocument.html

#### Defined in

actions/workdocs.ts:120

___

### DeleteDocumentVersion

• **DeleteDocumentVersion** = ``"workdocs:DeleteDocumentVersion"``

Grants permission to delete versions of a specified document

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteDocumentVersion.html

#### Defined in

actions/workdocs.ts:126

___

### DeleteFolder

• **DeleteFolder** = ``"workdocs:DeleteFolder"``

Grants permission to permanently delete the specified folder and its contents

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolder.html

#### Defined in

actions/workdocs.ts:132

___

### DeleteFolderContents

• **DeleteFolderContents** = ``"workdocs:DeleteFolderContents"``

Grants permission to delete the contents of the specified folder

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolderContents.html

#### Defined in

actions/workdocs.ts:138

___

### DeleteInstance

• **DeleteInstance** = ``"workdocs:DeleteInstance"``

Grants permission to delete an instance

See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site

#### Defined in

actions/workdocs.ts:144

___

### DeleteLabels

• **DeleteLabels** = ``"workdocs:DeleteLabels"``

Grants permission to delete one or more labels from a resource

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteLabels.html

#### Defined in

actions/workdocs.ts:150

___

### DeleteNotificationPermissions

• **DeleteNotificationPermissions** = ``"workdocs:DeleteNotificationPermissions"``

Grants permission to delete principals that are allowed to call notification su
bscription APIs for a given WorkDocs site

See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-notifications.html

#### Defined in

actions/workdocs.ts:157

___

### DeleteNotificationSubscription

• **DeleteNotificationSubscription** = ``"workdocs:DeleteNotificationSubscription"``

Grants permission to delete the specified subscription from the specified organ
ization

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteNotificationSubscription.html

#### Defined in

actions/workdocs.ts:164

___

### DeleteUser

• **DeleteUser** = ``"workdocs:DeleteUser"``

Grants permission to delete the specified user from a Simple AD or Microsoft AD
directory

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteUser.html

#### Defined in

actions/workdocs.ts:171

___

### DeregisterDirectory

• **DeregisterDirectory** = ``"workdocs:DeregisterDirectory"``

Grants permission to deregister a directory

See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site

#### Defined in

actions/workdocs.ts:177

___

### DescribeActivities

• **DescribeActivities** = ``"workdocs:DescribeActivities"``

Grants permission to fetch user activities in a specified time period

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeActivities.html

#### Defined in

actions/workdocs.ts:183

___

### DescribeAvailableDirectories

• **DescribeAvailableDirectories** = ``"workdocs:DescribeAvailableDirectories"``

Grants permission to describe available directories

See https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html

#### Defined in

actions/workdocs.ts:189

___

### DescribeComments

• **DescribeComments** = ``"workdocs:DescribeComments"``

Grants permission to list all the comments for the specified document version

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeComments.html

#### Defined in

actions/workdocs.ts:195

___

### DescribeDocumentVersions

• **DescribeDocumentVersions** = ``"workdocs:DescribeDocumentVersions"``

Grants permission to retrieve the document versions for the specified document

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeDocumentVersions.html

#### Defined in

actions/workdocs.ts:201

___

### DescribeFolderContents

• **DescribeFolderContents** = ``"workdocs:DescribeFolderContents"``

Grants permission to describe the contents of the specified folder, including i
ts documents and sub-folders

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeFolderContents.html

#### Defined in

actions/workdocs.ts:208

___

### DescribeGroups

• **DescribeGroups** = ``"workdocs:DescribeGroups"``

Grants permission to describe the user groups

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeGroups.html

#### Defined in

actions/workdocs.ts:214

___

### DescribeInstances

• **DescribeInstances** = ``"workdocs:DescribeInstances"``

Grants permission to describe instances

See https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html

#### Defined in

actions/workdocs.ts:220

___

### DescribeNotificationPermissions

• **DescribeNotificationPermissions** = ``"workdocs:DescribeNotificationPermissions"``

Grants permission to describe principals that are allowed to call notification
subscription APIs for a given WorkDocs site

See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-notifications.html

#### Defined in

actions/workdocs.ts:227

___

### DescribeNotificationSubscriptions

• **DescribeNotificationSubscriptions** = ``"workdocs:DescribeNotificationSubscriptions"``

Grants permission to list the specified notification subscriptions

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeNotificationSubscriptions.html

#### Defined in

actions/workdocs.ts:233

___

### DescribeResourcePermissions

• **DescribeResourcePermissions** = ``"workdocs:DescribeResourcePermissions"``

Grants permission to view a description of a specified resource's permissions

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeResourcePermissions.html

#### Defined in

actions/workdocs.ts:239

___

### DescribeRootFolders

• **DescribeRootFolders** = ``"workdocs:DescribeRootFolders"``

Grants permission to describe the root folders

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeRootFolders.html

#### Defined in

actions/workdocs.ts:245

___

### DescribeUsers

• **DescribeUsers** = ``"workdocs:DescribeUsers"``

Grants permission to view a description of the specified users. You can describ
e all users or filter the results (for example, by status or organization)

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeUsers.html

#### Defined in

actions/workdocs.ts:252

___

### DownloadDocumentVersion

• **DownloadDocumentVersion** = ``"workdocs:DownloadDocumentVersion"``

Grants permission to download a specified document version

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html

#### Defined in

actions/workdocs.ts:258

___

### GetCurrentUser

• **GetCurrentUser** = ``"workdocs:GetCurrentUser"``

Grants permission to retrieve the details of the current user

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetCurrentUser.html

#### Defined in

actions/workdocs.ts:264

___

### GetDocument

• **GetDocument** = ``"workdocs:GetDocument"``

Grants permission to retrieve the specified document object

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocument.html

#### Defined in

actions/workdocs.ts:270

___

### GetDocumentPath

• **GetDocumentPath** = ``"workdocs:GetDocumentPath"``

Grants permission to retrieve the path information (the hierarchy from the root
folder) for the requested document

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentPath.html

#### Defined in

actions/workdocs.ts:277

___

### GetDocumentVersion

• **GetDocumentVersion** = ``"workdocs:GetDocumentVersion"``

Grants permission to retrieve version metadata for the specified document

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html

#### Defined in

actions/workdocs.ts:283

___

### GetFolder

• **GetFolder** = ``"workdocs:GetFolder"``

Grants permission to retrieve the metadata of the specified folder

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolder.html

#### Defined in

actions/workdocs.ts:289

___

### GetFolderPath

• **GetFolderPath** = ``"workdocs:GetFolderPath"``

Grants permission to retrieve the path information (the hierarchy from the root
folder) for the specified folder

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolderPath.html

#### Defined in

actions/workdocs.ts:296

___

### GetGroup

• **GetGroup** = ``"workdocs:GetGroup"``

Grants permission to retrieve details for the specified group

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_Operations.html

#### Defined in

actions/workdocs.ts:302

___

### GetResources

• **GetResources** = ``"workdocs:GetResources"``

Grants permission to get a collection of resources

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetResources.html

#### Defined in

actions/workdocs.ts:308

___

### InitiateDocumentVersionUpload

• **InitiateDocumentVersionUpload** = ``"workdocs:InitiateDocumentVersionUpload"``

Grants permission to create a new document object and version object

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_InitiateDocumentVersionUpload.html

#### Defined in

actions/workdocs.ts:314

___

### RegisterDirectory

• **RegisterDirectory** = ``"workdocs:RegisterDirectory"``

Grants permission to register a directory

See https://docs.aws.amazon.com/workdocs/latest/adminguide/existing-dir-setup.html

#### Defined in

actions/workdocs.ts:320

___

### RemoveAllResourcePermissions

• **RemoveAllResourcePermissions** = ``"workdocs:RemoveAllResourcePermissions"``

Grants permission to remove all the permissions from the specified resource

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveAllResourcePermissions.html

#### Defined in

actions/workdocs.ts:326

___

### RemoveResourcePermission

• **RemoveResourcePermission** = ``"workdocs:RemoveResourcePermission"``

Grants permission to remove the permission for the specified principal from the
specified resource

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveResourcePermission.html

#### Defined in

actions/workdocs.ts:333

___

### RestoreDocumentVersions

• **RestoreDocumentVersions** = ``"workdocs:RestoreDocumentVersions"``

Grants permission to restore versions of a specified document

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RestoreDocumentVersions.html

#### Defined in

actions/workdocs.ts:339

___

### SearchResources

• **SearchResources** = ``"workdocs:SearchResources"``

Grants permission to search metadata and the content of resources

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_SearchResources.html

#### Defined in

actions/workdocs.ts:345

___

### UpdateDocument

• **UpdateDocument** = ``"workdocs:UpdateDocument"``

Grants permission to update the specified attributes of the specified document

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocument.html

#### Defined in

actions/workdocs.ts:351

___

### UpdateDocumentVersion

• **UpdateDocumentVersion** = ``"workdocs:UpdateDocumentVersion"``

Grants permission to change the status of the document version to ACTIVE

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocumentVersion.html

#### Defined in

actions/workdocs.ts:357

___

### UpdateFolder

• **UpdateFolder** = ``"workdocs:UpdateFolder"``

Grants permission to update the specified attributes of the specified folder

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateFolder.html

#### Defined in

actions/workdocs.ts:363

___

### UpdateInstanceAlias

• **UpdateInstanceAlias** = ``"workdocs:UpdateInstanceAlias"``

Grants permission to update an instance alias

See https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html

#### Defined in

actions/workdocs.ts:369

___

### UpdateUser

• **UpdateUser** = ``"workdocs:UpdateUser"``

Grants permission to update the specified attributes of the specified user, and
grants or revokes administrative privileges to the Amazon WorkDocs site

See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateUser.html

#### Defined in

actions/workdocs.ts:376

___

### UpdateUserAdministrativeSettings

• **UpdateUserAdministrativeSettings** = ``"workdocs:UpdateUserAdministrativeSettings"``

Grants permission to update the administrative settings for a user

See https://docs.aws.amazon.com/workdocs/latest/adminguide/migration.html

#### Defined in

actions/workdocs.ts:382
