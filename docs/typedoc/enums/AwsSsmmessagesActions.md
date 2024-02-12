[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSsmmessagesActions

# Enumeration: AwsSsmmessagesActions

All IAM policy actions for Amazon Session Manager Message Gateway Service (SSMMESSAGES)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsessionmanagermessagegatewayservice.html

2024-02-12T09:59:14.901Z

## Table of contents

### Enumeration Members

- [CreateControlChannel](AwsSsmmessagesActions.md#createcontrolchannel)
- [CreateDataChannel](AwsSsmmessagesActions.md#createdatachannel)
- [OpenControlChannel](AwsSsmmessagesActions.md#opencontrolchannel)
- [OpenDataChannel](AwsSsmmessagesActions.md#opendatachannel)

## Enumeration Members

### CreateControlChannel

• **CreateControlChannel** = ``"ssmmessages:CreateControlChannel"``

Grants permission to register a control channel for an instance to send control
messages to Systems Manager service

See https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html

#### Defined in

actions/ssmmessages.ts:18

___

### CreateDataChannel

• **CreateDataChannel** = ``"ssmmessages:CreateDataChannel"``

Grants permission to register a data channel for an instance to send data messa
ges to Systems Manager service

See https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html

#### Defined in

actions/ssmmessages.ts:25

___

### OpenControlChannel

• **OpenControlChannel** = ``"ssmmessages:OpenControlChannel"``

Grants permission to open a websocket connection for a registered control chann
el stream from an instance to Systems Manager service

See https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html

#### Defined in

actions/ssmmessages.ts:32

___

### OpenDataChannel

• **OpenDataChannel** = ``"ssmmessages:OpenDataChannel"``

Grants permission to open a websocket connection for a registered data channel
stream from an instance to Systems Manager service

See https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html

#### Defined in

actions/ssmmessages.ts:39
