[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsFmsActions

# Enumeration: AwsFmsActions

All IAM policy actions for AWS Firewall Manager (FMS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfirewallmanager.html

2024-02-12T09:57:26.440Z

## Table of contents

### Enumeration Members

- [AssociateAdminAccount](AwsFmsActions.md#associateadminaccount)
- [AssociateThirdPartyFirewall](AwsFmsActions.md#associatethirdpartyfirewall)
- [BatchAssociateResource](AwsFmsActions.md#batchassociateresource)
- [BatchDisassociateResource](AwsFmsActions.md#batchdisassociateresource)
- [DeleteAppsList](AwsFmsActions.md#deleteappslist)
- [DeleteNotificationChannel](AwsFmsActions.md#deletenotificationchannel)
- [DeletePolicy](AwsFmsActions.md#deletepolicy)
- [DeleteProtocolsList](AwsFmsActions.md#deleteprotocolslist)
- [DeleteResourceSet](AwsFmsActions.md#deleteresourceset)
- [DisassociateAdminAccount](AwsFmsActions.md#disassociateadminaccount)
- [DisassociateThirdPartyFirewall](AwsFmsActions.md#disassociatethirdpartyfirewall)
- [GetAdminAccount](AwsFmsActions.md#getadminaccount)
- [GetAdminScope](AwsFmsActions.md#getadminscope)
- [GetAppsList](AwsFmsActions.md#getappslist)
- [GetComplianceDetail](AwsFmsActions.md#getcompliancedetail)
- [GetNotificationChannel](AwsFmsActions.md#getnotificationchannel)
- [GetPolicy](AwsFmsActions.md#getpolicy)
- [GetProtectionStatus](AwsFmsActions.md#getprotectionstatus)
- [GetProtocolsList](AwsFmsActions.md#getprotocolslist)
- [GetResourceSet](AwsFmsActions.md#getresourceset)
- [GetThirdPartyFirewallAssociationStatus](AwsFmsActions.md#getthirdpartyfirewallassociationstatus)
- [GetViolationDetails](AwsFmsActions.md#getviolationdetails)
- [ListAdminAccountsForOrganization](AwsFmsActions.md#listadminaccountsfororganization)
- [ListAdminsManagingAccount](AwsFmsActions.md#listadminsmanagingaccount)
- [ListAppsLists](AwsFmsActions.md#listappslists)
- [ListComplianceStatus](AwsFmsActions.md#listcompliancestatus)
- [ListDiscoveredResources](AwsFmsActions.md#listdiscoveredresources)
- [ListMemberAccounts](AwsFmsActions.md#listmemberaccounts)
- [ListPolicies](AwsFmsActions.md#listpolicies)
- [ListProtocolsLists](AwsFmsActions.md#listprotocolslists)
- [ListResourceSetResources](AwsFmsActions.md#listresourcesetresources)
- [ListResourceSets](AwsFmsActions.md#listresourcesets)
- [ListTagsForResource](AwsFmsActions.md#listtagsforresource)
- [ListThirdPartyFirewallFirewallPolicies](AwsFmsActions.md#listthirdpartyfirewallfirewallpolicies)
- [PutAdminAccount](AwsFmsActions.md#putadminaccount)
- [PutAppsList](AwsFmsActions.md#putappslist)
- [PutNotificationChannel](AwsFmsActions.md#putnotificationchannel)
- [PutPolicy](AwsFmsActions.md#putpolicy)
- [PutProtocolsList](AwsFmsActions.md#putprotocolslist)
- [PutResourceSet](AwsFmsActions.md#putresourceset)
- [TagResource](AwsFmsActions.md#tagresource)
- [UntagResource](AwsFmsActions.md#untagresource)

## Enumeration Members

### AssociateAdminAccount

• **AssociateAdminAccount** = ``"fms:AssociateAdminAccount"``

Grants permission to set the AWS Firewall Manager administrator account and ena
bles the service in all organization accounts

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AssociateAdminAccount.html

#### Defined in

actions/fms.ts:18

___

### AssociateThirdPartyFirewall

• **AssociateThirdPartyFirewall** = ``"fms:AssociateThirdPartyFirewall"``

Grants permission to set the Firewall Manager administrator as a tenant adminis
trator of a third-party firewall service

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AssociateThirdPartyFirewall.html

#### Defined in

actions/fms.ts:25

___

### BatchAssociateResource

• **BatchAssociateResource** = ``"fms:BatchAssociateResource"``

Grants permission to associate resources to an AWS Firewall Manager resource se
t

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_BatchAssociateResource.html

#### Defined in

actions/fms.ts:32

___

### BatchDisassociateResource

• **BatchDisassociateResource** = ``"fms:BatchDisassociateResource"``

Grants permission to disassociate resources from an AWS Firewall Manager resour
ce set

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_BatchDisassociateResource.html

#### Defined in

actions/fms.ts:39

___

### DeleteAppsList

• **DeleteAppsList** = ``"fms:DeleteAppsList"``

Grants permission to permanently deletes an AWS Firewall Manager applications l
ist

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteAppsList.html

#### Defined in

actions/fms.ts:46

___

### DeleteNotificationChannel

• **DeleteNotificationChannel** = ``"fms:DeleteNotificationChannel"``

Grants permission to delete an AWS Firewall Manager association with the IAM ro
le and the Amazon Simple Notification Service (SNS) topic that is used to notif
y the FM administrator about major FM events and errors across the organization

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteNotificationChannel.html

#### Defined in

actions/fms.ts:54

___

### DeletePolicy

• **DeletePolicy** = ``"fms:DeletePolicy"``

Grants permission to permanently delete an AWS Firewall Manager policy

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html

#### Defined in

actions/fms.ts:60

___

### DeleteProtocolsList

• **DeleteProtocolsList** = ``"fms:DeleteProtocolsList"``

Grants permission to permanently deletes an AWS Firewall Manager protocols list

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteProtocolsList.html

#### Defined in

actions/fms.ts:66

___

### DeleteResourceSet

• **DeleteResourceSet** = ``"fms:DeleteResourceSet"``

Grants permission to permanently delete an AWS Firewall Manager resource set

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteResourceSet.html

#### Defined in

actions/fms.ts:72

___

### DisassociateAdminAccount

• **DisassociateAdminAccount** = ``"fms:DisassociateAdminAccount"``

Grants permission to disassociate the account that has been set as the AWS Fire
wall Manager administrator account and and disables the service in all organiza
tion accounts

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DisassociateAdminAccount.html

#### Defined in

actions/fms.ts:80

___

### DisassociateThirdPartyFirewall

• **DisassociateThirdPartyFirewall** = ``"fms:DisassociateThirdPartyFirewall"``

Grants permission to disassociate a Firewall Manager administrator from a third
-party firewall tenant

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DisassociateThirdPartyFirewall.html

#### Defined in

actions/fms.ts:87

___

### GetAdminAccount

• **GetAdminAccount** = ``"fms:GetAdminAccount"``

Grants permission to return the AWS Organizations account that is associated wi
th AWS Firewall Manager as the AWS Firewall Manager administrator

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAdminAccount.html

#### Defined in

actions/fms.ts:94

___

### GetAdminScope

• **GetAdminScope** = ``"fms:GetAdminScope"``

Grants permission to return information about the specified account's administr
ative scope

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAdminScope.html

#### Defined in

actions/fms.ts:101

___

### GetAppsList

• **GetAppsList** = ``"fms:GetAppsList"``

Grants permission to return information about the specified AWS Firewall Manage
r applications list

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAppsList.html

#### Defined in

actions/fms.ts:108

___

### GetComplianceDetail

• **GetComplianceDetail** = ``"fms:GetComplianceDetail"``

Grants permission to retrieve detailed compliance information about the specifi
ed member account. Details include resources that are in and out of compliance
with the specified policy

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetComplianceDetail.html

#### Defined in

actions/fms.ts:116

___

### GetNotificationChannel

• **GetNotificationChannel** = ``"fms:GetNotificationChannel"``

Grants permission to retrieve information about the Amazon Simple Notification
Service (SNS) topic that is used to record AWS Firewall Manager SNS logs

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetNotificationChannel.html

#### Defined in

actions/fms.ts:123

___

### GetPolicy

• **GetPolicy** = ``"fms:GetPolicy"``

Grants permission to retrieve information about the specified AWS Firewall Mana
ger policy

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetPolicy.html

#### Defined in

actions/fms.ts:130

___

### GetProtectionStatus

• **GetProtectionStatus** = ``"fms:GetProtectionStatus"``

Grants permission to retrieve policy-level attack summary information in the ev
ent of a potential DDoS attack

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetProtectionStatus.html

#### Defined in

actions/fms.ts:137

___

### GetProtocolsList

• **GetProtocolsList** = ``"fms:GetProtocolsList"``

Grants permission to return information about the specified AWS Firewall Manage
r protocols list

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetProtocolsList.html

#### Defined in

actions/fms.ts:144

___

### GetResourceSet

• **GetResourceSet** = ``"fms:GetResourceSet"``

Grants permission to retrieve information about the specified AWS Firewall Mana
ger resource set

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetResourceSet.html

#### Defined in

actions/fms.ts:151

___

### GetThirdPartyFirewallAssociationStatus

• **GetThirdPartyFirewallAssociationStatus** = ``"fms:GetThirdPartyFirewallAssociationStatus"``

Grants permission to retrieve the onboarding status of a Firewall Manager admin
istrator account to third-party firewall vendor tenant

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetThirdPartyFirewallAssociationStatus.html

#### Defined in

actions/fms.ts:158

___

### GetViolationDetails

• **GetViolationDetails** = ``"fms:GetViolationDetails"``

Grants permission to retrieve violations for a resource based on the specified
AWS Firewall Manager policy and AWS account

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetViolationDetails.html

#### Defined in

actions/fms.ts:165

___

### ListAdminAccountsForOrganization

• **ListAdminAccountsForOrganization** = ``"fms:ListAdminAccountsForOrganization"``

Grants permission to return a AdminAccounts object that lists the Firewall Mana
ger administrators within the organization that are onboarded to Firewall Manag
er by AssociateAdminAccount

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListAdminAccountsForOrganization.html

#### Defined in

actions/fms.ts:173

___

### ListAdminsManagingAccount

• **ListAdminsManagingAccount** = ``"fms:ListAdminsManagingAccount"``

Grants permission to list the accounts that are managing the specified AWS Orga
nizations member account

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListAdminsManagingAccount.html

#### Defined in

actions/fms.ts:180

___

### ListAppsLists

• **ListAppsLists** = ``"fms:ListAppsLists"``

Grants permission to return an array of AppsListDataSummary objects

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListAppsLists.html

#### Defined in

actions/fms.ts:186

___

### ListComplianceStatus

• **ListComplianceStatus** = ``"fms:ListComplianceStatus"``

Grants permission to retrieve an array of PolicyComplianceStatus objects in the
response. Use PolicyComplianceStatus to get a summary of which member accounts
are protected by the specified policy

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListComplianceStatus.html

#### Defined in

actions/fms.ts:194

___

### ListDiscoveredResources

• **ListDiscoveredResources** = ``"fms:ListDiscoveredResources"``

Grants permission to retrieve an array of resources in the organization's accou
nts that are available to be associated with a resource set

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListDiscoveredResources.html

#### Defined in

actions/fms.ts:201

___

### ListMemberAccounts

• **ListMemberAccounts** = ``"fms:ListMemberAccounts"``

Grants permission to retrieve an array of member account ids if the caller is F
MS admin account

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListMemberAccounts.html

#### Defined in

actions/fms.ts:208

___

### ListPolicies

• **ListPolicies** = ``"fms:ListPolicies"``

Grants permission to retrieve an array of PolicySummary objects in the response

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListPolicies.html

#### Defined in

actions/fms.ts:214

___

### ListProtocolsLists

• **ListProtocolsLists** = ``"fms:ListProtocolsLists"``

Grants permission to return an array of ProtocolsListDataSummary objects

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListProtocolsLists.html

#### Defined in

actions/fms.ts:220

___

### ListResourceSetResources

• **ListResourceSetResources** = ``"fms:ListResourceSetResources"``

Grants permission to retrieve an array of resources that are currently associat
ed to a resource set

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListResourceSetResources.html

#### Defined in

actions/fms.ts:227

___

### ListResourceSets

• **ListResourceSets** = ``"fms:ListResourceSets"``

Grants permission to retrieve an array of ResourceSetSummary objects

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListResourceSets.html

#### Defined in

actions/fms.ts:233

___

### ListTagsForResource

• **ListTagsForResource** = ``"fms:ListTagsForResource"``

Grants permission to list Tags for a given resource

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListTagsForResource.html

#### Defined in

actions/fms.ts:239

___

### ListThirdPartyFirewallFirewallPolicies

• **ListThirdPartyFirewallFirewallPolicies** = ``"fms:ListThirdPartyFirewallFirewallPolicies"``

Grants permission to retrieve a list of all of the third-party firewall policie
s that are associated with the third-party firewall administrator's account

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListThirdPartyFirewallFirewallPolicies.html

#### Defined in

actions/fms.ts:246

___

### PutAdminAccount

• **PutAdminAccount** = ``"fms:PutAdminAccount"``

Grants permission to create or update an Firewall Manager administrator account

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutAdminAccount.html

#### Defined in

actions/fms.ts:252

___

### PutAppsList

• **PutAppsList** = ``"fms:PutAppsList"``

Grants permission to create an AWS Firewall Manager applications list

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutAppsList.html

#### Defined in

actions/fms.ts:258

___

### PutNotificationChannel

• **PutNotificationChannel** = ``"fms:PutNotificationChannel"``

Grants permission to designate the IAM role and Amazon Simple Notification Serv
ice (SNS) topic that AWS Firewall Manager (FM) could use to notify the FM admin
istrator about major FM events and errors across the organization

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutNotificationChannel.html

#### Defined in

actions/fms.ts:266

___

### PutPolicy

• **PutPolicy** = ``"fms:PutPolicy"``

Grants permission to create an AWS Firewall Manager policy

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutPolicy.html

#### Defined in

actions/fms.ts:272

___

### PutProtocolsList

• **PutProtocolsList** = ``"fms:PutProtocolsList"``

Grants permission to creates an AWS Firewall Manager protocols list

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutProtocolsList.html

#### Defined in

actions/fms.ts:278

___

### PutResourceSet

• **PutResourceSet** = ``"fms:PutResourceSet"``

Grants permission to create an AWS Firewall Manager resource set

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutResourceSet.html

#### Defined in

actions/fms.ts:284

___

### TagResource

• **TagResource** = ``"fms:TagResource"``

Grants permission to add a Tag to a given resource

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_TagResource.html

#### Defined in

actions/fms.ts:290

___

### UntagResource

• **UntagResource** = ``"fms:UntagResource"``

Grants permission to remove a Tag from a given resource

See https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_UntagResource.html

#### Defined in

actions/fms.ts:296
