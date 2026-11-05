# Plugin won't start on 1.7 / 1.8

Our plugin requires the Google GSON library before it can start. Versions prior 1.8.3 do not have this.

The error that you might encounter will look like:

```
java.lang.NoClassDefFoundError: com/google/gson/GsonBuilder
```

To make the plugin work on this version, install this plugin as well ([click here!](https://www.spigotmc.org/resources/gson-for-1-8-3-or-older.30852/))