[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSupportActions

# Enumeration: AwsSupportActions

All IAM policy actions for AWS Support (SUPPORT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html

2024-02-12T09:59:23.303Z

## Table of contents

### Enumeration Members

- [AddAttachmentsToSet](AwsSupportActions.md#addattachmentstoset)
- [AddCommunicationToCase](AwsSupportActions.md#addcommunicationtocase)
- [CreateCase](AwsSupportActions.md#createcase)
- [DescribeAttachment](AwsSupportActions.md#describeattachment)
- [DescribeCaseAttributes](AwsSupportActions.md#describecaseattributes)
- [DescribeCases](AwsSupportActions.md#describecases)
- [DescribeCommunication](AwsSupportActions.md#describecommunication)
- [DescribeCommunications](AwsSupportActions.md#describecommunications)
- [DescribeCreateCaseOptions](AwsSupportActions.md#describecreatecaseoptions)
- [DescribeIssueTypes](AwsSupportActions.md#describeissuetypes)
- [DescribeServices](AwsSupportActions.md#describeservices)
- [DescribeSeverityLevels](AwsSupportActions.md#describeseveritylevels)
- [DescribeSupportLevel](AwsSupportActions.md#describesupportlevel)
- [DescribeSupportedLanguages](AwsSupportActions.md#describesupportedlanguages)
- [DescribeTrustedAdvisorCheckRefreshStatuses](AwsSupportActions.md#describetrustedadvisorcheckrefreshstatuses)
- [DescribeTrustedAdvisorCheckResult](AwsSupportActions.md#describetrustedadvisorcheckresult)
- [DescribeTrustedAdvisorCheckSummaries](AwsSupportActions.md#describetrustedadvisorchecksummaries)
- [DescribeTrustedAdvisorChecks](AwsSupportActions.md#describetrustedadvisorchecks)
- [InitiateCallForCase](AwsSupportActions.md#initiatecallforcase)
- [InitiateChatForCase](AwsSupportActions.md#initiatechatforcase)
- [PutCaseAttributes](AwsSupportActions.md#putcaseattributes)
- [RateCaseCommunication](AwsSupportActions.md#ratecasecommunication)
- [RefreshTrustedAdvisorCheck](AwsSupportActions.md#refreshtrustedadvisorcheck)
- [ResolveCase](AwsSupportActions.md#resolvecase)
- [SearchForCases](AwsSupportActions.md#searchforcases)

## Enumeration Members

### AddAttachmentsToSet

• **AddAttachmentsToSet** = ``"support:AddAttachmentsToSet"``

Grants permission to add one or more attachments to an AWS Support case

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddAttachmentsToSet.html

#### Defined in

actions/support.ts:17

___

### AddCommunicationToCase

• **AddCommunicationToCase** = ``"support:AddCommunicationToCase"``

Grants permission to add a customer communication to an AWS Support case

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddCommunicationToCase.html

#### Defined in

actions/support.ts:23

___

### CreateCase

• **CreateCase** = ``"support:CreateCase"``

Grants permission to creates a new AWS Support case

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CreateCase.html

#### Defined in

actions/support.ts:29

___

### DescribeAttachment

• **DescribeAttachment** = ``"support:DescribeAttachment"``

Grants permission to describe attachment detail

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeAttachment.html

#### Defined in

actions/support.ts:35

___

### DescribeCaseAttributes

• **DescribeCaseAttributes** = ``"support:DescribeCaseAttributes"``

Grants permission to allow secondary services to read AWS Support case attribut
es.This is an internally managed function

See https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html

#### Defined in

actions/support.ts:42

___

### DescribeCases

• **DescribeCases** = ``"support:DescribeCases"``

Grants permission to list AWS Support cases that matches the given inputs

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCases.html

#### Defined in

actions/support.ts:48

___

### DescribeCommunication

• **DescribeCommunication** = ``"support:DescribeCommunication"``

Grants permission to get a single communication and attachments for a single AW
S Support case

See https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html

#### Defined in

actions/support.ts:55

___

### DescribeCommunications

• **DescribeCommunications** = ``"support:DescribeCommunications"``

Grants permission to list the communications and attachments for one or more AW
S Support cases

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCommunications.html

#### Defined in

actions/support.ts:62

___

### DescribeCreateCaseOptions

• **DescribeCreateCaseOptions** = ``"support:DescribeCreateCaseOptions"``

Grants permission to describes the available options for creating a support cas
e

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCreateCaseOptions.html

#### Defined in

actions/support.ts:69

___

### DescribeIssueTypes

• **DescribeIssueTypes** = ``"support:DescribeIssueTypes"``

Grants permission to return issue types for AWS Support cases

See https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html

#### Defined in

actions/support.ts:75

___

### DescribeServices

• **DescribeServices** = ``"support:DescribeServices"``

Grants permission to list AWS services and categories that applies to each serv
ice

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeServices.html

#### Defined in

actions/support.ts:82

___

### DescribeSeverityLevels

• **DescribeSeverityLevels** = ``"support:DescribeSeverityLevels"``

Grants permission to list severity levels that can be assigned to an AWS Suppor
t case

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeSeverityLevels.html

#### Defined in

actions/support.ts:89

___

### DescribeSupportLevel

• **DescribeSupportLevel** = ``"support:DescribeSupportLevel"``

Grants permission to return the support level for an AWS Account identifier

See https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html

#### Defined in

actions/support.ts:95

___

### DescribeSupportedLanguages

• **DescribeSupportedLanguages** = ``"support:DescribeSupportedLanguages"``

Grants permission to describes the available support languages for a given cate
gory code, service code and issue type

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeSupportedLanguages.html

#### Defined in

actions/support.ts:102

___

### DescribeTrustedAdvisorCheckRefreshStatuses

• **DescribeTrustedAdvisorCheckRefreshStatuses** = ``"support:DescribeTrustedAdvisorCheckRefreshStatuses"``

Grants permission to get the status of a Trusted Advisor refresh check based on
a list of check identifiers

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckRefreshStatuses.html

#### Defined in

actions/support.ts:109

___

### DescribeTrustedAdvisorCheckResult

• **DescribeTrustedAdvisorCheckResult** = ``"support:DescribeTrustedAdvisorCheckResult"``

Grants permission to get the results of the Trusted Advisor check that has the
specified check identifier

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckResult.html

#### Defined in

actions/support.ts:116

___

### DescribeTrustedAdvisorCheckSummaries

• **DescribeTrustedAdvisorCheckSummaries** = ``"support:DescribeTrustedAdvisorCheckSummaries"``

Grants permission to get the summaries of the results of the Trusted Advisor ch
ecks that have the specified check identifiers

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckSummaries.html

#### Defined in

actions/support.ts:123

___

### DescribeTrustedAdvisorChecks

• **DescribeTrustedAdvisorChecks** = ``"support:DescribeTrustedAdvisorChecks"``

Grants permission to get a list of all available Trusted Advisor checks, includ
ing name, identifier, category and description

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorChecks.html

#### Defined in

actions/support.ts:130

___

### InitiateCallForCase

• **InitiateCallForCase** = ``"support:InitiateCallForCase"``

Grants permission to initiate a call on AWS Support Center. This is an internal
ly managed function

See https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html

#### Defined in

actions/support.ts:137

___

### InitiateChatForCase

• **InitiateChatForCase** = ``"support:InitiateChatForCase"``

Grants permission to initiate a chat on AWS Support Center.This is an internall
y managed function

See https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html

#### Defined in

actions/support.ts:144

___

### PutCaseAttributes

• **PutCaseAttributes** = ``"support:PutCaseAttributes"``

Grants permission to allow secondary services to attach attributes to AWS Suppo
rt cases. This is an internally managed function

See https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html

#### Defined in

actions/support.ts:151

___

### RateCaseCommunication

• **RateCaseCommunication** = ``"support:RateCaseCommunication"``

Grants permission to rate an AWS Support case communication

See https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html

#### Defined in

actions/support.ts:157

___

### RefreshTrustedAdvisorCheck

• **RefreshTrustedAdvisorCheck** = ``"support:RefreshTrustedAdvisorCheck"``

Grants permission to requests a refresh of the Trusted Advisor check that has t
he specified check identifier

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_RefreshTrustedAdvisorCheck.html

#### Defined in

actions/support.ts:164

___

### ResolveCase

• **ResolveCase** = ``"support:ResolveCase"``

Grants permission to resolve an AWS Support case

See https://docs.aws.amazon.com/awssupport/latest/APIReference/API_ResolveCase.html

#### Defined in

actions/support.ts:170

___

### SearchForCases

• **SearchForCases** = ``"support:SearchForCases"``

Grants permission to return a list of AWS Support cases that matches the given
inputs

See https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html

#### Defined in

actions/support.ts:177
