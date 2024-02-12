[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsFrauddetectorActions

# Enumeration: AwsFrauddetectorActions

All IAM policy actions for Amazon Fraud Detector (FRAUDDETECTOR)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html

2024-02-12T09:57:27.815Z

## Table of contents

### Enumeration Members

- [BatchCreateVariable](AwsFrauddetectorActions.md#batchcreatevariable)
- [BatchGetVariable](AwsFrauddetectorActions.md#batchgetvariable)
- [CancelBatchImportJob](AwsFrauddetectorActions.md#cancelbatchimportjob)
- [CancelBatchPredictionJob](AwsFrauddetectorActions.md#cancelbatchpredictionjob)
- [CreateBatchImportJob](AwsFrauddetectorActions.md#createbatchimportjob)
- [CreateBatchPredictionJob](AwsFrauddetectorActions.md#createbatchpredictionjob)
- [CreateDetectorVersion](AwsFrauddetectorActions.md#createdetectorversion)
- [CreateList](AwsFrauddetectorActions.md#createlist)
- [CreateModel](AwsFrauddetectorActions.md#createmodel)
- [CreateModelVersion](AwsFrauddetectorActions.md#createmodelversion)
- [CreateRule](AwsFrauddetectorActions.md#createrule)
- [CreateVariable](AwsFrauddetectorActions.md#createvariable)
- [DeleteBatchImportJob](AwsFrauddetectorActions.md#deletebatchimportjob)
- [DeleteBatchPredictionJob](AwsFrauddetectorActions.md#deletebatchpredictionjob)
- [DeleteDetector](AwsFrauddetectorActions.md#deletedetector)
- [DeleteDetectorVersion](AwsFrauddetectorActions.md#deletedetectorversion)
- [DeleteEntityType](AwsFrauddetectorActions.md#deleteentitytype)
- [DeleteEvent](AwsFrauddetectorActions.md#deleteevent)
- [DeleteEventType](AwsFrauddetectorActions.md#deleteeventtype)
- [DeleteEventsByEventType](AwsFrauddetectorActions.md#deleteeventsbyeventtype)
- [DeleteExternalModel](AwsFrauddetectorActions.md#deleteexternalmodel)
- [DeleteLabel](AwsFrauddetectorActions.md#deletelabel)
- [DeleteList](AwsFrauddetectorActions.md#deletelist)
- [DeleteModel](AwsFrauddetectorActions.md#deletemodel)
- [DeleteModelVersion](AwsFrauddetectorActions.md#deletemodelversion)
- [DeleteOutcome](AwsFrauddetectorActions.md#deleteoutcome)
- [DeleteRule](AwsFrauddetectorActions.md#deleterule)
- [DeleteVariable](AwsFrauddetectorActions.md#deletevariable)
- [DescribeDetector](AwsFrauddetectorActions.md#describedetector)
- [DescribeModelVersions](AwsFrauddetectorActions.md#describemodelversions)
- [GetBatchImportJobValidationReport](AwsFrauddetectorActions.md#getbatchimportjobvalidationreport)
- [GetBatchImportJobs](AwsFrauddetectorActions.md#getbatchimportjobs)
- [GetBatchPredictionJobs](AwsFrauddetectorActions.md#getbatchpredictionjobs)
- [GetDeleteEventsByEventTypeStatus](AwsFrauddetectorActions.md#getdeleteeventsbyeventtypestatus)
- [GetDetectorVersion](AwsFrauddetectorActions.md#getdetectorversion)
- [GetDetectors](AwsFrauddetectorActions.md#getdetectors)
- [GetEntityTypes](AwsFrauddetectorActions.md#getentitytypes)
- [GetEvent](AwsFrauddetectorActions.md#getevent)
- [GetEventPrediction](AwsFrauddetectorActions.md#geteventprediction)
- [GetEventPredictionMetadata](AwsFrauddetectorActions.md#geteventpredictionmetadata)
- [GetEventTypes](AwsFrauddetectorActions.md#geteventtypes)
- [GetExternalModels](AwsFrauddetectorActions.md#getexternalmodels)
- [GetKMSEncryptionKey](AwsFrauddetectorActions.md#getkmsencryptionkey)
- [GetLabels](AwsFrauddetectorActions.md#getlabels)
- [GetListElements](AwsFrauddetectorActions.md#getlistelements)
- [GetListsMetadata](AwsFrauddetectorActions.md#getlistsmetadata)
- [GetModelVersion](AwsFrauddetectorActions.md#getmodelversion)
- [GetModels](AwsFrauddetectorActions.md#getmodels)
- [GetOutcomes](AwsFrauddetectorActions.md#getoutcomes)
- [GetRules](AwsFrauddetectorActions.md#getrules)
- [GetVariables](AwsFrauddetectorActions.md#getvariables)
- [ListEventPredictions](AwsFrauddetectorActions.md#listeventpredictions)
- [ListTagsForResource](AwsFrauddetectorActions.md#listtagsforresource)
- [PutDetector](AwsFrauddetectorActions.md#putdetector)
- [PutEntityType](AwsFrauddetectorActions.md#putentitytype)
- [PutEventType](AwsFrauddetectorActions.md#puteventtype)
- [PutExternalModel](AwsFrauddetectorActions.md#putexternalmodel)
- [PutKMSEncryptionKey](AwsFrauddetectorActions.md#putkmsencryptionkey)
- [PutLabel](AwsFrauddetectorActions.md#putlabel)
- [PutOutcome](AwsFrauddetectorActions.md#putoutcome)
- [SendEvent](AwsFrauddetectorActions.md#sendevent)
- [TagResource](AwsFrauddetectorActions.md#tagresource)
- [UntagResource](AwsFrauddetectorActions.md#untagresource)
- [UpdateDetectorVersion](AwsFrauddetectorActions.md#updatedetectorversion)
- [UpdateDetectorVersionMetadata](AwsFrauddetectorActions.md#updatedetectorversionmetadata)
- [UpdateDetectorVersionStatus](AwsFrauddetectorActions.md#updatedetectorversionstatus)
- [UpdateEventLabel](AwsFrauddetectorActions.md#updateeventlabel)
- [UpdateList](AwsFrauddetectorActions.md#updatelist)
- [UpdateModel](AwsFrauddetectorActions.md#updatemodel)
- [UpdateModelVersion](AwsFrauddetectorActions.md#updatemodelversion)
- [UpdateModelVersionStatus](AwsFrauddetectorActions.md#updatemodelversionstatus)
- [UpdateRuleMetadata](AwsFrauddetectorActions.md#updaterulemetadata)
- [UpdateRuleVersion](AwsFrauddetectorActions.md#updateruleversion)
- [UpdateVariable](AwsFrauddetectorActions.md#updatevariable)

## Enumeration Members

### BatchCreateVariable

• **BatchCreateVariable** = ``"frauddetector:BatchCreateVariable"``

Grants permission to create a batch of variables

See https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchCreateVariable.html

#### Defined in

actions/frauddetector.ts:17

___

### BatchGetVariable

• **BatchGetVariable** = ``"frauddetector:BatchGetVariable"``

Grants permission to get a batch of variables

See https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchGetVariable.html

#### Defined in

actions/frauddetector.ts:23

___

### CancelBatchImportJob

• **CancelBatchImportJob** = ``"frauddetector:CancelBatchImportJob"``

Grants permission to cancel the specified batch import job

See https://docs.aws.amazon.com/frauddetector/latest/api/API_CancelBatchImportJob.html

#### Defined in

actions/frauddetector.ts:29

___

### CancelBatchPredictionJob

• **CancelBatchPredictionJob** = ``"frauddetector:CancelBatchPredictionJob"``

Grants permission to cancel the specified batch prediction job

See https://docs.aws.amazon.com/frauddetector/latest/api/API_CancelBatchPredictionJob.html

#### Defined in

actions/frauddetector.ts:35

___

### CreateBatchImportJob

• **CreateBatchImportJob** = ``"frauddetector:CreateBatchImportJob"``

Grants permission to create a batch import job

See https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateBatchImportJob.html

#### Defined in

actions/frauddetector.ts:41

___

### CreateBatchPredictionJob

• **CreateBatchPredictionJob** = ``"frauddetector:CreateBatchPredictionJob"``

Grants permission to create a batch prediction job

See https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateBatchPredictionJob.html

#### Defined in

actions/frauddetector.ts:47

___

### CreateDetectorVersion

• **CreateDetectorVersion** = ``"frauddetector:CreateDetectorVersion"``

Grants permission to create a detector version. The detector version starts in
a DRAFT status

See https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateDetectorVersion.html

#### Defined in

actions/frauddetector.ts:54

___

### CreateList

• **CreateList** = ``"frauddetector:CreateList"``

Grants permission to create a list

See https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateList.html

#### Defined in

actions/frauddetector.ts:60

___

### CreateModel

• **CreateModel** = ``"frauddetector:CreateModel"``

Grants permission to create a model using the specified model type

See https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModel.html

#### Defined in

actions/frauddetector.ts:66

___

### CreateModelVersion

• **CreateModelVersion** = ``"frauddetector:CreateModelVersion"``

Grants permission to create a version of the model using the specified model ty
pe and model id

See https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModelVersion.html

#### Defined in

actions/frauddetector.ts:73

___

### CreateRule

• **CreateRule** = ``"frauddetector:CreateRule"``

Grants permission to create a rule for use with the specified detector

See https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateRule.html

#### Defined in

actions/frauddetector.ts:79

___

### CreateVariable

• **CreateVariable** = ``"frauddetector:CreateVariable"``

Grants permission to create a variable

See https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateVariable.html

#### Defined in

actions/frauddetector.ts:85

___

### DeleteBatchImportJob

• **DeleteBatchImportJob** = ``"frauddetector:DeleteBatchImportJob"``

Grants permission to delete a batch import job

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteBatchImportJob.html

#### Defined in

actions/frauddetector.ts:91

___

### DeleteBatchPredictionJob

• **DeleteBatchPredictionJob** = ``"frauddetector:DeleteBatchPredictionJob"``

Grants permission to delete a batch prediction job

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteBatchPredictionJob.html

#### Defined in

actions/frauddetector.ts:97

___

### DeleteDetector

• **DeleteDetector** = ``"frauddetector:DeleteDetector"``

Grants permission to delete the detector. Before deleting a detector, you must
first delete all detector versions and rule versions associated with the detect
or

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetector.html

#### Defined in

actions/frauddetector.ts:105

___

### DeleteDetectorVersion

• **DeleteDetectorVersion** = ``"frauddetector:DeleteDetectorVersion"``

Grants permission to delete the detector version. You cannot delete detector ve
rsions that are in ACTIVE status

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetectorVersion.html

#### Defined in

actions/frauddetector.ts:112

___

### DeleteEntityType

• **DeleteEntityType** = ``"frauddetector:DeleteEntityType"``

Grants permission to delete an entity type. You cannot delete an entity type th
at is included in an event type

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEntityType.html

#### Defined in

actions/frauddetector.ts:119

___

### DeleteEvent

• **DeleteEvent** = ``"frauddetector:DeleteEvent"``

Grants permission to deletes the specified event

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEvent.html

#### Defined in

actions/frauddetector.ts:125

___

### DeleteEventType

• **DeleteEventType** = ``"frauddetector:DeleteEventType"``

Grants permission to delete an event type. You cannot delete an event type that
is used in a detector or a model

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEventType.html

#### Defined in

actions/frauddetector.ts:132

___

### DeleteEventsByEventType

• **DeleteEventsByEventType** = ``"frauddetector:DeleteEventsByEventType"``

Grants permission to delete events for the specified event type

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEventsByEventType.html

#### Defined in

actions/frauddetector.ts:138

___

### DeleteExternalModel

• **DeleteExternalModel** = ``"frauddetector:DeleteExternalModel"``

Grants permission to remove a SageMaker model from Amazon Fraud Detector. You c
an remove an Amazon SageMaker model if it is not associated with a detector ver
sion

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteExternalModel.html

#### Defined in

actions/frauddetector.ts:146

___

### DeleteLabel

• **DeleteLabel** = ``"frauddetector:DeleteLabel"``

Grants permission to delete a label. You cannot delete labels that are included
in an event type in Amazon Fraud Detector. You cannot delete a label assigned t
o an event ID. You must first delete the relevant event ID

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteLabel.html

#### Defined in

actions/frauddetector.ts:154

___

### DeleteList

• **DeleteList** = ``"frauddetector:DeleteList"``

Grants permission to delete a list

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteList.html

#### Defined in

actions/frauddetector.ts:160

___

### DeleteModel

• **DeleteModel** = ``"frauddetector:DeleteModel"``

Grants permission to delete a model. You can delete models and model versions i
n Amazon Fraud Detector, provided that they are not associated with a detector
version

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteModel.html

#### Defined in

actions/frauddetector.ts:168

___

### DeleteModelVersion

• **DeleteModelVersion** = ``"frauddetector:DeleteModelVersion"``

Grants permission to delete a model version. You can delete models and model ve
rsions in Amazon Fraud Detector, provided that they are not associated with a d
etector version

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteModelVersion.html

#### Defined in

actions/frauddetector.ts:176

___

### DeleteOutcome

• **DeleteOutcome** = ``"frauddetector:DeleteOutcome"``

Grants permission to delete an outcome. You cannot delete an outcome that is us
ed in a rule version

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteOutcome.html

#### Defined in

actions/frauddetector.ts:183

___

### DeleteRule

• **DeleteRule** = ``"frauddetector:DeleteRule"``

Grants permission to delete the rule. You cannot delete a rule if it is used by
an ACTIVE or INACTIVE detector version

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteRule.html

#### Defined in

actions/frauddetector.ts:190

___

### DeleteVariable

• **DeleteVariable** = ``"frauddetector:DeleteVariable"``

Grants permission to delete a variable. You cannot delete variables that are in
cluded in an event type in Amazon Fraud Detector

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteVariable.html

#### Defined in

actions/frauddetector.ts:197

___

### DescribeDetector

• **DescribeDetector** = ``"frauddetector:DescribeDetector"``

Grants permission to get all versions for a specified detector

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeDetector.html

#### Defined in

actions/frauddetector.ts:203

___

### DescribeModelVersions

• **DescribeModelVersions** = ``"frauddetector:DescribeModelVersions"``

Grants permission to get all of the model versions for the specified model type
or for the specified model type and model ID. You can also get details for a si
ngle, specified model version

See https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeModelVersions.html

#### Defined in

actions/frauddetector.ts:211

___

### GetBatchImportJobValidationReport

• **GetBatchImportJobValidationReport** = ``"frauddetector:GetBatchImportJobValidationReport"``

Grants permission to get the data validation report of a specific batch import
job

See https://docs.aws.amazon.com/frauddetector/latest/ug/prepare-storage-event-data.html#smart-data-validation

#### Defined in

actions/frauddetector.ts:218

___

### GetBatchImportJobs

• **GetBatchImportJobs** = ``"frauddetector:GetBatchImportJobs"``

Grants permission to get all batch import jobs or a specific job if you specify
a job ID

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetBatchImportJobs.html

#### Defined in

actions/frauddetector.ts:225

___

### GetBatchPredictionJobs

• **GetBatchPredictionJobs** = ``"frauddetector:GetBatchPredictionJobs"``

Grants permission to get all batch prediction jobs or a specific job if you spe
cify a job ID. This is a paginated API. If you provide a null maxResults, this
action retrieves a maximum of 50 records per page. If you provide a maxResults,
the value must be between 1 and 50. To get the next page results, provide the p
agination token from the GetBatchPredictionJobsResponse as part of your request
. A null pagination token fetches the records from the beginning

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetBatchPredictionJobs.html

#### Defined in

actions/frauddetector.ts:236

___

### GetDeleteEventsByEventTypeStatus

• **GetDeleteEventsByEventTypeStatus** = ``"frauddetector:GetDeleteEventsByEventTypeStatus"``

Grants permission to get a specific event type DeleteEventsByEventType API exec
ution status

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDeleteEventsByEventTypeStatus.html

#### Defined in

actions/frauddetector.ts:243

___

### GetDetectorVersion

• **GetDetectorVersion** = ``"frauddetector:GetDetectorVersion"``

Grants permission to get a particular detector version

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectorVersion.html

#### Defined in

actions/frauddetector.ts:249

___

### GetDetectors

• **GetDetectors** = ``"frauddetector:GetDetectors"``

Grants permission to get all detectors or a single detector if a detectorId is
specified. This is a paginated API. If you provide a null maxResults, this acti
on retrieves a maximum of 10 records per page. If you provide a maxResults, the
value must be between 5 and 10. To get the next page results, provide the pagin
ation token from the GetDetectorsResponse as part of your request. A null pagin
ation token fetches the records from the beginning

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectors.html

#### Defined in

actions/frauddetector.ts:260

___

### GetEntityTypes

• **GetEntityTypes** = ``"frauddetector:GetEntityTypes"``

Grants permission to get all entity types or a specific entity type if a name i
s specified. This is a paginated API. If you provide a null maxResults, this ac
tion retrieves a maximum of 10 records per page. If you provide a maxResults, t
he value must be between 5 and 10. To get the next page results, provide the pa
gination token from the GetEntityTypesResponse as part of your request. A null
pagination token fetches the records from the beginning

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEntityTypes.html

#### Defined in

actions/frauddetector.ts:271

___

### GetEvent

• **GetEvent** = ``"frauddetector:GetEvent"``

Grants permission to get the details of the specified event

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEvent.html

#### Defined in

actions/frauddetector.ts:277

___

### GetEventPrediction

• **GetEventPrediction** = ``"frauddetector:GetEventPrediction"``

Grants permission to evaluate an event against a detector version. If a version
ID is not provided, the detector’s (ACTIVE) version is used

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventPrediction.html

#### Defined in

actions/frauddetector.ts:284

___

### GetEventPredictionMetadata

• **GetEventPredictionMetadata** = ``"frauddetector:GetEventPredictionMetadata"``

Grants permission to get more details of a particular prediction

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventPredictionMetadata.html

#### Defined in

actions/frauddetector.ts:290

___

### GetEventTypes

• **GetEventTypes** = ``"frauddetector:GetEventTypes"``

Grants permission to get all event types or a specific event type if name is pr
ovided. This is a paginated API. If you provide a null maxResults, this action
retrieves a maximum of 10 records per page. If you provide a maxResults, the va
lue must be between 5 and 10. To get the next page results, provide the paginat
ion token from the GetEventTypesResponse as part of your request. A null pagina
tion token fetches the records from the beginning

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventTypes.html

#### Defined in

actions/frauddetector.ts:301

___

### GetExternalModels

• **GetExternalModels** = ``"frauddetector:GetExternalModels"``

Grants permission to get the details for one or more Amazon SageMaker models th
at have been imported into the service. This is a paginated API. If you provide
a null maxResults, this actions retrieves a maximum of 10 records per page. If
you provide a maxResults, the value must be between 5 and 10. To get the next p
age results, provide the pagination token from the GetExternalModelsResult as p
art of your request. A null pagination token fetches the records from the begin
ning

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetExternalModels.html

#### Defined in

actions/frauddetector.ts:313

___

### GetKMSEncryptionKey

• **GetKMSEncryptionKey** = ``"frauddetector:GetKMSEncryptionKey"``

Grants permission to get the encryption key if a Key Management Service (KMS) c
ustomer master key (CMK) has been specified to be used to encrypt content in Am
azon Fraud Detector

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetKMSEncryptionKey.html

#### Defined in

actions/frauddetector.ts:321

___

### GetLabels

• **GetLabels** = ``"frauddetector:GetLabels"``

Grants permission to get all labels or a specific label if name is provided. Th
is is a paginated API. If you provide a null maxResults, this action retrieves
a maximum of 50 records per page. If you provide a maxResults, the value must b
e between 10 and 50. To get the next page results, provide the pagination token
from the GetGetLabelsResponse as part of your request. A null pagination token
fetches the records from the beginning

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetLabels.html

#### Defined in

actions/frauddetector.ts:332

___

### GetListElements

• **GetListElements** = ``"frauddetector:GetListElements"``

Grants permission to get elements of a list

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetListElements.html

#### Defined in

actions/frauddetector.ts:338

___

### GetListsMetadata

• **GetListsMetadata** = ``"frauddetector:GetListsMetadata"``

Grants permission to get metadata about lists

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetListsMetadata.html

#### Defined in

actions/frauddetector.ts:344

___

### GetModelVersion

• **GetModelVersion** = ``"frauddetector:GetModelVersion"``

Grants permission to get the details of the specified model version

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModelVersion.html

#### Defined in

actions/frauddetector.ts:350

___

### GetModels

• **GetModels** = ``"frauddetector:GetModels"``

Grants permission to get one or more models. Gets all models for the AWS accoun
t if no model type and no model id provided. Gets all models for the AWS accoun
t and model type, if the model type is specified but model id is not provided.
Gets a specific model if (model type, model id) tuple is specified

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModels.html

#### Defined in

actions/frauddetector.ts:359

___

### GetOutcomes

• **GetOutcomes** = ``"frauddetector:GetOutcomes"``

Grants permission to get one or more outcomes. This is a paginated API. If you
provide a null maxResults, this actions retrieves a maximum of 100 records per
page. If you provide a maxResults, the value must be between 50 and 100. To get
the next page results, provide the pagination token from the GetOutcomesResult
as part of your request. A null pagination token fetches the records from the b
eginning

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetOutcomes.html

#### Defined in

actions/frauddetector.ts:370

___

### GetRules

• **GetRules** = ``"frauddetector:GetRules"``

Grants permission to get all rules for a detector (paginated) if ruleId and rul
eVersion are not specified. Gets all rules for the detector and the ruleId if p
resent (paginated). Gets a specific rule if both the ruleId and the ruleVersion
are specified

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetRules.html

#### Defined in

actions/frauddetector.ts:379

___

### GetVariables

• **GetVariables** = ``"frauddetector:GetVariables"``

Grants permission to get all of the variables or the specific variable. This is
a paginated API. Providing null maxSizePerPage results in retrieving maximum of
100 records per page. If you provide maxSizePerPage the value must be between 5
0 and 100. To get the next page result, a provide a pagination token from GetVa
riablesResult as part of your request. Null pagination token fetches the record
s from the beginning

See https://docs.aws.amazon.com/frauddetector/latest/api/API_GetVariables.html

#### Defined in

actions/frauddetector.ts:390

___

### ListEventPredictions

• **ListEventPredictions** = ``"frauddetector:ListEventPredictions"``

Grants permission to get a list of past predictions

See https://docs.aws.amazon.com/frauddetector/latest/api/API_ListEventPredictions.html

#### Defined in

actions/frauddetector.ts:396

___

### ListTagsForResource

• **ListTagsForResource** = ``"frauddetector:ListTagsForResource"``

Grants permission to list all tags associated with the resource. This is a pagi
nated API. To get the next page results, provide the pagination token from the
response as part of your request. A null pagination token fetches the records f
rom the beginning

See https://docs.aws.amazon.com/frauddetector/latest/api/API_ListTagsForResource.html

#### Defined in

actions/frauddetector.ts:405

___

### PutDetector

• **PutDetector** = ``"frauddetector:PutDetector"``

Grants permission to create or update a detector

See https://docs.aws.amazon.com/frauddetector/latest/api/API_PutDetector.html

#### Defined in

actions/frauddetector.ts:411

___

### PutEntityType

• **PutEntityType** = ``"frauddetector:PutEntityType"``

Grants permission to create or update an entity type. An entity represents who
is performing the event. As part of a fraud prediction, you pass the entity ID
to indicate the specific entity who performed the event. An entity type classif
ies the entity. Example classifications include customer, merchant, or account

See https://docs.aws.amazon.com/frauddetector/latest/api/API_PutEntityType.html

#### Defined in

actions/frauddetector.ts:420

___

### PutEventType

• **PutEventType** = ``"frauddetector:PutEventType"``

Grants permission to create or update an event type. An event is a business act
ivity that is evaluated for fraud risk. With Amazon Fraud Detector, you generat
e fraud predictions for events. An event type defines the structure for an even
t sent to Amazon Fraud Detector. This includes the variables sent as part of th
e event, the entity performing the event (such as a customer), and the labels t
hat classify the event. Example event types include online payment transactions
, account registrations, and authentications

See https://docs.aws.amazon.com/frauddetector/latest/api/API_PutEventType.html

#### Defined in

actions/frauddetector.ts:432

___

### PutExternalModel

• **PutExternalModel** = ``"frauddetector:PutExternalModel"``

Grants permission to create or update an Amazon SageMaker model endpoint. You c
an also use this action to update the configuration of the model endpoint, incl
uding the IAM role and/or the mapped variables

See https://docs.aws.amazon.com/frauddetector/latest/api/API_PutExternalModel.html

#### Defined in

actions/frauddetector.ts:440

___

### PutKMSEncryptionKey

• **PutKMSEncryptionKey** = ``"frauddetector:PutKMSEncryptionKey"``

Grants permission to specify the Key Management Service (KMS) customer master k
ey (CMK) to be used to encrypt content in Amazon Fraud Detector

See https://docs.aws.amazon.com/frauddetector/latest/api/API_PutKMSEncryptionKey.html

#### Defined in

actions/frauddetector.ts:447

___

### PutLabel

• **PutLabel** = ``"frauddetector:PutLabel"``

Grants permission to create or update label. A label classifies an event as fra
udulent or legitimate. Labels are associated with event types and used to train
supervised machine learning models in Amazon Fraud Detector

See https://docs.aws.amazon.com/frauddetector/latest/api/API_PutLabel.html

#### Defined in

actions/frauddetector.ts:455

___

### PutOutcome

• **PutOutcome** = ``"frauddetector:PutOutcome"``

Grants permission to create or update an outcome

See https://docs.aws.amazon.com/frauddetector/latest/api/API_PutOutcome.html

#### Defined in

actions/frauddetector.ts:461

___

### SendEvent

• **SendEvent** = ``"frauddetector:SendEvent"``

Grants permission to send event

See https://docs.aws.amazon.com/frauddetector/latest/api/API_SendEvent.html

#### Defined in

actions/frauddetector.ts:467

___

### TagResource

• **TagResource** = ``"frauddetector:TagResource"``

Grants permission to assign tags to a resource

See https://docs.aws.amazon.com/frauddetector/latest/api/API_TagResource.html

#### Defined in

actions/frauddetector.ts:473

___

### UntagResource

• **UntagResource** = ``"frauddetector:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UntagResource.html

#### Defined in

actions/frauddetector.ts:479

___

### UpdateDetectorVersion

• **UpdateDetectorVersion** = ``"frauddetector:UpdateDetectorVersion"``

Grants permission to update a detector version. The detector version attributes
that you can update include models, external model endpoints, rules, rule execu
tion mode, and description. You can only update a DRAFT detector version

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersion.html

#### Defined in

actions/frauddetector.ts:487

___

### UpdateDetectorVersionMetadata

• **UpdateDetectorVersionMetadata** = ``"frauddetector:UpdateDetectorVersionMetadata"``

Grants permission to update the detector version's description. You can update
the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE)

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionMetadata.html

#### Defined in

actions/frauddetector.ts:494

___

### UpdateDetectorVersionStatus

• **UpdateDetectorVersionStatus** = ``"frauddetector:UpdateDetectorVersionStatus"``

Grants permission to update the detector version’s status. You can perform the
following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to A
CTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionStatus.html

#### Defined in

actions/frauddetector.ts:502

___

### UpdateEventLabel

• **UpdateEventLabel** = ``"frauddetector:UpdateEventLabel"``

Grants permission to update an existing event record's label value

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateEventLabel.html

#### Defined in

actions/frauddetector.ts:508

___

### UpdateList

• **UpdateList** = ``"frauddetector:UpdateList"``

Grants permission to update a list

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateList.html

#### Defined in

actions/frauddetector.ts:514

___

### UpdateModel

• **UpdateModel** = ``"frauddetector:UpdateModel"``

Grants permission to update a model. You can update the description attribute u
sing this action

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModel.html

#### Defined in

actions/frauddetector.ts:521

___

### UpdateModelVersion

• **UpdateModelVersion** = ``"frauddetector:UpdateModelVersion"``

Grants permission to update a model version. Updating a model version retrains
an existing model version using updated training data and produces a new minor
version of the model. You can update the training data set location and data ac
cess role attributes using this action. This action creates and trains a new mi
nor version of the model, for example version 1.01, 1.02, 1.03

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersion.html

#### Defined in

actions/frauddetector.ts:531

___

### UpdateModelVersionStatus

• **UpdateModelVersionStatus** = ``"frauddetector:UpdateModelVersionStatus"``

Grants permission to update the status of a model version

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersionStatus.html

#### Defined in

actions/frauddetector.ts:537

___

### UpdateRuleMetadata

• **UpdateRuleMetadata** = ``"frauddetector:UpdateRuleMetadata"``

Grants permission to update a rule's metadata. The description attribute can be
updated

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleMetadata.html

#### Defined in

actions/frauddetector.ts:544

___

### UpdateRuleVersion

• **UpdateRuleVersion** = ``"frauddetector:UpdateRuleVersion"``

Grants permission to update a rule version resulting in a new rule version. Upd
ates a rule version resulting in a new rule version (version 1, 2, 3 ...)

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleVersion.html

#### Defined in

actions/frauddetector.ts:551

___

### UpdateVariable

• **UpdateVariable** = ``"frauddetector:UpdateVariable"``

Grants permission to update a variable

See https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateVariable.html

#### Defined in

actions/frauddetector.ts:557
