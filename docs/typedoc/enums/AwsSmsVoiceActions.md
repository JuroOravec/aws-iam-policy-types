[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSmsVoiceActions

# Enumeration: AwsSmsVoiceActions

All IAM policy actions for Amazon Pinpoint SMS Voice V2 (SMS-VOICE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointsmsvoicev2.html

2024-02-12T09:58:40.939Z

## Table of contents

### Enumeration Members

- [AssociateOriginationIdentity](AwsSmsVoiceActions.md#associateoriginationidentity)
- [CreateConfigurationSet](AwsSmsVoiceActions.md#createconfigurationset)
- [CreateEventDestination](AwsSmsVoiceActions.md#createeventdestination)
- [CreateOptOutList](AwsSmsVoiceActions.md#createoptoutlist)
- [CreatePool](AwsSmsVoiceActions.md#createpool)
- [CreateRegistration](AwsSmsVoiceActions.md#createregistration)
- [CreateRegistrationAssociation](AwsSmsVoiceActions.md#createregistrationassociation)
- [CreateRegistrationAttachment](AwsSmsVoiceActions.md#createregistrationattachment)
- [CreateRegistrationVersion](AwsSmsVoiceActions.md#createregistrationversion)
- [CreateVerifiedDestinationNumber](AwsSmsVoiceActions.md#createverifieddestinationnumber)
- [DeleteConfigurationSet](AwsSmsVoiceActions.md#deleteconfigurationset)
- [DeleteDefaultMessageType](AwsSmsVoiceActions.md#deletedefaultmessagetype)
- [DeleteDefaultSenderId](AwsSmsVoiceActions.md#deletedefaultsenderid)
- [DeleteEventDestination](AwsSmsVoiceActions.md#deleteeventdestination)
- [DeleteKeyword](AwsSmsVoiceActions.md#deletekeyword)
- [DeleteOptOutList](AwsSmsVoiceActions.md#deleteoptoutlist)
- [DeleteOptedOutNumber](AwsSmsVoiceActions.md#deleteoptedoutnumber)
- [DeletePool](AwsSmsVoiceActions.md#deletepool)
- [DeleteRegistration](AwsSmsVoiceActions.md#deleteregistration)
- [DeleteRegistrationAttachment](AwsSmsVoiceActions.md#deleteregistrationattachment)
- [DeleteRegistrationFieldValue](AwsSmsVoiceActions.md#deleteregistrationfieldvalue)
- [DeleteTextMessageSpendLimitOverride](AwsSmsVoiceActions.md#deletetextmessagespendlimitoverride)
- [DeleteVerifiedDestinationNumber](AwsSmsVoiceActions.md#deleteverifieddestinationnumber)
- [DeleteVoiceMessageSpendLimitOverride](AwsSmsVoiceActions.md#deletevoicemessagespendlimitoverride)
- [DescribeAccountAttributes](AwsSmsVoiceActions.md#describeaccountattributes)
- [DescribeAccountLimits](AwsSmsVoiceActions.md#describeaccountlimits)
- [DescribeConfigurationSets](AwsSmsVoiceActions.md#describeconfigurationsets)
- [DescribeKeywords](AwsSmsVoiceActions.md#describekeywords)
- [DescribeOptOutLists](AwsSmsVoiceActions.md#describeoptoutlists)
- [DescribeOptedOutNumbers](AwsSmsVoiceActions.md#describeoptedoutnumbers)
- [DescribePhoneNumbers](AwsSmsVoiceActions.md#describephonenumbers)
- [DescribePools](AwsSmsVoiceActions.md#describepools)
- [DescribeRegistrationAttachments](AwsSmsVoiceActions.md#describeregistrationattachments)
- [DescribeRegistrationFieldDefinitions](AwsSmsVoiceActions.md#describeregistrationfielddefinitions)
- [DescribeRegistrationFieldValues](AwsSmsVoiceActions.md#describeregistrationfieldvalues)
- [DescribeRegistrationSectionDefinitions](AwsSmsVoiceActions.md#describeregistrationsectiondefinitions)
- [DescribeRegistrationTypeDefinitions](AwsSmsVoiceActions.md#describeregistrationtypedefinitions)
- [DescribeRegistrationVersions](AwsSmsVoiceActions.md#describeregistrationversions)
- [DescribeRegistrations](AwsSmsVoiceActions.md#describeregistrations)
- [DescribeSenderIds](AwsSmsVoiceActions.md#describesenderids)
- [DescribeSpendLimits](AwsSmsVoiceActions.md#describespendlimits)
- [DescribeVerifiedDestinationNumbers](AwsSmsVoiceActions.md#describeverifieddestinationnumbers)
- [DisassociateOriginationIdentity](AwsSmsVoiceActions.md#disassociateoriginationidentity)
- [DiscardRegistrationVersion](AwsSmsVoiceActions.md#discardregistrationversion)
- [ListPoolOriginationIdentities](AwsSmsVoiceActions.md#listpooloriginationidentities)
- [ListRegistrationAssociations](AwsSmsVoiceActions.md#listregistrationassociations)
- [ListTagsForResource](AwsSmsVoiceActions.md#listtagsforresource)
- [PutKeyword](AwsSmsVoiceActions.md#putkeyword)
- [PutOptedOutNumber](AwsSmsVoiceActions.md#putoptedoutnumber)
- [PutRegistrationFieldValue](AwsSmsVoiceActions.md#putregistrationfieldvalue)
- [ReleasePhoneNumber](AwsSmsVoiceActions.md#releasephonenumber)
- [ReleaseSenderId](AwsSmsVoiceActions.md#releasesenderid)
- [RequestPhoneNumber](AwsSmsVoiceActions.md#requestphonenumber)
- [RequestSenderId](AwsSmsVoiceActions.md#requestsenderid)
- [SendDestinationNumberVerificationCode](AwsSmsVoiceActions.md#senddestinationnumberverificationcode)
- [SendTextMessage](AwsSmsVoiceActions.md#sendtextmessage)
- [SendVoiceMessage](AwsSmsVoiceActions.md#sendvoicemessage)
- [SetDefaultMessageType](AwsSmsVoiceActions.md#setdefaultmessagetype)
- [SetDefaultSenderId](AwsSmsVoiceActions.md#setdefaultsenderid)
- [SetTextMessageSpendLimitOverride](AwsSmsVoiceActions.md#settextmessagespendlimitoverride)
- [SetVoiceMessageSpendLimitOverride](AwsSmsVoiceActions.md#setvoicemessagespendlimitoverride)
- [SubmitRegistrationVersion](AwsSmsVoiceActions.md#submitregistrationversion)
- [TagResource](AwsSmsVoiceActions.md#tagresource)
- [UntagResource](AwsSmsVoiceActions.md#untagresource)
- [UpdateEventDestination](AwsSmsVoiceActions.md#updateeventdestination)
- [UpdatePhoneNumber](AwsSmsVoiceActions.md#updatephonenumber)
- [UpdatePool](AwsSmsVoiceActions.md#updatepool)
- [UpdateSenderId](AwsSmsVoiceActions.md#updatesenderid)
- [VerifyDestinationNumber](AwsSmsVoiceActions.md#verifydestinationnumber)

## Enumeration Members

### AssociateOriginationIdentity

• **AssociateOriginationIdentity** = ``"sms-voice:AssociateOriginationIdentity"``

Grants permission to associate an origination phone number or sender ID to a po
ol

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_AssociateOriginationIdentity.html

#### Defined in

actions/sms-voice.ts:18

___

### CreateConfigurationSet

• **CreateConfigurationSet** = ``"sms-voice:CreateConfigurationSet"``

Grants permission to create a configuration set

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateConfigurationSet.html

#### Defined in

actions/sms-voice.ts:24

___

### CreateEventDestination

• **CreateEventDestination** = ``"sms-voice:CreateEventDestination"``

Grants permission to create an event destination within a configuration set

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateEventDestination.html

#### Defined in

actions/sms-voice.ts:30

___

### CreateOptOutList

• **CreateOptOutList** = ``"sms-voice:CreateOptOutList"``

Grants permission to create an opt-out list

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateOptOutList.html

#### Defined in

actions/sms-voice.ts:36

___

### CreatePool

• **CreatePool** = ``"sms-voice:CreatePool"``

Grants permission to create a pool

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreatePool.html

#### Defined in

actions/sms-voice.ts:42

___

### CreateRegistration

• **CreateRegistration** = ``"sms-voice:CreateRegistration"``

Grants permission to create a registration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateRegistration.html

#### Defined in

actions/sms-voice.ts:48

___

### CreateRegistrationAssociation

• **CreateRegistrationAssociation** = ``"sms-voice:CreateRegistrationAssociation"``

Grants permission to associate a registration with a phone number or another re
gistration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateRegistrationAssociation.html

#### Defined in

actions/sms-voice.ts:55

___

### CreateRegistrationAttachment

• **CreateRegistrationAttachment** = ``"sms-voice:CreateRegistrationAttachment"``

Grants permission to create a registration attachment

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateRegistrationAttachment.html

#### Defined in

actions/sms-voice.ts:61

___

### CreateRegistrationVersion

• **CreateRegistrationVersion** = ``"sms-voice:CreateRegistrationVersion"``

Grants permission to create a registration version

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateRegistrationVersion.html

#### Defined in

actions/sms-voice.ts:67

___

### CreateVerifiedDestinationNumber

• **CreateVerifiedDestinationNumber** = ``"sms-voice:CreateVerifiedDestinationNumber"``

Grants permission to create a verified destination number

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateVerifiedDestinationNumber.html

#### Defined in

actions/sms-voice.ts:73

___

### DeleteConfigurationSet

• **DeleteConfigurationSet** = ``"sms-voice:DeleteConfigurationSet"``

Grants permission to delete a configuration set

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteConfigurationSet.html

#### Defined in

actions/sms-voice.ts:79

___

### DeleteDefaultMessageType

• **DeleteDefaultMessageType** = ``"sms-voice:DeleteDefaultMessageType"``

Grants permission to delete the default message type for a configuration set

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteDefaultMessageType.html

#### Defined in

actions/sms-voice.ts:85

___

### DeleteDefaultSenderId

• **DeleteDefaultSenderId** = ``"sms-voice:DeleteDefaultSenderId"``

Grants permission to delete the default sender ID for a configuration set

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteDefaultSenderId.html

#### Defined in

actions/sms-voice.ts:91

___

### DeleteEventDestination

• **DeleteEventDestination** = ``"sms-voice:DeleteEventDestination"``

Grants permission to delete an event destination within a configuration set

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteEventDestination.html

#### Defined in

actions/sms-voice.ts:97

___

### DeleteKeyword

• **DeleteKeyword** = ``"sms-voice:DeleteKeyword"``

Grants permission to delete a keyword for a pool or origination phone number

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteKeyword.html

#### Defined in

actions/sms-voice.ts:103

___

### DeleteOptOutList

• **DeleteOptOutList** = ``"sms-voice:DeleteOptOutList"``

Grants permission to delete an opt-out list

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteOptOutList.html

#### Defined in

actions/sms-voice.ts:109

___

### DeleteOptedOutNumber

• **DeleteOptedOutNumber** = ``"sms-voice:DeleteOptedOutNumber"``

Grants permission to delete a destination phone number from an opt-out list

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteOptedOutNumber.html

#### Defined in

actions/sms-voice.ts:115

___

### DeletePool

• **DeletePool** = ``"sms-voice:DeletePool"``

Grants permission to delete a pool

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeletePool.html

#### Defined in

actions/sms-voice.ts:121

___

### DeleteRegistration

• **DeleteRegistration** = ``"sms-voice:DeleteRegistration"``

Grants permission to delete a registration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteRegistration.html

#### Defined in

actions/sms-voice.ts:127

___

### DeleteRegistrationAttachment

• **DeleteRegistrationAttachment** = ``"sms-voice:DeleteRegistrationAttachment"``

Grants permission to delete a registration attachment

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteRegistrationAttachment.html

#### Defined in

actions/sms-voice.ts:133

___

### DeleteRegistrationFieldValue

• **DeleteRegistrationFieldValue** = ``"sms-voice:DeleteRegistrationFieldValue"``

Grants permission to delete an optional registration field value

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteRegistrationFieldValue.html

#### Defined in

actions/sms-voice.ts:139

___

### DeleteTextMessageSpendLimitOverride

• **DeleteTextMessageSpendLimitOverride** = ``"sms-voice:DeleteTextMessageSpendLimitOverride"``

Grants permission to delete an override for your account's text messaging month
ly spend limit

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteTextMessageSpendLimitOverride.html

#### Defined in

actions/sms-voice.ts:146

___

### DeleteVerifiedDestinationNumber

• **DeleteVerifiedDestinationNumber** = ``"sms-voice:DeleteVerifiedDestinationNumber"``

Grants permission to delete a verified destination number

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteVerifiedDestinationNumber.html

#### Defined in

actions/sms-voice.ts:152

___

### DeleteVoiceMessageSpendLimitOverride

• **DeleteVoiceMessageSpendLimitOverride** = ``"sms-voice:DeleteVoiceMessageSpendLimitOverride"``

Grants permission to delete an override for your account's voice messaging mont
hly spend limit

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteVoiceMessageSpendLimitOverride.html

#### Defined in

actions/sms-voice.ts:159

___

### DescribeAccountAttributes

• **DescribeAccountAttributes** = ``"sms-voice:DescribeAccountAttributes"``

Grants permission to describe the attributes of your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeAccountAttributes.html

#### Defined in

actions/sms-voice.ts:165

___

### DescribeAccountLimits

• **DescribeAccountLimits** = ``"sms-voice:DescribeAccountLimits"``

Grants permission to describe the service quotas for your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeAccountLimits.html

#### Defined in

actions/sms-voice.ts:171

___

### DescribeConfigurationSets

• **DescribeConfigurationSets** = ``"sms-voice:DescribeConfigurationSets"``

Grants permission to describe the configuration sets in your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeConfigurationSets.html

#### Defined in

actions/sms-voice.ts:177

___

### DescribeKeywords

• **DescribeKeywords** = ``"sms-voice:DescribeKeywords"``

Grants permission to describe the keywords for a pool or origination phone numb
er

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeKeywords.html

#### Defined in

actions/sms-voice.ts:184

___

### DescribeOptOutLists

• **DescribeOptOutLists** = ``"sms-voice:DescribeOptOutLists"``

Grants permission to describe the opt-out lists in your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeOptOutLists.html

#### Defined in

actions/sms-voice.ts:190

___

### DescribeOptedOutNumbers

• **DescribeOptedOutNumbers** = ``"sms-voice:DescribeOptedOutNumbers"``

Grants permission to describe the destination phone numbers in an opt-out list

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeOptedOutNumbers.html

#### Defined in

actions/sms-voice.ts:196

___

### DescribePhoneNumbers

• **DescribePhoneNumbers** = ``"sms-voice:DescribePhoneNumbers"``

Grants permission to describe the origination phone numbers in your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePhoneNumbers.html

#### Defined in

actions/sms-voice.ts:202

___

### DescribePools

• **DescribePools** = ``"sms-voice:DescribePools"``

Grants permission to describe the pools in your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePools.html

#### Defined in

actions/sms-voice.ts:208

___

### DescribeRegistrationAttachments

• **DescribeRegistrationAttachments** = ``"sms-voice:DescribeRegistrationAttachments"``

Grants permission to describe the registration attachments in your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePools.html

#### Defined in

actions/sms-voice.ts:214

___

### DescribeRegistrationFieldDefinitions

• **DescribeRegistrationFieldDefinitions** = ``"sms-voice:DescribeRegistrationFieldDefinitions"``

Grants permission to describe the field definitions for a given registration ty
pe

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationFieldDefinitions.html

#### Defined in

actions/sms-voice.ts:221

___

### DescribeRegistrationFieldValues

• **DescribeRegistrationFieldValues** = ``"sms-voice:DescribeRegistrationFieldValues"``

Grants permission to describe the field values for a given registration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationFieldValues.html

#### Defined in

actions/sms-voice.ts:227

___

### DescribeRegistrationSectionDefinitions

• **DescribeRegistrationSectionDefinitions** = ``"sms-voice:DescribeRegistrationSectionDefinitions"``

Grants permission to describe the section definitions for a given registration
type

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationSectionDefinitions.html

#### Defined in

actions/sms-voice.ts:234

___

### DescribeRegistrationTypeDefinitions

• **DescribeRegistrationTypeDefinitions** = ``"sms-voice:DescribeRegistrationTypeDefinitions"``

Grants permission to describe the registration types supported by the service

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationTypeDefinitions.html

#### Defined in

actions/sms-voice.ts:240

___

### DescribeRegistrationVersions

• **DescribeRegistrationVersions** = ``"sms-voice:DescribeRegistrationVersions"``

Grants permission to describe the versions for a given registration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationVersions.html

#### Defined in

actions/sms-voice.ts:246

___

### DescribeRegistrations

• **DescribeRegistrations** = ``"sms-voice:DescribeRegistrations"``

Grants permission to describe the registrations in your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrations.html

#### Defined in

actions/sms-voice.ts:252

___

### DescribeSenderIds

• **DescribeSenderIds** = ``"sms-voice:DescribeSenderIds"``

Grants permission to describe the sender IDs in your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeSenderIds.html

#### Defined in

actions/sms-voice.ts:258

___

### DescribeSpendLimits

• **DescribeSpendLimits** = ``"sms-voice:DescribeSpendLimits"``

Grants permission to describe the monthly spend limits for your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeSpendLimits.html

#### Defined in

actions/sms-voice.ts:264

___

### DescribeVerifiedDestinationNumbers

• **DescribeVerifiedDestinationNumbers** = ``"sms-voice:DescribeVerifiedDestinationNumbers"``

Grants permission to describe the verified destination numbers in your account

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeVerifiedDestinationNumbers.html

#### Defined in

actions/sms-voice.ts:270

___

### DisassociateOriginationIdentity

• **DisassociateOriginationIdentity** = ``"sms-voice:DisassociateOriginationIdentity"``

Grants permission to disassociate an origination phone number or sender ID from
a pool

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DisassociateOriginationIdentity.html

#### Defined in

actions/sms-voice.ts:277

___

### DiscardRegistrationVersion

• **DiscardRegistrationVersion** = ``"sms-voice:DiscardRegistrationVersion"``

Grants permission to discard the latest version of a given registration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DiscardRegistrationVersion.html

#### Defined in

actions/sms-voice.ts:283

___

### ListPoolOriginationIdentities

• **ListPoolOriginationIdentities** = ``"sms-voice:ListPoolOriginationIdentities"``

Grants permission to list all origination phone numbers and sender IDs associat
ed to a pool

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ListPoolOriginationIdentities.html

#### Defined in

actions/sms-voice.ts:290

___

### ListRegistrationAssociations

• **ListRegistrationAssociations** = ``"sms-voice:ListRegistrationAssociations"``

Grants permission to list all resources associated to a registration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ListRegistrationAssociations.html

#### Defined in

actions/sms-voice.ts:296

___

### ListTagsForResource

• **ListTagsForResource** = ``"sms-voice:ListTagsForResource"``

Grants permission to list the tags for a resource

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ListTagsForResource.html

#### Defined in

actions/sms-voice.ts:302

___

### PutKeyword

• **PutKeyword** = ``"sms-voice:PutKeyword"``

Grants permission to create or update a keyword for a pool or origination phone
number

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_PutKeyword.html

#### Defined in

actions/sms-voice.ts:309

___

### PutOptedOutNumber

• **PutOptedOutNumber** = ``"sms-voice:PutOptedOutNumber"``

Grants permission to put a destination phone number into an opt-out list

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_PutOptedOutNumber.html

#### Defined in

actions/sms-voice.ts:315

___

### PutRegistrationFieldValue

• **PutRegistrationFieldValue** = ``"sms-voice:PutRegistrationFieldValue"``

Grants permission to put a registration field value

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_PutRegistrationFieldValue.html

#### Defined in

actions/sms-voice.ts:321

___

### ReleasePhoneNumber

• **ReleasePhoneNumber** = ``"sms-voice:ReleasePhoneNumber"``

Grants permission to release an origination phone number

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ReleasePhoneNumber.html

#### Defined in

actions/sms-voice.ts:327

___

### ReleaseSenderId

• **ReleaseSenderId** = ``"sms-voice:ReleaseSenderId"``

Grants permission to release a sender ID

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ReleaseSenderId.html

#### Defined in

actions/sms-voice.ts:333

___

### RequestPhoneNumber

• **RequestPhoneNumber** = ``"sms-voice:RequestPhoneNumber"``

Grants permission to request an origination phone number

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_RequestPhoneNumber.html

#### Defined in

actions/sms-voice.ts:339

___

### RequestSenderId

• **RequestSenderId** = ``"sms-voice:RequestSenderId"``

Grants permission to request an unregistered sender ID

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_RequestSenderId.html

#### Defined in

actions/sms-voice.ts:345

___

### SendDestinationNumberVerificationCode

• **SendDestinationNumberVerificationCode** = ``"sms-voice:SendDestinationNumberVerificationCode"``

Grants permission to send a text or voice message containing a verification cod
e to a destination phone number

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SendDestinationNumberVerificationCode.html

#### Defined in

actions/sms-voice.ts:352

___

### SendTextMessage

• **SendTextMessage** = ``"sms-voice:SendTextMessage"``

Grants permission to send a text message to a destination phone number

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SendTextMessage.html

#### Defined in

actions/sms-voice.ts:358

___

### SendVoiceMessage

• **SendVoiceMessage** = ``"sms-voice:SendVoiceMessage"``

Grants permission to send a voice message to a destination phone number

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SendVoiceMessage.html

#### Defined in

actions/sms-voice.ts:364

___

### SetDefaultMessageType

• **SetDefaultMessageType** = ``"sms-voice:SetDefaultMessageType"``

Grants permission to set the default message type for a configuration set

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetDefaultMessageType.html

#### Defined in

actions/sms-voice.ts:370

___

### SetDefaultSenderId

• **SetDefaultSenderId** = ``"sms-voice:SetDefaultSenderId"``

Grants permission to set the default sender ID for a configuration set

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetDefaultSenderId.html

#### Defined in

actions/sms-voice.ts:376

___

### SetTextMessageSpendLimitOverride

• **SetTextMessageSpendLimitOverride** = ``"sms-voice:SetTextMessageSpendLimitOverride"``

Grants permission to set an override for your account's text messaging monthly
spend limit

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetTextMessageSpendLimitOverride.html

#### Defined in

actions/sms-voice.ts:383

___

### SetVoiceMessageSpendLimitOverride

• **SetVoiceMessageSpendLimitOverride** = ``"sms-voice:SetVoiceMessageSpendLimitOverride"``

Grants permission to set an override for your account's voice messaging monthly
spend limit

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetVoiceMessageSpendLimitOverride.html

#### Defined in

actions/sms-voice.ts:390

___

### SubmitRegistrationVersion

• **SubmitRegistrationVersion** = ``"sms-voice:SubmitRegistrationVersion"``

Grants permission to submit the latest version of a given registration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SubmitRegistrationVersion.html

#### Defined in

actions/sms-voice.ts:396

___

### TagResource

• **TagResource** = ``"sms-voice:TagResource"``

Grants permission to add tags to a resource

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_TagResource.html

#### Defined in

actions/sms-voice.ts:402

___

### UntagResource

• **UntagResource** = ``"sms-voice:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UntagResource.html

#### Defined in

actions/sms-voice.ts:408

___

### UpdateEventDestination

• **UpdateEventDestination** = ``"sms-voice:UpdateEventDestination"``

Grants permission to update an event destination within a configuration set

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdateEventDestination.html

#### Defined in

actions/sms-voice.ts:414

___

### UpdatePhoneNumber

• **UpdatePhoneNumber** = ``"sms-voice:UpdatePhoneNumber"``

Grants permission to update an origination phone number's configuration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdatePhoneNumber.html

#### Defined in

actions/sms-voice.ts:420

___

### UpdatePool

• **UpdatePool** = ``"sms-voice:UpdatePool"``

Grants permission to update a pool's configuration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdatePool.html

#### Defined in

actions/sms-voice.ts:426

___

### UpdateSenderId

• **UpdateSenderId** = ``"sms-voice:UpdateSenderId"``

Grants permission to update a sender ID's configuration

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdateSenderId.html

#### Defined in

actions/sms-voice.ts:432

___

### VerifyDestinationNumber

• **VerifyDestinationNumber** = ``"sms-voice:VerifyDestinationNumber"``

Grants permission to verify a destination phone number

See https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_VerifyDestinationNumber.html

#### Defined in

actions/sms-voice.ts:438
