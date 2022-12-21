---
sidebar_position: 6
---

# ItemSkins Converter
Some people may have used the plugin ItemSkins before HMCWraps was released and decided to move. For those having already configured hundreds of skins, the decision to switch to HMCWraps was probably hard.

But to make it easier to switch, we have included an ItemSkins skin to HMCWraps wrap converter. Learn how to use it here.

## File Structure
### Wraps
As ItemSkins only does one skin per file and HMCWraps provides the possibility for multiple wraps in a single WrapFile, ItemSkins skin files have to be grouped using folders.

In order to create a Wrap File called `fire_wraps.yml`, put all your skins you want to convert into that file into a folder called `fire_wraps`.
This folder should be created in `plugins/HMCWraps/convert/`. 

When executing the converter (_more on that later_), the plugin will combine all skin files located in folders in the `convert`
folder into Wrap Files called `foldername.yml` with `foldername` being the name of the folder. 

That Wrap File will then be saved in `plugins/HMCWraps/wraps/generated/`.
In our example, the file would end up as `plugins/HMCWraps/wraps/generated/fire_wraps.yml`.

### Collections
But what about skins which are targeted to multiple items? Well, HMCWraps already has collections and Collection Files, which are implemented in the converter.

If the converter notices that the skin is targeted to multiple items, it will automatically assign an enabled collection (if there is any with the same contents), 
or create a Collection File in `plugins/HMCWraps/collections/generated/`.

A newly generated Collection File would look something like this: `plugins/HMCWraps/collections/generated/collection_1.yml` containing
at least one collection (depends on how many the converter can reuse/has to create) which would be called something like this: `GENERATED_COLLECTION_1`.

### Failsafe
If you accidentally run the converter twice with the same contents, and you changed something in the folder without renaming it, don't worry, the plugin will increment a small counter at the end of the file!

Example: 
- `fire_wraps.yml` already exists
- `fire_wraps_2.yml` created by the converter to not override the old one

## Execution
Running the HMCWraps converter is very simple. You can run it from the console or as a player.

#### Steps
- run `/hmcwraps convert`, and now please check if every folder is filled with files you want
- run `/hmcwraps convert confirm`, and the converter will run

The console will tell you what folder and file is currently being converted, but this process shouldn't take long.

It's going to tell you if everything went smoothly or not. If you get an error message saying that some or all files weren't converted properly,
it's recommended to delete **ALL** converted files which have been successfully converted in this run (not all runs).

Then please check the config for any exceptions or stack traces and if you don't understand them yourself or can't fix them, please join our [Discord server](https://discord.gg/pcm8kWrdNt) and ask the support members.
It's very helpful if you provide us with the file where the converter stopped converting (check the console) and the latest log to identify any other errors.

## Limitations
As ItemSkins _isn't_ open source, and we only have limited access to ItemSkins skins, the converter may not convert _everything_.
If that is the case, and you are 100% sure this feature is implemented in HMCWraps, you can contact the developer in our [Discord server](https://discord.gg/pcm8kWrdNt) and provide them with your ItemSkins skin and the entry you want converted.

Another thing is that HMCWraps only supports `locked-name` and `locked-lore` for the item in the wraps inventory when the player doesn't have the permission for the wrap, 
while ItemSkins supports a whole item. Thus, only those two aspects are converted.