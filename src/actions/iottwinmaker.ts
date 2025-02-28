// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS IoT TwinMaker (IOTTWINMAKER)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiottwinmaker.html
 *
 * 2025-02-24T21:48:27.545Z
 */
export enum AwsIottwinmakerActions {
  /**
   * Grants permission to set values for multiple time series properties
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_BatchPutPropertyValues.html
   */
  BatchPutPropertyValues = 'iottwinmaker:BatchPutPropertyValues',
  /**
   * Grants permission to cancel a metadata transfer job
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CancelMetadataTransferJob.html
   */
  CancelMetadataTransferJob = 'iottwinmaker:CancelMetadataTransferJob',
  /**
   * Grants permission to create a componentType
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateComponentType.html
   */
  CreateComponentType = 'iottwinmaker:CreateComponentType',
  /**
   * Grants permission to create an entity
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateEntity.html
   */
  CreateEntity = 'iottwinmaker:CreateEntity',
  /**
   * Grants permission to create a metadata transfer job
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateMetadataTransferJob.html
   */
  CreateMetadataTransferJob = 'iottwinmaker:CreateMetadataTransferJob',
  /**
   * Grants permission to create a scene
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateScene.html
   */
  CreateScene = 'iottwinmaker:CreateScene',
  /**
   * Grants permission to create a sync job
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateSyncJob.html
   */
  CreateSyncJob = 'iottwinmaker:CreateSyncJob',
  /**
   * Grants permission to create a workspace
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateWorkspace.html
   */
  CreateWorkspace = 'iottwinmaker:CreateWorkspace',
  /**
   * Grants permission to delete a componentType
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteComponentType.html
   */
  DeleteComponentType = 'iottwinmaker:DeleteComponentType',
  /**
   * Grants permission to delete an entity
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteEntity.html
   */
  DeleteEntity = 'iottwinmaker:DeleteEntity',
  /**
   * Grants permission to delete a scene
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteScene.html
   */
  DeleteScene = 'iottwinmaker:DeleteScene',
  /**
   * Grants permission to delete a sync job
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteSyncJob.html
   */
  DeleteSyncJob = 'iottwinmaker:DeleteSyncJob',
  /**
   * Grants permission to delete a workspace
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteWorkspace.html
   */
  DeleteWorkspace = 'iottwinmaker:DeleteWorkspace',
  /**
   * Grants permission to execute query
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ExecuteQuery.html
   */
  ExecuteQuery = 'iottwinmaker:ExecuteQuery',
  /**
   * Grants permission to get a componentType
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html
   */
  GetComponentType = 'iottwinmaker:GetComponentType',
  /**
   * Grants permission to get an entity
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html
   */
  GetEntity = 'iottwinmaker:GetEntity',
  /**
   * Grants permission to get a metadata transfer job
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetMetadataTransferJob.html
   */
  GetMetadataTransferJob = 'iottwinmaker:GetMetadataTransferJob',
  /**
   * Grants permission to get pricing plan
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPricingPlan.html
   */
  GetPricingPlan = 'iottwinmaker:GetPricingPlan',
  /**
   * Grants permission to retrieve the property values
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html
   */
  GetPropertyValue = 'iottwinmaker:GetPropertyValue',
  /**
   * Grants permission to retrieve the time series value history
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html
   */
  GetPropertyValueHistory = 'iottwinmaker:GetPropertyValueHistory',
  /**
   * Grants permission to get a scene
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html
   */
  GetScene = 'iottwinmaker:GetScene',
  /**
   * Grants permission to get a sync job
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetSyncJob.html
   */
  GetSyncJob = 'iottwinmaker:GetSyncJob',
  /**
   * Grants permission to get a workspace
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html
   */
  GetWorkspace = 'iottwinmaker:GetWorkspace',
  /**
   * Grants permission to list all componentTypes in a workspace
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html
   */
  ListComponentTypes = 'iottwinmaker:ListComponentTypes',
  /**
   * Grants permission to list components attached to an entity
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponents.html
   */
  ListComponents = 'iottwinmaker:ListComponents',
  /**
   * Grants permission to list all entities in a workspace
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html
   */
  ListEntities = 'iottwinmaker:ListEntities',
  /**
   * Grants permission to list all metadata transfer jobs
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListMetadataTransferJobs.html
   */
  ListMetadataTransferJobs = 'iottwinmaker:ListMetadataTransferJobs',
  /**
   * Grants permission to list properties of an entity component
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListProperties.html
   */
  ListProperties = 'iottwinmaker:ListProperties',
  /**
   * Grants permission to list all scenes in a workspace
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html
   */
  ListScenes = 'iottwinmaker:ListScenes',
  /**
   * Grants permission to list all sync jobs in a workspace
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListSyncJobs.html
   */
  ListSyncJobs = 'iottwinmaker:ListSyncJobs',
  /**
   * Grants permission to list all sync resources for a sync job
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListSyncResources.html
   */
  ListSyncResources = 'iottwinmaker:ListSyncResources',
  /**
   * Grants permission to list all tags for a resource
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'iottwinmaker:ListTagsForResource',
  /**
   * Grants permission to list all workspaces
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html
   */
  ListWorkspaces = 'iottwinmaker:ListWorkspaces',
  /**
   * Grants permission to tag a resource
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_TagResource.html
   */
  TagResource = 'iottwinmaker:TagResource',
  /**
   * Grants permission to untag a resource
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UntagResource.html
   */
  UntagResource = 'iottwinmaker:UntagResource',
  /**
   * Grants permission to update a componentType
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateComponentType.html
   */
  UpdateComponentType = 'iottwinmaker:UpdateComponentType',
  /**
   * Grants permission to update an entity
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateEntity.html
   */
  UpdateEntity = 'iottwinmaker:UpdateEntity',
  /**
   * Grants permission to update pricing plan
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdatePricingPlan.html
   */
  UpdatePricingPlan = 'iottwinmaker:UpdatePricingPlan',
  /**
   * Grants permission to update a scene
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateScene.html
   */
  UpdateScene = 'iottwinmaker:UpdateScene',
  /**
   * Grants permission to update a workspace
   *
   * See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateWorkspace.html
   */
  UpdateWorkspace = 'iottwinmaker:UpdateWorkspace',
}
