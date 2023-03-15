---
sidebar_position: 1
---

# Setup

HMCWraps has no dependencies. The plugin does have optional [hooks](https://docs.hibiscusmc.com/hmcwraps/hooks), which use other plugins, but you do not need anything else installed to use the plugin. 

**NOTE**: If you are still running **ProtocolLib** 4.x.x or lower, please upgrade to 5.x.x as **HMCWraps** only works with the latest version. ProtocolLib should still work **100%**.

## Vanilla Resource Pack

Add the resource pack to your server using server.properties

## ItemsAdder

The plugin has native support for ItemsAdder to replace certain items by the ones ItemsAdder provides.
The plugin supports putting the key (e.g. `itemsadder:tree:apple`) in any `id` field of any item.

## Oraxen

Just like ItemsAdder, HMCWraps has native support for Oraxen to replace items with Oraxen items.
The plugin supports putting the key (e.g. `oraxen:apple`) in any `id` field of y item.

## Post Installation

After installing, we recommend modifying the `message.properties` file to your liking using [MiniMessage Formatting](https://docs.adventure.kyori.net/minimessage/format.html).

Then, you can read the default configs and start adding your wraps!
