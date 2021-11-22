#How to install the plugin?

##### Minecraft: Java Edition - Spigot, Bukkit, Sponge, and BungeeCord

Our plugin works on Spigot, Craftbukkit, BungeeCord, Sponge, and Velocity. It will also work on some Spigot forks, like PaperSpigot. This guide will help you to set-up the plugin on Spigot and Craftbukkit.

1. Create a new server ([click for guide](/general/how-to-create-a-server))
2. Download the CraftingStore plugin, you can find it at the "Servers" section in the right top corner.
3. Upload the CraftingStore.jar into the plugins folder, like any other plugin. (/plugins folder)
4. Restart your server, do not reload. This might break the plugin (and lots of other plugins).
5. The plugin now created a config (/plugins/CraftingStore/config.yml).
6. Copy the API key created in step 1, and copy &amp; paste it into the config.yml after the "api key" section. You can also use the command "/craftingstore key YOURKEY" to do so.
7. Restart your server (or reload the plugin by using /craftingstore reload, this is not needed if the command was used)

  
You are now ready to accept donations!

- - - - - -

##### Minecraft: Bedrock / Pocket Edition

For Minecraft bedrock edition, you can use RCON to accept donations on your server. We do not (yet) have the /buy menu in this version, just command processing. This guide is for Pocketmine-MP, but it will work on every piece of software that supports RCON.

1. Enable RCON on your server, to do this, first open your "server.properties" in the first folder of your game server.
2. Look for the "enable-rcon=" and set it to "enable-rcon=on". If the option does not exist, you can create it.
3. Look for the "rcon.password=" and set it to "rcon.password=somerandomlongpassword". Replace the text with a random password, from a random generator. Copy this password in a file, because you'll need it in a next step. Make sure to keep this password secure, as it can execute commands in your console.
4. Go to the servers section by going to: \[ CraftingStore Dashboard -&gt; Sidebar -&gt; Webstore -&gt; Servers \]
5. Click "Create server" in the right top of the page.
6. Fill in the decired server name, your server IP (numeric, like 129.333.22.44) and port. The port is your normal server port, the default port for pocketmine is 19132. You can find the configured port in the server.properties file ("rcon-port")
7. Enter your RCON password that you've just configured.
8. Click "Create server" and restart your game server to enable RCON.

- - - - - -

##### Rust &amp; Hurtworld

You can use our uMod plugin for the Oxide/uMod platform.

1. Create a new server ([click for guide](/general/how-to-create-a-server))
2. Download the plugin: ([click for download](https://umod.org/plugins/crafting-store))
3. Restart the server, or load the plugin.
4. Open the config file, located at the default location for Oxide/uMod plugins.
5. Add your API key, as created at step one.
6. Reload the CraftingStore plugin

**Note**: Our uMod/Oxide plugin does not support our "Instant payment processing" feature, executing commands can take up to 5 minutes. If you want to have instant payment processing (so your users don't have to wait 5 minutes to get their items), you'll need to use RCON instead. RCON is a well known way to execute console commands in many game servers, including, but not limited to: Oxide, Minecraft, Hurtworld, Source games (Gmod for example). There are lots of tutorials to set this up. You only need to enter your credentials at the CraftingStore dashboard, and you're set.
