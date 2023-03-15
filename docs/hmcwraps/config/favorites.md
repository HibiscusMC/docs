---
sidebar_position: 7
---

# Favorites
Favorites are a new system in HMCWraps which lets players select a wrap and the plugin will automatically apply that wrap when the player gets a new item that can be wrapped with one of the favorite wraps.

## Config
```yaml
# Store a players preference set using actions (SET_FAVORITE) and apply it on pick up and inventory move
# This feature shouldn't do anything if you don't use the action, but if you have and don't want it anymore, disable this again
favorites:
  # If the feature should be enabled
  enabled: false
  ```

## Usage
To set a wrap as a favorite, simply add the action `SET_FAVORITE` into the `actions` part of the [GUI Configuration](https://docs.hibiscusmc.com/hmcwraps/config/gui).

To clear all favorites, run the `CLEAR_FAVORITES` action.

All actions can be found here: [Actions](https://docs.hibiscusmc.com/hmcwraps/config/actions)