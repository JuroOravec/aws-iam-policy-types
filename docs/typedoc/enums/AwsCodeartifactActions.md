[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodeartifactActions

# Enumeration: AwsCodeartifactActions

All IAM policy actions for AWS CodeArtifact (CODEARTIFACT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodeartifact.html

2024-02-12T09:56:32.156Z

## Table of contents

### Enumeration Members

- [AssociateExternalConnection](AwsCodeartifactActions.md#associateexternalconnection)
- [AssociateWithDownstreamRepository](AwsCodeartifactActions.md#associatewithdownstreamrepository)
- [CopyPackageVersions](AwsCodeartifactActions.md#copypackageversions)
- [CreateDomain](AwsCodeartifactActions.md#createdomain)
- [CreateRepository](AwsCodeartifactActions.md#createrepository)
- [DeleteDomain](AwsCodeartifactActions.md#deletedomain)
- [DeleteDomainPermissionsPolicy](AwsCodeartifactActions.md#deletedomainpermissionspolicy)
- [DeletePackage](AwsCodeartifactActions.md#deletepackage)
- [DeletePackageVersions](AwsCodeartifactActions.md#deletepackageversions)
- [DeleteRepository](AwsCodeartifactActions.md#deleterepository)
- [DeleteRepositoryPermissionsPolicy](AwsCodeartifactActions.md#deleterepositorypermissionspolicy)
- [DescribeDomain](AwsCodeartifactActions.md#describedomain)
- [DescribePackage](AwsCodeartifactActions.md#describepackage)
- [DescribePackageVersion](AwsCodeartifactActions.md#describepackageversion)
- [DescribeRepository](AwsCodeartifactActions.md#describerepository)
- [DisassociateExternalConnection](AwsCodeartifactActions.md#disassociateexternalconnection)
- [DisposePackageVersions](AwsCodeartifactActions.md#disposepackageversions)
- [GetAuthorizationToken](AwsCodeartifactActions.md#getauthorizationtoken)
- [GetDomainPermissionsPolicy](AwsCodeartifactActions.md#getdomainpermissionspolicy)
- [GetPackageVersionAsset](AwsCodeartifactActions.md#getpackageversionasset)
- [GetPackageVersionReadme](AwsCodeartifactActions.md#getpackageversionreadme)
- [GetRepositoryEndpoint](AwsCodeartifactActions.md#getrepositoryendpoint)
- [GetRepositoryPermissionsPolicy](AwsCodeartifactActions.md#getrepositorypermissionspolicy)
- [ListDomains](AwsCodeartifactActions.md#listdomains)
- [ListPackageVersionAssets](AwsCodeartifactActions.md#listpackageversionassets)
- [ListPackageVersionDependencies](AwsCodeartifactActions.md#listpackageversiondependencies)
- [ListPackageVersions](AwsCodeartifactActions.md#listpackageversions)
- [ListPackages](AwsCodeartifactActions.md#listpackages)
- [ListRepositories](AwsCodeartifactActions.md#listrepositories)
- [ListRepositoriesInDomain](AwsCodeartifactActions.md#listrepositoriesindomain)
- [ListTagsForResource](AwsCodeartifactActions.md#listtagsforresource)
- [PublishPackageVersion](AwsCodeartifactActions.md#publishpackageversion)
- [PutDomainPermissionsPolicy](AwsCodeartifactActions.md#putdomainpermissionspolicy)
- [PutPackageMetadata](AwsCodeartifactActions.md#putpackagemetadata)
- [PutPackageOriginConfiguration](AwsCodeartifactActions.md#putpackageoriginconfiguration)
- [PutRepositoryPermissionsPolicy](AwsCodeartifactActions.md#putrepositorypermissionspolicy)
- [ReadFromRepository](AwsCodeartifactActions.md#readfromrepository)
- [TagResource](AwsCodeartifactActions.md#tagresource)
- [UntagResource](AwsCodeartifactActions.md#untagresource)
- [UpdatePackageVersionsStatus](AwsCodeartifactActions.md#updatepackageversionsstatus)
- [UpdateRepository](AwsCodeartifactActions.md#updaterepository)

## Enumeration Members

### AssociateExternalConnection

• **AssociateExternalConnection** = ``"codeartifact:AssociateExternalConnection"``

Grants permission to add an external connection to a repository

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssociateExternalConnection.html

#### Defined in

actions/codeartifact.ts:17

___

### AssociateWithDownstreamRepository

• **AssociateWithDownstreamRepository** = ``"codeartifact:AssociateWithDownstreamRepository"``

Grants permission to associate an existing repository as an upstream repository
to another repository

See https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html

#### Defined in

actions/codeartifact.ts:24

___

### CopyPackageVersions

• **CopyPackageVersions** = ``"codeartifact:CopyPackageVersions"``

Grants permission to copy package versions from one repository to another repos
itory in the same domain

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CopyPackageVersions.html

#### Defined in

actions/codeartifact.ts:31

___

### CreateDomain

• **CreateDomain** = ``"codeartifact:CreateDomain"``

Grants permission to create a new domain

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateDomain.html

#### Defined in

actions/codeartifact.ts:37

___

### CreateRepository

• **CreateRepository** = ``"codeartifact:CreateRepository"``

Grants permission to create a new repository

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html

#### Defined in

actions/codeartifact.ts:43

___

### DeleteDomain

• **DeleteDomain** = ``"codeartifact:DeleteDomain"``

Grants permission to delete a domain

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteDomain.html

#### Defined in

actions/codeartifact.ts:49

___

### DeleteDomainPermissionsPolicy

• **DeleteDomainPermissionsPolicy** = ``"codeartifact:DeleteDomainPermissionsPolicy"``

Grants permission to delete the resource policy set on a domain

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteDomainPermissionsPolicy.html

#### Defined in

actions/codeartifact.ts:55

___

### DeletePackage

• **DeletePackage** = ``"codeartifact:DeletePackage"``

Grants permission to delete a package

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeletePackage.html

#### Defined in

actions/codeartifact.ts:61

___

### DeletePackageVersions

• **DeletePackageVersions** = ``"codeartifact:DeletePackageVersions"``

Grants permission to delete package versions

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeletePackageVersions.html

#### Defined in

actions/codeartifact.ts:67

___

### DeleteRepository

• **DeleteRepository** = ``"codeartifact:DeleteRepository"``

Grants permission to delete a repository

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteRepository.html

#### Defined in

actions/codeartifact.ts:73

___

### DeleteRepositoryPermissionsPolicy

• **DeleteRepositoryPermissionsPolicy** = ``"codeartifact:DeleteRepositoryPermissionsPolicy"``

Grants permission to delete the resource policy set on a repository

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteRepositoryPermissionsPolicy.html

#### Defined in

actions/codeartifact.ts:79

___

### DescribeDomain

• **DescribeDomain** = ``"codeartifact:DescribeDomain"``

Grants permission to return information about a domain

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribeDomain.html

#### Defined in

actions/codeartifact.ts:85

___

### DescribePackage

• **DescribePackage** = ``"codeartifact:DescribePackage"``

Grants permission to retrieve information about a package

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackage.html

#### Defined in

actions/codeartifact.ts:91

___

### DescribePackageVersion

• **DescribePackageVersion** = ``"codeartifact:DescribePackageVersion"``

Grants permission to return information about a package version

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html

#### Defined in

actions/codeartifact.ts:97

___

### DescribeRepository

• **DescribeRepository** = ``"codeartifact:DescribeRepository"``

Grants permission to return detailed information about a repository

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribeRepository.html

#### Defined in

actions/codeartifact.ts:103

___

### DisassociateExternalConnection

• **DisassociateExternalConnection** = ``"codeartifact:DisassociateExternalConnection"``

Grants permission to disassociate an external connection from a repository

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisassociateExternalConnection.html

#### Defined in

actions/codeartifact.ts:109

___

### DisposePackageVersions

• **DisposePackageVersions** = ``"codeartifact:DisposePackageVersions"``

Grants permission to set the status of package versions to Disposed and delete
their assets

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html

#### Defined in

actions/codeartifact.ts:116

___

### GetAuthorizationToken

• **GetAuthorizationToken** = ``"codeartifact:GetAuthorizationToken"``

Grants permission to generate a temporary authentication token for accessing re
positories in a domain

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetAuthorizationToken.html

#### Defined in

actions/codeartifact.ts:123

___

### GetDomainPermissionsPolicy

• **GetDomainPermissionsPolicy** = ``"codeartifact:GetDomainPermissionsPolicy"``

Grants permission to return a domain's resource policy

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetDomainPermissionsPolicy.html

#### Defined in

actions/codeartifact.ts:129

___

### GetPackageVersionAsset

• **GetPackageVersionAsset** = ``"codeartifact:GetPackageVersionAsset"``

Grants permission to return an asset (or file) that is part of a package versio
n

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetPackageVersionAsset.html

#### Defined in

actions/codeartifact.ts:136

___

### GetPackageVersionReadme

• **GetPackageVersionReadme** = ``"codeartifact:GetPackageVersionReadme"``

Grants permission to return a package version's readme file

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetPackageVersionReadme.html

#### Defined in

actions/codeartifact.ts:142

___

### GetRepositoryEndpoint

• **GetRepositoryEndpoint** = ``"codeartifact:GetRepositoryEndpoint"``

Grants permission to return an endpoint for a repository

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetRepositoryEndpoint.html

#### Defined in

actions/codeartifact.ts:148

___

### GetRepositoryPermissionsPolicy

• **GetRepositoryPermissionsPolicy** = ``"codeartifact:GetRepositoryPermissionsPolicy"``

Grants permission to return a repository's resource policy

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetRepositoryPermissionsPolicy.html

#### Defined in

actions/codeartifact.ts:154

___

### ListDomains

• **ListDomains** = ``"codeartifact:ListDomains"``

Grants permission to list the domains in the current user's AWS account

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html

#### Defined in

actions/codeartifact.ts:160

___

### ListPackageVersionAssets

• **ListPackageVersionAssets** = ``"codeartifact:ListPackageVersionAssets"``

Grants permission to list a package version's assets

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersionAssets.html

#### Defined in

actions/codeartifact.ts:166

___

### ListPackageVersionDependencies

• **ListPackageVersionDependencies** = ``"codeartifact:ListPackageVersionDependencies"``

Grants permission to list the direct dependencies of a package version

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersionDependencies.html

#### Defined in

actions/codeartifact.ts:172

___

### ListPackageVersions

• **ListPackageVersions** = ``"codeartifact:ListPackageVersions"``

Grants permission to list a package's versions

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html

#### Defined in

actions/codeartifact.ts:178

___

### ListPackages

• **ListPackages** = ``"codeartifact:ListPackages"``

Grants permission to list the packages in a repository

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackages.html

#### Defined in

actions/codeartifact.ts:184

___

### ListRepositories

• **ListRepositories** = ``"codeartifact:ListRepositories"``

Grants permission to list the repositories administered by the calling account

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html

#### Defined in

actions/codeartifact.ts:190

___

### ListRepositoriesInDomain

• **ListRepositoriesInDomain** = ``"codeartifact:ListRepositoriesInDomain"``

Grants permission to list the repositories in a domain

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositoriesInDomain.html

#### Defined in

actions/codeartifact.ts:196

___

### ListTagsForResource

• **ListTagsForResource** = ``"codeartifact:ListTagsForResource"``

Grants permission to list tags for a CodeArtifact resource

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/codeartifact.ts:202

___

### PublishPackageVersion

• **PublishPackageVersion** = ``"codeartifact:PublishPackageVersion"``

Grants permission to publish assets and metadata to a repository endpoint

See https://docs.aws.amazon.com/codeartifact/latest/ug/repo-policies.html

#### Defined in

actions/codeartifact.ts:208

___

### PutDomainPermissionsPolicy

• **PutDomainPermissionsPolicy** = ``"codeartifact:PutDomainPermissionsPolicy"``

Grants permission to attach a resource policy to a domain

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PutDomainPermissionsPolicy.html

#### Defined in

actions/codeartifact.ts:214

___

### PutPackageMetadata

• **PutPackageMetadata** = ``"codeartifact:PutPackageMetadata"``

Grants permission to add, modify or remove package metadata using a repository
endpoint

See https://docs.aws.amazon.com/codeartifact/latest/ug/repo-policies.html

#### Defined in

actions/codeartifact.ts:221

___

### PutPackageOriginConfiguration

• **PutPackageOriginConfiguration** = ``"codeartifact:PutPackageOriginConfiguration"``

Grants permission to set origin configuration for a package

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PutPackageOriginConfiguration.html

#### Defined in

actions/codeartifact.ts:227

___

### PutRepositoryPermissionsPolicy

• **PutRepositoryPermissionsPolicy** = ``"codeartifact:PutRepositoryPermissionsPolicy"``

Grants permission to attach a resource policy to a repository

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PutRepositoryPermissionsPolicy.html

#### Defined in

actions/codeartifact.ts:233

___

### ReadFromRepository

• **ReadFromRepository** = ``"codeartifact:ReadFromRepository"``

Grants permission to return package assets and metadata from a repository endpo
int

See https://docs.aws.amazon.com/codeartifact/latest/ug/repo-policies.html

#### Defined in

actions/codeartifact.ts:240

___

### TagResource

• **TagResource** = ``"codeartifact:TagResource"``

Grants permission to tag a CodeArtifact resource

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_TagResource.html

#### Defined in

actions/codeartifact.ts:246

___

### UntagResource

• **UntagResource** = ``"codeartifact:UntagResource"``

Grants permission to remove a tag from a CodeArtifact resource

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UntagResource.html

#### Defined in

actions/codeartifact.ts:252

___

### UpdatePackageVersionsStatus

• **UpdatePackageVersionsStatus** = ``"codeartifact:UpdatePackageVersionsStatus"``

Grants permission to modify the status of one or more versions of a package

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html

#### Defined in

actions/codeartifact.ts:258

___

### UpdateRepository

• **UpdateRepository** = ``"codeartifact:UpdateRepository"``

Grants permission to modify the properties of a repository

See https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html

#### Defined in

actions/codeartifact.ts:264
