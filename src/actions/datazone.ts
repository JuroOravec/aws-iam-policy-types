// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon DataZone (DATAZONE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatazone.html
 *
 * 2024-02-12T09:56:54.736Z
 */
export enum AwsDatazoneActions {
  /**
   * Grants permission to accept prediction
   *
   * See ${APIReferenceDocPage}API_AcceptPredictions.html
   */
  AcceptPredictions = 'datazone:AcceptPredictions',
  /**
   * Grants permission to approve a subscription request for a Data Asset
   *
   * See ${APIReferenceDocPage}API_AcceptSubscriptionRequest.html
   */
  AcceptSubscriptionRequest = 'datazone:AcceptSubscriptionRequest',
  /**
   * Grants permission to revoke or unsubscribe an approved subscription to Data Ass
   * et
   *
   * See ${APIReferenceDocPage}API_CancelSubscription.html
   */
  CancelSubscription = 'datazone:CancelSubscription',
  /**
   * Grants permission to create asset
   *
   * See ${APIReferenceDocPage}API_CreateAsset.html
   */
  CreateAsset = 'datazone:CreateAsset',
  /**
   * Grants permission to create new revision of an asset
   *
   * See ${APIReferenceDocPage}API_CreateAssetRevision.html
   */
  CreateAssetRevision = 'datazone:CreateAssetRevision',
  /**
   * Grants permission to create an asset type
   *
   * See ${APIReferenceDocPage}API_CreateAssetType.html
   */
  CreateAssetType = 'datazone:CreateAssetType',
  /**
   * Grants permission to create a new DataSource
   *
   * See ${APIReferenceDocPage}API_CreateDataSource.html
   */
  CreateDataSource = 'datazone:CreateDataSource',
  /**
   * Grants permission to provision a domain which is a top level entity that contai
   * ns other Amazon DataZone resources
   *
   * See ${APIReferenceDocPage}API_CreateDomain.html
   */
  CreateDomain = 'datazone:CreateDomain',
  /**
   * Grants permission to create a collection of configurated resources used to publ
   * ish and subscribe to data
   *
   * See ${APIReferenceDocPage}API_CreateEnvironment.html
   */
  CreateEnvironment = 'datazone:CreateEnvironment',
  /**
   * Grants permission to create a custom Environment Blueprint that allow user to a
   * dd Environments to their Project
   *
   * See ${APIReferenceDocPage}API_CreateEnvironmentBlueprint.html
   */
  CreateEnvironmentBlueprint = 'datazone:CreateEnvironmentBlueprint',
  /**
   * Grants permission to create a template from a Blueprint that can be used to cre
   * ate a Environment
   *
   * See ${APIReferenceDocPage}API_CreateEnvironmentProfile.html
   */
  CreateEnvironmentProfile = 'datazone:CreateEnvironmentProfile',
  /**
   * Grants permission to create a form type or a new revision of it
   *
   * See ${APIReferenceDocPage}API_CreateFormType.html
   */
  CreateFormType = 'datazone:CreateFormType',
  /**
   * Grants permission to create a business glossary
   *
   * See ${APIReferenceDocPage}API_CreateGlossary.html
   */
  CreateGlossary = 'datazone:CreateGlossary',
  /**
   * Grants permission to create a glossary term
   *
   * See ${APIReferenceDocPage}API_CreateGlossaryTerm.html
   */
  CreateGlossaryTerm = 'datazone:CreateGlossaryTerm',
  /**
   * Grants permission to create a DataZone group profile for an IAM Identity Center
   * group
   *
   * See ${APIReferenceDocPage}API_CreateGroupProfile.html
   */
  CreateGroupProfile = 'datazone:CreateGroupProfile',
  /**
   * Grants permission to create listing change set
   *
   * See ${APIReferenceDocPage}API_CreateListingChangeSet.html
   */
  CreateListingChangeSet = 'datazone:CreateListingChangeSet',
  /**
   * Grants permission to create a Project to enable your team to publish and subscr
   * ibe to data
   *
   * See ${APIReferenceDocPage}API_CreateProject.html
   */
  CreateProject = 'datazone:CreateProject',
  /**
   * Grants permission to add a user to a Project
   *
   * See ${APIReferenceDocPage}API_CreateProjectMembership.html
   */
  CreateProjectMembership = 'datazone:CreateProjectMembership',
  /**
   * Grants permission to create a grant for an approved subscription on a subscript
   * ion target
   *
   * See ${APIReferenceDocPage}API_CreateSubscriptionGrant.html
   */
  CreateSubscriptionGrant = 'datazone:CreateSubscriptionGrant',
  /**
   * Grants permission to create a subscription request for a Data Asset
   *
   * See ${APIReferenceDocPage}API_CreateSubscriptionRequest.html
   */
  CreateSubscriptionRequest = 'datazone:CreateSubscriptionRequest',
  /**
   * Grants permission to create a subscription target for a Environment in the proj
   * ect
   *
   * See ${APIReferenceDocPage}API_CreateSubscriptionTarget.html
   */
  CreateSubscriptionTarget = 'datazone:CreateSubscriptionTarget',
  /**
   * Grants permission to create a user profile for an existing user in the customer
   * s IAM Identity Center
   *
   * See ${APIReferenceDocPage}API_CreateUserProfile.html
   */
  CreateUserProfile = 'datazone:CreateUserProfile',
  /**
   * Grants permission to delete an asset
   *
   * See ${APIReferenceDocPage}API_DeleteAsset.html
   */
  DeleteAsset = 'datazone:DeleteAsset',
  /**
   * Grants permission to delete an asset type
   *
   * See ${APIReferenceDocPage}API_DeleteAssetType.html
   */
  DeleteAssetType = 'datazone:DeleteAssetType',
  /**
   * Grants permission to update existing DataSource
   *
   * See ${APIReferenceDocPage}API_DeleteDataSource.html
   */
  DeleteDataSource = 'datazone:DeleteDataSource',
  /**
   * Grants permission to delete a provisioned domain
   *
   * See ${APIReferenceDocPage}API_DeleteDomain.html
   */
  DeleteDomain = 'datazone:DeleteDomain',
  /**
   * Grants permission to delete a resource policy for a DataZone Domain
   *
   * See ${APIReferenceDocPage}API_DeleteDomainSharingPolicy.html
   */
  DeleteDomainSharingPolicy = 'datazone:DeleteDomainSharingPolicy',
  /**
   * Grants permission to Delete Environment
   *
   * See ${APIReferenceDocPage}API_DeleteEnvironment.html
   */
  DeleteEnvironment = 'datazone:DeleteEnvironment',
  /**
   * Grants permission to delete Environment Blueprint
   *
   * See ${APIReferenceDocPage}API_DeleteEnvironmentBlueprint.html
   */
  DeleteEnvironmentBlueprint = 'datazone:DeleteEnvironmentBlueprint',
  /**
   * Grants permission to delete environment blueprint configuration
   *
   * See ${APIReferenceDocPage}API_DeleteEnvironmentBlueprintConfiguration.html
   */
  DeleteEnvironmentBlueprintConfiguration = 'datazone:DeleteEnvironmentBlueprintConfiguration',
  /**
   * Grants permission to delete Environment Profile
   *
   * See ${APIReferenceDocPage}API_DeleteEnvironmentProfile.html
   */
  DeleteEnvironmentProfile = 'datazone:DeleteEnvironmentProfile',
  /**
   * Grants permission to delete a form type
   *
   * See ${APIReferenceDocPage}API_DeleteFormType.html
   */
  DeleteFormType = 'datazone:DeleteFormType',
  /**
   * Grants permission to delete a business glossary
   *
   * See ${APIReferenceDocPage}API_DeleteGlossary.html
   */
  DeleteGlossary = 'datazone:DeleteGlossary',
  /**
   * Grants permission to delete a glossary term
   *
   * See ${APIReferenceDocPage}API_DeleteGlossaryTerm.html
   */
  DeleteGlossaryTerm = 'datazone:DeleteGlossaryTerm',
  /**
   * Grants permission to delete listing
   *
   * See ${APIReferenceDocPage}API_DeleteListing.html
   */
  DeleteListing = 'datazone:DeleteListing',
  /**
   * Grants permission to delete a Project that enables your team to publish and sub
   * scribe to data
   *
   * See ${APIReferenceDocPage}API_DeleteProject.html
   */
  DeleteProject = 'datazone:DeleteProject',
  /**
   * Grants permission to remove a user from a project
   *
   * See ${APIReferenceDocPage}API_DeleteProjectMembership.html
   */
  DeleteProjectMembership = 'datazone:DeleteProjectMembership',
  /**
   * Grants permission to delete a subscription grant from a subscription target
   *
   * See ${APIReferenceDocPage}API_DeleteSubscriptionGrant.html
   */
  DeleteSubscriptionGrant = 'datazone:DeleteSubscriptionGrant',
  /**
   * Grants permission to delete a pending subscription request for a Data Asset
   *
   * See ${APIReferenceDocPage}API_DeleteSubscriptionRequest.html
   */
  DeleteSubscriptionRequest = 'datazone:DeleteSubscriptionRequest',
  /**
   * Grants permission to delete a subscription target from a Environment in the pro
   * ject
   *
   * See ${APIReferenceDocPage}API_DeleteSubscriptionTarget.html
   */
  DeleteSubscriptionTarget = 'datazone:DeleteSubscriptionTarget',
  /**
   * Grants permission to retrieve an asset
   *
   * See ${APIReferenceDocPage}API_GetAsset.html
   */
  GetAsset = 'datazone:GetAsset',
  /**
   * Grants permission to get an asset type
   *
   * See ${APIReferenceDocPage}API_GetAssetType.html
   */
  GetAssetType = 'datazone:GetAssetType',
  /**
   * Grants permission to Get a existing DataSource in Amazon DataZone using its ide
   * ntifier
   *
   * See ${APIReferenceDocPage}API_GetDataSource.html
   */
  GetDataSource = 'datazone:GetDataSource',
  /**
   * Grants permission to get DataSource run job in Amazon DataZone using it's ident
   * ifier
   *
   * See ${APIReferenceDocPage}API_GetDataSourceRun.html
   */
  GetDataSourceRun = 'datazone:GetDataSourceRun',
  /**
   * Grants permission to retrieve information about a domain
   *
   * See ${APIReferenceDocPage}API_GetDomain.html
   */
  GetDomain = 'datazone:GetDomain',
  /**
   * Grants permission to retrieve a resource policy for a DataZone Domain
   *
   * See ${APIReferenceDocPage}API_GetDomainSharingPolicy.html
   */
  GetDomainSharingPolicy = 'datazone:GetDomainSharingPolicy',
  /**
   * Grants permission to get Environment details
   *
   * See ${APIReferenceDocPage}API_GetEnvironment.html
   */
  GetEnvironment = 'datazone:GetEnvironment',
  /**
   * Grants permission to get environment action link
   *
   * See ${APIReferenceDocPage}API_GetEnvironmentActionLink.html
   */
  GetEnvironmentActionLink = 'datazone:GetEnvironmentActionLink',
  /**
   * Grants permission to get Environment Blueprint details
   *
   * See ${APIReferenceDocPage}API_GetEnvironmentBlueprint.html
   */
  GetEnvironmentBlueprint = 'datazone:GetEnvironmentBlueprint',
  /**
   * Grants permission to get environment blueprint configuration
   *
   * See ${APIReferenceDocPage}API_GetEnvironmentBlueprintConfiguration.html
   */
  GetEnvironmentBlueprintConfiguration = 'datazone:GetEnvironmentBlueprintConfiguration',
  /**
   * Grants permission to get short term credentials that assume the Environment use
   * r role
   *
   * See ${APIReferenceDocPage}API_GetEnvironmentCredentials.html
   */
  GetEnvironmentCredentials = 'datazone:GetEnvironmentCredentials',
  /**
   * Grants permission to get Environment Profile details
   *
   * See ${APIReferenceDocPage}API_GetEnvironmentProfile.html
   */
  GetEnvironmentProfile = 'datazone:GetEnvironmentProfile',
  /**
   * Grants permission to get a form type
   *
   * See ${APIReferenceDocPage}API_GetFormType.html
   */
  GetFormType = 'datazone:GetFormType',
  /**
   * Grants permission to get a business glossary
   *
   * See ${APIReferenceDocPage}API_GetGlossary.html
   */
  GetGlossary = 'datazone:GetGlossary',
  /**
   * Grants permission to get a glossary term
   *
   * See ${APIReferenceDocPage}API_GetGlossaryTerm.html
   */
  GetGlossaryTerm = 'datazone:GetGlossaryTerm',
  /**
   * Grants permission to retrieve an existing DataZone group profile
   *
   * See ${APIReferenceDocPage}API_GetGroupProfile.html
   */
  GetGroupProfile = 'datazone:GetGroupProfile',
  /**
   * Grants permission to an IAM principal to log into the DataZone Portal
   *
   * See ${APIReferenceDocPage}API_GetIamPortalLoginUrl.html
   */
  GetIamPortalLoginUrl = 'datazone:GetIamPortalLoginUrl',
  /**
   * Grants permission to get listing
   *
   * See ${APIReferenceDocPage}API_GetListing.html
   */
  GetListing = 'datazone:GetListing',
  /**
   * Grants permission to get metadata generation run
   *
   * See ${APIReferenceDocPage}API_GetMetadataGenerationRun.html
   */
  GetMetadataGenerationRun = 'datazone:GetMetadataGenerationRun',
  /**
   * Grants permission to get Project details
   *
   * See ${APIReferenceDocPage}API_GetProject.html
   */
  GetProject = 'datazone:GetProject',
  /**
   * Grants permission to retrieve a subscription
   *
   * See ${APIReferenceDocPage}API_GetSubscription.html
   */
  GetSubscription = 'datazone:GetSubscription',
  /**
   * Grants permission to get subscription eligibilty
   *
   * See ${APIReferenceDocPage}API_GetSubscriptionEligibility.html
   */
  GetSubscriptionEligibility = 'datazone:GetSubscriptionEligibility',
  /**
   * Grants permission to retireve a subscription grant
   *
   * See ${APIReferenceDocPage}API_GetSubscriptionGrant.html
   */
  GetSubscriptionGrant = 'datazone:GetSubscriptionGrant',
  /**
   * Grants permission to reject a subscription request for a Data Asset
   *
   * See ${APIReferenceDocPage}API_GetSubscriptionRequestDetails.html
   */
  GetSubscriptionRequestDetails = 'datazone:GetSubscriptionRequestDetails',
  /**
   * Grants permission to retireve details of subscription target
   *
   * See ${APIReferenceDocPage}API_GetSubscriptionTarget.html
   */
  GetSubscriptionTarget = 'datazone:GetSubscriptionTarget',
  /**
   * Grants permission to retrieve a user profile for an existing user in the DataZo
   * ne Domain
   *
   * See ${APIReferenceDocPage}API_GetUserProfile.html
   */
  GetUserProfile = 'datazone:GetUserProfile',
  /**
   * Grants permission to list Environments across all domains in an AWS Account
   *
   * See ${APIReferenceDocPage}API_ListAccountEnvironments.html
   */
  ListAccountEnvironments = 'datazone:ListAccountEnvironments',
  /**
   * Grants permission to list revisions of an asset
   *
   * See ${APIReferenceDocPage}API_ListAssetRevisions.html
   */
  ListAssetRevisions = 'datazone:ListAssetRevisions',
  /**
   * Grants permission to list DataSource runs job's activities on Asset
   *
   * See ${APIReferenceDocPage}API_ListDataSourceRunActivities.html
   */
  ListDataSourceRunActivities = 'datazone:ListDataSourceRunActivities',
  /**
   * Grants permission to list DataSource runs job
   *
   * See ${APIReferenceDocPage}API_ListDataSourceRuns.html
   */
  ListDataSourceRuns = 'datazone:ListDataSourceRuns',
  /**
   * Grants permission to list existing DataSources
   *
   * See ${APIReferenceDocPage}API_ListDataSources.html
   */
  ListDataSources = 'datazone:ListDataSources',
  /**
   * Grants permission to retrieve all domains
   *
   * See ${APIReferenceDocPage}API_ListDomains.html
   */
  ListDomains = 'datazone:ListDomains',
  /**
   * Grants permission to list environment blueprint configuration summaries
   *
   * See ${APIReferenceDocPage}API_ListEnvironmentBlueprintConfigurationSummaries.html
   */
  ListEnvironmentBlueprintConfigurationSummaries = 'datazone:ListEnvironmentBlueprintConfigurationSummaries',
  /**
   * Grants permission to list environment blueprint configurations
   *
   * See ${APIReferenceDocPage}API_ListEnvironmentBlueprintConfigurations.html
   */
  ListEnvironmentBlueprintConfigurations = 'datazone:ListEnvironmentBlueprintConfigurations',
  /**
   * Grants permission to list Domain for Environment Blueprints
   *
   * See ${APIReferenceDocPage}API_ListEnvironmentBlueprints.html
   */
  ListEnvironmentBlueprints = 'datazone:ListEnvironmentBlueprints',
  /**
   * Grants permission to list Domain for Environment Profiles
   *
   * See ${APIReferenceDocPage}API_ListEnvironmentProfiles.html
   */
  ListEnvironmentProfiles = 'datazone:ListEnvironmentProfiles',
  /**
   * Grants permission to show Environments in the Domain
   *
   * See ${APIReferenceDocPage}API_ListEnvironments.html
   */
  ListEnvironments = 'datazone:ListEnvironments',
  /**
   * Grants permission to list all the DataZone group profiles that the DataZone use
   * r profile is a member of
   *
   * See ${APIReferenceDocPage}API_ListGroupsForUser.html
   */
  ListGroupsForUser = 'datazone:ListGroupsForUser',
  /**
   * Grants permission to list metadata generation runs
   *
   * See ${APIReferenceDocPage}API_ListMetadataGenerationRuns.html
   */
  ListMetadataGenerationRuns = 'datazone:ListMetadataGenerationRuns',
  /**
   * Grants permission to list notifications and events for a datazone user
   *
   * See ${APIReferenceDocPage}API_ListNotifications.html
   */
  ListNotifications = 'datazone:ListNotifications',
  /**
   * Grants permission to list Project Members
   *
   * See ${APIReferenceDocPage}API_ListProjectMemberships.html
   */
  ListProjectMemberships = 'datazone:ListProjectMemberships',
  /**
   * Grants permission to list Projects
   *
   * See ${APIReferenceDocPage}API_ListProjects.html
   */
  ListProjects = 'datazone:ListProjects',
  /**
   * Grants permission to List subscription grants for a subscribed principal
   *
   * See ${APIReferenceDocPage}API_ListSubscriptionGrants.html
   */
  ListSubscriptionGrants = 'datazone:ListSubscriptionGrants',
  /**
   * Grants permission to list subscription requests
   *
   * See ${APIReferenceDocPage}API_ListSubscriptionRequests.html
   */
  ListSubscriptionRequests = 'datazone:ListSubscriptionRequests',
  /**
   * Grants permission to list subscription targets
   *
   * See ${APIReferenceDocPage}API_ListSubscriptionTargets.html
   */
  ListSubscriptionTargets = 'datazone:ListSubscriptionTargets',
  /**
   * Grants permission to list subscriptions
   *
   * See ${APIReferenceDocPage}API_ListSubscriptions.html
   */
  ListSubscriptions = 'datazone:ListSubscriptions',
  /**
   * Grants permission to retrieve all tags associated with a resource
   *
   * See ${APIReferenceDocPage}API_ListTagsForResource.html
   */
  ListTagsForResource = 'datazone:ListTagsForResource',
  /**
   * Grants permission to list available Manager Secrets
   *
   * See ${APIReferenceDocPage}API_ListWarehouseMetadata.html
   */
  ListWarehouseMetadata = 'datazone:ListWarehouseMetadata',
  /**
   * Grants permission to provision domain with default project setup
   *
   * See ${APIReferenceDocPage}API_ProvisionDomain.html
   */
  ProvisionDomain = 'datazone:ProvisionDomain',
  /**
   * Grants permission to add a resource policy for a DataZone Domain
   *
   * See ${APIReferenceDocPage}API_PutDomainSharingPolicy.html
   */
  PutDomainSharingPolicy = 'datazone:PutDomainSharingPolicy',
  /**
   * Grants permission to put environment blueprint configuration
   *
   * See ${APIReferenceDocPage}API_PutEnvironmentBlueprintConfiguration.html
   */
  PutEnvironmentBlueprintConfiguration = 'datazone:PutEnvironmentBlueprintConfiguration',
  /**
   * Grants permission to refresh token
   *
   * See ${APIReferenceDocPage}API_RefreshToken.html
   */
  RefreshToken = 'datazone:RefreshToken',
  /**
   * Grants permission to reject prediction
   *
   * See ${APIReferenceDocPage}API_RejectPredictions.html
   */
  RejectPredictions = 'datazone:RejectPredictions',
  /**
   * Grants permission to reject a subscription request for a Data Asset
   *
   * See ${APIReferenceDocPage}API_RejectSubscriptionRequest.html
   */
  RejectSubscriptionRequest = 'datazone:RejectSubscriptionRequest',
  /**
   * Grants permission to revoke a subscription
   *
   * See ${APIReferenceDocPage}API_RevokeSubscription.html
   */
  RevokeSubscription = 'datazone:RevokeSubscription',
  /**
   * Grants permission to search datazone entities
   *
   * See ${APIReferenceDocPage}API_Search.html
   */
  Search = 'datazone:Search',
  /**
   * Grants permission to search DataZone group profiles and IAM Identity Center gro
   * ups
   *
   * See ${APIReferenceDocPage}API_SearchGroupProfiles.html
   */
  SearchGroupProfiles = 'datazone:SearchGroupProfiles',
  /**
   * Grants permission to search listings
   *
   * See ${APIReferenceDocPage}API_SearchListings.html
   */
  SearchListings = 'datazone:SearchListings',
  /**
   * Grants permission to search types such asset types and form types in a domain
   *
   * See ${APIReferenceDocPage}API_SearchTypes.html
   */
  SearchTypes = 'datazone:SearchTypes',
  /**
   * Grants permission to search DataZone user profiles, IAM Identity Center users,
   * and DataZone IAM principal profiles
   *
   * See ${APIReferenceDocPage}API_SearchUserProfiles.html
   */
  SearchUserProfiles = 'datazone:SearchUserProfiles',
  /**
   * Grants permission to login using SSO
   *
   * See ${APIReferenceDocPage}API_SsoLogin.html
   */
  SsoLogin = 'datazone:SsoLogin',
  /**
   * Grants permission to logout as SSO user
   *
   * See ${APIReferenceDocPage}API_SsoLogout.html
   */
  SsoLogout = 'datazone:SsoLogout',
  /**
   * Grants permission to start a DataSource run job
   *
   * See ${APIReferenceDocPage}API_StartDataSourceRun.html
   */
  StartDataSourceRun = 'datazone:StartDataSourceRun',
  /**
   * Grants permission to start metadata generation run
   *
   * See ${APIReferenceDocPage}API_StartMetadataGenerationRun.html
   */
  StartMetadataGenerationRun = 'datazone:StartMetadataGenerationRun',
  /**
   * Grants permission to stop metadata generation run
   *
   * See ${APIReferenceDocPage}API_StopMetadataGenerationRun.html
   */
  StopMetadataGenerationRun = 'datazone:StopMetadataGenerationRun',
  /**
   * Grants permission to add or update tags to a resource
   *
   * See ${APIReferenceDocPage}API_TagResource.html
   */
  TagResource = 'datazone:TagResource',
  /**
   * Grants permission to remove tags associated with a resource
   *
   * See ${APIReferenceDocPage}API_UntagResource.html
   */
  UntagResource = 'datazone:UntagResource',
  /**
   * Grants permission to update existing DataSource
   *
   * See ${APIReferenceDocPage}API_UpdateDataSource.html
   */
  UpdateDataSource = 'datazone:UpdateDataSource',
  /**
   * Grants permission to update information for a domain
   *
   * See ${APIReferenceDocPage}API_UpdateDomain.html
   */
  UpdateDomain = 'datazone:UpdateDomain',
  /**
   * Grants permission to update Environment settings
   *
   * See ${APIReferenceDocPage}API_UpdateEnvironment.html
   */
  UpdateEnvironment = 'datazone:UpdateEnvironment',
  /**
   * Grants permission to update Environment Blueprint settings
   *
   * See ${APIReferenceDocPage}API_UpdateEnvironmentBlueprint.html
   */
  UpdateEnvironmentBlueprint = 'datazone:UpdateEnvironmentBlueprint',
  /**
   * Grants permission to update environment configuration
   *
   * See ${APIReferenceDocPage}API_UpdateEnvironmentConfiguration.html
   */
  UpdateEnvironmentConfiguration = 'datazone:UpdateEnvironmentConfiguration',
  /**
   * Grants permission to update status of the Environment deployment
   *
   * See ${APIReferenceDocPage}API_UpdateEnvironmentDeploymentStatus.html
   */
  UpdateEnvironmentDeploymentStatus = 'datazone:UpdateEnvironmentDeploymentStatus',
  /**
   * Grants permission to update EnvironmentProfile configuration
   *
   * See ${APIReferenceDocPage}API_UpdateEnvironmentProfile.html
   */
  UpdateEnvironmentProfile = 'datazone:UpdateEnvironmentProfile',
  /**
   * Grants permission to update a business glossary
   *
   * See ${APIReferenceDocPage}API_UpdateGlossary.html
   */
  UpdateGlossary = 'datazone:UpdateGlossary',
  /**
   * Grants permission to update a glossary term
   *
   * See ${APIReferenceDocPage}API_UpdateGlossaryTerm.html
   */
  UpdateGlossaryTerm = 'datazone:UpdateGlossaryTerm',
  /**
   * Grants permission to update a DataZone group profile
   *
   * See ${APIReferenceDocPage}API_UpdateGroupProfile.html
   */
  UpdateGroupProfile = 'datazone:UpdateGroupProfile',
  /**
   * Grants permission to update a Project that enables your team to publish and sub
   * scribe to data
   *
   * See ${APIReferenceDocPage}API_UpdateProject.html
   */
  UpdateProject = 'datazone:UpdateProject',
  /**
   * Grants permission to update a subscription grant status for custom grants
   *
   * See ${APIReferenceDocPage}API_UpdateSubscriptionGrantStatus.html
   */
  UpdateSubscriptionGrantStatus = 'datazone:UpdateSubscriptionGrantStatus',
  /**
   * Grants permission to update business reason for subscription request for a Data
   * Asset
   *
   * See ${APIReferenceDocPage}API_UpdateSubscriptionRequest.html
   */
  UpdateSubscriptionRequest = 'datazone:UpdateSubscriptionRequest',
  /**
   * Grants permission to update a subscription target
   *
   * See ${APIReferenceDocPage}API_UpdateSubscriptionTarget.html
   */
  UpdateSubscriptionTarget = 'datazone:UpdateSubscriptionTarget',
  /**
   * Grants permission to update a DataZone user profile
   *
   * See ${APIReferenceDocPage}API_UpdateUserProfile.html
   */
  UpdateUserProfile = 'datazone:UpdateUserProfile',
  /**
   * Grants permission to validate pass role
   *
   * See ${APIReferenceDocPage}API_ValidatePassRole.html
   */
  ValidatePassRole = 'datazone:ValidatePassRole',
}