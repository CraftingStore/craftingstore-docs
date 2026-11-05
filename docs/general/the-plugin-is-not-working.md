# The plugin is not working

If the plugin is not working correctly you can check several things to find out what is wrong, we explained some possible problems, and solutions.

**The plugin does not load**  
The plugin works on Spigot, BungeeCord, Sponge, and Velocity, make sure that your server is running any of these pieces of software.

When the server is the correct software, look for messages from CraftingStore. Does the plugin give out any messages in the console? Our plugin states that it has been enabled. If the plugin does give messages, but still is not working, see the next topic.

**The plugin does not work**  
Our plugin requires a few steps before being ready, it needs to have a store linked and will not do anything without this. You can look at this ([click](/general/how-to-create-a-server)) guide for information on installing the plugin.

**Payments are not getting through**  
Does the payment show up at the CraftingStore panel? If it does, please try to run "/craftingstore reload". If this does run correctly and the payments are getting through, please try to disable all other plugins, there might be conflicts.

**The /buy command does not work.**  
We have an inventory menu on our Spigot and Sponge plugins, if you are running proxy software like BungeeCord, then the "problem" is that we do not offer this menu, you can resolve it by installing the plugin on your Game server itself.

If you are running a game server, then another plugin might override our /buy command, some plugins use the same command. If you see an error message, it is most likely not ours, we do not show any errors for the menu, at any point. Please make sure that there are no conflicting plugins.