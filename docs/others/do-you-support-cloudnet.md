# Do you support CloudNet?

Cloudnet is a system that can help manage your network. You can use it with CraftingStore, but not with a direct integration. This guide explains how.

##### Requirements

\- You should already have an active network running on the CloudNet software  
\- Your set-up must include a proxy server that we support (e.g. Bungee, Velocity)

##### Information

We are going to use the "/cloudnet" command to take care of the integration, this command allows you to sent commands from your proxy (bungee/velocity) to the CloudNet master console. And this master console will allow you to run commands on other servers.

##### Steps

1\) Install the CraftingStore plugin on your proxy (Bungee/Velocity) like you should install it on any normal server. And configure it (**[click here for our general set-up guide](/plugin-help/how-to-install-the-plugin)**)

2\. Now that the plugin is loaded &amp; connected, you can configure the packages on craftingstore.net. The commands are simple, you can use CloudNet's command, here are some examples:
```
# Running commands on your Lobby server (from the Proxy, through CloudNet)
cloudnet service Lobby-1 *command to run on your lobby*

# Running commands on your proxy itself
*command to run on your proxy*

# Giving someone a rank on CloudNet's permissions system (needs to be installed)
cperms user {player} group set GroupName
```

Using CloudNet is pretty straightforward, the only big difference is that you don't need to install our plugin on all of your servers, just on the Proxy (bungee/velocity) and use CloudNet to dispatch the commands to your other servers within the network.