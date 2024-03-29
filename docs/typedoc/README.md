aws-iam-policy-types / [Exports](modules.md)

# AWS IAM Policy types

_Autogenerated Typescript types for AWS IAM Policy and enums for policy actions for almost 400 AWS services._

This package provides typing and enums for AWS IAM Policies, as describes in

<https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html>.

## Installation

```sh
npm i aws-iam-policy-types
```

## Usage

```ts
import { IAM } from '@aws-sdk/client-iam';
import { AwsIAMPolicy, AwsStsActions } from 'aws-iam-policy-types';

interface AwsClient {
  new (input: {
    credentials: {
      accessKeyId?: string;
      secretAccessKey?: string;
      sessionToken?: string;
    };
  }): any;
}

// Configure the AWS SDK
const iam = new IAM({
  region: 'us-west-2',
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  },
});

// Use `AwsIAMPolicy` to have type-safe policy
const assumeRolePolicyDocument: AwsIAMPolicy = {
  Version: policyVersion,
  Statement: [
    {
      Effect: 'Allow',
      Principal: {
        AWS: `arn:aws:iam::${awsAccountId}:root`,
      },
      // Use enums to have type-safe actions
      Action: AwsStsActions.AssumeRole,
    },
  ],
};
const { Role } = await iam.createRole({
  RoleName: 'MyRole',
  AssumeRolePolicyDocument: JSON.stringify(assumeRolePolicyDocument),
});
```

## Actor input reference

[See here the full list of all possible input options](./docs/reference-input.md) that a CrawleeOne crawler can have.

CrawleeOne allows you to configure the following via the `input`:

- [Input from URL or custom function](./docs/reference-input.md#programmatic-input-advanced)
- [Starting URLs](./docs/reference-input.md#starting-urls)
- [Proxy](./docs/reference-input.md#proxy)
- [Privacy & Data governance (GDPR)](./docs/reference-input.md#privacy--data-governance-gdpr)
- [Requests limit, transformation & filtering](./docs/reference-input.md#requests-limit-transformation--filtering-advanced)
- [Output size, transformation & filtering (T in ETL)](./docs/reference-input.md#output-size-transformation--filtering-t-in-etl-advanced)
- [Output Dataset & Caching (L in ETL)](./docs/reference-input.md#output-dataset--caching-l-in-etl-advanced)
- [Crawler configuration](./docs/reference-input.md#crawler-configuration-advanced)
- [Performance configuration](./docs/reference-input.md#performance-configuration-advanced)
- [Logging & Error handling](./docs/reference-input.md#logging--error-handling-advanced)
- [Integrations (Metamorphing)](./docs/reference-input.md#integrations-metamorphing-advanced)

## Contributing

Found a bug or hav a feature request? Please open a new issue.

When contributing with your code, please follow the standard best practices:

- Make a fork with your changes, then make a Merge Request to merge it
- Be polite
