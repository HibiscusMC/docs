---
sidebar_position: 2
---

# Wraps

## Format
### Wraps
Adding wraps is an extremely simple task in HMCWraps. You can use all the options from the [ConfigItem](https://docs.hibiscusmc.com/hmcwraps/config/item) except:

- `id` now takes the custom model id or a [hook](https://docs.hibiscusmc.com/hmcwraps/hooks) of the wrap, which also applies when wrapping an item
- `color` - The color of the wrap, either in hexadecimal or RGB
- `actions` - Do something when the wrap gets wrapped, unwrapped or previewed. More on that here: [Actions](https://docs.hibiscusmc.com/hmcwraps/config/actions)
- `wrap-name` - The name the item should have after being wrapped.
- `wrap-lore` - The lore the item should have after being wrapped.
- `wrap-nbt` - The NBT the item should have after being wrapped.
- `wrap-flags` - The flags the item should have after being wrapped.
- `wrap-durability` - The durability the item should have after being wrapped.
- All other changes only affect the item shown in the inventory

All options specific to wraps:

```yaml
# The permission to virtually apply this wrap (inventory) (not required)
permission: 'hmcwraps.fire_sword'
# The UUID (global identifier), has to be unique in ALL wraps!
uuid: 1
# Either custom model data (1) or a hook to get the custom model id (oraxen:my_sword)
id: '1'
# The color of the wrap (not required)
color: '#ff0000'
# The name applied to the item when wrapped
wrap-name: '<red>Something cool'
# The lore applied to the item when wrapped
wrap-lore:
  - 'hello!'
# The physical wrap to apply (not required)
physical: # A physical wrapper (not required)
```

### Locked options

If you want to have the plugin display something else when the player does not have permissions for the wrap, you can add the following stuff:

`locked-item` is just a [ConfigItem](https://docs.hibiscusmc.com/hmcwraps/config/item) which will be displayed.

However, if you don't want to change the whole item but just the lore and the display name, you can use the following options:

- `locked-name`
- `locked-lore`

Both of them can be configured regularly like `name` and `lore`.

### Armor Imitation
The biggest pain in the industry is probably the fact that you can't apply wraps to armor other than leather. 
However, HMCWraps has a solution for that!
Configure your wrap as usual for the specific type, (e.g. `DIAMOND_HELMET`) and add the following option:

`armor-imitation: true`

Just remember, that any work you do in your resource pack (manager), has to be applied to the leather alternative,
in this case `LEATHER_HELMET`.

In order for this to function flawlessly, some inventories like crafting, enchanting and anvils have been disabled for imitated items.

### Range
To control which items should or should not have acces to that wrap more precisly, you can use ranges.

Each criteria has two lists, which you can't use simultaneously: 

`exclude` - Any item matching any of the entries won't have access to that wrap.

`include` - Any item matching any of the entries will exclusively have access to that wrap. Items that don't match won't have access.

Ranges have the following criteria:

`model-id` - This checks for the model id. Use `-1` as the default model id.

`color` - This checks for the color. Use `none` as no color.

`oraxen` - This checks for the Oraxen id if available. You use the regular hook syntax without the `oraxen:` prefix.

`itemsadder` - This checks for the ItemsAdder id if available. You use the regular hook syntax without the `itemsadder:` prefix.

`mythic` - This checks for the Crucible id if available. You use the regular hook syntax without the `mythic:` prefix.

#### Example

```yaml
range: 
  model-id:
    include:
    - 22
    - 23
    - 24
```
Only items with the model id 22, 23 or 24 can be wrapped with that wrap.


### Physical Wraps

Physical wraps are physical items (like a token) that can be used to apply a wrap to the item.
The configuration for physical wraps really is just a [ConfigItem](https://docs.hibiscusmc.com/hmcwraps/config/item), with one single addition:

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
You have two options when adding wraps: (You can also use the command!)

**A**: In the config.yml, there is an entry called `items`, where you can add wraps.

**B**: You can create **Wrap Files**, which are located in `plugins/HMCWraps/wraps/` and can be nested 10 folders deep.

Example A: `config.yml`
```yaml
items: # Items entry in config.yml
  DIAMOND_SWORD: # Where the wrap should be applicable. Either a material or a collection
    1: # Counter, this doesn't really matter, it just has to be different from other items in this list
      id: '1'
      uuid: 'fire_sword'
      name: '<red>Fire Sword <gray>Wrap'
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
      name: '<red>Fire Sword <gray>Wrap'
      physical:
        id: 'PAPER'
        name: '<red>Fire Sword <gray>Wrap'
        model-id: '2'
        keep-after-unwrap: true
```

Example C: `wraps/johndoe.yml` (with armor imitation enabled)
```yaml
enabled: true
items:
  DIAMOND_HELMET:
    1: 
      id: '1' # This has to be for the leather alternative, in this case LEATHER_HELMET
      uuid: 'fire_sword'
      name: '<blue>John Doe <gray>Wrap'
      color: '#ff0000' # This too
      armor-imitation: true # The important part
```

> **Note**: Did you know that you can add as many wraps in a Wrap File as you want?
>
> This ensures easy drag n' drop configurations!

**References**: 
- [Materials](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)
- [Hooks](https://docs.hibiscusmc.com/hmcwraps/hooks)
- [Collections](https://docs.hibiscusmc.com/hmcwraps/config/collections)
