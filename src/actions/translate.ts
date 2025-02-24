// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Translate (TRANSLATE)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranslate.html
 *
 * 2025-02-24T21:50:02.334Z
 */
export enum AwsTranslateActions {
  /**
   * Grants permission to create a Parallel Data
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_CreateParallelData.html
   */
  CreateParallelData = 'translate:CreateParallelData',
  /**
   * Grants permission to delete a Parallel Data
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_DeleteParallelData.html
   */
  DeleteParallelData = 'translate:DeleteParallelData',
  /**
   * Grants permission to delete a terminology
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_DeleteTerminology.html
   */
  DeleteTerminology = 'translate:DeleteTerminology',
  /**
   * Grants permission to get the properties associated with an asynchronous batch t
   * ranslation job
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_DescribeTextTranslationJob.html
   */
  DescribeTextTranslationJob = 'translate:DescribeTextTranslationJob',
  /**
   * Grants permission to get a Parallel Data
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_GetParallelData.html
   */
  GetParallelData = 'translate:GetParallelData',
  /**
   * Grants permission to retrieve a terminology
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_GetTerminology.html
   */
  GetTerminology = 'translate:GetTerminology',
  /**
   * Grants permission to create or update a terminology, depending on whether or no
   * t one already exists for the given terminology name
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_ImportTerminology.html
   */
  ImportTerminology = 'translate:ImportTerminology',
  /**
   * Grants permission to list supported languages
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_ListLanguages.html
   */
  ListLanguages = 'translate:ListLanguages',
  /**
   * Grants permission to list Parallel Data associated with your account
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_ListParallelData.html
   */
  ListParallelData = 'translate:ListParallelData',
  /**
   * Grants permission to list tags for a resource
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'translate:ListTagsForResource',
  /**
   * Grants permission to list terminologies associated with your account
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_ListTerminologies.html
   */
  ListTerminologies = 'translate:ListTerminologies',
  /**
   * Grants permission to list batch translation jobs that you have submitted
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_ListTextTranslationJobs.html
   */
  ListTextTranslationJobs = 'translate:ListTextTranslationJobs',
  /**
   * Grants permission to start an asynchronous batch translation job. Batch transla
   * tion jobs can be used to translate large volumes of text across multiple docume
   * nts at once
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_StartTextTranslationJob.html
   */
  StartTextTranslationJob = 'translate:StartTextTranslationJob',
  /**
   * Grants permission to stop an asynchronous batch translation job that is in prog
   * ress
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_StopTextTranslationJob.html
   */
  StopTextTranslationJob = 'translate:StopTextTranslationJob',
  /**
   * Grants permission to tag a resource with given key value pairs
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_TagResource.html
   */
  TagResource = 'translate:TagResource',
  /**
   * Grants permission to translate a document from a source language to a target la
   * nguage
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html
   */
  TranslateDocument = 'translate:TranslateDocument',
  /**
   * Grants permission to translate text from a source language to a target language
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateText.html
   */
  TranslateText = 'translate:TranslateText',
  /**
   * Grants permission to untag a resource with given key
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'translate:UntagResource',
  /**
   * Grants permission to update an existing Parallel Data
   *
   * See https://docs.aws.amazon.com/translate/latest/APIReference/API_UpdateParallelData.html
   */
  UpdateParallelData = 'translate:UpdateParallelData',
}
