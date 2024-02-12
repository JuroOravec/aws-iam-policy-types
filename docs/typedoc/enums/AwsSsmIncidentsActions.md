[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSsmIncidentsActions

# Enumeration: AwsSsmIncidentsActions

All IAM policy actions for AWS Systems Manager Incident Manager (SSM-INCIDENTS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanager.html

2024-02-12T09:59:27.307Z

## Table of contents

### Enumeration Members

- [BatchGetIncidentFindings](AwsSsmIncidentsActions.md#batchgetincidentfindings)
- [CreateReplicationSet](AwsSsmIncidentsActions.md#createreplicationset)
- [CreateResponsePlan](AwsSsmIncidentsActions.md#createresponseplan)
- [CreateTimelineEvent](AwsSsmIncidentsActions.md#createtimelineevent)
- [DeleteIncidentRecord](AwsSsmIncidentsActions.md#deleteincidentrecord)
- [DeleteReplicationSet](AwsSsmIncidentsActions.md#deletereplicationset)
- [DeleteResourcePolicy](AwsSsmIncidentsActions.md#deleteresourcepolicy)
- [DeleteResponsePlan](AwsSsmIncidentsActions.md#deleteresponseplan)
- [DeleteTimelineEvent](AwsSsmIncidentsActions.md#deletetimelineevent)
- [GetIncidentRecord](AwsSsmIncidentsActions.md#getincidentrecord)
- [GetReplicationSet](AwsSsmIncidentsActions.md#getreplicationset)
- [GetResourcePolicies](AwsSsmIncidentsActions.md#getresourcepolicies)
- [GetResponsePlan](AwsSsmIncidentsActions.md#getresponseplan)
- [GetTimelineEvent](AwsSsmIncidentsActions.md#gettimelineevent)
- [ListIncidentFindings](AwsSsmIncidentsActions.md#listincidentfindings)
- [ListIncidentRecords](AwsSsmIncidentsActions.md#listincidentrecords)
- [ListRelatedItems](AwsSsmIncidentsActions.md#listrelateditems)
- [ListReplicationSets](AwsSsmIncidentsActions.md#listreplicationsets)
- [ListResponsePlans](AwsSsmIncidentsActions.md#listresponseplans)
- [ListTagsForResource](AwsSsmIncidentsActions.md#listtagsforresource)
- [ListTimelineEvents](AwsSsmIncidentsActions.md#listtimelineevents)
- [PutResourcePolicy](AwsSsmIncidentsActions.md#putresourcepolicy)
- [StartIncident](AwsSsmIncidentsActions.md#startincident)
- [TagResource](AwsSsmIncidentsActions.md#tagresource)
- [UntagResource](AwsSsmIncidentsActions.md#untagresource)
- [UpdateDeletionProtection](AwsSsmIncidentsActions.md#updatedeletionprotection)
- [UpdateIncidentRecord](AwsSsmIncidentsActions.md#updateincidentrecord)
- [UpdateRelatedItems](AwsSsmIncidentsActions.md#updaterelateditems)
- [UpdateReplicationSet](AwsSsmIncidentsActions.md#updatereplicationset)
- [UpdateResponsePlan](AwsSsmIncidentsActions.md#updateresponseplan)
- [UpdateTimelineEvent](AwsSsmIncidentsActions.md#updatetimelineevent)

## Enumeration Members

### BatchGetIncidentFindings

• **BatchGetIncidentFindings** = ``"ssm-incidents:BatchGetIncidentFindings"``

Grants permission to retrieve details about specified findings for an incident
record

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_BatchGetIncidentFindings.html

#### Defined in

actions/ssm-incidents.ts:18

___

### CreateReplicationSet

• **CreateReplicationSet** = ``"ssm-incidents:CreateReplicationSet"``

Grants permission to create a replication set

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateReplicationSet.html

#### Defined in

actions/ssm-incidents.ts:24

___

### CreateResponsePlan

• **CreateResponsePlan** = ``"ssm-incidents:CreateResponsePlan"``

Grants permission to create a response plan

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateResponsePlan.html

#### Defined in

actions/ssm-incidents.ts:30

___

### CreateTimelineEvent

• **CreateTimelineEvent** = ``"ssm-incidents:CreateTimelineEvent"``

Grants permission to create a timeline event for an incident record

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateTimelineEvent.html

#### Defined in

actions/ssm-incidents.ts:36

___

### DeleteIncidentRecord

• **DeleteIncidentRecord** = ``"ssm-incidents:DeleteIncidentRecord"``

Grants permission to delete an incident record

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteIncidentRecord.html

#### Defined in

actions/ssm-incidents.ts:42

___

### DeleteReplicationSet

• **DeleteReplicationSet** = ``"ssm-incidents:DeleteReplicationSet"``

Grants permission to delete a replication set

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteReplicationSet.html

#### Defined in

actions/ssm-incidents.ts:48

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"ssm-incidents:DeleteResourcePolicy"``

Grants permission to delete resource policy from a response plan

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/ssm-incidents.ts:54

___

### DeleteResponsePlan

• **DeleteResponsePlan** = ``"ssm-incidents:DeleteResponsePlan"``

Grants permission to delete a response plan

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteResponsePlan.html

#### Defined in

actions/ssm-incidents.ts:60

___

### DeleteTimelineEvent

• **DeleteTimelineEvent** = ``"ssm-incidents:DeleteTimelineEvent"``

Grants permission to delete a timeline event

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteTimelineEvent.html

#### Defined in

actions/ssm-incidents.ts:66

___

### GetIncidentRecord

• **GetIncidentRecord** = ``"ssm-incidents:GetIncidentRecord"``

Grants permission to view the contents of an incident record

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetIncidentRecord.html

#### Defined in

actions/ssm-incidents.ts:72

___

### GetReplicationSet

• **GetReplicationSet** = ``"ssm-incidents:GetReplicationSet"``

Grants permission to view the replication set

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetReplicationSet.html

#### Defined in

actions/ssm-incidents.ts:78

___

### GetResourcePolicies

• **GetResourcePolicies** = ``"ssm-incidents:GetResourcePolicies"``

Grants permission to view resource policies of a response plan

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetResourcePolicies.html

#### Defined in

actions/ssm-incidents.ts:84

___

### GetResponsePlan

• **GetResponsePlan** = ``"ssm-incidents:GetResponsePlan"``

Grants permission to view the contents of a specified response plan

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetResponsePlan.html

#### Defined in

actions/ssm-incidents.ts:90

___

### GetTimelineEvent

• **GetTimelineEvent** = ``"ssm-incidents:GetTimelineEvent"``

Grants permission to view a timeline event

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetTimelineEvent.html

#### Defined in

actions/ssm-incidents.ts:96

___

### ListIncidentFindings

• **ListIncidentFindings** = ``"ssm-incidents:ListIncidentFindings"``

Grants permission to list findings for an incident record

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListIncidentFindings.html

#### Defined in

actions/ssm-incidents.ts:102

___

### ListIncidentRecords

• **ListIncidentRecords** = ``"ssm-incidents:ListIncidentRecords"``

Grants permission to list the contents of all incident records

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListIncidentRecords.html

#### Defined in

actions/ssm-incidents.ts:108

___

### ListRelatedItems

• **ListRelatedItems** = ``"ssm-incidents:ListRelatedItems"``

Grants permission to list related items of an incident record

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListRelatedItems.html

#### Defined in

actions/ssm-incidents.ts:114

___

### ListReplicationSets

• **ListReplicationSets** = ``"ssm-incidents:ListReplicationSets"``

Grants permission to list all replication sets

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListReplicationSets.html

#### Defined in

actions/ssm-incidents.ts:120

___

### ListResponsePlans

• **ListResponsePlans** = ``"ssm-incidents:ListResponsePlans"``

Grants permission to list all response plans

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListResponsePlans.html

#### Defined in

actions/ssm-incidents.ts:126

___

### ListTagsForResource

• **ListTagsForResource** = ``"ssm-incidents:ListTagsForResource"``

Grants permission to view a list of resource tags for a specified resource

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/ssm-incidents.ts:132

___

### ListTimelineEvents

• **ListTimelineEvents** = ``"ssm-incidents:ListTimelineEvents"``

Grants permission to list all timeline events for an incident record

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListTimelineEvents.html

#### Defined in

actions/ssm-incidents.ts:138

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"ssm-incidents:PutResourcePolicy"``

Grants permission to put resource policy on a response plan

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/ssm-incidents.ts:144

___

### StartIncident

• **StartIncident** = ``"ssm-incidents:StartIncident"``

Grants permission to start a new incident using a response plan

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_StartIncident.html

#### Defined in

actions/ssm-incidents.ts:150

___

### TagResource

• **TagResource** = ``"ssm-incidents:TagResource"``

Grants permission to add tags to a response plan

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_TagResource.html

#### Defined in

actions/ssm-incidents.ts:156

___

### UntagResource

• **UntagResource** = ``"ssm-incidents:UntagResource"``

Grants permission to remove tags from a response plan

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UntagResource.html

#### Defined in

actions/ssm-incidents.ts:162

___

### UpdateDeletionProtection

• **UpdateDeletionProtection** = ``"ssm-incidents:UpdateDeletionProtection"``

Grants permission to update replication set deletion protection

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateDeletionProtection.html

#### Defined in

actions/ssm-incidents.ts:168

___

### UpdateIncidentRecord

• **UpdateIncidentRecord** = ``"ssm-incidents:UpdateIncidentRecord"``

Grants permission to update the contents of an incident record

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateIncidentRecord.html

#### Defined in

actions/ssm-incidents.ts:174

___

### UpdateRelatedItems

• **UpdateRelatedItems** = ``"ssm-incidents:UpdateRelatedItems"``

Grants permission to update related items of an incident record

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateRelatedItems.html

#### Defined in

actions/ssm-incidents.ts:180

___

### UpdateReplicationSet

• **UpdateReplicationSet** = ``"ssm-incidents:UpdateReplicationSet"``

Grants permission to update a replication set

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateReplicationSet.html

#### Defined in

actions/ssm-incidents.ts:186

___

### UpdateResponsePlan

• **UpdateResponsePlan** = ``"ssm-incidents:UpdateResponsePlan"``

Grants permission to update the contents of a response plan

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateResponsePlan.html

#### Defined in

actions/ssm-incidents.ts:192

___

### UpdateTimelineEvent

• **UpdateTimelineEvent** = ``"ssm-incidents:UpdateTimelineEvent"``

Grants permission to update a timeline event

See https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateTimelineEvent.html

#### Defined in

actions/ssm-incidents.ts:198
