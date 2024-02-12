[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsTransferActions

# Enumeration: AwsTransferActions

All IAM policy actions for AWS Transfer Family (TRANSFER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransferfamily.html

2024-02-12T09:59:32.733Z

## Table of contents

### Enumeration Members

- [CreateAccess](AwsTransferActions.md#createaccess)
- [CreateAgreement](AwsTransferActions.md#createagreement)
- [CreateConnector](AwsTransferActions.md#createconnector)
- [CreateProfile](AwsTransferActions.md#createprofile)
- [CreateServer](AwsTransferActions.md#createserver)
- [CreateUser](AwsTransferActions.md#createuser)
- [CreateWorkflow](AwsTransferActions.md#createworkflow)
- [DeleteAccess](AwsTransferActions.md#deleteaccess)
- [DeleteAgreement](AwsTransferActions.md#deleteagreement)
- [DeleteCertificate](AwsTransferActions.md#deletecertificate)
- [DeleteConnector](AwsTransferActions.md#deleteconnector)
- [DeleteHostKey](AwsTransferActions.md#deletehostkey)
- [DeleteProfile](AwsTransferActions.md#deleteprofile)
- [DeleteServer](AwsTransferActions.md#deleteserver)
- [DeleteSshPublicKey](AwsTransferActions.md#deletesshpublickey)
- [DeleteUser](AwsTransferActions.md#deleteuser)
- [DeleteWorkflow](AwsTransferActions.md#deleteworkflow)
- [DescribeAccess](AwsTransferActions.md#describeaccess)
- [DescribeAgreement](AwsTransferActions.md#describeagreement)
- [DescribeCertificate](AwsTransferActions.md#describecertificate)
- [DescribeConnector](AwsTransferActions.md#describeconnector)
- [DescribeExecution](AwsTransferActions.md#describeexecution)
- [DescribeHostKey](AwsTransferActions.md#describehostkey)
- [DescribeProfile](AwsTransferActions.md#describeprofile)
- [DescribeSecurityPolicy](AwsTransferActions.md#describesecuritypolicy)
- [DescribeServer](AwsTransferActions.md#describeserver)
- [DescribeUser](AwsTransferActions.md#describeuser)
- [DescribeWorkflow](AwsTransferActions.md#describeworkflow)
- [ImportCertificate](AwsTransferActions.md#importcertificate)
- [ImportHostKey](AwsTransferActions.md#importhostkey)
- [ImportSshPublicKey](AwsTransferActions.md#importsshpublickey)
- [ListAccesses](AwsTransferActions.md#listaccesses)
- [ListAgreements](AwsTransferActions.md#listagreements)
- [ListCertificates](AwsTransferActions.md#listcertificates)
- [ListConnectors](AwsTransferActions.md#listconnectors)
- [ListExecutions](AwsTransferActions.md#listexecutions)
- [ListHostKeys](AwsTransferActions.md#listhostkeys)
- [ListProfiles](AwsTransferActions.md#listprofiles)
- [ListSecurityPolicies](AwsTransferActions.md#listsecuritypolicies)
- [ListServers](AwsTransferActions.md#listservers)
- [ListTagsForResource](AwsTransferActions.md#listtagsforresource)
- [ListUsers](AwsTransferActions.md#listusers)
- [ListWorkflows](AwsTransferActions.md#listworkflows)
- [SendWorkflowStepState](AwsTransferActions.md#sendworkflowstepstate)
- [StartFileTransfer](AwsTransferActions.md#startfiletransfer)
- [StartServer](AwsTransferActions.md#startserver)
- [StopServer](AwsTransferActions.md#stopserver)
- [TagResource](AwsTransferActions.md#tagresource)
- [TestConnection](AwsTransferActions.md#testconnection)
- [TestIdentityProvider](AwsTransferActions.md#testidentityprovider)
- [UntagResource](AwsTransferActions.md#untagresource)
- [UpdateAccess](AwsTransferActions.md#updateaccess)
- [UpdateAgreement](AwsTransferActions.md#updateagreement)
- [UpdateCertificate](AwsTransferActions.md#updatecertificate)
- [UpdateConnector](AwsTransferActions.md#updateconnector)
- [UpdateHostKey](AwsTransferActions.md#updatehostkey)
- [UpdateProfile](AwsTransferActions.md#updateprofile)
- [UpdateServer](AwsTransferActions.md#updateserver)
- [UpdateUser](AwsTransferActions.md#updateuser)

## Enumeration Members

### CreateAccess

• **CreateAccess** = ``"transfer:CreateAccess"``

Grants permission to add an access associated with a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateAccess.html

#### Defined in

actions/transfer.ts:17

___

### CreateAgreement

• **CreateAgreement** = ``"transfer:CreateAgreement"``

Grants permission to add an agreement associated with a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateAgreement.html

#### Defined in

actions/transfer.ts:23

___

### CreateConnector

• **CreateConnector** = ``"transfer:CreateConnector"``

Grants permission to create a connector

See https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateConnector.html

#### Defined in

actions/transfer.ts:29

___

### CreateProfile

• **CreateProfile** = ``"transfer:CreateProfile"``

Grants permission to create a profile

See https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateProfile.html

#### Defined in

actions/transfer.ts:35

___

### CreateServer

• **CreateServer** = ``"transfer:CreateServer"``

Grants permission to create a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateServer.html

#### Defined in

actions/transfer.ts:41

___

### CreateUser

• **CreateUser** = ``"transfer:CreateUser"``

Grants permission to add a user associated with a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateUser.html

#### Defined in

actions/transfer.ts:47

___

### CreateWorkflow

• **CreateWorkflow** = ``"transfer:CreateWorkflow"``

Grants permission to create a workflow

See https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateWorkflow.html

#### Defined in

actions/transfer.ts:53

___

### DeleteAccess

• **DeleteAccess** = ``"transfer:DeleteAccess"``

Grants permission to delete access

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteAccess.html

#### Defined in

actions/transfer.ts:59

___

### DeleteAgreement

• **DeleteAgreement** = ``"transfer:DeleteAgreement"``

Grants permission to delete agreement

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteAgreement.html

#### Defined in

actions/transfer.ts:65

___

### DeleteCertificate

• **DeleteCertificate** = ``"transfer:DeleteCertificate"``

Grants permission to delete certificate

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteCertificate.html

#### Defined in

actions/transfer.ts:71

___

### DeleteConnector

• **DeleteConnector** = ``"transfer:DeleteConnector"``

Grants permission to delete connector

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteConnector.html

#### Defined in

actions/transfer.ts:77

___

### DeleteHostKey

• **DeleteHostKey** = ``"transfer:DeleteHostKey"``

Grants permission to delete a host key associated with a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteHostKey.html

#### Defined in

actions/transfer.ts:83

___

### DeleteProfile

• **DeleteProfile** = ``"transfer:DeleteProfile"``

Grants permission to delete profile

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteProfile.html

#### Defined in

actions/transfer.ts:89

___

### DeleteServer

• **DeleteServer** = ``"transfer:DeleteServer"``

Grants permission to delete a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteServer.html

#### Defined in

actions/transfer.ts:95

___

### DeleteSshPublicKey

• **DeleteSshPublicKey** = ``"transfer:DeleteSshPublicKey"``

Grants permission to delete an SSH public key from a user

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteSshPublicKey.html

#### Defined in

actions/transfer.ts:101

___

### DeleteUser

• **DeleteUser** = ``"transfer:DeleteUser"``

Grants permission to delete a user associated with a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteUser.html

#### Defined in

actions/transfer.ts:107

___

### DeleteWorkflow

• **DeleteWorkflow** = ``"transfer:DeleteWorkflow"``

Grants permission to delete a workflow

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteWorkflow.html

#### Defined in

actions/transfer.ts:113

___

### DescribeAccess

• **DescribeAccess** = ``"transfer:DescribeAccess"``

Grants permission to describe an access assigned to a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeAccess.html

#### Defined in

actions/transfer.ts:119

___

### DescribeAgreement

• **DescribeAgreement** = ``"transfer:DescribeAgreement"``

Grants permission to describe an agreement assigned to a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeAgreement.html

#### Defined in

actions/transfer.ts:125

___

### DescribeCertificate

• **DescribeCertificate** = ``"transfer:DescribeCertificate"``

Grants permission to describe a certificate

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeCertificate.html

#### Defined in

actions/transfer.ts:131

___

### DescribeConnector

• **DescribeConnector** = ``"transfer:DescribeConnector"``

Grants permission to describe a connector

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeConnector.html

#### Defined in

actions/transfer.ts:137

___

### DescribeExecution

• **DescribeExecution** = ``"transfer:DescribeExecution"``

Grants permission to describe an execution associated with a workflow

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeExecution.html

#### Defined in

actions/transfer.ts:143

___

### DescribeHostKey

• **DescribeHostKey** = ``"transfer:DescribeHostKey"``

Grants permission to describe a host key associated with a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeHostKey.html

#### Defined in

actions/transfer.ts:149

___

### DescribeProfile

• **DescribeProfile** = ``"transfer:DescribeProfile"``

Grants permission to describe a profile

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeProfile.html

#### Defined in

actions/transfer.ts:155

___

### DescribeSecurityPolicy

• **DescribeSecurityPolicy** = ``"transfer:DescribeSecurityPolicy"``

Grants permission to describe a security policy

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeSecurityPolicy.html

#### Defined in

actions/transfer.ts:161

___

### DescribeServer

• **DescribeServer** = ``"transfer:DescribeServer"``

Grants permission to describe a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeServer.html

#### Defined in

actions/transfer.ts:167

___

### DescribeUser

• **DescribeUser** = ``"transfer:DescribeUser"``

Grants permission to describe a user associated with a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeUser.html

#### Defined in

actions/transfer.ts:173

___

### DescribeWorkflow

• **DescribeWorkflow** = ``"transfer:DescribeWorkflow"``

Grants permission to describe a workflow

See https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeWorkflow.html

#### Defined in

actions/transfer.ts:179

___

### ImportCertificate

• **ImportCertificate** = ``"transfer:ImportCertificate"``

Grants permission to add a certificate

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ImportCertificate.html

#### Defined in

actions/transfer.ts:185

___

### ImportHostKey

• **ImportHostKey** = ``"transfer:ImportHostKey"``

Grants permission to add a host key to a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ImportHostKey.html

#### Defined in

actions/transfer.ts:191

___

### ImportSshPublicKey

• **ImportSshPublicKey** = ``"transfer:ImportSshPublicKey"``

Grants permission to add an SSH public key to a user

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ImportSshPublicKey.html

#### Defined in

actions/transfer.ts:197

___

### ListAccesses

• **ListAccesses** = ``"transfer:ListAccesses"``

Grants permission to list accesses

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListAccesses.html

#### Defined in

actions/transfer.ts:203

___

### ListAgreements

• **ListAgreements** = ``"transfer:ListAgreements"``

Grants permission to list agreements

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListAgreements.html

#### Defined in

actions/transfer.ts:209

___

### ListCertificates

• **ListCertificates** = ``"transfer:ListCertificates"``

Grants permission to list certificates

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListCertificates.html

#### Defined in

actions/transfer.ts:215

___

### ListConnectors

• **ListConnectors** = ``"transfer:ListConnectors"``

Grants permission to list connectors

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListConnectors.html

#### Defined in

actions/transfer.ts:221

___

### ListExecutions

• **ListExecutions** = ``"transfer:ListExecutions"``

Grants permission to list executions associated with a workflow

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListExecutions.html

#### Defined in

actions/transfer.ts:227

___

### ListHostKeys

• **ListHostKeys** = ``"transfer:ListHostKeys"``

Grants permission to list host keys associated with a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListHostKeys.html

#### Defined in

actions/transfer.ts:233

___

### ListProfiles

• **ListProfiles** = ``"transfer:ListProfiles"``

Grants permission to list profiles

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListProfiles.html

#### Defined in

actions/transfer.ts:239

___

### ListSecurityPolicies

• **ListSecurityPolicies** = ``"transfer:ListSecurityPolicies"``

Grants permission to list security policies

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListSecurityPolicies.html

#### Defined in

actions/transfer.ts:245

___

### ListServers

• **ListServers** = ``"transfer:ListServers"``

Grants permission to list servers

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListServers.html

#### Defined in

actions/transfer.ts:251

___

### ListTagsForResource

• **ListTagsForResource** = ``"transfer:ListTagsForResource"``

Grants permission to list tags for an AWS Transfer Family resource

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListTagsForResource.html

#### Defined in

actions/transfer.ts:257

___

### ListUsers

• **ListUsers** = ``"transfer:ListUsers"``

Grants permission to list users associated with a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListUsers.html

#### Defined in

actions/transfer.ts:263

___

### ListWorkflows

• **ListWorkflows** = ``"transfer:ListWorkflows"``

Grants permission to list workflows

See https://docs.aws.amazon.com/transfer/latest/userguide/API_ListWorkflows.html

#### Defined in

actions/transfer.ts:269

___

### SendWorkflowStepState

• **SendWorkflowStepState** = ``"transfer:SendWorkflowStepState"``

Grants permission to send a callback for asynchronous custom steps

See https://docs.aws.amazon.com/transfer/latest/userguide/API_SendWorkflowStepState.html

#### Defined in

actions/transfer.ts:275

___

### StartFileTransfer

• **StartFileTransfer** = ``"transfer:StartFileTransfer"``

Grants permission to initiate a connector file transfer

See https://docs.aws.amazon.com/transfer/latest/userguide/API_StartFileTransfer.html

#### Defined in

actions/transfer.ts:281

___

### StartServer

• **StartServer** = ``"transfer:StartServer"``

Grants permission to start a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_StartServer.html

#### Defined in

actions/transfer.ts:287

___

### StopServer

• **StopServer** = ``"transfer:StopServer"``

Grants permission to stop a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_StopServer.html

#### Defined in

actions/transfer.ts:293

___

### TagResource

• **TagResource** = ``"transfer:TagResource"``

Grants permission to tag an AWS Transfer Family resource

See https://docs.aws.amazon.com/transfer/latest/userguide/API_TagResource.html

#### Defined in

actions/transfer.ts:299

___

### TestConnection

• **TestConnection** = ``"transfer:TestConnection"``

Grants permission to test a connector's connection to remote server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_TestConnection.html

#### Defined in

actions/transfer.ts:305

___

### TestIdentityProvider

• **TestIdentityProvider** = ``"transfer:TestIdentityProvider"``

Grants permission to test a server's custom identity provider

See https://docs.aws.amazon.com/transfer/latest/userguide/API_TestIdentityProvider.html

#### Defined in

actions/transfer.ts:311

___

### UntagResource

• **UntagResource** = ``"transfer:UntagResource"``

Grants permission to untag an AWS Transfer Family resource

See https://docs.aws.amazon.com/transfer/latest/userguide/API_UntagResource.html

#### Defined in

actions/transfer.ts:317

___

### UpdateAccess

• **UpdateAccess** = ``"transfer:UpdateAccess"``

Grants permission to update access

See https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateAccess.html

#### Defined in

actions/transfer.ts:323

___

### UpdateAgreement

• **UpdateAgreement** = ``"transfer:UpdateAgreement"``

Grants permission to update an agreement

See https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateAgreement.html

#### Defined in

actions/transfer.ts:329

___

### UpdateCertificate

• **UpdateCertificate** = ``"transfer:UpdateCertificate"``

Grants permission to update a certificate

See https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateCertificate.html

#### Defined in

actions/transfer.ts:335

___

### UpdateConnector

• **UpdateConnector** = ``"transfer:UpdateConnector"``

Grants permission to update a connector

See https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateConnector.html

#### Defined in

actions/transfer.ts:341

___

### UpdateHostKey

• **UpdateHostKey** = ``"transfer:UpdateHostKey"``

Grants permission to update a host key

See https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateHostKey.html

#### Defined in

actions/transfer.ts:347

___

### UpdateProfile

• **UpdateProfile** = ``"transfer:UpdateProfile"``

Grants permission to update a profile

See https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateProfile.html

#### Defined in

actions/transfer.ts:353

___

### UpdateServer

• **UpdateServer** = ``"transfer:UpdateServer"``

Grants permission to update the configuration of a server

See https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html

#### Defined in

actions/transfer.ts:359

___

### UpdateUser

• **UpdateUser** = ``"transfer:UpdateUser"``

Grants permission to update the configuration of a user

See https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateUser.html

#### Defined in

actions/transfer.ts:365
