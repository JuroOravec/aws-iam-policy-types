// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Forecast (FORECAST)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonforecast.html
 *
 * 2025-02-24T21:48:04.022Z
 */
export enum AwsForecastActions {
  /**
   * Grants permission to create an auto predictor
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateAutoPredictor.html
   */
  CreateAutoPredictor = 'forecast:CreateAutoPredictor',
  /**
   * Grants permission to create a dataset
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html
   */
  CreateDataset = 'forecast:CreateDataset',
  /**
   * Grants permission to create a dataset group
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html
   */
  CreateDatasetGroup = 'forecast:CreateDatasetGroup',
  /**
   * Grants permission to create a dataset import job
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html
   */
  CreateDatasetImportJob = 'forecast:CreateDatasetImportJob',
  /**
   * Grants permission to create an explainability
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainability.html
   */
  CreateExplainability = 'forecast:CreateExplainability',
  /**
   * Grants permission to create an explainability export using an explainability re
   * source
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainabilityExport.html
   */
  CreateExplainabilityExport = 'forecast:CreateExplainabilityExport',
  /**
   * Grants permission to create a forecast
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html
   */
  CreateForecast = 'forecast:CreateForecast',
  /**
   * Grants permission to create an endpoint using a Predictor resource
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   */
  CreateForecastEndpoint = 'forecast:CreateForecastEndpoint',
  /**
   * Grants permission to create a forecast export job using a forecast resource
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecastExportJob.html
   */
  CreateForecastExportJob = 'forecast:CreateForecastExportJob',
  /**
   * Grants permission to create an monitor using a Predictor resource
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateMonitor.html
   */
  CreateMonitor = 'forecast:CreateMonitor',
  /**
   * Grants permission to create a predictor
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictor.html
   */
  CreatePredictor = 'forecast:CreatePredictor',
  /**
   * Grants permission to create a predictor backtest export job using a predictor
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictorBacktestExportJob.html
   */
  CreatePredictorBacktestExportJob = 'forecast:CreatePredictorBacktestExportJob',
  /**
   * Grants permission to create a what-if analysis
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfAnalysis.html
   */
  CreateWhatIfAnalysis = 'forecast:CreateWhatIfAnalysis',
  /**
   * Grants permission to create a what-if forecast
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfForecast.html
   */
  CreateWhatIfForecast = 'forecast:CreateWhatIfForecast',
  /**
   * Grants permission to create a what-if forecast export using what-if forecast re
   * sources
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfForecastExport.html
   */
  CreateWhatIfForecastExport = 'forecast:CreateWhatIfForecastExport',
  /**
   * Grants permission to delete a dataset
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDataset.html
   */
  DeleteDataset = 'forecast:DeleteDataset',
  /**
   * Grants permission to delete a dataset group
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDatasetGroup.html
   */
  DeleteDatasetGroup = 'forecast:DeleteDatasetGroup',
  /**
   * Grants permission to delete a dataset import job
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDatasetImportJob.html
   */
  DeleteDatasetImportJob = 'forecast:DeleteDatasetImportJob',
  /**
   * Grants permission to delete an explainability
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteExplainability.html
   */
  DeleteExplainability = 'forecast:DeleteExplainability',
  /**
   * Grants permission to delete an explainability export
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteExplainabilityExport.html
   */
  DeleteExplainabilityExport = 'forecast:DeleteExplainabilityExport',
  /**
   * Grants permission to delete a forecast
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteForecast.html
   */
  DeleteForecast = 'forecast:DeleteForecast',
  /**
   * Grants permission to delete an endpoint resource
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   */
  DeleteForecastEndpoint = 'forecast:DeleteForecastEndpoint',
  /**
   * Grants permission to delete a forecast export job
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteForecastExportJob.html
   */
  DeleteForecastExportJob = 'forecast:DeleteForecastExportJob',
  /**
   * Grants permission to delete a monitor resource
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteMonitor.html
   */
  DeleteMonitor = 'forecast:DeleteMonitor',
  /**
   * Grants permission to delete a predictor
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeletePredictor.html
   */
  DeletePredictor = 'forecast:DeletePredictor',
  /**
   * Grants permission to delete a predictor backtest export job
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeletePredictorBacktestExportJob.html
   */
  DeletePredictorBacktestExportJob = 'forecast:DeletePredictorBacktestExportJob',
  /**
   * Grants permission to delete a resource and its child resources
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteResourceTree.html
   */
  DeleteResourceTree = 'forecast:DeleteResourceTree',
  /**
   * Grants permission to delete a what-if analysis
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteWhatIfAnalysis.html
   */
  DeleteWhatIfAnalysis = 'forecast:DeleteWhatIfAnalysis',
  /**
   * Grants permission to delete a what-if forecast
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteWhatIfForecast.html
   */
  DeleteWhatIfForecast = 'forecast:DeleteWhatIfForecast',
  /**
   * Grants permission to delete a what-if forecast export
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteWhatIfForecastExport.html
   */
  DeleteWhatIfForecastExport = 'forecast:DeleteWhatIfForecastExport',
  /**
   * Grants permission to describe an auto predictor
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeAutoPredictor.html
   */
  DescribeAutoPredictor = 'forecast:DescribeAutoPredictor',
  /**
   * Grants permission to describe a dataset
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html
   */
  DescribeDataset = 'forecast:DescribeDataset',
  /**
   * Grants permission to describe a dataset group
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html
   */
  DescribeDatasetGroup = 'forecast:DescribeDatasetGroup',
  /**
   * Grants permission to describe a dataset import job
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html
   */
  DescribeDatasetImportJob = 'forecast:DescribeDatasetImportJob',
  /**
   * Grants permission to describe an explainability
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeExplainability.html
   */
  DescribeExplainability = 'forecast:DescribeExplainability',
  /**
   * Grants permission to describe an explainability export
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeExplainabilityExport.html
   */
  DescribeExplainabilityExport = 'forecast:DescribeExplainabilityExport',
  /**
   * Grants permission to describe a forecast
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeForecast.html
   */
  DescribeForecast = 'forecast:DescribeForecast',
  /**
   * Grants permission to describe an endpoint resource
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   */
  DescribeForecastEndpoint = 'forecast:DescribeForecastEndpoint',
  /**
   * Grants permission to describe a forecast export job
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeForecastExportJob.html
   */
  DescribeForecastExportJob = 'forecast:DescribeForecastExportJob',
  /**
   * Grants permission to describe an monitor resource
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeMonitor.html
   */
  DescribeMonitor = 'forecast:DescribeMonitor',
  /**
   * Grants permission to describe a predictor
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribePredictor.html
   */
  DescribePredictor = 'forecast:DescribePredictor',
  /**
   * Grants permission to describe a predictor backtest export job
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribePredictorBacktestExportJob.html
   */
  DescribePredictorBacktestExportJob = 'forecast:DescribePredictorBacktestExportJob',
  /**
   * Grants permission to describe a what-if analysis
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeWhatIfAnalysis.html
   */
  DescribeWhatIfAnalysis = 'forecast:DescribeWhatIfAnalysis',
  /**
   * Grants permission to describe a what-if forecast
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeWhatIfForecast.html
   */
  DescribeWhatIfForecast = 'forecast:DescribeWhatIfForecast',
  /**
   * Grants permission to describe a what-if forecast export
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeWhatIfForecastExport.html
   */
  DescribeWhatIfForecastExport = 'forecast:DescribeWhatIfForecastExport',
  /**
   * Grants permission to get the Accuracy Metrics for a predictor
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_GetAccuracyMetrics.html
   */
  GetAccuracyMetrics = 'forecast:GetAccuracyMetrics',
  /**
   * Grants permission to get the forecast context of a timeseries for an endpoint
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   */
  GetRecentForecastContext = 'forecast:GetRecentForecastContext',
  /**
   * Grants permission to invoke the endpoint to get forecast for a timeseries
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   */
  InvokeForecastEndpoint = 'forecast:InvokeForecastEndpoint',
  /**
   * Grants permission to list all the dataset groups
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html
   */
  ListDatasetGroups = 'forecast:ListDatasetGroups',
  /**
   * Grants permission to list all the dataset import jobs
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html
   */
  ListDatasetImportJobs = 'forecast:ListDatasetImportJobs',
  /**
   * Grants permission to list all the datasets
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html
   */
  ListDatasets = 'forecast:ListDatasets',
  /**
   * Grants permission to list all the explainabilities
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListExplainabilities.html
   */
  ListExplainabilities = 'forecast:ListExplainabilities',
  /**
   * Grants permission to list all the explainability exports
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListExplainabilityExports.html
   */
  ListExplainabilityExports = 'forecast:ListExplainabilityExports',
  /**
   * Grants permission to list all the forecast export jobs
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListForecastExportJobs.html
   */
  ListForecastExportJobs = 'forecast:ListForecastExportJobs',
  /**
   * Grants permission to list all the forecasts
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListForecasts.html
   */
  ListForecasts = 'forecast:ListForecasts',
  /**
   * Grants permission to list all the monitor evaluation result for a monitor
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListMonitorEvaluations.html
   */
  ListMonitorEvaluations = 'forecast:ListMonitorEvaluations',
  /**
   * Grants permission to list all the monitor resources
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListMonitors.html
   */
  ListMonitors = 'forecast:ListMonitors',
  /**
   * Grants permission to list all the predictor backtest export jobs
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListPredictorBacktestExportJobs.html
   */
  ListPredictorBacktestExportJobs = 'forecast:ListPredictorBacktestExportJobs',
  /**
   * Grants permission to list all the predictors
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListPredictors.html
   */
  ListPredictors = 'forecast:ListPredictors',
  /**
   * Grants permission to list the tags for an Amazon Forecast resource
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListTagsForResource.html
   */
  ListTagsForResource = 'forecast:ListTagsForResource',
  /**
   * Grants permission to list all the what-if analyses
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListWhatIfAnalyses.html
   */
  ListWhatIfAnalyses = 'forecast:ListWhatIfAnalyses',
  /**
   * Grants permission to list all the what-if forecast exports
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListWhatIfForecastExports.html
   */
  ListWhatIfForecastExports = 'forecast:ListWhatIfForecastExports',
  /**
   * Grants permission to list all the what-if forecasts
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ListWhatIfForecasts.html
   */
  ListWhatIfForecasts = 'forecast:ListWhatIfForecasts',
  /**
   * Grants permission to retrieve a forecast for a single item
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_forecastquery_QueryForecast.html
   */
  QueryForecast = 'forecast:QueryForecast',
  /**
   * Grants permission to retrieve a what-if forecast for a single item
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_forecastquery_QueryWhatIfForecast.html
   */
  QueryWhatIfForecast = 'forecast:QueryWhatIfForecast',
  /**
   * Grants permission to resume Amazon Forecast resource jobs
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_ResumeResource.html
   */
  ResumeResource = 'forecast:ResumeResource',
  /**
   * Grants permission to stop Amazon Forecast resource jobs
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_StopResource.html
   */
  StopResource = 'forecast:StopResource',
  /**
   * Grants permission to associate the specified tags to a resource
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_TagResource.html
   */
  TagResource = 'forecast:TagResource',
  /**
   * Grants permission to delete the specified tags for a resource
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_UntagResource.html
   */
  UntagResource = 'forecast:UntagResource',
  /**
   * Grants permission to update a dataset group
   *
   * See https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html
   */
  UpdateDatasetGroup = 'forecast:UpdateDatasetGroup',
}
