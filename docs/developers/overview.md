---
sidebar_position: 1
---

# Start building with ZetaChain

At a high level, ZetaChain is a Proof of Stake (PoS) blockchain developed using
the Cosmos SDK and Tendermint Core consensus engine. As a result, ZetaChain
enjoys fast block time and instant finality.

ZetaChain hosts an Ethereum Virtual Machine (EVM) compatible execution layer
referred to as zEVM. In addition to supporting all EVM features and standard
interactions (such as contract creation, contract interaction, and contract
composition), zEVM's distinguishing characteristics include:

- The ability for contracts on zEVM to be called from external chains
- The capacity for contracts on zEVM to generate outbound transactions on
  external chains.

These two unique features enable zEVM to function as a general-purpose
programmable platform, supporting cross-chain transactions that can atomically
modify states across different chains in a single step.

When developing on ZetaChain, you create zEVM contracts. While zEVM contracts
can be any standard Solidity contract, to fully utilize ZetaChain's
capabilities, they must adhere to specific interfaces. These interfaces, unique
to ZetaChain, enable interaction with externally connected blockchains.

ZetaChain offers two ways to develop dApps: **omnichain contracts** and
**cross-chain message passing**.

## Omnichain contracts

With [omnichain contract](/developers/omnichain/overview) you only need to
deploy **a single omnichain contract** to ZetaChain. No contracts on connected
chains are required.

For a contract to be considered omnichain, it must implement a method that is
executed on a cross chain call.

On a connected chain, a user can transfer an asset to a ZetaChain address,
referred to as a Threshold Signature Scheme (TSS) address.

- If the transfer only includes **an asset**, the asset becomes available to the
  omnichain contract.
- If the transfer includes **an asset and a message** containing the omnichain
  contract address and data, the asset becomes available to the omnichain
  contract, and the contract is called with the message data as an argument.

Assets transferred to a TSS address on ZetaChain are represented as
[ZRC-20](/developers/tokens/zrc20) tokens. ZRC-20 is an extension of ERC-20 that
supports additional functionality for deposits from and withdrawals to connected
chains.

The state of your whole dApp can be stored in this omnichain contract.

Right now omnichain contracts support the following features:

- Transfer of native gas asset (ETH, BNB, MATIC, etc.) between connected chains.
- Transfer of ERC-20 tokens between connected chains.

### Advantages of omnichain contracts

Developers can extend common applications like Uniswap V2/V3, Curve, Aave, and
Compound by making them compatible with ZRC-20. These applications have been
audited and battle-tested on Ethereum and can easily be deployed and built on
ZetaChain. The changes required to add ZRC-20 support are minimal, and users may
interact with these applications in single-step transactions just as they would
on Ethereum.

ZRC-20 can easily support Bitcoin/Dogecoin which do not have capability or
efficiency to support general purpose smart contracts for applications like
swapping, lending, etc.

ZRC-20 may cost significantly less gas than message passing in many use cases
because its interactions with foreign chains are confined to fungible coins
(standard value transfer of ETH/BNB/MATIC costs 21k gas, moving ERC20 tokens
costs around 60k gas; no logic/state on foreign chains means much less gas).

With omnichain smart contracts, you can pair and trade native asset liquidity
directly against each other. This minimizes steps to trade native assets in a
single step, and it doesn't involve a bridge or wrapping step or sending complex
messages. For example, you could trade Ethereum ETH directly for Polygon USDC
through a unified pool in a single transaction.

With ZRC-20/zEVM, exception/revert handling is much simpler as foreign
interaction is confined to either a standard ERC-20/contract interaction
(success) or no contract interaction (failure) immediately.

## Cross-chain message passing

With
[cross-chain message (CCM) passing](/developers/cross-chain-messaging/overview)
you deploy **CCM-enabled contracts on connected chains** that can pass arbitrary
message data and value between each other.

On a connected chain a user can call a CCM-enabled contract. The contract calls
the Connector API and sends a message. ZetaChain acts as a relayer and transmits
the message to the destination chain. On the destination chain a CCM-enabled
contract uses the Connector API to receive the message and handles it.

The state is stored on a set of CCM-enabled contracts on different chains.

CCM makes sense for applications that only need unidirectional and asynchronous
logic/effects and that don't need or benefit from a unified state.

### Advantages of cross-chain message passing

CCM supports any type of data transfer and it's up to the contracts to decide
how to handle the data.

CCM is a reliable general purpose solution for augmenting existing applications
with cross-chain functionality.

With messages, you can leverage existing liquidity like Uniswap pools on
existing chains, and trade via burning/minting ZETA through ZetaChain. This
approach may be more complex (more transactions involved, more gas), but doesn't
rely on liquidity within ZetaChain's ecosystem.

By leveraging the ZETA burn/mint functionality built into ZetaChain, one can
build value-transfer applications that don't bridge/wrap assets, minimizing risk
for users.
