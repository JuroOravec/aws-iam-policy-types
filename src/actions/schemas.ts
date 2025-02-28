// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon EventBridge Schemas (SCHEMAS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgeschemas.html
 *
 * 2025-02-24T21:48:01.489Z
 */
export enum AwsSchemasActions {
  /**
   * Grants permission to create an event schema discoverer. Once created, your even
   * ts will be automatically map into corresponding schema documents
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#CreateDiscoverer
   */
  CreateDiscoverer = 'schemas:CreateDiscoverer',
  /**
   * Grants permission to create a new schema registry in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#CreateRegistry
   */
  CreateRegistry = 'schemas:CreateRegistry',
  /**
   * Grants permission to create a new schema in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#CreateSchema
   */
  CreateSchema = 'schemas:CreateSchema',
  /**
   * Grants permission to delete discoverer in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DeleteDiscoverer
   */
  DeleteDiscoverer = 'schemas:DeleteDiscoverer',
  /**
   * Grants permission to delete an existing registry in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DeleteRegistry
   */
  DeleteRegistry = 'schemas:DeleteRegistry',
  /**
   * Grants permission to delete the resource-based policy attached to a given regis
   * try
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#DeleteResourcePolicy
   */
  DeleteResourcePolicy = 'schemas:DeleteResourcePolicy',
  /**
   * Grants permission to delete an existing schema in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DeleteSchema
   */
  DeleteSchema = 'schemas:DeleteSchema',
  /**
   * Grants permission to delete a specific version of schema in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-version-schemaversion.html#DeleteSchemaVersion
   */
  DeleteSchemaVersion = 'schemas:DeleteSchemaVersion',
  /**
   * Grants permission to retrieve metadata for generated code for specific schema i
   * n your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#DescribeCodeBinding
   */
  DescribeCodeBinding = 'schemas:DescribeCodeBinding',
  /**
   * Grants permission to retrieve discoverer metadata in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DescribeDiscoverer
   */
  DescribeDiscoverer = 'schemas:DescribeDiscoverer',
  /**
   * Grants permission to describe an existing registry metadata in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DescribeRegistry
   */
  DescribeRegistry = 'schemas:DescribeRegistry',
  /**
   * Grants permission to retrieve an existing schema in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DescribeSchema
   */
  DescribeSchema = 'schemas:DescribeSchema',
  /**
   * Grants permission to export the AWS registry or discovered schemas in OpenAPI 3
   * format to JSONSchema format
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#ExportSchema
   */
  ExportSchema = 'schemas:ExportSchema',
  /**
   * Grants permission to retrieve metadata for generated code for specific schema i
   * n your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language-source.html#GetCodeBindingSource
   */
  GetCodeBindingSource = 'schemas:GetCodeBindingSource',
  /**
   * Grants permission to retrieve a schema for the provided list of sample events
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discover.html#GetDiscoveredSchema
   */
  GetDiscoveredSchema = 'schemas:GetDiscoveredSchema',
  /**
   * Grants permission to retrieve the resource-based policy attached to a given reg
   * istry
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#GetResourcePolicy
   */
  GetResourcePolicy = 'schemas:GetResourcePolicy',
  /**
   * Grants permission to list all discoverers in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#ListDiscoverers
   */
  ListDiscoverers = 'schemas:ListDiscoverers',
  /**
   * Grants permission to list all registries in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries.html#ListRegistries
   */
  ListRegistries = 'schemas:ListRegistries',
  /**
   * Grants permission to list all versions of a schema
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-versions.html#ListSchemaVersions
   */
  ListSchemaVersions = 'schemas:ListSchemaVersions',
  /**
   * Grants permission to list all schemas
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas.html#ListSchemas
   */
  ListSchemas = 'schemas:ListSchemas',
  /**
   * Grants permission to lists tags for a resource
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#ListTagsForResource
   */
  ListTagsForResource = 'schemas:ListTagsForResource',
  /**
   * Grants permission to generate code for specific schema in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#PutCodeBinding
   */
  PutCodeBinding = 'schemas:PutCodeBinding',
  /**
   * Grants permission to attach a resource-based policy to a given registry
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#PutResourcePolicy
   */
  PutResourcePolicy = 'schemas:PutResourcePolicy',
  /**
   * Grants permission to search schemas based on specified keywords in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-search.html#SearchSchemas
   */
  SearchSchemas = 'schemas:SearchSchemas',
  /**
   * Grants permission to start the specified discoverer. Once started the discovere
   * r will automatically register schemas for published events to configured source
   * in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StartDiscoverer
   */
  StartDiscoverer = 'schemas:StartDiscoverer',
  /**
   * Grants permission to stop the specified discoverer. Once stopped the discoverer
   * will no longer register schemas for published events to configured source in yo
   * ur account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StopDiscoverer
   */
  StopDiscoverer = 'schemas:StopDiscoverer',
  /**
   * Grants permission to tag a resource
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#TagResource
   */
  TagResource = 'schemas:TagResource',
  /**
   * Grants permission to remove a tag from a resource
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#UntagResource
   */
  UntagResource = 'schemas:UntagResource',
  /**
   * Grants permission to update an existing discoverer in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#UpdateDiscoverer
   */
  UpdateDiscoverer = 'schemas:UpdateDiscoverer',
  /**
   * Grants permission to update an existing registry metadata in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#UpdateRegistry
   */
  UpdateRegistry = 'schemas:UpdateRegistry',
  /**
   * Grants permission to update an existing schema in your account
   *
   * See https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#UpdateSchema
   */
  UpdateSchema = 'schemas:UpdateSchema',
}
