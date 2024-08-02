# query staking redelegation

Query a redelegation record based on delegator and a source and destination validator address

### Synopsis

Query a redelegation record for an individual delegator between a source and destination validator.

Example:
$ zetacored query staking redelegation zeta1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p zetavaloper1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm zetavaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj

```
zetacored query staking redelegation [delegator-addr] [src-validator-addr] [dst-validator-addr] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for redelegation
      --node string        [host]:[port] to Tendermint RPC interface for this chain 
  -o, --output string      Output format (text|json) 
```

### Options inherited from parent commands

```
      --chain-id string     The network chain ID
      --home string         directory for config and data 
      --log_format string   The logging format (json|plain) 
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) 
      --log_no_color        Disable colored logs
      --trace               print out full stack trace on errors
```

### SEE ALSO

* [zetacored query staking](zetacored_query_staking.md)	 - Querying commands for the staking module

