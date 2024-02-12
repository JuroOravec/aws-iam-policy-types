[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMqActions

# Enumeration: AwsMqActions

All IAM policy actions for Amazon MQ (MQ)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmq.html

2024-02-12T09:58:27.055Z

## Table of contents

### Enumeration Members

- [CreateBroker](AwsMqActions.md#createbroker)
- [CreateConfiguration](AwsMqActions.md#createconfiguration)
- [CreateReplicaBroker](AwsMqActions.md#createreplicabroker)
- [CreateTags](AwsMqActions.md#createtags)
- [CreateUser](AwsMqActions.md#createuser)
- [DeleteBroker](AwsMqActions.md#deletebroker)
- [DeleteTags](AwsMqActions.md#deletetags)
- [DeleteUser](AwsMqActions.md#deleteuser)
- [DescribeBroker](AwsMqActions.md#describebroker)
- [DescribeBrokerEngineTypes](AwsMqActions.md#describebrokerenginetypes)
- [DescribeBrokerInstanceOptions](AwsMqActions.md#describebrokerinstanceoptions)
- [DescribeConfiguration](AwsMqActions.md#describeconfiguration)
- [DescribeConfigurationRevision](AwsMqActions.md#describeconfigurationrevision)
- [DescribeUser](AwsMqActions.md#describeuser)
- [ListBrokers](AwsMqActions.md#listbrokers)
- [ListConfigurationRevisions](AwsMqActions.md#listconfigurationrevisions)
- [ListConfigurations](AwsMqActions.md#listconfigurations)
- [ListTags](AwsMqActions.md#listtags)
- [ListUsers](AwsMqActions.md#listusers)
- [Promote](AwsMqActions.md#promote)
- [RebootBroker](AwsMqActions.md#rebootbroker)
- [UpdateBroker](AwsMqActions.md#updatebroker)
- [UpdateConfiguration](AwsMqActions.md#updateconfiguration)
- [UpdateUser](AwsMqActions.md#updateuser)

## Enumeration Members

### CreateBroker

• **CreateBroker** = ``"mq:CreateBroker"``

Grants permission to create a broker

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-post

#### Defined in

actions/mq.ts:17

___

### CreateConfiguration

• **CreateConfiguration** = ``"mq:CreateConfiguration"``

Grants permission to create a new configuration for the specified configuration
name. Amazon MQ uses the default configuration (the engine type and engine vers
ion)

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-post

#### Defined in

actions/mq.ts:25

___

### CreateReplicaBroker

• **CreateReplicaBroker** = ``"mq:CreateReplicaBroker"``

Grants permission to create a replica broker

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-post

#### Defined in

actions/mq.ts:31

___

### CreateTags

• **CreateTags** = ``"mq:CreateTags"``

Grants permission to create tags

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-post

#### Defined in

actions/mq.ts:37

___

### CreateUser

• **CreateUser** = ``"mq:CreateUser"``

Grants permission to create an ActiveMQ user

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-post

#### Defined in

actions/mq.ts:43

___

### DeleteBroker

• **DeleteBroker** = ``"mq:DeleteBroker"``

Grants permission to delete a broker

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-delete

#### Defined in

actions/mq.ts:49

___

### DeleteTags

• **DeleteTags** = ``"mq:DeleteTags"``

Grants permission to delete tags

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-delete

#### Defined in

actions/mq.ts:55

___

### DeleteUser

• **DeleteUser** = ``"mq:DeleteUser"``

Grants permission to delete an ActiveMQ user

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-delete

#### Defined in

actions/mq.ts:61

___

### DescribeBroker

• **DescribeBroker** = ``"mq:DescribeBroker"``

Grants permission to return information about the specified broker

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get

#### Defined in

actions/mq.ts:67

___

### DescribeBrokerEngineTypes

• **DescribeBrokerEngineTypes** = ``"mq:DescribeBrokerEngineTypes"``

Grants permission to return information about broker engines

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-engine-types.html#broker-engine-types-http-methods

#### Defined in

actions/mq.ts:73

___

### DescribeBrokerInstanceOptions

• **DescribeBrokerInstanceOptions** = ``"mq:DescribeBrokerInstanceOptions"``

Grants permission to return information about the broker instance options

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-instance-options.html#broker-engine-types-http-methods

#### Defined in

actions/mq.ts:79

___

### DescribeConfiguration

• **DescribeConfiguration** = ``"mq:DescribeConfiguration"``

Grants permission to return information about the specified configuration

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-get

#### Defined in

actions/mq.ts:85

___

### DescribeConfigurationRevision

• **DescribeConfigurationRevision** = ``"mq:DescribeConfigurationRevision"``

Grants permission to return the specified configuration revision for the specif
ied configuration

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration-revision.html#rest-api-configuration-revision-methods-get

#### Defined in

actions/mq.ts:92

___

### DescribeUser

• **DescribeUser** = ``"mq:DescribeUser"``

Grants permission to return information about an ActiveMQ user

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-get

#### Defined in

actions/mq.ts:98

___

### ListBrokers

• **ListBrokers** = ``"mq:ListBrokers"``

Grants permission to return a list of all brokers

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-get

#### Defined in

actions/mq.ts:104

___

### ListConfigurationRevisions

• **ListConfigurationRevisions** = ``"mq:ListConfigurationRevisions"``

Grants permission to return a list of all existing revisions for the specified
configuration

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-revisions.html#rest-api-revisions-methods-get

#### Defined in

actions/mq.ts:111

___

### ListConfigurations

• **ListConfigurations** = ``"mq:ListConfigurations"``

Grants permission to return a list of all configurations

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-get

#### Defined in

actions/mq.ts:117

___

### ListTags

• **ListTags** = ``"mq:ListTags"``

Grants permission to return a list of tags

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-get

#### Defined in

actions/mq.ts:123

___

### ListUsers

• **ListUsers** = ``"mq:ListUsers"``

Grants permission to return a list of all ActiveMQ users

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-users.html#rest-api-users-methods-get

#### Defined in

actions/mq.ts:129

___

### Promote

• **Promote** = ``"mq:Promote"``

Grants permission to promote a broker

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-promote.html#rest-api-promote-methods-post

#### Defined in

actions/mq.ts:135

___

### RebootBroker

• **RebootBroker** = ``"mq:RebootBroker"``

Grants permission to reboot a broker

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-restart.html#rest-api-reboot-methods-post

#### Defined in

actions/mq.ts:141

___

### UpdateBroker

• **UpdateBroker** = ``"mq:UpdateBroker"``

Grants permission to add a pending configuration change to a broker

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get

#### Defined in

actions/mq.ts:147

___

### UpdateConfiguration

• **UpdateConfiguration** = ``"mq:UpdateConfiguration"``

Grants permission to update the specified configuration

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-put

#### Defined in

actions/mq.ts:153

___

### UpdateUser

• **UpdateUser** = ``"mq:UpdateUser"``

Grants permission to update the information for an ActiveMQ user

See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-put

#### Defined in

actions/mq.ts:159
