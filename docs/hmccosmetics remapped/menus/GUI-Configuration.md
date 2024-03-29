---
sidebar_position: 4000
---

# Menu Configuration

## Adding a Cosmetic

If you just added a cosmetic to your configurations, but don't see it in a menu yet, this is because you must add it to your menu file manually.

Doing this is simple, you can follow this template:

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

For material, you can use any bukkit material, or material from one of the compatiable plugins. This includes automatically getting the material info from your cosmetic
configuration, which you can see is being done above.

## Multiple Pages / Categories

By default, HMCCosmetics includes one cosmetic GUI. However, you can create as many GUIs as you need.

To do this, just create a second file in the `menus` folder, and copy the contents from `defaultmenu.yml` to that file.

You can create a button to open the next page with the `[MENU] <menu_name>` action:

```yaml
  main_menu:
    slots:
      - 26
    item:
      material: PAPER
      name: "<#d24c9f>Next Page"
      amount: 1
    type: empty # use empty type for buttons
    actions:
      any:
        - "[MENU] main_menu"
```

:::tip 

You can see more examples of how to create multiple pages & categories at the bottom of this page, under the "Menu Examples" section.

:::

## Slots System

The slot system is similar to other plugins, allowing both single or multiple slots. An example of multiple slots are:

```yaml
  niftyString:
    slots:
      - 7-10 # This will only fill slot 7->10. 
      - 12 # This will only fill slot 12. 
    item:
      material: STRING
      amount: 1
      lore:
        - "<WHITE>"
        - "<gray>Colorful balloon!"
```

## Priority System

The priority system simply allows you to decide which item to show if there are more than one item amongst one item slot. The higher the number, the more priority it has.
The default value is 1. 

```yaml
  test1:
    slots:
      - 1
    item:
      material: RED_DYE
      name: "<red>Test 1"
    type: EMPTY
    priority: 5 # Since 5 is bigger than 1, this will take priority. 
  test2:
    slots:
      - 1
    item:
      material: BLUE_DYE
      name: "<BLUE>Test 2"
    type: EMPTY
    priority: 1
```

## Equipped Cosmetic System

This system allows you to set an item to show when a player is already wearing a certain cosmetic.

```yaml
  cosmeticsystem:
    slots:
      - 21
    item:
      material: "paper"
      name: "<#d24c9f>Earth Day Grabber (Limited Time!)"
      amount: 1
    equipped-item:
      material: "YELLOW_WOOL" # If this does not exist, it will take the material in the original material found under item
      name: "This cosmetic has been equipped!"
```

## Locked Cosmetic System

This system allows you to set an item to show when a player does not have permission to equip a cosmetic. Equipped cosmetic item takes priority over locked cosmetic items. 

```yaml
  cosmeticsystem:
    slots:
      - 21
    item:
      material: "paper"
      name: "<#d24c9f>Earth Day Grabber (Limited Time!)"
      amount: 1
    locked-item:
      material: "BARRIER" # If this does not exist, it will take the material in the original material found under item
      name: "&cLOCKED!"
      lore:
        - "<WHITE>"
        - "<gray>Collect some trash to unlock this cosmetic!"
```

:::info 

Before v2.3.0, you could only set a locked cosmetic gui item with `locked-name` and `locked-lore` under the item. 

:::

## Action System

The action system allows you to define different events when clicking on menu items. 

## Examples

### Menu Examples

A simple main menu configuration with categories:

`defaultmenu.yml`
```yaml
title: "<white>Default Menu"
rows: 1
permission: hmccosmetics.menu.default
items:
  hats_menu:
    slots:
      - 2
    item:
      material: PAPER
      name: "<blue>Hat Cosmetics"
      amount: 1
    type: empty
    actions:
      any:
        - "[MENU] hat_cosmetics"
  backpack_menu:
    slots:
      - 3
    item:
      material: PAPER
      name: "<blue>Backpack Cosmetics"
      amount: 1
    type: empty
    actions:
      any:
        - "[MENU] backpack_cosmetics"
  hand_accessory_menu:
    slots:
      - 4
    item:
      material: PAPER
      name: "<blue>Offhand Cosmetics"
      amount: 1
    type: empty
    actions:
      any:
        - "[MENU] offhand_cosmetics"
  balloon_menu:
    slots:
      - 5
    item:
      material: PAPER
      name: "<blue>Balloon Cosmetics"
      amount: 1
    type: empty
    actions:
      any:
        - "[MENU] balloon_cosmetics"
```

After creating this main menu file, you would then create different menus for each cosmetic type.

