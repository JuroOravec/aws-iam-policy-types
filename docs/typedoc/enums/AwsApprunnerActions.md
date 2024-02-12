[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsApprunnerActions

# Enumeration: AwsApprunnerActions

All IAM policy actions for AWS App Runner (APPRUNNER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapprunner.html

2024-02-12T09:55:58.219Z

## Table of contents

### Enumeration Members

- [AssociateCustomDomain](AwsApprunnerActions.md#associatecustomdomain)
- [AssociateWebAcl](AwsApprunnerActions.md#associatewebacl)
- [CreateAutoScalingConfiguration](AwsApprunnerActions.md#createautoscalingconfiguration)
- [CreateConnection](AwsApprunnerActions.md#createconnection)
- [CreateObservabilityConfiguration](AwsApprunnerActions.md#createobservabilityconfiguration)
- [CreateService](AwsApprunnerActions.md#createservice)
- [CreateVpcConnector](AwsApprunnerActions.md#createvpcconnector)
- [CreateVpcIngressConnection](AwsApprunnerActions.md#createvpcingressconnection)
- [DeleteAutoScalingConfiguration](AwsApprunnerActions.md#deleteautoscalingconfiguration)
- [DeleteConnection](AwsApprunnerActions.md#deleteconnection)
- [DeleteObservabilityConfiguration](AwsApprunnerActions.md#deleteobservabilityconfiguration)
- [DeleteService](AwsApprunnerActions.md#deleteservice)
- [DeleteVpcConnector](AwsApprunnerActions.md#deletevpcconnector)
- [DeleteVpcIngressConnection](AwsApprunnerActions.md#deletevpcingressconnection)
- [DescribeAutoScalingConfiguration](AwsApprunnerActions.md#describeautoscalingconfiguration)
- [DescribeCustomDomains](AwsApprunnerActions.md#describecustomdomains)
- [DescribeObservabilityConfiguration](AwsApprunnerActions.md#describeobservabilityconfiguration)
- [DescribeOperation](AwsApprunnerActions.md#describeoperation)
- [DescribeService](AwsApprunnerActions.md#describeservice)
- [DescribeVpcConnector](AwsApprunnerActions.md#describevpcconnector)
- [DescribeVpcIngressConnection](AwsApprunnerActions.md#describevpcingressconnection)
- [DescribeWebAclForService](AwsApprunnerActions.md#describewebaclforservice)
- [DisassociateCustomDomain](AwsApprunnerActions.md#disassociatecustomdomain)
- [DisassociateWebAcl](AwsApprunnerActions.md#disassociatewebacl)
- [ListAssociatedServicesForWebAcl](AwsApprunnerActions.md#listassociatedservicesforwebacl)
- [ListAutoScalingConfigurations](AwsApprunnerActions.md#listautoscalingconfigurations)
- [ListConnections](AwsApprunnerActions.md#listconnections)
- [ListObservabilityConfigurations](AwsApprunnerActions.md#listobservabilityconfigurations)
- [ListOperations](AwsApprunnerActions.md#listoperations)
- [ListServices](AwsApprunnerActions.md#listservices)
- [ListServicesForAutoScalingConfiguration](AwsApprunnerActions.md#listservicesforautoscalingconfiguration)
- [ListTagsForResource](AwsApprunnerActions.md#listtagsforresource)
- [ListVpcConnectors](AwsApprunnerActions.md#listvpcconnectors)
- [ListVpcIngressConnections](AwsApprunnerActions.md#listvpcingressconnections)
- [PauseService](AwsApprunnerActions.md#pauseservice)
- [ResumeService](AwsApprunnerActions.md#resumeservice)
- [StartDeployment](AwsApprunnerActions.md#startdeployment)
- [TagResource](AwsApprunnerActions.md#tagresource)
- [UntagResource](AwsApprunnerActions.md#untagresource)
- [UpdateDefaultAutoScalingConfiguration](AwsApprunnerActions.md#updatedefaultautoscalingconfiguration)
- [UpdateService](AwsApprunnerActions.md#updateservice)
- [UpdateVpcIngressConnection](AwsApprunnerActions.md#updatevpcingressconnection)

## Enumeration Members

### AssociateCustomDomain

• **AssociateCustomDomain** = ``"apprunner:AssociateCustomDomain"``

Grants permission to associate your own domain name with the AWS App Runner sub
domain URL of your App Runner service

See https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html

#### Defined in

actions/apprunner.ts:18

___

### AssociateWebAcl

• **AssociateWebAcl** = ``"apprunner:AssociateWebAcl"``

Grants permission to associate the service with an AWS WAF web ACL

See https://docs.aws.amazon.com/apprunner/latest/dg/waf-manage.html

#### Defined in

actions/apprunner.ts:24

___

### CreateAutoScalingConfiguration

• **CreateAutoScalingConfiguration** = ``"apprunner:CreateAutoScalingConfiguration"``

Grants permission to create an AWS App Runner automatic scaling configuration r
esource

See https://docs.aws.amazon.com/apprunner/latest/api/API_CreateAutoScalingConfiguration.html

#### Defined in

actions/apprunner.ts:31

___

### CreateConnection

• **CreateConnection** = ``"apprunner:CreateConnection"``

Grants permission to create an AWS App Runner connection resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_CreateConnection.html

#### Defined in

actions/apprunner.ts:37

___

### CreateObservabilityConfiguration

• **CreateObservabilityConfiguration** = ``"apprunner:CreateObservabilityConfiguration"``

Grants permission to create an AWS App Runner observability configuration resou
rce

See https://docs.aws.amazon.com/apprunner/latest/api/API_CreateObservabilityConfiguration.html

#### Defined in

actions/apprunner.ts:44

___

### CreateService

• **CreateService** = ``"apprunner:CreateService"``

Grants permission to create an AWS App Runner service resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html

#### Defined in

actions/apprunner.ts:50

___

### CreateVpcConnector

• **CreateVpcConnector** = ``"apprunner:CreateVpcConnector"``

Grants permission to create an AWS App Runner VPC connector resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_CreateVpcConnector.html

#### Defined in

actions/apprunner.ts:56

___

### CreateVpcIngressConnection

• **CreateVpcIngressConnection** = ``"apprunner:CreateVpcIngressConnection"``

Grants permission to create an AWS App Runner VpcIngressConnection resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_CreateVpcIngressConnection.html

#### Defined in

actions/apprunner.ts:62

___

### DeleteAutoScalingConfiguration

• **DeleteAutoScalingConfiguration** = ``"apprunner:DeleteAutoScalingConfiguration"``

Grants permission to delete an AWS App Runner automatic scaling configuration r
esource

See https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteAutoScalingConfiguration.html

#### Defined in

actions/apprunner.ts:69

___

### DeleteConnection

• **DeleteConnection** = ``"apprunner:DeleteConnection"``

Grants permission to delete an AWS App Runner connection resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteConnection.html

#### Defined in

actions/apprunner.ts:75

___

### DeleteObservabilityConfiguration

• **DeleteObservabilityConfiguration** = ``"apprunner:DeleteObservabilityConfiguration"``

Grants permission to delete an AWS App Runner observability configuration resou
rce

See https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteObservabilityConfiguration.html

#### Defined in

actions/apprunner.ts:82

___

### DeleteService

• **DeleteService** = ``"apprunner:DeleteService"``

Grants permission to delete an AWS App Runner service resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html

#### Defined in

actions/apprunner.ts:88

___

### DeleteVpcConnector

• **DeleteVpcConnector** = ``"apprunner:DeleteVpcConnector"``

Grants permission to delete an AWS App Runner VPC connector resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteVpcConnector.html

#### Defined in

actions/apprunner.ts:94

___

### DeleteVpcIngressConnection

• **DeleteVpcIngressConnection** = ``"apprunner:DeleteVpcIngressConnection"``

Grants permission to delete an AWS App Runner VpcIngressConnection resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteVpcIngressConnection.html

#### Defined in

actions/apprunner.ts:100

___

### DescribeAutoScalingConfiguration

• **DescribeAutoScalingConfiguration** = ``"apprunner:DescribeAutoScalingConfiguration"``

Grants permission to retrieve the description of an AWS App Runner automatic sc
aling configuration resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeAutoScalingConfiguration.html

#### Defined in

actions/apprunner.ts:107

___

### DescribeCustomDomains

• **DescribeCustomDomains** = ``"apprunner:DescribeCustomDomains"``

Grants permission to retrieve descriptions of custom domain names associated wi
th an AWS App Runner service

See https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeCustomDomains.html

#### Defined in

actions/apprunner.ts:114

___

### DescribeObservabilityConfiguration

• **DescribeObservabilityConfiguration** = ``"apprunner:DescribeObservabilityConfiguration"``

Grants permission to retrieve the description of an AWS App Runner observabilit
y configuration resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeObservabilityConfiguration.html

#### Defined in

actions/apprunner.ts:121

___

### DescribeOperation

• **DescribeOperation** = ``"apprunner:DescribeOperation"``

Grants permission to retrieve the description of an operation that occurred on
an AWS App Runner service

See https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeOperation.html

#### Defined in

actions/apprunner.ts:128

___

### DescribeService

• **DescribeService** = ``"apprunner:DescribeService"``

Grants permission to retrieve the description of an AWS App Runner service reso
urce

See https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html

#### Defined in

actions/apprunner.ts:135

___

### DescribeVpcConnector

• **DescribeVpcConnector** = ``"apprunner:DescribeVpcConnector"``

Grants permission to retrieve the description of an AWS App Runner VPC connecto
r resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeVpcConnector.html

#### Defined in

actions/apprunner.ts:142

___

### DescribeVpcIngressConnection

• **DescribeVpcIngressConnection** = ``"apprunner:DescribeVpcIngressConnection"``

Grants permission to retrieve the description of an AWS App Runner VpcIngressCo
nnection resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeVpcIngressConnection.html

#### Defined in

actions/apprunner.ts:149

___

### DescribeWebAclForService

• **DescribeWebAclForService** = ``"apprunner:DescribeWebAclForService"``

Grants permission to get the AWS WAF web ACL that is associated with an AWS App
Runner service

See https://docs.aws.amazon.com/apprunner/latest/dg/waf-manage.html

#### Defined in

actions/apprunner.ts:156

___

### DisassociateCustomDomain

• **DisassociateCustomDomain** = ``"apprunner:DisassociateCustomDomain"``

Grants permission to disassociate a custom domain name from an AWS App Runner s
ervice

See https://docs.aws.amazon.com/apprunner/latest/api/API_DisassociateCustomDomain.html

#### Defined in

actions/apprunner.ts:163

___

### DisassociateWebAcl

• **DisassociateWebAcl** = ``"apprunner:DisassociateWebAcl"``

Grants permission to disassociate the service with an AWS WAF web ACL

See https://docs.aws.amazon.com/apprunner/latest/dg/waf-manage.html

#### Defined in

actions/apprunner.ts:169

___

### ListAssociatedServicesForWebAcl

• **ListAssociatedServicesForWebAcl** = ``"apprunner:ListAssociatedServicesForWebAcl"``

Grants permission to list the services that are associated with an AWS WAF web
ACL

See https://docs.aws.amazon.com/apprunner/latest/dg/waf-manage.html

#### Defined in

actions/apprunner.ts:176

___

### ListAutoScalingConfigurations

• **ListAutoScalingConfigurations** = ``"apprunner:ListAutoScalingConfigurations"``

Grants permission to retrieve a list of AWS App Runner automatic scaling config
urations in your AWS account

See https://docs.aws.amazon.com/apprunner/latest/api/API_ListAutoScalingConfigurations.html

#### Defined in

actions/apprunner.ts:183

___

### ListConnections

• **ListConnections** = ``"apprunner:ListConnections"``

Grants permission to retrieve a list of AWS App Runner connections in your AWS
account

See https://docs.aws.amazon.com/apprunner/latest/api/API_ListConnections.html

#### Defined in

actions/apprunner.ts:190

___

### ListObservabilityConfigurations

• **ListObservabilityConfigurations** = ``"apprunner:ListObservabilityConfigurations"``

Grants permission to retrieve a list of AWS App Runner observability configurat
ions in your AWS account

See https://docs.aws.amazon.com/apprunner/latest/api/API_ListObservabilityConfigurations.html

#### Defined in

actions/apprunner.ts:197

___

### ListOperations

• **ListOperations** = ``"apprunner:ListOperations"``

Grants permission to retrieve a list of operations that occurred on an AWS App
Runner service resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html

#### Defined in

actions/apprunner.ts:204

___

### ListServices

• **ListServices** = ``"apprunner:ListServices"``

Grants permission to retrieve a list of running AWS App Runner services in your
AWS account

See https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html

#### Defined in

actions/apprunner.ts:211

___

### ListServicesForAutoScalingConfiguration

• **ListServicesForAutoScalingConfiguration** = ``"apprunner:ListServicesForAutoScalingConfiguration"``

Grants permission to retrieve a list of associated AppRunner services of an AWS
App Runner automatic scaling configuration in your AWS account

See https://docs.aws.amazon.com/apprunner/latest/api/API_ListServicesForAutoScalingConfiguration.html

#### Defined in

actions/apprunner.ts:218

___

### ListTagsForResource

• **ListTagsForResource** = ``"apprunner:ListTagsForResource"``

Grants permission to list tags associated with an AWS App Runner resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_ListTagsForResource.html

#### Defined in

actions/apprunner.ts:224

___

### ListVpcConnectors

• **ListVpcConnectors** = ``"apprunner:ListVpcConnectors"``

Grants permission to retrieve a list of AWS App Runner VPC connectors in your A
WS account

See https://docs.aws.amazon.com/apprunner/latest/api/API_ListVpcConnectors.html

#### Defined in

actions/apprunner.ts:231

___

### ListVpcIngressConnections

• **ListVpcIngressConnections** = ``"apprunner:ListVpcIngressConnections"``

Grants permission to retrieve a list of AWS App Runner VpcIngressConnections in
your AWS account

See https://docs.aws.amazon.com/apprunner/latest/api/API_ListVpcConnections.html

#### Defined in

actions/apprunner.ts:238

___

### PauseService

• **PauseService** = ``"apprunner:PauseService"``

Grants permission to pause an active AWS App Runner service

See https://docs.aws.amazon.com/apprunner/latest/api/API_PauseService.html

#### Defined in

actions/apprunner.ts:244

___

### ResumeService

• **ResumeService** = ``"apprunner:ResumeService"``

Grants permission to resume an active AWS App Runner service

See https://docs.aws.amazon.com/apprunner/latest/api/API_ResumeService.html

#### Defined in

actions/apprunner.ts:250

___

### StartDeployment

• **StartDeployment** = ``"apprunner:StartDeployment"``

Grants permission to initiate a manual deployemnt to an AWS App Runner service

See https://docs.aws.amazon.com/apprunner/latest/api/API_StartDeployment.html

#### Defined in

actions/apprunner.ts:256

___

### TagResource

• **TagResource** = ``"apprunner:TagResource"``

Grants permission to add tags to, or update tag values of, an AWS App Runner re
source

See https://docs.aws.amazon.com/apprunner/latest/api/API_TagResource.html

#### Defined in

actions/apprunner.ts:263

___

### UntagResource

• **UntagResource** = ``"apprunner:UntagResource"``

Grants permission to remove tags from an AWS App Runner resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_UntagResource.html

#### Defined in

actions/apprunner.ts:269

___

### UpdateDefaultAutoScalingConfiguration

• **UpdateDefaultAutoScalingConfiguration** = ``"apprunner:UpdateDefaultAutoScalingConfiguration"``

Grants permission to update an AWS App Runner automatic scaling configuration t
o be the default in your AWS account

See https://docs.aws.amazon.com/apprunner/latest/api/API_UpdateDefaultAutoScalingConfiguration.html

#### Defined in

actions/apprunner.ts:276

___

### UpdateService

• **UpdateService** = ``"apprunner:UpdateService"``

Grants permission to update an AWS App Runner service resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_UpdateService.html

#### Defined in

actions/apprunner.ts:282

___

### UpdateVpcIngressConnection

• **UpdateVpcIngressConnection** = ``"apprunner:UpdateVpcIngressConnection"``

Grants permission to update an AWS App Runner VpcIngressConnection resource

See https://docs.aws.amazon.com/apprunner/latest/api/API_UpdateVpcIngressConnection.html

#### Defined in

actions/apprunner.ts:288
