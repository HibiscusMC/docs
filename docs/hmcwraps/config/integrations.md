# Integrations

## [ZAuctionHouse](https://www.spigotmc.org/resources/zauctionhouse.63010/), [AuctionGUI+](https://www.spigotmc.org/resources/auctiongui-1-8-1-21.19015/), [AxAuctions](https://www.spigotmc.org/resources/axauctions-all-in-one-auction-house-plugin.115308/), [AxTrade](https://www.spigotmc.org/resources/axtrade-the-ultimate-trade-plugin.116826/)

Use this integration to blacklist certain wraps from being auctioned or traded. The `enabled` toggle enables for supported auction house plugins and `trade-enabled` enables supported trade plugins.

Below is an example configuration for the auction house integration which enables blacklists for auction house and trade plugins for all virtually wrapped items and the wrap with the UUID `fire_sword`.

**Example A:**
```yml
# Integrations with other plugins
integrations:
  # zAuctionHouse, AuctionGUI+, AxAuctions, AxTrade integration
  auction-house:
    # If the integration should be enabled, this will enable for zAuctionHouse and AuctionGUI+
    enabled: true
    # If the integration should be enabled for trade plugins as well (AxTrade), this also works if the main integration is disabled
    trade-enabled: true
    # If virtually wrapped items should be blacklisted from being listed in the auction house
    blacklist-virtual: true
    # If physically wrapped items should be blacklisted from being listed in the auction house
    blacklist-physical: false
    # Add the UUIDs of the wraps that should be blacklisted from being listed in the auction house
    blacklisted-wraps: 
    - fire_sword
```