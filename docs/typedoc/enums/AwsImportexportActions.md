[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsImportexportActions

# Enumeration: AwsImportexportActions

All IAM policy actions for AWS Import Export Disk Service (IMPORTEXPORT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsimportexportdiskservice.html

2024-02-12T09:57:42.442Z

## Table of contents

### Enumeration Members

- [CancelJob](AwsImportexportActions.md#canceljob)
- [CreateJob](AwsImportexportActions.md#createjob)
- [GetShippingLabel](AwsImportexportActions.md#getshippinglabel)
- [GetStatus](AwsImportexportActions.md#getstatus)
- [ListJobs](AwsImportexportActions.md#listjobs)
- [UpdateJob](AwsImportexportActions.md#updatejob)

## Enumeration Members

### CancelJob

• **CancelJob** = ``"importexport:CancelJob"``

This action cancels a specified job. Only the job owner can cancel it. The acti
on fails if the job has already started or is complete.

See https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebCancelJob.html

#### Defined in

actions/importexport.ts:18

___

### CreateJob

• **CreateJob** = ``"importexport:CreateJob"``

This action initiates the process of scheduling an upload or download of your d
ata.

See https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebCreateJob.html

#### Defined in

actions/importexport.ts:25

___

### GetShippingLabel

• **GetShippingLabel** = ``"importexport:GetShippingLabel"``

This action generates a pre-paid shipping label that you will use to ship your
device to AWS for processing.

See https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebGetShippingLabel.html

#### Defined in

actions/importexport.ts:32

___

### GetStatus

• **GetStatus** = ``"importexport:GetStatus"``

This action returns information about a job, including where the job is in the
processing pipeline, the status of the results, and the signature value associa
ted with the job.

See https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebGetStatus.html

#### Defined in

actions/importexport.ts:40

___

### ListJobs

• **ListJobs** = ``"importexport:ListJobs"``

This action returns the jobs associated with the requester.

See https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebListJobs.html

#### Defined in

actions/importexport.ts:46

___

### UpdateJob

• **UpdateJob** = ``"importexport:UpdateJob"``

You use this action to change the parameters specified in the original manifest
file by supplying a new manifest file.

See https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebUpdateJob.html

#### Defined in

actions/importexport.ts:53
