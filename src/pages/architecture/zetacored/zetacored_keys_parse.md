# keys parse

Parse address from hex to bech32 and vice versa

### Synopsis

Convert and print to stdout key addresses and fingerprints from
hexadecimal into bech32 cosmos prefixed format and vice versa.


```
zetacored keys parse [hex-or-bech32-address] [flags]
```

### Options

```
  -h, --help   help for parse
```

### Options inherited from parent commands

```
      --home string              The application home directory 
      --keyring-backend string   Select keyring's backend (os|file|test) 
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --log_format string        The logging format (json|plain) 
      --log_level string         The logging level (trace|debug|info|warn|error|fatal|panic) 
      --log_no_color             Disable colored logs
      --output string            Output format (text|json) 
      --trace                    print out full stack trace on errors
```

### SEE ALSO

* [zetacored keys](zetacored_keys.md)	 - Manage your application's keys

