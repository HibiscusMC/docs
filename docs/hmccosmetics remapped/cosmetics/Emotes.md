---
sidebar_position: 5000
---


## `EMOTE` Cosmetics

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