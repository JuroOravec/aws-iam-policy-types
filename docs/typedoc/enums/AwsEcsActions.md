[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEcsActions

# Enumeration: AwsEcsActions

All IAM policy actions for Amazon Elastic Container Service (ECS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerservice.html

2024-02-12T09:57:08.294Z

## Table of contents

### Enumeration Members

- [CreateCapacityProvider](AwsEcsActions.md#createcapacityprovider)
- [CreateCluster](AwsEcsActions.md#createcluster)
- [CreateService](AwsEcsActions.md#createservice)
- [CreateTaskSet](AwsEcsActions.md#createtaskset)
- [DeleteAccountSetting](AwsEcsActions.md#deleteaccountsetting)
- [DeleteAttributes](AwsEcsActions.md#deleteattributes)
- [DeleteCapacityProvider](AwsEcsActions.md#deletecapacityprovider)
- [DeleteCluster](AwsEcsActions.md#deletecluster)
- [DeleteService](AwsEcsActions.md#deleteservice)
- [DeleteTaskDefinitions](AwsEcsActions.md#deletetaskdefinitions)
- [DeleteTaskSet](AwsEcsActions.md#deletetaskset)
- [DeregisterContainerInstance](AwsEcsActions.md#deregistercontainerinstance)
- [DeregisterTaskDefinition](AwsEcsActions.md#deregistertaskdefinition)
- [DescribeCapacityProviders](AwsEcsActions.md#describecapacityproviders)
- [DescribeClusters](AwsEcsActions.md#describeclusters)
- [DescribeContainerInstances](AwsEcsActions.md#describecontainerinstances)
- [DescribeServices](AwsEcsActions.md#describeservices)
- [DescribeTaskDefinition](AwsEcsActions.md#describetaskdefinition)
- [DescribeTaskSets](AwsEcsActions.md#describetasksets)
- [DescribeTasks](AwsEcsActions.md#describetasks)
- [DiscoverPollEndpoint](AwsEcsActions.md#discoverpollendpoint)
- [ExecuteCommand](AwsEcsActions.md#executecommand)
- [GetTaskProtection](AwsEcsActions.md#gettaskprotection)
- [ListAccountSettings](AwsEcsActions.md#listaccountsettings)
- [ListAttributes](AwsEcsActions.md#listattributes)
- [ListClusters](AwsEcsActions.md#listclusters)
- [ListContainerInstances](AwsEcsActions.md#listcontainerinstances)
- [ListServices](AwsEcsActions.md#listservices)
- [ListServicesByNamespace](AwsEcsActions.md#listservicesbynamespace)
- [ListTagsForResource](AwsEcsActions.md#listtagsforresource)
- [ListTaskDefinitionFamilies](AwsEcsActions.md#listtaskdefinitionfamilies)
- [ListTaskDefinitions](AwsEcsActions.md#listtaskdefinitions)
- [ListTasks](AwsEcsActions.md#listtasks)
- [Poll](AwsEcsActions.md#poll)
- [PutAccountSetting](AwsEcsActions.md#putaccountsetting)
- [PutAccountSettingDefault](AwsEcsActions.md#putaccountsettingdefault)
- [PutAttributes](AwsEcsActions.md#putattributes)
- [PutClusterCapacityProviders](AwsEcsActions.md#putclustercapacityproviders)
- [RegisterContainerInstance](AwsEcsActions.md#registercontainerinstance)
- [RegisterTaskDefinition](AwsEcsActions.md#registertaskdefinition)
- [RunTask](AwsEcsActions.md#runtask)
- [StartTask](AwsEcsActions.md#starttask)
- [StartTelemetrySession](AwsEcsActions.md#starttelemetrysession)
- [StopTask](AwsEcsActions.md#stoptask)
- [SubmitAttachmentStateChanges](AwsEcsActions.md#submitattachmentstatechanges)
- [SubmitContainerStateChange](AwsEcsActions.md#submitcontainerstatechange)
- [SubmitTaskStateChange](AwsEcsActions.md#submittaskstatechange)
- [TagResource](AwsEcsActions.md#tagresource)
- [UntagResource](AwsEcsActions.md#untagresource)
- [UpdateCapacityProvider](AwsEcsActions.md#updatecapacityprovider)
- [UpdateCluster](AwsEcsActions.md#updatecluster)
- [UpdateClusterSettings](AwsEcsActions.md#updateclustersettings)
- [UpdateContainerAgent](AwsEcsActions.md#updatecontaineragent)
- [UpdateContainerInstancesState](AwsEcsActions.md#updatecontainerinstancesstate)
- [UpdateService](AwsEcsActions.md#updateservice)
- [UpdateServicePrimaryTaskSet](AwsEcsActions.md#updateserviceprimarytaskset)
- [UpdateTaskProtection](AwsEcsActions.md#updatetaskprotection)
- [UpdateTaskSet](AwsEcsActions.md#updatetaskset)

## Enumeration Members

### CreateCapacityProvider

• **CreateCapacityProvider** = ``"ecs:CreateCapacityProvider"``

Grants permission to create a new capacity provider. Capacity providers are ass
ociated with an Amazon ECS cluster and are used in capacity provider strategies
to facilitate cluster auto scaling

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html

#### Defined in

actions/ecs.ts:19

___

### CreateCluster

• **CreateCluster** = ``"ecs:CreateCluster"``

Grants permission to create a new Amazon ECS cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html

#### Defined in

actions/ecs.ts:25

___

### CreateService

• **CreateService** = ``"ecs:CreateService"``

Grants permission to run and maintain a desired number of tasks from a specifie
d task definition via service creation

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html

#### Defined in

actions/ecs.ts:32

___

### CreateTaskSet

• **CreateTaskSet** = ``"ecs:CreateTaskSet"``

Grants permission to create a new Amazon ECS task set

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html

#### Defined in

actions/ecs.ts:38

___

### DeleteAccountSetting

• **DeleteAccountSetting** = ``"ecs:DeleteAccountSetting"``

Grants permission to modify the ARN and resource ID format of a resource for a
specified IAM user, IAM role, or the root user for an account. You can specify
whether the new ARN and resource ID format are disabled for new resources that
are created

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAccountSetting.html

#### Defined in

actions/ecs.ts:47

___

### DeleteAttributes

• **DeleteAttributes** = ``"ecs:DeleteAttributes"``

Grants permission to delete one or more custom attributes from an Amazon ECS re
source

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html

#### Defined in

actions/ecs.ts:54

___

### DeleteCapacityProvider

• **DeleteCapacityProvider** = ``"ecs:DeleteCapacityProvider"``

Grants permission to delete the specified capacity provider

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCapacityProvider.html

#### Defined in

actions/ecs.ts:60

___

### DeleteCluster

• **DeleteCluster** = ``"ecs:DeleteCluster"``

Grants permission to delete the specified cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCluster.html

#### Defined in

actions/ecs.ts:66

___

### DeleteService

• **DeleteService** = ``"ecs:DeleteService"``

Grants permission to delete a specified service within a cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html

#### Defined in

actions/ecs.ts:72

___

### DeleteTaskDefinitions

• **DeleteTaskDefinitions** = ``"ecs:DeleteTaskDefinitions"``

Grants permission to delete the specified task definitions by family and revisi
on

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html

#### Defined in

actions/ecs.ts:79

___

### DeleteTaskSet

• **DeleteTaskSet** = ``"ecs:DeleteTaskSet"``

Grants permission to delete the specified task set

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html

#### Defined in

actions/ecs.ts:85

___

### DeregisterContainerInstance

• **DeregisterContainerInstance** = ``"ecs:DeregisterContainerInstance"``

Grants permission to deregister an Amazon ECS container instance from the speci
fied cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html

#### Defined in

actions/ecs.ts:92

___

### DeregisterTaskDefinition

• **DeregisterTaskDefinition** = ``"ecs:DeregisterTaskDefinition"``

Grants permission to deregister the specified task definition by family and rev
ision

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html

#### Defined in

actions/ecs.ts:99

___

### DescribeCapacityProviders

• **DescribeCapacityProviders** = ``"ecs:DescribeCapacityProviders"``

Grants permission to describe one or more Amazon ECS capacity providers

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeCapacityProviders.html

#### Defined in

actions/ecs.ts:105

___

### DescribeClusters

• **DescribeClusters** = ``"ecs:DescribeClusters"``

Grants permission to describes one or more of your clusters

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeClusters.html

#### Defined in

actions/ecs.ts:111

___

### DescribeContainerInstances

• **DescribeContainerInstances** = ``"ecs:DescribeContainerInstances"``

Grants permission to describes Amazon ECS container instances

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html

#### Defined in

actions/ecs.ts:117

___

### DescribeServices

• **DescribeServices** = ``"ecs:DescribeServices"``

Grants permission to describe the specified services running in your cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html

#### Defined in

actions/ecs.ts:123

___

### DescribeTaskDefinition

• **DescribeTaskDefinition** = ``"ecs:DescribeTaskDefinition"``

Grants permission to describe a task definition. You can specify a family and r
evision to find information about a specific task definition, or you can simply
specify the family to find the latest ACTIVE revision in that family

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskDefinition.html

#### Defined in

actions/ecs.ts:131

___

### DescribeTaskSets

• **DescribeTaskSets** = ``"ecs:DescribeTaskSets"``

Grants permission to describe Amazon ECS task sets

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html

#### Defined in

actions/ecs.ts:137

___

### DescribeTasks

• **DescribeTasks** = ``"ecs:DescribeTasks"``

Grants permission to describe a specified task or tasks

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html

#### Defined in

actions/ecs.ts:143

___

### DiscoverPollEndpoint

• **DiscoverPollEndpoint** = ``"ecs:DiscoverPollEndpoint"``

Grants permission to get an endpoint for the Amazon ECS agent to poll for updat
es

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DiscoverPollEndpoint.html

#### Defined in

actions/ecs.ts:150

___

### ExecuteCommand

• **ExecuteCommand** = ``"ecs:ExecuteCommand"``

Grants permission to run a command remotely on an Amazon ECS container

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ExecuteCommand.html

#### Defined in

actions/ecs.ts:156

___

### GetTaskProtection

• **GetTaskProtection** = ``"ecs:GetTaskProtection"``

Grants permission to retrieve the protection status of tasks in an Amazon ECS s
ervice

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_GetTaskProtection.html

#### Defined in

actions/ecs.ts:163

___

### ListAccountSettings

• **ListAccountSettings** = ``"ecs:ListAccountSettings"``

Grants permission to list the account settings for an Amazon ECS resource for a
specified principal

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAccountSettings.html

#### Defined in

actions/ecs.ts:170

___

### ListAttributes

• **ListAttributes** = ``"ecs:ListAttributes"``

Grants permission to lists the attributes for Amazon ECS resources within a spe
cified target type and cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html

#### Defined in

actions/ecs.ts:177

___

### ListClusters

• **ListClusters** = ``"ecs:ListClusters"``

Grants permission to get a list of existing clusters

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html

#### Defined in

actions/ecs.ts:183

___

### ListContainerInstances

• **ListContainerInstances** = ``"ecs:ListContainerInstances"``

Grants permission to get a list of container instances in a specified cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html

#### Defined in

actions/ecs.ts:189

___

### ListServices

• **ListServices** = ``"ecs:ListServices"``

Grants permission to get a list of services that are running in a specified clu
ster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html

#### Defined in

actions/ecs.ts:196

___

### ListServicesByNamespace

• **ListServicesByNamespace** = ``"ecs:ListServicesByNamespace"``

Grants permission to get a list of services that are running in a specified AWS
Cloud Map Namespace

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServicesByNamespace.html

#### Defined in

actions/ecs.ts:203

___

### ListTagsForResource

• **ListTagsForResource** = ``"ecs:ListTagsForResource"``

Grants permission to get a list of tags for the specified resource

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/ecs.ts:209

___

### ListTaskDefinitionFamilies

• **ListTaskDefinitionFamilies** = ``"ecs:ListTaskDefinitionFamilies"``

Grants permission to get a list of task definition families that are registered
to your account (which may include task definition families that no longer have
any ACTIVE task definitions)

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html

#### Defined in

actions/ecs.ts:217

___

### ListTaskDefinitions

• **ListTaskDefinitions** = ``"ecs:ListTaskDefinitions"``

Grants permission to get a list of task definitions that are registered to your
account

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTaskDefinitions.html

#### Defined in

actions/ecs.ts:224

___

### ListTasks

• **ListTasks** = ``"ecs:ListTasks"``

Grants permission to get a list of tasks for a specified cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html

#### Defined in

actions/ecs.ts:230

___

### Poll

• **Poll** = ``"ecs:Poll"``

Grants permission to an agent to connect with the Amazon ECS service to report
status and get commands

See https://docs.aws.amazon.com/AmazonECS/latest/developerguide/instance_IAM_role.html

#### Defined in

actions/ecs.ts:237

___

### PutAccountSetting

• **PutAccountSetting** = ``"ecs:PutAccountSetting"``

Grants permission to modify the ARN and resource ID format of a resource for a
specified IAM user, IAM role, or the root user for an account. You can specify
whether the new ARN and resource ID format are enabled for new resources that a
re created. Enabling this setting is required to use new Amazon ECS features su
ch as resource tagging

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html

#### Defined in

actions/ecs.ts:247

___

### PutAccountSettingDefault

• **PutAccountSettingDefault** = ``"ecs:PutAccountSettingDefault"``

Grants permission to modify the ARN and resource ID format of a resource type f
or all IAM users on an account for which no individual account setting has been
set. Enabling this setting is required to use new Amazon ECS features such as r
esource tagging

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html

#### Defined in

actions/ecs.ts:256

___

### PutAttributes

• **PutAttributes** = ``"ecs:PutAttributes"``

Grants permission to create or update an attribute on an Amazon ECS resource

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html

#### Defined in

actions/ecs.ts:262

___

### PutClusterCapacityProviders

• **PutClusterCapacityProviders** = ``"ecs:PutClusterCapacityProviders"``

Grants permission to modify the available capacity providers and the default ca
pacity provider strategy for a cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html

#### Defined in

actions/ecs.ts:269

___

### RegisterContainerInstance

• **RegisterContainerInstance** = ``"ecs:RegisterContainerInstance"``

Grants permission to register an EC2 instance into the specified cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterContainerInstance.html

#### Defined in

actions/ecs.ts:275

___

### RegisterTaskDefinition

• **RegisterTaskDefinition** = ``"ecs:RegisterTaskDefinition"``

Grants permission to register a new task definition from the supplied family an
d containerDefinitions

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html

#### Defined in

actions/ecs.ts:282

___

### RunTask

• **RunTask** = ``"ecs:RunTask"``

Grants permission to start a task using random placement and the default Amazon
ECS scheduler

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html

#### Defined in

actions/ecs.ts:289

___

### StartTask

• **StartTask** = ``"ecs:StartTask"``

Grants permission to start a new task from the specified task definition on the
specified container instance or instances

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StartTask.html

#### Defined in

actions/ecs.ts:296

___

### StartTelemetrySession

• **StartTelemetrySession** = ``"ecs:StartTelemetrySession"``

Grants permission to start a telemetry session

See https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html#enable_cloudwatch

#### Defined in

actions/ecs.ts:302

___

### StopTask

• **StopTask** = ``"ecs:StopTask"``

Grants permission to stop a running task

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StopTask.html

#### Defined in

actions/ecs.ts:308

___

### SubmitAttachmentStateChanges

• **SubmitAttachmentStateChanges** = ``"ecs:SubmitAttachmentStateChanges"``

Grants permission to send an acknowledgement that attachments changed states

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitAttachmentStateChanges.html

#### Defined in

actions/ecs.ts:314

___

### SubmitContainerStateChange

• **SubmitContainerStateChange** = ``"ecs:SubmitContainerStateChange"``

Grants permission to send an acknowledgement that a container changed states

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitContainerStateChange.html

#### Defined in

actions/ecs.ts:320

___

### SubmitTaskStateChange

• **SubmitTaskStateChange** = ``"ecs:SubmitTaskStateChange"``

Grants permission to send an acknowledgement that a task changed states

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitTaskStateChange.html

#### Defined in

actions/ecs.ts:326

___

### TagResource

• **TagResource** = ``"ecs:TagResource"``

Grants permission to tag the specified resource

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html

#### Defined in

actions/ecs.ts:332

___

### UntagResource

• **UntagResource** = ``"ecs:UntagResource"``

Grants permission to untag the specified resource

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UntagResource.html

#### Defined in

actions/ecs.ts:338

___

### UpdateCapacityProvider

• **UpdateCapacityProvider** = ``"ecs:UpdateCapacityProvider"``

Grants permission to update the specified capacity provider

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateCapacityProvider.html

#### Defined in

actions/ecs.ts:344

___

### UpdateCluster

• **UpdateCluster** = ``"ecs:UpdateCluster"``

Grants permission to modify the configuration or settings to use for a cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateCluster.html

#### Defined in

actions/ecs.ts:350

___

### UpdateClusterSettings

• **UpdateClusterSettings** = ``"ecs:UpdateClusterSettings"``

Grants permission to modify the settings to use for a cluster

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateClusterSettings.html

#### Defined in

actions/ecs.ts:356

___

### UpdateContainerAgent

• **UpdateContainerAgent** = ``"ecs:UpdateContainerAgent"``

Grants permission to update the Amazon ECS container agent on a specified conta
iner instance

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerAgent.html

#### Defined in

actions/ecs.ts:363

___

### UpdateContainerInstancesState

• **UpdateContainerInstancesState** = ``"ecs:UpdateContainerInstancesState"``

Grants permission to the user to modify the status of an Amazon ECS container i
nstance

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html

#### Defined in

actions/ecs.ts:370

___

### UpdateService

• **UpdateService** = ``"ecs:UpdateService"``

Grants permission to modify the parameters of a service

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html

#### Defined in

actions/ecs.ts:376

___

### UpdateServicePrimaryTaskSet

• **UpdateServicePrimaryTaskSet** = ``"ecs:UpdateServicePrimaryTaskSet"``

Grants permission to modify the primary task set used in a service

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateServicePrimaryTaskSet.html

#### Defined in

actions/ecs.ts:382

___

### UpdateTaskProtection

• **UpdateTaskProtection** = ``"ecs:UpdateTaskProtection"``

Grants permission to modify the protection status of a task

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskProtection.html

#### Defined in

actions/ecs.ts:388

___

### UpdateTaskSet

• **UpdateTaskSet** = ``"ecs:UpdateTaskSet"``

Grants permission to update the specified task set

See https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskSet.html

#### Defined in

actions/ecs.ts:394
