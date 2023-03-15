---
sidebar_position: 8
---

# Filter
The filter is a property of each player. When the filter is enabled, the GUI will only show wraps the player has access to.

## Usage
To toggle the filter, use the `TOGGLE_FILTER` action.

> **Note:** The title of the item only works with [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) installed!

### Example
```yaml
45:
  id: 'HOPPER'
  name: '%hmcwraps_filter%'
  lore:
    - '<gray>Toggle to see all'
    - '<gray>or only owned wraps.'
  actions:
    any:
      TOGGLE_FILTER:
        - ''
```

## Config
You can disable the feature completely and add a default value. If the player should only be able to see wraps the player has access to, enable this feature, set the default to true and don't change it using the method above.

### Example
```yaml
# The inventory filter configuration
# This feature shouldn't do anything if you don't use the action, but if you have and don't want it anymore, disable this
# If you want the inventory to only show wraps the player owns, enable this feature and set default to 'true' and don't change it using actions
filter:
  # If the feature should be enabled
  enabled: true
  # If the inventory should be filtered by default
  default: false
```