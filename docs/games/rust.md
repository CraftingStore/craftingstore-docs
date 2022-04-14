#Rust

We have a plugin for the uMod/Oxide mod platform. You can use this plugin to execute commands. We also support RCON.

### How to Install the plugin?
The installation will be like any other plugin that you might already have. We assume that you already created a server for the "Oxide/uMod" type at our dashboard [ Webstore -> Servers ] and that you have your API token ready (can be found at the servers page).

1. Download the CraftingStore plugin, you can find it at the "Servers" section in the right top corner.
2. Upload the CraftingStore.cs into the /oxide/plugins folder, like any other plugin.
3. The plugin now created a config (/oxide/config/CraftingStore.json).
4. Get the token from our servers page put it in the configuration.
5. Restart the server or reload the plugin.

### How to use RCON?
RCON listens on a port, and we can connect to it, and send commands to your server.

1. Add the following to the startup parameters:
```
+rcon.web1
+rcon.ip <your server IP>
+rcon.port <RCON port, any open, usable port is fine>
+rcon.password <A secure password, make sure its long and random>
```
2. Create a server at our dashboard [ Webstore -> Servers ] and select the RCON type.
3. Enter the same information as you did on your Rust server

Assuming that your ports are open, and everything is configured right, it will now allow us to send commands.
