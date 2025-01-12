---
sidebar_position: 2
---

# Commands

`/wraps` - Open wraps GUI

`/wraps reload` - Reload HMCWraps

`/wraps give wrapper <wrap uuid> [player] [amount]` - Give a physical wrap to the player

`/wraps give unwrapper [player] [amount]` - Give the unwrapper to the player

`/wraps wrap <wrap uuid> [player] {actions}` - Wrap the item the player is holding

`/wraps unwrap <wrap uuid> {actions}` - Unwrap the item the player is holding

`/wraps preview <wrap uuid> [player] {actions}` - Start a preview of the wrap for a user

`/wraps convert [confirm]` - Start the ItemSkins convert process

`/wraps create <file> <wrap uuid> [collection]` - Create a new wrap in the specified file from the item you're holding
with the specified UUID. Existing files will be appended.

`/wraps open <player>` - Open the wraps inventory for another player.

`/wraps list` - List all currently loaded wraps and collections

`/wraps help` - List all commands

---

`<>` - Required 

`[]` - Optional

`{actions}` - A flag which can be activated by adding `-actions` to the command and activates the configured actions 

---

# Debug Commands

Debug prints are uploaded by default. To not upload them add the specified `-noupload` flag.

`/wraps debug info [-noupload]` - Shows (and uploads) plugin and server information.

`/wraps debug config [-noupload]` - Shows (and uploads) the plugin configuration.

`/wraps debug wraps [-noupload]` - Shows (and uploads) a list of wraps.

`/wraps debug wrap <wrap uuid> [-noupload]` - Shows (and uploads) a specified wrap.

`/wraps debug player [player] [-noupload]` - Shows (and uploads) information about a player and the item the player is holding.

`/wraps debug item [player] [-noupload]` - Shows (and uploads) information about the item the player is holding.

`/wraps debug log [log file name]` - Uploads a server log. If no log file is specified, latest.log will be uploaded.

`/wraps debug upload <file path>` - Uploads the specified file. The root is the `HMCWraps` folder.
