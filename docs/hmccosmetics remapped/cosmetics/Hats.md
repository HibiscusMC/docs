---
sidebar_position: 1000
---

## `HELMET` Cosmetics

`HELMET` Cosmetics work by placing a "fake" cosmetic inside of the player's head slot. This means that your players can still place an actual armor piece (like a diamond helmet) inside of their head slot, but the cosmetic will show up instead. 

```yaml
beanie:
  slot: HELMET
  permission: "hmccosmetics.beanie"
  dyeable: true
  item:
    material: LEATHER_HORSE_ARMOR
    model-data: 2
    name: "<rainbow>Beanie Hat</rainbow>"
    lore:
      - ""
      - "<gray>A basic beanie!"
    amount: 1
```