// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon VPC Lattice (VPC-LATTICE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonvpclattice.html
 *
 * 2024-02-12T09:59:36.558Z
 */
export enum AwsVpcLatticeActions {
  /**
   * Grants permission to create an access log subscription
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateAccessLogSubscription.html
   */
  CreateAccessLogSubscription = 'vpc-lattice:CreateAccessLogSubscription',
  /**
   * Grants permission to create a listener
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateListener.html
   */
  CreateListener = 'vpc-lattice:CreateListener',
  /**
   * Grants permission to create a rule
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateRule.html
   */
  CreateRule = 'vpc-lattice:CreateRule',
  /**
   * Grants permission to create a service
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateService.html
   */
  CreateService = 'vpc-lattice:CreateService',
  /**
   * Grants permission to create a service network
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateServiceNetwork.html
   */
  CreateServiceNetwork = 'vpc-lattice:CreateServiceNetwork',
  /**
   * Grants permission to create a service network and service association
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateServiceNetworkServiceAssociation.html
   */
  CreateServiceNetworkServiceAssociation = 'vpc-lattice:CreateServiceNetworkServiceAssociation',
  /**
   * Grants permission to create a service network and VPC association
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateServiceNetworkVpcAssociation.html
   */
  CreateServiceNetworkVpcAssociation = 'vpc-lattice:CreateServiceNetworkVpcAssociation',
  /**
   * Grants permission to create a target group
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_CreateTargetGroup.html
   */
  CreateTargetGroup = 'vpc-lattice:CreateTargetGroup',
  /**
   * Grants permission to delete an access log subscription
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteAccessLogSubscription.html
   */
  DeleteAccessLogSubscription = 'vpc-lattice:DeleteAccessLogSubscription',
  /**
   * Grants permission to delete an auth policy
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteAuthPolicy.html
   */
  DeleteAuthPolicy = 'vpc-lattice:DeleteAuthPolicy',
  /**
   * Grants permission to delete a listener
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteListener.html
   */
  DeleteListener = 'vpc-lattice:DeleteListener',
  /**
   * Grants permission to delete a resource policy
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteResourcePolicy.html
   */
  DeleteResourcePolicy = 'vpc-lattice:DeleteResourcePolicy',
  /**
   * Grants permission to delete a rule
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteRule.html
   */
  DeleteRule = 'vpc-lattice:DeleteRule',
  /**
   * Grants permission to delete a service
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteService.html
   */
  DeleteService = 'vpc-lattice:DeleteService',
  /**
   * Grants permission to delete a service network
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteServiceNetwork.html
   */
  DeleteServiceNetwork = 'vpc-lattice:DeleteServiceNetwork',
  /**
   * Grants permission to delete a service network service association
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteServiceNetworkServiceAssociation.html
   */
  DeleteServiceNetworkServiceAssociation = 'vpc-lattice:DeleteServiceNetworkServiceAssociation',
  /**
   * Grants permission to delete a service network and VPC association
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteServiceNetworkVpcAssociation.html
   */
  DeleteServiceNetworkVpcAssociation = 'vpc-lattice:DeleteServiceNetworkVpcAssociation',
  /**
   * Grants permission to delete a target group
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeleteTargetGroup.html
   */
  DeleteTargetGroup = 'vpc-lattice:DeleteTargetGroup',
  /**
   * Grants permission to deregister targets from a target group
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_DeregisterTargets.html
   */
  DeregisterTargets = 'vpc-lattice:DeregisterTargets',
  /**
   * Grants permission to get information about an access log subscription
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetAccessLogSubscription.html
   */
  GetAccessLogSubscription = 'vpc-lattice:GetAccessLogSubscription',
  /**
   * Grants permission to get information about an auth policy
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetAuthPolicy.html
   */
  GetAuthPolicy = 'vpc-lattice:GetAuthPolicy',
  /**
   * Grants permission to get information about a listener
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetListener.html
   */
  GetListener = 'vpc-lattice:GetListener',
  /**
   * Grants permission to get information about a resource policy
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetResourcePolicy.html
   */
  GetResourcePolicy = 'vpc-lattice:GetResourcePolicy',
  /**
   * Grants permission to get information about a rule
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetRule.html
   */
  GetRule = 'vpc-lattice:GetRule',
  /**
   * Grants permission to get information about a service
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetService.html
   */
  GetService = 'vpc-lattice:GetService',
  /**
   * Grants permission to get information about a service network
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetServiceNetwork.html
   */
  GetServiceNetwork = 'vpc-lattice:GetServiceNetwork',
  /**
   * Grants permission to get information about a service network and service associ
   * ation
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetServiceNetworkServiceAssociation.html
   */
  GetServiceNetworkServiceAssociation = 'vpc-lattice:GetServiceNetworkServiceAssociation',
  /**
   * Grants permission to get information about a service network and VPC associatio
   * n
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetServiceNetworkVpcAssociation.html
   */
  GetServiceNetworkVpcAssociation = 'vpc-lattice:GetServiceNetworkVpcAssociation',
  /**
   * Grants permission to get information about a target group
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetTargetGroup.html
   */
  GetTargetGroup = 'vpc-lattice:GetTargetGroup',
  /**
   * Grants permission to list some or all access log subscriptions about a service
   * network or a service
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListAccessLogSubscriptions.html
   */
  ListAccessLogSubscriptions = 'vpc-lattice:ListAccessLogSubscriptions',
  /**
   * Grants permission to list some or all listeners
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListListeners.html
   */
  ListListeners = 'vpc-lattice:ListListeners',
  /**
   * Grants permission to list some or all rules
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListRules.html
   */
  ListRules = 'vpc-lattice:ListRules',
  /**
   * Grants permission to list some or all service network and service associations
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListServiceNetworkServiceAssociations.html
   */
  ListServiceNetworkServiceAssociations = 'vpc-lattice:ListServiceNetworkServiceAssociations',
  /**
   * Grants permission to list some or all service network and VPC associations
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListServiceNetworkVpcAssociations.html
   */
  ListServiceNetworkVpcAssociations = 'vpc-lattice:ListServiceNetworkVpcAssociations',
  /**
   * Grants permission to list the service networks owned by a caller account or sha
   * red with the caller account
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListServiceNetworks.html
   */
  ListServiceNetworks = 'vpc-lattice:ListServiceNetworks',
  /**
   * Grants permission to list the services owned by a caller account or shared with
   * the caller account
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListServices.html
   */
  ListServices = 'vpc-lattice:ListServices',
  /**
   * Grants permission to list tags for a vpc-lattice resource
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'vpc-lattice:ListTagsForResource',
  /**
   * Grants permission to list some or all target groups
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListTargetGroups.html
   */
  ListTargetGroups = 'vpc-lattice:ListTargetGroups',
  /**
   * Grants permission to list some or all targets in a target group
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_ListTargets.html
   */
  ListTargets = 'vpc-lattice:ListTargets',
  /**
   * Grants permission to create or update the auth policy for a service network or
   * a service
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_PutAuthPolicy.html
   */
  PutAuthPolicy = 'vpc-lattice:PutAuthPolicy',
  /**
   * Grants permission to create a resource policy for a service network or a servic
   * e
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_PutResourcePolicy.html
   */
  PutResourcePolicy = 'vpc-lattice:PutResourcePolicy',
  /**
   * Grants permission to register targets to a target group
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_RegisterTargets.html
   */
  RegisterTargets = 'vpc-lattice:RegisterTargets',
  /**
   * Grants permission to tag a vpc-lattice resource
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_TagResource.html
   */
  TagResource = 'vpc-lattice:TagResource',
  /**
   * Grants permission to untag a vpc-lattice resource
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'vpc-lattice:UntagResource',
  /**
   * Grants permission to update an access log subscription
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateAccessLogSubscription.html
   */
  UpdateAccessLogSubscription = 'vpc-lattice:UpdateAccessLogSubscription',
  /**
   * Grants permission to update a listener
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateListener.html
   */
  UpdateListener = 'vpc-lattice:UpdateListener',
  /**
   * Grants permission to update a rule
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateRule.html
   */
  UpdateRule = 'vpc-lattice:UpdateRule',
  /**
   * Grants permission to update a service
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateService.html
   */
  UpdateService = 'vpc-lattice:UpdateService',
  /**
   * Grants permission to update a service network
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateServiceNetwork.html
   */
  UpdateServiceNetwork = 'vpc-lattice:UpdateServiceNetwork',
  /**
   * Grants permission to update a service network and VPC association
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateServiceNetworkVpcAssociation.html
   */
  UpdateServiceNetworkVpcAssociation = 'vpc-lattice:UpdateServiceNetworkVpcAssociation',
  /**
   * Grants permission to update a target group
   *
   * See https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_UpdateTargetGroup.html
   */
  UpdateTargetGroup = 'vpc-lattice:UpdateTargetGroup',
}
