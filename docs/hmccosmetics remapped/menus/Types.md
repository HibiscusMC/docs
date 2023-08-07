---
sidebar_position: 5000
---

# Menu Item Types

Menu items can be a powerful way for players to interact with HMCCosmetics through simple menus! There are a few types of items that each item in the gui can take. 

## Types

All menu types include the following listerners: `any`, `left-click`, `right-click`, `shift-left-click`, `shift-right-click`. All of these inherit from previous, so any will run it's actions, but it will also run left-click if applicable. 

### Empty (Default)

This is a basic item most often used for buttons or for showcasing information in an item tool tip. 

### Cosmetic

This is an item that's attached to a cosmetic, when a player clicks on the item it will equip/unequip the cosmetic. It requires the `cosmetic` property that links to a cosmetic. 

```yaml
  beanie:
    slots:
      - 0
    item:
      material: hmccosmetics:beanie
      lore:
        - ""
        - "<gray>Enabled: <#6D9DC5>%HMCCosmetics_equipped_beanie%"
        - "<gray>Allowed: <#6D9DC5>%HMCCosmetics_unlocked_beanie%"
    type: cosmetic
    cosmetic: beanie
```

It also comes with 2 additional listeners for actions, `on-equip` and `on-unequip`. 
