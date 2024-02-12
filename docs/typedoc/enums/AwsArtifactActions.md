[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsArtifactActions

# Enumeration: AwsArtifactActions

All IAM policy actions for AWS Artifact (ARTIFACT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsartifact.html

2024-02-12T09:56:06.450Z

## Table of contents

### Enumeration Members

- [AcceptAgreement](AwsArtifactActions.md#acceptagreement)
- [DownloadAgreement](AwsArtifactActions.md#downloadagreement)
- [Get](AwsArtifactActions.md#get)
- [GetAccountSettings](AwsArtifactActions.md#getaccountsettings)
- [GetReport](AwsArtifactActions.md#getreport)
- [GetReportMetadata](AwsArtifactActions.md#getreportmetadata)
- [GetTermForReport](AwsArtifactActions.md#gettermforreport)
- [ListReports](AwsArtifactActions.md#listreports)
- [PutAccountSettings](AwsArtifactActions.md#putaccountsettings)
- [TerminateAgreement](AwsArtifactActions.md#terminateagreement)

## Enumeration Members

### AcceptAgreement

• **AcceptAgreement** = ``"artifact:AcceptAgreement"``

Grants permission to accept an AWS agreement that has not yet been accepted by
the customer account

See https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html

#### Defined in

actions/artifact.ts:18

___

### DownloadAgreement

• **DownloadAgreement** = ``"artifact:DownloadAgreement"``

Grants permission to download an AWS agreement that has not yet been accepted o
r a customer agreement that has been accepted by the customer account

See https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html

#### Defined in

actions/artifact.ts:25

___

### Get

• **Get** = ``"artifact:Get"``

Grants permission to download an AWS compliance report package

See https://docs.aws.amazon.com/artifact/latest/ug/getting-started.html

#### Defined in

actions/artifact.ts:31

___

### GetAccountSettings

• **GetAccountSettings** = ``"artifact:GetAccountSettings"``

Grants permission to get the account settings for Artifact

See https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetAccountSettings.html

#### Defined in

actions/artifact.ts:37

___

### GetReport

• **GetReport** = ``"artifact:GetReport"``

Grants permission to download a report

See https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetReport.html

#### Defined in

actions/artifact.ts:43

___

### GetReportMetadata

• **GetReportMetadata** = ``"artifact:GetReportMetadata"``

Grants permission to download metadata associated with a report

See https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetReportMetadata.html

#### Defined in

actions/artifact.ts:49

___

### GetTermForReport

• **GetTermForReport** = ``"artifact:GetTermForReport"``

Grants permission to download a term associated with a report

See https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetTermForReport.html

#### Defined in

actions/artifact.ts:55

___

### ListReports

• **ListReports** = ``"artifact:ListReports"``

Grants permission to list reports in your account

See https://docs.aws.amazon.com/artifact/latest/APIReference/API_ListReports.html

#### Defined in

actions/artifact.ts:61

___

### PutAccountSettings

• **PutAccountSettings** = ``"artifact:PutAccountSettings"``

Grants permission to put account settings for Artifact

See https://docs.aws.amazon.com/artifact/latest/APIReference/API_PutAccountSettings.html

#### Defined in

actions/artifact.ts:67

___

### TerminateAgreement

• **TerminateAgreement** = ``"artifact:TerminateAgreement"``

Grants permission to terminate a customer agreement that was previously accepte
d by the customer account

See https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html

#### Defined in

actions/artifact.ts:74
