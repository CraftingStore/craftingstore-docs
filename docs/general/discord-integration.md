#Discord integration

We offer the ability for packages to also give a user role on the Discord server

##### How do I configure my server?

1\. Invite our Discord bot to your server ([click here!](https://discordapp.com/oauth2/authorize?client_id=609778062292287514&scope=bot%20applications.commands&permissions=0) &lt;- To invite the bot)  
2\. Create a server from the dashboard ([by clicking here](https://dash.craftingstore.net/admin/servers/create)), and select the "Discord" server type.  
3\. Click "set-up" after creating the server.  
4\. Give the bot enough permissions, it needs to: assign roles and manage members. It also needs to be physically above the roles you are trying to give in the roles section. Or else it is not able to issue the roles.  
5\. Copy the provided command into your Discord server (example: **/registerserver yourtoken**)  
6\. You can now go to your packages and select the "Discord tab". Here you can set your roles.  
7\. Go to the "Basic" tab of the package, and select the Discord server as one of the servers. Users won't receive their e-mail if this option is not set.

##### How do players get their roles?

There are two ways that your players can use to get their roles, we'll describe both methods below.

**1) Automaticlly using Discord login on checkout.**

With this way, the can click "Login with Discord" on checkout, they authenticate with our application (the only access we need to your player's Discord accounts is "identity" so we get their ID, display name, and avatar.

From there, our bot will give the role automatically within one minute on the server. Nothing else is required.

**2) Claim command (old method)**

With the claim method, the users will have to do (/claimroles yourtoken) on your Discord server. They'll get this "claim code" by mail within the receipt mail. This is the legacy method that was used before the first option was possible. If the user does not click login with Discord, or if the box is not enabled in your template, then this method will be used.

##### How do I refresh/update my roles?

You can go to \[ Dashboard -&gt; Servers \]. From there you can click "Refresh roles". This will request it to update.

##### Common issues

***The Discord box does not exist?***  
\- The box is only visible when Discord roles have been configured for one of the packages in the basket.  
\- Your custom template might not yet have the Discord box, you can add it easily by adding the parts in green in the correct place in the "basket.twig" file: https://github.com/CraftingStore/Templates/commit/4e9d9adced233da45020f01b753f3eb76d1451d3
