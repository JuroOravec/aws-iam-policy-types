[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSupportappActions

# Enumeration: AwsSupportappActions

All IAM policy actions for AWS Support App in Slack (SUPPORTAPP)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupportappinslack.html

2024-02-12T09:59:23.795Z

## Table of contents

### Enumeration Members

- [CreateSlackChannelConfiguration](AwsSupportappActions.md#createslackchannelconfiguration)
- [DeleteAccountAlias](AwsSupportappActions.md#deleteaccountalias)
- [DeleteSlackChannelConfiguration](AwsSupportappActions.md#deleteslackchannelconfiguration)
- [DeleteSlackWorkspaceConfiguration](AwsSupportappActions.md#deleteslackworkspaceconfiguration)
- [DescribeSlackChannels](AwsSupportappActions.md#describeslackchannels)
- [GetAccountAlias](AwsSupportappActions.md#getaccountalias)
- [GetSlackOauthParameters](AwsSupportappActions.md#getslackoauthparameters)
- [ListSlackChannelConfigurations](AwsSupportappActions.md#listslackchannelconfigurations)
- [ListSlackWorkspaceConfigurations](AwsSupportappActions.md#listslackworkspaceconfigurations)
- [PutAccountAlias](AwsSupportappActions.md#putaccountalias)
- [RedeemSlackOauthCode](AwsSupportappActions.md#redeemslackoauthcode)
- [RegisterSlackWorkspaceForOrganization](AwsSupportappActions.md#registerslackworkspacefororganization)
- [UpdateSlackChannelConfiguration](AwsSupportappActions.md#updateslackchannelconfiguration)

## Enumeration Members

### CreateSlackChannelConfiguration

• **CreateSlackChannelConfiguration** = ``"supportapp:CreateSlackChannelConfiguration"``

Grants permission to create a Slack channel configuration for your account

See https://docs.aws.amazon.com/supportapp/latest/APIReference/API_CreateSlackChannelConfiguration.html

#### Defined in

actions/supportapp.ts:17

___

### DeleteAccountAlias

• **DeleteAccountAlias** = ``"supportapp:DeleteAccountAlias"``

Grants permission to delete an alias from your account

See https://docs.aws.amazon.com/supportapp/latest/APIReference/API_DeleteAccountAlias.html

#### Defined in

actions/supportapp.ts:23

___

### DeleteSlackChannelConfiguration

• **DeleteSlackChannelConfiguration** = ``"supportapp:DeleteSlackChannelConfiguration"``

Grants permission to delete a Slack channel configuration from your account

See https://docs.aws.amazon.com/supportapp/latest/APIReference/API_DeleteSlackChannelConfiguration.html

#### Defined in

actions/supportapp.ts:29

___

### DeleteSlackWorkspaceConfiguration

• **DeleteSlackWorkspaceConfiguration** = ``"supportapp:DeleteSlackWorkspaceConfiguration"``

Grants permission to delete a Slack workspace configuration from your account

See https://docs.aws.amazon.com/supportapp/latest/APIReference/API_DeleteSlackWorkspaceConfiguration.html

#### Defined in

actions/supportapp.ts:35

___

### DescribeSlackChannels

• **DescribeSlackChannels** = ``"supportapp:DescribeSlackChannels"``

Grants permission to list all public Slack channels in a workspace that have in
vited the AWS Support App

See https://docs.aws.amazon.com/awssupport/latest/user/slack-authorization-permissions.html

#### Defined in

actions/supportapp.ts:42

___

### GetAccountAlias

• **GetAccountAlias** = ``"supportapp:GetAccountAlias"``

Grants permission to get the alias for your account

See https://docs.aws.amazon.com/supportapp/latest/APIReference/API_GetAccountAlias.html

#### Defined in

actions/supportapp.ts:48

___

### GetSlackOauthParameters

• **GetSlackOauthParameters** = ``"supportapp:GetSlackOauthParameters"``

Grants permission to get parameters for the Slack OAuth code, which the AWS Sup
port App uses to authorize the workspace

See https://docs.aws.amazon.com/awssupport/latest/user/slack-authorization-permissions.html

#### Defined in

actions/supportapp.ts:55

___

### ListSlackChannelConfigurations

• **ListSlackChannelConfigurations** = ``"supportapp:ListSlackChannelConfigurations"``

Grants permission to list all Slack channel configurations for your account

See https://docs.aws.amazon.com/supportapp/latest/APIReference/API_ListSlackChannelConfigurations.html

#### Defined in

actions/supportapp.ts:61

___

### ListSlackWorkspaceConfigurations

• **ListSlackWorkspaceConfigurations** = ``"supportapp:ListSlackWorkspaceConfigurations"``

Grants permission to list all Slack workspace configurations for your account

See https://docs.aws.amazon.com/supportapp/latest/APIReference/API_ListSlackWorkspaceConfigurations.html

#### Defined in

actions/supportapp.ts:67

___

### PutAccountAlias

• **PutAccountAlias** = ``"supportapp:PutAccountAlias"``

Grants permission to create or update an alias for your account

See https://docs.aws.amazon.com/supportapp/latest/APIReference/API_PutAccountAlias.html

#### Defined in

actions/supportapp.ts:73

___

### RedeemSlackOauthCode

• **RedeemSlackOauthCode** = ``"supportapp:RedeemSlackOauthCode"``

Grants permission to redeem the Slack OAuth code, which the AWS Support App use
s to authorize the workspace

See https://docs.aws.amazon.com/awssupport/latest/user/slack-authorization-permissions.html

#### Defined in

actions/supportapp.ts:80

___

### RegisterSlackWorkspaceForOrganization

• **RegisterSlackWorkspaceForOrganization** = ``"supportapp:RegisterSlackWorkspaceForOrganization"``

Grants permission to register a Slack workspace for an AWS account that is part
of an organization

See https://docs.aws.amazon.com/supportapp/latest/APIReference/API_RegisterSlackWorkspaceForOrganization.html

#### Defined in

actions/supportapp.ts:87

___

### UpdateSlackChannelConfiguration

• **UpdateSlackChannelConfiguration** = ``"supportapp:UpdateSlackChannelConfiguration"``

Grants permission to update a Slack channel configuration for your account

See https://docs.aws.amazon.com/supportapp/latest/APIReference/API_UpdateSlackChannelConfiguration.html

#### Defined in

actions/supportapp.ts:93
