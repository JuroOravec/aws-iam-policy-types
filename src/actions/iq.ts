// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS IQ (IQ)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiq.html
 *
 * 2024-02-12T09:57:54.805Z
 */
export enum AwsIqActions {
  /**
   * Grants permission to accept an incoming voice/video call
   *
   * See https://aws.amazon.com/iq/
   */
  AcceptCall = 'iq:AcceptCall',
  /**
   * Grants permission to approve a payment request
   *
   * See https://aws.amazon.com/iq/
   */
  ApprovePaymentRequest = 'iq:ApprovePaymentRequest',
  /**
   * Grants permission to approve a proposal
   *
   * See https://aws.amazon.com/iq/
   */
  ApproveProposal = 'iq:ApproveProposal',
  /**
   * Grants permission to archive a conversation
   *
   * See https://aws.amazon.com/iq/
   */
  ArchiveConversation = 'iq:ArchiveConversation',
  /**
   * Grants permission to complete a proposal
   *
   * See https://aws.amazon.com/iq/
   */
  CompleteProposal = 'iq:CompleteProposal',
  /**
   * Grants permission to respond to a request or send a direct message to initiate
   * a conversation
   *
   * See https://aws.amazon.com/iq/
   */
  CreateConversation = 'iq:CreateConversation',
  /**
   * Grants permission to create an expert profile
   *
   * See https://aws.amazon.com/iq/
   */
  CreateExpert = 'iq:CreateExpert',
  /**
   * Grants permission to create a listing
   *
   * See https://aws.amazon.com/iq/
   */
  CreateListing = 'iq:CreateListing',
  /**
   * Grants permission to create a milestone proposal
   *
   * See https://aws.amazon.com/iq/
   */
  CreateMilestoneProposal = 'iq:CreateMilestoneProposal',
  /**
   * Grants permission to create a payment request
   *
   * See https://aws.amazon.com/iq/
   */
  CreatePaymentRequest = 'iq:CreatePaymentRequest',
  /**
   * Grants permission to submit new requests
   *
   * See https://aws.amazon.com/iq/
   */
  CreateProject = 'iq:CreateProject',
  /**
   * Grants permission to submit new requests
   *
   * See https://aws.amazon.com/iq/
   */
  CreateRequest = 'iq:CreateRequest',
  /**
   * Grants permission to create a scheduled proposal
   *
   * See https://aws.amazon.com/iq/
   */
  CreateScheduledProposal = 'iq:CreateScheduledProposal',
  /**
   * Grants permission to create a seller profile
   *
   * See https://aws.amazon.com/iq/
   */
  CreateSeller = 'iq:CreateSeller',
  /**
   * Grants permission to create an upfront proposal
   *
   * See https://aws.amazon.com/iq/
   */
  CreateUpfrontProposal = 'iq:CreateUpfrontProposal',
  /**
   * Grants permission to decline an incoming voice/video call
   *
   * See https://aws.amazon.com/iq/
   */
  DeclineCall = 'iq:DeclineCall',
  /**
   * Grants permission to delete an existing attachment
   *
   * See https://aws.amazon.com/iq/
   */
  DeleteAttachment = 'iq:DeleteAttachment',
  /**
   * Grants permission to disable individual public profile page
   *
   * See https://aws.amazon.com/iq/
   */
  DisableIndividualPublicProfile = 'iq:DisableIndividualPublicProfile',
  /**
   * Grants permission to download existing attachment
   *
   * See https://aws.amazon.com/iq/
   */
  DownloadAttachment = 'iq:DownloadAttachment',
  /**
   * Grants permission to enable individual public profile page
   *
   * See https://aws.amazon.com/iq/
   */
  EnableIndividualPublicProfile = 'iq:EnableIndividualPublicProfile',
  /**
   * Grants permission to end a voice/video call
   *
   * See https://aws.amazon.com/iq/
   */
  EndCall = 'iq:EndCall',
  /**
   * Grants permission to read buyer information
   *
   * See https://aws.amazon.com/iq/
   */
  GetBuyer = 'iq:GetBuyer',
  /**
   * Grants permission to read details of a voice/video call
   *
   * See https://aws.amazon.com/iq/
   */
  GetCall = 'iq:GetCall',
  /**
   * Grants permission to read the chat environment details about a conversation
   *
   * See https://aws.amazon.com/iq/
   */
  GetChatInfo = 'iq:GetChatInfo',
  /**
   * Grants permission to read chat messages in a conversation
   *
   * See https://aws.amazon.com/iq/
   */
  GetChatMessages = 'iq:GetChatMessages',
  /**
   * Grants permission to request a websocket token for the conversation notificatio
   * ns
   *
   * See https://aws.amazon.com/iq/
   */
  GetChatToken = 'iq:GetChatToken',
  /**
   * Grants permission to read chat messages in a company conversation
   *
   * See https://aws.amazon.com/iq/
   */
  GetCompanyChatMessages = 'iq:GetCompanyChatMessages',
  /**
   * Grants permission to read a company profile
   *
   * See https://aws.amazon.com/iq/
   */
  GetCompanyProfile = 'iq:GetCompanyProfile',
  /**
   * Grants permission to read details of a conversation
   *
   * See https://aws.amazon.com/iq/
   */
  GetConversation = 'iq:GetConversation',
  /**
   * Grants permission to read expert information
   *
   * See https://aws.amazon.com/iq/
   */
  GetExpert = 'iq:GetExpert',
  /**
   * Grants permission to read a listing
   *
   * See https://aws.amazon.com/iq/
   */
  GetListing = 'iq:GetListing',
  /**
   * Grants permission to read a seller profile information
   *
   * See https://aws.amazon.com/iq/
   */
  GetMarketplaceSeller = 'iq:GetMarketplaceSeller',
  /**
   * Grants permission to read a payment request
   *
   * See https://aws.amazon.com/iq/
   */
  GetPaymentRequest = 'iq:GetPaymentRequest',
  /**
   * Grants permission to read a proposal
   *
   * See https://aws.amazon.com/iq/
   */
  GetProposal = 'iq:GetProposal',
  /**
   * Grants permission to get a created request
   *
   * See https://aws.amazon.com/iq/
   */
  GetRequest = 'iq:GetRequest',
  /**
   * Grants permission to read a review for an expert
   *
   * See https://aws.amazon.com/iq/
   */
  GetReview = 'iq:GetReview',
  /**
   * Grants permission to hide a request
   *
   * See https://aws.amazon.com/iq/
   */
  HideRequest = 'iq:HideRequest',
  /**
   * Grants permission to start a voice/video call
   *
   * See https://aws.amazon.com/iq/
   */
  InitiateCall = 'iq:InitiateCall',
  /**
   * Grants permission to link an AWS certification to individual profile
   *
   * See https://aws.amazon.com/iq/
   */
  LinkAwsCertification = 'iq:LinkAwsCertification',
  /**
   * Grants permission to list existing attachments
   *
   * See https://aws.amazon.com/iq/
   */
  ListAttachments = 'iq:ListAttachments',
  /**
   * Grants permission to list existing conversations
   *
   * See https://aws.amazon.com/iq/
   */
  ListConversations = 'iq:ListConversations',
  /**
   * Grants permission to list access logs of expert activity
   *
   * See https://aws.amazon.com/iq/
   */
  ListExpertAccessLogs = 'iq:ListExpertAccessLogs',
  /**
   * Grants permission to list listings
   *
   * See https://aws.amazon.com/iq/
   */
  ListListings = 'iq:ListListings',
  /**
   * Grants permission to list payment requests
   *
   * See https://aws.amazon.com/iq/
   */
  ListPaymentRequests = 'iq:ListPaymentRequests',
  /**
   * Grants permission to list proposals
   *
   * See https://aws.amazon.com/iq/
   */
  ListProposals = 'iq:ListProposals',
  /**
   * Grants permission to list requests that are created
   *
   * See https://aws.amazon.com/iq/
   */
  ListRequests = 'iq:ListRequests',
  /**
   * Grants permission to list reviews for an expert
   *
   * See https://aws.amazon.com/iq/
   */
  ListReviews = 'iq:ListReviews',
  /**
   * Grants permission to mark a message as read in a conversation
   *
   * See https://aws.amazon.com/iq/
   */
  MarkChatMessageRead = 'iq:MarkChatMessageRead',
  /**
   * Grants permission to reject a payment request
   *
   * See https://aws.amazon.com/iq/
   */
  RejectPaymentRequest = 'iq:RejectPaymentRequest',
  /**
   * Grants permission to reject a proposal
   *
   * See https://aws.amazon.com/iq/
   */
  RejectProposal = 'iq:RejectProposal',
  /**
   * Grants permission to send a message in a conversation as a company
   *
   * See https://aws.amazon.com/iq/
   */
  SendCompanyChatMessage = 'iq:SendCompanyChatMessage',
  /**
   * Grants permission to send a message in a conversation as an individual
   *
   * See https://aws.amazon.com/iq/
   */
  SendIndividualChatMessage = 'iq:SendIndividualChatMessage',
  /**
   * Grants permission to unarchive a conversation
   *
   * See https://aws.amazon.com/iq/
   */
  UnarchiveConversation = 'iq:UnarchiveConversation',
  /**
   * Grants permission to unlink an AWS certification from individual profile
   *
   * See https://aws.amazon.com/iq/
   */
  UnlinkAwsCertification = 'iq:UnlinkAwsCertification',
  /**
   * Grants permission to update a company profile
   *
   * See https://aws.amazon.com/iq/
   */
  UpdateCompanyProfile = 'iq:UpdateCompanyProfile',
  /**
   * Grants permission to add more participants into a conversation
   *
   * See https://aws.amazon.com/iq/
   */
  UpdateConversationMembers = 'iq:UpdateConversationMembers',
  /**
   * Grants permission to update an expert information
   *
   * See https://aws.amazon.com/iq/
   */
  UpdateExpert = 'iq:UpdateExpert',
  /**
   * Grants permission to update a listing
   *
   * See https://aws.amazon.com/iq/
   */
  UpdateListing = 'iq:UpdateListing',
  /**
   * Grants permission to update a request
   *
   * See https://aws.amazon.com/iq/
   */
  UpdateRequest = 'iq:UpdateRequest',
  /**
   * Grants permission to upload an attachment
   *
   * See https://aws.amazon.com/iq/
   */
  UploadAttachment = 'iq:UploadAttachment',
  /**
   * Grants permission to withdraw a payment request
   *
   * See https://aws.amazon.com/iq/
   */
  WithdrawPaymentRequest = 'iq:WithdrawPaymentRequest',
  /**
   * Grants permission to withdraw a proposal
   *
   * See https://aws.amazon.com/iq/
   */
  WithdrawProposal = 'iq:WithdrawProposal',
  /**
   * Grants permission to write a review for an expert
   *
   * See https://aws.amazon.com/iq/
   */
  WriteReview = 'iq:WriteReview',
}
