# rosetta

spin up a rosetta server

```
zetacored rosetta [flags]
```

### Options

```
      --addr string                the address rosetta will bind to 
      --blockchain string          the blockchain type 
      --denom-to-suggest string    default denom for fee suggestion 
      --enable-fee-suggestion      enable default fee suggestion
      --gas-to-suggest int         default gas for fee suggestion (default 200000)
      --grpc string                the app gRPC endpoint 
  -h, --help                       help for rosetta
      --network string             the network name 
      --offline                    run rosetta only with construction API
      --prices-to-suggest string   default prices for fee suggestion 
      --retries int                the number of retries that will be done before quitting (default 5)
      --tendermint string          the tendermint rpc endpoint, without tcp:// 
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

