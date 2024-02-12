[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsComputeOptimizerActions

# Enumeration: AwsComputeOptimizerActions

All IAM policy actions for AWS Compute Optimizer (COMPUTE-OPTIMIZER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscomputeoptimizer.html

2024-02-12T09:56:43.474Z

## Table of contents

### Enumeration Members

- [DeleteRecommendationPreferences](AwsComputeOptimizerActions.md#deleterecommendationpreferences)
- [DescribeRecommendationExportJobs](AwsComputeOptimizerActions.md#describerecommendationexportjobs)
- [ExportAutoScalingGroupRecommendations](AwsComputeOptimizerActions.md#exportautoscalinggrouprecommendations)
- [ExportEBSVolumeRecommendations](AwsComputeOptimizerActions.md#exportebsvolumerecommendations)
- [ExportEC2InstanceRecommendations](AwsComputeOptimizerActions.md#exportec2instancerecommendations)
- [ExportECSServiceRecommendations](AwsComputeOptimizerActions.md#exportecsservicerecommendations)
- [ExportLambdaFunctionRecommendations](AwsComputeOptimizerActions.md#exportlambdafunctionrecommendations)
- [ExportLicenseRecommendations](AwsComputeOptimizerActions.md#exportlicenserecommendations)
- [GetAutoScalingGroupRecommendations](AwsComputeOptimizerActions.md#getautoscalinggrouprecommendations)
- [GetEBSVolumeRecommendations](AwsComputeOptimizerActions.md#getebsvolumerecommendations)
- [GetEC2InstanceRecommendations](AwsComputeOptimizerActions.md#getec2instancerecommendations)
- [GetEC2RecommendationProjectedMetrics](AwsComputeOptimizerActions.md#getec2recommendationprojectedmetrics)
- [GetECSServiceRecommendationProjectedMetrics](AwsComputeOptimizerActions.md#getecsservicerecommendationprojectedmetrics)
- [GetECSServiceRecommendations](AwsComputeOptimizerActions.md#getecsservicerecommendations)
- [GetEffectiveRecommendationPreferences](AwsComputeOptimizerActions.md#geteffectiverecommendationpreferences)
- [GetEnrollmentStatus](AwsComputeOptimizerActions.md#getenrollmentstatus)
- [GetEnrollmentStatusesForOrganization](AwsComputeOptimizerActions.md#getenrollmentstatusesfororganization)
- [GetLambdaFunctionRecommendations](AwsComputeOptimizerActions.md#getlambdafunctionrecommendations)
- [GetLicenseRecommendations](AwsComputeOptimizerActions.md#getlicenserecommendations)
- [GetRecommendationPreferences](AwsComputeOptimizerActions.md#getrecommendationpreferences)
- [GetRecommendationSummaries](AwsComputeOptimizerActions.md#getrecommendationsummaries)
- [PutRecommendationPreferences](AwsComputeOptimizerActions.md#putrecommendationpreferences)
- [UpdateEnrollmentStatus](AwsComputeOptimizerActions.md#updateenrollmentstatus)

## Enumeration Members

### DeleteRecommendationPreferences

• **DeleteRecommendationPreferences** = ``"compute-optimizer:DeleteRecommendationPreferences"``

Grants permission to delete recommendation preferences

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_DeleteRecommendationPreferences.html

#### Defined in

actions/compute-optimizer.ts:17

___

### DescribeRecommendationExportJobs

• **DescribeRecommendationExportJobs** = ``"compute-optimizer:DescribeRecommendationExportJobs"``

Grants permission to view the status of recommendation export jobs

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_DescribeRecommendationExportJobs.html

#### Defined in

actions/compute-optimizer.ts:23

___

### ExportAutoScalingGroupRecommendations

• **ExportAutoScalingGroupRecommendations** = ``"compute-optimizer:ExportAutoScalingGroupRecommendations"``

Grants permission to export AutoScaling group recommendations to S3 for the pro
vided accounts

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportAutoScalingGroupRecommendations.html

#### Defined in

actions/compute-optimizer.ts:30

___

### ExportEBSVolumeRecommendations

• **ExportEBSVolumeRecommendations** = ``"compute-optimizer:ExportEBSVolumeRecommendations"``

Grants permission to export EBS volume recommendations to S3 for the provided a
ccounts

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportEBSVolumeRecommendations.html

#### Defined in

actions/compute-optimizer.ts:37

___

### ExportEC2InstanceRecommendations

• **ExportEC2InstanceRecommendations** = ``"compute-optimizer:ExportEC2InstanceRecommendations"``

Grants permission to export EC2 instance recommendations to S3 for the provided
accounts

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportEC2InstanceRecommendations.html

#### Defined in

actions/compute-optimizer.ts:44

___

### ExportECSServiceRecommendations

• **ExportECSServiceRecommendations** = ``"compute-optimizer:ExportECSServiceRecommendations"``

Grants permission to export ECS service recommendations to S3 for the provided
accounts

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportECSServiceRecommendations.html

#### Defined in

actions/compute-optimizer.ts:51

___

### ExportLambdaFunctionRecommendations

• **ExportLambdaFunctionRecommendations** = ``"compute-optimizer:ExportLambdaFunctionRecommendations"``

Grants permission to export Lambda function recommendations to S3 for the provi
ded accounts

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportLambdaFunctionRecommendations.html

#### Defined in

actions/compute-optimizer.ts:58

___

### ExportLicenseRecommendations

• **ExportLicenseRecommendations** = ``"compute-optimizer:ExportLicenseRecommendations"``

Grants permission to export license recommendations to S3 for the provided acco
unt(s)

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportLicenseRecommendations.html

#### Defined in

actions/compute-optimizer.ts:65

___

### GetAutoScalingGroupRecommendations

• **GetAutoScalingGroupRecommendations** = ``"compute-optimizer:GetAutoScalingGroupRecommendations"``

Grants permission to get recommendations for the provided AutoScaling groups

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetAutoScalingGroupRecommendations.html

#### Defined in

actions/compute-optimizer.ts:71

___

### GetEBSVolumeRecommendations

• **GetEBSVolumeRecommendations** = ``"compute-optimizer:GetEBSVolumeRecommendations"``

Grants permission to get recommendations for the provided EBS volumes

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEBSVolumeRecommendations.html

#### Defined in

actions/compute-optimizer.ts:77

___

### GetEC2InstanceRecommendations

• **GetEC2InstanceRecommendations** = ``"compute-optimizer:GetEC2InstanceRecommendations"``

Grants permission to get recommendations for the provided EC2 instances

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2InstanceRecommendations.html

#### Defined in

actions/compute-optimizer.ts:83

___

### GetEC2RecommendationProjectedMetrics

• **GetEC2RecommendationProjectedMetrics** = ``"compute-optimizer:GetEC2RecommendationProjectedMetrics"``

Grants permission to get the recommendation projected metrics of the specified
instance

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2RecommendationProjectedMetrics.html

#### Defined in

actions/compute-optimizer.ts:90

___

### GetECSServiceRecommendationProjectedMetrics

• **GetECSServiceRecommendationProjectedMetrics** = ``"compute-optimizer:GetECSServiceRecommendationProjectedMetrics"``

Grants permission to get the recommendation projected metrics of the specified
ECS service

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetECSServiceRecommendationProjectedMetrics.html

#### Defined in

actions/compute-optimizer.ts:97

___

### GetECSServiceRecommendations

• **GetECSServiceRecommendations** = ``"compute-optimizer:GetECSServiceRecommendations"``

Grants permission to get recommendations for the provided ECS services

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetECSServiceRecommendations.html

#### Defined in

actions/compute-optimizer.ts:103

___

### GetEffectiveRecommendationPreferences

• **GetEffectiveRecommendationPreferences** = ``"compute-optimizer:GetEffectiveRecommendationPreferences"``

Grants permission to get recommendation preferences that are in effect

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEffectiveRecommendationPreferences.html

#### Defined in

actions/compute-optimizer.ts:109

___

### GetEnrollmentStatus

• **GetEnrollmentStatus** = ``"compute-optimizer:GetEnrollmentStatus"``

Grants permission to get the enrollment status for the specified account

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEnrollmentStatus.html

#### Defined in

actions/compute-optimizer.ts:115

___

### GetEnrollmentStatusesForOrganization

• **GetEnrollmentStatusesForOrganization** = ``"compute-optimizer:GetEnrollmentStatusesForOrganization"``

Grants permission to get the enrollment statuses for member accounts of the org
anization

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEnrollmentStatusesForOrganization.html

#### Defined in

actions/compute-optimizer.ts:122

___

### GetLambdaFunctionRecommendations

• **GetLambdaFunctionRecommendations** = ``"compute-optimizer:GetLambdaFunctionRecommendations"``

Grants permission to get recommendations for the provided Lambda functions

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetLambdaFunctionRecommendations.html

#### Defined in

actions/compute-optimizer.ts:128

___

### GetLicenseRecommendations

• **GetLicenseRecommendations** = ``"compute-optimizer:GetLicenseRecommendations"``

Grants permission to get license recommendations for the specified account(s)

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetLicenseRecommendations.html

#### Defined in

actions/compute-optimizer.ts:134

___

### GetRecommendationPreferences

• **GetRecommendationPreferences** = ``"compute-optimizer:GetRecommendationPreferences"``

Grants permission to get recommendation preferences

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRecommendationPreferences.html

#### Defined in

actions/compute-optimizer.ts:140

___

### GetRecommendationSummaries

• **GetRecommendationSummaries** = ``"compute-optimizer:GetRecommendationSummaries"``

Grants permission to get the recommendation summaries for the specified account
(s)

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRecommendationSummaries.html

#### Defined in

actions/compute-optimizer.ts:147

___

### PutRecommendationPreferences

• **PutRecommendationPreferences** = ``"compute-optimizer:PutRecommendationPreferences"``

Grants permission to put recommendation preferences

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_PutRecommendationPreferences.html

#### Defined in

actions/compute-optimizer.ts:153

___

### UpdateEnrollmentStatus

• **UpdateEnrollmentStatus** = ``"compute-optimizer:UpdateEnrollmentStatus"``

Grants permission to update the enrollment status

See https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_UpdateEnrollmentStatus.html

#### Defined in

actions/compute-optimizer.ts:159
