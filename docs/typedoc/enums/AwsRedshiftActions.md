[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRedshiftActions

# Enumeration: AwsRedshiftActions

All IAM policy actions for Amazon Redshift (REDSHIFT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshift.html

2024-02-12T09:58:51.385Z

## Table of contents

### Enumeration Members

- [AcceptReservedNodeExchange](AwsRedshiftActions.md#acceptreservednodeexchange)
- [AddPartner](AwsRedshiftActions.md#addpartner)
- [AssociateDataShareConsumer](AwsRedshiftActions.md#associatedatashareconsumer)
- [AuthorizeClusterSecurityGroupIngress](AwsRedshiftActions.md#authorizeclustersecuritygroupingress)
- [AuthorizeDataShare](AwsRedshiftActions.md#authorizedatashare)
- [AuthorizeEndpointAccess](AwsRedshiftActions.md#authorizeendpointaccess)
- [AuthorizeSnapshotAccess](AwsRedshiftActions.md#authorizesnapshotaccess)
- [BatchDeleteClusterSnapshots](AwsRedshiftActions.md#batchdeleteclustersnapshots)
- [BatchModifyClusterSnapshots](AwsRedshiftActions.md#batchmodifyclustersnapshots)
- [CancelQuery](AwsRedshiftActions.md#cancelquery)
- [CancelQuerySession](AwsRedshiftActions.md#cancelquerysession)
- [CancelResize](AwsRedshiftActions.md#cancelresize)
- [CopyClusterSnapshot](AwsRedshiftActions.md#copyclustersnapshot)
- [CreateAuthenticationProfile](AwsRedshiftActions.md#createauthenticationprofile)
- [CreateCluster](AwsRedshiftActions.md#createcluster)
- [CreateClusterParameterGroup](AwsRedshiftActions.md#createclusterparametergroup)
- [CreateClusterSecurityGroup](AwsRedshiftActions.md#createclustersecuritygroup)
- [CreateClusterSnapshot](AwsRedshiftActions.md#createclustersnapshot)
- [CreateClusterSubnetGroup](AwsRedshiftActions.md#createclustersubnetgroup)
- [CreateClusterUser](AwsRedshiftActions.md#createclusteruser)
- [CreateCustomDomainAssociation](AwsRedshiftActions.md#createcustomdomainassociation)
- [CreateEndpointAccess](AwsRedshiftActions.md#createendpointaccess)
- [CreateEventSubscription](AwsRedshiftActions.md#createeventsubscription)
- [CreateHsmClientCertificate](AwsRedshiftActions.md#createhsmclientcertificate)
- [CreateHsmConfiguration](AwsRedshiftActions.md#createhsmconfiguration)
- [CreateRedshiftIdcApplication](AwsRedshiftActions.md#createredshiftidcapplication)
- [CreateSavedQuery](AwsRedshiftActions.md#createsavedquery)
- [CreateScheduledAction](AwsRedshiftActions.md#createscheduledaction)
- [CreateSnapshotCopyGrant](AwsRedshiftActions.md#createsnapshotcopygrant)
- [CreateSnapshotSchedule](AwsRedshiftActions.md#createsnapshotschedule)
- [CreateTags](AwsRedshiftActions.md#createtags)
- [CreateUsageLimit](AwsRedshiftActions.md#createusagelimit)
- [DeauthorizeDataShare](AwsRedshiftActions.md#deauthorizedatashare)
- [DeleteAuthenticationProfile](AwsRedshiftActions.md#deleteauthenticationprofile)
- [DeleteCluster](AwsRedshiftActions.md#deletecluster)
- [DeleteClusterParameterGroup](AwsRedshiftActions.md#deleteclusterparametergroup)
- [DeleteClusterSecurityGroup](AwsRedshiftActions.md#deleteclustersecuritygroup)
- [DeleteClusterSnapshot](AwsRedshiftActions.md#deleteclustersnapshot)
- [DeleteClusterSubnetGroup](AwsRedshiftActions.md#deleteclustersubnetgroup)
- [DeleteCustomDomainAssociation](AwsRedshiftActions.md#deletecustomdomainassociation)
- [DeleteEndpointAccess](AwsRedshiftActions.md#deleteendpointaccess)
- [DeleteEventSubscription](AwsRedshiftActions.md#deleteeventsubscription)
- [DeleteHsmClientCertificate](AwsRedshiftActions.md#deletehsmclientcertificate)
- [DeleteHsmConfiguration](AwsRedshiftActions.md#deletehsmconfiguration)
- [DeletePartner](AwsRedshiftActions.md#deletepartner)
- [DeleteRedshiftIdcApplication](AwsRedshiftActions.md#deleteredshiftidcapplication)
- [DeleteResourcePolicy](AwsRedshiftActions.md#deleteresourcepolicy)
- [DeleteSavedQueries](AwsRedshiftActions.md#deletesavedqueries)
- [DeleteScheduledAction](AwsRedshiftActions.md#deletescheduledaction)
- [DeleteSnapshotCopyGrant](AwsRedshiftActions.md#deletesnapshotcopygrant)
- [DeleteSnapshotSchedule](AwsRedshiftActions.md#deletesnapshotschedule)
- [DeleteTags](AwsRedshiftActions.md#deletetags)
- [DeleteUsageLimit](AwsRedshiftActions.md#deleteusagelimit)
- [DescribeAccountAttributes](AwsRedshiftActions.md#describeaccountattributes)
- [DescribeAuthenticationProfiles](AwsRedshiftActions.md#describeauthenticationprofiles)
- [DescribeClusterDbRevisions](AwsRedshiftActions.md#describeclusterdbrevisions)
- [DescribeClusterParameterGroups](AwsRedshiftActions.md#describeclusterparametergroups)
- [DescribeClusterParameters](AwsRedshiftActions.md#describeclusterparameters)
- [DescribeClusterSecurityGroups](AwsRedshiftActions.md#describeclustersecuritygroups)
- [DescribeClusterSnapshots](AwsRedshiftActions.md#describeclustersnapshots)
- [DescribeClusterSubnetGroups](AwsRedshiftActions.md#describeclustersubnetgroups)
- [DescribeClusterTracks](AwsRedshiftActions.md#describeclustertracks)
- [DescribeClusterVersions](AwsRedshiftActions.md#describeclusterversions)
- [DescribeClusters](AwsRedshiftActions.md#describeclusters)
- [DescribeCustomDomainAssociations](AwsRedshiftActions.md#describecustomdomainassociations)
- [DescribeDataShares](AwsRedshiftActions.md#describedatashares)
- [DescribeDataSharesForConsumer](AwsRedshiftActions.md#describedatasharesforconsumer)
- [DescribeDataSharesForProducer](AwsRedshiftActions.md#describedatasharesforproducer)
- [DescribeDefaultClusterParameters](AwsRedshiftActions.md#describedefaultclusterparameters)
- [DescribeEndpointAccess](AwsRedshiftActions.md#describeendpointaccess)
- [DescribeEndpointAuthorization](AwsRedshiftActions.md#describeendpointauthorization)
- [DescribeEventCategories](AwsRedshiftActions.md#describeeventcategories)
- [DescribeEventSubscriptions](AwsRedshiftActions.md#describeeventsubscriptions)
- [DescribeEvents](AwsRedshiftActions.md#describeevents)
- [DescribeHsmClientCertificates](AwsRedshiftActions.md#describehsmclientcertificates)
- [DescribeHsmConfigurations](AwsRedshiftActions.md#describehsmconfigurations)
- [DescribeInboundIntegrations](AwsRedshiftActions.md#describeinboundintegrations)
- [DescribeLoggingStatus](AwsRedshiftActions.md#describeloggingstatus)
- [DescribeNodeConfigurationOptions](AwsRedshiftActions.md#describenodeconfigurationoptions)
- [DescribeOrderableClusterOptions](AwsRedshiftActions.md#describeorderableclusteroptions)
- [DescribePartners](AwsRedshiftActions.md#describepartners)
- [DescribeQuery](AwsRedshiftActions.md#describequery)
- [DescribeRedshiftIdcApplications](AwsRedshiftActions.md#describeredshiftidcapplications)
- [DescribeReservedNodeExchangeStatus](AwsRedshiftActions.md#describereservednodeexchangestatus)
- [DescribeReservedNodeOfferings](AwsRedshiftActions.md#describereservednodeofferings)
- [DescribeReservedNodes](AwsRedshiftActions.md#describereservednodes)
- [DescribeResize](AwsRedshiftActions.md#describeresize)
- [DescribeSavedQueries](AwsRedshiftActions.md#describesavedqueries)
- [DescribeScheduledActions](AwsRedshiftActions.md#describescheduledactions)
- [DescribeSnapshotCopyGrants](AwsRedshiftActions.md#describesnapshotcopygrants)
- [DescribeSnapshotSchedules](AwsRedshiftActions.md#describesnapshotschedules)
- [DescribeStorage](AwsRedshiftActions.md#describestorage)
- [DescribeTable](AwsRedshiftActions.md#describetable)
- [DescribeTableRestoreStatus](AwsRedshiftActions.md#describetablerestorestatus)
- [DescribeTags](AwsRedshiftActions.md#describetags)
- [DescribeUsageLimits](AwsRedshiftActions.md#describeusagelimits)
- [DisableLogging](AwsRedshiftActions.md#disablelogging)
- [DisableSnapshotCopy](AwsRedshiftActions.md#disablesnapshotcopy)
- [DisassociateDataShareConsumer](AwsRedshiftActions.md#disassociatedatashareconsumer)
- [EnableLogging](AwsRedshiftActions.md#enablelogging)
- [EnableSnapshotCopy](AwsRedshiftActions.md#enablesnapshotcopy)
- [ExecuteQuery](AwsRedshiftActions.md#executequery)
- [FailoverPrimaryCompute](AwsRedshiftActions.md#failoverprimarycompute)
- [FetchResults](AwsRedshiftActions.md#fetchresults)
- [GetClusterCredentials](AwsRedshiftActions.md#getclustercredentials)
- [GetClusterCredentialsWithIAM](AwsRedshiftActions.md#getclustercredentialswithiam)
- [GetReservedNodeExchangeConfigurationOptions](AwsRedshiftActions.md#getreservednodeexchangeconfigurationoptions)
- [GetReservedNodeExchangeOfferings](AwsRedshiftActions.md#getreservednodeexchangeofferings)
- [GetResourcePolicy](AwsRedshiftActions.md#getresourcepolicy)
- [JoinGroup](AwsRedshiftActions.md#joingroup)
- [ListDatabases](AwsRedshiftActions.md#listdatabases)
- [ListRecommendations](AwsRedshiftActions.md#listrecommendations)
- [ListSavedQueries](AwsRedshiftActions.md#listsavedqueries)
- [ListSchemas](AwsRedshiftActions.md#listschemas)
- [ListTables](AwsRedshiftActions.md#listtables)
- [ModifyAquaConfiguration](AwsRedshiftActions.md#modifyaquaconfiguration)
- [ModifyAuthenticationProfile](AwsRedshiftActions.md#modifyauthenticationprofile)
- [ModifyCluster](AwsRedshiftActions.md#modifycluster)
- [ModifyClusterDbRevision](AwsRedshiftActions.md#modifyclusterdbrevision)
- [ModifyClusterIamRoles](AwsRedshiftActions.md#modifyclusteriamroles)
- [ModifyClusterMaintenance](AwsRedshiftActions.md#modifyclustermaintenance)
- [ModifyClusterParameterGroup](AwsRedshiftActions.md#modifyclusterparametergroup)
- [ModifyClusterSnapshot](AwsRedshiftActions.md#modifyclustersnapshot)
- [ModifyClusterSnapshotSchedule](AwsRedshiftActions.md#modifyclustersnapshotschedule)
- [ModifyClusterSubnetGroup](AwsRedshiftActions.md#modifyclustersubnetgroup)
- [ModifyCustomDomainAssociation](AwsRedshiftActions.md#modifycustomdomainassociation)
- [ModifyEndpointAccess](AwsRedshiftActions.md#modifyendpointaccess)
- [ModifyEventSubscription](AwsRedshiftActions.md#modifyeventsubscription)
- [ModifyRedshiftIdcApplication](AwsRedshiftActions.md#modifyredshiftidcapplication)
- [ModifySavedQuery](AwsRedshiftActions.md#modifysavedquery)
- [ModifyScheduledAction](AwsRedshiftActions.md#modifyscheduledaction)
- [ModifySnapshotCopyRetentionPeriod](AwsRedshiftActions.md#modifysnapshotcopyretentionperiod)
- [ModifySnapshotSchedule](AwsRedshiftActions.md#modifysnapshotschedule)
- [ModifyUsageLimit](AwsRedshiftActions.md#modifyusagelimit)
- [PauseCluster](AwsRedshiftActions.md#pausecluster)
- [PurchaseReservedNodeOffering](AwsRedshiftActions.md#purchasereservednodeoffering)
- [PutResourcePolicy](AwsRedshiftActions.md#putresourcepolicy)
- [RebootCluster](AwsRedshiftActions.md#rebootcluster)
- [RejectDataShare](AwsRedshiftActions.md#rejectdatashare)
- [ResetClusterParameterGroup](AwsRedshiftActions.md#resetclusterparametergroup)
- [ResizeCluster](AwsRedshiftActions.md#resizecluster)
- [RestoreFromClusterSnapshot](AwsRedshiftActions.md#restorefromclustersnapshot)
- [RestoreTableFromClusterSnapshot](AwsRedshiftActions.md#restoretablefromclustersnapshot)
- [ResumeCluster](AwsRedshiftActions.md#resumecluster)
- [RevokeClusterSecurityGroupIngress](AwsRedshiftActions.md#revokeclustersecuritygroupingress)
- [RevokeEndpointAccess](AwsRedshiftActions.md#revokeendpointaccess)
- [RevokeSnapshotAccess](AwsRedshiftActions.md#revokesnapshotaccess)
- [RotateEncryptionKey](AwsRedshiftActions.md#rotateencryptionkey)
- [UpdatePartnerStatus](AwsRedshiftActions.md#updatepartnerstatus)
- [ViewQueriesFromConsole](AwsRedshiftActions.md#viewqueriesfromconsole)
- [ViewQueriesInConsole](AwsRedshiftActions.md#viewqueriesinconsole)

## Enumeration Members

### AcceptReservedNodeExchange

• **AcceptReservedNodeExchange** = ``"redshift:AcceptReservedNodeExchange"``

Grants permission to exchange a DC1 reserved node for a DC2 reserved node with
no changes to the configuration

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_AcceptReservedNodeExchange.html

#### Defined in

actions/redshift.ts:18

___

### AddPartner

• **AddPartner** = ``"redshift:AddPartner"``

Grants permission to add a partner integration to a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_AddPartner.html

#### Defined in

actions/redshift.ts:24

___

### AssociateDataShareConsumer

• **AssociateDataShareConsumer** = ``"redshift:AssociateDataShareConsumer"``

Grants permission to associate a consumer to a datashare

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_AssociateDataShareConsumer.html

#### Defined in

actions/redshift.ts:30

___

### AuthorizeClusterSecurityGroupIngress

• **AuthorizeClusterSecurityGroupIngress** = ``"redshift:AuthorizeClusterSecurityGroupIngress"``

Grants permission to add an inbound (ingress) rule to an Amazon Redshift securi
ty group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeClusterSecurityGroupIngress.html

#### Defined in

actions/redshift.ts:37

___

### AuthorizeDataShare

• **AuthorizeDataShare** = ``"redshift:AuthorizeDataShare"``

Grants permission to authorize the specified datashare consumer to consume a da
tashare

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeDataShare.html

#### Defined in

actions/redshift.ts:44

___

### AuthorizeEndpointAccess

• **AuthorizeEndpointAccess** = ``"redshift:AuthorizeEndpointAccess"``

Grants permission to authorize endpoint related activities for redshift-managed
vpc endpoint

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeEndpointAccess.html

#### Defined in

actions/redshift.ts:51

___

### AuthorizeSnapshotAccess

• **AuthorizeSnapshotAccess** = ``"redshift:AuthorizeSnapshotAccess"``

Grants permission to the specified AWS account to restore a snapshot

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeSnapshotAccess.html

#### Defined in

actions/redshift.ts:57

___

### BatchDeleteClusterSnapshots

• **BatchDeleteClusterSnapshots** = ``"redshift:BatchDeleteClusterSnapshots"``

Grants permission to delete snapshots in a batch of size upto 100

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchDeleteClusterSnapshots.html

#### Defined in

actions/redshift.ts:63

___

### BatchModifyClusterSnapshots

• **BatchModifyClusterSnapshots** = ``"redshift:BatchModifyClusterSnapshots"``

Grants permission to modify settings for a list of snapshots

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchModifyClusterSnapshots.html

#### Defined in

actions/redshift.ts:69

___

### CancelQuery

• **CancelQuery** = ``"redshift:CancelQuery"``

Grants permission to cancel a query through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:75

___

### CancelQuerySession

• **CancelQuerySession** = ``"redshift:CancelQuerySession"``

Grants permission to see queries in the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:81

___

### CancelResize

• **CancelResize** = ``"redshift:CancelResize"``

Grants permission to cancel a resize operation

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CancelResize.html

#### Defined in

actions/redshift.ts:87

___

### CopyClusterSnapshot

• **CopyClusterSnapshot** = ``"redshift:CopyClusterSnapshot"``

Grants permission to copy a cluster snapshot

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CopyClusterSnapshot.html

#### Defined in

actions/redshift.ts:93

___

### CreateAuthenticationProfile

• **CreateAuthenticationProfile** = ``"redshift:CreateAuthenticationProfile"``

Grants permission to create an Amazon Redshift authentication profile

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateAuthenticationProfile.html

#### Defined in

actions/redshift.ts:99

___

### CreateCluster

• **CreateCluster** = ``"redshift:CreateCluster"``

Grants permission to create a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateCluster.html

#### Defined in

actions/redshift.ts:105

___

### CreateClusterParameterGroup

• **CreateClusterParameterGroup** = ``"redshift:CreateClusterParameterGroup"``

Grants permission to create an Amazon Redshift parameter group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterParameterGroup.html

#### Defined in

actions/redshift.ts:111

___

### CreateClusterSecurityGroup

• **CreateClusterSecurityGroup** = ``"redshift:CreateClusterSecurityGroup"``

Grants permission to create an Amazon Redshift security group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSecurityGroup.html

#### Defined in

actions/redshift.ts:117

___

### CreateClusterSnapshot

• **CreateClusterSnapshot** = ``"redshift:CreateClusterSnapshot"``

Grants permission to create a manual snapshot of the specified cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSnapshot.html

#### Defined in

actions/redshift.ts:123

___

### CreateClusterSubnetGroup

• **CreateClusterSubnetGroup** = ``"redshift:CreateClusterSubnetGroup"``

Grants permission to create an Amazon Redshift subnet group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSubnetGroup.html

#### Defined in

actions/redshift.ts:129

___

### CreateClusterUser

• **CreateClusterUser** = ``"redshift:CreateClusterUser"``

Grants permission to automatically create the specified Amazon Redshift user if
it does not exist

See https://docs.aws.amazon.com/redshift/latest/mgmt/generating-iam-credentials-role-permissions.html

#### Defined in

actions/redshift.ts:136

___

### CreateCustomDomainAssociation

• **CreateCustomDomainAssociation** = ``"redshift:CreateCustomDomainAssociation"``

Grants permission to create a custom domain name for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateCustomDomainAssociation.html

#### Defined in

actions/redshift.ts:142

___

### CreateEndpointAccess

• **CreateEndpointAccess** = ``"redshift:CreateEndpointAccess"``

Grants permission to create a redshift-managed vpc endpoint

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateEndpointAccess.html

#### Defined in

actions/redshift.ts:148

___

### CreateEventSubscription

• **CreateEventSubscription** = ``"redshift:CreateEventSubscription"``

Grants permission to create an Amazon Redshift event notification subscription

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateEventSubscription.html

#### Defined in

actions/redshift.ts:154

___

### CreateHsmClientCertificate

• **CreateHsmClientCertificate** = ``"redshift:CreateHsmClientCertificate"``

Grants permission to create an HSM client certificate that a cluster uses to co
nnect to an HSM

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmClientCertificate.html

#### Defined in

actions/redshift.ts:161

___

### CreateHsmConfiguration

• **CreateHsmConfiguration** = ``"redshift:CreateHsmConfiguration"``

Grants permission to create an HSM configuration that contains information requ
ired by a cluster to store and use database encryption keys in a hardware secur
ity module (HSM)

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmConfiguration.html

#### Defined in

actions/redshift.ts:169

___

### CreateRedshiftIdcApplication

• **CreateRedshiftIdcApplication** = ``"redshift:CreateRedshiftIdcApplication"``

Grants permission to create a redshift idc application

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateRedshiftIdcApplication.html

#### Defined in

actions/redshift.ts:175

___

### CreateSavedQuery

• **CreateSavedQuery** = ``"redshift:CreateSavedQuery"``

Grants permission to create saved SQL queries through the Amazon Redshift conso
le

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:182

___

### CreateScheduledAction

• **CreateScheduledAction** = ``"redshift:CreateScheduledAction"``

Grants permission to create an Amazon Redshift scheduled action

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateScheduledAction.html

#### Defined in

actions/redshift.ts:188

___

### CreateSnapshotCopyGrant

• **CreateSnapshotCopyGrant** = ``"redshift:CreateSnapshotCopyGrant"``

Grants permission to create a snapshot copy grant and encrypt copied snapshots
in a destination AWS Region

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotCopyGrant.html

#### Defined in

actions/redshift.ts:195

___

### CreateSnapshotSchedule

• **CreateSnapshotSchedule** = ``"redshift:CreateSnapshotSchedule"``

Grants permission to create a snapshot schedule

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotSchedule.html

#### Defined in

actions/redshift.ts:201

___

### CreateTags

• **CreateTags** = ``"redshift:CreateTags"``

Grants permission to add one or more tags to a specified resource

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateTags.html

#### Defined in

actions/redshift.ts:207

___

### CreateUsageLimit

• **CreateUsageLimit** = ``"redshift:CreateUsageLimit"``

Grants permission to create a usage limit

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateUsageLimit.html

#### Defined in

actions/redshift.ts:213

___

### DeauthorizeDataShare

• **DeauthorizeDataShare** = ``"redshift:DeauthorizeDataShare"``

Grants permission to remove permission from the specified datashare consumer to
consume a datashare

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeauthorizeDataShare.html

#### Defined in

actions/redshift.ts:220

___

### DeleteAuthenticationProfile

• **DeleteAuthenticationProfile** = ``"redshift:DeleteAuthenticationProfile"``

Grants permission to delete an Amazon Redshift authentication profile

See API_DeleteAuthenticationProfile.html

#### Defined in

actions/redshift.ts:226

___

### DeleteCluster

• **DeleteCluster** = ``"redshift:DeleteCluster"``

Grants permission to delete a previously provisioned cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteCluster.html

#### Defined in

actions/redshift.ts:232

___

### DeleteClusterParameterGroup

• **DeleteClusterParameterGroup** = ``"redshift:DeleteClusterParameterGroup"``

Grants permission to delete an Amazon Redshift parameter group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterParameterGroup.html

#### Defined in

actions/redshift.ts:238

___

### DeleteClusterSecurityGroup

• **DeleteClusterSecurityGroup** = ``"redshift:DeleteClusterSecurityGroup"``

Grants permission to delete an Amazon Redshift security group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSecurityGroup.html

#### Defined in

actions/redshift.ts:244

___

### DeleteClusterSnapshot

• **DeleteClusterSnapshot** = ``"redshift:DeleteClusterSnapshot"``

Grants permission to delete a manual snapshot

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSnapshot.html

#### Defined in

actions/redshift.ts:250

___

### DeleteClusterSubnetGroup

• **DeleteClusterSubnetGroup** = ``"redshift:DeleteClusterSubnetGroup"``

Grants permission to delete a cluster subnet group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSubnetGroup.html

#### Defined in

actions/redshift.ts:256

___

### DeleteCustomDomainAssociation

• **DeleteCustomDomainAssociation** = ``"redshift:DeleteCustomDomainAssociation"``

Grants permission to delete a custom domain name for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteCustomDomainAssociation.html

#### Defined in

actions/redshift.ts:262

___

### DeleteEndpointAccess

• **DeleteEndpointAccess** = ``"redshift:DeleteEndpointAccess"``

Grants permission to delete a redshift-managed vpc endpoint

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteEndpointAccess.html

#### Defined in

actions/redshift.ts:268

___

### DeleteEventSubscription

• **DeleteEventSubscription** = ``"redshift:DeleteEventSubscription"``

Grants permission to delete an Amazon Redshift event notification subscription

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteEventSubscription.html

#### Defined in

actions/redshift.ts:274

___

### DeleteHsmClientCertificate

• **DeleteHsmClientCertificate** = ``"redshift:DeleteHsmClientCertificate"``

Grants permission to delete an HSM client certificate

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmClientCertificate.html

#### Defined in

actions/redshift.ts:280

___

### DeleteHsmConfiguration

• **DeleteHsmConfiguration** = ``"redshift:DeleteHsmConfiguration"``

Grants permission to delete an Amazon Redshift HSM configuration

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmConfiguration.html

#### Defined in

actions/redshift.ts:286

___

### DeletePartner

• **DeletePartner** = ``"redshift:DeletePartner"``

Grants permission to delete a partner integration from a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeletePartner.html

#### Defined in

actions/redshift.ts:292

___

### DeleteRedshiftIdcApplication

• **DeleteRedshiftIdcApplication** = ``"redshift:DeleteRedshiftIdcApplication"``

Grants permission to delete a redshift idc application

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteRedshiftIdcApplication.html

#### Defined in

actions/redshift.ts:298

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"redshift:DeleteResourcePolicy"``

Grants permission to delete the resource policy for a specified resource

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/redshift.ts:304

___

### DeleteSavedQueries

• **DeleteSavedQueries** = ``"redshift:DeleteSavedQueries"``

Grants permission to delete saved SQL queries through the Amazon Redshift conso
le

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:311

___

### DeleteScheduledAction

• **DeleteScheduledAction** = ``"redshift:DeleteScheduledAction"``

Grants permission to delete an Amazon Redshift scheduled action

See API_DeleteScheduledAction.html

#### Defined in

actions/redshift.ts:317

___

### DeleteSnapshotCopyGrant

• **DeleteSnapshotCopyGrant** = ``"redshift:DeleteSnapshotCopyGrant"``

Grants permission to delete a snapshot copy grant

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotCopyGrant.html

#### Defined in

actions/redshift.ts:323

___

### DeleteSnapshotSchedule

• **DeleteSnapshotSchedule** = ``"redshift:DeleteSnapshotSchedule"``

Grants permission to delete a snapshot schedule

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotSchedule.html

#### Defined in

actions/redshift.ts:329

___

### DeleteTags

• **DeleteTags** = ``"redshift:DeleteTags"``

Grants permission to delete a tag or tags from a resource

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteTags.html

#### Defined in

actions/redshift.ts:335

___

### DeleteUsageLimit

• **DeleteUsageLimit** = ``"redshift:DeleteUsageLimit"``

Grants permission to delete a usage limit

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteUsageLimit.html

#### Defined in

actions/redshift.ts:341

___

### DescribeAccountAttributes

• **DescribeAccountAttributes** = ``"redshift:DescribeAccountAttributes"``

Grants permission to describe attributes attached to the specified AWS account

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeAccountAttributes.html

#### Defined in

actions/redshift.ts:347

___

### DescribeAuthenticationProfiles

• **DescribeAuthenticationProfiles** = ``"redshift:DescribeAuthenticationProfiles"``

Grants permission to describe created Amazon Redshift authentication profiles

See API_DescribeAuthenticationProfiles.html

#### Defined in

actions/redshift.ts:353

___

### DescribeClusterDbRevisions

• **DescribeClusterDbRevisions** = ``"redshift:DescribeClusterDbRevisions"``

Grants permission to describe database revisions for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterDbRevisions.html

#### Defined in

actions/redshift.ts:359

___

### DescribeClusterParameterGroups

• **DescribeClusterParameterGroups** = ``"redshift:DescribeClusterParameterGroups"``

Grants permission to describe Amazon Redshift parameter groups, including param
eter groups you created and the default parameter group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameterGroups.html

#### Defined in

actions/redshift.ts:366

___

### DescribeClusterParameters

• **DescribeClusterParameters** = ``"redshift:DescribeClusterParameters"``

Grants permission to describe parameters contained within an Amazon Redshift pa
rameter group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameters.html

#### Defined in

actions/redshift.ts:373

___

### DescribeClusterSecurityGroups

• **DescribeClusterSecurityGroups** = ``"redshift:DescribeClusterSecurityGroups"``

Grants permission to describe Amazon Redshift security groups

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSecurityGroups.html

#### Defined in

actions/redshift.ts:379

___

### DescribeClusterSnapshots

• **DescribeClusterSnapshots** = ``"redshift:DescribeClusterSnapshots"``

Grants permission to describe one or more snapshot objects, which contain metad
ata about your cluster snapshots

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSnapshots.html

#### Defined in

actions/redshift.ts:386

___

### DescribeClusterSubnetGroups

• **DescribeClusterSubnetGroups** = ``"redshift:DescribeClusterSubnetGroups"``

Grants permission to describe one or more cluster subnet group objects, which c
ontain metadata about your cluster subnet groups

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSubnetGroups.html

#### Defined in

actions/redshift.ts:393

___

### DescribeClusterTracks

• **DescribeClusterTracks** = ``"redshift:DescribeClusterTracks"``

Grants permission to describe available maintenance tracks

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterTracks.html

#### Defined in

actions/redshift.ts:399

___

### DescribeClusterVersions

• **DescribeClusterVersions** = ``"redshift:DescribeClusterVersions"``

Grants permission to describe available Amazon Redshift cluster versions

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterVersions.html

#### Defined in

actions/redshift.ts:405

___

### DescribeClusters

• **DescribeClusters** = ``"redshift:DescribeClusters"``

Grants permission to describe properties of provisioned clusters

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusters.html

#### Defined in

actions/redshift.ts:411

___

### DescribeCustomDomainAssociations

• **DescribeCustomDomainAssociations** = ``"redshift:DescribeCustomDomainAssociations"``

Grants permission to describe custom domain names for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeCustomDomainAssociations.html

#### Defined in

actions/redshift.ts:417

___

### DescribeDataShares

• **DescribeDataShares** = ``"redshift:DescribeDataShares"``

Grants permission to describe datashares created and consumed by your clusters

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDataShares.html

#### Defined in

actions/redshift.ts:423

___

### DescribeDataSharesForConsumer

• **DescribeDataSharesForConsumer** = ``"redshift:DescribeDataSharesForConsumer"``

Grants permission to describe only datashares consumed by your clusters

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDataSharesForConsumer.html

#### Defined in

actions/redshift.ts:429

___

### DescribeDataSharesForProducer

• **DescribeDataSharesForProducer** = ``"redshift:DescribeDataSharesForProducer"``

Grants permission to describe only datashares created by your clusters

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDataSharesForProducer.html

#### Defined in

actions/redshift.ts:435

___

### DescribeDefaultClusterParameters

• **DescribeDefaultClusterParameters** = ``"redshift:DescribeDefaultClusterParameters"``

Grants permission to describe parameter settings for a parameter group family

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDefaultClusterParameters.html

#### Defined in

actions/redshift.ts:441

___

### DescribeEndpointAccess

• **DescribeEndpointAccess** = ``"redshift:DescribeEndpointAccess"``

Grants permission to describe redshift-managed vpc endpoints

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEndpointAccess.html

#### Defined in

actions/redshift.ts:447

___

### DescribeEndpointAuthorization

• **DescribeEndpointAuthorization** = ``"redshift:DescribeEndpointAuthorization"``

Grants permission to authorize describe activity for redshift-managed vpc endpo
int

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEndpointAuthorization.html

#### Defined in

actions/redshift.ts:454

___

### DescribeEventCategories

• **DescribeEventCategories** = ``"redshift:DescribeEventCategories"``

Grants permission to describe event categories for all event source types, or f
or a specified source type

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventCategories.html

#### Defined in

actions/redshift.ts:461

___

### DescribeEventSubscriptions

• **DescribeEventSubscriptions** = ``"redshift:DescribeEventSubscriptions"``

Grants permission to describe Amazon Redshift event notification subscriptions
for the specified AWS account

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventSubscriptions.html

#### Defined in

actions/redshift.ts:468

___

### DescribeEvents

• **DescribeEvents** = ``"redshift:DescribeEvents"``

Grants permission to describe events related to clusters, security groups, snap
shots, and parameter groups for the past 14 days

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEvents.html

#### Defined in

actions/redshift.ts:475

___

### DescribeHsmClientCertificates

• **DescribeHsmClientCertificates** = ``"redshift:DescribeHsmClientCertificates"``

Grants permission to describe HSM client certificates

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmClientCertificates.html

#### Defined in

actions/redshift.ts:481

___

### DescribeHsmConfigurations

• **DescribeHsmConfigurations** = ``"redshift:DescribeHsmConfigurations"``

Grants permission to describe Amazon Redshift HSM configurations

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmConfigurations.html

#### Defined in

actions/redshift.ts:487

___

### DescribeInboundIntegrations

• **DescribeInboundIntegrations** = ``"redshift:DescribeInboundIntegrations"``

Grants permission to list the inbound integrations

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeInboundIntegrations.html

#### Defined in

actions/redshift.ts:493

___

### DescribeLoggingStatus

• **DescribeLoggingStatus** = ``"redshift:DescribeLoggingStatus"``

Grants permission to describe whether information, such as queries and connecti
on attempts, is being logged for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeLoggingStatus.html

#### Defined in

actions/redshift.ts:500

___

### DescribeNodeConfigurationOptions

• **DescribeNodeConfigurationOptions** = ``"redshift:DescribeNodeConfigurationOptions"``

Grants permission to describe properties of possible node configurations such a
s node type, number of nodes, and disk usage for the specified action type

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeNodeConfigurationOptions.html

#### Defined in

actions/redshift.ts:507

___

### DescribeOrderableClusterOptions

• **DescribeOrderableClusterOptions** = ``"redshift:DescribeOrderableClusterOptions"``

Grants permission to describe orderable cluster options

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeOrderableClusterOptions.html

#### Defined in

actions/redshift.ts:513

___

### DescribePartners

• **DescribePartners** = ``"redshift:DescribePartners"``

Grants permission to retrieve information about the partner integrations define
d for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribePartners.html

#### Defined in

actions/redshift.ts:520

___

### DescribeQuery

• **DescribeQuery** = ``"redshift:DescribeQuery"``

Grants permission to describe a query through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:526

___

### DescribeRedshiftIdcApplications

• **DescribeRedshiftIdcApplications** = ``"redshift:DescribeRedshiftIdcApplications"``

Grants permission to describe redshift idc applications

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeRedshiftIdcApplications.html

#### Defined in

actions/redshift.ts:532

___

### DescribeReservedNodeExchangeStatus

• **DescribeReservedNodeExchangeStatus** = ``"redshift:DescribeReservedNodeExchangeStatus"``

Grants permission to describe exchange status details and associated metadata f
or a reserved-node exchange. Statuses include such values as in progress and re
quested

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeExchangeStatus.html

#### Defined in

actions/redshift.ts:540

___

### DescribeReservedNodeOfferings

• **DescribeReservedNodeOfferings** = ``"redshift:DescribeReservedNodeOfferings"``

Grants permission to describe available reserved node offerings by Amazon Redsh
ift

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeOfferings.html

#### Defined in

actions/redshift.ts:547

___

### DescribeReservedNodes

• **DescribeReservedNodes** = ``"redshift:DescribeReservedNodes"``

Grants permission to describe the reserved nodes

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodes.html

#### Defined in

actions/redshift.ts:553

___

### DescribeResize

• **DescribeResize** = ``"redshift:DescribeResize"``

Grants permission to describe the last resize operation for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeResize.html

#### Defined in

actions/redshift.ts:559

___

### DescribeSavedQueries

• **DescribeSavedQueries** = ``"redshift:DescribeSavedQueries"``

Grants permission to describe saved queries through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:565

___

### DescribeScheduledActions

• **DescribeScheduledActions** = ``"redshift:DescribeScheduledActions"``

Grants permission to describe created Amazon Redshift scheduled actions

See API_DescribeScheduledActions.html

#### Defined in

actions/redshift.ts:571

___

### DescribeSnapshotCopyGrants

• **DescribeSnapshotCopyGrants** = ``"redshift:DescribeSnapshotCopyGrants"``

Grants permission to describe snapshot copy grants owned by the specified AWS a
ccount in the destination AWS Region

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotCopyGrants.html

#### Defined in

actions/redshift.ts:578

___

### DescribeSnapshotSchedules

• **DescribeSnapshotSchedules** = ``"redshift:DescribeSnapshotSchedules"``

Grants permission to describe snapshot schedules

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotSchedules.html

#### Defined in

actions/redshift.ts:584

___

### DescribeStorage

• **DescribeStorage** = ``"redshift:DescribeStorage"``

Grants permission to describe account level backups storage size and provisiona
l storage

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeStorage.html

#### Defined in

actions/redshift.ts:591

___

### DescribeTable

• **DescribeTable** = ``"redshift:DescribeTable"``

Grants permission to describe a table through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:597

___

### DescribeTableRestoreStatus

• **DescribeTableRestoreStatus** = ``"redshift:DescribeTableRestoreStatus"``

Grants permission to describe status of one or more table restore requests made
using the RestoreTableFromClusterSnapshot API action

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTableRestoreStatus.html

#### Defined in

actions/redshift.ts:604

___

### DescribeTags

• **DescribeTags** = ``"redshift:DescribeTags"``

Grants permission to describe tags

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTags.html

#### Defined in

actions/redshift.ts:610

___

### DescribeUsageLimits

• **DescribeUsageLimits** = ``"redshift:DescribeUsageLimits"``

Grants permission to describe usage limits

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeUsageLimits.html

#### Defined in

actions/redshift.ts:616

___

### DisableLogging

• **DisableLogging** = ``"redshift:DisableLogging"``

Grants permission to disable logging information, such as queries and connectio
n attempts, for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableLogging.html

#### Defined in

actions/redshift.ts:623

___

### DisableSnapshotCopy

• **DisableSnapshotCopy** = ``"redshift:DisableSnapshotCopy"``

Grants permission to disable the automatic copy of snapshots for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableSnapshotCopy.html

#### Defined in

actions/redshift.ts:629

___

### DisassociateDataShareConsumer

• **DisassociateDataShareConsumer** = ``"redshift:DisassociateDataShareConsumer"``

Grants permission to disassociate a consumer from a datashare

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisassociateDataShareConsumer.html

#### Defined in

actions/redshift.ts:635

___

### EnableLogging

• **EnableLogging** = ``"redshift:EnableLogging"``

Grants permission to enable logging information, such as queries and connection
attempts, for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableLogging.html

#### Defined in

actions/redshift.ts:642

___

### EnableSnapshotCopy

• **EnableSnapshotCopy** = ``"redshift:EnableSnapshotCopy"``

Grants permission to enable the automatic copy of snapshots for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableSnapshotCopy.html

#### Defined in

actions/redshift.ts:648

___

### ExecuteQuery

• **ExecuteQuery** = ``"redshift:ExecuteQuery"``

Grants permission to execute a query through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:654

___

### FailoverPrimaryCompute

• **FailoverPrimaryCompute** = ``"redshift:FailoverPrimaryCompute"``

Grants permission to failover the primary compute of an Multi-AZ cluster to ano
ther AZ

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_FailoverPrimaryCompute.html

#### Defined in

actions/redshift.ts:661

___

### FetchResults

• **FetchResults** = ``"redshift:FetchResults"``

Grants permission to fetch query results through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:667

___

### GetClusterCredentials

• **GetClusterCredentials** = ``"redshift:GetClusterCredentials"``

Grants permission to get temporary credentials to access an Amazon Redshift dat
abase by the specified AWS account

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html

#### Defined in

actions/redshift.ts:674

___

### GetClusterCredentialsWithIAM

• **GetClusterCredentialsWithIAM** = ``"redshift:GetClusterCredentialsWithIAM"``

Grants permission to get enhanced temporary credentials to access an Amazon Red
shift database by the specified AWS account

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentialsWithIAM.html

#### Defined in

actions/redshift.ts:681

___

### GetReservedNodeExchangeConfigurationOptions

• **GetReservedNodeExchangeConfigurationOptions** = ``"redshift:GetReservedNodeExchangeConfigurationOptions"``

Grants permission to get the configuration options for the reserved-node exchan
ge

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetReservedNodeExchangeConfigurationOptions.html

#### Defined in

actions/redshift.ts:688

___

### GetReservedNodeExchangeOfferings

• **GetReservedNodeExchangeOfferings** = ``"redshift:GetReservedNodeExchangeOfferings"``

Grants permission to get an array of DC2 ReservedNodeOfferings that matches the
payment type, term, and usage price of the given DC1 reserved node

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetReservedNodeExchangeOfferings.html

#### Defined in

actions/redshift.ts:695

___

### GetResourcePolicy

• **GetResourcePolicy** = ``"redshift:GetResourcePolicy"``

Grants permission to get the resource policy for a specified resource

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetResourcePolicy.html

#### Defined in

actions/redshift.ts:701

___

### JoinGroup

• **JoinGroup** = ``"redshift:JoinGroup"``

Grants permission to join the specified Amazon Redshift group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html

#### Defined in

actions/redshift.ts:707

___

### ListDatabases

• **ListDatabases** = ``"redshift:ListDatabases"``

Grants permission to list databases through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:713

___

### ListRecommendations

• **ListRecommendations** = ``"redshift:ListRecommendations"``

Grants permission to list Advisor recommendations

See API_ListRecommendations.html

#### Defined in

actions/redshift.ts:719

___

### ListSavedQueries

• **ListSavedQueries** = ``"redshift:ListSavedQueries"``

Grants permission to list saved queries through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:725

___

### ListSchemas

• **ListSchemas** = ``"redshift:ListSchemas"``

Grants permission to list schemas through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:731

___

### ListTables

• **ListTables** = ``"redshift:ListTables"``

Grants permission to list tables through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:737

___

### ModifyAquaConfiguration

• **ModifyAquaConfiguration** = ``"redshift:ModifyAquaConfiguration"``

Grants permission to modify the AQUA configuration of a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyAquaConfiguration.html

#### Defined in

actions/redshift.ts:743

___

### ModifyAuthenticationProfile

• **ModifyAuthenticationProfile** = ``"redshift:ModifyAuthenticationProfile"``

Grants permission to modify an existing Amazon Redshift authentication profile

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyAuthenticationProfile.html

#### Defined in

actions/redshift.ts:749

___

### ModifyCluster

• **ModifyCluster** = ``"redshift:ModifyCluster"``

Grants permission to modify the settings of a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyCluster.html

#### Defined in

actions/redshift.ts:755

___

### ModifyClusterDbRevision

• **ModifyClusterDbRevision** = ``"redshift:ModifyClusterDbRevision"``

Grants permission to modify the database revision of a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterDbRevision.html

#### Defined in

actions/redshift.ts:761

___

### ModifyClusterIamRoles

• **ModifyClusterIamRoles** = ``"redshift:ModifyClusterIamRoles"``

Grants permission to modify the list of AWS Identity and Access Management (IAM
) roles that can be used by a cluster to access other AWS services

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterIamRoles.html

#### Defined in

actions/redshift.ts:768

___

### ModifyClusterMaintenance

• **ModifyClusterMaintenance** = ``"redshift:ModifyClusterMaintenance"``

Grants permission to modify the maintenance settings of a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterMaintenance.html

#### Defined in

actions/redshift.ts:774

___

### ModifyClusterParameterGroup

• **ModifyClusterParameterGroup** = ``"redshift:ModifyClusterParameterGroup"``

Grants permission to modify the parameters of a parameter group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterParameterGroup.html

#### Defined in

actions/redshift.ts:780

___

### ModifyClusterSnapshot

• **ModifyClusterSnapshot** = ``"redshift:ModifyClusterSnapshot"``

Grants permission to modify the settings of a snapshot

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshot.html

#### Defined in

actions/redshift.ts:786

___

### ModifyClusterSnapshotSchedule

• **ModifyClusterSnapshotSchedule** = ``"redshift:ModifyClusterSnapshotSchedule"``

Grants permission to modify a snapshot schedule for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshotSchedule.html

#### Defined in

actions/redshift.ts:792

___

### ModifyClusterSubnetGroup

• **ModifyClusterSubnetGroup** = ``"redshift:ModifyClusterSubnetGroup"``

Grants permission to modify a cluster subnet group to include the specified lis
t of VPC subnets

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSubnetGroup.html

#### Defined in

actions/redshift.ts:799

___

### ModifyCustomDomainAssociation

• **ModifyCustomDomainAssociation** = ``"redshift:ModifyCustomDomainAssociation"``

Grants permission to modify a custom domain name for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyCustomDomainAssociation.html

#### Defined in

actions/redshift.ts:805

___

### ModifyEndpointAccess

• **ModifyEndpointAccess** = ``"redshift:ModifyEndpointAccess"``

Grants permission to modify a redshift-managed vpc endpoint

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyEndpointAccess.html

#### Defined in

actions/redshift.ts:811

___

### ModifyEventSubscription

• **ModifyEventSubscription** = ``"redshift:ModifyEventSubscription"``

Grants permission to modify an existing Amazon Redshift event notification subs
cription

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyEventSubscription.html

#### Defined in

actions/redshift.ts:818

___

### ModifyRedshiftIdcApplication

• **ModifyRedshiftIdcApplication** = ``"redshift:ModifyRedshiftIdcApplication"``

Grants permission to modify a redshift idc application

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyRedshiftIdcApplication.html

#### Defined in

actions/redshift.ts:824

___

### ModifySavedQuery

• **ModifySavedQuery** = ``"redshift:ModifySavedQuery"``

Grants permission to modify an existing saved query through the Amazon Redshift
console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:831

___

### ModifyScheduledAction

• **ModifyScheduledAction** = ``"redshift:ModifyScheduledAction"``

Grants permission to modify an existing Amazon Redshift scheduled action

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyScheduledAction.html

#### Defined in

actions/redshift.ts:837

___

### ModifySnapshotCopyRetentionPeriod

• **ModifySnapshotCopyRetentionPeriod** = ``"redshift:ModifySnapshotCopyRetentionPeriod"``

Grants permission to modify the number of days to retain snapshots in the desti
nation AWS Region after they are copied from the source AWS Region

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotCopyRetentionPeriod.html

#### Defined in

actions/redshift.ts:844

___

### ModifySnapshotSchedule

• **ModifySnapshotSchedule** = ``"redshift:ModifySnapshotSchedule"``

Grants permission to modify a snapshot schedule

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotSchedule.html

#### Defined in

actions/redshift.ts:850

___

### ModifyUsageLimit

• **ModifyUsageLimit** = ``"redshift:ModifyUsageLimit"``

Grants permission to modify a usage limit

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyUsageLimit.html

#### Defined in

actions/redshift.ts:856

___

### PauseCluster

• **PauseCluster** = ``"redshift:PauseCluster"``

Grants permission to pause a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_PauseCluster.html

#### Defined in

actions/redshift.ts:862

___

### PurchaseReservedNodeOffering

• **PurchaseReservedNodeOffering** = ``"redshift:PurchaseReservedNodeOffering"``

Grants permission to purchase a reserved node

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_PurchaseReservedNodeOffering.html

#### Defined in

actions/redshift.ts:868

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"redshift:PutResourcePolicy"``

Grants permission to update the resource policy for a specified resource

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/redshift.ts:874

___

### RebootCluster

• **RebootCluster** = ``"redshift:RebootCluster"``

Grants permission to reboot a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_RebootCluster.html

#### Defined in

actions/redshift.ts:880

___

### RejectDataShare

• **RejectDataShare** = ``"redshift:RejectDataShare"``

Grants permission to decline a datashare shared from another account

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_RejectDataShare.html

#### Defined in

actions/redshift.ts:886

___

### ResetClusterParameterGroup

• **ResetClusterParameterGroup** = ``"redshift:ResetClusterParameterGroup"``

Grants permission to set one or more parameters of a parameter group to their d
efault values and set the source values of the parameters to "engine-default"

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResetClusterParameterGroup.html

#### Defined in

actions/redshift.ts:893

___

### ResizeCluster

• **ResizeCluster** = ``"redshift:ResizeCluster"``

Grants permission to change the size of a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResizeCluster.html

#### Defined in

actions/redshift.ts:899

___

### RestoreFromClusterSnapshot

• **RestoreFromClusterSnapshot** = ``"redshift:RestoreFromClusterSnapshot"``

Grants permission to create a cluster from a snapshot

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreFromClusterSnapshot.html

#### Defined in

actions/redshift.ts:905

___

### RestoreTableFromClusterSnapshot

• **RestoreTableFromClusterSnapshot** = ``"redshift:RestoreTableFromClusterSnapshot"``

Grants permission to create a table from a table in an Amazon Redshift cluster
snapshot

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreTableFromClusterSnapshot.html

#### Defined in

actions/redshift.ts:912

___

### ResumeCluster

• **ResumeCluster** = ``"redshift:ResumeCluster"``

Grants permission to resume a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResumeCluster.html

#### Defined in

actions/redshift.ts:918

___

### RevokeClusterSecurityGroupIngress

• **RevokeClusterSecurityGroupIngress** = ``"redshift:RevokeClusterSecurityGroupIngress"``

Grants permission to revoke an ingress rule in an Amazon Redshift security grou
p for a previously authorized IP range or Amazon EC2 security group

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeClusterSecurityGroupIngress.html

#### Defined in

actions/redshift.ts:925

___

### RevokeEndpointAccess

• **RevokeEndpointAccess** = ``"redshift:RevokeEndpointAccess"``

Grants permission to revoke access for endpoint related activities for redshift
-managed vpc endpoint

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeEndpointAccess.html

#### Defined in

actions/redshift.ts:932

___

### RevokeSnapshotAccess

• **RevokeSnapshotAccess** = ``"redshift:RevokeSnapshotAccess"``

Grants permission to revoke access from the specified AWS account to restore a
snapshot

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeSnapshotAccess.html

#### Defined in

actions/redshift.ts:939

___

### RotateEncryptionKey

• **RotateEncryptionKey** = ``"redshift:RotateEncryptionKey"``

Grants permission to rotate an encryption key for a cluster

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_RotateEncryptionKey.html

#### Defined in

actions/redshift.ts:945

___

### UpdatePartnerStatus

• **UpdatePartnerStatus** = ``"redshift:UpdatePartnerStatus"``

Grants permission to update the status of a partner integration

See https://docs.aws.amazon.com/redshift/latest/APIReference/API_UpdatePartnerStatus.html

#### Defined in

actions/redshift.ts:951

___

### ViewQueriesFromConsole

• **ViewQueriesFromConsole** = ``"redshift:ViewQueriesFromConsole"``

Grants permission to view query results through the Amazon Redshift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:957

___

### ViewQueriesInConsole

• **ViewQueriesInConsole** = ``"redshift:ViewQueriesInConsole"``

Grants permission to terminate running queries and loads through the Amazon Red
shift console

See https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html

#### Defined in

actions/redshift.ts:964
