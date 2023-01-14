---
sidebar_position: 1
---

# Item
Many of our item configurations are built upon our `ConfigItem`. This contains all basic item features.

## Format
### Example
```yaml
item:
  id: 'DIAMOND_SWORD'
  name: '<red>Diamond <gray>Sword'
  ```
This is the most basic ConfigItem one could have, but there are many other options:

`id` - Either the [material name](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) or a [hook](https://docs.hibiscusmc.com/docs/hmcwraps/hooks)
- `id: 'DIAMOND_SWORD'`

`name` - The item name formatted with MiniMessage
- `name: '<red>Some name'`

`glow` - If the item should be glowing (not required)
- `glow: true`

`lore` - The lore of the item (not required)

- ```yaml
  lore:
    - '<green>Some lore' 
  ```

`flags` - Item flags from [Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html) (not required)
- ```yaml
  flags:
    - 'HIDE_ATTRIBUTES' 
  ```

`model-id` - The custom model id of the item (not required)
- `model-id: 2`

`enchantments` - [Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) and their levels to be added
- ```yaml
  enchantments:
    KNOCKBACK: 3
    LUCK: 6 
  ```

`amount` - How many items there should be (can NOT exceed 64) (not required)
- `amount: 3`

`color` - The color of the item either HEX or RGB (not required)
- `color: '#ff0000'`
- `color: '255,0,0'`