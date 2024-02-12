[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsLicenseManagerUserSubscriptionsActions

# Enumeration: AwsLicenseManagerUserSubscriptionsActions

All IAM policy actions for AWS License Manager User Subscriptions (LICENSE-MANAGER-USER-SUBSCRIPTIONS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanagerusersubscriptions.html

2024-02-12T09:58:05.663Z

## Table of contents

### Enumeration Members

- [AssociateUser](AwsLicenseManagerUserSubscriptionsActions.md#associateuser)
- [DeregisterIdentityProvider](AwsLicenseManagerUserSubscriptionsActions.md#deregisteridentityprovider)
- [DisassociateUser](AwsLicenseManagerUserSubscriptionsActions.md#disassociateuser)
- [ListIdentityProviders](AwsLicenseManagerUserSubscriptionsActions.md#listidentityproviders)
- [ListInstances](AwsLicenseManagerUserSubscriptionsActions.md#listinstances)
- [ListProductSubscriptions](AwsLicenseManagerUserSubscriptionsActions.md#listproductsubscriptions)
- [ListUserAssociations](AwsLicenseManagerUserSubscriptionsActions.md#listuserassociations)
- [RegisterIdentityProvider](AwsLicenseManagerUserSubscriptionsActions.md#registeridentityprovider)
- [StartProductSubscription](AwsLicenseManagerUserSubscriptionsActions.md#startproductsubscription)
- [StopProductSubscription](AwsLicenseManagerUserSubscriptionsActions.md#stopproductsubscription)
- [UpdateIdentityProviderSettings](AwsLicenseManagerUserSubscriptionsActions.md#updateidentityprovidersettings)

## Enumeration Members

### AssociateUser

• **AssociateUser** = ``"license-manager-user-subscriptions:AssociateUser"``

Grants permission to associate a subscribed user to an instance launched with l
icense manager user subscriptions products

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_AssociateUser.html

#### Defined in

actions/license-manager-user-subscriptions.ts:18

___

### DeregisterIdentityProvider

• **DeregisterIdentityProvider** = ``"license-manager-user-subscriptions:DeregisterIdentityProvider"``

Grants permission to deregister Microsoft Active Directory with license-manager
-user-subscriptions for a product

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_DeregisterIdentityProvider.html

#### Defined in

actions/license-manager-user-subscriptions.ts:25

___

### DisassociateUser

• **DisassociateUser** = ``"license-manager-user-subscriptions:DisassociateUser"``

Grants permission to disassociate a subscribed user from an instance launched w
ith license manager user subscriptions products

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_DisassociateUser.html

#### Defined in

actions/license-manager-user-subscriptions.ts:32

___

### ListIdentityProviders

• **ListIdentityProviders** = ``"license-manager-user-subscriptions:ListIdentityProviders"``

Grants permission to list all the identity providers on license manager user su
bscriptions

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_ListIdentityProviders.html

#### Defined in

actions/license-manager-user-subscriptions.ts:39

___

### ListInstances

• **ListInstances** = ``"license-manager-user-subscriptions:ListInstances"``

Grants permission to list all the instances launched with license manager user
subscription products

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_ListInstances.html

#### Defined in

actions/license-manager-user-subscriptions.ts:46

___

### ListProductSubscriptions

• **ListProductSubscriptions** = ``"license-manager-user-subscriptions:ListProductSubscriptions"``

Grants permission to lists all the product subscriptions for a product and iden
tity provider

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_ListProductSubscriptions.html

#### Defined in

actions/license-manager-user-subscriptions.ts:53

___

### ListUserAssociations

• **ListUserAssociations** = ``"license-manager-user-subscriptions:ListUserAssociations"``

Grants permission to list all the users associated to an instance launched for
a product

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_ListUserAssociations.html

#### Defined in

actions/license-manager-user-subscriptions.ts:60

___

### RegisterIdentityProvider

• **RegisterIdentityProvider** = ``"license-manager-user-subscriptions:RegisterIdentityProvider"``

Grants permission to registers Microsoft Active Directory with license-manager-
user-subscriptions for a product

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_RegisterIdentityProvider.html

#### Defined in

actions/license-manager-user-subscriptions.ts:67

___

### StartProductSubscription

• **StartProductSubscription** = ``"license-manager-user-subscriptions:StartProductSubscription"``

Grants permission to start product subscription for a user on a registered acti
ve directory for a product

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_StartProductSubscription.html

#### Defined in

actions/license-manager-user-subscriptions.ts:74

___

### StopProductSubscription

• **StopProductSubscription** = ``"license-manager-user-subscriptions:StopProductSubscription"``

Grants permission to stop product subscription for a user on a registered activ
e directory for a product

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_StopProductSubscription.html

#### Defined in

actions/license-manager-user-subscriptions.ts:81

___

### UpdateIdentityProviderSettings

• **UpdateIdentityProviderSettings** = ``"license-manager-user-subscriptions:UpdateIdentityProviderSettings"``

Grants permission to update the identity provider configuration

See https://docs.aws.amazon.com/license-manager-user-subscriptions/latest/APIReference/API_UpdateIdentityProviderSettings.html

#### Defined in

actions/license-manager-user-subscriptions.ts:87
