[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEksAuthActions

# Enumeration: AwsEksAuthActions

All IAM policy actions for Amazon EKS Auth (EKS-AUTH)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneksauth.html

2024-02-12T09:57:05.586Z

## Table of contents

### Enumeration Members

- [AssumeRoleForPodIdentity](AwsEksAuthActions.md#assumeroleforpodidentity)

## Enumeration Members

### AssumeRoleForPodIdentity

• **AssumeRoleForPodIdentity** = ``"eks-auth:AssumeRoleForPodIdentity"``

Grants permission to exchange a Kubernetes service account token for temporary
AWS credentials

See https://docs.aws.amazon.com/eks/latest/APIReference/API_auth_AssumeRoleForPodIdentity.html

#### Defined in

actions/eks-auth.ts:18
