[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsWorkspacesActions

# Enumeration: AwsWorkspacesActions

All IAM policy actions for Amazon WorkSpaces (WORKSPACES)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspaces.html

2024-02-12T09:59:42.532Z

## Table of contents

### Enumeration Members

- [AssociateConnectionAlias](AwsWorkspacesActions.md#associateconnectionalias)
- [AssociateIpGroups](AwsWorkspacesActions.md#associateipgroups)
- [AssociateWorkspaceApplication](AwsWorkspacesActions.md#associateworkspaceapplication)
- [AuthorizeIpRules](AwsWorkspacesActions.md#authorizeiprules)
- [CopyWorkspaceImage](AwsWorkspacesActions.md#copyworkspaceimage)
- [CreateConnectClientAddIn](AwsWorkspacesActions.md#createconnectclientaddin)
- [CreateConnectionAlias](AwsWorkspacesActions.md#createconnectionalias)
- [CreateIpGroup](AwsWorkspacesActions.md#createipgroup)
- [CreateStandbyWorkspaces](AwsWorkspacesActions.md#createstandbyworkspaces)
- [CreateTags](AwsWorkspacesActions.md#createtags)
- [CreateUpdatedWorkspaceImage](AwsWorkspacesActions.md#createupdatedworkspaceimage)
- [CreateWorkspaceBundle](AwsWorkspacesActions.md#createworkspacebundle)
- [CreateWorkspaceImage](AwsWorkspacesActions.md#createworkspaceimage)
- [CreateWorkspaces](AwsWorkspacesActions.md#createworkspaces)
- [DeleteClientBranding](AwsWorkspacesActions.md#deleteclientbranding)
- [DeleteConnectClientAddIn](AwsWorkspacesActions.md#deleteconnectclientaddin)
- [DeleteConnectionAlias](AwsWorkspacesActions.md#deleteconnectionalias)
- [DeleteIpGroup](AwsWorkspacesActions.md#deleteipgroup)
- [DeleteTags](AwsWorkspacesActions.md#deletetags)
- [DeleteWorkspaceBundle](AwsWorkspacesActions.md#deleteworkspacebundle)
- [DeleteWorkspaceImage](AwsWorkspacesActions.md#deleteworkspaceimage)
- [DeployWorkspaceApplications](AwsWorkspacesActions.md#deployworkspaceapplications)
- [DeregisterWorkspaceDirectory](AwsWorkspacesActions.md#deregisterworkspacedirectory)
- [DescribeAccount](AwsWorkspacesActions.md#describeaccount)
- [DescribeAccountModifications](AwsWorkspacesActions.md#describeaccountmodifications)
- [DescribeApplicationAssociations](AwsWorkspacesActions.md#describeapplicationassociations)
- [DescribeApplications](AwsWorkspacesActions.md#describeapplications)
- [DescribeBundleAssociations](AwsWorkspacesActions.md#describebundleassociations)
- [DescribeClientBranding](AwsWorkspacesActions.md#describeclientbranding)
- [DescribeClientProperties](AwsWorkspacesActions.md#describeclientproperties)
- [DescribeConnectClientAddIns](AwsWorkspacesActions.md#describeconnectclientaddins)
- [DescribeConnectionAliasPermissions](AwsWorkspacesActions.md#describeconnectionaliaspermissions)
- [DescribeConnectionAliases](AwsWorkspacesActions.md#describeconnectionaliases)
- [DescribeImageAssociations](AwsWorkspacesActions.md#describeimageassociations)
- [DescribeIpGroups](AwsWorkspacesActions.md#describeipgroups)
- [DescribeTags](AwsWorkspacesActions.md#describetags)
- [DescribeWorkspaceAssociations](AwsWorkspacesActions.md#describeworkspaceassociations)
- [DescribeWorkspaceBundles](AwsWorkspacesActions.md#describeworkspacebundles)
- [DescribeWorkspaceDirectories](AwsWorkspacesActions.md#describeworkspacedirectories)
- [DescribeWorkspaceImagePermissions](AwsWorkspacesActions.md#describeworkspaceimagepermissions)
- [DescribeWorkspaceImages](AwsWorkspacesActions.md#describeworkspaceimages)
- [DescribeWorkspaceSnapshots](AwsWorkspacesActions.md#describeworkspacesnapshots)
- [DescribeWorkspaces](AwsWorkspacesActions.md#describeworkspaces)
- [DescribeWorkspacesConnectionStatus](AwsWorkspacesActions.md#describeworkspacesconnectionstatus)
- [DisassociateConnectionAlias](AwsWorkspacesActions.md#disassociateconnectionalias)
- [DisassociateIpGroups](AwsWorkspacesActions.md#disassociateipgroups)
- [DisassociateWorkspaceApplication](AwsWorkspacesActions.md#disassociateworkspaceapplication)
- [ImportClientBranding](AwsWorkspacesActions.md#importclientbranding)
- [ImportWorkspaceImage](AwsWorkspacesActions.md#importworkspaceimage)
- [ListAvailableManagementCidrRanges](AwsWorkspacesActions.md#listavailablemanagementcidrranges)
- [MigrateWorkspace](AwsWorkspacesActions.md#migrateworkspace)
- [ModifyAccount](AwsWorkspacesActions.md#modifyaccount)
- [ModifyCertificateBasedAuthProperties](AwsWorkspacesActions.md#modifycertificatebasedauthproperties)
- [ModifyClientProperties](AwsWorkspacesActions.md#modifyclientproperties)
- [ModifySamlProperties](AwsWorkspacesActions.md#modifysamlproperties)
- [ModifySelfservicePermissions](AwsWorkspacesActions.md#modifyselfservicepermissions)
- [ModifyWorkspaceAccessProperties](AwsWorkspacesActions.md#modifyworkspaceaccessproperties)
- [ModifyWorkspaceCreationProperties](AwsWorkspacesActions.md#modifyworkspacecreationproperties)
- [ModifyWorkspaceProperties](AwsWorkspacesActions.md#modifyworkspaceproperties)
- [ModifyWorkspaceState](AwsWorkspacesActions.md#modifyworkspacestate)
- [RebootWorkspaces](AwsWorkspacesActions.md#rebootworkspaces)
- [RebuildWorkspaces](AwsWorkspacesActions.md#rebuildworkspaces)
- [RegisterWorkspaceDirectory](AwsWorkspacesActions.md#registerworkspacedirectory)
- [RestoreWorkspace](AwsWorkspacesActions.md#restoreworkspace)
- [RevokeIpRules](AwsWorkspacesActions.md#revokeiprules)
- [StartWorkspaces](AwsWorkspacesActions.md#startworkspaces)
- [StopWorkspaces](AwsWorkspacesActions.md#stopworkspaces)
- [Stream](AwsWorkspacesActions.md#stream)
- [TerminateWorkspaces](AwsWorkspacesActions.md#terminateworkspaces)
- [UpdateConnectClientAddIn](AwsWorkspacesActions.md#updateconnectclientaddin)
- [UpdateConnectionAliasPermission](AwsWorkspacesActions.md#updateconnectionaliaspermission)
- [UpdateRulesOfIpGroup](AwsWorkspacesActions.md#updaterulesofipgroup)
- [UpdateWorkspaceBundle](AwsWorkspacesActions.md#updateworkspacebundle)
- [UpdateWorkspaceImagePermission](AwsWorkspacesActions.md#updateworkspaceimagepermission)

## Enumeration Members

### AssociateConnectionAlias

• **AssociateConnectionAlias** = ``"workspaces:AssociateConnectionAlias"``

Grants permission to associate connection aliases with directories

See https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateConnectionAlias.html

#### Defined in

actions/workspaces.ts:17

___

### AssociateIpGroups

• **AssociateIpGroups** = ``"workspaces:AssociateIpGroups"``

Grants permission to associate IP access control groups with directories

See https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateIpGroups.html

#### Defined in

actions/workspaces.ts:23

___

### AssociateWorkspaceApplication

• **AssociateWorkspaceApplication** = ``"workspaces:AssociateWorkspaceApplication"``

Grants permission to associate a workspace application with a WorkSpace

See https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateWorkspaceApplication.html

#### Defined in

actions/workspaces.ts:29

___

### AuthorizeIpRules

• **AuthorizeIpRules** = ``"workspaces:AuthorizeIpRules"``

Grants permission to add rules to IP access control groups

See https://docs.aws.amazon.com/workspaces/latest/api/API_AuthorizeIpRules.html

#### Defined in

actions/workspaces.ts:35

___

### CopyWorkspaceImage

• **CopyWorkspaceImage** = ``"workspaces:CopyWorkspaceImage"``

Grants permission to copy a WorkSpace image

See https://docs.aws.amazon.com/workspaces/latest/api/API_CopyWorkspaceImage.html

#### Defined in

actions/workspaces.ts:41

___

### CreateConnectClientAddIn

• **CreateConnectClientAddIn** = ``"workspaces:CreateConnectClientAddIn"``

Grants permission to create an Amazon Connect client add-in within a directory

See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateConnectClientAddIn.html

#### Defined in

actions/workspaces.ts:47

___

### CreateConnectionAlias

• **CreateConnectionAlias** = ``"workspaces:CreateConnectionAlias"``

Grants permission to create connection aliases for use with cross-Region redire
ction

See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateConnectionAlias.html

#### Defined in

actions/workspaces.ts:54

___

### CreateIpGroup

• **CreateIpGroup** = ``"workspaces:CreateIpGroup"``

Grants permission to create IP access control groups

See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateIpGroup.html

#### Defined in

actions/workspaces.ts:60

___

### CreateStandbyWorkspaces

• **CreateStandbyWorkspaces** = ``"workspaces:CreateStandbyWorkspaces"``

Grants permission to create one or more Standby WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateStandbyWorkspaces.html

#### Defined in

actions/workspaces.ts:66

___

### CreateTags

• **CreateTags** = ``"workspaces:CreateTags"``

Grants permission to create tags for WorkSpaces resources

See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateTags.html

#### Defined in

actions/workspaces.ts:72

___

### CreateUpdatedWorkspaceImage

• **CreateUpdatedWorkspaceImage** = ``"workspaces:CreateUpdatedWorkspaceImage"``

Grants permission to create an updated WorkSpace image

See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateUpdatedWorkspaceImage.html

#### Defined in

actions/workspaces.ts:78

___

### CreateWorkspaceBundle

• **CreateWorkspaceBundle** = ``"workspaces:CreateWorkspaceBundle"``

Grants permission to create a WorkSpace bundle

See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaceBundle.html

#### Defined in

actions/workspaces.ts:84

___

### CreateWorkspaceImage

• **CreateWorkspaceImage** = ``"workspaces:CreateWorkspaceImage"``

Grants permission to create a new WorkSpace image

See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaceImage.html

#### Defined in

actions/workspaces.ts:90

___

### CreateWorkspaces

• **CreateWorkspaces** = ``"workspaces:CreateWorkspaces"``

Grants permission to create one or more WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaces.html

#### Defined in

actions/workspaces.ts:96

___

### DeleteClientBranding

• **DeleteClientBranding** = ``"workspaces:DeleteClientBranding"``

Grants permission to delete AWS WorkSpaces Client branding data within a direct
ory

See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteClientBranding.html

#### Defined in

actions/workspaces.ts:103

___

### DeleteConnectClientAddIn

• **DeleteConnectClientAddIn** = ``"workspaces:DeleteConnectClientAddIn"``

Grants permission to delete an Amazon Connect client add-in that is configured
within a directory

See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteConnectClientAddIn.html

#### Defined in

actions/workspaces.ts:110

___

### DeleteConnectionAlias

• **DeleteConnectionAlias** = ``"workspaces:DeleteConnectionAlias"``

Grants permission to delete connection aliases

See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteConnectionAlias.html

#### Defined in

actions/workspaces.ts:116

___

### DeleteIpGroup

• **DeleteIpGroup** = ``"workspaces:DeleteIpGroup"``

Grants permission to delete IP access control groups

See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteIpGroup.html

#### Defined in

actions/workspaces.ts:122

___

### DeleteTags

• **DeleteTags** = ``"workspaces:DeleteTags"``

Grants permission to delete tags from WorkSpaces resources

See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteTags.html

#### Defined in

actions/workspaces.ts:128

___

### DeleteWorkspaceBundle

• **DeleteWorkspaceBundle** = ``"workspaces:DeleteWorkspaceBundle"``

Grants permission to delete WorkSpace bundles

See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceBundle.html

#### Defined in

actions/workspaces.ts:134

___

### DeleteWorkspaceImage

• **DeleteWorkspaceImage** = ``"workspaces:DeleteWorkspaceImage"``

Grants permission to delete WorkSpace images

See https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceImage.html

#### Defined in

actions/workspaces.ts:140

___

### DeployWorkspaceApplications

• **DeployWorkspaceApplications** = ``"workspaces:DeployWorkspaceApplications"``

Grants permission to deploy all pending workspace applications on a WorkSpace

See https://docs.aws.amazon.com/workspaces/latest/api/API_DeployWorkspaceApplications.html

#### Defined in

actions/workspaces.ts:146

___

### DeregisterWorkspaceDirectory

• **DeregisterWorkspaceDirectory** = ``"workspaces:DeregisterWorkspaceDirectory"``

Grants permission to deregister directories from use with Amazon WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_DeregisterWorkspaceDirectory.html

#### Defined in

actions/workspaces.ts:152

___

### DescribeAccount

• **DescribeAccount** = ``"workspaces:DescribeAccount"``

Grants permission to retrieve the configuration of Bring Your Own License (BYOL
) for WorkSpaces accounts

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccount.html

#### Defined in

actions/workspaces.ts:159

___

### DescribeAccountModifications

• **DescribeAccountModifications** = ``"workspaces:DescribeAccountModifications"``

Grants permission to retrieve modifications to the configuration of Bring Your
Own License (BYOL) for WorkSpaces accounts

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccountModifications.html

#### Defined in

actions/workspaces.ts:166

___

### DescribeApplicationAssociations

• **DescribeApplicationAssociations** = ``"workspaces:DescribeApplicationAssociations"``

Grants permission to retrieve information about resources associated with a Wor
kSpace application

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeApplicationAssociations.html

#### Defined in

actions/workspaces.ts:173

___

### DescribeApplications

• **DescribeApplications** = ``"workspaces:DescribeApplications"``

Grants permission to obtain information about WorkSpace applications

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeApplications.html

#### Defined in

actions/workspaces.ts:179

___

### DescribeBundleAssociations

• **DescribeBundleAssociations** = ``"workspaces:DescribeBundleAssociations"``

Grants permission to retrieve information about resources associated with a Wor
kSpace bundle

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeBundleAssociations.html

#### Defined in

actions/workspaces.ts:186

___

### DescribeClientBranding

• **DescribeClientBranding** = ``"workspaces:DescribeClientBranding"``

Grants permission to retrieve AWS WorkSpaces Client branding data within a dire
ctory

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientBranding.html

#### Defined in

actions/workspaces.ts:193

___

### DescribeClientProperties

• **DescribeClientProperties** = ``"workspaces:DescribeClientProperties"``

Grants permission to retrieve information about WorkSpaces clients

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientProperties.html

#### Defined in

actions/workspaces.ts:199

___

### DescribeConnectClientAddIns

• **DescribeConnectClientAddIns** = ``"workspaces:DescribeConnectClientAddIns"``

Grants permission to retrieve a list of Amazon Connect client add-ins that have
been created

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectClientAddIns.html

#### Defined in

actions/workspaces.ts:206

___

### DescribeConnectionAliasPermissions

• **DescribeConnectionAliasPermissions** = ``"workspaces:DescribeConnectionAliasPermissions"``

Grants permission to retrieve the permissions that the owners of connection ali
ases have granted to other AWS accounts for connection aliases

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliasPermissions.html

#### Defined in

actions/workspaces.ts:213

___

### DescribeConnectionAliases

• **DescribeConnectionAliases** = ``"workspaces:DescribeConnectionAliases"``

Grants permission to retrieve a list that describes the connection aliases used
for cross-Region redirection

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html

#### Defined in

actions/workspaces.ts:220

___

### DescribeImageAssociations

• **DescribeImageAssociations** = ``"workspaces:DescribeImageAssociations"``

Grants permission to retrieve information about resources associated with a Wor
kSpace image

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeImageAssociations.html

#### Defined in

actions/workspaces.ts:227

___

### DescribeIpGroups

• **DescribeIpGroups** = ``"workspaces:DescribeIpGroups"``

Grants permission to retrieve information about IP access control groups

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeIpGroups.html

#### Defined in

actions/workspaces.ts:233

___

### DescribeTags

• **DescribeTags** = ``"workspaces:DescribeTags"``

Grants permission to describe the tags for WorkSpaces resources

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeTags.html

#### Defined in

actions/workspaces.ts:239

___

### DescribeWorkspaceAssociations

• **DescribeWorkspaceAssociations** = ``"workspaces:DescribeWorkspaceAssociations"``

Grants permission to retrieve information about resources associated with a Wor
kSpace

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceAssociations.html

#### Defined in

actions/workspaces.ts:246

___

### DescribeWorkspaceBundles

• **DescribeWorkspaceBundles** = ``"workspaces:DescribeWorkspaceBundles"``

Grants permission to obtain information about WorkSpace bundles

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceBundles.html

#### Defined in

actions/workspaces.ts:252

___

### DescribeWorkspaceDirectories

• **DescribeWorkspaceDirectories** = ``"workspaces:DescribeWorkspaceDirectories"``

Grants permission to retrieve information about directories that are registered
with WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html

#### Defined in

actions/workspaces.ts:259

___

### DescribeWorkspaceImagePermissions

• **DescribeWorkspaceImagePermissions** = ``"workspaces:DescribeWorkspaceImagePermissions"``

Grants permission to retrieve information about WorkSpace image permissions

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html

#### Defined in

actions/workspaces.ts:265

___

### DescribeWorkspaceImages

• **DescribeWorkspaceImages** = ``"workspaces:DescribeWorkspaceImages"``

Grants permission to retrieve information about WorkSpace images

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html

#### Defined in

actions/workspaces.ts:271

___

### DescribeWorkspaceSnapshots

• **DescribeWorkspaceSnapshots** = ``"workspaces:DescribeWorkspaceSnapshots"``

Grants permission to retrieve information about WorkSpace snapshots

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceSnapshots.html

#### Defined in

actions/workspaces.ts:277

___

### DescribeWorkspaces

• **DescribeWorkspaces** = ``"workspaces:DescribeWorkspaces"``

Grants permission to obtain information about WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html

#### Defined in

actions/workspaces.ts:283

___

### DescribeWorkspacesConnectionStatus

• **DescribeWorkspacesConnectionStatus** = ``"workspaces:DescribeWorkspacesConnectionStatus"``

Grants permission to obtain the connection status of WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspacesConnectionStatus.html

#### Defined in

actions/workspaces.ts:289

___

### DisassociateConnectionAlias

• **DisassociateConnectionAlias** = ``"workspaces:DisassociateConnectionAlias"``

Grants permission to disassociate connection aliases from directories

See https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateConnectionAlias.html

#### Defined in

actions/workspaces.ts:295

___

### DisassociateIpGroups

• **DisassociateIpGroups** = ``"workspaces:DisassociateIpGroups"``

Grants permission to disassociate IP access control groups from directories

See https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateIpGroups.html

#### Defined in

actions/workspaces.ts:301

___

### DisassociateWorkspaceApplication

• **DisassociateWorkspaceApplication** = ``"workspaces:DisassociateWorkspaceApplication"``

Grants permission to disassociate a workspace application from a WorkSpace

See https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateWorkspaceApplication.html

#### Defined in

actions/workspaces.ts:307

___

### ImportClientBranding

• **ImportClientBranding** = ``"workspaces:ImportClientBranding"``

Grants permission to import AWS WorkSpaces Client branding data within a direct
ory

See https://docs.aws.amazon.com/workspaces/latest/api/API_ImportClientBranding.html

#### Defined in

actions/workspaces.ts:314

___

### ImportWorkspaceImage

• **ImportWorkspaceImage** = ``"workspaces:ImportWorkspaceImage"``

Grants permission to import Bring Your Own License (BYOL) images into Amazon Wo
rkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_ImportWorkspaceImage.html

#### Defined in

actions/workspaces.ts:321

___

### ListAvailableManagementCidrRanges

• **ListAvailableManagementCidrRanges** = ``"workspaces:ListAvailableManagementCidrRanges"``

Grants permission to list the available CIDR ranges for enabling Bring Your Own
License (BYOL) for WorkSpaces accounts

See https://docs.aws.amazon.com/workspaces/latest/api/API_ListAvailableManagementCidrRanges.html

#### Defined in

actions/workspaces.ts:328

___

### MigrateWorkspace

• **MigrateWorkspace** = ``"workspaces:MigrateWorkspace"``

Grants permission to migrate WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_MigrateWorkspace.html

#### Defined in

actions/workspaces.ts:334

___

### ModifyAccount

• **ModifyAccount** = ``"workspaces:ModifyAccount"``

Grants permission to modify the configuration of Bring Your Own License (BYOL)
for WorkSpaces accounts

See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyAccount.html

#### Defined in

actions/workspaces.ts:341

___

### ModifyCertificateBasedAuthProperties

• **ModifyCertificateBasedAuthProperties** = ``"workspaces:ModifyCertificateBasedAuthProperties"``

Grants permission to modify the certificate-based authorization properties of a
directory

See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyCertificateBasedAuthProperties.html

#### Defined in

actions/workspaces.ts:348

___

### ModifyClientProperties

• **ModifyClientProperties** = ``"workspaces:ModifyClientProperties"``

Grants permission to modify the properties of WorkSpaces clients

See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyClientProperties.html

#### Defined in

actions/workspaces.ts:354

___

### ModifySamlProperties

• **ModifySamlProperties** = ``"workspaces:ModifySamlProperties"``

Grants permission to modify the SAML properties of a directory

See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifySamlProperties.html

#### Defined in

actions/workspaces.ts:360

___

### ModifySelfservicePermissions

• **ModifySelfservicePermissions** = ``"workspaces:ModifySelfservicePermissions"``

Grants permission to modify the self-service WorkSpace management capabilities
for your users

See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifySelfservicePermissions.html

#### Defined in

actions/workspaces.ts:367

___

### ModifyWorkspaceAccessProperties

• **ModifyWorkspaceAccessProperties** = ``"workspaces:ModifyWorkspaceAccessProperties"``

Grants permission to specify which devices and operating systems users can use
to access their WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceAccessProperties.html

#### Defined in

actions/workspaces.ts:374

___

### ModifyWorkspaceCreationProperties

• **ModifyWorkspaceCreationProperties** = ``"workspaces:ModifyWorkspaceCreationProperties"``

Grants permission to modify the default properties used to create WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceCreationProperties.html

#### Defined in

actions/workspaces.ts:380

___

### ModifyWorkspaceProperties

• **ModifyWorkspaceProperties** = ``"workspaces:ModifyWorkspaceProperties"``

Grants permission to modify WorkSpace properties, including the running mode an
d the AutoStop period

See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceProperties.html

#### Defined in

actions/workspaces.ts:387

___

### ModifyWorkspaceState

• **ModifyWorkspaceState** = ``"workspaces:ModifyWorkspaceState"``

Grants permission to modify the state of WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceState.html

#### Defined in

actions/workspaces.ts:393

___

### RebootWorkspaces

• **RebootWorkspaces** = ``"workspaces:RebootWorkspaces"``

Grants permission to reboot WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_RebootWorkspaces.html

#### Defined in

actions/workspaces.ts:399

___

### RebuildWorkspaces

• **RebuildWorkspaces** = ``"workspaces:RebuildWorkspaces"``

Grants permission to rebuild WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_RebuildWorkspaces.html

#### Defined in

actions/workspaces.ts:405

___

### RegisterWorkspaceDirectory

• **RegisterWorkspaceDirectory** = ``"workspaces:RegisterWorkspaceDirectory"``

Grants permission to register directories for use with Amazon WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_RegisterWorkspaceDirectory.html

#### Defined in

actions/workspaces.ts:411

___

### RestoreWorkspace

• **RestoreWorkspace** = ``"workspaces:RestoreWorkspace"``

Grants permission to restore WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_RestoreWorkspace.html

#### Defined in

actions/workspaces.ts:417

___

### RevokeIpRules

• **RevokeIpRules** = ``"workspaces:RevokeIpRules"``

Grants permission to remove rules from IP access control groups

See https://docs.aws.amazon.com/workspaces/latest/api/API_RevokeIpRules.html

#### Defined in

actions/workspaces.ts:423

___

### StartWorkspaces

• **StartWorkspaces** = ``"workspaces:StartWorkspaces"``

Grants permission to start AutoStop WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_StartWorkspaces.html

#### Defined in

actions/workspaces.ts:429

___

### StopWorkspaces

• **StopWorkspaces** = ``"workspaces:StopWorkspaces"``

Grants permission to stop AutoStop WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_StopWorkspaces.html

#### Defined in

actions/workspaces.ts:435

___

### Stream

• **Stream** = ``"workspaces:Stream"``

Grants permission to federated users to sign in by using their existing credent
ials and stream their workspace

See https://docs.aws.amazon.com/workspaces/latest/api/API_Stream.html

#### Defined in

actions/workspaces.ts:442

___

### TerminateWorkspaces

• **TerminateWorkspaces** = ``"workspaces:TerminateWorkspaces"``

Grants permission to terminate WorkSpaces

See https://docs.aws.amazon.com/workspaces/latest/api/API_TerminateWorkspaces.html

#### Defined in

actions/workspaces.ts:448

___

### UpdateConnectClientAddIn

• **UpdateConnectClientAddIn** = ``"workspaces:UpdateConnectClientAddIn"``

Grants permission to update an Amazon Connect client add-in. Use this action to
update the name and endpoint URL of an Amazon Connect client add-in

See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateConnectClientAddIn.html

#### Defined in

actions/workspaces.ts:455

___

### UpdateConnectionAliasPermission

• **UpdateConnectionAliasPermission** = ``"workspaces:UpdateConnectionAliasPermission"``

Grants permission to share or unshare connection aliases with other accounts

See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateConnectionAliasPermission.html

#### Defined in

actions/workspaces.ts:461

___

### UpdateRulesOfIpGroup

• **UpdateRulesOfIpGroup** = ``"workspaces:UpdateRulesOfIpGroup"``

Grants permission to replace rules for IP access control groups

See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateRulesOfIpGroup.html

#### Defined in

actions/workspaces.ts:467

___

### UpdateWorkspaceBundle

• **UpdateWorkspaceBundle** = ``"workspaces:UpdateWorkspaceBundle"``

Grants permission to update the WorkSpace images used in WorkSpace bundles

See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateWorkspaceBundle.html

#### Defined in

actions/workspaces.ts:473

___

### UpdateWorkspaceImagePermission

• **UpdateWorkspaceImagePermission** = ``"workspaces:UpdateWorkspaceImagePermission"``

Grants permission to share or unshare WorkSpace images with other accounts by s
pecifying whether other accounts have permission to copy the image

See https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateWorkspaceImagePermission.html

#### Defined in

actions/workspaces.ts:480
