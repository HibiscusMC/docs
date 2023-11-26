---
sidebar_position: 8
---

# Frequent Issues

## My item isn't rotated upright in the preview!

HMCWraps uses the armor stand head for the preview, so you will need to edit the head translation in the model file. You can either do this in Blockbench (Display > Head), or you can add it directly to the model file like so:

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