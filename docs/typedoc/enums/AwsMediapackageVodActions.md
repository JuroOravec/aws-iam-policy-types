[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMediapackageVodActions

# Enumeration: AwsMediapackageVodActions

All IAM policy actions for AWS Elemental MediaPackage VOD (MEDIAPACKAGE-VOD)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackagevod.html

2024-02-12T09:57:18.359Z

## Table of contents

### Enumeration Members

- [ConfigureLogs](AwsMediapackageVodActions.md#configurelogs)
- [CreateAsset](AwsMediapackageVodActions.md#createasset)
- [CreatePackagingConfiguration](AwsMediapackageVodActions.md#createpackagingconfiguration)
- [CreatePackagingGroup](AwsMediapackageVodActions.md#createpackaginggroup)
- [DeleteAsset](AwsMediapackageVodActions.md#deleteasset)
- [DeletePackagingConfiguration](AwsMediapackageVodActions.md#deletepackagingconfiguration)
- [DeletePackagingGroup](AwsMediapackageVodActions.md#deletepackaginggroup)
- [DescribeAsset](AwsMediapackageVodActions.md#describeasset)
- [DescribePackagingConfiguration](AwsMediapackageVodActions.md#describepackagingconfiguration)
- [DescribePackagingGroup](AwsMediapackageVodActions.md#describepackaginggroup)
- [ListAssets](AwsMediapackageVodActions.md#listassets)
- [ListPackagingConfigurations](AwsMediapackageVodActions.md#listpackagingconfigurations)
- [ListPackagingGroups](AwsMediapackageVodActions.md#listpackaginggroups)
- [ListTagsForResource](AwsMediapackageVodActions.md#listtagsforresource)
- [TagResource](AwsMediapackageVodActions.md#tagresource)
- [UntagResource](AwsMediapackageVodActions.md#untagresource)
- [UpdatePackagingGroup](AwsMediapackageVodActions.md#updatepackaginggroup)

## Enumeration Members

### ConfigureLogs

• **ConfigureLogs** = ``"mediapackage-vod:ConfigureLogs"``

Grants permission to configure egress access logs for a PackagingGroup

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id-configure_logs.html#packaging_groups-id-configure_logsput

#### Defined in

actions/mediapackage-vod.ts:17

___

### CreateAsset

• **CreateAsset** = ``"mediapackage-vod:CreateAsset"``

Grants permission to create an asset in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets.html#assetspost

#### Defined in

actions/mediapackage-vod.ts:23

___

### CreatePackagingConfiguration

• **CreatePackagingConfiguration** = ``"mediapackage-vod:CreatePackagingConfiguration"``

Grants permission to create a packaging configuration in AWS Elemental MediaPac
kage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations.html#packaging_configurationspost

#### Defined in

actions/mediapackage-vod.ts:30

___

### CreatePackagingGroup

• **CreatePackagingGroup** = ``"mediapackage-vod:CreatePackagingGroup"``

Grants permission to create a packaging group in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups.html#packaging_groupspost

#### Defined in

actions/mediapackage-vod.ts:36

___

### DeleteAsset

• **DeleteAsset** = ``"mediapackage-vod:DeleteAsset"``

Grants permission to delete an asset in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets-id.html#assets-iddelete

#### Defined in

actions/mediapackage-vod.ts:42

___

### DeletePackagingConfiguration

• **DeletePackagingConfiguration** = ``"mediapackage-vod:DeletePackagingConfiguration"``

Grants permission to delete a packaging configuration in AWS Elemental MediaPac
kage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations-id.html#packaging_configurations-iddelete

#### Defined in

actions/mediapackage-vod.ts:49

___

### DeletePackagingGroup

• **DeletePackagingGroup** = ``"mediapackage-vod:DeletePackagingGroup"``

Grants permission to delete a packaging group in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-iddelete

#### Defined in

actions/mediapackage-vod.ts:55

___

### DescribeAsset

• **DescribeAsset** = ``"mediapackage-vod:DescribeAsset"``

Grants permission to view the details of an asset in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets-id.html#assets-idget

#### Defined in

actions/mediapackage-vod.ts:61

___

### DescribePackagingConfiguration

• **DescribePackagingConfiguration** = ``"mediapackage-vod:DescribePackagingConfiguration"``

Grants permission to view the details of a packaging configuration in AWS Eleme
ntal MediaPackage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations-id.html#packaging_configurations-idget

#### Defined in

actions/mediapackage-vod.ts:68

___

### DescribePackagingGroup

• **DescribePackagingGroup** = ``"mediapackage-vod:DescribePackagingGroup"``

Grants permission to view the details of a packaging group in AWS Elemental Med
iaPackage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-idget

#### Defined in

actions/mediapackage-vod.ts:75

___

### ListAssets

• **ListAssets** = ``"mediapackage-vod:ListAssets"``

Grants permission to view a list of assets in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets.html#assetsget

#### Defined in

actions/mediapackage-vod.ts:81

___

### ListPackagingConfigurations

• **ListPackagingConfigurations** = ``"mediapackage-vod:ListPackagingConfigurations"``

Grants permission to view a list of packaging configurations in AWS Elemental M
ediaPackage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations.html#packaging_configurationsget

#### Defined in

actions/mediapackage-vod.ts:88

___

### ListPackagingGroups

• **ListPackagingGroups** = ``"mediapackage-vod:ListPackagingGroups"``

Grants permission to view a list of packaging groups in AWS Elemental MediaPack
age

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups.html#packaging_groupsget

#### Defined in

actions/mediapackage-vod.ts:95

___

### ListTagsForResource

• **ListTagsForResource** = ``"mediapackage-vod:ListTagsForResource"``

Grants permission to list the tags assigned to a PackagingGroup, PackagingConfi
guration, or Asset

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arnget

#### Defined in

actions/mediapackage-vod.ts:102

___

### TagResource

• **TagResource** = ``"mediapackage-vod:TagResource"``

Grants permission to assign tags to a PackagingGroup, PackagingConfiguration, o
r Asset

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arnpost

#### Defined in

actions/mediapackage-vod.ts:109

___

### UntagResource

• **UntagResource** = ``"mediapackage-vod:UntagResource"``

Grants permission to delete tags from a PackagingGroup, PackagingConfiguration,
or Asset

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arndelete

#### Defined in

actions/mediapackage-vod.ts:116

___

### UpdatePackagingGroup

• **UpdatePackagingGroup** = ``"mediapackage-vod:UpdatePackagingGroup"``

Grants permission to update a packaging group in AWS Elemental MediaPackage

See https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-idput

#### Defined in

actions/mediapackage-vod.ts:122
