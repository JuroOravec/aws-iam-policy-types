[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsHealthlakeActions

# Enumeration: AwsHealthlakeActions

All IAM policy actions for AWS HealthLake (HEALTHLAKE)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthlake.html

2024-02-12T09:57:34.993Z

## Table of contents

### Enumeration Members

- [CreateFHIRDatastore](AwsHealthlakeActions.md#createfhirdatastore)
- [CreateResource](AwsHealthlakeActions.md#createresource)
- [DeleteFHIRDatastore](AwsHealthlakeActions.md#deletefhirdatastore)
- [DeleteResource](AwsHealthlakeActions.md#deleteresource)
- [DescribeFHIRDatastore](AwsHealthlakeActions.md#describefhirdatastore)
- [DescribeFHIRExportJob](AwsHealthlakeActions.md#describefhirexportjob)
- [DescribeFHIRImportJob](AwsHealthlakeActions.md#describefhirimportjob)
- [GetCapabilities](AwsHealthlakeActions.md#getcapabilities)
- [ListFHIRDatastores](AwsHealthlakeActions.md#listfhirdatastores)
- [ListFHIRExportJobs](AwsHealthlakeActions.md#listfhirexportjobs)
- [ListFHIRImportJobs](AwsHealthlakeActions.md#listfhirimportjobs)
- [ListTagsForResource](AwsHealthlakeActions.md#listtagsforresource)
- [ReadResource](AwsHealthlakeActions.md#readresource)
- [SearchWithGet](AwsHealthlakeActions.md#searchwithget)
- [SearchWithPost](AwsHealthlakeActions.md#searchwithpost)
- [StartFHIRExportJob](AwsHealthlakeActions.md#startfhirexportjob)
- [StartFHIRImportJob](AwsHealthlakeActions.md#startfhirimportjob)
- [TagResource](AwsHealthlakeActions.md#tagresource)
- [UntagResource](AwsHealthlakeActions.md#untagresource)
- [UpdateResource](AwsHealthlakeActions.md#updateresource)

## Enumeration Members

### CreateFHIRDatastore

• **CreateFHIRDatastore** = ``"healthlake:CreateFHIRDatastore"``

Grants permission to create a datastore that can ingest and export FHIR data

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_CreateFHIRDatastore.html

#### Defined in

actions/healthlake.ts:17

___

### CreateResource

• **CreateResource** = ``"healthlake:CreateResource"``

Grants permission to create resource

See https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html

#### Defined in

actions/healthlake.ts:23

___

### DeleteFHIRDatastore

• **DeleteFHIRDatastore** = ``"healthlake:DeleteFHIRDatastore"``

Grants permission to delete a datastore

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DeleteFHIRDatastore.html

#### Defined in

actions/healthlake.ts:29

___

### DeleteResource

• **DeleteResource** = ``"healthlake:DeleteResource"``

Grants permission to delete resource

See https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html

#### Defined in

actions/healthlake.ts:35

___

### DescribeFHIRDatastore

• **DescribeFHIRDatastore** = ``"healthlake:DescribeFHIRDatastore"``

Grants permission to get the properties associated with the FHIR datastore, inc
luding the datastore ID, datastore ARN, datastore name, datastore status, creat
ed at, datastore type version, and datastore endpoint

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DescribeFHIRDatastore.html

#### Defined in

actions/healthlake.ts:43

___

### DescribeFHIRExportJob

• **DescribeFHIRExportJob** = ``"healthlake:DescribeFHIRExportJob"``

Grants permission to display the properties of a FHIR export job, including the
ID, ARN, name, and the status of the datastore

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DescribeFHIRExportJob.html

#### Defined in

actions/healthlake.ts:50

___

### DescribeFHIRImportJob

• **DescribeFHIRImportJob** = ``"healthlake:DescribeFHIRImportJob"``

Grants permission to display the properties of a FHIR import job, including the
ID, ARN, name, and the status of the datastore

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DescribeFHIRImportJob.html

#### Defined in

actions/healthlake.ts:57

___

### GetCapabilities

• **GetCapabilities** = ``"healthlake:GetCapabilities"``

Grants permission to get the capabilities of a FHIR datastore

See https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html

#### Defined in

actions/healthlake.ts:63

___

### ListFHIRDatastores

• **ListFHIRDatastores** = ``"healthlake:ListFHIRDatastores"``

Grants permission to list all FHIR datastores that are in the user’s account, r
egardless of datastore status

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListFHIRDatastores.html

#### Defined in

actions/healthlake.ts:70

___

### ListFHIRExportJobs

• **ListFHIRExportJobs** = ``"healthlake:ListFHIRExportJobs"``

Grants permission to get a list of export jobs for the specified datastore

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListFHIRExportJobs.html

#### Defined in

actions/healthlake.ts:76

___

### ListFHIRImportJobs

• **ListFHIRImportJobs** = ``"healthlake:ListFHIRImportJobs"``

Grants permission to get a list of import jobs for the specified datastore

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListFHIRImportJobs.html

#### Defined in

actions/healthlake.ts:82

___

### ListTagsForResource

• **ListTagsForResource** = ``"healthlake:ListTagsForResource"``

Grants permission to get a list of tags for the specified datastore

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/healthlake.ts:88

___

### ReadResource

• **ReadResource** = ``"healthlake:ReadResource"``

Grants permission to read resource

See https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html

#### Defined in

actions/healthlake.ts:94

___

### SearchWithGet

• **SearchWithGet** = ``"healthlake:SearchWithGet"``

Grants permission to search resources with GET method

See https://docs.aws.amazon.com/healthlake/latest/devguide/search-healthlake.html

#### Defined in

actions/healthlake.ts:100

___

### SearchWithPost

• **SearchWithPost** = ``"healthlake:SearchWithPost"``

Grants permission to search resources with POST method

See https://docs.aws.amazon.com/healthlake/latest/devguide/search-healthlake.html

#### Defined in

actions/healthlake.ts:106

___

### StartFHIRExportJob

• **StartFHIRExportJob** = ``"healthlake:StartFHIRExportJob"``

Grants permission to begin a FHIR Export job

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_StartFHIRExportJob.html

#### Defined in

actions/healthlake.ts:112

___

### StartFHIRImportJob

• **StartFHIRImportJob** = ``"healthlake:StartFHIRImportJob"``

Grants permission to begin a FHIR Import job

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_StartFHIRImportJob.html

#### Defined in

actions/healthlake.ts:118

___

### TagResource

• **TagResource** = ``"healthlake:TagResource"``

Grants permission to add tags to a datastore

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_TagResource.html

#### Defined in

actions/healthlake.ts:124

___

### UntagResource

• **UntagResource** = ``"healthlake:UntagResource"``

Grants permission to remove tags associated with a datastore

See https://docs.aws.amazon.com/healthlake/latest/APIReference/API_UntagResource.html

#### Defined in

actions/healthlake.ts:130

___

### UpdateResource

• **UpdateResource** = ``"healthlake:UpdateResource"``

Grants permission to update resource

See https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html

#### Defined in

actions/healthlake.ts:136
