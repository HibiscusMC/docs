---
sidebar_position: 6
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

Now, simply add this to your item configuration:
```yaml
    dyeable: true # Enables dyeable item feature. If a cosmetic is applied in a gui, it will open the dye menu. A player can also dye it with /cosemtic dye.
    color: # Sets default color for item
      red: 5
      blue: 100
      green: 230
```
, and you're done!
