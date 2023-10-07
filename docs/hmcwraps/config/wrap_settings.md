---
sidebar_position: 11
---

# Wrap Settings
You can configure how wrapping works in the `wrapping` section of the `config.yml`.

### Rewrap
Rewrapping is the process of wrapping an already wrapped item without unwrapping it first. Some may want this disabled.
- `virtual-enabled` - If virtual rewrapping should be enabled.
- `physical-enabled` - If physical rewrapping should be enabled.

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
``