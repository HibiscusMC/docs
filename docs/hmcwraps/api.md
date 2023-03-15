---
sidebar_position: 7
---

# Developer API
If you are a developer and want to create an addon or extension, you can use the API provided by HMCWraps.
The most useful source of information are the [JavaDocs](https://hibiscusmc.github.io/HMCWraps/), but you can just ask the developer in our [Discord server](https://discord.gg/pcm8kWrdNt). 

## Build Tool
### Gradle Kotlin
```groovy
repositories {
    maven("https://repo.hibiscusmc.com/releases/")
}

dependencies {
    compile("de.skyslycer.hmcwraps:api:1.0.0")
}
```

### Gradle Groovy
```groovy
repositories {
    maven {
        url "https://repo.hibiscusmc.com/releases/"
    }
}

dependencies {
    compile "de.skyslycer.hmcwraps:api:1.0.0"
}
```

### Maven
```xml
<repositories>
  <repository>
    <name>SkyRepo</name>
    <url>https://repo.hibiscusmc.com/releases/</url>
  </repository>  
</repositories>

<dependencies>
  <dependency>
    <groupId>de.skyslycer.hmcwraps</groupId>
    <artifactId>api</artifactId>
    <version>1.0.0</version>
  </dependency>
</dependencies>
```

## Usage
### Getting the plugin instance
```java
if (Bukkit.getPluginManager().isPluginEnabled("HMCWraps")) {
    var wraps = (HMCWraps) Bukkit.getPluginManager().getPlugin(HMCWraps.class);
}
```

### Wrapping Items
```java
var wrap = wraps.getWraps().get("some_wrap_uuid");
var newItem = wraps.getWrapper().setWrap(wrap, item, false, player, true);
```
This wraps the `item` with the `wrap` with the uuid `some_wrap_uuid` virtually and gives the physical wrapper back if there was one applied.
> **Note**: The method returns an `ItemStack`. The plugin does not automatically apply the wrap to the item, you have to replace the item with the returned item yourself.

### Unwrapping Items
```java
var newItem = wraps.getWrapper().removeWrap(item, player, true);
```
This unwraps the `item` and gives the physical wrapper back if there was one applied.
> **Note**: Just like wrapping, you have to replace the item by the returned item yourself.

### Getting the Wrap of an Item
```java
var wrap = wraps.getWrapper().getWrap(item);
```
This gets the current wrap or `null` if the item isn't wrapped.

## Events
There are multiple events you can listen to, change values and cancel to your liking:
- [`ItemPreviewEvent`](https://hibiscusmc.github.io/HMCWraps/-h-m-c-wraps%20-a-p-i/de.skyslycer.hmcwraps.events/-item-preview-event/index.html) - When a wrap is previewed
- [`ItemWrapEvent`](https://hibiscusmc.github.io/HMCWraps/-h-m-c-wraps%20-a-p-i/de.skyslycer.hmcwraps.events/-item-wrap-event/index.html) - When an item is wrapped
- [`ItemUnwrapEvent`](https://hibiscusmc.github.io/HMCWraps/-h-m-c-wraps%20-a-p-i/de.skyslycer.hmcwraps.events/-item-unwrap-event/index.html) - When an item is unwrapped

### Listening
Example:
```java
public class ItemWrapListener implements Listener {
    
    @EventHandler
    public void onItemWrap(ItemWrapEvent event) {
        event.setCancelled(true);
    }
    
}

public class SomePlugin extends JavaPlugin {
    
    public void onEnable() {
        Bukkit.getPluginManager().registerEvents(new ItemWrapListener());
    }

}
```