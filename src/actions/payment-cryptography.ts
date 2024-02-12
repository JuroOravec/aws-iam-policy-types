// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Payment Cryptography (PAYMENT-CRYPTOGRAPHY)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspaymentcryptography.html
 *
 * 2024-02-12T09:58:36.708Z
 */
export enum AwsPaymentCryptographyActions {
  /**
   * Grants permission to create a user-friendly name for a Key
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateAlias.html
   */
  CreateAlias = 'payment-cryptography:CreateAlias',
  /**
   * Grants permission to create a unique customer managed key in the caller's AWS a
   * ccount and region
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html
   */
  CreateKey = 'payment-cryptography:CreateKey',
  /**
   * Grants permission to decrypt ciphertext data to plaintext using symmetric, asym
   * metric or DUKPT data encryption key
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_DecryptData.html
   */
  DecryptData = 'payment-cryptography:DecryptData',
  /**
   * Grants permission to delete the specified alias
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html
   */
  DeleteAlias = 'payment-cryptography:DeleteAlias',
  /**
   * Grants permission to schedule the deletion of a Key
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteKey.html
   */
  DeleteKey = 'payment-cryptography:DeleteKey',
  /**
   * Grants permission to encrypt plaintext data to ciphertext using symmetric, asym
   * metric or DUKPT data encryption key
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_EncryptData.html
   */
  EncryptData = 'payment-cryptography:EncryptData',
  /**
   * Grants permission to export a key from the service
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ExportKey.html
   */
  ExportKey = 'payment-cryptography:ExportKey',
  /**
   * Grants permission to generate card-related data using algorithms such as Card V
   * erification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) or
   * Card Security Codes (CSC) that check the validity of a magnetic stripe card
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_GenerateCardValidationData.html
   */
  GenerateCardValidationData = 'payment-cryptography:GenerateCardValidationData',
  /**
   * Grants permission to generate a MAC (Message Authentication Code) cryptogram
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_GenerateMac.html
   */
  GenerateMac = 'payment-cryptography:GenerateMac',
  /**
   * Grants permission to generate pin-related data such as PIN, PIN Verification Va
   * lue (PVV), PIN Block and PIN Offset during new card issuance or card re-issuanc
   * e
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_GeneratePinData.html
   */
  GeneratePinData = 'payment-cryptography:GeneratePinData',
  /**
   * Grants permission to return the keyArn associated with an aliasName
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetAlias.html
   */
  GetAlias = 'payment-cryptography:GetAlias',
  /**
   * Grants permission to return the detailed information about the specified key
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetKey.html
   */
  GetKey = 'payment-cryptography:GetKey',
  /**
   * Grants permission to get the export token and the signing key certificate to in
   * itiate a TR-34 key export
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForExport.html
   */
  GetParametersForExport = 'payment-cryptography:GetParametersForExport',
  /**
   * Grants permission to get the import token and the wrapping key certificate to i
   * nitiate a TR-34 key import
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html
   */
  GetParametersForImport = 'payment-cryptography:GetParametersForImport',
  /**
   * Grants permission to return the public key from a key of class PUBLIC_KEY
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html
   */
  GetPublicKeyCertificate = 'payment-cryptography:GetPublicKeyCertificate',
  /**
   * Grants permission to imports keys and public key certificates
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html
   */
  ImportKey = 'payment-cryptography:ImportKey',
  /**
   * Grants permission to return a list of aliases created for all keys in the calle
   * r's AWS account and Region
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html
   */
  ListAliases = 'payment-cryptography:ListAliases',
  /**
   * Grants permission to return a list of keys created in the caller's AWS account
   * and Region
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListKeys.html
   */
  ListKeys = 'payment-cryptography:ListKeys',
  /**
   * Grants permission to return a list of tags created in the caller's AWS account
   * and Region
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'payment-cryptography:ListTagsForResource',
  /**
   * Grants permission to re-encrypt ciphertext using DUKPT, Symmetric and Asymmetri
   * c Data Encryption Keys
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_ReEncryptData.html
   */
  ReEncryptData = 'payment-cryptography:ReEncryptData',
  /**
   * Grants permission to cancel a scheduled key deletion if at any point during the
   * waiting period a Key needs to be revived
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_RestoreKey.html
   */
  RestoreKey = 'payment-cryptography:RestoreKey',
  /**
   * Grants permission to enable a disabled Key
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_StartKeyUsage.html
   */
  StartKeyUsage = 'payment-cryptography:StartKeyUsage',
  /**
   * Grants permission to disable an enabled Key
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_StopKeyUsage.html
   */
  StopKeyUsage = 'payment-cryptography:StopKeyUsage',
  /**
   * Grants permission to add or overwrites one or more tags for the specified resou
   * rce
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_TagResource.html
   */
  TagResource = 'payment-cryptography:TagResource',
  /**
   * Grants permission to translate encrypted PIN block from and to ISO 9564 formats
   * 0,1,3,4
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_TranslatePinData.html
   */
  TranslatePinData = 'payment-cryptography:TranslatePinData',
  /**
   * Grants permission to remove the specified tag or tags from the specified resour
   * ce
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'payment-cryptography:UntagResource',
  /**
   * Grants permission to change the key to which an alias is assigned, or unassign
   * it from its current key
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html
   */
  UpdateAlias = 'payment-cryptography:UpdateAlias',
  /**
   * Grants permission to verify Authorization Request Cryptogram (ARQC) for a EMV c
   * hip payment card authorization
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyAuthRequestCryptogram.html
   */
  VerifyAuthRequestCryptogram = 'payment-cryptography:VerifyAuthRequestCryptogram',
  /**
   * Grants permission to verify card-related validation data using algorithms such
   * as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/
   * dCVV2) and Card Security Codes (CSC)
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyCardValidationData.html
   */
  VerifyCardValidationData = 'payment-cryptography:VerifyCardValidationData',
  /**
   * Grants permission to verify MAC (Message Authentication Code) of input data aga
   * inst a provided MAC
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyMac.html
   */
  VerifyMac = 'payment-cryptography:VerifyMac',
  /**
   * Grants permission to verify pin-related data such as PIN and PIN Offset using a
   * lgorithms including VISA PVV and IBM3624
   *
   * See https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyPinData.html
   */
  VerifyPinData = 'payment-cryptography:VerifyPinData',
}
