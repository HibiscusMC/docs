---
sidebar_position: 2
---

# Cosmetic Types

HMCCosmetics has **seven** types of cosmetics: `HELMET`, `BACKPACK`, `CHESTPLATE`, `LEGGINGS`, `BOOTS`, `OFFHAND`, and `BALLOON`

## `HELMET` Cosmetics

`HELMET` Cosmetics work by placing a "fake" cosmetic inside of the player's head slot. This means that your players can still place an actual armor piece (like a diamond helmet) inside of their head slot, but the cosmetic will show up instead. 

```yaml
beanie:
  slot: HELMET
  permission: "hmccosmetics.beanie"
  dyeable: true
  item:
    material: LEATHER_HORSE_ARMOR
    model-data: 2
    name: "<rainbow>Beanie Hat</rainbow>"
    lore:
      - ""
      - "<gray>A basic beanie!"
    amount: 1
```

## `BACKPACK` Cosmetics
`BACKPACK` Cosmetics work by attaching an armor stand to the player that automatically rotates with them. 

```yaml
backpack:
  slot: BACKPACK
  permission: "hmccosmetics.backpack"
  show-lead: true
  item:
    material: PAPER
    model-data: 4
    name: "<blue>Backpack"
    amount: 1
```

### First-Person Backpack Cosmetics

:::caution

This section is currently work-in-progress, and will be completed as soon as possible.

:::

First-person backpack cosmetics are an extension of `BACKPACK` cosmetics. They work by rendering two different backpacks - one for the viewers (everyone besides you), and one for the wearer (you).

Cosmetic Configuration:

```yaml
backpack:
  slot: BACKPACK
  permission: "hmccosmetics.backpack"
  item:
    material: PAPER
    model-data: 4
    name: "<blue>Backpack"
    amount: 1
  firstperson-item: # This is a second backpack you need to configure
    material: PAPER
    model-data: 8
    name: "<white>Backpack"
    amount: 1
```

For this special backpack type, you need to create a copy of your current backpack model and assign it a secondary model number, or, if you use Oraxen/ItemsAdder, you would just create a new item.

Following that, you need to go in Blockbench, and similarly to backpacks, you must shift it down for the head translation. However, due to how these backpacks work, you must shift them significantly lower.

Sometimes, using only the translation settings, your model won't be able to go as low as you need it to. If that is the case, you can lower your model using the following trick:

https://imgur.com/a/R6Bc50T



### ModelEngine Backpack Cosmetics

Similar to the Balloons Feature, you can also use the `model` key to create a ModelEngine Backpack.
Example:
```yaml
meg_backpack:
  slot: BACKPACK
  permission: "hmccosmetics.meg_backpack"
  show-lead: true
  model: kite
```

:::caution

Keep in mind that if you have an item set for the cosmetic, you will see both the item and the ModelEngine entity.
Because of this, we recommend and defining the item in the menus file rather than setting one here.

:::

## `CHESTPLATE`, `LEGGINGS`, and `BOOTS` Cosmetics

These cosmetics function the same as a hat, so you can use them for cosmetic armor sets.

```yaml
chestplate:
  slot: CHESTPLATE
  permission: "hmccosmetics.chestplate"
  item:
    material: DIAMOND_CHESTPLATE
    name: "<blue>Chestplate"
    amount: 1
```
```yaml
pants:
  slot: LEGGINGS
  permission: "hmccosmetics.pants"
  item:
    material: DIAMOND_LEGGINGS
    name: "<blue>Pants"
    amount: 1
```
```yaml
boots:
  slot: BOOTS
  permission: "hmccosmetics.boots"
  item:
    material: DIAMOND_BOOTS
    name: "<blue>Boots"
    amount: 1
```

## `OFFHAND` Cosmetics
`OFFHAND` Cosmetics are items that go in the player's offhand slot. When they switch to a different item (from the survival inventory or with the F key), it is automatically unapplied temporarily. When they click F again, the cosmetic comes back!

```yaml
lantern_cosmetic:
  slot: OFFHAND
  permission: "hmccosmetics.lantern_cosmetic"
  item:
    material: PAPER
    model-data: 5
    name: "<blue>Lantern Cosmetic"
    amount: 1
```

## `BALLOON` Cosmetics

`BALLOON` Cosmetics are ModelEngine models which are attached to a leash that follows you around.

```yaml
kite:
  slot: BALLOON
  permission: "hmccosmetics.kite"
  model: kite
  item: # Because this relies on a model, the item here is only useful if you add it to a GUI. 
    material: PAPER
    model-data: 7
    name: "<blue>Kite"
    amount: 1
```

:::info

If you do *not* want to use ModelEngine for a balloon, you can remove the `model` line from the balloon cosmetic configuration, which will
automatically set the balloon to be an item type balloon. Item type balloons are more limited than ModelEngine balloons, because they must
conform to the Java Block/Item limitations, but their physics may look better.

:::

## `MAINHAND` Cosmetics

`MAINHAND` Cosmetics items that go on your main hand. This is a cosmetic **NOT** recommend, but is still implemented if you so choose. This cosmetic has problems with being visually removed if a player moves to fast along there hotbar. 

```yaml
handypack:
  slot: MAINHAND
  permission: "hmccosmetics.handy"
  item: 
    material: PAPER
    model-data: 7
    name: "<blue>Handy Pack"
    amount: 1
```

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
