[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCloudformationActions

# Enumeration: AwsCloudformationActions

All IAM policy actions for AWS CloudFormation (CLOUDFORMATION)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudformation.html

2024-02-12T09:56:21.674Z

## Table of contents

### Enumeration Members

- [ActivateOrganizationsAccess](AwsCloudformationActions.md#activateorganizationsaccess)
- [ActivateType](AwsCloudformationActions.md#activatetype)
- [BatchDescribeTypeConfigurations](AwsCloudformationActions.md#batchdescribetypeconfigurations)
- [CancelUpdateStack](AwsCloudformationActions.md#cancelupdatestack)
- [ContinueUpdateRollback](AwsCloudformationActions.md#continueupdaterollback)
- [CreateChangeSet](AwsCloudformationActions.md#createchangeset)
- [CreateGeneratedTemplate](AwsCloudformationActions.md#creategeneratedtemplate)
- [CreateStack](AwsCloudformationActions.md#createstack)
- [CreateStackInstances](AwsCloudformationActions.md#createstackinstances)
- [CreateStackSet](AwsCloudformationActions.md#createstackset)
- [CreateUploadBucket](AwsCloudformationActions.md#createuploadbucket)
- [DeactivateOrganizationsAccess](AwsCloudformationActions.md#deactivateorganizationsaccess)
- [DeactivateType](AwsCloudformationActions.md#deactivatetype)
- [DeleteChangeSet](AwsCloudformationActions.md#deletechangeset)
- [DeleteGeneratedTemplate](AwsCloudformationActions.md#deletegeneratedtemplate)
- [DeleteStack](AwsCloudformationActions.md#deletestack)
- [DeleteStackInstances](AwsCloudformationActions.md#deletestackinstances)
- [DeleteStackSet](AwsCloudformationActions.md#deletestackset)
- [DeregisterType](AwsCloudformationActions.md#deregistertype)
- [DescribeAccountLimits](AwsCloudformationActions.md#describeaccountlimits)
- [DescribeChangeSet](AwsCloudformationActions.md#describechangeset)
- [DescribeChangeSetHooks](AwsCloudformationActions.md#describechangesethooks)
- [DescribeGeneratedTemplate](AwsCloudformationActions.md#describegeneratedtemplate)
- [DescribeOrganizationsAccess](AwsCloudformationActions.md#describeorganizationsaccess)
- [DescribePublisher](AwsCloudformationActions.md#describepublisher)
- [DescribeResourceScan](AwsCloudformationActions.md#describeresourcescan)
- [DescribeStackDriftDetectionStatus](AwsCloudformationActions.md#describestackdriftdetectionstatus)
- [DescribeStackEvents](AwsCloudformationActions.md#describestackevents)
- [DescribeStackInstance](AwsCloudformationActions.md#describestackinstance)
- [DescribeStackResource](AwsCloudformationActions.md#describestackresource)
- [DescribeStackResourceDrifts](AwsCloudformationActions.md#describestackresourcedrifts)
- [DescribeStackResources](AwsCloudformationActions.md#describestackresources)
- [DescribeStackSet](AwsCloudformationActions.md#describestackset)
- [DescribeStackSetOperation](AwsCloudformationActions.md#describestacksetoperation)
- [DescribeStacks](AwsCloudformationActions.md#describestacks)
- [DescribeType](AwsCloudformationActions.md#describetype)
- [DescribeTypeRegistration](AwsCloudformationActions.md#describetyperegistration)
- [DetectStackDrift](AwsCloudformationActions.md#detectstackdrift)
- [DetectStackResourceDrift](AwsCloudformationActions.md#detectstackresourcedrift)
- [DetectStackSetDrift](AwsCloudformationActions.md#detectstacksetdrift)
- [EstimateTemplateCost](AwsCloudformationActions.md#estimatetemplatecost)
- [ExecuteChangeSet](AwsCloudformationActions.md#executechangeset)
- [GetGeneratedTemplate](AwsCloudformationActions.md#getgeneratedtemplate)
- [GetStackPolicy](AwsCloudformationActions.md#getstackpolicy)
- [GetTemplate](AwsCloudformationActions.md#gettemplate)
- [GetTemplateSummary](AwsCloudformationActions.md#gettemplatesummary)
- [ImportStacksToStackSet](AwsCloudformationActions.md#importstackstostackset)
- [ListChangeSets](AwsCloudformationActions.md#listchangesets)
- [ListExports](AwsCloudformationActions.md#listexports)
- [ListGeneratedTemplates](AwsCloudformationActions.md#listgeneratedtemplates)
- [ListImports](AwsCloudformationActions.md#listimports)
- [ListResourceScanRelatedResources](AwsCloudformationActions.md#listresourcescanrelatedresources)
- [ListResourceScanResources](AwsCloudformationActions.md#listresourcescanresources)
- [ListResourceScans](AwsCloudformationActions.md#listresourcescans)
- [ListStackInstanceResourceDrifts](AwsCloudformationActions.md#liststackinstanceresourcedrifts)
- [ListStackInstances](AwsCloudformationActions.md#liststackinstances)
- [ListStackResources](AwsCloudformationActions.md#liststackresources)
- [ListStackSetOperationResults](AwsCloudformationActions.md#liststacksetoperationresults)
- [ListStackSetOperations](AwsCloudformationActions.md#liststacksetoperations)
- [ListStackSets](AwsCloudformationActions.md#liststacksets)
- [ListStacks](AwsCloudformationActions.md#liststacks)
- [ListTypeRegistrations](AwsCloudformationActions.md#listtyperegistrations)
- [ListTypeVersions](AwsCloudformationActions.md#listtypeversions)
- [ListTypes](AwsCloudformationActions.md#listtypes)
- [PublishType](AwsCloudformationActions.md#publishtype)
- [RecordHandlerProgress](AwsCloudformationActions.md#recordhandlerprogress)
- [RegisterPublisher](AwsCloudformationActions.md#registerpublisher)
- [RegisterType](AwsCloudformationActions.md#registertype)
- [RollbackStack](AwsCloudformationActions.md#rollbackstack)
- [SetStackPolicy](AwsCloudformationActions.md#setstackpolicy)
- [SetTypeConfiguration](AwsCloudformationActions.md#settypeconfiguration)
- [SetTypeDefaultVersion](AwsCloudformationActions.md#settypedefaultversion)
- [SignalResource](AwsCloudformationActions.md#signalresource)
- [StartResourceScan](AwsCloudformationActions.md#startresourcescan)
- [StopStackSetOperation](AwsCloudformationActions.md#stopstacksetoperation)
- [TagResource](AwsCloudformationActions.md#tagresource)
- [TestType](AwsCloudformationActions.md#testtype)
- [UntagResource](AwsCloudformationActions.md#untagresource)
- [UpdateGeneratedTemplate](AwsCloudformationActions.md#updategeneratedtemplate)
- [UpdateStack](AwsCloudformationActions.md#updatestack)
- [UpdateStackInstances](AwsCloudformationActions.md#updatestackinstances)
- [UpdateStackSet](AwsCloudformationActions.md#updatestackset)
- [UpdateTerminationProtection](AwsCloudformationActions.md#updateterminationprotection)
- [ValidateTemplate](AwsCloudformationActions.md#validatetemplate)

## Enumeration Members

### ActivateOrganizationsAccess

• **ActivateOrganizationsAccess** = ``"cloudformation:ActivateOrganizationsAccess"``

Grants permission to activate trusted access between StackSets and Organization
s. With trusted access between StackSets and Organizations activated, the manag
ement account has permissions to create and manage StackSets for your organizat
ion

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateOrganizationsAccess.html

#### Defined in

actions/cloudformation.ts:20

___

### ActivateType

• **ActivateType** = ``"cloudformation:ActivateType"``

Grants permission to activate a public third-party extension, making it availab
le for use in stack templates

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html

#### Defined in

actions/cloudformation.ts:27

___

### BatchDescribeTypeConfigurations

• **BatchDescribeTypeConfigurations** = ``"cloudformation:BatchDescribeTypeConfigurations"``

Grants permission to return configuration data for the specified CloudFormation
extensions

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_BatchDescribeTypeConfigurations.html

#### Defined in

actions/cloudformation.ts:34

___

### CancelUpdateStack

• **CancelUpdateStack** = ``"cloudformation:CancelUpdateStack"``

Grants permission to cancel an update on the specified stack

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html

#### Defined in

actions/cloudformation.ts:40

___

### ContinueUpdateRollback

• **ContinueUpdateRollback** = ``"cloudformation:ContinueUpdateRollback"``

Grants permission to continue rolling back a stack that is in the UPDATE_ROLLBA
CK_FAILED state to the UPDATE_ROLLBACK_COMPLETE state

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html

#### Defined in

actions/cloudformation.ts:47

___

### CreateChangeSet

• **CreateChangeSet** = ``"cloudformation:CreateChangeSet"``

Grants permission to create a list of changes for a stack

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html

#### Defined in

actions/cloudformation.ts:53

___

### CreateGeneratedTemplate

• **CreateGeneratedTemplate** = ``"cloudformation:CreateGeneratedTemplate"``

Grants permission to create a template from existing resources that are not alr
eady managed with CloudFormation

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateGeneratedTemplate.html

#### Defined in

actions/cloudformation.ts:60

___

### CreateStack

• **CreateStack** = ``"cloudformation:CreateStack"``

Grants permission to create a stack as specified in the template

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html

#### Defined in

actions/cloudformation.ts:66

___

### CreateStackInstances

• **CreateStackInstances** = ``"cloudformation:CreateStackInstances"``

Grants permission to create stack instances for the specified accounts, within
the specified regions

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html

#### Defined in

actions/cloudformation.ts:73

___

### CreateStackSet

• **CreateStackSet** = ``"cloudformation:CreateStackSet"``

Grants permission to create a stackset as specified in the template

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackSet.html

#### Defined in

actions/cloudformation.ts:79

___

### CreateUploadBucket

• **CreateUploadBucket** = ``"cloudformation:CreateUploadBucket"``

Grants permission to upload templates to Amazon S3 buckets. Used only by the AW
S CloudFormation console and is not documented in the API reference

See https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html

#### Defined in

actions/cloudformation.ts:86

___

### DeactivateOrganizationsAccess

• **DeactivateOrganizationsAccess** = ``"cloudformation:DeactivateOrganizationsAccess"``

Grants permission to deactivate trusted access between StackSets and Organizati
ons. If trusted access is deactivated, the management account does not have per
missions to create and manage service-managed StackSets for your organization

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateOrganizationsAccess.html

#### Defined in

actions/cloudformation.ts:94

___

### DeactivateType

• **DeactivateType** = ``"cloudformation:DeactivateType"``

Grants permission to deactivate a public extension that was previously activate
d in this account and region

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateType.html

#### Defined in

actions/cloudformation.ts:101

___

### DeleteChangeSet

• **DeleteChangeSet** = ``"cloudformation:DeleteChangeSet"``

Grants permission to delete the specified change set. Deleting change sets ensu
res that no one executes the wrong change set

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteChangeSet.html

#### Defined in

actions/cloudformation.ts:108

___

### DeleteGeneratedTemplate

• **DeleteGeneratedTemplate** = ``"cloudformation:DeleteGeneratedTemplate"``

Grants permission to delete a generated template

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteGeneratedTemplate.html

#### Defined in

actions/cloudformation.ts:114

___

### DeleteStack

• **DeleteStack** = ``"cloudformation:DeleteStack"``

Grants permission to delete a specified stack

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStack.html

#### Defined in

actions/cloudformation.ts:120

___

### DeleteStackInstances

• **DeleteStackInstances** = ``"cloudformation:DeleteStackInstances"``

Grants permission to delete stack instances for the specified accounts, in the
specified regions

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackInstances.html

#### Defined in

actions/cloudformation.ts:127

___

### DeleteStackSet

• **DeleteStackSet** = ``"cloudformation:DeleteStackSet"``

Grants permission to delete a specified stackset

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackSet.html

#### Defined in

actions/cloudformation.ts:133

___

### DeregisterType

• **DeregisterType** = ``"cloudformation:DeregisterType"``

Grants permission to deregister an existing CloudFormation type or type version

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html

#### Defined in

actions/cloudformation.ts:139

___

### DescribeAccountLimits

• **DescribeAccountLimits** = ``"cloudformation:DescribeAccountLimits"``

Grants permission to retrieve your account's AWS CloudFormation limits

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeAccountLimits.html

#### Defined in

actions/cloudformation.ts:145

___

### DescribeChangeSet

• **DescribeChangeSet** = ``"cloudformation:DescribeChangeSet"``

Grants permission to return the description for the specified change set

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSet.html

#### Defined in

actions/cloudformation.ts:151

___

### DescribeChangeSetHooks

• **DescribeChangeSetHooks** = ``"cloudformation:DescribeChangeSetHooks"``

Grants permission to return the Hook invocation information for the specified c
hange set

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSetHooks.html

#### Defined in

actions/cloudformation.ts:158

___

### DescribeGeneratedTemplate

• **DescribeGeneratedTemplate** = ``"cloudformation:DescribeGeneratedTemplate"``

Grants permission to describe a generated template. The output includes details
about the progress of the creation of a generated template

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeGeneratedTemplate.html

#### Defined in

actions/cloudformation.ts:165

___

### DescribeOrganizationsAccess

• **DescribeOrganizationsAccess** = ``"cloudformation:DescribeOrganizationsAccess"``

Grants permission to return information about the account's OrganizationAccess
status

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html

#### Defined in

actions/cloudformation.ts:172

___

### DescribePublisher

• **DescribePublisher** = ``"cloudformation:DescribePublisher"``

Grants permission to return information about a CloudFormation extension publis
her

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribePublisher.html

#### Defined in

actions/cloudformation.ts:179

___

### DescribeResourceScan

• **DescribeResourceScan** = ``"cloudformation:DescribeResourceScan"``

Grants permission to describe details of a resource scan

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeResourceScan.html

#### Defined in

actions/cloudformation.ts:185

___

### DescribeStackDriftDetectionStatus

• **DescribeStackDriftDetectionStatus** = ``"cloudformation:DescribeStackDriftDetectionStatus"``

Grants permission to return information about a stack drift detection operation

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackDriftDetectionStatus.html

#### Defined in

actions/cloudformation.ts:191

___

### DescribeStackEvents

• **DescribeStackEvents** = ``"cloudformation:DescribeStackEvents"``

Grants permission to return all stack related events for a specified stack

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html

#### Defined in

actions/cloudformation.ts:197

___

### DescribeStackInstance

• **DescribeStackInstance** = ``"cloudformation:DescribeStackInstance"``

Grants permission to return the stack instance that's associated with the speci
fied stack set, AWS account, and region

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackInstance.html

#### Defined in

actions/cloudformation.ts:204

___

### DescribeStackResource

• **DescribeStackResource** = ``"cloudformation:DescribeStackResource"``

Grants permission to return a description of the specified resource in the spec
ified stack

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html

#### Defined in

actions/cloudformation.ts:211

___

### DescribeStackResourceDrifts

• **DescribeStackResourceDrifts** = ``"cloudformation:DescribeStackResourceDrifts"``

Grants permission to return drift information for the resources that have been
checked for drift in the specified stack

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResourceDrifts.html

#### Defined in

actions/cloudformation.ts:218

___

### DescribeStackResources

• **DescribeStackResources** = ``"cloudformation:DescribeStackResources"``

Grants permission to return AWS resource descriptions for running and deleted s
tacks

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResources.html

#### Defined in

actions/cloudformation.ts:225

___

### DescribeStackSet

• **DescribeStackSet** = ``"cloudformation:DescribeStackSet"``

Grants permission to return the description of the specified stack set

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSet.html

#### Defined in

actions/cloudformation.ts:231

___

### DescribeStackSetOperation

• **DescribeStackSetOperation** = ``"cloudformation:DescribeStackSetOperation"``

Grants permission to return the description of the specified stack set operatio
n

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSetOperation.html

#### Defined in

actions/cloudformation.ts:238

___

### DescribeStacks

• **DescribeStacks** = ``"cloudformation:DescribeStacks"``

Grants permission to return the description for the specified stack, and to all
stacks when used in combination with the ListStacks action

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html

#### Defined in

actions/cloudformation.ts:245

___

### DescribeType

• **DescribeType** = ``"cloudformation:DescribeType"``

Grants permission to return information about the CloudFormation type requested

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html

#### Defined in

actions/cloudformation.ts:251

___

### DescribeTypeRegistration

• **DescribeTypeRegistration** = ``"cloudformation:DescribeTypeRegistration"``

Grants permission to return information about the registration process for a Cl
oudFormation type

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeTypeRegistration.html

#### Defined in

actions/cloudformation.ts:258

___

### DetectStackDrift

• **DetectStackDrift** = ``"cloudformation:DetectStackDrift"``

Grants permission to detects whether a stack's actual configuration differs, or
has drifted, from it's expected configuration, as defined in the stack template
and any values specified as template parameters

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackDrift.html

#### Defined in

actions/cloudformation.ts:266

___

### DetectStackResourceDrift

• **DetectStackResourceDrift** = ``"cloudformation:DetectStackResourceDrift"``

Grants permission to return information about whether a resource's actual confi
guration differs, or has drifted, from it's expected configuration, as defined
in the stack template and any values specified as template parameters

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackResourceDrift.html

#### Defined in

actions/cloudformation.ts:274

___

### DetectStackSetDrift

• **DetectStackSetDrift** = ``"cloudformation:DetectStackSetDrift"``

Grants permission to enable users to detect drift on a stack set and the stack
instances that belong to that stack set

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackSetDrift.html

#### Defined in

actions/cloudformation.ts:281

___

### EstimateTemplateCost

• **EstimateTemplateCost** = ``"cloudformation:EstimateTemplateCost"``

Grants permission to return the estimated monthly cost of a template

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html

#### Defined in

actions/cloudformation.ts:287

___

### ExecuteChangeSet

• **ExecuteChangeSet** = ``"cloudformation:ExecuteChangeSet"``

Grants permission to update a stack using the input information that was provid
ed when the specified change set was created

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html

#### Defined in

actions/cloudformation.ts:294

___

### GetGeneratedTemplate

• **GetGeneratedTemplate** = ``"cloudformation:GetGeneratedTemplate"``

Grants permission to retrieve a generated template

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetGeneratedTemplate.html

#### Defined in

actions/cloudformation.ts:300

___

### GetStackPolicy

• **GetStackPolicy** = ``"cloudformation:GetStackPolicy"``

Grants permission to return the stack policy for a specified stack

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetStackPolicy.html

#### Defined in

actions/cloudformation.ts:306

___

### GetTemplate

• **GetTemplate** = ``"cloudformation:GetTemplate"``

Grants permission to return the template body for a specified stack

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html

#### Defined in

actions/cloudformation.ts:312

___

### GetTemplateSummary

• **GetTemplateSummary** = ``"cloudformation:GetTemplateSummary"``

Grants permission to return information about a new or existing template

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplateSummary.html

#### Defined in

actions/cloudformation.ts:318

___

### ImportStacksToStackSet

• **ImportStacksToStackSet** = ``"cloudformation:ImportStacksToStackSet"``

Grants permission to enable users to import existing stacks to a new or existin
g stackset

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ImportStacksToStackSet.html

#### Defined in

actions/cloudformation.ts:325

___

### ListChangeSets

• **ListChangeSets** = ``"cloudformation:ListChangeSets"``

Grants permission to return the ID and status of each active change set for a s
tack. For example, AWS CloudFormation lists change sets that are in the CREATE_
IN_PROGRESS or CREATE_PENDING state

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListChangeSets.html

#### Defined in

actions/cloudformation.ts:333

___

### ListExports

• **ListExports** = ``"cloudformation:ListExports"``

Grants permission to list all exported output values in the account and region
in which you call this action

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListExports.html

#### Defined in

actions/cloudformation.ts:340

___

### ListGeneratedTemplates

• **ListGeneratedTemplates** = ``"cloudformation:ListGeneratedTemplates"``

Grants permission to list your generated templates in this Region

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListGeneratedTemplates.html

#### Defined in

actions/cloudformation.ts:346

___

### ListImports

• **ListImports** = ``"cloudformation:ListImports"``

Grants permission to list all stacks that are importing an exported output valu
e

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListImports.html

#### Defined in

actions/cloudformation.ts:353

___

### ListResourceScanRelatedResources

• **ListResourceScanRelatedResources** = ``"cloudformation:ListResourceScanRelatedResources"``

Grants permission to list the related resources for a list of resources from a
resource scan. The response indicates whether each returned resource is already
managed by CloudFormation

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListResourceScanRelatedResources.html

#### Defined in

actions/cloudformation.ts:361

___

### ListResourceScanResources

• **ListResourceScanResources** = ``"cloudformation:ListResourceScanResources"``

Grants permission to list the resources from a resource scan. The results can b
e filtered by resource identifier, resource type prefix, tag key, and tag value

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListResourceScanResources.html

#### Defined in

actions/cloudformation.ts:368

___

### ListResourceScans

• **ListResourceScans** = ``"cloudformation:ListResourceScans"``

Grants permission to list the resource scans from newest to oldest. By default
it will return up to 10 resource scans

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListResourceScans.html

#### Defined in

actions/cloudformation.ts:375

___

### ListStackInstanceResourceDrifts

• **ListStackInstanceResourceDrifts** = ``"cloudformation:ListStackInstanceResourceDrifts"``

Grants permission to return drift information for the resources that have been
checked for drift in the specified stack instance

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackInstanceResourceDrifts.html

#### Defined in

actions/cloudformation.ts:382

___

### ListStackInstances

• **ListStackInstances** = ``"cloudformation:ListStackInstances"``

Grants permission to return summary information about stack instances that are
associated with the specified stack set

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html

#### Defined in

actions/cloudformation.ts:389

___

### ListStackResources

• **ListStackResources** = ``"cloudformation:ListStackResources"``

Grants permission to return descriptions of all resources of the specified stac
k

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html

#### Defined in

actions/cloudformation.ts:396

___

### ListStackSetOperationResults

• **ListStackSetOperationResults** = ``"cloudformation:ListStackSetOperationResults"``

Grants permission to return summary information about the results of a stack se
t operation

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperationResults.html

#### Defined in

actions/cloudformation.ts:403

___

### ListStackSetOperations

• **ListStackSetOperations** = ``"cloudformation:ListStackSetOperations"``

Grants permission to return summary information about operations performed on a
stack set

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperations.html

#### Defined in

actions/cloudformation.ts:410

___

### ListStackSets

• **ListStackSets** = ``"cloudformation:ListStackSets"``

Grants permission to return summary information about stack sets that are assoc
iated with the user

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html

#### Defined in

actions/cloudformation.ts:417

___

### ListStacks

• **ListStacks** = ``"cloudformation:ListStacks"``

Grants permission to return the summary information for stacks whose status mat
ches the specified StackStatusFilter. In combination with the DescribeStacks ac
tion, grants permission to list descriptions for stacks

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html

#### Defined in

actions/cloudformation.ts:425

___

### ListTypeRegistrations

• **ListTypeRegistrations** = ``"cloudformation:ListTypeRegistrations"``

Grants permission to list CloudFormation type registration attempts

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeRegistrations.html

#### Defined in

actions/cloudformation.ts:431

___

### ListTypeVersions

• **ListTypeVersions** = ``"cloudformation:ListTypeVersions"``

Grants permission to list versions of a particular CloudFormation type

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeVersions.html

#### Defined in

actions/cloudformation.ts:437

___

### ListTypes

• **ListTypes** = ``"cloudformation:ListTypes"``

Grants permission to list available CloudFormation types

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html

#### Defined in

actions/cloudformation.ts:443

___

### PublishType

• **PublishType** = ``"cloudformation:PublishType"``

Grants permission to publish the specified extension to the CloudFormation regi
stry as a public extension in this region

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_PublishType.html

#### Defined in

actions/cloudformation.ts:450

___

### RecordHandlerProgress

• **RecordHandlerProgress** = ``"cloudformation:RecordHandlerProgress"``

Grants permission to record the handler progress

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RecordHandlerProgress.html

#### Defined in

actions/cloudformation.ts:456

___

### RegisterPublisher

• **RegisterPublisher** = ``"cloudformation:RegisterPublisher"``

Grants permission to register account as a publisher of public extensions in th
e CloudFormation registry

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html

#### Defined in

actions/cloudformation.ts:463

___

### RegisterType

• **RegisterType** = ``"cloudformation:RegisterType"``

Grants permission to register a new CloudFormation type

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html

#### Defined in

actions/cloudformation.ts:469

___

### RollbackStack

• **RollbackStack** = ``"cloudformation:RollbackStack"``

Grants permission to rollback the stack to the last stable state

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RollbackStack.html

#### Defined in

actions/cloudformation.ts:475

___

### SetStackPolicy

• **SetStackPolicy** = ``"cloudformation:SetStackPolicy"``

Grants permission to set a stack policy for a specified stack

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetStackPolicy.html

#### Defined in

actions/cloudformation.ts:481

___

### SetTypeConfiguration

• **SetTypeConfiguration** = ``"cloudformation:SetTypeConfiguration"``

Grants permission to set the configuration data for a registered CloudFormation
extension, in the given account and region

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html

#### Defined in

actions/cloudformation.ts:488

___

### SetTypeDefaultVersion

• **SetTypeDefaultVersion** = ``"cloudformation:SetTypeDefaultVersion"``

Grants permission to set which version of a CloudFormation type applies to Clou
dFormation operations

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeDefaultVersion.html

#### Defined in

actions/cloudformation.ts:495

___

### SignalResource

• **SignalResource** = ``"cloudformation:SignalResource"``

Grants permission to send a signal to the specified resource with a success or
failure status

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SignalResource.html

#### Defined in

actions/cloudformation.ts:502

___

### StartResourceScan

• **StartResourceScan** = ``"cloudformation:StartResourceScan"``

Grants permission to start a scan of the resources in this account in this Regi
on

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StartResourceScan.html

#### Defined in

actions/cloudformation.ts:509

___

### StopStackSetOperation

• **StopStackSetOperation** = ``"cloudformation:StopStackSetOperation"``

Grants permission to stop an in-progress operation on a stack set and its assoc
iated stack instances

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StopStackSetOperation.html

#### Defined in

actions/cloudformation.ts:516

___

### TagResource

• **TagResource** = ``"cloudformation:TagResource"``

Grants permission to tag cloudformation resources

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TagResource.html

#### Defined in

actions/cloudformation.ts:522

___

### TestType

• **TestType** = ``"cloudformation:TestType"``

Grants permission to test a registered extension to make sure it meets all nece
ssary requirements for being published in the CloudFormation registry

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TestType.html

#### Defined in

actions/cloudformation.ts:529

___

### UntagResource

• **UntagResource** = ``"cloudformation:UntagResource"``

Grants permission to untag cloudformation resources

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UntagResource.html

#### Defined in

actions/cloudformation.ts:535

___

### UpdateGeneratedTemplate

• **UpdateGeneratedTemplate** = ``"cloudformation:UpdateGeneratedTemplate"``

Grants permission to update a generated template. This can be used to change th
e name, add and remove resources, refresh resources, and change the DeletionPol
icy and UpdateReplacePolicy settings

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateGeneratedTemplate.html

#### Defined in

actions/cloudformation.ts:543

___

### UpdateStack

• **UpdateStack** = ``"cloudformation:UpdateStack"``

Grants permission to update a stack as specified in the template

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html

#### Defined in

actions/cloudformation.ts:549

___

### UpdateStackInstances

• **UpdateStackInstances** = ``"cloudformation:UpdateStackInstances"``

Grants permission to update the parameter values for stack instances for the sp
ecified accounts, within the specified regions

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackInstances.html

#### Defined in

actions/cloudformation.ts:556

___

### UpdateStackSet

• **UpdateStackSet** = ``"cloudformation:UpdateStackSet"``

Grants permission to update a stackset as specified in the template

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html

#### Defined in

actions/cloudformation.ts:562

___

### UpdateTerminationProtection

• **UpdateTerminationProtection** = ``"cloudformation:UpdateTerminationProtection"``

Grants permission to update termination protection for the specified stack

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateTerminationProtection.html

#### Defined in

actions/cloudformation.ts:568

___

### ValidateTemplate

• **ValidateTemplate** = ``"cloudformation:ValidateTemplate"``

Grants permission to validate a specified template

See https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ValidateTemplate.html

#### Defined in

actions/cloudformation.ts:574
