// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Interactive Video Service (IVS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservice.html
 *
 * 2024-02-12T09:57:44.582Z
 */
export enum AwsIvsActions {
  /**
   * Grants permission to get multiple channels simultaneously by channel ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_BatchGetChannel.html
   */
  BatchGetChannel = 'ivs:BatchGetChannel',
  /**
   * Grants permission to get multiple stream keys simultaneously by stream key ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_BatchGetStreamKey.html
   */
  BatchGetStreamKey = 'ivs:BatchGetStreamKey',
  /**
   * Grants permission to perform StartViewerSessionRevocation on multiple channel A
   * RN and viewer ID pairs simultaneously
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_BatchStartViewerSessionRevocation.html
   */
  BatchStartViewerSessionRevocation = 'ivs:BatchStartViewerSessionRevocation',
  /**
   * Grants permission to create a new channel and an associated stream key
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateChannel.html
   */
  CreateChannel = 'ivs:CreateChannel',
  /**
   * Grants permission to create a new encoder configuration
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateEncoderConfiguration.html
   */
  CreateEncoderConfiguration = 'ivs:CreateEncoderConfiguration',
  /**
   * Grants permission to create a participant token
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateParticipantToken.html
   */
  CreateParticipantToken = 'ivs:CreateParticipantToken',
  /**
   * Grants permission to create a playback restriction policy
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreatePlaybackRestrictionPolicy.html
   */
  CreatePlaybackRestrictionPolicy = 'ivs:CreatePlaybackRestrictionPolicy',
  /**
   * Grants permission to create a a new recording configuration
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateRecordingConfiguration.html
   */
  CreateRecordingConfiguration = 'ivs:CreateRecordingConfiguration',
  /**
   * Grants permission to create a stage
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateStage.html
   */
  CreateStage = 'ivs:CreateStage',
  /**
   * Grants permission to create a new storage configuration
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateStorageConfiguration.html
   */
  CreateStorageConfiguration = 'ivs:CreateStorageConfiguration',
  /**
   * Grants permission to create a stream key
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateStreamKey.html
   */
  CreateStreamKey = 'ivs:CreateStreamKey',
  /**
   * Grants permission to delete a channel and channel's stream keys
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeleteChannel.html
   */
  DeleteChannel = 'ivs:DeleteChannel',
  /**
   * Grants permission to delete an encoder configuration for the specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeleteEncoderConfiguration.html
   */
  DeleteEncoderConfiguration = 'ivs:DeleteEncoderConfiguration',
  /**
   * Grants permission to delete the playback key pair for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeletePlaybackKeyPair.html
   */
  DeletePlaybackKeyPair = 'ivs:DeletePlaybackKeyPair',
  /**
   * Grants permission to delete the playback restriction policy for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeletePlaybackRestrictionPolicy.html
   */
  DeletePlaybackRestrictionPolicy = 'ivs:DeletePlaybackRestrictionPolicy',
  /**
   * Grants permission to delete a recording configuration for the specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeleteRecordingConfiguration.html
   */
  DeleteRecordingConfiguration = 'ivs:DeleteRecordingConfiguration',
  /**
   * Grants permission to delete the stage for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeleteStage.html
   */
  DeleteStage = 'ivs:DeleteStage',
  /**
   * Grants permission to delete an storage configuration for the specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DeleteStorageConfiguration.html
   */
  DeleteStorageConfiguration = 'ivs:DeleteStorageConfiguration',
  /**
   * Grants permission to delete the stream key for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_DeleteStreamKey.html
   */
  DeleteStreamKey = 'ivs:DeleteStreamKey',
  /**
   * Grants permission to disconnect a participant from for the specified stage ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_DisconnectParticipant.html
   */
  DisconnectParticipant = 'ivs:DisconnectParticipant',
  /**
   * Grants permission to get the channel configuration for a specified channel ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetChannel.html
   */
  GetChannel = 'ivs:GetChannel',
  /**
   * Grants permission to get the composition for the specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetComposition.html
   */
  GetComposition = 'ivs:GetComposition',
  /**
   * Grants permission to get the encoder configuration for the specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetEncoderConfiguration.html
   */
  GetEncoderConfiguration = 'ivs:GetEncoderConfiguration',
  /**
   * Grants permission to get participant information for a specified stage ARN, ses
   * sion, and participant
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetParticipant.html
   */
  GetParticipant = 'ivs:GetParticipant',
  /**
   * Grants permission to get the playback keypair information for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetPlaybackKeyPair.html
   */
  GetPlaybackKeyPair = 'ivs:GetPlaybackKeyPair',
  /**
   * Grants permission to get the playback restriction policy for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetPlaybackRestrictionPolicy.html
   */
  GetPlaybackRestrictionPolicy = 'ivs:GetPlaybackRestrictionPolicy',
  /**
   * Grants permission to get the recording configuration for the specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetRecordingConfiguration.html
   */
  GetRecordingConfiguration = 'ivs:GetRecordingConfiguration',
  /**
   * Grants permission to get stage information for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetStage.html
   */
  GetStage = 'ivs:GetStage',
  /**
   * Grants permission to get stage session information for a specified stage ARN an
   * d session
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetStageSession.html
   */
  GetStageSession = 'ivs:GetStageSession',
  /**
   * Grants permission to get the storage configuration for the specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_GetStorageConfiguration.html
   */
  GetStorageConfiguration = 'ivs:GetStorageConfiguration',
  /**
   * Grants permission to get information about the active (live) stream on a specif
   * ied channel
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetStream.html
   */
  GetStream = 'ivs:GetStream',
  /**
   * Grants permission to get stream-key information for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetStreamKey.html
   */
  GetStreamKey = 'ivs:GetStreamKey',
  /**
   * Grants permission to get information about the stream session on a specified ch
   * annel
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_GetStreamSession.html
   */
  GetStreamSession = 'ivs:GetStreamSession',
  /**
   * Grants permission to import the public key
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ImportPlaybackKeyPair.html
   */
  ImportPlaybackKeyPair = 'ivs:ImportPlaybackKeyPair',
  /**
   * Grants permission to get summary information about channels
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListChannels.html
   */
  ListChannels = 'ivs:ListChannels',
  /**
   * Grants permission to get summary information about compositions
   *
   * See https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListCompositions.html
   */
  ListCompositions = 'ivs:ListCompositions',
  /**
   * Grants permission to get summary information about encoder configurations
   *
   * See https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListEncoderConfigurations.html
   */
  ListEncoderConfigurations = 'ivs:ListEncoderConfigurations',
  /**
   * Grants permission to list participant events for a specified stage ARN, session
   * , and participant
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListParticipantEvents.html
   */
  ListParticipantEvents = 'ivs:ListParticipantEvents',
  /**
   * Grants permission to list participants for a specified stage ARN and session
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListParticipants.html
   */
  ListParticipants = 'ivs:ListParticipants',
  /**
   * Grants permission to get summary information about playback key pairs
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListPlaybackKeyPairs.html
   */
  ListPlaybackKeyPairs = 'ivs:ListPlaybackKeyPairs',
  /**
   * Grants permission to get summary information about playback restriction policie
   * s
   *
   * See https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListPlaybackRestrictionPolicies.html
   */
  ListPlaybackRestrictionPolicies = 'ivs:ListPlaybackRestrictionPolicies',
  /**
   * Grants permission to get summary information about recording configurations
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListRecordingConfigurations.html
   */
  ListRecordingConfigurations = 'ivs:ListRecordingConfigurations',
  /**
   * Grants permission to list stage sessions for a specified stage ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListStageSessions.html
   */
  ListStageSessions = 'ivs:ListStageSessions',
  /**
   * Grants permission to get summary information about stages
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_ListStages.html
   */
  ListStages = 'ivs:ListStages',
  /**
   * Grants permission to get summary information about storage configurations
   *
   * See https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStorageConfigurations.html
   */
  ListStorageConfigurations = 'ivs:ListStorageConfigurations',
  /**
   * Grants permission to get summary information about stream keys
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListStreamKeys.html
   */
  ListStreamKeys = 'ivs:ListStreamKeys',
  /**
   * Grants permission to get summary information about streams sessions on a specif
   * ied channel
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListStreamSessions.html
   */
  ListStreamSessions = 'ivs:ListStreamSessions',
  /**
   * Grants permission to get summary information about live streams
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListStreams.html
   */
  ListStreams = 'ivs:ListStreams',
  /**
   * Grants permission to get information about the tags for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'ivs:ListTagsForResource',
  /**
   * Grants permission to insert metadata into an RTMP stream for a specified channe
   * l
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_PutMetadata.html
   */
  PutMetadata = 'ivs:PutMetadata',
  /**
   * Grants permission to start a new composition
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_StartComposition.html
   */
  StartComposition = 'ivs:StartComposition',
  /**
   * Grants permission to start the process of revoking the viewer session associate
   * d with a specified channel ARN and viewer ID
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_StartViewerSessionRevocation.html
   */
  StartViewerSessionRevocation = 'ivs:StartViewerSessionRevocation',
  /**
   * Grants permission to stop the composition for the specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_StopComposition.html
   */
  StopComposition = 'ivs:StopComposition',
  /**
   * Grants permission to disconnect a streamer on a specified channel
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_StopStream.html
   */
  StopStream = 'ivs:StopStream',
  /**
   * Grants permission to add or update tags for a resource with a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_TagResource.html
   */
  TagResource = 'ivs:TagResource',
  /**
   * Grants permission to remove tags for a resource with a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_UntagResource.html
   */
  UntagResource = 'ivs:UntagResource',
  /**
   * Grants permission to update a channel's configuration
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_UpdateChannel.html
   */
  UpdateChannel = 'ivs:UpdateChannel',
  /**
   * Grants permission to update a playback restriction policy for a specified ARN
   *
   * See https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_UpdatePlaybackRestrictionPolicy.html
   */
  UpdatePlaybackRestrictionPolicy = 'ivs:UpdatePlaybackRestrictionPolicy',
  /**
   * Grants permission to update a stage's configuration
   *
   * See https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_UpdateStage.html
   */
  UpdateStage = 'ivs:UpdateStage',
}