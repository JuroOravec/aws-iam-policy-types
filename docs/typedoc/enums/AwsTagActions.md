[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsTagActions

# Enumeration: AwsTagActions

All IAM policy actions for Amazon Resource Group Tagging API (TAG)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonresourcegrouptaggingapi.html

2024-02-12T09:58:56.172Z

## Table of contents

### Enumeration Members

- [DescribeReportCreation](AwsTagActions.md#describereportcreation)
- [GetComplianceSummary](AwsTagActions.md#getcompliancesummary)
- [GetResources](AwsTagActions.md#getresources)
- [GetTagKeys](AwsTagActions.md#gettagkeys)
- [GetTagValues](AwsTagActions.md#gettagvalues)
- [StartReportCreation](AwsTagActions.md#startreportcreation)
- [TagResources](AwsTagActions.md#tagresources)
- [UntagResources](AwsTagActions.md#untagresources)

## Enumeration Members

### DescribeReportCreation

• **DescribeReportCreation** = ``"tag:DescribeReportCreation"``

Grants permission to describe the status of the StartReportCreation operation

See https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_DescribeReportCreation.html

#### Defined in

actions/tag.ts:17

___

### GetComplianceSummary

• **GetComplianceSummary** = ``"tag:GetComplianceSummary"``

Grants permission to retrieve a summary of how many resources are noncompliant
with their effective tag policies

See https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetComplianceSummary.html

#### Defined in

actions/tag.ts:24

___

### GetResources

• **GetResources** = ``"tag:GetResources"``

Grants permission to return tagged or previously tagged resources in the specif
ied AWS Region for the calling account

See https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html

#### Defined in

actions/tag.ts:31

___

### GetTagKeys

• **GetTagKeys** = ``"tag:GetTagKeys"``

Grants permission to returns tag keys currently in use in the specified AWS Reg
ion for the calling account

See https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetTagKeys.html

#### Defined in

actions/tag.ts:38

___

### GetTagValues

• **GetTagValues** = ``"tag:GetTagValues"``

Grants permission to return tag values for the specified key that are used in t
he specified AWS Region for the calling account

See https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetTagValues.html

#### Defined in

actions/tag.ts:45

___

### StartReportCreation

• **StartReportCreation** = ``"tag:StartReportCreation"``

Grants permission to start generating a report listing all tagged resources in
accounts across your organization, and whether each resource is compliant with
the effective tag policy

See https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_StartReportCreation.html

#### Defined in

actions/tag.ts:53

___

### TagResources

• **TagResources** = ``"tag:TagResources"``

Grants permission to apply one or more tags to the specified resources

See https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html

#### Defined in

actions/tag.ts:59

___

### UntagResources

• **UntagResources** = ``"tag:UntagResources"``

Grants permission to remove the specified tags from the specified resources

See https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_UntagResources.html

#### Defined in

actions/tag.ts:65
