---
sidebar_position: 11
---

# Wrap Settings
You can configure how wrapping works in the `wrapping` section of the `config.yml`.

### Rewrap
Rewrapping is the process of wrapping an already wrapped item without unwrapping it first. Some may want this disabled.
- `virtual-enabled` - If virtual rewrapping should be enabled.
- `physical-enabled` - If physical rewrapping should be enabled.

As rewrapping also includes rewrapping a currently wrapped item with the same wrap. This could be unwanted behaviour and can cause loss of physical wrappers. To prevent this, rewrapping of same wraps is disabled by default:
- `same-virtual-enabled` - If virtual rewrapping of the same wrap should be enabled.
- `same-physical-enabled` - If physical rewrapping of the same wrap should be enabled. If enabled can cause loss of physical wrappers when `keep-after-unwrap` is set to false.

## Example A
```yaml
# Settings related to wrapping
wrapping:
  # If wraps should be able to be rewrapped (wrapped again while wrapped)
  rewrap:
    # If rewrapping should be enabled for...
    # ...virtual wrapping
    virtual-enabled: true
    # ...physical wrapping
    physical-enabled: true
    # If the player should be able to rewrap items that are already wrapped with the same wrap for...
    # ...virtual wrapping
    same-virtual-enabled: false
    # ...physical wrapping
    same-physical-enabled: false
``