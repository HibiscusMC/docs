---
sidebar_position: 3
---

# Cosmetic Types

HMCCosmetics has **seven** types of cosmetics: `HAT`, ``BACKPACK`, `CHEST_PLATE`, `PANTS`, `BOOTS`, `OFF_HAND`, and `BALLOON`

## `HAT` Cosmetics

`HAT` Cosmetics work by placing a "fake" cosmetic inside of the player's head slot. This means that your players can still place an actual armor piece (like a diamond helmet) inside of their head slot, but the cosmetic will show up instead. 

```yaml
    material: PAPER
    name: "<rainbow>Colorful Hat</rainbow>"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%enabled%"
      - "<gray>Allowed: <#6D9DC5>%allowed%"
    locked-lore:
      - "<red>You do not own this item!"
    applied-lore:
        - "<gray>My awesome <rainbow>Colorful Hat</rainbow>!"
    amount: 1
    model-data: 2
    type: HAT
    permission: "cosmetics.colorful_hat"
    id: colorful_hat
```

## `BACKPACK` Cosmetics
`BACKPACK` Cosmetics work by attaching an armor stand to the player that automatically rotates with them.

```yaml
    material: PAPER
    name: "<blue>Backpack"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%enabled%"
      - "<gray>Allowed: <#6D9DC5>%allowed%"
    locked-lore:
      - "<red>You do not own this item!"
    applied-lore:
        - "<gray>My HMCCosmetics backpack!"
    amount: 1
    model-data: 4
    type: BACKPACK
    permission: ""
    id: backpack
```

## `CHEST_PLATE`, `PANTS`, and `BOOTS` Cosmetics

These cosmetics function the same as a hat, so you can use them for cosmetic armor sets.

```yaml
    material: DIAMOND_CHESTPLATE
    name: "<blue>Cosmetic Chestplate"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%enabled%"
      - "<gray>Allowed: <#6D9DC5>%allowed%"
    locked-lore:
      - "<red>You do not own this item!"
    amount: 1
    type: CHEST_PLATE
    permission: ""
    id: chestplate
```
```yaml
    material: DIAMOND_LEGGINGS
    name: "<blue>Cosmetic Leggings"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%enabled%"
      - "<gray>Allowed: <#6D9DC5>%allowed%"
    locked-lore:
      - "<red>You do not own this item!"
    amount: 1
    type: PANTS
    permission: ""
    id: pants
```
```yaml
    material: DIAMOND_BOOTS
    name: "<blue>Cosmetic Boots"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%enabled%"
      - "<gray>Allowed: <#6D9DC5>%allowed%"
    locked-lore:
      - "<red>You do not own this item!"
    amount: 1
    type: BOOTS
    permission: ""
    id: boots
```

## `OFF_HAND` Cosmetics
`OFF_HAND` Cosmetics are items that go in the player's offhand slot. When they switch to a different item (from the survival inventory or with the F key), it is automatically unapplied temporarily. When they click F again, the cosmetic comes back!

```yaml
    material: PAPER
    name: "<blue>Lantern Cosmetic"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%enabled%"
      - "<gray>Allowed: <#6D9DC5>%allowed%"
    locked-lore:
      - "<red>You do not own this item!"
    applied-lore:
        - "<gray>My lantern!"
    amount: 1
    model-data: 5
    type: OFF_HAND
    permission: ""
    id: lantern_cosmetic
```

## `BALLOON` Cosmetics

`BALLOON` Cosmetics are ModelEngine models which are attached to a leash that follows you around.

```yaml
  8:
    material: BARRIER
    name: "<blue>Balloon"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%enabled%"
      - "<gray>Allowed: <#6D9DC5>%allowed%"
    locked-lore:
      - "<red>You do not own this item!"
    amount: 1
    type: BALLOON
    permission: ""
    id: barrier
    balloon: "kindletronjr" # ModelEngine Model Name
```