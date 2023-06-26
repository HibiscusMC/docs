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

`SWORDS` can now be used in [wraps](https://docs.hibiscusmc.com/hmcwraps/config/wraps).

## Applying
Just like you can configure wraps in Wrap Files and the `config.yml`, you can configure collections in Collection Files 
in the `pugins/HMCWraps/collections/` directory and the `config.yml`.

Using collections with ItemsAdder or Oraxen can be a little bit harder, but still manageable.
Essentially, you have one base item and the others for the other material. 
The custom model data has to be the same on all of them.

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

Example ItemsAdder:
```yaml
info:
  namespace: hmcwraps
items:
  fire_sword:
    display_name: '&fFire Sword'
    resource:
      material: NETHERITE_SWORD
      generate: false
      model_path: fire_sword
      model_id: 5000
  fire_pickaxe:
    display_name: '&fFire Pickaxe'
    resource:
      material: NETHERITE_PICKAXE
      generate: false
      model_path: fire_pickaxe
      model_id: 5000
  fire_sword_diamond:
    display_name: '&fFire Sword'
    resource:
      material: DIAMOND_SWORD
      generate: false
      model_path: fire_sword
      model_id: 5000
  fire_pickaxe_diamond:
    display_name: '&fFire Pickaxe'
    resource:
      material: DIAMOND_PICKAXE
      generate: false
      model_path: fire_pickaxe
      model_id: 5000
```
Note how the `model_id` is the same for all of them. You can use any of those items in your wraps configuration and it will work. 

We encourage using the basic one, in this example `fire_sword` and `fire_pickaxe` respectively, since it's much easier to understand.

> **Note**: Did you know that you can add as many collections in a Collection File as you want?
>
> This ensures easy drag n' drop configurations!
