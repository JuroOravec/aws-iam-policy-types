[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSnowDeviceManagementActions

# Enumeration: AwsSnowDeviceManagementActions

All IAM policy actions for AWS Snow Device Management (SNOW-DEVICE-MANAGEMENT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowdevicemanagement.html

2024-02-12T09:59:18.573Z

## Table of contents

### Enumeration Members

- [CancelTask](AwsSnowDeviceManagementActions.md#canceltask)
- [CreateTask](AwsSnowDeviceManagementActions.md#createtask)
- [DescribeDevice](AwsSnowDeviceManagementActions.md#describedevice)
- [DescribeDeviceEc2Instances](AwsSnowDeviceManagementActions.md#describedeviceec2instances)
- [DescribeExecution](AwsSnowDeviceManagementActions.md#describeexecution)
- [DescribeTask](AwsSnowDeviceManagementActions.md#describetask)
- [ListDeviceResources](AwsSnowDeviceManagementActions.md#listdeviceresources)
- [ListDevices](AwsSnowDeviceManagementActions.md#listdevices)
- [ListExecutions](AwsSnowDeviceManagementActions.md#listexecutions)
- [ListTagsForResource](AwsSnowDeviceManagementActions.md#listtagsforresource)
- [ListTasks](AwsSnowDeviceManagementActions.md#listtasks)
- [TagResource](AwsSnowDeviceManagementActions.md#tagresource)
- [UntagResource](AwsSnowDeviceManagementActions.md#untagresource)

## Enumeration Members

### CancelTask

• **CancelTask** = ``"snow-device-management:CancelTask"``

Grants permission to cancel tasks on remote devices

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-cancel-task.html

#### Defined in

actions/snow-device-management.ts:17

___

### CreateTask

• **CreateTask** = ``"snow-device-management:CreateTask"``

Grants permission to create tasks on remote devices

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-create-task.html

#### Defined in

actions/snow-device-management.ts:23

___

### DescribeDevice

• **DescribeDevice** = ``"snow-device-management:DescribeDevice"``

Grants permission to describe a remotely-managed device

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-device.html

#### Defined in

actions/snow-device-management.ts:29

___

### DescribeDeviceEc2Instances

• **DescribeDeviceEc2Instances** = ``"snow-device-management:DescribeDeviceEc2Instances"``

Grants permission to describe a remotely-managed device's EC2 instances

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-ec2-instances.html

#### Defined in

actions/snow-device-management.ts:35

___

### DescribeExecution

• **DescribeExecution** = ``"snow-device-management:DescribeExecution"``

Grants permission to describe task executions

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-execution.html

#### Defined in

actions/snow-device-management.ts:41

___

### DescribeTask

• **DescribeTask** = ``"snow-device-management:DescribeTask"``

Grants permission to describe a task

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-task.html

#### Defined in

actions/snow-device-management.ts:47

___

### ListDeviceResources

• **ListDeviceResources** = ``"snow-device-management:ListDeviceResources"``

Grants permission to list a remotely-managed device's resources

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-device-resources.html

#### Defined in

actions/snow-device-management.ts:53

___

### ListDevices

• **ListDevices** = ``"snow-device-management:ListDevices"``

Grants permission to list remotely-managed devices

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-devices.html

#### Defined in

actions/snow-device-management.ts:59

___

### ListExecutions

• **ListExecutions** = ``"snow-device-management:ListExecutions"``

Grants permission to list task executions

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-executions.html

#### Defined in

actions/snow-device-management.ts:65

___

### ListTagsForResource

• **ListTagsForResource** = ``"snow-device-management:ListTagsForResource"``

Grants permission to list the tags for a resource (device or task)

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-tags-for-resource.html

#### Defined in

actions/snow-device-management.ts:71

___

### ListTasks

• **ListTasks** = ``"snow-device-management:ListTasks"``

Grants permission to list tasks

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-tasks.html

#### Defined in

actions/snow-device-management.ts:77

___

### TagResource

• **TagResource** = ``"snow-device-management:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-tag-resource.html

#### Defined in

actions/snow-device-management.ts:83

___

### UntagResource

• **UntagResource** = ``"snow-device-management:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-untag-resources.html

#### Defined in

actions/snow-device-management.ts:89
