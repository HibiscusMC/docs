---
sidebar_position: 8
---

# FAQ

## How do I edit the rotation of my item in the preview?

HMCWraps uses the armorstand head for the preview, so you will need to edit the head translation in the model file. You can either do this in Blockbench (Display > Head), or you can add it directly to the model file like so:

```json
  "display": {
    "head": {
      "rotation": [
        0,
        0,
        -135
      ]
    }
  }
  ```