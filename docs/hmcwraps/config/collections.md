---
sidebar_position: 3
---

# Collections
## Format
Collections are a list of different items combined into one easy-to-use list. This is perfect if you want to have a wrap which is applicable 
to more than one item. For this to work, the custom model data has to be the same for all items you want to apply the wrap to.

Example collection for all swords:
```yaml
# The name of the collection
SWORDS:
  # All items the collection contains
  - 'NETHERITE_SWORD'
  - 'DIAMOND_SWORD'
  - 'IRON_SWORD'
  - 'STONE_SWORD'
  - 'WOODEN_SWORD'
```

`SWORDS` can now be used in [wraps](https://docs.hibiscusmc.com/docs/hmcwraps/config/wraps).

## Applying
Just like you can configure wraps in Wrap Files and the `config.yml`, you can configure collections in Collection Files 
in the `pugins/HMCWraps/collections/` directory and the `config.yml`.

Example A: `config.yml`
```yaml
# The collections entry in config.yml
collections:
  # The name of the collection
  SWORDS:
    # All items the collection contains
    - 'NETHERITE_SWORD'
    - 'DIAMOND_SWORD'
    - 'IRON_SWORD'
    - 'STONE_SWORD'
    - 'WOODEN_SWORD'
```

Example B: `plugins/HMCWraps/collections/tools.yml`
```yaml
# If this Collection File should be enabled
enabled: true
collections:
  SWORDS:
    - 'NETHERITE_SWORD'
    - 'DIAMOND_SWORD'
    - 'IRON_SWORD'
    - 'STONE_SWORD'
    - 'WOODEN_SWORD'
```

> **Note**: Did you know that you can add as many collections in a Collection File as you want?
>
> This ensures easy drag n' drop configurations!
