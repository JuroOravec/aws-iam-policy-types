// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Fault Injection Service (FIS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfaultinjectionservice.html
 *
 * 2024-02-12T09:57:24.676Z
 */
export enum AwsFisActions {
  /**
   * Grants permission to create an AWS FIS experiment template
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_CreateExperimentTemplate.html
   */
  CreateExperimentTemplate = 'fis:CreateExperimentTemplate',
  /**
   * Grants permission to create an AWS FIS target account configuration
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_CreateTargetAccountConfiguration.html
   */
  CreateTargetAccountConfiguration = 'fis:CreateTargetAccountConfiguration',
  /**
   * Grants permission to delete the AWS FIS experiment template
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_DeleteExperimentTemplate.html
   */
  DeleteExperimentTemplate = 'fis:DeleteExperimentTemplate',
  /**
   * Grants permission to delete an AWS FIS target account configuration
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_DeleteTargetAccountConfiguration.html
   */
  DeleteTargetAccountConfiguration = 'fis:DeleteTargetAccountConfiguration',
  /**
   * Grants permission to retrieve an AWS FIS action
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetAction.html
   */
  GetAction = 'fis:GetAction',
  /**
   * Grants permission to retrieve an AWS FIS experiment
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperiment.html
   */
  GetExperiment = 'fis:GetExperiment',
  /**
   * Grants permission to retrieve an AWS FIS target account configuration for an AW
   * S FIS experiment
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperimentTargetAccountConfiguration.html
   */
  GetExperimentTargetAccountConfiguration = 'fis:GetExperimentTargetAccountConfiguration',
  /**
   * Grants permission to retrieve an AWS FIS Experiment Template
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperimentTemplate.html
   */
  GetExperimentTemplate = 'fis:GetExperimentTemplate',
  /**
   * Grants permission to retrieve an AWS FIS target account configuration for an AW
   * S FIS experiment template
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetTargetAccountConfiguration.html
   */
  GetTargetAccountConfiguration = 'fis:GetTargetAccountConfiguration',
  /**
   * Grants permission to get information about the specified resource type
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_GetTargetResourceType.html
   */
  GetTargetResourceType = 'fis:GetTargetResourceType',
  /**
   * Grants permission to inject an API internal error on the provided AWS service f
   * rom an FIS Experiment
   *
   * See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#fis-actions-reference-fis
   */
  InjectApiInternalError = 'fis:InjectApiInternalError',
  /**
   * Grants permission to inject an API throttle error on the provided AWS service f
   * rom an FIS Experiment
   *
   * See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#fis-actions-reference-fis
   */
  InjectApiThrottleError = 'fis:InjectApiThrottleError',
  /**
   * Grants permission to inject an API unavailable error on the provided AWS servic
   * e from an FIS Experiment
   *
   * See https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#fis-actions-reference-fis
   */
  InjectApiUnavailableError = 'fis:InjectApiUnavailableError',
  /**
   * Grants permission to list all available AWS FIS actions
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListActions.html
   */
  ListActions = 'fis:ListActions',
  /**
   * Grants permission to list resolved targets for AWS FIS experiments
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperimentResolvedTargets.html
   */
  ListExperimentResolvedTargets = 'fis:ListExperimentResolvedTargets',
  /**
   * Grants permission to list target account configurations for AWS FIS experiments
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperimentTargetAccountConfigurations.html
   */
  ListExperimentTargetAccountConfigurations = 'fis:ListExperimentTargetAccountConfigurations',
  /**
   * Grants permission to list all available AWS FIS experiment templates
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperimentTemplates.html
   */
  ListExperimentTemplates = 'fis:ListExperimentTemplates',
  /**
   * Grants permission to list all available AWS FIS experiments
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperiments.html
   */
  ListExperiments = 'fis:ListExperiments',
  /**
   * Grants permission to list the tags for an AWS FIS resource
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'fis:ListTagsForResource',
  /**
   * Grants permission to list target account configurations for AWS FIS experiment
   * templates
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTargetAccountConfigurations.html
   */
  ListTargetAccountConfigurations = 'fis:ListTargetAccountConfigurations',
  /**
   * Grants permission to list the resource types
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTargetResourceTypes.html
   */
  ListTargetResourceTypes = 'fis:ListTargetResourceTypes',
  /**
   * Grants permission to run an AWS FIS experiment
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_StartExperiment.html
   */
  StartExperiment = 'fis:StartExperiment',
  /**
   * Grants permission to stop an AWS FIS experiment
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_StopExperiment.html
   */
  StopExperiment = 'fis:StopExperiment',
  /**
   * Grants permission to tag AWS FIS resources
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_TagResource.html
   */
  TagResource = 'fis:TagResource',
  /**
   * Grants permission to untag AWS FIS resources
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'fis:UntagResource',
  /**
   * Grants permission to update the specified AWS FIS experiment template
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_UpdateExperimentTemplate.html
   */
  UpdateExperimentTemplate = 'fis:UpdateExperimentTemplate',
  /**
   * Grants permission to update an AWS FIS target account configuration
   *
   * See https://docs.aws.amazon.com/fis/latest/APIReference/API_UpdateTargetAccountConfiguration.html
   */
  UpdateTargetAccountConfiguration = 'fis:UpdateTargetAccountConfiguration',
}
