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

`id` - Either the [material name](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) or a [hook](https://docs.hibiscusmc.com/hmcwraps/hooks)
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

`tooltip-style` - The namespaced key for the tooltip style of the item. This will show in the wrap inventory and on physical wrappers if applied there.
- `tooltip-style: 'nexo:verycooltooltip'`

`nbt` - Apply an NBT to an item. This strictly follows Minecraft's container based approach.
- `nbt: '{publicBukkitValues:{somePlugin:{someValue:"sus"}}}'`

`durability` - Set the current durability of an item. This can't exceed Minecraft's limit.
- `durability: 20`

`skull-owner` - Set the skull owner of an item. This is only applicable to items with the id `PLAYER_HEAD`.
- `skull-owner: 'Skyslycer'`

`skull-texture` - Set the skull texture of an item. This is only applicable to items with the id `PLAYER_HEAD`.
- `skull-texture: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzFiMTE0ZWJkNGViNmM2YTYyNWMyODhmMTYyY2RlZDQxZDhmODdjYjZhMGRmNjljN2Y4M2JhZDQ1YmY4YzYxYiJ9fX0='`