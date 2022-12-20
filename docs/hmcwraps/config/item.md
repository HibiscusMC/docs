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

`name` - The item name formatted with MiniMessage

`glow` - If the item should be glowing (not required)

`lore` - The lore of the item (not required)

`flags` - Item flags from [Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html) (not required)

`model-id` - The custom model id of the item (not required)

`enchantments` - [Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) and their levels to be added (e.g. `KNOCKBACK: 3`)

`amount` - How many items there should be (can NOT exceed 64) (not required)