---
sidebar_position: 4
---

# GUI Configuration

Configuring the inventory in HMCWraps is fairly simple. There is only one inventory to apply and preview virtual wraps.
The GUI can be configured in the `inventory` entry in `config.yml`

## Item Options
An item in the inventory is just a [ConfigItem](https://docs.hibiscusmc.com/hmcwraps/config/item) with just one addition: [Actions](https://docs.hibiscusmc.com/hmcwraps/config/actions)
The slot of the item is determined by the entry (e.g. `45`)
```yaml
    45:
      # The Bukkit material or hook
      id: 'GRAY_STAINED_GLASS_PANE'
      # The name
      name: '<rainbow>Example GUI Item'
      # Actions
      actions:
        # When the item is clicked in any way
        any: 
          # Send a message
          MESSAGE:
            - '<green>You clicked the <rainbow>Example GUI Item!!!'
```

## GUI Actions
All actions possible on GUI items can be found here: [Actions](https://docs.hibiscusmc.com/hmcwraps/config/actions)

## Inventory Type
There are two types the inventory can have. Those are set
- `SCROLLING` - Scrolls down one line at a time (like a feed).
- `PAGINATED` - Scrolls by inventory "page" (like a book).

## Format
In the `inventory` entry in the `config.yml`, there are the following configuration options: 
- `type` - The type of the inventory
- `title` - The title of the inventory
- `rows` - How many rows the item should have
- `target-item-slot` - Where the item the player was holding should be placed
- `items` - All items and their slot

## Example
```yaml
# The inventory in config.yml
inventory:
  # Type of GUI, SCROLLING or PAGINATED
  type: SCROLLING
  # The title
  title: <red><bold>Wraps
  # How many rows the inventory should have
  rows: 6
  # The slot to set the item the player is holding to
  target-item-slot: 49
  # The set items in the inventory, every empty slot will be filled with wraps
  items:
    # Slots start from 0
    45:
      # The Bukkit material or hook
      id: 'GRAY_STAINED_GLASS_PANE'
      # The name
      name: '<gray> '
    46:
      id: 'GRAY_STAINED_GLASS_PANE'
      name: '<gray> '
    47:
      id: 'ARROW'
      name: '<green>Previous'
      action: 
        any:
          SCROLL_BACK:
            - ''
    48:
      id: 'GRAY_STAINED_GLASS_PANE'
      name: '<gray> '
    50:
      id: 'GRAY_STAINED_GLASS_PANE'
      name: '<gray> '
    51:
      id: 'ARROW'
      name: '<green>Next'
      action:
        any:
          SCROLL_FORTH:
            - ''
    52:
      id: 'GRAY_STAINED_GLASS_PANE'
      name: '<gray> '
    53:
      id: 'RED_CONCRETE'
      name: '<red>Unwrap'
      glow: true
      lore:
        - '<gray>Unwrap your current item'
      action:
        any:
          UNWRAP:
            - ''
```