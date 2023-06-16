# Developer API

### Getting the API instance
```java
HMCLeavesAPI.getInstance();
```

### BlockData

There are currently three types of [BlockData](https://github.com/HibiscusMC/HMCLeaves/blob/master/src/main/java/io/github/fisher2911/hmcleaves/data/BlockData.java): 
* [LeafData](https://github.com/HibiscusMC/HMCLeaves/blob/master/src/main/java/io/github/fisher2911/hmcleaves/data/LeafData.java)
* [LogData](https://github.com/HibiscusMC/HMCLeaves/blob/master/src/main/java/io/github/fisher2911/hmcleaves/data/LogData.java)
* [SaplingData](https://github.com/HibiscusMC/HMCLeaves/blob/master/src/main/java/io/github/fisher2911/hmcleaves/data/SaplingData.java)

These classes are all immutable.

It is advised to never create these yourself unless you are registering new items. Instead, use
the API methods shown below to get the data.

---
From this point on, it is assumed that the `HMCLeavesAPI` instance was declared as `api`.
All API methods are annotated with [Jetbrains Annotations](https://www.jetbrains.com/help/idea/annotating-source-code.html#contract-annotations)

### Interacting with BlockData in the World:

[HMCLeavesApi#getBlockDataAt](https://github.com/HibiscusMC/HMCLeaves/blob/ee6ab7de5a2fd0f996b38fce31c463d2f05c9f40/src/main/java/io/github/fisher2911/hmcleaves/api/HMCLeavesAPI.java#L60)

Example Usage:
```java
final Location location = new Location(Bukkit.getWorld("world"), 0, 0, 0);
final BlockData blockData = api.getBlockDataAt(location);
```
This returns the BlockData at a location.

[HMCLeavesAPI#isCustomBlock](https://github.com/HibiscusMC/HMCLeaves/blob/ee6ab7de5a2fd0f996b38fce31c463d2f05c9f40/src/main/java/io/github/fisher2911/hmcleaves/api/HMCLeavesAPI.java#LL69C20-L69C33)

Example Usage:
```java
final Location location = new Location(Bukkit.getWorld("world"), 0, 0, 0);
final boolean isCustomBlock = api.isCustomBlock(location);
```
This returns whether the block at a location has custom data.

[HMCLeavesAPI#setCustomBlock](https://github.com/HibiscusMC/HMCLeaves/blob/ee6ab7de5a2fd0f996b38fce31c463d2f05c9f40/src/main/java/io/github/fisher2911/hmcleaves/api/HMCLeavesAPI.java#LL82C20-L82C34)

Example Usage:
```java
final Location location = new Location(Bukkit.getWorld("world"), 0, 0, 0);
final String blockId = "my_custom_block";
final BlockData blockData = api.setCustomBlock(location, blockId, true);
```
This sets the block at a location to a custom block. The parameter `setBlockInWorld` should almost always be set to
true, or else the data in the world and stored by HMCLeaves may be incompatible. This returns false if the BlockData 
was not found, and true if it was and the block was set.

[HMCLeavesAPI#removeBlockDataAt](https://github.com/HibiscusMC/HMCLeaves/blob/ee6ab7de5a2fd0f996b38fce31c463d2f05c9f40/src/main/java/io/github/fisher2911/hmcleaves/api/HMCLeavesAPI.java#LL101C22-L101C39)

Example Usage:
```java
final Location location = new Location(Bukkit.getWorld("world"), 0, 0, 0);
final BlockData blockData = api.removeBlockDataAt(location, true);
```
This removes the block data at a location. The parameter `setBlockInWorld` should almost always be set to
true, or else the data in the world and stored by HMCLeaves may be incompatible. This returns true if the block was 
able to be removed and was in the world, and false if it was not.
