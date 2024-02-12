[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsBedrockActions

# Enumeration: AwsBedrockActions

All IAM policy actions for Amazon Bedrock (BEDROCK)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html

2024-02-12T09:56:12.137Z

## Table of contents

### Enumeration Members

- [AssociateAgentKnowledgeBase](AwsBedrockActions.md#associateagentknowledgebase)
- [AssociateThirdPartyKnowledgeBase](AwsBedrockActions.md#associatethirdpartyknowledgebase)
- [CreateAgent](AwsBedrockActions.md#createagent)
- [CreateAgentActionGroup](AwsBedrockActions.md#createagentactiongroup)
- [CreateAgentAlias](AwsBedrockActions.md#createagentalias)
- [CreateDataSource](AwsBedrockActions.md#createdatasource)
- [CreateFoundationModelAgreement](AwsBedrockActions.md#createfoundationmodelagreement)
- [CreateGuardrail](AwsBedrockActions.md#createguardrail)
- [CreateGuardrailVersion](AwsBedrockActions.md#createguardrailversion)
- [CreateKnowledgeBase](AwsBedrockActions.md#createknowledgebase)
- [CreateModelCustomizationJob](AwsBedrockActions.md#createmodelcustomizationjob)
- [CreateModelEvaluationJob](AwsBedrockActions.md#createmodelevaluationjob)
- [CreateModelInvocationJob](AwsBedrockActions.md#createmodelinvocationjob)
- [CreateProvisionedModelThroughput](AwsBedrockActions.md#createprovisionedmodelthroughput)
- [DeleteAgent](AwsBedrockActions.md#deleteagent)
- [DeleteAgentActionGroup](AwsBedrockActions.md#deleteagentactiongroup)
- [DeleteAgentAlias](AwsBedrockActions.md#deleteagentalias)
- [DeleteAgentVersion](AwsBedrockActions.md#deleteagentversion)
- [DeleteCustomModel](AwsBedrockActions.md#deletecustommodel)
- [DeleteDataSource](AwsBedrockActions.md#deletedatasource)
- [DeleteFoundationModelAgreement](AwsBedrockActions.md#deletefoundationmodelagreement)
- [DeleteGuardrail](AwsBedrockActions.md#deleteguardrail)
- [DeleteKnowledgeBase](AwsBedrockActions.md#deleteknowledgebase)
- [DeleteModelInvocationLoggingConfiguration](AwsBedrockActions.md#deletemodelinvocationloggingconfiguration)
- [DeleteProvisionedModelThroughput](AwsBedrockActions.md#deleteprovisionedmodelthroughput)
- [DisassociateAgentKnowledgeBase](AwsBedrockActions.md#disassociateagentknowledgebase)
- [GetAgent](AwsBedrockActions.md#getagent)
- [GetAgentActionGroup](AwsBedrockActions.md#getagentactiongroup)
- [GetAgentAlias](AwsBedrockActions.md#getagentalias)
- [GetAgentKnowledgeBase](AwsBedrockActions.md#getagentknowledgebase)
- [GetAgentVersion](AwsBedrockActions.md#getagentversion)
- [GetCustomModel](AwsBedrockActions.md#getcustommodel)
- [GetDataSource](AwsBedrockActions.md#getdatasource)
- [GetFoundationModel](AwsBedrockActions.md#getfoundationmodel)
- [GetFoundationModelAvailability](AwsBedrockActions.md#getfoundationmodelavailability)
- [GetGuardrail](AwsBedrockActions.md#getguardrail)
- [GetIngestionJob](AwsBedrockActions.md#getingestionjob)
- [GetKnowledgeBase](AwsBedrockActions.md#getknowledgebase)
- [GetModelCustomizationJob](AwsBedrockActions.md#getmodelcustomizationjob)
- [GetModelEvaluationJob](AwsBedrockActions.md#getmodelevaluationjob)
- [GetModelInvocationJob](AwsBedrockActions.md#getmodelinvocationjob)
- [GetModelInvocationLoggingConfiguration](AwsBedrockActions.md#getmodelinvocationloggingconfiguration)
- [GetProvisionedModelThroughput](AwsBedrockActions.md#getprovisionedmodelthroughput)
- [GetUseCaseForModelAccess](AwsBedrockActions.md#getusecaseformodelaccess)
- [InvokeAgent](AwsBedrockActions.md#invokeagent)
- [InvokeModel](AwsBedrockActions.md#invokemodel)
- [InvokeModelWithResponseStream](AwsBedrockActions.md#invokemodelwithresponsestream)
- [ListAgentActionGroups](AwsBedrockActions.md#listagentactiongroups)
- [ListAgentAliases](AwsBedrockActions.md#listagentaliases)
- [ListAgentKnowledgeBases](AwsBedrockActions.md#listagentknowledgebases)
- [ListAgentVersions](AwsBedrockActions.md#listagentversions)
- [ListAgents](AwsBedrockActions.md#listagents)
- [ListCustomModels](AwsBedrockActions.md#listcustommodels)
- [ListDataSources](AwsBedrockActions.md#listdatasources)
- [ListFoundationModelAgreementOffers](AwsBedrockActions.md#listfoundationmodelagreementoffers)
- [ListFoundationModels](AwsBedrockActions.md#listfoundationmodels)
- [ListGuardrails](AwsBedrockActions.md#listguardrails)
- [ListIngestionJobs](AwsBedrockActions.md#listingestionjobs)
- [ListKnowledgeBases](AwsBedrockActions.md#listknowledgebases)
- [ListModelCustomizationJobs](AwsBedrockActions.md#listmodelcustomizationjobs)
- [ListModelEvaluationJobs](AwsBedrockActions.md#listmodelevaluationjobs)
- [ListModelInvocationJobs](AwsBedrockActions.md#listmodelinvocationjobs)
- [ListProvisionedModelThroughputs](AwsBedrockActions.md#listprovisionedmodelthroughputs)
- [ListTagsForResource](AwsBedrockActions.md#listtagsforresource)
- [PrepareAgent](AwsBedrockActions.md#prepareagent)
- [PutFoundationModelEntitlement](AwsBedrockActions.md#putfoundationmodelentitlement)
- [PutModelInvocationLoggingConfiguration](AwsBedrockActions.md#putmodelinvocationloggingconfiguration)
- [PutUseCaseForModelAccess](AwsBedrockActions.md#putusecaseformodelaccess)
- [Retrieve](AwsBedrockActions.md#retrieve)
- [RetrieveAndGenerate](AwsBedrockActions.md#retrieveandgenerate)
- [StartIngestionJob](AwsBedrockActions.md#startingestionjob)
- [StopModelCustomizationJob](AwsBedrockActions.md#stopmodelcustomizationjob)
- [StopModelInvocationJob](AwsBedrockActions.md#stopmodelinvocationjob)
- [TagResource](AwsBedrockActions.md#tagresource)
- [UntagResource](AwsBedrockActions.md#untagresource)
- [UpdateAgent](AwsBedrockActions.md#updateagent)
- [UpdateAgentActionGroup](AwsBedrockActions.md#updateagentactiongroup)
- [UpdateAgentAlias](AwsBedrockActions.md#updateagentalias)
- [UpdateAgentKnowledgeBase](AwsBedrockActions.md#updateagentknowledgebase)
- [UpdateDataSource](AwsBedrockActions.md#updatedatasource)
- [UpdateGuardrail](AwsBedrockActions.md#updateguardrail)
- [UpdateKnowledgeBase](AwsBedrockActions.md#updateknowledgebase)
- [UpdateProvisionedModelThroughput](AwsBedrockActions.md#updateprovisionedmodelthroughput)

## Enumeration Members

### AssociateAgentKnowledgeBase

• **AssociateAgentKnowledgeBase** = ``"bedrock:AssociateAgentKnowledgeBase"``

Grants permission to associate a knowledge base with an agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_AssociateAgentKnowledgeBase.html

#### Defined in

actions/bedrock.ts:17

___

### AssociateThirdPartyKnowledgeBase

• **AssociateThirdPartyKnowledgeBase** = ``"bedrock:AssociateThirdPartyKnowledgeBase"``

Grants permission to use 3rd party platform to store knowledge data

See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html

#### Defined in

actions/bedrock.ts:23

___

### CreateAgent

• **CreateAgent** = ``"bedrock:CreateAgent"``

Grants permission to create a new agent and a test agent alias pointing to the
DRAFT agent version

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgent.html

#### Defined in

actions/bedrock.ts:30

___

### CreateAgentActionGroup

• **CreateAgentActionGroup** = ``"bedrock:CreateAgentActionGroup"``

Grants permission to create a new action group in an existing agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html

#### Defined in

actions/bedrock.ts:36

___

### CreateAgentAlias

• **CreateAgentAlias** = ``"bedrock:CreateAgentAlias"``

Grants permission to create a new alias for an agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentAlias.html

#### Defined in

actions/bedrock.ts:42

___

### CreateDataSource

• **CreateDataSource** = ``"bedrock:CreateDataSource"``

Grants permission to create a data source

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateDataSource.html

#### Defined in

actions/bedrock.ts:48

___

### CreateFoundationModelAgreement

• **CreateFoundationModelAgreement** = ``"bedrock:CreateFoundationModelAgreement"``

Grants permission to create a new foundation model agreement

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html

#### Defined in

actions/bedrock.ts:54

___

### CreateGuardrail

• **CreateGuardrail** = ``"bedrock:CreateGuardrail"``

Grants permission to create a new guardrail

See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html

#### Defined in

actions/bedrock.ts:60

___

### CreateGuardrailVersion

• **CreateGuardrailVersion** = ``"bedrock:CreateGuardrailVersion"``

Grants permission to create a new guardrail version

See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html

#### Defined in

actions/bedrock.ts:66

___

### CreateKnowledgeBase

• **CreateKnowledgeBase** = ``"bedrock:CreateKnowledgeBase"``

Grants permission to create a knowledge base

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateKnowledgeBase.html

#### Defined in

actions/bedrock.ts:72

___

### CreateModelCustomizationJob

• **CreateModelCustomizationJob** = ``"bedrock:CreateModelCustomizationJob"``

Grants permission to create a job for customizing the model with your custom tr
aining data

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelCustomizationJob.html

#### Defined in

actions/bedrock.ts:79

___

### CreateModelEvaluationJob

• **CreateModelEvaluationJob** = ``"bedrock:CreateModelEvaluationJob"``

Grants permission to create a job for evaluation foundation models or custom mo
dels

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelEvaluationJob.html

#### Defined in

actions/bedrock.ts:86

___

### CreateModelInvocationJob

• **CreateModelInvocationJob** = ``"bedrock:CreateModelInvocationJob"``

Grants permission to create a new model invocation job

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelInvocationJob.html

#### Defined in

actions/bedrock.ts:92

___

### CreateProvisionedModelThroughput

• **CreateProvisionedModelThroughput** = ``"bedrock:CreateProvisionedModelThroughput"``

Grants permission to create a new provisioned model throughput

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateProvisionedModelThroughput.html

#### Defined in

actions/bedrock.ts:98

___

### DeleteAgent

• **DeleteAgent** = ``"bedrock:DeleteAgent"``

Grants permission to delete an Agent that you created earlier

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgent.html

#### Defined in

actions/bedrock.ts:104

___

### DeleteAgentActionGroup

• **DeleteAgentActionGroup** = ``"bedrock:DeleteAgentActionGroup"``

Grants permission to delete an actionGroup that you created earlier

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgentActionGroup.html

#### Defined in

actions/bedrock.ts:110

___

### DeleteAgentAlias

• **DeleteAgentAlias** = ``"bedrock:DeleteAgentAlias"``

Grants permission to delete an AgentAlias that you created earlier

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgentAlias.html

#### Defined in

actions/bedrock.ts:116

___

### DeleteAgentVersion

• **DeleteAgentVersion** = ``"bedrock:DeleteAgentVersion"``

Grants permission to delete an Agent Version that you created earlier

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgentVersion.html

#### Defined in

actions/bedrock.ts:122

___

### DeleteCustomModel

• **DeleteCustomModel** = ``"bedrock:DeleteCustomModel"``

Grants permission to delete a custom model that you created earlier

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteCustomModel.html

#### Defined in

actions/bedrock.ts:128

___

### DeleteDataSource

• **DeleteDataSource** = ``"bedrock:DeleteDataSource"``

Grants permission to delete a data source

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteDataSource.html

#### Defined in

actions/bedrock.ts:134

___

### DeleteFoundationModelAgreement

• **DeleteFoundationModelAgreement** = ``"bedrock:DeleteFoundationModelAgreement"``

Grants permission to delete a foundation model agreement that you created earli
er

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html

#### Defined in

actions/bedrock.ts:141

___

### DeleteGuardrail

• **DeleteGuardrail** = ``"bedrock:DeleteGuardrail"``

Grants permission to delete a guardrail or its version

See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html

#### Defined in

actions/bedrock.ts:147

___

### DeleteKnowledgeBase

• **DeleteKnowledgeBase** = ``"bedrock:DeleteKnowledgeBase"``

Grants permission to delete a knowledge base

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteKnowledgeBase.html

#### Defined in

actions/bedrock.ts:153

___

### DeleteModelInvocationLoggingConfiguration

• **DeleteModelInvocationLoggingConfiguration** = ``"bedrock:DeleteModelInvocationLoggingConfiguration"``

Grants permission to delete an existing Invocation logging configuration

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteModelInvocationLoggingConfiguration.html

#### Defined in

actions/bedrock.ts:159

___

### DeleteProvisionedModelThroughput

• **DeleteProvisionedModelThroughput** = ``"bedrock:DeleteProvisionedModelThroughput"``

Grants permission to delete a provisioned model throughput that you created ear
lier

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteProvisionedModelThroughput.html

#### Defined in

actions/bedrock.ts:166

___

### DisassociateAgentKnowledgeBase

• **DisassociateAgentKnowledgeBase** = ``"bedrock:DisassociateAgentKnowledgeBase"``

Grants permission to disassociate a knowledge base from the agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DisassociateAgentKnowledgeBase.html

#### Defined in

actions/bedrock.ts:172

___

### GetAgent

• **GetAgent** = ``"bedrock:GetAgent"``

Grants permission to retrieve an existing agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgent.html

#### Defined in

actions/bedrock.ts:178

___

### GetAgentActionGroup

• **GetAgentActionGroup** = ``"bedrock:GetAgentActionGroup"``

Grants permission to retrieve an existing action group

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html

#### Defined in

actions/bedrock.ts:184

___

### GetAgentAlias

• **GetAgentAlias** = ``"bedrock:GetAgentAlias"``

Grants permission to retrieve an existing alias

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentAlias.html

#### Defined in

actions/bedrock.ts:190

___

### GetAgentKnowledgeBase

• **GetAgentKnowledgeBase** = ``"bedrock:GetAgentKnowledgeBase"``

Grants permission to describe a knowledge base associated with an agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentKnowledgeBase.html

#### Defined in

actions/bedrock.ts:196

___

### GetAgentVersion

• **GetAgentVersion** = ``"bedrock:GetAgentVersion"``

Grants permission to retrieve an existing version of an agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentVersion.html

#### Defined in

actions/bedrock.ts:202

___

### GetCustomModel

• **GetCustomModel** = ``"bedrock:GetCustomModel"``

Grants permission to get the properties associated with a Bedrock custom model
that you have created

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetCustomModel.html

#### Defined in

actions/bedrock.ts:209

___

### GetDataSource

• **GetDataSource** = ``"bedrock:GetDataSource"``

Grants permission to retrieve an existing data source

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetDataSource.html

#### Defined in

actions/bedrock.ts:215

___

### GetFoundationModel

• **GetFoundationModel** = ``"bedrock:GetFoundationModel"``

Grants permission to get the properties associated with a Bedrock foundation mo
del

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetFoundationModel.html

#### Defined in

actions/bedrock.ts:222

___

### GetFoundationModelAvailability

• **GetFoundationModelAvailability** = ``"bedrock:GetFoundationModelAvailability"``

Grants permission to get the availability of a foundation model

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html

#### Defined in

actions/bedrock.ts:228

___

### GetGuardrail

• **GetGuardrail** = ``"bedrock:GetGuardrail"``

Grants permission to retrieve a guardrail or its version

See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html

#### Defined in

actions/bedrock.ts:234

___

### GetIngestionJob

• **GetIngestionJob** = ``"bedrock:GetIngestionJob"``

Grants permission to retrieve an existing ingestion job

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetIngestionJob.html

#### Defined in

actions/bedrock.ts:240

___

### GetKnowledgeBase

• **GetKnowledgeBase** = ``"bedrock:GetKnowledgeBase"``

Grants permission to retrieve an existing knowledge base

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetKnowledgeBase.html

#### Defined in

actions/bedrock.ts:246

___

### GetModelCustomizationJob

• **GetModelCustomizationJob** = ``"bedrock:GetModelCustomizationJob"``

Grants permission to get the properties associated with a model-customization j
ob. Use this operation to get the status of a model-customization job

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelCustomizationJob.html

#### Defined in

actions/bedrock.ts:253

___

### GetModelEvaluationJob

• **GetModelEvaluationJob** = ``"bedrock:GetModelEvaluationJob"``

Grants permission to get the properties associated with a model-evaluation job.
Use this operation to get the status of a model-evaluation job

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelEvaluationJob.html

#### Defined in

actions/bedrock.ts:260

___

### GetModelInvocationJob

• **GetModelInvocationJob** = ``"bedrock:GetModelInvocationJob"``

Grants permission to retrieve a model invocation job

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelInvocationJob.html

#### Defined in

actions/bedrock.ts:266

___

### GetModelInvocationLoggingConfiguration

• **GetModelInvocationLoggingConfiguration** = ``"bedrock:GetModelInvocationLoggingConfiguration"``

Grants permission to retrieve an existing Invocation logging configuration

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelInvocationLoggingConfiguration.html

#### Defined in

actions/bedrock.ts:272

___

### GetProvisionedModelThroughput

• **GetProvisionedModelThroughput** = ``"bedrock:GetProvisionedModelThroughput"``

Grants permission to retrieve a provisioned model throughput

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetProvisionedModelThroughput.html

#### Defined in

actions/bedrock.ts:278

___

### GetUseCaseForModelAccess

• **GetUseCaseForModelAccess** = ``"bedrock:GetUseCaseForModelAccess"``

Grants permission to retrieve a use case for model access

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html

#### Defined in

actions/bedrock.ts:284

___

### InvokeAgent

• **InvokeAgent** = ``"bedrock:InvokeAgent"``

Grants permission to send user input (text-only) to the alias of an agent for B
edrock

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html

#### Defined in

actions/bedrock.ts:291

___

### InvokeModel

• **InvokeModel** = ``"bedrock:InvokeModel"``

Grants permission to invoke the specified Bedrock model to run inference using
the input provided in the request body

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html

#### Defined in

actions/bedrock.ts:298

___

### InvokeModelWithResponseStream

• **InvokeModelWithResponseStream** = ``"bedrock:InvokeModelWithResponseStream"``

Grants permission to invoke the specified Bedrock model to run inference using
the input provided in the request body with streaming response

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModelWithResponseStream.html

#### Defined in

actions/bedrock.ts:305

___

### ListAgentActionGroups

• **ListAgentActionGroups** = ``"bedrock:ListAgentActionGroups"``

Grants permission to list action groups in an agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentActionGroups.html

#### Defined in

actions/bedrock.ts:311

___

### ListAgentAliases

• **ListAgentAliases** = ``"bedrock:ListAgentAliases"``

Grants permission to list aliases for an agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentAliases.html

#### Defined in

actions/bedrock.ts:317

___

### ListAgentKnowledgeBases

• **ListAgentKnowledgeBases** = ``"bedrock:ListAgentKnowledgeBases"``

Grants permission to list knowledge bases associated with an agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentKnowledgeBases.html

#### Defined in

actions/bedrock.ts:323

___

### ListAgentVersions

• **ListAgentVersions** = ``"bedrock:ListAgentVersions"``

Grants permission to list existing versions of an agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentVersions.html

#### Defined in

actions/bedrock.ts:329

___

### ListAgents

• **ListAgents** = ``"bedrock:ListAgents"``

Grants permission to list existing agents

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgents.html

#### Defined in

actions/bedrock.ts:335

___

### ListCustomModels

• **ListCustomModels** = ``"bedrock:ListCustomModels"``

Grants permission to get a list of Bedrock custom models that you have created

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListCustomModels.html

#### Defined in

actions/bedrock.ts:341

___

### ListDataSources

• **ListDataSources** = ``"bedrock:ListDataSources"``

Grants permission to list existing data sources in an knowledge base

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListDataSources.html

#### Defined in

actions/bedrock.ts:347

___

### ListFoundationModelAgreementOffers

• **ListFoundationModelAgreementOffers** = ``"bedrock:ListFoundationModelAgreementOffers"``

Grants permission to get a list of foundation model agreement offers

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html

#### Defined in

actions/bedrock.ts:353

___

### ListFoundationModels

• **ListFoundationModels** = ``"bedrock:ListFoundationModels"``

Grants permission to list Bedrock foundation models that you can use

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListFoundationModels.html

#### Defined in

actions/bedrock.ts:359

___

### ListGuardrails

• **ListGuardrails** = ``"bedrock:ListGuardrails"``

Grants permission to list guardrails or its versions

See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html

#### Defined in

actions/bedrock.ts:365

___

### ListIngestionJobs

• **ListIngestionJobs** = ``"bedrock:ListIngestionJobs"``

Grants permission to list ingestion jobs in a data source

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListIngestionJobs.html

#### Defined in

actions/bedrock.ts:371

___

### ListKnowledgeBases

• **ListKnowledgeBases** = ``"bedrock:ListKnowledgeBases"``

Grants permission to list existing knowledge bases

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListKnowledgeBases.html

#### Defined in

actions/bedrock.ts:377

___

### ListModelCustomizationJobs

• **ListModelCustomizationJobs** = ``"bedrock:ListModelCustomizationJobs"``

Grants permission to get the list of model customization jobs that you have sub
mitted

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelCustomizationJobs.html

#### Defined in

actions/bedrock.ts:384

___

### ListModelEvaluationJobs

• **ListModelEvaluationJobs** = ``"bedrock:ListModelEvaluationJobs"``

Grants permission to get the list of model evaluation jobs that you have submit
ted

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelEvaluationJobs.html

#### Defined in

actions/bedrock.ts:391

___

### ListModelInvocationJobs

• **ListModelInvocationJobs** = ``"bedrock:ListModelInvocationJobs"``

Grants permission to list model invocation jobs that you created earlier

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelInvocationJobs.html

#### Defined in

actions/bedrock.ts:397

___

### ListProvisionedModelThroughputs

• **ListProvisionedModelThroughputs** = ``"bedrock:ListProvisionedModelThroughputs"``

Grants permission to list provisioned model throughputs that you created earlie
r

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListProvisionedModelThroughputs.html

#### Defined in

actions/bedrock.ts:404

___

### ListTagsForResource

• **ListTagsForResource** = ``"bedrock:ListTagsForResource"``

Grants permission to list tags for a Bedrock resource

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/bedrock.ts:410

___

### PrepareAgent

• **PrepareAgent** = ``"bedrock:PrepareAgent"``

Grants permission to prepare an existing agent to receive runtime requests

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareAgent.html

#### Defined in

actions/bedrock.ts:416

___

### PutFoundationModelEntitlement

• **PutFoundationModelEntitlement** = ``"bedrock:PutFoundationModelEntitlement"``

Grants permission to put entitlement to access a foundation model

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html

#### Defined in

actions/bedrock.ts:422

___

### PutModelInvocationLoggingConfiguration

• **PutModelInvocationLoggingConfiguration** = ``"bedrock:PutModelInvocationLoggingConfiguration"``

Grants permission to create an existing Invocation logging configuration

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_PutModelInvocationLoggingConfiguration.html

#### Defined in

actions/bedrock.ts:428

___

### PutUseCaseForModelAccess

• **PutUseCaseForModelAccess** = ``"bedrock:PutUseCaseForModelAccess"``

Grants permission to put a use case for model access

See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html

#### Defined in

actions/bedrock.ts:434

___

### Retrieve

• **Retrieve** = ``"bedrock:Retrieve"``

Grants permission to retrieve ingested data from a knowledge base

See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html

#### Defined in

actions/bedrock.ts:440

___

### RetrieveAndGenerate

• **RetrieveAndGenerate** = ``"bedrock:RetrieveAndGenerate"``

Grants permission to send user input to perform retrieval and generation

See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html

#### Defined in

actions/bedrock.ts:446

___

### StartIngestionJob

• **StartIngestionJob** = ``"bedrock:StartIngestionJob"``

Grants permission to start an ingestion job

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_StartIngestionJob.html

#### Defined in

actions/bedrock.ts:452

___

### StopModelCustomizationJob

• **StopModelCustomizationJob** = ``"bedrock:StopModelCustomizationJob"``

Grants permission to stop a Bedrock model customization job while in progress

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_StopModelCustomizationJob.html

#### Defined in

actions/bedrock.ts:458

___

### StopModelInvocationJob

• **StopModelInvocationJob** = ``"bedrock:StopModelInvocationJob"``

Grants permission to stop a model invocation job that you started earlier

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_StopModelInvocationJob.html

#### Defined in

actions/bedrock.ts:464

___

### TagResource

• **TagResource** = ``"bedrock:TagResource"``

Grants permission to Tag a Bedrock resource

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_TagResource.html

#### Defined in

actions/bedrock.ts:470

___

### UntagResource

• **UntagResource** = ``"bedrock:UntagResource"``

Grants permission to Untag a Bedrock resource

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_UntagResource.html

#### Defined in

actions/bedrock.ts:476

___

### UpdateAgent

• **UpdateAgent** = ``"bedrock:UpdateAgent"``

Grants permission to update an existing agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgent.html

#### Defined in

actions/bedrock.ts:482

___

### UpdateAgentActionGroup

• **UpdateAgentActionGroup** = ``"bedrock:UpdateAgentActionGroup"``

Grants permission to update an existing action group

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html

#### Defined in

actions/bedrock.ts:488

___

### UpdateAgentAlias

• **UpdateAgentAlias** = ``"bedrock:UpdateAgentAlias"``

Grants permission to update an existing alias

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentAlias.html

#### Defined in

actions/bedrock.ts:494

___

### UpdateAgentKnowledgeBase

• **UpdateAgentKnowledgeBase** = ``"bedrock:UpdateAgentKnowledgeBase"``

Grants permission to update a knowledge base associated with an agent

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentKnowledgeBase.html

#### Defined in

actions/bedrock.ts:500

___

### UpdateDataSource

• **UpdateDataSource** = ``"bedrock:UpdateDataSource"``

Grants permission to update a data source

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateDataSource.html

#### Defined in

actions/bedrock.ts:506

___

### UpdateGuardrail

• **UpdateGuardrail** = ``"bedrock:UpdateGuardrail"``

Grants permission to update a guardrail

See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html

#### Defined in

actions/bedrock.ts:512

___

### UpdateKnowledgeBase

• **UpdateKnowledgeBase** = ``"bedrock:UpdateKnowledgeBase"``

Grants permission to update a knowledge base

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateKnowledgeBase.html

#### Defined in

actions/bedrock.ts:518

___

### UpdateProvisionedModelThroughput

• **UpdateProvisionedModelThroughput** = ``"bedrock:UpdateProvisionedModelThroughput"``

Grants permission to update a provisioned model throughput that you created ear
lier

See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_UpdateProvisionedModelThroughput.html

#### Defined in

actions/bedrock.ts:525
