[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsLogsActions

# Enumeration: AwsLogsActions

All IAM policy actions for Amazon CloudWatch Logs (LOGS)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchlogs.html

2024-02-12T09:56:29.255Z

## Table of contents

### Enumeration Members

- [AssociateKmsKey](AwsLogsActions.md#associatekmskey)
- [CancelExportTask](AwsLogsActions.md#cancelexporttask)
- [CreateDelivery](AwsLogsActions.md#createdelivery)
- [CreateExportTask](AwsLogsActions.md#createexporttask)
- [CreateLogAnomalyDetector](AwsLogsActions.md#createloganomalydetector)
- [CreateLogDelivery](AwsLogsActions.md#createlogdelivery)
- [CreateLogGroup](AwsLogsActions.md#createloggroup)
- [CreateLogStream](AwsLogsActions.md#createlogstream)
- [DeleteAccountPolicy](AwsLogsActions.md#deleteaccountpolicy)
- [DeleteDataProtectionPolicy](AwsLogsActions.md#deletedataprotectionpolicy)
- [DeleteDelivery](AwsLogsActions.md#deletedelivery)
- [DeleteDeliveryDestination](AwsLogsActions.md#deletedeliverydestination)
- [DeleteDeliveryDestinationPolicy](AwsLogsActions.md#deletedeliverydestinationpolicy)
- [DeleteDeliverySource](AwsLogsActions.md#deletedeliverysource)
- [DeleteDestination](AwsLogsActions.md#deletedestination)
- [DeleteLogAnomalyDetector](AwsLogsActions.md#deleteloganomalydetector)
- [DeleteLogDelivery](AwsLogsActions.md#deletelogdelivery)
- [DeleteLogGroup](AwsLogsActions.md#deleteloggroup)
- [DeleteLogStream](AwsLogsActions.md#deletelogstream)
- [DeleteMetricFilter](AwsLogsActions.md#deletemetricfilter)
- [DeleteQueryDefinition](AwsLogsActions.md#deletequerydefinition)
- [DeleteResourcePolicy](AwsLogsActions.md#deleteresourcepolicy)
- [DeleteRetentionPolicy](AwsLogsActions.md#deleteretentionpolicy)
- [DeleteSubscriptionFilter](AwsLogsActions.md#deletesubscriptionfilter)
- [DescribeAccountPolicies](AwsLogsActions.md#describeaccountpolicies)
- [DescribeDeliveries](AwsLogsActions.md#describedeliveries)
- [DescribeDeliveryDestinations](AwsLogsActions.md#describedeliverydestinations)
- [DescribeDeliverySources](AwsLogsActions.md#describedeliverysources)
- [DescribeDestinations](AwsLogsActions.md#describedestinations)
- [DescribeExportTasks](AwsLogsActions.md#describeexporttasks)
- [DescribeLogGroups](AwsLogsActions.md#describeloggroups)
- [DescribeLogStreams](AwsLogsActions.md#describelogstreams)
- [DescribeMetricFilters](AwsLogsActions.md#describemetricfilters)
- [DescribeQueries](AwsLogsActions.md#describequeries)
- [DescribeQueryDefinitions](AwsLogsActions.md#describequerydefinitions)
- [DescribeResourcePolicies](AwsLogsActions.md#describeresourcepolicies)
- [DescribeSubscriptionFilters](AwsLogsActions.md#describesubscriptionfilters)
- [DisassociateKmsKey](AwsLogsActions.md#disassociatekmskey)
- [FilterLogEvents](AwsLogsActions.md#filterlogevents)
- [GetDataProtectionPolicy](AwsLogsActions.md#getdataprotectionpolicy)
- [GetDelivery](AwsLogsActions.md#getdelivery)
- [GetDeliveryDestination](AwsLogsActions.md#getdeliverydestination)
- [GetDeliveryDestinationPolicy](AwsLogsActions.md#getdeliverydestinationpolicy)
- [GetDeliverySource](AwsLogsActions.md#getdeliverysource)
- [GetLogAnomalyDetector](AwsLogsActions.md#getloganomalydetector)
- [GetLogDelivery](AwsLogsActions.md#getlogdelivery)
- [GetLogEvents](AwsLogsActions.md#getlogevents)
- [GetLogGroupFields](AwsLogsActions.md#getloggroupfields)
- [GetLogRecord](AwsLogsActions.md#getlogrecord)
- [GetQueryResults](AwsLogsActions.md#getqueryresults)
- [Link](AwsLogsActions.md#link)
- [ListAnomalies](AwsLogsActions.md#listanomalies)
- [ListLogAnomalyDetectors](AwsLogsActions.md#listloganomalydetectors)
- [ListLogDeliveries](AwsLogsActions.md#listlogdeliveries)
- [ListTagsForResource](AwsLogsActions.md#listtagsforresource)
- [ListTagsLogGroup](AwsLogsActions.md#listtagsloggroup)
- [PutAccountPolicy](AwsLogsActions.md#putaccountpolicy)
- [PutDataProtectionPolicy](AwsLogsActions.md#putdataprotectionpolicy)
- [PutDeliveryDestination](AwsLogsActions.md#putdeliverydestination)
- [PutDeliveryDestinationPolicy](AwsLogsActions.md#putdeliverydestinationpolicy)
- [PutDeliverySource](AwsLogsActions.md#putdeliverysource)
- [PutDestination](AwsLogsActions.md#putdestination)
- [PutDestinationPolicy](AwsLogsActions.md#putdestinationpolicy)
- [PutLogEvents](AwsLogsActions.md#putlogevents)
- [PutMetricFilter](AwsLogsActions.md#putmetricfilter)
- [PutQueryDefinition](AwsLogsActions.md#putquerydefinition)
- [PutResourcePolicy](AwsLogsActions.md#putresourcepolicy)
- [PutRetentionPolicy](AwsLogsActions.md#putretentionpolicy)
- [PutSubscriptionFilter](AwsLogsActions.md#putsubscriptionfilter)
- [StartLiveTail](AwsLogsActions.md#startlivetail)
- [StartQuery](AwsLogsActions.md#startquery)
- [StopLiveTail](AwsLogsActions.md#stoplivetail)
- [StopQuery](AwsLogsActions.md#stopquery)
- [TagLogGroup](AwsLogsActions.md#tagloggroup)
- [TagResource](AwsLogsActions.md#tagresource)
- [TestMetricFilter](AwsLogsActions.md#testmetricfilter)
- [Unmask](AwsLogsActions.md#unmask)
- [UntagLogGroup](AwsLogsActions.md#untagloggroup)
- [UntagResource](AwsLogsActions.md#untagresource)
- [UpdateAnomaly](AwsLogsActions.md#updateanomaly)
- [UpdateLogAnomalyDetector](AwsLogsActions.md#updateloganomalydetector)
- [UpdateLogDelivery](AwsLogsActions.md#updatelogdelivery)

## Enumeration Members

### AssociateKmsKey

• **AssociateKmsKey** = ``"logs:AssociateKmsKey"``

Grants permission to associate the specified AWS Key Management Service (AWS KM
S) customer master key (CMK) with the specified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html

#### Defined in

actions/logs.ts:18

___

### CancelExportTask

• **CancelExportTask** = ``"logs:CancelExportTask"``

Grants permission to cancel an export task if it is in PENDING or RUNNING state

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html

#### Defined in

actions/logs.ts:24

___

### CreateDelivery

• **CreateDelivery** = ``"logs:CreateDelivery"``

Grants permission to create a delivery connecting a delivery source to a delive
ry destination

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html

#### Defined in

actions/logs.ts:31

___

### CreateExportTask

• **CreateExportTask** = ``"logs:CreateExportTask"``

Grants permission to create an ExportTask which allows you to efficiently expor
t data from a Log Group to your Amazon S3 bucket

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html

#### Defined in

actions/logs.ts:38

___

### CreateLogAnomalyDetector

• **CreateLogAnomalyDetector** = ``"logs:CreateLogAnomalyDetector"``

Grants permission to create a log anomaly detector

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogAnomalyDetector.html

#### Defined in

actions/logs.ts:44

___

### CreateLogDelivery

• **CreateLogDelivery** = ``"logs:CreateLogDelivery"``

Grants permission to create the log delivery

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html

#### Defined in

actions/logs.ts:50

___

### CreateLogGroup

• **CreateLogGroup** = ``"logs:CreateLogGroup"``

Grants permission to create a new log group with the specified name

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html

#### Defined in

actions/logs.ts:56

___

### CreateLogStream

• **CreateLogStream** = ``"logs:CreateLogStream"``

Grants permission to create a new log stream with the specified name

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html

#### Defined in

actions/logs.ts:62

___

### DeleteAccountPolicy

• **DeleteAccountPolicy** = ``"logs:DeleteAccountPolicy"``

Grants permission to delete a data protection policy attached to an account

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDataProtectionPolicy.html

#### Defined in

actions/logs.ts:68

___

### DeleteDataProtectionPolicy

• **DeleteDataProtectionPolicy** = ``"logs:DeleteDataProtectionPolicy"``

Grants permission to delete a data protection policy attached to a log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDataProtectionPolicy.html

#### Defined in

actions/logs.ts:74

___

### DeleteDelivery

• **DeleteDelivery** = ``"logs:DeleteDelivery"``

Grants permission to delete a delivery

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDelivery.html

#### Defined in

actions/logs.ts:80

___

### DeleteDeliveryDestination

• **DeleteDeliveryDestination** = ``"logs:DeleteDeliveryDestination"``

Grants permission to delete a delivery destination after all associated deliver
ies are deleted

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliveryDestination.html

#### Defined in

actions/logs.ts:87

___

### DeleteDeliveryDestinationPolicy

• **DeleteDeliveryDestinationPolicy** = ``"logs:DeleteDeliveryDestinationPolicy"``

Grants permission to delete a delivery destination policy associated with a del
ivery destination

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliveryDestinationPolicy.html

#### Defined in

actions/logs.ts:94

___

### DeleteDeliverySource

• **DeleteDeliverySource** = ``"logs:DeleteDeliverySource"``

Grants permission to delete a delivery source after all associated deliveries a
re deleted

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliverySource.html

#### Defined in

actions/logs.ts:101

___

### DeleteDestination

• **DeleteDestination** = ``"logs:DeleteDestination"``

Grants permission to delete the destination with the specified name

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html

#### Defined in

actions/logs.ts:107

___

### DeleteLogAnomalyDetector

• **DeleteLogAnomalyDetector** = ``"logs:DeleteLogAnomalyDetector"``

Grants permission to delete a log anomaly detector

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogAnomalyDetector.html

#### Defined in

actions/logs.ts:113

___

### DeleteLogDelivery

• **DeleteLogDelivery** = ``"logs:DeleteLogDelivery"``

Grants permission to delete the log delivery information for specified log deli
very

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html

#### Defined in

actions/logs.ts:120

___

### DeleteLogGroup

• **DeleteLogGroup** = ``"logs:DeleteLogGroup"``

Grants permission to delete the log group with the specified name

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html

#### Defined in

actions/logs.ts:126

___

### DeleteLogStream

• **DeleteLogStream** = ``"logs:DeleteLogStream"``

Grants permission to delete a log stream

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html

#### Defined in

actions/logs.ts:132

___

### DeleteMetricFilter

• **DeleteMetricFilter** = ``"logs:DeleteMetricFilter"``

Grants permission to delete a metric filter associated with the specified log g
roup

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html

#### Defined in

actions/logs.ts:139

___

### DeleteQueryDefinition

• **DeleteQueryDefinition** = ``"logs:DeleteQueryDefinition"``

Grants permission to delete a saved CloudWatch Logs Insights query definition

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteQueryDefinition.html

#### Defined in

actions/logs.ts:145

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"logs:DeleteResourcePolicy"``

Grants permission to delete a resource policy from this account

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/logs.ts:151

___

### DeleteRetentionPolicy

• **DeleteRetentionPolicy** = ``"logs:DeleteRetentionPolicy"``

Grants permission to delete the retention policy of the specified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html

#### Defined in

actions/logs.ts:157

___

### DeleteSubscriptionFilter

• **DeleteSubscriptionFilter** = ``"logs:DeleteSubscriptionFilter"``

Grants permission to delete a subscription filter associated with the specified
log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html

#### Defined in

actions/logs.ts:164

___

### DescribeAccountPolicies

• **DescribeAccountPolicies** = ``"logs:DescribeAccountPolicies"``

Grants permission to retrieve a data protection policy attached to an account

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeAccountPolicies.html

#### Defined in

actions/logs.ts:170

___

### DescribeDeliveries

• **DescribeDeliveries** = ``"logs:DescribeDeliveries"``

Grants permission to retrieve a list of deliveries an account

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html

#### Defined in

actions/logs.ts:176

___

### DescribeDeliveryDestinations

• **DescribeDeliveryDestinations** = ``"logs:DescribeDeliveryDestinations"``

Grants permission to retrieve a list of delivery destinations an account

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveryDestinations.html

#### Defined in

actions/logs.ts:182

___

### DescribeDeliverySources

• **DescribeDeliverySources** = ``"logs:DescribeDeliverySources"``

Grants permission to retrieve a list of delivery sources in an account

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliverySources.html

#### Defined in

actions/logs.ts:188

___

### DescribeDestinations

• **DescribeDestinations** = ``"logs:DescribeDestinations"``

Grants permission to return all the destinations that are associated with the A
WS account making the request

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html

#### Defined in

actions/logs.ts:195

___

### DescribeExportTasks

• **DescribeExportTasks** = ``"logs:DescribeExportTasks"``

Grants permission to return all the export tasks that are associated with the A
WS account making the request

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html

#### Defined in

actions/logs.ts:202

___

### DescribeLogGroups

• **DescribeLogGroups** = ``"logs:DescribeLogGroups"``

Grants permission to return all the log groups that are associated with the AWS
account making the request

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html

#### Defined in

actions/logs.ts:209

___

### DescribeLogStreams

• **DescribeLogStreams** = ``"logs:DescribeLogStreams"``

Grants permission to return all the log streams that are associated with the sp
ecified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html

#### Defined in

actions/logs.ts:216

___

### DescribeMetricFilters

• **DescribeMetricFilters** = ``"logs:DescribeMetricFilters"``

Grants permission to return all the metrics filters associated with the specifi
ed log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html

#### Defined in

actions/logs.ts:223

___

### DescribeQueries

• **DescribeQueries** = ``"logs:DescribeQueries"``

Grants permission to return a list of CloudWatch Logs Insights queries that are
scheduled, executing, or have been executed recently in this account

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html

#### Defined in

actions/logs.ts:230

___

### DescribeQueryDefinitions

• **DescribeQueryDefinitions** = ``"logs:DescribeQueryDefinitions"``

Grants permission to return a paginated list of your saved CloudWatch Logs Insi
ghts query definitions

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html

#### Defined in

actions/logs.ts:237

___

### DescribeResourcePolicies

• **DescribeResourcePolicies** = ``"logs:DescribeResourcePolicies"``

Grants permission to return all the resource policies in this account

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html

#### Defined in

actions/logs.ts:243

___

### DescribeSubscriptionFilters

• **DescribeSubscriptionFilters** = ``"logs:DescribeSubscriptionFilters"``

Grants permission to return all the subscription filters associated with the sp
ecified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html

#### Defined in

actions/logs.ts:250

___

### DisassociateKmsKey

• **DisassociateKmsKey** = ``"logs:DisassociateKmsKey"``

Grants permission to disassociate the associated AWS Key Management Service (AW
S KMS) customer master key (CMK) from the specified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html

#### Defined in

actions/logs.ts:257

___

### FilterLogEvents

• **FilterLogEvents** = ``"logs:FilterLogEvents"``

Grants permission to retrieve log events, optionally filtered by a filter patte
rn from the specified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html

#### Defined in

actions/logs.ts:264

___

### GetDataProtectionPolicy

• **GetDataProtectionPolicy** = ``"logs:GetDataProtectionPolicy"``

Grants permission to retrieve a data protection policy attached to a log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDataProtectionPolicy.html

#### Defined in

actions/logs.ts:270

___

### GetDelivery

• **GetDelivery** = ``"logs:GetDelivery"``

Grants permission to retrieve a single delivery

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDelivery.html

#### Defined in

actions/logs.ts:276

___

### GetDeliveryDestination

• **GetDeliveryDestination** = ``"logs:GetDeliveryDestination"``

Grants permission to retrieve a single delivery destination

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliveryDestination.html

#### Defined in

actions/logs.ts:282

___

### GetDeliveryDestinationPolicy

• **GetDeliveryDestinationPolicy** = ``"logs:GetDeliveryDestinationPolicy"``

Grants permission to retrieve a delivery destination policy attached to a deliv
ery destination

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliveryDestinationPolicy.html

#### Defined in

actions/logs.ts:289

___

### GetDeliverySource

• **GetDeliverySource** = ``"logs:GetDeliverySource"``

Grants permission to retrieve a single delivery source

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliverySource.html

#### Defined in

actions/logs.ts:295

___

### GetLogAnomalyDetector

• **GetLogAnomalyDetector** = ``"logs:GetLogAnomalyDetector"``

Grants permission to get a log anomaly detector

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogAnomalyDetector.html

#### Defined in

actions/logs.ts:301

___

### GetLogDelivery

• **GetLogDelivery** = ``"logs:GetLogDelivery"``

Grants permission to get the log delivery information for specified log deliver
y

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html

#### Defined in

actions/logs.ts:308

___

### GetLogEvents

• **GetLogEvents** = ``"logs:GetLogEvents"``

Grants permission to retrieve log events from the specified log stream

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html

#### Defined in

actions/logs.ts:314

___

### GetLogGroupFields

• **GetLogGroupFields** = ``"logs:GetLogGroupFields"``

Grants permission to return a list of the fields that are included in log event
s in the specified log group, along with the percentage of log events that cont
ain each field

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html

#### Defined in

actions/logs.ts:322

___

### GetLogRecord

• **GetLogRecord** = ``"logs:GetLogRecord"``

Grants permission to retrieve all the fields and values of a single log event

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html

#### Defined in

actions/logs.ts:328

___

### GetQueryResults

• **GetQueryResults** = ``"logs:GetQueryResults"``

Grants permission to return the results from the specified query

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html

#### Defined in

actions/logs.ts:334

___

### Link

• **Link** = ``"logs:Link"``

Grants permission to share CloudWatch resources with a monitoring account

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account-Setup.html#CloudWatch-Unified-Cross-Account-Setup-permissions

#### Defined in

actions/logs.ts:340

___

### ListAnomalies

• **ListAnomalies** = ``"logs:ListAnomalies"``

Grants permission to list all anomalies detected in the AWS account making the
request

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html

#### Defined in

actions/logs.ts:347

___

### ListLogAnomalyDetectors

• **ListLogAnomalyDetectors** = ``"logs:ListLogAnomalyDetectors"``

Grants permission to return all the anomaly detectors that are associated with
the AWS account making the request

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListLogAnomalyDetectors.html

#### Defined in

actions/logs.ts:354

___

### ListLogDeliveries

• **ListLogDeliveries** = ``"logs:ListLogDeliveries"``

Grants permission to list all the log deliveries for specified account and/or l
og source

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html

#### Defined in

actions/logs.ts:361

___

### ListTagsForResource

• **ListTagsForResource** = ``"logs:ListTagsForResource"``

Grants permission to list the tags for the specified resource

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/logs.ts:367

___

### ListTagsLogGroup

• **ListTagsLogGroup** = ``"logs:ListTagsLogGroup"``

Grants permission to list the tags for the specified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html

#### Defined in

actions/logs.ts:373

___

### PutAccountPolicy

• **PutAccountPolicy** = ``"logs:PutAccountPolicy"``

Grants permission to attach a data protection policy at account level to detect
and redact sensitive information from log events

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html

#### Defined in

actions/logs.ts:380

___

### PutDataProtectionPolicy

• **PutDataProtectionPolicy** = ``"logs:PutDataProtectionPolicy"``

Grants permission to attach a data protection policy to detect and redact sensi
tive information from log events

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html

#### Defined in

actions/logs.ts:387

___

### PutDeliveryDestination

• **PutDeliveryDestination** = ``"logs:PutDeliveryDestination"``

Grants permission to create/update a delivery destination

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html

#### Defined in

actions/logs.ts:393

___

### PutDeliveryDestinationPolicy

• **PutDeliveryDestinationPolicy** = ``"logs:PutDeliveryDestinationPolicy"``

Grants permission to attach a delivery destination policy to a delivery destina
tion

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html

#### Defined in

actions/logs.ts:400

___

### PutDeliverySource

• **PutDeliverySource** = ``"logs:PutDeliverySource"``

Grants permission to create/update a delivery source

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html

#### Defined in

actions/logs.ts:406

___

### PutDestination

• **PutDestination** = ``"logs:PutDestination"``

Grants permission to create or update a Destination

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html

#### Defined in

actions/logs.ts:412

___

### PutDestinationPolicy

• **PutDestinationPolicy** = ``"logs:PutDestinationPolicy"``

Grants permission to create or update an access policy associated with an exist
ing Destination

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html

#### Defined in

actions/logs.ts:419

___

### PutLogEvents

• **PutLogEvents** = ``"logs:PutLogEvents"``

Grants permission to upload a batch of log events to the specified log stream

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html

#### Defined in

actions/logs.ts:425

___

### PutMetricFilter

• **PutMetricFilter** = ``"logs:PutMetricFilter"``

Grants permission to create or update a metric filter and associates it with th
e specified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html

#### Defined in

actions/logs.ts:432

___

### PutQueryDefinition

• **PutQueryDefinition** = ``"logs:PutQueryDefinition"``

Grants permission to create or update a query definition

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutQueryDefinition.html

#### Defined in

actions/logs.ts:438

___

### PutResourcePolicy

• **PutResourcePolicy** = ``"logs:PutResourcePolicy"``

Grants permission to create or update a resource policy allowing other AWS serv
ices to put log events to this account

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html

#### Defined in

actions/logs.ts:445

___

### PutRetentionPolicy

• **PutRetentionPolicy** = ``"logs:PutRetentionPolicy"``

Grants permission to set the retention of the specified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html

#### Defined in

actions/logs.ts:451

___

### PutSubscriptionFilter

• **PutSubscriptionFilter** = ``"logs:PutSubscriptionFilter"``

Grants permission to create or update a subscription filter and associates it w
ith the specified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html

#### Defined in

actions/logs.ts:458

___

### StartLiveTail

• **StartLiveTail** = ``"logs:StartLiveTail"``

Grants permission to start a Live Tail session in CloudWatch Logs

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartLiveTail.html

#### Defined in

actions/logs.ts:464

___

### StartQuery

• **StartQuery** = ``"logs:StartQuery"``

Grants permission to schedule a query of a log group using CloudWatch Logs Insi
ghts

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html

#### Defined in

actions/logs.ts:471

___

### StopLiveTail

• **StopLiveTail** = ``"logs:StopLiveTail"``

Grants permission to stop a Live Tail session that is in progress

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs_LiveTail.html

#### Defined in

actions/logs.ts:477

___

### StopQuery

• **StopQuery** = ``"logs:StopQuery"``

Grants permission to stop a CloudWatch Logs Insights query that is in progress

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html

#### Defined in

actions/logs.ts:483

___

### TagLogGroup

• **TagLogGroup** = ``"logs:TagLogGroup"``

Grants permission to add or update the specified tags for the specified log gro
up

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html

#### Defined in

actions/logs.ts:490

___

### TagResource

• **TagResource** = ``"logs:TagResource"``

Grants permission to add or update the specified tags for the specified resourc
e

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html

#### Defined in

actions/logs.ts:497

___

### TestMetricFilter

• **TestMetricFilter** = ``"logs:TestMetricFilter"``

Grants permission to test the filter pattern of a metric filter against a sampl
e of log event messages

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html

#### Defined in

actions/logs.ts:504

___

### Unmask

• **Unmask** = ``"logs:Unmask"``

Grants permission to fetch unmasked log events that have been redacted with a d
ata protection policy

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html

#### Defined in

actions/logs.ts:511

___

### UntagLogGroup

• **UntagLogGroup** = ``"logs:UntagLogGroup"``

Grants permission to remove the specified tags from the specified log group

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html

#### Defined in

actions/logs.ts:517

___

### UntagResource

• **UntagResource** = ``"logs:UntagResource"``

Grants permission to remove the specified tags from the specified resource

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html

#### Defined in

actions/logs.ts:523

___

### UpdateAnomaly

• **UpdateAnomaly** = ``"logs:UpdateAnomaly"``

Grants permission to update an anomaly reported by a log anomaly detector

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateAnomaly.html

#### Defined in

actions/logs.ts:529

___

### UpdateLogAnomalyDetector

• **UpdateLogAnomalyDetector** = ``"logs:UpdateLogAnomalyDetector"``

Grants permission to update a log anomaly detector

See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateLogAnomalyDetector.html

#### Defined in

actions/logs.ts:535

___

### UpdateLogDelivery

• **UpdateLogDelivery** = ``"logs:UpdateLogDelivery"``

Grants permission to update the log delivery information for specified log deli
very

See https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html

#### Defined in

actions/logs.ts:542
