[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSecuritylakeActions

# Enumeration: AwsSecuritylakeActions

All IAM policy actions for Amazon Security Lake (SECURITYLAKE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsecuritylake.html

2024-02-12T09:59:10.218Z

## Table of contents

### Enumeration Members

- [CreateAwsLogSource](AwsSecuritylakeActions.md#createawslogsource)
- [CreateCustomLogSource](AwsSecuritylakeActions.md#createcustomlogsource)
- [CreateDataLake](AwsSecuritylakeActions.md#createdatalake)
- [CreateDataLakeExceptionSubscription](AwsSecuritylakeActions.md#createdatalakeexceptionsubscription)
- [CreateDataLakeOrganizationConfiguration](AwsSecuritylakeActions.md#createdatalakeorganizationconfiguration)
- [CreateSubscriber](AwsSecuritylakeActions.md#createsubscriber)
- [CreateSubscriberNotification](AwsSecuritylakeActions.md#createsubscribernotification)
- [DeleteAwsLogSource](AwsSecuritylakeActions.md#deleteawslogsource)
- [DeleteCustomLogSource](AwsSecuritylakeActions.md#deletecustomlogsource)
- [DeleteDataLake](AwsSecuritylakeActions.md#deletedatalake)
- [DeleteDataLakeExceptionSubscription](AwsSecuritylakeActions.md#deletedatalakeexceptionsubscription)
- [DeleteDataLakeOrganizationConfiguration](AwsSecuritylakeActions.md#deletedatalakeorganizationconfiguration)
- [DeleteSubscriber](AwsSecuritylakeActions.md#deletesubscriber)
- [DeleteSubscriberNotification](AwsSecuritylakeActions.md#deletesubscribernotification)
- [DeregisterDataLakeDelegatedAdministrator](AwsSecuritylakeActions.md#deregisterdatalakedelegatedadministrator)
- [GetDataLakeExceptionSubscription](AwsSecuritylakeActions.md#getdatalakeexceptionsubscription)
- [GetDataLakeOrganizationConfiguration](AwsSecuritylakeActions.md#getdatalakeorganizationconfiguration)
- [GetDataLakeSources](AwsSecuritylakeActions.md#getdatalakesources)
- [GetSubscriber](AwsSecuritylakeActions.md#getsubscriber)
- [ListDataLakeExceptions](AwsSecuritylakeActions.md#listdatalakeexceptions)
- [ListDataLakes](AwsSecuritylakeActions.md#listdatalakes)
- [ListLogSources](AwsSecuritylakeActions.md#listlogsources)
- [ListSubscribers](AwsSecuritylakeActions.md#listsubscribers)
- [ListTagsForResource](AwsSecuritylakeActions.md#listtagsforresource)
- [RegisterDataLakeDelegatedAdministrator](AwsSecuritylakeActions.md#registerdatalakedelegatedadministrator)
- [TagResource](AwsSecuritylakeActions.md#tagresource)
- [UntagResource](AwsSecuritylakeActions.md#untagresource)
- [UpdateDataLake](AwsSecuritylakeActions.md#updatedatalake)
- [UpdateDataLakeExceptionSubscription](AwsSecuritylakeActions.md#updatedatalakeexceptionsubscription)
- [UpdateSubscriber](AwsSecuritylakeActions.md#updatesubscriber)
- [UpdateSubscriberNotification](AwsSecuritylakeActions.md#updatesubscribernotification)

## Enumeration Members

### CreateAwsLogSource

• **CreateAwsLogSource** = ``"securitylake:CreateAwsLogSource"``

Grants permission to enable any source type in any region for accounts that are
either part of a trusted organization or standalone account

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateAwsLogSource.html

#### Defined in

actions/securitylake.ts:18

___

### CreateCustomLogSource

• **CreateCustomLogSource** = ``"securitylake:CreateCustomLogSource"``

Grants permission to add a custom source

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateCustomLogSource.html

#### Defined in

actions/securitylake.ts:24

___

### CreateDataLake

• **CreateDataLake** = ``"securitylake:CreateDataLake"``

Grants permission to create a new security data lake

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDataLake.html

#### Defined in

actions/securitylake.ts:30

___

### CreateDataLakeExceptionSubscription

• **CreateDataLakeExceptionSubscription** = ``"securitylake:CreateDataLakeExceptionSubscription"``

Grants permission to get instant notifications about exceptions. Subscribes to
the SNS topics for exception notifications

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDataLakeExceptionSubscription.html

#### Defined in

actions/securitylake.ts:37

___

### CreateDataLakeOrganizationConfiguration

• **CreateDataLakeOrganizationConfiguration** = ``"securitylake:CreateDataLakeOrganizationConfiguration"``

Grants permission to automatically enable Amazon Security Lake for new member a
ccounts in your organization

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDataLakeOrganizationConfiguration.html

#### Defined in

actions/securitylake.ts:44

___

### CreateSubscriber

• **CreateSubscriber** = ``"securitylake:CreateSubscriber"``

Grants permission to create a subscriber

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateSubscriber.html

#### Defined in

actions/securitylake.ts:50

___

### CreateSubscriberNotification

• **CreateSubscriberNotification** = ``"securitylake:CreateSubscriberNotification"``

Grants permission to create a webhook invocation to notify a client when there
is new data in the data lake

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateSubscriberNotification.html

#### Defined in

actions/securitylake.ts:57

___

### DeleteAwsLogSource

• **DeleteAwsLogSource** = ``"securitylake:DeleteAwsLogSource"``

Grants permission to disable any source type in any region for accounts that ar
e part of a trusted organization or standalone accounts

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteAwsLogSource.html

#### Defined in

actions/securitylake.ts:64

___

### DeleteCustomLogSource

• **DeleteCustomLogSource** = ``"securitylake:DeleteCustomLogSource"``

Grants permission to remove a custom source

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteCustomLogSource.html

#### Defined in

actions/securitylake.ts:70

___

### DeleteDataLake

• **DeleteDataLake** = ``"securitylake:DeleteDataLake"``

Grants permission to delete security data lake

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDataLake.html

#### Defined in

actions/securitylake.ts:76

___

### DeleteDataLakeExceptionSubscription

• **DeleteDataLakeExceptionSubscription** = ``"securitylake:DeleteDataLakeExceptionSubscription"``

Grants permission to unsubscribe from SNS topics for exception notifications. R
emoves exception notifications for the SNS topic

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDataLakeExceptionSubscription.html

#### Defined in

actions/securitylake.ts:83

___

### DeleteDataLakeOrganizationConfiguration

• **DeleteDataLakeOrganizationConfiguration** = ``"securitylake:DeleteDataLakeOrganizationConfiguration"``

Grants permission to remove the automatic enablement of Amazon Security Lake ac
cess for new organization accounts

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDataLakeOrganizationConfiguration.html

#### Defined in

actions/securitylake.ts:90

___

### DeleteSubscriber

• **DeleteSubscriber** = ``"securitylake:DeleteSubscriber"``

Grants permission to delete the specified subscriber

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteSubscriber.html

#### Defined in

actions/securitylake.ts:96

___

### DeleteSubscriberNotification

• **DeleteSubscriberNotification** = ``"securitylake:DeleteSubscriberNotification"``

Grants permission to remove a webhook invocation to notify a client when there
is new data in the data lake

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteSubscriberNotification.html

#### Defined in

actions/securitylake.ts:103

___

### DeregisterDataLakeDelegatedAdministrator

• **DeregisterDataLakeDelegatedAdministrator** = ``"securitylake:DeregisterDataLakeDelegatedAdministrator"``

Grants permission to remove the Delegated Administrator account and disable Ama
zon Security Lake as a service for this organization

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeregisterDataLakeDelegatedAdministrator.html

#### Defined in

actions/securitylake.ts:110

___

### GetDataLakeExceptionSubscription

• **GetDataLakeExceptionSubscription** = ``"securitylake:GetDataLakeExceptionSubscription"``

Grants permission to query the protocol and endpoint that were provided when su
bscribing to SNS topics for exception notifications

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDataLakeExceptionSubscription.html

#### Defined in

actions/securitylake.ts:117

___

### GetDataLakeOrganizationConfiguration

• **GetDataLakeOrganizationConfiguration** = ``"securitylake:GetDataLakeOrganizationConfiguration"``

Grants permission to get an organization’s configuration setting for automatica
lly enabling Amazon Security Lake access for new organization accounts

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDataLakeOrganizationConfiguration.html

#### Defined in

actions/securitylake.ts:124

___

### GetDataLakeSources

• **GetDataLakeSources** = ``"securitylake:GetDataLakeSources"``

Grants permission to get a static snapshot of the security data lake in the cur
rent region. The snapshot includes enabled accounts and log sources

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDataLakeSources.html

#### Defined in

actions/securitylake.ts:131

___

### GetSubscriber

• **GetSubscriber** = ``"securitylake:GetSubscriber"``

Grants permission to get information about subscriber that is already created

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetSubscriber.html

#### Defined in

actions/securitylake.ts:137

___

### ListDataLakeExceptions

• **ListDataLakeExceptions** = ``"securitylake:ListDataLakeExceptions"``

Grants permission to get the list of all non-retryable failures

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListDataLakeExceptions.html

#### Defined in

actions/securitylake.ts:143

___

### ListDataLakes

• **ListDataLakes** = ``"securitylake:ListDataLakes"``

Grants permission to list information about the security data lakes

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListDataLakes.html

#### Defined in

actions/securitylake.ts:149

___

### ListLogSources

• **ListLogSources** = ``"securitylake:ListLogSources"``

Grants permission to view the enabled accounts. You can view the enabled source
s in the enabled regions

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListLogSources.html

#### Defined in

actions/securitylake.ts:156

___

### ListSubscribers

• **ListSubscribers** = ``"securitylake:ListSubscribers"``

Grants permission to list all subscribers

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListSubscribers.html

#### Defined in

actions/securitylake.ts:162

___

### ListTagsForResource

• **ListTagsForResource** = ``"securitylake:ListTagsForResource"``

Grants permission to list all tags for the resource

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/securitylake.ts:168

___

### RegisterDataLakeDelegatedAdministrator

• **RegisterDataLakeDelegatedAdministrator** = ``"securitylake:RegisterDataLakeDelegatedAdministrator"``

Grants permission to designate an account as the Amazon Security Lake administr
ator account for the organization

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_RegisterDataLakeDelegatedAdministrator.html

#### Defined in

actions/securitylake.ts:175

___

### TagResource

• **TagResource** = ``"securitylake:TagResource"``

Grants permission to add tags to the resource

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_TagResource.html

#### Defined in

actions/securitylake.ts:181

___

### UntagResource

• **UntagResource** = ``"securitylake:UntagResource"``

Grants permission to remove tags from the resource

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UntagResource.html

#### Defined in

actions/securitylake.ts:187

___

### UpdateDataLake

• **UpdateDataLake** = ``"securitylake:UpdateDataLake"``

Grants permission to update a security data lake

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateDataLake.html

#### Defined in

actions/securitylake.ts:193

___

### UpdateDataLakeExceptionSubscription

• **UpdateDataLakeExceptionSubscription** = ``"securitylake:UpdateDataLakeExceptionSubscription"``

Grants permission to update subscriptions to the SNS topics for exception notif
ications

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateDataLakeExceptionSubscription.html

#### Defined in

actions/securitylake.ts:200

___

### UpdateSubscriber

• **UpdateSubscriber** = ``"securitylake:UpdateSubscriber"``

Grants permission to update subscriber

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateSubscriber.html

#### Defined in

actions/securitylake.ts:206

___

### UpdateSubscriberNotification

• **UpdateSubscriberNotification** = ``"securitylake:UpdateSubscriberNotification"``

Grants permission to update a webhook invocation to notify a client when there
is new data in the data lake

See https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateSubscriberNotification.html

#### Defined in

actions/securitylake.ts:213
