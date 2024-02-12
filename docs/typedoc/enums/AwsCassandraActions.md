[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCassandraActions

# Enumeration: AwsCassandraActions

All IAM policy actions for Amazon Keyspaces (for Apache Cassandra) (CASSANDRA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkeyspacesforapachecassandra.html

2024-02-12T09:57:57.953Z

## Table of contents

### Enumeration Members

- [Alter](AwsCassandraActions.md#alter)
- [AlterMultiRegionResource](AwsCassandraActions.md#altermultiregionresource)
- [Create](AwsCassandraActions.md#create)
- [CreateMultiRegionResource](AwsCassandraActions.md#createmultiregionresource)
- [Drop](AwsCassandraActions.md#drop)
- [DropMultiRegionResource](AwsCassandraActions.md#dropmultiregionresource)
- [Modify](AwsCassandraActions.md#modify)
- [ModifyMultiRegionResource](AwsCassandraActions.md#modifymultiregionresource)
- [Restore](AwsCassandraActions.md#restore)
- [RestoreMultiRegionTable](AwsCassandraActions.md#restoremultiregiontable)
- [Select](AwsCassandraActions.md#select)
- [SelectMultiRegionResource](AwsCassandraActions.md#selectmultiregionresource)
- [TagMultiRegionResource](AwsCassandraActions.md#tagmultiregionresource)
- [TagResource](AwsCassandraActions.md#tagresource)
- [UnTagMultiRegionResource](AwsCassandraActions.md#untagmultiregionresource)
- [UntagResource](AwsCassandraActions.md#untagresource)
- [UpdatePartitioner](AwsCassandraActions.md#updatepartitioner)

## Enumeration Members

### Alter

• **Alter** = ``"cassandra:Alter"``

Grants permission to alter a keyspace or table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:17

___

### AlterMultiRegionResource

• **AlterMultiRegionResource** = ``"cassandra:AlterMultiRegionResource"``

Grants permission to alter a multiregion keyspace or table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:23

___

### Create

• **Create** = ``"cassandra:Create"``

Grants permission to create a keyspace or table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:29

___

### CreateMultiRegionResource

• **CreateMultiRegionResource** = ``"cassandra:CreateMultiRegionResource"``

Grants permission to create a multiregion keyspace or table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:35

___

### Drop

• **Drop** = ``"cassandra:Drop"``

Grants permission to drop a keyspace or table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:41

___

### DropMultiRegionResource

• **DropMultiRegionResource** = ``"cassandra:DropMultiRegionResource"``

Grants permission to drop a multiregion keyspace or table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:47

___

### Modify

• **Modify** = ``"cassandra:Modify"``

Grants permission to INSERT, UPDATE or DELETE data in a table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:53

___

### ModifyMultiRegionResource

• **ModifyMultiRegionResource** = ``"cassandra:ModifyMultiRegionResource"``

Grants permission to INSERT, UPDATE or DELETE data in a multiregion table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:59

___

### Restore

• **Restore** = ``"cassandra:Restore"``

Grants permission to restore table from a backup

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:65

___

### RestoreMultiRegionTable

• **RestoreMultiRegionTable** = ``"cassandra:RestoreMultiRegionTable"``

Grants permission to restore multiregion table from a backup

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:71

___

### Select

• **Select** = ``"cassandra:Select"``

Grants permission to SELECT data from a table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:77

___

### SelectMultiRegionResource

• **SelectMultiRegionResource** = ``"cassandra:SelectMultiRegionResource"``

Grants permission to SELECT data from a multiregion table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:83

___

### TagMultiRegionResource

• **TagMultiRegionResource** = ``"cassandra:TagMultiRegionResource"``

Grants permission to tag a multiregion keyspace or table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:89

___

### TagResource

• **TagResource** = ``"cassandra:TagResource"``

Grants permission to tag a keyspace or table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:95

___

### UnTagMultiRegionResource

• **UnTagMultiRegionResource** = ``"cassandra:UnTagMultiRegionResource"``

Grants permission to untag a multiregion keyspace or table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:101

___

### UntagResource

• **UntagResource** = ``"cassandra:UntagResource"``

Grants permission to untag a keyspace or table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:107

___

### UpdatePartitioner

• **UpdatePartitioner** = ``"cassandra:UpdatePartitioner"``

Grants permission to UPDATE the partitioner in a system table

See https://docs.aws.amazon.com/keyspaces/latest/devguide/

#### Defined in

actions/cassandra.ts:113
