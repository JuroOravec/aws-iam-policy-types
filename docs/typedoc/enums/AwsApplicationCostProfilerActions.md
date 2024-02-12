[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsApplicationCostProfilerActions

# Enumeration: AwsApplicationCostProfilerActions

All IAM policy actions for AWS Application Cost Profiler Service (APPLICATION-COST-PROFILER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationcostprofilerservice.html

2024-02-12T09:56:02.179Z

## Table of contents

### Enumeration Members

- [DeleteReportDefinition](AwsApplicationCostProfilerActions.md#deletereportdefinition)
- [GetReportDefinition](AwsApplicationCostProfilerActions.md#getreportdefinition)
- [ImportApplicationUsage](AwsApplicationCostProfilerActions.md#importapplicationusage)
- [ListReportDefinitions](AwsApplicationCostProfilerActions.md#listreportdefinitions)
- [PutReportDefinition](AwsApplicationCostProfilerActions.md#putreportdefinition)
- [UpdateReportDefinition](AwsApplicationCostProfilerActions.md#updatereportdefinition)

## Enumeration Members

### DeleteReportDefinition

• **DeleteReportDefinition** = ``"application-cost-profiler:DeleteReportDefinition"``

Grants permission to delete the configuration with specific Application Cost Pr
ofiler Report thereby effectively disabling report generation

See https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_DeleteReportDefinition.html

#### Defined in

actions/application-cost-profiler.ts:18

___

### GetReportDefinition

• **GetReportDefinition** = ``"application-cost-profiler:GetReportDefinition"``

Grants permission to fetch the configuration with specific Application Cost Pro
filer Report request

See https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_GetReportDefinition.html

#### Defined in

actions/application-cost-profiler.ts:25

___

### ImportApplicationUsage

• **ImportApplicationUsage** = ``"application-cost-profiler:ImportApplicationUsage"``

Grants permission to import the application usage from S3

See https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_ImportApplicationUsage.html

#### Defined in

actions/application-cost-profiler.ts:31

___

### ListReportDefinitions

• **ListReportDefinitions** = ``"application-cost-profiler:ListReportDefinitions"``

Grants permission to get a list of the different Application Cost Profiler Repo
rt configurations they have created

See https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_ListReportDefinitions.html

#### Defined in

actions/application-cost-profiler.ts:38

___

### PutReportDefinition

• **PutReportDefinition** = ``"application-cost-profiler:PutReportDefinition"``

Grants permission to create Application Cost Profiler Report configurations

See https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_PutReportDefinition.html

#### Defined in

actions/application-cost-profiler.ts:44

___

### UpdateReportDefinition

• **UpdateReportDefinition** = ``"application-cost-profiler:UpdateReportDefinition"``

Grants permission to update an existing Application Cost Profiler Report config
uration

See https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_UpdateReportDefinition.html

#### Defined in

actions/application-cost-profiler.ts:51
