// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Step Functions (STATES)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsstepfunctions.html
 *
 * 2025-02-24T21:49:50.787Z
 */
export enum AwsStatesActions {
  /**
   * Grants permission to create an activity
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateActivity.html
   */
  CreateActivity = 'states:CreateActivity',
  /**
   * Grants permission to create a state machine
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateStateMachine.html
   */
  CreateStateMachine = 'states:CreateStateMachine',
  /**
   * Grants permission to create a state machine alias
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateStateMachineAlias.html
   */
  CreateStateMachineAlias = 'states:CreateStateMachineAlias',
  /**
   * Grants permission to delete an activity
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteActivity.html
   */
  DeleteActivity = 'states:DeleteActivity',
  /**
   * Grants permission to delete a state machine
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachine.html
   */
  DeleteStateMachine = 'states:DeleteStateMachine',
  /**
   * Grants permission to delete a state machine alias
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachineAlias.html
   */
  DeleteStateMachineAlias = 'states:DeleteStateMachineAlias',
  /**
   * Grants permission to delete a state machine version
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachineVersion.html
   */
  DeleteStateMachineVersion = 'states:DeleteStateMachineVersion',
  /**
   * Grants permission to describe an activity
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeActivity.html
   */
  DescribeActivity = 'states:DescribeActivity',
  /**
   * Grants permission to describe an execution
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeExecution.html
   */
  DescribeExecution = 'states:DescribeExecution',
  /**
   * Grants permission to describe a map run
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeMapRun.html
   */
  DescribeMapRun = 'states:DescribeMapRun',
  /**
   * Grants permission to describe a state machine
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachine.html
   */
  DescribeStateMachine = 'states:DescribeStateMachine',
  /**
   * Grants permission to describe a state machine alias
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachineAlias.html
   */
  DescribeStateMachineAlias = 'states:DescribeStateMachineAlias',
  /**
   * Grants permission to describe the state machine for an execution
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachineForExecution.html
   */
  DescribeStateMachineForExecution = 'states:DescribeStateMachineForExecution',
  /**
   * Grants permission to be used by workers to retrieve a task (with the specified
   * activity ARN) which has been scheduled for execution by a running state machine
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetActivityTask.html
   */
  GetActivityTask = 'states:GetActivityTask',
  /**
   * Grants permission to return the history of the specified execution as a list of
   * events
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html
   */
  GetExecutionHistory = 'states:GetExecutionHistory',
  /**
   * Grants permission to invoke the HTTP Task state
   *
   * See https://docs.aws.amazon.com/step-functions/latest/dg/connect-third-party-apis.html
   */
  InvokeHTTPEndpoint = 'states:InvokeHTTPEndpoint',
  /**
   * Grants permission to list the existing activities
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListActivities.html
   */
  ListActivities = 'states:ListActivities',
  /**
   * Grants permission to list the executions of a state machine
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html
   */
  ListExecutions = 'states:ListExecutions',
  /**
   * Grants permission to list the map runs of an execution
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListMapRuns.html
   */
  ListMapRuns = 'states:ListMapRuns',
  /**
   * Grants permission to list the aliases of a state machine
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachineAliases.html
   */
  ListStateMachineAliases = 'states:ListStateMachineAliases',
  /**
   * Grants permission to list the versions of a state machine
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachineVersions.html
   */
  ListStateMachineVersions = 'states:ListStateMachineVersions',
  /**
   * Grants permission to lists the existing state machines
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachines.html
   */
  ListStateMachines = 'states:ListStateMachines',
  /**
   * Grants permission to list tags for an AWS Step Functions resource
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'states:ListTagsForResource',
  /**
   * Grants permission to publish a state machine version
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_PublishStateMachineVersion.html
   */
  PublishStateMachineVersion = 'states:PublishStateMachineVersion',
  /**
   * Grants permission to redrive an execution
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_RedriveExecution.html
   */
  RedriveExecution = 'states:RedriveExecution',
  /**
   * Grants permission to reveal sensitive data from an execution
   *
   * See https://docs.aws.amazon.com/step-functions/latest/dg/test-state-isolation.html
   */
  RevealSecrets = 'states:RevealSecrets',
  /**
   * Grants permission to report that the task identified by the taskToken failed
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskFailure.html
   */
  SendTaskFailure = 'states:SendTaskFailure',
  /**
   * Grants permission to report to the service that the task represented by the spe
   * cified taskToken is still making progress
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html
   */
  SendTaskHeartbeat = 'states:SendTaskHeartbeat',
  /**
   * Grants permission to report that the task identified by the taskToken completed
   * successfully
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskSuccess.html
   */
  SendTaskSuccess = 'states:SendTaskSuccess',
  /**
   * Grants permission to start a state machine execution
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html
   */
  StartExecution = 'states:StartExecution',
  /**
   * Grants permission to start a Synchronous Express state machine execution
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartSyncExecution.html
   */
  StartSyncExecution = 'states:StartSyncExecution',
  /**
   * Grants permission to stop an execution
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_StopExecution.html
   */
  StopExecution = 'states:StopExecution',
  /**
   * Grants permission to tag an AWS Step Functions resource
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_TagResource.html
   */
  TagResource = 'states:TagResource',
  /**
   * Grants permission to test a state machine definition
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_TestState.html
   */
  TestState = 'states:TestState',
  /**
   * Grants permission to remove a tag from an AWS Step Functions resource
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_UntagResource.html
   */
  UntagResource = 'states:UntagResource',
  /**
   * Grants permission to update a map run
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateMapRun.html
   */
  UpdateMapRun = 'states:UpdateMapRun',
  /**
   * Grants permission to update a state machine
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateStateMachine.html
   */
  UpdateStateMachine = 'states:UpdateStateMachine',
  /**
   * Grants permission to update a state machine alias
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateStateMachineAlias.html
   */
  UpdateStateMachineAlias = 'states:UpdateStateMachineAlias',
  /**
   * Grants permission to validate a state machine definition
   *
   * See https://docs.aws.amazon.com/step-functions/latest/apireference/API_ValidateStateMachineDefinition.html
   */
  ValidateStateMachineDefinition = 'states:ValidateStateMachineDefinition',
}
