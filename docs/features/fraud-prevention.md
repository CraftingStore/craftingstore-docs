#Fraud Prevention

Fraud Prevention will help you protect against fraudulent payments, please read the whole article so you know exactly what to expect and what not to expect.

### BETA!
Our fraud prevention is currently in beta, we have seen a lot of chargebacks happening in the years that we've existed, and utilize that data to protect stores against known abusers. We are planning on adding other risk factors in the future, like taking into account known proxies or VPNs.

### What is fraud prevention?
The feature will check the buyer before they start the payment process, we will calculate a "risk score" for this specific user based on their purchase history on our entire platform. 

### Does this mean that I do not have to deal with chargebacks?
It does not, but it does lower the risk of getting them. As CraftingStore is not your payment provider (see: [**How do payments work**](/payment-gateways/how-do-payments-work)) we cannot handle chargebacks on your behave, but we can lower the risk by blocking known buyers that chargeback. 

### How can I discourage buyers from doing a chargeback?
With our fraud prevention system, a chargeback towards one store will increase the buyer's risk score across our entire platform. So if they do a chargeback on your store, they might not be able to buy anything on any other store hosted by us. They will effectively be blocked globally and have to ask the store owner to whitelist them.

### How do I enable this feature?
You can enable it by going to [ Webstore -> Fraud Prevention ].

### Can I whitelist users?
Yes! You can go to [ Webstore -> Fraud Prevention -> Whitelisted users ]. You can whitelist them by name or UUID.

### Different modes
There are different modes, we'll describe them here.

#### "Off"
This mode is self-explanatory, it means that we do not do any blocking.

#### "On"
With this mode (any plan) we will calculate a risk score based on the user's history. We will lower the risk score if the buyer has completed (no chargeback) payments.

#### "Strict" - Silver+
With this mode, we will calculate a risk score based on the user's history, but we will not deduct scores for completed payments, this might cause false positives because a player might have an issue with a specific server where a chargeback was their only option. With our strict mode, we consider any buyer that did a chargeback on our platform as a "chargeback risk" thus blocking them.
