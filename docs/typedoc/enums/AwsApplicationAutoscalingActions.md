[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsApplicationAutoscalingActions

# Enumeration: AwsApplicationAutoscalingActions

All IAM policy actions for AWS Application Auto Scaling (APPLICATION-AUTOSCALING)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationautoscaling.html

2024-02-12T09:56:01.651Z

## Table of contents

### Enumeration Members

- [DeleteScalingPolicy](AwsApplicationAutoscalingActions.md#deletescalingpolicy)
- [DeleteScheduledAction](AwsApplicationAutoscalingActions.md#deletescheduledaction)
- [DeregisterScalableTarget](AwsApplicationAutoscalingActions.md#deregisterscalabletarget)
- [DescribeScalableTargets](AwsApplicationAutoscalingActions.md#describescalabletargets)
- [DescribeScalingActivities](AwsApplicationAutoscalingActions.md#describescalingactivities)
- [DescribeScalingPolicies](AwsApplicationAutoscalingActions.md#describescalingpolicies)
- [DescribeScheduledActions](AwsApplicationAutoscalingActions.md#describescheduledactions)
- [ListTagsForResource](AwsApplicationAutoscalingActions.md#listtagsforresource)
- [PutScalingPolicy](AwsApplicationAutoscalingActions.md#putscalingpolicy)
- [PutScheduledAction](AwsApplicationAutoscalingActions.md#putscheduledaction)
- [RegisterScalableTarget](AwsApplicationAutoscalingActions.md#registerscalabletarget)
- [TagResource](AwsApplicationAutoscalingActions.md#tagresource)
- [UntagResource](AwsApplicationAutoscalingActions.md#untagresource)

## Enumeration Members

### DeleteScalingPolicy

• **DeleteScalingPolicy** = ``"application-autoscaling:DeleteScalingPolicy"``

Grants permission to delete a scaling policy

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScalingPolicy.html

#### Defined in

actions/application-autoscaling.ts:17

___

### DeleteScheduledAction

• **DeleteScheduledAction** = ``"application-autoscaling:DeleteScheduledAction"``

Grants permission to delete a scheduled action

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScheduledAction.html

#### Defined in

actions/application-autoscaling.ts:23

___

### DeregisterScalableTarget

• **DeregisterScalableTarget** = ``"application-autoscaling:DeregisterScalableTarget"``

Grants permission to deregister a scalable target

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html

#### Defined in

actions/application-autoscaling.ts:29

___

### DescribeScalableTargets

• **DescribeScalableTargets** = ``"application-autoscaling:DescribeScalableTargets"``

Grants permission to describe one or more scalable targets in the specified nam
espace

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html

#### Defined in

actions/application-autoscaling.ts:36

___

### DescribeScalingActivities

• **DescribeScalingActivities** = ``"application-autoscaling:DescribeScalingActivities"``

Grants permission to describe a set of scaling activities or all scaling activi
ties in the specified namespace

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html

#### Defined in

actions/application-autoscaling.ts:43

___

### DescribeScalingPolicies

• **DescribeScalingPolicies** = ``"application-autoscaling:DescribeScalingPolicies"``

Grants permission to describe a set of scaling policies or all scaling policies
in the specified namespace

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingPolicies.html

#### Defined in

actions/application-autoscaling.ts:50

___

### DescribeScheduledActions

• **DescribeScheduledActions** = ``"application-autoscaling:DescribeScheduledActions"``

Grants permission to describe a set of scheduled actions or all scheduled actio
ns in the specified namespace

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScheduledActions.html

#### Defined in

actions/application-autoscaling.ts:57

___

### ListTagsForResource

• **ListTagsForResource** = ``"application-autoscaling:ListTagsForResource"``

Grants permission to list tags for a scalable target

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_ListTagsForResource.html

#### Defined in

actions/application-autoscaling.ts:63

___

### PutScalingPolicy

• **PutScalingPolicy** = ``"application-autoscaling:PutScalingPolicy"``

Grants permission to create and update a scaling policy for a scalable target

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScalingPolicy.html

#### Defined in

actions/application-autoscaling.ts:69

___

### PutScheduledAction

• **PutScheduledAction** = ``"application-autoscaling:PutScheduledAction"``

Grants permission to create and update a scheduled action for a scalable target

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html

#### Defined in

actions/application-autoscaling.ts:75

___

### RegisterScalableTarget

• **RegisterScalableTarget** = ``"application-autoscaling:RegisterScalableTarget"``

Grants permission to register AWS or custom resources as scalable targets with
Application Auto Scaling and to update configuration parameters used to manage
a scalable target

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html

#### Defined in

actions/application-autoscaling.ts:83

___

### TagResource

• **TagResource** = ``"application-autoscaling:TagResource"``

Grants permission to tag a scalable target

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_TagResource.html

#### Defined in

actions/application-autoscaling.ts:89

___

### UntagResource

• **UntagResource** = ``"application-autoscaling:UntagResource"``

Grants permission to remove tags from a scalable target

See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_UntagResource.html

#### Defined in

actions/application-autoscaling.ts:95
