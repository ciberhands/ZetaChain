---
sidebar_position: 0
---

# Installing the CLI

ZetaChain's CLI is a command line tool that allows you to interact with the
ZetaChain network.

## Option 1: Download the Binary

Binaries are built based on OS version and CPU architecture. You can download
the latest binaries from the
[ZetaChain Node GitHub repo](https://github.com/zeta-chain/node/releases).

Install it in your `PATH`:

```
/usr/local/bin/zetacored
```

## Option 2: Compile from Source

Alternatively, you can compile the binary from the source code.

### Prerequisites

- [Go](https://golang.org/doc/install) 1.20 or later
- [Git](https://git-scm.com/downloads)

```
git clone https://github.com/zeta-chain/node

cd node

make install
```

## Check the Installation

Try running the `zetacored` command:

```
zetacored
```

You should see the following output:

```
Zetacore Daemon (server)

Usage:
  <appd> [command]

Available Commands:
  add-genesis-account   Add a genesis account to genesis.json
  add-observer-list     Add a list of observers to the observer mapper ,default path is ~/.zetacored/os_info/observer_info.json
  addr-conversion       convert a zeta1xxx address to validator operator address zetavaloper1xxx
  collect-gentxs        Collect genesis txs and output a genesis.json file
  collect-observer-info collect observer info from a folder , default path is ~/.zetacored/os_info/

  config                Create or query an application CLI configuration file
  debug                 Tool for helping with debugging your application
  export                Export state to JSON
  gentx                 Generate a genesis tx carrying a self delegation
  get-pubkey            Get you node account
  help                  Help about any command
  index-eth-tx          Index historical eth txs
  init                  Initialize private validator, p2p, genesis, and application configuration files
  keys                  Manage your application's keys
  query                 Querying subcommands
  rollback              rollback cosmos-sdk and tendermint state by one height
  rosetta               spin up a rosetta server
  start                 Run the full node
  status                Query remote node for status
  tendermint            Tendermint subcommands
  testnet               subcommands for starting or configuring local testnets
  tx                    Transactions subcommands
  validate-genesis      validates the genesis file at the default location or at the location passed as an arg
  version               Print the application binary version information

Flags:
  -h, --help                help for <appd>
      --home string         directory for config and data (default "/Users/fadeev/.zetacored")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "<appd> [command] --help" for more information about a command.
```
