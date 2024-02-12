[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSecurityhubActions

# Enumeration: AwsSecurityhubActions

All IAM policy actions for AWS Security Hub (SECURITYHUB)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecurityhub.html

2024-02-12T09:59:09.684Z

## Table of contents

### Enumeration Members

- [AcceptAdministratorInvitation](AwsSecurityhubActions.md#acceptadministratorinvitation)
- [AcceptInvitation](AwsSecurityhubActions.md#acceptinvitation)
- [BatchDeleteAutomationRules](AwsSecurityhubActions.md#batchdeleteautomationrules)
- [BatchDisableStandards](AwsSecurityhubActions.md#batchdisablestandards)
- [BatchEnableStandards](AwsSecurityhubActions.md#batchenablestandards)
- [BatchGetAutomationRules](AwsSecurityhubActions.md#batchgetautomationrules)
- [BatchGetConfigurationPolicyAssociations](AwsSecurityhubActions.md#batchgetconfigurationpolicyassociations)
- [BatchGetControlEvaluations](AwsSecurityhubActions.md#batchgetcontrolevaluations)
- [BatchGetSecurityControls](AwsSecurityhubActions.md#batchgetsecuritycontrols)
- [BatchGetStandardsControlAssociations](AwsSecurityhubActions.md#batchgetstandardscontrolassociations)
- [BatchImportFindings](AwsSecurityhubActions.md#batchimportfindings)
- [BatchUpdateAutomationRules](AwsSecurityhubActions.md#batchupdateautomationrules)
- [BatchUpdateFindings](AwsSecurityhubActions.md#batchupdatefindings)
- [BatchUpdateStandardsControlAssociations](AwsSecurityhubActions.md#batchupdatestandardscontrolassociations)
- [CreateActionTarget](AwsSecurityhubActions.md#createactiontarget)
- [CreateAutomationRule](AwsSecurityhubActions.md#createautomationrule)
- [CreateConfigurationPolicy](AwsSecurityhubActions.md#createconfigurationpolicy)
- [CreateFindingAggregator](AwsSecurityhubActions.md#createfindingaggregator)
- [CreateInsight](AwsSecurityhubActions.md#createinsight)
- [CreateMembers](AwsSecurityhubActions.md#createmembers)
- [DeclineInvitations](AwsSecurityhubActions.md#declineinvitations)
- [DeleteActionTarget](AwsSecurityhubActions.md#deleteactiontarget)
- [DeleteConfigurationPolicy](AwsSecurityhubActions.md#deleteconfigurationpolicy)
- [DeleteFindingAggregator](AwsSecurityhubActions.md#deletefindingaggregator)
- [DeleteInsight](AwsSecurityhubActions.md#deleteinsight)
- [DeleteInvitations](AwsSecurityhubActions.md#deleteinvitations)
- [DeleteMembers](AwsSecurityhubActions.md#deletemembers)
- [DescribeActionTargets](AwsSecurityhubActions.md#describeactiontargets)
- [DescribeHub](AwsSecurityhubActions.md#describehub)
- [DescribeOrganizationConfiguration](AwsSecurityhubActions.md#describeorganizationconfiguration)
- [DescribeProducts](AwsSecurityhubActions.md#describeproducts)
- [DescribeStandards](AwsSecurityhubActions.md#describestandards)
- [DescribeStandardsControls](AwsSecurityhubActions.md#describestandardscontrols)
- [DisableImportFindingsForProduct](AwsSecurityhubActions.md#disableimportfindingsforproduct)
- [DisableOrganizationAdminAccount](AwsSecurityhubActions.md#disableorganizationadminaccount)
- [DisableSecurityHub](AwsSecurityhubActions.md#disablesecurityhub)
- [DisassociateFromAdministratorAccount](AwsSecurityhubActions.md#disassociatefromadministratoraccount)
- [DisassociateFromMasterAccount](AwsSecurityhubActions.md#disassociatefrommasteraccount)
- [DisassociateMembers](AwsSecurityhubActions.md#disassociatemembers)
- [EnableImportFindingsForProduct](AwsSecurityhubActions.md#enableimportfindingsforproduct)
- [EnableOrganizationAdminAccount](AwsSecurityhubActions.md#enableorganizationadminaccount)
- [EnableSecurityHub](AwsSecurityhubActions.md#enablesecurityhub)
- [GetAdhocInsightResults](AwsSecurityhubActions.md#getadhocinsightresults)
- [GetAdministratorAccount](AwsSecurityhubActions.md#getadministratoraccount)
- [GetConfigurationPolicy](AwsSecurityhubActions.md#getconfigurationpolicy)
- [GetConfigurationPolicyAssociation](AwsSecurityhubActions.md#getconfigurationpolicyassociation)
- [GetControlFindingSummary](AwsSecurityhubActions.md#getcontrolfindingsummary)
- [GetEnabledStandards](AwsSecurityhubActions.md#getenabledstandards)
- [GetFindingAggregator](AwsSecurityhubActions.md#getfindingaggregator)
- [GetFindingHistory](AwsSecurityhubActions.md#getfindinghistory)
- [GetFindings](AwsSecurityhubActions.md#getfindings)
- [GetFreeTrialEndDate](AwsSecurityhubActions.md#getfreetrialenddate)
- [GetFreeTrialUsage](AwsSecurityhubActions.md#getfreetrialusage)
- [GetInsightFindingTrend](AwsSecurityhubActions.md#getinsightfindingtrend)
- [GetInsightResults](AwsSecurityhubActions.md#getinsightresults)
- [GetInsights](AwsSecurityhubActions.md#getinsights)
- [GetInvitationsCount](AwsSecurityhubActions.md#getinvitationscount)
- [GetMasterAccount](AwsSecurityhubActions.md#getmasteraccount)
- [GetMembers](AwsSecurityhubActions.md#getmembers)
- [GetSecurityControlDefinition](AwsSecurityhubActions.md#getsecuritycontroldefinition)
- [GetUsage](AwsSecurityhubActions.md#getusage)
- [InviteMembers](AwsSecurityhubActions.md#invitemembers)
- [ListAutomationRules](AwsSecurityhubActions.md#listautomationrules)
- [ListConfigurationPolicies](AwsSecurityhubActions.md#listconfigurationpolicies)
- [ListConfigurationPolicyAssociations](AwsSecurityhubActions.md#listconfigurationpolicyassociations)
- [ListControlEvaluationSummaries](AwsSecurityhubActions.md#listcontrolevaluationsummaries)
- [ListEnabledProductsForImport](AwsSecurityhubActions.md#listenabledproductsforimport)
- [ListFindingAggregators](AwsSecurityhubActions.md#listfindingaggregators)
- [ListInvitations](AwsSecurityhubActions.md#listinvitations)
- [ListMembers](AwsSecurityhubActions.md#listmembers)
- [ListOrganizationAdminAccounts](AwsSecurityhubActions.md#listorganizationadminaccounts)
- [ListSecurityControlDefinitions](AwsSecurityhubActions.md#listsecuritycontroldefinitions)
- [ListStandardsControlAssociations](AwsSecurityhubActions.md#liststandardscontrolassociations)
- [ListTagsForResource](AwsSecurityhubActions.md#listtagsforresource)
- [SendFindingEvents](AwsSecurityhubActions.md#sendfindingevents)
- [SendInsightEvents](AwsSecurityhubActions.md#sendinsightevents)
- [StartConfigurationPolicyAssociation](AwsSecurityhubActions.md#startconfigurationpolicyassociation)
- [StartConfigurationPolicyDisassociation](AwsSecurityhubActions.md#startconfigurationpolicydisassociation)
- [TagResource](AwsSecurityhubActions.md#tagresource)
- [UntagResource](AwsSecurityhubActions.md#untagresource)
- [UpdateActionTarget](AwsSecurityhubActions.md#updateactiontarget)
- [UpdateConfigurationPolicy](AwsSecurityhubActions.md#updateconfigurationpolicy)
- [UpdateFindingAggregator](AwsSecurityhubActions.md#updatefindingaggregator)
- [UpdateFindings](AwsSecurityhubActions.md#updatefindings)
- [UpdateInsight](AwsSecurityhubActions.md#updateinsight)
- [UpdateOrganizationConfiguration](AwsSecurityhubActions.md#updateorganizationconfiguration)
- [UpdateSecurityControl](AwsSecurityhubActions.md#updatesecuritycontrol)
- [UpdateSecurityHubConfiguration](AwsSecurityhubActions.md#updatesecurityhubconfiguration)
- [UpdateStandardsControl](AwsSecurityhubActions.md#updatestandardscontrol)

## Enumeration Members

### AcceptAdministratorInvitation

• **AcceptAdministratorInvitation** = ``"securityhub:AcceptAdministratorInvitation"``

Grants permission to accept Security Hub invitations to become a member account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AcceptAdministratorInvitation.html

#### Defined in

actions/securityhub.ts:17

___

### AcceptInvitation

• **AcceptInvitation** = ``"securityhub:AcceptInvitation"``

Grants permission to accept Security Hub invitations to become a member account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AcceptInvitation.html

#### Defined in

actions/securityhub.ts:23

___

### BatchDeleteAutomationRules

• **BatchDeleteAutomationRules** = ``"securityhub:BatchDeleteAutomationRules"``

Grants permission to delete one or more automation rules in Security Hub

See https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules

#### Defined in

actions/securityhub.ts:29

___

### BatchDisableStandards

• **BatchDisableStandards** = ``"securityhub:BatchDisableStandards"``

Grants permission to disable standards in Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchDisableStandards.html

#### Defined in

actions/securityhub.ts:35

___

### BatchEnableStandards

• **BatchEnableStandards** = ``"securityhub:BatchEnableStandards"``

Grants permission to enable standards in Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchEnableStandards.html

#### Defined in

actions/securityhub.ts:41

___

### BatchGetAutomationRules

• **BatchGetAutomationRules** = ``"securityhub:BatchGetAutomationRules"``

Grants permission to retrieve a list of details for automation rules from Secur
ity Hub based on rule Amazon Resource Names (ARNs)

See https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules

#### Defined in

actions/securityhub.ts:48

___

### BatchGetConfigurationPolicyAssociations

• **BatchGetConfigurationPolicyAssociations** = ``"securityhub:BatchGetConfigurationPolicyAssociations"``

Grants permission to retrieve information about configuration policies associat
ed with a specific list of member accounts and organizational units of the call
ing account's organization

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchGetConfigurationPolicyAssociations.html

#### Defined in

actions/securityhub.ts:56

___

### BatchGetControlEvaluations

• **BatchGetControlEvaluations** = ``"securityhub:BatchGetControlEvaluations"``

Grants permission to get the enablement and compliance status of controls, the
findings count for controls, and the overall security score for controls on the
Security Hub console

See https://docs.aws.amazon.com/securityhub/latest/userguide/iam-permissions-controls-standards.html

#### Defined in

actions/securityhub.ts:64

___

### BatchGetSecurityControls

• **BatchGetSecurityControls** = ``"securityhub:BatchGetSecurityControls"``

Grants permission to get details about specific security controls identified by
ID or ARN

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchGetSecurityControls.html

#### Defined in

actions/securityhub.ts:71

___

### BatchGetStandardsControlAssociations

• **BatchGetStandardsControlAssociations** = ``"securityhub:BatchGetStandardsControlAssociations"``

Grants permission to get the enablement status of a batch of security controls
in standards

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchGetStandardsControlAssociations.html

#### Defined in

actions/securityhub.ts:78

___

### BatchImportFindings

• **BatchImportFindings** = ``"securityhub:BatchImportFindings"``

Grants permission to import findings into Security Hub from an integrated produ
ct

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html

#### Defined in

actions/securityhub.ts:85

___

### BatchUpdateAutomationRules

• **BatchUpdateAutomationRules** = ``"securityhub:BatchUpdateAutomationRules"``

Grants permission to update one or more automation rules from Security Hub base
d on rule Amazon Resource Names (ARNs) and input parameters

See https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules

#### Defined in

actions/securityhub.ts:92

___

### BatchUpdateFindings

• **BatchUpdateFindings** = ``"securityhub:BatchUpdateFindings"``

Grants permission to update customer-controlled fields for a selected set of Se
curity Hub findings

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html

#### Defined in

actions/securityhub.ts:99

___

### BatchUpdateStandardsControlAssociations

• **BatchUpdateStandardsControlAssociations** = ``"securityhub:BatchUpdateStandardsControlAssociations"``

Grants permission to update the enablement status of a batch of security contro
ls in standards

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html

#### Defined in

actions/securityhub.ts:106

___

### CreateActionTarget

• **CreateActionTarget** = ``"securityhub:CreateActionTarget"``

Grants permission to create custom actions in Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateActionTarget.html

#### Defined in

actions/securityhub.ts:112

___

### CreateAutomationRule

• **CreateAutomationRule** = ``"securityhub:CreateAutomationRule"``

Grants permission to create an automation rule based on input parameters

See https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules

#### Defined in

actions/securityhub.ts:118

___

### CreateConfigurationPolicy

• **CreateConfigurationPolicy** = ``"securityhub:CreateConfigurationPolicy"``

Grants permission to create a configuration policy to manage organization membe
r settings in Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateConfigurationPolicy.html

#### Defined in

actions/securityhub.ts:125

___

### CreateFindingAggregator

• **CreateFindingAggregator** = ``"securityhub:CreateFindingAggregator"``

Grants permission to create a finding aggregator, which contains the cross-Regi
on finding aggregation configuration

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindingAggregator.html

#### Defined in

actions/securityhub.ts:132

___

### CreateInsight

• **CreateInsight** = ``"securityhub:CreateInsight"``

Grants permission to create insights in Security Hub. Insights are collections
of related findings

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateInsight.html

#### Defined in

actions/securityhub.ts:139

___

### CreateMembers

• **CreateMembers** = ``"securityhub:CreateMembers"``

Grants permission to create member accounts in Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateMembers.html

#### Defined in

actions/securityhub.ts:145

___

### DeclineInvitations

• **DeclineInvitations** = ``"securityhub:DeclineInvitations"``

Grants permission to decline Security Hub invitations to become a member accoun
t

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeclineInvitations.html

#### Defined in

actions/securityhub.ts:152

___

### DeleteActionTarget

• **DeleteActionTarget** = ``"securityhub:DeleteActionTarget"``

Grants permission to delete custom actions in Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteActionTarget.html

#### Defined in

actions/securityhub.ts:158

___

### DeleteConfigurationPolicy

• **DeleteConfigurationPolicy** = ``"securityhub:DeleteConfigurationPolicy"``

Grants permission to delete an existing configuration policy

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteConfigurationPolicy.html

#### Defined in

actions/securityhub.ts:164

___

### DeleteFindingAggregator

• **DeleteFindingAggregator** = ``"securityhub:DeleteFindingAggregator"``

Grants permission to delete a finding aggregator, which disables finding aggreg
ation across Regions

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteFindingAggregator.html

#### Defined in

actions/securityhub.ts:171

___

### DeleteInsight

• **DeleteInsight** = ``"securityhub:DeleteInsight"``

Grants permission to delete insights from Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInsight.html

#### Defined in

actions/securityhub.ts:177

___

### DeleteInvitations

• **DeleteInvitations** = ``"securityhub:DeleteInvitations"``

Grants permission to delete Security Hub invitations to become a member account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInvitations.html

#### Defined in

actions/securityhub.ts:183

___

### DeleteMembers

• **DeleteMembers** = ``"securityhub:DeleteMembers"``

Grants permission to delete Security Hub member accounts

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteMembers.html

#### Defined in

actions/securityhub.ts:189

___

### DescribeActionTargets

• **DescribeActionTargets** = ``"securityhub:DescribeActionTargets"``

Grants permission to retrieve a list of custom actions using the API

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeActionTargets.html

#### Defined in

actions/securityhub.ts:195

___

### DescribeHub

• **DescribeHub** = ``"securityhub:DescribeHub"``

Grants permission to retrieve information about the hub resource in your accoun
t

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeHub.html

#### Defined in

actions/securityhub.ts:202

___

### DescribeOrganizationConfiguration

• **DescribeOrganizationConfiguration** = ``"securityhub:DescribeOrganizationConfiguration"``

Grants permission to describe the organization configuration for Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeOrganizationConfiguration.html

#### Defined in

actions/securityhub.ts:208

___

### DescribeProducts

• **DescribeProducts** = ``"securityhub:DescribeProducts"``

Grants permission to retrieve information about the available Security Hub prod
uct integrations

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeProducts.html

#### Defined in

actions/securityhub.ts:215

___

### DescribeStandards

• **DescribeStandards** = ``"securityhub:DescribeStandards"``

Grants permission to retrieve information about Security Hub standards

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html

#### Defined in

actions/securityhub.ts:221

___

### DescribeStandardsControls

• **DescribeStandardsControls** = ``"securityhub:DescribeStandardsControls"``

Grants permission to retrieve information about Security Hub standards controls

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandardsControls.html

#### Defined in

actions/securityhub.ts:227

___

### DisableImportFindingsForProduct

• **DisableImportFindingsForProduct** = ``"securityhub:DisableImportFindingsForProduct"``

Grants permission to disable the findings importing for a Security Hub integrat
ed product

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableImportFindingsForProduct.html

#### Defined in

actions/securityhub.ts:234

___

### DisableOrganizationAdminAccount

• **DisableOrganizationAdminAccount** = ``"securityhub:DisableOrganizationAdminAccount"``

Grants permission to remove the Security Hub administrator account for your org
anization

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableOrganizationAdminAccount.html

#### Defined in

actions/securityhub.ts:241

___

### DisableSecurityHub

• **DisableSecurityHub** = ``"securityhub:DisableSecurityHub"``

Grants permission to disable Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableSecurityHub.html

#### Defined in

actions/securityhub.ts:247

___

### DisassociateFromAdministratorAccount

• **DisassociateFromAdministratorAccount** = ``"securityhub:DisassociateFromAdministratorAccount"``

Grants permission to a Security Hub member account to disassociate from the ass
ociated administrator account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateFromAdministratorAccount.html

#### Defined in

actions/securityhub.ts:254

___

### DisassociateFromMasterAccount

• **DisassociateFromMasterAccount** = ``"securityhub:DisassociateFromMasterAccount"``

Grants permission to a Security Hub member account to disassociate from the ass
ociated master account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateFromMasterAccount.html

#### Defined in

actions/securityhub.ts:261

___

### DisassociateMembers

• **DisassociateMembers** = ``"securityhub:DisassociateMembers"``

Grants permission to disassociate Security Hub member accounts from the associa
ted administrator account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateMembers.html

#### Defined in

actions/securityhub.ts:268

___

### EnableImportFindingsForProduct

• **EnableImportFindingsForProduct** = ``"securityhub:EnableImportFindingsForProduct"``

Grants permission to enable the findings importing for a Security Hub integrate
d product

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableImportFindingsForProduct.html

#### Defined in

actions/securityhub.ts:275

___

### EnableOrganizationAdminAccount

• **EnableOrganizationAdminAccount** = ``"securityhub:EnableOrganizationAdminAccount"``

Grants permission to designate a Security Hub administrator account for your or
ganization

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableOrganizationAdminAccount.html

#### Defined in

actions/securityhub.ts:282

___

### EnableSecurityHub

• **EnableSecurityHub** = ``"securityhub:EnableSecurityHub"``

Grants permission to enable Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableSecurityHub.html

#### Defined in

actions/securityhub.ts:288

___

### GetAdhocInsightResults

• **GetAdhocInsightResults** = ``"securityhub:GetAdhocInsightResults"``

Grants permission to retrieve insight results by providing a set of filters ins
tead of an insight ARN

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetAdhocInsightResults.html

#### Defined in

actions/securityhub.ts:295

___

### GetAdministratorAccount

• **GetAdministratorAccount** = ``"securityhub:GetAdministratorAccount"``

Grants permission to retrieve details about the Security Hub administrator acco
unt

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetAdministratorAccount.html

#### Defined in

actions/securityhub.ts:302

___

### GetConfigurationPolicy

• **GetConfigurationPolicy** = ``"securityhub:GetConfigurationPolicy"``

Grants permission to get a complete overview of one configuration policy create
d by the calling account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetConfigurationPolicy.html

#### Defined in

actions/securityhub.ts:309

___

### GetConfigurationPolicyAssociation

• **GetConfigurationPolicyAssociation** = ``"securityhub:GetConfigurationPolicyAssociation"``

Grants permission to retrieve information about a configuration policy associat
ed with a member account or organizational unit of the calling account's organi
zation

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetConfigurationPolicyAssociation.html

#### Defined in

actions/securityhub.ts:317

___

### GetControlFindingSummary

• **GetControlFindingSummary** = ``"securityhub:GetControlFindingSummary"``

Grants permission to retrieve a security score and counts of finding and contro
l statuses for a security standard

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetControlFindingSummary.html

#### Defined in

actions/securityhub.ts:324

___

### GetEnabledStandards

• **GetEnabledStandards** = ``"securityhub:GetEnabledStandards"``

Grants permission to retrieve a list of the standards that are enabled in Secur
ity Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetEnabledStandards.html

#### Defined in

actions/securityhub.ts:331

___

### GetFindingAggregator

• **GetFindingAggregator** = ``"securityhub:GetFindingAggregator"``

Grants permission to retrieve details for a finding aggregator, which configure
s finding aggregation across Regions

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindingAggregator.html

#### Defined in

actions/securityhub.ts:338

___

### GetFindingHistory

• **GetFindingHistory** = ``"securityhub:GetFindingHistory"``

Grants permission to retrieve a list of finding history from Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindingHistory.html

#### Defined in

actions/securityhub.ts:344

___

### GetFindings

• **GetFindings** = ``"securityhub:GetFindings"``

Grants permission to retrieve a list of findings from Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindings.html

#### Defined in

actions/securityhub.ts:350

___

### GetFreeTrialEndDate

• **GetFreeTrialEndDate** = ``"securityhub:GetFreeTrialEndDate"``

Grants permission to retrieve the end date for an account's free trial of Secur
ity Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFreeTrialEndDate.html

#### Defined in

actions/securityhub.ts:357

___

### GetFreeTrialUsage

• **GetFreeTrialUsage** = ``"securityhub:GetFreeTrialUsage"``

Grants permission to retrieve information about Security Hub usage during the f
ree trial period

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFreeTrialUsage.html

#### Defined in

actions/securityhub.ts:364

___

### GetInsightFindingTrend

• **GetInsightFindingTrend** = ``"securityhub:GetInsightFindingTrend"``

Grants permission to retrieve an insight finding trend from Security Hub in ord
er to generate a graph

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsightFindingTrend.html

#### Defined in

actions/securityhub.ts:371

___

### GetInsightResults

• **GetInsightResults** = ``"securityhub:GetInsightResults"``

Grants permission to retrieve insight results from Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsightResults.html

#### Defined in

actions/securityhub.ts:377

___

### GetInsights

• **GetInsights** = ``"securityhub:GetInsights"``

Grants permission to retrieve Security Hub insights

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsights.html

#### Defined in

actions/securityhub.ts:383

___

### GetInvitationsCount

• **GetInvitationsCount** = ``"securityhub:GetInvitationsCount"``

Grants permission to retrieve the count of Security Hub membership invitations
sent to the account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInvitationsCount.html

#### Defined in

actions/securityhub.ts:390

___

### GetMasterAccount

• **GetMasterAccount** = ``"securityhub:GetMasterAccount"``

Grants permission to retrieve details about the Security Hub master account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMasterAccount.html

#### Defined in

actions/securityhub.ts:396

___

### GetMembers

• **GetMembers** = ``"securityhub:GetMembers"``

Grants permission to retrieve the details of Security Hub member accounts

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMembers.html

#### Defined in

actions/securityhub.ts:402

___

### GetSecurityControlDefinition

• **GetSecurityControlDefinition** = ``"securityhub:GetSecurityControlDefinition"``

Grants permission to get the definition details of a specific security control
identified by ID

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetSecurityControlDefinition.html

#### Defined in

actions/securityhub.ts:409

___

### GetUsage

• **GetUsage** = ``"securityhub:GetUsage"``

Grants permission to retrieve information about Security Hub usage by accounts

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetUsage.html

#### Defined in

actions/securityhub.ts:415

___

### InviteMembers

• **InviteMembers** = ``"securityhub:InviteMembers"``

Grants permission to invite other AWS accounts to become Security Hub member ac
counts

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_InviteMembers.html

#### Defined in

actions/securityhub.ts:422

___

### ListAutomationRules

• **ListAutomationRules** = ``"securityhub:ListAutomationRules"``

Grants permission to retrieve a list of automation rules and their metadata for
the calling account from Security Hub

See https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules

#### Defined in

actions/securityhub.ts:429

___

### ListConfigurationPolicies

• **ListConfigurationPolicies** = ``"securityhub:ListConfigurationPolicies"``

Grants permission to list the summaries of all configuration policies created b
y the calling account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListConfigurationPolicies.html

#### Defined in

actions/securityhub.ts:436

___

### ListConfigurationPolicyAssociations

• **ListConfigurationPolicyAssociations** = ``"securityhub:ListConfigurationPolicyAssociations"``

Grants permission to retrieve information about all configuration policies asso
ciationed with all member accounts and organizational units of the calling acco
unt's organization

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListConfigurationPolicyAssociations.html

#### Defined in

actions/securityhub.ts:444

___

### ListControlEvaluationSummaries

• **ListControlEvaluationSummaries** = ``"securityhub:ListControlEvaluationSummaries"``

Grants permission to retrieve a list of controls for a standard, including the
control IDs, statuses and finding counts

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListControlEvaluationSummaries.html

#### Defined in

actions/securityhub.ts:451

___

### ListEnabledProductsForImport

• **ListEnabledProductsForImport** = ``"securityhub:ListEnabledProductsForImport"``

Grants permission to retrieve the Security Hub integrated products that are cur
rently enabled

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListEnabledProductsForImport.html

#### Defined in

actions/securityhub.ts:458

___

### ListFindingAggregators

• **ListFindingAggregators** = ``"securityhub:ListFindingAggregators"``

Grants permission to retrieve a list of finding aggregators, which contain the
cross-Region finding aggregation configuration

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindingAggregator.html

#### Defined in

actions/securityhub.ts:465

___

### ListInvitations

• **ListInvitations** = ``"securityhub:ListInvitations"``

Grants permission to retrieve the Security Hub invitations sent to the account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListInvitations.html

#### Defined in

actions/securityhub.ts:471

___

### ListMembers

• **ListMembers** = ``"securityhub:ListMembers"``

Grants permission to retrieve details about Security Hub member accounts associ
ated with the administrator account

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListMembers.html

#### Defined in

actions/securityhub.ts:478

___

### ListOrganizationAdminAccounts

• **ListOrganizationAdminAccounts** = ``"securityhub:ListOrganizationAdminAccounts"``

Grants permission to list the Security Hub administrator accounts for your orga
nization

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListOrganizationAdminAccounts.html

#### Defined in

actions/securityhub.ts:485

___

### ListSecurityControlDefinitions

• **ListSecurityControlDefinitions** = ``"securityhub:ListSecurityControlDefinitions"``

Grants permission to retrieve a list of security control definitions, which con
tain details for security controls in the current region

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListSecurityControlDefinitions.html

#### Defined in

actions/securityhub.ts:492

___

### ListStandardsControlAssociations

• **ListStandardsControlAssociations** = ``"securityhub:ListStandardsControlAssociations"``

Grants permission to list the enablement status of a security control in standa
rds

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListStandardsControlAssociations.html

#### Defined in

actions/securityhub.ts:499

___

### ListTagsForResource

• **ListTagsForResource** = ``"securityhub:ListTagsForResource"``

Grants permission to list of tags associated with a resource

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListTagsForResource.html

#### Defined in

actions/securityhub.ts:505

___

### SendFindingEvents

• **SendFindingEvents** = ``"securityhub:SendFindingEvents"``

Grants permission to use a custom action to send Security Hub findings to Amazo
n EventBridge

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_SendFindingEvents.html

#### Defined in

actions/securityhub.ts:512

___

### SendInsightEvents

• **SendInsightEvents** = ``"securityhub:SendInsightEvents"``

Grants permission to use a custom action to send Security Hub insights to Amazo
n EventBridge

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_SendInsightEvents.html

#### Defined in

actions/securityhub.ts:519

___

### StartConfigurationPolicyAssociation

• **StartConfigurationPolicyAssociation** = ``"securityhub:StartConfigurationPolicyAssociation"``

Grants permission to associate a configuration policy with a member account or
organizational unit in the calling account's organization

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_StartConfigurationPolicyAssociation.html

#### Defined in

actions/securityhub.ts:526

___

### StartConfigurationPolicyDisassociation

• **StartConfigurationPolicyDisassociation** = ``"securityhub:StartConfigurationPolicyDisassociation"``

Grants permission to remove a configuration policy association from a member ac
count or organizational unit in the calling account's organization

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_StartConfigurationPolicyDisassociation.html

#### Defined in

actions/securityhub.ts:533

___

### TagResource

• **TagResource** = ``"securityhub:TagResource"``

Grants permission to add tags to a Security Hub resource

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_TagResource.html

#### Defined in

actions/securityhub.ts:539

___

### UntagResource

• **UntagResource** = ``"securityhub:UntagResource"``

Grants permission to remove tags from a Security Hub resource

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UntagResource.html

#### Defined in

actions/securityhub.ts:545

___

### UpdateActionTarget

• **UpdateActionTarget** = ``"securityhub:UpdateActionTarget"``

Grants permission to update custom actions in Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateActionTarget.html

#### Defined in

actions/securityhub.ts:551

___

### UpdateConfigurationPolicy

• **UpdateConfigurationPolicy** = ``"securityhub:UpdateConfigurationPolicy"``

Grants permission to update an existing configuration policy

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateConfigurationPolicy.html

#### Defined in

actions/securityhub.ts:557

___

### UpdateFindingAggregator

• **UpdateFindingAggregator** = ``"securityhub:UpdateFindingAggregator"``

Grants permission to update a finding aggregator, which contains the cross-Regi
on finding aggregation configuration

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindingAggregator.html

#### Defined in

actions/securityhub.ts:564

___

### UpdateFindings

• **UpdateFindings** = ``"securityhub:UpdateFindings"``

Grants permission to update Security Hub findings

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindings.html

#### Defined in

actions/securityhub.ts:570

___

### UpdateInsight

• **UpdateInsight** = ``"securityhub:UpdateInsight"``

Grants permission to update insights in Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateInsight.html

#### Defined in

actions/securityhub.ts:576

___

### UpdateOrganizationConfiguration

• **UpdateOrganizationConfiguration** = ``"securityhub:UpdateOrganizationConfiguration"``

Grants permission to update the organization configuration for Security Hub

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateOrganizationConfiguration.html

#### Defined in

actions/securityhub.ts:582

___

### UpdateSecurityControl

• **UpdateSecurityControl** = ``"securityhub:UpdateSecurityControl"``

Grants permission to update properties of a specific security control identifie
d by ID or ARN

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateSecurityControl.html

#### Defined in

actions/securityhub.ts:589

___

### UpdateSecurityHubConfiguration

• **UpdateSecurityHubConfiguration** = ``"securityhub:UpdateSecurityHubConfiguration"``

Grants permission to update Security Hub configuration

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateSecurityHubConfiguration.html

#### Defined in

actions/securityhub.ts:595

___

### UpdateStandardsControl

• **UpdateStandardsControl** = ``"securityhub:UpdateStandardsControl"``

Grants permission to update Security Hub standards controls

See https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateStandardsControl.html

#### Defined in

actions/securityhub.ts:601
