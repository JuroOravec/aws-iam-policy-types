[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsLicenseManagerActions

# Enumeration: AwsLicenseManagerActions

All IAM policy actions for AWS License Manager (LICENSE-MANAGER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanager.html

2024-02-12T09:58:04.692Z

## Table of contents

### Enumeration Members

- [AcceptGrant](AwsLicenseManagerActions.md#acceptgrant)
- [CheckInLicense](AwsLicenseManagerActions.md#checkinlicense)
- [CheckoutBorrowLicense](AwsLicenseManagerActions.md#checkoutborrowlicense)
- [CheckoutLicense](AwsLicenseManagerActions.md#checkoutlicense)
- [CreateGrant](AwsLicenseManagerActions.md#creategrant)
- [CreateGrantVersion](AwsLicenseManagerActions.md#creategrantversion)
- [CreateLicense](AwsLicenseManagerActions.md#createlicense)
- [CreateLicenseConfiguration](AwsLicenseManagerActions.md#createlicenseconfiguration)
- [CreateLicenseConversionTaskForResource](AwsLicenseManagerActions.md#createlicenseconversiontaskforresource)
- [CreateLicenseManagerReportGenerator](AwsLicenseManagerActions.md#createlicensemanagerreportgenerator)
- [CreateLicenseVersion](AwsLicenseManagerActions.md#createlicenseversion)
- [CreateToken](AwsLicenseManagerActions.md#createtoken)
- [DeleteGrant](AwsLicenseManagerActions.md#deletegrant)
- [DeleteLicense](AwsLicenseManagerActions.md#deletelicense)
- [DeleteLicenseConfiguration](AwsLicenseManagerActions.md#deletelicenseconfiguration)
- [DeleteLicenseManagerReportGenerator](AwsLicenseManagerActions.md#deletelicensemanagerreportgenerator)
- [DeleteToken](AwsLicenseManagerActions.md#deletetoken)
- [ExtendLicenseConsumption](AwsLicenseManagerActions.md#extendlicenseconsumption)
- [GetAccessToken](AwsLicenseManagerActions.md#getaccesstoken)
- [GetGrant](AwsLicenseManagerActions.md#getgrant)
- [GetLicense](AwsLicenseManagerActions.md#getlicense)
- [GetLicenseConfiguration](AwsLicenseManagerActions.md#getlicenseconfiguration)
- [GetLicenseConversionTask](AwsLicenseManagerActions.md#getlicenseconversiontask)
- [GetLicenseManagerReportGenerator](AwsLicenseManagerActions.md#getlicensemanagerreportgenerator)
- [GetLicenseUsage](AwsLicenseManagerActions.md#getlicenseusage)
- [GetServiceSettings](AwsLicenseManagerActions.md#getservicesettings)
- [ListAssociationsForLicenseConfiguration](AwsLicenseManagerActions.md#listassociationsforlicenseconfiguration)
- [ListDistributedGrants](AwsLicenseManagerActions.md#listdistributedgrants)
- [ListFailuresForLicenseConfigurationOperations](AwsLicenseManagerActions.md#listfailuresforlicenseconfigurationoperations)
- [ListLicenseConfigurations](AwsLicenseManagerActions.md#listlicenseconfigurations)
- [ListLicenseConversionTasks](AwsLicenseManagerActions.md#listlicenseconversiontasks)
- [ListLicenseManagerReportGenerators](AwsLicenseManagerActions.md#listlicensemanagerreportgenerators)
- [ListLicenseSpecificationsForResource](AwsLicenseManagerActions.md#listlicensespecificationsforresource)
- [ListLicenseVersions](AwsLicenseManagerActions.md#listlicenseversions)
- [ListLicenses](AwsLicenseManagerActions.md#listlicenses)
- [ListReceivedGrants](AwsLicenseManagerActions.md#listreceivedgrants)
- [ListReceivedGrantsForOrganization](AwsLicenseManagerActions.md#listreceivedgrantsfororganization)
- [ListReceivedLicenses](AwsLicenseManagerActions.md#listreceivedlicenses)
- [ListReceivedLicensesForOrganization](AwsLicenseManagerActions.md#listreceivedlicensesfororganization)
- [ListResourceInventory](AwsLicenseManagerActions.md#listresourceinventory)
- [ListTagsForResource](AwsLicenseManagerActions.md#listtagsforresource)
- [ListTokens](AwsLicenseManagerActions.md#listtokens)
- [ListUsageForLicenseConfiguration](AwsLicenseManagerActions.md#listusageforlicenseconfiguration)
- [RejectGrant](AwsLicenseManagerActions.md#rejectgrant)
- [TagResource](AwsLicenseManagerActions.md#tagresource)
- [UntagResource](AwsLicenseManagerActions.md#untagresource)
- [UpdateLicenseConfiguration](AwsLicenseManagerActions.md#updatelicenseconfiguration)
- [UpdateLicenseManagerReportGenerator](AwsLicenseManagerActions.md#updatelicensemanagerreportgenerator)
- [UpdateLicenseSpecificationsForResource](AwsLicenseManagerActions.md#updatelicensespecificationsforresource)
- [UpdateServiceSettings](AwsLicenseManagerActions.md#updateservicesettings)

## Enumeration Members

### AcceptGrant

• **AcceptGrant** = ``"license-manager:AcceptGrant"``

Grants permission to accept a grant

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_AcceptGrant.html

#### Defined in

actions/license-manager.ts:17

___

### CheckInLicense

• **CheckInLicense** = ``"license-manager:CheckInLicense"``

Grants permission to check in license entitlements back to pool

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckInLicense.html

#### Defined in

actions/license-manager.ts:23

___

### CheckoutBorrowLicense

• **CheckoutBorrowLicense** = ``"license-manager:CheckoutBorrowLicense"``

Grants permission to check out license entitlements for borrow use case

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckoutBorrowLicense.html

#### Defined in

actions/license-manager.ts:29

___

### CheckoutLicense

• **CheckoutLicense** = ``"license-manager:CheckoutLicense"``

Grants permission to check out license entitlements

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckoutLicense.html

#### Defined in

actions/license-manager.ts:35

___

### CreateGrant

• **CreateGrant** = ``"license-manager:CreateGrant"``

Grants permission to create a new grant for license

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateGrant.html

#### Defined in

actions/license-manager.ts:41

___

### CreateGrantVersion

• **CreateGrantVersion** = ``"license-manager:CreateGrantVersion"``

Grants permission to create new version of grant

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateGrantVersion.html

#### Defined in

actions/license-manager.ts:47

___

### CreateLicense

• **CreateLicense** = ``"license-manager:CreateLicense"``

Grants permission to create a new license

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicense.html

#### Defined in

actions/license-manager.ts:53

___

### CreateLicenseConfiguration

• **CreateLicenseConfiguration** = ``"license-manager:CreateLicenseConfiguration"``

Grants permission to create a new license configuration

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseConfiguration.html

#### Defined in

actions/license-manager.ts:59

___

### CreateLicenseConversionTaskForResource

• **CreateLicenseConversionTaskForResource** = ``"license-manager:CreateLicenseConversionTaskForResource"``

Grants permission to create a license conversion task for a resource

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseConversionTaskForResource.html

#### Defined in

actions/license-manager.ts:65

___

### CreateLicenseManagerReportGenerator

• **CreateLicenseManagerReportGenerator** = ``"license-manager:CreateLicenseManagerReportGenerator"``

Grants permission to create a report generator for a license configuration

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseManagerReportGenerator.html

#### Defined in

actions/license-manager.ts:71

___

### CreateLicenseVersion

• **CreateLicenseVersion** = ``"license-manager:CreateLicenseVersion"``

Grants permission to create new version of license

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseVersion.html

#### Defined in

actions/license-manager.ts:77

___

### CreateToken

• **CreateToken** = ``"license-manager:CreateToken"``

Grants permission to create a new token for license

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateToken.html

#### Defined in

actions/license-manager.ts:83

___

### DeleteGrant

• **DeleteGrant** = ``"license-manager:DeleteGrant"``

Grants permission to delete a grant

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteGrant.html

#### Defined in

actions/license-manager.ts:89

___

### DeleteLicense

• **DeleteLicense** = ``"license-manager:DeleteLicense"``

Grants permission to delete a license

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicense.html

#### Defined in

actions/license-manager.ts:95

___

### DeleteLicenseConfiguration

• **DeleteLicenseConfiguration** = ``"license-manager:DeleteLicenseConfiguration"``

Grants permission to permanently delete a license configuration

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseConfiguration.html

#### Defined in

actions/license-manager.ts:101

___

### DeleteLicenseManagerReportGenerator

• **DeleteLicenseManagerReportGenerator** = ``"license-manager:DeleteLicenseManagerReportGenerator"``

Grants permission to delete a report generator

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseManagerReportGenerator.html

#### Defined in

actions/license-manager.ts:107

___

### DeleteToken

• **DeleteToken** = ``"license-manager:DeleteToken"``

Grants permission to delete token

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteToken.html

#### Defined in

actions/license-manager.ts:113

___

### ExtendLicenseConsumption

• **ExtendLicenseConsumption** = ``"license-manager:ExtendLicenseConsumption"``

Grants permission to extend consumption period of already checkout license enti
tlements

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ExtendLicenseConsumption.html

#### Defined in

actions/license-manager.ts:120

___

### GetAccessToken

• **GetAccessToken** = ``"license-manager:GetAccessToken"``

Grants permission to get access token

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetAccessToken.html

#### Defined in

actions/license-manager.ts:126

___

### GetGrant

• **GetGrant** = ``"license-manager:GetGrant"``

Grants permission to get a grant

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetGrant.html

#### Defined in

actions/license-manager.ts:132

___

### GetLicense

• **GetLicense** = ``"license-manager:GetLicense"``

Grants permission to get a license

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicense.html

#### Defined in

actions/license-manager.ts:138

___

### GetLicenseConfiguration

• **GetLicenseConfiguration** = ``"license-manager:GetLicenseConfiguration"``

Grants permission to get a license configuration

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConfiguration.html

#### Defined in

actions/license-manager.ts:144

___

### GetLicenseConversionTask

• **GetLicenseConversionTask** = ``"license-manager:GetLicenseConversionTask"``

Grants permission to retrieve a license conversion task

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConversionTask.html

#### Defined in

actions/license-manager.ts:150

___

### GetLicenseManagerReportGenerator

• **GetLicenseManagerReportGenerator** = ``"license-manager:GetLicenseManagerReportGenerator"``

Grants permission to get a report generator

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseManagerReportGenerator.html

#### Defined in

actions/license-manager.ts:156

___

### GetLicenseUsage

• **GetLicenseUsage** = ``"license-manager:GetLicenseUsage"``

Grants permission to get a license usage

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseUsage.html

#### Defined in

actions/license-manager.ts:162

___

### GetServiceSettings

• **GetServiceSettings** = ``"license-manager:GetServiceSettings"``

Grants permission to get service settings

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetServiceSettings.html

#### Defined in

actions/license-manager.ts:168

___

### ListAssociationsForLicenseConfiguration

• **ListAssociationsForLicenseConfiguration** = ``"license-manager:ListAssociationsForLicenseConfiguration"``

Grants permission to list associations for a selected license configuration

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListAssociationsForLicenseConfiguration.html

#### Defined in

actions/license-manager.ts:174

___

### ListDistributedGrants

• **ListDistributedGrants** = ``"license-manager:ListDistributedGrants"``

Grants permission to list distributed grants

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListDistributedGrants.html

#### Defined in

actions/license-manager.ts:180

___

### ListFailuresForLicenseConfigurationOperations

• **ListFailuresForLicenseConfigurationOperations** = ``"license-manager:ListFailuresForLicenseConfigurationOperations"``

Grants permission to list the license configuration operations that failed

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListFailuresForLicenseConfigurationOperations.html

#### Defined in

actions/license-manager.ts:186

___

### ListLicenseConfigurations

• **ListLicenseConfigurations** = ``"license-manager:ListLicenseConfigurations"``

Grants permission to list license configurations

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConfigurations.html

#### Defined in

actions/license-manager.ts:192

___

### ListLicenseConversionTasks

• **ListLicenseConversionTasks** = ``"license-manager:ListLicenseConversionTasks"``

Grants permission to list license conversion tasks

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConversionTasks.html

#### Defined in

actions/license-manager.ts:198

___

### ListLicenseManagerReportGenerators

• **ListLicenseManagerReportGenerators** = ``"license-manager:ListLicenseManagerReportGenerators"``

Grants permission to list report generators

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseManagerReportGenerators.html

#### Defined in

actions/license-manager.ts:204

___

### ListLicenseSpecificationsForResource

• **ListLicenseSpecificationsForResource** = ``"license-manager:ListLicenseSpecificationsForResource"``

Grants permission to list license specifications associated with a selected res
ource

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseSpecificationsForResource.html

#### Defined in

actions/license-manager.ts:211

___

### ListLicenseVersions

• **ListLicenseVersions** = ``"license-manager:ListLicenseVersions"``

Grants permission to list license versions

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseVersions.html

#### Defined in

actions/license-manager.ts:217

___

### ListLicenses

• **ListLicenses** = ``"license-manager:ListLicenses"``

Grants permission to list licenses

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenses.html

#### Defined in

actions/license-manager.ts:223

___

### ListReceivedGrants

• **ListReceivedGrants** = ``"license-manager:ListReceivedGrants"``

Grants permission to list received grants

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedGrants.html

#### Defined in

actions/license-manager.ts:229

___

### ListReceivedGrantsForOrganization

• **ListReceivedGrantsForOrganization** = ``"license-manager:ListReceivedGrantsForOrganization"``

Grants permission to list received grants for organization

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedGrantsForOrganization.html

#### Defined in

actions/license-manager.ts:235

___

### ListReceivedLicenses

• **ListReceivedLicenses** = ``"license-manager:ListReceivedLicenses"``

Grants permission to list received licenses

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedLicenses.html

#### Defined in

actions/license-manager.ts:241

___

### ListReceivedLicensesForOrganization

• **ListReceivedLicensesForOrganization** = ``"license-manager:ListReceivedLicensesForOrganization"``

Grants permission to list received licenses for organization

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedLicensesForOrganization.html

#### Defined in

actions/license-manager.ts:247

___

### ListResourceInventory

• **ListResourceInventory** = ``"license-manager:ListResourceInventory"``

Grants permission to list resource inventory

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListResourceInventory.html

#### Defined in

actions/license-manager.ts:253

___

### ListTagsForResource

• **ListTagsForResource** = ``"license-manager:ListTagsForResource"``

Grants permission to list tags for a selected resource

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/license-manager.ts:259

___

### ListTokens

• **ListTokens** = ``"license-manager:ListTokens"``

Grants permission to list tokens

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTokens.html

#### Defined in

actions/license-manager.ts:265

___

### ListUsageForLicenseConfiguration

• **ListUsageForLicenseConfiguration** = ``"license-manager:ListUsageForLicenseConfiguration"``

Grants permission to list usage records for selected license configuration

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListUsageForLicenseConfiguration.html

#### Defined in

actions/license-manager.ts:271

___

### RejectGrant

• **RejectGrant** = ``"license-manager:RejectGrant"``

Grants permission to reject a grant

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_RejectGrant.html

#### Defined in

actions/license-manager.ts:277

___

### TagResource

• **TagResource** = ``"license-manager:TagResource"``

Grants permission to tag a selected resource

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_TagResource.html

#### Defined in

actions/license-manager.ts:283

___

### UntagResource

• **UntagResource** = ``"license-manager:UntagResource"``

Grants permission to untag a selected resource

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UntagResource.html

#### Defined in

actions/license-manager.ts:289

___

### UpdateLicenseConfiguration

• **UpdateLicenseConfiguration** = ``"license-manager:UpdateLicenseConfiguration"``

Grants permission to update an existing license configuration

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseConfiguration.html

#### Defined in

actions/license-manager.ts:295

___

### UpdateLicenseManagerReportGenerator

• **UpdateLicenseManagerReportGenerator** = ``"license-manager:UpdateLicenseManagerReportGenerator"``

Grants permission to update a report generator for a license configuration

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseManagerReportGenerator.html

#### Defined in

actions/license-manager.ts:301

___

### UpdateLicenseSpecificationsForResource

• **UpdateLicenseSpecificationsForResource** = ``"license-manager:UpdateLicenseSpecificationsForResource"``

Grants permission to updates license specifications for a selected resource

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseSpecificationsForResource.html

#### Defined in

actions/license-manager.ts:307

___

### UpdateServiceSettings

• **UpdateServiceSettings** = ``"license-manager:UpdateServiceSettings"``

Grants permission to updates service settings

See https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateServiceSettings.html

#### Defined in

actions/license-manager.ts:313
