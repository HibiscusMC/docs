---
sidebar_position: 2000
---

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