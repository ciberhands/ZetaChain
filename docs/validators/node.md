---
sidebar_position: 6
---

# Running a Node in Production

This document outlines the process for running a full ZetaChain node. It is
intended for those who are familiar with the Linux operating system and the
command line interface.

## Set Limits on Open Files and Number of Processes

To better manage the resources of your nodes, we recommend setting some limits
on the maximum number of open file descriptors (nofile) and maximum number of
processes (nproc).

Edit `/etc/security/limits.conf` to include or modify the following parameters:

```
*       soft    nproc   262144
*       hard    nproc   262144
*       soft    nofile  262144
*       hard    nofile  262144
```

Edit `/etc/sysctl.conf` to include the following:

```
fs.file-max=262144
```

## Create "zetachain" User Account

We recommend running ZetaChain binary files with a user account rather than as
root.

```bash
useradd -m -s /bin/bash zetachain
```

### Create ZetaChain Directory Structure

This is needed to store ZetaChain binary and configuration files.

```bash
sudo su zetachain
mkdir -p /home/zetachain/.zetacored/bin
mkdir /home/zetachain/.zetacored/config
```

## Create a Systemd Unit File

We recommend using Systemd to start and stop ZetaChain binary files and view the
logs. You can create a Systemd unit file at the following location
`/etc/systemd/system/zetacored.service`:

```bash
[Unit]
Description=Zetacored Service
After=multi-user.target
StartLimitIntervalSec=0
[Install]
WantedBy=multi-user.target
[Service]
Type=simple
Restart=always
RestartSec=90
User=zetachain
LimitNOFILE=262144
ExecStart=zetacored start --home /home/zetachain/.zetacored/ --log_format json  --log_level info --moniker <YOUR_NODE_NAME_HERE>
```

Then start the service with `systemctl start zetacored`.

You can view the logs with `journalctl -o cat -f -u zetacored`.

## CLI

ZetaChain Core is built with the Cosmos SDK. There is an `--help` flag that can
be used with any subcommand to learn its use and syntax.

```bash
zetacored --help
```

## Monitoring

In a production environment we recommend monitoring the node resources (CPU
load, Memory Usage, Disk usage and Disk IO) for any performance degradation.

ZetaChain Core generates a log that can be monitored for errors and used for
troubleshooting. If you install Zetacore as a Systemd service using the
instructions above you can view this log with
`journalctl -o cat -f -u zetacored`.

Prometheus can be enabled to serve metrics which can be consumed by Prometheus
collector(s). Telemetry include Prometheus metrics can be enabled in the
app.toml file. See the
[Cosmos SDK Telemetry Documentation](https://docs.cosmos.network/v0.46/core/telemetry.html)
for more information.

See more about your Validator Monitoring [here](/validators/monitoring).
