[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRedshiftServerlessActions

# Enumeration: AwsRedshiftServerlessActions

All IAM policy actions for Amazon Redshift Serverless (REDSHIFT-SERVERLESS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshiftserverless.html

2024-02-12T09:58:52.720Z

## Table of contents

### Enumeration Members

- [ConvertRecoveryPointToSnapshot](AwsRedshiftServerlessActions.md#convertrecoverypointtosnapshot)
- [CreateCustomDomainAssociation](AwsRedshiftServerlessActions.md#createcustomdomainassociation)
- [CreateEndpointAccess](AwsRedshiftServerlessActions.md#createendpointaccess)
- [CreateNamespace](AwsRedshiftServerlessActions.md#createnamespace)
- [CreateScheduledAction](AwsRedshiftServerlessActions.md#createscheduledaction)
- [CreateSnapshot](AwsRedshiftServerlessActions.md#createsnapshot)
- [CreateSnapshotCopyConfiguration](AwsRedshiftServerlessActions.md#createsnapshotcopyconfiguration)
- [CreateUsageLimit](AwsRedshiftServerlessActions.md#createusagelimit)
- [CreateWorkgroup](AwsRedshiftServerlessActions.md#createworkgroup)
- [DeleteCustomDomainAssociation](AwsRedshiftServerlessActions.md#deletecustomdomainassociation)
- [DeleteEndpointAccess](AwsRedshiftServerlessActions.md#deleteendpointaccess)
- [DeleteNamespace](AwsRedshiftServerlessActions.md#deletenamespace)
- [DeleteResourcePolicy](AwsRedshiftServerlessActions.md#deleteresourcepolicy)
- [DeleteScheduledAction](AwsRedshiftServerlessActions.md#deletescheduledaction)
- [DeleteSnapshot](AwsRedshiftServerlessActions.md#deletesnapshot)
- [DeleteSnapshotCopyConfiguration](AwsRedshiftServerlessActions.md#deletesnapshotcopyconfiguration)
- [DeleteUsageLimit](AwsRedshiftServerlessActions.md#deleteusagelimit)
- [DeleteWorkgroup](AwsRedshiftServerlessActions.md#deleteworkgroup)
- [DescribeOneTimeCredit](AwsRedshiftServerlessActions.md#describeonetimecredit)
- [GetCredentials](AwsRedshiftServerlessActions.md#getcredentials)
- [GetCustomDomainAssociation](AwsRedshiftServerlessActions.md#getcustomdomainassociation)
- [GetEndpointAccess](AwsRedshiftServerlessActions.md#getendpointaccess)
- [GetNamespace](AwsRedshiftServerlessActions.md#getnamespace)
- [GetRecoveryPoint](AwsRedshiftServerlessActions.md#getrecoverypoint)
- [GetResourcePolicy](AwsRedshiftServerlessActions.md#getresourcepolicy)
- [GetScheduledAction](AwsRedshiftServerlessActions.md#getscheduledaction)
- [GetSnapshot](AwsRedshiftServerlessActions.md#getsnapshot)
- [GetTableRestoreStatus](AwsRedshiftServerlessActions.md#gettablerestorestatus)
- [GetUsageLimit](AwsRedshiftServerlessActions.md#getusagelimit)
- [GetWorkgroup](AwsRedshiftServerlessActions.md#getworkgroup)
- [ListCustomDomainAssociations](AwsRedshiftServerlessActions.md#listcustomdomainassociations)
- [ListEndpointAccess](AwsRedshiftServerlessActions.md#listendpointaccess)
- [ListNamespaces](AwsRedshiftServerlessActions.md#listnamespaces)
- [ListRecoveryPoints](AwsRedshiftServerlessActions.md#listrecoverypoints)
- [ListScheduledActions](AwsRedshiftServerlessActions.md#listscheduledactions)
- [ListSnapshotCopyConfigurations](AwsRedshiftServerlessActions.md#listsnapshotcopyconfigurations)
- [ListSnapshots](AwsRedshiftServerlessActions.md#listsnapshots)
- [ListTableRestoreStatus](AwsRedshiftServerlessActions.md#listtablerestorestatus)
- [ListTagsForResource](AwsRedshiftServerlessActions.md#listtagsforresource)
- [ListUsageLimits](AwsRedshiftServerlessActions.md#listusagelimits)
- [ListWorkgroups](AwsRedshiftServerlessActions.md#listworkgroups)
- [PutResourcePolicy](AwsRedshiftServerlessActions.md#putresourcepolicy)
- [RestoreFromRecoveryPoint](AwsRedshiftServerlessActions.md#restorefromrecoverypoint)
- [RestoreFromSnapshot](AwsRedshiftServerlessActions.md#restorefromsnapshot)
- [RestoreTableFromRecoveryPoint](AwsRedshiftServerlessActions.md#restoretablefromrecoverypoint)
- [RestoreTableFromSnapshot](AwsRedshiftServerlessActions.md#restoretablefromsnapshot)
- [TagResource](AwsRedshiftServerlessActions.md#tagresource)
- [UntagResource](AwsRedshiftServerlessActions.md#untagresource)
- [UpdateCustomDomainAssociation](AwsRedshiftServerlessActions.md#updatecustomdomainassociation)
- [UpdateEndpointAccess](AwsRedshiftServerlessActions.md#updateendpointaccess)
- [UpdateNamespace](AwsRedshiftServerlessActions.md#updatenamespace)
- [UpdateScheduledAction](AwsRedshiftServerlessActions.md#updatescheduledaction)
- [UpdateSnapshot](AwsRedshiftServerlessActions.md#updatesnapshot)
- [UpdateSnapshotCopyConfiguration](AwsRedshiftServerlessActions.md#updatesnapshotcopyconfiguration)
- [UpdateUsageLimit](AwsRedshiftServerlessActions.md#updateusagelimit)
- [UpdateWorkgroup](AwsRedshiftServerlessActions.md#updateworkgroup)

## Enumeration Members

### ConvertRecoveryPointToSnapshot

• **ConvertRecoveryPointToSnapshot** = ``"redshift-serverless:ConvertRecoveryPointToSnapshot"``

Grants permission to convert a recovery point to a snapshot

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ConvertRecoveryPointToSnapshot.html

#### Defined in

actions/redshift-serverless.ts:17

___

### CreateCustomDomainAssociation

• **CreateCustomDomainAssociation** = ``"redshift-serverless:CreateCustomDomainAssociation"``

Grants permission to create a custom domain association in Amazon Redshift Serv
erless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateCustomDomainAssociation.html

#### Defined in

actions/redshift-serverless.ts:24

___

### CreateEndpointAccess

• **CreateEndpointAccess** = ``"redshift-serverless:CreateEndpointAccess"``

Grants permission to create an Amazon Redshift Serverless managed VPC endpoint

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateEndpointAccess.html

#### Defined in

actions/redshift-serverless.ts:30

___

### CreateNamespace

• **CreateNamespace** = ``"redshift-serverless:CreateNamespace"``

Grants permission to create an Amazon Redshift Serverless namespace

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateNamespace.html

#### Defined in

actions/redshift-serverless.ts:36

___

### CreateScheduledAction

• **CreateScheduledAction** = ``"redshift-serverless:CreateScheduledAction"``

Grants permission to create a scheduled action for a specified Amazon Redshift
Serverless namespace

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateScheduledAction.html

#### Defined in

actions/redshift-serverless.ts:43

___

### CreateSnapshot

• **CreateSnapshot** = ``"redshift-serverless:CreateSnapshot"``

Grants permission to create a snapshot of all databases in a namespace

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateSnapshot.html

#### Defined in

actions/redshift-serverless.ts:49

___

### CreateSnapshotCopyConfiguration

• **CreateSnapshotCopyConfiguration** = ``"redshift-serverless:CreateSnapshotCopyConfiguration"``

Grants permission to create a snapshot copy configuration for a specified Amazo
n Redshift Serverless namespace

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateSnapshotCopyConfiguration.html

#### Defined in

actions/redshift-serverless.ts:56

___

### CreateUsageLimit

• **CreateUsageLimit** = ``"redshift-serverless:CreateUsageLimit"``

Grants permission to create a usage limit for a specified Amazon Redshift Serve
rless usage type

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateUsageLimit.html

#### Defined in

actions/redshift-serverless.ts:63

___

### CreateWorkgroup

• **CreateWorkgroup** = ``"redshift-serverless:CreateWorkgroup"``

Grants permission to create a workgroup in Amazon Redshift Serverless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateWorkgroup.html

#### Defined in

actions/redshift-serverless.ts:69

___

### DeleteCustomDomainAssociation

• **DeleteCustomDomainAssociation** = ``"redshift-serverless:DeleteCustomDomainAssociation"``

Grants permission to delete a custom domain association

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteCustomDomainAssociation.html

#### Defined in

actions/redshift-serverless.ts:75

___

### DeleteEndpointAccess

• **DeleteEndpointAccess** = ``"redshift-serverless:DeleteEndpointAccess"``

Grants permission to delete an Amazon Redshift Serverless managed VPC endpoint

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteEndpointAccess.html

#### Defined in

actions/redshift-serverless.ts:81

___

### DeleteNamespace

• **DeleteNamespace** = ``"redshift-serverless:DeleteNamespace"``

Grants permission to delete a namespace from Amazon Redshift Serverless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteNamespace.html

#### Defined in

actions/redshift-serverless.ts:87

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"redshift-serverless:DeleteResourcePolicy"``

Grants permission to delete the specified resource policy

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/redshift-serverless.ts:93

___

### DeleteScheduledAction

• **DeleteScheduledAction** = ``"redshift-serverless:DeleteScheduledAction"``

Grants permission to delete a scheduled action from Amazon Redshift Serverless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteScheduledAction.html

#### Defined in

actions/redshift-serverless.ts:99

___

### DeleteSnapshot

• **DeleteSnapshot** = ``"redshift-serverless:DeleteSnapshot"``

Grants permission to delete a snapshot from Amazon Redshift Serverless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteSnapshot.html

#### Defined in

actions/redshift-serverless.ts:105

___

### DeleteSnapshotCopyConfiguration

• **DeleteSnapshotCopyConfiguration** = ``"redshift-serverless:DeleteSnapshotCopyConfiguration"``

Grants permission to delete a snapshot copy configuration for a Amazon Redshift
Serverless namespace

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteSnapshotCopyConfiguration.html

#### Defined in

actions/redshift-serverless.ts:112

___

### DeleteUsageLimit

• **DeleteUsageLimit** = ``"redshift-serverless:DeleteUsageLimit"``

Grants permission to delete a usage limit from Amazon Redshift Serverless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteUsageLimit.html

#### Defined in

actions/redshift-serverless.ts:118

___

### DeleteWorkgroup

• **DeleteWorkgroup** = ``"redshift-serverless:DeleteWorkgroup"``

Grants permission to delete a workgroup

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteWorkgroup.html

#### Defined in

actions/redshift-serverless.ts:124

___

### DescribeOneTimeCredit

• **DescribeOneTimeCredit** = ``"redshift-serverless:DescribeOneTimeCredit"``

Grants permission to see on the Amazon Redshift Serverless console the remainin
g number of free trial credits and their expiration date

See https://aws.amazon.com/redshift/free-trial/

#### Defined in

actions/redshift-serverless.ts:131

___

### GetCredentials

• **GetCredentials** = ``"redshift-serverless:GetCredentials"``

Grants permission to get a database user name and temporary password with tempo
rary authorization to log on to Amazon Redshift Serverless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetCredentials.html

#### Defined in

actions/redshift-serverless.ts:138

___

### GetCustomDomainAssociation

• **GetCustomDomainAssociation** = ``"redshift-serverless:GetCustomDomainAssociation"``

Grants permission to get information about a specific custom domain association

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetCustomDomainAssociation.html

#### Defined in

actions/redshift-serverless.ts:144

___

### GetEndpointAccess

• **GetEndpointAccess** = ``"redshift-serverless:GetEndpointAccess"``

Grants permission to create an Amazon Redshift Serverless managed VPC endpoint

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetEndpointAccess.html

#### Defined in

actions/redshift-serverless.ts:150

___

### GetNamespace

• **GetNamespace** = ``"redshift-serverless:GetNamespace"``

Grants permission to get information about a namespace in Amazon Redshift Serve
rless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetNamespace.html

#### Defined in

actions/redshift-serverless.ts:157

___

### GetRecoveryPoint

• **GetRecoveryPoint** = ``"redshift-serverless:GetRecoveryPoint"``

Grants permission to get information about a recovery point

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetRecoveryPoint.html

#### Defined in

actions/redshift-serverless.ts:163

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"redshift-serverless:GetResourcePolicy"``

Grants permission to get a resource policy

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetResourcePolicy.html

#### Defined in

actions/redshift-serverless.ts:169

___

### GetScheduledAction

• **GetScheduledAction** = ``"redshift-serverless:GetScheduledAction"``

Grants permission to get information about a specific scheduled action

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetScheduledAction.html

#### Defined in

actions/redshift-serverless.ts:175

___

### GetSnapshot

• **GetSnapshot** = ``"redshift-serverless:GetSnapshot"``

Grants permission to get information about a specific snapshot

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetSnapshot.html

#### Defined in

actions/redshift-serverless.ts:181

___

### GetTableRestoreStatus

• **GetTableRestoreStatus** = ``"redshift-serverless:GetTableRestoreStatus"``

Grants permission to get table restore status about a specific snapshot

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetTableRestoreStatus.html

#### Defined in

actions/redshift-serverless.ts:187

___

### GetUsageLimit

• **GetUsageLimit** = ``"redshift-serverless:GetUsageLimit"``

Grants permission to get information about a usage limit in Amazon Redshift Ser
verless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetUsageLimit.html

#### Defined in

actions/redshift-serverless.ts:194

___

### GetWorkgroup

• **GetWorkgroup** = ``"redshift-serverless:GetWorkgroup"``

Grants permission to get information about a specific workgroup

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetWorkgroup.html

#### Defined in

actions/redshift-serverless.ts:200

___

### ListCustomDomainAssociations

• **ListCustomDomainAssociations** = ``"redshift-serverless:ListCustomDomainAssociations"``

Grants permission to list custom domain associations in Amazon Redshift Serverl
ess

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListCustomDomainAssociations.html

#### Defined in

actions/redshift-serverless.ts:207

___

### ListEndpointAccess

• **ListEndpointAccess** = ``"redshift-serverless:ListEndpointAccess"``

Grants permission to list EndpointAccess objects and relevant information

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListEndpointAccess.html

#### Defined in

actions/redshift-serverless.ts:213

___

### ListNamespaces

• **ListNamespaces** = ``"redshift-serverless:ListNamespaces"``

Grants permission to list namespaces in Amazon Redshift Serverless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListNamespaces.html

#### Defined in

actions/redshift-serverless.ts:219

___

### ListRecoveryPoints

• **ListRecoveryPoints** = ``"redshift-serverless:ListRecoveryPoints"``

Grants permission to list an array of recovery points

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListRecoveryPoints.html

#### Defined in

actions/redshift-serverless.ts:225

___

### ListScheduledActions

• **ListScheduledActions** = ``"redshift-serverless:ListScheduledActions"``

Grants permission to list scheduled actions

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListScheduledActions.html

#### Defined in

actions/redshift-serverless.ts:231

___

### ListSnapshotCopyConfigurations

• **ListSnapshotCopyConfigurations** = ``"redshift-serverless:ListSnapshotCopyConfigurations"``

Grants permission to list SnapshotCopyConfiguration objects and relevant inform
ation

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListSnapshotCopyConfigurations.html

#### Defined in

actions/redshift-serverless.ts:238

___

### ListSnapshots

• **ListSnapshots** = ``"redshift-serverless:ListSnapshots"``

Grants permission to list snapshots

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListSnapshots.html

#### Defined in

actions/redshift-serverless.ts:244

___

### ListTableRestoreStatus

• **ListTableRestoreStatus** = ``"redshift-serverless:ListTableRestoreStatus"``

Grants permission to list table restore status

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListTableRestoreStatus.html

#### Defined in

actions/redshift-serverless.ts:250

___

### ListTagsForResource

• **ListTagsForResource** = ``"redshift-serverless:ListTagsForResource"``

Grants permission to list the tags assigned to a resource

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/redshift-serverless.ts:256

___

### ListUsageLimits

• **ListUsageLimits** = ``"redshift-serverless:ListUsageLimits"``

Grants permission to list all usage limits within Amazon Redshift Serverless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListUsageLimits.html

#### Defined in

actions/redshift-serverless.ts:262

___

### ListWorkgroups

• **ListWorkgroups** = ``"redshift-serverless:ListWorkgroups"``

Grants permission to list workgroups in Amazon Redshift Serverless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListWorkgroups.html

#### Defined in

actions/redshift-serverless.ts:268

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"redshift-serverless:PutResourcePolicy"``

Grants permission to create or update a resource policy

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/redshift-serverless.ts:274

___

### RestoreFromRecoveryPoint

• **RestoreFromRecoveryPoint** = ``"redshift-serverless:RestoreFromRecoveryPoint"``

Grants permission to restore the data from a recovery point

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_RestoreFromRecoveryPoint.html

#### Defined in

actions/redshift-serverless.ts:280

___

### RestoreFromSnapshot

• **RestoreFromSnapshot** = ``"redshift-serverless:RestoreFromSnapshot"``

Grants permission to restore a namespace from a snapshot

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_RestoreFromSnapshot.html

#### Defined in

actions/redshift-serverless.ts:286

___

### RestoreTableFromRecoveryPoint

• **RestoreTableFromRecoveryPoint** = ``"redshift-serverless:RestoreTableFromRecoveryPoint"``

Grants permission to restore a table from a recovery point

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_RestoreTableFromRecoveryPoint.html

#### Defined in

actions/redshift-serverless.ts:292

___

### RestoreTableFromSnapshot

• **RestoreTableFromSnapshot** = ``"redshift-serverless:RestoreTableFromSnapshot"``

Grants permission to restore a table from a snapshot

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_RestoreTableFromSnapshot.html

#### Defined in

actions/redshift-serverless.ts:298

___

### TagResource

• **TagResource** = ``"redshift-serverless:TagResource"``

Grants permission to assign one or more tags to a resource

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_TagResource.html

#### Defined in

actions/redshift-serverless.ts:304

___

### UntagResource

• **UntagResource** = ``"redshift-serverless:UntagResource"``

Grants permission to remove a tag or set of tags from a resource

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UntagResource.html

#### Defined in

actions/redshift-serverless.ts:310

___

### UpdateCustomDomainAssociation

• **UpdateCustomDomainAssociation** = ``"redshift-serverless:UpdateCustomDomainAssociation"``

Grants permission to update a certificate associated with a custom domain

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateCustomDomainAssociation.html

#### Defined in

actions/redshift-serverless.ts:316

___

### UpdateEndpointAccess

• **UpdateEndpointAccess** = ``"redshift-serverless:UpdateEndpointAccess"``

Grants permission to update an Amazon Redshift Serverless managed VPC endpoint

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateEndpointAccess.html

#### Defined in

actions/redshift-serverless.ts:322

___

### UpdateNamespace

• **UpdateNamespace** = ``"redshift-serverless:UpdateNamespace"``

Grants permission to update a namespace with the specified configuration settin
gs

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateNamespace.html

#### Defined in

actions/redshift-serverless.ts:329

___

### UpdateScheduledAction

• **UpdateScheduledAction** = ``"redshift-serverless:UpdateScheduledAction"``

Grants permission to update a scheduled action

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateScheduledAction.html

#### Defined in

actions/redshift-serverless.ts:335

___

### UpdateSnapshot

• **UpdateSnapshot** = ``"redshift-serverless:UpdateSnapshot"``

Grants permission to update a snapshot

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateSnapshot.html

#### Defined in

actions/redshift-serverless.ts:341

___

### UpdateSnapshotCopyConfiguration

• **UpdateSnapshotCopyConfiguration** = ``"redshift-serverless:UpdateSnapshotCopyConfiguration"``

Grants permission to update a snapshot copy configuration for a Amazon Redshift
Serverless namespace

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateSnapshotCopyConfiguration.html

#### Defined in

actions/redshift-serverless.ts:348

___

### UpdateUsageLimit

• **UpdateUsageLimit** = ``"redshift-serverless:UpdateUsageLimit"``

Grants permission to update a usage limit in Amazon Redshift Serverless

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateUsageLimit.html

#### Defined in

actions/redshift-serverless.ts:354

___

### UpdateWorkgroup

• **UpdateWorkgroup** = ``"redshift-serverless:UpdateWorkgroup"``

Grants permission to update an Amazon Redshift Serverless workgroup with the sp
ecified configuration settings

See https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateWorkgroup.html

#### Defined in

actions/redshift-serverless.ts:361
