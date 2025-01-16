---
sidebar_position: 3000
---

## `BALLOON` Cosmetics

`BALLOON` Cosmetics are ModelEngine models which are attached to a leash that follows you around.

```yaml
kite:
  slot: BALLOON
  permission: "hmccosmetics.kite"
  model: kite
  show-lead: true # If this is not here, it'll default to true. 
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

