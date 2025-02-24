// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS Budget Service (BUDGETS)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbudgetservice.html
 *
 * 2025-02-24T21:46:56.769Z
 */
export enum AwsBudgetsActions {
  /**
   * Grants permission to configure a response that executes once your budget exceed
   * s a specific budget threshold. Creating a budget action with tags also requires
   * the 'budgets:TagResource' permission
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudgetAction.html
   */
  CreateBudgetAction = 'budgets:CreateBudgetAction',
  /**
   * Grants permission to delete an action that is associated with a specific budget
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DeleteBudgetAction.html
   */
  DeleteBudgetAction = 'budgets:DeleteBudgetAction',
  /**
   * Grants permission to retrieve the details of a specific budget action associate
   * d with a budget
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgetAction.html
   */
  DescribeBudgetAction = 'budgets:DescribeBudgetAction',
  /**
   * Grants permission to retrieve a historical view of the budget actions statuses
   * associated with a particular budget action. These status include statues such a
   * s 'Standby', 'Pending' and 'Executed'
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgetActionHistories.html
   */
  DescribeBudgetActionHistories = 'budgets:DescribeBudgetActionHistories',
  /**
   * Grants permission to retrieve the details of all of the budget actions associat
   * ed with your account
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgetActionsForAccount.html
   */
  DescribeBudgetActionsForAccount = 'budgets:DescribeBudgetActionsForAccount',
  /**
   * Grants permission to retrieve the details of all of the budget actions associat
   * ed with a budget
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgetActionsForBudget.html
   */
  DescribeBudgetActionsForBudget = 'budgets:DescribeBudgetActionsForBudget',
  /**
   * Grants permission to initiate a pending budget action as well as reverse a prev
   * iously executed budget action
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_ExecuteBudgetAction.html
   */
  ExecuteBudgetAction = 'budgets:ExecuteBudgetAction',
  /**
   * Grants permission to view resource tags for a budget or budget action
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_ListTagsForResource.html
   */
  ListTagsForResource = 'budgets:ListTagsForResource',
  /**
   * Grants permission to create and modify budgets, and edit budget details. Creati
   * ng a budget with tags also requires the 'budgets:TagResource' permission
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Operations_AWS_Budgets.html
   */
  ModifyBudget = 'budgets:ModifyBudget',
  /**
   * Grants permission to apply resource tags to a budget or budget action. Also nee
   * ded to create a budget or budget action with tags
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_TagResource.html
   */
  TagResource = 'budgets:TagResource',
  /**
   * Grants permission to remove resource tags from a budget or budget action
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UntagResource.html
   */
  UntagResource = 'budgets:UntagResource',
  /**
   * Grants permission to update the details of a specific budget action associated
   * with a budget
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudgetAction.html
   */
  UpdateBudgetAction = 'budgets:UpdateBudgetAction',
  /**
   * Grants permission to view budgets and budget details
   *
   * See https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Operations_AWS_Budgets.html
   */
  ViewBudget = 'budgets:ViewBudget',
}
