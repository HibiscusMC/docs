---
sidebar_position: 4
---

# Cosmetic Types

HMCCosmetics has two types of cosmetics: `HAT`, and `BACKPACK`.

## `HAT` Cosmetics

`HAT` Cosmetics work by placing a "fake" cosmetic inside of the player's head slot. This means that your players can still place an actual armor piece (like a diamond helmet) inside of their head slot, but the cosmetic will show up instead. 

## `BACKPACK` Cosmetics

`BACKPACK` Cosmetics work by attaching an armor stand to the player that automatically rotates with them.

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