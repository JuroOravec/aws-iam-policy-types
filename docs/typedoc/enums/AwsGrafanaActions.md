[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsGrafanaActions

# Enumeration: AwsGrafanaActions

All IAM policy actions for Amazon Managed Grafana (GRAFANA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedgrafana.html

2024-02-12T09:58:11.850Z

## Table of contents

### Enumeration Members

- [AssociateLicense](AwsGrafanaActions.md#associatelicense)
- [CreateWorkspace](AwsGrafanaActions.md#createworkspace)
- [CreateWorkspaceApiKey](AwsGrafanaActions.md#createworkspaceapikey)
- [DeleteWorkspace](AwsGrafanaActions.md#deleteworkspace)
- [DeleteWorkspaceApiKey](AwsGrafanaActions.md#deleteworkspaceapikey)
- [DescribeWorkspace](AwsGrafanaActions.md#describeworkspace)
- [DescribeWorkspaceAuthentication](AwsGrafanaActions.md#describeworkspaceauthentication)
- [DescribeWorkspaceConfiguration](AwsGrafanaActions.md#describeworkspaceconfiguration)
- [DisassociateLicense](AwsGrafanaActions.md#disassociatelicense)
- [ListPermissions](AwsGrafanaActions.md#listpermissions)
- [ListTagsForResource](AwsGrafanaActions.md#listtagsforresource)
- [ListVersions](AwsGrafanaActions.md#listversions)
- [ListWorkspaces](AwsGrafanaActions.md#listworkspaces)
- [TagResource](AwsGrafanaActions.md#tagresource)
- [UntagResource](AwsGrafanaActions.md#untagresource)
- [UpdatePermissions](AwsGrafanaActions.md#updatepermissions)
- [UpdateWorkspace](AwsGrafanaActions.md#updateworkspace)
- [UpdateWorkspaceAuthentication](AwsGrafanaActions.md#updateworkspaceauthentication)
- [UpdateWorkspaceConfiguration](AwsGrafanaActions.md#updateworkspaceconfiguration)

## Enumeration Members

### AssociateLicense

• **AssociateLicense** = ``"grafana:AssociateLicense"``

Grants permission to upgrade a workspace with a license

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:17

___

### CreateWorkspace

• **CreateWorkspace** = ``"grafana:CreateWorkspace"``

Grants permission to create a workspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:23

___

### CreateWorkspaceApiKey

• **CreateWorkspaceApiKey** = ``"grafana:CreateWorkspaceApiKey"``

Grants permission to create API keys for a workspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:29

___

### DeleteWorkspace

• **DeleteWorkspace** = ``"grafana:DeleteWorkspace"``

Grants permission to delete a workspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:35

___

### DeleteWorkspaceApiKey

• **DeleteWorkspaceApiKey** = ``"grafana:DeleteWorkspaceApiKey"``

Grants permission to delete API keys from a workspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:41

___

### DescribeWorkspace

• **DescribeWorkspace** = ``"grafana:DescribeWorkspace"``

Grants permission to describe a workspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:47

___

### DescribeWorkspaceAuthentication

• **DescribeWorkspaceAuthentication** = ``"grafana:DescribeWorkspaceAuthentication"``

Grants permission to describe authentication providers on a workspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:53

___

### DescribeWorkspaceConfiguration

• **DescribeWorkspaceConfiguration** = ``"grafana:DescribeWorkspaceConfiguration"``

Grants permission to describe the current configuration string for the given wo
rkspace

See https://docs.aws.amazon.com/grafana/latest/APIReference/API_DescribeWorkspaceConfiguration.html

#### Defined in

actions/grafana.ts:60

___

### DisassociateLicense

• **DisassociateLicense** = ``"grafana:DisassociateLicense"``

Grants permission to remove a license from a workspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:66

___

### ListPermissions

• **ListPermissions** = ``"grafana:ListPermissions"``

Grants permission to list the permissions on a wokspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:72

___

### ListTagsForResource

• **ListTagsForResource** = ``"grafana:ListTagsForResource"``

Grants permission to list tags associated with a workspace

See https://docs.aws.amazon.com/grafana/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/grafana.ts:78

___

### ListVersions

• **ListVersions** = ``"grafana:ListVersions"``

Grants permission to list all available supported Grafana versions. Optionally,
include a workspace to list the versions to which it can be upgraded

See https://docs.aws.amazon.com/grafana/latest/APIReference/API_ListVersions.html

#### Defined in

actions/grafana.ts:85

___

### ListWorkspaces

• **ListWorkspaces** = ``"grafana:ListWorkspaces"``

Grants permission to list workspaces

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:91

___

### TagResource

• **TagResource** = ``"grafana:TagResource"``

Grants permission to add tags to, or update tag values of, a workspace

See https://docs.aws.amazon.com/grafana/latest/APIReference/API_TagResource.html

#### Defined in

actions/grafana.ts:97

___

### UntagResource

• **UntagResource** = ``"grafana:UntagResource"``

Grants permission to remove tags from a workspace

See https://docs.aws.amazon.com/grafana/latest/APIReference/API_UntagResource.html

#### Defined in

actions/grafana.ts:103

___

### UpdatePermissions

• **UpdatePermissions** = ``"grafana:UpdatePermissions"``

Grants permission to modify the permissions on a workspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:109

___

### UpdateWorkspace

• **UpdateWorkspace** = ``"grafana:UpdateWorkspace"``

Grants permission to modify a workspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:115

___

### UpdateWorkspaceAuthentication

• **UpdateWorkspaceAuthentication** = ``"grafana:UpdateWorkspaceAuthentication"``

Grants permission to modify authentication providers on a workspace

See https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html

#### Defined in

actions/grafana.ts:121

___

### UpdateWorkspaceConfiguration

• **UpdateWorkspaceConfiguration** = ``"grafana:UpdateWorkspaceConfiguration"``

Grants permission to update the configuration string for the given workspace

See https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceConfiguration.html

#### Defined in

actions/grafana.ts:127
