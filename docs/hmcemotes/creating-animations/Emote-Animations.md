---
sidebar_position: 1
---

# Emote Animations

Creating animations for emotes is relatively simple.

## Step 1: Install HMCEmotes Blockbench Plugin

To help you with creating emotes, we have made a blockbench plugin. You can download this from our [Github Releases Page](https://github.com/HibiscusMC/animated-java)

After you have downloaded the plugin, you can drag `hmcemotes.js` right into Blockbench. You will be shown a prompt that looks like this:
![Image](https://i.ibb.co/CVkcZH8/image-2022-04-03-094415.png)

Make sure to click OK so the plugin can install.

## Step 2: Load Emote Player

Next, you will be opening the Animated Java model type and then clicking "Create Player Model". This will instantly create a model with the correct settings.

![GIF](https://s7.gifyu.com/images/ea.gif)

> DO NOT MODIFY THE NAMES OF THE BONES IN THE PLAYER MODEL IF YOU ARE MAKING AN EMOTE! This WILL break the emote.

## Step 3: Export

We've designed this emote system so it can be expanded into a full animations system over time, which means that the export settings are somewhat complicated.

To start exporting, click "HMCEmotes" in the top left, and then click "Settings". This will open a box full of various options.

### Project Name

The first option is the Project Name. You can set this to anything, I will be doing `player`.

### Rig Item

Next is the Rig Item. This is an option for a future update - you can leave it as is.

### "Rig Models Export Folder" and "Rig Item Predicate Folder"

These are not optional currently, but also aren't useful until we release a future update. You will need to set these to a valid resource pack directory.

Finally, you can scroll to the bottom and click "HMCEmotes Animation". Here, you will set the Output JSON location. This is the JSON file that will contain all the important data for your emote.|

## Step 4: Add animation JSON to HMCEmotes Plugin Folder

Now that you have exported your animation, you can drag it into the `animations` folder inside of the `HMCEmotes` plugin folder.

## Step 5: Finished!

You have successfully imported a player animation into HMCEmotes.