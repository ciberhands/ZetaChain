---
sidebar_position: 1
sidebar_label: Overview
hide_title: true
id: overview
title: Overview
---

# Cross-Chain Messaging

Cross-chain messaging (CCM) lets you send messages from any connected chain to
any connected chain, including ZetaChain. Cross-chain messaging makes the most
sense for applications that generally need minimal logic or state to maintain
across all chains, and where data that needs only to be passed between different
chains one way.

```solidity
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/evm/tools/ZetaInteractor.sol";
import "@zetachain/protocol-contracts/contracts/evm/interfaces/ZetaInterfaces.sol";

contract YourContract is ZetaInteractor, ZetaReceiver {
    constructor(address connectorAddress)
        ZetaInteractor(connectorAddress)
    {}

    function sendMessage(uint256 destinationChainId) external payable {
        connector.send(
            ZetaInterfaces.SendInput({
                destinationChainId: destinationChainId,
                destinationAddress: interactorsByChainId[destinationChainId],
                destinationGasLimit: 300000,
                message: abi.encode("Hello, Cross-Chain World!"),
                zetaValueAndGas: msg.value,
                zetaParams: abi.encode("")
            })
        );
    }

    function onZetaMessage(ZetaInterfaces.ZetaMessage calldata zetaMessage) external override isValidMessageCall(zetaMessage) {
        // Handle the message
    }

    function onZetaRevert(ZetaInterfaces.ZetaRevert calldata zetaRevert) external override isValidRevertCall(zetaRevert) {
        // Handle the revert
    }
}
```

The contract above is a very simple example of a cross-chain messaging contract.
Check out the
[Message tutorial](/developers/cross-chain-messaging/examples/hello-world/) for
a more in-depth example.

CCM contracts are deployed on two or more connected chains. ZetaChain acts as a
relayer transferring the messages between blockchains.

To send a message a user calls a function that executes `connector.send()`.
ZetaChain picks up the message and sends it to the destination chain. The
message is then received by a CCM contract passed to the `onZetaMessage`
function.

A good use-case of CCM is an application that needs only to call a contract or
send value to an address on a different chain. After the message is received and
processed on the destination, the application ideally doesn't have to broadcast
anything back to synchronize state for anything, and the sender doesn't care
about the results.

Cross-chain messaging works to build a variety of applications and primitives
such as:

- Omnichain NFTs that can be sent between different chains, and that don't need
  to know about the state of the collection on other chains
- “Simple” swap or bridge apps that use liquidity pools on existing chains
- Proving ownership of NFTs or simple action-calls to a different chain
