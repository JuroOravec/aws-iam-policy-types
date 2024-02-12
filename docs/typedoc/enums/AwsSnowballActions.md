[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsSnowballActions

# Enumeration: AwsSnowballActions

All IAM policy actions for AWS Snowball (SNOWBALL)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowball.html

2024-02-12T09:59:19.074Z

## Table of contents

### Enumeration Members

- [CancelCluster](AwsSnowballActions.md#cancelcluster)
- [CancelJob](AwsSnowballActions.md#canceljob)
- [CreateAddress](AwsSnowballActions.md#createaddress)
- [CreateCluster](AwsSnowballActions.md#createcluster)
- [CreateJob](AwsSnowballActions.md#createjob)
- [CreateLongTermPricing](AwsSnowballActions.md#createlongtermpricing)
- [CreateReturnShippingLabel](AwsSnowballActions.md#createreturnshippinglabel)
- [DescribeAddress](AwsSnowballActions.md#describeaddress)
- [DescribeAddresses](AwsSnowballActions.md#describeaddresses)
- [DescribeCluster](AwsSnowballActions.md#describecluster)
- [DescribeJob](AwsSnowballActions.md#describejob)
- [DescribeReturnShippingLabel](AwsSnowballActions.md#describereturnshippinglabel)
- [GetJobManifest](AwsSnowballActions.md#getjobmanifest)
- [GetJobUnlockCode](AwsSnowballActions.md#getjobunlockcode)
- [GetSnowballUsage](AwsSnowballActions.md#getsnowballusage)
- [GetSoftwareUpdates](AwsSnowballActions.md#getsoftwareupdates)
- [ListClusterJobs](AwsSnowballActions.md#listclusterjobs)
- [ListClusters](AwsSnowballActions.md#listclusters)
- [ListCompatibleImages](AwsSnowballActions.md#listcompatibleimages)
- [ListJobs](AwsSnowballActions.md#listjobs)
- [ListLongTermPricing](AwsSnowballActions.md#listlongtermpricing)
- [ListPickupLocations](AwsSnowballActions.md#listpickuplocations)
- [ListServiceVersions](AwsSnowballActions.md#listserviceversions)
- [UpdateCluster](AwsSnowballActions.md#updatecluster)
- [UpdateJob](AwsSnowballActions.md#updatejob)
- [UpdateJobShipmentState](AwsSnowballActions.md#updatejobshipmentstate)
- [UpdateLongTermPricing](AwsSnowballActions.md#updatelongtermpricing)

## Enumeration Members

### CancelCluster

• **CancelCluster** = ``"snowball:CancelCluster"``

Grants permission to cancel a cluster job

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelCluster.html

#### Defined in

actions/snowball.ts:17

___

### CancelJob

• **CancelJob** = ``"snowball:CancelJob"``

Grants permission to cancel the specified job

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelJob.html

#### Defined in

actions/snowball.ts:23

___

### CreateAddress

• **CreateAddress** = ``"snowball:CreateAddress"``

Grants permission to create an address for a Snowball to be shipped to

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateAddress.html

#### Defined in

actions/snowball.ts:29

___

### CreateCluster

• **CreateCluster** = ``"snowball:CreateCluster"``

Grants permission to create an empty cluster

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateCluster.html

#### Defined in

actions/snowball.ts:35

___

### CreateJob

• **CreateJob** = ``"snowball:CreateJob"``

Grants permission to creates a job to import or export data between Amazon S3 a
nd your on-premises data center

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateJob.html

#### Defined in

actions/snowball.ts:42

___

### CreateLongTermPricing

• **CreateLongTermPricing** = ``"snowball:CreateLongTermPricing"``

Grants permission to creates a LongTermPricingListEntry for allowing customers
to add an upfront billing contract for a job

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateLongTermPricing.html

#### Defined in

actions/snowball.ts:49

___

### CreateReturnShippingLabel

• **CreateReturnShippingLabel** = ``"snowball:CreateReturnShippingLabel"``

Grants permission to create a shipping label that will be used to return the Sn
ow device to AWS

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateReturnShippingLabel.html

#### Defined in

actions/snowball.ts:56

___

### DescribeAddress

• **DescribeAddress** = ``"snowball:DescribeAddress"``

Grants permission to get specific details about that address in the form of an
Address object

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddress.html

#### Defined in

actions/snowball.ts:63

___

### DescribeAddresses

• **DescribeAddresses** = ``"snowball:DescribeAddresses"``

Grants permission to describe a specified number of ADDRESS objects

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddresses.html

#### Defined in

actions/snowball.ts:69

___

### DescribeCluster

• **DescribeCluster** = ``"snowball:DescribeCluster"``

Grants permission to describe information about a specific cluster including sh
ipping information, cluster status, and other important metadata

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeCluster.html

#### Defined in

actions/snowball.ts:76

___

### DescribeJob

• **DescribeJob** = ``"snowball:DescribeJob"``

Grants permission to describe information about a specific job including shippi
ng information, job status, and other important metadata

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeJob.html

#### Defined in

actions/snowball.ts:83

___

### DescribeReturnShippingLabel

• **DescribeReturnShippingLabel** = ``"snowball:DescribeReturnShippingLabel"``

Grants permission to describe information on the shipping label of a Snow devic
e that is being returned to AWS

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeReturnShippingLabel.html

#### Defined in

actions/snowball.ts:90

___

### GetJobManifest

• **GetJobManifest** = ``"snowball:GetJobManifest"``

Grants permission to get a link to an Amazon S3 presigned URL for the manifest
file associated with the specified JobId value

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobManifest.html

#### Defined in

actions/snowball.ts:97

___

### GetJobUnlockCode

• **GetJobUnlockCode** = ``"snowball:GetJobUnlockCode"``

Grants permission to get the UnlockCode code value for the specified job

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobUnlockCode.html

#### Defined in

actions/snowball.ts:103

___

### GetSnowballUsage

• **GetSnowballUsage** = ``"snowball:GetSnowballUsage"``

Grants permission to get information about the Snowball service limit for your
account, and also the number of Snowballs your account has in use

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetSnowballUsage.html

#### Defined in

actions/snowball.ts:110

___

### GetSoftwareUpdates

• **GetSoftwareUpdates** = ``"snowball:GetSoftwareUpdates"``

Grants permission to return an Amazon S3 presigned URL for an update file assoc
iated with a specified JobId

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetSoftwareUpdates.html

#### Defined in

actions/snowball.ts:117

___

### ListClusterJobs

• **ListClusterJobs** = ``"snowball:ListClusterJobs"``

Grants permission to list JobListEntry objects of the specified length

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusterJobs.html

#### Defined in

actions/snowball.ts:123

___

### ListClusters

• **ListClusters** = ``"snowball:ListClusters"``

Grants permission to list ClusterListEntry objects of the specified length

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusters.html

#### Defined in

actions/snowball.ts:129

___

### ListCompatibleImages

• **ListCompatibleImages** = ``"snowball:ListCompatibleImages"``

Grants permission to return a list of the different Amazon EC2 Amazon Machine I
mages (AMIs) that are owned by your AWS account that would be supported for use
on a Snow device

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListCompatibleImages.html

#### Defined in

actions/snowball.ts:137

___

### ListJobs

• **ListJobs** = ``"snowball:ListJobs"``

Grants permission to list JobListEntry objects of the specified length

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListJobs.html

#### Defined in

actions/snowball.ts:143

___

### ListLongTermPricing

• **ListLongTermPricing** = ``"snowball:ListLongTermPricing"``

Grants permission to list LongTermPricingListEntry objects for the account maki
ng the request

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListLongTermPricing.html

#### Defined in

actions/snowball.ts:150

___

### ListPickupLocations

• **ListPickupLocations** = ``"snowball:ListPickupLocations"``

Grants permission to list Address objects where pickup is available, of the spe
cified length

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListPickupLocations.html

#### Defined in

actions/snowball.ts:157

___

### ListServiceVersions

• **ListServiceVersions** = ``"snowball:ListServiceVersions"``

Grants permission to list all supported versions for Snow on-device services

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListServiceVersions.html

#### Defined in

actions/snowball.ts:163

___

### UpdateCluster

• **UpdateCluster** = ``"snowball:UpdateCluster"``

Grants permission to update while a cluster's ClusterState value is in the Awai
tingQuorum state, you can update some of the information associated with a clus
ter

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateCluster.html

#### Defined in

actions/snowball.ts:171

___

### UpdateJob

• **UpdateJob** = ``"snowball:UpdateJob"``

Grants permission to update while a job's JobState value is New, you can update
some of the information associated with a job

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateJob.html

#### Defined in

actions/snowball.ts:178

___

### UpdateJobShipmentState

• **UpdateJobShipmentState** = ``"snowball:UpdateJobShipmentState"``

Grants permission to update the state when a the shipment states changes to a d
ifferent state

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateJobShipmentState.html

#### Defined in

actions/snowball.ts:185

___

### UpdateLongTermPricing

• **UpdateLongTermPricing** = ``"snowball:UpdateLongTermPricing"``

Grants permission to update a specific upfront billing contract for a job

See https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateLongTermPricing.html

#### Defined in

actions/snowball.ts:191
