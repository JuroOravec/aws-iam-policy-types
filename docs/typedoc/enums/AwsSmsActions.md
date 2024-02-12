[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSmsActions

# Enumeration: AwsSmsActions

All IAM policy actions for AWS Server Migration Service (SMS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservermigrationservice.html

2024-02-12T09:59:11.566Z

## Table of contents

### Enumeration Members

- [CreateApp](AwsSmsActions.md#createapp)
- [CreateReplicationJob](AwsSmsActions.md#createreplicationjob)
- [DeleteApp](AwsSmsActions.md#deleteapp)
- [DeleteAppLaunchConfiguration](AwsSmsActions.md#deleteapplaunchconfiguration)
- [DeleteAppReplicationConfiguration](AwsSmsActions.md#deleteappreplicationconfiguration)
- [DeleteAppValidationConfiguration](AwsSmsActions.md#deleteappvalidationconfiguration)
- [DeleteReplicationJob](AwsSmsActions.md#deletereplicationjob)
- [DeleteServerCatalog](AwsSmsActions.md#deleteservercatalog)
- [DisassociateConnector](AwsSmsActions.md#disassociateconnector)
- [GenerateChangeSet](AwsSmsActions.md#generatechangeset)
- [GenerateTemplate](AwsSmsActions.md#generatetemplate)
- [GetApp](AwsSmsActions.md#getapp)
- [GetAppLaunchConfiguration](AwsSmsActions.md#getapplaunchconfiguration)
- [GetAppReplicationConfiguration](AwsSmsActions.md#getappreplicationconfiguration)
- [GetAppValidationConfiguration](AwsSmsActions.md#getappvalidationconfiguration)
- [GetAppValidationOutput](AwsSmsActions.md#getappvalidationoutput)
- [GetConnectors](AwsSmsActions.md#getconnectors)
- [GetReplicationJobs](AwsSmsActions.md#getreplicationjobs)
- [GetReplicationRuns](AwsSmsActions.md#getreplicationruns)
- [GetServers](AwsSmsActions.md#getservers)
- [ImportAppCatalog](AwsSmsActions.md#importappcatalog)
- [ImportServerCatalog](AwsSmsActions.md#importservercatalog)
- [LaunchApp](AwsSmsActions.md#launchapp)
- [ListApps](AwsSmsActions.md#listapps)
- [NotifyAppValidationOutput](AwsSmsActions.md#notifyappvalidationoutput)
- [PutAppLaunchConfiguration](AwsSmsActions.md#putapplaunchconfiguration)
- [PutAppReplicationConfiguration](AwsSmsActions.md#putappreplicationconfiguration)
- [PutAppValidationConfiguration](AwsSmsActions.md#putappvalidationconfiguration)
- [StartAppReplication](AwsSmsActions.md#startappreplication)
- [StartOnDemandAppReplication](AwsSmsActions.md#startondemandappreplication)
- [StartOnDemandReplicationRun](AwsSmsActions.md#startondemandreplicationrun)
- [StopAppReplication](AwsSmsActions.md#stopappreplication)
- [TerminateApp](AwsSmsActions.md#terminateapp)
- [UpdateApp](AwsSmsActions.md#updateapp)
- [UpdateReplicationJob](AwsSmsActions.md#updatereplicationjob)

## Enumeration Members

### CreateApp

• **CreateApp** = ``"sms:CreateApp"``

Grants permission to create an application configuration to migrate on-premise
application onto AWS

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateApp.html

#### Defined in

actions/sms.ts:18

___

### CreateReplicationJob

• **CreateReplicationJob** = ``"sms:CreateReplicationJob"``

Grants permission to create a job to migrate on-premise server onto AWS

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateReplicationJob.html

#### Defined in

actions/sms.ts:24

___

### DeleteApp

• **DeleteApp** = ``"sms:DeleteApp"``

Grants permission to delete an existing application configuration

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteApp.html

#### Defined in

actions/sms.ts:30

___

### DeleteAppLaunchConfiguration

• **DeleteAppLaunchConfiguration** = ``"sms:DeleteAppLaunchConfiguration"``

Grants permission to delete launch configuration for an existing application

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppLaunchConfiguration.html

#### Defined in

actions/sms.ts:36

___

### DeleteAppReplicationConfiguration

• **DeleteAppReplicationConfiguration** = ``"sms:DeleteAppReplicationConfiguration"``

Grants permission to delete replication configuration for an existing applicati
on

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppReplicationConfiguration.html

#### Defined in

actions/sms.ts:43

___

### DeleteAppValidationConfiguration

• **DeleteAppValidationConfiguration** = ``"sms:DeleteAppValidationConfiguration"``

Grants permission to delete validation configuration for an existing applicatio
n

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppValidationConfiguration.html

#### Defined in

actions/sms.ts:50

___

### DeleteReplicationJob

• **DeleteReplicationJob** = ``"sms:DeleteReplicationJob"``

Grants permission to delete an existing job to migrate on-premise server onto A
WS

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteReplicationJob.html

#### Defined in

actions/sms.ts:57

___

### DeleteServerCatalog

• **DeleteServerCatalog** = ``"sms:DeleteServerCatalog"``

Grants permission to delete the complete list of on-premise servers gathered in
to AWS

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteServerCatalog.html

#### Defined in

actions/sms.ts:64

___

### DisassociateConnector

• **DisassociateConnector** = ``"sms:DisassociateConnector"``

Grants permission to disassociate a connector that has been associated

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DisassociateConnector.html

#### Defined in

actions/sms.ts:70

___

### GenerateChangeSet

• **GenerateChangeSet** = ``"sms:GenerateChangeSet"``

Grants permission to generate a changeSet for the CloudFormation stack of an ap
plication

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateChangeSet.html

#### Defined in

actions/sms.ts:77

___

### GenerateTemplate

• **GenerateTemplate** = ``"sms:GenerateTemplate"``

Grants permission to generate a CloudFormation template for an existing applica
tion

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateTemplate.html

#### Defined in

actions/sms.ts:84

___

### GetApp

• **GetApp** = ``"sms:GetApp"``

Grants permission to get the configuration and statuses for an existing applica
tion

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetApp.html

#### Defined in

actions/sms.ts:91

___

### GetAppLaunchConfiguration

• **GetAppLaunchConfiguration** = ``"sms:GetAppLaunchConfiguration"``

Grants permission to get launch configuration for an existing application

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppLaunchConfiguration.html

#### Defined in

actions/sms.ts:97

___

### GetAppReplicationConfiguration

• **GetAppReplicationConfiguration** = ``"sms:GetAppReplicationConfiguration"``

Grants permission to get replication configuration for an existing application

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppReplicationConfiguration.html

#### Defined in

actions/sms.ts:103

___

### GetAppValidationConfiguration

• **GetAppValidationConfiguration** = ``"sms:GetAppValidationConfiguration"``

Grants permission to get validation configuration for an existing application

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppValidationConfiguration.html

#### Defined in

actions/sms.ts:109

___

### GetAppValidationOutput

• **GetAppValidationOutput** = ``"sms:GetAppValidationOutput"``

Grants permission to get notification sent from application validation script.

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppValidationOutput.html

#### Defined in

actions/sms.ts:115

___

### GetConnectors

• **GetConnectors** = ``"sms:GetConnectors"``

Grants permission to get all connectors that have been associated

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetConnectors.html

#### Defined in

actions/sms.ts:121

___

### GetReplicationJobs

• **GetReplicationJobs** = ``"sms:GetReplicationJobs"``

Grants permission to get all existing jobs to migrate on-premise servers onto A
WS

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationJobs.html

#### Defined in

actions/sms.ts:128

___

### GetReplicationRuns

• **GetReplicationRuns** = ``"sms:GetReplicationRuns"``

Grants permission to get all runs for an existing job

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationRuns.html

#### Defined in

actions/sms.ts:134

___

### GetServers

• **GetServers** = ``"sms:GetServers"``

Grants permission to get all servers that have been imported

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetServers.html

#### Defined in

actions/sms.ts:140

___

### ImportAppCatalog

• **ImportAppCatalog** = ``"sms:ImportAppCatalog"``

Grants permission to import application catalog from AWS Application Discovery
Service

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportAppCatalog.html

#### Defined in

actions/sms.ts:147

___

### ImportServerCatalog

• **ImportServerCatalog** = ``"sms:ImportServerCatalog"``

Grants permission to gather a complete list of on-premise servers

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportServerCatalog.html

#### Defined in

actions/sms.ts:153

___

### LaunchApp

• **LaunchApp** = ``"sms:LaunchApp"``

Grants permission to create and launch a CloudFormation stack for an existing a
pplication

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_LaunchApp.html

#### Defined in

actions/sms.ts:160

___

### ListApps

• **ListApps** = ``"sms:ListApps"``

Grants permission to get a list of summaries for existing applications

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ListAppss.html

#### Defined in

actions/sms.ts:166

___

### NotifyAppValidationOutput

• **NotifyAppValidationOutput** = ``"sms:NotifyAppValidationOutput"``

Grants permission to send notification for application validation script

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_NotifyAppValidationOutput.html

#### Defined in

actions/sms.ts:172

___

### PutAppLaunchConfiguration

• **PutAppLaunchConfiguration** = ``"sms:PutAppLaunchConfiguration"``

Grants permission to create or update launch configuration for an existing appl
ication

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppLaunchConfiguration.html

#### Defined in

actions/sms.ts:179

___

### PutAppReplicationConfiguration

• **PutAppReplicationConfiguration** = ``"sms:PutAppReplicationConfiguration"``

Grants permission to create or update replication configuration for an existing
application

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppReplicationConfiguration.html

#### Defined in

actions/sms.ts:186

___

### PutAppValidationConfiguration

• **PutAppValidationConfiguration** = ``"sms:PutAppValidationConfiguration"``

Grants permission to put validation configuration for an existing application

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppValidationConfiguration.html

#### Defined in

actions/sms.ts:192

___

### StartAppReplication

• **StartAppReplication** = ``"sms:StartAppReplication"``

Grants permission to create and start replication jobs for an existing applicat
ion

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartAppReplication.html

#### Defined in

actions/sms.ts:199

___

### StartOnDemandAppReplication

• **StartOnDemandAppReplication** = ``"sms:StartOnDemandAppReplication"``

Grants permission to start a replication run for an existing application

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandAppReplication.html

#### Defined in

actions/sms.ts:205

___

### StartOnDemandReplicationRun

• **StartOnDemandReplicationRun** = ``"sms:StartOnDemandReplicationRun"``

Grants permission to start a replication run for an existing replication job

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandReplicationRun.html

#### Defined in

actions/sms.ts:211

___

### StopAppReplication

• **StopAppReplication** = ``"sms:StopAppReplication"``

Grants permission to stop and delete replication jobs for an existing applicati
on

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StopAppReplication.html

#### Defined in

actions/sms.ts:218

___

### TerminateApp

• **TerminateApp** = ``"sms:TerminateApp"``

Grants permission to terminate the CloudFormation stack for an existing applica
tion

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_TerminateApp.html

#### Defined in

actions/sms.ts:225

___

### UpdateApp

• **UpdateApp** = ``"sms:UpdateApp"``

Grants permission to update an existing application configuration

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateApp.html

#### Defined in

actions/sms.ts:231

___

### UpdateReplicationJob

• **UpdateReplicationJob** = ``"sms:UpdateReplicationJob"``

Grants permission to update an existing job to migrate on-premise server onto A
WS

See https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateReplicationJob.html

#### Defined in

actions/sms.ts:238
