[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsApsActions

# Enumeration: AwsApsActions

All IAM policy actions for Amazon Managed Service for Prometheus (APS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedserviceforprometheus.html

2024-02-12T09:58:12.397Z

## Table of contents

### Enumeration Members

- [CreateAlertManagerAlerts](AwsApsActions.md#createalertmanageralerts)
- [CreateAlertManagerDefinition](AwsApsActions.md#createalertmanagerdefinition)
- [CreateLoggingConfiguration](AwsApsActions.md#createloggingconfiguration)
- [CreateRuleGroupsNamespace](AwsApsActions.md#createrulegroupsnamespace)
- [CreateScraper](AwsApsActions.md#createscraper)
- [CreateWorkspace](AwsApsActions.md#createworkspace)
- [DeleteAlertManagerDefinition](AwsApsActions.md#deletealertmanagerdefinition)
- [DeleteAlertManagerSilence](AwsApsActions.md#deletealertmanagersilence)
- [DeleteLoggingConfiguration](AwsApsActions.md#deleteloggingconfiguration)
- [DeleteRuleGroupsNamespace](AwsApsActions.md#deleterulegroupsnamespace)
- [DeleteScraper](AwsApsActions.md#deletescraper)
- [DeleteWorkspace](AwsApsActions.md#deleteworkspace)
- [DescribeAlertManagerDefinition](AwsApsActions.md#describealertmanagerdefinition)
- [DescribeLoggingConfiguration](AwsApsActions.md#describeloggingconfiguration)
- [DescribeRuleGroupsNamespace](AwsApsActions.md#describerulegroupsnamespace)
- [DescribeScraper](AwsApsActions.md#describescraper)
- [DescribeWorkspace](AwsApsActions.md#describeworkspace)
- [GetAlertManagerSilence](AwsApsActions.md#getalertmanagersilence)
- [GetAlertManagerStatus](AwsApsActions.md#getalertmanagerstatus)
- [GetDefaultScraperConfiguration](AwsApsActions.md#getdefaultscraperconfiguration)
- [GetLabels](AwsApsActions.md#getlabels)
- [GetMetricMetadata](AwsApsActions.md#getmetricmetadata)
- [GetSeries](AwsApsActions.md#getseries)
- [ListAlertManagerAlertGroups](AwsApsActions.md#listalertmanageralertgroups)
- [ListAlertManagerAlerts](AwsApsActions.md#listalertmanageralerts)
- [ListAlertManagerReceivers](AwsApsActions.md#listalertmanagerreceivers)
- [ListAlertManagerSilences](AwsApsActions.md#listalertmanagersilences)
- [ListAlerts](AwsApsActions.md#listalerts)
- [ListRuleGroupsNamespaces](AwsApsActions.md#listrulegroupsnamespaces)
- [ListRules](AwsApsActions.md#listrules)
- [ListScrapers](AwsApsActions.md#listscrapers)
- [ListTagsForResource](AwsApsActions.md#listtagsforresource)
- [ListWorkspaces](AwsApsActions.md#listworkspaces)
- [PutAlertManagerDefinition](AwsApsActions.md#putalertmanagerdefinition)
- [PutAlertManagerSilences](AwsApsActions.md#putalertmanagersilences)
- [PutRuleGroupsNamespace](AwsApsActions.md#putrulegroupsnamespace)
- [QueryMetrics](AwsApsActions.md#querymetrics)
- [RemoteWrite](AwsApsActions.md#remotewrite)
- [TagResource](AwsApsActions.md#tagresource)
- [UntagResource](AwsApsActions.md#untagresource)
- [UpdateLoggingConfiguration](AwsApsActions.md#updateloggingconfiguration)
- [UpdateWorkspaceAlias](AwsApsActions.md#updateworkspacealias)

## Enumeration Members

### CreateAlertManagerAlerts

• **CreateAlertManagerAlerts** = ``"aps:CreateAlertManagerAlerts"``

Grants permission to create alerts

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateAlertManagerAlerts

#### Defined in

actions/aps.ts:17

___

### CreateAlertManagerDefinition

• **CreateAlertManagerDefinition** = ``"aps:CreateAlertManagerDefinition"``

Grants permission to create an alert manager definition

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateAlertManagerDefinition

#### Defined in

actions/aps.ts:23

___

### CreateLoggingConfiguration

• **CreateLoggingConfiguration** = ``"aps:CreateLoggingConfiguration"``

Grants permission to create a logging configuration

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateLoggingConfiguration

#### Defined in

actions/aps.ts:29

___

### CreateRuleGroupsNamespace

• **CreateRuleGroupsNamespace** = ``"aps:CreateRuleGroupsNamespace"``

Grants permission to create a rule groups namespace

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateRuleGroupsNamespace

#### Defined in

actions/aps.ts:35

___

### CreateScraper

• **CreateScraper** = ``"aps:CreateScraper"``

Grants permission to create a scraper

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateScraper

#### Defined in

actions/aps.ts:41

___

### CreateWorkspace

• **CreateWorkspace** = ``"aps:CreateWorkspace"``

Grants permission to create a workspace

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateWorkspace

#### Defined in

actions/aps.ts:47

___

### DeleteAlertManagerDefinition

• **DeleteAlertManagerDefinition** = ``"aps:DeleteAlertManagerDefinition"``

Grants permission to delete an alert manager definition

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteAlertManagerDefinition

#### Defined in

actions/aps.ts:53

___

### DeleteAlertManagerSilence

• **DeleteAlertManagerSilence** = ``"aps:DeleteAlertManagerSilence"``

Grants permission to delete a silence

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteAlertManagerSilence

#### Defined in

actions/aps.ts:59

___

### DeleteLoggingConfiguration

• **DeleteLoggingConfiguration** = ``"aps:DeleteLoggingConfiguration"``

Grants permission to delete a logging configuration

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteLoggingConfiguration

#### Defined in

actions/aps.ts:65

___

### DeleteRuleGroupsNamespace

• **DeleteRuleGroupsNamespace** = ``"aps:DeleteRuleGroupsNamespace"``

Grants permission to delete a rule groups namespace

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteRuleGroupsNamespace

#### Defined in

actions/aps.ts:71

___

### DeleteScraper

• **DeleteScraper** = ``"aps:DeleteScraper"``

Grants permission to delete a scraper

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteScraper

#### Defined in

actions/aps.ts:77

___

### DeleteWorkspace

• **DeleteWorkspace** = ``"aps:DeleteWorkspace"``

Grants permission to delete a workspace

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteWorkspace

#### Defined in

actions/aps.ts:83

___

### DescribeAlertManagerDefinition

• **DescribeAlertManagerDefinition** = ``"aps:DescribeAlertManagerDefinition"``

Grants permission to describe an alert manager definition

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeAlertManagerDefinition

#### Defined in

actions/aps.ts:89

___

### DescribeLoggingConfiguration

• **DescribeLoggingConfiguration** = ``"aps:DescribeLoggingConfiguration"``

Grants permission to describe a logging configuration

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeLoggingConfiguration

#### Defined in

actions/aps.ts:95

___

### DescribeRuleGroupsNamespace

• **DescribeRuleGroupsNamespace** = ``"aps:DescribeRuleGroupsNamespace"``

Grants permission to describe a rule groups namespace

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeRuleGroupsNamespace

#### Defined in

actions/aps.ts:101

___

### DescribeScraper

• **DescribeScraper** = ``"aps:DescribeScraper"``

Grants permission to describe a scraper

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeScraper

#### Defined in

actions/aps.ts:107

___

### DescribeWorkspace

• **DescribeWorkspace** = ``"aps:DescribeWorkspace"``

Grants permission to describe a workspace

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeWorkspace

#### Defined in

actions/aps.ts:113

___

### GetAlertManagerSilence

• **GetAlertManagerSilence** = ``"aps:GetAlertManagerSilence"``

Grants permission to get a silence

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetAlertManagerSilence

#### Defined in

actions/aps.ts:119

___

### GetAlertManagerStatus

• **GetAlertManagerStatus** = ``"aps:GetAlertManagerStatus"``

Grants permission to get current status of an alertmanager

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetAlertManagerStatus

#### Defined in

actions/aps.ts:125

___

### GetDefaultScraperConfiguration

• **GetDefaultScraperConfiguration** = ``"aps:GetDefaultScraperConfiguration"``

Grants permission to get default scraper configuration

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetDefaultScraperConfiguration

#### Defined in

actions/aps.ts:131

___

### GetLabels

• **GetLabels** = ``"aps:GetLabels"``

Grants permission to retrieve AMP workspace labels

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetLabels

#### Defined in

actions/aps.ts:137

___

### GetMetricMetadata

• **GetMetricMetadata** = ``"aps:GetMetricMetadata"``

Grants permission to retrieve the metadata for AMP workspace metrics

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetMetricMetadata

#### Defined in

actions/aps.ts:143

___

### GetSeries

• **GetSeries** = ``"aps:GetSeries"``

Grants permission to retrieve AMP workspace time series data

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetSeries

#### Defined in

actions/aps.ts:149

___

### ListAlertManagerAlertGroups

• **ListAlertManagerAlertGroups** = ``"aps:ListAlertManagerAlertGroups"``

Grants permission to list groups

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlertManagerAlertGroups

#### Defined in

actions/aps.ts:155

___

### ListAlertManagerAlerts

• **ListAlertManagerAlerts** = ``"aps:ListAlertManagerAlerts"``

Grants permission to list alerts

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlertManagerAlerts

#### Defined in

actions/aps.ts:161

___

### ListAlertManagerReceivers

• **ListAlertManagerReceivers** = ``"aps:ListAlertManagerReceivers"``

Grants permission to list receivers

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlertManagerReceivers

#### Defined in

actions/aps.ts:167

___

### ListAlertManagerSilences

• **ListAlertManagerSilences** = ``"aps:ListAlertManagerSilences"``

Grants permission to list silences

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlertManagerSilences

#### Defined in

actions/aps.ts:173

___

### ListAlerts

• **ListAlerts** = ``"aps:ListAlerts"``

Grants permission to list active alerts

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlerts

#### Defined in

actions/aps.ts:179

___

### ListRuleGroupsNamespaces

• **ListRuleGroupsNamespaces** = ``"aps:ListRuleGroupsNamespaces"``

Grants permission to list rule groups namespaces

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListRuleGroupsNamespaces

#### Defined in

actions/aps.ts:185

___

### ListRules

• **ListRules** = ``"aps:ListRules"``

Grants permission to list alerting and recording rules

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListRules

#### Defined in

actions/aps.ts:191

___

### ListScrapers

• **ListScrapers** = ``"aps:ListScrapers"``

Grants permission to list scrapers

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListScrapers

#### Defined in

actions/aps.ts:197

___

### ListTagsForResource

• **ListTagsForResource** = ``"aps:ListTagsForResource"``

Grants permission to list tags on an AMP resource

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListTagsForResource

#### Defined in

actions/aps.ts:203

___

### ListWorkspaces

• **ListWorkspaces** = ``"aps:ListWorkspaces"``

Grants permission to list workspaces

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListWorkspaces

#### Defined in

actions/aps.ts:209

___

### PutAlertManagerDefinition

• **PutAlertManagerDefinition** = ``"aps:PutAlertManagerDefinition"``

Grants permission to update an alert manager definition

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-PutAlertManagerDefinition

#### Defined in

actions/aps.ts:215

___

### PutAlertManagerSilences

• **PutAlertManagerSilences** = ``"aps:PutAlertManagerSilences"``

Grants permission to create or update a silence

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-PutAlertManagerSilences

#### Defined in

actions/aps.ts:221

___

### PutRuleGroupsNamespace

• **PutRuleGroupsNamespace** = ``"aps:PutRuleGroupsNamespace"``

Grants permission to update a rule groups namespace

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-PutRuleGroupsNamespace

#### Defined in

actions/aps.ts:227

___

### QueryMetrics

• **QueryMetrics** = ``"aps:QueryMetrics"``

Grants permission to run a query on AMP workspace metrics

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-QueryMetrics

#### Defined in

actions/aps.ts:233

___

### RemoteWrite

• **RemoteWrite** = ``"aps:RemoteWrite"``

Grants permission to perform a remote write operation to initiate the streaming
of metrics to AMP workspace

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-RemoteWrite

#### Defined in

actions/aps.ts:240

___

### TagResource

• **TagResource** = ``"aps:TagResource"``

Grants permission to tag an AMP resource

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-TagResource

#### Defined in

actions/aps.ts:246

___

### UntagResource

• **UntagResource** = ``"aps:UntagResource"``

Grants permission to untag an AMP resource

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-UntagResource

#### Defined in

actions/aps.ts:252

___

### UpdateLoggingConfiguration

• **UpdateLoggingConfiguration** = ``"aps:UpdateLoggingConfiguration"``

Grants permission to update a logging configuration

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-UpdateLoggingConfiguration

#### Defined in

actions/aps.ts:258

___

### UpdateWorkspaceAlias

• **UpdateWorkspaceAlias** = ``"aps:UpdateWorkspaceAlias"``

Grants permission to modify the alias of existing AMP workspace

See https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-UpdateWorkspaceAlias

#### Defined in

actions/aps.ts:264
