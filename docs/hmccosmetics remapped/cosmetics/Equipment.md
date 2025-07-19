---
sidebar_position: 4000
---

## `CHESTPLATE`, `LEGGINGS`, and `BOOTS` Cosmetics

These cosmetics function the same as a hat, so you can use them for cosmetic armor sets.

```yaml
chestplate:
  slot: CHESTPLATE
  permission: "hmccosmetics.chestplate"
  item:
    material: DIAMOND_CHESTPLATE
    name: "<blue>Chestplate"
    amount: 1
```
```yaml
pants:
  slot: LEGGINGS
  permission: "hmccosmetics.pants"
  item:
    material: DIAMOND_LEGGINGS
    name: "<blue>Pants"
    amount: 1
```
```yaml
boots:
  slot: BOOTS
  permission: "hmccosmetics.boots"
  item:
    material: DIAMOND_BOOTS
    name: "<blue>Boots"
    amount: 1
```

## `OFFHAND` Cosmetics
`OFFHAND` Cosmetics are items that go in the player's offhand slot. When they switch to a different item (from the survival inventory or with the F key), it is automatically unapplied temporarily. When they click F again, the cosmetic comes back!

```yaml
lantern_cosmetic:
  slot: OFFHAND
  permission: "hmccosmetics.lantern_cosmetic"
  item:
    material: PAPER
    model-data: 5
    name: "<blue>Lantern Cosmetic"
    amount: 1
```

