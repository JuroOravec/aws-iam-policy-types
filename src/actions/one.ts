// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon One Enterprise (ONE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazononeenterprise.html
 *
 * 2025-02-24T21:49:04.060Z
 */
export enum AwsOneActions {
  /**
   * Grants permission to create a QR code for a Device Instance
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/configure-instance.html
   */
  CreateDeviceActivationQrCode = 'one:CreateDeviceActivationQrCode',
  /**
   * Grants permission to create a Device Configuration Template
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   */
  CreateDeviceConfigurationTemplate = 'one:CreateDeviceConfigurationTemplate',
  /**
   * Grants permission to create a Device Instance
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  CreateDeviceInstance = 'one:CreateDeviceInstance',
  /**
   * Grants permission to create a Device Instance Configuration
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/configure-instance.html
   */
  CreateDeviceInstanceConfiguration = 'one:CreateDeviceInstanceConfiguration',
  /**
   * Grants permission to create a Site
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  CreateSite = 'one:CreateSite',
  /**
   * Grants permission to disassociate Device from a Device Instance
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  DeleteAssociatedDevice = 'one:DeleteAssociatedDevice',
  /**
   * Grants permission to delete a Device Configuration Template
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   */
  DeleteDeviceConfigurationTemplate = 'one:DeleteDeviceConfigurationTemplate',
  /**
   * Grants permission to delete a Device Instance
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  DeleteDeviceInstance = 'one:DeleteDeviceInstance',
  /**
   * Grants permission to delete a Site
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  DeleteSite = 'one:DeleteSite',
  /**
   * Grants permission to delete a User
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/enrollment-entry.htmll
   */
  DeleteUser = 'one:DeleteUser',
  /**
   * Grants permission to view a Device Configuration Template
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   */
  GetDeviceConfigurationTemplate = 'one:GetDeviceConfigurationTemplate',
  /**
   * Grants permission to view a Device Instance
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  GetDeviceInstance = 'one:GetDeviceInstance',
  /**
   * Grants permission to view a Device Instance Configuration
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/configure-instance.html
   */
  GetDeviceInstanceConfiguration = 'one:GetDeviceInstanceConfiguration',
  /**
   * Grants permission to view a Site
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  GetSite = 'one:GetSite',
  /**
   * Grants permission to view address of a Site
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  GetSiteAddress = 'one:GetSiteAddress',
  /**
   * Grants permission to retrieve list of Device Configuration Templates
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   */
  ListDeviceConfigurationTemplates = 'one:ListDeviceConfigurationTemplates',
  /**
   * Grants permission to retrieve list of Device Instances
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  ListDeviceInstances = 'one:ListDeviceInstances',
  /**
   * Grants permission to view list of Sites
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  ListSites = 'one:ListSites',
  /**
   * Grants permission to list tags for an Amazon One Enterprise resource
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/actions-resources-contextkeys.html
   */
  ListTagsForResource = 'one:ListTagsForResource',
  /**
   * Grants permission to view list of Users
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/enrollment-entry.html
   */
  ListUsers = 'one:ListUsers',
  /**
   * Grants permission to reboot Device associated with a Device Instance
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  RebootDevice = 'one:RebootDevice',
  /**
   * Grants permission to add tags to an Amazon One Enterprise resource
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/actions-resources-contextkeys.html
   */
  TagResource = 'one:TagResource',
  /**
   * Grants permission to remove tags from an Amazon One Enterprise resource
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/actions-resources-contextkeys.html
   */
  UntagResource = 'one:UntagResource',
  /**
   * Grants permission to update a Device Configuration Template
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   */
  UpdateDeviceConfigurationTemplate = 'one:UpdateDeviceConfigurationTemplate',
  /**
   * Grants permission to update a Device Instance
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  UpdateDeviceInstance = 'one:UpdateDeviceInstance',
  /**
   * Grants permission to update a Site
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  UpdateSite = 'one:UpdateSite',
  /**
   * Grants permission to update address of a Site
   *
   * See https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  UpdateSiteAddress = 'one:UpdateSiteAddress',
}
