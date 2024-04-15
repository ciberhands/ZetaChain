# Types of Transactions

## ZETA Transfer

### ✅ ZETA Between Connected Chains

```jsx
npx hardhat send-zeta --amount 3 --network mumbai_testnet --destination bsc_testnet
```

https://mumbai.polygonscan.com/tx/0x217300fc78a04eaf9c6217749b3e20aa99548771de48638b5016efae853c9368

### ❌ ZETA Between Connected Chains (insufficient amount)

```jsx
npx hardhat send-zeta --amount 0.1 --network mumbai_testnet --destination bsc_testnet --ignore-checks
```

https://mumbai.polygonscan.com/tx/0x9132a994cbf536486c1354a6333e6d8f59156971888eebe8f74f882d48d16770

### ✅ ZETA to ZetaChain

```jsx
npx hardhat send-zeta --amount 3 --network mumbai_testnet --destination zeta_testnet
```

https://mumbai.polygonscan.com/tx/0x40038e68d3f997952c302c95bcf10f841f8d3e960db3e71249ae0fe2b81a2e6f

### ✅ ZETA from ZetaChain

```jsx
npx hardhat send-zeta --amount 3 --network zeta_testnet --destination mumbai_testnet
```

https://athens.explorer.zetachain.com/cc/tx/0xa28ff75a237afcdc3a5ee7a8c79a4e813e899ab6d9b0c22d20e5cdf10e028a6a

## Messaging

### ✅ Cross-chain messaging

https://goerli.etherscan.io/tx/0x681173b17e4ddc557d496114601845edf4666087027e77f33df7bffe4954619f
