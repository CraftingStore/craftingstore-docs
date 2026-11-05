# Realtime payments

Silver stores and up will use our new real-time socket connection system to get instant (real-time) payments.  

### How does it work?
When you start the server, we'll set-up a real-time socket connection between your Minecraft server and CraftingStore.net. Instead of polling the CraftingStore API on set intervals, we'll send a message to your server when someone makes a payment. This way your server will poll the required commands from our API the second the donation gets though.   

### How fast is this system?
It depends on the payment providers, when PayPal, for example, confirms the payment, we'll send the message within 5 seconds. Most of them process the payment within 20 seconds.  

### How do I enable this feature?
It's enabled by default when you start the server, and we detect that it's premium the feature will be enabled.

### On what server types does it work?
Currently only on our Spigot, BungeeCord, Sponge and RCON server types. It does not work for uMod or Databases.