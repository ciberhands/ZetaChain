# query gov votes

Query votes on a proposal

### Synopsis

Query vote details for a single proposal by its identifier.

Example:
$ zetacored query gov votes 1
$ zetacored query gov votes 1 --page=2 --limit=100

```
zetacored query gov votes [proposal-id] [flags]
```

### Options

```
      --count-total        count total number of records in votes to query for
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for votes
      --limit uint         pagination limit of votes to query for (default 100)
      --node string        [host]:[port] to Tendermint RPC interface for this chain 
      --offset uint        pagination offset of votes to query for
  -o, --output string      Output format (text|json) 
      --page uint          pagination page of votes to query for. This sets offset to a multiple of limit (default 1)
      --page-key string    pagination page-key of votes to query for
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

* [zetacored query gov](zetacored_query_gov.md)	 - Querying commands for the governance module

