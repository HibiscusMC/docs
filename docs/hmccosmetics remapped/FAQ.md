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

## I can't see my cosmetics!

Make sure you haven't accidentally ran `/cosmetic hide` - you can type `/cosmetic show` to make cosmetics reappear.

---

## Emotes are not emoting?

Emotes now working can come from a variety of angles, such as forgetting to equip an emote to issues with our library. Be sure to read the error message to get a better understanding of the problem.

### NoSuchElementException Error

This can occur when your server is in offline mode and a player attempts to use a emote. See below on how to fix this.

### Offline Mode

Emotes do completely work in offline mode due to the library we use. To fix this, install [SkinsRestorer](https://www.spigotmc.org/resources/2124/) so players have skin the plugin can use.

---

## Player Skins / Heads Messed Up

This is because of the shaders file provided in the plugin. Currently, these shaders do not work 1.19.4+ due to changes to Minecraft shaders. In order to fix this, you need to delete the 3 relevant files. 
It should be in a file location similar to `assets/shaders/core/rendertype_entity_translucent` (It may vary depending on your resource pack plugin). 

---

## Are CosmeticCore / MCCosmetic Configurations Compatible with HMCC?

No, CosmeticCore and MCCosmetic configurations are not compatible with HMCC. You will need to convert them into HMCC format. You can find a converter on the support discord server to help you convert files. 

---

## My backpack is in the wrong position / above my head

Some models you purchase may not include translations specifically for cosmetic plugins. Because the backpack isn't actually mounted to your player and rather is connected to an armorstand, you need to translate the model down.

To do this, install [Blockbench](https://www.blockbench.net), and then open your model. At the top right, you should see a "Display" tab. Once there, click on the head slot and then adjust the Y of the backpack to be much lower, usually near your players feet. Rinse and repeat until it is working properly.

You can also check the included cosmetics for a point of reference.

---

## My Cosmetic turned into a real item!

This is because you have entered the creative mode. Creative modes accept anything a client says it has, meaning, when HMCC sends fake items, creative mode turns them into real items. This only affects `HATS`, `CHESTPLATE`, `LEGGINGS`, and `BOOTS` cosmetics. 

You can attempt to fix this by turning `cosmetic-settings.destroy-loose-cosmetics` to true, which will attempt to destroy these items when they are found. 
