[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsResourceExplorer2Actions

# Enumeration: AwsResourceExplorer2Actions

All IAM policy actions for AWS Resource Explorer (RESOURCE-EXPLORER-2)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceexplorer.html

2024-02-12T09:58:55.683Z

## Table of contents

### Enumeration Members

- [AssociateDefaultView](AwsResourceExplorer2Actions.md#associatedefaultview)
- [BatchGetView](AwsResourceExplorer2Actions.md#batchgetview)
- [CreateIndex](AwsResourceExplorer2Actions.md#createindex)
- [CreateView](AwsResourceExplorer2Actions.md#createview)
- [DeleteIndex](AwsResourceExplorer2Actions.md#deleteindex)
- [DeleteView](AwsResourceExplorer2Actions.md#deleteview)
- [DisassociateDefaultView](AwsResourceExplorer2Actions.md#disassociatedefaultview)
- [GetAccountLevelServiceConfiguration](AwsResourceExplorer2Actions.md#getaccountlevelserviceconfiguration)
- [GetDefaultView](AwsResourceExplorer2Actions.md#getdefaultview)
- [GetIndex](AwsResourceExplorer2Actions.md#getindex)
- [GetView](AwsResourceExplorer2Actions.md#getview)
- [ListIndexes](AwsResourceExplorer2Actions.md#listindexes)
- [ListIndexesForMembers](AwsResourceExplorer2Actions.md#listindexesformembers)
- [ListSupportedResourceTypes](AwsResourceExplorer2Actions.md#listsupportedresourcetypes)
- [ListTagsForResource](AwsResourceExplorer2Actions.md#listtagsforresource)
- [ListViews](AwsResourceExplorer2Actions.md#listviews)
- [Search](AwsResourceExplorer2Actions.md#search)
- [TagResource](AwsResourceExplorer2Actions.md#tagresource)
- [UntagResource](AwsResourceExplorer2Actions.md#untagresource)
- [UpdateIndexType](AwsResourceExplorer2Actions.md#updateindextype)
- [UpdateView](AwsResourceExplorer2Actions.md#updateview)

## Enumeration Members

### AssociateDefaultView

• **AssociateDefaultView** = ``"resource-explorer-2:AssociateDefaultView"``

Grants permission to set the specified view as the default for this AWS Region
in this AWS account

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_AssociateDefaultView.html

#### Defined in

actions/resource-explorer-2.ts:18

___

### BatchGetView

• **BatchGetView** = ``"resource-explorer-2:BatchGetView"``

Grants permission to retrieve details about views that you specify by a list of
ARNs

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_BatchGetView.html

#### Defined in

actions/resource-explorer-2.ts:25

___

### CreateIndex

• **CreateIndex** = ``"resource-explorer-2:CreateIndex"``

Grants permission to turn on Resource Explorer in the AWS Region in which you c
alled this operation by creating an index

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_CreateIndex.html

#### Defined in

actions/resource-explorer-2.ts:32

___

### CreateView

• **CreateView** = ``"resource-explorer-2:CreateView"``

Grants permission to create a view that users can query

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_CreateView.html

#### Defined in

actions/resource-explorer-2.ts:38

___

### DeleteIndex

• **DeleteIndex** = ``"resource-explorer-2:DeleteIndex"``

Grants permission to turn off Resource Explorer in the specified AWS Region by
deleting the index

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_DeleteIndex.html

#### Defined in

actions/resource-explorer-2.ts:45

___

### DeleteView

• **DeleteView** = ``"resource-explorer-2:DeleteView"``

Grants permission to delete a view

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_DeleteView.html

#### Defined in

actions/resource-explorer-2.ts:51

___

### DisassociateDefaultView

• **DisassociateDefaultView** = ``"resource-explorer-2:DisassociateDefaultView"``

Grants permission to remove the default view for the AWS Region in which you ca
ll this operation

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_DisassociateDefaultView.html

#### Defined in

actions/resource-explorer-2.ts:58

___

### GetAccountLevelServiceConfiguration

• **GetAccountLevelServiceConfiguration** = ``"resource-explorer-2:GetAccountLevelServiceConfiguration"``

Grants permission to Resource Explorer to access account level data within your
AWS Organization

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_GetAccountLevelServiceConfiguration.html

#### Defined in

actions/resource-explorer-2.ts:65

___

### GetDefaultView

• **GetDefaultView** = ``"resource-explorer-2:GetDefaultView"``

Grants permission to retrieve the Amazon resource name (ARN) of the view that i
s the default for the AWS Region in which you call this operation

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_GetDefaultView.html

#### Defined in

actions/resource-explorer-2.ts:72

___

### GetIndex

• **GetIndex** = ``"resource-explorer-2:GetIndex"``

Grants permission to retrieve information about the index in the AWS Region in
which you call this operation

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_GetIndex.html

#### Defined in

actions/resource-explorer-2.ts:79

___

### GetView

• **GetView** = ``"resource-explorer-2:GetView"``

Grants permission to retrieve information about the specified view

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_GetView.html

#### Defined in

actions/resource-explorer-2.ts:85

___

### ListIndexes

• **ListIndexes** = ``"resource-explorer-2:ListIndexes"``

Grants permission to list the indexes in all AWS Regions

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListIndexes.html

#### Defined in

actions/resource-explorer-2.ts:91

___

### ListIndexesForMembers

• **ListIndexesForMembers** = ``"resource-explorer-2:ListIndexesForMembers"``

Grants permission to list the organization member account's indexes in all AWS
Regions

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListIndexesForMembers.html

#### Defined in

actions/resource-explorer-2.ts:98

___

### ListSupportedResourceTypes

• **ListSupportedResourceTypes** = ``"resource-explorer-2:ListSupportedResourceTypes"``

Grants permission to retrieve a list of all resource types currently supported
by Resource Explorer

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListSupportedResourceTypes.html

#### Defined in

actions/resource-explorer-2.ts:105

___

### ListTagsForResource

• **ListTagsForResource** = ``"resource-explorer-2:ListTagsForResource"``

Grants permission to list the tags that are attached to the specified resource

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListTagsForResource.html

#### Defined in

actions/resource-explorer-2.ts:111

___

### ListViews

• **ListViews** = ``"resource-explorer-2:ListViews"``

Grants permission to list the Amazon resource names (ARNs) of all of the views
available in the AWS Region in which you call this operation

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListViews.html

#### Defined in

actions/resource-explorer-2.ts:118

___

### Search

• **Search** = ``"resource-explorer-2:Search"``

Grants permission to search for resources and display details about all resourc
es that match the specified criteria

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_Search.html

#### Defined in

actions/resource-explorer-2.ts:125

___

### TagResource

• **TagResource** = ``"resource-explorer-2:TagResource"``

Grants permission to add one or more tag key and value pairs to the specified r
esource

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_TagResource.html

#### Defined in

actions/resource-explorer-2.ts:132

___

### UntagResource

• **UntagResource** = ``"resource-explorer-2:UntagResource"``

Grants permission to remove one or more tag key and value pairs from the specif
ied resource

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_UntagResource.html

#### Defined in

actions/resource-explorer-2.ts:139

___

### UpdateIndexType

• **UpdateIndexType** = ``"resource-explorer-2:UpdateIndexType"``

Grants permission to change the type of the index from LOCAL to AGGREGATOR or b
ack

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_UpdateIndexType.html

#### Defined in

actions/resource-explorer-2.ts:146

___

### UpdateView

• **UpdateView** = ``"resource-explorer-2:UpdateView"``

Grants permission to modify some of the details of a view

See https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_UpdateView.html

#### Defined in

actions/resource-explorer-2.ts:152
