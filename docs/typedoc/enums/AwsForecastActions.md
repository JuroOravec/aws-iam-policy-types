[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsForecastActions

# Enumeration: AwsForecastActions

All IAM policy actions for Amazon Forecast (FORECAST)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonforecast.html

2024-02-12T09:57:27.034Z

## Table of contents

### Enumeration Members

- [CreateAutoPredictor](AwsForecastActions.md#createautopredictor)
- [CreateDataset](AwsForecastActions.md#createdataset)
- [CreateDatasetGroup](AwsForecastActions.md#createdatasetgroup)
- [CreateDatasetImportJob](AwsForecastActions.md#createdatasetimportjob)
- [CreateExplainability](AwsForecastActions.md#createexplainability)
- [CreateExplainabilityExport](AwsForecastActions.md#createexplainabilityexport)
- [CreateForecast](AwsForecastActions.md#createforecast)
- [CreateForecastEndpoint](AwsForecastActions.md#createforecastendpoint)
- [CreateForecastExportJob](AwsForecastActions.md#createforecastexportjob)
- [CreateMonitor](AwsForecastActions.md#createmonitor)
- [CreatePredictor](AwsForecastActions.md#createpredictor)
- [CreatePredictorBacktestExportJob](AwsForecastActions.md#createpredictorbacktestexportjob)
- [CreateWhatIfAnalysis](AwsForecastActions.md#createwhatifanalysis)
- [CreateWhatIfForecast](AwsForecastActions.md#createwhatifforecast)
- [CreateWhatIfForecastExport](AwsForecastActions.md#createwhatifforecastexport)
- [DeleteDataset](AwsForecastActions.md#deletedataset)
- [DeleteDatasetGroup](AwsForecastActions.md#deletedatasetgroup)
- [DeleteDatasetImportJob](AwsForecastActions.md#deletedatasetimportjob)
- [DeleteExplainability](AwsForecastActions.md#deleteexplainability)
- [DeleteExplainabilityExport](AwsForecastActions.md#deleteexplainabilityexport)
- [DeleteForecast](AwsForecastActions.md#deleteforecast)
- [DeleteForecastEndpoint](AwsForecastActions.md#deleteforecastendpoint)
- [DeleteForecastExportJob](AwsForecastActions.md#deleteforecastexportjob)
- [DeleteMonitor](AwsForecastActions.md#deletemonitor)
- [DeletePredictor](AwsForecastActions.md#deletepredictor)
- [DeletePredictorBacktestExportJob](AwsForecastActions.md#deletepredictorbacktestexportjob)
- [DeleteResourceTree](AwsForecastActions.md#deleteresourcetree)
- [DeleteWhatIfAnalysis](AwsForecastActions.md#deletewhatifanalysis)
- [DeleteWhatIfForecast](AwsForecastActions.md#deletewhatifforecast)
- [DeleteWhatIfForecastExport](AwsForecastActions.md#deletewhatifforecastexport)
- [DescribeAutoPredictor](AwsForecastActions.md#describeautopredictor)
- [DescribeDataset](AwsForecastActions.md#describedataset)
- [DescribeDatasetGroup](AwsForecastActions.md#describedatasetgroup)
- [DescribeDatasetImportJob](AwsForecastActions.md#describedatasetimportjob)
- [DescribeExplainability](AwsForecastActions.md#describeexplainability)
- [DescribeExplainabilityExport](AwsForecastActions.md#describeexplainabilityexport)
- [DescribeForecast](AwsForecastActions.md#describeforecast)
- [DescribeForecastEndpoint](AwsForecastActions.md#describeforecastendpoint)
- [DescribeForecastExportJob](AwsForecastActions.md#describeforecastexportjob)
- [DescribeMonitor](AwsForecastActions.md#describemonitor)
- [DescribePredictor](AwsForecastActions.md#describepredictor)
- [DescribePredictorBacktestExportJob](AwsForecastActions.md#describepredictorbacktestexportjob)
- [DescribeWhatIfAnalysis](AwsForecastActions.md#describewhatifanalysis)
- [DescribeWhatIfForecast](AwsForecastActions.md#describewhatifforecast)
- [DescribeWhatIfForecastExport](AwsForecastActions.md#describewhatifforecastexport)
- [GetAccuracyMetrics](AwsForecastActions.md#getaccuracymetrics)
- [GetRecentForecastContext](AwsForecastActions.md#getrecentforecastcontext)
- [InvokeForecastEndpoint](AwsForecastActions.md#invokeforecastendpoint)
- [ListDatasetGroups](AwsForecastActions.md#listdatasetgroups)
- [ListDatasetImportJobs](AwsForecastActions.md#listdatasetimportjobs)
- [ListDatasets](AwsForecastActions.md#listdatasets)
- [ListExplainabilities](AwsForecastActions.md#listexplainabilities)
- [ListExplainabilityExports](AwsForecastActions.md#listexplainabilityexports)
- [ListForecastExportJobs](AwsForecastActions.md#listforecastexportjobs)
- [ListForecasts](AwsForecastActions.md#listforecasts)
- [ListMonitorEvaluations](AwsForecastActions.md#listmonitorevaluations)
- [ListMonitors](AwsForecastActions.md#listmonitors)
- [ListPredictorBacktestExportJobs](AwsForecastActions.md#listpredictorbacktestexportjobs)
- [ListPredictors](AwsForecastActions.md#listpredictors)
- [ListTagsForResource](AwsForecastActions.md#listtagsforresource)
- [ListWhatIfAnalyses](AwsForecastActions.md#listwhatifanalyses)
- [ListWhatIfForecastExports](AwsForecastActions.md#listwhatifforecastexports)
- [ListWhatIfForecasts](AwsForecastActions.md#listwhatifforecasts)
- [QueryForecast](AwsForecastActions.md#queryforecast)
- [QueryWhatIfForecast](AwsForecastActions.md#querywhatifforecast)
- [ResumeResource](AwsForecastActions.md#resumeresource)
- [StopResource](AwsForecastActions.md#stopresource)
- [TagResource](AwsForecastActions.md#tagresource)
- [UntagResource](AwsForecastActions.md#untagresource)
- [UpdateDatasetGroup](AwsForecastActions.md#updatedatasetgroup)

## Enumeration Members

### CreateAutoPredictor

• **CreateAutoPredictor** = ``"forecast:CreateAutoPredictor"``

Grants permission to create an auto predictor

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateAutoPredictor.html

#### Defined in

actions/forecast.ts:17

___

### CreateDataset

• **CreateDataset** = ``"forecast:CreateDataset"``

Grants permission to create a dataset

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html

#### Defined in

actions/forecast.ts:23

___

### CreateDatasetGroup

• **CreateDatasetGroup** = ``"forecast:CreateDatasetGroup"``

Grants permission to create a dataset group

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html

#### Defined in

actions/forecast.ts:29

___

### CreateDatasetImportJob

• **CreateDatasetImportJob** = ``"forecast:CreateDatasetImportJob"``

Grants permission to create a dataset import job

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html

#### Defined in

actions/forecast.ts:35

___

### CreateExplainability

• **CreateExplainability** = ``"forecast:CreateExplainability"``

Grants permission to create an explainability

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainability.html

#### Defined in

actions/forecast.ts:41

___

### CreateExplainabilityExport

• **CreateExplainabilityExport** = ``"forecast:CreateExplainabilityExport"``

Grants permission to create an explainability export using an explainability re
source

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainabilityExport.html

#### Defined in

actions/forecast.ts:48

___

### CreateForecast

• **CreateForecast** = ``"forecast:CreateForecast"``

Grants permission to create a forecast

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html

#### Defined in

actions/forecast.ts:54

___

### CreateForecastEndpoint

• **CreateForecastEndpoint** = ``"forecast:CreateForecastEndpoint"``

Grants permission to create an endpoint using a Predictor resource

See https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html

#### Defined in

actions/forecast.ts:60

___

### CreateForecastExportJob

• **CreateForecastExportJob** = ``"forecast:CreateForecastExportJob"``

Grants permission to create a forecast export job using a forecast resource

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecastExportJob.html

#### Defined in

actions/forecast.ts:66

___

### CreateMonitor

• **CreateMonitor** = ``"forecast:CreateMonitor"``

Grants permission to create an monitor using a Predictor resource

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateMonitor.html

#### Defined in

actions/forecast.ts:72

___

### CreatePredictor

• **CreatePredictor** = ``"forecast:CreatePredictor"``

Grants permission to create a predictor

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictor.html

#### Defined in

actions/forecast.ts:78

___

### CreatePredictorBacktestExportJob

• **CreatePredictorBacktestExportJob** = ``"forecast:CreatePredictorBacktestExportJob"``

Grants permission to create a predictor backtest export job using a predictor

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictorBacktestExportJob.html

#### Defined in

actions/forecast.ts:84

___

### CreateWhatIfAnalysis

• **CreateWhatIfAnalysis** = ``"forecast:CreateWhatIfAnalysis"``

Grants permission to create a what-if analysis

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfAnalysis.html

#### Defined in

actions/forecast.ts:90

___

### CreateWhatIfForecast

• **CreateWhatIfForecast** = ``"forecast:CreateWhatIfForecast"``

Grants permission to create a what-if forecast

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfForecast.html

#### Defined in

actions/forecast.ts:96

___

### CreateWhatIfForecastExport

• **CreateWhatIfForecastExport** = ``"forecast:CreateWhatIfForecastExport"``

Grants permission to create a what-if forecast export using what-if forecast re
sources

See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfForecastExport.html

#### Defined in

actions/forecast.ts:103

___

### DeleteDataset

• **DeleteDataset** = ``"forecast:DeleteDataset"``

Grants permission to delete a dataset

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDataset.html

#### Defined in

actions/forecast.ts:109

___

### DeleteDatasetGroup

• **DeleteDatasetGroup** = ``"forecast:DeleteDatasetGroup"``

Grants permission to delete a dataset group

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDatasetGroup.html

#### Defined in

actions/forecast.ts:115

___

### DeleteDatasetImportJob

• **DeleteDatasetImportJob** = ``"forecast:DeleteDatasetImportJob"``

Grants permission to delete a dataset import job

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDatasetImportJob.html

#### Defined in

actions/forecast.ts:121

___

### DeleteExplainability

• **DeleteExplainability** = ``"forecast:DeleteExplainability"``

Grants permission to delete an explainability

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteExplainability.html

#### Defined in

actions/forecast.ts:127

___

### DeleteExplainabilityExport

• **DeleteExplainabilityExport** = ``"forecast:DeleteExplainabilityExport"``

Grants permission to delete an explainability export

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteExplainabilityExport.html

#### Defined in

actions/forecast.ts:133

___

### DeleteForecast

• **DeleteForecast** = ``"forecast:DeleteForecast"``

Grants permission to delete a forecast

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteForecast.html

#### Defined in

actions/forecast.ts:139

___

### DeleteForecastEndpoint

• **DeleteForecastEndpoint** = ``"forecast:DeleteForecastEndpoint"``

Grants permission to delete an endpoint resource

See https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html

#### Defined in

actions/forecast.ts:145

___

### DeleteForecastExportJob

• **DeleteForecastExportJob** = ``"forecast:DeleteForecastExportJob"``

Grants permission to delete a forecast export job

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteForecastExportJob.html

#### Defined in

actions/forecast.ts:151

___

### DeleteMonitor

• **DeleteMonitor** = ``"forecast:DeleteMonitor"``

Grants permission to delete a monitor resource

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteMonitor.html

#### Defined in

actions/forecast.ts:157

___

### DeletePredictor

• **DeletePredictor** = ``"forecast:DeletePredictor"``

Grants permission to delete a predictor

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeletePredictor.html

#### Defined in

actions/forecast.ts:163

___

### DeletePredictorBacktestExportJob

• **DeletePredictorBacktestExportJob** = ``"forecast:DeletePredictorBacktestExportJob"``

Grants permission to delete a predictor backtest export job

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeletePredictorBacktestExportJob.html

#### Defined in

actions/forecast.ts:169

___

### DeleteResourceTree

• **DeleteResourceTree** = ``"forecast:DeleteResourceTree"``

Grants permission to delete a resource and its child resources

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteResourceTree.html

#### Defined in

actions/forecast.ts:175

___

### DeleteWhatIfAnalysis

• **DeleteWhatIfAnalysis** = ``"forecast:DeleteWhatIfAnalysis"``

Grants permission to delete a what-if analysis

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteWhatIfAnalysis.html

#### Defined in

actions/forecast.ts:181

___

### DeleteWhatIfForecast

• **DeleteWhatIfForecast** = ``"forecast:DeleteWhatIfForecast"``

Grants permission to delete a what-if forecast

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteWhatIfForecast.html

#### Defined in

actions/forecast.ts:187

___

### DeleteWhatIfForecastExport

• **DeleteWhatIfForecastExport** = ``"forecast:DeleteWhatIfForecastExport"``

Grants permission to delete a what-if forecast export

See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteWhatIfForecastExport.html

#### Defined in

actions/forecast.ts:193

___

### DescribeAutoPredictor

• **DescribeAutoPredictor** = ``"forecast:DescribeAutoPredictor"``

Grants permission to describe an auto predictor

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeAutoPredictor.html

#### Defined in

actions/forecast.ts:199

___

### DescribeDataset

• **DescribeDataset** = ``"forecast:DescribeDataset"``

Grants permission to describe a dataset

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html

#### Defined in

actions/forecast.ts:205

___

### DescribeDatasetGroup

• **DescribeDatasetGroup** = ``"forecast:DescribeDatasetGroup"``

Grants permission to describe a dataset group

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html

#### Defined in

actions/forecast.ts:211

___

### DescribeDatasetImportJob

• **DescribeDatasetImportJob** = ``"forecast:DescribeDatasetImportJob"``

Grants permission to describe a dataset import job

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html

#### Defined in

actions/forecast.ts:217

___

### DescribeExplainability

• **DescribeExplainability** = ``"forecast:DescribeExplainability"``

Grants permission to describe an explainability

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeExplainability.html

#### Defined in

actions/forecast.ts:223

___

### DescribeExplainabilityExport

• **DescribeExplainabilityExport** = ``"forecast:DescribeExplainabilityExport"``

Grants permission to describe an explainability export

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeExplainabilityExport.html

#### Defined in

actions/forecast.ts:229

___

### DescribeForecast

• **DescribeForecast** = ``"forecast:DescribeForecast"``

Grants permission to describe a forecast

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeForecast.html

#### Defined in

actions/forecast.ts:235

___

### DescribeForecastEndpoint

• **DescribeForecastEndpoint** = ``"forecast:DescribeForecastEndpoint"``

Grants permission to describe an endpoint resource

See https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html

#### Defined in

actions/forecast.ts:241

___

### DescribeForecastExportJob

• **DescribeForecastExportJob** = ``"forecast:DescribeForecastExportJob"``

Grants permission to describe a forecast export job

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeForecastExportJob.html

#### Defined in

actions/forecast.ts:247

___

### DescribeMonitor

• **DescribeMonitor** = ``"forecast:DescribeMonitor"``

Grants permission to describe an monitor resource

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeMonitor.html

#### Defined in

actions/forecast.ts:253

___

### DescribePredictor

• **DescribePredictor** = ``"forecast:DescribePredictor"``

Grants permission to describe a predictor

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribePredictor.html

#### Defined in

actions/forecast.ts:259

___

### DescribePredictorBacktestExportJob

• **DescribePredictorBacktestExportJob** = ``"forecast:DescribePredictorBacktestExportJob"``

Grants permission to describe a predictor backtest export job

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribePredictorBacktestExportJob.html

#### Defined in

actions/forecast.ts:265

___

### DescribeWhatIfAnalysis

• **DescribeWhatIfAnalysis** = ``"forecast:DescribeWhatIfAnalysis"``

Grants permission to describe a what-if analysis

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeWhatIfAnalysis.html

#### Defined in

actions/forecast.ts:271

___

### DescribeWhatIfForecast

• **DescribeWhatIfForecast** = ``"forecast:DescribeWhatIfForecast"``

Grants permission to describe a what-if forecast

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeWhatIfForecast.html

#### Defined in

actions/forecast.ts:277

___

### DescribeWhatIfForecastExport

• **DescribeWhatIfForecastExport** = ``"forecast:DescribeWhatIfForecastExport"``

Grants permission to describe a what-if forecast export

See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeWhatIfForecastExport.html

#### Defined in

actions/forecast.ts:283

___

### GetAccuracyMetrics

• **GetAccuracyMetrics** = ``"forecast:GetAccuracyMetrics"``

Grants permission to get the Accuracy Metrics for a predictor

See https://docs.aws.amazon.com/forecast/latest/dg/API_GetAccuracyMetrics.html

#### Defined in

actions/forecast.ts:289

___

### GetRecentForecastContext

• **GetRecentForecastContext** = ``"forecast:GetRecentForecastContext"``

Grants permission to get the forecast context of a timeseries for an endpoint

See https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html

#### Defined in

actions/forecast.ts:295

___

### InvokeForecastEndpoint

• **InvokeForecastEndpoint** = ``"forecast:InvokeForecastEndpoint"``

Grants permission to invoke the endpoint to get forecast for a timeseries

See https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html

#### Defined in

actions/forecast.ts:301

___

### ListDatasetGroups

• **ListDatasetGroups** = ``"forecast:ListDatasetGroups"``

Grants permission to list all the dataset groups

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html

#### Defined in

actions/forecast.ts:307

___

### ListDatasetImportJobs

• **ListDatasetImportJobs** = ``"forecast:ListDatasetImportJobs"``

Grants permission to list all the dataset import jobs

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html

#### Defined in

actions/forecast.ts:313

___

### ListDatasets

• **ListDatasets** = ``"forecast:ListDatasets"``

Grants permission to list all the datasets

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html

#### Defined in

actions/forecast.ts:319

___

### ListExplainabilities

• **ListExplainabilities** = ``"forecast:ListExplainabilities"``

Grants permission to list all the explainabilities

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListExplainabilities.html

#### Defined in

actions/forecast.ts:325

___

### ListExplainabilityExports

• **ListExplainabilityExports** = ``"forecast:ListExplainabilityExports"``

Grants permission to list all the explainability exports

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListExplainabilityExports.html

#### Defined in

actions/forecast.ts:331

___

### ListForecastExportJobs

• **ListForecastExportJobs** = ``"forecast:ListForecastExportJobs"``

Grants permission to list all the forecast export jobs

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListForecastExportJobs.html

#### Defined in

actions/forecast.ts:337

___

### ListForecasts

• **ListForecasts** = ``"forecast:ListForecasts"``

Grants permission to list all the forecasts

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListForecasts.html

#### Defined in

actions/forecast.ts:343

___

### ListMonitorEvaluations

• **ListMonitorEvaluations** = ``"forecast:ListMonitorEvaluations"``

Grants permission to list all the monitor evaluation result for a monitor

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListMonitorEvaluations.html

#### Defined in

actions/forecast.ts:349

___

### ListMonitors

• **ListMonitors** = ``"forecast:ListMonitors"``

Grants permission to list all the monitor resources

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListMonitors.html

#### Defined in

actions/forecast.ts:355

___

### ListPredictorBacktestExportJobs

• **ListPredictorBacktestExportJobs** = ``"forecast:ListPredictorBacktestExportJobs"``

Grants permission to list all the predictor backtest export jobs

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListPredictorBacktestExportJobs.html

#### Defined in

actions/forecast.ts:361

___

### ListPredictors

• **ListPredictors** = ``"forecast:ListPredictors"``

Grants permission to list all the predictors

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListPredictors.html

#### Defined in

actions/forecast.ts:367

___

### ListTagsForResource

• **ListTagsForResource** = ``"forecast:ListTagsForResource"``

Grants permission to list the tags for an Amazon Forecast resource

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListTagsForResource.html

#### Defined in

actions/forecast.ts:373

___

### ListWhatIfAnalyses

• **ListWhatIfAnalyses** = ``"forecast:ListWhatIfAnalyses"``

Grants permission to list all the what-if analyses

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListWhatIfAnalyses.html

#### Defined in

actions/forecast.ts:379

___

### ListWhatIfForecastExports

• **ListWhatIfForecastExports** = ``"forecast:ListWhatIfForecastExports"``

Grants permission to list all the what-if forecast exports

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListWhatIfForecastExports.html

#### Defined in

actions/forecast.ts:385

___

### ListWhatIfForecasts

• **ListWhatIfForecasts** = ``"forecast:ListWhatIfForecasts"``

Grants permission to list all the what-if forecasts

See https://docs.aws.amazon.com/forecast/latest/dg/API_ListWhatIfForecasts.html

#### Defined in

actions/forecast.ts:391

___

### QueryForecast

• **QueryForecast** = ``"forecast:QueryForecast"``

Grants permission to retrieve a forecast for a single item

See https://docs.aws.amazon.com/forecast/latest/dg/API_forecastquery_QueryForecast.html

#### Defined in

actions/forecast.ts:397

___

### QueryWhatIfForecast

• **QueryWhatIfForecast** = ``"forecast:QueryWhatIfForecast"``

Grants permission to retrieve a what-if forecast for a single item

See https://docs.aws.amazon.com/forecast/latest/dg/API_forecastquery_QueryWhatIfForecast.html

#### Defined in

actions/forecast.ts:403

___

### ResumeResource

• **ResumeResource** = ``"forecast:ResumeResource"``

Grants permission to resume Amazon Forecast resource jobs

See https://docs.aws.amazon.com/forecast/latest/dg/API_ResumeResource.html

#### Defined in

actions/forecast.ts:409

___

### StopResource

• **StopResource** = ``"forecast:StopResource"``

Grants permission to stop Amazon Forecast resource jobs

See https://docs.aws.amazon.com/forecast/latest/dg/API_StopResource.html

#### Defined in

actions/forecast.ts:415

___

### TagResource

• **TagResource** = ``"forecast:TagResource"``

Grants permission to associate the specified tags to a resource

See https://docs.aws.amazon.com/forecast/latest/dg/API_TagResource.html

#### Defined in

actions/forecast.ts:421

___

### UntagResource

• **UntagResource** = ``"forecast:UntagResource"``

Grants permission to delete the specified tags for a resource

See https://docs.aws.amazon.com/forecast/latest/dg/API_UntagResource.html

#### Defined in

actions/forecast.ts:427

___

### UpdateDatasetGroup

• **UpdateDatasetGroup** = ``"forecast:UpdateDatasetGroup"``

Grants permission to update a dataset group

See https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html

#### Defined in

actions/forecast.ts:433
