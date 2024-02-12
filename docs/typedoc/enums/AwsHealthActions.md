[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsHealthActions

# Enumeration: AwsHealthActions

All IAM policy actions for AWS Health APIs and Notifications (HEALTH)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthapisandnotifications.html

2024-02-12T09:57:33.947Z

## Table of contents

### Enumeration Members

- [DescribeAffectedAccountsForOrganization](AwsHealthActions.md#describeaffectedaccountsfororganization)
- [DescribeAffectedEntities](AwsHealthActions.md#describeaffectedentities)
- [DescribeAffectedEntitiesForOrganization](AwsHealthActions.md#describeaffectedentitiesfororganization)
- [DescribeEntityAggregates](AwsHealthActions.md#describeentityaggregates)
- [DescribeEntityAggregatesForOrganization](AwsHealthActions.md#describeentityaggregatesfororganization)
- [DescribeEventAggregates](AwsHealthActions.md#describeeventaggregates)
- [DescribeEventDetails](AwsHealthActions.md#describeeventdetails)
- [DescribeEventDetailsForOrganization](AwsHealthActions.md#describeeventdetailsfororganization)
- [DescribeEventTypes](AwsHealthActions.md#describeeventtypes)
- [DescribeEvents](AwsHealthActions.md#describeevents)
- [DescribeEventsForOrganization](AwsHealthActions.md#describeeventsfororganization)
- [DescribeHealthServiceStatusForOrganization](AwsHealthActions.md#describehealthservicestatusfororganization)
- [DisableHealthServiceAccessForOrganization](AwsHealthActions.md#disablehealthserviceaccessfororganization)
- [EnableHealthServiceAccessForOrganization](AwsHealthActions.md#enablehealthserviceaccessfororganization)

## Enumeration Members

### DescribeAffectedAccountsForOrganization

• **DescribeAffectedAccountsForOrganization** = ``"health:DescribeAffectedAccountsForOrganization"``

Grants permission to retrieve a list of accounts that have been affected by the
specified events in organization

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html

#### Defined in

actions/health.ts:18

___

### DescribeAffectedEntities

• **DescribeAffectedEntities** = ``"health:DescribeAffectedEntities"``

Grants permission to retrieve a list of entities that have been affected by the
specified events

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html

#### Defined in

actions/health.ts:25

___

### DescribeAffectedEntitiesForOrganization

• **DescribeAffectedEntitiesForOrganization** = ``"health:DescribeAffectedEntitiesForOrganization"``

Grants permission to retrieve a list of entities that have been affected by the
specified events and accounts in organization

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html

#### Defined in

actions/health.ts:32

___

### DescribeEntityAggregates

• **DescribeEntityAggregates** = ``"health:DescribeEntityAggregates"``

Grants permission to retrieve the number of entities that are affected by each
of the specified events

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html

#### Defined in

actions/health.ts:39

___

### DescribeEntityAggregatesForOrganization

• **DescribeEntityAggregatesForOrganization** = ``"health:DescribeEntityAggregatesForOrganization"``

Grants permission to retrieve the number of entities that are affected by each
of the specified events in an organization

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregatesForOrganization.html

#### Defined in

actions/health.ts:46

___

### DescribeEventAggregates

• **DescribeEventAggregates** = ``"health:DescribeEventAggregates"``

Grants permission to retrieve the number of events of each event type (issue, s
cheduled change, and account notification)

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html

#### Defined in

actions/health.ts:53

___

### DescribeEventDetails

• **DescribeEventDetails** = ``"health:DescribeEventDetails"``

Grants permission to retrieve detailed information about one or more specified
events

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html

#### Defined in

actions/health.ts:60

___

### DescribeEventDetailsForOrganization

• **DescribeEventDetailsForOrganization** = ``"health:DescribeEventDetailsForOrganization"``

Grants permission to retrieve detailed information about one or more specified
events for provided accounts in organization

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html

#### Defined in

actions/health.ts:67

___

### DescribeEventTypes

• **DescribeEventTypes** = ``"health:DescribeEventTypes"``

Grants permission to retrieve the event types that meet the specified filter cr
iteria

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html

#### Defined in

actions/health.ts:74

___

### DescribeEvents

• **DescribeEvents** = ``"health:DescribeEvents"``

Grants permission to retrieve information about events that meet the specified
filter criteria

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html

#### Defined in

actions/health.ts:81

___

### DescribeEventsForOrganization

• **DescribeEventsForOrganization** = ``"health:DescribeEventsForOrganization"``

Grants permission to retrieve information about events that meet the specified
filter criteria in organization

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html

#### Defined in

actions/health.ts:88

___

### DescribeHealthServiceStatusForOrganization

• **DescribeHealthServiceStatusForOrganization** = ``"health:DescribeHealthServiceStatusForOrganization"``

Grants permission to retrieve the status of enabling or disabling the Organizat
ional View feature

See https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html

#### Defined in

actions/health.ts:95

___

### DisableHealthServiceAccessForOrganization

• **DisableHealthServiceAccessForOrganization** = ``"health:DisableHealthServiceAccessForOrganization"``

Grants permission to disable the Organizational View feature

See https://docs.aws.amazon.com/health/latest/APIReference/API_DisableHealthServiceAccessForOrganization.html

#### Defined in

actions/health.ts:101

___

### EnableHealthServiceAccessForOrganization

• **EnableHealthServiceAccessForOrganization** = ``"health:EnableHealthServiceAccessForOrganization"``

Grants permission to enable the Organizational View feature

See https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html

#### Defined in

actions/health.ts:107
