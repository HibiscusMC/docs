---
sidebar_position: 6000
---

# Menu Item Actions

Menu actions allow for your items to take a form of their own!

## Actions

### Menus

This opens another HMCC menu. 

```yaml
    actions:
      any:
        - "[MENU] main_menu" # You can add -o to the end, ex. "main_menu -o", to ignore permission of the target menu.
```

### Close

This closes the current menu.

```yaml
    actions:
      any:
        - "[CLOSE]"
```

### Player Command

Sends a command as the player who clicked it

```yaml
    actions:
      any:
        - "[PLAYER-COMMAND] say Hi"
```

### Console Command

Sends a command as a console

```yaml
    actions:
      any:
        - "[CONSOLE-COMMAND] say Hi"
```

### Message

Sends a message to the player who clicked it. 

```yaml
    actions:
      any:
        - "[MESSAGE] <#d24c9f>Hello %player_name%!"
```

### Sound

Sends a sound to the player who clicked it. 

```yaml
    actions:
      any:
        - "[SOUND] minecraft:sound.name volume pitch"
```

### Particle

Players a particle at the player who clicked it.

```yaml
    actions:
      any:
        - "[PARTICLE] particle amount x y z" # Particles can be found https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html, xyz are offsets from the player. 
```

### Show

Shows the cosmetics if they are hidden.

```yaml
    actions:
      any:
        - "[SHOW]"
```

### Hide

Hides the cosmetics if they are shown.

```yaml
    actions:
      any:
        - "[HIDE]"
```

### Toggle

Changes between hiding and showing cosmetics.

```yaml
    actions:
      any:
        - "[TOGGLE]"
```


## Examples

### Command on removal of cosmetic

```yaml
    actions:
      on-unequip:
        - "[CONSOLE-COMMAND] say A player removed a cosmetic"
```

### Toggleable Cosmetics

```yaml
  beanie:
    slots:
      - 53
    item:
      material: PAPER
    type: empty
    actions:
	  any:
	    - "[TOGGLE]"
```