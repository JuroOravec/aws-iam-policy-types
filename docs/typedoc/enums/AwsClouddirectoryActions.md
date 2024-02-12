[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsClouddirectoryActions

# Enumeration: AwsClouddirectoryActions

All IAM policy actions for Amazon Cloud Directory (CLOUDDIRECTORY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonclouddirectory.html

2024-02-12T09:56:20.065Z

## Table of contents

### Enumeration Members

- [AddFacetToObject](AwsClouddirectoryActions.md#addfacettoobject)
- [ApplySchema](AwsClouddirectoryActions.md#applyschema)
- [AttachObject](AwsClouddirectoryActions.md#attachobject)
- [AttachPolicy](AwsClouddirectoryActions.md#attachpolicy)
- [AttachToIndex](AwsClouddirectoryActions.md#attachtoindex)
- [AttachTypedLink](AwsClouddirectoryActions.md#attachtypedlink)
- [BatchRead](AwsClouddirectoryActions.md#batchread)
- [BatchWrite](AwsClouddirectoryActions.md#batchwrite)
- [CreateDirectory](AwsClouddirectoryActions.md#createdirectory)
- [CreateFacet](AwsClouddirectoryActions.md#createfacet)
- [CreateIndex](AwsClouddirectoryActions.md#createindex)
- [CreateObject](AwsClouddirectoryActions.md#createobject)
- [CreateSchema](AwsClouddirectoryActions.md#createschema)
- [CreateTypedLinkFacet](AwsClouddirectoryActions.md#createtypedlinkfacet)
- [DeleteDirectory](AwsClouddirectoryActions.md#deletedirectory)
- [DeleteFacet](AwsClouddirectoryActions.md#deletefacet)
- [DeleteObject](AwsClouddirectoryActions.md#deleteobject)
- [DeleteSchema](AwsClouddirectoryActions.md#deleteschema)
- [DeleteTypedLinkFacet](AwsClouddirectoryActions.md#deletetypedlinkfacet)
- [DetachFromIndex](AwsClouddirectoryActions.md#detachfromindex)
- [DetachObject](AwsClouddirectoryActions.md#detachobject)
- [DetachPolicy](AwsClouddirectoryActions.md#detachpolicy)
- [DetachTypedLink](AwsClouddirectoryActions.md#detachtypedlink)
- [DisableDirectory](AwsClouddirectoryActions.md#disabledirectory)
- [EnableDirectory](AwsClouddirectoryActions.md#enabledirectory)
- [GetAppliedSchemaVersion](AwsClouddirectoryActions.md#getappliedschemaversion)
- [GetDirectory](AwsClouddirectoryActions.md#getdirectory)
- [GetFacet](AwsClouddirectoryActions.md#getfacet)
- [GetLinkAttributes](AwsClouddirectoryActions.md#getlinkattributes)
- [GetObjectAttributes](AwsClouddirectoryActions.md#getobjectattributes)
- [GetObjectInformation](AwsClouddirectoryActions.md#getobjectinformation)
- [GetSchemaAsJson](AwsClouddirectoryActions.md#getschemaasjson)
- [GetTypedLinkFacetInformation](AwsClouddirectoryActions.md#gettypedlinkfacetinformation)
- [ListAppliedSchemaArns](AwsClouddirectoryActions.md#listappliedschemaarns)
- [ListAttachedIndices](AwsClouddirectoryActions.md#listattachedindices)
- [ListDevelopmentSchemaArns](AwsClouddirectoryActions.md#listdevelopmentschemaarns)
- [ListDirectories](AwsClouddirectoryActions.md#listdirectories)
- [ListFacetAttributes](AwsClouddirectoryActions.md#listfacetattributes)
- [ListFacetNames](AwsClouddirectoryActions.md#listfacetnames)
- [ListIncomingTypedLinks](AwsClouddirectoryActions.md#listincomingtypedlinks)
- [ListIndex](AwsClouddirectoryActions.md#listindex)
- [ListManagedSchemaArns](AwsClouddirectoryActions.md#listmanagedschemaarns)
- [ListObjectAttributes](AwsClouddirectoryActions.md#listobjectattributes)
- [ListObjectChildren](AwsClouddirectoryActions.md#listobjectchildren)
- [ListObjectParentPaths](AwsClouddirectoryActions.md#listobjectparentpaths)
- [ListObjectParents](AwsClouddirectoryActions.md#listobjectparents)
- [ListObjectPolicies](AwsClouddirectoryActions.md#listobjectpolicies)
- [ListOutgoingTypedLinks](AwsClouddirectoryActions.md#listoutgoingtypedlinks)
- [ListPolicyAttachments](AwsClouddirectoryActions.md#listpolicyattachments)
- [ListPublishedSchemaArns](AwsClouddirectoryActions.md#listpublishedschemaarns)
- [ListTagsForResource](AwsClouddirectoryActions.md#listtagsforresource)
- [ListTypedLinkFacetAttributes](AwsClouddirectoryActions.md#listtypedlinkfacetattributes)
- [ListTypedLinkFacetNames](AwsClouddirectoryActions.md#listtypedlinkfacetnames)
- [LookupPolicy](AwsClouddirectoryActions.md#lookuppolicy)
- [PublishSchema](AwsClouddirectoryActions.md#publishschema)
- [PutSchemaFromJson](AwsClouddirectoryActions.md#putschemafromjson)
- [RemoveFacetFromObject](AwsClouddirectoryActions.md#removefacetfromobject)
- [TagResource](AwsClouddirectoryActions.md#tagresource)
- [UntagResource](AwsClouddirectoryActions.md#untagresource)
- [UpdateFacet](AwsClouddirectoryActions.md#updatefacet)
- [UpdateLinkAttributes](AwsClouddirectoryActions.md#updatelinkattributes)
- [UpdateObjectAttributes](AwsClouddirectoryActions.md#updateobjectattributes)
- [UpdateSchema](AwsClouddirectoryActions.md#updateschema)
- [UpdateTypedLinkFacet](AwsClouddirectoryActions.md#updatetypedlinkfacet)
- [UpgradeAppliedSchema](AwsClouddirectoryActions.md#upgradeappliedschema)
- [UpgradePublishedSchema](AwsClouddirectoryActions.md#upgradepublishedschema)

## Enumeration Members

### AddFacetToObject

• **AddFacetToObject** = ``"clouddirectory:AddFacetToObject"``

Grants permission to add a new Facet to an object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AddFacetToObject.html

#### Defined in

actions/clouddirectory.ts:17

___

### ApplySchema

• **ApplySchema** = ``"clouddirectory:ApplySchema"``

Grants permission to copy input published schema into Directory with same name
and version as that of published schema

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ApplySchema.html

#### Defined in

actions/clouddirectory.ts:24

___

### AttachObject

• **AttachObject** = ``"clouddirectory:AttachObject"``

Grants permission to attach an existing object to another existing object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachObject.html

#### Defined in

actions/clouddirectory.ts:30

___

### AttachPolicy

• **AttachPolicy** = ``"clouddirectory:AttachPolicy"``

Grants permission to attach a policy object to any other object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachPolicy.html

#### Defined in

actions/clouddirectory.ts:36

___

### AttachToIndex

• **AttachToIndex** = ``"clouddirectory:AttachToIndex"``

Grants permission to attach the specified object to the specified index

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachToIndex.html

#### Defined in

actions/clouddirectory.ts:42

___

### AttachTypedLink

• **AttachTypedLink** = ``"clouddirectory:AttachTypedLink"``

Grants permission to attach a typed link b/w a source & target object reference

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachTypedLink.html

#### Defined in

actions/clouddirectory.ts:48

___

### BatchRead

• **BatchRead** = ``"clouddirectory:BatchRead"``

Grants permission to perform all the read operations in a batch. Each individua
l operation inside BatchRead needs to be granted permissions explicitly

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchRead.html

#### Defined in

actions/clouddirectory.ts:55

___

### BatchWrite

• **BatchWrite** = ``"clouddirectory:BatchWrite"``

Grants permission to perform all the write operations in a batch. Each individu
al operation inside BatchWrite needs to be granted permissions explicitly

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchWrite.html

#### Defined in

actions/clouddirectory.ts:62

___

### CreateDirectory

• **CreateDirectory** = ``"clouddirectory:CreateDirectory"``

Grants permission to create a Directory by copying the published schema into th
e directory

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateDirectory.html

#### Defined in

actions/clouddirectory.ts:69

___

### CreateFacet

• **CreateFacet** = ``"clouddirectory:CreateFacet"``

Grants permission to create a new Facet in a schema

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateFacet.html

#### Defined in

actions/clouddirectory.ts:75

___

### CreateIndex

• **CreateIndex** = ``"clouddirectory:CreateIndex"``

Grants permission to create an index object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateIndex.html

#### Defined in

actions/clouddirectory.ts:81

___

### CreateObject

• **CreateObject** = ``"clouddirectory:CreateObject"``

Grants permission to create an object in a Directory

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateObject.html

#### Defined in

actions/clouddirectory.ts:87

___

### CreateSchema

• **CreateSchema** = ``"clouddirectory:CreateSchema"``

Grants permission to create a new schema in a development state

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateSchema.html

#### Defined in

actions/clouddirectory.ts:93

___

### CreateTypedLinkFacet

• **CreateTypedLinkFacet** = ``"clouddirectory:CreateTypedLinkFacet"``

Grants permission to create a new Typed Link facet in a schema

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateTypedLinkFacet.html

#### Defined in

actions/clouddirectory.ts:99

___

### DeleteDirectory

• **DeleteDirectory** = ``"clouddirectory:DeleteDirectory"``

Grants permission to delete a directory. Only disabled directories can be delet
ed

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteDirectory.html

#### Defined in

actions/clouddirectory.ts:106

___

### DeleteFacet

• **DeleteFacet** = ``"clouddirectory:DeleteFacet"``

Grants permission to delete a given Facet. All attributes and Rules associated
with the facet will be deleted

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteFacet.html

#### Defined in

actions/clouddirectory.ts:113

___

### DeleteObject

• **DeleteObject** = ``"clouddirectory:DeleteObject"``

Grants permission to delete an object and its associated attributes

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteObject.html

#### Defined in

actions/clouddirectory.ts:119

___

### DeleteSchema

• **DeleteSchema** = ``"clouddirectory:DeleteSchema"``

Grants permission to delete a given schema

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteSchema.html

#### Defined in

actions/clouddirectory.ts:125

___

### DeleteTypedLinkFacet

• **DeleteTypedLinkFacet** = ``"clouddirectory:DeleteTypedLinkFacet"``

Grants permission to delete a given TypedLink Facet. All attributes and Rules a
ssociated with the facet will be deleted

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteTypedLinkFacet.html

#### Defined in

actions/clouddirectory.ts:132

___

### DetachFromIndex

• **DetachFromIndex** = ``"clouddirectory:DetachFromIndex"``

Grants permission to detach the specified object from the specified index

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachFromIndex.html

#### Defined in

actions/clouddirectory.ts:138

___

### DetachObject

• **DetachObject** = ``"clouddirectory:DetachObject"``

Grants permission to detach a given object from the parent object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachObject.html

#### Defined in

actions/clouddirectory.ts:144

___

### DetachPolicy

• **DetachPolicy** = ``"clouddirectory:DetachPolicy"``

Grants permission to detach a policy from an object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachPolicy.html

#### Defined in

actions/clouddirectory.ts:150

___

### DetachTypedLink

• **DetachTypedLink** = ``"clouddirectory:DetachTypedLink"``

Grants permission to detach a given typed link b/w given source and target obje
ct reference

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachTypedLink.html

#### Defined in

actions/clouddirectory.ts:157

___

### DisableDirectory

• **DisableDirectory** = ``"clouddirectory:DisableDirectory"``

Grants permission to disable the specified directory

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DisableDirectory.html

#### Defined in

actions/clouddirectory.ts:163

___

### EnableDirectory

• **EnableDirectory** = ``"clouddirectory:EnableDirectory"``

Grants permission to enable the specified directory

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_EnableDirectory.html

#### Defined in

actions/clouddirectory.ts:169

___

### GetAppliedSchemaVersion

• **GetAppliedSchemaVersion** = ``"clouddirectory:GetAppliedSchemaVersion"``

Grants permission to return current applied schema version ARN, including the m
inor version in use

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetAppliedSchemaVersion.html

#### Defined in

actions/clouddirectory.ts:176

___

### GetDirectory

• **GetDirectory** = ``"clouddirectory:GetDirectory"``

Grants permission to retrieve metadata about a directory

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetDirectory.html

#### Defined in

actions/clouddirectory.ts:182

___

### GetFacet

• **GetFacet** = ``"clouddirectory:GetFacet"``

Grants permission to get details of the Facet, such as Facet Name, Attributes,
Rules, or ObjectType

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetFacet.html

#### Defined in

actions/clouddirectory.ts:189

___

### GetLinkAttributes

• **GetLinkAttributes** = ``"clouddirectory:GetLinkAttributes"``

Grants permission to retrieve attributes that are associated with a typed link

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetLinkAttributes.html

#### Defined in

actions/clouddirectory.ts:195

___

### GetObjectAttributes

• **GetObjectAttributes** = ``"clouddirectory:GetObjectAttributes"``

Grants permission to retrieve attributes within a facet that are associated wit
h an object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectAttributes.html

#### Defined in

actions/clouddirectory.ts:202

___

### GetObjectInformation

• **GetObjectInformation** = ``"clouddirectory:GetObjectInformation"``

Grants permission to retrieve metadata about an object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectInformation.html

#### Defined in

actions/clouddirectory.ts:208

___

### GetSchemaAsJson

• **GetSchemaAsJson** = ``"clouddirectory:GetSchemaAsJson"``

Grants permission to retrieve a JSON representation of the schema

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetSchemaAsJson.html

#### Defined in

actions/clouddirectory.ts:214

___

### GetTypedLinkFacetInformation

• **GetTypedLinkFacetInformation** = ``"clouddirectory:GetTypedLinkFacetInformation"``

Grants permission to return identity attributes order information associated wi
th a given typed link facet

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetTypedLinkFacetInformation.html

#### Defined in

actions/clouddirectory.ts:221

___

### ListAppliedSchemaArns

• **ListAppliedSchemaArns** = ``"clouddirectory:ListAppliedSchemaArns"``

Grants permission to list schemas applied to a directory

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAppliedSchemaArns.html

#### Defined in

actions/clouddirectory.ts:227

___

### ListAttachedIndices

• **ListAttachedIndices** = ``"clouddirectory:ListAttachedIndices"``

Grants permission to list indices attached to an object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAttachedIndices.html

#### Defined in

actions/clouddirectory.ts:233

___

### ListDevelopmentSchemaArns

• **ListDevelopmentSchemaArns** = ``"clouddirectory:ListDevelopmentSchemaArns"``

Grants permission to retrieve the ARNs of schemas in the development state

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDevelopmentSchemaArns.html

#### Defined in

actions/clouddirectory.ts:239

___

### ListDirectories

• **ListDirectories** = ``"clouddirectory:ListDirectories"``

Grants permission to list directories created within an account

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDirectories.html

#### Defined in

actions/clouddirectory.ts:245

___

### ListFacetAttributes

• **ListFacetAttributes** = ``"clouddirectory:ListFacetAttributes"``

Grants permission to retrieve attributes attached to the facet

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetAttributes.html

#### Defined in

actions/clouddirectory.ts:251

___

### ListFacetNames

• **ListFacetNames** = ``"clouddirectory:ListFacetNames"``

Grants permission to retrieve the names of facets that exist in a schema

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetNames.html

#### Defined in

actions/clouddirectory.ts:257

___

### ListIncomingTypedLinks

• **ListIncomingTypedLinks** = ``"clouddirectory:ListIncomingTypedLinks"``

Grants permission to return a paginated list of all incoming TypedLinks for a g
iven object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIncomingTypedLinks.html

#### Defined in

actions/clouddirectory.ts:264

___

### ListIndex

• **ListIndex** = ``"clouddirectory:ListIndex"``

Grants permission to list objects attached to the specified index

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIndex.html

#### Defined in

actions/clouddirectory.ts:270

___

### ListManagedSchemaArns

• **ListManagedSchemaArns** = ``"clouddirectory:ListManagedSchemaArns"``

Grants permission to list the major version families of each managed schema. If
a major version ARN is provided as SchemaArn, the minor version revisions in th
at family are listed instead

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListManagedSchemaArns.html

#### Defined in

actions/clouddirectory.ts:278

___

### ListObjectAttributes

• **ListObjectAttributes** = ``"clouddirectory:ListObjectAttributes"``

Grants permission to list all attributes associated with an object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectAttributes.html

#### Defined in

actions/clouddirectory.ts:284

___

### ListObjectChildren

• **ListObjectChildren** = ``"clouddirectory:ListObjectChildren"``

Grants permission to return a paginated list of child objects associated with a
given object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectChildren.html

#### Defined in

actions/clouddirectory.ts:291

___

### ListObjectParentPaths

• **ListObjectParentPaths** = ``"clouddirectory:ListObjectParentPaths"``

Grants permission to retrieve all available parent paths for any object type su
ch as node, leaf node, policy node, and index node objects

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParentPaths.html

#### Defined in

actions/clouddirectory.ts:298

___

### ListObjectParents

• **ListObjectParents** = ``"clouddirectory:ListObjectParents"``

Grants permission to list parent objects associated with a given object in pagi
nation fashion

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParents.html

#### Defined in

actions/clouddirectory.ts:305

___

### ListObjectPolicies

• **ListObjectPolicies** = ``"clouddirectory:ListObjectPolicies"``

Grants permission to return policies attached to an object in pagination fashio
n

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectPolicies.html

#### Defined in

actions/clouddirectory.ts:312

___

### ListOutgoingTypedLinks

• **ListOutgoingTypedLinks** = ``"clouddirectory:ListOutgoingTypedLinks"``

Grants permission to return a paginated list of all outgoing TypedLinks for a g
iven object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListOutgoingTypedLinks.html

#### Defined in

actions/clouddirectory.ts:319

___

### ListPolicyAttachments

• **ListPolicyAttachments** = ``"clouddirectory:ListPolicyAttachments"``

Grants permission to return all of the ObjectIdentifiers to which a given polic
y is attached

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPolicyAttachments.html

#### Defined in

actions/clouddirectory.ts:326

___

### ListPublishedSchemaArns

• **ListPublishedSchemaArns** = ``"clouddirectory:ListPublishedSchemaArns"``

Grants permission to retrieve published schema ARNs

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPublishedSchemaArns.html

#### Defined in

actions/clouddirectory.ts:332

___

### ListTagsForResource

• **ListTagsForResource** = ``"clouddirectory:ListTagsForResource"``

Grants permission to return tags for a resource

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/clouddirectory.ts:338

___

### ListTypedLinkFacetAttributes

• **ListTypedLinkFacetAttributes** = ``"clouddirectory:ListTypedLinkFacetAttributes"``

Grants permission to return a paginated list of attributes associated with type
d link facet

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetAttributes.html

#### Defined in

actions/clouddirectory.ts:345

___

### ListTypedLinkFacetNames

• **ListTypedLinkFacetNames** = ``"clouddirectory:ListTypedLinkFacetNames"``

Grants permission to return a paginated list of typed link facet names that exi
st in a schema

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetNames.html

#### Defined in

actions/clouddirectory.ts:352

___

### LookupPolicy

• **LookupPolicy** = ``"clouddirectory:LookupPolicy"``

Grants permission to list all policies from the root of the Directory to the ob
ject specified

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_LookupPolicy.html

#### Defined in

actions/clouddirectory.ts:359

___

### PublishSchema

• **PublishSchema** = ``"clouddirectory:PublishSchema"``

Grants permission to publish a development schema with a version

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PublishSchema.html

#### Defined in

actions/clouddirectory.ts:365

___

### PutSchemaFromJson

• **PutSchemaFromJson** = ``"clouddirectory:PutSchemaFromJson"``

Grants permission to update a schema using JSON upload. Only available for deve
lopment schemas

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PutSchemaFromJson.html

#### Defined in

actions/clouddirectory.ts:372

___

### RemoveFacetFromObject

• **RemoveFacetFromObject** = ``"clouddirectory:RemoveFacetFromObject"``

Grants permission to remove the specified facet from the specified object

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_RemoveFacetFromObject.html

#### Defined in

actions/clouddirectory.ts:378

___

### TagResource

• **TagResource** = ``"clouddirectory:TagResource"``

Grants permission to add tags to a resource

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_TagResource.html

#### Defined in

actions/clouddirectory.ts:384

___

### UntagResource

• **UntagResource** = ``"clouddirectory:UntagResource"``

Grants permission to remove tags from a resource

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UntagResource.html

#### Defined in

actions/clouddirectory.ts:390

___

### UpdateFacet

• **UpdateFacet** = ``"clouddirectory:UpdateFacet"``

Grants permission to add/update/delete existing Attributes, Rules, or ObjectTyp
e of a Facet

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateFacet.html

#### Defined in

actions/clouddirectory.ts:397

___

### UpdateLinkAttributes

• **UpdateLinkAttributes** = ``"clouddirectory:UpdateLinkAttributes"``

Grants permission to update a given typed link’s attributes. Attributes to be u
pdated must not contribute to the typed link’s identity, as defined by its Iden
tityAttributeOrder

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateLinkAttributes.html

#### Defined in

actions/clouddirectory.ts:405

___

### UpdateObjectAttributes

• **UpdateObjectAttributes** = ``"clouddirectory:UpdateObjectAttributes"``

Grants permission to update a given object's attributes

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateObjectAttributes.html

#### Defined in

actions/clouddirectory.ts:411

___

### UpdateSchema

• **UpdateSchema** = ``"clouddirectory:UpdateSchema"``

Grants permission to update the schema name with a new name

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateSchema.html

#### Defined in

actions/clouddirectory.ts:417

___

### UpdateTypedLinkFacet

• **UpdateTypedLinkFacet** = ``"clouddirectory:UpdateTypedLinkFacet"``

Grants permission to add/update/delete existing Attributes, Rules, identity att
ribute order of a TypedLink Facet

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateTypedLinkFacet.html

#### Defined in

actions/clouddirectory.ts:424

___

### UpgradeAppliedSchema

• **UpgradeAppliedSchema** = ``"clouddirectory:UpgradeAppliedSchema"``

Grants permission to upgrade a single directory in-place using the PublishedSch
emaArn with schema updates found in MinorVersion. Backwards-compatible minor ve
rsion upgrades are instantaneously available for readers on all objects in the
directory

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpgradeAppliedSchema.html

#### Defined in

actions/clouddirectory.ts:433

___

### UpgradePublishedSchema

• **UpgradePublishedSchema** = ``"clouddirectory:UpgradePublishedSchema"``

Grants permission to upgrade a published schema under a new minor version revis
ion using the current contents of DevelopmentSchemaArn

See https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpgradePublishedSchema.html

#### Defined in

actions/clouddirectory.ts:440
