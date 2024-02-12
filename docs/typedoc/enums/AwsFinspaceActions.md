[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsFinspaceActions

# Enumeration: AwsFinspaceActions

All IAM policy actions for Amazon FinSpace (FINSPACE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfinspace.html

2024-02-12T09:57:25.419Z

## Table of contents

### Enumeration Members

- [ConnectKxCluster](AwsFinspaceActions.md#connectkxcluster)
- [CreateEnvironment](AwsFinspaceActions.md#createenvironment)
- [CreateKxChangeset](AwsFinspaceActions.md#createkxchangeset)
- [CreateKxCluster](AwsFinspaceActions.md#createkxcluster)
- [CreateKxDatabase](AwsFinspaceActions.md#createkxdatabase)
- [CreateKxDataview](AwsFinspaceActions.md#createkxdataview)
- [CreateKxEnvironment](AwsFinspaceActions.md#createkxenvironment)
- [CreateKxScalingGroup](AwsFinspaceActions.md#createkxscalinggroup)
- [CreateKxUser](AwsFinspaceActions.md#createkxuser)
- [CreateKxVolume](AwsFinspaceActions.md#createkxvolume)
- [CreateUser](AwsFinspaceActions.md#createuser)
- [DeleteEnvironment](AwsFinspaceActions.md#deleteenvironment)
- [DeleteKxCluster](AwsFinspaceActions.md#deletekxcluster)
- [DeleteKxDatabase](AwsFinspaceActions.md#deletekxdatabase)
- [DeleteKxDataview](AwsFinspaceActions.md#deletekxdataview)
- [DeleteKxEnvironment](AwsFinspaceActions.md#deletekxenvironment)
- [DeleteKxScalingGroup](AwsFinspaceActions.md#deletekxscalinggroup)
- [DeleteKxUser](AwsFinspaceActions.md#deletekxuser)
- [DeleteKxVolume](AwsFinspaceActions.md#deletekxvolume)
- [GetEnvironment](AwsFinspaceActions.md#getenvironment)
- [GetKxChangeset](AwsFinspaceActions.md#getkxchangeset)
- [GetKxCluster](AwsFinspaceActions.md#getkxcluster)
- [GetKxConnectionString](AwsFinspaceActions.md#getkxconnectionstring)
- [GetKxDatabase](AwsFinspaceActions.md#getkxdatabase)
- [GetKxDataview](AwsFinspaceActions.md#getkxdataview)
- [GetKxEnvironment](AwsFinspaceActions.md#getkxenvironment)
- [GetKxScalingGroup](AwsFinspaceActions.md#getkxscalinggroup)
- [GetKxUser](AwsFinspaceActions.md#getkxuser)
- [GetKxVolume](AwsFinspaceActions.md#getkxvolume)
- [GetLoadSampleDataSetGroupIntoEnvironmentStatus](AwsFinspaceActions.md#getloadsampledatasetgroupintoenvironmentstatus)
- [GetUser](AwsFinspaceActions.md#getuser)
- [ListEnvironments](AwsFinspaceActions.md#listenvironments)
- [ListKxChangesets](AwsFinspaceActions.md#listkxchangesets)
- [ListKxClusterNodes](AwsFinspaceActions.md#listkxclusternodes)
- [ListKxClusters](AwsFinspaceActions.md#listkxclusters)
- [ListKxDatabases](AwsFinspaceActions.md#listkxdatabases)
- [ListKxDataviews](AwsFinspaceActions.md#listkxdataviews)
- [ListKxEnvironments](AwsFinspaceActions.md#listkxenvironments)
- [ListKxScalingGroups](AwsFinspaceActions.md#listkxscalinggroups)
- [ListKxUsers](AwsFinspaceActions.md#listkxusers)
- [ListKxVolumes](AwsFinspaceActions.md#listkxvolumes)
- [ListTagsForResource](AwsFinspaceActions.md#listtagsforresource)
- [ListUsers](AwsFinspaceActions.md#listusers)
- [LoadSampleDataSetGroupIntoEnvironment](AwsFinspaceActions.md#loadsampledatasetgroupintoenvironment)
- [MountKxDatabase](AwsFinspaceActions.md#mountkxdatabase)
- [ResetUserPassword](AwsFinspaceActions.md#resetuserpassword)
- [TagResource](AwsFinspaceActions.md#tagresource)
- [UntagResource](AwsFinspaceActions.md#untagresource)
- [UpdateEnvironment](AwsFinspaceActions.md#updateenvironment)
- [UpdateKxClusterCodeConfiguration](AwsFinspaceActions.md#updatekxclustercodeconfiguration)
- [UpdateKxClusterDatabases](AwsFinspaceActions.md#updatekxclusterdatabases)
- [UpdateKxDatabase](AwsFinspaceActions.md#updatekxdatabase)
- [UpdateKxDataview](AwsFinspaceActions.md#updatekxdataview)
- [UpdateKxEnvironment](AwsFinspaceActions.md#updatekxenvironment)
- [UpdateKxEnvironmentNetwork](AwsFinspaceActions.md#updatekxenvironmentnetwork)
- [UpdateKxUser](AwsFinspaceActions.md#updatekxuser)
- [UpdateKxVolume](AwsFinspaceActions.md#updatekxvolume)
- [UpdateUser](AwsFinspaceActions.md#updateuser)

## Enumeration Members

### ConnectKxCluster

• **ConnectKxCluster** = ``"finspace:ConnectKxCluster"``

Grants permission to connect to a kdb cluster

See https://docs.aws.amazon.com/finspace/latest/userguide/interacting-with-kdb-clusters.html

#### Defined in

actions/finspace.ts:17

___

### CreateEnvironment

• **CreateEnvironment** = ``"finspace:CreateEnvironment"``

Grants permission to create a FinSpace environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateEnvironment.html

#### Defined in

actions/finspace.ts:23

___

### CreateKxChangeset

• **CreateKxChangeset** = ``"finspace:CreateKxChangeset"``

Grants permission to create a changeset for a kdb database

See https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxChangeset.html

#### Defined in

actions/finspace.ts:29

___

### CreateKxCluster

• **CreateKxCluster** = ``"finspace:CreateKxCluster"``

Grants permission to create a cluster in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxCluster.html

#### Defined in

actions/finspace.ts:35

___

### CreateKxDatabase

• **CreateKxDatabase** = ``"finspace:CreateKxDatabase"``

Grants permission to create a kdb database in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxDatabase.html

#### Defined in

actions/finspace.ts:41

___

### CreateKxDataview

• **CreateKxDataview** = ``"finspace:CreateKxDataview"``

Grants permission to create a dataview in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxDataview.html

#### Defined in

actions/finspace.ts:47

___

### CreateKxEnvironment

• **CreateKxEnvironment** = ``"finspace:CreateKxEnvironment"``

Grants permission to create a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxEnvironment.html

#### Defined in

actions/finspace.ts:53

___

### CreateKxScalingGroup

• **CreateKxScalingGroup** = ``"finspace:CreateKxScalingGroup"``

Grants permission to create a scaling group in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxScalingGroup.html

#### Defined in

actions/finspace.ts:59

___

### CreateKxUser

• **CreateKxUser** = ``"finspace:CreateKxUser"``

Grants permission to create a user in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxUser.html

#### Defined in

actions/finspace.ts:65

___

### CreateKxVolume

• **CreateKxVolume** = ``"finspace:CreateKxVolume"``

Grants permission to create a volume in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateKxVolume.html

#### Defined in

actions/finspace.ts:71

___

### CreateUser

• **CreateUser** = ``"finspace:CreateUser"``

Grants permission to create a FinSpace user

See https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html

#### Defined in

actions/finspace.ts:77

___

### DeleteEnvironment

• **DeleteEnvironment** = ``"finspace:DeleteEnvironment"``

Grants permission to delete a FinSpace environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteEnvironment.html

#### Defined in

actions/finspace.ts:83

___

### DeleteKxCluster

• **DeleteKxCluster** = ``"finspace:DeleteKxCluster"``

Grants permission to delete a kdb cluster

See https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxCluster.html

#### Defined in

actions/finspace.ts:89

___

### DeleteKxDatabase

• **DeleteKxDatabase** = ``"finspace:DeleteKxDatabase"``

Grants permission to delete a kdb database

See https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxDatabase.html

#### Defined in

actions/finspace.ts:95

___

### DeleteKxDataview

• **DeleteKxDataview** = ``"finspace:DeleteKxDataview"``

Grants permission to delete a dataview in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxDataview.html

#### Defined in

actions/finspace.ts:101

___

### DeleteKxEnvironment

• **DeleteKxEnvironment** = ``"finspace:DeleteKxEnvironment"``

Grants permission to delete a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxEnvironment.html

#### Defined in

actions/finspace.ts:107

___

### DeleteKxScalingGroup

• **DeleteKxScalingGroup** = ``"finspace:DeleteKxScalingGroup"``

Grants permission to delete a scaling group in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxScalingGroup.html

#### Defined in

actions/finspace.ts:113

___

### DeleteKxUser

• **DeleteKxUser** = ``"finspace:DeleteKxUser"``

Grants permission to delete a kdb user

See https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxUser.html

#### Defined in

actions/finspace.ts:119

___

### DeleteKxVolume

• **DeleteKxVolume** = ``"finspace:DeleteKxVolume"``

Grants permission to delete a volume in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteKxVolume.html

#### Defined in

actions/finspace.ts:125

___

### GetEnvironment

• **GetEnvironment** = ``"finspace:GetEnvironment"``

Grants permission to describe a FinSpace environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_GetEnvironment.html

#### Defined in

actions/finspace.ts:131

___

### GetKxChangeset

• **GetKxChangeset** = ``"finspace:GetKxChangeset"``

Grants permission to describe a changeset for a kdb database

See https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxChangeset.html

#### Defined in

actions/finspace.ts:137

___

### GetKxCluster

• **GetKxCluster** = ``"finspace:GetKxCluster"``

Grants permission to describe a cluster in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxCluster.html

#### Defined in

actions/finspace.ts:143

___

### GetKxConnectionString

• **GetKxConnectionString** = ``"finspace:GetKxConnectionString"``

Grants permission to retrieve a connection string for kdb clusters

See https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxConnectionString.html

#### Defined in

actions/finspace.ts:149

___

### GetKxDatabase

• **GetKxDatabase** = ``"finspace:GetKxDatabase"``

Grants permission to describe a kdb database

See https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxDatabase.html

#### Defined in

actions/finspace.ts:155

___

### GetKxDataview

• **GetKxDataview** = ``"finspace:GetKxDataview"``

Grants permission to describe a databiew in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxDataview.html

#### Defined in

actions/finspace.ts:161

___

### GetKxEnvironment

• **GetKxEnvironment** = ``"finspace:GetKxEnvironment"``

Grants permission to describe a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxEnvironment.html

#### Defined in

actions/finspace.ts:167

___

### GetKxScalingGroup

• **GetKxScalingGroup** = ``"finspace:GetKxScalingGroup"``

Grants permission to describe a scaling group in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxScalingGroup.html

#### Defined in

actions/finspace.ts:173

___

### GetKxUser

• **GetKxUser** = ``"finspace:GetKxUser"``

Grants permission to describe a kdb user

See https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxUser.html

#### Defined in

actions/finspace.ts:179

___

### GetKxVolume

• **GetKxVolume** = ``"finspace:GetKxVolume"``

Grants permission to describe a volume in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_GetKxVolume.html

#### Defined in

actions/finspace.ts:185

___

### GetLoadSampleDataSetGroupIntoEnvironmentStatus

• **GetLoadSampleDataSetGroupIntoEnvironmentStatus** = ``"finspace:GetLoadSampleDataSetGroupIntoEnvironmentStatus"``

Grants permission to request status of the loading of sample data bundle

See https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html

#### Defined in

actions/finspace.ts:191

___

### GetUser

• **GetUser** = ``"finspace:GetUser"``

Grants permission to describe a FinSpace user

See https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html

#### Defined in

actions/finspace.ts:197

___

### ListEnvironments

• **ListEnvironments** = ``"finspace:ListEnvironments"``

Grants permission to list FinSpace environments in the AWS account

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListEnvironments.html

#### Defined in

actions/finspace.ts:203

___

### ListKxChangesets

• **ListKxChangesets** = ``"finspace:ListKxChangesets"``

Grants permission to list changesets for a kdb database

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxChangesets.html

#### Defined in

actions/finspace.ts:209

___

### ListKxClusterNodes

• **ListKxClusterNodes** = ``"finspace:ListKxClusterNodes"``

Grants permission to list cluster nodes in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxClusterNodes.html

#### Defined in

actions/finspace.ts:215

___

### ListKxClusters

• **ListKxClusters** = ``"finspace:ListKxClusters"``

Grants permission to list clusters in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxClusters.html

#### Defined in

actions/finspace.ts:221

___

### ListKxDatabases

• **ListKxDatabases** = ``"finspace:ListKxDatabases"``

Grants permission to list kdb databases in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxDatabases.html

#### Defined in

actions/finspace.ts:227

___

### ListKxDataviews

• **ListKxDataviews** = ``"finspace:ListKxDataviews"``

Grants permission to list dataviews in a database

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxDataviews.html

#### Defined in

actions/finspace.ts:233

___

### ListKxEnvironments

• **ListKxEnvironments** = ``"finspace:ListKxEnvironments"``

Grants permission to list managed kdb environments

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxEnvironments.html

#### Defined in

actions/finspace.ts:239

___

### ListKxScalingGroups

• **ListKxScalingGroups** = ``"finspace:ListKxScalingGroups"``

Grants permission to list scaling groups in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxScalingGroups.html

#### Defined in

actions/finspace.ts:245

___

### ListKxUsers

• **ListKxUsers** = ``"finspace:ListKxUsers"``

Grants permission to list users in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxUsers.html

#### Defined in

actions/finspace.ts:251

___

### ListKxVolumes

• **ListKxVolumes** = ``"finspace:ListKxVolumes"``

Grants permission to list volumes in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListKxVolumes.html

#### Defined in

actions/finspace.ts:257

___

### ListTagsForResource

• **ListTagsForResource** = ``"finspace:ListTagsForResource"``

Grants permission to return a list of tags for a resource

See https://docs.aws.amazon.com/finspace/latest/management-api/API_ListTagsForResource.html

#### Defined in

actions/finspace.ts:263

___

### ListUsers

• **ListUsers** = ``"finspace:ListUsers"``

Grants permission to list FinSpace users in an environment

See https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html

#### Defined in

actions/finspace.ts:269

___

### LoadSampleDataSetGroupIntoEnvironment

• **LoadSampleDataSetGroupIntoEnvironment** = ``"finspace:LoadSampleDataSetGroupIntoEnvironment"``

Grants permission to load sample data bundle into your FinSpace environment

See https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html

#### Defined in

actions/finspace.ts:275

___

### MountKxDatabase

• **MountKxDatabase** = ``"finspace:MountKxDatabase"``

Grants permission to mount a database to a kdb cluster

See https://docs.aws.amazon.com/finspace/latest/userguide/finspace-managed-kdb-db.html

#### Defined in

actions/finspace.ts:281

___

### ResetUserPassword

• **ResetUserPassword** = ``"finspace:ResetUserPassword"``

Grants permission to reset the password for a FinSpace user

See https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html

#### Defined in

actions/finspace.ts:287

___

### TagResource

• **TagResource** = ``"finspace:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/finspace/latest/management-api/API_TagResource.html

#### Defined in

actions/finspace.ts:293

___

### UntagResource

• **UntagResource** = ``"finspace:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/finspace/latest/management-api/API_UntagResource.html

#### Defined in

actions/finspace.ts:299

___

### UpdateEnvironment

• **UpdateEnvironment** = ``"finspace:UpdateEnvironment"``

Grants permission to update a FinSpace environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateEnvironment.html

#### Defined in

actions/finspace.ts:305

___

### UpdateKxClusterCodeConfiguration

• **UpdateKxClusterCodeConfiguration** = ``"finspace:UpdateKxClusterCodeConfiguration"``

Grants permission to update code configuration for a cluster in a managed kdb e
nvironment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxClusterCodeConfiguration.html

#### Defined in

actions/finspace.ts:312

___

### UpdateKxClusterDatabases

• **UpdateKxClusterDatabases** = ``"finspace:UpdateKxClusterDatabases"``

Grants permission to update databases for a cluster in a managed kdb environmen
t

See https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxClusterDatabases.html

#### Defined in

actions/finspace.ts:319

___

### UpdateKxDatabase

• **UpdateKxDatabase** = ``"finspace:UpdateKxDatabase"``

Grants permission to update a kdb database

See https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxDatabase.html

#### Defined in

actions/finspace.ts:325

___

### UpdateKxDataview

• **UpdateKxDataview** = ``"finspace:UpdateKxDataview"``

Grants permission to update a dataview in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxDataview.html

#### Defined in

actions/finspace.ts:331

___

### UpdateKxEnvironment

• **UpdateKxEnvironment** = ``"finspace:UpdateKxEnvironment"``

Grants permission to update a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxEnvironment.html

#### Defined in

actions/finspace.ts:337

___

### UpdateKxEnvironmentNetwork

• **UpdateKxEnvironmentNetwork** = ``"finspace:UpdateKxEnvironmentNetwork"``

Grants permission to update the network for a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxEnvironmentNetwork.html

#### Defined in

actions/finspace.ts:343

___

### UpdateKxUser

• **UpdateKxUser** = ``"finspace:UpdateKxUser"``

Grants permission to update a kdb user

See https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxUser.html

#### Defined in

actions/finspace.ts:349

___

### UpdateKxVolume

• **UpdateKxVolume** = ``"finspace:UpdateKxVolume"``

Grants permission to update a volume in a managed kdb environment

See https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateKxVolume.html

#### Defined in

actions/finspace.ts:355

___

### UpdateUser

• **UpdateUser** = ``"finspace:UpdateUser"``

Grants permission to update a FinSpace user

See https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html

#### Defined in

actions/finspace.ts:361
