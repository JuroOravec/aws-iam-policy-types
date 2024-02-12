[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodedeployActions

# Enumeration: AwsCodedeployActions

All IAM policy actions for AWS CodeDeploy (CODEDEPLOY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploy.html

2024-02-12T09:56:34.381Z

## Table of contents

### Enumeration Members

- [AddTagsToOnPremisesInstances](AwsCodedeployActions.md#addtagstoonpremisesinstances)
- [BatchGetApplicationRevisions](AwsCodedeployActions.md#batchgetapplicationrevisions)
- [BatchGetApplications](AwsCodedeployActions.md#batchgetapplications)
- [BatchGetDeploymentGroups](AwsCodedeployActions.md#batchgetdeploymentgroups)
- [BatchGetDeploymentInstances](AwsCodedeployActions.md#batchgetdeploymentinstances)
- [BatchGetDeploymentTargets](AwsCodedeployActions.md#batchgetdeploymenttargets)
- [BatchGetDeployments](AwsCodedeployActions.md#batchgetdeployments)
- [BatchGetOnPremisesInstances](AwsCodedeployActions.md#batchgetonpremisesinstances)
- [ContinueDeployment](AwsCodedeployActions.md#continuedeployment)
- [CreateApplication](AwsCodedeployActions.md#createapplication)
- [CreateDeployment](AwsCodedeployActions.md#createdeployment)
- [CreateDeploymentConfig](AwsCodedeployActions.md#createdeploymentconfig)
- [CreateDeploymentGroup](AwsCodedeployActions.md#createdeploymentgroup)
- [DeleteApplication](AwsCodedeployActions.md#deleteapplication)
- [DeleteDeploymentConfig](AwsCodedeployActions.md#deletedeploymentconfig)
- [DeleteDeploymentGroup](AwsCodedeployActions.md#deletedeploymentgroup)
- [DeleteGitHubAccountToken](AwsCodedeployActions.md#deletegithubaccounttoken)
- [DeleteResourcesByExternalId](AwsCodedeployActions.md#deleteresourcesbyexternalid)
- [DeregisterOnPremisesInstance](AwsCodedeployActions.md#deregisteronpremisesinstance)
- [GetApplication](AwsCodedeployActions.md#getapplication)
- [GetApplicationRevision](AwsCodedeployActions.md#getapplicationrevision)
- [GetDeployment](AwsCodedeployActions.md#getdeployment)
- [GetDeploymentConfig](AwsCodedeployActions.md#getdeploymentconfig)
- [GetDeploymentGroup](AwsCodedeployActions.md#getdeploymentgroup)
- [GetDeploymentInstance](AwsCodedeployActions.md#getdeploymentinstance)
- [GetDeploymentTarget](AwsCodedeployActions.md#getdeploymenttarget)
- [GetOnPremisesInstance](AwsCodedeployActions.md#getonpremisesinstance)
- [ListApplicationRevisions](AwsCodedeployActions.md#listapplicationrevisions)
- [ListApplications](AwsCodedeployActions.md#listapplications)
- [ListDeploymentConfigs](AwsCodedeployActions.md#listdeploymentconfigs)
- [ListDeploymentGroups](AwsCodedeployActions.md#listdeploymentgroups)
- [ListDeploymentInstances](AwsCodedeployActions.md#listdeploymentinstances)
- [ListDeploymentTargets](AwsCodedeployActions.md#listdeploymenttargets)
- [ListDeployments](AwsCodedeployActions.md#listdeployments)
- [ListGitHubAccountTokenNames](AwsCodedeployActions.md#listgithubaccounttokennames)
- [ListOnPremisesInstances](AwsCodedeployActions.md#listonpremisesinstances)
- [ListTagsForResource](AwsCodedeployActions.md#listtagsforresource)
- [PutLifecycleEventHookExecutionStatus](AwsCodedeployActions.md#putlifecycleeventhookexecutionstatus)
- [RegisterApplicationRevision](AwsCodedeployActions.md#registerapplicationrevision)
- [RegisterOnPremisesInstance](AwsCodedeployActions.md#registeronpremisesinstance)
- [RemoveTagsFromOnPremisesInstances](AwsCodedeployActions.md#removetagsfromonpremisesinstances)
- [SkipWaitTimeForInstanceTermination](AwsCodedeployActions.md#skipwaittimeforinstancetermination)
- [StopDeployment](AwsCodedeployActions.md#stopdeployment)
- [TagResource](AwsCodedeployActions.md#tagresource)
- [UntagResource](AwsCodedeployActions.md#untagresource)
- [UpdateApplication](AwsCodedeployActions.md#updateapplication)
- [UpdateDeploymentGroup](AwsCodedeployActions.md#updatedeploymentgroup)

## Enumeration Members

### AddTagsToOnPremisesInstances

• **AddTagsToOnPremisesInstances** = ``"codedeploy:AddTagsToOnPremisesInstances"``

Grants permission to add tags to one or more on-premises instances

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_AddTagsToOnPremisesInstances.html

#### Defined in

actions/codedeploy.ts:17

___

### BatchGetApplicationRevisions

• **BatchGetApplicationRevisions** = ``"codedeploy:BatchGetApplicationRevisions"``

Grants permission to get information about one or more application revisions

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplicationRevisions.html

#### Defined in

actions/codedeploy.ts:23

___

### BatchGetApplications

• **BatchGetApplications** = ``"codedeploy:BatchGetApplications"``

Grants permission to get information about multiple applications associated wit
h the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplications.html

#### Defined in

actions/codedeploy.ts:30

___

### BatchGetDeploymentGroups

• **BatchGetDeploymentGroups** = ``"codedeploy:BatchGetDeploymentGroups"``

Grants permission to get information about one or more deployment groups

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentGroups.html

#### Defined in

actions/codedeploy.ts:36

___

### BatchGetDeploymentInstances

• **BatchGetDeploymentInstances** = ``"codedeploy:BatchGetDeploymentInstances"``

Grants permission to get information about one or more instance that are part o
f a deployment group

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentInstances.html

#### Defined in

actions/codedeploy.ts:43

___

### BatchGetDeploymentTargets

• **BatchGetDeploymentTargets** = ``"codedeploy:BatchGetDeploymentTargets"``

Grants permission to return an array of one or more targets associated with a d
eployment. This method works with all compute types and should be used instead
of the deprecated BatchGetDeploymentInstances. The maximum number of targets th
at can be returned is 25

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentTargets.html

#### Defined in

actions/codedeploy.ts:52

___

### BatchGetDeployments

• **BatchGetDeployments** = ``"codedeploy:BatchGetDeployments"``

Grants permission to get information about multiple deployments associated with
the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeployments.html

#### Defined in

actions/codedeploy.ts:59

___

### BatchGetOnPremisesInstances

• **BatchGetOnPremisesInstances** = ``"codedeploy:BatchGetOnPremisesInstances"``

Grants permission to get information about one or more on-premises instances

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetOnPremisesInstances.html

#### Defined in

actions/codedeploy.ts:65

___

### ContinueDeployment

• **ContinueDeployment** = ``"codedeploy:ContinueDeployment"``

Grants permission to start the process of rerouting traffic from instances in t
he original environment to instances in thereplacement environment without wait
ing for a specified wait time to elapse

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ContinueDeployment.html

#### Defined in

actions/codedeploy.ts:73

___

### CreateApplication

• **CreateApplication** = ``"codedeploy:CreateApplication"``

Grants permission to create an application associated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateApplication.html

#### Defined in

actions/codedeploy.ts:79

___

### CreateDeployment

• **CreateDeployment** = ``"codedeploy:CreateDeployment"``

Grants permission to create a deployment for an application associated with the
IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html

#### Defined in

actions/codedeploy.ts:86

___

### CreateDeploymentConfig

• **CreateDeploymentConfig** = ``"codedeploy:CreateDeploymentConfig"``

Grants permission to create a custom deployment configuration associated with t
he IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentConfig.html

#### Defined in

actions/codedeploy.ts:93

___

### CreateDeploymentGroup

• **CreateDeploymentGroup** = ``"codedeploy:CreateDeploymentGroup"``

Grants permission to create a deployment group for an application associated wi
th the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentGroup.html

#### Defined in

actions/codedeploy.ts:100

___

### DeleteApplication

• **DeleteApplication** = ``"codedeploy:DeleteApplication"``

Grants permission to delete an application associated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteApplication.html

#### Defined in

actions/codedeploy.ts:106

___

### DeleteDeploymentConfig

• **DeleteDeploymentConfig** = ``"codedeploy:DeleteDeploymentConfig"``

Grants permission to delete a custom deployment configuration associated with t
he IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentConfig.html

#### Defined in

actions/codedeploy.ts:113

___

### DeleteDeploymentGroup

• **DeleteDeploymentGroup** = ``"codedeploy:DeleteDeploymentGroup"``

Grants permission to delete a deployment group for an application associated wi
th the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentGroup.html

#### Defined in

actions/codedeploy.ts:120

___

### DeleteGitHubAccountToken

• **DeleteGitHubAccountToken** = ``"codedeploy:DeleteGitHubAccountToken"``

Grants permission to delete a GitHub account connection

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteGitHubAccountToken.html

#### Defined in

actions/codedeploy.ts:126

___

### DeleteResourcesByExternalId

• **DeleteResourcesByExternalId** = ``"codedeploy:DeleteResourcesByExternalId"``

Grants permission to delete resources associated with the given external Id

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteResourcesByExternalId.html

#### Defined in

actions/codedeploy.ts:132

___

### DeregisterOnPremisesInstance

• **DeregisterOnPremisesInstance** = ``"codedeploy:DeregisterOnPremisesInstance"``

Grants permission to deregister an on-premises instance

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeregisterOnPremisesInstance.html

#### Defined in

actions/codedeploy.ts:138

___

### GetApplication

• **GetApplication** = ``"codedeploy:GetApplication"``

Grants permission to get information about a single application associated with
the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplication.html

#### Defined in

actions/codedeploy.ts:145

___

### GetApplicationRevision

• **GetApplicationRevision** = ``"codedeploy:GetApplicationRevision"``

Grants permission to get information about a single application revision for an
application associated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplicationRevision.html

#### Defined in

actions/codedeploy.ts:152

___

### GetDeployment

• **GetDeployment** = ``"codedeploy:GetDeployment"``

Grants permission to get information about a single deployment to a deployment
group for an application associated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeployment.html

#### Defined in

actions/codedeploy.ts:159

___

### GetDeploymentConfig

• **GetDeploymentConfig** = ``"codedeploy:GetDeploymentConfig"``

Grants permission to get information about a single deployment configuration as
sociated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentConfig.html

#### Defined in

actions/codedeploy.ts:166

___

### GetDeploymentGroup

• **GetDeploymentGroup** = ``"codedeploy:GetDeploymentGroup"``

Grants permission to get information about a single deployment group for an app
lication associated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentGroup.html

#### Defined in

actions/codedeploy.ts:173

___

### GetDeploymentInstance

• **GetDeploymentInstance** = ``"codedeploy:GetDeploymentInstance"``

Grants permission to get information about a single instance in a deployment as
sociated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentInstance.html

#### Defined in

actions/codedeploy.ts:180

___

### GetDeploymentTarget

• **GetDeploymentTarget** = ``"codedeploy:GetDeploymentTarget"``

Grants permission to return information about a deployment target

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentTarget.html

#### Defined in

actions/codedeploy.ts:186

___

### GetOnPremisesInstance

• **GetOnPremisesInstance** = ``"codedeploy:GetOnPremisesInstance"``

Grants permission to get information about a single on-premises instance

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetOnPremisesInstance.html

#### Defined in

actions/codedeploy.ts:192

___

### ListApplicationRevisions

• **ListApplicationRevisions** = ``"codedeploy:ListApplicationRevisions"``

Grants permission to get information about all application revisions for an app
lication associated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplicationRevisions.html

#### Defined in

actions/codedeploy.ts:199

___

### ListApplications

• **ListApplications** = ``"codedeploy:ListApplications"``

Grants permission to get information about all applications associated with the
IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplications.html

#### Defined in

actions/codedeploy.ts:206

___

### ListDeploymentConfigs

• **ListDeploymentConfigs** = ``"codedeploy:ListDeploymentConfigs"``

Grants permission to get information about all deployment configurations associ
ated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentConfigs.html

#### Defined in

actions/codedeploy.ts:213

___

### ListDeploymentGroups

• **ListDeploymentGroups** = ``"codedeploy:ListDeploymentGroups"``

Grants permission to get information about all deployment groups for an applica
tion associated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentGroups.html

#### Defined in

actions/codedeploy.ts:220

___

### ListDeploymentInstances

• **ListDeploymentInstances** = ``"codedeploy:ListDeploymentInstances"``

Grants permission to get information about all instances in a deployment associ
ated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentInstances.html

#### Defined in

actions/codedeploy.ts:227

___

### ListDeploymentTargets

• **ListDeploymentTargets** = ``"codedeploy:ListDeploymentTargets"``

Grants permission to return an array of target IDs that are associated a deploy
ment

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentTargets.html

#### Defined in

actions/codedeploy.ts:234

___

### ListDeployments

• **ListDeployments** = ``"codedeploy:ListDeployments"``

Grants permission to get information about all deployments to a deployment grou
p associated with the IAM user, or to get all deployments associated with the I
AM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeployments.html

#### Defined in

actions/codedeploy.ts:242

___

### ListGitHubAccountTokenNames

• **ListGitHubAccountTokenNames** = ``"codedeploy:ListGitHubAccountTokenNames"``

Grants permission to list the names of stored connections to GitHub accounts

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListGitHubAccountTokenNames.html

#### Defined in

actions/codedeploy.ts:248

___

### ListOnPremisesInstances

• **ListOnPremisesInstances** = ``"codedeploy:ListOnPremisesInstances"``

Grants permission to get a list of one or more on-premises instance names

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListOnPremisesInstances.html

#### Defined in

actions/codedeploy.ts:254

___

### ListTagsForResource

• **ListTagsForResource** = ``"codedeploy:ListTagsForResource"``

Grants permission to return a list of tags for the resource identified by a spe
cified ARN. Tags are used to organize and categorize your CodeDeploy resources

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/codedeploy.ts:261

___

### PutLifecycleEventHookExecutionStatus

• **PutLifecycleEventHookExecutionStatus** = ``"codedeploy:PutLifecycleEventHookExecutionStatus"``

Grants permission to notify a lifecycle event hook execution status for associa
ted deployment with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_PutLifecycleEventHookExecutionStatus.html

#### Defined in

actions/codedeploy.ts:268

___

### RegisterApplicationRevision

• **RegisterApplicationRevision** = ``"codedeploy:RegisterApplicationRevision"``

Grants permission to register information about an application revision for an
application associated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterApplicationRevision.html

#### Defined in

actions/codedeploy.ts:275

___

### RegisterOnPremisesInstance

• **RegisterOnPremisesInstance** = ``"codedeploy:RegisterOnPremisesInstance"``

Grants permission to register an on-premises instance

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterOnPremisesInstance.html

#### Defined in

actions/codedeploy.ts:281

___

### RemoveTagsFromOnPremisesInstances

• **RemoveTagsFromOnPremisesInstances** = ``"codedeploy:RemoveTagsFromOnPremisesInstances"``

Grants permission to remove tags from one or more on-premises instances

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RemoveTagsFromOnPremisesInstances.html

#### Defined in

actions/codedeploy.ts:287

___

### SkipWaitTimeForInstanceTermination

• **SkipWaitTimeForInstanceTermination** = ``"codedeploy:SkipWaitTimeForInstanceTermination"``

Grants permission to override any specified wait time and starts terminating in
stances immediately after the traffic routing is complete. This action applies
to blue-green deployments only

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_SkipWaitTimeForInstanceTermination.html

#### Defined in

actions/codedeploy.ts:295

___

### StopDeployment

• **StopDeployment** = ``"codedeploy:StopDeployment"``

Grants permission to stop a deployment

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_StopDeployment.html

#### Defined in

actions/codedeploy.ts:301

___

### TagResource

• **TagResource** = ``"codedeploy:TagResource"``

Grants permission to associate the list of tags in the input Tags parameter wit
h the resource identified by the ResourceArn input parameter

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_TagResource.html

#### Defined in

actions/codedeploy.ts:308

___

### UntagResource

• **UntagResource** = ``"codedeploy:UntagResource"``

Grants permission to disassociate a resource from a list of tags. The resource
is identified by the ResourceArn input parameter. The tags are identfied by the
list of keys in the TagKeys input parameter

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UntagResource.html

#### Defined in

actions/codedeploy.ts:316

___

### UpdateApplication

• **UpdateApplication** = ``"codedeploy:UpdateApplication"``

Grants permission to update an application

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateApplication.html

#### Defined in

actions/codedeploy.ts:322

___

### UpdateDeploymentGroup

• **UpdateDeploymentGroup** = ``"codedeploy:UpdateDeploymentGroup"``

Grants permission to change information about a single deployment group for an
application associated with the IAM user

See https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateDeploymentGroup.html

#### Defined in

actions/codedeploy.ts:329
