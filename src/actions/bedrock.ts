// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Bedrock (BEDROCK)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
 *
 * 2024-02-12T09:56:12.137Z
 */
export enum AwsBedrockActions {
  /**
   * Grants permission to associate a knowledge base with an agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_AssociateAgentKnowledgeBase.html
   */
  AssociateAgentKnowledgeBase = 'bedrock:AssociateAgentKnowledgeBase',
  /**
   * Grants permission to use 3rd party platform to store knowledge data
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  AssociateThirdPartyKnowledgeBase = 'bedrock:AssociateThirdPartyKnowledgeBase',
  /**
   * Grants permission to create a new agent and a test agent alias pointing to the
   * DRAFT agent version
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgent.html
   */
  CreateAgent = 'bedrock:CreateAgent',
  /**
   * Grants permission to create a new action group in an existing agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html
   */
  CreateAgentActionGroup = 'bedrock:CreateAgentActionGroup',
  /**
   * Grants permission to create a new alias for an agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentAlias.html
   */
  CreateAgentAlias = 'bedrock:CreateAgentAlias',
  /**
   * Grants permission to create a data source
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateDataSource.html
   */
  CreateDataSource = 'bedrock:CreateDataSource',
  /**
   * Grants permission to create a new foundation model agreement
   *
   * See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  CreateFoundationModelAgreement = 'bedrock:CreateFoundationModelAgreement',
  /**
   * Grants permission to create a new guardrail
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  CreateGuardrail = 'bedrock:CreateGuardrail',
  /**
   * Grants permission to create a new guardrail version
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  CreateGuardrailVersion = 'bedrock:CreateGuardrailVersion',
  /**
   * Grants permission to create a knowledge base
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateKnowledgeBase.html
   */
  CreateKnowledgeBase = 'bedrock:CreateKnowledgeBase',
  /**
   * Grants permission to create a job for customizing the model with your custom tr
   * aining data
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelCustomizationJob.html
   */
  CreateModelCustomizationJob = 'bedrock:CreateModelCustomizationJob',
  /**
   * Grants permission to create a job for evaluation foundation models or custom mo
   * dels
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelEvaluationJob.html
   */
  CreateModelEvaluationJob = 'bedrock:CreateModelEvaluationJob',
  /**
   * Grants permission to create a new model invocation job
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelInvocationJob.html
   */
  CreateModelInvocationJob = 'bedrock:CreateModelInvocationJob',
  /**
   * Grants permission to create a new provisioned model throughput
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateProvisionedModelThroughput.html
   */
  CreateProvisionedModelThroughput = 'bedrock:CreateProvisionedModelThroughput',
  /**
   * Grants permission to delete an Agent that you created earlier
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgent.html
   */
  DeleteAgent = 'bedrock:DeleteAgent',
  /**
   * Grants permission to delete an actionGroup that you created earlier
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgentActionGroup.html
   */
  DeleteAgentActionGroup = 'bedrock:DeleteAgentActionGroup',
  /**
   * Grants permission to delete an AgentAlias that you created earlier
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgentAlias.html
   */
  DeleteAgentAlias = 'bedrock:DeleteAgentAlias',
  /**
   * Grants permission to delete an Agent Version that you created earlier
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgentVersion.html
   */
  DeleteAgentVersion = 'bedrock:DeleteAgentVersion',
  /**
   * Grants permission to delete a custom model that you created earlier
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteCustomModel.html
   */
  DeleteCustomModel = 'bedrock:DeleteCustomModel',
  /**
   * Grants permission to delete a data source
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteDataSource.html
   */
  DeleteDataSource = 'bedrock:DeleteDataSource',
  /**
   * Grants permission to delete a foundation model agreement that you created earli
   * er
   *
   * See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  DeleteFoundationModelAgreement = 'bedrock:DeleteFoundationModelAgreement',
  /**
   * Grants permission to delete a guardrail or its version
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  DeleteGuardrail = 'bedrock:DeleteGuardrail',
  /**
   * Grants permission to delete a knowledge base
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteKnowledgeBase.html
   */
  DeleteKnowledgeBase = 'bedrock:DeleteKnowledgeBase',
  /**
   * Grants permission to delete an existing Invocation logging configuration
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteModelInvocationLoggingConfiguration.html
   */
  DeleteModelInvocationLoggingConfiguration = 'bedrock:DeleteModelInvocationLoggingConfiguration',
  /**
   * Grants permission to delete a provisioned model throughput that you created ear
   * lier
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteProvisionedModelThroughput.html
   */
  DeleteProvisionedModelThroughput = 'bedrock:DeleteProvisionedModelThroughput',
  /**
   * Grants permission to disassociate a knowledge base from the agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DisassociateAgentKnowledgeBase.html
   */
  DisassociateAgentKnowledgeBase = 'bedrock:DisassociateAgentKnowledgeBase',
  /**
   * Grants permission to retrieve an existing agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgent.html
   */
  GetAgent = 'bedrock:GetAgent',
  /**
   * Grants permission to retrieve an existing action group
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html
   */
  GetAgentActionGroup = 'bedrock:GetAgentActionGroup',
  /**
   * Grants permission to retrieve an existing alias
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentAlias.html
   */
  GetAgentAlias = 'bedrock:GetAgentAlias',
  /**
   * Grants permission to describe a knowledge base associated with an agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentKnowledgeBase.html
   */
  GetAgentKnowledgeBase = 'bedrock:GetAgentKnowledgeBase',
  /**
   * Grants permission to retrieve an existing version of an agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentVersion.html
   */
  GetAgentVersion = 'bedrock:GetAgentVersion',
  /**
   * Grants permission to get the properties associated with a Bedrock custom model
   * that you have created
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetCustomModel.html
   */
  GetCustomModel = 'bedrock:GetCustomModel',
  /**
   * Grants permission to retrieve an existing data source
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetDataSource.html
   */
  GetDataSource = 'bedrock:GetDataSource',
  /**
   * Grants permission to get the properties associated with a Bedrock foundation mo
   * del
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetFoundationModel.html
   */
  GetFoundationModel = 'bedrock:GetFoundationModel',
  /**
   * Grants permission to get the availability of a foundation model
   *
   * See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  GetFoundationModelAvailability = 'bedrock:GetFoundationModelAvailability',
  /**
   * Grants permission to retrieve a guardrail or its version
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  GetGuardrail = 'bedrock:GetGuardrail',
  /**
   * Grants permission to retrieve an existing ingestion job
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetIngestionJob.html
   */
  GetIngestionJob = 'bedrock:GetIngestionJob',
  /**
   * Grants permission to retrieve an existing knowledge base
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetKnowledgeBase.html
   */
  GetKnowledgeBase = 'bedrock:GetKnowledgeBase',
  /**
   * Grants permission to get the properties associated with a model-customization j
   * ob. Use this operation to get the status of a model-customization job
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelCustomizationJob.html
   */
  GetModelCustomizationJob = 'bedrock:GetModelCustomizationJob',
  /**
   * Grants permission to get the properties associated with a model-evaluation job.
   * Use this operation to get the status of a model-evaluation job
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelEvaluationJob.html
   */
  GetModelEvaluationJob = 'bedrock:GetModelEvaluationJob',
  /**
   * Grants permission to retrieve a model invocation job
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelInvocationJob.html
   */
  GetModelInvocationJob = 'bedrock:GetModelInvocationJob',
  /**
   * Grants permission to retrieve an existing Invocation logging configuration
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelInvocationLoggingConfiguration.html
   */
  GetModelInvocationLoggingConfiguration = 'bedrock:GetModelInvocationLoggingConfiguration',
  /**
   * Grants permission to retrieve a provisioned model throughput
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetProvisionedModelThroughput.html
   */
  GetProvisionedModelThroughput = 'bedrock:GetProvisionedModelThroughput',
  /**
   * Grants permission to retrieve a use case for model access
   *
   * See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  GetUseCaseForModelAccess = 'bedrock:GetUseCaseForModelAccess',
  /**
   * Grants permission to send user input (text-only) to the alias of an agent for B
   * edrock
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html
   */
  InvokeAgent = 'bedrock:InvokeAgent',
  /**
   * Grants permission to invoke the specified Bedrock model to run inference using
   * the input provided in the request body
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html
   */
  InvokeModel = 'bedrock:InvokeModel',
  /**
   * Grants permission to invoke the specified Bedrock model to run inference using
   * the input provided in the request body with streaming response
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModelWithResponseStream.html
   */
  InvokeModelWithResponseStream = 'bedrock:InvokeModelWithResponseStream',
  /**
   * Grants permission to list action groups in an agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentActionGroups.html
   */
  ListAgentActionGroups = 'bedrock:ListAgentActionGroups',
  /**
   * Grants permission to list aliases for an agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentAliases.html
   */
  ListAgentAliases = 'bedrock:ListAgentAliases',
  /**
   * Grants permission to list knowledge bases associated with an agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentKnowledgeBases.html
   */
  ListAgentKnowledgeBases = 'bedrock:ListAgentKnowledgeBases',
  /**
   * Grants permission to list existing versions of an agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentVersions.html
   */
  ListAgentVersions = 'bedrock:ListAgentVersions',
  /**
   * Grants permission to list existing agents
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgents.html
   */
  ListAgents = 'bedrock:ListAgents',
  /**
   * Grants permission to get a list of Bedrock custom models that you have created
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListCustomModels.html
   */
  ListCustomModels = 'bedrock:ListCustomModels',
  /**
   * Grants permission to list existing data sources in an knowledge base
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListDataSources.html
   */
  ListDataSources = 'bedrock:ListDataSources',
  /**
   * Grants permission to get a list of foundation model agreement offers
   *
   * See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  ListFoundationModelAgreementOffers = 'bedrock:ListFoundationModelAgreementOffers',
  /**
   * Grants permission to list Bedrock foundation models that you can use
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListFoundationModels.html
   */
  ListFoundationModels = 'bedrock:ListFoundationModels',
  /**
   * Grants permission to list guardrails or its versions
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  ListGuardrails = 'bedrock:ListGuardrails',
  /**
   * Grants permission to list ingestion jobs in a data source
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListIngestionJobs.html
   */
  ListIngestionJobs = 'bedrock:ListIngestionJobs',
  /**
   * Grants permission to list existing knowledge bases
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListKnowledgeBases.html
   */
  ListKnowledgeBases = 'bedrock:ListKnowledgeBases',
  /**
   * Grants permission to get the list of model customization jobs that you have sub
   * mitted
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelCustomizationJobs.html
   */
  ListModelCustomizationJobs = 'bedrock:ListModelCustomizationJobs',
  /**
   * Grants permission to get the list of model evaluation jobs that you have submit
   * ted
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelEvaluationJobs.html
   */
  ListModelEvaluationJobs = 'bedrock:ListModelEvaluationJobs',
  /**
   * Grants permission to list model invocation jobs that you created earlier
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelInvocationJobs.html
   */
  ListModelInvocationJobs = 'bedrock:ListModelInvocationJobs',
  /**
   * Grants permission to list provisioned model throughputs that you created earlie
   * r
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListProvisionedModelThroughputs.html
   */
  ListProvisionedModelThroughputs = 'bedrock:ListProvisionedModelThroughputs',
  /**
   * Grants permission to list tags for a Bedrock resource
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'bedrock:ListTagsForResource',
  /**
   * Grants permission to prepare an existing agent to receive runtime requests
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareAgent.html
   */
  PrepareAgent = 'bedrock:PrepareAgent',
  /**
   * Grants permission to put entitlement to access a foundation model
   *
   * See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  PutFoundationModelEntitlement = 'bedrock:PutFoundationModelEntitlement',
  /**
   * Grants permission to create an existing Invocation logging configuration
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_PutModelInvocationLoggingConfiguration.html
   */
  PutModelInvocationLoggingConfiguration = 'bedrock:PutModelInvocationLoggingConfiguration',
  /**
   * Grants permission to put a use case for model access
   *
   * See https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  PutUseCaseForModelAccess = 'bedrock:PutUseCaseForModelAccess',
  /**
   * Grants permission to retrieve ingested data from a knowledge base
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  Retrieve = 'bedrock:Retrieve',
  /**
   * Grants permission to send user input to perform retrieval and generation
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  RetrieveAndGenerate = 'bedrock:RetrieveAndGenerate',
  /**
   * Grants permission to start an ingestion job
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_StartIngestionJob.html
   */
  StartIngestionJob = 'bedrock:StartIngestionJob',
  /**
   * Grants permission to stop a Bedrock model customization job while in progress
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_StopModelCustomizationJob.html
   */
  StopModelCustomizationJob = 'bedrock:StopModelCustomizationJob',
  /**
   * Grants permission to stop a model invocation job that you started earlier
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_StopModelInvocationJob.html
   */
  StopModelInvocationJob = 'bedrock:StopModelInvocationJob',
  /**
   * Grants permission to Tag a Bedrock resource
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_TagResource.html
   */
  TagResource = 'bedrock:TagResource',
  /**
   * Grants permission to Untag a Bedrock resource
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'bedrock:UntagResource',
  /**
   * Grants permission to update an existing agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgent.html
   */
  UpdateAgent = 'bedrock:UpdateAgent',
  /**
   * Grants permission to update an existing action group
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html
   */
  UpdateAgentActionGroup = 'bedrock:UpdateAgentActionGroup',
  /**
   * Grants permission to update an existing alias
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentAlias.html
   */
  UpdateAgentAlias = 'bedrock:UpdateAgentAlias',
  /**
   * Grants permission to update a knowledge base associated with an agent
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentKnowledgeBase.html
   */
  UpdateAgentKnowledgeBase = 'bedrock:UpdateAgentKnowledgeBase',
  /**
   * Grants permission to update a data source
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateDataSource.html
   */
  UpdateDataSource = 'bedrock:UpdateDataSource',
  /**
   * Grants permission to update a guardrail
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  UpdateGuardrail = 'bedrock:UpdateGuardrail',
  /**
   * Grants permission to update a knowledge base
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateKnowledgeBase.html
   */
  UpdateKnowledgeBase = 'bedrock:UpdateKnowledgeBase',
  /**
   * Grants permission to update a provisioned model throughput that you created ear
   * lier
   *
   * See https://docs.aws.amazon.com/bedrock/latest/APIReference/API_UpdateProvisionedModelThroughput.html
   */
  UpdateProvisionedModelThroughput = 'bedrock:UpdateProvisionedModelThroughput',
}
