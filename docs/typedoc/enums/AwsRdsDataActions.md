[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRdsDataActions

# Enumeration: AwsRdsDataActions

All IAM policy actions for Amazon RDS Data API (RDS-DATA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrdsdataapi.html

2024-02-12T09:58:49.244Z

## Table of contents

### Enumeration Members

- [BatchExecuteStatement](AwsRdsDataActions.md#batchexecutestatement)
- [BeginTransaction](AwsRdsDataActions.md#begintransaction)
- [CommitTransaction](AwsRdsDataActions.md#committransaction)
- [ExecuteSql](AwsRdsDataActions.md#executesql)
- [ExecuteStatement](AwsRdsDataActions.md#executestatement)
- [RollbackTransaction](AwsRdsDataActions.md#rollbacktransaction)

## Enumeration Members

### BatchExecuteStatement

• **BatchExecuteStatement** = ``"rds-data:BatchExecuteStatement"``

Grants permission to run a batch SQL statement over an array of data

See https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BatchExecuteStatement.html

#### Defined in

actions/rds-data.ts:17

___

### BeginTransaction

• **BeginTransaction** = ``"rds-data:BeginTransaction"``

Grants permission to start a SQL transaction

See https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html

#### Defined in

actions/rds-data.ts:23

___

### CommitTransaction

• **CommitTransaction** = ``"rds-data:CommitTransaction"``

Grants permission to end a SQL transaction started with the BeginTransaction op
eration and commits the changes

See https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html

#### Defined in

actions/rds-data.ts:30

___

### ExecuteSql

• **ExecuteSql** = ``"rds-data:ExecuteSql"``

Grants permission to run one or more SQL statements. This operation is deprecat
ed. Use the BatchExecuteStatement or ExecuteStatement operation

See https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteSql.html

#### Defined in

actions/rds-data.ts:37

___

### ExecuteStatement

• **ExecuteStatement** = ``"rds-data:ExecuteStatement"``

Grants permission to run a SQL statement against a database

See https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteStatement.html

#### Defined in

actions/rds-data.ts:43

___

### RollbackTransaction

• **RollbackTransaction** = ``"rds-data:RollbackTransaction"``

Grants permission to perform a rollback of a transaction. Rolling back a transa
ction cancels its changes

See https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html

#### Defined in

actions/rds-data.ts:50
