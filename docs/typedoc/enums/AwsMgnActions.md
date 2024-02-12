[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMgnActions

# Enumeration: AwsMgnActions

All IAM policy actions for AWS Application Migration Service (MGN)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationmigrationservice.html

2024-02-12T09:56:04.306Z

## Table of contents

### Enumeration Members

- [ArchiveApplication](AwsMgnActions.md#archiveapplication)
- [ArchiveWave](AwsMgnActions.md#archivewave)
- [AssociateApplications](AwsMgnActions.md#associateapplications)
- [AssociateSourceServers](AwsMgnActions.md#associatesourceservers)
- [BatchCreateVolumeSnapshotGroupForMgn](AwsMgnActions.md#batchcreatevolumesnapshotgroupformgn)
- [BatchDeleteSnapshotRequestForMgn](AwsMgnActions.md#batchdeletesnapshotrequestformgn)
- [ChangeServerLifeCycleState](AwsMgnActions.md#changeserverlifecyclestate)
- [CreateApplication](AwsMgnActions.md#createapplication)
- [CreateConnector](AwsMgnActions.md#createconnector)
- [CreateLaunchConfigurationTemplate](AwsMgnActions.md#createlaunchconfigurationtemplate)
- [CreateReplicationConfigurationTemplate](AwsMgnActions.md#createreplicationconfigurationtemplate)
- [CreateVcenterClientForMgn](AwsMgnActions.md#createvcenterclientformgn)
- [CreateWave](AwsMgnActions.md#createwave)
- [DeleteApplication](AwsMgnActions.md#deleteapplication)
- [DeleteConnector](AwsMgnActions.md#deleteconnector)
- [DeleteJob](AwsMgnActions.md#deletejob)
- [DeleteLaunchConfigurationTemplate](AwsMgnActions.md#deletelaunchconfigurationtemplate)
- [DeleteReplicationConfigurationTemplate](AwsMgnActions.md#deletereplicationconfigurationtemplate)
- [DeleteSourceServer](AwsMgnActions.md#deletesourceserver)
- [DeleteVcenterClient](AwsMgnActions.md#deletevcenterclient)
- [DeleteWave](AwsMgnActions.md#deletewave)
- [DescribeJobLogItems](AwsMgnActions.md#describejoblogitems)
- [DescribeJobs](AwsMgnActions.md#describejobs)
- [DescribeLaunchConfigurationTemplates](AwsMgnActions.md#describelaunchconfigurationtemplates)
- [DescribeReplicationConfigurationTemplates](AwsMgnActions.md#describereplicationconfigurationtemplates)
- [DescribeReplicationServerAssociationsForMgn](AwsMgnActions.md#describereplicationserverassociationsformgn)
- [DescribeSnapshotRequestsForMgn](AwsMgnActions.md#describesnapshotrequestsformgn)
- [DescribeSourceServers](AwsMgnActions.md#describesourceservers)
- [DescribeVcenterClients](AwsMgnActions.md#describevcenterclients)
- [DisassociateApplications](AwsMgnActions.md#disassociateapplications)
- [DisassociateSourceServers](AwsMgnActions.md#disassociatesourceservers)
- [DisconnectFromService](AwsMgnActions.md#disconnectfromservice)
- [FinalizeCutover](AwsMgnActions.md#finalizecutover)
- [GetAgentCommandForMgn](AwsMgnActions.md#getagentcommandformgn)
- [GetAgentConfirmedResumeInfoForMgn](AwsMgnActions.md#getagentconfirmedresumeinfoformgn)
- [GetAgentInstallationAssetsForMgn](AwsMgnActions.md#getagentinstallationassetsformgn)
- [GetAgentReplicationInfoForMgn](AwsMgnActions.md#getagentreplicationinfoformgn)
- [GetAgentRuntimeConfigurationForMgn](AwsMgnActions.md#getagentruntimeconfigurationformgn)
- [GetAgentSnapshotCreditsForMgn](AwsMgnActions.md#getagentsnapshotcreditsformgn)
- [GetChannelCommandsForMgn](AwsMgnActions.md#getchannelcommandsformgn)
- [GetLaunchConfiguration](AwsMgnActions.md#getlaunchconfiguration)
- [GetReplicationConfiguration](AwsMgnActions.md#getreplicationconfiguration)
- [GetVcenterClientCommandsForMgn](AwsMgnActions.md#getvcenterclientcommandsformgn)
- [InitializeService](AwsMgnActions.md#initializeservice)
- [IssueClientCertificateForMgn](AwsMgnActions.md#issueclientcertificateformgn)
- [ListApplications](AwsMgnActions.md#listapplications)
- [ListConnectors](AwsMgnActions.md#listconnectors)
- [ListExportErrors](AwsMgnActions.md#listexporterrors)
- [ListExports](AwsMgnActions.md#listexports)
- [ListImportErrors](AwsMgnActions.md#listimporterrors)
- [ListImports](AwsMgnActions.md#listimports)
- [ListManagedAccounts](AwsMgnActions.md#listmanagedaccounts)
- [ListSourceServerActions](AwsMgnActions.md#listsourceserveractions)
- [ListTagsForResource](AwsMgnActions.md#listtagsforresource)
- [ListTemplateActions](AwsMgnActions.md#listtemplateactions)
- [ListWaves](AwsMgnActions.md#listwaves)
- [MarkAsArchived](AwsMgnActions.md#markasarchived)
- [NotifyAgentAuthenticationForMgn](AwsMgnActions.md#notifyagentauthenticationformgn)
- [NotifyAgentConnectedForMgn](AwsMgnActions.md#notifyagentconnectedformgn)
- [NotifyAgentDisconnectedForMgn](AwsMgnActions.md#notifyagentdisconnectedformgn)
- [NotifyAgentReplicationProgressForMgn](AwsMgnActions.md#notifyagentreplicationprogressformgn)
- [NotifyVcenterClientStartedForMgn](AwsMgnActions.md#notifyvcenterclientstartedformgn)
- [PauseReplication](AwsMgnActions.md#pausereplication)
- [PutSourceServerAction](AwsMgnActions.md#putsourceserveraction)
- [PutTemplateAction](AwsMgnActions.md#puttemplateaction)
- [RegisterAgentForMgn](AwsMgnActions.md#registeragentformgn)
- [RemoveSourceServerAction](AwsMgnActions.md#removesourceserveraction)
- [RemoveTemplateAction](AwsMgnActions.md#removetemplateaction)
- [ResumeReplication](AwsMgnActions.md#resumereplication)
- [RetryDataReplication](AwsMgnActions.md#retrydatareplication)
- [SendAgentLogsForMgn](AwsMgnActions.md#sendagentlogsformgn)
- [SendAgentMetricsForMgn](AwsMgnActions.md#sendagentmetricsformgn)
- [SendChannelCommandResultForMgn](AwsMgnActions.md#sendchannelcommandresultformgn)
- [SendClientLogsForMgn](AwsMgnActions.md#sendclientlogsformgn)
- [SendClientMetricsForMgn](AwsMgnActions.md#sendclientmetricsformgn)
- [SendVcenterClientCommandResultForMgn](AwsMgnActions.md#sendvcenterclientcommandresultformgn)
- [SendVcenterClientLogsForMgn](AwsMgnActions.md#sendvcenterclientlogsformgn)
- [SendVcenterClientMetricsForMgn](AwsMgnActions.md#sendvcenterclientmetricsformgn)
- [StartCutover](AwsMgnActions.md#startcutover)
- [StartExport](AwsMgnActions.md#startexport)
- [StartImport](AwsMgnActions.md#startimport)
- [StartReplication](AwsMgnActions.md#startreplication)
- [StartTest](AwsMgnActions.md#starttest)
- [StopReplication](AwsMgnActions.md#stopreplication)
- [TagResource](AwsMgnActions.md#tagresource)
- [TerminateTargetInstances](AwsMgnActions.md#terminatetargetinstances)
- [UnarchiveApplication](AwsMgnActions.md#unarchiveapplication)
- [UnarchiveWave](AwsMgnActions.md#unarchivewave)
- [UntagResource](AwsMgnActions.md#untagresource)
- [UpdateAgentBacklogForMgn](AwsMgnActions.md#updateagentbacklogformgn)
- [UpdateAgentConversionInfoForMgn](AwsMgnActions.md#updateagentconversioninfoformgn)
- [UpdateAgentReplicationInfoForMgn](AwsMgnActions.md#updateagentreplicationinfoformgn)
- [UpdateAgentReplicationProcessStateForMgn](AwsMgnActions.md#updateagentreplicationprocessstateformgn)
- [UpdateAgentSourcePropertiesForMgn](AwsMgnActions.md#updateagentsourcepropertiesformgn)
- [UpdateApplication](AwsMgnActions.md#updateapplication)
- [UpdateConnector](AwsMgnActions.md#updateconnector)
- [UpdateLaunchConfiguration](AwsMgnActions.md#updatelaunchconfiguration)
- [UpdateLaunchConfigurationTemplate](AwsMgnActions.md#updatelaunchconfigurationtemplate)
- [UpdateReplicationConfiguration](AwsMgnActions.md#updatereplicationconfiguration)
- [UpdateReplicationConfigurationTemplate](AwsMgnActions.md#updatereplicationconfigurationtemplate)
- [UpdateSourceServer](AwsMgnActions.md#updatesourceserver)
- [UpdateSourceServerReplicationType](AwsMgnActions.md#updatesourceserverreplicationtype)
- [UpdateWave](AwsMgnActions.md#updatewave)
- [VerifyClientRoleForMgn](AwsMgnActions.md#verifyclientroleformgn)

## Enumeration Members

### ArchiveApplication

• **ArchiveApplication** = ``"mgn:ArchiveApplication"``

Grants permission to archive an application

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ArchiveApplication.html

#### Defined in

actions/mgn.ts:17

___

### ArchiveWave

• **ArchiveWave** = ``"mgn:ArchiveWave"``

Grants permission to archive a wave

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ArchiveWave.html

#### Defined in

actions/mgn.ts:23

___

### AssociateApplications

• **AssociateApplications** = ``"mgn:AssociateApplications"``

Grants permission to associate applications to a wave

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_AssociateApplications.html

#### Defined in

actions/mgn.ts:29

___

### AssociateSourceServers

• **AssociateSourceServers** = ``"mgn:AssociateSourceServers"``

Grants permission to associate source servers to an application

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_AssociateSourceServers.html

#### Defined in

actions/mgn.ts:35

___

### BatchCreateVolumeSnapshotGroupForMgn

• **BatchCreateVolumeSnapshotGroupForMgn** = ``"mgn:BatchCreateVolumeSnapshotGroupForMgn"``

Grants permission to create volume snapshot group

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:41

___

### BatchDeleteSnapshotRequestForMgn

• **BatchDeleteSnapshotRequestForMgn** = ``"mgn:BatchDeleteSnapshotRequestForMgn"``

Grants permission to batch delete snapshot request

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:47

___

### ChangeServerLifeCycleState

• **ChangeServerLifeCycleState** = ``"mgn:ChangeServerLifeCycleState"``

Grants permission to change source server life cycle state

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ChangeServerLifeCycleState.html

#### Defined in

actions/mgn.ts:53

___

### CreateApplication

• **CreateApplication** = ``"mgn:CreateApplication"``

Grants permission to create an application

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateApplication.html

#### Defined in

actions/mgn.ts:59

___

### CreateConnector

• **CreateConnector** = ``"mgn:CreateConnector"``

Grants permission to create connector

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateConnector.html

#### Defined in

actions/mgn.ts:65

___

### CreateLaunchConfigurationTemplate

• **CreateLaunchConfigurationTemplate** = ``"mgn:CreateLaunchConfigurationTemplate"``

Grants permission to create launch configuration template

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateLaunchConfigurationTemplate.html

#### Defined in

actions/mgn.ts:71

___

### CreateReplicationConfigurationTemplate

• **CreateReplicationConfigurationTemplate** = ``"mgn:CreateReplicationConfigurationTemplate"``

Grants permission to create replication configuration template

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateReplicationConfigurationTemplate.html

#### Defined in

actions/mgn.ts:77

___

### CreateVcenterClientForMgn

• **CreateVcenterClientForMgn** = ``"mgn:CreateVcenterClientForMgn"``

Grants permission to create vcenter client

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:83

___

### CreateWave

• **CreateWave** = ``"mgn:CreateWave"``

Grants permission to create a wave

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateWave.html

#### Defined in

actions/mgn.ts:89

___

### DeleteApplication

• **DeleteApplication** = ``"mgn:DeleteApplication"``

Grants permission to delete an application

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteApplication.html

#### Defined in

actions/mgn.ts:95

___

### DeleteConnector

• **DeleteConnector** = ``"mgn:DeleteConnector"``

Grants permission to delete connector

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteConnector.html

#### Defined in

actions/mgn.ts:101

___

### DeleteJob

• **DeleteJob** = ``"mgn:DeleteJob"``

Grants permission to delete job

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteJob.html

#### Defined in

actions/mgn.ts:107

___

### DeleteLaunchConfigurationTemplate

• **DeleteLaunchConfigurationTemplate** = ``"mgn:DeleteLaunchConfigurationTemplate"``

Grants permission to delete launch configuration template

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteLaunchConfigurationTemplate.html

#### Defined in

actions/mgn.ts:113

___

### DeleteReplicationConfigurationTemplate

• **DeleteReplicationConfigurationTemplate** = ``"mgn:DeleteReplicationConfigurationTemplate"``

Grants permission to delete replication configuration template

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteReplicationConfigurationTemplate.html

#### Defined in

actions/mgn.ts:119

___

### DeleteSourceServer

• **DeleteSourceServer** = ``"mgn:DeleteSourceServer"``

Grants permission to delete source server

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteSourceServer.html

#### Defined in

actions/mgn.ts:125

___

### DeleteVcenterClient

• **DeleteVcenterClient** = ``"mgn:DeleteVcenterClient"``

Grants permission to delete vcenter client

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteVcenterClient.html

#### Defined in

actions/mgn.ts:131

___

### DeleteWave

• **DeleteWave** = ``"mgn:DeleteWave"``

Grants permission to delete a wave

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteWave.html

#### Defined in

actions/mgn.ts:137

___

### DescribeJobLogItems

• **DescribeJobLogItems** = ``"mgn:DescribeJobLogItems"``

Grants permission to describe job log items

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeJobLogItems.html

#### Defined in

actions/mgn.ts:143

___

### DescribeJobs

• **DescribeJobs** = ``"mgn:DescribeJobs"``

Grants permission to describe jobs

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeJobs.html

#### Defined in

actions/mgn.ts:149

___

### DescribeLaunchConfigurationTemplates

• **DescribeLaunchConfigurationTemplates** = ``"mgn:DescribeLaunchConfigurationTemplates"``

Grants permission to describe launch configuration template

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeLaunchConfigurationTemplates.html

#### Defined in

actions/mgn.ts:155

___

### DescribeReplicationConfigurationTemplates

• **DescribeReplicationConfigurationTemplates** = ``"mgn:DescribeReplicationConfigurationTemplates"``

Grants permission to describe replication configuration template

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeReplicationConfigurationTemplates.html

#### Defined in

actions/mgn.ts:161

___

### DescribeReplicationServerAssociationsForMgn

• **DescribeReplicationServerAssociationsForMgn** = ``"mgn:DescribeReplicationServerAssociationsForMgn"``

Grants permission to describe replication server associations

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:167

___

### DescribeSnapshotRequestsForMgn

• **DescribeSnapshotRequestsForMgn** = ``"mgn:DescribeSnapshotRequestsForMgn"``

Grants permission to describe snapshots requests

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:173

___

### DescribeSourceServers

• **DescribeSourceServers** = ``"mgn:DescribeSourceServers"``

Grants permission to describe source servers

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeSourceServers.html

#### Defined in

actions/mgn.ts:179

___

### DescribeVcenterClients

• **DescribeVcenterClients** = ``"mgn:DescribeVcenterClients"``

Grants permission to describe vcenter clients

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeVcenterClients.html

#### Defined in

actions/mgn.ts:185

___

### DisassociateApplications

• **DisassociateApplications** = ``"mgn:DisassociateApplications"``

Grants permission to disassociate applications from a wave

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DisassociateApplications.html

#### Defined in

actions/mgn.ts:191

___

### DisassociateSourceServers

• **DisassociateSourceServers** = ``"mgn:DisassociateSourceServers"``

Grants permission to disassociate source servers from an application

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DisassociateSourceServers.html

#### Defined in

actions/mgn.ts:197

___

### DisconnectFromService

• **DisconnectFromService** = ``"mgn:DisconnectFromService"``

Grants permission to disconnect source server from service

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_DisconnectFromService.html

#### Defined in

actions/mgn.ts:203

___

### FinalizeCutover

• **FinalizeCutover** = ``"mgn:FinalizeCutover"``

Grants permission to finalize cutover

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_FinalizeCutover.html

#### Defined in

actions/mgn.ts:209

___

### GetAgentCommandForMgn

• **GetAgentCommandForMgn** = ``"mgn:GetAgentCommandForMgn"``

Grants permission to get agent command

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:215

___

### GetAgentConfirmedResumeInfoForMgn

• **GetAgentConfirmedResumeInfoForMgn** = ``"mgn:GetAgentConfirmedResumeInfoForMgn"``

Grants permission to get agent confirmed resume info

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:221

___

### GetAgentInstallationAssetsForMgn

• **GetAgentInstallationAssetsForMgn** = ``"mgn:GetAgentInstallationAssetsForMgn"``

Grants permission to get agent installation assets

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:227

___

### GetAgentReplicationInfoForMgn

• **GetAgentReplicationInfoForMgn** = ``"mgn:GetAgentReplicationInfoForMgn"``

Grants permission to get agent replication info

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:233

___

### GetAgentRuntimeConfigurationForMgn

• **GetAgentRuntimeConfigurationForMgn** = ``"mgn:GetAgentRuntimeConfigurationForMgn"``

Grants permission to get agent runtime configuration

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:239

___

### GetAgentSnapshotCreditsForMgn

• **GetAgentSnapshotCreditsForMgn** = ``"mgn:GetAgentSnapshotCreditsForMgn"``

Grants permission to get agent snapshots credits

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:245

___

### GetChannelCommandsForMgn

• **GetChannelCommandsForMgn** = ``"mgn:GetChannelCommandsForMgn"``

Grants permission to get channel commands

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:251

___

### GetLaunchConfiguration

• **GetLaunchConfiguration** = ``"mgn:GetLaunchConfiguration"``

Grants permission to get launch configuration

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_GetLaunchConfiguration.html

#### Defined in

actions/mgn.ts:257

___

### GetReplicationConfiguration

• **GetReplicationConfiguration** = ``"mgn:GetReplicationConfiguration"``

Grants permission to get replication configuration

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_GetReplicationConfiguration.html

#### Defined in

actions/mgn.ts:263

___

### GetVcenterClientCommandsForMgn

• **GetVcenterClientCommandsForMgn** = ``"mgn:GetVcenterClientCommandsForMgn"``

Grants permission to get vcenter client commands

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:269

___

### InitializeService

• **InitializeService** = ``"mgn:InitializeService"``

Grants permission to initialize service

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_InitializeService.html

#### Defined in

actions/mgn.ts:275

___

### IssueClientCertificateForMgn

• **IssueClientCertificateForMgn** = ``"mgn:IssueClientCertificateForMgn"``

Grants permission to issue a client certificate

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:281

___

### ListApplications

• **ListApplications** = ``"mgn:ListApplications"``

Grants permission to list application summaries

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListApplications.html

#### Defined in

actions/mgn.ts:287

___

### ListConnectors

• **ListConnectors** = ``"mgn:ListConnectors"``

Grants permission to list connectors

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListConnectors.html

#### Defined in

actions/mgn.ts:293

___

### ListExportErrors

• **ListExportErrors** = ``"mgn:ListExportErrors"``

Grants permission to list the errors of an export task

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListExportErrors.html

#### Defined in

actions/mgn.ts:299

___

### ListExports

• **ListExports** = ``"mgn:ListExports"``

Grants permission to list export tasks

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListExports.html

#### Defined in

actions/mgn.ts:305

___

### ListImportErrors

• **ListImportErrors** = ``"mgn:ListImportErrors"``

Grants permission to list the errors of an import task

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListImportErrors.html

#### Defined in

actions/mgn.ts:311

___

### ListImports

• **ListImports** = ``"mgn:ListImports"``

Grants permission to list the import tasks

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListImports.html

#### Defined in

actions/mgn.ts:317

___

### ListManagedAccounts

• **ListManagedAccounts** = ``"mgn:ListManagedAccounts"``

Grants permission to list managed accounts

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListManagedAccounts.html

#### Defined in

actions/mgn.ts:323

___

### ListSourceServerActions

• **ListSourceServerActions** = ``"mgn:ListSourceServerActions"``

Grants permission to list source server action documents

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListSourceServerActions.html

#### Defined in

actions/mgn.ts:329

___

### ListTagsForResource

• **ListTagsForResource** = ``"mgn:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/mgn.ts:335

___

### ListTemplateActions

• **ListTemplateActions** = ``"mgn:ListTemplateActions"``

Grants permission to list launch configuration template action documents

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListTemplateActions.html

#### Defined in

actions/mgn.ts:341

___

### ListWaves

• **ListWaves** = ``"mgn:ListWaves"``

Grants permission to list wave summaries

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListWaves.html

#### Defined in

actions/mgn.ts:347

___

### MarkAsArchived

• **MarkAsArchived** = ``"mgn:MarkAsArchived"``

Grants permission to mark source server as archived

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_MarkAsArchived.html

#### Defined in

actions/mgn.ts:353

___

### NotifyAgentAuthenticationForMgn

• **NotifyAgentAuthenticationForMgn** = ``"mgn:NotifyAgentAuthenticationForMgn"``

Grants permission to notify agent authentication

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:359

___

### NotifyAgentConnectedForMgn

• **NotifyAgentConnectedForMgn** = ``"mgn:NotifyAgentConnectedForMgn"``

Grants permission to notify agent is connected

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:365

___

### NotifyAgentDisconnectedForMgn

• **NotifyAgentDisconnectedForMgn** = ``"mgn:NotifyAgentDisconnectedForMgn"``

Grants permission to notify agent is disconnected

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:371

___

### NotifyAgentReplicationProgressForMgn

• **NotifyAgentReplicationProgressForMgn** = ``"mgn:NotifyAgentReplicationProgressForMgn"``

Grants permission to notify agent replication progress

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:377

___

### NotifyVcenterClientStartedForMgn

• **NotifyVcenterClientStartedForMgn** = ``"mgn:NotifyVcenterClientStartedForMgn"``

Grants permission to notify vcenter client started

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:383

___

### PauseReplication

• **PauseReplication** = ``"mgn:PauseReplication"``

Grants permission to pause replication

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_PauseReplication.html

#### Defined in

actions/mgn.ts:389

___

### PutSourceServerAction

• **PutSourceServerAction** = ``"mgn:PutSourceServerAction"``

Grants permission to put source server action document

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_PutSourceServerAction.html

#### Defined in

actions/mgn.ts:395

___

### PutTemplateAction

• **PutTemplateAction** = ``"mgn:PutTemplateAction"``

Grants permission to put launch configuration template action document

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_PutTemplateAction.html

#### Defined in

actions/mgn.ts:401

___

### RegisterAgentForMgn

• **RegisterAgentForMgn** = ``"mgn:RegisterAgentForMgn"``

Grants permission to register agent

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:407

___

### RemoveSourceServerAction

• **RemoveSourceServerAction** = ``"mgn:RemoveSourceServerAction"``

Grants permission to remove source server action document

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_RemoveSourceServerAction.html

#### Defined in

actions/mgn.ts:413

___

### RemoveTemplateAction

• **RemoveTemplateAction** = ``"mgn:RemoveTemplateAction"``

Grants permission to remove launch configuration template action document

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_RemoveTemplateAction.html

#### Defined in

actions/mgn.ts:419

___

### ResumeReplication

• **ResumeReplication** = ``"mgn:ResumeReplication"``

Grants permission to resume replication

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_ResumeReplication.html

#### Defined in

actions/mgn.ts:425

___

### RetryDataReplication

• **RetryDataReplication** = ``"mgn:RetryDataReplication"``

Grants permission to retry replication

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_RetryDataReplication.html

#### Defined in

actions/mgn.ts:431

___

### SendAgentLogsForMgn

• **SendAgentLogsForMgn** = ``"mgn:SendAgentLogsForMgn"``

Grants permission to send agent logs

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:437

___

### SendAgentMetricsForMgn

• **SendAgentMetricsForMgn** = ``"mgn:SendAgentMetricsForMgn"``

Grants permission to send agent metrics

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:443

___

### SendChannelCommandResultForMgn

• **SendChannelCommandResultForMgn** = ``"mgn:SendChannelCommandResultForMgn"``

Grants permission to send channel command result

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:449

___

### SendClientLogsForMgn

• **SendClientLogsForMgn** = ``"mgn:SendClientLogsForMgn"``

Grants permission to send client logs

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:455

___

### SendClientMetricsForMgn

• **SendClientMetricsForMgn** = ``"mgn:SendClientMetricsForMgn"``

Grants permission to send client metrics

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:461

___

### SendVcenterClientCommandResultForMgn

• **SendVcenterClientCommandResultForMgn** = ``"mgn:SendVcenterClientCommandResultForMgn"``

Grants permission to send vcenter client command result

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:467

___

### SendVcenterClientLogsForMgn

• **SendVcenterClientLogsForMgn** = ``"mgn:SendVcenterClientLogsForMgn"``

Grants permission to send vcenter client logs

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:473

___

### SendVcenterClientMetricsForMgn

• **SendVcenterClientMetricsForMgn** = ``"mgn:SendVcenterClientMetricsForMgn"``

Grants permission to send vcenter client metrics

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:479

___

### StartCutover

• **StartCutover** = ``"mgn:StartCutover"``

Grants permission to start cutover

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartCutover.html

#### Defined in

actions/mgn.ts:485

___

### StartExport

• **StartExport** = ``"mgn:StartExport"``

Grants permission to start an export task

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartExport.html

#### Defined in

actions/mgn.ts:491

___

### StartImport

• **StartImport** = ``"mgn:StartImport"``

Grants permission to create an import task

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartImport.html

#### Defined in

actions/mgn.ts:497

___

### StartReplication

• **StartReplication** = ``"mgn:StartReplication"``

Grants permission to start replication

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartReplication.html

#### Defined in

actions/mgn.ts:503

___

### StartTest

• **StartTest** = ``"mgn:StartTest"``

Grants permission to start test

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartTest.html

#### Defined in

actions/mgn.ts:509

___

### StopReplication

• **StopReplication** = ``"mgn:StopReplication"``

Grants permission to stop replication

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_StopReplication.html

#### Defined in

actions/mgn.ts:515

___

### TagResource

• **TagResource** = ``"mgn:TagResource"``

Grants permission to assign a resource tag

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_TagResource.html

#### Defined in

actions/mgn.ts:521

___

### TerminateTargetInstances

• **TerminateTargetInstances** = ``"mgn:TerminateTargetInstances"``

Grants permission to terminate target instances

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_TerminateTargetInstances.html

#### Defined in

actions/mgn.ts:527

___

### UnarchiveApplication

• **UnarchiveApplication** = ``"mgn:UnarchiveApplication"``

Grants permission to unarchive an application

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UnarchiveApplication.html

#### Defined in

actions/mgn.ts:533

___

### UnarchiveWave

• **UnarchiveWave** = ``"mgn:UnarchiveWave"``

Grants permission to unarchive a wave

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UnarchiveWave.html

#### Defined in

actions/mgn.ts:539

___

### UntagResource

• **UntagResource** = ``"mgn:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UntagResource.html

#### Defined in

actions/mgn.ts:545

___

### UpdateAgentBacklogForMgn

• **UpdateAgentBacklogForMgn** = ``"mgn:UpdateAgentBacklogForMgn"``

Grants permission to update agent backlog

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:551

___

### UpdateAgentConversionInfoForMgn

• **UpdateAgentConversionInfoForMgn** = ``"mgn:UpdateAgentConversionInfoForMgn"``

Grants permission to update agent conversion info

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:557

___

### UpdateAgentReplicationInfoForMgn

• **UpdateAgentReplicationInfoForMgn** = ``"mgn:UpdateAgentReplicationInfoForMgn"``

Grants permission to update agent replication info

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:563

___

### UpdateAgentReplicationProcessStateForMgn

• **UpdateAgentReplicationProcessStateForMgn** = ``"mgn:UpdateAgentReplicationProcessStateForMgn"``

Grants permission to update agent replication process state

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:569

___

### UpdateAgentSourcePropertiesForMgn

• **UpdateAgentSourcePropertiesForMgn** = ``"mgn:UpdateAgentSourcePropertiesForMgn"``

Grants permission to update agent source properties

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:575

___

### UpdateApplication

• **UpdateApplication** = ``"mgn:UpdateApplication"``

Grants permission to update an application

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateApplication.html

#### Defined in

actions/mgn.ts:581

___

### UpdateConnector

• **UpdateConnector** = ``"mgn:UpdateConnector"``

Grants permission to update connector

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateConnector.html

#### Defined in

actions/mgn.ts:587

___

### UpdateLaunchConfiguration

• **UpdateLaunchConfiguration** = ``"mgn:UpdateLaunchConfiguration"``

Grants permission to update launch configuration

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateLaunchConfiguration.html

#### Defined in

actions/mgn.ts:593

___

### UpdateLaunchConfigurationTemplate

• **UpdateLaunchConfigurationTemplate** = ``"mgn:UpdateLaunchConfigurationTemplate"``

Grants permission to update launch configuration

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateLaunchConfigurationTemplate.html

#### Defined in

actions/mgn.ts:599

___

### UpdateReplicationConfiguration

• **UpdateReplicationConfiguration** = ``"mgn:UpdateReplicationConfiguration"``

Grants permission to update replication configuration

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateReplicationConfiguration.html

#### Defined in

actions/mgn.ts:605

___

### UpdateReplicationConfigurationTemplate

• **UpdateReplicationConfigurationTemplate** = ``"mgn:UpdateReplicationConfigurationTemplate"``

Grants permission to update replication configuration template

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateReplicationConfigurationTemplate.html

#### Defined in

actions/mgn.ts:611

___

### UpdateSourceServer

• **UpdateSourceServer** = ``"mgn:UpdateSourceServer"``

Grants permission to update source server

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateSourceServer.html

#### Defined in

actions/mgn.ts:617

___

### UpdateSourceServerReplicationType

• **UpdateSourceServerReplicationType** = ``"mgn:UpdateSourceServerReplicationType"``

Grants permission to update source server replication type

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateSourceServerReplicationType.html

#### Defined in

actions/mgn.ts:623

___

### UpdateWave

• **UpdateWave** = ``"mgn:UpdateWave"``

Grants permission to update a wave

See https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateWave.html

#### Defined in

actions/mgn.ts:629

___

### VerifyClientRoleForMgn

• **VerifyClientRoleForMgn** = ``"mgn:VerifyClientRoleForMgn"``

Grants permission to verify client role

See https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html

#### Defined in

actions/mgn.ts:635
