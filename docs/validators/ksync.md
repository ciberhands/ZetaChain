---
sidebar_position: 5
sidebar_label: "Option 3: KSYNC"
---

# Syncing a Node Using KYVE's KSYNC

:::note

This guide assumes you've completed the
"[Setting Up Your Node](/validators/setup)" step.

:::

The following doc covers a step by step guide on how to sync a ZetaChain Mainnet
Beta node with KSYNC.

KSYNC is a tool capable of syncing blocks and state-sync snapshots from the
decentralized KYVE data lake directly into Cosmos blockchain nodes. With KSYNC
Cosmos validators don't need to wait for peers in order to block-sync and they
don't need to search for trusted app hashes if they want to state-sync.
Furthermore, state-syncing to historical heights up to genesis are possible.

More information about KSYNC can be found here: https://docs.kyve.network/ksync

## Install KSYNC

Install the latest KSYNC:

```
go install github.com/KYVENetwork/ksync/cmd/ksync@latest
```

Verify the installation:

```
ksync version
```

## Configure the Node

And change the following config in the `config.toml` file:

```text title="~/.zetacored/config/config.toml"
db_backend = "goleveldb"
```

Changing the db_backend to the default goleveldb is required for now, since
KSYNC does not yet support the pebbledb from ZetaChain’s dependency
https://github.com/BlockPILabs/cosmos-db.

## Sync the Node

```
ksync state-sync --binary="/path/to/zetacored" --chain-id=kaon-1 --snapshot-pool-id=11
```
