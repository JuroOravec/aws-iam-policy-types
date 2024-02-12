[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsConsolidatedbillingActions

# Enumeration: AwsConsolidatedbillingActions

All IAM policy actions for AWS Consolidated Billing (CONSOLIDATEDBILLING)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconsolidatedbilling.html

2024-02-12T09:56:48.188Z

## Table of contents

### Enumeration Members

- [GetAccountBillingRole](AwsConsolidatedbillingActions.md#getaccountbillingrole)
- [ListLinkedAccounts](AwsConsolidatedbillingActions.md#listlinkedaccounts)

## Enumeration Members

### GetAccountBillingRole

• **GetAccountBillingRole** = ``"consolidatedbilling:GetAccountBillingRole"``

Grants permission to get account role (Payer, Linked, Regular)

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/consolidatedbilling.ts:17

___

### ListLinkedAccounts

• **ListLinkedAccounts** = ``"consolidatedbilling:ListLinkedAccounts"``

Grants permission to get list of member/linked accounts

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/consolidatedbilling.ts:23
