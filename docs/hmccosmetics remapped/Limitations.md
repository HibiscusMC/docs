---
sidebar_position: 8
---

# Limitations

Because of how Minecraft works, there are a few limitations when using custom cosmetics.

### Hats & Armor type Cosmetics
- Hats (and other armor type cosmetics, like `CHESTPLATE`, `LEGGINGS`, AND `BOOTS` duplicate themselves when you are in creative mode and attempt to remove it. You can attempt to fix this by setting `cosmetic-settings.destroy-loose-cosmetics` to true allowing HMCC to check items to see if they are a cosmetic and delete it if so. Additionally, all cosmetics generated have the owner they were generated for within their nbt data. 

### Enchantments

Certain enchantments are client side only (such as changing block breaking speed). As such, if you have a cosmetic on, it will not apply. This can be fixed by passing the enchant from the currently equipped item to the cosmetic item in your config.yml under `slot-add-enchantments`

