[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSsmContactsActions

# Enumeration: AwsSsmContactsActions

All IAM policy actions for AWS Systems Manager Incident Manager Contacts (SSM-CONTACTS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanagercontacts.html

2024-02-12T09:59:27.823Z

## Table of contents

### Enumeration Members

- [AcceptPage](AwsSsmContactsActions.md#acceptpage)
- [ActivateContactChannel](AwsSsmContactsActions.md#activatecontactchannel)
- [AssociateContact](AwsSsmContactsActions.md#associatecontact)
- [CreateContact](AwsSsmContactsActions.md#createcontact)
- [CreateContactChannel](AwsSsmContactsActions.md#createcontactchannel)
- [CreateRotation](AwsSsmContactsActions.md#createrotation)
- [CreateRotationOverride](AwsSsmContactsActions.md#createrotationoverride)
- [DeactivateContactChannel](AwsSsmContactsActions.md#deactivatecontactchannel)
- [DeleteContact](AwsSsmContactsActions.md#deletecontact)
- [DeleteContactChannel](AwsSsmContactsActions.md#deletecontactchannel)
- [DeleteRotation](AwsSsmContactsActions.md#deleterotation)
- [DeleteRotationOverride](AwsSsmContactsActions.md#deleterotationoverride)
- [DescribeEngagement](AwsSsmContactsActions.md#describeengagement)
- [DescribePage](AwsSsmContactsActions.md#describepage)
- [GetContact](AwsSsmContactsActions.md#getcontact)
- [GetContactChannel](AwsSsmContactsActions.md#getcontactchannel)
- [GetContactPolicy](AwsSsmContactsActions.md#getcontactpolicy)
- [GetRotation](AwsSsmContactsActions.md#getrotation)
- [GetRotationOverride](AwsSsmContactsActions.md#getrotationoverride)
- [ListContactChannels](AwsSsmContactsActions.md#listcontactchannels)
- [ListContacts](AwsSsmContactsActions.md#listcontacts)
- [ListEngagements](AwsSsmContactsActions.md#listengagements)
- [ListPageReceipts](AwsSsmContactsActions.md#listpagereceipts)
- [ListPageResolutions](AwsSsmContactsActions.md#listpageresolutions)
- [ListPagesByContact](AwsSsmContactsActions.md#listpagesbycontact)
- [ListPagesByEngagement](AwsSsmContactsActions.md#listpagesbyengagement)
- [ListPreviewRotationShifts](AwsSsmContactsActions.md#listpreviewrotationshifts)
- [ListRotationOverrides](AwsSsmContactsActions.md#listrotationoverrides)
- [ListRotationShifts](AwsSsmContactsActions.md#listrotationshifts)
- [ListRotations](AwsSsmContactsActions.md#listrotations)
- [ListTagsForResource](AwsSsmContactsActions.md#listtagsforresource)
- [PutContactPolicy](AwsSsmContactsActions.md#putcontactpolicy)
- [SendActivationCode](AwsSsmContactsActions.md#sendactivationcode)
- [StartEngagement](AwsSsmContactsActions.md#startengagement)
- [StopEngagement](AwsSsmContactsActions.md#stopengagement)
- [TagResource](AwsSsmContactsActions.md#tagresource)
- [UntagResource](AwsSsmContactsActions.md#untagresource)
- [UpdateContact](AwsSsmContactsActions.md#updatecontact)
- [UpdateContactChannel](AwsSsmContactsActions.md#updatecontactchannel)
- [UpdateRotation](AwsSsmContactsActions.md#updaterotation)

## Enumeration Members

### AcceptPage

• **AcceptPage** = ``"ssm-contacts:AcceptPage"``

Grants permission to accept a page

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_AcceptPage.html

#### Defined in

actions/ssm-contacts.ts:17

___

### ActivateContactChannel

• **ActivateContactChannel** = ``"ssm-contacts:ActivateContactChannel"``

Grants permission to activate a contact's contact channel

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ActivateContactChannel.html

#### Defined in

actions/ssm-contacts.ts:23

___

### AssociateContact

• **AssociateContact** = ``"ssm-contacts:AssociateContact"``

Grants permission to use a contact in an escalation plan

See https://docs.aws.amazon.com/incident-manager/latest/userguide/contacts.html

#### Defined in

actions/ssm-contacts.ts:29

___

### CreateContact

• **CreateContact** = ``"ssm-contacts:CreateContact"``

Grants permission to create a contact

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_CreateContact.html

#### Defined in

actions/ssm-contacts.ts:35

___

### CreateContactChannel

• **CreateContactChannel** = ``"ssm-contacts:CreateContactChannel"``

Grants permission to create a contact channel for a contact

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_CreateContactChannel.html

#### Defined in

actions/ssm-contacts.ts:41

___

### CreateRotation

• **CreateRotation** = ``"ssm-contacts:CreateRotation"``

Grants permission to create a rotation in an on-call schedule

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_CreateRotation.html

#### Defined in

actions/ssm-contacts.ts:47

___

### CreateRotationOverride

• **CreateRotationOverride** = ``"ssm-contacts:CreateRotationOverride"``

Grants permission to create an override for a rotation in an on-call schedule

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_CreateRotationOverride.html

#### Defined in

actions/ssm-contacts.ts:53

___

### DeactivateContactChannel

• **DeactivateContactChannel** = ``"ssm-contacts:DeactivateContactChannel"``

Grants permission to deactivate a contact's contact channel

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeactivateContactChannel.html

#### Defined in

actions/ssm-contacts.ts:59

___

### DeleteContact

• **DeleteContact** = ``"ssm-contacts:DeleteContact"``

Grants permission to delete a contact

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteContact.html

#### Defined in

actions/ssm-contacts.ts:65

___

### DeleteContactChannel

• **DeleteContactChannel** = ``"ssm-contacts:DeleteContactChannel"``

Grants permission to delete a contact's contact channel

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteContactChannel.html

#### Defined in

actions/ssm-contacts.ts:71

___

### DeleteRotation

• **DeleteRotation** = ``"ssm-contacts:DeleteRotation"``

Grants permission to delete a rotation

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteRotation.html

#### Defined in

actions/ssm-contacts.ts:77

___

### DeleteRotationOverride

• **DeleteRotationOverride** = ``"ssm-contacts:DeleteRotationOverride"``

Grants permission to delete a rotation's rotation override

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteRotationOverride.html

#### Defined in

actions/ssm-contacts.ts:83

___

### DescribeEngagement

• **DescribeEngagement** = ``"ssm-contacts:DescribeEngagement"``

Grants permission to describe an engagement

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DescribeEngagement.html

#### Defined in

actions/ssm-contacts.ts:89

___

### DescribePage

• **DescribePage** = ``"ssm-contacts:DescribePage"``

Grants permission to describe a page

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DescribePage.html

#### Defined in

actions/ssm-contacts.ts:95

___

### GetContact

• **GetContact** = ``"ssm-contacts:GetContact"``

Grants permission to get a contact

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetContact.html

#### Defined in

actions/ssm-contacts.ts:101

___

### GetContactChannel

• **GetContactChannel** = ``"ssm-contacts:GetContactChannel"``

Grants permission to get a contact's contact channel

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetContactChannel.html

#### Defined in

actions/ssm-contacts.ts:107

___

### GetContactPolicy

• **GetContactPolicy** = ``"ssm-contacts:GetContactPolicy"``

Grants permission to get a contact's resource policy

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetContactPolicy.html

#### Defined in

actions/ssm-contacts.ts:113

___

### GetRotation

• **GetRotation** = ``"ssm-contacts:GetRotation"``

Grants permission to retrieve information about an on-call rotation

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetRotation.html

#### Defined in

actions/ssm-contacts.ts:119

___

### GetRotationOverride

• **GetRotationOverride** = ``"ssm-contacts:GetRotationOverride"``

Grants permission to retrieve information about an override in an on-call rotat
ion

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetRotationOverride.html

#### Defined in

actions/ssm-contacts.ts:126

___

### ListContactChannels

• **ListContactChannels** = ``"ssm-contacts:ListContactChannels"``

Grants permission to list all of a contact's contact channels

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListContactChannels.html

#### Defined in

actions/ssm-contacts.ts:132

___

### ListContacts

• **ListContacts** = ``"ssm-contacts:ListContacts"``

Grants permission to list all contacts

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListContacts.html

#### Defined in

actions/ssm-contacts.ts:138

___

### ListEngagements

• **ListEngagements** = ``"ssm-contacts:ListEngagements"``

Grants permission to list all engagements

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListEngagements.html

#### Defined in

actions/ssm-contacts.ts:144

___

### ListPageReceipts

• **ListPageReceipts** = ``"ssm-contacts:ListPageReceipts"``

Grants permission to list all receipts of a page

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPageReceipts.html

#### Defined in

actions/ssm-contacts.ts:150

___

### ListPageResolutions

• **ListPageResolutions** = ``"ssm-contacts:ListPageResolutions"``

Grants permission to list the resolution path of an engagement

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPageResolutions.html

#### Defined in

actions/ssm-contacts.ts:156

___

### ListPagesByContact

• **ListPagesByContact** = ``"ssm-contacts:ListPagesByContact"``

Grants permission to list all pages sent to a contact

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPagesByContact.html

#### Defined in

actions/ssm-contacts.ts:162

___

### ListPagesByEngagement

• **ListPagesByEngagement** = ``"ssm-contacts:ListPagesByEngagement"``

Grants permission to list all pages created in an engagement

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPagesByEngagement.html

#### Defined in

actions/ssm-contacts.ts:168

___

### ListPreviewRotationShifts

• **ListPreviewRotationShifts** = ``"ssm-contacts:ListPreviewRotationShifts"``

Grants permission to retrieve a list of shifts based on rotation configuration
parameters

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPreviewRotationShifts.html

#### Defined in

actions/ssm-contacts.ts:175

___

### ListRotationOverrides

• **ListRotationOverrides** = ``"ssm-contacts:ListRotationOverrides"``

Grants permission to retrieve a list of overrides currently specified for an on
-call rotation

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListRotationOverrides.html

#### Defined in

actions/ssm-contacts.ts:182

___

### ListRotationShifts

• **ListRotationShifts** = ``"ssm-contacts:ListRotationShifts"``

Grants permission to retrieve a list of rotation shifts in an on-call schedule

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListRotationShifts.html

#### Defined in

actions/ssm-contacts.ts:188

___

### ListRotations

• **ListRotations** = ``"ssm-contacts:ListRotations"``

Grants permission to retrieve a list of on-call rotations

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListRotations.html

#### Defined in

actions/ssm-contacts.ts:194

___

### ListTagsForResource

• **ListTagsForResource** = ``"ssm-contacts:ListTagsForResource"``

Grants permission to view a list of resource tags for a specified resource

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListTagsForResource.html

#### Defined in

actions/ssm-contacts.ts:200

___

### PutContactPolicy

• **PutContactPolicy** = ``"ssm-contacts:PutContactPolicy"``

Grants permission to add a resource policy to a contact

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_PutContactPolicy.html

#### Defined in

actions/ssm-contacts.ts:206

___

### SendActivationCode

• **SendActivationCode** = ``"ssm-contacts:SendActivationCode"``

Grants permission to send the activation code of a contact's contact channel

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_SendActivationCode.html

#### Defined in

actions/ssm-contacts.ts:212

___

### StartEngagement

• **StartEngagement** = ``"ssm-contacts:StartEngagement"``

Grants permission to start an engagement

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_StartEngagement.html

#### Defined in

actions/ssm-contacts.ts:218

___

### StopEngagement

• **StopEngagement** = ``"ssm-contacts:StopEngagement"``

Grants permission to stop an engagement

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_StopEngagement.html

#### Defined in

actions/ssm-contacts.ts:224

___

### TagResource

• **TagResource** = ``"ssm-contacts:TagResource"``

Grants permission to add tags to the specified resource

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_TagResource.html

#### Defined in

actions/ssm-contacts.ts:230

___

### UntagResource

• **UntagResource** = ``"ssm-contacts:UntagResource"``

Grants permission to remove tags from the specified resource

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UntagResource.html

#### Defined in

actions/ssm-contacts.ts:236

___

### UpdateContact

• **UpdateContact** = ``"ssm-contacts:UpdateContact"``

Grants permission to update a contact

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UpdateContact.html

#### Defined in

actions/ssm-contacts.ts:242

___

### UpdateContactChannel

• **UpdateContactChannel** = ``"ssm-contacts:UpdateContactChannel"``

Grants permission to update a contact's contact channel

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UpdateContactChannel.html

#### Defined in

actions/ssm-contacts.ts:248

___

### UpdateRotation

• **UpdateRotation** = ``"ssm-contacts:UpdateRotation"``

Grants permission to update the information specified for an on-call rotation

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UpdateRotation.html

#### Defined in

actions/ssm-contacts.ts:254
