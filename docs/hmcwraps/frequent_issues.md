---
sidebar_position: 8
---

# Frequent Issues

## My item isn't rotated upright in the preview!

HMCWraps uses the armor stand head for the preview, so you will need to edit the head translation in the model file. You can either do this in Blockbench (Display > Head), or you can add it directly to the model file like so:

```json
  "display": {
    "head": {
      "rotation": [
        0,
        0,
        -135
      ]
    }
  }
  ```

## I can't see my item in the preview at all!

This happens when the model you are using has scaled the display on a head to 0%. This will then hide the item in the preview as HMCWraps uses the armor stand head for the preview. To fix this, you will need to edit the head scale in the model file. You can either do this in Blockbench (Display > Head), or you can change it directly in the model file like so:

```json
  "display": {
    "head": {
      "scale": [
        1.0,
        1.0,
        1.0
      ]
    }
  }
  ```

If you wish, you can delete the scale entry entirely, but make sure to have a correct JSON format!

## I added a wrap from Oraxen, ItemsAdder or Crucible but when I try to wrap an item it doesn't show up/only works for one material type!

This sadly is a Minecraft limitation and not something HMCWraps can influence: When you are using the [collections feature](https://docs.hibiscusmc.com/hmcwraps/config/collections), the texture pack has to contain a texture for each material/item type in the collection.

For example, if the collection `SWORDS` contains the following materials: `IRON_SWORD`, `DIAMOND_SWORD` and `NETHERITE_SWORD`, the texture pack has to contain a texture for each material/item type.

This is easy to do when you don't use a texture pack manager, as you just have to set the model id to the same one on all textures for each material (e.g. `IRON_SWORD`, `DIAMOND_SWORD` and `NETHERITE_SWORD`).

It's a bit more complicated when using a texture pack manager, but the idea is still the same.

### Oraxen
Example: `Oraxen/items/hmcwraps.yml`

```yaml
fire_sword:
  displayname: <white>Fire Sword
  material: NETHERITE_SWORD 
  Pack:
    generate_model: false
    model: hmcwraps/fire_sword
    custom_model_data: 5000
fire_sword_iron:
  displayname: <white>Fire Sword
  material: IRON_SWORD 
  Pack:
    generate_model: false
    model: hmcwraps/fire_sword
    custom_model_data: 5000
fire_sword_diamond:
  displayname: <white>Fire Sword
  material: DIAMOND_SWORD 
  Pack:
    generate_model: false
    model: hmcwraps/fire_sword
    custom_model_data: 5000
```

As you can see, we created an entry in the Oraxen configuration for each item type in the above defined `SWORDS` collection. Note the `custom_model_data: 5000`, this sets the model id on all the textures to the same one, which makes this work. Now you can use any one of these identifiers in the wrap configuration, but it's best to use the shortest one, in this case `oraxen:fire_sword`:

```yaml
SWORDS:
  wraps:
    1:
      uuid: 'fire_sword'
      id: 'oraxen:fire_sword'
      (other configuration)
```

### ItemsAdder
Example: `ItemsAdder/data/items_packs/hmcwraps/hmcwraps.yml`

```yml
fire_sword:
  display_name: '&fFire Sword'
  resource:
    material: NETHERITE_SWORD
    generate: false
    model_path: fire_sword
    model_id: 5000
fire_sword_iron:
  display_name: '&fFire Sword'
  resource:
    material: IRON_SWORD
    generate: false
    model_path: fire_sword
    model_id: 5000
fire_sword_diamond:
  display_name: '&fFire Sword'
  resource:
    material: DIAMOND_SWORD
    generate: false
    model_path: fire_sword
    model_id: 5000
```

As you can see, we created an entry in the ItemsAdder configuration for each item type in the above defined `SWORDS` collection. Note the `model_id: 5000`, this sets the model id on all the textures to the same one, which makes this work. Now you can use any one of these identifiers in the wrap configuration, but it's best to use the shortest one, in this case `itemsadder:hmcwraps:fire_sword`:

```yaml
SWORDS:
  wraps:
    1:
      uuid: 'fire_sword'
      id: 'itemsadder:hmcwraps:fire_sword'
      (other configuration)
```

### Crucible

As we don't provide a Crucible configuration, we don't have any examples here. It should be fairly similar though.