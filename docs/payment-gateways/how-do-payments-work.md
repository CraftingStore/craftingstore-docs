#How do payments work

CraftingStore integrates with third-party payment gateways that will process the payments. CraftingStore will get notified by those payment gateways, confirm the payments, and run the configured actions.

### How is money processed?
Payments flow from the buyer directly to you. Not to us. At our payments gateway page [ Payments -> Gateways ] you can configure a bunch of payment providers. Buyers will buy items through them. The money will go into your accounts at those payment gateways and not to CraftingStore.

### What are payment gateways?
Payment gateways are companies that can process payments on your behave. For example, Stripe is a well known payment gateway. You can accept Credit-card, Bank Transfer, Checks, Alipay, iDeal, Giropay, Sofort, and a bunch more through Stripe. Stripe will take care of everything and they will pay you every month or so (you can select how often you want to get paid out). There are also companies like PayPal, those are both the payment method and gateway. Money will go from the buyer directly into your PayPal account. We are never the middleman.

### So what gateway should I enable?
It depends on what you want. If you want to accept PayPal and Credit-cards you should enable PayPal and Stripe. Or PayPal and Mollie. There is some overlap in terms of payment methods.

### Why do you not process payments on my behave?
There are a few reasons for it, some are for our own liability, and others are for your security. Companies like PayPal and Stripe (multi-billon dollar companies) have all the certification and infrastructure required to accept payments. They are well protected, know about payment regulations around the globe, and see a lot of payments, so their fraud systems are well trained. If we'd process payments on your behave, we would be liable for any issues that may arise and we would have to deal with all chargebacks on our platform. Yes, it would be very lucrative for us to do, as we can charge a fee for every payment, but we are just not prepared to take the responsibility of processing the amount of money that flows through our platform - We've chosen to leave that to the big companies that have been doing it for decades with a great track-record.