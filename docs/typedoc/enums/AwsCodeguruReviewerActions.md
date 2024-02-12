[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodeguruReviewerActions

# Enumeration: AwsCodeguruReviewerActions

All IAM policy actions for Amazon CodeGuru Reviewer (CODEGURU-REVIEWER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html

2024-02-12T09:56:36.730Z

## Table of contents

### Enumeration Members

- [AssociateRepository](AwsCodeguruReviewerActions.md#associaterepository)
- [CreateCodeReview](AwsCodeguruReviewerActions.md#createcodereview)
- [CreateConnectionToken](AwsCodeguruReviewerActions.md#createconnectiontoken)
- [DescribeCodeReview](AwsCodeguruReviewerActions.md#describecodereview)
- [DescribeRecommendationFeedback](AwsCodeguruReviewerActions.md#describerecommendationfeedback)
- [DescribeRepositoryAssociation](AwsCodeguruReviewerActions.md#describerepositoryassociation)
- [DisassociateRepository](AwsCodeguruReviewerActions.md#disassociaterepository)
- [GetMetricsData](AwsCodeguruReviewerActions.md#getmetricsdata)
- [ListCodeReviews](AwsCodeguruReviewerActions.md#listcodereviews)
- [ListRecommendationFeedback](AwsCodeguruReviewerActions.md#listrecommendationfeedback)
- [ListRecommendations](AwsCodeguruReviewerActions.md#listrecommendations)
- [ListRepositoryAssociations](AwsCodeguruReviewerActions.md#listrepositoryassociations)
- [ListTagsForResource](AwsCodeguruReviewerActions.md#listtagsforresource)
- [ListThirdPartyRepositories](AwsCodeguruReviewerActions.md#listthirdpartyrepositories)
- [PutRecommendationFeedback](AwsCodeguruReviewerActions.md#putrecommendationfeedback)
- [TagResource](AwsCodeguruReviewerActions.md#tagresource)
- [UnTagResource](AwsCodeguruReviewerActions.md#untagresource)

## Enumeration Members

### AssociateRepository

• **AssociateRepository** = ``"codeguru-reviewer:AssociateRepository"``

Grants permission to associates a repository with Amazon CodeGuru Reviewer

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_AssociateRepository.html

#### Defined in

actions/codeguru-reviewer.ts:17

___

### CreateCodeReview

• **CreateCodeReview** = ``"codeguru-reviewer:CreateCodeReview"``

Grants permission to create a code review

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview.html

#### Defined in

actions/codeguru-reviewer.ts:23

___

### CreateConnectionToken

• **CreateConnectionToken** = ``"codeguru-reviewer:CreateConnectionToken"``

Grants permission to perform webbased oauth handshake for 3rd party providers

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/Welcome.html

#### Defined in

actions/codeguru-reviewer.ts:29

___

### DescribeCodeReview

• **DescribeCodeReview** = ``"codeguru-reviewer:DescribeCodeReview"``

Grants permission to describe a code review

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeCodeReview.html

#### Defined in

actions/codeguru-reviewer.ts:35

___

### DescribeRecommendationFeedback

• **DescribeRecommendationFeedback** = ``"codeguru-reviewer:DescribeRecommendationFeedback"``

Grants permission to describe a recommendation feedback on a code review

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRecommendationFeedback.html

#### Defined in

actions/codeguru-reviewer.ts:41

___

### DescribeRepositoryAssociation

• **DescribeRepositoryAssociation** = ``"codeguru-reviewer:DescribeRepositoryAssociation"``

Grants permission to describe a repository association

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html

#### Defined in

actions/codeguru-reviewer.ts:47

___

### DisassociateRepository

• **DisassociateRepository** = ``"codeguru-reviewer:DisassociateRepository"``

Grants permission to disassociate a repository with Amazon CodeGuru Reviewer

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DisassociateRepository.html

#### Defined in

actions/codeguru-reviewer.ts:53

___

### GetMetricsData

• **GetMetricsData** = ``"codeguru-reviewer:GetMetricsData"``

Grants permission to view pull request metrics in console

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/Welcome.html

#### Defined in

actions/codeguru-reviewer.ts:59

___

### ListCodeReviews

• **ListCodeReviews** = ``"codeguru-reviewer:ListCodeReviews"``

Grants permission to list summary of code reviews

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListCodeReviews.html

#### Defined in

actions/codeguru-reviewer.ts:65

___

### ListRecommendationFeedback

• **ListRecommendationFeedback** = ``"codeguru-reviewer:ListRecommendationFeedback"``

Grants permission to list summary of recommendation feedback on a code review

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRecommendationFeedback.html

#### Defined in

actions/codeguru-reviewer.ts:71

___

### ListRecommendations

• **ListRecommendations** = ``"codeguru-reviewer:ListRecommendations"``

Grants permission to list summary of recommendations on a code review

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRecommendations.html

#### Defined in

actions/codeguru-reviewer.ts:77

___

### ListRepositoryAssociations

• **ListRepositoryAssociations** = ``"codeguru-reviewer:ListRepositoryAssociations"``

Grants permission to list summary of repository associations

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html

#### Defined in

actions/codeguru-reviewer.ts:83

___

### ListTagsForResource

• **ListTagsForResource** = ``"codeguru-reviewer:ListTagsForResource"``

Grants permission to list the resource attached to a associated repository ARN

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListTagsForResource.html

#### Defined in

actions/codeguru-reviewer.ts:89

___

### ListThirdPartyRepositories

• **ListThirdPartyRepositories** = ``"codeguru-reviewer:ListThirdPartyRepositories"``

Grants permission to list 3rd party providers repositories in console

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/Welcome.html

#### Defined in

actions/codeguru-reviewer.ts:95

___

### PutRecommendationFeedback

• **PutRecommendationFeedback** = ``"codeguru-reviewer:PutRecommendationFeedback"``

Grants permission to put feedback for a recommendation on a code review

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_PutRecommendationFeedback.html

#### Defined in

actions/codeguru-reviewer.ts:101

___

### TagResource

• **TagResource** = ``"codeguru-reviewer:TagResource"``

Grants permission to attach resource tags to an associated repository ARN

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_TagResource.html

#### Defined in

actions/codeguru-reviewer.ts:107

___

### UnTagResource

• **UnTagResource** = ``"codeguru-reviewer:UnTagResource"``

Grants permission to disassociate resource tags from an associated repository A
RN

See https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_UntagResource.html

#### Defined in

actions/codeguru-reviewer.ts:114
