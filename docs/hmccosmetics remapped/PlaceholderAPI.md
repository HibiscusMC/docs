---
sidebar_position: 7000
---

# PlaceholderAPI

`%hmccosmetics_using_<id>%` - Returns `true` or `false` depending on if the player is using that cosmetic or not. `<id>` = The ID of the cosmetic in your configuration.

`%hmccosmetics_current_<type>_<data>%` - Returns the current cosmetic the player is using. `<type>` = `HELMET`, `BACKPACK`, `OFFHAND`, `CHESTPLATE`, `LEGGINGS`, `BOOTS`. `<data>` can be `material`, `custommodeldata`, `name`, `lore` or `permission`.

`%hmccosmetics_unlocked_<id>%` - Returns a true or false if a user can equip that cosmetic.

`%hmccosmetics_equipped_<id>%` - Returns `true` or `false` depending if a player has a certain cosmetic equipped.  

`%hmccosmetics_equipped_<slot>%` - Returns `true` or `false` depending if a player has a cosmetic equipped in a slot

`%hmccosmetics_amount_<slot>%` - Returns the amount of cosmetics in a slot. Not specifying a slot will return the total amount of all cosmetics. 

`%hmccosmetics_amount_<slot>_unlocked%` - Returns the amount of cosmetics a player has unlocked in a slot. 

`%hmccosmetics_wardrobe-enabled%` - Returns if the player is currently inside of the wardrobe
