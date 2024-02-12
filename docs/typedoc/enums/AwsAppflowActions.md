[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAppflowActions

# Enumeration: AwsAppflowActions

All IAM policy actions for Amazon AppFlow (APPFLOW)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappflow.html

2024-02-12T09:56:00.385Z

## Table of contents

### Enumeration Members

- [CancelFlowExecutions](AwsAppflowActions.md#cancelflowexecutions)
- [CreateConnectorProfile](AwsAppflowActions.md#createconnectorprofile)
- [CreateFlow](AwsAppflowActions.md#createflow)
- [DeleteConnectorProfile](AwsAppflowActions.md#deleteconnectorprofile)
- [DeleteFlow](AwsAppflowActions.md#deleteflow)
- [DescribeConnector](AwsAppflowActions.md#describeconnector)
- [DescribeConnectorEntity](AwsAppflowActions.md#describeconnectorentity)
- [DescribeConnectorFields](AwsAppflowActions.md#describeconnectorfields)
- [DescribeConnectorProfiles](AwsAppflowActions.md#describeconnectorprofiles)
- [DescribeConnectors](AwsAppflowActions.md#describeconnectors)
- [DescribeFlow](AwsAppflowActions.md#describeflow)
- [DescribeFlowExecution](AwsAppflowActions.md#describeflowexecution)
- [DescribeFlowExecutionRecords](AwsAppflowActions.md#describeflowexecutionrecords)
- [DescribeFlows](AwsAppflowActions.md#describeflows)
- [ListConnectorEntities](AwsAppflowActions.md#listconnectorentities)
- [ListConnectorFields](AwsAppflowActions.md#listconnectorfields)
- [ListConnectors](AwsAppflowActions.md#listconnectors)
- [ListFlows](AwsAppflowActions.md#listflows)
- [ListTagsForResource](AwsAppflowActions.md#listtagsforresource)
- [RegisterConnector](AwsAppflowActions.md#registerconnector)
- [ResetConnectorMetadataCache](AwsAppflowActions.md#resetconnectormetadatacache)
- [RunFlow](AwsAppflowActions.md#runflow)
- [StartFlow](AwsAppflowActions.md#startflow)
- [StopFlow](AwsAppflowActions.md#stopflow)
- [TagResource](AwsAppflowActions.md#tagresource)
- [UnRegisterConnector](AwsAppflowActions.md#unregisterconnector)
- [UntagResource](AwsAppflowActions.md#untagresource)
- [UpdateConnectorProfile](AwsAppflowActions.md#updateconnectorprofile)
- [UpdateConnectorRegistration](AwsAppflowActions.md#updateconnectorregistration)
- [UpdateFlow](AwsAppflowActions.md#updateflow)
- [UseConnectorProfile](AwsAppflowActions.md#useconnectorprofile)

## Enumeration Members

### CancelFlowExecutions

• **CancelFlowExecutions** = ``"appflow:CancelFlowExecutions"``

Grants permission to cancel in-progress executions of an Amazon AppFlow flow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CancelFlowExecutions.html

#### Defined in

actions/appflow.ts:17

___

### CreateConnectorProfile

• **CreateConnectorProfile** = ``"appflow:CreateConnectorProfile"``

Grants permission to create a login profile to be used with Amazon AppFlow flow
s

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateConnectorProfile.html

#### Defined in

actions/appflow.ts:24

___

### CreateFlow

• **CreateFlow** = ``"appflow:CreateFlow"``

Grants permission to create an Amazon AppFlow flow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateFlow.html

#### Defined in

actions/appflow.ts:30

___

### DeleteConnectorProfile

• **DeleteConnectorProfile** = ``"appflow:DeleteConnectorProfile"``

Grants permission to delete a login profile configured in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html

#### Defined in

actions/appflow.ts:36

___

### DeleteFlow

• **DeleteFlow** = ``"appflow:DeleteFlow"``

Grants permission to delete an Amazon AppFlow flow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DeleteFlow.html

#### Defined in

actions/appflow.ts:42

___

### DescribeConnector

• **DescribeConnector** = ``"appflow:DescribeConnector"``

Grants permission to describe a connector registered in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnector.html

#### Defined in

actions/appflow.ts:48

___

### DescribeConnectorEntity

• **DescribeConnectorEntity** = ``"appflow:DescribeConnectorEntity"``

Grants permission to describe all fields for an object in a login profile confi
gured in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorEntity.html

#### Defined in

actions/appflow.ts:55

___

### DescribeConnectorFields

• **DescribeConnectorFields** = ``"appflow:DescribeConnectorFields"``

Grants permission to describe all fields for an object in a login profile confi
gured in Amazon AppFlow (Console Only)

See https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions

#### Defined in

actions/appflow.ts:62

___

### DescribeConnectorProfiles

• **DescribeConnectorProfiles** = ``"appflow:DescribeConnectorProfiles"``

Grants permission to describe all login profiles configured in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html

#### Defined in

actions/appflow.ts:68

___

### DescribeConnectors

• **DescribeConnectors** = ``"appflow:DescribeConnectors"``

Grants permission to describe all connectors supported by Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectors.html

#### Defined in

actions/appflow.ts:74

___

### DescribeFlow

• **DescribeFlow** = ``"appflow:DescribeFlow"``

Grants permission to describe a specific flow configured in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlow.html

#### Defined in

actions/appflow.ts:80

___

### DescribeFlowExecution

• **DescribeFlowExecution** = ``"appflow:DescribeFlowExecution"``

Grants permission to describe all flow executions for a flow configured in Amaz
on AppFlow (Console Only)

See https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions

#### Defined in

actions/appflow.ts:87

___

### DescribeFlowExecutionRecords

• **DescribeFlowExecutionRecords** = ``"appflow:DescribeFlowExecutionRecords"``

Grants permission to describe all flow executions for a flow configured in Amaz
on AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlowExecutionRecords.html

#### Defined in

actions/appflow.ts:94

___

### DescribeFlows

• **DescribeFlows** = ``"appflow:DescribeFlows"``

Grants permission to describe all flows configured in Amazon AppFlow (Console O
nly)

See https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions

#### Defined in

actions/appflow.ts:101

___

### ListConnectorEntities

• **ListConnectorEntities** = ``"appflow:ListConnectorEntities"``

Grants permission to list all objects for a login profile configured in Amazon
AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListConnectorEntities.html

#### Defined in

actions/appflow.ts:108

___

### ListConnectorFields

• **ListConnectorFields** = ``"appflow:ListConnectorFields"``

Grants permission to list all objects for a login profile configured in Amazon
AppFlow (Console Only)

See https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions

#### Defined in

actions/appflow.ts:115

___

### ListConnectors

• **ListConnectors** = ``"appflow:ListConnectors"``

Grants permission to list all connectors supported in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListConnectors.html

#### Defined in

actions/appflow.ts:121

___

### ListFlows

• **ListFlows** = ``"appflow:ListFlows"``

Grants permission to list all flows configured in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListFlows.html

#### Defined in

actions/appflow.ts:127

___

### ListTagsForResource

• **ListTagsForResource** = ``"appflow:ListTagsForResource"``

Grants permission to list tags for a flow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListTagsForResource.html

#### Defined in

actions/appflow.ts:133

___

### RegisterConnector

• **RegisterConnector** = ``"appflow:RegisterConnector"``

Grants permission to register an Amazon AppFlow connector

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_RegisterConnector.html

#### Defined in

actions/appflow.ts:139

___

### ResetConnectorMetadataCache

• **ResetConnectorMetadataCache** = ``"appflow:ResetConnectorMetadataCache"``

Grants permission to resets metadata of connector entities that Amazon AppFlow
stored in its cache

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ResetConnectorMetadataCache.html

#### Defined in

actions/appflow.ts:146

___

### RunFlow

• **RunFlow** = ``"appflow:RunFlow"``

Grants permission to run a flow configured in Amazon AppFlow (Console Only)

See https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions

#### Defined in

actions/appflow.ts:152

___

### StartFlow

• **StartFlow** = ``"appflow:StartFlow"``

Grants permission to activate (for scheduled and event-triggered flows) or run
(for on-demand flows) a flow configured in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StartFlow.html

#### Defined in

actions/appflow.ts:159

___

### StopFlow

• **StopFlow** = ``"appflow:StopFlow"``

Grants permission to deactivate a scheduled or event-triggered flow configured
in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StopFlow.html

#### Defined in

actions/appflow.ts:166

___

### TagResource

• **TagResource** = ``"appflow:TagResource"``

Grants permission to tag a flow or a connector

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_TagResource.html

#### Defined in

actions/appflow.ts:172

___

### UnRegisterConnector

• **UnRegisterConnector** = ``"appflow:UnRegisterConnector"``

Grants permission to un-register a connector in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UnregisterConnector.html

#### Defined in

actions/appflow.ts:178

___

### UntagResource

• **UntagResource** = ``"appflow:UntagResource"``

Grants permission to untag a flow or a connector

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UntagResource.html

#### Defined in

actions/appflow.ts:184

___

### UpdateConnectorProfile

• **UpdateConnectorProfile** = ``"appflow:UpdateConnectorProfile"``

Grants permission to update a login profile configured in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateConnectorProfile.html

#### Defined in

actions/appflow.ts:190

___

### UpdateConnectorRegistration

• **UpdateConnectorRegistration** = ``"appflow:UpdateConnectorRegistration"``

Grants permission to update a registered connector configured in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateConnectorRegistration.html

#### Defined in

actions/appflow.ts:196

___

### UpdateFlow

• **UpdateFlow** = ``"appflow:UpdateFlow"``

Grants permission to update a flow configured in Amazon AppFlow

See https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateFlow.html

#### Defined in

actions/appflow.ts:202

___

### UseConnectorProfile

• **UseConnectorProfile** = ``"appflow:UseConnectorProfile"``

Grants permission to use a connector profile while creating a flow in Amazon Ap
pFlow

See API_CreateFlow.html

#### Defined in

actions/appflow.ts:209
