[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAutoscalingActions

# Enumeration: AwsAutoscalingActions

All IAM policy actions for Amazon EC2 Auto Scaling (AUTOSCALING)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html

2024-02-12T09:57:03.993Z

## Table of contents

### Enumeration Members

- [AttachInstances](AwsAutoscalingActions.md#attachinstances)
- [AttachLoadBalancerTargetGroups](AwsAutoscalingActions.md#attachloadbalancertargetgroups)
- [AttachLoadBalancers](AwsAutoscalingActions.md#attachloadbalancers)
- [AttachTrafficSources](AwsAutoscalingActions.md#attachtrafficsources)
- [BatchDeleteScheduledAction](AwsAutoscalingActions.md#batchdeletescheduledaction)
- [BatchPutScheduledUpdateGroupAction](AwsAutoscalingActions.md#batchputscheduledupdategroupaction)
- [CancelInstanceRefresh](AwsAutoscalingActions.md#cancelinstancerefresh)
- [CompleteLifecycleAction](AwsAutoscalingActions.md#completelifecycleaction)
- [CreateAutoScalingGroup](AwsAutoscalingActions.md#createautoscalinggroup)
- [CreateLaunchConfiguration](AwsAutoscalingActions.md#createlaunchconfiguration)
- [CreateOrUpdateTags](AwsAutoscalingActions.md#createorupdatetags)
- [DeleteAutoScalingGroup](AwsAutoscalingActions.md#deleteautoscalinggroup)
- [DeleteLaunchConfiguration](AwsAutoscalingActions.md#deletelaunchconfiguration)
- [DeleteLifecycleHook](AwsAutoscalingActions.md#deletelifecyclehook)
- [DeleteNotificationConfiguration](AwsAutoscalingActions.md#deletenotificationconfiguration)
- [DeletePolicy](AwsAutoscalingActions.md#deletepolicy)
- [DeleteScheduledAction](AwsAutoscalingActions.md#deletescheduledaction)
- [DeleteTags](AwsAutoscalingActions.md#deletetags)
- [DeleteWarmPool](AwsAutoscalingActions.md#deletewarmpool)
- [DescribeAccountLimits](AwsAutoscalingActions.md#describeaccountlimits)
- [DescribeAdjustmentTypes](AwsAutoscalingActions.md#describeadjustmenttypes)
- [DescribeAutoScalingGroups](AwsAutoscalingActions.md#describeautoscalinggroups)
- [DescribeAutoScalingInstances](AwsAutoscalingActions.md#describeautoscalinginstances)
- [DescribeAutoScalingNotificationTypes](AwsAutoscalingActions.md#describeautoscalingnotificationtypes)
- [DescribeInstanceRefreshes](AwsAutoscalingActions.md#describeinstancerefreshes)
- [DescribeLaunchConfigurations](AwsAutoscalingActions.md#describelaunchconfigurations)
- [DescribeLifecycleHookTypes](AwsAutoscalingActions.md#describelifecyclehooktypes)
- [DescribeLifecycleHooks](AwsAutoscalingActions.md#describelifecyclehooks)
- [DescribeLoadBalancerTargetGroups](AwsAutoscalingActions.md#describeloadbalancertargetgroups)
- [DescribeLoadBalancers](AwsAutoscalingActions.md#describeloadbalancers)
- [DescribeMetricCollectionTypes](AwsAutoscalingActions.md#describemetriccollectiontypes)
- [DescribeNotificationConfigurations](AwsAutoscalingActions.md#describenotificationconfigurations)
- [DescribePolicies](AwsAutoscalingActions.md#describepolicies)
- [DescribeScalingActivities](AwsAutoscalingActions.md#describescalingactivities)
- [DescribeScalingProcessTypes](AwsAutoscalingActions.md#describescalingprocesstypes)
- [DescribeScheduledActions](AwsAutoscalingActions.md#describescheduledactions)
- [DescribeTags](AwsAutoscalingActions.md#describetags)
- [DescribeTerminationPolicyTypes](AwsAutoscalingActions.md#describeterminationpolicytypes)
- [DescribeTrafficSources](AwsAutoscalingActions.md#describetrafficsources)
- [DescribeWarmPool](AwsAutoscalingActions.md#describewarmpool)
- [DetachInstances](AwsAutoscalingActions.md#detachinstances)
- [DetachLoadBalancerTargetGroups](AwsAutoscalingActions.md#detachloadbalancertargetgroups)
- [DetachLoadBalancers](AwsAutoscalingActions.md#detachloadbalancers)
- [DetachTrafficSources](AwsAutoscalingActions.md#detachtrafficsources)
- [DisableMetricsCollection](AwsAutoscalingActions.md#disablemetricscollection)
- [EnableMetricsCollection](AwsAutoscalingActions.md#enablemetricscollection)
- [EnterStandby](AwsAutoscalingActions.md#enterstandby)
- [ExecutePolicy](AwsAutoscalingActions.md#executepolicy)
- [ExitStandby](AwsAutoscalingActions.md#exitstandby)
- [GetPredictiveScalingForecast](AwsAutoscalingActions.md#getpredictivescalingforecast)
- [PutLifecycleHook](AwsAutoscalingActions.md#putlifecyclehook)
- [PutNotificationConfiguration](AwsAutoscalingActions.md#putnotificationconfiguration)
- [PutScalingPolicy](AwsAutoscalingActions.md#putscalingpolicy)
- [PutScheduledUpdateGroupAction](AwsAutoscalingActions.md#putscheduledupdategroupaction)
- [PutWarmPool](AwsAutoscalingActions.md#putwarmpool)
- [RecordLifecycleActionHeartbeat](AwsAutoscalingActions.md#recordlifecycleactionheartbeat)
- [ResumeProcesses](AwsAutoscalingActions.md#resumeprocesses)
- [RollbackInstanceRefresh](AwsAutoscalingActions.md#rollbackinstancerefresh)
- [SetDesiredCapacity](AwsAutoscalingActions.md#setdesiredcapacity)
- [SetInstanceHealth](AwsAutoscalingActions.md#setinstancehealth)
- [SetInstanceProtection](AwsAutoscalingActions.md#setinstanceprotection)
- [StartInstanceRefresh](AwsAutoscalingActions.md#startinstancerefresh)
- [SuspendProcesses](AwsAutoscalingActions.md#suspendprocesses)
- [TerminateInstanceInAutoScalingGroup](AwsAutoscalingActions.md#terminateinstanceinautoscalinggroup)
- [UpdateAutoScalingGroup](AwsAutoscalingActions.md#updateautoscalinggroup)

## Enumeration Members

### AttachInstances

• **AttachInstances** = ``"autoscaling:AttachInstances"``

Grants permission to attach one or more EC2 instances to the specified Auto Sca
ling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachInstances.html

#### Defined in

actions/autoscaling.ts:18

___

### AttachLoadBalancerTargetGroups

• **AttachLoadBalancerTargetGroups** = ``"autoscaling:AttachLoadBalancerTargetGroups"``

Grants permission to attach one or more target groups to the specified Auto Sca
ling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancerTargetGroups.html

#### Defined in

actions/autoscaling.ts:25

___

### AttachLoadBalancers

• **AttachLoadBalancers** = ``"autoscaling:AttachLoadBalancers"``

Grants permission to attach one or more load balancers to the specified Auto Sc
aling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancers.html

#### Defined in

actions/autoscaling.ts:32

___

### AttachTrafficSources

• **AttachTrafficSources** = ``"autoscaling:AttachTrafficSources"``

Grants permission to attach one or more traffic sources to an Auto Scaling grou
p

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachTrafficSources.html

#### Defined in

actions/autoscaling.ts:39

___

### BatchDeleteScheduledAction

• **BatchDeleteScheduledAction** = ``"autoscaling:BatchDeleteScheduledAction"``

Grants permission to delete the specified scheduled actions

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchDeleteScheduledAction.html

#### Defined in

actions/autoscaling.ts:45

___

### BatchPutScheduledUpdateGroupAction

• **BatchPutScheduledUpdateGroupAction** = ``"autoscaling:BatchPutScheduledUpdateGroupAction"``

Grants permission to create or update multiple scheduled scaling actions for an
Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchPutScheduledUpdateGroupAction.html

#### Defined in

actions/autoscaling.ts:52

___

### CancelInstanceRefresh

• **CancelInstanceRefresh** = ``"autoscaling:CancelInstanceRefresh"``

Grants permission to cancel an instance refresh operation in progress

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CancelInstanceRefresh.html

#### Defined in

actions/autoscaling.ts:58

___

### CompleteLifecycleAction

• **CompleteLifecycleAction** = ``"autoscaling:CompleteLifecycleAction"``

Grants permission to complete the lifecycle action for the specified token or i
nstance with the specified result

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CompleteLifecycleAction.html

#### Defined in

actions/autoscaling.ts:65

___

### CreateAutoScalingGroup

• **CreateAutoScalingGroup** = ``"autoscaling:CreateAutoScalingGroup"``

Grants permission to create an Auto Scaling group with the specified name and a
ttributes

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateAutoScalingGroup.html

#### Defined in

actions/autoscaling.ts:72

___

### CreateLaunchConfiguration

• **CreateLaunchConfiguration** = ``"autoscaling:CreateLaunchConfiguration"``

Grants permission to create a launch configuration

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html

#### Defined in

actions/autoscaling.ts:78

___

### CreateOrUpdateTags

• **CreateOrUpdateTags** = ``"autoscaling:CreateOrUpdateTags"``

Grants permission to create or update tags for the specified Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateOrUpdateTags.html

#### Defined in

actions/autoscaling.ts:84

___

### DeleteAutoScalingGroup

• **DeleteAutoScalingGroup** = ``"autoscaling:DeleteAutoScalingGroup"``

Grants permission to delete the specified Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteAutoScalingGroup.html

#### Defined in

actions/autoscaling.ts:90

___

### DeleteLaunchConfiguration

• **DeleteLaunchConfiguration** = ``"autoscaling:DeleteLaunchConfiguration"``

Grants permission to delete the specified launch configuration

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLaunchConfiguration.html

#### Defined in

actions/autoscaling.ts:96

___

### DeleteLifecycleHook

• **DeleteLifecycleHook** = ``"autoscaling:DeleteLifecycleHook"``

Grants permission to deletes the specified lifecycle hook

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLifecycleHook.html

#### Defined in

actions/autoscaling.ts:102

___

### DeleteNotificationConfiguration

• **DeleteNotificationConfiguration** = ``"autoscaling:DeleteNotificationConfiguration"``

Grants permission to delete the specified notification

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteNotificationConfiguration.html

#### Defined in

actions/autoscaling.ts:108

___

### DeletePolicy

• **DeletePolicy** = ``"autoscaling:DeletePolicy"``

Grants permission to delete the specified Auto Scaling policy

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeletePolicy.html

#### Defined in

actions/autoscaling.ts:114

___

### DeleteScheduledAction

• **DeleteScheduledAction** = ``"autoscaling:DeleteScheduledAction"``

Grants permission to delete the specified scheduled action

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteScheduledAction.html

#### Defined in

actions/autoscaling.ts:120

___

### DeleteTags

• **DeleteTags** = ``"autoscaling:DeleteTags"``

Grants permission to delete the specified tags

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteTags.html

#### Defined in

actions/autoscaling.ts:126

___

### DeleteWarmPool

• **DeleteWarmPool** = ``"autoscaling:DeleteWarmPool"``

Grants permission to delete the warm pool associated with the Auto Scaling grou
p

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteWarmPool.html

#### Defined in

actions/autoscaling.ts:133

___

### DescribeAccountLimits

• **DescribeAccountLimits** = ``"autoscaling:DescribeAccountLimits"``

Grants permission to describe the current Auto Scaling resource limits for your
AWS account

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAccountLimits.html

#### Defined in

actions/autoscaling.ts:140

___

### DescribeAdjustmentTypes

• **DescribeAdjustmentTypes** = ``"autoscaling:DescribeAdjustmentTypes"``

Grants permission to describe the policy adjustment types for use with PutScali
ngPolicy

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAdjustmentTypes.html

#### Defined in

actions/autoscaling.ts:147

___

### DescribeAutoScalingGroups

• **DescribeAutoScalingGroups** = ``"autoscaling:DescribeAutoScalingGroups"``

Grants permission to describe one or more Auto Scaling groups. If a list of nam
es is not provided, the call describes all Auto Scaling groups

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingGroups.html

#### Defined in

actions/autoscaling.ts:154

___

### DescribeAutoScalingInstances

• **DescribeAutoScalingInstances** = ``"autoscaling:DescribeAutoScalingInstances"``

Grants permission to describe one or more Auto Scaling instances. If a list is
not provided, the call describes all instances

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingInstances.html

#### Defined in

actions/autoscaling.ts:161

___

### DescribeAutoScalingNotificationTypes

• **DescribeAutoScalingNotificationTypes** = ``"autoscaling:DescribeAutoScalingNotificationTypes"``

Grants permission to describe the notification types that are supported by Auto
Scaling

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingNotificationTypes.html

#### Defined in

actions/autoscaling.ts:168

___

### DescribeInstanceRefreshes

• **DescribeInstanceRefreshes** = ``"autoscaling:DescribeInstanceRefreshes"``

Grants permission to describe one or more instance refreshes for an Auto Scalin
g group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeInstanceRefreshes.html

#### Defined in

actions/autoscaling.ts:175

___

### DescribeLaunchConfigurations

• **DescribeLaunchConfigurations** = ``"autoscaling:DescribeLaunchConfigurations"``

Grants permission to describe one or more launch configurations. If you omit th
e list of names, then the call describes all launch configurations

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLaunchConfigurations.html

#### Defined in

actions/autoscaling.ts:182

___

### DescribeLifecycleHookTypes

• **DescribeLifecycleHookTypes** = ``"autoscaling:DescribeLifecycleHookTypes"``

Grants permission to describe the available types of lifecycle hooks

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHookTypes.html

#### Defined in

actions/autoscaling.ts:188

___

### DescribeLifecycleHooks

• **DescribeLifecycleHooks** = ``"autoscaling:DescribeLifecycleHooks"``

Grants permission to describe the lifecycle hooks for the specified Auto Scalin
g group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHooks.html

#### Defined in

actions/autoscaling.ts:195

___

### DescribeLoadBalancerTargetGroups

• **DescribeLoadBalancerTargetGroups** = ``"autoscaling:DescribeLoadBalancerTargetGroups"``

Grants permission to describe the target groups for the specified Auto Scaling
group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancerTargetGroups.html

#### Defined in

actions/autoscaling.ts:202

___

### DescribeLoadBalancers

• **DescribeLoadBalancers** = ``"autoscaling:DescribeLoadBalancers"``

Grants permission to describe the load balancers for the specified Auto Scaling
group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancers.html

#### Defined in

actions/autoscaling.ts:209

___

### DescribeMetricCollectionTypes

• **DescribeMetricCollectionTypes** = ``"autoscaling:DescribeMetricCollectionTypes"``

Grants permission to describe the available CloudWatch metrics for Auto Scaling

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeMetricCollectionTypes.html

#### Defined in

actions/autoscaling.ts:215

___

### DescribeNotificationConfigurations

• **DescribeNotificationConfigurations** = ``"autoscaling:DescribeNotificationConfigurations"``

Grants permission to describe the notification actions associated with the spec
ified Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeNotificationConfigurations.html

#### Defined in

actions/autoscaling.ts:222

___

### DescribePolicies

• **DescribePolicies** = ``"autoscaling:DescribePolicies"``

Grants permission to describe the policies for the specified Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribePolicies.html

#### Defined in

actions/autoscaling.ts:228

___

### DescribeScalingActivities

• **DescribeScalingActivities** = ``"autoscaling:DescribeScalingActivities"``

Grants permission to describe one or more scaling activities for the specified
Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingActivities.html

#### Defined in

actions/autoscaling.ts:235

___

### DescribeScalingProcessTypes

• **DescribeScalingProcessTypes** = ``"autoscaling:DescribeScalingProcessTypes"``

Grants permission to describe the scaling process types for use with ResumeProc
esses and SuspendProcesses

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingProcessTypes.html

#### Defined in

actions/autoscaling.ts:242

___

### DescribeScheduledActions

• **DescribeScheduledActions** = ``"autoscaling:DescribeScheduledActions"``

Grants permission to describe the actions scheduled for your Auto Scaling group
that haven't run

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScheduledActions.html

#### Defined in

actions/autoscaling.ts:249

___

### DescribeTags

• **DescribeTags** = ``"autoscaling:DescribeTags"``

Grants permission to describe the specified tags

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTags.html

#### Defined in

actions/autoscaling.ts:255

___

### DescribeTerminationPolicyTypes

• **DescribeTerminationPolicyTypes** = ``"autoscaling:DescribeTerminationPolicyTypes"``

Grants permission to describe the termination policies supported by Auto Scalin
g

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTerminationPolicyTypes.html

#### Defined in

actions/autoscaling.ts:262

___

### DescribeTrafficSources

• **DescribeTrafficSources** = ``"autoscaling:DescribeTrafficSources"``

Grants permission to describe the target groups for the specified Auto Scaling
group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTrafficSources.html

#### Defined in

actions/autoscaling.ts:269

___

### DescribeWarmPool

• **DescribeWarmPool** = ``"autoscaling:DescribeWarmPool"``

Grants permission to describe the warm pool associated with the Auto Scaling gr
oup

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeWarmPool.html

#### Defined in

actions/autoscaling.ts:276

___

### DetachInstances

• **DetachInstances** = ``"autoscaling:DetachInstances"``

Grants permission to remove one or more instances from the specified Auto Scali
ng group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachInstances.html

#### Defined in

actions/autoscaling.ts:283

___

### DetachLoadBalancerTargetGroups

• **DetachLoadBalancerTargetGroups** = ``"autoscaling:DetachLoadBalancerTargetGroups"``

Grants permission to detach one or more target groups from the specified Auto S
caling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancerTargetGroups.html

#### Defined in

actions/autoscaling.ts:290

___

### DetachLoadBalancers

• **DetachLoadBalancers** = ``"autoscaling:DetachLoadBalancers"``

Grants permission to remove one or more load balancers from the specified Auto
Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancers.html

#### Defined in

actions/autoscaling.ts:297

___

### DetachTrafficSources

• **DetachTrafficSources** = ``"autoscaling:DetachTrafficSources"``

Grants permission to detach one or more traffic sources from an Auto Scaling gr
oup

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachTrafficSources.html

#### Defined in

actions/autoscaling.ts:304

___

### DisableMetricsCollection

• **DisableMetricsCollection** = ``"autoscaling:DisableMetricsCollection"``

Grants permission to disable monitoring of the specified metrics for the specif
ied Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DisableMetricsCollection.html

#### Defined in

actions/autoscaling.ts:311

___

### EnableMetricsCollection

• **EnableMetricsCollection** = ``"autoscaling:EnableMetricsCollection"``

Grants permission to enable monitoring of the specified metrics for the specifi
ed Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnableMetricsCollection.html

#### Defined in

actions/autoscaling.ts:318

___

### EnterStandby

• **EnterStandby** = ``"autoscaling:EnterStandby"``

Grants permission to move the specified instances into Standby mode

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnterStandby.html

#### Defined in

actions/autoscaling.ts:324

___

### ExecutePolicy

• **ExecutePolicy** = ``"autoscaling:ExecutePolicy"``

Grants permission to execute the specified policy

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExecutePolicy.html

#### Defined in

actions/autoscaling.ts:330

___

### ExitStandby

• **ExitStandby** = ``"autoscaling:ExitStandby"``

Grants permission to move the specified instances out of Standby mode

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExitStandby.html

#### Defined in

actions/autoscaling.ts:336

___

### GetPredictiveScalingForecast

• **GetPredictiveScalingForecast** = ``"autoscaling:GetPredictiveScalingForecast"``

Grants permission to retrieve the forecast data for a predictive scaling policy

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_GetPredictiveScalingForecast.html

#### Defined in

actions/autoscaling.ts:342

___

### PutLifecycleHook

• **PutLifecycleHook** = ``"autoscaling:PutLifecycleHook"``

Grants permission to create or update a lifecycle hook for the specified Auto S
caling Group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutLifecycleHook.html

#### Defined in

actions/autoscaling.ts:349

___

### PutNotificationConfiguration

• **PutNotificationConfiguration** = ``"autoscaling:PutNotificationConfiguration"``

Grants permission to configure an Auto Scaling group to send notifications when
specified events take place

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutNotificationConfiguration.html

#### Defined in

actions/autoscaling.ts:356

___

### PutScalingPolicy

• **PutScalingPolicy** = ``"autoscaling:PutScalingPolicy"``

Grants permission to create or update a policy for an Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScalingPolicy.html

#### Defined in

actions/autoscaling.ts:362

___

### PutScheduledUpdateGroupAction

• **PutScheduledUpdateGroupAction** = ``"autoscaling:PutScheduledUpdateGroupAction"``

Grants permission to create or update a scheduled scaling action for an Auto Sc
aling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScheduledUpdateGroupAction.html

#### Defined in

actions/autoscaling.ts:369

___

### PutWarmPool

• **PutWarmPool** = ``"autoscaling:PutWarmPool"``

Grants permission to create or update the warm pool associated with the specifi
ed Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutWarmPool.html

#### Defined in

actions/autoscaling.ts:376

___

### RecordLifecycleActionHeartbeat

• **RecordLifecycleActionHeartbeat** = ``"autoscaling:RecordLifecycleActionHeartbeat"``

Grants permission to record a heartbeat for the lifecycle action associated wit
h the specified token or instance

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RecordLifecycleActionHeartbeat.html

#### Defined in

actions/autoscaling.ts:383

___

### ResumeProcesses

• **ResumeProcesses** = ``"autoscaling:ResumeProcesses"``

Grants permission to resume the specified suspended Auto Scaling processes, or
all suspended process, for the specified Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ResumeProcesses.html

#### Defined in

actions/autoscaling.ts:390

___

### RollbackInstanceRefresh

• **RollbackInstanceRefresh** = ``"autoscaling:RollbackInstanceRefresh"``

Grants permission to rollback an instance refresh operation in progress

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RollbackInstanceRefresh.html

#### Defined in

actions/autoscaling.ts:396

___

### SetDesiredCapacity

• **SetDesiredCapacity** = ``"autoscaling:SetDesiredCapacity"``

Grants permission to set the size of the specified Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetDesiredCapacity.html

#### Defined in

actions/autoscaling.ts:402

___

### SetInstanceHealth

• **SetInstanceHealth** = ``"autoscaling:SetInstanceHealth"``

Grants permission to set the health status of the specified instance

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceHealth.html

#### Defined in

actions/autoscaling.ts:408

___

### SetInstanceProtection

• **SetInstanceProtection** = ``"autoscaling:SetInstanceProtection"``

Grants permission to update the instance protection settings of the specified i
nstances

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceProtection.html

#### Defined in

actions/autoscaling.ts:415

___

### StartInstanceRefresh

• **StartInstanceRefresh** = ``"autoscaling:StartInstanceRefresh"``

Grants permission to start a new instance refresh operation

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_StartInstanceRefresh.html

#### Defined in

actions/autoscaling.ts:421

___

### SuspendProcesses

• **SuspendProcesses** = ``"autoscaling:SuspendProcesses"``

Grants permission to suspend the specified Auto Scaling processes, or all proce
sses, for the specified Auto Scaling group

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SuspendProcesses.html

#### Defined in

actions/autoscaling.ts:428

___

### TerminateInstanceInAutoScalingGroup

• **TerminateInstanceInAutoScalingGroup** = ``"autoscaling:TerminateInstanceInAutoScalingGroup"``

Grants permission to terminate the specified instance and optionally adjust the
desired group size

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_TerminateInstanceInAutoScalingGroup.html

#### Defined in

actions/autoscaling.ts:435

___

### UpdateAutoScalingGroup

• **UpdateAutoScalingGroup** = ``"autoscaling:UpdateAutoScalingGroup"``

Grants permission to update the configuration for the specified Auto Scaling gr
oup

See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_UpdateAutoScalingGroup.html

#### Defined in

actions/autoscaling.ts:442
