[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsPersonalizeActions

# Enumeration: AwsPersonalizeActions

All IAM policy actions for Amazon Personalize (PERSONALIZE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpersonalize.html

2024-02-12T09:58:38.703Z

## Table of contents

### Enumeration Members

- [CreateBatchInferenceJob](AwsPersonalizeActions.md#createbatchinferencejob)
- [CreateBatchSegmentJob](AwsPersonalizeActions.md#createbatchsegmentjob)
- [CreateCampaign](AwsPersonalizeActions.md#createcampaign)
- [CreateDataInsightsJob](AwsPersonalizeActions.md#createdatainsightsjob)
- [CreateDataset](AwsPersonalizeActions.md#createdataset)
- [CreateDatasetExportJob](AwsPersonalizeActions.md#createdatasetexportjob)
- [CreateDatasetGroup](AwsPersonalizeActions.md#createdatasetgroup)
- [CreateDatasetImportJob](AwsPersonalizeActions.md#createdatasetimportjob)
- [CreateEventTracker](AwsPersonalizeActions.md#createeventtracker)
- [CreateFilter](AwsPersonalizeActions.md#createfilter)
- [CreateMetricAttribution](AwsPersonalizeActions.md#createmetricattribution)
- [CreateRecommender](AwsPersonalizeActions.md#createrecommender)
- [CreateSchema](AwsPersonalizeActions.md#createschema)
- [CreateSolution](AwsPersonalizeActions.md#createsolution)
- [CreateSolutionVersion](AwsPersonalizeActions.md#createsolutionversion)
- [DeleteCampaign](AwsPersonalizeActions.md#deletecampaign)
- [DeleteDataset](AwsPersonalizeActions.md#deletedataset)
- [DeleteDatasetGroup](AwsPersonalizeActions.md#deletedatasetgroup)
- [DeleteEventTracker](AwsPersonalizeActions.md#deleteeventtracker)
- [DeleteFilter](AwsPersonalizeActions.md#deletefilter)
- [DeleteMetricAttribution](AwsPersonalizeActions.md#deletemetricattribution)
- [DeleteRecommender](AwsPersonalizeActions.md#deleterecommender)
- [DeleteSchema](AwsPersonalizeActions.md#deleteschema)
- [DeleteSolution](AwsPersonalizeActions.md#deletesolution)
- [DescribeAlgorithm](AwsPersonalizeActions.md#describealgorithm)
- [DescribeBatchInferenceJob](AwsPersonalizeActions.md#describebatchinferencejob)
- [DescribeBatchSegmentJob](AwsPersonalizeActions.md#describebatchsegmentjob)
- [DescribeCampaign](AwsPersonalizeActions.md#describecampaign)
- [DescribeDataInsightsJob](AwsPersonalizeActions.md#describedatainsightsjob)
- [DescribeDataset](AwsPersonalizeActions.md#describedataset)
- [DescribeDatasetExportJob](AwsPersonalizeActions.md#describedatasetexportjob)
- [DescribeDatasetGroup](AwsPersonalizeActions.md#describedatasetgroup)
- [DescribeDatasetImportJob](AwsPersonalizeActions.md#describedatasetimportjob)
- [DescribeEventTracker](AwsPersonalizeActions.md#describeeventtracker)
- [DescribeFeatureTransformation](AwsPersonalizeActions.md#describefeaturetransformation)
- [DescribeFilter](AwsPersonalizeActions.md#describefilter)
- [DescribeMetricAttribution](AwsPersonalizeActions.md#describemetricattribution)
- [DescribeRecipe](AwsPersonalizeActions.md#describerecipe)
- [DescribeRecommender](AwsPersonalizeActions.md#describerecommender)
- [DescribeSchema](AwsPersonalizeActions.md#describeschema)
- [DescribeSolution](AwsPersonalizeActions.md#describesolution)
- [DescribeSolutionVersion](AwsPersonalizeActions.md#describesolutionversion)
- [GetActionRecommendations](AwsPersonalizeActions.md#getactionrecommendations)
- [GetDataInsights](AwsPersonalizeActions.md#getdatainsights)
- [GetPersonalizedRanking](AwsPersonalizeActions.md#getpersonalizedranking)
- [GetRecommendations](AwsPersonalizeActions.md#getrecommendations)
- [GetSolutionMetrics](AwsPersonalizeActions.md#getsolutionmetrics)
- [ListBatchInferenceJobs](AwsPersonalizeActions.md#listbatchinferencejobs)
- [ListBatchSegmentJobs](AwsPersonalizeActions.md#listbatchsegmentjobs)
- [ListCampaigns](AwsPersonalizeActions.md#listcampaigns)
- [ListDataInsightsJobs](AwsPersonalizeActions.md#listdatainsightsjobs)
- [ListDatasetExportJobs](AwsPersonalizeActions.md#listdatasetexportjobs)
- [ListDatasetGroups](AwsPersonalizeActions.md#listdatasetgroups)
- [ListDatasetImportJobs](AwsPersonalizeActions.md#listdatasetimportjobs)
- [ListDatasets](AwsPersonalizeActions.md#listdatasets)
- [ListEventTrackers](AwsPersonalizeActions.md#listeventtrackers)
- [ListFilters](AwsPersonalizeActions.md#listfilters)
- [ListMetricAttributionMetrics](AwsPersonalizeActions.md#listmetricattributionmetrics)
- [ListMetricAttributions](AwsPersonalizeActions.md#listmetricattributions)
- [ListRecipes](AwsPersonalizeActions.md#listrecipes)
- [ListRecommenders](AwsPersonalizeActions.md#listrecommenders)
- [ListSchemas](AwsPersonalizeActions.md#listschemas)
- [ListSolutionVersions](AwsPersonalizeActions.md#listsolutionversions)
- [ListSolutions](AwsPersonalizeActions.md#listsolutions)
- [ListTagsForResource](AwsPersonalizeActions.md#listtagsforresource)
- [PutActionInteractions](AwsPersonalizeActions.md#putactioninteractions)
- [PutActions](AwsPersonalizeActions.md#putactions)
- [PutEvents](AwsPersonalizeActions.md#putevents)
- [PutItems](AwsPersonalizeActions.md#putitems)
- [PutUsers](AwsPersonalizeActions.md#putusers)
- [StartRecommender](AwsPersonalizeActions.md#startrecommender)
- [StopRecommender](AwsPersonalizeActions.md#stoprecommender)
- [StopSolutionVersionCreation](AwsPersonalizeActions.md#stopsolutionversioncreation)
- [TagResource](AwsPersonalizeActions.md#tagresource)
- [UntagResource](AwsPersonalizeActions.md#untagresource)
- [UpdateCampaign](AwsPersonalizeActions.md#updatecampaign)
- [UpdateDataset](AwsPersonalizeActions.md#updatedataset)
- [UpdateMetricAttribution](AwsPersonalizeActions.md#updatemetricattribution)
- [UpdateRecommender](AwsPersonalizeActions.md#updaterecommender)

## Enumeration Members

### CreateBatchInferenceJob

• **CreateBatchInferenceJob** = ``"personalize:CreateBatchInferenceJob"``

Grants permission to create a batch inference job

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateBatchInferenceJob.html

#### Defined in

actions/personalize.ts:17

___

### CreateBatchSegmentJob

• **CreateBatchSegmentJob** = ``"personalize:CreateBatchSegmentJob"``

Grants permission to create a batch segment job

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateBatchSegmentJob.html

#### Defined in

actions/personalize.ts:23

___

### CreateCampaign

• **CreateCampaign** = ``"personalize:CreateCampaign"``

Grants permission to create a campaign

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html

#### Defined in

actions/personalize.ts:29

___

### CreateDataInsightsJob

• **CreateDataInsightsJob** = ``"personalize:CreateDataInsightsJob"``

Grants permission to create a data insights job

See https://docs.aws.amazon.com/personalize/latest/dg/analyzing-data.html

#### Defined in

actions/personalize.ts:35

___

### CreateDataset

• **CreateDataset** = ``"personalize:CreateDataset"``

Grants permission to create a dataset

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html

#### Defined in

actions/personalize.ts:41

___

### CreateDatasetExportJob

• **CreateDatasetExportJob** = ``"personalize:CreateDatasetExportJob"``

Grants permission to create a dataset export job

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html

#### Defined in

actions/personalize.ts:47

___

### CreateDatasetGroup

• **CreateDatasetGroup** = ``"personalize:CreateDatasetGroup"``

Grants permission to create a dataset group

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html

#### Defined in

actions/personalize.ts:53

___

### CreateDatasetImportJob

• **CreateDatasetImportJob** = ``"personalize:CreateDatasetImportJob"``

Grants permission to create a dataset import job

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html

#### Defined in

actions/personalize.ts:59

___

### CreateEventTracker

• **CreateEventTracker** = ``"personalize:CreateEventTracker"``

Grants permission to create an event tracker

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html

#### Defined in

actions/personalize.ts:65

___

### CreateFilter

• **CreateFilter** = ``"personalize:CreateFilter"``

Grants permission to create a filter

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateFilter.html

#### Defined in

actions/personalize.ts:71

___

### CreateMetricAttribution

• **CreateMetricAttribution** = ``"personalize:CreateMetricAttribution"``

Grants permission to create a metric attribution

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateMetricAttribution.html

#### Defined in

actions/personalize.ts:77

___

### CreateRecommender

• **CreateRecommender** = ``"personalize:CreateRecommender"``

Grants permission to create a recommender

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html

#### Defined in

actions/personalize.ts:83

___

### CreateSchema

• **CreateSchema** = ``"personalize:CreateSchema"``

Grants permission to create a schema

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html

#### Defined in

actions/personalize.ts:89

___

### CreateSolution

• **CreateSolution** = ``"personalize:CreateSolution"``

Grants permission to create a solution

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html

#### Defined in

actions/personalize.ts:95

___

### CreateSolutionVersion

• **CreateSolutionVersion** = ``"personalize:CreateSolutionVersion"``

Grants permission to create a solution version

See https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html

#### Defined in

actions/personalize.ts:101

___

### DeleteCampaign

• **DeleteCampaign** = ``"personalize:DeleteCampaign"``

Grants permission to delete a campaign

See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html

#### Defined in

actions/personalize.ts:107

___

### DeleteDataset

• **DeleteDataset** = ``"personalize:DeleteDataset"``

Grants permission to delete a dataset

See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html

#### Defined in

actions/personalize.ts:113

___

### DeleteDatasetGroup

• **DeleteDatasetGroup** = ``"personalize:DeleteDatasetGroup"``

Grants permission to delete a dataset group

See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html

#### Defined in

actions/personalize.ts:119

___

### DeleteEventTracker

• **DeleteEventTracker** = ``"personalize:DeleteEventTracker"``

Grants permission to delete an event tracker

See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html

#### Defined in

actions/personalize.ts:125

___

### DeleteFilter

• **DeleteFilter** = ``"personalize:DeleteFilter"``

Grants permission to delete a filter

See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteFilter.html

#### Defined in

actions/personalize.ts:131

___

### DeleteMetricAttribution

• **DeleteMetricAttribution** = ``"personalize:DeleteMetricAttribution"``

Grants permission to delete a metric attribution

See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteMetricAttribution.html

#### Defined in

actions/personalize.ts:137

___

### DeleteRecommender

• **DeleteRecommender** = ``"personalize:DeleteRecommender"``

Grants permission to delete a recommender

See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html

#### Defined in

actions/personalize.ts:143

___

### DeleteSchema

• **DeleteSchema** = ``"personalize:DeleteSchema"``

Grants permission to delete a schema

See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html

#### Defined in

actions/personalize.ts:149

___

### DeleteSolution

• **DeleteSolution** = ``"personalize:DeleteSolution"``

Grants permission to delete a solution including all versions of the solution

See https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html

#### Defined in

actions/personalize.ts:155

___

### DescribeAlgorithm

• **DescribeAlgorithm** = ``"personalize:DescribeAlgorithm"``

Grants permission to describe an algorithm

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeAlgorithm.html

#### Defined in

actions/personalize.ts:161

___

### DescribeBatchInferenceJob

• **DescribeBatchInferenceJob** = ``"personalize:DescribeBatchInferenceJob"``

Grants permission to describe a batch inference job

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeBatchInferenceJob.html

#### Defined in

actions/personalize.ts:167

___

### DescribeBatchSegmentJob

• **DescribeBatchSegmentJob** = ``"personalize:DescribeBatchSegmentJob"``

Grants permission to describe a batch segment job

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeBatchSegmentJob.html

#### Defined in

actions/personalize.ts:173

___

### DescribeCampaign

• **DescribeCampaign** = ``"personalize:DescribeCampaign"``

Grants permission to describe a campaign

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html

#### Defined in

actions/personalize.ts:179

___

### DescribeDataInsightsJob

• **DescribeDataInsightsJob** = ``"personalize:DescribeDataInsightsJob"``

Grants permission to describe a data insights job

See https://docs.aws.amazon.com/personalize/latest/dg/analyzing-data.html

#### Defined in

actions/personalize.ts:185

___

### DescribeDataset

• **DescribeDataset** = ``"personalize:DescribeDataset"``

Grants permission to describe a dataset

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html

#### Defined in

actions/personalize.ts:191

___

### DescribeDatasetExportJob

• **DescribeDatasetExportJob** = ``"personalize:DescribeDatasetExportJob"``

Grants permission to describe a dataset export job

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html

#### Defined in

actions/personalize.ts:197

___

### DescribeDatasetGroup

• **DescribeDatasetGroup** = ``"personalize:DescribeDatasetGroup"``

Grants permission to describe a dataset group

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html

#### Defined in

actions/personalize.ts:203

___

### DescribeDatasetImportJob

• **DescribeDatasetImportJob** = ``"personalize:DescribeDatasetImportJob"``

Grants permission to describe a dataset import job

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html

#### Defined in

actions/personalize.ts:209

___

### DescribeEventTracker

• **DescribeEventTracker** = ``"personalize:DescribeEventTracker"``

Grants permission to describe an event tracker

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html

#### Defined in

actions/personalize.ts:215

___

### DescribeFeatureTransformation

• **DescribeFeatureTransformation** = ``"personalize:DescribeFeatureTransformation"``

Grants permission to describe a feature transformation

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeFeatureTransformation.html

#### Defined in

actions/personalize.ts:221

___

### DescribeFilter

• **DescribeFilter** = ``"personalize:DescribeFilter"``

Grants permission to describe a filter

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeFilter.html

#### Defined in

actions/personalize.ts:227

___

### DescribeMetricAttribution

• **DescribeMetricAttribution** = ``"personalize:DescribeMetricAttribution"``

Grants permission to describe a metric attribution

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeMetricAttribution.html

#### Defined in

actions/personalize.ts:233

___

### DescribeRecipe

• **DescribeRecipe** = ``"personalize:DescribeRecipe"``

Grants permission to describe a recipe

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html

#### Defined in

actions/personalize.ts:239

___

### DescribeRecommender

• **DescribeRecommender** = ``"personalize:DescribeRecommender"``

Grants permission to describe a recommender

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html

#### Defined in

actions/personalize.ts:245

___

### DescribeSchema

• **DescribeSchema** = ``"personalize:DescribeSchema"``

Grants permission to describe a schema

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html

#### Defined in

actions/personalize.ts:251

___

### DescribeSolution

• **DescribeSolution** = ``"personalize:DescribeSolution"``

Grants permission to describe a solution

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html

#### Defined in

actions/personalize.ts:257

___

### DescribeSolutionVersion

• **DescribeSolutionVersion** = ``"personalize:DescribeSolutionVersion"``

Grants permission to describe a version of a solution

See https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html

#### Defined in

actions/personalize.ts:263

___

### GetActionRecommendations

• **GetActionRecommendations** = ``"personalize:GetActionRecommendations"``

Grants permission to get a list of recommended actions

See https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetActionRecommendations.html

#### Defined in

actions/personalize.ts:269

___

### GetDataInsights

• **GetDataInsights** = ``"personalize:GetDataInsights"``

Grants permission to get data insights from a data insights job

See https://docs.aws.amazon.com/personalize/latest/dg/analyzing-data.html

#### Defined in

actions/personalize.ts:275

___

### GetPersonalizedRanking

• **GetPersonalizedRanking** = ``"personalize:GetPersonalizedRanking"``

Grants permission to get a re-ranked list of recommendations

See https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html

#### Defined in

actions/personalize.ts:281

___

### GetRecommendations

• **GetRecommendations** = ``"personalize:GetRecommendations"``

Grants permission to get a list of recommendations from a campaign

See https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html

#### Defined in

actions/personalize.ts:287

___

### GetSolutionMetrics

• **GetSolutionMetrics** = ``"personalize:GetSolutionMetrics"``

Grants permission to get metrics for a solution version

See https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html

#### Defined in

actions/personalize.ts:293

___

### ListBatchInferenceJobs

• **ListBatchInferenceJobs** = ``"personalize:ListBatchInferenceJobs"``

Grants permission to list batch inference jobs

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html

#### Defined in

actions/personalize.ts:299

___

### ListBatchSegmentJobs

• **ListBatchSegmentJobs** = ``"personalize:ListBatchSegmentJobs"``

Grants permission to list batch segment jobs

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html

#### Defined in

actions/personalize.ts:305

___

### ListCampaigns

• **ListCampaigns** = ``"personalize:ListCampaigns"``

Grants permission to list campaigns

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html

#### Defined in

actions/personalize.ts:311

___

### ListDataInsightsJobs

• **ListDataInsightsJobs** = ``"personalize:ListDataInsightsJobs"``

Grants permission to list data insights jobs

See https://docs.aws.amazon.com/personalize/latest/dg/analyzing-data.html

#### Defined in

actions/personalize.ts:317

___

### ListDatasetExportJobs

• **ListDatasetExportJobs** = ``"personalize:ListDatasetExportJobs"``

Grants permission to list dataset export jobs

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetExportJobs.html

#### Defined in

actions/personalize.ts:323

___

### ListDatasetGroups

• **ListDatasetGroups** = ``"personalize:ListDatasetGroups"``

Grants permission to list dataset groups

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html

#### Defined in

actions/personalize.ts:329

___

### ListDatasetImportJobs

• **ListDatasetImportJobs** = ``"personalize:ListDatasetImportJobs"``

Grants permission to list dataset import jobs

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html

#### Defined in

actions/personalize.ts:335

___

### ListDatasets

• **ListDatasets** = ``"personalize:ListDatasets"``

Grants permission to list datasets

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html

#### Defined in

actions/personalize.ts:341

___

### ListEventTrackers

• **ListEventTrackers** = ``"personalize:ListEventTrackers"``

Grants permission to list event trackers

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html

#### Defined in

actions/personalize.ts:347

___

### ListFilters

• **ListFilters** = ``"personalize:ListFilters"``

Grants permission to list filters

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListFilters.html

#### Defined in

actions/personalize.ts:353

___

### ListMetricAttributionMetrics

• **ListMetricAttributionMetrics** = ``"personalize:ListMetricAttributionMetrics"``

Grants permission to list metric attribution metrics

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListMetricAttributionMetrics.html

#### Defined in

actions/personalize.ts:359

___

### ListMetricAttributions

• **ListMetricAttributions** = ``"personalize:ListMetricAttributions"``

Grants permission to list metric attributions

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListMetricAttributions.html

#### Defined in

actions/personalize.ts:365

___

### ListRecipes

• **ListRecipes** = ``"personalize:ListRecipes"``

Grants permission to list recipes

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecipes.html

#### Defined in

actions/personalize.ts:371

___

### ListRecommenders

• **ListRecommenders** = ``"personalize:ListRecommenders"``

Grants permission to list recommenders

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html

#### Defined in

actions/personalize.ts:377

___

### ListSchemas

• **ListSchemas** = ``"personalize:ListSchemas"``

Grants permission to list schemas

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html

#### Defined in

actions/personalize.ts:383

___

### ListSolutionVersions

• **ListSolutionVersions** = ``"personalize:ListSolutionVersions"``

Grants permission to list versions of a solution

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html

#### Defined in

actions/personalize.ts:389

___

### ListSolutions

• **ListSolutions** = ``"personalize:ListSolutions"``

Grants permission to list solutions

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html

#### Defined in

actions/personalize.ts:395

___

### ListTagsForResource

• **ListTagsForResource** = ``"personalize:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/personalize/latest/dg/API_ListTagsForResource.html

#### Defined in

actions/personalize.ts:401

___

### PutActionInteractions

• **PutActionInteractions** = ``"personalize:PutActionInteractions"``

Grants permission to put real time action interaction data

See https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutActionInteractions.html

#### Defined in

actions/personalize.ts:407

___

### PutActions

• **PutActions** = ``"personalize:PutActions"``

Grants permission to ingest Actions data

See https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutActions.html

#### Defined in

actions/personalize.ts:413

___

### PutEvents

• **PutEvents** = ``"personalize:PutEvents"``

Grants permission to put real time event data

See https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html

#### Defined in

actions/personalize.ts:419

___

### PutItems

• **PutItems** = ``"personalize:PutItems"``

Grants permission to ingest Items data

See https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutItems.html

#### Defined in

actions/personalize.ts:425

___

### PutUsers

• **PutUsers** = ``"personalize:PutUsers"``

Grants permission to ingest Users data

See https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutUsers.html

#### Defined in

actions/personalize.ts:431

___

### StartRecommender

• **StartRecommender** = ``"personalize:StartRecommender"``

Grants permission to start a recommender

See https://docs.aws.amazon.com/personalize/latest/dg/API_StartRecommender.html

#### Defined in

actions/personalize.ts:437

___

### StopRecommender

• **StopRecommender** = ``"personalize:StopRecommender"``

Grants permission to stop a recommender

See https://docs.aws.amazon.com/personalize/latest/dg/API_StopRecommender.html

#### Defined in

actions/personalize.ts:443

___

### StopSolutionVersionCreation

• **StopSolutionVersionCreation** = ``"personalize:StopSolutionVersionCreation"``

Grants permission to stop a solution version creation

See https://docs.aws.amazon.com/personalize/latest/dg/API_StopSolutionVersionCreation.html

#### Defined in

actions/personalize.ts:449

___

### TagResource

• **TagResource** = ``"personalize:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/personalize/latest/dg/API_TagResource.html

#### Defined in

actions/personalize.ts:455

___

### UntagResource

• **UntagResource** = ``"personalize:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/personalize/latest/dg/API_UntagResource.html

#### Defined in

actions/personalize.ts:461

___

### UpdateCampaign

• **UpdateCampaign** = ``"personalize:UpdateCampaign"``

Grants permission to update a campaign

See https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html

#### Defined in

actions/personalize.ts:467

___

### UpdateDataset

• **UpdateDataset** = ``"personalize:UpdateDataset"``

Grants permission to update a dataset

See https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateDataset.html

#### Defined in

actions/personalize.ts:473

___

### UpdateMetricAttribution

• **UpdateMetricAttribution** = ``"personalize:UpdateMetricAttribution"``

Grants permission to update a metric attribution

See https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateMetricAttribution.html

#### Defined in

actions/personalize.ts:479

___

### UpdateRecommender

• **UpdateRecommender** = ``"personalize:UpdateRecommender"``

Grants permission to update a recommender

See https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html

#### Defined in

actions/personalize.ts:485
