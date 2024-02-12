[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDevicefarmActions

# Enumeration: AwsDevicefarmActions

All IAM policy actions for AWS Device Farm (DEVICEFARM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdevicefarm.html

2024-02-12T09:56:57.464Z

## Table of contents

### Enumeration Members

- [CreateDevicePool](AwsDevicefarmActions.md#createdevicepool)
- [CreateInstanceProfile](AwsDevicefarmActions.md#createinstanceprofile)
- [CreateNetworkProfile](AwsDevicefarmActions.md#createnetworkprofile)
- [CreateProject](AwsDevicefarmActions.md#createproject)
- [CreateRemoteAccessSession](AwsDevicefarmActions.md#createremoteaccesssession)
- [CreateTestGridProject](AwsDevicefarmActions.md#createtestgridproject)
- [CreateTestGridUrl](AwsDevicefarmActions.md#createtestgridurl)
- [CreateUpload](AwsDevicefarmActions.md#createupload)
- [CreateVPCEConfiguration](AwsDevicefarmActions.md#createvpceconfiguration)
- [DeleteDevicePool](AwsDevicefarmActions.md#deletedevicepool)
- [DeleteInstanceProfile](AwsDevicefarmActions.md#deleteinstanceprofile)
- [DeleteNetworkProfile](AwsDevicefarmActions.md#deletenetworkprofile)
- [DeleteProject](AwsDevicefarmActions.md#deleteproject)
- [DeleteRemoteAccessSession](AwsDevicefarmActions.md#deleteremoteaccesssession)
- [DeleteRun](AwsDevicefarmActions.md#deleterun)
- [DeleteTestGridProject](AwsDevicefarmActions.md#deletetestgridproject)
- [DeleteUpload](AwsDevicefarmActions.md#deleteupload)
- [DeleteVPCEConfiguration](AwsDevicefarmActions.md#deletevpceconfiguration)
- [GetAccountSettings](AwsDevicefarmActions.md#getaccountsettings)
- [GetDevice](AwsDevicefarmActions.md#getdevice)
- [GetDeviceInstance](AwsDevicefarmActions.md#getdeviceinstance)
- [GetDevicePool](AwsDevicefarmActions.md#getdevicepool)
- [GetDevicePoolCompatibility](AwsDevicefarmActions.md#getdevicepoolcompatibility)
- [GetInstanceProfile](AwsDevicefarmActions.md#getinstanceprofile)
- [GetJob](AwsDevicefarmActions.md#getjob)
- [GetNetworkProfile](AwsDevicefarmActions.md#getnetworkprofile)
- [GetOfferingStatus](AwsDevicefarmActions.md#getofferingstatus)
- [GetProject](AwsDevicefarmActions.md#getproject)
- [GetRemoteAccessSession](AwsDevicefarmActions.md#getremoteaccesssession)
- [GetRun](AwsDevicefarmActions.md#getrun)
- [GetSuite](AwsDevicefarmActions.md#getsuite)
- [GetTest](AwsDevicefarmActions.md#gettest)
- [GetTestGridProject](AwsDevicefarmActions.md#gettestgridproject)
- [GetTestGridSession](AwsDevicefarmActions.md#gettestgridsession)
- [GetUpload](AwsDevicefarmActions.md#getupload)
- [GetVPCEConfiguration](AwsDevicefarmActions.md#getvpceconfiguration)
- [InstallToRemoteAccessSession](AwsDevicefarmActions.md#installtoremoteaccesssession)
- [ListArtifacts](AwsDevicefarmActions.md#listartifacts)
- [ListDeviceInstances](AwsDevicefarmActions.md#listdeviceinstances)
- [ListDevicePools](AwsDevicefarmActions.md#listdevicepools)
- [ListDevices](AwsDevicefarmActions.md#listdevices)
- [ListInstanceProfiles](AwsDevicefarmActions.md#listinstanceprofiles)
- [ListJobs](AwsDevicefarmActions.md#listjobs)
- [ListNetworkProfiles](AwsDevicefarmActions.md#listnetworkprofiles)
- [ListOfferingPromotions](AwsDevicefarmActions.md#listofferingpromotions)
- [ListOfferingTransactions](AwsDevicefarmActions.md#listofferingtransactions)
- [ListOfferings](AwsDevicefarmActions.md#listofferings)
- [ListProjects](AwsDevicefarmActions.md#listprojects)
- [ListRemoteAccessSessions](AwsDevicefarmActions.md#listremoteaccesssessions)
- [ListRuns](AwsDevicefarmActions.md#listruns)
- [ListSamples](AwsDevicefarmActions.md#listsamples)
- [ListSuites](AwsDevicefarmActions.md#listsuites)
- [ListTagsForResource](AwsDevicefarmActions.md#listtagsforresource)
- [ListTestGridProjects](AwsDevicefarmActions.md#listtestgridprojects)
- [ListTestGridSessionActions](AwsDevicefarmActions.md#listtestgridsessionactions)
- [ListTestGridSessionArtifacts](AwsDevicefarmActions.md#listtestgridsessionartifacts)
- [ListTestGridSessions](AwsDevicefarmActions.md#listtestgridsessions)
- [ListTests](AwsDevicefarmActions.md#listtests)
- [ListUniqueProblems](AwsDevicefarmActions.md#listuniqueproblems)
- [ListUploads](AwsDevicefarmActions.md#listuploads)
- [ListVPCEConfigurations](AwsDevicefarmActions.md#listvpceconfigurations)
- [PurchaseOffering](AwsDevicefarmActions.md#purchaseoffering)
- [RenewOffering](AwsDevicefarmActions.md#renewoffering)
- [ScheduleRun](AwsDevicefarmActions.md#schedulerun)
- [StopJob](AwsDevicefarmActions.md#stopjob)
- [StopRemoteAccessSession](AwsDevicefarmActions.md#stopremoteaccesssession)
- [StopRun](AwsDevicefarmActions.md#stoprun)
- [TagResource](AwsDevicefarmActions.md#tagresource)
- [UntagResource](AwsDevicefarmActions.md#untagresource)
- [UpdateDeviceInstance](AwsDevicefarmActions.md#updatedeviceinstance)
- [UpdateDevicePool](AwsDevicefarmActions.md#updatedevicepool)
- [UpdateInstanceProfile](AwsDevicefarmActions.md#updateinstanceprofile)
- [UpdateNetworkProfile](AwsDevicefarmActions.md#updatenetworkprofile)
- [UpdateProject](AwsDevicefarmActions.md#updateproject)
- [UpdateTestGridProject](AwsDevicefarmActions.md#updatetestgridproject)
- [UpdateUpload](AwsDevicefarmActions.md#updateupload)
- [UpdateVPCEConfiguration](AwsDevicefarmActions.md#updatevpceconfiguration)

## Enumeration Members

### CreateDevicePool

• **CreateDevicePool** = ``"devicefarm:CreateDevicePool"``

Grants permission to create a device pool within a project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateDevicePool.html

#### Defined in

actions/devicefarm.ts:17

___

### CreateInstanceProfile

• **CreateInstanceProfile** = ``"devicefarm:CreateInstanceProfile"``

Grants permission to create a device instance profile

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateInstanceProfile.html

#### Defined in

actions/devicefarm.ts:23

___

### CreateNetworkProfile

• **CreateNetworkProfile** = ``"devicefarm:CreateNetworkProfile"``

Grants permission to create a network profile within a project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateNetworkProfile.html

#### Defined in

actions/devicefarm.ts:29

___

### CreateProject

• **CreateProject** = ``"devicefarm:CreateProject"``

Grants permission to create a project for mobile testing

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateProject.html

#### Defined in

actions/devicefarm.ts:35

___

### CreateRemoteAccessSession

• **CreateRemoteAccessSession** = ``"devicefarm:CreateRemoteAccessSession"``

Grants permission to start a remote access session to a device instance

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateRemoteAccessSession.html

#### Defined in

actions/devicefarm.ts:41

___

### CreateTestGridProject

• **CreateTestGridProject** = ``"devicefarm:CreateTestGridProject"``

Grants permission to create a project for desktop testing

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridProject.html

#### Defined in

actions/devicefarm.ts:47

___

### CreateTestGridUrl

• **CreateTestGridUrl** = ``"devicefarm:CreateTestGridUrl"``

Grants permission to generate a new pre-signed url used to access our test grid
service

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridUrl.html

#### Defined in

actions/devicefarm.ts:54

___

### CreateUpload

• **CreateUpload** = ``"devicefarm:CreateUpload"``

Grants permission to upload a new file or app within a project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html

#### Defined in

actions/devicefarm.ts:60

___

### CreateVPCEConfiguration

• **CreateVPCEConfiguration** = ``"devicefarm:CreateVPCEConfiguration"``

Grants permission to create an Amazon Virtual Private Cloud (VPC) endpoint conf
iguration

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateVPCEConfiguration.html

#### Defined in

actions/devicefarm.ts:67

___

### DeleteDevicePool

• **DeleteDevicePool** = ``"devicefarm:DeleteDevicePool"``

Grants permission to delete a user-generated device pool

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteDevicePool.html

#### Defined in

actions/devicefarm.ts:73

___

### DeleteInstanceProfile

• **DeleteInstanceProfile** = ``"devicefarm:DeleteInstanceProfile"``

Grants permission to delete a user-generated instance profile

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteInstanceProfile.html

#### Defined in

actions/devicefarm.ts:79

___

### DeleteNetworkProfile

• **DeleteNetworkProfile** = ``"devicefarm:DeleteNetworkProfile"``

Grants permission to delete a user-generated network profile

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/DeleteNetworkProfile.html

#### Defined in

actions/devicefarm.ts:85

___

### DeleteProject

• **DeleteProject** = ``"devicefarm:DeleteProject"``

Grants permission to delete a mobile testing project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteProject.html

#### Defined in

actions/devicefarm.ts:91

___

### DeleteRemoteAccessSession

• **DeleteRemoteAccessSession** = ``"devicefarm:DeleteRemoteAccessSession"``

Grants permission to delete a completed remote access session and its results

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRemoteAccessSession.html

#### Defined in

actions/devicefarm.ts:97

___

### DeleteRun

• **DeleteRun** = ``"devicefarm:DeleteRun"``

Grants permission to delete a run

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRun.html

#### Defined in

actions/devicefarm.ts:103

___

### DeleteTestGridProject

• **DeleteTestGridProject** = ``"devicefarm:DeleteTestGridProject"``

Grants permission to delete a desktop testing project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteTestGridProject.html

#### Defined in

actions/devicefarm.ts:109

___

### DeleteUpload

• **DeleteUpload** = ``"devicefarm:DeleteUpload"``

Grants permission to delete a user-uploaded file

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteUpload.html

#### Defined in

actions/devicefarm.ts:115

___

### DeleteVPCEConfiguration

• **DeleteVPCEConfiguration** = ``"devicefarm:DeleteVPCEConfiguration"``

Grants permission to delete an Amazon Virtual Private Cloud (VPC) endpoint conf
iguration

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteVPCEConfiguration.html

#### Defined in

actions/devicefarm.ts:122

___

### GetAccountSettings

• **GetAccountSettings** = ``"devicefarm:GetAccountSettings"``

Grants permission to retrieve the number of unmetered iOS and/or unmetered Andr
oid devices purchased by the account

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetAccountSettings.html

#### Defined in

actions/devicefarm.ts:129

___

### GetDevice

• **GetDevice** = ``"devicefarm:GetDevice"``

Grants permission to retrieve the information of a unique device type

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevice.html

#### Defined in

actions/devicefarm.ts:135

___

### GetDeviceInstance

• **GetDeviceInstance** = ``"devicefarm:GetDeviceInstance"``

Grants permission to retireve the information of a device instance

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDeviceInstance.html

#### Defined in

actions/devicefarm.ts:141

___

### GetDevicePool

• **GetDevicePool** = ``"devicefarm:GetDevicePool"``

Grants permission to retireve the information of a device pool

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePool.html

#### Defined in

actions/devicefarm.ts:147

___

### GetDevicePoolCompatibility

• **GetDevicePoolCompatibility** = ``"devicefarm:GetDevicePoolCompatibility"``

Grants permission to retrieve information about the compatibility of a test and
/or app with a device pool

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePoolCompatibility.html

#### Defined in

actions/devicefarm.ts:154

___

### GetInstanceProfile

• **GetInstanceProfile** = ``"devicefarm:GetInstanceProfile"``

Grants permission to retireve the information of an instance profile

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetInstanceProfile.html

#### Defined in

actions/devicefarm.ts:160

___

### GetJob

• **GetJob** = ``"devicefarm:GetJob"``

Grants permission to retireve the information of a job

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetJob.html

#### Defined in

actions/devicefarm.ts:166

___

### GetNetworkProfile

• **GetNetworkProfile** = ``"devicefarm:GetNetworkProfile"``

Grants permission to retireve the information of a network profile

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetNetworkProfile.html

#### Defined in

actions/devicefarm.ts:172

___

### GetOfferingStatus

• **GetOfferingStatus** = ``"devicefarm:GetOfferingStatus"``

Grants permission to retrieve the current status and future status of all offer
ings purchased by an AWS account

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetOfferingStatus.html

#### Defined in

actions/devicefarm.ts:179

___

### GetProject

• **GetProject** = ``"devicefarm:GetProject"``

Grants permission to retrieve information about a mobile testing project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetProject.html

#### Defined in

actions/devicefarm.ts:185

___

### GetRemoteAccessSession

• **GetRemoteAccessSession** = ``"devicefarm:GetRemoteAccessSession"``

Grants permission to retireve the link to a currently running remote access ses
sion

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRemoteAccessSession.html

#### Defined in

actions/devicefarm.ts:192

___

### GetRun

• **GetRun** = ``"devicefarm:GetRun"``

Grants permission to retireve the information of a run

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRun.html

#### Defined in

actions/devicefarm.ts:198

___

### GetSuite

• **GetSuite** = ``"devicefarm:GetSuite"``

Grants permission to retireve the information of a testing suite

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetSuite.html

#### Defined in

actions/devicefarm.ts:204

___

### GetTest

• **GetTest** = ``"devicefarm:GetTest"``

Grants permission to retireve the information of a test case

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTest.html

#### Defined in

actions/devicefarm.ts:210

___

### GetTestGridProject

• **GetTestGridProject** = ``"devicefarm:GetTestGridProject"``

Grants permission to retrieve information about a desktop testing project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridProject.html

#### Defined in

actions/devicefarm.ts:216

___

### GetTestGridSession

• **GetTestGridSession** = ``"devicefarm:GetTestGridSession"``

Grants permission to retireve the information of a test grid session

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridSession.html

#### Defined in

actions/devicefarm.ts:222

___

### GetUpload

• **GetUpload** = ``"devicefarm:GetUpload"``

Grants permission to retireve the information of an uploaded file

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetUpload.html

#### Defined in

actions/devicefarm.ts:228

___

### GetVPCEConfiguration

• **GetVPCEConfiguration** = ``"devicefarm:GetVPCEConfiguration"``

Grants permission to retireve the information of an Amazon Virtual Private Clou
d (VPC) endpoint configuration

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetVPCEConfiguration.html

#### Defined in

actions/devicefarm.ts:235

___

### InstallToRemoteAccessSession

• **InstallToRemoteAccessSession** = ``"devicefarm:InstallToRemoteAccessSession"``

Grants permission to install an application to a device in a remote access sess
ion

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstallToRemoteAccessSession.html

#### Defined in

actions/devicefarm.ts:242

___

### ListArtifacts

• **ListArtifacts** = ``"devicefarm:ListArtifacts"``

Grants permission to list the artifacts in a project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListArtifacts.html

#### Defined in

actions/devicefarm.ts:248

___

### ListDeviceInstances

• **ListDeviceInstances** = ``"devicefarm:ListDeviceInstances"``

Grants permission to list the information of device instances

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDeviceInstances.html

#### Defined in

actions/devicefarm.ts:254

___

### ListDevicePools

• **ListDevicePools** = ``"devicefarm:ListDevicePools"``

Grants permission to list the information of device pools

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevicePools.html

#### Defined in

actions/devicefarm.ts:260

___

### ListDevices

• **ListDevices** = ``"devicefarm:ListDevices"``

Grants permission to list the information of unique device types

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevices.html

#### Defined in

actions/devicefarm.ts:266

___

### ListInstanceProfiles

• **ListInstanceProfiles** = ``"devicefarm:ListInstanceProfiles"``

Grants permission to list the information of device instance profiles

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListInstanceProfiles.html

#### Defined in

actions/devicefarm.ts:272

___

### ListJobs

• **ListJobs** = ``"devicefarm:ListJobs"``

Grants permission to list the information of jobs within a run

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListJobs.html

#### Defined in

actions/devicefarm.ts:278

___

### ListNetworkProfiles

• **ListNetworkProfiles** = ``"devicefarm:ListNetworkProfiles"``

Grants permission to list the information of network profiles within a project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListNetworkProfiles.html

#### Defined in

actions/devicefarm.ts:284

___

### ListOfferingPromotions

• **ListOfferingPromotions** = ``"devicefarm:ListOfferingPromotions"``

Grants permission to list the offering promotions

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingPromotions.html

#### Defined in

actions/devicefarm.ts:290

___

### ListOfferingTransactions

• **ListOfferingTransactions** = ``"devicefarm:ListOfferingTransactions"``

Grants permission to list all of the historical purchases, renewals, and system
renewal transactions for an AWS account

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingTransactions.html

#### Defined in

actions/devicefarm.ts:297

___

### ListOfferings

• **ListOfferings** = ``"devicefarm:ListOfferings"``

Grants permission to list the products or offerings that the user can manage th
rough the API

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferings.html

#### Defined in

actions/devicefarm.ts:304

___

### ListProjects

• **ListProjects** = ``"devicefarm:ListProjects"``

Grants permission to list the information of mobile testing projects for an AWS
account

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListProjects.html

#### Defined in

actions/devicefarm.ts:311

___

### ListRemoteAccessSessions

• **ListRemoteAccessSessions** = ``"devicefarm:ListRemoteAccessSessions"``

Grants permission to list the information of currently running remote access se
ssions

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRemoteAccessSessions.html

#### Defined in

actions/devicefarm.ts:318

___

### ListRuns

• **ListRuns** = ``"devicefarm:ListRuns"``

Grants permission to list the information of runs within a project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRuns.html

#### Defined in

actions/devicefarm.ts:324

___

### ListSamples

• **ListSamples** = ``"devicefarm:ListSamples"``

Grants permission to list the information of samples within a project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSamples.html

#### Defined in

actions/devicefarm.ts:330

___

### ListSuites

• **ListSuites** = ``"devicefarm:ListSuites"``

Grants permission to list the information of testing suites within a job

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSuites.html

#### Defined in

actions/devicefarm.ts:336

___

### ListTagsForResource

• **ListTagsForResource** = ``"devicefarm:ListTagsForResource"``

Grants permission to list the tags of a resource

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/devicefarm.ts:342

___

### ListTestGridProjects

• **ListTestGridProjects** = ``"devicefarm:ListTestGridProjects"``

Grants permission to list the information of desktop testing projects for an AW
S account

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridProjects.html

#### Defined in

actions/devicefarm.ts:349

___

### ListTestGridSessionActions

• **ListTestGridSessionActions** = ``"devicefarm:ListTestGridSessionActions"``

Grants permission to list the session actions performed during a test grid sess
ion

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionActions.html

#### Defined in

actions/devicefarm.ts:356

___

### ListTestGridSessionArtifacts

• **ListTestGridSessionArtifacts** = ``"devicefarm:ListTestGridSessionArtifacts"``

Grants permission to list the artifacts generated by a test grid session

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionArtifacts.html

#### Defined in

actions/devicefarm.ts:362

___

### ListTestGridSessions

• **ListTestGridSessions** = ``"devicefarm:ListTestGridSessions"``

Grants permission to list the sessions within a test grid project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessions.html

#### Defined in

actions/devicefarm.ts:368

___

### ListTests

• **ListTests** = ``"devicefarm:ListTests"``

Grants permission to list the information of tests within a testing suite

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTests.html

#### Defined in

actions/devicefarm.ts:374

___

### ListUniqueProblems

• **ListUniqueProblems** = ``"devicefarm:ListUniqueProblems"``

Grants permission to list the information of unique problems within a run

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUniqueProblems.html

#### Defined in

actions/devicefarm.ts:380

___

### ListUploads

• **ListUploads** = ``"devicefarm:ListUploads"``

Grants permission to list the information of uploads within a project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUploads.html

#### Defined in

actions/devicefarm.ts:386

___

### ListVPCEConfigurations

• **ListVPCEConfigurations** = ``"devicefarm:ListVPCEConfigurations"``

Grants permission to list the information of Amazon Virtual Private Cloud (VPC)
endpoint configurations

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListVPCEConfigurations.html

#### Defined in

actions/devicefarm.ts:393

___

### PurchaseOffering

• **PurchaseOffering** = ``"devicefarm:PurchaseOffering"``

Grants permission to purchase offerings for an AWS account

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_PurchaseOffering.html

#### Defined in

actions/devicefarm.ts:399

___

### RenewOffering

• **RenewOffering** = ``"devicefarm:RenewOffering"``

Grants permission to set the quantity of devices to renew for an offering

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RenewOffering.html

#### Defined in

actions/devicefarm.ts:405

___

### ScheduleRun

• **ScheduleRun** = ``"devicefarm:ScheduleRun"``

Grants permission to schedule a run

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ScheduleRun.html

#### Defined in

actions/devicefarm.ts:411

___

### StopJob

• **StopJob** = ``"devicefarm:StopJob"``

Grants permission to terminate a running job

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopJob.html

#### Defined in

actions/devicefarm.ts:417

___

### StopRemoteAccessSession

• **StopRemoteAccessSession** = ``"devicefarm:StopRemoteAccessSession"``

Grants permission to terminate a running remote access session

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRemoteAccessSession.html

#### Defined in

actions/devicefarm.ts:423

___

### StopRun

• **StopRun** = ``"devicefarm:StopRun"``

Grants permission to terminate a running test run

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRun.html

#### Defined in

actions/devicefarm.ts:429

___

### TagResource

• **TagResource** = ``"devicefarm:TagResource"``

Grants permission to add tags to a resource

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TagResource.html

#### Defined in

actions/devicefarm.ts:435

___

### UntagResource

• **UntagResource** = ``"devicefarm:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UntagResource.html

#### Defined in

actions/devicefarm.ts:441

___

### UpdateDeviceInstance

• **UpdateDeviceInstance** = ``"devicefarm:UpdateDeviceInstance"``

Grants permission to modify an existing device instance

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDeviceInstance.html

#### Defined in

actions/devicefarm.ts:447

___

### UpdateDevicePool

• **UpdateDevicePool** = ``"devicefarm:UpdateDevicePool"``

Grants permission to modify an existing device pool

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDevicePool.html

#### Defined in

actions/devicefarm.ts:453

___

### UpdateInstanceProfile

• **UpdateInstanceProfile** = ``"devicefarm:UpdateInstanceProfile"``

Grants permission to modify an existing instance profile

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateInstanceProfile.html

#### Defined in

actions/devicefarm.ts:459

___

### UpdateNetworkProfile

• **UpdateNetworkProfile** = ``"devicefarm:UpdateNetworkProfile"``

Grants permission to modify an existing network profile

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateNetworkProfile.html

#### Defined in

actions/devicefarm.ts:465

___

### UpdateProject

• **UpdateProject** = ``"devicefarm:UpdateProject"``

Grants permission to modify an existing mobile testing project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateProject.html

#### Defined in

actions/devicefarm.ts:471

___

### UpdateTestGridProject

• **UpdateTestGridProject** = ``"devicefarm:UpdateTestGridProject"``

Grants permission to modify an existing desktop testing project

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateTestGridProject.html

#### Defined in

actions/devicefarm.ts:477

___

### UpdateUpload

• **UpdateUpload** = ``"devicefarm:UpdateUpload"``

Grants permission to modify an existing upload

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateUpload.html

#### Defined in

actions/devicefarm.ts:483

___

### UpdateVPCEConfiguration

• **UpdateVPCEConfiguration** = ``"devicefarm:UpdateVPCEConfiguration"``

Grants permission to modify an existing Amazon Virtual Private Cloud (VPC) endp
oint configuration

See https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateVPCEConfiguration.html

#### Defined in

actions/devicefarm.ts:490
