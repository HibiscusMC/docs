---
sidebar_position: 7
---

# GUI Configuration

HMCWraps has many options for GUI configuration. 

## Inventory Type

- `SCROLLING` - *Scrolls down one line at a time.*
- `PAGINATED` - *Scrolls by inventory "page".*

## GUI Actions
Similar to HMCCosmetics, Wraps allows for actions.
The current options are as follows:

- `SCROLL_FORTH` - *Scroll to the next row (not page)*
- `SCROLL_BACK` - *Scroll to the previous row (not page)*
- `NEXT_PAGE` - *Open next page*
- `PREVIOUS_PAGE` - *Open previous page*
- `UNWRAP` - *Unwrap item in hand*
- `CLOSE` - *Close GUI*

```yaml
# The inventory (/wraps)
inventory:
  # Type of GUI, SCROLLING or PAGINATED
  category: SCROLLING
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
      # The action: Either 'SCROLL_BACK', 'SCROLL_FORTH', 'UNWRAP' to unwrap the current item, 'CLOSE' to close the inventory
      action: 'SCROLL_BACK'
    48:
      id: 'GRAY_STAINED_GLASS_PANE'
      name: '<gray> '
    50:
      id: 'GRAY_STAINED_GLASS_PANE'
      name: '<gray> '
    51:
      id: 'ARROW'
      name: '<green>Next'
      action: 'SCROLL_FORTH'
    52:
      id: 'GRAY_STAINED_GLASS_PANE'
      name: '<gray> '
    53:
      id: 'RED_CONCRETE'
      name: '<red>Unwrap'
      # The lore displayed
      lore:
        - '<gray>Unwrap your current item'
      action: 'UNWRAP'
```