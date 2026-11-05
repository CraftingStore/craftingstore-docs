# How to create a server

CraftingStore uses servers (API Tokens) to communicate with the plugin. This guide will help you with creating a new server.

1\. Open the dashboard at CraftingStore.net ([click](https://dash.craftingstore.net/admin))  
2\. Click \[ Webstore -&gt; servers \] in the sidebar of the panel.   
3\. Click "New server" at the right top.   
4\. Enter a name, and select the desired plugin version.   
5\. Click save. You will now get an API key. You can enter this API key into the plugin's config.

**Connection types:**  
\- CraftingStore plugin: If you use our plugin for Bukkit, Craftbukkit, Spigot, BungeeCord, Sponge, etc. Use this option.  
\- RCON: If you want to use the RCON protocol, use this.   
\- Database: Insert/update a record in your own database.  
  
**CraftingStore Plugin:**  
The plugin is our Java plugin, you download and install the plugin like any other. Our plugin has support for Bukkit, Spigot, BungeeCord, and Sponge.

**RCON:**  
RCON (remote control administration) is a protocol used by many "source" games like CS:GO, TeamFortress and many others. You can supply an IP and port and we will send the commands.  
  
**Database:**  
The database mode will allow you to enter your own query. We will run this SQL query on your MySQL server. You can, for example, enter this:  
INSERT INTO `payments`(`name`) VALUES ('{player}')  
  
You have to enter this command at the "package", in the command box.   
Note: We will escape all special characters in the names to prevent SQL injections.