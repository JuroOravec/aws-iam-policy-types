[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsRekognitionActions

# Enumeration: AwsRekognitionActions

All IAM policy actions for Amazon Rekognition (REKOGNITION)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrekognition.html

2024-02-12T09:58:53.685Z

## Table of contents

### Enumeration Members

- [AssociateFaces](AwsRekognitionActions.md#associatefaces)
- [CompareFaces](AwsRekognitionActions.md#comparefaces)
- [CopyProjectVersion](AwsRekognitionActions.md#copyprojectversion)
- [CreateCollection](AwsRekognitionActions.md#createcollection)
- [CreateDataset](AwsRekognitionActions.md#createdataset)
- [CreateFaceLivenessSession](AwsRekognitionActions.md#createfacelivenesssession)
- [CreateProject](AwsRekognitionActions.md#createproject)
- [CreateProjectVersion](AwsRekognitionActions.md#createprojectversion)
- [CreateStreamProcessor](AwsRekognitionActions.md#createstreamprocessor)
- [CreateUser](AwsRekognitionActions.md#createuser)
- [DeleteCollection](AwsRekognitionActions.md#deletecollection)
- [DeleteDataset](AwsRekognitionActions.md#deletedataset)
- [DeleteFaces](AwsRekognitionActions.md#deletefaces)
- [DeleteProject](AwsRekognitionActions.md#deleteproject)
- [DeleteProjectPolicy](AwsRekognitionActions.md#deleteprojectpolicy)
- [DeleteProjectVersion](AwsRekognitionActions.md#deleteprojectversion)
- [DeleteStreamProcessor](AwsRekognitionActions.md#deletestreamprocessor)
- [DeleteUser](AwsRekognitionActions.md#deleteuser)
- [DescribeCollection](AwsRekognitionActions.md#describecollection)
- [DescribeDataset](AwsRekognitionActions.md#describedataset)
- [DescribeProjectVersions](AwsRekognitionActions.md#describeprojectversions)
- [DescribeProjects](AwsRekognitionActions.md#describeprojects)
- [DescribeStreamProcessor](AwsRekognitionActions.md#describestreamprocessor)
- [DetectCustomLabels](AwsRekognitionActions.md#detectcustomlabels)
- [DetectFaces](AwsRekognitionActions.md#detectfaces)
- [DetectLabels](AwsRekognitionActions.md#detectlabels)
- [DetectModerationLabels](AwsRekognitionActions.md#detectmoderationlabels)
- [DetectProtectiveEquipment](AwsRekognitionActions.md#detectprotectiveequipment)
- [DetectText](AwsRekognitionActions.md#detecttext)
- [DisassociateFaces](AwsRekognitionActions.md#disassociatefaces)
- [DistributeDatasetEntries](AwsRekognitionActions.md#distributedatasetentries)
- [GetCelebrityInfo](AwsRekognitionActions.md#getcelebrityinfo)
- [GetCelebrityRecognition](AwsRekognitionActions.md#getcelebrityrecognition)
- [GetContentModeration](AwsRekognitionActions.md#getcontentmoderation)
- [GetFaceDetection](AwsRekognitionActions.md#getfacedetection)
- [GetFaceLivenessSessionResults](AwsRekognitionActions.md#getfacelivenesssessionresults)
- [GetFaceSearch](AwsRekognitionActions.md#getfacesearch)
- [GetLabelDetection](AwsRekognitionActions.md#getlabeldetection)
- [GetMediaAnalysisJob](AwsRekognitionActions.md#getmediaanalysisjob)
- [GetPersonTracking](AwsRekognitionActions.md#getpersontracking)
- [GetSegmentDetection](AwsRekognitionActions.md#getsegmentdetection)
- [GetTextDetection](AwsRekognitionActions.md#gettextdetection)
- [IndexFaces](AwsRekognitionActions.md#indexfaces)
- [ListCollections](AwsRekognitionActions.md#listcollections)
- [ListDatasetEntries](AwsRekognitionActions.md#listdatasetentries)
- [ListDatasetLabels](AwsRekognitionActions.md#listdatasetlabels)
- [ListFaces](AwsRekognitionActions.md#listfaces)
- [ListMediaAnalysisJobs](AwsRekognitionActions.md#listmediaanalysisjobs)
- [ListProjectPolicies](AwsRekognitionActions.md#listprojectpolicies)
- [ListStreamProcessors](AwsRekognitionActions.md#liststreamprocessors)
- [ListTagsForResource](AwsRekognitionActions.md#listtagsforresource)
- [ListUsers](AwsRekognitionActions.md#listusers)
- [PutProjectPolicy](AwsRekognitionActions.md#putprojectpolicy)
- [RecognizeCelebrities](AwsRekognitionActions.md#recognizecelebrities)
- [SearchFaces](AwsRekognitionActions.md#searchfaces)
- [SearchFacesByImage](AwsRekognitionActions.md#searchfacesbyimage)
- [SearchUsers](AwsRekognitionActions.md#searchusers)
- [SearchUsersByImage](AwsRekognitionActions.md#searchusersbyimage)
- [StartCelebrityRecognition](AwsRekognitionActions.md#startcelebrityrecognition)
- [StartContentModeration](AwsRekognitionActions.md#startcontentmoderation)
- [StartFaceDetection](AwsRekognitionActions.md#startfacedetection)
- [StartFaceLivenessSession](AwsRekognitionActions.md#startfacelivenesssession)
- [StartFaceSearch](AwsRekognitionActions.md#startfacesearch)
- [StartLabelDetection](AwsRekognitionActions.md#startlabeldetection)
- [StartMediaAnalysisJob](AwsRekognitionActions.md#startmediaanalysisjob)
- [StartPersonTracking](AwsRekognitionActions.md#startpersontracking)
- [StartProjectVersion](AwsRekognitionActions.md#startprojectversion)
- [StartSegmentDetection](AwsRekognitionActions.md#startsegmentdetection)
- [StartStreamProcessor](AwsRekognitionActions.md#startstreamprocessor)
- [StartTextDetection](AwsRekognitionActions.md#starttextdetection)
- [StopProjectVersion](AwsRekognitionActions.md#stopprojectversion)
- [StopStreamProcessor](AwsRekognitionActions.md#stopstreamprocessor)
- [TagResource](AwsRekognitionActions.md#tagresource)
- [UntagResource](AwsRekognitionActions.md#untagresource)
- [UpdateDatasetEntries](AwsRekognitionActions.md#updatedatasetentries)
- [UpdateStreamProcessor](AwsRekognitionActions.md#updatestreamprocessor)

## Enumeration Members

### AssociateFaces

• **AssociateFaces** = ``"rekognition:AssociateFaces"``

Grants permission to associate multiple individual faces with a single user

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_AssociateFaces.html

#### Defined in

actions/rekognition.ts:17

___

### CompareFaces

• **CompareFaces** = ``"rekognition:CompareFaces"``

Grants permission to compare faces in the source input image with each face det
ected in the target input image

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CompareFaces.html

#### Defined in

actions/rekognition.ts:24

___

### CopyProjectVersion

• **CopyProjectVersion** = ``"rekognition:CopyProjectVersion"``

Grants permission to copy an existing model version to a new model version

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CopyProjectVersion.html

#### Defined in

actions/rekognition.ts:30

___

### CreateCollection

• **CreateCollection** = ``"rekognition:CreateCollection"``

Grants permission to create a collection in an AWS Region

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateCollection.html

#### Defined in

actions/rekognition.ts:36

___

### CreateDataset

• **CreateDataset** = ``"rekognition:CreateDataset"``

Grants permission to create a new Amazon Rekognition Custom Labels dataset

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateDataset.html

#### Defined in

actions/rekognition.ts:42

___

### CreateFaceLivenessSession

• **CreateFaceLivenessSession** = ``"rekognition:CreateFaceLivenessSession"``

Grants permission to create a face liveness session

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateFaceLivenessSession.html

#### Defined in

actions/rekognition.ts:48

___

### CreateProject

• **CreateProject** = ``"rekognition:CreateProject"``

Grants permission to create an Amazon Rekognition Custom Labels project

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateProject.html

#### Defined in

actions/rekognition.ts:54

___

### CreateProjectVersion

• **CreateProjectVersion** = ``"rekognition:CreateProjectVersion"``

Grants permission to begin training a new version of a model

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateProjectVersion.html

#### Defined in

actions/rekognition.ts:60

___

### CreateStreamProcessor

• **CreateStreamProcessor** = ``"rekognition:CreateStreamProcessor"``

Grants permission to create an Amazon Rekognition stream processor

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor.html

#### Defined in

actions/rekognition.ts:66

___

### CreateUser

• **CreateUser** = ``"rekognition:CreateUser"``

Grants permission to create a new user in a collection using a unique user ID y
ou provide

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateUser.html

#### Defined in

actions/rekognition.ts:73

___

### DeleteCollection

• **DeleteCollection** = ``"rekognition:DeleteCollection"``

Grants permission to delete the specified collection

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteCollection.html

#### Defined in

actions/rekognition.ts:79

___

### DeleteDataset

• **DeleteDataset** = ``"rekognition:DeleteDataset"``

Grants permission to delete an existing Amazon Rekognition Custom Labels datase
t

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteDataset.html

#### Defined in

actions/rekognition.ts:86

___

### DeleteFaces

• **DeleteFaces** = ``"rekognition:DeleteFaces"``

Grants permission to delete faces from a collection

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteFaces.html

#### Defined in

actions/rekognition.ts:92

___

### DeleteProject

• **DeleteProject** = ``"rekognition:DeleteProject"``

Grants permission to delete a project

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProject.html

#### Defined in

actions/rekognition.ts:98

___

### DeleteProjectPolicy

• **DeleteProjectPolicy** = ``"rekognition:DeleteProjectPolicy"``

Grants permission to delete a resource policy attached to a project

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProjectPolicy.html

#### Defined in

actions/rekognition.ts:104

___

### DeleteProjectVersion

• **DeleteProjectVersion** = ``"rekognition:DeleteProjectVersion"``

Grants permission to delete a model

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProjectVersion.html

#### Defined in

actions/rekognition.ts:110

___

### DeleteStreamProcessor

• **DeleteStreamProcessor** = ``"rekognition:DeleteStreamProcessor"``

Grants permission to delete the specified stream processor

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteStreamProcessor.html

#### Defined in

actions/rekognition.ts:116

___

### DeleteUser

• **DeleteUser** = ``"rekognition:DeleteUser"``

Grants permission to delete a user from a collection based on the provided user
ID

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteUser.html

#### Defined in

actions/rekognition.ts:123

___

### DescribeCollection

• **DescribeCollection** = ``"rekognition:DescribeCollection"``

Grants permission to read details about a collection

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeCollection.html

#### Defined in

actions/rekognition.ts:129

___

### DescribeDataset

• **DescribeDataset** = ``"rekognition:DescribeDataset"``

Grants permission to describe an Amazon Rekognition Custom Labels dataset

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeDataset.html

#### Defined in

actions/rekognition.ts:135

___

### DescribeProjectVersions

• **DescribeProjectVersions** = ``"rekognition:DescribeProjectVersions"``

Grants permission to list the versions of a model in an Amazon Rekognition Cust
om Labels project

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeProjectVersions.html

#### Defined in

actions/rekognition.ts:142

___

### DescribeProjects

• **DescribeProjects** = ``"rekognition:DescribeProjects"``

Grants permission to list Amazon Rekognition Custom Labels projects

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeProjects.html

#### Defined in

actions/rekognition.ts:148

___

### DescribeStreamProcessor

• **DescribeStreamProcessor** = ``"rekognition:DescribeStreamProcessor"``

Grants permission to get information about the specified stream processor

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeStreamProcessor.html

#### Defined in

actions/rekognition.ts:154

___

### DetectCustomLabels

• **DetectCustomLabels** = ``"rekognition:DetectCustomLabels"``

Grants permission to detect custom labels in a supplied image

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectCustomLabels.html

#### Defined in

actions/rekognition.ts:160

___

### DetectFaces

• **DetectFaces** = ``"rekognition:DetectFaces"``

Grants permission to detect human faces within an image provided as input

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectFaces.html

#### Defined in

actions/rekognition.ts:166

___

### DetectLabels

• **DetectLabels** = ``"rekognition:DetectLabels"``

Grants permission to detect instances of real-world labels within an image prov
ided as input

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectLabels.html

#### Defined in

actions/rekognition.ts:173

___

### DetectModerationLabels

• **DetectModerationLabels** = ``"rekognition:DetectModerationLabels"``

Grants permission to detect moderation labels within the input image

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectModerationLabels.html

#### Defined in

actions/rekognition.ts:179

___

### DetectProtectiveEquipment

• **DetectProtectiveEquipment** = ``"rekognition:DetectProtectiveEquipment"``

Grants permission to detect Personal Protective Equipment in the input image

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectProtectiveEquipment.html

#### Defined in

actions/rekognition.ts:185

___

### DetectText

• **DetectText** = ``"rekognition:DetectText"``

Grants permission to detect text in the input image and convert it into machine
-readable text

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectText.html

#### Defined in

actions/rekognition.ts:192

___

### DisassociateFaces

• **DisassociateFaces** = ``"rekognition:DisassociateFaces"``

Grants permission to remove the association between a user ID and a face ID

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DisassociateFaces.html

#### Defined in

actions/rekognition.ts:198

___

### DistributeDatasetEntries

• **DistributeDatasetEntries** = ``"rekognition:DistributeDatasetEntries"``

Grants permission to distribute the entries in a training dataset across the tr
aining dataset and the test dataset for a project

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DistributeDatasetEntries.html

#### Defined in

actions/rekognition.ts:205

___

### GetCelebrityInfo

• **GetCelebrityInfo** = ``"rekognition:GetCelebrityInfo"``

Grants permission to read the name, and additional information, of a celebrity

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetCelebrityInfo.html

#### Defined in

actions/rekognition.ts:211

___

### GetCelebrityRecognition

• **GetCelebrityRecognition** = ``"rekognition:GetCelebrityRecognition"``

Grants permission to read the celebrity recognition results found in a stored v
ideo by an asynchronous celebrity recognition job

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetCelebrityRecognition.html

#### Defined in

actions/rekognition.ts:218

___

### GetContentModeration

• **GetContentModeration** = ``"rekognition:GetContentModeration"``

Grants permission to read the content moderation analysis results found in a st
ored video by an asynchronous content moderation job

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetContentModeration.html

#### Defined in

actions/rekognition.ts:225

___

### GetFaceDetection

• **GetFaceDetection** = ``"rekognition:GetFaceDetection"``

Grants permission to read the faces detection results found in a stored video b
y an asynchronous face detection job

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceDetection.html

#### Defined in

actions/rekognition.ts:232

___

### GetFaceLivenessSessionResults

• **GetFaceLivenessSessionResults** = ``"rekognition:GetFaceLivenessSessionResults"``

Grants permission to get results of a face liveness session

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceLivenessSessionResults.html

#### Defined in

actions/rekognition.ts:238

___

### GetFaceSearch

• **GetFaceSearch** = ``"rekognition:GetFaceSearch"``

Grants permission to read the matching collection faces found in a stored video
by an asynchronous face search job

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceSearch.html

#### Defined in

actions/rekognition.ts:245

___

### GetLabelDetection

• **GetLabelDetection** = ``"rekognition:GetLabelDetection"``

Grants permission to read the label detected resuls found in a stored video by
an asynchronous label detection job

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetLabelDetection.html

#### Defined in

actions/rekognition.ts:252

___

### GetMediaAnalysisJob

• **GetMediaAnalysisJob** = ``"rekognition:GetMediaAnalysisJob"``

Grants permission to read the reference to job results in S3 and additional inf
ormation about a media analysis job

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetMediaAnalysisJob.html

#### Defined in

actions/rekognition.ts:259

___

### GetPersonTracking

• **GetPersonTracking** = ``"rekognition:GetPersonTracking"``

Grants permission to read the list of persons detected in a stored video by an
asynchronous person tracking job

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetPersonTracking.html

#### Defined in

actions/rekognition.ts:266

___

### GetSegmentDetection

• **GetSegmentDetection** = ``"rekognition:GetSegmentDetection"``

Grants permission to get the vdeo segments found in a stored video by an asynch
ronous segment detection job

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetSegmentDetection.html

#### Defined in

actions/rekognition.ts:273

___

### GetTextDetection

• **GetTextDetection** = ``"rekognition:GetTextDetection"``

Grants permission to get the text found in a stored video by an asynchronous te
xt detection job

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetTextDetection.html

#### Defined in

actions/rekognition.ts:280

___

### IndexFaces

• **IndexFaces** = ``"rekognition:IndexFaces"``

Grants permission to update an existing collection with faces detected in the i
nput image

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_IndexFaces.html

#### Defined in

actions/rekognition.ts:287

___

### ListCollections

• **ListCollections** = ``"rekognition:ListCollections"``

Grants permission to read the collection Id's in your account

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListCollections.html

#### Defined in

actions/rekognition.ts:293

___

### ListDatasetEntries

• **ListDatasetEntries** = ``"rekognition:ListDatasetEntries"``

Grants permission to list the dataset entries in an existing Amazon Rekognition
Custom Labels dataset

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListDatasetEntries.html

#### Defined in

actions/rekognition.ts:300

___

### ListDatasetLabels

• **ListDatasetLabels** = ``"rekognition:ListDatasetLabels"``

Grants permission to list the labels in a dataset

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListDatasetLabels.html

#### Defined in

actions/rekognition.ts:306

___

### ListFaces

• **ListFaces** = ``"rekognition:ListFaces"``

Grants permission to read metadata for faces in the specificed collection

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListFaces.html

#### Defined in

actions/rekognition.ts:312

___

### ListMediaAnalysisJobs

• **ListMediaAnalysisJobs** = ``"rekognition:ListMediaAnalysisJobs"``

Grants permission to read the list of media analysis jobs

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListMediaAnalysisJobs.html

#### Defined in

actions/rekognition.ts:318

___

### ListProjectPolicies

• **ListProjectPolicies** = ``"rekognition:ListProjectPolicies"``

Grants permission to list the resource policies attached to a project

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListProjectPolicies.html

#### Defined in

actions/rekognition.ts:324

___

### ListStreamProcessors

• **ListStreamProcessors** = ``"rekognition:ListStreamProcessors"``

Grants permission to get a list of your stream processors

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListStreamProcessors.html

#### Defined in

actions/rekognition.ts:330

___

### ListTagsForResource

• **ListTagsForResource** = ``"rekognition:ListTagsForResource"``

Grants permission to return a list of tags associated with a resource

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/rekognition.ts:336

___

### ListUsers

• **ListUsers** = ``"rekognition:ListUsers"``

Grants permission to list UserIds and the UserStatus

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListUsers.html

#### Defined in

actions/rekognition.ts:342

___

### PutProjectPolicy

• **PutProjectPolicy** = ``"rekognition:PutProjectPolicy"``

Grants permission to attach a resource policy to a project

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_PutProjectPolicy.html

#### Defined in

actions/rekognition.ts:348

___

### RecognizeCelebrities

• **RecognizeCelebrities** = ``"rekognition:RecognizeCelebrities"``

Grants permission to detect celebrities in the input image

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_RecognizeCelebrities.html

#### Defined in

actions/rekognition.ts:354

___

### SearchFaces

• **SearchFaces** = ``"rekognition:SearchFaces"``

Grants permission to search the specificed collection for the supplied face ID

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFaces.html

#### Defined in

actions/rekognition.ts:360

___

### SearchFacesByImage

• **SearchFacesByImage** = ``"rekognition:SearchFacesByImage"``

Grants permission to search the specificed collection for the largest face in t
he input image

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFacesByImage.html

#### Defined in

actions/rekognition.ts:367

___

### SearchUsers

• **SearchUsers** = ``"rekognition:SearchUsers"``

Grants permission to search the specificed collection for user match result wit
h given either face ID or user ID

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchUsers.html

#### Defined in

actions/rekognition.ts:374

___

### SearchUsersByImage

• **SearchUsersByImage** = ``"rekognition:SearchUsersByImage"``

Grants permission to search the specificed collection for user match result by
using the largest face in the input image

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchUsersByImage.html

#### Defined in

actions/rekognition.ts:381

___

### StartCelebrityRecognition

• **StartCelebrityRecognition** = ``"rekognition:StartCelebrityRecognition"``

Grants permission to start the asynchronous recognition of celebrities in a sto
red video

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartCelebrityRecognition.html

#### Defined in

actions/rekognition.ts:388

___

### StartContentModeration

• **StartContentModeration** = ``"rekognition:StartContentModeration"``

Grants permission to start asynchronous detection of explicit or suggestive adu
lt content in a stored video

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartContentModeration.html

#### Defined in

actions/rekognition.ts:395

___

### StartFaceDetection

• **StartFaceDetection** = ``"rekognition:StartFaceDetection"``

Grants permission to start asynchronous detection of faces in a stored video

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceDetection.html

#### Defined in

actions/rekognition.ts:401

___

### StartFaceLivenessSession

• **StartFaceLivenessSession** = ``"rekognition:StartFaceLivenessSession"``

Grants permission to start streaming video for a face liveness session

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_rekognitionstreaming_StartFaceLivenessSession.html

#### Defined in

actions/rekognition.ts:407

___

### StartFaceSearch

• **StartFaceSearch** = ``"rekognition:StartFaceSearch"``

Grants permission to start an asynchronous search for faces in a collection tha
t match the faces of persons detected in a stored video

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceSearch.html

#### Defined in

actions/rekognition.ts:414

___

### StartLabelDetection

• **StartLabelDetection** = ``"rekognition:StartLabelDetection"``

Grants permission to start asynchronous detection of labels in a stored video

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartLabelDetection.html

#### Defined in

actions/rekognition.ts:420

___

### StartMediaAnalysisJob

• **StartMediaAnalysisJob** = ``"rekognition:StartMediaAnalysisJob"``

Grants permission to start a media analysis job

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartMediaAnalysisJob.html

#### Defined in

actions/rekognition.ts:426

___

### StartPersonTracking

• **StartPersonTracking** = ``"rekognition:StartPersonTracking"``

Grants permission to start the asynchronous tracking of persons in a stored vid
eo

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartPersonTracking.html

#### Defined in

actions/rekognition.ts:433

___

### StartProjectVersion

• **StartProjectVersion** = ``"rekognition:StartProjectVersion"``

Grants permission to start running a model version

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartProjectVersion.html

#### Defined in

actions/rekognition.ts:439

___

### StartSegmentDetection

• **StartSegmentDetection** = ``"rekognition:StartSegmentDetection"``

Grants permission to start the asynchronous detection of segments in a stored v
ideo

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartSegmentDetection.html

#### Defined in

actions/rekognition.ts:446

___

### StartStreamProcessor

• **StartStreamProcessor** = ``"rekognition:StartStreamProcessor"``

Grants permission to start running a stream processor

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartStreamProcessor.html

#### Defined in

actions/rekognition.ts:452

___

### StartTextDetection

• **StartTextDetection** = ``"rekognition:StartTextDetection"``

Grants permission to start the asynchronous detection of text in a stored video

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartTextDetection.html

#### Defined in

actions/rekognition.ts:458

___

### StopProjectVersion

• **StopProjectVersion** = ``"rekognition:StopProjectVersion"``

Grants permission to stop a running model version

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StopProjectVersion.html

#### Defined in

actions/rekognition.ts:464

___

### StopStreamProcessor

• **StopStreamProcessor** = ``"rekognition:StopStreamProcessor"``

Grants permission to stop  a running stream processor

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StopStreamProcessor.html

#### Defined in

actions/rekognition.ts:470

___

### TagResource

• **TagResource** = ``"rekognition:TagResource"``

Grants permission to add one or more tags to a resource

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_TagResource.html

#### Defined in

actions/rekognition.ts:476

___

### UntagResource

• **UntagResource** = ``"rekognition:UntagResource"``

Grants permission to remove one or more tags from a resource

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UntagResource.html

#### Defined in

actions/rekognition.ts:482

___

### UpdateDatasetEntries

• **UpdateDatasetEntries** = ``"rekognition:UpdateDatasetEntries"``

Grants permission to add or update one or more JSON Lines (entries) in a datase
t

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UpdateDatasetEntries.html

#### Defined in

actions/rekognition.ts:489

___

### UpdateStreamProcessor

• **UpdateStreamProcessor** = ``"rekognition:UpdateStreamProcessor"``

Grants permission to modify properties for a stream processor

See https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UpdateStreamProcessor.html

#### Defined in

actions/rekognition.ts:495
