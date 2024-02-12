[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAirflowActions

# Enumeration: AwsAirflowActions

All IAM policy actions for Amazon Managed Workflows for Apache Airflow (AIRFLOW)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedworkflowsforapacheairflow.html

2024-02-12T09:58:14.334Z

## Table of contents

### Enumeration Members

- [CreateCliToken](AwsAirflowActions.md#createclitoken)
- [CreateEnvironment](AwsAirflowActions.md#createenvironment)
- [CreateWebLoginToken](AwsAirflowActions.md#createweblogintoken)
- [DeleteEnvironment](AwsAirflowActions.md#deleteenvironment)
- [GetEnvironment](AwsAirflowActions.md#getenvironment)
- [ListEnvironments](AwsAirflowActions.md#listenvironments)
- [ListTagsForResource](AwsAirflowActions.md#listtagsforresource)
- [PublishMetrics](AwsAirflowActions.md#publishmetrics)
- [TagResource](AwsAirflowActions.md#tagresource)
- [UntagResource](AwsAirflowActions.md#untagresource)
- [UpdateEnvironment](AwsAirflowActions.md#updateenvironment)

## Enumeration Members

### CreateCliToken

• **CreateCliToken** = ``"airflow:CreateCliToken"``

Grants permission to create a short-lived token that allows a user to invoke Ai
rflow CLI via an endpoint on the Apache Airflow Webserver

See https://docs.aws.amazon.com/mwaa/latest/API/API_CreateCliToken.html

#### Defined in

actions/airflow.ts:18

___

### CreateEnvironment

• **CreateEnvironment** = ``"airflow:CreateEnvironment"``

Grants permission to create an Amazon MWAA environment

See https://docs.aws.amazon.com/mwaa/latest/API/API_CreateEnvironment.html

#### Defined in

actions/airflow.ts:24

___

### CreateWebLoginToken

• **CreateWebLoginToken** = ``"airflow:CreateWebLoginToken"``

Grants permission to create a short-lived token that allows a user to log into
Apache Airflow web UI

See https://docs.aws.amazon.com/mwaa/latest/API/API_CreateWebLoginToken.html

#### Defined in

actions/airflow.ts:31

___

### DeleteEnvironment

• **DeleteEnvironment** = ``"airflow:DeleteEnvironment"``

Grants permission to delete an Amazon MWAA environment

See https://docs.aws.amazon.com/mwaa/latest/API/API_DeleteEnvironment.html

#### Defined in

actions/airflow.ts:37

___

### GetEnvironment

• **GetEnvironment** = ``"airflow:GetEnvironment"``

Grants permission to view details about an Amazon MWAA environment

See https://docs.aws.amazon.com/mwaa/latest/API/API_GetEnvironment.html

#### Defined in

actions/airflow.ts:43

___

### ListEnvironments

• **ListEnvironments** = ``"airflow:ListEnvironments"``

Grants permission to list the Amazon MWAA environments in your account

See https://docs.aws.amazon.com/mwaa/latest/API/API_ListEnvironments.html

#### Defined in

actions/airflow.ts:49

___

### ListTagsForResource

• **ListTagsForResource** = ``"airflow:ListTagsForResource"``

Grants permission to lists tag for an Amazon MWAA environment

See https://docs.aws.amazon.com/mwaa/latest/API/API_ListTagsForResource.html

#### Defined in

actions/airflow.ts:55

___

### PublishMetrics

• **PublishMetrics** = ``"airflow:PublishMetrics"``

Grants permission to publish metrics for an Amazon MWAA environment

See https://docs.aws.amazon.com/mwaa/latest/API/API_PublishMetrics.html

#### Defined in

actions/airflow.ts:61

___

### TagResource

• **TagResource** = ``"airflow:TagResource"``

Grants permission to tag an Amazon MWAA environment

See https://docs.aws.amazon.com/mwaa/latest/API/API_TagResource.html

#### Defined in

actions/airflow.ts:67

___

### UntagResource

• **UntagResource** = ``"airflow:UntagResource"``

Grants permission to untag an Amazon MWAA environment

See https://docs.aws.amazon.com/mwaa/latest/API/API_UntagResource.html

#### Defined in

actions/airflow.ts:73

___

### UpdateEnvironment

• **UpdateEnvironment** = ``"airflow:UpdateEnvironment"``

Grants permission to modify an Amazon MWAA environment

See https://docs.aws.amazon.com/mwaa/latest/API/API_UpdateEnvironment.html

#### Defined in

actions/airflow.ts:79
