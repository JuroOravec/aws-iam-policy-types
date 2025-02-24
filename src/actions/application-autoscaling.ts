// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Application Auto Scaling (APPLICATION-AUTOSCALING)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationautoscaling.html
 *
 * 2025-02-24T21:46:43.214Z
 */
export enum AwsApplicationAutoscalingActions {
  /**
   * Grants permission to delete a scaling policy
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScalingPolicy.html
   */
  DeleteScalingPolicy = 'application-autoscaling:DeleteScalingPolicy',
  /**
   * Grants permission to delete a scheduled action
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScheduledAction.html
   */
  DeleteScheduledAction = 'application-autoscaling:DeleteScheduledAction',
  /**
   * Grants permission to deregister a scalable target
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html
   */
  DeregisterScalableTarget = 'application-autoscaling:DeregisterScalableTarget',
  /**
   * Grants permission to describe one or more scalable targets in the specified nam
   * espace
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html
   */
  DescribeScalableTargets = 'application-autoscaling:DescribeScalableTargets',
  /**
   * Grants permission to describe a set of scaling activities or all scaling activi
   * ties in the specified namespace
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html
   */
  DescribeScalingActivities = 'application-autoscaling:DescribeScalingActivities',
  /**
   * Grants permission to describe a set of scaling policies or all scaling policies
   * in the specified namespace
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingPolicies.html
   */
  DescribeScalingPolicies = 'application-autoscaling:DescribeScalingPolicies',
  /**
   * Grants permission to describe a set of scheduled actions or all scheduled actio
   * ns in the specified namespace
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScheduledActions.html
   */
  DescribeScheduledActions = 'application-autoscaling:DescribeScheduledActions',
  /**
   * Grants permission to retrieve the forecast data for a predictive scaling policy
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_GetPredictiveScalingForecast.html
   */
  GetPredictiveScalingForecast = 'application-autoscaling:GetPredictiveScalingForecast',
  /**
   * Grants permission to list tags for a scalable target
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'application-autoscaling:ListTagsForResource',
  /**
   * Grants permission to create and update a scaling policy for a scalable target
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScalingPolicy.html
   */
  PutScalingPolicy = 'application-autoscaling:PutScalingPolicy',
  /**
   * Grants permission to create and update a scheduled action for a scalable target
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html
   */
  PutScheduledAction = 'application-autoscaling:PutScheduledAction',
  /**
   * Grants permission to register AWS or custom resources as scalable targets with
   * Application Auto Scaling and to update configuration parameters used to manage
   * a scalable target
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html
   */
  RegisterScalableTarget = 'application-autoscaling:RegisterScalableTarget',
  /**
   * Grants permission to tag a scalable target
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_TagResource.html
   */
  TagResource = 'application-autoscaling:TagResource',
  /**
   * Grants permission to remove tags from a scalable target
   *
   * See https://docs.aws.amazon.com/autoscaling/application/APIReference/API_UntagResource.html
   */
  UntagResource = 'application-autoscaling:UntagResource',
}
