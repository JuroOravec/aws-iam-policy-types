[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodestarConnectionsActions

# Enumeration: AwsCodestarConnectionsActions

All IAM policy actions for AWS CodeStar Connections (CODESTAR-CONNECTIONS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarconnections.html

2024-02-12T09:56:39.109Z

## Table of contents

### Enumeration Members

- [CreateConnection](AwsCodestarConnectionsActions.md#createconnection)
- [CreateHost](AwsCodestarConnectionsActions.md#createhost)
- [CreateRepositoryLink](AwsCodestarConnectionsActions.md#createrepositorylink)
- [CreateSyncConfiguration](AwsCodestarConnectionsActions.md#createsyncconfiguration)
- [DeleteConnection](AwsCodestarConnectionsActions.md#deleteconnection)
- [DeleteHost](AwsCodestarConnectionsActions.md#deletehost)
- [DeleteRepositoryLink](AwsCodestarConnectionsActions.md#deleterepositorylink)
- [DeleteSyncConfiguration](AwsCodestarConnectionsActions.md#deletesyncconfiguration)
- [GetConnection](AwsCodestarConnectionsActions.md#getconnection)
- [GetHost](AwsCodestarConnectionsActions.md#gethost)
- [GetIndividualAccessToken](AwsCodestarConnectionsActions.md#getindividualaccesstoken)
- [GetInstallationUrl](AwsCodestarConnectionsActions.md#getinstallationurl)
- [GetRepositoryLink](AwsCodestarConnectionsActions.md#getrepositorylink)
- [GetRepositorySyncStatus](AwsCodestarConnectionsActions.md#getrepositorysyncstatus)
- [GetResourceSyncStatus](AwsCodestarConnectionsActions.md#getresourcesyncstatus)
- [GetSyncBlockerSummary](AwsCodestarConnectionsActions.md#getsyncblockersummary)
- [GetSyncConfiguration](AwsCodestarConnectionsActions.md#getsyncconfiguration)
- [ListConnections](AwsCodestarConnectionsActions.md#listconnections)
- [ListHosts](AwsCodestarConnectionsActions.md#listhosts)
- [ListInstallationTargets](AwsCodestarConnectionsActions.md#listinstallationtargets)
- [ListRepositoryLinks](AwsCodestarConnectionsActions.md#listrepositorylinks)
- [ListRepositorySyncDefinitions](AwsCodestarConnectionsActions.md#listrepositorysyncdefinitions)
- [ListSyncConfigurations](AwsCodestarConnectionsActions.md#listsyncconfigurations)
- [ListTagsForResource](AwsCodestarConnectionsActions.md#listtagsforresource)
- [PassConnection](AwsCodestarConnectionsActions.md#passconnection)
- [PassRepository](AwsCodestarConnectionsActions.md#passrepository)
- [RegisterAppCode](AwsCodestarConnectionsActions.md#registerappcode)
- [StartAppRegistrationHandshake](AwsCodestarConnectionsActions.md#startappregistrationhandshake)
- [StartOAuthHandshake](AwsCodestarConnectionsActions.md#startoauthhandshake)
- [TagResource](AwsCodestarConnectionsActions.md#tagresource)
- [UntagResource](AwsCodestarConnectionsActions.md#untagresource)
- [UpdateConnectionInstallation](AwsCodestarConnectionsActions.md#updateconnectioninstallation)
- [UpdateHost](AwsCodestarConnectionsActions.md#updatehost)
- [UpdateRepositoryLink](AwsCodestarConnectionsActions.md#updaterepositorylink)
- [UpdateSyncBlocker](AwsCodestarConnectionsActions.md#updatesyncblocker)
- [UpdateSyncConfiguration](AwsCodestarConnectionsActions.md#updatesyncconfiguration)
- [UseConnection](AwsCodestarConnectionsActions.md#useconnection)

## Enumeration Members

### CreateConnection

• **CreateConnection** = ``"codestar-connections:CreateConnection"``

Grants permission to create a Connection resource

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateConnection.html

#### Defined in

actions/codestar-connections.ts:17

___

### CreateHost

• **CreateHost** = ``"codestar-connections:CreateHost"``

Grants permission to create a host resource

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateHost.html

#### Defined in

actions/codestar-connections.ts:23

___

### CreateRepositoryLink

• **CreateRepositoryLink** = ``"codestar-connections:CreateRepositoryLink"``

Grants permission to create a repository link

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateRepositoryLink.html

#### Defined in

actions/codestar-connections.ts:29

___

### CreateSyncConfiguration

• **CreateSyncConfiguration** = ``"codestar-connections:CreateSyncConfiguration"``

Grants permission to create a template sync config

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateSyncConfiguration.html

#### Defined in

actions/codestar-connections.ts:35

___

### DeleteConnection

• **DeleteConnection** = ``"codestar-connections:DeleteConnection"``

Grants permission to delete a Connection resource

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteConnection.html

#### Defined in

actions/codestar-connections.ts:41

___

### DeleteHost

• **DeleteHost** = ``"codestar-connections:DeleteHost"``

Grants permission to delete a host resource

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteHost.html

#### Defined in

actions/codestar-connections.ts:47

___

### DeleteRepositoryLink

• **DeleteRepositoryLink** = ``"codestar-connections:DeleteRepositoryLink"``

Grants permission to delete a repository link

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteRepositoryLink.html

#### Defined in

actions/codestar-connections.ts:53

___

### DeleteSyncConfiguration

• **DeleteSyncConfiguration** = ``"codestar-connections:DeleteSyncConfiguration"``

Grants permission to delete a sync configuration

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteSyncConfiguration.html

#### Defined in

actions/codestar-connections.ts:59

___

### GetConnection

• **GetConnection** = ``"codestar-connections:GetConnection"``

Grants permission to get details about a Connection resource

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetConnection.html

#### Defined in

actions/codestar-connections.ts:65

___

### GetHost

• **GetHost** = ``"codestar-connections:GetHost"``

Grants permission to get details about a host resource

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetHost.html

#### Defined in

actions/codestar-connections.ts:71

___

### GetIndividualAccessToken

• **GetIndividualAccessToken** = ``"codestar-connections:GetIndividualAccessToken"``

Grants permission to associate a third party, such as a Bitbucket App installat
ion, with a Connection

See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake

#### Defined in

actions/codestar-connections.ts:78

___

### GetInstallationUrl

• **GetInstallationUrl** = ``"codestar-connections:GetInstallationUrl"``

Grants permission to associate a third party, such as a Bitbucket App installat
ion, with a Connection

See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake

#### Defined in

actions/codestar-connections.ts:85

___

### GetRepositoryLink

• **GetRepositoryLink** = ``"codestar-connections:GetRepositoryLink"``

Grants permission to describe a repository link

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetRepositoryLink.html

#### Defined in

actions/codestar-connections.ts:91

___

### GetRepositorySyncStatus

• **GetRepositorySyncStatus** = ``"codestar-connections:GetRepositorySyncStatus"``

Grants permission to get the latest sync status for a repository

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetRepositorySyncStatus.html

#### Defined in

actions/codestar-connections.ts:97

___

### GetResourceSyncStatus

• **GetResourceSyncStatus** = ``"codestar-connections:GetResourceSyncStatus"``

Grants permission to get the latest sync status for a resource (cfn stack or ot
her resources)

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetResourceSyncStatus.html

#### Defined in

actions/codestar-connections.ts:104

___

### GetSyncBlockerSummary

• **GetSyncBlockerSummary** = ``"codestar-connections:GetSyncBlockerSummary"``

Grants permission to describe service sync blockers on a resource (cfn stack or
other resources)

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetSyncBlockerSummary.html

#### Defined in

actions/codestar-connections.ts:111

___

### GetSyncConfiguration

• **GetSyncConfiguration** = ``"codestar-connections:GetSyncConfiguration"``

Grants permission to describe a sync configuration

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetSyncConfiguration.html

#### Defined in

actions/codestar-connections.ts:117

___

### ListConnections

• **ListConnections** = ``"codestar-connections:ListConnections"``

Grants permission to list Connection resources

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListConnections.html

#### Defined in

actions/codestar-connections.ts:123

___

### ListHosts

• **ListHosts** = ``"codestar-connections:ListHosts"``

Grants permission to list host resources

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListHosts.html

#### Defined in

actions/codestar-connections.ts:129

___

### ListInstallationTargets

• **ListInstallationTargets** = ``"codestar-connections:ListInstallationTargets"``

Grants permission to associate a third party, such as a Bitbucket App installat
ion, with a Connection

See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake

#### Defined in

actions/codestar-connections.ts:136

___

### ListRepositoryLinks

• **ListRepositoryLinks** = ``"codestar-connections:ListRepositoryLinks"``

Grants permission to list repository links

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListRepositoryLinks.html

#### Defined in

actions/codestar-connections.ts:142

___

### ListRepositorySyncDefinitions

• **ListRepositorySyncDefinitions** = ``"codestar-connections:ListRepositorySyncDefinitions"``

Grants permission to list repository sync definitions

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListRepositorySyncDefinitions.html

#### Defined in

actions/codestar-connections.ts:148

___

### ListSyncConfigurations

• **ListSyncConfigurations** = ``"codestar-connections:ListSyncConfigurations"``

Grants permission to list sync configurations for a repository link

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListSyncConfigurations.html

#### Defined in

actions/codestar-connections.ts:154

___

### ListTagsForResource

• **ListTagsForResource** = ``"codestar-connections:ListTagsForResource"``

Grants permission to the set of key-value pairs that are used to manage the res
ource

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/codestar-connections.ts:161

___

### PassConnection

• **PassConnection** = ``"codestar-connections:PassConnection"``

Grants permission to pass a Connection resource to an AWS service that accepts
a Connection ARN as input, such as codepipeline:CreatePipeline

See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passconnection

#### Defined in

actions/codestar-connections.ts:168

___

### PassRepository

• **PassRepository** = ``"codestar-connections:PassRepository"``

Grants permission to pass a repository link resource to an AWS service that acc
epts a RepositoryLinkId as input, such as codestar-connections:CreateSyncConfig
uration

See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passrepository

#### Defined in

actions/codestar-connections.ts:176

___

### RegisterAppCode

• **RegisterAppCode** = ``"codestar-connections:RegisterAppCode"``

Grants permission to associate a third party server, such as a GitHub Enterpris
e Server instance, with a Host

See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#connections-permissions-actions-host-registration

#### Defined in

actions/codestar-connections.ts:183

___

### StartAppRegistrationHandshake

• **StartAppRegistrationHandshake** = ``"codestar-connections:StartAppRegistrationHandshake"``

Grants permission to associate a third party server, such as a GitHub Enterpris
e Server instance, with a Host

See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#connections-permissions-actions-host-registration

#### Defined in

actions/codestar-connections.ts:190

___

### StartOAuthHandshake

• **StartOAuthHandshake** = ``"codestar-connections:StartOAuthHandshake"``

Grants permission to associate a third party, such as a Bitbucket App installat
ion, with a Connection

See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake

#### Defined in

actions/codestar-connections.ts:197

___

### TagResource

• **TagResource** = ``"codestar-connections:TagResource"``

Grants permission to add or modify the tags of the given resource

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_TagResource.html

#### Defined in

actions/codestar-connections.ts:203

___

### UntagResource

• **UntagResource** = ``"codestar-connections:UntagResource"``

Grants permission to remove tags from an AWS resource

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UntagResource.html

#### Defined in

actions/codestar-connections.ts:209

___

### UpdateConnectionInstallation

• **UpdateConnectionInstallation** = ``"codestar-connections:UpdateConnectionInstallation"``

Grants permission to update a Connection resource with an installation of the C
odeStar Connections App

See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake

#### Defined in

actions/codestar-connections.ts:216

___

### UpdateHost

• **UpdateHost** = ``"codestar-connections:UpdateHost"``

Grants permission to update a host resource

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UpdateHost.html

#### Defined in

actions/codestar-connections.ts:222

___

### UpdateRepositoryLink

• **UpdateRepositoryLink** = ``"codestar-connections:UpdateRepositoryLink"``

Grants permission to update a repository link

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UpdateRepositoryLink.html

#### Defined in

actions/codestar-connections.ts:228

___

### UpdateSyncBlocker

• **UpdateSyncBlocker** = ``"codestar-connections:UpdateSyncBlocker"``

Grants permission to update a sync blocker for a resource (cfn stack or other r
esources)

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UpdateSyncBlocker.html

#### Defined in

actions/codestar-connections.ts:235

___

### UpdateSyncConfiguration

• **UpdateSyncConfiguration** = ``"codestar-connections:UpdateSyncConfiguration"``

Grants permission to update a sync configuration

See https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UpdateSyncConfiguration.html

#### Defined in

actions/codestar-connections.ts:241

___

### UseConnection

• **UseConnection** = ``"codestar-connections:UseConnection"``

Grants permission to use a Connection resource to call provider actions

See https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use

#### Defined in

actions/codestar-connections.ts:247
