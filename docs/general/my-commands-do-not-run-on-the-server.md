#My commands do not run on the server

If the commands on your server do not run, there are various reasons for why this is, follow the steps below.

### Command prefix
You should not use a slash (/) in front of the command, the command `/say test` has to be configured like `say test`.

### Check plugin
Make sure that the plugin works, try to run /craftingstore (/csb on bugneecord) to see if the plugin responds.

### Check console
The plugin will give information about its status, it will tell you in the console (when it starts) if it worked as expected and if the server key is valid. If the plugin fails to connect or if the key is not valid, it will tell you in the console.

### Check server
Every server needs to communicate using our API, you can get the key from \[ CraftingStore Dashboard -&gt; Servers \]. Make sure that you actually configured the plugin to connect.

Also when two servers use the same key, they will both fail to work. If you run a BungeeCord network, every server needs it's own key as well.

### Console commands
Some commands will not run in the console, this includes commands that are not "real", like commands from MyCommand. These will not work with CraftingStore. This will only be a tiny fraction of your commands.

### Create a ticket
To make the process as fast as possible, we'll need some information, as the steps below did not solve the issue for you. Please share with us: 
\- Enable debug mode ([more info on that here!](/plugin-help/how-to-enable-debug-mode))  
\- Share all messages that start with \[CraftingStore\] using a service like hastebin.com (share the link)  
\- Share the exact server version; Spigot 1.15.x build x  
\- Share the java version of your server  
\- Share any steps you took to install the plugin, so we can figure out what went wrong.  
  
Debugging issues with commands can be hard, we have no easy way of telling you what went wrong, we'll need to figure it out with you. Every server set-up is different, so please be as as complete as possible. Just creating a ticket with "my commands do not run" is not helpful.
