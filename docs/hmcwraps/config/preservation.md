---
sidebar_position: 6
---

# Preservation
You may have realized that when an item is being unwrapped, all its properties reset to default, not what they were before.

This can easily be solved by enabling preservation for the property you want to preserve.

## Possible Properties
- Custom Model Data
- Color
- Name
- Lore
- NBT (cannot be disabled or edited)

When enabling `original-enabled`, it will store the original value in NBT and restore it once the item is unwrapped.

`default-enabled` is a fallback for materials when no original data has been found.

### Example
```yaml
# Settings for model id & color preservation
preservation:
  model-id:
    # If the model id should be restored after it gets unwrapped from before the item got wrapped
    # NOTE: If there is an original model id stored on the item, that will get preferred over original model ids
    # NOTE: Disabling both options will result in all items ending up with the model id '-1' when unwrapped
    original-enabled: false
    # If the model id should be set to the id below when the item is unwrapped
    default-enabled: false
    # The default model ids for items that get unwrapped
    defaults:
      # Every item in the 'PICKAXES' collection will end up with the model id 0 after getting unwrapped
      PICKAXES: 0
      # Iron shovels will end up with the model id 0 after getting unwrapped
      IRON_SHOVEL: 0
  # Basically the same as model-id preservation, but with the color
  color:
    original-enabled: false
    default-enabled: false
    defaults: { }
  # Still the same, but with the name
  name:
    original-enabled: false
    default-enabled: false
    defaults: { }
  # I think you get the idea
  lore:
    original-enabled: false
    default-enabled: false
    defaults: { }```