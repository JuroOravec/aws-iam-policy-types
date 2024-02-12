[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsTirosActions

# Enumeration: AwsTirosActions

All IAM policy actions for AWS Tiros (TIROS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstiros.html

2024-02-12T09:59:31.379Z

## Table of contents

### Enumeration Members

- [CreateQuery](AwsTirosActions.md#createquery)
- [ExtendQuery](AwsTirosActions.md#extendquery)
- [GetQueryAnswer](AwsTirosActions.md#getqueryanswer)
- [GetQueryExplanation](AwsTirosActions.md#getqueryexplanation)
- [GetQueryExtensionAccounts](AwsTirosActions.md#getqueryextensionaccounts)

## Enumeration Members

### CreateQuery

• **CreateQuery** = ``"tiros:CreateQuery"``

Grants permission to create a VPC reachability query

See https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html

#### Defined in

actions/tiros.ts:17

___

### ExtendQuery

• **ExtendQuery** = ``"tiros:ExtendQuery"``

Grants permission to extend a VPC reachability query to include the calling pri
ncipals account

See https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html

#### Defined in

actions/tiros.ts:24

___

### GetQueryAnswer

• **GetQueryAnswer** = ``"tiros:GetQueryAnswer"``

Grants permission to get VPC reachability query answers

See https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html

#### Defined in

actions/tiros.ts:30

___

### GetQueryExplanation

• **GetQueryExplanation** = ``"tiros:GetQueryExplanation"``

Grants permission to get VPC reachability query explanations

See https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html

#### Defined in

actions/tiros.ts:36

___

### GetQueryExtensionAccounts

• **GetQueryExtensionAccounts** = ``"tiros:GetQueryExtensionAccounts"``

Grants permission to list accounts that might be useful in a new query

See https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html

#### Defined in

actions/tiros.ts:42
