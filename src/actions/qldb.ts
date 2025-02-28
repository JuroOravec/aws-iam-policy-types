// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon QLDB (QLDB)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqldb.html
 *
 * 2025-02-24T21:49:19.783Z
 */
export enum AwsQldbActions {
  /**
   * Grants permission to cancel a journal kinesis stream
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_CancelJournalKinesisStream.html
   */
  CancelJournalKinesisStream = 'qldb:CancelJournalKinesisStream',
  /**
   * Grants permission to create a ledger
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_CreateLedger.html
   */
  CreateLedger = 'qldb:CreateLedger',
  /**
   * Grants permission to delete a ledger
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_DeleteLedger.html
   */
  DeleteLedger = 'qldb:DeleteLedger',
  /**
   * Grants permission to describe information about a journal kinesis stream
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalKinesisStream.html
   */
  DescribeJournalKinesisStream = 'qldb:DescribeJournalKinesisStream',
  /**
   * Grants permission to describe information about a journal export job
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalS3Export.html
   */
  DescribeJournalS3Export = 'qldb:DescribeJournalS3Export',
  /**
   * Grants permission to describe a ledger
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeLedger.html
   */
  DescribeLedger = 'qldb:DescribeLedger',
  /**
   * Grants permission to send commands to a ledger via the console
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  ExecuteStatement = 'qldb:ExecuteStatement',
  /**
   * Grants permission to export journal contents to an Amazon S3 bucket
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ExportJournalToS3.html
   */
  ExportJournalToS3 = 'qldb:ExportJournalToS3',
  /**
   * Grants permission to retrieve a block from a ledger for a given BlockAddress
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetBlock.html
   */
  GetBlock = 'qldb:GetBlock',
  /**
   * Grants permission to retrieve a digest from a ledger for a given BlockAddress
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetDigest.html
   */
  GetDigest = 'qldb:GetDigest',
  /**
   * Grants permission to retrieve a revision for a given document ID and a given Bl
   * ockAddress
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetRevision.html
   */
  GetRevision = 'qldb:GetRevision',
  /**
   * Grants permission to insert sample application data via the console
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  InsertSampleData = 'qldb:InsertSampleData',
  /**
   * Grants permission to list journal kinesis streams for a specified ledger
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalKinesisStreamsForLedger.html
   */
  ListJournalKinesisStreamsForLedger = 'qldb:ListJournalKinesisStreamsForLedger',
  /**
   * Grants permission to list journal export jobs for all ledgers
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3Exports.html
   */
  ListJournalS3Exports = 'qldb:ListJournalS3Exports',
  /**
   * Grants permission to list journal export jobs for a specified ledger
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3ExportsForLedger.html
   */
  ListJournalS3ExportsForLedger = 'qldb:ListJournalS3ExportsForLedger',
  /**
   * Grants permission to list existing ledgers
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListLedgers.html
   */
  ListLedgers = 'qldb:ListLedgers',
  /**
   * Grants permission to list tags for a resource
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListTagsForResource.html
   */
  ListTagsForResource = 'qldb:ListTagsForResource',
  /**
   * Grants permission to create an index on a table
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.create-index.html
   */
  PartiQLCreateIndex = 'qldb:PartiQLCreateIndex',
  /**
   * Grants permission to create a table
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.create-table.html
   */
  PartiQLCreateTable = 'qldb:PartiQLCreateTable',
  /**
   * Grants permission to delete documents from a table
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.delete.html
   */
  PartiQLDelete = 'qldb:PartiQLDelete',
  /**
   * Grants permission to drop an index from a table
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.drop-index.html
   */
  PartiQLDropIndex = 'qldb:PartiQLDropIndex',
  /**
   * Grants permission to drop a table
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.drop-table.html
   */
  PartiQLDropTable = 'qldb:PartiQLDropTable',
  /**
   * Grants permission to use the history function on a table
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/working.history.html
   */
  PartiQLHistoryFunction = 'qldb:PartiQLHistoryFunction',
  /**
   * Grants permission to insert documents into a table
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.insert.html
   */
  PartiQLInsert = 'qldb:PartiQLInsert',
  /**
   * Grants permission to redact historic revisions
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-stored-procedures.redact_revision.html
   */
  PartiQLRedact = 'qldb:PartiQLRedact',
  /**
   * Grants permission to select documents from a table
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.select.html
   */
  PartiQLSelect = 'qldb:PartiQLSelect',
  /**
   * Grants permission to undrop a table
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.undrop-table.html
   */
  PartiQLUndropTable = 'qldb:PartiQLUndropTable',
  /**
   * Grants permission to update existing documents in a table
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.update.html
   */
  PartiQLUpdate = 'qldb:PartiQLUpdate',
  /**
   * Grants permission to send commands to a ledger
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_QLDB-Session_SendCommand.html
   */
  SendCommand = 'qldb:SendCommand',
  /**
   * Grants permission to view a ledger's catalog via the console
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  ShowCatalog = 'qldb:ShowCatalog',
  /**
   * Grants permission to stream journal contents to a Kinesis Data Stream
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_StreamJournalToKinesis.html
   */
  StreamJournalToKinesis = 'qldb:StreamJournalToKinesis',
  /**
   * Grants permission to add one or more tags to a resource
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_TagResource.html
   */
  TagResource = 'qldb:TagResource',
  /**
   * Grants permission to remove one or more tags from a resource
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_UntagResource.html
   */
  UntagResource = 'qldb:UntagResource',
  /**
   * Grants permission to update properties on a ledger
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedger.html
   */
  UpdateLedger = 'qldb:UpdateLedger',
  /**
   * Grants permission to update the permissions mode on a ledger
   *
   * See https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedgerPermissionsMode.html
   */
  UpdateLedgerPermissionsMode = 'qldb:UpdateLedgerPermissionsMode',
}
