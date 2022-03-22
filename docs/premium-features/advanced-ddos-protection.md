#Advanced DDoS Protection

Coming soon: This feature is currently "Work in progress". We expect to release it soon!

For stores on our Platina plan we use Cloudflare's DDoS Protection (always-on).

### How does it work?
For Platina stores we use Cloudflare's network to protect your store against the biggest DDoS attacks. It does not matter if you use Cloudflare yourself or not.

### What if I used Cloudflare already?
Then nothing will change, if you use Cloudflare yourself, there is no need for us to manage it through our account as we can do that already through your account.

### What if I do not use a custom domain?
Free, Silver, and Gold stores use "on-demand" protection for stores on our domain (e.g. example.craftingstore.net), mening that we will activate protection once a store receives too much traffic. Platina stores use always-on protection. They are always behind Cloudflare's network, if they are under attack or not.

### What if I'm not on Cloudflare?
We use Cloudflare's SSL for SaaS to protect external hostnames like yours. You don't need to switch your nameservers to Cloudflare, just the store record like you would do on our other plans.

### What is "always-on"
Always-on means that traffic will always pass through filtering infrastructure, in this case, Cloudflare's network. On-demand means that we analyze the traffic comming on to our servers, and once we notice that your store receives a DDoS attack, we'll put it behind a specialized DDoS Protection provider. This might mean that the store will be slow, or offline for a few minutes while protection kicks in if the attack is very big. This is not a consern on always-on systems.
