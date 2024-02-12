[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsElasticbeanstalkActions

# Enumeration: AwsElasticbeanstalkActions

All IAM policy actions for AWS Elastic Beanstalk (ELASTICBEANSTALK)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticbeanstalk.html

2024-02-12T09:57:06.140Z

## Table of contents

### Enumeration Members

- [AbortEnvironmentUpdate](AwsElasticbeanstalkActions.md#abortenvironmentupdate)
- [AddTags](AwsElasticbeanstalkActions.md#addtags)
- [ApplyEnvironmentManagedAction](AwsElasticbeanstalkActions.md#applyenvironmentmanagedaction)
- [AssociateEnvironmentOperationsRole](AwsElasticbeanstalkActions.md#associateenvironmentoperationsrole)
- [CheckDNSAvailability](AwsElasticbeanstalkActions.md#checkdnsavailability)
- [ComposeEnvironments](AwsElasticbeanstalkActions.md#composeenvironments)
- [CreateApplication](AwsElasticbeanstalkActions.md#createapplication)
- [CreateApplicationVersion](AwsElasticbeanstalkActions.md#createapplicationversion)
- [CreateConfigurationTemplate](AwsElasticbeanstalkActions.md#createconfigurationtemplate)
- [CreateEnvironment](AwsElasticbeanstalkActions.md#createenvironment)
- [CreatePlatformVersion](AwsElasticbeanstalkActions.md#createplatformversion)
- [CreateStorageLocation](AwsElasticbeanstalkActions.md#createstoragelocation)
- [DeleteApplication](AwsElasticbeanstalkActions.md#deleteapplication)
- [DeleteApplicationVersion](AwsElasticbeanstalkActions.md#deleteapplicationversion)
- [DeleteConfigurationTemplate](AwsElasticbeanstalkActions.md#deleteconfigurationtemplate)
- [DeleteEnvironmentConfiguration](AwsElasticbeanstalkActions.md#deleteenvironmentconfiguration)
- [DeletePlatformVersion](AwsElasticbeanstalkActions.md#deleteplatformversion)
- [DescribeAccountAttributes](AwsElasticbeanstalkActions.md#describeaccountattributes)
- [DescribeApplicationVersions](AwsElasticbeanstalkActions.md#describeapplicationversions)
- [DescribeApplications](AwsElasticbeanstalkActions.md#describeapplications)
- [DescribeConfigurationOptions](AwsElasticbeanstalkActions.md#describeconfigurationoptions)
- [DescribeConfigurationSettings](AwsElasticbeanstalkActions.md#describeconfigurationsettings)
- [DescribeEnvironmentHealth](AwsElasticbeanstalkActions.md#describeenvironmenthealth)
- [DescribeEnvironmentManagedActionHistory](AwsElasticbeanstalkActions.md#describeenvironmentmanagedactionhistory)
- [DescribeEnvironmentManagedActions](AwsElasticbeanstalkActions.md#describeenvironmentmanagedactions)
- [DescribeEnvironmentResources](AwsElasticbeanstalkActions.md#describeenvironmentresources)
- [DescribeEnvironments](AwsElasticbeanstalkActions.md#describeenvironments)
- [DescribeEvents](AwsElasticbeanstalkActions.md#describeevents)
- [DescribeInstancesHealth](AwsElasticbeanstalkActions.md#describeinstanceshealth)
- [DescribePlatformVersion](AwsElasticbeanstalkActions.md#describeplatformversion)
- [DisassociateEnvironmentOperationsRole](AwsElasticbeanstalkActions.md#disassociateenvironmentoperationsrole)
- [ListAvailableSolutionStacks](AwsElasticbeanstalkActions.md#listavailablesolutionstacks)
- [ListPlatformBranches](AwsElasticbeanstalkActions.md#listplatformbranches)
- [ListPlatformVersions](AwsElasticbeanstalkActions.md#listplatformversions)
- [ListTagsForResource](AwsElasticbeanstalkActions.md#listtagsforresource)
- [PutInstanceStatistics](AwsElasticbeanstalkActions.md#putinstancestatistics)
- [RebuildEnvironment](AwsElasticbeanstalkActions.md#rebuildenvironment)
- [RemoveTags](AwsElasticbeanstalkActions.md#removetags)
- [RequestEnvironmentInfo](AwsElasticbeanstalkActions.md#requestenvironmentinfo)
- [RestartAppServer](AwsElasticbeanstalkActions.md#restartappserver)
- [RetrieveEnvironmentInfo](AwsElasticbeanstalkActions.md#retrieveenvironmentinfo)
- [SwapEnvironmentCNAMEs](AwsElasticbeanstalkActions.md#swapenvironmentcnames)
- [TerminateEnvironment](AwsElasticbeanstalkActions.md#terminateenvironment)
- [UpdateApplication](AwsElasticbeanstalkActions.md#updateapplication)
- [UpdateApplicationResourceLifecycle](AwsElasticbeanstalkActions.md#updateapplicationresourcelifecycle)
- [UpdateApplicationVersion](AwsElasticbeanstalkActions.md#updateapplicationversion)
- [UpdateConfigurationTemplate](AwsElasticbeanstalkActions.md#updateconfigurationtemplate)
- [UpdateEnvironment](AwsElasticbeanstalkActions.md#updateenvironment)
- [UpdateTagsForResource](AwsElasticbeanstalkActions.md#updatetagsforresource)
- [ValidateConfigurationSettings](AwsElasticbeanstalkActions.md#validateconfigurationsettings)

## Enumeration Members

### AbortEnvironmentUpdate

• **AbortEnvironmentUpdate** = ``"elasticbeanstalk:AbortEnvironmentUpdate"``

Grants permission to cancel in-progress environment configuration update or app
lication version deployment

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_AbortEnvironmentUpdate.html

#### Defined in

actions/elasticbeanstalk.ts:18

___

### AddTags

• **AddTags** = ``"elasticbeanstalk:AddTags"``

Grants permission to add tags to an Elastic Beanstalk resource and to update ta
g values

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html

#### Defined in

actions/elasticbeanstalk.ts:25

___

### ApplyEnvironmentManagedAction

• **ApplyEnvironmentManagedAction** = ``"elasticbeanstalk:ApplyEnvironmentManagedAction"``

Grants permission to apply a scheduled managed action immediately

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ApplyEnvironmentManagedAction.html

#### Defined in

actions/elasticbeanstalk.ts:31

___

### AssociateEnvironmentOperationsRole

• **AssociateEnvironmentOperationsRole** = ``"elasticbeanstalk:AssociateEnvironmentOperationsRole"``

Grants permission to associate an operations role with an environment

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_AssociateEnvironmentOperationsRole.html

#### Defined in

actions/elasticbeanstalk.ts:37

___

### CheckDNSAvailability

• **CheckDNSAvailability** = ``"elasticbeanstalk:CheckDNSAvailability"``

Grants permission to check CNAME availability

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CheckDNSAvailability.html

#### Defined in

actions/elasticbeanstalk.ts:43

___

### ComposeEnvironments

• **ComposeEnvironments** = ``"elasticbeanstalk:ComposeEnvironments"``

Grants permission to create or update a group of environments, each running a s
eparate component of a single application

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ComposeEnvironments.html

#### Defined in

actions/elasticbeanstalk.ts:50

___

### CreateApplication

• **CreateApplication** = ``"elasticbeanstalk:CreateApplication"``

Grants permission to create a new application

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateApplication.html

#### Defined in

actions/elasticbeanstalk.ts:56

___

### CreateApplicationVersion

• **CreateApplicationVersion** = ``"elasticbeanstalk:CreateApplicationVersion"``

Grants permission to create an application version for an application

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateApplicationVersion.html

#### Defined in

actions/elasticbeanstalk.ts:62

___

### CreateConfigurationTemplate

• **CreateConfigurationTemplate** = ``"elasticbeanstalk:CreateConfigurationTemplate"``

Grants permission to create a configuration template

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateConfigurationTemplate.html

#### Defined in

actions/elasticbeanstalk.ts:68

___

### CreateEnvironment

• **CreateEnvironment** = ``"elasticbeanstalk:CreateEnvironment"``

Grants permission to launch an environment for an application

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateEnvironment.html

#### Defined in

actions/elasticbeanstalk.ts:74

___

### CreatePlatformVersion

• **CreatePlatformVersion** = ``"elasticbeanstalk:CreatePlatformVersion"``

Grants permission to create a new version of a custom platform

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreatePlatformVersion.html

#### Defined in

actions/elasticbeanstalk.ts:80

___

### CreateStorageLocation

• **CreateStorageLocation** = ``"elasticbeanstalk:CreateStorageLocation"``

Grants permission to create the Amazon S3 storage location for the account

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateStorageLocation.html

#### Defined in

actions/elasticbeanstalk.ts:86

___

### DeleteApplication

• **DeleteApplication** = ``"elasticbeanstalk:DeleteApplication"``

Grants permission to delete an application along with all associated versions a
nd configurations

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteApplication.html

#### Defined in

actions/elasticbeanstalk.ts:93

___

### DeleteApplicationVersion

• **DeleteApplicationVersion** = ``"elasticbeanstalk:DeleteApplicationVersion"``

Grants permission to delete an application version from an application

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteApplicationVersion.html

#### Defined in

actions/elasticbeanstalk.ts:99

___

### DeleteConfigurationTemplate

• **DeleteConfigurationTemplate** = ``"elasticbeanstalk:DeleteConfigurationTemplate"``

Grants permission to delete a configuration template

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteConfigurationTemplate.html

#### Defined in

actions/elasticbeanstalk.ts:105

___

### DeleteEnvironmentConfiguration

• **DeleteEnvironmentConfiguration** = ``"elasticbeanstalk:DeleteEnvironmentConfiguration"``

Grants permission to delete the draft configuration associated with the running
environment

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteEnvironmentConfiguration.html

#### Defined in

actions/elasticbeanstalk.ts:112

___

### DeletePlatformVersion

• **DeletePlatformVersion** = ``"elasticbeanstalk:DeletePlatformVersion"``

Grants permission to delete a version of a custom platform

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeletePlatformVersion.html

#### Defined in

actions/elasticbeanstalk.ts:118

___

### DescribeAccountAttributes

• **DescribeAccountAttributes** = ``"elasticbeanstalk:DescribeAccountAttributes"``

Grants permission to retrieve a list of account attributes, including resource
quotas

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeAccountAttributes.html

#### Defined in

actions/elasticbeanstalk.ts:125

___

### DescribeApplicationVersions

• **DescribeApplicationVersions** = ``"elasticbeanstalk:DescribeApplicationVersions"``

Grants permission to retrieve a list of application versions stored in an AWS E
lastic Beanstalk storage bucket

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeApplicationVersions.html

#### Defined in

actions/elasticbeanstalk.ts:132

___

### DescribeApplications

• **DescribeApplications** = ``"elasticbeanstalk:DescribeApplications"``

Grants permission to retrieve the descriptions of existing applications

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeApplications.html

#### Defined in

actions/elasticbeanstalk.ts:138

___

### DescribeConfigurationOptions

• **DescribeConfigurationOptions** = ``"elasticbeanstalk:DescribeConfigurationOptions"``

Grants permission to retrieve descriptions of environment configuration options

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeConfigurationOptions.html

#### Defined in

actions/elasticbeanstalk.ts:144

___

### DescribeConfigurationSettings

• **DescribeConfigurationSettings** = ``"elasticbeanstalk:DescribeConfigurationSettings"``

Grants permission to retrieve a description of the settings for a configuration
set

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeConfigurationSettings.html

#### Defined in

actions/elasticbeanstalk.ts:151

___

### DescribeEnvironmentHealth

• **DescribeEnvironmentHealth** = ``"elasticbeanstalk:DescribeEnvironmentHealth"``

Grants permission to retrieve information about the overall health of an enviro
nment

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentHealth.html

#### Defined in

actions/elasticbeanstalk.ts:158

___

### DescribeEnvironmentManagedActionHistory

• **DescribeEnvironmentManagedActionHistory** = ``"elasticbeanstalk:DescribeEnvironmentManagedActionHistory"``

Grants permission to retrieve a list of an environment's completed and failed m
anaged actions

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentManagedActionHistory.html

#### Defined in

actions/elasticbeanstalk.ts:165

___

### DescribeEnvironmentManagedActions

• **DescribeEnvironmentManagedActions** = ``"elasticbeanstalk:DescribeEnvironmentManagedActions"``

Grants permission to retrieve a list of an environment's upcoming and in-progre
ss managed actions

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentManagedActions.html

#### Defined in

actions/elasticbeanstalk.ts:172

___

### DescribeEnvironmentResources

• **DescribeEnvironmentResources** = ``"elasticbeanstalk:DescribeEnvironmentResources"``

Grants permission to retrieve a list of AWS resources for an environment

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentResources.html

#### Defined in

actions/elasticbeanstalk.ts:178

___

### DescribeEnvironments

• **DescribeEnvironments** = ``"elasticbeanstalk:DescribeEnvironments"``

Grants permission to retrieve descriptions for existing environments

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironments.html

#### Defined in

actions/elasticbeanstalk.ts:184

___

### DescribeEvents

• **DescribeEvents** = ``"elasticbeanstalk:DescribeEvents"``

Grants permission to retrieve a list of event descriptions matching a set of cr
iteria

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEvents.html

#### Defined in

actions/elasticbeanstalk.ts:191

___

### DescribeInstancesHealth

• **DescribeInstancesHealth** = ``"elasticbeanstalk:DescribeInstancesHealth"``

Grants permission to retrieve more detailed information about the health of env
ironment instances

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeInstancesHealth.html

#### Defined in

actions/elasticbeanstalk.ts:198

___

### DescribePlatformVersion

• **DescribePlatformVersion** = ``"elasticbeanstalk:DescribePlatformVersion"``

Grants permission to retrieve a description of a managed platform version

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribePlatformVersion.html

#### Defined in

actions/elasticbeanstalk.ts:204

___

### DisassociateEnvironmentOperationsRole

• **DisassociateEnvironmentOperationsRole** = ``"elasticbeanstalk:DisassociateEnvironmentOperationsRole"``

Grants permission to disassociate an operations role with an environment

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DisassociateEnvironmentOperationsRole.html

#### Defined in

actions/elasticbeanstalk.ts:210

___

### ListAvailableSolutionStacks

• **ListAvailableSolutionStacks** = ``"elasticbeanstalk:ListAvailableSolutionStacks"``

Grants permission to retrieve a list of the available solution stack names

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html

#### Defined in

actions/elasticbeanstalk.ts:216

___

### ListPlatformBranches

• **ListPlatformBranches** = ``"elasticbeanstalk:ListPlatformBranches"``

Grants permission to retrieve a list of the available platform branches

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListPlatformBranches.html

#### Defined in

actions/elasticbeanstalk.ts:222

___

### ListPlatformVersions

• **ListPlatformVersions** = ``"elasticbeanstalk:ListPlatformVersions"``

Grants permission to retrieve a list of the available platforms

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListPlatformVersions.html

#### Defined in

actions/elasticbeanstalk.ts:228

___

### ListTagsForResource

• **ListTagsForResource** = ``"elasticbeanstalk:ListTagsForResource"``

Grants permission to retrieve a list of tags of an Elastic Beanstalk resource

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListTagsForResource.html

#### Defined in

actions/elasticbeanstalk.ts:234

___

### PutInstanceStatistics

• **PutInstanceStatistics** = ``"elasticbeanstalk:PutInstanceStatistics"``

Grants permission to submit instance statistics for enhanced health

See https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html#health-enhanced-authz

#### Defined in

actions/elasticbeanstalk.ts:240

___

### RebuildEnvironment

• **RebuildEnvironment** = ``"elasticbeanstalk:RebuildEnvironment"``

Grants permission to delete and recreate all of the AWS resources for an enviro
nment and to force a restart

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RebuildEnvironment.html

#### Defined in

actions/elasticbeanstalk.ts:247

___

### RemoveTags

• **RemoveTags** = ``"elasticbeanstalk:RemoveTags"``

Grants permission to remove tags from an Elastic Beanstalk resource

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html

#### Defined in

actions/elasticbeanstalk.ts:253

___

### RequestEnvironmentInfo

• **RequestEnvironmentInfo** = ``"elasticbeanstalk:RequestEnvironmentInfo"``

Grants permission to initiate a request to compile information of the deployed
environment

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RequestEnvironmentInfo.html

#### Defined in

actions/elasticbeanstalk.ts:260

___

### RestartAppServer

• **RestartAppServer** = ``"elasticbeanstalk:RestartAppServer"``

Grants permission to request an environment to restart the application containe
r server running on each Amazon EC2 instance

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RestartAppServer.html

#### Defined in

actions/elasticbeanstalk.ts:267

___

### RetrieveEnvironmentInfo

• **RetrieveEnvironmentInfo** = ``"elasticbeanstalk:RetrieveEnvironmentInfo"``

Grants permission to retrieve the compiled information from a RequestEnvironmen
tInfo request

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RetrieveEnvironmentInfo.html

#### Defined in

actions/elasticbeanstalk.ts:274

___

### SwapEnvironmentCNAMEs

• **SwapEnvironmentCNAMEs** = ``"elasticbeanstalk:SwapEnvironmentCNAMEs"``

Grants permission to swap the CNAMEs of two environments

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_SwapEnvironmentCNAMEs.html

#### Defined in

actions/elasticbeanstalk.ts:280

___

### TerminateEnvironment

• **TerminateEnvironment** = ``"elasticbeanstalk:TerminateEnvironment"``

Grants permission to terminate an environment

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_TerminateEnvironment.html

#### Defined in

actions/elasticbeanstalk.ts:286

___

### UpdateApplication

• **UpdateApplication** = ``"elasticbeanstalk:UpdateApplication"``

Grants permission to update an application with specified properties

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplication.html

#### Defined in

actions/elasticbeanstalk.ts:292

___

### UpdateApplicationResourceLifecycle

• **UpdateApplicationResourceLifecycle** = ``"elasticbeanstalk:UpdateApplicationResourceLifecycle"``

Grants permission to update the application version lifecycle policy associated
with the application

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplicationResourceLifecycle.html

#### Defined in

actions/elasticbeanstalk.ts:299

___

### UpdateApplicationVersion

• **UpdateApplicationVersion** = ``"elasticbeanstalk:UpdateApplicationVersion"``

Grants permission to update an application version with specified properties

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplicationVersion.html

#### Defined in

actions/elasticbeanstalk.ts:305

___

### UpdateConfigurationTemplate

• **UpdateConfigurationTemplate** = ``"elasticbeanstalk:UpdateConfigurationTemplate"``

Grants permission to update a configuration template with specified properties
or configuration option values

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateConfigurationTemplate.html

#### Defined in

actions/elasticbeanstalk.ts:312

___

### UpdateEnvironment

• **UpdateEnvironment** = ``"elasticbeanstalk:UpdateEnvironment"``

Grants permission to update an environment

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateEnvironment.html

#### Defined in

actions/elasticbeanstalk.ts:318

___

### UpdateTagsForResource

• **UpdateTagsForResource** = ``"elasticbeanstalk:UpdateTagsForResource"``

Grants permission to add tags to an Elastic Beanstalk resource, remove tags, an
d to update tag values

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html

#### Defined in

actions/elasticbeanstalk.ts:325

___

### ValidateConfigurationSettings

• **ValidateConfigurationSettings** = ``"elasticbeanstalk:ValidateConfigurationSettings"``

Grants permission to check the validity of a set of configuration settings for
a configuration template or an environment

See https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ValidateConfigurationSettings.html

#### Defined in

actions/elasticbeanstalk.ts:332
