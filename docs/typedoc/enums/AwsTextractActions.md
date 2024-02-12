[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsTextractActions

# Enumeration: AwsTextractActions

All IAM policy actions for Amazon Textract (TEXTRACT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontextract.html

2024-02-12T09:59:30.359Z

## Table of contents

### Enumeration Members

- [AnalyzeDocument](AwsTextractActions.md#analyzedocument)
- [AnalyzeExpense](AwsTextractActions.md#analyzeexpense)
- [AnalyzeID](AwsTextractActions.md#analyzeid)
- [CreateAdapter](AwsTextractActions.md#createadapter)
- [CreateAdapterVersion](AwsTextractActions.md#createadapterversion)
- [DeleteAdapter](AwsTextractActions.md#deleteadapter)
- [DeleteAdapterVersion](AwsTextractActions.md#deleteadapterversion)
- [DetectDocumentText](AwsTextractActions.md#detectdocumenttext)
- [GetAdapter](AwsTextractActions.md#getadapter)
- [GetAdapterVersion](AwsTextractActions.md#getadapterversion)
- [GetDocumentAnalysis](AwsTextractActions.md#getdocumentanalysis)
- [GetDocumentTextDetection](AwsTextractActions.md#getdocumenttextdetection)
- [GetExpenseAnalysis](AwsTextractActions.md#getexpenseanalysis)
- [GetLendingAnalysis](AwsTextractActions.md#getlendinganalysis)
- [GetLendingAnalysisSummary](AwsTextractActions.md#getlendinganalysissummary)
- [ListAdapterVersions](AwsTextractActions.md#listadapterversions)
- [ListAdapters](AwsTextractActions.md#listadapters)
- [ListTagsForResource](AwsTextractActions.md#listtagsforresource)
- [StartDocumentAnalysis](AwsTextractActions.md#startdocumentanalysis)
- [StartDocumentTextDetection](AwsTextractActions.md#startdocumenttextdetection)
- [StartExpenseAnalysis](AwsTextractActions.md#startexpenseanalysis)
- [StartLendingAnalysis](AwsTextractActions.md#startlendinganalysis)
- [TagResource](AwsTextractActions.md#tagresource)
- [UntagResource](AwsTextractActions.md#untagresource)
- [UpdateAdapter](AwsTextractActions.md#updateadapter)

## Enumeration Members

### AnalyzeDocument

• **AnalyzeDocument** = ``"textract:AnalyzeDocument"``

Grants permission to detect instances of real-world document entities within an
image provided as input

See https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeDocument.html

#### Defined in

actions/textract.ts:18

___

### AnalyzeExpense

• **AnalyzeExpense** = ``"textract:AnalyzeExpense"``

Grants permission to detect instances of real-world document entities within an
image provided as input

See https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeExpense.html

#### Defined in

actions/textract.ts:25

___

### AnalyzeID

• **AnalyzeID** = ``"textract:AnalyzeID"``

Grants permission to detect relevant information from identity documents provid
ed as input

See https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeID.html

#### Defined in

actions/textract.ts:32

___

### CreateAdapter

• **CreateAdapter** = ``"textract:CreateAdapter"``

Grants permission to create an Amazon Textract adapter

See https://docs.aws.amazon.com/textract/latest/dg/API_CreateAdapter.html

#### Defined in

actions/textract.ts:38

___

### CreateAdapterVersion

• **CreateAdapterVersion** = ``"textract:CreateAdapterVersion"``

Grants permission to create an Amazon Textract adapter version

See https://docs.aws.amazon.com/textract/latest/dg/API_CreateAdapterVersion.html

#### Defined in

actions/textract.ts:44

___

### DeleteAdapter

• **DeleteAdapter** = ``"textract:DeleteAdapter"``

Grants permission to delete an Amazon Textract adapter

See https://docs.aws.amazon.com/textract/latest/dg/API_DeleteAdapter.html

#### Defined in

actions/textract.ts:50

___

### DeleteAdapterVersion

• **DeleteAdapterVersion** = ``"textract:DeleteAdapterVersion"``

Grants permission to delete an Amazon Textract adapter version

See https://docs.aws.amazon.com/textract/latest/dg/API_DeleteAdapterVersion.html

#### Defined in

actions/textract.ts:56

___

### DetectDocumentText

• **DetectDocumentText** = ``"textract:DetectDocumentText"``

Grants permission to detect text in document images

See https://docs.aws.amazon.com/textract/latest/dg/API_DetectDocumentText.html

#### Defined in

actions/textract.ts:62

___

### GetAdapter

• **GetAdapter** = ``"textract:GetAdapter"``

Grants permission to get an Amazon Textract adapter

See https://docs.aws.amazon.com/textract/latest/dg/API_GetAdapter.html

#### Defined in

actions/textract.ts:68

___

### GetAdapterVersion

• **GetAdapterVersion** = ``"textract:GetAdapterVersion"``

Grants permission to get an Amazon Textract adapter version

See https://docs.aws.amazon.com/textract/latest/dg/API_GetAdapterVersion.html

#### Defined in

actions/textract.ts:74

___

### GetDocumentAnalysis

• **GetDocumentAnalysis** = ``"textract:GetDocumentAnalysis"``

Grants permission to return information about a document analysis job

See https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentAnalysis.html

#### Defined in

actions/textract.ts:80

___

### GetDocumentTextDetection

• **GetDocumentTextDetection** = ``"textract:GetDocumentTextDetection"``

Grants permission to return information about a document text detection job

See https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentTextDetection.html

#### Defined in

actions/textract.ts:86

___

### GetExpenseAnalysis

• **GetExpenseAnalysis** = ``"textract:GetExpenseAnalysis"``

Grants permission to return information about an expense analysis job

See https://docs.aws.amazon.com/textract/latest/dg/API_GetExpenseAnalysis.html

#### Defined in

actions/textract.ts:92

___

### GetLendingAnalysis

• **GetLendingAnalysis** = ``"textract:GetLendingAnalysis"``

Grants permission to retrieve page-level information regarding a lending analys
is job

See https://docs.aws.amazon.com/textract/latest/dg/API_GetLendingAnalysis.html

#### Defined in

actions/textract.ts:99

___

### GetLendingAnalysisSummary

• **GetLendingAnalysisSummary** = ``"textract:GetLendingAnalysisSummary"``

Grants permission to retrieve summarized information regarding a lending analys
is job

See https://docs.aws.amazon.com/textract/latest/dg/API_GetLendingAnalysisSummary.html

#### Defined in

actions/textract.ts:106

___

### ListAdapterVersions

• **ListAdapterVersions** = ``"textract:ListAdapterVersions"``

Grants permission to list Amazon Textract adapter versions

See https://docs.aws.amazon.com/textract/latest/dg/API_ListAdapterVersions.html

#### Defined in

actions/textract.ts:112

___

### ListAdapters

• **ListAdapters** = ``"textract:ListAdapters"``

Grants permission to list Amazon Textract adapters

See https://docs.aws.amazon.com/textract/latest/dg/API_ListAdapters.html

#### Defined in

actions/textract.ts:118

___

### ListTagsForResource

• **ListTagsForResource** = ``"textract:ListTagsForResource"``

Grants permission to return a list of tags associated with a resource

See https://docs.aws.amazon.com/textract/latest/dg/API_ListTagsForResource.html

#### Defined in

actions/textract.ts:124

___

### StartDocumentAnalysis

• **StartDocumentAnalysis** = ``"textract:StartDocumentAnalysis"``

Grants permission to start an asynchronous job to detect instances of real-worl
d document entities within an image or pdf provided as input

See https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentAnalysis.html

#### Defined in

actions/textract.ts:131

___

### StartDocumentTextDetection

• **StartDocumentTextDetection** = ``"textract:StartDocumentTextDetection"``

Grants permission to start an asynchronous job to detect text in document image
s or pdfs

See https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentTextDetection.html

#### Defined in

actions/textract.ts:138

___

### StartExpenseAnalysis

• **StartExpenseAnalysis** = ``"textract:StartExpenseAnalysis"``

Grants permission to start an asynchronous job to detect instances of invoices
or receipts within an image or pdf provided as input

See https://docs.aws.amazon.com/textract/latest/dg/API_StartExpenseAnalysis.html

#### Defined in

actions/textract.ts:145

___

### StartLendingAnalysis

• **StartLendingAnalysis** = ``"textract:StartLendingAnalysis"``

Grants permission to start an asynchronous job for detection of entities in a l
ending document, takes a provided image or PDF as input

See https://docs.aws.amazon.com/textract/latest/dg/API_StartLendingAnalysis.html

#### Defined in

actions/textract.ts:152

___

### TagResource

• **TagResource** = ``"textract:TagResource"``

Grants permission to add one or more tags to a resource

See https://docs.aws.amazon.com/textract/latest/dg/API_TagResource.html

#### Defined in

actions/textract.ts:158

___

### UntagResource

• **UntagResource** = ``"textract:UntagResource"``

Grants permission to remove one or more tags from a resource

See https://docs.aws.amazon.com/textract/latest/dg/API_UntagResource.html

#### Defined in

actions/textract.ts:164

___

### UpdateAdapter

• **UpdateAdapter** = ``"textract:UpdateAdapter"``

Grants permission to update Amazon Textract adapter

See https://docs.aws.amazon.com/textract/latest/dg/API_UpdateAdapter.html

#### Defined in

actions/textract.ts:170
