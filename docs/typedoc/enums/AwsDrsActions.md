[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDrsActions

# Enumeration: AwsDrsActions

All IAM policy actions for AWS Elastic Disaster Recovery (DRS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticdisasterrecovery.html

2024-02-12T09:57:08.931Z

## Table of contents

### Enumeration Members

- [AssociateFailbackClientToRecoveryInstanceForDrs](AwsDrsActions.md#associatefailbackclienttorecoveryinstancefordrs)
- [AssociateSourceNetworkStack](AwsDrsActions.md#associatesourcenetworkstack)
- [BatchCreateVolumeSnapshotGroupForDrs](AwsDrsActions.md#batchcreatevolumesnapshotgroupfordrs)
- [BatchDeleteSnapshotRequestForDrs](AwsDrsActions.md#batchdeletesnapshotrequestfordrs)
- [CreateConvertedSnapshotForDrs](AwsDrsActions.md#createconvertedsnapshotfordrs)
- [CreateExtendedSourceServer](AwsDrsActions.md#createextendedsourceserver)
- [CreateLaunchConfigurationTemplate](AwsDrsActions.md#createlaunchconfigurationtemplate)
- [CreateRecoveryInstanceForDrs](AwsDrsActions.md#createrecoveryinstancefordrs)
- [CreateReplicationConfigurationTemplate](AwsDrsActions.md#createreplicationconfigurationtemplate)
- [CreateSourceNetwork](AwsDrsActions.md#createsourcenetwork)
- [CreateSourceServerForDrs](AwsDrsActions.md#createsourceserverfordrs)
- [DeleteJob](AwsDrsActions.md#deletejob)
- [DeleteLaunchAction](AwsDrsActions.md#deletelaunchaction)
- [DeleteLaunchConfigurationTemplate](AwsDrsActions.md#deletelaunchconfigurationtemplate)
- [DeleteRecoveryInstance](AwsDrsActions.md#deleterecoveryinstance)
- [DeleteReplicationConfigurationTemplate](AwsDrsActions.md#deletereplicationconfigurationtemplate)
- [DeleteSourceNetwork](AwsDrsActions.md#deletesourcenetwork)
- [DeleteSourceServer](AwsDrsActions.md#deletesourceserver)
- [DescribeJobLogItems](AwsDrsActions.md#describejoblogitems)
- [DescribeJobs](AwsDrsActions.md#describejobs)
- [DescribeLaunchConfigurationTemplates](AwsDrsActions.md#describelaunchconfigurationtemplates)
- [DescribeRecoveryInstances](AwsDrsActions.md#describerecoveryinstances)
- [DescribeRecoverySnapshots](AwsDrsActions.md#describerecoverysnapshots)
- [DescribeReplicationConfigurationTemplates](AwsDrsActions.md#describereplicationconfigurationtemplates)
- [DescribeReplicationServerAssociationsForDrs](AwsDrsActions.md#describereplicationserverassociationsfordrs)
- [DescribeSnapshotRequestsForDrs](AwsDrsActions.md#describesnapshotrequestsfordrs)
- [DescribeSourceNetworks](AwsDrsActions.md#describesourcenetworks)
- [DescribeSourceServers](AwsDrsActions.md#describesourceservers)
- [DisconnectRecoveryInstance](AwsDrsActions.md#disconnectrecoveryinstance)
- [DisconnectSourceServer](AwsDrsActions.md#disconnectsourceserver)
- [ExportSourceNetworkCfnTemplate](AwsDrsActions.md#exportsourcenetworkcfntemplate)
- [GetAgentCommandForDrs](AwsDrsActions.md#getagentcommandfordrs)
- [GetAgentConfirmedResumeInfoForDrs](AwsDrsActions.md#getagentconfirmedresumeinfofordrs)
- [GetAgentInstallationAssetsForDrs](AwsDrsActions.md#getagentinstallationassetsfordrs)
- [GetAgentReplicationInfoForDrs](AwsDrsActions.md#getagentreplicationinfofordrs)
- [GetAgentRuntimeConfigurationForDrs](AwsDrsActions.md#getagentruntimeconfigurationfordrs)
- [GetAgentSnapshotCreditsForDrs](AwsDrsActions.md#getagentsnapshotcreditsfordrs)
- [GetChannelCommandsForDrs](AwsDrsActions.md#getchannelcommandsfordrs)
- [GetFailbackCommandForDrs](AwsDrsActions.md#getfailbackcommandfordrs)
- [GetFailbackLaunchRequestedForDrs](AwsDrsActions.md#getfailbacklaunchrequestedfordrs)
- [GetFailbackReplicationConfiguration](AwsDrsActions.md#getfailbackreplicationconfiguration)
- [GetLaunchConfiguration](AwsDrsActions.md#getlaunchconfiguration)
- [GetReplicationConfiguration](AwsDrsActions.md#getreplicationconfiguration)
- [GetSuggestedFailbackClientDeviceMappingForDrs](AwsDrsActions.md#getsuggestedfailbackclientdevicemappingfordrs)
- [InitializeService](AwsDrsActions.md#initializeservice)
- [IssueAgentCertificateForDrs](AwsDrsActions.md#issueagentcertificatefordrs)
- [ListExtensibleSourceServers](AwsDrsActions.md#listextensiblesourceservers)
- [ListLaunchActions](AwsDrsActions.md#listlaunchactions)
- [ListStagingAccounts](AwsDrsActions.md#liststagingaccounts)
- [ListTagsForResource](AwsDrsActions.md#listtagsforresource)
- [NotifyAgentAuthenticationForDrs](AwsDrsActions.md#notifyagentauthenticationfordrs)
- [NotifyAgentConnectedForDrs](AwsDrsActions.md#notifyagentconnectedfordrs)
- [NotifyAgentDisconnectedForDrs](AwsDrsActions.md#notifyagentdisconnectedfordrs)
- [NotifyAgentReplicationProgressForDrs](AwsDrsActions.md#notifyagentreplicationprogressfordrs)
- [NotifyConsistencyAttainedForDrs](AwsDrsActions.md#notifyconsistencyattainedfordrs)
- [NotifyReplicationServerAuthenticationForDrs](AwsDrsActions.md#notifyreplicationserverauthenticationfordrs)
- [NotifyVolumeEventForDrs](AwsDrsActions.md#notifyvolumeeventfordrs)
- [PutLaunchAction](AwsDrsActions.md#putlaunchaction)
- [RetryDataReplication](AwsDrsActions.md#retrydatareplication)
- [ReverseReplication](AwsDrsActions.md#reversereplication)
- [SendAgentLogsForDrs](AwsDrsActions.md#sendagentlogsfordrs)
- [SendAgentMetricsForDrs](AwsDrsActions.md#sendagentmetricsfordrs)
- [SendChannelCommandResultForDrs](AwsDrsActions.md#sendchannelcommandresultfordrs)
- [SendClientLogsForDrs](AwsDrsActions.md#sendclientlogsfordrs)
- [SendClientMetricsForDrs](AwsDrsActions.md#sendclientmetricsfordrs)
- [SendVolumeStatsForDrs](AwsDrsActions.md#sendvolumestatsfordrs)
- [StartFailbackLaunch](AwsDrsActions.md#startfailbacklaunch)
- [StartRecovery](AwsDrsActions.md#startrecovery)
- [StartReplication](AwsDrsActions.md#startreplication)
- [StartSourceNetworkRecovery](AwsDrsActions.md#startsourcenetworkrecovery)
- [StartSourceNetworkReplication](AwsDrsActions.md#startsourcenetworkreplication)
- [StopFailback](AwsDrsActions.md#stopfailback)
- [StopReplication](AwsDrsActions.md#stopreplication)
- [StopSourceNetworkReplication](AwsDrsActions.md#stopsourcenetworkreplication)
- [TagResource](AwsDrsActions.md#tagresource)
- [TerminateRecoveryInstances](AwsDrsActions.md#terminaterecoveryinstances)
- [UntagResource](AwsDrsActions.md#untagresource)
- [UpdateAgentBacklogForDrs](AwsDrsActions.md#updateagentbacklogfordrs)
- [UpdateAgentConversionInfoForDrs](AwsDrsActions.md#updateagentconversioninfofordrs)
- [UpdateAgentReplicationInfoForDrs](AwsDrsActions.md#updateagentreplicationinfofordrs)
- [UpdateAgentReplicationProcessStateForDrs](AwsDrsActions.md#updateagentreplicationprocessstatefordrs)
- [UpdateAgentSourcePropertiesForDrs](AwsDrsActions.md#updateagentsourcepropertiesfordrs)
- [UpdateFailbackClientDeviceMappingForDrs](AwsDrsActions.md#updatefailbackclientdevicemappingfordrs)
- [UpdateFailbackClientLastSeenForDrs](AwsDrsActions.md#updatefailbackclientlastseenfordrs)
- [UpdateFailbackReplicationConfiguration](AwsDrsActions.md#updatefailbackreplicationconfiguration)
- [UpdateLaunchConfiguration](AwsDrsActions.md#updatelaunchconfiguration)
- [UpdateLaunchConfigurationTemplate](AwsDrsActions.md#updatelaunchconfigurationtemplate)
- [UpdateReplicationCertificateForDrs](AwsDrsActions.md#updatereplicationcertificatefordrs)
- [UpdateReplicationConfiguration](AwsDrsActions.md#updatereplicationconfiguration)
- [UpdateReplicationConfigurationTemplate](AwsDrsActions.md#updatereplicationconfigurationtemplate)

## Enumeration Members

### AssociateFailbackClientToRecoveryInstanceForDrs

• **AssociateFailbackClientToRecoveryInstanceForDrs** = ``"drs:AssociateFailbackClientToRecoveryInstanceForDrs"``

Grants permission to get associate failback client to recovery instance

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:17

___

### AssociateSourceNetworkStack

• **AssociateSourceNetworkStack** = ``"drs:AssociateSourceNetworkStack"``

Grants permission to associate CloudFormation stack with source network

See https://docs.aws.amazon.com/drs/latest/APIReference/API_AssociateSourceNetworkStack.html

#### Defined in

actions/drs.ts:23

___

### BatchCreateVolumeSnapshotGroupForDrs

• **BatchCreateVolumeSnapshotGroupForDrs** = ``"drs:BatchCreateVolumeSnapshotGroupForDrs"``

Grants permission to batch create volume snapshot group

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:29

___

### BatchDeleteSnapshotRequestForDrs

• **BatchDeleteSnapshotRequestForDrs** = ``"drs:BatchDeleteSnapshotRequestForDrs"``

Grants permission to batch delete snapshot request

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:35

___

### CreateConvertedSnapshotForDrs

• **CreateConvertedSnapshotForDrs** = ``"drs:CreateConvertedSnapshotForDrs"``

Grants permission to create converted snapshot

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:41

___

### CreateExtendedSourceServer

• **CreateExtendedSourceServer** = ``"drs:CreateExtendedSourceServer"``

Grants permission to extend a source server

See https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateExtendedSourceServer.html

#### Defined in

actions/drs.ts:47

___

### CreateLaunchConfigurationTemplate

• **CreateLaunchConfigurationTemplate** = ``"drs:CreateLaunchConfigurationTemplate"``

Grants permission to create launch configuration template

See https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateLaunchConfigurationTemplate.html

#### Defined in

actions/drs.ts:53

___

### CreateRecoveryInstanceForDrs

• **CreateRecoveryInstanceForDrs** = ``"drs:CreateRecoveryInstanceForDrs"``

Grants permission to create recovery instance

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:59

___

### CreateReplicationConfigurationTemplate

• **CreateReplicationConfigurationTemplate** = ``"drs:CreateReplicationConfigurationTemplate"``

Grants permission to create replication configuration template

See https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateReplicationConfigurationTemplate.html

#### Defined in

actions/drs.ts:65

___

### CreateSourceNetwork

• **CreateSourceNetwork** = ``"drs:CreateSourceNetwork"``

Grants permission to create a source network

See https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateSourceNetwork.html

#### Defined in

actions/drs.ts:71

___

### CreateSourceServerForDrs

• **CreateSourceServerForDrs** = ``"drs:CreateSourceServerForDrs"``

Grants permission to create a source server

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:77

___

### DeleteJob

• **DeleteJob** = ``"drs:DeleteJob"``

Grants permission to delete a job

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteJob.html

#### Defined in

actions/drs.ts:83

___

### DeleteLaunchAction

• **DeleteLaunchAction** = ``"drs:DeleteLaunchAction"``

Grants permission to delete a launch action

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteLaunchAction.html

#### Defined in

actions/drs.ts:89

___

### DeleteLaunchConfigurationTemplate

• **DeleteLaunchConfigurationTemplate** = ``"drs:DeleteLaunchConfigurationTemplate"``

Grants permission to delete launch configuration template

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteLaunchConfigurationTemplate.html

#### Defined in

actions/drs.ts:95

___

### DeleteRecoveryInstance

• **DeleteRecoveryInstance** = ``"drs:DeleteRecoveryInstance"``

Grants permission to delete recovery instance

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteRecoveryInstance.html

#### Defined in

actions/drs.ts:101

___

### DeleteReplicationConfigurationTemplate

• **DeleteReplicationConfigurationTemplate** = ``"drs:DeleteReplicationConfigurationTemplate"``

Grants permission to delete replication configuration template

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteReplicationConfigurationTemplate.html

#### Defined in

actions/drs.ts:107

___

### DeleteSourceNetwork

• **DeleteSourceNetwork** = ``"drs:DeleteSourceNetwork"``

Grants permission to delete source network

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteSourceNetwork.html

#### Defined in

actions/drs.ts:113

___

### DeleteSourceServer

• **DeleteSourceServer** = ``"drs:DeleteSourceServer"``

Grants permission to delete source server

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteSourceServer.html

#### Defined in

actions/drs.ts:119

___

### DescribeJobLogItems

• **DescribeJobLogItems** = ``"drs:DescribeJobLogItems"``

Grants permission to describe job log items

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeJobLogItems.html

#### Defined in

actions/drs.ts:125

___

### DescribeJobs

• **DescribeJobs** = ``"drs:DescribeJobs"``

Grants permission to describe jobs

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeJobs.html

#### Defined in

actions/drs.ts:131

___

### DescribeLaunchConfigurationTemplates

• **DescribeLaunchConfigurationTemplates** = ``"drs:DescribeLaunchConfigurationTemplates"``

Grants permission to describe launch configuration template

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeLaunchConfigurationTemplates.html

#### Defined in

actions/drs.ts:137

___

### DescribeRecoveryInstances

• **DescribeRecoveryInstances** = ``"drs:DescribeRecoveryInstances"``

Grants permission to describe recovery instances

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeRecoveryInstances.html

#### Defined in

actions/drs.ts:143

___

### DescribeRecoverySnapshots

• **DescribeRecoverySnapshots** = ``"drs:DescribeRecoverySnapshots"``

Grants permission to describe recovery snapshots

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeRecoverySnapshots.html

#### Defined in

actions/drs.ts:149

___

### DescribeReplicationConfigurationTemplates

• **DescribeReplicationConfigurationTemplates** = ``"drs:DescribeReplicationConfigurationTemplates"``

Grants permission to describe replication configuration template

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeReplicationConfigurationTemplates.html

#### Defined in

actions/drs.ts:155

___

### DescribeReplicationServerAssociationsForDrs

• **DescribeReplicationServerAssociationsForDrs** = ``"drs:DescribeReplicationServerAssociationsForDrs"``

Grants permission to describe replication server associations

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:161

___

### DescribeSnapshotRequestsForDrs

• **DescribeSnapshotRequestsForDrs** = ``"drs:DescribeSnapshotRequestsForDrs"``

Grants permission to describe snapshot requests

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:167

___

### DescribeSourceNetworks

• **DescribeSourceNetworks** = ``"drs:DescribeSourceNetworks"``

Grants permission to describe source networks

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeSourceNetworks.html

#### Defined in

actions/drs.ts:173

___

### DescribeSourceServers

• **DescribeSourceServers** = ``"drs:DescribeSourceServers"``

Grants permission to describe source servers

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeSourceServers.html

#### Defined in

actions/drs.ts:179

___

### DisconnectRecoveryInstance

• **DisconnectRecoveryInstance** = ``"drs:DisconnectRecoveryInstance"``

Grants permission to disconnect recovery instance

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DisconnectRecoveryInstance.html

#### Defined in

actions/drs.ts:185

___

### DisconnectSourceServer

• **DisconnectSourceServer** = ``"drs:DisconnectSourceServer"``

Grants permission to disconnect source server

See https://docs.aws.amazon.com/drs/latest/APIReference/API_DisconnectSourceServer.html

#### Defined in

actions/drs.ts:191

___

### ExportSourceNetworkCfnTemplate

• **ExportSourceNetworkCfnTemplate** = ``"drs:ExportSourceNetworkCfnTemplate"``

Grants permission to export CloudFormation template which contains source netwo
rk resources

See https://docs.aws.amazon.com/drs/latest/APIReference/API_ExportSourceNetworkCfnTemplate.html

#### Defined in

actions/drs.ts:198

___

### GetAgentCommandForDrs

• **GetAgentCommandForDrs** = ``"drs:GetAgentCommandForDrs"``

Grants permission to get agent command

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:204

___

### GetAgentConfirmedResumeInfoForDrs

• **GetAgentConfirmedResumeInfoForDrs** = ``"drs:GetAgentConfirmedResumeInfoForDrs"``

Grants permission to get agent confirmed resume info

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:210

___

### GetAgentInstallationAssetsForDrs

• **GetAgentInstallationAssetsForDrs** = ``"drs:GetAgentInstallationAssetsForDrs"``

Grants permission to get agent installation assets

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:216

___

### GetAgentReplicationInfoForDrs

• **GetAgentReplicationInfoForDrs** = ``"drs:GetAgentReplicationInfoForDrs"``

Grants permission to get agent replication info

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:222

___

### GetAgentRuntimeConfigurationForDrs

• **GetAgentRuntimeConfigurationForDrs** = ``"drs:GetAgentRuntimeConfigurationForDrs"``

Grants permission to get agent runtime configuration

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:228

___

### GetAgentSnapshotCreditsForDrs

• **GetAgentSnapshotCreditsForDrs** = ``"drs:GetAgentSnapshotCreditsForDrs"``

Grants permission to get agent snapshot credits

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:234

___

### GetChannelCommandsForDrs

• **GetChannelCommandsForDrs** = ``"drs:GetChannelCommandsForDrs"``

Grants permission to get channel commands

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:240

___

### GetFailbackCommandForDrs

• **GetFailbackCommandForDrs** = ``"drs:GetFailbackCommandForDrs"``

Grants permission to get failback command

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:246

___

### GetFailbackLaunchRequestedForDrs

• **GetFailbackLaunchRequestedForDrs** = ``"drs:GetFailbackLaunchRequestedForDrs"``

Grants permission to get failback launch requested

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:252

___

### GetFailbackReplicationConfiguration

• **GetFailbackReplicationConfiguration** = ``"drs:GetFailbackReplicationConfiguration"``

Grants permission to get failback replication configuration

See https://docs.aws.amazon.com/drs/latest/APIReference/API_GetFailbackReplicationConfiguration.html

#### Defined in

actions/drs.ts:258

___

### GetLaunchConfiguration

• **GetLaunchConfiguration** = ``"drs:GetLaunchConfiguration"``

Grants permission to get launch configuration

See https://docs.aws.amazon.com/drs/latest/APIReference/API_GetLaunchConfiguration.html

#### Defined in

actions/drs.ts:264

___

### GetReplicationConfiguration

• **GetReplicationConfiguration** = ``"drs:GetReplicationConfiguration"``

Grants permission to get replication configuration

See https://docs.aws.amazon.com/drs/latest/APIReference/API_GetReplicationConfiguration.html

#### Defined in

actions/drs.ts:270

___

### GetSuggestedFailbackClientDeviceMappingForDrs

• **GetSuggestedFailbackClientDeviceMappingForDrs** = ``"drs:GetSuggestedFailbackClientDeviceMappingForDrs"``

Grants permission to get suggested failback client device mapping

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:276

___

### InitializeService

• **InitializeService** = ``"drs:InitializeService"``

Grants permission to initialize service

See https://docs.aws.amazon.com/drs/latest/APIReference/API_InitializeService.html

#### Defined in

actions/drs.ts:282

___

### IssueAgentCertificateForDrs

• **IssueAgentCertificateForDrs** = ``"drs:IssueAgentCertificateForDrs"``

Grants permission to issue an agent certificate

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:288

___

### ListExtensibleSourceServers

• **ListExtensibleSourceServers** = ``"drs:ListExtensibleSourceServers"``

Grants permission to list extensible source servers

See https://docs.aws.amazon.com/drs/latest/APIReference/API_ListExtensibleSourceServers.html

#### Defined in

actions/drs.ts:294

___

### ListLaunchActions

• **ListLaunchActions** = ``"drs:ListLaunchActions"``

Grants permission to list launch actions

See https://docs.aws.amazon.com/drs/latest/APIReference/API_ListLaunchActions.html

#### Defined in

actions/drs.ts:300

___

### ListStagingAccounts

• **ListStagingAccounts** = ``"drs:ListStagingAccounts"``

Grants permission to list staging accounts

See https://docs.aws.amazon.com/drs/latest/APIReference/API_ListStagingAccounts.html

#### Defined in

actions/drs.ts:306

___

### ListTagsForResource

• **ListTagsForResource** = ``"drs:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/drs/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/drs.ts:312

___

### NotifyAgentAuthenticationForDrs

• **NotifyAgentAuthenticationForDrs** = ``"drs:NotifyAgentAuthenticationForDrs"``

Grants permission to notify agent authentication

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:318

___

### NotifyAgentConnectedForDrs

• **NotifyAgentConnectedForDrs** = ``"drs:NotifyAgentConnectedForDrs"``

Grants permission to notify agent is connected

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:324

___

### NotifyAgentDisconnectedForDrs

• **NotifyAgentDisconnectedForDrs** = ``"drs:NotifyAgentDisconnectedForDrs"``

Grants permission to notify agent is disconnected

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:330

___

### NotifyAgentReplicationProgressForDrs

• **NotifyAgentReplicationProgressForDrs** = ``"drs:NotifyAgentReplicationProgressForDrs"``

Grants permission to notify agent replication progress

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:336

___

### NotifyConsistencyAttainedForDrs

• **NotifyConsistencyAttainedForDrs** = ``"drs:NotifyConsistencyAttainedForDrs"``

Grants permission to notify consistency attained

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:342

___

### NotifyReplicationServerAuthenticationForDrs

• **NotifyReplicationServerAuthenticationForDrs** = ``"drs:NotifyReplicationServerAuthenticationForDrs"``

Grants permission to notify replication server authentication

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:348

___

### NotifyVolumeEventForDrs

• **NotifyVolumeEventForDrs** = ``"drs:NotifyVolumeEventForDrs"``

Grants permission to notify replicator volume events

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:354

___

### PutLaunchAction

• **PutLaunchAction** = ``"drs:PutLaunchAction"``

Grants permission to put a launch action

See https://docs.aws.amazon.com/drs/latest/APIReference/API_PutLaunchAction.html

#### Defined in

actions/drs.ts:360

___

### RetryDataReplication

• **RetryDataReplication** = ``"drs:RetryDataReplication"``

Grants permission to retry data replication

See https://docs.aws.amazon.com/drs/latest/APIReference/API_RetryDataReplication.html

#### Defined in

actions/drs.ts:366

___

### ReverseReplication

• **ReverseReplication** = ``"drs:ReverseReplication"``

Grants permission to reverse replication

See https://docs.aws.amazon.com/drs/latest/APIReference/API_ReverseReplication.html

#### Defined in

actions/drs.ts:372

___

### SendAgentLogsForDrs

• **SendAgentLogsForDrs** = ``"drs:SendAgentLogsForDrs"``

Grants permission to send agent logs

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:378

___

### SendAgentMetricsForDrs

• **SendAgentMetricsForDrs** = ``"drs:SendAgentMetricsForDrs"``

Grants permission to send agent metrics

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:384

___

### SendChannelCommandResultForDrs

• **SendChannelCommandResultForDrs** = ``"drs:SendChannelCommandResultForDrs"``

Grants permission to send channel command result

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:390

___

### SendClientLogsForDrs

• **SendClientLogsForDrs** = ``"drs:SendClientLogsForDrs"``

Grants permission to send client logs

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:396

___

### SendClientMetricsForDrs

• **SendClientMetricsForDrs** = ``"drs:SendClientMetricsForDrs"``

Grants permission to send client metrics

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:402

___

### SendVolumeStatsForDrs

• **SendVolumeStatsForDrs** = ``"drs:SendVolumeStatsForDrs"``

Grants permission to send volume throughput statistics

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:408

___

### StartFailbackLaunch

• **StartFailbackLaunch** = ``"drs:StartFailbackLaunch"``

Grants permission to start failback launch

See https://docs.aws.amazon.com/drs/latest/APIReference/API_StartFailbackLaunch.html

#### Defined in

actions/drs.ts:414

___

### StartRecovery

• **StartRecovery** = ``"drs:StartRecovery"``

Grants permission to start recovery

See https://docs.aws.amazon.com/drs/latest/APIReference/API_StartRecovery.html

#### Defined in

actions/drs.ts:420

___

### StartReplication

• **StartReplication** = ``"drs:StartReplication"``

Grants permission to start replication

See https://docs.aws.amazon.com/drs/latest/APIReference/API_StartReplication.html

#### Defined in

actions/drs.ts:426

___

### StartSourceNetworkRecovery

• **StartSourceNetworkRecovery** = ``"drs:StartSourceNetworkRecovery"``

Grants permission to start network recovery

See https://docs.aws.amazon.com/drs/latest/APIReference/API_StartSourceNetworkRecovery.html

#### Defined in

actions/drs.ts:432

___

### StartSourceNetworkReplication

• **StartSourceNetworkReplication** = ``"drs:StartSourceNetworkReplication"``

Grants permission to start network replication

See https://docs.aws.amazon.com/drs/latest/APIReference/API_StartSourceNetworkReplication.html

#### Defined in

actions/drs.ts:438

___

### StopFailback

• **StopFailback** = ``"drs:StopFailback"``

Grants permission to stop failback

See https://docs.aws.amazon.com/drs/latest/APIReference/API_StopFailback.html

#### Defined in

actions/drs.ts:444

___

### StopReplication

• **StopReplication** = ``"drs:StopReplication"``

Grants permission to stop replication

See https://docs.aws.amazon.com/drs/latest/APIReference/API_StopReplication.html

#### Defined in

actions/drs.ts:450

___

### StopSourceNetworkReplication

• **StopSourceNetworkReplication** = ``"drs:StopSourceNetworkReplication"``

Grants permission to stop network replication

See https://docs.aws.amazon.com/drs/latest/APIReference/API_StopSourceNetworkReplication.html

#### Defined in

actions/drs.ts:456

___

### TagResource

• **TagResource** = ``"drs:TagResource"``

Grants permission to assign a resource tag

See https://docs.aws.amazon.com/drs/latest/APIReference/API_TagResource.html

#### Defined in

actions/drs.ts:462

___

### TerminateRecoveryInstances

• **TerminateRecoveryInstances** = ``"drs:TerminateRecoveryInstances"``

Grants permission to terminate recovery instances

See https://docs.aws.amazon.com/drs/latest/APIReference/API_TerminateRecoveryInstances.html

#### Defined in

actions/drs.ts:468

___

### UntagResource

• **UntagResource** = ``"drs:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/drs/latest/APIReference/API_UntagResource.html

#### Defined in

actions/drs.ts:474

___

### UpdateAgentBacklogForDrs

• **UpdateAgentBacklogForDrs** = ``"drs:UpdateAgentBacklogForDrs"``

Grants permission to update agent backlog

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:480

___

### UpdateAgentConversionInfoForDrs

• **UpdateAgentConversionInfoForDrs** = ``"drs:UpdateAgentConversionInfoForDrs"``

Grants permission to update agent conversion info

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:486

___

### UpdateAgentReplicationInfoForDrs

• **UpdateAgentReplicationInfoForDrs** = ``"drs:UpdateAgentReplicationInfoForDrs"``

Grants permission to update agent replication info

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:492

___

### UpdateAgentReplicationProcessStateForDrs

• **UpdateAgentReplicationProcessStateForDrs** = ``"drs:UpdateAgentReplicationProcessStateForDrs"``

Grants permission to update agent replication process state

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:498

___

### UpdateAgentSourcePropertiesForDrs

• **UpdateAgentSourcePropertiesForDrs** = ``"drs:UpdateAgentSourcePropertiesForDrs"``

Grants permission to update agent source properties

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:504

___

### UpdateFailbackClientDeviceMappingForDrs

• **UpdateFailbackClientDeviceMappingForDrs** = ``"drs:UpdateFailbackClientDeviceMappingForDrs"``

Grants permission to update failback client device mapping

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:510

___

### UpdateFailbackClientLastSeenForDrs

• **UpdateFailbackClientLastSeenForDrs** = ``"drs:UpdateFailbackClientLastSeenForDrs"``

Grants permission to update failback client last seen

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:516

___

### UpdateFailbackReplicationConfiguration

• **UpdateFailbackReplicationConfiguration** = ``"drs:UpdateFailbackReplicationConfiguration"``

Grants permission to update failback replication configuration

See https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateFailbackReplicationConfiguration.html

#### Defined in

actions/drs.ts:522

___

### UpdateLaunchConfiguration

• **UpdateLaunchConfiguration** = ``"drs:UpdateLaunchConfiguration"``

Grants permission to update launch configuration

See https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateLaunchConfiguration.html

#### Defined in

actions/drs.ts:528

___

### UpdateLaunchConfigurationTemplate

• **UpdateLaunchConfigurationTemplate** = ``"drs:UpdateLaunchConfigurationTemplate"``

Grants permission to update launch configuration

See https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateLaunchConfigurationTemplate.html

#### Defined in

actions/drs.ts:534

___

### UpdateReplicationCertificateForDrs

• **UpdateReplicationCertificateForDrs** = ``"drs:UpdateReplicationCertificateForDrs"``

Grants permission to update a replication certificate

See https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html

#### Defined in

actions/drs.ts:540

___

### UpdateReplicationConfiguration

• **UpdateReplicationConfiguration** = ``"drs:UpdateReplicationConfiguration"``

Grants permission to update replication configuration

See https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateReplicationConfiguration.html

#### Defined in

actions/drs.ts:546

___

### UpdateReplicationConfigurationTemplate

• **UpdateReplicationConfigurationTemplate** = ``"drs:UpdateReplicationConfigurationTemplate"``

Grants permission to update replication configuration template

See https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateReplicationConfigurationTemplate.html

#### Defined in

actions/drs.ts:552
