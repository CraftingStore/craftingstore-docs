#Minecraft: Bedrock Edition

For Minecraft Bedrock edition, we use RCON. A simple way of sending commands to the console.

### How to set it up?
1. Enable RCON on your server, to do this, first open your "server.properties" in the first folder of your game server.
2. Look for the "enable-rcon=" and set it to "enable-rcon=on". If the option does not exist, you can create it.
3. Look for the "rcon.password=" and set it to "rcon.password=somerandomlongpassword". Replace the text with a random password, from a random generator. Copy this password in a file, because you'll need it in a next step. Make sure to keep this password secure, as it can execute commands in your console.
4. Go to the servers section by going to: \[ CraftingStore Dashboard -&gt; Sidebar -&gt; Webstore -&gt; Servers \]
5. Click "Create server" in the right top of the page.
6. Fill in the decided server name, your server IP (numeric, like 129.333.22.44) and port. The port is your normal server port, the default port for pocketmine is 19132. You can find the configured port in the server.properties file ("rcon-port")
7. Enter your RCON password that you've just configured.
8. Click "Create server" and restart your game server to enable RCON.

