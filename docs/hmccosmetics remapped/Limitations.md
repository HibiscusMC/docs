---
sidebar_position: 8
---

# Limitations

Because of how Minecraft works, there are a few limitations when using custom cosmetics.

### Hats & Armor type Cosmetics
- Hats (and other armor type cosmetics, like `CHESTPLATE`, `LEGGINGS`, AND `BOOTS` duplicate themselves when you are in creative mode and attempt to remove it.

### Enchantments

Certain enchantments are client side only (such as changing block breaking speed). As such, if you have a cosmetic on, it will not apply. This can be fixed by passing the enchant from the currently equipped item to the cosmetic item in your config.yml under `slot-add-enchantments`

