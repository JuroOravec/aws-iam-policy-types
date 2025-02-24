// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Cloud Directory (CLOUDDIRECTORY)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonclouddirectory.html
 *
 * 2025-02-24T21:47:00.958Z
 */
export enum AwsClouddirectoryActions {
  /**
   * Grants permission to add a new Facet to an object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AddFacetToObject.html
   */
  AddFacetToObject = 'clouddirectory:AddFacetToObject',
  /**
   * Grants permission to copy input published schema into Directory with same name
   * and version as that of published schema
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ApplySchema.html
   */
  ApplySchema = 'clouddirectory:ApplySchema',
  /**
   * Grants permission to attach an existing object to another existing object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachObject.html
   */
  AttachObject = 'clouddirectory:AttachObject',
  /**
   * Grants permission to attach a policy object to any other object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachPolicy.html
   */
  AttachPolicy = 'clouddirectory:AttachPolicy',
  /**
   * Grants permission to attach the specified object to the specified index
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachToIndex.html
   */
  AttachToIndex = 'clouddirectory:AttachToIndex',
  /**
   * Grants permission to attach a typed link b/w a source & target object reference
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachTypedLink.html
   */
  AttachTypedLink = 'clouddirectory:AttachTypedLink',
  /**
   * Grants permission to perform all the read operations in a batch. Each individua
   * l operation inside BatchRead needs to be granted permissions explicitly
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchRead.html
   */
  BatchRead = 'clouddirectory:BatchRead',
  /**
   * Grants permission to perform all the write operations in a batch. Each individu
   * al operation inside BatchWrite needs to be granted permissions explicitly
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchWrite.html
   */
  BatchWrite = 'clouddirectory:BatchWrite',
  /**
   * Grants permission to create a Directory by copying the published schema into th
   * e directory
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateDirectory.html
   */
  CreateDirectory = 'clouddirectory:CreateDirectory',
  /**
   * Grants permission to create a new Facet in a schema
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateFacet.html
   */
  CreateFacet = 'clouddirectory:CreateFacet',
  /**
   * Grants permission to create an index object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateIndex.html
   */
  CreateIndex = 'clouddirectory:CreateIndex',
  /**
   * Grants permission to create an object in a Directory
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateObject.html
   */
  CreateObject = 'clouddirectory:CreateObject',
  /**
   * Grants permission to create a new schema in a development state
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateSchema.html
   */
  CreateSchema = 'clouddirectory:CreateSchema',
  /**
   * Grants permission to create a new Typed Link facet in a schema
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateTypedLinkFacet.html
   */
  CreateTypedLinkFacet = 'clouddirectory:CreateTypedLinkFacet',
  /**
   * Grants permission to delete a directory. Only disabled directories can be delet
   * ed
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteDirectory.html
   */
  DeleteDirectory = 'clouddirectory:DeleteDirectory',
  /**
   * Grants permission to delete a given Facet. All attributes and Rules associated
   * with the facet will be deleted
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteFacet.html
   */
  DeleteFacet = 'clouddirectory:DeleteFacet',
  /**
   * Grants permission to delete an object and its associated attributes
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteObject.html
   */
  DeleteObject = 'clouddirectory:DeleteObject',
  /**
   * Grants permission to delete a given schema
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteSchema.html
   */
  DeleteSchema = 'clouddirectory:DeleteSchema',
  /**
   * Grants permission to delete a given TypedLink Facet. All attributes and Rules a
   * ssociated with the facet will be deleted
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteTypedLinkFacet.html
   */
  DeleteTypedLinkFacet = 'clouddirectory:DeleteTypedLinkFacet',
  /**
   * Grants permission to detach the specified object from the specified index
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachFromIndex.html
   */
  DetachFromIndex = 'clouddirectory:DetachFromIndex',
  /**
   * Grants permission to detach a given object from the parent object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachObject.html
   */
  DetachObject = 'clouddirectory:DetachObject',
  /**
   * Grants permission to detach a policy from an object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachPolicy.html
   */
  DetachPolicy = 'clouddirectory:DetachPolicy',
  /**
   * Grants permission to detach a given typed link b/w given source and target obje
   * ct reference
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachTypedLink.html
   */
  DetachTypedLink = 'clouddirectory:DetachTypedLink',
  /**
   * Grants permission to disable the specified directory
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DisableDirectory.html
   */
  DisableDirectory = 'clouddirectory:DisableDirectory',
  /**
   * Grants permission to enable the specified directory
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_EnableDirectory.html
   */
  EnableDirectory = 'clouddirectory:EnableDirectory',
  /**
   * Grants permission to return current applied schema version ARN, including the m
   * inor version in use
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetAppliedSchemaVersion.html
   */
  GetAppliedSchemaVersion = 'clouddirectory:GetAppliedSchemaVersion',
  /**
   * Grants permission to retrieve metadata about a directory
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetDirectory.html
   */
  GetDirectory = 'clouddirectory:GetDirectory',
  /**
   * Grants permission to get details of the Facet, such as Facet Name, Attributes,
   * Rules, or ObjectType
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetFacet.html
   */
  GetFacet = 'clouddirectory:GetFacet',
  /**
   * Grants permission to retrieve attributes that are associated with a typed link
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetLinkAttributes.html
   */
  GetLinkAttributes = 'clouddirectory:GetLinkAttributes',
  /**
   * Grants permission to retrieve attributes within a facet that are associated wit
   * h an object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectAttributes.html
   */
  GetObjectAttributes = 'clouddirectory:GetObjectAttributes',
  /**
   * Grants permission to retrieve metadata about an object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectInformation.html
   */
  GetObjectInformation = 'clouddirectory:GetObjectInformation',
  /**
   * Grants permission to retrieve a JSON representation of the schema
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetSchemaAsJson.html
   */
  GetSchemaAsJson = 'clouddirectory:GetSchemaAsJson',
  /**
   * Grants permission to return identity attributes order information associated wi
   * th a given typed link facet
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetTypedLinkFacetInformation.html
   */
  GetTypedLinkFacetInformation = 'clouddirectory:GetTypedLinkFacetInformation',
  /**
   * Grants permission to list schemas applied to a directory
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAppliedSchemaArns.html
   */
  ListAppliedSchemaArns = 'clouddirectory:ListAppliedSchemaArns',
  /**
   * Grants permission to list indices attached to an object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAttachedIndices.html
   */
  ListAttachedIndices = 'clouddirectory:ListAttachedIndices',
  /**
   * Grants permission to retrieve the ARNs of schemas in the development state
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDevelopmentSchemaArns.html
   */
  ListDevelopmentSchemaArns = 'clouddirectory:ListDevelopmentSchemaArns',
  /**
   * Grants permission to list directories created within an account
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDirectories.html
   */
  ListDirectories = 'clouddirectory:ListDirectories',
  /**
   * Grants permission to retrieve attributes attached to the facet
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetAttributes.html
   */
  ListFacetAttributes = 'clouddirectory:ListFacetAttributes',
  /**
   * Grants permission to retrieve the names of facets that exist in a schema
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetNames.html
   */
  ListFacetNames = 'clouddirectory:ListFacetNames',
  /**
   * Grants permission to return a paginated list of all incoming TypedLinks for a g
   * iven object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIncomingTypedLinks.html
   */
  ListIncomingTypedLinks = 'clouddirectory:ListIncomingTypedLinks',
  /**
   * Grants permission to list objects attached to the specified index
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIndex.html
   */
  ListIndex = 'clouddirectory:ListIndex',
  /**
   * Grants permission to list the major version families of each managed schema. If
   * a major version ARN is provided as SchemaArn, the minor version revisions in th
   * at family are listed instead
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListManagedSchemaArns.html
   */
  ListManagedSchemaArns = 'clouddirectory:ListManagedSchemaArns',
  /**
   * Grants permission to list all attributes associated with an object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectAttributes.html
   */
  ListObjectAttributes = 'clouddirectory:ListObjectAttributes',
  /**
   * Grants permission to return a paginated list of child objects associated with a
   * given object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectChildren.html
   */
  ListObjectChildren = 'clouddirectory:ListObjectChildren',
  /**
   * Grants permission to retrieve all available parent paths for any object type su
   * ch as node, leaf node, policy node, and index node objects
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParentPaths.html
   */
  ListObjectParentPaths = 'clouddirectory:ListObjectParentPaths',
  /**
   * Grants permission to list parent objects associated with a given object in pagi
   * nation fashion
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParents.html
   */
  ListObjectParents = 'clouddirectory:ListObjectParents',
  /**
   * Grants permission to return policies attached to an object in pagination fashio
   * n
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectPolicies.html
   */
  ListObjectPolicies = 'clouddirectory:ListObjectPolicies',
  /**
   * Grants permission to return a paginated list of all outgoing TypedLinks for a g
   * iven object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListOutgoingTypedLinks.html
   */
  ListOutgoingTypedLinks = 'clouddirectory:ListOutgoingTypedLinks',
  /**
   * Grants permission to return all of the ObjectIdentifiers to which a given polic
   * y is attached
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPolicyAttachments.html
   */
  ListPolicyAttachments = 'clouddirectory:ListPolicyAttachments',
  /**
   * Grants permission to retrieve published schema ARNs
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPublishedSchemaArns.html
   */
  ListPublishedSchemaArns = 'clouddirectory:ListPublishedSchemaArns',
  /**
   * Grants permission to return tags for a resource
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'clouddirectory:ListTagsForResource',
  /**
   * Grants permission to return a paginated list of attributes associated with type
   * d link facet
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetAttributes.html
   */
  ListTypedLinkFacetAttributes = 'clouddirectory:ListTypedLinkFacetAttributes',
  /**
   * Grants permission to return a paginated list of typed link facet names that exi
   * st in a schema
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetNames.html
   */
  ListTypedLinkFacetNames = 'clouddirectory:ListTypedLinkFacetNames',
  /**
   * Grants permission to list all policies from the root of the Directory to the ob
   * ject specified
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_LookupPolicy.html
   */
  LookupPolicy = 'clouddirectory:LookupPolicy',
  /**
   * Grants permission to publish a development schema with a version
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PublishSchema.html
   */
  PublishSchema = 'clouddirectory:PublishSchema',
  /**
   * Grants permission to update a schema using JSON upload. Only available for deve
   * lopment schemas
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PutSchemaFromJson.html
   */
  PutSchemaFromJson = 'clouddirectory:PutSchemaFromJson',
  /**
   * Grants permission to remove the specified facet from the specified object
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_RemoveFacetFromObject.html
   */
  RemoveFacetFromObject = 'clouddirectory:RemoveFacetFromObject',
  /**
   * Grants permission to add tags to a resource
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_TagResource.html
   */
  TagResource = 'clouddirectory:TagResource',
  /**
   * Grants permission to remove tags from a resource
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'clouddirectory:UntagResource',
  /**
   * Grants permission to add/update/delete existing Attributes, Rules, or ObjectTyp
   * e of a Facet
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateFacet.html
   */
  UpdateFacet = 'clouddirectory:UpdateFacet',
  /**
   * Grants permission to update a given typed link's attributes. Attributes to be u
   * pdated must not contribute to the typed link's identity, as defined by its Iden
   * tityAttributeOrder
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateLinkAttributes.html
   */
  UpdateLinkAttributes = 'clouddirectory:UpdateLinkAttributes',
  /**
   * Grants permission to update a given object's attributes
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateObjectAttributes.html
   */
  UpdateObjectAttributes = 'clouddirectory:UpdateObjectAttributes',
  /**
   * Grants permission to update the schema name with a new name
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateSchema.html
   */
  UpdateSchema = 'clouddirectory:UpdateSchema',
  /**
   * Grants permission to add/update/delete existing Attributes, Rules, identity att
   * ribute order of a TypedLink Facet
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateTypedLinkFacet.html
   */
  UpdateTypedLinkFacet = 'clouddirectory:UpdateTypedLinkFacet',
  /**
   * Grants permission to upgrade a single directory in-place using the PublishedSch
   * emaArn with schema updates found in MinorVersion. Backwards-compatible minor ve
   * rsion upgrades are instantaneously available for readers on all objects in the
   * directory
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpgradeAppliedSchema.html
   */
  UpgradeAppliedSchema = 'clouddirectory:UpgradeAppliedSchema',
  /**
   * Grants permission to upgrade a published schema under a new minor version revis
   * ion using the current contents of DevelopmentSchemaArn
   *
   * See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpgradePublishedSchema.html
   */
  UpgradePublishedSchema = 'clouddirectory:UpgradePublishedSchema',
}
