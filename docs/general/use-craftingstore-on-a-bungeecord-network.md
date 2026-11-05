# Use CraftingStore on a BungeeCord network

Our plugin works for Spigot, BungeeCord, Sponge, CraftBukkit, and more to come, but if I'm running my BungeeCord server network with Spigot backend servers, how do I need to install CraftingStore? Do I need to install the plugin on my BungeeCord, on all my Spigot servers? Both? Well, it depends on your requirements, let's look at the options.

When you're using a local permissions plugin, on the Spigot server like PermissionsEx, and you are required to give players their ranks on the Spigot server, then you will need to install the CraftingStore plugin on any and all Spigot servers where this rank should be given. Every server should have its own server in our dashboard. If you use the same key multiple times, then our system will block your server from connecting.

For example; If you're selling network-wide ranks, you will have to install the plugin on all of your Spigot servers, and you don't need to have the plugin on the BungeeCord proxy itself, but if for example, you want to alert (BungeeCord alert) the announcement that the player bought the package, you can install the plugin on the BungeeCord proxy as well, and make it run the "alert {player} bought the rank" command to make this proxy wide. Also, if you are handling your permissions from the Bungeecord (using something else to sync it all over your network) then you can simply install our plugin on your Bungee proxy, and run the command there.

  
On the other hand, if you're selling something specific on just one of the servers in the network, like McMMO points in Factions, you can only install the plugin at the Factions server (assuming you don't require any other ranks, like network-wide ranks)

We hope this makes it clear if any questions remain, please don't hesitate to create a support ticket, so we can sort it out for you.