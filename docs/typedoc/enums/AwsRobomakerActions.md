[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRobomakerActions

# Enumeration: AwsRobomakerActions

All IAM policy actions for AWS RoboMaker (ROBOMAKER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrobomaker.html

2024-02-12T09:58:58.388Z

## Table of contents

### Enumeration Members

- [BatchDeleteWorlds](AwsRobomakerActions.md#batchdeleteworlds)
- [BatchDescribeSimulationJob](AwsRobomakerActions.md#batchdescribesimulationjob)
- [CancelDeploymentJob](AwsRobomakerActions.md#canceldeploymentjob)
- [CancelSimulationJob](AwsRobomakerActions.md#cancelsimulationjob)
- [CancelSimulationJobBatch](AwsRobomakerActions.md#cancelsimulationjobbatch)
- [CancelWorldExportJob](AwsRobomakerActions.md#cancelworldexportjob)
- [CancelWorldGenerationJob](AwsRobomakerActions.md#cancelworldgenerationjob)
- [CreateDeploymentJob](AwsRobomakerActions.md#createdeploymentjob)
- [CreateFleet](AwsRobomakerActions.md#createfleet)
- [CreateRobot](AwsRobomakerActions.md#createrobot)
- [CreateRobotApplication](AwsRobomakerActions.md#createrobotapplication)
- [CreateRobotApplicationVersion](AwsRobomakerActions.md#createrobotapplicationversion)
- [CreateSimulationApplication](AwsRobomakerActions.md#createsimulationapplication)
- [CreateSimulationApplicationVersion](AwsRobomakerActions.md#createsimulationapplicationversion)
- [CreateSimulationJob](AwsRobomakerActions.md#createsimulationjob)
- [CreateWorldExportJob](AwsRobomakerActions.md#createworldexportjob)
- [CreateWorldGenerationJob](AwsRobomakerActions.md#createworldgenerationjob)
- [CreateWorldTemplate](AwsRobomakerActions.md#createworldtemplate)
- [DeleteFleet](AwsRobomakerActions.md#deletefleet)
- [DeleteRobot](AwsRobomakerActions.md#deleterobot)
- [DeleteRobotApplication](AwsRobomakerActions.md#deleterobotapplication)
- [DeleteSimulationApplication](AwsRobomakerActions.md#deletesimulationapplication)
- [DeleteWorldTemplate](AwsRobomakerActions.md#deleteworldtemplate)
- [DeregisterRobot](AwsRobomakerActions.md#deregisterrobot)
- [DescribeDeploymentJob](AwsRobomakerActions.md#describedeploymentjob)
- [DescribeFleet](AwsRobomakerActions.md#describefleet)
- [DescribeRobot](AwsRobomakerActions.md#describerobot)
- [DescribeRobotApplication](AwsRobomakerActions.md#describerobotapplication)
- [DescribeSimulationApplication](AwsRobomakerActions.md#describesimulationapplication)
- [DescribeSimulationJob](AwsRobomakerActions.md#describesimulationjob)
- [DescribeSimulationJobBatch](AwsRobomakerActions.md#describesimulationjobbatch)
- [DescribeWorld](AwsRobomakerActions.md#describeworld)
- [DescribeWorldExportJob](AwsRobomakerActions.md#describeworldexportjob)
- [DescribeWorldGenerationJob](AwsRobomakerActions.md#describeworldgenerationjob)
- [DescribeWorldTemplate](AwsRobomakerActions.md#describeworldtemplate)
- [GetWorldTemplateBody](AwsRobomakerActions.md#getworldtemplatebody)
- [ListDeploymentJobs](AwsRobomakerActions.md#listdeploymentjobs)
- [ListFleets](AwsRobomakerActions.md#listfleets)
- [ListRobotApplications](AwsRobomakerActions.md#listrobotapplications)
- [ListRobots](AwsRobomakerActions.md#listrobots)
- [ListSimulationApplications](AwsRobomakerActions.md#listsimulationapplications)
- [ListSimulationJobBatches](AwsRobomakerActions.md#listsimulationjobbatches)
- [ListSimulationJobs](AwsRobomakerActions.md#listsimulationjobs)
- [ListTagsForResource](AwsRobomakerActions.md#listtagsforresource)
- [ListWorldExportJobs](AwsRobomakerActions.md#listworldexportjobs)
- [ListWorldGenerationJobs](AwsRobomakerActions.md#listworldgenerationjobs)
- [ListWorldTemplates](AwsRobomakerActions.md#listworldtemplates)
- [ListWorlds](AwsRobomakerActions.md#listworlds)
- [RegisterRobot](AwsRobomakerActions.md#registerrobot)
- [RestartSimulationJob](AwsRobomakerActions.md#restartsimulationjob)
- [StartSimulationJobBatch](AwsRobomakerActions.md#startsimulationjobbatch)
- [SyncDeploymentJob](AwsRobomakerActions.md#syncdeploymentjob)
- [TagResource](AwsRobomakerActions.md#tagresource)
- [UntagResource](AwsRobomakerActions.md#untagresource)
- [UpdateRobotApplication](AwsRobomakerActions.md#updaterobotapplication)
- [UpdateSimulationApplication](AwsRobomakerActions.md#updatesimulationapplication)
- [UpdateWorldTemplate](AwsRobomakerActions.md#updateworldtemplate)

## Enumeration Members

### BatchDeleteWorlds

• **BatchDeleteWorlds** = ``"robomaker:BatchDeleteWorlds"``

Delete one or more worlds in a batch operation

See https://docs.aws.amazon.com/robomaker/latest/dg/API_BatchDeleteWorlds.html

#### Defined in

actions/robomaker.ts:17

___

### BatchDescribeSimulationJob

• **BatchDescribeSimulationJob** = ``"robomaker:BatchDescribeSimulationJob"``

Describe multiple simulation jobs

See https://docs.aws.amazon.com/robomaker/latest/dg/API_BatchDescribeSimulationJob.html

#### Defined in

actions/robomaker.ts:23

___

### CancelDeploymentJob

• **CancelDeploymentJob** = ``"robomaker:CancelDeploymentJob"``

Cancel a deployment job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelDeploymentJob.html

#### Defined in

actions/robomaker.ts:29

___

### CancelSimulationJob

• **CancelSimulationJob** = ``"robomaker:CancelSimulationJob"``

Cancel a simulation job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJob.html

#### Defined in

actions/robomaker.ts:35

___

### CancelSimulationJobBatch

• **CancelSimulationJobBatch** = ``"robomaker:CancelSimulationJobBatch"``

Cancel a simulation job batch

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJobBatch.html

#### Defined in

actions/robomaker.ts:41

___

### CancelWorldExportJob

• **CancelWorldExportJob** = ``"robomaker:CancelWorldExportJob"``

Cancel a world export job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelWorldExportJob.html

#### Defined in

actions/robomaker.ts:47

___

### CancelWorldGenerationJob

• **CancelWorldGenerationJob** = ``"robomaker:CancelWorldGenerationJob"``

Cancel a world generation job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelWorldGenerationJob.html

#### Defined in

actions/robomaker.ts:53

___

### CreateDeploymentJob

• **CreateDeploymentJob** = ``"robomaker:CreateDeploymentJob"``

Create a deployment job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateDeploymentJob.html

#### Defined in

actions/robomaker.ts:59

___

### CreateFleet

• **CreateFleet** = ``"robomaker:CreateFleet"``

Create a deployment fleet that represents a logical group of robots running the
same robot application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateFleet.html

#### Defined in

actions/robomaker.ts:66

___

### CreateRobot

• **CreateRobot** = ``"robomaker:CreateRobot"``

Create a robot that can be registered to a fleet

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobot.html

#### Defined in

actions/robomaker.ts:72

___

### CreateRobotApplication

• **CreateRobotApplication** = ``"robomaker:CreateRobotApplication"``

Create a robot application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplication.html

#### Defined in

actions/robomaker.ts:78

___

### CreateRobotApplicationVersion

• **CreateRobotApplicationVersion** = ``"robomaker:CreateRobotApplicationVersion"``

Create a snapshot of a robot application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplicationVersion.html

#### Defined in

actions/robomaker.ts:84

___

### CreateSimulationApplication

• **CreateSimulationApplication** = ``"robomaker:CreateSimulationApplication"``

Create a simulation application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplication.html

#### Defined in

actions/robomaker.ts:90

___

### CreateSimulationApplicationVersion

• **CreateSimulationApplicationVersion** = ``"robomaker:CreateSimulationApplicationVersion"``

Create a snapshot of a simulation application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplicationVersion.html

#### Defined in

actions/robomaker.ts:96

___

### CreateSimulationJob

• **CreateSimulationJob** = ``"robomaker:CreateSimulationJob"``

Create a simulation job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationJob.html

#### Defined in

actions/robomaker.ts:102

___

### CreateWorldExportJob

• **CreateWorldExportJob** = ``"robomaker:CreateWorldExportJob"``

Create a world export job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateWorldExportJob.html

#### Defined in

actions/robomaker.ts:108

___

### CreateWorldGenerationJob

• **CreateWorldGenerationJob** = ``"robomaker:CreateWorldGenerationJob"``

Create a world generation job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateWorldGenerationJob.html

#### Defined in

actions/robomaker.ts:114

___

### CreateWorldTemplate

• **CreateWorldTemplate** = ``"robomaker:CreateWorldTemplate"``

Create a world template

See https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateWorldTemplate.html

#### Defined in

actions/robomaker.ts:120

___

### DeleteFleet

• **DeleteFleet** = ``"robomaker:DeleteFleet"``

Delete a deployment fleet

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteFleet.html

#### Defined in

actions/robomaker.ts:126

___

### DeleteRobot

• **DeleteRobot** = ``"robomaker:DeleteRobot"``

Delete a robot

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobot.html

#### Defined in

actions/robomaker.ts:132

___

### DeleteRobotApplication

• **DeleteRobotApplication** = ``"robomaker:DeleteRobotApplication"``

Delete a robot application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobotApplication.html

#### Defined in

actions/robomaker.ts:138

___

### DeleteSimulationApplication

• **DeleteSimulationApplication** = ``"robomaker:DeleteSimulationApplication"``

Delete a simulation application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteSimulationApplication.html

#### Defined in

actions/robomaker.ts:144

___

### DeleteWorldTemplate

• **DeleteWorldTemplate** = ``"robomaker:DeleteWorldTemplate"``

Delete a world template

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteWorldTemplate.html

#### Defined in

actions/robomaker.ts:150

___

### DeregisterRobot

• **DeregisterRobot** = ``"robomaker:DeregisterRobot"``

Deregister a robot from a fleet

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DeregisterRobot.html

#### Defined in

actions/robomaker.ts:156

___

### DescribeDeploymentJob

• **DescribeDeploymentJob** = ``"robomaker:DescribeDeploymentJob"``

Describe a deployment job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeDeploymentJob.html

#### Defined in

actions/robomaker.ts:162

___

### DescribeFleet

• **DescribeFleet** = ``"robomaker:DescribeFleet"``

Describe a deployment fleet

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeFleet.html

#### Defined in

actions/robomaker.ts:168

___

### DescribeRobot

• **DescribeRobot** = ``"robomaker:DescribeRobot"``

Describe a robot

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobot.html

#### Defined in

actions/robomaker.ts:174

___

### DescribeRobotApplication

• **DescribeRobotApplication** = ``"robomaker:DescribeRobotApplication"``

Describe a robot application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobotApplication.html

#### Defined in

actions/robomaker.ts:180

___

### DescribeSimulationApplication

• **DescribeSimulationApplication** = ``"robomaker:DescribeSimulationApplication"``

Describe a simulation application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationApplication.html

#### Defined in

actions/robomaker.ts:186

___

### DescribeSimulationJob

• **DescribeSimulationJob** = ``"robomaker:DescribeSimulationJob"``

Describe a simulation job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJob.html

#### Defined in

actions/robomaker.ts:192

___

### DescribeSimulationJobBatch

• **DescribeSimulationJobBatch** = ``"robomaker:DescribeSimulationJobBatch"``

Describe a simulation job batch

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJobBatch.html

#### Defined in

actions/robomaker.ts:198

___

### DescribeWorld

• **DescribeWorld** = ``"robomaker:DescribeWorld"``

Describe a world

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorld.html

#### Defined in

actions/robomaker.ts:204

___

### DescribeWorldExportJob

• **DescribeWorldExportJob** = ``"robomaker:DescribeWorldExportJob"``

Describe a world export job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorldExportJob.html

#### Defined in

actions/robomaker.ts:210

___

### DescribeWorldGenerationJob

• **DescribeWorldGenerationJob** = ``"robomaker:DescribeWorldGenerationJob"``

Describe a world generation job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorldGenerationJob.html

#### Defined in

actions/robomaker.ts:216

___

### DescribeWorldTemplate

• **DescribeWorldTemplate** = ``"robomaker:DescribeWorldTemplate"``

Describe a world template

See https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorldTemplate.html

#### Defined in

actions/robomaker.ts:222

___

### GetWorldTemplateBody

• **GetWorldTemplateBody** = ``"robomaker:GetWorldTemplateBody"``

Get the body of a world template

See https://docs.aws.amazon.com/robomaker/latest/dg/API_GetWorldTemplateBody.html

#### Defined in

actions/robomaker.ts:228

___

### ListDeploymentJobs

• **ListDeploymentJobs** = ``"robomaker:ListDeploymentJobs"``

List deployment jobs

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListDeploymentJobs.html

#### Defined in

actions/robomaker.ts:234

___

### ListFleets

• **ListFleets** = ``"robomaker:ListFleets"``

List fleets

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListFleets.html

#### Defined in

actions/robomaker.ts:240

___

### ListRobotApplications

• **ListRobotApplications** = ``"robomaker:ListRobotApplications"``

List robot applications

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobotApplications.html

#### Defined in

actions/robomaker.ts:246

___

### ListRobots

• **ListRobots** = ``"robomaker:ListRobots"``

List robots

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobots.html

#### Defined in

actions/robomaker.ts:252

___

### ListSimulationApplications

• **ListSimulationApplications** = ``"robomaker:ListSimulationApplications"``

List simulation applications

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationApplications.html

#### Defined in

actions/robomaker.ts:258

___

### ListSimulationJobBatches

• **ListSimulationJobBatches** = ``"robomaker:ListSimulationJobBatches"``

List simulation job batches

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobBatches.html

#### Defined in

actions/robomaker.ts:264

___

### ListSimulationJobs

• **ListSimulationJobs** = ``"robomaker:ListSimulationJobs"``

List simulation jobs

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobs.html

#### Defined in

actions/robomaker.ts:270

___

### ListTagsForResource

• **ListTagsForResource** = ``"robomaker:ListTagsForResource"``

List tags for a RoboMaker resource

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListTagsForResource.html

#### Defined in

actions/robomaker.ts:276

___

### ListWorldExportJobs

• **ListWorldExportJobs** = ``"robomaker:ListWorldExportJobs"``

List world export jobs

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorldExportJobs.html

#### Defined in

actions/robomaker.ts:282

___

### ListWorldGenerationJobs

• **ListWorldGenerationJobs** = ``"robomaker:ListWorldGenerationJobs"``

List world generation jobs

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorldGenerationJobs.html

#### Defined in

actions/robomaker.ts:288

___

### ListWorldTemplates

• **ListWorldTemplates** = ``"robomaker:ListWorldTemplates"``

List world templates

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorldTemplates.html

#### Defined in

actions/robomaker.ts:294

___

### ListWorlds

• **ListWorlds** = ``"robomaker:ListWorlds"``

List worlds

See https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorlds.html

#### Defined in

actions/robomaker.ts:300

___

### RegisterRobot

• **RegisterRobot** = ``"robomaker:RegisterRobot"``

Register a robot to a fleet

See https://docs.aws.amazon.com/robomaker/latest/dg/API_RegisterRobot.html

#### Defined in

actions/robomaker.ts:306

___

### RestartSimulationJob

• **RestartSimulationJob** = ``"robomaker:RestartSimulationJob"``

Restart a running simulation job

See https://docs.aws.amazon.com/robomaker/latest/dg/API_RestartSimulationJob.html

#### Defined in

actions/robomaker.ts:312

___

### StartSimulationJobBatch

• **StartSimulationJobBatch** = ``"robomaker:StartSimulationJobBatch"``

Create a simulation job batch

See https://docs.aws.amazon.com/robomaker/latest/dg/API_StartSimulationJobBatch.html

#### Defined in

actions/robomaker.ts:318

___

### SyncDeploymentJob

• **SyncDeploymentJob** = ``"robomaker:SyncDeploymentJob"``

Ensures the most recently deployed robot application is deployed to all robots
in the fleet

See https://docs.aws.amazon.com/robomaker/latest/dg/API_SyncDeploymentJob.html

#### Defined in

actions/robomaker.ts:325

___

### TagResource

• **TagResource** = ``"robomaker:TagResource"``

Add tags to a RoboMaker resource

See https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html

#### Defined in

actions/robomaker.ts:331

___

### UntagResource

• **UntagResource** = ``"robomaker:UntagResource"``

Remove tags from a RoboMaker resource

See https://docs.aws.amazon.com/robomaker/latest/dg/API_UntagResource.html

#### Defined in

actions/robomaker.ts:337

___

### UpdateRobotApplication

• **UpdateRobotApplication** = ``"robomaker:UpdateRobotApplication"``

Update a robot application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateRobotApplication.html

#### Defined in

actions/robomaker.ts:343

___

### UpdateSimulationApplication

• **UpdateSimulationApplication** = ``"robomaker:UpdateSimulationApplication"``

Update a simulation application

See https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateSimulationApplication.html

#### Defined in

actions/robomaker.ts:349

___

### UpdateWorldTemplate

• **UpdateWorldTemplate** = ``"robomaker:UpdateWorldTemplate"``

Update a world template

See https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateWorldTemplate.html

#### Defined in

actions/robomaker.ts:355
