[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAccessAnalyzerActions

# Enumeration: AwsAccessAnalyzerActions

All IAM policy actions for AWS IAM Access Analyzer (ACCESS-ANALYZER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamaccessanalyzer.html

2024-02-12T09:57:37.129Z

## Table of contents

### Enumeration Members

- [ApplyArchiveRule](AwsAccessAnalyzerActions.md#applyarchiverule)
- [CancelPolicyGeneration](AwsAccessAnalyzerActions.md#cancelpolicygeneration)
- [CheckAccessNotGranted](AwsAccessAnalyzerActions.md#checkaccessnotgranted)
- [CheckNoNewAccess](AwsAccessAnalyzerActions.md#checknonewaccess)
- [CreateAccessPreview](AwsAccessAnalyzerActions.md#createaccesspreview)
- [CreateAnalyzer](AwsAccessAnalyzerActions.md#createanalyzer)
- [CreateArchiveRule](AwsAccessAnalyzerActions.md#createarchiverule)
- [DeleteAnalyzer](AwsAccessAnalyzerActions.md#deleteanalyzer)
- [DeleteArchiveRule](AwsAccessAnalyzerActions.md#deletearchiverule)
- [GetAccessPreview](AwsAccessAnalyzerActions.md#getaccesspreview)
- [GetAnalyzedResource](AwsAccessAnalyzerActions.md#getanalyzedresource)
- [GetAnalyzer](AwsAccessAnalyzerActions.md#getanalyzer)
- [GetArchiveRule](AwsAccessAnalyzerActions.md#getarchiverule)
- [GetFinding](AwsAccessAnalyzerActions.md#getfinding)
- [GetFindingsStatistics](AwsAccessAnalyzerActions.md#getfindingsstatistics)
- [GetGeneratedPolicy](AwsAccessAnalyzerActions.md#getgeneratedpolicy)
- [ListAccessPreviewFindings](AwsAccessAnalyzerActions.md#listaccesspreviewfindings)
- [ListAccessPreviews](AwsAccessAnalyzerActions.md#listaccesspreviews)
- [ListAnalyzedResources](AwsAccessAnalyzerActions.md#listanalyzedresources)
- [ListAnalyzers](AwsAccessAnalyzerActions.md#listanalyzers)
- [ListArchiveRules](AwsAccessAnalyzerActions.md#listarchiverules)
- [ListFindings](AwsAccessAnalyzerActions.md#listfindings)
- [ListPolicyGenerations](AwsAccessAnalyzerActions.md#listpolicygenerations)
- [ListTagsForResource](AwsAccessAnalyzerActions.md#listtagsforresource)
- [StartPolicyGeneration](AwsAccessAnalyzerActions.md#startpolicygeneration)
- [StartResourceScan](AwsAccessAnalyzerActions.md#startresourcescan)
- [TagResource](AwsAccessAnalyzerActions.md#tagresource)
- [UntagResource](AwsAccessAnalyzerActions.md#untagresource)
- [UpdateArchiveRule](AwsAccessAnalyzerActions.md#updatearchiverule)
- [UpdateFindings](AwsAccessAnalyzerActions.md#updatefindings)
- [ValidatePolicy](AwsAccessAnalyzerActions.md#validatepolicy)

## Enumeration Members

### ApplyArchiveRule

• **ApplyArchiveRule** = ``"access-analyzer:ApplyArchiveRule"``

Grants permission to apply an archive rule

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ApplyArchiveRule.html

#### Defined in

actions/access-analyzer.ts:17

___

### CancelPolicyGeneration

• **CancelPolicyGeneration** = ``"access-analyzer:CancelPolicyGeneration"``

Grants permission to cancel a policy generation

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CancelPolicyGeneration.html

#### Defined in

actions/access-analyzer.ts:23

___

### CheckAccessNotGranted

• **CheckAccessNotGranted** = ``"access-analyzer:CheckAccessNotGranted"``

Grants permission to check that specified access is not allowed by a policy

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CheckAccessNotGranted.html

#### Defined in

actions/access-analyzer.ts:29

___

### CheckNoNewAccess

• **CheckNoNewAccess** = ``"access-analyzer:CheckNoNewAccess"``

Grants permission to check that no new access is allowed when compared to an ex
isting policy

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CheckNoNewAccess.html

#### Defined in

actions/access-analyzer.ts:36

___

### CreateAccessPreview

• **CreateAccessPreview** = ``"access-analyzer:CreateAccessPreview"``

Grants permission to create an access preview for the specified analyzer

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAccessPreview.html

#### Defined in

actions/access-analyzer.ts:42

___

### CreateAnalyzer

• **CreateAnalyzer** = ``"access-analyzer:CreateAnalyzer"``

Grants permission to create an analyzer

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAnalyzer.html

#### Defined in

actions/access-analyzer.ts:48

___

### CreateArchiveRule

• **CreateArchiveRule** = ``"access-analyzer:CreateArchiveRule"``

Grants permission to create an archive rule for the specified analyzer

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateArchiveRule.html

#### Defined in

actions/access-analyzer.ts:54

___

### DeleteAnalyzer

• **DeleteAnalyzer** = ``"access-analyzer:DeleteAnalyzer"``

Grants permission to delete the specified analyzer

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteAnalyzer.html

#### Defined in

actions/access-analyzer.ts:60

___

### DeleteArchiveRule

• **DeleteArchiveRule** = ``"access-analyzer:DeleteArchiveRule"``

Grants permission to delete archive rules for the specified analyzer

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteArchiveRule.html

#### Defined in

actions/access-analyzer.ts:66

___

### GetAccessPreview

• **GetAccessPreview** = ``"access-analyzer:GetAccessPreview"``

Grants permission to retrieve information about an access preview

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAccessPreview.html

#### Defined in

actions/access-analyzer.ts:72

___

### GetAnalyzedResource

• **GetAnalyzedResource** = ``"access-analyzer:GetAnalyzedResource"``

Grants permission to retrieve information about an analyzed resource

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzedResource.html

#### Defined in

actions/access-analyzer.ts:78

___

### GetAnalyzer

• **GetAnalyzer** = ``"access-analyzer:GetAnalyzer"``

Grants permission to retrieve information about analyzers

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzer.html

#### Defined in

actions/access-analyzer.ts:84

___

### GetArchiveRule

• **GetArchiveRule** = ``"access-analyzer:GetArchiveRule"``

Grants permission to retrieve information about archive rules for the specified
analyzer

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetArchiveRule.html

#### Defined in

actions/access-analyzer.ts:91

___

### GetFinding

• **GetFinding** = ``"access-analyzer:GetFinding"``

Grants permission to retrieve findings

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFindingV2.html

#### Defined in

actions/access-analyzer.ts:97

___

### GetFindingsStatistics

• **GetFindingsStatistics** = ``"access-analyzer:GetFindingsStatistics"``

Grants permission to retrieve statistics for findings

See https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#access-analyzer-permissions

#### Defined in

actions/access-analyzer.ts:103

___

### GetGeneratedPolicy

• **GetGeneratedPolicy** = ``"access-analyzer:GetGeneratedPolicy"``

Grants permission to retrieve a policy that was generated using StartPolicyGene
ration

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetGeneratedPolicy.html

#### Defined in

actions/access-analyzer.ts:110

___

### ListAccessPreviewFindings

• **ListAccessPreviewFindings** = ``"access-analyzer:ListAccessPreviewFindings"``

Grants permission to retrieve a list of findings from an access preview

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAccessPreviewFindings.html

#### Defined in

actions/access-analyzer.ts:116

___

### ListAccessPreviews

• **ListAccessPreviews** = ``"access-analyzer:ListAccessPreviews"``

Grants permission to retrieve a list of access previews

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAccessPreviews.html

#### Defined in

actions/access-analyzer.ts:122

___

### ListAnalyzedResources

• **ListAnalyzedResources** = ``"access-analyzer:ListAnalyzedResources"``

Grants permission to retrieve a list of resources that have been analyzed

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzedResources.html

#### Defined in

actions/access-analyzer.ts:128

___

### ListAnalyzers

• **ListAnalyzers** = ``"access-analyzer:ListAnalyzers"``

Grants permission to retrieves a list of analyzers

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html

#### Defined in

actions/access-analyzer.ts:134

___

### ListArchiveRules

• **ListArchiveRules** = ``"access-analyzer:ListArchiveRules"``

Grants permission to retrieve a list of archive rules from an analyzer

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListArchiveRules.html

#### Defined in

actions/access-analyzer.ts:140

___

### ListFindings

• **ListFindings** = ``"access-analyzer:ListFindings"``

Grants permission to retrieve a list of findings from an analyzer

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListFindingsV2.html

#### Defined in

actions/access-analyzer.ts:146

___

### ListPolicyGenerations

• **ListPolicyGenerations** = ``"access-analyzer:ListPolicyGenerations"``

Grants permission to list all the recently started policy generations

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListPolicyGenerations.html

#### Defined in

actions/access-analyzer.ts:152

___

### ListTagsForResource

• **ListTagsForResource** = ``"access-analyzer:ListTagsForResource"``

Grants permission to retrieve a list of tags applied to a resource

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/access-analyzer.ts:158

___

### StartPolicyGeneration

• **StartPolicyGeneration** = ``"access-analyzer:StartPolicyGeneration"``

Grants permission to start a policy generation

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartPolicyGeneration.html

#### Defined in

actions/access-analyzer.ts:164

___

### StartResourceScan

• **StartResourceScan** = ``"access-analyzer:StartResourceScan"``

Grants permission to start a scan of the policies applied to a resource

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartResourceScan.html

#### Defined in

actions/access-analyzer.ts:170

___

### TagResource

• **TagResource** = ``"access-analyzer:TagResource"``

Grants permission to add a tag to a resource

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_TagResource.html

#### Defined in

actions/access-analyzer.ts:176

___

### UntagResource

• **UntagResource** = ``"access-analyzer:UntagResource"``

Grants permission to remove a tag from a resource

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UntagResource.html

#### Defined in

actions/access-analyzer.ts:182

___

### UpdateArchiveRule

• **UpdateArchiveRule** = ``"access-analyzer:UpdateArchiveRule"``

Grants permission to modify an archive rule

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateArchiveRule.html

#### Defined in

actions/access-analyzer.ts:188

___

### UpdateFindings

• **UpdateFindings** = ``"access-analyzer:UpdateFindings"``

Grants permission to modify findings

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateFindings.html

#### Defined in

actions/access-analyzer.ts:194

___

### ValidatePolicy

• **ValidatePolicy** = ``"access-analyzer:ValidatePolicy"``

Grants permission to validate a policy

See https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ValidatePolicy.html

#### Defined in

actions/access-analyzer.ts:200
