// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon AppFlow (APPFLOW)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappflow.html
 *
 * 2025-02-24T21:46:42.213Z
 */
export enum AwsAppflowActions {
  /**
   * Grants permission to cancel in-progress executions of an Amazon AppFlow flow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CancelFlowExecutions.html
   */
  CancelFlowExecutions = 'appflow:CancelFlowExecutions',
  /**
   * Grants permission to create a login profile to be used with Amazon AppFlow flow
   * s
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateConnectorProfile.html
   */
  CreateConnectorProfile = 'appflow:CreateConnectorProfile',
  /**
   * Grants permission to create an Amazon AppFlow flow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateFlow.html
   */
  CreateFlow = 'appflow:CreateFlow',
  /**
   * Grants permission to delete a login profile configured in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html
   */
  DeleteConnectorProfile = 'appflow:DeleteConnectorProfile',
  /**
   * Grants permission to delete an Amazon AppFlow flow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DeleteFlow.html
   */
  DeleteFlow = 'appflow:DeleteFlow',
  /**
   * Grants permission to describe a connector registered in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnector.html
   */
  DescribeConnector = 'appflow:DescribeConnector',
  /**
   * Grants permission to describe all fields for an object in a login profile confi
   * gured in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorEntity.html
   */
  DescribeConnectorEntity = 'appflow:DescribeConnectorEntity',
  /**
   * Grants permission to describe all fields for an object in a login profile confi
   * gured in Amazon AppFlow (Console Only)
   *
   * See https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  DescribeConnectorFields = 'appflow:DescribeConnectorFields',
  /**
   * Grants permission to describe all login profiles configured in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html
   */
  DescribeConnectorProfiles = 'appflow:DescribeConnectorProfiles',
  /**
   * Grants permission to describe all connectors supported by Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectors.html
   */
  DescribeConnectors = 'appflow:DescribeConnectors',
  /**
   * Grants permission to describe a specific flow configured in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlow.html
   */
  DescribeFlow = 'appflow:DescribeFlow',
  /**
   * Grants permission to describe all flow executions for a flow configured in Amaz
   * on AppFlow (Console Only)
   *
   * See https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  DescribeFlowExecution = 'appflow:DescribeFlowExecution',
  /**
   * Grants permission to describe all flow executions for a flow configured in Amaz
   * on AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlowExecutionRecords.html
   */
  DescribeFlowExecutionRecords = 'appflow:DescribeFlowExecutionRecords',
  /**
   * Grants permission to describe all flows configured in Amazon AppFlow (Console O
   * nly)
   *
   * See https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  DescribeFlows = 'appflow:DescribeFlows',
  /**
   * Grants permission to list all objects for a login profile configured in Amazon
   * AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListConnectorEntities.html
   */
  ListConnectorEntities = 'appflow:ListConnectorEntities',
  /**
   * Grants permission to list all objects for a login profile configured in Amazon
   * AppFlow (Console Only)
   *
   * See https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  ListConnectorFields = 'appflow:ListConnectorFields',
  /**
   * Grants permission to list all connectors supported in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListConnectors.html
   */
  ListConnectors = 'appflow:ListConnectors',
  /**
   * Grants permission to list all flows configured in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListFlows.html
   */
  ListFlows = 'appflow:ListFlows',
  /**
   * Grants permission to list tags for a flow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'appflow:ListTagsForResource',
  /**
   * Grants permission to register an Amazon AppFlow connector
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_RegisterConnector.html
   */
  RegisterConnector = 'appflow:RegisterConnector',
  /**
   * Grants permission to resets metadata of connector entities that Amazon AppFlow
   * stored in its cache
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ResetConnectorMetadataCache.html
   */
  ResetConnectorMetadataCache = 'appflow:ResetConnectorMetadataCache',
  /**
   * Grants permission to run a flow configured in Amazon AppFlow (Console Only)
   *
   * See https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  RunFlow = 'appflow:RunFlow',
  /**
   * Grants permission to activate (for scheduled and event-triggered flows) or run
   * (for on-demand flows) a flow configured in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StartFlow.html
   */
  StartFlow = 'appflow:StartFlow',
  /**
   * Grants permission to deactivate a scheduled or event-triggered flow configured
   * in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StopFlow.html
   */
  StopFlow = 'appflow:StopFlow',
  /**
   * Grants permission to tag a flow or a connector
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_TagResource.html
   */
  TagResource = 'appflow:TagResource',
  /**
   * Grants permission to un-register a connector in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UnregisterConnector.html
   */
  UnRegisterConnector = 'appflow:UnRegisterConnector',
  /**
   * Grants permission to untag a flow or a connector
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UntagResource.html
   */
  UntagResource = 'appflow:UntagResource',
  /**
   * Grants permission to update a login profile configured in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateConnectorProfile.html
   */
  UpdateConnectorProfile = 'appflow:UpdateConnectorProfile',
  /**
   * Grants permission to update a registered connector configured in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateConnectorRegistration.html
   */
  UpdateConnectorRegistration = 'appflow:UpdateConnectorRegistration',
  /**
   * Grants permission to update a flow configured in Amazon AppFlow
   *
   * See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateFlow.html
   */
  UpdateFlow = 'appflow:UpdateFlow',
  /**
   * Grants permission to use a connector profile while creating a flow in Amazon Ap
   * pFlow
   *
   * See API_CreateFlow.html
   */
  UseConnectorProfile = 'appflow:UseConnectorProfile',
}
