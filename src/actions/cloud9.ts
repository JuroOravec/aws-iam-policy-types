// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Cloud9 (CLOUD9)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloud9.html
 *
 * 2024-02-12T09:56:21.091Z
 */
export enum AwsCloud9Actions {
  /**
   * Grants permission to start the Amazon EC2 instance that your AWS Cloud9 IDE con
   * nects to
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  ActivateEC2Remote = 'cloud9:ActivateEC2Remote',
  /**
   * Grants permission to create an AWS Cloud9 development environment, launches an
   * Amazon Elastic Compute Cloud (Amazon EC2) instance, and then hosts the environm
   * ent on the instance
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentEC2.html
   */
  CreateEnvironmentEC2 = 'cloud9:CreateEnvironmentEC2',
  /**
   * Grants permission to add an environment member to an AWS Cloud9 development env
   * ironment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentMembership.html
   */
  CreateEnvironmentMembership = 'cloud9:CreateEnvironmentMembership',
  /**
   * Grants permission to create an AWS Cloud9 SSH development environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  CreateEnvironmentSSH = 'cloud9:CreateEnvironmentSSH',
  /**
   * Grants permission to create an authentication token that allows a connection be
   * tween the AWS Cloud9 IDE and the user's environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  CreateEnvironmentToken = 'cloud9:CreateEnvironmentToken',
  /**
   * Grants permission to delete an AWS Cloud9 development environment. If the envir
   * onment is hosted on an Amazon Elastic Compute Cloud (Amazon EC2) instance, also
   * terminates the instance
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironment.html
   */
  DeleteEnvironment = 'cloud9:DeleteEnvironment',
  /**
   * Grants permission to delete an environment member from an AWS Cloud9 developmen
   * t environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironmentMembership.html
   */
  DeleteEnvironmentMembership = 'cloud9:DeleteEnvironmentMembership',
  /**
   * Grants permission to get details about the connection to the EC2 development en
   * vironment, including host, user, and port
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  DescribeEC2Remote = 'cloud9:DescribeEC2Remote',
  /**
   * Grants permission to get information about environment members for an AWS Cloud
   * 9 development environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentMemberships.html
   */
  DescribeEnvironmentMemberships = 'cloud9:DescribeEnvironmentMemberships',
  /**
   * Grants permission to get status information for an AWS Cloud9 development envir
   * onment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentStatus.html
   */
  DescribeEnvironmentStatus = 'cloud9:DescribeEnvironmentStatus',
  /**
   * Grants permission to get information about AWS Cloud9 development environments
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironments.html
   */
  DescribeEnvironments = 'cloud9:DescribeEnvironments',
  /**
   * Grants permission to get details about the connection to the SSH development en
   * vironment, including host, user, and port
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  DescribeSSHRemote = 'cloud9:DescribeSSHRemote',
  /**
   * Grants permission to get configuration information that's used to initialize th
   * e AWS Cloud9 IDE
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  GetEnvironmentConfig = 'cloud9:GetEnvironmentConfig',
  /**
   * Grants permission to get the AWS Cloud9 IDE settings for a specified developmen
   * t environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  GetEnvironmentSettings = 'cloud9:GetEnvironmentSettings',
  /**
   * Grants permission to get the AWS Cloud9 IDE settings for a specified environmen
   * t member
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  GetMembershipSettings = 'cloud9:GetMembershipSettings',
  /**
   * Grants permission to get the migration experience for a cloud9 user
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  GetMigrationExperiences = 'cloud9:GetMigrationExperiences',
  /**
   * Grants permission to get the user's public SSH key, which is used by AWS Cloud9
   * to connect to SSH development environments
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  GetUserPublicKey = 'cloud9:GetUserPublicKey',
  /**
   * Grants permission to get the AWS Cloud9 IDE settings for a specified user
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  GetUserSettings = 'cloud9:GetUserSettings',
  /**
   * Grants permission to get a list of AWS Cloud9 development environment identifie
   * rs
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListEnvironments.html
   */
  ListEnvironments = 'cloud9:ListEnvironments',
  /**
   * Grants permission to list tags for a cloud9 environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'cloud9:ListTagsForResource',
  /**
   * Grants permission to set AWS managed temporary credentials on the Amazon EC2 in
   * stance that's used by the AWS Cloud9 integrated development environment (IDE)
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  ModifyTemporaryCredentialsOnEnvironmentEC2 = 'cloud9:ModifyTemporaryCredentialsOnEnvironmentEC2',
  /**
   * Grants permission to add tags to a cloud9 environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_TagResource.html
   */
  TagResource = 'cloud9:TagResource',
  /**
   * Grants permission to remove tags from a cloud9 environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'cloud9:UntagResource',
  /**
   * Grants permission to change the settings of an existing AWS Cloud9 development
   * environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironment.html
   */
  UpdateEnvironment = 'cloud9:UpdateEnvironment',
  /**
   * Grants permission to change the settings of an existing environment member for
   * an AWS Cloud9 development environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironmentMembership.html
   */
  UpdateEnvironmentMembership = 'cloud9:UpdateEnvironmentMembership',
  /**
   * Grants permission to update the AWS Cloud9 IDE settings for a specified develop
   * ment environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  UpdateEnvironmentSettings = 'cloud9:UpdateEnvironmentSettings',
  /**
   * Grants permission to update the AWS Cloud9 IDE settings for a specified environ
   * ment member
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  UpdateMembershipSettings = 'cloud9:UpdateMembershipSettings',
  /**
   * Grants permission to update details about the connection to the SSH development
   * environment, including host, user, and port
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  UpdateSSHRemote = 'cloud9:UpdateSSHRemote',
  /**
   * Grants permission to update IDE-specific settings of an AWS Cloud9 user
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  UpdateUserSettings = 'cloud9:UpdateUserSettings',
  /**
   * Grants permission to validate the environment name during the process of creati
   * ng an AWS Cloud9 development environment
   *
   * See https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  ValidateEnvironmentName = 'cloud9:ValidateEnvironmentName',
}