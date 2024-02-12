// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Well-Architected Tool (WELLARCHITECTED)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html
 *
 * 2024-02-12T09:59:39.295Z
 */
export enum AwsWellarchitectedActions {
  /**
   * Grants permission to associate a lens to the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_AssociateLenses.html
   */
  AssociateLenses = 'wellarchitected:AssociateLenses',
  /**
   * Grants permission to associate a profile to the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_AssociateProfiles.html
   */
  AssociateProfiles = 'wellarchitected:AssociateProfiles',
  /**
   * Grants permission to an owner of a lens to share with other AWS accounts and IA
   * M users
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateLensShare.html
   */
  CreateLensShare = 'wellarchitected:CreateLensShare',
  /**
   * Grants permission to create a new lens version
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateLensVersion.html
   */
  CreateLensVersion = 'wellarchitected:CreateLensVersion',
  /**
   * Grants permission to create a new milestone for the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateMilestone.html
   */
  CreateMilestone = 'wellarchitected:CreateMilestone',
  /**
   * Grants permission to create a new profile
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateProfile.html
   */
  CreateProfile = 'wellarchitected:CreateProfile',
  /**
   * Grants permission to an owner of a profile to share with other AWS accounts and
   * IAM users
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateProfileShare.html
   */
  CreateProfileShare = 'wellarchitected:CreateProfileShare',
  /**
   * Grants permission to create a new review template
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateReviewTemplate.html
   */
  CreateReviewTemplate = 'wellarchitected:CreateReviewTemplate',
  /**
   * Grants permission to an owner of a review template to share with other AWS acco
   * unts and IAM users
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateTemplateShare.html
   */
  CreateTemplateShare = 'wellarchitected:CreateTemplateShare',
  /**
   * Grants permission to create a new workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateWorkload.html
   */
  CreateWorkload = 'wellarchitected:CreateWorkload',
  /**
   * Grants permission to share a workload with another account
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateWorkloadShare.html
   */
  CreateWorkloadShare = 'wellarchitected:CreateWorkloadShare',
  /**
   * Grants permission to delete a lens
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLens.html
   */
  DeleteLens = 'wellarchitected:DeleteLens',
  /**
   * Grants permission to delete an existing lens share
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLensShare.html
   */
  DeleteLensShare = 'wellarchitected:DeleteLensShare',
  /**
   * Grants permission to delete a profile
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteProfile.html
   */
  DeleteProfile = 'wellarchitected:DeleteProfile',
  /**
   * Grants permission to delete an existing profile share
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteProfileShare.html
   */
  DeleteProfileShare = 'wellarchitected:DeleteProfileShare',
  /**
   * Grants permission to delete an existing review template
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteReviewTemplate.html
   */
  DeleteReviewTemplate = 'wellarchitected:DeleteReviewTemplate',
  /**
   * Grants permission to delete an existing review template share
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteTemplateShare.html
   */
  DeleteTemplateShare = 'wellarchitected:DeleteTemplateShare',
  /**
   * Grants permission to delete an existing workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteWorkload.html
   */
  DeleteWorkload = 'wellarchitected:DeleteWorkload',
  /**
   * Grants permission to delete an existing workload share
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteWorkloadShare.html
   */
  DeleteWorkloadShare = 'wellarchitected:DeleteWorkloadShare',
  /**
   * Grants permission to disassociate a lens from the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DisassociateLenses.html
   */
  DisassociateLenses = 'wellarchitected:DisassociateLenses',
  /**
   * Grants permission to disassociate a profile from the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DisassociateProfiles.html
   */
  DisassociateProfiles = 'wellarchitected:DisassociateProfiles',
  /**
   * Grants permission to export an existing lens
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ExportLens.html
   */
  ExportLens = 'wellarchitected:ExportLens',
  /**
   * Grants permission to retrieve the specified answer from the specified lens revi
   * ew
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetAnswer.html
   */
  GetAnswer = 'wellarchitected:GetAnswer',
  /**
   * Grants permission to get consolidated report metrics or to generate the consoli
   * dated report PDF in this account
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetConsolidatedReport.html
   */
  GetConsolidatedReport = 'wellarchitected:GetConsolidatedReport',
  /**
   * Grants permission to get an existing lens
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLensShare.html
   */
  GetLens = 'wellarchitected:GetLens',
  /**
   * Grants permission to retrieve the specified lens review of the specified worklo
   * ad
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensReview.html
   */
  GetLensReview = 'wellarchitected:GetLensReview',
  /**
   * Grants permission to retrieve the report for the specified lens review
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensReviewReport.html
   */
  GetLensReviewReport = 'wellarchitected:GetLensReviewReport',
  /**
   * Grants permission to get the difference between the specified lens version and
   * latest available lens version
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensVersionDifference.html
   */
  GetLensVersionDifference = 'wellarchitected:GetLensVersionDifference',
  /**
   * Grants permission to retrieve the specified milestone of the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetMilestone.html
   */
  GetMilestone = 'wellarchitected:GetMilestone',
  /**
   * Grants permission to retrieve the specified profile
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetProfile.html
   */
  GetProfile = 'wellarchitected:GetProfile',
  /**
   * Grants permission to retrieve the specified profile template
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetProfileTemplate.html
   */
  GetProfileTemplate = 'wellarchitected:GetProfileTemplate',
  /**
   * Grants permission to retrieve the specified review template
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetReviewTemplate.html
   */
  GetReviewTemplate = 'wellarchitected:GetReviewTemplate',
  /**
   * Grants permission to retrieve the specified answer from the specified review te
   * mplate lens review
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetReviewTemplateAnswer.html
   */
  GetReviewTemplateAnswer = 'wellarchitected:GetReviewTemplateAnswer',
  /**
   * Grants permission to retrieve the specified lens review of the specified review
   * template
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetReviewTemplateLensReview.html
   */
  GetReviewTemplateLensReview = 'wellarchitected:GetReviewTemplateLensReview',
  /**
   * Grants permission to retrieve the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetWorkload.html
   */
  GetWorkload = 'wellarchitected:GetWorkload',
  /**
   * Grants permission to import a new lens
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ImportLens.html
   */
  ImportLens = 'wellarchitected:ImportLens',
  /**
   * Grants permission to list the answers from the specified lens review
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListAnswers.html
   */
  ListAnswers = 'wellarchitected:ListAnswers',
  /**
   * Grants permission to list the check-details for the workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListCheckDetails.html
   */
  ListCheckDetails = 'wellarchitected:ListCheckDetails',
  /**
   * Grants permission to list the check-summaries for the workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListCheckSummaries.html
   */
  ListCheckSummaries = 'wellarchitected:ListCheckSummaries',
  /**
   * Grants permission to list the improvements of the specified lens review
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensReviewImprovements.html
   */
  ListLensReviewImprovements = 'wellarchitected:ListLensReviewImprovements',
  /**
   * Grants permission to list the lens reviews of the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensReviews.html
   */
  ListLensReviews = 'wellarchitected:ListLensReviews',
  /**
   * Grants permission to list all shares created for a lens
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensShares.html
   */
  ListLensShares = 'wellarchitected:ListLensShares',
  /**
   * Grants permission to list the lenses available to this account
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLenses.html
   */
  ListLenses = 'wellarchitected:ListLenses',
  /**
   * Grants permission to list the milestones of the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListMilestones.html
   */
  ListMilestones = 'wellarchitected:ListMilestones',
  /**
   * Grants permission to list notifications related to the account or specified res
   * ource
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListNotifications.html
   */
  ListNotifications = 'wellarchitected:ListNotifications',
  /**
   * Grants permission to list profile notifications related to specified resource
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListProfileNotifications.html
   */
  ListProfileNotifications = 'wellarchitected:ListProfileNotifications',
  /**
   * Grants permission to list all shares created for a profile
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListProfileShares.html
   */
  ListProfileShares = 'wellarchitected:ListProfileShares',
  /**
   * Grants permission to list the profiles available to this account
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListProfiles.html
   */
  ListProfiles = 'wellarchitected:ListProfiles',
  /**
   * Grants permission to list the answers from the specified review template lens r
   * eview
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListReviewTemplateAnswers.html
   */
  ListReviewTemplateAnswers = 'wellarchitected:ListReviewTemplateAnswers',
  /**
   * Grants permission to list the review templates available to this account
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListReviewTemplates.html
   */
  ListReviewTemplates = 'wellarchitected:ListReviewTemplates',
  /**
   * Grants permission to list the workload share invitations of the specified accou
   * nt or user
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListShareInvitations.html
   */
  ListShareInvitations = 'wellarchitected:ListShareInvitations',
  /**
   * Grants permission to list tags for a Well-Architected resource
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'wellarchitected:ListTagsForResource',
  /**
   * Grants permission to list all shares created for a review template
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListTemplateShares.html
   */
  ListTemplateShares = 'wellarchitected:ListTemplateShares',
  /**
   * Grants permission to list the workload shares of the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListWorkloadShares.html
   */
  ListWorkloadShares = 'wellarchitected:ListWorkloadShares',
  /**
   * Grants permission to list the workloads in this account
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListWorkloads.html
   */
  ListWorkloads = 'wellarchitected:ListWorkloads',
  /**
   * Grants permission to tag a Well-Architected resource
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_TagResource.html
   */
  TagResource = 'wellarchitected:TagResource',
  /**
   * Grants permission to untag a Well-Architected resource
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'wellarchitected:UntagResource',
  /**
   * Grants permission to update properties of the specified answer
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateAnswer.html
   */
  UpdateAnswer = 'wellarchitected:UpdateAnswer',
  /**
   * Grants permission to update settings to enable aws-organization support
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateGlobalSettings.html
   */
  UpdateGlobalSettings = 'wellarchitected:UpdateGlobalSettings',
  /**
   * Grants permission to update properties of the specified lens review
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateLensReview.html
   */
  UpdateLensReview = 'wellarchitected:UpdateLensReview',
  /**
   * Grants permission to update properties of the specified profile
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateProfile.html
   */
  UpdateProfile = 'wellarchitected:UpdateProfile',
  /**
   * Grants permission to update properties of the specified review template
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateReviewTemplate.html
   */
  UpdateReviewTemplate = 'wellarchitected:UpdateReviewTemplate',
  /**
   * Grants permission to update properties of the specified review template answer
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateReviewTemplateAnswer.html
   */
  UpdateReviewTemplateAnswer = 'wellarchitected:UpdateReviewTemplateAnswer',
  /**
   * Grants permission to update properties of the specified review template lens re
   * view
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateReviewTemplateLensReview.html
   */
  UpdateReviewTemplateLensReview = 'wellarchitected:UpdateReviewTemplateLensReview',
  /**
   * Grants permission to update status of the specified workload share invitation
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateShareInvitation.html
   */
  UpdateShareInvitation = 'wellarchitected:UpdateShareInvitation',
  /**
   * Grants permission to update properties of the specified workload
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateWorkload.html
   */
  UpdateWorkload = 'wellarchitected:UpdateWorkload',
  /**
   * Grants permission to update properties of the specified workload share
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateWorkloadShare.html
   */
  UpdateWorkloadShare = 'wellarchitected:UpdateWorkloadShare',
  /**
   * Grants permission to upgrade the specified lens review to use the latest versio
   * n of the associated lens
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeLensReview.html
   */
  UpgradeLensReview = 'wellarchitected:UpgradeLensReview',
  /**
   * Grants permission to upgrade the specified workload to use the latest version o
   * f the associated profile
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeProfileVersion.html
   */
  UpgradeProfileVersion = 'wellarchitected:UpgradeProfileVersion',
  /**
   * Grants permission to upgrade the specified lens review of the specified review
   * template
   *
   * See https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeReviewTemplateLensReview.html
   */
  UpgradeReviewTemplateLensReview = 'wellarchitected:UpgradeReviewTemplateLensReview',
}
