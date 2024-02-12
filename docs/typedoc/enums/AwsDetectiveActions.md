[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDetectiveActions

# Enumeration: AwsDetectiveActions

All IAM policy actions for Amazon Detective (DETECTIVE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondetective.html

2024-02-12T09:56:56.859Z

## Table of contents

### Enumeration Members

- [AcceptInvitation](AwsDetectiveActions.md#acceptinvitation)
- [BatchGetGraphMemberDatasources](AwsDetectiveActions.md#batchgetgraphmemberdatasources)
- [BatchGetMembershipDatasources](AwsDetectiveActions.md#batchgetmembershipdatasources)
- [CreateGraph](AwsDetectiveActions.md#creategraph)
- [CreateMembers](AwsDetectiveActions.md#createmembers)
- [DeleteGraph](AwsDetectiveActions.md#deletegraph)
- [DeleteMembers](AwsDetectiveActions.md#deletemembers)
- [DescribeOrganizationConfiguration](AwsDetectiveActions.md#describeorganizationconfiguration)
- [DisableOrganizationAdminAccount](AwsDetectiveActions.md#disableorganizationadminaccount)
- [DisassociateMembership](AwsDetectiveActions.md#disassociatemembership)
- [EnableOrganizationAdminAccount](AwsDetectiveActions.md#enableorganizationadminaccount)
- [GetFreeTrialEligibility](AwsDetectiveActions.md#getfreetrialeligibility)
- [GetGraphIngestState](AwsDetectiveActions.md#getgraphingeststate)
- [GetInvestigation](AwsDetectiveActions.md#getinvestigation)
- [GetMembers](AwsDetectiveActions.md#getmembers)
- [GetPricingInformation](AwsDetectiveActions.md#getpricinginformation)
- [GetUsageInformation](AwsDetectiveActions.md#getusageinformation)
- [InvokeAssistant](AwsDetectiveActions.md#invokeassistant)
- [ListDatasourcePackages](AwsDetectiveActions.md#listdatasourcepackages)
- [ListGraphs](AwsDetectiveActions.md#listgraphs)
- [ListHighDegreeEntities](AwsDetectiveActions.md#listhighdegreeentities)
- [ListIndicators](AwsDetectiveActions.md#listindicators)
- [ListInvestigations](AwsDetectiveActions.md#listinvestigations)
- [ListInvitations](AwsDetectiveActions.md#listinvitations)
- [ListMembers](AwsDetectiveActions.md#listmembers)
- [ListOrganizationAdminAccount](AwsDetectiveActions.md#listorganizationadminaccount)
- [ListTagsForResource](AwsDetectiveActions.md#listtagsforresource)
- [RejectInvitation](AwsDetectiveActions.md#rejectinvitation)
- [SearchGraph](AwsDetectiveActions.md#searchgraph)
- [StartInvestigation](AwsDetectiveActions.md#startinvestigation)
- [StartMonitoringMember](AwsDetectiveActions.md#startmonitoringmember)
- [TagResource](AwsDetectiveActions.md#tagresource)
- [UntagResource](AwsDetectiveActions.md#untagresource)
- [UpdateDatasourcePackages](AwsDetectiveActions.md#updatedatasourcepackages)
- [UpdateInvestigationState](AwsDetectiveActions.md#updateinvestigationstate)
- [UpdateOrganizationConfiguration](AwsDetectiveActions.md#updateorganizationconfiguration)

## Enumeration Members

### AcceptInvitation

• **AcceptInvitation** = ``"detective:AcceptInvitation"``

Grants permission to accept an invitation to become a member of a behavior grap
h

See https://docs.aws.amazon.com/detective/latest/APIReference/API_AcceptInvitation.html

#### Defined in

actions/detective.ts:18

___

### BatchGetGraphMemberDatasources

• **BatchGetGraphMemberDatasources** = ``"detective:BatchGetGraphMemberDatasources"``

Grants permission to retrieve the datasource package history for the specified
member accounts in a behavior graph managed by this account

See https://docs.aws.amazon.com/detective/latest/APIReference/API_BatchGetGraphMemberDatasources.html

#### Defined in

actions/detective.ts:25

___

### BatchGetMembershipDatasources

• **BatchGetMembershipDatasources** = ``"detective:BatchGetMembershipDatasources"``

Grants permission to retrieve the datasource package history of the caller acco
unt for the specified graphs

See https://docs.aws.amazon.com/detective/latest/APIReference/API_BatchGetMembershipDatasources.html

#### Defined in

actions/detective.ts:32

___

### CreateGraph

• **CreateGraph** = ``"detective:CreateGraph"``

Grants permission to create a behavior graph and begin to aggregate security in
formation

See https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateGraph.html

#### Defined in

actions/detective.ts:39

___

### CreateMembers

• **CreateMembers** = ``"detective:CreateMembers"``

Grants permission to request the membership of one or more accounts in a behavi
or graph managed by this account

See https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateMembers.html

#### Defined in

actions/detective.ts:46

___

### DeleteGraph

• **DeleteGraph** = ``"detective:DeleteGraph"``

Grants permission to delete a behavior graph and stop aggregating security info
rmation

See https://docs.aws.amazon.com/detective/latest/APIReference/API_DeleteGraph.html

#### Defined in

actions/detective.ts:53

___

### DeleteMembers

• **DeleteMembers** = ``"detective:DeleteMembers"``

Grants permission to remove member accounts from a behavior graph managed by th
is account

See https://docs.aws.amazon.com/detective/latest/APIReference/API_DeleteMembers.html

#### Defined in

actions/detective.ts:60

___

### DescribeOrganizationConfiguration

• **DescribeOrganizationConfiguration** = ``"detective:DescribeOrganizationConfiguration"``

Grants permission to view the current configuration related to the Amazon Detec
tive integration with AWS Organizations

See https://docs.aws.amazon.com/detective/latest/APIReference/API_DescribeOrganizationConfiguration.html

#### Defined in

actions/detective.ts:67

___

### DisableOrganizationAdminAccount

• **DisableOrganizationAdminAccount** = ``"detective:DisableOrganizationAdminAccount"``

Grants permission to remove the Amazon Detective delegated administrator accoun
t for an organization

See https://docs.aws.amazon.com/detective/latest/APIReference/API_DisableOrganizationAdminAccount.html

#### Defined in

actions/detective.ts:74

___

### DisassociateMembership

• **DisassociateMembership** = ``"detective:DisassociateMembership"``

Grants permission to remove the association of this account with a behavior gra
ph

See https://docs.aws.amazon.com/detective/latest/APIReference/API_DisassociateMembership.html

#### Defined in

actions/detective.ts:81

___

### EnableOrganizationAdminAccount

• **EnableOrganizationAdminAccount** = ``"detective:EnableOrganizationAdminAccount"``

Grants permission to designate the Amazon Detective delegated administrator acc
ount for an organization

See https://docs.aws.amazon.com/detective/latest/APIReference/API_EnableOrganizationAdminAccount.html

#### Defined in

actions/detective.ts:88

___

### GetFreeTrialEligibility

• **GetFreeTrialEligibility** = ``"detective:GetFreeTrialEligibility"``

Grants permission to retrieve a behavior graph's eligibility for a free trial p
eriod

See https://docs.aws.amazon.com/detective/latest/adminguide/free-trial-overview.html

#### Defined in

actions/detective.ts:95

___

### GetGraphIngestState

• **GetGraphIngestState** = ``"detective:GetGraphIngestState"``

Grants permission to retrieve the data ingestion state of a behavior graph

See https://docs.aws.amazon.com/detective/latest/adminguide/detective-source-data-about.html

#### Defined in

actions/detective.ts:101

___

### GetInvestigation

• **GetInvestigation** = ``"detective:GetInvestigation"``

Grants permission to get an investigation's status and metadata

See https://docs.aws.amazon.com/detective/latest/APIReference/API_GetInvestigation.html

#### Defined in

actions/detective.ts:107

___

### GetMembers

• **GetMembers** = ``"detective:GetMembers"``

Grants permission to retrieve details on specified members of a behavior graph

See https://docs.aws.amazon.com/detective/latest/APIReference/API_GetMembers.html

#### Defined in

actions/detective.ts:113

___

### GetPricingInformation

• **GetPricingInformation** = ``"detective:GetPricingInformation"``

Grants permission to retrieve information about Amazon Detective's pricing

See https://docs.aws.amazon.com/detective/latest/adminguide/usage-projected-cost-calculation.html

#### Defined in

actions/detective.ts:119

___

### GetUsageInformation

• **GetUsageInformation** = ``"detective:GetUsageInformation"``

Grants permission to list usage information of a behavior graph

See https://docs.aws.amazon.com/detective/latest/adminguide/tracking-usage-logging.html

#### Defined in

actions/detective.ts:125

___

### InvokeAssistant

• **InvokeAssistant** = ``"detective:InvokeAssistant"``

Grants permission to invoke Detective's Assistant

See https://docs.aws.amazon.com/detective/latest/userguide/finding-groups-summary.html

#### Defined in

actions/detective.ts:131

___

### ListDatasourcePackages

• **ListDatasourcePackages** = ``"detective:ListDatasourcePackages"``

Grants permission to list a graph's datasource package ingest states and timest
amps for the most recent state changes in a behavior graph managed by this acco
unt

See https://docs.aws.amazon.com/detective/latest/APIReference/API_ListDatasourcePackages.html

#### Defined in

actions/detective.ts:139

___

### ListGraphs

• **ListGraphs** = ``"detective:ListGraphs"``

Grants permission to list behavior graphs managed by this account

See https://docs.aws.amazon.com/detective/latest/APIReference/API_ListGraphs.html

#### Defined in

actions/detective.ts:145

___

### ListHighDegreeEntities

• **ListHighDegreeEntities** = ``"detective:ListHighDegreeEntities"``

Grants permission to retrieve high volume entities whose relationships cannot b
e stored by Detective

See https://docs.aws.amazon.com/detective/latest/userguide/high-volume-entities.html

#### Defined in

actions/detective.ts:152

___

### ListIndicators

• **ListIndicators** = ``"detective:ListIndicators"``

Grants permission to list the indicators of an investigation

See https://docs.aws.amazon.com/detective/latest/APIReference/API_ListIndicators.html

#### Defined in

actions/detective.ts:158

___

### ListInvestigations

• **ListInvestigations** = ``"detective:ListInvestigations"``

Grants permission to list the investigations of a behavior graph

See https://docs.aws.amazon.com/detective/latest/APIReference/API_ListInvestigations.html

#### Defined in

actions/detective.ts:164

___

### ListInvitations

• **ListInvitations** = ``"detective:ListInvitations"``

Grants permission to retrieve details on the behavior graphs to which this acco
unt has been invited to join

See https://docs.aws.amazon.com/detective/latest/APIReference/API_ListInvitations.html

#### Defined in

actions/detective.ts:171

___

### ListMembers

• **ListMembers** = ``"detective:ListMembers"``

Grants permission to retrieve details on all members of a behavior graph

See https://docs.aws.amazon.com/detective/latest/APIReference/API_ListMembers.html

#### Defined in

actions/detective.ts:177

___

### ListOrganizationAdminAccount

• **ListOrganizationAdminAccount** = ``"detective:ListOrganizationAdminAccount"``

Grants permission to view the current Amazon Detective delegated administrator
account for an organization

See https://docs.aws.amazon.com/detective/latest/APIReference/API_ListOrganizationAdminAccounts.html

#### Defined in

actions/detective.ts:184

___

### ListTagsForResource

• **ListTagsForResource** = ``"detective:ListTagsForResource"``

Grants permission to list the tag values that are assigned to a behavior graph

See https://docs.aws.amazon.com/detective/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/detective.ts:190

___

### RejectInvitation

• **RejectInvitation** = ``"detective:RejectInvitation"``

Grants permission to reject an invitation to become a member of a behavior grap
h

See https://docs.aws.amazon.com/detective/latest/APIReference/API_RejectInvitation.html

#### Defined in

actions/detective.ts:197

___

### SearchGraph

• **SearchGraph** = ``"detective:SearchGraph"``

Grants permission to search the data stored in a behavior graph

See https://docs.aws.amazon.com/detective/latest/userguide/detective-search.html

#### Defined in

actions/detective.ts:203

___

### StartInvestigation

• **StartInvestigation** = ``"detective:StartInvestigation"``

Grants permission to start investigations

See https://docs.aws.amazon.com/detective/latest/APIReference/API_StartInvestigation.html

#### Defined in

actions/detective.ts:209

___

### StartMonitoringMember

• **StartMonitoringMember** = ``"detective:StartMonitoringMember"``

Grants permission to start data ingest for a member account that has a status o
f ACCEPTED_BUT_DISABLED

See https://docs.aws.amazon.com/detective/latest/APIReference/API_StartMonitoringMember.html

#### Defined in

actions/detective.ts:216

___

### TagResource

• **TagResource** = ``"detective:TagResource"``

Grants permission to assign tag values to a behavior graph

See https://docs.aws.amazon.com/detective/latest/APIReference/API_TagResource.html

#### Defined in

actions/detective.ts:222

___

### UntagResource

• **UntagResource** = ``"detective:UntagResource"``

Grants permission to remove tag values from a behavior graph

See https://docs.aws.amazon.com/detective/latest/APIReference/API_UntagResource.html

#### Defined in

actions/detective.ts:228

___

### UpdateDatasourcePackages

• **UpdateDatasourcePackages** = ``"detective:UpdateDatasourcePackages"``

Grants permission to enable or disable datasource package(s) in a behavior grap
h managed by this account

See https://docs.aws.amazon.com/detective/latest/APIReference/API_UpdateDatasourcePackages.html

#### Defined in

actions/detective.ts:235

___

### UpdateInvestigationState

• **UpdateInvestigationState** = ``"detective:UpdateInvestigationState"``

Grants permission to update an investigation's state and metadata

See https://docs.aws.amazon.com/detective/latest/APIReference/API_UpdateInvestigationState.html

#### Defined in

actions/detective.ts:241

___

### UpdateOrganizationConfiguration

• **UpdateOrganizationConfiguration** = ``"detective:UpdateOrganizationConfiguration"``

Grants permission to update the current configuration related to the Amazon Det
ective integration with AWS Organizations

See https://docs.aws.amazon.com/detective/latest/APIReference/API_UpdateOrganizationConfiguration.html

#### Defined in

actions/detective.ts:248
