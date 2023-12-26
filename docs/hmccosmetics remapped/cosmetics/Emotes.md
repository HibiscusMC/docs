---
sidebar_position: 5000
---


## `EMOTE` Cosmetics

:::warning

1.19.4 introduces problems with the shader that is used for emotes. Using the shader renders the player's head block improperly. See [here](https://docs.hibiscusmc.com/hmccosmetics%20remapped/FAQ#player-skins--heads-messed-up) on how to remove the shader from your resource pack. 


The backend library for emotes has not been updated. Emotes will not work on 1.20.2+

:::


`EMOTE` Cosmetics are a special type of cosmetic. Emotes are played on your character and shown to other players.

Adding emotes is extremely simple, you simply add the `.bbmodel` file with the emote animation to the `emotes` folder, and then configure it like so:

```yaml
handstand:
  slot: EMOTE
  animation: handstand
```

:::info

If you use ItemsAdder, you must disable `entites.custom-entities.emotes` in the config.yml file, otherwise it will not use the proper shader files.

```yaml
entities:
  max-furniture-vehicles-per-chunk: 30
  allow-removing-old-furnitures_2_3_11: false
  custom-entitites:
    enabled: true
    emotes: false # make sure this is set to false
    interval-rendering-packets-ticks: 1
    optimized-packets: true
```

:::
