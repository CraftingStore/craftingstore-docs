#How to set-up PayPal using the API (Business)

We offer direct PayPal integration into our platform, we have two types of integration; PayPal Legacy (for personal accounts) ([click here for the article](/payment-gateways/how-to-set-up-paypal-legacypersonal)). And this one, using the PayPal API. This integration allows us to have more control and offer more features (like Subscriptions). A PayPal business account is required, it will not work on personal accounts.

##### Getting your credentials &amp; setting it up

First, we need to create a "PayPal App client ID", and "PayPal App Secret". To do this, follow the steps;

1\. Go to the developers section of PayPal: 

2\. Click "My Apps &amp; Credentials" and click "Live".

[![6nVrxUH40W.png](/img/payment-gateways/how-to-set-up-paypal-using-the-api-business/lfgpfw46pj.png)](/img/payment-gateways/how-to-set-up-paypal-using-the-api-business/4jia1gky9x.png)

3\. Click "Create App" and name your app, we recommend you name it something like "CraftingStore" so you can find it later.

4\. Scroll down and make sure that at least the following options are enabled at "Live App Settings": "Accept payments" &amp; "Customer Disputes"

5\. Here you will find your Client ID and Secret (by clicking show). Now go to the CraftingStore dashboard \[ Sidebar -&gt; Payments -&gt; Gateways \] and click "Set-up PayPal".

6\. Select "PayPal API (Business)" and enter the credentials you created in the step before. Also make sure to select "Business" as the integration type.

[![XMqkmtW5xe.png](/img/payment-gateways/how-to-set-up-paypal-using-the-api-business/w1o6j3aer1.png)](/img/payment-gateways/how-to-set-up-paypal-using-the-api-business/w7gmab8ibo.png)

7\. Click "done" and click "Update gateways"

PayPal is now enabled, when the first transaction comes in, we will create a webhook within this app to notify us about payment/subscription updates.

### Common issues
##### I'm getting an error on checkout
Make sure that the credentials entered are valid. Also make sure that they are actually "Live" credentials. We are sending requests to the live version of PayPal to create your payment (so the user has to pay using their real account). Credentials meant for their testing version will not work.
