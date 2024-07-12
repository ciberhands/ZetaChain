# testnet init-files

Initialize config directories & files for a multi-validator testnet running locally via separate processes (e.g. Docker Compose or similar)

### Synopsis

init-files will setup "v" number of directories and populate each with
necessary files (private validator, genesis, config, etc.) for running "v" validator nodes.

Booting up a network with these validator folders is intended to be used with Docker Compose,
or a similar setup where each node has a manually configurable IP address.

Note, strict routability for addresses is turned off in the config file.

Example:
	evmosd testnet init-files --v 4 --output-dir ./.testnets --starting-ip-address 192.168.10.2
	

```
zetacored testnet init-files [flags]
```

### Options

```
      --chain-id string              genesis file chain-id, if left blank will be randomly created
  -h, --help                         help for init-files
      --key-type string              Key signing algorithm to generate keys for 
      --keyring-backend string       Select keyring's backend (os|file|test) 
      --minimum-gas-prices string    Minimum gas prices to accept for transactions; All fees in a tx must meet this minimum (e.g. 0.01photino,0.001stake) 
      --node-daemon-home string      Home directory of the node's daemon configuration 
      --node-dir-prefix string       Prefix the directory name for each node with (node results in node0, node1, ...) 
  -o, --output-dir string            Directory to store initialization data for the testnet 
      --starting-ip-address string   Starting IP address (192.168.0.1 results in persistent peers list ID0@192.168.0.1:46656, ID1@192.168.0.2:46656, ...) 
      --v int                        Number of validators to initialize the testnet with (default 4)
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

