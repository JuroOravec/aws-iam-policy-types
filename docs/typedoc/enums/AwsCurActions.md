[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCurActions

# Enumeration: AwsCurActions

All IAM policy actions for AWS Cost and Usage Report (CUR)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostandusagereport.html

2024-02-12T09:56:49.204Z

## Table of contents

### Enumeration Members

- [DeleteReportDefinition](AwsCurActions.md#deletereportdefinition)
- [DescribeReportDefinitions](AwsCurActions.md#describereportdefinitions)
- [GetClassicReport](AwsCurActions.md#getclassicreport)
- [GetClassicReportPreferences](AwsCurActions.md#getclassicreportpreferences)
- [GetUsageReport](AwsCurActions.md#getusagereport)
- [ListTagsForResource](AwsCurActions.md#listtagsforresource)
- [ModifyReportDefinition](AwsCurActions.md#modifyreportdefinition)
- [PutClassicReportPreferences](AwsCurActions.md#putclassicreportpreferences)
- [PutReportDefinition](AwsCurActions.md#putreportdefinition)
- [TagResource](AwsCurActions.md#tagresource)
- [UntagResource](AwsCurActions.md#untagresource)
- [ValidateReportDestination](AwsCurActions.md#validatereportdestination)

## Enumeration Members

### DeleteReportDefinition

• **DeleteReportDefinition** = ``"cur:DeleteReportDefinition"``

Grants permission to delete Cost and Usage Report Definition

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_DeleteReportDefinition.html

#### Defined in

actions/cur.ts:17

___

### DescribeReportDefinitions

• **DescribeReportDefinitions** = ``"cur:DescribeReportDefinitions"``

Grants permission to get Cost and Usage Report Definitions

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_DescribeReportDefinitions.html

#### Defined in

actions/cur.ts:23

___

### GetClassicReport

• **GetClassicReport** = ``"cur:GetClassicReport"``

Grants permission to get Bills CSV report

See https://docs.aws.amazon.com/cur/latest/userguide/security.html#user-permissions

#### Defined in

actions/cur.ts:29

___

### GetClassicReportPreferences

• **GetClassicReportPreferences** = ``"cur:GetClassicReportPreferences"``

Grants permission to get the classic report enablement status for Usage Reports

See https://docs.aws.amazon.com/cur/latest/userguide/security.html#user-permissions

#### Defined in

actions/cur.ts:35

___

### GetUsageReport

• **GetUsageReport** = ``"cur:GetUsageReport"``

Grants permission to get list of AWS services, usage type and operation for the
Usage Report workflow. Allows or denies download of usage reports too

See https://docs.aws.amazon.com/cur/latest/userguide/security.html#user-permissions

#### Defined in

actions/cur.ts:42

___

### ListTagsForResource

• **ListTagsForResource** = ``"cur:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_ListTagsForResource.html

#### Defined in

actions/cur.ts:48

___

### ModifyReportDefinition

• **ModifyReportDefinition** = ``"cur:ModifyReportDefinition"``

Grants permission to modify Cost and Usage Report Definition

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_ModifyReportDefinition.html

#### Defined in

actions/cur.ts:54

___

### PutClassicReportPreferences

• **PutClassicReportPreferences** = ``"cur:PutClassicReportPreferences"``

Grants permission to enable classic reports

See https://docs.aws.amazon.com/cur/latest/userguide/security.html#user-permissions

#### Defined in

actions/cur.ts:60

___

### PutReportDefinition

• **PutReportDefinition** = ``"cur:PutReportDefinition"``

Grants permission to write Cost and Usage Report Definition

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_PutReportDefinition.html

#### Defined in

actions/cur.ts:66

___

### TagResource

• **TagResource** = ``"cur:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_TagResource.html

#### Defined in

actions/cur.ts:72

___

### UntagResource

• **UntagResource** = ``"cur:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_cur_UntagResource.html

#### Defined in

actions/cur.ts:78

___

### ValidateReportDestination

• **ValidateReportDestination** = ``"cur:ValidateReportDestination"``

Grants permission to validates if the s3 bucket exists with appropriate permiss
ions for CUR delivery

See https://docs.aws.amazon.com/cur/latest/userguide/security.html#user-permissions

#### Defined in

actions/cur.ts:85
