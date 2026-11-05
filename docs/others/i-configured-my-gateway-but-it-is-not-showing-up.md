# I configured my gateway, but it is not showing up

It might happen that you've configured a payment method, but it does not show in your store. This can have various reasons. Please check the following things before opening up a support ticket;

**1. Make sure that the gateway is actually configured &amp; enabled.**

Check \[ Payments -&gt; Gateway \] and click "Set-up gateway name". Make sure that the credentials are configured correctly here. And that it is set to "Enabled". To update the gateways you'll have to click "Update Gateways", just clicking "close" will only hide the box, not save your changes.

**2. Make sure you have the gateway enabled for your package(s)**

It is possible to disable gateways for specific packages, make sure that the gateway is enabled here as well. You can go to \[ Webstore -&gt; Packages -&gt; Gateway tab \]. Make sure the gateway you're trying to enable is set to "On" here.

**3. Make sure your template has support for this gateway.**

Newer payment gateways may not be in your template just yet (custom template only). You can check this by opening up the "basket.twig" file and looking for the name of your gateway. There should be a button for every gateway, for example: "*&lt;input type="radio" name="gateway" value="mollie" required&gt;*" This is the button that should be there for Mollie. Look for the "value". If your gateway is missing, you can either contact the designer, update your template, or modify it yourself by taking a look at our base template ([click](https://github.com/CraftingStore/Templates/blob/master/default/basket.html)).

If you still cannot see the gateway after making sure that the above steps have been taken, feel free to create a support ticket, so we can take a look for you.