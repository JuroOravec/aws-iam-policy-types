[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDmsActions

# Enumeration: AwsDmsActions

All IAM policy actions for AWS Database Migration Service (DMS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html

2024-02-12T09:56:52.945Z

## Table of contents

### Enumeration Members

- [AddTagsToResource](AwsDmsActions.md#addtagstoresource)
- [ApplyPendingMaintenanceAction](AwsDmsActions.md#applypendingmaintenanceaction)
- [AssociateExtensionPack](AwsDmsActions.md#associateextensionpack)
- [BatchStartRecommendations](AwsDmsActions.md#batchstartrecommendations)
- [CancelMetadataModelAssessment](AwsDmsActions.md#cancelmetadatamodelassessment)
- [CancelMetadataModelConversion](AwsDmsActions.md#cancelmetadatamodelconversion)
- [CancelMetadataModelExport](AwsDmsActions.md#cancelmetadatamodelexport)
- [CancelReplicationTaskAssessmentRun](AwsDmsActions.md#cancelreplicationtaskassessmentrun)
- [CreateDataMigration](AwsDmsActions.md#createdatamigration)
- [CreateDataProvider](AwsDmsActions.md#createdataprovider)
- [CreateEndpoint](AwsDmsActions.md#createendpoint)
- [CreateEventSubscription](AwsDmsActions.md#createeventsubscription)
- [CreateFleetAdvisorCollector](AwsDmsActions.md#createfleetadvisorcollector)
- [CreateInstanceProfile](AwsDmsActions.md#createinstanceprofile)
- [CreateMigrationProject](AwsDmsActions.md#createmigrationproject)
- [CreateReplicationConfig](AwsDmsActions.md#createreplicationconfig)
- [CreateReplicationInstance](AwsDmsActions.md#createreplicationinstance)
- [CreateReplicationSubnetGroup](AwsDmsActions.md#createreplicationsubnetgroup)
- [CreateReplicationTask](AwsDmsActions.md#createreplicationtask)
- [CreateTest](AwsDmsActions.md#createtest)
- [CreateTestEnvironments](AwsDmsActions.md#createtestenvironments)
- [CreateTestPlan](AwsDmsActions.md#createtestplan)
- [CreateTestRun](AwsDmsActions.md#createtestrun)
- [DeleteCertificate](AwsDmsActions.md#deletecertificate)
- [DeleteConnection](AwsDmsActions.md#deleteconnection)
- [DeleteDataMigration](AwsDmsActions.md#deletedatamigration)
- [DeleteDataProvider](AwsDmsActions.md#deletedataprovider)
- [DeleteEndpoint](AwsDmsActions.md#deleteendpoint)
- [DeleteEventSubscription](AwsDmsActions.md#deleteeventsubscription)
- [DeleteFleetAdvisorCollector](AwsDmsActions.md#deletefleetadvisorcollector)
- [DeleteFleetAdvisorDatabases](AwsDmsActions.md#deletefleetadvisordatabases)
- [DeleteInstanceProfile](AwsDmsActions.md#deleteinstanceprofile)
- [DeleteMigrationProject](AwsDmsActions.md#deletemigrationproject)
- [DeleteReplicationConfig](AwsDmsActions.md#deletereplicationconfig)
- [DeleteReplicationInstance](AwsDmsActions.md#deletereplicationinstance)
- [DeleteReplicationSubnetGroup](AwsDmsActions.md#deletereplicationsubnetgroup)
- [DeleteReplicationTask](AwsDmsActions.md#deletereplicationtask)
- [DeleteReplicationTaskAssessmentRun](AwsDmsActions.md#deletereplicationtaskassessmentrun)
- [DeleteTest](AwsDmsActions.md#deletetest)
- [DeleteTestPlan](AwsDmsActions.md#deletetestplan)
- [DescribeAccountAttributes](AwsDmsActions.md#describeaccountattributes)
- [DescribeApplicableIndividualAssessments](AwsDmsActions.md#describeapplicableindividualassessments)
- [DescribeCertificates](AwsDmsActions.md#describecertificates)
- [DescribeConnections](AwsDmsActions.md#describeconnections)
- [DescribeConversionConfiguration](AwsDmsActions.md#describeconversionconfiguration)
- [DescribeDataMigrations](AwsDmsActions.md#describedatamigrations)
- [DescribeDataProviders](AwsDmsActions.md#describedataproviders)
- [DescribeEndpointSettings](AwsDmsActions.md#describeendpointsettings)
- [DescribeEndpointTypes](AwsDmsActions.md#describeendpointtypes)
- [DescribeEndpoints](AwsDmsActions.md#describeendpoints)
- [DescribeEngineVersions](AwsDmsActions.md#describeengineversions)
- [DescribeEventCategories](AwsDmsActions.md#describeeventcategories)
- [DescribeEventSubscriptions](AwsDmsActions.md#describeeventsubscriptions)
- [DescribeEvents](AwsDmsActions.md#describeevents)
- [DescribeExtensionPackAssociations](AwsDmsActions.md#describeextensionpackassociations)
- [DescribeFleetAdvisorCollectors](AwsDmsActions.md#describefleetadvisorcollectors)
- [DescribeFleetAdvisorDatabases](AwsDmsActions.md#describefleetadvisordatabases)
- [DescribeFleetAdvisorLsaAnalysis](AwsDmsActions.md#describefleetadvisorlsaanalysis)
- [DescribeFleetAdvisorSchemaObjectSummary](AwsDmsActions.md#describefleetadvisorschemaobjectsummary)
- [DescribeFleetAdvisorSchemas](AwsDmsActions.md#describefleetadvisorschemas)
- [DescribeInstanceProfiles](AwsDmsActions.md#describeinstanceprofiles)
- [DescribeMetadataModelAssessments](AwsDmsActions.md#describemetadatamodelassessments)
- [DescribeMetadataModelConversions](AwsDmsActions.md#describemetadatamodelconversions)
- [DescribeMetadataModelExportsAsScript](AwsDmsActions.md#describemetadatamodelexportsasscript)
- [DescribeMetadataModelExportsToTarget](AwsDmsActions.md#describemetadatamodelexportstotarget)
- [DescribeMetadataModelImports](AwsDmsActions.md#describemetadatamodelimports)
- [DescribeMigrationProjects](AwsDmsActions.md#describemigrationprojects)
- [DescribeOrderableReplicationInstances](AwsDmsActions.md#describeorderablereplicationinstances)
- [DescribePendingMaintenanceActions](AwsDmsActions.md#describependingmaintenanceactions)
- [DescribeRecommendationLimitations](AwsDmsActions.md#describerecommendationlimitations)
- [DescribeRecommendations](AwsDmsActions.md#describerecommendations)
- [DescribeRefreshSchemasStatus](AwsDmsActions.md#describerefreshschemasstatus)
- [DescribeReplicationConfigs](AwsDmsActions.md#describereplicationconfigs)
- [DescribeReplicationInstanceTaskLogs](AwsDmsActions.md#describereplicationinstancetasklogs)
- [DescribeReplicationInstances](AwsDmsActions.md#describereplicationinstances)
- [DescribeReplicationSubnetGroups](AwsDmsActions.md#describereplicationsubnetgroups)
- [DescribeReplicationTableStatistics](AwsDmsActions.md#describereplicationtablestatistics)
- [DescribeReplicationTaskAssessmentResults](AwsDmsActions.md#describereplicationtaskassessmentresults)
- [DescribeReplicationTaskAssessmentRuns](AwsDmsActions.md#describereplicationtaskassessmentruns)
- [DescribeReplicationTaskIndividualAssessments](AwsDmsActions.md#describereplicationtaskindividualassessments)
- [DescribeReplicationTasks](AwsDmsActions.md#describereplicationtasks)
- [DescribeReplications](AwsDmsActions.md#describereplications)
- [DescribeSchemas](AwsDmsActions.md#describeschemas)
- [DescribeTableStatistics](AwsDmsActions.md#describetablestatistics)
- [DescribeTestEnvironments](AwsDmsActions.md#describetestenvironments)
- [DescribeTestGenerationStatus](AwsDmsActions.md#describetestgenerationstatus)
- [DescribeTestPlans](AwsDmsActions.md#describetestplans)
- [DescribeTestRunResultsSummaries](AwsDmsActions.md#describetestrunresultssummaries)
- [DescribeTestRuns](AwsDmsActions.md#describetestruns)
- [DescribeTests](AwsDmsActions.md#describetests)
- [DisassociateExtensionPack](AwsDmsActions.md#disassociateextensionpack)
- [ExportMetadataModelAssessment](AwsDmsActions.md#exportmetadatamodelassessment)
- [GetMetadataModel](AwsDmsActions.md#getmetadatamodel)
- [ImportCertificate](AwsDmsActions.md#importcertificate)
- [ListDataProviders](AwsDmsActions.md#listdataproviders)
- [ListExtensionPacks](AwsDmsActions.md#listextensionpacks)
- [ListInstanceProfiles](AwsDmsActions.md#listinstanceprofiles)
- [ListMetadataModelAssessmentActionItems](AwsDmsActions.md#listmetadatamodelassessmentactionitems)
- [ListMetadataModelAssessments](AwsDmsActions.md#listmetadatamodelassessments)
- [ListMetadataModelConversions](AwsDmsActions.md#listmetadatamodelconversions)
- [ListMetadataModelExports](AwsDmsActions.md#listmetadatamodelexports)
- [ListMigrationProjects](AwsDmsActions.md#listmigrationprojects)
- [ListTagsForResource](AwsDmsActions.md#listtagsforresource)
- [ModifyConversionConfiguration](AwsDmsActions.md#modifyconversionconfiguration)
- [ModifyDataMigration](AwsDmsActions.md#modifydatamigration)
- [ModifyDataProvider](AwsDmsActions.md#modifydataprovider)
- [ModifyEndpoint](AwsDmsActions.md#modifyendpoint)
- [ModifyEventSubscription](AwsDmsActions.md#modifyeventsubscription)
- [ModifyFleetAdvisorCollector](AwsDmsActions.md#modifyfleetadvisorcollector)
- [ModifyFleetAdvisorCollectorStatuses](AwsDmsActions.md#modifyfleetadvisorcollectorstatuses)
- [ModifyInstanceProfile](AwsDmsActions.md#modifyinstanceprofile)
- [ModifyMigrationProject](AwsDmsActions.md#modifymigrationproject)
- [ModifyReplicationConfig](AwsDmsActions.md#modifyreplicationconfig)
- [ModifyReplicationInstance](AwsDmsActions.md#modifyreplicationinstance)
- [ModifyReplicationSubnetGroup](AwsDmsActions.md#modifyreplicationsubnetgroup)
- [ModifyReplicationTask](AwsDmsActions.md#modifyreplicationtask)
- [ModifyTest](AwsDmsActions.md#modifytest)
- [ModifyTestPlan](AwsDmsActions.md#modifytestplan)
- [MoveReplicationTask](AwsDmsActions.md#movereplicationtask)
- [RebootReplicationInstance](AwsDmsActions.md#rebootreplicationinstance)
- [RefreshSchemas](AwsDmsActions.md#refreshschemas)
- [ReloadReplicationTables](AwsDmsActions.md#reloadreplicationtables)
- [ReloadTables](AwsDmsActions.md#reloadtables)
- [RemoveTagsFromResource](AwsDmsActions.md#removetagsfromresource)
- [RunFleetAdvisorLsaAnalysis](AwsDmsActions.md#runfleetadvisorlsaanalysis)
- [StartDataMigration](AwsDmsActions.md#startdatamigration)
- [StartExtensionPackAssociation](AwsDmsActions.md#startextensionpackassociation)
- [StartGenerateTests](AwsDmsActions.md#startgeneratetests)
- [StartMetadataModelAssessment](AwsDmsActions.md#startmetadatamodelassessment)
- [StartMetadataModelConversion](AwsDmsActions.md#startmetadatamodelconversion)
- [StartMetadataModelExportAsScript](AwsDmsActions.md#startmetadatamodelexportasscript)
- [StartMetadataModelExportAsScripts](AwsDmsActions.md#startmetadatamodelexportasscripts)
- [StartMetadataModelExportToTarget](AwsDmsActions.md#startmetadatamodelexporttotarget)
- [StartMetadataModelImport](AwsDmsActions.md#startmetadatamodelimport)
- [StartRecommendations](AwsDmsActions.md#startrecommendations)
- [StartReplication](AwsDmsActions.md#startreplication)
- [StartReplicationTask](AwsDmsActions.md#startreplicationtask)
- [StartReplicationTaskAssessment](AwsDmsActions.md#startreplicationtaskassessment)
- [StartReplicationTaskAssessmentRun](AwsDmsActions.md#startreplicationtaskassessmentrun)
- [StopDataMigration](AwsDmsActions.md#stopdatamigration)
- [StopGenerateTests](AwsDmsActions.md#stopgeneratetests)
- [StopReplication](AwsDmsActions.md#stopreplication)
- [StopReplicationTask](AwsDmsActions.md#stopreplicationtask)
- [StopTestRun](AwsDmsActions.md#stoptestrun)
- [TestConnection](AwsDmsActions.md#testconnection)
- [UpdateConversionConfiguration](AwsDmsActions.md#updateconversionconfiguration)
- [UpdateDataProvider](AwsDmsActions.md#updatedataprovider)
- [UpdateInstanceProfile](AwsDmsActions.md#updateinstanceprofile)
- [UpdateMigrationProject](AwsDmsActions.md#updatemigrationproject)
- [UpdateSubscriptionsToEventBridge](AwsDmsActions.md#updatesubscriptionstoeventbridge)
- [UploadFileMetadataList](AwsDmsActions.md#uploadfilemetadatalist)
- [ViewTestRunResults](AwsDmsActions.md#viewtestrunresults)

## Enumeration Members

### AddTagsToResource

• **AddTagsToResource** = ``"dms:AddTagsToResource"``

Grants permission to add metadata tags to DMS resources, including replication
instances, endpoints, security groups, and migration tasks

See https://docs.aws.amazon.com/dms/latest/APIReference/API_AddTagsToResource.html

#### Defined in

actions/dms.ts:18

___

### ApplyPendingMaintenanceAction

• **ApplyPendingMaintenanceAction** = ``"dms:ApplyPendingMaintenanceAction"``

Grants permission to apply a pending maintenance action to a resource (for exam
ple, to a replication instance)

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ApplyPendingMaintenanceAction.html

#### Defined in

actions/dms.ts:25

___

### AssociateExtensionPack

• **AssociateExtensionPack** = ``"dms:AssociateExtensionPack"``

Grants permission to associate a extension pack

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:31

___

### BatchStartRecommendations

• **BatchStartRecommendations** = ``"dms:BatchStartRecommendations"``

Grants permission to start the analysis of up to 20 source databases to recomme
nd target engines for each source database

See https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html

#### Defined in

actions/dms.ts:38

___

### CancelMetadataModelAssessment

• **CancelMetadataModelAssessment** = ``"dms:CancelMetadataModelAssessment"``

Grants permission to cancel a single metadata model assessment run

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:44

___

### CancelMetadataModelConversion

• **CancelMetadataModelConversion** = ``"dms:CancelMetadataModelConversion"``

Grants permission to cancel a single metadata model conversion run

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:50

___

### CancelMetadataModelExport

• **CancelMetadataModelExport** = ``"dms:CancelMetadataModelExport"``

Grants permission to cancel a single metadata model export run

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:56

___

### CancelReplicationTaskAssessmentRun

• **CancelReplicationTaskAssessmentRun** = ``"dms:CancelReplicationTaskAssessmentRun"``

Grants permission to cancel a single premigration assessment run

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CancelReplicationTaskAssessmentRun.html

#### Defined in

actions/dms.ts:62

___

### CreateDataMigration

• **CreateDataMigration** = ``"dms:CreateDataMigration"``

Grants permission to create a database migration using the provided settings

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:68

___

### CreateDataProvider

• **CreateDataProvider** = ``"dms:CreateDataProvider"``

Grants permission to create an data provider using the provided settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateDataProvider.html

#### Defined in

actions/dms.ts:74

___

### CreateEndpoint

• **CreateEndpoint** = ``"dms:CreateEndpoint"``

Grants permission to create an endpoint using the provided settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEndpoint.html

#### Defined in

actions/dms.ts:80

___

### CreateEventSubscription

• **CreateEventSubscription** = ``"dms:CreateEventSubscription"``

Grants permission to create an AWS DMS event notification subscription

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEventSubscription.html

#### Defined in

actions/dms.ts:86

___

### CreateFleetAdvisorCollector

• **CreateFleetAdvisorCollector** = ``"dms:CreateFleetAdvisorCollector"``

Grants permission to create a Fleet Advisor collector using the specified param
eters

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateFleetAdvisorCollector.html

#### Defined in

actions/dms.ts:93

___

### CreateInstanceProfile

• **CreateInstanceProfile** = ``"dms:CreateInstanceProfile"``

Grants permission to create an instance profile using the provided settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateInstanceProfile.html

#### Defined in

actions/dms.ts:99

___

### CreateMigrationProject

• **CreateMigrationProject** = ``"dms:CreateMigrationProject"``

Grants permission to create an migration project using the provided settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateMigrationProject.html

#### Defined in

actions/dms.ts:105

___

### CreateReplicationConfig

• **CreateReplicationConfig** = ``"dms:CreateReplicationConfig"``

Grants permission to create a replication config using the provided settings

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:111

___

### CreateReplicationInstance

• **CreateReplicationInstance** = ``"dms:CreateReplicationInstance"``

Grants permission to create a replication instance using the specified paramete
rs

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html

#### Defined in

actions/dms.ts:118

___

### CreateReplicationSubnetGroup

• **CreateReplicationSubnetGroup** = ``"dms:CreateReplicationSubnetGroup"``

Grants permission to create a replication subnet group given a list of the subn
et IDs in a VPC

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationSubnetGroup.html

#### Defined in

actions/dms.ts:125

___

### CreateReplicationTask

• **CreateReplicationTask** = ``"dms:CreateReplicationTask"``

Grants permission to create a replication task using the specified parameters

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html

#### Defined in

actions/dms.ts:131

___

### CreateTest

• **CreateTest** = ``"dms:CreateTest"``

Grants permission to create a test using the provided settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateTest.html

#### Defined in

actions/dms.ts:137

___

### CreateTestEnvironments

• **CreateTestEnvironments** = ``"dms:CreateTestEnvironments"``

Grants permission to create a test environment using the provided settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateTestEnvironments.html

#### Defined in

actions/dms.ts:143

___

### CreateTestPlan

• **CreateTestPlan** = ``"dms:CreateTestPlan"``

Grants permission to create a test plan using the provided settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateTestPlan.html

#### Defined in

actions/dms.ts:149

___

### CreateTestRun

• **CreateTestRun** = ``"dms:CreateTestRun"``

Grants permission to create a test run using the provided settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateTestRun.html

#### Defined in

actions/dms.ts:155

___

### DeleteCertificate

• **DeleteCertificate** = ``"dms:DeleteCertificate"``

Grants permission to delete the specified certificate

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteCertificate.html

#### Defined in

actions/dms.ts:161

___

### DeleteConnection

• **DeleteConnection** = ``"dms:DeleteConnection"``

Grants permission to delete the specified connection between a replication inst
ance and an endpoint

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteConnection.html

#### Defined in

actions/dms.ts:168

___

### DeleteDataMigration

• **DeleteDataMigration** = ``"dms:DeleteDataMigration"``

Grants permission to delete the specified database migration

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:174

___

### DeleteDataProvider

• **DeleteDataProvider** = ``"dms:DeleteDataProvider"``

Grants permission to delete the specified data provider

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteDataProvider.html

#### Defined in

actions/dms.ts:180

___

### DeleteEndpoint

• **DeleteEndpoint** = ``"dms:DeleteEndpoint"``

Grants permission to delete the specified endpoint

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEndpoint.html

#### Defined in

actions/dms.ts:186

___

### DeleteEventSubscription

• **DeleteEventSubscription** = ``"dms:DeleteEventSubscription"``

Grants permission to delete an AWS DMS event subscription

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEventSubscription.html

#### Defined in

actions/dms.ts:192

___

### DeleteFleetAdvisorCollector

• **DeleteFleetAdvisorCollector** = ``"dms:DeleteFleetAdvisorCollector"``

Grants permission to delete the specified Fleet Advisor collector

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteFleetAdvisorCollector.html

#### Defined in

actions/dms.ts:198

___

### DeleteFleetAdvisorDatabases

• **DeleteFleetAdvisorDatabases** = ``"dms:DeleteFleetAdvisorDatabases"``

Grants permission to delete the specified Fleet Advisor databases

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteFleetAdvisorDatabases.html

#### Defined in

actions/dms.ts:204

___

### DeleteInstanceProfile

• **DeleteInstanceProfile** = ``"dms:DeleteInstanceProfile"``

Grants permission to delete the specified instance profile

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteInstanceProfile.html

#### Defined in

actions/dms.ts:210

___

### DeleteMigrationProject

• **DeleteMigrationProject** = ``"dms:DeleteMigrationProject"``

Grants permission to delete the specified migration project

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteMigrationProject.html

#### Defined in

actions/dms.ts:216

___

### DeleteReplicationConfig

• **DeleteReplicationConfig** = ``"dms:DeleteReplicationConfig"``

Grants permission to delete the specified replication config

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:222

___

### DeleteReplicationInstance

• **DeleteReplicationInstance** = ``"dms:DeleteReplicationInstance"``

Grants permission to delete the specified replication instance

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationInstance.html

#### Defined in

actions/dms.ts:228

___

### DeleteReplicationSubnetGroup

• **DeleteReplicationSubnetGroup** = ``"dms:DeleteReplicationSubnetGroup"``

Grants permission to deletes a subnet group

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationSubnetGroup.html

#### Defined in

actions/dms.ts:234

___

### DeleteReplicationTask

• **DeleteReplicationTask** = ``"dms:DeleteReplicationTask"``

Grants permission to delete the specified replication task

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html

#### Defined in

actions/dms.ts:240

___

### DeleteReplicationTaskAssessmentRun

• **DeleteReplicationTaskAssessmentRun** = ``"dms:DeleteReplicationTaskAssessmentRun"``

Grants permission to delete the record of a single premigration assessment run

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTaskAssessmentRun.html

#### Defined in

actions/dms.ts:246

___

### DeleteTest

• **DeleteTest** = ``"dms:DeleteTest"``

Grants permission to delete the specified test

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteTest.html

#### Defined in

actions/dms.ts:252

___

### DeleteTestPlan

• **DeleteTestPlan** = ``"dms:DeleteTestPlan"``

Grants permission to delete the specified test plan

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteTestPlan.html

#### Defined in

actions/dms.ts:258

___

### DescribeAccountAttributes

• **DescribeAccountAttributes** = ``"dms:DescribeAccountAttributes"``

Grants permission to list all of the AWS DMS attributes for a customer account

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeAccountAttributes.html

#### Defined in

actions/dms.ts:264

___

### DescribeApplicableIndividualAssessments

• **DescribeApplicableIndividualAssessments** = ``"dms:DescribeApplicableIndividualAssessments"``

Grants permission to list individual assessments that you can specify for a new
premigration assessment run

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeApplicableIndividualAssessments.html

#### Defined in

actions/dms.ts:271

___

### DescribeCertificates

• **DescribeCertificates** = ``"dms:DescribeCertificates"``

Grants permission to provide a description of the certificate

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeCertificates.html

#### Defined in

actions/dms.ts:277

___

### DescribeConnections

• **DescribeConnections** = ``"dms:DescribeConnections"``

Grants permission to describe the status of the connections that have been made
between the replication instance and an endpoint

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeConnections.html

#### Defined in

actions/dms.ts:284

___

### DescribeConversionConfiguration

• **DescribeConversionConfiguration** = ``"dms:DescribeConversionConfiguration"``

Grants permission to return information about DMS Schema Conversion project con
figuration

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeConversionConfiguration.html

#### Defined in

actions/dms.ts:291

___

### DescribeDataMigrations

• **DescribeDataMigrations** = ``"dms:DescribeDataMigrations"``

Grants permission to return information about database migrations for your acco
unt in the specified region

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:298

___

### DescribeDataProviders

• **DescribeDataProviders** = ``"dms:DescribeDataProviders"``

Grants permission to list the AWS DMS attributes for a data providers. Note. Th
is action should be added along with ListDataProviders, but does not currently
authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeDataProviders.html

#### Defined in

actions/dms.ts:306

___

### DescribeEndpointSettings

• **DescribeEndpointSettings** = ``"dms:DescribeEndpointSettings"``

Grants permission to return the possible endpoint settings available when you c
reate an endpoint for a specific database engine

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpointSettings.html

#### Defined in

actions/dms.ts:313

___

### DescribeEndpointTypes

• **DescribeEndpointTypes** = ``"dms:DescribeEndpointTypes"``

Grants permission to return information about the type of endpoints available

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpointTypes.html

#### Defined in

actions/dms.ts:319

___

### DescribeEndpoints

• **DescribeEndpoints** = ``"dms:DescribeEndpoints"``

Grants permission to return information about the endpoints for your account in
the current region

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpoints.html

#### Defined in

actions/dms.ts:326

___

### DescribeEngineVersions

• **DescribeEngineVersions** = ``"dms:DescribeEngineVersions"``

Grants permission to return information about the available versions for DMS re
plication instances

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEngineVersions.html

#### Defined in

actions/dms.ts:333

___

### DescribeEventCategories

• **DescribeEventCategories** = ``"dms:DescribeEventCategories"``

Grants permission to list categories for all event source types, or, if specifi
ed, for a specified source type

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventCategories.html

#### Defined in

actions/dms.ts:340

___

### DescribeEventSubscriptions

• **DescribeEventSubscriptions** = ``"dms:DescribeEventSubscriptions"``

Grants permission to list all the event subscriptions for a customer account

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventSubscriptions.html

#### Defined in

actions/dms.ts:346

___

### DescribeEvents

• **DescribeEvents** = ``"dms:DescribeEvents"``

Grants permission to list events for a given source identifier and source type

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEvents.html

#### Defined in

actions/dms.ts:352

___

### DescribeExtensionPackAssociations

• **DescribeExtensionPackAssociations** = ``"dms:DescribeExtensionPackAssociations"``

Grants permission to list the AWS DMS attributes for extension packs. Note. Thi
s action should be added along with ListExtensionPacks, but does not currently
authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeExtensionPackAssociations.html

#### Defined in

actions/dms.ts:360

___

### DescribeFleetAdvisorCollectors

• **DescribeFleetAdvisorCollectors** = ``"dms:DescribeFleetAdvisorCollectors"``

Grants permission to return a paginated list of Fleet Advisor collectors in you
r account based on filter settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorCollectors.html

#### Defined in

actions/dms.ts:367

___

### DescribeFleetAdvisorDatabases

• **DescribeFleetAdvisorDatabases** = ``"dms:DescribeFleetAdvisorDatabases"``

Grants permission to return a paginated list of Fleet Advisor databases in your
account based on filter settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorDatabases.html

#### Defined in

actions/dms.ts:374

___

### DescribeFleetAdvisorLsaAnalysis

• **DescribeFleetAdvisorLsaAnalysis** = ``"dms:DescribeFleetAdvisorLsaAnalysis"``

Grants permission to return a paginated list of descriptions of large-scale ass
essment (LSA) analyses produced by your Fleet Advisor collectors

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorLsaAnalysis.html

#### Defined in

actions/dms.ts:381

___

### DescribeFleetAdvisorSchemaObjectSummary

• **DescribeFleetAdvisorSchemaObjectSummary** = ``"dms:DescribeFleetAdvisorSchemaObjectSummary"``

Grants permission to return a paginated list of descriptions of schemas discove
red by your Fleet Advisor collectors based on filter settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorSchemaObjectSummary.html

#### Defined in

actions/dms.ts:388

___

### DescribeFleetAdvisorSchemas

• **DescribeFleetAdvisorSchemas** = ``"dms:DescribeFleetAdvisorSchemas"``

Grants permission to return a paginated list of schemas discovered by your Flee
t Advisor collectors based on filter settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorSchemas.html

#### Defined in

actions/dms.ts:395

___

### DescribeInstanceProfiles

• **DescribeInstanceProfiles** = ``"dms:DescribeInstanceProfiles"``

Grants permission to list the AWS DMS attributes for a instance profiles. Note.
This action should be added along with ListInstanceProfiles, but does not curre
ntly authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeInstanceProfiles.html

#### Defined in

actions/dms.ts:403

___

### DescribeMetadataModelAssessments

• **DescribeMetadataModelAssessments** = ``"dms:DescribeMetadataModelAssessments"``

Grants permission to list the AWS DMS attributes for metadata model assessments
. Note. This action should be added along with ListMetadataModelAssessments, bu
t does not currently authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelAssessments.html

#### Defined in

actions/dms.ts:411

___

### DescribeMetadataModelConversions

• **DescribeMetadataModelConversions** = ``"dms:DescribeMetadataModelConversions"``

Grants permission to list the AWS DMS attributes for a metadata model conversio
ns. Note. This action should be added along with ListMetadataModelConversions,
but does not currently authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelConversions.html

#### Defined in

actions/dms.ts:419

___

### DescribeMetadataModelExportsAsScript

• **DescribeMetadataModelExportsAsScript** = ``"dms:DescribeMetadataModelExportsAsScript"``

Grants permission to list the AWS DMS attributes for a metadata model exports.
Note. This action should be added along with ListMetadataModelExports, but does
not currently authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelExportsAsScript.html

#### Defined in

actions/dms.ts:427

___

### DescribeMetadataModelExportsToTarget

• **DescribeMetadataModelExportsToTarget** = ``"dms:DescribeMetadataModelExportsToTarget"``

Grants permission to list the AWS DMS attributes for a metadata model exports.
Note. This action should be added along with ListMetadataModelExports, but does
not currently authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelExportsToTarget.html

#### Defined in

actions/dms.ts:435

___

### DescribeMetadataModelImports

• **DescribeMetadataModelImports** = ``"dms:DescribeMetadataModelImports"``

Grants permission to return information about start metadata model import opera
tions for a migration project

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelImports.html

#### Defined in

actions/dms.ts:442

___

### DescribeMigrationProjects

• **DescribeMigrationProjects** = ``"dms:DescribeMigrationProjects"``

Grants permission to list the AWS DMS attributes for a migration projects. Note
. This action should be added along with ListMigrationProjects, but does not cu
rrently authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMigrationProjects.html

#### Defined in

actions/dms.ts:450

___

### DescribeOrderableReplicationInstances

• **DescribeOrderableReplicationInstances** = ``"dms:DescribeOrderableReplicationInstances"``

Grants permission to return information about the replication instance types th
at can be created in the specified region

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeOrderableReplicationInstances.html

#### Defined in

actions/dms.ts:457

___

### DescribePendingMaintenanceActions

• **DescribePendingMaintenanceActions** = ``"dms:DescribePendingMaintenanceActions"``

Grants permission to return information about pending maintenance actions

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribePendingMaintenanceActions.html

#### Defined in

actions/dms.ts:463

___

### DescribeRecommendationLimitations

• **DescribeRecommendationLimitations** = ``"dms:DescribeRecommendationLimitations"``

Grants permission to return a paginated list of descriptions of limitations for
recommendations of target AWS engines

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorLsaAnalysis.html

#### Defined in

actions/dms.ts:470

___

### DescribeRecommendations

• **DescribeRecommendations** = ``"dms:DescribeRecommendations"``

Grants permission to return a paginated list of descriptions of target engine r
ecommendations for your source databases

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeRecommendations.html

#### Defined in

actions/dms.ts:477

___

### DescribeRefreshSchemasStatus

• **DescribeRefreshSchemasStatus** = ``"dms:DescribeRefreshSchemasStatus"``

Grants permission to returns the status of the RefreshSchemas operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeRefreshSchemasStatus.html

#### Defined in

actions/dms.ts:483

___

### DescribeReplicationConfigs

• **DescribeReplicationConfigs** = ``"dms:DescribeReplicationConfigs"``

Grants permission to describe replication configs

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:489

___

### DescribeReplicationInstanceTaskLogs

• **DescribeReplicationInstanceTaskLogs** = ``"dms:DescribeReplicationInstanceTaskLogs"``

Grants permission to return information about the task logs for the specified t
ask

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstanceTaskLogs.html

#### Defined in

actions/dms.ts:496

___

### DescribeReplicationInstances

• **DescribeReplicationInstances** = ``"dms:DescribeReplicationInstances"``

Grants permission to return information about replication instances for your ac
count in the current region

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstances.html

#### Defined in

actions/dms.ts:503

___

### DescribeReplicationSubnetGroups

• **DescribeReplicationSubnetGroups** = ``"dms:DescribeReplicationSubnetGroups"``

Grants permission to return information about the replication subnet groups

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationSubnetGroups.html

#### Defined in

actions/dms.ts:509

___

### DescribeReplicationTableStatistics

• **DescribeReplicationTableStatistics** = ``"dms:DescribeReplicationTableStatistics"``

Grants permission to describe replication table statistics

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:515

___

### DescribeReplicationTaskAssessmentResults

• **DescribeReplicationTaskAssessmentResults** = ``"dms:DescribeReplicationTaskAssessmentResults"``

Grants permission to return the latest task assessment results from Amazon S3

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskAssessmentResults.html

#### Defined in

actions/dms.ts:521

___

### DescribeReplicationTaskAssessmentRuns

• **DescribeReplicationTaskAssessmentRuns** = ``"dms:DescribeReplicationTaskAssessmentRuns"``

Grants permission to return a paginated list of premigration assessment runs ba
sed on filter settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskAssessmentRuns.html

#### Defined in

actions/dms.ts:528

___

### DescribeReplicationTaskIndividualAssessments

• **DescribeReplicationTaskIndividualAssessments** = ``"dms:DescribeReplicationTaskIndividualAssessments"``

Grants permission to return a paginated list of individual assessments based on
filter settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskIndividualAssessments.html

#### Defined in

actions/dms.ts:535

___

### DescribeReplicationTasks

• **DescribeReplicationTasks** = ``"dms:DescribeReplicationTasks"``

Grants permission to return information about replication tasks for your accoun
t in the current region

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTasks.html

#### Defined in

actions/dms.ts:542

___

### DescribeReplications

• **DescribeReplications** = ``"dms:DescribeReplications"``

Grants permission to describe replications

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:548

___

### DescribeSchemas

• **DescribeSchemas** = ``"dms:DescribeSchemas"``

Grants permission to return information about the schema for the specified endp
oint

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeSchemas.html

#### Defined in

actions/dms.ts:555

___

### DescribeTableStatistics

• **DescribeTableStatistics** = ``"dms:DescribeTableStatistics"``

Grants permission to return table statistics on the database migration task, in
cluding table name, rows inserted, rows updated, and rows deleted

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTableStatistics.html

#### Defined in

actions/dms.ts:562

___

### DescribeTestEnvironments

• **DescribeTestEnvironments** = ``"dms:DescribeTestEnvironments"``

Grants permission to list a test environment for a migration project

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTestEnvironments.html

#### Defined in

actions/dms.ts:568

___

### DescribeTestGenerationStatus

• **DescribeTestGenerationStatus** = ``"dms:DescribeTestGenerationStatus"``

Grants permission to list statuses of test generations for a migration project

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTestGenerationStatus.html

#### Defined in

actions/dms.ts:574

___

### DescribeTestPlans

• **DescribeTestPlans** = ``"dms:DescribeTestPlans"``

Grants permission to list all the test plans for a migration project

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTestPlans.html

#### Defined in

actions/dms.ts:580

___

### DescribeTestRunResultsSummaries

• **DescribeTestRunResultsSummaries** = ``"dms:DescribeTestRunResultsSummaries"``

Grants permission to view the summary of a specific test run

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTestRunResultsSummaries.html

#### Defined in

actions/dms.ts:586

___

### DescribeTestRuns

• **DescribeTestRuns** = ``"dms:DescribeTestRuns"``

Grants permission to list all the test runs for a migration project

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTestRuns.html

#### Defined in

actions/dms.ts:592

___

### DescribeTests

• **DescribeTests** = ``"dms:DescribeTests"``

Grants permission to list all the tests for a test plan

See https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTests.html

#### Defined in

actions/dms.ts:598

___

### DisassociateExtensionPack

• **DisassociateExtensionPack** = ``"dms:DisassociateExtensionPack"``

Grants permission to disassociate a extension pack

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:604

___

### ExportMetadataModelAssessment

• **ExportMetadataModelAssessment** = ``"dms:ExportMetadataModelAssessment"``

Grants permission to export the specified metadata model assessment

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ExportMetadataModelAssessment.html

#### Defined in

actions/dms.ts:610

___

### GetMetadataModel

• **GetMetadataModel** = ``"dms:GetMetadataModel"``

Grants permission to list all of the AWS DMS attributes for a metadata model. N
ote. Despite this action requires StartMetadataModelImport, the latter does not
currently authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:618

___

### ImportCertificate

• **ImportCertificate** = ``"dms:ImportCertificate"``

Grants permission to upload the specified certificate

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ImportCertificate.html

#### Defined in

actions/dms.ts:624

___

### ListDataProviders

• **ListDataProviders** = ``"dms:ListDataProviders"``

Grants permission to list the AWS DMS attributes for a data providers

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:630

___

### ListExtensionPacks

• **ListExtensionPacks** = ``"dms:ListExtensionPacks"``

Grants permission to list the AWS DMS attributes for a extension packs

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:636

___

### ListInstanceProfiles

• **ListInstanceProfiles** = ``"dms:ListInstanceProfiles"``

Grants permission to list the AWS DMS attributes for a instance profiles

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:642

___

### ListMetadataModelAssessmentActionItems

• **ListMetadataModelAssessmentActionItems** = ``"dms:ListMetadataModelAssessmentActionItems"``

Grants permission to list the AWS DMS attributes for a metadata model assessmen
t action items. Note. Despite this action requires StartMetadataModelImport, th
e latter does not currently authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:650

___

### ListMetadataModelAssessments

• **ListMetadataModelAssessments** = ``"dms:ListMetadataModelAssessments"``

Grants permission to list the AWS DMS attributes for a metadata model assessmen
ts

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:657

___

### ListMetadataModelConversions

• **ListMetadataModelConversions** = ``"dms:ListMetadataModelConversions"``

Grants permission to list the AWS DMS attributes for a metadata model conversio
ns

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:664

___

### ListMetadataModelExports

• **ListMetadataModelExports** = ``"dms:ListMetadataModelExports"``

Grants permission to list the AWS DMS attributes for a metadata model exports

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:670

___

### ListMigrationProjects

• **ListMigrationProjects** = ``"dms:ListMigrationProjects"``

Grants permission to list the AWS DMS attributes for a migration projects. Note
. Despite this action requires DescribeMigrationProjects and DescribeConversion
Configuration, both required actions do not currently authorize the described S
chema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:679

___

### ListTagsForResource

• **ListTagsForResource** = ``"dms:ListTagsForResource"``

Grants permission to list all tags for an AWS DMS resource

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/dms.ts:685

___

### ModifyConversionConfiguration

• **ModifyConversionConfiguration** = ``"dms:ModifyConversionConfiguration"``

Grants permission to update a conversion configuration. Note. This action shoul
d be added along with UpdateConversionConfiguration, but does not currently aut
horize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyConversionConfiguration.html

#### Defined in

actions/dms.ts:693

___

### ModifyDataMigration

• **ModifyDataMigration** = ``"dms:ModifyDataMigration"``

Grants permission to modify the specified database migration

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:699

___

### ModifyDataProvider

• **ModifyDataProvider** = ``"dms:ModifyDataProvider"``

Grants permission to modify the specified data provider. Note. This action shou
ld be added along with UpdateDataProvider, but does not currently authorize the
described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyDataProvider.html

#### Defined in

actions/dms.ts:707

___

### ModifyEndpoint

• **ModifyEndpoint** = ``"dms:ModifyEndpoint"``

Grants permission to modify the specified endpoint

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEndpoint.html

#### Defined in

actions/dms.ts:713

___

### ModifyEventSubscription

• **ModifyEventSubscription** = ``"dms:ModifyEventSubscription"``

Grants permission to modify an existing AWS DMS event notification subscription

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEventSubscription.html

#### Defined in

actions/dms.ts:719

___

### ModifyFleetAdvisorCollector

• **ModifyFleetAdvisorCollector** = ``"dms:ModifyFleetAdvisorCollector"``

Grants permission to modify the name and description of the specified Fleet Adv
isor collector

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:726

___

### ModifyFleetAdvisorCollectorStatuses

• **ModifyFleetAdvisorCollectorStatuses** = ``"dms:ModifyFleetAdvisorCollectorStatuses"``

Grants permission to modify the status of the specified Fleet Advisor collector

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:732

___

### ModifyInstanceProfile

• **ModifyInstanceProfile** = ``"dms:ModifyInstanceProfile"``

Grants permission to modify the specified instance profile. Note. This action s
hould be added along with UpdateInstanceProfile, but does not currently authori
ze the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyInstanceProfile.html

#### Defined in

actions/dms.ts:740

___

### ModifyMigrationProject

• **ModifyMigrationProject** = ``"dms:ModifyMigrationProject"``

Grants permission to modify the specified migration project. Note. This action
should be added along with UpdateMigrationProject, but does not currently autho
rize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyMigrationProject.html

#### Defined in

actions/dms.ts:748

___

### ModifyReplicationConfig

• **ModifyReplicationConfig** = ``"dms:ModifyReplicationConfig"``

Grants permission to modify the specified replication config

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:754

___

### ModifyReplicationInstance

• **ModifyReplicationInstance** = ``"dms:ModifyReplicationInstance"``

Grants permission to modify the replication instance to apply new settings

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationInstance.html

#### Defined in

actions/dms.ts:760

___

### ModifyReplicationSubnetGroup

• **ModifyReplicationSubnetGroup** = ``"dms:ModifyReplicationSubnetGroup"``

Grants permission to modify the settings for the specified replication subnet g
roup

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationSubnetGroup.html

#### Defined in

actions/dms.ts:767

___

### ModifyReplicationTask

• **ModifyReplicationTask** = ``"dms:ModifyReplicationTask"``

Grants permission to modify the specified replication task

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html

#### Defined in

actions/dms.ts:773

___

### ModifyTest

• **ModifyTest** = ``"dms:ModifyTest"``

Grants permission to modify the specified test

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyTest.html

#### Defined in

actions/dms.ts:779

___

### ModifyTestPlan

• **ModifyTestPlan** = ``"dms:ModifyTestPlan"``

Grants permission to modify the specified test plan

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyTestPlan.html

#### Defined in

actions/dms.ts:785

___

### MoveReplicationTask

• **MoveReplicationTask** = ``"dms:MoveReplicationTask"``

Grants permission to move the specified replication task to a different replica
tion instance

See https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html

#### Defined in

actions/dms.ts:792

___

### RebootReplicationInstance

• **RebootReplicationInstance** = ``"dms:RebootReplicationInstance"``

Grants permission to reboot a replication instance. Rebooting results in a mome
ntary outage, until the replication instance becomes available again

See https://docs.aws.amazon.com/dms/latest/APIReference/API_RebootReplicationInstance.html

#### Defined in

actions/dms.ts:799

___

### RefreshSchemas

• **RefreshSchemas** = ``"dms:RefreshSchemas"``

Grants permission to populate the schema for the specified endpoint

See https://docs.aws.amazon.com/dms/latest/APIReference/API_RefreshSchemas.html

#### Defined in

actions/dms.ts:805

___

### ReloadReplicationTables

• **ReloadReplicationTables** = ``"dms:ReloadReplicationTables"``

Grants permission to reload the target database table with the source for a rep
lication

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:812

___

### ReloadTables

• **ReloadTables** = ``"dms:ReloadTables"``

Grants permission to reload the target database table with the source data

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ReloadTables.html

#### Defined in

actions/dms.ts:818

___

### RemoveTagsFromResource

• **RemoveTagsFromResource** = ``"dms:RemoveTagsFromResource"``

Grants permission to remove metadata tags from a DMS resource

See https://docs.aws.amazon.com/dms/latest/APIReference/API_RemoveTagsFromResource.html

#### Defined in

actions/dms.ts:824

___

### RunFleetAdvisorLsaAnalysis

• **RunFleetAdvisorLsaAnalysis** = ``"dms:RunFleetAdvisorLsaAnalysis"``

Grants permission to run a large-scale assessment (LSA) analysis on every Fleet
Advisor collector in your account

See https://docs.aws.amazon.com/dms/latest/APIReference/API_RunFleetAdvisorLsaAnalysis.html

#### Defined in

actions/dms.ts:831

___

### StartDataMigration

• **StartDataMigration** = ``"dms:StartDataMigration"``

Grants permission to start the database migration

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:837

___

### StartExtensionPackAssociation

• **StartExtensionPackAssociation** = ``"dms:StartExtensionPackAssociation"``

Grants permission to associate an extension pack. Note. This action should be a
dded along with AssociateExtensionPack, but does not currently authorize the de
scribed Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartExtensionPackAssociation.html

#### Defined in

actions/dms.ts:845

___

### StartGenerateTests

• **StartGenerateTests** = ``"dms:StartGenerateTests"``

Grants permission to start test generation for the specified test plan

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartGenerateTests.html

#### Defined in

actions/dms.ts:851

___

### StartMetadataModelAssessment

• **StartMetadataModelAssessment** = ``"dms:StartMetadataModelAssessment"``

Grants permission to start a new assessment of metadata model

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelAssessment.html

#### Defined in

actions/dms.ts:857

___

### StartMetadataModelConversion

• **StartMetadataModelConversion** = ``"dms:StartMetadataModelConversion"``

Grants permission to start a new conversion of metadata model

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelConversion.html

#### Defined in

actions/dms.ts:863

___

### StartMetadataModelExportAsScript

• **StartMetadataModelExportAsScript** = ``"dms:StartMetadataModelExportAsScript"``

Grants permission to start a new export of metadata model as script. Note. This
action should be added along with StartMetadataModelExportAsScripts, but does n
ot currently authorize the described Schema Conversion operation

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelExportAsScript.html

#### Defined in

actions/dms.ts:871

___

### StartMetadataModelExportAsScripts

• **StartMetadataModelExportAsScripts** = ``"dms:StartMetadataModelExportAsScripts"``

Grants permission to start a new export of metadata model as script

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:877

___

### StartMetadataModelExportToTarget

• **StartMetadataModelExportToTarget** = ``"dms:StartMetadataModelExportToTarget"``

Grants permission to start a new export of metadata model to target

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelExportToTarget.html

#### Defined in

actions/dms.ts:883

___

### StartMetadataModelImport

• **StartMetadataModelImport** = ``"dms:StartMetadataModelImport"``

Grants permission to start a new import of metadata model

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelImport.html

#### Defined in

actions/dms.ts:889

___

### StartRecommendations

• **StartRecommendations** = ``"dms:StartRecommendations"``

Grants permission to start the analysis of your source database to provide reco
mmendations of target engines

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html

#### Defined in

actions/dms.ts:896

___

### StartReplication

• **StartReplication** = ``"dms:StartReplication"``

Grants permission to start a replication

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:902

___

### StartReplicationTask

• **StartReplicationTask** = ``"dms:StartReplicationTask"``

Grants permission to start the replication task

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html

#### Defined in

actions/dms.ts:908

___

### StartReplicationTaskAssessment

• **StartReplicationTaskAssessment** = ``"dms:StartReplicationTaskAssessment"``

Grants permission to start the replication task assessment for unsupported data
types in the source database

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html

#### Defined in

actions/dms.ts:915

___

### StartReplicationTaskAssessmentRun

• **StartReplicationTaskAssessmentRun** = ``"dms:StartReplicationTaskAssessmentRun"``

Grants permission to start a new premigration assessment run for one or more in
dividual assessments of a migration task

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html

#### Defined in

actions/dms.ts:922

___

### StopDataMigration

• **StopDataMigration** = ``"dms:StopDataMigration"``

Grants permission to stop the database migration

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:928

___

### StopGenerateTests

• **StopGenerateTests** = ``"dms:StopGenerateTests"``

Grants permission to stop test generation for the specified test plan

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StopGenerateTests.html

#### Defined in

actions/dms.ts:934

___

### StopReplication

• **StopReplication** = ``"dms:StopReplication"``

Grants permission to stop a replication

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:940

___

### StopReplicationTask

• **StopReplicationTask** = ``"dms:StopReplicationTask"``

Grants permission to stop the replication task

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html

#### Defined in

actions/dms.ts:946

___

### StopTestRun

• **StopTestRun** = ``"dms:StopTestRun"``

Grants permission to stop a test run

See https://docs.aws.amazon.com/dms/latest/APIReference/API_StopTestRun.html

#### Defined in

actions/dms.ts:952

___

### TestConnection

• **TestConnection** = ``"dms:TestConnection"``

Grants permission to test the connection between the replication instance and t
he endpoint

See https://docs.aws.amazon.com/dms/latest/APIReference/API_TestConnection.html

#### Defined in

actions/dms.ts:959

___

### UpdateConversionConfiguration

• **UpdateConversionConfiguration** = ``"dms:UpdateConversionConfiguration"``

Grants permission to update a conversion configuration

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:965

___

### UpdateDataProvider

• **UpdateDataProvider** = ``"dms:UpdateDataProvider"``

Grants permission to update the specified data provider

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:971

___

### UpdateInstanceProfile

• **UpdateInstanceProfile** = ``"dms:UpdateInstanceProfile"``

Grants permission to update the specified instance profile

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:977

___

### UpdateMigrationProject

• **UpdateMigrationProject** = ``"dms:UpdateMigrationProject"``

Grants permission to update the specified migration project

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:983

___

### UpdateSubscriptionsToEventBridge

• **UpdateSubscriptionsToEventBridge** = ``"dms:UpdateSubscriptionsToEventBridge"``

Grants permission to migrate DMS subcriptions to Eventbridge

See https://docs.aws.amazon.com/dms/latest/APIReference/API_UpdateSubscriptionsToEventBridge.html

#### Defined in

actions/dms.ts:989

___

### UploadFileMetadataList

• **UploadFileMetadataList** = ``"dms:UploadFileMetadataList"``

Grants permission to upload files to your Amazon S3 bucket

See https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html

#### Defined in

actions/dms.ts:995

___

### ViewTestRunResults

• **ViewTestRunResults** = ``"dms:ViewTestRunResults"``

Grants permission to view the details of a specific test in a test run

See https://docs.aws.amazon.com/dms/latest/APIReference/API_ViewTestRunResults.html

#### Defined in

actions/dms.ts:1001
