---
sidebar_position: 2
---

# Wraps

## Format
### Wraps
Adding wraps is an extremely simple task in HMCWraps. You can use all the options from the [ConfigItem](https://docs.hibiscusmc.com/docs/hmcwraps/config/item) except:

- `id` now takes the custom model id or a [hook](https://docs.hibiscusmc.com/docs/hmcwraps/hooks) of the wrap, which also applies when wrapping an item
- `actions` - Do something when the wrap gets wrapped, unwrapped or previewed. More on that here: [Actions](https://docs.hibiscusmc.com/docs/hmcwraps/config/actions)
- All other changes only affect the item shown in the inventory

All options specific to wraps:

```yaml
# The permission to virtually apply this wrap (inventory) (not required)
permission: 'hmcwraps.fire_sword'
# The UUID (global identifier), has to be unique in ALL wraps!
uuid: 1
# Either custom model data (1) or a hook to get the custom model id (oraxen:my_sword)
id: '1'
# The physical wrap to apply (not required)
physical: # A physical wrapper (not required)
```

### Physical Wraps

Physical wraps are physical items (like a token) that can be used to apply a wrap to the item.
The configuration for physical wraps really is just a [ConfigItem](https://docs.hibiscusmc.com/docs/hmcwraps/config/item), with one single addition:

- `keep-after-unwrap` - When an item is wrapped with the physical wrapper, this option decides, if the player gets this wrap back, when they unwrap the item.

To create a physical wrap, simply add something like this to the bottom of your wrap configuration. (_Example_)
```yaml
physical:
  # The Bukkit material or a hook
  id: 'PAPER'
  # Custom model id, automatically applies if you have set a hook in the id value
  model-id: 2
  # Name displayed
  name: '<red>Fire Sword <gray>Wrap'
  # If the physical should be given back to the player after they unwrap 
  # an item wrapped with the physical wrapper or not
  keep-after-unwrap: true
  # Lore displayed
  lore:
    - '<green>Apply this to an item to wrap it!'
```

## Adding
You have two options when adding wraps: 

**A**: In the config.yml, there is an entry called `items`, where you can add wraps.

**B**: You can create **Wrap Files**, which are located in `plugins/HMCWraps/wraps/` and can be nested 10 folders deep.

Example A: `config.yml`
```yaml
items: # Items entry in config.yml
  DIAMOND_SWORD: # Where the wrap should be applicable. Either a material or a collection
    1: # Counter, this doesn't really matter, it just has to be different from other items in this list
      id: '1'
      uuid: 'fire_sword'
      physical:
        id: 'PAPER'
        name: '<red>Fire Sword <gray>Wrap'
        model-id: '2'
        keep-after-unwrap: true
```

Example B: `wraps/fire_wraps.yml`
```yaml
# If this Wrap File should be enabled and loaded
enabled: true
items: # Items entry in fire_wraps.yml
  DIAMOND_SWORD: # Where the wrap should be applicable. Either a material or a collection
    1: # Counter, this doesn't really matter, it just has to be different from other items in this list
      id: '1'
      uuid: 'fire_sword'
      physical:
        id: 'PAPER'
        name: '<red>Fire Sword <gray>Wrap'
        model-id: '2'
        keep-after-unwrap: true
```

> **Note**: Did you know that you can add as many wraps in a Wrap File as you want?
>
> This ensures easy drag n' drop configurations!

**References**: 
- [Materials](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)
- [Hooks](https://docs.hibiscusmc.com/docs/hmcwraps/hooks)
- [Collections](https://docs.hibiscusmc.com/docs/hmcwraps/config/collections)