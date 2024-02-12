[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMediapackageActions

# Enumeration: AwsMediapackageActions

All IAM policy actions for AWS Elemental MediaPackage (MEDIAPACKAGE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackage.html

2024-02-12T09:57:17.337Z

## Table of contents

### Enumeration Members

- [ConfigureLogs](AwsMediapackageActions.md#configurelogs)
- [CreateChannel](AwsMediapackageActions.md#createchannel)
- [CreateHarvestJob](AwsMediapackageActions.md#createharvestjob)
- [CreateOriginEndpoint](AwsMediapackageActions.md#createoriginendpoint)
- [DeleteChannel](AwsMediapackageActions.md#deletechannel)
- [DeleteOriginEndpoint](AwsMediapackageActions.md#deleteoriginendpoint)
- [DescribeChannel](AwsMediapackageActions.md#describechannel)
- [DescribeHarvestJob](AwsMediapackageActions.md#describeharvestjob)
- [DescribeOriginEndpoint](AwsMediapackageActions.md#describeoriginendpoint)
- [ListChannels](AwsMediapackageActions.md#listchannels)
- [ListHarvestJobs](AwsMediapackageActions.md#listharvestjobs)
- [ListOriginEndpoints](AwsMediapackageActions.md#listoriginendpoints)
- [ListTagsForResource](AwsMediapackageActions.md#listtagsforresource)
- [RotateChannelCredentials](AwsMediapackageActions.md#rotatechannelcredentials)
- [RotateIngestEndpointCredentials](AwsMediapackageActions.md#rotateingestendpointcredentials)
- [TagResource](AwsMediapackageActions.md#tagresource)
- [UntagResource](AwsMediapackageActions.md#untagresource)
- [UpdateChannel](AwsMediapackageActions.md#updatechannel)
- [UpdateOriginEndpoint](AwsMediapackageActions.md#updateoriginendpoint)

## Enumeration Members

### ConfigureLogs

• **ConfigureLogs** = ``"mediapackage:ConfigureLogs"``

Grants permission to configure access logs for a Channel

See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-configure_logs.html#channels-id-configure_logsput

#### Defined in

actions/mediapackage.ts:17

___

### CreateChannel

• **CreateChannel** = ``"mediapackage:CreateChannel"``

Grants permission to create a channel in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels.html#channelspost

#### Defined in

actions/mediapackage.ts:23

___

### CreateHarvestJob

• **CreateHarvestJob** = ``"mediapackage:CreateHarvestJob"``

Grants permission to create a harvest job in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs.html#harvest_jobspost

#### Defined in

actions/mediapackage.ts:29

___

### CreateOriginEndpoint

• **CreateOriginEndpoint** = ``"mediapackage:CreateOriginEndpoint"``

Grants permission to create an endpoint in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints.html#origin_endpointspost

#### Defined in

actions/mediapackage.ts:35

___

### DeleteChannel

• **DeleteChannel** = ``"mediapackage:DeleteChannel"``

Grants permission to delete a channel in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-iddelete

#### Defined in

actions/mediapackage.ts:41

___

### DeleteOriginEndpoint

• **DeleteOriginEndpoint** = ``"mediapackage:DeleteOriginEndpoint"``

Grants permission to delete an endpoint in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-iddelete

#### Defined in

actions/mediapackage.ts:47

___

### DescribeChannel

• **DescribeChannel** = ``"mediapackage:DescribeChannel"``

Grants permission to view the details of a channel in AWS Elemental MediaPackag
e

See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-idget

#### Defined in

actions/mediapackage.ts:54

___

### DescribeHarvestJob

• **DescribeHarvestJob** = ``"mediapackage:DescribeHarvestJob"``

Grants permission to view the details of a harvest job in AWS Elemental MediaPa
ckage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs-id.html#harvest_jobs-idget

#### Defined in

actions/mediapackage.ts:61

___

### DescribeOriginEndpoint

• **DescribeOriginEndpoint** = ``"mediapackage:DescribeOriginEndpoint"``

Grants permission to view the details of an endpoint in AWS Elemental MediaPack
age

See https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-idget

#### Defined in

actions/mediapackage.ts:68

___

### ListChannels

• **ListChannels** = ``"mediapackage:ListChannels"``

Grants permission to view a list of channels in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels.html#channelsget

#### Defined in

actions/mediapackage.ts:74

___

### ListHarvestJobs

• **ListHarvestJobs** = ``"mediapackage:ListHarvestJobs"``

Grants permission to view a list of harvest jobs in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs.html#harvest_jobsget

#### Defined in

actions/mediapackage.ts:80

___

### ListOriginEndpoints

• **ListOriginEndpoints** = ``"mediapackage:ListOriginEndpoints"``

Grants permission to view a list of endpoints in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints.html#origin_endpointsget

#### Defined in

actions/mediapackage.ts:86

___

### ListTagsForResource

• **ListTagsForResource** = ``"mediapackage:ListTagsForResource"``

Grants permission to list the tags assigned to a Channel or OriginEndpoint

See https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arnget

#### Defined in

actions/mediapackage.ts:92

___

### RotateChannelCredentials

• **RotateChannelCredentials** = ``"mediapackage:RotateChannelCredentials"``

Grants permission to rotate credentials for the first IngestEndpoint of a Chann
el in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-credentials.html#channels-id-credentialsput

#### Defined in

actions/mediapackage.ts:99

___

### RotateIngestEndpointCredentials

• **RotateIngestEndpointCredentials** = ``"mediapackage:RotateIngestEndpointCredentials"``

Grants permission to rotate IngestEndpoint credentials for a Channel in AWS Ele
mental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-ingest_endpoints-ingest_endpoint_id-credentials.html#channels-id-ingest_endpoints-ingest_endpoint_id-credentialsput

#### Defined in

actions/mediapackage.ts:106

___

### TagResource

• **TagResource** = ``"mediapackage:TagResource"``

Grants permission to tag a MediaPackage resource

See https://docs.aws.amazon.com/mediapackage/latest/apireference/hj-create.html

#### Defined in

actions/mediapackage.ts:112

___

### UntagResource

• **UntagResource** = ``"mediapackage:UntagResource"``

Grants permission to delete tags to a Channel or OriginEndpoint

See https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arndelete

#### Defined in

actions/mediapackage.ts:118

___

### UpdateChannel

• **UpdateChannel** = ``"mediapackage:UpdateChannel"``

Grants permission to make changes to a channel in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-idput

#### Defined in

actions/mediapackage.ts:124

___

### UpdateOriginEndpoint

• **UpdateOriginEndpoint** = ``"mediapackage:UpdateOriginEndpoint"``

Grants permission to make changes to an endpoint in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-idput

#### Defined in

actions/mediapackage.ts:130
