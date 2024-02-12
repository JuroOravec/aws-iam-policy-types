[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsQuicksightActions

# Enumeration: AwsQuicksightActions

All IAM policy actions for Amazon QuickSight (QUICKSIGHT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonquicksight.html

2024-02-12T09:58:47.972Z

## Table of contents

### Enumeration Members

- [AccountConfigurations](AwsQuicksightActions.md#accountconfigurations)
- [CancelIngestion](AwsQuicksightActions.md#cancelingestion)
- [CreateAccountCustomization](AwsQuicksightActions.md#createaccountcustomization)
- [CreateAccountSubscription](AwsQuicksightActions.md#createaccountsubscription)
- [CreateAdmin](AwsQuicksightActions.md#createadmin)
- [CreateAnalysis](AwsQuicksightActions.md#createanalysis)
- [CreateCustomPermissions](AwsQuicksightActions.md#createcustompermissions)
- [CreateDashboard](AwsQuicksightActions.md#createdashboard)
- [CreateDataSet](AwsQuicksightActions.md#createdataset)
- [CreateDataSource](AwsQuicksightActions.md#createdatasource)
- [CreateEmailCustomizationTemplate](AwsQuicksightActions.md#createemailcustomizationtemplate)
- [CreateFolder](AwsQuicksightActions.md#createfolder)
- [CreateFolderMembership](AwsQuicksightActions.md#createfoldermembership)
- [CreateGroup](AwsQuicksightActions.md#creategroup)
- [CreateGroupMembership](AwsQuicksightActions.md#creategroupmembership)
- [CreateIAMPolicyAssignment](AwsQuicksightActions.md#createiampolicyassignment)
- [CreateIngestion](AwsQuicksightActions.md#createingestion)
- [CreateNamespace](AwsQuicksightActions.md#createnamespace)
- [CreateReader](AwsQuicksightActions.md#createreader)
- [CreateRefreshSchedule](AwsQuicksightActions.md#createrefreshschedule)
- [CreateRoleMembership](AwsQuicksightActions.md#createrolemembership)
- [CreateTemplate](AwsQuicksightActions.md#createtemplate)
- [CreateTemplateAlias](AwsQuicksightActions.md#createtemplatealias)
- [CreateTheme](AwsQuicksightActions.md#createtheme)
- [CreateThemeAlias](AwsQuicksightActions.md#createthemealias)
- [CreateTopic](AwsQuicksightActions.md#createtopic)
- [CreateTopicRefreshSchedule](AwsQuicksightActions.md#createtopicrefreshschedule)
- [CreateUser](AwsQuicksightActions.md#createuser)
- [CreateVPCConnection](AwsQuicksightActions.md#createvpcconnection)
- [DeleteAccountCustomization](AwsQuicksightActions.md#deleteaccountcustomization)
- [DeleteAccountSubscription](AwsQuicksightActions.md#deleteaccountsubscription)
- [DeleteAnalysis](AwsQuicksightActions.md#deleteanalysis)
- [DeleteCustomPermissions](AwsQuicksightActions.md#deletecustompermissions)
- [DeleteDashboard](AwsQuicksightActions.md#deletedashboard)
- [DeleteDataSet](AwsQuicksightActions.md#deletedataset)
- [DeleteDataSetRefreshProperties](AwsQuicksightActions.md#deletedatasetrefreshproperties)
- [DeleteDataSource](AwsQuicksightActions.md#deletedatasource)
- [DeleteEmailCustomizationTemplate](AwsQuicksightActions.md#deleteemailcustomizationtemplate)
- [DeleteFolder](AwsQuicksightActions.md#deletefolder)
- [DeleteFolderMembership](AwsQuicksightActions.md#deletefoldermembership)
- [DeleteGroup](AwsQuicksightActions.md#deletegroup)
- [DeleteGroupMembership](AwsQuicksightActions.md#deletegroupmembership)
- [DeleteIAMPolicyAssignment](AwsQuicksightActions.md#deleteiampolicyassignment)
- [DeleteIdentityPropagationConfig](AwsQuicksightActions.md#deleteidentitypropagationconfig)
- [DeleteNamespace](AwsQuicksightActions.md#deletenamespace)
- [DeleteRefreshSchedule](AwsQuicksightActions.md#deleterefreshschedule)
- [DeleteRoleCustomPermission](AwsQuicksightActions.md#deleterolecustompermission)
- [DeleteRoleMembership](AwsQuicksightActions.md#deleterolemembership)
- [DeleteTemplate](AwsQuicksightActions.md#deletetemplate)
- [DeleteTemplateAlias](AwsQuicksightActions.md#deletetemplatealias)
- [DeleteTheme](AwsQuicksightActions.md#deletetheme)
- [DeleteThemeAlias](AwsQuicksightActions.md#deletethemealias)
- [DeleteTopic](AwsQuicksightActions.md#deletetopic)
- [DeleteTopicRefreshSchedule](AwsQuicksightActions.md#deletetopicrefreshschedule)
- [DeleteUser](AwsQuicksightActions.md#deleteuser)
- [DeleteUserByPrincipalId](AwsQuicksightActions.md#deleteuserbyprincipalid)
- [DeleteVPCConnection](AwsQuicksightActions.md#deletevpcconnection)
- [DescribeAccountCustomization](AwsQuicksightActions.md#describeaccountcustomization)
- [DescribeAccountSettings](AwsQuicksightActions.md#describeaccountsettings)
- [DescribeAccountSubscription](AwsQuicksightActions.md#describeaccountsubscription)
- [DescribeAnalysis](AwsQuicksightActions.md#describeanalysis)
- [DescribeAnalysisPermissions](AwsQuicksightActions.md#describeanalysispermissions)
- [DescribeAssetBundleExportJob](AwsQuicksightActions.md#describeassetbundleexportjob)
- [DescribeAssetBundleImportJob](AwsQuicksightActions.md#describeassetbundleimportjob)
- [DescribeCustomPermissions](AwsQuicksightActions.md#describecustompermissions)
- [DescribeDashboard](AwsQuicksightActions.md#describedashboard)
- [DescribeDashboardPermissions](AwsQuicksightActions.md#describedashboardpermissions)
- [DescribeDashboardSnapshotJob](AwsQuicksightActions.md#describedashboardsnapshotjob)
- [DescribeDashboardSnapshotJobResult](AwsQuicksightActions.md#describedashboardsnapshotjobresult)
- [DescribeDataSet](AwsQuicksightActions.md#describedataset)
- [DescribeDataSetPermissions](AwsQuicksightActions.md#describedatasetpermissions)
- [DescribeDataSetRefreshProperties](AwsQuicksightActions.md#describedatasetrefreshproperties)
- [DescribeDataSource](AwsQuicksightActions.md#describedatasource)
- [DescribeDataSourcePermissions](AwsQuicksightActions.md#describedatasourcepermissions)
- [DescribeEmailCustomizationTemplate](AwsQuicksightActions.md#describeemailcustomizationtemplate)
- [DescribeFolder](AwsQuicksightActions.md#describefolder)
- [DescribeFolderPermissions](AwsQuicksightActions.md#describefolderpermissions)
- [DescribeFolderResolvedPermissions](AwsQuicksightActions.md#describefolderresolvedpermissions)
- [DescribeGroup](AwsQuicksightActions.md#describegroup)
- [DescribeGroupMembership](AwsQuicksightActions.md#describegroupmembership)
- [DescribeIAMPolicyAssignment](AwsQuicksightActions.md#describeiampolicyassignment)
- [DescribeIngestion](AwsQuicksightActions.md#describeingestion)
- [DescribeIpRestriction](AwsQuicksightActions.md#describeiprestriction)
- [DescribeNamespace](AwsQuicksightActions.md#describenamespace)
- [DescribeRefreshSchedule](AwsQuicksightActions.md#describerefreshschedule)
- [DescribeRoleCustomPermission](AwsQuicksightActions.md#describerolecustompermission)
- [DescribeTemplate](AwsQuicksightActions.md#describetemplate)
- [DescribeTemplateAlias](AwsQuicksightActions.md#describetemplatealias)
- [DescribeTemplatePermissions](AwsQuicksightActions.md#describetemplatepermissions)
- [DescribeTheme](AwsQuicksightActions.md#describetheme)
- [DescribeThemeAlias](AwsQuicksightActions.md#describethemealias)
- [DescribeThemePermissions](AwsQuicksightActions.md#describethemepermissions)
- [DescribeTopic](AwsQuicksightActions.md#describetopic)
- [DescribeTopicPermissions](AwsQuicksightActions.md#describetopicpermissions)
- [DescribeTopicRefresh](AwsQuicksightActions.md#describetopicrefresh)
- [DescribeTopicRefreshSchedule](AwsQuicksightActions.md#describetopicrefreshschedule)
- [DescribeUser](AwsQuicksightActions.md#describeuser)
- [DescribeVPCConnection](AwsQuicksightActions.md#describevpcconnection)
- [GenerateEmbedUrlForAnonymousUser](AwsQuicksightActions.md#generateembedurlforanonymoususer)
- [GenerateEmbedUrlForRegisteredUser](AwsQuicksightActions.md#generateembedurlforregistereduser)
- [GetAnonymousUserEmbedUrl](AwsQuicksightActions.md#getanonymoususerembedurl)
- [GetAuthCode](AwsQuicksightActions.md#getauthcode)
- [GetDashboardEmbedUrl](AwsQuicksightActions.md#getdashboardembedurl)
- [GetGroupMapping](AwsQuicksightActions.md#getgroupmapping)
- [GetSessionEmbedUrl](AwsQuicksightActions.md#getsessionembedurl)
- [ListAnalyses](AwsQuicksightActions.md#listanalyses)
- [ListAssetBundleExportJobs](AwsQuicksightActions.md#listassetbundleexportjobs)
- [ListAssetBundleImportJobs](AwsQuicksightActions.md#listassetbundleimportjobs)
- [ListCustomPermissions](AwsQuicksightActions.md#listcustompermissions)
- [ListCustomerManagedKeys](AwsQuicksightActions.md#listcustomermanagedkeys)
- [ListDashboardVersions](AwsQuicksightActions.md#listdashboardversions)
- [ListDashboards](AwsQuicksightActions.md#listdashboards)
- [ListDataSets](AwsQuicksightActions.md#listdatasets)
- [ListDataSources](AwsQuicksightActions.md#listdatasources)
- [ListFolderMembers](AwsQuicksightActions.md#listfoldermembers)
- [ListFolders](AwsQuicksightActions.md#listfolders)
- [ListGroupMemberships](AwsQuicksightActions.md#listgroupmemberships)
- [ListGroups](AwsQuicksightActions.md#listgroups)
- [ListIAMPolicyAssignments](AwsQuicksightActions.md#listiampolicyassignments)
- [ListIAMPolicyAssignmentsForUser](AwsQuicksightActions.md#listiampolicyassignmentsforuser)
- [ListIdentityPropagationConfigs](AwsQuicksightActions.md#listidentitypropagationconfigs)
- [ListIngestions](AwsQuicksightActions.md#listingestions)
- [ListKMSKeysForUser](AwsQuicksightActions.md#listkmskeysforuser)
- [ListNamespaces](AwsQuicksightActions.md#listnamespaces)
- [ListRefreshSchedules](AwsQuicksightActions.md#listrefreshschedules)
- [ListRoleMemberships](AwsQuicksightActions.md#listrolememberships)
- [ListTagsForResource](AwsQuicksightActions.md#listtagsforresource)
- [ListTemplateAliases](AwsQuicksightActions.md#listtemplatealiases)
- [ListTemplateVersions](AwsQuicksightActions.md#listtemplateversions)
- [ListTemplates](AwsQuicksightActions.md#listtemplates)
- [ListThemeAliases](AwsQuicksightActions.md#listthemealiases)
- [ListThemeVersions](AwsQuicksightActions.md#listthemeversions)
- [ListThemes](AwsQuicksightActions.md#listthemes)
- [ListTopicRefreshSchedules](AwsQuicksightActions.md#listtopicrefreshschedules)
- [ListTopics](AwsQuicksightActions.md#listtopics)
- [ListUserGroups](AwsQuicksightActions.md#listusergroups)
- [ListUsers](AwsQuicksightActions.md#listusers)
- [ListVPCConnections](AwsQuicksightActions.md#listvpcconnections)
- [PassDataSet](AwsQuicksightActions.md#passdataset)
- [PassDataSource](AwsQuicksightActions.md#passdatasource)
- [PutDataSetRefreshProperties](AwsQuicksightActions.md#putdatasetrefreshproperties)
- [RegisterCustomerManagedKey](AwsQuicksightActions.md#registercustomermanagedkey)
- [RegisterUser](AwsQuicksightActions.md#registeruser)
- [RemoveCustomerManagedKey](AwsQuicksightActions.md#removecustomermanagedkey)
- [RestoreAnalysis](AwsQuicksightActions.md#restoreanalysis)
- [ScopeDownPolicy](AwsQuicksightActions.md#scopedownpolicy)
- [SearchAnalyses](AwsQuicksightActions.md#searchanalyses)
- [SearchDashboards](AwsQuicksightActions.md#searchdashboards)
- [SearchDataSets](AwsQuicksightActions.md#searchdatasets)
- [SearchDataSources](AwsQuicksightActions.md#searchdatasources)
- [SearchDirectoryGroups](AwsQuicksightActions.md#searchdirectorygroups)
- [SearchFolders](AwsQuicksightActions.md#searchfolders)
- [SearchGroups](AwsQuicksightActions.md#searchgroups)
- [SearchUsers](AwsQuicksightActions.md#searchusers)
- [SetGroupMapping](AwsQuicksightActions.md#setgroupmapping)
- [StartAssetBundleExportJob](AwsQuicksightActions.md#startassetbundleexportjob)
- [StartAssetBundleImportJob](AwsQuicksightActions.md#startassetbundleimportjob)
- [StartDashboardSnapshotJob](AwsQuicksightActions.md#startdashboardsnapshotjob)
- [Subscribe](AwsQuicksightActions.md#subscribe)
- [TagResource](AwsQuicksightActions.md#tagresource)
- [Unsubscribe](AwsQuicksightActions.md#unsubscribe)
- [UntagResource](AwsQuicksightActions.md#untagresource)
- [UpdateAccountCustomization](AwsQuicksightActions.md#updateaccountcustomization)
- [UpdateAccountSettings](AwsQuicksightActions.md#updateaccountsettings)
- [UpdateAnalysis](AwsQuicksightActions.md#updateanalysis)
- [UpdateAnalysisPermissions](AwsQuicksightActions.md#updateanalysispermissions)
- [UpdateCustomPermissions](AwsQuicksightActions.md#updatecustompermissions)
- [UpdateDashboard](AwsQuicksightActions.md#updatedashboard)
- [UpdateDashboardLinks](AwsQuicksightActions.md#updatedashboardlinks)
- [UpdateDashboardPermissions](AwsQuicksightActions.md#updatedashboardpermissions)
- [UpdateDashboardPublishedVersion](AwsQuicksightActions.md#updatedashboardpublishedversion)
- [UpdateDataSet](AwsQuicksightActions.md#updatedataset)
- [UpdateDataSetPermissions](AwsQuicksightActions.md#updatedatasetpermissions)
- [UpdateDataSource](AwsQuicksightActions.md#updatedatasource)
- [UpdateDataSourcePermissions](AwsQuicksightActions.md#updatedatasourcepermissions)
- [UpdateEmailCustomizationTemplate](AwsQuicksightActions.md#updateemailcustomizationtemplate)
- [UpdateFolder](AwsQuicksightActions.md#updatefolder)
- [UpdateFolderPermissions](AwsQuicksightActions.md#updatefolderpermissions)
- [UpdateGroup](AwsQuicksightActions.md#updategroup)
- [UpdateIAMPolicyAssignment](AwsQuicksightActions.md#updateiampolicyassignment)
- [UpdateIdentityPropagationConfig](AwsQuicksightActions.md#updateidentitypropagationconfig)
- [UpdateIpRestriction](AwsQuicksightActions.md#updateiprestriction)
- [UpdatePublicSharingSettings](AwsQuicksightActions.md#updatepublicsharingsettings)
- [UpdateRefreshSchedule](AwsQuicksightActions.md#updaterefreshschedule)
- [UpdateResourcePermissions](AwsQuicksightActions.md#updateresourcepermissions)
- [UpdateRoleCustomPermission](AwsQuicksightActions.md#updaterolecustompermission)
- [UpdateTemplate](AwsQuicksightActions.md#updatetemplate)
- [UpdateTemplateAlias](AwsQuicksightActions.md#updatetemplatealias)
- [UpdateTemplatePermissions](AwsQuicksightActions.md#updatetemplatepermissions)
- [UpdateTheme](AwsQuicksightActions.md#updatetheme)
- [UpdateThemeAlias](AwsQuicksightActions.md#updatethemealias)
- [UpdateThemePermissions](AwsQuicksightActions.md#updatethemepermissions)
- [UpdateTopic](AwsQuicksightActions.md#updatetopic)
- [UpdateTopicPermissions](AwsQuicksightActions.md#updatetopicpermissions)
- [UpdateTopicRefreshSchedule](AwsQuicksightActions.md#updatetopicrefreshschedule)
- [UpdateUser](AwsQuicksightActions.md#updateuser)
- [UpdateVPCConnection](AwsQuicksightActions.md#updatevpcconnection)

## Enumeration Members

### AccountConfigurations

• **AccountConfigurations** = ``"quicksight:AccountConfigurations"``

Grants permission to enable setting default access to AWS resources

See https://docs.aws.amazon.com/quicksight/latest/user/accessing-data-sources.html

#### Defined in

actions/quicksight.ts:17

___

### CancelIngestion

• **CancelIngestion** = ``"quicksight:CancelIngestion"``

Grants permission to cancel a SPICE ingestions on a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CancelIngestion.html

#### Defined in

actions/quicksight.ts:23

___

### CreateAccountCustomization

• **CreateAccountCustomization** = ``"quicksight:CreateAccountCustomization"``

Grants permission to create an account customization for QuickSight account or
namespace

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateAccountCustomization.html

#### Defined in

actions/quicksight.ts:30

___

### CreateAccountSubscription

• **CreateAccountSubscription** = ``"quicksight:CreateAccountSubscription"``

Grants permission to subscribe to QuickSight

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateAccountSubscription.html

#### Defined in

actions/quicksight.ts:36

___

### CreateAdmin

• **CreateAdmin** = ``"quicksight:CreateAdmin"``

Grants permission to provision Amazon QuickSight administrators, authors, and r
eaders

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:43

___

### CreateAnalysis

• **CreateAnalysis** = ``"quicksight:CreateAnalysis"``

Grants permission to create an analysis from a template

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateAnalysis.html

#### Defined in

actions/quicksight.ts:49

___

### CreateCustomPermissions

• **CreateCustomPermissions** = ``"quicksight:CreateCustomPermissions"``

Grants permission to create a custom permissions resource for restricting user
access

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:56

___

### CreateDashboard

• **CreateDashboard** = ``"quicksight:CreateDashboard"``

Grants permission to create a QuickSight Dashboard

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDashboard.html

#### Defined in

actions/quicksight.ts:62

___

### CreateDataSet

• **CreateDataSet** = ``"quicksight:CreateDataSet"``

Grants permission to create a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDataSet.html

#### Defined in

actions/quicksight.ts:68

___

### CreateDataSource

• **CreateDataSource** = ``"quicksight:CreateDataSource"``

Grants permission to create a data source

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDataSource.html

#### Defined in

actions/quicksight.ts:74

___

### CreateEmailCustomizationTemplate

• **CreateEmailCustomizationTemplate** = ``"quicksight:CreateEmailCustomizationTemplate"``

Grants permission to create a QuickSight email customization template

See https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html

#### Defined in

actions/quicksight.ts:80

___

### CreateFolder

• **CreateFolder** = ``"quicksight:CreateFolder"``

Grants permission to create a QuickSight folder

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateFolder.html

#### Defined in

actions/quicksight.ts:86

___

### CreateFolderMembership

• **CreateFolderMembership** = ``"quicksight:CreateFolderMembership"``

Grants permission to add a QuickSight Dashboard, Analysis or Dataset to a Quick
Sight Folder

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateFolderMembership.html

#### Defined in

actions/quicksight.ts:93

___

### CreateGroup

• **CreateGroup** = ``"quicksight:CreateGroup"``

Grants permission to create a QuickSight group

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroup.html

#### Defined in

actions/quicksight.ts:99

___

### CreateGroupMembership

• **CreateGroupMembership** = ``"quicksight:CreateGroupMembership"``

Grants permission to add a QuickSight user to a QuickSight group

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroupMembership.html

#### Defined in

actions/quicksight.ts:105

___

### CreateIAMPolicyAssignment

• **CreateIAMPolicyAssignment** = ``"quicksight:CreateIAMPolicyAssignment"``

Grants permission to create an assignment with one specified IAM Policy ARN tha
t will be assigned to specified groups or users of QuickSight

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateIAMPolicyAssignment.html

#### Defined in

actions/quicksight.ts:112

___

### CreateIngestion

• **CreateIngestion** = ``"quicksight:CreateIngestion"``

Grants permission to start a SPICE ingestion on a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateIngestion.html

#### Defined in

actions/quicksight.ts:118

___

### CreateNamespace

• **CreateNamespace** = ``"quicksight:CreateNamespace"``

Grants permission to create an QuickSight namespace

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateNamespace.html

#### Defined in

actions/quicksight.ts:124

___

### CreateReader

• **CreateReader** = ``"quicksight:CreateReader"``

Grants permission to provision Amazon QuickSight readers

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:130

___

### CreateRefreshSchedule

• **CreateRefreshSchedule** = ``"quicksight:CreateRefreshSchedule"``

Grants permission to create a refresh schedule for a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateRefreshSchedule.html

#### Defined in

actions/quicksight.ts:136

___

### CreateRoleMembership

• **CreateRoleMembership** = ``"quicksight:CreateRoleMembership"``

Grants permission to add a group member to a role

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateRoleMembership.html

#### Defined in

actions/quicksight.ts:142

___

### CreateTemplate

• **CreateTemplate** = ``"quicksight:CreateTemplate"``

Grants permission to create a template

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html

#### Defined in

actions/quicksight.ts:148

___

### CreateTemplateAlias

• **CreateTemplateAlias** = ``"quicksight:CreateTemplateAlias"``

Grants permission to create a template alias

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplateAlias.html

#### Defined in

actions/quicksight.ts:154

___

### CreateTheme

• **CreateTheme** = ``"quicksight:CreateTheme"``

Grants permission to create a theme

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTheme.html

#### Defined in

actions/quicksight.ts:160

___

### CreateThemeAlias

• **CreateThemeAlias** = ``"quicksight:CreateThemeAlias"``

Grants permission to create an alias for a theme version

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateThemeAlias.html

#### Defined in

actions/quicksight.ts:166

___

### CreateTopic

• **CreateTopic** = ``"quicksight:CreateTopic"``

Grants permission to create a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTopic.html

#### Defined in

actions/quicksight.ts:172

___

### CreateTopicRefreshSchedule

• **CreateTopicRefreshSchedule** = ``"quicksight:CreateTopicRefreshSchedule"``

Grants permission to create a refresh schedule for a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTopicRefreshSchedule.html

#### Defined in

actions/quicksight.ts:178

___

### CreateUser

• **CreateUser** = ``"quicksight:CreateUser"``

Grants permission to provision Amazon QuickSight authors and readers

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:184

___

### CreateVPCConnection

• **CreateVPCConnection** = ``"quicksight:CreateVPCConnection"``

Grants permission to create a vpc connection

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateVPCConnection.html

#### Defined in

actions/quicksight.ts:190

___

### DeleteAccountCustomization

• **DeleteAccountCustomization** = ``"quicksight:DeleteAccountCustomization"``

Grants permission to delete an account customization for QuickSight account or
namespace

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAccountCustomization.html

#### Defined in

actions/quicksight.ts:197

___

### DeleteAccountSubscription

• **DeleteAccountSubscription** = ``"quicksight:DeleteAccountSubscription"``

Grants permission to delete a QuickSight account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAccountSubscription.html

#### Defined in

actions/quicksight.ts:203

___

### DeleteAnalysis

• **DeleteAnalysis** = ``"quicksight:DeleteAnalysis"``

Grants permission to delete an analysis

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAnalysis.html

#### Defined in

actions/quicksight.ts:209

___

### DeleteCustomPermissions

• **DeleteCustomPermissions** = ``"quicksight:DeleteCustomPermissions"``

Grants permission to delete a custom permissions resource

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:215

___

### DeleteDashboard

• **DeleteDashboard** = ``"quicksight:DeleteDashboard"``

Grants permission to delete a QuickSight Dashboard

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDashboard.html

#### Defined in

actions/quicksight.ts:221

___

### DeleteDataSet

• **DeleteDataSet** = ``"quicksight:DeleteDataSet"``

Grants permission to delete a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDataSet.html

#### Defined in

actions/quicksight.ts:227

___

### DeleteDataSetRefreshProperties

• **DeleteDataSetRefreshProperties** = ``"quicksight:DeleteDataSetRefreshProperties"``

Grants permission to delete dataset refresh properties for a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDataSetRefreshProperties.html

#### Defined in

actions/quicksight.ts:233

___

### DeleteDataSource

• **DeleteDataSource** = ``"quicksight:DeleteDataSource"``

Grants permission to delete a data source

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDataSource.html

#### Defined in

actions/quicksight.ts:239

___

### DeleteEmailCustomizationTemplate

• **DeleteEmailCustomizationTemplate** = ``"quicksight:DeleteEmailCustomizationTemplate"``

Grants permission to delete a QuickSight email customization template

See https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html

#### Defined in

actions/quicksight.ts:245

___

### DeleteFolder

• **DeleteFolder** = ``"quicksight:DeleteFolder"``

Grants permission to delete a QuickSight Folder

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteFolder.html

#### Defined in

actions/quicksight.ts:251

___

### DeleteFolderMembership

• **DeleteFolderMembership** = ``"quicksight:DeleteFolderMembership"``

Grants permission to remove a QuickSight Dashboard, Analysis or Dataset from a
QuickSight Folder

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteFolderMembership.html

#### Defined in

actions/quicksight.ts:258

___

### DeleteGroup

• **DeleteGroup** = ``"quicksight:DeleteGroup"``

Grants permission to remove a user group from QuickSight

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroup.html

#### Defined in

actions/quicksight.ts:264

___

### DeleteGroupMembership

• **DeleteGroupMembership** = ``"quicksight:DeleteGroupMembership"``

Grants permission to remove a user from a group so that he/she is no longer a m
ember of the group

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroupMembership.html

#### Defined in

actions/quicksight.ts:271

___

### DeleteIAMPolicyAssignment

• **DeleteIAMPolicyAssignment** = ``"quicksight:DeleteIAMPolicyAssignment"``

Grants permission to update an existing assignment

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteIAMPolicyAssignment.html

#### Defined in

actions/quicksight.ts:277

___

### DeleteIdentityPropagationConfig

• **DeleteIdentityPropagationConfig** = ``"quicksight:DeleteIdentityPropagationConfig"``

Grants permission to remove AWS services for trusted identity propagation in Qu
ickSight

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteIdentityPropagationConfig.html

#### Defined in

actions/quicksight.ts:284

___

### DeleteNamespace

• **DeleteNamespace** = ``"quicksight:DeleteNamespace"``

Grants permission to delete a QuickSight namespace

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteNamespace.html

#### Defined in

actions/quicksight.ts:290

___

### DeleteRefreshSchedule

• **DeleteRefreshSchedule** = ``"quicksight:DeleteRefreshSchedule"``

Grants permission to delete a refresh schedule for a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteRefreshSchedule.html

#### Defined in

actions/quicksight.ts:296

___

### DeleteRoleCustomPermission

• **DeleteRoleCustomPermission** = ``"quicksight:DeleteRoleCustomPermission"``

Grants permission to remove the custom permission associated with a role

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteRoleCustomPermission.html

#### Defined in

actions/quicksight.ts:302

___

### DeleteRoleMembership

• **DeleteRoleMembership** = ``"quicksight:DeleteRoleMembership"``

Grants permission to remove a group member from a role

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteRoleMembership.html

#### Defined in

actions/quicksight.ts:308

___

### DeleteTemplate

• **DeleteTemplate** = ``"quicksight:DeleteTemplate"``

Grants permission to delete a template

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplate.html

#### Defined in

actions/quicksight.ts:314

___

### DeleteTemplateAlias

• **DeleteTemplateAlias** = ``"quicksight:DeleteTemplateAlias"``

Grants permission to delete a template alias

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplateAlias.html

#### Defined in

actions/quicksight.ts:320

___

### DeleteTheme

• **DeleteTheme** = ``"quicksight:DeleteTheme"``

Grants permission to delete a theme

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTheme.html

#### Defined in

actions/quicksight.ts:326

___

### DeleteThemeAlias

• **DeleteThemeAlias** = ``"quicksight:DeleteThemeAlias"``

Grants permission to delete the alias of a theme

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteThemeAlias.html

#### Defined in

actions/quicksight.ts:332

___

### DeleteTopic

• **DeleteTopic** = ``"quicksight:DeleteTopic"``

Grants permission to delete a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTopic.html

#### Defined in

actions/quicksight.ts:338

___

### DeleteTopicRefreshSchedule

• **DeleteTopicRefreshSchedule** = ``"quicksight:DeleteTopicRefreshSchedule"``

Grants permission to delete a refresh schedule for a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTopicRefreshSchedule.html

#### Defined in

actions/quicksight.ts:344

___

### DeleteUser

• **DeleteUser** = ``"quicksight:DeleteUser"``

Grants permission to delete a QuickSight user, given the user name

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUser.html

#### Defined in

actions/quicksight.ts:350

___

### DeleteUserByPrincipalId

• **DeleteUserByPrincipalId** = ``"quicksight:DeleteUserByPrincipalId"``

Grants permission to deletes a user identified by its principal ID

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUserByPrincipalId.html

#### Defined in

actions/quicksight.ts:356

___

### DeleteVPCConnection

• **DeleteVPCConnection** = ``"quicksight:DeleteVPCConnection"``

Grants permission to delete a vpc connection

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteVPCConnection.html

#### Defined in

actions/quicksight.ts:362

___

### DescribeAccountCustomization

• **DescribeAccountCustomization** = ``"quicksight:DescribeAccountCustomization"``

Grants permission to describe an account customization for QuickSight account o
r namespace

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAccountCustomization.html

#### Defined in

actions/quicksight.ts:369

___

### DescribeAccountSettings

• **DescribeAccountSettings** = ``"quicksight:DescribeAccountSettings"``

Grants permission to describe the administrative account settings for QuickSigh
t account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAccountSettings.html

#### Defined in

actions/quicksight.ts:376

___

### DescribeAccountSubscription

• **DescribeAccountSubscription** = ``"quicksight:DescribeAccountSubscription"``

Grants permission to describe a QuickSight account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAccountSubscription.html

#### Defined in

actions/quicksight.ts:382

___

### DescribeAnalysis

• **DescribeAnalysis** = ``"quicksight:DescribeAnalysis"``

Grants permission to describe an analysis

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAnalysis.html

#### Defined in

actions/quicksight.ts:388

___

### DescribeAnalysisPermissions

• **DescribeAnalysisPermissions** = ``"quicksight:DescribeAnalysisPermissions"``

Grants permission to describe permissions for an analysis

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAnalysisPermissions.html

#### Defined in

actions/quicksight.ts:394

___

### DescribeAssetBundleExportJob

• **DescribeAssetBundleExportJob** = ``"quicksight:DescribeAssetBundleExportJob"``

Grants permission to describe an asset bundle export job

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAssetBundleExportJob.html

#### Defined in

actions/quicksight.ts:400

___

### DescribeAssetBundleImportJob

• **DescribeAssetBundleImportJob** = ``"quicksight:DescribeAssetBundleImportJob"``

Grants permission to describe an asset bundle import job

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAssetBundleImportJob.html

#### Defined in

actions/quicksight.ts:406

___

### DescribeCustomPermissions

• **DescribeCustomPermissions** = ``"quicksight:DescribeCustomPermissions"``

Grants permission to describe a custom permissions resource in a QuickSight acc
ount

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:413

___

### DescribeDashboard

• **DescribeDashboard** = ``"quicksight:DescribeDashboard"``

Grants permission to describe a QuickSight Dashboard

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboard.html

#### Defined in

actions/quicksight.ts:419

___

### DescribeDashboardPermissions

• **DescribeDashboardPermissions** = ``"quicksight:DescribeDashboardPermissions"``

Grants permission to describe permissions for a QuickSight Dashboard

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardPermissions.html

#### Defined in

actions/quicksight.ts:425

___

### DescribeDashboardSnapshotJob

• **DescribeDashboardSnapshotJob** = ``"quicksight:DescribeDashboardSnapshotJob"``

Grants permission to describe a dashboard snapshot job

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardSnapshotJob.html

#### Defined in

actions/quicksight.ts:431

___

### DescribeDashboardSnapshotJobResult

• **DescribeDashboardSnapshotJobResult** = ``"quicksight:DescribeDashboardSnapshotJobResult"``

Grants permission to describe result of a dashboard snapshot job

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardSnapshotJobResult.html

#### Defined in

actions/quicksight.ts:437

___

### DescribeDataSet

• **DescribeDataSet** = ``"quicksight:DescribeDataSet"``

Grants permission to describe a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSet.html

#### Defined in

actions/quicksight.ts:443

___

### DescribeDataSetPermissions

• **DescribeDataSetPermissions** = ``"quicksight:DescribeDataSetPermissions"``

Grants permission to describe the resource policy of a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSetPermissions.html

#### Defined in

actions/quicksight.ts:449

___

### DescribeDataSetRefreshProperties

• **DescribeDataSetRefreshProperties** = ``"quicksight:DescribeDataSetRefreshProperties"``

Grants permission to describe refresh properties for a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSetRefreshProperties.html

#### Defined in

actions/quicksight.ts:455

___

### DescribeDataSource

• **DescribeDataSource** = ``"quicksight:DescribeDataSource"``

Grants permission to describe a data source

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSource.html

#### Defined in

actions/quicksight.ts:461

___

### DescribeDataSourcePermissions

• **DescribeDataSourcePermissions** = ``"quicksight:DescribeDataSourcePermissions"``

Grants permission to describe the resource policy of a data source

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSourcePermissions.html

#### Defined in

actions/quicksight.ts:467

___

### DescribeEmailCustomizationTemplate

• **DescribeEmailCustomizationTemplate** = ``"quicksight:DescribeEmailCustomizationTemplate"``

Grants permission to describe a QuickSight email customization template

See https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html

#### Defined in

actions/quicksight.ts:473

___

### DescribeFolder

• **DescribeFolder** = ``"quicksight:DescribeFolder"``

Grants permission to describe a QuickSight Folder

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeFolder.html

#### Defined in

actions/quicksight.ts:479

___

### DescribeFolderPermissions

• **DescribeFolderPermissions** = ``"quicksight:DescribeFolderPermissions"``

Grants permission to describe permissions for a QuickSight Folder

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeFolderPermissions.html

#### Defined in

actions/quicksight.ts:485

___

### DescribeFolderResolvedPermissions

• **DescribeFolderResolvedPermissions** = ``"quicksight:DescribeFolderResolvedPermissions"``

Grants permission to describe resolved permissions for a QuickSight Folder

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeFolderResolvedPermissions.html

#### Defined in

actions/quicksight.ts:491

___

### DescribeGroup

• **DescribeGroup** = ``"quicksight:DescribeGroup"``

Grants permission to describe a QuickSight group

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeGroup.html

#### Defined in

actions/quicksight.ts:497

___

### DescribeGroupMembership

• **DescribeGroupMembership** = ``"quicksight:DescribeGroupMembership"``

Grants permission to describe a QuickSight group member

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeGroupMembership.html

#### Defined in

actions/quicksight.ts:503

___

### DescribeIAMPolicyAssignment

• **DescribeIAMPolicyAssignment** = ``"quicksight:DescribeIAMPolicyAssignment"``

Grants permission to describe an existing assignment

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIAMPolicyAssignment.html

#### Defined in

actions/quicksight.ts:509

___

### DescribeIngestion

• **DescribeIngestion** = ``"quicksight:DescribeIngestion"``

Grants permission to describe a SPICE ingestion on a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIngestion.html

#### Defined in

actions/quicksight.ts:515

___

### DescribeIpRestriction

• **DescribeIpRestriction** = ``"quicksight:DescribeIpRestriction"``

Grants permission to describe the IP restrictions for QuickSight account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIpRestriction.html

#### Defined in

actions/quicksight.ts:521

___

### DescribeNamespace

• **DescribeNamespace** = ``"quicksight:DescribeNamespace"``

Grants permission to describe a QuickSight namespace

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeNamespace.html

#### Defined in

actions/quicksight.ts:527

___

### DescribeRefreshSchedule

• **DescribeRefreshSchedule** = ``"quicksight:DescribeRefreshSchedule"``

Grants permission to describe a refresh schedule for a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeRefreshSchedule.html

#### Defined in

actions/quicksight.ts:533

___

### DescribeRoleCustomPermission

• **DescribeRoleCustomPermission** = ``"quicksight:DescribeRoleCustomPermission"``

Grants permission to describe the custom permission associated with a role

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeRoleCustomPermission.html

#### Defined in

actions/quicksight.ts:539

___

### DescribeTemplate

• **DescribeTemplate** = ``"quicksight:DescribeTemplate"``

Grants permission to describe a template

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplate.html

#### Defined in

actions/quicksight.ts:545

___

### DescribeTemplateAlias

• **DescribeTemplateAlias** = ``"quicksight:DescribeTemplateAlias"``

Grants permission to describe a template alias

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplateAlias.html

#### Defined in

actions/quicksight.ts:551

___

### DescribeTemplatePermissions

• **DescribeTemplatePermissions** = ``"quicksight:DescribeTemplatePermissions"``

Grants permission to describe permissions for a template

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplatePermissions.html

#### Defined in

actions/quicksight.ts:557

___

### DescribeTheme

• **DescribeTheme** = ``"quicksight:DescribeTheme"``

Grants permission to describe a theme

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTheme.html

#### Defined in

actions/quicksight.ts:563

___

### DescribeThemeAlias

• **DescribeThemeAlias** = ``"quicksight:DescribeThemeAlias"``

Grants permission to describe a theme alias

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemeAlias.html

#### Defined in

actions/quicksight.ts:569

___

### DescribeThemePermissions

• **DescribeThemePermissions** = ``"quicksight:DescribeThemePermissions"``

Grants permission to describe permissions for a theme

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemePermissions.html

#### Defined in

actions/quicksight.ts:575

___

### DescribeTopic

• **DescribeTopic** = ``"quicksight:DescribeTopic"``

Grants permission to describe a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTopic.html

#### Defined in

actions/quicksight.ts:581

___

### DescribeTopicPermissions

• **DescribeTopicPermissions** = ``"quicksight:DescribeTopicPermissions"``

Grants permission to describe the resource policy of a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTopicPermissions.html

#### Defined in

actions/quicksight.ts:587

___

### DescribeTopicRefresh

• **DescribeTopicRefresh** = ``"quicksight:DescribeTopicRefresh"``

Grants permission to describe the refresh status of a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTopicRefresh.html

#### Defined in

actions/quicksight.ts:593

___

### DescribeTopicRefreshSchedule

• **DescribeTopicRefreshSchedule** = ``"quicksight:DescribeTopicRefreshSchedule"``

Grants permission to describe a refresh schedule for a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTopicRefreshSchedule.html

#### Defined in

actions/quicksight.ts:599

___

### DescribeUser

• **DescribeUser** = ``"quicksight:DescribeUser"``

Grants permission to describe a QuickSight user given the user name

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeUser.html

#### Defined in

actions/quicksight.ts:605

___

### DescribeVPCConnection

• **DescribeVPCConnection** = ``"quicksight:DescribeVPCConnection"``

Grants permission to describe a vpc connection

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeVPCConnection.html

#### Defined in

actions/quicksight.ts:611

___

### GenerateEmbedUrlForAnonymousUser

• **GenerateEmbedUrlForAnonymousUser** = ``"quicksight:GenerateEmbedUrlForAnonymousUser"``

Grants permission to generate a URL used to embed a QuickSight Dashboard or Q T
opic for a user not registered with QuickSight

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForAnonymousUser.html

#### Defined in

actions/quicksight.ts:618

___

### GenerateEmbedUrlForRegisteredUser

• **GenerateEmbedUrlForRegisteredUser** = ``"quicksight:GenerateEmbedUrlForRegisteredUser"``

Grants permission to generate a URL used to embed a QuickSight Dashboard for a
user registered with QuickSight

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForRegisteredUser.html

#### Defined in

actions/quicksight.ts:625

___

### GetAnonymousUserEmbedUrl

• **GetAnonymousUserEmbedUrl** = ``"quicksight:GetAnonymousUserEmbedUrl"``

Grants permission to get a URL used to embed a QuickSight Dashboard for a user
not registered with QuickSight

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:632

___

### GetAuthCode

• **GetAuthCode** = ``"quicksight:GetAuthCode"``

Grants permission to get an auth code representing a QuickSight user

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:638

___

### GetDashboardEmbedUrl

• **GetDashboardEmbedUrl** = ``"quicksight:GetDashboardEmbedUrl"``

Grants permission to get a URL used to embed a QuickSight Dashboard

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html

#### Defined in

actions/quicksight.ts:644

___

### GetGroupMapping

• **GetGroupMapping** = ``"quicksight:GetGroupMapping"``

Grants permission to use Amazon QuickSight, in Enterprise edition, to identify
and display the Microsoft Active Directory (Microsoft Active Directory) directo
ry groups that are mapped to roles in Amazon QuickSight

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:652

___

### GetSessionEmbedUrl

• **GetSessionEmbedUrl** = ``"quicksight:GetSessionEmbedUrl"``

Grants permission to get a URL to embed QuickSight console experience

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetSessionEmbedUrl.html

#### Defined in

actions/quicksight.ts:658

___

### ListAnalyses

• **ListAnalyses** = ``"quicksight:ListAnalyses"``

Grants permission to list all analyses in an account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAnalyses.html

#### Defined in

actions/quicksight.ts:664

___

### ListAssetBundleExportJobs

• **ListAssetBundleExportJobs** = ``"quicksight:ListAssetBundleExportJobs"``

Grants permission to list all asset bundle export jobs

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAssetBundleExportJobs.html

#### Defined in

actions/quicksight.ts:670

___

### ListAssetBundleImportJobs

• **ListAssetBundleImportJobs** = ``"quicksight:ListAssetBundleImportJobs"``

Grants permission to list all asset bundle import jobs

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAssetBundleImportJobs.html

#### Defined in

actions/quicksight.ts:676

___

### ListCustomPermissions

• **ListCustomPermissions** = ``"quicksight:ListCustomPermissions"``

Grants permission to list custom permissions resources in QuickSight account

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:682

___

### ListCustomerManagedKeys

• **ListCustomerManagedKeys** = ``"quicksight:ListCustomerManagedKeys"``

Grants permission to list all registered customer managed keys

See https://docs.aws.amazon.com/quicksight/latest/user/key-management.html

#### Defined in

actions/quicksight.ts:688

___

### ListDashboardVersions

• **ListDashboardVersions** = ``"quicksight:ListDashboardVersions"``

Grants permission to list all versions of a QuickSight Dashboard

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboardVersions.html

#### Defined in

actions/quicksight.ts:694

___

### ListDashboards

• **ListDashboards** = ``"quicksight:ListDashboards"``

Grants permission to list all Dashboards in a QuickSight Account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboards.html

#### Defined in

actions/quicksight.ts:700

___

### ListDataSets

• **ListDataSets** = ``"quicksight:ListDataSets"``

Grants permission to list all datasets

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDataSets.html

#### Defined in

actions/quicksight.ts:706

___

### ListDataSources

• **ListDataSources** = ``"quicksight:ListDataSources"``

Grants permission to list all data sources

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDataSources.html

#### Defined in

actions/quicksight.ts:712

___

### ListFolderMembers

• **ListFolderMembers** = ``"quicksight:ListFolderMembers"``

Grants permission to list all members in a folder

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListFolderMembers.html

#### Defined in

actions/quicksight.ts:718

___

### ListFolders

• **ListFolders** = ``"quicksight:ListFolders"``

Grants permission to list all Folders in a QuickSight Account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListFolders.html

#### Defined in

actions/quicksight.ts:724

___

### ListGroupMemberships

• **ListGroupMemberships** = ``"quicksight:ListGroupMemberships"``

Grants permission to list member users in a group

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroupMemberships.html

#### Defined in

actions/quicksight.ts:730

___

### ListGroups

• **ListGroups** = ``"quicksight:ListGroups"``

Grants permission to list all user groups in QuickSight

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroups.html

#### Defined in

actions/quicksight.ts:736

___

### ListIAMPolicyAssignments

• **ListIAMPolicyAssignments** = ``"quicksight:ListIAMPolicyAssignments"``

Grants permission to list all assignments in the current Amazon QuickSight acco
unt

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignments.html

#### Defined in

actions/quicksight.ts:743

___

### ListIAMPolicyAssignmentsForUser

• **ListIAMPolicyAssignmentsForUser** = ``"quicksight:ListIAMPolicyAssignmentsForUser"``

Grants permission to list all assignments assigned to a user and the groups it
belongs

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignmentsForUser.html

#### Defined in

actions/quicksight.ts:750

___

### ListIdentityPropagationConfigs

• **ListIdentityPropagationConfigs** = ``"quicksight:ListIdentityPropagationConfigs"``

Grants permission to list AWS services enabled for trusted identity propagation
in QuickSight

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIdentityPropagationConfigs.html

#### Defined in

actions/quicksight.ts:757

___

### ListIngestions

• **ListIngestions** = ``"quicksight:ListIngestions"``

Grants permission to list all SPICE ingestions on a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIngestions.html

#### Defined in

actions/quicksight.ts:763

___

### ListKMSKeysForUser

• **ListKMSKeysForUser** = ``"quicksight:ListKMSKeysForUser"``

Grants permission to list a user's KMS keys

See https://docs.aws.amazon.com/quicksight/latest/user/key-management.html

#### Defined in

actions/quicksight.ts:769

___

### ListNamespaces

• **ListNamespaces** = ``"quicksight:ListNamespaces"``

Grants permission to lists all namespaces in a QuickSight account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListNamespaces.html

#### Defined in

actions/quicksight.ts:775

___

### ListRefreshSchedules

• **ListRefreshSchedules** = ``"quicksight:ListRefreshSchedules"``

Grants permission to list all refresh schedules on a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListRefreshSchedules.html

#### Defined in

actions/quicksight.ts:781

___

### ListRoleMemberships

• **ListRoleMemberships** = ``"quicksight:ListRoleMemberships"``

Grants permission to list the members of a role

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListRoleMemberships.html

#### Defined in

actions/quicksight.ts:787

___

### ListTagsForResource

• **ListTagsForResource** = ``"quicksight:ListTagsForResource"``

Grants permission to list tags of a QuickSight resource

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/quicksight.ts:793

___

### ListTemplateAliases

• **ListTemplateAliases** = ``"quicksight:ListTemplateAliases"``

Grants permission to list all aliases for a template

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateAliases.html

#### Defined in

actions/quicksight.ts:799

___

### ListTemplateVersions

• **ListTemplateVersions** = ``"quicksight:ListTemplateVersions"``

Grants permission to list all versions of a template

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateVersions.html

#### Defined in

actions/quicksight.ts:805

___

### ListTemplates

• **ListTemplates** = ``"quicksight:ListTemplates"``

Grants permission to list all templates in a QuickSight account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplates.html

#### Defined in

actions/quicksight.ts:811

___

### ListThemeAliases

• **ListThemeAliases** = ``"quicksight:ListThemeAliases"``

Grants permission to list all aliases of a theme

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeAliases.html

#### Defined in

actions/quicksight.ts:817

___

### ListThemeVersions

• **ListThemeVersions** = ``"quicksight:ListThemeVersions"``

Grants permission to list all versions of a theme

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeVersions.html

#### Defined in

actions/quicksight.ts:823

___

### ListThemes

• **ListThemes** = ``"quicksight:ListThemes"``

Grants permission to list all themes in an account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemes.html

#### Defined in

actions/quicksight.ts:829

___

### ListTopicRefreshSchedules

• **ListTopicRefreshSchedules** = ``"quicksight:ListTopicRefreshSchedules"``

Grants permission to list all refresh schedules on a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTopicRefreshSchedules.html

#### Defined in

actions/quicksight.ts:835

___

### ListTopics

• **ListTopics** = ``"quicksight:ListTopics"``

Grants permission to list all topics

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTopics.html

#### Defined in

actions/quicksight.ts:841

___

### ListUserGroups

• **ListUserGroups** = ``"quicksight:ListUserGroups"``

Grants permission to list groups that a given user is a member of

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUserGroups.html

#### Defined in

actions/quicksight.ts:847

___

### ListUsers

• **ListUsers** = ``"quicksight:ListUsers"``

Grants permission to list all of the QuickSight users belonging to this account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUsers.html

#### Defined in

actions/quicksight.ts:853

___

### ListVPCConnections

• **ListVPCConnections** = ``"quicksight:ListVPCConnections"``

Grants permission to list all vpc connections

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListVPCConnections.html

#### Defined in

actions/quicksight.ts:859

___

### PassDataSet

• **PassDataSet** = ``"quicksight:PassDataSet"``

Grants permission to use a dataset for a template

See https://docs.aws.amazon.com/quicksight/latest/APIReference/qs-api-overview.html

#### Defined in

actions/quicksight.ts:865

___

### PassDataSource

• **PassDataSource** = ``"quicksight:PassDataSource"``

Grants permission to use a data source for a data set

See https://docs.aws.amazon.com/quicksight/latest/APIReference/qs-api-overview.html

#### Defined in

actions/quicksight.ts:871

___

### PutDataSetRefreshProperties

• **PutDataSetRefreshProperties** = ``"quicksight:PutDataSetRefreshProperties"``

Grants permission to put dataset refresh properties for a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_PutDataSetRefreshProperties.html

#### Defined in

actions/quicksight.ts:877

___

### RegisterCustomerManagedKey

• **RegisterCustomerManagedKey** = ``"quicksight:RegisterCustomerManagedKey"``

Grants permission to register a customer managed key

See https://docs.aws.amazon.com/quicksight/latest/user/key-management.html

#### Defined in

actions/quicksight.ts:883

___

### RegisterUser

• **RegisterUser** = ``"quicksight:RegisterUser"``

Grants permission to create a QuickSight user, whose identity is associated wit
h the IAM identity/role specified in the request

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html

#### Defined in

actions/quicksight.ts:890

___

### RemoveCustomerManagedKey

• **RemoveCustomerManagedKey** = ``"quicksight:RemoveCustomerManagedKey"``

Grants permission to remove a customer managed key

See https://docs.aws.amazon.com/quicksight/latest/user/key-management.html

#### Defined in

actions/quicksight.ts:896

___

### RestoreAnalysis

• **RestoreAnalysis** = ``"quicksight:RestoreAnalysis"``

Grants permission to restore a deleted analysis

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RestoreAnalysis.html

#### Defined in

actions/quicksight.ts:902

___

### ScopeDownPolicy

• **ScopeDownPolicy** = ``"quicksight:ScopeDownPolicy"``

Grants permission to manage scoping policies for permissions to AWS resources

See https://docs.aws.amazon.com/quicksight/latest/user/accessing-data-sources.html

#### Defined in

actions/quicksight.ts:908

___

### SearchAnalyses

• **SearchAnalyses** = ``"quicksight:SearchAnalyses"``

Grants permission to search for a sub-set of analyses

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchAnalyses.html

#### Defined in

actions/quicksight.ts:914

___

### SearchDashboards

• **SearchDashboards** = ``"quicksight:SearchDashboards"``

Grants permission to search for a sub-set of QuickSight Dashboards

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchDashboards.html

#### Defined in

actions/quicksight.ts:920

___

### SearchDataSets

• **SearchDataSets** = ``"quicksight:SearchDataSets"``

Grants permission to search for a sub-set of QuickSight DatSets

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchDataSets.html

#### Defined in

actions/quicksight.ts:926

___

### SearchDataSources

• **SearchDataSources** = ``"quicksight:SearchDataSources"``

Grants permission to search for a sub-set of QuickSight Data Sources

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchDataSources.html

#### Defined in

actions/quicksight.ts:932

___

### SearchDirectoryGroups

• **SearchDirectoryGroups** = ``"quicksight:SearchDirectoryGroups"``

Grants permission to use Amazon QuickSight, in Enterprise edition, to display y
our Microsoft Active Directory directory groups so that you can choose which on
es to map to roles in Amazon QuickSight

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:940

___

### SearchFolders

• **SearchFolders** = ``"quicksight:SearchFolders"``

Grants permission to search for a sub-set of QuickSight Folders

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchFolders.html

#### Defined in

actions/quicksight.ts:946

___

### SearchGroups

• **SearchGroups** = ``"quicksight:SearchGroups"``

Grants permission to search for a sub-set of QuickSight groups

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchGroups.html

#### Defined in

actions/quicksight.ts:952

___

### SearchUsers

• **SearchUsers** = ``"quicksight:SearchUsers"``

Grants permission to search the QuickSight users belonging to this account

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:958

___

### SetGroupMapping

• **SetGroupMapping** = ``"quicksight:SetGroupMapping"``

Grants permission to use Amazon QuickSight, in Enterprise edition, to display y
our Microsoft Active Directory directory groups so that you can choose which on
es to map to roles in Amazon QuickSight

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:966

___

### StartAssetBundleExportJob

• **StartAssetBundleExportJob** = ``"quicksight:StartAssetBundleExportJob"``

Grants permission to start an asset bundle export job

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StartAssetBundleExportJob.html

#### Defined in

actions/quicksight.ts:972

___

### StartAssetBundleImportJob

• **StartAssetBundleImportJob** = ``"quicksight:StartAssetBundleImportJob"``

Grants permission to start an asset bundle import job

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StartAssetBundleImportJob.html

#### Defined in

actions/quicksight.ts:978

___

### StartDashboardSnapshotJob

• **StartDashboardSnapshotJob** = ``"quicksight:StartDashboardSnapshotJob"``

Grants permission to start a dashboard snapshot job

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StartDashboardSnapshotJob.html

#### Defined in

actions/quicksight.ts:984

___

### Subscribe

• **Subscribe** = ``"quicksight:Subscribe"``

Grants permission to subscribe to Amazon QuickSight, and also to allow the user
to upgrade the subscription to Enterprise edition

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:991

___

### TagResource

• **TagResource** = ``"quicksight:TagResource"``

Grants permission to add tags to a QuickSight resource

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagResource.html

#### Defined in

actions/quicksight.ts:997

___

### Unsubscribe

• **Unsubscribe** = ``"quicksight:Unsubscribe"``

Grants permission to unsubscribe from Amazon QuickSight, which permanently dele
tes all users and their resources from Amazon QuickSight

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:1004

___

### UntagResource

• **UntagResource** = ``"quicksight:UntagResource"``

Grants permission to remove tags from a QuickSight resource

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UntagResource.html

#### Defined in

actions/quicksight.ts:1010

___

### UpdateAccountCustomization

• **UpdateAccountCustomization** = ``"quicksight:UpdateAccountCustomization"``

Grants permission to update an account customization for QuickSight account or
namespace

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAccountCustomization.html

#### Defined in

actions/quicksight.ts:1017

___

### UpdateAccountSettings

• **UpdateAccountSettings** = ``"quicksight:UpdateAccountSettings"``

Grants permission to update the administrative account settings for QuickSight
account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAccountSettings.html

#### Defined in

actions/quicksight.ts:1024

___

### UpdateAnalysis

• **UpdateAnalysis** = ``"quicksight:UpdateAnalysis"``

Grants permission to update an analysis

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAnalysis.html

#### Defined in

actions/quicksight.ts:1030

___

### UpdateAnalysisPermissions

• **UpdateAnalysisPermissions** = ``"quicksight:UpdateAnalysisPermissions"``

Grants permission to update permissions for an analysis

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAnalysisPermissions.html

#### Defined in

actions/quicksight.ts:1036

___

### UpdateCustomPermissions

• **UpdateCustomPermissions** = ``"quicksight:UpdateCustomPermissions"``

Grants permission to update a custom permissions resource

See https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html

#### Defined in

actions/quicksight.ts:1042

___

### UpdateDashboard

• **UpdateDashboard** = ``"quicksight:UpdateDashboard"``

Grants permission to update a QuickSight Dashboard

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboard.html

#### Defined in

actions/quicksight.ts:1048

___

### UpdateDashboardLinks

• **UpdateDashboardLinks** = ``"quicksight:UpdateDashboardLinks"``

Grants permission to update a QuickSight Dashboard’s links

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardLinks.html

#### Defined in

actions/quicksight.ts:1054

___

### UpdateDashboardPermissions

• **UpdateDashboardPermissions** = ``"quicksight:UpdateDashboardPermissions"``

Grants permission to update permissions for a QuickSight Dashboard

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPermissions.html

#### Defined in

actions/quicksight.ts:1060

___

### UpdateDashboardPublishedVersion

• **UpdateDashboardPublishedVersion** = ``"quicksight:UpdateDashboardPublishedVersion"``

Grants permission to update a QuickSight Dashboard’s Published Version

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPublishedVersion.html

#### Defined in

actions/quicksight.ts:1066

___

### UpdateDataSet

• **UpdateDataSet** = ``"quicksight:UpdateDataSet"``

Grants permission to update a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSet.html

#### Defined in

actions/quicksight.ts:1072

___

### UpdateDataSetPermissions

• **UpdateDataSetPermissions** = ``"quicksight:UpdateDataSetPermissions"``

Grants permission to update the resource policy of a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSetPermissions.html

#### Defined in

actions/quicksight.ts:1078

___

### UpdateDataSource

• **UpdateDataSource** = ``"quicksight:UpdateDataSource"``

Grants permission to update a data source

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSource.html

#### Defined in

actions/quicksight.ts:1084

___

### UpdateDataSourcePermissions

• **UpdateDataSourcePermissions** = ``"quicksight:UpdateDataSourcePermissions"``

Grants permission to update the resource policy of a data source

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSourcePermissions.html

#### Defined in

actions/quicksight.ts:1090

___

### UpdateEmailCustomizationTemplate

• **UpdateEmailCustomizationTemplate** = ``"quicksight:UpdateEmailCustomizationTemplate"``

Grants permission to update a QuickSight email customization template

See https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html

#### Defined in

actions/quicksight.ts:1096

___

### UpdateFolder

• **UpdateFolder** = ``"quicksight:UpdateFolder"``

Grants permission to update a QuickSight Folder

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateFolder.html

#### Defined in

actions/quicksight.ts:1102

___

### UpdateFolderPermissions

• **UpdateFolderPermissions** = ``"quicksight:UpdateFolderPermissions"``

Grants permission to update permissions for a QuickSight Folder

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateFolderPermissions.html

#### Defined in

actions/quicksight.ts:1108

___

### UpdateGroup

• **UpdateGroup** = ``"quicksight:UpdateGroup"``

Grants permission to change group description

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateGroup.html

#### Defined in

actions/quicksight.ts:1114

___

### UpdateIAMPolicyAssignment

• **UpdateIAMPolicyAssignment** = ``"quicksight:UpdateIAMPolicyAssignment"``

Grants permission to update an existing assignment

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIAMPolicyAssignment.html

#### Defined in

actions/quicksight.ts:1120

___

### UpdateIdentityPropagationConfig

• **UpdateIdentityPropagationConfig** = ``"quicksight:UpdateIdentityPropagationConfig"``

Grants permission to add and update AWS services for trusted identity propagati
on in QuickSight

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIdentityPropagationConfig.html

#### Defined in

actions/quicksight.ts:1127

___

### UpdateIpRestriction

• **UpdateIpRestriction** = ``"quicksight:UpdateIpRestriction"``

Grants permission to update the IP restrictions for QuickSight account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIpRestriction.html

#### Defined in

actions/quicksight.ts:1133

___

### UpdatePublicSharingSettings

• **UpdatePublicSharingSettings** = ``"quicksight:UpdatePublicSharingSettings"``

Grants permission to enable or disable public sharing on an account

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdatePublicSharingSettings.html

#### Defined in

actions/quicksight.ts:1139

___

### UpdateRefreshSchedule

• **UpdateRefreshSchedule** = ``"quicksight:UpdateRefreshSchedule"``

Grants permission to update a refresh schedule for a dataset

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateRefreshSchedule.html

#### Defined in

actions/quicksight.ts:1145

___

### UpdateResourcePermissions

• **UpdateResourcePermissions** = ``"quicksight:UpdateResourcePermissions"``

Grants permission to update resource-level permissions in QuickSight

See https://docs.aws.amazon.com/quicksight/latest/user/security_iam_service-with-iam.html

#### Defined in

actions/quicksight.ts:1151

___

### UpdateRoleCustomPermission

• **UpdateRoleCustomPermission** = ``"quicksight:UpdateRoleCustomPermission"``

Grants permission to update the custom permission associated with a role

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateRoleCustomPermission.html

#### Defined in

actions/quicksight.ts:1157

___

### UpdateTemplate

• **UpdateTemplate** = ``"quicksight:UpdateTemplate"``

Grants permission to update a template

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplate.html

#### Defined in

actions/quicksight.ts:1163

___

### UpdateTemplateAlias

• **UpdateTemplateAlias** = ``"quicksight:UpdateTemplateAlias"``

Grants permission to update a template alias

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplateAlias.html

#### Defined in

actions/quicksight.ts:1169

___

### UpdateTemplatePermissions

• **UpdateTemplatePermissions** = ``"quicksight:UpdateTemplatePermissions"``

Grants permission to update permissions for a template

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplatePermissions.html

#### Defined in

actions/quicksight.ts:1175

___

### UpdateTheme

• **UpdateTheme** = ``"quicksight:UpdateTheme"``

Grants permission to update a theme

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTheme.html

#### Defined in

actions/quicksight.ts:1181

___

### UpdateThemeAlias

• **UpdateThemeAlias** = ``"quicksight:UpdateThemeAlias"``

Grants permission to update the alias of a theme

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemeAlias.html

#### Defined in

actions/quicksight.ts:1187

___

### UpdateThemePermissions

• **UpdateThemePermissions** = ``"quicksight:UpdateThemePermissions"``

Grants permission to update permissions for a theme

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemePermissions.html

#### Defined in

actions/quicksight.ts:1193

___

### UpdateTopic

• **UpdateTopic** = ``"quicksight:UpdateTopic"``

Grants permission to update a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTopic.html

#### Defined in

actions/quicksight.ts:1199

___

### UpdateTopicPermissions

• **UpdateTopicPermissions** = ``"quicksight:UpdateTopicPermissions"``

Grants permission to update the resource policy of a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTopicPermissions.html

#### Defined in

actions/quicksight.ts:1205

___

### UpdateTopicRefreshSchedule

• **UpdateTopicRefreshSchedule** = ``"quicksight:UpdateTopicRefreshSchedule"``

Grants permission to update a refresh schedule for a topic

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTopicRefreshSchedule.html

#### Defined in

actions/quicksight.ts:1211

___

### UpdateUser

• **UpdateUser** = ``"quicksight:UpdateUser"``

Grants permission to update an Amazon QuickSight user

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html

#### Defined in

actions/quicksight.ts:1217

___

### UpdateVPCConnection

• **UpdateVPCConnection** = ``"quicksight:UpdateVPCConnection"``

Grants permission to update a vpc connection

See https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateVPCConnection.html

#### Defined in

actions/quicksight.ts:1223
