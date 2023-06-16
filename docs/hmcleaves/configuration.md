#Configuration

There are three different configuration sections:
* leaves
* logs
* saplings

The leaves and the saplings both have a key called `model-path`, which is used
if you are using a custom model for the block and are using Oraxen to generate a resource pack for your server.

### Leaves Section
Example:
```yaml
leaves:
  # the id for the leaves
  "test_leaves":
    # whether the leaves should be persistent in the world
    world-persistence: false
    # the material of the leaves in the world, this is not sent to the client
    # it must be a type of leaf
    leaf-material: OAK_LEAVES
    # the material of the item in the hand if not using an item hook
    material: PAPER
    # the model data of the item in the hand if not using an item hook
    model-data: 1
    # the name of the item in the hand if not using an item hook
    name: "&Test Leaves"
    # the lore of the item in the hand if not using an item hook
    lore:
      - "&aLine 1"
      - "&bLine 2"
    # the state id determines the distance and persistence of the leaves
    # sent to the client
    state-id: 1
    # the id of the sapling that drops from the leaves
    sapling: test_sapling
    # the id of the leaves that drop when shearing, usually should be the same as the id of the leaves
    leaf-drop-replacement: test_leaves
    # the model path as described above
    model-path: "blocks/leaves/test_leaves"
```

### Logs Section
Example:
```yaml
logs:
    # the id for the logs
  test_log:
    # the material of the log in the world, this is not sent to the client
    # this has to be a log
    log-material: OAK_LOG
    # the material of the stripped log in the world, this is not sent to the client
    # this has to be a stripped log
    stripped-log-material: STRIPPED_OAK_LOG
    # the material of the item in the hand if not using an item hook
    material: PAPER
    # the model data of the item in the hand if not using an item hook
    model-data: 2
    # the name of the item in the hand if not using an item hook
    name: "&5Test Log"
    # the lore of the item in the hand if not using an item hook
    lore:
      - "&aLine 1"
    # the instrument of the log if not using a block from another plugin
    instrument: BANJO
    # the note of the log if not using a block from another plugin
    note: 2
    # the instrument of the stripped log if not using a block from another plugin
    stripped-instrument: BANJO
    # the note of the stripped log if not using a block from another plugin
    stripped-note: 3
```

### Saplings Section
It is recommended to use other sapling mechanics like [Oraxen's Sapling Mechanic](https://docs.oraxen.com/mechanics/stringblock-mechanic/sapling-mechanic)

Example:
```yaml
saplings:
  # the id for the sapling
  test_sapling:
    # the material of the sapling in the world, this is not sent to the client
    # this has to be a sapling
    sapling-material: OAK_SAPLING
    # the material of the item in the hand if not using an item hook
    material: PAPER
    # the model data of the item in the hand if not using an item hook
    model-data: 3
    # the name of the item in the hand if not using an item hook
    name: "&6Test Sapling"
    # the lore of the item in the hand if not using an item hook
    lore:
      - "&aLine 1"
    # the stage of the sapling if not using a block from another plugin
    stage: 1
    # a random schematic file is chosen from the list when the sapling grows
    # these schematics must be in the HMCLeaves/schematics folder
    schematic-files:
      - "test.schem"
      - "test2.schem"
    # if the schematic should be randomly rotated when pasted
    random-paste-rotation: true
    # the model path as described above
    model-path: "blocks/saplings/test_sapling"
```

### Other Options

```yaml
# if this is enabled, world-persistence will be ignored if placing leaves
# against any block that will cause the leaf to have a distance less than 7
only-follow-world-persistence-if-connected-to-log: true
# if the world whitelist should be used
use-world-whitelist: true
# the worlds that custom leaves are enabled in
whitelisted-worlds:
  - "world"
```