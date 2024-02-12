[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsLambdaActions

# Enumeration: AwsLambdaActions

All IAM policy actions for AWS Lambda (LAMBDA)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslambda.html

2024-02-12T09:58:02.294Z

## Table of contents

### Enumeration Members

- [AddLayerVersionPermission](AwsLambdaActions.md#addlayerversionpermission)
- [AddPermission](AwsLambdaActions.md#addpermission)
- [CreateAlias](AwsLambdaActions.md#createalias)
- [CreateCodeSigningConfig](AwsLambdaActions.md#createcodesigningconfig)
- [CreateEventSourceMapping](AwsLambdaActions.md#createeventsourcemapping)
- [CreateFunction](AwsLambdaActions.md#createfunction)
- [CreateFunctionUrlConfig](AwsLambdaActions.md#createfunctionurlconfig)
- [DeleteAlias](AwsLambdaActions.md#deletealias)
- [DeleteCodeSigningConfig](AwsLambdaActions.md#deletecodesigningconfig)
- [DeleteEventSourceMapping](AwsLambdaActions.md#deleteeventsourcemapping)
- [DeleteFunction](AwsLambdaActions.md#deletefunction)
- [DeleteFunctionCodeSigningConfig](AwsLambdaActions.md#deletefunctioncodesigningconfig)
- [DeleteFunctionConcurrency](AwsLambdaActions.md#deletefunctionconcurrency)
- [DeleteFunctionEventInvokeConfig](AwsLambdaActions.md#deletefunctioneventinvokeconfig)
- [DeleteFunctionUrlConfig](AwsLambdaActions.md#deletefunctionurlconfig)
- [DeleteLayerVersion](AwsLambdaActions.md#deletelayerversion)
- [DeleteProvisionedConcurrencyConfig](AwsLambdaActions.md#deleteprovisionedconcurrencyconfig)
- [DisableReplication](AwsLambdaActions.md#disablereplication)
- [EnableReplication](AwsLambdaActions.md#enablereplication)
- [GetAccountSettings](AwsLambdaActions.md#getaccountsettings)
- [GetAlias](AwsLambdaActions.md#getalias)
- [GetCodeSigningConfig](AwsLambdaActions.md#getcodesigningconfig)
- [GetEventSourceMapping](AwsLambdaActions.md#geteventsourcemapping)
- [GetFunction](AwsLambdaActions.md#getfunction)
- [GetFunctionCodeSigningConfig](AwsLambdaActions.md#getfunctioncodesigningconfig)
- [GetFunctionConcurrency](AwsLambdaActions.md#getfunctionconcurrency)
- [GetFunctionConfiguration](AwsLambdaActions.md#getfunctionconfiguration)
- [GetFunctionEventInvokeConfig](AwsLambdaActions.md#getfunctioneventinvokeconfig)
- [GetFunctionUrlConfig](AwsLambdaActions.md#getfunctionurlconfig)
- [GetLayerVersion](AwsLambdaActions.md#getlayerversion)
- [GetLayerVersionPolicy](AwsLambdaActions.md#getlayerversionpolicy)
- [GetPolicy](AwsLambdaActions.md#getpolicy)
- [GetProvisionedConcurrencyConfig](AwsLambdaActions.md#getprovisionedconcurrencyconfig)
- [GetRuntimeManagementConfig](AwsLambdaActions.md#getruntimemanagementconfig)
- [InvokeAsync](AwsLambdaActions.md#invokeasync)
- [InvokeFunction](AwsLambdaActions.md#invokefunction)
- [InvokeFunctionUrl](AwsLambdaActions.md#invokefunctionurl)
- [ListAliases](AwsLambdaActions.md#listaliases)
- [ListCodeSigningConfigs](AwsLambdaActions.md#listcodesigningconfigs)
- [ListEventSourceMappings](AwsLambdaActions.md#listeventsourcemappings)
- [ListFunctionEventInvokeConfigs](AwsLambdaActions.md#listfunctioneventinvokeconfigs)
- [ListFunctionUrlConfigs](AwsLambdaActions.md#listfunctionurlconfigs)
- [ListFunctions](AwsLambdaActions.md#listfunctions)
- [ListFunctionsByCodeSigningConfig](AwsLambdaActions.md#listfunctionsbycodesigningconfig)
- [ListLayerVersions](AwsLambdaActions.md#listlayerversions)
- [ListLayers](AwsLambdaActions.md#listlayers)
- [ListProvisionedConcurrencyConfigs](AwsLambdaActions.md#listprovisionedconcurrencyconfigs)
- [ListTags](AwsLambdaActions.md#listtags)
- [ListVersionsByFunction](AwsLambdaActions.md#listversionsbyfunction)
- [PublishLayerVersion](AwsLambdaActions.md#publishlayerversion)
- [PublishVersion](AwsLambdaActions.md#publishversion)
- [PutFunctionCodeSigningConfig](AwsLambdaActions.md#putfunctioncodesigningconfig)
- [PutFunctionConcurrency](AwsLambdaActions.md#putfunctionconcurrency)
- [PutFunctionEventInvokeConfig](AwsLambdaActions.md#putfunctioneventinvokeconfig)
- [PutProvisionedConcurrencyConfig](AwsLambdaActions.md#putprovisionedconcurrencyconfig)
- [PutRuntimeManagementConfig](AwsLambdaActions.md#putruntimemanagementconfig)
- [RemoveLayerVersionPermission](AwsLambdaActions.md#removelayerversionpermission)
- [RemovePermission](AwsLambdaActions.md#removepermission)
- [TagResource](AwsLambdaActions.md#tagresource)
- [UntagResource](AwsLambdaActions.md#untagresource)
- [UpdateAlias](AwsLambdaActions.md#updatealias)
- [UpdateCodeSigningConfig](AwsLambdaActions.md#updatecodesigningconfig)
- [UpdateEventSourceMapping](AwsLambdaActions.md#updateeventsourcemapping)
- [UpdateFunctionCode](AwsLambdaActions.md#updatefunctioncode)
- [UpdateFunctionCodeSigningConfig](AwsLambdaActions.md#updatefunctioncodesigningconfig)
- [UpdateFunctionConfiguration](AwsLambdaActions.md#updatefunctionconfiguration)
- [UpdateFunctionEventInvokeConfig](AwsLambdaActions.md#updatefunctioneventinvokeconfig)
- [UpdateFunctionUrlConfig](AwsLambdaActions.md#updatefunctionurlconfig)

## Enumeration Members

### AddLayerVersionPermission

• **AddLayerVersionPermission** = ``"lambda:AddLayerVersionPermission"``

Grants permission to add permissions to the resource-based policy of a version
of an AWS Lambda layer

See https://docs.aws.amazon.com/lambda/latest/dg/API_AddLayerVersionPermission.html

#### Defined in

actions/lambda.ts:18

___

### AddPermission

• **AddPermission** = ``"lambda:AddPermission"``

Grants permission to give an AWS service or another account permission to use a
n AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html

#### Defined in

actions/lambda.ts:25

___

### CreateAlias

• **CreateAlias** = ``"lambda:CreateAlias"``

Grants permission to create an alias for a Lambda function version

See https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html

#### Defined in

actions/lambda.ts:31

___

### CreateCodeSigningConfig

• **CreateCodeSigningConfig** = ``"lambda:CreateCodeSigningConfig"``

Grants permission to create an AWS Lambda code signing config

See https://docs.aws.amazon.com/lambda/latest/dg/API_CreateCodeSigningConfig.html

#### Defined in

actions/lambda.ts:37

___

### CreateEventSourceMapping

• **CreateEventSourceMapping** = ``"lambda:CreateEventSourceMapping"``

Grants permission to create a mapping between an event source and an AWS Lambda
function

See https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html

#### Defined in

actions/lambda.ts:44

___

### CreateFunction

• **CreateFunction** = ``"lambda:CreateFunction"``

Grants permission to create an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html

#### Defined in

actions/lambda.ts:50

___

### CreateFunctionUrlConfig

• **CreateFunctionUrlConfig** = ``"lambda:CreateFunctionUrlConfig"``

Grants permission to create a function url configuration for a Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunctionUrlConfig.html

#### Defined in

actions/lambda.ts:56

___

### DeleteAlias

• **DeleteAlias** = ``"lambda:DeleteAlias"``

Grants permission to delete an AWS Lambda function alias

See https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html

#### Defined in

actions/lambda.ts:62

___

### DeleteCodeSigningConfig

• **DeleteCodeSigningConfig** = ``"lambda:DeleteCodeSigningConfig"``

Grants permission to delete an AWS Lambda code signing config

See https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteCodeSigningConfig.html

#### Defined in

actions/lambda.ts:68

___

### DeleteEventSourceMapping

• **DeleteEventSourceMapping** = ``"lambda:DeleteEventSourceMapping"``

Grants permission to delete an AWS Lambda event source mapping

See https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteEventSourceMapping.html

#### Defined in

actions/lambda.ts:74

___

### DeleteFunction

• **DeleteFunction** = ``"lambda:DeleteFunction"``

Grants permission to delete an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html

#### Defined in

actions/lambda.ts:80

___

### DeleteFunctionCodeSigningConfig

• **DeleteFunctionCodeSigningConfig** = ``"lambda:DeleteFunctionCodeSigningConfig"``

Grants permission to detach a code signing config from an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionCodeSigningConfig.html

#### Defined in

actions/lambda.ts:86

___

### DeleteFunctionConcurrency

• **DeleteFunctionConcurrency** = ``"lambda:DeleteFunctionConcurrency"``

Grants permission to remove a concurrent execution limit from an AWS Lambda fun
ction

See https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html

#### Defined in

actions/lambda.ts:93

___

### DeleteFunctionEventInvokeConfig

• **DeleteFunctionEventInvokeConfig** = ``"lambda:DeleteFunctionEventInvokeConfig"``

Grants permission to delete the configuration for asynchronous invocation for a
n AWS Lambda function, version, or alias

See https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html

#### Defined in

actions/lambda.ts:100

___

### DeleteFunctionUrlConfig

• **DeleteFunctionUrlConfig** = ``"lambda:DeleteFunctionUrlConfig"``

Grants permission to delete function url configuration for a Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionUrlConfig.html

#### Defined in

actions/lambda.ts:106

___

### DeleteLayerVersion

• **DeleteLayerVersion** = ``"lambda:DeleteLayerVersion"``

Grants permission to delete a version of an AWS Lambda layer

See https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html

#### Defined in

actions/lambda.ts:112

___

### DeleteProvisionedConcurrencyConfig

• **DeleteProvisionedConcurrencyConfig** = ``"lambda:DeleteProvisionedConcurrencyConfig"``

Grants permission to delete the provisioned concurrency configuration for an AW
S Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html

#### Defined in

actions/lambda.ts:119

___

### DisableReplication

• **DisableReplication** = ``"lambda:DisableReplication"``

Grants permission to disable replication for a Lambda@Edge function

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-permissions.html

#### Defined in

actions/lambda.ts:125

___

### EnableReplication

• **EnableReplication** = ``"lambda:EnableReplication"``

Grants permission to enable replication for a Lambda@Edge function

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-permissions.html

#### Defined in

actions/lambda.ts:131

___

### GetAccountSettings

• **GetAccountSettings** = ``"lambda:GetAccountSettings"``

Grants permission to view details about an account's limits and usage in an AWS
Region

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetAccountSettings.html

#### Defined in

actions/lambda.ts:138

___

### GetAlias

• **GetAlias** = ``"lambda:GetAlias"``

Grants permission to view details about an AWS Lambda function alias

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html

#### Defined in

actions/lambda.ts:144

___

### GetCodeSigningConfig

• **GetCodeSigningConfig** = ``"lambda:GetCodeSigningConfig"``

Grants permission to view details about an AWS Lambda code signing config

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetCodeSigningConfig.html

#### Defined in

actions/lambda.ts:150

___

### GetEventSourceMapping

• **GetEventSourceMapping** = ``"lambda:GetEventSourceMapping"``

Grants permission to view details about an AWS Lambda event source mapping

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetEventSourceMapping.html

#### Defined in

actions/lambda.ts:156

___

### GetFunction

• **GetFunction** = ``"lambda:GetFunction"``

Grants permission to view details about an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html

#### Defined in

actions/lambda.ts:162

___

### GetFunctionCodeSigningConfig

• **GetFunctionCodeSigningConfig** = ``"lambda:GetFunctionCodeSigningConfig"``

Grants permission to view the code signing config arn attached to an AWS Lambda
function

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionCodeSigningConfig.html

#### Defined in

actions/lambda.ts:169

___

### GetFunctionConcurrency

• **GetFunctionConcurrency** = ``"lambda:GetFunctionConcurrency"``

Grants permission to view details about the reserved concurrency configuration
for a function

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html

#### Defined in

actions/lambda.ts:176

___

### GetFunctionConfiguration

• **GetFunctionConfiguration** = ``"lambda:GetFunctionConfiguration"``

Grants permission to view details about the version-specific settings of an AWS
Lambda function or version

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html

#### Defined in

actions/lambda.ts:183

___

### GetFunctionEventInvokeConfig

• **GetFunctionEventInvokeConfig** = ``"lambda:GetFunctionEventInvokeConfig"``

Grants permission to view the configuration for asynchronous invocation for a f
unction, version, or alias

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html

#### Defined in

actions/lambda.ts:190

___

### GetFunctionUrlConfig

• **GetFunctionUrlConfig** = ``"lambda:GetFunctionUrlConfig"``

Grants permission to read function url configuration for a Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionUrlConfig.html

#### Defined in

actions/lambda.ts:196

___

### GetLayerVersion

• **GetLayerVersion** = ``"lambda:GetLayerVersion"``

Grants permission to view details about a version of an AWS Lambda layer. Note
this action also supports GetLayerVersionByArn API

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html

#### Defined in

actions/lambda.ts:203

___

### GetLayerVersionPolicy

• **GetLayerVersionPolicy** = ``"lambda:GetLayerVersionPolicy"``

Grants permission to view the resource-based policy for a version of an AWS Lam
bda layer

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html

#### Defined in

actions/lambda.ts:210

___

### GetPolicy

• **GetPolicy** = ``"lambda:GetPolicy"``

Grants permission to view the resource-based policy for an AWS Lambda function,
version, or alias

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html

#### Defined in

actions/lambda.ts:217

___

### GetProvisionedConcurrencyConfig

• **GetProvisionedConcurrencyConfig** = ``"lambda:GetProvisionedConcurrencyConfig"``

Grants permission to view the provisioned concurrency configuration for an AWS
Lambda function's alias or version

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html

#### Defined in

actions/lambda.ts:224

___

### GetRuntimeManagementConfig

• **GetRuntimeManagementConfig** = ``"lambda:GetRuntimeManagementConfig"``

Grants permission to view the runtime management configuration of an AWS Lambda
function

See https://docs.aws.amazon.com/lambda/latest/dg/API_GetRuntimeManagementConfig.html

#### Defined in

actions/lambda.ts:231

___

### InvokeAsync

• **InvokeAsync** = ``"lambda:InvokeAsync"``

Grants permission to invoke a function asynchronously (Deprecated)

See https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeAsync.html

#### Defined in

actions/lambda.ts:237

___

### InvokeFunction

• **InvokeFunction** = ``"lambda:InvokeFunction"``

Grants permission to invoke an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html

#### Defined in

actions/lambda.ts:243

___

### InvokeFunctionUrl

• **InvokeFunctionUrl** = ``"lambda:InvokeFunctionUrl"``

Grants permission to invoke an AWS Lambda function through url

See https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeFunctionUrl.html

#### Defined in

actions/lambda.ts:249

___

### ListAliases

• **ListAliases** = ``"lambda:ListAliases"``

Grants permission to retrieve a list of aliases for an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html

#### Defined in

actions/lambda.ts:255

___

### ListCodeSigningConfigs

• **ListCodeSigningConfigs** = ``"lambda:ListCodeSigningConfigs"``

Grants permission to retrieve a list of AWS Lambda code signing configs

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListCodeSigningConfigs.html

#### Defined in

actions/lambda.ts:261

___

### ListEventSourceMappings

• **ListEventSourceMappings** = ``"lambda:ListEventSourceMappings"``

Grants permission to retrieve a list of AWS Lambda event source mappings

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html

#### Defined in

actions/lambda.ts:267

___

### ListFunctionEventInvokeConfigs

• **ListFunctionEventInvokeConfigs** = ``"lambda:ListFunctionEventInvokeConfigs"``

Grants permission to retrieve a list of configurations for asynchronous invocat
ion for a function

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html

#### Defined in

actions/lambda.ts:274

___

### ListFunctionUrlConfigs

• **ListFunctionUrlConfigs** = ``"lambda:ListFunctionUrlConfigs"``

Grants permission to read function url configurations for a function

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionUrlConfigs.html

#### Defined in

actions/lambda.ts:280

___

### ListFunctions

• **ListFunctions** = ``"lambda:ListFunctions"``

Grants permission to retrieve a list of AWS Lambda functions, with the version-
specific configuration of each function

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html

#### Defined in

actions/lambda.ts:287

___

### ListFunctionsByCodeSigningConfig

• **ListFunctionsByCodeSigningConfig** = ``"lambda:ListFunctionsByCodeSigningConfig"``

Grants permission to retrieve a list of AWS Lambda functions by the code signin
g config assigned

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionsByCodeSigningConfig.html

#### Defined in

actions/lambda.ts:294

___

### ListLayerVersions

• **ListLayerVersions** = ``"lambda:ListLayerVersions"``

Grants permission to retrieve a list of versions of an AWS Lambda layer

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html

#### Defined in

actions/lambda.ts:300

___

### ListLayers

• **ListLayers** = ``"lambda:ListLayers"``

Grants permission to retrieve a list of AWS Lambda layers, with details about t
he latest version of each layer

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html

#### Defined in

actions/lambda.ts:307

___

### ListProvisionedConcurrencyConfigs

• **ListProvisionedConcurrencyConfigs** = ``"lambda:ListProvisionedConcurrencyConfigs"``

Grants permission to retrieve a list of provisioned concurrency configurations
for an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html

#### Defined in

actions/lambda.ts:314

___

### ListTags

• **ListTags** = ``"lambda:ListTags"``

Grants permission to retrieve a list of tags for an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListTags.html

#### Defined in

actions/lambda.ts:320

___

### ListVersionsByFunction

• **ListVersionsByFunction** = ``"lambda:ListVersionsByFunction"``

Grants permission to retrieve a list of versions for an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html

#### Defined in

actions/lambda.ts:326

___

### PublishLayerVersion

• **PublishLayerVersion** = ``"lambda:PublishLayerVersion"``

Grants permission to create an AWS Lambda layer

See https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html

#### Defined in

actions/lambda.ts:332

___

### PublishVersion

• **PublishVersion** = ``"lambda:PublishVersion"``

Grants permission to create an AWS Lambda function version

See https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html

#### Defined in

actions/lambda.ts:338

___

### PutFunctionCodeSigningConfig

• **PutFunctionCodeSigningConfig** = ``"lambda:PutFunctionCodeSigningConfig"``

Grants permission to attach a code signing config to an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionCodeSigningConfig.html

#### Defined in

actions/lambda.ts:344

___

### PutFunctionConcurrency

• **PutFunctionConcurrency** = ``"lambda:PutFunctionConcurrency"``

Grants permission to configure reserved concurrency for an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html

#### Defined in

actions/lambda.ts:350

___

### PutFunctionEventInvokeConfig

• **PutFunctionEventInvokeConfig** = ``"lambda:PutFunctionEventInvokeConfig"``

Grants permission to configures options for asynchronous invocation on an AWS L
ambda function, version, or alias

See https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html

#### Defined in

actions/lambda.ts:357

___

### PutProvisionedConcurrencyConfig

• **PutProvisionedConcurrencyConfig** = ``"lambda:PutProvisionedConcurrencyConfig"``

Grants permission to configure provisioned concurrency for an AWS Lambda functi
on's alias or version

See https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html

#### Defined in

actions/lambda.ts:364

___

### PutRuntimeManagementConfig

• **PutRuntimeManagementConfig** = ``"lambda:PutRuntimeManagementConfig"``

Grants permission to update the runtime management configuration of an AWS Lamb
da function

See https://docs.aws.amazon.com/lambda/latest/dg/API_PutRuntimeManagementConfig.html

#### Defined in

actions/lambda.ts:371

___

### RemoveLayerVersionPermission

• **RemoveLayerVersionPermission** = ``"lambda:RemoveLayerVersionPermission"``

Grants permission to remove a statement from the permissions policy for a versi
on of an AWS Lambda layer

See https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html

#### Defined in

actions/lambda.ts:378

___

### RemovePermission

• **RemovePermission** = ``"lambda:RemovePermission"``

Grants permission to revoke function-use permission from an AWS service or anot
her account

See https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html

#### Defined in

actions/lambda.ts:385

___

### TagResource

• **TagResource** = ``"lambda:TagResource"``

Grants permission to add tags to an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_TagResources.html

#### Defined in

actions/lambda.ts:391

___

### UntagResource

• **UntagResource** = ``"lambda:UntagResource"``

Grants permission to remove tags from an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html

#### Defined in

actions/lambda.ts:397

___

### UpdateAlias

• **UpdateAlias** = ``"lambda:UpdateAlias"``

Grants permission to update the configuration of an AWS Lambda function's alias

See https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html

#### Defined in

actions/lambda.ts:403

___

### UpdateCodeSigningConfig

• **UpdateCodeSigningConfig** = ``"lambda:UpdateCodeSigningConfig"``

Grants permission to update an AWS Lambda code signing config

See https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html

#### Defined in

actions/lambda.ts:409

___

### UpdateEventSourceMapping

• **UpdateEventSourceMapping** = ``"lambda:UpdateEventSourceMapping"``

Grants permission to update the configuration of an AWS Lambda event source map
ping

See https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html

#### Defined in

actions/lambda.ts:416

___

### UpdateFunctionCode

• **UpdateFunctionCode** = ``"lambda:UpdateFunctionCode"``

Grants permission to update the code of an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html

#### Defined in

actions/lambda.ts:422

___

### UpdateFunctionCodeSigningConfig

• **UpdateFunctionCodeSigningConfig** = ``"lambda:UpdateFunctionCodeSigningConfig"``

Grants permission to update the code signing config of an AWS Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCodeSigningConfig.html

#### Defined in

actions/lambda.ts:428

___

### UpdateFunctionConfiguration

• **UpdateFunctionConfiguration** = ``"lambda:UpdateFunctionConfiguration"``

Grants permission to modify the version-specific settings of an AWS Lambda func
tion

See https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html

#### Defined in

actions/lambda.ts:435

___

### UpdateFunctionEventInvokeConfig

• **UpdateFunctionEventInvokeConfig** = ``"lambda:UpdateFunctionEventInvokeConfig"``

Grants permission to modify the configuration for asynchronous invocation for a
n AWS Lambda function, version, or alias

See https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html

#### Defined in

actions/lambda.ts:442

___

### UpdateFunctionUrlConfig

• **UpdateFunctionUrlConfig** = ``"lambda:UpdateFunctionUrlConfig"``

Grants permission to update a function url configuration for a Lambda function

See https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionUrlConfig.html

#### Defined in

actions/lambda.ts:448
