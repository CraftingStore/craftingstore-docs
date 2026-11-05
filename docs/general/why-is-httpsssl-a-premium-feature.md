# Why is HTTPS/SSL a premium feature?

Sometimes we get asked why HTTPS is a premium feature, so this article is created to explain. But first, we need to clear some things up: HTTPS is not premium-only, in the sense that we only allow it on premium stores;

\- You can use our domain (craftingstore.net) e.g. example.craftingstore.net for your store. Https is included on any plan. Including the free one.  
\- If you want us to handle the certificate (HTTPS) on your store, on your domain domain (e.g. store.example.com), then we require the premium plan. We'll get to why in a bit.  
\- If you want HTTPS on our free plan, and you do not want to use our domain, then you can use Cloudflare. Cloudflare is a DDoS mitigation company/CDN/Reverse proxy. They stand in front of our webserver, so they can handle the HTTPS (TLS offloading). We even have an article explaining how to use Cloudflare for HTTPS on your free store ([click here for the article](/general/set-up-ssl-certificates-for-your-store)).

##### Why is it a premium feature on custom domains?

Sometimes we get messages like "why make HTTPS a premium feature? Its bad for security". When we get a message like that, we kindly explain that they can either; Use our domain (HTTPS on every plan, for free), or use Cloudflare (while linking to the article).

But why is it a premium feature? We are one of the few donation platforms that allows custom domains on the free plan, and due to this, lots of store owners use their custom domain. And its due to this that we cannot offer it for everybody. We use Lets Encrypt to issue the certificates, and they have rate-limits. We may only request a specific amount of certificates. Sometimes these requests fail (due to a custom-domain having a DNS record that blocks Lets Encrypt or something like that). This causes us to reach the limits. We're hosting around 100.000 stores as the time of writing, if a huge part of these stores uses a custom domain (or even sets up a store and forgets about it) we'll still have to manage their certificate (they expire every 90 days, so we'll have to renew them). And we have to load all of those certificates into our load balancers. Having huge amounts of certificates in there might cause slowdowns.

So the main reason is; If we'd request certificates for everyone, we might hit rate-limits, and we may not be able to request new certificates for about a week. Causing massive issues to new stores. And our load balancers may become slower, we're getting DDoS attacks every week, and our load balancers are our first line of defence. If they have to look through thousands of certificates every request, then it would be very, very expensive for us to take on DDoS attacks.

This also explains why we do offer it for free on our domain (craftingstore.net). We only need one certificate (\*.craftingstore.net) and we have all sub-domains covered. No rate-limits are being hit. It does not matter if we have 10, or 1000 sub-domains on there, its one certificate.

We're not doing it to get users to buy our premium services (altho we would like it if you did), we're all for security, that is why we explain how you can use Cloudflare. They are a massive multi-million dollar company, and are their own CA (Certificate Authority) so they don't have these issues. There are only a handful of companies in the world that can even do that.

We hope this explains why HTTPS/TLS/SSL is a paid-for feature on custom domains.