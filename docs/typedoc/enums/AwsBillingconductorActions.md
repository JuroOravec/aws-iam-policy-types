[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsBillingconductorActions

# Enumeration: AwsBillingconductorActions

All IAM policy actions for AWS Billing Conductor (BILLINGCONDUCTOR)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingconductor.html

2024-02-12T09:56:13.665Z

## Table of contents

### Enumeration Members

- [AssociateAccounts](AwsBillingconductorActions.md#associateaccounts)
- [AssociatePricingRules](AwsBillingconductorActions.md#associatepricingrules)
- [BatchAssociateResourcesToCustomLineItem](AwsBillingconductorActions.md#batchassociateresourcestocustomlineitem)
- [BatchDisassociateResourcesFromCustomLineItem](AwsBillingconductorActions.md#batchdisassociateresourcesfromcustomlineitem)
- [CreateBillingGroup](AwsBillingconductorActions.md#createbillinggroup)
- [CreateCustomLineItem](AwsBillingconductorActions.md#createcustomlineitem)
- [CreatePricingPlan](AwsBillingconductorActions.md#createpricingplan)
- [CreatePricingRule](AwsBillingconductorActions.md#createpricingrule)
- [DeleteBillingGroup](AwsBillingconductorActions.md#deletebillinggroup)
- [DeleteCustomLineItem](AwsBillingconductorActions.md#deletecustomlineitem)
- [DeletePricingPlan](AwsBillingconductorActions.md#deletepricingplan)
- [DeletePricingRule](AwsBillingconductorActions.md#deletepricingrule)
- [DisassociateAccounts](AwsBillingconductorActions.md#disassociateaccounts)
- [DisassociatePricingRules](AwsBillingconductorActions.md#disassociatepricingrules)
- [GetBillingGroupCostReport](AwsBillingconductorActions.md#getbillinggroupcostreport)
- [ListAccountAssociations](AwsBillingconductorActions.md#listaccountassociations)
- [ListBillingGroupCostReports](AwsBillingconductorActions.md#listbillinggroupcostreports)
- [ListBillingGroups](AwsBillingconductorActions.md#listbillinggroups)
- [ListCustomLineItemVersions](AwsBillingconductorActions.md#listcustomlineitemversions)
- [ListCustomLineItems](AwsBillingconductorActions.md#listcustomlineitems)
- [ListPricingPlans](AwsBillingconductorActions.md#listpricingplans)
- [ListPricingPlansAssociatedWithPricingRule](AwsBillingconductorActions.md#listpricingplansassociatedwithpricingrule)
- [ListPricingRules](AwsBillingconductorActions.md#listpricingrules)
- [ListPricingRulesAssociatedToPricingPlan](AwsBillingconductorActions.md#listpricingrulesassociatedtopricingplan)
- [ListResourcesAssociatedToCustomLineItem](AwsBillingconductorActions.md#listresourcesassociatedtocustomlineitem)
- [ListTagsForResource](AwsBillingconductorActions.md#listtagsforresource)
- [TagResource](AwsBillingconductorActions.md#tagresource)
- [UntagResource](AwsBillingconductorActions.md#untagresource)
- [UpdateBillingGroup](AwsBillingconductorActions.md#updatebillinggroup)
- [UpdateCustomLineItem](AwsBillingconductorActions.md#updatecustomlineitem)
- [UpdatePricingPlan](AwsBillingconductorActions.md#updatepricingplan)
- [UpdatePricingRule](AwsBillingconductorActions.md#updatepricingrule)

## Enumeration Members

### AssociateAccounts

• **AssociateAccounts** = ``"billingconductor:AssociateAccounts"``

Grants permission to associate between one and 30 accounts to a billing group

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_AssociateAccounts.html

#### Defined in

actions/billingconductor.ts:17

___

### AssociatePricingRules

• **AssociatePricingRules** = ``"billingconductor:AssociatePricingRules"``

Grants permission to associate pricing rules

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_AssociatePricingRules.html

#### Defined in

actions/billingconductor.ts:23

___

### BatchAssociateResourcesToCustomLineItem

• **BatchAssociateResourcesToCustomLineItem** = ``"billingconductor:BatchAssociateResourcesToCustomLineItem"``

Grants permission to batch associate resources to a percentage custom line item

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_BatchAssociateResourcesToCustomLineItem.html

#### Defined in

actions/billingconductor.ts:29

___

### BatchDisassociateResourcesFromCustomLineItem

• **BatchDisassociateResourcesFromCustomLineItem** = ``"billingconductor:BatchDisassociateResourcesFromCustomLineItem"``

Grants permission to batch disassociate resources from a percentage custom line
item

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_BatchDisassociateResourcesFromCustomLineItem.html

#### Defined in

actions/billingconductor.ts:36

___

### CreateBillingGroup

• **CreateBillingGroup** = ``"billingconductor:CreateBillingGroup"``

Grants permission to create a billing group

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreateBillingGroup.html

#### Defined in

actions/billingconductor.ts:42

___

### CreateCustomLineItem

• **CreateCustomLineItem** = ``"billingconductor:CreateCustomLineItem"``

Grants permission to create a custom line item

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreateCustomLineItem.html

#### Defined in

actions/billingconductor.ts:48

___

### CreatePricingPlan

• **CreatePricingPlan** = ``"billingconductor:CreatePricingPlan"``

Grants permission to create a pricing plan

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreatePricingPlan.html

#### Defined in

actions/billingconductor.ts:54

___

### CreatePricingRule

• **CreatePricingRule** = ``"billingconductor:CreatePricingRule"``

Grants permission to create a pricing rule

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreatePricingRule.html

#### Defined in

actions/billingconductor.ts:60

___

### DeleteBillingGroup

• **DeleteBillingGroup** = ``"billingconductor:DeleteBillingGroup"``

Grants permission to delete a billing group

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeleteBillingGroup.html

#### Defined in

actions/billingconductor.ts:66

___

### DeleteCustomLineItem

• **DeleteCustomLineItem** = ``"billingconductor:DeleteCustomLineItem"``

Grants permission to delete a custom line item

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeleteCustomLineItem.html

#### Defined in

actions/billingconductor.ts:72

___

### DeletePricingPlan

• **DeletePricingPlan** = ``"billingconductor:DeletePricingPlan"``

Grants permission to delete a pricing plan

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeletePricingPlan.html

#### Defined in

actions/billingconductor.ts:78

___

### DeletePricingRule

• **DeletePricingRule** = ``"billingconductor:DeletePricingRule"``

Grants permission to delete a pricing rule

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeletePricingRule.html

#### Defined in

actions/billingconductor.ts:84

___

### DisassociateAccounts

• **DisassociateAccounts** = ``"billingconductor:DisassociateAccounts"``

Grants permission to detach between one and 30 accounts from a billing group

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DisassociateAccounts.html

#### Defined in

actions/billingconductor.ts:90

___

### DisassociatePricingRules

• **DisassociatePricingRules** = ``"billingconductor:DisassociatePricingRules"``

Grants permission to disassociate pricing rules

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DisassociatePricingRules.html

#### Defined in

actions/billingconductor.ts:96

___

### GetBillingGroupCostReport

• **GetBillingGroupCostReport** = ``"billingconductor:GetBillingGroupCostReport"``

Grants permission to view the billing group cost report for the specified billi
ng group

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_GetBillingGroupCostReport.html

#### Defined in

actions/billingconductor.ts:103

___

### ListAccountAssociations

• **ListAccountAssociations** = ``"billingconductor:ListAccountAssociations"``

Grants permission to list the linked accounts of the payer account for the give
n billing period while also providing the billing group the linked accounts bel
ong to

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListAccountAssociations.html

#### Defined in

actions/billingconductor.ts:111

___

### ListBillingGroupCostReports

• **ListBillingGroupCostReports** = ``"billingconductor:ListBillingGroupCostReports"``

Grants permission to view the billing group cost report

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListBillingGroupCostReports.html

#### Defined in

actions/billingconductor.ts:117

___

### ListBillingGroups

• **ListBillingGroups** = ``"billingconductor:ListBillingGroups"``

Grants permission to view the details of billing groups

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListBillingGroups.html

#### Defined in

actions/billingconductor.ts:123

___

### ListCustomLineItemVersions

• **ListCustomLineItemVersions** = ``"billingconductor:ListCustomLineItemVersions"``

Grants permission to view custom line item versions

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListCustomLineItemVersions.html

#### Defined in

actions/billingconductor.ts:129

___

### ListCustomLineItems

• **ListCustomLineItems** = ``"billingconductor:ListCustomLineItems"``

Grants permission to view custom line item details

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListCustomLineItems.html

#### Defined in

actions/billingconductor.ts:135

___

### ListPricingPlans

• **ListPricingPlans** = ``"billingconductor:ListPricingPlans"``

Grants permission to view the pricing plans details

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingPlans.html

#### Defined in

actions/billingconductor.ts:141

___

### ListPricingPlansAssociatedWithPricingRule

• **ListPricingPlansAssociatedWithPricingRule** = ``"billingconductor:ListPricingPlansAssociatedWithPricingRule"``

Grants permission to list pricing plans associated with a pricing rule

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingPlansAssociatedWithPricingRule.html

#### Defined in

actions/billingconductor.ts:147

___

### ListPricingRules

• **ListPricingRules** = ``"billingconductor:ListPricingRules"``

Grants permission to view pricing rules details

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingRules.html

#### Defined in

actions/billingconductor.ts:153

___

### ListPricingRulesAssociatedToPricingPlan

• **ListPricingRulesAssociatedToPricingPlan** = ``"billingconductor:ListPricingRulesAssociatedToPricingPlan"``

Grants permission to list pricing rules associated to a pricing plan

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingRulesAssociatedToPricingPlan.html

#### Defined in

actions/billingconductor.ts:159

___

### ListResourcesAssociatedToCustomLineItem

• **ListResourcesAssociatedToCustomLineItem** = ``"billingconductor:ListResourcesAssociatedToCustomLineItem"``

Grants permission to list resources associated to a percentage custom line item

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListResourcesAssociatedToCustomLineItem.html

#### Defined in

actions/billingconductor.ts:165

___

### ListTagsForResource

• **ListTagsForResource** = ``"billingconductor:ListTagsForResource"``

Grants permission to list tags of a resource

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/billingconductor.ts:171

___

### TagResource

• **TagResource** = ``"billingconductor:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_TagResource.html

#### Defined in

actions/billingconductor.ts:177

___

### UntagResource

• **UntagResource** = ``"billingconductor:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UntagResource.html

#### Defined in

actions/billingconductor.ts:183

___

### UpdateBillingGroup

• **UpdateBillingGroup** = ``"billingconductor:UpdateBillingGroup"``

Grants permission to update a billing group

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdateBillingGroup.html

#### Defined in

actions/billingconductor.ts:189

___

### UpdateCustomLineItem

• **UpdateCustomLineItem** = ``"billingconductor:UpdateCustomLineItem"``

Grants permission to update a custom line item

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdateCustomLineItem.html

#### Defined in

actions/billingconductor.ts:195

___

### UpdatePricingPlan

• **UpdatePricingPlan** = ``"billingconductor:UpdatePricingPlan"``

Grants permission to update a pricing plan

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdatePricingPlan.html

#### Defined in

actions/billingconductor.ts:201

___

### UpdatePricingRule

• **UpdatePricingRule** = ``"billingconductor:UpdatePricingRule"``

Grants permission to update a pricing rule

See https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdatePricingRule.html

#### Defined in

actions/billingconductor.ts:207
