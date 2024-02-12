[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsBackupGatewayActions

# Enumeration: AwsBackupGatewayActions

All IAM policy actions for AWS Backup Gateway (BACKUP-GATEWAY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupgateway.html

2024-02-12T09:56:10.521Z

## Table of contents

### Enumeration Members

- [AssociateGatewayToServer](AwsBackupGatewayActions.md#associategatewaytoserver)
- [Backup](AwsBackupGatewayActions.md#backup)
- [CreateGateway](AwsBackupGatewayActions.md#creategateway)
- [DeleteGateway](AwsBackupGatewayActions.md#deletegateway)
- [DeleteHypervisor](AwsBackupGatewayActions.md#deletehypervisor)
- [DisassociateGatewayFromServer](AwsBackupGatewayActions.md#disassociategatewayfromserver)
- [GetBandwidthRateLimitSchedule](AwsBackupGatewayActions.md#getbandwidthratelimitschedule)
- [GetGateway](AwsBackupGatewayActions.md#getgateway)
- [GetHypervisor](AwsBackupGatewayActions.md#gethypervisor)
- [GetHypervisorPropertyMappings](AwsBackupGatewayActions.md#gethypervisorpropertymappings)
- [GetVirtualMachine](AwsBackupGatewayActions.md#getvirtualmachine)
- [ImportHypervisorConfiguration](AwsBackupGatewayActions.md#importhypervisorconfiguration)
- [ListGateways](AwsBackupGatewayActions.md#listgateways)
- [ListHypervisors](AwsBackupGatewayActions.md#listhypervisors)
- [ListTagsForResource](AwsBackupGatewayActions.md#listtagsforresource)
- [ListVirtualMachines](AwsBackupGatewayActions.md#listvirtualmachines)
- [PutBandwidthRateLimitSchedule](AwsBackupGatewayActions.md#putbandwidthratelimitschedule)
- [PutHypervisorPropertyMappings](AwsBackupGatewayActions.md#puthypervisorpropertymappings)
- [PutMaintenanceStartTime](AwsBackupGatewayActions.md#putmaintenancestarttime)
- [Restore](AwsBackupGatewayActions.md#restore)
- [StartVirtualMachinesMetadataSync](AwsBackupGatewayActions.md#startvirtualmachinesmetadatasync)
- [TagResource](AwsBackupGatewayActions.md#tagresource)
- [TestHypervisorConfiguration](AwsBackupGatewayActions.md#testhypervisorconfiguration)
- [UntagResource](AwsBackupGatewayActions.md#untagresource)
- [UpdateGatewayInformation](AwsBackupGatewayActions.md#updategatewayinformation)
- [UpdateGatewaySoftwareNow](AwsBackupGatewayActions.md#updategatewaysoftwarenow)
- [UpdateHypervisor](AwsBackupGatewayActions.md#updatehypervisor)

## Enumeration Members

### AssociateGatewayToServer

• **AssociateGatewayToServer** = ``"backup-gateway:AssociateGatewayToServer"``

Grants permission to AssociateGatewayToServer

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_AssociateGatewayToServer.html

#### Defined in

actions/backup-gateway.ts:17

___

### Backup

• **Backup** = ``"backup-gateway:Backup"``

Grants permission to Backup

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartBackupJob.html

#### Defined in

actions/backup-gateway.ts:23

___

### CreateGateway

• **CreateGateway** = ``"backup-gateway:CreateGateway"``

Grants permission to to CreateGateway

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_CreateGateway.html

#### Defined in

actions/backup-gateway.ts:29

___

### DeleteGateway

• **DeleteGateway** = ``"backup-gateway:DeleteGateway"``

Grants permission to DeleteGateway

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_DeleteGateway.html

#### Defined in

actions/backup-gateway.ts:35

___

### DeleteHypervisor

• **DeleteHypervisor** = ``"backup-gateway:DeleteHypervisor"``

Grants permission to DeleteHypervisor

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_DeleteHypervisor.html

#### Defined in

actions/backup-gateway.ts:41

___

### DisassociateGatewayFromServer

• **DisassociateGatewayFromServer** = ``"backup-gateway:DisassociateGatewayFromServer"``

Grants permission to DisassociateGatewayFromServer

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_DisassociateGatewayFromServer.html

#### Defined in

actions/backup-gateway.ts:47

___

### GetBandwidthRateLimitSchedule

• **GetBandwidthRateLimitSchedule** = ``"backup-gateway:GetBandwidthRateLimitSchedule"``

Grants permission to GetBandwidthRateLimitSchedule

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetBandwidthRateLimitSchedule.html

#### Defined in

actions/backup-gateway.ts:53

___

### GetGateway

• **GetGateway** = ``"backup-gateway:GetGateway"``

Grants permission to GetGateway

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetGateway.html

#### Defined in

actions/backup-gateway.ts:59

___

### GetHypervisor

• **GetHypervisor** = ``"backup-gateway:GetHypervisor"``

Grants permission to GetHypervisor

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetHypervisor.html

#### Defined in

actions/backup-gateway.ts:65

___

### GetHypervisorPropertyMappings

• **GetHypervisorPropertyMappings** = ``"backup-gateway:GetHypervisorPropertyMappings"``

Grants permission to GetHypervisorPropertyMappings

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetHypervisorPropertyMappings.html

#### Defined in

actions/backup-gateway.ts:71

___

### GetVirtualMachine

• **GetVirtualMachine** = ``"backup-gateway:GetVirtualMachine"``

Grants permission to GetVirtualMachine

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetVirtualMachine.html

#### Defined in

actions/backup-gateway.ts:77

___

### ImportHypervisorConfiguration

• **ImportHypervisorConfiguration** = ``"backup-gateway:ImportHypervisorConfiguration"``

Grants permission to ImportHypervisorConfiguration

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ImportHypervisorConfiguration.html

#### Defined in

actions/backup-gateway.ts:83

___

### ListGateways

• **ListGateways** = ``"backup-gateway:ListGateways"``

Grants permission to ListGateways

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html

#### Defined in

actions/backup-gateway.ts:89

___

### ListHypervisors

• **ListHypervisors** = ``"backup-gateway:ListHypervisors"``

Grants permission to ListHypervisors

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListHypervisors.html

#### Defined in

actions/backup-gateway.ts:95

___

### ListTagsForResource

• **ListTagsForResource** = ``"backup-gateway:ListTagsForResource"``

Grants permission to ListTagsForResource

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListTagsForResource.html

#### Defined in

actions/backup-gateway.ts:101

___

### ListVirtualMachines

• **ListVirtualMachines** = ``"backup-gateway:ListVirtualMachines"``

Grants permission to ListVirtualMachines

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListVirtualMachines.html

#### Defined in

actions/backup-gateway.ts:107

___

### PutBandwidthRateLimitSchedule

• **PutBandwidthRateLimitSchedule** = ``"backup-gateway:PutBandwidthRateLimitSchedule"``

Grants permission to PutBandwidthRateLimitSchedule

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_PutBandwidthRateLimitSchedule.html

#### Defined in

actions/backup-gateway.ts:113

___

### PutHypervisorPropertyMappings

• **PutHypervisorPropertyMappings** = ``"backup-gateway:PutHypervisorPropertyMappings"``

Grants permission to PutHypervisorPropertyMappings

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_PutHypervisorPropertyMappings.html

#### Defined in

actions/backup-gateway.ts:119

___

### PutMaintenanceStartTime

• **PutMaintenanceStartTime** = ``"backup-gateway:PutMaintenanceStartTime"``

Grants permission to PutMaintenanceStartTime

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_PutMaintenanceStartTime.html

#### Defined in

actions/backup-gateway.ts:125

___

### Restore

• **Restore** = ``"backup-gateway:Restore"``

Grants permission to Restore

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartRestoreJob.html

#### Defined in

actions/backup-gateway.ts:131

___

### StartVirtualMachinesMetadataSync

• **StartVirtualMachinesMetadataSync** = ``"backup-gateway:StartVirtualMachinesMetadataSync"``

Grants permission to StartVirtualMachinesMetadataSync

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_StartVirtualMachinesMetadataSync.html

#### Defined in

actions/backup-gateway.ts:137

___

### TagResource

• **TagResource** = ``"backup-gateway:TagResource"``

Grants permission to TagResource

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_TagResource.html

#### Defined in

actions/backup-gateway.ts:143

___

### TestHypervisorConfiguration

• **TestHypervisorConfiguration** = ``"backup-gateway:TestHypervisorConfiguration"``

Grants permission to TestHypervisorConfiguration

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_TestHypervisorConfiguration.html

#### Defined in

actions/backup-gateway.ts:149

___

### UntagResource

• **UntagResource** = ``"backup-gateway:UntagResource"``

Grants permission to UntagResource

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UntagResource.html

#### Defined in

actions/backup-gateway.ts:155

___

### UpdateGatewayInformation

• **UpdateGatewayInformation** = ``"backup-gateway:UpdateGatewayInformation"``

Grants permission to UpdateGatewayInformation

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UpdateGatewayInformation.html

#### Defined in

actions/backup-gateway.ts:161

___

### UpdateGatewaySoftwareNow

• **UpdateGatewaySoftwareNow** = ``"backup-gateway:UpdateGatewaySoftwareNow"``

Grants permission to UpdateGatewaySoftwareNow

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UpdateGatewaySoftwareNow.html

#### Defined in

actions/backup-gateway.ts:167

___

### UpdateHypervisor

• **UpdateHypervisor** = ``"backup-gateway:UpdateHypervisor"``

Grants permission to UpdateHypervisor

See https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UpdateHypervisor.html

#### Defined in

actions/backup-gateway.ts:173
