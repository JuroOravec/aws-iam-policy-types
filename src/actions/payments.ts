// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Payments (PAYMENTS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspayments.html
 *
 * 2024-02-12T09:58:37.214Z
 */
export enum AwsPaymentsActions {
  /**
   * Grants permission to create a payment instrument
   *
   * See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  CreatePaymentInstrument = 'payments:CreatePaymentInstrument',
  /**
   * Grants permission to delete a payment instrument
   *
   * See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  DeletePaymentInstrument = 'payments:DeletePaymentInstrument',
  /**
   * Grants permission to get information about a payment instrument
   *
   * See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  GetPaymentInstrument = 'payments:GetPaymentInstrument',
  /**
   * Grants permission to get payment status of invoices
   *
   * See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  GetPaymentStatus = 'payments:GetPaymentStatus',
  /**
   * Grants permission to get payment preferences (preferred payment currency, prefe
   * rred payment method, etc.)
   *
   * See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  ListPaymentPreferences = 'payments:ListPaymentPreferences',
  /**
   * Grants permission to make a payment, authenticate a payment, verify a payment m
   * ethod, and generate a funding request document for Advance Pay
   *
   * See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  MakePayment = 'payments:MakePayment',
  /**
   * Grants permission to update payment preferences (preferred payment currency, pr
   * eferred payment method, etc.)
   *
   * See https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  UpdatePaymentPreferences = 'payments:UpdatePaymentPreferences',
}
