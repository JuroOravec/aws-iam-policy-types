[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsPaymentsActions

# Enumeration: AwsPaymentsActions

All IAM policy actions for AWS Payments (PAYMENTS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspayments.html

2024-02-12T09:58:37.214Z

## Table of contents

### Enumeration Members

- [CreatePaymentInstrument](AwsPaymentsActions.md#createpaymentinstrument)
- [DeletePaymentInstrument](AwsPaymentsActions.md#deletepaymentinstrument)
- [GetPaymentInstrument](AwsPaymentsActions.md#getpaymentinstrument)
- [GetPaymentStatus](AwsPaymentsActions.md#getpaymentstatus)
- [ListPaymentPreferences](AwsPaymentsActions.md#listpaymentpreferences)
- [MakePayment](AwsPaymentsActions.md#makepayment)
- [UpdatePaymentPreferences](AwsPaymentsActions.md#updatepaymentpreferences)

## Enumeration Members

### CreatePaymentInstrument

• **CreatePaymentInstrument** = ``"payments:CreatePaymentInstrument"``

Grants permission to create a payment instrument

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/payments.ts:17

___

### DeletePaymentInstrument

• **DeletePaymentInstrument** = ``"payments:DeletePaymentInstrument"``

Grants permission to delete a payment instrument

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/payments.ts:23

___

### GetPaymentInstrument

• **GetPaymentInstrument** = ``"payments:GetPaymentInstrument"``

Grants permission to get information about a payment instrument

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/payments.ts:29

___

### GetPaymentStatus

• **GetPaymentStatus** = ``"payments:GetPaymentStatus"``

Grants permission to get payment status of invoices

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/payments.ts:35

___

### ListPaymentPreferences

• **ListPaymentPreferences** = ``"payments:ListPaymentPreferences"``

Grants permission to get payment preferences (preferred payment currency, prefe
rred payment method, etc.)

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/payments.ts:42

___

### MakePayment

• **MakePayment** = ``"payments:MakePayment"``

Grants permission to make a payment, authenticate a payment, verify a payment m
ethod, and generate a funding request document for Advance Pay

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/payments.ts:49

___

### UpdatePaymentPreferences

• **UpdatePaymentPreferences** = ``"payments:UpdatePaymentPreferences"``

Grants permission to update payment preferences (preferred payment currency, pr
eferred payment method, etc.)

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html

#### Defined in

actions/payments.ts:56
