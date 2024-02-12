[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsExecuteApiActions

# Enumeration: AwsExecuteApiActions

All IAM policy actions for Amazon API Gateway (EXECUTE-API)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigateway.html

2024-02-12T09:55:55.280Z

## Table of contents

### Enumeration Members

- [InvalidateCache](AwsExecuteApiActions.md#invalidatecache)
- [Invoke](AwsExecuteApiActions.md#invoke)
- [ManageConnections](AwsExecuteApiActions.md#manageconnections)

## Enumeration Members

### InvalidateCache

• **InvalidateCache** = ``"execute-api:InvalidateCache"``

Used to invalidate API cache upon a client request

See https://docs.aws.amazon.com/apigateway/api-reference/api-gateway-caching.html

#### Defined in

actions/execute-api.ts:17

___

### Invoke

• **Invoke** = ``"execute-api:Invoke"``

Used to invoke an API upon a client request

See https://docs.aws.amazon.com/apigateway/api-reference/how-to-call-api.html

#### Defined in

actions/execute-api.ts:23

___

### ManageConnections

• **ManageConnections** = ``"execute-api:ManageConnections"``

ManageConnections controls access to the

**`Connections`**

API

See https://docs.aws.amazon.com/apigateway/api-reference/apigateway-websocket-control-access-iam.html

#### Defined in

actions/execute-api.ts:29
