[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsLightsailActions

# Enumeration: AwsLightsailActions

All IAM policy actions for Amazon Lightsail (LIGHTSAIL)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlightsail.html

2024-02-12T09:58:06.307Z

## Table of contents

### Enumeration Members

- [AllocateStaticIp](AwsLightsailActions.md#allocatestaticip)
- [AttachCertificateToDistribution](AwsLightsailActions.md#attachcertificatetodistribution)
- [AttachDisk](AwsLightsailActions.md#attachdisk)
- [AttachInstancesToLoadBalancer](AwsLightsailActions.md#attachinstancestoloadbalancer)
- [AttachLoadBalancerTlsCertificate](AwsLightsailActions.md#attachloadbalancertlscertificate)
- [AttachStaticIp](AwsLightsailActions.md#attachstaticip)
- [CloseInstancePublicPorts](AwsLightsailActions.md#closeinstancepublicports)
- [CopySnapshot](AwsLightsailActions.md#copysnapshot)
- [CreateBucket](AwsLightsailActions.md#createbucket)
- [CreateBucketAccessKey](AwsLightsailActions.md#createbucketaccesskey)
- [CreateCertificate](AwsLightsailActions.md#createcertificate)
- [CreateCloudFormationStack](AwsLightsailActions.md#createcloudformationstack)
- [CreateContactMethod](AwsLightsailActions.md#createcontactmethod)
- [CreateContainerService](AwsLightsailActions.md#createcontainerservice)
- [CreateContainerServiceDeployment](AwsLightsailActions.md#createcontainerservicedeployment)
- [CreateContainerServiceRegistryLogin](AwsLightsailActions.md#createcontainerserviceregistrylogin)
- [CreateDisk](AwsLightsailActions.md#createdisk)
- [CreateDiskFromSnapshot](AwsLightsailActions.md#creatediskfromsnapshot)
- [CreateDiskSnapshot](AwsLightsailActions.md#createdisksnapshot)
- [CreateDistribution](AwsLightsailActions.md#createdistribution)
- [CreateDomain](AwsLightsailActions.md#createdomain)
- [CreateDomainEntry](AwsLightsailActions.md#createdomainentry)
- [CreateGUISessionAccessDetails](AwsLightsailActions.md#createguisessionaccessdetails)
- [CreateInstanceSnapshot](AwsLightsailActions.md#createinstancesnapshot)
- [CreateInstances](AwsLightsailActions.md#createinstances)
- [CreateInstancesFromSnapshot](AwsLightsailActions.md#createinstancesfromsnapshot)
- [CreateKeyPair](AwsLightsailActions.md#createkeypair)
- [CreateLoadBalancer](AwsLightsailActions.md#createloadbalancer)
- [CreateLoadBalancerTlsCertificate](AwsLightsailActions.md#createloadbalancertlscertificate)
- [CreateRelationalDatabase](AwsLightsailActions.md#createrelationaldatabase)
- [CreateRelationalDatabaseFromSnapshot](AwsLightsailActions.md#createrelationaldatabasefromsnapshot)
- [CreateRelationalDatabaseSnapshot](AwsLightsailActions.md#createrelationaldatabasesnapshot)
- [DeleteAlarm](AwsLightsailActions.md#deletealarm)
- [DeleteAutoSnapshot](AwsLightsailActions.md#deleteautosnapshot)
- [DeleteBucket](AwsLightsailActions.md#deletebucket)
- [DeleteBucketAccessKey](AwsLightsailActions.md#deletebucketaccesskey)
- [DeleteCertificate](AwsLightsailActions.md#deletecertificate)
- [DeleteContactMethod](AwsLightsailActions.md#deletecontactmethod)
- [DeleteContainerImage](AwsLightsailActions.md#deletecontainerimage)
- [DeleteContainerService](AwsLightsailActions.md#deletecontainerservice)
- [DeleteDisk](AwsLightsailActions.md#deletedisk)
- [DeleteDiskSnapshot](AwsLightsailActions.md#deletedisksnapshot)
- [DeleteDistribution](AwsLightsailActions.md#deletedistribution)
- [DeleteDomain](AwsLightsailActions.md#deletedomain)
- [DeleteDomainEntry](AwsLightsailActions.md#deletedomainentry)
- [DeleteInstance](AwsLightsailActions.md#deleteinstance)
- [DeleteInstanceSnapshot](AwsLightsailActions.md#deleteinstancesnapshot)
- [DeleteKeyPair](AwsLightsailActions.md#deletekeypair)
- [DeleteKnownHostKeys](AwsLightsailActions.md#deleteknownhostkeys)
- [DeleteLoadBalancer](AwsLightsailActions.md#deleteloadbalancer)
- [DeleteLoadBalancerTlsCertificate](AwsLightsailActions.md#deleteloadbalancertlscertificate)
- [DeleteRelationalDatabase](AwsLightsailActions.md#deleterelationaldatabase)
- [DeleteRelationalDatabaseSnapshot](AwsLightsailActions.md#deleterelationaldatabasesnapshot)
- [DetachCertificateFromDistribution](AwsLightsailActions.md#detachcertificatefromdistribution)
- [DetachDisk](AwsLightsailActions.md#detachdisk)
- [DetachInstancesFromLoadBalancer](AwsLightsailActions.md#detachinstancesfromloadbalancer)
- [DetachStaticIp](AwsLightsailActions.md#detachstaticip)
- [DisableAddOn](AwsLightsailActions.md#disableaddon)
- [DownloadDefaultKeyPair](AwsLightsailActions.md#downloaddefaultkeypair)
- [EnableAddOn](AwsLightsailActions.md#enableaddon)
- [ExportSnapshot](AwsLightsailActions.md#exportsnapshot)
- [GetActiveNames](AwsLightsailActions.md#getactivenames)
- [GetAlarms](AwsLightsailActions.md#getalarms)
- [GetAutoSnapshots](AwsLightsailActions.md#getautosnapshots)
- [GetBlueprints](AwsLightsailActions.md#getblueprints)
- [GetBucketAccessKeys](AwsLightsailActions.md#getbucketaccesskeys)
- [GetBucketBundles](AwsLightsailActions.md#getbucketbundles)
- [GetBucketMetricData](AwsLightsailActions.md#getbucketmetricdata)
- [GetBuckets](AwsLightsailActions.md#getbuckets)
- [GetBundles](AwsLightsailActions.md#getbundles)
- [GetCertificates](AwsLightsailActions.md#getcertificates)
- [GetCloudFormationStackRecords](AwsLightsailActions.md#getcloudformationstackrecords)
- [GetContactMethods](AwsLightsailActions.md#getcontactmethods)
- [GetContainerAPIMetadata](AwsLightsailActions.md#getcontainerapimetadata)
- [GetContainerImages](AwsLightsailActions.md#getcontainerimages)
- [GetContainerLog](AwsLightsailActions.md#getcontainerlog)
- [GetContainerServiceDeployments](AwsLightsailActions.md#getcontainerservicedeployments)
- [GetContainerServiceMetricData](AwsLightsailActions.md#getcontainerservicemetricdata)
- [GetContainerServicePowers](AwsLightsailActions.md#getcontainerservicepowers)
- [GetContainerServices](AwsLightsailActions.md#getcontainerservices)
- [GetCostEstimate](AwsLightsailActions.md#getcostestimate)
- [GetDisk](AwsLightsailActions.md#getdisk)
- [GetDiskSnapshot](AwsLightsailActions.md#getdisksnapshot)
- [GetDiskSnapshots](AwsLightsailActions.md#getdisksnapshots)
- [GetDisks](AwsLightsailActions.md#getdisks)
- [GetDistributionBundles](AwsLightsailActions.md#getdistributionbundles)
- [GetDistributionLatestCacheReset](AwsLightsailActions.md#getdistributionlatestcachereset)
- [GetDistributionMetricData](AwsLightsailActions.md#getdistributionmetricdata)
- [GetDistributions](AwsLightsailActions.md#getdistributions)
- [GetDomain](AwsLightsailActions.md#getdomain)
- [GetDomains](AwsLightsailActions.md#getdomains)
- [GetExportSnapshotRecords](AwsLightsailActions.md#getexportsnapshotrecords)
- [GetInstance](AwsLightsailActions.md#getinstance)
- [GetInstanceAccessDetails](AwsLightsailActions.md#getinstanceaccessdetails)
- [GetInstanceMetricData](AwsLightsailActions.md#getinstancemetricdata)
- [GetInstancePortStates](AwsLightsailActions.md#getinstanceportstates)
- [GetInstanceSnapshot](AwsLightsailActions.md#getinstancesnapshot)
- [GetInstanceSnapshots](AwsLightsailActions.md#getinstancesnapshots)
- [GetInstanceState](AwsLightsailActions.md#getinstancestate)
- [GetInstances](AwsLightsailActions.md#getinstances)
- [GetKeyPair](AwsLightsailActions.md#getkeypair)
- [GetKeyPairs](AwsLightsailActions.md#getkeypairs)
- [GetLoadBalancer](AwsLightsailActions.md#getloadbalancer)
- [GetLoadBalancerMetricData](AwsLightsailActions.md#getloadbalancermetricdata)
- [GetLoadBalancerTlsCertificates](AwsLightsailActions.md#getloadbalancertlscertificates)
- [GetLoadBalancerTlsPolicies](AwsLightsailActions.md#getloadbalancertlspolicies)
- [GetLoadBalancers](AwsLightsailActions.md#getloadbalancers)
- [GetOperation](AwsLightsailActions.md#getoperation)
- [GetOperations](AwsLightsailActions.md#getoperations)
- [GetOperationsForResource](AwsLightsailActions.md#getoperationsforresource)
- [GetRegions](AwsLightsailActions.md#getregions)
- [GetRelationalDatabase](AwsLightsailActions.md#getrelationaldatabase)
- [GetRelationalDatabaseBlueprints](AwsLightsailActions.md#getrelationaldatabaseblueprints)
- [GetRelationalDatabaseBundles](AwsLightsailActions.md#getrelationaldatabasebundles)
- [GetRelationalDatabaseEvents](AwsLightsailActions.md#getrelationaldatabaseevents)
- [GetRelationalDatabaseLogEvents](AwsLightsailActions.md#getrelationaldatabaselogevents)
- [GetRelationalDatabaseLogStreams](AwsLightsailActions.md#getrelationaldatabaselogstreams)
- [GetRelationalDatabaseMasterUserPassword](AwsLightsailActions.md#getrelationaldatabasemasteruserpassword)
- [GetRelationalDatabaseMetricData](AwsLightsailActions.md#getrelationaldatabasemetricdata)
- [GetRelationalDatabaseParameters](AwsLightsailActions.md#getrelationaldatabaseparameters)
- [GetRelationalDatabaseSnapshot](AwsLightsailActions.md#getrelationaldatabasesnapshot)
- [GetRelationalDatabaseSnapshots](AwsLightsailActions.md#getrelationaldatabasesnapshots)
- [GetRelationalDatabases](AwsLightsailActions.md#getrelationaldatabases)
- [GetStaticIp](AwsLightsailActions.md#getstaticip)
- [GetStaticIps](AwsLightsailActions.md#getstaticips)
- [ImportKeyPair](AwsLightsailActions.md#importkeypair)
- [IsVpcPeered](AwsLightsailActions.md#isvpcpeered)
- [OpenInstancePublicPorts](AwsLightsailActions.md#openinstancepublicports)
- [PeerVpc](AwsLightsailActions.md#peervpc)
- [PutAlarm](AwsLightsailActions.md#putalarm)
- [PutInstancePublicPorts](AwsLightsailActions.md#putinstancepublicports)
- [RebootInstance](AwsLightsailActions.md#rebootinstance)
- [RebootRelationalDatabase](AwsLightsailActions.md#rebootrelationaldatabase)
- [RegisterContainerImage](AwsLightsailActions.md#registercontainerimage)
- [ReleaseStaticIp](AwsLightsailActions.md#releasestaticip)
- [ResetDistributionCache](AwsLightsailActions.md#resetdistributioncache)
- [SendContactMethodVerification](AwsLightsailActions.md#sendcontactmethodverification)
- [SetIpAddressType](AwsLightsailActions.md#setipaddresstype)
- [SetResourceAccessForBucket](AwsLightsailActions.md#setresourceaccessforbucket)
- [StartGUISession](AwsLightsailActions.md#startguisession)
- [StartInstance](AwsLightsailActions.md#startinstance)
- [StartRelationalDatabase](AwsLightsailActions.md#startrelationaldatabase)
- [StopGUISession](AwsLightsailActions.md#stopguisession)
- [StopInstance](AwsLightsailActions.md#stopinstance)
- [StopRelationalDatabase](AwsLightsailActions.md#stoprelationaldatabase)
- [TagResource](AwsLightsailActions.md#tagresource)
- [TestAlarm](AwsLightsailActions.md#testalarm)
- [UnpeerVpc](AwsLightsailActions.md#unpeervpc)
- [UntagResource](AwsLightsailActions.md#untagresource)
- [UpdateBucket](AwsLightsailActions.md#updatebucket)
- [UpdateBucketBundle](AwsLightsailActions.md#updatebucketbundle)
- [UpdateContainerService](AwsLightsailActions.md#updatecontainerservice)
- [UpdateDistribution](AwsLightsailActions.md#updatedistribution)
- [UpdateDistributionBundle](AwsLightsailActions.md#updatedistributionbundle)
- [UpdateDomainEntry](AwsLightsailActions.md#updatedomainentry)
- [UpdateInstanceMetadataOptions](AwsLightsailActions.md#updateinstancemetadataoptions)
- [UpdateLoadBalancerAttribute](AwsLightsailActions.md#updateloadbalancerattribute)
- [UpdateRelationalDatabase](AwsLightsailActions.md#updaterelationaldatabase)
- [UpdateRelationalDatabaseParameters](AwsLightsailActions.md#updaterelationaldatabaseparameters)

## Enumeration Members

### AllocateStaticIp

• **AllocateStaticIp** = ``"lightsail:AllocateStaticIp"``

Grants permission to create a static IP address that can be attached to an inst
ance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AllocateStaticIp.html

#### Defined in

actions/lightsail.ts:18

___

### AttachCertificateToDistribution

• **AttachCertificateToDistribution** = ``"lightsail:AttachCertificateToDistribution"``

Grants permission to attach an SSL/TLS certificate to your Amazon Lightsail con
tent delivery network (CDN) distribution

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachCertificateToDistribution.html

#### Defined in

actions/lightsail.ts:25

___

### AttachDisk

• **AttachDisk** = ``"lightsail:AttachDisk"``

Grants permission to attach a disk to an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachDisk.html

#### Defined in

actions/lightsail.ts:31

___

### AttachInstancesToLoadBalancer

• **AttachInstancesToLoadBalancer** = ``"lightsail:AttachInstancesToLoadBalancer"``

Grants permission to attach one or more instances to a load balancer

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachInstancesToLoadBalancer.html

#### Defined in

actions/lightsail.ts:37

___

### AttachLoadBalancerTlsCertificate

• **AttachLoadBalancerTlsCertificate** = ``"lightsail:AttachLoadBalancerTlsCertificate"``

Grants permission to attach a TLS certificate to a load balancer

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachLoadBalancerTlsCertificate.html

#### Defined in

actions/lightsail.ts:43

___

### AttachStaticIp

• **AttachStaticIp** = ``"lightsail:AttachStaticIp"``

Grants permission to attach a static IP address to an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachStaticIp.html

#### Defined in

actions/lightsail.ts:49

___

### CloseInstancePublicPorts

• **CloseInstancePublicPorts** = ``"lightsail:CloseInstancePublicPorts"``

Grants permission to close a public port of an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloseInstancePublicPorts.html

#### Defined in

actions/lightsail.ts:55

___

### CopySnapshot

• **CopySnapshot** = ``"lightsail:CopySnapshot"``

Grants permission to copy a snapshot from one AWS Region to another in Amazon L
ightsail

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CopySnapshot.html

#### Defined in

actions/lightsail.ts:62

___

### CreateBucket

• **CreateBucket** = ``"lightsail:CreateBucket"``

Grants permission to create an Amazon Lightsail bucket

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucket.html

#### Defined in

actions/lightsail.ts:68

___

### CreateBucketAccessKey

• **CreateBucketAccessKey** = ``"lightsail:CreateBucketAccessKey"``

Grants permission to create a new access key for the specified bucket

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html

#### Defined in

actions/lightsail.ts:74

___

### CreateCertificate

• **CreateCertificate** = ``"lightsail:CreateCertificate"``

Grants permission to create an SSL/TLS certificate

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCertificate.html

#### Defined in

actions/lightsail.ts:80

___

### CreateCloudFormationStack

• **CreateCloudFormationStack** = ``"lightsail:CreateCloudFormationStack"``

Grants permission to create a new Amazon EC2 instance from an exported Amazon L
ightsail snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html

#### Defined in

actions/lightsail.ts:87

___

### CreateContactMethod

• **CreateContactMethod** = ``"lightsail:CreateContactMethod"``

Grants permission to create an email or SMS text message contact method

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContactMethod.html

#### Defined in

actions/lightsail.ts:93

___

### CreateContainerService

• **CreateContainerService** = ``"lightsail:CreateContainerService"``

Grants permission to create an Amazon Lightsail container service

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContainerService.html

#### Defined in

actions/lightsail.ts:99

___

### CreateContainerServiceDeployment

• **CreateContainerServiceDeployment** = ``"lightsail:CreateContainerServiceDeployment"``

Grants permission to create a deployment for your Amazon Lightsail container se
rvice

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContainerServiceDeployment.html

#### Defined in

actions/lightsail.ts:106

___

### CreateContainerServiceRegistryLogin

• **CreateContainerServiceRegistryLogin** = ``"lightsail:CreateContainerServiceRegistryLogin"``

Grants permission to create a temporary set of log in credentials that you can
use to log in to the Docker process on your local machine

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContainerServiceRegistryLogin.html

#### Defined in

actions/lightsail.ts:113

___

### CreateDisk

• **CreateDisk** = ``"lightsail:CreateDisk"``

Grants permission to create a disk

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDisk.html

#### Defined in

actions/lightsail.ts:119

___

### CreateDiskFromSnapshot

• **CreateDiskFromSnapshot** = ``"lightsail:CreateDiskFromSnapshot"``

Grants permission to create a disk from snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDiskFromSnapshot.html

#### Defined in

actions/lightsail.ts:125

___

### CreateDiskSnapshot

• **CreateDiskSnapshot** = ``"lightsail:CreateDiskSnapshot"``

Grants permission to create a disk snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDiskSnapshot.html

#### Defined in

actions/lightsail.ts:131

___

### CreateDistribution

• **CreateDistribution** = ``"lightsail:CreateDistribution"``

Grants permission to create an Amazon Lightsail content delivery network (CDN)
distribution

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDistribution.html

#### Defined in

actions/lightsail.ts:138

___

### CreateDomain

• **CreateDomain** = ``"lightsail:CreateDomain"``

Grants permission to create a domain resource for the specified domain name

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomain.html

#### Defined in

actions/lightsail.ts:144

___

### CreateDomainEntry

• **CreateDomainEntry** = ``"lightsail:CreateDomainEntry"``

Grants permission to create one or more DNS record entries for a domain resourc
e: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS),
start of authority (SOA), service locator (SRV), or text (TXT)

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomainEntry.html

#### Defined in

actions/lightsail.ts:152

___

### CreateGUISessionAccessDetails

• **CreateGUISessionAccessDetails** = ``"lightsail:CreateGUISessionAccessDetails"``

Grants permission to create URLs that are used to access an instance's graphica
l user interface (GUI) session

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateGUISessionAccessDetails.html

#### Defined in

actions/lightsail.ts:159

___

### CreateInstanceSnapshot

• **CreateInstanceSnapshot** = ``"lightsail:CreateInstanceSnapshot"``

Grants permission to create an instance snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstanceSnapshot.html

#### Defined in

actions/lightsail.ts:165

___

### CreateInstances

• **CreateInstances** = ``"lightsail:CreateInstances"``

Grants permission to create one or more instances

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstances.html

#### Defined in

actions/lightsail.ts:171

___

### CreateInstancesFromSnapshot

• **CreateInstancesFromSnapshot** = ``"lightsail:CreateInstancesFromSnapshot"``

Grants permission to create one or more instances based on an instance snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstancesFromSnapshot.html

#### Defined in

actions/lightsail.ts:177

___

### CreateKeyPair

• **CreateKeyPair** = ``"lightsail:CreateKeyPair"``

Grants permission to create a key pair used to authenticate and connect to an i
nstance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html

#### Defined in

actions/lightsail.ts:184

___

### CreateLoadBalancer

• **CreateLoadBalancer** = ``"lightsail:CreateLoadBalancer"``

Grants permission to create a load balancer

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancer.html

#### Defined in

actions/lightsail.ts:190

___

### CreateLoadBalancerTlsCertificate

• **CreateLoadBalancerTlsCertificate** = ``"lightsail:CreateLoadBalancerTlsCertificate"``

Grants permission to create a load balancer TLS certificate

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancerTlsCertificate.html

#### Defined in

actions/lightsail.ts:196

___

### CreateRelationalDatabase

• **CreateRelationalDatabase** = ``"lightsail:CreateRelationalDatabase"``

Grants permission to create a new relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabase.html

#### Defined in

actions/lightsail.ts:202

___

### CreateRelationalDatabaseFromSnapshot

• **CreateRelationalDatabaseFromSnapshot** = ``"lightsail:CreateRelationalDatabaseFromSnapshot"``

Grants permission to create a new relational database from a snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabaseFromSnapshot.html

#### Defined in

actions/lightsail.ts:208

___

### CreateRelationalDatabaseSnapshot

• **CreateRelationalDatabaseSnapshot** = ``"lightsail:CreateRelationalDatabaseSnapshot"``

Grants permission to create a relational database snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabaseSnapshot.html

#### Defined in

actions/lightsail.ts:214

___

### DeleteAlarm

• **DeleteAlarm** = ``"lightsail:DeleteAlarm"``

Grants permission to delete an alarm

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteAlarm.html

#### Defined in

actions/lightsail.ts:220

___

### DeleteAutoSnapshot

• **DeleteAutoSnapshot** = ``"lightsail:DeleteAutoSnapshot"``

Grants permission to delete an automatic snapshot of an instance or disk

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteAutoSnapshot.html

#### Defined in

actions/lightsail.ts:226

___

### DeleteBucket

• **DeleteBucket** = ``"lightsail:DeleteBucket"``

Grants permission to delete an Amazon Lightsail bucket

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteBucket.html

#### Defined in

actions/lightsail.ts:232

___

### DeleteBucketAccessKey

• **DeleteBucketAccessKey** = ``"lightsail:DeleteBucketAccessKey"``

Grants permission to delete an access key for the specified Amazon Lightsail bu
cket

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteBucketAccessKey.html

#### Defined in

actions/lightsail.ts:239

___

### DeleteCertificate

• **DeleteCertificate** = ``"lightsail:DeleteCertificate"``

Grants permission to delete an SSL/TLS certificate

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteCertificate.html

#### Defined in

actions/lightsail.ts:245

___

### DeleteContactMethod

• **DeleteContactMethod** = ``"lightsail:DeleteContactMethod"``

Grants permission to delete a contact method

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteContactMethod.html

#### Defined in

actions/lightsail.ts:251

___

### DeleteContainerImage

• **DeleteContainerImage** = ``"lightsail:DeleteContainerImage"``

Grants permission to delete a container image that is registered to your Amazon
Lightsail container service

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteContainerImage.html

#### Defined in

actions/lightsail.ts:258

___

### DeleteContainerService

• **DeleteContainerService** = ``"lightsail:DeleteContainerService"``

Grants permission to delete your Amazon Lightsail container service

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteContainerService.html

#### Defined in

actions/lightsail.ts:264

___

### DeleteDisk

• **DeleteDisk** = ``"lightsail:DeleteDisk"``

Grants permission to delete a disk

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDisk.html

#### Defined in

actions/lightsail.ts:270

___

### DeleteDiskSnapshot

• **DeleteDiskSnapshot** = ``"lightsail:DeleteDiskSnapshot"``

Grants permission to delete a disk snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDiskSnapshot.html

#### Defined in

actions/lightsail.ts:276

___

### DeleteDistribution

• **DeleteDistribution** = ``"lightsail:DeleteDistribution"``

Grants permission to delete your Amazon Lightsail content delivery network (CDN
) distribution

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDistribution.html

#### Defined in

actions/lightsail.ts:283

___

### DeleteDomain

• **DeleteDomain** = ``"lightsail:DeleteDomain"``

Grants permission to delete a domain resource and all of its DNS records

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomain.html

#### Defined in

actions/lightsail.ts:289

___

### DeleteDomainEntry

• **DeleteDomainEntry** = ``"lightsail:DeleteDomainEntry"``

Grants permission to delete a DNS record entry for a domain resource

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomainEntry.html

#### Defined in

actions/lightsail.ts:295

___

### DeleteInstance

• **DeleteInstance** = ``"lightsail:DeleteInstance"``

Grants permission to delete an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstance.html

#### Defined in

actions/lightsail.ts:301

___

### DeleteInstanceSnapshot

• **DeleteInstanceSnapshot** = ``"lightsail:DeleteInstanceSnapshot"``

Grants permission to delete an instance snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstanceSnapshot.html

#### Defined in

actions/lightsail.ts:307

___

### DeleteKeyPair

• **DeleteKeyPair** = ``"lightsail:DeleteKeyPair"``

Grants permission to delete a key pair used to authenticate and connect to an i
nstance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKeyPair.html

#### Defined in

actions/lightsail.ts:314

___

### DeleteKnownHostKeys

• **DeleteKnownHostKeys** = ``"lightsail:DeleteKnownHostKeys"``

Grants permission to delete the known host key or certificate used by the Amazo
n Lightsail browser-based SSH or RDP clients to authenticate an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKnownHostKeys.html

#### Defined in

actions/lightsail.ts:321

___

### DeleteLoadBalancer

• **DeleteLoadBalancer** = ``"lightsail:DeleteLoadBalancer"``

Grants permission to delete a load balancer

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancer.html

#### Defined in

actions/lightsail.ts:327

___

### DeleteLoadBalancerTlsCertificate

• **DeleteLoadBalancerTlsCertificate** = ``"lightsail:DeleteLoadBalancerTlsCertificate"``

Grants permission to delete a load balancer TLS certificate

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html

#### Defined in

actions/lightsail.ts:333

___

### DeleteRelationalDatabase

• **DeleteRelationalDatabase** = ``"lightsail:DeleteRelationalDatabase"``

Grants permission to delete a relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabase.html

#### Defined in

actions/lightsail.ts:339

___

### DeleteRelationalDatabaseSnapshot

• **DeleteRelationalDatabaseSnapshot** = ``"lightsail:DeleteRelationalDatabaseSnapshot"``

Grants permission to delete a relational database snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabaseSnapshot.html

#### Defined in

actions/lightsail.ts:345

___

### DetachCertificateFromDistribution

• **DetachCertificateFromDistribution** = ``"lightsail:DetachCertificateFromDistribution"``

Grants permission to detach an SSL/TLS certificate from your Amazon Lightsail c
ontent delivery network (CDN) distribution

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachCertificateFromDistribution.html

#### Defined in

actions/lightsail.ts:352

___

### DetachDisk

• **DetachDisk** = ``"lightsail:DetachDisk"``

Grants permission to detach a disk from an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachDisk.html

#### Defined in

actions/lightsail.ts:358

___

### DetachInstancesFromLoadBalancer

• **DetachInstancesFromLoadBalancer** = ``"lightsail:DetachInstancesFromLoadBalancer"``

Grants permission to detach one or more instances from a load balancer

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html

#### Defined in

actions/lightsail.ts:364

___

### DetachStaticIp

• **DetachStaticIp** = ``"lightsail:DetachStaticIp"``

Grants permission to detach a static IP from an instance to which it is attache
d

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachStaticIp.html

#### Defined in

actions/lightsail.ts:371

___

### DisableAddOn

• **DisableAddOn** = ``"lightsail:DisableAddOn"``

Grants permission to disable an add-on for an Amazon Lightsail resource

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DisableAddOn.html

#### Defined in

actions/lightsail.ts:377

___

### DownloadDefaultKeyPair

• **DownloadDefaultKeyPair** = ``"lightsail:DownloadDefaultKeyPair"``

Grants permission to download the default key pair used to authenticate and con
nect to instances in a specific AWS Region

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html

#### Defined in

actions/lightsail.ts:384

___

### EnableAddOn

• **EnableAddOn** = ``"lightsail:EnableAddOn"``

Grants permission to enable or modify an add-on for an Amazon Lightsail resourc
e

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_EnableAddOn.html

#### Defined in

actions/lightsail.ts:391

___

### ExportSnapshot

• **ExportSnapshot** = ``"lightsail:ExportSnapshot"``

Grants permission to export an Amazon Lightsail snapshot to Amazon EC2

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshot.html

#### Defined in

actions/lightsail.ts:397

___

### GetActiveNames

• **GetActiveNames** = ``"lightsail:GetActiveNames"``

Grants permission to get the names of all active (not deleted) resources

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetActiveNames.html

#### Defined in

actions/lightsail.ts:403

___

### GetAlarms

• **GetAlarms** = ``"lightsail:GetAlarms"``

Grants permission to view information about the configured alarms

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetAlarms.html

#### Defined in

actions/lightsail.ts:409

___

### GetAutoSnapshots

• **GetAutoSnapshots** = ``"lightsail:GetAutoSnapshots"``

Grants permission to view the available automatic snapshots for an instance or
disk

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetAutoSnapshots.html

#### Defined in

actions/lightsail.ts:416

___

### GetBlueprints

• **GetBlueprints** = ``"lightsail:GetBlueprints"``

Grants permission to get a list of instance images, or blueprints. You can use
a blueprint to create a new instance already running a specific operating syste
m, as well as a pre-installed application or development stack. The software th
at runs on your instance depends on the blueprint you define when creating the
instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBlueprints.html

#### Defined in

actions/lightsail.ts:426

___

### GetBucketAccessKeys

• **GetBucketAccessKeys** = ``"lightsail:GetBucketAccessKeys"``

Grants permission to get the existing access key IDs for the specified Amazon L
ightsail bucket

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html

#### Defined in

actions/lightsail.ts:433

___

### GetBucketBundles

• **GetBucketBundles** = ``"lightsail:GetBucketBundles"``

Grants permission to get the bundles that can be applied to an Amazon Lightsail
bucket

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html

#### Defined in

actions/lightsail.ts:440

___

### GetBucketMetricData

• **GetBucketMetricData** = ``"lightsail:GetBucketMetricData"``

Grants permission to get the data points of a specific metric for an Amazon Lig
htsail bucket

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketMetricData.html

#### Defined in

actions/lightsail.ts:447

___

### GetBuckets

• **GetBuckets** = ``"lightsail:GetBuckets"``

Grants permission to get information about one or more Amazon Lightsail buckets

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html

#### Defined in

actions/lightsail.ts:453

___

### GetBundles

• **GetBundles** = ``"lightsail:GetBundles"``

Grants permission to get a list of instance bundles. You can use a bundle to cr
eate a new instance with a set of performance specifications, such as CPU count
, disk size, RAM size, and network transfer allowance. The cost of your instanc
e depends on the bundle you define when creating the instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBundles.html

#### Defined in

actions/lightsail.ts:462

___

### GetCertificates

• **GetCertificates** = ``"lightsail:GetCertificates"``

Grants permission to view information about one or more Amazon Lightsail SSL/TL
S certificates

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCertificates.html

#### Defined in

actions/lightsail.ts:469

___

### GetCloudFormationStackRecords

• **GetCloudFormationStackRecords** = ``"lightsail:GetCloudFormationStackRecords"``

Grants permission to get information about all CloudFormation stacks used to cr
eate Amazon EC2 resources from exported Amazon Lightsail snapshots

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCloudFormationStackRecords.html

#### Defined in

actions/lightsail.ts:476

___

### GetContactMethods

• **GetContactMethods** = ``"lightsail:GetContactMethods"``

Grants permission to view information about the configured contact methods

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContactMethods.html

#### Defined in

actions/lightsail.ts:482

___

### GetContainerAPIMetadata

• **GetContainerAPIMetadata** = ``"lightsail:GetContainerAPIMetadata"``

Grants permission to view information about Amazon Lightsail containers, such a
s the current version of the Lightsail Control (lightsailctl) plugin

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerAPIMetadata.html

#### Defined in

actions/lightsail.ts:489

___

### GetContainerImages

• **GetContainerImages** = ``"lightsail:GetContainerImages"``

Grants permission to view the container images that are registered to your Amaz
on Lightsail container service

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerImages.html

#### Defined in

actions/lightsail.ts:496

___

### GetContainerLog

• **GetContainerLog** = ``"lightsail:GetContainerLog"``

Grants permission to view the log events of a container of your Amazon Lightsai
l container service

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerLog.html

#### Defined in

actions/lightsail.ts:503

___

### GetContainerServiceDeployments

• **GetContainerServiceDeployments** = ``"lightsail:GetContainerServiceDeployments"``

Grants permission to view the deployments for your Amazon Lightsail container s
ervice

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServiceDeployments.html

#### Defined in

actions/lightsail.ts:510

___

### GetContainerServiceMetricData

• **GetContainerServiceMetricData** = ``"lightsail:GetContainerServiceMetricData"``

Grants permission to view the data points of a specific metric of your Amazon L
ightsail container service

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServiceMetricData.html

#### Defined in

actions/lightsail.ts:517

___

### GetContainerServicePowers

• **GetContainerServicePowers** = ``"lightsail:GetContainerServicePowers"``

Grants permission to view the list of powers that can be specified for your Ama
zon Lightsail container services

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServicePowers.html

#### Defined in

actions/lightsail.ts:524

___

### GetContainerServices

• **GetContainerServices** = ``"lightsail:GetContainerServices"``

Grants permission to view information about one or more of your Amazon Lightsai
l container services

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServices.html

#### Defined in

actions/lightsail.ts:531

___

### GetCostEstimate

• **GetCostEstimate** = ``"lightsail:GetCostEstimate"``

Grants permission to get the information about the cost estimate for a specifie
d resource

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCostEstimate.html

#### Defined in

actions/lightsail.ts:538

___

### GetDisk

• **GetDisk** = ``"lightsail:GetDisk"``

Grants permission to get information about a disk

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisk.html

#### Defined in

actions/lightsail.ts:544

___

### GetDiskSnapshot

• **GetDiskSnapshot** = ``"lightsail:GetDiskSnapshot"``

Grants permission to get information about a disk snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshot.html

#### Defined in

actions/lightsail.ts:550

___

### GetDiskSnapshots

• **GetDiskSnapshots** = ``"lightsail:GetDiskSnapshots"``

Grants permission to get information about all disk snapshots

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshots.html

#### Defined in

actions/lightsail.ts:556

___

### GetDisks

• **GetDisks** = ``"lightsail:GetDisks"``

Grants permission to get information about all disks

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisks.html

#### Defined in

actions/lightsail.ts:562

___

### GetDistributionBundles

• **GetDistributionBundles** = ``"lightsail:GetDistributionBundles"``

Grants permission to view the list of bundles that can be applied to you Amazon
Lightsail content delivery network (CDN) distributions

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributionBundles.html

#### Defined in

actions/lightsail.ts:569

___

### GetDistributionLatestCacheReset

• **GetDistributionLatestCacheReset** = ``"lightsail:GetDistributionLatestCacheReset"``

Grants permission to view the timestamp and status of the last cache reset of a
specific Amazon Lightsail content delivery network (CDN) distribution

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributionLatestCacheReset.html

#### Defined in

actions/lightsail.ts:576

___

### GetDistributionMetricData

• **GetDistributionMetricData** = ``"lightsail:GetDistributionMetricData"``

Grants permission to view the data points of a specific metric for an Amazon Li
ghtsail content delivery network (CDN) distribution

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributionMetricData.html

#### Defined in

actions/lightsail.ts:583

___

### GetDistributions

• **GetDistributions** = ``"lightsail:GetDistributions"``

Grants permission to view information about one or more of your Amazon Lightsai
l content delivery network (CDN) distributions

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributions.html

#### Defined in

actions/lightsail.ts:590

___

### GetDomain

• **GetDomain** = ``"lightsail:GetDomain"``

Grants permission to get DNS records for a domain resource

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomain.html

#### Defined in

actions/lightsail.ts:596

___

### GetDomains

• **GetDomains** = ``"lightsail:GetDomains"``

Grants permission to get DNS records for all domain resources

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomains.html

#### Defined in

actions/lightsail.ts:602

___

### GetExportSnapshotRecords

• **GetExportSnapshotRecords** = ``"lightsail:GetExportSnapshotRecords"``

Grants permission to get information about all records of exported Amazon Light
sail snapshots to Amazon EC2

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetExportSnapshotRecords.html

#### Defined in

actions/lightsail.ts:609

___

### GetInstance

• **GetInstance** = ``"lightsail:GetInstance"``

Grants permission to get information about an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstance.html

#### Defined in

actions/lightsail.ts:615

___

### GetInstanceAccessDetails

• **GetInstanceAccessDetails** = ``"lightsail:GetInstanceAccessDetails"``

Grants permission to get temporary keys you can use to authenticate and connect
to an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceAccessDetails.html

#### Defined in

actions/lightsail.ts:622

___

### GetInstanceMetricData

• **GetInstanceMetricData** = ``"lightsail:GetInstanceMetricData"``

Grants permission to get the data points for the specified metric of an instanc
e

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceMetricData.html

#### Defined in

actions/lightsail.ts:629

___

### GetInstancePortStates

• **GetInstancePortStates** = ``"lightsail:GetInstancePortStates"``

Grants permission to get the port states of an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstancePortStates.html

#### Defined in

actions/lightsail.ts:635

___

### GetInstanceSnapshot

• **GetInstanceSnapshot** = ``"lightsail:GetInstanceSnapshot"``

Grants permission to get information about an instance snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshot.html

#### Defined in

actions/lightsail.ts:641

___

### GetInstanceSnapshots

• **GetInstanceSnapshots** = ``"lightsail:GetInstanceSnapshots"``

Grants permission to get information about all instance snapshots

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshots.html

#### Defined in

actions/lightsail.ts:647

___

### GetInstanceState

• **GetInstanceState** = ``"lightsail:GetInstanceState"``

Grants permission to get the state of an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceState.html

#### Defined in

actions/lightsail.ts:653

___

### GetInstances

• **GetInstances** = ``"lightsail:GetInstances"``

Grants permission to get information about all instances

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstances.html

#### Defined in

actions/lightsail.ts:659

___

### GetKeyPair

• **GetKeyPair** = ``"lightsail:GetKeyPair"``

Grants permission to get information about a key pair

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPair.html

#### Defined in

actions/lightsail.ts:665

___

### GetKeyPairs

• **GetKeyPairs** = ``"lightsail:GetKeyPairs"``

Grants permission to get information about all key pairs

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPairs.html

#### Defined in

actions/lightsail.ts:671

___

### GetLoadBalancer

• **GetLoadBalancer** = ``"lightsail:GetLoadBalancer"``

Grants permission to get information about a load balancer

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancer.html

#### Defined in

actions/lightsail.ts:677

___

### GetLoadBalancerMetricData

• **GetLoadBalancerMetricData** = ``"lightsail:GetLoadBalancerMetricData"``

Grants permission to get the data points for the specified metric of a load bal
ancer

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerMetricData.html

#### Defined in

actions/lightsail.ts:684

___

### GetLoadBalancerTlsCertificates

• **GetLoadBalancerTlsCertificates** = ``"lightsail:GetLoadBalancerTlsCertificates"``

Grants permission to get information about a load balancer's TLS certificates

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsCertificates.html

#### Defined in

actions/lightsail.ts:690

___

### GetLoadBalancerTlsPolicies

• **GetLoadBalancerTlsPolicies** = ``"lightsail:GetLoadBalancerTlsPolicies"``

Grants permission to get a list of TLS security policies that you can apply to
Lightsail load balancers

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html

#### Defined in

actions/lightsail.ts:697

___

### GetLoadBalancers

• **GetLoadBalancers** = ``"lightsail:GetLoadBalancers"``

Grants permission to get information about load balancers

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancers.html

#### Defined in

actions/lightsail.ts:703

___

### GetOperation

• **GetOperation** = ``"lightsail:GetOperation"``

Grants permission to get information about an operation. Operations include eve
nts such as when you create an instance, allocate a static IP, attach a static
IP, and so on

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperation.html

#### Defined in

actions/lightsail.ts:711

___

### GetOperations

• **GetOperations** = ``"lightsail:GetOperations"``

Grants permission to get information about all operations. Operations include e
vents such as when you create an instance, allocate a static IP, attach a stati
c IP, and so on

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperations.html

#### Defined in

actions/lightsail.ts:719

___

### GetOperationsForResource

• **GetOperationsForResource** = ``"lightsail:GetOperationsForResource"``

Grants permission to get operations for a resource

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperationsForResource.html

#### Defined in

actions/lightsail.ts:725

___

### GetRegions

• **GetRegions** = ``"lightsail:GetRegions"``

Grants permission to get a list of all valid AWS Regions for Amazon Lightsail

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html

#### Defined in

actions/lightsail.ts:731

___

### GetRelationalDatabase

• **GetRelationalDatabase** = ``"lightsail:GetRelationalDatabase"``

Grants permission to get information about a relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabase.html

#### Defined in

actions/lightsail.ts:737

___

### GetRelationalDatabaseBlueprints

• **GetRelationalDatabaseBlueprints** = ``"lightsail:GetRelationalDatabaseBlueprints"``

Grants permission to get a list of relational database images, or blueprints. Y
ou can use a blueprint to create a new database running a specific database eng
ine. The database engine that runs on your database depends on the blueprint yo
u define when creating the relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBlueprints.html

#### Defined in

actions/lightsail.ts:746

___

### GetRelationalDatabaseBundles

• **GetRelationalDatabaseBundles** = ``"lightsail:GetRelationalDatabaseBundles"``

Grants permission to get a list of relational database bundles. You can use a b
undle to create a new database with a set of performance specifications, such a
s CPU count, disk size, RAM size, network transfer allowance, and standard of h
igh availability. The cost of your database depends on the bundle you define wh
en creating the relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBundles.html

#### Defined in

actions/lightsail.ts:756

___

### GetRelationalDatabaseEvents

• **GetRelationalDatabaseEvents** = ``"lightsail:GetRelationalDatabaseEvents"``

Grants permission to get events for a relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseEvents.html

#### Defined in

actions/lightsail.ts:762

___

### GetRelationalDatabaseLogEvents

• **GetRelationalDatabaseLogEvents** = ``"lightsail:GetRelationalDatabaseLogEvents"``

Grants permission to get events for the specified log stream of a relational da
tabase

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogEvents.html

#### Defined in

actions/lightsail.ts:769

___

### GetRelationalDatabaseLogStreams

• **GetRelationalDatabaseLogStreams** = ``"lightsail:GetRelationalDatabaseLogStreams"``

Grants permission to get the log streams available for a relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogStreams.html

#### Defined in

actions/lightsail.ts:775

___

### GetRelationalDatabaseMasterUserPassword

• **GetRelationalDatabaseMasterUserPassword** = ``"lightsail:GetRelationalDatabaseMasterUserPassword"``

Grants permission to get the master user password of a relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMasterUserPassword.html

#### Defined in

actions/lightsail.ts:781

___

### GetRelationalDatabaseMetricData

• **GetRelationalDatabaseMetricData** = ``"lightsail:GetRelationalDatabaseMetricData"``

Grants permission to get the data points for the specified metric of a relation
al database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMetricData.html

#### Defined in

actions/lightsail.ts:788

___

### GetRelationalDatabaseParameters

• **GetRelationalDatabaseParameters** = ``"lightsail:GetRelationalDatabaseParameters"``

Grants permission to get the parameters of a relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseParameters.html

#### Defined in

actions/lightsail.ts:794

___

### GetRelationalDatabaseSnapshot

• **GetRelationalDatabaseSnapshot** = ``"lightsail:GetRelationalDatabaseSnapshot"``

Grants permission to get information about a relational database snapshot

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshot.html

#### Defined in

actions/lightsail.ts:800

___

### GetRelationalDatabaseSnapshots

• **GetRelationalDatabaseSnapshots** = ``"lightsail:GetRelationalDatabaseSnapshots"``

Grants permission to get information about all relational database snapshots

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshots.html

#### Defined in

actions/lightsail.ts:806

___

### GetRelationalDatabases

• **GetRelationalDatabases** = ``"lightsail:GetRelationalDatabases"``

Grants permission to get information about all relational databases

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabases.html

#### Defined in

actions/lightsail.ts:812

___

### GetStaticIp

• **GetStaticIp** = ``"lightsail:GetStaticIp"``

Grants permission to get information about a static IP

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIp.html

#### Defined in

actions/lightsail.ts:818

___

### GetStaticIps

• **GetStaticIps** = ``"lightsail:GetStaticIps"``

Grants permission to get information about all static IPs

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIps.html

#### Defined in

actions/lightsail.ts:824

___

### ImportKeyPair

• **ImportKeyPair** = ``"lightsail:ImportKeyPair"``

Grants permission to import a public key from a key pair

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html

#### Defined in

actions/lightsail.ts:830

___

### IsVpcPeered

• **IsVpcPeered** = ``"lightsail:IsVpcPeered"``

Grants permission to get a boolean value indicating whether the Amazon Lightsai
l virtual private cloud (VPC) is peered

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_IsVpcPeered.html

#### Defined in

actions/lightsail.ts:837

___

### OpenInstancePublicPorts

• **OpenInstancePublicPorts** = ``"lightsail:OpenInstancePublicPorts"``

Grants permission to add, or open a public port of an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_OpenInstancePublicPorts.html

#### Defined in

actions/lightsail.ts:843

___

### PeerVpc

• **PeerVpc** = ``"lightsail:PeerVpc"``

Grants permission to try to peer the Amazon Lightsail virtual private cloud (VP
C) with the default VPC

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PeerVpc.html

#### Defined in

actions/lightsail.ts:850

___

### PutAlarm

• **PutAlarm** = ``"lightsail:PutAlarm"``

Grants permission to creates or update an alarm, and associate it with the spec
ified metric

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PutAlarm.html

#### Defined in

actions/lightsail.ts:857

___

### PutInstancePublicPorts

• **PutInstancePublicPorts** = ``"lightsail:PutInstancePublicPorts"``

Grants permission to set the specified open ports for an instance, and closes a
ll ports for every protocol not included in the request

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PutInstancePublicPorts.html

#### Defined in

actions/lightsail.ts:864

___

### RebootInstance

• **RebootInstance** = ``"lightsail:RebootInstance"``

Grants permission to reboot an instance that is in a running state

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootInstance.html

#### Defined in

actions/lightsail.ts:870

___

### RebootRelationalDatabase

• **RebootRelationalDatabase** = ``"lightsail:RebootRelationalDatabase"``

Grants permission to reboot a relational database that is in a running state

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootRelationalDatabase.html

#### Defined in

actions/lightsail.ts:876

___

### RegisterContainerImage

• **RegisterContainerImage** = ``"lightsail:RegisterContainerImage"``

Grants permission to register a container image to your Amazon Lightsail contai
ner service

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RegisterContainerImage.html

#### Defined in

actions/lightsail.ts:883

___

### ReleaseStaticIp

• **ReleaseStaticIp** = ``"lightsail:ReleaseStaticIp"``

Grants permission to delete a static IP

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ReleaseStaticIp.html

#### Defined in

actions/lightsail.ts:889

___

### ResetDistributionCache

• **ResetDistributionCache** = ``"lightsail:ResetDistributionCache"``

Grants permission to delete currently cached content from your Amazon Lightsail
content delivery network (CDN) distribution

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ResetDistributionCache.html

#### Defined in

actions/lightsail.ts:896

___

### SendContactMethodVerification

• **SendContactMethodVerification** = ``"lightsail:SendContactMethodVerification"``

Grants permission to send a verification request to an email contact method to
ensure it's owned by the requester

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SendContactMethodVerification.html

#### Defined in

actions/lightsail.ts:903

___

### SetIpAddressType

• **SetIpAddressType** = ``"lightsail:SetIpAddressType"``

Grants permission to set the IP address type for a Amazon Lightsail resource

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetIpAddressType.html

#### Defined in

actions/lightsail.ts:909

___

### SetResourceAccessForBucket

• **SetResourceAccessForBucket** = ``"lightsail:SetResourceAccessForBucket"``

Grants permission to set the Amazon Lightsail resources that can access the spe
cified Amazon Lightsail bucket

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html

#### Defined in

actions/lightsail.ts:916

___

### StartGUISession

• **StartGUISession** = ``"lightsail:StartGUISession"``

Grants permission to initiate a graphical user interface (GUI) session used to
access an instance's operating system or application

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartGUISession.html

#### Defined in

actions/lightsail.ts:923

___

### StartInstance

• **StartInstance** = ``"lightsail:StartInstance"``

Grants permission to start an instance that is in a stopped state

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartInstance.html

#### Defined in

actions/lightsail.ts:929

___

### StartRelationalDatabase

• **StartRelationalDatabase** = ``"lightsail:StartRelationalDatabase"``

Grants permission to start a relational database that is in a stopped state

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartRelationalDatabase.html

#### Defined in

actions/lightsail.ts:935

___

### StopGUISession

• **StopGUISession** = ``"lightsail:StopGUISession"``

Grants permission to terminate a graphical user interface (GUI) session used to
access an instance's operating system or application

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopGUISession.html

#### Defined in

actions/lightsail.ts:942

___

### StopInstance

• **StopInstance** = ``"lightsail:StopInstance"``

Grants permission to stop an instance that is in a running state

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopInstance.html

#### Defined in

actions/lightsail.ts:948

___

### StopRelationalDatabase

• **StopRelationalDatabase** = ``"lightsail:StopRelationalDatabase"``

Grants permission to stop a relational database that is in a running state

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopRelationalDatabase.html

#### Defined in

actions/lightsail.ts:954

___

### TagResource

• **TagResource** = ``"lightsail:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TagResource.html

#### Defined in

actions/lightsail.ts:960

___

### TestAlarm

• **TestAlarm** = ``"lightsail:TestAlarm"``

Grants permission to test an alarm by displaying a banner on the Amazon Lightsa
il console or if a notification trigger is configured for the specified alarm,
by sending a notification to the notification protocol

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TestAlarm.html

#### Defined in

actions/lightsail.ts:968

___

### UnpeerVpc

• **UnpeerVpc** = ``"lightsail:UnpeerVpc"``

Grants permission to try to unpeer the Amazon Lightsail virtual private cloud (
VPC) from the default VPC

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UnpeerVpc.html

#### Defined in

actions/lightsail.ts:975

___

### UntagResource

• **UntagResource** = ``"lightsail:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UntagResource.html

#### Defined in

actions/lightsail.ts:981

___

### UpdateBucket

• **UpdateBucket** = ``"lightsail:UpdateBucket"``

Grants permission to update an existing Amazon Lightsail bucket

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucket.html

#### Defined in

actions/lightsail.ts:987

___

### UpdateBucketBundle

• **UpdateBucketBundle** = ``"lightsail:UpdateBucketBundle"``

Grants permission to update the bundle, or storage plan, of an existing Amazon
Lightsail bucket

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html

#### Defined in

actions/lightsail.ts:994

___

### UpdateContainerService

• **UpdateContainerService** = ``"lightsail:UpdateContainerService"``

Grants permission to update the configuration of your Amazon Lightsail containe
r service, such as its power, scale, and public domain names

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateContainerService.html

#### Defined in

actions/lightsail.ts:1001

___

### UpdateDistribution

• **UpdateDistribution** = ``"lightsail:UpdateDistribution"``

Grants permission to update an existing Amazon Lightsail content delivery netwo
rk (CDN) distribution or its configuration

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDistribution.html

#### Defined in

actions/lightsail.ts:1008

___

### UpdateDistributionBundle

• **UpdateDistributionBundle** = ``"lightsail:UpdateDistributionBundle"``

Grants permission to update the bundle of your Amazon Lightsail content deliver
y network (CDN) distribution

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDistributionBundle.html

#### Defined in

actions/lightsail.ts:1015

___

### UpdateDomainEntry

• **UpdateDomainEntry** = ``"lightsail:UpdateDomainEntry"``

Grants permission to update a domain recordset after it is created

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDomainEntry.html

#### Defined in

actions/lightsail.ts:1021

___

### UpdateInstanceMetadataOptions

• **UpdateInstanceMetadataOptions** = ``"lightsail:UpdateInstanceMetadataOptions"``

Grants permission to update metadata options for an instance

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateInstanceMetadataOptions.html

#### Defined in

actions/lightsail.ts:1027

___

### UpdateLoadBalancerAttribute

• **UpdateLoadBalancerAttribute** = ``"lightsail:UpdateLoadBalancerAttribute"``

Grants permission to update a load balancer attribute, such as the health check
path and session stickiness

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html

#### Defined in

actions/lightsail.ts:1034

___

### UpdateRelationalDatabase

• **UpdateRelationalDatabase** = ``"lightsail:UpdateRelationalDatabase"``

Grants permission to update a relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabase.html

#### Defined in

actions/lightsail.ts:1040

___

### UpdateRelationalDatabaseParameters

• **UpdateRelationalDatabaseParameters** = ``"lightsail:UpdateRelationalDatabaseParameters"``

Grants permission to update the parameters of a relational database

See https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabaseParameters.html

#### Defined in

actions/lightsail.ts:1046
