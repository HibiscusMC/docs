---
sidebar_position: 2000
---

## `BACKPACK` Cosmetics
`BACKPACK` Cosmetics work by attaching an armor stand to the player that automatically rotates with them. 

```yaml
backpack:
  slot: BACKPACK
  permission: "hmccosmetics.backpack"
  height: 5
  item:
    material: PAPER
    model-data: 4
    name: "<blue>Backpack"
    amount: 1
```

### First-Person Backpack Cosmetics

:::caution

In 1.20.2, changes in the resource pack has made translations for items not go down as much as they used to. This can result in backpacks being unable to look correct for first person cosmetics. 

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
