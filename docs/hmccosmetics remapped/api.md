---
sidebar_position: 10
---

# API


:::info

This plugin is [Open Source](https://github.com/HibiscusMC/HMCCosmetics) and you can view how every method works. I would always recommend checking the source code to get a better idea of the plugin and how best to use it in yours!

The repository can be found [here](https://repo.hibiscusmc.com/#/)

Need help? Join the [Discord](https://discord.gg/pcm8kWrdNt)! We would love to have you! 

:::

### Adding as dependency
 
![Image Sheild](https://img.shields.io/github/v/release/HibiscusMC/HMCCosmetics)

#### Maven
```xml
        <repository>
            <id>hmc-repo-releases</id>
            <name>HibiscusMC Repository</name>
            <url>https://repo.hibiscusmc.com/releases</url>
        </repository>
```

```xml
        <dependency>
            <groupId>com.hibiscusmc</groupId>
            <artifactId>HMCCosmetics</artifactId>
            <version>{version}</version>
        </dependency>
```

#### Gradle (Groovy)
```gradle
maven {
    url "https://repo.hibiscusmc.com/releases"
}
```

```gradle
compileOnly "com.hibiscusmc:HMCCosmetics:{version}"
```

#### Gradle (Kotlin)
```kts
maven {
    url = uri("https://repo.hibiscusmc.com/releases")
}
```

```kts
compileOnly("com.hibiscusmc:HMCCosmetics:{version}")
```

#### PluginYml

```yaml
depend: [HMCCosmetics]
```

### Events

All events can be found [here](https://github.com/HibiscusMC/HMCCosmetics/tree/remapped/common/src/main/java/com/hibiscusmc/hmccosmetics/api/events).

### Cosmetics

You can get a cosmetic with:
```java
Cosmetic cosmetic = HMCCosmeticsAPI.getCosmetic(id);
```

### Cosmetic User

You can get a CosmeticUser with:
```java
CosmeticUser user = HMCCosmeticsAPI.getUser(playerUnqiueId);
```
