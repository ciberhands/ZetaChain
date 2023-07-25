---
sidebar_position: 5
sidebar_label: Gas Fees
hide_title: true
id: gas-fees
title: Gas Fees
---

## Cross-Chain Messaging Fees

A user (wallet, contract) must pay fees in order to send data and value across
chains through ZetaChain. A user pays for fees by sending ZETA (and message
data) on a connected chain to a Connector contract. This ZETA is used to pay
validators/stakers/ecosystem pools, as well as for paying the gas on the
destination. To a user, this is all bundled into a single transaction.

### Variable fees based on data size/storage

Network fees have a component based on the size of the message size (bytes) that
a user is trying to send across chains. As an example:

This throttles the volume of data that a user would be able to send while being
economically sound. Sending very complex data would cost more. This mechanism
will begin as a flat fee, then transition into a variable fee and fee market
with further development, similarly to how Smart Contract Fees work.

### Base Fee

ZetaChain includes a base flat fee of (example) 0.01 ZETA for any transactions,
cross-chain messaging transactions or smart contracts. This base fee is
adjustable by the network as needed to deal with network traffic and congestion,
and is burned.

## Different approaches to paying gas fee

When you write a smart contract that uses cross chain messages this contract needs
to pay fees in zeta for every cross chain transaction.

At this point there are several ways to handle this, let's list the main ones:

- Add a param to your method indicating the amount of ZETA you will pay and in
  your contract transfer this amount from the caller to the connector.
  - This is the easiest one. The problem with this approach is the user must
    approve your contract before and you must trust he has enough ZETA in his
    wallet.

```solidity
function sample(uint256 destinationChainId, bytes calldata destinationAddress, uint256 zetaValueAndGas) external {
    if (!availableChainIds[destinationChainId]) revert InvalidDestinationChainId();
    if (zetaValueAndGas == 0) revert InvalidZetaValueAndGas();

    bool success1 = ZetaEth(zetaToken).approve(address(connector), zetaValueAndGas);
    bool success2 = ZetaEth(zetaToken).transferFrom(msg.sender, address(this), zetaValueAndGas);
    if (!(success1 && success2)) revert ErrorTransferringZeta();

    connector.send(
        ZetaInterfaces.SendInput({
            destinationChainId: destinationChainId,
            destinationAddress: destinationAddress,
            destinationGasLimit: 300000,
            message: abi.encode(),
            zetaValueAndGas: zetaValueAndGas,
            zetaParams: abi.encode("")
        })
    );
}
```

- Add ZETA to your contract and consume from itself.
  - This approach is easier for the end user because he has not to worry about
    ZETA but you must guarantee not to run out of tokens in the contract.

```solidity
function sample(uint256 destinationChainId, bytes calldata destinationAddress) external {
    bool success1 = ZetaEth(zetaToken).approve(address(connector), ZETA_GAS);
    if (!success1) revert ErrorApprovingZeta();

    connector.send(
        ZetaInterfaces.SendInput({
            destinationChainId: destinationChainId,
            destinationAddress: destinationAddress,
            destinationGasLimit: 300000,
            message: abi.encode(),
            zetaValueAndGas: ZETA_GAS,
            zetaParams: abi.encode("")
        })
    );
}
```

- Asked for another token from the end user and do the swap.
  - This is one of the best ones. They asked the user to send (or approve) let's
    say USDC or ETH. Everybody knows how to get USDC or ETH. Then your contract
    swaps internally the USDC or ETH for ZETA and uses it to pay the gas. The
    problem with this approach is you have to estimate how much USDC (or any
    token) you will need because of market fluctuation.

```solidity
function sample(uint256 destinationChainId, bytes calldata destinationAddress) external payable{
    uint256 crossChainGas = ZETA_GAS * (10**18);
    uint256 zetaValueAndGas = _zetaConsumer.getZetaFromEth{value: msg.value}(address(this), crossChainGas);
    bool success1 = ZetaEth(zetaToken).approve(address(connector), zetaValueAndGas);
    if (!success1) revert ErrorApprovingZeta();

    connector.send(
        ZetaInterfaces.SendInput({
            destinationChainId: destinationChainId,
            destinationAddress: destinationAddress,
            destinationGasLimit: 300000,
            message: abi.encode(),
            zetaValueAndGas: zetaValueAndGas,
            zetaParams: abi.encode("")
        })
    );
}
```

The last approach even has several advantages and also increases the complexity
of the contract. That's why we code an out-of-the-box solution called
ZetaInteractor. The biggest benefit of this is that it can be easily consumed by
other protocols, helping to expand the ecosystem. Additionally, customers can
use a cross-chain protocol in a completely transparent manner, without even
knowing that ZETA is being used. Furthermore, ZETA liquidity can be consumed on
the local chain, negating the need to worry about how much ZETA to buy; you can
simply acquire the amount that is required.

[ZetaTokenConsumer](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/interfaces/ZetaInterfaces.sol)
is an interface with several implementations that handles all the logic you need
to swap ZETA from/to another token. Right now we have three implementations
([Uniswap V2](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/tools/ZetaTokenConsumerUniV2.strategy.sol),
[Uniswap V3](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/tools/ZetaTokenConsumerUniV3.strategy.sol),
and
[Trident](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/tools/ZetaTokenConsumerTrident.strategy.sol))
using different DEX. You can include it in your contract and just call the
different methods.
