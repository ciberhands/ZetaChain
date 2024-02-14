---
sidebar_position: 1
sidebar_label: Your First Cross-Chain Message
hide_title: true
id: hello-world
title: Your First Cross-Chain Message
---

# First Cross-Chain Message

In this tutorial we will create a simple contract that allows sending a message
from one chain to another using the
[Connector API](/developers/cross-chain-messaging/connector/).

<div style={{width: "100%", height: "auto", "aspect-ratio": "16 / 10"}}>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qkB-X8gfuTY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 18 or above)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Set up your environment

```
git clone https://github.com/zeta-chain/template
cd template
yarn
```

## Create the Contract

To create a new cross-chain messaging contract you will use the `messaging`
Hardhat task available by default in the template.

```
npx hardhat messaging CrossChainMessage message:string
```

The `messaging` task accepts one or more arguments: the name of the contract and
a list of arguments (optionally with types). The arguments define the contents
of the message that will be sent across chains.

In the example above the message will have only one field: `message` of type
`string`. If the type is not specified it is assumed to be `string`.

The `messaging` task has created:

- `contracts/CrossChainMessage.sol`: a Solidity cross-chain messaging contract
- `tasks/deploy.ts`: a Hardhat task to deploy the contract on one or more chains
- `tasks/interact.ts`: a Hardhat task to interact with the contract

It also modified `hardhat.config.ts` to import both `deploy` and `interact`
tasks.

## Cross-Chain Messaging Contract

Let's review the contents of the `CrossChainMessage` contract:

```solidity title="contracts/CrossChainMessage.sol" reference
https://github.com/zeta-chain/example-contracts/blob/main/messaging/message/contracts/CrossChainMessage.sol
```

The contract:

- inherits from
  [`ZetaInteractor`](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/tools/ZetaInteractor.sol),
  which provides two modifiers that are used to validate the message and revert
  calls: `isValidMessageCall` and `isValidRevertCall`.
- implements
  [`ZetaReceiver`](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/interfaces/ZetaInterfaces.sol),
  which defines two functions: `onZetaMessage` and `onZetaRevert`.

State Variables:

- `CROSS_CHAIN_MESSAGE_MESSAGE_TYPE`: a public constant state variable which
  defines the message type. If your contract supports more than one message
  type, it's useful to define a constant for each one.
- `_zetaConsumer`: a private immutable state variable that stores the address of
  `ZetaTokenConsumer`, which is used amond other things for getting ZETA tokens
  from native tokens to pay for gas when sending a message.
- `_zetaToken`: an internal immutable state variable that stores the address of
  the ZETA token contract.

The contract defines two events: `CrossChainMessageEvent` emitted when a message
is processed on the destination chain and `CrossChainMessageRevertedEvent`
emitted when a message is reverted on the destination chain.

The constructor passes `connectorAddress` to the `ZetaInteractor` constructor
and initializes both `_zetaToken` and `_zetaConsumer` state variables.

The `sendMessage` function is used to send a message to a recipient contract on
the destination chain. It first checks that the destination chain ID is valid.
Then it uses ZETA consumer to get the needed amount of ZETA tokens from the
provided `msg.value` (amount of native gas assets sent with the function call),
and approves the `ZetaConnector` to spend the `zetaValueAndGas` amount of ZETA
tokens.

The `sendMessage` function uses `connector.send` to send a crosss-chain message
with the following arguments wrapped in a struct:

- `destinationChainId`: chain ID of the destination chain
- `destinationAddress`: address of the contract receiving the message on the
  destination chain (expressed in bytes since it can be non-EVM)
- `destinationGasLimit`: gas limit for the destination chain's transaction
- `message`: arbitrary message to be parsed by the receiving contract on the
  destination chain
- `zetaValueAndGas`: amount of ZETA tokens to be sent to the destination chain,
  ZetaChain gas fees, and destination chain gas fees (expressed in ZETA tokens)
- `zetaParams`: optional ZetaChain parameters.

The `onZetaMessage` function processes incoming cross-chain messages. The
function decodes the message to identify its type and content. If the message
type matches a predefined constant, the message's reception is logged through
the `CrossChainMessageEvent`. However, if the type is unrecognized, the function
reverts to ensure that only specific message types are handled. The function
also uses a `isValidMessageCall` modifier to verify the message's authenticity,
ensuring it comes from a trusted source.

The `onZetaRevert` function handles the reversal of cross-chain messages. Taking
in a `ZetaInterfaces.ZetaRevert` parameter, the function decodes this reverted
message to identify its type and content. If the message type aligns with a
predefined constant, the function logs the reversal through the
`CrossChainMessageRevertedEvent`. On the other hand, if the type is not
recognized, the function reverts the transaction. The function also uses the
`isValidRevertCall` modifier to ensure that the revert message is genuine and
originates from the trusted source.

## Deploy Task

The `messaging` task has created a Hardhat task to deploy the contract.

```ts title="tasks/deploy.ts" reference
https://github.com/zeta-chain/example-contracts/blob/main/messaging/message/tasks/deploy.ts
```

To establish cross-chain messaging between blockchains via ZetaChain, you need
to deploy contracts capable of sending and receiving cross-chain messages to two
or more blockchains connected to ZetaChain.

You can specify the desired chains by using a `--networks` parameter of the
`deploy` task, which accepts a list of network names separated by commas. For
instance, `--networks goerli_testnet,bsc_testnet`.

The `main` function maintains a mapping of network names to their corresponding
deployed contract addresses, iterating over the networks to deploy the contract
on each one.

The contract's constructor requires three arguments: the connector contract's
address, the ZETA token's address, and the ZETA token consumer contract's
address. These addresses are obtained using ZetaChain's `getAddress`.

The `main` function subsequently sets interactors for each contract. An
interactor is a mapping between a chain ID of the destination and the contract
address on that chain.

When deploying to two chains (like Goerli and BSC testnet), you will invoke
`setInteractorByChainId` on a Goerli contract and pass the BSC testnet chain ID
(97) and the BSC testnet contract address. You then perform the same operation
on a BSC testnet contract, passing the Goerli chain ID (5) and the Goerli
contract address. If deploying to more than two chains, you must call
`setInteractorByChainId` for each link between the chains.

## Interact Task

The `messaging` task has also created a Hardhat task to interact with the
contract:

```ts title="tasks/interact.ts"
https://github.com/zeta-chain/example-contracts/blob/main/messaging/message/tasks/interact.ts
```

The task accepts the following arguments:

- `contract`: address of the contract on the source chain
- `amount`: amount of native tokens to send with the transaction
- `destination`: name of the destination chain
- `message`: message to be sent to the destination chain

The `main` function uses the `contract` argument to attach to the contract on
the source chain. It then uses the `destination` argument to obtain the
destination chain's chain ID. The function subsequently converts the `message`
argument to bytes and sends a transaction to the contract's `sendMessage`
function, passing the destination chain ID and the message.

Finally, the task uses the `trackCCTX` function from
`@zetachain/toolkit/helpers` to track the token transfer transaction. The
function waits for the transaction to appear on ZetaChain and tracks the status
of the transaction. Transaction tracking is optional, but helpful to know when
the transaction has been processed by ZetaChain.

## Create an Account

To deploy and interact with the contract you will need a wallet with tokens.

Create a new wallet account:

```
npx hardhat account --save
```

This command generates a random wallet, prints information about the wallet to
the terminal, and saves the private key to a `.env` file to make it accessible
to Hardhat.

## Use the Faucet to Request Tokens

To pay for the transaction fees to deploy and interact with the cross-chain
messaging contracts you will need native gas tokens on the connected chains you
are deploying contracts to. You can find a list of recommended faucets
[in the docs](/reference/get-testnet-zeta/).

## Check Token Balances

```
npx hardhat balances
```

## Deploy the Contract

Clear the cache and artifacts, then compile the contract:

```
npx hardhat compile --force
```

Run the following command to deploy the contract to two networks:

```
npx hardhat deploy --networks bsc_testnet,goerli_testnet
```

```
🚀 Successfully deployed contract on bsc_testnet
📜 Contract address: 0x6Fd784c16219026Ab0349A1a8A6e99B6eE579C93

🚀 Successfully deployed contract on goerli_testnet.
📜 Contract address: 0xf1907bb130feb28D6e1305C53A4bfdb32140d8E6

🔗 Setting interactors for a contract on bsc_testnet
✅ Interactor address for 5 (goerli_testnet) is set to 0xf1907bb130feb28d6e1305c53a4bfdb32140d8e6

🔗 Setting interactors for a contract on goerli_testnet
✅ Interactor address for 97 (bsc_testnet) is set to 0x6fd784c16219026ab0349a1a8a6e99b6ee579c93
```

## Interact with the Contract

Send a message from BSC testnet to Goerli using the contract address (see the
output of the `deploy` task). Make sure to submit enough native tokens with
`--amount` to pay for the transaction fees.

```
npx hardhat interact --message hello --network bsc_testnet --destination goerli_testnet --contract 0x6Fd784c16219026Ab0349A1a8A6e99B6eE579C93 --amount 2
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

✅ "sendHelloWorld" transaction has been broadcasted to bsc_testnet
📝 Transaction hash: 0xa3a507d34056f4c00b753e7d0b47b16eb6d35b3c5016efa0323beb274725b1a1
```

After the cross-chain transaction is processed on ZetaChain, look up the
contract on the Goerli explorer by the contract address
(`0xf1907bb130feb28D6e1305C53A4bfdb32140d8E6`) and you should be able to see the
emitted `HelloWorldEvent` event.

![](/img/docs/ccm-message-explorer.png)

Congratulations! 🎉 In this tutorial you have:

- cloned the Hardhat contract template
- used `npx hardhat messaging` to create a new cross-chain messaging contract
- reviewed the contents of the generated contract and the tasks to deploy and
  interact with the contract
- successfully deployed the contract to two connected chains and set interactors
  on each contract
- sent a message from one chain to another using the `connector.send`

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/messaging/message
