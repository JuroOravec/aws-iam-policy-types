[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIotjobsdataActions

# Enumeration: AwsIotjobsdataActions

All IAM policy actions for AWS IoT Jobs DataPlane (IOTJOBSDATA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotjobsdataplane.html

2024-02-12T09:57:51.967Z

## Table of contents

### Enumeration Members

- [DescribeJobExecution](AwsIotjobsdataActions.md#describejobexecution)
- [GetPendingJobExecutions](AwsIotjobsdataActions.md#getpendingjobexecutions)
- [StartNextPendingJobExecution](AwsIotjobsdataActions.md#startnextpendingjobexecution)
- [UpdateJobExecution](AwsIotjobsdataActions.md#updatejobexecution)

## Enumeration Members

### DescribeJobExecution

• **DescribeJobExecution** = ``"iotjobsdata:DescribeJobExecution"``

Grants permission to describe a job execution

See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_DescribeJobExecution.html

#### Defined in

actions/iotjobsdata.ts:17

___

### GetPendingJobExecutions

• **GetPendingJobExecutions** = ``"iotjobsdata:GetPendingJobExecutions"``

Grants permission to get the list of all jobs for a thing that are not in a ter
minal state

See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_GetPendingJobExecutions.html

#### Defined in

actions/iotjobsdata.ts:24

___

### StartNextPendingJobExecution

• **StartNextPendingJobExecution** = ``"iotjobsdata:StartNextPendingJobExecution"``

Grants permission to get and start the next pending job execution for a thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_StartNextPendingJobExecution.html

#### Defined in

actions/iotjobsdata.ts:30

___

### UpdateJobExecution

• **UpdateJobExecution** = ``"iotjobsdata:UpdateJobExecution"``

Grants permission to update a job execution

See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_UpdateJobExecution.html

#### Defined in

actions/iotjobsdata.ts:36
