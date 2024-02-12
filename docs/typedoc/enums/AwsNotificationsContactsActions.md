[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsNotificationsContactsActions

# Enumeration: AwsNotificationsContactsActions

All IAM policy actions for AWS User Notifications Contacts (NOTIFICATIONS-CONTACTS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsusernotificationscontacts.html

2024-02-12T09:59:34.992Z

## Table of contents

### Enumeration Members

- [ActivateEmailContact](AwsNotificationsContactsActions.md#activateemailcontact)
- [CreateEmailContact](AwsNotificationsContactsActions.md#createemailcontact)
- [DeleteEmailContact](AwsNotificationsContactsActions.md#deleteemailcontact)
- [GetEmailContact](AwsNotificationsContactsActions.md#getemailcontact)
- [ListEmailContacts](AwsNotificationsContactsActions.md#listemailcontacts)
- [ListTagsForResource](AwsNotificationsContactsActions.md#listtagsforresource)
- [SendActivationCode](AwsNotificationsContactsActions.md#sendactivationcode)
- [TagResource](AwsNotificationsContactsActions.md#tagresource)
- [UntagResource](AwsNotificationsContactsActions.md#untagresource)

## Enumeration Members

### ActivateEmailContact

• **ActivateEmailContact** = ``"notifications-contacts:ActivateEmailContact"``

Grants permission to activate the email contact associated with the given ARN i
f the provided code is valid

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications-contacts.ts:18

___

### CreateEmailContact

• **CreateEmailContact** = ``"notifications-contacts:CreateEmailContact"``

Grants permission to create an email contact

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications-contacts.ts:24

___

### DeleteEmailContact

• **DeleteEmailContact** = ``"notifications-contacts:DeleteEmailContact"``

Grants permission to delete an email contact associated with the given ARN

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications-contacts.ts:30

___

### GetEmailContact

• **GetEmailContact** = ``"notifications-contacts:GetEmailContact"``

Grants permission to get an email contact associated with the given ARN

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications-contacts.ts:36

___

### ListEmailContacts

• **ListEmailContacts** = ``"notifications-contacts:ListEmailContacts"``

Grants permission to list email contacts

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications-contacts.ts:42

___

### ListTagsForResource

• **ListTagsForResource** = ``"notifications-contacts:ListTagsForResource"``

Grants permission to get tags for a resource

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications-contacts.ts:48

___

### SendActivationCode

• **SendActivationCode** = ``"notifications-contacts:SendActivationCode"``

Grants permission to send an activation link to the email associated with the g
iven ARN

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications-contacts.ts:55

___

### TagResource

• **TagResource** = ``"notifications-contacts:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications-contacts.ts:61

___

### UntagResource

• **UntagResource** = ``"notifications-contacts:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications-contacts.ts:67
