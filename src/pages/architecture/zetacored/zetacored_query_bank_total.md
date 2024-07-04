# query bank total

Query the total supply of coins of the chain

### Synopsis

Query total supply of coins that are held by accounts in the chain.

Example:
  $ zetacored query bank total

To query for the total supply of a specific coin denomination use:
  $ zetacored query bank total --denom=[denom]

```
zetacored query bank total [flags]
```

### Options

```
      --count-total        count total number of records in all supply totals to query for
      --denom string       The specific balance denomination to query for
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for total
      --limit uint         pagination limit of all supply totals to query for (default 100)
      --node string        [host]:[port] to Tendermint RPC interface for this chain 
      --offset uint        pagination offset of all supply totals to query for
  -o, --output string      Output format (text|json) 
      --page uint          pagination page of all supply totals to query for. This sets offset to a multiple of limit (default 1)
      --page-key string    pagination page-key of all supply totals to query for
      --reverse            results are sorted in descending order
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

* [zetacored query bank](zetacored_query_bank.md)	 - Querying commands for the bank module

