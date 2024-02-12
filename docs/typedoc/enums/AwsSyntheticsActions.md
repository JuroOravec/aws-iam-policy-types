[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSyntheticsActions

# Enumeration: AwsSyntheticsActions

All IAM policy actions for Amazon CloudWatch Synthetics (SYNTHETICS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchsynthetics.html

2024-02-12T09:56:31.638Z

## Table of contents

### Enumeration Members

- [AssociateResource](AwsSyntheticsActions.md#associateresource)
- [CreateCanary](AwsSyntheticsActions.md#createcanary)
- [CreateGroup](AwsSyntheticsActions.md#creategroup)
- [DeleteCanary](AwsSyntheticsActions.md#deletecanary)
- [DeleteGroup](AwsSyntheticsActions.md#deletegroup)
- [DescribeCanaries](AwsSyntheticsActions.md#describecanaries)
- [DescribeCanariesLastRun](AwsSyntheticsActions.md#describecanarieslastrun)
- [DescribeRuntimeVersions](AwsSyntheticsActions.md#describeruntimeversions)
- [DisassociateResource](AwsSyntheticsActions.md#disassociateresource)
- [GetCanary](AwsSyntheticsActions.md#getcanary)
- [GetCanaryRuns](AwsSyntheticsActions.md#getcanaryruns)
- [GetGroup](AwsSyntheticsActions.md#getgroup)
- [ListAssociatedGroups](AwsSyntheticsActions.md#listassociatedgroups)
- [ListGroupResources](AwsSyntheticsActions.md#listgroupresources)
- [ListGroups](AwsSyntheticsActions.md#listgroups)
- [ListTagsForResource](AwsSyntheticsActions.md#listtagsforresource)
- [StartCanary](AwsSyntheticsActions.md#startcanary)
- [StopCanary](AwsSyntheticsActions.md#stopcanary)
- [TagResource](AwsSyntheticsActions.md#tagresource)
- [UntagResource](AwsSyntheticsActions.md#untagresource)
- [UpdateCanary](AwsSyntheticsActions.md#updatecanary)

## Enumeration Members

### AssociateResource

• **AssociateResource** = ``"synthetics:AssociateResource"``

Grants permission to associate a resource with a group

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_AssociateResource.html

#### Defined in

actions/synthetics.ts:17

___

### CreateCanary

• **CreateCanary** = ``"synthetics:CreateCanary"``

Grants permission to create a canary

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateCanary.html

#### Defined in

actions/synthetics.ts:23

___

### CreateGroup

• **CreateGroup** = ``"synthetics:CreateGroup"``

Grants permission to create a group

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateGroup.html

#### Defined in

actions/synthetics.ts:29

___

### DeleteCanary

• **DeleteCanary** = ``"synthetics:DeleteCanary"``

Grants permission to delete a canary. Amazon Synthetics deletes all the resourc
es except for the Lambda function and the CloudWatch Alarms if you created one

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html

#### Defined in

actions/synthetics.ts:36

___

### DeleteGroup

• **DeleteGroup** = ``"synthetics:DeleteGroup"``

Grants permission to delete a group

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteGroup.html

#### Defined in

actions/synthetics.ts:42

___

### DescribeCanaries

• **DescribeCanaries** = ``"synthetics:DescribeCanaries"``

Grants permission to list information of all canaries

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html

#### Defined in

actions/synthetics.ts:48

___

### DescribeCanariesLastRun

• **DescribeCanariesLastRun** = ``"synthetics:DescribeCanariesLastRun"``

Grants permission to list information about the last test run associated with a
ll canaries

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanariesLastRun.html

#### Defined in

actions/synthetics.ts:55

___

### DescribeRuntimeVersions

• **DescribeRuntimeVersions** = ``"synthetics:DescribeRuntimeVersions"``

Grants permission to list information about Synthetics canary runtime versions

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeRuntimeVersions.html

#### Defined in

actions/synthetics.ts:61

___

### DisassociateResource

• **DisassociateResource** = ``"synthetics:DisassociateResource"``

Grants permission to disassociate a resource from a group

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DisassociateResource.html

#### Defined in

actions/synthetics.ts:67

___

### GetCanary

• **GetCanary** = ``"synthetics:GetCanary"``

Grants permission to view the details of a canary

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html

#### Defined in

actions/synthetics.ts:73

___

### GetCanaryRuns

• **GetCanaryRuns** = ``"synthetics:GetCanaryRuns"``

Grants permission to list information about all the test runs associated with a
canary

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html

#### Defined in

actions/synthetics.ts:80

___

### GetGroup

• **GetGroup** = ``"synthetics:GetGroup"``

Grants permission to view the details of a group

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetGroup.html

#### Defined in

actions/synthetics.ts:86

___

### ListAssociatedGroups

• **ListAssociatedGroups** = ``"synthetics:ListAssociatedGroups"``

Grants permission to list information about the associated groups of a canary

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListAssociatedGroups.html

#### Defined in

actions/synthetics.ts:92

___

### ListGroupResources

• **ListGroupResources** = ``"synthetics:ListGroupResources"``

Grants permission to list information about canaries in a group

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListGroupResources.html

#### Defined in

actions/synthetics.ts:98

___

### ListGroups

• **ListGroups** = ``"synthetics:ListGroups"``

Grants permission to list information of all groups

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListGroups.html

#### Defined in

actions/synthetics.ts:104

___

### ListTagsForResource

• **ListTagsForResource** = ``"synthetics:ListTagsForResource"``

Grants permission to list all tags and values associated with a resource

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/synthetics.ts:110

___

### StartCanary

• **StartCanary** = ``"synthetics:StartCanary"``

Grants permission to start a canary, so that Amazon CloudWatch Synthetics start
s monitoring a website

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StartCanary.html

#### Defined in

actions/synthetics.ts:117

___

### StopCanary

• **StopCanary** = ``"synthetics:StopCanary"``

Grants permission to stop a canary

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StopCanary.html

#### Defined in

actions/synthetics.ts:123

___

### TagResource

• **TagResource** = ``"synthetics:TagResource"``

Grants permission to add one or more tags to a resource

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html

#### Defined in

actions/synthetics.ts:129

___

### UntagResource

• **UntagResource** = ``"synthetics:UntagResource"``

Grants permission to remove one or more tags from a resource

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UntagResource.html

#### Defined in

actions/synthetics.ts:135

___

### UpdateCanary

• **UpdateCanary** = ``"synthetics:UpdateCanary"``

Grants permission to update a canary

See https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html

#### Defined in

actions/synthetics.ts:141
