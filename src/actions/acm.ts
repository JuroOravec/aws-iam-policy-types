// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Certificate Manager (ACM)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanager.html
 *
 * 2025-02-24T21:46:57.719Z
 */
export enum AwsAcmActions {
  /**
   * Grants permission to add one or more tags to a certificate
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_AddTagsToCertificate.html
   */
  AddTagsToCertificate = 'acm:AddTagsToCertificate',
  /**
   * Grants permission to delete a certificate and its associated private key
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html
   */
  DeleteCertificate = 'acm:DeleteCertificate',
  /**
   * Grants permission to retreive a certificates and its metadata
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html
   */
  DescribeCertificate = 'acm:DescribeCertificate',
  /**
   * Grants permission to export a private certificate issued by a private certifica
   * te authority (CA) for use anywhere
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_ExportCertificate.html
   */
  ExportCertificate = 'acm:ExportCertificate',
  /**
   * Grants permission to retrieve account level configuration from AWS Certificate
   * Manager
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_GetAccountConfiguration.html
   */
  GetAccountConfiguration = 'acm:GetAccountConfiguration',
  /**
   * Grants permission to retrieve a certificate and certificate chain for a certifi
   * cate ARN
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_GetCertificate.html
   */
  GetCertificate = 'acm:GetCertificate',
  /**
   * Grants permission to import a 3rd party certificate into AWS Certificate Manage
   * r (ACM)
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_ImportCertificate.html
   */
  ImportCertificate = 'acm:ImportCertificate',
  /**
   * Grants permission to retrieve a list of the certificate ARNs and the domain nam
   * e for each ARN
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html
   */
  ListCertificates = 'acm:ListCertificates',
  /**
   * Grants permission to lists the tags that have been associated with a certificat
   * e
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_ListTagsForCertificate.html
   */
  ListTagsForCertificate = 'acm:ListTagsForCertificate',
  /**
   * Grants permission to update account level configuration in AWS Certificate Mana
   * ger
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_PutAccountConfiguration.html
   */
  PutAccountConfiguration = 'acm:PutAccountConfiguration',
  /**
   * Grants permission to remove one or more tags from a certificate
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_RemoveTagsFromCertificate.html
   */
  RemoveTagsFromCertificate = 'acm:RemoveTagsFromCertificate',
  /**
   * Grants permission to renew an eligible private certificate
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_RenewCertificate.html
   */
  RenewCertificate = 'acm:RenewCertificate',
  /**
   * Grants permission to requests a public or private certificate
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html
   */
  RequestCertificate = 'acm:RequestCertificate',
  /**
   * Grants permission to resend an email to request domain ownership validation
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_ResendValidationEmail.html
   */
  ResendValidationEmail = 'acm:ResendValidationEmail',
  /**
   * Grants permission to update a certificate configuration. Use this to specify wh
   * ether to opt in to or out of certificate transparency logging
   *
   * See https://docs.aws.amazon.com/acm/latest/APIReference/API_UpdateCertificateOptions.html
   */
  UpdateCertificateOptions = 'acm:UpdateCertificateOptions',
}
