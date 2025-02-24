// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for Amazon Location (GEO)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocation.html
 *
 * 2025-02-24T21:48:38.634Z
 */
export enum AwsGeoActions {
  /**
   * Grants permission to create an association between a geofence-collection and a
   * tracker resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_AssociateTrackerConsumer.html
   */
  AssociateTrackerConsumer = 'geo:AssociateTrackerConsumer',
  /**
   * Grants permission to delete a batch of device position histories from a tracker
   * resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchDeleteDevicePositionHistory.html
   */
  BatchDeleteDevicePositionHistory = 'geo:BatchDeleteDevicePositionHistory',
  /**
   * Grants permission to delete a batch of geofences from a geofence collection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchDeleteGeofence.html
   */
  BatchDeleteGeofence = 'geo:BatchDeleteGeofence',
  /**
   * Grants permission to evaluate device positions against the position of geofence
   * s in a given geofence collection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchEvaluateGeofences.html
   */
  BatchEvaluateGeofences = 'geo:BatchEvaluateGeofences',
  /**
   * Grants permission to send a batch request to retrieve device positions
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchGetDevicePosition.html
   */
  BatchGetDevicePosition = 'geo:BatchGetDevicePosition',
  /**
   * Grants permission to send a batch request for adding geofences into a given geo
   * fence collection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchPutGeofence.html
   */
  BatchPutGeofence = 'geo:BatchPutGeofence',
  /**
   * Grants permission to upload a position update for one or more devices to a trac
   * ker resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_BatchUpdateDevicePosition.html
   */
  BatchUpdateDevicePosition = 'geo:BatchUpdateDevicePosition',
  /**
   * Grants permission to calculate routes using a given route calculator resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRoute.html
   */
  CalculateRoute = 'geo:CalculateRoute',
  /**
   * Grants permission to calculate a route matrix using a given route calculator re
   * source
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRouteMatrix.html
   */
  CalculateRouteMatrix = 'geo:CalculateRouteMatrix',
  /**
   * Grants permission to create a geofence-collection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_CreateGeofenceCollection.html
   */
  CreateGeofenceCollection = 'geo:CreateGeofenceCollection',
  /**
   * Grants permission to create an API key resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_CreateKey.html
   */
  CreateKey = 'geo:CreateKey',
  /**
   * Grants permission to create a map resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_CreateMap.html
   */
  CreateMap = 'geo:CreateMap',
  /**
   * Grants permission to create a place index resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_CreatePlaceIndex.html
   */
  CreatePlaceIndex = 'geo:CreatePlaceIndex',
  /**
   * Grants permission to create a route calculator resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_CreateRouteCalculator.html
   */
  CreateRouteCalculator = 'geo:CreateRouteCalculator',
  /**
   * Grants permission to create a tracker resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_CreateTracker.html
   */
  CreateTracker = 'geo:CreateTracker',
  /**
   * Grants permission to delete a geofence-collection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteGeofenceCollection.html
   */
  DeleteGeofenceCollection = 'geo:DeleteGeofenceCollection',
  /**
   * Grants permission to delete an API key resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteKey.html
   */
  DeleteKey = 'geo:DeleteKey',
  /**
   * Grants permission to delete a map resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteMap.html
   */
  DeleteMap = 'geo:DeleteMap',
  /**
   * Grants permission to delete a place index resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DeletePlaceIndex.html
   */
  DeletePlaceIndex = 'geo:DeletePlaceIndex',
  /**
   * Grants permission to delete a route calculator resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteRouteCalculator.html
   */
  DeleteRouteCalculator = 'geo:DeleteRouteCalculator',
  /**
   * Grants permission to delete a tracker resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteTracker.html
   */
  DeleteTracker = 'geo:DeleteTracker',
  /**
   * Grants permission to retrieve geofence collection details
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeGeofenceCollection.html
   */
  DescribeGeofenceCollection = 'geo:DescribeGeofenceCollection',
  /**
   * Grants permission to retrieve API key resource details and secret
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeKey.html
   */
  DescribeKey = 'geo:DescribeKey',
  /**
   * Grants permission to retrieve map resource details
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeMap.html
   */
  DescribeMap = 'geo:DescribeMap',
  /**
   * Grants permission to retrieve place-index resource details
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribePlaceIndex.html
   */
  DescribePlaceIndex = 'geo:DescribePlaceIndex',
  /**
   * Grants permission to retrieve route calculator resource details
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeRouteCalculator.html
   */
  DescribeRouteCalculator = 'geo:DescribeRouteCalculator',
  /**
   * Grants permission to retrieve a tracker resource details
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeTracker.html
   */
  DescribeTracker = 'geo:DescribeTracker',
  /**
   * Grants permission to remove the association between a tracker resource and a ge
   * ofence-collection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_DisassociateTrackerConsumer.html
   */
  DisassociateTrackerConsumer = 'geo:DisassociateTrackerConsumer',
  /**
   * Grants permission to forecast events for geofences stored in a given geofence c
   * ollection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ForecastGeofenceEvents.html
   */
  ForecastGeofenceEvents = 'geo:ForecastGeofenceEvents',
  /**
   * Grants permission to retrieve the latest device position
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_GetDevicePosition.html
   */
  GetDevicePosition = 'geo:GetDevicePosition',
  /**
   * Grants permission to retrieve the device position history
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_GetDevicePositionHistory.html
   */
  GetDevicePositionHistory = 'geo:GetDevicePositionHistory',
  /**
   * Grants permission to retrieve the geofence details from a geofence-collection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_GetGeofence.html
   */
  GetGeofence = 'geo:GetGeofence',
  /**
   * Grants permission to retrieve the glyph file for a map resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapGlyphs.html
   */
  GetMapGlyphs = 'geo:GetMapGlyphs',
  /**
   * Grants permission to retrieve the sprite file for a map resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapSprites.html
   */
  GetMapSprites = 'geo:GetMapSprites',
  /**
   * Grants permission to retrieve the map style descriptor from a map resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapStyleDescriptor.html
   */
  GetMapStyleDescriptor = 'geo:GetMapStyleDescriptor',
  /**
   * Grants permission to retrieve the map tile from the map resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapTile.html
   */
  GetMapTile = 'geo:GetMapTile',
  /**
   * Grants permission to find a place by its unique ID
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_GetPlace.html
   */
  GetPlace = 'geo:GetPlace',
  /**
   * Grants permission to retrieve a list of devices and their latest positions from
   * the given tracker resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ListDevicePositions.html
   */
  ListDevicePositions = 'geo:ListDevicePositions',
  /**
   * Grants permission to lists geofence-collections
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ListGeofenceCollections.html
   */
  ListGeofenceCollections = 'geo:ListGeofenceCollections',
  /**
   * Grants permission to list geofences stored in a given geofence collection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ListGeofences.html
   */
  ListGeofences = 'geo:ListGeofences',
  /**
   * Grants permission to list API key resources
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ListKeys.html
   */
  ListKeys = 'geo:ListKeys',
  /**
   * Grants permission to list map resources
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ListMaps.html
   */
  ListMaps = 'geo:ListMaps',
  /**
   * Grants permission to return a list of place index resources
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ListPlaceIndexes.html
   */
  ListPlaceIndexes = 'geo:ListPlaceIndexes',
  /**
   * Grants permission to return a list of route calculator resources
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ListRouteCalculators.html
   */
  ListRouteCalculators = 'geo:ListRouteCalculators',
  /**
   * Grants permission to list the tags (metadata) which you have assigned to the re
   * source
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = 'geo:ListTagsForResource',
  /**
   * Grants permission to retrieve a list of geofence collections currently associat
   * ed to the given tracker resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ListTrackerConsumers.html
   */
  ListTrackerConsumers = 'geo:ListTrackerConsumers',
  /**
   * Grants permission to return a list of tracker resources
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_ListTrackers.html
   */
  ListTrackers = 'geo:ListTrackers',
  /**
   * Grants permission to add a new geofence or update an existing geofence to a giv
   * en geofence-collection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_PutGeofence.html
   */
  PutGeofence = 'geo:PutGeofence',
  /**
   * Grants permission to reverse geocodes a given coordinate
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForPosition.html
   */
  SearchPlaceIndexForPosition = 'geo:SearchPlaceIndexForPosition',
  /**
   * Grants permission to generate suggestions for addresses and points of interest
   * based on partial or misspelled free-form text
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForSuggestions.html
   */
  SearchPlaceIndexForSuggestions = 'geo:SearchPlaceIndexForSuggestions',
  /**
   * Grants permission to geocode free-form text, such as an address, name, city or
   * region
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForText.html
   */
  SearchPlaceIndexForText = 'geo:SearchPlaceIndexForText',
  /**
   * Grants permission to adds to or modifies the tags of the given resource. Tags a
   * re metadata which can be used to manage a resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_TagResource.html
   */
  TagResource = 'geo:TagResource',
  /**
   * Grants permission to remove the given tags (metadata) from the resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_UntagResource.html
   */
  UntagResource = 'geo:UntagResource',
  /**
   * Grants permission to update a geofence collection
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateGeofenceCollection.html
   */
  UpdateGeofenceCollection = 'geo:UpdateGeofenceCollection',
  /**
   * Grants permission to update an API key resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateKey.html
   */
  UpdateKey = 'geo:UpdateKey',
  /**
   * Grants permission to update a map resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateMap.html
   */
  UpdateMap = 'geo:UpdateMap',
  /**
   * Grants permission to update a place index resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdatePlaceIndex.html
   */
  UpdatePlaceIndex = 'geo:UpdatePlaceIndex',
  /**
   * Grants permission to update a route calculator resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateRouteCalculator.html
   */
  UpdateRouteCalculator = 'geo:UpdateRouteCalculator',
  /**
   * Grants permission to update a tracker resource
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateTracker.html
   */
  UpdateTracker = 'geo:UpdateTracker',
  /**
   * Grants permission to verify a device position
   *
   * See https://docs.aws.amazon.com/location/latest/APIReference/API_VerifyDevicePosition.html
   */
  VerifyDevicePosition = 'geo:VerifyDevicePosition',
}
