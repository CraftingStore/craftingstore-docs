#Discord payment notification

Gold stores can set-up discord notifications. When you receive a payment, we'll send you a message using Discord's webhooks.

### How do I set this up?
1\. Open your discord server settings.   
2\. Click "webhooks". You need to have permission for this on the server.  
3\. Click "Create webhook", and give your bot a name.   
4\. Discord will create a link for you, you'll find it in the "webhook URL" box.   
5\. Click "copy" behind this link, and open your CraftingStore dashboard.   
6\. Click "profile" in the navigation bar, on the right top. And open "Notification settings".   
7\. Enable Discord notifications and paste your webhook URL in the "Webhook URL" box.   
8\. You're set!

### Variables you can use
*{packageName}* = The name of the package  
*{gateway}* = The payment method used  
*{player}* = The name of the player  
*{price}* = The price of the payment  
*{referredBy}* = The player that referred them  
*{uuid}* = The UUID/ID of the player (MC UUID or steamID)   
*{discordId}* = The player's Discord user ID  
*{discordName}* = The player's Discord user name  

Any new donation will trigger this webhook and sent the message to the selected channel.
