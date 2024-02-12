[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMigrationhubStrategyActions

# Enumeration: AwsMigrationhubStrategyActions

All IAM policy actions for AWS Migration Hub Strategy Recommendations (MIGRATIONHUB-STRATEGY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubstrategyrecommendations.html

2024-02-12T09:58:25.567Z

## Table of contents

### Enumeration Members

- [GetAntiPattern](AwsMigrationhubStrategyActions.md#getantipattern)
- [GetApplicationComponentDetails](AwsMigrationhubStrategyActions.md#getapplicationcomponentdetails)
- [GetApplicationComponentStrategies](AwsMigrationhubStrategyActions.md#getapplicationcomponentstrategies)
- [GetAssessment](AwsMigrationhubStrategyActions.md#getassessment)
- [GetImportFileTask](AwsMigrationhubStrategyActions.md#getimportfiletask)
- [GetLatestAssessmentId](AwsMigrationhubStrategyActions.md#getlatestassessmentid)
- [GetMessage](AwsMigrationhubStrategyActions.md#getmessage)
- [GetPortfolioPreferences](AwsMigrationhubStrategyActions.md#getportfoliopreferences)
- [GetPortfolioSummary](AwsMigrationhubStrategyActions.md#getportfoliosummary)
- [GetRecommendationReportDetails](AwsMigrationhubStrategyActions.md#getrecommendationreportdetails)
- [GetServerDetails](AwsMigrationhubStrategyActions.md#getserverdetails)
- [GetServerStrategies](AwsMigrationhubStrategyActions.md#getserverstrategies)
- [ListAnalyzableServers](AwsMigrationhubStrategyActions.md#listanalyzableservers)
- [ListAntiPatterns](AwsMigrationhubStrategyActions.md#listantipatterns)
- [ListApplicationComponents](AwsMigrationhubStrategyActions.md#listapplicationcomponents)
- [ListCollectors](AwsMigrationhubStrategyActions.md#listcollectors)
- [ListImportFileTask](AwsMigrationhubStrategyActions.md#listimportfiletask)
- [ListJarArtifacts](AwsMigrationhubStrategyActions.md#listjarartifacts)
- [ListServers](AwsMigrationhubStrategyActions.md#listservers)
- [PutPortfolioPreferences](AwsMigrationhubStrategyActions.md#putportfoliopreferences)
- [RegisterCollector](AwsMigrationhubStrategyActions.md#registercollector)
- [SendMessage](AwsMigrationhubStrategyActions.md#sendmessage)
- [StartAssessment](AwsMigrationhubStrategyActions.md#startassessment)
- [StartImportFileTask](AwsMigrationhubStrategyActions.md#startimportfiletask)
- [StartRecommendationReportGeneration](AwsMigrationhubStrategyActions.md#startrecommendationreportgeneration)
- [StopAssessment](AwsMigrationhubStrategyActions.md#stopassessment)
- [UpdateApplicationComponentConfig](AwsMigrationhubStrategyActions.md#updateapplicationcomponentconfig)
- [UpdateCollectorConfiguration](AwsMigrationhubStrategyActions.md#updatecollectorconfiguration)
- [UpdateServerConfig](AwsMigrationhubStrategyActions.md#updateserverconfig)

## Enumeration Members

### GetAntiPattern

• **GetAntiPattern** = ``"migrationhub-strategy:GetAntiPattern"``

Grants permission to get details of each anti pattern that collector should loo
k at in a customer's environment

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetAntiPattern.html

#### Defined in

actions/migrationhub-strategy.ts:18

___

### GetApplicationComponentDetails

• **GetApplicationComponentDetails** = ``"migrationhub-strategy:GetApplicationComponentDetails"``

Grants permission to get details of an application

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetApplicationComponentDetails.html

#### Defined in

actions/migrationhub-strategy.ts:24

___

### GetApplicationComponentStrategies

• **GetApplicationComponentStrategies** = ``"migrationhub-strategy:GetApplicationComponentStrategies"``

Grants permission to get a list of all recommended strategies and tools for an
application running in a server

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetApplicationComponentStrategies.html

#### Defined in

actions/migrationhub-strategy.ts:31

___

### GetAssessment

• **GetAssessment** = ``"migrationhub-strategy:GetAssessment"``

Grants permission to retrieve status of an on-going assessment

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetAssessment.html

#### Defined in

actions/migrationhub-strategy.ts:37

___

### GetImportFileTask

• **GetImportFileTask** = ``"migrationhub-strategy:GetImportFileTask"``

Grants permission to get details of a specific import task

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetImportFileTask.html

#### Defined in

actions/migrationhub-strategy.ts:43

___

### GetLatestAssessmentId

• **GetLatestAssessmentId** = ``"migrationhub-strategy:GetLatestAssessmentId"``

Grants permission to retrieve the latest assessment id

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetLatestAssessmentId.html

#### Defined in

actions/migrationhub-strategy.ts:49

___

### GetMessage

• **GetMessage** = ``"migrationhub-strategy:GetMessage"``

Grants permission to the collector to receive information from the service

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetMessage.html

#### Defined in

actions/migrationhub-strategy.ts:55

___

### GetPortfolioPreferences

• **GetPortfolioPreferences** = ``"migrationhub-strategy:GetPortfolioPreferences"``

Grants permission to retrieve customer migration/Modernization preferences

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetPortfolioPreferences.html

#### Defined in

actions/migrationhub-strategy.ts:61

___

### GetPortfolioSummary

• **GetPortfolioSummary** = ``"migrationhub-strategy:GetPortfolioSummary"``

Grants permission to retrieve overall summary (number-of servers to rehost etc
as well as overall number of anti patterns)

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetPortfolioSummary.html

#### Defined in

actions/migrationhub-strategy.ts:68

___

### GetRecommendationReportDetails

• **GetRecommendationReportDetails** = ``"migrationhub-strategy:GetRecommendationReportDetails"``

Grants permission to retrieve detailed information about a recommendation repor
t

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetRecommendationReportDetails.html

#### Defined in

actions/migrationhub-strategy.ts:75

___

### GetServerDetails

• **GetServerDetails** = ``"migrationhub-strategy:GetServerDetails"``

Grants permission to get info about a specific server

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetServerDetails.html

#### Defined in

actions/migrationhub-strategy.ts:81

___

### GetServerStrategies

• **GetServerStrategies** = ``"migrationhub-strategy:GetServerStrategies"``

Grants permission to get recommended strategies and tools for a specific server

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetServerStrategies.html

#### Defined in

actions/migrationhub-strategy.ts:87

___

### ListAnalyzableServers

• **ListAnalyzableServers** = ``"migrationhub-strategy:ListAnalyzableServers"``

Grants permission to get a list of all analyzable servers in a customer's vcent
er environment

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListAnalyzableServers.html

#### Defined in

actions/migrationhub-strategy.ts:94

___

### ListAntiPatterns

• **ListAntiPatterns** = ``"migrationhub-strategy:ListAntiPatterns"``

Grants permission to get a list of all anti patterns that collector should look
for in a customer's environment

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListAntiPatterns.html

#### Defined in

actions/migrationhub-strategy.ts:101

___

### ListApplicationComponents

• **ListApplicationComponents** = ``"migrationhub-strategy:ListApplicationComponents"``

Grants permission to get a list of all applications running on servers on custo
mer's servers

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListApplicationComponents.html

#### Defined in

actions/migrationhub-strategy.ts:108

___

### ListCollectors

• **ListCollectors** = ``"migrationhub-strategy:ListCollectors"``

Grants permission to get a list of all collectors installed by the customer

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListCollectors.html

#### Defined in

actions/migrationhub-strategy.ts:114

___

### ListImportFileTask

• **ListImportFileTask** = ``"migrationhub-strategy:ListImportFileTask"``

Grants permission to get list of all imports performed by the customer

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListImportFileTask.html

#### Defined in

actions/migrationhub-strategy.ts:120

___

### ListJarArtifacts

• **ListJarArtifacts** = ``"migrationhub-strategy:ListJarArtifacts"``

Grants permission to get a list of binaries that collector should assess

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListJarArtifacts.html

#### Defined in

actions/migrationhub-strategy.ts:126

___

### ListServers

• **ListServers** = ``"migrationhub-strategy:ListServers"``

Grants permission to get a list of all servers in a customer's environment

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListServers.html

#### Defined in

actions/migrationhub-strategy.ts:132

___

### PutPortfolioPreferences

• **PutPortfolioPreferences** = ``"migrationhub-strategy:PutPortfolioPreferences"``

Grants permission to save customer's Migration/Modernization preferences

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_PutPortfolioPreferences.html

#### Defined in

actions/migrationhub-strategy.ts:138

___

### RegisterCollector

• **RegisterCollector** = ``"migrationhub-strategy:RegisterCollector"``

Grants permission to register the collector to receive an ID and to start recei
ving messages from the service

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_RegisterCollector.html

#### Defined in

actions/migrationhub-strategy.ts:145

___

### SendMessage

• **SendMessage** = ``"migrationhub-strategy:SendMessage"``

Grants permission to the collector to send information to the service

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_SendMessage.html

#### Defined in

actions/migrationhub-strategy.ts:151

___

### StartAssessment

• **StartAssessment** = ``"migrationhub-strategy:StartAssessment"``

Grants permission to start assessment in a customer's environment (collect data
from all servers and provide recommendations)

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StartAssessment.html

#### Defined in

actions/migrationhub-strategy.ts:158

___

### StartImportFileTask

• **StartImportFileTask** = ``"migrationhub-strategy:StartImportFileTask"``

Grants permission to start importing data from a file provided by customer

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StartImportFileTask.html

#### Defined in

actions/migrationhub-strategy.ts:164

___

### StartRecommendationReportGeneration

• **StartRecommendationReportGeneration** = ``"migrationhub-strategy:StartRecommendationReportGeneration"``

Grants permission to start generating a recommendation report

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StartRecommendationReportGeneration.html

#### Defined in

actions/migrationhub-strategy.ts:170

___

### StopAssessment

• **StopAssessment** = ``"migrationhub-strategy:StopAssessment"``

Grants permission to stop an on-going assessment

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StopAssessment.html

#### Defined in

actions/migrationhub-strategy.ts:176

___

### UpdateApplicationComponentConfig

• **UpdateApplicationComponentConfig** = ``"migrationhub-strategy:UpdateApplicationComponentConfig"``

Grants permission to update details for an application

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_UpdateApplicationComponentConfig.html

#### Defined in

actions/migrationhub-strategy.ts:182

___

### UpdateCollectorConfiguration

• **UpdateCollectorConfiguration** = ``"migrationhub-strategy:UpdateCollectorConfiguration"``

Grants permission to the collector to send configuration information to the ser
vice

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_UpdateCollectorConfiguration.html

#### Defined in

actions/migrationhub-strategy.ts:189

___

### UpdateServerConfig

• **UpdateServerConfig** = ``"migrationhub-strategy:UpdateServerConfig"``

Grants permission to update info on a server along with the recommended strateg
y

See https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_UpdateServerConfig.html

#### Defined in

actions/migrationhub-strategy.ts:196
