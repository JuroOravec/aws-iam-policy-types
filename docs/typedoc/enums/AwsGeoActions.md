[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsGeoActions

# Enumeration: AwsGeoActions

All IAM policy actions for Amazon Location (GEO)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocation.html

2024-02-12T09:58:07.156Z

## Table of contents

### Enumeration Members

- [AssociateTrackerConsumer](AwsGeoActions.md#associatetrackerconsumer)
- [BatchDeleteDevicePositionHistory](AwsGeoActions.md#batchdeletedevicepositionhistory)
- [BatchDeleteGeofence](AwsGeoActions.md#batchdeletegeofence)
- [BatchEvaluateGeofences](AwsGeoActions.md#batchevaluategeofences)
- [BatchGetDevicePosition](AwsGeoActions.md#batchgetdeviceposition)
- [BatchPutGeofence](AwsGeoActions.md#batchputgeofence)
- [BatchUpdateDevicePosition](AwsGeoActions.md#batchupdatedeviceposition)
- [CalculateRoute](AwsGeoActions.md#calculateroute)
- [CalculateRouteMatrix](AwsGeoActions.md#calculateroutematrix)
- [CreateGeofenceCollection](AwsGeoActions.md#creategeofencecollection)
- [CreateKey](AwsGeoActions.md#createkey)
- [CreateMap](AwsGeoActions.md#createmap)
- [CreatePlaceIndex](AwsGeoActions.md#createplaceindex)
- [CreateRouteCalculator](AwsGeoActions.md#createroutecalculator)
- [CreateTracker](AwsGeoActions.md#createtracker)
- [DeleteGeofenceCollection](AwsGeoActions.md#deletegeofencecollection)
- [DeleteKey](AwsGeoActions.md#deletekey)
- [DeleteMap](AwsGeoActions.md#deletemap)
- [DeletePlaceIndex](AwsGeoActions.md#deleteplaceindex)
- [DeleteRouteCalculator](AwsGeoActions.md#deleteroutecalculator)
- [DeleteTracker](AwsGeoActions.md#deletetracker)
- [DescribeGeofenceCollection](AwsGeoActions.md#describegeofencecollection)
- [DescribeKey](AwsGeoActions.md#describekey)
- [DescribeMap](AwsGeoActions.md#describemap)
- [DescribePlaceIndex](AwsGeoActions.md#describeplaceindex)
- [DescribeRouteCalculator](AwsGeoActions.md#describeroutecalculator)
- [DescribeTracker](AwsGeoActions.md#describetracker)
- [DisassociateTrackerConsumer](AwsGeoActions.md#disassociatetrackerconsumer)
- [GetDevicePosition](AwsGeoActions.md#getdeviceposition)
- [GetDevicePositionHistory](AwsGeoActions.md#getdevicepositionhistory)
- [GetGeofence](AwsGeoActions.md#getgeofence)
- [GetMapGlyphs](AwsGeoActions.md#getmapglyphs)
- [GetMapSprites](AwsGeoActions.md#getmapsprites)
- [GetMapStyleDescriptor](AwsGeoActions.md#getmapstyledescriptor)
- [GetMapTile](AwsGeoActions.md#getmaptile)
- [GetPlace](AwsGeoActions.md#getplace)
- [ListDevicePositions](AwsGeoActions.md#listdevicepositions)
- [ListGeofenceCollections](AwsGeoActions.md#listgeofencecollections)
- [ListGeofences](AwsGeoActions.md#listgeofences)
- [ListKeys](AwsGeoActions.md#listkeys)
- [ListMaps](AwsGeoActions.md#listmaps)
- [ListPlaceIndexes](AwsGeoActions.md#listplaceindexes)
- [ListRouteCalculators](AwsGeoActions.md#listroutecalculators)
- [ListTagsForResource](AwsGeoActions.md#listtagsforresource)
- [ListTrackerConsumers](AwsGeoActions.md#listtrackerconsumers)
- [ListTrackers](AwsGeoActions.md#listtrackers)
- [PutGeofence](AwsGeoActions.md#putgeofence)
- [SearchPlaceIndexForPosition](AwsGeoActions.md#searchplaceindexforposition)
- [SearchPlaceIndexForSuggestions](AwsGeoActions.md#searchplaceindexforsuggestions)
- [SearchPlaceIndexForText](AwsGeoActions.md#searchplaceindexfortext)
- [TagResource](AwsGeoActions.md#tagresource)
- [UntagResource](AwsGeoActions.md#untagresource)
- [UpdateGeofenceCollection](AwsGeoActions.md#updategeofencecollection)
- [UpdateKey](AwsGeoActions.md#updatekey)
- [UpdateMap](AwsGeoActions.md#updatemap)
- [UpdatePlaceIndex](AwsGeoActions.md#updateplaceindex)
- [UpdateRouteCalculator](AwsGeoActions.md#updateroutecalculator)
- [UpdateTracker](AwsGeoActions.md#updatetracker)

## Enumeration Members

### AssociateTrackerConsumer

• **AssociateTrackerConsumer** = ``"geo:AssociateTrackerConsumer"``

Grants permission to create an association between a geofence-collection and a
tracker resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_AssociateTrackerConsumer.html

#### Defined in

actions/geo.ts:18

___

### BatchDeleteDevicePositionHistory

• **BatchDeleteDevicePositionHistory** = ``"geo:BatchDeleteDevicePositionHistory"``

Grants permission to delete a batch of device position histories from a tracker
resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchDeleteDevicePositionHistory.html

#### Defined in

actions/geo.ts:25

___

### BatchDeleteGeofence

• **BatchDeleteGeofence** = ``"geo:BatchDeleteGeofence"``

Grants permission to delete a batch of geofences from a geofence collection

See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchDeleteGeofence.html

#### Defined in

actions/geo.ts:31

___

### BatchEvaluateGeofences

• **BatchEvaluateGeofences** = ``"geo:BatchEvaluateGeofences"``

Grants permission to evaluate device positions against the position of geofence
s in a given geofence collection

See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchEvaluateGeofences.html

#### Defined in

actions/geo.ts:38

___

### BatchGetDevicePosition

• **BatchGetDevicePosition** = ``"geo:BatchGetDevicePosition"``

Grants permission to send a batch request to retrieve device positions

See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchGetDevicePosition.html

#### Defined in

actions/geo.ts:44

___

### BatchPutGeofence

• **BatchPutGeofence** = ``"geo:BatchPutGeofence"``

Grants permission to send a batch request for adding geofences into a given geo
fence collection

See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchPutGeofence.html

#### Defined in

actions/geo.ts:51

___

### BatchUpdateDevicePosition

• **BatchUpdateDevicePosition** = ``"geo:BatchUpdateDevicePosition"``

Grants permission to upload a position update for one or more devices to a trac
ker resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchUpdateDevicePosition.html

#### Defined in

actions/geo.ts:58

___

### CalculateRoute

• **CalculateRoute** = ``"geo:CalculateRoute"``

Grants permission to calculate routes using a given route calculator resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRoute.html

#### Defined in

actions/geo.ts:64

___

### CalculateRouteMatrix

• **CalculateRouteMatrix** = ``"geo:CalculateRouteMatrix"``

Grants permission to calculate a route matrix using a given route calculator re
source

See https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRouteMatrix.html

#### Defined in

actions/geo.ts:71

___

### CreateGeofenceCollection

• **CreateGeofenceCollection** = ``"geo:CreateGeofenceCollection"``

Grants permission to create a geofence-collection

See https://docs.aws.amazon.com/location/latest/APIReference/API_CreateGeofenceCollection.html

#### Defined in

actions/geo.ts:77

___

### CreateKey

• **CreateKey** = ``"geo:CreateKey"``

Grants permission to create an API key resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_CreateKey.html

#### Defined in

actions/geo.ts:83

___

### CreateMap

• **CreateMap** = ``"geo:CreateMap"``

Grants permission to create a map resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_CreateMap.html

#### Defined in

actions/geo.ts:89

___

### CreatePlaceIndex

• **CreatePlaceIndex** = ``"geo:CreatePlaceIndex"``

Grants permission to create a place index resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_CreatePlaceIndex.html

#### Defined in

actions/geo.ts:95

___

### CreateRouteCalculator

• **CreateRouteCalculator** = ``"geo:CreateRouteCalculator"``

Grants permission to create a route calculator resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_CreateRouteCalculator.html

#### Defined in

actions/geo.ts:101

___

### CreateTracker

• **CreateTracker** = ``"geo:CreateTracker"``

Grants permission to create a tracker resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_CreateTracker.html

#### Defined in

actions/geo.ts:107

___

### DeleteGeofenceCollection

• **DeleteGeofenceCollection** = ``"geo:DeleteGeofenceCollection"``

Grants permission to delete a geofence-collection

See https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteGeofenceCollection.html

#### Defined in

actions/geo.ts:113

___

### DeleteKey

• **DeleteKey** = ``"geo:DeleteKey"``

Grants permission to delete an API key resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteKey.html

#### Defined in

actions/geo.ts:119

___

### DeleteMap

• **DeleteMap** = ``"geo:DeleteMap"``

Grants permission to delete a map resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteMap.html

#### Defined in

actions/geo.ts:125

___

### DeletePlaceIndex

• **DeletePlaceIndex** = ``"geo:DeletePlaceIndex"``

Grants permission to delete a place index resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_DeletePlaceIndex.html

#### Defined in

actions/geo.ts:131

___

### DeleteRouteCalculator

• **DeleteRouteCalculator** = ``"geo:DeleteRouteCalculator"``

Grants permission to delete a route calculator resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteRouteCalculator.html

#### Defined in

actions/geo.ts:137

___

### DeleteTracker

• **DeleteTracker** = ``"geo:DeleteTracker"``

Grants permission to delete a tracker resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteTracker.html

#### Defined in

actions/geo.ts:143

___

### DescribeGeofenceCollection

• **DescribeGeofenceCollection** = ``"geo:DescribeGeofenceCollection"``

Grants permission to retrieve geofence collection details

See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeGeofenceCollection.html

#### Defined in

actions/geo.ts:149

___

### DescribeKey

• **DescribeKey** = ``"geo:DescribeKey"``

Grants permission to retrieve API key resource details and secret

See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeKey.html

#### Defined in

actions/geo.ts:155

___

### DescribeMap

• **DescribeMap** = ``"geo:DescribeMap"``

Grants permission to retrieve map resource details

See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeMap.html

#### Defined in

actions/geo.ts:161

___

### DescribePlaceIndex

• **DescribePlaceIndex** = ``"geo:DescribePlaceIndex"``

Grants permission to retrieve place-index resource details

See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribePlaceIndex.html

#### Defined in

actions/geo.ts:167

___

### DescribeRouteCalculator

• **DescribeRouteCalculator** = ``"geo:DescribeRouteCalculator"``

Grants permission to retrieve route calculator resource details

See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeRouteCalculator.html

#### Defined in

actions/geo.ts:173

___

### DescribeTracker

• **DescribeTracker** = ``"geo:DescribeTracker"``

Grants permission to retrieve a tracker resource details

See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeTracker.html

#### Defined in

actions/geo.ts:179

___

### DisassociateTrackerConsumer

• **DisassociateTrackerConsumer** = ``"geo:DisassociateTrackerConsumer"``

Grants permission to remove the association between a tracker resource and a ge
ofence-collection

See https://docs.aws.amazon.com/location/latest/APIReference/API_DisassociateTrackerConsumer.html

#### Defined in

actions/geo.ts:186

___

### GetDevicePosition

• **GetDevicePosition** = ``"geo:GetDevicePosition"``

Grants permission to retrieve the latest device position

See https://docs.aws.amazon.com/location/latest/APIReference/API_GetDevicePosition.html

#### Defined in

actions/geo.ts:192

___

### GetDevicePositionHistory

• **GetDevicePositionHistory** = ``"geo:GetDevicePositionHistory"``

Grants permission to retrieve the device position history

See https://docs.aws.amazon.com/location/latest/APIReference/API_GetDevicePositionHistory.html

#### Defined in

actions/geo.ts:198

___

### GetGeofence

• **GetGeofence** = ``"geo:GetGeofence"``

Grants permission to retrieve the geofence details from a geofence-collection

See https://docs.aws.amazon.com/location/latest/APIReference/API_GetGeofence.html

#### Defined in

actions/geo.ts:204

___

### GetMapGlyphs

• **GetMapGlyphs** = ``"geo:GetMapGlyphs"``

Grants permission to retrieve the glyph file for a map resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapGlyphs.html

#### Defined in

actions/geo.ts:210

___

### GetMapSprites

• **GetMapSprites** = ``"geo:GetMapSprites"``

Grants permission to retrieve the sprite file for a map resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapSprites.html

#### Defined in

actions/geo.ts:216

___

### GetMapStyleDescriptor

• **GetMapStyleDescriptor** = ``"geo:GetMapStyleDescriptor"``

Grants permission to retrieve the map style descriptor from a map resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapStyleDescriptor.html

#### Defined in

actions/geo.ts:222

___

### GetMapTile

• **GetMapTile** = ``"geo:GetMapTile"``

Grants permission to retrieve the map tile from the map resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapTile.html

#### Defined in

actions/geo.ts:228

___

### GetPlace

• **GetPlace** = ``"geo:GetPlace"``

Grants permission to find a place by its unique ID

See https://docs.aws.amazon.com/location/latest/APIReference/API_GetPlace.html

#### Defined in

actions/geo.ts:234

___

### ListDevicePositions

• **ListDevicePositions** = ``"geo:ListDevicePositions"``

Grants permission to retrieve a list of devices and their latest positions from
the given tracker resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_ListDevicePositions.html

#### Defined in

actions/geo.ts:241

___

### ListGeofenceCollections

• **ListGeofenceCollections** = ``"geo:ListGeofenceCollections"``

Grants permission to lists geofence-collections

See https://docs.aws.amazon.com/location/latest/APIReference/API_ListGeofenceCollections.html

#### Defined in

actions/geo.ts:247

___

### ListGeofences

• **ListGeofences** = ``"geo:ListGeofences"``

Grants permission to list geofences stored in a given geofence collection

See https://docs.aws.amazon.com/location/latest/APIReference/API_ListGeofences.html

#### Defined in

actions/geo.ts:253

___

### ListKeys

• **ListKeys** = ``"geo:ListKeys"``

Grants permission to list API key resources

See https://docs.aws.amazon.com/location/latest/APIReference/API_ListKeys.html

#### Defined in

actions/geo.ts:259

___

### ListMaps

• **ListMaps** = ``"geo:ListMaps"``

Grants permission to list map resources

See https://docs.aws.amazon.com/location/latest/APIReference/API_ListMaps.html

#### Defined in

actions/geo.ts:265

___

### ListPlaceIndexes

• **ListPlaceIndexes** = ``"geo:ListPlaceIndexes"``

Grants permission to return a list of place index resources

See https://docs.aws.amazon.com/location/latest/APIReference/API_ListPlaceIndexes.html

#### Defined in

actions/geo.ts:271

___

### ListRouteCalculators

• **ListRouteCalculators** = ``"geo:ListRouteCalculators"``

Grants permission to return a list of route calculator resources

See https://docs.aws.amazon.com/location/latest/APIReference/API_ListRouteCalculators.html

#### Defined in

actions/geo.ts:277

___

### ListTagsForResource

• **ListTagsForResource** = ``"geo:ListTagsForResource"``

Grants permission to list the tags (metadata) which you have assigned to the re
source

See https://docs.aws.amazon.com/location/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/geo.ts:284

___

### ListTrackerConsumers

• **ListTrackerConsumers** = ``"geo:ListTrackerConsumers"``

Grants permission to retrieve a list of geofence collections currently associat
ed to the given tracker resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_ListTrackerConsumers.html

#### Defined in

actions/geo.ts:291

___

### ListTrackers

• **ListTrackers** = ``"geo:ListTrackers"``

Grants permission to return a list of tracker resources

See https://docs.aws.amazon.com/location/latest/APIReference/API_ListTrackers.html

#### Defined in

actions/geo.ts:297

___

### PutGeofence

• **PutGeofence** = ``"geo:PutGeofence"``

Grants permission to add a new geofence or update an existing geofence to a giv
en geofence-collection

See https://docs.aws.amazon.com/location/latest/APIReference/API_PutGeofence.html

#### Defined in

actions/geo.ts:304

___

### SearchPlaceIndexForPosition

• **SearchPlaceIndexForPosition** = ``"geo:SearchPlaceIndexForPosition"``

Grants permission to reverse geocodes a given coordinate

See https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForPosition.html

#### Defined in

actions/geo.ts:310

___

### SearchPlaceIndexForSuggestions

• **SearchPlaceIndexForSuggestions** = ``"geo:SearchPlaceIndexForSuggestions"``

Grants permission to generate suggestions for addresses and points of interest
based on partial or misspelled free-form text

See https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForSuggestions.html

#### Defined in

actions/geo.ts:317

___

### SearchPlaceIndexForText

• **SearchPlaceIndexForText** = ``"geo:SearchPlaceIndexForText"``

Grants permission to geocode free-form text, such as an address, name, city or
region

See https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForText.html

#### Defined in

actions/geo.ts:324

___

### TagResource

• **TagResource** = ``"geo:TagResource"``

Grants permission to adds to or modifies the tags of the given resource. Tags a
re metadata which can be used to manage a resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_TagResource.html

#### Defined in

actions/geo.ts:331

___

### UntagResource

• **UntagResource** = ``"geo:UntagResource"``

Grants permission to remove the given tags (metadata) from the resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_UntagResource.html

#### Defined in

actions/geo.ts:337

___

### UpdateGeofenceCollection

• **UpdateGeofenceCollection** = ``"geo:UpdateGeofenceCollection"``

Grants permission to update a geofence collection

See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateGeofenceCollection.html

#### Defined in

actions/geo.ts:343

___

### UpdateKey

• **UpdateKey** = ``"geo:UpdateKey"``

Grants permission to update an API key resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateKey.html

#### Defined in

actions/geo.ts:349

___

### UpdateMap

• **UpdateMap** = ``"geo:UpdateMap"``

Grants permission to update a map resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateMap.html

#### Defined in

actions/geo.ts:355

___

### UpdatePlaceIndex

• **UpdatePlaceIndex** = ``"geo:UpdatePlaceIndex"``

Grants permission to update a place index resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdatePlaceIndex.html

#### Defined in

actions/geo.ts:361

___

### UpdateRouteCalculator

• **UpdateRouteCalculator** = ``"geo:UpdateRouteCalculator"``

Grants permission to update a route calculator resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateRouteCalculator.html

#### Defined in

actions/geo.ts:367

___

### UpdateTracker

• **UpdateTracker** = ``"geo:UpdateTracker"``

Grants permission to update a tracker resource

See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateTracker.html

#### Defined in

actions/geo.ts:373
