#Always-On DDoS Protection

For stores on our Platinum plan we use Cloudflare's DDoS Protection (always-on). On all other plans we use a mix of providers and services depending on the state of the domain (e.g. under attack or not).

### What does "Always-On" mean?
There are two ways to protect systems, you can either use on-demand protection or always-on protection. 

**On-demand protection**: This means that we are looking at the request rate, and once your store receives a DDoS attack, we'll move it behind a DDoS Protection provider.

**Always-On Protection**: This protection is always, active, actively filtering requests, blocking bad bots, and making sure that as little bad traffic as possible will reach the store.

### What do you use for the protection?
We use Cloudflare to protect all stores on our Platinum plan, no matter if you are actively under attack or not. Cloudflare operates one of the biggest networks in the world and can take on the biggest attacks. Sometimes they leak traffic (as it is very hard for a big network to see some attacks, as they might only receive a few requests per server due to their sheer size). So we have an additional system that will push dynamic rules to the Cloudflare edge when your store is leaking requests. No action required from your end.

### Special Load balancers
Stores on our Platinum plan use our special load balancers that are only accessible through Cloudflare's network. These servers only require connections from Cloudflare and can handle a lot more requests every second because they can skip a few verification steps.

### Types of stores
Depending on how you use your store, we have several paths to take. For example, for stores on our domain, we can switch on Cloudflare's protection for a specific store when under attack. But this is not possible to do for domains that are external to ours. So we use different systems depending on the store.

#### CraftingStore domain
When you use our domain for your store, we will put it behind Cloudflare all the time (always-on) instead of only when attacked (on-demand). This will make sure that your store receives the best protection possible.

#### External domain not on Cloudflare
**Note**: External domain protection is currently in active development. It will be released shortly!

When you use a custom domain and you are not using Cloudflare yourself, we will pass your store through Cloudflare using Cloudflare's SSL for SaaS. This means that Cloudflare will protect your store against DDoS attacks.

#### External domain on Cloudflare
When you use Cloudflare yourself, this feature won't benefit you, as you already receive their protection & our monitoring + auto-response. For stores that use Cloudflare, we require you to give us access to the Firewall section of your domain so we can push dynamic rules to Cloudflare's edge when traffic is leaking. No matter your plan, this process is the same.

### Important notes
1) When you use a custom domain that is not on Cloudflare, you are using a special DNS record that we cannot change when your plan expires, or when you are downgrading. If you ever want to stop usign the Platinum plan but keep the store running, you'll need to manually go to the domains section and move to the default protection. We will keep your store on our "Always-On Protection" for two weeks after your store expires, after that point we will revoke it. If you haven't moved your domain to our normal protection before that time, your domain will stop work.
