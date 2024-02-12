[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAccountActions

# Enumeration: AwsAccountActions

All IAM policy actions for AWS Account Management (ACCOUNT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsaccountmanagement.html

2024-02-12T09:55:50.277Z

## Table of contents

### Enumeration Members

- [CloseAccount](AwsAccountActions.md#closeaccount)
- [DeleteAlternateContact](AwsAccountActions.md#deletealternatecontact)
- [DisableRegion](AwsAccountActions.md#disableregion)
- [EnableRegion](AwsAccountActions.md#enableregion)
- [GetAccountInformation](AwsAccountActions.md#getaccountinformation)
- [GetAlternateContact](AwsAccountActions.md#getalternatecontact)
- [GetChallengeQuestions](AwsAccountActions.md#getchallengequestions)
- [GetContactInformation](AwsAccountActions.md#getcontactinformation)
- [GetRegionOptStatus](AwsAccountActions.md#getregionoptstatus)
- [ListRegions](AwsAccountActions.md#listregions)
- [PutAlternateContact](AwsAccountActions.md#putalternatecontact)
- [PutChallengeQuestions](AwsAccountActions.md#putchallengequestions)
- [PutContactInformation](AwsAccountActions.md#putcontactinformation)

## Enumeration Members

### CloseAccount

• **CloseAccount** = ``"account:CloseAccount"``

Grants permission to close an account

See https://docs.aws.amazon.com/accounts/latest/reference/security_account-permissions-ref.html

#### Defined in

actions/account.ts:17

___

### DeleteAlternateContact

• **DeleteAlternateContact** = ``"account:DeleteAlternateContact"``

Grants permission to delete the alternate contacts for an account

See https://docs.aws.amazon.com/accounts/latest/reference/API_DeleteAlternateContact.html

#### Defined in

actions/account.ts:23

___

### DisableRegion

• **DisableRegion** = ``"account:DisableRegion"``

Grants permission to disable use of a Region

See https://docs.aws.amazon.com/accounts/latest/reference/API_DisableRegion.html

#### Defined in

actions/account.ts:29

___

### EnableRegion

• **EnableRegion** = ``"account:EnableRegion"``

Grants permission to enable use of a Region

See https://docs.aws.amazon.com/accounts/latest/reference/API_EnableRegion.html

#### Defined in

actions/account.ts:35

___

### GetAccountInformation

• **GetAccountInformation** = ``"account:GetAccountInformation"``

Grants permission to retrieve the account information for an account

See https://docs.aws.amazon.com/accounts/latest/reference/security_account-permissions-ref.html

#### Defined in

actions/account.ts:41

___

### GetAlternateContact

• **GetAlternateContact** = ``"account:GetAlternateContact"``

Grants permission to retrieve the alternate contacts for an account

See https://docs.aws.amazon.com/accounts/latest/reference/API_GetAlternateContact.html

#### Defined in

actions/account.ts:47

___

### GetChallengeQuestions

• **GetChallengeQuestions** = ``"account:GetChallengeQuestions"``

Grants permission to retrieve the challenge questions for an account

See https://docs.aws.amazon.com/accounts/latest/reference/security_account-permissions-ref.html

#### Defined in

actions/account.ts:53

___

### GetContactInformation

• **GetContactInformation** = ``"account:GetContactInformation"``

Grants permission to retrieve the primary contact information for an account

See https://docs.aws.amazon.com/accounts/latest/reference/API_GetContactInformation.html

#### Defined in

actions/account.ts:59

___

### GetRegionOptStatus

• **GetRegionOptStatus** = ``"account:GetRegionOptStatus"``

Grants permission to get the opt-in status of a Region

See https://docs.aws.amazon.com/accounts/latest/reference/API_GetRegionOptStatus.html

#### Defined in

actions/account.ts:65

___

### ListRegions

• **ListRegions** = ``"account:ListRegions"``

Grants permission to list the available Regions

See https://docs.aws.amazon.com/accounts/latest/reference/API_ListRegions.html

#### Defined in

actions/account.ts:71

___

### PutAlternateContact

• **PutAlternateContact** = ``"account:PutAlternateContact"``

Grants permission to modify the alternate contacts for an account

See https://docs.aws.amazon.com/accounts/latest/reference/API_PutAlternateContact.html

#### Defined in

actions/account.ts:77

___

### PutChallengeQuestions

• **PutChallengeQuestions** = ``"account:PutChallengeQuestions"``

Grants permission to modify the challenge questions for an account

See https://docs.aws.amazon.com/accounts/latest/reference/security_account-permissions-ref.html

#### Defined in

actions/account.ts:83

___

### PutContactInformation

• **PutContactInformation** = ``"account:PutContactInformation"``

Grants permission to update the primary contact information for an account

See https://docs.aws.amazon.com/accounts/latest/reference/API_PutContactInformation.html

#### Defined in

actions/account.ts:89
