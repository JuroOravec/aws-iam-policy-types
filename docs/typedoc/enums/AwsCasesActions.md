[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCasesActions

# Enumeration: AwsCasesActions

All IAM policy actions for Amazon Connect Cases (CASES)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcases.html

2024-02-12T09:56:45.667Z

## Table of contents

### Enumeration Members

- [BatchGetField](AwsCasesActions.md#batchgetfield)
- [BatchPutFieldOptions](AwsCasesActions.md#batchputfieldoptions)
- [CreateCase](AwsCasesActions.md#createcase)
- [CreateDomain](AwsCasesActions.md#createdomain)
- [CreateField](AwsCasesActions.md#createfield)
- [CreateLayout](AwsCasesActions.md#createlayout)
- [CreateRelatedItem](AwsCasesActions.md#createrelateditem)
- [CreateTemplate](AwsCasesActions.md#createtemplate)
- [DeleteDomain](AwsCasesActions.md#deletedomain)
- [GetCase](AwsCasesActions.md#getcase)
- [GetCaseAuditEvents](AwsCasesActions.md#getcaseauditevents)
- [GetCaseEventConfiguration](AwsCasesActions.md#getcaseeventconfiguration)
- [GetDomain](AwsCasesActions.md#getdomain)
- [GetLayout](AwsCasesActions.md#getlayout)
- [GetTemplate](AwsCasesActions.md#gettemplate)
- [ListCasesForContact](AwsCasesActions.md#listcasesforcontact)
- [ListDomains](AwsCasesActions.md#listdomains)
- [ListFieldOptions](AwsCasesActions.md#listfieldoptions)
- [ListFields](AwsCasesActions.md#listfields)
- [ListLayouts](AwsCasesActions.md#listlayouts)
- [ListTagsForResource](AwsCasesActions.md#listtagsforresource)
- [ListTemplates](AwsCasesActions.md#listtemplates)
- [PutCaseEventConfiguration](AwsCasesActions.md#putcaseeventconfiguration)
- [SearchCases](AwsCasesActions.md#searchcases)
- [SearchRelatedItems](AwsCasesActions.md#searchrelateditems)
- [TagResource](AwsCasesActions.md#tagresource)
- [UntagResource](AwsCasesActions.md#untagresource)
- [UpdateCase](AwsCasesActions.md#updatecase)
- [UpdateField](AwsCasesActions.md#updatefield)
- [UpdateLayout](AwsCasesActions.md#updatelayout)
- [UpdateTemplate](AwsCasesActions.md#updatetemplate)

## Enumeration Members

### BatchGetField

• **BatchGetField** = ``"cases:BatchGetField"``

Grants permission to retrieve information about the fields in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_BatchGetField.html

#### Defined in

actions/cases.ts:17

___

### BatchPutFieldOptions

• **BatchPutFieldOptions** = ``"cases:BatchPutFieldOptions"``

Grants permission to update the field options in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_BatchPutFieldOptions.html

#### Defined in

actions/cases.ts:23

___

### CreateCase

• **CreateCase** = ``"cases:CreateCase"``

Grants permission to create a case in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateCase.html

#### Defined in

actions/cases.ts:29

___

### CreateDomain

• **CreateDomain** = ``"cases:CreateDomain"``

Grants permission to create a new case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateDomain.html

#### Defined in

actions/cases.ts:35

___

### CreateField

• **CreateField** = ``"cases:CreateField"``

Grants permission to create a field in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateField.html

#### Defined in

actions/cases.ts:41

___

### CreateLayout

• **CreateLayout** = ``"cases:CreateLayout"``

Grants permission to create a layout in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateLayout.html

#### Defined in

actions/cases.ts:47

___

### CreateRelatedItem

• **CreateRelatedItem** = ``"cases:CreateRelatedItem"``

Grants permission to create a related item associated to a case in the case dom
ain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateRelatedItem.html

#### Defined in

actions/cases.ts:54

___

### CreateTemplate

• **CreateTemplate** = ``"cases:CreateTemplate"``

Grants permission to create a template in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateTemplate.html

#### Defined in

actions/cases.ts:60

___

### DeleteDomain

• **DeleteDomain** = ``"cases:DeleteDomain"``

Grants permission to delete the domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_DeleteDomain.html

#### Defined in

actions/cases.ts:66

___

### GetCase

• **GetCase** = ``"cases:GetCase"``

Grants permission to retrieve information about a case in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_GetCase.html

#### Defined in

actions/cases.ts:72

___

### GetCaseAuditEvents

• **GetCaseAuditEvents** = ``"cases:GetCaseAuditEvents"``

Grants permission to view audit history of a case

See https://docs.aws.amazon.com/cases/latest/APIReference/API_GetCaseAuditEvents.html

#### Defined in

actions/cases.ts:78

___

### GetCaseEventConfiguration

• **GetCaseEventConfiguration** = ``"cases:GetCaseEventConfiguration"``

Grants permission to retrieve information about the case event configuraton in
the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_GetCaseEventConfiguration.html

#### Defined in

actions/cases.ts:85

___

### GetDomain

• **GetDomain** = ``"cases:GetDomain"``

Grants permission to retrieve information about the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_GetDomain.html

#### Defined in

actions/cases.ts:91

___

### GetLayout

• **GetLayout** = ``"cases:GetLayout"``

Grants permission to retrieve information about the layout in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_GetLayout.html

#### Defined in

actions/cases.ts:97

___

### GetTemplate

• **GetTemplate** = ``"cases:GetTemplate"``

Grants permission to retrieve information about the template in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_GetTemplate.html

#### Defined in

actions/cases.ts:103

___

### ListCasesForContact

• **ListCasesForContact** = ``"cases:ListCasesForContact"``

Grants permission to list cases for a specific contact in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_ListCasesForContact.html

#### Defined in

actions/cases.ts:109

___

### ListDomains

• **ListDomains** = ``"cases:ListDomains"``

Grants permission to list all domains in the aws account

See https://docs.aws.amazon.com/cases/latest/APIReference/API_ListDomains.html

#### Defined in

actions/cases.ts:115

___

### ListFieldOptions

• **ListFieldOptions** = ``"cases:ListFieldOptions"``

Grants permission to list field options for a single select field in the case d
omain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_ListFieldOptions.html

#### Defined in

actions/cases.ts:122

___

### ListFields

• **ListFields** = ``"cases:ListFields"``

Grants permission to list fields in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_ListFields.html

#### Defined in

actions/cases.ts:128

___

### ListLayouts

• **ListLayouts** = ``"cases:ListLayouts"``

Grants permission to list layouts in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_ListLayouts.html

#### Defined in

actions/cases.ts:134

___

### ListTagsForResource

• **ListTagsForResource** = ``"cases:ListTagsForResource"``

Grants permission to list the tags for the specified resource

See https://docs.aws.amazon.com/cases/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/cases.ts:140

___

### ListTemplates

• **ListTemplates** = ``"cases:ListTemplates"``

Grants permission to list templates in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_ListTemplates.html

#### Defined in

actions/cases.ts:146

___

### PutCaseEventConfiguration

• **PutCaseEventConfiguration** = ``"cases:PutCaseEventConfiguration"``

Grants permission to insert or update the case event configuration in the case
domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_PutCaseEventConfiguration.html

#### Defined in

actions/cases.ts:153

___

### SearchCases

• **SearchCases** = ``"cases:SearchCases"``

Grants permission to search for cases in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_SearchCases.html

#### Defined in

actions/cases.ts:159

___

### SearchRelatedItems

• **SearchRelatedItems** = ``"cases:SearchRelatedItems"``

Grants permission to search for related items associated to the case in the cas
e domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_SearchRelatedItems.html

#### Defined in

actions/cases.ts:166

___

### TagResource

• **TagResource** = ``"cases:TagResource"``

Grants permission to add the specified tags to the specified resource

See https://docs.aws.amazon.com/cases/latest/APIReference/API_TagResource.html

#### Defined in

actions/cases.ts:172

___

### UntagResource

• **UntagResource** = ``"cases:UntagResource"``

Grants permission to remove the specified tags from the specified resource

See https://docs.aws.amazon.com/cases/latest/APIReference/API_UntagResource.html

#### Defined in

actions/cases.ts:178

___

### UpdateCase

• **UpdateCase** = ``"cases:UpdateCase"``

Grants permission to update the field values on the case in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_UpdateCase.html

#### Defined in

actions/cases.ts:184

___

### UpdateField

• **UpdateField** = ``"cases:UpdateField"``

Grants permission to update the field in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_UpdateField.html

#### Defined in

actions/cases.ts:190

___

### UpdateLayout

• **UpdateLayout** = ``"cases:UpdateLayout"``

Grants permission to update the layout in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_UpdateLayout.html

#### Defined in

actions/cases.ts:196

___

### UpdateTemplate

• **UpdateTemplate** = ``"cases:UpdateTemplate"``

Grants permission to update the template in the case domain

See https://docs.aws.amazon.com/cases/latest/APIReference/API_UpdateTemplate.html

#### Defined in

actions/cases.ts:202
