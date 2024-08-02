# testnet start

Launch an in-process multi-validator testnet

### Synopsis

testnet will launch an in-process multi-validator testnet,
and generate "v" directories, populated with necessary validator configuration files
(private validator, genesis, config, etc.).

Example:
	evmosd testnet --v 4 --output-dir ./.testnets
	

```
zetacored testnet start [flags]
```

### Options

```
      --api.address string          the address to listen on for REST API 
      --chain-id string             genesis file chain-id, if left blank will be randomly created
      --enable-logging              Enable INFO logging of tendermint validator nodes
      --grpc.address string         the gRPC server address to listen on 
  -h, --help                        help for start
      --json-rpc.address string     the JSON-RPC server address to listen on 
      --key-type string             Key signing algorithm to generate keys for 
      --minimum-gas-prices string   Minimum gas prices to accept for transactions; All fees in a tx must meet this minimum (e.g. 0.01photino,0.001stake) 
  -o, --output-dir string           Directory to store initialization data for the testnet 
      --print-mnemonic              print mnemonic of first validator to stdout for manual testing (default true)
      --rpc.address string          the RPC address to listen on 
      --v int                       Number of validators to initialize the testnet with (default 4)
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

* [zetacored testnet](zetacored_testnet.md)	 - subcommands for starting or configuring local testnets

