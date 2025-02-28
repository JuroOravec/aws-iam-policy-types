// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Performance Insights (PI)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsperformanceinsights.html
 *
 * 2025-02-24T21:49:11.350Z
 */
export enum AwsPiActions {
  /**
   * Grants permission to call CreatePerformanceAnalysisReport API to create a Perfo
   * rmance Analysis Report for a specified DB instance
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_CreatePerformanceAnalysisReport.html
   */
  CreatePerformanceAnalysisReport = 'pi:CreatePerformanceAnalysisReport',
  /**
   * Grants permission to call DeletePerformanceAnalysisReport API to delete a Perfo
   * rmance Analysis Report for a specified DB instance
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_DeletePerformanceAnalysisReport.html
   */
  DeletePerformanceAnalysisReport = 'pi:DeletePerformanceAnalysisReport',
  /**
   * Grants permission to call DescribeDimensionKeys API to retrieve the top N dimen
   * sion keys for a metric for a specific time period
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_DescribeDimensionKeys.html
   */
  DescribeDimensionKeys = 'pi:DescribeDimensionKeys',
  /**
   * Grants permission to call GetDimensionKeyDetails API to retrieve the attributes
   * of the specified dimension group
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetDimensionKeyDetails.html
   */
  GetDimensionKeyDetails = 'pi:GetDimensionKeyDetails',
  /**
   * Grants permission to call GetPerformanceAnalysisReport API to retrieve a Perfor
   * mance Analysis Report for a specified DB instance
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetPerformanceAnalysisReport.html
   */
  GetPerformanceAnalysisReport = 'pi:GetPerformanceAnalysisReport',
  /**
   * Grants permission to call GetResourceMetadata API to retrieve the metadata for
   * different features
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetadata.html
   */
  GetResourceMetadata = 'pi:GetResourceMetadata',
  /**
   * Grants permission to call GetResourceMetrics API to retrieve PI metrics for a s
   * et of data sources, over a time period
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html
   */
  GetResourceMetrics = 'pi:GetResourceMetrics',
  /**
   * Grants permission to call ListAvailableResourceDimensions API to retrieve the d
   * imensions that can be queried for each specified metric type on a specified DB
   * instance
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListAvailableResourceDimensions.html
   */
  ListAvailableResourceDimensions = 'pi:ListAvailableResourceDimensions',
  /**
   * Grants permission to call ListAvailableResourceMetrics API to retrieve metrics
   * of the specified types that can be queried for a specified DB instance
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListAvailableResourceMetrics.html
   */
  ListAvailableResourceMetrics = 'pi:ListAvailableResourceMetrics',
  /**
   * Grants permission to call ListPerformanceAnalysisReports API to list Performanc
   * e Analysis Reports for a specified DB instance
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListPerformanceAnalysisReports.html
   */
  ListPerformanceAnalysisReports = 'pi:ListPerformanceAnalysisReports',
  /**
   * Grants permission to call ListTagsForResource API to list tags for a resource
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'pi:ListTagsForResource',
  /**
   * Grants permission to call TagResource API to tag a resource
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_TagResource.html
   */
  TagResource = 'pi:TagResource',
  /**
   * Grants permission to call UntagResource API to untag a resource
   *
   * See https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'pi:UntagResource',
}
