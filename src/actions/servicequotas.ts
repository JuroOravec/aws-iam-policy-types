// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Service Quotas (SERVICEQUOTAS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_servicequotas.html
 *
 * 2024-02-12T09:59:13.676Z
 */
export enum AwsServicequotasActions {
  /**
   * Grants permission to associate the Service Quotas template with your organizati
   * on
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_AssociateServiceQuotaTemplate.html
   */
  AssociateServiceQuotaTemplate = 'servicequotas:AssociateServiceQuotaTemplate',
  /**
   * Grants permission to remove the specified service quota from the service quota
   * template
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DeleteServiceQuotaIncreaseRequestFromTemplate.html
   */
  DeleteServiceQuotaIncreaseRequestFromTemplate = 'servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate',
  /**
   * Grants permission to disassociate the Service Quotas template from your organiz
   * ation
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DisassociateServiceQuotaTemplate.html
   */
  DisassociateServiceQuotaTemplate = 'servicequotas:DisassociateServiceQuotaTemplate',
  /**
   * Grants permission to return the details for the specified service quota, includ
   * ing the AWS default value
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAWSDefaultServiceQuota.html
   */
  GetAWSDefaultServiceQuota = 'servicequotas:GetAWSDefaultServiceQuota',
  /**
   * Grants permission to retrieve the ServiceQuotaTemplateAssociationStatus value,
   * which tells you if the Service Quotas template is associated with an organizati
   * on
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAssociationForServiceQuotaTemplate.html
   */
  GetAssociationForServiceQuotaTemplate = 'servicequotas:GetAssociationForServiceQuotaTemplate',
  /**
   * Grants permission to retrieve the details for a particular service quota increa
   * se request
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetRequestedServiceQuotaChange.html
   */
  GetRequestedServiceQuotaChange = 'servicequotas:GetRequestedServiceQuotaChange',
  /**
   * Grants permission to return the details for the specified service quota, includ
   * ing the applied value
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuota.html
   */
  GetServiceQuota = 'servicequotas:GetServiceQuota',
  /**
   * Grants permission to retrieve the details for a service quota increase request
   * from the service quota template
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuotaIncreaseRequestFromTemplate.html
   */
  GetServiceQuotaIncreaseRequestFromTemplate = 'servicequotas:GetServiceQuotaIncreaseRequestFromTemplate',
  /**
   * Grants permission to list all default service quotas for the specified AWS serv
   * ice
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListAWSDefaultServiceQuotas.html
   */
  ListAWSDefaultServiceQuotas = 'servicequotas:ListAWSDefaultServiceQuotas',
  /**
   * Grants permission to request a list of the changes to quotas for a service
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistory.html
   */
  ListRequestedServiceQuotaChangeHistory = 'servicequotas:ListRequestedServiceQuotaChangeHistory',
  /**
   * Grants permission to request a list of the changes to specific service quotas
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistoryByQuota.html
   */
  ListRequestedServiceQuotaChangeHistoryByQuota = 'servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota',
  /**
   * Grants permission to return a list of the service quota increase requests from
   * the service quota template
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotaIncreaseRequestsInTemplate
   */
  ListServiceQuotaIncreaseRequestsInTemplate = 'servicequotas:ListServiceQuotaIncreaseRequestsInTemplate',
  /**
   * Grants permission to list all service quotas for the specified AWS service, in
   * that account, in that Region
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html
   */
  ListServiceQuotas = 'servicequotas:ListServiceQuotas',
  /**
   * Grants permission to list the AWS services available in Service Quotas
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServices.html
   */
  ListServices = 'servicequotas:ListServices',
  /**
   * Grants permission to view the existing tags on a SQ resource
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListTagsForResource
   */
  ListTagsForResource = 'servicequotas:ListTagsForResource',
  /**
   * Grants permission to define and add a quota to the service quota template
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_PutServiceQuotaIncreaseRequestIntoTemplate.html
   */
  PutServiceQuotaIncreaseRequestIntoTemplate = 'servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate',
  /**
   * Grants permission to submit the request for a service quota increase
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html
   */
  RequestServiceQuotaIncrease = 'servicequotas:RequestServiceQuotaIncrease',
  /**
   * Grants permission to associate a set of tags with an existing SQ resource
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_TagResource
   */
  TagResource = 'servicequotas:TagResource',
  /**
   * Grants permission to remove a set of tags from a SQ resource, where tags to be
   * removed match a set of customer-supplied tag keys
   *
   * See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_UntagResource
   */
  UntagResource = 'servicequotas:UntagResource',
}
