---
sidebar_position: 12
---

# Permission Settings
You can configure what permissions are checked in the `permissions` section of the `config.yml`.

### Attributes
- `inventory-permission` - If the wrap inventory open permission should be checked on wraps inventory open.
- `preview-permission` - If the preview should be disabled if the player doesn't have the permission for the wrap.
- `check-permission-physical` - If the permission should be checked during usage of physically wrapped items.
- `check-permission-virtual` - If the permission should be checked during usage of virtually wrapped items.
- `permission-physical` - If permissions should be checked when wrapping an item physically. (Useful to have it disabled when you want player to trade wraps.)
- `permission-virtual` - If permissions should be checked when wrapping an item virtually. 
- `inventory-check-interval` - The interval in minutes to check for wraps without permission, set to -1 to disable.

## Example A
```yaml
# Settings on how permissions should be handled
permissions:
  # If the wrap inventory open permission should be checked on wraps inventory open
  inventory-permission: false
  # If the preview should be disabled if the player doesn't have the permission for the wrap
  preview-permission: false
  # If permission checks should be performed during usage for...
  # ...physical wraps
  check-permission-physical: false
  # ...virtual wraps
  check-permission-virtual: true
  # If permissions should be checked on appliance for...
  # ...physical wraps
  permission-physical: false
  # ...virtual wraps
  permission-virtual: true
  # The interval in minutes to check for wraps without permission, set to -1 to disable
  inventory-check-interval: 10
```