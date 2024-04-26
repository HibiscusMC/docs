---
sidebar_position: 80
---

# Reward Types

**HMCRewards** has two reward types - **Item Rewards** and **Command Rewards**.

## Item Rewards

**Item Rewards** are a way to deliver an item to the player without any extra configuration steps. Item Rewards can be used when HibiscusCommons or HMCRewards has a hook with that specific plugin already. Currently, the tested item hooks are:

**Vanilla:** NO PREFIX NEEDED

**Oraxen:** `oraxen:<item>`

**MythicMobs:** `mythicmobs:<item>`

**ItemsAdder:** `itemsadder:<namespace>:<item>`

**MMOItems:** `mmoitems:<type>:<item>`

## Command Rewards

**Command Rewards** are a much more advanced reward type. With a command reward, you can deliver several rewards to a player, or items from a plugin which HMCRewards does not have explicit support for (such as your own custom plugin or similar!)

Setting up a command reward usually looks like this:

```yaml
rewards:
  example_command:
    type: "command"

    # Required Inventory Slots for claiming
    required-space: 3

    # icon
    display:
      material: 'oraxen:gift_box'
      name: '<red>Example Command Reward'
      lore:
        - '<#d24c9f><bold>Contains:'
        - '<dark_gray>x1 <aqua>Diamond'
        - '<dark_gray>x1 <gold>Enchanted Golden Apple'
        - '<dark_gray>x1 <green>Emerald'

    # Commands to deliver to player
    commands:
      - 'say %player% claimed a command reward from HMCRewards!'
      - 'minecraft:give %player% minecraft:diamond 1'
      - 'minecraft:give %player% minecraft:enchanted_golden_apple 1'
      - 'minecraft:give %player% minecraft:emerald 1'
```