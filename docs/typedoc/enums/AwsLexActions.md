[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsLexActions

# Enumeration: AwsLexActions

All IAM policy actions for Amazon Lex V2 (LEX)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html

2024-02-12T09:58:04.166Z

## Table of contents

### Enumeration Members

- [BatchCreateCustomVocabularyItem](AwsLexActions.md#batchcreatecustomvocabularyitem)
- [BatchDeleteCustomVocabularyItem](AwsLexActions.md#batchdeletecustomvocabularyitem)
- [BatchUpdateCustomVocabularyItem](AwsLexActions.md#batchupdatecustomvocabularyitem)
- [BuildBotLocale](AwsLexActions.md#buildbotlocale)
- [CreateBot](AwsLexActions.md#createbot)
- [CreateBotAlias](AwsLexActions.md#createbotalias)
- [CreateBotChannel](AwsLexActions.md#createbotchannel)
- [CreateBotLocale](AwsLexActions.md#createbotlocale)
- [CreateBotVersion](AwsLexActions.md#createbotversion)
- [CreateCustomVocabulary](AwsLexActions.md#createcustomvocabulary)
- [CreateExport](AwsLexActions.md#createexport)
- [CreateIntent](AwsLexActions.md#createintent)
- [CreateResourcePolicy](AwsLexActions.md#createresourcepolicy)
- [CreateSlot](AwsLexActions.md#createslot)
- [CreateSlotType](AwsLexActions.md#createslottype)
- [CreateTestSet](AwsLexActions.md#createtestset)
- [CreateTestSetDiscrepancyReport](AwsLexActions.md#createtestsetdiscrepancyreport)
- [CreateUploadUrl](AwsLexActions.md#createuploadurl)
- [DeleteBot](AwsLexActions.md#deletebot)
- [DeleteBotAlias](AwsLexActions.md#deletebotalias)
- [DeleteBotChannel](AwsLexActions.md#deletebotchannel)
- [DeleteBotLocale](AwsLexActions.md#deletebotlocale)
- [DeleteBotVersion](AwsLexActions.md#deletebotversion)
- [DeleteCustomVocabulary](AwsLexActions.md#deletecustomvocabulary)
- [DeleteExport](AwsLexActions.md#deleteexport)
- [DeleteImport](AwsLexActions.md#deleteimport)
- [DeleteIntent](AwsLexActions.md#deleteintent)
- [DeleteResourcePolicy](AwsLexActions.md#deleteresourcepolicy)
- [DeleteSession](AwsLexActions.md#deletesession)
- [DeleteSlot](AwsLexActions.md#deleteslot)
- [DeleteSlotType](AwsLexActions.md#deleteslottype)
- [DeleteTestSet](AwsLexActions.md#deletetestset)
- [DeleteUtterances](AwsLexActions.md#deleteutterances)
- [DescribeBot](AwsLexActions.md#describebot)
- [DescribeBotAlias](AwsLexActions.md#describebotalias)
- [DescribeBotChannel](AwsLexActions.md#describebotchannel)
- [DescribeBotLocale](AwsLexActions.md#describebotlocale)
- [DescribeBotRecommendation](AwsLexActions.md#describebotrecommendation)
- [DescribeBotResourceGeneration](AwsLexActions.md#describebotresourcegeneration)
- [DescribeBotVersion](AwsLexActions.md#describebotversion)
- [DescribeCustomVocabulary](AwsLexActions.md#describecustomvocabulary)
- [DescribeCustomVocabularyMetadata](AwsLexActions.md#describecustomvocabularymetadata)
- [DescribeExport](AwsLexActions.md#describeexport)
- [DescribeImport](AwsLexActions.md#describeimport)
- [DescribeIntent](AwsLexActions.md#describeintent)
- [DescribeResourcePolicy](AwsLexActions.md#describeresourcepolicy)
- [DescribeSlot](AwsLexActions.md#describeslot)
- [DescribeSlotType](AwsLexActions.md#describeslottype)
- [DescribeTestExecution](AwsLexActions.md#describetestexecution)
- [DescribeTestSet](AwsLexActions.md#describetestset)
- [DescribeTestSetDiscrepancyReport](AwsLexActions.md#describetestsetdiscrepancyreport)
- [DescribeTestSetGeneration](AwsLexActions.md#describetestsetgeneration)
- [GenerateBotElement](AwsLexActions.md#generatebotelement)
- [GetSession](AwsLexActions.md#getsession)
- [GetTestExecutionArtifactsUrl](AwsLexActions.md#gettestexecutionartifactsurl)
- [ListAggregatedUtterances](AwsLexActions.md#listaggregatedutterances)
- [ListBotAliases](AwsLexActions.md#listbotaliases)
- [ListBotChannels](AwsLexActions.md#listbotchannels)
- [ListBotLocales](AwsLexActions.md#listbotlocales)
- [ListBotRecommendations](AwsLexActions.md#listbotrecommendations)
- [ListBotResourceGenerations](AwsLexActions.md#listbotresourcegenerations)
- [ListBotVersions](AwsLexActions.md#listbotversions)
- [ListBots](AwsLexActions.md#listbots)
- [ListBuiltInIntents](AwsLexActions.md#listbuiltinintents)
- [ListBuiltInSlotTypes](AwsLexActions.md#listbuiltinslottypes)
- [ListCustomVocabularyItems](AwsLexActions.md#listcustomvocabularyitems)
- [ListExports](AwsLexActions.md#listexports)
- [ListImports](AwsLexActions.md#listimports)
- [ListIntentMetrics](AwsLexActions.md#listintentmetrics)
- [ListIntentPaths](AwsLexActions.md#listintentpaths)
- [ListIntentStageMetrics](AwsLexActions.md#listintentstagemetrics)
- [ListIntents](AwsLexActions.md#listintents)
- [ListRecommendedIntents](AwsLexActions.md#listrecommendedintents)
- [ListSessionAnalyticsData](AwsLexActions.md#listsessionanalyticsdata)
- [ListSessionMetrics](AwsLexActions.md#listsessionmetrics)
- [ListSlotTypes](AwsLexActions.md#listslottypes)
- [ListSlots](AwsLexActions.md#listslots)
- [ListTagsForResource](AwsLexActions.md#listtagsforresource)
- [ListTestExecutionResultItems](AwsLexActions.md#listtestexecutionresultitems)
- [ListTestExecutions](AwsLexActions.md#listtestexecutions)
- [ListTestSetRecords](AwsLexActions.md#listtestsetrecords)
- [ListTestSets](AwsLexActions.md#listtestsets)
- [PutSession](AwsLexActions.md#putsession)
- [RecognizeText](AwsLexActions.md#recognizetext)
- [RecognizeUtterance](AwsLexActions.md#recognizeutterance)
- [SearchAssociatedTranscripts](AwsLexActions.md#searchassociatedtranscripts)
- [StartBotRecommendation](AwsLexActions.md#startbotrecommendation)
- [StartBotResourceGeneration](AwsLexActions.md#startbotresourcegeneration)
- [StartConversation](AwsLexActions.md#startconversation)
- [StartImport](AwsLexActions.md#startimport)
- [StartTestExecution](AwsLexActions.md#starttestexecution)
- [StartTestSetGeneration](AwsLexActions.md#starttestsetgeneration)
- [StopBotRecommendation](AwsLexActions.md#stopbotrecommendation)
- [TagResource](AwsLexActions.md#tagresource)
- [UntagResource](AwsLexActions.md#untagresource)
- [UpdateBot](AwsLexActions.md#updatebot)
- [UpdateBotAlias](AwsLexActions.md#updatebotalias)
- [UpdateBotLocale](AwsLexActions.md#updatebotlocale)
- [UpdateBotRecommendation](AwsLexActions.md#updatebotrecommendation)
- [UpdateCustomVocabulary](AwsLexActions.md#updatecustomvocabulary)
- [UpdateExport](AwsLexActions.md#updateexport)
- [UpdateIntent](AwsLexActions.md#updateintent)
- [UpdateResourcePolicy](AwsLexActions.md#updateresourcepolicy)
- [UpdateSlot](AwsLexActions.md#updateslot)
- [UpdateSlotType](AwsLexActions.md#updateslottype)
- [UpdateTestSet](AwsLexActions.md#updatetestset)

## Enumeration Members

### BatchCreateCustomVocabularyItem

• **BatchCreateCustomVocabularyItem** = ``"lex:BatchCreateCustomVocabularyItem"``

Grants permission to create new items in an existing custom vocabulary

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_BatchCreateCustomVocabularyItem.html

#### Defined in

actions/lex.ts:17

___

### BatchDeleteCustomVocabularyItem

• **BatchDeleteCustomVocabularyItem** = ``"lex:BatchDeleteCustomVocabularyItem"``

Grants permission to delete existing items in an existing custom vocabulary

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_BatchDeleteCustomVocabularyItem.html

#### Defined in

actions/lex.ts:23

___

### BatchUpdateCustomVocabularyItem

• **BatchUpdateCustomVocabularyItem** = ``"lex:BatchUpdateCustomVocabularyItem"``

Grants permission to update existing items in an existing custom vocabulary

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_BatchUpdateCustomVocabularyItem.html

#### Defined in

actions/lex.ts:29

___

### BuildBotLocale

• **BuildBotLocale** = ``"lex:BuildBotLocale"``

Grants permission to build an existing bot locale in a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_BuildBotLocale.html

#### Defined in

actions/lex.ts:35

___

### CreateBot

• **CreateBot** = ``"lex:CreateBot"``

Grants permission to create a new bot and a test bot alias pointing to the DRAF
T bot version

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html

#### Defined in

actions/lex.ts:42

___

### CreateBotAlias

• **CreateBotAlias** = ``"lex:CreateBotAlias"``

Grants permission to create a new bot alias in a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBotAlias.html

#### Defined in

actions/lex.ts:48

___

### CreateBotChannel

• **CreateBotChannel** = ``"lex:CreateBotChannel"``

Grants permission to create a bot channel in an existing bot

See https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html

#### Defined in

actions/lex.ts:54

___

### CreateBotLocale

• **CreateBotLocale** = ``"lex:CreateBotLocale"``

Grants permission to create a new bot locale in an existing bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBotLocale.html

#### Defined in

actions/lex.ts:60

___

### CreateBotVersion

• **CreateBotVersion** = ``"lex:CreateBotVersion"``

Grants permission to create a new version of an existing bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBotVersion.html

#### Defined in

actions/lex.ts:66

___

### CreateCustomVocabulary

• **CreateCustomVocabulary** = ``"lex:CreateCustomVocabulary"``

Grants permission to create a new custom vocabulary in an existing bot locale

See https://docs.aws.amazon.com/lexv2/latest/dg/vocab.html

#### Defined in

actions/lex.ts:72

___

### CreateExport

• **CreateExport** = ``"lex:CreateExport"``

Grants permission to create an export for an existing resource

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateExport.html

#### Defined in

actions/lex.ts:78

___

### CreateIntent

• **CreateIntent** = ``"lex:CreateIntent"``

Grants permission to create a new intent in an existing bot locale

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateIntent.html

#### Defined in

actions/lex.ts:84

___

### CreateResourcePolicy

• **CreateResourcePolicy** = ``"lex:CreateResourcePolicy"``

Grants permission to create a new resource policy for a Lex resource

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateResourcePolicy.html

#### Defined in

actions/lex.ts:90

___

### CreateSlot

• **CreateSlot** = ``"lex:CreateSlot"``

Grants permission to create a new slot in an intent

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateSlot.html

#### Defined in

actions/lex.ts:96

___

### CreateSlotType

• **CreateSlotType** = ``"lex:CreateSlotType"``

Grants permission to create a new slot type in an existing bot locale

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateSlotType.html

#### Defined in

actions/lex.ts:102

___

### CreateTestSet

• **CreateTestSet** = ``"lex:CreateTestSet"``

Grants permission to import a new test-set

See https://docs.aws.amazon.com/lexv2/latest/dg/create-test-set-from-CSV.html

#### Defined in

actions/lex.ts:108

___

### CreateTestSetDiscrepancyReport

• **CreateTestSetDiscrepancyReport** = ``"lex:CreateTestSetDiscrepancyReport"``

Grants permission to create a test set discrepancy report

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateTestSetDiscrepancyReport.html

#### Defined in

actions/lex.ts:114

___

### CreateUploadUrl

• **CreateUploadUrl** = ``"lex:CreateUploadUrl"``

Grants permission to create an upload url for import file

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateUploadUrl.html

#### Defined in

actions/lex.ts:120

___

### DeleteBot

• **DeleteBot** = ``"lex:DeleteBot"``

Grants permission to delete an existing bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBot.html

#### Defined in

actions/lex.ts:126

___

### DeleteBotAlias

• **DeleteBotAlias** = ``"lex:DeleteBotAlias"``

Grants permission to delete an existing bot alias in a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBotAlias.html

#### Defined in

actions/lex.ts:132

___

### DeleteBotChannel

• **DeleteBotChannel** = ``"lex:DeleteBotChannel"``

Grants permission to delete an existing bot channel

See https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html

#### Defined in

actions/lex.ts:138

___

### DeleteBotLocale

• **DeleteBotLocale** = ``"lex:DeleteBotLocale"``

Grants permission to delete an existing bot locale in a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBotLocale.html

#### Defined in

actions/lex.ts:144

___

### DeleteBotVersion

• **DeleteBotVersion** = ``"lex:DeleteBotVersion"``

Grants permission to delete an existing bot version

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBotVersion.html

#### Defined in

actions/lex.ts:150

___

### DeleteCustomVocabulary

• **DeleteCustomVocabulary** = ``"lex:DeleteCustomVocabulary"``

Grants permission to delete an existing custom vocabulary in a bot locale

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteCustomVocabulary.html

#### Defined in

actions/lex.ts:156

___

### DeleteExport

• **DeleteExport** = ``"lex:DeleteExport"``

Grants permission to delete an existing export

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteExport.html

#### Defined in

actions/lex.ts:162

___

### DeleteImport

• **DeleteImport** = ``"lex:DeleteImport"``

Grants permission to delete an existing import

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteImport.html

#### Defined in

actions/lex.ts:168

___

### DeleteIntent

• **DeleteIntent** = ``"lex:DeleteIntent"``

Grants permission to delete an existing intent in a bot locale

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteIntent.html

#### Defined in

actions/lex.ts:174

___

### DeleteResourcePolicy

• **DeleteResourcePolicy** = ``"lex:DeleteResourcePolicy"``

Grants permission to delete an existing resource policy for a Lex resource

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteResourcePolicy.html

#### Defined in

actions/lex.ts:180

___

### DeleteSession

• **DeleteSession** = ``"lex:DeleteSession"``

Grants permission to delete session information for a bot alias and user ID

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_DeleteSession.html

#### Defined in

actions/lex.ts:186

___

### DeleteSlot

• **DeleteSlot** = ``"lex:DeleteSlot"``

Grants permission to delete an existing slot in an intent

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteSlot.html

#### Defined in

actions/lex.ts:192

___

### DeleteSlotType

• **DeleteSlotType** = ``"lex:DeleteSlotType"``

Grants permission to delete an existing slot type in a bot locale

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteSlotType.html

#### Defined in

actions/lex.ts:198

___

### DeleteTestSet

• **DeleteTestSet** = ``"lex:DeleteTestSet"``

Grants permission to delete an existing test set

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteTestSet.html

#### Defined in

actions/lex.ts:204

___

### DeleteUtterances

• **DeleteUtterances** = ``"lex:DeleteUtterances"``

Grants permission to delete utterance data for a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteUtterances.html

#### Defined in

actions/lex.ts:210

___

### DescribeBot

• **DescribeBot** = ``"lex:DescribeBot"``

Grants permission to retrieve an existing bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBot.html

#### Defined in

actions/lex.ts:216

___

### DescribeBotAlias

• **DescribeBotAlias** = ``"lex:DescribeBotAlias"``

Grants permission to retrieve an existing bot alias

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotAlias.html

#### Defined in

actions/lex.ts:222

___

### DescribeBotChannel

• **DescribeBotChannel** = ``"lex:DescribeBotChannel"``

Grants permission to retrieve an existing bot channel

See https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html

#### Defined in

actions/lex.ts:228

___

### DescribeBotLocale

• **DescribeBotLocale** = ``"lex:DescribeBotLocale"``

Grants permission to retrieve an existing bot locale

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotLocale.html

#### Defined in

actions/lex.ts:234

___

### DescribeBotRecommendation

• **DescribeBotRecommendation** = ``"lex:DescribeBotRecommendation"``

Grants permission to retrieve metadata information about a bot recommendation

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotRecommendation.html

#### Defined in

actions/lex.ts:240

___

### DescribeBotResourceGeneration

• **DescribeBotResourceGeneration** = ``"lex:DescribeBotResourceGeneration"``

Grants permission to retrieve metadata information for a bot resource generatio
n

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotResourceGeneration.html

#### Defined in

actions/lex.ts:247

___

### DescribeBotVersion

• **DescribeBotVersion** = ``"lex:DescribeBotVersion"``

Grants permission to retrieve an existing bot version

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotVersion.html

#### Defined in

actions/lex.ts:253

___

### DescribeCustomVocabulary

• **DescribeCustomVocabulary** = ``"lex:DescribeCustomVocabulary"``

Grants permission to retrieve an existing custom vocabulary

See https://docs.aws.amazon.com/lexv2/latest/dg/vocab.html

#### Defined in

actions/lex.ts:259

___

### DescribeCustomVocabularyMetadata

• **DescribeCustomVocabularyMetadata** = ``"lex:DescribeCustomVocabularyMetadata"``

Grants permission to retrieve metadata of an existing custom vocabulary

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeCustomVocabularyMetadata.html

#### Defined in

actions/lex.ts:265

___

### DescribeExport

• **DescribeExport** = ``"lex:DescribeExport"``

Grants permission to retrieve an existing export

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html

#### Defined in

actions/lex.ts:271

___

### DescribeImport

• **DescribeImport** = ``"lex:DescribeImport"``

Grants permission to retrieve an existing import

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeImport.html

#### Defined in

actions/lex.ts:277

___

### DescribeIntent

• **DescribeIntent** = ``"lex:DescribeIntent"``

Grants permission to retrieve an existing intent

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeIntent.html

#### Defined in

actions/lex.ts:283

___

### DescribeResourcePolicy

• **DescribeResourcePolicy** = ``"lex:DescribeResourcePolicy"``

Grants permission to retrieve an existing resource policy for a Lex resource

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeResourcePolicy.html

#### Defined in

actions/lex.ts:289

___

### DescribeSlot

• **DescribeSlot** = ``"lex:DescribeSlot"``

Grants permission to retrieve an existing slot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeSlot.html

#### Defined in

actions/lex.ts:295

___

### DescribeSlotType

• **DescribeSlotType** = ``"lex:DescribeSlotType"``

Grants permission to retrieve an existing slot type

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeSlotType.html

#### Defined in

actions/lex.ts:301

___

### DescribeTestExecution

• **DescribeTestExecution** = ``"lex:DescribeTestExecution"``

Grants permission to retrieve test execution metadata

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeTestExecution.html

#### Defined in

actions/lex.ts:307

___

### DescribeTestSet

• **DescribeTestSet** = ``"lex:DescribeTestSet"``

Grants permission to retrieve an existing test set

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeTestSet.html

#### Defined in

actions/lex.ts:313

___

### DescribeTestSetDiscrepancyReport

• **DescribeTestSetDiscrepancyReport** = ``"lex:DescribeTestSetDiscrepancyReport"``

Grants permission to retrieve test set discrepancy report metadata

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeTestSetDiscrepancyReport.html

#### Defined in

actions/lex.ts:319

___

### DescribeTestSetGeneration

• **DescribeTestSetGeneration** = ``"lex:DescribeTestSetGeneration"``

Grants permission to retrieve test set generation metadata

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeTestSetGeneration.html

#### Defined in

actions/lex.ts:325

___

### GenerateBotElement

• **GenerateBotElement** = ``"lex:GenerateBotElement"``

Grants permission to generate supported fields or elements for a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_GenerateBotElement.html

#### Defined in

actions/lex.ts:331

___

### GetSession

• **GetSession** = ``"lex:GetSession"``

Grants permission to retrieve session information for a bot alias and user ID

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_GetSession.html

#### Defined in

actions/lex.ts:337

___

### GetTestExecutionArtifactsUrl

• **GetTestExecutionArtifactsUrl** = ``"lex:GetTestExecutionArtifactsUrl"``

Grants permission to retrieve artifacts URL for a test execution

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_GetTestExecutionArtifactsUrl.html

#### Defined in

actions/lex.ts:343

___

### ListAggregatedUtterances

• **ListAggregatedUtterances** = ``"lex:ListAggregatedUtterances"``

Grants permission to list utterances and statistics for a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html

#### Defined in

actions/lex.ts:349

___

### ListBotAliases

• **ListBotAliases** = ``"lex:ListBotAliases"``

Grants permission to list bot aliases in an bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotAliases.html

#### Defined in

actions/lex.ts:355

___

### ListBotChannels

• **ListBotChannels** = ``"lex:ListBotChannels"``

Grants permission to list bot channels

See https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html

#### Defined in

actions/lex.ts:361

___

### ListBotLocales

• **ListBotLocales** = ``"lex:ListBotLocales"``

Grants permission to list bot locales in a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotLocales.html

#### Defined in

actions/lex.ts:367

___

### ListBotRecommendations

• **ListBotRecommendations** = ``"lex:ListBotRecommendations"``

Grants permission to get a list of bot recommendations that meet the specified
criteria

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotRecommendations.html

#### Defined in

actions/lex.ts:374

___

### ListBotResourceGenerations

• **ListBotResourceGenerations** = ``"lex:ListBotResourceGenerations"``

Grants permission to list the resource generations for a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotResourceGenerations.html

#### Defined in

actions/lex.ts:380

___

### ListBotVersions

• **ListBotVersions** = ``"lex:ListBotVersions"``

Grants permission to list existing bot versions

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotVersions.html

#### Defined in

actions/lex.ts:386

___

### ListBots

• **ListBots** = ``"lex:ListBots"``

Grants permission to list existing bots

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBots.html

#### Defined in

actions/lex.ts:392

___

### ListBuiltInIntents

• **ListBuiltInIntents** = ``"lex:ListBuiltInIntents"``

Grants permission to list built-in intents

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInIntents.html

#### Defined in

actions/lex.ts:398

___

### ListBuiltInSlotTypes

• **ListBuiltInSlotTypes** = ``"lex:ListBuiltInSlotTypes"``

Grants permission to list built-in slot types

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInSlotTypes.html

#### Defined in

actions/lex.ts:404

___

### ListCustomVocabularyItems

• **ListCustomVocabularyItems** = ``"lex:ListCustomVocabularyItems"``

Grants permission to list items of an existing custom vocabulary

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListCustomVocabularyItems.html

#### Defined in

actions/lex.ts:410

___

### ListExports

• **ListExports** = ``"lex:ListExports"``

Grants permission to list existing exports

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html

#### Defined in

actions/lex.ts:416

___

### ListImports

• **ListImports** = ``"lex:ListImports"``

Grants permission to list existing imports

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html

#### Defined in

actions/lex.ts:422

___

### ListIntentMetrics

• **ListIntentMetrics** = ``"lex:ListIntentMetrics"``

Grants permission to list intent analytics metrics for a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListIntentMetrics.html

#### Defined in

actions/lex.ts:428

___

### ListIntentPaths

• **ListIntentPaths** = ``"lex:ListIntentPaths"``

Grants permission to list intent path analytics for a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListIntentPaths.html

#### Defined in

actions/lex.ts:434

___

### ListIntentStageMetrics

• **ListIntentStageMetrics** = ``"lex:ListIntentStageMetrics"``

Grants permission to list intentStage analytics metrics for a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListIntentStageMetrics.html

#### Defined in

actions/lex.ts:440

___

### ListIntents

• **ListIntents** = ``"lex:ListIntents"``

Grants permission to list intents in a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListIntents.html

#### Defined in

actions/lex.ts:446

___

### ListRecommendedIntents

• **ListRecommendedIntents** = ``"lex:ListRecommendedIntents"``

Grants permission to get a list of recommended intents provided by the bot reco
mmendation

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListRecommendedIntents.html

#### Defined in

actions/lex.ts:453

___

### ListSessionAnalyticsData

• **ListSessionAnalyticsData** = ``"lex:ListSessionAnalyticsData"``

Grants permission to list session analytics data for a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListSessionAnalyticsData.html

#### Defined in

actions/lex.ts:459

___

### ListSessionMetrics

• **ListSessionMetrics** = ``"lex:ListSessionMetrics"``

Grants permission to list session analytics metrics for a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListSessionMetrics.html

#### Defined in

actions/lex.ts:465

___

### ListSlotTypes

• **ListSlotTypes** = ``"lex:ListSlotTypes"``

Grants permission to list slot types in a bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListSlotTypes.html

#### Defined in

actions/lex.ts:471

___

### ListSlots

• **ListSlots** = ``"lex:ListSlots"``

Grants permission to list slots in an intent

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListSlots.html

#### Defined in

actions/lex.ts:477

___

### ListTagsForResource

• **ListTagsForResource** = ``"lex:ListTagsForResource"``

Grants permission to lists tags for a Lex resource

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/lex.ts:483

___

### ListTestExecutionResultItems

• **ListTestExecutionResultItems** = ``"lex:ListTestExecutionResultItems"``

Grants permission to retrieve test results data for a test execution

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListTestExecutionResultItems.html

#### Defined in

actions/lex.ts:489

___

### ListTestExecutions

• **ListTestExecutions** = ``"lex:ListTestExecutions"``

Grants permission to list test executions

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListTestExecutions.html

#### Defined in

actions/lex.ts:495

___

### ListTestSetRecords

• **ListTestSetRecords** = ``"lex:ListTestSetRecords"``

Grants permission to retrieve records inside an existing test set

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListTestSetRecords.html

#### Defined in

actions/lex.ts:501

___

### ListTestSets

• **ListTestSets** = ``"lex:ListTestSets"``

Grants permission to list test sets

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListTestSets.html

#### Defined in

actions/lex.ts:507

___

### PutSession

• **PutSession** = ``"lex:PutSession"``

Grants permission to create a new session or modify an existing session for a b
ot alias and user ID

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_PutSession.html

#### Defined in

actions/lex.ts:514

___

### RecognizeText

• **RecognizeText** = ``"lex:RecognizeText"``

Grants permission to send user input (text-only) to an bot alias

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeText.html

#### Defined in

actions/lex.ts:520

___

### RecognizeUtterance

• **RecognizeUtterance** = ``"lex:RecognizeUtterance"``

Grants permission to send user input (text or speech) to an bot alias

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeUtterance.html

#### Defined in

actions/lex.ts:526

___

### SearchAssociatedTranscripts

• **SearchAssociatedTranscripts** = ``"lex:SearchAssociatedTranscripts"``

Grants permission to search for associated transcripts that meet the specified
criteria

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_SearchAssociatedTranscripts.html

#### Defined in

actions/lex.ts:533

___

### StartBotRecommendation

• **StartBotRecommendation** = ``"lex:StartBotRecommendation"``

Grants permission to start a bot recommendation for an existing bot locale

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartBotRecommendation.html

#### Defined in

actions/lex.ts:539

___

### StartBotResourceGeneration

• **StartBotResourceGeneration** = ``"lex:StartBotResourceGeneration"``

Grants permission to start a resource generation for an existing bot locale

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartBotResourceGeneration.html

#### Defined in

actions/lex.ts:545

___

### StartConversation

• **StartConversation** = ``"lex:StartConversation"``

Grants permission to stream user input (speech/text/DTMF) to a bot alias

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_StartConversation.html

#### Defined in

actions/lex.ts:551

___

### StartImport

• **StartImport** = ``"lex:StartImport"``

Grants permission to start a new import with the uploaded import file

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartImport.html

#### Defined in

actions/lex.ts:557

___

### StartTestExecution

• **StartTestExecution** = ``"lex:StartTestExecution"``

Grants permission to start a test execution using a test set

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartTestExecution.html

#### Defined in

actions/lex.ts:563

___

### StartTestSetGeneration

• **StartTestSetGeneration** = ``"lex:StartTestSetGeneration"``

Grants permission to generate a test set

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartTestSetGeneration.html

#### Defined in

actions/lex.ts:569

___

### StopBotRecommendation

• **StopBotRecommendation** = ``"lex:StopBotRecommendation"``

Grants permission to stop a bot recommendation for an existing bot locale

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StopBotRecommendation.html

#### Defined in

actions/lex.ts:575

___

### TagResource

• **TagResource** = ``"lex:TagResource"``

Grants permission to add or overwrite tags of a Lex resource

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_TagResource.html

#### Defined in

actions/lex.ts:581

___

### UntagResource

• **UntagResource** = ``"lex:UntagResource"``

Grants permission to remove tags from a Lex resource

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UntagResource.html

#### Defined in

actions/lex.ts:587

___

### UpdateBot

• **UpdateBot** = ``"lex:UpdateBot"``

Grants permission to update an existing bot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBot.html

#### Defined in

actions/lex.ts:593

___

### UpdateBotAlias

• **UpdateBotAlias** = ``"lex:UpdateBotAlias"``

Grants permission to update an existing bot alias

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotAlias.html

#### Defined in

actions/lex.ts:599

___

### UpdateBotLocale

• **UpdateBotLocale** = ``"lex:UpdateBotLocale"``

Grants permission to update an existing bot locale

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotLocale.html

#### Defined in

actions/lex.ts:605

___

### UpdateBotRecommendation

• **UpdateBotRecommendation** = ``"lex:UpdateBotRecommendation"``

Grants permission to update an existing bot recommendation request

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotRecommendation.html

#### Defined in

actions/lex.ts:611

___

### UpdateCustomVocabulary

• **UpdateCustomVocabulary** = ``"lex:UpdateCustomVocabulary"``

Grants permission to update an existing custom vocabulary

See https://docs.aws.amazon.com/lexv2/latest/dg/vocab.html

#### Defined in

actions/lex.ts:617

___

### UpdateExport

• **UpdateExport** = ``"lex:UpdateExport"``

Grants permission to update an existing export

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateExport.html

#### Defined in

actions/lex.ts:623

___

### UpdateIntent

• **UpdateIntent** = ``"lex:UpdateIntent"``

Grants permission to update an existing intent

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateIntent.html

#### Defined in

actions/lex.ts:629

___

### UpdateResourcePolicy

• **UpdateResourcePolicy** = ``"lex:UpdateResourcePolicy"``

Grants permission to update an existing resource policy for a Lex resource

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateResourcePolicy.html

#### Defined in

actions/lex.ts:635

___

### UpdateSlot

• **UpdateSlot** = ``"lex:UpdateSlot"``

Grants permission to update an existing slot

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateSlot.html

#### Defined in

actions/lex.ts:641

___

### UpdateSlotType

• **UpdateSlotType** = ``"lex:UpdateSlotType"``

Grants permission to update an existing slot type

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateSlotType.html

#### Defined in

actions/lex.ts:647

___

### UpdateTestSet

• **UpdateTestSet** = ``"lex:UpdateTestSet"``

Grants permission to update an existing test set

See https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateTestSet.html

#### Defined in

actions/lex.ts:653
