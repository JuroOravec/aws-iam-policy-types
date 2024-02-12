[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsPricingActions

# Enumeration: AwsPricingActions

All IAM policy actions for AWS Price List (PRICING)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspricelist.html

2024-02-12T09:58:41.922Z

## Table of contents

### Enumeration Members

- [DescribeServices](AwsPricingActions.md#describeservices)
- [GetAttributeValues](AwsPricingActions.md#getattributevalues)
- [GetPriceListFileUrl](AwsPricingActions.md#getpricelistfileurl)
- [GetProducts](AwsPricingActions.md#getproducts)
- [ListPriceLists](AwsPricingActions.md#listpricelists)

## Enumeration Members

### DescribeServices

• **DescribeServices** = ``"pricing:DescribeServices"``

Grants permission to retrieve service details for all (paginated) services (if
serviceCode is not set) or service detail for a particular service (if given se
rviceCode)

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_DescribeServices.html

#### Defined in

actions/pricing.ts:19

___

### GetAttributeValues

• **GetAttributeValues** = ``"pricing:GetAttributeValues"``

Grants permission to retrieve all (paginated) possible values for a given attri
bute

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html

#### Defined in

actions/pricing.ts:26

___

### GetPriceListFileUrl

• **GetPriceListFileUrl** = ``"pricing:GetPriceListFileUrl"``

Grants permission to retrieve the price list file URL for the given parameters

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html

#### Defined in

actions/pricing.ts:32

___

### GetProducts

• **GetProducts** = ``"pricing:GetProducts"``

Grants permission to retrieve all matching products with given search criteria

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetProducts.html

#### Defined in

actions/pricing.ts:38

___

### ListPriceLists

• **ListPriceLists** = ``"pricing:ListPriceLists"``

Grants permission to list all (paginated) eligible price lists for the given pa
rameters

See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html

#### Defined in

actions/pricing.ts:45
