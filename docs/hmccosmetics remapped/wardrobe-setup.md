---
sidebar_position: 3
---

# Wardrobe Setup

Setting up a wardrobe is very simple. You can find the config options in `config.yml`:

```yaml
  wardrobes:
    default: # Id of the wardrobe
      npc-location:
        world: "world"
        x: 0
        y: 0
        z: 0
        yaw: 0
        pitch: 0
      viewer-location:
        world: "world"
        x: 5
        y: 0
        z: 5
        yaw: 0
        pitch: 0
      leave-location:
        world: "world"
        x: 5
        y: 5
        z: 5
        yaw: 0
        pitch: 0
```

You can also set the settings in-game with the `/cosmetic setwardrobesettings <wardrobe> <setting>` command.

There are 3 different locations for the wardrobe. 

`npc-location` is where the NPC that wears the cosmetics will spawn, `viewer-location` is where the player will be positioned, and `leave-location` is where the player will be teleported after they press `Shift` to exit the wardrobe.
