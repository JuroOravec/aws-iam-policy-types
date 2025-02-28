// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon OpenSearch Ingestion (OSIS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchingestion.html
 *
 * 2025-02-24T21:49:05.010Z
 */
export enum AwsOsisActions {
  /**
   * Grants permission to create an OpenSearch Ingestion pipeline
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_CreatePipeline.html
   */
  CreatePipeline = 'osis:CreatePipeline',
  /**
   * Grants permission to delete an OpenSearch Ingestion pipeline
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_DeletePipeline.html
   */
  DeletePipeline = 'osis:DeletePipeline',
  /**
   * Grants permission to retrieve configuration information for an OpenSearch Inges
   * tion pipeline
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_GetPipeline.html
   */
  GetPipeline = 'osis:GetPipeline',
  /**
   * Grants permission to get the contents of an OpenSearch Ingestion pipeline bluep
   * rint
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_GetPipelineBlueprint.html
   */
  GetPipelineBlueprint = 'osis:GetPipelineBlueprint',
  /**
   * Grants permission to get granular information about the status of an OpenSearch
   * Ingestion pipeline
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_GetPipelineChangeProgress.html
   */
  GetPipelineChangeProgress = 'osis:GetPipelineChangeProgress',
  /**
   * Grants permission to ingest data through an OpenSearch Ingestion pipeline
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configure-client.html
   */
  Ingest = 'osis:Ingest',
  /**
   * Grants permission to list the names of available blueprints for an OpenSearch I
   * ngestion pipeline configuration
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ListPipelineBlueprints.html
   */
  ListPipelineBlueprints = 'osis:ListPipelineBlueprints',
  /**
   * Grants permission to list basic configuration for each OpenSearch Ingestion pip
   * eline in the current account and Region
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ListPipelines.html
   */
  ListPipelines = 'osis:ListPipelines',
  /**
   * Grants permission to list all resource tags associated with an OpenSearch Inges
   * tion pipeline
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ListTagsForResource.html
   */
  ListTagsForResource = 'osis:ListTagsForResource',
  /**
   * Grants permission to start an OpenSearch Ingestion pipeline
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_StartPipeline.html
   */
  StartPipeline = 'osis:StartPipeline',
  /**
   * Grants permission to stop an OpenSearch Ingestion pipeline
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_StopPipeline.html
   */
  StopPipeline = 'osis:StopPipeline',
  /**
   * Grants permission to attach resource tags to an OpenSearch Ingestion pipeline
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_TagResource.html
   */
  TagResource = 'osis:TagResource',
  /**
   * Grants permission to remove resource tags from an OpenSearch Ingestion Service
   * pipeline
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_UntagResource.html
   */
  UntagResource = 'osis:UntagResource',
  /**
   * Grants permission to modify the configuration of an OpenSearch Ingestion pipeli
   * ne
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_UpdatePipeline.html
   */
  UpdatePipeline = 'osis:UpdatePipeline',
  /**
   * Grants permission to validate the configuration of an OpenSearch Ingestion pipe
   * line
   *
   * See https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ValidatePipeline.html
   */
  ValidatePipeline = 'osis:ValidatePipeline',
}
