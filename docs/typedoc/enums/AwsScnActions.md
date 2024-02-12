[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsScnActions

# Enumeration: AwsScnActions

All IAM policy actions for AWS Supply Chain (SCN)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

2024-02-12T09:59:22.304Z

## Table of contents

### Enumeration Members

- [AssignAdminPermissionsToUser](AwsScnActions.md#assignadminpermissionstouser)
- [CreateBillOfMaterialsImportJob](AwsScnActions.md#createbillofmaterialsimportjob)
- [CreateInstance](AwsScnActions.md#createinstance)
- [CreateSSOApplication](AwsScnActions.md#createssoapplication)
- [DeleteInstance](AwsScnActions.md#deleteinstance)
- [DeleteSSOApplication](AwsScnActions.md#deletessoapplication)
- [DescribeInstance](AwsScnActions.md#describeinstance)
- [GetBillOfMaterialsImportJob](AwsScnActions.md#getbillofmaterialsimportjob)
- [ListAdminUsers](AwsScnActions.md#listadminusers)
- [ListInstances](AwsScnActions.md#listinstances)
- [ListTagsForResource](AwsScnActions.md#listtagsforresource)
- [RemoveAdminPermissionsForUser](AwsScnActions.md#removeadminpermissionsforuser)
- [TagResource](AwsScnActions.md#tagresource)
- [UntagResource](AwsScnActions.md#untagresource)
- [UpdateInstance](AwsScnActions.md#updateinstance)

## Enumeration Members

### AssignAdminPermissionsToUser

• **AssignAdminPermissionsToUser** = ``"scn:AssignAdminPermissionsToUser"``

Grants permission to add AWS Supply Chain administrator permission to federated
user

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:18

___

### CreateBillOfMaterialsImportJob

• **CreateBillOfMaterialsImportJob** = ``"scn:CreateBillOfMaterialsImportJob"``

Grants permission to create a BillOfMaterialsImportJob which will import a CSV
file of BillOfMaterials records

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:25

___

### CreateInstance

• **CreateInstance** = ``"scn:CreateInstance"``

Grants permission to create a new AWS Supply Chain instance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:31

___

### CreateSSOApplication

• **CreateSSOApplication** = ``"scn:CreateSSOApplication"``

Grants permission to create IAM Identity Center application for a AWS Supply Ch
ain instance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:38

___

### DeleteInstance

• **DeleteInstance** = ``"scn:DeleteInstance"``

Grants permission to delete an AWS Supply Chain instance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:44

___

### DeleteSSOApplication

• **DeleteSSOApplication** = ``"scn:DeleteSSOApplication"``

Grants permission to delete IAM Identity Center application of the AWS Supply C
hain instance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:51

___

### DescribeInstance

• **DescribeInstance** = ``"scn:DescribeInstance"``

Grants permission to view details of an AWS Supply Chain instance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:57

___

### GetBillOfMaterialsImportJob

• **GetBillOfMaterialsImportJob** = ``"scn:GetBillOfMaterialsImportJob"``

Grants permission to view status and details of a BillOfMaterialsImportJob

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:63

___

### ListAdminUsers

• **ListAdminUsers** = ``"scn:ListAdminUsers"``

Grants permission to list AWS Supply Chain administrators of an instance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:69

___

### ListInstances

• **ListInstances** = ``"scn:ListInstances"``

Grants permission to view the AWS Supply Chain instances associated with an AWS
account

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:76

___

### ListTagsForResource

• **ListTagsForResource** = ``"scn:ListTagsForResource"``

Grants permission to list tags for an AWS Supply Chain instance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:82

___

### RemoveAdminPermissionsForUser

• **RemoveAdminPermissionsForUser** = ``"scn:RemoveAdminPermissionsForUser"``

Grants permission to remove AWS Supply Chain administrator permission from fede
rated user

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:89

___

### TagResource

• **TagResource** = ``"scn:TagResource"``

Grants permission to tag an AWS Supply Chain instance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:95

___

### UntagResource

• **UntagResource** = ``"scn:UntagResource"``

Grants permission to remove tag from an AWS Supply Chain instance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:101

___

### UpdateInstance

• **UpdateInstance** = ``"scn:UpdateInstance"``

Grants permission to update an AWS Supply Chain instance

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html

#### Defined in

actions/scn.ts:107
