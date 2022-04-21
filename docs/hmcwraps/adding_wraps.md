---
sidebar_position: 3
---

# Adding Wraps

Adding a wrap using HMCWraps is very simple. Here, you can see an example of a wrap for `SWORDS` (see [Collections](https://docs.hibiscusmc.com/docs/hmcwraps/collections)) broken down with comments on each configuration key.

```yaml
  SWORDS: # This can either be a collection (SWORDS), or an item (DIAMOND_SWORD).
    wraps: # List of wraps for the particular collection
      1:
        # The permission to virtually apply this wrap (inventory) (nullable)
        permission: 'hmcwraps.fire_sword'
         # The UUID (global identifier), has to be unique in ALL wraps!
        uuid: 1
        # Either custom model data (1) or a hook to get the custom model id (oraxen:my_sword)
        id: '1'
        # The name in the wraps inventory
        name: '<red>Fire <gray>Wrap'
        # If it should glow in the wraps inventory (nullable)
        glow: true
        # The lore in the wraps inventory (nullable)
        lore:
          - '<gray>Apply this wrap to make your sword look fire!'
        # The flags the item should have in the wraps inventory (nullable)
        flags:
          - 'HIDE_ATTRIBUTES'
        # Enchantments the item should have within the inventory (not applied to the item). Optional
        enchantments:
          - 'DIG_SPEED: 1'
        # Amount shown in the GUI
        amount: 1
        # The physical wrap to apply (Optional)
```

## Physical Wraps

Physical wraps are physical items (like a token) that can be used to apply a wrap to the item.

To create a physical wrap, simply add this to the bottom of your wrap configuration.
```yaml
        physical:
          # The Bukkit material or a hook
          id: 'PAPER'
          # Custom model id, automatically applies if you have set a hook in the id value
          model-id: 2
          # Name displayed
          name: '<red>Fire <gray>Wrap for <blue>Diamond Sword'
          # If the physical should be given to the player after they unwrap the item or re wrap it
          keep-after-unwrap: true
          # Lore displayed
          lore:
            - '<green>Apply this to an item to wrap it!'
```