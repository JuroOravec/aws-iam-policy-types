// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Amplify UI Builder (AMPLIFYUIBUILDER)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyuibuilder.html
 *
 * 2025-02-24T21:46:36.140Z
 */
export enum AwsAmplifyuibuilderActions {
  /**
   * Grants permission to create a component
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_CreateComponent.html
   */
  CreateComponent = 'amplifyuibuilder:CreateComponent',
  /**
   * Grants permission to create a form
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_CreateForm.html
   */
  CreateForm = 'amplifyuibuilder:CreateForm',
  /**
   * Grants permission to create a theme
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_CreateTheme.html
   */
  CreateTheme = 'amplifyuibuilder:CreateTheme',
  /**
   * Grants permission to delete a component
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_DeleteComponent.html
   */
  DeleteComponent = 'amplifyuibuilder:DeleteComponent',
  /**
   * Grants permission to delete a form
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_DeleteForm.html
   */
  DeleteForm = 'amplifyuibuilder:DeleteForm',
  /**
   * Grants permission to delete a theme
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_DeleteTheme.html
   */
  DeleteTheme = 'amplifyuibuilder:DeleteTheme',
  /**
   * Grants permission to exchange a code for a token
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExchangeCodeForToken.html
   */
  ExchangeCodeForToken = 'amplifyuibuilder:ExchangeCodeForToken',
  /**
   * Grants permission to export components
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExportComponents.html
   */
  ExportComponents = 'amplifyuibuilder:ExportComponents',
  /**
   * Grants permission to export forms
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExportForms.html
   */
  ExportForms = 'amplifyuibuilder:ExportForms',
  /**
   * Grants permission to export themes
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExportThemes.html
   */
  ExportThemes = 'amplifyuibuilder:ExportThemes',
  /**
   * Grants permission to get an existing codegen job
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetCodegenJob.html
   */
  GetCodegenJob = 'amplifyuibuilder:GetCodegenJob',
  /**
   * Grants permission to get an existing component
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetComponent.html
   */
  GetComponent = 'amplifyuibuilder:GetComponent',
  /**
   * Grants permission to get an existing form
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetForm.html
   */
  GetForm = 'amplifyuibuilder:GetForm',
  /**
   * Grants permission to get an existing metadata
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetMetadata.html
   */
  GetMetadata = 'amplifyuibuilder:GetMetadata',
  /**
   * Grants permission to get an existing theme
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetTheme.html
   */
  GetTheme = 'amplifyuibuilder:GetTheme',
  /**
   * Grants permission to list codegen jobs
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListCodegenJobs.html
   */
  ListCodegenJobs = 'amplifyuibuilder:ListCodegenJobs',
  /**
   * Grants permission to list components
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListComponents.html
   */
  ListComponents = 'amplifyuibuilder:ListComponents',
  /**
   * Grants permission to list forms
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListForms.html
   */
  ListForms = 'amplifyuibuilder:ListForms',
  /**
   * Grants permission to list tags for a specified Amazon Resource Name (ARN)
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'amplifyuibuilder:ListTagsForResource',
  /**
   * Grants permission to list themes
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListThemes.html
   */
  ListThemes = 'amplifyuibuilder:ListThemes',
  /**
   * Grants permission to put an existing metadata
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_PutMetadataFlag.html
   */
  PutMetadataFlag = 'amplifyuibuilder:PutMetadataFlag',
  /**
   * Grants permission to refresh an access token
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_RefreshToken.html
   */
  RefreshToken = 'amplifyuibuilder:RefreshToken',
  /**
   * Grants permission to reset an existing metadata
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ResetMetadataFlag.html
   */
  ResetMetadataFlag = 'amplifyuibuilder:ResetMetadataFlag',
  /**
   * Grants permission to start a codegen job
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_StartCodegenJob.html
   */
  StartCodegenJob = 'amplifyuibuilder:StartCodegenJob',
  /**
   * Grants permission to tag the resource with a tag key and value
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_TagResource.html
   */
  TagResource = 'amplifyuibuilder:TagResource',
  /**
   * Grants permission to untag a resource with a specified Amazon Resource Name (AR
   * N)
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'amplifyuibuilder:UntagResource',
  /**
   * Grants permission to update a component
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UpdateComponent.html
   */
  UpdateComponent = 'amplifyuibuilder:UpdateComponent',
  /**
   * Grants permission to update a form
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UpdateForm.html
   */
  UpdateForm = 'amplifyuibuilder:UpdateForm',
  /**
   * Grants permission to update a theme
   *
   * See https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UpdateTheme.html
   */
  UpdateTheme = 'amplifyuibuilder:UpdateTheme',
}
