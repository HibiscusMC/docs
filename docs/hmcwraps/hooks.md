---
sidebar_position: 5
---

# Hooks

Item hooks will get the item type, the custom model data, color, trim, equippable and item model and apply use that. No NBT data is being copied.

The hooks copy almost the entire item for the wrap inventory and for the wrapper/unwrapper items, but you are able to overwrite them with the properties within HMCWraps.

## [ItemsAdder](https://www.spigotmc.org/resources/✨itemsadder⭐emotes-mobs-items-armors-hud-gui-emojis-blocks-wings-hats-liquids.73355/)

```yaml
# The Bukkit material or hook
id: itemsadder:<namespace>:<item_name>
```

## [Nexo](https://docs.nexomc.com)

```yaml
# The Bukkit material or hook
id: nexo:<item_name>
```

## [Oraxen](https://www.spigotmc.org/resources/%E2%80%8D✅-25-☄%EF%B8%8F-oraxen-add-items-blocks-armors-hats-food-furnitures-plants-and-gui.72448/)

```yaml
# The Bukkit material or hook
id: oraxen:<item_name>
```

## [Crucible](https://mythiccraft.io/index.php?resources/crucible-create-unbelievable-mythic-items.2/)

```yaml
# The Bukkit material or hook
id: mythic:<item_name>
```

## [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)

PlaceholderAPI Placeholders can be used in item names & lore.

List of (most) PAPI Placeholders: https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders

## [ExecutableItems](https://www.spigotmc.org/resources/custom-items-plugin-executable-items.77578/)

Using EI as an item hook is currently unsupported as it doesn't provide texture information and the features of the items currently can't be transferred to wraps. Otherwise you are able to use the EI hook in [global disables](https://docs.hibiscusmc.com/hmcwraps/config/global_disable/) and [ranges](https://docs.hibiscusmc.com/hmcwraps/config/wraps/#range) to prevent players from wrapping EI items. Simply use the `executable-items` key.

### Placeholders provided by HMCWraps
Please replace `<uuid>` with a valid uuid of a wrap.

- `%hmcwraps_mainhand%` - Returns the uuid of wrap in the current main hand
- `%hmcwraps_filter%` - Returns a translatable message if the filter is active
- `%hmcwraps_<uuid>_equipped%` - Returns a translatable message if the specified wrap is currently on the item the player is wrapping with the virtual menu
- `%hmcwraps_<uuid>_modelid%` - Returns the model id of the specified wrap
- `%hmcwraps_<uuid>_color%` - Returns the hex color of the specified wrap
- `%hmcwraps_<uuid>_type%` - Returns the item type (material) or the collection the specified wrap is in 