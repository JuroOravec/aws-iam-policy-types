import type { AwsPolicyAction } from './autogenerated';

type Either<T, V1, V2> = (T & V1) | (T & V2);

export interface AwsIAMPolicy {
  Version: AwsIAMPolicyVersion;
  /** See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_id.html */
  Id?: string;
  Statement: AwsIAMPolicyStatement[];
}

export interface ExclusiveAwsIAMPolicy {
  Version: AwsIAMPolicyVersion;
  /** See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_id.html */
  Id?: string;
  Statement: ExclusiveAwsIAMPolicyStatement[];
}

/** See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_version.html */
export type AwsIAMPolicyVersion = '2012-10-17' | '2008-10-17';

/** See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html */
interface AwsIAMPolicyStatementBase {
  /**
   * Statement ID. E.g. `"AllowUnlessOwnedBySomeoneElse"`
   *
   * See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html
   */
  Sid?: string;
  /** See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_effect.html */
  Effect: 'Allow' | 'Deny';
  /**
   * # TODO
   *
   * See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html
   */
  Principal?:
    | '*'
    | { AWS: string | string[] }
    | { Federated: string | string[] }
    | { Service: string | string[] };
  /**
   * # TODO
   *
   * See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html
   */
  NotPrincipal?:
    | { AWS: string | string[] }
    | { Federated: string | string[] }
    | { Service: string | string[] };
  /** # TODO */
  Condition?: Record<string, any>;
}

type ResourceField = {
  /**
   * E.g. `"arn:aws:s3:::*"`
   *
   * See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html
   */
  Resource: string | string[];
};
type NotResourceField = {
  /**
   * E.g. `"arn:aws:s3:::*"`
   *
   * See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html
   */
  NotResource: string | string[];
};

type ActionField = {
  /**
   * E.g. `['s3:ListAllMyBuckets', 's3:GetBucketLocation']`
   *
   * See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html
   */
  Action: AwsPolicyAction | AwsPolicyAction[];
};
type NotActionField = {
  /**
   * E.g. `['s3:ListAllMyBuckets', 's3:GetBucketLocation']`
   *
   * See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html
   */
  NotAction: AwsPolicyAction | AwsPolicyAction[];
};

/** See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html */
export type AwsIAMPolicyStatement = AwsIAMPolicyStatementBase &
  Partial<ResourceField> &
  Partial<NotResourceField> &
  Partial<ActionField> &
  Partial<NotActionField>;

/**
 * Same as {@link AwsIAMPolicyStatement}, except the type is inferred to allow
 * only one of `Action`/`NotAction`, and only one of `Resource`/`NotResource`.
 *
 * See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html
 */
export type ExclusiveAwsIAMPolicyStatement = Either<
  Either<AwsIAMPolicyStatementBase, ResourceField, NotResourceField>,
  ActionField,
  NotActionField
>;
