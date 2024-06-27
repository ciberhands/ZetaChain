# index-eth-tx

Index historical eth txs

### Synopsis

Index historical eth txs, it only support two traverse direction to avoid creating gaps in the indexer db if using arbitrary block ranges:
		- backward: index the blocks from the first indexed block to the earliest block in the chain, if indexer db is empty, start from the latest block.
		- forward: index the blocks from the latest indexed block to latest block in the chain.

		When start the node, the indexer start from the latest indexed block to avoid creating gap.
        Backward mode should be used most of the time, so the latest indexed block is always up-to-date.
		

```
zetacored index-eth-tx [backward|forward] [flags]
```

### Options

```
  -h, --help   help for index-eth-tx
```

### Options inherited from parent commands

```
      --home string         directory for config and data 
      --log_format string   The logging format (json|plain) 
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) 
      --log_no_color        Disable colored logs
      --trace               print out full stack trace on errors
```

### SEE ALSO

* [zetacored](zetacored.md)	 - Zetacore Daemon (server)

