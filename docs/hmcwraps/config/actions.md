---
sidebar_position: 5
---

# Actions
HMCWraps has an extensive action system with many actions.
## Types
There are many actions registered that can be used:

`SOUND` - Plays a [sound](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html)
- `ENTITY_VILLAGER_HURT`
- `ENTITY_VILLAGER_HURT 1 1` - You can also use volume and pitch

`TITLE` - Displays a title
- `0.5 4 1 some message` - fade in, hold, fade out and message

`SUBTITLE` - Displays a subtitle
- `0.5 4 1 some subtitle message` - fade in, hold, fade out and message

`ACTIONBAR` - Displays a message in the actionbar
- `some actionbar message`

`MESSAGE` - Sends a message to the player
- `another random message`

`COMMAND` - Executes a command as if the player would have done it
- `me is nice`
- `/say cheese`

`CONSOLE_COMMAND` - Runs the command as console
- `op Skyslycer`
- `/time set night`

`UNWRAP` - Unwrap the item the player is currently holding
- `''` - Yes, just put empty parentheses

`PARTICLE` - Shows a single [particle](https://github.com/Owen1212055/ParticleHelper/blob/main/api/src/main/java/com/owen1212055/particlehelper/api/type/Particles.java)
- `HEART`

`PARTICLE_MULTI` - Shows multiple [particles](https://github.com/Owen1212055/ParticleHelper/blob/main/api/src/main/java/com/owen1212055/particlehelper/api/type/Particles.java)
- `HEART 10 0.1 0.1 0.1` - amount, x, y and z offset

`CLOSE_INVENTORY` - Closes the inventory of the player. No arguments needed.

`TOGGLE_FILTER` - Toggle the [filtering](https://docs.hibiscusmc.com/hmcwraps/config/filter) of the GUI. No arguments needed.

`CLEAR_FAVORITES` - Clear all [favorites](https://docs.hibiscusmc.com/hmcwraps/config/favorites).

`WRAP` - Wrap the item in main hand with either the clicked ([GUI](https://docs.hibiscusmc.com/hmcwraps/config/gui)) or the supplied wrap.
- No arguments when using in GUI actions on wraps.
- `fire_sword`

`PREVIEW` - Preview either the clicked ([GUI](https://docs.hibiscusmc.com/hmcwraps/config/gui)) or the supplied wrap.
- No arguments when using in GUI actions on wraps.
- `fire_sword`


> **Note**: There are many particles and particle configurations. If you understand a bit of code, you can try the link above, 
> but I recommend just asking `Skyslycer` for specific particle configurations in the [HCS support server](https://discord.gg/pcm8kWrdNt). 

### Inventory Specific Actions
These actions only work when used in the inventory configuration.

`SET_FAVORITE` - Set the clicked wrap as a favorite. Only possible on wrap actions.

`SCROLL_FORTH` or `NEXT_PAGE` - Go to the next page or scroll further
- `''` - Yes, just put empty parentheses

`SCROLL_BACK` or `PREVIOUS_PAGE` - Go to the previous page or scroll back
- `''` - Yes, just put empty parentheses _again_

## Format
Generally speaking, the action format looks as follows:
```yaml
actions:
  trigger:
    ACTION_TYPE:
      - 'list of action configurations'
```

As mentioned above, you can use actions on wraps and inventory items.

> **Note**: You don't need to add all possible triggers, you can just remove the triggers you don't need.

Example A: `actions on a wrap`
```yaml
items:
  SOME_COLLECTION:
    1:
      actions:
        # When the wrap is applied
        wrap: 
          MESSAGE:
            - '<red>yo pog yo unwrapped noice'
            - '<yellow>I luv cheese'
        # When the wrap is applied virtually
        wrap-virtual: {}
        # When the wrap is applied physically
        wrap-physical: {}
        # When the wrap is removed
        unwrap: {}
        # When the wrap is removed virtually
        unwrap-virtual: {}
        # When the wrap is removed physically
        unwrap-physical: {}
        # When the wrap is previewed
        preview: {}
        # When the wrapped item is used to hit any entity including players
        hit-any: {}
        # When the wrapped item is used to hit an entity
        hit-entity: {}
        # When the wrapped item is used to hit a player
        hit-player: {}
        # When the player presses any mouse button
        interact: {}
        # When a block is clicked with the left button
        interact-left-block: {}
        # When a block is clicked with the right button
        interact-right-block: {}
        # When nothing is clicked with the left button
        interact-left-air: {}
        # When nothing is clicked with the right button
        interact-right-air: {}
```

Example B: `actions on an inventory item`
```yaml
inventory:
  items:
    1:
      actions:
        # When the item is clicked in any way
        any: 
          UNWRAP:
            - ''
          MESSAGE:
            - 'YOU CLICKED THE <red>SPOOOOOKY <white>BUTTON!!1!!'
        # When the item is clicked using the left mouse button
        left: {}
        # When the item is clicked using the right mouse button
        right: {}
```

Example C: `actions on a physical wrapper`
```yaml
items:
  SOME_COLLECTION:
    cool_wrap:
      id: 'nexo:cool_wrap'
      physical:
        id: 'nexo:cool_wrap_wrapper'
        actions:
          interact-right-air: # This previews the wrap when air is right-clicked with the phyiscal wrappper
            PREVIEW:
            - ''
```