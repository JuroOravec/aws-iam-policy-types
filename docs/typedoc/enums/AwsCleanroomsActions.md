[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCleanroomsActions

# Enumeration: AwsCleanroomsActions

All IAM policy actions for AWS Clean Rooms (CLEANROOMS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscleanrooms.html

2024-02-12T09:56:18.230Z

## Table of contents

### Enumeration Members

- [BatchGetCollaborationAnalysisTemplate](AwsCleanroomsActions.md#batchgetcollaborationanalysistemplate)
- [BatchGetSchema](AwsCleanroomsActions.md#batchgetschema)
- [CreateAnalysisTemplate](AwsCleanroomsActions.md#createanalysistemplate)
- [CreateCollaboration](AwsCleanroomsActions.md#createcollaboration)
- [CreateConfiguredAudienceModelAssociation](AwsCleanroomsActions.md#createconfiguredaudiencemodelassociation)
- [CreateConfiguredTable](AwsCleanroomsActions.md#createconfiguredtable)
- [CreateConfiguredTableAnalysisRule](AwsCleanroomsActions.md#createconfiguredtableanalysisrule)
- [CreateConfiguredTableAssociation](AwsCleanroomsActions.md#createconfiguredtableassociation)
- [CreateMembership](AwsCleanroomsActions.md#createmembership)
- [CreatePrivacyBudgetTemplate](AwsCleanroomsActions.md#createprivacybudgettemplate)
- [DeleteAnalysisTemplate](AwsCleanroomsActions.md#deleteanalysistemplate)
- [DeleteCollaboration](AwsCleanroomsActions.md#deletecollaboration)
- [DeleteConfiguredAudienceModelAssociation](AwsCleanroomsActions.md#deleteconfiguredaudiencemodelassociation)
- [DeleteConfiguredTable](AwsCleanroomsActions.md#deleteconfiguredtable)
- [DeleteConfiguredTableAnalysisRule](AwsCleanroomsActions.md#deleteconfiguredtableanalysisrule)
- [DeleteConfiguredTableAssociation](AwsCleanroomsActions.md#deleteconfiguredtableassociation)
- [DeleteMember](AwsCleanroomsActions.md#deletemember)
- [DeleteMembership](AwsCleanroomsActions.md#deletemembership)
- [DeletePrivacyBudgetTemplate](AwsCleanroomsActions.md#deleteprivacybudgettemplate)
- [GetAnalysisTemplate](AwsCleanroomsActions.md#getanalysistemplate)
- [GetCollaboration](AwsCleanroomsActions.md#getcollaboration)
- [GetCollaborationAnalysisTemplate](AwsCleanroomsActions.md#getcollaborationanalysistemplate)
- [GetCollaborationConfiguredAudienceModelAssociation](AwsCleanroomsActions.md#getcollaborationconfiguredaudiencemodelassociation)
- [GetCollaborationPrivacyBudgetTemplate](AwsCleanroomsActions.md#getcollaborationprivacybudgettemplate)
- [GetConfiguredAudienceModelAssociation](AwsCleanroomsActions.md#getconfiguredaudiencemodelassociation)
- [GetConfiguredTable](AwsCleanroomsActions.md#getconfiguredtable)
- [GetConfiguredTableAnalysisRule](AwsCleanroomsActions.md#getconfiguredtableanalysisrule)
- [GetConfiguredTableAssociation](AwsCleanroomsActions.md#getconfiguredtableassociation)
- [GetMembership](AwsCleanroomsActions.md#getmembership)
- [GetPrivacyBudgetTemplate](AwsCleanroomsActions.md#getprivacybudgettemplate)
- [GetProtectedQuery](AwsCleanroomsActions.md#getprotectedquery)
- [GetSchema](AwsCleanroomsActions.md#getschema)
- [GetSchemaAnalysisRule](AwsCleanroomsActions.md#getschemaanalysisrule)
- [ListAnalysisTemplates](AwsCleanroomsActions.md#listanalysistemplates)
- [ListCollaborationAnalysisTemplates](AwsCleanroomsActions.md#listcollaborationanalysistemplates)
- [ListCollaborationConfiguredAudienceModelAssociations](AwsCleanroomsActions.md#listcollaborationconfiguredaudiencemodelassociations)
- [ListCollaborationPrivacyBudgetTemplates](AwsCleanroomsActions.md#listcollaborationprivacybudgettemplates)
- [ListCollaborationPrivacyBudgets](AwsCleanroomsActions.md#listcollaborationprivacybudgets)
- [ListCollaborations](AwsCleanroomsActions.md#listcollaborations)
- [ListConfiguredAudienceModelAssociations](AwsCleanroomsActions.md#listconfiguredaudiencemodelassociations)
- [ListConfiguredTableAssociations](AwsCleanroomsActions.md#listconfiguredtableassociations)
- [ListConfiguredTables](AwsCleanroomsActions.md#listconfiguredtables)
- [ListMembers](AwsCleanroomsActions.md#listmembers)
- [ListMemberships](AwsCleanroomsActions.md#listmemberships)
- [ListPrivacyBudgetTemplates](AwsCleanroomsActions.md#listprivacybudgettemplates)
- [ListPrivacyBudgets](AwsCleanroomsActions.md#listprivacybudgets)
- [ListProtectedQueries](AwsCleanroomsActions.md#listprotectedqueries)
- [ListSchemas](AwsCleanroomsActions.md#listschemas)
- [ListTagsForResource](AwsCleanroomsActions.md#listtagsforresource)
- [PreviewPrivacyImpact](AwsCleanroomsActions.md#previewprivacyimpact)
- [StartProtectedQuery](AwsCleanroomsActions.md#startprotectedquery)
- [TagResource](AwsCleanroomsActions.md#tagresource)
- [UntagResource](AwsCleanroomsActions.md#untagresource)
- [UpdateAnalysisTemplate](AwsCleanroomsActions.md#updateanalysistemplate)
- [UpdateCollaboration](AwsCleanroomsActions.md#updatecollaboration)
- [UpdateConfiguredAudienceModelAssociation](AwsCleanroomsActions.md#updateconfiguredaudiencemodelassociation)
- [UpdateConfiguredTable](AwsCleanroomsActions.md#updateconfiguredtable)
- [UpdateConfiguredTableAnalysisRule](AwsCleanroomsActions.md#updateconfiguredtableanalysisrule)
- [UpdateConfiguredTableAssociation](AwsCleanroomsActions.md#updateconfiguredtableassociation)
- [UpdateMembership](AwsCleanroomsActions.md#updatemembership)
- [UpdatePrivacyBudgetTemplate](AwsCleanroomsActions.md#updateprivacybudgettemplate)
- [UpdateProtectedQuery](AwsCleanroomsActions.md#updateprotectedquery)

## Enumeration Members

### BatchGetCollaborationAnalysisTemplate

• **BatchGetCollaborationAnalysisTemplate** = ``"cleanrooms:BatchGetCollaborationAnalysisTemplate"``

Grants permission to view details of analysisTemplates associated to the collab
oration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_BatchGetCollaborationAnalysisTemplate.html

#### Defined in

actions/cleanrooms.ts:18

___

### BatchGetSchema

• **BatchGetSchema** = ``"cleanrooms:BatchGetSchema"``

Grants permission to view details for schemas

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_BatchGetSchema.html

#### Defined in

actions/cleanrooms.ts:24

___

### CreateAnalysisTemplate

• **CreateAnalysisTemplate** = ``"cleanrooms:CreateAnalysisTemplate"``

Grants permission to create a new analysis template

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateAnalysisTemplate.html

#### Defined in

actions/cleanrooms.ts:30

___

### CreateCollaboration

• **CreateCollaboration** = ``"cleanrooms:CreateCollaboration"``

Grants permission to create a new collaboration, a shared data collaboration en
vironment

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html

#### Defined in

actions/cleanrooms.ts:37

___

### CreateConfiguredAudienceModelAssociation

• **CreateConfiguredAudienceModelAssociation** = ``"cleanrooms:CreateConfiguredAudienceModelAssociation"``

Grants permission to link a Cleanrooms ML configured audience model with a coll
aboration by creating a new association

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateConfiguredAudienceModelAssociation.html

#### Defined in

actions/cleanrooms.ts:44

___

### CreateConfiguredTable

• **CreateConfiguredTable** = ``"cleanrooms:CreateConfiguredTable"``

Grants permission to create a new configured table

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateConfiguredTable.html

#### Defined in

actions/cleanrooms.ts:50

___

### CreateConfiguredTableAnalysisRule

• **CreateConfiguredTableAnalysisRule** = ``"cleanrooms:CreateConfiguredTableAnalysisRule"``

Grants permission to create a analysis rule for a configured table

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateConfiguredTableAnalysisRule.html

#### Defined in

actions/cleanrooms.ts:56

___

### CreateConfiguredTableAssociation

• **CreateConfiguredTableAssociation** = ``"cleanrooms:CreateConfiguredTableAssociation"``

Grants permission to link a configured table with a collaboration by creating a
new association

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateConfiguredTableAssociation.html

#### Defined in

actions/cleanrooms.ts:63

___

### CreateMembership

• **CreateMembership** = ``"cleanrooms:CreateMembership"``

Grants permission to join collaborations by creating a membership

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateMembership.html

#### Defined in

actions/cleanrooms.ts:69

___

### CreatePrivacyBudgetTemplate

• **CreatePrivacyBudgetTemplate** = ``"cleanrooms:CreatePrivacyBudgetTemplate"``

Grants permission to create a new privacy budget template

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreatePrivacyBudgetTemplate.html

#### Defined in

actions/cleanrooms.ts:75

___

### DeleteAnalysisTemplate

• **DeleteAnalysisTemplate** = ``"cleanrooms:DeleteAnalysisTemplate"``

Grants permission to delete an existing analysis template

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteAnalysisTemplate.html

#### Defined in

actions/cleanrooms.ts:81

___

### DeleteCollaboration

• **DeleteCollaboration** = ``"cleanrooms:DeleteCollaboration"``

Grants permission to delete an existing collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteCollaboration.html

#### Defined in

actions/cleanrooms.ts:87

___

### DeleteConfiguredAudienceModelAssociation

• **DeleteConfiguredAudienceModelAssociation** = ``"cleanrooms:DeleteConfiguredAudienceModelAssociation"``

Grants permission to delete an existing configured audience model association

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteConfiguredAudienceModelAssociation.html

#### Defined in

actions/cleanrooms.ts:93

___

### DeleteConfiguredTable

• **DeleteConfiguredTable** = ``"cleanrooms:DeleteConfiguredTable"``

Grants permission to delete a configured table

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteConfiguredTable.html

#### Defined in

actions/cleanrooms.ts:99

___

### DeleteConfiguredTableAnalysisRule

• **DeleteConfiguredTableAnalysisRule** = ``"cleanrooms:DeleteConfiguredTableAnalysisRule"``

Grants permission to delete an existing analysis rule

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteConfiguredTableAnalysisRule.html

#### Defined in

actions/cleanrooms.ts:105

___

### DeleteConfiguredTableAssociation

• **DeleteConfiguredTableAssociation** = ``"cleanrooms:DeleteConfiguredTableAssociation"``

Grants permission to remove a configured table association from a collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteConfiguredTableAssociation.html

#### Defined in

actions/cleanrooms.ts:111

___

### DeleteMember

• **DeleteMember** = ``"cleanrooms:DeleteMember"``

Grants permission to delete members from a collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteMember.html

#### Defined in

actions/cleanrooms.ts:117

___

### DeleteMembership

• **DeleteMembership** = ``"cleanrooms:DeleteMembership"``

Grants permission to leave collaborations by deleting a membership

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteMembership.html

#### Defined in

actions/cleanrooms.ts:123

___

### DeletePrivacyBudgetTemplate

• **DeletePrivacyBudgetTemplate** = ``"cleanrooms:DeletePrivacyBudgetTemplate"``

Grants permission to delete an existing privacy budget template

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeletePrivacyBudgetTemplate.html

#### Defined in

actions/cleanrooms.ts:129

___

### GetAnalysisTemplate

• **GetAnalysisTemplate** = ``"cleanrooms:GetAnalysisTemplate"``

Grants permission to view details for an analysis template

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetAnalysisTemplate.html

#### Defined in

actions/cleanrooms.ts:135

___

### GetCollaboration

• **GetCollaboration** = ``"cleanrooms:GetCollaboration"``

Grants permission to view details for a collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetCollaboration.html

#### Defined in

actions/cleanrooms.ts:141

___

### GetCollaborationAnalysisTemplate

• **GetCollaborationAnalysisTemplate** = ``"cleanrooms:GetCollaborationAnalysisTemplate"``

Grants permission to view details for an analysis template within a collaborati
on

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetCollaborationAnalysisTemplate.html

#### Defined in

actions/cleanrooms.ts:148

___

### GetCollaborationConfiguredAudienceModelAssociation

• **GetCollaborationConfiguredAudienceModelAssociation** = ``"cleanrooms:GetCollaborationConfiguredAudienceModelAssociation"``

Grants permission to view details for a configured audience model association w
ithin a collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetCollaborationConfiguredAudienceModelAssociation.html

#### Defined in

actions/cleanrooms.ts:155

___

### GetCollaborationPrivacyBudgetTemplate

• **GetCollaborationPrivacyBudgetTemplate** = ``"cleanrooms:GetCollaborationPrivacyBudgetTemplate"``

Grants permission to view details for a privacy budget template within a collab
oration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetCollaborationPrivacyBudgetTemplate.html

#### Defined in

actions/cleanrooms.ts:162

___

### GetConfiguredAudienceModelAssociation

• **GetConfiguredAudienceModelAssociation** = ``"cleanrooms:GetConfiguredAudienceModelAssociation"``

Grants permission to view details for a configured audience model association

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetConfiguredAudienceModelAssociation.html

#### Defined in

actions/cleanrooms.ts:168

___

### GetConfiguredTable

• **GetConfiguredTable** = ``"cleanrooms:GetConfiguredTable"``

Grants permission to view details for a configured table

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetConfiguredTable.html

#### Defined in

actions/cleanrooms.ts:174

___

### GetConfiguredTableAnalysisRule

• **GetConfiguredTableAnalysisRule** = ``"cleanrooms:GetConfiguredTableAnalysisRule"``

Grants permission to view analysis rules for a configured table

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetConfiguredTableAnalysisRule.html

#### Defined in

actions/cleanrooms.ts:180

___

### GetConfiguredTableAssociation

• **GetConfiguredTableAssociation** = ``"cleanrooms:GetConfiguredTableAssociation"``

Grants permission to view details for a configured table association

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetConfiguredTableAssociation.html

#### Defined in

actions/cleanrooms.ts:186

___

### GetMembership

• **GetMembership** = ``"cleanrooms:GetMembership"``

Grants permission to view details about a membership

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetMembership.html

#### Defined in

actions/cleanrooms.ts:192

___

### GetPrivacyBudgetTemplate

• **GetPrivacyBudgetTemplate** = ``"cleanrooms:GetPrivacyBudgetTemplate"``

Grants permission to view details for a privacy budget template

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetPrivacyBudgetTemplate.html

#### Defined in

actions/cleanrooms.ts:198

___

### GetProtectedQuery

• **GetProtectedQuery** = ``"cleanrooms:GetProtectedQuery"``

Grants permission to view a protected query

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetProtectedQuery.html

#### Defined in

actions/cleanrooms.ts:204

___

### GetSchema

• **GetSchema** = ``"cleanrooms:GetSchema"``

Grants permission to view details for a schema

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetSchema.html

#### Defined in

actions/cleanrooms.ts:210

___

### GetSchemaAnalysisRule

• **GetSchemaAnalysisRule** = ``"cleanrooms:GetSchemaAnalysisRule"``

Grants permission to view analysis rules associated with a schema

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetSchemaAnalysisRule.html

#### Defined in

actions/cleanrooms.ts:216

___

### ListAnalysisTemplates

• **ListAnalysisTemplates** = ``"cleanrooms:ListAnalysisTemplates"``

Grants permission to list available analysis templates

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListAnalysisTemplates.html

#### Defined in

actions/cleanrooms.ts:222

___

### ListCollaborationAnalysisTemplates

• **ListCollaborationAnalysisTemplates** = ``"cleanrooms:ListCollaborationAnalysisTemplates"``

Grants permission to list available analysis templates within a collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborationAnalysisTemplates.html

#### Defined in

actions/cleanrooms.ts:228

___

### ListCollaborationConfiguredAudienceModelAssociations

• **ListCollaborationConfiguredAudienceModelAssociations** = ``"cleanrooms:ListCollaborationConfiguredAudienceModelAssociations"``

Grants permission to list available configured audience model association withi
n a collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborationConfiguredAudienceModelAssociations.html

#### Defined in

actions/cleanrooms.ts:235

___

### ListCollaborationPrivacyBudgetTemplates

• **ListCollaborationPrivacyBudgetTemplates** = ``"cleanrooms:ListCollaborationPrivacyBudgetTemplates"``

Grants permission to list available privacy budget templates within a collabora
tion

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborationPrivacyBudgetTemplates.html

#### Defined in

actions/cleanrooms.ts:242

___

### ListCollaborationPrivacyBudgets

• **ListCollaborationPrivacyBudgets** = ``"cleanrooms:ListCollaborationPrivacyBudgets"``

Grants permission to list privacy budgets within a collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborationPrivacyBudgets.html

#### Defined in

actions/cleanrooms.ts:248

___

### ListCollaborations

• **ListCollaborations** = ``"cleanrooms:ListCollaborations"``

Grants permission to list available collaborations

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborations.html

#### Defined in

actions/cleanrooms.ts:254

___

### ListConfiguredAudienceModelAssociations

• **ListConfiguredAudienceModelAssociations** = ``"cleanrooms:ListConfiguredAudienceModelAssociations"``

Grants permission to list available configured audience model associations for
a membership

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListConfiguredAudienceModelAssociations.html

#### Defined in

actions/cleanrooms.ts:261

___

### ListConfiguredTableAssociations

• **ListConfiguredTableAssociations** = ``"cleanrooms:ListConfiguredTableAssociations"``

Grants permission to list available configured table associations for a members
hip

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListConfiguredTableAssociations.html

#### Defined in

actions/cleanrooms.ts:268

___

### ListConfiguredTables

• **ListConfiguredTables** = ``"cleanrooms:ListConfiguredTables"``

Grants permission to list available configured tables

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListConfiguredTables.html

#### Defined in

actions/cleanrooms.ts:274

___

### ListMembers

• **ListMembers** = ``"cleanrooms:ListMembers"``

Grants permission to list the members of a collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListMembers.html

#### Defined in

actions/cleanrooms.ts:280

___

### ListMemberships

• **ListMemberships** = ``"cleanrooms:ListMemberships"``

Grants permission to list available memberships

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListMemberships.html

#### Defined in

actions/cleanrooms.ts:286

___

### ListPrivacyBudgetTemplates

• **ListPrivacyBudgetTemplates** = ``"cleanrooms:ListPrivacyBudgetTemplates"``

Grants permission to list available privacy budget templates

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListPrivacyBudgetTemplates.html

#### Defined in

actions/cleanrooms.ts:292

___

### ListPrivacyBudgets

• **ListPrivacyBudgets** = ``"cleanrooms:ListPrivacyBudgets"``

Grants permission to list available privacy budgets

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListPrivacyBudgets.html

#### Defined in

actions/cleanrooms.ts:298

___

### ListProtectedQueries

• **ListProtectedQueries** = ``"cleanrooms:ListProtectedQueries"``

Grants permission to list protected queries

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListProtectedQueries.html

#### Defined in

actions/cleanrooms.ts:304

___

### ListSchemas

• **ListSchemas** = ``"cleanrooms:ListSchemas"``

Grants permission to view available schemas for a collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListSchemas.html

#### Defined in

actions/cleanrooms.ts:310

___

### ListTagsForResource

• **ListTagsForResource** = ``"cleanrooms:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListTagsForResource.html

#### Defined in

actions/cleanrooms.ts:316

___

### PreviewPrivacyImpact

• **PreviewPrivacyImpact** = ``"cleanrooms:PreviewPrivacyImpact"``

Grants permission to preview privacy budget template settings

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_PreviewPrivacyImpact.html

#### Defined in

actions/cleanrooms.ts:322

___

### StartProtectedQuery

• **StartProtectedQuery** = ``"cleanrooms:StartProtectedQuery"``

Grants permission to start protected queries

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_StartProtectedQuery.html

#### Defined in

actions/cleanrooms.ts:328

___

### TagResource

• **TagResource** = ``"cleanrooms:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_TagResource.html

#### Defined in

actions/cleanrooms.ts:334

___

### UntagResource

• **UntagResource** = ``"cleanrooms:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UntagResource.html

#### Defined in

actions/cleanrooms.ts:340

___

### UpdateAnalysisTemplate

• **UpdateAnalysisTemplate** = ``"cleanrooms:UpdateAnalysisTemplate"``

Grants permission to update details of the analysis template

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateAnalysisTemplate.html

#### Defined in

actions/cleanrooms.ts:346

___

### UpdateCollaboration

• **UpdateCollaboration** = ``"cleanrooms:UpdateCollaboration"``

Grants permission to update details of the collaboration

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateCollaboration.html

#### Defined in

actions/cleanrooms.ts:352

___

### UpdateConfiguredAudienceModelAssociation

• **UpdateConfiguredAudienceModelAssociation** = ``"cleanrooms:UpdateConfiguredAudienceModelAssociation"``

Grants permission to update a configured audience model association

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateConfiguredAudienceModelAssociation.html

#### Defined in

actions/cleanrooms.ts:358

___

### UpdateConfiguredTable

• **UpdateConfiguredTable** = ``"cleanrooms:UpdateConfiguredTable"``

Grants permission to update an existing configured table

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateConfiguredTable.html

#### Defined in

actions/cleanrooms.ts:364

___

### UpdateConfiguredTableAnalysisRule

• **UpdateConfiguredTableAnalysisRule** = ``"cleanrooms:UpdateConfiguredTableAnalysisRule"``

Grants permission to update analysis rules for a configured table

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateConfiguredTableAnalysisRule.html

#### Defined in

actions/cleanrooms.ts:370

___

### UpdateConfiguredTableAssociation

• **UpdateConfiguredTableAssociation** = ``"cleanrooms:UpdateConfiguredTableAssociation"``

Grants permission to update a configured table association

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateConfiguredTableAssociation.html

#### Defined in

actions/cleanrooms.ts:376

___

### UpdateMembership

• **UpdateMembership** = ``"cleanrooms:UpdateMembership"``

Grants permission to update details of a membership

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateMembership.html

#### Defined in

actions/cleanrooms.ts:382

___

### UpdatePrivacyBudgetTemplate

• **UpdatePrivacyBudgetTemplate** = ``"cleanrooms:UpdatePrivacyBudgetTemplate"``

Grants permission to update details of the privacy budget template

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdatePrivacyBudgetTemplate.html

#### Defined in

actions/cleanrooms.ts:388

___

### UpdateProtectedQuery

• **UpdateProtectedQuery** = ``"cleanrooms:UpdateProtectedQuery"``

Grants permission to update protected queries

See https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateProtectedQuery.html

#### Defined in

actions/cleanrooms.ts:394
