[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsGlueActions

# Enumeration: AwsGlueActions

All IAM policy actions for AWS Glue (GLUE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglue.html

2024-02-12T09:57:31.364Z

## Table of contents

### Enumeration Members

- [BatchCreatePartition](AwsGlueActions.md#batchcreatepartition)
- [BatchDeleteConnection](AwsGlueActions.md#batchdeleteconnection)
- [BatchDeletePartition](AwsGlueActions.md#batchdeletepartition)
- [BatchDeleteTable](AwsGlueActions.md#batchdeletetable)
- [BatchDeleteTableVersion](AwsGlueActions.md#batchdeletetableversion)
- [BatchGetBlueprints](AwsGlueActions.md#batchgetblueprints)
- [BatchGetCrawlers](AwsGlueActions.md#batchgetcrawlers)
- [BatchGetCustomEntityTypes](AwsGlueActions.md#batchgetcustomentitytypes)
- [BatchGetDevEndpoints](AwsGlueActions.md#batchgetdevendpoints)
- [BatchGetJobs](AwsGlueActions.md#batchgetjobs)
- [BatchGetPartition](AwsGlueActions.md#batchgetpartition)
- [BatchGetTableOptimizer](AwsGlueActions.md#batchgettableoptimizer)
- [BatchGetTriggers](AwsGlueActions.md#batchgettriggers)
- [BatchGetWorkflows](AwsGlueActions.md#batchgetworkflows)
- [BatchStopJobRun](AwsGlueActions.md#batchstopjobrun)
- [BatchUpdatePartition](AwsGlueActions.md#batchupdatepartition)
- [CancelDataQualityRuleRecommendationRun](AwsGlueActions.md#canceldataqualityrulerecommendationrun)
- [CancelDataQualityRulesetEvaluationRun](AwsGlueActions.md#canceldataqualityrulesetevaluationrun)
- [CancelMLTaskRun](AwsGlueActions.md#cancelmltaskrun)
- [CancelStatement](AwsGlueActions.md#cancelstatement)
- [CheckSchemaVersionValidity](AwsGlueActions.md#checkschemaversionvalidity)
- [CreateBlueprint](AwsGlueActions.md#createblueprint)
- [CreateClassifier](AwsGlueActions.md#createclassifier)
- [CreateConnection](AwsGlueActions.md#createconnection)
- [CreateCrawler](AwsGlueActions.md#createcrawler)
- [CreateCustomEntityType](AwsGlueActions.md#createcustomentitytype)
- [CreateDataQualityRuleset](AwsGlueActions.md#createdataqualityruleset)
- [CreateDatabase](AwsGlueActions.md#createdatabase)
- [CreateDevEndpoint](AwsGlueActions.md#createdevendpoint)
- [CreateJob](AwsGlueActions.md#createjob)
- [CreateMLTransform](AwsGlueActions.md#createmltransform)
- [CreatePartition](AwsGlueActions.md#createpartition)
- [CreatePartitionIndex](AwsGlueActions.md#createpartitionindex)
- [CreateRegistry](AwsGlueActions.md#createregistry)
- [CreateSchema](AwsGlueActions.md#createschema)
- [CreateScript](AwsGlueActions.md#createscript)
- [CreateSecurityConfiguration](AwsGlueActions.md#createsecurityconfiguration)
- [CreateSession](AwsGlueActions.md#createsession)
- [CreateTable](AwsGlueActions.md#createtable)
- [CreateTableOptimizer](AwsGlueActions.md#createtableoptimizer)
- [CreateTrigger](AwsGlueActions.md#createtrigger)
- [CreateUserDefinedFunction](AwsGlueActions.md#createuserdefinedfunction)
- [CreateWorkflow](AwsGlueActions.md#createworkflow)
- [DeleteBlueprint](AwsGlueActions.md#deleteblueprint)
- [DeleteClassifier](AwsGlueActions.md#deleteclassifier)
- [DeleteColumnStatisticsForPartition](AwsGlueActions.md#deletecolumnstatisticsforpartition)
- [DeleteColumnStatisticsForTable](AwsGlueActions.md#deletecolumnstatisticsfortable)
- [DeleteConnection](AwsGlueActions.md#deleteconnection)
- [DeleteCrawler](AwsGlueActions.md#deletecrawler)
- [DeleteCustomEntityType](AwsGlueActions.md#deletecustomentitytype)
- [DeleteDataQualityRuleset](AwsGlueActions.md#deletedataqualityruleset)
- [DeleteDatabase](AwsGlueActions.md#deletedatabase)
- [DeleteDevEndpoint](AwsGlueActions.md#deletedevendpoint)
- [DeleteJob](AwsGlueActions.md#deletejob)
- [DeleteMLTransform](AwsGlueActions.md#deletemltransform)
- [DeletePartition](AwsGlueActions.md#deletepartition)
- [DeletePartitionIndex](AwsGlueActions.md#deletepartitionindex)
- [DeleteRegistry](AwsGlueActions.md#deleteregistry)
- [DeleteResourcePolicy](AwsGlueActions.md#deleteresourcepolicy)
- [DeleteSchema](AwsGlueActions.md#deleteschema)
- [DeleteSchemaVersions](AwsGlueActions.md#deleteschemaversions)
- [DeleteSecurityConfiguration](AwsGlueActions.md#deletesecurityconfiguration)
- [DeleteSession](AwsGlueActions.md#deletesession)
- [DeleteTable](AwsGlueActions.md#deletetable)
- [DeleteTableOptimizer](AwsGlueActions.md#deletetableoptimizer)
- [DeleteTableVersion](AwsGlueActions.md#deletetableversion)
- [DeleteTrigger](AwsGlueActions.md#deletetrigger)
- [DeleteUserDefinedFunction](AwsGlueActions.md#deleteuserdefinedfunction)
- [DeleteWorkflow](AwsGlueActions.md#deleteworkflow)
- [DeregisterDataPreview](AwsGlueActions.md#deregisterdatapreview)
- [GetBlueprint](AwsGlueActions.md#getblueprint)
- [GetBlueprintRun](AwsGlueActions.md#getblueprintrun)
- [GetBlueprintRuns](AwsGlueActions.md#getblueprintruns)
- [GetCatalogImportStatus](AwsGlueActions.md#getcatalogimportstatus)
- [GetClassifier](AwsGlueActions.md#getclassifier)
- [GetClassifiers](AwsGlueActions.md#getclassifiers)
- [GetColumnStatisticsForPartition](AwsGlueActions.md#getcolumnstatisticsforpartition)
- [GetColumnStatisticsForTable](AwsGlueActions.md#getcolumnstatisticsfortable)
- [GetColumnStatisticsTaskRun](AwsGlueActions.md#getcolumnstatisticstaskrun)
- [GetColumnStatisticsTaskRuns](AwsGlueActions.md#getcolumnstatisticstaskruns)
- [GetCompletion](AwsGlueActions.md#getcompletion)
- [GetConnection](AwsGlueActions.md#getconnection)
- [GetConnections](AwsGlueActions.md#getconnections)
- [GetCrawler](AwsGlueActions.md#getcrawler)
- [GetCrawlerMetrics](AwsGlueActions.md#getcrawlermetrics)
- [GetCrawlers](AwsGlueActions.md#getcrawlers)
- [GetCustomEntityType](AwsGlueActions.md#getcustomentitytype)
- [GetDataCatalogEncryptionSettings](AwsGlueActions.md#getdatacatalogencryptionsettings)
- [GetDataPreviewStatement](AwsGlueActions.md#getdatapreviewstatement)
- [GetDataQualityResult](AwsGlueActions.md#getdataqualityresult)
- [GetDataQualityRuleRecommendationRun](AwsGlueActions.md#getdataqualityrulerecommendationrun)
- [GetDataQualityRuleset](AwsGlueActions.md#getdataqualityruleset)
- [GetDataQualityRulesetEvaluationRun](AwsGlueActions.md#getdataqualityrulesetevaluationrun)
- [GetDatabase](AwsGlueActions.md#getdatabase)
- [GetDatabases](AwsGlueActions.md#getdatabases)
- [GetDataflowGraph](AwsGlueActions.md#getdataflowgraph)
- [GetDevEndpoint](AwsGlueActions.md#getdevendpoint)
- [GetDevEndpoints](AwsGlueActions.md#getdevendpoints)
- [GetJob](AwsGlueActions.md#getjob)
- [GetJobBookmark](AwsGlueActions.md#getjobbookmark)
- [GetJobRun](AwsGlueActions.md#getjobrun)
- [GetJobRuns](AwsGlueActions.md#getjobruns)
- [GetJobs](AwsGlueActions.md#getjobs)
- [GetMLTaskRun](AwsGlueActions.md#getmltaskrun)
- [GetMLTaskRuns](AwsGlueActions.md#getmltaskruns)
- [GetMLTransform](AwsGlueActions.md#getmltransform)
- [GetMLTransforms](AwsGlueActions.md#getmltransforms)
- [GetMapping](AwsGlueActions.md#getmapping)
- [GetNotebookInstanceStatus](AwsGlueActions.md#getnotebookinstancestatus)
- [GetPartition](AwsGlueActions.md#getpartition)
- [GetPartitionIndexes](AwsGlueActions.md#getpartitionindexes)
- [GetPartitions](AwsGlueActions.md#getpartitions)
- [GetPlan](AwsGlueActions.md#getplan)
- [GetRegistry](AwsGlueActions.md#getregistry)
- [GetResourcePolicies](AwsGlueActions.md#getresourcepolicies)
- [GetResourcePolicy](AwsGlueActions.md#getresourcepolicy)
- [GetSchema](AwsGlueActions.md#getschema)
- [GetSchemaByDefinition](AwsGlueActions.md#getschemabydefinition)
- [GetSchemaVersion](AwsGlueActions.md#getschemaversion)
- [GetSchemaVersionsDiff](AwsGlueActions.md#getschemaversionsdiff)
- [GetSecurityConfiguration](AwsGlueActions.md#getsecurityconfiguration)
- [GetSecurityConfigurations](AwsGlueActions.md#getsecurityconfigurations)
- [GetSession](AwsGlueActions.md#getsession)
- [GetStatement](AwsGlueActions.md#getstatement)
- [GetTable](AwsGlueActions.md#gettable)
- [GetTableOptimizer](AwsGlueActions.md#gettableoptimizer)
- [GetTableVersion](AwsGlueActions.md#gettableversion)
- [GetTableVersions](AwsGlueActions.md#gettableversions)
- [GetTables](AwsGlueActions.md#gettables)
- [GetTags](AwsGlueActions.md#gettags)
- [GetTrigger](AwsGlueActions.md#gettrigger)
- [GetTriggers](AwsGlueActions.md#gettriggers)
- [GetUserDefinedFunction](AwsGlueActions.md#getuserdefinedfunction)
- [GetUserDefinedFunctions](AwsGlueActions.md#getuserdefinedfunctions)
- [GetWorkflow](AwsGlueActions.md#getworkflow)
- [GetWorkflowRun](AwsGlueActions.md#getworkflowrun)
- [GetWorkflowRunProperties](AwsGlueActions.md#getworkflowrunproperties)
- [GetWorkflowRuns](AwsGlueActions.md#getworkflowruns)
- [GlueNotebookAuthorize](AwsGlueActions.md#gluenotebookauthorize)
- [GlueNotebookRefreshCredentials](AwsGlueActions.md#gluenotebookrefreshcredentials)
- [ImportCatalogToGlue](AwsGlueActions.md#importcatalogtoglue)
- [ListBlueprints](AwsGlueActions.md#listblueprints)
- [ListColumnStatisticsTaskRuns](AwsGlueActions.md#listcolumnstatisticstaskruns)
- [ListCrawlers](AwsGlueActions.md#listcrawlers)
- [ListCrawls](AwsGlueActions.md#listcrawls)
- [ListCustomEntityTypes](AwsGlueActions.md#listcustomentitytypes)
- [ListDataQualityResults](AwsGlueActions.md#listdataqualityresults)
- [ListDataQualityRuleRecommendationRuns](AwsGlueActions.md#listdataqualityrulerecommendationruns)
- [ListDataQualityRulesetEvaluationRuns](AwsGlueActions.md#listdataqualityrulesetevaluationruns)
- [ListDataQualityRulesets](AwsGlueActions.md#listdataqualityrulesets)
- [ListDevEndpoints](AwsGlueActions.md#listdevendpoints)
- [ListJobs](AwsGlueActions.md#listjobs)
- [ListMLTransforms](AwsGlueActions.md#listmltransforms)
- [ListRegistries](AwsGlueActions.md#listregistries)
- [ListSchemaVersions](AwsGlueActions.md#listschemaversions)
- [ListSchemas](AwsGlueActions.md#listschemas)
- [ListSessions](AwsGlueActions.md#listsessions)
- [ListStatements](AwsGlueActions.md#liststatements)
- [ListTableOptimizerRuns](AwsGlueActions.md#listtableoptimizerruns)
- [ListTriggers](AwsGlueActions.md#listtriggers)
- [ListWorkflows](AwsGlueActions.md#listworkflows)
- [NotifyEvent](AwsGlueActions.md#notifyevent)
- [PassConnection](AwsGlueActions.md#passconnection)
- [PublishDataQuality](AwsGlueActions.md#publishdataquality)
- [PutDataCatalogEncryptionSettings](AwsGlueActions.md#putdatacatalogencryptionsettings)
- [PutResourcePolicy](AwsGlueActions.md#putresourcepolicy)
- [PutSchemaVersionMetadata](AwsGlueActions.md#putschemaversionmetadata)
- [PutWorkflowRunProperties](AwsGlueActions.md#putworkflowrunproperties)
- [QuerySchemaVersionMetadata](AwsGlueActions.md#queryschemaversionmetadata)
- [RegisterSchemaVersion](AwsGlueActions.md#registerschemaversion)
- [RemoveSchemaVersionMetadata](AwsGlueActions.md#removeschemaversionmetadata)
- [ResetJobBookmark](AwsGlueActions.md#resetjobbookmark)
- [ResumeWorkflowRun](AwsGlueActions.md#resumeworkflowrun)
- [RunDataPreviewStatement](AwsGlueActions.md#rundatapreviewstatement)
- [RunStatement](AwsGlueActions.md#runstatement)
- [SearchTables](AwsGlueActions.md#searchtables)
- [SendFeedback](AwsGlueActions.md#sendfeedback)
- [StartBlueprintRun](AwsGlueActions.md#startblueprintrun)
- [StartColumnStatisticsTaskRun](AwsGlueActions.md#startcolumnstatisticstaskrun)
- [StartCompletion](AwsGlueActions.md#startcompletion)
- [StartCrawler](AwsGlueActions.md#startcrawler)
- [StartCrawlerSchedule](AwsGlueActions.md#startcrawlerschedule)
- [StartDataQualityRuleRecommendationRun](AwsGlueActions.md#startdataqualityrulerecommendationrun)
- [StartDataQualityRulesetEvaluationRun](AwsGlueActions.md#startdataqualityrulesetevaluationrun)
- [StartExportLabelsTaskRun](AwsGlueActions.md#startexportlabelstaskrun)
- [StartImportLabelsTaskRun](AwsGlueActions.md#startimportlabelstaskrun)
- [StartJobRun](AwsGlueActions.md#startjobrun)
- [StartMLEvaluationTaskRun](AwsGlueActions.md#startmlevaluationtaskrun)
- [StartMLLabelingSetGenerationTaskRun](AwsGlueActions.md#startmllabelingsetgenerationtaskrun)
- [StartNotebook](AwsGlueActions.md#startnotebook)
- [StartTrigger](AwsGlueActions.md#starttrigger)
- [StartWorkflowRun](AwsGlueActions.md#startworkflowrun)
- [StopColumnStatisticsTaskRun](AwsGlueActions.md#stopcolumnstatisticstaskrun)
- [StopCrawler](AwsGlueActions.md#stopcrawler)
- [StopCrawlerSchedule](AwsGlueActions.md#stopcrawlerschedule)
- [StopSession](AwsGlueActions.md#stopsession)
- [StopTrigger](AwsGlueActions.md#stoptrigger)
- [StopWorkflowRun](AwsGlueActions.md#stopworkflowrun)
- [TagResource](AwsGlueActions.md#tagresource)
- [TerminateNotebook](AwsGlueActions.md#terminatenotebook)
- [TestConnection](AwsGlueActions.md#testconnection)
- [UntagResource](AwsGlueActions.md#untagresource)
- [UpdateBlueprint](AwsGlueActions.md#updateblueprint)
- [UpdateClassifier](AwsGlueActions.md#updateclassifier)
- [UpdateColumnStatisticsForPartition](AwsGlueActions.md#updatecolumnstatisticsforpartition)
- [UpdateColumnStatisticsForTable](AwsGlueActions.md#updatecolumnstatisticsfortable)
- [UpdateConnection](AwsGlueActions.md#updateconnection)
- [UpdateCrawler](AwsGlueActions.md#updatecrawler)
- [UpdateCrawlerSchedule](AwsGlueActions.md#updatecrawlerschedule)
- [UpdateDataQualityRuleset](AwsGlueActions.md#updatedataqualityruleset)
- [UpdateDatabase](AwsGlueActions.md#updatedatabase)
- [UpdateDevEndpoint](AwsGlueActions.md#updatedevendpoint)
- [UpdateJob](AwsGlueActions.md#updatejob)
- [UpdateJobFromSourceControl](AwsGlueActions.md#updatejobfromsourcecontrol)
- [UpdateMLTransform](AwsGlueActions.md#updatemltransform)
- [UpdatePartition](AwsGlueActions.md#updatepartition)
- [UpdateRegistry](AwsGlueActions.md#updateregistry)
- [UpdateSchema](AwsGlueActions.md#updateschema)
- [UpdateSourceControlFromJob](AwsGlueActions.md#updatesourcecontrolfromjob)
- [UpdateTable](AwsGlueActions.md#updatetable)
- [UpdateTableOptimizer](AwsGlueActions.md#updatetableoptimizer)
- [UpdateTrigger](AwsGlueActions.md#updatetrigger)
- [UpdateUserDefinedFunction](AwsGlueActions.md#updateuserdefinedfunction)
- [UpdateWorkflow](AwsGlueActions.md#updateworkflow)
- [UseGlueStudio](AwsGlueActions.md#usegluestudio)
- [UseMLTransforms](AwsGlueActions.md#usemltransforms)

## Enumeration Members

### BatchCreatePartition

• **BatchCreatePartition** = ``"glue:BatchCreatePartition"``

Grants permission to create one or more partitions

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchCreatePartition

#### Defined in

actions/glue.ts:17

___

### BatchDeleteConnection

• **BatchDeleteConnection** = ``"glue:BatchDeleteConnection"``

Grants permission to delete one or more connections

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-BatchDeleteConnection

#### Defined in

actions/glue.ts:23

___

### BatchDeletePartition

• **BatchDeletePartition** = ``"glue:BatchDeletePartition"``

Grants permission to delete one or more partitions

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchDeletePartition

#### Defined in

actions/glue.ts:29

___

### BatchDeleteTable

• **BatchDeleteTable** = ``"glue:BatchDeleteTable"``

Grants permission to delete one or more tables

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-BatchDeleteTable

#### Defined in

actions/glue.ts:35

___

### BatchDeleteTableVersion

• **BatchDeleteTableVersion** = ``"glue:BatchDeleteTableVersion"``

Grants permission to delete one or more versions of a table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion

#### Defined in

actions/glue.ts:41

___

### BatchGetBlueprints

• **BatchGetBlueprints** = ``"glue:BatchGetBlueprints"``

Grants permission to retrieve one or more blueprints

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-BatchGetBlueprints

#### Defined in

actions/glue.ts:47

___

### BatchGetCrawlers

• **BatchGetCrawlers** = ``"glue:BatchGetCrawlers"``

Grants permission to retrieve one or more crawlers

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-BatchGetCrawlers

#### Defined in

actions/glue.ts:53

___

### BatchGetCustomEntityTypes

• **BatchGetCustomEntityTypes** = ``"glue:BatchGetCustomEntityTypes"``

Grants permission to retrieve one or more Custom Entity Types

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-sensitive-data-api.html#aws-glue-api-sensitive-data-api-BatchGetCustomEntityTypes

#### Defined in

actions/glue.ts:59

___

### BatchGetDevEndpoints

• **BatchGetDevEndpoints** = ``"glue:BatchGetDevEndpoints"``

Grants permission to retrieve one or more development endpoints

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-BatchGetDevEndpoints

#### Defined in

actions/glue.ts:65

___

### BatchGetJobs

• **BatchGetJobs** = ``"glue:BatchGetJobs"``

Grants permission to retrieve one or more jobs

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-BatchGetJobs

#### Defined in

actions/glue.ts:71

___

### BatchGetPartition

• **BatchGetPartition** = ``"glue:BatchGetPartition"``

Grants permission to retrieve one or more partitions

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchGetPartition

#### Defined in

actions/glue.ts:77

___

### BatchGetTableOptimizer

• **BatchGetTableOptimizer** = ``"glue:BatchGetTableOptimizer"``

Grants permission to return the configuration for the specified table optimizer
s

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-BatchGetTableOptimizer

#### Defined in

actions/glue.ts:84

___

### BatchGetTriggers

• **BatchGetTriggers** = ``"glue:BatchGetTriggers"``

Grants permission to retrieve one or more triggers

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-BatchGetTriggers

#### Defined in

actions/glue.ts:90

___

### BatchGetWorkflows

• **BatchGetWorkflows** = ``"glue:BatchGetWorkflows"``

Grants permission to retrieve one or more workflows

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-BatchGetWorkflows

#### Defined in

actions/glue.ts:96

___

### BatchStopJobRun

• **BatchStopJobRun** = ``"glue:BatchStopJobRun"``

Grants permission to stop one or more job runs for a job

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-BatchStopStartJobRun

#### Defined in

actions/glue.ts:102

___

### BatchUpdatePartition

• **BatchUpdatePartition** = ``"glue:BatchUpdatePartition"``

Grants permission to update one or more partitions

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchUpdatePartition

#### Defined in

actions/glue.ts:108

___

### CancelDataQualityRuleRecommendationRun

• **CancelDataQualityRuleRecommendationRun** = ``"glue:CancelDataQualityRuleRecommendationRun"``

Grants permission to stop a running Data Quality rule recommendation run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-CancelDataQualityRuleRecommendationRun

#### Defined in

actions/glue.ts:114

___

### CancelDataQualityRulesetEvaluationRun

• **CancelDataQualityRulesetEvaluationRun** = ``"glue:CancelDataQualityRulesetEvaluationRun"``

Grants permission to stop a running Data Quality ruleset evaluation run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-CancelDataQualityRulesetEvaluationRun

#### Defined in

actions/glue.ts:120

___

### CancelMLTaskRun

• **CancelMLTaskRun** = ``"glue:CancelMLTaskRun"``

Grants permission to stop a running ML Task Run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CancelMLTaskRun

#### Defined in

actions/glue.ts:126

___

### CancelStatement

• **CancelStatement** = ``"glue:CancelStatement"``

Grants permission to cancel a statement in an interactive session

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-CancelStatement

#### Defined in

actions/glue.ts:132

___

### CheckSchemaVersionValidity

• **CheckSchemaVersionValidity** = ``"glue:CheckSchemaVersionValidity"``

Grants permission to retrieve a check the validity of schema version

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CheckSchemaVersionValidity

#### Defined in

actions/glue.ts:138

___

### CreateBlueprint

• **CreateBlueprint** = ``"glue:CreateBlueprint"``

Grants permission to create a blueprint

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-CreateBlueprint

#### Defined in

actions/glue.ts:144

___

### CreateClassifier

• **CreateClassifier** = ``"glue:CreateClassifier"``

Grants permission to create a classifier

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-CreateClassifier

#### Defined in

actions/glue.ts:150

___

### CreateConnection

• **CreateConnection** = ``"glue:CreateConnection"``

Grants permission to create a connection

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-CreateConnection

#### Defined in

actions/glue.ts:156

___

### CreateCrawler

• **CreateCrawler** = ``"glue:CreateCrawler"``

Grants permission to create a crawler

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-CreateCrawler

#### Defined in

actions/glue.ts:162

___

### CreateCustomEntityType

• **CreateCustomEntityType** = ``"glue:CreateCustomEntityType"``

Grants permission to create a Custom Entity Type

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-sensitive-data-api.html#aws-glue-api-sensitive-data-api-CreateCustomEntityType

#### Defined in

actions/glue.ts:168

___

### CreateDataQualityRuleset

• **CreateDataQualityRuleset** = ``"glue:CreateDataQualityRuleset"``

Grants permission to create a Data Quality ruleset

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-CreateDataQualityRuleset

#### Defined in

actions/glue.ts:174

___

### CreateDatabase

• **CreateDatabase** = ``"glue:CreateDatabase"``

Grants permission to create a database

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-CreateDatabase

#### Defined in

actions/glue.ts:180

___

### CreateDevEndpoint

• **CreateDevEndpoint** = ``"glue:CreateDevEndpoint"``

Grants permission to create a development endpoint

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-CreateDevEndpoint

#### Defined in

actions/glue.ts:186

___

### CreateJob

• **CreateJob** = ``"glue:CreateJob"``

Grants permission to create a job

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-CreateJob

#### Defined in

actions/glue.ts:192

___

### CreateMLTransform

• **CreateMLTransform** = ``"glue:CreateMLTransform"``

Grants permission to create an ML Transform

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CreateMLTransform

#### Defined in

actions/glue.ts:198

___

### CreatePartition

• **CreatePartition** = ``"glue:CreatePartition"``

Grants permission to create a partition

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-CreatePartition

#### Defined in

actions/glue.ts:204

___

### CreatePartitionIndex

• **CreatePartitionIndex** = ``"glue:CreatePartitionIndex"``

Grants permission to create a specified partition index in an existing table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-CreatePartitionIndex

#### Defined in

actions/glue.ts:210

___

### CreateRegistry

• **CreateRegistry** = ``"glue:CreateRegistry"``

Grants permission to create a new schema registry

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CreateRegistry

#### Defined in

actions/glue.ts:216

___

### CreateSchema

• **CreateSchema** = ``"glue:CreateSchema"``

Grants permission to create a new schema container

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CreateSchema

#### Defined in

actions/glue.ts:222

___

### CreateScript

• **CreateScript** = ``"glue:CreateScript"``

Grants permission to create a script

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-CreateScript

#### Defined in

actions/glue.ts:228

___

### CreateSecurityConfiguration

• **CreateSecurityConfiguration** = ``"glue:CreateSecurityConfiguration"``

Grants permission to create a security configuration

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-CreateSecurityConfiguration

#### Defined in

actions/glue.ts:234

___

### CreateSession

• **CreateSession** = ``"glue:CreateSession"``

Grants permission to create an interactive session

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-api-interactive-sessions-CreateSession

#### Defined in

actions/glue.ts:240

___

### CreateTable

• **CreateTable** = ``"glue:CreateTable"``

Grants permission to create a table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-CreateTable

#### Defined in

actions/glue.ts:246

___

### CreateTableOptimizer

• **CreateTableOptimizer** = ``"glue:CreateTableOptimizer"``

Grants permission to create a new table optimizer for a specific function. Comp
action is the only currently supported optimizer type

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-CreateTableOptimizer

#### Defined in

actions/glue.ts:253

___

### CreateTrigger

• **CreateTrigger** = ``"glue:CreateTrigger"``

Grants permission to create a trigger

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-CreateTrigger

#### Defined in

actions/glue.ts:259

___

### CreateUserDefinedFunction

• **CreateUserDefinedFunction** = ``"glue:CreateUserDefinedFunction"``

Grants permission to create a function definition

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-CreateUserDefinedFunction

#### Defined in

actions/glue.ts:265

___

### CreateWorkflow

• **CreateWorkflow** = ``"glue:CreateWorkflow"``

Grants permission to create a workflow

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-CreateWorkflow

#### Defined in

actions/glue.ts:271

___

### DeleteBlueprint

• **DeleteBlueprint** = ``"glue:DeleteBlueprint"``

Grants permission to delete a blueprint

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-DeleteBlueprint

#### Defined in

actions/glue.ts:277

___

### DeleteClassifier

• **DeleteClassifier** = ``"glue:DeleteClassifier"``

Grants permission to delete a classifier

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-DeleteClassifier

#### Defined in

actions/glue.ts:283

___

### DeleteColumnStatisticsForPartition

• **DeleteColumnStatisticsForPartition** = ``"glue:DeleteColumnStatisticsForPartition"``

Grants permission to delete the partition column statistics of a column

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-DeleteColumnStatisticsForPartition

#### Defined in

actions/glue.ts:289

___

### DeleteColumnStatisticsForTable

• **DeleteColumnStatisticsForTable** = ``"glue:DeleteColumnStatisticsForTable"``

Grants permission to delete the table statistics of columns

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteColumnStatisticsForTable

#### Defined in

actions/glue.ts:295

___

### DeleteConnection

• **DeleteConnection** = ``"glue:DeleteConnection"``

Grants permission to delete a connection

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-DeleteConnection

#### Defined in

actions/glue.ts:301

___

### DeleteCrawler

• **DeleteCrawler** = ``"glue:DeleteCrawler"``

Grants permission to delete a crawler

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-DeleteCrawler

#### Defined in

actions/glue.ts:307

___

### DeleteCustomEntityType

• **DeleteCustomEntityType** = ``"glue:DeleteCustomEntityType"``

Grants permission to delete a Custom Entity Type

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-sensitive-data-api.html#aws-glue-api-sensitive-data-api-DeleteCustomEntityType

#### Defined in

actions/glue.ts:313

___

### DeleteDataQualityRuleset

• **DeleteDataQualityRuleset** = ``"glue:DeleteDataQualityRuleset"``

Grants permission to delete a Data Quality ruleset

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-DeleteDataQualityRuleset

#### Defined in

actions/glue.ts:319

___

### DeleteDatabase

• **DeleteDatabase** = ``"glue:DeleteDatabase"``

Grants permission to delete a database

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-DeleteDatabase

#### Defined in

actions/glue.ts:325

___

### DeleteDevEndpoint

• **DeleteDevEndpoint** = ``"glue:DeleteDevEndpoint"``

Grants permission to delete a development endpoint

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-DeleteDevEndpoint

#### Defined in

actions/glue.ts:331

___

### DeleteJob

• **DeleteJob** = ``"glue:DeleteJob"``

Grants permission to delete a job

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-DeleteJob

#### Defined in

actions/glue.ts:337

___

### DeleteMLTransform

• **DeleteMLTransform** = ``"glue:DeleteMLTransform"``

Grants permission to delete an ML Transform

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-DeleteMLTransform

#### Defined in

actions/glue.ts:343

___

### DeletePartition

• **DeletePartition** = ``"glue:DeletePartition"``

Grants permission to delete a partition

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-DeletePartition

#### Defined in

actions/glue.ts:349

___

### DeletePartitionIndex

• **DeletePartitionIndex** = ``"glue:DeletePartitionIndex"``

Grants permission to delete a specified partition index from an existing table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeletePartitionIndex

#### Defined in

actions/glue.ts:355

___

### DeleteRegistry

• **DeleteRegistry** = ``"glue:DeleteRegistry"``

Grants permission to delete a schema registry

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteRegistry

#### Defined in

actions/glue.ts:361

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"glue:DeleteResourcePolicy"``

Grants permission to delete a resource policy

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteResourcePolicy

#### Defined in

actions/glue.ts:367

___

### DeleteSchema

• **DeleteSchema** = ``"glue:DeleteSchema"``

Grants permission to delete a schema container

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteSchema

#### Defined in

actions/glue.ts:373

___

### DeleteSchemaVersions

• **DeleteSchemaVersions** = ``"glue:DeleteSchemaVersions"``

Grants permission to delete a range of schema versions

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteSchemaVersions

#### Defined in

actions/glue.ts:379

___

### DeleteSecurityConfiguration

• **DeleteSecurityConfiguration** = ``"glue:DeleteSecurityConfiguration"``

Grants permission to delete a security configuration

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteSecurityConfiguration

#### Defined in

actions/glue.ts:385

___

### DeleteSession

• **DeleteSession** = ``"glue:DeleteSession"``

Grants permission to delete an interactive session after stopping the session i
f not already stopped

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-DeleteSession

#### Defined in

actions/glue.ts:392

___

### DeleteTable

• **DeleteTable** = ``"glue:DeleteTable"``

Grants permission to delete a table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTable

#### Defined in

actions/glue.ts:398

___

### DeleteTableOptimizer

• **DeleteTableOptimizer** = ``"glue:DeleteTableOptimizer"``

Grants permission to delete an optimizer and all associated metadata for a tabl
e. The optimization will no longer be performed on the table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-DeleteTableOptimizer

#### Defined in

actions/glue.ts:405

___

### DeleteTableVersion

• **DeleteTableVersion** = ``"glue:DeleteTableVersion"``

Grants permission to delete a version of a table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion

#### Defined in

actions/glue.ts:411

___

### DeleteTrigger

• **DeleteTrigger** = ``"glue:DeleteTrigger"``

Grants permission to delete a trigger

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-DeleteTrigger

#### Defined in

actions/glue.ts:417

___

### DeleteUserDefinedFunction

• **DeleteUserDefinedFunction** = ``"glue:DeleteUserDefinedFunction"``

Grants permission to delete a function definition

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-DeleteUserDefinedFunction

#### Defined in

actions/glue.ts:423

___

### DeleteWorkflow

• **DeleteWorkflow** = ``"glue:DeleteWorkflow"``

Grants permission to delete a workflow

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-DeleteWorkflow

#### Defined in

actions/glue.ts:429

___

### DeregisterDataPreview

• **DeregisterDataPreview** = ``"glue:DeregisterDataPreview"``

Grants permission to terminate Glue Studio Notebook session

See https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations

#### Defined in

actions/glue.ts:435

___

### GetBlueprint

• **GetBlueprint** = ``"glue:GetBlueprint"``

Grants permission to retrieve a blueprint

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetBlueprint

#### Defined in

actions/glue.ts:441

___

### GetBlueprintRun

• **GetBlueprintRun** = ``"glue:GetBlueprintRun"``

Grants permission to retrieve a blueprint run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetBlueprintRun

#### Defined in

actions/glue.ts:447

___

### GetBlueprintRuns

• **GetBlueprintRuns** = ``"glue:GetBlueprintRuns"``

Grants permission to retrieve all runs of a blueprint

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetBlueprintRuns

#### Defined in

actions/glue.ts:453

___

### GetCatalogImportStatus

• **GetCatalogImportStatus** = ``"glue:GetCatalogImportStatus"``

Grants permission to retrieve the catalog import status

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-GetCatalogImportStatus

#### Defined in

actions/glue.ts:459

___

### GetClassifier

• **GetClassifier** = ``"glue:GetClassifier"``

Grants permission to retrieve a classifier

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifier

#### Defined in

actions/glue.ts:465

___

### GetClassifiers

• **GetClassifiers** = ``"glue:GetClassifiers"``

Grants permission to list all classifiers

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifiers

#### Defined in

actions/glue.ts:471

___

### GetColumnStatisticsForPartition

• **GetColumnStatisticsForPartition** = ``"glue:GetColumnStatisticsForPartition"``

Grants permission to retrieve partition statistics of columns

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetColumnStatisticsForPartition

#### Defined in

actions/glue.ts:477

___

### GetColumnStatisticsForTable

• **GetColumnStatisticsForTable** = ``"glue:GetColumnStatisticsForTable"``

Grants permission to retrieve table statistics of columns

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetColumnStatisticsForTable

#### Defined in

actions/glue.ts:483

___

### GetColumnStatisticsTaskRun

• **GetColumnStatisticsTaskRun** = ``"glue:GetColumnStatisticsTaskRun"``

Grants permission to retrieve Column Statistics run information for the table b
ased on run-id

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-GetColumnStatisticsTaskRun

#### Defined in

actions/glue.ts:490

___

### GetColumnStatisticsTaskRuns

• **GetColumnStatisticsTaskRuns** = ``"glue:GetColumnStatisticsTaskRuns"``

Grants permission to retrieve Column Statistics run information for the table b
ased on run-ids

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-GetColumnStatisticsTaskRuns

#### Defined in

actions/glue.ts:497

___

### GetCompletion

• **GetCompletion** = ``"glue:GetCompletion"``

Grants permission to get generated response for a completion request in Glue fr
om AWS Q

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api.html#

#### Defined in

actions/glue.ts:504

___

### GetConnection

• **GetConnection** = ``"glue:GetConnection"``

Grants permission to retrieve a connection

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnection

#### Defined in

actions/glue.ts:510

___

### GetConnections

• **GetConnections** = ``"glue:GetConnections"``

Grants permission to retrieve a list of connections

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnections

#### Defined in

actions/glue.ts:516

___

### GetCrawler

• **GetCrawler** = ``"glue:GetCrawler"``

Grants permission to retrieve a crawler

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawler

#### Defined in

actions/glue.ts:522

___

### GetCrawlerMetrics

• **GetCrawlerMetrics** = ``"glue:GetCrawlerMetrics"``

Grants permission to retrieve metrics about crawlers

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlerMetrics

#### Defined in

actions/glue.ts:528

___

### GetCrawlers

• **GetCrawlers** = ``"glue:GetCrawlers"``

Grants permission to retrieve all crawlers

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlers

#### Defined in

actions/glue.ts:534

___

### GetCustomEntityType

• **GetCustomEntityType** = ``"glue:GetCustomEntityType"``

Grants permission to read a Custom Entity Type

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-sensitive-data-api.html#aws-glue-api-sensitive-data-api-GetCustomEntityType

#### Defined in

actions/glue.ts:540

___

### GetDataCatalogEncryptionSettings

• **GetDataCatalogEncryptionSettings** = ``"glue:GetDataCatalogEncryptionSettings"``

Grants permission to retrieve catalog encryption settings

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetDataCatalogEncryptionSettings

#### Defined in

actions/glue.ts:546

___

### GetDataPreviewStatement

• **GetDataPreviewStatement** = ``"glue:GetDataPreviewStatement"``

Grants permission to get Data Preview Statement

See https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations

#### Defined in

actions/glue.ts:552

___

### GetDataQualityResult

• **GetDataQualityResult** = ``"glue:GetDataQualityResult"``

Grants permission to retrieve a Data Quality result

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-GetDataQualityResult

#### Defined in

actions/glue.ts:558

___

### GetDataQualityRuleRecommendationRun

• **GetDataQualityRuleRecommendationRun** = ``"glue:GetDataQualityRuleRecommendationRun"``

Grants permission to retrieve a Data Quality rule recommendation run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-GetDataQualityRuleRecommendationRun

#### Defined in

actions/glue.ts:564

___

### GetDataQualityRuleset

• **GetDataQualityRuleset** = ``"glue:GetDataQualityRuleset"``

Grants permission to retrieve a Data Quality ruleset

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-GetDataQualityRuleset

#### Defined in

actions/glue.ts:570

___

### GetDataQualityRulesetEvaluationRun

• **GetDataQualityRulesetEvaluationRun** = ``"glue:GetDataQualityRulesetEvaluationRun"``

Grants permission to retrieve a Data Quality rule recommendation run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-GetDataQualityRulesetEvaluationRun

#### Defined in

actions/glue.ts:576

___

### GetDatabase

• **GetDatabase** = ``"glue:GetDatabase"``

Grants permission to retrieve a database

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabase

#### Defined in

actions/glue.ts:582

___

### GetDatabases

• **GetDatabases** = ``"glue:GetDatabases"``

Grants permission to retrieve all databases

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabases

#### Defined in

actions/glue.ts:588

___

### GetDataflowGraph

• **GetDataflowGraph** = ``"glue:GetDataflowGraph"``

Grants permission to transform a script into a directed acyclic graph (DAG)

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetDataflowGraph

#### Defined in

actions/glue.ts:594

___

### GetDevEndpoint

• **GetDevEndpoint** = ``"glue:GetDevEndpoint"``

Grants permission to retrieve a development endpoint

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoint

#### Defined in

actions/glue.ts:600

___

### GetDevEndpoints

• **GetDevEndpoints** = ``"glue:GetDevEndpoints"``

Grants permission to retrieve all development endpoints

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoints

#### Defined in

actions/glue.ts:606

___

### GetJob

• **GetJob** = ``"glue:GetJob"``

Grants permission to retrieve a job

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJob

#### Defined in

actions/glue.ts:612

___

### GetJobBookmark

• **GetJobBookmark** = ``"glue:GetJobBookmark"``

Grants permission to retrieve a job bookmark

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-job-GetJobBookmark

#### Defined in

actions/glue.ts:618

___

### GetJobRun

• **GetJobRun** = ``"glue:GetJobRun"``

Grants permission to retrieve a job run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRun

#### Defined in

actions/glue.ts:624

___

### GetJobRuns

• **GetJobRuns** = ``"glue:GetJobRuns"``

Grants permission to retrieve all job runs of a job

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRuns

#### Defined in

actions/glue.ts:630

___

### GetJobs

• **GetJobs** = ``"glue:GetJobs"``

Grants permission to retrieve all current jobs

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJobs

#### Defined in

actions/glue.ts:636

___

### GetMLTaskRun

• **GetMLTaskRun** = ``"glue:GetMLTaskRun"``

Grants permission to retrieve an ML Task Run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRun

#### Defined in

actions/glue.ts:642

___

### GetMLTaskRuns

• **GetMLTaskRuns** = ``"glue:GetMLTaskRuns"``

Grants permission to retrieve all ML Task Runs

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRuns

#### Defined in

actions/glue.ts:648

___

### GetMLTransform

• **GetMLTransform** = ``"glue:GetMLTransform"``

Grants permission to retrieve an ML Transform

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransform

#### Defined in

actions/glue.ts:654

___

### GetMLTransforms

• **GetMLTransforms** = ``"glue:GetMLTransforms"``

Grants permission to retrieve all ML Transforms

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransforms

#### Defined in

actions/glue.ts:660

___

### GetMapping

• **GetMapping** = ``"glue:GetMapping"``

Grants permission to create a mapping

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetMapping

#### Defined in

actions/glue.ts:666

___

### GetNotebookInstanceStatus

• **GetNotebookInstanceStatus** = ``"glue:GetNotebookInstanceStatus"``

Grants permission to retrieve Glue Studio Notebooks session status

See https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations

#### Defined in

actions/glue.ts:672

___

### GetPartition

• **GetPartition** = ``"glue:GetPartition"``

Grants permission to retrieve a partition

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartition

#### Defined in

actions/glue.ts:678

___

### GetPartitionIndexes

• **GetPartitionIndexes** = ``"glue:GetPartitionIndexes"``

Grants permission to retrieve partition indexes for a table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetPartitionIndexes

#### Defined in

actions/glue.ts:684

___

### GetPartitions

• **GetPartitions** = ``"glue:GetPartitions"``

Grants permission to retrieve the partitions of a table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartitions

#### Defined in

actions/glue.ts:690

___

### GetPlan

• **GetPlan** = ``"glue:GetPlan"``

Grants permission to retrieve a mapping for a script

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetPlan

#### Defined in

actions/glue.ts:696

___

### GetRegistry

• **GetRegistry** = ``"glue:GetRegistry"``

Grants permission to retrieve a schema registry

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetRegistry

#### Defined in

actions/glue.ts:702

___

### GetResourcePolicies

• **GetResourcePolicies** = ``"glue:GetResourcePolicies"``

Grants permission to retrieve resource policies

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetResourcePolicies

#### Defined in

actions/glue.ts:708

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"glue:GetResourcePolicy"``

Grants permission to retrieve a resource policy

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetResourcePolicy

#### Defined in

actions/glue.ts:714

___

### GetSchema

• **GetSchema** = ``"glue:GetSchema"``

Grants permission to retrieve a schema container

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchema

#### Defined in

actions/glue.ts:720

___

### GetSchemaByDefinition

• **GetSchemaByDefinition** = ``"glue:GetSchemaByDefinition"``

Grants permission to retrieve a schema version based on schema definition

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaByDefinition

#### Defined in

actions/glue.ts:726

___

### GetSchemaVersion

• **GetSchemaVersion** = ``"glue:GetSchemaVersion"``

Grants permission to retrieve a schema version

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaVersion

#### Defined in

actions/glue.ts:732

___

### GetSchemaVersionsDiff

• **GetSchemaVersionsDiff** = ``"glue:GetSchemaVersionsDiff"``

Grants permission to compare two schema versions in schema registry

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaVersionsDiff

#### Defined in

actions/glue.ts:738

___

### GetSecurityConfiguration

• **GetSecurityConfiguration** = ``"glue:GetSecurityConfiguration"``

Grants permission to retrieve a security configuration

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfiguration

#### Defined in

actions/glue.ts:744

___

### GetSecurityConfigurations

• **GetSecurityConfigurations** = ``"glue:GetSecurityConfigurations"``

Grants permission to retrieve one or more security configurations

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfigurations

#### Defined in

actions/glue.ts:750

___

### GetSession

• **GetSession** = ``"glue:GetSession"``

Grants permission to retrieve an interactive session

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-GetSession

#### Defined in

actions/glue.ts:756

___

### GetStatement

• **GetStatement** = ``"glue:GetStatement"``

Grants permission to retrieve result and information about a statement in an in
teractive session

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-GetStatement

#### Defined in

actions/glue.ts:763

___

### GetTable

• **GetTable** = ``"glue:GetTable"``

Grants permission to retrieve a table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTable

#### Defined in

actions/glue.ts:769

___

### GetTableOptimizer

• **GetTableOptimizer** = ``"glue:GetTableOptimizer"``

Grants permission to return the configuration of all optimizers associated with
a specified table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-GetTableOptimizer

#### Defined in

actions/glue.ts:776

___

### GetTableVersion

• **GetTableVersion** = ``"glue:GetTableVersion"``

Grants permission to retrieve a version of a table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersion

#### Defined in

actions/glue.ts:782

___

### GetTableVersions

• **GetTableVersions** = ``"glue:GetTableVersions"``

Grants permission to retrieve a list of versions of a table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersions

#### Defined in

actions/glue.ts:788

___

### GetTables

• **GetTables** = ``"glue:GetTables"``

Grants permission to retrieve the tables in a database

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTables

#### Defined in

actions/glue.ts:794

___

### GetTags

• **GetTags** = ``"glue:GetTags"``

Grants permission to retrieve all tags associated with a resource

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource

#### Defined in

actions/glue.ts:800

___

### GetTrigger

• **GetTrigger** = ``"glue:GetTrigger"``

Grants permission to retrieve a trigger

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTrigger

#### Defined in

actions/glue.ts:806

___

### GetTriggers

• **GetTriggers** = ``"glue:GetTriggers"``

Grants permission to retrieve the triggers associated with a job

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTriggers

#### Defined in

actions/glue.ts:812

___

### GetUserDefinedFunction

• **GetUserDefinedFunction** = ``"glue:GetUserDefinedFunction"``

Grants permission to retrieve a function definition

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunction

#### Defined in

actions/glue.ts:818

___

### GetUserDefinedFunctions

• **GetUserDefinedFunctions** = ``"glue:GetUserDefinedFunctions"``

Grants permission to retrieve multiple function definitions

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunctions

#### Defined in

actions/glue.ts:824

___

### GetWorkflow

• **GetWorkflow** = ``"glue:GetWorkflow"``

Grants permission to retrieve a workflow

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflow

#### Defined in

actions/glue.ts:830

___

### GetWorkflowRun

• **GetWorkflowRun** = ``"glue:GetWorkflowRun"``

Grants permission to retrieve a workflow run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRun

#### Defined in

actions/glue.ts:836

___

### GetWorkflowRunProperties

• **GetWorkflowRunProperties** = ``"glue:GetWorkflowRunProperties"``

Grants permission to retrieve workflow run properties

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRunProperties

#### Defined in

actions/glue.ts:842

___

### GetWorkflowRuns

• **GetWorkflowRuns** = ``"glue:GetWorkflowRuns"``

Grants permission to retrieve all runs of a workflow

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRuns

#### Defined in

actions/glue.ts:848

___

### GlueNotebookAuthorize

• **GlueNotebookAuthorize** = ``"glue:GlueNotebookAuthorize"``

Grants permission to access Glue Studio Notebooks

See https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations

#### Defined in

actions/glue.ts:854

___

### GlueNotebookRefreshCredentials

• **GlueNotebookRefreshCredentials** = ``"glue:GlueNotebookRefreshCredentials"``

Grants permission to refresh Glue Studio Notebooks credentials

See https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations

#### Defined in

actions/glue.ts:860

___

### ImportCatalogToGlue

• **ImportCatalogToGlue** = ``"glue:ImportCatalogToGlue"``

Grants permission to import an Athena data catalog into AWS Glue

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-ImportCatalogToGlue

#### Defined in

actions/glue.ts:866

___

### ListBlueprints

• **ListBlueprints** = ``"glue:ListBlueprints"``

Grants permission to retrieve all blueprints

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ListBlueprints

#### Defined in

actions/glue.ts:872

___

### ListColumnStatisticsTaskRuns

• **ListColumnStatisticsTaskRuns** = ``"glue:ListColumnStatisticsTaskRuns"``

Grants permission to list all Column Statistics run-ids that have been executed
for the account

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-ListColumnStatisticsTaskRuns

#### Defined in

actions/glue.ts:879

___

### ListCrawlers

• **ListCrawlers** = ``"glue:ListCrawlers"``

Grants permission to retrieve all crawlers

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-ListCrawlers

#### Defined in

actions/glue.ts:885

___

### ListCrawls

• **ListCrawls** = ``"glue:ListCrawls"``

Grants permission to retrieve crawl run history for a crawler

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-ListCrawls

#### Defined in

actions/glue.ts:891

___

### ListCustomEntityTypes

• **ListCustomEntityTypes** = ``"glue:ListCustomEntityTypes"``

Grants permission to retrieve all Custom Entity Types

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-sensitive-data-api.html#aws-glue-api-sensitive-data-api-ListGetCustomEntityTypes

#### Defined in

actions/glue.ts:897

___

### ListDataQualityResults

• **ListDataQualityResults** = ``"glue:ListDataQualityResults"``

Grants permission to retrieve all Data Quality results

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-ListDataQualityResults

#### Defined in

actions/glue.ts:903

___

### ListDataQualityRuleRecommendationRuns

• **ListDataQualityRuleRecommendationRuns** = ``"glue:ListDataQualityRuleRecommendationRuns"``

Grants permission to retrieve all Data Quality rule recommendation runs

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-ListDataQualityRuleRecommendationRuns

#### Defined in

actions/glue.ts:909

___

### ListDataQualityRulesetEvaluationRuns

• **ListDataQualityRulesetEvaluationRuns** = ``"glue:ListDataQualityRulesetEvaluationRuns"``

Grants permission to retrieve all Data Quality rule recommendation runs

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-ListDataQualityRulesetEvaluationRuns

#### Defined in

actions/glue.ts:915

___

### ListDataQualityRulesets

• **ListDataQualityRulesets** = ``"glue:ListDataQualityRulesets"``

Grants permission to retrieve a list of Data Quality rulesets

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-ListDataQualityRulesets

#### Defined in

actions/glue.ts:921

___

### ListDevEndpoints

• **ListDevEndpoints** = ``"glue:ListDevEndpoints"``

Grants permission to retrieve all development endpoints

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-ListDevEndpoints

#### Defined in

actions/glue.ts:927

___

### ListJobs

• **ListJobs** = ``"glue:ListJobs"``

Grants permission to retrieve all current jobs

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-ListJobs

#### Defined in

actions/glue.ts:933

___

### ListMLTransforms

• **ListMLTransforms** = ``"glue:ListMLTransforms"``

Grants permission to retrieve all ML Transforms

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-ListMLTransforms

#### Defined in

actions/glue.ts:939

___

### ListRegistries

• **ListRegistries** = ``"glue:ListRegistries"``

Grants permission to retrieve a list of schema registries

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListRegistries

#### Defined in

actions/glue.ts:945

___

### ListSchemaVersions

• **ListSchemaVersions** = ``"glue:ListSchemaVersions"``

Grants permission to retrieve a list of schema versions

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListSchemaVersions

#### Defined in

actions/glue.ts:951

___

### ListSchemas

• **ListSchemas** = ``"glue:ListSchemas"``

Grants permission to retrieve a list of schema containers

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListSchemas

#### Defined in

actions/glue.ts:957

___

### ListSessions

• **ListSessions** = ``"glue:ListSessions"``

Grants permission to retrieve a list of interactive session

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-ListSessions

#### Defined in

actions/glue.ts:963

___

### ListStatements

• **ListStatements** = ``"glue:ListStatements"``

Grants permission to retrieve a list of statements in an interactive session

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-ListStatements

#### Defined in

actions/glue.ts:969

___

### ListTableOptimizerRuns

• **ListTableOptimizerRuns** = ``"glue:ListTableOptimizerRuns"``

Grants permission to list the history of previous optimizer runs for a specific
table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-ListTableOptimizerRuns

#### Defined in

actions/glue.ts:976

___

### ListTriggers

• **ListTriggers** = ``"glue:ListTriggers"``

Grants permission to retrieve all triggers

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-ListTriggers

#### Defined in

actions/glue.ts:982

___

### ListWorkflows

• **ListWorkflows** = ``"glue:ListWorkflows"``

Grants permission to retrieve all workflows

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ListWorkflows

#### Defined in

actions/glue.ts:988

___

### NotifyEvent

• **NotifyEvent** = ``"glue:NotifyEvent"``

Grants permission to notify an event to the event-driven workflow

See https://docs.aws.amazon.com/glue/latest/dg/starting-workflow-eventbridge.html

#### Defined in

actions/glue.ts:994

___

### PassConnection

• **PassConnection** = ``"glue:PassConnection"``

Grants permission to pass glue connection name in input for APIs that require t
hem

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-CreateConnection

#### Defined in

actions/glue.ts:1001

___

### PublishDataQuality

• **PublishDataQuality** = ``"glue:PublishDataQuality"``

Grants permission to publish Data Quality results

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html

#### Defined in

actions/glue.ts:1007

___

### PutDataCatalogEncryptionSettings

• **PutDataCatalogEncryptionSettings** = ``"glue:PutDataCatalogEncryptionSettings"``

Grants permission to update catalog encryption settings

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutDataCatalogEncryptionSettings

#### Defined in

actions/glue.ts:1013

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"glue:PutResourcePolicy"``

Grants permission to update a resource policy

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutResourcePolicy

#### Defined in

actions/glue.ts:1019

___

### PutSchemaVersionMetadata

• **PutSchemaVersionMetadata** = ``"glue:PutSchemaVersionMetadata"``

Grants permission to add metadata to schema version

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-PutSchemaVersionMetadata

#### Defined in

actions/glue.ts:1025

___

### PutWorkflowRunProperties

• **PutWorkflowRunProperties** = ``"glue:PutWorkflowRunProperties"``

Grants permission to update workflow run properties

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-PutWorkflowRunProperties

#### Defined in

actions/glue.ts:1031

___

### QuerySchemaVersionMetadata

• **QuerySchemaVersionMetadata** = ``"glue:QuerySchemaVersionMetadata"``

Grants permission to fetch metadata for a schema version

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-QuerySchemaVersionMetadata

#### Defined in

actions/glue.ts:1037

___

### RegisterSchemaVersion

• **RegisterSchemaVersion** = ``"glue:RegisterSchemaVersion"``

Grants permission to create a new schema version

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-RegisterSchemaVersion

#### Defined in

actions/glue.ts:1043

___

### RemoveSchemaVersionMetadata

• **RemoveSchemaVersionMetadata** = ``"glue:RemoveSchemaVersionMetadata"``

Grants permission to remove metadata from schema version

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-RemoveSchemaVersionMetadata

#### Defined in

actions/glue.ts:1049

___

### ResetJobBookmark

• **ResetJobBookmark** = ``"glue:ResetJobBookmark"``

Grants permission to reset a job bookmark

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-ResetJobBookmark

#### Defined in

actions/glue.ts:1055

___

### ResumeWorkflowRun

• **ResumeWorkflowRun** = ``"glue:ResumeWorkflowRun"``

Grants permission to resume a workflow run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ResumeWorkflowRun

#### Defined in

actions/glue.ts:1061

___

### RunDataPreviewStatement

• **RunDataPreviewStatement** = ``"glue:RunDataPreviewStatement"``

Grants permission to run Data Preview Statement

See https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations

#### Defined in

actions/glue.ts:1067

___

### RunStatement

• **RunStatement** = ``"glue:RunStatement"``

Grants permission to run a code or statement in an interactive session

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-RunStatement

#### Defined in

actions/glue.ts:1073

___

### SearchTables

• **SearchTables** = ``"glue:SearchTables"``

Grants permission to retrieve the tables in the catalog

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-SearchTables

#### Defined in

actions/glue.ts:1079

___

### SendFeedback

• **SendFeedback** = ``"glue:SendFeedback"``

Grants permission to provide feedback about a glue completion experience in AWS
Q

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api.html#

#### Defined in

actions/glue.ts:1086

___

### StartBlueprintRun

• **StartBlueprintRun** = ``"glue:StartBlueprintRun"``

Grants permission to start running a blueprint

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StartBlueprintRun

#### Defined in

actions/glue.ts:1092

___

### StartColumnStatisticsTaskRun

• **StartColumnStatisticsTaskRun** = ``"glue:StartColumnStatisticsTaskRun"``

Grants permission to start a run for generating Column Statistics for the table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-StartColumnStatisticsTaskRun

#### Defined in

actions/glue.ts:1098

___

### StartCompletion

• **StartCompletion** = ``"glue:StartCompletion"``

Grants permission to create a completion request in Glue for AWS Q experience

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api.html#

#### Defined in

actions/glue.ts:1104

___

### StartCrawler

• **StartCrawler** = ``"glue:StartCrawler"``

Grants permission to start a crawler

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StartCrawler

#### Defined in

actions/glue.ts:1110

___

### StartCrawlerSchedule

• **StartCrawlerSchedule** = ``"glue:StartCrawlerSchedule"``

Grants permission to change the schedule state of a crawler to SCHEDULED

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StartCrawlerSchedule

#### Defined in

actions/glue.ts:1116

___

### StartDataQualityRuleRecommendationRun

• **StartDataQualityRuleRecommendationRun** = ``"glue:StartDataQualityRuleRecommendationRun"``

Grants permission to start a Data Quality rule recommendation run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-StartDataQualityRuleRecommendationRun

#### Defined in

actions/glue.ts:1122

___

### StartDataQualityRulesetEvaluationRun

• **StartDataQualityRulesetEvaluationRun** = ``"glue:StartDataQualityRulesetEvaluationRun"``

Grants permission to start a Data Quality rule recommendation run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-StartDataQualityRulesetEvaluationRun

#### Defined in

actions/glue.ts:1128

___

### StartExportLabelsTaskRun

• **StartExportLabelsTaskRun** = ``"glue:StartExportLabelsTaskRun"``

Grants permission to start an Export Labels ML Task Run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartExportLabelsTaskRun

#### Defined in

actions/glue.ts:1134

___

### StartImportLabelsTaskRun

• **StartImportLabelsTaskRun** = ``"glue:StartImportLabelsTaskRun"``

Grants permission to start an Import Labels ML Task Run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartImportLabelsTaskRun

#### Defined in

actions/glue.ts:1140

___

### StartJobRun

• **StartJobRun** = ``"glue:StartJobRun"``

Grants permission to start running a job

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-StartJobRun

#### Defined in

actions/glue.ts:1146

___

### StartMLEvaluationTaskRun

• **StartMLEvaluationTaskRun** = ``"glue:StartMLEvaluationTaskRun"``

Grants permission to start an Evaluation ML Task Run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLEvaluationTaskRun

#### Defined in

actions/glue.ts:1152

___

### StartMLLabelingSetGenerationTaskRun

• **StartMLLabelingSetGenerationTaskRun** = ``"glue:StartMLLabelingSetGenerationTaskRun"``

Grants permission to start a Labeling Set Generation ML Task Run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLLabelingSetGenerationTaskRun

#### Defined in

actions/glue.ts:1158

___

### StartNotebook

• **StartNotebook** = ``"glue:StartNotebook"``

Grants permission to start Glue Studio Notebooks

See https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations

#### Defined in

actions/glue.ts:1164

___

### StartTrigger

• **StartTrigger** = ``"glue:StartTrigger"``

Grants permission to start a trigger

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StartTrigger

#### Defined in

actions/glue.ts:1170

___

### StartWorkflowRun

• **StartWorkflowRun** = ``"glue:StartWorkflowRun"``

Grants permission to start running a workflow

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StartWorkflowRun

#### Defined in

actions/glue.ts:1176

___

### StopColumnStatisticsTaskRun

• **StopColumnStatisticsTaskRun** = ``"glue:StopColumnStatisticsTaskRun"``

Grants permission to stop execution for Column Statistics run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-StopColumnStatisticsTaskRun

#### Defined in

actions/glue.ts:1182

___

### StopCrawler

• **StopCrawler** = ``"glue:StopCrawler"``

Grants permission to stop a running crawler

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StopCrawler

#### Defined in

actions/glue.ts:1188

___

### StopCrawlerSchedule

• **StopCrawlerSchedule** = ``"glue:StopCrawlerSchedule"``

Grants permission to set the schedule state of a crawler to NOT_SCHEDULED

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StopCrawlerSchedule

#### Defined in

actions/glue.ts:1194

___

### StopSession

• **StopSession** = ``"glue:StopSession"``

Grants permission to stop an interactive session

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-StopSession

#### Defined in

actions/glue.ts:1200

___

### StopTrigger

• **StopTrigger** = ``"glue:StopTrigger"``

Grants permission to stop a trigger

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StopTrigger

#### Defined in

actions/glue.ts:1206

___

### StopWorkflowRun

• **StopWorkflowRun** = ``"glue:StopWorkflowRun"``

Grants permission to stop a workflow run

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StopWorkflowRun

#### Defined in

actions/glue.ts:1212

___

### TagResource

• **TagResource** = ``"glue:TagResource"``

Grants permission to add tags to a resource

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-TagResource

#### Defined in

actions/glue.ts:1218

___

### TerminateNotebook

• **TerminateNotebook** = ``"glue:TerminateNotebook"``

Grants permission to terminate Glue Studio Notebooks

See https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations

#### Defined in

actions/glue.ts:1224

___

### TestConnection

• **TestConnection** = ``"glue:TestConnection"``

Grants permission to test connection in Glue Studio

See https://docs.aws.amazon.com/glue/latest/dg/console-test-connections.html

#### Defined in

actions/glue.ts:1230

___

### UntagResource

• **UntagResource** = ``"glue:UntagResource"``

Grants permission to remove tags associated with a resource

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource

#### Defined in

actions/glue.ts:1236

___

### UpdateBlueprint

• **UpdateBlueprint** = ``"glue:UpdateBlueprint"``

Grants permission to update a blueprint

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-UpdateBlueprint

#### Defined in

actions/glue.ts:1242

___

### UpdateClassifier

• **UpdateClassifier** = ``"glue:UpdateClassifier"``

Grants permission to update a classifier

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-UpdateClassifier

#### Defined in

actions/glue.ts:1248

___

### UpdateColumnStatisticsForPartition

• **UpdateColumnStatisticsForPartition** = ``"glue:UpdateColumnStatisticsForPartition"``

Grants permission to update partition statistics of columns

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-UpdateColumnStatisticsForPartition

#### Defined in

actions/glue.ts:1254

___

### UpdateColumnStatisticsForTable

• **UpdateColumnStatisticsForTable** = ``"glue:UpdateColumnStatisticsForTable"``

Grants permission to update table statistics of columns

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-UpdateColumnStatisticsForTable

#### Defined in

actions/glue.ts:1260

___

### UpdateConnection

• **UpdateConnection** = ``"glue:UpdateConnection"``

Grants permission to update a connection

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-UpdateConnection

#### Defined in

actions/glue.ts:1266

___

### UpdateCrawler

• **UpdateCrawler** = ``"glue:UpdateCrawler"``

Grants permission to update a crawler

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-UpdateCrawler

#### Defined in

actions/glue.ts:1272

___

### UpdateCrawlerSchedule

• **UpdateCrawlerSchedule** = ``"glue:UpdateCrawlerSchedule"``

Grants permission to update the schedule of a crawler

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-UpdateCrawlerSchedule

#### Defined in

actions/glue.ts:1278

___

### UpdateDataQualityRuleset

• **UpdateDataQualityRuleset** = ``"glue:UpdateDataQualityRuleset"``

Grants permission to update a Data Quality ruleset

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-UpdateDataQualityRuleset

#### Defined in

actions/glue.ts:1284

___

### UpdateDatabase

• **UpdateDatabase** = ``"glue:UpdateDatabase"``

Grants permission to update a database

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-UpdateDatabase

#### Defined in

actions/glue.ts:1290

___

### UpdateDevEndpoint

• **UpdateDevEndpoint** = ``"glue:UpdateDevEndpoint"``

Grants permission to update a development endpoint

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-UpdateDevEndpoint

#### Defined in

actions/glue.ts:1296

___

### UpdateJob

• **UpdateJob** = ``"glue:UpdateJob"``

Grants permission to update a job

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-UpdateJob

#### Defined in

actions/glue.ts:1302

___

### UpdateJobFromSourceControl

• **UpdateJobFromSourceControl** = ``"glue:UpdateJobFromSourceControl"``

Grants permission to update a job from source control provider

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-UpdateJobFromSourceControl

#### Defined in

actions/glue.ts:1308

___

### UpdateMLTransform

• **UpdateMLTransform** = ``"glue:UpdateMLTransform"``

Grants permission to update an ML Transform

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-UpdateMLTransform

#### Defined in

actions/glue.ts:1314

___

### UpdatePartition

• **UpdatePartition** = ``"glue:UpdatePartition"``

Grants permission to update a partition

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-UpdatePartition

#### Defined in

actions/glue.ts:1320

___

### UpdateRegistry

• **UpdateRegistry** = ``"glue:UpdateRegistry"``

Grants permission to update a schema registry

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-UpdateRegistry

#### Defined in

actions/glue.ts:1326

___

### UpdateSchema

• **UpdateSchema** = ``"glue:UpdateSchema"``

Grants permission to update a schema container

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-UpdateSchema

#### Defined in

actions/glue.ts:1332

___

### UpdateSourceControlFromJob

• **UpdateSourceControlFromJob** = ``"glue:UpdateSourceControlFromJob"``

Grants permission to update source control provider from a job

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-UpdateSourceControlFromJob

#### Defined in

actions/glue.ts:1338

___

### UpdateTable

• **UpdateTable** = ``"glue:UpdateTable"``

Grants permission to update a table

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-UpdateTable

#### Defined in

actions/glue.ts:1344

___

### UpdateTableOptimizer

• **UpdateTableOptimizer** = ``"glue:UpdateTableOptimizer"``

Grants permission to update the configuration for an existing table optimizer

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-UpdateTableOptimizer

#### Defined in

actions/glue.ts:1350

___

### UpdateTrigger

• **UpdateTrigger** = ``"glue:UpdateTrigger"``

Grants permission to update a trigger

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-UpdateTrigger

#### Defined in

actions/glue.ts:1356

___

### UpdateUserDefinedFunction

• **UpdateUserDefinedFunction** = ``"glue:UpdateUserDefinedFunction"``

Grants permission to update a function definition

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-UpdateUserDefinedFunction

#### Defined in

actions/glue.ts:1362

___

### UpdateWorkflow

• **UpdateWorkflow** = ``"glue:UpdateWorkflow"``

Grants permission to update a workflow

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-UpdateWorkflow

#### Defined in

actions/glue.ts:1368

___

### UseGlueStudio

• **UseGlueStudio** = ``"glue:UseGlueStudio"``

Grants permission to use Glue Studio and access its internal APIs

See https://docs.aws.amazon.com/glue/latest/ug/setting-up.html#getting-started-min-privs

#### Defined in

actions/glue.ts:1374

___

### UseMLTransforms

• **UseMLTransforms** = ``"glue:UseMLTransforms"``

Grants permission to use an ML Transform from within a Glue ETL Script

See https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html

#### Defined in

actions/glue.ts:1380
