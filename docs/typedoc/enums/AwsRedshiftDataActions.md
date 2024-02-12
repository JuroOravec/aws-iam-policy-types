[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRedshiftDataActions

# Enumeration: AwsRedshiftDataActions

All IAM policy actions for Amazon Redshift Data API (REDSHIFT-DATA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshiftdataapi.html

2024-02-12T09:58:52.173Z

## Table of contents

### Enumeration Members

- [BatchExecuteStatement](AwsRedshiftDataActions.md#batchexecutestatement)
- [CancelStatement](AwsRedshiftDataActions.md#cancelstatement)
- [DescribeStatement](AwsRedshiftDataActions.md#describestatement)
- [DescribeTable](AwsRedshiftDataActions.md#describetable)
- [ExecuteStatement](AwsRedshiftDataActions.md#executestatement)
- [GetStatementResult](AwsRedshiftDataActions.md#getstatementresult)
- [ListDatabases](AwsRedshiftDataActions.md#listdatabases)
- [ListSchemas](AwsRedshiftDataActions.md#listschemas)
- [ListStatements](AwsRedshiftDataActions.md#liststatements)
- [ListTables](AwsRedshiftDataActions.md#listtables)

## Enumeration Members

### BatchExecuteStatement

• **BatchExecuteStatement** = ``"redshift-data:BatchExecuteStatement"``

Grants permission to execute multiple queries under a single connection

See https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_BatchExecuteStatement.html

#### Defined in

actions/redshift-data.ts:17

___

### CancelStatement

• **CancelStatement** = ``"redshift-data:CancelStatement"``

Grants permission to cancel a running query

See https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_CancelStatement.html

#### Defined in

actions/redshift-data.ts:23

___

### DescribeStatement

• **DescribeStatement** = ``"redshift-data:DescribeStatement"``

Grants permission to retrieve detailed information about a statement execution

See https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_DescribeStatement.html

#### Defined in

actions/redshift-data.ts:29

___

### DescribeTable

• **DescribeTable** = ``"redshift-data:DescribeTable"``

Grants permission to retrieve metadata about a particular table

See https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_DescribeTable.html

#### Defined in

actions/redshift-data.ts:35

___

### ExecuteStatement

• **ExecuteStatement** = ``"redshift-data:ExecuteStatement"``

Grants permission to execute a query

See https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ExecuteStatement.html

#### Defined in

actions/redshift-data.ts:41

___

### GetStatementResult

• **GetStatementResult** = ``"redshift-data:GetStatementResult"``

Grants permission to fetch the result of a query

See https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_GetStatementResult.html

#### Defined in

actions/redshift-data.ts:47

___

### ListDatabases

• **ListDatabases** = ``"redshift-data:ListDatabases"``

Grants permission to list databases for a given cluster

See https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListDatabases.html

#### Defined in

actions/redshift-data.ts:53

___

### ListSchemas

• **ListSchemas** = ``"redshift-data:ListSchemas"``

Grants permission to list schemas for a given cluster

See https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListSchemas.html

#### Defined in

actions/redshift-data.ts:59

___

### ListStatements

• **ListStatements** = ``"redshift-data:ListStatements"``

Grants permission to list queries for a given principal

See https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListStatements.html

#### Defined in

actions/redshift-data.ts:65

___

### ListTables

• **ListTables** = ``"redshift-data:ListTables"``

Grants permission to list tables for a given cluster

See https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListTables.html

#### Defined in

actions/redshift-data.ts:71
