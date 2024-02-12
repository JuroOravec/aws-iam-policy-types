[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsBugbustActions

# Enumeration: AwsBugbustActions

All IAM policy actions for AWS BugBust (BUGBUST)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbugbust.html

2024-02-12T09:56:15.779Z

## Table of contents

### Enumeration Members

- [CreateEvent](AwsBugbustActions.md#createevent)
- [EvaluateProfilingGroups](AwsBugbustActions.md#evaluateprofilinggroups)
- [GetEvent](AwsBugbustActions.md#getevent)
- [GetJoinEventStatus](AwsBugbustActions.md#getjoineventstatus)
- [JoinEvent](AwsBugbustActions.md#joinevent)
- [ListBugs](AwsBugbustActions.md#listbugs)
- [ListEventParticipants](AwsBugbustActions.md#listeventparticipants)
- [ListEventScores](AwsBugbustActions.md#listeventscores)
- [ListEvents](AwsBugbustActions.md#listevents)
- [ListProfilingGroups](AwsBugbustActions.md#listprofilinggroups)
- [ListPullRequests](AwsBugbustActions.md#listpullrequests)
- [ListTagsForResource](AwsBugbustActions.md#listtagsforresource)
- [TagResource](AwsBugbustActions.md#tagresource)
- [UntagResource](AwsBugbustActions.md#untagresource)
- [UpdateEvent](AwsBugbustActions.md#updateevent)
- [UpdateWorkItem](AwsBugbustActions.md#updateworkitem)
- [UpdateWorkItemAdmin](AwsBugbustActions.md#updateworkitemadmin)

## Enumeration Members

### CreateEvent

• **CreateEvent** = ``"bugbust:CreateEvent"``

Grants permission to create a BugBust event

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:17

___

### EvaluateProfilingGroups

• **EvaluateProfilingGroups** = ``"bugbust:EvaluateProfilingGroups"``

Grants permission to evaluate checked-in profiling groups

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:23

___

### GetEvent

• **GetEvent** = ``"bugbust:GetEvent"``

Grants permission to view customer details about an event

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:29

___

### GetJoinEventStatus

• **GetJoinEventStatus** = ``"bugbust:GetJoinEventStatus"``

Grants permission to view the status of a BugBust player's attempt to join a Bu
gBust event

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:36

___

### JoinEvent

• **JoinEvent** = ``"bugbust:JoinEvent"``

Grants permission to join an event

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:42

___

### ListBugs

• **ListBugs** = ``"bugbust:ListBugs"``

Grants permission to view the bugs that were imported into an event for players
to work on

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:49

___

### ListEventParticipants

• **ListEventParticipants** = ``"bugbust:ListEventParticipants"``

Grants permission to view the participants of an event

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:55

___

### ListEventScores

• **ListEventScores** = ``"bugbust:ListEventScores"``

Grants permission to view the scores of an event's players

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:61

___

### ListEvents

• **ListEvents** = ``"bugbust:ListEvents"``

Grants permission to List BugBust events

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:67

___

### ListProfilingGroups

• **ListProfilingGroups** = ``"bugbust:ListProfilingGroups"``

Grants permission to view the profiling groups that were imported into an event
for players to work on

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:74

___

### ListPullRequests

• **ListPullRequests** = ``"bugbust:ListPullRequests"``

Grants permission to view the pull requests used by players to submit fixes to
their claimed bugs in an event

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:81

___

### ListTagsForResource

• **ListTagsForResource** = ``"bugbust:ListTagsForResource"``

Grants permission to lists tag for a Bugbust resource

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:87

___

### TagResource

• **TagResource** = ``"bugbust:TagResource"``

Grants permission to tag a Bugbust resource

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:93

___

### UntagResource

• **UntagResource** = ``"bugbust:UntagResource"``

Grants permission to untag a Bugbust resource

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:99

___

### UpdateEvent

• **UpdateEvent** = ``"bugbust:UpdateEvent"``

Grants permission to update a BugBust event

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:105

___

### UpdateWorkItem

• **UpdateWorkItem** = ``"bugbust:UpdateWorkItem"``

Grants permission to update a work item as claimed or unclaimed (bug or profili
ng group)

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:112

___

### UpdateWorkItemAdmin

• **UpdateWorkItemAdmin** = ``"bugbust:UpdateWorkItemAdmin"``

Grants permission to update an event's work item (bug or profiling group)

See https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html

#### Defined in

actions/bugbust.ts:118
