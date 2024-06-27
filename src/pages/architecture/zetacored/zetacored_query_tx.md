# query tx

Query for a transaction by hash, "[addr]/[seq]" combination or comma-separated signatures in a committed block

### Synopsis

Example:
$ zetacored query tx [hash]
$ zetacored query tx --type=acc_seq [addr]/[sequence]
$ zetacored query tx --type=signature [sig1_base64],[sig2_base64...]

```
zetacored query tx --type=[hash|acc_seq|signature] [hash|acc_seq|signature] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for tx
      --node string        [host]:[port] to Tendermint RPC interface for this chain 
  -o, --output string      Output format (text|json) 
      --type string        The type to be used when querying tx, can be one of "hash", "acc_seq", "signature" 
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

* [zetacored query](zetacored_query.md)	 - Querying subcommands

