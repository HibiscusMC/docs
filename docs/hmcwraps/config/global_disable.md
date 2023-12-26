---
sidebar_position: 13
---

# Global Disable

This feature is useful when you want to prevent a specific item from being wrapped by any wrap instead of having to exclude that item in every wrap range.

You can find this at the top of the `config.yml`.

There are 5 possible ways to exclude:

`model-id` - Any model id in this list will not be able to be wrapped. Use `-1` as the default model id.

`color` - Any color in this list will not be able to be wrapped. Use `none` as no color.

`oraxen` - Any Oraxen id in this list will not be able to be wrapped. You use the regular hook syntax without the `oraxen:` prefix.

`itemsadder` - Any ItemsAdder id in this list will not be able to be wrapped. You use the regular hook syntax without the `itemsadder:` prefix.

`mythic` - Any Crucible id in this list will not be able to be wrapped. You use the regular hook syntax without the `mythic:` prefix.

## Example
```yaml
# Items with these properties can't be wrapped
global-disable:
  # Any model id in this list can't be wrapped. If you want to disable items with no model id, use -1.
  model-id: 
  - -1
  - 2
  # You can use hex or rgb, check the documentation. If you want to disable items with no color, use 'none'.
  color: 
  - '#555555'
  oraxen: [ ]
  itemsadder: [ ]
  mythic: []
```