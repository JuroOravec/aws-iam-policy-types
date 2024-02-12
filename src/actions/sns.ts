// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon SNS (SNS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsns.html
 *
 * 2024-02-12T09:59:19.628Z
 */
export enum AwsSnsActions {
  /**
   * Grants permission to add a statement to a topic's access control policy, granti
   * ng access for the specified AWS accounts to the specified actions
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_AddPermission.html
   */
  AddPermission = 'sns:AddPermission',
  /**
   * Grants permission to accept a phone number and indicate whether the phone holde
   * r has opted out of receiving SMS messages from your account
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_CheckIfPhoneNumberIsOptedOut.html
   */
  CheckIfPhoneNumberIsOptedOut = 'sns:CheckIfPhoneNumberIsOptedOut',
  /**
   * Grants permission to verify an endpoint owner's intent to receive messages by v
   * alidating the token sent to the endpoint by an earlier Subscribe action
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html
   */
  ConfirmSubscription = 'sns:ConfirmSubscription',
  /**
   * Grants permission to create a platform application object for one of the suppor
   * ted push notification services, such as APNS and GCM, to which devices and mobi
   * le apps may register
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html
   */
  CreatePlatformApplication = 'sns:CreatePlatformApplication',
  /**
   * Grants permission to create an endpoint for a device and mobile app on one of t
   * he supported push notification services, such as GCM and APNS
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformEndpoint.html
   */
  CreatePlatformEndpoint = 'sns:CreatePlatformEndpoint',
  /**
   * Grants permission to add a destination phone number and send a one-time passwor
   * d (OTP) to that phone number for an AWS account
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_CreateSMSSandboxPhoneNumber.html
   */
  CreateSMSSandboxPhoneNumber = 'sns:CreateSMSSandboxPhoneNumber',
  /**
   * Grants permission to create a topic to which notifications can be published
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html
   */
  CreateTopic = 'sns:CreateTopic',
  /**
   * Grants permission to delete the endpoint for a device and mobile app from Amazo
   * n SNS
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_DeleteEndpoint.html
   */
  DeleteEndpoint = 'sns:DeleteEndpoint',
  /**
   * Grants permission to delete a platform application object for one of the suppor
   * ted push notification services, such as APNS and GCM
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_DeletePlatformApplication.html
   */
  DeletePlatformApplication = 'sns:DeletePlatformApplication',
  /**
   * Grants permission to delete an AWS account's verified or pending phone number
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_DeleteSMSSandboxPhoneNumber.html
   */
  DeleteSMSSandboxPhoneNumber = 'sns:DeleteSMSSandboxPhoneNumber',
  /**
   * Grants permission to delete a topic and all its subscriptions
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html
   */
  DeleteTopic = 'sns:DeleteTopic',
  /**
   * Grants permission to return the data protection policy of the topic
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_GetDataProtectionPolicy.html
   */
  GetDataProtectionPolicy = 'sns:GetDataProtectionPolicy',
  /**
   * Grants permission to retrieve the endpoint attributes for a device on one of th
   * e supported push notification services, such as GCM and APNS
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_GetEndpointAttributes.html
   */
  GetEndpointAttributes = 'sns:GetEndpointAttributes',
  /**
   * Grants permission to retrieve the attributes of the platform application object
   * for the supported push notification services, such as APNS and GCM
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_GetPlatformApplicationAttributes.html
   */
  GetPlatformApplicationAttributes = 'sns:GetPlatformApplicationAttributes',
  /**
   * Grants permission to return the settings for sending SMS messages from your acc
   * ount
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_GetSMSAttributes.html
   */
  GetSMSAttributes = 'sns:GetSMSAttributes',
  /**
   * Grants permission to retrieve the sandbox status for the calling account in the
   * target region
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_GetSMSSandboxAccountStatus.html
   */
  GetSMSSandboxAccountStatus = 'sns:GetSMSSandboxAccountStatus',
  /**
   * Grants permission to return all of the properties of a subscription
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html
   */
  GetSubscriptionAttributes = 'sns:GetSubscriptionAttributes',
  /**
   * Grants permission to return all of the properties of a topic
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_GetTopicAttributes.html
   */
  GetTopicAttributes = 'sns:GetTopicAttributes',
  /**
   * Grants permission to list the endpoints and endpoint attributes for devices in
   * a supported push notification service, such as GCM and APNS
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_ListEndpointsByPlatformApplication.html
   */
  ListEndpointsByPlatformApplication = 'sns:ListEndpointsByPlatformApplication',
  /**
   * Grants permission to list all origination numbers, and their metadata
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_ListOriginationNumbers.html
   */
  ListOriginationNumbers = 'sns:ListOriginationNumbers',
  /**
   * Grants permission to return a list of phone numbers that are opted out, meaning
   * you cannot send SMS messages to them
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_ListPhoneNumbersOptedOut.html
   */
  ListPhoneNumbersOptedOut = 'sns:ListPhoneNumbersOptedOut',
  /**
   * Grants permission to list the platform application objects for the supported pu
   * sh notification services, such as APNS and GCM
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_ListPlatformApplications.html
   */
  ListPlatformApplications = 'sns:ListPlatformApplications',
  /**
   * Grants permission to list the calling account's current pending and verified de
   * stination phone numbers
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_ListSMSSandboxPhoneNumbers.html
   */
  ListSMSSandboxPhoneNumbers = 'sns:ListSMSSandboxPhoneNumbers',
  /**
   * Grants permission to return a list of the requester's subscriptions
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html
   */
  ListSubscriptions = 'sns:ListSubscriptions',
  /**
   * Grants permission to return a list of the subscriptions to a specific topic
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptionsByTopic.html
   */
  ListSubscriptionsByTopic = 'sns:ListSubscriptionsByTopic',
  /**
   * Grants permission to list all tags added to the specified Amazon SNS topic
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_ListTagsForResource.html
   */
  ListTagsForResource = 'sns:ListTagsForResource',
  /**
   * Grants permission to return a list of the requester's topics
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html
   */
  ListTopics = 'sns:ListTopics',
  /**
   * Grants permission to opt in a phone number that is currently opted out, which e
   * nables you to resume sending SMS messages to the number
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_OptInPhoneNumber.html
   */
  OptInPhoneNumber = 'sns:OptInPhoneNumber',
  /**
   * Grants permission to send a message to all of a topic's subscribed endpoints
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_Publish.html
   */
  Publish = 'sns:Publish',
  /**
   * Grants permission to allow a topic owner to set the data protection policy
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_PutDataProtectionPolicy.html
   */
  PutDataProtectionPolicy = 'sns:PutDataProtectionPolicy',
  /**
   * Grants permission to remove a statement from a topic's access control policy
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_RemovePermission.html
   */
  RemovePermission = 'sns:RemovePermission',
  /**
   * Grants permission to set the attributes for an endpoint for a device on one of
   * the supported push notification services, such as GCM and APNS
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html
   */
  SetEndpointAttributes = 'sns:SetEndpointAttributes',
  /**
   * Grants permission to set the attributes of the platform application object for
   * the supported push notification services, such as APNS and GCM
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html
   */
  SetPlatformApplicationAttributes = 'sns:SetPlatformApplicationAttributes',
  /**
   * Grants permission to set the default settings for sending SMS messages and rece
   * iving daily SMS usage reports
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html
   */
  SetSMSAttributes = 'sns:SetSMSAttributes',
  /**
   * Grants permission to allow a subscription owner to set an attribute of the topi
   * c to a new value
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_SetSubscriptionAttributes.html
   */
  SetSubscriptionAttributes = 'sns:SetSubscriptionAttributes',
  /**
   * Grants permission to allow a topic owner to set an attribute of the topic to a
   * new value
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_SetTopicAttributes.html
   */
  SetTopicAttributes = 'sns:SetTopicAttributes',
  /**
   * Grants permission to prepare to subscribe an endpoint by sending the endpoint a
   * confirmation message
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html
   */
  Subscribe = 'sns:Subscribe',
  /**
   * Grants permission to add tags to the specified Amazon SNS topic
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_TagResource.html
   */
  TagResource = 'sns:TagResource',
  /**
   * Grants permission to delete a subscription
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html
   */
  Unsubscribe = 'sns:Unsubscribe',
  /**
   * Grants permission to remove tags from the specified Amazon SNS topic
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_UntagResource.html
   */
  UntagResource = 'sns:UntagResource',
  /**
   * Grants permission to verify a destination phone number with a one-time password
   * (OTP) for an AWS account
   *
   * See https://docs.aws.amazon.com/sns/latest/api/API_VerifySMSSandboxPhoneNumber.html
   */
  VerifySMSSandboxPhoneNumber = 'sns:VerifySMSSandboxPhoneNumber',
}