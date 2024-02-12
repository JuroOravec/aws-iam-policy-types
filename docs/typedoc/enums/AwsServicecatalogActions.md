[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsServicecatalogActions

# Enumeration: AwsServicecatalogActions

All IAM policy actions for AWS Service Catalog (SERVICECATALOG)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservicecatalog.html

2024-02-12T09:59:12.654Z

## Table of contents

### Enumeration Members

- [AcceptPortfolioShare](AwsServicecatalogActions.md#acceptportfolioshare)
- [AssociateAttributeGroup](AwsServicecatalogActions.md#associateattributegroup)
- [AssociateBudgetWithResource](AwsServicecatalogActions.md#associatebudgetwithresource)
- [AssociatePrincipalWithPortfolio](AwsServicecatalogActions.md#associateprincipalwithportfolio)
- [AssociateProductWithPortfolio](AwsServicecatalogActions.md#associateproductwithportfolio)
- [AssociateResource](AwsServicecatalogActions.md#associateresource)
- [AssociateServiceActionWithProvisioningArtifact](AwsServicecatalogActions.md#associateserviceactionwithprovisioningartifact)
- [AssociateTagOptionWithResource](AwsServicecatalogActions.md#associatetagoptionwithresource)
- [BatchAssociateServiceActionWithProvisioningArtifact](AwsServicecatalogActions.md#batchassociateserviceactionwithprovisioningartifact)
- [BatchDisassociateServiceActionFromProvisioningArtifact](AwsServicecatalogActions.md#batchdisassociateserviceactionfromprovisioningartifact)
- [CopyProduct](AwsServicecatalogActions.md#copyproduct)
- [CreateApplication](AwsServicecatalogActions.md#createapplication)
- [CreateAttributeGroup](AwsServicecatalogActions.md#createattributegroup)
- [CreateConstraint](AwsServicecatalogActions.md#createconstraint)
- [CreatePortfolio](AwsServicecatalogActions.md#createportfolio)
- [CreatePortfolioShare](AwsServicecatalogActions.md#createportfolioshare)
- [CreateProduct](AwsServicecatalogActions.md#createproduct)
- [CreateProvisionedProductPlan](AwsServicecatalogActions.md#createprovisionedproductplan)
- [CreateProvisioningArtifact](AwsServicecatalogActions.md#createprovisioningartifact)
- [CreateServiceAction](AwsServicecatalogActions.md#createserviceaction)
- [CreateTagOption](AwsServicecatalogActions.md#createtagoption)
- [DeleteApplication](AwsServicecatalogActions.md#deleteapplication)
- [DeleteAttributeGroup](AwsServicecatalogActions.md#deleteattributegroup)
- [DeleteConstraint](AwsServicecatalogActions.md#deleteconstraint)
- [DeletePortfolio](AwsServicecatalogActions.md#deleteportfolio)
- [DeletePortfolioShare](AwsServicecatalogActions.md#deleteportfolioshare)
- [DeleteProduct](AwsServicecatalogActions.md#deleteproduct)
- [DeleteProvisionedProductPlan](AwsServicecatalogActions.md#deleteprovisionedproductplan)
- [DeleteProvisioningArtifact](AwsServicecatalogActions.md#deleteprovisioningartifact)
- [DeleteServiceAction](AwsServicecatalogActions.md#deleteserviceaction)
- [DeleteTagOption](AwsServicecatalogActions.md#deletetagoption)
- [DescribeConstraint](AwsServicecatalogActions.md#describeconstraint)
- [DescribeCopyProductStatus](AwsServicecatalogActions.md#describecopyproductstatus)
- [DescribePortfolio](AwsServicecatalogActions.md#describeportfolio)
- [DescribePortfolioShareStatus](AwsServicecatalogActions.md#describeportfoliosharestatus)
- [DescribePortfolioShares](AwsServicecatalogActions.md#describeportfolioshares)
- [DescribeProduct](AwsServicecatalogActions.md#describeproduct)
- [DescribeProductAsAdmin](AwsServicecatalogActions.md#describeproductasadmin)
- [DescribeProductView](AwsServicecatalogActions.md#describeproductview)
- [DescribeProvisionedProduct](AwsServicecatalogActions.md#describeprovisionedproduct)
- [DescribeProvisionedProductPlan](AwsServicecatalogActions.md#describeprovisionedproductplan)
- [DescribeProvisioningArtifact](AwsServicecatalogActions.md#describeprovisioningartifact)
- [DescribeProvisioningParameters](AwsServicecatalogActions.md#describeprovisioningparameters)
- [DescribeRecord](AwsServicecatalogActions.md#describerecord)
- [DescribeServiceAction](AwsServicecatalogActions.md#describeserviceaction)
- [DescribeServiceActionExecutionParameters](AwsServicecatalogActions.md#describeserviceactionexecutionparameters)
- [DescribeTagOption](AwsServicecatalogActions.md#describetagoption)
- [DisableAWSOrganizationsAccess](AwsServicecatalogActions.md#disableawsorganizationsaccess)
- [DisassociateAttributeGroup](AwsServicecatalogActions.md#disassociateattributegroup)
- [DisassociateBudgetFromResource](AwsServicecatalogActions.md#disassociatebudgetfromresource)
- [DisassociatePrincipalFromPortfolio](AwsServicecatalogActions.md#disassociateprincipalfromportfolio)
- [DisassociateProductFromPortfolio](AwsServicecatalogActions.md#disassociateproductfromportfolio)
- [DisassociateResource](AwsServicecatalogActions.md#disassociateresource)
- [DisassociateServiceActionFromProvisioningArtifact](AwsServicecatalogActions.md#disassociateserviceactionfromprovisioningartifact)
- [DisassociateTagOptionFromResource](AwsServicecatalogActions.md#disassociatetagoptionfromresource)
- [EnableAWSOrganizationsAccess](AwsServicecatalogActions.md#enableawsorganizationsaccess)
- [ExecuteProvisionedProductPlan](AwsServicecatalogActions.md#executeprovisionedproductplan)
- [ExecuteProvisionedProductServiceAction](AwsServicecatalogActions.md#executeprovisionedproductserviceaction)
- [GetAWSOrganizationsAccessStatus](AwsServicecatalogActions.md#getawsorganizationsaccessstatus)
- [GetApplication](AwsServicecatalogActions.md#getapplication)
- [GetAssociatedResource](AwsServicecatalogActions.md#getassociatedresource)
- [GetAttributeGroup](AwsServicecatalogActions.md#getattributegroup)
- [GetConfiguration](AwsServicecatalogActions.md#getconfiguration)
- [GetProvisionedProductOutputs](AwsServicecatalogActions.md#getprovisionedproductoutputs)
- [ImportAsProvisionedProduct](AwsServicecatalogActions.md#importasprovisionedproduct)
- [ListAcceptedPortfolioShares](AwsServicecatalogActions.md#listacceptedportfolioshares)
- [ListApplications](AwsServicecatalogActions.md#listapplications)
- [ListAssociatedAttributeGroups](AwsServicecatalogActions.md#listassociatedattributegroups)
- [ListAssociatedResources](AwsServicecatalogActions.md#listassociatedresources)
- [ListAttributeGroups](AwsServicecatalogActions.md#listattributegroups)
- [ListAttributeGroupsForApplication](AwsServicecatalogActions.md#listattributegroupsforapplication)
- [ListBudgetsForResource](AwsServicecatalogActions.md#listbudgetsforresource)
- [ListConstraintsForPortfolio](AwsServicecatalogActions.md#listconstraintsforportfolio)
- [ListLaunchPaths](AwsServicecatalogActions.md#listlaunchpaths)
- [ListOrganizationPortfolioAccess](AwsServicecatalogActions.md#listorganizationportfolioaccess)
- [ListPortfolioAccess](AwsServicecatalogActions.md#listportfolioaccess)
- [ListPortfolios](AwsServicecatalogActions.md#listportfolios)
- [ListPortfoliosForProduct](AwsServicecatalogActions.md#listportfoliosforproduct)
- [ListPrincipalsForPortfolio](AwsServicecatalogActions.md#listprincipalsforportfolio)
- [ListProvisionedProductPlans](AwsServicecatalogActions.md#listprovisionedproductplans)
- [ListProvisioningArtifacts](AwsServicecatalogActions.md#listprovisioningartifacts)
- [ListProvisioningArtifactsForServiceAction](AwsServicecatalogActions.md#listprovisioningartifactsforserviceaction)
- [ListRecordHistory](AwsServicecatalogActions.md#listrecordhistory)
- [ListResourcesForTagOption](AwsServicecatalogActions.md#listresourcesfortagoption)
- [ListServiceActions](AwsServicecatalogActions.md#listserviceactions)
- [ListServiceActionsForProvisioningArtifact](AwsServicecatalogActions.md#listserviceactionsforprovisioningartifact)
- [ListStackInstancesForProvisionedProduct](AwsServicecatalogActions.md#liststackinstancesforprovisionedproduct)
- [ListTagOptions](AwsServicecatalogActions.md#listtagoptions)
- [ListTagsForResource](AwsServicecatalogActions.md#listtagsforresource)
- [NotifyProvisionProductEngineWorkflowResult](AwsServicecatalogActions.md#notifyprovisionproductengineworkflowresult)
- [NotifyTerminateProvisionedProductEngineWorkflowResult](AwsServicecatalogActions.md#notifyterminateprovisionedproductengineworkflowresult)
- [NotifyUpdateProvisionedProductEngineWorkflowResult](AwsServicecatalogActions.md#notifyupdateprovisionedproductengineworkflowresult)
- [ProvisionProduct](AwsServicecatalogActions.md#provisionproduct)
- [PutConfiguration](AwsServicecatalogActions.md#putconfiguration)
- [RejectPortfolioShare](AwsServicecatalogActions.md#rejectportfolioshare)
- [ScanProvisionedProducts](AwsServicecatalogActions.md#scanprovisionedproducts)
- [SearchProducts](AwsServicecatalogActions.md#searchproducts)
- [SearchProductsAsAdmin](AwsServicecatalogActions.md#searchproductsasadmin)
- [SearchProvisionedProducts](AwsServicecatalogActions.md#searchprovisionedproducts)
- [SyncResource](AwsServicecatalogActions.md#syncresource)
- [TagResource](AwsServicecatalogActions.md#tagresource)
- [TerminateProvisionedProduct](AwsServicecatalogActions.md#terminateprovisionedproduct)
- [UntagResource](AwsServicecatalogActions.md#untagresource)
- [UpdateApplication](AwsServicecatalogActions.md#updateapplication)
- [UpdateAttributeGroup](AwsServicecatalogActions.md#updateattributegroup)
- [UpdateConstraint](AwsServicecatalogActions.md#updateconstraint)
- [UpdatePortfolio](AwsServicecatalogActions.md#updateportfolio)
- [UpdatePortfolioShare](AwsServicecatalogActions.md#updateportfolioshare)
- [UpdateProduct](AwsServicecatalogActions.md#updateproduct)
- [UpdateProvisionedProduct](AwsServicecatalogActions.md#updateprovisionedproduct)
- [UpdateProvisionedProductProperties](AwsServicecatalogActions.md#updateprovisionedproductproperties)
- [UpdateProvisioningArtifact](AwsServicecatalogActions.md#updateprovisioningartifact)
- [UpdateServiceAction](AwsServicecatalogActions.md#updateserviceaction)
- [UpdateTagOption](AwsServicecatalogActions.md#updatetagoption)

## Enumeration Members

### AcceptPortfolioShare

• **AcceptPortfolioShare** = ``"servicecatalog:AcceptPortfolioShare"``

Grants permission to accept a portfolio that has been shared with you

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AcceptPortfolioShare.html

#### Defined in

actions/servicecatalog.ts:17

___

### AssociateAttributeGroup

• **AssociateAttributeGroup** = ``"servicecatalog:AssociateAttributeGroup"``

Grants permission to associate an attribute group with an application

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_AssociateAttributeGroup.html

#### Defined in

actions/servicecatalog.ts:23

___

### AssociateBudgetWithResource

• **AssociateBudgetWithResource** = ``"servicecatalog:AssociateBudgetWithResource"``

Grants permission to associate a budget with a resource

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateBudgetWithResource.html

#### Defined in

actions/servicecatalog.ts:29

___

### AssociatePrincipalWithPortfolio

• **AssociatePrincipalWithPortfolio** = ``"servicecatalog:AssociatePrincipalWithPortfolio"``

Grants permission to associate an IAM principal with a portfolio, giving the sp
ecified principal access to any products associated with the specified portfoli
o

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociatePrincipalWithPortfolio.html

#### Defined in

actions/servicecatalog.ts:37

___

### AssociateProductWithPortfolio

• **AssociateProductWithPortfolio** = ``"servicecatalog:AssociateProductWithPortfolio"``

Grants permission to associate a product with a portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateProductWithPortfolio.html

#### Defined in

actions/servicecatalog.ts:43

___

### AssociateResource

• **AssociateResource** = ``"servicecatalog:AssociateResource"``

Grants permission to associate a resource with an application

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_AssociateResource.html

#### Defined in

actions/servicecatalog.ts:49

___

### AssociateServiceActionWithProvisioningArtifact

• **AssociateServiceActionWithProvisioningArtifact** = ``"servicecatalog:AssociateServiceActionWithProvisioningArtifact"``

Grants permission to associate an action with a provisioning artifact

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateServiceActionWithProvisioningArtifact.html

#### Defined in

actions/servicecatalog.ts:55

___

### AssociateTagOptionWithResource

• **AssociateTagOptionWithResource** = ``"servicecatalog:AssociateTagOptionWithResource"``

Grants permission to associate the specified TagOption with the specified portf
olio or product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateTagOptionWithResource.html

#### Defined in

actions/servicecatalog.ts:62

___

### BatchAssociateServiceActionWithProvisioningArtifact

• **BatchAssociateServiceActionWithProvisioningArtifact** = ``"servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact"``

Grants permission to associate multiple self-service actions with provisioning
artifacts

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchAssociateServiceActionWithProvisioningArtifact.html

#### Defined in

actions/servicecatalog.ts:69

___

### BatchDisassociateServiceActionFromProvisioningArtifact

• **BatchDisassociateServiceActionFromProvisioningArtifact** = ``"servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact"``

Grants permission to disassociate a batch of self-service actions from the spec
ified provisioning artifact

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchDisassociateServiceActionFromProvisioningArtifact.html

#### Defined in

actions/servicecatalog.ts:76

___

### CopyProduct

• **CopyProduct** = ``"servicecatalog:CopyProduct"``

Grants permission to copy the specified source product to the specified target
product or a new product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CopyProduct.html

#### Defined in

actions/servicecatalog.ts:83

___

### CreateApplication

• **CreateApplication** = ``"servicecatalog:CreateApplication"``

Grants permission to create an application

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_CreateApplication.html

#### Defined in

actions/servicecatalog.ts:89

___

### CreateAttributeGroup

• **CreateAttributeGroup** = ``"servicecatalog:CreateAttributeGroup"``

Grants permission to create an attribute group

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_CreateAttributeGroup.html

#### Defined in

actions/servicecatalog.ts:95

___

### CreateConstraint

• **CreateConstraint** = ``"servicecatalog:CreateConstraint"``

Grants permission to create a constraint on an associated product and portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateConstraint.html

#### Defined in

actions/servicecatalog.ts:101

___

### CreatePortfolio

• **CreatePortfolio** = ``"servicecatalog:CreatePortfolio"``

Grants permission to create a portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolio.html

#### Defined in

actions/servicecatalog.ts:107

___

### CreatePortfolioShare

• **CreatePortfolioShare** = ``"servicecatalog:CreatePortfolioShare"``

Grants permission to share a portfolio you own with another AWS account

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolioShare.html

#### Defined in

actions/servicecatalog.ts:113

___

### CreateProduct

• **CreateProduct** = ``"servicecatalog:CreateProduct"``

Grants permission to create a product and that product's first provisioning art
ifact

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html

#### Defined in

actions/servicecatalog.ts:120

___

### CreateProvisionedProductPlan

• **CreateProvisionedProductPlan** = ``"servicecatalog:CreateProvisionedProductPlan"``

Grants permission to add a new provisioned product plan

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisionedProductPlan.html

#### Defined in

actions/servicecatalog.ts:126

___

### CreateProvisioningArtifact

• **CreateProvisioningArtifact** = ``"servicecatalog:CreateProvisioningArtifact"``

Grants permission to add a new provisioning artifact to an existing product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisioningArtifact.html

#### Defined in

actions/servicecatalog.ts:132

___

### CreateServiceAction

• **CreateServiceAction** = ``"servicecatalog:CreateServiceAction"``

Grants permission to create a self-service action

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateServiceAction.html

#### Defined in

actions/servicecatalog.ts:138

___

### CreateTagOption

• **CreateTagOption** = ``"servicecatalog:CreateTagOption"``

Grants permission to create a TagOption

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateTagOption.html

#### Defined in

actions/servicecatalog.ts:144

___

### DeleteApplication

• **DeleteApplication** = ``"servicecatalog:DeleteApplication"``

Grants permission to delete an application if all associations have been remove
d from the application

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DeleteApplication.html

#### Defined in

actions/servicecatalog.ts:151

___

### DeleteAttributeGroup

• **DeleteAttributeGroup** = ``"servicecatalog:DeleteAttributeGroup"``

Grants permission to delete an attribute group if all associations have been re
moved from the attribute group

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DeleteAttributeGroup.html

#### Defined in

actions/servicecatalog.ts:158

___

### DeleteConstraint

• **DeleteConstraint** = ``"servicecatalog:DeleteConstraint"``

Grants permission to remove and delete an existing constraint from an associate
d product and portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteConstraint.html

#### Defined in

actions/servicecatalog.ts:165

___

### DeletePortfolio

• **DeletePortfolio** = ``"servicecatalog:DeletePortfolio"``

Grants permission to delete a portfolio if all associations and shares have bee
n removed from the portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolio.html

#### Defined in

actions/servicecatalog.ts:172

___

### DeletePortfolioShare

• **DeletePortfolioShare** = ``"servicecatalog:DeletePortfolioShare"``

Grants permission to unshare a portfolio you own from an AWS account you previo
usly shared the portfolio with

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolioShare.html

#### Defined in

actions/servicecatalog.ts:179

___

### DeleteProduct

• **DeleteProduct** = ``"servicecatalog:DeleteProduct"``

Grants permission to delete a product if all associations have been removed fro
m the product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProduct.html

#### Defined in

actions/servicecatalog.ts:186

___

### DeleteProvisionedProductPlan

• **DeleteProvisionedProductPlan** = ``"servicecatalog:DeleteProvisionedProductPlan"``

Grants permission to delete a provisioned product plan

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisionedProductPlan.html

#### Defined in

actions/servicecatalog.ts:192

___

### DeleteProvisioningArtifact

• **DeleteProvisioningArtifact** = ``"servicecatalog:DeleteProvisioningArtifact"``

Grants permission to delete a provisioning artifact from a product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisioningArtifact.html

#### Defined in

actions/servicecatalog.ts:198

___

### DeleteServiceAction

• **DeleteServiceAction** = ``"servicecatalog:DeleteServiceAction"``

Grants permission to delete a self-service action

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteServiceAction.html

#### Defined in

actions/servicecatalog.ts:204

___

### DeleteTagOption

• **DeleteTagOption** = ``"servicecatalog:DeleteTagOption"``

Grants permission to delete the specified TagOption

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteTagOption.html

#### Defined in

actions/servicecatalog.ts:210

___

### DescribeConstraint

• **DescribeConstraint** = ``"servicecatalog:DescribeConstraint"``

Grants permission to describe a constraint

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeConstraint.html

#### Defined in

actions/servicecatalog.ts:216

___

### DescribeCopyProductStatus

• **DescribeCopyProductStatus** = ``"servicecatalog:DescribeCopyProductStatus"``

Grants permission to get the status of the specified copy product operation

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeCopyProductStatus.html

#### Defined in

actions/servicecatalog.ts:222

___

### DescribePortfolio

• **DescribePortfolio** = ``"servicecatalog:DescribePortfolio"``

Grants permission to describe a portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolio.html

#### Defined in

actions/servicecatalog.ts:228

___

### DescribePortfolioShareStatus

• **DescribePortfolioShareStatus** = ``"servicecatalog:DescribePortfolioShareStatus"``

Grants permission to get the status of the specified portfolio share operation

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolioShareStatus.html

#### Defined in

actions/servicecatalog.ts:234

___

### DescribePortfolioShares

• **DescribePortfolioShares** = ``"servicecatalog:DescribePortfolioShares"``

Grants permission to view a summary of each of the portfolio shares that were c
reated for the specified portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolioShares.html

#### Defined in

actions/servicecatalog.ts:241

___

### DescribeProduct

• **DescribeProduct** = ``"servicecatalog:DescribeProduct"``

Grants permission to describe a product as an end-user

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProduct.html

#### Defined in

actions/servicecatalog.ts:247

___

### DescribeProductAsAdmin

• **DescribeProductAsAdmin** = ``"servicecatalog:DescribeProductAsAdmin"``

Grants permission to describe a product as an admin

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductAsAdmin.html

#### Defined in

actions/servicecatalog.ts:253

___

### DescribeProductView

• **DescribeProductView** = ``"servicecatalog:DescribeProductView"``

Grants permission to describe a product as an end-user

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductView.html

#### Defined in

actions/servicecatalog.ts:259

___

### DescribeProvisionedProduct

• **DescribeProvisionedProduct** = ``"servicecatalog:DescribeProvisionedProduct"``

Grants permission to describe a provisioned product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProduct.html

#### Defined in

actions/servicecatalog.ts:265

___

### DescribeProvisionedProductPlan

• **DescribeProvisionedProductPlan** = ``"servicecatalog:DescribeProvisionedProductPlan"``

Grants permission to describe a provisioned product plan

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProductPlan.html

#### Defined in

actions/servicecatalog.ts:271

___

### DescribeProvisioningArtifact

• **DescribeProvisioningArtifact** = ``"servicecatalog:DescribeProvisioningArtifact"``

Grants permission to describe a provisioning artifact

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningArtifact.html

#### Defined in

actions/servicecatalog.ts:277

___

### DescribeProvisioningParameters

• **DescribeProvisioningParameters** = ``"servicecatalog:DescribeProvisioningParameters"``

Grants permission to describe the parameters that you need to specify to succes
sfully provision a specified provisioning artifact

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningParameters.html

#### Defined in

actions/servicecatalog.ts:284

___

### DescribeRecord

• **DescribeRecord** = ``"servicecatalog:DescribeRecord"``

Grants permission to describe a record and lists any outputs

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeRecord.html

#### Defined in

actions/servicecatalog.ts:290

___

### DescribeServiceAction

• **DescribeServiceAction** = ``"servicecatalog:DescribeServiceAction"``

Grants permission to describe a self-service action

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceAction.html

#### Defined in

actions/servicecatalog.ts:296

___

### DescribeServiceActionExecutionParameters

• **DescribeServiceActionExecutionParameters** = ``"servicecatalog:DescribeServiceActionExecutionParameters"``

Grants permission to get the default parameters if you executed the specified S
ervice Action on the specified Provisioned Product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceActionExecutionParameters.html

#### Defined in

actions/servicecatalog.ts:303

___

### DescribeTagOption

• **DescribeTagOption** = ``"servicecatalog:DescribeTagOption"``

Grants permission to get information about the specified TagOption

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeTagOption.html

#### Defined in

actions/servicecatalog.ts:309

___

### DisableAWSOrganizationsAccess

• **DisableAWSOrganizationsAccess** = ``"servicecatalog:DisableAWSOrganizationsAccess"``

Grants permission to disable portfolio sharing through AWS Organizations featur
e

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisableAWSOrganizationsAccess.html

#### Defined in

actions/servicecatalog.ts:316

___

### DisassociateAttributeGroup

• **DisassociateAttributeGroup** = ``"servicecatalog:DisassociateAttributeGroup"``

Grants permission to disassociate an attribute group from an application

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DisassociateAttributeGroup.html

#### Defined in

actions/servicecatalog.ts:322

___

### DisassociateBudgetFromResource

• **DisassociateBudgetFromResource** = ``"servicecatalog:DisassociateBudgetFromResource"``

Grants permission to disassociate a budget from a resource

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateBudgetFromResource.html

#### Defined in

actions/servicecatalog.ts:328

___

### DisassociatePrincipalFromPortfolio

• **DisassociatePrincipalFromPortfolio** = ``"servicecatalog:DisassociatePrincipalFromPortfolio"``

Grants permission to disassociate an IAM principal from a portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociatePrincipalFromPortfolio.html

#### Defined in

actions/servicecatalog.ts:334

___

### DisassociateProductFromPortfolio

• **DisassociateProductFromPortfolio** = ``"servicecatalog:DisassociateProductFromPortfolio"``

Grants permission to disassociate a product from a portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateProductFromPortfolio.html

#### Defined in

actions/servicecatalog.ts:340

___

### DisassociateResource

• **DisassociateResource** = ``"servicecatalog:DisassociateResource"``

Grants permission to disassociate a resource from an application

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DisassociateResource.html

#### Defined in

actions/servicecatalog.ts:346

___

### DisassociateServiceActionFromProvisioningArtifact

• **DisassociateServiceActionFromProvisioningArtifact** = ``"servicecatalog:DisassociateServiceActionFromProvisioningArtifact"``

Grants permission to disassociate the specified self-service action association
from the specified provisioning artifact

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateServiceActionFromProvisioningArtifact.html

#### Defined in

actions/servicecatalog.ts:353

___

### DisassociateTagOptionFromResource

• **DisassociateTagOptionFromResource** = ``"servicecatalog:DisassociateTagOptionFromResource"``

Grants permission to disassociate the specified TagOption from the specified re
source

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateTagOptionFromResource.html

#### Defined in

actions/servicecatalog.ts:360

___

### EnableAWSOrganizationsAccess

• **EnableAWSOrganizationsAccess** = ``"servicecatalog:EnableAWSOrganizationsAccess"``

Grants permission to enable portfolio sharing feature through AWS Organizations

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_EnableAWSOrganizationsAccess.html

#### Defined in

actions/servicecatalog.ts:366

___

### ExecuteProvisionedProductPlan

• **ExecuteProvisionedProductPlan** = ``"servicecatalog:ExecuteProvisionedProductPlan"``

Grants permission to execute a provisioned product plan

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductPlan.html

#### Defined in

actions/servicecatalog.ts:372

___

### ExecuteProvisionedProductServiceAction

• **ExecuteProvisionedProductServiceAction** = ``"servicecatalog:ExecuteProvisionedProductServiceAction"``

Grants permission to executes a provisioned product plan

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductServiceAction.html

#### Defined in

actions/servicecatalog.ts:378

___

### GetAWSOrganizationsAccessStatus

• **GetAWSOrganizationsAccessStatus** = ``"servicecatalog:GetAWSOrganizationsAccessStatus"``

Grants permission to get the access status of AWS Organization portfolio share
feature

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetAWSOrganizationsAccessStatus.html

#### Defined in

actions/servicecatalog.ts:385

___

### GetApplication

• **GetApplication** = ``"servicecatalog:GetApplication"``

Grants permission to get an application

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetApplication.html

#### Defined in

actions/servicecatalog.ts:391

___

### GetAssociatedResource

• **GetAssociatedResource** = ``"servicecatalog:GetAssociatedResource"``

Grants permission to get information about a resource associated to an applicat
ion

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetAssociatedResource.html

#### Defined in

actions/servicecatalog.ts:398

___

### GetAttributeGroup

• **GetAttributeGroup** = ``"servicecatalog:GetAttributeGroup"``

Grants permission to get an attribute group

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetAttributeGroup.html

#### Defined in

actions/servicecatalog.ts:404

___

### GetConfiguration

• **GetConfiguration** = ``"servicecatalog:GetConfiguration"``

Grants permission to read AppRegistry configurations

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetConfiguration.html

#### Defined in

actions/servicecatalog.ts:410

___

### GetProvisionedProductOutputs

• **GetProvisionedProductOutputs** = ``"servicecatalog:GetProvisionedProductOutputs"``

Grants permission to get the provisioned product output with either provisioned
product id or name

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetProvisionedProductOutputs.html

#### Defined in

actions/servicecatalog.ts:417

___

### ImportAsProvisionedProduct

• **ImportAsProvisionedProduct** = ``"servicecatalog:ImportAsProvisionedProduct"``

Grants permission to import a resource into a provisioned product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ImportAsProvisionedProduct.html

#### Defined in

actions/servicecatalog.ts:423

___

### ListAcceptedPortfolioShares

• **ListAcceptedPortfolioShares** = ``"servicecatalog:ListAcceptedPortfolioShares"``

Grants permission to list the portfolios that have been shared with you and you
have accepted

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListAcceptedPortfolioShares.html

#### Defined in

actions/servicecatalog.ts:430

___

### ListApplications

• **ListApplications** = ``"servicecatalog:ListApplications"``

Grants permission to list your applications

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListApplications.html

#### Defined in

actions/servicecatalog.ts:436

___

### ListAssociatedAttributeGroups

• **ListAssociatedAttributeGroups** = ``"servicecatalog:ListAssociatedAttributeGroups"``

Grants permission to list the attribute groups associated with an application

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAssociatedAttributeGroups.html

#### Defined in

actions/servicecatalog.ts:442

___

### ListAssociatedResources

• **ListAssociatedResources** = ``"servicecatalog:ListAssociatedResources"``

Grants permission to list the resources associated with an application

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAssociatedResources.html

#### Defined in

actions/servicecatalog.ts:448

___

### ListAttributeGroups

• **ListAttributeGroups** = ``"servicecatalog:ListAttributeGroups"``

Grants permission to list your attribute groups

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAttributeGroups.html

#### Defined in

actions/servicecatalog.ts:454

___

### ListAttributeGroupsForApplication

• **ListAttributeGroupsForApplication** = ``"servicecatalog:ListAttributeGroupsForApplication"``

Grants permission to list the associated attribute groups for a given applicati
on

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAttributeGroupsForApplication.html

#### Defined in

actions/servicecatalog.ts:461

___

### ListBudgetsForResource

• **ListBudgetsForResource** = ``"servicecatalog:ListBudgetsForResource"``

Grants permission to list all the budgets associated to a resource

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListBudgetsForResource.html

#### Defined in

actions/servicecatalog.ts:467

___

### ListConstraintsForPortfolio

• **ListConstraintsForPortfolio** = ``"servicecatalog:ListConstraintsForPortfolio"``

Grants permission to list constraints associated with a given portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListConstraintsForPortfolio.html

#### Defined in

actions/servicecatalog.ts:473

___

### ListLaunchPaths

• **ListLaunchPaths** = ``"servicecatalog:ListLaunchPaths"``

Grants permission to list the different ways to launch a given product as an en
d-user

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListLaunchPaths.html

#### Defined in

actions/servicecatalog.ts:480

___

### ListOrganizationPortfolioAccess

• **ListOrganizationPortfolioAccess** = ``"servicecatalog:ListOrganizationPortfolioAccess"``

Grants permission to list the organization nodes that have access to the specif
ied portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListOrganizationPortfolioAccess.html

#### Defined in

actions/servicecatalog.ts:487

___

### ListPortfolioAccess

• **ListPortfolioAccess** = ``"servicecatalog:ListPortfolioAccess"``

Grants permission to list the AWS accounts you have shared a given portfolio wi
th

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolioAccess.html

#### Defined in

actions/servicecatalog.ts:494

___

### ListPortfolios

• **ListPortfolios** = ``"servicecatalog:ListPortfolios"``

Grants permission to list the portfolios in your account

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolios.html

#### Defined in

actions/servicecatalog.ts:500

___

### ListPortfoliosForProduct

• **ListPortfoliosForProduct** = ``"servicecatalog:ListPortfoliosForProduct"``

Grants permission to list the portfolios associated with a given product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfoliosForProduct.html

#### Defined in

actions/servicecatalog.ts:506

___

### ListPrincipalsForPortfolio

• **ListPrincipalsForPortfolio** = ``"servicecatalog:ListPrincipalsForPortfolio"``

Grants permission to list the IAM principals associated with a given portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPrincipalsForPortfolio.html

#### Defined in

actions/servicecatalog.ts:512

___

### ListProvisionedProductPlans

• **ListProvisionedProductPlans** = ``"servicecatalog:ListProvisionedProductPlans"``

Grants permission to list the provisioned product plans

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisionedProductPlans.html

#### Defined in

actions/servicecatalog.ts:518

___

### ListProvisioningArtifacts

• **ListProvisioningArtifacts** = ``"servicecatalog:ListProvisioningArtifacts"``

Grants permission to list the provisioning artifacts associated with a given pr
oduct

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifacts.html

#### Defined in

actions/servicecatalog.ts:525

___

### ListProvisioningArtifactsForServiceAction

• **ListProvisioningArtifactsForServiceAction** = ``"servicecatalog:ListProvisioningArtifactsForServiceAction"``

Grants permission to list all provisioning artifacts for the specified self-ser
vice action

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifactsForServiceAction.html

#### Defined in

actions/servicecatalog.ts:532

___

### ListRecordHistory

• **ListRecordHistory** = ``"servicecatalog:ListRecordHistory"``

Grants permission to list all the records in your account or all the records re
lated to a given provisioned product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListRecordHistory.html

#### Defined in

actions/servicecatalog.ts:539

___

### ListResourcesForTagOption

• **ListResourcesForTagOption** = ``"servicecatalog:ListResourcesForTagOption"``

Grants permission to list the resources associated with the specified TagOption

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListResourcesForTagOption.html

#### Defined in

actions/servicecatalog.ts:545

___

### ListServiceActions

• **ListServiceActions** = ``"servicecatalog:ListServiceActions"``

Grants permission to list all self-service actions

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActions.html

#### Defined in

actions/servicecatalog.ts:551

___

### ListServiceActionsForProvisioningArtifact

• **ListServiceActionsForProvisioningArtifact** = ``"servicecatalog:ListServiceActionsForProvisioningArtifact"``

Grants permission to list all the service actions associated with the specified
provisioning artifact in your account

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActionsForProvisioningArtifact.html

#### Defined in

actions/servicecatalog.ts:558

___

### ListStackInstancesForProvisionedProduct

• **ListStackInstancesForProvisionedProduct** = ``"servicecatalog:ListStackInstancesForProvisionedProduct"``

Grants permission to list account, region and status of each stack instances th
at are associated with a CFN_STACKSET type provisioned product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListStackInstancesForProvisionedProduct.html

#### Defined in

actions/servicecatalog.ts:565

___

### ListTagOptions

• **ListTagOptions** = ``"servicecatalog:ListTagOptions"``

Grants permission to list the specified TagOptions or all TagOptions

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListTagOptions.html

#### Defined in

actions/servicecatalog.ts:571

___

### ListTagsForResource

• **ListTagsForResource** = ``"servicecatalog:ListTagsForResource"``

Grants permission to list the tags for a service catalog appregistry resource

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListTagsForResource.html

#### Defined in

actions/servicecatalog.ts:577

___

### NotifyProvisionProductEngineWorkflowResult

• **NotifyProvisionProductEngineWorkflowResult** = ``"servicecatalog:NotifyProvisionProductEngineWorkflowResult"``

Grants permission to notify the result of the provisioning engine execution

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_NotifyProvisionProductEngineWorkflowResult.html

#### Defined in

actions/servicecatalog.ts:583

___

### NotifyTerminateProvisionedProductEngineWorkflowResult

• **NotifyTerminateProvisionedProductEngineWorkflowResult** = ``"servicecatalog:NotifyTerminateProvisionedProductEngineWorkflowResult"``

Grants permission to notify the result of the terminate engine execution

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_NotifyTerminateProvisionedProductEngineWorkflowResult.html

#### Defined in

actions/servicecatalog.ts:589

___

### NotifyUpdateProvisionedProductEngineWorkflowResult

• **NotifyUpdateProvisionedProductEngineWorkflowResult** = ``"servicecatalog:NotifyUpdateProvisionedProductEngineWorkflowResult"``

Grants permission to notify the result of the update engine execution

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_NotifyUpdateProvisionedProductEngineWorkflowResult.html

#### Defined in

actions/servicecatalog.ts:595

___

### ProvisionProduct

• **ProvisionProduct** = ``"servicecatalog:ProvisionProduct"``

Grants permission to provision a product with a specified provisioning artifact
and launch parameters

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisionProduct.html

#### Defined in

actions/servicecatalog.ts:602

___

### PutConfiguration

• **PutConfiguration** = ``"servicecatalog:PutConfiguration"``

Grants permission to assign AppRegistry configurations

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_PutConfiguration.html

#### Defined in

actions/servicecatalog.ts:608

___

### RejectPortfolioShare

• **RejectPortfolioShare** = ``"servicecatalog:RejectPortfolioShare"``

Grants permission to reject a portfolio that has been shared with you that you
previously accepted

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_RejectPortfolioShare.html

#### Defined in

actions/servicecatalog.ts:615

___

### ScanProvisionedProducts

• **ScanProvisionedProducts** = ``"servicecatalog:ScanProvisionedProducts"``

Grants permission to list all the provisioned products in your account

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ScanProvisionedProducts.html

#### Defined in

actions/servicecatalog.ts:621

___

### SearchProducts

• **SearchProducts** = ``"servicecatalog:SearchProducts"``

Grants permission to list the products available to you as an end-user

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProducts.html

#### Defined in

actions/servicecatalog.ts:627

___

### SearchProductsAsAdmin

• **SearchProductsAsAdmin** = ``"servicecatalog:SearchProductsAsAdmin"``

Grants permission to list all the products in your account or all the products
associated with a given portfolio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProductsAsAdmin.html

#### Defined in

actions/servicecatalog.ts:634

___

### SearchProvisionedProducts

• **SearchProvisionedProducts** = ``"servicecatalog:SearchProvisionedProducts"``

Grants permission to list all the provisioned products in your account

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProvisionedProducts.html

#### Defined in

actions/servicecatalog.ts:640

___

### SyncResource

• **SyncResource** = ``"servicecatalog:SyncResource"``

Grants permission to sync a resource with its current state in AppRegistry

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_SyncResource.html

#### Defined in

actions/servicecatalog.ts:646

___

### TagResource

• **TagResource** = ``"servicecatalog:TagResource"``

Grants permission to tag a service catalog appregistry resource

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_TagResource.html

#### Defined in

actions/servicecatalog.ts:652

___

### TerminateProvisionedProduct

• **TerminateProvisionedProduct** = ``"servicecatalog:TerminateProvisionedProduct"``

Grants permission to terminate an existing provisioned product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_TerminateProvisionedProduct.html

#### Defined in

actions/servicecatalog.ts:658

___

### UntagResource

• **UntagResource** = ``"servicecatalog:UntagResource"``

Grants permission to remove a tag from a service catalog appregistry resource

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_UntagResource.html

#### Defined in

actions/servicecatalog.ts:664

___

### UpdateApplication

• **UpdateApplication** = ``"servicecatalog:UpdateApplication"``

Grants permission to update the attributes of an existing application

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_UpdateApplication.html

#### Defined in

actions/servicecatalog.ts:670

___

### UpdateAttributeGroup

• **UpdateAttributeGroup** = ``"servicecatalog:UpdateAttributeGroup"``

Grants permission to update the attributes of an existing attribute group

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_UpdateAttributeGroup.html

#### Defined in

actions/servicecatalog.ts:676

___

### UpdateConstraint

• **UpdateConstraint** = ``"servicecatalog:UpdateConstraint"``

Grants permission to update the metadata fields of an existing constraint

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateConstraint.html

#### Defined in

actions/servicecatalog.ts:682

___

### UpdatePortfolio

• **UpdatePortfolio** = ``"servicecatalog:UpdatePortfolio"``

Grants permission to update the metadata fields and/or tags of an existing port
folio

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdatePortfolio.html

#### Defined in

actions/servicecatalog.ts:689

___

### UpdatePortfolioShare

• **UpdatePortfolioShare** = ``"servicecatalog:UpdatePortfolioShare"``

Grants permission to enable or disable resource sharing for an existing portfol
io share

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdatePortfolioShare.html

#### Defined in

actions/servicecatalog.ts:696

___

### UpdateProduct

• **UpdateProduct** = ``"servicecatalog:UpdateProduct"``

Grants permission to update the metadata fields and/or tags of an existing prod
uct

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProduct.html

#### Defined in

actions/servicecatalog.ts:703

___

### UpdateProvisionedProduct

• **UpdateProvisionedProduct** = ``"servicecatalog:UpdateProvisionedProduct"``

Grants permission to update an existing provisioned product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProduct.html

#### Defined in

actions/servicecatalog.ts:709

___

### UpdateProvisionedProductProperties

• **UpdateProvisionedProductProperties** = ``"servicecatalog:UpdateProvisionedProductProperties"``

Grants permission to update the properties of an existing provisioned product

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProductProperties.html

#### Defined in

actions/servicecatalog.ts:715

___

### UpdateProvisioningArtifact

• **UpdateProvisioningArtifact** = ``"servicecatalog:UpdateProvisioningArtifact"``

Grants permission to update the metadata fields of an existing provisioning art
ifact

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisioningArtifact.html

#### Defined in

actions/servicecatalog.ts:722

___

### UpdateServiceAction

• **UpdateServiceAction** = ``"servicecatalog:UpdateServiceAction"``

Grants permission to update a self-service action

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateServiceAction.html

#### Defined in

actions/servicecatalog.ts:728

___

### UpdateTagOption

• **UpdateTagOption** = ``"servicecatalog:UpdateTagOption"``

Grants permission to update the specified TagOption

See https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateTagOption.html

#### Defined in

actions/servicecatalog.ts:734
