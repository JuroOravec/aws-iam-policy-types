[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRoute53RecoveryReadinessActions

# Enumeration: AwsRoute53RecoveryReadinessActions

All IAM policy actions for Amazon Route 53 Recovery Readiness (ROUTE53-RECOVERY-READINESS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoveryreadiness.html

2024-02-12T09:59:01.531Z

## Table of contents

### Enumeration Members

- [CreateCell](AwsRoute53RecoveryReadinessActions.md#createcell)
- [CreateCrossAccountAuthorization](AwsRoute53RecoveryReadinessActions.md#createcrossaccountauthorization)
- [CreateReadinessCheck](AwsRoute53RecoveryReadinessActions.md#createreadinesscheck)
- [CreateRecoveryGroup](AwsRoute53RecoveryReadinessActions.md#createrecoverygroup)
- [CreateResourceSet](AwsRoute53RecoveryReadinessActions.md#createresourceset)
- [DeleteCell](AwsRoute53RecoveryReadinessActions.md#deletecell)
- [DeleteCrossAccountAuthorization](AwsRoute53RecoveryReadinessActions.md#deletecrossaccountauthorization)
- [DeleteReadinessCheck](AwsRoute53RecoveryReadinessActions.md#deletereadinesscheck)
- [DeleteRecoveryGroup](AwsRoute53RecoveryReadinessActions.md#deleterecoverygroup)
- [DeleteResourceSet](AwsRoute53RecoveryReadinessActions.md#deleteresourceset)
- [GetArchitectureRecommendations](AwsRoute53RecoveryReadinessActions.md#getarchitecturerecommendations)
- [GetCell](AwsRoute53RecoveryReadinessActions.md#getcell)
- [GetCellReadinessSummary](AwsRoute53RecoveryReadinessActions.md#getcellreadinesssummary)
- [GetReadinessCheck](AwsRoute53RecoveryReadinessActions.md#getreadinesscheck)
- [GetReadinessCheckResourceStatus](AwsRoute53RecoveryReadinessActions.md#getreadinesscheckresourcestatus)
- [GetReadinessCheckStatus](AwsRoute53RecoveryReadinessActions.md#getreadinesscheckstatus)
- [GetRecoveryGroup](AwsRoute53RecoveryReadinessActions.md#getrecoverygroup)
- [GetRecoveryGroupReadinessSummary](AwsRoute53RecoveryReadinessActions.md#getrecoverygroupreadinesssummary)
- [GetResourceSet](AwsRoute53RecoveryReadinessActions.md#getresourceset)
- [ListCells](AwsRoute53RecoveryReadinessActions.md#listcells)
- [ListCrossAccountAuthorizations](AwsRoute53RecoveryReadinessActions.md#listcrossaccountauthorizations)
- [ListReadinessChecks](AwsRoute53RecoveryReadinessActions.md#listreadinesschecks)
- [ListRecoveryGroups](AwsRoute53RecoveryReadinessActions.md#listrecoverygroups)
- [ListResourceSets](AwsRoute53RecoveryReadinessActions.md#listresourcesets)
- [ListRules](AwsRoute53RecoveryReadinessActions.md#listrules)
- [ListTagsForResources](AwsRoute53RecoveryReadinessActions.md#listtagsforresources)
- [TagResource](AwsRoute53RecoveryReadinessActions.md#tagresource)
- [UntagResource](AwsRoute53RecoveryReadinessActions.md#untagresource)
- [UpdateCell](AwsRoute53RecoveryReadinessActions.md#updatecell)
- [UpdateReadinessCheck](AwsRoute53RecoveryReadinessActions.md#updatereadinesscheck)
- [UpdateRecoveryGroup](AwsRoute53RecoveryReadinessActions.md#updaterecoverygroup)
- [UpdateResourceSet](AwsRoute53RecoveryReadinessActions.md#updateresourceset)

## Enumeration Members

### CreateCell

• **CreateCell** = ``"route53-recovery-readiness:CreateCell"``

Grants permission to create a new cell

See https://docs.aws.amazon.com/recovery-readiness/latest/api/cells.html

#### Defined in

actions/route53-recovery-readiness.ts:17

___

### CreateCrossAccountAuthorization

• **CreateCrossAccountAuthorization** = ``"route53-recovery-readiness:CreateCrossAccountAuthorization"``

Grants permission to create a cross account authorization

See https://docs.aws.amazon.com/recovery-readiness/latest/api/crossaccountauthorizations.html

#### Defined in

actions/route53-recovery-readiness.ts:23

___

### CreateReadinessCheck

• **CreateReadinessCheck** = ``"route53-recovery-readiness:CreateReadinessCheck"``

Grants permission to create a readiness check

See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks.html

#### Defined in

actions/route53-recovery-readiness.ts:29

___

### CreateRecoveryGroup

• **CreateRecoveryGroup** = ``"route53-recovery-readiness:CreateRecoveryGroup"``

Grants permission to create a recovery group

See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups.html

#### Defined in

actions/route53-recovery-readiness.ts:35

___

### CreateResourceSet

• **CreateResourceSet** = ``"route53-recovery-readiness:CreateResourceSet"``

Grants permission to create a resource set

See https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets.html

#### Defined in

actions/route53-recovery-readiness.ts:41

___

### DeleteCell

• **DeleteCell** = ``"route53-recovery-readiness:DeleteCell"``

Grants permission to delete a cell

See https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html

#### Defined in

actions/route53-recovery-readiness.ts:47

___

### DeleteCrossAccountAuthorization

• **DeleteCrossAccountAuthorization** = ``"route53-recovery-readiness:DeleteCrossAccountAuthorization"``

Grants permission to delete a cross account authorization

See https://docs.aws.amazon.com/recovery-readiness/latest/api/crossaccountauthorizations-crossaccountauthorization.html

#### Defined in

actions/route53-recovery-readiness.ts:53

___

### DeleteReadinessCheck

• **DeleteReadinessCheck** = ``"route53-recovery-readiness:DeleteReadinessCheck"``

Grants permission to delete a readiness check

See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html

#### Defined in

actions/route53-recovery-readiness.ts:59

___

### DeleteRecoveryGroup

• **DeleteRecoveryGroup** = ``"route53-recovery-readiness:DeleteRecoveryGroup"``

Grants permission to delete a recovery group

See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html

#### Defined in

actions/route53-recovery-readiness.ts:65

___

### DeleteResourceSet

• **DeleteResourceSet** = ``"route53-recovery-readiness:DeleteResourceSet"``

Grants permission to delete a resource set

See https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html

#### Defined in

actions/route53-recovery-readiness.ts:71

___

### GetArchitectureRecommendations

• **GetArchitectureRecommendations** = ``"route53-recovery-readiness:GetArchitectureRecommendations"``

Grants permission to get architecture recommendations for a recovery group

See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname-architecturerecommendations.html

#### Defined in

actions/route53-recovery-readiness.ts:77

___

### GetCell

• **GetCell** = ``"route53-recovery-readiness:GetCell"``

Grants permission to get information about a cell

See https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html

#### Defined in

actions/route53-recovery-readiness.ts:83

___

### GetCellReadinessSummary

• **GetCellReadinessSummary** = ``"route53-recovery-readiness:GetCellReadinessSummary"``

Grants permission to get a readiness summary for a cell

See https://docs.aws.amazon.com/recovery-readiness/latest/api/cellreadiness-cellname.html

#### Defined in

actions/route53-recovery-readiness.ts:89

___

### GetReadinessCheck

• **GetReadinessCheck** = ``"route53-recovery-readiness:GetReadinessCheck"``

Grants permission to get information about a readiness check

See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html

#### Defined in

actions/route53-recovery-readiness.ts:95

___

### GetReadinessCheckResourceStatus

• **GetReadinessCheckResourceStatus** = ``"route53-recovery-readiness:GetReadinessCheckResourceStatus"``

Grants permission to get the readiness status for an individual resource

See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname-resource-resourceidentifier-status.html

#### Defined in

actions/route53-recovery-readiness.ts:101

___

### GetReadinessCheckStatus

• **GetReadinessCheckStatus** = ``"route53-recovery-readiness:GetReadinessCheckStatus"``

Grants permission to get the status of a readiness check (for a resource set)

See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname-status.html

#### Defined in

actions/route53-recovery-readiness.ts:107

___

### GetRecoveryGroup

• **GetRecoveryGroup** = ``"route53-recovery-readiness:GetRecoveryGroup"``

Grants permission to get information about a recovery group

See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html

#### Defined in

actions/route53-recovery-readiness.ts:113

___

### GetRecoveryGroupReadinessSummary

• **GetRecoveryGroupReadinessSummary** = ``"route53-recovery-readiness:GetRecoveryGroupReadinessSummary"``

Grants permission to get a readiness summary for a recovery group

See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroupreadiness-recoverygroupname.html

#### Defined in

actions/route53-recovery-readiness.ts:119

___

### GetResourceSet

• **GetResourceSet** = ``"route53-recovery-readiness:GetResourceSet"``

Grants permission to get information about a resource set

See https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html

#### Defined in

actions/route53-recovery-readiness.ts:125

___

### ListCells

• **ListCells** = ``"route53-recovery-readiness:ListCells"``

Grants permission to list cells

See https://docs.aws.amazon.com/recovery-readiness/latest/api/cells.html

#### Defined in

actions/route53-recovery-readiness.ts:131

___

### ListCrossAccountAuthorizations

• **ListCrossAccountAuthorizations** = ``"route53-recovery-readiness:ListCrossAccountAuthorizations"``

Grants permission to list cross account authorizations

See https://docs.aws.amazon.com/recovery-readiness/latest/api/crossaccountauthorizations.html

#### Defined in

actions/route53-recovery-readiness.ts:137

___

### ListReadinessChecks

• **ListReadinessChecks** = ``"route53-recovery-readiness:ListReadinessChecks"``

Grants permission to list readiness checks

See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks.html

#### Defined in

actions/route53-recovery-readiness.ts:143

___

### ListRecoveryGroups

• **ListRecoveryGroups** = ``"route53-recovery-readiness:ListRecoveryGroups"``

Grants permission to list recovery groups

See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups.html

#### Defined in

actions/route53-recovery-readiness.ts:149

___

### ListResourceSets

• **ListResourceSets** = ``"route53-recovery-readiness:ListResourceSets"``

Grants permission to list resource sets

See https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets.html

#### Defined in

actions/route53-recovery-readiness.ts:155

___

### ListRules

• **ListRules** = ``"route53-recovery-readiness:ListRules"``

Grants permission to list readiness rules

See https://docs.aws.amazon.com/recovery-readiness/latest/api/rules.html

#### Defined in

actions/route53-recovery-readiness.ts:161

___

### ListTagsForResources

• **ListTagsForResources** = ``"route53-recovery-readiness:ListTagsForResources"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html

#### Defined in

actions/route53-recovery-readiness.ts:167

___

### TagResource

• **TagResource** = ``"route53-recovery-readiness:TagResource"``

Grants permission to add a tag to a resource

See https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html

#### Defined in

actions/route53-recovery-readiness.ts:173

___

### UntagResource

• **UntagResource** = ``"route53-recovery-readiness:UntagResource"``

Grants permission to remove a tag from a resource

See https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html

#### Defined in

actions/route53-recovery-readiness.ts:179

___

### UpdateCell

• **UpdateCell** = ``"route53-recovery-readiness:UpdateCell"``

Grants permission to update a cell

See https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html

#### Defined in

actions/route53-recovery-readiness.ts:185

___

### UpdateReadinessCheck

• **UpdateReadinessCheck** = ``"route53-recovery-readiness:UpdateReadinessCheck"``

Grants permission to update a readiness check

See https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html

#### Defined in

actions/route53-recovery-readiness.ts:191

___

### UpdateRecoveryGroup

• **UpdateRecoveryGroup** = ``"route53-recovery-readiness:UpdateRecoveryGroup"``

Grants permission to update a recovery group

See https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html

#### Defined in

actions/route53-recovery-readiness.ts:197

___

### UpdateResourceSet

• **UpdateResourceSet** = ``"route53-recovery-readiness:UpdateResourceSet"``

Grants permission to update a resource set

See https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html

#### Defined in

actions/route53-recovery-readiness.ts:203
