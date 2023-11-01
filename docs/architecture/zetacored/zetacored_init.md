# init

Initialize private validator, p2p, genesis, and application configuration files

### Synopsis

Initialize validators's and node's configuration files.

```
zetacored init [moniker] [flags]
```

### Options

```
      --chain-id string             genesis file chain-id, if left blank will be randomly created
  -h, --help                        help for init
      --home string                 node's home directory 
  -o, --overwrite                   overwrite the genesis.json file
      --recover                     provide seed phrase to recover existing key instead of creating
      --staking-bond-denom string   genesis file staking bond denomination, if left blank default value is 'stake'
```

### Options inherited from parent commands

```
      --log_format string   The logging format (json|plain) 
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) 
      --trace               print out full stack trace on errors
```

### SEE ALSO

* [zetacored](zetacored.md)	 - Zetacore Daemon (server)

