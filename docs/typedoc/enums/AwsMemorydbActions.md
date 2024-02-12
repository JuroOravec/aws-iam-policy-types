[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMemorydbActions

# Enumeration: AwsMemorydbActions

All IAM policy actions for Amazon MemoryDB (MEMORYDB)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmemorydb.html

2024-02-12T09:58:22.061Z

## Table of contents

### Enumeration Members

- [BatchUpdateCluster](AwsMemorydbActions.md#batchupdatecluster)
- [Connect](AwsMemorydbActions.md#connect)
- [CopySnapshot](AwsMemorydbActions.md#copysnapshot)
- [CreateAcl](AwsMemorydbActions.md#createacl)
- [CreateCluster](AwsMemorydbActions.md#createcluster)
- [CreateParameterGroup](AwsMemorydbActions.md#createparametergroup)
- [CreateSnapshot](AwsMemorydbActions.md#createsnapshot)
- [CreateSubnetGroup](AwsMemorydbActions.md#createsubnetgroup)
- [CreateUser](AwsMemorydbActions.md#createuser)
- [DeleteAcl](AwsMemorydbActions.md#deleteacl)
- [DeleteCluster](AwsMemorydbActions.md#deletecluster)
- [DeleteParameterGroup](AwsMemorydbActions.md#deleteparametergroup)
- [DeleteSnapshot](AwsMemorydbActions.md#deletesnapshot)
- [DeleteSubnetGroup](AwsMemorydbActions.md#deletesubnetgroup)
- [DeleteUser](AwsMemorydbActions.md#deleteuser)
- [DescribeAcls](AwsMemorydbActions.md#describeacls)
- [DescribeClusters](AwsMemorydbActions.md#describeclusters)
- [DescribeEngineVersions](AwsMemorydbActions.md#describeengineversions)
- [DescribeEvents](AwsMemorydbActions.md#describeevents)
- [DescribeParameterGroups](AwsMemorydbActions.md#describeparametergroups)
- [DescribeParameters](AwsMemorydbActions.md#describeparameters)
- [DescribeReservedNodes](AwsMemorydbActions.md#describereservednodes)
- [DescribeReservedNodesOfferings](AwsMemorydbActions.md#describereservednodesofferings)
- [DescribeServiceUpdates](AwsMemorydbActions.md#describeserviceupdates)
- [DescribeSnapshots](AwsMemorydbActions.md#describesnapshots)
- [DescribeSubnetGroups](AwsMemorydbActions.md#describesubnetgroups)
- [DescribeUsers](AwsMemorydbActions.md#describeusers)
- [FailoverShard](AwsMemorydbActions.md#failovershard)
- [ListAllowedNodeTypeUpdates](AwsMemorydbActions.md#listallowednodetypeupdates)
- [ListTags](AwsMemorydbActions.md#listtags)
- [PurchaseReservedNodesOffering](AwsMemorydbActions.md#purchasereservednodesoffering)
- [ResetParameterGroup](AwsMemorydbActions.md#resetparametergroup)
- [TagResource](AwsMemorydbActions.md#tagresource)
- [UntagResource](AwsMemorydbActions.md#untagresource)
- [UpdateAcl](AwsMemorydbActions.md#updateacl)
- [UpdateCluster](AwsMemorydbActions.md#updatecluster)
- [UpdateParameterGroup](AwsMemorydbActions.md#updateparametergroup)
- [UpdateSubnetGroup](AwsMemorydbActions.md#updatesubnetgroup)
- [UpdateUser](AwsMemorydbActions.md#updateuser)

## Enumeration Members

### BatchUpdateCluster

• **BatchUpdateCluster** = ``"memorydb:BatchUpdateCluster"``

Grants permissions to apply service updates

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_BatchUpdateCluster.html

#### Defined in

actions/memorydb.ts:17

___

### Connect

• **Connect** = ``"memorydb:Connect"``

Allows an IAM user or role to connect as a specified MemoryDB user to a node in
a cluster

See https://docs.aws.amazon.com/memorydb/latest/devguide/auth-iam.html

#### Defined in

actions/memorydb.ts:24

___

### CopySnapshot

• **CopySnapshot** = ``"memorydb:CopySnapshot"``

Grants permissions to make a copy of an existing snapshot

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CopySnapshot.html

#### Defined in

actions/memorydb.ts:30

___

### CreateAcl

• **CreateAcl** = ``"memorydb:CreateAcl"``

Grants permissions to create a new access control list

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateAcl.html

#### Defined in

actions/memorydb.ts:36

___

### CreateCluster

• **CreateCluster** = ``"memorydb:CreateCluster"``

Grants permissions to create a cluster

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateCluster.html

#### Defined in

actions/memorydb.ts:42

___

### CreateParameterGroup

• **CreateParameterGroup** = ``"memorydb:CreateParameterGroup"``

Grants permissions to create a new parameter group

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateParameterGroup.html

#### Defined in

actions/memorydb.ts:48

___

### CreateSnapshot

• **CreateSnapshot** = ``"memorydb:CreateSnapshot"``

Grants permissions to create a backup of a cluster at the current point in time

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateSnapshot.html

#### Defined in

actions/memorydb.ts:54

___

### CreateSubnetGroup

• **CreateSubnetGroup** = ``"memorydb:CreateSubnetGroup"``

Grants permissions to create a new subnet group

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateSubnetGroup.html

#### Defined in

actions/memorydb.ts:60

___

### CreateUser

• **CreateUser** = ``"memorydb:CreateUser"``

Grants permissions to create a new user

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateUser.html

#### Defined in

actions/memorydb.ts:66

___

### DeleteAcl

• **DeleteAcl** = ``"memorydb:DeleteAcl"``

Grants permissions to delete an access control list

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteAcl.html

#### Defined in

actions/memorydb.ts:72

___

### DeleteCluster

• **DeleteCluster** = ``"memorydb:DeleteCluster"``

Grants permissions to delete a previously provisioned cluster

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteCluster.html

#### Defined in

actions/memorydb.ts:78

___

### DeleteParameterGroup

• **DeleteParameterGroup** = ``"memorydb:DeleteParameterGroup"``

Grants permissions to delete a parameter group

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteParameterGroup.html

#### Defined in

actions/memorydb.ts:84

___

### DeleteSnapshot

• **DeleteSnapshot** = ``"memorydb:DeleteSnapshot"``

Grants permissions to delete a snapshot

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteSnapshot.html

#### Defined in

actions/memorydb.ts:90

___

### DeleteSubnetGroup

• **DeleteSubnetGroup** = ``"memorydb:DeleteSubnetGroup"``

Grants permissions to delete a subnet group

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteSubnetGroup.html

#### Defined in

actions/memorydb.ts:96

___

### DeleteUser

• **DeleteUser** = ``"memorydb:DeleteUser"``

Grants permissions to delete a user

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteUser.html

#### Defined in

actions/memorydb.ts:102

___

### DescribeAcls

• **DescribeAcls** = ``"memorydb:DescribeAcls"``

Grants permissions to retrieve information about access control lists

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeAcls.html

#### Defined in

actions/memorydb.ts:108

___

### DescribeClusters

• **DescribeClusters** = ``"memorydb:DescribeClusters"``

Grants permissions to retrieve information about all provisioned clusters if no
cluster identifier is specified, or about a specific cluster if a cluster ident
ifier is supplied

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeClusters.html

#### Defined in

actions/memorydb.ts:116

___

### DescribeEngineVersions

• **DescribeEngineVersions** = ``"memorydb:DescribeEngineVersions"``

Grants permissions to list of the available engines and their versions

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeEngineVersions.html

#### Defined in

actions/memorydb.ts:122

___

### DescribeEvents

• **DescribeEvents** = ``"memorydb:DescribeEvents"``

Grants permissions to retrieve events related to clusters, subnet groups, and p
arameter groups

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeEvents.html

#### Defined in

actions/memorydb.ts:129

___

### DescribeParameterGroups

• **DescribeParameterGroups** = ``"memorydb:DescribeParameterGroups"``

Grants permissions to retrieve information about parameter groups

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeParameterGroups.html

#### Defined in

actions/memorydb.ts:135

___

### DescribeParameters

• **DescribeParameters** = ``"memorydb:DescribeParameters"``

Grants permissions to retrieve a detailed parameter list for a particular param
eter group

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeParameters.html

#### Defined in

actions/memorydb.ts:142

___

### DescribeReservedNodes

• **DescribeReservedNodes** = ``"memorydb:DescribeReservedNodes"``

Grants permissions to retrieve reserved nodes

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeReservedNodes.html

#### Defined in

actions/memorydb.ts:148

___

### DescribeReservedNodesOfferings

• **DescribeReservedNodesOfferings** = ``"memorydb:DescribeReservedNodesOfferings"``

Grants permissions to retrieve reserved nodes offerings

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeReservedNodesOfferings.html

#### Defined in

actions/memorydb.ts:154

___

### DescribeServiceUpdates

• **DescribeServiceUpdates** = ``"memorydb:DescribeServiceUpdates"``

Grants permissions to retrieve details of the service updates

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeServiceUpdates.html

#### Defined in

actions/memorydb.ts:160

___

### DescribeSnapshots

• **DescribeSnapshots** = ``"memorydb:DescribeSnapshots"``

Grants permissions to retrieve information about cluster snapshots

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeSnapshots.html

#### Defined in

actions/memorydb.ts:166

___

### DescribeSubnetGroups

• **DescribeSubnetGroups** = ``"memorydb:DescribeSubnetGroups"``

Grants permissions to retrieve a list of subnet group

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeSubnetGroups.html

#### Defined in

actions/memorydb.ts:172

___

### DescribeUsers

• **DescribeUsers** = ``"memorydb:DescribeUsers"``

Grants permissions to retrieve information about users

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeUsers.html

#### Defined in

actions/memorydb.ts:178

___

### FailoverShard

• **FailoverShard** = ``"memorydb:FailoverShard"``

Grants permissions to test automatic failover on a specified shard in a cluster

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_FailoverShard.html

#### Defined in

actions/memorydb.ts:184

___

### ListAllowedNodeTypeUpdates

• **ListAllowedNodeTypeUpdates** = ``"memorydb:ListAllowedNodeTypeUpdates"``

Grants permissions to list available node type updates

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_ListAllowedNodeTypeUpdates.html

#### Defined in

actions/memorydb.ts:190

___

### ListTags

• **ListTags** = ``"memorydb:ListTags"``

Grants permissions to list cost allocation tags

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_ListTags.html

#### Defined in

actions/memorydb.ts:196

___

### PurchaseReservedNodesOffering

• **PurchaseReservedNodesOffering** = ``"memorydb:PurchaseReservedNodesOffering"``

Grants permissions to purchase a new reserved node

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_PurchaseReservedNodesOffering.html

#### Defined in

actions/memorydb.ts:202

___

### ResetParameterGroup

• **ResetParameterGroup** = ``"memorydb:ResetParameterGroup"``

Grants permissions to modify the parameters of a parameter group to the engine
or system default value

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_ResetParameterGroup.html

#### Defined in

actions/memorydb.ts:209

___

### TagResource

• **TagResource** = ``"memorydb:TagResource"``

Grants permissions to add up to 10 cost allocation tags to the named resource

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_TagResource.html

#### Defined in

actions/memorydb.ts:215

___

### UntagResource

• **UntagResource** = ``"memorydb:UntagResource"``

Grants permissions to remove the tags identified by the TagKeys list from a res
ource

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UntagResource.html

#### Defined in

actions/memorydb.ts:222

___

### UpdateAcl

• **UpdateAcl** = ``"memorydb:UpdateAcl"``

Grants permissions to update an access control list

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateAcl.html

#### Defined in

actions/memorydb.ts:228

___

### UpdateCluster

• **UpdateCluster** = ``"memorydb:UpdateCluster"``

Grants permissions to update the settings for a cluster

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateCluster.html

#### Defined in

actions/memorydb.ts:234

___

### UpdateParameterGroup

• **UpdateParameterGroup** = ``"memorydb:UpdateParameterGroup"``

Grants permissions to update parameters in a parameter group

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateParameterGroup.html

#### Defined in

actions/memorydb.ts:240

___

### UpdateSubnetGroup

• **UpdateSubnetGroup** = ``"memorydb:UpdateSubnetGroup"``

Grants permissions to update a subnet group

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateSubnetGroup.html

#### Defined in

actions/memorydb.ts:246

___

### UpdateUser

• **UpdateUser** = ``"memorydb:UpdateUser"``

Grants permissions to update a user

See https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateUser.html

#### Defined in

actions/memorydb.ts:252
