#How to set up Coinbase

To set-up Coinbase Commerce to accept cyrpo on your store, follow the steps below.
  
1\. Create an account at [Coinbase Commerce](https://commerce.coinbase.com/)  
2\. Complete the steps as described.    
3\. Go to [ Settings -> API Keys ] on Coinbase and create one. Enter this key at the CraftingStore gateways page [ Payments -> Gateways ].   
4\. Go to [ Settings -> Webhook subscriptions ] on Coinbase and add click "Add an endpoint". Enter the following URL: **https://api.craftingstore.net/callback/coinbase**   
5\. Click "Details" for the webhook that you just created, and click "Edit" behind "Events". Make sure to only select "charge:confirmed", others are ignored.   
6\. Click "Show shared secret" and copy it to the gateways page at CraftingStore [ Payments -> Gateways ].  
7\. You're set, you can now accept payments through Coinbase Commerce.  
