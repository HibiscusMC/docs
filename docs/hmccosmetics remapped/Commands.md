---
sidebar_position: 1000
---

# Commands

`/cosmetic` (hmccosmetics.cmd.default) - Opens Cosmetics GUI

`/cosmetic reload` (hmccosmetics.cmd.reload) - Reloads configuration files

`/cosmetic apply <ID> <USERNAME>` - (hmccosmetics.cmd.unapply) - Add a cosmetic to a player by command

`/cosmetic unapply <TYPE> <USERNAME>` - (hmccosmetics.cmd.set) - Remove a cosmetic from a player by command

`/cosmetic dye <TYPE> <#HEX>` - (hmccosmetics.cmd.dye) - Dye a cosmetic. HEX Code is optional, without it, it will open the dye menu.

`/cosmetic setwardrobesetting <wardrobe> <setting>` - (hmccosmetics.cmd.setwardrobesetting) - Sets wardrobe positions. `<setting>` can be `leavelocation`, `viewerlocation`, `wardrobelocation`, `permission`, `distance`. 

`/cosmetic wardrobe <wardrobe>` - (hmccosmetics.cmd.wardrobe) - Open the wardrobe. This is just the command to open a wardrobe, wardrobes may have an additional permission. Check the configuration for the permission that is set for each wardrobe setup. 

`/cosmetic dataclear <USERNAME>` - (hmccosmetics.cmd.dataclear) - Clears a player data from your database. Only useful if a player is offline.

`/cosmetic menu <MENU> <USERNAME>` - (hmccosmetics.cmd.menu) - Opens a cosmetic menu for a player. 

`/cosmetic hide <USERNAME>` - (hmccosmetics.cmd.hide) - Hides cosmetics on a player.

`/cosmetic show <USERNAME>` - (hmccosmetics.cmd.show) - Reveals cosmetics on a player.

:::info

In some of the commands (apply, unapply, dye), you can use the `-s` flag at the end to run this command
silently, which will prevent the message from being sent when ran.

:::
