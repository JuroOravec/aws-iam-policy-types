[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRoute53domainsActions

# Enumeration: AwsRoute53domainsActions

All IAM policy actions for Amazon Route 53 Domains (ROUTE53DOMAINS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53domains.html

2024-02-12T09:59:00.022Z

## Table of contents

### Enumeration Members

- [AcceptDomainTransferFromAnotherAwsAccount](AwsRoute53domainsActions.md#acceptdomaintransferfromanotherawsaccount)
- [AssociateDelegationSignerToDomain](AwsRoute53domainsActions.md#associatedelegationsignertodomain)
- [CancelDomainTransferToAnotherAwsAccount](AwsRoute53domainsActions.md#canceldomaintransfertoanotherawsaccount)
- [CheckDomainAvailability](AwsRoute53domainsActions.md#checkdomainavailability)
- [CheckDomainTransferability](AwsRoute53domainsActions.md#checkdomaintransferability)
- [DeleteDomain](AwsRoute53domainsActions.md#deletedomain)
- [DeleteTagsForDomain](AwsRoute53domainsActions.md#deletetagsfordomain)
- [DisableDomainAutoRenew](AwsRoute53domainsActions.md#disabledomainautorenew)
- [DisableDomainTransferLock](AwsRoute53domainsActions.md#disabledomaintransferlock)
- [DisassociateDelegationSignerFromDomain](AwsRoute53domainsActions.md#disassociatedelegationsignerfromdomain)
- [EnableDomainAutoRenew](AwsRoute53domainsActions.md#enabledomainautorenew)
- [EnableDomainTransferLock](AwsRoute53domainsActions.md#enabledomaintransferlock)
- [GetContactReachabilityStatus](AwsRoute53domainsActions.md#getcontactreachabilitystatus)
- [GetDomainDetail](AwsRoute53domainsActions.md#getdomaindetail)
- [GetDomainSuggestions](AwsRoute53domainsActions.md#getdomainsuggestions)
- [GetOperationDetail](AwsRoute53domainsActions.md#getoperationdetail)
- [ListDomains](AwsRoute53domainsActions.md#listdomains)
- [ListOperations](AwsRoute53domainsActions.md#listoperations)
- [ListPrices](AwsRoute53domainsActions.md#listprices)
- [ListTagsForDomain](AwsRoute53domainsActions.md#listtagsfordomain)
- [PushDomain](AwsRoute53domainsActions.md#pushdomain)
- [RegisterDomain](AwsRoute53domainsActions.md#registerdomain)
- [RejectDomainTransferFromAnotherAwsAccount](AwsRoute53domainsActions.md#rejectdomaintransferfromanotherawsaccount)
- [RenewDomain](AwsRoute53domainsActions.md#renewdomain)
- [ResendContactReachabilityEmail](AwsRoute53domainsActions.md#resendcontactreachabilityemail)
- [ResendOperationAuthorization](AwsRoute53domainsActions.md#resendoperationauthorization)
- [RetrieveDomainAuthCode](AwsRoute53domainsActions.md#retrievedomainauthcode)
- [TransferDomain](AwsRoute53domainsActions.md#transferdomain)
- [TransferDomainToAnotherAwsAccount](AwsRoute53domainsActions.md#transferdomaintoanotherawsaccount)
- [UpdateDomainContact](AwsRoute53domainsActions.md#updatedomaincontact)
- [UpdateDomainContactPrivacy](AwsRoute53domainsActions.md#updatedomaincontactprivacy)
- [UpdateDomainNameservers](AwsRoute53domainsActions.md#updatedomainnameservers)
- [UpdateTagsForDomain](AwsRoute53domainsActions.md#updatetagsfordomain)
- [ViewBilling](AwsRoute53domainsActions.md#viewbilling)

## Enumeration Members

### AcceptDomainTransferFromAnotherAwsAccount

• **AcceptDomainTransferFromAnotherAwsAccount** = ``"route53domains:AcceptDomainTransferFromAnotherAwsAccount"``

Grants permission to accept the transfer of a domain from another AWS account t
o the current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html

#### Defined in

actions/route53domains.ts:18

___

### AssociateDelegationSignerToDomain

• **AssociateDelegationSignerToDomain** = ``"route53domains:AssociateDelegationSignerToDomain"``

Grants permission to associate a new delegation signer to a domain

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html

#### Defined in

actions/route53domains.ts:24

___

### CancelDomainTransferToAnotherAwsAccount

• **CancelDomainTransferToAnotherAwsAccount** = ``"route53domains:CancelDomainTransferToAnotherAwsAccount"``

Grants permission to cancel the transfer of a domain from the current AWS accou
nt to another AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html

#### Defined in

actions/route53domains.ts:31

___

### CheckDomainAvailability

• **CheckDomainAvailability** = ``"route53domains:CheckDomainAvailability"``

Grants permission to check the availability of one domain name

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CheckDomainAvailability.html

#### Defined in

actions/route53domains.ts:37

___

### CheckDomainTransferability

• **CheckDomainTransferability** = ``"route53domains:CheckDomainTransferability"``

Grants permission to check whether a domain name can be transferred to Amazon R
oute 53

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CheckDomainTransferability.html

#### Defined in

actions/route53domains.ts:44

___

### DeleteDomain

• **DeleteDomain** = ``"route53domains:DeleteDomain"``

Grants permission to delete domains

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DeleteDomain.html

#### Defined in

actions/route53domains.ts:50

___

### DeleteTagsForDomain

• **DeleteTagsForDomain** = ``"route53domains:DeleteTagsForDomain"``

Grants permission to delete the specified tags for a domain

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DeleteTagsForDomain.html

#### Defined in

actions/route53domains.ts:56

___

### DisableDomainAutoRenew

• **DisableDomainAutoRenew** = ``"route53domains:DisableDomainAutoRenew"``

Grants permission to configure Amazon Route 53 to automatically renew the speci
fied domain before the domain registration expires

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html

#### Defined in

actions/route53domains.ts:63

___

### DisableDomainTransferLock

• **DisableDomainTransferLock** = ``"route53domains:DisableDomainTransferLock"``

Grants permission to remove the transfer lock on the domain (specifically the c
lientTransferProhibited status) to allow domain transfers

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainTransferLock.html

#### Defined in

actions/route53domains.ts:70

___

### DisassociateDelegationSignerFromDomain

• **DisassociateDelegationSignerFromDomain** = ``"route53domains:DisassociateDelegationSignerFromDomain"``

Grants permission to disassociate an existing delegation signer from a domain

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisassociateDelegationSignerFromDomain.html

#### Defined in

actions/route53domains.ts:76

___

### EnableDomainAutoRenew

• **EnableDomainAutoRenew** = ``"route53domains:EnableDomainAutoRenew"``

Grants permission to configure Amazon Route 53 to automatically renew the speci
fied domain before the domain registration expires

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html

#### Defined in

actions/route53domains.ts:83

___

### EnableDomainTransferLock

• **EnableDomainTransferLock** = ``"route53domains:EnableDomainTransferLock"``

Grants permission to set the transfer lock on the domain (specifically the clie
ntTransferProhibited status) to prevent domain transfers

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_EnableDomainTransferLock.html

#### Defined in

actions/route53domains.ts:90

___

### GetContactReachabilityStatus

• **GetContactReachabilityStatus** = ``"route53domains:GetContactReachabilityStatus"``

Grants permission to get information about whether the registrant contact has r
esponded for operations that require confirmation that the email address for th
e registrant contact is valid, such as registering a new domain

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetContactReachabilityStatus.html

#### Defined in

actions/route53domains.ts:98

___

### GetDomainDetail

• **GetDomainDetail** = ``"route53domains:GetDomainDetail"``

Grants permission to get detailed information about a domain

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainDetail.html

#### Defined in

actions/route53domains.ts:104

___

### GetDomainSuggestions

• **GetDomainSuggestions** = ``"route53domains:GetDomainSuggestions"``

Grants permission to get a list of suggested domain names given a string, which
can either be a domain name or simply a word or phrase (without spaces)

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainSuggestions.html

#### Defined in

actions/route53domains.ts:111

___

### GetOperationDetail

• **GetOperationDetail** = ``"route53domains:GetOperationDetail"``

Grants permission to get the current status of an operation that is not complet
ed

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html

#### Defined in

actions/route53domains.ts:118

___

### ListDomains

• **ListDomains** = ``"route53domains:ListDomains"``

Grants permission to list all the domain names registered with Amazon Route 53
for the current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListDomains.html

#### Defined in

actions/route53domains.ts:125

___

### ListOperations

• **ListOperations** = ``"route53domains:ListOperations"``

Grants permission to list the operation IDs of operations that are not yet comp
lete

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html

#### Defined in

actions/route53domains.ts:132

___

### ListPrices

• **ListPrices** = ``"route53domains:ListPrices"``

Grants permission to list the prices of operations for TLDs

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListPrices.html

#### Defined in

actions/route53domains.ts:138

___

### ListTagsForDomain

• **ListTagsForDomain** = ``"route53domains:ListTagsForDomain"``

Grants permission to list all the tags that are associated with the specified d
omain

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListTagsForDomain.html

#### Defined in

actions/route53domains.ts:145

___

### PushDomain

• **PushDomain** = ``"route53domains:PushDomain"``

Grants permission to change the IPS tag of .uk domain to initiate a transfer pr
ocess from Route 53 to another registrar

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_PushDomain.html

#### Defined in

actions/route53domains.ts:152

___

### RegisterDomain

• **RegisterDomain** = ``"route53domains:RegisterDomain"``

Grants permission to register domains

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RegisterDomain.html

#### Defined in

actions/route53domains.ts:158

___

### RejectDomainTransferFromAnotherAwsAccount

• **RejectDomainTransferFromAnotherAwsAccount** = ``"route53domains:RejectDomainTransferFromAnotherAwsAccount"``

Grants permission to reject the transfer of a domain from another AWS account t
o the current AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html

#### Defined in

actions/route53domains.ts:165

___

### RenewDomain

• **RenewDomain** = ``"route53domains:RenewDomain"``

Grants permission to renew domains for the specified number of years

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RenewDomain.html

#### Defined in

actions/route53domains.ts:171

___

### ResendContactReachabilityEmail

• **ResendContactReachabilityEmail** = ``"route53domains:ResendContactReachabilityEmail"``

Grants permission to resend the confirmation email to the current email address
for the registrant contact for operations that require confirmation that the em
ail address for the registrant contact is valid, such as registering a new doma
in

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendContactReachabilityEmail.html

#### Defined in

actions/route53domains.ts:180

___

### ResendOperationAuthorization

• **ResendOperationAuthorization** = ``"route53domains:ResendOperationAuthorization"``

Grants permission to resend the operation authorization

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendOperationAuthorization.html

#### Defined in

actions/route53domains.ts:186

___

### RetrieveDomainAuthCode

• **RetrieveDomainAuthCode** = ``"route53domains:RetrieveDomainAuthCode"``

Grants permission to get the AuthCode for the domain

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RetrieveDomainAuthCode.html

#### Defined in

actions/route53domains.ts:192

___

### TransferDomain

• **TransferDomain** = ``"route53domains:TransferDomain"``

Grants permission to transfer a domain from another registrar to Amazon Route 5
3

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomain.html

#### Defined in

actions/route53domains.ts:199

___

### TransferDomainToAnotherAwsAccount

• **TransferDomainToAnotherAwsAccount** = ``"route53domains:TransferDomainToAnotherAwsAccount"``

Grants permission to transfer a domain from the current AWS account to another
AWS account

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html

#### Defined in

actions/route53domains.ts:206

___

### UpdateDomainContact

• **UpdateDomainContact** = ``"route53domains:UpdateDomainContact"``

Grants permission to update the contact information for domain

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContact.html

#### Defined in

actions/route53domains.ts:212

___

### UpdateDomainContactPrivacy

• **UpdateDomainContactPrivacy** = ``"route53domains:UpdateDomainContactPrivacy"``

Grants permission to update the domain contact privacy setting

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContactPrivacy.html

#### Defined in

actions/route53domains.ts:218

___

### UpdateDomainNameservers

• **UpdateDomainNameservers** = ``"route53domains:UpdateDomainNameservers"``

Grants permission to replace the current set of name servers for a domain with
the specified set of name servers

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html

#### Defined in

actions/route53domains.ts:225

___

### UpdateTagsForDomain

• **UpdateTagsForDomain** = ``"route53domains:UpdateTagsForDomain"``

Grants permission to add or update tags for a specified domain

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateTagsForDomain.html

#### Defined in

actions/route53domains.ts:231

___

### ViewBilling

• **ViewBilling** = ``"route53domains:ViewBilling"``

Grants permission to get all the domain-related billing records for the current
AWS account for a specified period

See https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ViewBilling.html

#### Defined in

actions/route53domains.ts:238
