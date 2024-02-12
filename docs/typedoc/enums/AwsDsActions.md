[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDsActions

# Enumeration: AwsDsActions

All IAM policy actions for AWS Directory Service (DS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html

2024-02-12T09:56:59.781Z

## Table of contents

### Enumeration Members

- [AcceptSharedDirectory](AwsDsActions.md#acceptshareddirectory)
- [AddIpRoutes](AwsDsActions.md#addiproutes)
- [AddRegion](AwsDsActions.md#addregion)
- [AddTagsToResource](AwsDsActions.md#addtagstoresource)
- [AuthorizeApplication](AwsDsActions.md#authorizeapplication)
- [CancelSchemaExtension](AwsDsActions.md#cancelschemaextension)
- [CheckAlias](AwsDsActions.md#checkalias)
- [ConnectDirectory](AwsDsActions.md#connectdirectory)
- [CreateAlias](AwsDsActions.md#createalias)
- [CreateComputer](AwsDsActions.md#createcomputer)
- [CreateConditionalForwarder](AwsDsActions.md#createconditionalforwarder)
- [CreateDirectory](AwsDsActions.md#createdirectory)
- [CreateIdentityPoolDirectory](AwsDsActions.md#createidentitypooldirectory)
- [CreateLogSubscription](AwsDsActions.md#createlogsubscription)
- [CreateMicrosoftAD](AwsDsActions.md#createmicrosoftad)
- [CreateSnapshot](AwsDsActions.md#createsnapshot)
- [CreateTrust](AwsDsActions.md#createtrust)
- [DeleteConditionalForwarder](AwsDsActions.md#deleteconditionalforwarder)
- [DeleteDirectory](AwsDsActions.md#deletedirectory)
- [DeleteLogSubscription](AwsDsActions.md#deletelogsubscription)
- [DeleteSnapshot](AwsDsActions.md#deletesnapshot)
- [DeleteTrust](AwsDsActions.md#deletetrust)
- [DeregisterCertificate](AwsDsActions.md#deregistercertificate)
- [DeregisterEventTopic](AwsDsActions.md#deregistereventtopic)
- [DescribeCertificate](AwsDsActions.md#describecertificate)
- [DescribeClientAuthenticationSettings](AwsDsActions.md#describeclientauthenticationsettings)
- [DescribeConditionalForwarders](AwsDsActions.md#describeconditionalforwarders)
- [DescribeDirectories](AwsDsActions.md#describedirectories)
- [DescribeDomainControllers](AwsDsActions.md#describedomaincontrollers)
- [DescribeEventTopics](AwsDsActions.md#describeeventtopics)
- [DescribeLDAPSSettings](AwsDsActions.md#describeldapssettings)
- [DescribeRegions](AwsDsActions.md#describeregions)
- [DescribeSettings](AwsDsActions.md#describesettings)
- [DescribeSharedDirectories](AwsDsActions.md#describeshareddirectories)
- [DescribeSnapshots](AwsDsActions.md#describesnapshots)
- [DescribeTrusts](AwsDsActions.md#describetrusts)
- [DescribeUpdateDirectory](AwsDsActions.md#describeupdatedirectory)
- [DisableClientAuthentication](AwsDsActions.md#disableclientauthentication)
- [DisableLDAPS](AwsDsActions.md#disableldaps)
- [DisableRadius](AwsDsActions.md#disableradius)
- [DisableRoleAccess](AwsDsActions.md#disableroleaccess)
- [DisableSso](AwsDsActions.md#disablesso)
- [EnableClientAuthentication](AwsDsActions.md#enableclientauthentication)
- [EnableLDAPS](AwsDsActions.md#enableldaps)
- [EnableRadius](AwsDsActions.md#enableradius)
- [EnableRoleAccess](AwsDsActions.md#enableroleaccess)
- [EnableSso](AwsDsActions.md#enablesso)
- [GetAuthorizedApplicationDetails](AwsDsActions.md#getauthorizedapplicationdetails)
- [GetDirectoryLimits](AwsDsActions.md#getdirectorylimits)
- [GetSnapshotLimits](AwsDsActions.md#getsnapshotlimits)
- [ListAuthorizedApplications](AwsDsActions.md#listauthorizedapplications)
- [ListCertificates](AwsDsActions.md#listcertificates)
- [ListIpRoutes](AwsDsActions.md#listiproutes)
- [ListLogSubscriptions](AwsDsActions.md#listlogsubscriptions)
- [ListSchemaExtensions](AwsDsActions.md#listschemaextensions)
- [ListTagsForResource](AwsDsActions.md#listtagsforresource)
- [RegisterCertificate](AwsDsActions.md#registercertificate)
- [RegisterEventTopic](AwsDsActions.md#registereventtopic)
- [RejectSharedDirectory](AwsDsActions.md#rejectshareddirectory)
- [RemoveIpRoutes](AwsDsActions.md#removeiproutes)
- [RemoveRegion](AwsDsActions.md#removeregion)
- [RemoveTagsFromResource](AwsDsActions.md#removetagsfromresource)
- [ResetUserPassword](AwsDsActions.md#resetuserpassword)
- [RestoreFromSnapshot](AwsDsActions.md#restorefromsnapshot)
- [ShareDirectory](AwsDsActions.md#sharedirectory)
- [StartSchemaExtension](AwsDsActions.md#startschemaextension)
- [UnauthorizeApplication](AwsDsActions.md#unauthorizeapplication)
- [UnshareDirectory](AwsDsActions.md#unsharedirectory)
- [UpdateAuthorizedApplication](AwsDsActions.md#updateauthorizedapplication)
- [UpdateConditionalForwarder](AwsDsActions.md#updateconditionalforwarder)
- [UpdateDirectory](AwsDsActions.md#updatedirectory)
- [UpdateDirectorySetup](AwsDsActions.md#updatedirectorysetup)
- [UpdateNumberOfDomainControllers](AwsDsActions.md#updatenumberofdomaincontrollers)
- [UpdateRadius](AwsDsActions.md#updateradius)
- [UpdateSettings](AwsDsActions.md#updatesettings)
- [UpdateTrust](AwsDsActions.md#updatetrust)
- [VerifyTrust](AwsDsActions.md#verifytrust)

## Enumeration Members

### AcceptSharedDirectory

• **AcceptSharedDirectory** = ``"ds:AcceptSharedDirectory"``

Grants permission to accept a directory sharing request that was sent from the
directory owner account

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AcceptSharedDirectory.html

#### Defined in

actions/ds.ts:18

___

### AddIpRoutes

• **AddIpRoutes** = ``"ds:AddIpRoutes"``

Grants permission to add a CIDR address block to correctly route traffic to and
from your Microsoft AD on Amazon Web Services

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddIpRoutes.html

#### Defined in

actions/ds.ts:25

___

### AddRegion

• **AddRegion** = ``"ds:AddRegion"``

Grants permission to add two domain controllers in the specified Region for the
specified directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddRegion.html

#### Defined in

actions/ds.ts:32

___

### AddTagsToResource

• **AddTagsToResource** = ``"ds:AddTagsToResource"``

Grants permission to add or overwrite one or more tags for the specified Amazon
Directory Services directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddTagsToResource.html

#### Defined in

actions/ds.ts:39

___

### AuthorizeApplication

• **AuthorizeApplication** = ``"ds:AuthorizeApplication"``

Grants permission to authorize an application for your AWS Directory

See https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html

#### Defined in

actions/ds.ts:45

___

### CancelSchemaExtension

• **CancelSchemaExtension** = ``"ds:CancelSchemaExtension"``

Grants permission to cancel an in-progress schema extension to a Microsoft AD d
irectory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CancelSchemaExtension.html

#### Defined in

actions/ds.ts:52

___

### CheckAlias

• **CheckAlias** = ``"ds:CheckAlias"``

Grants permission to verify that the alias is available for use

See https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html

#### Defined in

actions/ds.ts:58

___

### ConnectDirectory

• **ConnectDirectory** = ``"ds:ConnectDirectory"``

Grants permission to create an AD Connector to connect to an on-premises direct
ory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ConnectDirectory.html

#### Defined in

actions/ds.ts:65

___

### CreateAlias

• **CreateAlias** = ``"ds:CreateAlias"``

Grants permission to create an alias for a directory and assigns the alias to t
he directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateAlias.html

#### Defined in

actions/ds.ts:72

___

### CreateComputer

• **CreateComputer** = ``"ds:CreateComputer"``

Grants permission to create a computer account in the specified directory, and
joins the computer to the directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateComputer.html

#### Defined in

actions/ds.ts:79

___

### CreateConditionalForwarder

• **CreateConditionalForwarder** = ``"ds:CreateConditionalForwarder"``

Grants permission to create a conditional forwarder associated with your AWS di
rectory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateConditionalForwarder.html

#### Defined in

actions/ds.ts:86

___

### CreateDirectory

• **CreateDirectory** = ``"ds:CreateDirectory"``

Grants permission to create a Simple AD directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html

#### Defined in

actions/ds.ts:92

___

### CreateIdentityPoolDirectory

• **CreateIdentityPoolDirectory** = ``"ds:CreateIdentityPoolDirectory"``

Grants permission to create an IdentityPool Directory in the AWS cloud

See https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html

#### Defined in

actions/ds.ts:98

___

### CreateLogSubscription

• **CreateLogSubscription** = ``"ds:CreateLogSubscription"``

Grants permission to create a subscription to forward real time Directory Servi
ce domain controller security logs to the specified CloudWatch log group in you
r AWS account

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateLogSubscription.html

#### Defined in

actions/ds.ts:106

___

### CreateMicrosoftAD

• **CreateMicrosoftAD** = ``"ds:CreateMicrosoftAD"``

Grants permission to create a Microsoft AD in the AWS cloud

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html

#### Defined in

actions/ds.ts:112

___

### CreateSnapshot

• **CreateSnapshot** = ``"ds:CreateSnapshot"``

Grants permission to create a snapshot of a Simple AD or Microsoft AD directory
in the AWS cloud

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateSnapshot.html

#### Defined in

actions/ds.ts:119

___

### CreateTrust

• **CreateTrust** = ``"ds:CreateTrust"``

Grants permission to initiate the creation of the AWS side of a trust relations
hip between a Microsoft AD in the AWS cloud and an external domain

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateTrust.html

#### Defined in

actions/ds.ts:126

___

### DeleteConditionalForwarder

• **DeleteConditionalForwarder** = ``"ds:DeleteConditionalForwarder"``

Grants permission to delete a conditional forwarder that has been set up for yo
ur AWS directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteConditionalForwarder.html

#### Defined in

actions/ds.ts:133

___

### DeleteDirectory

• **DeleteDirectory** = ``"ds:DeleteDirectory"``

Grants permission to delete an AWS Directory Service directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteDirectory.html

#### Defined in

actions/ds.ts:139

___

### DeleteLogSubscription

• **DeleteLogSubscription** = ``"ds:DeleteLogSubscription"``

Grants permission to delete the specified log subscription

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteLogSubscription.html

#### Defined in

actions/ds.ts:145

___

### DeleteSnapshot

• **DeleteSnapshot** = ``"ds:DeleteSnapshot"``

Grants permission to delete a directory snapshot

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteSnapshot.html

#### Defined in

actions/ds.ts:151

___

### DeleteTrust

• **DeleteTrust** = ``"ds:DeleteTrust"``

Grants permission to delete an existing trust relationship between your Microso
ft AD in the AWS cloud and an external domain

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteTrust.html

#### Defined in

actions/ds.ts:158

___

### DeregisterCertificate

• **DeregisterCertificate** = ``"ds:DeregisterCertificate"``

Grants permission to delete from the system the certificate that was registered
for a secured LDAP connection

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterCertificate.html

#### Defined in

actions/ds.ts:165

___

### DeregisterEventTopic

• **DeregisterEventTopic** = ``"ds:DeregisterEventTopic"``

Grants permission to remove the specified directory as a publisher to the speci
fied SNS topic

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterEventTopic.html

#### Defined in

actions/ds.ts:172

___

### DescribeCertificate

• **DescribeCertificate** = ``"ds:DescribeCertificate"``

Grants permission to display information about the certificate registered for a
secured LDAP connection

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeCertificate.html

#### Defined in

actions/ds.ts:179

___

### DescribeClientAuthenticationSettings

• **DescribeClientAuthenticationSettings** = ``"ds:DescribeClientAuthenticationSettings"``

Grants permission to retrieve information about the type of client authenticati
on for the specified directory, if the type is specified. If no type is specifi
ed, information about all client authentication types that are supported for th
e specified directory is retrieved. Currently, only SmartCard is supported

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeClientAuthenticationSettings.html

#### Defined in

actions/ds.ts:188

___

### DescribeConditionalForwarders

• **DescribeConditionalForwarders** = ``"ds:DescribeConditionalForwarders"``

Grants permission to obtain information about the conditional forwarders for th
is account

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeConditionalForwarders.html

#### Defined in

actions/ds.ts:195

___

### DescribeDirectories

• **DescribeDirectories** = ``"ds:DescribeDirectories"``

Grants permission to obtain information about the directories that belong to th
is account

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDirectories.html

#### Defined in

actions/ds.ts:202

___

### DescribeDomainControllers

• **DescribeDomainControllers** = ``"ds:DescribeDomainControllers"``

Grants permission to provide information about any domain controllers in your d
irectory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDomainControllers.html

#### Defined in

actions/ds.ts:209

___

### DescribeEventTopics

• **DescribeEventTopics** = ``"ds:DescribeEventTopics"``

Grants permission to obtain information about which SNS topics receive status m
essages from the specified directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeEventTopics.html

#### Defined in

actions/ds.ts:216

___

### DescribeLDAPSSettings

• **DescribeLDAPSSettings** = ``"ds:DescribeLDAPSSettings"``

Grants permission to describe the status of LDAP security for the specified dir
ectory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeLDAPSSettings.html

#### Defined in

actions/ds.ts:223

___

### DescribeRegions

• **DescribeRegions** = ``"ds:DescribeRegions"``

Grants permission to provide information about the Regions that are configured
for multi-Region replication

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeRegions.html

#### Defined in

actions/ds.ts:230

___

### DescribeSettings

• **DescribeSettings** = ``"ds:DescribeSettings"``

Grants permission to retrieve information about the configurable settings for t
he specified directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSettings.html

#### Defined in

actions/ds.ts:237

___

### DescribeSharedDirectories

• **DescribeSharedDirectories** = ``"ds:DescribeSharedDirectories"``

Grants permission to return the shared directories in your account

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSharedDirectories.html

#### Defined in

actions/ds.ts:243

___

### DescribeSnapshots

• **DescribeSnapshots** = ``"ds:DescribeSnapshots"``

Grants permission to obtain information about the directory snapshots that belo
ng to this account

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSnapshots.html

#### Defined in

actions/ds.ts:250

___

### DescribeTrusts

• **DescribeTrusts** = ``"ds:DescribeTrusts"``

Grants permission to obtain information about the trust relationships for this
account

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeTrusts.html

#### Defined in

actions/ds.ts:257

___

### DescribeUpdateDirectory

• **DescribeUpdateDirectory** = ``"ds:DescribeUpdateDirectory"``

Grants permission to describe the updates of a directory for a particular updat
e type

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeUpdateDirectory.html

#### Defined in

actions/ds.ts:264

___

### DisableClientAuthentication

• **DisableClientAuthentication** = ``"ds:DisableClientAuthentication"``

Grants permission to disable alternative client authentication methods for the
specified directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableClientAuthentication.html

#### Defined in

actions/ds.ts:271

___

### DisableLDAPS

• **DisableLDAPS** = ``"ds:DisableLDAPS"``

Grants permission to deactivate LDAP secure calls for the specified directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableLDAPS.html

#### Defined in

actions/ds.ts:277

___

### DisableRadius

• **DisableRadius** = ``"ds:DisableRadius"``

Grants permission to disable multi-factor authentication (MFA) with the Remote
Authentication Dial In User Service (RADIUS) server for an AD Connector directo
ry

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableRadius.html

#### Defined in

actions/ds.ts:285

___

### DisableRoleAccess

• **DisableRoleAccess** = ``"ds:DisableRoleAccess"``

Grants permission to disable AWS Management Console access for identity in your
AWS Directory

See https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html

#### Defined in

actions/ds.ts:292

___

### DisableSso

• **DisableSso** = ``"ds:DisableSso"``

Grants permission to disable single-sign on for a directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableSso.html

#### Defined in

actions/ds.ts:298

___

### EnableClientAuthentication

• **EnableClientAuthentication** = ``"ds:EnableClientAuthentication"``

Grants permission to enable alternative client authentication methods for the s
pecified directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableClientAuthentication.html

#### Defined in

actions/ds.ts:305

___

### EnableLDAPS

• **EnableLDAPS** = ``"ds:EnableLDAPS"``

Grants permission to activate the switch for the specific directory to always u
se LDAP secure calls

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableLDAPS.html

#### Defined in

actions/ds.ts:312

___

### EnableRadius

• **EnableRadius** = ``"ds:EnableRadius"``

Grants permission to enable multi-factor authentication (MFA) with the Remote A
uthentication Dial In User Service (RADIUS) server for an AD Connector director
y

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableRadius.html

#### Defined in

actions/ds.ts:320

___

### EnableRoleAccess

• **EnableRoleAccess** = ``"ds:EnableRoleAccess"``

Grants permission to enable AWS Management Console access for identity in your
AWS Directory

See https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html

#### Defined in

actions/ds.ts:327

___

### EnableSso

• **EnableSso** = ``"ds:EnableSso"``

Grants permission to enable single-sign on for a directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableSso.html

#### Defined in

actions/ds.ts:333

___

### GetAuthorizedApplicationDetails

• **GetAuthorizedApplicationDetails** = ``"ds:GetAuthorizedApplicationDetails"``

Grants permission to retrieve the details of the authorized applications on a d
irectory

See https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html

#### Defined in

actions/ds.ts:340

___

### GetDirectoryLimits

• **GetDirectoryLimits** = ``"ds:GetDirectoryLimits"``

Grants permission to obtain directory limit information for the current region

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetDirectoryLimits.html

#### Defined in

actions/ds.ts:346

___

### GetSnapshotLimits

• **GetSnapshotLimits** = ``"ds:GetSnapshotLimits"``

Grants permission to obtain the manual snapshot limits for a directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetSnapshotLimits.html

#### Defined in

actions/ds.ts:352

___

### ListAuthorizedApplications

• **ListAuthorizedApplications** = ``"ds:ListAuthorizedApplications"``

Grants permission to obtain the AWS applications authorized for a directory

See https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html

#### Defined in

actions/ds.ts:358

___

### ListCertificates

• **ListCertificates** = ``"ds:ListCertificates"``

Grants permission to list all the certificates registered for a secured LDAP co
nnection, for the specified directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListCertificates.html

#### Defined in

actions/ds.ts:365

___

### ListIpRoutes

• **ListIpRoutes** = ``"ds:ListIpRoutes"``

Grants permission to list the address blocks that you have added to a directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListIpRoutes.html

#### Defined in

actions/ds.ts:371

___

### ListLogSubscriptions

• **ListLogSubscriptions** = ``"ds:ListLogSubscriptions"``

Grants permission to list the active log subscriptions for the AWS account

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListLogSubscriptions.html

#### Defined in

actions/ds.ts:377

___

### ListSchemaExtensions

• **ListSchemaExtensions** = ``"ds:ListSchemaExtensions"``

Grants permission to list all schema extensions applied to a Microsoft AD Direc
tory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListSchemaExtensions.html

#### Defined in

actions/ds.ts:384

___

### ListTagsForResource

• **ListTagsForResource** = ``"ds:ListTagsForResource"``

Grants permission to list all tags on an Amazon Directory Services directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListTagsForResource.html

#### Defined in

actions/ds.ts:390

___

### RegisterCertificate

• **RegisterCertificate** = ``"ds:RegisterCertificate"``

Grants permission to register a certificate for secured LDAP connection

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterCertificate.html

#### Defined in

actions/ds.ts:396

___

### RegisterEventTopic

• **RegisterEventTopic** = ``"ds:RegisterEventTopic"``

Grants permission to associate a directory with an SNS topic

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterEventTopic.html

#### Defined in

actions/ds.ts:402

___

### RejectSharedDirectory

• **RejectSharedDirectory** = ``"ds:RejectSharedDirectory"``

Grants permission to reject a directory sharing request that was sent from the
directory owner account

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RejectSharedDirectory.html

#### Defined in

actions/ds.ts:409

___

### RemoveIpRoutes

• **RemoveIpRoutes** = ``"ds:RemoveIpRoutes"``

Grants permission to remove IP address blocks from a directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveIpRoutes.html

#### Defined in

actions/ds.ts:415

___

### RemoveRegion

• **RemoveRegion** = ``"ds:RemoveRegion"``

Grants permission to stop all replication and removes the domain controllers fr
om the specified Region. You cannot remove the primary Region with this operati
on

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveRegion.html

#### Defined in

actions/ds.ts:423

___

### RemoveTagsFromResource

• **RemoveTagsFromResource** = ``"ds:RemoveTagsFromResource"``

Grants permission to remove tags from an Amazon Directory Services directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveTagsFromResource.html

#### Defined in

actions/ds.ts:429

___

### ResetUserPassword

• **ResetUserPassword** = ``"ds:ResetUserPassword"``

Grants permission to reset the password for any user in your AWS Managed Micros
oft AD or Simple AD directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html

#### Defined in

actions/ds.ts:436

___

### RestoreFromSnapshot

• **RestoreFromSnapshot** = ``"ds:RestoreFromSnapshot"``

Grants permission to restore a directory using an existing directory snapshot

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RestoreFromSnapshot.html

#### Defined in

actions/ds.ts:442

___

### ShareDirectory

• **ShareDirectory** = ``"ds:ShareDirectory"``

Grants permission to share a specified directory in your AWS account (directory
owner) with another AWS account (directory consumer). With this operation you c
an use your directory from any AWS account and from any Amazon VPC within an AW
S Region

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ShareDirectory.html

#### Defined in

actions/ds.ts:451

___

### StartSchemaExtension

• **StartSchemaExtension** = ``"ds:StartSchemaExtension"``

Grants permission to apply a schema extension to a Microsoft AD directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_StartSchemaExtension.html

#### Defined in

actions/ds.ts:457

___

### UnauthorizeApplication

• **UnauthorizeApplication** = ``"ds:UnauthorizeApplication"``

Grants permission to unauthorize an application from your AWS Directory

See https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html

#### Defined in

actions/ds.ts:463

___

### UnshareDirectory

• **UnshareDirectory** = ``"ds:UnshareDirectory"``

Grants permission to stop the directory sharing between the directory owner and
consumer accounts

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UnshareDirectory.html

#### Defined in

actions/ds.ts:470

___

### UpdateAuthorizedApplication

• **UpdateAuthorizedApplication** = ``"ds:UpdateAuthorizedApplication"``

Grants permission to update an authorized application for your AWS Directory

See https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html

#### Defined in

actions/ds.ts:476

___

### UpdateConditionalForwarder

• **UpdateConditionalForwarder** = ``"ds:UpdateConditionalForwarder"``

Grants permission to update a conditional forwarder that has been set up for yo
ur AWS directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateConditionalForwarder.html

#### Defined in

actions/ds.ts:483

___

### UpdateDirectory

• **UpdateDirectory** = ``"ds:UpdateDirectory"``

Grants permission to update the configurations like service account credentials
or DNS server IP addresses for the specified directory

See https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html

#### Defined in

actions/ds.ts:490

___

### UpdateDirectorySetup

• **UpdateDirectorySetup** = ``"ds:UpdateDirectorySetup"``

Grants permission to update the directory for a particular update type

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateDirectorySetup.html

#### Defined in

actions/ds.ts:496

___

### UpdateNumberOfDomainControllers

• **UpdateNumberOfDomainControllers** = ``"ds:UpdateNumberOfDomainControllers"``

Grants permission to add or remove domain controllers to or from the directory.
Based on the difference between current value and new value (provided through t
his API call), domain controllers will be added or removed. It may take up to 4
5 minutes for any new domain controllers to become fully active once the reques
ted number of domain controllers is updated. During this time, you cannot make
another update request

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateNumberOfDomainControllers.html

#### Defined in

actions/ds.ts:507

___

### UpdateRadius

• **UpdateRadius** = ``"ds:UpdateRadius"``

Grants permission to update the Remote Authentication Dial In User Service (RAD
IUS) server information for an AD Connector directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateRadius.html

#### Defined in

actions/ds.ts:514

___

### UpdateSettings

• **UpdateSettings** = ``"ds:UpdateSettings"``

Grants permission to update the configurable settings for the specified directo
ry

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateSettings.html

#### Defined in

actions/ds.ts:521

___

### UpdateTrust

• **UpdateTrust** = ``"ds:UpdateTrust"``

Grants permission to update the trust that has been set up between your AWS Man
aged Microsoft AD directory and an on-premises Active Directory

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateTrust.html

#### Defined in

actions/ds.ts:528

___

### VerifyTrust

• **VerifyTrust** = ``"ds:VerifyTrust"``

Grants permission to verify a trust relationship between your Microsoft AD in t
he AWS cloud and an external domain

See https://docs.aws.amazon.com/directoryservice/latest/devguide/API_VerifyTrust.html

#### Defined in

actions/ds.ts:535
