// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Interactive Video Service Chat (IVSCHAT)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservicechat.html
 *
 * 2024-02-12T09:57:45.091Z
 */
export enum AwsIvschatActions {
  /**
   * Grants permission to create an encrypted token that is used to establish an ind
   * ividual WebSocket connection to a room
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateChatToken.html
   */
  CreateChatToken = 'ivschat:CreateChatToken',
  /**
   * Grants permission to create a logging configuration that allows clients to reco
   * rd room messages
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateLoggingConfiguration.html
   */
  CreateLoggingConfiguration = 'ivschat:CreateLoggingConfiguration',
  /**
   * Grants permission to create a room that allows clients to connect and pass mess
   * ages
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateRoom.html
   */
  CreateRoom = 'ivschat:CreateRoom',
  /**
   * Grants permission to delete the logging configuration for a specified logging c
   * onfiguration ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteLoggingConfiguration.html
   */
  DeleteLoggingConfiguration = 'ivschat:DeleteLoggingConfiguration',
  /**
   * Grants permission to send an event to a specific room which directs clients to
   * delete a specific message
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteMessage.html
   */
  DeleteMessage = 'ivschat:DeleteMessage',
  /**
   * Grants permission to delete the room for a specified room ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteRoom.html
   */
  DeleteRoom = 'ivschat:DeleteRoom',
  /**
   * Grants permission to disconnect all connections using a specified user ID from
   * a room
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DisconnectUser.html
   */
  DisconnectUser = 'ivschat:DisconnectUser',
  /**
   * Grants permission to get the logging configuration for a specified logging conf
   * iguration ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_GetLoggingConfiguration.html
   */
  GetLoggingConfiguration = 'ivschat:GetLoggingConfiguration',
  /**
   * Grants permission to get the room configuration for a specified room ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_GetRoom.html
   */
  GetRoom = 'ivschat:GetRoom',
  /**
   * Grants permission to get summary information about logging configurations
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListLoggingConfigurations.html
   */
  ListLoggingConfigurations = 'ivschat:ListLoggingConfigurations',
  /**
   * Grants permission to get summary information about rooms
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListRooms.html
   */
  ListRooms = 'ivschat:ListRooms',
  /**
   * Grants permission to get information about the tags for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'ivschat:ListTagsForResource',
  /**
   * Grants permission to send an event to a room
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_SendEvent.html
   */
  SendEvent = 'ivschat:SendEvent',
  /**
   * Grants permission to add or update tags for a resource with a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_TagResource.html
   */
  TagResource = 'ivschat:TagResource',
  /**
   * Grants permission to remove tags for a resource with a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UntagResource.html
   */
  UntagResource = 'ivschat:UntagResource',
  /**
   * Grants permission to update the logging configuration for a specified logging c
   * onfiguration ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UpdateLoggingConfiguration.html
   */
  UpdateLoggingConfiguration = 'ivschat:UpdateLoggingConfiguration',
  /**
   * Grants permission to update the room configuration for a specified room ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UpdateRoom.html
   */
  UpdateRoom = 'ivschat:UpdateRoom',
}