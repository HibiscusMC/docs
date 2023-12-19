---
sidebar_position: 10
---

# Preview Settings
You can configure how your preview looks in the `preview` section of the `config.yml`.

### Attributes
- `type` - The type of the preview. Can be `HAND` or `FLOATING`.
- `duration` - How long the preview should be displayed.
- `rotation` - Rotation per tick.
- `sneak-cancel` - If the preview should be cancelled when the player sneaks and if the message should be sent as an action bar.
- `bobbing` - How the preview should bob up and down.

## Example A
```yaml
# Preview settings
preview:
  # The type of the preview, either 'FLOATING' or 'HAND', floating being the item turning in the air and
  # item being the players item in hand turning into the wrap temporarily.
  # When using 'HAND', rotation and bobbing will be ignored. (The preview item is client-side only)
  type: 'FLOATING'
  # Duration of the preview in seconds
  duration: 5
  # Rotation per tick (50ms)
  rotation: 5
  # Sneak to cancel preview settings
  sneak-cancel:
    # If the preview should be cancelled when sneaking
    enabled: true
    # If the configured message should be sent as an action bar while previewing
    action-bar: true
  # Lets the preview item move up and down
  bobbing:
    # If the item should bob while previewing
    enabled: true
    # How fast it should bob up and down
    speed: 7
    # How far it should bob up and down
    intensity: 0.25
```