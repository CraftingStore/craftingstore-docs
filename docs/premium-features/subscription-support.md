#Subscription support

Our subscription feature allows you to charge your players automatically every day, week, month, or year. This article explains the functionality and how you can use it. **Note: This feature requires the Silver plan!**

### Supported payment methods

**PayPal Business** - To use Subscriptions you need to have a PayPal business account, and you need to use our PayPal business integration ([**click here for set-up guide**](/payment-gateways/how-to-set-up-paypal-using-the-api-business)). **The Legacy PayPal integration will not work.**

### How do I enable subscriptions on a package?

You can enable it from the package editor, open/create a package and go to the "Advanced" tab.

[![lYqCTegdjh.png](/img/premium-features/subscription-support/zx9f13jhfp.png)](/img/premium-features/subscription-support/2d7yhsorlu.png)

### How do I see active subscriptions?

You can view all active subscriptions on the CraftingStore dashboard, you can manage them directly from your PayPal account. Our system will get notified about updates. So if you cancel a subscription, it will get cancelled on our side as well.

[![zByOMyOLpR.png](/img/premium-features/subscription-support/hshy1hpag1.png)](/img/premium-features/subscription-support/ctokhhd1yj.png) 

### How can my buyers cancel their subscription?

They can do so directly from their own PayPal account. When they click one of your payments, they will see a link to manage the subscription &amp; cancel it. You can also do this from your side.

### Common issues

**I do not see the "subscribe" button when viewing the package** - Please make sure that your template is ready for subscriptions, these are the required changes: [**https://github.com/CraftingStore/Templates/commit/5277244614c7bb0bb2209e8e6502e237e14a7c16**](https://github.com/CraftingStore/Templates/commit/5277244614c7bb0bb2209e8e6502e237e14a7c16)

**My payment fails** - Only PayPal business (using the API gateway) is supported.