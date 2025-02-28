// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Elemental MediaLive (MEDIALIVE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmedialive.html
 *
 * 2025-02-24T21:47:53.446Z
 */
export enum AwsMedialiveActions {
  /**
   * Grants permission to accept an input device transfer
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  AcceptInputDeviceTransfer = 'medialive:AcceptInputDeviceTransfer',
  /**
   * Grants permission to delete channels, inputs, input security groups, and multip
   * lexes
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  BatchDelete = 'medialive:BatchDelete',
  /**
   * Grants permission to start channels and multiplexes
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  BatchStart = 'medialive:BatchStart',
  /**
   * Grants permission to stop channels and multiplexes
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  BatchStop = 'medialive:BatchStop',
  /**
   * Grants permission to add and remove actions from a channel's schedule
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/submitting-batch-command.html
   */
  BatchUpdateSchedule = 'medialive:BatchUpdateSchedule',
  /**
   * Grants permission to cancel an input device transfer
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  CancelInputDeviceTransfer = 'medialive:CancelInputDeviceTransfer',
  /**
   * Grants permission to claim an input device
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  ClaimDevice = 'medialive:ClaimDevice',
  /**
   * Grants permission to create a channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/creating-channel-scratch.html
   */
  CreateChannel = 'medialive:CreateChannel',
  /**
   * Grants permission to create a cluster
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  CreateChannelPlacementGroup = 'medialive:CreateChannelPlacementGroup',
  /**
   * Grants permission to create a cloudwatch alarm template
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-alarms-templates-create.html
   */
  CreateCloudWatchAlarmTemplate = 'medialive:CreateCloudWatchAlarmTemplate',
  /**
   * Grants permission to create a cloudwatch alarm template group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-alarms-templates-create.html
   */
  CreateCloudWatchAlarmTemplateGroup = 'medialive:CreateCloudWatchAlarmTemplateGroup',
  /**
   * Grants permission to create a cluster
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  CreateCluster = 'medialive:CreateCluster',
  /**
   * Grants permission to create a eventbridge rule template
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-notifications-template-create.html
   */
  CreateEventBridgeRuleTemplate = 'medialive:CreateEventBridgeRuleTemplate',
  /**
   * Grants permission to create a eventbridge rule template group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-notifications-template-create.html
   */
  CreateEventBridgeRuleTemplateGroup = 'medialive:CreateEventBridgeRuleTemplateGroup',
  /**
   * Grants permission to create an input
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/creating-input.html
   */
  CreateInput = 'medialive:CreateInput',
  /**
   * Grants permission to create an input security group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/working-with-input-security-groups.html
   */
  CreateInputSecurityGroup = 'medialive:CreateInputSecurityGroup',
  /**
   * Grants permission to create a multiplex
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/multiplex-create.html
   */
  CreateMultiplex = 'medialive:CreateMultiplex',
  /**
   * Grants permission to create a multiplex program
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/multiplex-create.html
   */
  CreateMultiplexProgram = 'medialive:CreateMultiplexProgram',
  /**
   * Grants permission to create a network
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  CreateNetwork = 'medialive:CreateNetwork',
  /**
   * Grants permission to create a node
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  CreateNode = 'medialive:CreateNode',
  /**
   * Grants permission to create a node registration script
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  CreateNodeRegistrationScript = 'medialive:CreateNodeRegistrationScript',
  /**
   * Grants permission to create a partner input
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/input-create-cdi-partners.html
   */
  CreatePartnerInput = 'medialive:CreatePartnerInput',
  /**
   * Grants permission to create a signal map
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-signal-maps-create.html
   */
  CreateSignalMap = 'medialive:CreateSignalMap',
  /**
   * Grants permission to create tags for channels, inputs, input security groups, m
   * ultiplexes, reservations, nodes, networks, clusters, channel placement groups,
   * signal maps, template groups, and templates
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  CreateTags = 'medialive:CreateTags',
  /**
   * Grants permission to delete a channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  DeleteChannel = 'medialive:DeleteChannel',
  /**
   * Grants permission to delete a cluster
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  DeleteChannelPlacementGroup = 'medialive:DeleteChannelPlacementGroup',
  /**
   * Grants permission to delete a cloudwatch alarm template
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-alarms.html
   */
  DeleteCloudWatchAlarmTemplate = 'medialive:DeleteCloudWatchAlarmTemplate',
  /**
   * Grants permission to delete a cloudwatch alarm template group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-alarms.html
   */
  DeleteCloudWatchAlarmTemplateGroup = 'medialive:DeleteCloudWatchAlarmTemplateGroup',
  /**
   * Grants permission to delete a cluster
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  DeleteCluster = 'medialive:DeleteCluster',
  /**
   * Grants permission to delete a eventbridge rule template
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-notifications.html
   */
  DeleteEventBridgeRuleTemplate = 'medialive:DeleteEventBridgeRuleTemplate',
  /**
   * Grants permission to delete a eventbridge rule template group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-notifications.html
   */
  DeleteEventBridgeRuleTemplateGroup = 'medialive:DeleteEventBridgeRuleTemplateGroup',
  /**
   * Grants permission to delete an input
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/delete-input.html
   */
  DeleteInput = 'medialive:DeleteInput',
  /**
   * Grants permission to delete an input security group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/delete-input-security-group.html
   */
  DeleteInputSecurityGroup = 'medialive:DeleteInputSecurityGroup',
  /**
   * Grants permission to delete a multiplex
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex-program.html
   */
  DeleteMultiplex = 'medialive:DeleteMultiplex',
  /**
   * Grants permission to delete a multiplex program
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex-program.html
   */
  DeleteMultiplexProgram = 'medialive:DeleteMultiplexProgram',
  /**
   * Grants permission to delete a network
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  DeleteNetwork = 'medialive:DeleteNetwork',
  /**
   * Grants permission to delete a node
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  DeleteNode = 'medialive:DeleteNode',
  /**
   * Grants permission to delete an expired reservation
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/deleting-reservations.html
   */
  DeleteReservation = 'medialive:DeleteReservation',
  /**
   * Grants permission to delete all schedule actions for a channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/schedule-using-console-delete.html
   */
  DeleteSchedule = 'medialive:DeleteSchedule',
  /**
   * Grants permission to delete a signal map
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-signal-maps-delete.html
   */
  DeleteSignalMap = 'medialive:DeleteSignalMap',
  /**
   * Grants permission to delete tags from channels, inputs, input security groups,
   * multiplexes, reservations, nodes, clusters, networks, channel placement groups,
   * signal maps, template groups, and templates
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  DeleteTags = 'medialive:DeleteTags',
  /**
   * Grants permission to view the account configuration of the customer
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  DescribeAccountConfiguration = 'medialive:DescribeAccountConfiguration',
  /**
   * Grants permission to get details about a channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html
   */
  DescribeChannel = 'medialive:DescribeChannel',
  /**
   * Grants permission to describe a channel placement group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/emla-setup-cl-create.html
   */
  DescribeChannelPlacementGroup = 'medialive:DescribeChannelPlacementGroup',
  /**
   * Grants permission to describe a cluster
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/emla-setup-cl-create.html
   */
  DescribeCluster = 'medialive:DescribeCluster',
  /**
   * Grants permission to describe an input
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  DescribeInput = 'medialive:DescribeInput',
  /**
   * Grants permission to describe an input device
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   */
  DescribeInputDevice = 'medialive:DescribeInputDevice',
  /**
   * Grants permission to describe an input device thumbnail
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   */
  DescribeInputDeviceThumbnail = 'medialive:DescribeInputDeviceThumbnail',
  /**
   * Grants permission to describe an input security group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  DescribeInputSecurityGroup = 'medialive:DescribeInputSecurityGroup',
  /**
   * Grants permission to describe a multiplex
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   */
  DescribeMultiplex = 'medialive:DescribeMultiplex',
  /**
   * Grants permission to describe a multiplex program
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitoring-multiplex-console.html
   */
  DescribeMultiplexProgram = 'medialive:DescribeMultiplexProgram',
  /**
   * Grants permission to describe a network
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/emla-setup-cl-networks.html
   */
  DescribeNetwork = 'medialive:DescribeNetwork',
  /**
   * Grants permission to describe a node
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/emla-setup-cl-nodes-create.html
   */
  DescribeNode = 'medialive:DescribeNode',
  /**
   * Grants permission to get details about a reservation offering
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  DescribeOffering = 'medialive:DescribeOffering',
  /**
   * Grants permission to get details about a reservation
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html
   */
  DescribeReservation = 'medialive:DescribeReservation',
  /**
   * Grants permission to view a list of actions scheduled on a channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/schedule-using-console-view.html
   */
  DescribeSchedule = 'medialive:DescribeSchedule',
  /**
   * Grants permission to view the thumbnails for a channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  DescribeThumbnails = 'medialive:DescribeThumbnails',
  /**
   * Grants permission to get a cloudwatch alarm template
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-alarms.html
   */
  GetCloudWatchAlarmTemplate = 'medialive:GetCloudWatchAlarmTemplate',
  /**
   * Grants permission to get a cloudwatch alarm template group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-alarms.html
   */
  GetCloudWatchAlarmTemplateGroup = 'medialive:GetCloudWatchAlarmTemplateGroup',
  /**
   * Grants permission to get a eventbridge rule template
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-notifications.html
   */
  GetEventBridgeRuleTemplate = 'medialive:GetEventBridgeRuleTemplate',
  /**
   * Grants permission to get a eventbridge rule template group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-notifications.html
   */
  GetEventBridgeRuleTemplateGroup = 'medialive:GetEventBridgeRuleTemplateGroup',
  /**
   * Grants permission to get a signal map
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-signal-maps-view.html
   */
  GetSignalMap = 'medialive:GetSignalMap',
  /**
   * Grants permission to list channel placement groups
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  ListChannelPlacementGroups = 'medialive:ListChannelPlacementGroups',
  /**
   * Grants permission to list channels
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html
   */
  ListChannels = 'medialive:ListChannels',
  /**
   * Grants permission to list cloudwatch alarm template groups
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-alarms.html
   */
  ListCloudWatchAlarmTemplateGroups = 'medialive:ListCloudWatchAlarmTemplateGroups',
  /**
   * Grants permission to list cloudwatch alarm templates
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-alarms.html
   */
  ListCloudWatchAlarmTemplates = 'medialive:ListCloudWatchAlarmTemplates',
  /**
   * Grants permission to list clusters
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  ListClusters = 'medialive:ListClusters',
  /**
   * Grants permission to list eventbridge rule template groups
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-notifications.html
   */
  ListEventBridgeRuleTemplateGroups = 'medialive:ListEventBridgeRuleTemplateGroups',
  /**
   * Grants permission to list eventbridge rule templates
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-notifications.html
   */
  ListEventBridgeRuleTemplates = 'medialive:ListEventBridgeRuleTemplates',
  /**
   * Grants permission to list input device transfers
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  ListInputDeviceTransfers = 'medialive:ListInputDeviceTransfers',
  /**
   * Grants permission to list input devices
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   */
  ListInputDevices = 'medialive:ListInputDevices',
  /**
   * Grants permission to list input security groups
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  ListInputSecurityGroups = 'medialive:ListInputSecurityGroups',
  /**
   * Grants permission to list inputs
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  ListInputs = 'medialive:ListInputs',
  /**
   * Grants permission to list multiplex programs
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitoring-multiplex-console.html
   */
  ListMultiplexPrograms = 'medialive:ListMultiplexPrograms',
  /**
   * Grants permission to list multiplexes
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   */
  ListMultiplexes = 'medialive:ListMultiplexes',
  /**
   * Grants permission to list networks
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  ListNetworks = 'medialive:ListNetworks',
  /**
   * Grants permission to list nodes
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  ListNodes = 'medialive:ListNodes',
  /**
   * Grants permission to list reservation offerings
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  ListOfferings = 'medialive:ListOfferings',
  /**
   * Grants permission to list reservations
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html
   */
  ListReservations = 'medialive:ListReservations',
  /**
   * Grants permission to list signal maps
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-signal-maps-view.html
   */
  ListSignalMaps = 'medialive:ListSignalMaps',
  /**
   * Grants permission to list tags for channels, inputs, input security groups, mul
   * tiplexes, reservations, nodes, clusters, networks, channel placement groups, si
   * gnal maps, template groups, and templates
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  ListTagsForResource = 'medialive:ListTagsForResource',
  /**
   * Grants permission to list available versions of MediaLive
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/medialive-versions.html
   */
  ListVersions = 'medialive:ListVersions',
  /**
   * Grants permission to the node to poll the cluster
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/about-emla.html
   */
  PollAnywhere = 'medialive:PollAnywhere',
  /**
   * Grants permission to purchase a reservation offering
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  PurchaseOffering = 'medialive:PurchaseOffering',
  /**
   * Grants permission to reboot an input device
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  RebootInputDevice = 'medialive:RebootInputDevice',
  /**
   * Grants permission to reject an input device transfer
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  RejectInputDeviceTransfer = 'medialive:RejectInputDeviceTransfer',
  /**
   * Grants permission to restart pipelines on a running channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/maintenance-user-initiated.html
   */
  RestartChannelPipelines = 'medialive:RestartChannelPipelines',
  /**
   * Grants permission to start a channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  StartChannel = 'medialive:StartChannel',
  /**
   * Grants permission to start deletion of a signal map's monitor
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-signal-maps-delete.html
   */
  StartDeleteMonitorDeployment = 'medialive:StartDeleteMonitorDeployment',
  /**
   * Grants permission to start an input device attached to a MediaConnect flow
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  StartInputDevice = 'medialive:StartInputDevice',
  /**
   * Grants permission to start a maintenance window for an input device
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  StartInputDeviceMaintenanceWindow = 'medialive:StartInputDeviceMaintenanceWindow',
  /**
   * Grants permission to start a signal map monitor deployment
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-deploy.html
   */
  StartMonitorDeployment = 'medialive:StartMonitorDeployment',
  /**
   * Grants permission to start a multiplex
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/start-multiplex.html
   */
  StartMultiplex = 'medialive:StartMultiplex',
  /**
   * Grants permission to start a signal map update
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-signal-maps-update.html
   */
  StartUpdateSignalMap = 'medialive:StartUpdateSignalMap',
  /**
   * Grants permission to stop a channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  StopChannel = 'medialive:StopChannel',
  /**
   * Grants permission to stop an input device attached to a MediaConnect flow
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  StopInputDevice = 'medialive:StopInputDevice',
  /**
   * Grants permission to stop a multiplex
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/stop-multiplex.title.html
   */
  StopMultiplex = 'medialive:StopMultiplex',
  /**
   * Grants permission to the node to submit state changes to the cluster
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/about-emla.html
   */
  SubmitAnywhereStateChange = 'medialive:SubmitAnywhereStateChange',
  /**
   * Grants permission to transfer an input device
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  TransferInputDevice = 'medialive:TransferInputDevice',
  /**
   * Grants permission to update a customer's account configuration
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  UpdateAccountConfiguration = 'medialive:UpdateAccountConfiguration',
  /**
   * Grants permission to update a channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  UpdateChannel = 'medialive:UpdateChannel',
  /**
   * Grants permission to update the class of a channel
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  UpdateChannelClass = 'medialive:UpdateChannelClass',
  /**
   * Grants permission to update a node
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  UpdateChannelPlacementGroup = 'medialive:UpdateChannelPlacementGroup',
  /**
   * Grants permission to update a cloudwatch alarm template
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-alarms-templates-create.html
   */
  UpdateCloudWatchAlarmTemplate = 'medialive:UpdateCloudWatchAlarmTemplate',
  /**
   * Grants permission to update a cloudwatch alarm template group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-alarms-templates-create.html
   */
  UpdateCloudWatchAlarmTemplateGroup = 'medialive:UpdateCloudWatchAlarmTemplateGroup',
  /**
   * Grants permission to update a cluster
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/emla-setup-cl-create.html
   */
  UpdateCluster = 'medialive:UpdateCluster',
  /**
   * Grants permission to update a eventbridge rule template
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-notifications-template-create.html
   */
  UpdateEventBridgeRuleTemplate = 'medialive:UpdateEventBridgeRuleTemplate',
  /**
   * Grants permission to update a eventbridge rule template group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/monitor-with-workflow-monitor-configure-notifications-template-create.html
   */
  UpdateEventBridgeRuleTemplateGroup = 'medialive:UpdateEventBridgeRuleTemplateGroup',
  /**
   * Grants permission to update an input
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  UpdateInput = 'medialive:UpdateInput',
  /**
   * Grants permission to update an input device
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   */
  UpdateInputDevice = 'medialive:UpdateInputDevice',
  /**
   * Grants permission to update an input security group
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  UpdateInputSecurityGroup = 'medialive:UpdateInputSecurityGroup',
  /**
   * Grants permission to update a multiplex
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   */
  UpdateMultiplex = 'medialive:UpdateMultiplex',
  /**
   * Grants permission to update a multiplex program
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   */
  UpdateMultiplexProgram = 'medialive:UpdateMultiplexProgram',
  /**
   * Grants permission to update the state of a node
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/emla-deploy-identify-network-requirements.html
   */
  UpdateNetwork = 'medialive:UpdateNetwork',
  /**
   * Grants permission to update a node
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/emla-setup-cl-nodes-create.html
   */
  UpdateNode = 'medialive:UpdateNode',
  /**
   * Grants permission to update the state of a node
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/setup-emla.html
   */
  UpdateNodeState = 'medialive:UpdateNodeState',
  /**
   * Grants permission to update a reservation
   *
   * See https://docs.aws.amazon.com/medialive/latest/ug/reservations.html
   */
  UpdateReservation = 'medialive:UpdateReservation',
}
