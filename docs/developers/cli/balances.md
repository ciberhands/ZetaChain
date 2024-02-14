---
sidebar_position: 3
---

# Querying Balances

## Prerequisites

This tutorial requires `zetacored` CLI to be installed. Please, check out the
docs [on installing the CLI](/developers/cli/setup).

## Querying Balances

To query accounts balances for the `alice` account, run the following command:

```
zetacored q bank balances $(zetacored keys show alice -a) --node https://zetachain-athens.blockpi.network:443/rpc/v1/public
```

Provide a valid node RPC URL with the `--node` flag. You can use one of the
available RPCs [listed in the docs](/reference/api) labeled "Tendermint RPC".
Please, note that you need to specify the port number in the URL. If the
protocol scheme is `https://`, the port is 443, unless specified otherwise.

```yml
balances:
  - amount: "11345716912473012386685"
    denom: azeta
```

The amount is in `azeta` units, which is the smallest unit. To convert it to
ZETA, divide it by 10¹⁸. In the example above, the balance is approximately
11345 ZETA.
