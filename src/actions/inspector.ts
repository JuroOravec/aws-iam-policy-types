// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Inspector (INSPECTOR)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector.html
 *
 * 2025-02-24T21:48:18.383Z
 */
export enum AwsInspectorActions {
  /**
   * Grants permission to assign attributes (key and value pairs) to the findings th
   * at are specified by the ARNs of the findings
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_AddAttributesToFindings.html
   */
  AddAttributesToFindings = 'inspector:AddAttributesToFindings',
  /**
   * Grants permission to create a new assessment target using the ARN of the resour
   * ce group that is generated by CreateResourceGroup
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTarget.html
   */
  CreateAssessmentTarget = 'inspector:CreateAssessmentTarget',
  /**
   * Grants permission to create an assessment template for the assessment target th
   * at is specified by the ARN of the assessment target
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTemplate.html
   */
  CreateAssessmentTemplate = 'inspector:CreateAssessmentTemplate',
  /**
   * Grants permission to start the generation of an exclusions preview for the spec
   * ified assessment template
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateExclusionsPreview.html
   */
  CreateExclusionsPreview = 'inspector:CreateExclusionsPreview',
  /**
   * Grants permission to create a resource group using the specified set of tags (k
   * ey and value pairs) that are used to select the EC2 instances to be included in
   * an Amazon Inspector assessment target
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateResourceGroup.html
   */
  CreateResourceGroup = 'inspector:CreateResourceGroup',
  /**
   * Grants permission to delete the assessment run that is specified by the ARN of
   * the assessment run
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentRun.html
   */
  DeleteAssessmentRun = 'inspector:DeleteAssessmentRun',
  /**
   * Grants permission to delete the assessment target that is specified by the ARN
   * of the assessment target
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTarget.html
   */
  DeleteAssessmentTarget = 'inspector:DeleteAssessmentTarget',
  /**
   * Grants permission to delete the assessment template that is specified by the AR
   * N of the assessment template
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTemplate.html
   */
  DeleteAssessmentTemplate = 'inspector:DeleteAssessmentTemplate',
  /**
   * Grants permission to describe the assessment runs that are specified by the ARN
   * s of the assessment runs
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentRuns.html
   */
  DescribeAssessmentRuns = 'inspector:DescribeAssessmentRuns',
  /**
   * Grants permission to describe the assessment targets that are specified by the
   * ARNs of the assessment targets
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTargets.html
   */
  DescribeAssessmentTargets = 'inspector:DescribeAssessmentTargets',
  /**
   * Grants permission to describe the assessment templates that are specified by th
   * e ARNs of the assessment templates
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTemplates.html
   */
  DescribeAssessmentTemplates = 'inspector:DescribeAssessmentTemplates',
  /**
   * Grants permission to describe the IAM role that enables Amazon Inspector to acc
   * ess your AWS account
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeCrossAccountAccessRole.html
   */
  DescribeCrossAccountAccessRole = 'inspector:DescribeCrossAccountAccessRole',
  /**
   * Grants permission to describe the exclusions that are specified by the exclusio
   * ns' ARNs
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeExclusions.html
   */
  DescribeExclusions = 'inspector:DescribeExclusions',
  /**
   * Grants permission to describe the findings that are specified by the ARNs of th
   * e findings
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeFindings.html
   */
  DescribeFindings = 'inspector:DescribeFindings',
  /**
   * Grants permission to describe the resource groups that are specified by the ARN
   * s of the resource groups
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeResourceGroups.html
   */
  DescribeResourceGroups = 'inspector:DescribeResourceGroups',
  /**
   * Grants permission to describe the rules packages that are specified by the ARNs
   * of the rules packages
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeRulesPackages.html
   */
  DescribeRulesPackages = 'inspector:DescribeRulesPackages',
  /**
   * Grants permission to produce an assessment report that includes detailed and co
   * mprehensive results of a specified assessment run
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_GetAssessmentReport.html
   */
  GetAssessmentReport = 'inspector:GetAssessmentReport',
  /**
   * Grants permission to retrieve the exclusions preview (a list of ExclusionPrevie
   * w objects) specified by the preview token
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_GetExclusionsPreview.html
   */
  GetExclusionsPreview = 'inspector:GetExclusionsPreview',
  /**
   * Grants permission to get information about the data that is collected for the s
   * pecified assessment run
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_GetTelemetryMetadata.html
   */
  GetTelemetryMetadata = 'inspector:GetTelemetryMetadata',
  /**
   * Grants permission to list the agents of the assessment runs that are specified
   * by the ARNs of the assessment runs
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRunAgents.html
   */
  ListAssessmentRunAgents = 'inspector:ListAssessmentRunAgents',
  /**
   * Grants permission to list the assessment runs that correspond to the assessment
   * templates that are specified by the ARNs of the assessment templates
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRuns.html
   */
  ListAssessmentRuns = 'inspector:ListAssessmentRuns',
  /**
   * Grants permission to list the ARNs of the assessment targets within this AWS ac
   * count
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTargets.html
   */
  ListAssessmentTargets = 'inspector:ListAssessmentTargets',
  /**
   * Grants permission to list the assessment templates that correspond to the asses
   * sment targets that are specified by the ARNs of the assessment targets
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTemplates.html
   */
  ListAssessmentTemplates = 'inspector:ListAssessmentTemplates',
  /**
   * Grants permission to list all the event subscriptions for the assessment templa
   * te that is specified by the ARN of the assessment template
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListEventSubscriptions.html
   */
  ListEventSubscriptions = 'inspector:ListEventSubscriptions',
  /**
   * Grants permission to list exclusions that are generated by the assessment run
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListExclusions.html
   */
  ListExclusions = 'inspector:ListExclusions',
  /**
   * Grants permission to list findings that are generated by the assessment runs th
   * at are specified by the ARNs of the assessment runs
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListFindings.html
   */
  ListFindings = 'inspector:ListFindings',
  /**
   * Grants permission to list all available Amazon Inspector rules packages
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListRulesPackages.html
   */
  ListRulesPackages = 'inspector:ListRulesPackages',
  /**
   * Grants permission to list all tags associated with an assessment template
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'inspector:ListTagsForResource',
  /**
   * Grants permission to preview the agents installed on the EC2 instances that are
   * part of the specified assessment target
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_PreviewAgents.html
   */
  PreviewAgents = 'inspector:PreviewAgents',
  /**
   * Grants permission to register the IAM role that Amazon Inspector uses to list y
   * our EC2 instances at the start of the assessment run or when you call the Previ
   * ewAgents action
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_RegisterCrossAccountAccessRole.html
   */
  RegisterCrossAccountAccessRole = 'inspector:RegisterCrossAccountAccessRole',
  /**
   * Grants permission to remove entire attributes (key and value pairs) from the fi
   * ndings that are specified by the ARNs of the findings where an attribute with t
   * he specified key exists
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_RemoveAttributesFromFindings.html
   */
  RemoveAttributesFromFindings = 'inspector:RemoveAttributesFromFindings',
  /**
   * Grants permission to set tags (key and value pairs) to the assessment template
   * that is specified by the ARN of the assessment template
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_SetTagsForResource.html
   */
  SetTagsForResource = 'inspector:SetTagsForResource',
  /**
   * Grants permission to start the assessment run specified by the ARN of the asses
   * sment template
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_StartAssessmentRun.html
   */
  StartAssessmentRun = 'inspector:StartAssessmentRun',
  /**
   * Grants permission to stop the assessment run that is specified by the ARN of th
   * e assessment run
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_StopAssessmentRun.html
   */
  StopAssessmentRun = 'inspector:StopAssessmentRun',
  /**
   * Grants permission to enable the process of sending Amazon Simple Notification S
   * ervice (SNS) notifications about a specified event to a specified SNS topic
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_SubscribeToEvent.html
   */
  SubscribeToEvent = 'inspector:SubscribeToEvent',
  /**
   * Grants permission to disable the process of sending Amazon Simple Notification
   * Service (SNS) notifications about a specified event to a specified SNS topic
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_UnsubscribeFromEvent.html
   */
  UnsubscribeFromEvent = 'inspector:UnsubscribeFromEvent',
  /**
   * Grants permission to update the assessment target that is specified by the ARN
   * of the assessment target
   *
   * See https://docs.aws.amazon.com/inspector/latest/APIReference/API_UpdateAssessmentTarget.html
   */
  UpdateAssessmentTarget = 'inspector:UpdateAssessmentTarget',
}
