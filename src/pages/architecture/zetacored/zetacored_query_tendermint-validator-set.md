# query tendermint-validator-set

Get the full tendermint validator set at given height

```
zetacored query tendermint-validator-set [height] [flags]
```

### Options

```
  -h, --help            help for tendermint-validator-set
      --limit int       Query number of results returned per page (default 100)
      --node string     [host]:[port] to Tendermint RPC interface for this chain 
  -o, --output string   Output format (text|json) 
      --page int        Query a specific page of paginated results (default 1)
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

