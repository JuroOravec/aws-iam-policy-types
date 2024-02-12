// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon WorkDocs (WORKDOCS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkdocs.html
 *
 * 2024-02-12T09:59:40.371Z
 */
export enum AwsWorkdocsActions {
  /**
   * Grants permission to abort the upload of the specified document version that wa
   * s previously initiated by InitiateDocumentVersionUpload
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AbortDocumentVersionUpload.html
   */
  AbortDocumentVersionUpload = 'workdocs:AbortDocumentVersionUpload',
  /**
   * Grants permission to activate the specified user. Only active users can access
   * Amazon WorkDocs
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_ActivateUser.html
   */
  ActivateUser = 'workdocs:ActivateUser',
  /**
   * Grants permission to add principals that are allowed to call notification subsc
   * ription APIs for a given WorkDocs site
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-notifications.html
   */
  AddNotificationPermissions = 'workdocs:AddNotificationPermissions',
  /**
   * Grants permission to create a set of permissions for the specified folder or do
   * cument
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AddResourcePermissions.html
   */
  AddResourcePermissions = 'workdocs:AddResourcePermissions',
  /**
   * Grants permission to add a user to a group
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage_set_admin.html
   */
  AddUserToGroup = 'workdocs:AddUserToGroup',
  /**
   * Grants permission to check an alias
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/cloud_quick_start.html
   */
  CheckAlias = 'workdocs:CheckAlias',
  /**
   * Grants permission to add a new comment to the specified document version
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateComment.html
   */
  CreateComment = 'workdocs:CreateComment',
  /**
   * Grants permission to add one or more custom properties to the specified resourc
   * e
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateCustomMetadata.html
   */
  CreateCustomMetadata = 'workdocs:CreateCustomMetadata',
  /**
   * Grants permission to create a folder with the specified name and parent folder
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateFolder.html
   */
  CreateFolder = 'workdocs:CreateFolder',
  /**
   * Grants permission to create an instance
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  CreateInstance = 'workdocs:CreateInstance',
  /**
   * Grants permission to add labels to the given resource
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateLabels.html
   */
  CreateLabels = 'workdocs:CreateLabels',
  /**
   * Grants permission to configure WorkDocs to use Amazon SNS notifications
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateNotificationSubscription.html
   */
  CreateNotificationSubscription = 'workdocs:CreateNotificationSubscription',
  /**
   * Grants permission to create a user in a Simple AD or Microsoft AD directory
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html
   */
  CreateUser = 'workdocs:CreateUser',
  /**
   * Grants permission to deactivate the specified user, which revokes the user's ac
   * cess to Amazon WorkDocs
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeactivateUser.html
   */
  DeactivateUser = 'workdocs:DeactivateUser',
  /**
   * Grants permission to delete the specified comment from the document version
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteComment.html
   */
  DeleteComment = 'workdocs:DeleteComment',
  /**
   * Grants permission to delete custom metadata from the specified resource
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteCustomMetadata.html
   */
  DeleteCustomMetadata = 'workdocs:DeleteCustomMetadata',
  /**
   * Grants permission to permanently delete the specified document and its associat
   * ed metadata
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteDocument.html
   */
  DeleteDocument = 'workdocs:DeleteDocument',
  /**
   * Grants permission to delete versions of a specified document
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteDocumentVersion.html
   */
  DeleteDocumentVersion = 'workdocs:DeleteDocumentVersion',
  /**
   * Grants permission to permanently delete the specified folder and its contents
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolder.html
   */
  DeleteFolder = 'workdocs:DeleteFolder',
  /**
   * Grants permission to delete the contents of the specified folder
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolderContents.html
   */
  DeleteFolderContents = 'workdocs:DeleteFolderContents',
  /**
   * Grants permission to delete an instance
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site
   */
  DeleteInstance = 'workdocs:DeleteInstance',
  /**
   * Grants permission to delete one or more labels from a resource
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteLabels.html
   */
  DeleteLabels = 'workdocs:DeleteLabels',
  /**
   * Grants permission to delete principals that are allowed to call notification su
   * bscription APIs for a given WorkDocs site
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-notifications.html
   */
  DeleteNotificationPermissions = 'workdocs:DeleteNotificationPermissions',
  /**
   * Grants permission to delete the specified subscription from the specified organ
   * ization
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteNotificationSubscription.html
   */
  DeleteNotificationSubscription = 'workdocs:DeleteNotificationSubscription',
  /**
   * Grants permission to delete the specified user from a Simple AD or Microsoft AD
   * directory
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteUser.html
   */
  DeleteUser = 'workdocs:DeleteUser',
  /**
   * Grants permission to deregister a directory
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site
   */
  DeregisterDirectory = 'workdocs:DeregisterDirectory',
  /**
   * Grants permission to fetch user activities in a specified time period
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeActivities.html
   */
  DescribeActivities = 'workdocs:DescribeActivities',
  /**
   * Grants permission to describe available directories
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  DescribeAvailableDirectories = 'workdocs:DescribeAvailableDirectories',
  /**
   * Grants permission to list all the comments for the specified document version
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeComments.html
   */
  DescribeComments = 'workdocs:DescribeComments',
  /**
   * Grants permission to retrieve the document versions for the specified document
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeDocumentVersions.html
   */
  DescribeDocumentVersions = 'workdocs:DescribeDocumentVersions',
  /**
   * Grants permission to describe the contents of the specified folder, including i
   * ts documents and sub-folders
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeFolderContents.html
   */
  DescribeFolderContents = 'workdocs:DescribeFolderContents',
  /**
   * Grants permission to describe the user groups
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeGroups.html
   */
  DescribeGroups = 'workdocs:DescribeGroups',
  /**
   * Grants permission to describe instances
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  DescribeInstances = 'workdocs:DescribeInstances',
  /**
   * Grants permission to describe principals that are allowed to call notification
   * subscription APIs for a given WorkDocs site
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-notifications.html
   */
  DescribeNotificationPermissions = 'workdocs:DescribeNotificationPermissions',
  /**
   * Grants permission to list the specified notification subscriptions
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeNotificationSubscriptions.html
   */
  DescribeNotificationSubscriptions = 'workdocs:DescribeNotificationSubscriptions',
  /**
   * Grants permission to view a description of a specified resource's permissions
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeResourcePermissions.html
   */
  DescribeResourcePermissions = 'workdocs:DescribeResourcePermissions',
  /**
   * Grants permission to describe the root folders
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeRootFolders.html
   */
  DescribeRootFolders = 'workdocs:DescribeRootFolders',
  /**
   * Grants permission to view a description of the specified users. You can describ
   * e all users or filter the results (for example, by status or organization)
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeUsers.html
   */
  DescribeUsers = 'workdocs:DescribeUsers',
  /**
   * Grants permission to download a specified document version
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html
   */
  DownloadDocumentVersion = 'workdocs:DownloadDocumentVersion',
  /**
   * Grants permission to retrieve the details of the current user
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetCurrentUser.html
   */
  GetCurrentUser = 'workdocs:GetCurrentUser',
  /**
   * Grants permission to retrieve the specified document object
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocument.html
   */
  GetDocument = 'workdocs:GetDocument',
  /**
   * Grants permission to retrieve the path information (the hierarchy from the root
   * folder) for the requested document
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentPath.html
   */
  GetDocumentPath = 'workdocs:GetDocumentPath',
  /**
   * Grants permission to retrieve version metadata for the specified document
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html
   */
  GetDocumentVersion = 'workdocs:GetDocumentVersion',
  /**
   * Grants permission to retrieve the metadata of the specified folder
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolder.html
   */
  GetFolder = 'workdocs:GetFolder',
  /**
   * Grants permission to retrieve the path information (the hierarchy from the root
   * folder) for the specified folder
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolderPath.html
   */
  GetFolderPath = 'workdocs:GetFolderPath',
  /**
   * Grants permission to retrieve details for the specified group
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_Operations.html
   */
  GetGroup = 'workdocs:GetGroup',
  /**
   * Grants permission to get a collection of resources
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetResources.html
   */
  GetResources = 'workdocs:GetResources',
  /**
   * Grants permission to create a new document object and version object
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_InitiateDocumentVersionUpload.html
   */
  InitiateDocumentVersionUpload = 'workdocs:InitiateDocumentVersionUpload',
  /**
   * Grants permission to register a directory
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/existing-dir-setup.html
   */
  RegisterDirectory = 'workdocs:RegisterDirectory',
  /**
   * Grants permission to remove all the permissions from the specified resource
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveAllResourcePermissions.html
   */
  RemoveAllResourcePermissions = 'workdocs:RemoveAllResourcePermissions',
  /**
   * Grants permission to remove the permission for the specified principal from the
   * specified resource
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveResourcePermission.html
   */
  RemoveResourcePermission = 'workdocs:RemoveResourcePermission',
  /**
   * Grants permission to restore versions of a specified document
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RestoreDocumentVersions.html
   */
  RestoreDocumentVersions = 'workdocs:RestoreDocumentVersions',
  /**
   * Grants permission to search metadata and the content of resources
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_SearchResources.html
   */
  SearchResources = 'workdocs:SearchResources',
  /**
   * Grants permission to update the specified attributes of the specified document
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocument.html
   */
  UpdateDocument = 'workdocs:UpdateDocument',
  /**
   * Grants permission to change the status of the document version to ACTIVE
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocumentVersion.html
   */
  UpdateDocumentVersion = 'workdocs:UpdateDocumentVersion',
  /**
   * Grants permission to update the specified attributes of the specified folder
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateFolder.html
   */
  UpdateFolder = 'workdocs:UpdateFolder',
  /**
   * Grants permission to update an instance alias
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  UpdateInstanceAlias = 'workdocs:UpdateInstanceAlias',
  /**
   * Grants permission to update the specified attributes of the specified user, and
   * grants or revokes administrative privileges to the Amazon WorkDocs site
   *
   * See https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateUser.html
   */
  UpdateUser = 'workdocs:UpdateUser',
  /**
   * Grants permission to update the administrative settings for a user
   *
   * See https://docs.aws.amazon.com/workdocs/latest/adminguide/migration.html
   */
  UpdateUserAdministrativeSettings = 'workdocs:UpdateUserAdministrativeSettings',
}