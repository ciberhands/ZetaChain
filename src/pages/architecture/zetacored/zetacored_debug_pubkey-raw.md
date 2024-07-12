# debug pubkey-raw

Decode a ED25519 or secp256k1 pubkey from hex, base64, or bech32

### Synopsis

Decode a pubkey from hex, base64, or bech32.
Example:
$ zetacored debug pubkey-raw TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlz
$ zetacored debug pubkey-raw cosmos1e0jnq2sun3dzjh8p2xq95kk0expwmd7shwjpfg
			

```
zetacored debug pubkey-raw [pubkey] -t [{ed25519, secp256k1}] [flags]
```

### Options

```
  -h, --help          help for pubkey-raw
  -t, --type string   Pubkey type to decode (oneof secp256k1, ed25519) 
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

* [zetacored debug](zetacored_debug.md)	 - Tool for helping with debugging your application

