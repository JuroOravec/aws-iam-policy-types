[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRoute53Actions

# Enumeration: AwsRoute53Actions

All IAM policy actions for Amazon Route 53 (ROUTE53)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53.html

2024-02-12T09:58:59.005Z

## Table of contents

### Enumeration Members

- [ActivateKeySigningKey](AwsRoute53Actions.md#activatekeysigningkey)
- [AssociateVPCWithHostedZone](AwsRoute53Actions.md#associatevpcwithhostedzone)
- [ChangeCidrCollection](AwsRoute53Actions.md#changecidrcollection)
- [ChangeResourceRecordSets](AwsRoute53Actions.md#changeresourcerecordsets)
- [ChangeTagsForResource](AwsRoute53Actions.md#changetagsforresource)
- [CreateCidrCollection](AwsRoute53Actions.md#createcidrcollection)
- [CreateHealthCheck](AwsRoute53Actions.md#createhealthcheck)
- [CreateHostedZone](AwsRoute53Actions.md#createhostedzone)
- [CreateKeySigningKey](AwsRoute53Actions.md#createkeysigningkey)
- [CreateQueryLoggingConfig](AwsRoute53Actions.md#createqueryloggingconfig)
- [CreateReusableDelegationSet](AwsRoute53Actions.md#createreusabledelegationset)
- [CreateTrafficPolicy](AwsRoute53Actions.md#createtrafficpolicy)
- [CreateTrafficPolicyInstance](AwsRoute53Actions.md#createtrafficpolicyinstance)
- [CreateTrafficPolicyVersion](AwsRoute53Actions.md#createtrafficpolicyversion)
- [CreateVPCAssociationAuthorization](AwsRoute53Actions.md#createvpcassociationauthorization)
- [DeactivateKeySigningKey](AwsRoute53Actions.md#deactivatekeysigningkey)
- [DeleteCidrCollection](AwsRoute53Actions.md#deletecidrcollection)
- [DeleteHealthCheck](AwsRoute53Actions.md#deletehealthcheck)
- [DeleteHostedZone](AwsRoute53Actions.md#deletehostedzone)
- [DeleteKeySigningKey](AwsRoute53Actions.md#deletekeysigningkey)
- [DeleteQueryLoggingConfig](AwsRoute53Actions.md#deletequeryloggingconfig)
- [DeleteReusableDelegationSet](AwsRoute53Actions.md#deletereusabledelegationset)
- [DeleteTrafficPolicy](AwsRoute53Actions.md#deletetrafficpolicy)
- [DeleteTrafficPolicyInstance](AwsRoute53Actions.md#deletetrafficpolicyinstance)
- [DeleteVPCAssociationAuthorization](AwsRoute53Actions.md#deletevpcassociationauthorization)
- [DisableHostedZoneDNSSEC](AwsRoute53Actions.md#disablehostedzonednssec)
- [DisassociateVPCFromHostedZone](AwsRoute53Actions.md#disassociatevpcfromhostedzone)
- [EnableHostedZoneDNSSEC](AwsRoute53Actions.md#enablehostedzonednssec)
- [GetAccountLimit](AwsRoute53Actions.md#getaccountlimit)
- [GetChange](AwsRoute53Actions.md#getchange)
- [GetCheckerIpRanges](AwsRoute53Actions.md#getcheckeripranges)
- [GetDNSSEC](AwsRoute53Actions.md#getdnssec)
- [GetGeoLocation](AwsRoute53Actions.md#getgeolocation)
- [GetHealthCheck](AwsRoute53Actions.md#gethealthcheck)
- [GetHealthCheckCount](AwsRoute53Actions.md#gethealthcheckcount)
- [GetHealthCheckLastFailureReason](AwsRoute53Actions.md#gethealthchecklastfailurereason)
- [GetHealthCheckStatus](AwsRoute53Actions.md#gethealthcheckstatus)
- [GetHostedZone](AwsRoute53Actions.md#gethostedzone)
- [GetHostedZoneCount](AwsRoute53Actions.md#gethostedzonecount)
- [GetHostedZoneLimit](AwsRoute53Actions.md#gethostedzonelimit)
- [GetQueryLoggingConfig](AwsRoute53Actions.md#getqueryloggingconfig)
- [GetReusableDelegationSet](AwsRoute53Actions.md#getreusabledelegationset)
- [GetReusableDelegationSetLimit](AwsRoute53Actions.md#getreusabledelegationsetlimit)
- [GetTrafficPolicy](AwsRoute53Actions.md#gettrafficpolicy)
- [GetTrafficPolicyInstance](AwsRoute53Actions.md#gettrafficpolicyinstance)
- [GetTrafficPolicyInstanceCount](AwsRoute53Actions.md#gettrafficpolicyinstancecount)
- [ListCidrBlocks](AwsRoute53Actions.md#listcidrblocks)
- [ListCidrCollections](AwsRoute53Actions.md#listcidrcollections)
- [ListCidrLocations](AwsRoute53Actions.md#listcidrlocations)
- [ListGeoLocations](AwsRoute53Actions.md#listgeolocations)
- [ListHealthChecks](AwsRoute53Actions.md#listhealthchecks)
- [ListHostedZones](AwsRoute53Actions.md#listhostedzones)
- [ListHostedZonesByName](AwsRoute53Actions.md#listhostedzonesbyname)
- [ListHostedZonesByVPC](AwsRoute53Actions.md#listhostedzonesbyvpc)
- [ListQueryLoggingConfigs](AwsRoute53Actions.md#listqueryloggingconfigs)
- [ListResourceRecordSets](AwsRoute53Actions.md#listresourcerecordsets)
- [ListReusableDelegationSets](AwsRoute53Actions.md#listreusabledelegationsets)
- [ListTagsForResource](AwsRoute53Actions.md#listtagsforresource)
- [ListTagsForResources](AwsRoute53Actions.md#listtagsforresources)
- [ListTrafficPolicies](AwsRoute53Actions.md#listtrafficpolicies)
- [ListTrafficPolicyInstances](AwsRoute53Actions.md#listtrafficpolicyinstances)
- [ListTrafficPolicyInstancesByHostedZone](AwsRoute53Actions.md#listtrafficpolicyinstancesbyhostedzone)
- [ListTrafficPolicyInstancesByPolicy](AwsRoute53Actions.md#listtrafficpolicyinstancesbypolicy)
- [ListTrafficPolicyVersions](AwsRoute53Actions.md#listtrafficpolicyversions)
- [ListVPCAssociationAuthorizations](AwsRoute53Actions.md#listvpcassociationauthorizations)
- [TestDNSAnswer](AwsRoute53Actions.md#testdnsanswer)
- [UpdateHealthCheck](AwsRoute53Actions.md#updatehealthcheck)
- [UpdateHostedZoneComment](AwsRoute53Actions.md#updatehostedzonecomment)
- [UpdateTrafficPolicyComment](AwsRoute53Actions.md#updatetrafficpolicycomment)
- [UpdateTrafficPolicyInstance](AwsRoute53Actions.md#updatetrafficpolicyinstance)

## Enumeration Members

### ActivateKeySigningKey

• **ActivateKeySigningKey** = ``"route53:ActivateKeySigningKey"``

Grants permission to activate a key-signing key so that it can be used for sign
ing by DNSSEC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ActivateKeySigningKey.html

#### Defined in

actions/route53.ts:18

___

### AssociateVPCWithHostedZone

• **AssociateVPCWithHostedZone** = ``"route53:AssociateVPCWithHostedZone"``

Grants permission to associate an additional Amazon VPC with a private hosted z
one

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_AssociateVPCWithHostedZone.html

#### Defined in

actions/route53.ts:25

___

### ChangeCidrCollection

• **ChangeCidrCollection** = ``"route53:ChangeCidrCollection"``

Grants permission to create or delete CIDR blocks within a CIDR collection

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeCidrCollection.html

#### Defined in

actions/route53.ts:31

___

### ChangeResourceRecordSets

• **ChangeResourceRecordSets** = ``"route53:ChangeResourceRecordSets"``

Grants permission to create, update, or delete a record, which contains authori
tative DNS information for a specified domain or subdomain name

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html

#### Defined in

actions/route53.ts:38

___

### ChangeTagsForResource

• **ChangeTagsForResource** = ``"route53:ChangeTagsForResource"``

Grants permission to add, edit, or delete tags for a health check or a hosted z
one

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeTagsForResource.html

#### Defined in

actions/route53.ts:45

___

### CreateCidrCollection

• **CreateCidrCollection** = ``"route53:CreateCidrCollection"``

Grants permission to create a new CIDR collection

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateCidrCollection.html

#### Defined in

actions/route53.ts:51

___

### CreateHealthCheck

• **CreateHealthCheck** = ``"route53:CreateHealthCheck"``

Grants permission to create a new health check, which monitors the health and p
erformance of your web applications, web servers, and other resources

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHealthCheck.html

#### Defined in

actions/route53.ts:58

___

### CreateHostedZone

• **CreateHostedZone** = ``"route53:CreateHostedZone"``

Grants permission to create a public hosted zone, which you use to specify how
the Domain Name System (DNS) routes traffic on the Internet for a domain, such
as example.com, and its subdomains

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html

#### Defined in

actions/route53.ts:66

___

### CreateKeySigningKey

• **CreateKeySigningKey** = ``"route53:CreateKeySigningKey"``

Grants permission to create a new key-signing key associated with a hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateKeySigningKey.html

#### Defined in

actions/route53.ts:72

___

### CreateQueryLoggingConfig

• **CreateQueryLoggingConfig** = ``"route53:CreateQueryLoggingConfig"``

Grants permission to create a configuration for DNS query logging

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html

#### Defined in

actions/route53.ts:78

___

### CreateReusableDelegationSet

• **CreateReusableDelegationSet** = ``"route53:CreateReusableDelegationSet"``

Grants permission to create a delegation set (a group of four name servers) tha
t can be reused by multiple hosted zones

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html

#### Defined in

actions/route53.ts:85

___

### CreateTrafficPolicy

• **CreateTrafficPolicy** = ``"route53:CreateTrafficPolicy"``

Grants permission to create a traffic policy, which you use to create multiple
DNS records for one domain name (such as example.com) or one subdomain name (su
ch as www.example.com)

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html

#### Defined in

actions/route53.ts:93

___

### CreateTrafficPolicyInstance

• **CreateTrafficPolicyInstance** = ``"route53:CreateTrafficPolicyInstance"``

Grants permission to create records in a specified hosted zone based on the set
tings in a specified traffic policy version

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyInstance.html

#### Defined in

actions/route53.ts:100

___

### CreateTrafficPolicyVersion

• **CreateTrafficPolicyVersion** = ``"route53:CreateTrafficPolicyVersion"``

Grants permission to create a new version of an existing traffic policy

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyVersion.html

#### Defined in

actions/route53.ts:106

___

### CreateVPCAssociationAuthorization

• **CreateVPCAssociationAuthorization** = ``"route53:CreateVPCAssociationAuthorization"``

Grants permission to authorize the AWS account that created a specified VPC to
submit an AssociateVPCWithHostedZone request, which associates the VPC with a s
pecified hosted zone that was created by a different account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateVPCAssociationAuthorization.html

#### Defined in

actions/route53.ts:114

___

### DeactivateKeySigningKey

• **DeactivateKeySigningKey** = ``"route53:DeactivateKeySigningKey"``

Grants permission to deactivate a key-signing key so that it will not be used f
or signing by DNSSEC

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeactivateKeySigningKey.html

#### Defined in

actions/route53.ts:121

___

### DeleteCidrCollection

• **DeleteCidrCollection** = ``"route53:DeleteCidrCollection"``

Grants permission to delete a CIDR collection

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteCidrCollection.html

#### Defined in

actions/route53.ts:127

___

### DeleteHealthCheck

• **DeleteHealthCheck** = ``"route53:DeleteHealthCheck"``

Grants permission to delete a health check

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHealthCheck.html

#### Defined in

actions/route53.ts:133

___

### DeleteHostedZone

• **DeleteHostedZone** = ``"route53:DeleteHostedZone"``

Grants permission to delete a hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html

#### Defined in

actions/route53.ts:139

___

### DeleteKeySigningKey

• **DeleteKeySigningKey** = ``"route53:DeleteKeySigningKey"``

Grants permission to delete a key-signing key

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteKeySigningKey.html

#### Defined in

actions/route53.ts:145

___

### DeleteQueryLoggingConfig

• **DeleteQueryLoggingConfig** = ``"route53:DeleteQueryLoggingConfig"``

Grants permission to delete a configuration for DNS query logging

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html

#### Defined in

actions/route53.ts:151

___

### DeleteReusableDelegationSet

• **DeleteReusableDelegationSet** = ``"route53:DeleteReusableDelegationSet"``

Grants permission to delete a reusable delegation set

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteReusableDelegationSet.html

#### Defined in

actions/route53.ts:157

___

### DeleteTrafficPolicy

• **DeleteTrafficPolicy** = ``"route53:DeleteTrafficPolicy"``

Grants permission to delete a traffic policy

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html

#### Defined in

actions/route53.ts:163

___

### DeleteTrafficPolicyInstance

• **DeleteTrafficPolicyInstance** = ``"route53:DeleteTrafficPolicyInstance"``

Grants permission to delete a traffic policy instance and all the records that
Route 53 created when you created the instance

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicyInstance.html

#### Defined in

actions/route53.ts:170

___

### DeleteVPCAssociationAuthorization

• **DeleteVPCAssociationAuthorization** = ``"route53:DeleteVPCAssociationAuthorization"``

Grants permission to remove authorization for associating an Amazon Virtual Pri
vate Cloud with a Route 53 private hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteVPCAssociationAuthorization.html

#### Defined in

actions/route53.ts:177

___

### DisableHostedZoneDNSSEC

• **DisableHostedZoneDNSSEC** = ``"route53:DisableHostedZoneDNSSEC"``

Grants permission to disable DNSSEC signing in a specific hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DisableHostedZoneDNSSEC.html

#### Defined in

actions/route53.ts:183

___

### DisassociateVPCFromHostedZone

• **DisassociateVPCFromHostedZone** = ``"route53:DisassociateVPCFromHostedZone"``

Grants permission to disassociate an Amazon Virtual Private Cloud from a Route
53 private hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_DisassociateVPCFromHostedZone.html

#### Defined in

actions/route53.ts:190

___

### EnableHostedZoneDNSSEC

• **EnableHostedZoneDNSSEC** = ``"route53:EnableHostedZoneDNSSEC"``

Grants permission to enable DNSSEC signing in a specific hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_EnableHostedZoneDNSSEC.html

#### Defined in

actions/route53.ts:196

___

### GetAccountLimit

• **GetAccountLimit** = ``"route53:GetAccountLimit"``

Grants permission to get the specified limit for the current account, for examp
le, the maximum number of health checks that you can create using the account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html

#### Defined in

actions/route53.ts:203

___

### GetChange

• **GetChange** = ``"route53:GetChange"``

Grants permission to get the current status of a request to create, update, or
delete one or more records

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html

#### Defined in

actions/route53.ts:210

___

### GetCheckerIpRanges

• **GetCheckerIpRanges** = ``"route53:GetCheckerIpRanges"``

Grants permission to get a list of the IP ranges that are used by Route 53 heal
th checkers to check the health of your resources

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetCheckerIpRanges.html

#### Defined in

actions/route53.ts:217

___

### GetDNSSEC

• **GetDNSSEC** = ``"route53:GetDNSSEC"``

Grants permission to get information about DNSSEC for a specific hosted zone, i
ncluding the key-signing keys in the hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetDNSSEC.html

#### Defined in

actions/route53.ts:224

___

### GetGeoLocation

• **GetGeoLocation** = ``"route53:GetGeoLocation"``

Grants permission to get information about whether a specified geographic locat
ion is supported for Route 53 geolocation records

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetGeoLocation.html

#### Defined in

actions/route53.ts:231

___

### GetHealthCheck

• **GetHealthCheck** = ``"route53:GetHealthCheck"``

Grants permission to get information about a specified health check

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheck.html

#### Defined in

actions/route53.ts:237

___

### GetHealthCheckCount

• **GetHealthCheckCount** = ``"route53:GetHealthCheckCount"``

Grants permission to get the number of health checks that are associated with t
he current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckCount.html

#### Defined in

actions/route53.ts:244

___

### GetHealthCheckLastFailureReason

• **GetHealthCheckLastFailureReason** = ``"route53:GetHealthCheckLastFailureReason"``

Grants permission to get the reason that a specified health check failed most r
ecently

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckLastFailureReason.html

#### Defined in

actions/route53.ts:251

___

### GetHealthCheckStatus

• **GetHealthCheckStatus** = ``"route53:GetHealthCheckStatus"``

Grants permission to get the status of a specified health check

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckStatus.html

#### Defined in

actions/route53.ts:257

___

### GetHostedZone

• **GetHostedZone** = ``"route53:GetHostedZone"``

Grants permission to get information about a specified hosted zone including th
e four name servers that Route 53 assigned to the hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html

#### Defined in

actions/route53.ts:264

___

### GetHostedZoneCount

• **GetHostedZoneCount** = ``"route53:GetHostedZoneCount"``

Grants permission to get the number of hosted zones that are associated with th
e current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneCount.html

#### Defined in

actions/route53.ts:271

___

### GetHostedZoneLimit

• **GetHostedZoneLimit** = ``"route53:GetHostedZoneLimit"``

Grants permission to get the specified limit for a specified hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html

#### Defined in

actions/route53.ts:277

___

### GetQueryLoggingConfig

• **GetQueryLoggingConfig** = ``"route53:GetQueryLoggingConfig"``

Grants permission to get information about a specified configuration for DNS qu
ery logging

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetQueryLoggingConfig.html

#### Defined in

actions/route53.ts:284

___

### GetReusableDelegationSet

• **GetReusableDelegationSet** = ``"route53:GetReusableDelegationSet"``

Grants permission to get information about a specified reusable delegation set,
including the four name servers that are assigned to the delegation set

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html

#### Defined in

actions/route53.ts:291

___

### GetReusableDelegationSetLimit

• **GetReusableDelegationSetLimit** = ``"route53:GetReusableDelegationSetLimit"``

Grants permission to get the maximum number of hosted zones that you can associ
ate with the specified reusable delegation set

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html

#### Defined in

actions/route53.ts:298

___

### GetTrafficPolicy

• **GetTrafficPolicy** = ``"route53:GetTrafficPolicy"``

Grants permission to get information about a specified traffic policy version

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html

#### Defined in

actions/route53.ts:304

___

### GetTrafficPolicyInstance

• **GetTrafficPolicyInstance** = ``"route53:GetTrafficPolicyInstance"``

Grants permission to get information about a specified traffic policy instance

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstance.html

#### Defined in

actions/route53.ts:310

___

### GetTrafficPolicyInstanceCount

• **GetTrafficPolicyInstanceCount** = ``"route53:GetTrafficPolicyInstanceCount"``

Grants permission to get the number of traffic policy instances that are associ
ated with the current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstanceCount.html

#### Defined in

actions/route53.ts:317

___

### ListCidrBlocks

• **ListCidrBlocks** = ``"route53:ListCidrBlocks"``

Grants permission to get a list of the CIDR blocks within a specified CIDR coll
ection

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrBlocks.html

#### Defined in

actions/route53.ts:324

___

### ListCidrCollections

• **ListCidrCollections** = ``"route53:ListCidrCollections"``

Grants permission to get a list of the CIDR collections that are associated wit
h the current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrCollections.html

#### Defined in

actions/route53.ts:331

___

### ListCidrLocations

• **ListCidrLocations** = ``"route53:ListCidrLocations"``

Grants permission to get a list of the CIDR locations that belong to a specifie
d CIDR collection

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrLocations.html

#### Defined in

actions/route53.ts:338

___

### ListGeoLocations

• **ListGeoLocations** = ``"route53:ListGeoLocations"``

Grants permission to get a list of geographic locations that Route 53 supports
for geolocation

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html

#### Defined in

actions/route53.ts:345

___

### ListHealthChecks

• **ListHealthChecks** = ``"route53:ListHealthChecks"``

Grants permission to get a list of the health checks that are associated with t
he current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHealthChecks.html

#### Defined in

actions/route53.ts:352

___

### ListHostedZones

• **ListHostedZones** = ``"route53:ListHostedZones"``

Grants permission to get a list of the public and private hosted zones that are
associated with the current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html

#### Defined in

actions/route53.ts:359

___

### ListHostedZonesByName

• **ListHostedZonesByName** = ``"route53:ListHostedZonesByName"``

Grants permission to get a list of your hosted zones in lexicographic order. Ho
sted zones are sorted by name with the labels reversed, for example, com.exampl
e.www

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByName.html

#### Defined in

actions/route53.ts:367

___

### ListHostedZonesByVPC

• **ListHostedZonesByVPC** = ``"route53:ListHostedZonesByVPC"``

Grants permission to get a list of all the private hosted zones that a specifie
d VPC is associated with

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html

#### Defined in

actions/route53.ts:374

___

### ListQueryLoggingConfigs

• **ListQueryLoggingConfigs** = ``"route53:ListQueryLoggingConfigs"``

Grants permission to list the configurations for DNS query logging that are ass
ociated with the current AWS account or the configuration that is associated wi
th a specified hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html

#### Defined in

actions/route53.ts:382

___

### ListResourceRecordSets

• **ListResourceRecordSets** = ``"route53:ListResourceRecordSets"``

Grants permission to list the records in a specified hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResourceRecordSets.html

#### Defined in

actions/route53.ts:388

___

### ListReusableDelegationSets

• **ListReusableDelegationSets** = ``"route53:ListReusableDelegationSets"``

Grants permission to list the reusable delegation sets that are associated with
the current AWS account.

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListReusableDelegationSets.html

#### Defined in

actions/route53.ts:395

___

### ListTagsForResource

• **ListTagsForResource** = ``"route53:ListTagsForResource"``

Grants permission to list tags for one health check or hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/route53.ts:401

___

### ListTagsForResources

• **ListTagsForResources** = ``"route53:ListTagsForResources"``

Grants permission to list tags for up to 10 health checks or hosted zones

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResources.html

#### Defined in

actions/route53.ts:407

___

### ListTrafficPolicies

• **ListTrafficPolicies** = ``"route53:ListTrafficPolicies"``

Grants permission to get information about the latest version for every traffic
policy that is associated with the current AWS account. Policies are listed in
the order in which they were created

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html

#### Defined in

actions/route53.ts:415

___

### ListTrafficPolicyInstances

• **ListTrafficPolicyInstances** = ``"route53:ListTrafficPolicyInstances"``

Grants permission to get information about the traffic policy instances that yo
u created by using the current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstances.html

#### Defined in

actions/route53.ts:422

___

### ListTrafficPolicyInstancesByHostedZone

• **ListTrafficPolicyInstancesByHostedZone** = ``"route53:ListTrafficPolicyInstancesByHostedZone"``

Grants permission to get information about the traffic policy instances that yo
u created in a specified hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByHostedZone.html

#### Defined in

actions/route53.ts:429

___

### ListTrafficPolicyInstancesByPolicy

• **ListTrafficPolicyInstancesByPolicy** = ``"route53:ListTrafficPolicyInstancesByPolicy"``

Grants permission to get information about the traffic policy instances that yo
u created using a specified traffic policy version

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByPolicy.html

#### Defined in

actions/route53.ts:436

___

### ListTrafficPolicyVersions

• **ListTrafficPolicyVersions** = ``"route53:ListTrafficPolicyVersions"``

Grants permission to get information about all the versions for a specified tra
ffic policy

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyVersions.html

#### Defined in

actions/route53.ts:443

___

### ListVPCAssociationAuthorizations

• **ListVPCAssociationAuthorizations** = ``"route53:ListVPCAssociationAuthorizations"``

Grants permission to get a list of the VPCs that were created by other accounts
and that can be associated with a specified hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListVPCAssociationAuthorizations.html

#### Defined in

actions/route53.ts:450

___

### TestDNSAnswer

• **TestDNSAnswer** = ``"route53:TestDNSAnswer"``

Grants permission to get the value that Route 53 returns in response to a DNS q
uery for a specified record name and type

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_TestDNSAnswer.html

#### Defined in

actions/route53.ts:457

___

### UpdateHealthCheck

• **UpdateHealthCheck** = ``"route53:UpdateHealthCheck"``

Grants permission to update an existing health check

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html

#### Defined in

actions/route53.ts:463

___

### UpdateHostedZoneComment

• **UpdateHostedZoneComment** = ``"route53:UpdateHostedZoneComment"``

Grants permission to update the comment for a specified hosted zone

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHostedZoneComment.html

#### Defined in

actions/route53.ts:469

___

### UpdateTrafficPolicyComment

• **UpdateTrafficPolicyComment** = ``"route53:UpdateTrafficPolicyComment"``

Grants permission to update the comment for a specified traffic policy version

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyComment.html

#### Defined in

actions/route53.ts:475

___

### UpdateTrafficPolicyInstance

• **UpdateTrafficPolicyInstance** = ``"route53:UpdateTrafficPolicyInstance"``

Grants permission to update the records in a specified hosted zone that were cr
eated based on the settings in a specified traffic policy version

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyInstance.html

#### Defined in

actions/route53.ts:482
