// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon EC2 Auto Scaling (AUTOSCALING)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html
 *
 * 2025-02-24T21:47:42.561Z
 */
export enum AwsAutoscalingActions {
  /**
   * Grants permission to attach one or more EC2 instances to the specified Auto Sca
   * ling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachInstances.html
   */
  AttachInstances = 'autoscaling:AttachInstances',
  /**
   * Grants permission to attach one or more target groups to the specified Auto Sca
   * ling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancerTargetGroups.html
   */
  AttachLoadBalancerTargetGroups = 'autoscaling:AttachLoadBalancerTargetGroups',
  /**
   * Grants permission to attach one or more load balancers to the specified Auto Sc
   * aling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancers.html
   */
  AttachLoadBalancers = 'autoscaling:AttachLoadBalancers',
  /**
   * Grants permission to attach one or more traffic sources to an Auto Scaling grou
   * p
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachTrafficSources.html
   */
  AttachTrafficSources = 'autoscaling:AttachTrafficSources',
  /**
   * Grants permission to delete the specified scheduled actions
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchDeleteScheduledAction.html
   */
  BatchDeleteScheduledAction = 'autoscaling:BatchDeleteScheduledAction',
  /**
   * Grants permission to create or update multiple scheduled scaling actions for an
   * Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchPutScheduledUpdateGroupAction.html
   */
  BatchPutScheduledUpdateGroupAction = 'autoscaling:BatchPutScheduledUpdateGroupAction',
  /**
   * Grants permission to cancel an instance refresh operation in progress
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CancelInstanceRefresh.html
   */
  CancelInstanceRefresh = 'autoscaling:CancelInstanceRefresh',
  /**
   * Grants permission to complete the lifecycle action for the specified token or i
   * nstance with the specified result
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CompleteLifecycleAction.html
   */
  CompleteLifecycleAction = 'autoscaling:CompleteLifecycleAction',
  /**
   * Grants permission to create an Auto Scaling group with the specified name and a
   * ttributes
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateAutoScalingGroup.html
   */
  CreateAutoScalingGroup = 'autoscaling:CreateAutoScalingGroup',
  /**
   * Grants permission to create a launch configuration
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html
   */
  CreateLaunchConfiguration = 'autoscaling:CreateLaunchConfiguration',
  /**
   * Grants permission to create or update tags for the specified Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateOrUpdateTags.html
   */
  CreateOrUpdateTags = 'autoscaling:CreateOrUpdateTags',
  /**
   * Grants permission to delete the specified Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteAutoScalingGroup.html
   */
  DeleteAutoScalingGroup = 'autoscaling:DeleteAutoScalingGroup',
  /**
   * Grants permission to delete the specified launch configuration
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLaunchConfiguration.html
   */
  DeleteLaunchConfiguration = 'autoscaling:DeleteLaunchConfiguration',
  /**
   * Grants permission to deletes the specified lifecycle hook
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLifecycleHook.html
   */
  DeleteLifecycleHook = 'autoscaling:DeleteLifecycleHook',
  /**
   * Grants permission to delete the specified notification
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteNotificationConfiguration.html
   */
  DeleteNotificationConfiguration = 'autoscaling:DeleteNotificationConfiguration',
  /**
   * Grants permission to delete the specified Auto Scaling policy
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeletePolicy.html
   */
  DeletePolicy = 'autoscaling:DeletePolicy',
  /**
   * Grants permission to delete the specified scheduled action
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteScheduledAction.html
   */
  DeleteScheduledAction = 'autoscaling:DeleteScheduledAction',
  /**
   * Grants permission to delete the specified tags
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteTags.html
   */
  DeleteTags = 'autoscaling:DeleteTags',
  /**
   * Grants permission to delete the warm pool associated with the Auto Scaling grou
   * p
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteWarmPool.html
   */
  DeleteWarmPool = 'autoscaling:DeleteWarmPool',
  /**
   * Grants permission to describe the current Auto Scaling resource limits for your
   * AWS account
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAccountLimits.html
   */
  DescribeAccountLimits = 'autoscaling:DescribeAccountLimits',
  /**
   * Grants permission to describe the policy adjustment types for use with PutScali
   * ngPolicy
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAdjustmentTypes.html
   */
  DescribeAdjustmentTypes = 'autoscaling:DescribeAdjustmentTypes',
  /**
   * Grants permission to describe one or more Auto Scaling groups. If a list of nam
   * es is not provided, the call describes all Auto Scaling groups
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingGroups.html
   */
  DescribeAutoScalingGroups = 'autoscaling:DescribeAutoScalingGroups',
  /**
   * Grants permission to describe one or more Auto Scaling instances. If a list is
   * not provided, the call describes all instances
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingInstances.html
   */
  DescribeAutoScalingInstances = 'autoscaling:DescribeAutoScalingInstances',
  /**
   * Grants permission to describe the notification types that are supported by Auto
   * Scaling
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingNotificationTypes.html
   */
  DescribeAutoScalingNotificationTypes = 'autoscaling:DescribeAutoScalingNotificationTypes',
  /**
   * Grants permission to describe one or more instance refreshes for an Auto Scalin
   * g group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeInstanceRefreshes.html
   */
  DescribeInstanceRefreshes = 'autoscaling:DescribeInstanceRefreshes',
  /**
   * Grants permission to describe one or more launch configurations. If you omit th
   * e list of names, then the call describes all launch configurations
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLaunchConfigurations.html
   */
  DescribeLaunchConfigurations = 'autoscaling:DescribeLaunchConfigurations',
  /**
   * Grants permission to describe the available types of lifecycle hooks
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHookTypes.html
   */
  DescribeLifecycleHookTypes = 'autoscaling:DescribeLifecycleHookTypes',
  /**
   * Grants permission to describe the lifecycle hooks for the specified Auto Scalin
   * g group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHooks.html
   */
  DescribeLifecycleHooks = 'autoscaling:DescribeLifecycleHooks',
  /**
   * Grants permission to describe the target groups for the specified Auto Scaling
   * group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancerTargetGroups.html
   */
  DescribeLoadBalancerTargetGroups = 'autoscaling:DescribeLoadBalancerTargetGroups',
  /**
   * Grants permission to describe the load balancers for the specified Auto Scaling
   * group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancers.html
   */
  DescribeLoadBalancers = 'autoscaling:DescribeLoadBalancers',
  /**
   * Grants permission to describe the available CloudWatch metrics for Auto Scaling
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeMetricCollectionTypes.html
   */
  DescribeMetricCollectionTypes = 'autoscaling:DescribeMetricCollectionTypes',
  /**
   * Grants permission to describe the notification actions associated with the spec
   * ified Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeNotificationConfigurations.html
   */
  DescribeNotificationConfigurations = 'autoscaling:DescribeNotificationConfigurations',
  /**
   * Grants permission to describe the policies for the specified Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribePolicies.html
   */
  DescribePolicies = 'autoscaling:DescribePolicies',
  /**
   * Grants permission to describe one or more scaling activities for the specified
   * Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingActivities.html
   */
  DescribeScalingActivities = 'autoscaling:DescribeScalingActivities',
  /**
   * Grants permission to describe the scaling process types for use with ResumeProc
   * esses and SuspendProcesses
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingProcessTypes.html
   */
  DescribeScalingProcessTypes = 'autoscaling:DescribeScalingProcessTypes',
  /**
   * Grants permission to describe the actions scheduled for your Auto Scaling group
   * that haven't run
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScheduledActions.html
   */
  DescribeScheduledActions = 'autoscaling:DescribeScheduledActions',
  /**
   * Grants permission to describe the specified tags
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTags.html
   */
  DescribeTags = 'autoscaling:DescribeTags',
  /**
   * Grants permission to describe the termination policies supported by Auto Scalin
   * g
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTerminationPolicyTypes.html
   */
  DescribeTerminationPolicyTypes = 'autoscaling:DescribeTerminationPolicyTypes',
  /**
   * Grants permission to describe the target groups for the specified Auto Scaling
   * group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTrafficSources.html
   */
  DescribeTrafficSources = 'autoscaling:DescribeTrafficSources',
  /**
   * Grants permission to describe the warm pool associated with the Auto Scaling gr
   * oup
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeWarmPool.html
   */
  DescribeWarmPool = 'autoscaling:DescribeWarmPool',
  /**
   * Grants permission to remove one or more instances from the specified Auto Scali
   * ng group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachInstances.html
   */
  DetachInstances = 'autoscaling:DetachInstances',
  /**
   * Grants permission to detach one or more target groups from the specified Auto S
   * caling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancerTargetGroups.html
   */
  DetachLoadBalancerTargetGroups = 'autoscaling:DetachLoadBalancerTargetGroups',
  /**
   * Grants permission to remove one or more load balancers from the specified Auto
   * Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancers.html
   */
  DetachLoadBalancers = 'autoscaling:DetachLoadBalancers',
  /**
   * Grants permission to detach one or more traffic sources from an Auto Scaling gr
   * oup
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachTrafficSources.html
   */
  DetachTrafficSources = 'autoscaling:DetachTrafficSources',
  /**
   * Grants permission to disable monitoring of the specified metrics for the specif
   * ied Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DisableMetricsCollection.html
   */
  DisableMetricsCollection = 'autoscaling:DisableMetricsCollection',
  /**
   * Grants permission to enable monitoring of the specified metrics for the specifi
   * ed Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnableMetricsCollection.html
   */
  EnableMetricsCollection = 'autoscaling:EnableMetricsCollection',
  /**
   * Grants permission to move the specified instances into Standby mode
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnterStandby.html
   */
  EnterStandby = 'autoscaling:EnterStandby',
  /**
   * Grants permission to execute the specified policy
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExecutePolicy.html
   */
  ExecutePolicy = 'autoscaling:ExecutePolicy',
  /**
   * Grants permission to move the specified instances out of Standby mode
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExitStandby.html
   */
  ExitStandby = 'autoscaling:ExitStandby',
  /**
   * Grants permission to retrieve the forecast data for a predictive scaling policy
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_GetPredictiveScalingForecast.html
   */
  GetPredictiveScalingForecast = 'autoscaling:GetPredictiveScalingForecast',
  /**
   * Grants permission to create or update a lifecycle hook for the specified Auto S
   * caling Group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutLifecycleHook.html
   */
  PutLifecycleHook = 'autoscaling:PutLifecycleHook',
  /**
   * Grants permission to configure an Auto Scaling group to send notifications when
   * specified events take place
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutNotificationConfiguration.html
   */
  PutNotificationConfiguration = 'autoscaling:PutNotificationConfiguration',
  /**
   * Grants permission to create or update a policy for an Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScalingPolicy.html
   */
  PutScalingPolicy = 'autoscaling:PutScalingPolicy',
  /**
   * Grants permission to create or update a scheduled scaling action for an Auto Sc
   * aling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScheduledUpdateGroupAction.html
   */
  PutScheduledUpdateGroupAction = 'autoscaling:PutScheduledUpdateGroupAction',
  /**
   * Grants permission to create or update the warm pool associated with the specifi
   * ed Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutWarmPool.html
   */
  PutWarmPool = 'autoscaling:PutWarmPool',
  /**
   * Grants permission to record a heartbeat for the lifecycle action associated wit
   * h the specified token or instance
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RecordLifecycleActionHeartbeat.html
   */
  RecordLifecycleActionHeartbeat = 'autoscaling:RecordLifecycleActionHeartbeat',
  /**
   * Grants permission to resume the specified suspended Auto Scaling processes, or
   * all suspended process, for the specified Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ResumeProcesses.html
   */
  ResumeProcesses = 'autoscaling:ResumeProcesses',
  /**
   * Grants permission to rollback an instance refresh operation in progress
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RollbackInstanceRefresh.html
   */
  RollbackInstanceRefresh = 'autoscaling:RollbackInstanceRefresh',
  /**
   * Grants permission to set the size of the specified Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetDesiredCapacity.html
   */
  SetDesiredCapacity = 'autoscaling:SetDesiredCapacity',
  /**
   * Grants permission to set the health status of the specified instance
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceHealth.html
   */
  SetInstanceHealth = 'autoscaling:SetInstanceHealth',
  /**
   * Grants permission to update the instance protection settings of the specified i
   * nstances
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceProtection.html
   */
  SetInstanceProtection = 'autoscaling:SetInstanceProtection',
  /**
   * Grants permission to start a new instance refresh operation
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_StartInstanceRefresh.html
   */
  StartInstanceRefresh = 'autoscaling:StartInstanceRefresh',
  /**
   * Grants permission to suspend the specified Auto Scaling processes, or all proce
   * sses, for the specified Auto Scaling group
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SuspendProcesses.html
   */
  SuspendProcesses = 'autoscaling:SuspendProcesses',
  /**
   * Grants permission to terminate the specified instance and optionally adjust the
   * desired group size
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_TerminateInstanceInAutoScalingGroup.html
   */
  TerminateInstanceInAutoScalingGroup = 'autoscaling:TerminateInstanceInAutoScalingGroup',
  /**
   * Grants permission to update the configuration for the specified Auto Scaling gr
   * oup
   *
   * See https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_UpdateAutoScalingGroup.html
   */
  UpdateAutoScalingGroup = 'autoscaling:UpdateAutoScalingGroup',
}
