[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsFreertosActions

# Enumeration: AwsFreertosActions

All IAM policy actions for Amazon FreeRTOS (FREERTOS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfreertos.html

2024-02-12T09:57:28.812Z

## Table of contents

### Enumeration Members

- [CreateSoftwareConfiguration](AwsFreertosActions.md#createsoftwareconfiguration)
- [CreateSubscription](AwsFreertosActions.md#createsubscription)
- [DeleteSoftwareConfiguration](AwsFreertosActions.md#deletesoftwareconfiguration)
- [DescribeHardwarePlatform](AwsFreertosActions.md#describehardwareplatform)
- [DescribeSoftwareConfiguration](AwsFreertosActions.md#describesoftwareconfiguration)
- [DescribeSubscription](AwsFreertosActions.md#describesubscription)
- [GetEmpPatchUrl](AwsFreertosActions.md#getemppatchurl)
- [GetSoftwareURL](AwsFreertosActions.md#getsoftwareurl)
- [GetSoftwareURLForConfiguration](AwsFreertosActions.md#getsoftwareurlforconfiguration)
- [GetSubscriptionBillingAmount](AwsFreertosActions.md#getsubscriptionbillingamount)
- [ListFreeRTOSVersions](AwsFreertosActions.md#listfreertosversions)
- [ListHardwarePlatforms](AwsFreertosActions.md#listhardwareplatforms)
- [ListHardwareVendors](AwsFreertosActions.md#listhardwarevendors)
- [ListSoftwareConfigurations](AwsFreertosActions.md#listsoftwareconfigurations)
- [ListSoftwarePatches](AwsFreertosActions.md#listsoftwarepatches)
- [ListSubscriptionEmails](AwsFreertosActions.md#listsubscriptionemails)
- [ListSubscriptions](AwsFreertosActions.md#listsubscriptions)
- [UpdateEmailRecipients](AwsFreertosActions.md#updateemailrecipients)
- [UpdateSoftwareConfiguration](AwsFreertosActions.md#updatesoftwareconfiguration)
- [VerifyEmail](AwsFreertosActions.md#verifyemail)

## Enumeration Members

### CreateSoftwareConfiguration

• **CreateSoftwareConfiguration** = ``"freertos:CreateSoftwareConfiguration"``

Grants permission to create a software configuration

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:17

___

### CreateSubscription

• **CreateSubscription** = ``"freertos:CreateSubscription"``

Grants permission to create a subscription for FreeRTOS extended maintenance pl
an (EMP)

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html

#### Defined in

actions/freertos.ts:24

___

### DeleteSoftwareConfiguration

• **DeleteSoftwareConfiguration** = ``"freertos:DeleteSoftwareConfiguration"``

Grants permission to delete the software configuration

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:30

___

### DescribeHardwarePlatform

• **DescribeHardwarePlatform** = ``"freertos:DescribeHardwarePlatform"``

Grants permission to describe the hardware platform

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:36

___

### DescribeSoftwareConfiguration

• **DescribeSoftwareConfiguration** = ``"freertos:DescribeSoftwareConfiguration"``

Grants permission to describe the software configuration

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:42

___

### DescribeSubscription

• **DescribeSubscription** = ``"freertos:DescribeSubscription"``

Grants permission to describes the subscription for FreeRTOS extended maintenan
ce plan (EMP)

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html

#### Defined in

actions/freertos.ts:49

___

### GetEmpPatchUrl

• **GetEmpPatchUrl** = ``"freertos:GetEmpPatchUrl"``

Grants permission to get URL for sotware patch-release, patch-diff and release
notes under FreeRTOS extended maintenance plan (EMP)

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html

#### Defined in

actions/freertos.ts:56

___

### GetSoftwareURL

• **GetSoftwareURL** = ``"freertos:GetSoftwareURL"``

Grants permission to get the URL for Amazon FreeRTOS software download

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:62

___

### GetSoftwareURLForConfiguration

• **GetSoftwareURLForConfiguration** = ``"freertos:GetSoftwareURLForConfiguration"``

Grants permission to get the URL for Amazon FreeRTOS software download based on
the configuration

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:69

___

### GetSubscriptionBillingAmount

• **GetSubscriptionBillingAmount** = ``"freertos:GetSubscriptionBillingAmount"``

Grants permission to fetch the subscription billing amount for FreeRTOS extende
d maintenance plan (EMP)

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html

#### Defined in

actions/freertos.ts:76

___

### ListFreeRTOSVersions

• **ListFreeRTOSVersions** = ``"freertos:ListFreeRTOSVersions"``

Grants permission to lists versions of AmazonFreeRTOS

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:82

___

### ListHardwarePlatforms

• **ListHardwarePlatforms** = ``"freertos:ListHardwarePlatforms"``

Grants permission to list the hardware platforms

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:88

___

### ListHardwareVendors

• **ListHardwareVendors** = ``"freertos:ListHardwareVendors"``

Grants permission to list the hardware vendors

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:94

___

### ListSoftwareConfigurations

• **ListSoftwareConfigurations** = ``"freertos:ListSoftwareConfigurations"``

Grants permission to lists the software configurations

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:100

___

### ListSoftwarePatches

• **ListSoftwarePatches** = ``"freertos:ListSoftwarePatches"``

Grants permission to list software patches of subscription for FreeRTOS extende
d maintenance plan (EMP)

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html

#### Defined in

actions/freertos.ts:107

___

### ListSubscriptionEmails

• **ListSubscriptionEmails** = ``"freertos:ListSubscriptionEmails"``

Grants permission to list the subscription emails for FreeRTOS extended mainten
ance plan (EMP)

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html

#### Defined in

actions/freertos.ts:114

___

### ListSubscriptions

• **ListSubscriptions** = ``"freertos:ListSubscriptions"``

Grants permission to list the subscriptions for FreeRTOS extended maintenance p
lan (EMP)

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html

#### Defined in

actions/freertos.ts:121

___

### UpdateEmailRecipients

• **UpdateEmailRecipients** = ``"freertos:UpdateEmailRecipients"``

Grants permission to update list of subscription email address for FreeRTOS ext
ended maintenance plan (EMP)

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html

#### Defined in

actions/freertos.ts:128

___

### UpdateSoftwareConfiguration

• **UpdateSoftwareConfiguration** = ``"freertos:UpdateSoftwareConfiguration"``

Grants permission to update the software configuration

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html

#### Defined in

actions/freertos.ts:134

___

### VerifyEmail

• **VerifyEmail** = ``"freertos:VerifyEmail"``

Grants permission to verify the email for FreeRTOS extended maintenance plan (E
MP)

See https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html

#### Defined in

actions/freertos.ts:141
