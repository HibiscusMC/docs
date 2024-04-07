---
sidebar_position: 3
---

# Permissions
HMCWraps has a fairly simple permission system. Each command has its own permission and belong into different groups.

## Groups
`hmcwraps.admin` - Access to all commands

`hmcwraps.management` - Access to all commands except convert and reload

`hmcwraps.commands.physical` - Access all commands related to physical wraps

`hmcwraps.commands.virtual` - Access all commands related to virtual wraps (not preview)

## Command Permissions

`hmcwraps.commands.convert` - Gives access to the convert command
- Admin

`hmcwraps.commands.reload` - Gives access to the reload command
- Admin

`hmcwraps.commands.preview` - Gives access to the preview command
- Admin
- Management

`hmcwraps.wraps` - Gives access to the wraps inventory (this has to be enabled in `config.yml`)
- Admin
- Management

`hmcwraps.commands.open` - Gives access to open the wrap inventory for another player.
- Admin
- Management

`hmcwraps.commands.list` - Gives access to the list command
- Admin
- Management

`hmcwraps.commands.wrap` - Gives access to the wrap command
- Admin
- Management
- Virtual

`hmcwraps.commands.unwrap` - Gives access to the unwrap command
- Admin
- Management
- Virtual

`hmcwraps.commands.wrap.self` - Gives access to wrap an item using commands (virtual). The player can only wrap his own tools, not the tools from others.

`hmcwraps.commands.unwrap.self` - Gives access to unwrap an item using commands (virtual). The player can only unwrap his own tools, not the tools from others.

`hmcwraps.commands.give.wrapper` - Gives access to the give wrapper command
- Admin
- Management
- Physical

`hmcwraps.commands.give.unwrapper` - Gives access to the give unwrapper command
- Admin
- Management
- Physical

`hmcwraps.debug` - Gives access to the debug commands
- Admin

`hmcwraps.commands.create` - Gives access to the create command
- Admin

`hmcwraps.shortcut.disable` - If this permission is applied to a player, the shortcut function is disabled only for that player.
