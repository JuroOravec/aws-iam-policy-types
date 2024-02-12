[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsBillingActions

# Enumeration: AwsBillingActions

All IAM policy actions for AWS Billing (BILLING)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling.html

2024-02-12T09:56:12.633Z

## Table of contents

### Enumeration Members

- [GetBillingData](AwsBillingActions.md#getbillingdata)
- [GetBillingDetails](AwsBillingActions.md#getbillingdetails)
- [GetBillingNotifications](AwsBillingActions.md#getbillingnotifications)
- [GetBillingPreferences](AwsBillingActions.md#getbillingpreferences)
- [GetContractInformation](AwsBillingActions.md#getcontractinformation)
- [GetCredits](AwsBillingActions.md#getcredits)
- [GetIAMAccessPreference](AwsBillingActions.md#getiamaccesspreference)
- [GetSellerOfRecord](AwsBillingActions.md#getsellerofrecord)
- [ListBillingViews](AwsBillingActions.md#listbillingviews)
- [PutContractInformation](AwsBillingActions.md#putcontractinformation)
- [RedeemCredits](AwsBillingActions.md#redeemcredits)
- [UpdateBillingPreferences](AwsBillingActions.md#updatebillingpreferences)
- [UpdateIAMAccessPreference](AwsBillingActions.md#updateiamaccesspreference)

## Enumeration Members

### GetBillingData

• **GetBillingData** = ``"billing:GetBillingData"``

Grants permission to perform queries on billing information

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:17

___

### GetBillingDetails

• **GetBillingDetails** = ``"billing:GetBillingDetails"``

Grants permission to view detailed line item billing information

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:23

___

### GetBillingNotifications

• **GetBillingNotifications** = ``"billing:GetBillingNotifications"``

Grants permission to view notifications sent by AWS related to your accounts bi
lling information

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:30

___

### GetBillingPreferences

• **GetBillingPreferences** = ``"billing:GetBillingPreferences"``

Grants permission to view billing preferences such as reserved instance, saving
s plans and credits sharing

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:37

___

### GetContractInformation

• **GetContractInformation** = ``"billing:GetContractInformation"``

Grants permission to view the account's contract information including the cont
ract number, end-user organization names, PO numbers and if the account is used
to service public-sector customers

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:45

___

### GetCredits

• **GetCredits** = ``"billing:GetCredits"``

Grants permission to view credits that have been redeemed

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:51

___

### GetIAMAccessPreference

• **GetIAMAccessPreference** = ``"billing:GetIAMAccessPreference"``

Grants permission to retrieve the state of the Allow IAM Access billing prefere
nce

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:58

___

### GetSellerOfRecord

• **GetSellerOfRecord** = ``"billing:GetSellerOfRecord"``

Grants permission to retrieve the account's default Seller of Record

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:64

___

### ListBillingViews

• **ListBillingViews** = ``"billing:ListBillingViews"``

Grants permission to get billing information for your proforma billing groups

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:70

___

### PutContractInformation

• **PutContractInformation** = ``"billing:PutContractInformation"``

Grants permission to set the account's contract information end-user organizati
on names and if the account is used to service public-sector customers

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:77

___

### RedeemCredits

• **RedeemCredits** = ``"billing:RedeemCredits"``

Grants permission to redeem an AWS credit

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:83

___

### UpdateBillingPreferences

• **UpdateBillingPreferences** = ``"billing:UpdateBillingPreferences"``

Grants permission to update billing preferences such as reserved instance, savi
ngs plans and credits sharing

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:90

___

### UpdateIAMAccessPreference

• **UpdateIAMAccessPreference** = ``"billing:UpdateIAMAccessPreference"``

Grants permission to update the Allow IAM Access billing preference

See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions

#### Defined in

actions/billing.ts:96
