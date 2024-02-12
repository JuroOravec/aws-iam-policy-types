[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsAwsconnectorActions

# Enumeration: AwsAwsconnectorActions

All IAM policy actions for AWS Connector Service (AWSCONNECTOR)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconnectorservice.html

2024-02-12T09:56:47.220Z

## Table of contents

### Enumeration Members

- [GetConnectorHealth](AwsAwsconnectorActions.md#getconnectorhealth)
- [RegisterConnector](AwsAwsconnectorActions.md#registerconnector)
- [ValidateConnectorId](AwsAwsconnectorActions.md#validateconnectorid)

## Enumeration Members

### GetConnectorHealth

• **GetConnectorHealth** = ``"awsconnector:GetConnectorHealth"``

Retrieves all health metrics that were published from the Server Migration Conn
ector.

See https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions

#### Defined in

actions/awsconnector.ts:18

___

### RegisterConnector

• **RegisterConnector** = ``"awsconnector:RegisterConnector"``

Registers AWS Connector with AWS Connector Service.

See https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions

#### Defined in

actions/awsconnector.ts:24

___

### ValidateConnectorId

• **ValidateConnectorId** = ``"awsconnector:ValidateConnectorId"``

Validates Server Migration Connector Id that was registered with AWS Connector
Service.

See https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions

#### Defined in

actions/awsconnector.ts:31
