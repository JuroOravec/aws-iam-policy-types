[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCloudsearchActions

# Enumeration: AwsCloudsearchActions

All IAM policy actions for Amazon CloudSearch (CLOUDSEARCH)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudsearch.html

2024-02-12T09:56:23.838Z

## Table of contents

### Enumeration Members

- [AddTags](AwsCloudsearchActions.md#addtags)
- [BuildSuggesters](AwsCloudsearchActions.md#buildsuggesters)
- [CreateDomain](AwsCloudsearchActions.md#createdomain)
- [DefineAnalysisScheme](AwsCloudsearchActions.md#defineanalysisscheme)
- [DefineExpression](AwsCloudsearchActions.md#defineexpression)
- [DefineIndexField](AwsCloudsearchActions.md#defineindexfield)
- [DefineSuggester](AwsCloudsearchActions.md#definesuggester)
- [DeleteAnalysisScheme](AwsCloudsearchActions.md#deleteanalysisscheme)
- [DeleteDomain](AwsCloudsearchActions.md#deletedomain)
- [DeleteExpression](AwsCloudsearchActions.md#deleteexpression)
- [DeleteIndexField](AwsCloudsearchActions.md#deleteindexfield)
- [DeleteSuggester](AwsCloudsearchActions.md#deletesuggester)
- [DescribeAnalysisSchemes](AwsCloudsearchActions.md#describeanalysisschemes)
- [DescribeAvailabilityOptions](AwsCloudsearchActions.md#describeavailabilityoptions)
- [DescribeDomainEndpointOptions](AwsCloudsearchActions.md#describedomainendpointoptions)
- [DescribeDomains](AwsCloudsearchActions.md#describedomains)
- [DescribeExpressions](AwsCloudsearchActions.md#describeexpressions)
- [DescribeIndexFields](AwsCloudsearchActions.md#describeindexfields)
- [DescribeScalingParameters](AwsCloudsearchActions.md#describescalingparameters)
- [DescribeServiceAccessPolicies](AwsCloudsearchActions.md#describeserviceaccesspolicies)
- [DescribeSuggesters](AwsCloudsearchActions.md#describesuggesters)
- [IndexDocuments](AwsCloudsearchActions.md#indexdocuments)
- [ListDomainNames](AwsCloudsearchActions.md#listdomainnames)
- [ListTags](AwsCloudsearchActions.md#listtags)
- [RemoveTags](AwsCloudsearchActions.md#removetags)
- [UpdateAvailabilityOptions](AwsCloudsearchActions.md#updateavailabilityoptions)
- [UpdateDomainEndpointOptions](AwsCloudsearchActions.md#updatedomainendpointoptions)
- [UpdateScalingParameters](AwsCloudsearchActions.md#updatescalingparameters)
- [UpdateServiceAccessPolicies](AwsCloudsearchActions.md#updateserviceaccesspolicies)
- [document](AwsCloudsearchActions.md#document)
- [search](AwsCloudsearchActions.md#search)
- [suggest](AwsCloudsearchActions.md#suggest)

## Enumeration Members

### AddTags

• **AddTags** = ``"cloudsearch:AddTags"``

Attaches resource tags to an Amazon CloudSearch domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_AddTags.html

#### Defined in

actions/cloudsearch.ts:17

___

### BuildSuggesters

• **BuildSuggesters** = ``"cloudsearch:BuildSuggesters"``

Indexes the search suggestions

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_BuildSuggesters.html

#### Defined in

actions/cloudsearch.ts:23

___

### CreateDomain

• **CreateDomain** = ``"cloudsearch:CreateDomain"``

Creates a new search domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_CreateDomain.html

#### Defined in

actions/cloudsearch.ts:29

___

### DefineAnalysisScheme

• **DefineAnalysisScheme** = ``"cloudsearch:DefineAnalysisScheme"``

Configures an analysis scheme that can be applied to a text or text-array field
to define language-specific text processing options

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineAnalysisScheme.html

#### Defined in

actions/cloudsearch.ts:36

___

### DefineExpression

• **DefineExpression** = ``"cloudsearch:DefineExpression"``

Configures an Expression for the search domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineExpression.html

#### Defined in

actions/cloudsearch.ts:42

___

### DefineIndexField

• **DefineIndexField** = ``"cloudsearch:DefineIndexField"``

Configures an IndexField for the search domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineIndexField.html

#### Defined in

actions/cloudsearch.ts:48

___

### DefineSuggester

• **DefineSuggester** = ``"cloudsearch:DefineSuggester"``

Configures a suggester for a domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineSuggester.html

#### Defined in

actions/cloudsearch.ts:54

___

### DeleteAnalysisScheme

• **DeleteAnalysisScheme** = ``"cloudsearch:DeleteAnalysisScheme"``

Deletes an analysis scheme

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteAnalysisScheme.html

#### Defined in

actions/cloudsearch.ts:60

___

### DeleteDomain

• **DeleteDomain** = ``"cloudsearch:DeleteDomain"``

Permanently deletes a search domain and all of its data

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteDomain.html

#### Defined in

actions/cloudsearch.ts:66

___

### DeleteExpression

• **DeleteExpression** = ``"cloudsearch:DeleteExpression"``

Removes an Expression from the search domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteExpression.html

#### Defined in

actions/cloudsearch.ts:72

___

### DeleteIndexField

• **DeleteIndexField** = ``"cloudsearch:DeleteIndexField"``

Removes an IndexField from the search domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteIndexField.html

#### Defined in

actions/cloudsearch.ts:78

___

### DeleteSuggester

• **DeleteSuggester** = ``"cloudsearch:DeleteSuggester"``

Deletes a suggester

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteSuggester.html

#### Defined in

actions/cloudsearch.ts:84

___

### DescribeAnalysisSchemes

• **DescribeAnalysisSchemes** = ``"cloudsearch:DescribeAnalysisSchemes"``

Gets the analysis schemes configured for a domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAnalysisSchemes.html

#### Defined in

actions/cloudsearch.ts:90

___

### DescribeAvailabilityOptions

• **DescribeAvailabilityOptions** = ``"cloudsearch:DescribeAvailabilityOptions"``

Gets the availability options configured for a domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAvailabilityOptions.html

#### Defined in

actions/cloudsearch.ts:96

___

### DescribeDomainEndpointOptions

• **DescribeDomainEndpointOptions** = ``"cloudsearch:DescribeDomainEndpointOptions"``

Gets the domain endpoint options configured for a domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomainEndpointOptions.html

#### Defined in

actions/cloudsearch.ts:102

___

### DescribeDomains

• **DescribeDomains** = ``"cloudsearch:DescribeDomains"``

Gets information about the search domains owned by this account

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomains.html

#### Defined in

actions/cloudsearch.ts:108

___

### DescribeExpressions

• **DescribeExpressions** = ``"cloudsearch:DescribeExpressions"``

Gets the expressions configured for the search domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeExpressions.html

#### Defined in

actions/cloudsearch.ts:114

___

### DescribeIndexFields

• **DescribeIndexFields** = ``"cloudsearch:DescribeIndexFields"``

Gets information about the index fields configured for the search domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeIndexFields.html

#### Defined in

actions/cloudsearch.ts:120

___

### DescribeScalingParameters

• **DescribeScalingParameters** = ``"cloudsearch:DescribeScalingParameters"``

Gets the scaling parameters configured for a domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeScalingParameters.html

#### Defined in

actions/cloudsearch.ts:126

___

### DescribeServiceAccessPolicies

• **DescribeServiceAccessPolicies** = ``"cloudsearch:DescribeServiceAccessPolicies"``

Gets information about the access policies that control access to the domain's
document and search endpoints

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeServiceAccessPolicies.html

#### Defined in

actions/cloudsearch.ts:133

___

### DescribeSuggesters

• **DescribeSuggesters** = ``"cloudsearch:DescribeSuggesters"``

Gets the suggesters configured for a domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeSuggesters.html

#### Defined in

actions/cloudsearch.ts:139

___

### IndexDocuments

• **IndexDocuments** = ``"cloudsearch:IndexDocuments"``

Tells the search domain to start indexing its documents using the latest indexi
ng options

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_IndexDocuments.html

#### Defined in

actions/cloudsearch.ts:146

___

### ListDomainNames

• **ListDomainNames** = ``"cloudsearch:ListDomainNames"``

Lists all search domains owned by an account

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListDomainNames.html

#### Defined in

actions/cloudsearch.ts:152

___

### ListTags

• **ListTags** = ``"cloudsearch:ListTags"``

Displays all of the resource tags for an Amazon CloudSearch domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListTags.html

#### Defined in

actions/cloudsearch.ts:158

___

### RemoveTags

• **RemoveTags** = ``"cloudsearch:RemoveTags"``

Removes the specified resource tags from an Amazon ES domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_RemoveTags.html

#### Defined in

actions/cloudsearch.ts:164

___

### UpdateAvailabilityOptions

• **UpdateAvailabilityOptions** = ``"cloudsearch:UpdateAvailabilityOptions"``

Configures the availability options for a domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateAvailabilityOptions.html

#### Defined in

actions/cloudsearch.ts:170

___

### UpdateDomainEndpointOptions

• **UpdateDomainEndpointOptions** = ``"cloudsearch:UpdateDomainEndpointOptions"``

Configures the domain endpoint options for a domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateDomainEndpointOptions.html

#### Defined in

actions/cloudsearch.ts:176

___

### UpdateScalingParameters

• **UpdateScalingParameters** = ``"cloudsearch:UpdateScalingParameters"``

Configures scaling parameters for a domain

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateScalingParameters.html

#### Defined in

actions/cloudsearch.ts:182

___

### UpdateServiceAccessPolicies

• **UpdateServiceAccessPolicies** = ``"cloudsearch:UpdateServiceAccessPolicies"``

Configures the access rules that control access to the domain's document and se
arch endpoints

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateServiceAccessPolicies.html

#### Defined in

actions/cloudsearch.ts:189

___

### document

• **document** = ``"cloudsearch:document"``

Allows access to the document service operations

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions

#### Defined in

actions/cloudsearch.ts:195

___

### search

• **search** = ``"cloudsearch:search"``

Allows access to the search operations

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions

#### Defined in

actions/cloudsearch.ts:201

___

### suggest

• **suggest** = ``"cloudsearch:suggest"``

Allows access to the suggest operations

See https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions

#### Defined in

actions/cloudsearch.ts:207
