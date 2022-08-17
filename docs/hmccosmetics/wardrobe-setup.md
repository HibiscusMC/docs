---
sidebar_position: 4
---

# Wardrobe Setup

Setting up the wardrobe is very simple. You can find the config options in `config.yml`:

```yaml
  wardrobe-location:
    world: "World"
    x: 0
    y: 0
    z: 0
    yaw: 0
    pitch: 0
  viewer-location:
    world: "World"
    x: 5
    y: 0
    z: 5
    yaw: 0
    pitch: 0
  leave-location:
    world: "World"
    x: 5
    y: 5
    z: 5
    yaw: 0
    pitch: 0
```
There are 3 different locations for the wardrobe. 

`wardrobe-location` is where the NPC that wears the cosmetics will spawn, `viewer-location` is where the player will be positioned, and `leave-location` is where the player will be teleported after they press `Shift` to exit the wardrobe.