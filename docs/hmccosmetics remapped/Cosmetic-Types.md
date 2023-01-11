---
sidebar_position: 3
---

# Cosmetic Types

HMCCosmetics has **seven** types of cosmetics: `HELMET`, `BACKPACK`, `CHESTPLATE`, `LEGGINGS`, `BOOTS`, `OFFHAND`, and `BALLOON`

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
    name: "<rainbow>Colorful Hat</rainbow>"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%HMCCosmetics_equipped_beanie%"
      - "<gray>Allowed: <#6D9DC5>%HMCCosmetics_unlocked_beanie%"
    amount: 1
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

## `CHESTPLATE`, `LEGGINGS`, and `BOOTS` Cosmetics

These cosmetics function the same as a hat, so you can use them for cosmetic armor sets.

```yaml
chestplate:
  slot: CHESTPLATE
  permission: "hmccosmetics.chestplate"
  item:
    material: DIAMOND_CHESTPLATE
    name: "<blue>Chestplate"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%HMCCosmetics_equipped_chestplate%"
      - "<gray>Allowed: <#6D9DC5>%HMCCosmetics_unlocked_chestplate%"
    amount: 1
```
```yaml
pants:
  slot: LEGGINGS
  permission: "hmccosmetics.pants"
  item:
    material: DIAMOND_LEGGINGS
    name: "<blue>Pants"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%HMCCosmetics_equipped_pants%"
      - "<gray>Allowed: <#6D9DC5>%HMCCosmetics_unlocked_pants%"
    amount: 1
```
```yaml
boots:
  slot: BOOTS
  permission: "hmccosmetics.boots"
  item:
    material: DIAMOND_BOOTS
    name: "<blue>Boots"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%HMCCosmetics_equipped_boots%"
      - "<gray>Allowed: <#6D9DC5>%HMCCosmetics_unlocked_boots%"
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
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%HMCCosmetics_equipped_lantern_cosmetic%"
      - "<gray>Allowed: <#6D9DC5>%HMCCosmetics_unlocked_lantern_cosmetic%"
    amount: 1
```

## `BALLOON` Cosmetics

`BALLOON` Cosmetics are ModelEngine models which are attached to a leash that follows you around.

```yaml
test_balloon:
  slot: BALLOON
  permission: "hmccosmetics.kite"
  # TODO: update item material
  item:
    material: STONE
    amount: 1
  model: kite
```