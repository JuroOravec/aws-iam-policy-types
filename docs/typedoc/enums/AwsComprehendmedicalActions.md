[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsComprehendmedicalActions

# Enumeration: AwsComprehendmedicalActions

All IAM policy actions for Amazon Comprehend Medical (COMPREHENDMEDICAL)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehendmedical.html

2024-02-12T09:56:42.963Z

## Table of contents

### Enumeration Members

- [DescribeEntitiesDetectionV2Job](AwsComprehendmedicalActions.md#describeentitiesdetectionv2job)
- [DescribeICD10CMInferenceJob](AwsComprehendmedicalActions.md#describeicd10cminferencejob)
- [DescribePHIDetectionJob](AwsComprehendmedicalActions.md#describephidetectionjob)
- [DescribeRxNormInferenceJob](AwsComprehendmedicalActions.md#describerxnorminferencejob)
- [DescribeSNOMEDCTInferenceJob](AwsComprehendmedicalActions.md#describesnomedctinferencejob)
- [DetectEntitiesV2](AwsComprehendmedicalActions.md#detectentitiesv2)
- [DetectPHI](AwsComprehendmedicalActions.md#detectphi)
- [InferICD10CM](AwsComprehendmedicalActions.md#infericd10cm)
- [InferRxNorm](AwsComprehendmedicalActions.md#inferrxnorm)
- [InferSNOMEDCT](AwsComprehendmedicalActions.md#infersnomedct)
- [ListEntitiesDetectionV2Jobs](AwsComprehendmedicalActions.md#listentitiesdetectionv2jobs)
- [ListICD10CMInferenceJobs](AwsComprehendmedicalActions.md#listicd10cminferencejobs)
- [ListPHIDetectionJobs](AwsComprehendmedicalActions.md#listphidetectionjobs)
- [ListRxNormInferenceJobs](AwsComprehendmedicalActions.md#listrxnorminferencejobs)
- [ListSNOMEDCTInferenceJobs](AwsComprehendmedicalActions.md#listsnomedctinferencejobs)
- [StartEntitiesDetectionV2Job](AwsComprehendmedicalActions.md#startentitiesdetectionv2job)
- [StartICD10CMInferenceJob](AwsComprehendmedicalActions.md#starticd10cminferencejob)
- [StartPHIDetectionJob](AwsComprehendmedicalActions.md#startphidetectionjob)
- [StartRxNormInferenceJob](AwsComprehendmedicalActions.md#startrxnorminferencejob)
- [StartSNOMEDCTInferenceJob](AwsComprehendmedicalActions.md#startsnomedctinferencejob)
- [StopEntitiesDetectionV2Job](AwsComprehendmedicalActions.md#stopentitiesdetectionv2job)
- [StopICD10CMInferenceJob](AwsComprehendmedicalActions.md#stopicd10cminferencejob)
- [StopPHIDetectionJob](AwsComprehendmedicalActions.md#stopphidetectionjob)
- [StopRxNormInferenceJob](AwsComprehendmedicalActions.md#stoprxnorminferencejob)
- [StopSNOMEDCTInferenceJob](AwsComprehendmedicalActions.md#stopsnomedctinferencejob)

## Enumeration Members

### DescribeEntitiesDetectionV2Job

• **DescribeEntitiesDetectionV2Job** = ``"comprehendmedical:DescribeEntitiesDetectionV2Job"``

Grants permission to describe the properties of a medical entity detection job
that you have submitted

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_DescribeEntitiesDetectionV2Job.html

#### Defined in

actions/comprehendmedical.ts:18

___

### DescribeICD10CMInferenceJob

• **DescribeICD10CMInferenceJob** = ``"comprehendmedical:DescribeICD10CMInferenceJob"``

Grants permission to describe the properties of an ICD-10-CM linking job that y
ou have submitted

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_DescribeICD10CMInferenceJob.html

#### Defined in

actions/comprehendmedical.ts:25

___

### DescribePHIDetectionJob

• **DescribePHIDetectionJob** = ``"comprehendmedical:DescribePHIDetectionJob"``

Grants permission to describe the properties of a PHI entity detection job that
you have submitted

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_DescribePHIDetectionJob.html

#### Defined in

actions/comprehendmedical.ts:32

___

### DescribeRxNormInferenceJob

• **DescribeRxNormInferenceJob** = ``"comprehendmedical:DescribeRxNormInferenceJob"``

Grants permission to describe the properties of an RxNorm linking job that you
have submitted

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_DescribeRxNormInferenceJob.html

#### Defined in

actions/comprehendmedical.ts:39

___

### DescribeSNOMEDCTInferenceJob

• **DescribeSNOMEDCTInferenceJob** = ``"comprehendmedical:DescribeSNOMEDCTInferenceJob"``

Grants permission to describe the properties of a SNOMED-CT linking job that yo
u have submitted

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_DescribeSNOMEDCTInferenceJob.html

#### Defined in

actions/comprehendmedical.ts:46

___

### DetectEntitiesV2

• **DetectEntitiesV2** = ``"comprehendmedical:DetectEntitiesV2"``

Grants permission to detect the named medical entities, and their relationships
and traits within the given text document

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_DetectEntitiesV2.html

#### Defined in

actions/comprehendmedical.ts:53

___

### DetectPHI

• **DetectPHI** = ``"comprehendmedical:DetectPHI"``

Grants permission to detect the protected health information (PHI) entities wit
hin the given text document

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_DetectPHI.html

#### Defined in

actions/comprehendmedical.ts:60

___

### InferICD10CM

• **InferICD10CM** = ``"comprehendmedical:InferICD10CM"``

Grants permission to detect the medical condition entities within the given tex
t document and link them to ICD-10-CM codes

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_InferICD10CM.html

#### Defined in

actions/comprehendmedical.ts:67

___

### InferRxNorm

• **InferRxNorm** = ``"comprehendmedical:InferRxNorm"``

Grants permission to detect the medication entities within the given text docum
ent and link them to RxCUI concept identifiers from the National Library of Med
icine RxNorm database

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_InferRxNorm.html

#### Defined in

actions/comprehendmedical.ts:75

___

### InferSNOMEDCT

• **InferSNOMEDCT** = ``"comprehendmedical:InferSNOMEDCT"``

Grants permission to detect the medical condition, anatomy, and test, treatment
, and procedure entities within the given text document and link them to SNOMED
-CT codes

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_InferSNOMEDCT.html

#### Defined in

actions/comprehendmedical.ts:83

___

### ListEntitiesDetectionV2Jobs

• **ListEntitiesDetectionV2Jobs** = ``"comprehendmedical:ListEntitiesDetectionV2Jobs"``

Grants permission to list the medical entity detection jobs that you have submi
tted

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_ListEntitiesDetectionV2Jobs.html

#### Defined in

actions/comprehendmedical.ts:90

___

### ListICD10CMInferenceJobs

• **ListICD10CMInferenceJobs** = ``"comprehendmedical:ListICD10CMInferenceJobs"``

Grants permission to list the ICD-10-CM linking jobs that you have submitted

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_ListICD10CMInferenceJobs.html

#### Defined in

actions/comprehendmedical.ts:96

___

### ListPHIDetectionJobs

• **ListPHIDetectionJobs** = ``"comprehendmedical:ListPHIDetectionJobs"``

Grants permission to list the PHI entity detection jobs that you have submitted

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_ListPHIDetectionJobs.html

#### Defined in

actions/comprehendmedical.ts:102

___

### ListRxNormInferenceJobs

• **ListRxNormInferenceJobs** = ``"comprehendmedical:ListRxNormInferenceJobs"``

Grants permission to list the RxNorm linking jobs that you have submitted

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_ListRxNormInferenceJobs.html

#### Defined in

actions/comprehendmedical.ts:108

___

### ListSNOMEDCTInferenceJobs

• **ListSNOMEDCTInferenceJobs** = ``"comprehendmedical:ListSNOMEDCTInferenceJobs"``

Grants permission to list the SNOMED-CT linking jobs that you have submitted

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_ListSNOMEDCTInferenceJobs.html

#### Defined in

actions/comprehendmedical.ts:114

___

### StartEntitiesDetectionV2Job

• **StartEntitiesDetectionV2Job** = ``"comprehendmedical:StartEntitiesDetectionV2Job"``

Grants permission to start an asynchronous medical entity detection job for a c
ollection of documents

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_StartEntitiesDetectionV2Job.html

#### Defined in

actions/comprehendmedical.ts:121

___

### StartICD10CMInferenceJob

• **StartICD10CMInferenceJob** = ``"comprehendmedical:StartICD10CMInferenceJob"``

Grants permission to start an asynchronous ICD-10-CM linking job for a collecti
on of documents

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_StartICD10CMInferenceJob.html

#### Defined in

actions/comprehendmedical.ts:128

___

### StartPHIDetectionJob

• **StartPHIDetectionJob** = ``"comprehendmedical:StartPHIDetectionJob"``

Grants permission to start an asynchronous PHI entity detection job for a colle
ction of documents

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_StartPHIDetectionJob.html

#### Defined in

actions/comprehendmedical.ts:135

___

### StartRxNormInferenceJob

• **StartRxNormInferenceJob** = ``"comprehendmedical:StartRxNormInferenceJob"``

Grants permission to start an asynchronous RxNorm linking job for a collection
of documents

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_StartRxNormInferenceJob.html

#### Defined in

actions/comprehendmedical.ts:142

___

### StartSNOMEDCTInferenceJob

• **StartSNOMEDCTInferenceJob** = ``"comprehendmedical:StartSNOMEDCTInferenceJob"``

Grants permission to start an asynchronous SNOMED-CT linking job for a collecti
on of documents

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_StartSNOMEDCTInferenceJob.html

#### Defined in

actions/comprehendmedical.ts:149

___

### StopEntitiesDetectionV2Job

• **StopEntitiesDetectionV2Job** = ``"comprehendmedical:StopEntitiesDetectionV2Job"``

Grants permission to stop a medical entity detection job

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_StopEntitiesDetectionV2Job.html

#### Defined in

actions/comprehendmedical.ts:155

___

### StopICD10CMInferenceJob

• **StopICD10CMInferenceJob** = ``"comprehendmedical:StopICD10CMInferenceJob"``

Grants permission to stop an ICD-10-CM linking job

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_StopICD10CMInferenceJob.html

#### Defined in

actions/comprehendmedical.ts:161

___

### StopPHIDetectionJob

• **StopPHIDetectionJob** = ``"comprehendmedical:StopPHIDetectionJob"``

Grants permission to stop a PHI entity detection job

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_StopPHIDetectionJob.html

#### Defined in

actions/comprehendmedical.ts:167

___

### StopRxNormInferenceJob

• **StopRxNormInferenceJob** = ``"comprehendmedical:StopRxNormInferenceJob"``

Grants permission to stop an RxNorm linking job

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_StopRxNormInferenceJob.html

#### Defined in

actions/comprehendmedical.ts:173

___

### StopSNOMEDCTInferenceJob

• **StopSNOMEDCTInferenceJob** = ``"comprehendmedical:StopSNOMEDCTInferenceJob"``

Grants permission to stop a SNOMED-CT linking job

See https://docs.aws.amazon.com/comprehend-medical/latest/api/API_StopSNOMEDCTInferenceJob.html

#### Defined in

actions/comprehendmedical.ts:179
