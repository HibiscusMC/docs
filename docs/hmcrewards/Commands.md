---
sidebar_position: 20
---

# Commands

**HMCRewards** is fairly lightweight and only has two commands:

## Reload Command

`/hmcrewards reload` - Reloads the configuration files

## The Queue Command

`/hmcrewards queue <playername> <item/command> <rewardname> [quantity] [-f]` - Queue a reward for a player.

This command has lots of options, so here are several examples of how it can be used:

*Queueing a vanilla piece of paper for a player:*
`/hmcrewards queue Notch item PAPER`

*Queueing an oraxen item for a player:*
`/hmcrewards queue Notch item oraxen:amethyst`

*Queueing a command reward for a player:*
`/hmcrewards queue Notch command example_command`

*Queueing a reward which will ALWAYS try to go to the inventory before being sent to the reward queue GUI:*
`/hmcrewards queue Notch item PAPER -f`

*Queueing multiple items at once:*
`/hmcrewards queue Notch item PAPER 3`

*Queueing multiple items at once using -f to try and send the item to the inventory before being sent to the reward queue GUI:*
`/hmcrewards queue Notch item PAPER 3 -f`

:::warning

Specifying the quantity can ONLY be done on item rewards.

:::