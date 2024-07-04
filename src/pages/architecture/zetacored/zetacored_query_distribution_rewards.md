# query distribution rewards

Query all distribution delegator rewards or rewards from a particular validator

### Synopsis

Query all rewards earned by a delegator, optionally restrict to rewards from a single validator.

Example:
$ zetacored query distribution rewards zeta1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p
$ zetacored query distribution rewards zeta1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p zetavaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj

```
zetacored query distribution rewards [delegator-addr] [validator-addr] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for rewards
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

* [zetacored query distribution](zetacored_query_distribution.md)	 - Querying commands for the distribution module

