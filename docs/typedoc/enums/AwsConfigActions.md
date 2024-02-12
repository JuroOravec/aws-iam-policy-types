[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsConfigActions

# Enumeration: AwsConfigActions

All IAM policy actions for AWS Config (CONFIG)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconfig.html

2024-02-12T09:56:44.056Z

## Table of contents

### Enumeration Members

- [BatchGetAggregateResourceConfig](AwsConfigActions.md#batchgetaggregateresourceconfig)
- [BatchGetResourceConfig](AwsConfigActions.md#batchgetresourceconfig)
- [DeleteAggregationAuthorization](AwsConfigActions.md#deleteaggregationauthorization)
- [DeleteConfigRule](AwsConfigActions.md#deleteconfigrule)
- [DeleteConfigurationAggregator](AwsConfigActions.md#deleteconfigurationaggregator)
- [DeleteConfigurationRecorder](AwsConfigActions.md#deleteconfigurationrecorder)
- [DeleteConformancePack](AwsConfigActions.md#deleteconformancepack)
- [DeleteDeliveryChannel](AwsConfigActions.md#deletedeliverychannel)
- [DeleteEvaluationResults](AwsConfigActions.md#deleteevaluationresults)
- [DeleteOrganizationConfigRule](AwsConfigActions.md#deleteorganizationconfigrule)
- [DeleteOrganizationConformancePack](AwsConfigActions.md#deleteorganizationconformancepack)
- [DeletePendingAggregationRequest](AwsConfigActions.md#deletependingaggregationrequest)
- [DeleteRemediationConfiguration](AwsConfigActions.md#deleteremediationconfiguration)
- [DeleteRemediationExceptions](AwsConfigActions.md#deleteremediationexceptions)
- [DeleteResourceConfig](AwsConfigActions.md#deleteresourceconfig)
- [DeleteRetentionConfiguration](AwsConfigActions.md#deleteretentionconfiguration)
- [DeleteStoredQuery](AwsConfigActions.md#deletestoredquery)
- [DeliverConfigSnapshot](AwsConfigActions.md#deliverconfigsnapshot)
- [DescribeAggregateComplianceByConfigRules](AwsConfigActions.md#describeaggregatecompliancebyconfigrules)
- [DescribeAggregateComplianceByConformancePacks](AwsConfigActions.md#describeaggregatecompliancebyconformancepacks)
- [DescribeAggregationAuthorizations](AwsConfigActions.md#describeaggregationauthorizations)
- [DescribeComplianceByConfigRule](AwsConfigActions.md#describecompliancebyconfigrule)
- [DescribeComplianceByResource](AwsConfigActions.md#describecompliancebyresource)
- [DescribeConfigRuleEvaluationStatus](AwsConfigActions.md#describeconfigruleevaluationstatus)
- [DescribeConfigRules](AwsConfigActions.md#describeconfigrules)
- [DescribeConfigurationAggregatorSourcesStatus](AwsConfigActions.md#describeconfigurationaggregatorsourcesstatus)
- [DescribeConfigurationAggregators](AwsConfigActions.md#describeconfigurationaggregators)
- [DescribeConfigurationRecorderStatus](AwsConfigActions.md#describeconfigurationrecorderstatus)
- [DescribeConfigurationRecorders](AwsConfigActions.md#describeconfigurationrecorders)
- [DescribeConformancePackCompliance](AwsConfigActions.md#describeconformancepackcompliance)
- [DescribeConformancePackStatus](AwsConfigActions.md#describeconformancepackstatus)
- [DescribeConformancePacks](AwsConfigActions.md#describeconformancepacks)
- [DescribeDeliveryChannelStatus](AwsConfigActions.md#describedeliverychannelstatus)
- [DescribeDeliveryChannels](AwsConfigActions.md#describedeliverychannels)
- [DescribeOrganizationConfigRuleStatuses](AwsConfigActions.md#describeorganizationconfigrulestatuses)
- [DescribeOrganizationConfigRules](AwsConfigActions.md#describeorganizationconfigrules)
- [DescribeOrganizationConformancePackStatuses](AwsConfigActions.md#describeorganizationconformancepackstatuses)
- [DescribeOrganizationConformancePacks](AwsConfigActions.md#describeorganizationconformancepacks)
- [DescribePendingAggregationRequests](AwsConfigActions.md#describependingaggregationrequests)
- [DescribeRemediationConfigurations](AwsConfigActions.md#describeremediationconfigurations)
- [DescribeRemediationExceptions](AwsConfigActions.md#describeremediationexceptions)
- [DescribeRemediationExecutionStatus](AwsConfigActions.md#describeremediationexecutionstatus)
- [DescribeRetentionConfigurations](AwsConfigActions.md#describeretentionconfigurations)
- [GetAggregateComplianceDetailsByConfigRule](AwsConfigActions.md#getaggregatecompliancedetailsbyconfigrule)
- [GetAggregateConfigRuleComplianceSummary](AwsConfigActions.md#getaggregateconfigrulecompliancesummary)
- [GetAggregateConformancePackComplianceSummary](AwsConfigActions.md#getaggregateconformancepackcompliancesummary)
- [GetAggregateDiscoveredResourceCounts](AwsConfigActions.md#getaggregatediscoveredresourcecounts)
- [GetAggregateResourceConfig](AwsConfigActions.md#getaggregateresourceconfig)
- [GetComplianceDetailsByConfigRule](AwsConfigActions.md#getcompliancedetailsbyconfigrule)
- [GetComplianceDetailsByResource](AwsConfigActions.md#getcompliancedetailsbyresource)
- [GetComplianceSummaryByConfigRule](AwsConfigActions.md#getcompliancesummarybyconfigrule)
- [GetComplianceSummaryByResourceType](AwsConfigActions.md#getcompliancesummarybyresourcetype)
- [GetConformancePackComplianceDetails](AwsConfigActions.md#getconformancepackcompliancedetails)
- [GetConformancePackComplianceSummary](AwsConfigActions.md#getconformancepackcompliancesummary)
- [GetCustomRulePolicy](AwsConfigActions.md#getcustomrulepolicy)
- [GetDiscoveredResourceCounts](AwsConfigActions.md#getdiscoveredresourcecounts)
- [GetOrganizationConfigRuleDetailedStatus](AwsConfigActions.md#getorganizationconfigruledetailedstatus)
- [GetOrganizationConformancePackDetailedStatus](AwsConfigActions.md#getorganizationconformancepackdetailedstatus)
- [GetOrganizationCustomRulePolicy](AwsConfigActions.md#getorganizationcustomrulepolicy)
- [GetResourceConfigHistory](AwsConfigActions.md#getresourceconfighistory)
- [GetResourceEvaluationSummary](AwsConfigActions.md#getresourceevaluationsummary)
- [GetStoredQuery](AwsConfigActions.md#getstoredquery)
- [ListAggregateDiscoveredResources](AwsConfigActions.md#listaggregatediscoveredresources)
- [ListConformancePackComplianceScores](AwsConfigActions.md#listconformancepackcompliancescores)
- [ListDiscoveredResources](AwsConfigActions.md#listdiscoveredresources)
- [ListResourceEvaluations](AwsConfigActions.md#listresourceevaluations)
- [ListStoredQueries](AwsConfigActions.md#liststoredqueries)
- [ListTagsForResource](AwsConfigActions.md#listtagsforresource)
- [PutAggregationAuthorization](AwsConfigActions.md#putaggregationauthorization)
- [PutConfigRule](AwsConfigActions.md#putconfigrule)
- [PutConfigurationAggregator](AwsConfigActions.md#putconfigurationaggregator)
- [PutConfigurationRecorder](AwsConfigActions.md#putconfigurationrecorder)
- [PutConformancePack](AwsConfigActions.md#putconformancepack)
- [PutDeliveryChannel](AwsConfigActions.md#putdeliverychannel)
- [PutEvaluations](AwsConfigActions.md#putevaluations)
- [PutExternalEvaluation](AwsConfigActions.md#putexternalevaluation)
- [PutOrganizationConfigRule](AwsConfigActions.md#putorganizationconfigrule)
- [PutOrganizationConformancePack](AwsConfigActions.md#putorganizationconformancepack)
- [PutRemediationConfigurations](AwsConfigActions.md#putremediationconfigurations)
- [PutRemediationExceptions](AwsConfigActions.md#putremediationexceptions)
- [PutResourceConfig](AwsConfigActions.md#putresourceconfig)
- [PutRetentionConfiguration](AwsConfigActions.md#putretentionconfiguration)
- [PutStoredQuery](AwsConfigActions.md#putstoredquery)
- [SelectAggregateResourceConfig](AwsConfigActions.md#selectaggregateresourceconfig)
- [SelectResourceConfig](AwsConfigActions.md#selectresourceconfig)
- [StartConfigRulesEvaluation](AwsConfigActions.md#startconfigrulesevaluation)
- [StartConfigurationRecorder](AwsConfigActions.md#startconfigurationrecorder)
- [StartRemediationExecution](AwsConfigActions.md#startremediationexecution)
- [StartResourceEvaluation](AwsConfigActions.md#startresourceevaluation)
- [StopConfigurationRecorder](AwsConfigActions.md#stopconfigurationrecorder)
- [TagResource](AwsConfigActions.md#tagresource)
- [UntagResource](AwsConfigActions.md#untagresource)

## Enumeration Members

### BatchGetAggregateResourceConfig

• **BatchGetAggregateResourceConfig** = ``"config:BatchGetAggregateResourceConfig"``

Grants permission to return the current configuration items for resources that
are present in your AWS Config aggregator

See https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetAggregateResourceConfig.html

#### Defined in

actions/config.ts:18

___

### BatchGetResourceConfig

• **BatchGetResourceConfig** = ``"config:BatchGetResourceConfig"``

Grants permission to return the current configuration for one or more requested
resources

See https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetResourceConfig.html

#### Defined in

actions/config.ts:25

___

### DeleteAggregationAuthorization

• **DeleteAggregationAuthorization** = ``"config:DeleteAggregationAuthorization"``

Grants permission to delete the authorization granted to the specified configur
ation aggregator account in a specified region

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteAggregationAuthorization.html

#### Defined in

actions/config.ts:32

___

### DeleteConfigRule

• **DeleteConfigRule** = ``"config:DeleteConfigRule"``

Grants permission to delete the specified AWS Config rule and all of its evalua
tion results

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigRule.html

#### Defined in

actions/config.ts:39

___

### DeleteConfigurationAggregator

• **DeleteConfigurationAggregator** = ``"config:DeleteConfigurationAggregator"``

Grants permission to delete the specified configuration aggregator and the aggr
egated data associated with the aggregator

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationAggregator.html

#### Defined in

actions/config.ts:46

___

### DeleteConfigurationRecorder

• **DeleteConfigurationRecorder** = ``"config:DeleteConfigurationRecorder"``

Grants permission to delete the configuration recorder

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html

#### Defined in

actions/config.ts:52

___

### DeleteConformancePack

• **DeleteConformancePack** = ``"config:DeleteConformancePack"``

Grants permission to delete the specified conformance pack and all the AWS Conf
ig rules and all evaluation results within that conformance pack

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConformancePack.html

#### Defined in

actions/config.ts:59

___

### DeleteDeliveryChannel

• **DeleteDeliveryChannel** = ``"config:DeleteDeliveryChannel"``

Grants permission to delete the delivery channel

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html

#### Defined in

actions/config.ts:65

___

### DeleteEvaluationResults

• **DeleteEvaluationResults** = ``"config:DeleteEvaluationResults"``

Grants permission to delete the evaluation results for the specified Config rul
e

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteEvaluationResults.html

#### Defined in

actions/config.ts:72

___

### DeleteOrganizationConfigRule

• **DeleteOrganizationConfigRule** = ``"config:DeleteOrganizationConfigRule"``

Grants permission to delete the specified organization config rule and all of i
ts evaluation results from all member accounts in that organization

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConfigRule.html

#### Defined in

actions/config.ts:79

___

### DeleteOrganizationConformancePack

• **DeleteOrganizationConformancePack** = ``"config:DeleteOrganizationConformancePack"``

Grants permission to delete the specified organization conformance pack and all
of its evaluation results from all member accounts in that organization

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConformancePack.html

#### Defined in

actions/config.ts:86

___

### DeletePendingAggregationRequest

• **DeletePendingAggregationRequest** = ``"config:DeletePendingAggregationRequest"``

Grants permission to delete pending authorization requests for a specified aggr
egator account in a specified region

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeletePendingAggregationRequest.html

#### Defined in

actions/config.ts:93

___

### DeleteRemediationConfiguration

• **DeleteRemediationConfiguration** = ``"config:DeleteRemediationConfiguration"``

Grants permission to delete the remediation configuration

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationConfiguration.html

#### Defined in

actions/config.ts:99

___

### DeleteRemediationExceptions

• **DeleteRemediationExceptions** = ``"config:DeleteRemediationExceptions"``

Grants permission to delete one or more remediation exceptions for specific res
ource keys for a specific AWS Config Rule

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationExceptions.html

#### Defined in

actions/config.ts:106

___

### DeleteResourceConfig

• **DeleteResourceConfig** = ``"config:DeleteResourceConfig"``

Grants permission to record the configuration state for a custom resource that
has been deleted

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteResourceConfig.html

#### Defined in

actions/config.ts:113

___

### DeleteRetentionConfiguration

• **DeleteRetentionConfiguration** = ``"config:DeleteRetentionConfiguration"``

Grants permission to delete the retention configuration

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRetentionConfiguration.html

#### Defined in

actions/config.ts:119

___

### DeleteStoredQuery

• **DeleteStoredQuery** = ``"config:DeleteStoredQuery"``

Grants permission to delete the stored query for an AWS account in an AWS Regio
n

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteStoredQuery.html

#### Defined in

actions/config.ts:126

___

### DeliverConfigSnapshot

• **DeliverConfigSnapshot** = ``"config:DeliverConfigSnapshot"``

Grants permission to schedule delivery of a configuration snapshot to the Amazo
n S3 bucket in the specified delivery channel

See https://docs.aws.amazon.com/config/latest/APIReference/API_DeliverConfigSnapshot.html

#### Defined in

actions/config.ts:133

___

### DescribeAggregateComplianceByConfigRules

• **DescribeAggregateComplianceByConfigRules** = ``"config:DescribeAggregateComplianceByConfigRules"``

Grants permission to return a list of compliant and noncompliant rules with the
number of resources for compliant and noncompliant rules

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregateComplianceByConfigRules.html

#### Defined in

actions/config.ts:140

___

### DescribeAggregateComplianceByConformancePacks

• **DescribeAggregateComplianceByConformancePacks** = ``"config:DescribeAggregateComplianceByConformancePacks"``

Grants permission to return a list of compliant and noncompliant conformance pa
cks along with count of compliant, non-compliant and total rules within each co
nformance pack

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregateComplianceByConformancePacks.html

#### Defined in

actions/config.ts:148

___

### DescribeAggregationAuthorizations

• **DescribeAggregationAuthorizations** = ``"config:DescribeAggregationAuthorizations"``

Grants permission to return a list of authorizations granted to various aggrega
tor accounts and regions

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregationAuthorizations.html

#### Defined in

actions/config.ts:155

___

### DescribeComplianceByConfigRule

• **DescribeComplianceByConfigRule** = ``"config:DescribeComplianceByConfigRule"``

Grants permission to indicate whether the specified AWS Config rules are compli
ant

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByConfigRule.html

#### Defined in

actions/config.ts:162

___

### DescribeComplianceByResource

• **DescribeComplianceByResource** = ``"config:DescribeComplianceByResource"``

Grants permission to indicate whether the specified AWS resources are compliant

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByResource.html

#### Defined in

actions/config.ts:168

___

### DescribeConfigRuleEvaluationStatus

• **DescribeConfigRuleEvaluationStatus** = ``"config:DescribeConfigRuleEvaluationStatus"``

Grants permission to return status information for each of your AWS managed Con
fig rules

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRuleEvaluationStatus.html

#### Defined in

actions/config.ts:175

___

### DescribeConfigRules

• **DescribeConfigRules** = ``"config:DescribeConfigRules"``

Grants permission to return details about your AWS Config rules

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRules.html

#### Defined in

actions/config.ts:181

___

### DescribeConfigurationAggregatorSourcesStatus

• **DescribeConfigurationAggregatorSourcesStatus** = ``"config:DescribeConfigurationAggregatorSourcesStatus"``

Grants permission to return status information for sources within an aggregator

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregatorSourcesStatus.html

#### Defined in

actions/config.ts:187

___

### DescribeConfigurationAggregators

• **DescribeConfigurationAggregators** = ``"config:DescribeConfigurationAggregators"``

Grants permission to return the details of one or more configuration aggregator
s

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregators.html

#### Defined in

actions/config.ts:194

___

### DescribeConfigurationRecorderStatus

• **DescribeConfigurationRecorderStatus** = ``"config:DescribeConfigurationRecorderStatus"``

Grants permission to return the current status of the specified configuration r
ecorder

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html

#### Defined in

actions/config.ts:201

___

### DescribeConfigurationRecorders

• **DescribeConfigurationRecorders** = ``"config:DescribeConfigurationRecorders"``

Grants permission to return the names of one or more specified configuration re
corders

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html

#### Defined in

actions/config.ts:208

___

### DescribeConformancePackCompliance

• **DescribeConformancePackCompliance** = ``"config:DescribeConformancePackCompliance"``

Grants permission to return compliance information for each rule in that confor
mance pack

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackCompliance.html

#### Defined in

actions/config.ts:215

___

### DescribeConformancePackStatus

• **DescribeConformancePackStatus** = ``"config:DescribeConformancePackStatus"``

Grants permission to provide one or more conformance packs deployment status

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackStatus.html

#### Defined in

actions/config.ts:221

___

### DescribeConformancePacks

• **DescribeConformancePacks** = ``"config:DescribeConformancePacks"``

Grants permission to return a list of one or more conformance packs

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePacks.html

#### Defined in

actions/config.ts:227

___

### DescribeDeliveryChannelStatus

• **DescribeDeliveryChannelStatus** = ``"config:DescribeDeliveryChannelStatus"``

Grants permission to return the current status of the specified delivery channe
l

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannelStatus.html

#### Defined in

actions/config.ts:234

___

### DescribeDeliveryChannels

• **DescribeDeliveryChannels** = ``"config:DescribeDeliveryChannels"``

Grants permission to return details about the specified delivery channel

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannels.html

#### Defined in

actions/config.ts:240

___

### DescribeOrganizationConfigRuleStatuses

• **DescribeOrganizationConfigRuleStatuses** = ``"config:DescribeOrganizationConfigRuleStatuses"``

Grants permission to provide organization config rule deployment status for an
organization

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRuleStatuses.html

#### Defined in

actions/config.ts:247

___

### DescribeOrganizationConfigRules

• **DescribeOrganizationConfigRules** = ``"config:DescribeOrganizationConfigRules"``

Grants permission to return a list of organization config rules

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRules.html

#### Defined in

actions/config.ts:253

___

### DescribeOrganizationConformancePackStatuses

• **DescribeOrganizationConformancePackStatuses** = ``"config:DescribeOrganizationConformancePackStatuses"``

Grants permission to provide organization conformance pack deployment status fo
r an organization

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePackStatuses.html

#### Defined in

actions/config.ts:260

___

### DescribeOrganizationConformancePacks

• **DescribeOrganizationConformancePacks** = ``"config:DescribeOrganizationConformancePacks"``

Grants permission to return a list of organization conformance packs

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePacks.html

#### Defined in

actions/config.ts:266

___

### DescribePendingAggregationRequests

• **DescribePendingAggregationRequests** = ``"config:DescribePendingAggregationRequests"``

Grants permission to return a list of all pending aggregation requests

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribePendingAggregationRequests.html

#### Defined in

actions/config.ts:272

___

### DescribeRemediationConfigurations

• **DescribeRemediationConfigurations** = ``"config:DescribeRemediationConfigurations"``

Grants permission to return the details of one or more remediation configuratio
ns

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationConfigurations.html

#### Defined in

actions/config.ts:279

___

### DescribeRemediationExceptions

• **DescribeRemediationExceptions** = ``"config:DescribeRemediationExceptions"``

Grants permission to return the details of one or more remediation exceptions

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExceptions.html

#### Defined in

actions/config.ts:285

___

### DescribeRemediationExecutionStatus

• **DescribeRemediationExecutionStatus** = ``"config:DescribeRemediationExecutionStatus"``

Grants permission to provide a detailed view of a Remediation Execution for a s
et of resources including state, timestamps and any error messages for steps th
at have failed

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExecutionStatus.html

#### Defined in

actions/config.ts:293

___

### DescribeRetentionConfigurations

• **DescribeRetentionConfigurations** = ``"config:DescribeRetentionConfigurations"``

Grants permission to return the details of one or more retention configurations

See https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRetentionConfigurations.html

#### Defined in

actions/config.ts:299

___

### GetAggregateComplianceDetailsByConfigRule

• **GetAggregateComplianceDetailsByConfigRule** = ``"config:GetAggregateComplianceDetailsByConfigRule"``

Grants permission to return the evaluation results for the specified AWS Config
rule for a specific resource in a rule

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateComplianceDetailsByConfigRule.html

#### Defined in

actions/config.ts:306

___

### GetAggregateConfigRuleComplianceSummary

• **GetAggregateConfigRuleComplianceSummary** = ``"config:GetAggregateConfigRuleComplianceSummary"``

Grants permission to return the number of compliant and noncompliant rules for
one or more accounts and regions in an aggregator

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateConfigRuleComplianceSummary.html

#### Defined in

actions/config.ts:313

___

### GetAggregateConformancePackComplianceSummary

• **GetAggregateConformancePackComplianceSummary** = ``"config:GetAggregateConformancePackComplianceSummary"``

Grants permission to return the number of compliant and noncompliant conformanc
e packs for one or more accounts and regions in an aggregator

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateConformancePackComplianceSummary.html

#### Defined in

actions/config.ts:320

___

### GetAggregateDiscoveredResourceCounts

• **GetAggregateDiscoveredResourceCounts** = ``"config:GetAggregateDiscoveredResourceCounts"``

Grants permission to return the resource counts across accounts and regions tha
t are present in your AWS Config aggregator

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateDiscoveredResourceCounts.html

#### Defined in

actions/config.ts:327

___

### GetAggregateResourceConfig

• **GetAggregateResourceConfig** = ``"config:GetAggregateResourceConfig"``

Grants permission to return configuration item that is aggregated for your spec
ific resource in a specific source account and region

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateResourceConfig.html

#### Defined in

actions/config.ts:334

___

### GetComplianceDetailsByConfigRule

• **GetComplianceDetailsByConfigRule** = ``"config:GetComplianceDetailsByConfigRule"``

Grants permission to return the evaluation results for the specified AWS Config
rule

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByConfigRule.html

#### Defined in

actions/config.ts:341

___

### GetComplianceDetailsByResource

• **GetComplianceDetailsByResource** = ``"config:GetComplianceDetailsByResource"``

Grants permission to return the evaluation results for the specified AWS resour
ce

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html

#### Defined in

actions/config.ts:348

___

### GetComplianceSummaryByConfigRule

• **GetComplianceSummaryByConfigRule** = ``"config:GetComplianceSummaryByConfigRule"``

Grants permission to return the number of AWS Config rules that are compliant a
nd noncompliant, up to a maximum of 25 for each

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByConfigRule.html

#### Defined in

actions/config.ts:355

___

### GetComplianceSummaryByResourceType

• **GetComplianceSummaryByResourceType** = ``"config:GetComplianceSummaryByResourceType"``

Grants permission to return the number of resources that are compliant and the
number that are noncompliant

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByResourceType.html

#### Defined in

actions/config.ts:362

___

### GetConformancePackComplianceDetails

• **GetConformancePackComplianceDetails** = ``"config:GetConformancePackComplianceDetails"``

Grants permission to return compliance details of a conformance pack for all AW
S resources that are monitered by conformance pack

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceDetails.html

#### Defined in

actions/config.ts:369

___

### GetConformancePackComplianceSummary

• **GetConformancePackComplianceSummary** = ``"config:GetConformancePackComplianceSummary"``

Grants permission to provide compliance summary for one or more conformance pac
ks

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceSummary.html

#### Defined in

actions/config.ts:376

___

### GetCustomRulePolicy

• **GetCustomRulePolicy** = ``"config:GetCustomRulePolicy"``

Grants permission to return the policy definition containing the logic for your
AWS Config Custom Policy rule

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetCustomRulePolicy.html

#### Defined in

actions/config.ts:383

___

### GetDiscoveredResourceCounts

• **GetDiscoveredResourceCounts** = ``"config:GetDiscoveredResourceCounts"``

Grants permission to return the resource types, the number of each resource typ
e, and the total number of resources that AWS Config is recording in this regio
n for your AWS account

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetDiscoveredResourceCounts.html

#### Defined in

actions/config.ts:391

___

### GetOrganizationConfigRuleDetailedStatus

• **GetOrganizationConfigRuleDetailedStatus** = ``"config:GetOrganizationConfigRuleDetailedStatus"``

Grants permission to return detailed status for each member account within an o
rganization for a given organization config rule

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConfigRuleDetailedStatus.html

#### Defined in

actions/config.ts:398

___

### GetOrganizationConformancePackDetailedStatus

• **GetOrganizationConformancePackDetailedStatus** = ``"config:GetOrganizationConformancePackDetailedStatus"``

Grants permission to return detailed status for each member account within an o
rganization for a given organization conformance pack

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConformancePackDetailedStatus.html

#### Defined in

actions/config.ts:405

___

### GetOrganizationCustomRulePolicy

• **GetOrganizationCustomRulePolicy** = ``"config:GetOrganizationCustomRulePolicy"``

Grants permission to return the policy definition containing the logic for your
organization AWS Config Custom Policy rule

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationCustomRulePolicy.html

#### Defined in

actions/config.ts:412

___

### GetResourceConfigHistory

• **GetResourceConfigHistory** = ``"config:GetResourceConfigHistory"``

Grants permission to return a list of configuration items for the specified res
ource

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceConfigHistory.html

#### Defined in

actions/config.ts:419

___

### GetResourceEvaluationSummary

• **GetResourceEvaluationSummary** = ``"config:GetResourceEvaluationSummary"``

Grants permission to return the summary of resource evaluations for a specific
resource evaluation ID

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html

#### Defined in

actions/config.ts:426

___

### GetStoredQuery

• **GetStoredQuery** = ``"config:GetStoredQuery"``

Grants permission to return the details of a specific stored query

See https://docs.aws.amazon.com/config/latest/APIReference/API_GetStoredQuery.html

#### Defined in

actions/config.ts:432

___

### ListAggregateDiscoveredResources

• **ListAggregateDiscoveredResources** = ``"config:ListAggregateDiscoveredResources"``

Grants permission to accept a resource type and returns a list of resource iden
tifiers that are aggregated for a specific resource type across accounts and re
gions

See https://docs.aws.amazon.com/config/latest/APIReference/API_ListAggregateDiscoveredResources.html

#### Defined in

actions/config.ts:440

___

### ListConformancePackComplianceScores

• **ListConformancePackComplianceScores** = ``"config:ListConformancePackComplianceScores"``

Grants permission to return the percentage of compliant rule-resource combinati
ons in a conformance pack compared to the number of total possible rule-resourc
e combinations

See https://docs.aws.amazon.com/config/latest/APIReference/API_ListConformancePackComplianceScores.html

#### Defined in

actions/config.ts:448

___

### ListDiscoveredResources

• **ListDiscoveredResources** = ``"config:ListDiscoveredResources"``

Grants permission to accept a resource type and returns a list of resource iden
tifiers for the resources of that type

See https://docs.aws.amazon.com/config/latest/APIReference/API_ListDiscoveredResources.html

#### Defined in

actions/config.ts:455

___

### ListResourceEvaluations

• **ListResourceEvaluations** = ``"config:ListResourceEvaluations"``

Grants permission to list the resource evaluation summaries for an AWS account
in an AWS Region

See https://docs.aws.amazon.com/config/latest/APIReference/API_ListResourceEvaluations.html

#### Defined in

actions/config.ts:462

___

### ListStoredQueries

• **ListStoredQueries** = ``"config:ListStoredQueries"``

Grants permission to list the stored queries for an AWS account in an AWS Regio
n

See https://docs.aws.amazon.com/config/latest/APIReference/API_ListStoredQueries.html

#### Defined in

actions/config.ts:469

___

### ListTagsForResource

• **ListTagsForResource** = ``"config:ListTagsForResource"``

Grants permission to list the tags for AWS Config resource

See https://docs.aws.amazon.com/config/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/config.ts:475

___

### PutAggregationAuthorization

• **PutAggregationAuthorization** = ``"config:PutAggregationAuthorization"``

Grants permission to authorize the aggregator account and region to collect dat
a from the source account and region

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutAggregationAuthorization.html

#### Defined in

actions/config.ts:482

___

### PutConfigRule

• **PutConfigRule** = ``"config:PutConfigRule"``

Grants permission to add or update an AWS Config rule for evaluating whether yo
ur AWS resources comply with your desired configurations

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html

#### Defined in

actions/config.ts:489

___

### PutConfigurationAggregator

• **PutConfigurationAggregator** = ``"config:PutConfigurationAggregator"``

Grants permission to create and update the configuration aggregator with the se
lected source accounts and regions

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationAggregator.html

#### Defined in

actions/config.ts:496

___

### PutConfigurationRecorder

• **PutConfigurationRecorder** = ``"config:PutConfigurationRecorder"``

Grants permission to create a new configuration recorder to record the selected
resource configurations

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html

#### Defined in

actions/config.ts:503

___

### PutConformancePack

• **PutConformancePack** = ``"config:PutConformancePack"``

Grants permission to create or update a conformance pack

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html

#### Defined in

actions/config.ts:509

___

### PutDeliveryChannel

• **PutDeliveryChannel** = ``"config:PutDeliveryChannel"``

Grants permission to create a delivery channel object to deliver configuration
information to an Amazon S3 bucket and Amazon SNS topic

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutDeliveryChannel.html

#### Defined in

actions/config.ts:516

___

### PutEvaluations

• **PutEvaluations** = ``"config:PutEvaluations"``

Grants permission to be used by an AWS Lambda function to deliver evaluation re
sults to AWS Config

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutEvaluations.html

#### Defined in

actions/config.ts:523

___

### PutExternalEvaluation

• **PutExternalEvaluation** = ``"config:PutExternalEvaluation"``

Grants permission to deliver evaluation result to AWS Config

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutExternalEvaluation.html

#### Defined in

actions/config.ts:529

___

### PutOrganizationConfigRule

• **PutOrganizationConfigRule** = ``"config:PutOrganizationConfigRule"``

Grants permission to add or update organization config rule for your entire org
anization evaluating whether your AWS resources comply with your desired config
urations

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html

#### Defined in

actions/config.ts:537

___

### PutOrganizationConformancePack

• **PutOrganizationConformancePack** = ``"config:PutOrganizationConformancePack"``

Grants permission to add or update organization conformance pack for your entir
e organization evaluating whether your AWS resources comply with your desired c
onfigurations

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html

#### Defined in

actions/config.ts:545

___

### PutRemediationConfigurations

• **PutRemediationConfigurations** = ``"config:PutRemediationConfigurations"``

Grants permission to add or update the remediation configuration with a specifi
c AWS Config rule with the selected target or action

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationConfigurations.html

#### Defined in

actions/config.ts:552

___

### PutRemediationExceptions

• **PutRemediationExceptions** = ``"config:PutRemediationExceptions"``

Grants permission to add or update remediation exceptions for specific resource
s for a specific AWS Config rule

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationExceptions.html

#### Defined in

actions/config.ts:559

___

### PutResourceConfig

• **PutResourceConfig** = ``"config:PutResourceConfig"``

Grants permission to record the configuration state for the resource provided i
n the request

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutResourceConfig.html

#### Defined in

actions/config.ts:566

___

### PutRetentionConfiguration

• **PutRetentionConfiguration** = ``"config:PutRetentionConfiguration"``

Grants permission to create and update the retention configuration with details
about retention period (number of days) that AWS Config stores your historical
information

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutRetentionConfiguration.html

#### Defined in

actions/config.ts:574

___

### PutStoredQuery

• **PutStoredQuery** = ``"config:PutStoredQuery"``

Grants permission to save a new query or updates an existing saved query

See https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html

#### Defined in

actions/config.ts:580

___

### SelectAggregateResourceConfig

• **SelectAggregateResourceConfig** = ``"config:SelectAggregateResourceConfig"``

Grants permission to accept a structured query language (SQL) SELECT command an
d an aggregator to query configuration state of AWS resources across multiple a
ccounts and regions, performs the corresponding search, and returns resource co
nfigurations matching the properties

See https://docs.aws.amazon.com/config/latest/APIReference/API_SelectAggregateResourceConfig.html

#### Defined in

actions/config.ts:589

___

### SelectResourceConfig

• **SelectResourceConfig** = ``"config:SelectResourceConfig"``

Grants permission to accept a structured query language (SQL) SELECT command, p
erforms the corresponding search, and returns resource configurations matching
the properties

See https://docs.aws.amazon.com/config/latest/APIReference/API_SelectResourceConfig.html

#### Defined in

actions/config.ts:597

___

### StartConfigRulesEvaluation

• **StartConfigRulesEvaluation** = ``"config:StartConfigRulesEvaluation"``

Grants permission to evaluate your resources against the specified Config rules

See https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigRulesEvaluation.html

#### Defined in

actions/config.ts:603

___

### StartConfigurationRecorder

• **StartConfigurationRecorder** = ``"config:StartConfigurationRecorder"``

Grants permission to start recording configurations of the AWS resources you ha
ve selected to record in your AWS account

See https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html

#### Defined in

actions/config.ts:610

___

### StartRemediationExecution

• **StartRemediationExecution** = ``"config:StartRemediationExecution"``

Grants permission to run an on-demand remediation for the specified AWS Config
rules against the last known remediation configuration

See https://docs.aws.amazon.com/config/latest/APIReference/API_StartRemediationExecution.html

#### Defined in

actions/config.ts:617

___

### StartResourceEvaluation

• **StartResourceEvaluation** = ``"config:StartResourceEvaluation"``

Grants permission to evaluate your resource details against the AWS Config rule
s in your account

See https://docs.aws.amazon.com/config/latest/APIReference/API_StartResourceEvaluation.html

#### Defined in

actions/config.ts:624

___

### StopConfigurationRecorder

• **StopConfigurationRecorder** = ``"config:StopConfigurationRecorder"``

Grants permission to stop recording configurations of the AWS resources you hav
e selected to record in your AWS account

See https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html

#### Defined in

actions/config.ts:631

___

### TagResource

• **TagResource** = ``"config:TagResource"``

Grants permission to associate the specified tags to a resource with the specif
ied resourceArn

See https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html

#### Defined in

actions/config.ts:638

___

### UntagResource

• **UntagResource** = ``"config:UntagResource"``

Grants permission to delete specified tags from a resource

See https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html

#### Defined in

actions/config.ts:644
