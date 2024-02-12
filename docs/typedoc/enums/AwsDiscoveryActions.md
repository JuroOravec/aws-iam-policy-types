[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDiscoveryActions

# Enumeration: AwsDiscoveryActions

All IAM policy actions for AWS Application Discovery Service (DISCOVERY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationdiscoveryservice.html

2024-02-12T09:56:03.663Z

## Table of contents

### Enumeration Members

- [AssociateConfigurationItemsToApplication](AwsDiscoveryActions.md#associateconfigurationitemstoapplication)
- [BatchDeleteAgents](AwsDiscoveryActions.md#batchdeleteagents)
- [BatchDeleteImportData](AwsDiscoveryActions.md#batchdeleteimportdata)
- [CreateApplication](AwsDiscoveryActions.md#createapplication)
- [CreateTags](AwsDiscoveryActions.md#createtags)
- [DeleteApplications](AwsDiscoveryActions.md#deleteapplications)
- [DeleteTags](AwsDiscoveryActions.md#deletetags)
- [DescribeAgents](AwsDiscoveryActions.md#describeagents)
- [DescribeBatchDeleteConfigurationTask](AwsDiscoveryActions.md#describebatchdeleteconfigurationtask)
- [DescribeConfigurations](AwsDiscoveryActions.md#describeconfigurations)
- [DescribeContinuousExports](AwsDiscoveryActions.md#describecontinuousexports)
- [DescribeExportConfigurations](AwsDiscoveryActions.md#describeexportconfigurations)
- [DescribeExportTasks](AwsDiscoveryActions.md#describeexporttasks)
- [DescribeImportTasks](AwsDiscoveryActions.md#describeimporttasks)
- [DescribeTags](AwsDiscoveryActions.md#describetags)
- [DisassociateConfigurationItemsFromApplication](AwsDiscoveryActions.md#disassociateconfigurationitemsfromapplication)
- [ExportConfigurations](AwsDiscoveryActions.md#exportconfigurations)
- [GetDiscoverySummary](AwsDiscoveryActions.md#getdiscoverysummary)
- [GetNetworkConnectionGraph](AwsDiscoveryActions.md#getnetworkconnectiongraph)
- [ListConfigurations](AwsDiscoveryActions.md#listconfigurations)
- [ListServerNeighbors](AwsDiscoveryActions.md#listserverneighbors)
- [StartBatchDeleteConfigurationTask](AwsDiscoveryActions.md#startbatchdeleteconfigurationtask)
- [StartContinuousExport](AwsDiscoveryActions.md#startcontinuousexport)
- [StartDataCollectionByAgentIds](AwsDiscoveryActions.md#startdatacollectionbyagentids)
- [StartExportTask](AwsDiscoveryActions.md#startexporttask)
- [StartImportTask](AwsDiscoveryActions.md#startimporttask)
- [StopContinuousExport](AwsDiscoveryActions.md#stopcontinuousexport)
- [StopDataCollectionByAgentIds](AwsDiscoveryActions.md#stopdatacollectionbyagentids)
- [UpdateApplication](AwsDiscoveryActions.md#updateapplication)

## Enumeration Members

### AssociateConfigurationItemsToApplication

• **AssociateConfigurationItemsToApplication** = ``"discovery:AssociateConfigurationItemsToApplication"``

Grants permission to AssociateConfigurationItemsToApplication API. AssociateCon
figurationItemsToApplication associates one or more configuration items with an
application

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_AssociateConfigurationItemsToApplication.html

#### Defined in

actions/discovery.ts:19

___

### BatchDeleteAgents

• **BatchDeleteAgents** = ``"discovery:BatchDeleteAgents"``

Grants permission to BatchDeleteAgents API. BatchDeleteAgents deletes one or mo
re agents/data collectors associated with your account, each identified by its
agent ID. Deleting a data collector does not delete the previous data collected

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_BatchDeleteAgents.html

#### Defined in

actions/discovery.ts:27

___

### BatchDeleteImportData

• **BatchDeleteImportData** = ``"discovery:BatchDeleteImportData"``

Grants permission to BatchDeleteImportData API. BatchDeleteImportData deletes o
ne or more Migration Hub import tasks, each identified by their import ID. Each
import task has a number of records, which can identify servers or applications

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_BatchDeleteImportData.html

#### Defined in

actions/discovery.ts:35

___

### CreateApplication

• **CreateApplication** = ``"discovery:CreateApplication"``

Grants permission to CreateApplication API. CreateApplication creates an applic
ation with the given name and description

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_CreateApplication.html

#### Defined in

actions/discovery.ts:42

___

### CreateTags

• **CreateTags** = ``"discovery:CreateTags"``

Grants permission to CreateTags API. CreateTags creates one or more tags for co
nfiguration items. Tags are metadata that help you categorize IT assets. This A
PI accepts a list of multiple configuration items

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_CreateTags.html

#### Defined in

actions/discovery.ts:50

___

### DeleteApplications

• **DeleteApplications** = ``"discovery:DeleteApplications"``

Grants permission to DeleteApplications API. DeleteApplications deletes a list
of applications and their associations with configuration items

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DeleteApplications.html

#### Defined in

actions/discovery.ts:57

___

### DeleteTags

• **DeleteTags** = ``"discovery:DeleteTags"``

Grants permission to DeleteTags API. DeleteTags deletes the association between
configuration items and one or more tags. This API accepts a list of multiple c
onfiguration items

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DeleteTags.html

#### Defined in

actions/discovery.ts:65

___

### DescribeAgents

• **DescribeAgents** = ``"discovery:DescribeAgents"``

Grants permission to DescribeAgents API. DescribeAgents lists agents or the Con
nector by ID or lists all agents/Connectors associated with your user if you di
d not specify an ID

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeAgents.html

#### Defined in

actions/discovery.ts:73

___

### DescribeBatchDeleteConfigurationTask

• **DescribeBatchDeleteConfigurationTask** = ``"discovery:DescribeBatchDeleteConfigurationTask"``

Grants permission to DescribeBatchDeleteConfigurationTask API. DescribeBatchDel
eteConfigurationTask returns attributes about a batched deletion task to delete
a set of configuration items. The supplied task ID should be the task ID receie
ved from the output of StartBatchDeleteConfigurationTask

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeBatchDeleteConfigurationTask.html

#### Defined in

actions/discovery.ts:82

___

### DescribeConfigurations

• **DescribeConfigurations** = ``"discovery:DescribeConfigurations"``

Grants permission to DescribeConfigurations API. DescribeConfigurations retriev
es attributes for a list of configuration item IDs. All of the supplied IDs mus
t be for the same asset type (server, application, process, or connection). Out
put fields are specific to the asset type selected. For example, the output for
a server configuration item includes a list of attributes about the server, suc
h as host name, operating system, and number of network cards

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeConfigurations.html

#### Defined in

actions/discovery.ts:93

___

### DescribeContinuousExports

• **DescribeContinuousExports** = ``"discovery:DescribeContinuousExports"``

Grants permission to DescribeContinuousExports API. DescribeContinuousExports l
ists exports as specified by ID. All continuous exports associated with your us
er can be listed if you call DescribeContinuousExports as is without passing an
y parameters

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeContinuousExports.html

#### Defined in

actions/discovery.ts:102

___

### DescribeExportConfigurations

• **DescribeExportConfigurations** = ``"discovery:DescribeExportConfigurations"``

Grants permission to DescribeExportConfigurations API. DescribeExportConfigurat
ions retrieves the status of a given export process. You can retrieve status fr
om a maximum of 100 processes

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportConfigurations.html

#### Defined in

actions/discovery.ts:110

___

### DescribeExportTasks

• **DescribeExportTasks** = ``"discovery:DescribeExportTasks"``

Grants permission to DescribeExportTasks API. DescribeExportTasks retrieve stat
us of one or more export tasks. You can retrieve the status of up to 100 export
tasks

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html

#### Defined in

actions/discovery.ts:118

___

### DescribeImportTasks

• **DescribeImportTasks** = ``"discovery:DescribeImportTasks"``

Grants permission to DescribeImportTasks API. DescribeImportTasks returns an ar
ray of import tasks for your user, including status information, times, IDs, th
e Amazon S3 Object URL for the import file, and more

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeImportTasks.html

#### Defined in

actions/discovery.ts:126

___

### DescribeTags

• **DescribeTags** = ``"discovery:DescribeTags"``

Grants permission to DescribeTags API. DescribeTags retrieves a list of configu
ration items that are tagged with a specific tag. Or retrieves a list of all ta
gs assigned to a specific configuration item

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeTags.html

#### Defined in

actions/discovery.ts:134

___

### DisassociateConfigurationItemsFromApplication

• **DisassociateConfigurationItemsFromApplication** = ``"discovery:DisassociateConfigurationItemsFromApplication"``

Grants permission to DisassociateConfigurationItemsFromApplication API. Disasso
ciateConfigurationItemsFromApplication disassociates one or more configuration
items from an application

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DisassociateConfigurationItemsFromApplication.html

#### Defined in

actions/discovery.ts:142

___

### ExportConfigurations

• **ExportConfigurations** = ``"discovery:ExportConfigurations"``

Grants permission to ExportConfigurations API. ExportConfigurations exports all
discovered configuration data to an Amazon S3 bucket or an application that ena
bles you to view and evaluate the data. Data includes tags and tag associations
, processes, connections, servers, and system performance

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ExportConfigurations.html

#### Defined in

actions/discovery.ts:151

___

### GetDiscoverySummary

• **GetDiscoverySummary** = ``"discovery:GetDiscoverySummary"``

Grants permission to GetDiscoverySummary API. GetDiscoverySummary retrieves a s
hort summary of discovered assets

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_GetDiscoverySummary.html

#### Defined in

actions/discovery.ts:158

___

### GetNetworkConnectionGraph

• **GetNetworkConnectionGraph** = ``"discovery:GetNetworkConnectionGraph"``

Grants permission to GetNetworkConnectionGraph API. GetNetworkConnectionGraph a
ccepts input list of one of - Ip Addresses, server ids or node ids. Returns a l
ist of nodes and edges which help customer visualize network connection graph.
This API is used for visualize network graph functionality in MigrationHub cons
ole

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_GetNetworkConnectionGraph.html

#### Defined in

actions/discovery.ts:168

___

### ListConfigurations

• **ListConfigurations** = ``"discovery:ListConfigurations"``

Grants permission to ListConfigurations API. ListConfigurations retrieves a lis
t of configuration items according to criteria you specify in a filter. The fil
ter criteria identify relationship requirements

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ListConfigurations.html

#### Defined in

actions/discovery.ts:176

___

### ListServerNeighbors

• **ListServerNeighbors** = ``"discovery:ListServerNeighbors"``

Grants permission to ListServerNeighbors API. ListServerNeighbors retrieves a l
ist of servers which are one network hop away from a specified server

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ListServerNeighbors.html

#### Defined in

actions/discovery.ts:183

___

### StartBatchDeleteConfigurationTask

• **StartBatchDeleteConfigurationTask** = ``"discovery:StartBatchDeleteConfigurationTask"``

Grants permission to StartBatchDeleteConfigurationTask API. StartBatchDeleteCon
figurationTask starts an asynchronous batch deletion of your configuration item
s. All of the supplied IDs must be for the same asset type (server, application
, process, or connection). Output is a unique task ID you can use to check back
on the deletions progress

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartBatchDeleteConfigurationTask.html

#### Defined in

actions/discovery.ts:193

___

### StartContinuousExport

• **StartContinuousExport** = ``"discovery:StartContinuousExport"``

Grants permission to StartContinuousExport API. StartContinuousExport start the
continuous flow of agent's discovered data into Amazon Athena

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartContinuousExport.html

#### Defined in

actions/discovery.ts:200

___

### StartDataCollectionByAgentIds

• **StartDataCollectionByAgentIds** = ``"discovery:StartDataCollectionByAgentIds"``

Grants permission to StartDataCollectionByAgentIds API. StartDataCollectionByAg
entIds instructs the specified agents or Connectors to start collecting data

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartDataCollectionByAgentIds.html

#### Defined in

actions/discovery.ts:207

___

### StartExportTask

• **StartExportTask** = ``"discovery:StartExportTask"``

Grants permission to StartExportTask API. StartExportTask export the configurat
ion data about discovered configuration items and relationships to an S3 bucket
in a specified format

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html

#### Defined in

actions/discovery.ts:215

___

### StartImportTask

• **StartImportTask** = ``"discovery:StartImportTask"``

Grants permission to StartImportTask API. StartImportTask starts an import task
. The Migration Hub import feature allows you to import details of your on-prem
ises environment directly into AWS without having to use the Application Discov
ery Service (ADS) tools such as the Discovery Connector or Discovery Agent. Thi
s gives you the option to perform migration assessment and planning directly fr
om your imported data including the ability to group your devices as applicatio
ns and track their migration status

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartImportTask.html

#### Defined in

actions/discovery.ts:227

___

### StopContinuousExport

• **StopContinuousExport** = ``"discovery:StopContinuousExport"``

Grants permission to StopContinuousExport API. StopContinuousExport stops the c
ontinuous flow of agent's discovered data into Amazon Athena

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StopContinuousExport.html

#### Defined in

actions/discovery.ts:234

___

### StopDataCollectionByAgentIds

• **StopDataCollectionByAgentIds** = ``"discovery:StopDataCollectionByAgentIds"``

Grants permission to StopDataCollectionByAgentIds API. StopDataCollectionByAgen
tIds instructs the specified agents or Connectors to stop collecting data

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StopDataCollectionByAgentIds.html

#### Defined in

actions/discovery.ts:241

___

### UpdateApplication

• **UpdateApplication** = ``"discovery:UpdateApplication"``

Grants permission to UpdateApplication API. UpdateApplication updates metadata
about an application

See https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_UpdateApplication.html

#### Defined in

actions/discovery.ts:248
