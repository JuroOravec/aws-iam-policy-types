// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Price List (PRICING)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspricelist.html
 *
 * 2025-02-24T21:49:14.296Z
 */
export enum AwsPricingActions {
  /**
   * Grants permission to retrieve service details for all (paginated) services (if
   * serviceCode is not set) or service detail for a particular service (if given se
   * rviceCode)
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_DescribeServices.html
   */
  DescribeServices = 'pricing:DescribeServices',
  /**
   * Grants permission to retrieve all (paginated) possible values for a given attri
   * bute
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html
   */
  GetAttributeValues = 'pricing:GetAttributeValues',
  /**
   * Grants permission to retrieve the price list file URL for the given parameters
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html
   */
  GetPriceListFileUrl = 'pricing:GetPriceListFileUrl',
  /**
   * Grants permission to retrieve all matching products with given search criteria
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetProducts.html
   */
  GetProducts = 'pricing:GetProducts',
  /**
   * Grants permission to list all (paginated) eligible price lists for the given pa
   * rameters
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html
   */
  ListPriceLists = 'pricing:ListPriceLists',
}
