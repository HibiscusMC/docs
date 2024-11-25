---
sidebar_position: 4
---

# GUI Configuration

Configuring the inventory in HMCWraps is fairly simple. There is only one inventory to apply and preview virtual wraps.
The GUI can be configured in the `inventory` entry in `config.yml`

## Item Options
An item in the inventory is just a [ConfigItem](https://docs.hibiscusmc.com/hmcwraps/config/item) with just two additions: [Actions](https://docs.hibiscusmc.com/hmcwraps/config/actioms) and `fills`, which is a number list containing all slots (excluding the set one) the item should fill.

To make the item empty (not filled with wraps), use `EMPTY` as the `id`.

The slot of the item is determined by the entry (e.g. `45`).
You also add a `fills` list to the item that contain other slots the item should fill.
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

### Triggers
All triggers possible in the inventory (self-explanatory):
- `any`
- `left`
- `middle`
- `right`
- `shift-any`
- `shift-left`
- `shift-right`

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
- `shortcut` - Shortcut settings (disable the shortcut by setting `enabled` to `false`)
- `item-change-enabled` - If the player should be able to switch the wrapping item in the inventory.
- `open-without-item-enabled` - If the player should be able to open the wraps inventory with the command while not holding any item.
- `no-item-title` - This the title that shows when the option above is enabled and the player opens it while not holding an item. (This option is not included by default, but you can add it to your config)
- `sort-order` - The order in which the wraps in the inventory will be sorted.
- `actions` - Default actions on each wrap for which the player has permission 
- `locked-actions` - Default actions for all wraps where the player doesn't have the right permissions

If you want to disable the shift-click shortcut for only one player, give them the permission `hmcwraps.shortcut.disable`.

### Sort order
You can define a specific sorting order in which the wraps in the GUI are sorted. The default configuration looks as follows:

```yaml
  # The sort order by which the wraps in the inventory will be sorted
  sort-order:
    - 'PERMISSION' # The items the player has access to will be shown first
    - 'SORT_ID' # You can define a sort id on a wrap, lower numbers will be shown first. Example: 'sort: 3'
    - 'MODEL_ID' # Sorted by model id, lower numbers will be shown first
```

It is pretty self explanatory. The `PERMISSION` entry sorty by if the players has permission to use that wrap. The wraps the player has access to are shown first. In the next layer, all items with the same sort from the previous layer are sorted with the `SORT_ID`. This is an id you can define for each wrap to have some wraps show up wherever you want. Check the [wrap configuration](https://docs.hibiscusmc.com/hmcwraps/config/wraps) for more information. Last but not least, the wraps get sorted by the custom model data. The lower the number the higher is the position. So a wrap with a model id of 20 will be shown before one with a model id of 90.

You can move and remove any of these as you want to alter the sorting process.

### No item options
When `open-without-item-enabled` is set to `true`, one might want to show a different menu.
This can be achieved by using the `n` and `w` slot options.

If you, for example, want to only show an item configured when the player isn't holding a wrappable item,
you can append `n` to the slot number. (Example: `45` -> `45n`)

If you, on the other hand, want to only show an item configured when the player is holding a wrappable item,
you can append `w` to the slot number. (Example: `45` -> `45w`)

If you want the item to show in both cases, you can just use the normal slot number. (Example: `45`)

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
  # Shortcut settings
  shortcut:
    # If the shortcut to open the wrap inventory when shift & right-clicking should be enabled
    enabled: true
    # What items can't be used to open the inventory
    exclude: 
      - SHIELD
      - BOW
  # If the player should be able to switch the wrapping item in the inventory.
  # When enabled, the inventory won't close after wrapping or unwrapping.
  item-change-enabled: true
  # If the player should be able to open the wraps inventory with the command while not holding any item.
  # The inventory won't be filled. If the option above is enabled, the player can then click the item to wrap.
  open-without-item-enabled: false
  # Actions that should be run when the user clicks a wrap
  actions:
    left:
      WRAP:
        - ''
    right:
      PREVIEW:
        - ''
  # Executed when clicking a wrap the player doesn't have permission for
  locked-actions:
    right:
      PREVIEW:
        - ''
  # The set items in the inventory, every empty slot will be filled with wraps
  items:
    # Slots start from 0
    45:
      id: 'HOPPER'
      name: '%hmcwraps_filter%'
      lore:
        - '<gray>Toggle to see all'
        - '<gray>or only owned wraps.'
      actions:
        any:
          TOGGLE_FILTER:
            - ''
    46:
      # The Bukkit material or hook
      id: 'GRAY_STAINED_GLASS_PANE'
      # The name
      name: '<gray> '
      # What slots it should fill
      fills:
        - 48
        - 50
        - 52
    47:
      id: 'ARROW'
      name: '<green>Previous'
      # Actions, you can use all the above and more. It's the same format as the actions in the wraps.
      # The action: Either 'SCROLL_BACK', 'SCROLL_FORTH', 'PREVIOUS_PAGE', 'NEXT_PAGE', 'UNWRAP' to unwrap the current item, 'CLOSE' to close the inventory
      actions:
        # On any click, but there is 'left' and 'right' too
        any:
          # Scroll back / previous page
          SCROLL_BACK:
            # No arguments are needed
            - ''
    51:
      id: 'ARROW'
      name: '<green>Next'
      actions:
        any:
          SCROLL_FORTH:
            - ''
    53:
      id: 'RED_CONCRETE'
      name: '<red>Unwrap'
      # The lore displayed
      lore:
        - '<gray>Unwrap your current item'
      actions:
        any:
          UNWRAP:
            - ''
```