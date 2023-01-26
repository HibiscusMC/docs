---
sidebar_position: 5
---

# Tokens

## What are tokens?
Tokens are physical items (like a coin) that can execute a command when redeemed in the tokens menu.

## Creating a token
To create them, head to `tokens.yml` and copy this configuration:
```yaml
  1:
    id: colorful_hat # ID of cosmetic which will appear in the GUI
    material: emerald # Material of the token
    model-data: 1 # CustomModelData number. Optional.
    name: "<green>Colorful hat token"
    commands:
      - "lp user %player% permission set cosmetics.colorful_hat" # Command to run when redeemed.
```

To redeem a token, you can use the **Token Menu**. To access the token menu, use `/cosmetics menu token-menu`.

You can also make modifications to the token GUI in the same place you would edit other GUIs (see [GUI Configuration](https://github.com/HibiscusMC/HMCCosmetics/wiki/GUI-Configuration)).