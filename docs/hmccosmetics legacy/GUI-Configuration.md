---
sidebar_position: 4
---

# GUI Configuration

## Multiple Pages

By default, HMCCosmetics includes one cosmetic GUI, and one extra GUI (dye-menu.yml). However, you can create as many GUIs as you need.

To do this, just create a second file in the `menus` folder, and copy the contents from `main.yml` to that file.

You can create a button to open the next page with the `open-menu: <menu_name>` option:

```yaml
  26:
    material: PAPER
    name: "<#F7DCFA>Next Page"
    amount: 1
    model-data: 1
    action:
      any:
        open-menu: dye-menu
```

## Action System

The action system allows you to define different events for different click types. The current options are `LEFT`, `MIDDLE`, `RIGHT`, and `ANY`.

### Current Actions

```yaml
        # Open the specified menu
        open-menu: <MENU>
```

```yaml
        # Play a sound
        sound:
            name: "minecraft:block.chain.break"
            volume: 1.0
            pitch: 1.0
            category: "BLOCKS"
```

```yaml
        # Remove cosmetics currently applied to the player
        remove-cosmetics:
          - BOOTS
          - CHEST_PLATE
          - HAT
```

```yaml
        # Send a message to the player
        send-message: "<red>My test message!"
```

```yaml
        #  Send multiple messages to the player
        send-messages:
          - "<gray>Message 1"
          - "<red>Message 2"
```

```yaml
        # send a command, format is <sender:command>
        # senders can be player or console
        send-command: "player:give %player% diamond"
```

```yaml
        # Send multiple commands, format is <sender:command>
        send-commands:
          - "player:help"
          - "console:give %player% gold_ingot"
```

```yaml
        # Set items in the specified slots in the inventory
        # Works with all actions
        # Sets items in the next inventory if open-menu is specified
        set-items:
          12:
            material: PAPER
            name: "<red>Backpack"
            lore:
              - ""
              - "<gray>Enabled: <#6D9DC5>%enabled%"
              - "<gray>Allowed: <#6D9DC5>%allowed%"
            locked-lore:
              - "<red>You do not own this item!"
            amount: 1
            model-data: 4
            type: BACKPACK
            permission: ""
            id: backpack
```

### Examples

Open the dye menu only when equipping the cosmetic:
```yaml
    action:
      equip:
        any:
          open-menu: dye-menu
```

Send a command when the player removes a cosmetic:
```yaml
    action:
      remove:
        any:
          send-command: "console:give %player% diamond"
```