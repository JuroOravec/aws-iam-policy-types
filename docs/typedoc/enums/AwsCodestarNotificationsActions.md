[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodestarNotificationsActions

# Enumeration: AwsCodestarNotificationsActions

All IAM policy actions for AWS CodeStar Notifications (CODESTAR-NOTIFICATIONS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarnotifications.html

2024-02-12T09:56:39.771Z

## Table of contents

### Enumeration Members

- [CreateNotificationRule](AwsCodestarNotificationsActions.md#createnotificationrule)
- [DeleteNotificationRule](AwsCodestarNotificationsActions.md#deletenotificationrule)
- [DeleteTarget](AwsCodestarNotificationsActions.md#deletetarget)
- [DescribeNotificationRule](AwsCodestarNotificationsActions.md#describenotificationrule)
- [ListEventTypes](AwsCodestarNotificationsActions.md#listeventtypes)
- [ListNotificationRules](AwsCodestarNotificationsActions.md#listnotificationrules)
- [ListTagsForResource](AwsCodestarNotificationsActions.md#listtagsforresource)
- [ListTargets](AwsCodestarNotificationsActions.md#listtargets)
- [Subscribe](AwsCodestarNotificationsActions.md#subscribe)
- [TagResource](AwsCodestarNotificationsActions.md#tagresource)
- [Unsubscribe](AwsCodestarNotificationsActions.md#unsubscribe)
- [UntagResource](AwsCodestarNotificationsActions.md#untagresource)
- [UpdateNotificationRule](AwsCodestarNotificationsActions.md#updatenotificationrule)

## Enumeration Members

### CreateNotificationRule

• **CreateNotificationRule** = ``"codestar-notifications:CreateNotificationRule"``

Grants permission to create a notification rule for a resource

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_CreateNotificationRule.html

#### Defined in

actions/codestar-notifications.ts:17

___

### DeleteNotificationRule

• **DeleteNotificationRule** = ``"codestar-notifications:DeleteNotificationRule"``

Grants permission to delete a notification rule for a resource

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteNotificationRule.html

#### Defined in

actions/codestar-notifications.ts:23

___

### DeleteTarget

• **DeleteTarget** = ``"codestar-notifications:DeleteTarget"``

Grants permission to delete a target for a notification rule

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteTarget.html

#### Defined in

actions/codestar-notifications.ts:29

___

### DescribeNotificationRule

• **DescribeNotificationRule** = ``"codestar-notifications:DescribeNotificationRule"``

Grants permission to get information about a notification rule

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DescribeNotificationRule.html

#### Defined in

actions/codestar-notifications.ts:35

___

### ListEventTypes

• **ListEventTypes** = ``"codestar-notifications:ListEventTypes"``

Grants permission to list notifications event types

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListEventTypes.html

#### Defined in

actions/codestar-notifications.ts:41

___

### ListNotificationRules

• **ListNotificationRules** = ``"codestar-notifications:ListNotificationRules"``

Grants permission to list notification rules in an AWS account

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListNotificationRules.html

#### Defined in

actions/codestar-notifications.ts:47

___

### ListTagsForResource

• **ListTagsForResource** = ``"codestar-notifications:ListTagsForResource"``

Grants permission to list the tags attached to a notification rule resource ARN

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/codestar-notifications.ts:53

___

### ListTargets

• **ListTargets** = ``"codestar-notifications:ListTargets"``

Grants permission to list the notification rule targets for an AWS account

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTargets.html

#### Defined in

actions/codestar-notifications.ts:59

___

### Subscribe

• **Subscribe** = ``"codestar-notifications:Subscribe"``

Grants permission to create an association between a notification rule and an A
mazon SNS topic

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Subscribe.html

#### Defined in

actions/codestar-notifications.ts:66

___

### TagResource

• **TagResource** = ``"codestar-notifications:TagResource"``

Grants permission to attach resource tags to a notification rule resource ARN

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_TagResource.html

#### Defined in

actions/codestar-notifications.ts:72

___

### Unsubscribe

• **Unsubscribe** = ``"codestar-notifications:Unsubscribe"``

Grants permission to remove an association between a notification rule and an A
mazon SNS topic

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Unsubscribe.html

#### Defined in

actions/codestar-notifications.ts:79

___

### UntagResource

• **UntagResource** = ``"codestar-notifications:UntagResource"``

Grants permission to disassociate resource tags from a notification rule resour
ce ARN

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UntagResource.html

#### Defined in

actions/codestar-notifications.ts:86

___

### UpdateNotificationRule

• **UpdateNotificationRule** = ``"codestar-notifications:UpdateNotificationRule"``

Grants permission to change a notification rule for a resource

See https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UpdateNotificationRule.html

#### Defined in

actions/codestar-notifications.ts:92
