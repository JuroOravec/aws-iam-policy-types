[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMghActions

# Enumeration: AwsMghActions

All IAM policy actions for AWS Migration Hub (MGH)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhub.html

2024-02-12T09:58:24.015Z

## Table of contents

### Enumeration Members

- [AssociateCreatedArtifact](AwsMghActions.md#associatecreatedartifact)
- [AssociateDiscoveredResource](AwsMghActions.md#associatediscoveredresource)
- [CreateHomeRegionControl](AwsMghActions.md#createhomeregioncontrol)
- [CreateProgressUpdateStream](AwsMghActions.md#createprogressupdatestream)
- [DeleteHomeRegionControl](AwsMghActions.md#deletehomeregioncontrol)
- [DeleteProgressUpdateStream](AwsMghActions.md#deleteprogressupdatestream)
- [DescribeApplicationState](AwsMghActions.md#describeapplicationstate)
- [DescribeHomeRegionControls](AwsMghActions.md#describehomeregioncontrols)
- [DescribeMigrationTask](AwsMghActions.md#describemigrationtask)
- [DisassociateCreatedArtifact](AwsMghActions.md#disassociatecreatedartifact)
- [DisassociateDiscoveredResource](AwsMghActions.md#disassociatediscoveredresource)
- [GetHomeRegion](AwsMghActions.md#gethomeregion)
- [ImportMigrationTask](AwsMghActions.md#importmigrationtask)
- [ListApplicationStates](AwsMghActions.md#listapplicationstates)
- [ListCreatedArtifacts](AwsMghActions.md#listcreatedartifacts)
- [ListDiscoveredResources](AwsMghActions.md#listdiscoveredresources)
- [ListMigrationTasks](AwsMghActions.md#listmigrationtasks)
- [ListProgressUpdateStreams](AwsMghActions.md#listprogressupdatestreams)
- [NotifyApplicationState](AwsMghActions.md#notifyapplicationstate)
- [NotifyMigrationTaskState](AwsMghActions.md#notifymigrationtaskstate)
- [PutResourceAttributes](AwsMghActions.md#putresourceattributes)

## Enumeration Members

### AssociateCreatedArtifact

• **AssociateCreatedArtifact** = ``"mgh:AssociateCreatedArtifact"``

Grants permission to associate a given AWS artifact to a MigrationTask

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateCreatedArtifact.html

#### Defined in

actions/mgh.ts:17

___

### AssociateDiscoveredResource

• **AssociateDiscoveredResource** = ``"mgh:AssociateDiscoveredResource"``

Grants permission to associate a given ADS resource to a MigrationTask

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateDiscoveredResource.html

#### Defined in

actions/mgh.ts:23

___

### CreateHomeRegionControl

• **CreateHomeRegionControl** = ``"mgh:CreateHomeRegionControl"``

Grants permission to create a Migration Hub Home Region Control

See https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_CreateHomeRegionControl.html

#### Defined in

actions/mgh.ts:29

___

### CreateProgressUpdateStream

• **CreateProgressUpdateStream** = ``"mgh:CreateProgressUpdateStream"``

Grants permission to create a ProgressUpdateStream

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateProgressUpdateStream.html

#### Defined in

actions/mgh.ts:35

___

### DeleteHomeRegionControl

• **DeleteHomeRegionControl** = ``"mgh:DeleteHomeRegionControl"``

Grants permission to delete a Migration Hub Home Region Control

See https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_DeleteHomeRegionControl.html

#### Defined in

actions/mgh.ts:41

___

### DeleteProgressUpdateStream

• **DeleteProgressUpdateStream** = ``"mgh:DeleteProgressUpdateStream"``

Grants permission to delete a ProgressUpdateStream

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteProgressUpdateStream.html

#### Defined in

actions/mgh.ts:47

___

### DescribeApplicationState

• **DescribeApplicationState** = ``"mgh:DescribeApplicationState"``

Grants permission to get an Application Discovery Service Application's state

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeApplicationState.html

#### Defined in

actions/mgh.ts:53

___

### DescribeHomeRegionControls

• **DescribeHomeRegionControls** = ``"mgh:DescribeHomeRegionControls"``

Grants permission to list Home Region Controls

See https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_DescribeHomeRegionControls.html

#### Defined in

actions/mgh.ts:59

___

### DescribeMigrationTask

• **DescribeMigrationTask** = ``"mgh:DescribeMigrationTask"``

Grants permission to describe a MigrationTask

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeMigrationTask.html

#### Defined in

actions/mgh.ts:65

___

### DisassociateCreatedArtifact

• **DisassociateCreatedArtifact** = ``"mgh:DisassociateCreatedArtifact"``

Grants permission to disassociate a given AWS artifact from a MigrationTask

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateCreatedArtifact.html

#### Defined in

actions/mgh.ts:71

___

### DisassociateDiscoveredResource

• **DisassociateDiscoveredResource** = ``"mgh:DisassociateDiscoveredResource"``

Grants permission to disassociate a given ADS resource from a MigrationTask

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateDiscoveredResource.html

#### Defined in

actions/mgh.ts:77

___

### GetHomeRegion

• **GetHomeRegion** = ``"mgh:GetHomeRegion"``

Grants permission to get the Migration Hub Home Region

See https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_GetHomeRegion.html

#### Defined in

actions/mgh.ts:83

___

### ImportMigrationTask

• **ImportMigrationTask** = ``"mgh:ImportMigrationTask"``

Grants permission to import a MigrationTask

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_ImportMigrationTask.html

#### Defined in

actions/mgh.ts:89

___

### ListApplicationStates

• **ListApplicationStates** = ``"mgh:ListApplicationStates"``

Grants permission to list Application statuses

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListApplicationStates.html

#### Defined in

actions/mgh.ts:95

___

### ListCreatedArtifacts

• **ListCreatedArtifacts** = ``"mgh:ListCreatedArtifacts"``

Grants permission to list associated created artifacts for a MigrationTask

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListCreatedArtifacts.html

#### Defined in

actions/mgh.ts:101

___

### ListDiscoveredResources

• **ListDiscoveredResources** = ``"mgh:ListDiscoveredResources"``

Grants permission to list associated ADS resources from MigrationTask

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListDiscoveredResources.html

#### Defined in

actions/mgh.ts:107

___

### ListMigrationTasks

• **ListMigrationTasks** = ``"mgh:ListMigrationTasks"``

Grants permission to list MigrationTasks

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTasks.html

#### Defined in

actions/mgh.ts:113

___

### ListProgressUpdateStreams

• **ListProgressUpdateStreams** = ``"mgh:ListProgressUpdateStreams"``

Grants permission to to list ProgressUpdateStreams

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListProgressUpdateStreams.html

#### Defined in

actions/mgh.ts:119

___

### NotifyApplicationState

• **NotifyApplicationState** = ``"mgh:NotifyApplicationState"``

Grants permission to update an Application Discovery Service Application's stat
e

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyApplicationState.html

#### Defined in

actions/mgh.ts:126

___

### NotifyMigrationTaskState

• **NotifyMigrationTaskState** = ``"mgh:NotifyMigrationTaskState"``

Grants permission to notify latest MigrationTask state

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyMigrationTaskState.html

#### Defined in

actions/mgh.ts:132

___

### PutResourceAttributes

• **PutResourceAttributes** = ``"mgh:PutResourceAttributes"``

Grants permission to put ResourceAttributes

See https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html

#### Defined in

actions/mgh.ts:138
