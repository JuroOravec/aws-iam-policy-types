[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSsmSapActions

# Enumeration: AwsSsmSapActions

All IAM policy actions for AWS Systems Manager for SAP (SSM-SAP)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerforsap.html

2024-02-12T09:59:26.029Z

## Table of contents

### Enumeration Members

- [BackupDatabase](AwsSsmSapActions.md#backupdatabase)
- [DeleteResourcePermission](AwsSsmSapActions.md#deleteresourcepermission)
- [DeregisterApplication](AwsSsmSapActions.md#deregisterapplication)
- [GetApplication](AwsSsmSapActions.md#getapplication)
- [GetComponent](AwsSsmSapActions.md#getcomponent)
- [GetDatabase](AwsSsmSapActions.md#getdatabase)
- [GetOperation](AwsSsmSapActions.md#getoperation)
- [GetResourcePermission](AwsSsmSapActions.md#getresourcepermission)
- [ListApplications](AwsSsmSapActions.md#listapplications)
- [ListComponents](AwsSsmSapActions.md#listcomponents)
- [ListDatabases](AwsSsmSapActions.md#listdatabases)
- [ListOperations](AwsSsmSapActions.md#listoperations)
- [ListTagsForResource](AwsSsmSapActions.md#listtagsforresource)
- [PutResourcePermission](AwsSsmSapActions.md#putresourcepermission)
- [RegisterApplication](AwsSsmSapActions.md#registerapplication)
- [RestoreDatabase](AwsSsmSapActions.md#restoredatabase)
- [StartApplicationRefresh](AwsSsmSapActions.md#startapplicationrefresh)
- [TagResource](AwsSsmSapActions.md#tagresource)
- [UntagResource](AwsSsmSapActions.md#untagresource)
- [UpdateApplicationSettings](AwsSsmSapActions.md#updateapplicationsettings)
- [UpdateHANABackupSettings](AwsSsmSapActions.md#updatehanabackupsettings)

## Enumeration Members

### BackupDatabase

• **BackupDatabase** = ``"ssm-sap:BackupDatabase"``

Grants permission to perform backup operation on a specified database

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:17

___

### DeleteResourcePermission

• **DeleteResourcePermission** = ``"ssm-sap:DeleteResourcePermission"``

Grants permission to delete the SSM for SAP level resource permissions associat
ed with a SSM for SAP database resource

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:24

___

### DeregisterApplication

• **DeregisterApplication** = ``"ssm-sap:DeregisterApplication"``

Grants permission to deregister an SAP application with SSM for SAP

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:30

___

### GetApplication

• **GetApplication** = ``"ssm-sap:GetApplication"``

Grants permission to access information about an application registered with SS
M for SAP by providing the application ID or application ARN

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:37

___

### GetComponent

• **GetComponent** = ``"ssm-sap:GetComponent"``

Grants permission to access information about a component registered with SSM f
or SAP by providing the application ID and component ID

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:44

___

### GetDatabase

• **GetDatabase** = ``"ssm-sap:GetDatabase"``

Grants permission to access information about a database registered with SSM fo
r SAP by providing the application ID, component ID, and database ID

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:51

___

### GetOperation

• **GetOperation** = ``"ssm-sap:GetOperation"``

Grants permission to access information about an operation by providing its ope
ration ID

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:58

___

### GetResourcePermission

• **GetResourcePermission** = ``"ssm-sap:GetResourcePermission"``

Grants permission to get the SSM for SAP level resource permissions associated
with a SSM for SAP database resource

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:65

___

### ListApplications

• **ListApplications** = ``"ssm-sap:ListApplications"``

Grants permission to retrieve a list of all applications registered with SSM fo
r SAP under the customer AWS account

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:72

___

### ListComponents

• **ListComponents** = ``"ssm-sap:ListComponents"``

Grants permission to retrieve a list of all components in the account of custom
er, or a specific application

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:79

___

### ListDatabases

• **ListDatabases** = ``"ssm-sap:ListDatabases"``

Grants permission to retrieve a list of all databases in the account of custome
r, or a specific application

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:86

___

### ListOperations

• **ListOperations** = ``"ssm-sap:ListOperations"``

Grants permission to retrieve a list of all operations in the account of custom
er, additional filters can be applied

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:93

___

### ListTagsForResource

• **ListTagsForResource** = ``"ssm-sap:ListTagsForResource"``

Grants permission to list the tags on a specified resource ARN

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:99

___

### PutResourcePermission

• **PutResourcePermission** = ``"ssm-sap:PutResourcePermission"``

Grants permission to add the SSM for SAP level resource permissions associated
with a SSM for SAP database resource

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:106

___

### RegisterApplication

• **RegisterApplication** = ``"ssm-sap:RegisterApplication"``

Grants permission to registers an SAP application with SSM for SAP

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:112

___

### RestoreDatabase

• **RestoreDatabase** = ``"ssm-sap:RestoreDatabase"``

Grants permission to restore a database from another database

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:118

___

### StartApplicationRefresh

• **StartApplicationRefresh** = ``"ssm-sap:StartApplicationRefresh"``

Grants permission to start an on-demand discovery of a registered SSM for SAP a
pplication

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:125

___

### TagResource

• **TagResource** = ``"ssm-sap:TagResource"``

Grants permission to tag a specified resource ARN

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:131

___

### UntagResource

• **UntagResource** = ``"ssm-sap:UntagResource"``

Grants permission to remove tags from a specified resource ARN

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:137

___

### UpdateApplicationSettings

• **UpdateApplicationSettings** = ``"ssm-sap:UpdateApplicationSettings"``

Grants permission to update settings of a registered SSM for SAP application

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:143

___

### UpdateHANABackupSettings

• **UpdateHANABackupSettings** = ``"ssm-sap:UpdateHANABackupSettings"``

Grants permission to update the HANA backup settings of a specified database

See https://docs.aws.amazon.com/systems-manager/index.html

#### Defined in

actions/ssm-sap.ts:149
