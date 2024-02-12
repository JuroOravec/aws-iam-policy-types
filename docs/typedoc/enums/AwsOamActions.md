[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsOamActions

# Enumeration: AwsOamActions

All IAM policy actions for Amazon CloudWatch Observability Access Manager (OAM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchobservabilityaccessmanager.html

2024-02-12T09:56:30.322Z

## Table of contents

### Enumeration Members

- [CreateLink](AwsOamActions.md#createlink)
- [CreateSink](AwsOamActions.md#createsink)
- [DeleteLink](AwsOamActions.md#deletelink)
- [DeleteSink](AwsOamActions.md#deletesink)
- [GetLink](AwsOamActions.md#getlink)
- [GetSink](AwsOamActions.md#getsink)
- [GetSinkPolicy](AwsOamActions.md#getsinkpolicy)
- [ListAttachedLinks](AwsOamActions.md#listattachedlinks)
- [ListLinks](AwsOamActions.md#listlinks)
- [ListSinks](AwsOamActions.md#listsinks)
- [ListTagsForResource](AwsOamActions.md#listtagsforresource)
- [PutSinkPolicy](AwsOamActions.md#putsinkpolicy)
- [TagResource](AwsOamActions.md#tagresource)
- [UntagResource](AwsOamActions.md#untagresource)
- [UpdateLink](AwsOamActions.md#updatelink)

## Enumeration Members

### CreateLink

• **CreateLink** = ``"oam:CreateLink"``

Grants permission to create a link between a monitoring account and a source ac
count for cross-account monitoring

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateLink.html

#### Defined in

actions/oam.ts:18

___

### CreateSink

• **CreateSink** = ``"oam:CreateSink"``

Grants permission to create a sink in an account so that it can be used as a mo
nitoring account for cross-account monitoring

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html

#### Defined in

actions/oam.ts:25

___

### DeleteLink

• **DeleteLink** = ``"oam:DeleteLink"``

Grants permission to delete a link between a monitoring account and a source ac
count for cross-account monitoring

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_DeleteLink.html

#### Defined in

actions/oam.ts:32

___

### DeleteSink

• **DeleteSink** = ``"oam:DeleteSink"``

Grants permission to delete a cross-account monitoring sink in a monitoring acc
ount

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_DeleteSink.html

#### Defined in

actions/oam.ts:39

___

### GetLink

• **GetLink** = ``"oam:GetLink"``

Grants permission to retrieve complete information about one cross-account moni
toring link

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_GetLink.html

#### Defined in

actions/oam.ts:46

___

### GetSink

• **GetSink** = ``"oam:GetSink"``

Grants permission to retrieve complete information about one cross-account moni
toring sink

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_GetSink.html

#### Defined in

actions/oam.ts:53

___

### GetSinkPolicy

• **GetSinkPolicy** = ``"oam:GetSinkPolicy"``

Grants permission to retrieve information for the IAM policy for a cross-accoun
t monitoring sink

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_GetSinkPolicy.html

#### Defined in

actions/oam.ts:60

___

### ListAttachedLinks

• **ListAttachedLinks** = ``"oam:ListAttachedLinks"``

Grants permission to retrieve a list of links that are linked for a cross-accou
nt monitoring sink

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListAttachedLinks.html

#### Defined in

actions/oam.ts:67

___

### ListLinks

• **ListLinks** = ``"oam:ListLinks"``

Grants permission to retrieve the ARNs of cross-account monitoring links in thi
s account

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html

#### Defined in

actions/oam.ts:74

___

### ListSinks

• **ListSinks** = ``"oam:ListSinks"``

Grants permission to retrieve the ARNs of cross-account monitoring sinks in thi
s account

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html

#### Defined in

actions/oam.ts:81

___

### ListTagsForResource

• **ListTagsForResource** = ``"oam:ListTagsForResource"``

Grants permission to list the tags for a resource

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/oam.ts:87

___

### PutSinkPolicy

• **PutSinkPolicy** = ``"oam:PutSinkPolicy"``

Grants permission to create or update the IAM policy for a cross-account monito
ring sink

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html

#### Defined in

actions/oam.ts:94

___

### TagResource

• **TagResource** = ``"oam:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_TagResource.html

#### Defined in

actions/oam.ts:100

___

### UntagResource

• **UntagResource** = ``"oam:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_UntagResource.html

#### Defined in

actions/oam.ts:106

___

### UpdateLink

• **UpdateLink** = ``"oam:UpdateLink"``

Grants permission to update an existing link between a monitoring account and a
source account

See https://docs.aws.amazon.com/OAM/latest/APIReference/API_UpdateLink.html

#### Defined in

actions/oam.ts:113
