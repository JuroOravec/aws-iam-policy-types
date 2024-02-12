// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Kinesis Video Streams (KINESISVIDEO)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisvideostreams.html
 *
 * 2024-02-12T09:58:01.187Z
 */
export enum AwsKinesisvideoActions {
  /**
   * Grants permission to connect as a master to the signaling channel specified by
   * the endpoint
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsMaster.html
   */
  ConnectAsMaster = 'kinesisvideo:ConnectAsMaster',
  /**
   * Grants permission to connect as a viewer to the signaling channel specified by
   * the endpoint
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsViewer.html
   */
  ConnectAsViewer = 'kinesisvideo:ConnectAsViewer',
  /**
   * Grants permission to create a signaling channel
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateSignalingChannel.html
   */
  CreateSignalingChannel = 'kinesisvideo:CreateSignalingChannel',
  /**
   * Grants permission to create a Kinesis video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateStream.html
   */
  CreateStream = 'kinesisvideo:CreateStream',
  /**
   * Grants permission to delete the edge configuration of your Kinesis Video Stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteEdgeConfiguration.html
   */
  DeleteEdgeConfiguration = 'kinesisvideo:DeleteEdgeConfiguration',
  /**
   * Grants permission to delete an existing signaling channel
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteSignalingChannel.html
   */
  DeleteSignalingChannel = 'kinesisvideo:DeleteSignalingChannel',
  /**
   * Grants permission to delete an existing Kinesis video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteStream.html
   */
  DeleteStream = 'kinesisvideo:DeleteStream',
  /**
   * Grants permission to describe the edge configuration of your Kinesis Video Stre
   * am
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeEdgeConfiguration.html
   */
  DescribeEdgeConfiguration = 'kinesisvideo:DescribeEdgeConfiguration',
  /**
   * Grants permission to describe the image generation configuration of your Kinesi
   * s video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeImageGenerationConfiguration.html
   */
  DescribeImageGenerationConfiguration = 'kinesisvideo:DescribeImageGenerationConfiguration',
  /**
   * Grants permission to describe the resource mapped to the Kinesis video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeMappedResourceConfiguration.html
   */
  DescribeMappedResourceConfiguration = 'kinesisvideo:DescribeMappedResourceConfiguration',
  /**
   * Grants permission to describe the media storage configuration of a signaling ch
   * annel
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeMediaStorageConfiguration.html
   */
  DescribeMediaStorageConfiguration = 'kinesisvideo:DescribeMediaStorageConfiguration',
  /**
   * Grants permission to describe the notification configuration of your Kinesis vi
   * deo stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeNotificationConfiguration.html
   */
  DescribeNotificationConfiguration = 'kinesisvideo:DescribeNotificationConfiguration',
  /**
   * Grants permission to describe the specified signaling channel
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeSignalingChannel.html
   */
  DescribeSignalingChannel = 'kinesisvideo:DescribeSignalingChannel',
  /**
   * Grants permission to describe the specified Kinesis video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html
   */
  DescribeStream = 'kinesisvideo:DescribeStream',
  /**
   * Grants permission to get a media clip from a video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetClip.html
   */
  GetClip = 'kinesisvideo:GetClip',
  /**
   * Grants permission to create a URL for MPEG-DASH video streaming
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetDASHStreamingSessionURL.html
   */
  GetDASHStreamingSessionURL = 'kinesisvideo:GetDASHStreamingSessionURL',
  /**
   * Grants permission to get an endpoint for a specified stream for either reading
   * or writing media data to Kinesis Video Streams
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html
   */
  GetDataEndpoint = 'kinesisvideo:GetDataEndpoint',
  /**
   * Grants permission to create a URL for HLS video streaming
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetHLSStreamingSessionURL.html
   */
  GetHLSStreamingSessionURL = 'kinesisvideo:GetHLSStreamingSessionURL',
  /**
   * Grants permission to get the ICE server configuration
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_AWSAcuitySignalingService_GetIceServerConfig.html
   */
  GetIceServerConfig = 'kinesisvideo:GetIceServerConfig',
  /**
   * Grants permission to get generated images from your Kinesis video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetImages.html
   */
  GetImages = 'kinesisvideo:GetImages',
  /**
   * Grants permission to return media content of a Kinesis video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_GetMedia.html
   */
  GetMedia = 'kinesisvideo:GetMedia',
  /**
   * Grants permission to read and return media data only from persisted storage
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetMediaForFragmentList.html
   */
  GetMediaForFragmentList = 'kinesisvideo:GetMediaForFragmentList',
  /**
   * Grants permission to get endpoints for a specified combination of protocol and
   * role for a signaling channel
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetSignalingChannelEndpoint.html
   */
  GetSignalingChannelEndpoint = 'kinesisvideo:GetSignalingChannelEndpoint',
  /**
   * Grants permission to join a storage session for a channel
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_AWSAcuityRoutingServiceLambda_JoinStorageSession.html
   */
  JoinStorageSession = 'kinesisvideo:JoinStorageSession',
  /**
   * Grants permission to list an edge agent configurations
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListEdgeAgentConfigurations.html
   */
  ListEdgeAgentConfigurations = 'kinesisvideo:ListEdgeAgentConfigurations',
  /**
   * Grants permission to list the fragments from archival storage based on the pagi
   * nation token or selector type with range specified
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_ListFragments.html
   */
  ListFragments = 'kinesisvideo:ListFragments',
  /**
   * Grants permission to list your signaling channels
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListSignalingChannels.html
   */
  ListSignalingChannels = 'kinesisvideo:ListSignalingChannels',
  /**
   * Grants permission to list your Kinesis video streams
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListStreams.html
   */
  ListStreams = 'kinesisvideo:ListStreams',
  /**
   * Grants permission to fetch the tags associated with your resource
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForResource.html
   */
  ListTagsForResource = 'kinesisvideo:ListTagsForResource',
  /**
   * Grants permission to fetch the tags associated with Kinesis video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForStream.html
   */
  ListTagsForStream = 'kinesisvideo:ListTagsForStream',
  /**
   * Grants permission to send media data to a Kinesis video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html
   */
  PutMedia = 'kinesisvideo:PutMedia',
  /**
   * Grants permission to send the Alexa SDP offer to the master
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_AWSAcuitySignalingService_SendAlexaOfferToMaster.html
   */
  SendAlexaOfferToMaster = 'kinesisvideo:SendAlexaOfferToMaster',
  /**
   * Grants permission to start edge configuration update of your Kinesis Video Stre
   * am
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_StartEdgeConfigurationUpdate.html
   */
  StartEdgeConfigurationUpdate = 'kinesisvideo:StartEdgeConfigurationUpdate',
  /**
   * Grants permission to attach set of tags to your resource
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagResource.html
   */
  TagResource = 'kinesisvideo:TagResource',
  /**
   * Grants permission to attach set of tags to your Kinesis video streams
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagStream.html
   */
  TagStream = 'kinesisvideo:TagStream',
  /**
   * Grants permission to remove one or more tags from your resource
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagResource.html
   */
  UntagResource = 'kinesisvideo:UntagResource',
  /**
   * Grants permission to remove one or more tags from your Kinesis video streams
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagStream.html
   */
  UntagStream = 'kinesisvideo:UntagStream',
  /**
   * Grants permission to update the data retention period of your Kinesis video str
   * eam
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateDataRetention.html
   */
  UpdateDataRetention = 'kinesisvideo:UpdateDataRetention',
  /**
   * Grants permission to update the image generation configuration of your Kinesis
   * video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateImageGenerationConfiguration.html
   */
  UpdateImageGenerationConfiguration = 'kinesisvideo:UpdateImageGenerationConfiguration',
  /**
   * Grants permission to create or update an mapping between a signaling channel an
   * d stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateMediaStorageConfiguration.html
   */
  UpdateMediaStorageConfiguration = 'kinesisvideo:UpdateMediaStorageConfiguration',
  /**
   * Grants permission to update the notification configuration of your Kinesis vide
   * o stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateNotificationConfiguration.html
   */
  UpdateNotificationConfiguration = 'kinesisvideo:UpdateNotificationConfiguration',
  /**
   * Grants permission to update an existing signaling channel
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateSignalingChannel.html
   */
  UpdateSignalingChannel = 'kinesisvideo:UpdateSignalingChannel',
  /**
   * Grants permission to update an existing Kinesis video stream
   *
   * See https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateStream.html
   */
  UpdateStream = 'kinesisvideo:UpdateStream',
}