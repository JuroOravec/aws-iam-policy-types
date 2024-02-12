[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsPanoramaActions

# Enumeration: AwsPanoramaActions

All IAM policy actions for AWS Panorama (PANORAMA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html

2024-02-12T09:58:35.659Z

## Table of contents

### Enumeration Members

- [CreateApplicationInstance](AwsPanoramaActions.md#createapplicationinstance)
- [CreateJobForDevices](AwsPanoramaActions.md#createjobfordevices)
- [CreateNodeFromTemplateJob](AwsPanoramaActions.md#createnodefromtemplatejob)
- [CreatePackage](AwsPanoramaActions.md#createpackage)
- [CreatePackageImportJob](AwsPanoramaActions.md#createpackageimportjob)
- [DeleteDevice](AwsPanoramaActions.md#deletedevice)
- [DeletePackage](AwsPanoramaActions.md#deletepackage)
- [DeregisterPackageVersion](AwsPanoramaActions.md#deregisterpackageversion)
- [DescribeApplicationInstance](AwsPanoramaActions.md#describeapplicationinstance)
- [DescribeApplicationInstanceDetails](AwsPanoramaActions.md#describeapplicationinstancedetails)
- [DescribeDevice](AwsPanoramaActions.md#describedevice)
- [DescribeDeviceJob](AwsPanoramaActions.md#describedevicejob)
- [DescribeNode](AwsPanoramaActions.md#describenode)
- [DescribeNodeFromTemplateJob](AwsPanoramaActions.md#describenodefromtemplatejob)
- [DescribePackage](AwsPanoramaActions.md#describepackage)
- [DescribePackageImportJob](AwsPanoramaActions.md#describepackageimportjob)
- [DescribePackageVersion](AwsPanoramaActions.md#describepackageversion)
- [DescribeSoftware](AwsPanoramaActions.md#describesoftware)
- [GetWebSocketURL](AwsPanoramaActions.md#getwebsocketurl)
- [ListApplicationInstanceDependencies](AwsPanoramaActions.md#listapplicationinstancedependencies)
- [ListApplicationInstanceNodeInstances](AwsPanoramaActions.md#listapplicationinstancenodeinstances)
- [ListApplicationInstances](AwsPanoramaActions.md#listapplicationinstances)
- [ListDevices](AwsPanoramaActions.md#listdevices)
- [ListDevicesJobs](AwsPanoramaActions.md#listdevicesjobs)
- [ListNodeFromTemplateJobs](AwsPanoramaActions.md#listnodefromtemplatejobs)
- [ListNodes](AwsPanoramaActions.md#listnodes)
- [ListPackageImportJobs](AwsPanoramaActions.md#listpackageimportjobs)
- [ListPackages](AwsPanoramaActions.md#listpackages)
- [ListTagsForResource](AwsPanoramaActions.md#listtagsforresource)
- [ProvisionDevice](AwsPanoramaActions.md#provisiondevice)
- [RegisterPackageVersion](AwsPanoramaActions.md#registerpackageversion)
- [RemoveApplicationInstance](AwsPanoramaActions.md#removeapplicationinstance)
- [SignalApplicationInstanceNodeInstances](AwsPanoramaActions.md#signalapplicationinstancenodeinstances)
- [TagResource](AwsPanoramaActions.md#tagresource)
- [UntagResource](AwsPanoramaActions.md#untagresource)
- [UpdateDeviceMetadata](AwsPanoramaActions.md#updatedevicemetadata)

## Enumeration Members

### CreateApplicationInstance

• **CreateApplicationInstance** = ``"panorama:CreateApplicationInstance"``

Grants permission to create an AWS Panorama Application Instance

See https://docs.aws.amazon.com/panorama/latest/api/API_CreateApplicationInstance.html

#### Defined in

actions/panorama.ts:17

___

### CreateJobForDevices

• **CreateJobForDevices** = ``"panorama:CreateJobForDevices"``

Grants permission to create a job for an AWS Panorama Appliance

See https://docs.aws.amazon.com/panorama/latest/api/API_CreateJobForDevices.html

#### Defined in

actions/panorama.ts:23

___

### CreateNodeFromTemplateJob

• **CreateNodeFromTemplateJob** = ``"panorama:CreateNodeFromTemplateJob"``

Grants permission to create an AWS Panorama Node

See https://docs.aws.amazon.com/panorama/latest/api/API_CreateNodeFromTemplateJob.html

#### Defined in

actions/panorama.ts:29

___

### CreatePackage

• **CreatePackage** = ``"panorama:CreatePackage"``

Grants permission to create an AWS Panorama Package

See https://docs.aws.amazon.com/panorama/latest/api/API_CreatePackage.html

#### Defined in

actions/panorama.ts:35

___

### CreatePackageImportJob

• **CreatePackageImportJob** = ``"panorama:CreatePackageImportJob"``

Grants permission to create an AWS Panorama Package

See https://docs.aws.amazon.com/panorama/latest/api/API_CreatePackageImportJob.html

#### Defined in

actions/panorama.ts:41

___

### DeleteDevice

• **DeleteDevice** = ``"panorama:DeleteDevice"``

Grants permission to deregister an AWS Panorama Appliance

See https://docs.aws.amazon.com/panorama/latest/api/API_DeleteDevice.html

#### Defined in

actions/panorama.ts:47

___

### DeletePackage

• **DeletePackage** = ``"panorama:DeletePackage"``

Grants permission to delete an AWS Panorama Package

See https://docs.aws.amazon.com/panorama/latest/api/API_DeletePackage.html

#### Defined in

actions/panorama.ts:53

___

### DeregisterPackageVersion

• **DeregisterPackageVersion** = ``"panorama:DeregisterPackageVersion"``

Grants permission to deregister an AWS Panorama package version

See https://docs.aws.amazon.com/panorama/latest/api/API_DeregisterPackageVersion.html

#### Defined in

actions/panorama.ts:59

___

### DescribeApplicationInstance

• **DescribeApplicationInstance** = ``"panorama:DescribeApplicationInstance"``

Grants permission to view details about an AWS Panorama application instance

See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeApplicationInstance.html

#### Defined in

actions/panorama.ts:65

___

### DescribeApplicationInstanceDetails

• **DescribeApplicationInstanceDetails** = ``"panorama:DescribeApplicationInstanceDetails"``

Grants permission to view details about an AWS Panorama application instance

See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeApplicationInstanceDetails.html

#### Defined in

actions/panorama.ts:71

___

### DescribeDevice

• **DescribeDevice** = ``"panorama:DescribeDevice"``

Grants permission to view details about an AWS Panorama Appliance

See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeDevice.html

#### Defined in

actions/panorama.ts:77

___

### DescribeDeviceJob

• **DescribeDeviceJob** = ``"panorama:DescribeDeviceJob"``

Grants permission to view job details for an AWS Panorama Appliance

See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeDeviceJob.html

#### Defined in

actions/panorama.ts:83

___

### DescribeNode

• **DescribeNode** = ``"panorama:DescribeNode"``

Grants permission to view details about an AWS Panorama application node

See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeNode.html

#### Defined in

actions/panorama.ts:89

___

### DescribeNodeFromTemplateJob

• **DescribeNodeFromTemplateJob** = ``"panorama:DescribeNodeFromTemplateJob"``

Grants permission to view details about AWS Panorama application node

See https://docs.aws.amazon.com/panorama/latest/api/API_DescribeNodeFromTemplateJob.html

#### Defined in

actions/panorama.ts:95

___

### DescribePackage

• **DescribePackage** = ``"panorama:DescribePackage"``

Grants permission to view details about an AWS Panorama package

See https://docs.aws.amazon.com/panorama/latest/api/API_DescribePackage.html

#### Defined in

actions/panorama.ts:101

___

### DescribePackageImportJob

• **DescribePackageImportJob** = ``"panorama:DescribePackageImportJob"``

Grants permission to view details about an AWS Panorama package

See https://docs.aws.amazon.com/panorama/latest/api/API_DescribePackageImportJob.html

#### Defined in

actions/panorama.ts:107

___

### DescribePackageVersion

• **DescribePackageVersion** = ``"panorama:DescribePackageVersion"``

Grants permission to view details about an AWS Panorama package version

See https://docs.aws.amazon.com/panorama/latest/api/API_DescribePackageVersion.html

#### Defined in

actions/panorama.ts:113

___

### DescribeSoftware

• **DescribeSoftware** = ``"panorama:DescribeSoftware"``

Grants permission to view details about a software version for the AWS Panorama
Appliance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html

#### Defined in

actions/panorama.ts:120

___

### GetWebSocketURL

• **GetWebSocketURL** = ``"panorama:GetWebSocketURL"``

Grants permission to generate a WebSocket endpoint for communication with AWS P
anorama

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html

#### Defined in

actions/panorama.ts:127

___

### ListApplicationInstanceDependencies

• **ListApplicationInstanceDependencies** = ``"panorama:ListApplicationInstanceDependencies"``

Grants permission to retrieve a list of application instance dependencies in AW
S Panorama

See https://docs.aws.amazon.com/panorama/latest/api/API_ListApplicationInstanceDependencies.html

#### Defined in

actions/panorama.ts:134

___

### ListApplicationInstanceNodeInstances

• **ListApplicationInstanceNodeInstances** = ``"panorama:ListApplicationInstanceNodeInstances"``

Grants permission to retrieve a list of node instances of application instances
in AWS Panorama

See https://docs.aws.amazon.com/panorama/latest/api/API_ListApplicationInstanceNodeInstances.html

#### Defined in

actions/panorama.ts:141

___

### ListApplicationInstances

• **ListApplicationInstances** = ``"panorama:ListApplicationInstances"``

Grants permission to retrieve a list of application instances in AWS Panorama

See https://docs.aws.amazon.com/panorama/latest/api/API_ListApplicationInstances.html

#### Defined in

actions/panorama.ts:147

___

### ListDevices

• **ListDevices** = ``"panorama:ListDevices"``

Grants permission to retrieve a list of appliances in AWS Panorama

See https://docs.aws.amazon.com/panorama/latest/api/API_ListDevices.html

#### Defined in

actions/panorama.ts:153

___

### ListDevicesJobs

• **ListDevicesJobs** = ``"panorama:ListDevicesJobs"``

Grants permission to retrieve a list of jobs for an AWS Panorama Appliance

See https://docs.aws.amazon.com/panorama/latest/api/API_ListDevicesJobs.html

#### Defined in

actions/panorama.ts:159

___

### ListNodeFromTemplateJobs

• **ListNodeFromTemplateJobs** = ``"panorama:ListNodeFromTemplateJobs"``

Grants permission to retrieve a list of Nodes for an AWS Panorama Appliance

See https://docs.aws.amazon.com/panorama/latest/api/API_ListNodeFromTemplateJobs.html

#### Defined in

actions/panorama.ts:165

___

### ListNodes

• **ListNodes** = ``"panorama:ListNodes"``

Grants permission to retrieve a list of nodes in AWS Panorama

See https://docs.aws.amazon.com/panorama/latest/api/API_ListNodes.html

#### Defined in

actions/panorama.ts:171

___

### ListPackageImportJobs

• **ListPackageImportJobs** = ``"panorama:ListPackageImportJobs"``

Grants permission to retrieve a list of packages in AWS Panorama

See https://docs.aws.amazon.com/panorama/latest/api/API_ListPackageImportJobs.html

#### Defined in

actions/panorama.ts:177

___

### ListPackages

• **ListPackages** = ``"panorama:ListPackages"``

Grants permission to retrieve a list of packages in AWS Panorama

See https://docs.aws.amazon.com/panorama/latest/api/API_ListPackages.html

#### Defined in

actions/panorama.ts:183

___

### ListTagsForResource

• **ListTagsForResource** = ``"panorama:ListTagsForResource"``

Grants permission to retrieve a list of tags for a resource in AWS Panorama

See https://docs.aws.amazon.com/panorama/latest/api/API_ListTagsForResource.html

#### Defined in

actions/panorama.ts:189

___

### ProvisionDevice

• **ProvisionDevice** = ``"panorama:ProvisionDevice"``

Grants permission to register an AWS Panorama Appliance

See https://docs.aws.amazon.com/panorama/latest/api/API_ProvisionDevice.html

#### Defined in

actions/panorama.ts:195

___

### RegisterPackageVersion

• **RegisterPackageVersion** = ``"panorama:RegisterPackageVersion"``

Grants permission to register an AWS Panorama package version

See https://docs.aws.amazon.com/panorama/latest/api/API_RegisterPackageVersion.html

#### Defined in

actions/panorama.ts:201

___

### RemoveApplicationInstance

• **RemoveApplicationInstance** = ``"panorama:RemoveApplicationInstance"``

Grants permission to remove an AWS Panorama application instance

See https://docs.aws.amazon.com/panorama/latest/api/API_RemoveApplicationInstance.html

#### Defined in

actions/panorama.ts:207

___

### SignalApplicationInstanceNodeInstances

• **SignalApplicationInstanceNodeInstances** = ``"panorama:SignalApplicationInstanceNodeInstances"``

Grants permission to signal camera nodes in an application instance to pause or
resume

See https://docs.aws.amazon.com/panorama/latest/api/API_SignalApplicationInstanceNodeInstances.html

#### Defined in

actions/panorama.ts:214

___

### TagResource

• **TagResource** = ``"panorama:TagResource"``

Grants permission to add tags to a resource in AWS Panorama

See https://docs.aws.amazon.com/panorama/latest/api/API_TagResource.html

#### Defined in

actions/panorama.ts:220

___

### UntagResource

• **UntagResource** = ``"panorama:UntagResource"``

Grants permission to remove tags from a resource in AWS Panorama

See https://docs.aws.amazon.com/panorama/latest/api/API_UntagResource.html

#### Defined in

actions/panorama.ts:226

___

### UpdateDeviceMetadata

• **UpdateDeviceMetadata** = ``"panorama:UpdateDeviceMetadata"``

Grants permission to modify basic settings for an AWS Panorama Appliance

See https://docs.aws.amazon.com/panorama/latest/api/API_UpdateDeviceMetadata.html

#### Defined in

actions/panorama.ts:232
