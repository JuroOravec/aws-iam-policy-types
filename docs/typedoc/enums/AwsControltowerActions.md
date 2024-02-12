[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsControltowerActions

# Enumeration: AwsControltowerActions

All IAM policy actions for AWS Control Tower (CONTROLTOWER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscontroltower.html

2024-02-12T09:56:48.712Z

## Table of contents

### Enumeration Members

- [CreateLandingZone](AwsControltowerActions.md#createlandingzone)
- [CreateManagedAccount](AwsControltowerActions.md#createmanagedaccount)
- [DeleteLandingZone](AwsControltowerActions.md#deletelandingzone)
- [DeregisterManagedAccount](AwsControltowerActions.md#deregistermanagedaccount)
- [DeregisterOrganizationalUnit](AwsControltowerActions.md#deregisterorganizationalunit)
- [DescribeAccountFactoryConfig](AwsControltowerActions.md#describeaccountfactoryconfig)
- [DescribeCoreService](AwsControltowerActions.md#describecoreservice)
- [DescribeGuardrail](AwsControltowerActions.md#describeguardrail)
- [DescribeGuardrailForTarget](AwsControltowerActions.md#describeguardrailfortarget)
- [DescribeLandingZoneConfiguration](AwsControltowerActions.md#describelandingzoneconfiguration)
- [DescribeManagedAccount](AwsControltowerActions.md#describemanagedaccount)
- [DescribeManagedOrganizationalUnit](AwsControltowerActions.md#describemanagedorganizationalunit)
- [DescribeRegisterOrganizationalUnitOperation](AwsControltowerActions.md#describeregisterorganizationalunitoperation)
- [DescribeSingleSignOn](AwsControltowerActions.md#describesinglesignon)
- [DisableControl](AwsControltowerActions.md#disablecontrol)
- [DisableGuardrail](AwsControltowerActions.md#disableguardrail)
- [EnableControl](AwsControltowerActions.md#enablecontrol)
- [EnableGuardrail](AwsControltowerActions.md#enableguardrail)
- [GetAccountInfo](AwsControltowerActions.md#getaccountinfo)
- [GetAvailableUpdates](AwsControltowerActions.md#getavailableupdates)
- [GetControlOperation](AwsControltowerActions.md#getcontroloperation)
- [GetEnabledControl](AwsControltowerActions.md#getenabledcontrol)
- [GetGuardrailComplianceStatus](AwsControltowerActions.md#getguardrailcompliancestatus)
- [GetHomeRegion](AwsControltowerActions.md#gethomeregion)
- [GetLandingZone](AwsControltowerActions.md#getlandingzone)
- [GetLandingZoneDriftStatus](AwsControltowerActions.md#getlandingzonedriftstatus)
- [GetLandingZoneOperation](AwsControltowerActions.md#getlandingzoneoperation)
- [GetLandingZoneStatus](AwsControltowerActions.md#getlandingzonestatus)
- [ListDirectoryGroups](AwsControltowerActions.md#listdirectorygroups)
- [ListDriftDetails](AwsControltowerActions.md#listdriftdetails)
- [ListEnabledControls](AwsControltowerActions.md#listenabledcontrols)
- [ListEnabledGuardrails](AwsControltowerActions.md#listenabledguardrails)
- [ListExtendGovernancePrecheckDetails](AwsControltowerActions.md#listextendgovernanceprecheckdetails)
- [ListExternalConfigRuleCompliance](AwsControltowerActions.md#listexternalconfigrulecompliance)
- [ListGuardrailViolations](AwsControltowerActions.md#listguardrailviolations)
- [ListGuardrails](AwsControltowerActions.md#listguardrails)
- [ListGuardrailsForTarget](AwsControltowerActions.md#listguardrailsfortarget)
- [ListLandingZones](AwsControltowerActions.md#listlandingzones)
- [ListManagedAccounts](AwsControltowerActions.md#listmanagedaccounts)
- [ListManagedAccountsForGuardrail](AwsControltowerActions.md#listmanagedaccountsforguardrail)
- [ListManagedAccountsForParent](AwsControltowerActions.md#listmanagedaccountsforparent)
- [ListManagedOrganizationalUnits](AwsControltowerActions.md#listmanagedorganizationalunits)
- [ListManagedOrganizationalUnitsForGuardrail](AwsControltowerActions.md#listmanagedorganizationalunitsforguardrail)
- [ListTagsForResource](AwsControltowerActions.md#listtagsforresource)
- [ManageOrganizationalUnit](AwsControltowerActions.md#manageorganizationalunit)
- [PerformPreLaunchChecks](AwsControltowerActions.md#performprelaunchchecks)
- [ResetLandingZone](AwsControltowerActions.md#resetlandingzone)
- [SetupLandingZone](AwsControltowerActions.md#setuplandingzone)
- [TagResource](AwsControltowerActions.md#tagresource)
- [UntagResource](AwsControltowerActions.md#untagresource)
- [UpdateAccountFactoryConfig](AwsControltowerActions.md#updateaccountfactoryconfig)
- [UpdateEnabledControl](AwsControltowerActions.md#updateenabledcontrol)
- [UpdateLandingZone](AwsControltowerActions.md#updatelandingzone)

## Enumeration Members

### CreateLandingZone

• **CreateLandingZone** = ``"controltower:CreateLandingZone"``

Grants permission to create a landing zone

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_CreateLandingZone.html

#### Defined in

actions/controltower.ts:17

___

### CreateManagedAccount

• **CreateManagedAccount** = ``"controltower:CreateManagedAccount"``

Grants permission to create an account managed by AWS Control Tower

See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html

#### Defined in

actions/controltower.ts:23

___

### DeleteLandingZone

• **DeleteLandingZone** = ``"controltower:DeleteLandingZone"``

Grants permission to delete AWS Control Tower landing zone

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_DeleteLandingZone.html

#### Defined in

actions/controltower.ts:29

___

### DeregisterManagedAccount

• **DeregisterManagedAccount** = ``"controltower:DeregisterManagedAccount"``

Grants permission to deregister an account created through the account factory
from AWS Control Tower

See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html

#### Defined in

actions/controltower.ts:36

___

### DeregisterOrganizationalUnit

• **DeregisterOrganizationalUnit** = ``"controltower:DeregisterOrganizationalUnit"``

Grants permission to deregister an organizational unit from AWS Control Tower m
anagement

See https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html

#### Defined in

actions/controltower.ts:43

___

### DescribeAccountFactoryConfig

• **DescribeAccountFactoryConfig** = ``"controltower:DescribeAccountFactoryConfig"``

Grants permission to describe the current account factory configuration

See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html

#### Defined in

actions/controltower.ts:49

___

### DescribeCoreService

• **DescribeCoreService** = ``"controltower:DescribeCoreService"``

Grants permission to describe resources managed by core accounts in AWS Control
Tower

See https://docs.aws.amazon.com/controltower/latest/userguide/how-control-tower-works.html#what-shared

#### Defined in

actions/controltower.ts:56

___

### DescribeGuardrail

• **DescribeGuardrail** = ``"controltower:DescribeGuardrail"``

Grants permission to describe a guardrail

See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html

#### Defined in

actions/controltower.ts:62

___

### DescribeGuardrailForTarget

• **DescribeGuardrailForTarget** = ``"controltower:DescribeGuardrailForTarget"``

Grants permission to describe a guardrail for a organizational unit

See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html

#### Defined in

actions/controltower.ts:68

___

### DescribeLandingZoneConfiguration

• **DescribeLandingZoneConfiguration** = ``"controltower:DescribeLandingZoneConfiguration"``

Grants permission to describe the current Landing Zone configuration

See https://docs.aws.amazon.com/controltower/latest/userguide/step-two.html

#### Defined in

actions/controltower.ts:74

___

### DescribeManagedAccount

• **DescribeManagedAccount** = ``"controltower:DescribeManagedAccount"``

Grants permission to describe an account created through account factory

See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html

#### Defined in

actions/controltower.ts:80

___

### DescribeManagedOrganizationalUnit

• **DescribeManagedOrganizationalUnit** = ``"controltower:DescribeManagedOrganizationalUnit"``

Grants permission to describe an AWS Organizations organizational unit managed
by AWS Control Tower

See https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html

#### Defined in

actions/controltower.ts:87

___

### DescribeRegisterOrganizationalUnitOperation

• **DescribeRegisterOrganizationalUnitOperation** = ``"controltower:DescribeRegisterOrganizationalUnitOperation"``

Grants permission to describe a Register Organizational Unit Operation

See https://docs.aws.amazon.com/controltower/latest/userguide/about-extending-governance.html

#### Defined in

actions/controltower.ts:93

___

### DescribeSingleSignOn

• **DescribeSingleSignOn** = ``"controltower:DescribeSingleSignOn"``

Grants permission to describe the current AWS Control Tower &SSO; configuration

See https://docs.aws.amazon.com/controltower/latest/userguide/sso.html

#### Defined in

actions/controltower.ts:99

___

### DisableControl

• **DisableControl** = ``"controltower:DisableControl"``

Grants permission to remove a control from an organizational unit

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableControl.html

#### Defined in

actions/controltower.ts:105

___

### DisableGuardrail

• **DisableGuardrail** = ``"controltower:DisableGuardrail"``

Grants permission to disable a guardrail from an organizational unit

See https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls-on-ou.html

#### Defined in

actions/controltower.ts:111

___

### EnableControl

• **EnableControl** = ``"controltower:EnableControl"``

Grants permission to activate a control for an organizational unit

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableControl.html

#### Defined in

actions/controltower.ts:117

___

### EnableGuardrail

• **EnableGuardrail** = ``"controltower:EnableGuardrail"``

Grants permission to enable a guardrail to an organizational unit

See https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls-on-ou.html

#### Defined in

actions/controltower.ts:123

___

### GetAccountInfo

• **GetAccountInfo** = ``"controltower:GetAccountInfo"``

Grants permission to describe an account email and validate that it exists

See https://docs.aws.amazon.com/controltower/latest/userguide/accounts.html

#### Defined in

actions/controltower.ts:129

___

### GetAvailableUpdates

• **GetAvailableUpdates** = ``"controltower:GetAvailableUpdates"``

Grants permission to list available updates for the current AWS Control Tower d
eployment

See https://docs.aws.amazon.com/controltower/latest/userguide/configuration-updates.html

#### Defined in

actions/controltower.ts:136

___

### GetControlOperation

• **GetControlOperation** = ``"controltower:GetControlOperation"``

Grants permission to get the current status of a particular EnabledControl or D
isableControl operation

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetControlOperation.html

#### Defined in

actions/controltower.ts:143

___

### GetEnabledControl

• **GetEnabledControl** = ``"controltower:GetEnabledControl"``

Grants permission to get an enabled control from an organizational unit

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledControl.html

#### Defined in

actions/controltower.ts:149

___

### GetGuardrailComplianceStatus

• **GetGuardrailComplianceStatus** = ``"controltower:GetGuardrailComplianceStatus"``

Grants permission to get the current compliance status of a guardrail

See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html

#### Defined in

actions/controltower.ts:155

___

### GetHomeRegion

• **GetHomeRegion** = ``"controltower:GetHomeRegion"``

Grants permission to get the home region of the AWS Control Tower setup

See https://docs.aws.amazon.com/controltower/latest/userguide/how-control-tower-works.html#region-how

#### Defined in

actions/controltower.ts:161

___

### GetLandingZone

• **GetLandingZone** = ``"controltower:GetLandingZone"``

Grants permission to get the current status of the landing zone setup

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZone.html

#### Defined in

actions/controltower.ts:167

___

### GetLandingZoneDriftStatus

• **GetLandingZoneDriftStatus** = ``"controltower:GetLandingZoneDriftStatus"``

Grants permission to get the current landing zone drift status

See https://docs.aws.amazon.com/controltower/latest/userguide/drift.html

#### Defined in

actions/controltower.ts:173

___

### GetLandingZoneOperation

• **GetLandingZoneOperation** = ``"controltower:GetLandingZoneOperation"``

Grants permission to get the current status of a particular landing zone operat
ion

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZoneOperation.html

#### Defined in

actions/controltower.ts:180

___

### GetLandingZoneStatus

• **GetLandingZoneStatus** = ``"controltower:GetLandingZoneStatus"``

Grants permission to get the current status of the landing zone setup

See https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-with-control-tower.html#step-two

#### Defined in

actions/controltower.ts:186

___

### ListDirectoryGroups

• **ListDirectoryGroups** = ``"controltower:ListDirectoryGroups"``

Grants permission to list the current directory groups available through &SSO;

See https://docs.aws.amazon.com/controltower/latest/userguide/sso.html

#### Defined in

actions/controltower.ts:192

___

### ListDriftDetails

• **ListDriftDetails** = ``"controltower:ListDriftDetails"``

Grants permission to list occurrences of drift in AWS Control Tower

See https://docs.aws.amazon.com/controltower/latest/userguide/drift.html

#### Defined in

actions/controltower.ts:198

___

### ListEnabledControls

• **ListEnabledControls** = ``"controltower:ListEnabledControls"``

Grants permission to list all enabled controls in a specified organizational un
it

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledControls.html

#### Defined in

actions/controltower.ts:205

___

### ListEnabledGuardrails

• **ListEnabledGuardrails** = ``"controltower:ListEnabledGuardrails"``

Grants permission to list currently enabled guardrails

See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html

#### Defined in

actions/controltower.ts:211

___

### ListExtendGovernancePrecheckDetails

• **ListExtendGovernancePrecheckDetails** = ``"controltower:ListExtendGovernancePrecheckDetails"``

Grants permission to list Precheck details for an Organizational Unit

See https://docs.aws.amazon.com/controltower/latest/userguide/about-extending-governance.html

#### Defined in

actions/controltower.ts:217

___

### ListExternalConfigRuleCompliance

• **ListExternalConfigRuleCompliance** = ``"controltower:ListExternalConfigRuleCompliance"``

Grants permission to list the compliance of external AWS Config rules

See https://docs.aws.amazon.com/controltower/latest/userguide/review-compliance.html

#### Defined in

actions/controltower.ts:223

___

### ListGuardrailViolations

• **ListGuardrailViolations** = ``"controltower:ListGuardrailViolations"``

Grants permission to list existing guardrail violations

See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html

#### Defined in

actions/controltower.ts:229

___

### ListGuardrails

• **ListGuardrails** = ``"controltower:ListGuardrails"``

Grants permission to list all available guardrails

See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html

#### Defined in

actions/controltower.ts:235

___

### ListGuardrailsForTarget

• **ListGuardrailsForTarget** = ``"controltower:ListGuardrailsForTarget"``

Grants permission to list guardrails and their current state for a organization
al unit

See https://docs.aws.amazon.com/controltower/latest/userguide/controls.html

#### Defined in

actions/controltower.ts:242

___

### ListLandingZones

• **ListLandingZones** = ``"controltower:ListLandingZones"``

Grants permission to list all landing zones

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZones.html

#### Defined in

actions/controltower.ts:248

___

### ListManagedAccounts

• **ListManagedAccounts** = ``"controltower:ListManagedAccounts"``

Grants permission to list accounts managed through AWS Control Tower

See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html

#### Defined in

actions/controltower.ts:254

___

### ListManagedAccountsForGuardrail

• **ListManagedAccountsForGuardrail** = ``"controltower:ListManagedAccountsForGuardrail"``

Grants permission to list managed accounts with a specified guardrail applied

See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html

#### Defined in

actions/controltower.ts:260

___

### ListManagedAccountsForParent

• **ListManagedAccountsForParent** = ``"controltower:ListManagedAccountsForParent"``

Grants permission to list managed accounts under an organizational unit

See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html

#### Defined in

actions/controltower.ts:266

___

### ListManagedOrganizationalUnits

• **ListManagedOrganizationalUnits** = ``"controltower:ListManagedOrganizationalUnits"``

Grants permission to list organizational units managed by AWS Control Tower

See https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html

#### Defined in

actions/controltower.ts:272

___

### ListManagedOrganizationalUnitsForGuardrail

• **ListManagedOrganizationalUnitsForGuardrail** = ``"controltower:ListManagedOrganizationalUnitsForGuardrail"``

Grants permission to list managed organizational units that have a specified gu
ardrail applied

See https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html

#### Defined in

actions/controltower.ts:279

___

### ListTagsForResource

• **ListTagsForResource** = ``"controltower:ListTagsForResource"``

Grants permission to list the tags for a resource

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/controltower.ts:285

___

### ManageOrganizationalUnit

• **ManageOrganizationalUnit** = ``"controltower:ManageOrganizationalUnit"``

Grants permission to set up an organizational unit to be managed by AWS Control
Tower

See https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html

#### Defined in

actions/controltower.ts:292

___

### PerformPreLaunchChecks

• **PerformPreLaunchChecks** = ``"controltower:PerformPreLaunchChecks"``

Grants permission to perform validations in an account

See https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-prereqs.html

#### Defined in

actions/controltower.ts:298

___

### ResetLandingZone

• **ResetLandingZone** = ``"controltower:ResetLandingZone"``

Grants permission to reset a landing zone

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetLandingZone.html

#### Defined in

actions/controltower.ts:304

___

### SetupLandingZone

• **SetupLandingZone** = ``"controltower:SetupLandingZone"``

Grants permission to set up or update AWS Control Tower landing zone

See https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-with-control-tower.html#step-two

#### Defined in

actions/controltower.ts:310

___

### TagResource

• **TagResource** = ``"controltower:TagResource"``

Grants permission to add tags to a resource

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_TagResource.html

#### Defined in

actions/controltower.ts:316

___

### UntagResource

• **UntagResource** = ``"controltower:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_UntagResource.html

#### Defined in

actions/controltower.ts:322

___

### UpdateAccountFactoryConfig

• **UpdateAccountFactoryConfig** = ``"controltower:UpdateAccountFactoryConfig"``

Grants permission to update the account factory configuration

See https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html

#### Defined in

actions/controltower.ts:328

___

### UpdateEnabledControl

• **UpdateEnabledControl** = ``"controltower:UpdateEnabledControl"``

Grants permission to update an enabled control for an organizational unit

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledControl.html

#### Defined in

actions/controltower.ts:334

___

### UpdateLandingZone

• **UpdateLandingZone** = ``"controltower:UpdateLandingZone"``

Grants permission to update a landing zone

See https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateLandingZone.html

#### Defined in

actions/controltower.ts:340
