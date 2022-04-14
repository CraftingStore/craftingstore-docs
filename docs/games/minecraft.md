#Minecraft: Java Edition

We have a plugin for Minecraft servers. Our plugin has support for Spigot (and most forks, like PaperSpigot), Craftbukkit, Bungeecord, Sponge, and Velocity.

### How to Install the plugin?
The installation will be like any other plugin that you might already have. We assume that you already created a server at our dashboard [ Webstore -> Servers ] and that you have your API token ready (can be found at the servers page). This example would be for Spigot:

1. Download the CraftingStore plugin, you can find it at the "Servers" section in the right top corner.
2. Upload the CraftingStore.jar into the plugins folder, like any other plugin.
3. Restart your server, do not reload. This might break the plugin (and lots of other plugins).
4. The plugin now created a config (/plugins/CraftingStore/config.yml).
5. Go to your console and execute `craftingstore key keyfromdashboard`

When using BungeeCord the command will be `/csb` instead, so it does not interfere with our normal plugin.
