[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsHoneycodeActions

# Enumeration: AwsHoneycodeActions

All IAM policy actions for Amazon Honeycode (HONEYCODE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhoneycode.html

2024-02-12T09:57:36.602Z

## Table of contents

### Enumeration Members

- [ApproveTeamAssociation](AwsHoneycodeActions.md#approveteamassociation)
- [BatchCreateTableRows](AwsHoneycodeActions.md#batchcreatetablerows)
- [BatchDeleteTableRows](AwsHoneycodeActions.md#batchdeletetablerows)
- [BatchUpdateTableRows](AwsHoneycodeActions.md#batchupdatetablerows)
- [BatchUpsertTableRows](AwsHoneycodeActions.md#batchupserttablerows)
- [CreateTeam](AwsHoneycodeActions.md#createteam)
- [CreateTenant](AwsHoneycodeActions.md#createtenant)
- [DeleteDomains](AwsHoneycodeActions.md#deletedomains)
- [DeregisterGroups](AwsHoneycodeActions.md#deregistergroups)
- [DescribeTableDataImportJob](AwsHoneycodeActions.md#describetabledataimportjob)
- [DescribeTeam](AwsHoneycodeActions.md#describeteam)
- [GetScreenData](AwsHoneycodeActions.md#getscreendata)
- [InvokeScreenAutomation](AwsHoneycodeActions.md#invokescreenautomation)
- [ListDomains](AwsHoneycodeActions.md#listdomains)
- [ListGroups](AwsHoneycodeActions.md#listgroups)
- [ListTableColumns](AwsHoneycodeActions.md#listtablecolumns)
- [ListTableRows](AwsHoneycodeActions.md#listtablerows)
- [ListTables](AwsHoneycodeActions.md#listtables)
- [ListTagsForResource](AwsHoneycodeActions.md#listtagsforresource)
- [ListTeamAssociations](AwsHoneycodeActions.md#listteamassociations)
- [ListTenants](AwsHoneycodeActions.md#listtenants)
- [QueryTableRows](AwsHoneycodeActions.md#querytablerows)
- [RegisterDomainForVerification](AwsHoneycodeActions.md#registerdomainforverification)
- [RegisterGroups](AwsHoneycodeActions.md#registergroups)
- [RejectTeamAssociation](AwsHoneycodeActions.md#rejectteamassociation)
- [RestartDomainVerification](AwsHoneycodeActions.md#restartdomainverification)
- [StartTableDataImportJob](AwsHoneycodeActions.md#starttabledataimportjob)
- [TagResource](AwsHoneycodeActions.md#tagresource)
- [UntagResource](AwsHoneycodeActions.md#untagresource)
- [UpdateTeam](AwsHoneycodeActions.md#updateteam)

## Enumeration Members

### ApproveTeamAssociation

• **ApproveTeamAssociation** = ``"honeycode:ApproveTeamAssociation"``

Grants permission to approve a team association request for your AWS Account

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#approve-team-association

#### Defined in

actions/honeycode.ts:17

___

### BatchCreateTableRows

• **BatchCreateTableRows** = ``"honeycode:BatchCreateTableRows"``

Grants permission to create new rows in a table

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchCreateTableRows.html

#### Defined in

actions/honeycode.ts:23

___

### BatchDeleteTableRows

• **BatchDeleteTableRows** = ``"honeycode:BatchDeleteTableRows"``

Grants permission to delete rows from a table

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchDeleteTableRows.html

#### Defined in

actions/honeycode.ts:29

___

### BatchUpdateTableRows

• **BatchUpdateTableRows** = ``"honeycode:BatchUpdateTableRows"``

Grants permission to update rows in a table

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchUpdateTableRows.html

#### Defined in

actions/honeycode.ts:35

___

### BatchUpsertTableRows

• **BatchUpsertTableRows** = ``"honeycode:BatchUpsertTableRows"``

Grants permission to upsert rows in a table

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchUpsertTableRows.html

#### Defined in

actions/honeycode.ts:41

___

### CreateTeam

• **CreateTeam** = ``"honeycode:CreateTeam"``

Grants permission to create a new Amazon Honeycode team for your AWS Account

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/team.html#create-team

#### Defined in

actions/honeycode.ts:47

___

### CreateTenant

• **CreateTenant** = ``"honeycode:CreateTenant"``

Grants permission to create a new tenant within Amazon Honeycode for your AWS A
ccount

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/tenant.html#create-tenant

#### Defined in

actions/honeycode.ts:54

___

### DeleteDomains

• **DeleteDomains** = ``"honeycode:DeleteDomains"``

Grants permission to delete Amazon Honeycode domains for your AWS Account

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#delete-domains

#### Defined in

actions/honeycode.ts:60

___

### DeregisterGroups

• **DeregisterGroups** = ``"honeycode:DeregisterGroups"``

Grants permission to remove groups from an Amazon Honeycode team for your AWS A
ccount

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/group.html#deregister-groups

#### Defined in

actions/honeycode.ts:67

___

### DescribeTableDataImportJob

• **DescribeTableDataImportJob** = ``"honeycode:DescribeTableDataImportJob"``

Grants permission to get details about a table data import job

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_DescribeTableDataImportJob.html

#### Defined in

actions/honeycode.ts:73

___

### DescribeTeam

• **DescribeTeam** = ``"honeycode:DescribeTeam"``

Grants permission to get details about Amazon Honeycode teams for your AWS Acco
unt

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/team.html#describe-team

#### Defined in

actions/honeycode.ts:80

___

### GetScreenData

• **GetScreenData** = ``"honeycode:GetScreenData"``

Grants permission to load the data from a screen

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_GetScreenData.html

#### Defined in

actions/honeycode.ts:86

___

### InvokeScreenAutomation

• **InvokeScreenAutomation** = ``"honeycode:InvokeScreenAutomation"``

Grants permission to invoke a screen automation

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_InvokeScreenAutomation.html

#### Defined in

actions/honeycode.ts:92

___

### ListDomains

• **ListDomains** = ``"honeycode:ListDomains"``

Grants permission to list all Amazon Honeycode domains and their verification s
tatus for your AWS Account

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#list-domains

#### Defined in

actions/honeycode.ts:99

___

### ListGroups

• **ListGroups** = ``"honeycode:ListGroups"``

Grants permission to list all groups in an Amazon Honeycode team for your AWS A
ccount

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/group.html#list-groups

#### Defined in

actions/honeycode.ts:106

___

### ListTableColumns

• **ListTableColumns** = ``"honeycode:ListTableColumns"``

Grants permission to list the columns in a table

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTableColumns.html

#### Defined in

actions/honeycode.ts:112

___

### ListTableRows

• **ListTableRows** = ``"honeycode:ListTableRows"``

Grants permission to list the rows in a table

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTableRows.html

#### Defined in

actions/honeycode.ts:118

___

### ListTables

• **ListTables** = ``"honeycode:ListTables"``

Grants permission to list the tables in a workbook

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTables.html

#### Defined in

actions/honeycode.ts:124

___

### ListTagsForResource

• **ListTagsForResource** = ``"honeycode:ListTagsForResource"``

Grants permission to list all tags for a resource

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTagsForResource.html

#### Defined in

actions/honeycode.ts:130

___

### ListTeamAssociations

• **ListTeamAssociations** = ``"honeycode:ListTeamAssociations"``

Grants permission to list all pending and approved team associations with your
AWS Account

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#list-team-associations

#### Defined in

actions/honeycode.ts:137

___

### ListTenants

• **ListTenants** = ``"honeycode:ListTenants"``

Grants permission to list all tenants of Amazon Honeycode for your AWS Account

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/tenant.html#list-tenants

#### Defined in

actions/honeycode.ts:143

___

### QueryTableRows

• **QueryTableRows** = ``"honeycode:QueryTableRows"``

Grants permission to query the rows of a table using a filter

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_QueryTableRows.html

#### Defined in

actions/honeycode.ts:149

___

### RegisterDomainForVerification

• **RegisterDomainForVerification** = ``"honeycode:RegisterDomainForVerification"``

Grants permission to request verification of the Amazon Honeycode domains for y
our AWS Account

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#register-domain-for-verification

#### Defined in

actions/honeycode.ts:156

___

### RegisterGroups

• **RegisterGroups** = ``"honeycode:RegisterGroups"``

Grants permission to add groups to an Amazon Honeycode team for your AWS Accoun
t

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/group.html#register-groups

#### Defined in

actions/honeycode.ts:163

___

### RejectTeamAssociation

• **RejectTeamAssociation** = ``"honeycode:RejectTeamAssociation"``

Grants permission to reject a team association request for your AWS Account

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#reject-team-association

#### Defined in

actions/honeycode.ts:169

___

### RestartDomainVerification

• **RestartDomainVerification** = ``"honeycode:RestartDomainVerification"``

Grants permission to restart verification of the Amazon Honeycode domains for y
our AWS Account

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#restart-domain-verification

#### Defined in

actions/honeycode.ts:176

___

### StartTableDataImportJob

• **StartTableDataImportJob** = ``"honeycode:StartTableDataImportJob"``

Grants permission to start a table data import job

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_StartTableDataImportJob.html

#### Defined in

actions/honeycode.ts:182

___

### TagResource

• **TagResource** = ``"honeycode:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_TagResource.html

#### Defined in

actions/honeycode.ts:188

___

### UntagResource

• **UntagResource** = ``"honeycode:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_UntagResource.html

#### Defined in

actions/honeycode.ts:194

___

### UpdateTeam

• **UpdateTeam** = ``"honeycode:UpdateTeam"``

Grants permission to update an Amazon Honeycode team for your AWS Account

See https://docs.aws.amazon.com/honeycode/latest/UserGuide/team.html#update-team

#### Defined in

actions/honeycode.ts:200
