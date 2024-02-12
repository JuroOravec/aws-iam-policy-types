[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDatazoneActions

# Enumeration: AwsDatazoneActions

All IAM policy actions for Amazon DataZone (DATAZONE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatazone.html

2024-02-12T09:56:54.736Z

## Table of contents

### Enumeration Members

- [AcceptPredictions](AwsDatazoneActions.md#acceptpredictions)
- [AcceptSubscriptionRequest](AwsDatazoneActions.md#acceptsubscriptionrequest)
- [CancelSubscription](AwsDatazoneActions.md#cancelsubscription)
- [CreateAsset](AwsDatazoneActions.md#createasset)
- [CreateAssetRevision](AwsDatazoneActions.md#createassetrevision)
- [CreateAssetType](AwsDatazoneActions.md#createassettype)
- [CreateDataSource](AwsDatazoneActions.md#createdatasource)
- [CreateDomain](AwsDatazoneActions.md#createdomain)
- [CreateEnvironment](AwsDatazoneActions.md#createenvironment)
- [CreateEnvironmentBlueprint](AwsDatazoneActions.md#createenvironmentblueprint)
- [CreateEnvironmentProfile](AwsDatazoneActions.md#createenvironmentprofile)
- [CreateFormType](AwsDatazoneActions.md#createformtype)
- [CreateGlossary](AwsDatazoneActions.md#createglossary)
- [CreateGlossaryTerm](AwsDatazoneActions.md#createglossaryterm)
- [CreateGroupProfile](AwsDatazoneActions.md#creategroupprofile)
- [CreateListingChangeSet](AwsDatazoneActions.md#createlistingchangeset)
- [CreateProject](AwsDatazoneActions.md#createproject)
- [CreateProjectMembership](AwsDatazoneActions.md#createprojectmembership)
- [CreateSubscriptionGrant](AwsDatazoneActions.md#createsubscriptiongrant)
- [CreateSubscriptionRequest](AwsDatazoneActions.md#createsubscriptionrequest)
- [CreateSubscriptionTarget](AwsDatazoneActions.md#createsubscriptiontarget)
- [CreateUserProfile](AwsDatazoneActions.md#createuserprofile)
- [DeleteAsset](AwsDatazoneActions.md#deleteasset)
- [DeleteAssetType](AwsDatazoneActions.md#deleteassettype)
- [DeleteDataSource](AwsDatazoneActions.md#deletedatasource)
- [DeleteDomain](AwsDatazoneActions.md#deletedomain)
- [DeleteDomainSharingPolicy](AwsDatazoneActions.md#deletedomainsharingpolicy)
- [DeleteEnvironment](AwsDatazoneActions.md#deleteenvironment)
- [DeleteEnvironmentBlueprint](AwsDatazoneActions.md#deleteenvironmentblueprint)
- [DeleteEnvironmentBlueprintConfiguration](AwsDatazoneActions.md#deleteenvironmentblueprintconfiguration)
- [DeleteEnvironmentProfile](AwsDatazoneActions.md#deleteenvironmentprofile)
- [DeleteFormType](AwsDatazoneActions.md#deleteformtype)
- [DeleteGlossary](AwsDatazoneActions.md#deleteglossary)
- [DeleteGlossaryTerm](AwsDatazoneActions.md#deleteglossaryterm)
- [DeleteListing](AwsDatazoneActions.md#deletelisting)
- [DeleteProject](AwsDatazoneActions.md#deleteproject)
- [DeleteProjectMembership](AwsDatazoneActions.md#deleteprojectmembership)
- [DeleteSubscriptionGrant](AwsDatazoneActions.md#deletesubscriptiongrant)
- [DeleteSubscriptionRequest](AwsDatazoneActions.md#deletesubscriptionrequest)
- [DeleteSubscriptionTarget](AwsDatazoneActions.md#deletesubscriptiontarget)
- [GetAsset](AwsDatazoneActions.md#getasset)
- [GetAssetType](AwsDatazoneActions.md#getassettype)
- [GetDataSource](AwsDatazoneActions.md#getdatasource)
- [GetDataSourceRun](AwsDatazoneActions.md#getdatasourcerun)
- [GetDomain](AwsDatazoneActions.md#getdomain)
- [GetDomainSharingPolicy](AwsDatazoneActions.md#getdomainsharingpolicy)
- [GetEnvironment](AwsDatazoneActions.md#getenvironment)
- [GetEnvironmentActionLink](AwsDatazoneActions.md#getenvironmentactionlink)
- [GetEnvironmentBlueprint](AwsDatazoneActions.md#getenvironmentblueprint)
- [GetEnvironmentBlueprintConfiguration](AwsDatazoneActions.md#getenvironmentblueprintconfiguration)
- [GetEnvironmentCredentials](AwsDatazoneActions.md#getenvironmentcredentials)
- [GetEnvironmentProfile](AwsDatazoneActions.md#getenvironmentprofile)
- [GetFormType](AwsDatazoneActions.md#getformtype)
- [GetGlossary](AwsDatazoneActions.md#getglossary)
- [GetGlossaryTerm](AwsDatazoneActions.md#getglossaryterm)
- [GetGroupProfile](AwsDatazoneActions.md#getgroupprofile)
- [GetIamPortalLoginUrl](AwsDatazoneActions.md#getiamportalloginurl)
- [GetListing](AwsDatazoneActions.md#getlisting)
- [GetMetadataGenerationRun](AwsDatazoneActions.md#getmetadatagenerationrun)
- [GetProject](AwsDatazoneActions.md#getproject)
- [GetSubscription](AwsDatazoneActions.md#getsubscription)
- [GetSubscriptionEligibility](AwsDatazoneActions.md#getsubscriptioneligibility)
- [GetSubscriptionGrant](AwsDatazoneActions.md#getsubscriptiongrant)
- [GetSubscriptionRequestDetails](AwsDatazoneActions.md#getsubscriptionrequestdetails)
- [GetSubscriptionTarget](AwsDatazoneActions.md#getsubscriptiontarget)
- [GetUserProfile](AwsDatazoneActions.md#getuserprofile)
- [ListAccountEnvironments](AwsDatazoneActions.md#listaccountenvironments)
- [ListAssetRevisions](AwsDatazoneActions.md#listassetrevisions)
- [ListDataSourceRunActivities](AwsDatazoneActions.md#listdatasourcerunactivities)
- [ListDataSourceRuns](AwsDatazoneActions.md#listdatasourceruns)
- [ListDataSources](AwsDatazoneActions.md#listdatasources)
- [ListDomains](AwsDatazoneActions.md#listdomains)
- [ListEnvironmentBlueprintConfigurationSummaries](AwsDatazoneActions.md#listenvironmentblueprintconfigurationsummaries)
- [ListEnvironmentBlueprintConfigurations](AwsDatazoneActions.md#listenvironmentblueprintconfigurations)
- [ListEnvironmentBlueprints](AwsDatazoneActions.md#listenvironmentblueprints)
- [ListEnvironmentProfiles](AwsDatazoneActions.md#listenvironmentprofiles)
- [ListEnvironments](AwsDatazoneActions.md#listenvironments)
- [ListGroupsForUser](AwsDatazoneActions.md#listgroupsforuser)
- [ListMetadataGenerationRuns](AwsDatazoneActions.md#listmetadatagenerationruns)
- [ListNotifications](AwsDatazoneActions.md#listnotifications)
- [ListProjectMemberships](AwsDatazoneActions.md#listprojectmemberships)
- [ListProjects](AwsDatazoneActions.md#listprojects)
- [ListSubscriptionGrants](AwsDatazoneActions.md#listsubscriptiongrants)
- [ListSubscriptionRequests](AwsDatazoneActions.md#listsubscriptionrequests)
- [ListSubscriptionTargets](AwsDatazoneActions.md#listsubscriptiontargets)
- [ListSubscriptions](AwsDatazoneActions.md#listsubscriptions)
- [ListTagsForResource](AwsDatazoneActions.md#listtagsforresource)
- [ListWarehouseMetadata](AwsDatazoneActions.md#listwarehousemetadata)
- [ProvisionDomain](AwsDatazoneActions.md#provisiondomain)
- [PutDomainSharingPolicy](AwsDatazoneActions.md#putdomainsharingpolicy)
- [PutEnvironmentBlueprintConfiguration](AwsDatazoneActions.md#putenvironmentblueprintconfiguration)
- [RefreshToken](AwsDatazoneActions.md#refreshtoken)
- [RejectPredictions](AwsDatazoneActions.md#rejectpredictions)
- [RejectSubscriptionRequest](AwsDatazoneActions.md#rejectsubscriptionrequest)
- [RevokeSubscription](AwsDatazoneActions.md#revokesubscription)
- [Search](AwsDatazoneActions.md#search)
- [SearchGroupProfiles](AwsDatazoneActions.md#searchgroupprofiles)
- [SearchListings](AwsDatazoneActions.md#searchlistings)
- [SearchTypes](AwsDatazoneActions.md#searchtypes)
- [SearchUserProfiles](AwsDatazoneActions.md#searchuserprofiles)
- [SsoLogin](AwsDatazoneActions.md#ssologin)
- [SsoLogout](AwsDatazoneActions.md#ssologout)
- [StartDataSourceRun](AwsDatazoneActions.md#startdatasourcerun)
- [StartMetadataGenerationRun](AwsDatazoneActions.md#startmetadatagenerationrun)
- [StopMetadataGenerationRun](AwsDatazoneActions.md#stopmetadatagenerationrun)
- [TagResource](AwsDatazoneActions.md#tagresource)
- [UntagResource](AwsDatazoneActions.md#untagresource)
- [UpdateDataSource](AwsDatazoneActions.md#updatedatasource)
- [UpdateDomain](AwsDatazoneActions.md#updatedomain)
- [UpdateEnvironment](AwsDatazoneActions.md#updateenvironment)
- [UpdateEnvironmentBlueprint](AwsDatazoneActions.md#updateenvironmentblueprint)
- [UpdateEnvironmentConfiguration](AwsDatazoneActions.md#updateenvironmentconfiguration)
- [UpdateEnvironmentDeploymentStatus](AwsDatazoneActions.md#updateenvironmentdeploymentstatus)
- [UpdateEnvironmentProfile](AwsDatazoneActions.md#updateenvironmentprofile)
- [UpdateGlossary](AwsDatazoneActions.md#updateglossary)
- [UpdateGlossaryTerm](AwsDatazoneActions.md#updateglossaryterm)
- [UpdateGroupProfile](AwsDatazoneActions.md#updategroupprofile)
- [UpdateProject](AwsDatazoneActions.md#updateproject)
- [UpdateSubscriptionGrantStatus](AwsDatazoneActions.md#updatesubscriptiongrantstatus)
- [UpdateSubscriptionRequest](AwsDatazoneActions.md#updatesubscriptionrequest)
- [UpdateSubscriptionTarget](AwsDatazoneActions.md#updatesubscriptiontarget)
- [UpdateUserProfile](AwsDatazoneActions.md#updateuserprofile)
- [ValidatePassRole](AwsDatazoneActions.md#validatepassrole)

## Enumeration Members

### AcceptPredictions

• **AcceptPredictions** = ``"datazone:AcceptPredictions"``

Grants permission to accept prediction

See ${APIReferenceDocPage}API_AcceptPredictions.html

#### Defined in

actions/datazone.ts:17

___

### AcceptSubscriptionRequest

• **AcceptSubscriptionRequest** = ``"datazone:AcceptSubscriptionRequest"``

Grants permission to approve a subscription request for a Data Asset

See ${APIReferenceDocPage}API_AcceptSubscriptionRequest.html

#### Defined in

actions/datazone.ts:23

___

### CancelSubscription

• **CancelSubscription** = ``"datazone:CancelSubscription"``

Grants permission to revoke or unsubscribe an approved subscription to Data Ass
et

See ${APIReferenceDocPage}API_CancelSubscription.html

#### Defined in

actions/datazone.ts:30

___

### CreateAsset

• **CreateAsset** = ``"datazone:CreateAsset"``

Grants permission to create asset

See ${APIReferenceDocPage}API_CreateAsset.html

#### Defined in

actions/datazone.ts:36

___

### CreateAssetRevision

• **CreateAssetRevision** = ``"datazone:CreateAssetRevision"``

Grants permission to create new revision of an asset

See ${APIReferenceDocPage}API_CreateAssetRevision.html

#### Defined in

actions/datazone.ts:42

___

### CreateAssetType

• **CreateAssetType** = ``"datazone:CreateAssetType"``

Grants permission to create an asset type

See ${APIReferenceDocPage}API_CreateAssetType.html

#### Defined in

actions/datazone.ts:48

___

### CreateDataSource

• **CreateDataSource** = ``"datazone:CreateDataSource"``

Grants permission to create a new DataSource

See ${APIReferenceDocPage}API_CreateDataSource.html

#### Defined in

actions/datazone.ts:54

___

### CreateDomain

• **CreateDomain** = ``"datazone:CreateDomain"``

Grants permission to provision a domain which is a top level entity that contai
ns other Amazon DataZone resources

See ${APIReferenceDocPage}API_CreateDomain.html

#### Defined in

actions/datazone.ts:61

___

### CreateEnvironment

• **CreateEnvironment** = ``"datazone:CreateEnvironment"``

Grants permission to create a collection of configurated resources used to publ
ish and subscribe to data

See ${APIReferenceDocPage}API_CreateEnvironment.html

#### Defined in

actions/datazone.ts:68

___

### CreateEnvironmentBlueprint

• **CreateEnvironmentBlueprint** = ``"datazone:CreateEnvironmentBlueprint"``

Grants permission to create a custom Environment Blueprint that allow user to a
dd Environments to their Project

See ${APIReferenceDocPage}API_CreateEnvironmentBlueprint.html

#### Defined in

actions/datazone.ts:75

___

### CreateEnvironmentProfile

• **CreateEnvironmentProfile** = ``"datazone:CreateEnvironmentProfile"``

Grants permission to create a template from a Blueprint that can be used to cre
ate a Environment

See ${APIReferenceDocPage}API_CreateEnvironmentProfile.html

#### Defined in

actions/datazone.ts:82

___

### CreateFormType

• **CreateFormType** = ``"datazone:CreateFormType"``

Grants permission to create a form type or a new revision of it

See ${APIReferenceDocPage}API_CreateFormType.html

#### Defined in

actions/datazone.ts:88

___

### CreateGlossary

• **CreateGlossary** = ``"datazone:CreateGlossary"``

Grants permission to create a business glossary

See ${APIReferenceDocPage}API_CreateGlossary.html

#### Defined in

actions/datazone.ts:94

___

### CreateGlossaryTerm

• **CreateGlossaryTerm** = ``"datazone:CreateGlossaryTerm"``

Grants permission to create a glossary term

See ${APIReferenceDocPage}API_CreateGlossaryTerm.html

#### Defined in

actions/datazone.ts:100

___

### CreateGroupProfile

• **CreateGroupProfile** = ``"datazone:CreateGroupProfile"``

Grants permission to create a DataZone group profile for an IAM Identity Center
group

See ${APIReferenceDocPage}API_CreateGroupProfile.html

#### Defined in

actions/datazone.ts:107

___

### CreateListingChangeSet

• **CreateListingChangeSet** = ``"datazone:CreateListingChangeSet"``

Grants permission to create listing change set

See ${APIReferenceDocPage}API_CreateListingChangeSet.html

#### Defined in

actions/datazone.ts:113

___

### CreateProject

• **CreateProject** = ``"datazone:CreateProject"``

Grants permission to create a Project to enable your team to publish and subscr
ibe to data

See ${APIReferenceDocPage}API_CreateProject.html

#### Defined in

actions/datazone.ts:120

___

### CreateProjectMembership

• **CreateProjectMembership** = ``"datazone:CreateProjectMembership"``

Grants permission to add a user to a Project

See ${APIReferenceDocPage}API_CreateProjectMembership.html

#### Defined in

actions/datazone.ts:126

___

### CreateSubscriptionGrant

• **CreateSubscriptionGrant** = ``"datazone:CreateSubscriptionGrant"``

Grants permission to create a grant for an approved subscription on a subscript
ion target

See ${APIReferenceDocPage}API_CreateSubscriptionGrant.html

#### Defined in

actions/datazone.ts:133

___

### CreateSubscriptionRequest

• **CreateSubscriptionRequest** = ``"datazone:CreateSubscriptionRequest"``

Grants permission to create a subscription request for a Data Asset

See ${APIReferenceDocPage}API_CreateSubscriptionRequest.html

#### Defined in

actions/datazone.ts:139

___

### CreateSubscriptionTarget

• **CreateSubscriptionTarget** = ``"datazone:CreateSubscriptionTarget"``

Grants permission to create a subscription target for a Environment in the proj
ect

See ${APIReferenceDocPage}API_CreateSubscriptionTarget.html

#### Defined in

actions/datazone.ts:146

___

### CreateUserProfile

• **CreateUserProfile** = ``"datazone:CreateUserProfile"``

Grants permission to create a user profile for an existing user in the customer
s IAM Identity Center

See ${APIReferenceDocPage}API_CreateUserProfile.html

#### Defined in

actions/datazone.ts:153

___

### DeleteAsset

• **DeleteAsset** = ``"datazone:DeleteAsset"``

Grants permission to delete an asset

See ${APIReferenceDocPage}API_DeleteAsset.html

#### Defined in

actions/datazone.ts:159

___

### DeleteAssetType

• **DeleteAssetType** = ``"datazone:DeleteAssetType"``

Grants permission to delete an asset type

See ${APIReferenceDocPage}API_DeleteAssetType.html

#### Defined in

actions/datazone.ts:165

___

### DeleteDataSource

• **DeleteDataSource** = ``"datazone:DeleteDataSource"``

Grants permission to update existing DataSource

See ${APIReferenceDocPage}API_DeleteDataSource.html

#### Defined in

actions/datazone.ts:171

___

### DeleteDomain

• **DeleteDomain** = ``"datazone:DeleteDomain"``

Grants permission to delete a provisioned domain

See ${APIReferenceDocPage}API_DeleteDomain.html

#### Defined in

actions/datazone.ts:177

___

### DeleteDomainSharingPolicy

• **DeleteDomainSharingPolicy** = ``"datazone:DeleteDomainSharingPolicy"``

Grants permission to delete a resource policy for a DataZone Domain

See ${APIReferenceDocPage}API_DeleteDomainSharingPolicy.html

#### Defined in

actions/datazone.ts:183

___

### DeleteEnvironment

• **DeleteEnvironment** = ``"datazone:DeleteEnvironment"``

Grants permission to Delete Environment

See ${APIReferenceDocPage}API_DeleteEnvironment.html

#### Defined in

actions/datazone.ts:189

___

### DeleteEnvironmentBlueprint

• **DeleteEnvironmentBlueprint** = ``"datazone:DeleteEnvironmentBlueprint"``

Grants permission to delete Environment Blueprint

See ${APIReferenceDocPage}API_DeleteEnvironmentBlueprint.html

#### Defined in

actions/datazone.ts:195

___

### DeleteEnvironmentBlueprintConfiguration

• **DeleteEnvironmentBlueprintConfiguration** = ``"datazone:DeleteEnvironmentBlueprintConfiguration"``

Grants permission to delete environment blueprint configuration

See ${APIReferenceDocPage}API_DeleteEnvironmentBlueprintConfiguration.html

#### Defined in

actions/datazone.ts:201

___

### DeleteEnvironmentProfile

• **DeleteEnvironmentProfile** = ``"datazone:DeleteEnvironmentProfile"``

Grants permission to delete Environment Profile

See ${APIReferenceDocPage}API_DeleteEnvironmentProfile.html

#### Defined in

actions/datazone.ts:207

___

### DeleteFormType

• **DeleteFormType** = ``"datazone:DeleteFormType"``

Grants permission to delete a form type

See ${APIReferenceDocPage}API_DeleteFormType.html

#### Defined in

actions/datazone.ts:213

___

### DeleteGlossary

• **DeleteGlossary** = ``"datazone:DeleteGlossary"``

Grants permission to delete a business glossary

See ${APIReferenceDocPage}API_DeleteGlossary.html

#### Defined in

actions/datazone.ts:219

___

### DeleteGlossaryTerm

• **DeleteGlossaryTerm** = ``"datazone:DeleteGlossaryTerm"``

Grants permission to delete a glossary term

See ${APIReferenceDocPage}API_DeleteGlossaryTerm.html

#### Defined in

actions/datazone.ts:225

___

### DeleteListing

• **DeleteListing** = ``"datazone:DeleteListing"``

Grants permission to delete listing

See ${APIReferenceDocPage}API_DeleteListing.html

#### Defined in

actions/datazone.ts:231

___

### DeleteProject

• **DeleteProject** = ``"datazone:DeleteProject"``

Grants permission to delete a Project that enables your team to publish and sub
scribe to data

See ${APIReferenceDocPage}API_DeleteProject.html

#### Defined in

actions/datazone.ts:238

___

### DeleteProjectMembership

• **DeleteProjectMembership** = ``"datazone:DeleteProjectMembership"``

Grants permission to remove a user from a project

See ${APIReferenceDocPage}API_DeleteProjectMembership.html

#### Defined in

actions/datazone.ts:244

___

### DeleteSubscriptionGrant

• **DeleteSubscriptionGrant** = ``"datazone:DeleteSubscriptionGrant"``

Grants permission to delete a subscription grant from a subscription target

See ${APIReferenceDocPage}API_DeleteSubscriptionGrant.html

#### Defined in

actions/datazone.ts:250

___

### DeleteSubscriptionRequest

• **DeleteSubscriptionRequest** = ``"datazone:DeleteSubscriptionRequest"``

Grants permission to delete a pending subscription request for a Data Asset

See ${APIReferenceDocPage}API_DeleteSubscriptionRequest.html

#### Defined in

actions/datazone.ts:256

___

### DeleteSubscriptionTarget

• **DeleteSubscriptionTarget** = ``"datazone:DeleteSubscriptionTarget"``

Grants permission to delete a subscription target from a Environment in the pro
ject

See ${APIReferenceDocPage}API_DeleteSubscriptionTarget.html

#### Defined in

actions/datazone.ts:263

___

### GetAsset

• **GetAsset** = ``"datazone:GetAsset"``

Grants permission to retrieve an asset

See ${APIReferenceDocPage}API_GetAsset.html

#### Defined in

actions/datazone.ts:269

___

### GetAssetType

• **GetAssetType** = ``"datazone:GetAssetType"``

Grants permission to get an asset type

See ${APIReferenceDocPage}API_GetAssetType.html

#### Defined in

actions/datazone.ts:275

___

### GetDataSource

• **GetDataSource** = ``"datazone:GetDataSource"``

Grants permission to Get a existing DataSource in Amazon DataZone using its ide
ntifier

See ${APIReferenceDocPage}API_GetDataSource.html

#### Defined in

actions/datazone.ts:282

___

### GetDataSourceRun

• **GetDataSourceRun** = ``"datazone:GetDataSourceRun"``

Grants permission to get DataSource run job in Amazon DataZone using it's ident
ifier

See ${APIReferenceDocPage}API_GetDataSourceRun.html

#### Defined in

actions/datazone.ts:289

___

### GetDomain

• **GetDomain** = ``"datazone:GetDomain"``

Grants permission to retrieve information about a domain

See ${APIReferenceDocPage}API_GetDomain.html

#### Defined in

actions/datazone.ts:295

___

### GetDomainSharingPolicy

• **GetDomainSharingPolicy** = ``"datazone:GetDomainSharingPolicy"``

Grants permission to retrieve a resource policy for a DataZone Domain

See ${APIReferenceDocPage}API_GetDomainSharingPolicy.html

#### Defined in

actions/datazone.ts:301

___

### GetEnvironment

• **GetEnvironment** = ``"datazone:GetEnvironment"``

Grants permission to get Environment details

See ${APIReferenceDocPage}API_GetEnvironment.html

#### Defined in

actions/datazone.ts:307

___

### GetEnvironmentActionLink

• **GetEnvironmentActionLink** = ``"datazone:GetEnvironmentActionLink"``

Grants permission to get environment action link

See ${APIReferenceDocPage}API_GetEnvironmentActionLink.html

#### Defined in

actions/datazone.ts:313

___

### GetEnvironmentBlueprint

• **GetEnvironmentBlueprint** = ``"datazone:GetEnvironmentBlueprint"``

Grants permission to get Environment Blueprint details

See ${APIReferenceDocPage}API_GetEnvironmentBlueprint.html

#### Defined in

actions/datazone.ts:319

___

### GetEnvironmentBlueprintConfiguration

• **GetEnvironmentBlueprintConfiguration** = ``"datazone:GetEnvironmentBlueprintConfiguration"``

Grants permission to get environment blueprint configuration

See ${APIReferenceDocPage}API_GetEnvironmentBlueprintConfiguration.html

#### Defined in

actions/datazone.ts:325

___

### GetEnvironmentCredentials

• **GetEnvironmentCredentials** = ``"datazone:GetEnvironmentCredentials"``

Grants permission to get short term credentials that assume the Environment use
r role

See ${APIReferenceDocPage}API_GetEnvironmentCredentials.html

#### Defined in

actions/datazone.ts:332

___

### GetEnvironmentProfile

• **GetEnvironmentProfile** = ``"datazone:GetEnvironmentProfile"``

Grants permission to get Environment Profile details

See ${APIReferenceDocPage}API_GetEnvironmentProfile.html

#### Defined in

actions/datazone.ts:338

___

### GetFormType

• **GetFormType** = ``"datazone:GetFormType"``

Grants permission to get a form type

See ${APIReferenceDocPage}API_GetFormType.html

#### Defined in

actions/datazone.ts:344

___

### GetGlossary

• **GetGlossary** = ``"datazone:GetGlossary"``

Grants permission to get a business glossary

See ${APIReferenceDocPage}API_GetGlossary.html

#### Defined in

actions/datazone.ts:350

___

### GetGlossaryTerm

• **GetGlossaryTerm** = ``"datazone:GetGlossaryTerm"``

Grants permission to get a glossary term

See ${APIReferenceDocPage}API_GetGlossaryTerm.html

#### Defined in

actions/datazone.ts:356

___

### GetGroupProfile

• **GetGroupProfile** = ``"datazone:GetGroupProfile"``

Grants permission to retrieve an existing DataZone group profile

See ${APIReferenceDocPage}API_GetGroupProfile.html

#### Defined in

actions/datazone.ts:362

___

### GetIamPortalLoginUrl

• **GetIamPortalLoginUrl** = ``"datazone:GetIamPortalLoginUrl"``

Grants permission to an IAM principal to log into the DataZone Portal

See ${APIReferenceDocPage}API_GetIamPortalLoginUrl.html

#### Defined in

actions/datazone.ts:368

___

### GetListing

• **GetListing** = ``"datazone:GetListing"``

Grants permission to get listing

See ${APIReferenceDocPage}API_GetListing.html

#### Defined in

actions/datazone.ts:374

___

### GetMetadataGenerationRun

• **GetMetadataGenerationRun** = ``"datazone:GetMetadataGenerationRun"``

Grants permission to get metadata generation run

See ${APIReferenceDocPage}API_GetMetadataGenerationRun.html

#### Defined in

actions/datazone.ts:380

___

### GetProject

• **GetProject** = ``"datazone:GetProject"``

Grants permission to get Project details

See ${APIReferenceDocPage}API_GetProject.html

#### Defined in

actions/datazone.ts:386

___

### GetSubscription

• **GetSubscription** = ``"datazone:GetSubscription"``

Grants permission to retrieve a subscription

See ${APIReferenceDocPage}API_GetSubscription.html

#### Defined in

actions/datazone.ts:392

___

### GetSubscriptionEligibility

• **GetSubscriptionEligibility** = ``"datazone:GetSubscriptionEligibility"``

Grants permission to get subscription eligibilty

See ${APIReferenceDocPage}API_GetSubscriptionEligibility.html

#### Defined in

actions/datazone.ts:398

___

### GetSubscriptionGrant

• **GetSubscriptionGrant** = ``"datazone:GetSubscriptionGrant"``

Grants permission to retireve a subscription grant

See ${APIReferenceDocPage}API_GetSubscriptionGrant.html

#### Defined in

actions/datazone.ts:404

___

### GetSubscriptionRequestDetails

• **GetSubscriptionRequestDetails** = ``"datazone:GetSubscriptionRequestDetails"``

Grants permission to reject a subscription request for a Data Asset

See ${APIReferenceDocPage}API_GetSubscriptionRequestDetails.html

#### Defined in

actions/datazone.ts:410

___

### GetSubscriptionTarget

• **GetSubscriptionTarget** = ``"datazone:GetSubscriptionTarget"``

Grants permission to retireve details of subscription target

See ${APIReferenceDocPage}API_GetSubscriptionTarget.html

#### Defined in

actions/datazone.ts:416

___

### GetUserProfile

• **GetUserProfile** = ``"datazone:GetUserProfile"``

Grants permission to retrieve a user profile for an existing user in the DataZo
ne Domain

See ${APIReferenceDocPage}API_GetUserProfile.html

#### Defined in

actions/datazone.ts:423

___

### ListAccountEnvironments

• **ListAccountEnvironments** = ``"datazone:ListAccountEnvironments"``

Grants permission to list Environments across all domains in an AWS Account

See ${APIReferenceDocPage}API_ListAccountEnvironments.html

#### Defined in

actions/datazone.ts:429

___

### ListAssetRevisions

• **ListAssetRevisions** = ``"datazone:ListAssetRevisions"``

Grants permission to list revisions of an asset

See ${APIReferenceDocPage}API_ListAssetRevisions.html

#### Defined in

actions/datazone.ts:435

___

### ListDataSourceRunActivities

• **ListDataSourceRunActivities** = ``"datazone:ListDataSourceRunActivities"``

Grants permission to list DataSource runs job's activities on Asset

See ${APIReferenceDocPage}API_ListDataSourceRunActivities.html

#### Defined in

actions/datazone.ts:441

___

### ListDataSourceRuns

• **ListDataSourceRuns** = ``"datazone:ListDataSourceRuns"``

Grants permission to list DataSource runs job

See ${APIReferenceDocPage}API_ListDataSourceRuns.html

#### Defined in

actions/datazone.ts:447

___

### ListDataSources

• **ListDataSources** = ``"datazone:ListDataSources"``

Grants permission to list existing DataSources

See ${APIReferenceDocPage}API_ListDataSources.html

#### Defined in

actions/datazone.ts:453

___

### ListDomains

• **ListDomains** = ``"datazone:ListDomains"``

Grants permission to retrieve all domains

See ${APIReferenceDocPage}API_ListDomains.html

#### Defined in

actions/datazone.ts:459

___

### ListEnvironmentBlueprintConfigurationSummaries

• **ListEnvironmentBlueprintConfigurationSummaries** = ``"datazone:ListEnvironmentBlueprintConfigurationSummaries"``

Grants permission to list environment blueprint configuration summaries

See ${APIReferenceDocPage}API_ListEnvironmentBlueprintConfigurationSummaries.html

#### Defined in

actions/datazone.ts:465

___

### ListEnvironmentBlueprintConfigurations

• **ListEnvironmentBlueprintConfigurations** = ``"datazone:ListEnvironmentBlueprintConfigurations"``

Grants permission to list environment blueprint configurations

See ${APIReferenceDocPage}API_ListEnvironmentBlueprintConfigurations.html

#### Defined in

actions/datazone.ts:471

___

### ListEnvironmentBlueprints

• **ListEnvironmentBlueprints** = ``"datazone:ListEnvironmentBlueprints"``

Grants permission to list Domain for Environment Blueprints

See ${APIReferenceDocPage}API_ListEnvironmentBlueprints.html

#### Defined in

actions/datazone.ts:477

___

### ListEnvironmentProfiles

• **ListEnvironmentProfiles** = ``"datazone:ListEnvironmentProfiles"``

Grants permission to list Domain for Environment Profiles

See ${APIReferenceDocPage}API_ListEnvironmentProfiles.html

#### Defined in

actions/datazone.ts:483

___

### ListEnvironments

• **ListEnvironments** = ``"datazone:ListEnvironments"``

Grants permission to show Environments in the Domain

See ${APIReferenceDocPage}API_ListEnvironments.html

#### Defined in

actions/datazone.ts:489

___

### ListGroupsForUser

• **ListGroupsForUser** = ``"datazone:ListGroupsForUser"``

Grants permission to list all the DataZone group profiles that the DataZone use
r profile is a member of

See ${APIReferenceDocPage}API_ListGroupsForUser.html

#### Defined in

actions/datazone.ts:496

___

### ListMetadataGenerationRuns

• **ListMetadataGenerationRuns** = ``"datazone:ListMetadataGenerationRuns"``

Grants permission to list metadata generation runs

See ${APIReferenceDocPage}API_ListMetadataGenerationRuns.html

#### Defined in

actions/datazone.ts:502

___

### ListNotifications

• **ListNotifications** = ``"datazone:ListNotifications"``

Grants permission to list notifications and events for a datazone user

See ${APIReferenceDocPage}API_ListNotifications.html

#### Defined in

actions/datazone.ts:508

___

### ListProjectMemberships

• **ListProjectMemberships** = ``"datazone:ListProjectMemberships"``

Grants permission to list Project Members

See ${APIReferenceDocPage}API_ListProjectMemberships.html

#### Defined in

actions/datazone.ts:514

___

### ListProjects

• **ListProjects** = ``"datazone:ListProjects"``

Grants permission to list Projects

See ${APIReferenceDocPage}API_ListProjects.html

#### Defined in

actions/datazone.ts:520

___

### ListSubscriptionGrants

• **ListSubscriptionGrants** = ``"datazone:ListSubscriptionGrants"``

Grants permission to List subscription grants for a subscribed principal

See ${APIReferenceDocPage}API_ListSubscriptionGrants.html

#### Defined in

actions/datazone.ts:526

___

### ListSubscriptionRequests

• **ListSubscriptionRequests** = ``"datazone:ListSubscriptionRequests"``

Grants permission to list subscription requests

See ${APIReferenceDocPage}API_ListSubscriptionRequests.html

#### Defined in

actions/datazone.ts:532

___

### ListSubscriptionTargets

• **ListSubscriptionTargets** = ``"datazone:ListSubscriptionTargets"``

Grants permission to list subscription targets

See ${APIReferenceDocPage}API_ListSubscriptionTargets.html

#### Defined in

actions/datazone.ts:538

___

### ListSubscriptions

• **ListSubscriptions** = ``"datazone:ListSubscriptions"``

Grants permission to list subscriptions

See ${APIReferenceDocPage}API_ListSubscriptions.html

#### Defined in

actions/datazone.ts:544

___

### ListTagsForResource

• **ListTagsForResource** = ``"datazone:ListTagsForResource"``

Grants permission to retrieve all tags associated with a resource

See ${APIReferenceDocPage}API_ListTagsForResource.html

#### Defined in

actions/datazone.ts:550

___

### ListWarehouseMetadata

• **ListWarehouseMetadata** = ``"datazone:ListWarehouseMetadata"``

Grants permission to list available Manager Secrets

See ${APIReferenceDocPage}API_ListWarehouseMetadata.html

#### Defined in

actions/datazone.ts:556

___

### ProvisionDomain

• **ProvisionDomain** = ``"datazone:ProvisionDomain"``

Grants permission to provision domain with default project setup

See ${APIReferenceDocPage}API_ProvisionDomain.html

#### Defined in

actions/datazone.ts:562

___

### PutDomainSharingPolicy

• **PutDomainSharingPolicy** = ``"datazone:PutDomainSharingPolicy"``

Grants permission to add a resource policy for a DataZone Domain

See ${APIReferenceDocPage}API_PutDomainSharingPolicy.html

#### Defined in

actions/datazone.ts:568

___

### PutEnvironmentBlueprintConfiguration

• **PutEnvironmentBlueprintConfiguration** = ``"datazone:PutEnvironmentBlueprintConfiguration"``

Grants permission to put environment blueprint configuration

See ${APIReferenceDocPage}API_PutEnvironmentBlueprintConfiguration.html

#### Defined in

actions/datazone.ts:574

___

### RefreshToken

• **RefreshToken** = ``"datazone:RefreshToken"``

Grants permission to refresh token

See ${APIReferenceDocPage}API_RefreshToken.html

#### Defined in

actions/datazone.ts:580

___

### RejectPredictions

• **RejectPredictions** = ``"datazone:RejectPredictions"``

Grants permission to reject prediction

See ${APIReferenceDocPage}API_RejectPredictions.html

#### Defined in

actions/datazone.ts:586

___

### RejectSubscriptionRequest

• **RejectSubscriptionRequest** = ``"datazone:RejectSubscriptionRequest"``

Grants permission to reject a subscription request for a Data Asset

See ${APIReferenceDocPage}API_RejectSubscriptionRequest.html

#### Defined in

actions/datazone.ts:592

___

### RevokeSubscription

• **RevokeSubscription** = ``"datazone:RevokeSubscription"``

Grants permission to revoke a subscription

See ${APIReferenceDocPage}API_RevokeSubscription.html

#### Defined in

actions/datazone.ts:598

___

### Search

• **Search** = ``"datazone:Search"``

Grants permission to search datazone entities

See ${APIReferenceDocPage}API_Search.html

#### Defined in

actions/datazone.ts:604

___

### SearchGroupProfiles

• **SearchGroupProfiles** = ``"datazone:SearchGroupProfiles"``

Grants permission to search DataZone group profiles and IAM Identity Center gro
ups

See ${APIReferenceDocPage}API_SearchGroupProfiles.html

#### Defined in

actions/datazone.ts:611

___

### SearchListings

• **SearchListings** = ``"datazone:SearchListings"``

Grants permission to search listings

See ${APIReferenceDocPage}API_SearchListings.html

#### Defined in

actions/datazone.ts:617

___

### SearchTypes

• **SearchTypes** = ``"datazone:SearchTypes"``

Grants permission to search types such asset types and form types in a domain

See ${APIReferenceDocPage}API_SearchTypes.html

#### Defined in

actions/datazone.ts:623

___

### SearchUserProfiles

• **SearchUserProfiles** = ``"datazone:SearchUserProfiles"``

Grants permission to search DataZone user profiles, IAM Identity Center users,
and DataZone IAM principal profiles

See ${APIReferenceDocPage}API_SearchUserProfiles.html

#### Defined in

actions/datazone.ts:630

___

### SsoLogin

• **SsoLogin** = ``"datazone:SsoLogin"``

Grants permission to login using SSO

See ${APIReferenceDocPage}API_SsoLogin.html

#### Defined in

actions/datazone.ts:636

___

### SsoLogout

• **SsoLogout** = ``"datazone:SsoLogout"``

Grants permission to logout as SSO user

See ${APIReferenceDocPage}API_SsoLogout.html

#### Defined in

actions/datazone.ts:642

___

### StartDataSourceRun

• **StartDataSourceRun** = ``"datazone:StartDataSourceRun"``

Grants permission to start a DataSource run job

See ${APIReferenceDocPage}API_StartDataSourceRun.html

#### Defined in

actions/datazone.ts:648

___

### StartMetadataGenerationRun

• **StartMetadataGenerationRun** = ``"datazone:StartMetadataGenerationRun"``

Grants permission to start metadata generation run

See ${APIReferenceDocPage}API_StartMetadataGenerationRun.html

#### Defined in

actions/datazone.ts:654

___

### StopMetadataGenerationRun

• **StopMetadataGenerationRun** = ``"datazone:StopMetadataGenerationRun"``

Grants permission to stop metadata generation run

See ${APIReferenceDocPage}API_StopMetadataGenerationRun.html

#### Defined in

actions/datazone.ts:660

___

### TagResource

• **TagResource** = ``"datazone:TagResource"``

Grants permission to add or update tags to a resource

See ${APIReferenceDocPage}API_TagResource.html

#### Defined in

actions/datazone.ts:666

___

### UntagResource

• **UntagResource** = ``"datazone:UntagResource"``

Grants permission to remove tags associated with a resource

See ${APIReferenceDocPage}API_UntagResource.html

#### Defined in

actions/datazone.ts:672

___

### UpdateDataSource

• **UpdateDataSource** = ``"datazone:UpdateDataSource"``

Grants permission to update existing DataSource

See ${APIReferenceDocPage}API_UpdateDataSource.html

#### Defined in

actions/datazone.ts:678

___

### UpdateDomain

• **UpdateDomain** = ``"datazone:UpdateDomain"``

Grants permission to update information for a domain

See ${APIReferenceDocPage}API_UpdateDomain.html

#### Defined in

actions/datazone.ts:684

___

### UpdateEnvironment

• **UpdateEnvironment** = ``"datazone:UpdateEnvironment"``

Grants permission to update Environment settings

See ${APIReferenceDocPage}API_UpdateEnvironment.html

#### Defined in

actions/datazone.ts:690

___

### UpdateEnvironmentBlueprint

• **UpdateEnvironmentBlueprint** = ``"datazone:UpdateEnvironmentBlueprint"``

Grants permission to update Environment Blueprint settings

See ${APIReferenceDocPage}API_UpdateEnvironmentBlueprint.html

#### Defined in

actions/datazone.ts:696

___

### UpdateEnvironmentConfiguration

• **UpdateEnvironmentConfiguration** = ``"datazone:UpdateEnvironmentConfiguration"``

Grants permission to update environment configuration

See ${APIReferenceDocPage}API_UpdateEnvironmentConfiguration.html

#### Defined in

actions/datazone.ts:702

___

### UpdateEnvironmentDeploymentStatus

• **UpdateEnvironmentDeploymentStatus** = ``"datazone:UpdateEnvironmentDeploymentStatus"``

Grants permission to update status of the Environment deployment

See ${APIReferenceDocPage}API_UpdateEnvironmentDeploymentStatus.html

#### Defined in

actions/datazone.ts:708

___

### UpdateEnvironmentProfile

• **UpdateEnvironmentProfile** = ``"datazone:UpdateEnvironmentProfile"``

Grants permission to update EnvironmentProfile configuration

See ${APIReferenceDocPage}API_UpdateEnvironmentProfile.html

#### Defined in

actions/datazone.ts:714

___

### UpdateGlossary

• **UpdateGlossary** = ``"datazone:UpdateGlossary"``

Grants permission to update a business glossary

See ${APIReferenceDocPage}API_UpdateGlossary.html

#### Defined in

actions/datazone.ts:720

___

### UpdateGlossaryTerm

• **UpdateGlossaryTerm** = ``"datazone:UpdateGlossaryTerm"``

Grants permission to update a glossary term

See ${APIReferenceDocPage}API_UpdateGlossaryTerm.html

#### Defined in

actions/datazone.ts:726

___

### UpdateGroupProfile

• **UpdateGroupProfile** = ``"datazone:UpdateGroupProfile"``

Grants permission to update a DataZone group profile

See ${APIReferenceDocPage}API_UpdateGroupProfile.html

#### Defined in

actions/datazone.ts:732

___

### UpdateProject

• **UpdateProject** = ``"datazone:UpdateProject"``

Grants permission to update a Project that enables your team to publish and sub
scribe to data

See ${APIReferenceDocPage}API_UpdateProject.html

#### Defined in

actions/datazone.ts:739

___

### UpdateSubscriptionGrantStatus

• **UpdateSubscriptionGrantStatus** = ``"datazone:UpdateSubscriptionGrantStatus"``

Grants permission to update a subscription grant status for custom grants

See ${APIReferenceDocPage}API_UpdateSubscriptionGrantStatus.html

#### Defined in

actions/datazone.ts:745

___

### UpdateSubscriptionRequest

• **UpdateSubscriptionRequest** = ``"datazone:UpdateSubscriptionRequest"``

Grants permission to update business reason for subscription request for a Data
Asset

See ${APIReferenceDocPage}API_UpdateSubscriptionRequest.html

#### Defined in

actions/datazone.ts:752

___

### UpdateSubscriptionTarget

• **UpdateSubscriptionTarget** = ``"datazone:UpdateSubscriptionTarget"``

Grants permission to update a subscription target

See ${APIReferenceDocPage}API_UpdateSubscriptionTarget.html

#### Defined in

actions/datazone.ts:758

___

### UpdateUserProfile

• **UpdateUserProfile** = ``"datazone:UpdateUserProfile"``

Grants permission to update a DataZone user profile

See ${APIReferenceDocPage}API_UpdateUserProfile.html

#### Defined in

actions/datazone.ts:764

___

### ValidatePassRole

• **ValidatePassRole** = ``"datazone:ValidatePassRole"``

Grants permission to validate pass role

See ${APIReferenceDocPage}API_ValidatePassRole.html

#### Defined in

actions/datazone.ts:770
