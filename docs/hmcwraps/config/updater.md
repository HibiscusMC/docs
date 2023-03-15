---
sidebar_position: 9
---

# Updater
The plugin includes an automatic update checker to remind you of updating the plugin to receive the latest features and fixes.

## Config
The updater can be configured too:

- `enabled` - If it should check at all.
- `frequency` - How often it should check (`3h`, `1d`, `10m`)
- `platform` - On what platform it should check for updates (`POLYMART` or `SPIGOT_MC`)

### Example
```yaml
# The version checker configuration
updater:
  # If the version checker should be enabled
  enabled: true
  # How often the version checker should check for updates
  frequency: '3h'
  # Where the version checker should check for updates (POLYMART, SPIGOT_MC)
  platform: 'POLYMART'
  ```