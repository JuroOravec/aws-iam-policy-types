[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAthenaActions

# Enumeration: AwsAthenaActions

All IAM policy actions for Amazon Athena (ATHENA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonathena.html

2024-02-12T09:56:07.026Z

## Table of contents

### Enumeration Members

- [BatchGetNamedQuery](AwsAthenaActions.md#batchgetnamedquery)
- [BatchGetPreparedStatement](AwsAthenaActions.md#batchgetpreparedstatement)
- [BatchGetQueryExecution](AwsAthenaActions.md#batchgetqueryexecution)
- [CancelCapacityReservation](AwsAthenaActions.md#cancelcapacityreservation)
- [CancelQueryExecution](AwsAthenaActions.md#cancelqueryexecution)
- [CreateCapacityReservation](AwsAthenaActions.md#createcapacityreservation)
- [CreateDataCatalog](AwsAthenaActions.md#createdatacatalog)
- [CreateNamedQuery](AwsAthenaActions.md#createnamedquery)
- [CreateNotebook](AwsAthenaActions.md#createnotebook)
- [CreatePreparedStatement](AwsAthenaActions.md#createpreparedstatement)
- [CreatePresignedNotebookUrl](AwsAthenaActions.md#createpresignednotebookurl)
- [CreateWorkGroup](AwsAthenaActions.md#createworkgroup)
- [DeleteCapacityReservation](AwsAthenaActions.md#deletecapacityreservation)
- [DeleteDataCatalog](AwsAthenaActions.md#deletedatacatalog)
- [DeleteNamedQuery](AwsAthenaActions.md#deletenamedquery)
- [DeleteNotebook](AwsAthenaActions.md#deletenotebook)
- [DeletePreparedStatement](AwsAthenaActions.md#deletepreparedstatement)
- [DeleteWorkGroup](AwsAthenaActions.md#deleteworkgroup)
- [ExportNotebook](AwsAthenaActions.md#exportnotebook)
- [GetCalculationExecution](AwsAthenaActions.md#getcalculationexecution)
- [GetCalculationExecutionCode](AwsAthenaActions.md#getcalculationexecutioncode)
- [GetCalculationExecutionStatus](AwsAthenaActions.md#getcalculationexecutionstatus)
- [GetCapacityAssignmentConfiguration](AwsAthenaActions.md#getcapacityassignmentconfiguration)
- [GetCapacityReservation](AwsAthenaActions.md#getcapacityreservation)
- [GetCatalogs](AwsAthenaActions.md#getcatalogs)
- [GetDataCatalog](AwsAthenaActions.md#getdatacatalog)
- [GetDatabase](AwsAthenaActions.md#getdatabase)
- [GetExecutionEngine](AwsAthenaActions.md#getexecutionengine)
- [GetExecutionEngines](AwsAthenaActions.md#getexecutionengines)
- [GetNamedQuery](AwsAthenaActions.md#getnamedquery)
- [GetNamespace](AwsAthenaActions.md#getnamespace)
- [GetNamespaces](AwsAthenaActions.md#getnamespaces)
- [GetNotebookMetadata](AwsAthenaActions.md#getnotebookmetadata)
- [GetPreparedStatement](AwsAthenaActions.md#getpreparedstatement)
- [GetQueryExecution](AwsAthenaActions.md#getqueryexecution)
- [GetQueryExecutions](AwsAthenaActions.md#getqueryexecutions)
- [GetQueryResults](AwsAthenaActions.md#getqueryresults)
- [GetQueryResultsStream](AwsAthenaActions.md#getqueryresultsstream)
- [GetQueryRuntimeStatistics](AwsAthenaActions.md#getqueryruntimestatistics)
- [GetSession](AwsAthenaActions.md#getsession)
- [GetSessionStatus](AwsAthenaActions.md#getsessionstatus)
- [GetTable](AwsAthenaActions.md#gettable)
- [GetTableMetadata](AwsAthenaActions.md#gettablemetadata)
- [GetTables](AwsAthenaActions.md#gettables)
- [GetWorkGroup](AwsAthenaActions.md#getworkgroup)
- [ImportNotebook](AwsAthenaActions.md#importnotebook)
- [ListApplicationDPUSizes](AwsAthenaActions.md#listapplicationdpusizes)
- [ListCalculationExecutions](AwsAthenaActions.md#listcalculationexecutions)
- [ListCapacityReservations](AwsAthenaActions.md#listcapacityreservations)
- [ListDataCatalogs](AwsAthenaActions.md#listdatacatalogs)
- [ListDatabases](AwsAthenaActions.md#listdatabases)
- [ListEngineVersions](AwsAthenaActions.md#listengineversions)
- [ListExecutors](AwsAthenaActions.md#listexecutors)
- [ListNamedQueries](AwsAthenaActions.md#listnamedqueries)
- [ListNotebookMetadata](AwsAthenaActions.md#listnotebookmetadata)
- [ListNotebookSessions](AwsAthenaActions.md#listnotebooksessions)
- [ListPreparedStatements](AwsAthenaActions.md#listpreparedstatements)
- [ListQueryExecutions](AwsAthenaActions.md#listqueryexecutions)
- [ListSessions](AwsAthenaActions.md#listsessions)
- [ListTableMetadata](AwsAthenaActions.md#listtablemetadata)
- [ListTagsForResource](AwsAthenaActions.md#listtagsforresource)
- [ListWorkGroups](AwsAthenaActions.md#listworkgroups)
- [PutCapacityAssignmentConfiguration](AwsAthenaActions.md#putcapacityassignmentconfiguration)
- [RunQuery](AwsAthenaActions.md#runquery)
- [StartCalculationExecution](AwsAthenaActions.md#startcalculationexecution)
- [StartQueryExecution](AwsAthenaActions.md#startqueryexecution)
- [StartSession](AwsAthenaActions.md#startsession)
- [StopCalculationExecution](AwsAthenaActions.md#stopcalculationexecution)
- [StopQueryExecution](AwsAthenaActions.md#stopqueryexecution)
- [TagResource](AwsAthenaActions.md#tagresource)
- [TerminateSession](AwsAthenaActions.md#terminatesession)
- [UntagResource](AwsAthenaActions.md#untagresource)
- [UpdateCapacityReservation](AwsAthenaActions.md#updatecapacityreservation)
- [UpdateDataCatalog](AwsAthenaActions.md#updatedatacatalog)
- [UpdateNamedQuery](AwsAthenaActions.md#updatenamedquery)
- [UpdateNotebook](AwsAthenaActions.md#updatenotebook)
- [UpdateNotebookMetadata](AwsAthenaActions.md#updatenotebookmetadata)
- [UpdatePreparedStatement](AwsAthenaActions.md#updatepreparedstatement)
- [UpdateWorkGroup](AwsAthenaActions.md#updateworkgroup)

## Enumeration Members

### BatchGetNamedQuery

• **BatchGetNamedQuery** = ``"athena:BatchGetNamedQuery"``

Grants permission to get information about one or more named queries

See https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetNamedQuery.html

#### Defined in

actions/athena.ts:17

___

### BatchGetPreparedStatement

• **BatchGetPreparedStatement** = ``"athena:BatchGetPreparedStatement"``

Grants permission to get information about one or more prepared statements

See https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetPreparedStatement.html

#### Defined in

actions/athena.ts:23

___

### BatchGetQueryExecution

• **BatchGetQueryExecution** = ``"athena:BatchGetQueryExecution"``

Grants permission to get information about one or more query executions

See https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetQueryExecution.html

#### Defined in

actions/athena.ts:29

___

### CancelCapacityReservation

• **CancelCapacityReservation** = ``"athena:CancelCapacityReservation"``

Grants permission to cancel a capacity reservation

See https://docs.aws.amazon.com/athena/latest/APIReference/API_CancelCapacityReservation.html

#### Defined in

actions/athena.ts:35

___

### CancelQueryExecution

• **CancelQueryExecution** = ``"athena:CancelQueryExecution"``

Grants permission to cancel query execution. Deprecated. Applies only to AWS se
rvices and principals that use Athena JDBC driver earlier than 1.1.0. Use StopQ
ueryExecution otherwise

See https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html

#### Defined in

actions/athena.ts:43

___

### CreateCapacityReservation

• **CreateCapacityReservation** = ``"athena:CreateCapacityReservation"``

Grants permission to create a capacity reservation

See https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateCapacityReservation.html

#### Defined in

actions/athena.ts:49

___

### CreateDataCatalog

• **CreateDataCatalog** = ``"athena:CreateDataCatalog"``

Grants permission to create a datacatalog

See https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateDataCatalog.html

#### Defined in

actions/athena.ts:55

___

### CreateNamedQuery

• **CreateNamedQuery** = ``"athena:CreateNamedQuery"``

Grants permission to create a named query

See https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNamedQuery.html

#### Defined in

actions/athena.ts:61

___

### CreateNotebook

• **CreateNotebook** = ``"athena:CreateNotebook"``

Grants permission to create a notebook

See https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNotebook.html

#### Defined in

actions/athena.ts:67

___

### CreatePreparedStatement

• **CreatePreparedStatement** = ``"athena:CreatePreparedStatement"``

Grants permission to create a prepared statement

See https://docs.aws.amazon.com/athena/latest/APIReference/API_CreatePreparedStatement.html

#### Defined in

actions/athena.ts:73

___

### CreatePresignedNotebookUrl

• **CreatePresignedNotebookUrl** = ``"athena:CreatePresignedNotebookUrl"``

Grants permission to create a presigned notebook url

See https://docs.aws.amazon.com/athena/latest/APIReference/API_CreatePresignedNotebookUrl.html

#### Defined in

actions/athena.ts:79

___

### CreateWorkGroup

• **CreateWorkGroup** = ``"athena:CreateWorkGroup"``

Grants permission to create a workgroup

See https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateWorkGroup.html

#### Defined in

actions/athena.ts:85

___

### DeleteCapacityReservation

• **DeleteCapacityReservation** = ``"athena:DeleteCapacityReservation"``

Grants permission to delete a capacity reservation

See https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteCapacityReservation.html

#### Defined in

actions/athena.ts:91

___

### DeleteDataCatalog

• **DeleteDataCatalog** = ``"athena:DeleteDataCatalog"``

Grants permission to delete a datacatalog

See https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteDataCatalog.html

#### Defined in

actions/athena.ts:97

___

### DeleteNamedQuery

• **DeleteNamedQuery** = ``"athena:DeleteNamedQuery"``

Grants permission to delete a named query specified

See https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNamedQuery.html

#### Defined in

actions/athena.ts:103

___

### DeleteNotebook

• **DeleteNotebook** = ``"athena:DeleteNotebook"``

Grants permission to delete a notebook

See https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNotebook.html

#### Defined in

actions/athena.ts:109

___

### DeletePreparedStatement

• **DeletePreparedStatement** = ``"athena:DeletePreparedStatement"``

Grants permission to delete a prepared statement specified

See https://docs.aws.amazon.com/athena/latest/APIReference/API_DeletePreparedStatement.html

#### Defined in

actions/athena.ts:115

___

### DeleteWorkGroup

• **DeleteWorkGroup** = ``"athena:DeleteWorkGroup"``

Grants permission to delete a workgroup

See https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteWorkGroup.html

#### Defined in

actions/athena.ts:121

___

### ExportNotebook

• **ExportNotebook** = ``"athena:ExportNotebook"``

Grants permission to export a notebook

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ExportNotebook.html

#### Defined in

actions/athena.ts:127

___

### GetCalculationExecution

• **GetCalculationExecution** = ``"athena:GetCalculationExecution"``

Grants permission to get a calculation execution

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetCalculationExecution.html

#### Defined in

actions/athena.ts:133

___

### GetCalculationExecutionCode

• **GetCalculationExecutionCode** = ``"athena:GetCalculationExecutionCode"``

Grants permission to get a calculation execution code

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetCalculationExecutionCode.html

#### Defined in

actions/athena.ts:139

___

### GetCalculationExecutionStatus

• **GetCalculationExecutionStatus** = ``"athena:GetCalculationExecutionStatus"``

Grants permission to get a calculation execution status

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetCalculationExecutionStatus.html

#### Defined in

actions/athena.ts:145

___

### GetCapacityAssignmentConfiguration

• **GetCapacityAssignmentConfiguration** = ``"athena:GetCapacityAssignmentConfiguration"``

Grants permission to get capacity assignment information for a capacity reserva
tion

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetCapacityAssignmentConfiguration.html

#### Defined in

actions/athena.ts:152

___

### GetCapacityReservation

• **GetCapacityReservation** = ``"athena:GetCapacityReservation"``

Grants permission to get a capacity reservation

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetCapacityReservation.html

#### Defined in

actions/athena.ts:158

___

### GetCatalogs

• **GetCatalogs** = ``"athena:GetCatalogs"``

Grants permission to enable access to databases and tables. Applies only to AWS
services managed policy and principals that use an Athena JDBC driver version 1
.1.0

See https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies

#### Defined in

actions/athena.ts:166

___

### GetDataCatalog

• **GetDataCatalog** = ``"athena:GetDataCatalog"``

Grants permission to get a datacatalog

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDataCatalog.html

#### Defined in

actions/athena.ts:172

___

### GetDatabase

• **GetDatabase** = ``"athena:GetDatabase"``

Grants permission to get a database for a given datacatalog

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDatabase.html

#### Defined in

actions/athena.ts:178

___

### GetExecutionEngine

• **GetExecutionEngine** = ``"athena:GetExecutionEngine"``

Grants permission to enable access to the specified database and table. Applies
only to AWS services managed policy and principals that use an Athena JDBC driv
er version 1.1.0

See https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies

#### Defined in

actions/athena.ts:186

___

### GetExecutionEngines

• **GetExecutionEngines** = ``"athena:GetExecutionEngines"``

Grants permission to enable access to databases and tables. Applies only to AWS
services managed policy and principals that use an Athena JDBC driver version 1
.1.0

See https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies

#### Defined in

actions/athena.ts:194

___

### GetNamedQuery

• **GetNamedQuery** = ``"athena:GetNamedQuery"``

Grants permission to get information about the specified named query

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNamedQuery.html

#### Defined in

actions/athena.ts:200

___

### GetNamespace

• **GetNamespace** = ``"athena:GetNamespace"``

Grants permission to enable access to the specified database and table. Applies
only to AWS services managed policy and principals that use an Athena JDBC driv
er version 1.1.0

See https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies

#### Defined in

actions/athena.ts:208

___

### GetNamespaces

• **GetNamespaces** = ``"athena:GetNamespaces"``

Grants permission to enable access to databases and tables. Applies only to AWS
services managed policy and principals that use an Athena JDBC driver version 1
.1.0

See https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies

#### Defined in

actions/athena.ts:216

___

### GetNotebookMetadata

• **GetNotebookMetadata** = ``"athena:GetNotebookMetadata"``

Grants permission to get notebook metadata

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNotebookMetadata.html

#### Defined in

actions/athena.ts:222

___

### GetPreparedStatement

• **GetPreparedStatement** = ``"athena:GetPreparedStatement"``

Grants permission to get information about the specified prepared statement

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetPreparedStatement.html

#### Defined in

actions/athena.ts:228

___

### GetQueryExecution

• **GetQueryExecution** = ``"athena:GetQueryExecution"``

Grants permission to get information about the specified query execution

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryExecution.html

#### Defined in

actions/athena.ts:234

___

### GetQueryExecutions

• **GetQueryExecutions** = ``"athena:GetQueryExecutions"``

Grants permission to get query executions. Deprecated. Applies only to AWS serv
ices and principals that use Athena JDBC driver earlier than 1.1.0. Use ListQue
ryExecutions otherwise

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html

#### Defined in

actions/athena.ts:242

___

### GetQueryResults

• **GetQueryResults** = ``"athena:GetQueryResults"``

Grants permission to get the query results

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryResults.html

#### Defined in

actions/athena.ts:248

___

### GetQueryResultsStream

• **GetQueryResultsStream** = ``"athena:GetQueryResultsStream"``

Grants permission to get the query results stream

See https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies

#### Defined in

actions/athena.ts:254

___

### GetQueryRuntimeStatistics

• **GetQueryRuntimeStatistics** = ``"athena:GetQueryRuntimeStatistics"``

Grants permission to get runtime statistics for the specified query execution

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryRuntimeStatistics.html

#### Defined in

actions/athena.ts:260

___

### GetSession

• **GetSession** = ``"athena:GetSession"``

Grants permission to get a session

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetSession.html

#### Defined in

actions/athena.ts:266

___

### GetSessionStatus

• **GetSessionStatus** = ``"athena:GetSessionStatus"``

Grants permission to get a session status

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetSessionStatus.html

#### Defined in

actions/athena.ts:272

___

### GetTable

• **GetTable** = ``"athena:GetTable"``

Grants permission to enable access to the specified table. Applies only to AWS
services managed policy and principals that use an Athena JDBC driver version 1
.1.0

See https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies

#### Defined in

actions/athena.ts:280

___

### GetTableMetadata

• **GetTableMetadata** = ``"athena:GetTableMetadata"``

Grants permission to get a metadata about a table for a given datacatalog

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetTableMetadata.html

#### Defined in

actions/athena.ts:286

___

### GetTables

• **GetTables** = ``"athena:GetTables"``

Grants permission to enable access to tables. Applies only to AWS services mana
ged policy and principals that use an Athena JDBC driver version 1.1.0

See https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies

#### Defined in

actions/athena.ts:293

___

### GetWorkGroup

• **GetWorkGroup** = ``"athena:GetWorkGroup"``

Grants permission to get a workgroup

See https://docs.aws.amazon.com/athena/latest/APIReference/API_GetWorkGroup.html

#### Defined in

actions/athena.ts:299

___

### ImportNotebook

• **ImportNotebook** = ``"athena:ImportNotebook"``

Grants permission to import a notebook

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ImportNotebook.html

#### Defined in

actions/athena.ts:305

___

### ListApplicationDPUSizes

• **ListApplicationDPUSizes** = ``"athena:ListApplicationDPUSizes"``

Grants permission to return a list of ApplicationRuntimeIds

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListApplicationDPUSizes.html

#### Defined in

actions/athena.ts:311

___

### ListCalculationExecutions

• **ListCalculationExecutions** = ``"athena:ListCalculationExecutions"``

Grants permission to return a list of calculation executions

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListCalculationExecutions.html

#### Defined in

actions/athena.ts:317

___

### ListCapacityReservations

• **ListCapacityReservations** = ``"athena:ListCapacityReservations"``

Grants permission to return a list of capacity reservations for the specified A
WS account

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListCapacityReservations.html

#### Defined in

actions/athena.ts:324

___

### ListDataCatalogs

• **ListDataCatalogs** = ``"athena:ListDataCatalogs"``

Grants permission to return a list of datacatalogs for the specified AWS accoun
t

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDataCatalogs.html

#### Defined in

actions/athena.ts:331

___

### ListDatabases

• **ListDatabases** = ``"athena:ListDatabases"``

Grants permission to return a list of databases for a given datacatalog

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDatabases.html

#### Defined in

actions/athena.ts:337

___

### ListEngineVersions

• **ListEngineVersions** = ``"athena:ListEngineVersions"``

Grants permission to return a list of athena engine versions for the specified
AWS account

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListEngineVersions.html

#### Defined in

actions/athena.ts:344

___

### ListExecutors

• **ListExecutors** = ``"athena:ListExecutors"``

Grants permission to return a list of executors

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListExecutors.html

#### Defined in

actions/athena.ts:350

___

### ListNamedQueries

• **ListNamedQueries** = ``"athena:ListNamedQueries"``

Grants permission to return a list of named queries in Amazon Athena for the sp
ecified AWS account

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNamedQueries.html

#### Defined in

actions/athena.ts:357

___

### ListNotebookMetadata

• **ListNotebookMetadata** = ``"athena:ListNotebookMetadata"``

Grants permission to return a list of notebooks for a given workgroup

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNotebookMetadata.html

#### Defined in

actions/athena.ts:363

___

### ListNotebookSessions

• **ListNotebookSessions** = ``"athena:ListNotebookSessions"``

Grants permission to return a list of sessions for a given notebook

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNotebookSessions.html

#### Defined in

actions/athena.ts:369

___

### ListPreparedStatements

• **ListPreparedStatements** = ``"athena:ListPreparedStatements"``

Grants permission to return a list of prepared statements for the specified wor
kgroup

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListPreparedStatements.html

#### Defined in

actions/athena.ts:376

___

### ListQueryExecutions

• **ListQueryExecutions** = ``"athena:ListQueryExecutions"``

Grants permission to return a list of query executions for the specified AWS ac
count

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html

#### Defined in

actions/athena.ts:383

___

### ListSessions

• **ListSessions** = ``"athena:ListSessions"``

Grants permission to return a list of sessions for a given workgroup

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListSessions.html

#### Defined in

actions/athena.ts:389

___

### ListTableMetadata

• **ListTableMetadata** = ``"athena:ListTableMetadata"``

Grants permission to return a list of table metadata in a database for a given
datacatalog

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTableMetadata.html

#### Defined in

actions/athena.ts:396

___

### ListTagsForResource

• **ListTagsForResource** = ``"athena:ListTagsForResource"``

Grants permission to return a list of tags for a resource

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/athena.ts:402

___

### ListWorkGroups

• **ListWorkGroups** = ``"athena:ListWorkGroups"``

Grants permission to return a list of workgroups for the specified AWS account

See https://docs.aws.amazon.com/athena/latest/APIReference/API_ListWorkGroups.html

#### Defined in

actions/athena.ts:408

___

### PutCapacityAssignmentConfiguration

• **PutCapacityAssignmentConfiguration** = ``"athena:PutCapacityAssignmentConfiguration"``

Grants permission to assign capacity from a capacity reservation to queries

See https://docs.aws.amazon.com/athena/latest/APIReference/API_PutCapacityAssignmentConfiguration.html

#### Defined in

actions/athena.ts:414

___

### RunQuery

• **RunQuery** = ``"athena:RunQuery"``

Grants permission to run a query. Deprecated. Applies only to AWS services and
principals that use Athena JDBC driver earlier than 1.1.0. Use StartQueryExecut
ion otherwise

See https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html

#### Defined in

actions/athena.ts:422

___

### StartCalculationExecution

• **StartCalculationExecution** = ``"athena:StartCalculationExecution"``

Grants permission to start a calculation execution

See https://docs.aws.amazon.com/athena/latest/APIReference/API_StartCalculationExecution.html

#### Defined in

actions/athena.ts:428

___

### StartQueryExecution

• **StartQueryExecution** = ``"athena:StartQueryExecution"``

Grants permission to start a query execution using an SQL query provided as a s
tring

See https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html

#### Defined in

actions/athena.ts:435

___

### StartSession

• **StartSession** = ``"athena:StartSession"``

Grants permission to start a session

See https://docs.aws.amazon.com/athena/latest/APIReference/API_StartSession.html

#### Defined in

actions/athena.ts:441

___

### StopCalculationExecution

• **StopCalculationExecution** = ``"athena:StopCalculationExecution"``

Grants permission to stop a calculation execution

See https://docs.aws.amazon.com/athena/latest/APIReference/API_StopCalculationExecution.html

#### Defined in

actions/athena.ts:447

___

### StopQueryExecution

• **StopQueryExecution** = ``"athena:StopQueryExecution"``

Grants permission to stop the specified query execution

See https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html

#### Defined in

actions/athena.ts:453

___

### TagResource

• **TagResource** = ``"athena:TagResource"``

Grants permission to add a tag to a resource

See https://docs.aws.amazon.com/athena/latest/APIReference/API_TagResource.html

#### Defined in

actions/athena.ts:459

___

### TerminateSession

• **TerminateSession** = ``"athena:TerminateSession"``

Grants permission to terminate a session

See https://docs.aws.amazon.com/athena/latest/APIReference/API_TerminateSession.html

#### Defined in

actions/athena.ts:465

___

### UntagResource

• **UntagResource** = ``"athena:UntagResource"``

Grants permission to remove a tag from a resource

See https://docs.aws.amazon.com/athena/latest/APIReference/API_UntagResource.html

#### Defined in

actions/athena.ts:471

___

### UpdateCapacityReservation

• **UpdateCapacityReservation** = ``"athena:UpdateCapacityReservation"``

Grants permission to update a capacity reservation

See https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateCapacityReservation.html

#### Defined in

actions/athena.ts:477

___

### UpdateDataCatalog

• **UpdateDataCatalog** = ``"athena:UpdateDataCatalog"``

Grants permission to update a datacatalog

See https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateDataCatalog.html

#### Defined in

actions/athena.ts:483

___

### UpdateNamedQuery

• **UpdateNamedQuery** = ``"athena:UpdateNamedQuery"``

Grants permission to update a named query specified

See https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateNamedQuery.html

#### Defined in

actions/athena.ts:489

___

### UpdateNotebook

• **UpdateNotebook** = ``"athena:UpdateNotebook"``

Grants permission to update a notebook

See https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateNotebook.html

#### Defined in

actions/athena.ts:495

___

### UpdateNotebookMetadata

• **UpdateNotebookMetadata** = ``"athena:UpdateNotebookMetadata"``

Grants permission to update notebook metadata

See https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateNotebookMetadata.html

#### Defined in

actions/athena.ts:501

___

### UpdatePreparedStatement

• **UpdatePreparedStatement** = ``"athena:UpdatePreparedStatement"``

Grants permission to update a prepared statement

See https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdatePreparedStatement.html

#### Defined in

actions/athena.ts:507

___

### UpdateWorkGroup

• **UpdateWorkGroup** = ``"athena:UpdateWorkGroup"``

Grants permission to update a workgroup

See https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateWorkGroup.html

#### Defined in

actions/athena.ts:513
