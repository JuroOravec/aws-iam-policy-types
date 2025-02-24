// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Elemental MediaPackage (MEDIAPACKAGE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackage.html
 *
 * 2025-02-24T21:47:53.920Z
 */
export enum AwsMediapackageActions {
  /**
   * Grants permission to configure access logs for a Channel
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-configure_logs.html#channels-id-configure_logsput
   */
  ConfigureLogs = 'mediapackage:ConfigureLogs',
  /**
   * Grants permission to create a channel in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels.html#channelspost
   */
  CreateChannel = 'mediapackage:CreateChannel',
  /**
   * Grants permission to create a harvest job in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs.html#harvest_jobspost
   */
  CreateHarvestJob = 'mediapackage:CreateHarvestJob',
  /**
   * Grants permission to create an endpoint in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints.html#origin_endpointspost
   */
  CreateOriginEndpoint = 'mediapackage:CreateOriginEndpoint',
  /**
   * Grants permission to delete a channel in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-iddelete
   */
  DeleteChannel = 'mediapackage:DeleteChannel',
  /**
   * Grants permission to delete an endpoint in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-iddelete
   */
  DeleteOriginEndpoint = 'mediapackage:DeleteOriginEndpoint',
  /**
   * Grants permission to view the details of a channel in AWS Elemental MediaPackag
   * e
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-idget
   */
  DescribeChannel = 'mediapackage:DescribeChannel',
  /**
   * Grants permission to view the details of a harvest job in AWS Elemental MediaPa
   * ckage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs-id.html#harvest_jobs-idget
   */
  DescribeHarvestJob = 'mediapackage:DescribeHarvestJob',
  /**
   * Grants permission to view the details of an endpoint in AWS Elemental MediaPack
   * age
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-idget
   */
  DescribeOriginEndpoint = 'mediapackage:DescribeOriginEndpoint',
  /**
   * Grants permission to view a list of channels in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels.html#channelsget
   */
  ListChannels = 'mediapackage:ListChannels',
  /**
   * Grants permission to view a list of harvest jobs in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs.html#harvest_jobsget
   */
  ListHarvestJobs = 'mediapackage:ListHarvestJobs',
  /**
   * Grants permission to view a list of endpoints in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints.html#origin_endpointsget
   */
  ListOriginEndpoints = 'mediapackage:ListOriginEndpoints',
  /**
   * Grants permission to list the tags assigned to a Channel or OriginEndpoint
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arnget
   */
  ListTagsForResource = 'mediapackage:ListTagsForResource',
  /**
   * Grants permission to rotate credentials for the first IngestEndpoint of a Chann
   * el in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-credentials.html#channels-id-credentialsput
   */
  RotateChannelCredentials = 'mediapackage:RotateChannelCredentials',
  /**
   * Grants permission to rotate IngestEndpoint credentials for a Channel in AWS Ele
   * mental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-ingest_endpoints-ingest_endpoint_id-credentials.html#channels-id-ingest_endpoints-ingest_endpoint_id-credentialsput
   */
  RotateIngestEndpointCredentials = 'mediapackage:RotateIngestEndpointCredentials',
  /**
   * Grants permission to tag a MediaPackage resource
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/hj-create.html
   */
  TagResource = 'mediapackage:TagResource',
  /**
   * Grants permission to delete tags to a Channel or OriginEndpoint
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arndelete
   */
  UntagResource = 'mediapackage:UntagResource',
  /**
   * Grants permission to make changes to a channel in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-idput
   */
  UpdateChannel = 'mediapackage:UpdateChannel',
  /**
   * Grants permission to make changes to an endpoint in AWS Elemental MediaPackage
   *
   * See https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-idput
   */
  UpdateOriginEndpoint = 'mediapackage:UpdateOriginEndpoint',
}
