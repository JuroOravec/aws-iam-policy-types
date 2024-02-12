[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsFreetierActions

# Enumeration: AwsFreetierActions

All IAM policy actions for AWS Free Tier (FREETIER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfreetier.html

2024-02-12T09:57:28.300Z

## Table of contents

### Enumeration Members

- [GetFreeTierAlertPreference](AwsFreetierActions.md#getfreetieralertpreference)
- [GetFreeTierUsage](AwsFreetierActions.md#getfreetierusage)
- [PutFreeTierAlertPreference](AwsFreetierActions.md#putfreetieralertpreference)

## Enumeration Members

### GetFreeTierAlertPreference

• **GetFreeTierAlertPreference** = ``"freetier:GetFreeTierAlertPreference"``

Grants permission to get free tier alert preference (email address)

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html

#### Defined in

actions/freetier.ts:17

___

### GetFreeTierUsage

• **GetFreeTierUsage** = ``"freetier:GetFreeTierUsage"``

Grants permission to get free tier usage limits and MTD usage status

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html

#### Defined in

actions/freetier.ts:23

___

### PutFreeTierAlertPreference

• **PutFreeTierAlertPreference** = ``"freetier:PutFreeTierAlertPreference"``

Grants permission to set free tier alert preference (email address)

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html

#### Defined in

actions/freetier.ts:29
