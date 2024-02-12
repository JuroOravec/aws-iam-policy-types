[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsIotActions

# Enumeration: AwsIotActions

All IAM policy actions for AWS IoT (IOT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html

2024-02-12T09:57:46.606Z

## Table of contents

### Enumeration Members

- [AcceptCertificateTransfer](AwsIotActions.md#acceptcertificatetransfer)
- [AddThingToBillingGroup](AwsIotActions.md#addthingtobillinggroup)
- [AddThingToThingGroup](AwsIotActions.md#addthingtothinggroup)
- [AssociateTargetsWithJob](AwsIotActions.md#associatetargetswithjob)
- [AttachPolicy](AwsIotActions.md#attachpolicy)
- [AttachPrincipalPolicy](AwsIotActions.md#attachprincipalpolicy)
- [AttachSecurityProfile](AwsIotActions.md#attachsecurityprofile)
- [AttachThingPrincipal](AwsIotActions.md#attachthingprincipal)
- [CancelAuditMitigationActionsTask](AwsIotActions.md#cancelauditmitigationactionstask)
- [CancelAuditTask](AwsIotActions.md#cancelaudittask)
- [CancelCertificateTransfer](AwsIotActions.md#cancelcertificatetransfer)
- [CancelDetectMitigationActionsTask](AwsIotActions.md#canceldetectmitigationactionstask)
- [CancelJob](AwsIotActions.md#canceljob)
- [CancelJobExecution](AwsIotActions.md#canceljobexecution)
- [ClearDefaultAuthorizer](AwsIotActions.md#cleardefaultauthorizer)
- [CloseTunnel](AwsIotActions.md#closetunnel)
- [ConfirmTopicRuleDestination](AwsIotActions.md#confirmtopicruledestination)
- [Connect](AwsIotActions.md#connect)
- [CreateAuditSuppression](AwsIotActions.md#createauditsuppression)
- [CreateAuthorizer](AwsIotActions.md#createauthorizer)
- [CreateBillingGroup](AwsIotActions.md#createbillinggroup)
- [CreateCertificateFromCsr](AwsIotActions.md#createcertificatefromcsr)
- [CreateCertificateProvider](AwsIotActions.md#createcertificateprovider)
- [CreateCustomMetric](AwsIotActions.md#createcustommetric)
- [CreateDimension](AwsIotActions.md#createdimension)
- [CreateDomainConfiguration](AwsIotActions.md#createdomainconfiguration)
- [CreateDynamicThingGroup](AwsIotActions.md#createdynamicthinggroup)
- [CreateFleetMetric](AwsIotActions.md#createfleetmetric)
- [CreateJob](AwsIotActions.md#createjob)
- [CreateJobTemplate](AwsIotActions.md#createjobtemplate)
- [CreateKeysAndCertificate](AwsIotActions.md#createkeysandcertificate)
- [CreateMitigationAction](AwsIotActions.md#createmitigationaction)
- [CreateOTAUpdate](AwsIotActions.md#createotaupdate)
- [CreatePackage](AwsIotActions.md#createpackage)
- [CreatePackageVersion](AwsIotActions.md#createpackageversion)
- [CreatePolicy](AwsIotActions.md#createpolicy)
- [CreatePolicyVersion](AwsIotActions.md#createpolicyversion)
- [CreateProvisioningClaim](AwsIotActions.md#createprovisioningclaim)
- [CreateProvisioningTemplate](AwsIotActions.md#createprovisioningtemplate)
- [CreateProvisioningTemplateVersion](AwsIotActions.md#createprovisioningtemplateversion)
- [CreateRoleAlias](AwsIotActions.md#createrolealias)
- [CreateScheduledAudit](AwsIotActions.md#createscheduledaudit)
- [CreateSecurityProfile](AwsIotActions.md#createsecurityprofile)
- [CreateStream](AwsIotActions.md#createstream)
- [CreateThing](AwsIotActions.md#creatething)
- [CreateThingGroup](AwsIotActions.md#createthinggroup)
- [CreateThingType](AwsIotActions.md#createthingtype)
- [CreateTopicRule](AwsIotActions.md#createtopicrule)
- [CreateTopicRuleDestination](AwsIotActions.md#createtopicruledestination)
- [DeleteAccountAuditConfiguration](AwsIotActions.md#deleteaccountauditconfiguration)
- [DeleteAuditSuppression](AwsIotActions.md#deleteauditsuppression)
- [DeleteAuthorizer](AwsIotActions.md#deleteauthorizer)
- [DeleteBillingGroup](AwsIotActions.md#deletebillinggroup)
- [DeleteCACertificate](AwsIotActions.md#deletecacertificate)
- [DeleteCertificate](AwsIotActions.md#deletecertificate)
- [DeleteCertificateProvider](AwsIotActions.md#deletecertificateprovider)
- [DeleteCustomMetric](AwsIotActions.md#deletecustommetric)
- [DeleteDimension](AwsIotActions.md#deletedimension)
- [DeleteDomainConfiguration](AwsIotActions.md#deletedomainconfiguration)
- [DeleteDynamicThingGroup](AwsIotActions.md#deletedynamicthinggroup)
- [DeleteFleetMetric](AwsIotActions.md#deletefleetmetric)
- [DeleteJob](AwsIotActions.md#deletejob)
- [DeleteJobExecution](AwsIotActions.md#deletejobexecution)
- [DeleteJobTemplate](AwsIotActions.md#deletejobtemplate)
- [DeleteMitigationAction](AwsIotActions.md#deletemitigationaction)
- [DeleteOTAUpdate](AwsIotActions.md#deleteotaupdate)
- [DeletePackage](AwsIotActions.md#deletepackage)
- [DeletePackageVersion](AwsIotActions.md#deletepackageversion)
- [DeletePolicy](AwsIotActions.md#deletepolicy)
- [DeletePolicyVersion](AwsIotActions.md#deletepolicyversion)
- [DeleteProvisioningTemplate](AwsIotActions.md#deleteprovisioningtemplate)
- [DeleteProvisioningTemplateVersion](AwsIotActions.md#deleteprovisioningtemplateversion)
- [DeleteRegistrationCode](AwsIotActions.md#deleteregistrationcode)
- [DeleteRoleAlias](AwsIotActions.md#deleterolealias)
- [DeleteScheduledAudit](AwsIotActions.md#deletescheduledaudit)
- [DeleteSecurityProfile](AwsIotActions.md#deletesecurityprofile)
- [DeleteStream](AwsIotActions.md#deletestream)
- [DeleteThing](AwsIotActions.md#deletething)
- [DeleteThingGroup](AwsIotActions.md#deletethinggroup)
- [DeleteThingShadow](AwsIotActions.md#deletethingshadow)
- [DeleteThingType](AwsIotActions.md#deletethingtype)
- [DeleteTopicRule](AwsIotActions.md#deletetopicrule)
- [DeleteTopicRuleDestination](AwsIotActions.md#deletetopicruledestination)
- [DeleteV2LoggingLevel](AwsIotActions.md#deletev2logginglevel)
- [DeprecateThingType](AwsIotActions.md#deprecatethingtype)
- [DescribeAccountAuditConfiguration](AwsIotActions.md#describeaccountauditconfiguration)
- [DescribeAuditFinding](AwsIotActions.md#describeauditfinding)
- [DescribeAuditMitigationActionsTask](AwsIotActions.md#describeauditmitigationactionstask)
- [DescribeAuditSuppression](AwsIotActions.md#describeauditsuppression)
- [DescribeAuditTask](AwsIotActions.md#describeaudittask)
- [DescribeAuthorizer](AwsIotActions.md#describeauthorizer)
- [DescribeBillingGroup](AwsIotActions.md#describebillinggroup)
- [DescribeCACertificate](AwsIotActions.md#describecacertificate)
- [DescribeCertificate](AwsIotActions.md#describecertificate)
- [DescribeCertificateProvider](AwsIotActions.md#describecertificateprovider)
- [DescribeCustomMetric](AwsIotActions.md#describecustommetric)
- [DescribeDefaultAuthorizer](AwsIotActions.md#describedefaultauthorizer)
- [DescribeDetectMitigationActionsTask](AwsIotActions.md#describedetectmitigationactionstask)
- [DescribeDimension](AwsIotActions.md#describedimension)
- [DescribeDomainConfiguration](AwsIotActions.md#describedomainconfiguration)
- [DescribeEndpoint](AwsIotActions.md#describeendpoint)
- [DescribeEventConfigurations](AwsIotActions.md#describeeventconfigurations)
- [DescribeFleetMetric](AwsIotActions.md#describefleetmetric)
- [DescribeIndex](AwsIotActions.md#describeindex)
- [DescribeJob](AwsIotActions.md#describejob)
- [DescribeJobExecution](AwsIotActions.md#describejobexecution)
- [DescribeJobTemplate](AwsIotActions.md#describejobtemplate)
- [DescribeManagedJobTemplate](AwsIotActions.md#describemanagedjobtemplate)
- [DescribeMitigationAction](AwsIotActions.md#describemitigationaction)
- [DescribeProvisioningTemplate](AwsIotActions.md#describeprovisioningtemplate)
- [DescribeProvisioningTemplateVersion](AwsIotActions.md#describeprovisioningtemplateversion)
- [DescribeRoleAlias](AwsIotActions.md#describerolealias)
- [DescribeScheduledAudit](AwsIotActions.md#describescheduledaudit)
- [DescribeSecurityProfile](AwsIotActions.md#describesecurityprofile)
- [DescribeStream](AwsIotActions.md#describestream)
- [DescribeThing](AwsIotActions.md#describething)
- [DescribeThingGroup](AwsIotActions.md#describethinggroup)
- [DescribeThingRegistrationTask](AwsIotActions.md#describethingregistrationtask)
- [DescribeThingType](AwsIotActions.md#describethingtype)
- [DescribeTunnel](AwsIotActions.md#describetunnel)
- [DetachPolicy](AwsIotActions.md#detachpolicy)
- [DetachPrincipalPolicy](AwsIotActions.md#detachprincipalpolicy)
- [DetachSecurityProfile](AwsIotActions.md#detachsecurityprofile)
- [DetachThingPrincipal](AwsIotActions.md#detachthingprincipal)
- [DisableTopicRule](AwsIotActions.md#disabletopicrule)
- [EnableTopicRule](AwsIotActions.md#enabletopicrule)
- [GetBehaviorModelTrainingSummaries](AwsIotActions.md#getbehaviormodeltrainingsummaries)
- [GetBucketsAggregation](AwsIotActions.md#getbucketsaggregation)
- [GetCardinality](AwsIotActions.md#getcardinality)
- [GetEffectivePolicies](AwsIotActions.md#geteffectivepolicies)
- [GetIndexingConfiguration](AwsIotActions.md#getindexingconfiguration)
- [GetJobDocument](AwsIotActions.md#getjobdocument)
- [GetLoggingOptions](AwsIotActions.md#getloggingoptions)
- [GetOTAUpdate](AwsIotActions.md#getotaupdate)
- [GetPackage](AwsIotActions.md#getpackage)
- [GetPackageConfiguration](AwsIotActions.md#getpackageconfiguration)
- [GetPackageVersion](AwsIotActions.md#getpackageversion)
- [GetPercentiles](AwsIotActions.md#getpercentiles)
- [GetPolicy](AwsIotActions.md#getpolicy)
- [GetPolicyVersion](AwsIotActions.md#getpolicyversion)
- [GetRegistrationCode](AwsIotActions.md#getregistrationcode)
- [GetRetainedMessage](AwsIotActions.md#getretainedmessage)
- [GetStatistics](AwsIotActions.md#getstatistics)
- [GetThingShadow](AwsIotActions.md#getthingshadow)
- [GetTopicRule](AwsIotActions.md#gettopicrule)
- [GetTopicRuleDestination](AwsIotActions.md#gettopicruledestination)
- [GetV2LoggingOptions](AwsIotActions.md#getv2loggingoptions)
- [ListActiveViolations](AwsIotActions.md#listactiveviolations)
- [ListAttachedPolicies](AwsIotActions.md#listattachedpolicies)
- [ListAuditFindings](AwsIotActions.md#listauditfindings)
- [ListAuditMitigationActionsExecutions](AwsIotActions.md#listauditmitigationactionsexecutions)
- [ListAuditMitigationActionsTasks](AwsIotActions.md#listauditmitigationactionstasks)
- [ListAuditSuppressions](AwsIotActions.md#listauditsuppressions)
- [ListAuditTasks](AwsIotActions.md#listaudittasks)
- [ListAuthorizers](AwsIotActions.md#listauthorizers)
- [ListBillingGroups](AwsIotActions.md#listbillinggroups)
- [ListCACertificates](AwsIotActions.md#listcacertificates)
- [ListCertificateProviders](AwsIotActions.md#listcertificateproviders)
- [ListCertificates](AwsIotActions.md#listcertificates)
- [ListCertificatesByCA](AwsIotActions.md#listcertificatesbyca)
- [ListCustomMetrics](AwsIotActions.md#listcustommetrics)
- [ListDetectMitigationActionsExecutions](AwsIotActions.md#listdetectmitigationactionsexecutions)
- [ListDetectMitigationActionsTasks](AwsIotActions.md#listdetectmitigationactionstasks)
- [ListDimensions](AwsIotActions.md#listdimensions)
- [ListDomainConfigurations](AwsIotActions.md#listdomainconfigurations)
- [ListFleetMetrics](AwsIotActions.md#listfleetmetrics)
- [ListIndices](AwsIotActions.md#listindices)
- [ListJobExecutionsForJob](AwsIotActions.md#listjobexecutionsforjob)
- [ListJobExecutionsForThing](AwsIotActions.md#listjobexecutionsforthing)
- [ListJobTemplates](AwsIotActions.md#listjobtemplates)
- [ListJobs](AwsIotActions.md#listjobs)
- [ListManagedJobTemplates](AwsIotActions.md#listmanagedjobtemplates)
- [ListMetricValues](AwsIotActions.md#listmetricvalues)
- [ListMitigationActions](AwsIotActions.md#listmitigationactions)
- [ListNamedShadowsForThing](AwsIotActions.md#listnamedshadowsforthing)
- [ListOTAUpdates](AwsIotActions.md#listotaupdates)
- [ListOutgoingCertificates](AwsIotActions.md#listoutgoingcertificates)
- [ListPackageVersions](AwsIotActions.md#listpackageversions)
- [ListPackages](AwsIotActions.md#listpackages)
- [ListPolicies](AwsIotActions.md#listpolicies)
- [ListPolicyPrincipals](AwsIotActions.md#listpolicyprincipals)
- [ListPolicyVersions](AwsIotActions.md#listpolicyversions)
- [ListPrincipalPolicies](AwsIotActions.md#listprincipalpolicies)
- [ListPrincipalThings](AwsIotActions.md#listprincipalthings)
- [ListProvisioningTemplateVersions](AwsIotActions.md#listprovisioningtemplateversions)
- [ListProvisioningTemplates](AwsIotActions.md#listprovisioningtemplates)
- [ListRelatedResourcesForAuditFinding](AwsIotActions.md#listrelatedresourcesforauditfinding)
- [ListRetainedMessages](AwsIotActions.md#listretainedmessages)
- [ListRoleAliases](AwsIotActions.md#listrolealiases)
- [ListScheduledAudits](AwsIotActions.md#listscheduledaudits)
- [ListSecurityProfiles](AwsIotActions.md#listsecurityprofiles)
- [ListSecurityProfilesForTarget](AwsIotActions.md#listsecurityprofilesfortarget)
- [ListStreams](AwsIotActions.md#liststreams)
- [ListTagsForResource](AwsIotActions.md#listtagsforresource)
- [ListTargetsForPolicy](AwsIotActions.md#listtargetsforpolicy)
- [ListTargetsForSecurityProfile](AwsIotActions.md#listtargetsforsecurityprofile)
- [ListThingGroups](AwsIotActions.md#listthinggroups)
- [ListThingGroupsForThing](AwsIotActions.md#listthinggroupsforthing)
- [ListThingPrincipals](AwsIotActions.md#listthingprincipals)
- [ListThingRegistrationTaskReports](AwsIotActions.md#listthingregistrationtaskreports)
- [ListThingRegistrationTasks](AwsIotActions.md#listthingregistrationtasks)
- [ListThingTypes](AwsIotActions.md#listthingtypes)
- [ListThings](AwsIotActions.md#listthings)
- [ListThingsInBillingGroup](AwsIotActions.md#listthingsinbillinggroup)
- [ListThingsInThingGroup](AwsIotActions.md#listthingsinthinggroup)
- [ListTopicRuleDestinations](AwsIotActions.md#listtopicruledestinations)
- [ListTopicRules](AwsIotActions.md#listtopicrules)
- [ListTunnels](AwsIotActions.md#listtunnels)
- [ListV2LoggingLevels](AwsIotActions.md#listv2logginglevels)
- [ListViolationEvents](AwsIotActions.md#listviolationevents)
- [OpenTunnel](AwsIotActions.md#opentunnel)
- [Publish](AwsIotActions.md#publish)
- [PutVerificationStateOnViolation](AwsIotActions.md#putverificationstateonviolation)
- [Receive](AwsIotActions.md#receive)
- [RegisterCACertificate](AwsIotActions.md#registercacertificate)
- [RegisterCertificate](AwsIotActions.md#registercertificate)
- [RegisterCertificateWithoutCA](AwsIotActions.md#registercertificatewithoutca)
- [RegisterThing](AwsIotActions.md#registerthing)
- [RejectCertificateTransfer](AwsIotActions.md#rejectcertificatetransfer)
- [RemoveThingFromBillingGroup](AwsIotActions.md#removethingfrombillinggroup)
- [RemoveThingFromThingGroup](AwsIotActions.md#removethingfromthinggroup)
- [ReplaceTopicRule](AwsIotActions.md#replacetopicrule)
- [RetainPublish](AwsIotActions.md#retainpublish)
- [RotateTunnelAccessToken](AwsIotActions.md#rotatetunnelaccesstoken)
- [SearchIndex](AwsIotActions.md#searchindex)
- [SetDefaultAuthorizer](AwsIotActions.md#setdefaultauthorizer)
- [SetDefaultPolicyVersion](AwsIotActions.md#setdefaultpolicyversion)
- [SetLoggingOptions](AwsIotActions.md#setloggingoptions)
- [SetV2LoggingLevel](AwsIotActions.md#setv2logginglevel)
- [SetV2LoggingOptions](AwsIotActions.md#setv2loggingoptions)
- [StartAuditMitigationActionsTask](AwsIotActions.md#startauditmitigationactionstask)
- [StartDetectMitigationActionsTask](AwsIotActions.md#startdetectmitigationactionstask)
- [StartOnDemandAuditTask](AwsIotActions.md#startondemandaudittask)
- [StartThingRegistrationTask](AwsIotActions.md#startthingregistrationtask)
- [StopThingRegistrationTask](AwsIotActions.md#stopthingregistrationtask)
- [Subscribe](AwsIotActions.md#subscribe)
- [TagResource](AwsIotActions.md#tagresource)
- [TestAuthorization](AwsIotActions.md#testauthorization)
- [TestInvokeAuthorizer](AwsIotActions.md#testinvokeauthorizer)
- [TransferCertificate](AwsIotActions.md#transfercertificate)
- [UntagResource](AwsIotActions.md#untagresource)
- [UpdateAccountAuditConfiguration](AwsIotActions.md#updateaccountauditconfiguration)
- [UpdateAuditSuppression](AwsIotActions.md#updateauditsuppression)
- [UpdateAuthorizer](AwsIotActions.md#updateauthorizer)
- [UpdateBillingGroup](AwsIotActions.md#updatebillinggroup)
- [UpdateCACertificate](AwsIotActions.md#updatecacertificate)
- [UpdateCertificate](AwsIotActions.md#updatecertificate)
- [UpdateCertificateProvider](AwsIotActions.md#updatecertificateprovider)
- [UpdateCustomMetric](AwsIotActions.md#updatecustommetric)
- [UpdateDimension](AwsIotActions.md#updatedimension)
- [UpdateDomainConfiguration](AwsIotActions.md#updatedomainconfiguration)
- [UpdateDynamicThingGroup](AwsIotActions.md#updatedynamicthinggroup)
- [UpdateEventConfigurations](AwsIotActions.md#updateeventconfigurations)
- [UpdateFleetMetric](AwsIotActions.md#updatefleetmetric)
- [UpdateIndexingConfiguration](AwsIotActions.md#updateindexingconfiguration)
- [UpdateJob](AwsIotActions.md#updatejob)
- [UpdateMitigationAction](AwsIotActions.md#updatemitigationaction)
- [UpdatePackage](AwsIotActions.md#updatepackage)
- [UpdatePackageConfiguration](AwsIotActions.md#updatepackageconfiguration)
- [UpdatePackageVersion](AwsIotActions.md#updatepackageversion)
- [UpdateProvisioningTemplate](AwsIotActions.md#updateprovisioningtemplate)
- [UpdateRoleAlias](AwsIotActions.md#updaterolealias)
- [UpdateScheduledAudit](AwsIotActions.md#updatescheduledaudit)
- [UpdateSecurityProfile](AwsIotActions.md#updatesecurityprofile)
- [UpdateStream](AwsIotActions.md#updatestream)
- [UpdateThing](AwsIotActions.md#updatething)
- [UpdateThingGroup](AwsIotActions.md#updatethinggroup)
- [UpdateThingGroupsForThing](AwsIotActions.md#updatethinggroupsforthing)
- [UpdateThingShadow](AwsIotActions.md#updatethingshadow)
- [UpdateTopicRuleDestination](AwsIotActions.md#updatetopicruledestination)
- [ValidateSecurityProfileBehaviors](AwsIotActions.md#validatesecurityprofilebehaviors)

## Enumeration Members

### AcceptCertificateTransfer

• **AcceptCertificateTransfer** = ``"iot:AcceptCertificateTransfer"``

Grants permission to accept a pending certificate transfer

See https://docs.aws.amazon.com/iot/latest/apireference/API_AcceptCertificateTransfer.html

#### Defined in

actions/iot.ts:17

___

### AddThingToBillingGroup

• **AddThingToBillingGroup** = ``"iot:AddThingToBillingGroup"``

Grants permission to add a thing to the specified billing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToBillingGroup.html

#### Defined in

actions/iot.ts:23

___

### AddThingToThingGroup

• **AddThingToThingGroup** = ``"iot:AddThingToThingGroup"``

Grants permission to add a thing to the specified thing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToThingGroup.html

#### Defined in

actions/iot.ts:29

___

### AssociateTargetsWithJob

• **AssociateTargetsWithJob** = ``"iot:AssociateTargetsWithJob"``

Grants permission to associate a group with a continuous job

See https://docs.aws.amazon.com/iot/latest/apireference/API_AssociateTargetsWithJob.html

#### Defined in

actions/iot.ts:35

___

### AttachPolicy

• **AttachPolicy** = ``"iot:AttachPolicy"``

Grants permission to attach a policy to the specified target

See https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPolicy.html

#### Defined in

actions/iot.ts:41

___

### AttachPrincipalPolicy

• **AttachPrincipalPolicy** = ``"iot:AttachPrincipalPolicy"``

Grants permission to attach the specified policy to the specified principal (ce
rtificate or other credential)

See https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPrincipalPolicy.html

#### Defined in

actions/iot.ts:48

___

### AttachSecurityProfile

• **AttachSecurityProfile** = ``"iot:AttachSecurityProfile"``

Grants permission to associate a Device Defender security profile with a thing
group or with this account

See https://docs.aws.amazon.com/iot/latest/apireference/API_AttachSecurityProfile.html

#### Defined in

actions/iot.ts:55

___

### AttachThingPrincipal

• **AttachThingPrincipal** = ``"iot:AttachThingPrincipal"``

Grants permission to attach the specified principal to the specified thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_AttachThingPrincipal.html

#### Defined in

actions/iot.ts:61

___

### CancelAuditMitigationActionsTask

• **CancelAuditMitigationActionsTask** = ``"iot:CancelAuditMitigationActionsTask"``

Grants permission to cancel a mitigation action task that is in progress

See https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditMitigationActionsTask.html

#### Defined in

actions/iot.ts:67

___

### CancelAuditTask

• **CancelAuditTask** = ``"iot:CancelAuditTask"``

Grants permission to cancel an audit that is in progress. The audit can be eith
er scheduled or on-demand

See https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditTask.html

#### Defined in

actions/iot.ts:74

___

### CancelCertificateTransfer

• **CancelCertificateTransfer** = ``"iot:CancelCertificateTransfer"``

Grants permission to cancel a pending transfer for the specified certificate

See https://docs.aws.amazon.com/iot/latest/apireference/API_CancelCertificateTransfer.html

#### Defined in

actions/iot.ts:80

___

### CancelDetectMitigationActionsTask

• **CancelDetectMitigationActionsTask** = ``"iot:CancelDetectMitigationActionsTask"``

Grants permission to cancel a Device Defender ML Detect mitigation action

See https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDetectMitigationActionsTask.html

#### Defined in

actions/iot.ts:86

___

### CancelJob

• **CancelJob** = ``"iot:CancelJob"``

Grants permission to cancel a job

See https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJob.html

#### Defined in

actions/iot.ts:92

___

### CancelJobExecution

• **CancelJobExecution** = ``"iot:CancelJobExecution"``

Grants permission to cancel a job execution on a particular device

See https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJobExecution.html

#### Defined in

actions/iot.ts:98

___

### ClearDefaultAuthorizer

• **ClearDefaultAuthorizer** = ``"iot:ClearDefaultAuthorizer"``

Grants permission to clear the default authorizer

See https://docs.aws.amazon.com/iot/latest/apireference/API_ClearDefaultAuthorizer.html

#### Defined in

actions/iot.ts:104

___

### CloseTunnel

• **CloseTunnel** = ``"iot:CloseTunnel"``

Grants permission to close a tunnel

See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_CloseTunnel.html

#### Defined in

actions/iot.ts:110

___

### ConfirmTopicRuleDestination

• **ConfirmTopicRuleDestination** = ``"iot:ConfirmTopicRuleDestination"``

Grants permission to confirm a http url TopicRuleDestinationDestination

See https://docs.aws.amazon.com/iot/latest/apireference/API_ConfirmTopicRuleDestination.html

#### Defined in

actions/iot.ts:116

___

### Connect

• **Connect** = ``"iot:Connect"``

Grants permission to connect as the specified client

See https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html

#### Defined in

actions/iot.ts:122

___

### CreateAuditSuppression

• **CreateAuditSuppression** = ``"iot:CreateAuditSuppression"``

Grants permission to create a Device Defender audit suppression

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateAuditSuppression.html

#### Defined in

actions/iot.ts:128

___

### CreateAuthorizer

• **CreateAuthorizer** = ``"iot:CreateAuthorizer"``

Grants permission to create an authorizer

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateAuthorizer.html

#### Defined in

actions/iot.ts:134

___

### CreateBillingGroup

• **CreateBillingGroup** = ``"iot:CreateBillingGroup"``

Grants permission to create a billing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateBillingGroup.html

#### Defined in

actions/iot.ts:140

___

### CreateCertificateFromCsr

• **CreateCertificateFromCsr** = ``"iot:CreateCertificateFromCsr"``

Grants permission to create an X.509 certificate using the specified certificat
e signing request

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html

#### Defined in

actions/iot.ts:147

___

### CreateCertificateProvider

• **CreateCertificateProvider** = ``"iot:CreateCertificateProvider"``

Grants permission to create a certificate provider

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateProvider.html

#### Defined in

actions/iot.ts:153

___

### CreateCustomMetric

• **CreateCustomMetric** = ``"iot:CreateCustomMetric"``

Grants permission to create a custom metric for device side metric reporting an
d monitoring

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCustomMetric.html

#### Defined in

actions/iot.ts:160

___

### CreateDimension

• **CreateDimension** = ``"iot:CreateDimension"``

Grants permission to define a dimension that can be used to to limit the scope
of a metric used in a security profile

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDimension.html

#### Defined in

actions/iot.ts:167

___

### CreateDomainConfiguration

• **CreateDomainConfiguration** = ``"iot:CreateDomainConfiguration"``

Grants permission to create a domain configuration

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDomainConfiguration.html

#### Defined in

actions/iot.ts:173

___

### CreateDynamicThingGroup

• **CreateDynamicThingGroup** = ``"iot:CreateDynamicThingGroup"``

Grants permission to create a Dynamic Thing Group

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDynamicThingGroup.html

#### Defined in

actions/iot.ts:179

___

### CreateFleetMetric

• **CreateFleetMetric** = ``"iot:CreateFleetMetric"``

Grants permission to create a fleet metric

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateFleetMetric.html

#### Defined in

actions/iot.ts:185

___

### CreateJob

• **CreateJob** = ``"iot:CreateJob"``

Grants permission to create a job

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateJob.html

#### Defined in

actions/iot.ts:191

___

### CreateJobTemplate

• **CreateJobTemplate** = ``"iot:CreateJobTemplate"``

Grants permission to create a job template

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateJobTemplate.html

#### Defined in

actions/iot.ts:197

___

### CreateKeysAndCertificate

• **CreateKeysAndCertificate** = ``"iot:CreateKeysAndCertificate"``

Grants permission to create a 2048 bit RSA key pair and issues an X.509 certifi
cate using the issued public key

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html

#### Defined in

actions/iot.ts:204

___

### CreateMitigationAction

• **CreateMitigationAction** = ``"iot:CreateMitigationAction"``

Grants permission to define an action that can be applied to audit findings by
using StartAuditMitigationActionsTask

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateMitigationAction.html

#### Defined in

actions/iot.ts:211

___

### CreateOTAUpdate

• **CreateOTAUpdate** = ``"iot:CreateOTAUpdate"``

Grants permission to create an OTA update job

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateOTAUpdate.html

#### Defined in

actions/iot.ts:217

___

### CreatePackage

• **CreatePackage** = ``"iot:CreatePackage"``

Grants permission to create a software package that you can deploy to your devi
ces

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePackage.html

#### Defined in

actions/iot.ts:224

___

### CreatePackageVersion

• **CreatePackageVersion** = ``"iot:CreatePackageVersion"``

Grants permission to create a version under the specified package

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePackageVersion.html

#### Defined in

actions/iot.ts:230

___

### CreatePolicy

• **CreatePolicy** = ``"iot:CreatePolicy"``

Grants permission to create an AWS IoT policy

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicy.html

#### Defined in

actions/iot.ts:236

___

### CreatePolicyVersion

• **CreatePolicyVersion** = ``"iot:CreatePolicyVersion"``

Grants permission to create a new version of the specified AWS IoT policy

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicyVersion.html

#### Defined in

actions/iot.ts:242

___

### CreateProvisioningClaim

• **CreateProvisioningClaim** = ``"iot:CreateProvisioningClaim"``

Grants permission to create a provisioning claim

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningClaim.html

#### Defined in

actions/iot.ts:248

___

### CreateProvisioningTemplate

• **CreateProvisioningTemplate** = ``"iot:CreateProvisioningTemplate"``

Grants permission to create a fleet provisioning template

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html

#### Defined in

actions/iot.ts:254

___

### CreateProvisioningTemplateVersion

• **CreateProvisioningTemplateVersion** = ``"iot:CreateProvisioningTemplateVersion"``

Grants permission to create a new version of a fleet provisioning template

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplateVersion.html

#### Defined in

actions/iot.ts:260

___

### CreateRoleAlias

• **CreateRoleAlias** = ``"iot:CreateRoleAlias"``

Grants permission to create a role alias

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateRoleAlias.html

#### Defined in

actions/iot.ts:266

___

### CreateScheduledAudit

• **CreateScheduledAudit** = ``"iot:CreateScheduledAudit"``

Grants permission to create a scheduled audit that is run at a specified time i
nterval

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateScheduledAudit.html

#### Defined in

actions/iot.ts:273

___

### CreateSecurityProfile

• **CreateSecurityProfile** = ``"iot:CreateSecurityProfile"``

Grants permission to create a Device Defender security profile

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateSecurityProfile.html

#### Defined in

actions/iot.ts:279

___

### CreateStream

• **CreateStream** = ``"iot:CreateStream"``

Grants permission to create a new AWS IoT stream

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateStream.html

#### Defined in

actions/iot.ts:285

___

### CreateThing

• **CreateThing** = ``"iot:CreateThing"``

Grants permission to create a thing in the thing registry

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThing.html

#### Defined in

actions/iot.ts:291

___

### CreateThingGroup

• **CreateThingGroup** = ``"iot:CreateThingGroup"``

Grants permission to create a thing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThingGroup.html

#### Defined in

actions/iot.ts:297

___

### CreateThingType

• **CreateThingType** = ``"iot:CreateThingType"``

Grants permission to create a new thing type

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThingType.html

#### Defined in

actions/iot.ts:303

___

### CreateTopicRule

• **CreateTopicRule** = ``"iot:CreateTopicRule"``

Grants permission to create a rule

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateTopicRule.html

#### Defined in

actions/iot.ts:309

___

### CreateTopicRuleDestination

• **CreateTopicRuleDestination** = ``"iot:CreateTopicRuleDestination"``

Grants permission to create a TopicRuleDestination

See https://docs.aws.amazon.com/iot/latest/apireference/API_CreateTopicRuleDestination.html

#### Defined in

actions/iot.ts:315

___

### DeleteAccountAuditConfiguration

• **DeleteAccountAuditConfiguration** = ``"iot:DeleteAccountAuditConfiguration"``

Grants permission to delete the audit configuration associated with the account

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAccountAuditConfiguration.html

#### Defined in

actions/iot.ts:321

___

### DeleteAuditSuppression

• **DeleteAuditSuppression** = ``"iot:DeleteAuditSuppression"``

Grants permission to delete a Device Defender audit suppression

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuditSuppression.html

#### Defined in

actions/iot.ts:327

___

### DeleteAuthorizer

• **DeleteAuthorizer** = ``"iot:DeleteAuthorizer"``

Grants permission to delete the specified authorizer

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuthorizer.html

#### Defined in

actions/iot.ts:333

___

### DeleteBillingGroup

• **DeleteBillingGroup** = ``"iot:DeleteBillingGroup"``

Grants permission to delete the specified billing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteBillingGroup.html

#### Defined in

actions/iot.ts:339

___

### DeleteCACertificate

• **DeleteCACertificate** = ``"iot:DeleteCACertificate"``

Grants permission to delete a registered CA certificate

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCACertificate.html

#### Defined in

actions/iot.ts:345

___

### DeleteCertificate

• **DeleteCertificate** = ``"iot:DeleteCertificate"``

Grants permission to delete the specified certificate

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCertificate.html

#### Defined in

actions/iot.ts:351

___

### DeleteCertificateProvider

• **DeleteCertificateProvider** = ``"iot:DeleteCertificateProvider"``

Grants permission to delete a certificate provider

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCertificateProvider.html

#### Defined in

actions/iot.ts:357

___

### DeleteCustomMetric

• **DeleteCustomMetric** = ``"iot:DeleteCustomMetric"``

Grants permission to deletes the specified custom metric from your AWS account

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCustomMetric.html

#### Defined in

actions/iot.ts:363

___

### DeleteDimension

• **DeleteDimension** = ``"iot:DeleteDimension"``

Grants permission to remove the specified dimension from your AWS account

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDimension.html

#### Defined in

actions/iot.ts:369

___

### DeleteDomainConfiguration

• **DeleteDomainConfiguration** = ``"iot:DeleteDomainConfiguration"``

Grants permission to delete a domain configuration

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDomainConfiguration.html

#### Defined in

actions/iot.ts:375

___

### DeleteDynamicThingGroup

• **DeleteDynamicThingGroup** = ``"iot:DeleteDynamicThingGroup"``

Grants permission to delete the specified Dynamic Thing Group

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDynamicThingGroup.html

#### Defined in

actions/iot.ts:381

___

### DeleteFleetMetric

• **DeleteFleetMetric** = ``"iot:DeleteFleetMetric"``

Grants permission to delete the specified fleet metric

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteFleetMetric.html

#### Defined in

actions/iot.ts:387

___

### DeleteJob

• **DeleteJob** = ``"iot:DeleteJob"``

Grants permission to delete a job and its related job executions

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJob.html

#### Defined in

actions/iot.ts:393

___

### DeleteJobExecution

• **DeleteJobExecution** = ``"iot:DeleteJobExecution"``

Grants permission to delete a job execution

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJobExecution.html

#### Defined in

actions/iot.ts:399

___

### DeleteJobTemplate

• **DeleteJobTemplate** = ``"iot:DeleteJobTemplate"``

Grants permission to delete a job template

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJobTemplate.html

#### Defined in

actions/iot.ts:405

___

### DeleteMitigationAction

• **DeleteMitigationAction** = ``"iot:DeleteMitigationAction"``

Grants permission to delete a defined mitigation action from your AWS account

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteMitigationAction.html

#### Defined in

actions/iot.ts:411

___

### DeleteOTAUpdate

• **DeleteOTAUpdate** = ``"iot:DeleteOTAUpdate"``

Grants permission to delete an OTA update job

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteOTAUpdate.html

#### Defined in

actions/iot.ts:417

___

### DeletePackage

• **DeletePackage** = ``"iot:DeletePackage"``

Grants permission to delete a package

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePackage.html

#### Defined in

actions/iot.ts:423

___

### DeletePackageVersion

• **DeletePackageVersion** = ``"iot:DeletePackageVersion"``

Grants permission to delete a version of the specified package

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePackageVersion.html

#### Defined in

actions/iot.ts:429

___

### DeletePolicy

• **DeletePolicy** = ``"iot:DeletePolicy"``

Grants permission to delete the specified policy

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicy.html

#### Defined in

actions/iot.ts:435

___

### DeletePolicyVersion

• **DeletePolicyVersion** = ``"iot:DeletePolicyVersion"``

Grants permission to Delete the specified version of the specified policy

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicyVersion.html

#### Defined in

actions/iot.ts:441

___

### DeleteProvisioningTemplate

• **DeleteProvisioningTemplate** = ``"iot:DeleteProvisioningTemplate"``

Grants permission to delete a fleet provisioning template

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplate.html

#### Defined in

actions/iot.ts:447

___

### DeleteProvisioningTemplateVersion

• **DeleteProvisioningTemplateVersion** = ``"iot:DeleteProvisioningTemplateVersion"``

Grants permission to delete a fleet provisioning template version

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplateVersion.html

#### Defined in

actions/iot.ts:453

___

### DeleteRegistrationCode

• **DeleteRegistrationCode** = ``"iot:DeleteRegistrationCode"``

Grants permission to delete a CA certificate registration code

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRegistrationCode.html

#### Defined in

actions/iot.ts:459

___

### DeleteRoleAlias

• **DeleteRoleAlias** = ``"iot:DeleteRoleAlias"``

Grants permission to delete the specified role alias

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRoleAlias.html

#### Defined in

actions/iot.ts:465

___

### DeleteScheduledAudit

• **DeleteScheduledAudit** = ``"iot:DeleteScheduledAudit"``

Grants permission to delete a scheduled audit

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteScheduledAudit.html

#### Defined in

actions/iot.ts:471

___

### DeleteSecurityProfile

• **DeleteSecurityProfile** = ``"iot:DeleteSecurityProfile"``

Grants permission to delete a Device Defender security profile

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteSecurityProfile.html

#### Defined in

actions/iot.ts:477

___

### DeleteStream

• **DeleteStream** = ``"iot:DeleteStream"``

Grants permission to delete a specified stream

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteStream.html

#### Defined in

actions/iot.ts:483

___

### DeleteThing

• **DeleteThing** = ``"iot:DeleteThing"``

Grants permission to delete the specified thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html

#### Defined in

actions/iot.ts:489

___

### DeleteThingGroup

• **DeleteThingGroup** = ``"iot:DeleteThingGroup"``

Grants permission to delete the specified thing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingGroup.html

#### Defined in

actions/iot.ts:495

___

### DeleteThingShadow

• **DeleteThingShadow** = ``"iot:DeleteThingShadow"``

Grants permission to delete the specified thing shadow

See https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html

#### Defined in

actions/iot.ts:501

___

### DeleteThingType

• **DeleteThingType** = ``"iot:DeleteThingType"``

Grants permission to delete the specified thing type

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingType.html

#### Defined in

actions/iot.ts:507

___

### DeleteTopicRule

• **DeleteTopicRule** = ``"iot:DeleteTopicRule"``

Grants permission to delete the specified rule

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRule.html

#### Defined in

actions/iot.ts:513

___

### DeleteTopicRuleDestination

• **DeleteTopicRuleDestination** = ``"iot:DeleteTopicRuleDestination"``

Grants permission to delete a TopicRuleDestination

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRuleDestination.html

#### Defined in

actions/iot.ts:519

___

### DeleteV2LoggingLevel

• **DeleteV2LoggingLevel** = ``"iot:DeleteV2LoggingLevel"``

Grants permission to delete the specified v2 logging level

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteV2LoggingLevel.html

#### Defined in

actions/iot.ts:525

___

### DeprecateThingType

• **DeprecateThingType** = ``"iot:DeprecateThingType"``

Grants permission to deprecate the specified thing type

See https://docs.aws.amazon.com/iot/latest/apireference/API_DeprecateThingType.html

#### Defined in

actions/iot.ts:531

___

### DescribeAccountAuditConfiguration

• **DescribeAccountAuditConfiguration** = ``"iot:DescribeAccountAuditConfiguration"``

Grants permission to get information about audit configurations for the account

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAccountAuditConfiguration.html

#### Defined in

actions/iot.ts:537

___

### DescribeAuditFinding

• **DescribeAuditFinding** = ``"iot:DescribeAuditFinding"``

Grants permission to get information about a single audit finding. Properties i
nclude the reason for noncompliance, the severity of the issue, and when the au
dit that returned the finding was started

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html

#### Defined in

actions/iot.ts:545

___

### DescribeAuditMitigationActionsTask

• **DescribeAuditMitigationActionsTask** = ``"iot:DescribeAuditMitigationActionsTask"``

Grants permission to get information about an audit mitigation task that is use
d to apply mitigation actions to a set of audit findings

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditMitigationActionsTask.html

#### Defined in

actions/iot.ts:552

___

### DescribeAuditSuppression

• **DescribeAuditSuppression** = ``"iot:DescribeAuditSuppression"``

Grants permission to get information about a Device Defender audit suppression

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditSuppression.html

#### Defined in

actions/iot.ts:558

___

### DescribeAuditTask

• **DescribeAuditTask** = ``"iot:DescribeAuditTask"``

Grants permission to get information about a Device Defender audit

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditTask.html

#### Defined in

actions/iot.ts:564

___

### DescribeAuthorizer

• **DescribeAuthorizer** = ``"iot:DescribeAuthorizer"``

Grants permission to describe an authorizer

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuthorizer.html

#### Defined in

actions/iot.ts:570

___

### DescribeBillingGroup

• **DescribeBillingGroup** = ``"iot:DescribeBillingGroup"``

Grants permission to get information about the specified billing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeBillingGroup.html

#### Defined in

actions/iot.ts:576

___

### DescribeCACertificate

• **DescribeCACertificate** = ``"iot:DescribeCACertificate"``

Grants permission to describe a registered CA certificate

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCACertificate.html

#### Defined in

actions/iot.ts:582

___

### DescribeCertificate

• **DescribeCertificate** = ``"iot:DescribeCertificate"``

Grants permission to get information about the specified certificate

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCertificate.html

#### Defined in

actions/iot.ts:588

___

### DescribeCertificateProvider

• **DescribeCertificateProvider** = ``"iot:DescribeCertificateProvider"``

Grants permission to describe a certificate provider

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCertificateProvider.html

#### Defined in

actions/iot.ts:594

___

### DescribeCustomMetric

• **DescribeCustomMetric** = ``"iot:DescribeCustomMetric"``

Grants permission to describe a custom metric that is defined in your AWS accou
nt

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCustomMetric.html

#### Defined in

actions/iot.ts:601

___

### DescribeDefaultAuthorizer

• **DescribeDefaultAuthorizer** = ``"iot:DescribeDefaultAuthorizer"``

Grants permission to describe the default authorizer

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDefaultAuthorizer.html

#### Defined in

actions/iot.ts:607

___

### DescribeDetectMitigationActionsTask

• **DescribeDetectMitigationActionsTask** = ``"iot:DescribeDetectMitigationActionsTask"``

Grants permission to describe a Device Defender ML Detect mitigation action

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDetectMitigationActionsTask.html

#### Defined in

actions/iot.ts:613

___

### DescribeDimension

• **DescribeDimension** = ``"iot:DescribeDimension"``

Grants permission to get details about a dimension that is defined in your AWS
account

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDimension.html

#### Defined in

actions/iot.ts:620

___

### DescribeDomainConfiguration

• **DescribeDomainConfiguration** = ``"iot:DescribeDomainConfiguration"``

Grants permission to get information about the domain configuration

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDomainConfiguration.html

#### Defined in

actions/iot.ts:626

___

### DescribeEndpoint

• **DescribeEndpoint** = ``"iot:DescribeEndpoint"``

Grants permission to get a unique endpoint specific to the AWS account making t
he call

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEndpoint.html

#### Defined in

actions/iot.ts:633

___

### DescribeEventConfigurations

• **DescribeEventConfigurations** = ``"iot:DescribeEventConfigurations"``

Grants permission to get account event configurations

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEventConfigurations.html

#### Defined in

actions/iot.ts:639

___

### DescribeFleetMetric

• **DescribeFleetMetric** = ``"iot:DescribeFleetMetric"``

Grants permission to get information about the specified fleet metric

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeFleetMetric.html

#### Defined in

actions/iot.ts:645

___

### DescribeIndex

• **DescribeIndex** = ``"iot:DescribeIndex"``

Grants permission to get information about the specified index

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeIndex.html

#### Defined in

actions/iot.ts:651

___

### DescribeJob

• **DescribeJob** = ``"iot:DescribeJob"``

Grants permission to describe a job

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJob.html

#### Defined in

actions/iot.ts:657

___

### DescribeJobExecution

• **DescribeJobExecution** = ``"iot:DescribeJobExecution"``

Grants permission to describe a job execution

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJobExecution.html

#### Defined in

actions/iot.ts:663

___

### DescribeJobTemplate

• **DescribeJobTemplate** = ``"iot:DescribeJobTemplate"``

Grants permission to describe a job template

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJobTemplate.html

#### Defined in

actions/iot.ts:669

___

### DescribeManagedJobTemplate

• **DescribeManagedJobTemplate** = ``"iot:DescribeManagedJobTemplate"``

Grants permission to describe a managed job template

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeManagedJobTemplate.html

#### Defined in

actions/iot.ts:675

___

### DescribeMitigationAction

• **DescribeMitigationAction** = ``"iot:DescribeMitigationAction"``

Grants permission to get information about a mitigation action

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeMitigationAction.html

#### Defined in

actions/iot.ts:681

___

### DescribeProvisioningTemplate

• **DescribeProvisioningTemplate** = ``"iot:DescribeProvisioningTemplate"``

Grants permission to get information about a fleet provisioning template

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplate.html

#### Defined in

actions/iot.ts:687

___

### DescribeProvisioningTemplateVersion

• **DescribeProvisioningTemplateVersion** = ``"iot:DescribeProvisioningTemplateVersion"``

Grants permission to get information about a fleet provisioning template versio
n

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplateVersion.html

#### Defined in

actions/iot.ts:694

___

### DescribeRoleAlias

• **DescribeRoleAlias** = ``"iot:DescribeRoleAlias"``

Grants permission to describe a role alias

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeRoleAlias.html

#### Defined in

actions/iot.ts:700

___

### DescribeScheduledAudit

• **DescribeScheduledAudit** = ``"iot:DescribeScheduledAudit"``

Grants permission to get information about a scheduled audit

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeScheduledAudit.html

#### Defined in

actions/iot.ts:706

___

### DescribeSecurityProfile

• **DescribeSecurityProfile** = ``"iot:DescribeSecurityProfile"``

Grants permission to get information about a Device Defender security profile

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeSecurityProfile.html

#### Defined in

actions/iot.ts:712

___

### DescribeStream

• **DescribeStream** = ``"iot:DescribeStream"``

Grants permission to get information about the specified stream

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeStream.html

#### Defined in

actions/iot.ts:718

___

### DescribeThing

• **DescribeThing** = ``"iot:DescribeThing"``

Grants permission to get information about the specified thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThing.html

#### Defined in

actions/iot.ts:724

___

### DescribeThingGroup

• **DescribeThingGroup** = ``"iot:DescribeThingGroup"``

Grants permission to get information about the specified thing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingGroup.html

#### Defined in

actions/iot.ts:730

___

### DescribeThingRegistrationTask

• **DescribeThingRegistrationTask** = ``"iot:DescribeThingRegistrationTask"``

Grants permission to get information about the bulk thing registration task

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingRegistrationTask.html

#### Defined in

actions/iot.ts:736

___

### DescribeThingType

• **DescribeThingType** = ``"iot:DescribeThingType"``

Grants permission to get information about the specified thing type

See https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingType.html

#### Defined in

actions/iot.ts:742

___

### DescribeTunnel

• **DescribeTunnel** = ``"iot:DescribeTunnel"``

Grants permission to describe a tunnel

See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_DescribeTunnel.html

#### Defined in

actions/iot.ts:748

___

### DetachPolicy

• **DetachPolicy** = ``"iot:DetachPolicy"``

Grants permission to detach a policy from the specified target

See https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPolicy.html

#### Defined in

actions/iot.ts:754

___

### DetachPrincipalPolicy

• **DetachPrincipalPolicy** = ``"iot:DetachPrincipalPolicy"``

Grants permission to remove the specified policy from the specified certificate

See https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPrincipalPolicy.html

#### Defined in

actions/iot.ts:760

___

### DetachSecurityProfile

• **DetachSecurityProfile** = ``"iot:DetachSecurityProfile"``

Grants permission to disassociate a Device Defender security profile from a thi
ng group or from this account

See https://docs.aws.amazon.com/iot/latest/apireference/API_DetachSecurityProfile.html

#### Defined in

actions/iot.ts:767

___

### DetachThingPrincipal

• **DetachThingPrincipal** = ``"iot:DetachThingPrincipal"``

Grants permission to detach the specified principal from the specified thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_DetachThingPrincipal.html

#### Defined in

actions/iot.ts:773

___

### DisableTopicRule

• **DisableTopicRule** = ``"iot:DisableTopicRule"``

Grants permission to disable the specified rule

See https://docs.aws.amazon.com/iot/latest/apireference/API_DisableTopicRule.html

#### Defined in

actions/iot.ts:779

___

### EnableTopicRule

• **EnableTopicRule** = ``"iot:EnableTopicRule"``

Grants permission to enable the specified rule

See https://docs.aws.amazon.com/iot/latest/apireference/API_EnableTopicRule.html

#### Defined in

actions/iot.ts:785

___

### GetBehaviorModelTrainingSummaries

• **GetBehaviorModelTrainingSummaries** = ``"iot:GetBehaviorModelTrainingSummaries"``

Grants permission to fetch a Device Defender's ML Detect Security Profile train
ing model's status

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetBehaviorModelTrainingSummaries.html

#### Defined in

actions/iot.ts:792

___

### GetBucketsAggregation

• **GetBucketsAggregation** = ``"iot:GetBucketsAggregation"``

Grants permission to get buckets aggregation for IoT fleet index

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetBucketsAggregation.html

#### Defined in

actions/iot.ts:798

___

### GetCardinality

• **GetCardinality** = ``"iot:GetCardinality"``

Grants permission to get cardinality for IoT fleet index

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetCardinality.html

#### Defined in

actions/iot.ts:804

___

### GetEffectivePolicies

• **GetEffectivePolicies** = ``"iot:GetEffectivePolicies"``

Grants permission to get effective policies

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetEffectivePolicies.html

#### Defined in

actions/iot.ts:810

___

### GetIndexingConfiguration

• **GetIndexingConfiguration** = ``"iot:GetIndexingConfiguration"``

Grants permission to get current fleet indexing configuration

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetIndexingConfiguration.html

#### Defined in

actions/iot.ts:816

___

### GetJobDocument

• **GetJobDocument** = ``"iot:GetJobDocument"``

Grants permission to get a job document

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetJobDocument.html

#### Defined in

actions/iot.ts:822

___

### GetLoggingOptions

• **GetLoggingOptions** = ``"iot:GetLoggingOptions"``

Grants permission to get the logging options

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetLoggingOptions.html

#### Defined in

actions/iot.ts:828

___

### GetOTAUpdate

• **GetOTAUpdate** = ``"iot:GetOTAUpdate"``

Grants permission to get the information about the OTA update job

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetOTAUpdate.html

#### Defined in

actions/iot.ts:834

___

### GetPackage

• **GetPackage** = ``"iot:GetPackage"``

Grants permission to get the information about the package

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetPackage.html

#### Defined in

actions/iot.ts:840

___

### GetPackageConfiguration

• **GetPackageConfiguration** = ``"iot:GetPackageConfiguration"``

Grants permission to get the package configuration of the account

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetPackageConfiguration.html

#### Defined in

actions/iot.ts:846

___

### GetPackageVersion

• **GetPackageVersion** = ``"iot:GetPackageVersion"``

Grants permission to get the version of the package

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetPackageVersion.html

#### Defined in

actions/iot.ts:852

___

### GetPercentiles

• **GetPercentiles** = ``"iot:GetPercentiles"``

Grants permission to get percentiles for IoT fleet index

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetPercentiles.html

#### Defined in

actions/iot.ts:858

___

### GetPolicy

• **GetPolicy** = ``"iot:GetPolicy"``

Grants permission to get information about the specified policy with the policy
document of the default version

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicy.html

#### Defined in

actions/iot.ts:865

___

### GetPolicyVersion

• **GetPolicyVersion** = ``"iot:GetPolicyVersion"``

Grants permission to get information about the specified policy version

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicyVersion.html

#### Defined in

actions/iot.ts:871

___

### GetRegistrationCode

• **GetRegistrationCode** = ``"iot:GetRegistrationCode"``

Grants permission to get a registration code used to register a CA certificate
with AWS IoT

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetRegistrationCode.html

#### Defined in

actions/iot.ts:878

___

### GetRetainedMessage

• **GetRetainedMessage** = ``"iot:GetRetainedMessage"``

Grants permission to get the retained message on the specified topic

See https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html

#### Defined in

actions/iot.ts:884

___

### GetStatistics

• **GetStatistics** = ``"iot:GetStatistics"``

Grants permission to get statistics for IoT fleet index

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetStatistics.html

#### Defined in

actions/iot.ts:890

___

### GetThingShadow

• **GetThingShadow** = ``"iot:GetThingShadow"``

Grants permission to get the thing shadow

See https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html

#### Defined in

actions/iot.ts:896

___

### GetTopicRule

• **GetTopicRule** = ``"iot:GetTopicRule"``

Grants permission to get information about the specified rule

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRule.html

#### Defined in

actions/iot.ts:902

___

### GetTopicRuleDestination

• **GetTopicRuleDestination** = ``"iot:GetTopicRuleDestination"``

Grants permission to get a TopicRuleDestination

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRuleDestination.html

#### Defined in

actions/iot.ts:908

___

### GetV2LoggingOptions

• **GetV2LoggingOptions** = ``"iot:GetV2LoggingOptions"``

Grants permission to get v2 logging options

See https://docs.aws.amazon.com/iot/latest/apireference/API_GetV2LoggingOptions.html

#### Defined in

actions/iot.ts:914

___

### ListActiveViolations

• **ListActiveViolations** = ``"iot:ListActiveViolations"``

Grants permission to list the active violations for a given Device Defender sec
urity profile or Thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListActiveViolations.html

#### Defined in

actions/iot.ts:921

___

### ListAttachedPolicies

• **ListAttachedPolicies** = ``"iot:ListAttachedPolicies"``

Grants permission to list the policies attached to the specified thing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListAttachedPolicies.html

#### Defined in

actions/iot.ts:927

___

### ListAuditFindings

• **ListAuditFindings** = ``"iot:ListAuditFindings"``

Grants permission to list the findings (results) of a Device Defender audit or
of the audits performed during a specified time period

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditFindings.html

#### Defined in

actions/iot.ts:934

___

### ListAuditMitigationActionsExecutions

• **ListAuditMitigationActionsExecutions** = ``"iot:ListAuditMitigationActionsExecutions"``

Grants permission to get the status of audit mitigation action tasks that were
executed

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsExecutions.html

#### Defined in

actions/iot.ts:941

___

### ListAuditMitigationActionsTasks

• **ListAuditMitigationActionsTasks** = ``"iot:ListAuditMitigationActionsTasks"``

Grants permission to get a list of audit mitigation action tasks that match the
specified filters

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsTasks.html

#### Defined in

actions/iot.ts:948

___

### ListAuditSuppressions

• **ListAuditSuppressions** = ``"iot:ListAuditSuppressions"``

Grants permission to list your Device Defender audit suppressions

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditSuppressions.html

#### Defined in

actions/iot.ts:954

___

### ListAuditTasks

• **ListAuditTasks** = ``"iot:ListAuditTasks"``

Grants permission to list the Device Defender audits that have been performed d
uring a given time period

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditTasks.html

#### Defined in

actions/iot.ts:961

___

### ListAuthorizers

• **ListAuthorizers** = ``"iot:ListAuthorizers"``

Grants permission to list the authorizers registered in your account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuthorizers.html

#### Defined in

actions/iot.ts:967

___

### ListBillingGroups

• **ListBillingGroups** = ``"iot:ListBillingGroups"``

Grants permission to list all billing groups

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListBillingGroups.html

#### Defined in

actions/iot.ts:973

___

### ListCACertificates

• **ListCACertificates** = ``"iot:ListCACertificates"``

Grants permission to list the CA certificates registered for your AWS account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListCACertificates.html

#### Defined in

actions/iot.ts:979

___

### ListCertificateProviders

• **ListCertificateProviders** = ``"iot:ListCertificateProviders"``

Grants permission to list certificate providers in the account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificateProviders.html

#### Defined in

actions/iot.ts:985

___

### ListCertificates

• **ListCertificates** = ``"iot:ListCertificates"``

Grants permission to list your certificates

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificates.html

#### Defined in

actions/iot.ts:991

___

### ListCertificatesByCA

• **ListCertificatesByCA** = ``"iot:ListCertificatesByCA"``

Grants permission to list the device certificates signed by the specified CA ce
rtificate

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificatesByCA.html

#### Defined in

actions/iot.ts:998

___

### ListCustomMetrics

• **ListCustomMetrics** = ``"iot:ListCustomMetrics"``

Grants permission to list the custom metrics in your AWS account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListCustomMetrics.html

#### Defined in

actions/iot.ts:1004

___

### ListDetectMitigationActionsExecutions

• **ListDetectMitigationActionsExecutions** = ``"iot:ListDetectMitigationActionsExecutions"``

Grants permission to lists mitigation actions executions for a Device Defender
ML Detect Security Profile

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListDetectMitigationActionsExecutions.html

#### Defined in

actions/iot.ts:1011

___

### ListDetectMitigationActionsTasks

• **ListDetectMitigationActionsTasks** = ``"iot:ListDetectMitigationActionsTasks"``

Grants permission to list Device Defender ML Detect mitigation actions tasks

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListDetectMitigationActionsTasks.html

#### Defined in

actions/iot.ts:1017

___

### ListDimensions

• **ListDimensions** = ``"iot:ListDimensions"``

Grants permission to list the dimensions that are defined for your AWS account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListDimensions.html

#### Defined in

actions/iot.ts:1023

___

### ListDomainConfigurations

• **ListDomainConfigurations** = ``"iot:ListDomainConfigurations"``

Grants permission to list the domain configuration created by your AWS account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListDomainConfigurations.html

#### Defined in

actions/iot.ts:1029

___

### ListFleetMetrics

• **ListFleetMetrics** = ``"iot:ListFleetMetrics"``

Grants permission to list the fleet metrics in your account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListFleetMetrics.html

#### Defined in

actions/iot.ts:1035

___

### ListIndices

• **ListIndices** = ``"iot:ListIndices"``

Grants permission to list all indices for fleet index

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListIndices.html

#### Defined in

actions/iot.ts:1041

___

### ListJobExecutionsForJob

• **ListJobExecutionsForJob** = ``"iot:ListJobExecutionsForJob"``

Grants permission to list the job executions for a job

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForJob.html

#### Defined in

actions/iot.ts:1047

___

### ListJobExecutionsForThing

• **ListJobExecutionsForThing** = ``"iot:ListJobExecutionsForThing"``

Grants permission to list the job executions for the specified thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForThing.html

#### Defined in

actions/iot.ts:1053

___

### ListJobTemplates

• **ListJobTemplates** = ``"iot:ListJobTemplates"``

Grants permission to list job templates

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobTemplates.html

#### Defined in

actions/iot.ts:1059

___

### ListJobs

• **ListJobs** = ``"iot:ListJobs"``

Grants permission to list jobs

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobs.html

#### Defined in

actions/iot.ts:1065

___

### ListManagedJobTemplates

• **ListManagedJobTemplates** = ``"iot:ListManagedJobTemplates"``

Grants permission to list managed job templates

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListManagedJobTemplates.html

#### Defined in

actions/iot.ts:1071

___

### ListMetricValues

• **ListMetricValues** = ``"iot:ListMetricValues"``

Grants permissions to list the metric values for a thing based on the metricNam
e, and dimension if specified

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListMetricValues.html

#### Defined in

actions/iot.ts:1078

___

### ListMitigationActions

• **ListMitigationActions** = ``"iot:ListMitigationActions"``

Grants permission to get a list of all mitigation actions that match the specif
ied filter criteria

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListMitigationActions.html

#### Defined in

actions/iot.ts:1085

___

### ListNamedShadowsForThing

• **ListNamedShadowsForThing** = ``"iot:ListNamedShadowsForThing"``

Grants permission to list all named shadows for a given thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListNamedShadowsForThing.html

#### Defined in

actions/iot.ts:1091

___

### ListOTAUpdates

• **ListOTAUpdates** = ``"iot:ListOTAUpdates"``

Grants permission to list OTA update jobs in the account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListOTAUpdates.html

#### Defined in

actions/iot.ts:1097

___

### ListOutgoingCertificates

• **ListOutgoingCertificates** = ``"iot:ListOutgoingCertificates"``

Grants permission to list certificates that are being transfered but not yet ac
cepted

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListOutgoingCertificates.html

#### Defined in

actions/iot.ts:1104

___

### ListPackageVersions

• **ListPackageVersions** = ``"iot:ListPackageVersions"``

Grants permission to list versions for a package in the account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListPackageVersions.html

#### Defined in

actions/iot.ts:1110

___

### ListPackages

• **ListPackages** = ``"iot:ListPackages"``

Grants permission to list packages in the account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListPackages.html

#### Defined in

actions/iot.ts:1116

___

### ListPolicies

• **ListPolicies** = ``"iot:ListPolicies"``

Grants permission to list your policies

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicies.html

#### Defined in

actions/iot.ts:1122

___

### ListPolicyPrincipals

• **ListPolicyPrincipals** = ``"iot:ListPolicyPrincipals"``

Grants permission to list the principals associated with the specified policy

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyPrincipals.html

#### Defined in

actions/iot.ts:1128

___

### ListPolicyVersions

• **ListPolicyVersions** = ``"iot:ListPolicyVersions"``

Grants permission to list the versions of the specified policy, and identifies
the default version

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyVersions.html

#### Defined in

actions/iot.ts:1135

___

### ListPrincipalPolicies

• **ListPrincipalPolicies** = ``"iot:ListPrincipalPolicies"``

Grants permission to list the policies attached to the specified principal. If
you use an Amazon Cognito identity, the ID needs to be in Amazon Cognito Identi
ty format

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalPolicies.html

#### Defined in

actions/iot.ts:1143

___

### ListPrincipalThings

• **ListPrincipalThings** = ``"iot:ListPrincipalThings"``

Grants permission to list the things associated with the specified principal

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalThings.html

#### Defined in

actions/iot.ts:1149

___

### ListProvisioningTemplateVersions

• **ListProvisioningTemplateVersions** = ``"iot:ListProvisioningTemplateVersions"``

Grants permission to get a list of fleet provisioning template versions

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplateVersions.html

#### Defined in

actions/iot.ts:1155

___

### ListProvisioningTemplates

• **ListProvisioningTemplates** = ``"iot:ListProvisioningTemplates"``

Grants permission to list the fleet provisioning templates in your AWS account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplates.html

#### Defined in

actions/iot.ts:1161

___

### ListRelatedResourcesForAuditFinding

• **ListRelatedResourcesForAuditFinding** = ``"iot:ListRelatedResourcesForAuditFinding"``

Grants permission to list related resources for a single audit finding

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListRelatedResourcesForAuditFinding.html

#### Defined in

actions/iot.ts:1167

___

### ListRetainedMessages

• **ListRetainedMessages** = ``"iot:ListRetainedMessages"``

Grants permission to list the retained messages for your account

See https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html

#### Defined in

actions/iot.ts:1173

___

### ListRoleAliases

• **ListRoleAliases** = ``"iot:ListRoleAliases"``

Grants permission to list role aliases

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListRoleAliases.html

#### Defined in

actions/iot.ts:1179

___

### ListScheduledAudits

• **ListScheduledAudits** = ``"iot:ListScheduledAudits"``

Grants permission to list all of your scheduled audits

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListScheduledAudits.html

#### Defined in

actions/iot.ts:1185

___

### ListSecurityProfiles

• **ListSecurityProfiles** = ``"iot:ListSecurityProfiles"``

Grants permission to list the Device Defender security profiles you have create
d

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html

#### Defined in

actions/iot.ts:1192

___

### ListSecurityProfilesForTarget

• **ListSecurityProfilesForTarget** = ``"iot:ListSecurityProfilesForTarget"``

Grants permission to list the Device Defender security profiles attached to a t
arget

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfilesForTarget.html

#### Defined in

actions/iot.ts:1199

___

### ListStreams

• **ListStreams** = ``"iot:ListStreams"``

Grants permission to list the streams in your account

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListStreams.html

#### Defined in

actions/iot.ts:1205

___

### ListTagsForResource

• **ListTagsForResource** = ``"iot:ListTagsForResource"``

Grants permission to list all tags for a given resource

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListTagsForResource.html

#### Defined in

actions/iot.ts:1211

___

### ListTargetsForPolicy

• **ListTargetsForPolicy** = ``"iot:ListTargetsForPolicy"``

Grants permission to list targets for the specified policy

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForPolicy.html

#### Defined in

actions/iot.ts:1217

___

### ListTargetsForSecurityProfile

• **ListTargetsForSecurityProfile** = ``"iot:ListTargetsForSecurityProfile"``

Grants permission to list the targets associated with a given Device Defender s
ecurity profile

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForSecurityProfile.html

#### Defined in

actions/iot.ts:1224

___

### ListThingGroups

• **ListThingGroups** = ``"iot:ListThingGroups"``

Grants permission to list all thing groups

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroups.html

#### Defined in

actions/iot.ts:1230

___

### ListThingGroupsForThing

• **ListThingGroupsForThing** = ``"iot:ListThingGroupsForThing"``

Grants permission to list thing groups to which the specified thing belongs

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroupsForThing.html

#### Defined in

actions/iot.ts:1236

___

### ListThingPrincipals

• **ListThingPrincipals** = ``"iot:ListThingPrincipals"``

Grants permission to list the principals associated with the specified thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingPrincipals.html

#### Defined in

actions/iot.ts:1242

___

### ListThingRegistrationTaskReports

• **ListThingRegistrationTaskReports** = ``"iot:ListThingRegistrationTaskReports"``

Grants permission to list information about bulk thing registration tasks

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTaskReports.html

#### Defined in

actions/iot.ts:1248

___

### ListThingRegistrationTasks

• **ListThingRegistrationTasks** = ``"iot:ListThingRegistrationTasks"``

Grants permission to list bulk thing registration tasks

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTasks.html

#### Defined in

actions/iot.ts:1254

___

### ListThingTypes

• **ListThingTypes** = ``"iot:ListThingTypes"``

Grants permission to list all thing types

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingTypes.html

#### Defined in

actions/iot.ts:1260

___

### ListThings

• **ListThings** = ``"iot:ListThings"``

Grants permission to list all things

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListThings.html

#### Defined in

actions/iot.ts:1266

___

### ListThingsInBillingGroup

• **ListThingsInBillingGroup** = ``"iot:ListThingsInBillingGroup"``

Grants permission to list all things in the specified billing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInBillingGroup.html

#### Defined in

actions/iot.ts:1272

___

### ListThingsInThingGroup

• **ListThingsInThingGroup** = ``"iot:ListThingsInThingGroup"``

Grants permission to list all things in the specified thing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInThingGroup.html

#### Defined in

actions/iot.ts:1278

___

### ListTopicRuleDestinations

• **ListTopicRuleDestinations** = ``"iot:ListTopicRuleDestinations"``

Grants permission to list all TopicRuleDestinations

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRuleDestinations.html

#### Defined in

actions/iot.ts:1284

___

### ListTopicRules

• **ListTopicRules** = ``"iot:ListTopicRules"``

Grants permission to list the rules for the specific topic

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRules.html

#### Defined in

actions/iot.ts:1290

___

### ListTunnels

• **ListTunnels** = ``"iot:ListTunnels"``

Grants permission to list tunnels

See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_ListTunnels.html

#### Defined in

actions/iot.ts:1296

___

### ListV2LoggingLevels

• **ListV2LoggingLevels** = ``"iot:ListV2LoggingLevels"``

Grants permission to list the v2 logging levels

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListV2LoggingLevels.html

#### Defined in

actions/iot.ts:1302

___

### ListViolationEvents

• **ListViolationEvents** = ``"iot:ListViolationEvents"``

Grants permission to list the Device Defender security profile violations disco
vered during the given time period

See https://docs.aws.amazon.com/iot/latest/apireference/API_ListViolationEvents.html

#### Defined in

actions/iot.ts:1309

___

### OpenTunnel

• **OpenTunnel** = ``"iot:OpenTunnel"``

Grants permission to open a tunnel

See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_OpenTunnel.html

#### Defined in

actions/iot.ts:1315

___

### Publish

• **Publish** = ``"iot:Publish"``

Grants permission to publish to the specified topic

See https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html

#### Defined in

actions/iot.ts:1321

___

### PutVerificationStateOnViolation

• **PutVerificationStateOnViolation** = ``"iot:PutVerificationStateOnViolation"``

Grants permission to put verification state on a violation

See https://docs.aws.amazon.com/iot/latest/apireference/API_PutVerificationStateOnViolation.html

#### Defined in

actions/iot.ts:1327

___

### Receive

• **Receive** = ``"iot:Receive"``

Grants permission to receive from the specified topic

See https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html

#### Defined in

actions/iot.ts:1333

___

### RegisterCACertificate

• **RegisterCACertificate** = ``"iot:RegisterCACertificate"``

Grants permission to register a CA certificate with AWS IoT

See https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCACertificate.html

#### Defined in

actions/iot.ts:1339

___

### RegisterCertificate

• **RegisterCertificate** = ``"iot:RegisterCertificate"``

Grants permission to register a device certificate with AWS IoT

See https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificate.html

#### Defined in

actions/iot.ts:1345

___

### RegisterCertificateWithoutCA

• **RegisterCertificateWithoutCA** = ``"iot:RegisterCertificateWithoutCA"``

Grants permission to register a device certificate with AWS IoT without a regis
tered CA (certificate authority)

See https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificateWithoutCA.html

#### Defined in

actions/iot.ts:1352

___

### RegisterThing

• **RegisterThing** = ``"iot:RegisterThing"``

Grants permission to register your thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterThing.html

#### Defined in

actions/iot.ts:1358

___

### RejectCertificateTransfer

• **RejectCertificateTransfer** = ``"iot:RejectCertificateTransfer"``

Grants permission to reject a pending certificate transfer

See https://docs.aws.amazon.com/iot/latest/apireference/API_RejectCertificateTransfer.html

#### Defined in

actions/iot.ts:1364

___

### RemoveThingFromBillingGroup

• **RemoveThingFromBillingGroup** = ``"iot:RemoveThingFromBillingGroup"``

Grants permission to remove thing from the specified billing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromBillingGroup.html

#### Defined in

actions/iot.ts:1370

___

### RemoveThingFromThingGroup

• **RemoveThingFromThingGroup** = ``"iot:RemoveThingFromThingGroup"``

Grants permission to remove thing from the specified thing group

See https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromThingGroup.html

#### Defined in

actions/iot.ts:1376

___

### ReplaceTopicRule

• **ReplaceTopicRule** = ``"iot:ReplaceTopicRule"``

Grants permission to replace the specified rule

See https://docs.aws.amazon.com/iot/latest/apireference/API_ReplaceTopicRule.html

#### Defined in

actions/iot.ts:1382

___

### RetainPublish

• **RetainPublish** = ``"iot:RetainPublish"``

Grants permission to publish a retained message to the specified topic

See https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html

#### Defined in

actions/iot.ts:1388

___

### RotateTunnelAccessToken

• **RotateTunnelAccessToken** = ``"iot:RotateTunnelAccessToken"``

Grants permission to rotate the access token of a tunnel

See https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_RotateTunnelAccessToken.html

#### Defined in

actions/iot.ts:1394

___

### SearchIndex

• **SearchIndex** = ``"iot:SearchIndex"``

Grants permission to search IoT fleet index

See https://docs.aws.amazon.com/iot/latest/apireference/API_SearchIndex.html

#### Defined in

actions/iot.ts:1400

___

### SetDefaultAuthorizer

• **SetDefaultAuthorizer** = ``"iot:SetDefaultAuthorizer"``

Grants permission to set the default authorizer. This will be used if a websock
et connection is made without specifying an authorizer

See https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultAuthorizer.html

#### Defined in

actions/iot.ts:1407

___

### SetDefaultPolicyVersion

• **SetDefaultPolicyVersion** = ``"iot:SetDefaultPolicyVersion"``

Grants permission to set the specified version of the specified policy as the p
olicy's default (operative) version

See https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultPolicyVersion.html

#### Defined in

actions/iot.ts:1414

___

### SetLoggingOptions

• **SetLoggingOptions** = ``"iot:SetLoggingOptions"``

Grants permission to set the logging options

See https://docs.aws.amazon.com/iot/latest/apireference/API_SetLoggingOptions.html

#### Defined in

actions/iot.ts:1420

___

### SetV2LoggingLevel

• **SetV2LoggingLevel** = ``"iot:SetV2LoggingLevel"``

Grants permission to set the v2 logging level

See https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingLevel.html

#### Defined in

actions/iot.ts:1426

___

### SetV2LoggingOptions

• **SetV2LoggingOptions** = ``"iot:SetV2LoggingOptions"``

Grants permission to set the v2 logging options

See https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingOptions.html

#### Defined in

actions/iot.ts:1432

___

### StartAuditMitigationActionsTask

• **StartAuditMitigationActionsTask** = ``"iot:StartAuditMitigationActionsTask"``

Grants permission to start a task that applies a set of mitigation actions to t
he specified target

See https://docs.aws.amazon.com/iot/latest/apireference/API_StartAuditMitigationActionsTask.html

#### Defined in

actions/iot.ts:1439

___

### StartDetectMitigationActionsTask

• **StartDetectMitigationActionsTask** = ``"iot:StartDetectMitigationActionsTask"``

Grants permission to start a Device Defender ML Detect mitigation actions task

See https://docs.aws.amazon.com/iot/latest/apireference/API_StartDetectMitigationActionsTask.html

#### Defined in

actions/iot.ts:1445

___

### StartOnDemandAuditTask

• **StartOnDemandAuditTask** = ``"iot:StartOnDemandAuditTask"``

Grants permission to start an on-demand Device Defender audit

See https://docs.aws.amazon.com/iot/latest/apireference/API_StartOnDemandAuditTask.html

#### Defined in

actions/iot.ts:1451

___

### StartThingRegistrationTask

• **StartThingRegistrationTask** = ``"iot:StartThingRegistrationTask"``

Grants permission to start a bulk thing registration task

See https://docs.aws.amazon.com/iot/latest/apireference/API_StartThingRegistrationTask.html

#### Defined in

actions/iot.ts:1457

___

### StopThingRegistrationTask

• **StopThingRegistrationTask** = ``"iot:StopThingRegistrationTask"``

Grants permission to stop a bulk thing registration task

See https://docs.aws.amazon.com/iot/latest/apireference/API_StopThingRegistrationTask.html

#### Defined in

actions/iot.ts:1463

___

### Subscribe

• **Subscribe** = ``"iot:Subscribe"``

Grants permission to subscribe to the specified TopicFilter

See https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html

#### Defined in

actions/iot.ts:1469

___

### TagResource

• **TagResource** = ``"iot:TagResource"``

Grants permission to tag a specified resource

See https://docs.aws.amazon.com/iot/latest/apireference/API_TagResource.html

#### Defined in

actions/iot.ts:1475

___

### TestAuthorization

• **TestAuthorization** = ``"iot:TestAuthorization"``

Grants permission to test the policies evaluation for group policies

See https://docs.aws.amazon.com/iot/latest/apireference/API_TestAuthorization.html

#### Defined in

actions/iot.ts:1481

___

### TestInvokeAuthorizer

• **TestInvokeAuthorizer** = ``"iot:TestInvokeAuthorizer"``

Grants permission to test invoke the specified custom authorizer for testing pu
rposes

See https://docs.aws.amazon.com/iot/latest/apireference/API_TestInvokeAuthorizer.html

#### Defined in

actions/iot.ts:1488

___

### TransferCertificate

• **TransferCertificate** = ``"iot:TransferCertificate"``

Grants permission to transfer the specified certificate to the specified AWS ac
count

See https://docs.aws.amazon.com/iot/latest/apireference/API_TransferCertificate.html

#### Defined in

actions/iot.ts:1495

___

### UntagResource

• **UntagResource** = ``"iot:UntagResource"``

Grants permission to untag a specified resource

See https://docs.aws.amazon.com/iot/latest/apireference/API_UntagResource.html

#### Defined in

actions/iot.ts:1501

___

### UpdateAccountAuditConfiguration

• **UpdateAccountAuditConfiguration** = ``"iot:UpdateAccountAuditConfiguration"``

Grants permission to configure or reconfigure the Device Defender audit setting
s for this account

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAccountAuditConfiguration.html

#### Defined in

actions/iot.ts:1508

___

### UpdateAuditSuppression

• **UpdateAuditSuppression** = ``"iot:UpdateAuditSuppression"``

Grants permission to update a Device Defender audit suppression

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAuditSuppression.html

#### Defined in

actions/iot.ts:1514

___

### UpdateAuthorizer

• **UpdateAuthorizer** = ``"iot:UpdateAuthorizer"``

Grants permission to update an authorizer

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAuthorizer.html

#### Defined in

actions/iot.ts:1520

___

### UpdateBillingGroup

• **UpdateBillingGroup** = ``"iot:UpdateBillingGroup"``

Grants permission to update information associated with the specified billing g
roup

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateBillingGroup.html

#### Defined in

actions/iot.ts:1527

___

### UpdateCACertificate

• **UpdateCACertificate** = ``"iot:UpdateCACertificate"``

Grants permission to update a registered CA certificate

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCACertificate.html

#### Defined in

actions/iot.ts:1533

___

### UpdateCertificate

• **UpdateCertificate** = ``"iot:UpdateCertificate"``

Grants permission to update the status of the specified certificate. This opera
tion is idempotent

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCertificate.html

#### Defined in

actions/iot.ts:1540

___

### UpdateCertificateProvider

• **UpdateCertificateProvider** = ``"iot:UpdateCertificateProvider"``

Grants permission to update a certificate provider

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCertificateProvider.html

#### Defined in

actions/iot.ts:1546

___

### UpdateCustomMetric

• **UpdateCustomMetric** = ``"iot:UpdateCustomMetric"``

Grants permission to update the specified custom metric

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCustomMetric.html

#### Defined in

actions/iot.ts:1552

___

### UpdateDimension

• **UpdateDimension** = ``"iot:UpdateDimension"``

Grants permission to update the definition for a dimension

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDimension.html

#### Defined in

actions/iot.ts:1558

___

### UpdateDomainConfiguration

• **UpdateDomainConfiguration** = ``"iot:UpdateDomainConfiguration"``

Grants permission to update a domain configuration

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDomainConfiguration.html

#### Defined in

actions/iot.ts:1564

___

### UpdateDynamicThingGroup

• **UpdateDynamicThingGroup** = ``"iot:UpdateDynamicThingGroup"``

Grants permission to update a Dynamic Thing Group

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDynamicThingGroup.html

#### Defined in

actions/iot.ts:1570

___

### UpdateEventConfigurations

• **UpdateEventConfigurations** = ``"iot:UpdateEventConfigurations"``

Grants permission to update event configurations

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateEventConfigurations.html

#### Defined in

actions/iot.ts:1576

___

### UpdateFleetMetric

• **UpdateFleetMetric** = ``"iot:UpdateFleetMetric"``

Grants permission to update a fleet metric

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateFleetMetric.html

#### Defined in

actions/iot.ts:1582

___

### UpdateIndexingConfiguration

• **UpdateIndexingConfiguration** = ``"iot:UpdateIndexingConfiguration"``

Grants permission to update fleet indexing configuration

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateIndexingConfiguration.html

#### Defined in

actions/iot.ts:1588

___

### UpdateJob

• **UpdateJob** = ``"iot:UpdateJob"``

Grants permission to update a job

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJob.html

#### Defined in

actions/iot.ts:1594

___

### UpdateMitigationAction

• **UpdateMitigationAction** = ``"iot:UpdateMitigationAction"``

Grants permission to update the definition for the specified mitigation action

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateMitigationAction.html

#### Defined in

actions/iot.ts:1600

___

### UpdatePackage

• **UpdatePackage** = ``"iot:UpdatePackage"``

Grants permission to update a package

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdatePackage.html

#### Defined in

actions/iot.ts:1606

___

### UpdatePackageConfiguration

• **UpdatePackageConfiguration** = ``"iot:UpdatePackageConfiguration"``

Grants permission to update the package configuration of the account

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdatePackageConfiguration.html

#### Defined in

actions/iot.ts:1612

___

### UpdatePackageVersion

• **UpdatePackageVersion** = ``"iot:UpdatePackageVersion"``

Grants permission to update the version of the specified package

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdatePackageVersion.html

#### Defined in

actions/iot.ts:1618

___

### UpdateProvisioningTemplate

• **UpdateProvisioningTemplate** = ``"iot:UpdateProvisioningTemplate"``

Grants permission to update a fleet provisioning template

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateProvisioningTemplate.html

#### Defined in

actions/iot.ts:1624

___

### UpdateRoleAlias

• **UpdateRoleAlias** = ``"iot:UpdateRoleAlias"``

Grants permission to update the role alias

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateRoleAlias.html

#### Defined in

actions/iot.ts:1630

___

### UpdateScheduledAudit

• **UpdateScheduledAudit** = ``"iot:UpdateScheduledAudit"``

Grants permission to update a scheduled audit, including what checks are perfor
med and how often the audit takes place

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateScheduledAudit.html

#### Defined in

actions/iot.ts:1637

___

### UpdateSecurityProfile

• **UpdateSecurityProfile** = ``"iot:UpdateSecurityProfile"``

Grants permission to update a Device Defender security profile

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateSecurityProfile.html

#### Defined in

actions/iot.ts:1643

___

### UpdateStream

• **UpdateStream** = ``"iot:UpdateStream"``

Grants permission to update the data for a stream

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateStream.html

#### Defined in

actions/iot.ts:1649

___

### UpdateThing

• **UpdateThing** = ``"iot:UpdateThing"``

Grants permission to update information associated with the specified thing

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThing.html

#### Defined in

actions/iot.ts:1655

___

### UpdateThingGroup

• **UpdateThingGroup** = ``"iot:UpdateThingGroup"``

Grants permission to update information associated with the specified thing gro
up

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroup.html

#### Defined in

actions/iot.ts:1662

___

### UpdateThingGroupsForThing

• **UpdateThingGroupsForThing** = ``"iot:UpdateThingGroupsForThing"``

Grants permission to update the thing groups to which the thing belongs

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroupsForThing.html

#### Defined in

actions/iot.ts:1668

___

### UpdateThingShadow

• **UpdateThingShadow** = ``"iot:UpdateThingShadow"``

Grants permission to update the thing shadow

See https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html

#### Defined in

actions/iot.ts:1674

___

### UpdateTopicRuleDestination

• **UpdateTopicRuleDestination** = ``"iot:UpdateTopicRuleDestination"``

Grants permission to update a TopicRuleDestination

See https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateTopicRuleDestination.html

#### Defined in

actions/iot.ts:1680

___

### ValidateSecurityProfileBehaviors

• **ValidateSecurityProfileBehaviors** = ``"iot:ValidateSecurityProfileBehaviors"``

Grants permission to validate a Device Defender security profile behaviors spec
ification

See https://docs.aws.amazon.com/iot/latest/apireference/API_ValidateSecurityProfileBehaviors.html

#### Defined in

actions/iot.ts:1687
