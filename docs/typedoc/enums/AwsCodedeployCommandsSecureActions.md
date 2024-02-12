[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodedeployCommandsSecureActions

# Enumeration: AwsCodedeployCommandsSecureActions

All IAM policy actions for AWS CodeDeploy secure host commands service (CODEDEPLOY-COMMANDS-SECURE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploysecurehostcommandsservice.html

2024-02-12T09:56:34.866Z

## Table of contents

### Enumeration Members

- [GetDeploymentSpecification](AwsCodedeployCommandsSecureActions.md#getdeploymentspecification)
- [PollHostCommand](AwsCodedeployCommandsSecureActions.md#pollhostcommand)
- [PutHostCommandAcknowledgement](AwsCodedeployCommandsSecureActions.md#puthostcommandacknowledgement)
- [PutHostCommandComplete](AwsCodedeployCommandsSecureActions.md#puthostcommandcomplete)

## Enumeration Members

### GetDeploymentSpecification

• **GetDeploymentSpecification** = ``"codedeploy-commands-secure:GetDeploymentSpecification"``

Grants permission to get deployment specification

See https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration

#### Defined in

actions/codedeploy-commands-secure.ts:17

___

### PollHostCommand

• **PollHostCommand** = ``"codedeploy-commands-secure:PollHostCommand"``

Grants permission to request host agent commands

See https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration

#### Defined in

actions/codedeploy-commands-secure.ts:23

___

### PutHostCommandAcknowledgement

• **PutHostCommandAcknowledgement** = ``"codedeploy-commands-secure:PutHostCommandAcknowledgement"``

Grants permission to mark host agent commands acknowledged

See https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration

#### Defined in

actions/codedeploy-commands-secure.ts:29

___

### PutHostCommandComplete

• **PutHostCommandComplete** = ``"codedeploy-commands-secure:PutHostCommandComplete"``

Grants permission to mark host agent commands completed

See https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration

#### Defined in

actions/codedeploy-commands-secure.ts:35
