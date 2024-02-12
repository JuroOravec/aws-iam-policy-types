[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsWellarchitectedActions

# Enumeration: AwsWellarchitectedActions

All IAM policy actions for AWS Well-Architected Tool (WELLARCHITECTED)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html

2024-02-12T09:59:39.295Z

## Table of contents

### Enumeration Members

- [AssociateLenses](AwsWellarchitectedActions.md#associatelenses)
- [AssociateProfiles](AwsWellarchitectedActions.md#associateprofiles)
- [CreateLensShare](AwsWellarchitectedActions.md#createlensshare)
- [CreateLensVersion](AwsWellarchitectedActions.md#createlensversion)
- [CreateMilestone](AwsWellarchitectedActions.md#createmilestone)
- [CreateProfile](AwsWellarchitectedActions.md#createprofile)
- [CreateProfileShare](AwsWellarchitectedActions.md#createprofileshare)
- [CreateReviewTemplate](AwsWellarchitectedActions.md#createreviewtemplate)
- [CreateTemplateShare](AwsWellarchitectedActions.md#createtemplateshare)
- [CreateWorkload](AwsWellarchitectedActions.md#createworkload)
- [CreateWorkloadShare](AwsWellarchitectedActions.md#createworkloadshare)
- [DeleteLens](AwsWellarchitectedActions.md#deletelens)
- [DeleteLensShare](AwsWellarchitectedActions.md#deletelensshare)
- [DeleteProfile](AwsWellarchitectedActions.md#deleteprofile)
- [DeleteProfileShare](AwsWellarchitectedActions.md#deleteprofileshare)
- [DeleteReviewTemplate](AwsWellarchitectedActions.md#deletereviewtemplate)
- [DeleteTemplateShare](AwsWellarchitectedActions.md#deletetemplateshare)
- [DeleteWorkload](AwsWellarchitectedActions.md#deleteworkload)
- [DeleteWorkloadShare](AwsWellarchitectedActions.md#deleteworkloadshare)
- [DisassociateLenses](AwsWellarchitectedActions.md#disassociatelenses)
- [DisassociateProfiles](AwsWellarchitectedActions.md#disassociateprofiles)
- [ExportLens](AwsWellarchitectedActions.md#exportlens)
- [GetAnswer](AwsWellarchitectedActions.md#getanswer)
- [GetConsolidatedReport](AwsWellarchitectedActions.md#getconsolidatedreport)
- [GetLens](AwsWellarchitectedActions.md#getlens)
- [GetLensReview](AwsWellarchitectedActions.md#getlensreview)
- [GetLensReviewReport](AwsWellarchitectedActions.md#getlensreviewreport)
- [GetLensVersionDifference](AwsWellarchitectedActions.md#getlensversiondifference)
- [GetMilestone](AwsWellarchitectedActions.md#getmilestone)
- [GetProfile](AwsWellarchitectedActions.md#getprofile)
- [GetProfileTemplate](AwsWellarchitectedActions.md#getprofiletemplate)
- [GetReviewTemplate](AwsWellarchitectedActions.md#getreviewtemplate)
- [GetReviewTemplateAnswer](AwsWellarchitectedActions.md#getreviewtemplateanswer)
- [GetReviewTemplateLensReview](AwsWellarchitectedActions.md#getreviewtemplatelensreview)
- [GetWorkload](AwsWellarchitectedActions.md#getworkload)
- [ImportLens](AwsWellarchitectedActions.md#importlens)
- [ListAnswers](AwsWellarchitectedActions.md#listanswers)
- [ListCheckDetails](AwsWellarchitectedActions.md#listcheckdetails)
- [ListCheckSummaries](AwsWellarchitectedActions.md#listchecksummaries)
- [ListLensReviewImprovements](AwsWellarchitectedActions.md#listlensreviewimprovements)
- [ListLensReviews](AwsWellarchitectedActions.md#listlensreviews)
- [ListLensShares](AwsWellarchitectedActions.md#listlensshares)
- [ListLenses](AwsWellarchitectedActions.md#listlenses)
- [ListMilestones](AwsWellarchitectedActions.md#listmilestones)
- [ListNotifications](AwsWellarchitectedActions.md#listnotifications)
- [ListProfileNotifications](AwsWellarchitectedActions.md#listprofilenotifications)
- [ListProfileShares](AwsWellarchitectedActions.md#listprofileshares)
- [ListProfiles](AwsWellarchitectedActions.md#listprofiles)
- [ListReviewTemplateAnswers](AwsWellarchitectedActions.md#listreviewtemplateanswers)
- [ListReviewTemplates](AwsWellarchitectedActions.md#listreviewtemplates)
- [ListShareInvitations](AwsWellarchitectedActions.md#listshareinvitations)
- [ListTagsForResource](AwsWellarchitectedActions.md#listtagsforresource)
- [ListTemplateShares](AwsWellarchitectedActions.md#listtemplateshares)
- [ListWorkloadShares](AwsWellarchitectedActions.md#listworkloadshares)
- [ListWorkloads](AwsWellarchitectedActions.md#listworkloads)
- [TagResource](AwsWellarchitectedActions.md#tagresource)
- [UntagResource](AwsWellarchitectedActions.md#untagresource)
- [UpdateAnswer](AwsWellarchitectedActions.md#updateanswer)
- [UpdateGlobalSettings](AwsWellarchitectedActions.md#updateglobalsettings)
- [UpdateLensReview](AwsWellarchitectedActions.md#updatelensreview)
- [UpdateProfile](AwsWellarchitectedActions.md#updateprofile)
- [UpdateReviewTemplate](AwsWellarchitectedActions.md#updatereviewtemplate)
- [UpdateReviewTemplateAnswer](AwsWellarchitectedActions.md#updatereviewtemplateanswer)
- [UpdateReviewTemplateLensReview](AwsWellarchitectedActions.md#updatereviewtemplatelensreview)
- [UpdateShareInvitation](AwsWellarchitectedActions.md#updateshareinvitation)
- [UpdateWorkload](AwsWellarchitectedActions.md#updateworkload)
- [UpdateWorkloadShare](AwsWellarchitectedActions.md#updateworkloadshare)
- [UpgradeLensReview](AwsWellarchitectedActions.md#upgradelensreview)
- [UpgradeProfileVersion](AwsWellarchitectedActions.md#upgradeprofileversion)
- [UpgradeReviewTemplateLensReview](AwsWellarchitectedActions.md#upgradereviewtemplatelensreview)

## Enumeration Members

### AssociateLenses

• **AssociateLenses** = ``"wellarchitected:AssociateLenses"``

Grants permission to associate a lens to the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_AssociateLenses.html

#### Defined in

actions/wellarchitected.ts:17

___

### AssociateProfiles

• **AssociateProfiles** = ``"wellarchitected:AssociateProfiles"``

Grants permission to associate a profile to the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_AssociateProfiles.html

#### Defined in

actions/wellarchitected.ts:23

___

### CreateLensShare

• **CreateLensShare** = ``"wellarchitected:CreateLensShare"``

Grants permission to an owner of a lens to share with other AWS accounts and IA
M users

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateLensShare.html

#### Defined in

actions/wellarchitected.ts:30

___

### CreateLensVersion

• **CreateLensVersion** = ``"wellarchitected:CreateLensVersion"``

Grants permission to create a new lens version

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateLensVersion.html

#### Defined in

actions/wellarchitected.ts:36

___

### CreateMilestone

• **CreateMilestone** = ``"wellarchitected:CreateMilestone"``

Grants permission to create a new milestone for the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateMilestone.html

#### Defined in

actions/wellarchitected.ts:42

___

### CreateProfile

• **CreateProfile** = ``"wellarchitected:CreateProfile"``

Grants permission to create a new profile

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateProfile.html

#### Defined in

actions/wellarchitected.ts:48

___

### CreateProfileShare

• **CreateProfileShare** = ``"wellarchitected:CreateProfileShare"``

Grants permission to an owner of a profile to share with other AWS accounts and
IAM users

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateProfileShare.html

#### Defined in

actions/wellarchitected.ts:55

___

### CreateReviewTemplate

• **CreateReviewTemplate** = ``"wellarchitected:CreateReviewTemplate"``

Grants permission to create a new review template

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateReviewTemplate.html

#### Defined in

actions/wellarchitected.ts:61

___

### CreateTemplateShare

• **CreateTemplateShare** = ``"wellarchitected:CreateTemplateShare"``

Grants permission to an owner of a review template to share with other AWS acco
unts and IAM users

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateTemplateShare.html

#### Defined in

actions/wellarchitected.ts:68

___

### CreateWorkload

• **CreateWorkload** = ``"wellarchitected:CreateWorkload"``

Grants permission to create a new workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateWorkload.html

#### Defined in

actions/wellarchitected.ts:74

___

### CreateWorkloadShare

• **CreateWorkloadShare** = ``"wellarchitected:CreateWorkloadShare"``

Grants permission to share a workload with another account

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateWorkloadShare.html

#### Defined in

actions/wellarchitected.ts:80

___

### DeleteLens

• **DeleteLens** = ``"wellarchitected:DeleteLens"``

Grants permission to delete a lens

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLens.html

#### Defined in

actions/wellarchitected.ts:86

___

### DeleteLensShare

• **DeleteLensShare** = ``"wellarchitected:DeleteLensShare"``

Grants permission to delete an existing lens share

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLensShare.html

#### Defined in

actions/wellarchitected.ts:92

___

### DeleteProfile

• **DeleteProfile** = ``"wellarchitected:DeleteProfile"``

Grants permission to delete a profile

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteProfile.html

#### Defined in

actions/wellarchitected.ts:98

___

### DeleteProfileShare

• **DeleteProfileShare** = ``"wellarchitected:DeleteProfileShare"``

Grants permission to delete an existing profile share

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteProfileShare.html

#### Defined in

actions/wellarchitected.ts:104

___

### DeleteReviewTemplate

• **DeleteReviewTemplate** = ``"wellarchitected:DeleteReviewTemplate"``

Grants permission to delete an existing review template

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteReviewTemplate.html

#### Defined in

actions/wellarchitected.ts:110

___

### DeleteTemplateShare

• **DeleteTemplateShare** = ``"wellarchitected:DeleteTemplateShare"``

Grants permission to delete an existing review template share

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteTemplateShare.html

#### Defined in

actions/wellarchitected.ts:116

___

### DeleteWorkload

• **DeleteWorkload** = ``"wellarchitected:DeleteWorkload"``

Grants permission to delete an existing workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteWorkload.html

#### Defined in

actions/wellarchitected.ts:122

___

### DeleteWorkloadShare

• **DeleteWorkloadShare** = ``"wellarchitected:DeleteWorkloadShare"``

Grants permission to delete an existing workload share

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteWorkloadShare.html

#### Defined in

actions/wellarchitected.ts:128

___

### DisassociateLenses

• **DisassociateLenses** = ``"wellarchitected:DisassociateLenses"``

Grants permission to disassociate a lens from the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DisassociateLenses.html

#### Defined in

actions/wellarchitected.ts:134

___

### DisassociateProfiles

• **DisassociateProfiles** = ``"wellarchitected:DisassociateProfiles"``

Grants permission to disassociate a profile from the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DisassociateProfiles.html

#### Defined in

actions/wellarchitected.ts:140

___

### ExportLens

• **ExportLens** = ``"wellarchitected:ExportLens"``

Grants permission to export an existing lens

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ExportLens.html

#### Defined in

actions/wellarchitected.ts:146

___

### GetAnswer

• **GetAnswer** = ``"wellarchitected:GetAnswer"``

Grants permission to retrieve the specified answer from the specified lens revi
ew

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetAnswer.html

#### Defined in

actions/wellarchitected.ts:153

___

### GetConsolidatedReport

• **GetConsolidatedReport** = ``"wellarchitected:GetConsolidatedReport"``

Grants permission to get consolidated report metrics or to generate the consoli
dated report PDF in this account

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetConsolidatedReport.html

#### Defined in

actions/wellarchitected.ts:160

___

### GetLens

• **GetLens** = ``"wellarchitected:GetLens"``

Grants permission to get an existing lens

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLensShare.html

#### Defined in

actions/wellarchitected.ts:166

___

### GetLensReview

• **GetLensReview** = ``"wellarchitected:GetLensReview"``

Grants permission to retrieve the specified lens review of the specified worklo
ad

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensReview.html

#### Defined in

actions/wellarchitected.ts:173

___

### GetLensReviewReport

• **GetLensReviewReport** = ``"wellarchitected:GetLensReviewReport"``

Grants permission to retrieve the report for the specified lens review

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensReviewReport.html

#### Defined in

actions/wellarchitected.ts:179

___

### GetLensVersionDifference

• **GetLensVersionDifference** = ``"wellarchitected:GetLensVersionDifference"``

Grants permission to get the difference between the specified lens version and
latest available lens version

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensVersionDifference.html

#### Defined in

actions/wellarchitected.ts:186

___

### GetMilestone

• **GetMilestone** = ``"wellarchitected:GetMilestone"``

Grants permission to retrieve the specified milestone of the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetMilestone.html

#### Defined in

actions/wellarchitected.ts:192

___

### GetProfile

• **GetProfile** = ``"wellarchitected:GetProfile"``

Grants permission to retrieve the specified profile

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetProfile.html

#### Defined in

actions/wellarchitected.ts:198

___

### GetProfileTemplate

• **GetProfileTemplate** = ``"wellarchitected:GetProfileTemplate"``

Grants permission to retrieve the specified profile template

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetProfileTemplate.html

#### Defined in

actions/wellarchitected.ts:204

___

### GetReviewTemplate

• **GetReviewTemplate** = ``"wellarchitected:GetReviewTemplate"``

Grants permission to retrieve the specified review template

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetReviewTemplate.html

#### Defined in

actions/wellarchitected.ts:210

___

### GetReviewTemplateAnswer

• **GetReviewTemplateAnswer** = ``"wellarchitected:GetReviewTemplateAnswer"``

Grants permission to retrieve the specified answer from the specified review te
mplate lens review

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetReviewTemplateAnswer.html

#### Defined in

actions/wellarchitected.ts:217

___

### GetReviewTemplateLensReview

• **GetReviewTemplateLensReview** = ``"wellarchitected:GetReviewTemplateLensReview"``

Grants permission to retrieve the specified lens review of the specified review
template

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetReviewTemplateLensReview.html

#### Defined in

actions/wellarchitected.ts:224

___

### GetWorkload

• **GetWorkload** = ``"wellarchitected:GetWorkload"``

Grants permission to retrieve the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetWorkload.html

#### Defined in

actions/wellarchitected.ts:230

___

### ImportLens

• **ImportLens** = ``"wellarchitected:ImportLens"``

Grants permission to import a new lens

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ImportLens.html

#### Defined in

actions/wellarchitected.ts:236

___

### ListAnswers

• **ListAnswers** = ``"wellarchitected:ListAnswers"``

Grants permission to list the answers from the specified lens review

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListAnswers.html

#### Defined in

actions/wellarchitected.ts:242

___

### ListCheckDetails

• **ListCheckDetails** = ``"wellarchitected:ListCheckDetails"``

Grants permission to list the check-details for the workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListCheckDetails.html

#### Defined in

actions/wellarchitected.ts:248

___

### ListCheckSummaries

• **ListCheckSummaries** = ``"wellarchitected:ListCheckSummaries"``

Grants permission to list the check-summaries for the workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListCheckSummaries.html

#### Defined in

actions/wellarchitected.ts:254

___

### ListLensReviewImprovements

• **ListLensReviewImprovements** = ``"wellarchitected:ListLensReviewImprovements"``

Grants permission to list the improvements of the specified lens review

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensReviewImprovements.html

#### Defined in

actions/wellarchitected.ts:260

___

### ListLensReviews

• **ListLensReviews** = ``"wellarchitected:ListLensReviews"``

Grants permission to list the lens reviews of the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensReviews.html

#### Defined in

actions/wellarchitected.ts:266

___

### ListLensShares

• **ListLensShares** = ``"wellarchitected:ListLensShares"``

Grants permission to list all shares created for a lens

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensShares.html

#### Defined in

actions/wellarchitected.ts:272

___

### ListLenses

• **ListLenses** = ``"wellarchitected:ListLenses"``

Grants permission to list the lenses available to this account

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLenses.html

#### Defined in

actions/wellarchitected.ts:278

___

### ListMilestones

• **ListMilestones** = ``"wellarchitected:ListMilestones"``

Grants permission to list the milestones of the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListMilestones.html

#### Defined in

actions/wellarchitected.ts:284

___

### ListNotifications

• **ListNotifications** = ``"wellarchitected:ListNotifications"``

Grants permission to list notifications related to the account or specified res
ource

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListNotifications.html

#### Defined in

actions/wellarchitected.ts:291

___

### ListProfileNotifications

• **ListProfileNotifications** = ``"wellarchitected:ListProfileNotifications"``

Grants permission to list profile notifications related to specified resource

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListProfileNotifications.html

#### Defined in

actions/wellarchitected.ts:297

___

### ListProfileShares

• **ListProfileShares** = ``"wellarchitected:ListProfileShares"``

Grants permission to list all shares created for a profile

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListProfileShares.html

#### Defined in

actions/wellarchitected.ts:303

___

### ListProfiles

• **ListProfiles** = ``"wellarchitected:ListProfiles"``

Grants permission to list the profiles available to this account

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListProfiles.html

#### Defined in

actions/wellarchitected.ts:309

___

### ListReviewTemplateAnswers

• **ListReviewTemplateAnswers** = ``"wellarchitected:ListReviewTemplateAnswers"``

Grants permission to list the answers from the specified review template lens r
eview

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListReviewTemplateAnswers.html

#### Defined in

actions/wellarchitected.ts:316

___

### ListReviewTemplates

• **ListReviewTemplates** = ``"wellarchitected:ListReviewTemplates"``

Grants permission to list the review templates available to this account

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListReviewTemplates.html

#### Defined in

actions/wellarchitected.ts:322

___

### ListShareInvitations

• **ListShareInvitations** = ``"wellarchitected:ListShareInvitations"``

Grants permission to list the workload share invitations of the specified accou
nt or user

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListShareInvitations.html

#### Defined in

actions/wellarchitected.ts:329

___

### ListTagsForResource

• **ListTagsForResource** = ``"wellarchitected:ListTagsForResource"``

Grants permission to list tags for a Well-Architected resource

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/wellarchitected.ts:335

___

### ListTemplateShares

• **ListTemplateShares** = ``"wellarchitected:ListTemplateShares"``

Grants permission to list all shares created for a review template

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListTemplateShares.html

#### Defined in

actions/wellarchitected.ts:341

___

### ListWorkloadShares

• **ListWorkloadShares** = ``"wellarchitected:ListWorkloadShares"``

Grants permission to list the workload shares of the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListWorkloadShares.html

#### Defined in

actions/wellarchitected.ts:347

___

### ListWorkloads

• **ListWorkloads** = ``"wellarchitected:ListWorkloads"``

Grants permission to list the workloads in this account

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListWorkloads.html

#### Defined in

actions/wellarchitected.ts:353

___

### TagResource

• **TagResource** = ``"wellarchitected:TagResource"``

Grants permission to tag a Well-Architected resource

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_TagResource.html

#### Defined in

actions/wellarchitected.ts:359

___

### UntagResource

• **UntagResource** = ``"wellarchitected:UntagResource"``

Grants permission to untag a Well-Architected resource

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UntagResource.html

#### Defined in

actions/wellarchitected.ts:365

___

### UpdateAnswer

• **UpdateAnswer** = ``"wellarchitected:UpdateAnswer"``

Grants permission to update properties of the specified answer

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateAnswer.html

#### Defined in

actions/wellarchitected.ts:371

___

### UpdateGlobalSettings

• **UpdateGlobalSettings** = ``"wellarchitected:UpdateGlobalSettings"``

Grants permission to update settings to enable aws-organization support

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateGlobalSettings.html

#### Defined in

actions/wellarchitected.ts:377

___

### UpdateLensReview

• **UpdateLensReview** = ``"wellarchitected:UpdateLensReview"``

Grants permission to update properties of the specified lens review

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateLensReview.html

#### Defined in

actions/wellarchitected.ts:383

___

### UpdateProfile

• **UpdateProfile** = ``"wellarchitected:UpdateProfile"``

Grants permission to update properties of the specified profile

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateProfile.html

#### Defined in

actions/wellarchitected.ts:389

___

### UpdateReviewTemplate

• **UpdateReviewTemplate** = ``"wellarchitected:UpdateReviewTemplate"``

Grants permission to update properties of the specified review template

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateReviewTemplate.html

#### Defined in

actions/wellarchitected.ts:395

___

### UpdateReviewTemplateAnswer

• **UpdateReviewTemplateAnswer** = ``"wellarchitected:UpdateReviewTemplateAnswer"``

Grants permission to update properties of the specified review template answer

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateReviewTemplateAnswer.html

#### Defined in

actions/wellarchitected.ts:401

___

### UpdateReviewTemplateLensReview

• **UpdateReviewTemplateLensReview** = ``"wellarchitected:UpdateReviewTemplateLensReview"``

Grants permission to update properties of the specified review template lens re
view

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateReviewTemplateLensReview.html

#### Defined in

actions/wellarchitected.ts:408

___

### UpdateShareInvitation

• **UpdateShareInvitation** = ``"wellarchitected:UpdateShareInvitation"``

Grants permission to update status of the specified workload share invitation

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateShareInvitation.html

#### Defined in

actions/wellarchitected.ts:414

___

### UpdateWorkload

• **UpdateWorkload** = ``"wellarchitected:UpdateWorkload"``

Grants permission to update properties of the specified workload

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateWorkload.html

#### Defined in

actions/wellarchitected.ts:420

___

### UpdateWorkloadShare

• **UpdateWorkloadShare** = ``"wellarchitected:UpdateWorkloadShare"``

Grants permission to update properties of the specified workload share

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateWorkloadShare.html

#### Defined in

actions/wellarchitected.ts:426

___

### UpgradeLensReview

• **UpgradeLensReview** = ``"wellarchitected:UpgradeLensReview"``

Grants permission to upgrade the specified lens review to use the latest versio
n of the associated lens

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeLensReview.html

#### Defined in

actions/wellarchitected.ts:433

___

### UpgradeProfileVersion

• **UpgradeProfileVersion** = ``"wellarchitected:UpgradeProfileVersion"``

Grants permission to upgrade the specified workload to use the latest version o
f the associated profile

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeProfileVersion.html

#### Defined in

actions/wellarchitected.ts:440

___

### UpgradeReviewTemplateLensReview

• **UpgradeReviewTemplateLensReview** = ``"wellarchitected:UpgradeReviewTemplateLensReview"``

Grants permission to upgrade the specified lens review of the specified review
template

See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeReviewTemplateLensReview.html

#### Defined in

actions/wellarchitected.ts:447
