[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsProtonActions

# Enumeration: AwsProtonActions

All IAM policy actions for AWS Proton (PROTON)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsproton.html

2024-02-12T09:58:44.421Z

## Table of contents

### Enumeration Members

- [AcceptEnvironmentAccountConnection](AwsProtonActions.md#acceptenvironmentaccountconnection)
- [CancelComponentDeployment](AwsProtonActions.md#cancelcomponentdeployment)
- [CancelEnvironmentDeployment](AwsProtonActions.md#cancelenvironmentdeployment)
- [CancelServiceInstanceDeployment](AwsProtonActions.md#cancelserviceinstancedeployment)
- [CancelServicePipelineDeployment](AwsProtonActions.md#cancelservicepipelinedeployment)
- [CreateComponent](AwsProtonActions.md#createcomponent)
- [CreateEnvironment](AwsProtonActions.md#createenvironment)
- [CreateEnvironmentAccountConnection](AwsProtonActions.md#createenvironmentaccountconnection)
- [CreateEnvironmentTemplate](AwsProtonActions.md#createenvironmenttemplate)
- [CreateEnvironmentTemplateMajorVersion](AwsProtonActions.md#createenvironmenttemplatemajorversion)
- [CreateEnvironmentTemplateMinorVersion](AwsProtonActions.md#createenvironmenttemplateminorversion)
- [CreateEnvironmentTemplateVersion](AwsProtonActions.md#createenvironmenttemplateversion)
- [CreateRepository](AwsProtonActions.md#createrepository)
- [CreateService](AwsProtonActions.md#createservice)
- [CreateServiceInstance](AwsProtonActions.md#createserviceinstance)
- [CreateServiceSyncConfig](AwsProtonActions.md#createservicesyncconfig)
- [CreateServiceTemplate](AwsProtonActions.md#createservicetemplate)
- [CreateServiceTemplateMajorVersion](AwsProtonActions.md#createservicetemplatemajorversion)
- [CreateServiceTemplateMinorVersion](AwsProtonActions.md#createservicetemplateminorversion)
- [CreateServiceTemplateVersion](AwsProtonActions.md#createservicetemplateversion)
- [CreateTemplateSyncConfig](AwsProtonActions.md#createtemplatesyncconfig)
- [DeleteAccountRoles](AwsProtonActions.md#deleteaccountroles)
- [DeleteComponent](AwsProtonActions.md#deletecomponent)
- [DeleteDeployment](AwsProtonActions.md#deletedeployment)
- [DeleteEnvironment](AwsProtonActions.md#deleteenvironment)
- [DeleteEnvironmentAccountConnection](AwsProtonActions.md#deleteenvironmentaccountconnection)
- [DeleteEnvironmentTemplate](AwsProtonActions.md#deleteenvironmenttemplate)
- [DeleteEnvironmentTemplateMajorVersion](AwsProtonActions.md#deleteenvironmenttemplatemajorversion)
- [DeleteEnvironmentTemplateMinorVersion](AwsProtonActions.md#deleteenvironmenttemplateminorversion)
- [DeleteEnvironmentTemplateVersion](AwsProtonActions.md#deleteenvironmenttemplateversion)
- [DeleteRepository](AwsProtonActions.md#deleterepository)
- [DeleteService](AwsProtonActions.md#deleteservice)
- [DeleteServiceSyncConfig](AwsProtonActions.md#deleteservicesyncconfig)
- [DeleteServiceTemplate](AwsProtonActions.md#deleteservicetemplate)
- [DeleteServiceTemplateMajorVersion](AwsProtonActions.md#deleteservicetemplatemajorversion)
- [DeleteServiceTemplateMinorVersion](AwsProtonActions.md#deleteservicetemplateminorversion)
- [DeleteServiceTemplateVersion](AwsProtonActions.md#deleteservicetemplateversion)
- [DeleteTemplateSyncConfig](AwsProtonActions.md#deletetemplatesyncconfig)
- [GetAccountRoles](AwsProtonActions.md#getaccountroles)
- [GetAccountSettings](AwsProtonActions.md#getaccountsettings)
- [GetComponent](AwsProtonActions.md#getcomponent)
- [GetDeployment](AwsProtonActions.md#getdeployment)
- [GetEnvironment](AwsProtonActions.md#getenvironment)
- [GetEnvironmentAccountConnection](AwsProtonActions.md#getenvironmentaccountconnection)
- [GetEnvironmentTemplate](AwsProtonActions.md#getenvironmenttemplate)
- [GetEnvironmentTemplateMajorVersion](AwsProtonActions.md#getenvironmenttemplatemajorversion)
- [GetEnvironmentTemplateMinorVersion](AwsProtonActions.md#getenvironmenttemplateminorversion)
- [GetEnvironmentTemplateVersion](AwsProtonActions.md#getenvironmenttemplateversion)
- [GetRepository](AwsProtonActions.md#getrepository)
- [GetRepositorySyncStatus](AwsProtonActions.md#getrepositorysyncstatus)
- [GetResourceTemplateVersionStatusCounts](AwsProtonActions.md#getresourcetemplateversionstatuscounts)
- [GetResourcesSummary](AwsProtonActions.md#getresourcessummary)
- [GetService](AwsProtonActions.md#getservice)
- [GetServiceInstance](AwsProtonActions.md#getserviceinstance)
- [GetServiceInstanceSyncStatus](AwsProtonActions.md#getserviceinstancesyncstatus)
- [GetServiceSyncBlockerSummary](AwsProtonActions.md#getservicesyncblockersummary)
- [GetServiceSyncConfig](AwsProtonActions.md#getservicesyncconfig)
- [GetServiceTemplate](AwsProtonActions.md#getservicetemplate)
- [GetServiceTemplateMajorVersion](AwsProtonActions.md#getservicetemplatemajorversion)
- [GetServiceTemplateMinorVersion](AwsProtonActions.md#getservicetemplateminorversion)
- [GetServiceTemplateVersion](AwsProtonActions.md#getservicetemplateversion)
- [GetTemplateSyncConfig](AwsProtonActions.md#gettemplatesyncconfig)
- [GetTemplateSyncStatus](AwsProtonActions.md#gettemplatesyncstatus)
- [ListComponentOutputs](AwsProtonActions.md#listcomponentoutputs)
- [ListComponentProvisionedResources](AwsProtonActions.md#listcomponentprovisionedresources)
- [ListComponents](AwsProtonActions.md#listcomponents)
- [ListDeployments](AwsProtonActions.md#listdeployments)
- [ListEnvironmentAccountConnections](AwsProtonActions.md#listenvironmentaccountconnections)
- [ListEnvironmentOutputs](AwsProtonActions.md#listenvironmentoutputs)
- [ListEnvironmentProvisionedResources](AwsProtonActions.md#listenvironmentprovisionedresources)
- [ListEnvironmentTemplateMajorVersions](AwsProtonActions.md#listenvironmenttemplatemajorversions)
- [ListEnvironmentTemplateMinorVersions](AwsProtonActions.md#listenvironmenttemplateminorversions)
- [ListEnvironmentTemplateVersions](AwsProtonActions.md#listenvironmenttemplateversions)
- [ListEnvironmentTemplates](AwsProtonActions.md#listenvironmenttemplates)
- [ListEnvironments](AwsProtonActions.md#listenvironments)
- [ListRepositories](AwsProtonActions.md#listrepositories)
- [ListRepositorySyncDefinitions](AwsProtonActions.md#listrepositorysyncdefinitions)
- [ListServiceInstanceOutputs](AwsProtonActions.md#listserviceinstanceoutputs)
- [ListServiceInstanceProvisionedResources](AwsProtonActions.md#listserviceinstanceprovisionedresources)
- [ListServiceInstances](AwsProtonActions.md#listserviceinstances)
- [ListServicePipelineOutputs](AwsProtonActions.md#listservicepipelineoutputs)
- [ListServicePipelineProvisionedResources](AwsProtonActions.md#listservicepipelineprovisionedresources)
- [ListServiceTemplateMajorVersions](AwsProtonActions.md#listservicetemplatemajorversions)
- [ListServiceTemplateMinorVersions](AwsProtonActions.md#listservicetemplateminorversions)
- [ListServiceTemplateVersions](AwsProtonActions.md#listservicetemplateversions)
- [ListServiceTemplates](AwsProtonActions.md#listservicetemplates)
- [ListServices](AwsProtonActions.md#listservices)
- [ListTagsForResource](AwsProtonActions.md#listtagsforresource)
- [NotifyResourceDeploymentStatusChange](AwsProtonActions.md#notifyresourcedeploymentstatuschange)
- [RejectEnvironmentAccountConnection](AwsProtonActions.md#rejectenvironmentaccountconnection)
- [TagResource](AwsProtonActions.md#tagresource)
- [UntagResource](AwsProtonActions.md#untagresource)
- [UpdateAccountRoles](AwsProtonActions.md#updateaccountroles)
- [UpdateAccountSettings](AwsProtonActions.md#updateaccountsettings)
- [UpdateComponent](AwsProtonActions.md#updatecomponent)
- [UpdateEnvironment](AwsProtonActions.md#updateenvironment)
- [UpdateEnvironmentAccountConnection](AwsProtonActions.md#updateenvironmentaccountconnection)
- [UpdateEnvironmentTemplate](AwsProtonActions.md#updateenvironmenttemplate)
- [UpdateEnvironmentTemplateMajorVersion](AwsProtonActions.md#updateenvironmenttemplatemajorversion)
- [UpdateEnvironmentTemplateMinorVersion](AwsProtonActions.md#updateenvironmenttemplateminorversion)
- [UpdateEnvironmentTemplateVersion](AwsProtonActions.md#updateenvironmenttemplateversion)
- [UpdateService](AwsProtonActions.md#updateservice)
- [UpdateServiceInstance](AwsProtonActions.md#updateserviceinstance)
- [UpdateServicePipeline](AwsProtonActions.md#updateservicepipeline)
- [UpdateServiceSyncBlocker](AwsProtonActions.md#updateservicesyncblocker)
- [UpdateServiceSyncConfig](AwsProtonActions.md#updateservicesyncconfig)
- [UpdateServiceTemplate](AwsProtonActions.md#updateservicetemplate)
- [UpdateServiceTemplateMajorVersion](AwsProtonActions.md#updateservicetemplatemajorversion)
- [UpdateServiceTemplateMinorVersion](AwsProtonActions.md#updateservicetemplateminorversion)
- [UpdateServiceTemplateVersion](AwsProtonActions.md#updateservicetemplateversion)
- [UpdateTemplateSyncConfig](AwsProtonActions.md#updatetemplatesyncconfig)

## Enumeration Members

### AcceptEnvironmentAccountConnection

• **AcceptEnvironmentAccountConnection** = ``"proton:AcceptEnvironmentAccountConnection"``

Grants permission to reject an environment account connection request from anot
her environment account

See https://docs.aws.amazon.com/proton/latest/APIReference/API_AcceptEnvironmentAccountConnection.html

#### Defined in

actions/proton.ts:18

___

### CancelComponentDeployment

• **CancelComponentDeployment** = ``"proton:CancelComponentDeployment"``

Grants permission to cancel component deployment

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelComponentDeployment.html

#### Defined in

actions/proton.ts:24

___

### CancelEnvironmentDeployment

• **CancelEnvironmentDeployment** = ``"proton:CancelEnvironmentDeployment"``

Grants permission to cancel an environment deployment

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelEnvironmentDeployment.html

#### Defined in

actions/proton.ts:30

___

### CancelServiceInstanceDeployment

• **CancelServiceInstanceDeployment** = ``"proton:CancelServiceInstanceDeployment"``

Grants permission to cancel a service instance deployment

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelServiceInstanceDeployment.html

#### Defined in

actions/proton.ts:36

___

### CancelServicePipelineDeployment

• **CancelServicePipelineDeployment** = ``"proton:CancelServicePipelineDeployment"``

Grants permission to cancel a service pipeline deployment

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelServicePipelineDeployment.html

#### Defined in

actions/proton.ts:42

___

### CreateComponent

• **CreateComponent** = ``"proton:CreateComponent"``

Grants permission to create component

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateComponent.html

#### Defined in

actions/proton.ts:48

___

### CreateEnvironment

• **CreateEnvironment** = ``"proton:CreateEnvironment"``

Grants permission to create an environment

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironment.html

#### Defined in

actions/proton.ts:54

___

### CreateEnvironmentAccountConnection

• **CreateEnvironmentAccountConnection** = ``"proton:CreateEnvironmentAccountConnection"``

Grants permission to create an environment account connection

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentAccountConnection.html

#### Defined in

actions/proton.ts:60

___

### CreateEnvironmentTemplate

• **CreateEnvironmentTemplate** = ``"proton:CreateEnvironmentTemplate"``

Grants permission to create an environment template

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplate.html

#### Defined in

actions/proton.ts:66

___

### CreateEnvironmentTemplateMajorVersion

• **CreateEnvironmentTemplateMajorVersion** = ``"proton:CreateEnvironmentTemplateMajorVersion"``

Grants permission to create an environment template major version.  DEPRECATED
- use CreateEnvironmentTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateMajorVersion.html

#### Defined in

actions/proton.ts:73

___

### CreateEnvironmentTemplateMinorVersion

• **CreateEnvironmentTemplateMinorVersion** = ``"proton:CreateEnvironmentTemplateMinorVersion"``

Grants permission to create an environment template minor version.  DEPRECATED
- use CreateEnvironmentTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateMinorVersion.html

#### Defined in

actions/proton.ts:80

___

### CreateEnvironmentTemplateVersion

• **CreateEnvironmentTemplateVersion** = ``"proton:CreateEnvironmentTemplateVersion"``

Grants permission to create an environment template version

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateVersion.html

#### Defined in

actions/proton.ts:86

___

### CreateRepository

• **CreateRepository** = ``"proton:CreateRepository"``

Grants permission to create a repository

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateRepository.html

#### Defined in

actions/proton.ts:92

___

### CreateService

• **CreateService** = ``"proton:CreateService"``

Grants permission to create a service

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateService.html

#### Defined in

actions/proton.ts:98

___

### CreateServiceInstance

• **CreateServiceInstance** = ``"proton:CreateServiceInstance"``

Grants permission to create a service instance

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceInstance.html

#### Defined in

actions/proton.ts:104

___

### CreateServiceSyncConfig

• **CreateServiceSyncConfig** = ``"proton:CreateServiceSyncConfig"``

Grants permission to create a service sync config

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceSyncConfig.html

#### Defined in

actions/proton.ts:110

___

### CreateServiceTemplate

• **CreateServiceTemplate** = ``"proton:CreateServiceTemplate"``

Grants permission to create a service template

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplate.html

#### Defined in

actions/proton.ts:116

___

### CreateServiceTemplateMajorVersion

• **CreateServiceTemplateMajorVersion** = ``"proton:CreateServiceTemplateMajorVersion"``

Grants permission to create a service template major version.  DEPRECATED - use
CreateServiceTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateMajorVersion.html

#### Defined in

actions/proton.ts:123

___

### CreateServiceTemplateMinorVersion

• **CreateServiceTemplateMinorVersion** = ``"proton:CreateServiceTemplateMinorVersion"``

Grants permission to create a service template minor version.  DEPRECATED - use
CreateServiceTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateMinorVersion.html

#### Defined in

actions/proton.ts:130

___

### CreateServiceTemplateVersion

• **CreateServiceTemplateVersion** = ``"proton:CreateServiceTemplateVersion"``

Grants permission to create a service template version

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateVersion.html

#### Defined in

actions/proton.ts:136

___

### CreateTemplateSyncConfig

• **CreateTemplateSyncConfig** = ``"proton:CreateTemplateSyncConfig"``

Grants permission to create a template sync config

See https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateTemplateSyncConfig.html

#### Defined in

actions/proton.ts:142

___

### DeleteAccountRoles

• **DeleteAccountRoles** = ``"proton:DeleteAccountRoles"``

Grants permission to delete account roles.  DEPRECATED - use UpdateAccountSetti
ngs instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteAccountRoles.html

#### Defined in

actions/proton.ts:149

___

### DeleteComponent

• **DeleteComponent** = ``"proton:DeleteComponent"``

Grants permission to delete component

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteComponent.html

#### Defined in

actions/proton.ts:155

___

### DeleteDeployment

• **DeleteDeployment** = ``"proton:DeleteDeployment"``

Grants permission to delete a deployment

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteDeployment.html

#### Defined in

actions/proton.ts:161

___

### DeleteEnvironment

• **DeleteEnvironment** = ``"proton:DeleteEnvironment"``

Grants permission to delete an environment

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironment.html

#### Defined in

actions/proton.ts:167

___

### DeleteEnvironmentAccountConnection

• **DeleteEnvironmentAccountConnection** = ``"proton:DeleteEnvironmentAccountConnection"``

Grants permission to delete an environment account connection

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentAccountConnection.html

#### Defined in

actions/proton.ts:173

___

### DeleteEnvironmentTemplate

• **DeleteEnvironmentTemplate** = ``"proton:DeleteEnvironmentTemplate"``

Grants permission to delete an environment template

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplate.html

#### Defined in

actions/proton.ts:179

___

### DeleteEnvironmentTemplateMajorVersion

• **DeleteEnvironmentTemplateMajorVersion** = ``"proton:DeleteEnvironmentTemplateMajorVersion"``

Grants permission to delete an environment template major version.  DEPRECATED
- use DeleteEnvironmentTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMajorVersion.html

#### Defined in

actions/proton.ts:186

___

### DeleteEnvironmentTemplateMinorVersion

• **DeleteEnvironmentTemplateMinorVersion** = ``"proton:DeleteEnvironmentTemplateMinorVersion"``

Grants permission to delete an environment template minor version.  DEPRECATED
- use DeleteEnvironmentTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMinorVersion.html

#### Defined in

actions/proton.ts:193

___

### DeleteEnvironmentTemplateVersion

• **DeleteEnvironmentTemplateVersion** = ``"proton:DeleteEnvironmentTemplateVersion"``

Grants permission to delete an environment template version

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateVersion.html

#### Defined in

actions/proton.ts:199

___

### DeleteRepository

• **DeleteRepository** = ``"proton:DeleteRepository"``

Grants permission to delete a repository

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteRepository.html

#### Defined in

actions/proton.ts:205

___

### DeleteService

• **DeleteService** = ``"proton:DeleteService"``

Grants permission to delete a service

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteService.html

#### Defined in

actions/proton.ts:211

___

### DeleteServiceSyncConfig

• **DeleteServiceSyncConfig** = ``"proton:DeleteServiceSyncConfig"``

Grants permission to delete a service sync config

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceSyncConfig.html

#### Defined in

actions/proton.ts:217

___

### DeleteServiceTemplate

• **DeleteServiceTemplate** = ``"proton:DeleteServiceTemplate"``

Grants permission to delete a service template

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplate.html

#### Defined in

actions/proton.ts:223

___

### DeleteServiceTemplateMajorVersion

• **DeleteServiceTemplateMajorVersion** = ``"proton:DeleteServiceTemplateMajorVersion"``

Grants permission to delete a service template major version.  DEPRECATED - use
DeleteServiceTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMajorVersion.html

#### Defined in

actions/proton.ts:230

___

### DeleteServiceTemplateMinorVersion

• **DeleteServiceTemplateMinorVersion** = ``"proton:DeleteServiceTemplateMinorVersion"``

Grants permission to delete a service template minor version.  DEPRECATED - use
DeleteServiceTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMinorVersion.html

#### Defined in

actions/proton.ts:237

___

### DeleteServiceTemplateVersion

• **DeleteServiceTemplateVersion** = ``"proton:DeleteServiceTemplateVersion"``

Grants permission to delete a service template version

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateVersion.html

#### Defined in

actions/proton.ts:243

___

### DeleteTemplateSyncConfig

• **DeleteTemplateSyncConfig** = ``"proton:DeleteTemplateSyncConfig"``

Grants permission to delete a TemplateSyncConfig

See https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteTemplateSyncConfig.html

#### Defined in

actions/proton.ts:249

___

### GetAccountRoles

• **GetAccountRoles** = ``"proton:GetAccountRoles"``

Grants permission to get account roles.  DEPRECATED - use GetAccountSettings in
stead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetAccountRoles.html

#### Defined in

actions/proton.ts:256

___

### GetAccountSettings

• **GetAccountSettings** = ``"proton:GetAccountSettings"``

Grants permission to describe the account settings

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetAccountSettings.html

#### Defined in

actions/proton.ts:262

___

### GetComponent

• **GetComponent** = ``"proton:GetComponent"``

Grants permission to describe a component

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetComponent.html

#### Defined in

actions/proton.ts:268

___

### GetDeployment

• **GetDeployment** = ``"proton:GetDeployment"``

Grants permission to describe a deployment

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetDeployment.html

#### Defined in

actions/proton.ts:274

___

### GetEnvironment

• **GetEnvironment** = ``"proton:GetEnvironment"``

Grants permission to describe an environment

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironment.html

#### Defined in

actions/proton.ts:280

___

### GetEnvironmentAccountConnection

• **GetEnvironmentAccountConnection** = ``"proton:GetEnvironmentAccountConnection"``

Grants permission to describe an environment account connection

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentAccountConnection.html

#### Defined in

actions/proton.ts:286

___

### GetEnvironmentTemplate

• **GetEnvironmentTemplate** = ``"proton:GetEnvironmentTemplate"``

Grants permission to describe an environment template

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplate.html

#### Defined in

actions/proton.ts:292

___

### GetEnvironmentTemplateMajorVersion

• **GetEnvironmentTemplateMajorVersion** = ``"proton:GetEnvironmentTemplateMajorVersion"``

Grants permission to get an environment template major version.  DEPRECATED - u
se GetEnvironmentTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMajorVersion.html

#### Defined in

actions/proton.ts:299

___

### GetEnvironmentTemplateMinorVersion

• **GetEnvironmentTemplateMinorVersion** = ``"proton:GetEnvironmentTemplateMinorVersion"``

Grants permission to get an environment template minor version.  DEPRECATED - u
se GetEnvironmentTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMinorVersion.html

#### Defined in

actions/proton.ts:306

___

### GetEnvironmentTemplateVersion

• **GetEnvironmentTemplateVersion** = ``"proton:GetEnvironmentTemplateVersion"``

Grants permission to describe an environment template version

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateVersion.html

#### Defined in

actions/proton.ts:312

___

### GetRepository

• **GetRepository** = ``"proton:GetRepository"``

Grants permission to describe a repository

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetRepository.html

#### Defined in

actions/proton.ts:318

___

### GetRepositorySyncStatus

• **GetRepositorySyncStatus** = ``"proton:GetRepositorySyncStatus"``

Grants permission to get the latest sync status for a repository

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetRepositorySyncStatus.html

#### Defined in

actions/proton.ts:324

___

### GetResourceTemplateVersionStatusCounts

• **GetResourceTemplateVersionStatusCounts** = ``"proton:GetResourceTemplateVersionStatusCounts"``

Grants permission to list resource template version status counts

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetResourceTemplateVersionStatusCounts.html

#### Defined in

actions/proton.ts:330

___

### GetResourcesSummary

• **GetResourcesSummary** = ``"proton:GetResourcesSummary"``

Grants permission to get resources summary

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetResourcesSummary.html

#### Defined in

actions/proton.ts:336

___

### GetService

• **GetService** = ``"proton:GetService"``

Grants permission to describe a service

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetService.html

#### Defined in

actions/proton.ts:342

___

### GetServiceInstance

• **GetServiceInstance** = ``"proton:GetServiceInstance"``

Grants permission to describe a service instance

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceInstance.html

#### Defined in

actions/proton.ts:348

___

### GetServiceInstanceSyncStatus

• **GetServiceInstanceSyncStatus** = ``"proton:GetServiceInstanceSyncStatus"``

Grants permission to describe the sync status of a service instance

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceInstanceSyncStatus.html

#### Defined in

actions/proton.ts:354

___

### GetServiceSyncBlockerSummary

• **GetServiceSyncBlockerSummary** = ``"proton:GetServiceSyncBlockerSummary"``

Grants permission to describe service sync blockers on a service or service ins
tance

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceSyncBlockerSummary.html

#### Defined in

actions/proton.ts:361

___

### GetServiceSyncConfig

• **GetServiceSyncConfig** = ``"proton:GetServiceSyncConfig"``

Grants permission to describe a service sync config

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceSyncConfig.html

#### Defined in

actions/proton.ts:367

___

### GetServiceTemplate

• **GetServiceTemplate** = ``"proton:GetServiceTemplate"``

Grants permission to describe a service template

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplate.html

#### Defined in

actions/proton.ts:373

___

### GetServiceTemplateMajorVersion

• **GetServiceTemplateMajorVersion** = ``"proton:GetServiceTemplateMajorVersion"``

Grants permission to get a service template major version.  DEPRECATED - use Ge
tServiceTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMajorVersion.html

#### Defined in

actions/proton.ts:380

___

### GetServiceTemplateMinorVersion

• **GetServiceTemplateMinorVersion** = ``"proton:GetServiceTemplateMinorVersion"``

Grants permission to get a service template minor version.  DEPRECATED - use Ge
tServiceTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMinorVersion.html

#### Defined in

actions/proton.ts:387

___

### GetServiceTemplateVersion

• **GetServiceTemplateVersion** = ``"proton:GetServiceTemplateVersion"``

Grants permission to describe a service template version

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateVersion.html

#### Defined in

actions/proton.ts:393

___

### GetTemplateSyncConfig

• **GetTemplateSyncConfig** = ``"proton:GetTemplateSyncConfig"``

Grants permission to describe a TemplateSyncConfig

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetTemplateSyncConfig.html

#### Defined in

actions/proton.ts:399

___

### GetTemplateSyncStatus

• **GetTemplateSyncStatus** = ``"proton:GetTemplateSyncStatus"``

Grants permission to describe the sync status of a template

See https://docs.aws.amazon.com/proton/latest/APIReference/API_GetTemplateSyncStatus.html

#### Defined in

actions/proton.ts:405

___

### ListComponentOutputs

• **ListComponentOutputs** = ``"proton:ListComponentOutputs"``

Grants permission to list component outputs

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListComponentOutputs.html

#### Defined in

actions/proton.ts:411

___

### ListComponentProvisionedResources

• **ListComponentProvisionedResources** = ``"proton:ListComponentProvisionedResources"``

Grants permission to list component provisioned resources

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListComponentProvisionedResources.html

#### Defined in

actions/proton.ts:417

___

### ListComponents

• **ListComponents** = ``"proton:ListComponents"``

Grants permission to list components

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListComponents.html

#### Defined in

actions/proton.ts:423

___

### ListDeployments

• **ListDeployments** = ``"proton:ListDeployments"``

Grants permission to list deployments

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListDeployments.html

#### Defined in

actions/proton.ts:429

___

### ListEnvironmentAccountConnections

• **ListEnvironmentAccountConnections** = ``"proton:ListEnvironmentAccountConnections"``

Grants permission to list environment account connections

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentAccountConnections.html

#### Defined in

actions/proton.ts:435

___

### ListEnvironmentOutputs

• **ListEnvironmentOutputs** = ``"proton:ListEnvironmentOutputs"``

Grants permission to list environment outputs

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentOutputs.html

#### Defined in

actions/proton.ts:441

___

### ListEnvironmentProvisionedResources

• **ListEnvironmentProvisionedResources** = ``"proton:ListEnvironmentProvisionedResources"``

Grants permission to list environment provisioned resources

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentProvisionedResources.html

#### Defined in

actions/proton.ts:447

___

### ListEnvironmentTemplateMajorVersions

• **ListEnvironmentTemplateMajorVersions** = ``"proton:ListEnvironmentTemplateMajorVersions"``

Grants permission to list environment template major versions.  DEPRECATED - us
e ListEnvironmentTemplateVersions instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMajorVersions.html

#### Defined in

actions/proton.ts:454

___

### ListEnvironmentTemplateMinorVersions

• **ListEnvironmentTemplateMinorVersions** = ``"proton:ListEnvironmentTemplateMinorVersions"``

Grants permission to list an environment template minor versions.  DEPRECATED -
use ListEnvironmentTemplateVersions instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMinorVersions.html

#### Defined in

actions/proton.ts:461

___

### ListEnvironmentTemplateVersions

• **ListEnvironmentTemplateVersions** = ``"proton:ListEnvironmentTemplateVersions"``

Grants permission to list environment template versions

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateVersions.html

#### Defined in

actions/proton.ts:467

___

### ListEnvironmentTemplates

• **ListEnvironmentTemplates** = ``"proton:ListEnvironmentTemplates"``

Grants permission to list environment templates

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplates.html

#### Defined in

actions/proton.ts:473

___

### ListEnvironments

• **ListEnvironments** = ``"proton:ListEnvironments"``

Grants permission to list environments

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironments.html

#### Defined in

actions/proton.ts:479

___

### ListRepositories

• **ListRepositories** = ``"proton:ListRepositories"``

Grants permission to list repositories

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListRepositories.html

#### Defined in

actions/proton.ts:485

___

### ListRepositorySyncDefinitions

• **ListRepositorySyncDefinitions** = ``"proton:ListRepositorySyncDefinitions"``

Grants permission to list repository sync definitions

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListRepositorySyncDefinitions.html

#### Defined in

actions/proton.ts:491

___

### ListServiceInstanceOutputs

• **ListServiceInstanceOutputs** = ``"proton:ListServiceInstanceOutputs"``

Grants permission to list service instance outputs

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceInstanceOutputs.html

#### Defined in

actions/proton.ts:497

___

### ListServiceInstanceProvisionedResources

• **ListServiceInstanceProvisionedResources** = ``"proton:ListServiceInstanceProvisionedResources"``

Grants permission to list service instance provisioned resources

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceInstanceProvisionedResources.html

#### Defined in

actions/proton.ts:503

___

### ListServiceInstances

• **ListServiceInstances** = ``"proton:ListServiceInstances"``

Grants permission to list service instances

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceInstances.html

#### Defined in

actions/proton.ts:509

___

### ListServicePipelineOutputs

• **ListServicePipelineOutputs** = ``"proton:ListServicePipelineOutputs"``

Grants permission to list service pipeline outputs

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServicePipelineOutputs.html

#### Defined in

actions/proton.ts:515

___

### ListServicePipelineProvisionedResources

• **ListServicePipelineProvisionedResources** = ``"proton:ListServicePipelineProvisionedResources"``

Grants permission to list service pipeline provisioned resources

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServicePipelineProvisionedResources.html

#### Defined in

actions/proton.ts:521

___

### ListServiceTemplateMajorVersions

• **ListServiceTemplateMajorVersions** = ``"proton:ListServiceTemplateMajorVersions"``

Grants permission to list service template major versions.  DEPRECATED - use Li
stServiceTemplateVersions instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMajorVersions.html

#### Defined in

actions/proton.ts:528

___

### ListServiceTemplateMinorVersions

• **ListServiceTemplateMinorVersions** = ``"proton:ListServiceTemplateMinorVersions"``

Grants permission to list service template minor versions.  DEPRECATED - use Li
stServiceTemplateVersions instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMinorVersions.html

#### Defined in

actions/proton.ts:535

___

### ListServiceTemplateVersions

• **ListServiceTemplateVersions** = ``"proton:ListServiceTemplateVersions"``

Grants permission to list service template versions

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateVersions.html

#### Defined in

actions/proton.ts:541

___

### ListServiceTemplates

• **ListServiceTemplates** = ``"proton:ListServiceTemplates"``

Grants permission to list service templates

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplates.html

#### Defined in

actions/proton.ts:547

___

### ListServices

• **ListServices** = ``"proton:ListServices"``

Grants permission to list services

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServices.html

#### Defined in

actions/proton.ts:553

___

### ListTagsForResource

• **ListTagsForResource** = ``"proton:ListTagsForResource"``

Grants permission to list tags of a resource

See https://docs.aws.amazon.com/proton/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/proton.ts:559

___

### NotifyResourceDeploymentStatusChange

• **NotifyResourceDeploymentStatusChange** = ``"proton:NotifyResourceDeploymentStatusChange"``

Grants permission to notify Proton of resource deployment status changes

See https://docs.aws.amazon.com/proton/latest/APIReference/API_NotifyResourceDeploymentStatusChange.html

#### Defined in

actions/proton.ts:565

___

### RejectEnvironmentAccountConnection

• **RejectEnvironmentAccountConnection** = ``"proton:RejectEnvironmentAccountConnection"``

Grants permission to reject an environment account connection request from anot
her environment account

See https://docs.aws.amazon.com/proton/latest/APIReference/API_RejectEnvironmentAccountConnection.html

#### Defined in

actions/proton.ts:572

___

### TagResource

• **TagResource** = ``"proton:TagResource"``

Grants permission to add tags to a resource

See https://docs.aws.amazon.com/proton/latest/APIReference/API_TagResource.html

#### Defined in

actions/proton.ts:578

___

### UntagResource

• **UntagResource** = ``"proton:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UntagResource.html

#### Defined in

actions/proton.ts:584

___

### UpdateAccountRoles

• **UpdateAccountRoles** = ``"proton:UpdateAccountRoles"``

Grants permission to update account roles.  DEPRECATED - use UpdateAccountSetti
ngs instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateAccountRoles.html

#### Defined in

actions/proton.ts:591

___

### UpdateAccountSettings

• **UpdateAccountSettings** = ``"proton:UpdateAccountSettings"``

Grants permission to update the account settings

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateAccountSettings.html

#### Defined in

actions/proton.ts:597

___

### UpdateComponent

• **UpdateComponent** = ``"proton:UpdateComponent"``

Grants permission to update component

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateComponent.html

#### Defined in

actions/proton.ts:603

___

### UpdateEnvironment

• **UpdateEnvironment** = ``"proton:UpdateEnvironment"``

Grants permission to update an environment

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironment.html

#### Defined in

actions/proton.ts:609

___

### UpdateEnvironmentAccountConnection

• **UpdateEnvironmentAccountConnection** = ``"proton:UpdateEnvironmentAccountConnection"``

Grants permission to update an environment account connection

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentAccountConnection.html

#### Defined in

actions/proton.ts:615

___

### UpdateEnvironmentTemplate

• **UpdateEnvironmentTemplate** = ``"proton:UpdateEnvironmentTemplate"``

Grants permission to update an environment template

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplate.html

#### Defined in

actions/proton.ts:621

___

### UpdateEnvironmentTemplateMajorVersion

• **UpdateEnvironmentTemplateMajorVersion** = ``"proton:UpdateEnvironmentTemplateMajorVersion"``

Grants permission to update an environment template major version.  DEPRECATED
- use UpdateEnvironmentTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMajorVersion.html

#### Defined in

actions/proton.ts:628

___

### UpdateEnvironmentTemplateMinorVersion

• **UpdateEnvironmentTemplateMinorVersion** = ``"proton:UpdateEnvironmentTemplateMinorVersion"``

Grants permission to update an environment template minor version.  DEPRECATED
- use UpdateEnvironmentTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMinorVersion.html

#### Defined in

actions/proton.ts:635

___

### UpdateEnvironmentTemplateVersion

• **UpdateEnvironmentTemplateVersion** = ``"proton:UpdateEnvironmentTemplateVersion"``

Grants permission to update an environment template version

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateVersion.html

#### Defined in

actions/proton.ts:641

___

### UpdateService

• **UpdateService** = ``"proton:UpdateService"``

Grants permission to update a service

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateService.html

#### Defined in

actions/proton.ts:647

___

### UpdateServiceInstance

• **UpdateServiceInstance** = ``"proton:UpdateServiceInstance"``

Grants permission to update a service instance

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceInstance.html

#### Defined in

actions/proton.ts:653

___

### UpdateServicePipeline

• **UpdateServicePipeline** = ``"proton:UpdateServicePipeline"``

Grants permission to update a service pipeline

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServicePipeline.html

#### Defined in

actions/proton.ts:659

___

### UpdateServiceSyncBlocker

• **UpdateServiceSyncBlocker** = ``"proton:UpdateServiceSyncBlocker"``

Grants permission to update a service sync blocker

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceSyncBlocker.html

#### Defined in

actions/proton.ts:665

___

### UpdateServiceSyncConfig

• **UpdateServiceSyncConfig** = ``"proton:UpdateServiceSyncConfig"``

Grants permission to update a service sync config

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceSyncConfig.html

#### Defined in

actions/proton.ts:671

___

### UpdateServiceTemplate

• **UpdateServiceTemplate** = ``"proton:UpdateServiceTemplate"``

Grants permission to update a service template

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplate.html

#### Defined in

actions/proton.ts:677

___

### UpdateServiceTemplateMajorVersion

• **UpdateServiceTemplateMajorVersion** = ``"proton:UpdateServiceTemplateMajorVersion"``

Grants permission to update a service template major version.  DEPRECATED - use
UpdateServiceTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMajorVersion.html

#### Defined in

actions/proton.ts:684

___

### UpdateServiceTemplateMinorVersion

• **UpdateServiceTemplateMinorVersion** = ``"proton:UpdateServiceTemplateMinorVersion"``

Grants permission to create a service template minor version.  DEPRECATED - use
UpdateServiceTemplateVersion instead

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMinorVersion.html

#### Defined in

actions/proton.ts:691

___

### UpdateServiceTemplateVersion

• **UpdateServiceTemplateVersion** = ``"proton:UpdateServiceTemplateVersion"``

Grants permission to update a service template version

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateVersion.html

#### Defined in

actions/proton.ts:697

___

### UpdateTemplateSyncConfig

• **UpdateTemplateSyncConfig** = ``"proton:UpdateTemplateSyncConfig"``

Grants permission to update a TemplateSyncConfig

See https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateTemplateSyncConfig.html

#### Defined in

actions/proton.ts:703
