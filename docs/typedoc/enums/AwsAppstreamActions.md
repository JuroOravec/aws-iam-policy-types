[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAppstreamActions

# Enumeration: AwsAppstreamActions

All IAM policy actions for Amazon AppStream 2.0 (APPSTREAM)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappstream2.0.html

2024-02-12T09:56:05.404Z

## Table of contents

### Enumeration Members

- [AssociateAppBlockBuilderAppBlock](AwsAppstreamActions.md#associateappblockbuilderappblock)
- [AssociateApplicationFleet](AwsAppstreamActions.md#associateapplicationfleet)
- [AssociateApplicationToEntitlement](AwsAppstreamActions.md#associateapplicationtoentitlement)
- [AssociateFleet](AwsAppstreamActions.md#associatefleet)
- [BatchAssociateUserStack](AwsAppstreamActions.md#batchassociateuserstack)
- [BatchDisassociateUserStack](AwsAppstreamActions.md#batchdisassociateuserstack)
- [CopyImage](AwsAppstreamActions.md#copyimage)
- [CreateAppBlock](AwsAppstreamActions.md#createappblock)
- [CreateAppBlockBuilder](AwsAppstreamActions.md#createappblockbuilder)
- [CreateAppBlockBuilderStreamingURL](AwsAppstreamActions.md#createappblockbuilderstreamingurl)
- [CreateApplication](AwsAppstreamActions.md#createapplication)
- [CreateDirectoryConfig](AwsAppstreamActions.md#createdirectoryconfig)
- [CreateEntitlement](AwsAppstreamActions.md#createentitlement)
- [CreateFleet](AwsAppstreamActions.md#createfleet)
- [CreateImageBuilder](AwsAppstreamActions.md#createimagebuilder)
- [CreateImageBuilderStreamingURL](AwsAppstreamActions.md#createimagebuilderstreamingurl)
- [CreateStack](AwsAppstreamActions.md#createstack)
- [CreateStreamingURL](AwsAppstreamActions.md#createstreamingurl)
- [CreateUpdatedImage](AwsAppstreamActions.md#createupdatedimage)
- [CreateUsageReportSubscription](AwsAppstreamActions.md#createusagereportsubscription)
- [CreateUser](AwsAppstreamActions.md#createuser)
- [DeleteAppBlock](AwsAppstreamActions.md#deleteappblock)
- [DeleteAppBlockBuilder](AwsAppstreamActions.md#deleteappblockbuilder)
- [DeleteApplication](AwsAppstreamActions.md#deleteapplication)
- [DeleteDirectoryConfig](AwsAppstreamActions.md#deletedirectoryconfig)
- [DeleteEntitlement](AwsAppstreamActions.md#deleteentitlement)
- [DeleteFleet](AwsAppstreamActions.md#deletefleet)
- [DeleteImage](AwsAppstreamActions.md#deleteimage)
- [DeleteImageBuilder](AwsAppstreamActions.md#deleteimagebuilder)
- [DeleteImagePermissions](AwsAppstreamActions.md#deleteimagepermissions)
- [DeleteStack](AwsAppstreamActions.md#deletestack)
- [DeleteUsageReportSubscription](AwsAppstreamActions.md#deleteusagereportsubscription)
- [DeleteUser](AwsAppstreamActions.md#deleteuser)
- [DescribeAppBlockBuilderAppBlockAssociations](AwsAppstreamActions.md#describeappblockbuilderappblockassociations)
- [DescribeAppBlockBuilders](AwsAppstreamActions.md#describeappblockbuilders)
- [DescribeAppBlocks](AwsAppstreamActions.md#describeappblocks)
- [DescribeApplicationFleetAssociations](AwsAppstreamActions.md#describeapplicationfleetassociations)
- [DescribeApplications](AwsAppstreamActions.md#describeapplications)
- [DescribeDirectoryConfigs](AwsAppstreamActions.md#describedirectoryconfigs)
- [DescribeEntitlements](AwsAppstreamActions.md#describeentitlements)
- [DescribeFleets](AwsAppstreamActions.md#describefleets)
- [DescribeImageBuilders](AwsAppstreamActions.md#describeimagebuilders)
- [DescribeImagePermissions](AwsAppstreamActions.md#describeimagepermissions)
- [DescribeImages](AwsAppstreamActions.md#describeimages)
- [DescribeSessions](AwsAppstreamActions.md#describesessions)
- [DescribeStacks](AwsAppstreamActions.md#describestacks)
- [DescribeUsageReportSubscriptions](AwsAppstreamActions.md#describeusagereportsubscriptions)
- [DescribeUserStackAssociations](AwsAppstreamActions.md#describeuserstackassociations)
- [DescribeUsers](AwsAppstreamActions.md#describeusers)
- [DisableUser](AwsAppstreamActions.md#disableuser)
- [DisassociateAppBlockBuilderAppBlock](AwsAppstreamActions.md#disassociateappblockbuilderappblock)
- [DisassociateApplicationFleet](AwsAppstreamActions.md#disassociateapplicationfleet)
- [DisassociateApplicationFromEntitlement](AwsAppstreamActions.md#disassociateapplicationfromentitlement)
- [DisassociateFleet](AwsAppstreamActions.md#disassociatefleet)
- [EnableUser](AwsAppstreamActions.md#enableuser)
- [ExpireSession](AwsAppstreamActions.md#expiresession)
- [ListAssociatedFleets](AwsAppstreamActions.md#listassociatedfleets)
- [ListAssociatedStacks](AwsAppstreamActions.md#listassociatedstacks)
- [ListEntitledApplications](AwsAppstreamActions.md#listentitledapplications)
- [ListTagsForResource](AwsAppstreamActions.md#listtagsforresource)
- [StartAppBlockBuilder](AwsAppstreamActions.md#startappblockbuilder)
- [StartFleet](AwsAppstreamActions.md#startfleet)
- [StartImageBuilder](AwsAppstreamActions.md#startimagebuilder)
- [StopAppBlockBuilder](AwsAppstreamActions.md#stopappblockbuilder)
- [StopFleet](AwsAppstreamActions.md#stopfleet)
- [StopImageBuilder](AwsAppstreamActions.md#stopimagebuilder)
- [Stream](AwsAppstreamActions.md#stream)
- [TagResource](AwsAppstreamActions.md#tagresource)
- [UntagResource](AwsAppstreamActions.md#untagresource)
- [UpdateAppBlockBuilder](AwsAppstreamActions.md#updateappblockbuilder)
- [UpdateApplication](AwsAppstreamActions.md#updateapplication)
- [UpdateDirectoryConfig](AwsAppstreamActions.md#updatedirectoryconfig)
- [UpdateEntitlement](AwsAppstreamActions.md#updateentitlement)
- [UpdateFleet](AwsAppstreamActions.md#updatefleet)
- [UpdateImagePermissions](AwsAppstreamActions.md#updateimagepermissions)
- [UpdateStack](AwsAppstreamActions.md#updatestack)

## Enumeration Members

### AssociateAppBlockBuilderAppBlock

• **AssociateAppBlockBuilderAppBlock** = ``"appstream:AssociateAppBlockBuilderAppBlock"``

Grants permission to associate the specified app block builder with the app blo
ck

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateAppBlockBuilderAppBlock.html

#### Defined in

actions/appstream.ts:18

___

### AssociateApplicationFleet

• **AssociateApplicationFleet** = ``"appstream:AssociateApplicationFleet"``

Grants permission to associate the specified application with the fleet

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateApplicationFleet.html

#### Defined in

actions/appstream.ts:24

___

### AssociateApplicationToEntitlement

• **AssociateApplicationToEntitlement** = ``"appstream:AssociateApplicationToEntitlement"``

Grants permission to associate the specified application to the specified entit
lement

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateApplicationToEntitlement.html

#### Defined in

actions/appstream.ts:31

___

### AssociateFleet

• **AssociateFleet** = ``"appstream:AssociateFleet"``

Grants permission to associate the specified fleet with the specified stack

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateFleet.html

#### Defined in

actions/appstream.ts:37

___

### BatchAssociateUserStack

• **BatchAssociateUserStack** = ``"appstream:BatchAssociateUserStack"``

Grants permission to associate the specified users with the specified stacks. U
sers in a user pool cannot be assigned to stacks with fleets that are joined to
an Active Directory domain

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_BatchAssociateUserStack.html

#### Defined in

actions/appstream.ts:45

___

### BatchDisassociateUserStack

• **BatchDisassociateUserStack** = ``"appstream:BatchDisassociateUserStack"``

Grants permission to disassociate the specified users from the specified stacks

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_BatchDisassociateUserStack.html

#### Defined in

actions/appstream.ts:51

___

### CopyImage

• **CopyImage** = ``"appstream:CopyImage"``

Grants permission to copy the specified image within the same Region or to a ne
w Region within the same AWS account

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CopyImage.html

#### Defined in

actions/appstream.ts:58

___

### CreateAppBlock

• **CreateAppBlock** = ``"appstream:CreateAppBlock"``

Grants permission to create an app block. App blocks store details about the vi
rtual hard disk that contains the files for the application in an S3 bucket. It
also stores the setup script with details about how to mount the virtual hard d
isk. App blocks are only supported for Elastic fleets

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateAppBlock.html

#### Defined in

actions/appstream.ts:67

___

### CreateAppBlockBuilder

• **CreateAppBlockBuilder** = ``"appstream:CreateAppBlockBuilder"``

Grants permission to create an app block builder. An app block builder is a vir
tual machine that is used to create an app block

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateAppBlockBuilder.html

#### Defined in

actions/appstream.ts:74

___

### CreateAppBlockBuilderStreamingURL

• **CreateAppBlockBuilderStreamingURL** = ``"appstream:CreateAppBlockBuilderStreamingURL"``

Grants permission to create a URL to start an app block builder streaming sessi
on

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateAppBlockBuilderStreamingURL.html

#### Defined in

actions/appstream.ts:81

___

### CreateApplication

• **CreateApplication** = ``"appstream:CreateApplication"``

Grants permission to create an application within customer account. Application
s store the details about how to launch applications on streaming instances. Th
is is only supported for Elastic fleets

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateApplication.html

#### Defined in

actions/appstream.ts:89

___

### CreateDirectoryConfig

• **CreateDirectoryConfig** = ``"appstream:CreateDirectoryConfig"``

Grants permission to create a Directory Config object in AppStream 2.0. This ob
ject includes the configuration information required to join fleets and image b
uilders to Microsoft Active Directory domains

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateDirectoryConfig.html

#### Defined in

actions/appstream.ts:97

___

### CreateEntitlement

• **CreateEntitlement** = ``"appstream:CreateEntitlement"``

Grants permission to create an entitlement to control access to applications ba
sed on user attributes

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateEntitlement.html

#### Defined in

actions/appstream.ts:104

___

### CreateFleet

• **CreateFleet** = ``"appstream:CreateFleet"``

Grants permission to create a fleet. A fleet is a group of streaming instances
from which applications are launched and streamed to users

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateFleet.html

#### Defined in

actions/appstream.ts:111

___

### CreateImageBuilder

• **CreateImageBuilder** = ``"appstream:CreateImageBuilder"``

Grants permission to create an image builder. An image builder is a virtual mac
hine that is used to create an image

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateImageBuilder.html

#### Defined in

actions/appstream.ts:118

___

### CreateImageBuilderStreamingURL

• **CreateImageBuilderStreamingURL** = ``"appstream:CreateImageBuilderStreamingURL"``

Grants permission to create a URL to start an image builder streaming session

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateImageBuilderStreamingURL.html

#### Defined in

actions/appstream.ts:124

___

### CreateStack

• **CreateStack** = ``"appstream:CreateStack"``

Grants permission to create a stack to start streaming applications to users. A
stack consists of an associated fleet, user access policies, and storage config
urations

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStack.html

#### Defined in

actions/appstream.ts:132

___

### CreateStreamingURL

• **CreateStreamingURL** = ``"appstream:CreateStreamingURL"``

Grants permission to create a temporary URL to start an AppStream 2.0 streaming
session for the specified user. A streaming URL enables application streaming t
o be tested without user setup

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStreamingURL.html

#### Defined in

actions/appstream.ts:140

___

### CreateUpdatedImage

• **CreateUpdatedImage** = ``"appstream:CreateUpdatedImage"``

Grants permission to update an existing image within customer account

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUpdatedImage.html

#### Defined in

actions/appstream.ts:146

___

### CreateUsageReportSubscription

• **CreateUsageReportSubscription** = ``"appstream:CreateUsageReportSubscription"``

Grants permission to create a usage report subscription. Usage reports are gene
rated daily

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUsageReportSubscription.html

#### Defined in

actions/appstream.ts:153

___

### CreateUser

• **CreateUser** = ``"appstream:CreateUser"``

Grants permission to create a new user in the user pool

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUser.html

#### Defined in

actions/appstream.ts:159

___

### DeleteAppBlock

• **DeleteAppBlock** = ``"appstream:DeleteAppBlock"``

Grants permission to delete the specified app block

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteAppBlock.html

#### Defined in

actions/appstream.ts:165

___

### DeleteAppBlockBuilder

• **DeleteAppBlockBuilder** = ``"appstream:DeleteAppBlockBuilder"``

Grants permission to delete the specified app block builder and release capacit
y

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteAppBlockBuilder.html

#### Defined in

actions/appstream.ts:172

___

### DeleteApplication

• **DeleteApplication** = ``"appstream:DeleteApplication"``

Grants permission to delete the specified application

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteApplication.html

#### Defined in

actions/appstream.ts:178

___

### DeleteDirectoryConfig

• **DeleteDirectoryConfig** = ``"appstream:DeleteDirectoryConfig"``

Grants permission to delete the specified Directory Config object from AppStrea
m 2.0. This object includes the configuration information required to join flee
ts and image builders to Microsoft Active Directory domains

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteDirectoryConfig.html

#### Defined in

actions/appstream.ts:186

___

### DeleteEntitlement

• **DeleteEntitlement** = ``"appstream:DeleteEntitlement"``

Grants permission to delete the specified entitlement

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteEntitlement.html

#### Defined in

actions/appstream.ts:192

___

### DeleteFleet

• **DeleteFleet** = ``"appstream:DeleteFleet"``

Grants permission to delete the specified fleet

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteFleet.html

#### Defined in

actions/appstream.ts:198

___

### DeleteImage

• **DeleteImage** = ``"appstream:DeleteImage"``

Grants permission to delete the specified image. An image cannot be deleted whe
n it is in use

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImage.html

#### Defined in

actions/appstream.ts:205

___

### DeleteImageBuilder

• **DeleteImageBuilder** = ``"appstream:DeleteImageBuilder"``

Grants permission to delete the specified image builder and release capacity

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImageBuilder.html

#### Defined in

actions/appstream.ts:211

___

### DeleteImagePermissions

• **DeleteImagePermissions** = ``"appstream:DeleteImagePermissions"``

Grants permission to delete permissions for the specified private image

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImagePermissions.html

#### Defined in

actions/appstream.ts:217

___

### DeleteStack

• **DeleteStack** = ``"appstream:DeleteStack"``

Grants permission to delete the specified stack. After the stack is deleted, th
e application streaming environment provided by the stack is no longer availabl
e to users. Also, any reservations made for application streaming sessions for
the stack are released

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteStack.html

#### Defined in

actions/appstream.ts:226

___

### DeleteUsageReportSubscription

• **DeleteUsageReportSubscription** = ``"appstream:DeleteUsageReportSubscription"``

Grants permission to disable usage report generation

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUsageReportSubscription.html

#### Defined in

actions/appstream.ts:232

___

### DeleteUser

• **DeleteUser** = ``"appstream:DeleteUser"``

Grants permission to delete a user from the user pool

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUser.html

#### Defined in

actions/appstream.ts:238

___

### DescribeAppBlockBuilderAppBlockAssociations

• **DescribeAppBlockBuilderAppBlockAssociations** = ``"appstream:DescribeAppBlockBuilderAppBlockAssociations"``

Grants permission to retrieve the associations that are associated with the spe
cified app block builder or app block

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeAppBlockBuilderAppBlockAssociations.html

#### Defined in

actions/appstream.ts:245

___

### DescribeAppBlockBuilders

• **DescribeAppBlockBuilders** = ``"appstream:DescribeAppBlockBuilders"``

Grants permission to retrieve a list that describes one or more specified app b
lock builders, if the app block builder names are provided. Otherwise, all app
block builders in the account are described

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeAppBlockBuilders.html

#### Defined in

actions/appstream.ts:253

___

### DescribeAppBlocks

• **DescribeAppBlocks** = ``"appstream:DescribeAppBlocks"``

Grants permission to retrieve a list that describes one or more specified app b
locks, if the app block arns are provided. Otherwise, all app blocks in the acc
ount are described

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeAppBlocks.html

#### Defined in

actions/appstream.ts:261

___

### DescribeApplicationFleetAssociations

• **DescribeApplicationFleetAssociations** = ``"appstream:DescribeApplicationFleetAssociations"``

Grants permission to retrieve the associations that are associated with the spe
cified application or fleet

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeApplicationFleetAssociations.html

#### Defined in

actions/appstream.ts:268

___

### DescribeApplications

• **DescribeApplications** = ``"appstream:DescribeApplications"``

Grants permission to retrieve a list that describes one or more specified appli
cations, if the application arns are provided. Otherwise, all applications in t
he account are described

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeApplications.html

#### Defined in

actions/appstream.ts:276

___

### DescribeDirectoryConfigs

• **DescribeDirectoryConfigs** = ``"appstream:DescribeDirectoryConfigs"``

Grants permission to retrieve a list that describes one or more specified Direc
tory Config objects for AppStream 2.0, if the names for these objects are provi
ded. Otherwise, all Directory Config objects in the account are described. This
object includes the configuration information required to join fleets and image
builders to Microsoft Active Directory domains

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeDirectoryConfigs.html

#### Defined in

actions/appstream.ts:286

___

### DescribeEntitlements

• **DescribeEntitlements** = ``"appstream:DescribeEntitlements"``

Grants permission to retrieve one or all entitlements for the specified stack

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeEntitlements.html

#### Defined in

actions/appstream.ts:292

___

### DescribeFleets

• **DescribeFleets** = ``"appstream:DescribeFleets"``

Grants permission to retrieve a list that describes one or more specified fleet
s, if the fleet names are provided. Otherwise, all fleets in the account are de
scribed

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeFleets.html

#### Defined in

actions/appstream.ts:300

___

### DescribeImageBuilders

• **DescribeImageBuilders** = ``"appstream:DescribeImageBuilders"``

Grants permission to retrieve a list that describes one or more specified image
builders, if the image builder names are provided. Otherwise, all image builder
s in the account are described

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImageBuilders.html

#### Defined in

actions/appstream.ts:308

___

### DescribeImagePermissions

• **DescribeImagePermissions** = ``"appstream:DescribeImagePermissions"``

Grants permission to retrieve a list that describes the permissions for shared
AWS account IDs on a private image that you own

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImagePermissions.html

#### Defined in

actions/appstream.ts:315

___

### DescribeImages

• **DescribeImages** = ``"appstream:DescribeImages"``

Grants permission to retrieve a list that describes one or more specified image
s, if the image names or image ARNs are provided. Otherwise, all images in the
account are described

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImages.html

#### Defined in

actions/appstream.ts:323

___

### DescribeSessions

• **DescribeSessions** = ``"appstream:DescribeSessions"``

Grants permission to retrieve a list that describes the streaming sessions for
the specified stack and fleet. If a user ID is provided for the stack and fleet
, only the streaming sessions for that user are described

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeSessions.html

#### Defined in

actions/appstream.ts:331

___

### DescribeStacks

• **DescribeStacks** = ``"appstream:DescribeStacks"``

Grants permission to retrieve a list that describes one or more specified stack
s, if the stack names are provided. Otherwise, all stacks in the account are de
scribed

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeStacks.html

#### Defined in

actions/appstream.ts:339

___

### DescribeUsageReportSubscriptions

• **DescribeUsageReportSubscriptions** = ``"appstream:DescribeUsageReportSubscriptions"``

Grants permission to retrieve a list that describes one or more usage report su
bscriptions

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsageReportSubscriptions.html

#### Defined in

actions/appstream.ts:346

___

### DescribeUserStackAssociations

• **DescribeUserStackAssociations** = ``"appstream:DescribeUserStackAssociations"``

Grants permission to retrieve a list that describes the UserStackAssociation ob
jects

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUserStackAssociations.html

#### Defined in

actions/appstream.ts:353

___

### DescribeUsers

• **DescribeUsers** = ``"appstream:DescribeUsers"``

Grants permission to retrieve a list that describes users in the user pool

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsers.html

#### Defined in

actions/appstream.ts:359

___

### DisableUser

• **DisableUser** = ``"appstream:DisableUser"``

Grants permission to disable the specified user in the user pool. This action d
oes not delete the user

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisableUser.html

#### Defined in

actions/appstream.ts:366

___

### DisassociateAppBlockBuilderAppBlock

• **DisassociateAppBlockBuilderAppBlock** = ``"appstream:DisassociateAppBlockBuilderAppBlock"``

Grants permission to disassociate the specified app block builder with the app
block

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateAppBlockBuilderAppBlock.html

#### Defined in

actions/appstream.ts:373

___

### DisassociateApplicationFleet

• **DisassociateApplicationFleet** = ``"appstream:DisassociateApplicationFleet"``

Grants permission to disassociate the specified application from the specified
fleet

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateApplicationFleet.html

#### Defined in

actions/appstream.ts:380

___

### DisassociateApplicationFromEntitlement

• **DisassociateApplicationFromEntitlement** = ``"appstream:DisassociateApplicationFromEntitlement"``

Grants permission to disassociate the specified application from the specified
entitlement

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateApplicationFromEntitlement.html

#### Defined in

actions/appstream.ts:387

___

### DisassociateFleet

• **DisassociateFleet** = ``"appstream:DisassociateFleet"``

Grants permission to disassociate the specified fleet from the specified stack

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateFleet.html

#### Defined in

actions/appstream.ts:393

___

### EnableUser

• **EnableUser** = ``"appstream:EnableUser"``

Grants permission to enable a user in the user pool

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_EnableUser.html

#### Defined in

actions/appstream.ts:399

___

### ExpireSession

• **ExpireSession** = ``"appstream:ExpireSession"``

Grants permission to immediately stop the specified streaming session

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ExpireSession.html

#### Defined in

actions/appstream.ts:405

___

### ListAssociatedFleets

• **ListAssociatedFleets** = ``"appstream:ListAssociatedFleets"``

Grants permission to retrieve the name of the fleet that is associated with the
specified stack

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedFleets.html

#### Defined in

actions/appstream.ts:412

___

### ListAssociatedStacks

• **ListAssociatedStacks** = ``"appstream:ListAssociatedStacks"``

Grants permission to retrieve the name of the stack with which the specified fl
eet is associated

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedStacks.html

#### Defined in

actions/appstream.ts:419

___

### ListEntitledApplications

• **ListEntitledApplications** = ``"appstream:ListEntitledApplications"``

Grants permission to retrieve the applications that are associated with the spe
cified entitlement

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListEntitledApplications.html

#### Defined in

actions/appstream.ts:426

___

### ListTagsForResource

• **ListTagsForResource** = ``"appstream:ListTagsForResource"``

Grants permission to retrieve a list of all tags for the specified AppStream 2.
0 resource. The following resources can be tagged: Image builders, images, flee
ts, and stacks

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/appstream.ts:434

___

### StartAppBlockBuilder

• **StartAppBlockBuilder** = ``"appstream:StartAppBlockBuilder"``

Grants permission to start the specified app block builder

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartAppBlockBuilder.html

#### Defined in

actions/appstream.ts:440

___

### StartFleet

• **StartFleet** = ``"appstream:StartFleet"``

Grants permission to start the specified fleet

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartFleet.html

#### Defined in

actions/appstream.ts:446

___

### StartImageBuilder

• **StartImageBuilder** = ``"appstream:StartImageBuilder"``

Grants permission to start the specified image builder

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartImageBuilder.html

#### Defined in

actions/appstream.ts:452

___

### StopAppBlockBuilder

• **StopAppBlockBuilder** = ``"appstream:StopAppBlockBuilder"``

Grants permission to stop the specified app block builder

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopAppBlockBuilder.html

#### Defined in

actions/appstream.ts:458

___

### StopFleet

• **StopFleet** = ``"appstream:StopFleet"``

Grants permission to stop the specified fleet

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopFleet.html

#### Defined in

actions/appstream.ts:464

___

### StopImageBuilder

• **StopImageBuilder** = ``"appstream:StopImageBuilder"``

Grants permission to stop the specified image builder

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopImageBuilder.html

#### Defined in

actions/appstream.ts:470

___

### Stream

• **Stream** = ``"appstream:Stream"``

Grants permission to federated users to sign in by using their existing credent
ials and stream applications from the specified stack

See https://docs.aws.amazon.com/appstream2/latest/developerguide/external-identity-providers-setting-up-saml.html#external-identity-providers-embed-inline-policy-for-IAM-role

#### Defined in

actions/appstream.ts:477

___

### TagResource

• **TagResource** = ``"appstream:TagResource"``

Grants permission to add or overwrite one or more tags for the specified AppStr
eam 2.0 resource. The following resources can be tagged: Image builders, images
, fleets, stacks, app blocks and applications

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_TagResource.html

#### Defined in

actions/appstream.ts:485

___

### UntagResource

• **UntagResource** = ``"appstream:UntagResource"``

Grants permission to disassociate one or more tags from the specified AppStream
2.0 resource

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UntagResource.html

#### Defined in

actions/appstream.ts:492

___

### UpdateAppBlockBuilder

• **UpdateAppBlockBuilder** = ``"appstream:UpdateAppBlockBuilder"``

Grants permission to update a specific app block builder. An app block builder
is a virtual machine that is used to create an app block

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateAppBlockBuilder.html

#### Defined in

actions/appstream.ts:499

___

### UpdateApplication

• **UpdateApplication** = ``"appstream:UpdateApplication"``

Grants permission to update the specified fields for the specified application

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateApplication.html

#### Defined in

actions/appstream.ts:505

___

### UpdateDirectoryConfig

• **UpdateDirectoryConfig** = ``"appstream:UpdateDirectoryConfig"``

Grants permission to update the specified Directory Config object in AppStream
2.0. This object includes the configuration information required to join fleets
and image builders to Microsoft Active Directory domains

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateDirectoryConfig.html

#### Defined in

actions/appstream.ts:513

___

### UpdateEntitlement

• **UpdateEntitlement** = ``"appstream:UpdateEntitlement"``

Grants permission to update the specified fields for the specified entitlement

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateEntitlement.html

#### Defined in

actions/appstream.ts:519

___

### UpdateFleet

• **UpdateFleet** = ``"appstream:UpdateFleet"``

Grants permission to update the specified fleet. All attributes except the flee
t name can be updated when the fleet is in the STOPPED state

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateFleet.html

#### Defined in

actions/appstream.ts:526

___

### UpdateImagePermissions

• **UpdateImagePermissions** = ``"appstream:UpdateImagePermissions"``

Grants permission to add or update permissions for the specified private image

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateImagePermissions.html

#### Defined in

actions/appstream.ts:532

___

### UpdateStack

• **UpdateStack** = ``"appstream:UpdateStack"``

Grants permission to update the specified fields for the specified stack

See https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateStack.html

#### Defined in

actions/appstream.ts:538
