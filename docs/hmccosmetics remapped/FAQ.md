---
sidebar_position: 9
---

# FAQ

## How do I make my cosmetics dyeable?

Making cosmetics dyeable is relatively simple, but it requires some extra steps in blockbench & your resource pack.

---

### Step 1: Blockbench setup

Start by opening your model in Blockbench. You will need to make sure the tintable part of the cosmetic is using a white or gray color.
Next, you need to enable the `tint` option for each face that will be colorable. 

I have created a simple gif to show how you enable this option: https://imgur.com/a/XB13c8O

### Step 2: Resource Pack Setup

Make sure to use a tintable item (like `POTION`, `LEATHER_HORSE_ARMOR`, `TIPPED_ARROW`, etc) for dyeable items. If you use `PAPER`, *it will not work.*

### Step 3: HMCCosmetics Setup

Now, simply add this to your cosmetic configuration:
```yaml
    dyeable: true
```
, and you're done!

---

## Emotes are not emoting?

Emotes now working can come from a variety of angles, such as forgetting to equip an emote to issues with our library. Be sure to read the error message to get a better understanding of the problem.

### NoSuchElementException Error

This can occur when your server is in offline mode and a player attempts to use a emote. See below on how to fix this.

### Offline Mode

Emotes do completely work in offline mode due to the library we use. To fix this, install [SkinsRestorer](https://www.spigotmc.org/resources/2124/) so players have skin the plugin can use. 
