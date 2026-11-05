# How to set-up Stripe

Stripe is a payment gateway that can be used for Creditcards and various other payment methods. 

1\. Create your Stripe account, you can do so from their website (stripe.com)  
2\. Go to the "developers" section, you can find it at the bottom left on the Stripe Dashboard.  
3\. Click "Api Keys"  
4\. Create a new restricted key by clicking "Create restricted key".   
5\. Choose "Powering an integration you built" & click next.  
6\. Choose "Choose your own" - We only need one permission, any of the defaults grant too much access.  
7\. Give your key a name (e.g. CraftingStore)  
8\. Search for "checkout" in the search box and find: "Checkout Sessions". Grant write permission.   
8\. Click "Create key".   
9\. It will now show the key, in a new tab go to the CraftingStore dashboard [ Payments -> Gateways ] and click "Set-up Stripe".   
10\. Enter the newly generated key in the "Secret key" field.   
11\. Put the "Publishable key" that is already there on Stripe in the Publishable key field on CraftingStore.    
12\. Make sure to set Stripe to Enable = Yes and click close.   
13\. The popup will go away, now click "Update gateways" at the top or bottom of the page to save the settings.  

### Chargeback handling

CraftingStore has the ability to execute commands when a chargeback gets through. To make use of this, you'll have to configure a webhook at Stripe. The base implementation works without this, but chargebacks wont.

1\. Go to Stripe -&gt; Dashboard -&gt; Developers -&gt; Webhooks  
2\. Click "Add Endpoint"  
3\. Enter the following endpoint: (https://payments.cloudprotected.net/v1/callback/stripe)  
4\. Select the following event: ``charge.dispute.created``  
5\. After creating find the "Signing secret" at the webhook that you just created and copy & paste it into the CraftingStore dashboard under [ Payments -> Gateways -> Stripe ].  
6\. Now we will be notified of new disputes, and thus we will notify your server, and execute the chargeback commands.
