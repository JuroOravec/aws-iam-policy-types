[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsLakeformationActions

# Enumeration: AwsLakeformationActions

All IAM policy actions for AWS Lake Formation (LAKEFORMATION)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslakeformation.html

2024-02-12T09:58:01.731Z

## Table of contents

### Enumeration Members

- [AddLFTagsToResource](AwsLakeformationActions.md#addlftagstoresource)
- [BatchGrantPermissions](AwsLakeformationActions.md#batchgrantpermissions)
- [BatchRevokePermissions](AwsLakeformationActions.md#batchrevokepermissions)
- [CancelTransaction](AwsLakeformationActions.md#canceltransaction)
- [CommitTransaction](AwsLakeformationActions.md#committransaction)
- [CreateDataCellsFilter](AwsLakeformationActions.md#createdatacellsfilter)
- [CreateLFTag](AwsLakeformationActions.md#createlftag)
- [CreateLakeFormationIdentityCenterConfiguration](AwsLakeformationActions.md#createlakeformationidentitycenterconfiguration)
- [CreateLakeFormationOptIn](AwsLakeformationActions.md#createlakeformationoptin)
- [DeleteDataCellsFilter](AwsLakeformationActions.md#deletedatacellsfilter)
- [DeleteLFTag](AwsLakeformationActions.md#deletelftag)
- [DeleteLakeFormationIdentityCenterConfiguration](AwsLakeformationActions.md#deletelakeformationidentitycenterconfiguration)
- [DeleteLakeFormationOptIn](AwsLakeformationActions.md#deletelakeformationoptin)
- [DeleteObjectsOnCancel](AwsLakeformationActions.md#deleteobjectsoncancel)
- [DeregisterResource](AwsLakeformationActions.md#deregisterresource)
- [DescribeLakeFormationIdentityCenterConfiguration](AwsLakeformationActions.md#describelakeformationidentitycenterconfiguration)
- [DescribeResource](AwsLakeformationActions.md#describeresource)
- [DescribeTransaction](AwsLakeformationActions.md#describetransaction)
- [ExtendTransaction](AwsLakeformationActions.md#extendtransaction)
- [GetDataAccess](AwsLakeformationActions.md#getdataaccess)
- [GetDataCellsFilter](AwsLakeformationActions.md#getdatacellsfilter)
- [GetDataLakeSettings](AwsLakeformationActions.md#getdatalakesettings)
- [GetEffectivePermissionsForPath](AwsLakeformationActions.md#geteffectivepermissionsforpath)
- [GetLFTag](AwsLakeformationActions.md#getlftag)
- [GetQueryState](AwsLakeformationActions.md#getquerystate)
- [GetQueryStatistics](AwsLakeformationActions.md#getquerystatistics)
- [GetResourceLFTags](AwsLakeformationActions.md#getresourcelftags)
- [GetTableObjects](AwsLakeformationActions.md#gettableobjects)
- [GetWorkUnitResults](AwsLakeformationActions.md#getworkunitresults)
- [GetWorkUnits](AwsLakeformationActions.md#getworkunits)
- [GrantPermissions](AwsLakeformationActions.md#grantpermissions)
- [ListDataCellsFilter](AwsLakeformationActions.md#listdatacellsfilter)
- [ListLFTags](AwsLakeformationActions.md#listlftags)
- [ListLakeFormationOptIns](AwsLakeformationActions.md#listlakeformationoptins)
- [ListPermissions](AwsLakeformationActions.md#listpermissions)
- [ListResources](AwsLakeformationActions.md#listresources)
- [ListTableStorageOptimizers](AwsLakeformationActions.md#listtablestorageoptimizers)
- [ListTransactions](AwsLakeformationActions.md#listtransactions)
- [PutDataLakeSettings](AwsLakeformationActions.md#putdatalakesettings)
- [RegisterResource](AwsLakeformationActions.md#registerresource)
- [RemoveLFTagsFromResource](AwsLakeformationActions.md#removelftagsfromresource)
- [RevokePermissions](AwsLakeformationActions.md#revokepermissions)
- [SearchDatabasesByLFTags](AwsLakeformationActions.md#searchdatabasesbylftags)
- [SearchTablesByLFTags](AwsLakeformationActions.md#searchtablesbylftags)
- [StartQueryPlanning](AwsLakeformationActions.md#startqueryplanning)
- [StartTransaction](AwsLakeformationActions.md#starttransaction)
- [UpdateDataCellsFilter](AwsLakeformationActions.md#updatedatacellsfilter)
- [UpdateLFTag](AwsLakeformationActions.md#updatelftag)
- [UpdateLakeFormationIdentityCenterConfiguration](AwsLakeformationActions.md#updatelakeformationidentitycenterconfiguration)
- [UpdateResource](AwsLakeformationActions.md#updateresource)
- [UpdateTableObjects](AwsLakeformationActions.md#updatetableobjects)
- [UpdateTableStorageOptimizer](AwsLakeformationActions.md#updatetablestorageoptimizer)

## Enumeration Members

### AddLFTagsToResource

• **AddLFTagsToResource** = ``"lakeformation:AddLFTagsToResource"``

Grants permission to attach Lake Formation tags to catalog resources

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-AddLFTagsToResource

#### Defined in

actions/lakeformation.ts:17

___

### BatchGrantPermissions

• **BatchGrantPermissions** = ``"lakeformation:BatchGrantPermissions"``

Grants permission to data lake permissions to one or more principals in a batch

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-BatchGrantPermissions

#### Defined in

actions/lakeformation.ts:23

___

### BatchRevokePermissions

• **BatchRevokePermissions** = ``"lakeformation:BatchRevokePermissions"``

Grants permission to revoke data lake permissions from one or more principals i
n a batch

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-BatchRevokePermissions

#### Defined in

actions/lakeformation.ts:30

___

### CancelTransaction

• **CancelTransaction** = ``"lakeformation:CancelTransaction"``

Grants permission to cancel the given transaction

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-CancelTransaction

#### Defined in

actions/lakeformation.ts:36

___

### CommitTransaction

• **CommitTransaction** = ``"lakeformation:CommitTransaction"``

Grants permission to commit the given transaction

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-CommitTransaction

#### Defined in

actions/lakeformation.ts:42

___

### CreateDataCellsFilter

• **CreateDataCellsFilter** = ``"lakeformation:CreateDataCellsFilter"``

Grants permission to create a Lake Formation data cell filter

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-CreateDataCellsFilter

#### Defined in

actions/lakeformation.ts:48

___

### CreateLFTag

• **CreateLFTag** = ``"lakeformation:CreateLFTag"``

Grants permission to create a Lake Formation tag

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-CreateLFTag

#### Defined in

actions/lakeformation.ts:54

___

### CreateLakeFormationIdentityCenterConfiguration

• **CreateLakeFormationIdentityCenterConfiguration** = ``"lakeformation:CreateLakeFormationIdentityCenterConfiguration"``

Grants permission to create an IAM Identity Center connection with Lake Formati
on to allow IAM Identity Center users and groups to access Data Catalog resourc
es

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-Identity-center-integ.html#API_CreateLakeFormationIdentityCenterConfiguration.html

#### Defined in

actions/lakeformation.ts:62

___

### CreateLakeFormationOptIn

• **CreateLakeFormationOptIn** = ``"lakeformation:CreateLakeFormationOptIn"``

Enforce Lake Formation permissions for the given databases, tables, and princip
als

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-hybrid-access-mode.html#API_CreateLakeFormationOptIn.html

#### Defined in

actions/lakeformation.ts:69

___

### DeleteDataCellsFilter

• **DeleteDataCellsFilter** = ``"lakeformation:DeleteDataCellsFilter"``

Grants permission to delete a Lake Formation data cell filter

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-DeleteDataCellsFilter

#### Defined in

actions/lakeformation.ts:75

___

### DeleteLFTag

• **DeleteLFTag** = ``"lakeformation:DeleteLFTag"``

Grants permission to delete a Lake Formation tag

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-DeleteLFTag

#### Defined in

actions/lakeformation.ts:81

___

### DeleteLakeFormationIdentityCenterConfiguration

• **DeleteLakeFormationIdentityCenterConfiguration** = ``"lakeformation:DeleteLakeFormationIdentityCenterConfiguration"``

Grants permission to delete an IAM Identity Center connection with Lake Formati
on

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-Identity-center-integ.html#API_DeleteLakeFormationIdentityCenterConfiguration.html

#### Defined in

actions/lakeformation.ts:88

___

### DeleteLakeFormationOptIn

• **DeleteLakeFormationOptIn** = ``"lakeformation:DeleteLakeFormationOptIn"``

Remove the Lake Formation permissions enforcement of the given databases, table
s, and principals

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-hybrid-access-mode.html#API_DeleteLakeFormationOptIn.html

#### Defined in

actions/lakeformation.ts:95

___

### DeleteObjectsOnCancel

• **DeleteObjectsOnCancel** = ``"lakeformation:DeleteObjectsOnCancel"``

Grants permission to delete the specified objects if the transaction is cancele
d

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-DeleteObjectsOnCancel

#### Defined in

actions/lakeformation.ts:102

___

### DeregisterResource

• **DeregisterResource** = ``"lakeformation:DeregisterResource"``

Grants permission to deregister a registered location

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-DeregisterResource

#### Defined in

actions/lakeformation.ts:108

___

### DescribeLakeFormationIdentityCenterConfiguration

• **DescribeLakeFormationIdentityCenterConfiguration** = ``"lakeformation:DescribeLakeFormationIdentityCenterConfiguration"``

Grants permission to describe the IAM Identity Center connection with Lake Form
ation

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-Identity-center-integ.html#API_DescribeLakeFormationIdentityCenterConfiguration.html

#### Defined in

actions/lakeformation.ts:115

___

### DescribeResource

• **DescribeResource** = ``"lakeformation:DescribeResource"``

Grants permission to describe a registered location

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-DescribeResource

#### Defined in

actions/lakeformation.ts:121

___

### DescribeTransaction

• **DescribeTransaction** = ``"lakeformation:DescribeTransaction"``

Grants permission to get status of the given transaction

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-DescribeTransaction

#### Defined in

actions/lakeformation.ts:127

___

### ExtendTransaction

• **ExtendTransaction** = ``"lakeformation:ExtendTransaction"``

Grants permission to extend the timeout of the given transaction

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-ExtendTransaction

#### Defined in

actions/lakeformation.ts:133

___

### GetDataAccess

• **GetDataAccess** = ``"lakeformation:GetDataAccess"``

Grants permission to virtual data lake access

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetDataAccess

#### Defined in

actions/lakeformation.ts:139

___

### GetDataCellsFilter

• **GetDataCellsFilter** = ``"lakeformation:GetDataCellsFilter"``

Grants permission to retrieve a Lake Formation data cell filter

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-GetDataCellsFilter

#### Defined in

actions/lakeformation.ts:145

___

### GetDataLakeSettings

• **GetDataLakeSettings** = ``"lakeformation:GetDataLakeSettings"``

Grants permission to retrieve data lake settings such as the list of data lake
administrators and database and table default permissions

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetDataLakeSettings

#### Defined in

actions/lakeformation.ts:152

___

### GetEffectivePermissionsForPath

• **GetEffectivePermissionsForPath** = ``"lakeformation:GetEffectivePermissionsForPath"``

Grants permission to retrieve permissions attached to resources in the given pa
th

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetEffectivePermissionsForPath

#### Defined in

actions/lakeformation.ts:159

___

### GetLFTag

• **GetLFTag** = ``"lakeformation:GetLFTag"``

Grants permission to retrieve a Lake Formation tag

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetLFTag

#### Defined in

actions/lakeformation.ts:165

___

### GetQueryState

• **GetQueryState** = ``"lakeformation:GetQueryState"``

Grants permission to retrieve the state of the given query

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetQueryState

#### Defined in

actions/lakeformation.ts:171

___

### GetQueryStatistics

• **GetQueryStatistics** = ``"lakeformation:GetQueryStatistics"``

Grants permission to retrieve the statistics for the given query

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetQueryStatistics

#### Defined in

actions/lakeformation.ts:177

___

### GetResourceLFTags

• **GetResourceLFTags** = ``"lakeformation:GetResourceLFTags"``

Grants permission to retrieve lakeformation tags on a catalog resource

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetResourceLFTags

#### Defined in

actions/lakeformation.ts:183

___

### GetTableObjects

• **GetTableObjects** = ``"lakeformation:GetTableObjects"``

Grants permission to retrieve objects from a table

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-objects.html#aws-lake-formation-api-objects-GetTableObjects

#### Defined in

actions/lakeformation.ts:189

___

### GetWorkUnitResults

• **GetWorkUnitResults** = ``"lakeformation:GetWorkUnitResults"``

Grants permission to retrieve the results for the given work units

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetWorkUnitResults

#### Defined in

actions/lakeformation.ts:195

___

### GetWorkUnits

• **GetWorkUnits** = ``"lakeformation:GetWorkUnits"``

Grants permission to retrieve the work units for the given query

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetWorkUnits

#### Defined in

actions/lakeformation.ts:201

___

### GrantPermissions

• **GrantPermissions** = ``"lakeformation:GrantPermissions"``

Grants permission to data lake permissions to a principal

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GrantPermissions

#### Defined in

actions/lakeformation.ts:207

___

### ListDataCellsFilter

• **ListDataCellsFilter** = ``"lakeformation:ListDataCellsFilter"``

Grants permission to list cell filters

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-ListDataCellsFilter

#### Defined in

actions/lakeformation.ts:213

___

### ListLFTags

• **ListLFTags** = ``"lakeformation:ListLFTags"``

Grants permission to list Lake Formation tags

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-ListLFTags

#### Defined in

actions/lakeformation.ts:219

___

### ListLakeFormationOptIns

• **ListLakeFormationOptIns** = ``"lakeformation:ListLakeFormationOptIns"``

Retrieve the current list of resources and principals that are opt in to enforc
e Lake Formation permissions

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-hybrid-access-mode.html#API_ListLakeFormationOptIns.html

#### Defined in

actions/lakeformation.ts:226

___

### ListPermissions

• **ListPermissions** = ``"lakeformation:ListPermissions"``

Grants permission to list permissions filtered by principal or resource

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-ListPermissions

#### Defined in

actions/lakeformation.ts:232

___

### ListResources

• **ListResources** = ``"lakeformation:ListResources"``

Grants permission to List registered locations

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-ListResources

#### Defined in

actions/lakeformation.ts:238

___

### ListTableStorageOptimizers

• **ListTableStorageOptimizers** = ``"lakeformation:ListTableStorageOptimizers"``

Grants permission to list all the storage optimizers for the Governed table

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-optimizers.html#aws-lake-formation-api-optimizers-ListTableStorageOptimizers

#### Defined in

actions/lakeformation.ts:244

___

### ListTransactions

• **ListTransactions** = ``"lakeformation:ListTransactions"``

Grants permission to list all transactions in the system

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-ListTransactions

#### Defined in

actions/lakeformation.ts:250

___

### PutDataLakeSettings

• **PutDataLakeSettings** = ``"lakeformation:PutDataLakeSettings"``

Grants permission to overwrite data lake settings such as the list of data lake
administrators and database and table default permissions

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-PutDataLakeSettings

#### Defined in

actions/lakeformation.ts:257

___

### RegisterResource

• **RegisterResource** = ``"lakeformation:RegisterResource"``

Grants permission to register a new location to be managed by Lake Formation

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-RegisterResource

#### Defined in

actions/lakeformation.ts:263

___

### RemoveLFTagsFromResource

• **RemoveLFTagsFromResource** = ``"lakeformation:RemoveLFTagsFromResource"``

Grants permission to remove lakeformation tags from catalog resources

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-RemoveLFTagsFromResource

#### Defined in

actions/lakeformation.ts:269

___

### RevokePermissions

• **RevokePermissions** = ``"lakeformation:RevokePermissions"``

Grants permission to revoke data lake permissions from a principal

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-RevokePermissions

#### Defined in

actions/lakeformation.ts:275

___

### SearchDatabasesByLFTags

• **SearchDatabasesByLFTags** = ``"lakeformation:SearchDatabasesByLFTags"``

Grants permission to list catalog databases with Lake Formation tags

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-SearchDatabasesByLFTags

#### Defined in

actions/lakeformation.ts:281

___

### SearchTablesByLFTags

• **SearchTablesByLFTags** = ``"lakeformation:SearchTablesByLFTags"``

Grants permission to list catalog tables with Lake Formation tags

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-SearchTablesByLFTags

#### Defined in

actions/lakeformation.ts:287

___

### StartQueryPlanning

• **StartQueryPlanning** = ``"lakeformation:StartQueryPlanning"``

Grants permission to initiate the planning of the given query

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-StartQueryPlanning

#### Defined in

actions/lakeformation.ts:293

___

### StartTransaction

• **StartTransaction** = ``"lakeformation:StartTransaction"``

Grants permission to start a new transaction

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-StartTransaction

#### Defined in

actions/lakeformation.ts:299

___

### UpdateDataCellsFilter

• **UpdateDataCellsFilter** = ``"lakeformation:UpdateDataCellsFilter"``

Grants permission to update a Lake Formation data cell filter

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-UpdateDataCellsFilter

#### Defined in

actions/lakeformation.ts:305

___

### UpdateLFTag

• **UpdateLFTag** = ``"lakeformation:UpdateLFTag"``

Grants permission to update a Lake Formation tag

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-UpdateLFTag

#### Defined in

actions/lakeformation.ts:311

___

### UpdateLakeFormationIdentityCenterConfiguration

• **UpdateLakeFormationIdentityCenterConfiguration** = ``"lakeformation:UpdateLakeFormationIdentityCenterConfiguration"``

Grants permission to update the IAM Identity Center connection parameters

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-Identity-center-integ.html#API_UpdateLakeFormationIdentityCenterConfiguration.html

#### Defined in

actions/lakeformation.ts:317

___

### UpdateResource

• **UpdateResource** = ``"lakeformation:UpdateResource"``

Grants permission to update a registered location

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-UpdateResource

#### Defined in

actions/lakeformation.ts:323

___

### UpdateTableObjects

• **UpdateTableObjects** = ``"lakeformation:UpdateTableObjects"``

Grants permission to add or delete the specified objects to or from a table

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-objects.html#aws-lake-formation-api-objects-UpdateTableObjects

#### Defined in

actions/lakeformation.ts:329

___

### UpdateTableStorageOptimizer

• **UpdateTableStorageOptimizer** = ``"lakeformation:UpdateTableStorageOptimizer"``

Grants permission to update the configuration of the storage optimizer for the
Governed table

See https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-optimizers.html#aws-lake-formation-api-optimizers-UpdateTableStorageOptimizer

#### Defined in

actions/lakeformation.ts:336
