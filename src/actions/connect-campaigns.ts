// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for High-volume outbound communications (CONNECT-CAMPAIGNS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_high-volumeoutboundcommunications.html
 *
 * 2024-02-12T09:57:36.071Z
 */
export enum AwsConnectCampaignsActions {
  /**
   * Grants permission to create a campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  CreateCampaign = 'connect-campaigns:CreateCampaign',
  /**
   * Grants permission to delete a campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  DeleteCampaign = 'connect-campaigns:DeleteCampaign',
  /**
   * Grants permission to remove configuration information for an Amazon Connect ins
   * tance
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  DeleteConnectInstanceConfig = 'connect-campaigns:DeleteConnectInstanceConfig',
  /**
   * Grants permission to remove onboarding job for an Amazon Connect instance
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  DeleteInstanceOnboardingJob = 'connect-campaigns:DeleteInstanceOnboardingJob',
  /**
   * Grants permission to describe a specific campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  DescribeCampaign = 'connect-campaigns:DescribeCampaign',
  /**
   * Grants permission to get state of a campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  GetCampaignState = 'connect-campaigns:GetCampaignState',
  /**
   * Grants permission to get state of campaigns
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  GetCampaignStateBatch = 'connect-campaigns:GetCampaignStateBatch',
  /**
   * Grants permission to get configuration information for an Amazon Connect instan
   * ce
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  GetConnectInstanceConfig = 'connect-campaigns:GetConnectInstanceConfig',
  /**
   * Grants permission to get onboarding job status for an Amazon Connect instance
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  GetInstanceOnboardingJobStatus = 'connect-campaigns:GetInstanceOnboardingJobStatus',
  /**
   * Grants permission to provide summary of all campaigns
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  ListCampaigns = 'connect-campaigns:ListCampaigns',
  /**
   * Grants permission to list tags for a resource
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  ListTagsForResource = 'connect-campaigns:ListTagsForResource',
  /**
   * Grants permission to pause a campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  PauseCampaign = 'connect-campaigns:PauseCampaign',
  /**
   * Grants permission to create dial requests for the specified campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  PutDialRequestBatch = 'connect-campaigns:PutDialRequestBatch',
  /**
   * Grants permission to resume a campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  ResumeCampaign = 'connect-campaigns:ResumeCampaign',
  /**
   * Grants permission to start a campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  StartCampaign = 'connect-campaigns:StartCampaign',
  /**
   * Grants permission to start onboarding job for an Amazon Connect instance
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  StartInstanceOnboardingJob = 'connect-campaigns:StartInstanceOnboardingJob',
  /**
   * Grants permission to stop a campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  StopCampaign = 'connect-campaigns:StopCampaign',
  /**
   * Grants permission to tag a resource
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  TagResource = 'connect-campaigns:TagResource',
  /**
   * Grants permission to untag a resource
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  UntagResource = 'connect-campaigns:UntagResource',
  /**
   * Grants permission to update the dialer configuration of a campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  UpdateCampaignDialerConfig = 'connect-campaigns:UpdateCampaignDialerConfig',
  /**
   * Grants permission to update the name of a campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  UpdateCampaignName = 'connect-campaigns:UpdateCampaignName',
  /**
   * Grants permission to update the outbound call configuration of a campaign
   *
   * See https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  UpdateCampaignOutboundCallConfig = 'connect-campaigns:UpdateCampaignOutboundCallConfig',
}
