[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsServicequotasActions

# Enumeration: AwsServicequotasActions

All IAM policy actions for Service Quotas (SERVICEQUOTAS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_servicequotas.html

2024-02-12T09:59:13.676Z

## Table of contents

### Enumeration Members

- [AssociateServiceQuotaTemplate](AwsServicequotasActions.md#associateservicequotatemplate)
- [DeleteServiceQuotaIncreaseRequestFromTemplate](AwsServicequotasActions.md#deleteservicequotaincreaserequestfromtemplate)
- [DisassociateServiceQuotaTemplate](AwsServicequotasActions.md#disassociateservicequotatemplate)
- [GetAWSDefaultServiceQuota](AwsServicequotasActions.md#getawsdefaultservicequota)
- [GetAssociationForServiceQuotaTemplate](AwsServicequotasActions.md#getassociationforservicequotatemplate)
- [GetRequestedServiceQuotaChange](AwsServicequotasActions.md#getrequestedservicequotachange)
- [GetServiceQuota](AwsServicequotasActions.md#getservicequota)
- [GetServiceQuotaIncreaseRequestFromTemplate](AwsServicequotasActions.md#getservicequotaincreaserequestfromtemplate)
- [ListAWSDefaultServiceQuotas](AwsServicequotasActions.md#listawsdefaultservicequotas)
- [ListRequestedServiceQuotaChangeHistory](AwsServicequotasActions.md#listrequestedservicequotachangehistory)
- [ListRequestedServiceQuotaChangeHistoryByQuota](AwsServicequotasActions.md#listrequestedservicequotachangehistorybyquota)
- [ListServiceQuotaIncreaseRequestsInTemplate](AwsServicequotasActions.md#listservicequotaincreaserequestsintemplate)
- [ListServiceQuotas](AwsServicequotasActions.md#listservicequotas)
- [ListServices](AwsServicequotasActions.md#listservices)
- [ListTagsForResource](AwsServicequotasActions.md#listtagsforresource)
- [PutServiceQuotaIncreaseRequestIntoTemplate](AwsServicequotasActions.md#putservicequotaincreaserequestintotemplate)
- [RequestServiceQuotaIncrease](AwsServicequotasActions.md#requestservicequotaincrease)
- [TagResource](AwsServicequotasActions.md#tagresource)
- [UntagResource](AwsServicequotasActions.md#untagresource)

## Enumeration Members

### AssociateServiceQuotaTemplate

• **AssociateServiceQuotaTemplate** = ``"servicequotas:AssociateServiceQuotaTemplate"``

Grants permission to associate the Service Quotas template with your organizati
on

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_AssociateServiceQuotaTemplate.html

#### Defined in

actions/servicequotas.ts:18

___

### DeleteServiceQuotaIncreaseRequestFromTemplate

• **DeleteServiceQuotaIncreaseRequestFromTemplate** = ``"servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate"``

Grants permission to remove the specified service quota from the service quota
template

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DeleteServiceQuotaIncreaseRequestFromTemplate.html

#### Defined in

actions/servicequotas.ts:25

___

### DisassociateServiceQuotaTemplate

• **DisassociateServiceQuotaTemplate** = ``"servicequotas:DisassociateServiceQuotaTemplate"``

Grants permission to disassociate the Service Quotas template from your organiz
ation

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DisassociateServiceQuotaTemplate.html

#### Defined in

actions/servicequotas.ts:32

___

### GetAWSDefaultServiceQuota

• **GetAWSDefaultServiceQuota** = ``"servicequotas:GetAWSDefaultServiceQuota"``

Grants permission to return the details for the specified service quota, includ
ing the AWS default value

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAWSDefaultServiceQuota.html

#### Defined in

actions/servicequotas.ts:39

___

### GetAssociationForServiceQuotaTemplate

• **GetAssociationForServiceQuotaTemplate** = ``"servicequotas:GetAssociationForServiceQuotaTemplate"``

Grants permission to retrieve the ServiceQuotaTemplateAssociationStatus value,
which tells you if the Service Quotas template is associated with an organizati
on

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAssociationForServiceQuotaTemplate.html

#### Defined in

actions/servicequotas.ts:47

___

### GetRequestedServiceQuotaChange

• **GetRequestedServiceQuotaChange** = ``"servicequotas:GetRequestedServiceQuotaChange"``

Grants permission to retrieve the details for a particular service quota increa
se request

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetRequestedServiceQuotaChange.html

#### Defined in

actions/servicequotas.ts:54

___

### GetServiceQuota

• **GetServiceQuota** = ``"servicequotas:GetServiceQuota"``

Grants permission to return the details for the specified service quota, includ
ing the applied value

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuota.html

#### Defined in

actions/servicequotas.ts:61

___

### GetServiceQuotaIncreaseRequestFromTemplate

• **GetServiceQuotaIncreaseRequestFromTemplate** = ``"servicequotas:GetServiceQuotaIncreaseRequestFromTemplate"``

Grants permission to retrieve the details for a service quota increase request
from the service quota template

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuotaIncreaseRequestFromTemplate.html

#### Defined in

actions/servicequotas.ts:68

___

### ListAWSDefaultServiceQuotas

• **ListAWSDefaultServiceQuotas** = ``"servicequotas:ListAWSDefaultServiceQuotas"``

Grants permission to list all default service quotas for the specified AWS serv
ice

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListAWSDefaultServiceQuotas.html

#### Defined in

actions/servicequotas.ts:75

___

### ListRequestedServiceQuotaChangeHistory

• **ListRequestedServiceQuotaChangeHistory** = ``"servicequotas:ListRequestedServiceQuotaChangeHistory"``

Grants permission to request a list of the changes to quotas for a service

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistory.html

#### Defined in

actions/servicequotas.ts:81

___

### ListRequestedServiceQuotaChangeHistoryByQuota

• **ListRequestedServiceQuotaChangeHistoryByQuota** = ``"servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota"``

Grants permission to request a list of the changes to specific service quotas

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistoryByQuota.html

#### Defined in

actions/servicequotas.ts:87

___

### ListServiceQuotaIncreaseRequestsInTemplate

• **ListServiceQuotaIncreaseRequestsInTemplate** = ``"servicequotas:ListServiceQuotaIncreaseRequestsInTemplate"``

Grants permission to return a list of the service quota increase requests from
the service quota template

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotaIncreaseRequestsInTemplate

#### Defined in

actions/servicequotas.ts:94

___

### ListServiceQuotas

• **ListServiceQuotas** = ``"servicequotas:ListServiceQuotas"``

Grants permission to list all service quotas for the specified AWS service, in
that account, in that Region

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html

#### Defined in

actions/servicequotas.ts:101

___

### ListServices

• **ListServices** = ``"servicequotas:ListServices"``

Grants permission to list the AWS services available in Service Quotas

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServices.html

#### Defined in

actions/servicequotas.ts:107

___

### ListTagsForResource

• **ListTagsForResource** = ``"servicequotas:ListTagsForResource"``

Grants permission to view the existing tags on a SQ resource

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListTagsForResource

#### Defined in

actions/servicequotas.ts:113

___

### PutServiceQuotaIncreaseRequestIntoTemplate

• **PutServiceQuotaIncreaseRequestIntoTemplate** = ``"servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate"``

Grants permission to define and add a quota to the service quota template

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_PutServiceQuotaIncreaseRequestIntoTemplate.html

#### Defined in

actions/servicequotas.ts:119

___

### RequestServiceQuotaIncrease

• **RequestServiceQuotaIncrease** = ``"servicequotas:RequestServiceQuotaIncrease"``

Grants permission to submit the request for a service quota increase

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html

#### Defined in

actions/servicequotas.ts:125

___

### TagResource

• **TagResource** = ``"servicequotas:TagResource"``

Grants permission to associate a set of tags with an existing SQ resource

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_TagResource

#### Defined in

actions/servicequotas.ts:131

___

### UntagResource

• **UntagResource** = ``"servicequotas:UntagResource"``

Grants permission to remove a set of tags from a SQ resource, where tags to be
removed match a set of customer-supplied tag keys

See https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_UntagResource

#### Defined in

actions/servicequotas.ts:138
