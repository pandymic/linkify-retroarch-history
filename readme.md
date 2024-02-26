# Linkify Retroarch History

A fairly straightforward script that creates shortcuts in the Applications drawer as well as on the Desktop that link directly to the most recently played titles in Retroarch. Assumes you are running Ubuntu with Wayland and that you have PHP installed.

## Overview

This script lives as a system process/daemon periodically checking the Retroarch `~/.config/retroarch/content_history.lpl` file. It creates an executable shell script in the directory `~/Roms/Binaries/` for each item in the history. These executable shell scripts simply call the Retroarch binary and pass the appropriate arguments to launch directly into the specified core and ROM file. It also makes a copy of some artwork for the purposes of doing some cool Steam "Big Picture" mode stuff, but that's not part of this. Shortcuts are added to the Applications drawer for each item in the history. Additionally, a Desktop shortcut is created to the most recently played title. The aforementioned artwork is used as the icon for these shortcuts, where applicable.

## Systemd Service Unit

* Typically this file would live in `/etc/systemd/system/linkify-retroarch-history.service`
* Since the script works within the user's home directory the value `ProtectHome=false` must be set.

<pre>
[Unit]
Description=Linkify Retroarch History
After=network.target

[Service]
User=<i>[user]</i>
Group=<i>[group]</i>
ProtectSystem=full
PrivateDevices=true
ProtectHome=false
NoNewPrivileges=true
ExecStart=/usr/bin/env php <i>[path-to-script]</i>/linkify-retroarch-history
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
</pre>