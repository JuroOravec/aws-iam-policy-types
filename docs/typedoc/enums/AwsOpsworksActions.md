[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsOpsworksActions

# Enumeration: AwsOpsworksActions

All IAM policy actions for AWS OpsWorks (OPSWORKS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworks.html

2024-02-12T09:58:33.301Z

## Table of contents

### Enumeration Members

- [AssignInstance](AwsOpsworksActions.md#assigninstance)
- [AssignVolume](AwsOpsworksActions.md#assignvolume)
- [AssociateElasticIp](AwsOpsworksActions.md#associateelasticip)
- [AttachElasticLoadBalancer](AwsOpsworksActions.md#attachelasticloadbalancer)
- [CloneStack](AwsOpsworksActions.md#clonestack)
- [CreateApp](AwsOpsworksActions.md#createapp)
- [CreateDeployment](AwsOpsworksActions.md#createdeployment)
- [CreateInstance](AwsOpsworksActions.md#createinstance)
- [CreateLayer](AwsOpsworksActions.md#createlayer)
- [CreateStack](AwsOpsworksActions.md#createstack)
- [CreateUserProfile](AwsOpsworksActions.md#createuserprofile)
- [DeleteApp](AwsOpsworksActions.md#deleteapp)
- [DeleteInstance](AwsOpsworksActions.md#deleteinstance)
- [DeleteLayer](AwsOpsworksActions.md#deletelayer)
- [DeleteStack](AwsOpsworksActions.md#deletestack)
- [DeleteUserProfile](AwsOpsworksActions.md#deleteuserprofile)
- [DeregisterEcsCluster](AwsOpsworksActions.md#deregisterecscluster)
- [DeregisterElasticIp](AwsOpsworksActions.md#deregisterelasticip)
- [DeregisterInstance](AwsOpsworksActions.md#deregisterinstance)
- [DeregisterRdsDbInstance](AwsOpsworksActions.md#deregisterrdsdbinstance)
- [DeregisterVolume](AwsOpsworksActions.md#deregistervolume)
- [DescribeAgentVersions](AwsOpsworksActions.md#describeagentversions)
- [DescribeApps](AwsOpsworksActions.md#describeapps)
- [DescribeCommands](AwsOpsworksActions.md#describecommands)
- [DescribeDeployments](AwsOpsworksActions.md#describedeployments)
- [DescribeEcsClusters](AwsOpsworksActions.md#describeecsclusters)
- [DescribeElasticIps](AwsOpsworksActions.md#describeelasticips)
- [DescribeElasticLoadBalancers](AwsOpsworksActions.md#describeelasticloadbalancers)
- [DescribeInstances](AwsOpsworksActions.md#describeinstances)
- [DescribeLayers](AwsOpsworksActions.md#describelayers)
- [DescribeLoadBasedAutoScaling](AwsOpsworksActions.md#describeloadbasedautoscaling)
- [DescribeMyUserProfile](AwsOpsworksActions.md#describemyuserprofile)
- [DescribeOperatingSystems](AwsOpsworksActions.md#describeoperatingsystems)
- [DescribePermissions](AwsOpsworksActions.md#describepermissions)
- [DescribeRaidArrays](AwsOpsworksActions.md#describeraidarrays)
- [DescribeRdsDbInstances](AwsOpsworksActions.md#describerdsdbinstances)
- [DescribeServiceErrors](AwsOpsworksActions.md#describeserviceerrors)
- [DescribeStackProvisioningParameters](AwsOpsworksActions.md#describestackprovisioningparameters)
- [DescribeStackSummary](AwsOpsworksActions.md#describestacksummary)
- [DescribeStacks](AwsOpsworksActions.md#describestacks)
- [DescribeTimeBasedAutoScaling](AwsOpsworksActions.md#describetimebasedautoscaling)
- [DescribeUserProfiles](AwsOpsworksActions.md#describeuserprofiles)
- [DescribeVolumes](AwsOpsworksActions.md#describevolumes)
- [DetachElasticLoadBalancer](AwsOpsworksActions.md#detachelasticloadbalancer)
- [DisassociateElasticIp](AwsOpsworksActions.md#disassociateelasticip)
- [GetHostnameSuggestion](AwsOpsworksActions.md#gethostnamesuggestion)
- [GrantAccess](AwsOpsworksActions.md#grantaccess)
- [ListTags](AwsOpsworksActions.md#listtags)
- [RebootInstance](AwsOpsworksActions.md#rebootinstance)
- [RegisterEcsCluster](AwsOpsworksActions.md#registerecscluster)
- [RegisterElasticIp](AwsOpsworksActions.md#registerelasticip)
- [RegisterInstance](AwsOpsworksActions.md#registerinstance)
- [RegisterRdsDbInstance](AwsOpsworksActions.md#registerrdsdbinstance)
- [RegisterVolume](AwsOpsworksActions.md#registervolume)
- [SetLoadBasedAutoScaling](AwsOpsworksActions.md#setloadbasedautoscaling)
- [SetPermission](AwsOpsworksActions.md#setpermission)
- [SetTimeBasedAutoScaling](AwsOpsworksActions.md#settimebasedautoscaling)
- [StartInstance](AwsOpsworksActions.md#startinstance)
- [StartStack](AwsOpsworksActions.md#startstack)
- [StopInstance](AwsOpsworksActions.md#stopinstance)
- [StopStack](AwsOpsworksActions.md#stopstack)
- [TagResource](AwsOpsworksActions.md#tagresource)
- [UnassignInstance](AwsOpsworksActions.md#unassigninstance)
- [UnassignVolume](AwsOpsworksActions.md#unassignvolume)
- [UntagResource](AwsOpsworksActions.md#untagresource)
- [UpdateApp](AwsOpsworksActions.md#updateapp)
- [UpdateElasticIp](AwsOpsworksActions.md#updateelasticip)
- [UpdateInstance](AwsOpsworksActions.md#updateinstance)
- [UpdateLayer](AwsOpsworksActions.md#updatelayer)
- [UpdateMyUserProfile](AwsOpsworksActions.md#updatemyuserprofile)
- [UpdateRdsDbInstance](AwsOpsworksActions.md#updaterdsdbinstance)
- [UpdateStack](AwsOpsworksActions.md#updatestack)
- [UpdateUserProfile](AwsOpsworksActions.md#updateuserprofile)
- [UpdateVolume](AwsOpsworksActions.md#updatevolume)

## Enumeration Members

### AssignInstance

• **AssignInstance** = ``"opsworks:AssignInstance"``

Grants permission to assign a registered instance to a layer

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignInstance.html

#### Defined in

actions/opsworks.ts:17

___

### AssignVolume

• **AssignVolume** = ``"opsworks:AssignVolume"``

Grants permission to assign one of the stack's registered Amazon EBS volumes to
a specified instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignVolume.html

#### Defined in

actions/opsworks.ts:24

___

### AssociateElasticIp

• **AssociateElasticIp** = ``"opsworks:AssociateElasticIp"``

Grants permission to associate one of the stack's registered Elastic IP address
es with a specified instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssociateElasticIp.html

#### Defined in

actions/opsworks.ts:31

___

### AttachElasticLoadBalancer

• **AttachElasticLoadBalancer** = ``"opsworks:AttachElasticLoadBalancer"``

Grants permission to attach an Elastic Load Balancing load balancer to a specif
ied layer

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AttachElasticLoadBalancer.html

#### Defined in

actions/opsworks.ts:38

___

### CloneStack

• **CloneStack** = ``"opsworks:CloneStack"``

Grants permission to create a clone of a specified stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CloneStack.html

#### Defined in

actions/opsworks.ts:44

___

### CreateApp

• **CreateApp** = ``"opsworks:CreateApp"``

Grants permission to create an app for a specified stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateApp.html

#### Defined in

actions/opsworks.ts:50

___

### CreateDeployment

• **CreateDeployment** = ``"opsworks:CreateDeployment"``

Grants permission to run deployment or stack commands

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateDeployment.html

#### Defined in

actions/opsworks.ts:56

___

### CreateInstance

• **CreateInstance** = ``"opsworks:CreateInstance"``

Grants permission to create an instance in a specified stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateInstance.html

#### Defined in

actions/opsworks.ts:62

___

### CreateLayer

• **CreateLayer** = ``"opsworks:CreateLayer"``

Grants permission to create a layer

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateLayer.html

#### Defined in

actions/opsworks.ts:68

___

### CreateStack

• **CreateStack** = ``"opsworks:CreateStack"``

Grants permission to create a new stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateStack.html

#### Defined in

actions/opsworks.ts:74

___

### CreateUserProfile

• **CreateUserProfile** = ``"opsworks:CreateUserProfile"``

Grants permission to create a new user profile

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateUserProfile.html

#### Defined in

actions/opsworks.ts:80

___

### DeleteApp

• **DeleteApp** = ``"opsworks:DeleteApp"``

Grants permission to delete a specified app

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteApp.html

#### Defined in

actions/opsworks.ts:86

___

### DeleteInstance

• **DeleteInstance** = ``"opsworks:DeleteInstance"``

Grants permission to delete a specified instance, which terminates the associat
ed Amazon EC2 instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteInstance.html

#### Defined in

actions/opsworks.ts:93

___

### DeleteLayer

• **DeleteLayer** = ``"opsworks:DeleteLayer"``

Grants permission to delete a specified layer

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteLayer.html

#### Defined in

actions/opsworks.ts:99

___

### DeleteStack

• **DeleteStack** = ``"opsworks:DeleteStack"``

Grants permission to delete a specified stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteStack.html

#### Defined in

actions/opsworks.ts:105

___

### DeleteUserProfile

• **DeleteUserProfile** = ``"opsworks:DeleteUserProfile"``

Grants permission to delete a user profile

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteUserProfile.html

#### Defined in

actions/opsworks.ts:111

___

### DeregisterEcsCluster

• **DeregisterEcsCluster** = ``"opsworks:DeregisterEcsCluster"``

Grants permission to delete a user profile

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterEcsCluster.html

#### Defined in

actions/opsworks.ts:117

___

### DeregisterElasticIp

• **DeregisterElasticIp** = ``"opsworks:DeregisterElasticIp"``

Grants permission to deregister a specified Elastic IP address

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterElasticIp.html

#### Defined in

actions/opsworks.ts:123

___

### DeregisterInstance

• **DeregisterInstance** = ``"opsworks:DeregisterInstance"``

Grants permission to deregister a registered Amazon EC2 or on-premises instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterInstance.html

#### Defined in

actions/opsworks.ts:129

___

### DeregisterRdsDbInstance

• **DeregisterRdsDbInstance** = ``"opsworks:DeregisterRdsDbInstance"``

Grants permission to deregister an Amazon RDS instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterRdsDbInstance.html

#### Defined in

actions/opsworks.ts:135

___

### DeregisterVolume

• **DeregisterVolume** = ``"opsworks:DeregisterVolume"``

Grants permission to deregister an Amazon EBS volume

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterVolume.html

#### Defined in

actions/opsworks.ts:141

___

### DescribeAgentVersions

• **DescribeAgentVersions** = ``"opsworks:DescribeAgentVersions"``

Grants permission to describe the available AWS OpsWorks agent versions

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeAgentVersions.html

#### Defined in

actions/opsworks.ts:147

___

### DescribeApps

• **DescribeApps** = ``"opsworks:DescribeApps"``

Grants permission to request a description of a specified set of apps

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeApps.html

#### Defined in

actions/opsworks.ts:153

___

### DescribeCommands

• **DescribeCommands** = ``"opsworks:DescribeCommands"``

Grants permission to describe the results of specified commands

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeCommands.html

#### Defined in

actions/opsworks.ts:159

___

### DescribeDeployments

• **DescribeDeployments** = ``"opsworks:DescribeDeployments"``

Grants permission to request a description of a specified set of deployments

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeDeployments.html

#### Defined in

actions/opsworks.ts:165

___

### DescribeEcsClusters

• **DescribeEcsClusters** = ``"opsworks:DescribeEcsClusters"``

Grants permission to describe Amazon ECS clusters that are registered with a st
ack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeEcsClusters.html

#### Defined in

actions/opsworks.ts:172

___

### DescribeElasticIps

• **DescribeElasticIps** = ``"opsworks:DescribeElasticIps"``

Grants permission to describe Elastic IP addresses

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticIps.html

#### Defined in

actions/opsworks.ts:178

___

### DescribeElasticLoadBalancers

• **DescribeElasticLoadBalancers** = ``"opsworks:DescribeElasticLoadBalancers"``

Grants permission to describe a stack's Elastic Load Balancing instances

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticLoadBalancers.html

#### Defined in

actions/opsworks.ts:184

___

### DescribeInstances

• **DescribeInstances** = ``"opsworks:DescribeInstances"``

Grants permission to request a description of a set of instances

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeInstances.html

#### Defined in

actions/opsworks.ts:190

___

### DescribeLayers

• **DescribeLayers** = ``"opsworks:DescribeLayers"``

Grants permission to request a description of one or more layers in a specified
stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLayers.html

#### Defined in

actions/opsworks.ts:197

___

### DescribeLoadBasedAutoScaling

• **DescribeLoadBasedAutoScaling** = ``"opsworks:DescribeLoadBasedAutoScaling"``

Grants permission to describe load-based auto scaling configurations for specif
ied layers

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLoadBasedAutoScaling.html

#### Defined in

actions/opsworks.ts:204

___

### DescribeMyUserProfile

• **DescribeMyUserProfile** = ``"opsworks:DescribeMyUserProfile"``

Grants permission to describe a user's SSH information

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeMyUserProfile.html

#### Defined in

actions/opsworks.ts:210

___

### DescribeOperatingSystems

• **DescribeOperatingSystems** = ``"opsworks:DescribeOperatingSystems"``

Grants permission to describe the operating systems that are supported by AWS O
psWorks Stacks

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeOperatingSystems.html

#### Defined in

actions/opsworks.ts:217

___

### DescribePermissions

• **DescribePermissions** = ``"opsworks:DescribePermissions"``

Grants permission to describe the permissions for a specified stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribePermissions.html

#### Defined in

actions/opsworks.ts:223

___

### DescribeRaidArrays

• **DescribeRaidArrays** = ``"opsworks:DescribeRaidArrays"``

Grants permission to describe an instance's RAID arrays

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRaidArrays.html

#### Defined in

actions/opsworks.ts:229

___

### DescribeRdsDbInstances

• **DescribeRdsDbInstances** = ``"opsworks:DescribeRdsDbInstances"``

Grants permission to describe Amazon RDS instances

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRdsDbInstances.html

#### Defined in

actions/opsworks.ts:235

___

### DescribeServiceErrors

• **DescribeServiceErrors** = ``"opsworks:DescribeServiceErrors"``

Grants permission to describe AWS OpsWorks service errors

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeServiceErrors.html

#### Defined in

actions/opsworks.ts:241

___

### DescribeStackProvisioningParameters

• **DescribeStackProvisioningParameters** = ``"opsworks:DescribeStackProvisioningParameters"``

Grants permission to request a description of a stack's provisioning parameters

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackProvisioningParameters.html

#### Defined in

actions/opsworks.ts:247

___

### DescribeStackSummary

• **DescribeStackSummary** = ``"opsworks:DescribeStackSummary"``

Grants permission to describe the number of layers and apps in a specified stac
k, and the number of instances in each state, such as running_setup or online

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackSummary.html

#### Defined in

actions/opsworks.ts:254

___

### DescribeStacks

• **DescribeStacks** = ``"opsworks:DescribeStacks"``

Grants permission to request a description of one or more stacks

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStacks.html

#### Defined in

actions/opsworks.ts:260

___

### DescribeTimeBasedAutoScaling

• **DescribeTimeBasedAutoScaling** = ``"opsworks:DescribeTimeBasedAutoScaling"``

Grants permission to describe time-based auto scaling configurations for specif
ied instances

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeTimeBasedAutoScaling.html

#### Defined in

actions/opsworks.ts:267

___

### DescribeUserProfiles

• **DescribeUserProfiles** = ``"opsworks:DescribeUserProfiles"``

Grants permission to describe specified users

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeUserProfiles.html

#### Defined in

actions/opsworks.ts:273

___

### DescribeVolumes

• **DescribeVolumes** = ``"opsworks:DescribeVolumes"``

Grants permission to describe an instance's Amazon EBS volumes

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeVolumes.html

#### Defined in

actions/opsworks.ts:279

___

### DetachElasticLoadBalancer

• **DetachElasticLoadBalancer** = ``"opsworks:DetachElasticLoadBalancer"``

Grants permission to detache a specified Elastic Load Balancing instance from i
ts layer

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DetachElasticLoadBalancer.html

#### Defined in

actions/opsworks.ts:286

___

### DisassociateElasticIp

• **DisassociateElasticIp** = ``"opsworks:DisassociateElasticIp"``

Grants permission to disassociate an Elastic IP address from its instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DisassociateElasticIp.html

#### Defined in

actions/opsworks.ts:292

___

### GetHostnameSuggestion

• **GetHostnameSuggestion** = ``"opsworks:GetHostnameSuggestion"``

Grants permission to get a generated host name for the specified layer, based o
n the current host name theme

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_GetHostnameSuggestion.html

#### Defined in

actions/opsworks.ts:299

___

### GrantAccess

• **GrantAccess** = ``"opsworks:GrantAccess"``

Grants permission to grant RDP access to a Windows instance for a specified tim
e period

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html

#### Defined in

actions/opsworks.ts:306

___

### ListTags

• **ListTags** = ``"opsworks:ListTags"``

Grants permission to return a list of tags that are applied to the specified st
ack or layer

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_ListTags.html

#### Defined in

actions/opsworks.ts:313

___

### RebootInstance

• **RebootInstance** = ``"opsworks:RebootInstance"``

Grants permission to reboot a specified instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html

#### Defined in

actions/opsworks.ts:319

___

### RegisterEcsCluster

• **RegisterEcsCluster** = ``"opsworks:RegisterEcsCluster"``

Grants permission to register a specified Amazon ECS cluster with a stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterEcsCluster.html

#### Defined in

actions/opsworks.ts:325

___

### RegisterElasticIp

• **RegisterElasticIp** = ``"opsworks:RegisterElasticIp"``

Grants permission to register an Elastic IP address with a specified stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterElasticIp.html

#### Defined in

actions/opsworks.ts:331

___

### RegisterInstance

• **RegisterInstance** = ``"opsworks:RegisterInstance"``

Grants permission to register instances with a specified stack that were create
d outside of AWS OpsWorks

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterInstance.html

#### Defined in

actions/opsworks.ts:338

___

### RegisterRdsDbInstance

• **RegisterRdsDbInstance** = ``"opsworks:RegisterRdsDbInstance"``

Grants permission to register an Amazon RDS instance with a stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterRdsDbInstance.html

#### Defined in

actions/opsworks.ts:344

___

### RegisterVolume

• **RegisterVolume** = ``"opsworks:RegisterVolume"``

Grants permission to register an Amazon EBS volume with a specified stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterVolume.html

#### Defined in

actions/opsworks.ts:350

___

### SetLoadBasedAutoScaling

• **SetLoadBasedAutoScaling** = ``"opsworks:SetLoadBasedAutoScaling"``

Grants permission to specify the load-based auto scaling configuration for a sp
ecified layer

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetLoadBasedAutoScaling.html

#### Defined in

actions/opsworks.ts:357

___

### SetPermission

• **SetPermission** = ``"opsworks:SetPermission"``

Grants permission to specify a user's permissions

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetPermission.html

#### Defined in

actions/opsworks.ts:363

___

### SetTimeBasedAutoScaling

• **SetTimeBasedAutoScaling** = ``"opsworks:SetTimeBasedAutoScaling"``

Grants permission to specify the time-based auto scaling configuration for a sp
ecified instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetTimeBasedAutoScaling.html

#### Defined in

actions/opsworks.ts:370

___

### StartInstance

• **StartInstance** = ``"opsworks:StartInstance"``

Grants permission to start a specified instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartInstance.html

#### Defined in

actions/opsworks.ts:376

___

### StartStack

• **StartStack** = ``"opsworks:StartStack"``

Grants permission to start a stack's instances

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartStack.html

#### Defined in

actions/opsworks.ts:382

___

### StopInstance

• **StopInstance** = ``"opsworks:StopInstance"``

Grants permission to stop a specified instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopInstance.html

#### Defined in

actions/opsworks.ts:388

___

### StopStack

• **StopStack** = ``"opsworks:StopStack"``

Grants permission to stop a specified stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopStack.html

#### Defined in

actions/opsworks.ts:394

___

### TagResource

• **TagResource** = ``"opsworks:TagResource"``

Grants permission to apply tags to a specified stack or layer

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_TagResource.html

#### Defined in

actions/opsworks.ts:400

___

### UnassignInstance

• **UnassignInstance** = ``"opsworks:UnassignInstance"``

Grants permission to unassign a registered instance from all of it's layers

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignInstance.html

#### Defined in

actions/opsworks.ts:406

___

### UnassignVolume

• **UnassignVolume** = ``"opsworks:UnassignVolume"``

Grants permission to unassign an assigned Amazon EBS volume

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignVolume.html

#### Defined in

actions/opsworks.ts:412

___

### UntagResource

• **UntagResource** = ``"opsworks:UntagResource"``

Grants permission to remove tags from a specified stack or layer

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UntagResource.html

#### Defined in

actions/opsworks.ts:418

___

### UpdateApp

• **UpdateApp** = ``"opsworks:UpdateApp"``

Grants permission to update a specified app

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateApp.html

#### Defined in

actions/opsworks.ts:424

___

### UpdateElasticIp

• **UpdateElasticIp** = ``"opsworks:UpdateElasticIp"``

Grants permission to update a registered Elastic IP address's name

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateElasticIp.html

#### Defined in

actions/opsworks.ts:430

___

### UpdateInstance

• **UpdateInstance** = ``"opsworks:UpdateInstance"``

Grants permission to update a specified instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateInstance.html

#### Defined in

actions/opsworks.ts:436

___

### UpdateLayer

• **UpdateLayer** = ``"opsworks:UpdateLayer"``

Grants permission to update a specified layer

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateLayer.html

#### Defined in

actions/opsworks.ts:442

___

### UpdateMyUserProfile

• **UpdateMyUserProfile** = ``"opsworks:UpdateMyUserProfile"``

Grants permission to update a user's SSH public key

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateMyUserProfile.html

#### Defined in

actions/opsworks.ts:448

___

### UpdateRdsDbInstance

• **UpdateRdsDbInstance** = ``"opsworks:UpdateRdsDbInstance"``

Grants permission to update an Amazon RDS instance

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateRdsDbInstance.html

#### Defined in

actions/opsworks.ts:454

___

### UpdateStack

• **UpdateStack** = ``"opsworks:UpdateStack"``

Grants permission to update a specified stack

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateStack.html

#### Defined in

actions/opsworks.ts:460

___

### UpdateUserProfile

• **UpdateUserProfile** = ``"opsworks:UpdateUserProfile"``

Grants permission to update a specified user profile

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateUserProfile.html

#### Defined in

actions/opsworks.ts:466

___

### UpdateVolume

• **UpdateVolume** = ``"opsworks:UpdateVolume"``

Grants permission to update an Amazon EBS volume's name or mount point

See https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateVolume.html

#### Defined in

actions/opsworks.ts:472
