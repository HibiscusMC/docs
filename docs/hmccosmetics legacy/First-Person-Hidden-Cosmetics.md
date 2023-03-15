---
sidebar_position: 99
---

# First-Person Hidden Cosmetics

HMCCosmetics allows you to hide cosmetics in first person by exploiting Minecraft's rendering system. It's quite complicated to explain - so we'll do our best here - but you can always refer to the default resource pack.

## Important Information

- This system is complicated, and it requires significant extra setup compared to standard backpacks.
- This system only works for backpacks, but you shouldn't need it for other cosmetic types anyway.
- This system requires you to use 2 ModelData numbers per backpack.

## Setup

*This setup assumes you already have a standard backpack setup in a resource pack.*

## Step 1 - Copy current backpack

First, you will need to go into your resourcepack and make a duplicate of your current backpack. In the HMCCosmetics pack, we just named this `backpack_thirdperson.json`. After this, just add it to your pack like normal, it will need it's own ModelData number, so we did `8`.

https://imgur.com/a/PCqXO5l

## Step 2 - Add to HMCCosmetics

This new backpack uses the new (as of 1.11.0) `SELF_BACKPACK` type. Naturally, you will not want to display both backpacks in your GUI (or require players to click both), so we've added two new features you will be utilizing: `items.yml` and the `set-cosmetics` action.

Items.yml is simple. It uses the same syntax as any of the menu files, but lets you make items that are not visible in the GUI.

Sample items.yml:

```yaml
# Technically, the name/lore/locked lore doesn't matter since this item won't be visible in the GUI.
1:
  material: PAPER
  name: "<blue>Self Backpack"
  lore:
    - ""
    - "<gray>Enabled: <#6D9DC5>%enabled%"
    - "<gray>Allowed: <#6D9DC5>%allowed%"
  locked-lore:
    - "<red>You do not own this item!"
  amount: 1
  model-data: 8
  type: SELF_BACKPACK
  permission: ""
  id: backpack_self
```

Sample main.yml:

```yaml
  2:
    material: PAPER
    name: "<blue>Backpack"
    lore:
      - ""
      - "<gray>Enabled: <#6D9DC5>%enabled%"
      - "<gray>Allowed: <#6D9DC5>%allowed%"
    locked-lore:
      - "<red>You do not own this item!"
    amount: 1
    model-data: 4
    action:
      any:
        set-cosmetics: backpack_self
    type: BACKPACK
    permission: ""
    id: backpack
```

## Step 3 - Configure your self backpack translations

This is most likely the hardest part of the process. There is no set formula (at least, that we know of), so it involves a lot of trial and error.
You'll need to open the model you are using for your `SELF_BACKPACK` in blockbench and then perform various steps to get it to the right Y position. 

This is pretty similar to what you need to do when making a standard backpack, although this time the backpack is twice as high so you'll need to make it significantly lower. The method that we used for our default assets is moving them below the standard grid in BlockBench so we can do a translation below -80 (max). See the video below:

https://imgur.com/a/R6Bc50T

## Finished!

We understand that this process is quite confusing, and we're here to help. If you have any troubles understanding how to do this, or are stuck, join our [Discord](https://discord.gg/pcm8kWrdNt) to get support!
