---
sidebar_position: 200
---

# Location Serializer

This covers the format used to create locations in HMCCosmetics.

## Example

### Generic Example

```yaml
world: "world" # This defines the world. If the world does not exist then it can't create the location
x: 0
y: 0
z: 0
yaw: 0
pitch: 0
```

### Wardrobe Example

```yaml
  wardrobes:
    default:
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