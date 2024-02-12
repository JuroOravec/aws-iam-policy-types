[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAwsPortalActions

# Enumeration: AwsAwsPortalActions

All IAM policy actions for AWS Billing Console (AWS-PORTAL)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingconsole.html

2024-02-12T09:56:14.157Z

## Table of contents

### Enumeration Members

- [GetConsoleActionSetEnforced](AwsAwsPortalActions.md#getconsoleactionsetenforced)
- [ModifyAccount](AwsAwsPortalActions.md#modifyaccount)
- [ModifyBilling](AwsAwsPortalActions.md#modifybilling)
- [ModifyPaymentMethods](AwsAwsPortalActions.md#modifypaymentmethods)
- [UpdateConsoleActionSetEnforced](AwsAwsPortalActions.md#updateconsoleactionsetenforced)
- [ViewAccount](AwsAwsPortalActions.md#viewaccount)
- [ViewBilling](AwsAwsPortalActions.md#viewbilling)
- [ViewPaymentMethods](AwsAwsPortalActions.md#viewpaymentmethods)
- [ViewUsage](AwsAwsPortalActions.md#viewusage)

## Enumeration Members

### GetConsoleActionSetEnforced

• **GetConsoleActionSetEnforced** = ``"aws-portal:GetConsoleActionSetEnforced"``

Grants permission to view whether existing or fine-grained IAM actions are bein
g used to control authorization to Billing, Cost Management, and Account consol
es

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/aws-portal.ts:19

___

### ModifyAccount

• **ModifyAccount** = ``"aws-portal:ModifyAccount"``

Allow or deny IAM users permission to modify Account Settings

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/aws-portal.ts:25

___

### ModifyBilling

• **ModifyBilling** = ``"aws-portal:ModifyBilling"``

Allow or deny IAM users permission to modify billing settings

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/aws-portal.ts:31

___

### ModifyPaymentMethods

• **ModifyPaymentMethods** = ``"aws-portal:ModifyPaymentMethods"``

Allow or deny IAM users permission to modify payment methods

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/aws-portal.ts:37

___

### UpdateConsoleActionSetEnforced

• **UpdateConsoleActionSetEnforced** = ``"aws-portal:UpdateConsoleActionSetEnforced"``

Grants permission to change whether existing or fine-grained IAM actions will b
e used to control authorization to Billing, Cost Management, and Account consol
es

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/aws-portal.ts:45

___

### ViewAccount

• **ViewAccount** = ``"aws-portal:ViewAccount"``

Allow or deny IAM users permission to view account settings

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/aws-portal.ts:51

___

### ViewBilling

• **ViewBilling** = ``"aws-portal:ViewBilling"``

Allow or deny IAM users permission to view billing pages in the console

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/aws-portal.ts:57

___

### ViewPaymentMethods

• **ViewPaymentMethods** = ``"aws-portal:ViewPaymentMethods"``

Allow or deny IAM users permission to view payment methods

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/aws-portal.ts:63

___

### ViewUsage

• **ViewUsage** = ``"aws-portal:ViewUsage"``

Allow or deny IAM users permission to view AWS usage reports

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/aws-portal.ts:69
