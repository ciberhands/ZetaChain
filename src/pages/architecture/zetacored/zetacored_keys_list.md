# keys list

List all keys

### Synopsis

Return a list of all public keys stored by this key manager
along with their associated name and address.

```
zetacored keys list [flags]
```

### Options

```
  -h, --help         help for list
  -n, --list-names   List names only
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

