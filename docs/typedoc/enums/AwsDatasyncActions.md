[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDatasyncActions

# Enumeration: AwsDatasyncActions

All IAM policy actions for AWS DataSync (DATASYNC)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatasync.html

2024-02-12T09:56:54.106Z

## Table of contents

### Enumeration Members

- [AddStorageSystem](AwsDatasyncActions.md#addstoragesystem)
- [CancelTaskExecution](AwsDatasyncActions.md#canceltaskexecution)
- [CreateAgent](AwsDatasyncActions.md#createagent)
- [CreateLocationAzureBlob](AwsDatasyncActions.md#createlocationazureblob)
- [CreateLocationEfs](AwsDatasyncActions.md#createlocationefs)
- [CreateLocationFsxLustre](AwsDatasyncActions.md#createlocationfsxlustre)
- [CreateLocationFsxOntap](AwsDatasyncActions.md#createlocationfsxontap)
- [CreateLocationFsxOpenZfs](AwsDatasyncActions.md#createlocationfsxopenzfs)
- [CreateLocationFsxWindows](AwsDatasyncActions.md#createlocationfsxwindows)
- [CreateLocationHdfs](AwsDatasyncActions.md#createlocationhdfs)
- [CreateLocationNfs](AwsDatasyncActions.md#createlocationnfs)
- [CreateLocationObjectStorage](AwsDatasyncActions.md#createlocationobjectstorage)
- [CreateLocationS3](AwsDatasyncActions.md#createlocations3)
- [CreateLocationSmb](AwsDatasyncActions.md#createlocationsmb)
- [CreateTask](AwsDatasyncActions.md#createtask)
- [DeleteAgent](AwsDatasyncActions.md#deleteagent)
- [DeleteLocation](AwsDatasyncActions.md#deletelocation)
- [DeleteTask](AwsDatasyncActions.md#deletetask)
- [DescribeAgent](AwsDatasyncActions.md#describeagent)
- [DescribeDiscoveryJob](AwsDatasyncActions.md#describediscoveryjob)
- [DescribeLocationAzureBlob](AwsDatasyncActions.md#describelocationazureblob)
- [DescribeLocationEfs](AwsDatasyncActions.md#describelocationefs)
- [DescribeLocationFsxLustre](AwsDatasyncActions.md#describelocationfsxlustre)
- [DescribeLocationFsxOntap](AwsDatasyncActions.md#describelocationfsxontap)
- [DescribeLocationFsxOpenZfs](AwsDatasyncActions.md#describelocationfsxopenzfs)
- [DescribeLocationFsxWindows](AwsDatasyncActions.md#describelocationfsxwindows)
- [DescribeLocationHdfs](AwsDatasyncActions.md#describelocationhdfs)
- [DescribeLocationNfs](AwsDatasyncActions.md#describelocationnfs)
- [DescribeLocationObjectStorage](AwsDatasyncActions.md#describelocationobjectstorage)
- [DescribeLocationS3](AwsDatasyncActions.md#describelocations3)
- [DescribeLocationSmb](AwsDatasyncActions.md#describelocationsmb)
- [DescribeStorageSystem](AwsDatasyncActions.md#describestoragesystem)
- [DescribeStorageSystemResourceMetrics](AwsDatasyncActions.md#describestoragesystemresourcemetrics)
- [DescribeStorageSystemResources](AwsDatasyncActions.md#describestoragesystemresources)
- [DescribeTask](AwsDatasyncActions.md#describetask)
- [DescribeTaskExecution](AwsDatasyncActions.md#describetaskexecution)
- [GenerateRecommendations](AwsDatasyncActions.md#generaterecommendations)
- [ListAgents](AwsDatasyncActions.md#listagents)
- [ListDiscoveryJobs](AwsDatasyncActions.md#listdiscoveryjobs)
- [ListLocations](AwsDatasyncActions.md#listlocations)
- [ListStorageSystems](AwsDatasyncActions.md#liststoragesystems)
- [ListTagsForResource](AwsDatasyncActions.md#listtagsforresource)
- [ListTaskExecutions](AwsDatasyncActions.md#listtaskexecutions)
- [ListTasks](AwsDatasyncActions.md#listtasks)
- [RemoveStorageSystem](AwsDatasyncActions.md#removestoragesystem)
- [StartDiscoveryJob](AwsDatasyncActions.md#startdiscoveryjob)
- [StartTaskExecution](AwsDatasyncActions.md#starttaskexecution)
- [StopDiscoveryJob](AwsDatasyncActions.md#stopdiscoveryjob)
- [TagResource](AwsDatasyncActions.md#tagresource)
- [UntagResource](AwsDatasyncActions.md#untagresource)
- [UpdateAgent](AwsDatasyncActions.md#updateagent)
- [UpdateDiscoveryJob](AwsDatasyncActions.md#updatediscoveryjob)
- [UpdateLocationAzureBlob](AwsDatasyncActions.md#updatelocationazureblob)
- [UpdateLocationHdfs](AwsDatasyncActions.md#updatelocationhdfs)
- [UpdateLocationNfs](AwsDatasyncActions.md#updatelocationnfs)
- [UpdateLocationObjectStorage](AwsDatasyncActions.md#updatelocationobjectstorage)
- [UpdateLocationSmb](AwsDatasyncActions.md#updatelocationsmb)
- [UpdateStorageSystem](AwsDatasyncActions.md#updatestoragesystem)
- [UpdateTask](AwsDatasyncActions.md#updatetask)
- [UpdateTaskExecution](AwsDatasyncActions.md#updatetaskexecution)

## Enumeration Members

### AddStorageSystem

• **AddStorageSystem** = ``"datasync:AddStorageSystem"``

Grants permission to create a storage system

See https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html

#### Defined in

actions/datasync.ts:17

___

### CancelTaskExecution

• **CancelTaskExecution** = ``"datasync:CancelTaskExecution"``

Grants permission to cancel execution of a sync task

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CancelTaskExecution.html

#### Defined in

actions/datasync.ts:23

___

### CreateAgent

• **CreateAgent** = ``"datasync:CreateAgent"``

Grants permission to activate an agent that you have deployed on your host

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html

#### Defined in

actions/datasync.ts:29

___

### CreateLocationAzureBlob

• **CreateLocationAzureBlob** = ``"datasync:CreateLocationAzureBlob"``

Grants permission to create an endpoint for a Microsoft Azure Blob Storage cont
ainer

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationAzureBlob.html

#### Defined in

actions/datasync.ts:36

___

### CreateLocationEfs

• **CreateLocationEfs** = ``"datasync:CreateLocationEfs"``

Grants permission to create an endpoint for an Amazon EFS file system

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationEfs.html

#### Defined in

actions/datasync.ts:42

___

### CreateLocationFsxLustre

• **CreateLocationFsxLustre** = ``"datasync:CreateLocationFsxLustre"``

Grants permission to create an endpoint for an Amazon Fsx Lustre

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxLustre.html

#### Defined in

actions/datasync.ts:48

___

### CreateLocationFsxOntap

• **CreateLocationFsxOntap** = ``"datasync:CreateLocationFsxOntap"``

Grants permission to create an endpoint for Amazon FSx for ONTAP

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxOntap.html

#### Defined in

actions/datasync.ts:54

___

### CreateLocationFsxOpenZfs

• **CreateLocationFsxOpenZfs** = ``"datasync:CreateLocationFsxOpenZfs"``

Grants permission to create an endpoint for Amazon FSx for OpenZFS

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxOpenZfs.html

#### Defined in

actions/datasync.ts:60

___

### CreateLocationFsxWindows

• **CreateLocationFsxWindows** = ``"datasync:CreateLocationFsxWindows"``

Grants permission to create an endpoint for an Amazon FSx Windows File Server f
ile system

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxWindows.html

#### Defined in

actions/datasync.ts:67

___

### CreateLocationHdfs

• **CreateLocationHdfs** = ``"datasync:CreateLocationHdfs"``

Grants permission to create an endpoint for an Amazon Hdfs

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationHdfs.html

#### Defined in

actions/datasync.ts:73

___

### CreateLocationNfs

• **CreateLocationNfs** = ``"datasync:CreateLocationNfs"``

Grants permission to create an endpoint for a NFS file system

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationNfs.html

#### Defined in

actions/datasync.ts:79

___

### CreateLocationObjectStorage

• **CreateLocationObjectStorage** = ``"datasync:CreateLocationObjectStorage"``

Grants permission to create an endpoint for a self-managed object storage bucke
t

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationObjectStorage.html

#### Defined in

actions/datasync.ts:86

___

### CreateLocationS3

• **CreateLocationS3** = ``"datasync:CreateLocationS3"``

Grants permission to create an endpoint for an Amazon S3 bucket

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationS3.html

#### Defined in

actions/datasync.ts:92

___

### CreateLocationSmb

• **CreateLocationSmb** = ``"datasync:CreateLocationSmb"``

Grants permission to create an endpoint for an SMB file system

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationSmb.html

#### Defined in

actions/datasync.ts:98

___

### CreateTask

• **CreateTask** = ``"datasync:CreateTask"``

Grants permission to create a sync task

See https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html

#### Defined in

actions/datasync.ts:104

___

### DeleteAgent

• **DeleteAgent** = ``"datasync:DeleteAgent"``

Grants permission to delete an agent

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteAgent.html

#### Defined in

actions/datasync.ts:110

___

### DeleteLocation

• **DeleteLocation** = ``"datasync:DeleteLocation"``

Grants permission to delete a location used by AWS DataSync

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteLocation.html

#### Defined in

actions/datasync.ts:116

___

### DeleteTask

• **DeleteTask** = ``"datasync:DeleteTask"``

Grants permission to delete a sync task

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteTask.html

#### Defined in

actions/datasync.ts:122

___

### DescribeAgent

• **DescribeAgent** = ``"datasync:DescribeAgent"``

Grants permission to view metadata such as name, network interfaces, and the st
atus (that is, whether the agent is running or not) about a sync agent

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html

#### Defined in

actions/datasync.ts:129

___

### DescribeDiscoveryJob

• **DescribeDiscoveryJob** = ``"datasync:DescribeDiscoveryJob"``

Grants permission to describe metadata about a discovery job

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeDiscoveryJob.html

#### Defined in

actions/datasync.ts:135

___

### DescribeLocationAzureBlob

• **DescribeLocationAzureBlob** = ``"datasync:DescribeLocationAzureBlob"``

Grants permission to view metadata, such as the path information about an Azure
Blob Storage sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationAzureBlob.html

#### Defined in

actions/datasync.ts:142

___

### DescribeLocationEfs

• **DescribeLocationEfs** = ``"datasync:DescribeLocationEfs"``

Grants permission to view metadata, such as the path information about an Amazo
n EFS sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationEfs.html

#### Defined in

actions/datasync.ts:149

___

### DescribeLocationFsxLustre

• **DescribeLocationFsxLustre** = ``"datasync:DescribeLocationFsxLustre"``

Grants permission to view metadata, such as the path information about an Amazo
n FSx Lustre sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxLustre.html

#### Defined in

actions/datasync.ts:156

___

### DescribeLocationFsxOntap

• **DescribeLocationFsxOntap** = ``"datasync:DescribeLocationFsxOntap"``

Grants permission to view metadata, such as the path information about an Amazo
n FSx for ONTAP sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxOntap.html

#### Defined in

actions/datasync.ts:163

___

### DescribeLocationFsxOpenZfs

• **DescribeLocationFsxOpenZfs** = ``"datasync:DescribeLocationFsxOpenZfs"``

Grants permission to view metadata, such as the path information about an Amazo
n FSx OpenZFS sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxOpenZfs.html

#### Defined in

actions/datasync.ts:170

___

### DescribeLocationFsxWindows

• **DescribeLocationFsxWindows** = ``"datasync:DescribeLocationFsxWindows"``

Grants permission to view metadata, such as the path information about an Amazo
n FSx Windows sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxWindows.html

#### Defined in

actions/datasync.ts:177

___

### DescribeLocationHdfs

• **DescribeLocationHdfs** = ``"datasync:DescribeLocationHdfs"``

Grants permission to view metadata, such as the path information about an Amazo
n HDFS sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationHdfs.html

#### Defined in

actions/datasync.ts:184

___

### DescribeLocationNfs

• **DescribeLocationNfs** = ``"datasync:DescribeLocationNfs"``

Grants permission to view metadata, such as the path information, about a NFS s
ync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationNfs.html

#### Defined in

actions/datasync.ts:191

___

### DescribeLocationObjectStorage

• **DescribeLocationObjectStorage** = ``"datasync:DescribeLocationObjectStorage"``

Grants permission to view metadata about a self-managed object storage server l
ocation

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationObjectStorage.html

#### Defined in

actions/datasync.ts:198

___

### DescribeLocationS3

• **DescribeLocationS3** = ``"datasync:DescribeLocationS3"``

Grants permission to view metadata, such as bucket name, about an Amazon S3 buc
ket sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationS3.html

#### Defined in

actions/datasync.ts:205

___

### DescribeLocationSmb

• **DescribeLocationSmb** = ``"datasync:DescribeLocationSmb"``

Grants permission to view metadata, such as the path information, about an SMB
sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationSmb.html

#### Defined in

actions/datasync.ts:212

___

### DescribeStorageSystem

• **DescribeStorageSystem** = ``"datasync:DescribeStorageSystem"``

Grants permission to view metadata about a storage system

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystem.html

#### Defined in

actions/datasync.ts:218

___

### DescribeStorageSystemResourceMetrics

• **DescribeStorageSystemResourceMetrics** = ``"datasync:DescribeStorageSystemResourceMetrics"``

Grants permission to describe resource metrics collected by a discovery job

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResourceMetrics.html

#### Defined in

actions/datasync.ts:224

___

### DescribeStorageSystemResources

• **DescribeStorageSystemResources** = ``"datasync:DescribeStorageSystemResources"``

Grants permission to describe resources identified by a discovery job

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html

#### Defined in

actions/datasync.ts:230

___

### DescribeTask

• **DescribeTask** = ``"datasync:DescribeTask"``

Grants permission to view metadata about a sync task

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTask.html

#### Defined in

actions/datasync.ts:236

___

### DescribeTaskExecution

• **DescribeTaskExecution** = ``"datasync:DescribeTaskExecution"``

Grants permission to view metadata about a sync task that is being executed

See https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTaskExecution.html

#### Defined in

actions/datasync.ts:242

___

### GenerateRecommendations

• **GenerateRecommendations** = ``"datasync:GenerateRecommendations"``

Grants permission to generate recommendations for a resource identified by a di
scovery job

See https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html

#### Defined in

actions/datasync.ts:249

___

### ListAgents

• **ListAgents** = ``"datasync:ListAgents"``

Grants permission to list agents owned by an AWS account in a region specified
in the request

See https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html

#### Defined in

actions/datasync.ts:256

___

### ListDiscoveryJobs

• **ListDiscoveryJobs** = ``"datasync:ListDiscoveryJobs"``

Grants permission to list discovery jobs

See https://docs.aws.amazon.com/datasync/latest/userguide/API_ListDiscoveryJobs.html

#### Defined in

actions/datasync.ts:262

___

### ListLocations

• **ListLocations** = ``"datasync:ListLocations"``

Grants permission to list source and destination sync locations

See https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html

#### Defined in

actions/datasync.ts:268

___

### ListStorageSystems

• **ListStorageSystems** = ``"datasync:ListStorageSystems"``

Grants permission to list storage systems

See https://docs.aws.amazon.com/datasync/latest/userguide/API_ListStorageSystems.html

#### Defined in

actions/datasync.ts:274

___

### ListTagsForResource

• **ListTagsForResource** = ``"datasync:ListTagsForResource"``

Grants permission to list tags that have been added to the specified resource

See https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html

#### Defined in

actions/datasync.ts:280

___

### ListTaskExecutions

• **ListTaskExecutions** = ``"datasync:ListTaskExecutions"``

Grants permission to list executed sync tasks

See https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html

#### Defined in

actions/datasync.ts:286

___

### ListTasks

• **ListTasks** = ``"datasync:ListTasks"``

Grants permission to list of all the sync tasks

See https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html

#### Defined in

actions/datasync.ts:292

___

### RemoveStorageSystem

• **RemoveStorageSystem** = ``"datasync:RemoveStorageSystem"``

Grants permission to delete a storage system

See https://docs.aws.amazon.com/datasync/latest/userguide/API_RemoveStorageSystem.html

#### Defined in

actions/datasync.ts:298

___

### StartDiscoveryJob

• **StartDiscoveryJob** = ``"datasync:StartDiscoveryJob"``

Grants permission to start a discovery job for a storage system

See https://docs.aws.amazon.com/datasync/latest/userguide/API_StartDiscoveryJob.html

#### Defined in

actions/datasync.ts:304

___

### StartTaskExecution

• **StartTaskExecution** = ``"datasync:StartTaskExecution"``

Grants permission to start a specific invocation of a sync task

See https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html

#### Defined in

actions/datasync.ts:310

___

### StopDiscoveryJob

• **StopDiscoveryJob** = ``"datasync:StopDiscoveryJob"``

Grants permission to stop a discovery job

See https://docs.aws.amazon.com/datasync/latest/userguide/API_StopDiscoveryJob.html

#### Defined in

actions/datasync.ts:316

___

### TagResource

• **TagResource** = ``"datasync:TagResource"``

Grants permission to apply a key-value pair to an AWS resource

See https://docs.aws.amazon.com/datasync/latest/userguide/API_TagResource.html

#### Defined in

actions/datasync.ts:322

___

### UntagResource

• **UntagResource** = ``"datasync:UntagResource"``

Grants permission to remove one or more tags from the specified resource

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UntagResource.html

#### Defined in

actions/datasync.ts:328

___

### UpdateAgent

• **UpdateAgent** = ``"datasync:UpdateAgent"``

Grants permission to update the name of an agent

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateAgent.html

#### Defined in

actions/datasync.ts:334

___

### UpdateDiscoveryJob

• **UpdateDiscoveryJob** = ``"datasync:UpdateDiscoveryJob"``

Grants permission to update a discovery job

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateDiscoveryJob.html

#### Defined in

actions/datasync.ts:340

___

### UpdateLocationAzureBlob

• **UpdateLocationAzureBlob** = ``"datasync:UpdateLocationAzureBlob"``

Grants permission to update an Azure Blob Storage sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationAzureBlob.html

#### Defined in

actions/datasync.ts:346

___

### UpdateLocationHdfs

• **UpdateLocationHdfs** = ``"datasync:UpdateLocationHdfs"``

Grants permission to update an HDFS sync Location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationHdfs.html

#### Defined in

actions/datasync.ts:352

___

### UpdateLocationNfs

• **UpdateLocationNfs** = ``"datasync:UpdateLocationNfs"``

Grants permission to update an NFS sync Location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationNfs.html

#### Defined in

actions/datasync.ts:358

___

### UpdateLocationObjectStorage

• **UpdateLocationObjectStorage** = ``"datasync:UpdateLocationObjectStorage"``

Grants permission to update a self-managed object storage server location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationObjectStorage.html

#### Defined in

actions/datasync.ts:364

___

### UpdateLocationSmb

• **UpdateLocationSmb** = ``"datasync:UpdateLocationSmb"``

Grants permission to update a SMB sync location

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationSmb.html

#### Defined in

actions/datasync.ts:370

___

### UpdateStorageSystem

• **UpdateStorageSystem** = ``"datasync:UpdateStorageSystem"``

Grants permission to update a storage system

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateStorageSystem.html

#### Defined in

actions/datasync.ts:376

___

### UpdateTask

• **UpdateTask** = ``"datasync:UpdateTask"``

Grants permission to update metadata associated with a sync task

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTask.html

#### Defined in

actions/datasync.ts:382

___

### UpdateTaskExecution

• **UpdateTaskExecution** = ``"datasync:UpdateTaskExecution"``

Grants permission to update execution of a sync task

See https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTaskExecution.html

#### Defined in

actions/datasync.ts:388
