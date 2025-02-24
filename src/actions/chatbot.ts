// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Chatbot (CHATBOT)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
 *
 * 2025-02-24T21:46:58.197Z
 */
export enum AwsChatbotActions {
  /**
   * Grants permission to associate a resource with a configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_AssociateToConfiguration.html
   */
  AssociateToConfiguration = 'chatbot:AssociateToConfiguration',
  /**
   * Grants permission to create an AWS Chatbot Chime Webhook Configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_CreateChimeWebhookConfiguration.html
   */
  CreateChimeWebhookConfiguration = 'chatbot:CreateChimeWebhookConfiguration',
  /**
   * Grants permission to create a custom action
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_CreateCustomAction.html
   */
  CreateCustomAction = 'chatbot:CreateCustomAction',
  /**
   * Grants permission to create an AWS Chatbot Microsoft Teams Channel Configuratio
   * n
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_CreateMicrosoftTeamsChannelConfiguration.html
   */
  CreateMicrosoftTeamsChannelConfiguration = 'chatbot:CreateMicrosoftTeamsChannelConfiguration',
  /**
   * Grants permission to create an AWS Chatbot Slack Channel Configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_CreateSlackChannelConfiguration.html
   */
  CreateSlackChannelConfiguration = 'chatbot:CreateSlackChannelConfiguration',
  /**
   * Grants permission to delete an AWS Chatbot Chime Webhook Configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteChimeWebhookConfiguration.html
   */
  DeleteChimeWebhookConfiguration = 'chatbot:DeleteChimeWebhookConfiguration',
  /**
   * Grants permission to delete a custom action
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteCustomAction.html
   */
  DeleteCustomAction = 'chatbot:DeleteCustomAction',
  /**
   * Grants permission to delete an AWS Chatbot Microsoft Teams Channel Configuratio
   * n
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteMicrosoftTeamsChannelConfiguration.html
   */
  DeleteMicrosoftTeamsChannelConfiguration = 'chatbot:DeleteMicrosoftTeamsChannelConfiguration',
  /**
   * Grants permission to delete the Microsoft Teams configured with AWS Chatbot in
   * an AWS account
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteMicrosoftTeamsConfiguredTeam.html
   */
  DeleteMicrosoftTeamsConfiguredTeam = 'chatbot:DeleteMicrosoftTeamsConfiguredTeam',
  /**
   * Grants permission to delete an AWS Chatbot Microsoft Teams User Identity
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteMicrosoftTeamsUserIdentity.html
   */
  DeleteMicrosoftTeamsUserIdentity = 'chatbot:DeleteMicrosoftTeamsUserIdentity',
  /**
   * Grants permission to delete an AWS Chatbot Slack Channel Configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteSlackChannelConfiguration.html
   */
  DeleteSlackChannelConfiguration = 'chatbot:DeleteSlackChannelConfiguration',
  /**
   * Grants permission to delete an AWS Chatbot Slack User Identity
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteSlackUserIdentity.html
   */
  DeleteSlackUserIdentity = 'chatbot:DeleteSlackUserIdentity',
  /**
   * Grants permission to delete the Slack workspace authorization with AWS Chatbot,
   * associated with an AWS account
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DeleteSlackWorkspaceAuthorization.html
   */
  DeleteSlackWorkspaceAuthorization = 'chatbot:DeleteSlackWorkspaceAuthorization',
  /**
   * Grants permission to list all AWS Chatbot Chime Webhook Configurations in an AW
   * S Account
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DescribeChimeWebhookConfigurations.html
   */
  DescribeChimeWebhookConfigurations = 'chatbot:DescribeChimeWebhookConfigurations',
  /**
   * Grants permission to list all AWS Chatbot Slack Channel Configurations in an AW
   * S account
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DescribeSlackChannelConfigurations.html
   */
  DescribeSlackChannelConfigurations = 'chatbot:DescribeSlackChannelConfigurations',
  /**
   * Grants permission to list all public Slack channels in the Slack workspace conn
   * ected to the AWS Account onboarded with AWS Chatbot service
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_Operations.html
   */
  DescribeSlackChannels = 'chatbot:DescribeSlackChannels',
  /**
   * Grants permission to describe AWS Chatbot Slack User Identities
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DescribeSlackUserIdentities.html
   */
  DescribeSlackUserIdentities = 'chatbot:DescribeSlackUserIdentities',
  /**
   * Grants permission to list all authorized Slack workspaces connected to the AWS
   * Account onboarded with AWS Chatbot service
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DescribeSlackWorkspaces.html
   */
  DescribeSlackWorkspaces = 'chatbot:DescribeSlackWorkspaces',
  /**
   * Grants permission to disassociate a resource from a configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_DisassociateFromConfiguration.html
   */
  DisassociateFromConfiguration = 'chatbot:DisassociateFromConfiguration',
  /**
   * Grants permission to retrieve AWS Chatbot account preferences
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_GetAccountPreferences.html
   */
  GetAccountPreferences = 'chatbot:GetAccountPreferences',
  /**
   * Grants permission to get a custom action
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_GetCustomAction.html
   */
  GetCustomAction = 'chatbot:GetCustomAction',
  /**
   * Grants permission to get a single AWS Chatbot Microsoft Teams Channel Configura
   * tions in an AWS account
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_GetMicrosoftTeamsChannelConfiguration.html
   */
  GetMicrosoftTeamsChannelConfiguration = 'chatbot:GetMicrosoftTeamsChannelConfiguration',
  /**
   * Grants permission to generate OAuth parameters to request Microsoft Teams OAuth
   * code to be used by the AWS Chatbot service
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_Operations.html
   */
  GetMicrosoftTeamsOauthParameters = 'chatbot:GetMicrosoftTeamsOauthParameters',
  /**
   * Grants permission to generate OAuth parameters to request Slack OAuth code to b
   * e used by the AWS Chatbot service
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_Operations.html
   */
  GetSlackOauthParameters = 'chatbot:GetSlackOauthParameters',
  /**
   * Grants permission to list resources associated with a configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListAssociations.html
   */
  ListAssociations = 'chatbot:ListAssociations',
  /**
   * Grants permission to list custom actions
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListCustomActions.html
   */
  ListCustomActions = 'chatbot:ListCustomActions',
  /**
   * Grants permission to list all AWS Chatbot Microsoft Teams Channel Configuration
   * s in an AWS account
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListMicrosoftTeamsChannelConfigurations.html
   */
  ListMicrosoftTeamsChannelConfigurations = 'chatbot:ListMicrosoftTeamsChannelConfigurations',
  /**
   * Grants permission to list all Microsoft Teams connected to the AWS Account onbo
   * arded with AWS Chatbot service
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListMicrosoftTeamsConfiguredTeams.html
   */
  ListMicrosoftTeamsConfiguredTeams = 'chatbot:ListMicrosoftTeamsConfiguredTeams',
  /**
   * Grants permission to describe AWS Chatbot Microsoft Teams User Identities
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListMicrosoftTeamsUserIdentities.html
   */
  ListMicrosoftTeamsUserIdentities = 'chatbot:ListMicrosoftTeamsUserIdentities',
  /**
   * Grants permission to List all tags associated with the AWS Chatbot Channel Conf
   * iguration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'chatbot:ListTagsForResource',
  /**
   * Grants permission to redeem previously generated parameters with Microsoft APIs
   * , to acquire OAuth tokens to be used by the AWS Chatbot service
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_Operations.html
   */
  RedeemMicrosoftTeamsOauthCode = 'chatbot:RedeemMicrosoftTeamsOauthCode',
  /**
   * Grants permission to redeem previously generated parameters with Slack API, to
   * acquire OAuth tokens to be used by the AWS Chatbot service
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_Operations.html
   */
  RedeemSlackOauthCode = 'chatbot:RedeemSlackOauthCode',
  /**
   * Grants permission to create tags on AWS Chatbot Channel Configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_TagResource.html
   */
  TagResource = 'chatbot:TagResource',
  /**
   * Grants permission to remove tags on AWS Chatbot Channel Configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'chatbot:UntagResource',
  /**
   * Grants permission to update AWS Chatbot account preferences
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UpdateAccountPreferences.html
   */
  UpdateAccountPreferences = 'chatbot:UpdateAccountPreferences',
  /**
   * Grants permission to update an AWS Chatbot Chime Webhook Configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UpdateChimeWebhookConfiguration.html
   */
  UpdateChimeWebhookConfiguration = 'chatbot:UpdateChimeWebhookConfiguration',
  /**
   * Grants permission to update a custom action
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UpdateCustomAction.html
   */
  UpdateCustomAction = 'chatbot:UpdateCustomAction',
  /**
   * Grants permission to update an AWS Chatbot Microsoft Teams Channel Configuratio
   * n
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UpdateMicrosoftTeamsChannelConfiguration.html
   */
  UpdateMicrosoftTeamsChannelConfiguration = 'chatbot:UpdateMicrosoftTeamsChannelConfiguration',
  /**
   * Grants permission to update an AWS Chatbot Slack Channel Configuration
   *
   * See https://docs.aws.amazon.com/chatbot/latest/APIReference/API_UpdateSlackChannelConfiguration.html
   */
  UpdateSlackChannelConfiguration = 'chatbot:UpdateSlackChannelConfiguration',
}
