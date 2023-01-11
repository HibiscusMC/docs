---
sidebar_position: 4
---

# GUI Configuration

## Multiple Pages

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

## Action System

The action system allows you to define different events when clicking on menu items.
For `cosmetic` type menu items, you can use `on-equip` and `on-unequip` instead of `any` which will make the action happen when the cosmetic is equipped/unequipped.
For `empty` type menu items, currently, only `any` is accepted.

### Current Actions

```yaml
    actions:
      any:
        - "[MENU] main_menu"
```

```yaml
    actions:
      any:
        - "[CLOSE]"
```

```yaml
    actions:
      any:
        - "[PLAYER-COMMAND] say Hi"
```

```yaml
    actions:
      any:
        - "[CONSOLE-COMMAND] say Hi"
```

```yaml
    actions:
      any:
        - "[MESSAGE] <#d24c9f>Hello %player_name%!"
```

### Examples

Send a console command when the player removes a cosmetic:
```yaml
    actions:
      on-unequip:
        - "[CONSOLE-COMMAND] say A player removed a cosmetic"
```