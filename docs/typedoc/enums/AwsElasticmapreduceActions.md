[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsElasticmapreduceActions

# Enumeration: AwsElasticmapreduceActions

All IAM policy actions for Amazon Elastic MapReduce (ELASTICMAPREDUCE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticmapreduce.html

2024-02-12T09:57:12.650Z

## Table of contents

### Enumeration Members

- [AddInstanceFleet](AwsElasticmapreduceActions.md#addinstancefleet)
- [AddInstanceGroups](AwsElasticmapreduceActions.md#addinstancegroups)
- [AddJobFlowSteps](AwsElasticmapreduceActions.md#addjobflowsteps)
- [AddTags](AwsElasticmapreduceActions.md#addtags)
- [AttachEditor](AwsElasticmapreduceActions.md#attacheditor)
- [CancelSteps](AwsElasticmapreduceActions.md#cancelsteps)
- [CreateEditor](AwsElasticmapreduceActions.md#createeditor)
- [CreatePersistentAppUI](AwsElasticmapreduceActions.md#createpersistentappui)
- [CreateRepository](AwsElasticmapreduceActions.md#createrepository)
- [CreateSecurityConfiguration](AwsElasticmapreduceActions.md#createsecurityconfiguration)
- [CreateStudio](AwsElasticmapreduceActions.md#createstudio)
- [CreateStudioPresignedUrl](AwsElasticmapreduceActions.md#createstudiopresignedurl)
- [CreateStudioSessionMapping](AwsElasticmapreduceActions.md#createstudiosessionmapping)
- [DeleteEditor](AwsElasticmapreduceActions.md#deleteeditor)
- [DeleteRepository](AwsElasticmapreduceActions.md#deleterepository)
- [DeleteSecurityConfiguration](AwsElasticmapreduceActions.md#deletesecurityconfiguration)
- [DeleteStudio](AwsElasticmapreduceActions.md#deletestudio)
- [DeleteStudioSessionMapping](AwsElasticmapreduceActions.md#deletestudiosessionmapping)
- [DeleteWorkspaceAccess](AwsElasticmapreduceActions.md#deleteworkspaceaccess)
- [DescribeCluster](AwsElasticmapreduceActions.md#describecluster)
- [DescribeEditor](AwsElasticmapreduceActions.md#describeeditor)
- [DescribeJobFlows](AwsElasticmapreduceActions.md#describejobflows)
- [DescribeNotebookExecution](AwsElasticmapreduceActions.md#describenotebookexecution)
- [DescribePersistentAppUI](AwsElasticmapreduceActions.md#describepersistentappui)
- [DescribeReleaseLabel](AwsElasticmapreduceActions.md#describereleaselabel)
- [DescribeRepository](AwsElasticmapreduceActions.md#describerepository)
- [DescribeSecurityConfiguration](AwsElasticmapreduceActions.md#describesecurityconfiguration)
- [DescribeStep](AwsElasticmapreduceActions.md#describestep)
- [DescribeStudio](AwsElasticmapreduceActions.md#describestudio)
- [DetachEditor](AwsElasticmapreduceActions.md#detacheditor)
- [GetAutoTerminationPolicy](AwsElasticmapreduceActions.md#getautoterminationpolicy)
- [GetBlockPublicAccessConfiguration](AwsElasticmapreduceActions.md#getblockpublicaccessconfiguration)
- [GetClusterSessionCredentials](AwsElasticmapreduceActions.md#getclustersessioncredentials)
- [GetManagedScalingPolicy](AwsElasticmapreduceActions.md#getmanagedscalingpolicy)
- [GetOnClusterAppUIPresignedURL](AwsElasticmapreduceActions.md#getonclusterappuipresignedurl)
- [GetPersistentAppUIPresignedURL](AwsElasticmapreduceActions.md#getpersistentappuipresignedurl)
- [GetStudioSessionMapping](AwsElasticmapreduceActions.md#getstudiosessionmapping)
- [LinkRepository](AwsElasticmapreduceActions.md#linkrepository)
- [ListBootstrapActions](AwsElasticmapreduceActions.md#listbootstrapactions)
- [ListClusters](AwsElasticmapreduceActions.md#listclusters)
- [ListEditors](AwsElasticmapreduceActions.md#listeditors)
- [ListInstanceFleets](AwsElasticmapreduceActions.md#listinstancefleets)
- [ListInstanceGroups](AwsElasticmapreduceActions.md#listinstancegroups)
- [ListInstances](AwsElasticmapreduceActions.md#listinstances)
- [ListNotebookExecutions](AwsElasticmapreduceActions.md#listnotebookexecutions)
- [ListReleaseLabels](AwsElasticmapreduceActions.md#listreleaselabels)
- [ListRepositories](AwsElasticmapreduceActions.md#listrepositories)
- [ListSecurityConfigurations](AwsElasticmapreduceActions.md#listsecurityconfigurations)
- [ListSteps](AwsElasticmapreduceActions.md#liststeps)
- [ListStudioSessionMappings](AwsElasticmapreduceActions.md#liststudiosessionmappings)
- [ListStudios](AwsElasticmapreduceActions.md#liststudios)
- [ListSupportedInstanceTypes](AwsElasticmapreduceActions.md#listsupportedinstancetypes)
- [ListWorkspaceAccessIdentities](AwsElasticmapreduceActions.md#listworkspaceaccessidentities)
- [ModifyCluster](AwsElasticmapreduceActions.md#modifycluster)
- [ModifyInstanceFleet](AwsElasticmapreduceActions.md#modifyinstancefleet)
- [ModifyInstanceGroups](AwsElasticmapreduceActions.md#modifyinstancegroups)
- [OpenEditorInConsole](AwsElasticmapreduceActions.md#openeditorinconsole)
- [PutAutoScalingPolicy](AwsElasticmapreduceActions.md#putautoscalingpolicy)
- [PutAutoTerminationPolicy](AwsElasticmapreduceActions.md#putautoterminationpolicy)
- [PutBlockPublicAccessConfiguration](AwsElasticmapreduceActions.md#putblockpublicaccessconfiguration)
- [PutManagedScalingPolicy](AwsElasticmapreduceActions.md#putmanagedscalingpolicy)
- [PutWorkspaceAccess](AwsElasticmapreduceActions.md#putworkspaceaccess)
- [RemoveAutoScalingPolicy](AwsElasticmapreduceActions.md#removeautoscalingpolicy)
- [RemoveAutoTerminationPolicy](AwsElasticmapreduceActions.md#removeautoterminationpolicy)
- [RemoveManagedScalingPolicy](AwsElasticmapreduceActions.md#removemanagedscalingpolicy)
- [RemoveTags](AwsElasticmapreduceActions.md#removetags)
- [RunJobFlow](AwsElasticmapreduceActions.md#runjobflow)
- [SetKeepJobFlowAliveWhenNoSteps](AwsElasticmapreduceActions.md#setkeepjobflowalivewhennosteps)
- [SetTerminationProtection](AwsElasticmapreduceActions.md#setterminationprotection)
- [SetVisibleToAllUsers](AwsElasticmapreduceActions.md#setvisibletoallusers)
- [StartEditor](AwsElasticmapreduceActions.md#starteditor)
- [StartNotebookExecution](AwsElasticmapreduceActions.md#startnotebookexecution)
- [StopEditor](AwsElasticmapreduceActions.md#stopeditor)
- [StopNotebookExecution](AwsElasticmapreduceActions.md#stopnotebookexecution)
- [TerminateJobFlows](AwsElasticmapreduceActions.md#terminatejobflows)
- [UnlinkRepository](AwsElasticmapreduceActions.md#unlinkrepository)
- [UpdateEditor](AwsElasticmapreduceActions.md#updateeditor)
- [UpdateRepository](AwsElasticmapreduceActions.md#updaterepository)
- [UpdateStudio](AwsElasticmapreduceActions.md#updatestudio)
- [UpdateStudioSessionMapping](AwsElasticmapreduceActions.md#updatestudiosessionmapping)
- [ViewEventsFromAllClustersInConsole](AwsElasticmapreduceActions.md#vieweventsfromallclustersinconsole)

## Enumeration Members

### AddInstanceFleet

• **AddInstanceFleet** = ``"elasticmapreduce:AddInstanceFleet"``

Grants permission to add an instance fleet to a running cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceFleet.html

#### Defined in

actions/elasticmapreduce.ts:17

___

### AddInstanceGroups

• **AddInstanceGroups** = ``"elasticmapreduce:AddInstanceGroups"``

Grants permission to add instance groups to a running cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceGroups.html

#### Defined in

actions/elasticmapreduce.ts:23

___

### AddJobFlowSteps

• **AddJobFlowSteps** = ``"elasticmapreduce:AddJobFlowSteps"``

Grants permission to add new steps to a running cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_AddJobFlowSteps.html

#### Defined in

actions/elasticmapreduce.ts:29

___

### AddTags

• **AddTags** = ``"elasticmapreduce:AddTags"``

Grants permission to add tags to an Amazon EMR resource

See https://docs.aws.amazon.com/emr/latest/APIReference/API_AddTags.html

#### Defined in

actions/elasticmapreduce.ts:35

___

### AttachEditor

• **AttachEditor** = ``"elasticmapreduce:AttachEditor"``

Grants permission to attach an EMR notebook to a compute engine

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html

#### Defined in

actions/elasticmapreduce.ts:41

___

### CancelSteps

• **CancelSteps** = ``"elasticmapreduce:CancelSteps"``

Grants permission to cancel a pending step or steps in a running cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_CancelSteps.html

#### Defined in

actions/elasticmapreduce.ts:47

___

### CreateEditor

• **CreateEditor** = ``"elasticmapreduce:CreateEditor"``

Grants permission to create an EMR notebook

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-create.html

#### Defined in

actions/elasticmapreduce.ts:53

___

### CreatePersistentAppUI

• **CreatePersistentAppUI** = ``"elasticmapreduce:CreatePersistentAppUI"``

Grants permission to create a persistent application history server

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html

#### Defined in

actions/elasticmapreduce.ts:59

___

### CreateRepository

• **CreateRepository** = ``"elasticmapreduce:CreateRepository"``

Grants permission to create an EMR notebook repository

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor

#### Defined in

actions/elasticmapreduce.ts:65

___

### CreateSecurityConfiguration

• **CreateSecurityConfiguration** = ``"elasticmapreduce:CreateSecurityConfiguration"``

Grants permission to create a security configuration

See https://docs.aws.amazon.com/emr/latest/APIReference/API_CreateSecurityConfiguration.html

#### Defined in

actions/elasticmapreduce.ts:71

___

### CreateStudio

• **CreateStudio** = ``"elasticmapreduce:CreateStudio"``

Grants permission to create an EMR Studio

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:77

___

### CreateStudioPresignedUrl

• **CreateStudioPresignedUrl** = ``"elasticmapreduce:CreateStudioPresignedUrl"``

Grants permission to launch an EMR Studio using IAM authentication mode

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:83

___

### CreateStudioSessionMapping

• **CreateStudioSessionMapping** = ``"elasticmapreduce:CreateStudioSessionMapping"``

Grants permission to create an EMR Studio session mapping

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:89

___

### DeleteEditor

• **DeleteEditor** = ``"elasticmapreduce:DeleteEditor"``

Grants permission to delete an EMR notebook

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-deleting

#### Defined in

actions/elasticmapreduce.ts:95

___

### DeleteRepository

• **DeleteRepository** = ``"elasticmapreduce:DeleteRepository"``

Grants permission to delete an EMR notebook repository

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor

#### Defined in

actions/elasticmapreduce.ts:101

___

### DeleteSecurityConfiguration

• **DeleteSecurityConfiguration** = ``"elasticmapreduce:DeleteSecurityConfiguration"``

Grants permission to delete a security configuration

See https://docs.aws.amazon.com/emr/latest/APIReference/API_DeleteSecurityConfiguration.html

#### Defined in

actions/elasticmapreduce.ts:107

___

### DeleteStudio

• **DeleteStudio** = ``"elasticmapreduce:DeleteStudio"``

Grants permission to delete an EMR Studio

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:113

___

### DeleteStudioSessionMapping

• **DeleteStudioSessionMapping** = ``"elasticmapreduce:DeleteStudioSessionMapping"``

Grants permission to delete an EMR Studio session mapping

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:119

___

### DeleteWorkspaceAccess

• **DeleteWorkspaceAccess** = ``"elasticmapreduce:DeleteWorkspaceAccess"``

Grants permission to block an identity from opening a collaborative workspace

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html

#### Defined in

actions/elasticmapreduce.ts:125

___

### DescribeCluster

• **DescribeCluster** = ``"elasticmapreduce:DescribeCluster"``

Grants permission to get details about a cluster, including status, hardware an
d software configuration, VPC settings, and so on

See https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeCluster.html

#### Defined in

actions/elasticmapreduce.ts:132

___

### DescribeEditor

• **DescribeEditor** = ``"elasticmapreduce:DescribeEditor"``

Grants permission to view information about a notebook, including status, user,
role, tags, location, and more

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html

#### Defined in

actions/elasticmapreduce.ts:139

___

### DescribeJobFlows

• **DescribeJobFlows** = ``"elasticmapreduce:DescribeJobFlows"``

Grants permission to describe details of clusters (job flows). This API is depr
ecated and will eventually be removed. We recommend you use ListClusters, Descr
ibeCluster, ListSteps, ListInstanceGroups and ListBootstrapActions instead

See https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeJobFlows.html

#### Defined in

actions/elasticmapreduce.ts:147

___

### DescribeNotebookExecution

• **DescribeNotebookExecution** = ``"elasticmapreduce:DescribeNotebookExecution"``

Grants permission to view information about a notebook execution

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html

#### Defined in

actions/elasticmapreduce.ts:153

___

### DescribePersistentAppUI

• **DescribePersistentAppUI** = ``"elasticmapreduce:DescribePersistentAppUI"``

Grants permission to describe a persistent application history server

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html

#### Defined in

actions/elasticmapreduce.ts:159

___

### DescribeReleaseLabel

• **DescribeReleaseLabel** = ``"elasticmapreduce:DescribeReleaseLabel"``

Grants permission to view information about an EMR release, such as which appli
cations are supported

See https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeReleaseLabel.html

#### Defined in

actions/elasticmapreduce.ts:166

___

### DescribeRepository

• **DescribeRepository** = ``"elasticmapreduce:DescribeRepository"``

Grants permission to describe an EMR notebook repository

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor

#### Defined in

actions/elasticmapreduce.ts:172

___

### DescribeSecurityConfiguration

• **DescribeSecurityConfiguration** = ``"elasticmapreduce:DescribeSecurityConfiguration"``

Grants permission to get details of a security configuration

See https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeSecurityConfiguration.html

#### Defined in

actions/elasticmapreduce.ts:178

___

### DescribeStep

• **DescribeStep** = ``"elasticmapreduce:DescribeStep"``

Grants permission to get details about a cluster step

See https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeStep.html

#### Defined in

actions/elasticmapreduce.ts:184

___

### DescribeStudio

• **DescribeStudio** = ``"elasticmapreduce:DescribeStudio"``

Grants permission to view information about an EMR Studio

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:190

___

### DetachEditor

• **DetachEditor** = ``"elasticmapreduce:DetachEditor"``

Grants permission to detach an EMR notebook from a compute engine

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html

#### Defined in

actions/elasticmapreduce.ts:196

___

### GetAutoTerminationPolicy

• **GetAutoTerminationPolicy** = ``"elasticmapreduce:GetAutoTerminationPolicy"``

Grants permission to retrieve the auto-termination policy associated with a clu
ster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_GetAutoTerminationPolicy.html

#### Defined in

actions/elasticmapreduce.ts:203

___

### GetBlockPublicAccessConfiguration

• **GetBlockPublicAccessConfiguration** = ``"elasticmapreduce:GetBlockPublicAccessConfiguration"``

Grants permission to retrieve the EMR block public access configuration for the
AWS account in the Region

See https://docs.aws.amazon.com/emr/latest/APIReference/API_GetBlockPublicAccessConfiguration.html

#### Defined in

actions/elasticmapreduce.ts:210

___

### GetClusterSessionCredentials

• **GetClusterSessionCredentials** = ``"elasticmapreduce:GetClusterSessionCredentials"``

Grants permission to retrieve HTTP basic credentials associated with a given ex
ecution IAM Role for a fine-grained access control enabled EMR Cluster

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-steps-runtime-roles.html

#### Defined in

actions/elasticmapreduce.ts:217

___

### GetManagedScalingPolicy

• **GetManagedScalingPolicy** = ``"elasticmapreduce:GetManagedScalingPolicy"``

Grants permission to retrieve the managed scaling policy associated with a clus
ter

See https://docs.aws.amazon.com/emr/latest/APIReference/API_GetManagedScalingPolicy.html

#### Defined in

actions/elasticmapreduce.ts:224

___

### GetOnClusterAppUIPresignedURL

• **GetOnClusterAppUIPresignedURL** = ``"elasticmapreduce:GetOnClusterAppUIPresignedURL"``

Grants permission to get a presigned URL for an application history server runn
ing on the cluster

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html

#### Defined in

actions/elasticmapreduce.ts:231

___

### GetPersistentAppUIPresignedURL

• **GetPersistentAppUIPresignedURL** = ``"elasticmapreduce:GetPersistentAppUIPresignedURL"``

Grants permission to get a presigned URL for a persistent application history s
erver

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html

#### Defined in

actions/elasticmapreduce.ts:238

___

### GetStudioSessionMapping

• **GetStudioSessionMapping** = ``"elasticmapreduce:GetStudioSessionMapping"``

Grants permission to view information about an EMR Studio session mapping

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:244

___

### LinkRepository

• **LinkRepository** = ``"elasticmapreduce:LinkRepository"``

Grants permission to link an EMR notebook repository to EMR notebooks

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor

#### Defined in

actions/elasticmapreduce.ts:250

___

### ListBootstrapActions

• **ListBootstrapActions** = ``"elasticmapreduce:ListBootstrapActions"``

Grants permission to get details about the bootstrap actions associated with a
cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ListBootstrapActions.html

#### Defined in

actions/elasticmapreduce.ts:257

___

### ListClusters

• **ListClusters** = ``"elasticmapreduce:ListClusters"``

Grants permission to get the status of accessible clusters

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ListClusters.html

#### Defined in

actions/elasticmapreduce.ts:263

___

### ListEditors

• **ListEditors** = ``"elasticmapreduce:ListEditors"``

Grants permission to list summary information for accessible EMR notebooks

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html

#### Defined in

actions/elasticmapreduce.ts:269

___

### ListInstanceFleets

• **ListInstanceFleets** = ``"elasticmapreduce:ListInstanceFleets"``

Grants permission to get details of instance fleets in a cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceFleets.html

#### Defined in

actions/elasticmapreduce.ts:275

___

### ListInstanceGroups

• **ListInstanceGroups** = ``"elasticmapreduce:ListInstanceGroups"``

Grants permission to get details of instance groups in a cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceGroups.html

#### Defined in

actions/elasticmapreduce.ts:281

___

### ListInstances

• **ListInstances** = ``"elasticmapreduce:ListInstances"``

Grants permission to get details about the Amazon EC2 instances in a cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstances.html

#### Defined in

actions/elasticmapreduce.ts:287

___

### ListNotebookExecutions

• **ListNotebookExecutions** = ``"elasticmapreduce:ListNotebookExecutions"``

Grants permission to list summary information for notebook executions

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html

#### Defined in

actions/elasticmapreduce.ts:293

___

### ListReleaseLabels

• **ListReleaseLabels** = ``"elasticmapreduce:ListReleaseLabels"``

Grants permission to list and filter the available EMR releases in the current
region

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ListReleaseLabels.html

#### Defined in

actions/elasticmapreduce.ts:300

___

### ListRepositories

• **ListRepositories** = ``"elasticmapreduce:ListRepositories"``

Grants permission to list existing EMR notebook repositories

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor

#### Defined in

actions/elasticmapreduce.ts:306

___

### ListSecurityConfigurations

• **ListSecurityConfigurations** = ``"elasticmapreduce:ListSecurityConfigurations"``

Grants permission to list available security configurations in this account by
name, along with creation dates and times

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSecurityConfigurations.html

#### Defined in

actions/elasticmapreduce.ts:313

___

### ListSteps

• **ListSteps** = ``"elasticmapreduce:ListSteps"``

Grants permission to list steps associated with a cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSteps.html

#### Defined in

actions/elasticmapreduce.ts:319

___

### ListStudioSessionMappings

• **ListStudioSessionMappings** = ``"elasticmapreduce:ListStudioSessionMappings"``

Grants permission to list summary information about EMR Studio session mappings

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:325

___

### ListStudios

• **ListStudios** = ``"elasticmapreduce:ListStudios"``

Grants permission to list summary information about EMR Studios

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:331

___

### ListSupportedInstanceTypes

• **ListSupportedInstanceTypes** = ``"elasticmapreduce:ListSupportedInstanceTypes"``

Grants permission to list the Amazon EC2 instance types that an Amazon EMR rele
ase supports

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSupportedInstanceTypes.html

#### Defined in

actions/elasticmapreduce.ts:338

___

### ListWorkspaceAccessIdentities

• **ListWorkspaceAccessIdentities** = ``"elasticmapreduce:ListWorkspaceAccessIdentities"``

Grants permission to list identities that are granted access to a workspace

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html

#### Defined in

actions/elasticmapreduce.ts:344

___

### ModifyCluster

• **ModifyCluster** = ``"elasticmapreduce:ModifyCluster"``

Grants permission to change cluster settings such as number of steps that can b
e executed concurrently for a cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyCluster.html

#### Defined in

actions/elasticmapreduce.ts:351

___

### ModifyInstanceFleet

• **ModifyInstanceFleet** = ``"elasticmapreduce:ModifyInstanceFleet"``

Grants permission to change the target On-Demand and target Spot capacities for
a instance fleet

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceFleet.html

#### Defined in

actions/elasticmapreduce.ts:358

___

### ModifyInstanceGroups

• **ModifyInstanceGroups** = ``"elasticmapreduce:ModifyInstanceGroups"``

Grants permission to change the number and configuration of EC2 instances for a
n instance group

See https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceGroups.html

#### Defined in

actions/elasticmapreduce.ts:365

___

### OpenEditorInConsole

• **OpenEditorInConsole** = ``"elasticmapreduce:OpenEditorInConsole"``

Grants permission to launch the Jupyter notebook editor for an EMR notebook fro
m within the console

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor

#### Defined in

actions/elasticmapreduce.ts:372

___

### PutAutoScalingPolicy

• **PutAutoScalingPolicy** = ``"elasticmapreduce:PutAutoScalingPolicy"``

Grants permission to create or update an automatic scaling policy for a core in
stance group or task instance group

See https://docs.aws.amazon.com/emr/latest/APIReference/API_PutAutoScalingPolicy.html

#### Defined in

actions/elasticmapreduce.ts:379

___

### PutAutoTerminationPolicy

• **PutAutoTerminationPolicy** = ``"elasticmapreduce:PutAutoTerminationPolicy"``

Grants permission to create or update the auto-termination policy associated wi
th a cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_PutAutoTerminationPolicy.html

#### Defined in

actions/elasticmapreduce.ts:386

___

### PutBlockPublicAccessConfiguration

• **PutBlockPublicAccessConfiguration** = ``"elasticmapreduce:PutBlockPublicAccessConfiguration"``

Grants permission to create or update the EMR block public access configuration
for the AWS account in the Region

See https://docs.aws.amazon.com/emr/latest/APIReference/API_PutBlockPublicAccessConfiguration.html

#### Defined in

actions/elasticmapreduce.ts:393

___

### PutManagedScalingPolicy

• **PutManagedScalingPolicy** = ``"elasticmapreduce:PutManagedScalingPolicy"``

Grants permission to create or update the managed scaling policy associated wit
h a cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_PutManagedScalingPolicy.html

#### Defined in

actions/elasticmapreduce.ts:400

___

### PutWorkspaceAccess

• **PutWorkspaceAccess** = ``"elasticmapreduce:PutWorkspaceAccess"``

Grants permission to allow an identity to open a collaborative workspace

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html

#### Defined in

actions/elasticmapreduce.ts:406

___

### RemoveAutoScalingPolicy

• **RemoveAutoScalingPolicy** = ``"elasticmapreduce:RemoveAutoScalingPolicy"``

Grants permission to remove an automatic scaling policy from an instance group

See https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveAutoScalingPolicy.html

#### Defined in

actions/elasticmapreduce.ts:412

___

### RemoveAutoTerminationPolicy

• **RemoveAutoTerminationPolicy** = ``"elasticmapreduce:RemoveAutoTerminationPolicy"``

Grants permission to remove the auto-termination policy associated with a clust
er

See https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveAutoTerminationPolicy.html

#### Defined in

actions/elasticmapreduce.ts:419

___

### RemoveManagedScalingPolicy

• **RemoveManagedScalingPolicy** = ``"elasticmapreduce:RemoveManagedScalingPolicy"``

Grants permission to remove the managed scaling policy associated with a cluste
r

See https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveManagedScalingPolicy.html

#### Defined in

actions/elasticmapreduce.ts:426

___

### RemoveTags

• **RemoveTags** = ``"elasticmapreduce:RemoveTags"``

Grants permission to remove tags from an Amazon EMR resource

See https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveTags.html

#### Defined in

actions/elasticmapreduce.ts:432

___

### RunJobFlow

• **RunJobFlow** = ``"elasticmapreduce:RunJobFlow"``

Grants permission to create and launch a cluster (job flow)

See https://docs.aws.amazon.com/emr/latest/APIReference/API_RunJobFlow.html

#### Defined in

actions/elasticmapreduce.ts:438

___

### SetKeepJobFlowAliveWhenNoSteps

• **SetKeepJobFlowAliveWhenNoSteps** = ``"elasticmapreduce:SetKeepJobFlowAliveWhenNoSteps"``

Grants permission to add and remove auto terminate after step execution for a c
luster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_SetKeepJobFlowAliveWhenNoSteps.html

#### Defined in

actions/elasticmapreduce.ts:445

___

### SetTerminationProtection

• **SetTerminationProtection** = ``"elasticmapreduce:SetTerminationProtection"``

Grants permission to add and remove termination protection for a cluster

See https://docs.aws.amazon.com/emr/latest/APIReference/API_SetTerminationProtection.html

#### Defined in

actions/elasticmapreduce.ts:451

___

### SetVisibleToAllUsers

• **SetVisibleToAllUsers** = ``"elasticmapreduce:SetVisibleToAllUsers"``

Grants permission to set whether all AWS Identity and Access Management (IAM) u
sers in the AWS account can view a cluster. This API is deprecated and your clu
ster may be visible to all users in your account. To restrict cluster access us
ing an IAM policy, see AWS Identity and Access Management for Amazon EMR (https
://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html)

See https://docs.aws.amazon.com/emr/latest/APIReference/API_SetVisibleToAllUsers.html

#### Defined in

actions/elasticmapreduce.ts:461

___

### StartEditor

• **StartEditor** = ``"elasticmapreduce:StartEditor"``

Grants permission to start an EMR notebook

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html

#### Defined in

actions/elasticmapreduce.ts:467

___

### StartNotebookExecution

• **StartNotebookExecution** = ``"elasticmapreduce:StartNotebookExecution"``

Grants permission to start an EMR notebook execution

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html

#### Defined in

actions/elasticmapreduce.ts:473

___

### StopEditor

• **StopEditor** = ``"elasticmapreduce:StopEditor"``

Grants permission to shut down an EMR notebook

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html

#### Defined in

actions/elasticmapreduce.ts:479

___

### StopNotebookExecution

• **StopNotebookExecution** = ``"elasticmapreduce:StopNotebookExecution"``

Grants permission to stop notebook execution

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html

#### Defined in

actions/elasticmapreduce.ts:485

___

### TerminateJobFlows

• **TerminateJobFlows** = ``"elasticmapreduce:TerminateJobFlows"``

Grants permission to terminate a cluster (job flow)

See https://docs.aws.amazon.com/emr/latest/APIReference/API_TerminateJobFlows.html

#### Defined in

actions/elasticmapreduce.ts:491

___

### UnlinkRepository

• **UnlinkRepository** = ``"elasticmapreduce:UnlinkRepository"``

Grants permission to unlink an EMR notebook repository from EMR notebooks

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor

#### Defined in

actions/elasticmapreduce.ts:497

___

### UpdateEditor

• **UpdateEditor** = ``"elasticmapreduce:UpdateEditor"``

Grants permission to update an EMR notebook

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html

#### Defined in

actions/elasticmapreduce.ts:503

___

### UpdateRepository

• **UpdateRepository** = ``"elasticmapreduce:UpdateRepository"``

Grants permission to update an EMR notebook repository

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor

#### Defined in

actions/elasticmapreduce.ts:509

___

### UpdateStudio

• **UpdateStudio** = ``"elasticmapreduce:UpdateStudio"``

Grants permission to update information about an EMR Studio

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:515

___

### UpdateStudioSessionMapping

• **UpdateStudioSessionMapping** = ``"elasticmapreduce:UpdateStudioSessionMapping"``

Grants permission to update an EMR Studio session mapping

See https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html

#### Defined in

actions/elasticmapreduce.ts:521

___

### ViewEventsFromAllClustersInConsole

• **ViewEventsFromAllClustersInConsole** = ``"elasticmapreduce:ViewEventsFromAllClustersInConsole"``

Grants permission to use the EMR console to view events from all clusters

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticmapreduce.html

#### Defined in

actions/elasticmapreduce.ts:527
