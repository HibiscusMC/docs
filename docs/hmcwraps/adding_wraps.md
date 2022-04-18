---
sidebar_position: 3
---

# Adding Wraps

Adding a wrap using HMCWraps is very simple. Here, you can see an example of a wrap for `SWORDS` broken down with comments on each configuration key.

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
        # The physical wrap to apply (nullable)
        physical:
          # The Bukkit material (PAPER) or a hook (oraxen:physical_wrap)
          id: 'PAPER'
          # Custom model data, automatically applies if you have set a hook in the id value
          model-id: 2
          # Name displayed
          name: '<red>Fire <gray>Wrap for <blue>Diamond Sword'
          # If the wrap should be given to the player after they unwrap the item or re wrap it
          keep-after-unwrap: true
          # Lore displayed
          lore:
            - '<green>Apply this to an item to wrap it!'
```