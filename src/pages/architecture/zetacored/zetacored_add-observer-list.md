# add-observer-list

Add a list of observers to the observer mapper ,default path is ~/.zetacored/os_info/observer_info.json

```
zetacored add-observer-list [observer-list.json]  [flags]
```

### Options

```
  -h, --help                help for add-observer-list
      --keygen-block int    set keygen block , default is 20 (default 20)
      --tss-pubkey string   set TSS pubkey if using older keygen
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

