---
sidebar_position: 100
---

# Item Serializer

This covers all the options that can be used to create an item in HMCCosmetics. These sections typically start with `item`. 

## Options

### Material

The material property can either be a [material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) or an [item from another plugin](https://docs.hibiscusmc.com/hmccosmetics%20remapped/Compatible-Plugins#item-integrations). It can also reference Cosmetic items in HMCCosmetics.  

### Name

The name is the custom name given to the item. It must use [MiniMessage](https://docs.advntr.dev/minimessage/format.html) for formatting and supports PlaceHolderAPI placeholders in certain locations. 

### Lore

Lore is names on the bottom of the item. It must use [MiniMessage](https://docs.advntr.dev/minimessage/format.html) for formatting and supports PlaceHolderAPI placeholders in certain locations. 

### Model Data

Model Data is the model that the item will use. This requires a resource pack to work properly. If you have another items plugin handling Model Data, then it's recommend to get the item in materials. 

### Amount

The amount of an item to show.

### Unbreakable

If the item should have the unbreakable flag. 

### Glowing

If the item should be glowing, adds the hide enchants flag and luck 1. 

### NBT Tags

This adds NBT Tags to the item under Bukkit values. 

### Enchants

This adds enchantments to the item.

### Item Flags

This adds [Item Flags](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html) to the item. 

### Texture (Heads Only)

This adds a custom texture to a head. You can find some [here](https://minecraft-heads.com/custom-heads)

### Owner (Heads Only)

This adds a player owner to the head.

### Color (Dyable Items Only)

This colors an item, but the underlying item must be dyable (Leather horse armor, potions, leather armor, etc.)

There are two formats:
```yaml
color: "#FFFFFF" #Hex codes
```

```ymal
color:
  red: 255
  blue: 255
  green: 255
```



## Example / Reference

### Generic Example

```yaml
material: PAPER
name: "<WHITE>A Paper Backpack!"
lore:
  - ""
  - "<gray>Enabled: <#6D9DC5>%HMCCosmetics_equipped_beanie%"
  - "<gray>Allowed: <#6D9DC5>%HMCCosmetics_unlocked_beanie%"
model-data: 4
amount: 2
unbreakable: true
glowing: true
nbt-tags:
  customNBTTag: 1
enchants:
  luck: 1
item-flags:
  - HIDE_ENCHANTS
owner: "LoJoSho"
texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmU1YTgzNDFjNDc4YTEzNDMwMjk4MWU2YTc3NThlYTRlY2ZkOGQ2MmEwZGY0MDY3ODk3ZTc1NTAyZjliMjVkZSJ9fX0="
color: "#FFFFFF"
```

### Computer Plushie Hat Example

```yaml
material: PLAYER_HEAD
name: "<WHITE>Computer Plushie!"
glowing: true
texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDkzNGFlNjg2MGJiM2Y2ZTYxZGU3ZjVhYzY5Nzg2MzhmNzc4YTdmM2ZiMmE5ZmZjMjE2ZTcxZDk3MjMyYTFkYiJ9fX0="
```

### Colorful Cap Example

```yaml
material: LEATHER_HELMET
name: "<BLUE>Colorful Cap!"
color: "#02eeff"
```

### Big Head Example

```yaml
material: PLAYER_HEAD
name: "<RED>%player_name% # This placeholder will be processed when a player equips this as a cosmetic item or in a menu. 
owner: "%player_name%"
```