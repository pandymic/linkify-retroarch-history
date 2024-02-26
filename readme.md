A fairly straightforward script that creates shortcuts in the Applications drawer as well as on the Desktop that link directly to the most recently played titles in Retroarch. Assumes you are running Ubuntu with Wayland and that you have PHP installed.

This script lives as a system process/daemon periodically checking the Retroarch `~/.config/retroarch/content_history.lpl` file. It creates an executable shell script in the directory `~/Roms/Binaries/` for each item in the history. These executable shell scripts simply call the Retroarch binary and pass the appropriate arguments to launch directly into the specified core and ROM file. It also makes a copy of some artwork for the purposes of doing some cool Steam "Big Picture" mode stuff, but that's not part of this. Shortcuts are added to the Applications drawer for each item in the history. Additionally, a Desktop shortcut is created to the most recently played title. The aforementioned artwork is used as the icon for these shortcuts, where applicable.