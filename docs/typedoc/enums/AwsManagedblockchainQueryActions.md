[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsManagedblockchainQueryActions

# Enumeration: AwsManagedblockchainQueryActions

All IAM policy actions for Amazon Managed Blockchain Query (MANAGEDBLOCKCHAIN-QUERY)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedblockchainquery.html

2024-02-12T09:58:11.353Z

## Table of contents

### Enumeration Members

- [BatchGetTokenBalance](AwsManagedblockchainQueryActions.md#batchgettokenbalance)
- [GetAssetContract](AwsManagedblockchainQueryActions.md#getassetcontract)
- [GetTokenBalance](AwsManagedblockchainQueryActions.md#gettokenbalance)
- [GetTransaction](AwsManagedblockchainQueryActions.md#gettransaction)
- [ListAssetContracts](AwsManagedblockchainQueryActions.md#listassetcontracts)
- [ListTokenBalances](AwsManagedblockchainQueryActions.md#listtokenbalances)
- [ListTransactionEvents](AwsManagedblockchainQueryActions.md#listtransactionevents)
- [ListTransactions](AwsManagedblockchainQueryActions.md#listtransactions)

## Enumeration Members

### BatchGetTokenBalance

• **BatchGetTokenBalance** = ``"managedblockchain-query:BatchGetTokenBalance"``

Grants permission to batch calls for GetTokenBalance API

See ${APIReferenceDocPage}API_BatchGetTokenBalance.html

#### Defined in

actions/managedblockchain-query.ts:17

___

### GetAssetContract

• **GetAssetContract** = ``"managedblockchain-query:GetAssetContract"``

Grants permission to fetch information about a contract on the blockchain

See ${APIReferenceDocPage}API_GetAssetContract.html

#### Defined in

actions/managedblockchain-query.ts:23

___

### GetTokenBalance

• **GetTokenBalance** = ``"managedblockchain-query:GetTokenBalance"``

Grants permission to retrieve balance of a token for an address on the blockcha
in

See ${APIReferenceDocPage}API_GetTokenBalance.html

#### Defined in

actions/managedblockchain-query.ts:30

___

### GetTransaction

• **GetTransaction** = ``"managedblockchain-query:GetTransaction"``

Grants permission to retrieve a transaction on the blockchain

See ${APIReferenceDocPage}API_GetTransaction.html

#### Defined in

actions/managedblockchain-query.ts:36

___

### ListAssetContracts

• **ListAssetContracts** = ``"managedblockchain-query:ListAssetContracts"``

Grants permission to fetch multiple contracts on the blockchain

See ${APIReferenceDocPage}API_ListAssetContracts.html

#### Defined in

actions/managedblockchain-query.ts:42

___

### ListTokenBalances

• **ListTokenBalances** = ``"managedblockchain-query:ListTokenBalances"``

Grants permission to retrieve multiple balances on the blockchain

See ${APIReferenceDocPage}API_ListTokenBalances.html

#### Defined in

actions/managedblockchain-query.ts:48

___

### ListTransactionEvents

• **ListTransactionEvents** = ``"managedblockchain-query:ListTransactionEvents"``

Grants permission to retrieve events in a transaction on the blockchain

See ${APIReferenceDocPage}API_ListTransactionEvents.html

#### Defined in

actions/managedblockchain-query.ts:54

___

### ListTransactions

• **ListTransactions** = ``"managedblockchain-query:ListTransactions"``

Grants permission to retrieve a multiple transactions on a blockchain

See ${APIReferenceDocPage}API_ListTransactions.html

#### Defined in

actions/managedblockchain-query.ts:60
