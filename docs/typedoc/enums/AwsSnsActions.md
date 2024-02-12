[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSnsActions

# Enumeration: AwsSnsActions

All IAM policy actions for Amazon SNS (SNS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsns.html

2024-02-12T09:59:19.628Z

## Table of contents

### Enumeration Members

- [AddPermission](AwsSnsActions.md#addpermission)
- [CheckIfPhoneNumberIsOptedOut](AwsSnsActions.md#checkifphonenumberisoptedout)
- [ConfirmSubscription](AwsSnsActions.md#confirmsubscription)
- [CreatePlatformApplication](AwsSnsActions.md#createplatformapplication)
- [CreatePlatformEndpoint](AwsSnsActions.md#createplatformendpoint)
- [CreateSMSSandboxPhoneNumber](AwsSnsActions.md#createsmssandboxphonenumber)
- [CreateTopic](AwsSnsActions.md#createtopic)
- [DeleteEndpoint](AwsSnsActions.md#deleteendpoint)
- [DeletePlatformApplication](AwsSnsActions.md#deleteplatformapplication)
- [DeleteSMSSandboxPhoneNumber](AwsSnsActions.md#deletesmssandboxphonenumber)
- [DeleteTopic](AwsSnsActions.md#deletetopic)
- [GetDataProtectionPolicy](AwsSnsActions.md#getdataprotectionpolicy)
- [GetEndpointAttributes](AwsSnsActions.md#getendpointattributes)
- [GetPlatformApplicationAttributes](AwsSnsActions.md#getplatformapplicationattributes)
- [GetSMSAttributes](AwsSnsActions.md#getsmsattributes)
- [GetSMSSandboxAccountStatus](AwsSnsActions.md#getsmssandboxaccountstatus)
- [GetSubscriptionAttributes](AwsSnsActions.md#getsubscriptionattributes)
- [GetTopicAttributes](AwsSnsActions.md#gettopicattributes)
- [ListEndpointsByPlatformApplication](AwsSnsActions.md#listendpointsbyplatformapplication)
- [ListOriginationNumbers](AwsSnsActions.md#listoriginationnumbers)
- [ListPhoneNumbersOptedOut](AwsSnsActions.md#listphonenumbersoptedout)
- [ListPlatformApplications](AwsSnsActions.md#listplatformapplications)
- [ListSMSSandboxPhoneNumbers](AwsSnsActions.md#listsmssandboxphonenumbers)
- [ListSubscriptions](AwsSnsActions.md#listsubscriptions)
- [ListSubscriptionsByTopic](AwsSnsActions.md#listsubscriptionsbytopic)
- [ListTagsForResource](AwsSnsActions.md#listtagsforresource)
- [ListTopics](AwsSnsActions.md#listtopics)
- [OptInPhoneNumber](AwsSnsActions.md#optinphonenumber)
- [Publish](AwsSnsActions.md#publish)
- [PutDataProtectionPolicy](AwsSnsActions.md#putdataprotectionpolicy)
- [RemovePermission](AwsSnsActions.md#removepermission)
- [SetEndpointAttributes](AwsSnsActions.md#setendpointattributes)
- [SetPlatformApplicationAttributes](AwsSnsActions.md#setplatformapplicationattributes)
- [SetSMSAttributes](AwsSnsActions.md#setsmsattributes)
- [SetSubscriptionAttributes](AwsSnsActions.md#setsubscriptionattributes)
- [SetTopicAttributes](AwsSnsActions.md#settopicattributes)
- [Subscribe](AwsSnsActions.md#subscribe)
- [TagResource](AwsSnsActions.md#tagresource)
- [Unsubscribe](AwsSnsActions.md#unsubscribe)
- [UntagResource](AwsSnsActions.md#untagresource)
- [VerifySMSSandboxPhoneNumber](AwsSnsActions.md#verifysmssandboxphonenumber)

## Enumeration Members

### AddPermission

• **AddPermission** = ``"sns:AddPermission"``

Grants permission to add a statement to a topic's access control policy, granti
ng access for the specified AWS accounts to the specified actions

See https://docs.aws.amazon.com/sns/latest/api/API_AddPermission.html

#### Defined in

actions/sns.ts:18

___

### CheckIfPhoneNumberIsOptedOut

• **CheckIfPhoneNumberIsOptedOut** = ``"sns:CheckIfPhoneNumberIsOptedOut"``

Grants permission to accept a phone number and indicate whether the phone holde
r has opted out of receiving SMS messages from your account

See https://docs.aws.amazon.com/sns/latest/api/API_CheckIfPhoneNumberIsOptedOut.html

#### Defined in

actions/sns.ts:25

___

### ConfirmSubscription

• **ConfirmSubscription** = ``"sns:ConfirmSubscription"``

Grants permission to verify an endpoint owner's intent to receive messages by v
alidating the token sent to the endpoint by an earlier Subscribe action

See https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html

#### Defined in

actions/sns.ts:32

___

### CreatePlatformApplication

• **CreatePlatformApplication** = ``"sns:CreatePlatformApplication"``

Grants permission to create a platform application object for one of the suppor
ted push notification services, such as APNS and GCM, to which devices and mobi
le apps may register

See https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html

#### Defined in

actions/sns.ts:40

___

### CreatePlatformEndpoint

• **CreatePlatformEndpoint** = ``"sns:CreatePlatformEndpoint"``

Grants permission to create an endpoint for a device and mobile app on one of t
he supported push notification services, such as GCM and APNS

See https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformEndpoint.html

#### Defined in

actions/sns.ts:47

___

### CreateSMSSandboxPhoneNumber

• **CreateSMSSandboxPhoneNumber** = ``"sns:CreateSMSSandboxPhoneNumber"``

Grants permission to add a destination phone number and send a one-time passwor
d (OTP) to that phone number for an AWS account

See https://docs.aws.amazon.com/sns/latest/api/API_CreateSMSSandboxPhoneNumber.html

#### Defined in

actions/sns.ts:54

___

### CreateTopic

• **CreateTopic** = ``"sns:CreateTopic"``

Grants permission to create a topic to which notifications can be published

See https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html

#### Defined in

actions/sns.ts:60

___

### DeleteEndpoint

• **DeleteEndpoint** = ``"sns:DeleteEndpoint"``

Grants permission to delete the endpoint for a device and mobile app from Amazo
n SNS

See https://docs.aws.amazon.com/sns/latest/api/API_DeleteEndpoint.html

#### Defined in

actions/sns.ts:67

___

### DeletePlatformApplication

• **DeletePlatformApplication** = ``"sns:DeletePlatformApplication"``

Grants permission to delete a platform application object for one of the suppor
ted push notification services, such as APNS and GCM

See https://docs.aws.amazon.com/sns/latest/api/API_DeletePlatformApplication.html

#### Defined in

actions/sns.ts:74

___

### DeleteSMSSandboxPhoneNumber

• **DeleteSMSSandboxPhoneNumber** = ``"sns:DeleteSMSSandboxPhoneNumber"``

Grants permission to delete an AWS account's verified or pending phone number

See https://docs.aws.amazon.com/sns/latest/api/API_DeleteSMSSandboxPhoneNumber.html

#### Defined in

actions/sns.ts:80

___

### DeleteTopic

• **DeleteTopic** = ``"sns:DeleteTopic"``

Grants permission to delete a topic and all its subscriptions

See https://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html

#### Defined in

actions/sns.ts:86

___

### GetDataProtectionPolicy

• **GetDataProtectionPolicy** = ``"sns:GetDataProtectionPolicy"``

Grants permission to return the data protection policy of the topic

See https://docs.aws.amazon.com/sns/latest/api/API_GetDataProtectionPolicy.html

#### Defined in

actions/sns.ts:92

___

### GetEndpointAttributes

• **GetEndpointAttributes** = ``"sns:GetEndpointAttributes"``

Grants permission to retrieve the endpoint attributes for a device on one of th
e supported push notification services, such as GCM and APNS

See https://docs.aws.amazon.com/sns/latest/api/API_GetEndpointAttributes.html

#### Defined in

actions/sns.ts:99

___

### GetPlatformApplicationAttributes

• **GetPlatformApplicationAttributes** = ``"sns:GetPlatformApplicationAttributes"``

Grants permission to retrieve the attributes of the platform application object
for the supported push notification services, such as APNS and GCM

See https://docs.aws.amazon.com/sns/latest/api/API_GetPlatformApplicationAttributes.html

#### Defined in

actions/sns.ts:106

___

### GetSMSAttributes

• **GetSMSAttributes** = ``"sns:GetSMSAttributes"``

Grants permission to return the settings for sending SMS messages from your acc
ount

See https://docs.aws.amazon.com/sns/latest/api/API_GetSMSAttributes.html

#### Defined in

actions/sns.ts:113

___

### GetSMSSandboxAccountStatus

• **GetSMSSandboxAccountStatus** = ``"sns:GetSMSSandboxAccountStatus"``

Grants permission to retrieve the sandbox status for the calling account in the
target region

See https://docs.aws.amazon.com/sns/latest/api/API_GetSMSSandboxAccountStatus.html

#### Defined in

actions/sns.ts:120

___

### GetSubscriptionAttributes

• **GetSubscriptionAttributes** = ``"sns:GetSubscriptionAttributes"``

Grants permission to return all of the properties of a subscription

See https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html

#### Defined in

actions/sns.ts:126

___

### GetTopicAttributes

• **GetTopicAttributes** = ``"sns:GetTopicAttributes"``

Grants permission to return all of the properties of a topic

See https://docs.aws.amazon.com/sns/latest/api/API_GetTopicAttributes.html

#### Defined in

actions/sns.ts:132

___

### ListEndpointsByPlatformApplication

• **ListEndpointsByPlatformApplication** = ``"sns:ListEndpointsByPlatformApplication"``

Grants permission to list the endpoints and endpoint attributes for devices in
a supported push notification service, such as GCM and APNS

See https://docs.aws.amazon.com/sns/latest/api/API_ListEndpointsByPlatformApplication.html

#### Defined in

actions/sns.ts:139

___

### ListOriginationNumbers

• **ListOriginationNumbers** = ``"sns:ListOriginationNumbers"``

Grants permission to list all origination numbers, and their metadata

See https://docs.aws.amazon.com/sns/latest/api/API_ListOriginationNumbers.html

#### Defined in

actions/sns.ts:145

___

### ListPhoneNumbersOptedOut

• **ListPhoneNumbersOptedOut** = ``"sns:ListPhoneNumbersOptedOut"``

Grants permission to return a list of phone numbers that are opted out, meaning
you cannot send SMS messages to them

See https://docs.aws.amazon.com/sns/latest/api/API_ListPhoneNumbersOptedOut.html

#### Defined in

actions/sns.ts:152

___

### ListPlatformApplications

• **ListPlatformApplications** = ``"sns:ListPlatformApplications"``

Grants permission to list the platform application objects for the supported pu
sh notification services, such as APNS and GCM

See https://docs.aws.amazon.com/sns/latest/api/API_ListPlatformApplications.html

#### Defined in

actions/sns.ts:159

___

### ListSMSSandboxPhoneNumbers

• **ListSMSSandboxPhoneNumbers** = ``"sns:ListSMSSandboxPhoneNumbers"``

Grants permission to list the calling account's current pending and verified de
stination phone numbers

See https://docs.aws.amazon.com/sns/latest/api/API_ListSMSSandboxPhoneNumbers.html

#### Defined in

actions/sns.ts:166

___

### ListSubscriptions

• **ListSubscriptions** = ``"sns:ListSubscriptions"``

Grants permission to return a list of the requester's subscriptions

See https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html

#### Defined in

actions/sns.ts:172

___

### ListSubscriptionsByTopic

• **ListSubscriptionsByTopic** = ``"sns:ListSubscriptionsByTopic"``

Grants permission to return a list of the subscriptions to a specific topic

See https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptionsByTopic.html

#### Defined in

actions/sns.ts:178

___

### ListTagsForResource

• **ListTagsForResource** = ``"sns:ListTagsForResource"``

Grants permission to list all tags added to the specified Amazon SNS topic

See https://docs.aws.amazon.com/sns/latest/api/API_ListTagsForResource.html

#### Defined in

actions/sns.ts:184

___

### ListTopics

• **ListTopics** = ``"sns:ListTopics"``

Grants permission to return a list of the requester's topics

See https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html

#### Defined in

actions/sns.ts:190

___

### OptInPhoneNumber

• **OptInPhoneNumber** = ``"sns:OptInPhoneNumber"``

Grants permission to opt in a phone number that is currently opted out, which e
nables you to resume sending SMS messages to the number

See https://docs.aws.amazon.com/sns/latest/api/API_OptInPhoneNumber.html

#### Defined in

actions/sns.ts:197

___

### Publish

• **Publish** = ``"sns:Publish"``

Grants permission to send a message to all of a topic's subscribed endpoints

See https://docs.aws.amazon.com/sns/latest/api/API_Publish.html

#### Defined in

actions/sns.ts:203

___

### PutDataProtectionPolicy

• **PutDataProtectionPolicy** = ``"sns:PutDataProtectionPolicy"``

Grants permission to allow a topic owner to set the data protection policy

See https://docs.aws.amazon.com/sns/latest/api/API_PutDataProtectionPolicy.html

#### Defined in

actions/sns.ts:209

___

### RemovePermission

• **RemovePermission** = ``"sns:RemovePermission"``

Grants permission to remove a statement from a topic's access control policy

See https://docs.aws.amazon.com/sns/latest/api/API_RemovePermission.html

#### Defined in

actions/sns.ts:215

___

### SetEndpointAttributes

• **SetEndpointAttributes** = ``"sns:SetEndpointAttributes"``

Grants permission to set the attributes for an endpoint for a device on one of
the supported push notification services, such as GCM and APNS

See https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html

#### Defined in

actions/sns.ts:222

___

### SetPlatformApplicationAttributes

• **SetPlatformApplicationAttributes** = ``"sns:SetPlatformApplicationAttributes"``

Grants permission to set the attributes of the platform application object for
the supported push notification services, such as APNS and GCM

See https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html

#### Defined in

actions/sns.ts:229

___

### SetSMSAttributes

• **SetSMSAttributes** = ``"sns:SetSMSAttributes"``

Grants permission to set the default settings for sending SMS messages and rece
iving daily SMS usage reports

See https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html

#### Defined in

actions/sns.ts:236

___

### SetSubscriptionAttributes

• **SetSubscriptionAttributes** = ``"sns:SetSubscriptionAttributes"``

Grants permission to allow a subscription owner to set an attribute of the topi
c to a new value

See https://docs.aws.amazon.com/sns/latest/api/API_SetSubscriptionAttributes.html

#### Defined in

actions/sns.ts:243

___

### SetTopicAttributes

• **SetTopicAttributes** = ``"sns:SetTopicAttributes"``

Grants permission to allow a topic owner to set an attribute of the topic to a
new value

See https://docs.aws.amazon.com/sns/latest/api/API_SetTopicAttributes.html

#### Defined in

actions/sns.ts:250

___

### Subscribe

• **Subscribe** = ``"sns:Subscribe"``

Grants permission to prepare to subscribe an endpoint by sending the endpoint a
confirmation message

See https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html

#### Defined in

actions/sns.ts:257

___

### TagResource

• **TagResource** = ``"sns:TagResource"``

Grants permission to add tags to the specified Amazon SNS topic

See https://docs.aws.amazon.com/sns/latest/api/API_TagResource.html

#### Defined in

actions/sns.ts:263

___

### Unsubscribe

• **Unsubscribe** = ``"sns:Unsubscribe"``

Grants permission to delete a subscription

See https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html

#### Defined in

actions/sns.ts:269

___

### UntagResource

• **UntagResource** = ``"sns:UntagResource"``

Grants permission to remove tags from the specified Amazon SNS topic

See https://docs.aws.amazon.com/sns/latest/api/API_UntagResource.html

#### Defined in

actions/sns.ts:275

___

### VerifySMSSandboxPhoneNumber

• **VerifySMSSandboxPhoneNumber** = ``"sns:VerifySMSSandboxPhoneNumber"``

Grants permission to verify a destination phone number with a one-time password
(OTP) for an AWS account

See https://docs.aws.amazon.com/sns/latest/api/API_VerifySMSSandboxPhoneNumber.html

#### Defined in

actions/sns.ts:282
