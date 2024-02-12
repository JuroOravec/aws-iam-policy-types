[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIotsitewiseActions

# Enumeration: AwsIotsitewiseActions

All IAM policy actions for AWS IoT SiteWise (IOTSITEWISE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotsitewise.html

2024-02-12T09:57:53.101Z

## Table of contents

### Enumeration Members

- [AssociateAssets](AwsIotsitewiseActions.md#associateassets)
- [AssociateTimeSeriesToAssetProperty](AwsIotsitewiseActions.md#associatetimeseriestoassetproperty)
- [BatchAssociateProjectAssets](AwsIotsitewiseActions.md#batchassociateprojectassets)
- [BatchDisassociateProjectAssets](AwsIotsitewiseActions.md#batchdisassociateprojectassets)
- [BatchGetAssetPropertyAggregates](AwsIotsitewiseActions.md#batchgetassetpropertyaggregates)
- [BatchGetAssetPropertyValue](AwsIotsitewiseActions.md#batchgetassetpropertyvalue)
- [BatchGetAssetPropertyValueHistory](AwsIotsitewiseActions.md#batchgetassetpropertyvaluehistory)
- [BatchPutAssetPropertyValue](AwsIotsitewiseActions.md#batchputassetpropertyvalue)
- [CreateAccessPolicy](AwsIotsitewiseActions.md#createaccesspolicy)
- [CreateAsset](AwsIotsitewiseActions.md#createasset)
- [CreateAssetModel](AwsIotsitewiseActions.md#createassetmodel)
- [CreateAssetModelCompositeModel](AwsIotsitewiseActions.md#createassetmodelcompositemodel)
- [CreateBulkImportJob](AwsIotsitewiseActions.md#createbulkimportjob)
- [CreateDashboard](AwsIotsitewiseActions.md#createdashboard)
- [CreateGateway](AwsIotsitewiseActions.md#creategateway)
- [CreatePortal](AwsIotsitewiseActions.md#createportal)
- [CreateProject](AwsIotsitewiseActions.md#createproject)
- [DeleteAccessPolicy](AwsIotsitewiseActions.md#deleteaccesspolicy)
- [DeleteAsset](AwsIotsitewiseActions.md#deleteasset)
- [DeleteAssetModel](AwsIotsitewiseActions.md#deleteassetmodel)
- [DeleteAssetModelCompositeModel](AwsIotsitewiseActions.md#deleteassetmodelcompositemodel)
- [DeleteDashboard](AwsIotsitewiseActions.md#deletedashboard)
- [DeleteGateway](AwsIotsitewiseActions.md#deletegateway)
- [DeletePortal](AwsIotsitewiseActions.md#deleteportal)
- [DeleteProject](AwsIotsitewiseActions.md#deleteproject)
- [DeleteTimeSeries](AwsIotsitewiseActions.md#deletetimeseries)
- [DescribeAccessPolicy](AwsIotsitewiseActions.md#describeaccesspolicy)
- [DescribeAction](AwsIotsitewiseActions.md#describeaction)
- [DescribeAsset](AwsIotsitewiseActions.md#describeasset)
- [DescribeAssetCompositeModel](AwsIotsitewiseActions.md#describeassetcompositemodel)
- [DescribeAssetModel](AwsIotsitewiseActions.md#describeassetmodel)
- [DescribeAssetModelCompositeModel](AwsIotsitewiseActions.md#describeassetmodelcompositemodel)
- [DescribeAssetProperty](AwsIotsitewiseActions.md#describeassetproperty)
- [DescribeBulkImportJob](AwsIotsitewiseActions.md#describebulkimportjob)
- [DescribeDashboard](AwsIotsitewiseActions.md#describedashboard)
- [DescribeDefaultEncryptionConfiguration](AwsIotsitewiseActions.md#describedefaultencryptionconfiguration)
- [DescribeGateway](AwsIotsitewiseActions.md#describegateway)
- [DescribeGatewayCapabilityConfiguration](AwsIotsitewiseActions.md#describegatewaycapabilityconfiguration)
- [DescribeLoggingOptions](AwsIotsitewiseActions.md#describeloggingoptions)
- [DescribePortal](AwsIotsitewiseActions.md#describeportal)
- [DescribeProject](AwsIotsitewiseActions.md#describeproject)
- [DescribeStorageConfiguration](AwsIotsitewiseActions.md#describestorageconfiguration)
- [DescribeTimeSeries](AwsIotsitewiseActions.md#describetimeseries)
- [DisassociateAssets](AwsIotsitewiseActions.md#disassociateassets)
- [DisassociateTimeSeriesFromAssetProperty](AwsIotsitewiseActions.md#disassociatetimeseriesfromassetproperty)
- [EnableSiteWiseIntegration](AwsIotsitewiseActions.md#enablesitewiseintegration)
- [ExecuteAction](AwsIotsitewiseActions.md#executeaction)
- [ExecuteQuery](AwsIotsitewiseActions.md#executequery)
- [GetAssetPropertyAggregates](AwsIotsitewiseActions.md#getassetpropertyaggregates)
- [GetAssetPropertyValue](AwsIotsitewiseActions.md#getassetpropertyvalue)
- [GetAssetPropertyValueHistory](AwsIotsitewiseActions.md#getassetpropertyvaluehistory)
- [GetInterpolatedAssetPropertyValues](AwsIotsitewiseActions.md#getinterpolatedassetpropertyvalues)
- [ListAccessPolicies](AwsIotsitewiseActions.md#listaccesspolicies)
- [ListActions](AwsIotsitewiseActions.md#listactions)
- [ListAssetModelCompositeModels](AwsIotsitewiseActions.md#listassetmodelcompositemodels)
- [ListAssetModelProperties](AwsIotsitewiseActions.md#listassetmodelproperties)
- [ListAssetModels](AwsIotsitewiseActions.md#listassetmodels)
- [ListAssetProperties](AwsIotsitewiseActions.md#listassetproperties)
- [ListAssetRelationships](AwsIotsitewiseActions.md#listassetrelationships)
- [ListAssets](AwsIotsitewiseActions.md#listassets)
- [ListAssociatedAssets](AwsIotsitewiseActions.md#listassociatedassets)
- [ListBulkImportJobs](AwsIotsitewiseActions.md#listbulkimportjobs)
- [ListCompositionRelationships](AwsIotsitewiseActions.md#listcompositionrelationships)
- [ListDashboards](AwsIotsitewiseActions.md#listdashboards)
- [ListGateways](AwsIotsitewiseActions.md#listgateways)
- [ListPortals](AwsIotsitewiseActions.md#listportals)
- [ListProjectAssets](AwsIotsitewiseActions.md#listprojectassets)
- [ListProjects](AwsIotsitewiseActions.md#listprojects)
- [ListTagsForResource](AwsIotsitewiseActions.md#listtagsforresource)
- [ListTimeSeries](AwsIotsitewiseActions.md#listtimeseries)
- [PutDefaultEncryptionConfiguration](AwsIotsitewiseActions.md#putdefaultencryptionconfiguration)
- [PutLoggingOptions](AwsIotsitewiseActions.md#putloggingoptions)
- [PutStorageConfiguration](AwsIotsitewiseActions.md#putstorageconfiguration)
- [TagResource](AwsIotsitewiseActions.md#tagresource)
- [UntagResource](AwsIotsitewiseActions.md#untagresource)
- [UpdateAccessPolicy](AwsIotsitewiseActions.md#updateaccesspolicy)
- [UpdateAsset](AwsIotsitewiseActions.md#updateasset)
- [UpdateAssetModel](AwsIotsitewiseActions.md#updateassetmodel)
- [UpdateAssetModelCompositeModel](AwsIotsitewiseActions.md#updateassetmodelcompositemodel)
- [UpdateAssetModelPropertyRouting](AwsIotsitewiseActions.md#updateassetmodelpropertyrouting)
- [UpdateAssetProperty](AwsIotsitewiseActions.md#updateassetproperty)
- [UpdateDashboard](AwsIotsitewiseActions.md#updatedashboard)
- [UpdateGateway](AwsIotsitewiseActions.md#updategateway)
- [UpdateGatewayCapabilityConfiguration](AwsIotsitewiseActions.md#updategatewaycapabilityconfiguration)
- [UpdatePortal](AwsIotsitewiseActions.md#updateportal)
- [UpdateProject](AwsIotsitewiseActions.md#updateproject)

## Enumeration Members

### AssociateAssets

• **AssociateAssets** = ``"iotsitewise:AssociateAssets"``

Grants permission to associate a child asset with a parent asset through a hier
archy

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssociateAssets.html

#### Defined in

actions/iotsitewise.ts:18

___

### AssociateTimeSeriesToAssetProperty

• **AssociateTimeSeriesToAssetProperty** = ``"iotsitewise:AssociateTimeSeriesToAssetProperty"``

Grants permission to associate a time series with an asset property

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssociateTimeSeriesToAssetProperty.html

#### Defined in

actions/iotsitewise.ts:24

___

### BatchAssociateProjectAssets

• **BatchAssociateProjectAssets** = ``"iotsitewise:BatchAssociateProjectAssets"``

Grants permission to associate assets to a project

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchAssociateProjectAssets.html

#### Defined in

actions/iotsitewise.ts:30

___

### BatchDisassociateProjectAssets

• **BatchDisassociateProjectAssets** = ``"iotsitewise:BatchDisassociateProjectAssets"``

Grants permission to disassociate assets from a project

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchDisassociateProjectAssets.html

#### Defined in

actions/iotsitewise.ts:36

___

### BatchGetAssetPropertyAggregates

• **BatchGetAssetPropertyAggregates** = ``"iotsitewise:BatchGetAssetPropertyAggregates"``

Grants permission to retrieve computed aggregates for multiple asset properties

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html

#### Defined in

actions/iotsitewise.ts:42

___

### BatchGetAssetPropertyValue

• **BatchGetAssetPropertyValue** = ``"iotsitewise:BatchGetAssetPropertyValue"``

Grants permission to retrieve the latest value for multiple asset properties

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html

#### Defined in

actions/iotsitewise.ts:48

___

### BatchGetAssetPropertyValueHistory

• **BatchGetAssetPropertyValueHistory** = ``"iotsitewise:BatchGetAssetPropertyValueHistory"``

Grants permission to retrieve the value history for multiple asset properties

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValueHistory.html

#### Defined in

actions/iotsitewise.ts:54

___

### BatchPutAssetPropertyValue

• **BatchPutAssetPropertyValue** = ``"iotsitewise:BatchPutAssetPropertyValue"``

Grants permission to put property values for asset properties

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html

#### Defined in

actions/iotsitewise.ts:60

___

### CreateAccessPolicy

• **CreateAccessPolicy** = ``"iotsitewise:CreateAccessPolicy"``

Grants permission to create an access policy for a portal or a project

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html

#### Defined in

actions/iotsitewise.ts:66

___

### CreateAsset

• **CreateAsset** = ``"iotsitewise:CreateAsset"``

Grants permission to create an asset from an asset model

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html

#### Defined in

actions/iotsitewise.ts:72

___

### CreateAssetModel

• **CreateAssetModel** = ``"iotsitewise:CreateAssetModel"``

Grants permission to create an asset model

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html

#### Defined in

actions/iotsitewise.ts:78

___

### CreateAssetModelCompositeModel

• **CreateAssetModelCompositeModel** = ``"iotsitewise:CreateAssetModelCompositeModel"``

Grants permission to create an asset model composite model inside an asset mode
l

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html

#### Defined in

actions/iotsitewise.ts:85

___

### CreateBulkImportJob

• **CreateBulkImportJob** = ``"iotsitewise:CreateBulkImportJob"``

Grants permission to create bulk import job

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateBulkImportJob.html

#### Defined in

actions/iotsitewise.ts:91

___

### CreateDashboard

• **CreateDashboard** = ``"iotsitewise:CreateDashboard"``

Grants permission to create a dashboard in a project

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html

#### Defined in

actions/iotsitewise.ts:97

___

### CreateGateway

• **CreateGateway** = ``"iotsitewise:CreateGateway"``

Grants permission to create a gateway

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html

#### Defined in

actions/iotsitewise.ts:103

___

### CreatePortal

• **CreatePortal** = ``"iotsitewise:CreatePortal"``

Grants permission to create a portal

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html

#### Defined in

actions/iotsitewise.ts:109

___

### CreateProject

• **CreateProject** = ``"iotsitewise:CreateProject"``

Grants permission to create a project in a portal

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html

#### Defined in

actions/iotsitewise.ts:115

___

### DeleteAccessPolicy

• **DeleteAccessPolicy** = ``"iotsitewise:DeleteAccessPolicy"``

Grants permission to delete an access policy

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAccessPolicy.html

#### Defined in

actions/iotsitewise.ts:121

___

### DeleteAsset

• **DeleteAsset** = ``"iotsitewise:DeleteAsset"``

Grants permission to delete an asset

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAsset.html

#### Defined in

actions/iotsitewise.ts:127

___

### DeleteAssetModel

• **DeleteAssetModel** = ``"iotsitewise:DeleteAssetModel"``

Grants permission to delete an asset model

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAssetModel.html

#### Defined in

actions/iotsitewise.ts:133

___

### DeleteAssetModelCompositeModel

• **DeleteAssetModelCompositeModel** = ``"iotsitewise:DeleteAssetModelCompositeModel"``

Grants permission to delete an asset model composite model

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAssetModelCompositeModel.html

#### Defined in

actions/iotsitewise.ts:139

___

### DeleteDashboard

• **DeleteDashboard** = ``"iotsitewise:DeleteDashboard"``

Grants permission to delete a dashboard

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteDashboard.html

#### Defined in

actions/iotsitewise.ts:145

___

### DeleteGateway

• **DeleteGateway** = ``"iotsitewise:DeleteGateway"``

Grants permission to delete a gateway

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteGateway.html

#### Defined in

actions/iotsitewise.ts:151

___

### DeletePortal

• **DeletePortal** = ``"iotsitewise:DeletePortal"``

Grants permission to delete a portal

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeletePortal.html

#### Defined in

actions/iotsitewise.ts:157

___

### DeleteProject

• **DeleteProject** = ``"iotsitewise:DeleteProject"``

Grants permission to delete a project

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteProject.html

#### Defined in

actions/iotsitewise.ts:163

___

### DeleteTimeSeries

• **DeleteTimeSeries** = ``"iotsitewise:DeleteTimeSeries"``

Grants permission to delete a time series

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteTimeSeries.html

#### Defined in

actions/iotsitewise.ts:169

___

### DescribeAccessPolicy

• **DescribeAccessPolicy** = ``"iotsitewise:DescribeAccessPolicy"``

Grants permission to describe an access policy

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAccessPolicy.html

#### Defined in

actions/iotsitewise.ts:175

___

### DescribeAction

• **DescribeAction** = ``"iotsitewise:DescribeAction"``

Grants permission to describe actions

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAction.html

#### Defined in

actions/iotsitewise.ts:181

___

### DescribeAsset

• **DescribeAsset** = ``"iotsitewise:DescribeAsset"``

Grants permission to describe an asset

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html

#### Defined in

actions/iotsitewise.ts:187

___

### DescribeAssetCompositeModel

• **DescribeAssetCompositeModel** = ``"iotsitewise:DescribeAssetCompositeModel"``

Grants permission to describe an asset composite model

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetCompositeModel.html

#### Defined in

actions/iotsitewise.ts:193

___

### DescribeAssetModel

• **DescribeAssetModel** = ``"iotsitewise:DescribeAssetModel"``

Grants permission to describe an asset model

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html

#### Defined in

actions/iotsitewise.ts:199

___

### DescribeAssetModelCompositeModel

• **DescribeAssetModelCompositeModel** = ``"iotsitewise:DescribeAssetModelCompositeModel"``

Grants permission to describe an asset model composite model

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModelCompositeModel.html

#### Defined in

actions/iotsitewise.ts:205

___

### DescribeAssetProperty

• **DescribeAssetProperty** = ``"iotsitewise:DescribeAssetProperty"``

Grants permission to describe an asset property

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html

#### Defined in

actions/iotsitewise.ts:211

___

### DescribeBulkImportJob

• **DescribeBulkImportJob** = ``"iotsitewise:DescribeBulkImportJob"``

Grants permission to describe bulk import job

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeBulkImportJob.html

#### Defined in

actions/iotsitewise.ts:217

___

### DescribeDashboard

• **DescribeDashboard** = ``"iotsitewise:DescribeDashboard"``

Grants permission to describe a dashboard

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeDashboard.html

#### Defined in

actions/iotsitewise.ts:223

___

### DescribeDefaultEncryptionConfiguration

• **DescribeDefaultEncryptionConfiguration** = ``"iotsitewise:DescribeDefaultEncryptionConfiguration"``

Grants permission to describe the default encryption configuration for the AWS
account

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeDefaultEncryptionConfiguration.html

#### Defined in

actions/iotsitewise.ts:230

___

### DescribeGateway

• **DescribeGateway** = ``"iotsitewise:DescribeGateway"``

Grants permission to describe a gateway

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html

#### Defined in

actions/iotsitewise.ts:236

___

### DescribeGatewayCapabilityConfiguration

• **DescribeGatewayCapabilityConfiguration** = ``"iotsitewise:DescribeGatewayCapabilityConfiguration"``

Grants permission to describe a capability configuration for a gateway

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html

#### Defined in

actions/iotsitewise.ts:242

___

### DescribeLoggingOptions

• **DescribeLoggingOptions** = ``"iotsitewise:DescribeLoggingOptions"``

Grants permission to describe logging options for the AWS account

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeLoggingOptions.html

#### Defined in

actions/iotsitewise.ts:248

___

### DescribePortal

• **DescribePortal** = ``"iotsitewise:DescribePortal"``

Grants permission to describe a portal

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribePortal.html

#### Defined in

actions/iotsitewise.ts:254

___

### DescribeProject

• **DescribeProject** = ``"iotsitewise:DescribeProject"``

Grants permission to describe a project

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeProject.html

#### Defined in

actions/iotsitewise.ts:260

___

### DescribeStorageConfiguration

• **DescribeStorageConfiguration** = ``"iotsitewise:DescribeStorageConfiguration"``

Grants permission to describe the storage configuration for the AWS account

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeStorageConfiguration.html

#### Defined in

actions/iotsitewise.ts:266

___

### DescribeTimeSeries

• **DescribeTimeSeries** = ``"iotsitewise:DescribeTimeSeries"``

Grants permission to describe a time series

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeTimeSeries.html

#### Defined in

actions/iotsitewise.ts:272

___

### DisassociateAssets

• **DisassociateAssets** = ``"iotsitewise:DisassociateAssets"``

Grants permission to disassociate a child asset from a parent asset by a hierar
chy

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html

#### Defined in

actions/iotsitewise.ts:279

___

### DisassociateTimeSeriesFromAssetProperty

• **DisassociateTimeSeriesFromAssetProperty** = ``"iotsitewise:DisassociateTimeSeriesFromAssetProperty"``

Grants permission to disassociate a time series from an asset property

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateTimeSeriesFromAssetProperty.html

#### Defined in

actions/iotsitewise.ts:285

___

### EnableSiteWiseIntegration

• **EnableSiteWiseIntegration** = ``"iotsitewise:EnableSiteWiseIntegration"``

Grants permission to allow IoT SiteWise integrate with other services

See ${UserGuideDocPage}/integrate-tm.html

#### Defined in

actions/iotsitewise.ts:291

___

### ExecuteAction

• **ExecuteAction** = ``"iotsitewise:ExecuteAction"``

Grants permission to execute actions

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ExecuteAction.html

#### Defined in

actions/iotsitewise.ts:297

___

### ExecuteQuery

• **ExecuteQuery** = ``"iotsitewise:ExecuteQuery"``

Grants permission to execute query

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ExecuteQuery.html

#### Defined in

actions/iotsitewise.ts:303

___

### GetAssetPropertyAggregates

• **GetAssetPropertyAggregates** = ``"iotsitewise:GetAssetPropertyAggregates"``

Grants permission to retrieve computed aggregates for an asset property

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyAggregates.html

#### Defined in

actions/iotsitewise.ts:309

___

### GetAssetPropertyValue

• **GetAssetPropertyValue** = ``"iotsitewise:GetAssetPropertyValue"``

Grants permission to retrieve the latest value for an asset property

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html

#### Defined in

actions/iotsitewise.ts:315

___

### GetAssetPropertyValueHistory

• **GetAssetPropertyValueHistory** = ``"iotsitewise:GetAssetPropertyValueHistory"``

Grants permission to retrieve the value history for an asset property

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValueHistory.html

#### Defined in

actions/iotsitewise.ts:321

___

### GetInterpolatedAssetPropertyValues

• **GetInterpolatedAssetPropertyValues** = ``"iotsitewise:GetInterpolatedAssetPropertyValues"``

Grants permission to retrieve interpolated values for an asset property

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetInterpolatedAssetPropertyValues.html

#### Defined in

actions/iotsitewise.ts:327

___

### ListAccessPolicies

• **ListAccessPolicies** = ``"iotsitewise:ListAccessPolicies"``

Grants permission to list all access policies for an identity or a resource

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAccessPolicies.html

#### Defined in

actions/iotsitewise.ts:333

___

### ListActions

• **ListActions** = ``"iotsitewise:ListActions"``

Grants permission to list all actions

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListActions.html

#### Defined in

actions/iotsitewise.ts:339

___

### ListAssetModelCompositeModels

• **ListAssetModelCompositeModels** = ``"iotsitewise:ListAssetModelCompositeModels"``

Grants permission to list all asset model composite models

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModelCompositeModels.html

#### Defined in

actions/iotsitewise.ts:345

___

### ListAssetModelProperties

• **ListAssetModelProperties** = ``"iotsitewise:ListAssetModelProperties"``

Grants permission to list asset model properties

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModelProperties.html

#### Defined in

actions/iotsitewise.ts:351

___

### ListAssetModels

• **ListAssetModels** = ``"iotsitewise:ListAssetModels"``

Grants permission to list all asset models

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html

#### Defined in

actions/iotsitewise.ts:357

___

### ListAssetProperties

• **ListAssetProperties** = ``"iotsitewise:ListAssetProperties"``

Grants permission to list asset properties

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetProperties.html

#### Defined in

actions/iotsitewise.ts:363

___

### ListAssetRelationships

• **ListAssetRelationships** = ``"iotsitewise:ListAssetRelationships"``

Grants permission to list the asset relationship graph for an asset

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetRelationships.html

#### Defined in

actions/iotsitewise.ts:369

___

### ListAssets

• **ListAssets** = ``"iotsitewise:ListAssets"``

Grants permission to list all assets

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssets.html

#### Defined in

actions/iotsitewise.ts:375

___

### ListAssociatedAssets

• **ListAssociatedAssets** = ``"iotsitewise:ListAssociatedAssets"``

Grants permission to list all assets associated with an asset through a hierarc
hy

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssociatedAssets.html

#### Defined in

actions/iotsitewise.ts:382

___

### ListBulkImportJobs

• **ListBulkImportJobs** = ``"iotsitewise:ListBulkImportJobs"``

Grants permission to list bulk import jobs

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListBulkImportJobs.html

#### Defined in

actions/iotsitewise.ts:388

___

### ListCompositionRelationships

• **ListCompositionRelationships** = ``"iotsitewise:ListCompositionRelationships"``

Grants permission to list all asset model composition relationships

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListCompositionRelationships.html

#### Defined in

actions/iotsitewise.ts:394

___

### ListDashboards

• **ListDashboards** = ``"iotsitewise:ListDashboards"``

Grants permission to list all dashboards in a project

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListDashboards.html

#### Defined in

actions/iotsitewise.ts:400

___

### ListGateways

• **ListGateways** = ``"iotsitewise:ListGateways"``

Grants permission to list all gateways

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListGateways.html

#### Defined in

actions/iotsitewise.ts:406

___

### ListPortals

• **ListPortals** = ``"iotsitewise:ListPortals"``

Grants permission to list all portals

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListPortals.html

#### Defined in

actions/iotsitewise.ts:412

___

### ListProjectAssets

• **ListProjectAssets** = ``"iotsitewise:ListProjectAssets"``

Grants permission to list all assets associated with a project

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjectAssets.html

#### Defined in

actions/iotsitewise.ts:418

___

### ListProjects

• **ListProjects** = ``"iotsitewise:ListProjects"``

Grants permission to list all projects in a portal

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjects.html

#### Defined in

actions/iotsitewise.ts:424

___

### ListTagsForResource

• **ListTagsForResource** = ``"iotsitewise:ListTagsForResource"``

Grants permission to list all tags for a resource

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/iotsitewise.ts:430

___

### ListTimeSeries

• **ListTimeSeries** = ``"iotsitewise:ListTimeSeries"``

Grants permission to list time series

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListTimeSeries.html

#### Defined in

actions/iotsitewise.ts:436

___

### PutDefaultEncryptionConfiguration

• **PutDefaultEncryptionConfiguration** = ``"iotsitewise:PutDefaultEncryptionConfiguration"``

Grants permission to set the default encryption configuration for the AWS accou
nt

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutDefaultEncryptionConfiguration.html

#### Defined in

actions/iotsitewise.ts:443

___

### PutLoggingOptions

• **PutLoggingOptions** = ``"iotsitewise:PutLoggingOptions"``

Grants permission to set logging options for the AWS account

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutLoggingOptions.html

#### Defined in

actions/iotsitewise.ts:449

___

### PutStorageConfiguration

• **PutStorageConfiguration** = ``"iotsitewise:PutStorageConfiguration"``

Grants permission to configure storage settings for the AWS account

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html

#### Defined in

actions/iotsitewise.ts:455

___

### TagResource

• **TagResource** = ``"iotsitewise:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TagResource.html

#### Defined in

actions/iotsitewise.ts:461

___

### UntagResource

• **UntagResource** = ``"iotsitewise:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UntagResource.html

#### Defined in

actions/iotsitewise.ts:467

___

### UpdateAccessPolicy

• **UpdateAccessPolicy** = ``"iotsitewise:UpdateAccessPolicy"``

Grants permission to update an access policy

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAccessPolicy.html

#### Defined in

actions/iotsitewise.ts:473

___

### UpdateAsset

• **UpdateAsset** = ``"iotsitewise:UpdateAsset"``

Grants permission to update an asset

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAsset.html

#### Defined in

actions/iotsitewise.ts:479

___

### UpdateAssetModel

• **UpdateAssetModel** = ``"iotsitewise:UpdateAssetModel"``

Grants permission to update an asset model

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html

#### Defined in

actions/iotsitewise.ts:485

___

### UpdateAssetModelCompositeModel

• **UpdateAssetModelCompositeModel** = ``"iotsitewise:UpdateAssetModelCompositeModel"``

Grants permission to update asset model composite model

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModelCompositeModel.html

#### Defined in

actions/iotsitewise.ts:491

___

### UpdateAssetModelPropertyRouting

• **UpdateAssetModelPropertyRouting** = ``"iotsitewise:UpdateAssetModelPropertyRouting"``

Grants permission to update an AssetModel property routing

See ${UserGuideDocPage}alarms-iam-permissions.html

#### Defined in

actions/iotsitewise.ts:497

___

### UpdateAssetProperty

• **UpdateAssetProperty** = ``"iotsitewise:UpdateAssetProperty"``

Grants permission to update an asset property

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html

#### Defined in

actions/iotsitewise.ts:503

___

### UpdateDashboard

• **UpdateDashboard** = ``"iotsitewise:UpdateDashboard"``

Grants permission to update a dashboard

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateDashboard.html

#### Defined in

actions/iotsitewise.ts:509

___

### UpdateGateway

• **UpdateGateway** = ``"iotsitewise:UpdateGateway"``

Grants permission to update a gateway

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGateway.html

#### Defined in

actions/iotsitewise.ts:515

___

### UpdateGatewayCapabilityConfiguration

• **UpdateGatewayCapabilityConfiguration** = ``"iotsitewise:UpdateGatewayCapabilityConfiguration"``

Grants permission to update a capability configuration for a gateway

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGatewayCapabilityConfiguration.html

#### Defined in

actions/iotsitewise.ts:521

___

### UpdatePortal

• **UpdatePortal** = ``"iotsitewise:UpdatePortal"``

Grants permission to update a portal

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdatePortal.html

#### Defined in

actions/iotsitewise.ts:527

___

### UpdateProject

• **UpdateProject** = ``"iotsitewise:UpdateProject"``

Grants permission to update a project

See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateProject.html

#### Defined in

actions/iotsitewise.ts:533
