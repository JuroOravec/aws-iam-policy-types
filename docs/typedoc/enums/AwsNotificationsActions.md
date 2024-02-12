[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsNotificationsActions

# Enumeration: AwsNotificationsActions

All IAM policy actions for AWS User Notifications (NOTIFICATIONS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsusernotifications.html

2024-02-12T09:59:34.495Z

## Table of contents

### Enumeration Members

- [AssociateChannel](AwsNotificationsActions.md#associatechannel)
- [CreateEventRule](AwsNotificationsActions.md#createeventrule)
- [CreateNotificationConfiguration](AwsNotificationsActions.md#createnotificationconfiguration)
- [DeleteEventRule](AwsNotificationsActions.md#deleteeventrule)
- [DeleteNotificationConfiguration](AwsNotificationsActions.md#deletenotificationconfiguration)
- [DeregisterNotificationHub](AwsNotificationsActions.md#deregisternotificationhub)
- [DisassociateChannel](AwsNotificationsActions.md#disassociatechannel)
- [GetEventRule](AwsNotificationsActions.md#geteventrule)
- [GetNotificationConfiguration](AwsNotificationsActions.md#getnotificationconfiguration)
- [GetNotificationEvent](AwsNotificationsActions.md#getnotificationevent)
- [ListChannels](AwsNotificationsActions.md#listchannels)
- [ListEventRules](AwsNotificationsActions.md#listeventrules)
- [ListNotificationConfigurations](AwsNotificationsActions.md#listnotificationconfigurations)
- [ListNotificationEvents](AwsNotificationsActions.md#listnotificationevents)
- [ListNotificationHubs](AwsNotificationsActions.md#listnotificationhubs)
- [ListTagsForResource](AwsNotificationsActions.md#listtagsforresource)
- [RegisterNotificationHub](AwsNotificationsActions.md#registernotificationhub)
- [TagResource](AwsNotificationsActions.md#tagresource)
- [UntagResource](AwsNotificationsActions.md#untagresource)
- [UpdateEventRule](AwsNotificationsActions.md#updateeventrule)
- [UpdateNotificationConfiguration](AwsNotificationsActions.md#updatenotificationconfiguration)

## Enumeration Members

### AssociateChannel

• **AssociateChannel** = ``"notifications:AssociateChannel"``

Grants permission to associate a new Channel with a particular NotificationConf
iguration

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:18

___

### CreateEventRule

• **CreateEventRule** = ``"notifications:CreateEventRule"``

Grants permission to create a new EventRule, associating it with a Notification
Configuration

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:25

___

### CreateNotificationConfiguration

• **CreateNotificationConfiguration** = ``"notifications:CreateNotificationConfiguration"``

Grants permission to create a NotificationConfiguration

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:31

___

### DeleteEventRule

• **DeleteEventRule** = ``"notifications:DeleteEventRule"``

Grants permission to delete an EventRule

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:37

___

### DeleteNotificationConfiguration

• **DeleteNotificationConfiguration** = ``"notifications:DeleteNotificationConfiguration"``

Grants permission to delete a NotificationConfiguration

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:43

___

### DeregisterNotificationHub

• **DeregisterNotificationHub** = ``"notifications:DeregisterNotificationHub"``

Grants permission to deregister a NotificationHub

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:49

___

### DisassociateChannel

• **DisassociateChannel** = ``"notifications:DisassociateChannel"``

Grants permission to remove a Channel from a NotificationConfiguration

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:55

___

### GetEventRule

• **GetEventRule** = ``"notifications:GetEventRule"``

Grants permission to get an EventRule

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:61

___

### GetNotificationConfiguration

• **GetNotificationConfiguration** = ``"notifications:GetNotificationConfiguration"``

Grants permission to get a NotificationConfiguration

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:67

___

### GetNotificationEvent

• **GetNotificationEvent** = ``"notifications:GetNotificationEvent"``

Grants permission to get a NotificationEvent

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:73

___

### ListChannels

• **ListChannels** = ``"notifications:ListChannels"``

Grants permission to list Channels by NotificationConfiguration

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:79

___

### ListEventRules

• **ListEventRules** = ``"notifications:ListEventRules"``

Grants permission to list EventRules

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:85

___

### ListNotificationConfigurations

• **ListNotificationConfigurations** = ``"notifications:ListNotificationConfigurations"``

Grants permission to list NotificationConfigurations

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:91

___

### ListNotificationEvents

• **ListNotificationEvents** = ``"notifications:ListNotificationEvents"``

Grants permission to list NotificationEvents

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:97

___

### ListNotificationHubs

• **ListNotificationHubs** = ``"notifications:ListNotificationHubs"``

Grants permission to list NotificationHubs

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:103

___

### ListTagsForResource

• **ListTagsForResource** = ``"notifications:ListTagsForResource"``

Grants permission to get tags for a resource

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:109

___

### RegisterNotificationHub

• **RegisterNotificationHub** = ``"notifications:RegisterNotificationHub"``

Grants permission to register a NotificationHub

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:115

___

### TagResource

• **TagResource** = ``"notifications:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:121

___

### UntagResource

• **UntagResource** = ``"notifications:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:127

___

### UpdateEventRule

• **UpdateEventRule** = ``"notifications:UpdateEventRule"``

Grants permission to update an EventRule

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:133

___

### UpdateNotificationConfiguration

• **UpdateNotificationConfiguration** = ``"notifications:UpdateNotificationConfiguration"``

Grants permission to update a NotificationConfiguration

See https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html

#### Defined in

actions/notifications.ts:139
