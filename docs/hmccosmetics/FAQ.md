---
sidebar_position: 6
---

# FAQ

## How do I make my cosmetics dyeable?

HMCCosmetics has an option to allow dyable cosmetics. To do this, you should add these lines to your cosmetic item's configuration:
```YAML
    dyeable: true # Enables dyeable item feature
    color: # Sets default color for item
      red: 5
      blue: 100
      green: 230
    open-menu: dye-menu # Opens the dye-menu when the cosmetic is applied
```

You can customize the dye menu in the `dye-menu.yml` file.

> Please note that this option only works with items that can be dyed. Commonly used items are `LEATHER_HORSE_ARMOR` and `POTION`.

## Can I change the lore when a cosmetic is applied to the player?

**Yes!** To do this, you can use the `applied-lore` modifier.
```yaml
    applied-lore: # Modifiers for when the item is in the players inventory
        - "<gray>My awesome <rainbow>Colorful Hat</rainbow>!"
```