[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDaxActions

# Enumeration: AwsDaxActions

All IAM policy actions for Amazon DynamoDB Accelerator (DAX) (DAX)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodbacceleratordax.html

2024-02-12T09:57:01.360Z

## Table of contents

### Enumeration Members

- [BatchGetItem](AwsDaxActions.md#batchgetitem)
- [BatchWriteItem](AwsDaxActions.md#batchwriteitem)
- [ConditionCheckItem](AwsDaxActions.md#conditioncheckitem)
- [CreateCluster](AwsDaxActions.md#createcluster)
- [CreateParameterGroup](AwsDaxActions.md#createparametergroup)
- [CreateSubnetGroup](AwsDaxActions.md#createsubnetgroup)
- [DecreaseReplicationFactor](AwsDaxActions.md#decreasereplicationfactor)
- [DeleteCluster](AwsDaxActions.md#deletecluster)
- [DeleteItem](AwsDaxActions.md#deleteitem)
- [DeleteParameterGroup](AwsDaxActions.md#deleteparametergroup)
- [DeleteSubnetGroup](AwsDaxActions.md#deletesubnetgroup)
- [DescribeClusters](AwsDaxActions.md#describeclusters)
- [DescribeDefaultParameters](AwsDaxActions.md#describedefaultparameters)
- [DescribeEvents](AwsDaxActions.md#describeevents)
- [DescribeParameterGroups](AwsDaxActions.md#describeparametergroups)
- [DescribeParameters](AwsDaxActions.md#describeparameters)
- [DescribeSubnetGroups](AwsDaxActions.md#describesubnetgroups)
- [GetItem](AwsDaxActions.md#getitem)
- [IncreaseReplicationFactor](AwsDaxActions.md#increasereplicationfactor)
- [ListTags](AwsDaxActions.md#listtags)
- [PutItem](AwsDaxActions.md#putitem)
- [Query](AwsDaxActions.md#query)
- [RebootNode](AwsDaxActions.md#rebootnode)
- [Scan](AwsDaxActions.md#scan)
- [TagResource](AwsDaxActions.md#tagresource)
- [UntagResource](AwsDaxActions.md#untagresource)
- [UpdateCluster](AwsDaxActions.md#updatecluster)
- [UpdateItem](AwsDaxActions.md#updateitem)
- [UpdateParameterGroup](AwsDaxActions.md#updateparametergroup)
- [UpdateSubnetGroup](AwsDaxActions.md#updatesubnetgroup)

## Enumeration Members

### BatchGetItem

• **BatchGetItem** = ``"dax:BatchGetItem"``

Grants permission to return the attributes of one or more items from one or mor
e tables

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html

#### Defined in

actions/dax.ts:18

___

### BatchWriteItem

• **BatchWriteItem** = ``"dax:BatchWriteItem"``

Grants permission to put or delete multiple items in one or more tables

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html

#### Defined in

actions/dax.ts:24

___

### ConditionCheckItem

• **ConditionCheckItem** = ``"dax:ConditionCheckItem"``

Grants permission to the ConditionCheckItem operation that checks the existence
of a set of attributes for the item with the given primary key

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheckItem.html

#### Defined in

actions/dax.ts:31

___

### CreateCluster

• **CreateCluster** = ``"dax:CreateCluster"``

Grants permission to create a DAX cluster

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateCluster.html

#### Defined in

actions/dax.ts:37

___

### CreateParameterGroup

• **CreateParameterGroup** = ``"dax:CreateParameterGroup"``

Grants permission to create a parameter group

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateParameterGroup.html

#### Defined in

actions/dax.ts:43

___

### CreateSubnetGroup

• **CreateSubnetGroup** = ``"dax:CreateSubnetGroup"``

Grants permission to create a subnet group

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateSubnetGroup.html

#### Defined in

actions/dax.ts:49

___

### DecreaseReplicationFactor

• **DecreaseReplicationFactor** = ``"dax:DecreaseReplicationFactor"``

Grants permission to remove one or more nodes from a DAX cluster

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DecreaseReplicationFactor.html

#### Defined in

actions/dax.ts:55

___

### DeleteCluster

• **DeleteCluster** = ``"dax:DeleteCluster"``

Grants permission to delete a previously provisioned DAX cluster

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteCluster.html

#### Defined in

actions/dax.ts:61

___

### DeleteItem

• **DeleteItem** = ``"dax:DeleteItem"``

Grants permission to delete a single item in a table by primary key

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html

#### Defined in

actions/dax.ts:67

___

### DeleteParameterGroup

• **DeleteParameterGroup** = ``"dax:DeleteParameterGroup"``

Grants permission to delete the specified parameter group

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteParameterGroup.html

#### Defined in

actions/dax.ts:73

___

### DeleteSubnetGroup

• **DeleteSubnetGroup** = ``"dax:DeleteSubnetGroup"``

Grants permission to delete a subnet group

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteSubnetGroup.html

#### Defined in

actions/dax.ts:79

___

### DescribeClusters

• **DescribeClusters** = ``"dax:DescribeClusters"``

Grants permission to return information about all provisioned DAX clusters

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeClusters.html

#### Defined in

actions/dax.ts:85

___

### DescribeDefaultParameters

• **DescribeDefaultParameters** = ``"dax:DescribeDefaultParameters"``

Grants permission to return the default system parameter information for DAX

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeDefaultParameters.html

#### Defined in

actions/dax.ts:91

___

### DescribeEvents

• **DescribeEvents** = ``"dax:DescribeEvents"``

Grants permission to return events related to DAX clusters and parameter groups

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeEvents.html

#### Defined in

actions/dax.ts:97

___

### DescribeParameterGroups

• **DescribeParameterGroups** = ``"dax:DescribeParameterGroups"``

Grants permission to return a list of parameter group descriptions

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameterGroups.html

#### Defined in

actions/dax.ts:103

___

### DescribeParameters

• **DescribeParameters** = ``"dax:DescribeParameters"``

Grants permission to return the detailed parameter list for a particular parame
ter group

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameters.html

#### Defined in

actions/dax.ts:110

___

### DescribeSubnetGroups

• **DescribeSubnetGroups** = ``"dax:DescribeSubnetGroups"``

Grants permission to return a list of subnet group descriptions

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeSubnetGroups.html

#### Defined in

actions/dax.ts:116

___

### GetItem

• **GetItem** = ``"dax:GetItem"``

Grants permission to the GetItem operation that returns a set of attributes for
the item with the given primary key

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html

#### Defined in

actions/dax.ts:123

___

### IncreaseReplicationFactor

• **IncreaseReplicationFactor** = ``"dax:IncreaseReplicationFactor"``

Grants permission to add one or more nodes to a DAX cluster

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_IncreaseReplicationFactor.html

#### Defined in

actions/dax.ts:129

___

### ListTags

• **ListTags** = ``"dax:ListTags"``

Grants permission to return a list all of the tags for a DAX cluster

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_ListTags.html

#### Defined in

actions/dax.ts:135

___

### PutItem

• **PutItem** = ``"dax:PutItem"``

Grants permission to create a new item, or replace an old item with a new item

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html

#### Defined in

actions/dax.ts:141

___

### Query

• **Query** = ``"dax:Query"``

Grants permission to use the primary key of a table or a secondary index to dir
ectly access items from that table or index

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html

#### Defined in

actions/dax.ts:148

___

### RebootNode

• **RebootNode** = ``"dax:RebootNode"``

Grants permission to reboot a single node of a DAX cluster

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_RebootNode.html

#### Defined in

actions/dax.ts:154

___

### Scan

• **Scan** = ``"dax:Scan"``

Grants permission to return one or more items and item attributes by accessing
every item in a table or a secondary index

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html

#### Defined in

actions/dax.ts:161

___

### TagResource

• **TagResource** = ``"dax:TagResource"``

Grants permission to associate a set of tags with a DAX resource

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_TagResource.html

#### Defined in

actions/dax.ts:167

___

### UntagResource

• **UntagResource** = ``"dax:UntagResource"``

Grants permission to remove the association of tags from a DAX resource

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UntagResource.html

#### Defined in

actions/dax.ts:173

___

### UpdateCluster

• **UpdateCluster** = ``"dax:UpdateCluster"``

Grants permission to modify the settings for a DAX cluster

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateCluster.html

#### Defined in

actions/dax.ts:179

___

### UpdateItem

• **UpdateItem** = ``"dax:UpdateItem"``

Grants permission to edit an existing item's attributes, or adds a new item to
the table if it does not already exist

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html

#### Defined in

actions/dax.ts:186

___

### UpdateParameterGroup

• **UpdateParameterGroup** = ``"dax:UpdateParameterGroup"``

Grants permission to modify the parameters of a parameter group

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateParameterGroup.html

#### Defined in

actions/dax.ts:192

___

### UpdateSubnetGroup

• **UpdateSubnetGroup** = ``"dax:UpdateSubnetGroup"``

Grants permission to modify an existing subnet group

See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateSubnetGroup.html

#### Defined in

actions/dax.ts:198
