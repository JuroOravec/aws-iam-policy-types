[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsManagedblockchainActions

# Enumeration: AwsManagedblockchainActions

All IAM policy actions for Amazon Managed Blockchain (MANAGEDBLOCKCHAIN)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedblockchain.html

2024-02-12T09:58:10.845Z

## Table of contents

### Enumeration Members

- [CreateAccessor](AwsManagedblockchainActions.md#createaccessor)
- [CreateMember](AwsManagedblockchainActions.md#createmember)
- [CreateNetwork](AwsManagedblockchainActions.md#createnetwork)
- [CreateNode](AwsManagedblockchainActions.md#createnode)
- [CreateProposal](AwsManagedblockchainActions.md#createproposal)
- [DeleteAccessor](AwsManagedblockchainActions.md#deleteaccessor)
- [DeleteMember](AwsManagedblockchainActions.md#deletemember)
- [DeleteNode](AwsManagedblockchainActions.md#deletenode)
- [GET](AwsManagedblockchainActions.md#get)
- [GetAccessor](AwsManagedblockchainActions.md#getaccessor)
- [GetMember](AwsManagedblockchainActions.md#getmember)
- [GetNetwork](AwsManagedblockchainActions.md#getnetwork)
- [GetNode](AwsManagedblockchainActions.md#getnode)
- [GetProposal](AwsManagedblockchainActions.md#getproposal)
- [Invoke](AwsManagedblockchainActions.md#invoke)
- [InvokeRpcBitcoinMainnet](AwsManagedblockchainActions.md#invokerpcbitcoinmainnet)
- [InvokeRpcBitcoinTestnet](AwsManagedblockchainActions.md#invokerpcbitcointestnet)
- [InvokeRpcPolygonMainnet](AwsManagedblockchainActions.md#invokerpcpolygonmainnet)
- [InvokeRpcPolygonMumbaiTestnet](AwsManagedblockchainActions.md#invokerpcpolygonmumbaitestnet)
- [ListAccessors](AwsManagedblockchainActions.md#listaccessors)
- [ListInvitations](AwsManagedblockchainActions.md#listinvitations)
- [ListMembers](AwsManagedblockchainActions.md#listmembers)
- [ListNetworks](AwsManagedblockchainActions.md#listnetworks)
- [ListNodes](AwsManagedblockchainActions.md#listnodes)
- [ListProposalVotes](AwsManagedblockchainActions.md#listproposalvotes)
- [ListProposals](AwsManagedblockchainActions.md#listproposals)
- [ListTagsForResource](AwsManagedblockchainActions.md#listtagsforresource)
- [POST](AwsManagedblockchainActions.md#post)
- [RejectInvitation](AwsManagedblockchainActions.md#rejectinvitation)
- [TagResource](AwsManagedblockchainActions.md#tagresource)
- [UntagResource](AwsManagedblockchainActions.md#untagresource)
- [UpdateMember](AwsManagedblockchainActions.md#updatemember)
- [UpdateNode](AwsManagedblockchainActions.md#updatenode)
- [VoteOnProposal](AwsManagedblockchainActions.md#voteonproposal)

## Enumeration Members

### CreateAccessor

• **CreateAccessor** = ``"managedblockchain:CreateAccessor"``

Grants permission to create an Amazon Managed Blockchain accessor

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateAccessor.html

#### Defined in

actions/managedblockchain.ts:17

___

### CreateMember

• **CreateMember** = ``"managedblockchain:CreateMember"``

Grants permission to create a member of an Amazon Managed Blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateMember.html

#### Defined in

actions/managedblockchain.ts:23

___

### CreateNetwork

• **CreateNetwork** = ``"managedblockchain:CreateNetwork"``

Grants permission to create an Amazon Managed Blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNetwork.html

#### Defined in

actions/managedblockchain.ts:29

___

### CreateNode

• **CreateNode** = ``"managedblockchain:CreateNode"``

Grants permission to create a node within a member of an Amazon Managed Blockch
ain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNode.html

#### Defined in

actions/managedblockchain.ts:36

___

### CreateProposal

• **CreateProposal** = ``"managedblockchain:CreateProposal"``

Grants permission to create a proposal that other blockchain network members ca
n vote on to add or remove a member in an Amazon Managed Blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateProposal.html

#### Defined in

actions/managedblockchain.ts:43

___

### DeleteAccessor

• **DeleteAccessor** = ``"managedblockchain:DeleteAccessor"``

Grants permission to delete an Amazon Managed Blockchain accessor

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteAccessor.html

#### Defined in

actions/managedblockchain.ts:49

___

### DeleteMember

• **DeleteMember** = ``"managedblockchain:DeleteMember"``

Grants permission to delete a member and all associated resources from an Amazo
n Managed Blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteMember.html

#### Defined in

actions/managedblockchain.ts:56

___

### DeleteNode

• **DeleteNode** = ``"managedblockchain:DeleteNode"``

Grants permission to delete a node from a member of an Amazon Managed Blockchai
n network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteNode.html

#### Defined in

actions/managedblockchain.ts:63

___

### GET

• **GET** = ``"managedblockchain:GET"``

Grants permission to send HTTP GET requests to an Ethereum node

See https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/security_iam_id-based-policy-examples.html

#### Defined in

actions/managedblockchain.ts:69

___

### GetAccessor

• **GetAccessor** = ``"managedblockchain:GetAccessor"``

Grants permission to return detailed information about an Amazon Managed Blockc
hain accessor

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetAccessor.html

#### Defined in

actions/managedblockchain.ts:76

___

### GetMember

• **GetMember** = ``"managedblockchain:GetMember"``

Grants permission to return detailed information about a member of an Amazon Ma
naged Blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetMember.html

#### Defined in

actions/managedblockchain.ts:83

___

### GetNetwork

• **GetNetwork** = ``"managedblockchain:GetNetwork"``

Grants permission to return detailed information about an Amazon Managed Blockc
hain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNetwork.html

#### Defined in

actions/managedblockchain.ts:90

___

### GetNode

• **GetNode** = ``"managedblockchain:GetNode"``

Grants permission to return detailed information about a node within a member o
f an Amazon Managed Blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNode.html

#### Defined in

actions/managedblockchain.ts:97

___

### GetProposal

• **GetProposal** = ``"managedblockchain:GetProposal"``

Grants permission to return detailed information about a proposal of an Amazon
Managed Blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetProposal.html

#### Defined in

actions/managedblockchain.ts:104

___

### Invoke

• **Invoke** = ``"managedblockchain:Invoke"``

Grants permission to create WebSocket connections to an Ethereum node

See https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/security_iam_id-based-policy-examples.html

#### Defined in

actions/managedblockchain.ts:110

___

### InvokeRpcBitcoinMainnet

• **InvokeRpcBitcoinMainnet** = ``"managedblockchain:InvokeRpcBitcoinMainnet"``

Grants permission to invoke the Bitcoin Mainnet RPCs

See https://docs.aws.amazon.com/managed-blockchain/latest/ambbtc-dg/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-access-bitcoin-networks

#### Defined in

actions/managedblockchain.ts:116

___

### InvokeRpcBitcoinTestnet

• **InvokeRpcBitcoinTestnet** = ``"managedblockchain:InvokeRpcBitcoinTestnet"``

Grants permission to invoke the Bitcoin Testnet RPCs

See https://docs.aws.amazon.com/managed-blockchain/latest/ambbtc-dg/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-access-bitcoin-networks

#### Defined in

actions/managedblockchain.ts:122

___

### InvokeRpcPolygonMainnet

• **InvokeRpcPolygonMainnet** = ``"managedblockchain:InvokeRpcPolygonMainnet"``

Grants permission to invoke the Polygon Mainnet RPCs

See https://docs.aws.amazon.com/managed-blockchain/latest/ambp-dg/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-access-polygon-networks

#### Defined in

actions/managedblockchain.ts:128

___

### InvokeRpcPolygonMumbaiTestnet

• **InvokeRpcPolygonMumbaiTestnet** = ``"managedblockchain:InvokeRpcPolygonMumbaiTestnet"``

Grants permission to invoke the Polygon Mumbai Testnet RPCs

See https://docs.aws.amazon.com/managed-blockchain/latest/ambp-dg/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-access-polygon-networks

#### Defined in

actions/managedblockchain.ts:134

___

### ListAccessors

• **ListAccessors** = ``"managedblockchain:ListAccessors"``

Grants permission to list the Amazon Managed Blockchain accessors owned by the
current AWS account

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListAccessors.html

#### Defined in

actions/managedblockchain.ts:141

___

### ListInvitations

• **ListInvitations** = ``"managedblockchain:ListInvitations"``

Grants permission to list the invitations extended to the active AWS account fr
om any Managed Blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListInvitations.html

#### Defined in

actions/managedblockchain.ts:148

___

### ListMembers

• **ListMembers** = ``"managedblockchain:ListMembers"``

Grants permission to list the members of an Amazon Managed Blockchain network a
nd the properties of their memberships

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListMembers.html

#### Defined in

actions/managedblockchain.ts:155

___

### ListNetworks

• **ListNetworks** = ``"managedblockchain:ListNetworks"``

Grants permission to list the Amazon Managed Blockchain networks in which the c
urrent AWS account participates

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNetworks.html

#### Defined in

actions/managedblockchain.ts:162

___

### ListNodes

• **ListNodes** = ``"managedblockchain:ListNodes"``

Grants permission to list the nodes within a member of an Amazon Managed Blockc
hain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNodes.html

#### Defined in

actions/managedblockchain.ts:169

___

### ListProposalVotes

• **ListProposalVotes** = ``"managedblockchain:ListProposalVotes"``

Grants permission to list all votes for a proposal, including the value of the
vote and the unique identifier of the member that cast the vote for the given A
mazon Managed Blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposalVotes.html

#### Defined in

actions/managedblockchain.ts:177

___

### ListProposals

• **ListProposals** = ``"managedblockchain:ListProposals"``

Grants permission to list proposals for the given Amazon Managed Blockchain net
work

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposals.html

#### Defined in

actions/managedblockchain.ts:184

___

### ListTagsForResource

• **ListTagsForResource** = ``"managedblockchain:ListTagsForResource"``

Grants permission to view tags associated with an Amazon Managed Blockchain res
ource

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/managedblockchain.ts:191

___

### POST

• **POST** = ``"managedblockchain:POST"``

Grants permission to send HTTP POST requests to an Ethereum node

See https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/security_iam_id-based-policy-examples.html

#### Defined in

actions/managedblockchain.ts:197

___

### RejectInvitation

• **RejectInvitation** = ``"managedblockchain:RejectInvitation"``

Grants permission to reject the invitation to join the blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_RejectInvitation.html

#### Defined in

actions/managedblockchain.ts:203

___

### TagResource

• **TagResource** = ``"managedblockchain:TagResource"``

Grants permission to add tags to an Amazon Managed Blockchain resource

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_TagResource.html

#### Defined in

actions/managedblockchain.ts:209

___

### UntagResource

• **UntagResource** = ``"managedblockchain:UntagResource"``

Grants permission to remove tags from an Amazon Managed Blockchain resource

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UntagResource.html

#### Defined in

actions/managedblockchain.ts:215

___

### UpdateMember

• **UpdateMember** = ``"managedblockchain:UpdateMember"``

Grants permission to update a member of an Amazon Managed Blockchain network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UpdateMember.html

#### Defined in

actions/managedblockchain.ts:221

___

### UpdateNode

• **UpdateNode** = ``"managedblockchain:UpdateNode"``

Grants permission to update a node from a member of an Amazon Managed Blockchai
n network

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UpdateNode.html

#### Defined in

actions/managedblockchain.ts:228

___

### VoteOnProposal

• **VoteOnProposal** = ``"managedblockchain:VoteOnProposal"``

Grants permission to cast a vote for a proposal on behalf of the blockchain net
work member specified

See https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_VoteOnProposal.html

#### Defined in

actions/managedblockchain.ts:235
