// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon MQ (MQ)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmq.html
 *
 * 2025-02-24T21:49:00.032Z
 */
export enum AwsMqActions {
  /**
   * Grants permission to create a broker
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-post
   */
  CreateBroker = 'mq:CreateBroker',
  /**
   * Grants permission to create a new configuration for the specified configuration
   * name. Amazon MQ uses the default configuration (the engine type and engine vers
   * ion)
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-post
   */
  CreateConfiguration = 'mq:CreateConfiguration',
  /**
   * Grants permission to create a replica broker
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-post
   */
  CreateReplicaBroker = 'mq:CreateReplicaBroker',
  /**
   * Grants permission to create tags
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-post
   */
  CreateTags = 'mq:CreateTags',
  /**
   * Grants permission to create an ActiveMQ user
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-post
   */
  CreateUser = 'mq:CreateUser',
  /**
   * Grants permission to delete a broker
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-delete
   */
  DeleteBroker = 'mq:DeleteBroker',
  /**
   * Grants permission to delete tags
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-delete
   */
  DeleteTags = 'mq:DeleteTags',
  /**
   * Grants permission to delete an ActiveMQ user
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-delete
   */
  DeleteUser = 'mq:DeleteUser',
  /**
   * Grants permission to return information about the specified broker
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get
   */
  DescribeBroker = 'mq:DescribeBroker',
  /**
   * Grants permission to return information about broker engines
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-engine-types.html#broker-engine-types-http-methods
   */
  DescribeBrokerEngineTypes = 'mq:DescribeBrokerEngineTypes',
  /**
   * Grants permission to return information about the broker instance options
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-instance-options.html#broker-engine-types-http-methods
   */
  DescribeBrokerInstanceOptions = 'mq:DescribeBrokerInstanceOptions',
  /**
   * Grants permission to return information about the specified configuration
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-get
   */
  DescribeConfiguration = 'mq:DescribeConfiguration',
  /**
   * Grants permission to return the specified configuration revision for the specif
   * ied configuration
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration-revision.html#rest-api-configuration-revision-methods-get
   */
  DescribeConfigurationRevision = 'mq:DescribeConfigurationRevision',
  /**
   * Grants permission to return information about an ActiveMQ user
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-get
   */
  DescribeUser = 'mq:DescribeUser',
  /**
   * Grants permission to return a list of all brokers
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-get
   */
  ListBrokers = 'mq:ListBrokers',
  /**
   * Grants permission to return a list of all existing revisions for the specified
   * configuration
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-revisions.html#rest-api-revisions-methods-get
   */
  ListConfigurationRevisions = 'mq:ListConfigurationRevisions',
  /**
   * Grants permission to return a list of all configurations
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-get
   */
  ListConfigurations = 'mq:ListConfigurations',
  /**
   * Grants permission to return a list of tags
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-get
   */
  ListTags = 'mq:ListTags',
  /**
   * Grants permission to return a list of all ActiveMQ users
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-users.html#rest-api-users-methods-get
   */
  ListUsers = 'mq:ListUsers',
  /**
   * Grants permission to promote a broker
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-promote.html#rest-api-promote-methods-post
   */
  Promote = 'mq:Promote',
  /**
   * Grants permission to reboot a broker
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-restart.html#rest-api-reboot-methods-post
   */
  RebootBroker = 'mq:RebootBroker',
  /**
   * Grants permission to add a pending configuration change to a broker
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get
   */
  UpdateBroker = 'mq:UpdateBroker',
  /**
   * Grants permission to update the specified configuration
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-put
   */
  UpdateConfiguration = 'mq:UpdateConfiguration',
  /**
   * Grants permission to update the information for an ActiveMQ user
   *
   * See https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-put
   */
  UpdateUser = 'mq:UpdateUser',
}
