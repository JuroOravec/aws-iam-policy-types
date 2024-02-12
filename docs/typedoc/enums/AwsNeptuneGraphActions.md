[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsNeptuneGraphActions

# Enumeration: AwsNeptuneGraphActions

All IAM policy actions for Amazon Neptune Analytics (NEPTUNE-GRAPH)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptuneanalytics.html

2024-02-12T09:58:28.392Z

## Table of contents

### Enumeration Members

- [CancelImportTask](AwsNeptuneGraphActions.md#cancelimporttask)
- [CancelQuery](AwsNeptuneGraphActions.md#cancelquery)
- [CreateGraph](AwsNeptuneGraphActions.md#creategraph)
- [CreateGraphSnapshot](AwsNeptuneGraphActions.md#creategraphsnapshot)
- [CreateGraphUsingImportTask](AwsNeptuneGraphActions.md#creategraphusingimporttask)
- [CreatePrivateGraphEndpoint](AwsNeptuneGraphActions.md#createprivategraphendpoint)
- [DeleteDataViaQuery](AwsNeptuneGraphActions.md#deletedataviaquery)
- [DeleteGraph](AwsNeptuneGraphActions.md#deletegraph)
- [DeleteGraphSnapshot](AwsNeptuneGraphActions.md#deletegraphsnapshot)
- [DeletePrivateGraphEndpoint](AwsNeptuneGraphActions.md#deleteprivategraphendpoint)
- [GetEngineStatus](AwsNeptuneGraphActions.md#getenginestatus)
- [GetGraph](AwsNeptuneGraphActions.md#getgraph)
- [GetGraphSnapshot](AwsNeptuneGraphActions.md#getgraphsnapshot)
- [GetGraphSummary](AwsNeptuneGraphActions.md#getgraphsummary)
- [GetImportTask](AwsNeptuneGraphActions.md#getimporttask)
- [GetPrivateGraphEndpoint](AwsNeptuneGraphActions.md#getprivategraphendpoint)
- [GetQueryStatus](AwsNeptuneGraphActions.md#getquerystatus)
- [GetStatisticsStatus](AwsNeptuneGraphActions.md#getstatisticsstatus)
- [ListGraphSnapshots](AwsNeptuneGraphActions.md#listgraphsnapshots)
- [ListGraphs](AwsNeptuneGraphActions.md#listgraphs)
- [ListImportTasks](AwsNeptuneGraphActions.md#listimporttasks)
- [ListPrivateGraphEndpoints](AwsNeptuneGraphActions.md#listprivategraphendpoints)
- [ListQueries](AwsNeptuneGraphActions.md#listqueries)
- [ListTagsForResource](AwsNeptuneGraphActions.md#listtagsforresource)
- [ReadDataViaQuery](AwsNeptuneGraphActions.md#readdataviaquery)
- [ResetGraph](AwsNeptuneGraphActions.md#resetgraph)
- [RestoreGraphFromSnapshot](AwsNeptuneGraphActions.md#restoregraphfromsnapshot)
- [TagResource](AwsNeptuneGraphActions.md#tagresource)
- [UntagResource](AwsNeptuneGraphActions.md#untagresource)
- [UpdateGraph](AwsNeptuneGraphActions.md#updategraph)
- [WriteDataViaQuery](AwsNeptuneGraphActions.md#writedataviaquery)

## Enumeration Members

### CancelImportTask

• **CancelImportTask** = ``"neptune-graph:CancelImportTask"``

Grants permission to cancel an ongoing import task

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CancelImportTask

#### Defined in

actions/neptune-graph.ts:17

___

### CancelQuery

• **CancelQuery** = ``"neptune-graph:CancelQuery"``

Grants permission to cancel a query

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CancelQuery

#### Defined in

actions/neptune-graph.ts:23

___

### CreateGraph

• **CreateGraph** = ``"neptune-graph:CreateGraph"``

Grants permission to create a new graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CreateGraph

#### Defined in

actions/neptune-graph.ts:29

___

### CreateGraphSnapshot

• **CreateGraphSnapshot** = ``"neptune-graph:CreateGraphSnapshot"``

Grants permission to create a new snapshot from an existing graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CreateGraphSnapshot

#### Defined in

actions/neptune-graph.ts:35

___

### CreateGraphUsingImportTask

• **CreateGraphUsingImportTask** = ``"neptune-graph:CreateGraphUsingImportTask"``

Grants permission to create a new graph while importing data into the new graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CreateGraphUsingImportTask

#### Defined in

actions/neptune-graph.ts:41

___

### CreatePrivateGraphEndpoint

• **CreatePrivateGraphEndpoint** = ``"neptune-graph:CreatePrivateGraphEndpoint"``

Grants permission to create a new private graph endpoint to access the graph fr
om within a vpc

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#CreatePrivateGraphEndpoint

#### Defined in

actions/neptune-graph.ts:48

___

### DeleteDataViaQuery

• **DeleteDataViaQuery** = ``"neptune-graph:DeleteDataViaQuery"``

Grants permission to delete data via query APIs on the graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#DeleteDataViaQuery

#### Defined in

actions/neptune-graph.ts:54

___

### DeleteGraph

• **DeleteGraph** = ``"neptune-graph:DeleteGraph"``

Grants permission to delete a graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#DeleteGraph

#### Defined in

actions/neptune-graph.ts:60

___

### DeleteGraphSnapshot

• **DeleteGraphSnapshot** = ``"neptune-graph:DeleteGraphSnapshot"``

Grants permission to delete a snapshot

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#DeleteGraphSnapshot

#### Defined in

actions/neptune-graph.ts:66

___

### DeletePrivateGraphEndpoint

• **DeletePrivateGraphEndpoint** = ``"neptune-graph:DeletePrivateGraphEndpoint"``

Grants permission to delete a private graph endpoint of a graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#DeletePrivateGraphEndpoint

#### Defined in

actions/neptune-graph.ts:72

___

### GetEngineStatus

• **GetEngineStatus** = ``"neptune-graph:GetEngineStatus"``

Grants permission to get the engine status of the graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetEngineStatus

#### Defined in

actions/neptune-graph.ts:78

___

### GetGraph

• **GetGraph** = ``"neptune-graph:GetGraph"``

Grants permission to get details about a graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetGraph

#### Defined in

actions/neptune-graph.ts:84

___

### GetGraphSnapshot

• **GetGraphSnapshot** = ``"neptune-graph:GetGraphSnapshot"``

Grants permission to get details about a snapshot

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetGraphSnapshot

#### Defined in

actions/neptune-graph.ts:90

___

### GetGraphSummary

• **GetGraphSummary** = ``"neptune-graph:GetGraphSummary"``

Grants permission to get the summary for the data in the graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetGraphSummary

#### Defined in

actions/neptune-graph.ts:96

___

### GetImportTask

• **GetImportTask** = ``"neptune-graph:GetImportTask"``

Grants permission to get details about an import task

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetImportTask

#### Defined in

actions/neptune-graph.ts:102

___

### GetPrivateGraphEndpoint

• **GetPrivateGraphEndpoint** = ``"neptune-graph:GetPrivateGraphEndpoint"``

Grants permission to get details about a private graph endpoint of a graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetPrivateGraphEndpoint

#### Defined in

actions/neptune-graph.ts:108

___

### GetQueryStatus

• **GetQueryStatus** = ``"neptune-graph:GetQueryStatus"``

Grants permission to check the status of a given query

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetQueryStatus

#### Defined in

actions/neptune-graph.ts:114

___

### GetStatisticsStatus

• **GetStatisticsStatus** = ``"neptune-graph:GetStatisticsStatus"``

Grants permission to get the statistics for the data in the graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#GetStatisticsStatus

#### Defined in

actions/neptune-graph.ts:120

___

### ListGraphSnapshots

• **ListGraphSnapshots** = ``"neptune-graph:ListGraphSnapshots"``

Grants permission to list the snapshots in your account

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListGraphSnapshots

#### Defined in

actions/neptune-graph.ts:126

___

### ListGraphs

• **ListGraphs** = ``"neptune-graph:ListGraphs"``

Grants permission to list the graphs in your account

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListGraphs

#### Defined in

actions/neptune-graph.ts:132

___

### ListImportTasks

• **ListImportTasks** = ``"neptune-graph:ListImportTasks"``

Grants permission to list the import tasks in your account

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListImportTasks

#### Defined in

actions/neptune-graph.ts:138

___

### ListPrivateGraphEndpoints

• **ListPrivateGraphEndpoints** = ``"neptune-graph:ListPrivateGraphEndpoints"``

Grants permission to list the private graph endpoints for a given graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListPrivateGraphEndpoints

#### Defined in

actions/neptune-graph.ts:144

___

### ListQueries

• **ListQueries** = ``"neptune-graph:ListQueries"``

Grants permission to check the status of all active queries

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListQueries

#### Defined in

actions/neptune-graph.ts:150

___

### ListTagsForResource

• **ListTagsForResource** = ``"neptune-graph:ListTagsForResource"``

Grants permission to lists tag for a Neptune Analytics resource

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ListTagsForResource

#### Defined in

actions/neptune-graph.ts:156

___

### ReadDataViaQuery

• **ReadDataViaQuery** = ``"neptune-graph:ReadDataViaQuery"``

Grants permission to read data via query APIs on the graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ReadDataViaQuery

#### Defined in

actions/neptune-graph.ts:162

___

### ResetGraph

• **ResetGraph** = ``"neptune-graph:ResetGraph"``

Grants permission to reset a graph which deletes all data within the graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#ResetGraph

#### Defined in

actions/neptune-graph.ts:168

___

### RestoreGraphFromSnapshot

• **RestoreGraphFromSnapshot** = ``"neptune-graph:RestoreGraphFromSnapshot"``

Grants permission to create a new graph from an existing snapshot

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#RestoreGraphFromSnapshot

#### Defined in

actions/neptune-graph.ts:174

___

### TagResource

• **TagResource** = ``"neptune-graph:TagResource"``

Grants permission to tag a Neptune Analytics resource

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#TagResource

#### Defined in

actions/neptune-graph.ts:180

___

### UntagResource

• **UntagResource** = ``"neptune-graph:UntagResource"``

Grants permission to untag a Neptune Analytics resource

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#UntagResource

#### Defined in

actions/neptune-graph.ts:186

___

### UpdateGraph

• **UpdateGraph** = ``"neptune-graph:UpdateGraph"``

Grants permission to modify a graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#UpdateGraph

#### Defined in

actions/neptune-graph.ts:192

___

### WriteDataViaQuery

• **WriteDataViaQuery** = ``"neptune-graph:WriteDataViaQuery"``

Grants permission to write data via query APIs on the graph

See https://docs.aws.amazon.com/neptune-analytics/latest/userguide/iam-actions.html#WriteDataViaQuery

#### Defined in

actions/neptune-graph.ts:198
