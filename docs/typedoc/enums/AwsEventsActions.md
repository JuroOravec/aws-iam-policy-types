[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEventsActions

# Enumeration: AwsEventsActions

All IAM policy actions for Amazon EventBridge (EVENTS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridge.html

2024-02-12T09:57:22.487Z

## Table of contents

### Enumeration Members

- [ActivateEventSource](AwsEventsActions.md#activateeventsource)
- [CancelReplay](AwsEventsActions.md#cancelreplay)
- [CreateApiDestination](AwsEventsActions.md#createapidestination)
- [CreateArchive](AwsEventsActions.md#createarchive)
- [CreateConnection](AwsEventsActions.md#createconnection)
- [CreateEndpoint](AwsEventsActions.md#createendpoint)
- [CreateEventBus](AwsEventsActions.md#createeventbus)
- [CreatePartnerEventSource](AwsEventsActions.md#createpartnereventsource)
- [DeactivateEventSource](AwsEventsActions.md#deactivateeventsource)
- [DeauthorizeConnection](AwsEventsActions.md#deauthorizeconnection)
- [DeleteApiDestination](AwsEventsActions.md#deleteapidestination)
- [DeleteArchive](AwsEventsActions.md#deletearchive)
- [DeleteConnection](AwsEventsActions.md#deleteconnection)
- [DeleteEndpoint](AwsEventsActions.md#deleteendpoint)
- [DeleteEventBus](AwsEventsActions.md#deleteeventbus)
- [DeletePartnerEventSource](AwsEventsActions.md#deletepartnereventsource)
- [DeleteRule](AwsEventsActions.md#deleterule)
- [DescribeApiDestination](AwsEventsActions.md#describeapidestination)
- [DescribeArchive](AwsEventsActions.md#describearchive)
- [DescribeConnection](AwsEventsActions.md#describeconnection)
- [DescribeEndpoint](AwsEventsActions.md#describeendpoint)
- [DescribeEventBus](AwsEventsActions.md#describeeventbus)
- [DescribeEventSource](AwsEventsActions.md#describeeventsource)
- [DescribePartnerEventSource](AwsEventsActions.md#describepartnereventsource)
- [DescribeReplay](AwsEventsActions.md#describereplay)
- [DescribeRule](AwsEventsActions.md#describerule)
- [DisableRule](AwsEventsActions.md#disablerule)
- [EnableRule](AwsEventsActions.md#enablerule)
- [InvokeApiDestination](AwsEventsActions.md#invokeapidestination)
- [ListApiDestinations](AwsEventsActions.md#listapidestinations)
- [ListArchives](AwsEventsActions.md#listarchives)
- [ListConnections](AwsEventsActions.md#listconnections)
- [ListEndpoints](AwsEventsActions.md#listendpoints)
- [ListEventBuses](AwsEventsActions.md#listeventbuses)
- [ListEventSources](AwsEventsActions.md#listeventsources)
- [ListPartnerEventSourceAccounts](AwsEventsActions.md#listpartnereventsourceaccounts)
- [ListPartnerEventSources](AwsEventsActions.md#listpartnereventsources)
- [ListReplays](AwsEventsActions.md#listreplays)
- [ListRuleNamesByTarget](AwsEventsActions.md#listrulenamesbytarget)
- [ListRules](AwsEventsActions.md#listrules)
- [ListTagsForResource](AwsEventsActions.md#listtagsforresource)
- [ListTargetsByRule](AwsEventsActions.md#listtargetsbyrule)
- [PutEvents](AwsEventsActions.md#putevents)
- [PutPartnerEvents](AwsEventsActions.md#putpartnerevents)
- [PutPermission](AwsEventsActions.md#putpermission)
- [PutRule](AwsEventsActions.md#putrule)
- [PutTargets](AwsEventsActions.md#puttargets)
- [RemovePermission](AwsEventsActions.md#removepermission)
- [RemoveTargets](AwsEventsActions.md#removetargets)
- [RetrieveConnectionCredentials](AwsEventsActions.md#retrieveconnectioncredentials)
- [StartReplay](AwsEventsActions.md#startreplay)
- [TagResource](AwsEventsActions.md#tagresource)
- [TestEventPattern](AwsEventsActions.md#testeventpattern)
- [UntagResource](AwsEventsActions.md#untagresource)
- [UpdateApiDestination](AwsEventsActions.md#updateapidestination)
- [UpdateArchive](AwsEventsActions.md#updatearchive)
- [UpdateConnection](AwsEventsActions.md#updateconnection)
- [UpdateEndpoint](AwsEventsActions.md#updateendpoint)

## Enumeration Members

### ActivateEventSource

• **ActivateEventSource** = ``"events:ActivateEventSource"``

Grants permission to activate partner event sources

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html

#### Defined in

actions/events.ts:17

___

### CancelReplay

• **CancelReplay** = ``"events:CancelReplay"``

Grants permission to cancel a replay

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CancelReplay.html

#### Defined in

actions/events.ts:23

___

### CreateApiDestination

• **CreateApiDestination** = ``"events:CreateApiDestination"``

Grants permission to create a new api destination

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateApiDestination.html

#### Defined in

actions/events.ts:29

___

### CreateArchive

• **CreateArchive** = ``"events:CreateArchive"``

Grants permission to create a new archive

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateArchive.html

#### Defined in

actions/events.ts:35

___

### CreateConnection

• **CreateConnection** = ``"events:CreateConnection"``

Grants permission to create a new connection

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateConnection.html

#### Defined in

actions/events.ts:41

___

### CreateEndpoint

• **CreateEndpoint** = ``"events:CreateEndpoint"``

Grants permission to create an endpoint

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEndpoint.html

#### Defined in

actions/events.ts:47

___

### CreateEventBus

• **CreateEventBus** = ``"events:CreateEventBus"``

Grants permission to create event buses

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html

#### Defined in

actions/events.ts:53

___

### CreatePartnerEventSource

• **CreatePartnerEventSource** = ``"events:CreatePartnerEventSource"``

Grants permission to create partner event sources

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreatePartnerEventSource.html

#### Defined in

actions/events.ts:59

___

### DeactivateEventSource

• **DeactivateEventSource** = ``"events:DeactivateEventSource"``

Grants permission to deactivate event sources

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeactivateEventSource.html

#### Defined in

actions/events.ts:65

___

### DeauthorizeConnection

• **DeauthorizeConnection** = ``"events:DeauthorizeConnection"``

Grants permission to deauthorize a connection, deleting its stored authorizatio
n secrets

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeauthorizeConnection.html

#### Defined in

actions/events.ts:72

___

### DeleteApiDestination

• **DeleteApiDestination** = ``"events:DeleteApiDestination"``

Grants permission to delete an api destination

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteApiDestination.html

#### Defined in

actions/events.ts:78

___

### DeleteArchive

• **DeleteArchive** = ``"events:DeleteArchive"``

Grants permission to delete an archive

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteArchive.html

#### Defined in

actions/events.ts:84

___

### DeleteConnection

• **DeleteConnection** = ``"events:DeleteConnection"``

Grants permission to delete a connection

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteConnection.html

#### Defined in

actions/events.ts:90

___

### DeleteEndpoint

• **DeleteEndpoint** = ``"events:DeleteEndpoint"``

Grants permission to delete an endpoint

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteEndpoint.html

#### Defined in

actions/events.ts:96

___

### DeleteEventBus

• **DeleteEventBus** = ``"events:DeleteEventBus"``

Grants permission to delete event buses

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteEventBus.html

#### Defined in

actions/events.ts:102

___

### DeletePartnerEventSource

• **DeletePartnerEventSource** = ``"events:DeletePartnerEventSource"``

Grants permission to delete partner event sources

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeletePartnerEventSource.html

#### Defined in

actions/events.ts:108

___

### DeleteRule

• **DeleteRule** = ``"events:DeleteRule"``

Grants permission to delete rules

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteRule.html

#### Defined in

actions/events.ts:114

___

### DescribeApiDestination

• **DescribeApiDestination** = ``"events:DescribeApiDestination"``

Grants permission to retrieve details about an api destination

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeApiDestination.html

#### Defined in

actions/events.ts:120

___

### DescribeArchive

• **DescribeArchive** = ``"events:DescribeArchive"``

Grants permission to retrieve details about an archive

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeArchive.html

#### Defined in

actions/events.ts:126

___

### DescribeConnection

• **DescribeConnection** = ``"events:DescribeConnection"``

Grants permission to retrieve details about a conection

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeConnection.html

#### Defined in

actions/events.ts:132

___

### DescribeEndpoint

• **DescribeEndpoint** = ``"events:DescribeEndpoint"``

Grants permission to retrieve details about an endpoint

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEndpoint.html

#### Defined in

actions/events.ts:138

___

### DescribeEventBus

• **DescribeEventBus** = ``"events:DescribeEventBus"``

Grants permission to retrieve details about event buses

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html

#### Defined in

actions/events.ts:144

___

### DescribeEventSource

• **DescribeEventSource** = ``"events:DescribeEventSource"``

Grants permission to retrieve details about event sources

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html

#### Defined in

actions/events.ts:150

___

### DescribePartnerEventSource

• **DescribePartnerEventSource** = ``"events:DescribePartnerEventSource"``

Grants permission to retrieve details about partner event sources

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribePartnerEventSource.html

#### Defined in

actions/events.ts:156

___

### DescribeReplay

• **DescribeReplay** = ``"events:DescribeReplay"``

Grants permission to retrieve the details of a replay

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeReplay.html

#### Defined in

actions/events.ts:162

___

### DescribeRule

• **DescribeRule** = ``"events:DescribeRule"``

Grants permission to retrieve details about rules

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeRule.html

#### Defined in

actions/events.ts:168

___

### DisableRule

• **DisableRule** = ``"events:DisableRule"``

Grants permission to disable rules

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html

#### Defined in

actions/events.ts:174

___

### EnableRule

• **EnableRule** = ``"events:EnableRule"``

Grants permission to enable rules

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_EnableRule.html

#### Defined in

actions/events.ts:180

___

### InvokeApiDestination

• **InvokeApiDestination** = ``"events:InvokeApiDestination"``

Grants permission to invoke an api destination

See https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html

#### Defined in

actions/events.ts:186

___

### ListApiDestinations

• **ListApiDestinations** = ``"events:ListApiDestinations"``

Grants permission to retrieve a list of api destinations

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListApiDestinations.html

#### Defined in

actions/events.ts:192

___

### ListArchives

• **ListArchives** = ``"events:ListArchives"``

Grants permission to retrieve a list of archives

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListArchives.html

#### Defined in

actions/events.ts:198

___

### ListConnections

• **ListConnections** = ``"events:ListConnections"``

Grants permission to retrieve a list of connections

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListConnections.html

#### Defined in

actions/events.ts:204

___

### ListEndpoints

• **ListEndpoints** = ``"events:ListEndpoints"``

Grants permission to retrieve a list of endpoints

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEndpoints.html

#### Defined in

actions/events.ts:210

___

### ListEventBuses

• **ListEventBuses** = ``"events:ListEventBuses"``

Grants permission to retrieve a list of the event buses in your account

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEventBuses.html

#### Defined in

actions/events.ts:216

___

### ListEventSources

• **ListEventSources** = ``"events:ListEventSources"``

Grants permission to to retrieve a list of event sources shared with this accou
nt

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEventSources.html

#### Defined in

actions/events.ts:223

___

### ListPartnerEventSourceAccounts

• **ListPartnerEventSourceAccounts** = ``"events:ListPartnerEventSourceAccounts"``

Grants permission to retrieve a list of AWS account IDs associated with an even
t source

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListPartnerEventSourceAccounts.html

#### Defined in

actions/events.ts:230

___

### ListPartnerEventSources

• **ListPartnerEventSources** = ``"events:ListPartnerEventSources"``

Grants permission to retrieve a list partner event sources

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListPartnerEventSources.html

#### Defined in

actions/events.ts:236

___

### ListReplays

• **ListReplays** = ``"events:ListReplays"``

Grants permission to retrieve a list of replays

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListReplays.html

#### Defined in

actions/events.ts:242

___

### ListRuleNamesByTarget

• **ListRuleNamesByTarget** = ``"events:ListRuleNamesByTarget"``

Grants permission to retrieve a list of the names of the rules associated with
a target

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListRuleNamesByTarget.html

#### Defined in

actions/events.ts:249

___

### ListRules

• **ListRules** = ``"events:ListRules"``

Grants permission to retrieve a list of the Amazon EventBridge rules in the acc
ount

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListRules.html

#### Defined in

actions/events.ts:256

___

### ListTagsForResource

• **ListTagsForResource** = ``"events:ListTagsForResource"``

Grants permission to retrieve a list of tags associated with an Amazon EventBri
dge resource

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/events.ts:263

___

### ListTargetsByRule

• **ListTargetsByRule** = ``"events:ListTargetsByRule"``

Grants permission to retrieve a list of targets defined for a rule

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html

#### Defined in

actions/events.ts:269

___

### PutEvents

• **PutEvents** = ``"events:PutEvents"``

Grants permission to send custom events to Amazon EventBridge

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html

#### Defined in

actions/events.ts:275

___

### PutPartnerEvents

• **PutPartnerEvents** = ``"events:PutPartnerEvents"``

Grants permission to sends custom events to Amazon EventBridge

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPartnerEvents.html

#### Defined in

actions/events.ts:281

___

### PutPermission

• **PutPermission** = ``"events:PutPermission"``

Grants permission to use the PutPermission action to grants permission to anoth
er AWS account to put events to your default event bus

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html

#### Defined in

actions/events.ts:288

___

### PutRule

• **PutRule** = ``"events:PutRule"``

Grants permission to create or updates rules

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutRule.html

#### Defined in

actions/events.ts:294

___

### PutTargets

• **PutTargets** = ``"events:PutTargets"``

Grants permission to add targets to a rule

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html

#### Defined in

actions/events.ts:300

___

### RemovePermission

• **RemovePermission** = ``"events:RemovePermission"``

Grants permission to revoke the permission of another AWS account to put events
to your default event bus

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html

#### Defined in

actions/events.ts:307

___

### RemoveTargets

• **RemoveTargets** = ``"events:RemoveTargets"``

Grants permission to removes targets from a rule

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html

#### Defined in

actions/events.ts:313

___

### RetrieveConnectionCredentials

• **RetrieveConnectionCredentials** = ``"events:RetrieveConnectionCredentials"``

Grants permission to retrieve credentials from a connection

See https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html

#### Defined in

actions/events.ts:319

___

### StartReplay

• **StartReplay** = ``"events:StartReplay"``

Grants permission to start a replay of an archive

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_StartReplay.html

#### Defined in

actions/events.ts:325

___

### TagResource

• **TagResource** = ``"events:TagResource"``

Grants permission to add a tag to an Amazon EventBridge resource

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html

#### Defined in

actions/events.ts:331

___

### TestEventPattern

• **TestEventPattern** = ``"events:TestEventPattern"``

Grants permission to test whether an event pattern matches the provided event

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TestEventPattern.html

#### Defined in

actions/events.ts:337

___

### UntagResource

• **UntagResource** = ``"events:UntagResource"``

Grants permission to remove a tag from an Amazon EventBridge resource

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html

#### Defined in

actions/events.ts:343

___

### UpdateApiDestination

• **UpdateApiDestination** = ``"events:UpdateApiDestination"``

Grants permission to update an api destination

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateApiDestination.html

#### Defined in

actions/events.ts:349

___

### UpdateArchive

• **UpdateArchive** = ``"events:UpdateArchive"``

Grants permission to update an archive

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateArchive.html

#### Defined in

actions/events.ts:355

___

### UpdateConnection

• **UpdateConnection** = ``"events:UpdateConnection"``

Grants permission to update a connection

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateConnection.html

#### Defined in

actions/events.ts:361

___

### UpdateEndpoint

• **UpdateEndpoint** = ``"events:UpdateEndpoint"``

Grants permission to update an endpoint

See https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateEndpoint.html

#### Defined in

actions/events.ts:367
