[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDbqmsActions

# Enumeration: AwsDbqmsActions

All IAM policy actions for Database Query Metadata Service (DBQMS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_databasequerymetadataservice.html

2024-02-12T09:56:53.479Z

## Table of contents

### Enumeration Members

- [CreateFavoriteQuery](AwsDbqmsActions.md#createfavoritequery)
- [CreateTab](AwsDbqmsActions.md#createtab)
- [DeleteFavoriteQueries](AwsDbqmsActions.md#deletefavoritequeries)
- [DeleteQueryHistory](AwsDbqmsActions.md#deletequeryhistory)
- [DeleteTab](AwsDbqmsActions.md#deletetab)
- [DescribeFavoriteQueries](AwsDbqmsActions.md#describefavoritequeries)
- [DescribeQueryHistory](AwsDbqmsActions.md#describequeryhistory)
- [DescribeTabs](AwsDbqmsActions.md#describetabs)
- [GetQueryString](AwsDbqmsActions.md#getquerystring)
- [UpdateFavoriteQuery](AwsDbqmsActions.md#updatefavoritequery)
- [UpdateQueryHistory](AwsDbqmsActions.md#updatequeryhistory)
- [UpdateTab](AwsDbqmsActions.md#updatetab)

## Enumeration Members

### CreateFavoriteQuery

• **CreateFavoriteQuery** = ``"dbqms:CreateFavoriteQuery"``

Grants permission to create a new favorite query

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateFavoriteQuery

#### Defined in

actions/dbqms.ts:17

___

### CreateTab

• **CreateTab** = ``"dbqms:CreateTab"``

Grants permission to create a new query tab

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateTab

#### Defined in

actions/dbqms.ts:23

___

### DeleteFavoriteQueries

• **DeleteFavoriteQueries** = ``"dbqms:DeleteFavoriteQueries"``

Grants permission to delete saved queries

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteFavoriteQueries

#### Defined in

actions/dbqms.ts:29

___

### DeleteQueryHistory

• **DeleteQueryHistory** = ``"dbqms:DeleteQueryHistory"``

Grants permission to delete a historical query

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteQueryHistory

#### Defined in

actions/dbqms.ts:35

___

### DeleteTab

• **DeleteTab** = ``"dbqms:DeleteTab"``

Grants permission to delete query tab

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteTab

#### Defined in

actions/dbqms.ts:41

___

### DescribeFavoriteQueries

• **DescribeFavoriteQueries** = ``"dbqms:DescribeFavoriteQueries"``

Grants permission to list saved queries and associated metadata

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeFavoriteQueries

#### Defined in

actions/dbqms.ts:47

___

### DescribeQueryHistory

• **DescribeQueryHistory** = ``"dbqms:DescribeQueryHistory"``

Grants permission to list history of queries that were run

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeQueryHistory

#### Defined in

actions/dbqms.ts:53

___

### DescribeTabs

• **DescribeTabs** = ``"dbqms:DescribeTabs"``

Grants permission to list query tabs and associated metadata

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeTabs

#### Defined in

actions/dbqms.ts:59

___

### GetQueryString

• **GetQueryString** = ``"dbqms:GetQueryString"``

Grants permission to retrieve favorite or history query string by id

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#GetQueryString

#### Defined in

actions/dbqms.ts:65

___

### UpdateFavoriteQuery

• **UpdateFavoriteQuery** = ``"dbqms:UpdateFavoriteQuery"``

Grants permission to update saved query and description

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateFavoriteQuery

#### Defined in

actions/dbqms.ts:71

___

### UpdateQueryHistory

• **UpdateQueryHistory** = ``"dbqms:UpdateQueryHistory"``

Grants permission to update the query history

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateQueryHistory

#### Defined in

actions/dbqms.ts:77

___

### UpdateTab

• **UpdateTab** = ``"dbqms:UpdateTab"``

Grants permission to update query tab

See https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateTab

#### Defined in

actions/dbqms.ts:83
