[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsQldbActions

# Enumeration: AwsQldbActions

All IAM policy actions for Amazon QLDB (QLDB)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqldb.html

2024-02-12T09:58:47.289Z

## Table of contents

### Enumeration Members

- [CancelJournalKinesisStream](AwsQldbActions.md#canceljournalkinesisstream)
- [CreateLedger](AwsQldbActions.md#createledger)
- [DeleteLedger](AwsQldbActions.md#deleteledger)
- [DescribeJournalKinesisStream](AwsQldbActions.md#describejournalkinesisstream)
- [DescribeJournalS3Export](AwsQldbActions.md#describejournals3export)
- [DescribeLedger](AwsQldbActions.md#describeledger)
- [ExecuteStatement](AwsQldbActions.md#executestatement)
- [ExportJournalToS3](AwsQldbActions.md#exportjournaltos3)
- [GetBlock](AwsQldbActions.md#getblock)
- [GetDigest](AwsQldbActions.md#getdigest)
- [GetRevision](AwsQldbActions.md#getrevision)
- [InsertSampleData](AwsQldbActions.md#insertsampledata)
- [ListJournalKinesisStreamsForLedger](AwsQldbActions.md#listjournalkinesisstreamsforledger)
- [ListJournalS3Exports](AwsQldbActions.md#listjournals3exports)
- [ListJournalS3ExportsForLedger](AwsQldbActions.md#listjournals3exportsforledger)
- [ListLedgers](AwsQldbActions.md#listledgers)
- [ListTagsForResource](AwsQldbActions.md#listtagsforresource)
- [PartiQLCreateIndex](AwsQldbActions.md#partiqlcreateindex)
- [PartiQLCreateTable](AwsQldbActions.md#partiqlcreatetable)
- [PartiQLDelete](AwsQldbActions.md#partiqldelete)
- [PartiQLDropIndex](AwsQldbActions.md#partiqldropindex)
- [PartiQLDropTable](AwsQldbActions.md#partiqldroptable)
- [PartiQLHistoryFunction](AwsQldbActions.md#partiqlhistoryfunction)
- [PartiQLInsert](AwsQldbActions.md#partiqlinsert)
- [PartiQLRedact](AwsQldbActions.md#partiqlredact)
- [PartiQLSelect](AwsQldbActions.md#partiqlselect)
- [PartiQLUndropTable](AwsQldbActions.md#partiqlundroptable)
- [PartiQLUpdate](AwsQldbActions.md#partiqlupdate)
- [SendCommand](AwsQldbActions.md#sendcommand)
- [ShowCatalog](AwsQldbActions.md#showcatalog)
- [StreamJournalToKinesis](AwsQldbActions.md#streamjournaltokinesis)
- [TagResource](AwsQldbActions.md#tagresource)
- [UntagResource](AwsQldbActions.md#untagresource)
- [UpdateLedger](AwsQldbActions.md#updateledger)
- [UpdateLedgerPermissionsMode](AwsQldbActions.md#updateledgerpermissionsmode)

## Enumeration Members

### CancelJournalKinesisStream

• **CancelJournalKinesisStream** = ``"qldb:CancelJournalKinesisStream"``

Grants permission to cancel a journal kinesis stream

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_CancelJournalKinesisStream.html

#### Defined in

actions/qldb.ts:17

___

### CreateLedger

• **CreateLedger** = ``"qldb:CreateLedger"``

Grants permission to create a ledger

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_CreateLedger.html

#### Defined in

actions/qldb.ts:23

___

### DeleteLedger

• **DeleteLedger** = ``"qldb:DeleteLedger"``

Grants permission to delete a ledger

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_DeleteLedger.html

#### Defined in

actions/qldb.ts:29

___

### DescribeJournalKinesisStream

• **DescribeJournalKinesisStream** = ``"qldb:DescribeJournalKinesisStream"``

Grants permission to describe information about a journal kinesis stream

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalKinesisStream.html

#### Defined in

actions/qldb.ts:35

___

### DescribeJournalS3Export

• **DescribeJournalS3Export** = ``"qldb:DescribeJournalS3Export"``

Grants permission to describe information about a journal export job

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalS3Export.html

#### Defined in

actions/qldb.ts:41

___

### DescribeLedger

• **DescribeLedger** = ``"qldb:DescribeLedger"``

Grants permission to describe a ledger

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeLedger.html

#### Defined in

actions/qldb.ts:47

___

### ExecuteStatement

• **ExecuteStatement** = ``"qldb:ExecuteStatement"``

Grants permission to send commands to a ledger via the console

See https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html

#### Defined in

actions/qldb.ts:53

___

### ExportJournalToS3

• **ExportJournalToS3** = ``"qldb:ExportJournalToS3"``

Grants permission to export journal contents to an Amazon S3 bucket

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ExportJournalToS3.html

#### Defined in

actions/qldb.ts:59

___

### GetBlock

• **GetBlock** = ``"qldb:GetBlock"``

Grants permission to retrieve a block from a ledger for a given BlockAddress

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetBlock.html

#### Defined in

actions/qldb.ts:65

___

### GetDigest

• **GetDigest** = ``"qldb:GetDigest"``

Grants permission to retrieve a digest from a ledger for a given BlockAddress

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetDigest.html

#### Defined in

actions/qldb.ts:71

___

### GetRevision

• **GetRevision** = ``"qldb:GetRevision"``

Grants permission to retrieve a revision for a given document ID and a given Bl
ockAddress

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetRevision.html

#### Defined in

actions/qldb.ts:78

___

### InsertSampleData

• **InsertSampleData** = ``"qldb:InsertSampleData"``

Grants permission to insert sample application data via the console

See https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html

#### Defined in

actions/qldb.ts:84

___

### ListJournalKinesisStreamsForLedger

• **ListJournalKinesisStreamsForLedger** = ``"qldb:ListJournalKinesisStreamsForLedger"``

Grants permission to list journal kinesis streams for a specified ledger

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalKinesisStreamsForLedger.html

#### Defined in

actions/qldb.ts:90

___

### ListJournalS3Exports

• **ListJournalS3Exports** = ``"qldb:ListJournalS3Exports"``

Grants permission to list journal export jobs for all ledgers

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3Exports.html

#### Defined in

actions/qldb.ts:96

___

### ListJournalS3ExportsForLedger

• **ListJournalS3ExportsForLedger** = ``"qldb:ListJournalS3ExportsForLedger"``

Grants permission to list journal export jobs for a specified ledger

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3ExportsForLedger.html

#### Defined in

actions/qldb.ts:102

___

### ListLedgers

• **ListLedgers** = ``"qldb:ListLedgers"``

Grants permission to list existing ledgers

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListLedgers.html

#### Defined in

actions/qldb.ts:108

___

### ListTagsForResource

• **ListTagsForResource** = ``"qldb:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListTagsForResource.html

#### Defined in

actions/qldb.ts:114

___

### PartiQLCreateIndex

• **PartiQLCreateIndex** = ``"qldb:PartiQLCreateIndex"``

Grants permission to create an index on a table

See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.create-index.html

#### Defined in

actions/qldb.ts:120

___

### PartiQLCreateTable

• **PartiQLCreateTable** = ``"qldb:PartiQLCreateTable"``

Grants permission to create a table

See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.create-table.html

#### Defined in

actions/qldb.ts:126

___

### PartiQLDelete

• **PartiQLDelete** = ``"qldb:PartiQLDelete"``

Grants permission to delete documents from a table

See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.delete.html

#### Defined in

actions/qldb.ts:132

___

### PartiQLDropIndex

• **PartiQLDropIndex** = ``"qldb:PartiQLDropIndex"``

Grants permission to drop an index from a table

See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.drop-index.html

#### Defined in

actions/qldb.ts:138

___

### PartiQLDropTable

• **PartiQLDropTable** = ``"qldb:PartiQLDropTable"``

Grants permission to drop a table

See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.drop-table.html

#### Defined in

actions/qldb.ts:144

___

### PartiQLHistoryFunction

• **PartiQLHistoryFunction** = ``"qldb:PartiQLHistoryFunction"``

Grants permission to use the history function on a table

See https://docs.aws.amazon.com/qldb/latest/developerguide/working.history.html

#### Defined in

actions/qldb.ts:150

___

### PartiQLInsert

• **PartiQLInsert** = ``"qldb:PartiQLInsert"``

Grants permission to insert documents into a table

See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.insert.html

#### Defined in

actions/qldb.ts:156

___

### PartiQLRedact

• **PartiQLRedact** = ``"qldb:PartiQLRedact"``

Grants permission to redact historic revisions

See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-stored-procedures.redact_revision.html

#### Defined in

actions/qldb.ts:162

___

### PartiQLSelect

• **PartiQLSelect** = ``"qldb:PartiQLSelect"``

Grants permission to select documents from a table

See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.select.html

#### Defined in

actions/qldb.ts:168

___

### PartiQLUndropTable

• **PartiQLUndropTable** = ``"qldb:PartiQLUndropTable"``

Grants permission to undrop a table

See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.undrop-table.html

#### Defined in

actions/qldb.ts:174

___

### PartiQLUpdate

• **PartiQLUpdate** = ``"qldb:PartiQLUpdate"``

Grants permission to update existing documents in a table

See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.update.html

#### Defined in

actions/qldb.ts:180

___

### SendCommand

• **SendCommand** = ``"qldb:SendCommand"``

Grants permission to send commands to a ledger

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_QLDB-Session_SendCommand.html

#### Defined in

actions/qldb.ts:186

___

### ShowCatalog

• **ShowCatalog** = ``"qldb:ShowCatalog"``

Grants permission to view a ledger's catalog via the console

See https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html

#### Defined in

actions/qldb.ts:192

___

### StreamJournalToKinesis

• **StreamJournalToKinesis** = ``"qldb:StreamJournalToKinesis"``

Grants permission to stream journal contents to a Kinesis Data Stream

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_StreamJournalToKinesis.html

#### Defined in

actions/qldb.ts:198

___

### TagResource

• **TagResource** = ``"qldb:TagResource"``

Grants permission to add one or more tags to a resource

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_TagResource.html

#### Defined in

actions/qldb.ts:204

___

### UntagResource

• **UntagResource** = ``"qldb:UntagResource"``

Grants permission to remove one or more tags from a resource

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_UntagResource.html

#### Defined in

actions/qldb.ts:210

___

### UpdateLedger

• **UpdateLedger** = ``"qldb:UpdateLedger"``

Grants permission to update properties on a ledger

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedger.html

#### Defined in

actions/qldb.ts:216

___

### UpdateLedgerPermissionsMode

• **UpdateLedgerPermissionsMode** = ``"qldb:UpdateLedgerPermissionsMode"``

Grants permission to update the permissions mode on a ledger

See https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedgerPermissionsMode.html

#### Defined in

actions/qldb.ts:222
