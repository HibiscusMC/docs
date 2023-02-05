---
sidebar_position: 10
---

# API

### Adding as dependency

[https://img.shields.io/github/v/release/HibiscusMC/HMCCosmetics](https://repo.hibiscusmc.com/#/)

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
            <version>2.1.2</version>
        </dependency>
```

#### Gradle (Groovy)
```
maven {
    url "https://repo.hibiscusmc.com/releases"
}
```

```
compileOnly "com.hibiscusmc:HMCCosmetics:{version}"
```

#### Gradle (Kotlin)
```
maven {
    url = uri("https://repo.hibiscusmc.com/releases")
}
```

```
compileOnly("com.hibiscusmc:HMCCosmetics:{version}")
```

#### PluginYml

```yaml
depend: [HMCCosmetics]
```

### Events

All events can be found here: https://github.com/HibiscusMC/HMCCosmetics/tree/remapped/common/src/main/java/com/hibiscusmc/hmccosmetics/api

### Cosmetics

You can get a cosmetic with:
```java
Cosmetic cosmetic = Cosmetics.getCosmetic(String id);
```

### CosmeticUsers

You can get a CosmeticUser with:
```java
CosmeticUser user = CosmeticUsers.getUser(UUID playerUnqiueId);
```

:::INFO

This plugin is [Open Source](https://github.com/HibiscusMC/HMCCosmetics) and you can view how every method works. I would always recommend checking the source code to get a better idea of the plugin and how best to use it in yours!

Need help? Join the [Disocrd](https://discord.gg/pcm8kWrdNt)! We would love to have you! 

:::