[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSqlworkbenchActions

# Enumeration: AwsSqlworkbenchActions

All IAM policy actions for AWS SQL Workbench (SQLWORKBENCH)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssqlworkbench.html

2024-02-12T09:59:20.188Z

## Table of contents

### Enumeration Members

- [AssociateConnectionWithChart](AwsSqlworkbenchActions.md#associateconnectionwithchart)
- [AssociateConnectionWithTab](AwsSqlworkbenchActions.md#associateconnectionwithtab)
- [AssociateNotebookWithTab](AwsSqlworkbenchActions.md#associatenotebookwithtab)
- [AssociateQueryWithTab](AwsSqlworkbenchActions.md#associatequerywithtab)
- [BatchDeleteFolder](AwsSqlworkbenchActions.md#batchdeletefolder)
- [BatchGetNotebookCell](AwsSqlworkbenchActions.md#batchgetnotebookcell)
- [CreateAccount](AwsSqlworkbenchActions.md#createaccount)
- [CreateChart](AwsSqlworkbenchActions.md#createchart)
- [CreateConnection](AwsSqlworkbenchActions.md#createconnection)
- [CreateFolder](AwsSqlworkbenchActions.md#createfolder)
- [CreateNotebook](AwsSqlworkbenchActions.md#createnotebook)
- [CreateNotebookCell](AwsSqlworkbenchActions.md#createnotebookcell)
- [CreateNotebookFromVersion](AwsSqlworkbenchActions.md#createnotebookfromversion)
- [CreateNotebookVersion](AwsSqlworkbenchActions.md#createnotebookversion)
- [CreateSavedQuery](AwsSqlworkbenchActions.md#createsavedquery)
- [DeleteChart](AwsSqlworkbenchActions.md#deletechart)
- [DeleteConnection](AwsSqlworkbenchActions.md#deleteconnection)
- [DeleteNotebook](AwsSqlworkbenchActions.md#deletenotebook)
- [DeleteNotebookCell](AwsSqlworkbenchActions.md#deletenotebookcell)
- [DeleteNotebookVersion](AwsSqlworkbenchActions.md#deletenotebookversion)
- [DeleteSavedQuery](AwsSqlworkbenchActions.md#deletesavedquery)
- [DeleteTab](AwsSqlworkbenchActions.md#deletetab)
- [DriverExecute](AwsSqlworkbenchActions.md#driverexecute)
- [DuplicateNotebook](AwsSqlworkbenchActions.md#duplicatenotebook)
- [ExportNotebook](AwsSqlworkbenchActions.md#exportnotebook)
- [GenerateSession](AwsSqlworkbenchActions.md#generatesession)
- [GetAccountInfo](AwsSqlworkbenchActions.md#getaccountinfo)
- [GetAccountSettings](AwsSqlworkbenchActions.md#getaccountsettings)
- [GetAutocompletionMetadata](AwsSqlworkbenchActions.md#getautocompletionmetadata)
- [GetAutocompletionResource](AwsSqlworkbenchActions.md#getautocompletionresource)
- [GetChart](AwsSqlworkbenchActions.md#getchart)
- [GetConnection](AwsSqlworkbenchActions.md#getconnection)
- [GetNotebook](AwsSqlworkbenchActions.md#getnotebook)
- [GetNotebookVersion](AwsSqlworkbenchActions.md#getnotebookversion)
- [GetQSqlRecommendations](AwsSqlworkbenchActions.md#getqsqlrecommendations)
- [GetQueryExecutionHistory](AwsSqlworkbenchActions.md#getqueryexecutionhistory)
- [GetSavedQuery](AwsSqlworkbenchActions.md#getsavedquery)
- [GetSchemaInference](AwsSqlworkbenchActions.md#getschemainference)
- [GetUserInfo](AwsSqlworkbenchActions.md#getuserinfo)
- [GetUserWorkspaceSettings](AwsSqlworkbenchActions.md#getuserworkspacesettings)
- [ImportNotebook](AwsSqlworkbenchActions.md#importnotebook)
- [ListConnections](AwsSqlworkbenchActions.md#listconnections)
- [ListDatabases](AwsSqlworkbenchActions.md#listdatabases)
- [ListFiles](AwsSqlworkbenchActions.md#listfiles)
- [ListNotebookVersions](AwsSqlworkbenchActions.md#listnotebookversions)
- [ListNotebooks](AwsSqlworkbenchActions.md#listnotebooks)
- [ListQueryExecutionHistory](AwsSqlworkbenchActions.md#listqueryexecutionhistory)
- [ListRedshiftClusters](AwsSqlworkbenchActions.md#listredshiftclusters)
- [ListSampleDatabases](AwsSqlworkbenchActions.md#listsampledatabases)
- [ListSavedQueryVersions](AwsSqlworkbenchActions.md#listsavedqueryversions)
- [ListTabs](AwsSqlworkbenchActions.md#listtabs)
- [ListTaggedResources](AwsSqlworkbenchActions.md#listtaggedresources)
- [ListTagsForResource](AwsSqlworkbenchActions.md#listtagsforresource)
- [PutTab](AwsSqlworkbenchActions.md#puttab)
- [PutUserWorkspaceSettings](AwsSqlworkbenchActions.md#putuserworkspacesettings)
- [RestoreNotebookVersion](AwsSqlworkbenchActions.md#restorenotebookversion)
- [TagResource](AwsSqlworkbenchActions.md#tagresource)
- [UntagResource](AwsSqlworkbenchActions.md#untagresource)
- [UpdateAccountConnectionSettings](AwsSqlworkbenchActions.md#updateaccountconnectionsettings)
- [UpdateAccountExportSettings](AwsSqlworkbenchActions.md#updateaccountexportsettings)
- [UpdateAccountGeneralSettings](AwsSqlworkbenchActions.md#updateaccountgeneralsettings)
- [UpdateAccountQSqlSettings](AwsSqlworkbenchActions.md#updateaccountqsqlsettings)
- [UpdateChart](AwsSqlworkbenchActions.md#updatechart)
- [UpdateConnection](AwsSqlworkbenchActions.md#updateconnection)
- [UpdateFileFolder](AwsSqlworkbenchActions.md#updatefilefolder)
- [UpdateFolder](AwsSqlworkbenchActions.md#updatefolder)
- [UpdateNotebook](AwsSqlworkbenchActions.md#updatenotebook)
- [UpdateNotebookCellContent](AwsSqlworkbenchActions.md#updatenotebookcellcontent)
- [UpdateNotebookCellLayout](AwsSqlworkbenchActions.md#updatenotebookcelllayout)
- [UpdateSavedQuery](AwsSqlworkbenchActions.md#updatesavedquery)

## Enumeration Members

### AssociateConnectionWithChart

• **AssociateConnectionWithChart** = ``"sqlworkbench:AssociateConnectionWithChart"``

Grants permission to associate connection to a chart

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:17

___

### AssociateConnectionWithTab

• **AssociateConnectionWithTab** = ``"sqlworkbench:AssociateConnectionWithTab"``

Grants permission to associate connection to a tab

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:23

___

### AssociateNotebookWithTab

• **AssociateNotebookWithTab** = ``"sqlworkbench:AssociateNotebookWithTab"``

Grants permission to associate notebook to a tab

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:29

___

### AssociateQueryWithTab

• **AssociateQueryWithTab** = ``"sqlworkbench:AssociateQueryWithTab"``

Grants permission to associate query to a tab

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:35

___

### BatchDeleteFolder

• **BatchDeleteFolder** = ``"sqlworkbench:BatchDeleteFolder"``

Grants permission to delete folders on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:41

___

### BatchGetNotebookCell

• **BatchGetNotebookCell** = ``"sqlworkbench:BatchGetNotebookCell"``

Grants permission to get notebook cells content on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:47

___

### CreateAccount

• **CreateAccount** = ``"sqlworkbench:CreateAccount"``

Grants permission to create SQLWorkbench account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:53

___

### CreateChart

• **CreateChart** = ``"sqlworkbench:CreateChart"``

Grants permission to create new saved chart on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:59

___

### CreateConnection

• **CreateConnection** = ``"sqlworkbench:CreateConnection"``

Grants permission to create a new connection on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:65

___

### CreateFolder

• **CreateFolder** = ``"sqlworkbench:CreateFolder"``

Grants permission to create folder on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:71

___

### CreateNotebook

• **CreateNotebook** = ``"sqlworkbench:CreateNotebook"``

Grants permission to create a new notebook on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:77

___

### CreateNotebookCell

• **CreateNotebookCell** = ``"sqlworkbench:CreateNotebookCell"``

Grants permission to create a notebook cell on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:83

___

### CreateNotebookFromVersion

• **CreateNotebookFromVersion** = ``"sqlworkbench:CreateNotebookFromVersion"``

Grants permission to create a new notebook from a notebook version on your acco
unt

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:90

___

### CreateNotebookVersion

• **CreateNotebookVersion** = ``"sqlworkbench:CreateNotebookVersion"``

Grants permission to create a notebook version on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:96

___

### CreateSavedQuery

• **CreateSavedQuery** = ``"sqlworkbench:CreateSavedQuery"``

Grants permission to create a new saved query on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:102

___

### DeleteChart

• **DeleteChart** = ``"sqlworkbench:DeleteChart"``

Grants permission to remove charts on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:108

___

### DeleteConnection

• **DeleteConnection** = ``"sqlworkbench:DeleteConnection"``

Grants permission to remove connections on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:114

___

### DeleteNotebook

• **DeleteNotebook** = ``"sqlworkbench:DeleteNotebook"``

Grants permission to remove notebooks on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:120

___

### DeleteNotebookCell

• **DeleteNotebookCell** = ``"sqlworkbench:DeleteNotebookCell"``

Grants permission to remove notebooks cells on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:126

___

### DeleteNotebookVersion

• **DeleteNotebookVersion** = ``"sqlworkbench:DeleteNotebookVersion"``

Grants permission to remove notebooks cells on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:132

___

### DeleteSavedQuery

• **DeleteSavedQuery** = ``"sqlworkbench:DeleteSavedQuery"``

Grants permission to remove saved queries on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:138

___

### DeleteTab

• **DeleteTab** = ``"sqlworkbench:DeleteTab"``

Grants permission to remove a tab on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:144

___

### DriverExecute

• **DriverExecute** = ``"sqlworkbench:DriverExecute"``

Grants permission to execute a query in your redshift cluster

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:150

___

### DuplicateNotebook

• **DuplicateNotebook** = ``"sqlworkbench:DuplicateNotebook"``

Grants permission to create a new notebook by duplicating an existing one on yo
ur account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:157

___

### ExportNotebook

• **ExportNotebook** = ``"sqlworkbench:ExportNotebook"``

Grants permission to export a notebook on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:163

___

### GenerateSession

• **GenerateSession** = ``"sqlworkbench:GenerateSession"``

Grants permission to generate a new session on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:169

___

### GetAccountInfo

• **GetAccountInfo** = ``"sqlworkbench:GetAccountInfo"``

Grants permission to get account info

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:175

___

### GetAccountSettings

• **GetAccountSettings** = ``"sqlworkbench:GetAccountSettings"``

Grants permission to get account settings

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:181

___

### GetAutocompletionMetadata

• **GetAutocompletionMetadata** = ``"sqlworkbench:GetAutocompletionMetadata"``

Grants permission to get database structure metadata for auto-completion

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:187

___

### GetAutocompletionResource

• **GetAutocompletionResource** = ``"sqlworkbench:GetAutocompletionResource"``

Grants permission to get database structure information for auto-completion

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:193

___

### GetChart

• **GetChart** = ``"sqlworkbench:GetChart"``

Grants permission to get charts on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:199

___

### GetConnection

• **GetConnection** = ``"sqlworkbench:GetConnection"``

Grants permission to get connections on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:205

___

### GetNotebook

• **GetNotebook** = ``"sqlworkbench:GetNotebook"``

Grants permission to get notebook metadata on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:211

___

### GetNotebookVersion

• **GetNotebookVersion** = ``"sqlworkbench:GetNotebookVersion"``

Grants permission to get the content of a notebook version on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:217

___

### GetQSqlRecommendations

• **GetQSqlRecommendations** = ``"sqlworkbench:GetQSqlRecommendations"``

Grants permission to get text to SQL recommendations

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:223

___

### GetQueryExecutionHistory

• **GetQueryExecutionHistory** = ``"sqlworkbench:GetQueryExecutionHistory"``

Grants permission to get the query execution history on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:229

___

### GetSavedQuery

• **GetSavedQuery** = ``"sqlworkbench:GetSavedQuery"``

Grants permission to get saved query on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:235

___

### GetSchemaInference

• **GetSchemaInference** = ``"sqlworkbench:GetSchemaInference"``

Grants permission to get the columns and data types inferred from a file

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:241

___

### GetUserInfo

• **GetUserInfo** = ``"sqlworkbench:GetUserInfo"``

Grants permission to get user info

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:247

___

### GetUserWorkspaceSettings

• **GetUserWorkspaceSettings** = ``"sqlworkbench:GetUserWorkspaceSettings"``

Grants permission to get workspace settings on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:253

___

### ImportNotebook

• **ImportNotebook** = ``"sqlworkbench:ImportNotebook"``

Grants permission to import a notebook on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:259

___

### ListConnections

• **ListConnections** = ``"sqlworkbench:ListConnections"``

Grants permission to list the connections on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:265

___

### ListDatabases

• **ListDatabases** = ``"sqlworkbench:ListDatabases"``

Grants permission to list databases of your redshift cluster

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:271

___

### ListFiles

• **ListFiles** = ``"sqlworkbench:ListFiles"``

Grants permission to list files and folders

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:277

___

### ListNotebookVersions

• **ListNotebookVersions** = ``"sqlworkbench:ListNotebookVersions"``

Grants permission to get notebook versions metadata on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:283

___

### ListNotebooks

• **ListNotebooks** = ``"sqlworkbench:ListNotebooks"``

Grants permission to list the notebooks on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:289

___

### ListQueryExecutionHistory

• **ListQueryExecutionHistory** = ``"sqlworkbench:ListQueryExecutionHistory"``

Grants permission to list the query execution history on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:295

___

### ListRedshiftClusters

• **ListRedshiftClusters** = ``"sqlworkbench:ListRedshiftClusters"``

Grants permission to list redshift clusters on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:301

___

### ListSampleDatabases

• **ListSampleDatabases** = ``"sqlworkbench:ListSampleDatabases"``

Grants permission to list sample databases

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:307

___

### ListSavedQueryVersions

• **ListSavedQueryVersions** = ``"sqlworkbench:ListSavedQueryVersions"``

Grants permission to list versions of saved query on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:313

___

### ListTabs

• **ListTabs** = ``"sqlworkbench:ListTabs"``

Grants permission to list tabs on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:319

___

### ListTaggedResources

• **ListTaggedResources** = ``"sqlworkbench:ListTaggedResources"``

Grants permission to list tagged resources

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:325

___

### ListTagsForResource

• **ListTagsForResource** = ``"sqlworkbench:ListTagsForResource"``

Grants permission to list the tags of an sqlworkbench resource

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:331

___

### PutTab

• **PutTab** = ``"sqlworkbench:PutTab"``

Grants permission to create or update a tab on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:337

___

### PutUserWorkspaceSettings

• **PutUserWorkspaceSettings** = ``"sqlworkbench:PutUserWorkspaceSettings"``

Grants permission to update workspace settings on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:343

___

### RestoreNotebookVersion

• **RestoreNotebookVersion** = ``"sqlworkbench:RestoreNotebookVersion"``

Grants permission to restore a notebook on your account to a version

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:349

___

### TagResource

• **TagResource** = ``"sqlworkbench:TagResource"``

Grants permission to tag an sqlworkbench resource

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:355

___

### UntagResource

• **UntagResource** = ``"sqlworkbench:UntagResource"``

Grants permission to untag an sqlworkbench resource

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:361

___

### UpdateAccountConnectionSettings

• **UpdateAccountConnectionSettings** = ``"sqlworkbench:UpdateAccountConnectionSettings"``

Grants permission to update account-wide connection settings

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:367

___

### UpdateAccountExportSettings

• **UpdateAccountExportSettings** = ``"sqlworkbench:UpdateAccountExportSettings"``

Grants permission to update account-wide export settings

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:373

___

### UpdateAccountGeneralSettings

• **UpdateAccountGeneralSettings** = ``"sqlworkbench:UpdateAccountGeneralSettings"``

Grants permission to update account-wide general settings

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:379

___

### UpdateAccountQSqlSettings

• **UpdateAccountQSqlSettings** = ``"sqlworkbench:UpdateAccountQSqlSettings"``

Grants permission to update account-wide text to SQL settings

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:385

___

### UpdateChart

• **UpdateChart** = ``"sqlworkbench:UpdateChart"``

Grants permission to update a chart on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:391

___

### UpdateConnection

• **UpdateConnection** = ``"sqlworkbench:UpdateConnection"``

Grants permission to update a connection on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:397

___

### UpdateFileFolder

• **UpdateFileFolder** = ``"sqlworkbench:UpdateFileFolder"``

Grants permission to move files on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:403

___

### UpdateFolder

• **UpdateFolder** = ``"sqlworkbench:UpdateFolder"``

Grants permission to update a folder's name and details on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:409

___

### UpdateNotebook

• **UpdateNotebook** = ``"sqlworkbench:UpdateNotebook"``

Grants permission to update a notebook metadata on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:415

___

### UpdateNotebookCellContent

• **UpdateNotebookCellContent** = ``"sqlworkbench:UpdateNotebookCellContent"``

Grants permission to update a notebook cell content on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:421

___

### UpdateNotebookCellLayout

• **UpdateNotebookCellLayout** = ``"sqlworkbench:UpdateNotebookCellLayout"``

Grants permission to update a notebook cell layout on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:427

___

### UpdateSavedQuery

• **UpdateSavedQuery** = ``"sqlworkbench:UpdateSavedQuery"``

Grants permission to update a saved query on your account

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/sqlworkbench.ts:433
