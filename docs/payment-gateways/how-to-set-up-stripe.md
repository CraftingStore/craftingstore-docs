#How to set-up Stripe

Stripe is a payment gateway that can be used for Creditcards and various other payment methods. Setting up Stripe is pretty easy.

1\. Create your Stripe account, you can do so from their website (stripe.com)  
2\. Copy your publishable key &amp; secret key, and paste them into the Stripe section on the gateways tab (CraftingStore dashboard -&gt; Payments -&gt; Gateways)  
3\. Now you are ready to accept Stripe payments

### Chargeback handling

CraftingStore has the ability to execute commands when a chargeback gets through. To make use of this, you'll have to configure a webhook at Stripe. The base implementation works without this, but chargebacks wont.

1\. Go to Stripe -&gt; Dashboard -&gt; Developers -&gt; Webhooks  
2\. Click "Add Endpoint"  
3\. Enter the following endpoint: (https://payments.cloudprotected.net/v1/callback/stripe)  
4\. Select the following event: ``charge.dispute.created``  
5\. After creating find the "Signing secret" at the webhook that you just created and copy & paste it into the CraftingStore dashboard under [ Payments -> Gateways -> Stripe ].  
6\. Now we will be notified of new disputes, and thus we will notify your server, and execute the chargeback commandss.
