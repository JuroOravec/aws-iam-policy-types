[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsGroundtruthlabelingActions

# Enumeration: AwsGroundtruthlabelingActions

All IAM policy actions for Amazon GroundTruth Labeling (GROUNDTRUTHLABELING)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongroundtruthlabeling.html

2024-02-12T09:57:32.908Z

## Table of contents

### Enumeration Members

- [AssociatePatchToManifestJob](AwsGroundtruthlabelingActions.md#associatepatchtomanifestjob)
- [DescribeConsoleJob](AwsGroundtruthlabelingActions.md#describeconsolejob)
- [ListDatasetObjects](AwsGroundtruthlabelingActions.md#listdatasetobjects)
- [RunFilterOrSampleDatasetJob](AwsGroundtruthlabelingActions.md#runfilterorsampledatasetjob)
- [RunGenerateManifestByCrawlingJob](AwsGroundtruthlabelingActions.md#rungeneratemanifestbycrawlingjob)

## Enumeration Members

### AssociatePatchToManifestJob

• **AssociatePatchToManifestJob** = ``"groundtruthlabeling:AssociatePatchToManifestJob"``

Grants permission to associate a patch file with the manifest file to update th
e manifest file

See https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file

#### Defined in

actions/groundtruthlabeling.ts:18

___

### DescribeConsoleJob

• **DescribeConsoleJob** = ``"groundtruthlabeling:DescribeConsoleJob"``

Grants permission to get status of GroundTruthLabeling Jobs

See https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file

#### Defined in

actions/groundtruthlabeling.ts:24

___

### ListDatasetObjects

• **ListDatasetObjects** = ``"groundtruthlabeling:ListDatasetObjects"``

Grants permission to list dataset objects in a manifest file

See https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file

#### Defined in

actions/groundtruthlabeling.ts:30

___

### RunFilterOrSampleDatasetJob

• **RunFilterOrSampleDatasetJob** = ``"groundtruthlabeling:RunFilterOrSampleDatasetJob"``

Grants permission to filter records from a manifest file using S3 select. Get s
ample entries based on random sampling

See https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-data-filtering

#### Defined in

actions/groundtruthlabeling.ts:37

___

### RunGenerateManifestByCrawlingJob

• **RunGenerateManifestByCrawlingJob** = ``"groundtruthlabeling:RunGenerateManifestByCrawlingJob"``

Grants permission to list a S3 prefix and create manifest files from objects in
that location

See https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file

#### Defined in

actions/groundtruthlabeling.ts:44
