// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Snow Device Management (SNOW-DEVICE-MANAGEMENT)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowdevicemanagement.html
 *
 * 2024-02-12T09:59:18.573Z
 */
export enum AwsSnowDeviceManagementActions {
  /**
   * Grants permission to cancel tasks on remote devices
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-cancel-task.html
   */
  CancelTask = 'snow-device-management:CancelTask',
  /**
   * Grants permission to create tasks on remote devices
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-create-task.html
   */
  CreateTask = 'snow-device-management:CreateTask',
  /**
   * Grants permission to describe a remotely-managed device
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-device.html
   */
  DescribeDevice = 'snow-device-management:DescribeDevice',
  /**
   * Grants permission to describe a remotely-managed device's EC2 instances
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-ec2-instances.html
   */
  DescribeDeviceEc2Instances = 'snow-device-management:DescribeDeviceEc2Instances',
  /**
   * Grants permission to describe task executions
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-execution.html
   */
  DescribeExecution = 'snow-device-management:DescribeExecution',
  /**
   * Grants permission to describe a task
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-task.html
   */
  DescribeTask = 'snow-device-management:DescribeTask',
  /**
   * Grants permission to list a remotely-managed device's resources
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-device-resources.html
   */
  ListDeviceResources = 'snow-device-management:ListDeviceResources',
  /**
   * Grants permission to list remotely-managed devices
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-devices.html
   */
  ListDevices = 'snow-device-management:ListDevices',
  /**
   * Grants permission to list task executions
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-executions.html
   */
  ListExecutions = 'snow-device-management:ListExecutions',
  /**
   * Grants permission to list the tags for a resource (device or task)
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-tags-for-resource.html
   */
  ListTagsForResource = 'snow-device-management:ListTagsForResource',
  /**
   * Grants permission to list tasks
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-tasks.html
   */
  ListTasks = 'snow-device-management:ListTasks',
  /**
   * Grants permission to tag a resource
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-tag-resource.html
   */
  TagResource = 'snow-device-management:TagResource',
  /**
   * Grants permission to untag a resource
   *
   * See https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-untag-resources.html
   */
  UntagResource = 'snow-device-management:UntagResource',
}
