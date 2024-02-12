[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsProfileActions

# Enumeration: AwsProfileActions

All IAM policy actions for Amazon Connect Customer Profiles (PROFILE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcustomerprofiles.html

2024-02-12T09:56:46.215Z

## Table of contents

### Enumeration Members

- [AddProfileKey](AwsProfileActions.md#addprofilekey)
- [CreateCalculatedAttributeDefinition](AwsProfileActions.md#createcalculatedattributedefinition)
- [CreateDomain](AwsProfileActions.md#createdomain)
- [CreateEventStream](AwsProfileActions.md#createeventstream)
- [CreateIntegrationWorkflow](AwsProfileActions.md#createintegrationworkflow)
- [CreateProfile](AwsProfileActions.md#createprofile)
- [DeleteCalculatedAttributeDefinition](AwsProfileActions.md#deletecalculatedattributedefinition)
- [DeleteDomain](AwsProfileActions.md#deletedomain)
- [DeleteEventStream](AwsProfileActions.md#deleteeventstream)
- [DeleteIntegration](AwsProfileActions.md#deleteintegration)
- [DeleteProfile](AwsProfileActions.md#deleteprofile)
- [DeleteProfileKey](AwsProfileActions.md#deleteprofilekey)
- [DeleteProfileObject](AwsProfileActions.md#deleteprofileobject)
- [DeleteProfileObjectType](AwsProfileActions.md#deleteprofileobjecttype)
- [DeleteWorkflow](AwsProfileActions.md#deleteworkflow)
- [DetectProfileObjectType](AwsProfileActions.md#detectprofileobjecttype)
- [GetAutoMergingPreview](AwsProfileActions.md#getautomergingpreview)
- [GetCalculatedAttributeDefinition](AwsProfileActions.md#getcalculatedattributedefinition)
- [GetCalculatedAttributeForProfile](AwsProfileActions.md#getcalculatedattributeforprofile)
- [GetDomain](AwsProfileActions.md#getdomain)
- [GetEventStream](AwsProfileActions.md#geteventstream)
- [GetIdentityResolutionJob](AwsProfileActions.md#getidentityresolutionjob)
- [GetIntegration](AwsProfileActions.md#getintegration)
- [GetMatches](AwsProfileActions.md#getmatches)
- [GetProfileObjectType](AwsProfileActions.md#getprofileobjecttype)
- [GetProfileObjectTypeTemplate](AwsProfileActions.md#getprofileobjecttypetemplate)
- [GetSimilarProfiles](AwsProfileActions.md#getsimilarprofiles)
- [GetWorkflow](AwsProfileActions.md#getworkflow)
- [GetWorkflowSteps](AwsProfileActions.md#getworkflowsteps)
- [ListAccountIntegrations](AwsProfileActions.md#listaccountintegrations)
- [ListCalculatedAttributeDefinitions](AwsProfileActions.md#listcalculatedattributedefinitions)
- [ListCalculatedAttributesForProfile](AwsProfileActions.md#listcalculatedattributesforprofile)
- [ListDomains](AwsProfileActions.md#listdomains)
- [ListEventStreams](AwsProfileActions.md#listeventstreams)
- [ListIdentityResolutionJobs](AwsProfileActions.md#listidentityresolutionjobs)
- [ListIntegrations](AwsProfileActions.md#listintegrations)
- [ListProfileObjectTypeTemplates](AwsProfileActions.md#listprofileobjecttypetemplates)
- [ListProfileObjectTypes](AwsProfileActions.md#listprofileobjecttypes)
- [ListProfileObjects](AwsProfileActions.md#listprofileobjects)
- [ListRuleBasedMatches](AwsProfileActions.md#listrulebasedmatches)
- [ListTagsForResource](AwsProfileActions.md#listtagsforresource)
- [ListWorkflows](AwsProfileActions.md#listworkflows)
- [MergeProfiles](AwsProfileActions.md#mergeprofiles)
- [PutIntegration](AwsProfileActions.md#putintegration)
- [PutProfileObject](AwsProfileActions.md#putprofileobject)
- [PutProfileObjectType](AwsProfileActions.md#putprofileobjecttype)
- [SearchProfiles](AwsProfileActions.md#searchprofiles)
- [TagResource](AwsProfileActions.md#tagresource)
- [UntagResource](AwsProfileActions.md#untagresource)
- [UpdateCalculatedAttributeDefinition](AwsProfileActions.md#updatecalculatedattributedefinition)
- [UpdateDomain](AwsProfileActions.md#updatedomain)
- [UpdateProfile](AwsProfileActions.md#updateprofile)

## Enumeration Members

### AddProfileKey

• **AddProfileKey** = ``"profile:AddProfileKey"``

Grants permission to add a profile key

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_AddProfileKey.html

#### Defined in

actions/profile.ts:17

___

### CreateCalculatedAttributeDefinition

• **CreateCalculatedAttributeDefinition** = ``"profile:CreateCalculatedAttributeDefinition"``

Grants permission to create a calculated attribute definition in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateCalculatedAttributeDefinition.html

#### Defined in

actions/profile.ts:23

___

### CreateDomain

• **CreateDomain** = ``"profile:CreateDomain"``

Grants permission to create a Domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html

#### Defined in

actions/profile.ts:29

___

### CreateEventStream

• **CreateEventStream** = ``"profile:CreateEventStream"``

Grants permission to put an event stream in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateEventStream.html

#### Defined in

actions/profile.ts:35

___

### CreateIntegrationWorkflow

• **CreateIntegrationWorkflow** = ``"profile:CreateIntegrationWorkflow"``

Grants permission to create an integration workflow in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateIntegrationWorkflow.html

#### Defined in

actions/profile.ts:41

___

### CreateProfile

• **CreateProfile** = ``"profile:CreateProfile"``

Grants permission to create a profile in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateProfile.html

#### Defined in

actions/profile.ts:47

___

### DeleteCalculatedAttributeDefinition

• **DeleteCalculatedAttributeDefinition** = ``"profile:DeleteCalculatedAttributeDefinition"``

Grants permission to delete a calculated attribute definition in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteCalculatedAttributeDefinition.html

#### Defined in

actions/profile.ts:53

___

### DeleteDomain

• **DeleteDomain** = ``"profile:DeleteDomain"``

Grants permission to delete a Domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteDomain.html

#### Defined in

actions/profile.ts:59

___

### DeleteEventStream

• **DeleteEventStream** = ``"profile:DeleteEventStream"``

Grants permission to delete an event stream in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteEventStream.html

#### Defined in

actions/profile.ts:65

___

### DeleteIntegration

• **DeleteIntegration** = ``"profile:DeleteIntegration"``

Grants permission to delete a integration in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteIntegration.html

#### Defined in

actions/profile.ts:71

___

### DeleteProfile

• **DeleteProfile** = ``"profile:DeleteProfile"``

Grants permission to delete a profile

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfile.html

#### Defined in

actions/profile.ts:77

___

### DeleteProfileKey

• **DeleteProfileKey** = ``"profile:DeleteProfileKey"``

Grants permission to delete a profile key

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileKey.html

#### Defined in

actions/profile.ts:83

___

### DeleteProfileObject

• **DeleteProfileObject** = ``"profile:DeleteProfileObject"``

Grants permission to delete a profile object

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileObject.html

#### Defined in

actions/profile.ts:89

___

### DeleteProfileObjectType

• **DeleteProfileObjectType** = ``"profile:DeleteProfileObjectType"``

Grants permission to delete a specific profile object type in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileObjectType.html

#### Defined in

actions/profile.ts:95

___

### DeleteWorkflow

• **DeleteWorkflow** = ``"profile:DeleteWorkflow"``

Grants permission to delete a workflow in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteWorkflow.html

#### Defined in

actions/profile.ts:101

___

### DetectProfileObjectType

• **DetectProfileObjectType** = ``"profile:DetectProfileObjectType"``

Grants permission to auto detect object type

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DetectProfileObjectType.html

#### Defined in

actions/profile.ts:107

___

### GetAutoMergingPreview

• **GetAutoMergingPreview** = ``"profile:GetAutoMergingPreview"``

Grants permission to get a preview of auto merging in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetAutoMergingPreview.html

#### Defined in

actions/profile.ts:113

___

### GetCalculatedAttributeDefinition

• **GetCalculatedAttributeDefinition** = ``"profile:GetCalculatedAttributeDefinition"``

Grants permission to get a calculated attribute definition in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetCalculatedAttributeDefinition.html

#### Defined in

actions/profile.ts:119

___

### GetCalculatedAttributeForProfile

• **GetCalculatedAttributeForProfile** = ``"profile:GetCalculatedAttributeForProfile"``

Grants permission to retrieve a calculated attribute for a specific profile in
the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetCalculatedAttributeForProfile.html

#### Defined in

actions/profile.ts:126

___

### GetDomain

• **GetDomain** = ``"profile:GetDomain"``

Grants permission to get a specific domain in an account

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetDomain.html

#### Defined in

actions/profile.ts:132

___

### GetEventStream

• **GetEventStream** = ``"profile:GetEventStream"``

Grants permission to get a specific event stream in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetEventStream.html

#### Defined in

actions/profile.ts:138

___

### GetIdentityResolutionJob

• **GetIdentityResolutionJob** = ``"profile:GetIdentityResolutionJob"``

Grants permission to get an identity resolution job in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetIdentityResolutionJob.html

#### Defined in

actions/profile.ts:144

___

### GetIntegration

• **GetIntegration** = ``"profile:GetIntegration"``

Grants permission to get a specific integrations in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetIntegration.html

#### Defined in

actions/profile.ts:150

___

### GetMatches

• **GetMatches** = ``"profile:GetMatches"``

Grants permission to get profile matches in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html

#### Defined in

actions/profile.ts:156

___

### GetProfileObjectType

• **GetProfileObjectType** = ``"profile:GetProfileObjectType"``

Grants permission to get a specific profile object type in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileObjectType.html

#### Defined in

actions/profile.ts:162

___

### GetProfileObjectTypeTemplate

• **GetProfileObjectTypeTemplate** = ``"profile:GetProfileObjectTypeTemplate"``

Grants permission to get a specific object type template

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileObjectTypeTemplate.html

#### Defined in

actions/profile.ts:168

___

### GetSimilarProfiles

• **GetSimilarProfiles** = ``"profile:GetSimilarProfiles"``

Grants permission to get all the similar profiles in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetSimilarProfiles.html

#### Defined in

actions/profile.ts:174

___

### GetWorkflow

• **GetWorkflow** = ``"profile:GetWorkflow"``

Grants permission to get workflow details in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetWorkflow.html

#### Defined in

actions/profile.ts:180

___

### GetWorkflowSteps

• **GetWorkflowSteps** = ``"profile:GetWorkflowSteps"``

Grants permission to get workflow step details in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetWorkflowSteps.html

#### Defined in

actions/profile.ts:186

___

### ListAccountIntegrations

• **ListAccountIntegrations** = ``"profile:ListAccountIntegrations"``

Grants permission to list all the integrations in the account

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListAccountIntegrations.html

#### Defined in

actions/profile.ts:192

___

### ListCalculatedAttributeDefinitions

• **ListCalculatedAttributeDefinitions** = ``"profile:ListCalculatedAttributeDefinitions"``

Grants permission to list all the calculated attribute definitions in the domai
n

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListCalculatedAttributeDefinitions.html

#### Defined in

actions/profile.ts:199

___

### ListCalculatedAttributesForProfile

• **ListCalculatedAttributesForProfile** = ``"profile:ListCalculatedAttributesForProfile"``

Grants permission to list all calculated attributes for a specific profile in t
he domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListCalculatedAttributesForProfile.html

#### Defined in

actions/profile.ts:206

___

### ListDomains

• **ListDomains** = ``"profile:ListDomains"``

Grants permission to list all the domains in an account

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListDomains.html

#### Defined in

actions/profile.ts:212

___

### ListEventStreams

• **ListEventStreams** = ``"profile:ListEventStreams"``

Grants permission to list all the event streams in a specific domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListEventStreams.html

#### Defined in

actions/profile.ts:218

___

### ListIdentityResolutionJobs

• **ListIdentityResolutionJobs** = ``"profile:ListIdentityResolutionJobs"``

Grants permission to list identity resolution jobs in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListIdentityResolutionJobs.html

#### Defined in

actions/profile.ts:224

___

### ListIntegrations

• **ListIntegrations** = ``"profile:ListIntegrations"``

Grants permission to list all the integrations in a specific domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListIntegrations.html

#### Defined in

actions/profile.ts:230

___

### ListProfileObjectTypeTemplates

• **ListProfileObjectTypeTemplates** = ``"profile:ListProfileObjectTypeTemplates"``

Grants permission to list all the profile object type templates in the account

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjectTypeTemplates.html

#### Defined in

actions/profile.ts:236

___

### ListProfileObjectTypes

• **ListProfileObjectTypes** = ``"profile:ListProfileObjectTypes"``

Grants permission to list all the profile object types in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjectTypes.html

#### Defined in

actions/profile.ts:242

___

### ListProfileObjects

• **ListProfileObjects** = ``"profile:ListProfileObjects"``

Grants permission to list all the profile objects for a profile

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjects.html

#### Defined in

actions/profile.ts:248

___

### ListRuleBasedMatches

• **ListRuleBasedMatches** = ``"profile:ListRuleBasedMatches"``

Grants permission to list all the rule-based matching result in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListRuleBasedMatches.html

#### Defined in

actions/profile.ts:254

___

### ListTagsForResource

• **ListTagsForResource** = ``"profile:ListTagsForResource"``

Grants permission to list tags for a resource

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/profile.ts:260

___

### ListWorkflows

• **ListWorkflows** = ``"profile:ListWorkflows"``

Grants permission to list all the workflows in a specific domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListWorkflows.html

#### Defined in

actions/profile.ts:266

___

### MergeProfiles

• **MergeProfiles** = ``"profile:MergeProfiles"``

Grants permission to merge profiles in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_MergeProfiles.html

#### Defined in

actions/profile.ts:272

___

### PutIntegration

• **PutIntegration** = ``"profile:PutIntegration"``

Grants permission to put a integration in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutIntegration.html

#### Defined in

actions/profile.ts:278

___

### PutProfileObject

• **PutProfileObject** = ``"profile:PutProfileObject"``

Grants permission to put an object for a profile

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutProfileObject.html

#### Defined in

actions/profile.ts:284

___

### PutProfileObjectType

• **PutProfileObjectType** = ``"profile:PutProfileObjectType"``

Grants permission to put a specific profile object type in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutProfileObjectType.html

#### Defined in

actions/profile.ts:290

___

### SearchProfiles

• **SearchProfiles** = ``"profile:SearchProfiles"``

Grants permission to search for profiles in a domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html

#### Defined in

actions/profile.ts:296

___

### TagResource

• **TagResource** = ``"profile:TagResource"``

Grants permission to adds tags to a resource

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html

#### Defined in

actions/profile.ts:302

___

### UntagResource

• **UntagResource** = ``"profile:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html

#### Defined in

actions/profile.ts:308

___

### UpdateCalculatedAttributeDefinition

• **UpdateCalculatedAttributeDefinition** = ``"profile:UpdateCalculatedAttributeDefinition"``

Grants permission to update a calculated attribute definition in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateCalculatedAttributeDefinition.html

#### Defined in

actions/profile.ts:314

___

### UpdateDomain

• **UpdateDomain** = ``"profile:UpdateDomain"``

Grants permission to update a Domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html

#### Defined in

actions/profile.ts:320

___

### UpdateProfile

• **UpdateProfile** = ``"profile:UpdateProfile"``

Grants permission to update a profile in the domain

See https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateProfile.html

#### Defined in

actions/profile.ts:326
